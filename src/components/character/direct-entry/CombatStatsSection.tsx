import React, { useMemo } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setCombatField } from '@/store/slices/characterEntrySlice';
import { AutoComputedValue } from '@/components/ui/AutoComputedValue';
import {
  computeTotalBAB,
  formatBABString,
  computeBaseFort,
  computeBaseRef,
  computeBaseWill,
  getAbilityModifier,
} from '@/utils/characterComputations';
import { type DraftCombatStats } from '@/types/characterDraft';

// ---- Helpers ----

function fmtSign(n: number): string {
  return n >= 0 ? `+${n}` : `${n}`;
}

// ---- Numeric inline input ----

interface NumInputProps {
  value: number | undefined;
  onCommit: (n: number | undefined) => void;
  placeholder?: string;
  width?: number;
  signed?: boolean;
}

function NumInput({
  value,
  onCommit,
  placeholder = '0',
  width = 52,
  signed = false,
}: NumInputProps) {
  const { colors, isDark } = useTheme();
  return (
    <TextInput
      value={value !== undefined ? String(value) : ''}
      onChangeText={(t) => {
        if (t === '' || t === '-') {
          onCommit(signed && t === '-' ? undefined : undefined);
          return;
        }
        const n = parseInt(t, 10);
        if (!isNaN(n)) onCommit(n);
      }}
      keyboardType={signed ? 'numbers-and-punctuation' : 'number-pad'}
      selectTextOnFocus
      placeholder={placeholder}
      placeholderTextColor={colors.text.tertiary}
      style={[
        styles.numInput,
        {
          width,
          color: colors.text.primary,
          borderColor: colors.border.DEFAULT,
          backgroundColor: isDark ? colors.bg.tertiary : colors.bg.secondary,
        },
      ]}
    />
  );
}

// ---- Section panel ----

interface PanelProps {
  title: string;
  children: React.ReactNode;
}

function Panel({ title, children }: PanelProps) {
  const { colors, fantasy, isDark } = useTheme();
  return (
    <View
      style={[
        styles.panel,
        {
          backgroundColor: isDark ? colors.bg.secondary : colors.bg.primary,
          borderColor: colors.border.DEFAULT,
        },
      ]}
    >
      <Text style={[styles.panelTitle, { color: isDark ? fantasy.gold : fantasy.darkWood }]}>
        {title}
      </Text>
      {children}
    </View>
  );
}

// ---- Main section ----

