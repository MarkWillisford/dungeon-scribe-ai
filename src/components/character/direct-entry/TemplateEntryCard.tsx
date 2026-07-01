import React, { useMemo } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { InlinePicker } from '@/components/ui/InlinePicker';
import { useAppDispatch } from '@/store/hooks';
import { removeTemplate, updateTemplate } from '@/store/slices/characterEntrySlice';
import type { AppliedTemplate } from '@/types/templates';
import { ALL_TEMPLATES } from '@/data/templates';
import { TemplateCompanionSection } from './TemplateCompanionSection';
import { TemplateChoiceRow } from './TemplateChoiceRow';

const ACQUIRED_OPTIONS = [
  { label: 'Inherited', value: 'inherited' },
  { label: 'Acquired', value: 'acquired' },
  { label: 'Either', value: 'either' },
];

function eclLabel(entry: AppliedTemplate): string {
  if (entry.appliedAs === 'la' && entry.la != null) return `LA +${entry.la}`;
  if (entry.appliedAs === 'cr' && entry.cr != null) return `CR +${entry.cr}`;
  if (entry.appliedAs === 'cr') return 'CR (tiered)';
  return 'No ECL cost';
}

interface TemplateEntryCardProps {
  entry: AppliedTemplate;
}

export function TemplateEntryCard({ entry }: TemplateEntryCardProps) {
  const { colors, fantasy, isDark } = useTheme();
  const dispatch = useAppDispatch();

  const update = (patch: Partial<AppliedTemplate>) => {
    dispatch(updateTemplate({ ...entry, ...patch }));
  };

  // Template-side companion grant (plan: animal-companion-builder.md §
  // Templates That Grant ACs). Only fires when the applied template is a
  // catalog reference (`templateId`) whose definition carries
  // `grantsCompanion`. Free grants are not eligible by design — they don't
  // have a catalog identity to resolve against.
  const templateDef = useMemo(() => {
    if (entry.isFreeGrant || !entry.templateId) return null;
    return ALL_TEMPLATES.find((t) => t.id === entry.templateId) ?? null;
  }, [entry.isFreeGrant, entry.templateId]);

  const companionGrant = templateDef?.grantsCompanion ?? null;
  const templateChoiceDefs = templateDef?.choices ?? null;

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
        <Text style={[styles.templateName, { color: isDark ? fantasy.gold : fantasy.darkWood }]}>
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

      <View style={styles.row}>
        <Text style={[styles.fieldLabel, { color: colors.text.secondary }]}>ECL cost</Text>
        <Text style={[styles.eclValue, { color: colors.text.primary }]}>{eclLabel(entry)}</Text>
      </View>

      <View style={styles.row}>
        <Text style={[styles.fieldLabel, { color: colors.text.secondary }]}>Acquired</Text>
        <InlinePicker
          value={entry.acquisitionType ?? 'either'}
          options={ACQUIRED_OPTIONS}
          onValueChange={(v) =>
            update({ acquisitionType: v as AppliedTemplate['acquisitionType'] })
          }
          style={styles.medPicker}
        />
      </View>

      {/* Sub-choices — one row per TemplateChoiceDefinition. */}
      {templateChoiceDefs &&
        templateDef &&
        entry.id &&
        templateChoiceDefs.map((choice) => {
          const resolved = entry.templateChoices?.find((c) => c.choiceId === choice.id)?.selection;
          return (
            <TemplateChoiceRow
              key={choice.id}
              choice={choice}
              currentSelection={resolved}
              appliedTemplateId={entry.id!}
              templateDefinition={templateDef}
            />
          );
        })}

      {/* Companion grant — only renders when the template definition sets
          grantsCompanion and this is a catalog-backed template entry. */}
      {companionGrant && entry.templateId && (
        <TemplateCompanionSection
          templateId={entry.templateId}
          templateName={entry.name}
          spec={companionGrant}
        />
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
