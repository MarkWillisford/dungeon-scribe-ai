import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { CombatAbilityState } from '@/types/buff';

interface CombatAbilityTogglesProps {
  abilities: CombatAbilityState;
  bab: number; // base attack bonus for Power Attack preview
  onToggle: (key: keyof Omit<CombatAbilityState, 'combatExpertisePenalty'>) => void;
  onSetExpertisePenalty: (value: number) => void;
  testID?: string;
}

interface AbilityConfig {
  key: keyof Omit<CombatAbilityState, 'combatExpertisePenalty'>;
  label: string;
  shortDesc: string;
  color: string;
}

const ABILITY_CONFIGS: AbilityConfig[] = [
  {
    key: 'powerAttack',
    label: 'Power Attack',
    shortDesc: 'Trade accuracy for damage',
    color: '#B71C1C',
  },
  {
    key: 'deadlyAim',
    label: 'Deadly Aim',
    shortDesc: 'Ranged: trade accuracy for damage',
    color: '#C62828',
  },
  { key: 'rage', label: 'Rage', shortDesc: '+4 STR/CON, +2 Will, -2 AC', color: '#E65100' },
  { key: 'haste', label: 'Haste', shortDesc: '+1 attack/AC/Reflex, +30 speed', color: '#1565C0' },
  {
    key: 'combatExpertise',
    label: 'Combat Expertise',
    shortDesc: 'Trade accuracy for AC',
    color: '#4527A0',
  },
  {
    key: 'twoWeaponFighting',
    label: 'Two-Weapon Fighting',
    shortDesc: 'Dual-wield attack penalty',
    color: '#1B5E20',
  },
  {
    key: 'flurryOfBlows',
    label: 'Flurry of Blows',
    shortDesc: 'Monk: extra attacks',
    color: '#004D40',
  },
];

