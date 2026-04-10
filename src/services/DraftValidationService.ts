// DraftValidationService — runs all validation checks on a CharacterDraft.
//
// Returns an array of EntryValidationWarning. Warnings are non-blocking —
// the user can acknowledge them or override individual checks.
//
// NOTE: Uses a local minimal Ruleset type until PR #49 merges.
// After rebase onto post-#49 main, replace with: import type { Ruleset } from '@/types/ruleset';

import type { CharacterDraft } from '@/types/characterDraft';
import type { EntryValidationWarning } from '@/store/slices/characterEntrySlice';
import type { Character } from '@/types';
import { DraftStateResolver, type ECLTimeline } from './DraftStateResolver';
import { PrerequisiteService } from './PrerequisiteService';
import { getFeatById } from '@/data/feats';
import {
  lookupClassData,
  abilityTotal,
  abilityModifier,
} from '@/utils/characterComputations';

// Minimal Ruleset shape — only the fields DraftValidationService needs.
// Replace with the real Ruleset import after PR #49 merges.
type Ruleset = {
  optionalRules: { fractionalBABSaves: boolean };
  validationSettings: { maxTraits: number };
};

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

// ---- DraftValidationService ----

export class DraftValidationService {
  /**
   * Run all validation checks against a CharacterDraft.
   * Returns an array of warnings (empty = clean).
   */
  static validate(draft: CharacterDraft, ruleset: Ruleset): EntryValidationWarning[] {
    const warnId = makeWarnId(); // scoped counter — safe under parallel calls and test isolation

    const timeline = DraftStateResolver.buildTimeline(draft, ruleset);
    const { totalHD } = timeline;

    const intTotal = abilityTotal(draft.abilities.int);
    const intMod = abilityModifier(intTotal);

    return [
      ...this.checkIdentity(draft, warnId),
      ...this.checkAbilities(draft, totalHD, warnId),
      ...this.checkLevelIncrements(draft, totalHD, warnId),
      ...this.checkClassPrerequisites(draft, ruleset, timeline, warnId),
      ...this.checkFeatPrerequisites(draft, ruleset, timeline, warnId),
      ...this.checkTraitCount(draft, ruleset, warnId),
      ...this.checkSkillRanks(draft, totalHD, intMod, warnId),
      ...this.checkSpellcastingAdvancement(draft, warnId),
    ];
  }

  // ---- Identity ----

  private static checkIdentity(draft: CharacterDraft, warnId: WarnId): EntryValidationWarning[] {
    const w: EntryValidationWarning[] = [];

    if (!draft.name.trim()) {
      w.push(warn(warnId('identity-name'), 'identity', 'Character name is required.'));
    }
    if (!draft.raceName.trim()) {
      w.push(warn(warnId('identity-race'), 'identity', 'Race is required.'));
    }
    if (draft.classes.length === 0) {
      w.push(warn(warnId('identity-class'), 'identity', 'At least one class is required.'));
    }

    return w;
  }

  // ---- Abilities ----

