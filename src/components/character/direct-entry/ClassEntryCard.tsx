import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { View, Text, TextInput, Pressable, Modal, FlatList, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useTheme } from '@/hooks/useTheme';
import { InlinePicker } from '@/components/ui/InlinePicker';
import { ClassChoiceRow } from './ClassChoiceRow';
import { ClassChoicesUnavailable } from './ClassChoicesUnavailable';
import { CompanionCard } from './CompanionCard';
import { CompanionPickerSheet } from './CompanionPickerSheet';
import { shallowEqual } from 'react-redux';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  removeClass,
  updateClassLevel,
  updateClassArchetype,
  updateClassSpellcastingAdvancement,
  toggleClassPrereqOverride,
  toggleFavoredClass,
  setFavoredClassBonuses,
  addCompanion,
  removeCompanion,
  splitClass,
  setAdvancesCompanionOf,
} from '@/store/slices/characterEntrySlice';
import { type ClassEntry, type FavoredClassBonusSelection } from '@/types/classes';
import { type SpellcastingAdvancement } from '@/types/spells';
import type { FavoredClassBonusEntry } from '@/types/favoredClassBonuses';
import { GameDataService } from '@/services/GameDataService';
import { selectClassDataMap } from '@/store/slices/gameDataSlice';
import { lookupClassData, computeFCBAlternateAccumulation } from '@/utils/characterComputations';
import {
  effectiveLevelFromDraftClass,
  computeCompanionEffectiveLevel,
  pickerFilterFromDraftClass,
} from '@/services/CompanionService';
import { type ClassChoiceDefinition } from '@/types/classChoices';
import { type ClassChoice } from '@/types/classes';
import { ArchetypePickerSheet } from './ArchetypePickerSheet';
import type { AnimalCompanionEntry } from '@/types/animalCompanions';
import { makeCompanionInstanceId } from '@/utils/companionUtils';
import { EidolonSection } from './EidolonSection';

