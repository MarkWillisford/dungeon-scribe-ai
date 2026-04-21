import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { InlinePicker } from '@/components/ui/InlinePicker';
import { ClassChoiceRow } from './ClassChoiceRow';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  removeClass,
  updateClassLevel,
  updateClassArchetype,
  updateClassSpellcastingAdvancement,
  toggleClassPrereqOverride,
  toggleFavoredClass,
  setFavoredClassBonuses,
} from '@/store/slices/characterEntrySlice';
import { type DraftClassEntry, type SpellcastingAdvancement } from '@/types/characterDraft';
import { GameDataService } from '@/services/GameDataService';
import { selectClassDataMap } from '@/store/slices/gameDataSlice';
import { lookupClassData } from '@/utils/characterComputations';
import { type ClassChoiceDefinition } from '@/types/classChoices';
import { type ClassChoice } from '@/types/classes';
import { selectClassDataMap } from '@/store/slices/gameDataSlice';
import { ArchetypePickerSheet } from './ArchetypePickerSheet';

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

function AdvancementControls({ entry }: { entry: DraftClassEntry }) {
  const { colors, fantasy, isDark } = useTheme();
  const dispatch = useAppDispatch();
  const classes = useAppSelector((state) => state.characterEntry.draft.classes);
  const classDataMap = useAppSelector(selectClassDataMap);
  const [showPerLevel, setShowPerLevel] = useState(false);

  const adv = entry.spellcastingAdvancement;
  if (!adv) return null;

  const spec = classDataMap.get(entry.className.toLowerCase())?.advancesSpellcasting;
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
    if (!isBaseCaster(c.className)) return false;
    return traditionOk(c.className);
  });
  const eligibleArcane = classes.filter(
    (c, idx) =>
      c.id !== entry.id &&
      idx < entryIndex &&
      isBaseCaster(c.className) &&
      getTradition(c.className) === 'arcane',
  );
  const eligibleDivine = classes.filter(
    (c, idx) =>
      c.id !== entry.id &&
      idx < entryIndex &&
      isBaseCaster(c.className) &&
      getTradition(c.className) === 'divine',
  );

  const setAllSingle = (targetId: string) => {
    dispatch(
      updateClassSpellcastingAdvancement({
        id: entry.id,
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
        id: entry.id,
        advancement: { mode: 'both', perLevel: next },
      }),
    );
  };

  const setLevelSingle = (levelIdx: number, targetId: string) => {
    if (adv.mode !== 'single') return;
    const next = adv.perLevel.map((p, i) => (i === levelIdx ? { baseClassEntryId: targetId } : p));
    dispatch(
      updateClassSpellcastingAdvancement({
        id: entry.id,
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
        id: entry.id,
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
    arr.map((c) => ({ label: `${c.className} ${c.level}`, value: c.id }));

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
  entry: DraftClassEntry;
}

export function ClassEntryCard({ entry }: ClassEntryCardProps) {
  const { colors, fantasy, isDark } = useTheme();
  const dispatch = useAppDispatch();
  const [choicesExpanded, setChoicesExpanded] = useState(false);
  const [archetypePickerOpen, setArchetypePickerOpen] = useState(false);
  const [definitions, setDefinitions] = useState<ClassChoiceDefinition[]>([]);
  const [archetypeLoadedClass, setArchetypeLoadedClass] = useState<string | null>(null);
  const [archetypeExists, setArchetypeExists] = useState(false);
  const hasArchetypes = archetypeLoadedClass === entry.className ? archetypeExists : null;
  const characterDeity = useAppSelector((state) => state.characterEntry.draft.deity);
  const classDataMap = useAppSelector(selectClassDataMap);
  const classData = lookupClassData(entry.className, classDataMap);
  const isBaseClass = (classData?.maxLevel ?? 20) === 20;

  useEffect(() => {
    GameDataService.getClassChoiceDefinitions(entry.className)
      .then(setDefinitions)
      .catch((e) => console.error('Failed to load class choice definitions:', e));
    let cancelled = false;
    GameDataService.getArchetypesByClass(entry.className)
      .then((archetypes) => {
        if (!cancelled) {
          setArchetypeExists(archetypes.length > 0);
          setArchetypeLoadedClass(entry.className);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setArchetypeExists(false);
          setArchetypeLoadedClass(entry.className);
        }
      });
    return () => {
      cancelled = true;
    };
  }, [entry.className]);

  const allSlots = definitions.flatMap((def) => deriveChoiceSlots(def, entry.level));
  const hasChoices = allSlots.length > 0;

  // Whether and how this class advances spellcasting is a class-data fact,
  // not a user choice. If the data says it advances, we auto-ensure a
  // matching spellcastingAdvancement exists on the draft entry.
  const advancesSpec = classDataMap.get(entry.className.toLowerCase())?.advancesSpellcasting;
  useEffect(() => {
    if (!advancesSpec) return;
    const current = entry.spellcastingAdvancement;
    if (current && current.mode === advancesSpec.mode && current.perLevel.length === entry.level) {
      return;
    }
    // Mode mismatch or length mismatch — reinitialize.
    dispatch(
      updateClassSpellcastingAdvancement({
        id: entry.id,
        advancement: makeEmptyAdvancement(advancesSpec.mode, entry.level),
      }),
    );
  }, [advancesSpec, entry.id, entry.level, entry.spellcastingAdvancement, dispatch]);

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
        <Text style={[styles.className, { color: isDark ? fantasy.gold : fantasy.darkWood }]}>
          {entry.className}
        </Text>
        <SourceBadge source={entry.sourceSystem} />
        <Pressable
          onPress={() => dispatch(removeClass(entry.id))}
          hitSlop={8}
          accessibilityRole="button"
          accessibilityLabel={`Remove ${entry.className}`}
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
            if (!isNaN(n) && n >= 1) dispatch(updateClassLevel({ id: entry.id, level: n }));
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

      <ArchetypePickerSheet
        visible={archetypePickerOpen}
        title={`${entry.className} — Choose Archetype`}
        className={entry.className}
        onSelect={({ archetypeId, archetypeName }) => {
          dispatch(updateClassArchetype({ id: entry.id, archetypeId, archetypeName }));
          setArchetypePickerOpen(false);
        }}
        onClose={() => setArchetypePickerOpen(false)}
      />

      {/* Spellcasting advancement — rendered only when class data signals
          this class is a prestige advancer. No user toggle. */}
      {advancesSpec && <AdvancementControls entry={entry} />}

      {/* Favored class — only base classes (maxLevel 20) can be favored */}
      {isBaseClass && <Pressable
        onPress={() => dispatch(toggleFavoredClass(entry.id))}
        style={[styles.row, { borderTopColor: colors.border.DEFAULT, borderTopWidth: StyleSheet.hairlineWidth }]}
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
      </Pressable>}

      {isBaseClass && entry.isFavoredClass && (
        <View style={[styles.favoredBonusRow, { borderTopColor: colors.border.DEFAULT }]}>
          <Text style={[styles.favoredBonusLabel, { color: colors.text.secondary }]}>
            Bonuses:
          </Text>
          {(['hp', 'skillRank'] as const).map((field) => {
            const hp = entry.favoredClassBonuses?.hp ?? 0;
            const skillRank = entry.favoredClassBonuses?.skillRank ?? 0;
            const value = field === 'hp' ? hp : skillRank;
            const allocated = hp + skillRank;
            const canInc = allocated < entry.level;
            const canDec = value > 0;
            const label = field === 'hp' ? 'HP' : 'Skill';
            return (
              <View key={field} style={styles.bonusStepper}>
                <Text style={[styles.bonusStepperLabel, { color: colors.text.tertiary }]}>
                  {label}
                </Text>
                <View style={styles.bonusStepperRow}>
                  <Pressable
                    onPress={() =>
                      dispatch(setFavoredClassBonuses({
                        id: entry.id,
                        hp: field === 'hp' ? hp - 1 : hp,
                        skillRank: field === 'skillRank' ? skillRank - 1 : skillRank,
                      }))
                    }
                    disabled={!canDec}
                    style={[
                      styles.stepperBtn,
                      {
                        borderColor: colors.border.DEFAULT,
                        backgroundColor: isDark ? colors.bg.tertiary : colors.bg.secondary,
                        opacity: canDec ? 1 : 0.3,
                      },
                    ]}
                    accessibilityLabel={`Decrease ${label} favored class bonus`}
                  >
                    <Text style={[styles.stepperBtnText, { color: colors.text.primary }]}>−</Text>
                  </Pressable>
                  <Text style={[styles.stepperValue, { color: colors.text.primary }]}>
                    {value}
                  </Text>
                  <Pressable
                    onPress={() =>
                      dispatch(setFavoredClassBonuses({
                        id: entry.id,
                        hp: field === 'hp' ? hp + 1 : hp,
                        skillRank: field === 'skillRank' ? skillRank + 1 : skillRank,
                      }))
                    }
                    disabled={!canInc}
                    style={[
                      styles.stepperBtn,
                      {
                        borderColor: canInc
                          ? isDark ? fantasy.gold : fantasy.bronze
                          : colors.border.DEFAULT,
                        backgroundColor: isDark ? colors.bg.tertiary : colors.bg.secondary,
                        opacity: canInc ? 1 : 0.3,
                      },
                    ]}
                    accessibilityLabel={`Increase ${label} favored class bonus`}
                  >
                    <Text
                      style={[
                        styles.stepperBtnText,
                        { color: canInc ? (isDark ? fantasy.gold : fantasy.darkWood) : colors.text.tertiary },
                      ]}
                    >
                      +
                    </Text>
                  </Pressable>
                </View>
              </View>
            );
          })}
          <Text style={[styles.bonusRemaining, { color: colors.text.tertiary }]}>
            {entry.level - (entry.favoredClassBonuses?.hp ?? 0) - (entry.favoredClassBonuses?.skillRank ?? 0)} left
          </Text>
        </View>
      )}

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
                const existingChoices = entry.classChoices.filter(
                  (c) => c.featureName === slot.definition.featureName,
                );
                const currentChoice = existingChoices[slot.choiceIndex];
                return (
                  <ClassChoiceRow
                    key={`${slot.definition.id}-${slot.choiceIndex}`}
                    classId={entry.id}
                    definition={slot.definition}
                    choiceIndex={slot.choiceIndex}
                    currentChoice={currentChoice}
                    takenAtLevel={slot.takenAtLevel}
                    featureLabel={slot.featureLabel}
                    siblingChoices={entry.classChoices}
                    disabled={isMutuallyExcludedFilled(
                      slot.definition.featureName,
                      entry.classChoices,
                    )}
                    characterDeity={characterDeity}
                  />
                );
              })}
            </View>
          )}
        </View>
      )}

      {/* Prereq status */}
      <View style={[styles.prereqRow, { borderTopColor: colors.border.DEFAULT }]}>
        <Pressable
          onPress={() => dispatch(toggleClassPrereqOverride(entry.id))}
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
  favoredBonusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    gap: 6,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  favoredBonusLabel: {
    fontFamily: 'LibreBaskerville',
    fontSize: 13,
    marginRight: 4,
  },
  bonusStepper: {
    alignItems: 'center',
    gap: 2,
  },
  bonusStepperLabel: {
    fontFamily: 'LibreBaskerville',
    fontSize: 11,
    fontWeight: '600',
  },
  bonusStepperRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  stepperBtn: {
    width: 28,
    height: 28,
    borderWidth: 1,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepperBtnText: {
    fontFamily: 'LibreBaskerville',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 20,
  },
  stepperValue: {
    fontFamily: 'LibreBaskerville',
    fontSize: 15,
    fontWeight: '700',
    minWidth: 24,
    textAlign: 'center',
  },
  bonusRemaining: {
    fontFamily: 'LibreBaskerville',
    fontSize: 11,
    marginLeft: 4,
    alignSelf: 'flex-end',
    paddingBottom: 2,
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
});