  private static checkAbilities(
    draft: CharacterDraft,
    totalHD: number,
    warnId: WarnId,
  ): EntryValidationWarning[] {
    const w: EntryValidationWarning[] = [];
    const keys: (keyof typeof draft.abilities)[] = ['str', 'dex', 'con', 'int', 'wis', 'cha'];

    for (const key of keys) {
      const score = draft.abilities[key];
      const base = score.base;
      const total = abilityTotal(score);

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
    draft: CharacterDraft,
    totalHD: number,
    warnId: WarnId,
  ): EntryValidationWarning[] {
    const w: EntryValidationWarning[] = [];
    const expected = Math.floor(totalHD / 4);
    const slots = draft.levelIncrementSlots;
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

  private static checkClassPrerequisites(
    draft: CharacterDraft,
    ruleset: Ruleset,
    timeline: ECLTimeline,
    warnId: WarnId,
  ): EntryValidationWarning[] {
    const w: EntryValidationWarning[] = [];

    for (const entry of draft.classes) {
      if (entry.prereqOverride) continue;

      const classData = lookupClassData(entry.className);
      if (!classData?.prerequisites) continue; // not a prestige class (or no prereqs defined)

      // Find the ECL at which this class was first taken
      const firstCheckpoint = timeline.checkpoints.find(
        (c) => c.decision.type === 'class' && c.decision.className === entry.className,
      );
      if (!firstCheckpoint) continue;

      // Get the snapshot BEFORE that ECL (the character state when the decision was made).
      // snapshotBeforeECL returns null at ECL 1 — no prior state means all prereqs are unmet.
      const snapshot = DraftStateResolver.snapshotBeforeECL(draft, firstCheckpoint.ecl, ruleset)
        ?? DraftStateResolver.EMPTY_SNAPSHOT;

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
          const have = snapshot.skills[key]?.ranks ?? snapshot.skills[name.toLowerCase()]?.ranks ?? 0;
          if (have < ranks) {
            unmet.push(`${name} ${ranks} ranks (have ${have})`);
          }
        }
      }

      // Feats (by name — prestige prereqs list feat names, not IDs)
      if (prereqs.feats) {
        for (const featName of prereqs.feats) {
          const hasFeat = snapshot.feats.feats.some((f) => {
            const def = getFeatById(f.featId);
            return def?.name.toLowerCase() === featName.toLowerCase();
          });
          if (!hasFeat) {
            unmet.push(`Feat: ${featName}`);
          }
        }
      }

      // Spellcasting (heuristic parse)
      if (prereqs.spellcasting) {
        const result = this.checkSpellcastingPrereq(prereqs.spellcasting, snapshot);
        if (result === false) {
          unmet.push(prereqs.spellcasting);
        } else if (result === 'unknown') {
          w.push(
            warn(
              warnId(`class-spell-unknown-${entry.className}`),
              'classes',
              `${entry.className}: spellcasting requirement could not be auto-checked.`,
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
              warnId(`class-special-${entry.className}`),
              'classes',
              `${entry.className}: special requirement cannot be auto-checked.`,
              `Requirement: "${req}" — verify manually.`,
            ),
          );
        }
      }

      if (unmet.length > 0) {
        w.push(
          warn(
            warnId(`class-prereq-${entry.className}`),
            'classes',
            `${entry.className}: prerequisite${unmet.length > 1 ? 's' : ''} not met at entry.`,
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
    snapshot: ReturnType<typeof DraftStateResolver.snapshotAtECL>,
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
      const classData = lookupClassData(pool.baseClass);
      if (!classData) return false;
      const type = classData.spellcasting.type.toLowerCase();
      return type === castingType;
    });
  }

  // ---- Feat prerequisites ----

  private static checkFeatPrerequisites(
    draft: CharacterDraft,
    ruleset: Ruleset,
    timeline: ECLTimeline,
    warnId: WarnId,
  ): EntryValidationWarning[] {
    const w: EntryValidationWarning[] = [];

    for (const slot of draft.featSlots) {
      if (!slot.featId || slot.prereqOverride) continue;

      const featDef = getFeatById(slot.featId);
      if (!featDef || featDef.prerequisites.length === 0) continue;

      // snapshotBeforeECL: prerequisites must be met *before* the feat is taken.
      // Returns null at ECL 1 (no prior state) — use EMPTY_SNAPSHOT so prereqs are
      // correctly evaluated as unmet rather than silently skipped.
      const snapshot =
        DraftStateResolver.snapshotBeforeECL(draft, slot.availableAtLevel, ruleset) ??
        DraftStateResolver.EMPTY_SNAPSHOT;

      // Cast snapshot as Character — structurally compatible for the fields PrerequisiteService reads
      const result = PrerequisiteService.checkPrerequisites(
        snapshot as unknown as Character,
        featDef,
      );

      if (!result.met) {
        w.push(
          warn(
            warnId(`feat-prereq-${slot.id}`),
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
    draft: CharacterDraft,
    ruleset: Ruleset,
    warnId: WarnId,
  ): EntryValidationWarning[] {
    const maxTraits = ruleset.validationSettings.maxTraits;
    if (draft.traits.length <= maxTraits) return [];

    return [
      warn(
        warnId('trait-count'),
        'traits',
        `${draft.traits.length} traits assigned; maximum is ${maxTraits}.`,
        'Remove excess traits or confirm with your GM.',
      ),
    ];
  }

  // ---- Skill ranks ----

  private static checkSkillRanks(
    draft: CharacterDraft,
    totalHD: number,
    intMod: number,
    warnId: WarnId,
  ): EntryValidationWarning[] {
    const w: EntryValidationWarning[] = [];

    // Total available ranks across all classes
    let totalAvailable = 0;
    for (const entry of draft.classes) {
      const classData = lookupClassData(entry.className);
      const basePerLevel = classData?.skillRanksPerLevel ?? 2; // default 2 if unknown
      totalAvailable += Math.max(basePerLevel + intMod, 1) * entry.level;
    }

    // Total assigned ranks
    const totalAssigned = Object.values(draft.skills).reduce((sum, e) => sum + e.ranks, 0);

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
    if (totalHD > 0) {
      for (const [skillKey, entry] of Object.entries(draft.skills)) {
        if (entry.ranks > totalHD) {
          w.push(
            warn(
              warnId(`skill-max-${skillKey}`),
              'skills',
              `${skillKey}: ${entry.ranks} ranks exceeds the per-skill maximum of ${totalHD} (total HD).`,
            ),
          );
        }
      }
    }

    return w;
  }

  // ---- Spellcasting advancement ----

  private static checkSpellcastingAdvancement(draft: CharacterDraft, warnId: WarnId): EntryValidationWarning[] {
    const w: EntryValidationWarning[] = [];

    for (const entry of draft.classes) {
      const classData = lookupClassData(entry.className);
      if (!classData) continue;
      if (classData.spellcasting.type === 'None') continue;
      if (classData.category !== 'Prestige') continue;

      // Prestige caster without advancement configured
      if (!entry.spellcastingAdvancement) {
        w.push(
          warn(
            warnId(`spell-advancement-${entry.className}`),
            'spells',
            `${entry.className} advances spellcasting but no advancement type is configured.`,
            'Set spellcasting advancement in the Classes tab to ensure correct caster level computation.',
          ),
        );
        continue;
      }

      // Chosen type without the choice made
      if (
        entry.spellcastingAdvancement.type === 'chosen' &&
        !entry.spellcastingAdvancement.chosenType
      ) {
        w.push(
          warn(
            warnId(`spell-advancement-chosen-${entry.className}`),
            'spells',
            `${entry.className}: spellcasting advancement type is "chosen" but no type was selected.`,
          ),
        );
      }
    }

    return w;
  }
}
