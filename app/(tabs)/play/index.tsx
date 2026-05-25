import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  Alert,
  AppState,
  type AppStateStatus,
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@/hooks/useTheme';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  addBuff,
  addTempHP,
  adjustHP,
  adjustNonlethal,
  appendRoll,
  applyRageEndHPLoss,
  applyLongRest,
  applyNewEncounter,
  clearRollLog,
  clearStabilizationPrompt,
  confirmStabilization,
  decrementPool,
  initFromSession,
  initNewSession,
  nextRound,
  removeBuff,
  resetCombat,
  setCombatExpertisePenalty,
  setBuffLibrary,
  toggleBuff,
  toggleCombatAbility,
  togglePreparedSpell,
  toggleStaggered,
  useSpellSlot as expendSpellSlot,
} from '@store/slices/combatSlice';
import { CombatService } from '@services/CombatService';
import { FormulaService } from '@services/FormulaService';
import { PlaySessionService } from '@services/PlaySessionService';
import { endTurn, startTurn } from '@store/thunks/turnThunks';
import { toggleCondition } from '@store/thunks/conditionThunks';
import { RollRecord, Buff, SavedBuff } from '@/types/buff';
import type { PlaySessionDoc } from '@/types/playSession';
import { BuffedTotals } from '@/types/combat';
import type { CharacterSummary } from '@/types/character';
import { BUFF_PRESETS } from '@/data/buffs/presets';

import { HPTracker } from '@/components/combat/HPTracker';
import { InitiativeRow } from '@/components/combat/InitiativeRow';
import { AttackPanel } from '@/components/combat/AttackPanel';
import { DefensePanel } from '@/components/combat/DefensePanel';
import { ResourcesPlayPanel } from '@/components/combat/ResourcesPlayPanel';
import { BuffsPanel } from '@/components/combat/BuffsPanel';
import { SpellsPanel } from '@/components/combat/SpellsPanel';
import { CombatAbilityToggles } from '@/components/combat/CombatAbilityToggles';
import { RollLog } from '@/components/combat/RollLog';
import { DiceRoller } from '@/components/dice/DiceRoller';
import { DamageInputPanel } from '@/components/combat/DamageInputPanel';
import { DamageResolutionService } from '@services/DamageResolutionService';

type CombatTab = 'playsheet' | 'buffs' | 'spells' | 'dice' | 'log';
type PlayView = 'loading' | 'picker' | 'tracker';

const TAB_LABELS: { key: CombatTab; label: string }[] = [
  { key: 'playsheet', label: 'Playsheet' },
  { key: 'buffs', label: 'Buffs' },
  { key: 'spells', label: 'Spells' },
  { key: 'dice', label: 'Dice' },
  { key: 'log', label: 'Log' },
];

