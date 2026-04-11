import rulesetReducer, { setActiveRuleset, clearRuleset } from '@store/slices/rulesetSlice';
import type { Ruleset } from '@/types/ruleset';

const mockRuleset: Ruleset = {
  id: 'preset-pf1e-standard',
  name: 'PF1e Standard',
  visibility: 'global',
  ownerId: 'system',
  allowedSources: ['pf1e-official'],
  optionalRules: {
    heroPoints: false,
    gestalt: false,
    fractionalBABSaves: false,
    variantMulticlassing: false,
    eitrMode: 'off',
    relaxedEntry: false,
    mythic: false,
    pathOfWarMechanics: false,
    tomeOfBattleMechanics: false,
    crTemplates: true,
    laTemplates: true,
    crRefunds: false,
    laBuyback: false,
    crLaAbilityScoreReductions: true,
  },
  itemOverrides: { banned: [], allowed: [] },
  campaignRequirements: {},
  validationSettings: {
    abilityScoreMethod: 'point-buy',
    pointBuyBudget: 20,
    maxTraits: 2,
    minTraits: 0,
  },
  version: 1,
  createdAt: '2026-04-09T00:00:00.000Z',
  updatedAt: '2026-04-09T00:00:00.000Z',
};

describe('rulesetSlice', () => {
  const initialState = { activeRuleset: null };

  it('should return the initial state', () => {
    expect(rulesetReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  describe('setActiveRuleset', () => {
    it('sets the active ruleset', () => {
      const state = rulesetReducer(initialState, setActiveRuleset(mockRuleset));
      expect(state.activeRuleset).toEqual(mockRuleset);
    });

    it('replaces an existing active ruleset', () => {
      const existing = { activeRuleset: { ...mockRuleset, name: 'Old Ruleset' } };
      const state = rulesetReducer(existing, setActiveRuleset(mockRuleset));
      expect(state.activeRuleset?.name).toBe('PF1e Standard');
    });
  });

  describe('clearRuleset', () => {
    it('clears the active ruleset', () => {
      const stateWithRuleset = { activeRuleset: mockRuleset };
      const state = rulesetReducer(stateWithRuleset, clearRuleset());
      expect(state.activeRuleset).toBeNull();
    });

    it('is a no-op when already null', () => {
      const state = rulesetReducer(initialState, clearRuleset());
      expect(state.activeRuleset).toBeNull();
    });
  });
});
