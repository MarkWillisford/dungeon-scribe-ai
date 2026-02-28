import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import type { CharacterSummary } from '@/types/character';

interface CharacterCardProps {
  character: CharacterSummary;
  onPress: (id: string) => void;
  testID?: string;
}

export function CharacterCard({ character, onPress, testID }: CharacterCardProps) {
  const { colors, fantasy, shadows, isDark } = useTheme();

  const formattedDate = character.lastUpdated.toLocaleDateString();

  return (
    <Pressable
      testID={testID}
      onPress={() => onPress(character.id)}
      accessibilityRole="button"
      accessibilityLabel={`${character.name}, Level ${character.level} ${character.race} ${character.classes}`}
      accessibilityHint="Opens character details"
    >
      <View
        style={[
          styles.card,
          shadows.card,
          {
            backgroundColor: isDark ? colors.bg.secondary : colors.bg.primary,
            borderColor: colors.border.DEFAULT,
            borderLeftColor: fantasy.gold,
          },
        ]}
      >
        <View style={styles.header}>
          <Text style={[styles.name, { color: colors.text.primary }]}>{character.name}</Text>
          <Text style={[styles.level, { color: fantasy.gold }]}>Lv {character.level}</Text>
        </View>

        <Text style={[styles.details, { color: colors.text.secondary }]}>
          {character.race} {character.classes}
        </Text>

        <Text style={[styles.date, { color: colors.text.tertiary }]}>
          Last updated: {formattedDate}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderLeftWidth: 3,
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  name: {
    fontFamily: 'Cinzel',
    fontSize: 16,
    fontWeight: '700',
    flex: 1,
  },
  level: {
    fontFamily: 'Cinzel',
    fontSize: 14,
    fontWeight: '700',
  },
  details: {
    fontFamily: 'LibreBaskerville',
    fontSize: 13,
    marginBottom: 4,
  },
  date: {
    fontFamily: 'LibreBaskerville',
    fontSize: 11,
  },
});
