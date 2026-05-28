import React, { useState, useMemo, useEffect } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useTheme } from '@/hooks/useTheme';
import { SearchPickerSheet, type SearchItem } from '@/components/ui/SearchPickerSheet';
import { CompanionPickerSheet } from '@/components/character/direct-entry/CompanionPickerSheet';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  upsertClassChoice,
  addCompanion,
  removeCompanion,
} from '@/store/slices/characterEntrySlice';
import { type ClassChoice } from '@/types/classes';
import { type ClassChoiceDefinition } from '@/types/classChoices';
import { GameDataService } from '@/services/GameDataService';
import {
  computeCompanionEffectiveLevel,
  pickerFilterFromDraftClass,
} from '@/services/CompanionService';
import type { AnimalCompanionEntry } from '@/types/animalCompanions';
import { makeCompanionInstanceId } from '@/utils/companionUtils';
import { computePoolEsl } from '@/utils/spellcastingUtils';
import { selectClassDataMap } from '@/store/slices/gameDataSlice';

// Static PF1e class-to-casting-type map. Used to resolve castingType filter tokens
// (e.g. castingType: 'divine') into concrete class names from the character's class list
// without requiring spellcasting pools to be configured first.
const CLASS_CASTING_TYPE: Record<string, 'divine' | 'arcane' | 'psychic' | 'occult'> = {
  // Divine full casters
  cleric: 'divine',
  druid: 'divine',
  oracle: 'divine',
  warpriest: 'divine',
  shaman: 'divine',
  // Divine half casters
  paladin: 'divine',
  ranger: 'divine',
  inquisitor: 'divine',
  hunter: 'divine',
  // Arcane full casters
  wizard: 'arcane',
  sorcerer: 'arcane',
  arcanist: 'arcane',
  witch: 'arcane',
  // Arcane half casters
  bard: 'arcane',
  magus: 'arcane',
  skald: 'arcane',
  bloodrager: 'arcane',
  summoner: 'arcane',
  // Psychic
  psychic: 'psychic',
  mesmerist: 'psychic',
  spiritualist: 'psychic',
  medium: 'psychic',
  // Occult
  occultist: 'occult',
};

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
  const router = useRouter();
  const [pickerOpen, setPickerOpen] = useState(false);
  const [companionPickerOpen, setCompanionPickerOpen] = useState(false);
  const [companionPickerIsMount, setCompanionPickerIsMount] = useState(false);
  const [rawPickerItems, setRawPickerItems] = useState<SearchItem[]>([]);

  const draftClass = useAppSelector((state) =>
    state.characterEntry.character.classes.classes.find((c) => c.id === classId),
  );

  const characterClasses = useAppSelector(
    (state) => state.characterEntry.character.classes.classes,
  );

  const spellcastingPools = useAppSelector(
    (state) => state.characterEntry.character.spellcasting.pools,
  );

  const knownSpells = useAppSelector(
    (state) => state.characterEntry.character.spellcasting.knownSpells,
  );

  const spellbooks = useAppSelector(
    (state) => state.characterEntry.character.spellcasting.spellbooks,
  );

  const classDataMap = useAppSelector(selectClassDataMap);

  // Pre-compute ESL per pool the same way the Spellcasting tab does, so that
  // buildCastableSpellItems can determine max spell level even when
  // pool.effectiveSpellcastingLevel hasn't been persisted (it never is).
  const eslByPoolId = useMemo(() => {
    const map: Record<string, number> = {};
    for (const pool of spellcastingPools) {
      if (pool.id) {
        map[pool.id] = computePoolEsl(pool, characterClasses, classDataMap);
      }
    }
    return map;
  }, [spellcastingPools, characterClasses, classDataMap]);

  // Companion currently granted by this specific class choice, if any.
  const existingCompanion = useAppSelector((state) =>
    state.characterEntry.character.companions.find(
      (c) =>
        c.grantedBy.type === 'class' &&
        c.grantedBy.classEntryId === classId &&
        c.grantedBy.classChoiceId === definition.id,
    ),
  );

  const originalCharacterId = useAppSelector((state) => state.characterEntry.originalCharacterId);
  const routeCharacterId = originalCharacterId ?? 'draft';

  useEffect(() => {
    let stale = false;
    if (definition.optionSource === 'collection' && definition.collectionName) {
      // 1. Merge per-level overrides from levelFilterTable into the base filter.
      const levelOverrides =
        (definition.levelFilterTable as Record<number, Record<string, unknown>> | undefined)?.[
          takenAtLevel
        ] ?? {};
      const baseFilter = { ...(definition.collectionFilter ?? {}), ...levelOverrides };

      // 2. Resolve {chosen_X} / {chosen_deity} tokens.
      let resolvedFilter = resolveFilterTokens(baseFilter, siblingChoices ?? [], characterDeity);

      // 3a. character_castable — respects prepared/spontaneous/spellbook scope per pool.
      if (resolvedFilter.castingType === 'character_castable') {
        GameDataService.buildCastableSpellItems(
          spellcastingPools,
          knownSpells,
          spellbooks,
          characterClasses,
          eslByPoolId,
        )
          .then((items) => {
            if (!stale) setRawPickerItems(items);
          })
          .catch((e) => console.error('Failed to build castable spell items:', e));
        return () => {
          stale = true;
        };
      }

      // 3b. Resolve castingType ('divine' | 'arcane' | ...) → classNames from class list.
      // Used by definitions that want a type-filtered class list regardless of spellcasting setup.
      if (resolvedFilter.castingType !== undefined) {
        const castingType = resolvedFilter.castingType as string;
        const classNames = characterClasses
          .map((c) => c.name.toLowerCase())
          .filter((name) => CLASS_CASTING_TYPE[name] === castingType);
        const { castingType: _dropped, ...rest } = resolvedFilter;
        resolvedFilter = { ...rest, classNames };
      }

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
  }, [
    definition,
    siblingChoices,
    characterDeity,
    takenAtLevel,
    characterClasses,
    spellcastingPools,
    knownSpells,
    spellbooks,
    eslByPoolId,
  ]);

  const pickerItems = useMemo(
    () =>
      filterExcludedChoiceItems(
        rawPickerItems,
        siblingChoices ?? [],
        definition.featureName,
        choiceIndex,
        definition.collectionName,
      ),
    [
      rawPickerItems,
      siblingChoices,
      definition.featureName,
      choiceIndex,
      definition.collectionName,
    ],
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

  const COMPANION_KEYS = new Set(['animal_companion', 'mount']);

  const handleSelect = (item: SearchItem) => {
    const wasCompanion = COMPANION_KEYS.has((currentChoice?.selection as string) ?? '');
    const nowCompanion = COMPANION_KEYS.has(item.key);

    const allOptions = definition.optionGroups?.flatMap((g) => g.options) ?? [];
    const selectedOption = allOptions.find((o) => o.id === item.key);
    const previousOptionId = currentChoice?.selection as string | undefined;
    const previousOption = previousOptionId
      ? allOptions.find((o) => o.id === previousOptionId)
      : undefined;

    dispatch(
      upsertClassChoice({
        classId,
        choiceIndex,
        choice: {
          featureName: definition.featureName,
          takenAtLevel,
          selection: item.key,
        },
        grantedFeature: selectedOption?.grantsFeature,
        removedFeatureName: previousOption?.grantsFeature?.name,
        removedFeatureLevel: previousOption?.grantsFeature?.level,
      }),
    );
    setPickerOpen(false);

    if (wasCompanion && !nowCompanion && existingCompanion) {
      dispatch(removeCompanion(existingCompanion.instanceId));
    }

    // Neither animal_companion nor mount auto-opens the picker.
    // A "Configure" button appears below the row for both, so the user can
    // build or revisit the companion at any level rather than being forced
    // to do it at the moment of selection.
  };

  const handleCompanionSelect = (entry: AnimalCompanionEntry) => {
    dispatch(
      addCompanion({
        instanceId: makeCompanionInstanceId(),
        sourceEntryId: entry.id,
        name: entry.name,
        isMount: companionPickerIsMount,
        grantedBy: {
          type: 'class',
          classEntryId: classId,
          className: draftClass?.name ?? '',
          classChoiceId: definition.id,
        },
        effectiveProgressionLevel: computeCompanionEffectiveLevel(draftClass!, characterClasses),
      }),
    );
    setCompanionPickerOpen(false);
    setCompanionPickerIsMount(false);
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

      {/* Companion / mount section — visible when the choice is animal_companion or mount */}
      {COMPANION_KEYS.has((currentChoice?.selection as string) ?? '') &&
        (() => {
          const isMountSelection = currentChoice?.selection === 'mount';
          const label = isMountSelection ? 'Special Mount' : 'Animal Companion';
          const configureBtnLabel = isMountSelection
            ? '+ Configure Special Mount'
            : '+ Configure Animal Companion';
          const configureBtnSub = isMountSelection
            ? 'Choose the mount type — revisit as you gain paladin levels'
            : 'Choose the companion type — revisit as you gain levels';

          return (
            <View
              style={[
                mountStyles.section,
                {
                  borderColor: isDark ? 'rgba(212,175,55,0.3)' : 'rgba(120,80,20,0.2)',
                  backgroundColor: isDark ? 'rgba(212,175,55,0.05)' : 'rgba(120,80,20,0.04)',
                },
              ]}
            >
              {existingCompanion ? (
                <View style={mountStyles.mountCard}>
                  <View style={mountStyles.mountInfo}>
                    <Text style={[mountStyles.mountLabel, { color: colors.text.tertiary }]}>
                      {label}
                    </Text>
                    <Text style={[mountStyles.mountName, { color: colors.text.primary }]}>
                      {existingCompanion.name}
                    </Text>
                  </View>
                  <View style={mountStyles.mountActions}>
                    <Pressable
                      onPress={() =>
                        router.push(
                          `/characters/${routeCharacterId}/companions/${existingCompanion.instanceId}`,
                        )
                      }
                      style={[
                        mountStyles.actionBtn,
                        { borderColor: isDark ? fantasy.gold : fantasy.bronze },
                      ]}
                      accessibilityRole="button"
                      accessibilityLabel={`Edit ${label}`}
                    >
                      <Text
                        style={[
                          mountStyles.actionText,
                          { color: isDark ? fantasy.gold : fantasy.darkWood },
                        ]}
                      >
                        Edit
                      </Text>
                    </Pressable>
                    <Pressable
                      onPress={() => dispatch(removeCompanion(existingCompanion.instanceId))}
                      style={[mountStyles.actionBtn, { borderColor: colors.text.tertiary }]}
                      accessibilityRole="button"
                      accessibilityLabel={`Remove ${label}`}
                    >
                      <Text style={[mountStyles.actionText, { color: colors.text.tertiary }]}>
                        Remove
                      </Text>
                    </Pressable>
                  </View>
                </View>
              ) : (
                <Pressable
                  onPress={() => {
                    setCompanionPickerIsMount(isMountSelection);
                    setCompanionPickerOpen(true);
                  }}
                  style={[
                    mountStyles.configureBtn,
                    { borderColor: isDark ? fantasy.gold : fantasy.bronze },
                  ]}
                  accessibilityRole="button"
                  accessibilityLabel={configureBtnLabel}
                >
                  <Text
                    style={[
                      mountStyles.configureBtnText,
                      { color: isDark ? fantasy.gold : fantasy.darkWood },
                    ]}
                  >
                    {configureBtnLabel}
                  </Text>
                  <Text style={[mountStyles.configureBtnSub, { color: colors.text.tertiary }]}>
                    {configureBtnSub}
                  </Text>
                </Pressable>
              )}
            </View>
          );
        })()}

      <CompanionPickerSheet
        visible={companionPickerOpen}
        title={
          companionPickerIsMount ? 'Choose Special Mount' : `${featureLabel} — Choose Companion`
        }
        pickerFilter={pickerFilterFromDraftClass(draftClass)}
        onSelect={handleCompanionSelect}
        onClose={() => {
          setCompanionPickerOpen(false);
          setCompanionPickerIsMount(false);
        }}
      />
    </>
  );
}

const mountStyles = StyleSheet.create({
  section: {
    marginHorizontal: 4,
    marginBottom: 6,
    borderRadius: 8,
    borderWidth: 1,
    overflow: 'hidden',
  },
  mountCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
    gap: 12,
  },
  mountInfo: {
    flex: 1,
    gap: 2,
  },
  mountLabel: {
    fontFamily: 'LibreBaskerville',
    fontSize: 10,
    fontStyle: 'italic',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  mountName: {
    fontFamily: 'LibreBaskerville',
    fontSize: 14,
    fontWeight: '600',
  },
  mountActions: {
    flexDirection: 'row',
    gap: 8,
  },
  actionBtn: {
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 6,
    borderWidth: 1,
  },
  actionText: {
    fontFamily: 'LibreBaskerville',
    fontSize: 12,
  },
  configureBtn: {
    padding: 12,
    alignItems: 'center',
    gap: 4,
    borderWidth: StyleSheet.hairlineWidth,
    borderStyle: 'dashed',
  },
  configureBtnText: {
    fontFamily: 'LibreBaskerville',
    fontSize: 13,
    fontWeight: '600',
  },
  configureBtnSub: {
    fontFamily: 'LibreBaskerville',
    fontSize: 11,
    fontStyle: 'italic',
  },
});

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
