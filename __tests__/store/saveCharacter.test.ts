import { saveCharacter } from '@/store/thunks/saveCharacter';
import { FirebaseCharacterService } from '@/services/FirebaseCharacterService';
import characterEntryReducer, {
  setSaving,
  setSaveError,
  markSaved,
  loadCharacter,
  setName,
} from '@/store/slices/characterEntrySlice';
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
}): RootState {
  const { mode = 'new', originalCharacterId = null, uid = 'user-123' } = overrides;
  return {
    characterEntry: {
      character: { info: { id: 'char-1', name: 'Test' } } as unknown as Character,
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

  // Regression coverage for #355 — saving twice in one session created a second
  // character instead of updating the first.
  describe('binding the session to the created document (#355)', () => {
    const SAVED_WITH_ID = {
      info: { id: 'char-1', name: 'Saved', firebaseId: 'firestore-doc-1' },
    } as unknown as Character;

    it('dispatches markSaved with the new Firestore document ID after create', async () => {
      mockCreate.mockResolvedValueOnce(SAVED_WITH_ID);
      const state = makeState({ mode: 'new' });
      const { dispatch, getState } = makeThunkAPI(state);
      await saveCharacter()(dispatch, getState, undefined);
      const calls = dispatch.mock.calls.map((c: [{ type: string; payload: unknown }]) => c[0]);
      const bound = calls.find((c) => c.type === markSaved.type);
      expect(bound).toBeDefined();
      expect(bound?.payload).toEqual({ characterId: 'firestore-doc-1' });
    });

    it('dispatches markSaved with the existing ID after an update, so both paths settle alike', async () => {
      mockUpdate.mockResolvedValueOnce(SAVED_WITH_ID);
      const state = makeState({ mode: 'edit', originalCharacterId: 'existing-id' });
      const { dispatch, getState } = makeThunkAPI(state);
      await saveCharacter()(dispatch, getState, undefined);
      const calls = dispatch.mock.calls.map((c: [{ type: string; payload: unknown }]) => c[0]);
      const bound = calls.find((c) => c.type === markSaved.type);
      expect(bound).toBeDefined();
      expect(bound?.payload).toEqual({ characterId: 'existing-id' });
    });

    it('does not dispatch markSaved when a save fails', async () => {
      mockCreate.mockRejectedValueOnce(new Error('Network error'));
      const state = makeState({ mode: 'new' });
      const { dispatch, getState } = makeThunkAPI(state);
      await saveCharacter()(dispatch, getState, undefined);
      const calls = dispatch.mock.calls.map((c: [{ type: string; payload: unknown }]) => c[0]);
      expect(calls.find((c) => c.type === markSaved.type)).toBeUndefined();
    });

    it('does not dispatch markSaved when create returns no firebaseId', async () => {
      mockCreate.mockResolvedValueOnce(SAVED_CHARACTER); // no firebaseId
      const state = makeState({ mode: 'new' });
      const { dispatch, getState } = makeThunkAPI(state);
      await saveCharacter()(dispatch, getState, undefined);
      const calls = dispatch.mock.calls.map((c: [{ type: string; payload: unknown }]) => c[0]);
      expect(calls.find((c) => c.type === markSaved.type)).toBeUndefined();
    });

    // The bug as the user hit it: enter a character, save, keep editing, save
    // again. Drives the real reducer so the thunk and slice are verified together.
    it('saves twice in one session without creating a second character', async () => {
      mockCreate.mockResolvedValue(SAVED_WITH_ID);
      mockUpdate.mockResolvedValue(SAVED_WITH_ID);

      let entryState = characterEntryReducer(undefined, { type: '@@INIT' });
      // Plain jest.fn() so the mock stays assignable to ThunkDispatch, matching
      // the pattern in makeThunkAPI above.
      const dispatch = jest.fn();
      dispatch.mockImplementation((action: { type: string }) => {
        entryState = characterEntryReducer(entryState, action as never);
        return action;
      });
      const getState = () =>
        ({
          characterEntry: entryState,
          auth: { user: { uid: 'user-123' } },
        }) as unknown as RootState;

      await saveCharacter()(dispatch, getState, undefined);
      await saveCharacter()(dispatch, getState, undefined);

      expect(mockCreate).toHaveBeenCalledTimes(1);
      expect(mockUpdate).toHaveBeenCalledTimes(1);
      expect(mockUpdate.mock.calls[0][0]).toBe('firestore-doc-1');
      expect(entryState.mode).toBe('edit');
      expect(entryState.originalCharacterId).toBe('firestore-doc-1');
    });

    // Both paths must leave the session in the same settled state, or the UI
    // reports unsaved changes differently depending on how the character was
    // saved. Drives the real reducer through an edit-then-save cycle.
    it.each([
      ['create', 'new' as const, null],
      ['update', 'edit' as const, 'existing-id'],
    ])('leaves the session clean after a successful %s', async (_label, mode, originalId) => {
      mockCreate.mockResolvedValue(SAVED_WITH_ID);
      mockUpdate.mockResolvedValue(SAVED_WITH_ID);

      let entryState = characterEntryReducer(undefined, { type: '@@INIT' });
      entryState = characterEntryReducer(
        entryState,
        loadCharacter({
          character: entryState.character,
          mode,
          characterId: originalId ?? undefined,
        }),
      );
      // An edit makes the session dirty, exactly as typing in the UI would.
      entryState = characterEntryReducer(entryState, setName('Kah-Mei'));
      expect(entryState.isDirty).toBe(true);

      const dispatch = jest.fn();
      dispatch.mockImplementation((action: { type: string }) => {
        entryState = characterEntryReducer(entryState, action as never);
        return action;
      });
      const getState = () =>
        ({
          characterEntry: entryState,
          auth: { user: { uid: 'user-123' } },
        }) as unknown as RootState;

      await saveCharacter()(dispatch, getState, undefined);

      expect(entryState.isDirty).toBe(false);
      expect(entryState.mode).toBe('edit');
      expect(entryState.originalCharacterId).toBeTruthy();
    });

    it('leaves the session dirty when the save fails', async () => {
      mockCreate.mockRejectedValueOnce(new Error('Network error'));

      let entryState = characterEntryReducer(undefined, { type: '@@INIT' });
      entryState = characterEntryReducer(entryState, setName('Kah-Mei'));
      expect(entryState.isDirty).toBe(true);

      const dispatch = jest.fn();
      dispatch.mockImplementation((action: { type: string }) => {
        entryState = characterEntryReducer(entryState, action as never);
        return action;
      });
      const getState = () =>
        ({
          characterEntry: entryState,
          auth: { user: { uid: 'user-123' } },
        }) as unknown as RootState;

      await saveCharacter()(dispatch, getState, undefined);

      expect(entryState.isDirty).toBe(true);
      expect(entryState.saveError).toBe('Network error');
      expect(entryState.originalCharacterId).toBeNull();
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
