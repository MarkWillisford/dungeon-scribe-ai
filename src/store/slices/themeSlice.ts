import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { ThemeMode, ContextTheme } from '@/types/theme';

interface ThemeState {
  mode: ThemeMode;
  context: ContextTheme;
}

const initialState: ThemeState = {
  mode: 'dark',
  context: 'default',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme(state) {
      state.mode = state.mode === 'dark' ? 'light' : 'dark';
    },
    setThemeMode(state, action: PayloadAction<ThemeMode>) {
      state.mode = action.payload;
    },
    setContext(state, action: PayloadAction<ContextTheme>) {
      state.context = action.payload;
    },
  },
});

export const { toggleTheme, setThemeMode, setContext } = themeSlice.actions;
export default themeSlice.reducer;
