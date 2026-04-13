import { DraftValidationService } from '@services/DraftValidationService';
import type { CharacterDraft, DraftClassEntry } from '@/types/characterDraft';
import { Alignment } from '@/types/base';
import { PRESET_PF1E_STANDARD } from '@/data/rulesets/presets';

// ---- Mocks ----

jest.mock('@/utils/characterComputations', () => ({
  abilityTotal: jest.fn(
    (score: { base: number; racial: number; inherent: number; enhancement: number; other: number; levelIncrements: number }) =>
      score.base + score.racial + score.inherent + score.enhancement + score.other + score.levelIncrements,
  ),
  abilityModifier: jest.fn((total: number) => Math.floor((total - 10) / 2)),
  computeTotalBAB: jest.fn((classes: DraftClassEntry[]) =>
    classes.reduce((sum, c) => {
      if (c.className === 'Fighter') return sum + c.level;
      if (c.className === 'Wizard') return sum + Math.floor(c.level * 0.5);
      return sum + Math.floor(c.level * 0.75);
    }, 0),
  ),
  computeTotalBABFractional: jest.fn((classes: DraftClassEntry[]) =>
    Math.floor(classes.reduce((sum, c) => {
      if (c.className === 'Fighter') return sum + c.level;
      if (c.className === 'Wizard') return sum + c.level * 0.5;
      return sum + c.level * 0.75;
    }, 0)),
  ),
  computeBaseFort: jest.fn(() => 0),
  computeBaseFortFractional: jest.fn(() => 0),
  computeBaseRef: jest.fn(() => 0),
  computeBaseRefFractional: jest.fn(() => 0),
  computeBaseWill: jest.fn(() => 0),
  computeBaseWillFractional: jest.fn(() => 0),
  lookupClassData: jest.fn((className: string) => {
    const classes: Record<string, {
      category: string;
      skillRanksPerLevel: number;
      spellcasting: { type: string };
      prerequisites?: object;
      classFeatures: object[];
    }> = {
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

jest.mock('@/data/feats', () => ({
  getFeatById: jest.fn((id: string) => {
    const feats: Record<string, { id: string; name: string; prerequisites: object[] }> = {
      'brew-potion': { id: 'brew-potion', name: 'Brew Potion', prerequisites: [] },
      'power-attack': {
        id: 'power-attack',
        name: 'Power Attack',
        prerequisites: [{ type: 'bab', minimum: 1 }],
      },
      'iron-will': { id: 'iron-will', name: 'Iron Will', prerequisites: [] },
    };
    return feats[id] ?? undefined;
  }),
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

function blankDraft(): CharacterDraft {
  return {
    name: 'Rissi',
    player: 'Mark',
    raceId: 'human',
    raceName: 'Human',
    alignment: Alignment.TrueNeutral,
    deity: '',
    gender: '',
    age: '',
    height: '',
    weight: '',
    hair: '',
    eyes: '',
    skin: '',
    background: '',
    abilities: {
      str: { base: 10, racial: 0, inherent: 0, enhancement: 0, other: 0, levelIncrements: 0 },
      dex: { base: 10, racial: 0, inherent: 0, enhancement: 0, other: 0, levelIncrements: 0 },
      con: { base: 10, racial: 0, inherent: 0, enhancement: 0, other: 0, levelIncrements: 0 },
      int: { base: 10, racial: 0, inherent: 0, enhancement: 0, other: 0, levelIncrements: 0 },
      wis: { base: 10, racial: 0, inherent: 0, enhancement: 0, other: 0, levelIncrements: 0 },
      cha: { base: 10, racial: 0, inherent: 0, enhancement: 0, other: 0, levelIncrements: 0 },
    },
    levelIncrementSlots: [],
    classes: [
      { id: '1', className: 'Fighter', level: 4, sourceSystem: 'pf1e', classChoices: [], prereqOverride: false },
    ],
    templates: [],
    combat: {
      currentHP: 30, nonlethalDamage: 0, tempHP: 0,
      acMiscBonus: 0, saveFortMisc: 0, saveRefMisc: 0, saveWillMisc: 0,
      meleeAttackMisc: 0, rangedAttackMisc: 0, cmbMisc: 0, speedLand: 30,
    },
    skills: {},
    traits: [],
    featSlots: [],
    spellcastingPools: [],
    weapons: [],
    armor: [],
    magicItems: [],
    characterNotes: '',
    campaignNotes: '',
  };
}

// ---- Tests ----

describe('DraftValidationService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (PrerequisiteService.checkPrerequisites as jest.Mock).mockReturnValue({
      met: true, unmet: [], reasons: [],
    });
  });

  describe('identity checks', () => {
    it('no warnings for a valid character', () => {
      const warnings = DraftValidationService.validate(blankDraft(), DEFAULT_RULESET);
      const identity = warnings.filter((w) => w.section === 'identity');
      expect(identity).toHaveLength(0);
    });

    it('warns when name is empty', () => {
      const draft = blankDraft();
      draft.name = '';
      const warnings = DraftValidationService.validate(draft, DEFAULT_RULESET);
      expect(warnings.some((w) => w.section === 'identity' && w.message.includes('name'))).toBe(true);
    });

    it('warns when race is empty', () => {
      const draft = blankDraft();
      draft.raceName = '';
      const warnings = DraftValidationService.validate(draft, DEFAULT_RULESET);
      expect(warnings.some((w) => w.section === 'identity' && w.message.includes('Race'))).toBe(true);
    });

    it('warns when no classes', () => {
      const draft = blankDraft();
      draft.classes = [];
      const warnings = DraftValidationService.validate(draft, DEFAULT_RULESET);
      expect(warnings.some((w) => w.section === 'identity' && w.message.includes('class'))).toBe(true);
    });
  });

  describe('ability score checks', () => {
    it('warns when base score is out of range', () => {
      const draft = blankDraft();
      draft.abilities.str.base = 0;
      const warnings = DraftValidationService.validate(draft, DEFAULT_RULESET);
      expect(warnings.some((w) => w.section === 'abilities' && w.message.includes('STR'))).toBe(true);
    });

    it('warns when total is non-positive', () => {
      const draft = blankDraft();
      draft.abilities.dex.base = 1;
      draft.abilities.dex.other = -5; // total = -4
      const warnings = DraftValidationService.validate(draft, DEFAULT_RULESET);
      expect(warnings.some((w) => w.section === 'abilities' && w.message.includes('DEX'))).toBe(true);
    });

    it('no ability warnings for all-10 scores', () => {
      const draft = blankDraft();
      // levelIncrementSlots must match floor(4/4) = 1
      draft.levelIncrementSlots = [{ atHD: 4, ability: 'str' }];
      const warnings = DraftValidationService.validate(draft, DEFAULT_RULESET);
      expect(warnings.filter((w) => w.section === 'abilities')).toHaveLength(0);
    });
  });

  describe('level increment slots', () => {
    it('warns when slot count does not match HD', () => {
      const draft = blankDraft(); // Fighter 4 → expects 1 slot, has 0
      const warnings = DraftValidationService.validate(draft, DEFAULT_RULESET);
      expect(warnings.some((w) => w.section === 'abilities' && w.message.includes('increment'))).toBe(true);
    });

    it('warns when slots exist but are unassigned', () => {
      const draft = blankDraft();
      draft.levelIncrementSlots = [{ atHD: 4, ability: null }]; // count correct, but null
      const warnings = DraftValidationService.validate(draft, DEFAULT_RULESET);
      expect(warnings.some((w) => w.section === 'abilities' && w.message.includes('unassigned'))).toBe(true);
    });

    it('no warning when slots match and are assigned', () => {
      const draft = blankDraft();
      draft.levelIncrementSlots = [{ atHD: 4, ability: 'str' }];
      const warnings = DraftValidationService.validate(draft, DEFAULT_RULESET);
      expect(warnings.filter((w) => w.section === 'abilities' && w.message.includes('increment'))).toHaveLength(0);
    });
  });

  describe('class prerequisites', () => {
    it('skips non-prestige classes (no prerequisites field)', () => {
      const draft = blankDraft(); // Fighter only
      draft.levelIncrementSlots = [{ atHD: 4, ability: 'str' }];
      const warnings = DraftValidationService.validate(draft, DEFAULT_RULESET);
      expect(warnings.filter((w) => w.section === 'classes')).toHaveLength(0);
    });

    it('warns when prestige class BAB requirement not met', () => {
      const draft = blankDraft();
      draft.classes = [
        { id: '1', className: 'Archmage', level: 1, sourceSystem: 'pf1e', classChoices: [], prereqOverride: false },
      ];
      draft.levelIncrementSlots = [];
      // Archmage requires BAB +4; Fighter 0 → BAB 0
      const warnings = DraftValidationService.validate(draft, DEFAULT_RULESET);
      expect(warnings.some((w) => w.section === 'classes' && w.message.includes('Archmage'))).toBe(true);
    });

    it('suppresses class prereq warnings when prereqOverride is true', () => {
      const draft = blankDraft();
      draft.classes = [
        { id: '1', className: 'Archmage', level: 1, sourceSystem: 'pf1e', classChoices: [], prereqOverride: true },
      ];
      const warnings = DraftValidationService.validate(draft, DEFAULT_RULESET);
      expect(warnings.filter((w) => w.section === 'classes')).toHaveLength(0);
    });

    it('warns when skill requirement not met', () => {
      const draft = blankDraft();
      // Hathran requires Spellcraft 8; character has 0
      draft.classes = [
        { id: '1', className: 'Wizard', level: 9, sourceSystem: 'pf1e', classChoices: [], prereqOverride: false },
        { id: '2', className: 'Hathran', level: 1, sourceSystem: 'pf1e', classChoices: [], prereqOverride: false },
      ];
      draft.skills = {}; // no spellcraft
      draft.levelIncrementSlots = [{ atHD: 4, ability: 'str' }, { atHD: 8, ability: 'str' }];
      const warnings = DraftValidationService.validate(draft, DEFAULT_RULESET);
      expect(warnings.some((w) => w.section === 'classes' && w.detail?.includes('Spellcraft'))).toBe(true);
    });

    it('warns about special requirements with soft warning', () => {
      const draft = blankDraft();
      draft.classes = [
        { id: '1', className: 'SomePrestige', level: 1, sourceSystem: 'pf1e', classChoices: [], prereqOverride: false },
      ];
      const warnings = DraftValidationService.validate(draft, DEFAULT_RULESET);
      expect(warnings.some((w) => w.section === 'classes' && w.message.includes('cannot be auto-checked'))).toBe(true);
    });
  });

  describe('feat prerequisites', () => {
    it('warns when feat prerequisite is not met', () => {
      (PrerequisiteService.checkPrerequisites as jest.Mock).mockReturnValue({
        met: false, unmet: [{ type: 'bab', minimum: 1 }], reasons: ['BAB +1'],
      });

      const draft = blankDraft();
      draft.classes = [
        { id: '1', className: 'Wizard', level: 1, sourceSystem: 'pf1e', classChoices: [], prereqOverride: false },
      ];
      draft.featSlots = [
        { id: 'slot-1', source: 'level', availableAt: 'Lvl 1', availableAtLevel: 1, featId: 'power-attack', featName: 'Power Attack', prereqOverride: false },
      ];
      const warnings = DraftValidationService.validate(draft, DEFAULT_RULESET);
      expect(warnings.some((w) => w.section === 'feats' && w.message.includes('Power Attack'))).toBe(true);
      expect(warnings.find((w) => w.section === 'feats')?.detail).toContain('BAB +1');
    });

    it('suppresses feat prereq warning when prereqOverride is true', () => {
      (PrerequisiteService.checkPrerequisites as jest.Mock).mockReturnValue({
        met: false, unmet: [{ type: 'bab', minimum: 1 }], reasons: ['BAB +1'],
      });

      const draft = blankDraft();
      draft.featSlots = [
        { id: 'slot-1', source: 'level', availableAt: 'Lvl 1', availableAtLevel: 1, featId: 'power-attack', featName: 'Power Attack', prereqOverride: true },
      ];
      const warnings = DraftValidationService.validate(draft, DEFAULT_RULESET);
      expect(warnings.filter((w) => w.section === 'feats')).toHaveLength(0);
    });

    it('skips feats with no prerequisites', () => {
      const draft = blankDraft();
      draft.featSlots = [
        { id: 'slot-1', source: 'level', availableAt: 'Lvl 1', availableAtLevel: 1, featId: 'iron-will', featName: 'Iron Will', prereqOverride: false },
      ];
      const warnings = DraftValidationService.validate(draft, DEFAULT_RULESET);
      expect(warnings.filter((w) => w.section === 'feats')).toHaveLength(0);
      expect(PrerequisiteService.checkPrerequisites).not.toHaveBeenCalled();
    });

    it('skips unassigned feat slots', () => {
      const draft = blankDraft();
      draft.featSlots = [
        { id: 'slot-1', source: 'level', availableAt: 'Lvl 1', availableAtLevel: 1, prereqOverride: false },
      ];
      const warnings = DraftValidationService.validate(draft, DEFAULT_RULESET);
      expect(warnings.filter((w) => w.section === 'feats')).toHaveLength(0);
    });
  });

  describe('trait count', () => {
    it('warns when traits exceed maxTraits', () => {
      const draft = blankDraft();
      draft.traits = [
        { id: '1', traitName: 'Reactionary', category: 'Combat', description: '' },
        { id: '2', traitName: 'Magical Knack', category: 'Magic', description: '' },
        { id: '3', traitName: 'Indomitable Faith', category: 'Faith', description: '' },
      ];
      const warnings = DraftValidationService.validate(draft, DEFAULT_RULESET);
      expect(warnings.some((w) => w.section === 'traits')).toBe(true);
    });

    it('no warning when traits are at limit', () => {
      const draft = blankDraft();
      draft.traits = [
        { id: '1', traitName: 'Reactionary', category: 'Combat', description: '' },
        { id: '2', traitName: 'Magical Knack', category: 'Magic', description: '' },
      ];
      draft.levelIncrementSlots = [{ atHD: 4, ability: 'str' }];
      const warnings = DraftValidationService.validate(draft, DEFAULT_RULESET);
      expect(warnings.filter((w) => w.section === 'traits')).toHaveLength(0);
    });

    it('respects custom maxTraits from ruleset', () => {
      const draft = blankDraft();
      draft.traits = [
        { id: '1', traitName: 'A', category: 'Combat', description: '' },
        { id: '2', traitName: 'B', category: 'Magic', description: '' },
        { id: '3', traitName: 'C', category: 'Faith', description: '' },
      ];
      const ruleset = { ...DEFAULT_RULESET, validationSettings: { ...DEFAULT_RULESET.validationSettings, maxTraits: 3 } };
      draft.levelIncrementSlots = [{ atHD: 4, ability: 'str' }];
      const warnings = DraftValidationService.validate(draft, ruleset);
      expect(warnings.filter((w) => w.section === 'traits')).toHaveLength(0);
    });
  });

  describe('skill ranks', () => {
    it('warns when total assigned exceeds available', () => {
      const draft = blankDraft(); // Fighter 4, INT 10 → 2 ranks/level × 4 = 8 available
      draft.skills = {
        perception: { ranks: 5, misc: 0 },
        stealth: { ranks: 5, misc: 0 }, // total 10, exceeds 8
      };
      draft.levelIncrementSlots = [{ atHD: 4, ability: 'str' }];
      const warnings = DraftValidationService.validate(draft, DEFAULT_RULESET);
      expect(warnings.some((w) => w.section === 'skills' && w.message.includes('exceeds available'))).toBe(true);
    });

    it('warns when a single skill exceeds HD', () => {
      const draft = blankDraft(); // Fighter 4 → totalHD = 4
      draft.skills = { perception: { ranks: 5, misc: 0 } }; // 5 > 4 HD
      draft.levelIncrementSlots = [{ atHD: 4, ability: 'str' }];
      const warnings = DraftValidationService.validate(draft, DEFAULT_RULESET);
      expect(warnings.some((w) => w.section === 'skills' && w.message.includes('perception'))).toBe(true);
    });

    it('no skill warnings for valid rank distribution', () => {
      const draft = blankDraft(); // Fighter 4, INT 10 → 8 available
      draft.skills = {
        perception: { ranks: 4, misc: 0 },
        stealth: { ranks: 4, misc: 0 }, // total 8 = available
      };
      draft.levelIncrementSlots = [{ atHD: 4, ability: 'str' }];
      const warnings = DraftValidationService.validate(draft, DEFAULT_RULESET);
      expect(warnings.filter((w) => w.section === 'skills')).toHaveLength(0);
    });
  });

  describe('spellcasting advancement', () => {
    it('warns for prestige caster without advancement configured', () => {
      const draft = blankDraft();
      draft.classes = [
        { id: '1', className: 'Wizard', level: 9, sourceSystem: 'pf1e', classChoices: [], prereqOverride: false },
        { id: '2', className: 'Hathran', level: 1, sourceSystem: 'pf1e', classChoices: [], prereqOverride: false,
          spellcastingAdvancement: undefined },
      ];
      draft.skills = { spellcraft: { ranks: 9, misc: 0 } };
      draft.levelIncrementSlots = [{ atHD: 4, ability: 'str' }, { atHD: 8, ability: 'str' }];
      const warnings = DraftValidationService.validate(draft, DEFAULT_RULESET);
      expect(warnings.some((w) => w.section === 'spells' && w.message.includes('Hathran'))).toBe(true);
    });

    it('no advancement warning when type is configured', () => {
      const draft = blankDraft();
      draft.classes = [
        { id: '1', className: 'Wizard', level: 9, sourceSystem: 'pf1e', classChoices: [], prereqOverride: false },
        {
          id: '2', className: 'Hathran', level: 1, sourceSystem: 'pf1e', classChoices: [], prereqOverride: false,
          spellcastingAdvancement: { type: 'arcane' },
        },
      ];
      draft.skills = { spellcraft: { ranks: 9, misc: 0 } };
      draft.levelIncrementSlots = [{ atHD: 4, ability: 'str' }, { atHD: 8, ability: 'str' }];
      const warnings = DraftValidationService.validate(draft, DEFAULT_RULESET);
      expect(warnings.filter((w) => w.section === 'spells')).toHaveLength(0);
    });

    it('warns when advancement type is chosen but chosenType is missing', () => {
      const draft = blankDraft();
      draft.classes = [
        { id: '1', className: 'Wizard', level: 9, sourceSystem: 'pf1e', classChoices: [], prereqOverride: false },
        {
          id: '2', className: 'Hathran', level: 1, sourceSystem: 'pf1e', classChoices: [], prereqOverride: false,
          spellcastingAdvancement: { type: 'chosen' },
        },
      ];
      draft.skills = { spellcraft: { ranks: 9, misc: 0 } };
      draft.levelIncrementSlots = [{ atHD: 4, ability: 'str' }, { atHD: 8, ability: 'str' }];
      const warnings = DraftValidationService.validate(draft, DEFAULT_RULESET);
      expect(warnings.some((w) => w.section === 'spells' && w.message.includes('"chosen"'))).toBe(true);
    });
  });

  describe('complete valid character', () => {
    it('returns empty warnings for a well-formed character', () => {
      (PrerequisiteService.checkPrerequisites as jest.Mock).mockReturnValue({
        met: true, unmet: [], reasons: [],
      });

      const draft = blankDraft();
      // Fighter 4: expects 1 level increment
      draft.levelIncrementSlots = [{ atHD: 4, ability: 'str' }];
      // Assign valid skills: 8 available, 4 used, each within HD
      draft.skills = { perception: { ranks: 4, misc: 0 } };
      // 2 traits (at limit)
      draft.traits = [
        { id: '1', traitName: 'Reactionary', category: 'Combat', description: '' },
        { id: '2', traitName: 'Magical Knack', category: 'Magic', description: '' },
      ];

      const warnings = DraftValidationService.validate(draft, DEFAULT_RULESET);
      expect(warnings).toHaveLength(0);
    });
  });
});
