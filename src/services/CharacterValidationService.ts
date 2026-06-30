// CharacterValidationService — runs all validation checks on a Character.
//
// Returns an array of EntryValidationWarning. Warnings are non-blocking —
// the user can acknowledge them or override individual checks.
//
import type { Character } from '@/types';
import type { ClassEntry } from '@/types/classes';
import type { EntryValidationWarning } from '@/store/slices/characterEntrySlice';
import type { Ruleset } from '@/types/ruleset';
import type { DraftEidolon } from '@/types/eidolon';
import {
  CharacterTimelineService,
  type ECLTimeline,
  type DraftCharacterSnapshot,
} from './CharacterTimelineService';
import { PrerequisiteService } from './PrerequisiteService';
import { GameDataService } from '@/services/GameDataService';
import { EidolonPoolService, type EidolonDataIndex } from './EidolonPoolService';
import { lookupClassData, type ClassDataMap } from '@/utils/characterComputations';
import { exceedsPerSkillMax, getPerSkillMaxRanks, getTotalAvailableSkillRanks } from '@/utils/skillRanks';
import { isPrestigeCategory } from '@/data/classes/types';

// ---- Helpers ----

type WarnId = (prefix: string) => string;

function warn(
  id: string,
  section: EntryValidationWarning['section'],
  message: string,
  detail?: string,
): EntryValidationWarning {
  return { id, section, message, detail, isAcknowledged: false };
}

/** Creates a fresh ID generator scoped to a single validate() call. */
function makeWarnId(): WarnId {
  let seq = 0;
  return (prefix: string) => `${prefix}-${++seq}`;
}

// ---- CharacterValidationService ----

export class CharacterValidationService {
  /**
   * Run all validation checks against a Character.
   * Returns an array of warnings (empty = clean).
   */
  static async validate(
    character: Character,
    ruleset: Ruleset,
    classDataMap: ClassDataMap,
    eidolonDataIndex?: EidolonDataIndex,
  ): Promise<EntryValidationWarning[]> {
    const warnId = makeWarnId(); // scoped counter — safe under parallel calls and test isolation

    const timeline = CharacterTimelineService.buildTimeline(character, ruleset, classDataMap);
    const { totalHD } = timeline;

    const intMod = character.abilityScores.int.modifier;

    const [classPrereqWarnings, featPrereqWarnings, fcbWarnings] = await Promise.all([
      this.checkClassPrerequisites(character, ruleset, timeline, warnId, classDataMap),
      this.checkFeatPrerequisites(character, ruleset, timeline, warnId, classDataMap),
      this.checkFavoredClassBonuses(character, warnId),
    ]);

    const effectiveEidolonIndex = eidolonDataIndex ?? EidolonPoolService.buildIndexFromStaticData();

    return [
      ...this.checkIdentity(character, warnId),
      ...this.checkAbilities(character, totalHD, warnId),
      ...this.checkLevelIncrements(character, totalHD, warnId),
      ...classPrereqWarnings,
      ...featPrereqWarnings,
      ...this.checkTraitCount(character, ruleset, warnId),
      ...this.checkSkillRanks(character, totalHD, intMod, warnId, classDataMap),
      ...this.checkSpellcastingAdvancement(character, warnId, classDataMap),
      ...fcbWarnings,
      ...this.checkEidolons(character, effectiveEidolonIndex, warnId),
    ];
  }

  // ---- Identity ----

  private static checkIdentity(character: Character, warnId: WarnId): EntryValidationWarning[] {
    const w: EntryValidationWarning[] = [];

    if (!character.info.name.trim()) {
      w.push(warn(warnId('identity-name'), 'identity', 'Character name is required.'));
    }
    if (!character.info.race.name.trim()) {
      w.push(warn(warnId('identity-race'), 'identity', 'Race is required.'));
    }
    if (character.classes.classes.length === 0) {
      w.push(warn(warnId('identity-class'), 'identity', 'At least one class is required.'));
    }

    return w;
  }

  // ---- Abilities ----

