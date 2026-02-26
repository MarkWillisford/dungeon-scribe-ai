import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import charactersReducer from './slices/charactersSlice';
import themeReducer from './slices/themeSlice';
import uiReducer from './slices/uiSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    characters: charactersReducer,
    theme: themeReducer,
    ui: uiReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Firebase timestamps and Date objects
        ignoredActions: [
          'auth/login/fulfilled',
          'auth/signup/fulfilled',
          'auth/googleLogin/fulfilled',
          'characters/fetchCharacters/fulfilled',
          'characters/createCharacter/fulfilled',
          'characters/updateCharacter/fulfilled',
        ],
        ignoredPaths: [
          'auth.user.createdAt',
          'auth.user.lastLogin',
          'characters.characters',
          'characters.activeCharacter',
        ],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