// Matches "Summoner", "Summoner (Unchained)", "Summoner (APG)", etc.
const SUMMONER_CLASS_RE = /^summoner(?:\s|$|\()/i;

// Pairs of featureNames that are mutually exclusive — filling one disables the other.
const MUTUALLY_EXCLUSIVE_PAIRS: [string, string][] = [['Domain', 'Inquisition']];

function isMutuallyExcludedFilled(featureName: string, classChoices: ClassChoice[]): boolean {
  for (const [a, b] of MUTUALLY_EXCLUSIVE_PAIRS) {
    const otherName = featureName === a ? b : featureName === b ? a : null;
    if (otherName) {
      return classChoices.some((c) => c.featureName === otherName && c.selection);
    }
  }
  return false;
}

// Class + archetype combos that may grant multiple companions from a single
// class choice (Beastmaster gets 1 + INT mod). Detected here so the
// "+ Add Companion" button appears only for these.
function classSupportsMultipleCompanions(entry: ClassEntry): boolean {
  return entry.name === 'Ranger' && entry.archetypeName === 'Beastmaster';
}

// ---- Source badge ----

const SOURCE_COLORS: Record<string, { bg: string; text: string }> = {
  pf1e: { bg: 'rgba(212,175,55,0.2)', text: '#D4AF37' },
  '3.5e': { bg: 'rgba(160,160,160,0.2)', text: '#A0A0A0' },
  homebrew: { bg: 'rgba(139,92,246,0.2)', text: '#8B5CF6' },
  campaign: { bg: 'rgba(16,185,129,0.2)', text: '#10B981' },
};

function SourceBadge({ source }: { source: string }) {
  const badge = SOURCE_COLORS[source] ?? SOURCE_COLORS.homebrew;
  return (
    <View style={[styles.badge, { backgroundColor: badge.bg }]}>
      <Text style={[styles.badgeText, { color: badge.text }]}>
        {source === 'pf1e' ? 'PF1e' : source === '3.5e' ? '3.5e' : source}
      </Text>
    </View>
  );
}

// ---- Choice slot derivation ----
// Given a definition and the class level, returns the list of (featureLabel, takenAtLevel, choiceIndex)
// tuples representing the choices that should be shown.

interface ChoiceSlot {
  featureLabel: string;
  takenAtLevel: number;
  choiceIndex: number;
  definition: ClassChoiceDefinition;
}

function deriveChoiceSlots(definition: ClassChoiceDefinition, classLevel: number): ChoiceSlot[] {
  const slots: ChoiceSlot[] = [];
  const { selectionMode, featureName } = definition;

  switch (selectionMode.type) {
    case 'single_at_creation':
      slots.push({ featureLabel: featureName, takenAtLevel: 1, choiceIndex: 0, definition });
      break;

    case 'multi_at_creation': {
      const count = selectionMode.count;
      for (let i = 0; i < count; i++) {
        slots.push({
          featureLabel: count > 1 ? `${featureName} ${i + 1}` : featureName,
          takenAtLevel: 1,
          choiceIndex: i,
          definition,
        });
      }
      break;
    }

    case 'at_class_levels': {
      const triggeredLevels = selectionMode.levels.filter((l: number) => l <= classLevel);
      triggeredLevels.forEach((lvl: number, i: number) => {
        slots.push({
          featureLabel: `${featureName} (lvl ${lvl})`,
          takenAtLevel: lvl,
          choiceIndex: i,
          definition,
        });
      });
      break;
    }

    case 'every_n_class_levels': {
      const { n, startLevel } = selectionMode;
      let lvl = startLevel;
      let i = 0;
      while (lvl <= classLevel) {
        slots.push({
          featureLabel: `${featureName} (lvl ${lvl})`,
          takenAtLevel: lvl,
          choiceIndex: i,
          definition,
        });
        lvl += n;
        i++;
      }
      break;
    }
  }

  return slots;
}

// ---- Spellcasting advancement controls ----

export function makeEmptyAdvancement(
  mode: 'single' | 'both',
  level: number,
): SpellcastingAdvancement {
  if (mode === 'single') {
    return { mode, perLevel: Array.from({ length: level }, () => ({ baseClassEntryId: '' })) };
  }
  return {
    mode,
    perLevel: Array.from({ length: level }, () => ({
      arcaneBaseClassEntryId: '',
      divineBaseClassEntryId: '',
    })),
  };
}

// ---- Favored Class Bonus Section ----

function FavoredClassBonusSection({ entry }: { entry: ClassEntry }) {
  const { colors, fantasy, isDark } = useTheme();
  const dispatch = useAppDispatch();
  const raceName = useAppSelector((state) => state.characterEntry.character.info.race?.name ?? '');
  const [alternates, setAlternates] = useState<FavoredClassBonusEntry[]>([]);
  const [altPickerLevel, setAltPickerLevel] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;
    const promise =
      !raceName || !entry.name
        ? Promise.resolve([])
        : GameDataService.getFavoredClassBonuses(raceName, entry.name);
    promise
      .then((results) => {
        if (!cancelled) setAlternates(results as FavoredClassBonusEntry[]);
      })
      .catch((e) => {
        if (!cancelled) console.error('[FCB] Failed to load favored class bonuses:', e);
      });
    return () => {
      cancelled = true;
    };
  }, [raceName, entry.name]);

  const selections = useMemo(() => entry.favoredClassBonuses ?? [], [entry.favoredClassBonuses]);
  const allocated = selections.length;
  const remaining = entry.level - allocated;

  const getSelectionForLevel = useCallback(
    (level: number) => selections.find((s) => s.level === level) ?? null,
    [selections],
  );

  const setLevelSelection = useCallback(
    (level: number, sel: FavoredClassBonusSelection) => {
      const next = selections.filter((s) => s.level !== level).concat(sel);
      next.sort((a, b) => a.level - b.level);
      dispatch(setFavoredClassBonuses({ id: entry.id ?? entry.name, selections: next }));
    },
    [dispatch, entry.id, entry.name, selections],
  );

  const clearLevelSelection = useCallback(
    (level: number) => {
      const next = selections.filter((s) => s.level !== level);
      dispatch(setFavoredClassBonuses({ id: entry.id ?? entry.name, selections: next }));
    },
    [dispatch, entry.id, entry.name, selections],
  );

  // The level currently open in the alt picker modal (null = closed)
  // altPickerLevel is already declared above as useState<number | null>(null)

  return (
    <View style={[fcbStyles.section, { borderTopColor: colors.border.DEFAULT }]}>
      <View style={fcbStyles.header}>
        <Text style={[fcbStyles.label, { color: colors.text.secondary }]}>
          Favored class bonuses
        </Text>
        {remaining > 0 && (
          <Text style={[fcbStyles.remaining, { color: fantasy.bronze }]}>
            {remaining} unallocated
          </Text>
        )}
        {remaining === 0 && (
          <Text style={[fcbStyles.remaining, { color: colors.text.tertiary }]}>All allocated</Text>
        )}
        {remaining < 0 && (
          <Text style={[fcbStyles.remaining, { color: colors.error.DEFAULT }]}>
            {Math.abs(remaining)} over-allocated
          </Text>
        )}
      </View>

      {Array.from({ length: entry.level }, (_, i) => {
        const level = i + 1;
        const sel = getSelectionForLevel(level);
        const isHp = sel?.type === 'hp';
        const isSkill = sel?.type === 'skill';
        const isAlt = sel?.type === 'alternate';
        const selectedAlt = isAlt
          ? alternates.find(
              (a) => a.id === (sel as { type: 'alternate'; optionId: string }).optionId,
            )
          : null;

        return (
          <View key={level} style={fcbStyles.levelRow}>
            <Text style={[fcbStyles.levelLabel, { color: colors.text.tertiary }]}>{level}</Text>

            {/* HP chip */}
            <Pressable
              onPress={() =>
                isHp ? clearLevelSelection(level) : setLevelSelection(level, { level, type: 'hp' })
              }
              style={[
                fcbStyles.chip,
                {
                  borderColor: isHp ? fantasy.gold : colors.border.DEFAULT,
                  backgroundColor: isHp
                    ? isDark
                      ? 'rgba(212,175,55,0.2)'
                      : 'rgba(212,175,55,0.12)'
                    : isDark
                      ? colors.bg.tertiary
                      : colors.bg.secondary,
                },
              ]}
              accessibilityLabel={`Level ${level}: take HP favored class bonus`}
              accessibilityState={{ selected: isHp }}
            >
              <Text
                style={[fcbStyles.chipText, { color: isHp ? fantasy.gold : colors.text.secondary }]}
              >
                HP
              </Text>
            </Pressable>

            {/* Skill chip */}
            <Pressable
              onPress={() =>
                isSkill
                  ? clearLevelSelection(level)
                  : setLevelSelection(level, { level, type: 'skill' })
              }
              style={[
                fcbStyles.chip,
                {
                  borderColor: isSkill ? fantasy.gold : colors.border.DEFAULT,
                  backgroundColor: isSkill
                    ? isDark
                      ? 'rgba(212,175,55,0.2)'
                      : 'rgba(212,175,55,0.12)'
                    : isDark
                      ? colors.bg.tertiary
                      : colors.bg.secondary,
                },
              ]}
              accessibilityLabel={`Level ${level}: take Skill favored class bonus`}
              accessibilityState={{ selected: isSkill }}
            >
              <Text
                style={[
                  fcbStyles.chipText,
                  { color: isSkill ? fantasy.gold : colors.text.secondary },
                ]}
              >
                Skill
              </Text>
            </Pressable>

            {/* Alternate chips / picker — only show alternates valid at this level */}
            {(() => {
              const validAlternates = alternates.filter(
                (a) => !a.minimumClassLevel || a.minimumClassLevel <= level,
              );
              if (validAlternates.length === 0) return null;
              if (validAlternates.length === 1) {
                return (
                  <Pressable
                    onPress={() =>
                      isAlt && selectedAlt?.id === validAlternates[0].id
                        ? clearLevelSelection(level)
                        : setLevelSelection(level, {
                            level,
                            type: 'alternate',
                            optionId: validAlternates[0].id,
                          })
                    }
                    style={[
                      fcbStyles.chip,
                      fcbStyles.chipAlt,
                      {
                        borderColor: isAlt ? fantasy.gold : colors.border.DEFAULT,
                        backgroundColor: isAlt
                          ? isDark
                            ? 'rgba(212,175,55,0.2)'
                            : 'rgba(212,175,55,0.12)'
                          : isDark
                            ? colors.bg.tertiary
                            : colors.bg.secondary,
                      },
                    ]}
                    accessibilityLabel={`Level ${level}: take alternate favored class bonus: ${validAlternates[0].shortName}`}
                    accessibilityState={{ selected: isAlt }}
                  >
                    <Text
                      style={[
                        fcbStyles.chipText,
                        { color: isAlt ? fantasy.gold : colors.text.secondary },
                      ]}
                      numberOfLines={1}
                    >
                      {validAlternates[0].shortName}
                    </Text>
                  </Pressable>
                );
              }
              return (
                <>
                  <Pressable
                    onPress={() => setAltPickerLevel(level)}
                    style={[
                      fcbStyles.chip,
                      fcbStyles.chipAlt,
                      {
                        borderColor: isAlt ? fantasy.gold : colors.border.DEFAULT,
                        backgroundColor: isAlt
                          ? isDark
                            ? 'rgba(212,175,55,0.2)'
                            : 'rgba(212,175,55,0.12)'
                          : isDark
                            ? colors.bg.tertiary
                            : colors.bg.secondary,
                      },
                    ]}
                    accessibilityLabel={`Level ${level}: choose alternate favored class bonus`}
                  >
                    <Text
                      style={[
                        fcbStyles.chipText,
                        { color: isAlt ? fantasy.gold : colors.text.secondary },
                      ]}
                      numberOfLines={1}
                    >
                      {isAlt && selectedAlt ? selectedAlt.shortName : 'Alt ▾'}
                    </Text>
                  </Pressable>

                  {/* Nothing extra needed here — the modal below is driven by altPickerLevel */}
                </>
              );
            })()}
          </View>
        );
      })}

      {/* Alternate FCB picker modal — opened imperatively by the "Alt ▾" chip */}
      <Modal
        visible={altPickerLevel !== null}
        transparent
        animationType="fade"
        onRequestClose={() => setAltPickerLevel(null)}
      >
        <Pressable style={fcbStyles.modalBackdrop} onPress={() => setAltPickerLevel(null)}>
          <View
            style={[
              fcbStyles.modalSheet,
              {
                backgroundColor: isDark ? colors.bg.secondary : colors.bg.primary,
                borderColor: fantasy.bronze,
              },
            ]}
          >
            <Text
              style={[fcbStyles.modalTitle, { color: isDark ? fantasy.gold : fantasy.darkWood }]}
            >
              Alternate Favored Class Bonus
            </Text>
            <FlatList
              data={alternates.filter(
                (a) =>
                  altPickerLevel === null ||
                  !a.minimumClassLevel ||
                  a.minimumClassLevel <= altPickerLevel,
              )}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => {
                const currentSel =
                  altPickerLevel !== null ? getSelectionForLevel(altPickerLevel) : null;
                const isSelected =
                  currentSel?.type === 'alternate' &&
                  (currentSel as { type: 'alternate'; optionId: string }).optionId === item.id;
                return (
                  <Pressable
                    onPress={() => {
                      if (altPickerLevel !== null) {
                        setLevelSelection(altPickerLevel, {
                          level: altPickerLevel,
                          type: 'alternate',
                          optionId: item.id,
                        });
                      }
                      setAltPickerLevel(null);
                    }}
                    style={[
                      fcbStyles.modalOption,
                      {
                        borderBottomColor: colors.border.DEFAULT,
                        backgroundColor: isSelected
                          ? isDark
                            ? 'rgba(212,175,55,0.15)'
                            : 'rgba(140,90,40,0.08)'
                          : 'transparent',
                      },
                    ]}
                    accessibilityRole="menuitem"
                    accessibilityState={{ selected: isSelected }}
                  >
                    <Text
                      style={[
                        fcbStyles.modalOptionText,
                        {
                          color: isSelected
                            ? isDark
                              ? fantasy.gold
                              : fantasy.darkWood
                            : colors.text.primary,
                          fontWeight: isSelected ? '700' : '400',
                        },
                      ]}
                    >
                      {item.shortName}
                    </Text>
                    <Text
                      style={[fcbStyles.modalOptionDesc, { color: colors.text.tertiary }]}
                      numberOfLines={2}
                    >
                      {item.description}
                    </Text>
                    {isSelected && (
                      <Text
                        style={[
                          fcbStyles.modalCheckmark,
                          { color: isDark ? fantasy.gold : fantasy.darkWood },
                        ]}
                      >
                        ✓
                      </Text>
                    )}
                  </Pressable>
                );
              }}
            />
          </View>
        </Pressable>
      </Modal>

      {/* Accumulated alternate effects summary */}
      {selections.some((s) => s.type === 'alternate') &&
        computeFCBAlternateAccumulation([entry], alternates).map((eff) => (
          <View key={eff.optionId} style={fcbStyles.summaryRow}>
            <Text style={[fcbStyles.summaryName, { color: colors.text.secondary }]}>
              {eff.shortName}:
            </Text>
            <Text style={[fcbStyles.summaryValue, { color: fantasy.bronze }]}>{eff.display}</Text>
          </View>
        ))}
    </View>
  );
}

