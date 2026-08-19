import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import type { FlexibleAbilityBonus } from '@/data/races';
import { useTheme } from '@/hooks/useTheme';
import { OrnatePanel } from '@/components/ui/OrnatePanel';
import { FantasyTextInput } from '@/components/ui/FantasyTextInput';
import { FantasyDivider } from '@/components/ui/FantasyDivider';
import { InlinePicker } from '@/components/ui/InlinePicker';
import { PickerField } from '@/components/ui/PickerField';
import { SearchPickerSheet, type SearchItem } from '@/components/ui/SearchPickerSheet';
import { GameDataService } from '@/services/GameDataService';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  setName,
  setPlayer,
  setRace,
  setRacialFlexChoice,
  setAlignment,
  setDeity,
  setGender,
  setAge,
  setHeight,
  setWeight,
  setHair,
  setEyes,
  setSkin,
  setBackground,
} from '@/store/slices/characterEntrySlice';
import { Alignment } from '@/types/base';
import { RulesetSettingsSheet } from './RulesetSettingsSheet';
import { RacePickerSheet } from './RacePickerSheet';
import { RacialChoicesSection } from './RacialChoicesSection';
import { AltRacialTraitsSection } from './AltRacialTraitsSection';

const ALIGNMENT_OPTIONS = Object.values(Alignment).map((a) => ({ label: a, value: a }));

const FLEX_MENTAL = ['intelligence', 'wisdom', 'charisma'];
const FLEX_PHYSICAL = ['strength', 'dexterity', 'constitution'];
const FLEX_LABELS: Record<string, string> = {
  strength: 'STR',
  dexterity: 'DEX',
  constitution: 'CON',
  intelligence: 'INT',
  wisdom: 'WIS',
  charisma: 'CHA',
};

interface FlexGroupUIProps {
  bonuses: FlexibleAbilityBonus[];
  choices: string[];
  onChoiceChange: (index: number, value: string) => void;
}

