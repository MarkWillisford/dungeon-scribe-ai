import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, TextInput, ScrollView } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { DiceService } from '@services/DiceService';
import { RollRecord } from '@/types/buff';
import { RollResultDisplay } from './RollResultDisplay';

interface DiceRollerProps {
  onRollRecorded: (record: RollRecord) => void;
  testID?: string;
}

type DieType = 4 | 6 | 8 | 10 | 12 | 20 | 100;
const DIE_TYPES: DieType[] = [4, 6, 8, 10, 12, 20, 100];

interface PendingRoll {
  count: number;
  sides: DieType;
  modifier: number;
}

export function DiceRoller({ onRollRecorded, testID }: DiceRollerProps) {
  const { colors, fantasy } = useTheme();
  const [pending, setPending] = useState<PendingRoll>({ count: 1, sides: 20, modifier: 0 });
  const [modifierText, setModifierText] = useState('0');
  const [label, setLabel] = useState('');
  const [manualInput, setManualInput] = useState('');
  const [lastResult, setLastResult] = useState<RollRecord | null>(null);
  const [customNotation, setCustomNotation] = useState('');
  const [customError, setCustomError] = useState('');

  const notation = DiceService.buildNotation(pending.count, pending.sides, pending.modifier);

  const adjustCount = (delta: number) => {
    setPending((p) => ({ ...p, count: Math.max(1, Math.min(20, p.count + delta)) }));
  };

  const handleModifierChange = (text: string) => {
    setModifierText(text);
    const val = parseInt(text, 10);
    setPending((p) => ({ ...p, modifier: isNaN(val) ? 0 : val }));
  };

  const buildRecord = (rawRoll: number, diceTotal: number, isManual: boolean): RollRecord => {
    const effectiveLabel = label.trim() || `${pending.count}d${pending.sides}`;
    const modifier = pending.modifier;
    const total = diceTotal + modifier;
    const breakdown =
      pending.count === 1
        ? [`d${pending.sides}: ${rawRoll}`]
        : [`${pending.count}d${pending.sides}: ${diceTotal}`];
    if (modifier !== 0) {
      breakdown.push(`Modifier: ${modifier >= 0 ? '+' : ''}${modifier}`);
    }
    return {
      id: `free_${Date.now()}`,
      timestamp: Date.now(),
      type: 'free',
      label: effectiveLabel,
      diceNotation: notation,
      rawRoll,
      modifier,
      total,
      breakdown,
      isCrit: pending.sides === 20 && pending.count === 1 && rawRoll === 20,
      isCritFail: pending.sides === 20 && pending.count === 1 && rawRoll === 1,
      isManual,
    };
  };

  const handleRoll = () => {
    const result = DiceService.rollNotation(notation);
    const rawRoll = result.rolls[0] ?? result.subtotal;
    const record = buildRecord(rawRoll, result.subtotal, false);
    setLastResult(record);
    onRollRecorded(record);
  };

  const handleManualRoll = () => {
    const val = parseInt(manualInput, 10);
    if (isNaN(val) || val < 1) return;
    const record = buildRecord(val, val, true);
    setLastResult(record);
    onRollRecorded(record);
    setManualInput('');
  };

  const handleCustomNotation = () => {
    setCustomError('');
    const notationText = customNotation.trim();
    if (!notationText) return;
    try {
      const result = DiceService.rollNotation(notationText);
      const effectiveLabel = label.trim() || notationText;
      const rawRoll = result.rolls[0] ?? result.subtotal;
      const record: RollRecord = {
        id: `free_${Date.now()}`,
        timestamp: Date.now(),
        type: 'free',
        label: effectiveLabel,
        diceNotation: notationText,
        rawRoll,
        modifier: result.expression.modifier,
        total: result.total,
        breakdown: DiceService.formatBreakdown(result),
        isManual: false,
      };
      setLastResult(record);
      onRollRecorded(record);
      setCustomNotation('');
    } catch {
      setCustomError('Invalid notation (e.g. 2d6+3)');
    }
  };

  return (
    <ScrollView testID={testID} style={styles.scroll} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        {/* Die selector */}
        <View style={styles.dieRow}>
          {DIE_TYPES.map((d) => (
            <Pressable
              key={d}
              style={[
                styles.dieBtn,
                {
                  backgroundColor: pending.sides === d ? fantasy.bronze : colors.bg.secondary,
                  borderColor: pending.sides === d ? fantasy.bronze : colors.border.DEFAULT,
                },
              ]}
              onPress={() => setPending((p) => ({ ...p, sides: d }))}
              accessibilityLabel={`Select d${d}`}
              accessibilityState={{ selected: pending.sides === d }}
            >
              <Text
                style={[
                  styles.dieBtnText,
                  { color: pending.sides === d ? '#FFFFFF' : colors.text.secondary },
                ]}
              >
                {`d${d}`}
              </Text>
            </Pressable>
          ))}
        </View>

        {/* Count + modifier */}
        <View style={styles.buildRow}>
          {/* Count */}
          <View
            style={[
              styles.countGroup,
              { borderColor: colors.border.DEFAULT, backgroundColor: colors.bg.secondary },
            ]}
          >
            <Pressable
              style={styles.countBtn}
              onPress={() => adjustCount(-1)}
              accessibilityLabel="Decrease dice count"
            >
              <Text style={[styles.countBtnText, { color: fantasy.gold }]}>−</Text>
            </Pressable>
            <Text style={[styles.countValue, { color: colors.text.primary }]}>{pending.count}</Text>
            <Pressable
              style={styles.countBtn}
              onPress={() => adjustCount(1)}
              accessibilityLabel="Increase dice count"
            >
              <Text style={[styles.countBtnText, { color: fantasy.gold }]}>+</Text>
            </Pressable>
          </View>

          <Text
            style={[styles.dLabel, { color: colors.text.tertiary }]}
          >{`d${pending.sides}`}</Text>

          {/* Modifier */}
          <TextInput
            style={[
              styles.modInput,
              {
                borderColor: colors.border.DEFAULT,
                backgroundColor: colors.bg.secondary,
                color: colors.text.primary,
              },
            ]}
            value={modifierText}
            onChangeText={handleModifierChange}
            keyboardType="numbers-and-punctuation"
            placeholder="+0"
            placeholderTextColor={colors.text.tertiary}
            accessibilityLabel="Modifier"
          />
        </View>

        {/* Notation preview */}
        <Text style={[styles.notationPreview, { color: fantasy.gold }]}>{notation}</Text>

        {/* Optional label */}
        <TextInput
          style={[
            styles.labelInput,
            {
              borderColor: colors.border.DEFAULT,
              backgroundColor: colors.bg.secondary,
              color: colors.text.primary,
            },
          ]}
          value={label}
          onChangeText={setLabel}
          placeholder="Label (optional)"
          placeholderTextColor={colors.text.tertiary}
          accessibilityLabel="Roll label"
        />

        {/* Roll button */}
        <Pressable
          style={[styles.rollBtn, { backgroundColor: colors.primary.DEFAULT }]}
          onPress={handleRoll}
          accessibilityLabel={`Roll ${notation}`}
        >
          <Text style={styles.rollBtnText}>{`Roll ${notation}`}</Text>
        </Pressable>

        {/* Manual input row */}
        <View style={styles.manualRow}>
          <TextInput
            style={[
              styles.manualInput,
              {
                borderColor: colors.border.DEFAULT,
                backgroundColor: colors.bg.secondary,
                color: colors.text.primary,
              },
            ]}
            value={manualInput}
            onChangeText={setManualInput}
            keyboardType="numeric"
            placeholder="Enter physical die result"
            placeholderTextColor={colors.text.tertiary}
            accessibilityLabel="Manual die result"
          />
          <Pressable
            style={[styles.manualBtn, { borderColor: fantasy.bronze }]}
            onPress={handleManualRoll}
            accessibilityLabel="Apply manual roll"
          >
            <Text style={[styles.manualBtnText, { color: fantasy.bronze }]}>Apply</Text>
          </Pressable>
        </View>

        {/* Custom notation */}
        <View style={styles.customRow}>
          <TextInput
            style={[
              styles.manualInput,
              {
                borderColor: colors.border.DEFAULT,
                backgroundColor: colors.bg.secondary,
                color: colors.text.primary,
              },
            ]}
            value={customNotation}
            onChangeText={(t) => {
              setCustomNotation(t);
              setCustomError('');
            }}
            placeholder="Custom: 2d6+3, d8, etc."
            placeholderTextColor={colors.text.tertiary}
            accessibilityLabel="Custom dice notation"
          />
          <Pressable
            style={[styles.manualBtn, { borderColor: colors.primary.DEFAULT }]}
            onPress={handleCustomNotation}
            accessibilityLabel="Roll custom notation"
          >
            <Text style={[styles.manualBtnText, { color: colors.primary.DEFAULT }]}>Roll</Text>
          </Pressable>
        </View>
        {customError !== '' && (
          <Text style={[styles.errorText, { color: colors.error.DEFAULT }]}>{customError}</Text>
        )}

        {/* Last result */}
        {lastResult && (
          <View style={styles.resultSection}>
            <RollResultDisplay record={lastResult} />
          </View>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: { flex: 1 },
  container: { gap: 10, paddingBottom: 20 },
  dieRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  dieBtn: {
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 10,
    minWidth: 44,
    alignItems: 'center',
    minHeight: 44,
    justifyContent: 'center',
  },
  dieBtnText: {
    fontFamily: 'Cinzel',
    fontSize: 13,
    fontWeight: '600',
  },
  buildRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  countGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    overflow: 'hidden',
    height: 44,
  },
  countBtn: {
    width: 36,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  countBtnText: {
    fontFamily: 'Cinzel',
    fontSize: 20,
    fontWeight: '600',
  },
  countValue: {
    fontFamily: 'Cinzel',
    fontSize: 18,
    fontWeight: '700',
    minWidth: 28,
    textAlign: 'center',
  },
  dLabel: {
    fontFamily: 'Cinzel',
    fontSize: 16,
    fontWeight: '600',
  },
  modInput: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontFamily: 'LibreBaskerville',
    fontSize: 16,
    minHeight: 44,
    textAlign: 'center',
  },
  notationPreview: {
    fontFamily: 'Cinzel',
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
  },
  labelInput: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontFamily: 'LibreBaskerville',
    fontSize: 14,
    minHeight: 44,
  },
  rollBtn: {
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
    minHeight: 52,
    justifyContent: 'center',
  },
  rollBtnText: {
    fontFamily: 'Cinzel',
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  manualRow: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  customRow: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  manualInput: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontFamily: 'LibreBaskerville',
    fontSize: 14,
    minHeight: 44,
  },
  manualBtn: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 10,
    minHeight: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  manualBtnText: {
    fontFamily: 'Cinzel',
    fontSize: 13,
    fontWeight: '600',
  },
  errorText: {
    fontFamily: 'LibreBaskerville',
    fontSize: 12,
  },
  resultSection: {
    marginTop: 4,
  },
});
