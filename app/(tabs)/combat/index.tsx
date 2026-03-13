import React, { useEffect, useMemo, useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  addBuff,
  addTempHP,
  adjustHP,
  adjustNonlethal,
  appendRoll,
  applyRageEndHPLoss,
  clearRollLog,
  initHP,
  nextRound,
  removeBuff,
  resetCombat,
  setCombatExpertisePenalty,
  setBuffLibrary,
  toggleBuff,
  toggleCombatAbility,
} from '@store/slices/combatSlice';
import { CombatService } from '@services/CombatService';
import { RollRecord, Buff, SavedBuff } from '@/types/buff';
import { BuffedTotals } from '@/types/combat';
import { BUFF_PRESETS } from '@/data/buffs/presets';

import { HPTracker } from '@/components/combat/HPTracker';
import { AttackPanel } from '@/components/combat/AttackPanel';
import { DefensePanel } from '@/components/combat/DefensePanel';
import { BuffsPanel } from '@/components/combat/BuffsPanel';
import { CombatAbilityToggles } from '@/components/combat/CombatAbilityToggles';
import { RollLog } from '@/components/combat/RollLog';
import { DiceRoller } from '@/components/dice/DiceRoller';

type CombatTab = 'playsheet' | 'buffs' | 'dice' | 'log';

const TAB_LABELS: { key: CombatTab; label: string }[] = [
  { key: 'playsheet', label: 'Playsheet' },
  { key: 'buffs', label: 'Buffs' },
  { key: 'dice', label: 'Dice' },
  { key: 'log', label: 'Log' },
];

