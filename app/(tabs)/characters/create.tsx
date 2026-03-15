import React, { useState } from 'react';
import { SafeAreaView, View, Text, ScrollView, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { useTheme } from '@/hooks/useTheme';
import { createCharacter } from '@/store/slices/charactersSlice';
import { OrnatePanel } from '@/components/ui/OrnatePanel';
import { OrnateButton } from '@/components/ui/OrnateButton';
import { FantasyTextInput } from '@/components/ui/FantasyTextInput';
import { RaceSelector } from '@/components/character/RaceSelector';
import { ClassSelector } from '@/components/character/ClassSelector';
import { AbilityScoreEditor } from '@/components/character/AbilityScoreEditor';
import { Alignment } from '@/types/base';
import { AbilityScoreMethod } from '@/types/character';
import { AbilityScoreService } from '@/services/AbilityScoreService';
import { type ExpandedRaceData } from '@/data/races';
import { getClassByName } from '@/data/classes';
import type { Race } from '@/types/race';

type AbilityKey = 'str' | 'dex' | 'con' | 'int' | 'wis' | 'cha';

const STEPS = ['Name', 'Race', 'Class', 'Abilities', 'Skills', 'Review'] as const;

const ALIGNMENTS = Object.values(Alignment);

const ABILITY_LABELS: Record<AbilityKey, string> = {
  str: 'Strength',
  dex: 'Dexterity',
  con: 'Constitution',
  int: 'Intelligence',
  wis: 'Wisdom',
  cha: 'Charisma',
};

// Skill key → display name + governing ability
const SKILL_INFO: Record<string, { name: string; ability: AbilityKey }> = {
  acrobatics: { name: 'Acrobatics', ability: 'dex' },
  appraise: { name: 'Appraise', ability: 'int' },
  bluff: { name: 'Bluff', ability: 'cha' },
  climb: { name: 'Climb', ability: 'str' },
  diplomacy: { name: 'Diplomacy', ability: 'cha' },
  disableDevice: { name: 'Disable Device', ability: 'dex' },
  disguise: { name: 'Disguise', ability: 'cha' },
  escapeArtist: { name: 'Escape Artist', ability: 'dex' },
  fly: { name: 'Fly', ability: 'dex' },
  handleAnimal: { name: 'Handle Animal', ability: 'cha' },
  heal: { name: 'Heal', ability: 'wis' },
  intimidate: { name: 'Intimidate', ability: 'cha' },
  knowledgeArcana: { name: 'Knowledge (Arcana)', ability: 'int' },
  knowledgeDungeoneering: { name: 'Knowledge (Dungeoneering)', ability: 'int' },
  knowledgeEngineering: { name: 'Knowledge (Engineering)', ability: 'int' },
  knowledgeGeography: { name: 'Knowledge (Geography)', ability: 'int' },
  knowledgeHistory: { name: 'Knowledge (History)', ability: 'int' },
  knowledgeLocal: { name: 'Knowledge (Local)', ability: 'int' },
  knowledgeNature: { name: 'Knowledge (Nature)', ability: 'int' },
  knowledgeNobility: { name: 'Knowledge (Nobility)', ability: 'int' },
  knowledgePlanes: { name: 'Knowledge (Planes)', ability: 'int' },
  knowledgeReligion: { name: 'Knowledge (Religion)', ability: 'int' },
  linguistics: { name: 'Linguistics', ability: 'int' },
  perception: { name: 'Perception', ability: 'wis' },
  ride: { name: 'Ride', ability: 'dex' },
  senseMotive: { name: 'Sense Motive', ability: 'wis' },
  sleightOfHand: { name: 'Sleight of Hand', ability: 'dex' },
  spellcraft: { name: 'Spellcraft', ability: 'int' },
  stealth: { name: 'Stealth', ability: 'dex' },
  survival: { name: 'Survival', ability: 'wis' },
  swim: { name: 'Swim', ability: 'str' },
  useMagicDevice: { name: 'Use Magic Device', ability: 'cha' },
};

// Map class skill display names → skill keys
const CLASS_SKILL_MAP: Record<string, string> = {
  Acrobatics: 'acrobatics',
  Appraise: 'appraise',
  Bluff: 'bluff',
  Climb: 'climb',
  Craft: 'craft',
  Diplomacy: 'diplomacy',
  'Disable Device': 'disableDevice',
  Disguise: 'disguise',
  'Escape Artist': 'escapeArtist',
  Fly: 'fly',
  'Handle Animal': 'handleAnimal',
  Heal: 'heal',
  Intimidate: 'intimidate',
  'Knowledge (arcana)': 'knowledgeArcana',
  'Knowledge (dungeoneering)': 'knowledgeDungeoneering',
  'Knowledge (engineering)': 'knowledgeEngineering',
  'Knowledge (geography)': 'knowledgeGeography',
  'Knowledge (history)': 'knowledgeHistory',
  'Knowledge (local)': 'knowledgeLocal',
  'Knowledge (nature)': 'knowledgeNature',
  'Knowledge (nobility)': 'knowledgeNobility',
  'Knowledge (planes)': 'knowledgePlanes',
  'Knowledge (religion)': 'knowledgeReligion',
  Linguistics: 'linguistics',
  Perception: 'perception',
  Perform: 'perform',
  Profession: 'profession',
  Ride: 'ride',
  'Sense Motive': 'senseMotive',
  'Sleight of Hand': 'sleightOfHand',
  Spellcraft: 'spellcraft',
  Stealth: 'stealth',
  Survival: 'survival',
  Swim: 'swim',
  'Use Magic Device': 'useMagicDevice',
};

function getClassSkillKeys(classSkills: string[]): Set<string> {
  const keys = new Set<string>();
  for (const cs of classSkills) {
    if (cs === 'Knowledge (all)') {
      Object.keys(SKILL_INFO)
        .filter((k) => k.startsWith('knowledge'))
        .forEach((k) => keys.add(k));
    } else {
      const key = CLASS_SKILL_MAP[cs];
      if (key && key in SKILL_INFO) keys.add(key);
    }
  }
  return keys;
}

function raceDataToRace(data: ExpandedRaceData, flexibleAbility?: string): Race {
  const abilityModifiers: Race['abilityModifiers'] = {};
  const keyMap: Record<string, keyof Race['abilityModifiers']> = {
    strength: 'str',
    dexterity: 'dex',
    constitution: 'con',
    intelligence: 'int',
    wisdom: 'wis',
    charisma: 'cha',
  };

  for (const [key, val] of Object.entries(data.abilityModifiers)) {
    const short = keyMap[key];
    if (short && val !== undefined) {
      abilityModifiers[short] = val;
    }
  }

  if (data.flexibleAbilityBonus && flexibleAbility) {
    const short = keyMap[flexibleAbility];
    if (short) {
      abilityModifiers[short] = (abilityModifiers[short] ?? 0) + 2;
    }
  }

  return {
    name: data.name,
    sizeMod: data.size,
    baseSpeed: data.speed,
    alternativeMovements: data.alternativeMovements ?? {},
    abilityModifiers,
    traits: data.racialTraits.map((t) => ({
      name: t.name,
      description: t.description,
      effects: [],
    })),
    languages: data.languages,
    bonusLanguages: data.bonusLanguages,
  };
}

export default function CreateCharacterScreen() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { colors, fantasy } = useTheme();
  const userId = useAppSelector((state) => state.auth.user?.uid);
  const { loading } = useAppSelector((state) => state.characters);

  const [stepIndex, setStepIndex] = useState(0);
  const [error, setError] = useState('');

  // Form state
  const [name, setName] = useState('');
  const [alignment, setAlignment] = useState<Alignment>(Alignment.TrueNeutral);
  const [selectedRaceData, setSelectedRaceData] = useState<ExpandedRaceData | null>(null);
  const [flexibleAbility, setFlexibleAbility] = useState<string>('');
  const [selectedClass, setSelectedClass] = useState<string | null>(null);
  const [abilityMethod, setAbilityMethod] = useState(AbilityScoreMethod.PointBuy);
  const [scores, setScores] = useState({ str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10 });
  const [pointBuyTotal] = useState(20);
  const [skillRanks, setSkillRanks] = useState<Record<string, number>>({});

  const step = STEPS[stepIndex];

  const pointsSpent = Object.values(scores).reduce(
    (sum, s) => sum + AbilityScoreService.calculatePointCost(s),
    0,
  );

  const handleScoreChange = (ability: AbilityKey, value: number) => {
    setScores((prev) => ({ ...prev, [ability]: value }));
  };

  const handleRollAll = () => {
    const abilities: AbilityKey[] = ['str', 'dex', 'con', 'int', 'wis', 'cha'];
    const newScores = { ...scores };
    for (const ability of abilities) {
      const roll =
        abilityMethod === AbilityScoreMethod.Roll3d6
          ? AbilityScoreService.roll3d6()
          : AbilityScoreService.roll4d6DropLowest();
      newScores[ability] = roll.total;
    }
    setScores(newScores);
  };

  // Compute INT modifier for skill ranks (includes racial bonus)
  const intScore =
    scores.int +
    (selectedRaceData
      ? (raceDataToRace(selectedRaceData, flexibleAbility).abilityModifiers.int ?? 0)
      : 0);
  const intMod = Math.floor((intScore - 10) / 2);
  const classData = selectedClass ? getClassByName(selectedClass) : null;
  const totalSkillRanks = Math.max(1, (classData?.skillRanksPerLevel ?? 2) + intMod);
  const ranksSpent = Object.values(skillRanks).reduce((sum, r) => sum + r, 0);
  const classSkillKeys = classData ? getClassSkillKeys(classData.classSkills) : new Set<string>();

  const canAdvance = (): boolean => {
    switch (step) {
      case 'Name':
        return name.trim().length > 0;
      case 'Race':
        if (!selectedRaceData) return false;
        if (selectedRaceData.flexibleAbilityBonus && !flexibleAbility) return false;
        return true;
      case 'Class':
        return selectedClass !== null;
      case 'Abilities':
        if (abilityMethod === AbilityScoreMethod.PointBuy) {
          return pointsSpent <= pointBuyTotal;
        }
        return true;
      case 'Skills':
        return ranksSpent <= totalSkillRanks;
      case 'Review':
        return true;
    }
  };

  const handleNext = () => {
    setError('');
    if (stepIndex < STEPS.length - 1) {
      setStepIndex(stepIndex + 1);
    }
  };

  const handleBack = () => {
    setError('');
    if (stepIndex > 0) {
      setStepIndex(stepIndex - 1);
    } else {
      router.back();
    }
  };

  const handleCreate = async () => {
    if (!userId || !selectedRaceData || !selectedClass) return;
    setError('');

    const race = raceDataToRace(selectedRaceData, flexibleAbility);

    // Filter out zero-rank skills
    const allocatedSkills: Record<string, number> = {};
    for (const [key, ranks] of Object.entries(skillRanks)) {
      if (ranks > 0) allocatedSkills[key] = ranks;
    }

    const result = await dispatch(
      createCharacter({
        userId,
        data: {
          name: name.trim(),
          race,
          selectedClass,
          abilityScoreMethod: abilityMethod,
          abilityScores: scores,
          alignment,
          skillRanks: Object.keys(allocatedSkills).length > 0 ? allocatedSkills : undefined,
        },
      }),
    );

    if (createCharacter.fulfilled.match(result)) {
      router.replace('/(tabs)/characters');
    } else {
      setError((result.payload as string) || 'Failed to create character');
    }
  };

  const renderStepIndicator = () => (
    <View style={styles.stepIndicator}>
      {STEPS.map((s, i) => (
        <View key={s} style={styles.stepDot}>
          <View
            style={[
              styles.dot,
              {
                backgroundColor: i <= stepIndex ? fantasy.gold : colors.border.DEFAULT,
              },
            ]}
          />
          <Text
            style={[
              styles.stepLabel,
              {
                color: i === stepIndex ? fantasy.gold : colors.text.tertiary,
              },
            ]}
          >
            {s}
          </Text>
        </View>
      ))}
    </View>
  );

  const renderNameStep = () => (
    <OrnatePanel title="Character Info">
      <FantasyTextInput
        label="Character Name"
        value={name}
        onChangeText={setName}
        placeholder="Enter character name"
        testID="character-name"
        accessibilityLabel="Character name"
      />
      <Text style={[styles.fieldLabel, { color: colors.text.secondary }]}>Alignment</Text>
      <View style={styles.alignmentGrid}>
        {ALIGNMENTS.map((a) => (
          <OrnateButton
            key={a}
            title={a}
            onPress={() => setAlignment(a)}
            variant={alignment === a ? 'primary' : 'ghost'}
            testID={`alignment-${a}`}
          />
        ))}
      </View>
    </OrnatePanel>
  );

  const renderRaceStep = () => (
    <RaceSelector
      selectedRace={selectedRaceData}
      onSelectRace={setSelectedRaceData}
      flexibleAbilityChoice={flexibleAbility}
      onFlexibleAbilityChoice={setFlexibleAbility}
      testID="race-selector"
    />
  );

  const renderClassStep = () => (
    <ClassSelector
      selectedClass={selectedClass}
      onSelectClass={setSelectedClass}
      testID="class-selector"
    />
  );

  const renderAbilitiesStep = () => (
    <AbilityScoreEditor
      method={abilityMethod}
      onMethodChange={setAbilityMethod}
      scores={scores}
      onScoreChange={handleScoreChange}
      pointsSpent={pointsSpent}
      pointsTotal={pointBuyTotal}
      onRollAll={handleRollAll}
      testID="ability-editor"
    />
  );

  const handleSkillRankChange = (skillKey: string, delta: number) => {
    setSkillRanks((prev) => {
      const current = prev[skillKey] ?? 0;
      const next = Math.max(0, Math.min(1, current + delta)); // Max 1 rank at level 1
      return { ...prev, [skillKey]: next };
    });
  };

  const renderSkillsStep = () => {
    const sortedSkills = Object.entries(SKILL_INFO).sort(([, a], [, b]) =>
      a.name.localeCompare(b.name),
    );

    return (
      <OrnatePanel title="Allocate Skill Ranks">
        <View style={styles.skillBudget}>
          <Text
            style={[
              styles.skillBudgetText,
              { color: ranksSpent > totalSkillRanks ? colors.error.DEFAULT : fantasy.gold },
            ]}
          >
            {ranksSpent} / {totalSkillRanks} ranks used
          </Text>
          <Text style={[styles.skillBudgetDetail, { color: colors.text.tertiary }]}>
            {classData?.skillRanksPerLevel ?? 2} (class) + {intMod} (INT) = {totalSkillRanks} per
            level
          </Text>
        </View>

        {sortedSkills.map(([key, info]) => {
          const isClassSkill = classSkillKeys.has(key);
          const ranks = skillRanks[key] ?? 0;
          const abilityMod = Math.floor(
            (scores[info.ability] +
              (selectedRaceData
                ? (raceDataToRace(selectedRaceData, flexibleAbility).abilityModifiers[
                    info.ability
                  ] ?? 0)
                : 0) -
              10) /
              2,
          );
          const classBonus = isClassSkill && ranks > 0 ? 3 : 0;
          const total = ranks + abilityMod + classBonus;

          return (
            <View
              key={key}
              style={[
                styles.skillAllocRow,
                isClassSkill && { backgroundColor: colors.bg.secondary },
              ]}
            >
              <View style={styles.skillAllocInfo}>
                <Text
                  style={[styles.skillAllocName, { color: colors.text.primary }]}
                  numberOfLines={1}
                >
                  {info.name}
                  {isClassSkill ? ' *' : ''}
                </Text>
                <Text style={[styles.skillAllocTotal, { color: colors.text.tertiary }]}>
                  Total: {total >= 0 ? `+${total}` : total}
                </Text>
              </View>
              <View style={styles.skillAllocControls}>
                <OrnateButton
                  title="−"
                  onPress={() => handleSkillRankChange(key, -1)}
                  variant="ghost"
                  disabled={ranks <= 0}
                  testID={`skill-minus-${key}`}
                />
                <Text
                  style={[
                    styles.skillAllocRanks,
                    { color: ranks > 0 ? fantasy.gold : colors.text.tertiary },
                  ]}
                >
                  {ranks}
                </Text>
                <OrnateButton
                  title="+"
                  onPress={() => handleSkillRankChange(key, 1)}
                  variant="ghost"
                  disabled={ranks >= 1 || ranksSpent >= totalSkillRanks}
                  testID={`skill-plus-${key}`}
                />
              </View>
            </View>
          );
        })}

        <Text style={[styles.skillNote, { color: colors.text.tertiary }]}>
          * = class skill (+3 bonus when at least 1 rank allocated)
        </Text>
      </OrnatePanel>
    );
  };

  const renderReviewStep = () => {
    const mod = (score: number) => {
      const m = Math.floor((score - 10) / 2);
      return m >= 0 ? `+${m}` : `${m}`;
    };

    return (
      <OrnatePanel title="Review Character">
        <View style={styles.reviewSection}>
          <Text style={[styles.reviewLabel, { color: colors.text.tertiary }]}>Name</Text>
          <Text style={[styles.reviewValue, { color: colors.text.primary }]}>{name}</Text>
        </View>
        <View style={styles.reviewSection}>
          <Text style={[styles.reviewLabel, { color: colors.text.tertiary }]}>Alignment</Text>
          <Text style={[styles.reviewValue, { color: colors.text.primary }]}>{alignment}</Text>
        </View>
        <View style={styles.reviewSection}>
          <Text style={[styles.reviewLabel, { color: colors.text.tertiary }]}>Race</Text>
          <Text style={[styles.reviewValue, { color: colors.text.primary }]}>
            {selectedRaceData?.name}
          </Text>
        </View>
        <View style={styles.reviewSection}>
          <Text style={[styles.reviewLabel, { color: colors.text.tertiary }]}>Class</Text>
          <Text style={[styles.reviewValue, { color: colors.text.primary }]}>
            {selectedClass} (Level 1)
          </Text>
        </View>
        <View style={styles.reviewSection}>
          <Text style={[styles.reviewLabel, { color: colors.text.tertiary }]}>Ability Scores</Text>
          {(Object.keys(ABILITY_LABELS) as AbilityKey[]).map((key) => (
            <Text key={key} style={[styles.reviewAbility, { color: colors.text.secondary }]}>
              {ABILITY_LABELS[key]}: {scores[key]} ({mod(scores[key])})
            </Text>
          ))}
        </View>
        {ranksSpent > 0 && (
          <View style={styles.reviewSection}>
            <Text style={[styles.reviewLabel, { color: colors.text.tertiary }]}>
              Skills ({ranksSpent} ranks)
            </Text>
            {Object.entries(skillRanks)
              .filter(([, r]) => r > 0)
              .sort(([a], [b]) =>
                (SKILL_INFO[a]?.name ?? a).localeCompare(SKILL_INFO[b]?.name ?? b),
              )
              .map(([key, ranks]) => (
                <Text key={key} style={[styles.reviewAbility, { color: colors.text.secondary }]}>
                  {SKILL_INFO[key]?.name ?? key}: {ranks} rank{ranks > 1 ? 's' : ''}
                  {classSkillKeys.has(key) ? ' (class)' : ''}
                </Text>
              ))}
          </View>
        )}
      </OrnatePanel>
    );
  };

  const renderCurrentStep = () => {
    switch (step) {
      case 'Name':
        return renderNameStep();
      case 'Race':
        return renderRaceStep();
      case 'Class':
        return renderClassStep();
      case 'Abilities':
        return renderAbilitiesStep();
      case 'Skills':
        return renderSkillsStep();
      case 'Review':
        return renderReviewStep();
    }
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.bg.primary }]}>
      {renderStepIndicator()}

      {error ? <Text style={[styles.error, { color: colors.error.DEFAULT }]}>{error}</Text> : null}

      <ScrollView style={styles.scrollContent} contentContainerStyle={styles.scrollInner}>
        {renderCurrentStep()}
      </ScrollView>

      <View style={styles.navButtons}>
        <OrnateButton
          title={stepIndex === 0 ? 'Cancel' : 'Back'}
          onPress={handleBack}
          variant="ghost"
          testID="wizard-back"
        />
        {step === 'Review' ? (
          <OrnateButton
            title={loading ? 'Creating...' : 'Create Character'}
            onPress={handleCreate}
            variant="primary"
            disabled={loading}
            testID="wizard-create"
          />
        ) : (
          <OrnateButton
            title="Next"
            onPress={handleNext}
            variant="primary"
            disabled={!canAdvance()}
            testID="wizard-next"
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  stepIndicator: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
  stepDot: {
    alignItems: 'center',
    gap: 4,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  stepLabel: {
    fontFamily: 'Cinzel',
    fontSize: 10,
    fontWeight: '700',
  },
  error: {
    fontFamily: 'LibreBaskerville',
    fontSize: 13,
    textAlign: 'center',
    marginHorizontal: 16,
    marginBottom: 4,
    padding: 8,
  },
  scrollContent: {
    flex: 1,
  },
  scrollInner: {
    padding: 16,
    paddingBottom: 24,
  },
  navButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    gap: 12,
  },
  fieldLabel: {
    fontFamily: 'Cinzel',
    fontSize: 13,
    fontWeight: '700',
    marginTop: 16,
    marginBottom: 8,
  },
  alignmentGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  reviewSection: {
    marginBottom: 16,
  },
  reviewLabel: {
    fontFamily: 'Cinzel',
    fontSize: 12,
    fontWeight: '700',
    marginBottom: 4,
  },
  reviewValue: {
    fontFamily: 'LibreBaskerville',
    fontSize: 15,
  },
  reviewAbility: {
    fontFamily: 'LibreBaskerville',
    fontSize: 13,
    marginLeft: 8,
    marginBottom: 2,
  },
  skillBudget: {
    alignItems: 'center',
    paddingVertical: 8,
    marginBottom: 8,
  },
  skillBudgetText: {
    fontFamily: 'Cinzel',
    fontSize: 16,
    fontWeight: '700',
  },
  skillBudgetDetail: {
    fontFamily: 'LibreBaskerville',
    fontSize: 11,
    marginTop: 2,
  },
  skillAllocRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderRadius: 4,
    marginBottom: 2,
  },
  skillAllocInfo: {
    flex: 1,
  },
  skillAllocName: {
    fontFamily: 'LibreBaskerville',
    fontSize: 13,
  },
  skillAllocTotal: {
    fontFamily: 'LibreBaskerville',
    fontSize: 11,
  },
  skillAllocControls: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  skillAllocRanks: {
    fontFamily: 'Cinzel',
    fontSize: 16,
    fontWeight: '700',
    minWidth: 20,
    textAlign: 'center',
  },
  skillNote: {
    fontFamily: 'LibreBaskerville',
    fontSize: 11,
    fontStyle: 'italic',
    marginTop: 12,
    textAlign: 'center',
  },
});
