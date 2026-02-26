import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit';
import type { Character, CharacterSummary, CreateCharacterParams } from '@/types';

interface CharactersState {
  characters: CharacterSummary[];
  activeCharacter: Character | null;
  loading: boolean;
  error: string | null;
}

const initialState: CharactersState = {
  characters: [],
  activeCharacter: null,
  loading: false,
  error: null,
};

// Async thunks — implementations will call FirebaseCharacterService (Step 6)
export const fetchCharacters = createAsyncThunk<CharacterSummary[], string>(
  'characters/fetchCharacters',
  async (_userId, { rejectWithValue }) => {
    try {
      // TODO: call FirebaseCharacterService.getUserCharacters()
      throw new Error('Not implemented');
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Failed to fetch characters');
    }
  },
);

export const fetchCharacter = createAsyncThunk<Character, string>(
  'characters/fetchCharacter',
  async (_characterId, { rejectWithValue }) => {
    try {
      // TODO: call FirebaseCharacterService.getCharacter()
      throw new Error('Not implemented');
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Failed to fetch character');
    }
  },
);

export const createCharacter = createAsyncThunk<
  Character,
  { userId: string; data: CreateCharacterParams }
>('characters/createCharacter', async (_params, { rejectWithValue }) => {
  try {
    // TODO: call FirebaseCharacterService.create()
    throw new Error('Not implemented');
  } catch (error) {
    return rejectWithValue(error instanceof Error ? error.message : 'Failed to create character');
  }
});

export const updateCharacter = createAsyncThunk<
  Character,
  { characterId: string; data: Partial<Character> }
>('characters/updateCharacter', async (_params, { rejectWithValue }) => {
  try {
    // TODO: call FirebaseCharacterService.update()
    throw new Error('Not implemented');
  } catch (error) {
    return rejectWithValue(error instanceof Error ? error.message : 'Failed to update character');
  }
});

export const deleteCharacter = createAsyncThunk<void, string>(
  'characters/deleteCharacter',
  async (_characterId, { rejectWithValue }) => {
    try {
      // TODO: call FirebaseCharacterService.delete()
      throw new Error('Not implemented');
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Failed to delete character');
    }
  },
);

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setActiveCharacter(state, action: PayloadAction<Character | null>) {
      state.activeCharacter = action.payload;
    },
    clearCharacters(state) {
      state.characters = [];
      state.activeCharacter = null;
    },
    clearError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // Fetch all characters
    builder.addCase(fetchCharacters.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchCharacters.fulfilled, (state, action) => {
      state.loading = false;
      state.characters = action.payload;
    });
    builder.addCase(fetchCharacters.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });

    // Fetch single character
    builder.addCase(fetchCharacter.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchCharacter.fulfilled, (state, action) => {
      state.loading = false;
      state.activeCharacter = action.payload;
    });
    builder.addCase(fetchCharacter.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });

    // Create character
    builder.addCase(createCharacter.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(createCharacter.fulfilled, (state, action) => {
      state.loading = false;
      const character = action.payload;
      state.activeCharacter = character;
      state.characters.push({
        id: character.info.id,
        name: character.info.name,
        level: character.classes.totalLevel,
        race: character.info.race.name,
        classes: character.classes.classes.map((c) => `${c.name} ${c.level}`).join('/'),
        lastUpdated: new Date(),
      });
    });
    builder.addCase(createCharacter.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });

    // Update character
    builder.addCase(updateCharacter.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updateCharacter.fulfilled, (state, action) => {
      state.loading = false;
      state.activeCharacter = action.payload;
    });
    builder.addCase(updateCharacter.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });

    // Delete character
    builder.addCase(deleteCharacter.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(deleteCharacter.fulfilled, (state, action) => {
      state.loading = false;
      const deletedId = action.meta.arg;
      state.characters = state.characters.filter((c) => c.id !== deletedId);
      if (state.activeCharacter?.info.id === deletedId) {
        state.activeCharacter = null;
      }
    });
    builder.addCase(deleteCharacter.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export const { setActiveCharacter, clearCharacters, clearError } = charactersSlice.actions;
export default charactersSlice.reducer;
