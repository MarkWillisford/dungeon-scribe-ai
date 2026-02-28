import React, { useEffect } from 'react';
import { SafeAreaView, View, Text, FlatList, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { useTheme } from '@/hooks/useTheme';
import { fetchCharacters } from '@/store/slices/charactersSlice';
import { OrnateButton } from '@/components/ui/OrnateButton';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
import { CharacterCard } from '@/components/character/CharacterCard';
import type { CharacterSummary } from '@/types/character';

export default function CharactersListScreen() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { colors, fantasy } = useTheme();

  const { characters, loading } = useAppSelector((state) => state.characters);
  const userId = useAppSelector((state) => state.auth.user?.uid);

  useEffect(() => {
    if (userId) {
      dispatch(fetchCharacters(userId));
    }
  }, [dispatch, userId]);

  const handleCharacterPress = (id: string) => {
    router.push(`/(tabs)/characters/${id}`);
  };

  const handleCreateCharacter = () => {
    router.push('/(tabs)/characters/create');
  };

  const renderCharacter = ({ item }: { item: CharacterSummary }) => (
    <CharacterCard
      character={item}
      onPress={handleCharacterPress}
      testID={`character-card-${item.id}`}
    />
  );

  const renderEmptyState = () => (
    <View style={styles.emptyContainer}>
      <Text style={[styles.emptyTitle, { color: fantasy.gold }]}>No Characters Yet</Text>
      <Text style={[styles.emptyText, { color: colors.text.secondary }]}>
        Create your first character to begin your adventure!
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.bg.primary }]}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: colors.text.primary }]}>Characters</Text>
        <OrnateButton
          title="Create Character"
          onPress={handleCreateCharacter}
          variant="primary"
          testID="create-character-button"
        />
      </View>

      {loading ? (
        <LoadingSpinner message="Loading characters..." testID="characters-loading" />
      ) : (
        <FlatList
          data={characters}
          renderItem={renderCharacter}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={renderEmptyState}
          testID="characters-list"
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  title: {
    fontFamily: 'Cinzel',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 12,
  },
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 24,
    flexGrow: 1,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
  },
  emptyTitle: {
    fontFamily: 'Cinzel',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
  },
  emptyText: {
    fontFamily: 'LibreBaskerville',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
  },
});
