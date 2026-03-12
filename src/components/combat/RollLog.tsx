import React, { useRef } from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { RollRecord } from '@/types/buff';

interface RollLogProps {
  rolls: RollRecord[];
  onClear: () => void;
  testID?: string;
}

const TYPE_COLORS: Record<RollRecord['type'], string> = {
  attack: '#B71C1C',
  damage: '#E65100',
  save: '#1565C0',
  skill: '#1B5E20',
  initiative: '#6B46C1',
  free: '#5D4037',
};

const TYPE_LABELS: Record<RollRecord['type'], string> = {
  attack: 'ATK',
  damage: 'DMG',
  save: 'SAV',
  skill: 'SKL',
  initiative: 'INIT',
  free: 'ROLL',
};

function formatTimestamp(ts: number): string {
  const d = new Date(ts);
  return `${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`;
}

export function RollLog({ rolls, onClear, testID }: RollLogProps) {
  const { colors, fantasy } = useTheme();
  const scrollRef = useRef<ScrollView>(null);

  if (rolls.length === 0) {
    return (
      <View testID={testID} style={[styles.empty, { borderColor: colors.border.DEFAULT }]}>
        <Text style={[styles.emptyText, { color: colors.text.tertiary }]}>
          No rolls recorded yet
        </Text>
      </View>
    );
  }

  // Show most recent first
  const reversed = [...rolls].reverse();

  return (
    <View testID={testID} style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: fantasy.gold }]}>Roll Log</Text>
        <Pressable onPress={onClear} accessibilityLabel="Clear roll log">
          <Text style={[styles.clearText, { color: colors.text.tertiary }]}>Clear All</Text>
        </Pressable>
      </View>

      <ScrollView ref={scrollRef} style={styles.scrollArea} showsVerticalScrollIndicator={false}>
        {reversed.map((roll) => {
          const typeColor = TYPE_COLORS[roll.type] ?? '#666';
          const isCrit = roll.isCrit ?? false;
          const isCritFail = roll.isCritFail ?? false;

          return (
            <View
              key={roll.id}
              style={[
                styles.rollRow,
                {
                  backgroundColor: isCrit
                    ? 'rgba(212,175,55,0.08)'
                    : isCritFail
                      ? 'rgba(244,67,54,0.08)'
                      : colors.bg.secondary,
                  borderColor: isCrit
                    ? fantasy.gold
                    : isCritFail
                      ? '#F44336'
                      : colors.border.DEFAULT,
                },
              ]}
            >
              {/* Type badge */}
              <View style={[styles.typeBadge, { backgroundColor: typeColor }]}>
                <Text style={styles.typeText}>{TYPE_LABELS[roll.type]}</Text>
              </View>

              {/* Roll details */}
              <View style={styles.rollInfo}>
                <Text
                  style={[styles.rollLabel, { color: colors.text.secondary }]}
                  numberOfLines={1}
                >
                  {roll.label}
                  {roll.isManual ? ' ⚄' : ''}
                </Text>
                <Text style={[styles.rollNotation, { color: colors.text.tertiary }]}>
                  {roll.diceNotation}
                </Text>
              </View>

              {/* Result */}
              <View style={styles.rollResult}>
                <Text
                  style={[
                    styles.rollTotal,
                    {
                      color: isCrit ? fantasy.gold : isCritFail ? '#F44336' : colors.text.primary,
                    },
                  ]}
                >
                  {isCrit ? `${roll.total}★` : isCritFail ? `${roll.total}✗` : roll.total}
                </Text>
                <Text style={[styles.rollTime, { color: colors.text.tertiary }]}>
                  {formatTimestamp(roll.timestamp)}
                </Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { gap: 8 },
  empty: {
    borderWidth: 1,
    borderRadius: 8,
    borderStyle: 'dashed',
    padding: 20,
    alignItems: 'center',
  },
  emptyText: {
    fontFamily: 'LibreBaskerville',
    fontSize: 13,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Cinzel',
    fontSize: 13,
    fontWeight: '700',
  },
  clearText: {
    fontFamily: 'LibreBaskerville',
    fontSize: 12,
  },
  scrollArea: {
    maxHeight: 400,
  },
  rollRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    gap: 8,
    marginBottom: 4,
  },
  typeBadge: {
    width: 36,
    height: 36,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  typeText: {
    fontFamily: 'Cinzel',
    fontSize: 9,
    color: '#FFFFFF',
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  rollInfo: {
    flex: 1,
    gap: 2,
  },
  rollLabel: {
    fontFamily: 'LibreBaskerville',
    fontSize: 12,
    fontWeight: '600',
  },
  rollNotation: {
    fontFamily: 'LibreBaskerville',
    fontSize: 11,
  },
  rollResult: {
    alignItems: 'flex-end',
    gap: 2,
  },
  rollTotal: {
    fontFamily: 'Cinzel',
    fontSize: 20,
    fontWeight: '700',
  },
  rollTime: {
    fontFamily: 'LibreBaskerville',
    fontSize: 10,
  },
});
