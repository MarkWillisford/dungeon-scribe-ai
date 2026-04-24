import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import type { CompanionInstance } from '@/types/companions';
import type { AnimalCompanionEntry } from '@/types/animalCompanions';

export interface CompanionEntryHeaderProps {
  companion: CompanionInstance;
  entry: AnimalCompanionEntry | undefined;
  onBack: () => void;
}

function grantedByLabel(grant: CompanionInstance['grantedBy']): string {
  switch (grant.type) {
    case 'class':
      return 'Class';
    case 'template':
      return 'Template';
    case 'feat':
      return 'Feat';
    case 'cohort':
      return 'Cohort';
  }
}

export function CompanionEntryHeader({ companion, entry, onBack }: CompanionEntryHeaderProps) {
  const { colors, fantasy, isDark } = useTheme();
  const formLabel = entry?.name ?? companion.sourceEntryId;
  const sizeLabel = entry?.size;

  return (
    <View
      style={[
        styles.container,
        {
          borderBottomColor: colors.border.DEFAULT,
          backgroundColor: isDark ? colors.bg.tertiary : colors.bg.primary,
        },
      ]}
    >
      <View style={styles.row}>
        <Pressable
          onPress={onBack}
          style={styles.backBtn}
          hitSlop={12}
          accessibilityRole="button"
          accessibilityLabel="Back"
        >
          <Text style={[styles.backText, { color: fantasy.gold }]}>‹</Text>
        </Pressable>
        <View style={styles.headerText}>
          <Text style={[styles.name, { color: colors.text.primary }]} numberOfLines={1}>
            {companion.name || formLabel}
          </Text>
          <Text style={[styles.subtitle, { color: colors.text.tertiary }]} numberOfLines={1}>
            {formLabel}
            {sizeLabel ? ` · ${sizeLabel}` : ''}
            {` · Effective Lvl ${companion.effectiveProgressionLevel}`}
          </Text>
          <Text style={[styles.grant, { color: colors.text.tertiary }]} numberOfLines={1}>
            from {grantedByLabel(companion.grantedBy)}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  row: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  backBtn: { padding: 4 },
  backText: { fontSize: 24, fontWeight: '700', fontFamily: 'Cinzel', lineHeight: 24 },
  headerText: { flex: 1, gap: 2 },
  name: {
    fontFamily: 'Cinzel',
    fontSize: 18,
    fontWeight: '700',
  },
  subtitle: {
    fontFamily: 'LibreBaskerville',
    fontSize: 13,
  },
  grant: {
    fontFamily: 'LibreBaskerville',
    fontSize: 12,
    fontStyle: 'italic',
  },
});