export function CombatStatsSection() {
  const dispatch = useAppDispatch();
  const combat = useAppSelector((state) => state.characterEntry.draft.combat);
  const classes = useAppSelector((state) => state.characterEntry.draft.classes);
  const abilities = useAppSelector((state) => state.characterEntry.draft.abilities);

  const set = (field: keyof DraftCombatStats, value: number | undefined) =>
    dispatch(setCombatField({ field, value }));

  // Computed base values
  const strMod = useMemo(() => getAbilityModifier(abilities, 'str'), [abilities]);
  const dexMod = useMemo(() => getAbilityModifier(abilities, 'dex'), [abilities]);
  const wisMod = useMemo(() => getAbilityModifier(abilities, 'wis'), [abilities]);
  const conMod = useMemo(() => getAbilityModifier(abilities, 'con'), [abilities]);

  const totalBAB = useMemo(() => computeTotalBAB(classes), [classes]);
  const babString = useMemo(() => formatBABString(totalBAB), [totalBAB]);
  const baseFort = useMemo(() => computeBaseFort(classes), [classes]);
  const baseRef = useMemo(() => computeBaseRef(classes), [classes]);
  const baseWill = useMemo(() => computeBaseWill(classes), [classes]);

  const totalFort = baseFort + conMod + (combat.saveFortMisc ?? 0);
  const totalRef = baseRef + dexMod + (combat.saveRefMisc ?? 0);
  const totalWill = baseWill + wisMod + (combat.saveWillMisc ?? 0);

  const totalMelee = totalBAB + strMod + (combat.meleeAttackMisc ?? 0);
  const totalRanged = totalBAB + dexMod + (combat.rangedAttackMisc ?? 0);
  const totalCMB = totalBAB + strMod + (combat.cmbMisc ?? 0);
  const totalCMD = 10 + totalBAB + strMod + dexMod;

  return (
    <View style={styles.container}>
      {/* Hit Points */}
      <Panel title="Hit Points">
        <View style={styles.row}>
          <Text style={styles.fieldLabel}>Max HP</Text>
          <NumInput
            value={combat.maxHPOverride}
            onCommit={(n) => set('maxHPOverride', n)}
            width={64}
          />
          <Text style={styles.fieldLabel}>Current</Text>
          <NumInput
            value={combat.currentHP}
            onCommit={(n) => set('currentHP', n ?? 0)}
            width={64}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.fieldLabel}>Nonlethal</Text>
          <NumInput
            value={combat.nonlethalDamage}
            onCommit={(n) => set('nonlethalDamage', n ?? 0)}
            width={56}
          />
          <Text style={styles.fieldLabel}>Temp HP</Text>
          <NumInput value={combat.tempHP} onCommit={(n) => set('tempHP', n ?? 0)} width={56} />
        </View>
      </Panel>

      {/* Armor Class */}
      <Panel title="Armor Class">
        <View style={styles.row}>
          <AutoComputedValue
            value={`AC 10 + armor + dex ${fmtSign(dexMod)} + misc ${fmtSign(combat.acMiscBonus ?? 0)}`}
            label="Formula"
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.fieldLabel}>Misc AC bonus</Text>
          <NumInput
            value={combat.acMiscBonus}
            onCommit={(n) => set('acMiscBonus', n ?? 0)}
            signed
            width={56}
          />
        </View>
      </Panel>

      {/* Saving Throws */}
      <Panel title="Saving Throws">
        <View style={styles.saveRow}>
          <View style={styles.saveCol}>
            <AutoComputedValue value={fmtSign(totalFort)} label="Fort total" />
            <Text style={styles.saveBreak}>
              base {fmtSign(baseFort)} + CON {fmtSign(conMod)}
            </Text>
            <View style={styles.miscRow}>
              <Text style={styles.miscLabel}>Misc</Text>
              <NumInput
                value={combat.saveFortMisc}
                onCommit={(n) => set('saveFortMisc', n ?? 0)}
                signed
                width={52}
              />
            </View>
          </View>

          <View style={styles.saveCol}>
            <AutoComputedValue value={fmtSign(totalRef)} label="Ref total" />
            <Text style={styles.saveBreak}>
              base {fmtSign(baseRef)} + DEX {fmtSign(dexMod)}
            </Text>
            <View style={styles.miscRow}>
              <Text style={styles.miscLabel}>Misc</Text>
              <NumInput
                value={combat.saveRefMisc}
                onCommit={(n) => set('saveRefMisc', n ?? 0)}
                signed
                width={52}
              />
            </View>
          </View>

          <View style={styles.saveCol}>
            <AutoComputedValue value={fmtSign(totalWill)} label="Will total" />
            <Text style={styles.saveBreak}>
              base {fmtSign(baseWill)} + WIS {fmtSign(wisMod)}
            </Text>
            <View style={styles.miscRow}>
              <Text style={styles.miscLabel}>Misc</Text>
              <NumInput
                value={combat.saveWillMisc}
                onCommit={(n) => set('saveWillMisc', n ?? 0)}
                signed
                width={52}
              />
            </View>
          </View>
        </View>
      </Panel>

      {/* Attack */}
      <Panel title="Attack">
        <View style={styles.row}>
          <AutoComputedValue value={babString} label="BAB" />
        </View>
        <View style={styles.attackGrid}>
          <View style={styles.attackCell}>
            <AutoComputedValue value={fmtSign(totalMelee)} label="Melee" />
            <View style={styles.miscRow}>
              <Text style={styles.miscLabel}>Misc</Text>
              <NumInput
                value={combat.meleeAttackMisc}
                onCommit={(n) => set('meleeAttackMisc', n ?? 0)}
                signed
                width={52}
              />
            </View>
          </View>

          <View style={styles.attackCell}>
            <AutoComputedValue value={fmtSign(totalRanged)} label="Ranged" />
            <View style={styles.miscRow}>
              <Text style={styles.miscLabel}>Misc</Text>
              <NumInput
                value={combat.rangedAttackMisc}
                onCommit={(n) => set('rangedAttackMisc', n ?? 0)}
                signed
                width={52}
              />
            </View>
          </View>

          <View style={styles.attackCell}>
            <AutoComputedValue value={fmtSign(totalCMB)} label="CMB" />
            <View style={styles.miscRow}>
              <Text style={styles.miscLabel}>Misc</Text>
              <NumInput
                value={combat.cmbMisc}
                onCommit={(n) => set('cmbMisc', n ?? 0)}
                signed
                width={52}
              />
            </View>
          </View>

          <View style={styles.attackCell}>
            <AutoComputedValue value={String(totalCMD)} label="CMD" />
          </View>
        </View>
      </Panel>

      {/* Movement */}
      <Panel title="Movement">
        <View style={styles.speedGrid}>
          {(
            [
              { label: 'Land', field: 'speedLand' },
              { label: 'Fly', field: 'speedFly' },
              { label: 'Swim', field: 'speedSwim' },
              { label: 'Climb', field: 'speedClimb' },
            ] as { label: string; field: keyof DraftCombatStats }[]
          ).map(({ label, field }) => (
            <View key={field} style={styles.speedCell}>
              <Text style={styles.speedLabel}>{label}</Text>
              <NumInput
                value={combat[field] as number | undefined}
                onCommit={(n) => set(field, n)}
                placeholder="—"
                width={52}
              />
              <Text style={styles.speedUnit}>ft</Text>
            </View>
          ))}
        </View>
      </Panel>
    </View>
  );
}

// ---- Styles ----

const styles = StyleSheet.create({
  container: {
    gap: 12,
  },
  panel: {
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 10,
    gap: 8,
  },
  panelTitle: {
    fontFamily: 'Cinzel',
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 2,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    flexWrap: 'wrap',
  },
  fieldLabel: {
    fontFamily: 'LibreBaskerville',
    fontSize: 13,
    color: '#888',
  },
  numInput: {
    fontFamily: 'LibreBaskerville',
    fontSize: 16,
    fontWeight: '700',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 6,
    textAlign: 'center',
    minHeight: 38,
  },
  saveRow: {
    flexDirection: 'row',
    gap: 8,
  },
  saveCol: {
    flex: 1,
    gap: 4,
    alignItems: 'center',
  },
  saveBreak: {
    fontFamily: 'LibreBaskerville',
    fontSize: 10,
    color: '#888',
    textAlign: 'center',
  },
  miscRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  miscLabel: {
    fontFamily: 'LibreBaskerville',
    fontSize: 11,
    color: '#888',
  },
  attackGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  attackCell: {
    alignItems: 'center',
    gap: 4,
    minWidth: 72,
  },
  speedGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  speedCell: {
    alignItems: 'center',
    gap: 4,
    minWidth: 72,
  },
  speedLabel: {
    fontFamily: 'LibreBaskerville',
    fontSize: 12,
    color: '#888',
  },
  speedUnit: {
    fontFamily: 'LibreBaskerville',
    fontSize: 11,
    color: '#888',
  },
});
