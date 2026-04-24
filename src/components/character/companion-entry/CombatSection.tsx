import React, { useMemo } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { useAppDispatch } from '@/store/hooks';
import { setCompanionHP } from '@/store/slices/characterEntrySlice';
import { CompanionService } from '@/services/CompanionService';
import type { CompanionInstance } from '@/types/companions';
import type { AnimalCompanionEntry } from '@/types/animalCompanions';

export interface CombatSectionProps {
  companion: CompanionInstance;
  entry: AnimalCompanionEntry | undefined;
}

function abilityMod(score: number): number {
  return Math.floor((score - 10) / 2);
}

function signed(n: number): string {
  return n >= 0 ? `+${n}` : `${n}`;
}

// Derived size modifier for AC/attacks/CMB/CMD. PF1e standard table.
const SIZE_MOD: Record<string, number> = {
  Fine: 8,
  Diminutive: 4,
  Tiny: 2,
  Small: 1,
  Medium: 0,
  Large: -1,
  Huge: -2,
  Gargantuan: -4,
  Colossal: -8,
};

// CMB/CMD use special size modifiers (opposite direction from AC).
const SIZE_MOD_CMB: Record<string, number> = {
  Fine: -8,
  Diminutive: -4,
  Tiny: -2,
  Small: -1,
  Medium: 0,
  Large: 1,
  Huge: 2,
  Gargantuan: 4,
  Colossal: 8,
};

export function CombatSection({ companion, entry }: CombatSectionProps) {
  const { colors, isDark } = useTheme();
  const dispatch = useAppDispatch();

  const baseStats = useMemo(() => {
    if (!entry) return undefined;
    return CompanionService.computeBaseStatBlock(entry, companion.effectiveProgressionLevel);
  }, [entry, companion.effectiveProgressionLevel]);

  if (!entry || !baseStats) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={[styles.emptyText, { color: colors.text.tertiary }]}>
          Entry definition missing — can&apos;t compute combat stats.
        </Text>
      </View>
    );
  }

  const strMod = abilityMod(companion.abilityScoreOverrides.STR ?? baseStats.str);
  const dexMod = abilityMod(companion.abilityScoreOverrides.DEX ?? baseStats.dex);
  const conMod = abilityMod(companion.abilityScoreOverrides.CON ?? baseStats.con);
  const wisMod = abilityMod(companion.abilityScoreOverrides.WIS ?? baseStats.wis);

  const sizeAC = SIZE_MOD[baseStats.size] ?? 0;
  const sizeCMB = SIZE_MOD_CMB[baseStats.size] ?? 0;

  // Stat totals (pre-equipment, pre-buff). Equipment is Phase 1.7.
  const ac = 10 + baseStats.naturalArmor + dexMod + sizeAC;
  const touchAC = 10 + dexMod + sizeAC;
  const flatFootedAC = 10 + baseStats.naturalArmor + sizeAC;

  const fort = baseStats.fort + conMod;
  const ref = baseStats.ref + dexMod;
  const will = baseStats.will + wisMod;

  const attackMod = baseStats.bab + strMod + sizeAC;
  const cmb = baseStats.bab + strMod + sizeCMB;
  const cmd = 10 + baseStats.bab + strMod + dexMod + sizeCMB;

  const setHP = (field: 'max' | 'current' | 'temp' | 'nonlethal', text: string) => {
    const n = Number.parseInt(text, 10);
    dispatch(
      setCompanionHP({
        instanceId: companion.instanceId,
        field,
        value: Number.isNaN(n) ? 0 : n,
      }),
    );
  };

  return (
    <View style={styles.container}>
      {/* HP */}
      <Panel title="Hit Points" colors={colors} isDark={isDark}>
        <View style={styles.hpRow}>
          <HPInput
            label="Max"
            value={companion.hp.max}
            onChange={(t) => setHP('max', t)}
            colors={colors}
            isDark={isDark}
          />
          <HPInput
            label="Current"
            value={companion.hp.current}
            onChange={(t) => setHP('current', t)}
            colors={colors}
            isDark={isDark}
          />
          <HPInput
            label="Temp"
            value={companion.hp.temp}
            onChange={(t) => setHP('temp', t)}
            colors={colors}
            isDark={isDark}
          />
          <HPInput
            label="Nonlethal"
            value={companion.hp.nonlethal}
            onChange={(t) => setHP('nonlethal', t)}
            colors={colors}
            isDark={isDark}
          />
        </View>
        <Text style={[styles.hint, { color: colors.text.tertiary }]}>
          Max HP is editable — the builder doesn&apos;t roll it. Suggested: HD × avg + CON bonus
          (this companion has {baseStats.hd} HD).
        </Text>
      </Panel>

      {/* AC */}
      <Panel title="Armor Class" colors={colors} isDark={isDark}>
        <Row label="AC" value={String(ac)} colors={colors} highlight />
        <Row label="Touch" value={String(touchAC)} colors={colors} />
        <Row label="Flat-Footed" value={String(flatFootedAC)} colors={colors} />
        <Text style={[styles.breakdown, { color: colors.text.tertiary }]}>
          10 + {baseStats.naturalArmor} natural + {signed(dexMod)} Dex + {signed(sizeAC)} size
        </Text>
      </Panel>

      {/* Saves */}
      <Panel title="Saving Throws" colors={colors} isDark={isDark}>
        <Row
          label="Fortitude"
          value={signed(fort)}
          colors={colors}
          caption={`base ${signed(baseStats.fort)} + Con ${signed(conMod)}`}
        />
        <Row
          label="Reflex"
          value={signed(ref)}
          colors={colors}
          caption={`base ${signed(baseStats.ref)} + Dex ${signed(dexMod)}`}
        />
        <Row
          label="Will"
          value={signed(will)}
          colors={colors}
          caption={`base ${signed(baseStats.will)} + Wis ${signed(wisMod)}`}
        />
      </Panel>

      {/* Attacks */}
      <Panel title="Attacks" colors={colors} isDark={isDark}>
        <Row label="BAB" value={signed(baseStats.bab)} colors={colors} />
        <Row
          label="Attack Mod"
          value={signed(attackMod)}
          colors={colors}
          caption={`bab ${signed(baseStats.bab)} + Str ${signed(strMod)} + size ${signed(sizeAC)}`}
        />
        <Row label="Natural Attacks" value={baseStats.attacks} colors={colors} monospace />
      </Panel>

      {/* CMB / CMD */}
      <Panel title="Combat Maneuver" colors={colors} isDark={isDark}>
        <Row label="CMB" value={signed(cmb)} colors={colors} />
        <Row label="CMD" value={String(cmd)} colors={colors} />
      </Panel>

      {/* Speeds */}
      <Panel title="Speed" colors={colors} isDark={isDark}>
        <Text style={[styles.speedText, { color: colors.text.primary }]}>{baseStats.speed}</Text>
      </Panel>
    </View>
  );
}

