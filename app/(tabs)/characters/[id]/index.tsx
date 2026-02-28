import React, { useEffect } from 'react';
import { SafeAreaView, View, Text, ScrollView, StyleSheet } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { useTheme } from '@/hooks/useTheme';
import { fetchCharacter } from '@/store/slices/charactersSlice';
import { OrnatePanel } from '@/components/ui/OrnatePanel';
import { OrnateButton } from '@/components/ui/OrnateButton';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
import { FantasyDivider } from '@/components/ui/FantasyDivider';

export default function CharacterDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { colors, fantasy } = useTheme();

  const { activeCharacter, loading } = useAppSelector((state) => state.characters);

  useEffect(() => {
    if (id) {
      dispatch(fetchCharacter(id));
    }
  }, [dispatch, id]);

  const handleBack = () => {
    router.back();
  };

  if (loading) {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: colors.bg.primary }]}>
        <LoadingSpinner message="Loading character..." testID="character-detail-loading" />
      </SafeAreaView>
    );
  }

  if (!activeCharacter) {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: colors.bg.primary }]}>
        <View style={styles.content}>
          <OrnatePanel title="Character Not Found" testID="character-not-found">
            <Text style={[styles.notFoundText, { color: colors.text.secondary }]}>
              The requested character could not be found.
            </Text>
          </OrnatePanel>
          <View style={styles.buttonContainer}>
            <OrnateButton
              title="Back"
              onPress={handleBack}
              variant="ghost"
              testID="character-detail-back"
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }

  const classesDisplay = activeCharacter.classes.classes
    .map((c) => `${c.name} ${c.level}`)
    .join(' / ');

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.bg.primary }]}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <OrnatePanel testID="character-detail-screen">
          <Text style={[styles.characterName, { color: fantasy.gold }]}>
            {activeCharacter.info.name}
          </Text>

          <FantasyDivider />

          <View style={styles.detailRow}>
            <Text style={[styles.detailLabel, { color: colors.text.secondary }]}>Race</Text>
            <Text style={[styles.detailValue, { color: colors.text.primary }]}>
              {activeCharacter.info.race.name}
            </Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={[styles.detailLabel, { color: colors.text.secondary }]}>Class</Text>
            <Text style={[styles.detailValue, { color: colors.text.primary }]}>
              {classesDisplay}
            </Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={[styles.detailLabel, { color: colors.text.secondary }]}>Level</Text>
            <Text style={[styles.detailValue, { color: colors.text.primary }]}>
              {activeCharacter.classes.totalLevel}
            </Text>
          </View>
        </OrnatePanel>

        <View style={styles.buttonContainer}>
          <OrnateButton
            title="Back"
            onPress={handleBack}
            variant="ghost"
            testID="character-detail-back"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 32,
  },
  characterName: {
    fontFamily: 'Cinzel',
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 4,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  detailLabel: {
    fontFamily: 'Cinzel',
    fontSize: 12,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  detailValue: {
    fontFamily: 'LibreBaskerville',
    fontSize: 15,
  },
  notFoundText: {
    fontFamily: 'LibreBaskerville',
    fontSize: 14,
    textAlign: 'center',
    paddingVertical: 20,
    lineHeight: 20,
  },
  buttonContainer: {
    marginTop: 16,
  },
});
