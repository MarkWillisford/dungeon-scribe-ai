import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { InlinePicker, type PickerOption } from '@/components/ui/InlinePicker';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setManualFeatureBonus, clearManualFeatureBonus } from '@/store/slices/characterEntrySlice';
import { GameDataService } from '@/services/GameDataService';
import { BonusType, type EffectTarget } from '@/types/base';
import type { ManualFeatureBonus } from '@/types';
import type { ClassEntry } from '@/types/classes';
import type { ClassFeatureData } from '@/data/classes/types';

// ---- Bonus type picker options ----

const BONUS_TYPE_OPTIONS: PickerOption[] = [
  { label: 'Alchemical', value: BonusType.ALCHEMICAL },
  { label: 'Armor', value: BonusType.ARMOR },
  { label: 'Circumstance', value: BonusType.CIRCUMSTANCE },
  { label: 'Competence', value: BonusType.COMPETENCE },
  { label: 'Deflection', value: BonusType.DEFLECTION },
  { label: 'Dodge', value: BonusType.DODGE },
  { label: 'Enhancement', value: BonusType.ENHANCEMENT },
  { label: 'Inherent', value: BonusType.INHERENT },
  { label: 'Insight', value: BonusType.INSIGHT },
  { label: 'Luck', value: BonusType.LUCK },
  { label: 'Morale', value: BonusType.MORALE },
  { label: 'Natural', value: BonusType.NATURAL },
  { label: 'Profane', value: BonusType.PROFANE },
  { label: 'Racial', value: BonusType.RACIAL },
  { label: 'Resistance', value: BonusType.RESISTANCE },
  { label: 'Sacred', value: BonusType.SACRED },
  { label: 'Shield', value: BonusType.SHIELD },
  { label: 'Size', value: BonusType.SIZE },
  { label: 'Trait', value: BonusType.TRAIT },
  { label: 'Untyped', value: BonusType.UNTYPED },
];

// ---- Stat target picker options ----

const STAT_TARGET_OPTIONS: PickerOption[] = [
  { label: 'STR', value: 'ability.str' },
  { label: 'DEX', value: 'ability.dex' },
  { label: 'CON', value: 'ability.con' },
  { label: 'INT', value: 'ability.int' },
  { label: 'WIS', value: 'ability.wis' },
  { label: 'CHA', value: 'ability.cha' },
  { label: 'AC (all)', value: 'ac' },
  { label: 'AC (armor)', value: 'ac.armor' },
  { label: 'AC (shield)', value: 'ac.shield' },
  { label: 'AC (natural)', value: 'ac.natural' },
  { label: 'AC (deflection)', value: 'ac.deflection' },
  { label: 'AC (dodge)', value: 'ac.dodge' },
  { label: 'Fortitude', value: 'save.fortitude' },
  { label: 'Reflex', value: 'save.reflex' },
  { label: 'Will', value: 'save.will' },
  { label: 'All saves', value: 'save.all' },
  { label: 'Attack (melee)', value: 'attack.melee' },
  { label: 'Attack (ranged)', value: 'attack.ranged' },
  { label: 'Attack (all)', value: 'attack.all' },
  { label: 'Damage (melee)', value: 'damage.melee' },
  { label: 'Damage (ranged)', value: 'damage.ranged' },
  { label: 'Initiative', value: 'initiative' },
  { label: 'CMB', value: 'cmb' },
  { label: 'CMD', value: 'cmd' },
  { label: 'HP', value: 'hp' },
  { label: 'HP per level', value: 'hp.per_level' },
  { label: 'Speed (base)', value: 'speed.base' },
];

// ---- Single unmodelled feature row ----

interface UnmodelledFeatureRowProps {
  classEntryId: string;
  feature: ClassFeatureData;
  existing: ManualFeatureBonus | undefined;
}

