import { createAsyncThunk } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import type { Character } from '@/types/index';
import { FirebaseCharacterService } from '@/services/FirebaseCharacterService';
import { setSaving, setSaveError, markSaved } from '../slices/characterEntrySlice';

export const saveCharacter = createAsyncThunk<
  Character,
  void,
  { state: RootState; rejectValue: string }
>('characterEntry/save', async (_, { dispatch, getState, rejectWithValue }) => {
  const { character, mode, originalCharacterId } = getState().characterEntry;
  const userId = getState().auth.user?.uid;
  if (!userId) return rejectWithValue('Not authenticated');

  dispatch(setSaving(true));
  dispatch(setSaveError(null));

  const toSave: Character = { ...character, lastUpdated: new Date() };

  try {
    let saved: Character;
    if (mode === 'edit' && originalCharacterId) {
      saved = await FirebaseCharacterService.update(originalCharacterId, toSave);
    } else {
      saved = await FirebaseCharacterService.create(userId, toSave);
      // Bind the session to the document just created, so a second save updates
      // it instead of creating another copy (#355). create() returns the new
      // Firestore document ID on info.firebaseId.
      const newCharacterId = saved.info?.firebaseId;
      if (newCharacterId) {
        dispatch(markSaved({ characterId: newCharacterId }));
      }
    }
    dispatch(setSaving(false));
    return saved;
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Save failed';
    dispatch(setSaving(false));
    dispatch(setSaveError(message));
    return rejectWithValue(message);
  }
});
