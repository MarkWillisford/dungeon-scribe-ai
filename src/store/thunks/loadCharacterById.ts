import { createAsyncThunk } from '@reduxjs/toolkit';
import { Character } from '@/types';
import { FirebaseCharacterService } from '@/services/FirebaseCharacterService';

export const loadCharacterById = createAsyncThunk<Character, string, { rejectValue: string }>(
  'characterEntry/loadById',
  async (characterId, { rejectWithValue }) => {
    try {
      return await FirebaseCharacterService.getCharacter(characterId);
    } catch (e) {
      return rejectWithValue(e instanceof Error ? e.message : 'Failed to load character');
    }
  },
);
