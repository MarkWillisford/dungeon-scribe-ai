import combatReducer, {
  addBuff,
  endTurnDecrement,
  startTurnApply,
} from '@store/slices/combatSlice';
import { endTurn, startTurn } from '@store/thunks/turnThunks';
import { BonusType } from '@/types/base';
import { Buff } from '@/types/buff';
import { ModifierPipelineService } from '@/services/ModifierPipelineService';
import type { Character } from '@/types';
import type { RootState } from '@store/store';

jest.mock('@/services/ModifierPipelineService', () => ({
  ModifierPipelineService: {
    recalculate: jest.fn((char: Character) => char),
  },
}));

// ----------------------------------------------------------------
// Helpers
// ----------------------------------------------------------------

function makeBuff(overrides: Partial<Buff> = {}): Buff {
  return {
    id: 'test_buff',
    name: 'Test Buff',
    source: 'Test',
    bonusType: BonusType.MORALE,
    duration: 3,
    durationType: 'rounds',
    isActive: true,
    effects: [],
    ...overrides,
  };
}

function makeMinimalCharacter(overrides: Partial<Character> = {}): Character {
  return {
    conditions: { activeConditions: [] },
    buffs: [],
    savedBuffs: [],
    ...overrides,
  } as unknown as Character;
}

function makeState(
  combatState: ReturnType<typeof combatReducer>,
  activeCharacter: Character | null = null,
): RootState {
  return {
    combat: combatState,
    characters: { activeCharacter, characters: [], loading: false, error: null },
  } as unknown as RootState;
}

function runThunk<R>(
  thunkFn: (dispatch: jest.Mock, getState: () => RootState) => R,
  state: RootState,
) {
  const dispatch = jest.fn();
  thunkFn(dispatch, () => state);
  return { dispatch };
}

// ----------------------------------------------------------------
// endTurnDecrement reducer (pure state tests)
// ----------------------------------------------------------------

describe('endTurnDecrement reducer', () => {
  const getInitial = () => combatReducer(undefined, { type: '@@INIT' });

  it('removes a buff with exactly 1 round remaining', () => {
    let state = getInitial();
    state = combatReducer(state, addBuff(makeBuff({ id: 'expiring', duration: 1 })));
    state = combatReducer(state, endTurnDecrement());
    expect(state.activeBuffs.find((b) => b.id === 'expiring')).toBeUndefined();
  });

  it('decrements multiple buffs correctly in one call', () => {
    let state = getInitial();
    state = combatReducer(state, addBuff(makeBuff({ id: 'b1', duration: 5 })));
    state = combatReducer(state, addBuff(makeBuff({ id: 'b2', duration: 2 })));
    state = combatReducer(state, addBuff(makeBuff({ id: 'b3', duration: 1 })));
    state = combatReducer(state, endTurnDecrement());

    expect(state.activeBuffs.find((b) => b.id === 'b1')?.duration).toBe(4);
    expect(state.activeBuffs.find((b) => b.id === 'b2')?.duration).toBe(1);
    expect(state.activeBuffs.find((b) => b.id === 'b3')).toBeUndefined();
  });

  it('does not decrement permanent buffs', () => {
    let state = getInitial();
    state = combatReducer(
      state,
      addBuff(makeBuff({ id: 'perm', duration: null, durationType: 'permanent' })),
    );
    state = combatReducer(state, endTurnDecrement());
    expect(state.activeBuffs).toHaveLength(1);
  });

  it('does not decrement non-round buffs', () => {
    let state = getInitial();
    state = combatReducer(
      state,
      addBuff(makeBuff({ id: 'min', duration: 5, durationType: 'minutes' })),
    );
    state = combatReducer(state, endTurnDecrement());
    expect(state.activeBuffs[0].duration).toBe(5);
  });
});

// ----------------------------------------------------------------
// endTurn thunk
// ----------------------------------------------------------------

