import { configureStore } from '@reduxjs/toolkit';
import charactersReducer, {
  setActiveCharacter,
  clearCharacters,
  clearError,
  addFeat,
  removeFeat,
  toggleFeat,
  recalculateStats,
  fetchCharacters,
  fetchCharacter,
  createCharacter,
  updateCharacter,
  deleteCharacter,
} from '@store/slices/charactersSlice';
import type { Character, CharacterSummary } from '@/types';
import { Size, Alignment, EncumbranceVariant } from '@/types';
import type { CharacterFeat } from '@/types/feats';
import { FirebaseCharacterService } from '@/services/FirebaseCharacterService';
import { CharacterService } from '@/services/CharacterService';

jest.mock('@/services/FirebaseCharacterService', () => ({
  FirebaseCharacterService: {
    getUserCharacters: jest.fn(),
    getCharacter: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  },
}));

jest.mock('@/services/CharacterService', () => ({
  CharacterService: {
    createDefaultCharacter: jest.fn(),
    createBlankCharacter: jest.fn(() => ({})),
  },
}));

jest.mock('@/services/ModifierPipelineService', () => ({
  ModifierPipelineService: {
    recalculate: jest.fn((char) => char),
  },
}));

function makeCharactersStore() {
  return configureStore({
    reducer: { characters: charactersReducer },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
  });
}

const mockFeat: CharacterFeat = {
  featId: 'power-attack',
  name: 'Power Attack',
  source: 'level_1',
  grantedAtLevel: 1,
  active: true,
  choices: {},
};

const mockCharacterSummary: CharacterSummary = {
  id: 'char-1',
  name: 'Thorin',
  level: 5,
  race: 'Dwarf',
  classes: 'Fighter 5',
  lastUpdated: new Date('2025-06-01'),
};

