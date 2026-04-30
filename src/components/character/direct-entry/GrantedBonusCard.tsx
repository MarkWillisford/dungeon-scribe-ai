import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { useAppDispatch } from '@/store/hooks';
import { removeTemplate } from '@/store/slices/characterEntrySlice';
import { type AppliedTemplate } from '@/types/templates';

interface GrantedBonusCardProps {
  entry: AppliedTemplate;
}

export function GrantedBonusCard({ entry }: GrantedBonusCardProps) {
  const { colors, fantasy, isDark } = useTheme();
  const dispatch = useAppDispatch();

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: isDark ? colors.bg.secondary : colors.bg.primary,
          borderColor: colors.border.DEFAULT,
        },
      ]}
    >
      <View style={styles.header}>
        <View style={styles.grantBadge}>
          <Text style={styles.grantBadgeText}>GRANT</Text>
        </View>
        <Text style={[styles.grantName, { color: isDark ? fantasy.gold : fantasy.darkWood }]}>
          {entry.name}
        </Text>
        <Pressable
          onPress={() => dispatch(removeTemplate(entry.id ?? ''))}
          hitSlop={8}
          accessibilityRole="button"
          accessibilityLabel={`Remove ${entry.name}`}
          style={styles.removeButton}
        >
          <Text style={[styles.removeIcon, { color: colors.text.tertiary }]}>✕</Text>
        </Pressable>
      </View>

      {entry.freeGrantNote ? (
        <Text style={[styles.note, { color: colors.text.secondary }]}>{entry.freeGrantNote}</Text>
      ) : null}

      {entry.grantedBy ? (
        <Text style={[styles.grantedBy, { color: colors.text.tertiary }]}>
          Granted by: {entry.grantedBy}
        </Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    gap: 4,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  grantBadge: {
    backgroundColor: 'rgba(16,185,129,0.15)',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  grantBadgeText: {
    fontFamily: 'Cinzel',
    fontSize: 9,
    fontWeight: '700',
    color: '#10B981',
    letterSpacing: 0.5,
  },
  grantName: {
    flex: 1,
    fontFamily: 'LibreBaskerville',
    fontSize: 14,
    fontWeight: '700',
  },
  removeButton: {
    padding: 4,
  },
  removeIcon: {
    fontSize: 14,
    fontWeight: '700',
  },
  note: {
    fontFamily: 'LibreBaskerville',
    fontSize: 13,
    lineHeight: 18,
  },
  grantedBy: {
    fontFamily: 'LibreBaskerville',
    fontSize: 12,
    fontStyle: 'italic',
  },
});
