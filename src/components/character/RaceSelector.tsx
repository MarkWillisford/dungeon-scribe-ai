import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet, ScrollView } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { OrnatePanel } from '@/components/ui/OrnatePanel';
import { FantasyDivider } from '@/components/ui/FantasyDivider';
import {
  CORE_RACES,
  FEATURED_RACES,
  UNCOMMON_RACES,
  FLEXIBLE_ABILITY_RACES,
  type ExpandedRaceData,
} from '@/data/races';

interface RaceSelectorProps {
  selectedRace: ExpandedRaceData | null;
  onSelectRace: (race: ExpandedRaceData) => void;
  flexibleAbilityChoice?: string;
  onFlexibleAbilityChoice?: (ability: string) => void;
  testID?: string;
}

const ABILITY_NAMES = [
  'strength',
  'dexterity',
  'constitution',
  'intelligence',
  'wisdom',
  'charisma',
];
const ABILITY_LABELS: Record<string, string> = {
  strength: 'STR',
  dexterity: 'DEX',
  constitution: 'CON',
  intelligence: 'INT',
  wisdom: 'WIS',
  charisma: 'CHA',
};

const RACE_SECTIONS = [
  { title: 'Core Races', data: CORE_RACES },
  { title: 'Featured Races', data: FEATURED_RACES },
  { title: 'Uncommon Races', data: UNCOMMON_RACES },
];

