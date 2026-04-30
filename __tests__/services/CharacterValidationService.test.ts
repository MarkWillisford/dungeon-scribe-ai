import { CharacterValidationService } from '@services/CharacterValidationService';
import type { Character } from '@/types';
import type { ClassEntry } from '@/types/classes';
import type { AbilityScore } from '@/types/abilities';
import type { CharacterFeat } from '@/types/feats';
import { Alignment, Size } from '@/types/base';
import { BABProgression, SaveProgression } from '@/types/base';
import { PRESET_PF1E_STANDARD } from '@/data/rulesets/presets';
import type { ClassDataMap } from '@/utils/characterComputations';

// Mocked computation fns ignore the map, so an empty Map suffices.
const TEST_CLASS_MAP: ClassDataMap = new Map();

// ---- Mocks ----

jest.mock('@/utils/characterComputations', () => ({
  computeTotalBAB: jest.fn((classes: { name: string; level: number }[]) =>
    classes.reduce((sum, c) => {
      if (c.name === 'Fighter') return sum + c.level;
      if (c.name === 'Wizard') return sum + Math.floor(c.level * 0.5);
      return sum + Math.floor(c.level * 0.75);
    }, 0),
  ),
  computeTotalBABFractional: jest.fn((classes: { name: string; level: number }[]) =>
    Math.floor(
      classes.reduce((sum, c) => {
        if (c.name === 'Fighter') return sum + c.level;
        if (c.name === 'Wizard') return sum + c.level * 0.5;
        return sum + c.level * 0.75;
      }, 0),
    ),
  ),
  computeBaseFort: jest.fn(() => 0),
  computeBaseFortFractional: jest.fn(() => 0),
  computeBaseRef: jest.fn(() => 0),
  computeBaseRefFractional: jest.fn(() => 0),
  computeBaseWill: jest.fn(() => 0),
  computeBaseWillFractional: jest.fn(() => 0),
  lookupClassData: jest.fn((className: string) => {
    const classes: Record<
      string,
      {
        category: string;
        skillRanksPerLevel: number;
        spellcasting: { type: string };
        advancesSpellcasting?: { mode: string; tradition?: string; atLevels?: number[] };
        prerequisites?: object;
        classFeatures: object[];
      }
    > = {
      Fighter: {
        category: 'Base',
        skillRanksPerLevel: 2,
        spellcasting: { type: 'None' },
        classFeatures: [],
      },
      Wizard: {
        category: 'Base',
        skillRanksPerLevel: 2,
        spellcasting: { type: 'Arcane' },
        classFeatures: [],
      },
      Hathran: {
        category: 'Prestige',
        skillRanksPerLevel: 2,
        spellcasting: { type: 'Arcane' },
        advancesSpellcasting: { mode: 'single', tradition: 'chosen' },
        prerequisites: {
          bab: 0,
          skills: [{ name: 'Spellcraft', ranks: 8 }],
          feats: ['Brew Potion'],
          spellcasting: 'Ability to cast 3rd-level arcane spells',
        },
        classFeatures: [],
      },
      Archmage: {
        category: 'Prestige',
        skillRanksPerLevel: 2,
        spellcasting: { type: 'Arcane' },
        prerequisites: {
          bab: 4,
          spellcasting: 'Ability to cast 5th-level arcane spells',
        },
        classFeatures: [],
      },
      SomePrestige: {
        category: 'Prestige',
        skillRanksPerLevel: 2,
        spellcasting: { type: 'None' },
        prerequisites: {
          special: ['Must be a member of the Hathran sisterhood'],
        },
        classFeatures: [],
      },
    };
    return classes[className] ?? null;
  }),
}));

jest.mock('@/services/GameDataService', () => ({
  GameDataService: {
    getFeatById: jest.fn(async (id: string) => {
      const feats: Record<string, { id: string; name: string; prerequisites: object[] }> = {
        'brew-potion': { id: 'brew-potion', name: 'Brew Potion', prerequisites: [] },
        'power-attack': {
          id: 'power-attack',
          name: 'Power Attack',
          prerequisites: [{ type: 'bab', minimum: 1 }],
        },
        'iron-will': { id: 'iron-will', name: 'Iron Will', prerequisites: [] },
      };
      return feats[id] ?? null;
    }),
  },
}));

