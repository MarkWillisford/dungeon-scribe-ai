import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import type { CharacterSummary } from '@/types/character';

/**
 * Render a last-updated value that may not be a Date.
 *
 * The value has arrived as an ISO string (a JSON round-trip somewhere upstream)
 * and as a Firestore Timestamp, and calling toLocaleDateString on either threw
 * inside render — which the ErrorBoundary turned into an unescapable "Try
 * again" loop (#376). A date on a card is not worth crashing the list for.
 */
export function formatLastUpdated(value: unknown): string {
  if (value instanceof Date) {
    return isNaN(value.getTime()) ? '' : value.toLocaleDateString();
  }
  if (typeof value === 'string' || typeof value === 'number') {
    const parsed = new Date(value);
    return isNaN(parsed.getTime()) ? '' : parsed.toLocaleDateString();
  }
  // Firestore Timestamp, which survives some paths unconverted.
  const maybeTimestamp = value as { toDate?: () => Date } | null | undefined;
  if (maybeTimestamp && typeof maybeTimestamp.toDate === 'function') {
    const converted = maybeTimestamp.toDate();
    return converted instanceof Date && !isNaN(converted.getTime())
      ? converted.toLocaleDateString()
      : '';
  }
  return '';
}

interface CharacterCardProps {
  character: CharacterSummary;
  onPress: (id: string) => void;
  onDelete?: (id: string) => void;
  testID?: string;
}

export function CharacterCard({ character, onPress, onDelete, testID }: CharacterCardProps) {
  const { colors, fantasy, shadows, isDark } = useTheme();

  const formattedDate = formatLastUpdated(character.lastUpdated);

  return (
    <Pressable
      testID={testID}
      onPress={() => onPress(character.id)}
      onLongPress={onDelete ? () => onDelete(character.id) : undefined}
      accessibilityRole="button"
      accessibilityLabel={`${character.name}, Level ${character.level} ${character.race} ${character.classes}`}
      accessibilityHint="Opens character details. Long press to delete."
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
