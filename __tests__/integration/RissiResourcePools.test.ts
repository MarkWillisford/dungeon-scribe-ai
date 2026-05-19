/**
 * End-to-end validation: resource pools against Rissi (issue #149)
 *
 * Rissi is a level-24 multiclass character used as the acceptance gate for
 * Phase 3.75 (Resource Pool Computation Pipeline). This suite verifies that
 * every active resource pool max is exactly correct against PF1e rules, every
 * contribution source is attributed correctly, the sum of contributions equals
 * max, and rest recovery behaves as expected.
 *
 * Discrepancies discovered during this validation pass:
 *   1. Rissi fixture had feat ID 'extra-channel' (hyphen) — registry uses
 *      'extra_channel' (underscore). Fixed in rissi.ts.
 *   2. Extra Channel feat had effects:[] — no mechanical effect defined.
 *      Fixed in src/data/feats/core.ts.
 *   3. Rissi's class entries had classFeatures:[] — no pool-granting features.
 *      Added channel energy (Cleric) and lay-on-hands / smite evil (Prestige
 *      Paladin) features in rissi.ts.
 *   4. Standard paladin pool formulas reference `paladinLevel`, but Rissi's
 *      class is named "Prestige Paladin", which injects `prestigePaladinLevel`
 *      into the formula context. Prestige Paladin class features use
 *      `prestigePaladinLevel` so the variable resolves correctly.
 */

import { ResourcePoolService } from '@services/ResourcePoolService';
import { FeatRegistryService } from '@services/FeatRegistryService';
import { BonusType } from '@/types/base';
import { RISSI_FIXTURE } from '@/data/fixtures/rissi';
import type { ResourcePool } from '@/types/resources';

// ---- Helpers ----

function sumContributions(pool: ResourcePool): number {
  const classAndFcb = pool.contributions
    .filter((c) => c.sourceType === 'class_feature' || c.sourceType === 'favored_class_bonus')
    .reduce((sum, c) => sum + c.value, 0);

  const byBonusType = new Map<string, number[]>();
  for (const c of pool.contributions.filter(
    (c) => c.sourceType === 'feat' || c.sourceType === 'equipment',
  )) {
    const key = c.bonusType ?? 'untyped';
    const arr = byBonusType.get(key) ?? [];
    arr.push(c.value);
    byBonusType.set(key, arr);
  }
  let bonusTotal = 0;
  for (const [type, values] of byBonusType) {
    if (type === 'untyped' || type === 'dodge') {
      bonusTotal += values.reduce((sum, v) => sum + v, 0);
    } else {
      bonusTotal += Math.max(...values);
    }
  }

  return classAndFcb + bonusTotal;
}

// ---- Setup ----