  private static checkAbilities(
    character: Character,
    totalHD: number,
    warnId: WarnId,
  ): EntryValidationWarning[] {
    const w: EntryValidationWarning[] = [];
    const keys = ['str', 'dex', 'con', 'int', 'wis', 'cha'] as const;

    for (const key of keys) {
      const score = character.abilityScores[key];
      const base = score.base;
      const total = score.total;

      if (base < 1 || base > 30) {
        w.push(
          warn(
            warnId(`ability-range-${key}`),
            'abilities',
            `${key.toUpperCase()} base score ${base} is outside the valid range (1–30).`,
          ),
        );
      }
      // Covers all abilities including CON — no separate CON check needed below
      if (total <= 0) {
        w.push(
          warn(
            warnId(`ability-nonpositive-${key}`),
            'abilities',
            `${key.toUpperCase()} total is ${total} — ability totals must be at least 1.`,
          ),
        );
      }
    }

    return w;
  }

  // ---- Level increment slots ----

  private static checkLevelIncrements(
    character: Character,
    totalHD: number,
    warnId: WarnId,
  ): EntryValidationWarning[] {
    const w: EntryValidationWarning[] = [];
    const expected = Math.floor(totalHD / 4);
    const slots = character.levelIncrementSlots;
    const actual = slots.length;

    if (actual !== expected) {
      w.push(
        warn(
          warnId('levelinc-count'),
          'abilities',
          `Level increment slot count mismatch: expected ${expected} (HD ${totalHD}), found ${actual}.`,
          'Each 4 HD grants one +1 ability score increase.',
        ),
      );
    }

    const unassigned = slots.filter((s) => s.ability === null).length;
    if (unassigned > 0) {
      w.push(
        warn(
          warnId('levelinc-unassigned'),
          'abilities',
          `${unassigned} level increment slot${unassigned > 1 ? 's are' : ' is'} unassigned.`,
        ),
      );
    }

    return w;
  }

  // ---- Class prerequisites ----

  private static async checkClassPrerequisites(
    character: Character,
    ruleset: Ruleset,
    timeline: ECLTimeline,
    warnId: WarnId,
    classDataMap: ClassDataMap,
  ): Promise<EntryValidationWarning[]> {
    const w: EntryValidationWarning[] = [];

    for (const entry of character.classes.classes) {
      if (entry.prereqOverride) continue;

      const classData = lookupClassData(entry.name, classDataMap);
      if (!classData?.prerequisites) continue; // not a prestige class (or no prereqs defined)

      // Find the ECL at which this class was first taken
      const firstCheckpoint = timeline.checkpoints.find(
        (c) => c.decision.type === 'class' && c.decision.className === entry.name,
      );
      if (!firstCheckpoint) continue;

      // Get the snapshot BEFORE that ECL (the character state when the decision was made).
      // snapshotBeforeECL returns null at ECL 1 — no prior state means all prereqs are unmet.
      const snapshot =
        CharacterTimelineService.snapshotBeforeECL(
          character,
          firstCheckpoint.ecl,
          ruleset,
          classDataMap,
        ) ?? CharacterTimelineService.EMPTY_SNAPSHOT;

      const prereqs = classData.prerequisites;
      const unmet: string[] = [];

      // BAB
      if (prereqs.bab !== undefined) {
        const bab = snapshot.classes.baseAttackBonus[0] ?? 0;
        if (bab < prereqs.bab) {
          unmet.push(`BAB +${prereqs.bab} (have +${bab})`);
        }
      }

      // Skills
      if (prereqs.skills) {
        for (const { name, ranks } of prereqs.skills) {
          const key = name.toLowerCase().replace(/\s+/g, '_');
          const have =
            snapshot.skills[key]?.ranks ?? snapshot.skills[name.toLowerCase()]?.ranks ?? 0;
          if (have < ranks) {
            unmet.push(`${name} ${ranks} ranks (have ${have})`);
          }
        }
      }

      // Feats (by name — prestige prereqs list feat names, not IDs)
      if (prereqs.feats) {
        const featDefs = await Promise.all(
          snapshot.feats.feats.map((f) => GameDataService.getFeatById(f.featId)),
        );
        for (const featName of prereqs.feats) {
          const hasFeat = featDefs.some(
            (def) => def?.name.toLowerCase() === featName.toLowerCase(),
          );
          if (!hasFeat) {
            unmet.push(`Feat: ${featName}`);
          }
        }
      }

      // Spellcasting (heuristic parse)
      if (prereqs.spellcasting) {
        const result = this.checkSpellcastingPrereq(prereqs.spellcasting, snapshot, classDataMap);
        if (result === false) {
          unmet.push(prereqs.spellcasting);
        } else if (result === 'unknown') {
          w.push(
            warn(
              warnId(`class-spell-unknown-${entry.name}`),
              'classes',
              `${entry.name}: spellcasting requirement could not be auto-checked.`,
              `Requirement: "${prereqs.spellcasting}" — verify manually.`,
            ),
          );
        }
        // result === true → met, no warning
      }

      // Special (always soft-warn — can't auto-check)
      if (prereqs.special) {
        for (const req of prereqs.special) {
          w.push(
            warn(
              warnId(`class-special-${entry.name}`),
              'classes',
              `${entry.name}: special requirement cannot be auto-checked.`,
              `Requirement: "${req}" — verify manually.`,
            ),
          );
        }
      }

      if (unmet.length > 0) {
        w.push(
          warn(
            warnId(`class-prereq-${entry.name}`),
            'classes',
            `${entry.name}: prerequisite${unmet.length > 1 ? 's' : ''} not met at entry.`,
            unmet.join('; '),
          ),
        );
      }
    }

    return w;
  }

