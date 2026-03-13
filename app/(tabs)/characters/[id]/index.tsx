import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, ScrollView, StyleSheet, Pressable } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { useTheme } from '@/hooks/useTheme';
import { fetchCharacter, toggleFeat } from '@/store/slices/charactersSlice';
import { OrnatePanel } from '@/components/ui/OrnatePanel';
import { OrnateButton } from '@/components/ui/OrnateButton';
import { OrnateTab } from '@/components/ui/OrnateTab';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
import { FantasyDivider } from '@/components/ui/FantasyDivider';
import { FeatRegistryService } from '@/services/FeatRegistryService';
import type { Character } from '@/types';
import type { AppDispatch } from '@/store/store';
import type { Skill, NamedSkill } from '@/types/skills';

const TABS = [
  { key: 'overview', label: 'Overview' },
  { key: 'abilities', label: 'Abilities' },
  { key: 'combat', label: 'Combat' },
  { key: 'skills', label: 'Skills' },
  { key: 'feats', label: 'Feats' },
];

export default function CharacterDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { colors, fantasy } = useTheme();
  const [activeTab, setActiveTab] = useState('overview');

  const { activeCharacter, loading } = useAppSelector((state) => state.characters);

  useEffect(() => {
    if (id) {
      dispatch(fetchCharacter(id));
    }
  }, [dispatch, id]);

  if (loading) {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: colors.bg.primary }]}>
        <LoadingSpinner message="Loading character..." testID="character-detail-loading" />
      </SafeAreaView>
    );
  }

  if (!activeCharacter) {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: colors.bg.primary }]}>
        <View style={styles.content}>
          <OrnatePanel title="Character Not Found" testID="character-not-found">
            <Text style={[styles.notFoundText, { color: colors.text.secondary }]}>
              The requested character could not be found.
            </Text>
          </OrnatePanel>
          <View style={styles.buttonContainer}>
            <OrnateButton
              title="Back"
              onPress={() => router.back()}
              variant="ghost"
              testID="character-detail-back"
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.bg.primary }]}>
      {/* Header */}
      <View style={[styles.header, { borderBottomColor: colors.border.DEFAULT }]}>
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <Text style={[styles.backText, { color: colors.text.tertiary }]}>{'< Back'}</Text>
        </Pressable>
        <Text style={[styles.characterName, { color: fantasy.gold }]}>
          {activeCharacter.info.name}
        </Text>
        <Text style={[styles.classLevel, { color: colors.text.secondary }]}>
          {activeCharacter.info.race.name}{' '}
          {activeCharacter.classes.classes.map((c) => `${c.name} ${c.level}`).join(' / ')}
        </Text>
      </View>

      <OrnateTab
        tabs={TABS}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        testID="character-tabs"
      />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {activeTab === 'overview' && <OverviewTab character={activeCharacter} />}
        {activeTab === 'abilities' && <AbilitiesTab character={activeCharacter} />}
        {activeTab === 'combat' && <CombatTab character={activeCharacter} />}
        {activeTab === 'skills' && <SkillsTab character={activeCharacter} />}
        {activeTab === 'feats' && <FeatsTab character={activeCharacter} dispatch={dispatch} />}
      </ScrollView>
    </SafeAreaView>
  );
}

// ============================================================
// Overview Tab
// ============================================================

