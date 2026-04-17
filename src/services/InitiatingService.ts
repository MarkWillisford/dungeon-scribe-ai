import type {
  InitiatingPool,
  InitiatingContributor,
  KnownManeuver,
  MartialTradition,
  ReadiedManeuver,
  ManeuverDefinition,
  InitiatingProgressionTable,
} from '@/types/initiating';
import type { InitiatingData } from '@/data/classes/types';

export class InitiatingService {
  /**
   * Compute the Initiator Level (IL) for a pool from its contributors.
   *
   * Full contributors (the pool's own initiating class) count at ×1.
   * Half contributors (other classes, including other initiating classes) count at ×floor/2.
   * IL is guaranteed >= 1 as long as any full contributor has at least 1 level.
   */
  static computeInitiatorLevel(contributors: InitiatingContributor[]): number {
    let fullTotal = 0;
    let halfTotal = 0;
    let hasFullInitiator = false;

    for (const c of contributors) {
      if (!c.advancesInitiatorLevel) continue;

      if (c.ilProgression === 'full') {
        fullTotal += c.classLevels;
        if (c.classLevels > 0) hasFullInitiator = true;
      } else {
        halfTotal += c.classLevels;
      }
    }

    if (!hasFullInitiator) return 0;
    // "all other class levels / 2" in the formula means sum first, then floor
    return Math.max(1, fullTotal + Math.floor(halfTotal / 2));
  }

  /**
   * Maximum maneuver level accessible at a given initiator level.
   * Formula: ceil(IL / 2), capped at 9.
   */
  static maxManeuverLevel(il: number): number {
    return Math.min(9, Math.ceil(il / 2));
  }

  /**
   * Look up [maneuversKnown, maneuversReadied, stancesKnown] at a given class level.
   * Returns null if the table key is missing or the level is out of range.
   */
  static getProgressionAtLevel(
    tables: Record<string, InitiatingProgressionTable>,
    tableKey: string,
    classLevel: number,
  ): [number, number, number] | null {
    const table = tables[tableKey];
    if (!table) return null;
    return (table[classLevel - 1] as [number, number, number]) ?? null;
  }

  /**
   * Maneuver save DC: 10 + maneuver level + initiating ability modifier + misc bonus.
   */
  static computeManeuverDC(maneuverLevel: number, abilityMod: number, miscBonus: number): number {
    return 10 + maneuverLevel + abilityMod + miscBonus;
  }

  /**
   * Check whether a maneuver can be learned given the current pool state.
   *
   * Rules checked:
   * 1. Maneuver's discipline must be in the pool's effective disciplines.
   * 2. Maneuver's level must be <= pool's maxManeuverLevel.
   * 3. All specifically required maneuvers must already be known.
   * 4. disciplineManeuversKnown prereq is self-inclusive: the maneuver being
   *    learned adds +1 to the current count before the check runs.
   * 5. minimumInitiatorLevel must be met by the pool's effectiveInitiatorLevel.
   */
  static canLearnManeuver(
    maneuver: ManeuverDefinition,
    pool: InitiatingPool,
    knownManeuvers: KnownManeuver[],
  ): boolean {
    if (!this.getEffectiveDisciplines(pool).includes(maneuver.disciplineId)) return false;
    if (maneuver.level > pool.maxManeuverLevel) return false;

    const { prerequisites: prereqs } = maneuver;

    if (prereqs.requiredManeuverIds?.length) {
      const knownIds = new Set(knownManeuvers.map((m) => m.maneuverId));
      for (const reqId of prereqs.requiredManeuverIds) {
        if (!knownIds.has(reqId)) return false;
      }
    }

    if (prereqs.disciplineManeuversKnown !== undefined) {
      const currentCount = knownManeuvers.filter(
        (m) => m.disciplineId === maneuver.disciplineId && m.poolBaseClass === pool.baseClass,
      ).length;
      // Self-inclusive: the maneuver being learned counts as +1 toward its own prereq
      if (currentCount + 1 < prereqs.disciplineManeuversKnown) return false;
    }

    if (
      prereqs.minimumInitiatorLevel !== undefined &&
      pool.effectiveInitiatorLevel < prereqs.minimumInitiatorLevel
    ) {
      return false;
    }

    return true;
  }