const fcbStyles = StyleSheet.create({
  section: {
    borderTopWidth: StyleSheet.hairlineWidth,
    paddingHorizontal: 12,
    paddingTop: 8,
    paddingBottom: 4,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  label: {
    fontFamily: 'LibreBaskerville',
    fontSize: 13,
    fontWeight: '600',
  },
  remaining: {
    fontFamily: 'LibreBaskerville',
    fontSize: 11,
  },
  levelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 5,
  },
  levelLabel: {
    fontFamily: 'LibreBaskerville',
    fontSize: 11,
    minWidth: 22,
    textAlign: 'right',
  },
  chip: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    borderWidth: 1,
  },
  chipAlt: {
    flex: 1,
    maxWidth: 140,
  },
  chipText: {
    fontFamily: 'LibreBaskerville',
    fontSize: 12,
    fontWeight: '600',
  },
  summaryRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'baseline',
    gap: 4,
    marginTop: 4,
    paddingHorizontal: 4,
  },
  summaryName: {
    fontFamily: 'LibreBaskerville',
    fontSize: 11,
    fontWeight: '600',
  },
  summaryValue: {
    fontFamily: 'LibreBaskerville',
    fontSize: 11,
    fontStyle: 'italic',
    flex: 1,
  },
  modalBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  modalSheet: {
    width: '100%',
    maxHeight: 400,
    borderRadius: 10,
    borderWidth: 1,
    overflow: 'hidden',
  },
  modalTitle: {
    fontFamily: 'Cinzel',
    fontSize: 14,
    fontWeight: '700',
    paddingHorizontal: 16,
    paddingVertical: 12,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  modalOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  modalOptionText: {
    flex: 1,
    fontFamily: 'LibreBaskerville',
    fontSize: 16,
  },
  modalOptionDesc: {
    fontSize: 12,
    marginTop: 2,
  },
  modalCheckmark: {
    fontSize: 16,
    fontWeight: '700',
  },
});