function OverviewTab({ character }: { character: Character }) {
  const { fantasy } = useTheme();
  const hp = character.combatStats.hitPoints;
  const ac = character.combatStats.armorClass;
  const saves = character.combatStats.savingThrows;

  return (
    <>
      {/* Quick Stats */}
      <OrnatePanel testID="overview-quick-stats">
        <View style={styles.quickStatsGrid}>
          <QuickStat label="HP" value={`${hp.current}`} color={fantasy.bloodRed} />
          <QuickStat label="AC" value={`${ac.total}`} color={fantasy.gold} />
          <QuickStat
            label="Init"
            value={formatBonus(character.combatStats.initiative.total)}
            color={fantasy.oceanBlue}
          />
          <QuickStat
            label="Speed"
            value={`${character.combatStats.movement.current} ft`}
            color={fantasy.forestGreen}
          />
        </View>
      </OrnatePanel>

      {/* Saves */}
      <OrnatePanel title="Saving Throws" testID="overview-saves">
        <StatRow label="Fortitude" value={formatBonus(saves.fortitude.total)} />
        <StatRow label="Reflex" value={formatBonus(saves.reflex.total)} />
        <StatRow label="Will" value={formatBonus(saves.will.total)} />
      </OrnatePanel>

      {/* Attack */}
      <OrnatePanel title="Attack Bonuses" testID="overview-attack">
        <StatRow
          label="BAB"
          value={character.combatStats.attackBonuses.baseAttack
            .map((b) => formatBonus(b))
            .join('/')}
        />
        <StatRow
          label="Melee"
          value={formatBonus(character.combatStats.attackBonuses.meleeTotal)}
        />
        <StatRow
          label="Ranged"
          value={formatBonus(character.combatStats.attackBonuses.rangedTotal)}
        />
        <StatRow
          label="CMB"
          value={formatBonus(character.combatStats.combatManeuver.bonus.total)}
        />
        <StatRow label="CMD" value={`${character.combatStats.combatManeuver.defense.total}`} />
      </OrnatePanel>

      {/* Ability Scores */}
      <OrnatePanel title="Ability Scores" testID="overview-abilities">
        {(['str', 'dex', 'con', 'int', 'wis', 'cha'] as const).map((ab) => (
          <StatRow
            key={ab}
            label={ab.toUpperCase()}
            value={`${character.abilityScores[ab].total} (${formatBonus(character.abilityScores[ab].modifier)})`}
          />
        ))}
      </OrnatePanel>
    </>
  );
}

// ============================================================
// Abilities Tab
// ============================================================

function AbilitiesTab({ character }: { character: Character }) {
  const { colors } = useTheme();
  const abilities = ['str', 'dex', 'con', 'int', 'wis', 'cha'] as const;

  return (
    <>
      {abilities.map((ab) => {
        const score = character.abilityScores[ab];
        return (
          <OrnatePanel key={ab} title={ab.toUpperCase()} testID={`ability-${ab}`}>
            <View style={styles.abilityDetail}>
              <View style={styles.abilityMainRow}>
                <Text style={[styles.abilityScore, { color: colors.text.primary }]}>
                  {score.total}
                </Text>
                <Text style={[styles.abilityMod, { color: colors.text.accent }]}>
                  {formatBonus(score.modifier)}
                </Text>
              </View>
              <FantasyDivider />
              <StatRow label="Base" value={`${score.base}`} />
              <StatRow label="Racial" value={formatBonus(score.racial)} />
              {score.inherent !== 0 && (
                <StatRow label="Inherent" value={formatBonus(score.inherent)} />
              )}
              {score.damage > 0 && <StatRow label="Damage" value={`-${score.damage}`} />}
              {score.drain > 0 && <StatRow label="Drain" value={`-${score.drain}`} />}
            </View>
          </OrnatePanel>
        );
      })}
    </>
  );
}

// ============================================================
// Combat Tab
// ============================================================

