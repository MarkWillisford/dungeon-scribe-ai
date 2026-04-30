import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import charactersReducer from './slices/charactersSlice';
import combatReducer from './slices/combatSlice';
import themeReducer from './slices/themeSlice';
import uiReducer from './slices/uiSlice';
import characterEntryReducer from './slices/characterEntrySlice';
import rulesetReducer from './slices/rulesetSlice';
import gameDataReducer from './slices/gameDataSlice';
import { recalculateMiddleware } from './middleware/recalculateMiddleware';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    characters: charactersReducer,
    combat: combatReducer,
    theme: themeReducer,
    ui: uiReducer,
    characterEntry: characterEntryReducer,
    ruleset: rulesetReducer,
    gameData: gameDataReducer,
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
          // Character entry actions carry full Character objects which contain Map fields.
          'characterEntry/loadCharacter',
          'characterEntry/applyComputedStats',
          'characterEntry/save/fulfilled',
        ],
        ignoredPaths: [
          'auth.user.createdAt',
          'auth.user.lastLogin',
          'characters.characters',
          'characters.activeCharacter',
          // equipment.equippedSlots and companion slot lookups are Map<ItemSlot, string>.
          // Serializable state only applies at the boundary of persistence;
          // we handle Map↔Record conversion when saving to Firestore.
          'characterEntry.character.equipment.equippedSlots',
          'characterEntry.character.companions',
        ],
      },
    }).concat(recalculateMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
