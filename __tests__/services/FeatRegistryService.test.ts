import { FeatRegistryService } from '@services/FeatRegistryService';
import { BonusType } from '@/types/base';
import type { FeatDefinition } from '@/types/feats';

const testFeat: FeatDefinition = {
  id: 'test_feat',
  name: 'Test Feat',
  description: 'A test feat',
  source: 'Test',
  verificationStatus: 'needs_review',
  types: ['general'],
  prerequisites: [],
  effects: [],
  activationMode: 'passive',
  tags: ['test', 'general'],
};

const combatFeat: FeatDefinition = {
  id: 'combat_test',
  name: 'Combat Test',
  description: 'A combat feat',
  source: 'Test',
  verificationStatus: 'needs_review',
  types: ['combat'],
  prerequisites: [],
  effects: [
    {
      type: 'bonus',
      target: 'attack.melee',
      value: 1,
      bonusType: BonusType.UNTYPED,
      source: 'Combat Test',
    },
  ],
  activationMode: 'passive',
  tags: ['combat', 'attack'],
};

describe('FeatRegistryService', () => {
  beforeEach(() => {
    FeatRegistryService.clear();
  });

  afterEach(() => {
    FeatRegistryService.clear();
  });

  test('register and retrieve a feat', () => {
    FeatRegistryService.register(testFeat);
    expect(FeatRegistryService.getFeat('test_feat')).toEqual(testFeat);
  });

  test('returns undefined for unknown feat', () => {
    expect(FeatRegistryService.getFeat('nonexistent')).toBeUndefined();
  });

  test('registerBatch adds multiple feats', () => {
    FeatRegistryService.registerBatch([testFeat, combatFeat]);
    expect(FeatRegistryService.getCount()).toBe(2);
    expect(FeatRegistryService.getFeat('test_feat')).toBeDefined();
    expect(FeatRegistryService.getFeat('combat_test')).toBeDefined();
  });

  test('getAllFeats returns all registered feats', () => {
    FeatRegistryService.registerBatch([testFeat, combatFeat]);
    const all = FeatRegistryService.getAllFeats();
    expect(all).toHaveLength(2);
  });

  test('getFeatsByType filters by type', () => {
    FeatRegistryService.registerBatch([testFeat, combatFeat]);
    const combat = FeatRegistryService.getFeatsByType('combat');
    expect(combat).toHaveLength(1);
    expect(combat[0].id).toBe('combat_test');
  });

  test('searchFeats finds by name', () => {
    FeatRegistryService.registerBatch([testFeat, combatFeat]);
    const results = FeatRegistryService.searchFeats('combat');
    expect(results.some((f) => f.id === 'combat_test')).toBe(true);
  });

  test('searchFeats finds by tag', () => {
    FeatRegistryService.registerBatch([testFeat, combatFeat]);
    const results = FeatRegistryService.searchFeats('attack');
    expect(results.some((f) => f.id === 'combat_test')).toBe(true);
  });

  test('clear removes all feats', () => {
    FeatRegistryService.registerBatch([testFeat, combatFeat]);
    FeatRegistryService.clear();
    expect(FeatRegistryService.getCount()).toBe(0);
  });
});
