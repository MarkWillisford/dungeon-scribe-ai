import { FlawRegistryService } from '@services/FlawRegistryService';
import { BonusType } from '@/types/base';
import type { FlawDefinition } from '@/types/flaws';

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
});