  /**
   * Construct a fully-computed InitiatingPool from raw class data and contributors.
   *
   * `classLevel` is the number of levels in the pool's base initiating class —
   * used to look up maneuver counts from the progression table.
   * `contributors` should include the base class (full) and all other classes (half).
   * `abilityMod` is the character's modifier for the pool's initiatingAbility.
   */
  static buildPool(
    baseClassName: string,
    classData: InitiatingData,
    classLevel: number,
    contributors: InitiatingContributor[],
    bonusDisciplines: InitiatingPool['bonusDisciplines'],
    removedDisciplines: InitiatingPool['removedDisciplines'],
    tables: Record<string, InitiatingProgressionTable>,
    abilityMod: number,
    miscDCBonus = 0,
  ): InitiatingPool {
    const il = this.computeInitiatorLevel(contributors);
    const maxLevel = this.maxManeuverLevel(il);
    const progression = this.getProgressionAtLevel(tables, classData.progressionTableKey, classLevel);
    const [maneuversKnown, maneuversReadied, stancesKnown] = progression ?? [0, 0, 0];

    return {
      baseClass: baseClassName,
      initiatingAbility: classData.initiatingAbility,
      contributors,
      effectiveInitiatorLevel: il,
      maxManeuverLevel: maxLevel,
      maneuversKnown,
      maneuversReadied,
      stancesKnown,
      accessibleDisciplines: [...classData.disciplines],
      bonusDisciplines,
      removedDisciplines,
      recoveryMechanics: classData.recoveryMechanics,
      maneuverDC: {
        base: 10 + abilityMod,
        abilityMod,
        miscBonus: miscDCBonus,
      },
    };
  }

  /**
   * Compute the effective discipline list for a pool after archetype and tradition swaps.
   * Result = accessibleDisciplines − removedDisciplines + bonusDisciplines (deduplicated).
   */
  static getEffectiveDisciplines(pool: InitiatingPool): string[] {
    const removed = new Set(pool.removedDisciplines.map((r) => r.disciplineId));
    const base = pool.accessibleDisciplines.filter((d) => !removed.has(d));
    const bonus = pool.bonusDisciplines.map((b) => b.disciplineId);
    return [...new Set([...base, ...bonus])];
  }

  /**
   * Apply a Martial Tradition to a pool, swapping one class discipline for the
   * tradition's favored discipline. Overwrites any previously applied tradition.
   */
  static applyTradition(
    pool: InitiatingPool,
    tradition: MartialTradition,
    removedDisciplineId: string,
  ): InitiatingPool {
    return {
      ...pool,
      martialTraditionId: tradition.id,
      removedDisciplines: [
        ...pool.removedDisciplines,
        { disciplineId: removedDisciplineId, reason: `Martial Tradition: ${tradition.name}` },
      ],
      bonusDisciplines: [
        ...pool.bonusDisciplines,
        { disciplineId: tradition.favoredDisciplineId, source: `Martial Tradition: ${tradition.name}` },
      ],
    };
  }

  /**
   * Crusader random-grant roller. Clears all isGranted flags, then randomly
   * selects grantCount unexpended readied maneuvers to be granted this round.
   */
  static rollCrusaderGrants(
    readiedManeuvers: ReadiedManeuver[],
    grantCount: number,
  ): ReadiedManeuver[] {
    const reset = readiedManeuvers.map((m) => ({ ...m, isGranted: false }));
    const unexpended = reset.filter((m) => !m.isExpended);
    const shuffled = [...unexpended].sort(() => Math.random() - 0.5);
    const grantedIds = new Set(shuffled.slice(0, grantCount).map((m) => m.maneuverId));
    return reset.map((m) => ({ ...m, isGranted: grantedIds.has(m.maneuverId) }));
  }
}
