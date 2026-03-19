import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { OrnatePanel } from '@/components/ui/OrnatePanel';
import { FantasyTextInput } from '@/components/ui/FantasyTextInput';
import { FantasyDivider } from '@/components/ui/FantasyDivider';
import { InlinePicker } from '@/components/ui/InlinePicker';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  setName,
  setPlayer,
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

const ALIGNMENT_OPTIONS = Object.values(Alignment).map((a) => ({ label: a, value: a }));

export function IdentitySection() {
  const { colors } = useTheme();
  const dispatch = useAppDispatch();
  const draft = useAppSelector((state) => state.characterEntry.draft);

  return (
    <View style={styles.container}>
      {/* Character Info */}
      <OrnatePanel title="Character Info">
        <FantasyTextInput
          label="Name"
          value={draft.name}
          onChangeText={(v) => dispatch(setName(v))}
          autoCapitalize="words"
          testID="identity-name"
        />
        <FantasyTextInput
          label="Player"
          value={draft.player}
          onChangeText={(v) => dispatch(setPlayer(v))}
          autoCapitalize="words"
          testID="identity-player"
        />

        {/* Race — will become SearchPickerSheet in a later PR */}
        <View style={styles.raceRow}>
          <FantasyTextInput
            label="Race"
            value={draft.raceName}
            onChangeText={() => {
              // TODO: open SearchPickerSheet for races
            }}
            placeholder="Tap 🔍 to search races"
            style={styles.raceFlex}
            testID="identity-race"
          />
          <Text style={[styles.searchIcon, { color: colors.text.tertiary }]}>🔍</Text>
        </View>

        <InlinePicker
          label="Alignment"
          value={draft.alignment}
          options={ALIGNMENT_OPTIONS}
          onValueChange={(v) => dispatch(setAlignment(v as Alignment))}
          testID="identity-alignment"
        />

        <FantasyTextInput
          label="Deity"
          value={draft.deity}
          onChangeText={(v) => dispatch(setDeity(v))}
          autoCapitalize="words"
          testID="identity-deity"
        />

        <View style={styles.twoCol}>
          <FantasyTextInput
            label="Gender"
            value={draft.gender}
            onChangeText={(v) => dispatch(setGender(v))}
            style={styles.colFlex}
            testID="identity-gender"
          />
          <FantasyTextInput
            label="Age"
            value={draft.age}
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
            value={draft.height}
            onChangeText={(v) => dispatch(setHeight(v))}
            style={styles.colFlex}
            testID="identity-height"
          />
          <FantasyTextInput
            label="Weight"
            value={draft.weight}
            onChangeText={(v) => dispatch(setWeight(v))}
            style={styles.colFlex}
            testID="identity-weight"
          />
        </View>
        <View style={styles.twoCol}>
          <FantasyTextInput
            label="Hair"
            value={draft.hair}
            onChangeText={(v) => dispatch(setHair(v))}
            style={styles.colFlex}
            testID="identity-hair"
          />
          <FantasyTextInput
            label="Eyes"
            value={draft.eyes}
            onChangeText={(v) => dispatch(setEyes(v))}
            style={styles.colFlex}
            testID="identity-eyes"
          />
        </View>
        <FantasyTextInput
          label="Skin"
          value={draft.skin}
          onChangeText={(v) => dispatch(setSkin(v))}
          testID="identity-skin"
        />
      </OrnatePanel>

      <FantasyDivider />

      {/* Background */}
      <OrnatePanel title="Background">
        <TextInput
          value={draft.background}
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
    alignItems: 'flex-end',
    marginBottom: 0,
  },
  raceFlex: {
    flex: 1,
    marginBottom: 12,
  },
  searchIcon: {
    fontSize: 20,
    marginLeft: 8,
    marginBottom: 14,
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