function CombatTab({ character }: { character: Character }) {
  const { colors, fantasy } = useTheme();
  const hp = character.combatStats.hitPoints;
  const ac = character.combatStats.armorClass;
  const saves = character.combatStats.savingThrows;
  const atk = character.combatStats.attackBonuses;
  const cmb = character.combatStats.combatManeuver;

  return (
    <>
      {/* HP */}
      <OrnatePanel title="Hit Points" testID="combat-hp">
        <View style={styles.quickStatsGrid}>
          <QuickStat label="Current" value={`${hp.current}`} color={fantasy.bloodRed} />
          <QuickStat label="Temp" value={`${hp.temporary}`} color={fantasy.mysticPurple} />
          <QuickStat label="Nonlethal" value={`${hp.nonlethal}`} color={fantasy.bronze} />
        </View>
        <FantasyDivider />
        <StatRow label="Base (Hit Dice)" value={`${hp.base}`} />
        <StatRow label="Constitution" value={formatBonus(hp.constitution)} />
        <StatRow label="Favored Class" value={`${hp.favoredClass}`} />
        <StatRow label="Other" value={`${hp.other}`} />
      </OrnatePanel>

      {/* AC */}
      <OrnatePanel title="Armor Class" testID="combat-ac">
        <View style={styles.quickStatsGrid}>
          <QuickStat label="Total" value={`${ac.total}`} color={fantasy.gold} />
          <QuickStat label="Touch" value={`${ac.touch}`} color={fantasy.oceanBlue} />
          <QuickStat label="Flat-Footed" value={`${ac.flatFooted}`} color={fantasy.bronze} />
        </View>
        <FantasyDivider />
        <StatRow label="Base" value="10" />
        <StatRow label="Armor" value={formatBonus(ac.armor)} />
        <StatRow label="Shield" value={formatBonus(ac.shield)} />
        <StatRow label="Dexterity" value={formatBonus(ac.dexterity)} />
        <StatRow label="Natural" value={formatBonus(ac.natural)} />
        <StatRow label="Deflection" value={formatBonus(ac.deflection)} />
        <StatRow label="Dodge" value={formatBonus(ac.dodge)} />
        <StatRow label="Size" value={formatBonus(ac.size)} />
        {ac.misc !== 0 && <StatRow label="Misc" value={formatBonus(ac.misc)} />}
      </OrnatePanel>

      {/* Saves */}
      <OrnatePanel title="Saving Throws" testID="combat-saves">
        {(
          [
            ['Fortitude', saves.fortitude],
            ['Reflex', saves.reflex],
            ['Will', saves.will],
          ] as const
        ).map(([name, save]) => (
          <View key={name} style={styles.saveBlock}>
            <StatRow label={name} value={formatBonus(save.total)} bold />
            <View style={styles.saveBreakdown}>
              <Text style={[styles.breakdownText, { color: colors.text.tertiary }]}>
                Base {formatBonus(save.base)} | Ability {formatBonus(save.ability)} | Magic{' '}
                {formatBonus(save.magic)} | Misc {formatBonus(save.misc)}
              </Text>
            </View>
          </View>
        ))}
      </OrnatePanel>

      {/* Attack */}
      <OrnatePanel title="Attack Bonuses" testID="combat-attack">
        <StatRow label="BAB" value={atk.baseAttack.map((b) => formatBonus(b)).join('/')} />
        <FantasyDivider />
        <StatRow
          label="Melee"
          value={atk.allAttacks.melee.map((b) => formatBonus(b)).join('/')}
          bold
        />
        <StatRow
          label="Ranged"
          value={atk.allAttacks.ranged.map((b) => formatBonus(b)).join('/')}
          bold
        />
      </OrnatePanel>

      {/* CMB/CMD */}
      <OrnatePanel title="Combat Maneuvers" testID="combat-maneuvers">
        <StatRow label="CMB" value={formatBonus(cmb.bonus.total)} bold />
        <StatRow label="CMD" value={`${cmb.defense.total}`} bold />
        <StatRow label="CMD Flat-Footed" value={`${cmb.defense.flatFooted}`} />
      </OrnatePanel>

      {/* Initiative & Movement */}
      <OrnatePanel title="Initiative & Movement" testID="combat-init-speed">
        <StatRow label="Initiative" value={formatBonus(character.combatStats.initiative.total)} />
        <StatRow label="Speed" value={`${character.combatStats.movement.current} ft.`} />
        {character.combatStats.movement.fly > 0 && (
          <StatRow label="Fly" value={`${character.combatStats.movement.fly} ft.`} />
        )}
        {character.combatStats.movement.swim > 0 && (
          <StatRow label="Swim" value={`${character.combatStats.movement.swim} ft.`} />
        )}
        {character.combatStats.movement.climb > 0 && (
          <StatRow label="Climb" value={`${character.combatStats.movement.climb} ft.`} />
        )}
      </OrnatePanel>
    </>
  );
}

// ============================================================
// Skills Tab
// ============================================================

