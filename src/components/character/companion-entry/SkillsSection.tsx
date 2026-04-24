import React, { useMemo } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { useAppDispatch } from '@/store/hooks';
import { setCompanionSkillRank } from '@/store/slices/characterEntrySlice';
import { CompanionService } from '@/services/CompanionService';
import type { CompanionInstance } from '@/types/companions';
import type { AnimalCompanionEntry } from '@/types/animalCompanions';

export interface SkillsSectionProps {
  companion: CompanionInstance;
  entry: AnimalCompanionEntry | undefined;
}

type Ability = 'STR' | 'DEX' | 'CON' | 'INT' | 'WIS' | 'CHA';

// Canonical animal companion class skills. Matches the plan spec.
// Ability is the default skill ability per PF1e; entries can grant extras
// through speed-type parsing (swim/climb/fly).
const CLASS_SKILLS: { name: string; ability: Ability }[] = [
  { name: 'Acrobatics', ability: 'DEX' },
  { name: 'Climb', ability: 'STR' },
  { name: 'Fly', ability: 'DEX' },
  { name: 'Perception', ability: 'WIS' },
  { name: 'Stealth', ability: 'DEX' },
  { name: 'Survival', ability: 'WIS' },
  { name: 'Swim', ability: 'STR' },
];

function abilityMod(score: number): number {
  return Math.floor((score - 10) / 2);
}

function signed(n: number): string {
  return n >= 0 ? `+${n}` : `${n}`;
}

// Skills the entry's speed line explicitly grants. Surfacing Swim if the
// creature has a swim speed, Climb if it has a climb speed, Fly if it flies.
// Purely for display — the base list already includes these; this is a cue
// for the player that they're natural for this form.
function grantedBySpeed(speed: string): Set<string> {
  const s = speed.toLowerCase();
  const set = new Set<string>();
  if (s.includes('swim')) set.add('Swim');
  if (s.includes('climb')) set.add('Climb');
  if (s.includes('fly')) set.add('Fly');
  return set;
}