// Minimal Character for testing reducer logic
const mockCharacter: Character = {
  info: {
    id: 'char-1',
    name: 'Thorin',
    player: 'Mark',
    userId: 'user-123',
    race: {
      name: 'Dwarf',
      sizeMod: Size.Medium,
      baseSpeed: 20,
      alternativeMovements: {},
      abilityModifiers: { con: 2, wis: 2, cha: -2 },
      traits: [],
      languages: ['Common', 'Dwarven'],
      bonusLanguages: [],
    },
    size: Size.Medium,
    alignment: Alignment.LawfulGood,
    deity: 'Torag',
    gender: 'Male',
    age: 85,
    height: '4\'2"',
    weight: '180 lbs',
    hair: 'Black',
    eyes: 'Brown',
    skin: 'Tan',
    homeland: 'Janderhoff',
    campaign: '',
    portrait: '',
    background: '',
    notes: '',
  },
  abilityScores: {
    str: {
      base: 16,
      racial: 0,
      inherent: 0,
      damage: 0,
      drain: 0,
      bonuses: {
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
      },
      levelIncrements: 0,
      total: 16,
      modifier: 3,
      tempTotal: 16,
      tempModifier: 3,
    },
    dex: {
      base: 12,
      racial: 0,
      inherent: 0,
      damage: 0,
      drain: 0,
      bonuses: {
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
      },
      levelIncrements: 0,
      total: 12,
      modifier: 1,
      tempTotal: 12,
      tempModifier: 1,
    },
    con: {
      base: 14,
      racial: 2,
      inherent: 0,
      damage: 0,
      drain: 0,
      bonuses: {
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
      },
      levelIncrements: 0,
      total: 16,
      modifier: 3,
      tempTotal: 16,
      tempModifier: 3,
    },
    int: {
      base: 10,
      racial: 0,
      inherent: 0,
      damage: 0,
      drain: 0,
      bonuses: {
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
      },
      levelIncrements: 0,
      total: 10,
      modifier: 0,
      tempTotal: 10,
      tempModifier: 0,
    },
    wis: {
      base: 12,
      racial: 2,
      inherent: 0,
      damage: 0,
      drain: 0,
      bonuses: {
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
      },
      levelIncrements: 0,
      total: 14,
      modifier: 2,
      tempTotal: 14,
      tempModifier: 2,
    },
    cha: {
      base: 10,
      racial: -2,
      inherent: 0,
      damage: 0,
      drain: 0,
      bonuses: {
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
      },
      levelIncrements: 0,
      total: 8,
      modifier: -1,
      tempTotal: 8,
      tempModifier: -1,
    },
  },
  classes: {
    classes: [
      {
        name: 'Fighter',
        level: 5,
        hitDieSize: 10,
        hitDieResults: [10, 7, 8, 6, 9],
        skillRanks: 2,
        classSkills: ['Climb', 'Intimidate', 'Swim'],
        babProgression: 'Full' as never,
        fortProgression: 'Good' as never,
        refProgression: 'Poor' as never,
        willProgression: 'Poor' as never,
        classFeatures: [],
      },
    ],
    totalLevel: 5,
    baseAttackBonus: [5],
    baseFortSave: 4,
    baseRefSave: 1,
    baseWillSave: 1,
    favoredClassBonuses: [],
  },
  combatStats: {
    hitPoints: {
      base: 40,
      constitution: 15,
      favoredClass: 5,
      other: 0,
      current: 60,
      temporary: 0,
      nonlethal: 0,
    },
    armorClass: {
      base: 10,
      armor: 0,
      shield: 0,
      dexterity: 1,
      size: 0,
      natural: 0,
      deflection: 0,
      dodge: 0,
      misc: 0,
      total: 11,
      touch: 11,
      flatFooted: 10,
    },
    combatManeuver: {
      bonus: { baseAttack: 5, strengthMod: 3, sizeMod: 0, miscMods: [], total: 8 },
      defense: {
        baseValue: 10,
        baseAttack: 5,
        strengthMod: 3,
        dexterityMod: 1,
        sizeMod: 0,
        armorBonus: 0,
        shieldBonus: 0,
        naturalArmorBonus: 0,
        deflectionBonus: 0,
        dodgeBonus: 0,
        miscMods: [],
        total: 19,
        flatFooted: 18,
      },
    },
    initiative: { dexterity: 1, misc: 0, total: 1 },
    savingThrows: {
      fortitude: { base: 4, ability: 3, magic: 0, misc: 0, temporary: 0, total: 7 },
      reflex: { base: 1, ability: 1, magic: 0, misc: 0, temporary: 0, total: 2 },
      will: { base: 1, ability: 2, magic: 0, misc: 0, temporary: 0, total: 3 },
    },
    movement: { base: 20, armor: 0, fly: 0, swim: 0, climb: 0, burrow: 0, current: 20 },
    attackBonuses: {
      baseAttack: [5],
      strengthMod: 3,
      sizeMod: 0,
      abilityModifiers: { melee: 'STR', ranged: 'DEX', thrown: 'STR' },
      miscMods: { melee: [], ranged: [], thrown: [], all: [] },
      meleeTotal: 8,
      rangedTotal: 6,
      allAttacks: { melee: [8], ranged: [6] },
    },
  },
  skills: {
    acrobatics: {
      isClassSkill: false,
      ranks: 0,
      ability: 'DEX',
      abilityMod: 1,
      classSkillBonus: 0,
      racial: 0,
      trait: 0,
      item: 0,
      misc: 0,
      armorPenalty: 0,
      total: 1,
    },
    appraise: {
      isClassSkill: false,
      ranks: 0,
      ability: 'INT',
      abilityMod: 0,
      classSkillBonus: 0,
      racial: 0,
      trait: 0,
      item: 0,
      misc: 0,
      armorPenalty: 0,
      total: 0,
    },
    bluff: {
      isClassSkill: false,
      ranks: 0,
      ability: 'CHA',
      abilityMod: -1,
      classSkillBonus: 0,
      racial: 0,
      trait: 0,
      item: 0,
      misc: 0,
      armorPenalty: 0,
      total: -1,
    },
    climb: {
      isClassSkill: true,
      ranks: 5,
      ability: 'STR',
      abilityMod: 3,
      classSkillBonus: 3,
      racial: 0,
      trait: 0,
      item: 0,
      misc: 0,
      armorPenalty: 0,
      total: 11,
    },
    craft: [],
    diplomacy: {
      isClassSkill: false,
      ranks: 0,
      ability: 'CHA',
      abilityMod: -1,
      classSkillBonus: 0,
      racial: 0,
      trait: 0,
      item: 0,
      misc: 0,
      armorPenalty: 0,
      total: -1,
    },
    disableDevice: {
      isClassSkill: false,
      ranks: 0,
      ability: 'DEX',
      abilityMod: 1,
      classSkillBonus: 0,
      racial: 0,
      trait: 0,
      item: 0,
      misc: 0,
      armorPenalty: 0,
      total: 1,
    },
    disguise: {
      isClassSkill: false,
      ranks: 0,
      ability: 'CHA',
      abilityMod: -1,
      classSkillBonus: 0,
      racial: 0,
      trait: 0,
      item: 0,
      misc: 0,
      armorPenalty: 0,
      total: -1,
    },
    escapeArtist: {
      isClassSkill: false,
      ranks: 0,
      ability: 'DEX',
      abilityMod: 1,
      classSkillBonus: 0,
      racial: 0,
      trait: 0,
      item: 0,
      misc: 0,
      armorPenalty: 0,
      total: 1,
    },
    fly: {
      isClassSkill: false,
      ranks: 0,
      ability: 'DEX',
      abilityMod: 1,
      classSkillBonus: 0,
      racial: 0,
      trait: 0,
      item: 0,
      misc: 0,
      armorPenalty: 0,
      total: 1,
    },
    handleAnimal: {
      isClassSkill: true,
      ranks: 0,
      ability: 'CHA',
      abilityMod: -1,
      classSkillBonus: 0,
      racial: 0,
      trait: 0,
      item: 0,
      misc: 0,
      armorPenalty: 0,
      total: -1,
    },
    heal: {
      isClassSkill: false,
      ranks: 0,
      ability: 'WIS',
      abilityMod: 2,
      classSkillBonus: 0,
      racial: 0,
      trait: 0,
      item: 0,
      misc: 0,
      armorPenalty: 0,
      total: 2,
    },
    intimidate: {
      isClassSkill: true,
      ranks: 3,
      ability: 'CHA',
      abilityMod: -1,
      classSkillBonus: 3,
      racial: 0,
      trait: 0,
      item: 0,
      misc: 0,
      armorPenalty: 0,
      total: 5,
    },
    knowledgeArcana: {
      isClassSkill: false,
      ranks: 0,
      ability: 'INT',
      abilityMod: 0,
      classSkillBonus: 0,
      racial: 0,
      trait: 0,
      item: 0,
      misc: 0,
      armorPenalty: 0,
      total: 0,
    },
    knowledgeDungeoneering: {
      isClassSkill: true,
      ranks: 0,
      ability: 'INT',
      abilityMod: 0,
      classSkillBonus: 0,
      racial: 0,
      trait: 0,
      item: 0,
      misc: 0,
      armorPenalty: 0,
      total: 0,
    },
    knowledgeEngineering: {
      isClassSkill: true,
      ranks: 0,
      ability: 'INT',
      abilityMod: 0,
      classSkillBonus: 0,
      racial: 0,
      trait: 0,
      item: 0,
      misc: 0,
      armorPenalty: 0,
      total: 0,
    },
    knowledgeGeography: {
      isClassSkill: false,
      ranks: 0,
      ability: 'INT',
      abilityMod: 0,
      classSkillBonus: 0,
      racial: 0,
      trait: 0,
      item: 0,
      misc: 0,
      armorPenalty: 0,
      total: 0,
    },
    knowledgeHistory: {
      isClassSkill: false,
      ranks: 0,
      ability: 'INT',
      abilityMod: 0,
      classSkillBonus: 0,
      racial: 0,
      trait: 0,
      item: 0,
      misc: 0,
      armorPenalty: 0,
      total: 0,
    },
    knowledgeLocal: {
      isClassSkill: false,
      ranks: 0,
      ability: 'INT',
      abilityMod: 0,
      classSkillBonus: 0,
      racial: 0,
      trait: 0,
      item: 0,
      misc: 0,
      armorPenalty: 0,
      total: 0,
    },
    knowledgeNature: {
      isClassSkill: false,
      ranks: 0,
      ability: 'INT',
      abilityMod: 0,
      classSkillBonus: 0,
      racial: 0,
      trait: 0,
      item: 0,
      misc: 0,
      armorPenalty: 0,
      total: 0,
    },
    knowledgeNobility: {
      isClassSkill: false,
      ranks: 0,
      ability: 'INT',
      abilityMod: 0,
      classSkillBonus: 0,
      racial: 0,
      trait: 0,
      item: 0,
      misc: 0,
      armorPenalty: 0,
      total: 0,
    },
    knowledgePlanes: {
      isClassSkill: false,
      ranks: 0,
      ability: 'INT',
      abilityMod: 0,
      classSkillBonus: 0,
      racial: 0,
      trait: 0,
      item: 0,
      misc: 0,
      armorPenalty: 0,
      total: 0,
    },
    knowledgeReligion: {
      isClassSkill: false,
      ranks: 0,
      ability: 'INT',
      abilityMod: 0,
      classSkillBonus: 0,
      racial: 0,
      trait: 0,
      item: 0,
      misc: 0,
      armorPenalty: 0,
      total: 0,
    },
    linguistics: {
      isClassSkill: false,
      ranks: 0,
      ability: 'INT',
      abilityMod: 0,
      classSkillBonus: 0,
      racial: 0,
      trait: 0,
      item: 0,
      misc: 0,
      armorPenalty: 0,
      total: 0,
    },
    perception: {
      isClassSkill: false,
      ranks: 0,
      ability: 'WIS',
      abilityMod: 2,
      classSkillBonus: 0,
      racial: 0,
      trait: 0,
      item: 0,
      misc: 0,
      armorPenalty: 0,
      total: 2,
    },
    perform: [],
    profession: [],
    ride: {
      isClassSkill: true,
      ranks: 0,
      ability: 'DEX',
      abilityMod: 1,
      classSkillBonus: 0,
      racial: 0,
      trait: 0,
      item: 0,
      misc: 0,
      armorPenalty: 0,
      total: 1,
    },
    senseMotive: {
      isClassSkill: false,
      ranks: 0,
      ability: 'WIS',
      abilityMod: 2,
      classSkillBonus: 0,
      racial: 0,
      trait: 0,
      item: 0,
      misc: 0,
      armorPenalty: 0,
      total: 2,
    },
    sleightOfHand: {
      isClassSkill: false,
      ranks: 0,
      ability: 'DEX',
      abilityMod: 1,
      classSkillBonus: 0,
      racial: 0,
      trait: 0,
      item: 0,
      misc: 0,
      armorPenalty: 0,
      total: 1,
    },
    spellcraft: {
      isClassSkill: false,
      ranks: 0,
      ability: 'INT',
      abilityMod: 0,
      classSkillBonus: 0,
      racial: 0,
      trait: 0,
      item: 0,
      misc: 0,
      armorPenalty: 0,
      total: 0,
    },
    stealth: {
      isClassSkill: false,
      ranks: 0,
      ability: 'DEX',
      abilityMod: 1,
      classSkillBonus: 0,
      racial: 0,
      trait: 0,
      item: 0,
      misc: 0,
      armorPenalty: 0,
      total: 1,
    },
    survival: {
      isClassSkill: true,
      ranks: 2,
      ability: 'WIS',
      abilityMod: 2,
      classSkillBonus: 3,
      racial: 0,
      trait: 0,
      item: 0,
      misc: 0,
      armorPenalty: 0,
      total: 7,
    },
    swim: {
      isClassSkill: true,
      ranks: 0,
      ability: 'STR',
      abilityMod: 3,
      classSkillBonus: 0,
      racial: 0,
      trait: 0,
      item: 0,
      misc: 0,
      armorPenalty: 0,
      total: 3,
    },
    useMagicDevice: {
      isClassSkill: false,
      ranks: 0,
      ability: 'CHA',
      abilityMod: -1,
      classSkillBonus: 0,
      racial: 0,
      trait: 0,
      item: 0,
      misc: 0,
      armorPenalty: 0,
      total: -1,
    },
    totalRanks: 10,
  },
  feats: { feats: [], totalFeats: 0, bonusFeats: 0 },
  traits: { traits: [], maxTraits: 2 },
  flaws: { flaws: [], maxFlaws: 2 },
  equipment: {
    weapons: [],
    armor: [],
    shields: [],
    magicItems: [],
    gear: [],
    equippedSlots: {},
    encumbranceSettings: { enabled: false, variant: EncumbranceVariant.CORE_RULES },
    totalWeight: 0,
    lightLoad: 76,
    mediumLoad: 153,
    heavyLoad: 230,
    currentLoad: 'Light',
    acPenalty: 0,
    maxDexBonus: 99,
    spellFailure: 0,
  },
  spellcasting: { pools: [], preparedSpells: [], knownSpells: [], spellbooks: [] },
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
  experience: { current: 15000, nextLevel: 23000 },
  currency: { platinum: 0, gold: 150, silver: 30, copper: 0, totalGP: 153 },
  levelHistory: [],
  appliedTemplates: [],
  grantedBonuses: [],
  resources: [],
  companions: [],
  eidolons: [],
  buffs: [],
  savedBuffs: [],
  levelIncrementSlots: [],
  ruleset: {
    id: 'preset-pf1e-standard',
    name: 'PF1e Standard',
    visibility: 'global' as const,
    ownerId: 'system',
    allowedSources: ['pf1e-official'] as ['pf1e-official'],
    optionalRules: {
      heroPoints: false,
      gestalt: false,
      fractionalBABSaves: false,
      variantMulticlassing: false,
      eitrMode: 'off' as const,
      relaxedEntry: false,
      mythic: false,
      pathOfWarMechanics: false,
      tomeOfBattleMechanics: false,
      crTemplates: true,
      laTemplates: true,
      crRefunds: false,
      laBuyback: false,
      crLaAbilityScoreReductions: true,
      flaws: false,
    },
    itemOverrides: { banned: [], allowed: [] },
    campaignRequirements: {},
    validationSettings: {
      abilityScoreMethod: 'point-buy' as const,
      pointBuyBudget: 20,
      maxTraits: 2,
      maxFlaws: 2,
    },
    version: 1,
    createdAt: '2026-04-09T00:00:00.000Z',
    updatedAt: '2026-04-09T00:00:00.000Z',
  },
  schemaVersion: '1.1.0',
  lastUpdated: new Date('2025-06-01'),
};

