import React, { useMemo, useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { useAppDispatch } from '@/store/hooks';
import { addCompanionTemplate } from '@/store/slices/characterEntrySlice';
import { SearchPickerSheet, type SearchItem } from '@/components/ui/SearchPickerSheet';
import { ALL_TEMPLATES } from '@/data/templates';
import type { TemplateDefinition } from '@/data/templates/types';
import type { AppliedTemplate } from '@/types/templates';
import type { CompanionInstance } from '@/types/companions';
import type { AnimalCompanionEntry } from '@/types/animalCompanions';
import { CompanionTemplateCard } from './CompanionTemplateCard';

export interface TemplatesSectionProps {
  companion: CompanionInstance;
  entry: AnimalCompanionEntry | undefined;
}

// True when a template definition exposes both CR and LA routes — player can
// switch between them on the applied instance. Most templates only have one
// (e.g. Half-Dragon is CR-only).
function hasBothRoutes(def: TemplateDefinition): boolean {
  const hasCR = typeof def.crAdjustment === 'number' || (def.crTiers?.length ?? 0) > 0;
  const hasLA = typeof def.laAdjustment === 'number';
  return hasCR && hasLA;
}

// Builds an initial AppliedTemplate from a definition. When the definition
// supports both CR and LA, default to CR (the more common case for creature
// templates); the player can switch via the card.
function buildInitial(def: TemplateDefinition): AppliedTemplate {
  const hasCR = typeof def.crAdjustment === 'number' || (def.crTiers?.length ?? 0) > 0;
  const hasLA = typeof def.laAdjustment === 'number';

  const base: Omit<AppliedTemplate, 'appliedAs' | 'cr' | 'la'> = {
    templateId: def.id,
    name: def.name,
    acquisitionType: def.acquisitionType,
    paidTiers: [],
    sourceId: def.id,
    sourceRev: def.rev ?? 1,
  };

  if (hasCR) {
    return {
      ...base,
      appliedAs: 'cr',
      // crTiered templates leave cr undefined — eclLabel renders 'CR (tiered)'
      cr: typeof def.crAdjustment === 'number' ? def.crAdjustment : undefined,
    };
  }
  if (hasLA) {
    return { ...base, appliedAs: 'la', la: def.laAdjustment };
  }
  // Template with no ECL cost — still track it so special qualities can flow
  // through at play time. Default to CR 0.
  return { ...base, appliedAs: 'cr', cr: 0 };
}

export function TemplatesSection({ companion }: TemplatesSectionProps) {
  const { colors, fantasy, isDark } = useTheme();
  const dispatch = useAppDispatch();
  const [pickerOpen, setPickerOpen] = useState(false);

  const templateIndex = useMemo(() => new Map(ALL_TEMPLATES.map((t) => [t.id, t])), []);

  const searchItems = useMemo<SearchItem[]>(() => {
    return ALL_TEMPLATES.map((t) => {
      const cr = typeof t.crAdjustment === 'number' ? `CR +${t.crAdjustment}` : null;
      const la = typeof t.laAdjustment === 'number' ? `LA +${t.laAdjustment}` : null;
      const tiered = (t.crTiers?.length ?? 0) > 0 ? 'CR (tiered)' : null;
      const cost = [cr, la, tiered].filter(Boolean).join(' · ') || 'no cost';
      return {
        key: t.id,
        label: t.name,
        subLabel: cost,
        category: t.acquisitionType,
      };
    });
  }, []);

  const handlePick = (item: SearchItem) => {
    const def = templateIndex.get(item.key);
    if (!def) return;
    dispatch(
      addCompanionTemplate({
        instanceId: companion.instanceId,
        template: buildInitial(def),
      }),
    );
    setPickerOpen(false);
  };

  const applied = companion.appliedTemplates;
  const cardColor = isDark ? fantasy.gold : fantasy.darkWood;

  return (
    <View style={styles.container}>
      {applied.length === 0 ? (
        <View style={[styles.emptyPanel, { borderColor: colors.border.DEFAULT }]}>
          <Text style={[styles.emptyText, { color: colors.text.tertiary }]}>
            No templates applied yet.
          </Text>
        </View>
      ) : (
        applied.map((template, index) => {
          const def = templateIndex.get(template.templateId);
          return (
            <CompanionTemplateCard
              key={`${template.templateId}-${index}`}
              instanceId={companion.instanceId}
              index={index}
              template={template}
              canSwitchAppliedAs={def ? hasBothRoutes(def) : false}
            />
          );
        })
      )}

      <Pressable
        onPress={() => setPickerOpen(true)}
        style={[styles.addButton, { borderColor: cardColor }]}
        accessibilityRole="button"
        accessibilityLabel="Add template"
      >
        <Text style={[styles.addButtonText, { color: cardColor }]}>+ Add Template</Text>
      </Pressable>

      <Text style={[styles.footer, { color: colors.text.tertiary }]}>
        Templates apply ECL cost (CR or LA) and grant the features defined in the source book.
        Validation of ruleset-level toggles (crTemplates / laTemplates / crRefunds / laBuyback)
        happens when the character is validated; this tab lets the player enter the raw data.
      </Text>

      <SearchPickerSheet
        visible={pickerOpen}
        title="Add Template"
        items={searchItems}
        onSelect={handlePick}
        onClose={() => setPickerOpen(false)}
        placeholder="Search templates..."
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { gap: 12 },
  emptyPanel: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 8,
    paddingVertical: 20,
    alignItems: 'center',
  },
  emptyText: { fontFamily: 'LibreBaskerville', fontSize: 13, fontStyle: 'italic' },
  addButton: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: {
    fontFamily: 'Cinzel',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  footer: {
    fontFamily: 'LibreBaskerville',
    fontSize: 11,
    fontStyle: 'italic',
    paddingHorizontal: 4,
  },
});
