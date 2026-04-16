import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { InlinePicker } from '@/components/ui/InlinePicker';
import { ClassChoiceRow } from './ClassChoiceRow';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  removeClass,
  updateClassLevel,
  updateClassSpellcastingAdvancement,
  toggleClassPrereqOverride,
} from '@/store/slices/characterEntrySlice';
import { type DraftClassEntry } from '@/types/characterDraft';
import { GameDataService } from '@/services/GameDataService';
import { type ClassChoiceDefinition } from '@/types/classChoices';
import { type ClassChoice } from '@/types/classes';

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

// ---- Main card ----

const SPELLCASTING_ADVANCEMENT_OPTIONS = [
  { label: 'Divine', value: 'divine' },
  { label: 'Arcane', value: 'arcane' },
  { label: 'Both', value: 'both' },
  { label: 'Highest', value: 'highest' },
  { label: 'Chosen', value: 'chosen' },
];

interface ClassEntryCardProps {
  entry: DraftClassEntry;
}

export function ClassEntryCard({ entry }: ClassEntryCardProps) {
  const { colors, fantasy, isDark } = useTheme();
  const dispatch = useAppDispatch();
  const [choicesExpanded, setChoicesExpanded] = useState(false);
  const [definitions, setDefinitions] = useState<ClassChoiceDefinition[]>([]);
  const characterDeity = useAppSelector((state) => state.characterEntry.draft.deity);

  useEffect(() => {
    GameDataService.getClassChoiceDefinitions(entry.className)
      .then(setDefinitions)
      .catch((e) => console.error('Failed to load class choice definitions:', e));
  }, [entry.className]);

  const allSlots = definitions.flatMap((def) => deriveChoiceSlots(def, entry.level));
  const hasChoices = allSlots.length > 0;

  const advancesSpellcasting = !!entry.spellcastingAdvancement;

  const toggleSpellcasting = () => {
    if (advancesSpellcasting) {
      dispatch(updateClassSpellcastingAdvancement({ id: entry.id, advancement: undefined }));
    } else {
      dispatch(
        updateClassSpellcastingAdvancement({
          id: entry.id,
          advancement: { type: 'divine' },
        }),
      );
    }
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
        <Text style={[styles.fieldLabel, { color: colors.text.secondary, marginLeft: 12 }]}>
          Archetype
        </Text>
        <Text style={[styles.archetypePlaceholder, { color: colors.text.tertiary }]}>
          {entry.archetypeName ?? 'none 🔍'}
        </Text>
      </View>

      {/* Spellcasting advancement */}
      <Pressable
        onPress={toggleSpellcasting}
        style={styles.row}
        accessibilityRole="checkbox"
        accessibilityState={{ checked: advancesSpellcasting }}
        accessibilityLabel="Advances spellcasting"
      >
        <View
          style={[
            styles.checkbox,
            {
              borderColor: advancesSpellcasting ? fantasy.gold : colors.border.DEFAULT,
              backgroundColor: advancesSpellcasting
                ? isDark
                  ? 'rgba(212,175,55,0.2)'
                  : 'rgba(140,90,40,0.1)'
                : 'transparent',
            },
          ]}
        >
          {advancesSpellcasting && (
            <Text style={[styles.checkmark, { color: fantasy.gold }]}>✓</Text>
          )}
        </View>
        <Text style={[styles.fieldLabel, { color: colors.text.secondary }]}>
          Advances spellcasting
        </Text>
        {advancesSpellcasting && (
          <InlinePicker
            value={entry.spellcastingAdvancement!.type}
            options={SPELLCASTING_ADVANCEMENT_OPTIONS}
            onValueChange={(v) =>
              dispatch(
                updateClassSpellcastingAdvancement({
                  id: entry.id,
                  advancement: {
                    type: v as DraftClassEntry['spellcastingAdvancement'] extends
                      | { type: infer T }
                      | undefined
                      ? T
                      : never,
                  },
                }),
              )
            }
            style={styles.advancementPicker}
          />
        )}
      </Pressable>

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
});
