import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { InlinePicker } from '@/components/ui/InlinePicker';
import { useAppDispatch } from '@/store/hooks';
import {
  removeCompanionTemplateAt,
  updateCompanionTemplateAt,
} from '@/store/slices/characterEntrySlice';
import type { AppliedTemplate } from '@/types/templates';

const ACQUISITION_OPTIONS = [
  { label: 'Inherited', value: 'inherited' },
  { label: 'Acquired', value: 'acquired' },
  { label: 'Either', value: 'either' },
];

const APPLIED_AS_OPTIONS = [
  { label: 'CR', value: 'cr' },
  { label: 'LA', value: 'la' },
];

export interface CompanionTemplateCardProps {
  instanceId: string;
  index: number;
  template: AppliedTemplate;
  // True when the definition exposes both CR and LA options. When false the
  // player can't switch — whichever the definition supplies is what applies.
  canSwitchAppliedAs: boolean;
}

function eclLabel(t: AppliedTemplate): string {
  if (t.appliedAs === 'la' && typeof t.la === 'number') return `LA +${t.la}`;
  if (t.appliedAs === 'cr' && typeof t.cr === 'number') return `CR +${t.cr}`;
  if (t.appliedAs === 'cr') return 'CR (tiered)';
  return 'No ECL cost';
}

// Renders a single applied template on a companion. Mirrors the character
// TemplateEntryCard in shape and styling, but dispatches to the companion
// slice actions and operates over an AppliedTemplate rather than a
// DraftTemplateEntry. Paid-tier progress is display-only in the builder;
// tier payment at play time is handled elsewhere (CR refund cycle, plan
// character-system-redesign.md § Template System Design).
export function CompanionTemplateCard({
  instanceId,
  index,
  template,
  canSwitchAppliedAs,
}: CompanionTemplateCardProps) {
  const { colors, fantasy, isDark } = useTheme();
  const dispatch = useAppDispatch();

  const patch = (p: Partial<AppliedTemplate>) => {
    dispatch(updateCompanionTemplateAt({ instanceId, index, patch: p }));
  };

  const handleToggleAppliedAs = (v: string) => {
    if (v === 'cr') patch({ appliedAs: 'cr', la: undefined });
    else if (v === 'la') patch({ appliedAs: 'la', cr: undefined });
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
          {template.name}
        </Text>
        <Pressable
          onPress={() => dispatch(removeCompanionTemplateAt({ instanceId, index }))}
          hitSlop={8}
          accessibilityRole="button"
          accessibilityLabel={`Remove ${template.name}`}
          style={styles.removeButton}
        >
          <Text style={[styles.removeIcon, { color: colors.text.tertiary }]}>✕</Text>
        </Pressable>
      </View>

      {/* ECL cost */}
      <View style={styles.row}>
        <Text style={[styles.fieldLabel, { color: colors.text.secondary }]}>ECL cost</Text>
        <Text style={[styles.eclValue, { color: colors.text.primary }]}>{eclLabel(template)}</Text>
      </View>

      {/* Applied as — only shown when the definition supports both CR and LA. */}
      {canSwitchAppliedAs && (
        <View style={styles.row}>
          <Text style={[styles.fieldLabel, { color: colors.text.secondary }]}>Applied as</Text>
          <InlinePicker
            value={template.appliedAs}
            options={APPLIED_AS_OPTIONS}
            onValueChange={handleToggleAppliedAs}
            style={styles.medPicker}
          />
        </View>
      )}

      {/* Acquired */}
      <View style={styles.row}>
        <Text style={[styles.fieldLabel, { color: colors.text.secondary }]}>Acquired</Text>
        <InlinePicker
          value={template.acquisitionType}
          options={ACQUISITION_OPTIONS}
          onValueChange={(v) => patch({ acquisitionType: v as AppliedTemplate['acquisitionType'] })}
          style={styles.medPicker}
        />
      </View>

      {/* Paid tiers — display-only summary. Empty string when no tiers defined
          on this template or none paid yet. */}
      {template.paidTiers.length > 0 && (
        <View style={styles.row}>
          <Text style={[styles.fieldLabel, { color: colors.text.secondary }]}>Tiers paid</Text>
          <Text style={[styles.eclValue, { color: colors.text.primary }]}>
            {template.paidTiers.join(', ')}
          </Text>
        </View>
      )}
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
  removeButton: { padding: 4 },
  removeIcon: { fontSize: 14, fontWeight: '700' },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    gap: 8,
  },
  fieldLabel: { fontFamily: 'LibreBaskerville', fontSize: 13 },
  eclValue: { fontFamily: 'LibreBaskerville', fontSize: 13, fontWeight: '700' },
  medPicker: { flex: 1, marginBottom: 0 },
});
