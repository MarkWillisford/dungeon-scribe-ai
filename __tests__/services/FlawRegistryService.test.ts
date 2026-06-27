import { FlawRegistryService } from '@services/FlawRegistryService';
import { BonusType } from '@/types/base';
import type { FlawDefinition } from '@/types/flaws';
import { FLAWS_3_5E } from '@/data/flaws';

const testFlaw: FlawDefinition = {
  id: 'test_flaw',
  name: 'Test Flaw',
  description: 'A test flaw',
  source: '3.5e',
  effects: [],
};

const penaltyFlaw: FlawDefinition = {
  id: 'penalty_flaw',
  name: 'Penalty Flaw',
  description: 'A flaw with a penalty effect',
  source: '3.5e',
  effects: [
    {
      type: 'penalty',
      target: 'save.will',
      value: 2,
      bonusType: BonusType.UNTYPED,
      source: 'Penalty Flaw',
    },
  ],
};

const otherSourceFlaw: FlawDefinition = {
  id: 'other_source_flaw',
  name: 'Other Source Flaw',
  description: 'A flaw from a different source',
  source: 'homebrew',
  effects: [],
};

describe('FlawRegistryService', () => {
  beforeEach(() => {
    FlawRegistryService.clear();
  });

  afterEach(() => {
    FlawRegistryService.clear();
  });

  test('register and retrieve a flaw', () => {
    FlawRegistryService.register(testFlaw);
    expect(FlawRegistryService.getFlaw('test_flaw')).toEqual(testFlaw);
  });

  test('returns undefined for unknown flaw', () => {
    expect(FlawRegistryService.getFlaw('nonexistent')).toBeUndefined();
  });

  test('registerBatch adds multiple flaws', () => {
    FlawRegistryService.registerBatch([testFlaw, penaltyFlaw]);
    expect(FlawRegistryService.getCount()).toBe(2);
    expect(FlawRegistryService.getFlaw('test_flaw')).toBeDefined();
    expect(FlawRegistryService.getFlaw('penalty_flaw')).toBeDefined();
  });

  test('getAllFlaws returns all registered flaws', () => {
    FlawRegistryService.registerBatch([testFlaw, penaltyFlaw]);
    const all = FlawRegistryService.getAllFlaws();
    expect(all).toHaveLength(2);
  });

  test('getFlawsBySource filters by source', () => {
    FlawRegistryService.registerBatch([testFlaw, penaltyFlaw, otherSourceFlaw]);
    const results = FlawRegistryService.getFlawsBySource('3.5e');
    expect(results).toHaveLength(2);
    expect(results.every((f) => f.source === '3.5e')).toBe(true);
  });

  test('getFlawsBySource returns empty array for unknown source', () => {
    FlawRegistryService.registerBatch([testFlaw, penaltyFlaw]);
    expect(FlawRegistryService.getFlawsBySource('unknown')).toHaveLength(0);
  });

  test('clear removes all flaws', () => {
    FlawRegistryService.registerBatch([testFlaw, penaltyFlaw]);
    FlawRegistryService.clear();
    expect(FlawRegistryService.getCount()).toBe(0);
  });

  describe('FLAWS_3_5E seed data', () => {
    beforeEach(() => {
      FlawRegistryService.registerBatch(FLAWS_3_5E);
    });

    test('seeds at least 8 flaws', () => {
      expect(FlawRegistryService.getCount()).toBeGreaterThanOrEqual(8);
    });

    test('getFlawsBySource returns all seeded 3.5e entries', () => {
      const results = FlawRegistryService.getFlawsBySource('3.5e');
      expect(results.length).toBe(FLAWS_3_5E.length);
    });

    test('each seeded flaw has a non-empty effects array', () => {
      const all = FlawRegistryService.getAllFlaws();
      for (const flaw of all) {
        expect(flaw.effects.length).toBeGreaterThan(0);
      }
    });

    test('getFlaw returns populated FlawDefinition for each seeded id', () => {
      for (const flaw of FLAWS_3_5E) {
        const found = FlawRegistryService.getFlaw(flaw.id);
        expect(found).toBeDefined();
        expect(found?.name).toBe(flaw.name);
        expect(found?.effects.length).toBeGreaterThan(0);
      }
    });

    test('noncombatant flaw is seeded with correct penalty', () => {
      const flaw = FlawRegistryService.getFlaw('noncombatant');
      expect(flaw).toBeDefined();
      expect(flaw?.effects[0].type).toBe('penalty');
      expect(flaw?.effects[0].target).toBe('attack.melee');
    });

    test("Taboo Proficiency and Deity's Wrath are absent", () => {
      expect(FlawRegistryService.getFlaw('taboo_proficiency')).toBeUndefined();
      expect(FlawRegistryService.getFlaw('deitys_wrath')).toBeUndefined();
    });
  });
});
