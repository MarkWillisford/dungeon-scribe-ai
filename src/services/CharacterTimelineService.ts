// CharacterTimelineService — builds an ECL timeline from a Character.
//
// Purpose: prerequisite validation requires knowing character state *at the point
// each decision was made*, not final state. This service builds that timeline.
//
// The resulting DraftCharacterSnapshot at each checkpoint is structurally compatible
// with the fields PrerequisiteService.checkSingle reads from Character, so it can
// be cast via `snapshot as unknown as Character` for those calls.
//
import type { Character } from '@/types';
import type { ClassEntry } from '@/types/classes';
import type { AbilityKey } from '@/types/abilities';
import type { CompanionInstance } from '@/types/companions';
import type { Ruleset } from '@/types/ruleset';
import type { InitiatingContributor } from '@/types/initiating';
import {
  computeTotalBAB,
  computeTotalBABFractional,
  computeBaseFort,
  computeBaseFortFractional,
  computeBaseRef,
  computeBaseRefFractional,
  computeBaseWill,
  computeBaseWillFractional,
  lookupClassData,
  type ClassDataMap,
} from '@/utils/characterComputations';
import { BABProgression, SaveProgression } from '@/types/base';
import { InitiatingService } from './InitiatingService';

// ---- Internal decision types ----

type ClassDecision = {
  type: 'class';
  className: string;
  classLevel: number; // Level within that class at this step (1, 2, 3, ...)
};

type LADecision = {
  type: 'la_payment';
  templateId: string;
  templateName: string;
};

export type LevelUpDecision = ClassDecision | LADecision;

// ---- Snapshot type ----
// Shaped to be structurally compatible with the fields PrerequisiteService.checkSingle
// reads from Character. Cast via `snapshot as unknown as Character` for those calls.

export interface DraftCharacterSnapshot {
  abilityScores: Record<AbilityKey, { total: number }>;
  classes: {
    baseAttackBonus: number[]; // Iterative attack array, e.g. [12, 7, 2]
    baseFortitude: number;
    baseReflex: number;
    baseWill: number;
    totalLevel: number; // HD at this checkpoint
    classes: Array<{
      name: string;
      level: number;
      classFeatures: Array<{ name: string; level: number; description: string }>;
    }>;
  };
  feats: {
    feats: Array<{ featId: string; choices: Record<string, string> }>;
  };
  skills: Record<string, { ranks: number }>;
  info: { race: { name: string } };
  spellcasting: {
    pools: Array<{ baseCasterLevel: number; baseClass: string }>;
  };
  initiating: {
    pools: Array<{ effectiveInitiatorLevel: number; baseClass: string }>;
    knownManeuvers: Array<{ maneuverId: string }>;
  };
  eidolons: Array<{
    id: string;
    selectedEvolutions: Array<{ evolutionId: string }>;
  }>;
  mythic?: { tier: number };
  companions: CompanionInstance[];
}

// ---- Timeline types ----

export interface ECLCheckpoint {
  ecl: number;
  hd: number; // Total class levels at this point (LA slots don't add HD)
  decision: LevelUpDecision;
  snapshot: DraftCharacterSnapshot;
}

export interface ECLTimeline {
  checkpoints: ECLCheckpoint[];
  finalECL: number;
  totalHD: number;
  totalLA: number;
}

// ---- CharacterTimelineService ----

export class CharacterTimelineService {
  /**
   * A snapshot representing a character with no class levels, feats, or skills.
   * Used when a prestige class is taken at ECL 1 — there is no "before" state,
   * so all numeric prerequisites are trivially unmet.
   */
  static readonly EMPTY_SNAPSHOT: DraftCharacterSnapshot = {
    abilityScores: {
      str: { total: 10 },
      dex: { total: 10 },
      con: { total: 10 },
      int: { total: 10 },
      wis: { total: 10 },
      cha: { total: 10 },
    },
    classes: {
      baseAttackBonus: [0],
      baseFortitude: 0,
      baseReflex: 0,
      baseWill: 0,
      totalLevel: 0,
      classes: [],
    },
    feats: { feats: [] },
    skills: {},
    info: { race: { name: '' } },
    spellcasting: { pools: [] },
    initiating: { pools: [], knownManeuvers: [] },
    companions: [],
    eidolons: [],
  };