function AdvancementControls({ entry }: { entry: ClassEntry }) {
  const { colors, fantasy, isDark } = useTheme();
  const dispatch = useAppDispatch();
  const classes = useAppSelector((state) => state.characterEntry.character.classes.classes);
  const classDataMap = useAppSelector(selectClassDataMap);
  const [showPerLevel, setShowPerLevel] = useState(false);

  const adv = entry.spellcastingAdvancement;
  if (!adv) return null;

  const spec = classDataMap.get(entry.name.toLowerCase())?.advancesSpellcasting;
  if (!spec) return null;

  const getTradition = (className: string): 'divine' | 'arcane' | null => {
    const data = classDataMap.get(className.toLowerCase());
    const t = data?.spellcasting.type;
    return t === 'Divine' ? 'divine' : t === 'Arcane' ? 'arcane' : null;
  };

  const isAdvancingLevel = (lvl: number): boolean =>
    spec.atLevels ? spec.atLevels.includes(lvl) : lvl >= 1 && lvl <= entry.level;

  // Eligible = base caster (has spellcasting AND not itself an advancer)
  // AND appears BEFORE this entry in the draft.classes array (must already
  // exist in the character's timeline at the point this prestige level is
  // taken).
  const entryIndex = classes.findIndex((c) => c.id === entry.id);
  const isBaseCaster = (className: string): boolean => {
    const data = classDataMap.get(className.toLowerCase());
    if (!data) return false;
    if (data.spellcasting.type === 'None') return false;
    if (data.advancesSpellcasting) return false;
    return true;
  };

  // Apply tradition filter for 'single' mode (ignored in 'both' — the two
  // pickers each get their own tradition-locked list below).
  const traditionOk = (className: string): boolean => {
    if (adv.mode === 'both') return true;
    const t = getTradition(className);
    if (!t) return false;
    if (!spec.tradition || spec.tradition === 'chosen') return true;
    return t === spec.tradition;
  };

  const eligibleAny = classes.filter((c, idx) => {
    if (c.id === entry.id) return false;
    if (idx >= entryIndex) return false;
    if (!isBaseCaster(c.name)) return false;
    return traditionOk(c.name);
  });
  const eligibleArcane = classes.filter(
    (c, idx) =>
      c.id !== entry.id &&
      idx < entryIndex &&
      isBaseCaster(c.name) &&
      getTradition(c.name) === 'arcane',
  );
  const eligibleDivine = classes.filter(
    (c, idx) =>
      c.id !== entry.id &&
      idx < entryIndex &&
      isBaseCaster(c.name) &&
      getTradition(c.name) === 'divine',
  );

  const setAllSingle = (targetId: string) => {
    dispatch(
      updateClassSpellcastingAdvancement({
        id: entry.id ?? entry.name,
        advancement: {
          mode: 'single',
          perLevel: Array.from({ length: entry.level }, () => ({ baseClassEntryId: targetId })),
        },
      }),
    );
  };

  const setAllBoth = (
    field: 'arcaneBaseClassEntryId' | 'divineBaseClassEntryId',
    targetId: string,
  ) => {
    if (adv.mode !== 'both') return;
    const next = adv.perLevel.map((p) => ({ ...p, [field]: targetId }));
    dispatch(
      updateClassSpellcastingAdvancement({
        id: entry.id ?? entry.name,
        advancement: { mode: 'both', perLevel: next },
      }),
    );
  };

  const setLevelSingle = (levelIdx: number, targetId: string) => {
    if (adv.mode !== 'single') return;
    const next = adv.perLevel.map((p, i) => (i === levelIdx ? { baseClassEntryId: targetId } : p));
    dispatch(
      updateClassSpellcastingAdvancement({
        id: entry.id ?? entry.name,
        advancement: { mode: 'single', perLevel: next },
      }),
    );
  };

  const setLevelBoth = (
    levelIdx: number,
    field: 'arcaneBaseClassEntryId' | 'divineBaseClassEntryId',
    targetId: string,
  ) => {
    if (adv.mode !== 'both') return;
    const next = adv.perLevel.map((p, i) => (i === levelIdx ? { ...p, [field]: targetId } : p));
    dispatch(
      updateClassSpellcastingAdvancement({
        id: entry.id ?? entry.name,
        advancement: { mode: 'both', perLevel: next },
      }),
    );
  };

  // Detect whether every advancing level shares the same target (collapsed view works).
  // Skip levels' stored pointers are irrelevant — they never render or contribute.
  const advancingEntries = adv.perLevel
    .map((p, i) => ({ p, levelNum: i + 1 }))
    .filter(({ levelNum }) => isAdvancingLevel(levelNum));

  const allSameSingle =
    adv.mode === 'single' &&
    advancingEntries.length > 0 &&
    advancingEntries.every(
      ({ p }) =>
        (p as { baseClassEntryId: string }).baseClassEntryId ===
        (advancingEntries[0].p as { baseClassEntryId: string }).baseClassEntryId,
    );
  const allSameBoth =
    adv.mode === 'both' &&
    advancingEntries.length > 0 &&
    advancingEntries.every(
      ({ p }) =>
        (p as { arcaneBaseClassEntryId: string; divineBaseClassEntryId: string })
          .arcaneBaseClassEntryId ===
          (
            advancingEntries[0].p as {
              arcaneBaseClassEntryId: string;
              divineBaseClassEntryId: string;
            }
          ).arcaneBaseClassEntryId &&
        (p as { arcaneBaseClassEntryId: string; divineBaseClassEntryId: string })
          .divineBaseClassEntryId ===
          (
            advancingEntries[0].p as {
              arcaneBaseClassEntryId: string;
              divineBaseClassEntryId: string;
            }
          ).divineBaseClassEntryId,
    );

  const toOptions = (arr: typeof classes) =>
    arr.map((c) => ({ label: `${c.name} ${c.level}`, value: c.id ?? c.name }));

  return (
    <View style={styles.advancementPanel}>
      <Text style={[styles.fieldLabel, { color: colors.text.secondary }]}>
        {adv.mode === 'both'
          ? 'Advances one arcane + one divine caster per level:'
          : 'Advances a base caster per level:'}
      </Text>

      {/* Collapsed "all levels" pickers — only shown when every level is the same */}
      {!showPerLevel && allSameSingle && (
        <View style={styles.advancementRow}>
          <Text style={[styles.fieldLabel, { color: colors.text.secondary }]}>All levels</Text>
          {eligibleAny.length === 0 ? (
            <Text style={[styles.advancementHint, { color: colors.text.tertiary }]}>
              Add a caster class first.
            </Text>
          ) : (
            <InlinePicker
              value={(advancingEntries[0].p as { baseClassEntryId: string }).baseClassEntryId}
              options={[{ label: '—— pick one ——', value: '' }, ...toOptions(eligibleAny)]}
              onValueChange={setAllSingle}
              style={styles.advancementPicker}
            />
          )}
        </View>
      )}

      {!showPerLevel && allSameBoth && adv.mode === 'both' && (
        <>
          <View style={styles.advancementRow}>
            <Text style={[styles.fieldLabel, { color: colors.text.secondary }]}>All arcane</Text>
            <InlinePicker
              value={
                (
                  advancingEntries[0].p as {
                    arcaneBaseClassEntryId: string;
                    divineBaseClassEntryId: string;
                  }
                ).arcaneBaseClassEntryId
              }
              options={[{ label: '—— pick one ——', value: '' }, ...toOptions(eligibleArcane)]}
              onValueChange={(v) => setAllBoth('arcaneBaseClassEntryId', v)}
              style={styles.advancementPicker}
            />
          </View>
          <View style={styles.advancementRow}>
            <Text style={[styles.fieldLabel, { color: colors.text.secondary }]}>All divine</Text>
            <InlinePicker
              value={
                (
                  advancingEntries[0].p as {
                    arcaneBaseClassEntryId: string;
                    divineBaseClassEntryId: string;
                  }
                ).divineBaseClassEntryId
              }
              options={[{ label: '—— pick one ——', value: '' }, ...toOptions(eligibleDivine)]}
              onValueChange={(v) => setAllBoth('divineBaseClassEntryId', v)}
              style={styles.advancementPicker}
            />
          </View>
        </>
      )}

      {/* Per-level view — only levels that actually advance spellcasting
          per the class's atLevels spec get a row. Skip levels render nothing. */}
      {(showPerLevel || (!allSameSingle && !allSameBoth)) && (
        <View style={styles.perLevelList}>
          {adv.perLevel.map((p, i) => {
            if (!isAdvancingLevel(i + 1)) return null;
            return adv.mode === 'single' ? (
              <View key={i} style={styles.advancementRow}>
                <Text style={[styles.perLevelLabel, { color: colors.text.tertiary }]}>
                  Lvl {i + 1}
                </Text>
                <InlinePicker
                  value={(p as { baseClassEntryId: string }).baseClassEntryId}
                  options={[{ label: '—— pick one ——', value: '' }, ...toOptions(eligibleAny)]}
                  onValueChange={(v) => setLevelSingle(i, v)}
                  style={styles.advancementPicker}
                />
              </View>
            ) : (
              <View key={i} style={styles.advancementRow}>
                <Text style={[styles.perLevelLabel, { color: colors.text.tertiary }]}>
                  Lvl {i + 1}
                </Text>
                <InlinePicker
                  value={
                    (p as { arcaneBaseClassEntryId: string; divineBaseClassEntryId: string })
                      .arcaneBaseClassEntryId
                  }
                  options={[{ label: 'arcane ——', value: '' }, ...toOptions(eligibleArcane)]}
                  onValueChange={(v) => setLevelBoth(i, 'arcaneBaseClassEntryId', v)}
                  style={styles.advancementPicker}
                />
                <InlinePicker
                  value={
                    (p as { arcaneBaseClassEntryId: string; divineBaseClassEntryId: string })
                      .divineBaseClassEntryId
                  }
                  options={[{ label: 'divine ——', value: '' }, ...toOptions(eligibleDivine)]}
                  onValueChange={(v) => setLevelBoth(i, 'divineBaseClassEntryId', v)}
                  style={styles.advancementPicker}
                />
              </View>
            );
          })}
        </View>
      )}

      {/* Toggle per-level view (only meaningful if all-same is possible) */}
      {(allSameSingle || allSameBoth) && (
        <Pressable
          onPress={() => setShowPerLevel((v) => !v)}
          style={styles.perLevelToggle}
          accessibilityRole="button"
        >
          <Text
            style={[styles.perLevelToggleText, { color: isDark ? fantasy.gold : fantasy.bronze }]}
          >
            {showPerLevel ? '▾ Collapse to single picker' : '▸ Customize per level'}
          </Text>
        </Pressable>
      )}
    </View>
  );
}

