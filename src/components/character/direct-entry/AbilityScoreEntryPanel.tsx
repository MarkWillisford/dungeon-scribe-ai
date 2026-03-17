import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { OrnatePanel } from '@/components/ui/OrnatePanel';
import { AutoComputedValue } from '@/components/ui/AutoComputedValue';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setAbilityField } from '@/store/slices/characterEntrySlice';
import { type AbilityKey, type DraftAbilityScore } from '@/types/characterDraft';

// ---- Helpers ----

function computeTotal(score: DraftAbilityScore): number {
  return (
    score.base +
    score.racial +
    score.inherent +
    score.enhancement +
    score.other +
    score.levelIncrements
  );
}

function computeModifier(total: number): number {
  return Math.floor((total - 10) / 2);
}

function formatModifier(mod: number): string {
  return mod >= 0 ? `+${mod}` : `${mod}`;
}

const ABILITY_LABELS: Record<AbilityKey, string> = {
  str: 'STR',
  dex: 'DEX',
  con: 'CON',
  int: 'INT',
  wis: 'WIS',
  cha: 'CHA',
};

const ABILITY_ORDER: AbilityKey[] = ['str', 'dex', 'con', 'int', 'wis', 'cha'];

// ---- Score Card (collapsed) ----

interface ScoreCardProps {
  abilityKey: AbilityKey;
  score: DraftAbilityScore;
  isExpanded: boolean;
  onPress: () => void;
}

function ScoreCard({ abilityKey, score, isExpanded, onPress }: ScoreCardProps) {
  const { colors, fantasy, isDark } = useTheme();
  const total = computeTotal(score);
  const mod = computeModifier(total);

  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.scoreCard,
        {
          backgroundColor: isExpanded
            ? isDark
              ? 'rgba(212,175,55,0.12)'
              : 'rgba(140,90,40,0.08)'
            : isDark
              ? colors.bg.tertiary
              : colors.bg.secondary,
          borderColor: isExpanded ? fantasy.gold : colors.border.DEFAULT,
        },
      ]}
      accessibilityRole="button"
      accessibilityLabel={`${ABILITY_LABELS[abilityKey]} ${total}, modifier ${formatModifier(mod)}`}
      accessibilityHint={isExpanded ? 'Tap to collapse breakdown' : 'Tap to expand breakdown'}
    >
      <Text style={[styles.abilityLabel, { color: colors.text.secondary }]}>
        {ABILITY_LABELS[abilityKey]}
      </Text>
      <Text style={[styles.abilityTotal, { color: colors.text.primary }]}>{total}</Text>
      <Text style={[styles.abilityMod, { color: fantasy.gold }]}>{formatModifier(mod)}</Text>
    </Pressable>
  );
}

// ---- Breakdown Row ----

interface BreakdownRowProps {
  label: string;
  value: number;
  isLast?: boolean;
  editable?: boolean;
  readOnlyNote?: string;
  onChangeValue?: (value: number) => void;
}

function BreakdownRow({
  label,
  value,
  isLast = false,
  editable = false,
  readOnlyNote,
  onChangeValue,
}: BreakdownRowProps) {
  const { colors, fantasy } = useTheme();
  const displayValue = value >= 0 ? `+${value}` : `${value}`;

  return (
    <View
      style={[
        styles.breakdownRow,
        !isLast && {
          borderBottomColor: colors.border.DEFAULT,
          borderBottomWidth: StyleSheet.hairlineWidth,
        },
      ]}
    >
      <Text style={[styles.breakdownLabel, { color: colors.text.secondary }]}>
        {isLast ? '└' : '├'} {label}
      </Text>
      {editable && onChangeValue ? (
        <TextInput
          value={String(value)}
          onChangeText={(t) => {
            const n = parseInt(t, 10);
            if (!isNaN(n)) onChangeValue(n);
            else if (t === '' || t === '-') onChangeValue(0);
          }}
          keyboardType="number-pad"
          selectTextOnFocus
          style={[
            styles.breakdownInput,
            {
              color: colors.text.primary,
              borderColor: colors.border.DEFAULT,
              backgroundColor: colors.bg.tertiary,
            },
          ]}
          accessibilityLabel={label}
        />
      ) : (
        <AutoComputedValue value={displayValue} style={styles.breakdownComputed} />
      )}
      {readOnlyNote && (
        <Text style={[styles.breakdownNote, { color: colors.text.tertiary }]}>{readOnlyNote}</Text>
      )}
    </View>
  );
}

// ---- Expanded Breakdown ----

interface BreakdownPanelProps {
  abilityKey: AbilityKey;
  score: DraftAbilityScore;
  onCollapse: () => void;
}

