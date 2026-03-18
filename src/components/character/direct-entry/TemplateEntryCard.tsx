import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { InlinePicker } from '@/components/ui/InlinePicker';
import { useAppDispatch } from '@/store/hooks';
import { removeTemplate, updateTemplate } from '@/store/slices/characterEntrySlice';
import { type DraftTemplateEntry } from '@/types/characterDraft';

const APPLIED_AS_OPTIONS = [
  { label: 'CR', value: 'CR' },
  { label: 'LA', value: 'LA' },
];

const ACQUIRED_OPTIONS = [
  { label: 'Inherited', value: 'inherited' },
  { label: 'Acquired', value: 'acquired' },
  { label: 'Either', value: 'either' },
];

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

      {/* Applied as + value */}
      <View style={styles.row}>
        <Text style={[styles.fieldLabel, { color: colors.text.secondary }]}>Applied as</Text>
        <InlinePicker
          value={entry.appliedAs ?? 'CR'}
          options={APPLIED_AS_OPTIONS}
          onValueChange={(v) =>
            update({ appliedAs: v as 'CR' | 'LA', crValue: undefined, laValue: undefined })
          }
          style={styles.smallPicker}
        />
        <Text style={[styles.fieldLabel, { color: colors.text.secondary, marginLeft: 8 }]}>
          {entry.appliedAs === 'LA' ? 'LA' : 'CR'}
        </Text>
        <InlinePicker
          value={String(entry.appliedAs === 'LA' ? (entry.laValue ?? 1) : (entry.crValue ?? 1))}
          options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => ({
            label: String(n),
            value: String(n),
          }))}
          onValueChange={(v) => {
            const n = parseInt(v, 10);
            update(entry.appliedAs === 'LA' ? { laValue: n } : { crValue: n });
          }}
          style={styles.smallPicker}
        />
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
  smallPicker: {
    width: 70,
    marginBottom: 0,
  },
  medPicker: {
    flex: 1,
    marginBottom: 0,
  },
});
