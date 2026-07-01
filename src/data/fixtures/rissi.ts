// Rissi — development fixture for the direct-entry UI
// ECL 24: Cleric 5 / Hathran 5 / Dweomerkeeper 10 / Radiant Servant 2 / Prestige Paladin 2
// Human (CG), Cleric of Milani
//
// This object is loaded into characterEntrySlice via loadCharacter() for dev/testing.
// Nothing in the UI should reference this file directly — all data flows through Redux.

import { Alignment, BABProgression, BonusType, SaveProgression, Size } from '@/types/base';
import { PRESET_PF1E_STANDARD } from '@/config/rulesetPresets';
import { CharacterService } from '@/services/CharacterService';
import type { Character } from '@/types/index';
import type { AbilityScore } from '@/types/abilities';
import type { Skill } from '@/types/skills';
import type { ResourcePoolDefinition } from '@/types/resources';
import type { ClassFeature } from '@/types/classes';

const EMPTY_BONUSES = {
  enhancement: [],
  morale: [],
  size: [],
  alchemical: [],
  insight: [],
  profane: [],
  sacred: [],
  luck: [],
  circumstance: [],
  competence: [],
  untyped: [],
};

function ability(
  base: number,
  racial: number,
  enhancement: number,
  levelIncrements: number,
): AbilityScore {
  const total = base + racial + enhancement + levelIncrements;
  return {
    base,
    racial,
    inherent: 0,
    damage: 0,
    drain: 0,
    bonuses: {
      ...EMPTY_BONUSES,
      enhancement:
        enhancement > 0
          ? [{ type: BonusType.ENHANCEMENT, value: enhancement, source: 'gear' }]
          : [],
    },
    levelIncrements,
    total,
    modifier: Math.floor((total - 10) / 2),
    tempTotal: total,
    tempModifier: Math.floor((total - 10) / 2),
  };
}

function skill(
  ranks: number,
  isClassSkill: boolean,
  abilityKey: string,
  abilityMod: number,
  misc: number,
): Skill {
  const classSkillBonus = isClassSkill && ranks >= 1 ? 3 : 0;
  return {
    ranks,
    isClassSkill,
    ability: abilityKey,
    abilityMod,
    classSkillBonus,
    racial: 0,
    trait: 0,
    item: 0,
    misc,
    armorPenalty: 0,
    total: ranks + abilityMod + classSkillBonus + misc,
  };
}

// ---- Class feature resource pool definitions for Rissi's active classes ----

const CHANNEL_ENERGY_POOL: ResourcePoolDefinition = {
  id: 'channel_energy_uses',
  name: 'Channel Energy',
  rechargeOn: 'rest',
  maxFormula: '3 + chaMod',
  restRecoveryMode: 'full',
};

// Prestige Paladin injects `prestigePaladinLevel` into the formula context
// (FormulaService.toClassId("Prestige Paladin") === "prestigePaladin").
// Formulas use that variable instead of the standard `paladinLevel`.
const PRESTIGE_PALADIN_LAY_ON_HANDS_POOL: ResourcePoolDefinition = {
  id: 'lay_on_hands_uses',
  name: 'Lay on Hands',
  rechargeOn: 'rest',
  maxFormula: 'floor(prestigePaladinLevel / 2) + chaMod',
  restRecoveryMode: 'full',
};

const PRESTIGE_PALADIN_SMITE_EVIL_POOL: ResourcePoolDefinition = {
  id: 'smite_evil_uses',
  name: 'Smite Evil',
  rechargeOn: 'rest',
  maxFormula: '1 + floor((prestigePaladinLevel - 1) / 3)',
  restRecoveryMode: 'full',
};

const CLERIC_CLASS_FEATURES: ClassFeature[] = [
  {
    name: 'Channel Energy 1d6',
    description: 'Channel positive energy to heal the living or harm the undead.',
    level: 1,
    effects: [],
    resourcePool: CHANNEL_ENERGY_POOL,
  },
];