export default function CombatTrackerScreen() {
  const { colors, fantasy } = useTheme();
  const dispatch = useAppDispatch();
  const [activeTab, setActiveTab] = useState<CombatTab>('playsheet');

  // Redux state
  const character = useAppSelector((s) => s.characters.activeCharacter);
  const {
    activeBuffs,
    combatAbilities,
    currentHP,
    tempHP,
    nonlethalDamage,
    round,
    rollLog,
    buffLibrary,
  } = useAppSelector((s) => s.combat);

  // Seed buff library with presets on first load if empty
  useEffect(() => {
    if (buffLibrary.length === 0) {
      dispatch(setBuffLibrary(BUFF_PRESETS));
    }
  }, [buffLibrary.length, dispatch]);

  // Init HP from character when entering combat for the first time
  useEffect(() => {
    if (character && currentHP === null) {
      const hp = character.combatStats.hitPoints;
      const maxHP = hp.base + hp.constitution + hp.favoredClass + hp.other;
      dispatch(initHP(maxHP));
    }
  }, [character, currentHP, dispatch]);

  // Compute buffed totals whenever character, buffs, or abilities change
  const totals: BuffedTotals | null = useMemo(() => {
    if (!character) return null;
    return CombatService.calculateAllTotals(character, activeBuffs, combatAbilities);
  }, [character, activeBuffs, combatAbilities]);

  const maxHP = useMemo(() => {
    if (!character) return 0;
    const hp = character.combatStats.hitPoints;
    return hp.base + hp.constitution + hp.favoredClass + hp.other;
  }, [character]);

  const conScore = character?.abilityScores.con.total ?? 10;
  const bab = character?.combatStats.attackBonuses.baseAttack[0] ?? 0;

  const handleRollRecorded = (record: RollRecord) => {
    dispatch(appendRoll(record));
  };

  const handleAddBuff = (buff: Buff) => {
    dispatch(addBuff(buff));
  };

  const handleToggleCombatAbility = (key: Parameters<typeof toggleCombatAbility>[0]) => {
    // If rage is being toggled off, apply HP adjustment
    if (key === 'rage' && combatAbilities.rage && character && currentHP !== null) {
      const result = CombatService.calculateRageEndHPAdjustment(character, currentHP, tempHP);
      dispatch(
        applyRageEndHPLoss({ newCurrentHP: result.newCurrentHP, newTempHP: result.newTempHP }),
      );
    }
    dispatch(toggleCombatAbility(key));
  };

  if (!character) {
    return (
      <SafeAreaView style={[styles.safe, { backgroundColor: colors.bg.primary }]}>
        <View style={styles.noChar}>
          <Text style={[styles.noCharTitle, { color: fantasy.gold }]}>No Character Selected</Text>
          <Text style={[styles.noCharDesc, { color: colors.text.secondary }]}>
            Select a character from the Characters tab to begin combat tracking.
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: colors.bg.primary }]}>
      {/* Header */}
      <View style={[styles.header, { borderBottomColor: colors.border.DEFAULT }]}>
        <View style={styles.headerLeft}>
          <Text style={[styles.charName, { color: fantasy.gold }]} numberOfLines={1}>
            {character.info.name}
          </Text>
          <Text style={[styles.charSub, { color: colors.text.tertiary }]}>
            Round {round > 0 ? round : '—'}
          </Text>
        </View>
        <View style={styles.headerRight}>
          <Pressable
            style={[styles.roundBtn, { borderColor: fantasy.bronze }]}
            onPress={() => dispatch(nextRound())}
            accessibilityLabel="Next round"
          >
            <Text style={[styles.roundBtnText, { color: fantasy.bronze }]}>Next Round</Text>
          </Pressable>
          <Pressable
            style={[styles.endBtn, { borderColor: colors.error.DEFAULT }]}
            onPress={() => dispatch(resetCombat())}
            accessibilityLabel="End combat"
          >
            <Text style={[styles.endBtnText, { color: colors.error.DEFAULT }]}>End</Text>
          </Pressable>
        </View>
      </View>

      {/* Tab bar */}
      <View
        style={[
          styles.tabBar,
          { backgroundColor: colors.bg.secondary, borderBottomColor: colors.border.DEFAULT },
        ]}
      >
        {TAB_LABELS.map(({ key, label }) => (
          <Pressable
            key={key}
            style={[
              styles.tabBtn,
              activeTab === key && [styles.tabBtnActive, { borderBottomColor: fantasy.gold }],
            ]}
            onPress={() => setActiveTab(key)}
            accessibilityLabel={`${label} tab`}
            accessibilityState={{ selected: activeTab === key }}
          >
            <Text
              style={[
                styles.tabBtnText,
                { color: activeTab === key ? fantasy.gold : colors.text.tertiary },
              ]}
            >
              {label}
            </Text>
            {key === 'log' && rollLog.length > 0 && (
              <View style={[styles.logBadge, { backgroundColor: fantasy.bronze }]}>
                <Text style={styles.logBadgeText}>
                  {rollLog.length > 99 ? '99+' : rollLog.length}
                </Text>
              </View>
            )}
          </Pressable>
        ))}
      </View>

      {/* Tab content */}
      {activeTab === 'playsheet' && (
        <ScrollView
          style={styles.tabContent}
          contentContainerStyle={styles.tabContentInner}
          showsVerticalScrollIndicator={false}
        >
          {/* HP Tracker */}
          <SectionHeader title="Hit Points" />
          <HPTracker
            currentHP={currentHP ?? maxHP}
            maxHP={maxHP}
            tempHP={tempHP}
            nonlethalDamage={nonlethalDamage}
            conScore={conScore}
            onAdjustHP={(delta) => dispatch(adjustHP({ delta, maxHP }))}
            onAddTempHP={(amount) => dispatch(addTempHP(amount))}
            onAdjustNonlethal={(delta) => dispatch(adjustNonlethal(delta))}
            testID="hp-tracker"
          />

          {/* Initiative */}
          <SectionHeader title="Initiative" />
          <InitiativeRow
            initiative={character.combatStats.initiative.total}
            onRollRecorded={handleRollRecorded}
          />

          {/* Attacks */}
          <SectionHeader title="Attacks" />
          <AttackPanel
            meleeAttacks={
              totals?.meleeAttack ?? character.combatStats.attackBonuses.allAttacks.melee
            }
            rangedAttacks={
              totals?.rangedAttack ?? character.combatStats.attackBonuses.allAttacks.ranged
            }
            onRollRecorded={handleRollRecorded}
            testID="attack-panel"
          />

          {/* Defense */}
          <SectionHeader title="Defense" />
          <DefensePanel
            ac={
              totals?.ac ?? {
                total: character.combatStats.armorClass.total,
                touch: character.combatStats.armorClass.touch,
                flatFooted: character.combatStats.armorClass.flatFooted,
                breakdown: [],
              }
            }
            fort={totals?.fort ?? character.combatStats.savingThrows.fortitude.total}
            ref={totals?.ref ?? character.combatStats.savingThrows.reflex.total}
            will={totals?.will ?? character.combatStats.savingThrows.will.total}
            cmb={character.combatStats.combatManeuver.bonus.total}
            cmd={character.combatStats.combatManeuver.defense.total}
            onRollRecorded={handleRollRecorded}
            testID="defense-panel"
          />

          <View style={{ height: 80 }} />
        </ScrollView>
      )}

      {activeTab === 'buffs' && (
        <ScrollView
          style={styles.tabContent}
          contentContainerStyle={styles.tabContentInner}
          showsVerticalScrollIndicator={false}
        >
          <BuffsPanel
            activeBuffs={activeBuffs}
            buffLibrary={buffLibrary}
            round={round}
            onAddBuff={handleAddBuff}
            onRemoveBuff={(id) => dispatch(removeBuff(id))}
            onToggleBuff={(id) => dispatch(toggleBuff(id))}
            onSaveToLibrary={(_: SavedBuff) => {
              /* future: dispatch(addToBuffLibrary(buff)) */
            }}
            testID="buffs-panel"
          />

          <View style={styles.sectionSpacer} />

          <CombatAbilityToggles
            abilities={combatAbilities}
            bab={bab}
            onToggle={handleToggleCombatAbility}
            onSetExpertisePenalty={(v) => dispatch(setCombatExpertisePenalty(v))}
            testID="combat-ability-toggles"
          />

          <View style={{ height: 80 }} />
        </ScrollView>
      )}

      {activeTab === 'dice' && (
        <View style={styles.tabContent}>
          <DiceRoller onRollRecorded={handleRollRecorded} testID="dice-roller" />
        </View>
      )}

      {activeTab === 'log' && (
        <ScrollView
          style={styles.tabContent}
          contentContainerStyle={styles.tabContentInner}
          showsVerticalScrollIndicator={false}
        >
          <RollLog rolls={rollLog} onClear={() => dispatch(clearRollLog())} testID="roll-log" />
          <View style={{ height: 40 }} />
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

// ── Small helpers ────────────────────────────────────────────────────────────

function SectionHeader({ title }: { title: string }) {
  const { fantasy } = useTheme();
  return (
    <View style={sectionHeaderStyles.row}>
      <View style={[sectionHeaderStyles.line, { backgroundColor: fantasy.bronze }]} />
      <Text style={[sectionHeaderStyles.text, { color: fantasy.gold }]}>{title}</Text>
      <View style={[sectionHeaderStyles.line, { backgroundColor: fantasy.bronze }]} />
    </View>
  );
}

function InitiativeRow({
  initiative,
  onRollRecorded,
}: {
  initiative: number;
  onRollRecorded: (r: RollRecord) => void;
}) {
  const { colors, fantasy } = useTheme();
  const { DiceService } = require('@services/DiceService');
  const handleRoll = () => {
    const raw = DiceService.rollD20();
    const total = raw + initiative;
    const record: RollRecord = {
      id: `init_${Date.now()}`,
      timestamp: Date.now(),
      type: 'initiative',
      label: 'Initiative',
      diceNotation: DiceService.buildNotation(1, 20, initiative),
      rawRoll: raw,
      modifier: initiative,
      total,
      breakdown: [`d20: ${raw}`, `Initiative: ${initiative >= 0 ? '+' : ''}${initiative}`],
      isCrit: raw === 20,
      isCritFail: raw === 1,
      isManual: false,
    };
    onRollRecorded(record);
  };

  return (
    <View
      style={[
        initStyles.row,
        { backgroundColor: colors.bg.secondary, borderColor: colors.border.DEFAULT },
      ]}
    >
      <Text style={[initStyles.label, { color: colors.text.tertiary }]}>Initiative</Text>
      <Text style={[initStyles.value, { color: fantasy.gold }]}>
        {initiative >= 0 ? `+${initiative}` : `${initiative}`}
      </Text>
      <Pressable
        style={[initStyles.rollBtn, { backgroundColor: colors.primary.DEFAULT }]}
        onPress={handleRoll}
        accessibilityLabel="Roll initiative"
      >
        <Text style={initStyles.rollBtnText}>Roll</Text>
      </Pressable>
    </View>
  );
}

// ── Styles ───────────────────────────────────────────────────────────────────

const styles = StyleSheet.create({
  safe: { flex: 1 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
  },
  headerLeft: { flex: 1 },
  charName: {
    fontFamily: 'Cinzel',
    fontSize: 17,
    fontWeight: '700',
  },
  charSub: {
    fontFamily: 'LibreBaskerville',
    fontSize: 12,
    marginTop: 1,
  },
  headerRight: {
    flexDirection: 'row',
    gap: 8,
    marginLeft: 12,
  },
  roundBtn: {
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 6,
    minHeight: 36,
    justifyContent: 'center',
  },
  roundBtnText: {
    fontFamily: 'Cinzel',
    fontSize: 11,
    fontWeight: '600',
  },
  endBtn: {
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 6,
    minHeight: 36,
    justifyContent: 'center',
  },
  endBtnText: {
    fontFamily: 'Cinzel',
    fontSize: 11,
    fontWeight: '600',
  },
  tabBar: {
    flexDirection: 'row',
    borderBottomWidth: 1,
  },
  tabBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    gap: 4,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  tabBtnActive: {},
  tabBtnText: {
    fontFamily: 'Cinzel',
    fontSize: 11,
    fontWeight: '600',
  },
  logBadge: {
    borderRadius: 8,
    paddingHorizontal: 4,
    paddingVertical: 1,
    minWidth: 16,
    alignItems: 'center',
  },
  logBadgeText: {
    fontFamily: 'LibreBaskerville',
    fontSize: 9,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  tabContent: { flex: 1 },
  tabContentInner: {
    padding: 16,
    gap: 12,
  },
  sectionSpacer: { height: 8 },
  noChar: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32,
    gap: 12,
  },
  noCharTitle: {
    fontFamily: 'Cinzel',
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
  noCharDesc: {
    fontFamily: 'LibreBaskerville',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 22,
  },
});

const sectionHeaderStyles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 4,
  },
  line: {
    flex: 1,
    height: 1,
  },
  text: {
    fontFamily: 'Cinzel',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1,
  },
});

const initStyles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    gap: 8,
  },
  label: {
    fontFamily: 'LibreBaskerville',
    fontSize: 13,
    flex: 1,
  },
  value: {
    fontFamily: 'Cinzel',
    fontSize: 22,
    fontWeight: '700',
    minWidth: 48,
    textAlign: 'right',
  },
  rollBtn: {
    borderRadius: 6,
    paddingHorizontal: 16,
    paddingVertical: 8,
    minHeight: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rollBtnText: {
    fontFamily: 'Cinzel',
    fontSize: 13,
    color: '#FFFFFF',
    fontWeight: '600',
  },
});
