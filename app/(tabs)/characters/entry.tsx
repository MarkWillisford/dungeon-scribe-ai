import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { CharacterEntryScreen } from '@/components/character/direct-entry/CharacterEntryScreen';
import { useAppDispatch } from '@/store/hooks';
import { loadCharacter, type EntryMode } from '@/store/slices/characterEntrySlice';
import { loadClasses } from '@/store/slices/gameDataSlice';
import { CharacterService } from '@/services/CharacterService';
import { FirebaseCharacterService } from '@/services/FirebaseCharacterService';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';

/**
 * Entry point for the direct-entry character sheet.
 *
 * Route: /characters/entry
 * Params:
 *   mode        — 'new' | 'import' | 'edit'  (default: 'new')
 *   characterId — Firestore document ID (required when mode === 'edit')
 */
export default function EntryRoute() {
  const dispatch = useAppDispatch();
  const { mode, characterId } = useLocalSearchParams<{
    mode?: EntryMode;
    characterId?: string;
  }>();

  const resolvedMode: EntryMode = mode ?? 'new';
  const [loading, setLoading] = useState(resolvedMode === 'edit' && !!characterId);

  useEffect(() => {
    async function initCharacter() {
      if (resolvedMode === 'edit' && characterId) {
        try {
          const character = await FirebaseCharacterService.getCharacter(characterId);
          dispatch(loadCharacter({ character, mode: resolvedMode, characterId }));
        } catch {
          // Fall back to blank on load failure
          dispatch(
            loadCharacter({
              character: CharacterService.createBlankCharacter(),
              mode: 'new',
            }),
          );
        } finally {
          setLoading(false);
        }
      } else {
        dispatch(
          loadCharacter({
            character: CharacterService.createBlankCharacter(),
            mode: resolvedMode,
            characterId,
          }),
        );
      }
    }

    initCharacter();
  }, [dispatch, resolvedMode, characterId]);

  useEffect(() => {
    dispatch(loadClasses());
  }, [dispatch]);

  if (loading) {
    return (
      <View style={{ flex: 1 }}>
        <LoadingSpinner message="Loading character..." testID="entry-loading" />
      </View>
    );
  }

  return <CharacterEntryScreen />;
}
