import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Ruleset } from '@/types/ruleset';
import { PRESET_PF1E_STANDARD } from '@/data/rulesets/presets';

interface RulesetState {
  activeRuleset: Ruleset;
  isModifiedFromPreset: boolean;
}

const initialState: RulesetState = {
  activeRuleset: PRESET_PF1E_STANDARD,
  isModifiedFromPreset: false,
};

const rulesetSlice = createSlice({
  name: 'ruleset',
  initialState,
  reducers: {
    setActiveRuleset(state, action: PayloadAction<Ruleset>) {
      state.activeRuleset = action.payload;
      state.isModifiedFromPreset = false;
    },
    clearRuleset(state) {
      state.activeRuleset = PRESET_PF1E_STANDARD;
      state.isModifiedFromPreset = false;
    },
    // Shallow-merge a partial update into the active ruleset.
    // Callers must spread nested objects themselves:
    //   patchActiveRuleset({ optionalRules: { ...current.optionalRules, heroPoints: true } })
    patchActiveRuleset(state, action: PayloadAction<Partial<Ruleset>>) {
      state.activeRuleset = {
        ...state.activeRuleset,
        ...action.payload,
        version: state.activeRuleset.version + 1,
        updatedAt: new Date().toISOString(),
      };
      state.isModifiedFromPreset = true;
    },
  },
});

export const { setActiveRuleset, clearRuleset, patchActiveRuleset } = rulesetSlice.actions;
export default rulesetSlice.reducer;