  /**
   * Check a prestige class spellcasting requirement string.
   * Returns true (met), false (not met), or 'unknown' (couldn't parse).
   */
  private static checkSpellcastingPrereq(
    requirement: string,
    snapshot: DraftCharacterSnapshot | null,
    classDataMap: ClassDataMap,
  ): boolean | 'unknown' {
    if (!snapshot) return 'unknown';

    // Pattern: "Ability to cast Nth-level arcane/divine spells"
    const match = requirement.match(/(\d+)(?:st|nd|rd|th)-level\s+(arcane|divine|psychic)/i);
    if (!match) return 'unknown';

    const spellLevel = parseInt(match[1], 10);
    const castingType = match[2].toLowerCase(); // 'arcane' | 'divine' | 'psychic'

    // Minimum caster level for a full-caster to access this spell level:
    // 1st → CL 1, 2nd → CL 3, 3rd → CL 5 … (spellLevel * 2 - 1)
    const minCL = spellLevel * 2 - 1;

    return snapshot.spellcasting.pools.some((pool) => {
      if (pool.baseCasterLevel < minCL) return false;
      const classData = lookupClassData(pool.baseClass, classDataMap);
      if (!classData) return false;
      const type = classData.spellcasting.type.toLowerCase();
      return type === castingType;
    });
  }

  // ---- Feat prerequisites ----

  private static async checkFeatPrerequisites(
    character: Character,
    ruleset: Ruleset,
    timeline: ECLTimeline,
    warnId: WarnId,
    classDataMap: ClassDataMap,
  ): Promise<EntryValidationWarning[]> {
    const w: EntryValidationWarning[] = [];

    for (const feat of character.feats.feats) {
      if (!feat.featId || feat.prereqOverride) continue;

      const featDef = await GameDataService.getFeatById(feat.featId);
      if (!featDef || featDef.prerequisites.length === 0) continue;

      // snapshotBeforeECL: prerequisites must be met *before* the feat is taken.
      // Returns null at ECL 1 (no prior state) — use EMPTY_SNAPSHOT so prereqs are
      // correctly evaluated as unmet rather than silently skipped.
      const snapshot =
        CharacterTimelineService.snapshotBeforeECL(
          character,
          feat.grantedAtLevel,
          ruleset,
          classDataMap,
        ) ?? CharacterTimelineService.EMPTY_SNAPSHOT;

      // Cast snapshot as Character — structurally compatible for the fields PrerequisiteService reads
      const result = await PrerequisiteService.checkPrerequisites(
        snapshot as unknown as Character,
        featDef,
      );

      if (!result.met) {
        w.push(
          warn(
            warnId(`feat-prereq-${feat.featId}`),
            'feats',
            `${featDef.name}: prerequisite${result.reasons.length > 1 ? 's' : ''} not met.`,
            result.reasons.join('; '),
          ),
        );
      }
    }

    return w;
  }