// ---- Main card ----

interface ClassEntryCardProps {
  entry: ClassEntry;
  /**
   * Optional drag affordance rendered at the start of the header. The parent
   * list supplies this (wrapped in its own gesture detector) so that only the
   * handle initiates a reorder — taps on the rest of the card behave normally.
   */
  dragHandle?: React.ReactNode;
}

export function ClassEntryCard({ entry, dragHandle }: ClassEntryCardProps) {
  const { colors, fantasy, isDark } = useTheme();
  const dispatch = useAppDispatch();
  const [choicesExpanded, setChoicesExpanded] = useState(false);
  const [archetypePickerOpen, setArchetypePickerOpen] = useState(false);
  const [splitOpen, setSplitOpen] = useState(false);
  const [splitFirstRun, setSplitFirstRun] = useState(1);
  const [definitions, setDefinitions] = useState<ClassChoiceDefinition[]>([]);
  // null = loaded (or still loading) without incident. A string is the reason the
  // read failed, which the card surfaces rather than rendering an empty section.
  const [definitionsError, setDefinitionsError] = useState<string | null>(null);
  const [definitionsAttempt, setDefinitionsAttempt] = useState(0);
  const [archetypeLoadedClass, setArchetypeLoadedClass] = useState<string | null>(null);
  const [archetypeExists, setArchetypeExists] = useState(false);
  const hasArchetypes = archetypeLoadedClass === entry.name ? archetypeExists : null;
  const characterDeity = useAppSelector((state) => state.characterEntry.character.info.deity);
  const allClasses = useAppSelector((state) => state.characterEntry.character.classes.classes);
  // Sibling rank among split cards sharing the same splitGroup (1-based), or 0 if not split
  const splitRank = entry.splitGroup
    ? allClasses
        .filter((c) => c.splitGroup === entry.splitGroup)
        .findIndex((c) => (c.id ?? c.name) === (entry.id ?? entry.name)) + 1
    : 0;
  const splitSiblingCount = entry.splitGroup
    ? allClasses.filter((c) => c.splitGroup === entry.splitGroup).length
    : 0;
  const favoredClassBonuses = useAppSelector(
    (state) => state.characterEntry.character.classes.favoredClassBonuses,
  );
  const classDataMap = useAppSelector(selectClassDataMap);
  const classData = lookupClassData(entry.name, classDataMap);
  const isBaseClass = (classData?.maxLevel ?? 20) === 20;

  useEffect(() => {
    let cancelled = false;
    GameDataService.getClassChoiceDefinitions(entry.name)
      .then((defs) => {
        if (cancelled) return;
        setDefinitions(defs);
        setDefinitionsError(null);
      })
      .catch((e) => {
        if (cancelled) return;
        console.error('Failed to load class choice definitions:', e);
        setDefinitions([]);
        setDefinitionsError(e instanceof Error ? e.message : String(e));
      });
    GameDataService.getArchetypesByClass(entry.name)
      .then((archetypes) => {
        if (!cancelled) {
          setArchetypeExists(archetypes.length > 0);
          setArchetypeLoadedClass(entry.name);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setArchetypeExists(false);
          setArchetypeLoadedClass(entry.name);
        }
      });
    return () => {
      cancelled = true;
    };
  }, [entry.name, definitionsAttempt]);

  const allSlots = definitions.flatMap((def) => deriveChoiceSlots(def, entry.level));
  const hasChoices = allSlots.length > 0;

  // Whether and how this class advances spellcasting is a class-data fact,
  // not a user choice. If the data says it advances, we auto-ensure a
  // matching spellcastingAdvancement exists on the draft entry.
  const advancesSpec = classDataMap.get(entry.name.toLowerCase())?.advancesSpellcasting;
  useEffect(() => {
    if (!advancesSpec) return;
    const current = entry.spellcastingAdvancement;
    if (current && current.mode === advancesSpec.mode && current.perLevel.length === entry.level) {
      return;
    }
    // Mode mismatch or length mismatch — reinitialize.
    dispatch(
      updateClassSpellcastingAdvancement({
        id: entry.id ?? entry.name,
        advancement: makeEmptyAdvancement(advancesSpec.mode, entry.level),
      }),
    );
  }, [advancesSpec, entry.id, entry.name, entry.level, entry.spellcastingAdvancement, dispatch]);

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
      {/* Header row */}
      <View style={styles.header}>
        {dragHandle}
        <Text style={[styles.className, { color: isDark ? fantasy.gold : fantasy.darkWood }]}>
          {entry.name}
        </Text>
        {splitSiblingCount > 0 && (
          <View
            style={[
              styles.splitBadge,
              { backgroundColor: isDark ? 'rgba(139,92,246,0.18)' : 'rgba(139,92,246,0.12)' },
            ]}
          >
            <Text style={[styles.splitBadgeText, { color: '#8B5CF6' }]}>{`Pt ${splitRank}`}</Text>
          </View>
        )}
        <SourceBadge source={entry.sourceSystem ?? 'pf1e'} />
        <Pressable
          onPress={() => dispatch(removeClass(entry.id ?? entry.name))}
          hitSlop={8}
          accessibilityRole="button"
          accessibilityLabel={`Remove ${entry.name}`}
          style={styles.removeButton}
        >
          <Text style={[styles.removeIcon, { color: colors.text.tertiary }]}>✕</Text>
        </Pressable>
      </View>

      {/* Level + Archetype row */}
      <View style={styles.row}>
        <Text style={[styles.fieldLabel, { color: colors.text.secondary }]}>Level</Text>
        <TextInput
          value={String(entry.level)}
          onChangeText={(t) => {
            const n = parseInt(t, 10);
            const max = classData?.maxLevel ?? 20;
            if (!isNaN(n) && n >= 1 && n <= max)
              dispatch(updateClassLevel({ id: entry.id ?? entry.name, level: n }));
          }}
          keyboardType="number-pad"
          selectTextOnFocus
          style={[
            styles.levelInput,
            {
              color: colors.text.primary,
              borderColor: colors.border.DEFAULT,
              backgroundColor: isDark ? colors.bg.tertiary : colors.bg.secondary,
            },
          ]}
          accessibilityLabel="Class level"
        />
        {classData?.maxLevel !== undefined && classData.maxLevel < 20 && (
          <Text style={[styles.fieldLabel, { color: colors.text.tertiary }]}>
            {`/ ${classData.maxLevel}`}
          </Text>
        )}
        {entry.level > 1 && !splitOpen && (
          <Pressable
            onPress={() => {
              setSplitFirstRun(Math.floor(entry.level / 2));
              setSplitOpen(true);
            }}
            hitSlop={8}
            accessibilityRole="button"
            accessibilityLabel="Split class into two runs"
          >
            <Text style={[styles.splitLink, { color: colors.text.tertiary }]}>⤢ Split</Text>
          </Pressable>
        )}
        {hasArchetypes !== false && (
          <Pressable
            onPress={() => setArchetypePickerOpen(true)}
            disabled={hasArchetypes === null}
            style={styles.archetypeButton}
            accessibilityRole="button"
            accessibilityLabel="Choose archetype"
          >
            <Text style={[styles.fieldLabel, { color: colors.text.secondary }]}>Archetype</Text>
            <Text
              style={[
                styles.archetypePlaceholder,
                { color: entry.archetypeName ? colors.text.primary : colors.text.tertiary },
              ]}
            >
              {hasArchetypes === null ? '…' : (entry.archetypeName ?? 'none 🔍')}
            </Text>
          </Pressable>
        )}
      </View>

      {/* Inline split UI */}
      {splitOpen && (
        <View
          style={[
            styles.splitPanel,
            {
              backgroundColor: isDark ? 'rgba(139,92,246,0.08)' : 'rgba(139,92,246,0.05)',
              borderColor: '#8B5CF6',
            },
          ]}
        >
          <Text style={[styles.splitLabel, { color: colors.text.secondary }]}>
            {`Split ${entry.name} (${entry.level} levels)`}
          </Text>
          <View style={styles.splitRow}>
            <Text style={[styles.splitPartLabel, { color: colors.text.tertiary }]}>Run 1</Text>
            <Pressable
              onPress={() => setSplitFirstRun((n) => Math.max(1, n - 1))}
              hitSlop={8}
              style={[styles.splitStepper, { borderColor: colors.border.DEFAULT }]}
            >
              <Text style={[styles.splitStepperText, { color: colors.text.primary }]}>−</Text>
            </Pressable>
            <Text style={[styles.splitCount, { color: isDark ? fantasy.gold : fantasy.darkWood }]}>
              {splitFirstRun}
            </Text>
            <Pressable
              onPress={() => setSplitFirstRun((n) => Math.min(entry.level - 1, n + 1))}
              hitSlop={8}
              style={[styles.splitStepper, { borderColor: colors.border.DEFAULT }]}
            >
              <Text style={[styles.splitStepperText, { color: colors.text.primary }]}>+</Text>
            </Pressable>
            <Text style={[styles.splitPartLabel, { color: colors.text.tertiary }]}>
              {'  /  Run 2'}
            </Text>
            <Text style={[styles.splitCount, { color: isDark ? fantasy.gold : fantasy.darkWood }]}>
              {entry.level - splitFirstRun}
            </Text>
          </View>
          <View style={styles.splitActions}>
            <Pressable
              onPress={() => setSplitOpen(false)}
              style={[styles.splitCancel, { borderColor: colors.border.DEFAULT }]}
            >
              <Text style={[styles.splitCancelText, { color: colors.text.tertiary }]}>Cancel</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                const newId = Math.random().toString(36).slice(2) + Date.now().toString(36);
                dispatch(
                  splitClass({
                    classId: entry.id ?? entry.name,
                    firstRunLevel: splitFirstRun,
                    newEntryId: newId,
                  }),
                );
                setSplitOpen(false);
              }}
              style={[styles.splitConfirm, { backgroundColor: isDark ? '#8B5CF6' : '#7C3AED' }]}
            >
              <Text style={styles.splitConfirmText}>Split</Text>
            </Pressable>
          </View>
        </View>
      )}

      <ArchetypePickerSheet
        visible={archetypePickerOpen}
        title={`${entry.name} — Choose Archetype`}
        className={entry.name}
        onSelect={({ archetypeId, archetypeName }) => {
          dispatch(
            updateClassArchetype({ id: entry.id ?? entry.name, archetypeId, archetypeName }),
          );
          setArchetypePickerOpen(false);
        }}
        onClose={() => setArchetypePickerOpen(false)}
      />

      {/* Spellcasting advancement — rendered only when class data signals
          this class is a prestige advancer. No user toggle. */}
      {advancesSpec && <AdvancementControls entry={entry} />}

      {/* Favored class — only base classes (maxLevel 20) can be favored */}
      {isBaseClass && (
        <Pressable
          onPress={() => dispatch(toggleFavoredClass(entry.id ?? entry.name))}
          style={[
            styles.row,
            { borderTopColor: colors.border.DEFAULT, borderTopWidth: StyleSheet.hairlineWidth },
          ]}
          accessibilityRole="checkbox"
          accessibilityState={{ checked: !!entry.isFavoredClass }}
          accessibilityLabel="Favored class"
        >
          <View
            style={[
              styles.checkbox,
              {
                borderColor: entry.isFavoredClass ? fantasy.gold : colors.border.DEFAULT,
                backgroundColor: entry.isFavoredClass
                  ? isDark
                    ? 'rgba(212,175,55,0.2)'
                    : 'rgba(140,90,40,0.1)'
                  : 'transparent',
              },
            ]}
          >
            {entry.isFavoredClass && (
              <Text style={[styles.checkmark, { color: fantasy.gold }]}>✓</Text>
            )}
          </View>
          <Text style={[styles.fieldLabel, { color: colors.text.secondary }]}>Favored class</Text>
        </Pressable>
      )}

      {definitionsError !== null && (
        <ClassChoicesUnavailable
          className={entry.name}
          message={definitionsError}
          onRetry={() => setDefinitionsAttempt((n) => n + 1)}
        />
      )}

      {isBaseClass && entry.isFavoredClass && <FavoredClassBonusSection entry={entry} />}

      {/* Eidolon sub-sheet — rendered above class choices for Summoner entries */}
      {SUMMONER_CLASS_RE.test(entry.name) && <EidolonSection classEntry={entry} />}

      {/* Class choices */}
      {hasChoices && (
        <View>
          <Pressable
            onPress={() => setChoicesExpanded((v) => !v)}
            style={[styles.choicesHeader, { borderTopColor: colors.border.DEFAULT }]}
            accessibilityRole="button"
            accessibilityLabel={choicesExpanded ? 'Collapse class choices' : 'Expand class choices'}
          >
            <Text style={[styles.choicesLabel, { color: colors.text.secondary }]}>
              {choicesExpanded ? '▾' : '▸'} Class Choices
            </Text>
            <Text style={[styles.choicesCount, { color: colors.text.tertiary }]}>
              {allSlots.length} choice{allSlots.length !== 1 ? 's' : ''}
            </Text>
          </Pressable>

          {choicesExpanded && (
            <View style={styles.choicesList}>
              {allSlots.map((slot) => {
                const choices = entry.classChoices ?? [];
                const existingChoices = choices.filter(
                  (c) => c.featureName === slot.definition.featureName,
                );
                const currentChoice = existingChoices[slot.choiceIndex];
                return (
                  <ClassChoiceRow
                    key={`${slot.definition.id}-${slot.choiceIndex}`}
                    classId={entry.id ?? entry.name}
                    definition={slot.definition}
                    choiceIndex={slot.choiceIndex}
                    currentChoice={currentChoice}
                    takenAtLevel={slot.takenAtLevel}
                    featureLabel={slot.featureLabel}
                    siblingChoices={choices}
                    disabled={isMutuallyExcludedFilled(slot.definition.featureName, choices)}
                    characterDeity={characterDeity}
                  />
                );
              })}
            </View>
          )}
        </View>
      )}

      <CompanionStackingRow entry={entry} />
      <CompanionSection entry={entry} />

      {/* Prereq status */}
      <View style={[styles.prereqRow, { borderTopColor: colors.border.DEFAULT }]}>
        <Pressable
          onPress={() => dispatch(toggleClassPrereqOverride(entry.id ?? entry.name))}
          style={styles.prereqOverride}
          accessibilityRole="checkbox"
          accessibilityState={{ checked: entry.prereqOverride }}
        >
          <View
            style={[
              styles.checkbox,
              {
                borderColor: entry.prereqOverride ? '#10B981' : colors.border.DEFAULT,
                backgroundColor: entry.prereqOverride ? 'rgba(16,185,129,0.15)' : 'transparent',
              },
            ]}
          >
            {entry.prereqOverride && (
              <Text style={[styles.checkmark, { color: '#10B981' }]}>✓</Text>
            )}
          </View>
          <Text
            style={[
              styles.prereqLabel,
              { color: entry.prereqOverride ? '#10B981' : colors.text.tertiary },
            ]}
          >
            {entry.prereqOverride ? 'Prereqs: trust player' : 'Prereqs: not checked'}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