export function SkillsSection({ companion, entry }: SkillsSectionProps) {
  const { colors, fantasy, isDark } = useTheme();
  const dispatch = useAppDispatch();

  const baseStats = useMemo(() => {
    if (!entry) return undefined;
    return CompanionService.computeBaseStatBlock(entry, companion.effectiveProgressionLevel);
  }, [entry, companion.effectiveProgressionLevel]);

  if (!entry || !baseStats) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={[styles.emptyText, { color: colors.text.tertiary }]}>
          Entry definition missing — can&apos;t compute skills.
        </Text>
      </View>
    );
  }

  const scoreFor = (ab: Ability): number =>
    companion.abilityScoreOverrides[ab] ??
    (baseStats[ab.toLowerCase() as keyof typeof baseStats] as number);

  const ranksUsed = Object.values(companion.skillRanks).reduce<number>(
    (sum, r) => sum + (r ?? 0),
    0,
  );
  const budget = baseStats.totalSkillRanks;
  const hdCap = baseStats.hd; // Max ranks in a single skill = HD
  const speedGrants = grantedBySpeed(entry.speed);

  const handleChange = (skill: string, text: string) => {
    const n = Number.parseInt(text, 10);
    const value = Number.isNaN(n) ? 0 : Math.max(0, Math.min(hdCap, n));
    dispatch(setCompanionSkillRank({ instanceId: companion.instanceId, skill, ranks: value }));
  };

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.budgetPanel,
          {
            borderColor: colors.border.DEFAULT,
            backgroundColor: isDark ? colors.bg.tertiary : colors.bg.primary,
          },
        ]}
      >
        <Text style={[styles.budgetLabel, { color: colors.text.tertiary }]}>Ranks</Text>
        <Text
          style={[
            styles.budgetValue,
            {
              color: colors.text.primary,
              // Over-budget is possible (imported characters may break the
              // per-HD rule); surface it visually but don't block.
              fontWeight: ranksUsed > budget ? '700' : '400',
              fontStyle: ranksUsed > budget ? 'italic' : 'normal',
            },
          ]}
        >
          {ranksUsed} / {budget}
          {ranksUsed > budget ? ' over' : ''}
        </Text>
        <Text style={[styles.budgetHint, { color: colors.text.tertiary }]}>
          {baseStats.skillRanksPerHD} per HD × {baseStats.hd} HD · max {hdCap} per skill
        </Text>
      </View>

      <View style={[styles.headerRow, { borderBottomColor: colors.border.DEFAULT }]}>
        <Text style={[styles.hdr, styles.skillCol, { color: colors.text.tertiary }]}>Skill</Text>
        <Text style={[styles.hdr, styles.abCol, { color: colors.text.tertiary }]}>Ability</Text>
        <Text style={[styles.hdr, styles.numCol, { color: colors.text.tertiary }]}>Ranks</Text>
        <Text style={[styles.hdr, styles.numCol, { color: colors.text.tertiary }]}>Total</Text>
      </View>

      {CLASS_SKILLS.map(({ name, ability }) => {
        const ranks = companion.skillRanks[name] ?? 0;
        const abMod = abilityMod(scoreFor(ability));
        // Class skill bonus: +3 if the character has at least 1 rank.
        const classSkillBonus = ranks > 0 ? 3 : 0;
        const total = ranks + abMod + classSkillBonus;
        const isGrantedBySpeed = speedGrants.has(name);
        return (
          <View key={name} style={[styles.row, { borderBottomColor: colors.border.DEFAULT }]}>
            <View style={styles.skillCol}>
              <Text style={[styles.skillName, { color: colors.text.primary }]}>{name}</Text>
              <Text style={[styles.cs, { color: fantasy.gold }]}>
                cs{isGrantedBySpeed ? ' · form' : ''}
              </Text>
            </View>
            <Text style={[styles.ability, styles.abCol, { color: colors.text.secondary }]}>
              {ability}
            </Text>
            <View style={styles.numCol}>
              <TextInput
                value={ranks > 0 ? String(ranks) : ''}
                onChangeText={(t) => handleChange(name, t)}
                placeholder="0"
                placeholderTextColor={colors.text.tertiary}
                keyboardType="number-pad"
                style={[
                  styles.rankInput,
                  {
                    color: colors.text.primary,
                    backgroundColor: isDark ? colors.bg.tertiary : colors.bg.primary,
                    borderColor: ranks > 0 ? fantasy.gold : colors.border.DEFAULT,
                  },
                ]}
              />
            </View>
            <Text
              style={[
                styles.total,
                styles.numCol,
                { color: colors.text.primary, fontWeight: ranks > 0 ? '700' : '400' },
              ]}
            >
              {signed(total)}
            </Text>
          </View>
        );
      })}

      <Text style={[styles.footer, { color: colors.text.tertiary }]}>
        Class skill bonus (+3) applies automatically when a skill has at least one rank. Override
        totals will come with the magic item / condition pipeline in a later phase.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { gap: 12 },
  budgetPanel: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    alignItems: 'center',
    gap: 2,
  },
  budgetLabel: {
    fontFamily: 'Cinzel',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  budgetValue: { fontFamily: 'Cinzel', fontSize: 20, fontWeight: '700' },
  budgetHint: { fontFamily: 'LibreBaskerville', fontSize: 11, fontStyle: 'italic' },
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
  hdr: {
    fontFamily: 'Cinzel',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  skillCol: { flex: 2 },
  abCol: { flex: 1, alignItems: 'center', textAlign: 'center' },
  numCol: { flex: 1, alignItems: 'center', textAlign: 'center' },
  skillName: { fontFamily: 'LibreBaskerville', fontSize: 14 },
  cs: {
    fontFamily: 'Cinzel',
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  ability: {
    fontFamily: 'Cinzel',
    fontSize: 11,
    fontWeight: '700',
    textAlign: 'center',
  },
  rankInput: {
    fontFamily: 'LibreBaskerville',
    fontSize: 14,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderWidth: 1,
    borderRadius: 6,
    minWidth: 48,
    textAlign: 'center',
  },
  total: { fontFamily: 'LibreBaskerville', fontSize: 15, textAlign: 'center' },
  footer: {
    fontFamily: 'LibreBaskerville',
    fontSize: 11,
    fontStyle: 'italic',
    paddingHorizontal: 4,
  },
  emptyContainer: { padding: 32, alignItems: 'center' },
  emptyText: { fontFamily: 'LibreBaskerville', fontSize: 14, fontStyle: 'italic' },
});