function SkillsTab({ character }: { character: Character }) {
  const { colors } = useTheme();
  const skills = character.skills;

  const skillEntries = Object.entries(skills)
    .filter((entry): entry is [string, Skill | NamedSkill] => {
      const [key, val] = entry;
      return (
        key !== 'totalRanks' &&
        typeof val === 'object' &&
        val !== null &&
        !Array.isArray(val) &&
        'ability' in val
      );
    })
    .sort(([, a], [, b]) => {
      const nameA = 'name' in a ? a.name : '';
      const nameB = 'name' in b ? b.name : '';
      return nameA.localeCompare(nameB);
    });

  return (
    <OrnatePanel title="Skills" testID="skills-panel">
      <View style={styles.skillHeader}>
        <Text style={[styles.skillHeaderText, { color: colors.text.tertiary, flex: 2 }]}>
          Skill
        </Text>
        <Text
          style={[
            styles.skillHeaderText,
            { color: colors.text.tertiary, width: 40, textAlign: 'center' },
          ]}
        >
          Total
        </Text>
        <Text
          style={[
            styles.skillHeaderText,
            { color: colors.text.tertiary, width: 40, textAlign: 'center' },
          ]}
        >
          Ranks
        </Text>
      </View>
      <FantasyDivider />
      {skillEntries.map(([key, skill]) => {
        return (
          <View
            key={key}
            style={[
              styles.skillRow,
              skill.isClassSkill && { backgroundColor: colors.bg.secondary },
            ]}
          >
            <Text
              style={[styles.skillName, { color: colors.text.primary, flex: 2 }]}
              numberOfLines={1}
            >
              {('name' in skill ? skill.name : undefined) || key}
              {skill.isClassSkill ? ' *' : ''}
            </Text>
            <Text
              style={[
                styles.skillValue,
                { color: colors.text.primary, width: 40, textAlign: 'center' },
              ]}
            >
              {formatBonus(skill.total ?? 0)}
            </Text>
            <Text
              style={[
                styles.skillValue,
                { color: colors.text.secondary, width: 40, textAlign: 'center' },
              ]}
            >
              {skill.ranks ?? 0}
            </Text>
          </View>
        );
      })}
    </OrnatePanel>
  );
}

// ============================================================
// Feats Tab
// ============================================================

