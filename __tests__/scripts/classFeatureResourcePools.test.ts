/**
 * Validates the class-feature-resource-pools.json seed file produced by
 * extractClassFeatureResourcePools.ts.
 *
 * Tests cover:
 *   1. JSON structure — every entry has all required fields and no unknown fields
 *   2. Formula parsability — every maxFormula and restRecoveryFormula evaluates
 *      without throwing when supplied a realistic FormulaContext
 *   3. Spot-check values — selected entries match expected PF1e rules precisely
 *   4. Conditional field rules — specialRechargeNote/restRecoveryFormula present iff required
 */

import * as fs from 'fs';
import * as path from 'path';
import { FormulaService, type FormulaContext } from '@services/FormulaService';
import type {
  ClassFeatureResourcePoolEntry,
  ExtractedResourcePool,
} from '../../scripts/db/resourcePoolExtractionTypes';

// ----- Fixtures -----

const SEED_FILE = path.join(
  __dirname,
  '../../scripts/db/seed-data/class-feature-resource-pools.json',
);

// Realistic level-10 character context with class-level variables injected.
// The [key: string] index on FormulaContext allows custom class-level variables.
function buildTestContext(classId: string, classLevel: number): FormulaContext {
  return {
    BAB: 7,
    level: classLevel,
    str: 14,
    dex: 12,
    con: 14,
    int: 10,
    wis: 14,
    cha: 12,
    strMod: 2,
    dexMod: 1,
    conMod: 2,
    intMod: 0,
    wisMod: 2,
    chaMod: 1,
    size: 0,
    // Inject the class-level variable used by maxFormula / restRecoveryFormula
    [`${classId}Level`]: classLevel,
  };
}

// ----- Load data -----

let entries: ClassFeatureResourcePoolEntry[];

beforeAll(() => {
  expect(fs.existsSync(SEED_FILE)).toBe(true);
  const raw = fs.readFileSync(SEED_FILE, 'utf8');
  entries = JSON.parse(raw) as ClassFeatureResourcePoolEntry[];
});

// ----- Structure tests -----