describe('endTurn thunk', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (ModifierPipelineService.recalculate as jest.Mock).mockImplementation((char) => char);
  });

  it('dispatches endTurnDecrement', () => {
    const combatState = combatReducer(undefined, { type: '@@INIT' });
    const state = makeState(combatState, makeMinimalCharacter());
    const { dispatch } = runThunk(endTurn(), state);
    const types = (dispatch.mock.calls as Array<[{ type: string }]>).map(([a]) => a.type);
    expect(types).toContain(endTurnDecrement().type);
  });

  it('calls recalculate() after removal (verify via spy)', () => {
    let combatState = combatReducer(undefined, { type: '@@INIT' });
    combatState = combatReducer(combatState, addBuff(makeBuff({ id: 'expiring', duration: 1 })));
    const state = makeState(combatState, makeMinimalCharacter());

    runThunk(endTurn(), state);

    expect(ModifierPipelineService.recalculate).toHaveBeenCalledTimes(1);
  });

  it('does not call recalculate() when no active character', () => {
    let combatState = combatReducer(undefined, { type: '@@INIT' });
    combatState = combatReducer(combatState, addBuff(makeBuff({ id: 'buf', duration: 2 })));
    const state = makeState(combatState, null);

    runThunk(endTurn(), state);

    expect(ModifierPipelineService.recalculate).not.toHaveBeenCalled();
  });

  it('decrements a tracked condition duration', () => {
    const combatState = combatReducer(undefined, { type: '@@INIT' });
    const character = makeMinimalCharacter({
      conditions: {
        activeConditions: [
          {
            name: 'Shaken',
            description: '',
            effects: [],
            duration: { type: 'rounds', value: 3, remaining: 3 },
          },
        ],
      },
    });
    const state = makeState(combatState, character);

    const { dispatch } = runThunk(endTurn(), state);

    // The character dispatched to setActiveCharacter should have remaining = 2
    const setActiveCall = (dispatch.mock.calls as Array<[{ payload?: Character }]>).find(
      ([a]) => a && 'payload' in a && (a.payload as Character)?.conditions !== undefined,
    );
    expect(setActiveCall).toBeDefined();
    const updatedChar = setActiveCall![0].payload as Character;
    expect(updatedChar.conditions.activeConditions[0].duration?.remaining).toBe(2);
  });

  it('removes a condition that reaches 0 duration', () => {
    const combatState = combatReducer(undefined, { type: '@@INIT' });
    const character = makeMinimalCharacter({
      conditions: {
        activeConditions: [
          {
            name: 'Shaken',
            description: '',
            effects: [],
            duration: { type: 'rounds', value: 1, remaining: 1 },
          },
        ],
      },
    });
    const state = makeState(combatState, character);

    const { dispatch } = runThunk(endTurn(), state);

    const setActiveCall = (dispatch.mock.calls as Array<[{ payload?: Character }]>).find(
      ([a]) => a && 'payload' in a && (a.payload as Character)?.conditions !== undefined,
    );
    const updatedChar = setActiveCall![0].payload as Character;
    expect(updatedChar.conditions.activeConditions).toHaveLength(0);
  });

  it('preserves conditions without tracked durations', () => {
    const combatState = combatReducer(undefined, { type: '@@INIT' });
    const character = makeMinimalCharacter({
      conditions: {
        activeConditions: [{ name: 'Blind', description: '', effects: [] }],
      },
    });
    const state = makeState(combatState, character);

    const { dispatch } = runThunk(endTurn(), state);

    const setActiveCall = (dispatch.mock.calls as Array<[{ payload?: Character }]>).find(
      ([a]) => a && 'payload' in a && (a.payload as Character)?.conditions !== undefined,
    );
    const updatedChar = setActiveCall![0].payload as Character;
    expect(updatedChar.conditions.activeConditions).toHaveLength(1);
  });
});

// ----------------------------------------------------------------
// startTurnApply reducer
// ----------------------------------------------------------------

describe('startTurnApply reducer', () => {
  it('is a no-op on state (stubs only)', () => {
    const before = combatReducer(undefined, { type: '@@INIT' });
    const after = combatReducer(before, startTurnApply());
    expect(after).toEqual(before);
  });
});

// ----------------------------------------------------------------
// startTurn thunk
// ----------------------------------------------------------------

describe('startTurn thunk', () => {
  it('dispatches startTurnApply', () => {
    const combatState = combatReducer(undefined, { type: '@@INIT' });
    const state = makeState(combatState, makeMinimalCharacter());
    const { dispatch } = runThunk(startTurn(), state);
    const types = (dispatch.mock.calls as Array<[{ type: string }]>).map(([a]) => a.type);
    expect(types).toContain(startTurnApply().type);
  });

  it('dispatches without error when no active character', () => {
    const combatState = combatReducer(undefined, { type: '@@INIT' });
    const state = makeState(combatState, null);
    expect(() => runThunk(startTurn(), state)).not.toThrow();
  });
});
