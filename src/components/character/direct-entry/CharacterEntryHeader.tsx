import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Image } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { OrnateButton } from '@/components/ui/OrnateButton';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setName } from '@/store/slices/characterEntrySlice';

interface CharacterEntryHeaderProps {
  onValidate: () => void;
  onSave: () => void;
  onPortraitPress: () => void;
  onBack?: () => void;
}

/** Derives a concise "Cleric 5 / Hathran 5 / ..." string from the character's classes array. */
function buildClassSummary(classes: { name: string; level: number }[]): string {
  if (classes.length === 0) return 'No classes';
  return classes.map((c) => `${c.name} ${c.level}`).join(' / ');
}

/** Computes ECL from classes (sum of levels) + template LA costs. Templates not yet wired. */
function computeECL(classes: { level: number }[]): number {
  return classes.reduce((sum, c) => sum + c.level, 0);
}

export function CharacterEntryHeader({
  onValidate,
  onSave,
  onPortraitPress,
  onBack,
}: CharacterEntryHeaderProps) {
  const { colors, fantasy, shadows, isDark } = useTheme();
  const dispatch = useAppDispatch();
  const character = useAppSelector((state) => state.characterEntry.character);
  const isDirty = useAppSelector((state) => state.characterEntry.isDirty);

  const [nameEditing, setNameEditing] = useState(false);

  const ecl = computeECL(character.classes.classes);
  const classSummary = buildClassSummary(character.classes.classes);
  const subtitle = [
    character.info.race.name || 'Unknown Race',
    `ECL ${ecl}`,
    character.info.alignment,
  ]
    .filter(Boolean)
    .join('  •  ');

  const headerBg = isDark ? colors.bg.primary : colors.bg.secondary;
  const borderColor = isDark ? fantasy.gold : fantasy.bronze;

  return (
    <View
      style={[
        styles.container,
        shadows.panel,
        { backgroundColor: headerBg, borderBottomColor: borderColor },
      ]}
    >
      {/* Back button */}
      {onBack && (
        <Pressable
          onPress={onBack}
          style={styles.backButton}
          accessibilityRole="button"
          accessibilityLabel="Go back"
        >
          <Text style={[styles.backText, { color: colors.text.tertiary }]}>{'<'}</Text>
        </Pressable>
      )}

      {/* Portrait */}
      <Pressable
        onPress={onPortraitPress}
        style={[styles.portrait, { borderColor: fantasy.bronze }]}
        accessibilityRole="button"
        accessibilityLabel="Change portrait"
      >
        {character.info.portrait ? (
          <Image source={{ uri: character.info.portrait }} style={styles.portraitImage} />
        ) : (
          <Text style={[styles.portraitPlaceholder, { color: colors.text.tertiary }]}>⚔</Text>
        )}
      </Pressable>

      {/* Center — name + subtitle + class summary */}
      <View style={styles.centerBlock}>
        {nameEditing ? (
          <TextInput
            value={character.info.name}
            onChangeText={(text) => dispatch(setName(text))}
            onBlur={() => setNameEditing(false)}
            autoFocus
            selectTextOnFocus
            style={[
              styles.nameInput,
              { color: isDark ? fantasy.gold : fantasy.darkWood, borderBottomColor: fantasy.gold },
            ]}
            accessibilityLabel="Character name"
            testID="character-name-input"
          />
        ) : (
          <Pressable
            onPress={() => setNameEditing(true)}
            accessibilityRole="button"
            accessibilityLabel="Edit character name"
          >
            <Text
              style={[styles.name, { color: isDark ? fantasy.gold : fantasy.darkWood }]}
              numberOfLines={1}
            >
              {character.info.name || 'Unnamed Character'}
            </Text>
          </Pressable>
        )}

        <Text style={[styles.subtitle, { color: colors.text.secondary }]} numberOfLines={1}>
          {subtitle}
        </Text>

        <Text style={[styles.classSummary, { color: colors.text.tertiary }]} numberOfLines={1}>
          {classSummary}
        </Text>
      </View>

      {/* Right — action buttons */}
      <View style={styles.actions}>
        <OrnateButton
          title="Validate"
          onPress={onValidate}
          variant="secondary"
          style={styles.actionButton}
          accessibilityLabel="Validate character"
        />
        <OrnateButton
          title={isDirty ? 'Save*' : 'Save'}
          onPress={onSave}
          variant="primary"
          style={styles.actionButton}
          accessibilityLabel={isDirty ? 'Save character (unsaved changes)' : 'Save character'}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderBottomWidth: 1,
    gap: 10,
  },
  portrait: {
    width: 56,
    height: 56,
    borderRadius: 8,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    flexShrink: 0,
  },
  portraitImage: {
    width: '100%',
    height: '100%',
  },
  portraitPlaceholder: {
    fontSize: 24,
  },
  centerBlock: {
    flex: 1,
    justifyContent: 'center',
    gap: 2,
  },
  name: {
    fontFamily: 'Cinzel',
    fontSize: 18,
    fontWeight: '700',
  },
  nameInput: {
    fontFamily: 'Cinzel',
    fontSize: 18,
    fontWeight: '700',
    borderBottomWidth: 1,
    paddingBottom: 2,
  },
  subtitle: {
    fontFamily: 'LibreBaskerville',
    fontSize: 12,
  },
  classSummary: {
    fontFamily: 'LibreBaskerville',
    fontSize: 11,
    fontStyle: 'italic',
  },
  actions: {
    gap: 6,
    flexShrink: 0,
  },
  actionButton: {
    minWidth: 80,
  },
  backButton: {
    paddingHorizontal: 4,
    paddingVertical: 8,
    flexShrink: 0,
  },
  backText: {
    fontFamily: 'Cinzel',
    fontSize: 18,
    fontWeight: '700',
  },
});