  // ---- Trait count ----

  private static checkTraitCount(
    character: Character,
    ruleset: Ruleset,
    warnId: WarnId,
  ): EntryValidationWarning[] {
    const maxTraits = ruleset.validationSettings.maxTraits;
    if (character.traits.traits.length <= maxTraits) return [];

    return [
      warn(
        warnId('trait-count'),
        'traits',
        `${character.traits.traits.length} traits assigned; maximum is ${maxTraits}.`,
        'Remove excess traits or confirm with your GM.',
      ),
    ];
  }

  // ---- Skill ranks ----

  private static checkSkillRanks(
    character: Character,
    totalHD: number,
    intMod: number,
    warnId: WarnId,
    classDataMap: ClassDataMap,
  ): EntryValidationWarning[] {
    const w: EntryValidationWarning[] = [];

    // Total available ranks across all classes (default 2/level if class unknown)
    const totalAvailable = getTotalAvailableSkillRanks(
      character.classes.classes.map((entry) => ({
        skillRanksPerLevel: lookupClassData(entry.name, classDataMap)?.skillRanksPerLevel ?? 2,
        level: entry.level,
      })),
      intMod,
    );

    // Sum assigned ranks — only from scalar Skill entries (not arrays or the totalRanks counter)
    const skillEntries = Object.entries(character.skills).filter(
      ([, v]) => typeof v === 'object' && v !== null && !Array.isArray(v) && 'ranks' in v,
    ) as [string, { ranks: number }][];

    const totalAssigned = skillEntries.reduce((sum, [, e]) => sum + e.ranks, 0);

    if (totalAssigned > totalAvailable) {
      w.push(
        warn(
          warnId('skill-total-over'),
          'skills',
          `Total skill ranks assigned (${totalAssigned}) exceeds available (${totalAvailable}).`,
        ),
      );
    }

    // Per-skill max = totalHD
    const perSkillMax = getPerSkillMaxRanks(totalHD);
    if (perSkillMax > 0) {
      for (const [skillKey, entry] of skillEntries) {
        if (exceedsPerSkillMax(entry.ranks, perSkillMax)) {
          w.push(
            warn(
              warnId(`skill-max-${skillKey}`),
              'skills',
              `${skillKey}: ${entry.ranks} ranks exceeds the per-skill maximum of ${perSkillMax} (total HD).`,
            ),
          );
        }
      }
    }

    return w;
  }

  // ---- Spellcasting advancement ----