// ---- Companion section ------------------------------------------------------
//
// ---- CompanionStackingRow ---------------------------------------------------
// Shown for classes that don't grant their own companion but whose rules say
// their levels stack with another class for animal companion progression (e.g.
// Nature Warden "stacks with all other AC classes"; Mammoth Rider "stacks with
// druid levels"). Hidden for classes that already have a built-in companion
// formula and for characters with no companions at all.

function CompanionStackingRow({ entry }: { entry: ClassEntry }) {
  const { colors, fantasy, isDark } = useTheme();
  const dispatch = useAppDispatch();

  const allClasses = useAppSelector((state) => state.characterEntry.character.classes.classes);
  const companions = useAppSelector((state) => state.characterEntry.character.companions);

  // Only show for classes that have no built-in companion formula.
  const hasOwnFormula = effectiveLevelFromDraftClass(entry) > 0;
  // Only show when the character has at least one class-granted companion.
  const companionGrantingClasses = allClasses.filter(
    (c) => (c.id ?? c.name) !== (entry.id ?? entry.name) && effectiveLevelFromDraftClass(c) > 0,
  );
  const characterHasCompanions = companions.some((c) => c.grantedBy.type === 'class');

  if (hasOwnFormula || !characterHasCompanions || companionGrantingClasses.length === 0) {
    return null;
  }

  const current = entry.advancesCompanionOf;

  const options = [
    { label: 'None — does not advance companions', value: '' },
    { label: 'All animal companions', value: 'all' },
    ...companionGrantingClasses.map((c) => ({
      label: `${c.name}${c.archetypeName ? ` (${c.archetypeName})` : ''} companion`,
      value: c.id ?? c.name,
    })),
  ];

  return (
    <View style={[stackStyles.row, { borderTopColor: colors.border.DEFAULT }]}>
      <Text style={[stackStyles.label, { color: colors.text.secondary }]}>Companion Stacking</Text>
      <InlinePicker
        options={options}
        value={current ?? ''}
        onValueChange={(val: string) =>
          dispatch(
            setAdvancesCompanionOf({
              id: entry.id ?? entry.name,
              advancesCompanionOf: val === '' ? undefined : (val as 'all' | string),
            }),
          )
        }
        placeholder="None"
      />
    </View>
  );
}