// ---- Helpers ----

type ColorScheme = ReturnType<typeof useTheme>['colors'];

function Panel({
  title,
  colors,
  isDark,
  children,
}: {
  title: string;
  colors: ColorScheme;
  isDark: boolean;
  children: React.ReactNode;
}) {
  return (
    <View
      style={[
        styles.panel,
        {
          borderColor: colors.border.DEFAULT,
          backgroundColor: isDark ? colors.bg.tertiary : colors.bg.primary,
        },
      ]}
    >
      <Text style={[styles.panelTitle, { color: colors.text.tertiary }]}>{title}</Text>
      {children}
    </View>
  );
}

function Row({
  label,
  value,
  colors,
  caption,
  highlight,
  monospace,
}: {
  label: string;
  value: string;
  colors: ColorScheme;
  caption?: string;
  highlight?: boolean;
  monospace?: boolean;
}) {
  return (
    <View style={styles.row}>
      <View style={styles.rowHeader}>
        <Text style={[styles.rowLabel, { color: colors.text.secondary }]}>{label}</Text>
        <Text
          style={[
            styles.rowValue,
            {
              color: colors.text.primary,
              fontWeight: highlight ? '700' : '400',
              fontFamily: monospace ? 'LibreBaskerville' : 'LibreBaskerville',
              fontSize: highlight ? 17 : 15,
            },
          ]}
        >
          {value}
        </Text>
      </View>
      {caption && (
        <Text style={[styles.rowCaption, { color: colors.text.tertiary }]}>{caption}</Text>
      )}
    </View>
  );
}

function HPInput({
  label,
  value,
  onChange,
  colors,
  isDark,
}: {
  label: string;
  value: number;
  onChange: (text: string) => void;
  colors: ColorScheme;
  isDark: boolean;
}) {
  return (
    <View style={styles.hpField}>
      <Text style={[styles.hpLabel, { color: colors.text.tertiary }]}>{label}</Text>
      <TextInput
        value={String(value)}
        onChangeText={onChange}
        keyboardType="number-pad"
        style={[
          styles.hpInput,
          {
            color: colors.text.primary,
            backgroundColor: isDark ? colors.bg.primary : colors.bg.secondary,
            borderColor: colors.border.DEFAULT,
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { gap: 16 },
  panel: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    gap: 6,
  },
  panelTitle: {
    fontFamily: 'Cinzel',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.5,
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  row: { paddingVertical: 4 },
  rowHeader: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  rowLabel: { fontFamily: 'LibreBaskerville', fontSize: 13 },
  rowValue: { fontFamily: 'LibreBaskerville', fontSize: 15 },
  rowCaption: {
    fontFamily: 'LibreBaskerville',
    fontSize: 11,
    fontStyle: 'italic',
    marginTop: 2,
  },
  breakdown: {
    fontFamily: 'LibreBaskerville',
    fontSize: 11,
    fontStyle: 'italic',
    marginTop: 4,
  },
  hpRow: { flexDirection: 'row', justifyContent: 'space-between', gap: 8 },
  hpField: { flex: 1, gap: 4 },
  hpLabel: {
    fontFamily: 'Cinzel',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 0.5,
    textAlign: 'center',
  },
  hpInput: {
    fontFamily: 'LibreBaskerville',
    fontSize: 15,
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 6,
    textAlign: 'center',
    minHeight: 36,
  },
  hint: {
    fontFamily: 'LibreBaskerville',
    fontSize: 11,
    fontStyle: 'italic',
    marginTop: 4,
  },
  speedText: {
    fontFamily: 'LibreBaskerville',
    fontSize: 15,
  },
  emptyContainer: { padding: 32, alignItems: 'center' },
  emptyText: { fontFamily: 'LibreBaskerville', fontSize: 14, fontStyle: 'italic' },
});
