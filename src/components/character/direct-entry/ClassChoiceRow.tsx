import React, { useState, useMemo, useEffect } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { SearchPickerSheet, type SearchItem } from '@/components/ui/SearchPickerSheet';
import { useAppDispatch } from '@/store/hooks';
import { upsertClassChoice } from '@/store/slices/characterEntrySlice';
import { type ClassChoice } from '@/types/classes';
import { type ClassChoiceDefinition } from '@/types/classChoices';
import { GameDataService } from '@/services/GameDataService';

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
  // All choices stored for this class entry — used to resolve {chosen_X} filter tokens
  siblingChoices?: ClassChoice[];
  // Disabled when a mutually exclusive sibling choice is already filled (e.g. Inquisitor Domain vs Inquisition)
  disabled?: boolean;
  // The deity name from the Identity section — used to resolve {chosen_deity} filter tokens
  characterDeity?: string;
}

// Resolve {chosen_X} tokens in a collectionFilter using sibling class choices
// and character-level state (e.g. deity from the Identity section).
// e.g. { mysteryId: '{chosen_mystery}' } → { mysteryId: 'battle' }
// e.g. { deityIds: '{chosen_deity}' } → { deityIds: 'milani' }
function resolveFilterTokens(
  filter: Record<string, unknown>,
  siblingChoices: ClassChoice[],
  characterDeity?: string,
): Record<string, unknown> {
  const resolved: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(filter)) {
    if (typeof value === 'string' && value.startsWith('{') && value.endsWith('}')) {
      const tokenName = value.slice(1, -1); // e.g. 'chosen_mystery' or 'chosen_deity'
      if (tokenName === 'chosen_deity') {
        resolved[key] = characterDeity || undefined;
      } else if (tokenName.startsWith('chosen_')) {
        const featureKeyword = tokenName.slice('chosen_'.length); // e.g. 'mystery'
        const match = siblingChoices.find((c) => c.featureName.toLowerCase() === featureKeyword);
        resolved[key] = typeof match?.selection === 'string' ? match.selection : undefined;
      }
    } else {
      resolved[key] = value;
    }
  }
  return resolved;
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

// Filters picker items to exclude IDs already selected in sibling slots for the
// same feature, plus domain parent/child conflicts (subdomain IDs follow the
// `{parentId}-{suffix}` convention — selecting 'fire' excludes 'fire-ash', etc.).
// The subdomain exclusion logic is domain-specific: other collections (rage powers,
// hexes, etc.) use hyphenated IDs without a parent/child relationship, so prefix
// exclusion would incorrectly block valid independent selections.
export function filterExcludedChoiceItems(
  items: SearchItem[],
  siblingChoices: ClassChoice[],
  featureName: string,
  choiceIndex: number,
  collectionName?: string,
): SearchItem[] {
  const excluded = new Set<string>();
  siblingChoices
    .filter((c) => c.featureName === featureName)
    .forEach((c, i) => {
      if (i === choiceIndex) return;
      const sel = c.selection;
      if (typeof sel === 'string' && sel) excluded.add(sel);
      else if (Array.isArray(sel)) sel.forEach((s) => excluded.add(s));
    });

  if (excluded.size === 0) return items;

  const isDomains = collectionName === 'domains';

  // When a subdomain is selected (e.g. 'fire-ash'), build a prefix to exclude siblings.
  // 'fire-ash' → prefix 'fire-' excludes 'fire-arson', 'fire-smoke', etc.
  // Only applies to the domains collection — other hyphenated IDs are not hierarchical.
  const excludedPrefixes = new Set<string>();
  if (isDomains) {
    for (const selectedId of excluded) {
      const lastDash = selectedId.lastIndexOf('-');
      if (lastDash !== -1) excludedPrefixes.add(selectedId.slice(0, lastDash + 1));
    }
  }

  return items.filter((item) => {
    if (excluded.has(item.key)) return false;
    if (isDomains) {
      for (const selectedId of excluded) {
        if (item.key.startsWith(selectedId + '-')) return false;
        if (selectedId.startsWith(item.key + '-')) return false;
      }
      for (const prefix of excludedPrefixes) {
        if (item.key.startsWith(prefix)) return false;
      }
    }
    return true;
  });
}

export function ClassChoiceRow({
  classId,
  definition,
  choiceIndex,
  currentChoice,
  takenAtLevel,
  featureLabel,
  siblingChoices,
  disabled = false,
  characterDeity,
}: ClassChoiceRowProps) {
  const { colors, fantasy, isDark } = useTheme();
  const dispatch = useAppDispatch();
  const [pickerOpen, setPickerOpen] = useState(false);
  const [rawPickerItems, setRawPickerItems] = useState<SearchItem[]>([]);

  useEffect(() => {
    let stale = false;
    if (definition.optionSource === 'collection' && definition.collectionName) {
      const resolvedFilter = resolveFilterTokens(
        definition.collectionFilter ?? {},
        siblingChoices ?? [],
        characterDeity,
      );
      GameDataService.getClassChoiceItems(definition.collectionName, resolvedFilter)
        .then((items) => {
          if (!stale) setRawPickerItems(items);
        })
        .catch((e) => console.error('Failed to load class choice items:', e));
    } else {
      Promise.resolve(buildInlineItems(definition)).then((items) => {
        if (!stale) setRawPickerItems(items);
      });
    }
    return () => {
      stale = true;
    };
  }, [definition, siblingChoices, characterDeity]);

  const pickerItems = useMemo(
    () =>
      filterExcludedChoiceItems(
        rawPickerItems,
        siblingChoices ?? [],
        definition.featureName,
        choiceIndex,
        definition.collectionName,
      ),
    [rawPickerItems, siblingChoices, definition.featureName, choiceIndex, definition.collectionName],
  );

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
        disabled={!hasItems || disabled}
        style={[
          styles.row,
          { borderBottomColor: colors.border.DEFAULT, opacity: disabled ? 0.4 : 1 },
        ]}
        accessibilityRole="button"
        accessibilityLabel={`${featureLabel}: ${disabled ? 'not available — mutually exclusive choice already made' : (currentSelection ?? 'not set')}`}
        accessibilityHint={disabled ? undefined : 'Tap to change selection'}
      >
        <Text style={[styles.label, { color: colors.text.secondary }]}>{featureLabel}</Text>
        <View style={styles.selectionRow}>
          <Text
            style={[
              styles.selection,
              {
                color: disabled
                  ? colors.text.tertiary
                  : currentSelection
                    ? colors.text.primary
                    : colors.text.tertiary,
                fontStyle: disabled || !currentSelection ? 'italic' : 'normal',
              },
            ]}
            numberOfLines={1}
          >
            {disabled ? '— n/a (other choice made) —' : (currentSelection ?? '— choose —')}
          </Text>
          {hasItems && !disabled && (
            <Text style={[styles.searchIcon, { color: isDark ? fantasy.gold : fantasy.bronze }]}>
              🔍
            </Text>
          )}
          {(!hasItems || disabled) && (
            <Text style={[styles.searchIcon, { color: colors.text.tertiary }]}>—</Text>
          )}
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
