import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Ruleset } from '@/types/ruleset';

interface RulesetState {
  activeRuleset: Ruleset | null;
}

const initialState: RulesetState = {
  activeRuleset: null,
};

const rulesetSlice = createSlice({
  name: 'ruleset',
  initialState,
  reducers: {
    setActiveRuleset(state, action: PayloadAction<Ruleset>) {
      state.activeRuleset = action.payload;
    },
    clearRuleset(state) {
      state.activeRuleset = null;
    },
    // Shallow-merge a partial update into the active ruleset.
    // Callers must spread nested objects themselves:
    //   patchActiveRuleset({ optionalRules: { ...current.optionalRules, heroPoints: true } })
    patchActiveRuleset(state, action: PayloadAction<Partial<Ruleset>>) {
      if (!state.activeRuleset) return;
      state.activeRuleset = {
        ...state.activeRuleset,
        ...action.payload,
        updatedAt: new Date().toISOString(),
      };
    },
  },
});

export const { setActiveRuleset, clearRuleset, patchActiveRuleset } = rulesetSlice.actions;
export default rulesetSlice.reducer;
