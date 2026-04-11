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
  },
});

export const { setActiveRuleset, clearRuleset } = rulesetSlice.actions;
export default rulesetSlice.reducer;
