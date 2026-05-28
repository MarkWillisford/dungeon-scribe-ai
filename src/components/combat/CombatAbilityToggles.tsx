import React, { useMemo } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { CombatAbilityState } from '@/types/buff';
import { Character } from '@/types';
import { FeatRegistryService } from '@/services/FeatRegistryService';
import type { FeatDefinition } from '@/types/feats';

interface CombatAbilityTogglesProps {
  abilities: CombatAbilityState;
  character: Character | null;
  bab: number;
  onToggle: (key: string) => void;
  onSetExpertisePenalty: (value: number) => void;
  testID?: string;
}

interface ResolvedEffect {
  target: string;
  value: number;
}

// Evaluate a feat effect value that may be a number or a BAB-based formula string.
function resolveEffectValue(value: number | string, bab: number): number | null {
  if (typeof value === 'number') return value;
  const basePenalty = Math.floor(bab / 4) + 1;
  const normalized = value
    .replace(/floor\(BAB\s*\/\s*4\)\s*\+\s*1/g, String(basePenalty))
    .replace(/floor\(BAB\s*\/\s*4\)\s*\+1/g, String(basePenalty))
    .trim();
  // Handle: -N, N, N*M, -N*M, (N)*M
  const simple = normalized.replace(/[()]/g, '');
  const mulMatch = simple.match(/^(-?\d+)\*(\d+)$/);
  if (mulMatch) return parseInt(mulMatch[1], 10) * parseInt(mulMatch[2], 10);
  const numMatch = simple.match(/^-?\d+$/);
  if (numMatch) return parseInt(simple, 10);
  return null;
}

function buildPreview(featId: string, def: FeatDefinition, bab: number): string | null {
  if (!def.effects || def.effects.length === 0) return null;

  const resolved: ResolvedEffect[] = [];
  for (const effect of def.effects) {
    const val = resolveEffectValue(effect.value, bab);
    if (val !== null) resolved.push({ target: effect.target, value: val });
  }
  if (resolved.length === 0) return null;

  const parts: string[] = [];
  for (const r of resolved) {
    const sign = r.value > 0 ? '+' : '';
    if (r.target.startsWith('attack')) parts.push(`${sign}${r.value} atk`);
    else if (r.target.startsWith('damage')) {
      // Power Attack: also show two-handed variant (+50%)
      if (featId === 'power_attack') {
        const thValue = Math.abs(r.value) + Math.floor(Math.abs(r.value) / 2);
        parts.push(`${sign}${r.value} dmg (+${thValue} two-handed)`);
      } else {
        parts.push(`${sign}${r.value} dmg`);
      }
    } else if (r.target.startsWith('ac')) {
      parts.push(`${sign}${r.value} AC`);
    } else if (r.target.startsWith('save')) {
      const saveName = r.target.split('.')[1] ?? 'save';
      parts.push(`${sign}${r.value} ${saveName}`);
    } else if (r.target.startsWith('ability')) {
      const abilityName = r.target.split('.')[1] ?? '';
      parts.push(`${sign}${r.value} ${abilityName.toUpperCase()}`);
    }
  }

  return parts.length > 0 ? parts.join(' / ') : null;
}

const TOGGLE_COLOR = '#B71C1C';
const CE_COLOR = '#4527A0';

export function CombatAbilityToggles({
  abilities,
  character,
  bab,
  onToggle,
  onSetExpertisePenalty,
  testID,
}: CombatAbilityTogglesProps) {
  const { colors, fantasy } = useTheme();

  const toggleableFeats = useMemo(() => {
    if (!character) return [];
    return character.feats.feats.flatMap((charFeat) => {
      const def = FeatRegistryService.getFeat(charFeat.featId);
      if (!def || def.activationMode !== 'toggle') return [];
      return [{ id: charFeat.featId, def }];
    });
  }, [character]);

  if (toggleableFeats.length === 0) return null;

  return (
    <View testID={testID} style={styles.container}>
      <Text style={[styles.sectionHeader, { color: fantasy.gold }]}>Combat Abilities</Text>

      {toggleableFeats.map(({ id, def }) => {
        const isOn = abilities.activeToggles[id] === true;
        const color = id === 'combat_expertise' ? CE_COLOR : TOGGLE_COLOR;
        const preview = isOn ? buildPreview(id, def, bab) : null;

        return (
          <View key={id}>
            <Pressable
              style={[
                styles.abilityRow,
                {
                  backgroundColor: isOn ? `${color}22` : colors.bg.secondary,
                  borderColor: isOn ? color : colors.border.DEFAULT,
                },
              ]}
              onPress={() => onToggle(id)}
              accessibilityLabel={`Toggle ${def.name}`}
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
                    {def.name}
                  </Text>
                  <Text style={[styles.abilityDesc, { color: colors.text.tertiary }]}>
                    {def.shortDescription ?? def.description}
                  </Text>
                </View>
              </View>

              {preview && (
                <View style={styles.previewBadge}>
                  <Text style={[styles.previewText, { color }]}>{preview}</Text>
                </View>
              )}
            </Pressable>

            {/* Combat Expertise variable penalty selector */}
            {id === 'combat_expertise' && isOn && (
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
                            abilities.combatExpertisePenalty === v ? CE_COLOR : colors.bg.secondary,
                          borderColor: CE_COLOR,
                        },
                      ]}
                      onPress={() => onSetExpertisePenalty(v)}
                      accessibilityLabel={`Set Combat Expertise penalty to ${v}`}
                    >
                      <Text
                        style={[
                          styles.penaltyBtnText,
                          { color: abilities.combatExpertisePenalty === v ? '#FFFFFF' : CE_COLOR },
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
    maxWidth: 140,
  },
  previewText: {
    fontFamily: 'LibreBaskerville',
    fontSize: 10,
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
