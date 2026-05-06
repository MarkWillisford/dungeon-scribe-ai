import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { OrnatePanel } from '@/components/ui/OrnatePanel';
import { FantasyTextInput } from '@/components/ui/FantasyTextInput';
import { FantasyDivider } from '@/components/ui/FantasyDivider';
import { InlinePicker } from '@/components/ui/InlinePicker';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  setName,
  setPlayer,
  setRace,
  setRacialFlexAbility,
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
import type { AbilityKey } from '@/types/abilities';
import { RulesetSettingsSheet } from './RulesetSettingsSheet';
import { RacePickerSheet } from './RacePickerSheet';

const ALIGNMENT_OPTIONS = Object.values(Alignment).map((a) => ({ label: a, value: a }));

export function IdentitySection() {
  const { colors, fantasy, isDark } = useTheme();
  const dispatch = useAppDispatch();
  const character = useAppSelector((state) => state.characterEntry.character);
  const activeRuleset = useAppSelector((state) => state.ruleset.activeRuleset);
  const [rulesetOpen, setRulesetOpen] = useState(false);
  const [racePickerOpen, setRacePickerOpen] = useState(false);

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

        {/* Race picker */}
        <Pressable
          onPress={() => setRacePickerOpen(true)}
          style={[styles.raceRow, styles.raceButton]}
          accessibilityRole="button"
          accessibilityLabel={`Race: ${character.info.race.name || 'None selected'}. Tap to change.`}
          testID="identity-race"
        >
          <Text style={[styles.raceLabel, { color: colors.text.secondary }]}>Race</Text>
          <Text
            style={[
              styles.raceValue,
              {
                color: character.info.race.name
                  ? isDark
                    ? fantasy.gold
                    : fantasy.darkWood
                  : colors.text.tertiary,
              },
            ]}
            numberOfLines={1}
          >
            {character.info.race.name || 'Tap to select race...'}
          </Text>
          <Text style={[styles.searchIcon, { color: colors.text.tertiary }]}>🔍</Text>
        </Pressable>

        {/* Flex ability picker — shown only for races like Human that get +2 to any stat */}
        {character.info.racialFlexBonus && (
          <InlinePicker
            label="Racial +2"
            value={character.info.racialFlexAbility ?? ''}
            options={[
              { label: 'Strength', value: 'str' },
              { label: 'Dexterity', value: 'dex' },
              { label: 'Constitution', value: 'con' },
              { label: 'Intelligence', value: 'int' },
              { label: 'Wisdom', value: 'wis' },
              { label: 'Charisma', value: 'cha' },
            ]}
            onValueChange={(v) => dispatch(setRacialFlexAbility(v as AbilityKey))}
            testID="identity-racial-flex"
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

        <InlinePicker
          label="Alignment"
          value={character.info.alignment}
          options={ALIGNMENT_OPTIONS}
          onValueChange={(v) => dispatch(setAlignment(v as Alignment))}
          testID="identity-alignment"
        />

        <Pressable
          onPress={() => setRulesetOpen(true)}
          style={styles.rulesetRow}
          accessibilityRole="button"
          accessibilityLabel={`Ruleset: ${activeRuleset.name}. Tap to change.`}
          testID="identity-ruleset"
        >
          <Text style={[styles.rulesetLabel, { color: colors.text.secondary }]}>Ruleset</Text>
          <Text
            style={[styles.rulesetValue, { color: isDark ? fantasy.gold : fantasy.darkWood }]}
            numberOfLines={1}
          >
            {activeRuleset.name}
          </Text>
          <Text style={[styles.rulesetChevron, { color: colors.text.tertiary }]}>›</Text>
        </Pressable>

        <RulesetSettingsSheet visible={rulesetOpen} onClose={() => setRulesetOpen(false)} />

        <FantasyTextInput
          label="Deity"
          value={character.info.deity}
          onChangeText={(v) => dispatch(setDeity(v))}
          autoCapitalize="words"
          testID="identity-deity"
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
  container: {
    gap: 0,
  },
  raceRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  raceButton: {
    paddingVertical: 10,
    gap: 8,
  },
  raceLabel: {
    fontFamily: 'LibreBaskerville',
    fontSize: 13,
    width: 90,
    flexShrink: 0,
  },
  raceValue: {
    flex: 1,
    fontFamily: 'LibreBaskerville',
    fontSize: 14,
    fontWeight: '600',
  },
  searchIcon: {
    fontSize: 18,
    marginLeft: 4,
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
  rulesetRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    gap: 8,
  },
  rulesetLabel: {
    fontFamily: 'LibreBaskerville',
    fontSize: 13,
    width: 90,
    flexShrink: 0,
  },
  rulesetValue: {
    flex: 1,
    fontFamily: 'LibreBaskerville',
    fontSize: 14,
    fontWeight: '600',
  },
  rulesetChevron: {
    fontSize: 18,
    fontWeight: '600',
  },
});