  /**
   * Build the full ECL timeline for a Character.
   * Each checkpoint represents one ECL step with the character's state at that point.
   *
   * Pass `ruleset` to apply optional rules (e.g. fractionalBABSaves).
   */
  static buildTimeline(
    character: Character,
    ruleset: Ruleset | undefined,
    classDataMap: ClassDataMap,
  ): ECLTimeline {
    const decisions = this.buildDecisionSequence(character);

    const checkpoints: ECLCheckpoint[] = [];
    let ecl = 0;
    let hd = 0;

    const runningClassLevels = new Map<string, number>();

    for (const decision of decisions) {
      ecl++;

      if (decision.type === 'class') {
        hd++;
        runningClassLevels.set(
          decision.className,
          (runningClassLevels.get(decision.className) ?? 0) + 1,
        );
      }

      const partialClasses = this.buildPartialClassEntries(runningClassLevels);
      const snapshot = this.buildSnapshot(
        character,
        partialClasses,
        ecl,
        hd,
        ruleset,
        classDataMap,
      );

      checkpoints.push({ ecl, hd, decision, snapshot });
    }

    const totalLA = decisions.filter((d) => d.type === 'la_payment').length;

    return {
      checkpoints,
      finalECL: ecl,
      totalHD: hd,
      totalLA,
    };
  }

  /**
   * Get the character snapshot at a specific ECL (state *after* that ECL step).
   * Returns null if ECL is out of range.
   */
  static snapshotAtECL(
    character: Character,
    ecl: number,
    ruleset: Ruleset | undefined,
    classDataMap: ClassDataMap,
  ): DraftCharacterSnapshot | null {
    const timeline = this.buildTimeline(character, ruleset, classDataMap);
    return timeline.checkpoints.find((c) => c.ecl === ecl)?.snapshot ?? null;
  }

  /**
   * Get the snapshot *before* a given ECL — i.e., the state a character was in
   * before making the decision at that ECL. Used for prereq checks.
   * Returns null if ECL <= 1 (no prior state).
   */
  static snapshotBeforeECL(
    character: Character,
    ecl: number,
    ruleset: Ruleset | undefined,
    classDataMap: ClassDataMap,
  ): DraftCharacterSnapshot | null {
    if (ecl <= 1) return null;
    return this.snapshotAtECL(character, ecl - 1, ruleset, classDataMap);
  }

  // ---- Private: decision sequence ----

  private static buildDecisionSequence(character: Character): LevelUpDecision[] {
    const inherited = this.collectInheritedLA(character);
    const classLevels = this.expandClassLevels(character);

    // Partition acquired templates by whether they have a specified ECL position
    type TaggedLA = { decision: LADecision; atECL: number };
    const withECL: TaggedLA[] = [];
    const atEnd: LADecision[] = [];

    for (const t of character.appliedTemplates) {
      if (t.appliedAs !== 'la' || t.isFreeGrant || t.acquisitionType !== 'acquired') continue;
      const laCount = t.la ?? 0;
      for (let i = 0; i < laCount; i++) {
        const decision: LADecision = {
          type: 'la_payment',
          templateId: t.templateId,
          templateName: t.name,
        };
        if (t.acquiredAtCharacterLevel !== undefined) {
          // Each LA payment for multi-LA templates occupies consecutive ECL slots
          withECL.push({ decision, atECL: t.acquiredAtCharacterLevel + i });
        } else {
          atEnd.push(decision);
        }
      }
    }

    // Sort by target ECL so we can merge in order
    withECL.sort((a, b) => a.atECL - b.atECL);

    // Merge base sequence with positioned acquired LA decisions.
    // `atECL` is the 1-based position in the FINAL timeline (after all insertions).
    // We use result.length as the position counter — it naturally tracks all items
    // placed so far (base + previously inserted acquired), so `result.length === atECL - 1`
    // means the next push will land at position atECL.
    const base: LevelUpDecision[] = [...inherited, ...classLevels];
    const result: LevelUpDecision[] = [];
    let baseIdx = 0;

    for (const { decision, atECL } of withECL) {
      // Drain base decisions until the next item in result will be at position atECL
      while (baseIdx < base.length && result.length < atECL - 1) {
        result.push(base[baseIdx++]);
      }
      result.push(decision);
    }

    // Append remaining base decisions
    while (baseIdx < base.length) {
      result.push(base[baseIdx++]);
    }

    // Append acquired templates with no specified ECL at the end
    result.push(...atEnd);

    return result;
  }

  /** Inherited LA templates consume ECL slots before any class levels. */
  private static collectInheritedLA(character: Character): LADecision[] {
    return character.appliedTemplates
      .filter((t) => t.appliedAs === 'la' && !t.isFreeGrant && t.acquisitionType !== 'acquired')
      .flatMap((t) =>
        Array.from({ length: t.la ?? 0 }, () => ({
          type: 'la_payment' as const,
          templateId: t.templateId,
          templateName: t.name,
        })),
      );
  }

  /** Expand each ClassEntry into one decision per class level, in order. */
  private static expandClassLevels(character: Character): ClassDecision[] {
    return character.classes.classes.flatMap((entry) =>
      Array.from({ length: entry.level }, (_, i) => ({
        type: 'class' as const,
        className: entry.name,
        classLevel: i + 1,
      })),
    );
  }

