import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, ScrollView, StyleSheet } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { OrnatePanel } from '@/components/ui/OrnatePanel';
import { AutoComputedValue } from '@/components/ui/AutoComputedValue';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  setAbilityBase,
  setAbilityInherent,
  addOtherBonus,
  removeOtherBonus,
  updateOtherBonus,
  setRacialFlexAbility,
} from '@/store/slices/characterEntrySlice';
import type { AbilityKey } from '@/types/abilities';
import type { AbilityScore } from '@/types/abilities';
import type { ManualAbilityBonus } from '@/types';
import { BonusType, type Bonus } from '@/types/base';

// ---- Helpers ----

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
  score: AbilityScore;
  isExpanded: boolean;
  onPress: () => void;
}

function ScoreCard({ abilityKey, score, isExpanded, onPress }: ScoreCardProps) {
  const { colors, fantasy, isDark } = useTheme();
  const total = score.total;
  const mod = score.modifier;

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
  const { colors } = useTheme();
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

// ---- Other Bonus Types ----

const ABILITY_BONUS_TYPES: BonusType[] = [
  BonusType.MORALE,
  BonusType.SACRED,
  BonusType.PROFANE,
  BonusType.INSIGHT,
  BonusType.LUCK,
  BonusType.ALCHEMICAL,
  BonusType.CIRCUMSTANCE,
  BonusType.COMPETENCE,
  BonusType.INHERENT,
  BonusType.SIZE,
  BonusType.UNTYPED,
];

const BONUS_TYPE_LABELS: Partial<Record<BonusType, string>> = {
  [BonusType.MORALE]: 'Morale',
  [BonusType.SACRED]: 'Sacred',
  [BonusType.PROFANE]: 'Profane',
  [BonusType.INSIGHT]: 'Insight',
  [BonusType.LUCK]: 'Luck',
  [BonusType.ALCHEMICAL]: 'Alchemical',
  [BonusType.CIRCUMSTANCE]: 'Circumstance',
  [BonusType.COMPETENCE]: 'Competence',
  [BonusType.INHERENT]: 'Inherent',
  [BonusType.SIZE]: 'Size',
  [BonusType.UNTYPED]: 'Untyped',
};

function computeOtherEffective(bonuses: ManualAbilityBonus[]): number {
  if (bonuses.length === 0) return 0;
  const byType = new Map<BonusType, number[]>();
  for (const b of bonuses) {
    const list = byType.get(b.bonusType) ?? [];
    list.push(b.value);
    byType.set(b.bonusType, list);
  }
  let total = 0;
  for (const [type, values] of byType) {
    if (type === BonusType.UNTYPED || type === BonusType.DODGE) {
      // Untyped and dodge always stack
      total += values.reduce((a, v) => a + v, 0);
    } else {
      // Typed bonuses: positives don't stack (take highest), penalties do stack (sum all negatives)
      const positives = values.filter((v) => v > 0);
      const negatives = values.filter((v) => v < 0);
      if (positives.length > 0) total += Math.max(...positives);
      total += negatives.reduce((a, v) => a + v, 0);
    }
  }
  return total;
}

// ---- Auto Pipeline Bonus Row (read-only: from templates, feats, racial traits, buffs) ----

interface AutoPipelineRowProps {
  bonuses: Bonus[];
}

function AutoPipelineRow({ bonuses }: AutoPipelineRowProps) {
  const { colors, fantasy, isDark } = useTheme();
  const [expanded, setExpanded] = useState(false);
  const total = bonuses.reduce((sum, b) => sum + b.value, 0);

  return (
    <View
      style={[
        styles.breakdownRow,
        { borderBottomColor: colors.border.DEFAULT, borderBottomWidth: StyleSheet.hairlineWidth },
      ]}
    >
      <Text style={[styles.breakdownLabel, { color: colors.text.secondary }]}>├ Auto</Text>
      <AutoComputedValue
        value={total >= 0 ? `+${total}` : `${total}`}
        style={styles.breakdownComputed}
      />
      <Pressable onPress={() => setExpanded((p) => !p)} style={{ flex: 1 }}>
        <Text style={[styles.breakdownNote, { color: colors.text.tertiary }]}>
          {expanded
            ? bonuses
                .map((b) => `${b.value >= 0 ? '+' : ''}${b.value} ${b.type} (${b.source})`)
                .join(', ')
            : `${bonuses.length} bonus${bonuses.length !== 1 ? 'es' : ''} — tap to expand`}
        </Text>
      </Pressable>
    </View>
  );
}

// ---- Shared bonus form (used for both add and edit) ----

interface BonusFormProps {
  value: string;
  type: BonusType;
  source: string;
  onChangeValue: (v: string) => void;
  onChangeType: (t: BonusType) => void;
  onChangeSource: (s: string) => void;
  onConfirm: () => void;
  onCancel: () => void;
  confirmLabel: string;
}

function BonusForm({
  value,
  type,
  source,
  onChangeValue,
  onChangeType,
  onChangeSource,
  onConfirm,
  onCancel,
  confirmLabel,
}: BonusFormProps) {
  const { colors, fantasy, isDark } = useTheme();
  return (
    <View style={[styles.addBonusForm, { borderColor: colors.border.DEFAULT }]}>
      <View style={styles.addBonusInputRow}>
        <TextInput
          value={value}
          onChangeText={onChangeValue}
          keyboardType="numeric"
          selectTextOnFocus
          placeholder="0"
          placeholderTextColor={colors.text.tertiary}
          style={[
            styles.addBonusValueInput,
            {
              color: colors.text.primary,
              borderColor: colors.border.DEFAULT,
              backgroundColor: colors.bg.tertiary,
            },
          ]}
          accessibilityLabel="Bonus value"
        />
        <TextInput
          value={source}
          onChangeText={onChangeSource}
          placeholder="Source (optional)"
          placeholderTextColor={colors.text.tertiary}
          style={[
            styles.addBonusSourceInput,
            {
              color: colors.text.primary,
              borderColor: colors.border.DEFAULT,
              backgroundColor: colors.bg.tertiary,
            },
          ]}
          accessibilityLabel="Bonus source"
        />
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.typePicker}>
        {ABILITY_BONUS_TYPES.map((bt) => (
          <Pressable
            key={bt}
            onPress={() => onChangeType(bt)}
            style={[
              styles.typePill,
              {
                borderColor: type === bt ? fantasy.gold : colors.border.DEFAULT,
                backgroundColor:
                  type === bt
                    ? isDark
                      ? 'rgba(212,175,55,0.2)'
                      : 'rgba(140,90,40,0.1)'
                    : 'transparent',
              },
            ]}
            accessibilityRole="radio"
            accessibilityState={{ checked: type === bt }}
          >
            <Text
              style={[
                styles.typePillText,
                { color: type === bt ? fantasy.gold : colors.text.secondary },
              ]}
            >
              {BONUS_TYPE_LABELS[bt] ?? bt}
            </Text>
          </Pressable>
        ))}
      </ScrollView>
      <View style={styles.addBonusActions}>
        <Pressable
          onPress={onConfirm}
          style={[styles.addBonusConfirmBtn, { backgroundColor: fantasy.gold }]}
          accessibilityLabel={`${confirmLabel} bonus`}
        >
          <Text style={{ fontFamily: 'Cinzel', fontSize: 12, fontWeight: '700', color: '#1a0f00' }}>
            {confirmLabel}
          </Text>
        </Pressable>
        <Pressable
          onPress={onCancel}
          style={[styles.addBonusCancelBtn, { borderColor: colors.border.DEFAULT }]}
          accessibilityLabel="Cancel"
        >
          <Text
            style={{ fontFamily: 'LibreBaskerville', fontSize: 12, color: colors.text.secondary }}
          >
            Cancel
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

// ---- Other Bonus Section ----

interface OtherBonusSectionProps {
  abilityKey: AbilityKey;
  bonuses: ManualAbilityBonus[];
}

function OtherBonusSection({ abilityKey, bonuses }: OtherBonusSectionProps) {
  const { colors, fantasy, isDark } = useTheme();
  const dispatch = useAppDispatch();
  // null = not editing/adding; -1 = adding new; >= 0 = editing that index
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [formValue, setFormValue] = useState('0');
  const [formType, setFormType] = useState<BonusType>(BonusType.MORALE);
  const [formSource, setFormSource] = useState('');

  const effectiveTotal = computeOtherEffective(bonuses);

  const openAdd = () => {
    setFormValue('0');
    setFormType(BonusType.MORALE);
    setFormSource('');
    setActiveIdx(-1);
  };

  const openEdit = (idx: number) => {
    const b = bonuses[idx];
    setFormValue(String(b.value));
    setFormType(b.bonusType);
    setFormSource(b.source ?? '');
    setActiveIdx(idx);
  };

  const closeForm = () => {
    setActiveIdx(null);
    setFormValue('0');
    setFormType(BonusType.MORALE);
    setFormSource('');
  };

  const handleConfirm = () => {
    const v = parseInt(formValue, 10);
    if (isNaN(v)) return;
    if (activeIdx === -1) {
      dispatch(
        addOtherBonus({
          ability: abilityKey,
          bonusType: formType,
          value: v,
          source: formSource.trim() || undefined,
        }),
      );
    } else if (activeIdx !== null) {
      dispatch(
        updateOtherBonus({
          ability: abilityKey,
          index: activeIdx,
          bonusType: formType,
          value: v,
          source: formSource.trim() || undefined,
        }),
      );
    }
    closeForm();
  };

  const isAdding = activeIdx === -1;

  return (
    <View>
      {bonuses.map((b, idx) => (
        <View key={idx}>
          <Pressable
            onPress={() => openEdit(idx)}
            style={[
              styles.bonusRow,
              {
                borderBottomColor: colors.border.DEFAULT,
                borderBottomWidth: StyleSheet.hairlineWidth,
              },
              activeIdx === idx && {
                backgroundColor: isDark ? 'rgba(212,175,55,0.06)' : 'rgba(140,90,40,0.04)',
              },
            ]}
            accessibilityRole="button"
            accessibilityLabel={`Edit ${BONUS_TYPE_LABELS[b.bonusType] ?? b.bonusType} bonus`}
          >
            <Text style={[styles.bonusValue, { color: colors.text.primary }]}>
              {b.value >= 0 ? `+${b.value}` : `${b.value}`}
            </Text>
            <View
              style={[
                styles.bonusTypePill,
                {
                  backgroundColor: isDark ? 'rgba(212,175,55,0.2)' : 'rgba(140,90,40,0.1)',
                  borderColor: fantasy.gold,
                },
              ]}
            >
              <Text style={[styles.bonusTypePillText, { color: fantasy.gold }]}>
                {BONUS_TYPE_LABELS[b.bonusType] ?? b.bonusType}
              </Text>
            </View>
            {b.source ? (
              <Text style={[styles.bonusSource, { color: colors.text.tertiary }]} numberOfLines={1}>
                {b.source}
              </Text>
            ) : (
              <View style={styles.bonusSource} />
            )}
            <Pressable
              onPress={() => dispatch(removeOtherBonus({ ability: abilityKey, index: idx }))}
              style={styles.bonusRemoveBtn}
              accessibilityLabel={`Remove ${BONUS_TYPE_LABELS[b.bonusType] ?? b.bonusType} bonus`}
            >
              <Text style={{ color: colors.text.tertiary, fontSize: 16 }}>×</Text>
            </Pressable>
          </Pressable>

          {activeIdx === idx && (
            <BonusForm
              value={formValue}
              type={formType}
              source={formSource}
              onChangeValue={setFormValue}
              onChangeType={setFormType}
              onChangeSource={setFormSource}
              onConfirm={handleConfirm}
              onCancel={closeForm}
              confirmLabel="Save"
            />
          )}
        </View>
      ))}

      {isAdding ? (
        <BonusForm
          value={formValue}
          type={formType}
          source={formSource}
          onChangeValue={setFormValue}
          onChangeType={setFormType}
          onChangeSource={setFormSource}
          onConfirm={handleConfirm}
          onCancel={closeForm}
          confirmLabel="Add"
        />
      ) : (
        <Pressable
          onPress={openAdd}
          style={styles.addBonusButton}
          accessibilityLabel="Add typed bonus"
        >
          <Text style={[styles.addBonusButtonText, { color: colors.text.tertiary }]}>
            + Add bonus
          </Text>
        </Pressable>
      )}

      {bonuses.length > 0 && (
        <View style={styles.otherEffectiveRow}>
          <Text style={[styles.otherEffectiveLabel, { color: colors.text.secondary }]}>
            Effective:
          </Text>
          <AutoComputedValue
            value={effectiveTotal >= 0 ? `+${effectiveTotal}` : `${effectiveTotal}`}
            style={styles.breakdownComputed}
          />
          {bonuses.some(
            (b) => b.bonusType !== BonusType.UNTYPED && b.bonusType !== BonusType.DODGE,
          ) && (
            <Text style={[styles.otherStackNote, { color: colors.text.tertiary }]}>
              highest per type
            </Text>
          )}
        </View>
      )}
    </View>
  );
}

// ---- Expanded Breakdown ----

interface BreakdownPanelProps {
  abilityKey: AbilityKey;
  score: AbilityScore;
  onCollapse: () => void;
}

// ---- Breakdown Panel ----

function BreakdownPanel({ abilityKey, score, onCollapse }: BreakdownPanelProps) {
  const { colors, fantasy, isDark } = useTheme();
  const dispatch = useAppDispatch();
  const total = score.total;
  const mod = score.modifier;
  const enhancementBonus = score.bonuses.enhancement[0]?.value ?? 0;

  // All non-enhancement pipeline contributions (templates, racial feats, buffs, etc.)
  const autoPipelineBonuses = (
    Object.entries(score.bonuses) as [
      keyof typeof score.bonuses,
      typeof score.bonuses.enhancement,
    ][]
  )
    .filter(([key]) => key !== 'enhancement')
    .flatMap(([, arr]) => arr);
  const autoPipelineTotal = autoPipelineBonuses.reduce((sum, b) => sum + b.value, 0);

  const manualBonuses = useAppSelector((state) =>
    (state.characterEntry.character.manualAbilityBonuses ?? []).filter(
      (b) => b.ability === abilityKey,
    ),
  );

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
          onChangeValue={(v) => dispatch(setAbilityBase({ ability: abilityKey, value: v }))}
        />
        <BreakdownRow label="Racial" value={score.racial} readOnlyNote="auto from race" />
        <BreakdownRow
          label="Inherent"
          value={score.inherent}
          editable
          onChangeValue={(v) => dispatch(setAbilityInherent({ ability: abilityKey, value: v }))}
          readOnlyNote="tomes / wishes"
        />
        <BreakdownRow
          label="Level +1s"
          value={score.levelIncrements}
          readOnlyNote="from increment slots"
        />
        <BreakdownRow
          label="Enhancement"
          value={enhancementBonus}
          readOnlyNote="from equipped gear"
        />
        {autoPipelineTotal !== 0 && <AutoPipelineRow bonuses={autoPipelineBonuses} />}
        {/* Other — typed bonus list */}
        <View style={[styles.breakdownRow, styles.otherSection]}>
          <Text style={[styles.breakdownLabel, { color: colors.text.secondary }]}>{'└'} Other</Text>
        </View>
        <View style={styles.otherBonusContainer}>
          <OtherBonusSection abilityKey={abilityKey} bonuses={manualBonuses} />
        </View>
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

// ---- Racial Flex Picker ----

function RacialFlexPicker() {
  const { colors, fantasy, isDark } = useTheme();
  const dispatch = useAppDispatch();
  const current = useAppSelector((state) => state.characterEntry.character.info.racialFlexAbility);

  return (
    <View
      style={[
        styles.flexRow,
        {
          borderColor: colors.border.DEFAULT,
          backgroundColor: isDark ? colors.bg.tertiary : colors.bg.secondary,
        },
      ]}
    >
      <Text style={[styles.flexLabel, { color: colors.text.secondary }]}>Racial +2 ability:</Text>
      <View style={styles.flexButtons}>
        {ABILITY_ORDER.map((key) => {
          const isSelected = current === key;
          return (
            <Pressable
              key={key}
              onPress={() => dispatch(setRacialFlexAbility(key))}
              style={[
                styles.flexBtn,
                {
                  borderColor: isSelected ? fantasy.gold : colors.border.DEFAULT,
                  backgroundColor: isSelected
                    ? isDark
                      ? 'rgba(212,175,55,0.2)'
                      : 'rgba(140,90,40,0.1)'
                    : 'transparent',
                },
              ]}
              accessibilityRole="radio"
              accessibilityState={{ checked: isSelected }}
              accessibilityLabel={`Apply racial +2 to ${ABILITY_LABELS[key]}`}
            >
              <Text
                style={[
                  styles.flexBtnText,
                  { color: isSelected ? fantasy.gold : colors.text.secondary },
                ]}
              >
                {ABILITY_LABELS[key]}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

// ---- Main Panel ----

export function AbilityScoreEntryPanel() {
  const character = useAppSelector((state) => state.characterEntry.character);
  const [expandedAbility, setExpandedAbility] = useState<AbilityKey | null>(null);

  const handleCardPress = (key: AbilityKey) => {
    setExpandedAbility((prev) => (prev === key ? null : key));
  };

  return (
    <OrnatePanel title="Ability Scores">
      {/* Racial flex ability picker — shown for races with a flexible +2 */}
      {character.info.racialFlexBonus && <RacialFlexPicker />}

      {/* 3×2 grid */}
      <View style={styles.grid}>
        {ABILITY_ORDER.map((key) => (
          <ScoreCard
            key={key}
            abilityKey={key}
            score={character.abilityScores[key]}
            isExpanded={expandedAbility === key}
            onPress={() => handleCardPress(key)}
          />
        ))}
      </View>

      {/* Expanded breakdown */}
      {expandedAbility && (
        <BreakdownPanel
          abilityKey={expandedAbility}
          score={character.abilityScores[expandedAbility]}
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
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 10,
    gap: 8,
  },
  flexLabel: {
    fontFamily: 'LibreBaskerville',
    fontSize: 12,
    flexShrink: 0,
  },
  flexButtons: {
    flexDirection: 'row',
    flex: 1,
    gap: 4,
  },
  flexBtn: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 6,
    borderRadius: 6,
    borderWidth: 1,
  },
  flexBtnText: {
    fontFamily: 'Cinzel',
    fontSize: 10,
    fontWeight: '700',
  },
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
  // Other bonus section
  otherSection: {
    paddingBottom: 2,
  },
  otherBonusContainer: {
    paddingHorizontal: 12,
    paddingBottom: 8,
  },
  bonusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    gap: 6,
  },
  bonusValue: {
    fontFamily: 'LibreBaskerville',
    fontSize: 14,
    fontWeight: '600',
    width: 40,
    textAlign: 'center',
  },
  bonusTypePill: {
    borderRadius: 4,
    borderWidth: 1,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  bonusTypePillText: {
    fontFamily: 'Cinzel',
    fontSize: 10,
    fontWeight: '700',
  },
  bonusSource: {
    flex: 1,
    fontFamily: 'LibreBaskerville',
    fontSize: 11,
    fontStyle: 'italic',
  },
  bonusRemoveBtn: {
    width: 28,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addBonusButton: {
    paddingVertical: 6,
    alignItems: 'flex-start',
  },
  addBonusButtonText: {
    fontFamily: 'LibreBaskerville',
    fontSize: 12,
    fontStyle: 'italic',
  },
  addBonusForm: {
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 8,
    gap: 8,
    marginVertical: 4,
  },
  addBonusInputRow: {
    flexDirection: 'row',
    gap: 8,
  },
  addBonusValueInput: {
    fontFamily: 'LibreBaskerville',
    fontSize: 15,
    fontWeight: '600',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
    width: 60,
    textAlign: 'center',
    minHeight: 36,
  },
  addBonusSourceInput: {
    fontFamily: 'LibreBaskerville',
    fontSize: 13,
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
    flex: 1,
    minHeight: 36,
  },
  typePicker: {
    flexGrow: 0,
  },
  typePill: {
    borderRadius: 4,
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginRight: 4,
  },
  typePillText: {
    fontFamily: 'Cinzel',
    fontSize: 10,
    fontWeight: '700',
  },
  addBonusActions: {
    flexDirection: 'row',
    gap: 8,
  },
  addBonusConfirmBtn: {
    borderRadius: 4,
    paddingHorizontal: 16,
    paddingVertical: 6,
    alignItems: 'center',
  },
  addBonusCancelBtn: {
    borderRadius: 4,
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 6,
    alignItems: 'center',
  },
  otherEffectiveRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 4,
    gap: 6,
  },
  otherEffectiveLabel: {
    fontFamily: 'LibreBaskerville',
    fontSize: 12,
  },
  otherStackNote: {
    fontFamily: 'LibreBaskerville',
    fontSize: 11,
    fontStyle: 'italic',
  },
});
