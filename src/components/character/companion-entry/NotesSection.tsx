import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { useAppDispatch } from '@/store/hooks';
import { setCompanionBackground } from '@/store/slices/characterEntrySlice';
import type { CompanionInstance } from '@/types/companions';
import type { AnimalCompanionEntry } from '@/types/animalCompanions';

export interface NotesSectionProps {
  companion: CompanionInstance;
  entry: AnimalCompanionEntry | undefined;
}

// Long-form narrative for the companion. The Identity tab's `notes` field
// already captures short handler's memos (quirks, trained behaviors); this
// tab holds the full story. Kept deliberately spartan: one big text area,
// no formatting, no word count.
export function NotesSection({ companion }: NotesSectionProps) {
  const { colors, fantasy, isDark } = useTheme();
  const dispatch = useAppDispatch();

  const handleChange = (text: string) => {
    dispatch(setCompanionBackground({ instanceId: companion.instanceId, background: text }));
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.label, { color: colors.text.tertiary }]}>Background</Text>
      <TextInput
        value={companion.background}
        onChangeText={handleChange}
        placeholder="Origin, personality, adventures… anything you want to remember."
        placeholderTextColor={colors.text.tertiary}
        multiline
        textAlignVertical="top"
        accessibilityLabel="Companion background"
        style={[
          styles.input,
          {
            color: colors.text.primary,
            backgroundColor: isDark ? colors.bg.tertiary : colors.bg.primary,
            borderColor: companion.background ? fantasy.gold : colors.border.DEFAULT,
          },
        ]}
      />
      <Text style={[styles.hint, { color: colors.text.tertiary }]}>
        The Identity tab has a shorter notes field for trained behaviors and quirks — this area is
        for the companion&apos;s broader story.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { gap: 8 },
  label: {
    fontFamily: 'Cinzel',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  input: {
    fontFamily: 'LibreBaskerville',
    fontSize: 14,
    lineHeight: 20,
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    minHeight: 220,
  },
  hint: {
    fontFamily: 'LibreBaskerville',
    fontSize: 11,
    fontStyle: 'italic',
    paddingHorizontal: 4,
  },
});
