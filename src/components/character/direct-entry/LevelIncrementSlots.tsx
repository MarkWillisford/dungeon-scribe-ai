import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { OrnatePanel } from '@/components/ui/OrnatePanel';
import { InlinePicker } from '@/components/ui/InlinePicker';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setLevelIncrementAbility } from '@/store/slices/characterEntrySlice';
import type { AbilityKey } from '@/types/abilities';
import { useTheme } from '@/hooks/useTheme';

const ABILITY_OPTIONS = [
  { label: 'STR', value: 'str' },
  { label: 'DEX', value: 'dex' },
  { label: 'CON', value: 'con' },
  { label: 'INT', value: 'int' },
  { label: 'WIS', value: 'wis' },
  { label: 'CHA', value: 'cha' },
];

export function LevelIncrementSlots() {
  const { colors } = useTheme();
  const dispatch = useAppDispatch();
  const slots = useAppSelector((state) => state.characterEntry.character.levelIncrementSlots);
  const totalClassHD = useAppSelector((state) =>
    state.characterEntry.character.classes.classes.reduce((sum: number, c) => sum + c.level, 0),
  );

  if (slots.length === 0) {
    return (
      <OrnatePanel title="Level Increments">
        <Text style={[styles.emptyText, { color: colors.text.tertiary }]}>
          Add classes to generate level increment slots. One +1 is gained every 4 class HD (at HD 4,
          8, 12, ...).
        </Text>
        <Text style={[styles.hdNote, { color: colors.text.tertiary }]}>
          Current class HD: {totalClassHD}
        </Text>
      </OrnatePanel>
    );
  }

  return (
    <OrnatePanel title="Level Increments">
      <Text style={[styles.note, { color: colors.text.tertiary }]}>
        One +1 to any ability score per 4 class HD. Current class HD: {totalClassHD}
      </Text>
      <View style={styles.slots}>
        {slots.map((slot) => (
          <View key={slot.atHD} style={styles.slotRow}>
            <Text style={[styles.slotLabel, { color: colors.text.secondary }]}>
              +1 at class HD {slot.atHD}:
            </Text>
            <InlinePicker
              value={slot.ability ?? ''}
              options={ABILITY_OPTIONS}
              onValueChange={(v) =>
                dispatch(setLevelIncrementAbility({ atHD: slot.atHD, ability: v as AbilityKey }))
              }
              placeholder="— choose —"
              style={styles.slotPicker}
            />
          </View>
        ))}
      </View>
    </OrnatePanel>
  );
}

const styles = StyleSheet.create({
  note: {
    fontFamily: 'LibreBaskerville',
    fontSize: 12,
    fontStyle: 'italic',
    marginBottom: 12,
  },
  emptyText: {
    fontFamily: 'LibreBaskerville',
    fontSize: 13,
    fontStyle: 'italic',
    marginBottom: 8,
  },
  hdNote: {
    fontFamily: 'LibreBaskerville',
    fontSize: 12,
  },
  slots: {
    gap: 4,
  },
  slotRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  slotLabel: {
    fontFamily: 'LibreBaskerville',
    fontSize: 14,
    width: 140,
  },
  slotPicker: {
    flex: 1,
    marginBottom: 0,
  },
});