export function RaceSelector({
  selectedRace,
  onSelectRace,
  flexibleAbilityChoice,
  onFlexibleAbilityChoice,
  testID,
}: RaceSelectorProps) {
  const { colors, fantasy, isDark } = useTheme();
  const [expandedRace, setExpandedRace] = useState<string | null>(selectedRace?.name ?? null);

  const isFlexibleRace = selectedRace && FLEXIBLE_ABILITY_RACES.includes(selectedRace.name);

  const handleRacePress = (race: ExpandedRaceData) => {
    setExpandedRace(race.name === expandedRace ? null : race.name);
    onSelectRace(race);
  };

  const formatModifiers = (race: ExpandedRaceData) => {
    if (race.flexibleAbilityBonus) return '+2 to one ability of choice';
    const entries = Object.entries(race.abilityModifiers).filter(([, v]) => v !== undefined);
    if (entries.length === 0) return 'No modifiers';
    return entries
      .map(([key, val]) => `${ABILITY_LABELS[key]} ${val! > 0 ? '+' : ''}${val}`)
      .join(', ');
  };

  const renderRaceItem = (race: ExpandedRaceData) => {
    const isSelected = selectedRace?.name === race.name;
    const isExpanded = expandedRace === race.name;

    return (
      <Pressable
        key={race.name}
        onPress={() => handleRacePress(race)}
        accessibilityRole="radio"
        accessibilityLabel={race.name}
        accessibilityState={{ selected: isSelected }}
      >
        <View
          style={[
            styles.raceItem,
            {
              backgroundColor: isSelected
                ? colors.bg.tertiary
                : isDark
                  ? colors.bg.secondary
                  : colors.bg.primary,
              borderColor: isSelected ? fantasy.gold : colors.border.DEFAULT,
            },
          ]}
        >
          <View style={styles.raceHeader}>
            <Text style={[styles.raceName, { color: colors.text.primary }]}>{race.name}</Text>
            <Text style={[styles.raceModifiers, { color: colors.text.secondary }]}>
              {formatModifiers(race)}
            </Text>
          </View>

          {isExpanded && (
            <View style={styles.raceDetails}>
              <FantasyDivider />

              <Text style={[styles.detailLabel, { color: colors.text.tertiary }]}>
                Speed: {race.speed} ft. | Size: {race.size}
              </Text>

              {race.senses.length > 0 && (
                <Text style={[styles.detailLabel, { color: colors.text.tertiary }]}>
                  Senses: {race.senses.join(', ')}
                </Text>
              )}

              <Text
                style={[styles.sectionTitle, { color: isDark ? fantasy.gold : fantasy.darkWood }]}
              >
                Racial Traits
              </Text>
              {race.racialTraits.map((trait, idx) => (
                <View key={idx} style={styles.traitItem}>
                  <Text style={[styles.traitName, { color: colors.text.primary }]}>
                    {trait.name}
                  </Text>
                  <Text style={[styles.traitText, { color: colors.text.secondary }]}>
                    {trait.description}
                  </Text>
                </View>
              ))}

              <Text
                style={[styles.sectionTitle, { color: isDark ? fantasy.gold : fantasy.darkWood }]}
              >
                Languages
              </Text>
              <Text style={[styles.detailLabel, { color: colors.text.secondary }]}>
                {race.languages.join(', ')}
              </Text>
              {race.bonusLanguages.length > 0 && (
                <Text style={[styles.detailLabel, { color: colors.text.tertiary }]}>
                  Bonus: {race.bonusLanguages.join(', ')}
                </Text>
              )}
            </View>
          )}
        </View>
      </Pressable>
    );
  };

  return (
    <View testID={testID}>
      <ScrollView>
        {RACE_SECTIONS.map((section) => (
          <View key={section.title}>
            <Text
              style={[
                styles.sectionHeader,
                {
                  color: isDark ? fantasy.gold : fantasy.darkWood,
                  backgroundColor: isDark ? colors.bg.primary : colors.bg.secondary,
                },
              ]}
            >
              {section.title}
            </Text>
            {section.data.map((race) => renderRaceItem(race))}
          </View>
        ))}
      </ScrollView>

      {isFlexibleRace && onFlexibleAbilityChoice && (
        <OrnatePanel title={`${selectedRace.name} Ability Bonus`}>
          <Text style={[styles.flexibleLabel, { color: colors.text.secondary }]}>
            Choose one ability score to receive +2:
          </Text>
          <View style={styles.abilityGrid}>
            {ABILITY_NAMES.map((ability) => (
              <Pressable
                key={ability}
                onPress={() => onFlexibleAbilityChoice(ability)}
                accessibilityRole="radio"
                accessibilityLabel={`${ABILITY_LABELS[ability]} +2`}
                accessibilityState={{ selected: flexibleAbilityChoice === ability }}
              >
                <View
                  style={[
                    styles.abilityChip,
                    {
                      backgroundColor:
                        flexibleAbilityChoice === ability
                          ? fantasy.gold
                          : isDark
                            ? colors.bg.tertiary
                            : colors.bg.secondary,
                      borderColor:
                        flexibleAbilityChoice === ability ? fantasy.gold : colors.border.DEFAULT,
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.abilityChipText,
                      {
                        color: flexibleAbilityChoice === ability ? '#FFFFFF' : colors.text.primary,
                      },
                    ]}
                  >
                    {ABILITY_LABELS[ability]}
                  </Text>
                </View>
              </Pressable>
            ))}
          </View>
        </OrnatePanel>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  raceItem: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
  },
  raceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  raceName: {
    fontFamily: 'Cinzel',
    fontSize: 15,
    fontWeight: '700',
  },
  raceModifiers: {
    fontFamily: 'LibreBaskerville',
    fontSize: 12,
  },
  raceDetails: {
    marginTop: 4,
  },
  sectionHeader: {
    fontFamily: 'Cinzel',
    fontSize: 16,
    fontWeight: '700',
    paddingVertical: 8,
    paddingHorizontal: 4,
    marginTop: 12,
    marginBottom: 4,
  },
  sectionTitle: {
    fontFamily: 'Cinzel',
    fontSize: 12,
    fontWeight: '700',
    marginTop: 8,
    marginBottom: 4,
  },
  detailLabel: {
    fontFamily: 'LibreBaskerville',
    fontSize: 12,
    marginBottom: 2,
  },
  traitItem: {
    marginBottom: 6,
    paddingLeft: 8,
  },
  traitName: {
    fontFamily: 'Cinzel',
    fontSize: 11,
    fontWeight: '700',
  },
  traitText: {
    fontFamily: 'LibreBaskerville',
    fontSize: 11,
  },
  flexibleLabel: {
    fontFamily: 'LibreBaskerville',
    fontSize: 13,
    marginBottom: 8,
  },
  abilityGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  abilityChip: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
    borderWidth: 1,
    minWidth: 44,
    minHeight: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  abilityChipText: {
    fontFamily: 'Cinzel',
    fontSize: 13,
    fontWeight: '700',
  },
});
