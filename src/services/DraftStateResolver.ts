// DraftStateResolver — builds an ECL timeline from a CharacterDraft.
//
// Purpose: prerequisite validation requires knowing character state *at the point
// each decision was made*, not final state. This service builds that timeline.
//
// The resulting DraftCharacterSnapshot at each checkpoint is structurally compatible
// with the fields PrerequisiteService.checkSingle reads from Character, so it can
// be cast via `snapshot as unknown as Character` for those calls.

import type { CharacterDraft, DraftClassEntry, AbilityKey } from '@/types/characterDraft';
import {
  computeTotalBAB,
  computeBaseFort,
  computeBaseRef,
  computeBaseWill,
  lookupClassData,
} from '@/utils/characterComputations';

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
  mythic?: { tier: number };
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

// ---- DraftStateResolver ----

export class DraftStateResolver {
  /**
   * Build the full ECL timeline for a CharacterDraft.
   * Each checkpoint represents one ECL step with the character's state at that point.
   */
  static buildTimeline(draft: CharacterDraft): ECLTimeline {
    const decisions = this.buildDecisionSequence(draft);

    const checkpoints: ECLCheckpoint[] = [];
    let ecl = 0;
    let hd = 0;

    // Running class totals for snapshot computation
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
      const snapshot = this.buildSnapshot(draft, partialClasses, ecl, hd);

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
  static snapshotAtECL(draft: CharacterDraft, ecl: number): DraftCharacterSnapshot | null {
    const timeline = this.buildTimeline(draft);
    return timeline.checkpoints.find((c) => c.ecl === ecl)?.snapshot ?? null;
  }

  /**
   * Get the snapshot *before* a given ECL — i.e., the state a character was in
   * before making the decision at that ECL. Used for prereq checks.
   * Returns null if ECL <= 1 (no prior state).
   */
  static snapshotBeforeECL(draft: CharacterDraft, ecl: number): DraftCharacterSnapshot | null {
    if (ecl <= 1) return null;
    return this.snapshotAtECL(draft, ecl - 1);
  }

  // ---- Private: decision sequence ----

  private static buildDecisionSequence(draft: CharacterDraft): LevelUpDecision[] {
    const inherited = this.collectInheritedLA(draft);
    const classLevels = this.expandClassLevels(draft);
    const acquired = this.collectAcquiredLA(draft, classLevels.length + inherited.length);

    return [...inherited, ...classLevels, ...acquired];
  }

  /** Inherited LA templates consume ECL slots before any class levels. */
  private static collectInheritedLA(draft: CharacterDraft): LADecision[] {
    return draft.templates
      .filter(
        (t) =>
          t.appliedAs === 'LA' &&
          !t.isFreeGrant &&
          (t.acquired === 'inherited' || t.acquired === undefined),
      )
      .flatMap((t) =>
        Array.from({ length: t.laValue ?? 0 }, () => ({
          type: 'la_payment' as const,
          templateId: t.templateId ?? t.id,
          templateName: t.templateName,
        })),
      );
  }

  /** Expand each DraftClassEntry into one decision per class level, in order. */
  private static expandClassLevels(draft: CharacterDraft): ClassDecision[] {
    return draft.classes.flatMap((entry) =>
      Array.from({ length: entry.level }, (_, i) => ({
        type: 'class' as const,
        className: entry.className,
        classLevel: i + 1,
      })),
    );
  }

  /**
   * Acquired LA templates are placed after all class levels by default.
   * If acquiredAtECL is set, they're placed at that ECL instead.
   */
  private static collectAcquiredLA(
    draft: CharacterDraft,
    baseOffset: number,
  ): LADecision[] {
    return draft.templates
      .filter(
        (t) =>
          t.appliedAs === 'LA' &&
          !t.isFreeGrant &&
          t.acquired === 'acquired',
      )
      .flatMap((t) =>
        Array.from({ length: t.laValue ?? 0 }, () => ({
          type: 'la_payment' as const,
          templateId: t.templateId ?? t.id,
          templateName: t.templateName,
        })),
      );
    // Note: acquiredAtECL-based reordering would require sorting the full sequence.
    // For direct-entry characters, defaulting acquired templates to end-of-class is
    // a documented known limitation (see plans/draft-validation-system.md).
    void baseOffset;
  }

  // ---- Private: partial state ----

  private static buildPartialClassEntries(
    runningLevels: Map<string, number>,
  ): DraftClassEntry[] {
    return Array.from(runningLevels.entries()).map(([className, level]) => ({
      id: className,
      className,
      level,
      sourceSystem: 'pf1e' as const,
      classChoices: [],
      prereqOverride: false,
    }));
  }

  // ---- Private: snapshot ----

  private static buildSnapshot(
    draft: CharacterDraft,
    partialClasses: DraftClassEntry[],
    ecl: number,
    hd: number,
  ): DraftCharacterSnapshot {
    return {
      abilityScores: this.buildAbilityScores(draft, hd),
      classes: this.buildClassesSnapshot(partialClasses, hd),
      feats: this.buildFeatsSnapshot(draft, ecl),
      skills: this.buildSkillsSnapshot(draft),
      info: { race: { name: draft.raceName } },
      spellcasting: this.buildSpellcastingSnapshot(partialClasses),
    };
    // mythic omitted — direct-entry draft doesn't track mythic tier
  }

  private static buildAbilityScores(
    draft: CharacterDraft,
    currentHD: number,
  ): Record<AbilityKey, { total: number }> {
    const keys: AbilityKey[] = ['str', 'dex', 'con', 'int', 'wis', 'cha'];
    const result = {} as Record<AbilityKey, { total: number }>;

    for (const key of keys) {
      const score = draft.abilities[key];
      // Count level increment slots assigned to this ability up to currentHD
      const appliedIncrements = draft.levelIncrementSlots.filter(
        (slot) => slot.ability === key && slot.atHD <= currentHD,
      ).length;

      const total =
        score.base +
        score.racial +
        score.inherent +
        score.enhancement +
        score.other +
        appliedIncrements;

      result[key] = { total };
    }

    return result;
  }

  private static buildClassesSnapshot(
    partialClasses: DraftClassEntry[],
    hd: number,
  ): DraftCharacterSnapshot['classes'] {
    const totalBAB = computeTotalBAB(partialClasses);

    // Build iterative attack array: [bab, bab-5, bab-10, ...]
    const babArray: number[] = [];
    let cur = totalBAB;
    while (cur > 0) {
      babArray.push(cur);
      cur -= 5;
    }
    if (babArray.length === 0) babArray.push(0);

    const classes = partialClasses.map((entry) => {
      const classData = lookupClassData(entry.className);
      const features = (classData?.classFeatures ?? []).filter(
        (f) => f.level <= entry.level,
      );
      return {
        name: entry.className,
        level: entry.level,
        classFeatures: features,
      };
    });

    return { baseAttackBonus: babArray, totalLevel: hd, classes };
  }

  private static buildFeatsSnapshot(
    draft: CharacterDraft,
    ecl: number,
  ): DraftCharacterSnapshot['feats'] {
    const feats = draft.featSlots
      .filter((slot) => slot.availableAtLevel <= ecl && slot.featId)
      .map((slot) => ({
        featId: slot.featId!,
        choices: {},
      }));

    return { feats };
  }

  private static buildSkillsSnapshot(
    draft: CharacterDraft,
  ): Record<string, { ranks: number }> {
    const result: Record<string, { ranks: number }> = {};
    for (const [key, entry] of Object.entries(draft.skills)) {
      result[key] = { ranks: entry.ranks };
    }
    return result;
  }

  private static buildSpellcastingSnapshot(
    partialClasses: DraftClassEntry[],
  ): DraftCharacterSnapshot['spellcasting'] {
    const pools: Array<{ baseCasterLevel: number; baseClass: string }> = [];

    for (const entry of partialClasses) {
      const classData = lookupClassData(entry.className);
      if (classData && classData.spellcasting.type !== 'None') {
        pools.push({
          baseCasterLevel: entry.level,
          baseClass: entry.className,
        });
      }
    }

    return { pools };
  }
}