function UnmodelledFeatureRow({ classEntryId, feature, existing }: UnmodelledFeatureRowProps) {
  const { colors, fantasy, isDark } = useTheme();
  const dispatch = useAppDispatch();

  const [bonusType, setBonusType] = useState<BonusType>(
    (existing?.bonusType as BonusType) ?? BonusType.UNTYPED,
  );
  const [target, setTarget] = useState<EffectTarget>(
    (existing?.target ?? 'ability.str') as EffectTarget,
  );
  const [rawValue, setRawValue] = useState<string>(existing ? String(existing.value) : '');
  const [expanded, setExpanded] = useState(!!existing);

  const hasEntry = !!existing;

  const handleApply = () => {
    const v = parseInt(rawValue, 10);
    if (isNaN(v) || v === 0) return;
    dispatch(
      setManualFeatureBonus({
        classEntryId,
        featureName: feature.name,
        bonusType,
        target,
        value: v,
      }),
    );
  };

  const handleClear = () => {
    dispatch(clearManualFeatureBonus({ classEntryId, featureName: feature.name }));
    setRawValue('');
  };

  const targetLabel = STAT_TARGET_OPTIONS.find((o) => o.value === target)?.label ?? target;
  const bonusLabel = BONUS_TYPE_OPTIONS.find((o) => o.value === bonusType)?.label ?? bonusType;

  return (
    <View
      style={[
        rowStyles.container,
        { borderColor: isDark ? colors.border.DEFAULT : colors.border.DEFAULT },
      ]}
    >
      <Pressable
        onPress={() => setExpanded((v) => !v)}
        style={rowStyles.header}
        accessibilityRole="button"
        accessibilityLabel={`${feature.name}: unmodelled feature, tap to ${expanded ? 'collapse' : 'expand'}`}
      >
        <View style={rowStyles.headerLeft}>
          <View
            style={[
              rowStyles.badge,
              {
                backgroundColor: isDark ? 'rgba(245,158,11,0.18)' : 'rgba(245,158,11,0.12)',
              },
            ]}
          >
            <Text style={[rowStyles.badgeText, { color: '#F59E0B' }]}>gap</Text>
          </View>
          <Text style={[rowStyles.featureName, { color: colors.text.primary }]}>
            {feature.name}
          </Text>
        </View>
        <View style={rowStyles.headerRight}>
          {hasEntry && (
            <Text style={[rowStyles.entryPreview, { color: fantasy.bronze }]}>
              {existing.value > 0 ? '+' : ''}
              {existing.value} {bonusLabel} → {targetLabel}
            </Text>
          )}
          <Text style={[rowStyles.chevron, { color: colors.text.tertiary }]}>
            {expanded ? '▾' : '▸'}
          </Text>
        </View>
      </Pressable>

      {expanded && (
        <View style={[rowStyles.body, { borderTopColor: colors.border.DEFAULT }]}>
          <Text style={[rowStyles.description, { color: colors.text.tertiary }]} numberOfLines={3}>
            {feature.shortDescription ?? feature.description}
          </Text>

          <View style={rowStyles.inputRow}>
            <InlinePicker
              label="Bonus type"
              value={bonusType}
              options={BONUS_TYPE_OPTIONS}
              onValueChange={(v) => setBonusType(v as BonusType)}
              style={rowStyles.typePicker}
            />
            <InlinePicker
              label="Applies to"
              value={target}
              options={STAT_TARGET_OPTIONS}
              onValueChange={(v) => setTarget(v as EffectTarget)}
              style={rowStyles.targetPicker}
            />
            <TextInput
              value={rawValue}
              onChangeText={setRawValue}
              placeholder="+N"
              keyboardType="numbers-and-punctuation"
              selectTextOnFocus
              style={[
                rowStyles.valueInput,
                {
                  color: colors.text.primary,
                  borderColor: colors.border.DEFAULT,
                  backgroundColor: isDark ? colors.bg.tertiary : colors.bg.secondary,
                },
              ]}
              accessibilityLabel="Bonus value"
            />
          </View>

          <View style={rowStyles.actions}>
            <Pressable
              onPress={handleApply}
              style={[rowStyles.applyBtn, { backgroundColor: isDark ? '#8B5CF6' : '#7C3AED' }]}
              accessibilityRole="button"
              accessibilityLabel="Apply bonus"
            >
              <Text style={rowStyles.applyBtnText}>{hasEntry ? 'Update' : 'Apply'}</Text>
            </Pressable>
            {hasEntry && (
              <Pressable
                onPress={handleClear}
                style={[rowStyles.clearBtn, { borderColor: colors.border.DEFAULT }]}
                accessibilityRole="button"
                accessibilityLabel="Clear bonus"
              >
                <Text style={[rowStyles.clearBtnText, { color: colors.text.secondary }]}>
                  Clear
                </Text>
              </Pressable>
            )}
          </View>
        </View>
      )}
    </View>
  );
}

// ---- Section ----

interface ClassFeatureGapsSectionProps {
  entry: ClassEntry;
}

