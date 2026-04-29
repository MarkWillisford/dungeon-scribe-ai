import React, { useMemo } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { useAppDispatch } from '@/store/hooks';
import {
  setCompanionAbilityOverride,
  setCompanionHDAbilityIncrease,
} from '@/store/slices/characterEntrySlice';
import { CompanionService, AC_PROGRESSION } from '@/services/CompanionService';
import { InlinePicker } from '@/components/ui/InlinePicker';
import type { CompanionInstance } from '@/types/companions';
import type { AnimalCompanionEntry } from '@/types/animalCompanions';

export interface AbilitiesSectionProps {
  companion: CompanionInstance;
  entry: AnimalCompanionEntry | undefined;
}

type Ability = 'STR' | 'DEX' | 'CON' | 'INT' | 'WIS' | 'CHA';

const ABILITIES: Ability[] = ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA'];

const ABILITY_OPTIONS = [
  { label: '—', value: '' },
  { label: 'STR', value: 'STR' },
  { label: 'DEX', value: 'DEX' },
  { label: 'CON', value: 'CON' },
  { label: 'INT', value: 'INT' },
  { label: 'WIS', value: 'WIS' },
  { label: 'CHA', value: 'CHA' },
];

function abilityMod(score: number): number {
  return Math.floor((score - 10) / 2);
}

function signed(n: number): string {
  return n >= 0 ? `+${n}` : `${n}`;
}

