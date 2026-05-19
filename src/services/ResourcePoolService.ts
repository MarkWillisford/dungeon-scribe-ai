import type { Character } from '@/types';
import type { ResourcePool, ResourcePoolContribution } from '@/types/resources';
import type { FavoredClassBonusEntry } from '@/types/favoredClassBonuses';
import { FormulaService } from './FormulaService';
import { FeatRegistryService } from './FeatRegistryService';

export class ResourcePoolService {
  /**
   * Compute the full ResourcePool[] for a character from first principles.
   *
   * Walks class features, feats, equipped items, and FCB selections to build
   * max, baseMax, and a contributions array for each pool. Does not reset
   * current; preserves any existing value from character.resources.
   *
   * Pure function: no Firebase or Redux dependency.
   */
  static computePools(
    character: Character,
    fcbEntries: Map<string, FavoredClassBonusEntry> = new Map(),
  ): ResourcePool[] {
    const context = FormulaService.buildContext(character);

    interface PoolAccumulator {
      name: string;
      rechargeOn: ResourcePool['rechargeOn'];
      restRecoveryMode: ResourcePool['restRecoveryMode'];
      restRecoveryFormula?: string;
      specialRechargeNote?: string;
      contributions: ResourcePoolContribution[];
    }
    const poolMap = new Map<string, PoolAccumulator>();

    // 1. Class features with a resourcePool definition
    for (const cls of character.classes.classes) {
      for (const feature of cls.classFeatures) {
        if (!feature.resourcePool) continue;
        const rp = feature.resourcePool;

        let baseMax = 0;
        try {
          baseMax = FormulaService.evaluate(rp.maxFormula, context);
        } catch {
          // Unknown variable (class not in context); pool not applicable to this character
          continue;
        }

        if (!poolMap.has(rp.id)) {
          poolMap.set(rp.id, {
            name: rp.name,
            rechargeOn: rp.rechargeOn,
            restRecoveryMode: rp.restRecoveryMode,
            restRecoveryFormula: rp.restRecoveryFormula,
            specialRechargeNote: rp.specialRechargeNote,
            contributions: [],
          });
        }

        poolMap.get(rp.id)!.contributions.push({
          source: `${cls.name} class feature`,
          sourceType: 'class_feature',
          value: baseMax,
        });
      }
    }

    // 2. Feat bonuses targeting resource.{poolId}
    for (const charFeat of character.feats.feats) {
      if (!charFeat.active) continue;
      const featDef = FeatRegistryService.getFeat(charFeat.featId);
      if (!featDef) continue;

      for (const effect of featDef.effects) {
        if (!effect.target.startsWith('resource.')) continue;
        const poolId = effect.target.slice('resource.'.length);
        if (!poolMap.has(poolId)) continue;

        let value = 0;
        try {
          value = FormulaService.resolveValue(effect.value, context);
        } catch {
          continue;
        }
        if (value <= 0) continue;

        poolMap.get(poolId)!.contributions.push({
          source: effect.source || charFeat.name,
          sourceType: 'feat',
          value,
        });
      }
    }

    // 3. Equipped item effects targeting resource.{poolId}
    for (const item of character.editorEquipment ?? []) {
      if (!item.slot && !item.isOrbiting) continue;
      for (const effect of item.effects ?? []) {
        if (!effect.target.startsWith('resource.')) continue;
        const poolId = effect.target.slice('resource.'.length);
        if (!poolMap.has(poolId)) continue;

        let value = 0;
        try {
          value = FormulaService.resolveValue(effect.value, context);
        } catch {
          continue;
        }
        if (value <= 0) continue;

        poolMap.get(poolId)!.contributions.push({
          source: effect.source || item.name,
          sourceType: 'equipment',
          value,
        });
      }
    }

    // 4. FCB effects of type resource_pool
    const fcbCounts = new Map<string, number>();
    for (const cls of character.classes.classes) {
      for (const selection of cls.favoredClassBonuses ?? []) {
        if (selection.type !== 'alternate') continue;
        fcbCounts.set(selection.optionId, (fcbCounts.get(selection.optionId) ?? 0) + 1);
      }
    }

    for (const [optionId, count] of fcbCounts) {
      const entry = fcbEntries.get(optionId);
      if (!entry || entry.mechanicalEffect.type !== 'resource_pool') continue;

      const effect = entry.mechanicalEffect;
      const value = Math.floor(
        (count * effect.perLevelValue.numerator) / effect.perLevelValue.denominator,
      );
      if (value <= 0) continue;

      const poolId = effect.resourceId;
      if (!poolMap.has(poolId)) continue;

      poolMap.get(poolId)!.contributions.push({
        source: entry.shortName || entry.description,
        sourceType: 'favored_class_bonus',
        value,
      });
    }

    // 5. Build final ResourcePool[] from accumulators
    const result: ResourcePool[] = [];

    for (const [poolId, acc] of poolMap) {
      const baseMax = acc.contributions
        .filter((c) => c.sourceType === 'class_feature')
        .reduce((sum, c) => sum + c.value, 0);
      const max = acc.contributions.reduce((sum, c) => sum + c.value, 0);

      const existing = character.resources?.find((r) => r.id === poolId);
      const current = existing?.current ?? max;

      result.push({
        id: poolId,
        name: acc.name,
        current,
        max,
        baseMax,
        contributions: acc.contributions,
        rechargeOn: acc.rechargeOn,
        restRecoveryMode: acc.restRecoveryMode,
        restRecoveryFormula: acc.restRecoveryFormula,
        specialRechargeNote: acc.specialRechargeNote,
      });
    }

    return result;
  }

  /**
   * Apply PF1e rest recovery to a pool array.
   *
   * - 'special' recharge pools are left untouched
   * - 'full' recovery sets current = max
   * - 'formula' recovery evaluates restRecoveryFormula and adds to current, capped at max
   *
   * Returns a new array; does not mutate the input.
   */
  static applyRest(pools: ResourcePool[], character: Character): ResourcePool[] {
    const context = FormulaService.buildContext(character);

    return pools.map((pool) => {
      if (pool.rechargeOn === 'special') return { ...pool };

      if (pool.restRecoveryMode === 'full') {
        return { ...pool, current: pool.max };
      }

      if (pool.restRecoveryMode === 'formula' && pool.restRecoveryFormula) {
        let recovery = 0;
        try {
          recovery = FormulaService.evaluate(pool.restRecoveryFormula, context);
        } catch {
          return { ...pool };
        }
        return { ...pool, current: Math.min(pool.max, pool.current + recovery) };
      }

      return { ...pool };
    });
  }
}
