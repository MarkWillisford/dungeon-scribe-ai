import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit';
import { GameDataService } from '@/services/GameDataService';
import type { ExpandedClassData } from '@/data/classes/types';

// In-memory game data cached in Redux so React components re-render when it
// arrives. Persists for the session — no AsyncStorage.

interface GameDataState {
  classes: ExpandedClassData[];
  classesLoaded: boolean;
  classesLoading: boolean;
  classesError: string | null;
}

const initialState: GameDataState = {
  classes: [],
  classesLoaded: false,
  classesLoading: false,
  classesError: null,
};

// Loads every class (global + campaign). Campaign classes are fetched
// unfiltered so BAB/save/HP lookups pick up homebrew.
export const loadClasses = createAsyncThunk<ExpandedClassData[]>(
  'gameData/loadClasses',
  async (_, { rejectWithValue }) => {
    try {
      return await GameDataService.getAllClasses();
    } catch (e) {
      return rejectWithValue(e instanceof Error ? e.message : 'Failed to load classes');
    }
  },
);

const gameDataSlice = createSlice({
  name: 'gameData',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadClasses.pending, (state) => {
      state.classesLoading = true;
      state.classesError = null;
    });
    builder.addCase(loadClasses.fulfilled, (state, action) => {
      state.classes = action.payload;
      state.classesLoaded = true;
      state.classesLoading = false;
    });
    builder.addCase(loadClasses.rejected, (state, action) => {
      state.classesLoading = false;
      state.classesError = (action.payload as string) ?? 'Failed to load classes';
    });
  },
});

export default gameDataSlice.reducer;

// ---- Selectors ----
// Typed against the slice state only — callers just need `state.gameData` to
// exist, not the full RootState. Keeps slice tests self-contained.

type WithGameData = { gameData: GameDataState };

export const selectClasses = (state: WithGameData) => state.gameData.classes;
export const selectClassesLoaded = (state: WithGameData) => state.gameData.classesLoaded;

export const selectClassDataMap = createSelector([selectClasses], (classes) => {
  const map = new Map<string, ExpandedClassData>();
  for (const c of classes) {
    map.set(c.name.toLowerCase(), c);
  }
  return map;
});
