import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, TextInput } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { DiceService } from '@services/DiceService';
import { RollRecord } from '@/types/buff';
import { ACTotals } from '@/types/combat';

const makeTimestamp = () => Date.now();

interface DefensePanelProps {
  ac: ACTotals;
  fort: number;
  ref: number;
  will: number;
  cmb: number;
  cmd: number;
  onRollRecorded: (record: RollRecord) => void;
  testID?: string;
}

export function DefensePanel({
  ac,
  fort,
  ref,
  will,
  cmb,
  cmd,
  onRollRecorded,
  testID,
}: DefensePanelProps) {
  const { colors, fantasy } = useTheme();
  const [manualSave, setManualSave] = useState<Record<string, string>>({});
  const [showBreakdown, setShowBreakdown] = useState(false);

  const rollSave = (saveTotal: number, label: string, isManual?: number) => {
    const rawRoll = isManual ?? DiceService.rollD20();
    const { total, breakdown } = DiceService.applyModifiers(rawRoll, [{ label, value: saveTotal }]);
    const ts = makeTimestamp();
    const record: RollRecord = {
      id: `${ts}_${label}`,
      timestamp: ts,
      type: 'save',
      label: `${label} Save`,
      diceNotation: DiceService.buildNotation(1, 20, saveTotal),
      rawRoll,
      modifier: saveTotal,
      total,
      breakdown,
      isCrit: DiceService.isCriticalHit(rawRoll),
      isCritFail: DiceService.isCriticalFail(rawRoll),
      isManual: isManual !== undefined,
    };
    onRollRecorded(record);
  };

  const handleManualSave = (saveTotal: number, label: string, key: string) => {
    const val = parseInt(manualSave[key] ?? '', 10);
    if (isNaN(val) || val < 1 || val > 20) return;
    rollSave(saveTotal, label, val);
    setManualSave((prev) => ({ ...prev, [key]: '' }));
  };

  const renderSaveRow = (label: string, total: number, key: string) => (
    <View style={[styles.saveRow, { borderColor: colors.border.DEFAULT }]}>
      <View style={styles.saveLabelGroup}>
        <Text style={[styles.saveLabel, { color: colors.text.tertiary }]}>{label}</Text>
        <Text style={[styles.saveTotal, { color: fantasy.gold }]}>
          {total >= 0 ? `+${total}` : `${total}`}
        </Text>
      </View>
      <View style={styles.saveActions}>
        <Pressable
          style={[styles.rollSaveBtn, { backgroundColor: colors.primary.DEFAULT }]}
          onPress={() => rollSave(total, label)}
          accessibilityLabel={`Roll ${label} save`}
        >
          <Text style={styles.rollSaveBtnText}>Roll</Text>
        </Pressable>
        <TextInput
          style={[
            styles.manualInput,
            {
              borderColor: colors.border.DEFAULT,
              backgroundColor: colors.bg.secondary,
              color: colors.text.primary,
            },
          ]}
          value={manualSave[key] ?? ''}
          onChangeText={(v) => setManualSave((prev) => ({ ...prev, [key]: v }))}
          keyboardType="numeric"
          placeholder="d20"
          placeholderTextColor={colors.text.tertiary}
          maxLength={2}
          accessibilityLabel={`Manual d20 for ${label} save`}
        />
        <Pressable
          style={[styles.applyBtn, { borderColor: fantasy.bronze }]}
          onPress={() => handleManualSave(total, label, key)}
          accessibilityLabel={`Apply manual ${label} save`}
        >
          <Text style={[styles.applyBtnText, { color: fantasy.bronze }]}>Go</Text>
        </Pressable>
      </View>
    </View>
  );

  return (
    <View testID={testID} style={styles.container}>
      {/* AC Display */}
      <View
        style={[
          styles.acCard,
          { backgroundColor: colors.bg.secondary, borderColor: fantasy.bronze },
        ]}
      >
        <View style={styles.acRow}>
          <View style={styles.acBlock}>
            <Text style={[styles.acLabel, { color: colors.text.tertiary }]}>AC</Text>
            <Text style={[styles.acValue, { color: colors.text.primary }]}>{ac.total}</Text>
          </View>
          <View style={[styles.acDivider, { backgroundColor: colors.border.DEFAULT }]} />
          <View style={styles.acBlock}>
            <Text style={[styles.acLabel, { color: colors.text.tertiary }]}>Touch</Text>
            <Text style={[styles.acValue, { color: colors.text.primary }]}>{ac.touch}</Text>
          </View>
          <View style={[styles.acDivider, { backgroundColor: colors.border.DEFAULT }]} />
          <View style={styles.acBlock}>
            <Text style={[styles.acLabel, { color: colors.text.tertiary }]}>Flat-Footed</Text>
            <Text style={[styles.acValue, { color: colors.text.primary }]}>{ac.flatFooted}</Text>
          </View>
        </View>

        {/* AC Breakdown toggle */}
        <Pressable
          style={styles.breakdownToggle}
          onPress={() => setShowBreakdown((v) => !v)}
          accessibilityLabel={showBreakdown ? 'Hide AC breakdown' : 'Show AC breakdown'}
        >
          <Text style={[styles.breakdownToggleText, { color: fantasy.gold }]}>
            {showBreakdown ? 'Hide Breakdown ▲' : 'Show Breakdown ▼'}
          </Text>
        </Pressable>

        {showBreakdown && (
          <View style={[styles.breakdownList, { borderTopColor: colors.border.DEFAULT }]}>
            {ac.breakdown.map((line, i) => (
              <Text key={i} style={[styles.breakdownLine, { color: colors.text.secondary }]}>
                {line}
              </Text>
            ))}
          </View>
        )}
      </View>

      {/* CMB / CMD */}
      <View
        style={[
          styles.cmbRow,
          { backgroundColor: colors.bg.secondary, borderColor: colors.border.DEFAULT },
        ]}
      >
        <View style={styles.cmbBlock}>
          <Text style={[styles.cmbLabel, { color: colors.text.tertiary }]}>CMB</Text>
          <Text style={[styles.cmbValue, { color: colors.text.primary }]}>
            {cmb >= 0 ? `+${cmb}` : `${cmb}`}
          </Text>
        </View>
        <View style={[styles.acDivider, { backgroundColor: colors.border.DEFAULT }]} />
        <View style={styles.cmbBlock}>
          <Text style={[styles.cmbLabel, { color: colors.text.tertiary }]}>CMD</Text>
          <Text style={[styles.cmbValue, { color: colors.text.primary }]}>{cmd}</Text>
        </View>
      </View>

      {/* Saving Throws */}
      <Text style={[styles.sectionHeader, { color: fantasy.gold }]}>Saving Throws</Text>
      {renderSaveRow('Fortitude', fort, 'fort')}
      {renderSaveRow('Reflex', ref, 'ref')}
      {renderSaveRow('Will', will, 'will')}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { gap: 10 },
  acCard: {
    borderWidth: 1,
    borderRadius: 8,
    overflow: 'hidden',
  },
  acRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  acBlock: {
    flex: 1,
    alignItems: 'center',
    gap: 2,
  },
  acLabel: {
    fontFamily: 'LibreBaskerville',
    fontSize: 11,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  acValue: {
    fontFamily: 'Cinzel',
    fontSize: 28,
    fontWeight: '700',
  },
  acDivider: {
    width: 1,
    height: 40,
    marginHorizontal: 8,
  },
  breakdownToggle: {
    padding: 8,
    alignItems: 'center',
  },
  breakdownToggleText: {
    fontFamily: 'LibreBaskerville',
    fontSize: 12,
  },
  breakdownList: {
    borderTopWidth: 1,
    padding: 10,
    gap: 2,
  },
  breakdownLine: {
    fontFamily: 'LibreBaskerville',
    fontSize: 12,
  },
  cmbRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
  },
  cmbBlock: {
    flex: 1,
    alignItems: 'center',
    gap: 2,
  },
  cmbLabel: {
    fontFamily: 'LibreBaskerville',
    fontSize: 11,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  cmbValue: {
    fontFamily: 'Cinzel',
    fontSize: 22,
    fontWeight: '700',
  },
  sectionHeader: {
    fontFamily: 'Cinzel',
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  saveRow: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    gap: 8,
  },
  saveLabelGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  saveLabel: {
    fontFamily: 'LibreBaskerville',
    fontSize: 13,
    fontWeight: '600',
  },
  saveTotal: {
    fontFamily: 'Cinzel',
    fontSize: 20,
    fontWeight: '700',
  },
  saveActions: {
    flexDirection: 'row',
    gap: 6,
    alignItems: 'center',
  },
  rollSaveBtn: {
    flex: 1,
    borderRadius: 6,
    paddingVertical: 8,
    alignItems: 'center',
    minHeight: 44,
    justifyContent: 'center',
  },
  rollSaveBtnText: {
    fontFamily: 'Cinzel',
    fontSize: 13,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  manualInput: {
    width: 52,
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 8,
    fontFamily: 'LibreBaskerville',
    fontSize: 14,
    minHeight: 44,
    textAlign: 'center',
  },
  applyBtn: {
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 8,
    minHeight: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  applyBtnText: {
    fontFamily: 'Cinzel',
    fontSize: 12,
    fontWeight: '600',
  },
});
