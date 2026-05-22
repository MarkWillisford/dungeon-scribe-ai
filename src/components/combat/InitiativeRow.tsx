import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { DiceService } from '@services/DiceService';
import type { RollRecord } from '@/types/buff';

interface InitiativeRowProps {
  initiative: number;
  onRollRecorded: (record: RollRecord) => void;
  testID?: string;
}

export function InitiativeRow({ initiative, onRollRecorded, testID }: InitiativeRowProps) {
  const { colors, fantasy } = useTheme();

  const handleRoll = () => {
    const raw = DiceService.rollD20();
    const total = raw + initiative;
    const record: RollRecord = {
      id: `init_${Date.now()}`,
      timestamp: Date.now(),
      type: 'initiative',
      label: 'Initiative',
      diceNotation: DiceService.buildNotation(1, 20, initiative),
      rawRoll: raw,
      modifier: initiative,
      total,
      breakdown: [`d20: ${raw}`, `Initiative: ${initiative >= 0 ? '+' : ''}${initiative}`],
      isCrit: raw === 20,
      isCritFail: raw === 1,
      isManual: false,
    };
    onRollRecorded(record);
  };

  return (
    <View
      testID={testID}
      style={[
        styles.row,
        { backgroundColor: colors.bg.secondary, borderColor: colors.border.DEFAULT },
      ]}
    >
      <Text style={[styles.label, { color: colors.text.tertiary }]}>Initiative</Text>
      <Text style={[styles.value, { color: fantasy.gold }]}>
        {initiative >= 0 ? `+${initiative}` : `${initiative}`}
      </Text>
      <Pressable
        style={[styles.rollBtn, { backgroundColor: colors.primary.DEFAULT }]}
        onPress={handleRoll}
        accessibilityLabel="Roll initiative"
      >
        <Text style={styles.rollBtnText}>Roll</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    gap: 8,
  },
  label: {
    fontFamily: 'LibreBaskerville',
    fontSize: 13,
    flex: 1,
  },
  value: {
    fontFamily: 'Cinzel',
    fontSize: 22,
    fontWeight: '700',
    minWidth: 48,
    textAlign: 'right',
  },
  rollBtn: {
    borderRadius: 6,
    paddingHorizontal: 16,
    paddingVertical: 8,
    minHeight: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rollBtnText: {
    fontFamily: 'Cinzel',
    fontSize: 13,
    color: '#FFFFFF',
    fontWeight: '600',
  },
});
