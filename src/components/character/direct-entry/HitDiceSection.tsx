import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { useAppDispatch } from '@/store/hooks';
import { setClassHitDie, setClassHitDiceAll } from '@/store/slices/characterEntrySlice';
import { HitDiceService } from '@/services/HitDiceService';
import type { ClassEntry, HitDieSource } from '@/types/classes';

const SOURCE_LABELS: Record<HitDieSource, string> = {
  max: 'max',
  average: 'avg',
  rolled: 'rolled',
  manual: 'manual',
};

/**
 * Per-level hit point entry for one class.
 *
 * Each class level contributes one die result. Constitution is NOT included
 * here — the pipeline applies it across every Hit Die on each recalculation, so
 * that a later CON change moves HP retroactively instead of freezing whatever
 * modifier happened to apply on the day the level was taken.
 */
export function HitDiceSection({ entry }: { entry: ClassEntry }) {
  const dispatch = useAppDispatch();
  const { colors, isDark } = useTheme();
  const [expanded, setExpanded] = useState(false);

  const id = entry.id ?? entry.name;
  const results = entry.hitDieResults ?? [];
  const sources = entry.hitDieSources ?? [];
  const total = results.reduce((sum, v) => sum + v, 0);

  const applyAll = (source: 'rolled' | 'average' | 'max') => {
    dispatch(
      setClassHitDiceAll({ id, values: HitDiceService.valuesForEntry(entry, source), source }),
    );
  };

  const setLevel = (levelIndex: number, value: number, source: HitDieSource) => {
    dispatch(setClassHitDie({ id, levelIndex, value, source }));
  };

  return (
    <View style={[styles.container, { borderTopColor: colors.border.DEFAULT }]}>
      <Pressable
        onPress={() => setExpanded((v) => !v)}
        style={styles.header}
        accessibilityRole="button"
        accessibilityLabel={
          expanded ? `Collapse hit points for ${entry.name}` : `Edit hit points for ${entry.name}`
        }
      >
        <Text style={[styles.headerLabel, { color: colors.text.secondary }]}>
          {`Hit Points (d${entry.hitDieSize})`}
        </Text>
        <Text style={[styles.headerTotal, { color: colors.text.primary }]}>
          {`${total} from ${entry.level} ${entry.level === 1 ? 'level' : 'levels'}`}
        </Text>
        <Text style={[styles.chevron, { color: colors.text.tertiary }]}>
          {expanded ? '▾' : '▸'}
        </Text>
      </Pressable>

      {expanded && (
        <View>
          <View style={styles.bulkRow}>
            {(['rolled', 'average', 'max'] as const).map((source) => (
              <Pressable
                key={source}
                onPress={() => applyAll(source)}
                style={[styles.bulkButton, { borderColor: colors.border.DEFAULT }]}
                accessibilityRole="button"
                accessibilityLabel={`Set every ${entry.name} level to ${source}`}
              >
                <Text style={[styles.bulkButtonText, { color: colors.text.secondary }]}>
                  {source === 'rolled'
                    ? '🎲 Roll all'
                    : source === 'average'
                      ? 'Average all'
                      : 'Max all'}
                </Text>
              </Pressable>
            ))}
          </View>

          {Array.from({ length: entry.level }, (_, i) => {
            const value = results[i];
            const source = sources[i] ?? 'manual';
            return (
              <View key={i} style={styles.levelRow}>
                <Text style={[styles.levelLabel, { color: colors.text.tertiary }]}>
                  {`Level ${i + 1}`}
                </Text>
                <TextInput
                  value={value === undefined ? '' : String(value)}
                  onChangeText={(t) => {
                    const n = parseInt(t, 10);
                    if (!isNaN(n)) setLevel(i, n, 'manual');
                  }}
                  keyboardType="number-pad"
                  selectTextOnFocus
                  style={[
                    styles.levelInput,
                    {
                      color: colors.text.primary,
                      borderColor: colors.border.DEFAULT,
                      backgroundColor: isDark ? colors.bg.tertiary : colors.bg.secondary,
                    },
                  ]}
                  accessibilityLabel={`${entry.name} level ${i + 1} hit points`}
                />
                <Text style={[styles.sourceLabel, { color: colors.text.tertiary }]}>
                  {SOURCE_LABELS[source]}
                </Text>
                <Pressable
                  onPress={() => setLevel(i, HitDiceService.roll(entry.hitDieSize), 'rolled')}
                  hitSlop={8}
                  accessibilityRole="button"
                  accessibilityLabel={`Roll ${entry.name} level ${i + 1} hit points`}
                >
                  <Text style={styles.rollIcon}>🎲</Text>
                </Pressable>
                <Pressable
                  onPress={() =>
                    setLevel(i, HitDiceService.averageValue(entry.hitDieSize), 'average')
                  }
                  hitSlop={8}
                  accessibilityRole="button"
                  accessibilityLabel={`Average ${entry.name} level ${i + 1} hit points`}
                >
                  <Text style={[styles.avgIcon, { color: colors.text.tertiary }]}>ø</Text>
                </Pressable>
              </View>
            );
          })}

          <Text style={[styles.footnote, { color: colors.text.tertiary }]}>
            Constitution is added across every Hit Die by the character sheet — do not include it
            here.
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    marginTop: 8,
    paddingTop: 8,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  headerLabel: {
    fontSize: 13,
    fontWeight: '600',
  },
  headerTotal: {
    fontSize: 13,
    flex: 1,
  },
  chevron: {
    fontSize: 14,
  },
  bulkRow: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 8,
  },
  bulkButton: {
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  bulkButtonText: {
    fontSize: 12,
  },
  levelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 6,
  },
  levelLabel: {
    fontSize: 12,
    width: 56,
  },
  levelInput: {
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
    width: 48,
    textAlign: 'center',
    fontSize: 13,
  },
  sourceLabel: {
    fontSize: 11,
    width: 48,
  },
  rollIcon: {
    fontSize: 14,
  },
  avgIcon: {
    fontSize: 14,
    fontWeight: '600',
  },
  footnote: {
    fontSize: 11,
    fontStyle: 'italic',
    marginTop: 8,
  },
});