  // ---- Private: partial state ----

  private static buildPartialClassEntries(runningLevels: Map<string, number>): ClassEntry[] {
    return Array.from(runningLevels.entries()).map(([name, level]) => ({
      name,
      level,
      id: name,
      hitDieSize: 8,
      hitDieResults: [],
      skillRanks: 2,
      classSkills: [],
      babProgression: BABProgression.Medium,
      fortProgression: SaveProgression.Poor,
      refProgression: SaveProgression.Poor,
      willProgression: SaveProgression.Poor,
      classFeatures: [],
      sourceSystem: 'pf1e' as const,
      classChoices: [],
      prereqOverride: false,
    }));
  }

  // ---- Private: snapshot ----

  private static buildSnapshot(
    character: Character,
    partialClasses: ClassEntry[],
    ecl: number,
    hd: number,
    ruleset: Ruleset | undefined,
    classDataMap: ClassDataMap,
  ): DraftCharacterSnapshot {
    return {
      abilityScores: this.buildAbilityScores(character, hd),
      classes: this.buildClassesSnapshot(partialClasses, hd, ruleset, classDataMap),
      feats: this.buildFeatsSnapshot(character, ecl),
      skills: this.buildSkillsSnapshot(character, hd),
      info: { race: { name: character.info.race.name } },
      spellcasting: this.buildSpellcastingSnapshot(partialClasses, classDataMap),
      initiating: this.buildInitiatingSnapshot(partialClasses, classDataMap),
      companions: character.companions ?? [],
      eidolons: this.buildEidolonsSnapshot(character, partialClasses),
    };
    // mythic omitted — direct-entry editor doesn't track mythic tier
  }

  private static buildAbilityScores(
    character: Character,
    currentHD: number,
  ): Record<AbilityKey, { total: number }> {
    const keys: AbilityKey[] = ['str', 'dex', 'con', 'int', 'wis', 'cha'];
    const result = {} as Record<AbilityKey, { total: number }>;

    for (const key of keys) {
      const score = character.abilityScores[key];
      // Count level increment slots assigned to this ability up to currentHD
      const appliedIncrements = character.levelIncrementSlots.filter(
        (slot) => slot.ability === key && slot.atHD <= currentHD,
      ).length;

      // Best enhancement bonus from gear (constant across timeline)
      const bestEnhancement =
        score.bonuses.enhancement.length > 0
          ? Math.max(...score.bonuses.enhancement.map((b) => b.value))
          : 0;

      result[key] = {
        total: score.base + score.racial + score.inherent + bestEnhancement + appliedIncrements,
      };
    }

    return result;
  }

  private static buildClassesSnapshot(
    partialClasses: ClassEntry[],
    hd: number,
    ruleset: Ruleset | undefined,
    classDataMap: ClassDataMap,
  ): DraftCharacterSnapshot['classes'] {
    const useFractional = ruleset?.optionalRules.fractionalBABSaves ?? false;
    const totalBAB = useFractional
      ? computeTotalBABFractional(partialClasses, classDataMap)
      : computeTotalBAB(partialClasses, classDataMap);
    const baseFortitude = useFractional
      ? computeBaseFortFractional(partialClasses, classDataMap)
      : computeBaseFort(partialClasses, classDataMap);
    const baseReflex = useFractional
      ? computeBaseRefFractional(partialClasses, classDataMap)
      : computeBaseRef(partialClasses, classDataMap);
    const baseWill = useFractional
      ? computeBaseWillFractional(partialClasses, classDataMap)
      : computeBaseWill(partialClasses, classDataMap);

    // Build iterative attack array: [bab, bab-5, bab-10, ...]
    const babArray: number[] = [];
    let cur = totalBAB;
    while (cur > 0) {
      babArray.push(cur);
      cur -= 5;
    }
    if (babArray.length === 0) babArray.push(0);

    const classes = partialClasses.map((entry) => {
      const classData = lookupClassData(entry.name, classDataMap);
      const features = (classData?.classFeatures ?? []).filter((f) => f.level <= entry.level);
      return { name: entry.name, level: entry.level, classFeatures: features };
    });

    return {
      baseAttackBonus: babArray,
      baseFortitude,
      baseReflex,
      baseWill,
      totalLevel: hd,
      classes,
    };
  }

  private static buildFeatsSnapshot(
    character: Character,
    ecl: number,
  ): DraftCharacterSnapshot['feats'] {
    const feats = character.feats.feats
      .filter((f) => f.grantedAtLevel <= ecl && f.featId)
      .map((f) => ({ featId: f.featId, choices: f.choices ?? {} }));
    return { feats };
  }