// PrerequisiteService needs character object — mock to control the result
jest.mock('@services/PrerequisiteService', () => ({
  PrerequisiteService: {
    checkPrerequisites: jest.fn(),
  },
}));

import { PrerequisiteService } from '@services/PrerequisiteService';

// ---- Helpers ----

const DEFAULT_RULESET = PRESET_PF1E_STANDARD;

function makeAbilityScore(base: number, racial = 0): AbilityScore {
  return {
    base,
    racial,
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
    total: base + racial,
    modifier: Math.floor((base + racial - 10) / 2),
    tempTotal: base + racial,
    tempModifier: Math.floor((base + racial - 10) / 2),
  };
}

function makeClass(
  name: string,
  level: number,
  id = name,
  extra: Partial<ClassEntry> = {},
): ClassEntry {
  return {
    name,
    level,
    id,
    hitDieSize: 8,
    hitDieResults: [],
    skillRanks: 2,
    classSkills: [],
    babProgression: BABProgression.Medium,
    fortProgression: SaveProgression.Poor,
    refProgression: SaveProgression.Poor,
    willProgression: SaveProgression.Poor,
    classFeatures: [],
    sourceSystem: 'pf1e',
    classChoices: [],
    prereqOverride: false,
    ...extra,
  };
}

function blankCharacter(): Character {
  return {
    info: {
      id: 'test-id',
      name: 'Rissi',
      player: 'Mark',
      userId: '',
      race: {
        name: 'Human',
        sizeMod: Size.Medium,
        baseSpeed: 30,
        alternativeMovements: {},
        abilityModifiers: {},
        traits: [],
        languages: [],
        bonusLanguages: [],
      },
      size: Size.Medium,
      alignment: Alignment.TrueNeutral,
      deity: '',
      gender: '',
      age: 0,
      height: '',
      weight: '',
      hair: '',
      eyes: '',
      skin: '',
      homeland: '',
      campaign: '',
      portrait: '',
      background: '',
      notes: '',
    },
    abilityScores: {
      str: makeAbilityScore(10),
      dex: makeAbilityScore(10),
      con: makeAbilityScore(10),
      int: makeAbilityScore(10),
      wis: makeAbilityScore(10),
      cha: makeAbilityScore(10),
    },
    classes: {
      classes: [makeClass('Fighter', 4, '1')],
      totalLevel: 4,
      baseAttackBonus: [4],
      baseFortSave: 4,
      baseRefSave: 1,
      baseWillSave: 1,
      favoredClassBonuses: [],
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    combatStats: {} as any,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    skills: {} as any,
    feats: { feats: [], totalFeats: 0, bonusFeats: 0 },
    traits: { traits: [], maxTraits: 2 },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    equipment: {} as any,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    spellcasting: { pools: [] } as any,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    initiating: {
      pools: [],
      disciplines: [],
      knownManeuvers: [],
      readiedManeuvers: [],
      equippedStances: [],
    } as any,
    specialAbilities: { specialAbilities: [] },
    conditions: { activeConditions: [] },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    experience: {} as any,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    currency: {} as any,
    eidolons: [],
    companions: [],
    levelHistory: [],
    appliedTemplates: [],
    grantedBonuses: [],
    resources: [],
    buffs: [],
    savedBuffs: [],
    levelIncrementSlots: [],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ruleset: {} as any,
    schemaVersion: '1.2.0',
    lastUpdated: new Date(),
  };
}

// ---- Tests ----

describe('CharacterValidationService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (PrerequisiteService.checkPrerequisites as jest.Mock).mockResolvedValue({
      met: true,
      unmet: [],
      reasons: [],
    });
  });

  describe('identity checks', () => {
    it('no warnings for a valid character', async () => {
      const warnings = await CharacterValidationService.validate(
        blankCharacter(),
        DEFAULT_RULESET,
        TEST_CLASS_MAP,
      );
      const identity = warnings.filter((w) => w.section === 'identity');
      expect(identity).toHaveLength(0);
    });

    it('warns when name is empty', async () => {
      const character = blankCharacter();
      character.info.name = '';
      const warnings = await CharacterValidationService.validate(
        character,
        DEFAULT_RULESET,
        TEST_CLASS_MAP,
      );
      expect(warnings.some((w) => w.section === 'identity' && w.message.includes('name'))).toBe(
        true,
      );
    });

    it('warns when race is empty', async () => {
      const character = blankCharacter();
      character.info.race.name = '';
      const warnings = await CharacterValidationService.validate(
        character,
        DEFAULT_RULESET,
        TEST_CLASS_MAP,
      );
      expect(warnings.some((w) => w.section === 'identity' && w.message.includes('Race'))).toBe(
        true,
      );
    });

    it('warns when no classes', async () => {
      const character = blankCharacter();
      character.classes.classes = [];
      const warnings = await CharacterValidationService.validate(
        character,
        DEFAULT_RULESET,
        TEST_CLASS_MAP,
      );
      expect(warnings.some((w) => w.section === 'identity' && w.message.includes('class'))).toBe(
        true,
      );
    });
  });

  describe('ability score checks', () => {
    it('warns when base score is out of range', async () => {
      const character = blankCharacter();
      character.abilityScores.str.base = 0;
      const warnings = await CharacterValidationService.validate(
        character,
        DEFAULT_RULESET,
        TEST_CLASS_MAP,
      );
      expect(warnings.some((w) => w.section === 'abilities' && w.message.includes('STR'))).toBe(
        true,
      );
    });

    it('warns when total is non-positive', async () => {
      const character = blankCharacter();
      // Simulate a total of -4 after penalties
      character.abilityScores.dex.base = 1;
      character.abilityScores.dex.total = -4;
      const warnings = await CharacterValidationService.validate(
        character,
        DEFAULT_RULESET,
        TEST_CLASS_MAP,
      );
      expect(warnings.some((w) => w.section === 'abilities' && w.message.includes('DEX'))).toBe(
        true,
      );
    });

    it('no ability warnings for all-10 scores', async () => {
      const character = blankCharacter();
      // levelIncrementSlots must match floor(4/4) = 1
      character.levelIncrementSlots = [{ atHD: 4, ability: 'str' }];
      const warnings = await CharacterValidationService.validate(
        character,
        DEFAULT_RULESET,
        TEST_CLASS_MAP,
      );
      expect(warnings.filter((w) => w.section === 'abilities')).toHaveLength(0);
    });
  });

  describe('level increment slots', () => {
    it('warns when slot count does not match HD', async () => {
      const character = blankCharacter(); // Fighter 4 → expects 1 slot, has 0
      const warnings = await CharacterValidationService.validate(
        character,
        DEFAULT_RULESET,
        TEST_CLASS_MAP,
      );
      expect(
        warnings.some((w) => w.section === 'abilities' && w.message.includes('increment')),
      ).toBe(true);
    });

    it('warns when slots exist but are unassigned', async () => {
      const character = blankCharacter();
      character.levelIncrementSlots = [{ atHD: 4, ability: null }]; // count correct, but null
      const warnings = await CharacterValidationService.validate(
        character,
        DEFAULT_RULESET,
        TEST_CLASS_MAP,
      );
      expect(
        warnings.some((w) => w.section === 'abilities' && w.message.includes('unassigned')),
      ).toBe(true);
    });

    it('no warning when slots match and are assigned', async () => {
      const character = blankCharacter();
      character.levelIncrementSlots = [{ atHD: 4, ability: 'str' }];
      const warnings = await CharacterValidationService.validate(
        character,
        DEFAULT_RULESET,
        TEST_CLASS_MAP,
      );
      expect(
        warnings.filter((w) => w.section === 'abilities' && w.message.includes('increment')),
      ).toHaveLength(0);
    });
  });

  describe('class prerequisites', () => {
    it('skips non-prestige classes (no prerequisites field)', async () => {
      const character = blankCharacter(); // Fighter only
      character.levelIncrementSlots = [{ atHD: 4, ability: 'str' }];
      const warnings = await CharacterValidationService.validate(
        character,
        DEFAULT_RULESET,
        TEST_CLASS_MAP,
      );
      expect(warnings.filter((w) => w.section === 'classes')).toHaveLength(0);
    });

    it('warns when prestige class BAB requirement not met', async () => {
      const character = blankCharacter();
      character.classes.classes = [makeClass('Archmage', 1, '1')];
      character.levelIncrementSlots = [];
      // Archmage requires BAB +4; Archmage 0 → BAB 0
      const warnings = await CharacterValidationService.validate(
        character,
        DEFAULT_RULESET,
        TEST_CLASS_MAP,
      );
      expect(warnings.some((w) => w.section === 'classes' && w.message.includes('Archmage'))).toBe(
        true,
      );
    });

    it('suppresses class prereq warnings when prereqOverride is true', async () => {
      const character = blankCharacter();
      character.classes.classes = [makeClass('Archmage', 1, '1', { prereqOverride: true })];
      const warnings = await CharacterValidationService.validate(
        character,
        DEFAULT_RULESET,
        TEST_CLASS_MAP,
      );
      expect(warnings.filter((w) => w.section === 'classes')).toHaveLength(0);
    });

    it('warns when skill requirement not met', async () => {
      const character = blankCharacter();
      // Hathran requires Spellcraft 8; character has 0
      character.classes.classes = [makeClass('Wizard', 9, '1'), makeClass('Hathran', 1, '2')];
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      character.skills = {} as any; // no spellcraft
      character.levelIncrementSlots = [
        { atHD: 4, ability: 'str' },
        { atHD: 8, ability: 'str' },
      ];
      const warnings = await CharacterValidationService.validate(
        character,
        DEFAULT_RULESET,
        TEST_CLASS_MAP,
      );
      expect(
        warnings.some((w) => w.section === 'classes' && w.detail?.includes('Spellcraft')),
      ).toBe(true);
    });

    it('warns about special requirements with soft warning', async () => {
      const character = blankCharacter();
      character.classes.classes = [makeClass('SomePrestige', 1, '1')];
      const warnings = await CharacterValidationService.validate(
        character,
        DEFAULT_RULESET,
        TEST_CLASS_MAP,
      );
      expect(
        warnings.some(
          (w) => w.section === 'classes' && w.message.includes('cannot be auto-checked'),
        ),
      ).toBe(true);
    });
  });

  describe('feat prerequisites', () => {
    it('warns when feat prerequisite is not met', async () => {
      (PrerequisiteService.checkPrerequisites as jest.Mock).mockResolvedValue({
        met: false,
        unmet: [{ type: 'bab', minimum: 1 }],
        reasons: ['BAB +1'],
      });

      const character = blankCharacter();
      character.classes.classes = [makeClass('Wizard', 1, '1')];
      character.feats.feats = [
        {
          featId: 'power-attack',
          name: 'Power Attack',
          source: 'level_1',
          grantedAtLevel: 1,
          active: true,
          choices: {},
          prereqOverride: false,
        } as CharacterFeat,
      ];
      const warnings = await CharacterValidationService.validate(
        character,
        DEFAULT_RULESET,
        TEST_CLASS_MAP,
      );
      expect(
        warnings.some((w) => w.section === 'feats' && w.message.includes('Power Attack')),
      ).toBe(true);
      expect(warnings.find((w) => w.section === 'feats')?.detail).toContain('BAB +1');
    });

    it('suppresses feat prereq warning when prereqOverride is true', async () => {
      (PrerequisiteService.checkPrerequisites as jest.Mock).mockResolvedValue({
        met: false,
        unmet: [{ type: 'bab', minimum: 1 }],
        reasons: ['BAB +1'],
      });

      const character = blankCharacter();
      character.feats.feats = [
        {
          featId: 'power-attack',
          name: 'Power Attack',
          source: 'level_1',
          grantedAtLevel: 1,
          active: true,
          choices: {},
          prereqOverride: true,
        } as CharacterFeat,
      ];
      const warnings = await CharacterValidationService.validate(
        character,
        DEFAULT_RULESET,
        TEST_CLASS_MAP,
      );
      expect(warnings.filter((w) => w.section === 'feats')).toHaveLength(0);
    });

    it('skips feats with no prerequisites', async () => {
      const character = blankCharacter();
      character.feats.feats = [
        {
          featId: 'iron-will',
          name: 'Iron Will',
          source: 'level_1',
          grantedAtLevel: 1,
          active: true,
          choices: {},
          prereqOverride: false,
        } as CharacterFeat,
      ];
      const warnings = await CharacterValidationService.validate(
        character,
        DEFAULT_RULESET,
        TEST_CLASS_MAP,
      );
      expect(warnings.filter((w) => w.section === 'feats')).toHaveLength(0);
      expect(PrerequisiteService.checkPrerequisites).not.toHaveBeenCalled();
    });

    it('skips unassigned feat slots (feats with no featId)', async () => {
      const character = blankCharacter();
      // An empty CharacterFeat with no featId — shouldn't be in feats.feats normally,
      // but if somehow present, it should be skipped
      character.feats.feats = [
        {
          featId: '',
          name: '',
          source: 'level_1',
          grantedAtLevel: 1,
          active: true,
          choices: {},
          prereqOverride: false,
        } as CharacterFeat,
      ];
      const warnings = await CharacterValidationService.validate(
        character,
        DEFAULT_RULESET,
        TEST_CLASS_MAP,
      );
      expect(warnings.filter((w) => w.section === 'feats')).toHaveLength(0);
    });
  });

  describe('trait count', () => {
    it('warns when traits exceed maxTraits', async () => {
      const character = blankCharacter();
      character.traits.traits = [
        { id: '1', traitId: 'reactionary', name: 'Reactionary', category: 'combat', choices: {} },
        {
          id: '2',
          traitId: 'magical-knack',
          name: 'Magical Knack',
          category: 'magic',
          choices: {},
        },
        {
          id: '3',
          traitId: 'indomitable-faith',
          name: 'Indomitable Faith',
          category: 'faith',
          choices: {},
        },
      ];
      const warnings = await CharacterValidationService.validate(
        character,
        DEFAULT_RULESET,
        TEST_CLASS_MAP,
      );
      expect(warnings.some((w) => w.section === 'traits')).toBe(true);
    });

    it('no warning when traits are at limit', async () => {
      const character = blankCharacter();
      character.traits.traits = [
        { id: '1', traitId: 'reactionary', name: 'Reactionary', category: 'combat', choices: {} },
        {
          id: '2',
          traitId: 'magical-knack',
          name: 'Magical Knack',
          category: 'magic',
          choices: {},
        },
      ];
      character.levelIncrementSlots = [{ atHD: 4, ability: 'str' }];
      const warnings = await CharacterValidationService.validate(
        character,
        DEFAULT_RULESET,
        TEST_CLASS_MAP,
      );
      expect(warnings.filter((w) => w.section === 'traits')).toHaveLength(0);
    });

    it('respects custom maxTraits from ruleset', async () => {
      const character = blankCharacter();
      character.traits.traits = [
        { id: '1', traitId: 'a', name: 'A', category: 'combat', choices: {} },
        { id: '2', traitId: 'b', name: 'B', category: 'magic', choices: {} },
        { id: '3', traitId: 'c', name: 'C', category: 'faith', choices: {} },
      ];
      const ruleset = {
        ...DEFAULT_RULESET,
        validationSettings: { ...DEFAULT_RULESET.validationSettings, maxTraits: 3 },
      };
      character.levelIncrementSlots = [{ atHD: 4, ability: 'str' }];
      const warnings = await CharacterValidationService.validate(
        character,
        ruleset,
        TEST_CLASS_MAP,
      );
      expect(warnings.filter((w) => w.section === 'traits')).toHaveLength(0);
    });
  });

  describe('skill ranks', () => {
    it('warns when total assigned exceeds available', async () => {
      const character = blankCharacter(); // Fighter 4, INT 10 → 2 ranks/level × 4 = 8 available
      character.skills = {
        perception: {
          ranks: 5,
          isClassSkill: false,
          ability: 'wis',
          abilityMod: 0,
          classSkillBonus: 0,
          racial: 0,
          trait: 0,
          item: 0,
          misc: 0,
          armorPenalty: 0,
          total: 5,
        },
        stealth: {
          ranks: 5,
          isClassSkill: false,
          ability: 'dex',
          abilityMod: 0,
          classSkillBonus: 0,
          racial: 0,
          trait: 0,
          item: 0,
          misc: 0,
          armorPenalty: 0,
          total: 5,
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } as any; // total 10, exceeds 8
      character.levelIncrementSlots = [{ atHD: 4, ability: 'str' }];
      const warnings = await CharacterValidationService.validate(
        character,
        DEFAULT_RULESET,
        TEST_CLASS_MAP,
      );
      expect(
        warnings.some((w) => w.section === 'skills' && w.message.includes('exceeds available')),
      ).toBe(true);
    });

    it('warns when a single skill exceeds HD', async () => {
      const character = blankCharacter(); // Fighter 4 → totalHD = 4
      character.skills = {
        perception: {
          ranks: 5,
          isClassSkill: false,
          ability: 'wis',
          abilityMod: 0,
          classSkillBonus: 0,
          racial: 0,
          trait: 0,
          item: 0,
          misc: 0,
          armorPenalty: 0,
          total: 5,
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } as any; // 5 > 4 HD
      character.levelIncrementSlots = [{ atHD: 4, ability: 'str' }];
      const warnings = await CharacterValidationService.validate(
        character,
        DEFAULT_RULESET,
        TEST_CLASS_MAP,
      );
      expect(warnings.some((w) => w.section === 'skills' && w.message.includes('perception'))).toBe(
        true,
      );
    });

    it('no skill warnings for valid rank distribution', async () => {
      const character = blankCharacter(); // Fighter 4, INT 10 → 8 available
      character.skills = {
        perception: {
          ranks: 4,
          isClassSkill: false,
          ability: 'wis',
          abilityMod: 0,
          classSkillBonus: 0,
          racial: 0,
          trait: 0,
          item: 0,
          misc: 0,
          armorPenalty: 0,
          total: 4,
        },
        stealth: {
          ranks: 4,
          isClassSkill: false,
          ability: 'dex',
          abilityMod: 0,
          classSkillBonus: 0,
          racial: 0,
          trait: 0,
          item: 0,
          misc: 0,
          armorPenalty: 0,
          total: 4,
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } as any; // total 8 = available
      character.levelIncrementSlots = [{ atHD: 4, ability: 'str' }];
      const warnings = await CharacterValidationService.validate(
        character,
        DEFAULT_RULESET,
        TEST_CLASS_MAP,
      );
      expect(warnings.filter((w) => w.section === 'skills')).toHaveLength(0);
    });
  });

  describe('spellcasting advancement', () => {
    it('warns for prestige caster without advancement configured', async () => {
      const character = blankCharacter();
      character.classes.classes = [
        makeClass('Wizard', 9, '1'),
        makeClass('Hathran', 1, '2', { spellcastingAdvancement: undefined }),
      ];
      character.skills = {
        spellcraft: {
          ranks: 9,
          isClassSkill: false,
          ability: 'int',
          abilityMod: 0,
          classSkillBonus: 0,
          racial: 0,
          trait: 0,
          item: 0,
          misc: 0,
          armorPenalty: 0,
          total: 9,
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } as any;
      character.levelIncrementSlots = [
        { atHD: 4, ability: 'str' },
        { atHD: 8, ability: 'str' },
      ];
      const warnings = await CharacterValidationService.validate(
        character,
        DEFAULT_RULESET,
        TEST_CLASS_MAP,
      );
      expect(warnings.some((w) => w.section === 'spells' && w.message.includes('Hathran'))).toBe(
        true,
      );
    });

    it('no advancement warning when type is configured', async () => {
      const character = blankCharacter();
      character.classes.classes = [
        makeClass('Wizard', 9, '1'),
        makeClass('Hathran', 1, '2', {
          spellcastingAdvancement: {
            mode: 'single',
            perLevel: [{ baseClassEntryId: '1' }],
          },
        }),
      ];
      character.skills = {
        spellcraft: {
          ranks: 9,
          isClassSkill: false,
          ability: 'int',
          abilityMod: 0,
          classSkillBonus: 0,
          racial: 0,
          trait: 0,
          item: 0,
          misc: 0,
          armorPenalty: 0,
          total: 9,
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } as any;
      character.levelIncrementSlots = [
        { atHD: 4, ability: 'str' },
        { atHD: 8, ability: 'str' },
      ];
      const warnings = await CharacterValidationService.validate(
        character,
        DEFAULT_RULESET,
        TEST_CLASS_MAP,
      );
      expect(warnings.filter((w) => w.section === 'spells')).toHaveLength(0);
    });

    it('warns when a per-level advancement target is missing', async () => {
      const character = blankCharacter();
      character.classes.classes = [
        makeClass('Wizard', 9, '1'),
        makeClass('Hathran', 1, '2', {
          spellcastingAdvancement: {
            mode: 'single',
            perLevel: [{ baseClassEntryId: '' }],
          },
        }),
      ];
      character.skills = {
        spellcraft: {
          ranks: 9,
          isClassSkill: false,
          ability: 'int',
          abilityMod: 0,
          classSkillBonus: 0,
          racial: 0,
          trait: 0,
          item: 0,
          misc: 0,
          armorPenalty: 0,
          total: 9,
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } as any;
      character.levelIncrementSlots = [
        { atHD: 4, ability: 'str' },
        { atHD: 8, ability: 'str' },
      ];
      const warnings = await CharacterValidationService.validate(
        character,
        DEFAULT_RULESET,
        TEST_CLASS_MAP,
      );
      expect(warnings.some((w) => w.section === 'spells' && w.message.includes('missing'))).toBe(
        true,
      );
    });
  });

  describe('complete valid character', () => {
    it('returns empty warnings for a well-formed character', async () => {
      (PrerequisiteService.checkPrerequisites as jest.Mock).mockResolvedValue({
        met: true,
        unmet: [],
        reasons: [],
      });

      const character = blankCharacter();
      // Fighter 4: expects 1 level increment
      character.levelIncrementSlots = [{ atHD: 4, ability: 'str' }];
      // Assign valid skills: 8 available, 4 used, each within HD
      character.skills = {
        perception: {
          ranks: 4,
          isClassSkill: false,
          ability: 'wis',
          abilityMod: 0,
          classSkillBonus: 0,
          racial: 0,
          trait: 0,
          item: 0,
          misc: 0,
          armorPenalty: 0,
          total: 4,
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } as any;
      // 2 traits (at limit)
      character.traits.traits = [
        { id: '1', traitId: 'reactionary', name: 'Reactionary', category: 'combat', choices: {} },
        {
          id: '2',
          traitId: 'magical-knack',
          name: 'Magical Knack',
          category: 'magic',
          choices: {},
        },
      ];

      const warnings = await CharacterValidationService.validate(
        character,
        DEFAULT_RULESET,
        TEST_CLASS_MAP,
      );
      expect(warnings).toHaveLength(0);
    });
  });
});