export function CombatAbilityToggles({
  abilities,
  bab,
  onToggle,
  onSetExpertisePenalty,
  testID,
}: CombatAbilityTogglesProps) {
  const { colors, fantasy } = useTheme();

  const powerAttackPenalty = Math.floor(bab / 4) + 1;
  const powerAttackBonus = powerAttackPenalty * 2;

  return (
    <View testID={testID} style={styles.container}>
      <Text style={[styles.sectionHeader, { color: fantasy.gold }]}>Combat Abilities</Text>

      {ABILITY_CONFIGS.map(({ key, label, shortDesc, color }) => {
        const isOn = abilities[key] as boolean;
        return (
          <View key={key}>
            <Pressable
              style={[
                styles.abilityRow,
                {
                  backgroundColor: isOn ? `${color}22` : colors.bg.secondary,
                  borderColor: isOn ? color : colors.border.DEFAULT,
                },
              ]}
              onPress={() => onToggle(key)}
              accessibilityLabel={`Toggle ${label}`}
              accessibilityState={{ checked: isOn }}
            >
              <View style={styles.abilityLeft}>
                <View
                  style={[
                    styles.toggleIndicator,
                    { backgroundColor: isOn ? color : colors.bg.tertiary, borderColor: color },
                  ]}
                >
                  <View
                    style={[
                      styles.toggleDot,
                      { backgroundColor: isOn ? '#FFFFFF' : 'transparent' },
                    ]}
                  />
                </View>
                <View style={styles.abilityText}>
                  <Text
                    style={[styles.abilityLabel, { color: isOn ? color : colors.text.primary }]}
                  >
                    {label}
                  </Text>
                  <Text style={[styles.abilityDesc, { color: colors.text.tertiary }]}>
                    {shortDesc}
                  </Text>
                </View>
              </View>

              {/* Power Attack preview */}
              {key === 'powerAttack' && isOn && (
                <View style={styles.previewBadge}>
                  <Text style={[styles.previewText, { color: color }]}>
                    {`-${powerAttackPenalty} atk / +${powerAttackBonus} dmg`}
                  </Text>
                </View>
              )}

              {/* Deadly Aim preview */}
              {key === 'deadlyAim' && isOn && (
                <View style={styles.previewBadge}>
                  <Text style={[styles.previewText, { color: color }]}>
                    {`-${powerAttackPenalty} atk / +${powerAttackBonus} dmg`}
                  </Text>
                </View>
              )}
            </Pressable>

            {/* TWF light offhand option */}
            {key === 'twoWeaponFighting' && isOn && (
              <View
                style={[
                  styles.subOption,
                  { backgroundColor: colors.bg.tertiary, borderColor: colors.border.DEFAULT },
                ]}
              >
                <Text style={[styles.subOptionLabel, { color: colors.text.secondary }]}>
                  Light off-hand weapon
                </Text>
                <Pressable
                  style={[
                    styles.subToggle,
                    {
                      backgroundColor: abilities.twoWeaponFightingLightOffhand
                        ? '#1B5E20'
                        : colors.bg.secondary,
                      borderColor: '#1B5E20',
                    },
                  ]}
                  onPress={() => onToggle('twoWeaponFightingLightOffhand')}
                  accessibilityLabel="Toggle light off-hand"
                  accessibilityState={{ checked: abilities.twoWeaponFightingLightOffhand }}
                >
                  <Text
                    style={[
                      styles.subToggleText,
                      { color: abilities.twoWeaponFightingLightOffhand ? '#FFFFFF' : '#1B5E20' },
                    ]}
                  >
                    {abilities.twoWeaponFightingLightOffhand ? 'Light' : 'Normal'}
                  </Text>
                </Pressable>
              </View>
            )}

            {/* Combat Expertise penalty selector */}
            {key === 'combatExpertise' && isOn && (
              <View
                style={[
                  styles.subOption,
                  { backgroundColor: colors.bg.tertiary, borderColor: colors.border.DEFAULT },
                ]}
              >
                <Text style={[styles.subOptionLabel, { color: colors.text.secondary }]}>
                  {`Penalty: ${abilities.combatExpertisePenalty}`}
                </Text>
                <View style={styles.penaltyButtons}>
                  {[1, 2, 3, 4, 5].map((v) => (
                    <Pressable
                      key={v}
                      style={[
                        styles.penaltyBtn,
                        {
                          backgroundColor:
                            abilities.combatExpertisePenalty === v
                              ? '#4527A0'
                              : colors.bg.secondary,
                          borderColor: '#4527A0',
                        },
                      ]}
                      onPress={() => onSetExpertisePenalty(v)}
                      accessibilityLabel={`Set Combat Expertise penalty to ${v}`}
                    >
                      <Text
                        style={[
                          styles.penaltyBtnText,
                          { color: abilities.combatExpertisePenalty === v ? '#FFFFFF' : '#4527A0' },
                        ]}
                      >
                        {v}
                      </Text>
                    </Pressable>
                  ))}
                </View>
              </View>
            )}
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { gap: 6 },
  sectionHeader: {
    fontFamily: 'Cinzel',
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 0.5,
    marginBottom: 2,
  },
  abilityRow: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: 56,
  },
  abilityLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    flex: 1,
  },
  toggleIndicator: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  toggleDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  abilityText: { flex: 1 },
  abilityLabel: {
    fontFamily: 'Cinzel',
    fontSize: 12,
    fontWeight: '600',
  },
  abilityDesc: {
    fontFamily: 'LibreBaskerville',
    fontSize: 10,
    marginTop: 1,
  },
  previewBadge: {
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  previewText: {
    fontFamily: 'LibreBaskerville',
    fontSize: 11,
    fontWeight: '600',
    textAlign: 'right',
  },
  subOption: {
    marginTop: -4,
    marginBottom: 2,
    borderTopWidth: 0,
    borderWidth: 1,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  subOptionLabel: {
    fontFamily: 'LibreBaskerville',
    fontSize: 12,
  },
  subToggle: {
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 4,
    minHeight: 32,
    justifyContent: 'center',
  },
  subToggleText: {
    fontFamily: 'Cinzel',
    fontSize: 11,
    fontWeight: '600',
  },
  penaltyButtons: {
    flexDirection: 'row',
    gap: 4,
  },
  penaltyBtn: {
    width: 32,
    height: 32,
    borderWidth: 1,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  penaltyBtnText: {
    fontFamily: 'Cinzel',
    fontSize: 13,
    fontWeight: '700',
  },
});