  /**
   * Best-case skill ranks: at any checkpoint with HD = N, the most ranks a character
   * could possibly have in any skill is min(totalRanksInSkill, N).
   * This gives prereq checks the benefit of the doubt without requiring per-level tracking.
   */
  private static buildSkillsSnapshot(
    character: Character,
    currentHD: number,
  ): Record<string, { ranks: number }> {
    const result: Record<string, { ranks: number }> = {};
    for (const [key, entry] of Object.entries(character.skills)) {
      if (
        typeof entry === 'object' &&
        entry !== null &&
        !Array.isArray(entry) &&
        'ranks' in entry
      ) {
        result[key] = { ranks: Math.min((entry as { ranks: number }).ranks, currentHD) };
      }
    }
    return result;
  }

  private static buildSpellcastingSnapshot(
    partialClasses: ClassEntry[],
    classDataMap: ClassDataMap,
  ): DraftCharacterSnapshot['spellcasting'] {
    // A base caster is a class whose own spellcasting.type !== 'None' AND
    // which is not itself advancing someone else's pool. Prestige classes
    // like Hathran contribute into a base caster's pool; they don't get
    // their own snapshot entry.
    const baseCasters = partialClasses.filter((entry) => {
      const classData = lookupClassData(entry.name, classDataMap);
      if (!classData || classData.spellcasting.type === 'None') return false;
      if (entry.spellcastingAdvancement) return false;
      return true;
    });

    const pools = baseCasters.map((base) => {
      let advanced = 0;
      for (const entry of partialClasses) {
        const adv = entry.spellcastingAdvancement;
        if (!adv) continue;
        const spec = lookupClassData(entry.name, classDataMap)?.advancesSpellcasting;
        if (!spec) continue;
        const isAdvancingLevel = (lvl: number): boolean =>
          spec.atLevels ? spec.atLevels.includes(lvl) : lvl >= 1 && lvl <= entry.level;

        if (adv.mode === 'single') {
          advanced += adv.perLevel.filter(
            (p, i) => isAdvancingLevel(i + 1) && p.baseClassEntryId === base.id,
          ).length;
        } else {
          advanced += adv.perLevel.filter(
            (p, i) =>
              isAdvancingLevel(i + 1) &&
              (p.arcaneBaseClassEntryId === base.id || p.divineBaseClassEntryId === base.id),
          ).length;
        }
      }
      return { baseCasterLevel: base.level + advanced, baseClass: base.name };
    });

    return { pools };
  }

  private static buildInitiatingSnapshot(
    partialClasses: ClassEntry[],
    classDataMap: ClassDataMap,
  ): DraftCharacterSnapshot['initiating'] {
    const initiatingEntries = partialClasses.filter((entry) => {
      const classData = lookupClassData(entry.name, classDataMap);
      return classData?.initiating != null;
    });

    const pools = initiatingEntries.map((entry) => {
      // Each pool treats its own class as full IL, all others as half
      const contributors: InitiatingContributor[] = partialClasses.map((c) => ({
        className: c.name,
        classLevels: c.level,
        ilProgression: c.name === entry.name ? 'full' : 'half',
        advancesManeuverAccess: c.name === entry.name,
        // PoW rule: all non-initiating class levels count at half toward IL.
        // advancesInitiatorLevel: false is only needed for prestige classes that
        // explicitly state they do not advance IL — no such flag exists in the
        // current data model, so we conservatively default to true for all classes.
        advancesInitiatorLevel: true,
      }));

      const il = InitiatingService.computeInitiatorLevel(contributors);
      return { effectiveInitiatorLevel: il, baseClass: entry.name };
    });

    // knownManeuvers is empty during initial character entry — maneuver selection happens
    // after entry completion. maneuver_known prereqs will correctly fail during entry validation.
    return { pools, knownManeuvers: [] };
  }

  /**
   * Filter draft eidolons to only those owned by class entries that are present
   * in partialClasses (i.e., classes that exist at this ECL checkpoint).
   *
   * partialClasses entries use `id: className` (synthetic), so we cross-reference
   * against draft.classes by className to recover the real UUIDs used in
   * DraftEidolon.summonerClassEntryId.
   */
  private static buildEidolonsSnapshot(
    character: Character,
    partialClasses: ClassEntry[],
  ): DraftCharacterSnapshot['eidolons'] {
    const presentClassNames = new Set(partialClasses.map((c) => c.name));
    const allowedEntryIds = new Set(
      character.classes.classes.filter((c) => presentClassNames.has(c.name)).map((c) => c.id),
    );
    return character.eidolons
      .filter((eid) => allowedEntryIds.has(eid.summonerClassEntryId))
      .map((eid) => ({
        id: eid.id,
        selectedEvolutions: eid.selectedEvolutions.map((s) => ({ evolutionId: s.evolutionId })),
      }));
  }
}