export function ClassFeatureGapsSection({ entry }: ClassFeatureGapsSectionProps) {
  const { colors, fantasy, isDark } = useTheme();
  const [unmodelledFeatures, setUnmodelledFeatures] = useState<ClassFeatureData[]>([]);
  const [expanded, setExpanded] = useState(false);

  const manualFeatureBonuses = useAppSelector(
    (state) => state.characterEntry.character.manualFeatureBonuses ?? [],
  );

  const entryId = entry.id ?? entry.name;

  useEffect(() => {
    let cancelled = false;
    GameDataService.getClassByName(entry.name)
      .then((classData) => {
        if (cancelled || !classData) return;
        const featureNames = new Set(entry.classFeatures.map((f) => f.name));
        const unmodelled = classData.classFeatures.filter(
          (f) => f.effectsStatus === 'unmodelled' && featureNames.has(f.name),
        );
        if (!cancelled) setUnmodelledFeatures(unmodelled);
      })
      .catch(() => {
        // Silently ignore — gaps section is a best-effort enhancement
      });
    return () => {
      cancelled = true;
    };
  }, [entry.name, entry.classFeatures]);

  if (unmodelledFeatures.length === 0) return null;

  const entryBonuses = manualFeatureBonuses.filter((b) => b.classEntryId === entryId);

  return (
    <View style={[sectionStyles.wrapper, { borderTopColor: colors.border.DEFAULT }]}>
      <Pressable
        onPress={() => setExpanded((v) => !v)}
        style={sectionStyles.header}
        accessibilityRole="button"
        accessibilityLabel={`${unmodelledFeatures.length} unmodelled feature${unmodelledFeatures.length !== 1 ? 's' : ''}, tap to ${expanded ? 'collapse' : 'expand'}`}
      >
        <View style={sectionStyles.headerLeft}>
          <Text
            style={[sectionStyles.chevron, { color: isDark ? fantasy.gold : fantasy.darkWood }]}
          >
            {expanded ? '▾' : '▸'}
          </Text>
          <Text style={[sectionStyles.title, { color: isDark ? fantasy.gold : fantasy.darkWood }]}>
            Unmodelled Features
          </Text>
          <View
            style={[
              sectionStyles.countBadge,
              {
                backgroundColor: isDark ? 'rgba(245,158,11,0.18)' : 'rgba(245,158,11,0.12)',
              },
            ]}
          >
            <Text style={[sectionStyles.countText, { color: '#F59E0B' }]}>
              {unmodelledFeatures.length}
            </Text>
          </View>
        </View>
        <Text style={[sectionStyles.enteredCount, { color: colors.text.tertiary }]}>
          {entryBonuses.length > 0 ? `${entryBonuses.length} entered` : 'tap to enter bonuses'}
        </Text>
      </Pressable>

      {expanded && (
        <View style={sectionStyles.list}>
          {unmodelledFeatures.map((feature) => (
            <UnmodelledFeatureRow
              key={feature.name}
              classEntryId={entryId}
              feature={feature}
              existing={entryBonuses.find((b) => b.featureName === feature.name)}
            />
          ))}
        </View>
      )}
    </View>
  );
}

const sectionStyles = StyleSheet.create({
  wrapper: {
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  chevron: {
    fontSize: 12,
  },
  title: {
    fontFamily: 'LibreBaskerville',
    fontSize: 13,
    fontWeight: '600',
  },
  countBadge: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 10,
  },
  countText: {
    fontFamily: 'Cinzel',
    fontSize: 10,
    fontWeight: '700',
  },
  enteredCount: {
    fontFamily: 'LibreBaskerville',
    fontSize: 11,
    fontStyle: 'italic',
  },
  list: {
    paddingHorizontal: 8,
    paddingBottom: 8,
    gap: 6,
  },
});

const rowStyles = StyleSheet.create({
  container: {
    borderRadius: 8,
    borderWidth: StyleSheet.hairlineWidth,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    flex: 1,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  badge: {
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 4,
  },
  badgeText: {
    fontFamily: 'Cinzel',
    fontSize: 9,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  featureName: {
    fontFamily: 'LibreBaskerville',
    fontSize: 13,
    fontWeight: '600',
    flex: 1,
  },
  entryPreview: {
    fontFamily: 'LibreBaskerville',
    fontSize: 11,
    fontStyle: 'italic',
  },
  chevron: {
    fontSize: 11,
  },
  body: {
    paddingHorizontal: 10,
    paddingBottom: 10,
    paddingTop: 8,
    borderTopWidth: StyleSheet.hairlineWidth,
    gap: 8,
  },
  description: {
    fontFamily: 'LibreBaskerville',
    fontSize: 11,
    lineHeight: 16,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  typePicker: {
    flex: 1,
  },
  targetPicker: {
    flex: 1,
  },
  valueInput: {
    fontFamily: 'LibreBaskerville',
    fontSize: 14,
    fontWeight: '700',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 6,
    width: 52,
    textAlign: 'center',
    minHeight: 36,
  },
  actions: {
    flexDirection: 'row',
    gap: 8,
  },
  applyBtn: {
    flex: 1,
    borderRadius: 6,
    paddingVertical: 7,
    alignItems: 'center',
  },
  applyBtnText: {
    fontFamily: 'Cinzel',
    fontSize: 12,
    fontWeight: '700',
    color: '#FFFFFF',
    letterSpacing: 0.5,
  },
  clearBtn: {
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 6,
    borderWidth: 1,
    alignItems: 'center',
  },
  clearBtnText: {
    fontFamily: 'LibreBaskerville',
    fontSize: 12,
  },
});
