import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { OrnatePanel } from '@/components/ui/OrnatePanel';
import { OrnateStatInput } from '@/components/ui/OrnateStatInput';
import { OrnateButton } from '@/components/ui/OrnateButton';
import { OrnateTab } from '@/components/ui/OrnateTab';
import { AbilityScoreMethod } from '@/types/character';

type AbilityKey = 'str' | 'dex' | 'con' | 'int' | 'wis' | 'cha';

interface AbilityScores {
  str: number;
  dex: number;
  con: number;
  int: number;
  wis: number;
  cha: number;
}

interface AbilityScoreEditorProps {
  method: AbilityScoreMethod;
  onMethodChange: (method: AbilityScoreMethod) => void;
  scores: AbilityScores;
  onScoreChange: (ability: AbilityKey, value: number) => void;
  pointsSpent?: number;
  pointsTotal?: number;
  onRollAll?: () => void;
  testID?: string;
}

const ABILITY_LABELS: Record<AbilityKey, string> = {
  str: 'STR',
  dex: 'DEX',
  con: 'CON',
  int: 'INT',
  wis: 'WIS',
  cha: 'CHA',
};

const ABILITY_KEYS: AbilityKey[] = ['str', 'dex', 'con', 'int', 'wis', 'cha'];

const METHOD_TABS = [
  { key: AbilityScoreMethod.PointBuy, label: 'Point Buy' },
  { key: AbilityScoreMethod.Roll4d6DropLowest, label: '4d6 Drop' },
  { key: AbilityScoreMethod.Roll3d6, label: '3d6' },
  { key: AbilityScoreMethod.RollCustom, label: 'Custom' },
];

function calculateModifier(score: number): number {
  return Math.floor((score - 10) / 2);
}

export function AbilityScoreEditor({
  method,
  onMethodChange,
  scores,
  onScoreChange,
  pointsSpent,
  pointsTotal,
  onRollAll,
  testID,
}: AbilityScoreEditorProps) {
  const { colors } = useTheme();

  const isPointBuy = method === AbilityScoreMethod.PointBuy;
  const isRolling =
    method === AbilityScoreMethod.Roll3d6 ||
    method === AbilityScoreMethod.Roll4d6DropLowest ||
    method === AbilityScoreMethod.RollCustom;

  const minScore = isPointBuy ? 7 : 3;
  const maxScore = isPointBuy ? 18 : 30;

  return (
    <View testID={testID}>
      <OrnateTab
        tabs={METHOD_TABS}
        activeTab={method}
        onTabChange={(key) => onMethodChange(key as AbilityScoreMethod)}
        testID="ability-method-tabs"
      />

      {isPointBuy && pointsTotal !== undefined && pointsSpent !== undefined && (
        <View style={styles.pointsBar}>
          <Text style={[styles.pointsLabel, { color: colors.text.secondary }]}>Points Spent:</Text>
          <Text
            style={[
              styles.pointsValue,
              {
                color:
                  pointsSpent > pointsTotal
                    ? colors.error.DEFAULT
                    : pointsSpent === pointsTotal
                      ? colors.success.DEFAULT
                      : colors.text.primary,
              },
            ]}
          >
            {pointsSpent} / {pointsTotal}
          </Text>
        </View>
      )}

      {isRolling && onRollAll && (
        <View style={styles.rollButtonContainer}>
          <OrnateButton
            title="Roll All Scores"
            onPress={onRollAll}
            variant="secondary"
            testID="roll-all-button"
          />
        </View>
      )}

      <OrnatePanel title="Ability Scores">
        <View style={styles.scoresGrid}>
          {ABILITY_KEYS.map((key) => (
            <OrnateStatInput
              key={key}
              label={ABILITY_LABELS[key]}
              value={scores[key]}
              modifier={calculateModifier(scores[key])}
              onIncrement={() => onScoreChange(key, scores[key] + 1)}
              onDecrement={() => onScoreChange(key, scores[key] - 1)}
              min={minScore}
              max={maxScore}
              testID={`ability-${key}`}
            />
          ))}
        </View>
      </OrnatePanel>
    </View>
  );
}

const styles = StyleSheet.create({
  pointsBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    gap: 8,
  },
  pointsLabel: {
    fontFamily: 'LibreBaskerville',
    fontSize: 14,
  },
  pointsValue: {
    fontFamily: 'Cinzel',
    fontSize: 16,
    fontWeight: '700',
  },
  rollButtonContainer: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  scoresGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    gap: 12,
  },
});
