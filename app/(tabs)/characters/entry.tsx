import { useEffect } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { CharacterEntryScreen } from '@/components/character/direct-entry/CharacterEntryScreen';
import { useAppDispatch } from '@/store/hooks';
import { loadCharacter, type EntryMode } from '@/store/slices/characterEntrySlice';
import { loadClasses } from '@/store/slices/gameDataSlice';
import { CharacterService } from '@/services/CharacterService';

/**
 * Entry point for the direct-entry character sheet.
 *
 * Route: /characters/entry
 * Params:
 *   mode        — 'new' | 'import' | 'edit'  (default: 'new')
 *   characterId — Firestore document ID (required when mode === 'edit')
 *
 * For now, all modes load Rissi as the initial draft so the UI has real data
 * to render during development. When Firestore integration is wired, 'edit'
 * will fetch the character by characterId and 'new'/'import' will load a
 * blank draft.
 */
export default function EntryRoute() {
  const dispatch = useAppDispatch();
  const { mode, characterId } = useLocalSearchParams<{
    mode?: EntryMode;
    characterId?: string;
  }>();

  const resolvedMode: EntryMode = mode ?? 'new';

  useEffect(() => {
    // TODO: When Firestore integration is ready:
    //   - 'edit': fetch character by characterId, dispatch loadCharacter with real data
    //   - 'new' / 'import': dispatch loadCharacter with BLANK_DRAFT
    // For now, always load Rissi so the UI has real data during development.
    dispatch(
      loadCharacter({
        character: CharacterService.createBlankCharacter(),
        mode: resolvedMode,
        characterId: characterId,
      }),
    );
  }, [dispatch, resolvedMode, characterId]);

  useEffect(() => {
    // Fetch class stat data (global + campaign) so BAB/save/HP math can find
    // custom prestige classes. Safe to fire on every mount — the thunk handles
    // its own in-flight state and GameDataCache dedupes.
    dispatch(loadClasses());
  }, [dispatch]);

  return <CharacterEntryScreen />;
}