  private static checkSpellcastingAdvancement(
    character: Character,
    warnId: WarnId,
    classDataMap: ClassDataMap,
  ): EntryValidationWarning[] {
    const w: EntryValidationWarning[] = [];

    for (const entry of character.classes.classes) {
      const classData = lookupClassData(entry.name, classDataMap);
      if (!classData) continue;
      if (classData.spellcasting.type === 'None') continue;
      if (!isPrestigeCategory(classData.category)) continue;

      // Prestige caster without advancement configured
      if (!entry.spellcastingAdvancement) {
        w.push(
          warn(
            warnId(`spell-advancement-${entry.name}`),
            'spells',
            `${entry.name} advances spellcasting but no advancement is configured.`,
            'Set spellcasting advancement on the Classes tab.',
          ),
        );
        continue;
      }

      // Check pointers at advancing levels only. Skip levels are allowed
      // to have empty pointers (they never contribute).
      const classById = new Map(character.classes.classes.map((c) => [c.id ?? c.name, c]));
      const adv = entry.spellcastingAdvancement;
      const spec = classData.advancesSpellcasting;
      if (!spec) continue;
      const isAdvancingLevel = (lvl: number): boolean =>
        spec.atLevels ? spec.atLevels.includes(lvl) : lvl >= 1 && lvl <= entry.level;

      // Get target's tradition from class data map.
      const getTradition = (target: ClassEntry | undefined): 'divine' | 'arcane' | null => {
        if (!target) return null;
        const t = classDataMap.get(target.name.toLowerCase())?.spellcasting.type;
        return t === 'Divine' ? 'divine' : t === 'Arcane' ? 'arcane' : null;
      };

      const missing: number[] = [];
      const wrongTradition: number[] = [];

      if (adv.mode === 'single') {
        adv.perLevel.forEach((p, i) => {
          if (!isAdvancingLevel(i + 1)) return;
          const target = classById.get(p.baseClassEntryId);
          if (!p.baseClassEntryId || !target) {
            missing.push(i + 1);
            return;
          }
          if (spec.tradition && spec.tradition !== 'chosen') {
            const t = getTradition(target);
            if (t !== spec.tradition) wrongTradition.push(i + 1);
          }
        });
      } else {
        adv.perLevel.forEach((p, i) => {
          if (!isAdvancingLevel(i + 1)) return;
          const arc = classById.get(p.arcaneBaseClassEntryId);
          const div = classById.get(p.divineBaseClassEntryId);
          if (!p.arcaneBaseClassEntryId || !arc || !p.divineBaseClassEntryId || !div) {
            missing.push(i + 1);
            return;
          }
          if (getTradition(arc) !== 'arcane' || getTradition(div) !== 'divine') {
            wrongTradition.push(i + 1);
          }
        });
      }

      if (missing.length > 0) {
        w.push(
          warn(
            warnId(`spell-advancement-missing-${entry.name}`),
            'spells',
            `${entry.name}: advancement target missing at level ${missing.join(', ')}.`,
            'Pick a base caster class for each prestige level on the Classes tab.',
          ),
        );
      }
      if (wrongTradition.length > 0) {
        w.push(
          warn(
            warnId(`spell-advancement-tradition-${entry.name}`),
            'spells',
            `${entry.name}: advancement target at level ${wrongTradition.join(', ')} has the wrong spellcasting tradition.`,
            'This class restricts which tradition of caster it can advance.',
          ),
        );
      }
    }

    return w;
  }

  // ---- Favored class bonuses ----

  private static async checkFavoredClassBonuses(
    character: Character,
    warnId: WarnId,
  ): Promise<EntryValidationWarning[]> {
    const w: EntryValidationWarning[] = [];
    const raceName = character.info.race?.name ?? '';
    for (const cls of character.classes.classes) {
      if (!cls.isFavoredClass) continue;
      const allocated = cls.favoredClassBonuses?.length ?? 0;
      if (allocated < cls.level) {
        w.push(
          warn(
            warnId(`fcb-unallocated-${cls.id}`),
            'classes',
            `${cls.name}: ${cls.level - allocated} favored class bonus${cls.level - allocated === 1 ? '' : 'es'} unallocated.`,
            'Assign each favored class level to HP, Skill, or an alternate on the Classes tab.',
          ),
        );
      } else if (allocated > cls.level) {
        w.push(
          warn(
            warnId(`fcb-overallocated-${cls.id}`),
            'classes',
            `${cls.name}: ${allocated - cls.level} favored class bonus${allocated - cls.level === 1 ? '' : 'es'} over-allocated (${allocated} selections for level ${cls.level}).`,
            'Reduce favored class bonus selections to match the class level on the Classes tab.',
          ),
        );
      }

      // Check that alternate selections respect minimumClassLevel
      const alternateSels = (cls.favoredClassBonuses ?? []).filter(
        (s) => s.type === 'alternate',
      ) as { type: 'alternate'; level: number; optionId: string }[];
      if (alternateSels.length > 0 && raceName) {
        const entries = await GameDataService.getFavoredClassBonuses(raceName, cls.name);
        const entryMap = new Map(entries.map((e) => [e.id, e]));
        for (const sel of alternateSels) {
          const entry = entryMap.get(sel.optionId);
          if (entry?.minimumClassLevel && sel.level < entry.minimumClassLevel) {
            w.push(
              warn(
                warnId(`fcb-minlevel-${cls.id}-${sel.level}`),
                'classes',
                `${cls.name}: alternate "${entry.shortName}" requires class level ${entry.minimumClassLevel} but was selected at level ${sel.level}.`,
                'Remove or reassign this favored class bonus selection on the Classes tab.',
              ),
            );
          }
        }
      }
    }
    return w;
  }

