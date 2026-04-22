import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { InlinePicker } from '@/components/ui/InlinePicker';
import { useAppDispatch } from '@/store/hooks';
import { removeTemplate, updateTemplate } from '@/store/slices/characterEntrySlice';
import { type DraftTemplateEntry } from '@/types/characterDraft';

const ACQUIRED_OPTIONS = [
  { label: 'Inherited', value: 'inherited' },
  { label: 'Acquired', value: 'acquired' },
  { label: 'Either', value: 'either' },
];

function eclLabel(entry: DraftTemplateEntry): string {
  if (entry.appliedAs === 'LA' && entry.laValue != null) return `LA +${entry.laValue}`;
  if (entry.appliedAs === 'CR' && entry.crValue != null) return `CR +${entry.crValue}`;
  if (entry.appliedAs === 'CR') return 'CR (tiered)';
  return 'No ECL cost';
}

interface TemplateEntryCardProps {
  entry: DraftTemplateEntry;
}

export function TemplateEntryCard({ entry }: TemplateEntryCardProps) {
  const { colors, fantasy, isDark } = useTheme();
  const dispatch = useAppDispatch();

  const update = (patch: Partial<DraftTemplateEntry>) => {
    dispatch(updateTemplate({ ...entry, ...patch }));
  };

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
      {/* Header */}
      <View style={styles.header}>
        <Text style={[styles.templateName, { color: isDark ? fantasy.gold : fantasy.darkWood }]}>
          {entry.templateName}
        </Text>
        <Pressable
          onPress={() => dispatch(removeTemplate(entry.id))}
          hitSlop={8}
          accessibilityRole="button"
          accessibilityLabel={`Remove ${entry.templateName}`}
          style={styles.removeButton}
        >
          <Text style={[styles.removeIcon, { color: colors.text.tertiary }]}>✕</Text>
        </Pressable>
      </View>

      {/* ECL cost — read-only, fixed by the template definition */}
      <View style={styles.row}>
        <Text style={[styles.fieldLabel, { color: colors.text.secondary }]}>ECL cost</Text>
        <Text style={[styles.eclValue, { color: colors.text.primary }]}>{eclLabel(entry)}</Text>
      </View>

      {/* Acquired */}
      <View style={styles.row}>
        <Text style={[styles.fieldLabel, { color: colors.text.secondary }]}>Acquired</Text>
        <InlinePicker
          value={entry.acquired ?? 'either'}
          options={ACQUIRED_OPTIONS}
          onValueChange={(v) => update({ acquired: v as DraftTemplateEntry['acquired'] })}
          style={styles.medPicker}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 8,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
    gap: 8,
  },
  templateName: {
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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    gap: 8,
  },
  fieldLabel: {
    fontFamily: 'LibreBaskerville',
    fontSize: 13,
  },
  eclValue: {
    fontFamily: 'LibreBaskerville',
    fontSize: 13,
    fontWeight: '700',
  },
  medPicker: {
    flex: 1,
    marginBottom: 0,
  },
});
