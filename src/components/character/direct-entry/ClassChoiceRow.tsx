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
import { ALL_MYSTERIES } from '@/data/mysteries/index';
import { ALL_INQUISITIONS } from '@/data/inquisitions/index';
import { ALL_REVELATIONS } from '@/data/revelations/index';
import { ALL_CAVALIER_ORDERS } from '@/data/cavalierOrders/index';
import { ALL_HEXES } from '@/data/hexes/index';
import { ALL_ARCANIST_EXPLOITS } from '@/data/arcanistExploits/index';
import { ALL_INVESTIGATOR_TALENTS } from '@/data/investigatorTalents/index';
import { getDeityByName } from '@/data/deities/index';

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
        const match = siblingChoices.find(
          (c) => c.featureName.toLowerCase() === featureKeyword,
        );
        resolved[key] = typeof match?.selection === 'string' ? match.selection : undefined;
      }
    } else {
      resolved[key] = value;
    }
  }
  return resolved;
}

function buildCollectionItems(
  collectionName: string,
  resolvedFilter: Record<string, unknown> = {},
): SearchItem[] {
  switch (collectionName) {
    case 'domains': {
      const deityName = resolvedFilter.deityIds as string | undefined;
      const deity = deityName ? getDeityByName(deityName) : undefined;
      const deityDomainIds = deity
        ? new Set([...deity.domains, ...deity.subdomains])
        : null;
      const pool = deityDomainIds
        ? ALL_DOMAINS.filter((d) => deityDomainIds.has(d.id))
        : ALL_DOMAINS;
      return pool.map((d) => ({
        key: d.id,
        label: d.name,
        subLabel: d.description?.slice(0, 80),
        category: deity ? undefined : (d.druidAllowed ? 'Druid / Cleric' : 'Cleric'),
      }));
    }
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
    case 'mysteries':
      return ALL_MYSTERIES.map((m) => ({
        key: m.id,
        label: m.name,
        subLabel: m.classSkills.slice(0, 3).join(', '),
      }));
    case 'inquisitions':
      return ALL_INQUISITIONS.map((i) => ({
        key: i.id,
        label: i.name,
        subLabel: i.description?.slice(0, 80),
      }));
    case 'revelations': {
      const mysteryId = resolvedFilter.mysteryId as string | undefined;
      const pool = mysteryId
        ? ALL_REVELATIONS.filter((r) => r.mysteryId === mysteryId)
        : ALL_REVELATIONS;
      return pool.map((r) => ({
        key: r.id,
        label: r.name,
        subLabel: r.description?.slice(0, 80),
      }));
    }
    case 'cavalierorders':
      return ALL_CAVALIER_ORDERS.map((o) => ({
        key: o.id,
        label: o.name,
        subLabel: o.classSkills.join(', '),
      }));
    case 'hexes':
      return ALL_HEXES.map((h) => ({
        key: h.id,
        label: h.name,
        subLabel: h.description?.slice(0, 80),
        category: h.hexTier === 'grand' ? 'Grand Hexes' : h.hexTier === 'major' ? 'Major Hexes' : 'Hexes',
      }));
    case 'arcanistexploits':
      return ALL_ARCANIST_EXPLOITS.map((e) => ({
        key: e.id,
        label: e.name,
        subLabel: e.description?.slice(0, 80),
        category: e.exploitTier === 'greater' ? 'Greater Exploits' : 'Exploits',
      }));
    case 'investigatortalents':
      return ALL_INVESTIGATOR_TALENTS.map((t) => ({
        key: t.id,
        label: t.name,
        subLabel: t.description?.slice(0, 80),
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
  siblingChoices,
  disabled = false,
  characterDeity,
}: ClassChoiceRowProps) {
  const { colors, fantasy, isDark } = useTheme();
  const dispatch = useAppDispatch();
  const [pickerOpen, setPickerOpen] = useState(false);

  const pickerItems: SearchItem[] = useMemo(() => {
    if (definition.optionSource === 'collection' && definition.collectionName) {
      const resolvedFilter = resolveFilterTokens(
        definition.collectionFilter ?? {},
        siblingChoices ?? [],
        characterDeity,
      );
      return buildCollectionItems(definition.collectionName, resolvedFilter);
    }
    return buildInlineItems(definition);
  }, [definition, siblingChoices, characterDeity]);

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
        style={[styles.row, { borderBottomColor: colors.border.DEFAULT, opacity: disabled ? 0.4 : 1 }]}
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
                color: disabled ? colors.text.tertiary : (currentSelection ? colors.text.primary : colors.text.tertiary),
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
          {(!hasItems || disabled) && <Text style={[styles.searchIcon, { color: colors.text.tertiary }]}>—</Text>}
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