  // ---- Eidolons ----

  private static checkEidolons(
    character: Character,
    dataIndex: EidolonDataIndex,
    warnId: WarnId,
  ): EntryValidationWarning[] {
    const w: EntryValidationWarning[] = [];

    // Feat-without-summoner check: Extra Evolution feat is meaningless without
    // a Summoner class entry.
    const hasSummonerClass = character.classes.classes.some((c) =>
      /^summoner(?:\s|$|\()/i.test(c.name.trim()),
    );
    const extraEvolutionCount = character.feats.feats.filter(
      (s) => s.featId === 'extra-evolution',
    ).length;
    if (extraEvolutionCount > 0 && !hasSummonerClass) {
      w.push(
        warn(
          warnId('eidolon-extra-evolution-no-summoner'),
          'feats',
          'Extra Evolution feat requires the Summoner class.',
        ),
      );
    }

    for (const eidolon of character.eidolons) {
      const classEntry = character.classes.classes.find(
        (c) => c.id === eidolon.summonerClassEntryId,
      );
      if (!classEntry) {
        w.push(
          warn(
            warnId(`eidolon-orphan-${eidolon.id}`),
            'classes',
            `Eidolon '${eidolon.name}' references a summoner class entry that no longer exists.`,
            'Remove the eidolon or re-link it to a current class entry.',
          ),
        );
        continue;
      }

      const summonerLevel = classEntry.level;

      // ── Base form validity ──
      const baseForm = dataIndex.baseForms.get(eidolon.baseForm);
      if (!baseForm) {
        w.push(
          warn(
            warnId(`eidolon-unknown-form-${eidolon.id}`),
            'classes',
            `Eidolon '${eidolon.name}': unknown base form '${eidolon.baseForm}'.`,
          ),
        );
      } else if (baseForm.edition === 'unchained' && eidolon.edition !== 'unchained') {
        w.push(
          warn(
            warnId(`eidolon-form-edition-${eidolon.id}`),
            'classes',
            `Eidolon '${eidolon.name}': base form '${baseForm.name}' is Unchained-only.`,
          ),
        );
      }

      // ── Subtype validity ──
      if (eidolon.edition === 'unchained' && !eidolon.subtype) {
        w.push(
          warn(
            warnId(`eidolon-missing-subtype-${eidolon.id}`),
            'classes',
            `Eidolon '${eidolon.name}': Unchained eidolons require a subtype.`,
          ),
        );
      } else if (eidolon.subtype) {
        const subtype = dataIndex.subtypes.get(eidolon.subtype);
        if (!subtype) {
          w.push(
            warn(
              warnId(`eidolon-unknown-subtype-${eidolon.id}`),
              'classes',
              `Eidolon '${eidolon.name}': unknown subtype '${eidolon.subtype}'.`,
            ),
          );
        } else {
          if (
            subtype.requiredBaseForms.length > 0 &&
            !subtype.requiredBaseForms.includes(eidolon.baseForm)
          ) {
            w.push(
              warn(
                warnId(`eidolon-subtype-form-${eidolon.id}`),
                'classes',
                `Eidolon '${eidolon.name}': ${subtype.name} subtype requires base form ${subtype.requiredBaseForms.join(', ')}.`,
              ),
            );
          }
        }
      }

      // ── Aspect / Greater Aspect diversion cap ──
      const diverted = eidolon.aspectTransfer?.divertedPoints ?? 0;
      if (diverted > 0) {
        if (summonerLevel < 10) {
          w.push(
            warn(
              warnId(`eidolon-aspect-too-early-${eidolon.id}`),
              'classes',
              `Aspect transfer requires summoner level 10 (current: ${summonerLevel}).`,
            ),
          );
        } else if (summonerLevel < 18 && diverted > 2) {
          w.push(
            warn(
              warnId(`eidolon-aspect-over-cap-${eidolon.id}`),
              'classes',
              `Aspect diversion (${diverted}) exceeds the 2-point cap at summoner levels 10–17.`,
            ),
          );
        } else if (summonerLevel >= 18 && diverted > 6) {
          w.push(
            warn(
              warnId(`eidolon-greater-aspect-over-cap-${eidolon.id}`),
              'classes',
              `Greater Aspect diversion (${diverted}) exceeds the 6-point cap at summoner level 18+.`,
            ),
          );
        }
      }

      // ── Pool breakdown warnings (overspend, missing override reason) ──
      const breakdown = EidolonPoolService.computePool(character, eidolon.id, dataIndex);
      for (const msg of breakdown.warnings) {
        w.push(
          warn(
            warnId(`eidolon-pool-${eidolon.id}`),
            'classes',
            `Eidolon '${eidolon.name}': ${msg}.`,
          ),
        );
      }

      // ── Per-evolution prereq / level / stacking checks ──
      // Walk the evolutions and re-check each one against the eidolon state
      // *without* that evolution, to find any that are no longer legal.
      const evolutionWarnings = this.checkEidolonEvolutions(eidolon, summonerLevel, dataIndex);
      for (const [message, subId] of evolutionWarnings) {
        w.push(warn(warnId(`eidolon-evo-${eidolon.id}-${subId}`), 'classes', message));
      }
    }

    // ── Broodmaster shared-evolution level gates (once per class entry) ──
    // These checks apply to the class entry's sharedEvolutions, which is the
    // same list for every eidolon in the brood. Running them inside the eidolon
    // loop would emit one warning per eidolon instead of one per class entry.
    for (const classEntry of character.classes.classes) {
      if (!classEntry.summonerBroodmaster?.sharedEvolutions) continue;
      const summonerLevel = classEntry.level;
      for (const shared of classEntry.summonerBroodmaster.sharedEvolutions) {
        // Only 'evolution-large' exists as a data entry; Huge is a cost variant
        // of Large (6 ep at L13+), not a separate ID, so no separate check is needed.
        if (shared.evolutionId === 'evolution-large' && summonerLevel < 8) {
          w.push(
            warn(
              warnId(`eidolon-brood-large-${classEntry.id}`),
              'classes',
              `Broodmaster shared Large evolution requires summoner level 8 (current: ${summonerLevel}).`,
            ),
          );
        }
      }
    }

    return w;
  }

  private static checkEidolonEvolutions(
    eidolon: DraftEidolon,
    summonerLevel: number,
    dataIndex: EidolonDataIndex,
  ): Array<[message: string, subId: string]> {
    const results: Array<[message: string, subId: string]> = [];
    // Re-check each selection as if re-adding it to an eidolon minus itself.
    // Gives the real prereq / level / stacking reason when a selection is now
    // illegal (e.g. user removed the prereq chain).
    for (let i = 0; i < eidolon.selectedEvolutions.length; i++) {
      const sel = eidolon.selectedEvolutions[i];
      const def = dataIndex.evolutions.get(sel.evolutionId);
      if (!def) {
        results.push([
          `Eidolon '${eidolon.name}': unknown evolution '${sel.evolutionId}'.`,
          `unknown-${i}`,
        ]);
        continue;
      }
      const eidolonMinusSelection: DraftEidolon = {
        ...eidolon,
        selectedEvolutions: eidolon.selectedEvolutions.filter((_, idx) => idx !== i),
      };
      const result = EidolonPoolService.canSelectEvolution(
        sel.evolutionId,
        eidolonMinusSelection,
        summonerLevel,
        Number.POSITIVE_INFINITY, // ignore pool budget here; overspend surfaces via breakdown warnings
        dataIndex,
        sel.metadata,
      );
      if (!result.allowed && result.reason) {
        results.push([`Eidolon '${eidolon.name}': ${result.reason}.`, `${def.id}-${i}`]);
      }
    }
    return results;
  }
}
