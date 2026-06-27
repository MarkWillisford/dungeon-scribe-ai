import rulesetReducer, {
  setActiveRuleset,
  clearRuleset,
  patchActiveRuleset,
} from '@store/slices/rulesetSlice';
import { PRESET_PF1E_STANDARD } from '@/config/rulesetPresets';
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
    flaws: false,
  },
  itemOverrides: { banned: [], allowed: [] },
  campaignRequirements: {},
  validationSettings: {
    abilityScoreMethod: 'point-buy',
    pointBuyBudget: 20,
    maxTraits: 2,
    maxFlaws: 2,
  },
  version: 1,
  createdAt: '2026-04-09T00:00:00.000Z',
  updatedAt: '2026-04-09T00:00:00.000Z',
};

describe('rulesetSlice', () => {
  const initialState = { activeRuleset: PRESET_PF1E_STANDARD, isModifiedFromPreset: false };

  it('should return the initial state', () => {
    expect(rulesetReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  describe('setActiveRuleset', () => {
    it('sets the active ruleset', () => {
      const state = rulesetReducer(initialState, setActiveRuleset(mockRuleset));
      expect(state.activeRuleset).toEqual(mockRuleset);
    });

    it('replaces an existing active ruleset', () => {
      const existing = {
        activeRuleset: { ...mockRuleset, name: 'Old Ruleset' },
        isModifiedFromPreset: true,
      };
      const state = rulesetReducer(existing, setActiveRuleset(mockRuleset));
      expect(state.activeRuleset?.name).toBe('PF1e Standard');
    });

    it('resets isModifiedFromPreset to false', () => {
      const existing = { activeRuleset: mockRuleset, isModifiedFromPreset: true };
      const state = rulesetReducer(existing, setActiveRuleset(mockRuleset));
      expect(state.isModifiedFromPreset).toBe(false);
    });
  });

  describe('clearRuleset', () => {
    it('resets the active ruleset to the default preset', () => {
      const stateWithRuleset = { activeRuleset: mockRuleset, isModifiedFromPreset: true };
      const state = rulesetReducer(stateWithRuleset, clearRuleset());
      expect(state.activeRuleset).toEqual(PRESET_PF1E_STANDARD);
    });

    it('resets isModifiedFromPreset to false', () => {
      const stateWithRuleset = { activeRuleset: mockRuleset, isModifiedFromPreset: true };
      const state = rulesetReducer(stateWithRuleset, clearRuleset());
      expect(state.isModifiedFromPreset).toBe(false);
    });
  });

  describe('patchActiveRuleset', () => {
    it('patches a top-level field without clobbering others', () => {
      const stateWithRuleset = { activeRuleset: mockRuleset, isModifiedFromPreset: false };
      const state = rulesetReducer(stateWithRuleset, patchActiveRuleset({ name: 'Custom' }));
      expect(state.activeRuleset?.name).toBe('Custom');
      expect(state.activeRuleset?.allowedSources).toEqual(['pf1e-official']);
      expect(state.activeRuleset?.optionalRules.heroPoints).toBe(false);
    });

    it('patches nested optionalRules via caller spread', () => {
      const stateWithRuleset = { activeRuleset: mockRuleset, isModifiedFromPreset: false };
      const state = rulesetReducer(
        stateWithRuleset,
        patchActiveRuleset({
          optionalRules: { ...mockRuleset.optionalRules, heroPoints: true },
        }),
      );
      expect(state.activeRuleset?.optionalRules.heroPoints).toBe(true);
      expect(state.activeRuleset?.optionalRules.gestalt).toBe(false);
    });

    it('patches allowedSources', () => {
      const stateWithRuleset = { activeRuleset: mockRuleset, isModifiedFromPreset: false };
      const state = rulesetReducer(
        stateWithRuleset,
        patchActiveRuleset({ allowedSources: ['pf1e-official', 'dreamscarred'] }),
      );
      expect(state.activeRuleset?.allowedSources).toEqual(['pf1e-official', 'dreamscarred']);
    });

    it('updates updatedAt timestamp', () => {
      const stateWithRuleset = { activeRuleset: mockRuleset, isModifiedFromPreset: false };
      const before = mockRuleset.updatedAt;
      const state = rulesetReducer(stateWithRuleset, patchActiveRuleset({ name: 'New Name' }));
      expect(state.activeRuleset?.updatedAt).not.toBe(before);
    });

    it('increments version', () => {
      const stateWithRuleset = { activeRuleset: mockRuleset, isModifiedFromPreset: false };
      const state = rulesetReducer(stateWithRuleset, patchActiveRuleset({ name: 'New Name' }));
      expect(state.activeRuleset?.version).toBe(mockRuleset.version + 1);
    });

    it('sets isModifiedFromPreset to true', () => {
      const stateWithRuleset = { activeRuleset: mockRuleset, isModifiedFromPreset: false };
      const state = rulesetReducer(stateWithRuleset, patchActiveRuleset({ name: 'New Name' }));
      expect(state.isModifiedFromPreset).toBe(true);
    });
  });
});
