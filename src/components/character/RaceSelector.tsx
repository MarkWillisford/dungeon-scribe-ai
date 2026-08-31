import React, { useState, useEffect, useMemo } from 'react';
import { View, Text, Pressable, StyleSheet, ScrollView } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { ListFilterInput } from '@/components/ui/ListFilterInput';
import { OrnatePanel } from '@/components/ui/OrnatePanel';
import { FantasyDivider } from '@/components/ui/FantasyDivider';
import { GameDataService, type RaceGroups } from '@/services/GameDataService';
import type { ExpandedRaceData } from '@/data/races';

const MENTAL_ABILITIES = ['intelligence', 'wisdom', 'charisma'];
const PHYSICAL_ABILITIES = ['strength', 'dexterity', 'constitution'];

interface RaceSelectorProps {
  selectedRace: ExpandedRaceData | null;
  onSelectRace: (race: ExpandedRaceData) => void;
  // Indexed to match flexibleAbilityBonuses entries. Index 0 of a group-toggle race holds 'mental' | 'physical'.
  flexibleAbilityChoices?: string[];
  onFlexibleAbilityChoice?: (index: number, value: string) => void;
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

export function RaceSelector({
  selectedRace,
  onSelectRace,
  flexibleAbilityChoices,
  onFlexibleAbilityChoice,
  testID,
}: RaceSelectorProps) {
  const { colors, fantasy, isDark } = useTheme();
  const [expandedRace, setExpandedRace] = useState<string | null>(selectedRace?.name ?? null);
  const [filter, setFilter] = useState('');
  // Sync initializer ensures first render has real data (no flicker; tests work without async effects).
  // Phase B: switch to empty initial state + useEffect when data comes from Firestore.
  const [raceGroups, setRaceGroups] = useState<RaceGroups>(() =>
    GameDataService.getRaceGroupsSync(),
  );

  useEffect(() => {
    GameDataService.getRaceGroups()
      .then(setRaceGroups)
      .catch((e) => console.error('Failed to load race groups:', e));
  }, []);

  const raceSections = useMemo(() => {
    const sections = [
      { title: 'Core Races', data: raceGroups.core },
      { title: 'Featured Races', data: raceGroups.featured },
      { title: 'Uncommon Races', data: raceGroups.uncommon },
    ];
    const q = filter.trim().toLowerCase();
    if (!q) return sections;
    // Empty sections are dropped so the headers do not survive their contents.
    return sections
      .map((section) => ({
        ...section,
        data: section.data.filter((race) => race.name.toLowerCase().includes(q)),
      }))
      .filter((section) => section.data.length > 0);
  }, [raceGroups, filter]);

  const matchCount = useMemo(
    () => raceSections.reduce((sum, section) => sum + section.data.length, 0),
    [raceSections],
  );

  const isFlexibleRace =
    selectedRace &&
    selectedRace.flexibleAbilityBonuses &&
    selectedRace.flexibleAbilityBonuses.length > 0;

  const handleRacePress = (race: ExpandedRaceData) => {
    setExpandedRace(race.name === expandedRace ? null : race.name);
    onSelectRace(race);
  };

  const formatModifiers = (race: ExpandedRaceData) => {
    if (race.flexibleAbilityBonuses && race.flexibleAbilityBonuses.length > 0) {
      return race.flexibleAbilityBonuses
        .map((b) => {
          const groupLabel =
            b.group === 'any'
              ? 'Any Group'
              : b.group === 'other'
                ? 'Other Group'
                : b.group === 'mental'
                  ? 'Mental'
                  : 'Physical';
          const countLabel = b.count === 'all' ? 'all' : `${b.count}`;
          return `${b.modifier > 0 ? '+' : ''}${b.modifier} to ${countLabel} ${groupLabel}`;
        })
        .join(', ');
    }
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
      <ListFilterInput
        value={filter}
        onChangeText={setFilter}
        placeholder="Filter races..."
        resultCount={matchCount}
        testID="race-filter"
        accessibilityLabel="Filter races by name"
      />
      {/* handled: a tap on a race registers on the first press with the
          keyboard open, rather than being eaten by the dismiss gesture (#358). */}
      <ScrollView keyboardShouldPersistTaps="handled">
        {matchCount === 0 && (
          <Text style={[styles.noMatches, { color: colors.text.tertiary }]}>
            {`No race matches "${filter.trim()}"`}
          </Text>
        )}
        {raceSections.map((section) => (
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

      {isFlexibleRace && onFlexibleAbilityChoice && selectedRace.flexibleAbilityBonuses && (
        <OrnatePanel title={`${selectedRace.name} Ability Bonuses`}>
          {selectedRace.flexibleAbilityBonuses.map((bonus, idx) => {
            const chosen = flexibleAbilityChoices?.[idx];
            const groupChoice = flexibleAbilityChoices?.[0]; // always the group toggle if present

            // Group toggle: pick Mental or Physical group; all three get the modifier
            if (bonus.count === 'all' && bonus.group === 'any') {
              return (
                <View key={idx}>
                  <Text style={[styles.flexibleLabel, { color: colors.text.secondary }]}>
                    {`Choose a group to receive ${bonus.modifier > 0 ? '+' : ''}${bonus.modifier} to all three abilities:`}
                  </Text>
                  <View style={styles.abilityGrid}>
                    {(['mental', 'physical'] as const).map((grp) => (
                      <Pressable
                        key={grp}
                        onPress={() => onFlexibleAbilityChoice(idx, grp)}
                        accessibilityRole="radio"
                        accessibilityLabel={
                          grp === 'mental' ? 'Mental (INT/WIS/CHA)' : 'Physical (STR/DEX/CON)'
                        }
                        accessibilityState={{ selected: chosen === grp }}
                      >
                        <View
                          style={[
                            styles.abilityChip,
                            styles.groupChip,
                            {
                              backgroundColor:
                                chosen === grp
                                  ? fantasy.gold
                                  : isDark
                                    ? colors.bg.tertiary
                                    : colors.bg.secondary,
                              borderColor: chosen === grp ? fantasy.gold : colors.border.DEFAULT,
                            },
                          ]}
                        >
                          <Text
                            style={[
                              styles.abilityChipText,
                              { color: chosen === grp ? '#FFFFFF' : colors.text.primary },
                            ]}
                          >
                            {grp === 'mental' ? 'Mental' : 'Physical'}
                          </Text>
                          <Text
                            style={[
                              styles.groupSubLabel,
                              { color: chosen === grp ? '#FFFFFF' : colors.text.secondary },
                            ]}
                          >
                            {grp === 'mental' ? 'INT / WIS / CHA' : 'STR / DEX / CON'}
                          </Text>
                        </View>
                      </Pressable>
                    ))}
                  </View>
                </View>
              );
            }

            // Per-ability picker for 'other' group (abilities from the group NOT chosen above)
            if (bonus.count === 1 && bonus.group === 'other') {
              const otherAbilities =
                groupChoice === 'mental'
                  ? PHYSICAL_ABILITIES
                  : groupChoice === 'physical'
                    ? MENTAL_ABILITIES
                    : ABILITY_NAMES;
              // Exclude abilities already chosen for other 'other' slots
              const siblingChosen = (selectedRace.flexibleAbilityBonuses ?? [])
                .map((b, i) =>
                  i !== idx && b.group === 'other' && b.count === 1
                    ? flexibleAbilityChoices?.[i]
                    : undefined,
                )
                .filter(Boolean) as string[];
              const available = otherAbilities.filter((a) => !siblingChosen.includes(a));
              const label =
                bonus.modifier > 0
                  ? `Choose one ability to receive +${bonus.modifier}:`
                  : `Choose one ability to receive ${bonus.modifier}:`;
              return (
                <View key={idx} style={{ marginTop: 12 }}>
                  <Text style={[styles.flexibleLabel, { color: colors.text.secondary }]}>
                    {label}
                  </Text>
                  <View style={styles.abilityGrid}>
                    {available.map((ability) => (
                      <Pressable
                        key={ability}
                        onPress={() => onFlexibleAbilityChoice(idx, ability)}
                        accessibilityRole="radio"
                        accessibilityLabel={`${ABILITY_LABELS[ability]} ${bonus.modifier > 0 ? '+' : ''}${bonus.modifier}`}
                        accessibilityState={{ selected: chosen === ability }}
                      >
                        <View
                          style={[
                            styles.abilityChip,
                            {
                              backgroundColor:
                                chosen === ability
                                  ? fantasy.gold
                                  : isDark
                                    ? colors.bg.tertiary
                                    : colors.bg.secondary,
                              borderColor:
                                chosen === ability ? fantasy.gold : colors.border.DEFAULT,
                            },
                          ]}
                        >
                          <Text
                            style={[
                              styles.abilityChipText,
                              { color: chosen === ability ? '#FFFFFF' : colors.text.primary },
                            ]}
                          >
                            {ABILITY_LABELS[ability]}
                          </Text>
                        </View>
                      </Pressable>
                    ))}
                  </View>
                </View>
              );
            }

            // Simple single-ability picker (Human / any-group / count:1)
            if (bonus.count === 1) {
              return (
                <View key={idx} style={{ marginTop: idx > 0 ? 12 : 0 }}>
                  <Text style={[styles.flexibleLabel, { color: colors.text.secondary }]}>
                    {`Choose one ability score to receive ${bonus.modifier > 0 ? '+' : ''}${bonus.modifier}:`}
                  </Text>
                  <View style={styles.abilityGrid}>
                    {ABILITY_NAMES.map((ability) => (
                      <Pressable
                        key={ability}
                        onPress={() => onFlexibleAbilityChoice(idx, ability)}
                        accessibilityRole="radio"
                        accessibilityLabel={`${ABILITY_LABELS[ability]} ${bonus.modifier > 0 ? '+' : ''}${bonus.modifier}`}
                        accessibilityState={{ selected: chosen === ability }}
                      >
                        <View
                          style={[
                            styles.abilityChip,
                            {
                              backgroundColor:
                                chosen === ability
                                  ? fantasy.gold
                                  : isDark
                                    ? colors.bg.tertiary
                                    : colors.bg.secondary,
                              borderColor:
                                chosen === ability ? fantasy.gold : colors.border.DEFAULT,
                            },
                          ]}
                        >
                          <Text
                            style={[
                              styles.abilityChipText,
                              { color: chosen === ability ? '#FFFFFF' : colors.text.primary },
                            ]}
                          >
                            {ABILITY_LABELS[ability]}
                          </Text>
                        </View>
                      </Pressable>
                    ))}
                  </View>
                </View>
              );
            }

            return null;
          })}
        </OrnatePanel>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  noMatches: {
    fontFamily: 'LibreBaskerville',
    fontSize: 14,
    fontStyle: 'italic',
    textAlign: 'center',
    paddingVertical: 24,
  },
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
  groupChip: {
    minWidth: 120,
    paddingVertical: 10,
  },
  groupSubLabel: {
    fontFamily: 'LibreBaskerville',
    fontSize: 10,
    marginTop: 2,
  },
});
