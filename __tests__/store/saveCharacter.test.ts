import { saveCharacter } from '@/store/thunks/saveCharacter';
import { FirebaseCharacterService } from '@/services/FirebaseCharacterService';
import { setSaving, setSaveError } from '@/store/slices/characterEntrySlice';
import type { Character } from '@/types/index';
import type { RootState } from '@/store/store';

jest.mock('@/services/FirebaseCharacterService');

const mockCreate = FirebaseCharacterService.create as jest.Mock;
const mockUpdate = FirebaseCharacterService.update as jest.Mock;

// ---- Minimal state builder ----

function makeState(overrides: {
  mode?: 'new' | 'edit' | 'import';
  originalCharacterId?: string | null;
  uid?: string | null;
  name?: string;
}): RootState {
  const { mode = 'new', originalCharacterId = null, uid = 'user-123', name = 'Test' } = overrides;
  return {
    characterEntry: {
      character: { info: { id: 'char-1', name } } as unknown as Character,
      mode,
      originalCharacterId,
      isSaving: false,
      saveError: null,
    },
    auth: { user: uid ? { uid } : null },
  } as unknown as RootState;
}

// ---- Thunk runner ----

function makeThunkAPI(state: RootState) {
  const dispatch = jest.fn();
  const getState = () => state;
  return { dispatch, getState };
}

const SAVED_CHARACTER = { info: { id: 'char-1', name: 'Saved' } } as unknown as Character;

beforeEach(() => {
  jest.clearAllMocks();
  mockCreate.mockResolvedValue(SAVED_CHARACTER);
  mockUpdate.mockResolvedValue(SAVED_CHARACTER);
});