function FlexGroupUI({ bonuses, choices, onChoiceChange }: FlexGroupUIProps) {
  const { colors, fantasy, isDark } = useTheme();
  const groupChoice = choices[0];

  return (
    <View style={flexStyles.wrapper}>
      {bonuses.map((bonus, idx) => {
        const chosen = choices[idx];

        if (bonus.count === 'all' && bonus.group === 'any') {
          return (
            <View key={idx}>
              <Text style={[flexStyles.label, { color: colors.text.secondary }]}>
                Choose a group to receive {bonus.modifier > 0 ? '+' : ''}
                {bonus.modifier} to all three:
              </Text>
              <View style={flexStyles.chipRow}>
                {(['mental', 'physical'] as const).map((grp) => (
                  <Pressable
                    key={grp}
                    onPress={() => onChoiceChange(idx, grp)}
                    accessibilityRole="radio"
                    accessibilityLabel={
                      grp === 'mental' ? 'Mental (INT/WIS/CHA)' : 'Physical (STR/DEX/CON)'
                    }
                    accessibilityState={{ selected: chosen === grp }}
                  >
                    <View
                      style={[
                        flexStyles.groupChip,
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
                          flexStyles.chipText,
                          { color: chosen === grp ? '#FFFFFF' : colors.text.primary },
                        ]}
                      >
                        {grp === 'mental' ? 'Mental' : 'Physical'}
                      </Text>
                      <Text
                        style={[
                          flexStyles.chipSub,
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

        if (bonus.count === 1 && bonus.group === 'other') {
          const pool =
            groupChoice === 'mental'
              ? FLEX_PHYSICAL
              : groupChoice === 'physical'
                ? FLEX_MENTAL
                : [...FLEX_MENTAL, ...FLEX_PHYSICAL];
          const siblingChosen = bonuses
            .map((b, i) =>
              i !== idx && b.group === 'other' && b.count === 1 ? choices[i] : undefined,
            )
            .filter(Boolean) as string[];
          const available = pool.filter((a) => !siblingChosen.includes(a));
          const label =
            bonus.modifier > 0
              ? `Choose one ability to receive +${bonus.modifier}:`
              : `Choose one ability to receive ${bonus.modifier}:`;
          return (
            <View key={idx} style={flexStyles.pickerBlock}>
              <Text style={[flexStyles.label, { color: colors.text.secondary }]}>{label}</Text>
              <View style={flexStyles.chipRow}>
                {available.map((ability) => (
                  <Pressable
                    key={ability}
                    onPress={() => onChoiceChange(idx, ability)}
                    accessibilityRole="radio"
                    accessibilityLabel={`${FLEX_LABELS[ability]} ${bonus.modifier > 0 ? '+' : ''}${bonus.modifier}`}
                    accessibilityState={{ selected: chosen === ability }}
                  >
                    <View
                      style={[
                        flexStyles.abilityChip,
                        {
                          backgroundColor:
                            chosen === ability
                              ? fantasy.gold
                              : isDark
                                ? colors.bg.tertiary
                                : colors.bg.secondary,
                          borderColor: chosen === ability ? fantasy.gold : colors.border.DEFAULT,
                        },
                      ]}
                    >
                      <Text
                        style={[
                          flexStyles.chipText,
                          { color: chosen === ability ? '#FFFFFF' : colors.text.primary },
                        ]}
                      >
                        {FLEX_LABELS[ability]}
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
    </View>
  );
}

export function IdentitySection() {
  const { colors } = useTheme();
  const dispatch = useAppDispatch();
  const character = useAppSelector((state) => state.characterEntry.character);
  const activeRuleset = useAppSelector((state) => state.ruleset.activeRuleset);
  const [rulesetOpen, setRulesetOpen] = useState(false);
  const [racePickerOpen, setRacePickerOpen] = useState(false);
  const [deityPickerOpen, setDeityPickerOpen] = useState(false);
  const [deityItems, setDeityItems] = useState<SearchItem[]>([]);
  const [deityError, setDeityError] = useState<string | null>(null);

  // 271 deities are seeded, so the list is fetched once on mount rather than
  // when the sheet opens — opening onto an empty list reads as "none exist".
  useEffect(() => {
    let cancelled = false;
    GameDataService.getClassChoiceItems('deities', {})
      .then((items) => {
        if (cancelled) return;
        setDeityItems(items);
        setDeityError(null);
      })
      .catch((e) => {
        if (cancelled) return;
        // Custom entry still works, so a failed load costs the list, not the field.
        setDeityError(e instanceof Error ? e.message : String(e));
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <View style={styles.container}>
      {/* Character Info */}
      <OrnatePanel title="Character Info">
        <FantasyTextInput
          label="Name"
          value={character.info.name}
          onChangeText={(v) => dispatch(setName(v))}
          autoCapitalize="words"
          testID="identity-name"
        />
        <FantasyTextInput
          label="Player"
          value={character.info.player}
          onChangeText={(v) => dispatch(setPlayer(v))}
          autoCapitalize="words"
          testID="identity-player"
        />

        {/* Race picker — required, because race drives ability mods, size,
            speed, senses and racial traits across the whole sheet. */}
        <PickerField
          label="Race"
          value={character.info.race.name}
          placeholder="Tap to select race..."
          onPress={() => setRacePickerOpen(true)}
          required
          testID="identity-race"
        />

        {/* Simple +2-to-any picker — shown only for single-choice flex races like Human */}
        {character.info.racialFlexBonuses?.length === 1 &&
          character.info.racialFlexBonuses[0].group === 'any' &&
          character.info.racialFlexBonuses[0].count === 1 && (
            <InlinePicker
              label="Racial +2"
              value={character.info.racialFlexChoices?.[0] ?? ''}
              options={[
                { label: 'Strength', value: 'str' },
                { label: 'Dexterity', value: 'dex' },
                { label: 'Constitution', value: 'con' },
                { label: 'Intelligence', value: 'int' },
                { label: 'Wisdom', value: 'wis' },
                { label: 'Charisma', value: 'cha' },
              ]}
              onValueChange={(v) => dispatch(setRacialFlexChoice({ index: 0, value: v }))}
              testID="identity-racial-flex"
            />
          )}

        {/* Multi-step flex bonus (e.g. Elven Noble: group toggle + individual pickers) */}
        {character.info.racialFlexBonuses?.some((b) => b.count === 'all' && b.group === 'any') && (
          <FlexGroupUI
            bonuses={character.info.racialFlexBonuses!}
            choices={character.info.racialFlexChoices ?? []}
            onChoiceChange={(index, value) => dispatch(setRacialFlexChoice({ index, value }))}
          />
        )}

        <RacePickerSheet
          visible={racePickerOpen}
          onSelect={(result) => {
            dispatch(setRace(result));
            setRacePickerOpen(false);
          }}
          onClose={() => setRacePickerOpen(false)}
        />

        {character.info.race?.name && <RacialChoicesSection raceName={character.info.race.name} />}
        {character.info.race?.name && (
          <AltRacialTraitsSection raceName={character.info.race.name} />
        )}

        <InlinePicker
          label="Alignment"
          value={character.info.alignment}
          options={ALIGNMENT_OPTIONS}
          onValueChange={(v) => dispatch(setAlignment(v as Alignment))}
          testID="identity-alignment"
        />

        <PickerField
          label="Ruleset"
          value={activeRuleset.name}
          onPress={() => setRulesetOpen(true)}
          affordance="chevron"
          testID="identity-ruleset"
        />

        <RulesetSettingsSheet visible={rulesetOpen} onClose={() => setRulesetOpen(false)} />

        {/* Deity — the same searchable control the Sentinel class choice uses,
            over the same seeded collection. Custom entry is kept so homebrew
            deities remain possible, as they were with the old free-text field. */}
        <PickerField
          label="Deity"
          value={character.info.deity}
          placeholder="Tap to select deity..."
          onPress={() => setDeityPickerOpen(true)}
          testID="identity-deity"
        />
        {deityError !== null && (
          <Text style={[styles.deityError, { color: colors.warning.DEFAULT }]}>
            {`Deity list unavailable — ${deityError}. You can still type a name.`}
          </Text>
        )}

        <SearchPickerSheet
          visible={deityPickerOpen}
          title="Deity"
          items={deityItems}
          onSelect={(item) => {
            dispatch(setDeity(item.label));
            setDeityPickerOpen(false);
          }}
          onClose={() => setDeityPickerOpen(false)}
          placeholder="Search deities..."
          allowCustom
          onAddCustom={(name) => {
            dispatch(setDeity(name));
            setDeityPickerOpen(false);
          }}
          testID="deity-picker"
        />

        <View style={styles.twoCol}>
          <InlinePicker
            label="Gender"
            value={character.info.gender}
            options={[
              { label: 'Male', value: 'Male' },
              { label: 'Female', value: 'Female' },
            ]}
            onValueChange={(v) => dispatch(setGender(v))}
            style={styles.colFlex}
            testID="identity-gender"
          />
          <FantasyTextInput
            label="Age"
            value={String(character.info.age || '')}
            onChangeText={(v) => dispatch(setAge(v))}
            keyboardType="numeric"
            style={styles.colSmall}
            testID="identity-age"
          />
        </View>
      </OrnatePanel>

      <FantasyDivider />

      {/* Description */}
      <OrnatePanel title="Description">
        <View style={styles.twoCol}>
          <FantasyTextInput
            label="Height"
            value={character.info.height}
            onChangeText={(v) => dispatch(setHeight(v))}
            style={styles.colFlex}
            testID="identity-height"
          />
          <FantasyTextInput
            label="Weight"
            value={character.info.weight}
            onChangeText={(v) => dispatch(setWeight(v))}
            style={styles.colFlex}
            testID="identity-weight"
          />
        </View>
        <View style={styles.twoCol}>
          <FantasyTextInput
            label="Hair"
            value={character.info.hair}
            onChangeText={(v) => dispatch(setHair(v))}
            style={styles.colFlex}
            testID="identity-hair"
          />
          <FantasyTextInput
            label="Eyes"
            value={character.info.eyes}
            onChangeText={(v) => dispatch(setEyes(v))}
            style={styles.colFlex}
            testID="identity-eyes"
          />
        </View>
        <FantasyTextInput
          label="Skin"
          value={character.info.skin}
          onChangeText={(v) => dispatch(setSkin(v))}
          testID="identity-skin"
        />
      </OrnatePanel>

      <FantasyDivider />

      {/* Background */}
      <OrnatePanel title="Background">
        <TextInput
          value={character.info.background}
          onChangeText={(v) => dispatch(setBackground(v))}
          placeholder="Character background, history, and personality..."
          placeholderTextColor={colors.text.tertiary}
          multiline
          numberOfLines={5}
          textAlignVertical="top"
          style={[
            styles.backgroundInput,
            {
              color: colors.text.primary,
              borderColor: colors.border.DEFAULT,
              backgroundColor: colors.bg.tertiary,
            },
          ]}
          testID="identity-background"
          accessibilityLabel="Character background"
        />
      </OrnatePanel>
    </View>
  );
}

const styles = StyleSheet.create({
  deityError: {
    fontFamily: 'LibreBaskerville',
    fontSize: 12,
    marginTop: -8,
    marginBottom: 12,
  },
  container: {
    gap: 0,
  },
  twoCol: {
    flexDirection: 'row',
    gap: 12,
  },
  colFlex: {
    flex: 1,
  },
  colSmall: {
    width: 80,
  },
  backgroundInput: {
    fontFamily: 'LibreBaskerville',
    fontSize: 15,
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 10,
    minHeight: 120,
  },
});

const flexStyles = StyleSheet.create({
  wrapper: {
    marginTop: 8,
    gap: 0,
  },
  pickerBlock: {
    marginTop: 10,
  },
  label: {
    fontFamily: 'LibreBaskerville',
    fontSize: 12,
    marginBottom: 6,
  },
  chipRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  groupChip: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 6,
    borderWidth: 1,
    minWidth: 100,
    alignItems: 'center',
  },
  abilityChip: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 6,
    borderWidth: 1,
    minWidth: 44,
    minHeight: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chipText: {
    fontFamily: 'Cinzel',
    fontSize: 12,
    fontWeight: '700',
  },
  chipSub: {
    fontFamily: 'LibreBaskerville',
    fontSize: 10,
    marginTop: 2,
  },
});
