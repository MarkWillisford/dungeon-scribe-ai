import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit';
import type { Character, CharacterSummary, CreateCharacterParams } from '@/types';
import type { CharacterFeat } from '@/types/feats';
import { FirebaseCharacterService } from '@/services/FirebaseCharacterService';
import { CharacterService } from '@/services/CharacterService';
import { ModifierPipelineService } from '@/services/ModifierPipelineService';
import { saveCharacter } from '../thunks/saveCharacter';

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

export const fetchCharacters = createAsyncThunk<CharacterSummary[], string>(
  'characters/fetchCharacters',
  async (userId, { rejectWithValue }) => {
    try {
      return await FirebaseCharacterService.getUserCharacters(userId);
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Failed to fetch characters');
    }
  },
);

export const fetchCharacter = createAsyncThunk<Character, string>(
  'characters/fetchCharacter',
  async (characterId, { rejectWithValue }) => {
    try {
      return await FirebaseCharacterService.getCharacter(characterId);
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Failed to fetch character');
    }
  },
);

export const createCharacter = createAsyncThunk<
  Character,
  { userId: string; data: CreateCharacterParams }
>('characters/createCharacter', async (params, { rejectWithValue }) => {
  try {
    const character = CharacterService.createDefaultCharacter(params.data);
    return await FirebaseCharacterService.create(params.userId, character);
  } catch (error) {
    return rejectWithValue(error instanceof Error ? error.message : 'Failed to create character');
  }
});

export const updateCharacter = createAsyncThunk<
  Character,
  { characterId: string; data: Partial<Character> }
>('characters/updateCharacter', async (params, { rejectWithValue }) => {
  try {
    return await FirebaseCharacterService.update(params.characterId, params.data);
  } catch (error) {
    return rejectWithValue(error instanceof Error ? error.message : 'Failed to update character');
  }
});

export const deleteCharacter = createAsyncThunk<void, string>(
  'characters/deleteCharacter',
  async (characterId, { rejectWithValue }) => {
    try {
      await FirebaseCharacterService.delete(characterId);
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
    addFeat(state, action: PayloadAction<CharacterFeat>) {
      if (!state.activeCharacter) return;
      state.activeCharacter.feats.feats.push(action.payload);
      state.activeCharacter = ModifierPipelineService.recalculate(state.activeCharacter);
    },
    removeFeat(state, action: PayloadAction<string>) {
      if (!state.activeCharacter) return;
      state.activeCharacter.feats.feats = state.activeCharacter.feats.feats.filter(
        (f) => f.featId !== action.payload,
      );
      state.activeCharacter = ModifierPipelineService.recalculate(state.activeCharacter);
    },
    toggleFeat(state, action: PayloadAction<string>) {
      if (!state.activeCharacter) return;
      const feat = state.activeCharacter.feats.feats.find((f) => f.featId === action.payload);
      if (feat) {
        feat.active = !feat.active;
        state.activeCharacter = ModifierPipelineService.recalculate(state.activeCharacter);
      }
    },
    recalculateStats(state) {
      if (!state.activeCharacter) return;
      state.activeCharacter = ModifierPipelineService.recalculate(state.activeCharacter);
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
      state.activeCharacter = ModifierPipelineService.recalculate(action.payload);
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
      const character = ModifierPipelineService.recalculate(action.payload);
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

    // Save character (direct-entry flow — upserts into the list)
    builder.addCase(saveCharacter.fulfilled, (state, action) => {
      const character = ModifierPipelineService.recalculate(action.payload);
      const summary: CharacterSummary = {
        id: character.info.id,
        name: character.info.name,
        level: character.classes.totalLevel,
        race: character.info.race.name,
        classes: character.classes.classes.map((c) => `${c.name} ${c.level}`).join('/'),
        lastUpdated: new Date(),
        ...(character.info.portrait ? { portrait: character.info.portrait } : {}),
      };
      const existingIndex = state.characters.findIndex((c) => c.id === summary.id);
      if (existingIndex >= 0) {
        state.characters[existingIndex] = summary;
      } else {
        state.characters.push(summary);
      }
      state.activeCharacter = character;
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

export const {
  setActiveCharacter,
  clearCharacters,
  clearError,
  addFeat,
  removeFeat,
  toggleFeat,
  recalculateStats,
} = charactersSlice.actions;
export default charactersSlice.reducer;