export function AbilitiesSection({ companion, entry }: AbilitiesSectionProps) {
  const { colors, fantasy, isDark } = useTheme();
  const dispatch = useAppDispatch();

  const baseStats = useMemo(() => {
    if (!entry) return undefined;
    return CompanionService.computeBaseStatBlock(entry, companion.effectiveProgressionLevel);
  }, [entry, companion.effectiveProgressionLevel]);

  // Levels up to current effectiveProgressionLevel that grant an ability score
  // increase (from the AC progression table's special column).
  const increaseSlots = useMemo(() => {
    const slots: number[] = [];
    const cap = Math.min(companion.effectiveProgressionLevel, 30);
    for (let lvl = 1; lvl <= cap; lvl++) {
      if (AC_PROGRESSION[lvl]?.special.includes('Ability Score Increase')) slots.push(lvl);
    }
    return slots;
  }, [companion.effectiveProgressionLevel]);

  // Sum of chosen HD increases per ability.
  const hdBonusByAbility = useMemo(() => {
    const totals: Partial<Record<Ability, number>> = {};
    for (const inc of companion.hdAbilityIncreases) {
      if (inc.ability) totals[inc.ability] = (totals[inc.ability] ?? 0) + 1;
    }
    return totals;
  }, [companion.hdAbilityIncreases]);

  const handleOverrideChange = (ability: Ability, text: string) => {
    const trimmed = text.trim();
    if (trimmed === '') {
      dispatch(
        setCompanionAbilityOverride({ instanceId: companion.instanceId, ability, value: null }),
      );
      return;
    }
    const n = Number.parseInt(trimmed, 10);
    if (Number.isNaN(n)) return;
    dispatch(setCompanionAbilityOverride({ instanceId: companion.instanceId, ability, value: n }));
  };

  const handleIncreaseAbility = (atLevel: number, value: string) => {
    dispatch(
      setCompanionHDAbilityIncrease({
        instanceId: companion.instanceId,
        atLevel,
        ability: (value as Ability) || null,
      }),
    );
  };

  if (!entry || !baseStats) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={[styles.emptyText, { color: colors.text.tertiary }]}>
          Entry definition missing — can&apos;t compute ability scores.
        </Text>
      </View>
    );
  }

  const baseByAbility: Record<Ability, number> = {
    STR: baseStats.str,
    DEX: baseStats.dex,
    CON: baseStats.con,
    INT: baseStats.int,
    WIS: baseStats.wis,
    CHA: baseStats.cha,
  };

  return (
    <View style={styles.container}>
      {/* Stat table */}
      <View style={[styles.headerRow, { borderBottomColor: colors.border.DEFAULT }]}>
        <Text style={[styles.hdr, styles.abilityCol, { color: colors.text.tertiary }]}>
          Ability
        </Text>
        <Text style={[styles.hdr, styles.numCol, { color: colors.text.tertiary }]}>Base</Text>
        <Text style={[styles.hdr, styles.numCol, { color: colors.text.tertiary }]}>+HD</Text>
        <Text style={[styles.hdr, styles.numCol, { color: colors.text.tertiary }]}>Override</Text>
        <Text style={[styles.hdr, styles.numCol, { color: colors.text.tertiary }]}>Total</Text>
        <Text style={[styles.hdr, styles.numCol, { color: colors.text.tertiary }]}>Mod</Text>
      </View>

      {ABILITIES.map((ab) => {
        const base = baseByAbility[ab];
        const hdBonus = hdBonusByAbility[ab] ?? 0;
        const override = companion.abilityScoreOverrides[ab];
        const total = override ?? base + hdBonus;
        const mod = abilityMod(total);
        const hasOverride = override !== undefined;
        return (
          <View key={ab} style={[styles.row, { borderBottomColor: colors.border.DEFAULT }]}>
            <Text style={[styles.ability, styles.abilityCol, { color: colors.text.primary }]}>
              {ab}
            </Text>
            <Text style={[styles.value, styles.numCol, { color: colors.text.secondary }]}>
              {base}
            </Text>
            <Text
              style={[
                styles.value,
                styles.numCol,
                { color: hdBonus > 0 ? fantasy.gold : colors.text.tertiary },
              ]}
            >
              {hdBonus > 0 ? `+${hdBonus}` : '—'}
            </Text>
            <View style={styles.numCol}>
              <TextInput
                value={hasOverride ? String(override) : ''}
                onChangeText={(text) => handleOverrideChange(ab, text)}
                placeholder="—"
                placeholderTextColor={colors.text.tertiary}
                keyboardType="number-pad"
                style={[
                  styles.overrideInput,
                  {
                    color: colors.text.primary,
                    backgroundColor: isDark ? colors.bg.tertiary : colors.bg.primary,
                    borderColor: hasOverride ? fantasy.gold : colors.border.DEFAULT,
                  },
                ]}
              />
            </View>
            <Text
              style={[
                styles.value,
                styles.numCol,
                { color: colors.text.primary, fontWeight: hasOverride ? '700' : '400' },
              ]}
            >
              {total}
            </Text>
            <Text style={[styles.value, styles.numCol, { color: colors.text.primary }]}>
              {signed(mod)}
            </Text>
          </View>
        );
      })}

      {baseStats.appliedTiers.length > 0 && (
        <Text style={[styles.caption, { color: colors.text.tertiary }]}>
          Progression tiers applied: {baseStats.appliedTiers.map((t) => `lvl ${t}`).join(', ')}. AC
          table Str/Dex bonus: +{baseStats.progression.strDexBonus}.
        </Text>
      )}

      {/* HD ability increase slots */}
      {increaseSlots.length > 0 && (
        <View style={styles.increaseSection}>
          <Text style={[styles.increaseSectionLabel, { color: colors.text.tertiary }]}>
            Ability Score Increases
          </Text>
          {increaseSlots.map((lvl) => {
            const chosen =
              companion.hdAbilityIncreases.find((i) => i.atLevel === lvl)?.ability ?? null;
            return (
              <View key={lvl} style={styles.increaseRow}>
                <Text style={[styles.increaseLevel, { color: colors.text.secondary }]}>
                  Level {lvl}
                </Text>
                <InlinePicker
                  value={chosen ?? ''}
                  options={ABILITY_OPTIONS}
                  onValueChange={(v) => handleIncreaseAbility(lvl, v)}
                  style={styles.increasePicker}
                />
              </View>
            );
          })}
        </View>
      )}

      <Pressable
        onPress={() => {
          for (const ab of ABILITIES) {
            dispatch(
              setCompanionAbilityOverride({
                instanceId: companion.instanceId,
                ability: ab,
                value: null,
              }),
            );
          }
        }}
        style={[styles.clearBtn, { borderColor: colors.border.DEFAULT }]}
        accessibilityRole="button"
        accessibilityLabel="Clear all ability score overrides"
      >
        <Text style={[styles.clearText, { color: colors.text.tertiary }]}>Clear all overrides</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { gap: 12 },
  hint: {
    fontFamily: 'LibreBaskerville',
    fontSize: 12,
    fontStyle: 'italic',
    paddingHorizontal: 4,
  },
  headerRow: {
    flexDirection: 'row',
    paddingVertical: 6,
    borderBottomWidth: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  abilityCol: { flex: 1.2 },
  numCol: { flex: 1, alignItems: 'center' },
  hdr: {
    fontFamily: 'Cinzel',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.5,
    textAlign: 'center',
  },
  ability: {
    fontFamily: 'Cinzel',
    fontSize: 14,
    fontWeight: '700',
  },
  value: {
    fontFamily: 'LibreBaskerville',
    fontSize: 15,
    textAlign: 'center',
  },
  overrideInput: {
    fontFamily: 'LibreBaskerville',
    fontSize: 14,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderWidth: 1,
    borderRadius: 6,
    minWidth: 48,
    textAlign: 'center',
  },
  caption: {
    fontFamily: 'LibreBaskerville',
    fontSize: 11,
    fontStyle: 'italic',
    paddingHorizontal: 4,
  },
  clearBtn: {
    alignSelf: 'flex-end',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderWidth: 1,
    borderRadius: 6,
  },
  clearText: {
    fontFamily: 'Cinzel',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  increaseSection: {
    marginTop: 8,
    gap: 8,
  },
  increaseSectionLabel: {
    fontFamily: 'Cinzel',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.5,
    textTransform: 'uppercase',
    paddingTop: 4,
  },
  increaseRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  increaseLevel: {
    fontFamily: 'LibreBaskerville',
    fontSize: 13,
    width: 60,
  },
  increasePicker: {
    flex: 1,
    marginBottom: 0,
  },
  emptyContainer: { padding: 32, alignItems: 'center' },
  emptyText: { fontFamily: 'LibreBaskerville', fontSize: 14, fontStyle: 'italic' },
});
