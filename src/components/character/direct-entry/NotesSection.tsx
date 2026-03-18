import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setCharacterNotes, setCampaignNotes } from '@/store/slices/characterEntrySlice';

// ---- Section label ----

function SectionLabel({ label }: { label: string }) {
  const { colors, fantasy, isDark } = useTheme();
  return (
    <Text style={[styles.sectionLabel, { color: isDark ? fantasy.gold : fantasy.darkWood }]}>
      {label}
    </Text>
  );
}

// ---- Notes area ----

interface NotesAreaProps {
  label: string;
  value: string;
  placeholder: string;
  onChangeText: (text: string) => void;
}

function NotesArea({ label, value, placeholder, onChangeText }: NotesAreaProps) {
  const { colors, isDark } = useTheme();
  return (
    <View style={styles.areaContainer}>
      <SectionLabel label={label} />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.text.tertiary}
        multiline
        textAlignVertical="top"
        style={[
          styles.textArea,
          {
            color: colors.text.primary,
            backgroundColor: isDark ? colors.bg.secondary : colors.bg.primary,
            borderColor: colors.border.DEFAULT,
          },
        ]}
      />
    </View>
  );
}

// ---- Main section ----

export function NotesSection() {
  const dispatch = useAppDispatch();
  const characterNotes = useAppSelector((state) => state.characterEntry.draft.characterNotes);
  const campaignNotes = useAppSelector((state) => state.characterEntry.draft.campaignNotes);

  return (
    <View style={styles.container}>
      <NotesArea
        label="Character Notes"
        value={characterNotes}
        placeholder="Backstory, personality, goals, appearance..."
        onChangeText={(text) => dispatch(setCharacterNotes(text))}
      />
      <NotesArea
        label="Campaign Notes"
        value={campaignNotes}
        placeholder="Session notes, quest hooks, NPC relationships..."
        onChangeText={(text) => dispatch(setCampaignNotes(text))}
      />
    </View>
  );
}

// ---- Styles ----

const styles = StyleSheet.create({
  container: {
    gap: 16,
  },
  areaContainer: {
    gap: 6,
  },
  sectionLabel: {
    fontFamily: 'Cinzel',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  textArea: {
    fontFamily: 'LibreBaskerville',
    fontSize: 14,
    lineHeight: 20,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    minHeight: 160,
  },
});