describe('Rissi resource pool validation (issue #149)', () => {
  let pools: ResourcePool[];

  beforeAll(() => {
    FeatRegistryService.register({
      id: 'extra_channel',
      name: 'Extra Channel',
      description: 'You can channel divine energy two additional times per day.',
      source: 'Core Rulebook',
      verificationStatus: 'needs_review' as const,
      types: ['general'],
      prerequisites: [],
      effects: [
        {
          type: 'bonus',
          bonusType: BonusType.UNTYPED,
          target: 'resource.channel_energy_uses',
          value: 2,
          source: 'Extra Channel',
        },
      ],
      activationMode: 'passive',
    });

    pools = ResourcePoolService.computePools(RISSI_FIXTURE);
  });

  afterAll(() => {
    FeatRegistryService.clear();
  });

  // ---- Pool inventory ----

  test('exactly 3 pools are computed (channel energy, lay on hands, smite evil)', () => {
    expect(pools).toHaveLength(3);
    const ids = pools.map((p) => p.id).sort();
    expect(ids).toEqual(['channel_energy_uses', 'lay_on_hands_uses', 'smite_evil_uses']);
  });

  test('no phantom pools from classes Rissi does not have', () => {
    const phantomIds = ['rage_rounds', 'ki', 'bardic_performance_rounds', 'arcane_reservoir'];
    for (const id of phantomIds) {
      expect(pools.find((p) => p.id === id)).toBeUndefined();
    }
  });

  // ---- Channel Energy (Cleric 5, CHA 14, Extra Channel feat) ----
  // Base: 3 + chaMod(2) = 5
  // Extra Channel: +2 untyped
  // Max: 7

  describe('channel_energy_uses', () => {
    let pool: ResourcePool;
    beforeAll(() => {
      pool = pools.find((p) => p.id === 'channel_energy_uses')!;
    });

    test('pool exists', () => {
      expect(pool).toBeDefined();
    });

    test('max = 7 (3 + chaMod(2) base + 2 Extra Channel)', () => {
      expect(pool.max).toBe(7);
    });

    test('baseMax = 5 (class feature only)', () => {
      expect(pool.baseMax).toBe(5);
    });

    test('has exactly 2 contributions', () => {
      expect(pool.contributions).toHaveLength(2);
    });

    test('class_feature contribution attributes Cleric with value 5', () => {
      const c = pool.contributions.find((c) => c.sourceType === 'class_feature');
      expect(c).toBeDefined();
      expect(c!.value).toBe(5);
      expect(c!.source).toContain('Cleric');
    });

    test('feat contribution attributes Extra Channel with value 2', () => {
      const c = pool.contributions.find((c) => c.sourceType === 'feat');
      expect(c).toBeDefined();
      expect(c!.value).toBe(2);
      expect(c!.source).toBe('Extra Channel');
      expect(c!.bonusType).toBe('untyped');
    });

    test('sum of contributions equals max', () => {
      expect(sumContributions(pool)).toBe(pool.max);
    });

    test('rechargeOn = rest', () => {
      expect(pool.rechargeOn).toBe('rest');
    });

    test('restRecoveryMode = full', () => {
      expect(pool.restRecoveryMode).toBe('full');
    });
  });

  // ---- Lay on Hands (Prestige Paladin 2, CHA 14) ----
  // floor(prestigePaladinLevel(2) / 2) + chaMod(2) = 1 + 2 = 3

  describe('lay_on_hands_uses', () => {
    let pool: ResourcePool;
    beforeAll(() => {
      pool = pools.find((p) => p.id === 'lay_on_hands_uses')!;
    });

    test('pool exists', () => {
      expect(pool).toBeDefined();
    });

    test('max = 3 (floor(2/2) + chaMod(2))', () => {
      expect(pool.max).toBe(3);
    });

    test('baseMax = max (no feat/equipment bonuses)', () => {
      expect(pool.baseMax).toBe(pool.max);
    });

    test('has exactly 1 contribution', () => {
      expect(pool.contributions).toHaveLength(1);
    });

    test('class_feature contribution attributes Prestige Paladin with value 3', () => {
      const c = pool.contributions[0];
      expect(c.sourceType).toBe('class_feature');
      expect(c.value).toBe(3);
      expect(c.source).toContain('Prestige Paladin');
    });

    test('sum of contributions equals max', () => {
      expect(sumContributions(pool)).toBe(pool.max);
    });

    test('rechargeOn = rest', () => {
      expect(pool.rechargeOn).toBe('rest');
    });
  });

  // ---- Smite Evil (Prestige Paladin 2) ----
  // 1 + floor((prestigePaladinLevel(2) - 1) / 3) = 1 + floor(1/3) = 1

  describe('smite_evil_uses', () => {
    let pool: ResourcePool;
    beforeAll(() => {
      pool = pools.find((p) => p.id === 'smite_evil_uses')!;
    });

    test('pool exists', () => {
      expect(pool).toBeDefined();
    });

    test('max = 1 (1 + floor((2-1)/3))', () => {
      expect(pool.max).toBe(1);
    });

    test('baseMax = max (no feat/equipment bonuses)', () => {
      expect(pool.baseMax).toBe(pool.max);
    });

    test('has exactly 1 contribution', () => {
      expect(pool.contributions).toHaveLength(1);
    });

    test('class_feature contribution attributes Prestige Paladin with value 1', () => {
      const c = pool.contributions[0];
      expect(c.sourceType).toBe('class_feature');
      expect(c.value).toBe(1);
      expect(c.source).toContain('Prestige Paladin');
    });

    test('sum of contributions equals max', () => {
      expect(sumContributions(pool)).toBe(pool.max);
    });

    test('rechargeOn = rest', () => {
      expect(pool.rechargeOn).toBe('rest');
    });
  });

  // ---- Rest recovery ----

  describe('applyRest', () => {
    test('channel_energy_uses: full recovery restores current to max', () => {
      const depleted = pools.map((p) =>
        p.id === 'channel_energy_uses' ? { ...p, current: 2 } : p,
      );
      const recovered = ResourcePoolService.applyRest(depleted, RISSI_FIXTURE);
      const channel = recovered.find((p) => p.id === 'channel_energy_uses')!;
      expect(channel.current).toBe(channel.max);
    });

    test('lay_on_hands_uses: full recovery restores current to max', () => {
      const depleted = pools.map((p) => (p.id === 'lay_on_hands_uses' ? { ...p, current: 0 } : p));
      const recovered = ResourcePoolService.applyRest(depleted, RISSI_FIXTURE);
      const loh = recovered.find((p) => p.id === 'lay_on_hands_uses')!;
      expect(loh.current).toBe(loh.max);
    });

    test('applyRest does not mutate the input pool array', () => {
      const original = pools.map((p) => ({ ...p, current: 0 }));
      ResourcePoolService.applyRest(original, RISSI_FIXTURE);
      expect(original[0].current).toBe(0);
    });

    test('all pools are at full current after rest when depleted', () => {
      const depleted = pools.map((p) => ({ ...p, current: 0 }));
      const recovered = ResourcePoolService.applyRest(depleted, RISSI_FIXTURE);
      for (const pool of recovered) {
        expect(pool.current).toBe(pool.max);
      }
    });
  });
});
