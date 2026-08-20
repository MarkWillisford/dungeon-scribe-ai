import { createAsyncThunk } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import type { Character } from '@/types/index';
import { FirebaseCharacterService } from '@/services/FirebaseCharacterService';
import { setSaving, setSaveError } from '../slices/characterEntrySlice';

export const saveCharacter = createAsyncThunk<
  Character,
  void,
  { state: RootState; rejectValue: string }
>('characterEntry/save', async (_, { dispatch, getState, rejectWithValue }) => {
  const { character, mode, originalCharacterId } = getState().characterEntry;
  const userId = getState().auth.user?.uid;
  if (!userId) return rejectWithValue('Not authenticated');

  // A character with no name cannot be deleted through the UI, which asks the
  // user to type the name to confirm. Saving a blank draft therefore creates a
  // document that can never be removed from inside the app, so refuse it here
  // rather than leave the user to discover that afterwards.
  if (!character.info.name?.trim()) {
    return rejectWithValue('Give the character a name before saving.');
  }

  dispatch(setSaving(true));
  dispatch(setSaveError(null));

  const toSave: Character = { ...character, lastUpdated: new Date() };

  try {
    let saved: Character;
    if (mode === 'edit' && originalCharacterId) {
      saved = await FirebaseCharacterService.update(originalCharacterId, toSave);
    } else {
      saved = await FirebaseCharacterService.create(userId, toSave);
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