function BreakdownPanel({ abilityKey, score, onCollapse }: BreakdownPanelProps) {
  const { colors, fantasy, isDark } = useTheme();
  const dispatch = useAppDispatch();
  const total = computeTotal(score);
  const mod = computeModifier(total);

  const dispatchField = (field: keyof DraftAbilityScore, value: number) => {
    dispatch(setAbilityField({ ability: abilityKey, field, value }));
  };

  return (
    <View
      style={[
        styles.breakdown,
        {
          backgroundColor: isDark ? colors.bg.primary : colors.bg.secondary,
          borderColor: fantasy.gold,
        },
      ]}
    >
      {/* Header */}
      <Pressable
        onPress={onCollapse}
        style={styles.breakdownHeader}
        accessibilityRole="button"
        accessibilityLabel="Collapse breakdown"
      >
        <Text style={[styles.breakdownTitle, { color: isDark ? fantasy.gold : fantasy.darkWood }]}>
          {ABILITY_LABELS[abilityKey]}
        </Text>
        <Text style={[styles.breakdownTotalLabel, { color: colors.text.secondary }]}>
          Total: <Text style={{ color: colors.text.primary, fontWeight: '700' }}>{total}</Text>
          {'   '}Mod:{' '}
          <Text style={{ color: fantasy.gold, fontWeight: '700' }}>{formatModifier(mod)}</Text>
        </Text>
        <Text style={[styles.collapseArrow, { color: colors.text.tertiary }]}>▲ collapse</Text>
      </Pressable>

      {/* Breakdown rows */}
      <View style={[styles.breakdownRows, { borderColor: colors.border.DEFAULT }]}>
        <BreakdownRow
          label="Base"
          value={score.base}
          editable
          onChangeValue={(v) => dispatchField('base', v)}
        />
        <BreakdownRow label="Racial" value={score.racial} readOnlyNote="auto from race" />
        <BreakdownRow
          label="Inherent"
          value={score.inherent}
          editable
          onChangeValue={(v) => dispatchField('inherent', v)}
          readOnlyNote="tomes / wishes"
        />
        <BreakdownRow
          label="Level +1s"
          value={score.levelIncrements}
          readOnlyNote="from increment slots"
        />
        <BreakdownRow label="Enhancement" value={score.enhancement} readOnlyNote="auto from gear" />
        <BreakdownRow
          label="Other"
          value={score.other}
          editable
          isLast
          onChangeValue={(v) => dispatchField('other', v)}
          readOnlyNote="morale / sacred / misc"
        />
      </View>

      {/* Computed total */}
      <View style={styles.breakdownFooter}>
        <Text style={[styles.computedLabel, { color: colors.text.secondary }]}>
          Computed total:
        </Text>
        <Text style={[styles.computedValue, { color: fantasy.gold }]}>{total}</Text>
      </View>
    </View>
  );
}

// ---- Main Panel ----

export function AbilityScoreEntryPanel() {
  const draft = useAppSelector((state) => state.characterEntry.draft);
  const [expandedAbility, setExpandedAbility] = useState<AbilityKey | null>(null);

  const handleCardPress = (key: AbilityKey) => {
    setExpandedAbility((prev) => (prev === key ? null : key));
  };

  return (
    <OrnatePanel title="Ability Scores">
      {/* 3×2 grid */}
      <View style={styles.grid}>
        {ABILITY_ORDER.map((key) => (
          <ScoreCard
            key={key}
            abilityKey={key}
            score={draft.abilities[key]}
            isExpanded={expandedAbility === key}
            onPress={() => handleCardPress(key)}
          />
        ))}
      </View>

      {/* Expanded breakdown */}
      {expandedAbility && (
        <BreakdownPanel
          abilityKey={expandedAbility}
          score={draft.abilities[expandedAbility]}
          onCollapse={() => setExpandedAbility(null)}
        />
      )}

      {expandedAbility === null && (
        <Text style={[styles.hint, { color: '#888' }]}>Tap a score to expand its breakdown</Text>
      )}
    </OrnatePanel>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 12,
  },
  scoreCard: {
    width: '31%',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 4,
    borderRadius: 8,
    borderWidth: 1,
  },
  abilityLabel: {
    fontFamily: 'Cinzel',
    fontSize: 11,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 4,
  },
  abilityTotal: {
    fontFamily: 'LibreBaskerville',
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 28,
  },
  abilityMod: {
    fontFamily: 'LibreBaskerville',
    fontSize: 14,
    fontWeight: '600',
    marginTop: 2,
  },
  hint: {
    fontFamily: 'LibreBaskerville',
    fontSize: 12,
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: 4,
  },
  breakdown: {
    borderRadius: 8,
    borderWidth: 1,
    overflow: 'hidden',
    marginTop: 4,
  },
  breakdownHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
    gap: 8,
  },
  breakdownTitle: {
    fontFamily: 'Cinzel',
    fontSize: 15,
    fontWeight: '700',
  },
  breakdownTotalLabel: {
    fontFamily: 'LibreBaskerville',
    fontSize: 13,
    flex: 1,
  },
  collapseArrow: {
    fontFamily: 'LibreBaskerville',
    fontSize: 12,
  },
  breakdownRows: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  breakdownRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    gap: 8,
  },
  breakdownLabel: {
    fontFamily: 'LibreBaskerville',
    fontSize: 13,
    width: 120,
  },
  breakdownInput: {
    fontFamily: 'LibreBaskerville',
    fontSize: 15,
    fontWeight: '600',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
    width: 56,
    textAlign: 'center',
    minHeight: 36,
  },
  breakdownComputed: {
    minWidth: 56,
    alignItems: 'center',
  },
  breakdownNote: {
    fontFamily: 'LibreBaskerville',
    fontSize: 11,
    fontStyle: 'italic',
    flex: 1,
  },
  breakdownFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    gap: 8,
  },
  computedLabel: {
    fontFamily: 'LibreBaskerville',
    fontSize: 13,
  },
  computedValue: {
    fontFamily: 'LibreBaskerville',
    fontSize: 16,
    fontWeight: '700',
  },
});
