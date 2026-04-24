import React, { useMemo } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { useAppDispatch } from '@/store/hooks';
import { setCompanionAbilityOverride } from '@/store/slices/characterEntrySlice';
import { CompanionService } from '@/services/CompanionService';
import type { CompanionInstance } from '@/types/companions';
import type { AnimalCompanionEntry } from '@/types/animalCompanions';

export interface AbilitiesSectionProps {
  companion: CompanionInstance;
  entry: AnimalCompanionEntry | undefined;
}

type Ability = 'STR' | 'DEX' | 'CON' | 'INT' | 'WIS' | 'CHA';

const ABILITIES: Ability[] = ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA'];

function abilityMod(score: number): number {
  return Math.floor((score - 10) / 2);
}

function signed(n: number): string {
  return n >= 0 ? `+${n}` : `${n}`;
}

export function AbilitiesSection({ companion, entry }: AbilitiesSectionProps) {
  const { colors, fantasy, isDark } = useTheme();
  const dispatch = useAppDispatch();

  // Computed stat block — walks progression tiers and applies the universal
  // AC table. We use the result as the "pre-override" baseline to show the
  // player what they'd get without manual intervention.
  const baseStats = useMemo(() => {
    if (!entry) return undefined;
    return CompanionService.computeBaseStatBlock(entry, companion.effectiveProgressionLevel);
  }, [entry, companion.effectiveProgressionLevel]);

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
    dispatch(
      setCompanionAbilityOverride({
        instanceId: companion.instanceId,
        ability,
        value: n,
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
      <Text style={[styles.hint, { color: colors.text.tertiary }]}>
        Base scores come from the creature entry, applied progression tiers, and the AC table&apos;s
        Str/Dex bonus. Use the override column to set a different value (e.g. ability score
        increases at levels 4/9/14/20).
      </Text>

      <View style={[styles.headerRow, { borderBottomColor: colors.border.DEFAULT }]}>
        <Text style={[styles.hdr, styles.abilityCol, { color: colors.text.tertiary }]}>
          Ability
        </Text>
        <Text style={[styles.hdr, styles.numCol, { color: colors.text.tertiary }]}>Base</Text>
        <Text style={[styles.hdr, styles.numCol, { color: colors.text.tertiary }]}>Override</Text>
        <Text style={[styles.hdr, styles.numCol, { color: colors.text.tertiary }]}>Total</Text>
        <Text style={[styles.hdr, styles.numCol, { color: colors.text.tertiary }]}>Mod</Text>
      </View>

      {ABILITIES.map((ab) => {
        const base = baseByAbility[ab];
        const override = companion.abilityScoreOverrides[ab];
        const total = override ?? base;
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
                {
                  color: colors.text.primary,
                  fontWeight: hasOverride ? '700' : '400',
                },
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
          Applied progression tiers: {baseStats.appliedTiers.map((t) => `lvl ${t}`).join(', ')}. AC
          table Str/Dex bonus: +{baseStats.progression.strDexBonus}.
        </Text>
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
  emptyContainer: { padding: 32, alignItems: 'center' },
  emptyText: { fontFamily: 'LibreBaskerville', fontSize: 14, fontStyle: 'italic' },
});