const PRESTIGE_PALADIN_CLASS_FEATURES: ClassFeature[] = [
  {
    name: 'Lay on Hands',
    description: 'Heal wounds by laying on hands.',
    level: 1,
    effects: [],
    resourcePool: PRESTIGE_PALADIN_LAY_ON_HANDS_POOL,
  },
  {
    name: 'Smite Evil 1/day',
    description: 'Call out an evil foe to smite.',
    level: 1,
    effects: [],
    resourcePool: PRESTIGE_PALADIN_SMITE_EVIL_POOL,
  },
];

export const RISSI_FIXTURE: Character = {
  // ---- Identity ----
  info: {
    id: 'fixture-rissi',
    name: 'Rissi',
    player: 'Mark',
    userId: '',
    race: {
      name: 'Human',
      sizeMod: Size.Medium,
      baseSpeed: 30,
      alternativeMovements: {},
      abilityModifiers: { wis: 2 },
      traits: [],
      languages: ['Common'],
      bonusLanguages: [],
    },
    size: Size.Medium,
    alignment: Alignment.ChaoticGood,
    deity: 'Milani',
    gender: 'Female',
    age: 24,
    height: '5\'4"',
    weight: '118 lbs',
    hair: 'Red',
    eyes: 'Green',
    skin: 'Fair',
    homeland: '',
    campaign: '',
    portrait: '',
    background:
      'A cleric of Milani who fights for the freedom of the oppressed. Trained in the Hathran tradition of the Rashemi witches, she has devoted her considerable magical gifts to liberating those who suffer under tyranny.',
    notes: '',
    racialFlexBonuses: [{ group: 'any', count: 1, modifier: 2 }],
    racialFlexChoices: ['wis'],
  },

  // ---- Abilities ----
  // STR 22: base 16, enhancement 4, levelIncrements 2
  // DEX 14: base 14
  // CON 18: base 14, enhancement 4
  // INT 16: base 12, enhancement 4 (headband of mental superiority)
  // WIS 28: base 18, racial 2, enhancement 4, levelIncrements 4
  // CHA 14: base 14
  abilityScores: {
    str: ability(16, 0, 4, 2),
    dex: ability(14, 0, 0, 0),
    con: ability(14, 0, 4, 0),
    int: ability(12, 0, 4, 0),
    wis: ability(18, 2, 4, 4),
    cha: ability(14, 0, 0, 0),
  },

  // ---- Level increment slots ----
  levelIncrementSlots: [
    { atHD: 4, ability: 'wis' },
    { atHD: 8, ability: 'wis' },
    { atHD: 12, ability: 'wis' },
    { atHD: 16, ability: 'wis' },
    { atHD: 20, ability: 'str' },
  ],

  // ---- Classes ----
  classes: {
    classes: [
      {
        id: 'class-cleric',
        name: 'Cleric',
        level: 5,
        hitDieSize: 8,
        hitDieResults: [],
        skillRanks: 2,
        classSkills: [],
        babProgression: BABProgression.Medium,
        fortProgression: SaveProgression.Good,
        refProgression: SaveProgression.Poor,
        willProgression: SaveProgression.Good,
        classFeatures: CLERIC_CLASS_FEATURES,
        sourceSystem: 'pf1e',
        classChoices: [
          { featureName: 'Domain', takenAtLevel: 1, selection: 'healing' },
          { featureName: 'Domain', takenAtLevel: 1, selection: 'liberation' },
        ],
        prereqOverride: false,
      },
      {
        id: 'class-hathran',
        name: 'Hathran',
        level: 5,
        hitDieSize: 8,
        hitDieResults: [],
        skillRanks: 2,
        classSkills: [],
        babProgression: BABProgression.Medium,
        fortProgression: SaveProgression.Good,
        refProgression: SaveProgression.Poor,
        willProgression: SaveProgression.Good,
        classFeatures: [],
        sourceSystem: '3.5e',
        spellcastingAdvancement: {
          mode: 'single',
          perLevel: Array(5).fill({ baseClassEntryId: 'class-cleric' }),
        },
        classChoices: [],
        prereqOverride: false,
      },
      {
        id: 'class-dweomerkeeper',
        name: 'Dweomerkeeper',
        level: 10,
        hitDieSize: 8,
        hitDieResults: [],
        skillRanks: 4,
        classSkills: [],
        babProgression: BABProgression.Medium,
        fortProgression: SaveProgression.Poor,
        refProgression: SaveProgression.Poor,
        willProgression: SaveProgression.Good,
        classFeatures: [],
        sourceSystem: '3.5e',
        spellcastingAdvancement: {
          mode: 'single',
          perLevel: Array(10).fill({ baseClassEntryId: 'class-cleric' }),
        },
        classChoices: [],
        prereqOverride: false,
      },
      {
        id: 'class-radiant-servant',
        name: 'Radiant Servant of Milani',
        level: 2,
        hitDieSize: 8,
        hitDieResults: [],
        skillRanks: 2,
        classSkills: [],
        babProgression: BABProgression.Medium,
        fortProgression: SaveProgression.Good,
        refProgression: SaveProgression.Poor,
        willProgression: SaveProgression.Good,
        classFeatures: [],
        sourceSystem: 'pf1e',
        spellcastingAdvancement: {
          mode: 'single',
          perLevel: Array(2).fill({ baseClassEntryId: 'class-cleric' }),
        },
        classChoices: [],
        prereqOverride: false,
      },
      {
        id: 'class-prestige-paladin',
        name: 'Prestige Paladin',
        level: 2,
        hitDieSize: 10,
        hitDieResults: [],
        skillRanks: 2,
        classSkills: [],
        babProgression: BABProgression.Full,
        fortProgression: SaveProgression.Good,
        refProgression: SaveProgression.Poor,
        willProgression: SaveProgression.Good,
        classFeatures: PRESTIGE_PALADIN_CLASS_FEATURES,
        sourceSystem: '3.5e',
        spellcastingAdvancement: {
          mode: 'single',
          perLevel: Array(2).fill({ baseClassEntryId: 'class-cleric' }),
        },
        classChoices: [],
        prereqOverride: false,
      },
    ],
    totalLevel: 24,
    baseAttackBonus: [17, 12, 7, 2],
    baseFortSave: 14,
    baseRefSave: 6,
    baseWillSave: 17,
    favoredClassBonuses: [],
  },

  // ---- Combat stats ----
  combatStats: {
    hitPoints: {
      base: 240,
      constitution: 0,
      favoredClass: 0,
      other: 0,
      current: 240,
      temporary: 0,
      nonlethal: 0,
    },
    armorClass: {
      base: 10,
      armor: 0,
      shield: 0,
      dexterity: 2,
      size: 0,
      natural: 0,
      deflection: 4,
      dodge: 0,
      misc: 0,
      total: 16,
      touch: 16,
      flatFooted: 14,
    },
    combatManeuver: {
      bonus: { baseAttack: 17, strengthMod: 6, sizeMod: 0, miscMods: [], total: 23 },
      defense: {
        baseValue: 10,
        baseAttack: 17,
        strengthMod: 6,
        dexterityMod: 2,
        sizeMod: 0,
        armorBonus: 0,
        shieldBonus: 0,
        naturalArmorBonus: 0,
        deflectionBonus: 4,
        dodgeBonus: 0,
        miscMods: [],
        total: 39,
        flatFooted: 37,
      },
    },
    initiative: { dexterity: 2, misc: 0, total: 2 },
    savingThrows: {
      fortitude: { base: 14, ability: 4, magic: 0, misc: 2, temporary: 0, total: 20 },
      reflex: { base: 6, ability: 2, magic: 0, misc: 0, temporary: 0, total: 8 },
      will: { base: 17, ability: 9, magic: 0, misc: 2, temporary: 0, total: 28 },
    },
    movement: {
      base: 30,
      armor: 30,
      fly: 60,
      swim: 0,
      climb: 0,
      burrow: 0,
      current: 30,
    },
    attackBonuses: {
      baseAttack: [17, 12, 7, 2],
      strengthMod: 6,
      sizeMod: 0,
      abilityModifiers: { melee: 'STR', ranged: 'DEX', thrown: 'STR' },
      miscMods: { melee: [], ranged: [], thrown: [], all: [] },
      meleeTotal: 23,
      rangedTotal: 19,
      allAttacks: { melee: [23, 18, 13, 8], ranged: [19, 14, 9, 4] },
    },
  },

  // ---- Skills (ranks > 0; most skills omitted — pipeline fills them in) ----
  skills: {
    acrobatics: skill(0, false, 'dex', 2, 0),
    appraise: skill(0, false, 'int', 3, 0),
    bluff: skill(0, false, 'cha', 2, 0),
    climb: skill(0, false, 'str', 6, 0),
    diplomacy: skill(5, true, 'cha', 2, 2),
    disableDevice: skill(0, false, 'dex', 2, 0),
    disguise: skill(0, false, 'cha', 2, 0),
    escapeArtist: skill(0, false, 'dex', 2, 0),
    fly: skill(0, false, 'dex', 2, 0),
    handleAnimal: skill(0, false, 'cha', 2, 0),
    heal: skill(0, true, 'wis', 9, 0),
    intimidate: skill(0, false, 'cha', 2, 0),
    knowledgeArcana: skill(10, true, 'int', 3, 0),
    knowledgeDungeoneering: skill(0, false, 'int', 3, 0),
    knowledgeEngineering: skill(0, false, 'int', 3, 0),
    knowledgeGeography: skill(0, false, 'int', 3, 0),
    knowledgeHistory: skill(0, false, 'int', 3, 0),
    knowledgeLocal: skill(0, false, 'int', 3, 0),
    knowledgeNature: skill(0, false, 'int', 3, 0),
    knowledgeNobility: skill(0, false, 'int', 3, 0),
    knowledgePlanes: skill(0, true, 'int', 3, 0),
    knowledgeReligion: skill(10, true, 'int', 3, 0),
    linguistics: skill(0, false, 'int', 3, 0),
    perception: skill(5, false, 'wis', 9, 0),
    ride: skill(0, false, 'dex', 2, 0),
    senseMotive: skill(4, true, 'wis', 9, 0),
    sleightOfHand: skill(0, false, 'dex', 2, 0),
    spellcraft: skill(10, true, 'int', 3, 0),
    stealth: skill(0, false, 'dex', 2, 0),
    survival: skill(0, false, 'wis', 9, 0),
    swim: skill(0, false, 'str', 6, 0),
    useMagicDevice: skill(0, false, 'cha', 2, 0),
    totalRanks: 44,
    craft: [],
    perform: [],
    profession: [],
  },

  // ---- Traits ----
  traits: {
    traits: [
      {
        id: 'trait-fates-favored',
        traitId: 'fates-favored',
        name: "Fate's Favored",
        category: 'faith',
        choices: {},
      },
      {
        id: 'trait-reactionary',
        traitId: 'reactionary',
        name: 'Reactionary',
        category: 'combat',
        choices: {},
      },
    ],
    maxTraits: 2,
  },

  flaws: { flaws: [], maxFlaws: 2 },

  // ---- Feats (assigned only) ----
  feats: {
    feats: [
      {
        featId: 'extra_channel',
        name: 'Extra Channel',
        source: 'human_bonus',
        grantedAtLevel: 1,
        active: true,
        choices: {},
        prereqOverride: false,
      },
      {
        featId: 'selective-channel',
        name: 'Selective Channel',
        source: 'level_1',
        grantedAtLevel: 1,
        active: true,
        choices: {},
        prereqOverride: false,
      },
      {
        featId: 'spell-focus-necromancy',
        name: 'Spell Focus (Necromancy)',
        source: 'level_3',
        grantedAtLevel: 3,
        active: true,
        choices: {},
        prereqOverride: false,
      },
      {
        featId: 'augment-summoning',
        name: 'Augment Summoning',
        source: 'level_5',
        grantedAtLevel: 5,
        active: true,
        choices: {},
        prereqOverride: false,
      },
      {
        featId: 'sacred-summons',
        name: 'Sacred Summons',
        source: 'level_7',
        grantedAtLevel: 7,
        active: true,
        choices: {},
        prereqOverride: false,
      },
      {
        featId: 'spell-penetration',
        name: 'Spell Penetration',
        source: 'level_9',
        grantedAtLevel: 9,
        active: true,
        choices: {},
        prereqOverride: false,
      },
      {
        featId: 'greater-spell-penetration',
        name: 'Greater Spell Penetration',
        source: 'level_11',
        grantedAtLevel: 11,
        active: true,
        choices: {},
        prereqOverride: false,
      },
    ],
    totalFeats: 9,
    bonusFeats: 0,
  },

  // ---- Spellcasting ----
  spellcasting: {
    pools: [
      {
        id: 'pool-divine',
        baseClass: 'cleric',
        castingType: 'divine',
        spellAbility: 'WIS',
        baseClassEntryId: 'class-cleric',
        contributors: [
          {
            className: 'Cleric',
            classLevels: 5,
            advancesSpellSlots: true,
            advancesCasterLevel: true,
          },
        ],
        effectiveSpellcastingLevel: 24,
        baseCasterLevel: 24,
        clBonuses: [],
        spellsPerDay: {
          base: [4, 7, 6, 6, 6, 5, 4, 3, 2, 1],
          bonus: [0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          misc: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          total: [4, 8, 7, 7, 7, 6, 5, 4, 3, 2],
          used: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        },
        spellDC: {
          base: 19,
          miscBonus: 0,
          byLevel: [19, 20, 21, 22, 23, 24, 25, 26, 27, 28],
        },
        spellFailure: 0,
        concentration: { abilityMod: 9, casterLevel: 24, misc: 0, total: 33 },
      },
    ],
    preparedSpells: [],
    knownSpells: [],
    spellbooks: [],
  },

  // ---- Equipment (editor-facing unified list) ----
  editorEquipment: [
    { id: 'weapon-mace', collection: 'weapons', name: 'Heavy Mace +4', slot: 'main_hand' },
    { id: 'armor-fullplate', collection: 'armor', name: 'Mithral Full Plate +3', slot: 'armor' },
    { id: 'item-orange-ioun', collection: 'magicItems', name: 'Orange Ioun Stone' },
    {
      id: 'item-headband',
      collection: 'magicItems',
      name: 'Headband of Mental Superiority +4',
      slot: 'headband',
    },
    {
      id: 'item-belt',
      collection: 'magicItems',
      name: 'Belt of Physical Might +4 (STR/CON)',
      slot: 'belt',
    },
    {
      id: 'item-ring-protection',
      collection: 'magicItems',
      name: 'Ring of Protection +4',
      slot: 'ring_left',
    },
  ],

  // ---- Eidolons (Rissi is not a summoner) ----
  eidolons: [],

  // ---- Companions ----
  companions: [],

  // ---- Scaffolding ----
  equipment: CharacterService.createDefaultEquipment(),
  appliedTemplates: [],
  grantedBonuses: [],
  initiating: {
    pools: [],
    knownManeuvers: [],
    readiedManeuvers: [],
    knownStances: [],
    activeStanceIds: [],
    maxActiveStances: 1,
    featGrantedManeuvers: [],
  },
  specialAbilities: { specialAbilities: [] },
  conditions: { activeConditions: [] },
  experience: { current: 0, nextLevel: 2000 },
  currency: { platinum: 0, gold: 0, silver: 0, copper: 0, totalGP: 0 },
  levelHistory: [],
  resources: [],
  buffs: [],
  savedBuffs: [],
  ruleset: { ...PRESET_PF1E_STANDARD },
  schemaVersion: '1.2.0',
  lastUpdated: new Date(),
  createdAt: new Date(),
};
