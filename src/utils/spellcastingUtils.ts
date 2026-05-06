import type { ExpandedClassData } from '@/data/classes/types';
import type { SpellcastingPool } from '@/types/spells';
import type { ClassEntry } from '@/types/classes';

export interface PoolContributor {
  entry: ClassEntry;
  advancedLevels: number;
}

/**
 * Returns each class entry that contributes levels to the given pool, and how
 * many levels it contributes.
 *
 * - Base class: full class level.
 * - Prestige class: count of perLevel pointers targeting this pool's
 *   baseClassEntryId (respecting atLevels restrictions where present).
 */
export function getContributors(
  classes: ClassEntry[],
  pool: SpellcastingPool,
  classDataMap: Map<string, ExpandedClassData>,
): PoolContributor[] {
  const result: PoolContributor[] = [];
  for (const entry of classes) {
    if (entry.id === pool.baseClassEntryId) {
      if (entry.level > 0) result.push({ entry, advancedLevels: entry.level });
      continue;
    }

    const adv = entry.spellcastingAdvancement;
    if (!adv) continue;
    const spec = classDataMap.get(entry.name.toLowerCase())?.advancesSpellcasting;
    if (!spec) continue;
    const isAdvancingLevel = (lvl: number): boolean =>
      spec.atLevels ? spec.atLevels.includes(lvl) : lvl >= 1 && lvl <= entry.level;

    let count = 0;
    if (adv.mode === 'single') {
      count = adv.perLevel.filter(
        (p, i) => isAdvancingLevel(i + 1) && p.baseClassEntryId === pool.baseClassEntryId,
      ).length;
    } else {
      count = adv.perLevel.filter(
        (p, i) =>
          isAdvancingLevel(i + 1) &&
          (p.arcaneBaseClassEntryId === pool.baseClassEntryId ||
            p.divineBaseClassEntryId === pool.baseClassEntryId),
      ).length;
    }
    if (count > 0) result.push({ entry, advancedLevels: count });
  }
  return result;
}

/**
 * Compute the effective spellcasting level for a pool from the character's
 * class entries, using the same logic as the Spellcasting tab.
 */
export function computePoolEsl(
  pool: SpellcastingPool,
  classes: ClassEntry[],
  classDataMap: Map<string, ExpandedClassData>,
): number {
  return getContributors(classes, pool, classDataMap).reduce((sum, c) => sum + c.advancedLevels, 0);
}