describe('saveCharacter thunk', () => {
  describe('unnamed character', () => {
    it('refuses to save a character with no name', async () => {
      // The delete confirmation asks the user to type the character's name, so a
      // nameless document cannot be removed from inside the app at all. Two of
      // them were created by pressing Save on an untouched blank draft.
      const state = makeState({ name: '' });
      const { dispatch, getState } = makeThunkAPI(state);
      const result = await saveCharacter()(dispatch, getState, undefined);

      expect(result.type).toBe('characterEntry/save/rejected');
      expect((result as { payload: string }).payload).toMatch(/name/i);
    });

    it('refuses a name that is only whitespace', async () => {
      const state = makeState({ name: '   ' });
      const { dispatch, getState } = makeThunkAPI(state);
      const result = await saveCharacter()(dispatch, getState, undefined);
      expect(result.type).toBe('characterEntry/save/rejected');
    });

    it('writes nothing when the name is missing', async () => {
      const state = makeState({ name: '' });
      const { dispatch, getState } = makeThunkAPI(state);
      await saveCharacter()(dispatch, getState, undefined);

      expect(mockCreate).not.toHaveBeenCalled();
      expect(mockUpdate).not.toHaveBeenCalled();
    });
  });

  describe('unauthenticated', () => {
    it('rejects with "Not authenticated" when user is null', async () => {
      const state = makeState({ uid: null });
      const { dispatch, getState } = makeThunkAPI(state);
      const thunk = saveCharacter();
      const result = await thunk(dispatch, getState, undefined);
      expect(result.type).toBe('characterEntry/save/rejected');
      expect((result as { payload: string }).payload).toBe('Not authenticated');
    });

    it('does not call FirebaseCharacterService when unauthenticated', async () => {
      const state = makeState({ uid: null });
      const { dispatch, getState } = makeThunkAPI(state);
      await saveCharacter()(dispatch, getState, undefined);
      expect(mockCreate).not.toHaveBeenCalled();
      expect(mockUpdate).not.toHaveBeenCalled();
    });
  });

  describe('new mode — create', () => {
    it('dispatches setSaving(true) before calling Firebase', async () => {
      const state = makeState({ mode: 'new' });
      const { dispatch, getState } = makeThunkAPI(state);
      await saveCharacter()(dispatch, getState, undefined);
      const calls = dispatch.mock.calls.map((c: [{ type: string; payload: unknown }]) => c[0]);
      const savingTrue = calls.find((c) => c.type === setSaving.type && c.payload === true);
      expect(savingTrue).toBeDefined();
    });

    it('dispatches setSaveError(null) before calling Firebase', async () => {
      const state = makeState({ mode: 'new' });
      const { dispatch, getState } = makeThunkAPI(state);
      await saveCharacter()(dispatch, getState, undefined);
      const calls = dispatch.mock.calls.map((c: [{ type: string; payload: unknown }]) => c[0]);
      expect(calls.find((c) => c.type === setSaveError.type && c.payload === null)).toBeDefined();
    });

    it('calls FirebaseCharacterService.create with userId and character', async () => {
      const state = makeState({ mode: 'new', uid: 'user-abc' });
      const { dispatch, getState } = makeThunkAPI(state);
      await saveCharacter()(dispatch, getState, undefined);
      expect(mockCreate).toHaveBeenCalledTimes(1);
      expect(mockCreate.mock.calls[0][0]).toBe('user-abc');
    });

    it('does not call FirebaseCharacterService.update in new mode', async () => {
      const state = makeState({ mode: 'new' });
      const { dispatch, getState } = makeThunkAPI(state);
      await saveCharacter()(dispatch, getState, undefined);
      expect(mockUpdate).not.toHaveBeenCalled();
    });

    it('sets lastUpdated on the character passed to create', async () => {
      const state = makeState({ mode: 'new' });
      const { dispatch, getState } = makeThunkAPI(state);
      await saveCharacter()(dispatch, getState, undefined);
      const passedCharacter = mockCreate.mock.calls[0][1] as Character;
      expect(passedCharacter.lastUpdated).toBeInstanceOf(Date);
    });

    it('dispatches setSaving(false) after successful create', async () => {
      const state = makeState({ mode: 'new' });
      const { dispatch, getState } = makeThunkAPI(state);
      await saveCharacter()(dispatch, getState, undefined);
      const calls = dispatch.mock.calls.map((c: [{ type: string; payload: unknown }]) => c[0]);
      expect(calls.find((c) => c.type === setSaving.type && c.payload === false)).toBeDefined();
    });

    it('returns the saved character on success', async () => {
      const state = makeState({ mode: 'new' });
      const { dispatch, getState } = makeThunkAPI(state);
      const result = await saveCharacter()(dispatch, getState, undefined);
      expect(result.type).toBe('characterEntry/save/fulfilled');
      expect((result as { payload: Character }).payload).toBe(SAVED_CHARACTER);
    });
  });

  describe('edit mode — update', () => {
    it('calls FirebaseCharacterService.update with originalCharacterId', async () => {
      const state = makeState({ mode: 'edit', originalCharacterId: 'existing-id' });
      const { dispatch, getState } = makeThunkAPI(state);
      await saveCharacter()(dispatch, getState, undefined);
      expect(mockUpdate).toHaveBeenCalledTimes(1);
      expect(mockUpdate.mock.calls[0][0]).toBe('existing-id');
    });

    it('does not call create in edit mode with originalCharacterId', async () => {
      const state = makeState({ mode: 'edit', originalCharacterId: 'existing-id' });
      const { dispatch, getState } = makeThunkAPI(state);
      await saveCharacter()(dispatch, getState, undefined);
      expect(mockCreate).not.toHaveBeenCalled();
    });

    it('falls back to create when mode=edit but originalCharacterId is null', async () => {
      const state = makeState({ mode: 'edit', originalCharacterId: null });
      const { dispatch, getState } = makeThunkAPI(state);
      await saveCharacter()(dispatch, getState, undefined);
      expect(mockCreate).toHaveBeenCalledTimes(1);
      expect(mockUpdate).not.toHaveBeenCalled();
    });
  });

  describe('import mode — create', () => {
    it('calls create in import mode', async () => {
      const state = makeState({ mode: 'import' });
      const { dispatch, getState } = makeThunkAPI(state);
      await saveCharacter()(dispatch, getState, undefined);
      expect(mockCreate).toHaveBeenCalledTimes(1);
    });
  });

  describe('error handling', () => {
    it('dispatches setSaving(false) when create throws', async () => {
      mockCreate.mockRejectedValueOnce(new Error('Network error'));
      const state = makeState({ mode: 'new' });
      const { dispatch, getState } = makeThunkAPI(state);
      await saveCharacter()(dispatch, getState, undefined);
      const calls = dispatch.mock.calls.map((c: [{ type: string; payload: unknown }]) => c[0]);
      expect(calls.find((c) => c.type === setSaving.type && c.payload === false)).toBeDefined();
    });

    it('dispatches setSaveError with error message when create throws', async () => {
      mockCreate.mockRejectedValueOnce(new Error('Network error'));
      const state = makeState({ mode: 'new' });
      const { dispatch, getState } = makeThunkAPI(state);
      await saveCharacter()(dispatch, getState, undefined);
      const calls = dispatch.mock.calls.map((c: [{ type: string; payload: unknown }]) => c[0]);
      expect(
        calls.find((c) => c.type === setSaveError.type && c.payload === 'Network error'),
      ).toBeDefined();
    });

    it('rejects with error message when create throws', async () => {
      mockCreate.mockRejectedValueOnce(new Error('Network error'));
      const state = makeState({ mode: 'new' });
      const { dispatch, getState } = makeThunkAPI(state);
      const result = await saveCharacter()(dispatch, getState, undefined);
      expect(result.type).toBe('characterEntry/save/rejected');
      expect((result as { payload: string }).payload).toBe('Network error');
    });

    it('uses "Save failed" fallback message for non-Error throws', async () => {
      mockCreate.mockRejectedValueOnce('string error');
      const state = makeState({ mode: 'new' });
      const { dispatch, getState } = makeThunkAPI(state);
      const result = await saveCharacter()(dispatch, getState, undefined);
      expect((result as { payload: string }).payload).toBe('Save failed');
    });

    it('dispatches setSaving(false) when update throws', async () => {
      mockUpdate.mockRejectedValueOnce(new Error('Firestore error'));
      const state = makeState({ mode: 'edit', originalCharacterId: 'id-1' });
      const { dispatch, getState } = makeThunkAPI(state);
      await saveCharacter()(dispatch, getState, undefined);
      const calls = dispatch.mock.calls.map((c: [{ type: string; payload: unknown }]) => c[0]);
      expect(calls.find((c) => c.type === setSaving.type && c.payload === false)).toBeDefined();
    });
  });
});
