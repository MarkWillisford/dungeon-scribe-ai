import { toggleCondition } from '@store/thunks/conditionThunks';
import { setActiveCharacter } from '@store/slices/charactersSlice';
import { ModifierPipelineService } from '@/services/ModifierPipelineService';
import type { Character } from '@/types';
import type { RootState } from '@store/store';
import type { Condition } from '@/types/character';

jest.mock('@/services/ModifierPipelineService', () => ({
  ModifierPipelineService: {
    recalculate: jest.fn((char: Character) => ({ ...char, _recalculated: true })),
  },
}));

function makeCondition(name: string): Condition {
  return { name, description: '', effects: [] };
}

function makeCharacter(conditions: Condition[] = []): Character {
  return {
    conditions: { activeConditions: conditions },
    buffs: [],
    savedBuffs: [],
  } as unknown as Character;
}

function makeState(character: Character | null): RootState {
  return {
    characters: { activeCharacter: character, characters: [], loading: false, error: null },
  } as unknown as RootState;
}

function runThunk(
  thunk: (dispatch: jest.Mock, getState: () => RootState) => void,
  state: RootState,
) {
  const dispatch = jest.fn();
  thunk(dispatch, () => state);
  return { dispatch };
}

describe('toggleCondition thunk', () => {
  beforeEach(() => {
    (ModifierPipelineService.recalculate as jest.Mock).mockImplementation((char: Character) => ({
      ...char,
      _recalculated: true,
    }));
  });

  it('does nothing when no active character', () => {
    const { dispatch } = runThunk(toggleCondition('Shaken'), makeState(null));
    expect(dispatch).not.toHaveBeenCalled();
  });

  it('adds a condition when it is not yet active', () => {
    const character = makeCharacter([]);
    const { dispatch } = runThunk(toggleCondition('Shaken'), makeState(character));
    expect(dispatch).toHaveBeenCalledWith(setActiveCharacter(expect.anything()));
    const dispatched = dispatch.mock.calls[0][0];
    const updatedChar = dispatched.payload as Character;
    expect(updatedChar.conditions.activeConditions.some((c) => c.name === 'Shaken')).toBe(true);
  });

  it('removes a condition when it is already active', () => {
    const character = makeCharacter([makeCondition('Shaken')]);
    const { dispatch } = runThunk(toggleCondition('Shaken'), makeState(character));
    const dispatched = dispatch.mock.calls[0][0];
    const updatedChar = dispatched.payload as Character;
    expect(updatedChar.conditions.activeConditions.some((c) => c.name === 'Shaken')).toBe(false);
  });

  it('calls ModifierPipelineService.recalculate after toggling', () => {
    const character = makeCharacter([]);
    runThunk(toggleCondition('Fatigued'), makeState(character));
    expect(ModifierPipelineService.recalculate).toHaveBeenCalled();
  });

  it('preserves other conditions when toggling one off', () => {
    const character = makeCharacter([makeCondition('Shaken'), makeCondition('Fatigued')]);
    const { dispatch } = runThunk(toggleCondition('Shaken'), makeState(character));
    const dispatched = dispatch.mock.calls[0][0];
    const updatedChar = dispatched.payload as Character;
    expect(updatedChar.conditions.activeConditions.some((c) => c.name === 'Fatigued')).toBe(true);
    expect(updatedChar.conditions.activeConditions.some((c) => c.name === 'Shaken')).toBe(false);
  });

  it('does nothing for an unknown condition name', () => {
    const character = makeCharacter([]);
    const { dispatch } = runThunk(toggleCondition('NonExistentCondition'), makeState(character));
    expect(dispatch).not.toHaveBeenCalled();
  });

  it('adds condition effects to the character', () => {
    const character = makeCharacter([]);
    const { dispatch } = runThunk(toggleCondition('Shaken'), makeState(character));
    const dispatched = dispatch.mock.calls[0][0];
    const updatedChar = dispatched.payload as Character;
    const shaken = updatedChar.conditions.activeConditions.find((c) => c.name === 'Shaken');
    expect(shaken?.effects.length).toBeGreaterThan(0);
  });
});
