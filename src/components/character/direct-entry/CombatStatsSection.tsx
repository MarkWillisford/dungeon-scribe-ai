import React from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setCombatField } from '@/store/slices/characterEntrySlice';
import { AutoComputedValue } from '@/components/ui/AutoComputedValue';

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

type CombatFieldKey =
  | 'currentHP'
  | 'nonlethalDamage'
  | 'tempHP'
  | 'maxHPOverride'
  | 'acMiscBonus'
  | 'saveFortMisc'
  | 'saveRefMisc'
  | 'saveWillMisc'
  | 'meleeAttackMisc'
  | 'rangedAttackMisc'
  | 'cmbMisc'
  | 'speedLand'
  | 'speedFly'
  | 'speedSwim'
  | 'speedClimb';

export function CombatStatsSection() {
  const dispatch = useAppDispatch();
  const cs = useAppSelector((state) => state.characterEntry.character.combatStats);

  const set = (field: CombatFieldKey, value: number | undefined) =>
    dispatch(setCombatField({ field, value }));

  // Read pipeline-computed values directly from the character
  const maxHP =
    cs.hitPoints.base + cs.hitPoints.constitution + cs.hitPoints.favoredClass + cs.hitPoints.other;
  const babArray = cs.attackBonuses.baseAttack;
  const babString = babArray.length > 0 ? babArray.map(fmtSign).join('/') : '+0';

  const strMod = cs.attackBonuses.strengthMod;
  const dexMod = cs.armorClass.dexterity;
  const baseFort = cs.savingThrows.fortitude.base;
  const baseRef = cs.savingThrows.reflex.base;
  const baseWill = cs.savingThrows.will.base;
  const conMod = cs.savingThrows.fortitude.ability;
  const wisMod = cs.savingThrows.will.ability;

  const totalFort = cs.savingThrows.fortitude.total;
  const totalRef = cs.savingThrows.reflex.total;
  const totalWill = cs.savingThrows.will.total;

  const meleeMisc = cs.attackBonuses.miscMods.melee[0]?.value ?? 0;
  const rangedMisc = cs.attackBonuses.miscMods.ranged[0]?.value ?? 0;
  const cmbMisc = cs.combatManeuver.bonus.miscMods[0]?.value ?? 0;

  const totalMelee = cs.attackBonuses.meleeTotal;
  const totalRanged = cs.attackBonuses.rangedTotal;
  const totalCMB = cs.combatManeuver.bonus.total;
  const totalCMD = cs.combatManeuver.defense.total;

  return (
    <View style={styles.container}>
      {/* Hit Points */}
      <Panel title="Hit Points">
        <View style={styles.row}>
          <Text style={styles.fieldLabel}>Max HP</Text>
          {cs.hitPoints.other !== 0 ? (
            <>
              <NumInput
                value={cs.hitPoints.other}
                onCommit={(n) => set('maxHPOverride', n ?? 0)}
                width={64}
              />
              <Pressable onPress={() => set('maxHPOverride', 0)} hitSlop={8}>
                <Text style={styles.linkText}>↺ auto</Text>
              </Pressable>
            </>
          ) : (
            <>
              <AutoComputedValue value={String(maxHP)} />
              <Pressable onPress={() => set('maxHPOverride', maxHP)} hitSlop={8}>
                <Text style={styles.linkText}>override</Text>
              </Pressable>
            </>
          )}
          <Text style={styles.fieldLabel}>Current</Text>
          <NumInput
            value={cs.hitPoints.current}
            onCommit={(n) => set('currentHP', n ?? 0)}
            width={64}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.fieldLabel}>Nonlethal</Text>
          <NumInput
            value={cs.hitPoints.nonlethal}
            onCommit={(n) => set('nonlethalDamage', n ?? 0)}
            width={56}
          />
          <Text style={styles.fieldLabel}>Temp HP</Text>
          <NumInput
            value={cs.hitPoints.temporary}
            onCommit={(n) => set('tempHP', n ?? 0)}
            width={56}
          />
        </View>
      </Panel>

      {/* Armor Class */}
      <Panel title="Armor Class">
        <View style={styles.row}>
          <AutoComputedValue value={String(cs.armorClass.total)} label="Total" />
          <AutoComputedValue value={String(cs.armorClass.touch)} label="Touch" />
          <AutoComputedValue value={String(cs.armorClass.flatFooted)} label="Flat-footed" />
        </View>
        <Text style={styles.saveBreak}>
          {`10 + armor ${cs.armorClass.armor} + shield ${cs.armorClass.shield} + dex ${fmtSign(dexMod)}` +
            (cs.armorClass.natural ? ` + nat ${cs.armorClass.natural}` : '') +
            (cs.armorClass.deflection ? ` + defl ${cs.armorClass.deflection}` : '') +
            (cs.armorClass.dodge ? ` + dodge ${cs.armorClass.dodge}` : '') +
            (cs.armorClass.size ? ` + size ${fmtSign(cs.armorClass.size)}` : '') +
            (cs.armorClass.misc ? ` + misc ${fmtSign(cs.armorClass.misc)}` : '')}
        </Text>
        <View style={styles.row}>
          <Text style={styles.fieldLabel}>Misc AC bonus</Text>
          <NumInput
            value={cs.armorClass.misc}
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
                value={cs.savingThrows.fortitude.misc}
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
                value={cs.savingThrows.reflex.misc}
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
                value={cs.savingThrows.will.misc}
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
                value={meleeMisc}
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
                value={rangedMisc}
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
                value={cmbMisc}
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
          {[
            { label: 'Land', field: 'speedLand' as CombatFieldKey, value: cs.movement.base },
            { label: 'Fly', field: 'speedFly' as CombatFieldKey, value: cs.movement.fly },
            { label: 'Swim', field: 'speedSwim' as CombatFieldKey, value: cs.movement.swim },
            { label: 'Climb', field: 'speedClimb' as CombatFieldKey, value: cs.movement.climb },
          ].map(({ label, field, value }) => (
            <View key={field} style={styles.speedCell}>
              <Text style={styles.speedLabel}>{label}</Text>
              <NumInput value={value} onCommit={(n) => set(field, n)} placeholder="—" width={52} />
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
  linkText: {
    fontFamily: 'LibreBaskerville',
    fontSize: 11,
    color: '#888',
    textDecorationLine: 'underline',
  },
});