describe('charactersSlice', () => {
  const initialState = {
    characters: [] as CharacterSummary[],
    activeCharacter: null as Character | null,
    loading: false,
    error: null as string | null,
  };

  it('should return the initial state', () => {
    expect(charactersReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  describe('setActiveCharacter', () => {
    it('should set active character', () => {
      const state = charactersReducer(initialState, setActiveCharacter(mockCharacter));
      expect(state.activeCharacter).toEqual(mockCharacter);
    });

    it('should clear active character', () => {
      const stateWithCharacter = { ...initialState, activeCharacter: mockCharacter };
      const state = charactersReducer(stateWithCharacter, setActiveCharacter(null));
      expect(state.activeCharacter).toBeNull();
    });
  });

  describe('clearCharacters', () => {
    it('should clear all characters and active character', () => {
      const stateWithData = {
        ...initialState,
        characters: [mockCharacterSummary],
        activeCharacter: mockCharacter,
      };
      const state = charactersReducer(stateWithData, clearCharacters());
      expect(state.characters).toHaveLength(0);
      expect(state.activeCharacter).toBeNull();
    });
  });

  describe('clearError', () => {
    it('should clear the error', () => {
      const errorState = { ...initialState, error: 'Something failed' };
      const state = charactersReducer(errorState, clearError());
      expect(state.error).toBeNull();
    });
  });

  describe('async thunk reducers', () => {
    // fetchCharacters
    it('should set loading on fetchCharacters pending', () => {
      const state = charactersReducer(initialState, { type: 'characters/fetchCharacters/pending' });
      expect(state.loading).toBe(true);
      expect(state.error).toBeNull();
    });

    it('should set characters on fetchCharacters fulfilled', () => {
      const loadingState = { ...initialState, loading: true };
      const state = charactersReducer(loadingState, {
        type: 'characters/fetchCharacters/fulfilled',
        payload: [mockCharacterSummary],
      });
      expect(state.loading).toBe(false);
      expect(state.characters).toEqual([mockCharacterSummary]);
    });

    it('should set error on fetchCharacters rejected', () => {
      const loadingState = { ...initialState, loading: true };
      const state = charactersReducer(loadingState, {
        type: 'characters/fetchCharacters/rejected',
        payload: 'Network error',
      });
      expect(state.loading).toBe(false);
      expect(state.error).toBe('Network error');
    });

    // fetchCharacter
    it('should set active character on fetchCharacter fulfilled', () => {
      const loadingState = { ...initialState, loading: true };
      const state = charactersReducer(loadingState, {
        type: 'characters/fetchCharacter/fulfilled',
        payload: mockCharacter,
      });
      expect(state.loading).toBe(false);
      expect(state.activeCharacter).not.toBeNull();
      expect(state.activeCharacter!.info.name).toEqual(mockCharacter.info.name);
      expect(state.activeCharacter!.info.race.name).toEqual(mockCharacter.info.race.name);
      expect(state.activeCharacter!.classes.totalLevel).toEqual(mockCharacter.classes.totalLevel);
    });

    // deleteCharacter
    it('should remove character from list on deleteCharacter fulfilled', () => {
      const stateWithCharacters = {
        ...initialState,
        characters: [mockCharacterSummary],
        activeCharacter: mockCharacter,
        loading: true,
      };
      const state = charactersReducer(stateWithCharacters, {
        type: 'characters/deleteCharacter/fulfilled',
        meta: { arg: 'char-1' },
      });
      expect(state.loading).toBe(false);
      expect(state.characters).toHaveLength(0);
      expect(state.activeCharacter).toBeNull();
    });

    it('should not clear active character if deleting a different character', () => {
      const stateWithCharacters = {
        ...initialState,
        characters: [
          mockCharacterSummary,
          { ...mockCharacterSummary, id: 'char-2', name: 'Elara' },
        ],
        activeCharacter: mockCharacter,
        loading: true,
      };
      const state = charactersReducer(stateWithCharacters, {
        type: 'characters/deleteCharacter/fulfilled',
        meta: { arg: 'char-2' },
      });
      expect(state.characters).toHaveLength(1);
      expect(state.activeCharacter).toEqual(mockCharacter);
    });

    // fetchCharacter
    it('should set loading on fetchCharacter pending', () => {
      const state = charactersReducer(initialState, {
        type: 'characters/fetchCharacter/pending',
      });
      expect(state.loading).toBe(true);
      expect(state.error).toBeNull();
    });

    it('should set error on fetchCharacter rejected', () => {
      const loadingState = { ...initialState, loading: true };
      const state = charactersReducer(loadingState, {
        type: 'characters/fetchCharacter/rejected',
        payload: 'Character not found',
      });
      expect(state.loading).toBe(false);
      expect(state.error).toBe('Character not found');
    });

    // createCharacter
    it('should set loading on createCharacter pending', () => {
      const state = charactersReducer(initialState, {
        type: 'characters/createCharacter/pending',
      });
      expect(state.loading).toBe(true);
      expect(state.error).toBeNull();
    });

    it('should set activeCharacter and push summary on createCharacter fulfilled', () => {
      const loadingState = { ...initialState, loading: true };
      const state = charactersReducer(loadingState, {
        type: 'characters/createCharacter/fulfilled',
        payload: mockCharacter,
      });
      expect(state.loading).toBe(false);
      expect(state.activeCharacter).not.toBeNull();
      expect(state.characters).toHaveLength(1);
      expect(state.characters[0].id).toBe('char-1');
      expect(state.characters[0].name).toBe('Thorin');
    });

    it('should set error on createCharacter rejected', () => {
      const loadingState = { ...initialState, loading: true };
      const state = charactersReducer(loadingState, {
        type: 'characters/createCharacter/rejected',
        payload: 'Create failed',
      });
      expect(state.loading).toBe(false);
      expect(state.error).toBe('Create failed');
    });

    // updateCharacter
    it('should set loading on updateCharacter pending', () => {
      const state = charactersReducer(initialState, {
        type: 'characters/updateCharacter/pending',
      });
      expect(state.loading).toBe(true);
    });

    it('should set activeCharacter on updateCharacter fulfilled', () => {
      const loadingState = { ...initialState, loading: true };
      const state = charactersReducer(loadingState, {
        type: 'characters/updateCharacter/fulfilled',
        payload: mockCharacter,
      });
      expect(state.loading).toBe(false);
      expect(state.activeCharacter).toEqual(mockCharacter);
    });

    it('should set error on updateCharacter rejected', () => {
      const loadingState = { ...initialState, loading: true };
      const state = charactersReducer(loadingState, {
        type: 'characters/updateCharacter/rejected',
        payload: 'Update failed',
      });
      expect(state.loading).toBe(false);
      expect(state.error).toBe('Update failed');
    });

    // deleteCharacter
    it('should set loading on deleteCharacter pending', () => {
      const state = charactersReducer(initialState, {
        type: 'characters/deleteCharacter/pending',
      });
      expect(state.loading).toBe(true);
    });

    it('should set error on deleteCharacter rejected', () => {
      const loadingState = { ...initialState, loading: true };
      const state = charactersReducer(loadingState, {
        type: 'characters/deleteCharacter/rejected',
        payload: 'Delete failed',
      });
      expect(state.loading).toBe(false);
      expect(state.error).toBe('Delete failed');
    });
  });

  describe('addFeat', () => {
    it('is a no-op when there is no active character', () => {
      const state = charactersReducer(initialState, addFeat(mockFeat));
      expect(state.activeCharacter).toBeNull();
    });

    it('adds feat to active character and recalculates', () => {
      const stateWithChar = { ...initialState, activeCharacter: mockCharacter };
      const state = charactersReducer(stateWithChar, addFeat(mockFeat));
      expect(state.activeCharacter).not.toBeNull();
      expect(state.activeCharacter!.feats.feats.some((f) => f.featId === 'power-attack')).toBe(
        true,
      );
    });
  });

  describe('removeFeat', () => {
    it('is a no-op when there is no active character', () => {
      const state = charactersReducer(initialState, removeFeat('power-attack'));
      expect(state.activeCharacter).toBeNull();
    });

    it('removes feat from active character', () => {
      const charWithFeat: Character = {
        ...mockCharacter,
        feats: { feats: [mockFeat], totalFeats: 1, bonusFeats: 0 },
      };
      const stateWithChar = { ...initialState, activeCharacter: charWithFeat };
      const state = charactersReducer(stateWithChar, removeFeat('power-attack'));
      expect(state.activeCharacter!.feats.feats).toHaveLength(0);
    });
  });

  describe('toggleFeat', () => {
    it('is a no-op when there is no active character', () => {
      const state = charactersReducer(initialState, toggleFeat('power-attack'));
      expect(state.activeCharacter).toBeNull();
    });

    it('toggles feat active state when feat exists', () => {
      const charWithFeat: Character = {
        ...mockCharacter,
        feats: { feats: [{ ...mockFeat, active: true }], totalFeats: 1, bonusFeats: 0 },
      };
      const stateWithChar = { ...initialState, activeCharacter: charWithFeat };
      const state = charactersReducer(stateWithChar, toggleFeat('power-attack'));
      expect(state.activeCharacter!.feats.feats[0].active).toBe(false);
    });

    it('is a no-op when feat is not found', () => {
      const stateWithChar = { ...initialState, activeCharacter: mockCharacter };
      const state = charactersReducer(stateWithChar, toggleFeat('nonexistent-feat'));
      expect(state.activeCharacter!.feats.feats).toHaveLength(0);
    });
  });

  describe('recalculateStats', () => {
    it('is a no-op when there is no active character', () => {
      const state = charactersReducer(initialState, recalculateStats());
      expect(state.activeCharacter).toBeNull();
    });

    it('recalculates stats when active character exists', () => {
      const stateWithChar = { ...initialState, activeCharacter: mockCharacter };
      const state = charactersReducer(stateWithChar, recalculateStats());
      expect(state.activeCharacter).not.toBeNull();
    });
  });

  describe('async thunk execution', () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });

    it('fetchCharacters succeeds - sets characters', async () => {
      const store = makeCharactersStore();
      (FirebaseCharacterService.getUserCharacters as jest.Mock).mockResolvedValue([
        mockCharacterSummary,
      ]);
      await store.dispatch(fetchCharacters('user-123'));
      expect(store.getState().characters.characters).toEqual([mockCharacterSummary]);
      expect(store.getState().characters.loading).toBe(false);
    });

    it('fetchCharacters fails - sets error', async () => {
      const store = makeCharactersStore();
      (FirebaseCharacterService.getUserCharacters as jest.Mock).mockRejectedValue(
        new Error('Fetch failed'),
      );
      await store.dispatch(fetchCharacters('user-123'));
      expect(store.getState().characters.error).toBe('Fetch failed');
    });

    it('fetchCharacters fails with non-Error - uses fallback', async () => {
      const store = makeCharactersStore();
      (FirebaseCharacterService.getUserCharacters as jest.Mock).mockRejectedValue('bad');
      await store.dispatch(fetchCharacters('user-123'));
      expect(store.getState().characters.error).toBe('Failed to fetch characters');
    });

    it('fetchCharacter succeeds - sets activeCharacter', async () => {
      const store = makeCharactersStore();
      (FirebaseCharacterService.getCharacter as jest.Mock).mockResolvedValue(mockCharacter);
      await store.dispatch(fetchCharacter('char-1'));
      expect(store.getState().characters.activeCharacter).not.toBeNull();
    });

    it('fetchCharacter fails - sets error', async () => {
      const store = makeCharactersStore();
      (FirebaseCharacterService.getCharacter as jest.Mock).mockRejectedValue(
        new Error('Not found'),
      );
      await store.dispatch(fetchCharacter('char-1'));
      expect(store.getState().characters.error).toBe('Not found');
    });

    it('fetchCharacter fails with non-Error - uses fallback', async () => {
      const store = makeCharactersStore();
      (FirebaseCharacterService.getCharacter as jest.Mock).mockRejectedValue('not found');
      await store.dispatch(fetchCharacter('char-1'));
      expect(store.getState().characters.error).toBe('Failed to fetch character');
    });

    it('createCharacter succeeds - sets activeCharacter and pushes summary', async () => {
      const store = makeCharactersStore();
      (CharacterService.createDefaultCharacter as jest.Mock).mockReturnValue(mockCharacter);
      (FirebaseCharacterService.create as jest.Mock).mockResolvedValue(mockCharacter);
      await store.dispatch(createCharacter({ userId: 'user-123', data: {} as never }));
      expect(store.getState().characters.activeCharacter).not.toBeNull();
      expect(store.getState().characters.characters).toHaveLength(1);
    });

    it('createCharacter fails - sets error', async () => {
      const store = makeCharactersStore();
      (CharacterService.createDefaultCharacter as jest.Mock).mockReturnValue(mockCharacter);
      (FirebaseCharacterService.create as jest.Mock).mockRejectedValue(new Error('Save failed'));
      await store.dispatch(createCharacter({ userId: 'user-123', data: {} as never }));
      expect(store.getState().characters.error).toBe('Save failed');
    });

    it('createCharacter fails with non-Error - uses fallback', async () => {
      const store = makeCharactersStore();
      (CharacterService.createDefaultCharacter as jest.Mock).mockReturnValue(mockCharacter);
      (FirebaseCharacterService.create as jest.Mock).mockRejectedValue('error');
      await store.dispatch(createCharacter({ userId: 'user-123', data: {} as never }));
      expect(store.getState().characters.error).toBe('Failed to create character');
    });

    it('updateCharacter succeeds - sets activeCharacter', async () => {
      const store = makeCharactersStore();
      (FirebaseCharacterService.update as jest.Mock).mockResolvedValue(mockCharacter);
      await store.dispatch(updateCharacter({ characterId: 'char-1', data: {} }));
      expect(store.getState().characters.activeCharacter).toEqual(mockCharacter);
    });

    it('updateCharacter fails - sets error', async () => {
      const store = makeCharactersStore();
      (FirebaseCharacterService.update as jest.Mock).mockRejectedValue(new Error('Update failed'));
      await store.dispatch(updateCharacter({ characterId: 'char-1', data: {} }));
      expect(store.getState().characters.error).toBe('Update failed');
    });

    it('updateCharacter fails with non-Error - uses fallback', async () => {
      const store = makeCharactersStore();
      (FirebaseCharacterService.update as jest.Mock).mockRejectedValue('error');
      await store.dispatch(updateCharacter({ characterId: 'char-1', data: {} }));
      expect(store.getState().characters.error).toBe('Failed to update character');
    });

    it('deleteCharacter succeeds - removes character', async () => {
      const store = configureStore({
        reducer: { characters: charactersReducer },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
        preloadedState: {
          characters: {
            characters: [mockCharacterSummary],
            activeCharacter: mockCharacter,
            loading: false,
            error: null,
          },
        },
      });
      (FirebaseCharacterService.delete as jest.Mock).mockResolvedValue(undefined);
      await store.dispatch(deleteCharacter('char-1'));
      expect(store.getState().characters.characters).toHaveLength(0);
      expect(store.getState().characters.activeCharacter).toBeNull();
    });

    it('deleteCharacter fails - sets error', async () => {
      const store = makeCharactersStore();
      (FirebaseCharacterService.delete as jest.Mock).mockRejectedValue(new Error('Delete failed'));
      await store.dispatch(deleteCharacter('char-1'));
      expect(store.getState().characters.error).toBe('Delete failed');
    });

    it('deleteCharacter fails with non-Error - uses fallback', async () => {
      const store = makeCharactersStore();
      (FirebaseCharacterService.delete as jest.Mock).mockRejectedValue('error');
      await store.dispatch(deleteCharacter('char-1'));
      expect(store.getState().characters.error).toBe('Failed to delete character');
    });
  });

  describe('saveCharacter (direct-entry) reducer cases', () => {
    it('pushes a new character summary when the list is empty', () => {
      const state = charactersReducer(initialState, {
        type: 'characterEntry/save/fulfilled',
        payload: mockCharacter,
      });
      expect(state.characters).toHaveLength(1);
      expect(state.characters[0].id).toBe('char-1');
      expect(state.characters[0].name).toBe('Thorin');
      expect(state.activeCharacter).not.toBeNull();
    });

    it('updates an existing summary in place (edit flow)', () => {
      const stateWithCharacter = {
        ...initialState,
        characters: [mockCharacterSummary],
      };
      const updatedCharacter: Character = {
        ...mockCharacter,
        info: { ...mockCharacter.info, name: 'Thorin Stonehammer' },
      };
      const state = charactersReducer(stateWithCharacter, {
        type: 'characterEntry/save/fulfilled',
        payload: updatedCharacter,
      });
      expect(state.characters).toHaveLength(1);
      expect(state.characters[0].name).toBe('Thorin Stonehammer');
    });

    it('does not duplicate an existing character', () => {
      const stateWithCharacter = {
        ...initialState,
        characters: [mockCharacterSummary],
      };
      const state = charactersReducer(stateWithCharacter, {
        type: 'characterEntry/save/fulfilled',
        payload: mockCharacter,
      });
      expect(state.characters).toHaveLength(1);
    });

    it('includes portrait in the summary when the character has one', () => {
      const characterWithPortrait: Character = {
        ...mockCharacter,
        info: { ...mockCharacter.info, portrait: 'https://example.com/portrait.jpg' },
      };
      const state = charactersReducer(initialState, {
        type: 'characterEntry/save/fulfilled',
        payload: characterWithPortrait,
      });
      expect(state.characters[0].portrait).toBe('https://example.com/portrait.jpg');
    });

    it('omits portrait from the summary when the character has none', () => {
      const state = charactersReducer(initialState, {
        type: 'characterEntry/save/fulfilled',
        payload: mockCharacter,
      });
      expect(state.characters[0].portrait).toBeUndefined();
    });
  });
});