function FeatsTab({ character, dispatch }: { character: Character; dispatch: AppDispatch }) {
  const { colors, fantasy } = useTheme();
  const feats = character.feats.feats;

  if (feats.length === 0) {
    return (
      <OrnatePanel testID="feats-empty">
        <Text style={[styles.emptyText, { color: colors.text.secondary }]}>
          No feats selected yet.
        </Text>
      </OrnatePanel>
    );
  }

  return (
    <>
      {feats.map((charFeat) => {
        const featDef = FeatRegistryService.getFeat(charFeat.featId);
        const isToggle = featDef?.activationMode === 'toggle';

        return (
          <OrnatePanel key={charFeat.featId} testID={`feat-${charFeat.featId}`}>
            <View style={styles.featHeader}>
              <Text style={[styles.featName, { color: colors.text.primary }]}>{charFeat.name}</Text>
              {isToggle && (
                <Pressable
                  onPress={() => dispatch(toggleFeat(charFeat.featId))}
                  style={[
                    styles.toggleButton,
                    {
                      backgroundColor: charFeat.active ? fantasy.forestGreen : colors.bg.tertiary,
                      borderColor: charFeat.active ? fantasy.forestGreen : colors.border.DEFAULT,
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.toggleText,
                      { color: charFeat.active ? '#fff' : colors.text.tertiary },
                    ]}
                  >
                    {charFeat.active ? 'ON' : 'OFF'}
                  </Text>
                </Pressable>
              )}
            </View>
            {featDef?.shortDescription && (
              <Text style={[styles.featDesc, { color: colors.text.secondary }]}>
                {featDef.shortDescription}
              </Text>
            )}
            {Object.keys(charFeat.choices).length > 0 && (
              <Text style={[styles.featChoices, { color: colors.text.tertiary }]}>
                {Object.entries(charFeat.choices)
                  .map(([k, v]) => `${k}: ${v}`)
                  .join(', ')}
              </Text>
            )}
            <Text style={[styles.featSource, { color: colors.text.tertiary }]}>
              Source: {charFeat.source}
            </Text>
          </OrnatePanel>
        );
      })}
    </>
  );
}

// ============================================================
// Shared Components
// ============================================================

function QuickStat({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <View style={styles.quickStat}>
      <Text style={[styles.quickStatValue, { color }]}>{value}</Text>
      <Text style={[styles.quickStatLabel, { color }]}>{label}</Text>
    </View>
  );
}

function StatRow({ label, value, bold }: { label: string; value: string; bold?: boolean }) {
  const { colors } = useTheme();
  return (
    <View style={styles.statRow}>
      <Text style={[styles.statLabel, { color: colors.text.secondary }]}>{label}</Text>
      <Text
        style={[styles.statValue, { color: colors.text.primary }, bold && styles.statValueBold]}
      >
        {value}
      </Text>
    </View>
  );
}

function formatBonus(n: number): string {
  return n >= 0 ? `+${n}` : `${n}`;
}

// ============================================================
// Styles
// ============================================================

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { flex: 1, padding: 16 },
  scrollContent: { padding: 16, paddingBottom: 32 },
  header: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 12,
    borderBottomWidth: 1,
  },
  backButton: { paddingVertical: 4, marginBottom: 4 },
  backText: { fontFamily: 'LibreBaskerville', fontSize: 13 },
  characterName: {
    fontFamily: 'Cinzel',
    fontSize: 22,
    fontWeight: '700',
  },
  classLevel: {
    fontFamily: 'LibreBaskerville',
    fontSize: 13,
    marginTop: 2,
  },
  notFoundText: {
    fontFamily: 'LibreBaskerville',
    fontSize: 14,
    textAlign: 'center',
    paddingVertical: 20,
    lineHeight: 20,
  },
  buttonContainer: { marginTop: 16 },

  // Quick Stats
  quickStatsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 8,
  },
  quickStat: { alignItems: 'center', minWidth: 60 },
  quickStatValue: { fontFamily: 'Cinzel', fontSize: 22, fontWeight: '700' },
  quickStatLabel: {
    fontFamily: 'Cinzel',
    fontSize: 10,
    fontWeight: '600',
    textTransform: 'uppercase',
    marginTop: 2,
  },

  // Stat Rows
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 6,
  },
  statLabel: { fontFamily: 'Cinzel', fontSize: 12, fontWeight: '600', textTransform: 'uppercase' },
  statValue: { fontFamily: 'LibreBaskerville', fontSize: 15 },
  statValueBold: { fontWeight: '700' },

  // Abilities
  abilityDetail: { paddingVertical: 4 },
  abilityMainRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'baseline',
    gap: 12,
    paddingVertical: 8,
  },
  abilityScore: { fontFamily: 'Cinzel', fontSize: 32, fontWeight: '700' },
  abilityMod: { fontFamily: 'Cinzel', fontSize: 20, fontWeight: '600' },

  // Saves
  saveBlock: { marginBottom: 8 },
  saveBreakdown: { paddingLeft: 12 },
  breakdownText: { fontFamily: 'LibreBaskerville', fontSize: 11, lineHeight: 16 },

  // Skills
  skillHeader: { flexDirection: 'row', paddingVertical: 4 },
  skillHeaderText: {
    fontFamily: 'Cinzel',
    fontSize: 10,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  skillRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 4,
    borderRadius: 4,
  },
  skillName: { fontFamily: 'LibreBaskerville', fontSize: 13 },
  skillValue: { fontFamily: 'LibreBaskerville', fontSize: 13 },

  // Feats
  featHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  featName: { fontFamily: 'Cinzel', fontSize: 15, fontWeight: '700', flex: 1 },
  featDesc: { fontFamily: 'LibreBaskerville', fontSize: 13, marginTop: 4, lineHeight: 18 },
  featChoices: { fontFamily: 'LibreBaskerville', fontSize: 12, fontStyle: 'italic', marginTop: 4 },
  featSource: { fontFamily: 'LibreBaskerville', fontSize: 11, marginTop: 4 },
  toggleButton: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    borderWidth: 1,
    minWidth: 44,
    alignItems: 'center',
  },
  toggleText: { fontFamily: 'Cinzel', fontSize: 11, fontWeight: '700' },
  emptyText: {
    fontFamily: 'LibreBaskerville',
    fontSize: 14,
    textAlign: 'center',
    paddingVertical: 20,
  },
});