export default function CombatTrackerScreen() {
  const { colors, fantasy } = useTheme();
  const th = useMemo(
    () => ({
      safeBg: { backgroundColor: colors.bg.primary },
      headerBorder: { borderBottomColor: colors.border.DEFAULT },
    }),
    [colors],
  );
  const dispatch = useAppDispatch();

  // Redux state — must be declared before any derived state that depends on it
  const character = useAppSelector((s) => s.characters.activeCharacter);
  const characters = useAppSelector((s) => s.characters.characters);
  const userId = useAppSelector((s) => s.auth.user?.uid);
  const {
    activeBuffs,
    combatAbilities,
    currentHP,
    tempHP,
    nonlethalDamage,
    isStaggered,
    staggeredAutoApplied,
    isStabilized,
    pendingStabilizationPrompt,
    round,
    rollLog,
    buffLibrary,
    resourcePools,
    preparedSpellsCast,
    spellSlotsUsed,
  } = useAppSelector((s) => s.combat);

  const [activeTab, setActiveTab] = useState<CombatTab>('playsheet');
  // sessionCheckDone tracks whether the Firestore session lookup has completed.
  // Initialize to true if we're already in a session (currentHP not null) so
  // the derived playView skips the loading state on subsequent mounts.
  const [sessionCheckDone, setSessionCheckDone] = useState(currentHP !== null);
  const [activeSessionIds, setActiveSessionIds] = useState<string[]>([]);
  // sessionCharacterId is the stable Firestore document key for the active session.
  // Set when a session starts and cleared when combat ends so auto-save and
  // handleEndCombat always use the same key, avoiding a mismatch between
  // CharacterSummary.id (local UUID) and character.info.firebaseId (Firestore doc ID).
  const [sessionCharacterId, setSessionCharacterId] = useState<string | null>(null);
  const sessionInitRef = useRef(false);
  const lastUserIdRef = useRef<string | null>(null);

  // Derive the view from state — avoids setting derived state inside effects.
  const playView: PlayView =
    currentHP !== null ? 'tracker' : sessionCheckDone ? 'picker' : 'loading';

  // Seed buff library with presets on first load if empty
  useEffect(() => {
    if (buffLibrary.length === 0) {
      dispatch(setBuffLibrary(BUFF_PRESETS));
    }
  }, [buffLibrary.length, dispatch]);

  // Uses a ref guard so it only fires once even if userId triggers a re-run.
  // Reset the guard when userId changes so a newly signed-in user gets a fresh lookup.
  useEffect(() => {
    if (lastUserIdRef.current !== (userId ?? null)) {
      lastUserIdRef.current = userId ?? null;
      sessionInitRef.current = false;
      setSessionCheckDone(currentHP !== null);
      setActiveSessionIds([]);
      setSessionCharacterId(null);
    }
    if (sessionInitRef.current || currentHP !== null || !userId) return;
    sessionInitRef.current = true;

    PlaySessionService.listActiveSessionCharacterIds(userId)
      .then(async (ids) => {
        setActiveSessionIds(ids);
        if (ids.length === 1 && ids[0] === character?.info.id) {
          const sessionDoc = await PlaySessionService.get(userId, ids[0]);
          if (sessionDoc) {
            dispatch(initFromSession(sessionDoc));
            setSessionCharacterId(ids[0]);
            return;
          }
        }
        setSessionCheckDone(true);
      })
      .catch(() => setSessionCheckDone(true));
    // eslint-disable-next-line react-hooks/exhaustive-deps -- currentHP intentionally excluded: sessionInitRef guards against re-running; dispatch is stable
  }, [userId, character, dispatch]);

  // Restore sessionCharacterId after a remount during an active session.
  // Component state resets to null on remount; this re-derives the key so
  // auto-save and handleEndCombat can find the correct Firestore document.
  useEffect(() => {
    if (!userId || sessionCharacterId !== null || currentHP === null) return;
    PlaySessionService.listActiveSessionCharacterIds(userId)
      .then((ids) => {
        if (ids.length === 1) setSessionCharacterId(ids[0]);
      })
      .catch(() => {});
  }, [userId, sessionCharacterId, currentHP]);

  // Auto-save: flush pending write when app goes to background
  useEffect(() => {
    if (currentHP === null) return undefined;
    const sub = AppState.addEventListener('change', (state: AppStateStatus) => {
      if (state === 'background' || state === 'inactive') {
        void PlaySessionService.flushPendingUpdate().catch((error) => {
          console.error('Failed to flush pending play session updates', error);
        });
      }
    });
    return () => sub.remove();
  }, [currentHP]);

  // Auto-save: schedule debounced write on every meaningful state change
  useEffect(() => {
    if (!character || !userId || currentHP === null) return;
    if (!sessionCharacterId) return;
    const sessionData = {
      currentHP,
      tempHP,
      nonlethalDamage,
      isStabilized,
      activeBuffs,
      combatAbilities,
      round,
      preparedSpellsCast,
      spellSlotsUsed,
      resourcePools,
    };
    PlaySessionService.scheduleDebouncedUpdate(userId, sessionCharacterId, sessionData);
  }, [
    character,
    userId,
    currentHP,
    tempHP,
    nonlethalDamage,
    isStabilized,
    activeBuffs,
    combatAbilities,
    round,
    preparedSpellsCast,
    spellSlotsUsed,
    resourcePools,
    sessionCharacterId,
  ]);

  // Show stabilization prompt when End Turn triggers it while the character is dying
  useEffect(() => {
    if (!pendingStabilizationPrompt) return;
    Alert.alert(
      'Stabilization Check',
      'Make a DC 10 Constitution check — did you stabilize?',
      [
        {
          text: 'No',
          style: 'cancel',
          onPress: () => dispatch(clearStabilizationPrompt()),
        },
        {
          text: 'Yes',
          onPress: () => dispatch(confirmStabilization()),
        },
      ],
      { cancelable: false, onDismiss: () => dispatch(clearStabilizationPrompt()) },
    );
  }, [pendingStabilizationPrompt, dispatch]);

  // Computed values used in tracker
  const maxHP = useMemo(() => {
    if (!character) return 0;
    const hp = character.combatStats.hitPoints;
    return hp.base + hp.constitution + hp.favoredClass + hp.other;
  }, [character]);

  const totals: BuffedTotals | null = useMemo(() => {
    if (!character) return null;
    return CombatService.calculateAllTotals(character, activeBuffs, combatAbilities);
  }, [character, activeBuffs, combatAbilities]);

  const conScore = character?.abilityScores.con.total ?? 10;
  const bab = character?.combatStats.attackBonuses.baseAttack[0] ?? 0;

  const resistances = useMemo(() => {
    if (!character) return { dr: [], energyResistance: {} };
    return DamageResolutionService.extractResistances(character, activeBuffs);
  }, [character, activeBuffs]);

  // ── Handlers ────────────────────────────────────────────────────────────────

  const handleRollRecorded = useCallback(
    (record: RollRecord) => {
      dispatch(appendRoll(record));
    },
    [dispatch],
  );

  const handleAddBuff = useCallback(
    (buff: Buff) => {
      dispatch(addBuff(buff));
    },
    [dispatch],
  );

  const handleToggleCombatAbility = useCallback(
    (key: Parameters<typeof toggleCombatAbility>[0]) => {
      if (key === 'rage' && combatAbilities.rage && character && currentHP !== null) {
        const result = CombatService.calculateRageEndHPAdjustment(character, currentHP, tempHP);
        dispatch(
          applyRageEndHPLoss({ newCurrentHP: result.newCurrentHP, newTempHP: result.newTempHP }),
        );
      }
      dispatch(toggleCombatAbility(key));
    },
    [combatAbilities.rage, character, currentHP, tempHP, dispatch],
  );

  const handleStartTurn = useCallback(() => {
    dispatch(startTurn());
  }, [dispatch]);

  const handleEndTurn = useCallback(() => {
    dispatch(endTurn());
  }, [dispatch]);

  const handleToggleCondition = useCallback(
    (conditionName: string) => {
      dispatch(toggleCondition(conditionName));
    },
    [dispatch],
  );

  const handleNewSession = useCallback(
    (characterId: string) => {
      const hp = character!.combatStats.hitPoints;
      const charMaxHP = hp.base + hp.constitution + hp.favoredClass + hp.other;
      Alert.alert('New Session', 'This will reset your current HP, buffs, and spell slots.', [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Start New Session',
          style: 'destructive',
          onPress: async () => {
            try {
              if (userId) {
                await PlaySessionService.create(userId, characterId, {
                  currentHP: charMaxHP,
                  nonlethalDamage: 0,
                  tempHP: 0,
                  activeBuffs: [],
                  combatAbilities: {
                    powerAttack: false,
                    deadlyAim: false,
                    rage: false,
                    twoWeaponFighting: false,
                    twoWeaponFightingLightOffhand: false,
                    haste: false,
                    flurryOfBlows: false,
                    combatExpertise: false,
                    combatExpertisePenalty: 1,
                  },
                  spellSlotsUsed: {},
                  preparedSpellsCast: {},
                  resourcePools: {},
                  round: 0,
                });
              }
              dispatch(initNewSession({ maxHP: charMaxHP }));
              setSessionCharacterId(characterId);
            } catch {
              Alert.alert('Error', 'Failed to start session. Please try again.');
            }
          },
        },
      ]);
    },
    [character, dispatch, userId],
  );

  const handleResumeSession = useCallback(
    async (characterId: string) => {
      if (!character || characterId !== character.info.id) return;
      if (!userId) return;
      if (!character || characterId !== character.info.id) {
        Alert.alert(
          'Resume Unavailable',
          'Select that character first in the Characters tab, then resume the session.',
        );
        return;
      }
      try {
        const sessionDoc = await PlaySessionService.get(userId, characterId);
        if (sessionDoc) {
          dispatch(initFromSession(sessionDoc));
          setSessionCharacterId(characterId);
          // playView → 'tracker' automatically because currentHP becomes non-null
        } else {
          Alert.alert('Resume Failed', 'Session data is unavailable. Please start a new session.');
        }
      } catch {
        Alert.alert(
          'Resume Failed',
          'Could not load session. Check your connection and try again.',
        );
      }
    },
    [dispatch, userId, character],
  );

  const handleEndCombat = useCallback(async () => {
    PlaySessionService.cancelPendingUpdate();
    if (userId && sessionCharacterId) {
      PlaySessionService.delete(userId, sessionCharacterId).catch((error) => {
        console.error('Failed to end play session', error);
      });
      setActiveSessionIds((ids) => ids.filter((id) => id !== sessionCharacterId));
    }
    dispatch(resetCombat());
    setSessionCharacterId(null);
    sessionInitRef.current = false;
    setSessionCheckDone(true);
    sessionInitRef.current = false;
  }, [dispatch, userId, sessionCharacterId]);

  const handleLongRest = useCallback(() => {
    if (!character || currentHP === null) return;
    Alert.alert(
      'Long Rest',
      'Take a long rest? This restores HP, spell slots, and per-rest resources.',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Rest',
          onPress: () => {
            const formulaContext = FormulaService.buildContext(character);
            const specialPoolRecovery: Record<string, number> = {};
            for (const pool of character.resources) {
              if (pool.rechargeOn === 'special' && pool.restRecoveryFormula) {
                try {
                  const amount = Math.floor(
                    FormulaService.evaluate(pool.restRecoveryFormula, formulaContext),
                  );
                  if (amount > 0) specialPoolRecovery[pool.id] = amount;
                } catch {
                  // invalid formula — skip this pool
                }
              }
            }
            dispatch(
              applyLongRest({
                maxHP,
                characterLevel: character.classes.totalLevel,
                pools: character.resources,
                specialPoolRecovery,
              }),
            );
          },
        },
      ],
    );
  }, [character, currentHP, maxHP, dispatch]);

  // ── Render guards ────────────────────────────────────────────────────────────

  if (!character) {
    return (
      <SafeAreaView style={[styles.safe, th.safeBg]}>
        <View style={styles.noChar}>
          <Text style={[styles.noCharTitle, { color: fantasy.gold }]}>No Character Selected</Text>
          <Text style={[styles.noCharDesc, { color: colors.text.secondary }]}>
            Select a character from the Characters tab to begin combat tracking.
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  if (playView === 'loading') {
    return (
      <SafeAreaView style={[styles.safe, th.safeBg]}>
        <View style={styles.centered}>
          <ActivityIndicator size="large" color={fantasy.gold} />
        </View>
      </SafeAreaView>
    );
  }

  if (playView === 'picker') {
    return (
      <SessionPicker
        characters={characters}
        activeSessionCharacterIds={activeSessionIds}
        activeCharacterId={character.info.firebaseId ?? character.info.id}
        onNewSession={handleNewSession}
        onResumeSession={handleResumeSession}
      />
    );
  }

  // ── Tracker view ─────────────────────────────────────────────────────────────

  return (
    <SafeAreaView style={[styles.safe, th.safeBg]}>
      {/* Header */}
      <View style={[styles.header, th.headerBorder]}>
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
            onPress={handleEndCombat}
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
          keyboardShouldPersistTaps="handled"
        >
          <SectionHeader title="Hit Points" />
          <HPTracker
            currentHP={currentHP ?? maxHP}
            maxHP={maxHP}
            tempHP={tempHP}
            nonlethalDamage={nonlethalDamage}
            conScore={conScore}
            isStaggered={isStaggered}
            staggeredAutoApplied={staggeredAutoApplied}
            onAdjustHP={(delta) => dispatch(adjustHP({ delta, maxHP }))}
            onAddTempHP={(amount) => dispatch(addTempHP(amount))}
            onAdjustNonlethal={(delta) => dispatch(adjustNonlethal(delta))}
            onToggleStaggered={() => dispatch(toggleStaggered())}
            testID="hp-tracker"
          />

          <DamageInputPanel
            resistances={resistances}
            onApplyDamage={(resolved) => dispatch(adjustHP({ delta: -resolved, maxHP }))}
            testID="damage-input-panel"
          />

          <SectionHeader title="Initiative" />
          <InitiativeRow
            initiative={character.combatStats.initiative.total}
            onRollRecorded={handleRollRecorded}
          />

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

          <SectionHeader title="Resources" />
          <ResourcesPlayPanel
            pools={character.resources}
            currentValues={resourcePools}
            onDecrementPool={(poolId, amount) => dispatch(decrementPool({ poolId, amount }))}
            onNewEncounter={() => dispatch(applyNewEncounter(character.resources))}
            showNewEncounterButton={character.resources.some(
              (p) => p.rechargeOn === 'per_encounter',
            )}
            onLongRest={handleLongRest}
            testID="resources-play-panel"
          />

          <View style={styles.spacerLarge} />
        </ScrollView>
      )}

      {activeTab === 'buffs' && (
        <ScrollView
          style={styles.tabContent}
          contentContainerStyle={styles.tabContentInner}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <BuffsPanel
            activeBuffs={activeBuffs}
            buffLibrary={buffLibrary}
            round={round}
            activeConditions={character.conditions.activeConditions.map((c) => c.name)}
            onAddBuff={handleAddBuff}
            onRemoveBuff={(id) => dispatch(removeBuff(id))}
            onToggleBuff={(id) => dispatch(toggleBuff(id))}
            onSaveToLibrary={(_: SavedBuff) => {
              /* future: dispatch(addToBuffLibrary(buff)) */
            }}
            onToggleCondition={handleToggleCondition}
            onStartTurn={handleStartTurn}
            onEndTurn={handleEndTurn}
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

          <View style={styles.spacerLarge} />
        </ScrollView>
      )}

      {activeTab === 'spells' && (
        <ScrollView
          style={styles.tabContent}
          contentContainerStyle={styles.tabContentInner}
          showsVerticalScrollIndicator={false}
        >
          <SpellsPanel
            pools={character.spellcasting.pools}
            preparedSpells={character.spellcasting.preparedSpells}
            preparedSpellsCast={preparedSpellsCast}
            spellSlotsUsed={spellSlotsUsed}
            onTogglePreparedSpell={(spellIndex) => dispatch(togglePreparedSpell({ spellIndex }))}
            onUseSpellSlot={(poolKey, level) => dispatch(expendSpellSlot({ poolKey, level }))}
            testID="spells-panel"
          />
          <View style={styles.footerSpacer} />
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
          keyboardShouldPersistTaps="handled"
        >
          <RollLog rolls={rollLog} onClear={() => dispatch(clearRollLog())} testID="roll-log" />
          <View style={styles.spacerSmall} />
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

// ── Session Picker ────────────────────────────────────────────────────────────

interface SessionPickerProps {
  characters: CharacterSummary[];
  activeSessionCharacterIds: string[];
  activeCharacterId: string;
  onNewSession: (characterId: string) => void;
  onResumeSession: (characterId: string) => Promise<void>;
}

function SessionPicker({
  characters,
  activeSessionCharacterIds,
  activeCharacterId,
  onNewSession,
  onResumeSession,
}: SessionPickerProps) {
  const { colors, fantasy } = useTheme();
  const [resuming, setResuming] = useState<string | null>(null);

  const activeSet = useMemo(() => new Set(activeSessionCharacterIds), [activeSessionCharacterIds]);

  const sth = useMemo(
    () => ({
      safeBg: { backgroundColor: colors.bg.primary },
      headerBorder: { borderBottomColor: colors.border.DEFAULT },
      goldText: { color: fantasy.gold },
      secondaryText: { color: colors.text.secondary },
      cardBg: { backgroundColor: colors.bg.secondary },
      bronzeBorder: { borderColor: fantasy.bronze },
      dfltBorder: { borderColor: colors.border.DEFAULT },
      primaryBg: { backgroundColor: colors.primary.DEFAULT },
    }),
    [colors, fantasy],
  );

  const handleResume = useCallback(
    async (characterId: string) => {
      setResuming(characterId);
      try {
        await onResumeSession(characterId);
      } catch (error) {
        console.warn('Failed to resume session:', error);
        Alert.alert('Resume Failed', 'Could not load the saved session. Please try again.');
      } finally {
        setResuming(null);
      }
    },
    [onResumeSession],
  );

  return (
    <SafeAreaView style={[styles.safe, sth.safeBg]}>
      <View style={[pickerStyles.header, sth.headerBorder]}>
        <Text style={[pickerStyles.title, sth.goldText]}>Play Session</Text>
        <Text style={[pickerStyles.subtitle, sth.secondaryText]}>Choose a character to begin</Text>
      </View>

      {characters.length === 0 ? (
        <View style={styles.centered}>
          <Text style={[styles.noCharDesc, sth.secondaryText]}>
            No characters found. Create a character first.
          </Text>
        </View>
      ) : (
        <FlatList
          data={characters}
          keyExtractor={(item) => item.id}
          contentContainerStyle={pickerStyles.list}
          renderItem={({ item }) => {
            const hasSession = activeSet.has(item.id);
            const isLoading = resuming === item.id;
            return (
              <View
                style={[
                  pickerStyles.card,
                  sth.cardBg,
                  hasSession ? sth.bronzeBorder : sth.dfltBorder,
                ]}
              >
                <View style={pickerStyles.cardInfo}>
                  <Text style={[pickerStyles.cardName, sth.goldText]} numberOfLines={1}>
                    {item.name}
                  </Text>
                  <Text style={[pickerStyles.cardSub, { color: colors.text.tertiary }]}>
                    {item.classes} · {item.race}
                  </Text>
                </View>
                <View style={pickerStyles.cardActions}>
                  {hasSession && (
                    <Pressable
                      style={[
                        pickerStyles.resumeBtn,
                        { backgroundColor: colors.primary.DEFAULT },
                        item.id !== activeCharacterId && { opacity: 0.4 },
                      ]}
                      onPress={() => void handleResume(item.id)}
                      disabled={isLoading || item.id !== activeCharacterId}
                      accessibilityLabel={`Resume session for ${item.name}`}
                    >
                      {isLoading ? (
                        <ActivityIndicator size="small" color="#FFFFFF" />
                      ) : (
                        <Text style={[pickerStyles.btnText, { color: '#fff' }]}>Resume</Text>
                      )}
                    </Pressable>
                  )}
                  <Pressable
                    style={[
                      pickerStyles.newBtn,
                      sth.dfltBorder,
                      item.id !== activeCharacterId && pickerStyles.newBtnDisabled,
                    ]}
                    onPress={() => onNewSession(item.id)}
                    disabled={item.id !== activeCharacterId}
                    accessibilityLabel={`New session for ${item.name}`}
                  >
                    <Text style={[pickerStyles.newBtnText, sth.secondaryText]}>New Session</Text>
                  </Pressable>
                </View>
              </View>
            );
          }}
        />
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

// ── Styles ───────────────────────────────────────────────────────────────────

const styles = StyleSheet.create({
  safe: { flex: 1 },
  centered: { flex: 1, alignItems: 'center', justifyContent: 'center' },
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
  spacerLarge: { height: 80 },
  spacerSmall: { height: 40 },
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
  footerSpacer: {
    height: 32,
  },
});

const pickerStyles = StyleSheet.create({
  header: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    gap: 4,
  },
  title: {
    fontFamily: 'Cinzel',
    fontSize: 22,
    fontWeight: '700',
  },
  subtitle: {
    fontFamily: 'LibreBaskerville',
    fontSize: 13,
  },
  list: {
    padding: 16,
    gap: 12,
  },
  card: {
    borderRadius: 10,
    borderWidth: 1,
    padding: 14,
    gap: 10,
  },
  cardInfo: { gap: 2 },
  cardName: {
    fontFamily: 'Cinzel',
    fontSize: 15,
    fontWeight: '700',
  },
  cardSub: {
    fontFamily: 'LibreBaskerville',
    fontSize: 12,
  },
  cardActions: {
    flexDirection: 'row',
    gap: 8,
  },
  resumeBtn: {
    flex: 1,
    borderRadius: 6,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 40,
  },
  newBtn: {
    flex: 1,
    borderRadius: 6,
    borderWidth: 1,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 40,
  },
  newBtnDisabled: {
    opacity: 0.4,
  },
  btnText: {
    fontFamily: 'Cinzel',
    fontSize: 12,
    fontWeight: '600',
  },
  newBtnText: {
    fontFamily: 'Cinzel',
    fontSize: 12,
    fontWeight: '600',
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