const stackStyles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderTopWidth: StyleSheet.hairlineWidth,
    gap: 8,
  },
  label: {
    fontFamily: 'LibreBaskerville',
    fontSize: 12,
    width: 120,
    flexShrink: 0,
  },
});

// ---- CompanionSection -------------------------------------------------------
// Renders CompanionCards for every companion granted by this class, plus an
// "+ Add Companion" button for granting sources that may have multiple
// (Beastmaster Ranger). Single-companion sources get the card created via the
// class-choice intercept in ClassChoiceRow; this section just displays them.

interface CompanionSectionProps {
  entry: ClassEntry;
}

function CompanionSection({ entry }: CompanionSectionProps) {
  const { fantasy, isDark } = useTheme();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [addPickerOpen, setAddPickerOpen] = useState(false);
  const [companionEntryById, setCompanionEntryById] = useState<Map<string, AnimalCompanionEntry>>(
    new Map(),
  );

  // The companion builder route includes the character ID segment; for an
  // unsaved draft we use `draft` as a stable placeholder (the screen reads
  // from draft state anyway).
  const originalCharacterId = useAppSelector((state) => state.characterEntry.originalCharacterId);
  const routeCharacterId = originalCharacterId ?? 'draft';

  const allClasses = useAppSelector((state) => state.characterEntry.character.classes.classes);

  const grantedCompanions = useAppSelector(
    (state) =>
      state.characterEntry.character.companions.filter(
        (c) => c.grantedBy.type === 'class' && c.grantedBy.classEntryId === entry.id,
      ),
    shallowEqual,
  );

  const supportsMultiple = classSupportsMultipleCompanions(entry);

  useEffect(() => {
    if (grantedCompanions.length === 0 && !supportsMultiple) return;
    let cancelled = false;
    GameDataService.getAnimalCompanions()
      .then((companions) => {
        if (!cancelled) {
          const map = new Map<string, AnimalCompanionEntry>();
          for (const ac of companions) map.set(ac.id, ac);
          setCompanionEntryById(map);
        }
      })
      .catch((e) => console.error('Failed to load animal companions:', e));
    return () => {
      cancelled = true;
    };
  }, [grantedCompanions.length, supportsMultiple]);
  const grantedByLabel = entry.archetypeName
    ? `${entry.name} (${entry.archetypeName})`
    : entry.name;

  const handleAddCompanion = (ac: AnimalCompanionEntry) => {
    // The "+ Add" button on Beastmaster-style multi-grant classes uses the
    // animal_companion class choice as the nominal classChoiceId, matching
    // the single-companion flow.
    dispatch(
      addCompanion({
        instanceId: makeCompanionInstanceId(),
        sourceEntryId: ac.id,
        name: ac.name,
        grantedBy: {
          type: 'class',
          classEntryId: entry.id ?? entry.name,
          className: entry.name,
          classChoiceId: 'animal_companion',
        },
        effectiveProgressionLevel: computeCompanionEffectiveLevel(entry, allClasses),
      }),
    );
    setAddPickerOpen(false);
  };

  if (grantedCompanions.length === 0 && !supportsMultiple) return null;

  return (
    <View>
      {grantedCompanions.map((comp) => (
        <CompanionCard
          key={comp.instanceId}
          companion={comp}
          entry={companionEntryById.get(comp.sourceEntryId)}
          grantedByLabel={grantedByLabel}
          onRemove={() => dispatch(removeCompanion(comp.instanceId))}
          onEdit={() =>
            router.push(`/characters/${routeCharacterId}/companions/${comp.instanceId}`)
          }
        />
      ))}

      {supportsMultiple && (
        <Pressable
          onPress={() => setAddPickerOpen(true)}
          style={[styles.addCompanionBtn, { borderColor: isDark ? fantasy.gold : fantasy.bronze }]}
          accessibilityRole="button"
          accessibilityLabel="Add another companion"
        >
          <Text
            style={[styles.addCompanionText, { color: isDark ? fantasy.gold : fantasy.darkWood }]}
          >
            + Add Companion
          </Text>
        </Pressable>
      )}

      <CompanionPickerSheet
        visible={addPickerOpen}
        title="Choose Companion"
        pickerFilter={pickerFilterFromDraftClass(entry)}
        onSelect={handleAddCompanion}
        onClose={() => setAddPickerOpen(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    borderWidth: 1,
    overflow: 'hidden',
    marginBottom: 12,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
    gap: 8,
  },
  className: {
    flex: 1,
    fontFamily: 'Cinzel',
    fontSize: 16,
    fontWeight: '700',
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4,
  },
  badgeText: {
    fontFamily: 'Cinzel',
    fontSize: 10,
    fontWeight: '700',
  },
  removeButton: {
    padding: 4,
  },
  removeIcon: {
    fontSize: 16,
    fontWeight: '700',
  },
  splitBadge: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  splitBadgeText: {
    fontFamily: 'Cinzel',
    fontSize: 8,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  splitLink: {
    fontFamily: 'LibreBaskerville',
    fontSize: 11,
    textDecorationLine: 'underline',
  },
  splitPanel: {
    marginHorizontal: 12,
    marginBottom: 8,
    borderRadius: 8,
    borderWidth: 1,
    padding: 10,
    gap: 8,
  },
  splitLabel: {
    fontFamily: 'Cinzel',
    fontSize: 11,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  splitRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  splitPartLabel: {
    fontFamily: 'LibreBaskerville',
    fontSize: 12,
  },
  splitStepper: {
    width: 28,
    height: 28,
    borderRadius: 6,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  splitStepperText: {
    fontFamily: 'LibreBaskerville',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 20,
  },
  splitCount: {
    fontFamily: 'Cinzel',
    fontSize: 18,
    fontWeight: '700',
    minWidth: 28,
    textAlign: 'center',
  },
  splitActions: {
    flexDirection: 'row',
    gap: 8,
  },
  splitCancel: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 6,
    paddingVertical: 8,
    alignItems: 'center',
  },
  splitCancelText: {
    fontFamily: 'LibreBaskerville',
    fontSize: 13,
  },
  splitConfirm: {
    flex: 1,
    borderRadius: 6,
    paddingVertical: 8,
    alignItems: 'center',
  },
  splitConfirmText: {
    fontFamily: 'Cinzel',
    fontSize: 13,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    gap: 8,
  },
  fieldLabel: {
    fontFamily: 'LibreBaskerville',
    fontSize: 13,
  },
  levelInput: {
    fontFamily: 'LibreBaskerville',
    fontSize: 16,
    fontWeight: '700',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 6,
    width: 52,
    textAlign: 'center',
    minHeight: 38,
  },
  archetypeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    gap: 8,
  },
  archetypePlaceholder: {
    fontFamily: 'LibreBaskerville',
    fontSize: 13,
    fontStyle: 'italic',
    flex: 1,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkmark: {
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 14,
  },
  advancementPicker: {
    flex: 1,
    marginBottom: 0,
  },
  advancementPanel: {
    paddingHorizontal: 12,
    paddingBottom: 8,
    gap: 4,
  },
  advancementRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  advancementHint: {
    fontFamily: 'LibreBaskerville',
    fontSize: 12,
    fontStyle: 'italic',
    flex: 1,
  },
  perLevelLabel: {
    fontFamily: 'Cinzel',
    fontSize: 11,
    fontWeight: '700',
    width: 48,
  },
  perLevelList: {
    gap: 4,
  },
  perLevelToggle: {
    paddingVertical: 4,
  },
  perLevelToggleText: {
    fontFamily: 'LibreBaskerville',
    fontSize: 12,
    fontStyle: 'italic',
  },
  choicesHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderTopWidth: StyleSheet.hairlineWidth,
    gap: 8,
  },
  choicesLabel: {
    flex: 1,
    fontFamily: 'LibreBaskerville',
    fontSize: 13,
    fontWeight: '600',
  },
  choicesCount: {
    fontFamily: 'LibreBaskerville',
    fontSize: 12,
  },
  choicesList: {
    paddingHorizontal: 12,
    paddingBottom: 4,
  },
  prereqRow: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  prereqOverride: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  prereqLabel: {
    fontFamily: 'LibreBaskerville',
    fontSize: 12,
    fontStyle: 'italic',
  },
  addCompanionBtn: {
    marginTop: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 8,
    alignItems: 'center',
  },
  addCompanionText: {
    fontFamily: 'Cinzel',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
});
