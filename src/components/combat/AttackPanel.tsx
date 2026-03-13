import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, TextInput } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { DiceService } from '@services/DiceService';
import { RollRecord } from '@/types/buff';
import { BreakdownEntry } from '@/types/dice';

const makeTimestamp = () => Date.now();

interface AttackPanelProps {
  meleeAttacks: number[]; // e.g. [14, 9, 4]
  rangedAttacks: number[];
  onRollRecorded: (record: RollRecord) => void;
  testID?: string;
}

type AttackMode = 'melee' | 'ranged';

export function AttackPanel({
  meleeAttacks,
  rangedAttacks,
  onRollRecorded,
  testID,
}: AttackPanelProps) {
  const { colors, fantasy } = useTheme();
  const [mode, setMode] = useState<AttackMode>('melee');
  const [rollResults, setRollResults] = useState<
    { attack: number; label: string; isCrit: boolean; isCritFail: boolean }[]
  >([]);
  const [manualInputs, setManualInputs] = useState<Record<number, string>>({});
  const [isFullAttackRunning, setIsFullAttackRunning] = useState(false);

  const attacks = mode === 'melee' ? meleeAttacks : rangedAttacks;

  const buildBreakdownEntries = (totalBonus: number): BreakdownEntry[] => {
    // For display: show the total modifier as a single entry
    // In future, CombatService will provide a full breakdown per-attack
    return [{ label: 'Bonus', value: totalBonus }];
  };

  const rollSingleAttack = (index: number, bonus: number, label: string): RollRecord => {
    const rawRoll = DiceService.rollD20();
    const entries = buildBreakdownEntries(bonus);
    const { total, breakdown } = DiceService.applyModifiers(rawRoll, entries);
    const notation = DiceService.buildNotation(1, 20, bonus);
    const ts = makeTimestamp();
    return {
      id: `${ts}_${index}`,
      timestamp: ts,
      type: 'attack',
      label,
      diceNotation: notation,
      rawRoll,
      modifier: bonus,
      total,
      breakdown,
      isCrit: DiceService.isCriticalHit(rawRoll),
      isCritFail: DiceService.isCriticalFail(rawRoll),
      isManual: false,
    };
  };

  const applyManualRoll = (index: number, bonus: number, label: string): RollRecord | null => {
    const raw = parseInt(manualInputs[index] ?? '', 10);
    if (isNaN(raw) || raw < 1 || raw > 20) return null;
    const entries = buildBreakdownEntries(bonus);
    const { total, breakdown } = DiceService.applyModifiers(raw, entries);
    const notation = DiceService.buildNotation(1, 20, bonus);
    return {
      id: `${Date.now()}_${index}_manual`,
      timestamp: Date.now(),
      type: 'attack',
      label: `${label} (manual)`,
      diceNotation: notation,
      rawRoll: raw,
      modifier: bonus,
      total,
      breakdown,
      isCrit: DiceService.isCriticalHit(raw),
      isCritFail: DiceService.isCriticalFail(raw),
      isManual: true,
    };
  };

  const handleSingleRoll = (index: number) => {
    const bonus = attacks[index] ?? 0;
    const label = `${mode === 'melee' ? 'Melee' : 'Ranged'} Attack ${index + 1}`;
    const record = rollSingleAttack(index, bonus, label);
    onRollRecorded(record);
    setRollResults((prev) => [
      ...(Array.isArray(prev) ? prev : []),
      {
        attack: record.total,
        label,
        isCrit: record.isCrit ?? false,
        isCritFail: record.isCritFail ?? false,
      },
    ]);
  };

  const handleManualApply = (index: number) => {
    const bonus = attacks[index] ?? 0;
    const label = `${mode === 'melee' ? 'Melee' : 'Ranged'} Attack ${index + 1}`;
    const record = applyManualRoll(index, bonus, label);
    if (!record) return;
    onRollRecorded(record);
    setRollResults((prev) => [
      ...(Array.isArray(prev) ? prev : []),
      {
        attack: record.total,
        label: record.label,
        isCrit: record.isCrit ?? false,
        isCritFail: record.isCritFail ?? false,
      },
    ]);
    setManualInputs((prev) => ({ ...(prev ?? {}), [index]: '' }));
  };

  const handleFullAttack = async () => {
    if (isFullAttackRunning) return;
    setRollResults([]);
    setIsFullAttackRunning(true);

    for (let i = 0; i < attacks.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 300));
      const bonus = attacks[i] ?? 0;
      const label = `${mode === 'melee' ? 'Melee' : 'Ranged'} Attack ${i + 1}`;
      const record = rollSingleAttack(i, bonus, label);
      setRollResults((prev) => [
        ...(Array.isArray(prev) ? prev : []),
        {
          attack: record.total,
          label,
          isCrit: record.isCrit ?? false,
          isCritFail: record.isCritFail ?? false,
        },
      ]);
      onRollRecorded(record);
    }

    setIsFullAttackRunning(false);
  };

  const handleClearResults = () => setRollResults([]);

  return (
    <View testID={testID} style={styles.container}>
      {/* Mode toggle */}
      <View
        style={[
          styles.modeToggle,
          { backgroundColor: colors.bg.tertiary, borderColor: colors.border.DEFAULT },
        ]}
      >
        {(['melee', 'ranged'] as AttackMode[]).map((m) => (
          <Pressable
            key={m}
            style={[styles.modeBtn, mode === m && { backgroundColor: fantasy.bronze }]}
            onPress={() => {
              setMode(m);
              setRollResults([]);
            }}
            accessibilityLabel={`${m} attacks`}
            accessibilityState={{ selected: mode === m }}
          >
            <Text
              style={[
                styles.modeBtnText,
                { color: mode === m ? '#FFFFFF' : colors.text.secondary },
              ]}
            >
              {m === 'melee' ? 'Melee' : 'Ranged'}
            </Text>
          </Pressable>
        ))}
      </View>

      {/* Attack rows */}
      {attacks.map((bonus, index) => (
        <View
          key={index}
          style={[
            styles.attackRow,
            { borderColor: colors.border.DEFAULT, backgroundColor: colors.bg.secondary },
          ]}
        >
          <View style={styles.attackInfo}>
            <Text style={[styles.attackLabel, { color: colors.text.tertiary }]}>
              {`Attack ${index + 1}`}
            </Text>
            <Text style={[styles.attackBonus, { color: fantasy.gold }]}>
              {bonus >= 0 ? `+${bonus}` : `${bonus}`}
            </Text>
          </View>

          <Pressable
            style={[styles.rollBtn, { backgroundColor: colors.primary.DEFAULT }]}
            onPress={() => handleSingleRoll(index)}
            accessibilityLabel={`Roll attack ${index + 1}`}
          >
            <Text style={styles.rollBtnText}>Roll</Text>
          </Pressable>

          {/* Manual input */}
          <View style={styles.manualRow}>
            <TextInput
              style={[
                styles.manualInput,
                {
                  borderColor: colors.border.DEFAULT,
                  backgroundColor: colors.bg.primary,
                  color: colors.text.primary,
                },
              ]}
              value={manualInputs[index] ?? ''}
              onChangeText={(v) => setManualInputs((prev) => ({ ...prev, [index]: v }))}
              keyboardType="numeric"
              placeholder="d20"
              placeholderTextColor={colors.text.tertiary}
              maxLength={2}
              accessibilityLabel={`Manual d20 roll for attack ${index + 1}`}
            />
            <Pressable
              style={[
                styles.applyBtn,
                { backgroundColor: colors.bg.tertiary, borderColor: fantasy.bronze },
              ]}
              onPress={() => handleManualApply(index)}
              accessibilityLabel={`Apply manual roll for attack ${index + 1}`}
            >
              <Text style={[styles.applyBtnText, { color: fantasy.bronze }]}>Apply</Text>
            </Pressable>
          </View>
        </View>
      ))}

      {/* Full Attack button */}
      {attacks.length > 1 && (
        <Pressable
          style={[
            styles.fullAttackBtn,
            { backgroundColor: '#1A237E', opacity: isFullAttackRunning ? 0.6 : 1 },
          ]}
          onPress={handleFullAttack}
          disabled={isFullAttackRunning}
          accessibilityLabel="Roll full attack — all iterative attacks in sequence"
        >
          <Text style={styles.fullAttackText}>
            {isFullAttackRunning ? 'Rolling...' : 'Full Attack'}
          </Text>
        </Pressable>
      )}

      {/* Roll results — accumulate, never cleared automatically */}
      {rollResults.length > 0 && (
        <View
          style={[
            styles.resultsContainer,
            { borderColor: colors.border.DEFAULT, backgroundColor: colors.bg.secondary },
          ]}
        >
          <View style={styles.resultsHeader}>
            <Text style={[styles.resultsTitle, { color: fantasy.gold }]}>Results</Text>
            <Pressable onPress={handleClearResults} accessibilityLabel="Clear results">
              <Text style={[styles.clearText, { color: colors.text.tertiary }]}>Clear</Text>
            </Pressable>
          </View>
          {rollResults.map((r, i) => (
            <View
              key={i}
              style={[
                styles.resultRow,
                r.isCrit && { backgroundColor: 'rgba(212,175,55,0.1)' },
                r.isCritFail && { backgroundColor: 'rgba(244,67,54,0.1)' },
              ]}
            >
              <Text style={[styles.resultLabel, { color: colors.text.secondary }]}>{r.label}</Text>
              <Text
                style={[
                  styles.resultTotal,
                  {
                    color: r.isCrit ? fantasy.gold : r.isCritFail ? '#F44336' : colors.text.primary,
                  },
                ]}
              >
                {r.isCrit ? `${r.attack} (CRIT!)` : r.isCritFail ? `${r.attack} (MISS)` : r.attack}
              </Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { gap: 8 },
  modeToggle: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 8,
    overflow: 'hidden',
  },
  modeBtn: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
    minHeight: 44,
    justifyContent: 'center',
  },
  modeBtnText: {
    fontFamily: 'Cinzel',
    fontSize: 13,
    fontWeight: '600',
  },
  attackRow: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    gap: 8,
  },
  attackInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  attackLabel: {
    fontFamily: 'LibreBaskerville',
    fontSize: 13,
  },
  attackBonus: {
    fontFamily: 'Cinzel',
    fontSize: 22,
    fontWeight: '700',
  },
  rollBtn: {
    borderRadius: 6,
    paddingVertical: 10,
    alignItems: 'center',
    minHeight: 44,
    justifyContent: 'center',
  },
  rollBtnText: {
    fontFamily: 'Cinzel',
    fontSize: 13,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  manualRow: {
    flexDirection: 'row',
    gap: 6,
    alignItems: 'center',
  },
  manualInput: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontFamily: 'LibreBaskerville',
    fontSize: 14,
    minHeight: 44,
    textAlign: 'center',
  },
  applyBtn: {
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 10,
    minHeight: 44,
    justifyContent: 'center',
  },
  applyBtnText: {
    fontFamily: 'Cinzel',
    fontSize: 12,
    fontWeight: '600',
  },
  fullAttackBtn: {
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    minHeight: 44,
  },
  fullAttackText: {
    fontFamily: 'Cinzel',
    fontSize: 15,
    color: '#FFFFFF',
    fontWeight: '700',
    letterSpacing: 1,
  },
  resultsContainer: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    gap: 4,
  },
  resultsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  resultsTitle: {
    fontFamily: 'Cinzel',
    fontSize: 13,
    fontWeight: '700',
  },
  clearText: {
    fontFamily: 'LibreBaskerville',
    fontSize: 12,
  },
  resultRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 4,
    borderRadius: 4,
  },
  resultLabel: {
    fontFamily: 'LibreBaskerville',
    fontSize: 12,
  },
  resultTotal: {
    fontFamily: 'Cinzel',
    fontSize: 18,
    fontWeight: '700',
  },
  expandedBreakdown: {
    paddingLeft: 8,
    marginTop: 2,
  },
  breakdownLine: {
    fontFamily: 'LibreBaskerville',
    fontSize: 11,
  },
});
