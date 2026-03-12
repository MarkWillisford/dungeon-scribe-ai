import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { RollRecord } from '@/types/buff';

interface RollResultDisplayProps {
  record: RollRecord;
  compact?: boolean;
  testID?: string;
}

export function RollResultDisplay({ record, compact = false, testID }: RollResultDisplayProps) {
  const { colors, fantasy } = useTheme();
  const [showBreakdown, setShowBreakdown] = useState(false);

  const isCrit = record.isCrit ?? false;
  const isCritFail = record.isCritFail ?? false;

  const totalColor = isCrit
    ? fantasy.gold
    : isCritFail
      ? colors.error.DEFAULT
      : colors.text.primary;

  const borderColor = isCrit
    ? fantasy.gold
    : isCritFail
      ? colors.error.DEFAULT
      : colors.border.DEFAULT;

  if (compact) {
    return (
      <View
        testID={testID}
        style={[styles.compactContainer, { backgroundColor: colors.bg.secondary, borderColor }]}
      >
        <Text style={[styles.compactLabel, { color: colors.text.secondary }]} numberOfLines={1}>
          {record.label}
        </Text>
        <Text style={[styles.compactTotal, { color: totalColor }]}>
          {isCrit ? `${record.total} CRIT!` : isCritFail ? `${record.total} MISS` : record.total}
        </Text>
      </View>
    );
  }

  return (
    <View
      testID={testID}
      style={[styles.container, { backgroundColor: colors.bg.secondary, borderColor }]}
    >
      {/* Header row */}
      <View style={styles.headerRow}>
        <View style={styles.labelGroup}>
          <Text style={[styles.label, { color: colors.text.secondary }]}>{record.label}</Text>
          <Text style={[styles.notation, { color: colors.text.tertiary }]}>
            {record.diceNotation}
          </Text>
        </View>
        {(isCrit || isCritFail) && (
          <View
            style={[
              styles.critBadge,
              { backgroundColor: isCrit ? fantasy.gold : colors.error.DEFAULT },
            ]}
          >
            <Text style={styles.critText}>{isCrit ? 'CRITICAL!' : 'FUMBLE'}</Text>
          </View>
        )}
      </View>

      {/* Total */}
      <Text style={[styles.total, { color: totalColor }]}>{record.total}</Text>

      {/* Raw roll + modifier summary */}
      <Text style={[styles.summary, { color: colors.text.tertiary }]}>
        {`d20: ${record.rawRoll}  Mod: ${record.modifier >= 0 ? '+' : ''}${record.modifier}`}
        {record.isManual ? '  ⚄ manual' : ''}
      </Text>

      {/* Breakdown toggle */}
      {record.breakdown.length > 1 && (
        <>
          <Pressable
            onPress={() => setShowBreakdown((v) => !v)}
            style={styles.breakdownToggle}
            accessibilityLabel={showBreakdown ? 'Hide breakdown' : 'Show breakdown'}
          >
            <Text style={[styles.breakdownToggleText, { color: fantasy.gold }]}>
              {showBreakdown ? 'Hide breakdown ▲' : 'Show breakdown ▼'}
            </Text>
          </Pressable>

          {showBreakdown && (
            <View style={[styles.breakdownList, { borderTopColor: colors.border.DEFAULT }]}>
              {record.breakdown.map((line, i) => (
                <Text key={i} style={[styles.breakdownLine, { color: colors.text.secondary }]}>
                  {line}
                </Text>
              ))}
            </View>
          )}
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    gap: 4,
  },
  compactContainer: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  compactLabel: {
    fontFamily: 'LibreBaskerville',
    fontSize: 12,
    flex: 1,
  },
  compactTotal: {
    fontFamily: 'Cinzel',
    fontSize: 18,
    fontWeight: '700',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  labelGroup: { flex: 1 },
  label: {
    fontFamily: 'Cinzel',
    fontSize: 13,
    fontWeight: '600',
  },
  notation: {
    fontFamily: 'LibreBaskerville',
    fontSize: 11,
    marginTop: 1,
  },
  critBadge: {
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  critText: {
    fontFamily: 'Cinzel',
    fontSize: 11,
    color: '#FFFFFF',
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  total: {
    fontFamily: 'Cinzel',
    fontSize: 52,
    fontWeight: '700',
    lineHeight: 58,
    textAlign: 'center',
  },
  summary: {
    fontFamily: 'LibreBaskerville',
    fontSize: 12,
    textAlign: 'center',
  },
  breakdownToggle: {
    paddingVertical: 4,
    alignItems: 'center',
  },
  breakdownToggleText: {
    fontFamily: 'LibreBaskerville',
    fontSize: 12,
  },
  breakdownList: {
    borderTopWidth: 1,
    paddingTop: 8,
    gap: 3,
  },
  breakdownLine: {
    fontFamily: 'LibreBaskerville',
    fontSize: 12,
  },
});
