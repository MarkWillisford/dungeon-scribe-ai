import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import type { CompanionInstance } from '@/types/companions';
import type { AnimalCompanionEntry } from '@/types/animalCompanions';

export interface CompanionCardProps {
  companion: CompanionInstance;
  entry: AnimalCompanionEntry | undefined;
  grantedByLabel: string; // e.g. 'Druid (Shadow)' — source class
  onEdit?: () => void; // passed in by callers once the builder route exists
  onRemove: () => void;
}

export function CompanionCard({
  companion,
  entry,
  grantedByLabel,
  onEdit,
  onRemove,
}: CompanionCardProps) {
  const { colors, fantasy, isDark } = useTheme();
  const editDisabled = !onEdit;

  const formLabel = entry?.name ?? companion.sourceEntryId;
  const sizeLabel = entry?.size;

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isDark ? colors.bg.tertiary : colors.bg.primary,
          borderColor: colors.border.DEFAULT,
        },
      ]}
      accessibilityLabel={`Companion card: ${companion.name}`}
    >
      <View style={styles.headerRow}>
        <Text style={[styles.name, { color: colors.text.primary }]}>
          🐾 {companion.name || formLabel}
        </Text>
        <Pressable
          onPress={onRemove}
          style={styles.removeBtn}
          hitSlop={8}
          accessibilityRole="button"
          accessibilityLabel={`Remove ${companion.name} companion`}
        >
          <Text style={[styles.removeText, { color: colors.text.tertiary }]}>✕</Text>
        </Pressable>
      </View>

      <Text style={[styles.subtitle, { color: colors.text.secondary }]}>
        {formLabel}
        {sizeLabel ? ` · ${sizeLabel}` : ''}
      </Text>

      <Text style={[styles.meta, { color: colors.text.tertiary }]}>
        from {grantedByLabel} · effective lvl {companion.effectiveProgressionLevel}
      </Text>

      <View style={styles.actionRow}>
        <Pressable
          onPress={onEdit}
          disabled={editDisabled}
          style={({ pressed }) => [
            styles.editBtn,
            {
              borderColor: editDisabled ? colors.border.DEFAULT : fantasy.gold,
              opacity: editDisabled ? 0.4 : pressed ? 0.7 : 1,
            },
          ]}
          accessibilityRole="button"
          accessibilityLabel="Edit companion"
          accessibilityState={{ disabled: editDisabled }}
        >
          <Text
            style={[
              styles.editText,
              {
                color: editDisabled
                  ? colors.text.tertiary
                  : isDark
                    ? fantasy.gold
                    : fantasy.darkWood,
              },
            ]}
          >
            {editDisabled ? 'Edit ›  (unavailable)' : 'Edit ›'}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    gap: 4,
    marginTop: 8,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  name: {
    fontFamily: 'Cinzel',
    fontSize: 15,
    fontWeight: '700',
  },
  removeBtn: { padding: 4 },
  removeText: { fontSize: 16, fontWeight: '700' },
  subtitle: {
    fontFamily: 'LibreBaskerville',
    fontSize: 13,
  },
  meta: {
    fontFamily: 'LibreBaskerville',
    fontSize: 12,
    fontStyle: 'italic',
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 4,
  },
  editBtn: {
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  editText: {
    fontFamily: 'Cinzel',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
});
