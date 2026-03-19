import React, { useState, useMemo } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { SearchPickerSheet, type SearchItem } from '@/components/ui/SearchPickerSheet';
import { useAppDispatch } from '@/store/hooks';
import { upsertClassChoice } from '@/store/slices/characterEntrySlice';
import { type ClassChoice } from '@/types/classes';
import { type ClassChoiceDefinition } from '@/types/classChoices';
import { ALL_DOMAINS } from '@/data/domains/index';
import { ALL_RAGE_POWERS } from '@/data/ragePowers/index';
import { ALL_ROGUE_TALENTS } from '@/data/rogueTalents/index';

interface ClassChoiceRowProps {
  classId: string;
  definition: ClassChoiceDefinition;
  // Index within this feature (0 for first domain, 1 for second, etc.)
  choiceIndex: number;
  // The current stored selection for this slot (if any)
  currentChoice?: ClassChoice;
  // Level this choice is taken at (for at_class_levels / every_n_levels)
  takenAtLevel: number;
  featureLabel: string; // e.g. "Domain 1", "Domain 2", "Rage Power (lvl 2)"
}

function buildCollectionItems(collectionName: string): SearchItem[] {
  switch (collectionName) {
    case 'domains':
      return ALL_DOMAINS.map((d) => ({
        key: d.id,
        label: d.name,
        subLabel: d.description?.slice(0, 80),
        category: d.druidAllowed ? 'Druid / Cleric' : 'Cleric',
      }));
    case 'ragepowers':
      return ALL_RAGE_POWERS.map((r) => ({
        key: r.id,
        label: r.name,
        subLabel: r.description?.slice(0, 80),
      }));
    case 'roguetalents':
      return ALL_ROGUE_TALENTS.map((t) => ({
        key: t.id,
        label: t.name,
        subLabel: t.description?.slice(0, 80),
        category: t.talentTier === 'advanced' ? 'Advanced Talents' : 'Talents',
      }));
    default:
      return [];
  }
}

function buildInlineItems(definition: ClassChoiceDefinition): SearchItem[] {
  if (!definition.optionGroups) return [];
  return definition.optionGroups.flatMap((group) =>
    group.options.map((opt) => ({
      key: opt.id,
      label: opt.name,
      subLabel: opt.description?.slice(0, 80),
      category: group.name || undefined,
    })),
  );
}

export function ClassChoiceRow({
  classId,
  definition,
  choiceIndex,
  currentChoice,
  takenAtLevel,
  featureLabel,
}: ClassChoiceRowProps) {
  const { colors, fantasy, isDark } = useTheme();
  const dispatch = useAppDispatch();
  const [pickerOpen, setPickerOpen] = useState(false);

  const pickerItems: SearchItem[] = useMemo(() => {
    if (definition.optionSource === 'collection' && definition.collectionName) {
      return buildCollectionItems(definition.collectionName);
    }
    return buildInlineItems(definition);
  }, [definition]);

  // Resolve stored ID(s) back to human-readable labels for display.
  const currentSelection = useMemo(() => {
    if (!currentChoice?.selection) return null;
    if (Array.isArray(currentChoice.selection)) {
      return (currentChoice.selection as string[])
        .map((id) => pickerItems.find((i) => i.key === id)?.label ?? id)
        .join(', ');
    }
    const id = currentChoice.selection as string;
    return pickerItems.find((i) => i.key === id)?.label ?? id;
  }, [currentChoice, pickerItems]);

  const handleSelect = (item: SearchItem) => {
    dispatch(
      upsertClassChoice({
        classId,
        choiceIndex,
        choice: {
          featureName: definition.featureName,
          takenAtLevel,
          selection: item.key,
        },
      }),
    );
    setPickerOpen(false);
  };

  const hasItems = pickerItems.length > 0;

  return (
    <>
      <Pressable
        onPress={() => setPickerOpen(true)}
        disabled={!hasItems}
        style={[styles.row, { borderBottomColor: colors.border.DEFAULT }]}
        accessibilityRole="button"
        accessibilityLabel={`${featureLabel}: ${currentSelection ?? 'not set'}`}
        accessibilityHint="Tap to change selection"
      >
        <Text style={[styles.label, { color: colors.text.secondary }]}>{featureLabel}</Text>
        <View style={styles.selectionRow}>
          <Text
            style={[
              styles.selection,
              {
                color: currentSelection ? colors.text.primary : colors.text.tertiary,
                fontStyle: currentSelection ? 'normal' : 'italic',
              },
            ]}
            numberOfLines={1}
          >
            {currentSelection ?? '— choose —'}
          </Text>
          {hasItems && (
            <Text style={[styles.searchIcon, { color: isDark ? fantasy.gold : fantasy.bronze }]}>
              🔍
            </Text>
          )}
          {!hasItems && <Text style={[styles.searchIcon, { color: colors.text.tertiary }]}>—</Text>}
        </View>
      </Pressable>

      <SearchPickerSheet
        visible={pickerOpen}
        title={featureLabel}
        items={pickerItems}
        onSelect={handleSelect}
        onClose={() => setPickerOpen(false)}
        placeholder={`Search ${definition.featureName.toLowerCase()}...`}
      />
    </>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 4,
    borderBottomWidth: StyleSheet.hairlineWidth,
    gap: 8,
  },
  label: {
    fontFamily: 'LibreBaskerville',
    fontSize: 13,
    width: 120,
    flexShrink: 0,
  },
  selectionRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  selection: {
    flex: 1,
    fontFamily: 'LibreBaskerville',
    fontSize: 14,
  },
  searchIcon: {
    fontSize: 14,
  },
});