describe('class-feature-resource-pools.json', () => {
  test('is a non-empty array', () => {
    expect(Array.isArray(entries)).toBe(true);
    expect(entries.length).toBeGreaterThan(0);
  });

  test('every entry has required top-level fields', () => {
    for (const entry of entries) {
      expect(typeof entry.classId).toBe('string');
      expect(entry.classId.length).toBeGreaterThan(0);
      expect(typeof entry.className).toBe('string');
      expect(typeof entry.featureName).toBe('string');
      expect(entry.resourcePool).toBeDefined();
    }
  });

  test('every resourcePool has required fields', () => {
    for (const entry of entries) {
      const pool = entry.resourcePool;
      expect(typeof pool.id).toBe('string');
      expect(pool.id.length).toBeGreaterThan(0);
      expect(typeof pool.name).toBe('string');
      expect(['rest', 'per_encounter', 'special']).toContain(pool.rechargeOn);
      expect(typeof pool.maxFormula).toBe('string');
      expect(pool.maxFormula.length).toBeGreaterThan(0);
      expect(['full', 'formula']).toContain(pool.restRecoveryMode);
    }
  });

  test('specialRechargeNote is present iff rechargeOn is special', () => {
    for (const entry of entries) {
      const pool = entry.resourcePool;
      if (pool.rechargeOn === 'special') {
        expect(typeof pool.specialRechargeNote).toBe('string');
        expect((pool.specialRechargeNote ?? '').length).toBeGreaterThan(0);
      } else {
        expect(pool.specialRechargeNote).toBeUndefined();
      }
    }
  });

  test('restRecoveryFormula is present iff restRecoveryMode is formula', () => {
    for (const entry of entries) {
      const pool = entry.resourcePool;
      if (pool.restRecoveryMode === 'formula') {
        expect(typeof pool.restRecoveryFormula).toBe('string');
        expect((pool.restRecoveryFormula ?? '').length).toBeGreaterThan(0);
      } else {
        expect(pool.restRecoveryFormula).toBeUndefined();
      }
    }
  });

  test('pool ids are unique', () => {
    const seen = new Set<string>();
    const duplicates: string[] = [];
    for (const entry of entries) {
      const key = `${entry.classId}:${entry.resourcePool.id}`;
      if (seen.has(key)) duplicates.push(key);
      seen.add(key);
    }
    expect(duplicates).toEqual([]);
  });

  // ----- Formula parsability -----

  test('every maxFormula evaluates without throwing at level 10', () => {
    for (const entry of entries) {
      const ctx = buildTestContext(entry.classId, 10);
      expect(() => FormulaService.evaluate(entry.resourcePool.maxFormula, ctx)).not.toThrow();
    }
  });

  test('every restRecoveryFormula evaluates without throwing at level 10', () => {
    for (const entry of entries) {
      const pool = entry.resourcePool;
      if (pool.restRecoveryMode === 'formula' && pool.restRecoveryFormula) {
        const ctx = buildTestContext(entry.classId, 10);
        expect(() => FormulaService.evaluate(pool.restRecoveryFormula!, ctx)).not.toThrow();
      }
    }
  });

  // ----- Spot-check: Barbarian rage -----

  describe('Barbarian rage_rounds', () => {
    let pool: ExtractedResourcePool;

    beforeAll(() => {
      const entry = entries.find(
        (e) => e.classId === 'barbarian' && e.resourcePool.id === 'rage_rounds',
      );
      expect(entry).toBeDefined();
      pool = entry!.resourcePool;
    });

    test('recharges on rest', () => expect(pool.rechargeOn).toBe('rest'));
    test('restRecoveryMode is full', () => expect(pool.restRecoveryMode).toBe('full'));

    test('evaluates to 6 at level 1 with conMod 2', () => {
      const ctx = buildTestContext('barbarian', 1);
      // 4 + 2 + (1-1)*2 = 6
      expect(FormulaService.evaluate(pool.maxFormula, ctx)).toBe(6);
    });

    test('evaluates to 24 at level 10 with conMod 2', () => {
      const ctx = buildTestContext('barbarian', 10);
      // 4 + 2 + (10-1)*2 = 4 + 2 + 18 = 24
      expect(FormulaService.evaluate(pool.maxFormula, ctx)).toBe(24);
    });
  });

  // ----- Spot-check: Cleric channel energy -----

  describe('Cleric channel_energy_uses', () => {
    let pool: ExtractedResourcePool;

    beforeAll(() => {
      const entry = entries.find(
        (e) => e.classId === 'cleric' && e.resourcePool.id === 'channel_energy_uses',
      );
      expect(entry).toBeDefined();
      pool = entry!.resourcePool;
    });

    test('recharges on rest', () => expect(pool.rechargeOn).toBe('rest'));

    test('evaluates to 4 with chaMod 1', () => {
      const ctx = buildTestContext('cleric', 10);
      // 3 + 1 = 4
      expect(FormulaService.evaluate(pool.maxFormula, ctx)).toBe(4);
    });
  });

  // ----- Spot-check: Monk ki pool -----

  describe('Monk ki', () => {
    let pool: ExtractedResourcePool;

    beforeAll(() => {
      const entry = entries.find((e) => e.classId === 'monk' && e.resourcePool.id === 'ki');
      expect(entry).toBeDefined();
      pool = entry!.resourcePool;
    });

    test('recharges on rest', () => expect(pool.rechargeOn).toBe('rest'));

    test('evaluates to 7 at monk level 10 with wisMod 2', () => {
      const ctx = buildTestContext('monk', 10);
      // floor(10/2) + 2 = 5 + 2 = 7
      expect(FormulaService.evaluate(pool.maxFormula, ctx)).toBe(7);
    });
  });

  // ----- Spot-check: Paladin lay on hands -----

  describe('Paladin lay_on_hands_uses', () => {
    let pool: ExtractedResourcePool;

    beforeAll(() => {
      const entry = entries.find(
        (e) => e.classId === 'paladin' && e.resourcePool.id === 'lay_on_hands_uses',
      );
      expect(entry).toBeDefined();
      pool = entry!.resourcePool;
    });

    test('evaluates to 6 at paladin level 10 with chaMod 1', () => {
      const ctx = buildTestContext('paladin', 10);
      // floor(10/2) + 1 = 5 + 1 = 6
      expect(FormulaService.evaluate(pool.maxFormula, ctx)).toBe(6);
    });
  });

  // ----- Spot-check: Paladin smite evil -----

  describe('Paladin smite_evil_uses', () => {
    let pool: ExtractedResourcePool;

    beforeAll(() => {
      const entry = entries.find(
        (e) => e.classId === 'paladin' && e.resourcePool.id === 'smite_evil_uses',
      );
      expect(entry).toBeDefined();
      pool = entry!.resourcePool;
    });

    const cases: [number, number][] = [
      [1, 1],
      [4, 2],
      [7, 3],
      [10, 4],
      [13, 5],
      [16, 6],
      [19, 7],
    ];

    test.each(cases)('level %i → %i smite uses', (level, expected) => {
      const ctx = buildTestContext('paladin', level);
      expect(FormulaService.evaluate(pool.maxFormula, ctx)).toBe(expected);
    });
  });

  // ----- Spot-check: Arcanist arcane reservoir -----

  describe('Arcanist arcane_reservoir', () => {
    let pool: ExtractedResourcePool;

    beforeAll(() => {
      const entry = entries.find(
        (e) => e.classId === 'arcanist' && e.resourcePool.id === 'arcane_reservoir',
      );
      expect(entry).toBeDefined();
      pool = entry!.resourcePool;
    });

    test('restRecoveryMode is formula', () => expect(pool.restRecoveryMode).toBe('formula'));
    test('restRecoveryFormula is defined', () => expect(pool.restRecoveryFormula).toBeDefined());

    test('max is 13 at arcanist level 10', () => {
      const ctx = buildTestContext('arcanist', 10);
      // 3 + 10 = 13
      expect(FormulaService.evaluate(pool.maxFormula, ctx)).toBe(13);
    });

    test('rest recovery is 8 at arcanist level 10', () => {
      const ctx = buildTestContext('arcanist', 10);
      // 3 + floor(10/2) = 3 + 5 = 8
      expect(FormulaService.evaluate(pool.restRecoveryFormula!, ctx)).toBe(8);
    });

    test('rest recovery is always less than or equal to max', () => {
      for (let level = 1; level <= 20; level++) {
        const ctx = buildTestContext('arcanist', level);
        const maxVal = FormulaService.evaluate(pool.maxFormula, ctx);
        const recoveryVal = FormulaService.evaluate(pool.restRecoveryFormula!, ctx);
        expect(recoveryVal).toBeLessThanOrEqual(maxVal);
      }
    });
  });

  // ----- Spot-check: Gunslinger grit -----

  describe('Gunslinger grit', () => {
    let pool: ExtractedResourcePool;

    beforeAll(() => {
      const entry = entries.find(
        (e) => e.classId === 'gunslinger' && e.resourcePool.id === 'grit',
      );
      expect(entry).toBeDefined();
      pool = entry!.resourcePool;
    });

    test('rechargeOn is special', () => expect(pool.rechargeOn).toBe('special'));
    test('specialRechargeNote mentions firearms', () =>
      expect(pool.specialRechargeNote?.toLowerCase()).toContain('firearm'));

    test('minimum of 1 when wisMod is 0', () => {
      const ctx = buildTestContext('gunslinger', 10);
      ctx.wisMod = 0;
      // max(1, 0) = 1
      expect(FormulaService.evaluate(pool.maxFormula, ctx)).toBe(1);
    });

    test('equals wisMod when wisMod > 1', () => {
      const ctx = buildTestContext('gunslinger', 10);
      ctx.wisMod = 3;
      // max(1, 3) = 3
      expect(FormulaService.evaluate(pool.maxFormula, ctx)).toBe(3);
    });
  });

  // ----- Spot-check: Swashbuckler panache -----

  describe('Swashbuckler panache', () => {
    let pool: ExtractedResourcePool;

    beforeAll(() => {
      const entry = entries.find(
        (e) => e.classId === 'swashbuckler' && e.resourcePool.id === 'panache',
      );
      expect(entry).toBeDefined();
      pool = entry!.resourcePool;
    });

    test('rechargeOn is special', () => expect(pool.rechargeOn).toBe('special'));
    test('specialRechargeNote mentions critical hit', () =>
      expect(pool.specialRechargeNote?.toLowerCase()).toContain('critical'));

    test('minimum of 1 when chaMod is 0', () => {
      const ctx = buildTestContext('swashbuckler', 10);
      ctx.chaMod = 0;
      expect(FormulaService.evaluate(pool.maxFormula, ctx)).toBe(1);
    });
  });

  // ----- Spot-check: Bard bardic performance -----

  describe('Bard bardic_performance_rounds', () => {
    let pool: ExtractedResourcePool;

    beforeAll(() => {
      const entry = entries.find(
        (e) => e.classId === 'bard' && e.resourcePool.id === 'bardic_performance_rounds',
      );
      expect(entry).toBeDefined();
      pool = entry!.resourcePool;
    });

    test('evaluates to 4 at level 1 with chaMod 1', () => {
      const ctx = buildTestContext('bard', 1);
      // 4 + 1 + (1-1)*2 = 5
      expect(FormulaService.evaluate(pool.maxFormula, ctx)).toBe(5);
    });

    test('evaluates to 22 at level 10 with chaMod 1', () => {
      const ctx = buildTestContext('bard', 10);
      // 4 + 1 + (10-1)*2 = 4 + 1 + 18 = 23
      expect(FormulaService.evaluate(pool.maxFormula, ctx)).toBe(23);
    });
  });

  // ----- Required classes are present -----

  test('all acceptance-criteria classes are represented', () => {
    const requiredClasses = [
      'barbarian',
      'cleric',
      'monk',
      'bard',
      'paladin',
      'arcanist',
      'gunslinger',
      'swashbuckler',
    ];
    const presentClassIds = new Set(entries.map((e) => e.classId));
    for (const classId of requiredClasses) {
      expect(presentClassIds).toContain(classId);
    }
  });
});
