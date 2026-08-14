import {
  CompanionService,
  AC_PROGRESSION,
  computeCompanionEffectiveLevel,
  effectiveLevelFromDraftClass,
  pickerFilterFromDraftClass,
} from '@services/CompanionService';
import type { Character } from '@/types';
import type { ClassEntry } from '@/types/classes';
import { BABProgression, SaveProgression } from '@/types/base';
import type { AnimalCompanionEntry } from '@/types/animalCompanions';
import type { CompanionInstance, CompanionGrant } from '@/types/companions';

// Extend the real ALL_TEMPLATES with two synthetic entries used only in
// template-formula branch tests below (characterLevel, characterLevel-4).
jest.mock('@/data/templates', () => {
  const real = jest.requireActual('@/data/templates');
  return {
    ...real,
    ALL_TEMPLATES: [
      ...real.ALL_TEMPLATES,
      {
        id: 'full-level-template',
        name: 'Full Level Template',
        grantsCompanion: { effectiveLevelFormula: 'characterLevel', pickerFilter: 'full' },
      },
      {
        id: 'paladin-style-template',
        name: 'Paladin Style Template',
        grantsCompanion: { effectiveLevelFormula: 'characterLevel-4', pickerFilter: 'mountsOnly' },
      },
    ],
  };
});

// ---------------------------------------------------------------------------
// Fixtures — minimal stubs, not full character/entry objects. We only
// populate the fields CompanionService actually reads.
// ---------------------------------------------------------------------------

function makeClassEntry(
  overrides: Partial<ClassEntry> & Pick<ClassEntry, 'name' | 'level'>,
): ClassEntry {
  return {
    hitDieSize: 8,
    hitDieResults: [],
    skillRanks: 2,
    classSkills: [],
    babProgression: BABProgression.Medium,
    fortProgression: SaveProgression.Good,
    refProgression: SaveProgression.Poor,
    willProgression: SaveProgression.Good,
    classFeatures: [],
    ...overrides,
  };
}

function makeCharacter(classes: ClassEntry[]): Character {
  const totalLevel = classes.reduce((sum, c) => sum + c.level, 0);
  return {
    classes: {
      classes,
      totalLevel,
      baseAttackBonus: [0],
      baseFortSave: 0,
      baseRefSave: 0,
      baseWillSave: 0,
      favoredClassBonuses: [],
    },
  } as unknown as Character;
}

const classGrant = (className: string): CompanionGrant => ({
  type: 'class',
  classEntryId: `class-${className.toLowerCase()}-test`,
  className,
  classChoiceId: 'animal-companion',
});

const wolfBase: AnimalCompanionEntry = {
  id: 'wolf',
  name: 'Wolf',
  companionType: 'animal',
  bodyShape: 'quadrupedClaws',
  size: 'Medium',
  speed: '50 ft.',
  naturalArmor: 2,
  attacks: 'bite (1d6)',
  str: 13,
  dex: 15,
  con: 15,
  int: 2,
  wis: 12,
  cha: 6,
  specialQualities: ['low-light vision', 'scent'],
  progressionTiers: [
    {
      atDruidLevel: 4,
      sizeChange: 'Medium to Large',
      abilityScoreChanges: [
        { ability: 'STR', change: 8 },
        { ability: 'DEX', change: -2 },
        { ability: 'CON', change: 4 },
      ],
      naturalArmorChange: 2,
      attackUpdate: 'bite (1d8)',
      specialQualitiesGained: ['trip'],
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  verificationStatus: 'verified',
  visibility: 'global',
  rev: 1,
};

const makeInstance = (overrides: Partial<CompanionInstance> = {}): CompanionInstance => ({
  instanceId: 'inst-1',
  sourceEntryId: 'wolf',
  name: 'Shadow',
  grantedBy: classGrant('Druid'),
  effectiveProgressionLevel: 1,
  abilityScoreOverrides: {},
  hdAbilityIncreases: [],
  hp: { max: 0, current: 0, temp: 0, nonlethal: 0 },
  appliedTemplates: [],
  feats: [],
  tricks: [],
  skillRanks: {},
  equipment: {
    armor: [],
    weapons: [],
    magicItems: [],
    gear: [],
    equippedSlots: {},
  },
  notes: '',
  background: '',
  ...overrides,
});

// ---------------------------------------------------------------------------
// computeEffectiveLevel
// ---------------------------------------------------------------------------

describe('CompanionService.computeEffectiveLevel', () => {
  describe('class grants', () => {
    it('Druid: level 10 → 10', () => {
      const char = makeCharacter([makeClassEntry({ name: 'Druid', level: 10 })]);
      expect(CompanionService.computeEffectiveLevel(char, classGrant('Druid'))).toBe(10);
    });

    it('Hunter: level 8 → 8', () => {
      const char = makeCharacter([makeClassEntry({ name: 'Hunter', level: 8 })]);
      expect(CompanionService.computeEffectiveLevel(char, classGrant('Hunter'))).toBe(8);
    });

    it('Cavalier: level 12 → 12', () => {
      const char = makeCharacter([makeClassEntry({ name: 'Cavalier', level: 12 })]);
      expect(CompanionService.computeEffectiveLevel(char, classGrant('Cavalier'))).toBe(12);
    });

    it('Ranger: level 10 → 7 (level − 3)', () => {
      const char = makeCharacter([makeClassEntry({ name: 'Ranger', level: 10 })]);
      expect(CompanionService.computeEffectiveLevel(char, classGrant('Ranger'))).toBe(7);
    });

    it('Ranger: level 2 → 1 (clamped to min 1)', () => {
      const char = makeCharacter([makeClassEntry({ name: 'Ranger', level: 2 })]);
      expect(CompanionService.computeEffectiveLevel(char, classGrant('Ranger'))).toBe(1);
    });

    it('Ranger with Beastmaster archetype: same formula', () => {
      const char = makeCharacter([
        makeClassEntry({ name: 'Ranger', level: 10, archetype: ['Beastmaster'] }),
      ]);
      expect(CompanionService.computeEffectiveLevel(char, classGrant('Ranger'))).toBe(7);
    });

    it('Paladin: level 10 → 6 (level − 4)', () => {
      const char = makeCharacter([makeClassEntry({ name: 'Paladin', level: 10 })]);
      expect(CompanionService.computeEffectiveLevel(char, classGrant('Paladin'))).toBe(6);
    });

    it('Paladin: level 3 → 1 (clamped)', () => {
      const char = makeCharacter([makeClassEntry({ name: 'Paladin', level: 3 })]);
      expect(CompanionService.computeEffectiveLevel(char, classGrant('Paladin'))).toBe(1);
    });

    it('Inquisitor with Sacred Huntsmaster: level 8 → 8', () => {
      const char = makeCharacter([
        makeClassEntry({ name: 'Inquisitor', level: 8, archetype: ['Sacred Huntsmaster'] }),
      ]);
      expect(CompanionService.computeEffectiveLevel(char, classGrant('Inquisitor'))).toBe(8);
    });

    it('Inquisitor without Sacred Huntsmaster: → 0', () => {
      const char = makeCharacter([makeClassEntry({ name: 'Inquisitor', level: 8 })]);
      expect(CompanionService.computeEffectiveLevel(char, classGrant('Inquisitor'))).toBe(0);
    });

    it('Barbarian with Mad Dog: level 10 → 8 (level − 2)', () => {
      const char = makeCharacter([
        makeClassEntry({ name: 'Barbarian', level: 10, archetype: ['Mad Dog'] }),
      ]);
      expect(CompanionService.computeEffectiveLevel(char, classGrant('Barbarian'))).toBe(8);
    });

    it('Barbarian without Mad Dog: → 0', () => {
      const char = makeCharacter([makeClassEntry({ name: 'Barbarian', level: 10 })]);
      expect(CompanionService.computeEffectiveLevel(char, classGrant('Barbarian'))).toBe(0);
    });

    it('Barbarian Mad Dog level 2: → 1 (clamped)', () => {
      const char = makeCharacter([
        makeClassEntry({ name: 'Barbarian', level: 2, archetype: ['Mad Dog'] }),
      ]);
      expect(CompanionService.computeEffectiveLevel(char, classGrant('Barbarian'))).toBe(1);
    });

    it('class not found in character: → 0', () => {
      const char = makeCharacter([makeClassEntry({ name: 'Druid', level: 10 })]);
      expect(CompanionService.computeEffectiveLevel(char, classGrant('Ranger'))).toBe(0);
    });

    it('class not eligible (Fighter, Wizard, etc.): → 0', () => {
      const char = makeCharacter([makeClassEntry({ name: 'Fighter', level: 10 })]);
      expect(CompanionService.computeEffectiveLevel(char, classGrant('Fighter'))).toBe(0);
    });
  });

  describe('template grants', () => {
    it('unknown templateId: falls back to character total level', () => {
      const char = makeCharacter([
        makeClassEntry({ name: 'Fighter', level: 3 }),
        makeClassEntry({ name: 'Rogue', level: 4 }),
      ]);
      const grant: CompanionGrant = { type: 'template', templateId: 'does-not-exist' };
      expect(CompanionService.computeEffectiveLevel(char, grant)).toBe(7);
    });

    it('druid-creature (characterLevel-3): level 10 → 7', () => {
      const char = makeCharacter([makeClassEntry({ name: 'Fighter', level: 10 })]);
      const grant: CompanionGrant = { type: 'template', templateId: 'druid-creature' };
      expect(CompanionService.computeEffectiveLevel(char, grant)).toBe(7);
    });

    it('druid-creature: level 2 → 1 (clamped)', () => {
      const char = makeCharacter([makeClassEntry({ name: 'Fighter', level: 2 })]);
      const grant: CompanionGrant = { type: 'template', templateId: 'druid-creature' };
      expect(CompanionService.computeEffectiveLevel(char, grant)).toBe(1);
    });

    it('applies formula across multiclass HD', () => {
      const char = makeCharacter([
        makeClassEntry({ name: 'Fighter', level: 5 }),
        makeClassEntry({ name: 'Rogue', level: 5 }),
      ]);
      const grant: CompanionGrant = { type: 'template', templateId: 'druid-creature' };
      // totalLevel 10 − 3 = 7
      expect(CompanionService.computeEffectiveLevel(char, grant)).toBe(7);
    });

    it('characterLevel formula: level 8 → 8', () => {
      const char = makeCharacter([makeClassEntry({ name: 'Fighter', level: 8 })]);
      const grant: CompanionGrant = { type: 'template', templateId: 'full-level-template' };
      expect(CompanionService.computeEffectiveLevel(char, grant)).toBe(8);
    });

    it('characterLevel-4 formula: level 10 → 6', () => {
      const char = makeCharacter([makeClassEntry({ name: 'Fighter', level: 10 })]);
      const grant: CompanionGrant = { type: 'template', templateId: 'paladin-style-template' };
      expect(CompanionService.computeEffectiveLevel(char, grant)).toBe(6);
    });

    it('characterLevel-4 formula: level 3 → 1 (clamped)', () => {
      const char = makeCharacter([makeClassEntry({ name: 'Fighter', level: 3 })]);
      const grant: CompanionGrant = { type: 'template', templateId: 'paladin-style-template' };
      expect(CompanionService.computeEffectiveLevel(char, grant)).toBe(1);
    });
  });

  describe('reserved grant types', () => {
    it('feat grant: → 0 (not implemented)', () => {
      const char = makeCharacter([makeClassEntry({ name: 'Fighter', level: 10 })]);
      const grant: CompanionGrant = { type: 'feat', featId: 'leadership' };
      expect(CompanionService.computeEffectiveLevel(char, grant)).toBe(0);
    });

    it('cohort grant: → 0 (not implemented)', () => {
      const char = makeCharacter([makeClassEntry({ name: 'Fighter', level: 10 })]);
      const grant: CompanionGrant = { type: 'cohort', cohortId: 'coh-1' };
      expect(CompanionService.computeEffectiveLevel(char, grant)).toBe(0);
    });
  });
});

// ---------------------------------------------------------------------------
// getProgression / bonusTricks / featSlots
// ---------------------------------------------------------------------------

describe('CompanionService.getProgression', () => {
  it('returns the level 1 row', () => {
    expect(CompanionService.getProgression(1)).toEqual(AC_PROGRESSION[1]);
  });

  it('returns the level 20 row', () => {
    expect(CompanionService.getProgression(20)).toEqual(AC_PROGRESSION[20]);
  });

  it('clamps level 0 to level 1', () => {
    expect(CompanionService.getProgression(0)).toEqual(AC_PROGRESSION[1]);
  });

  it('returns level 25 entry directly (table now extends to 30)', () => {
    expect(CompanionService.getProgression(25)).toEqual(AC_PROGRESSION[25]);
  });

  it('clamps level > 30 to level 30', () => {
    expect(CompanionService.getProgression(35)).toEqual(AC_PROGRESSION[30]);
  });

  it('floors fractional levels', () => {
    expect(CompanionService.getProgression(4.9)).toEqual(AC_PROGRESSION[4]);
  });
});

describe('CompanionService.computeBonusTricks', () => {
  it.each([
    [1, 1],
    [3, 2],
    [6, 3],
    [9, 4],
    [15, 6],
    [20, 7],
  ])('level %i → %i bonus tricks', (level, expected) => {
    expect(CompanionService.computeBonusTricks(level)).toBe(expected);
  });
});

describe('CompanionService.computeFeatSlots', () => {
  it.each([
    [1, 1],
    [5, 3],
    [10, 5],
    [15, 6],
    [20, 8],
  ])('level %i → %i feat slots', (level, expected) => {
    expect(CompanionService.computeFeatSlots(level)).toBe(expected);
  });
});

// ---------------------------------------------------------------------------
// computeBaseStatBlock
// ---------------------------------------------------------------------------

describe('CompanionService.computeBaseStatBlock', () => {
  it('level 1: no progression tier applied, str/dex/natArmor from base + table', () => {
    const stats = CompanionService.computeBaseStatBlock(wolfBase, 1);
    expect(stats.size).toBe('Medium');
    expect(stats.str).toBe(13); // base 13 + 0 bonus
    expect(stats.dex).toBe(15); // base 15 + 0 bonus
    expect(stats.naturalArmor).toBe(2); // base 2 + 0 bonus
    expect(stats.hd).toBe(2);
    expect(stats.bab).toBe(1);
    expect(stats.fort).toBe(3);
    expect(stats.attacks).toBe('bite (1d6)');
    expect(stats.appliedTiers).toEqual([]);
  });

  it('level 3: no tier yet (wolf tier is atDruidLevel 4), but table bonuses apply', () => {
    const stats = CompanionService.computeBaseStatBlock(wolfBase, 3);
    expect(stats.size).toBe('Medium');
    expect(stats.str).toBe(14); // 13 + 1 strDex
    expect(stats.dex).toBe(16); // 15 + 1 strDex
    expect(stats.naturalArmor).toBe(4); // 2 + 2 from table
    expect(stats.appliedTiers).toEqual([]);
  });

  it('level 4: tier applies — size change, ability deltas, nat armor delta, attack update', () => {
    const stats = CompanionService.computeBaseStatBlock(wolfBase, 4);
    expect(stats.size).toBe('Large');
    // STR: 13 base + 8 tier + 1 strDex bonus = 22
    expect(stats.str).toBe(22);
    // DEX: 15 base - 2 tier + 1 strDex bonus = 14
    expect(stats.dex).toBe(14);
    // CON: 15 base + 4 tier = 19
    expect(stats.con).toBe(19);
    // Natural armor: 2 base + 2 tier + 2 table = 6
    expect(stats.naturalArmor).toBe(6);
    expect(stats.attacks).toBe('bite (1d8)');
    expect(stats.specialQualities).toContain('trip');
    expect(stats.appliedTiers).toEqual([4]);
  });

  it('level 10: table bonuses compound correctly', () => {
    const stats = CompanionService.computeBaseStatBlock(wolfBase, 10);
    // STR: 13 base + 8 tier + 3 strDex = 24
    expect(stats.str).toBe(24);
    // Nat armor: 2 base + 2 tier + 6 table = 10
    expect(stats.naturalArmor).toBe(10);
    expect(stats.hd).toBe(9);
    expect(stats.bab).toBe(6);
    expect(stats.appliedTiers).toEqual([4]);
  });

  it('skill ranks per HD: base INT 2 → clamped to 1/HD', () => {
    const stats = CompanionService.computeBaseStatBlock(wolfBase, 1);
    expect(stats.skillRanksPerHD).toBe(1);
    expect(stats.totalSkillRanks).toBe(2); // HD 2 × 1 = 2
  });

  it('skill ranks per HD: scaled INT 10 → 2/HD', () => {
    const smartWolf = { ...wolfBase, int: 10 };
    const stats = CompanionService.computeBaseStatBlock(smartWolf, 10);
    expect(stats.skillRanksPerHD).toBe(2); // 2 + (10-10)/2 = 2
    expect(stats.totalSkillRanks).toBe(18); // HD 9 × 2 = 18
  });

  it('two-tier entry (rare): both tiers apply at level ≥ 7', () => {
    const twoTier: AnimalCompanionEntry = {
      ...wolfBase,
      progressionTiers: [
        {
          atDruidLevel: 4,
          abilityScoreChanges: [{ ability: 'STR', change: 4 }],
          naturalArmorChange: 2,
        },
        {
          atDruidLevel: 7,
          sizeChange: 'Medium to Large',
          abilityScoreChanges: [{ ability: 'STR', change: 4 }],
          naturalArmorChange: 2,
        },
      ],
    };
    const stats = CompanionService.computeBaseStatBlock(twoTier, 7);
    // STR: 13 base + 4 + 4 tier + 2 strDex = 23
    expect(stats.str).toBe(23);
    expect(stats.size).toBe('Large');
    expect(stats.naturalArmor).toBe(2 + 2 + 2 + 4); // base + t1 + t2 + table = 10
    expect(stats.appliedTiers).toEqual([4, 7]);
  });

  it('unhandled ability (INT) in tier emits a console.warn and is ignored', () => {
    const warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    const intTier: AnimalCompanionEntry = {
      ...wolfBase,
      progressionTiers: [
        {
          atDruidLevel: 4,
          abilityScoreChanges: [{ ability: 'INT' as 'STR', change: 2 }],
        },
      ],
    };
    const stats = CompanionService.computeBaseStatBlock(intTier, 4);
    expect(warnSpy).toHaveBeenCalledWith(expect.stringContaining('INT'));
    // INT on the entry is 2; tier delta is silently ignored so base INT stays 2
    expect(stats.int).toBe(2);
    warnSpy.mockRestore();
  });
});

// ---------------------------------------------------------------------------
// effectiveLevelFromDraftClass
// ---------------------------------------------------------------------------

function makeDraft(name: string, level: number, archetypeName?: string): ClassEntry {
  return {
    id: 'draft-1',
    name,
    level,
    archetypeName,
    sourceSystem: 'pf1e',
    prereqOverride: false,
    classChoices: [],
  } as unknown as ClassEntry;
}

describe('effectiveLevelFromDraftClass', () => {
  it('undefined → 0', () => {
    expect(effectiveLevelFromDraftClass(undefined)).toBe(0);
  });

  it('Druid: returns full level', () => {
    expect(effectiveLevelFromDraftClass(makeDraft('Druid', 8))).toBe(8);
  });

  it('Hunter: returns full level', () => {
    expect(effectiveLevelFromDraftClass(makeDraft('Hunter', 5))).toBe(5);
  });

  it('Cavalier: returns full level', () => {
    expect(effectiveLevelFromDraftClass(makeDraft('Cavalier', 6))).toBe(6);
  });

  it('Ranger level 7: returns 4 (level − 3)', () => {
    expect(effectiveLevelFromDraftClass(makeDraft('Ranger', 7))).toBe(4);
  });

  it('Paladin level 6: returns 2 (level − 4)', () => {
    expect(effectiveLevelFromDraftClass(makeDraft('Paladin', 6))).toBe(2);
  });

  it('Paladin level 3: returns 1 (clamped)', () => {
    expect(effectiveLevelFromDraftClass(makeDraft('Paladin', 3))).toBe(1);
  });

  it('Inquisitor with Sacred Huntsmaster: returns full level', () => {
    expect(effectiveLevelFromDraftClass(makeDraft('Inquisitor', 9, 'Sacred Huntsmaster'))).toBe(9);
  });

  it('Inquisitor without archetype: returns 0', () => {
    expect(effectiveLevelFromDraftClass(makeDraft('Inquisitor', 9))).toBe(0);
  });

  it('Barbarian with Mad Dog: returns level − 2 (min 1)', () => {
    expect(effectiveLevelFromDraftClass(makeDraft('Barbarian', 8, 'Mad Dog'))).toBe(6);
  });

  it('Barbarian without Mad Dog: returns 0', () => {
    expect(effectiveLevelFromDraftClass(makeDraft('Barbarian', 8))).toBe(0);
  });

  it('Fighter (unsupported class): returns 0', () => {
    expect(effectiveLevelFromDraftClass(makeDraft('Fighter', 10))).toBe(0);
  });
});

// ---------------------------------------------------------------------------
// pickerFilterFromDraftClass
// ---------------------------------------------------------------------------

describe('pickerFilterFromDraftClass', () => {
  it('undefined → full', () => {
    expect(pickerFilterFromDraftClass(undefined)).toBe('full');
  });

  it('Cavalier → mountsOnly', () => {
    expect(pickerFilterFromDraftClass(makeDraft('Cavalier', 5))).toBe('mountsOnly');
  });

  it('Paladin → mountsOnly', () => {
    expect(pickerFilterFromDraftClass(makeDraft('Paladin', 5))).toBe('mountsOnly');
  });

  it('Druid → full', () => {
    expect(pickerFilterFromDraftClass(makeDraft('Druid', 5))).toBe('full');
  });
});

// ---------------------------------------------------------------------------
// computeAvailableSlots
// ---------------------------------------------------------------------------

describe('CompanionService.computeAvailableSlots', () => {
  it('no feats, no overrides: only automatic slots (wolf: armor + neck)', () => {
    const slots = CompanionService.computeAvailableSlots(wolfBase, makeInstance());
    expect(slots.map((s) => s.slot).sort()).toEqual(['armor', 'neck']);
  });

  it('Extra Item Slot (Belt) feat: unlocks belt (with saddle restriction on wolf)', () => {
    const instance = makeInstance({
      feats: [
        {
          featId: 'extra-item-slot',
          name: 'Extra Item Slot (Belt)',
          hdWhenTaken: 3,
          active: true,
          choices: { slot: 'belt' },
        },
      ],
    });
    const slots = CompanionService.computeAvailableSlots(wolfBase, instance);
    const belt = slots.find((s) => s.slot === 'belt');
    expect(belt).toBeDefined();
    expect(belt?.restriction).toBe('saddle');
  });

  it('inactive Extra Item Slot feat does NOT unlock the slot', () => {
    const instance = makeInstance({
      feats: [
        {
          featId: 'extra-item-slot',
          name: 'Extra Item Slot (Belt)',
          hdWhenTaken: 3,
          active: false,
          choices: { slot: 'belt' },
        },
      ],
    });
    const slots = CompanionService.computeAvailableSlots(wolfBase, instance);
    expect(slots.find((s) => s.slot === 'belt')).toBeUndefined();
  });

  it('slotOverrides.added: treats added slots as automatic', () => {
    const entryWithAdded: AnimalCompanionEntry = {
      ...wolfBase,
      slotOverrides: { added: ['hands'] },
    };
    const slots = CompanionService.computeAvailableSlots(entryWithAdded, makeInstance());
    const hands = slots.find((s) => s.slot === 'hands');
    expect(hands).toBeDefined();
    expect(hands?.automatic).toBe(true);
  });

  it('slotOverrides.removed: filters the slot out even if automatic', () => {
    const entryNoNeck: AnimalCompanionEntry = {
      ...wolfBase,
      slotOverrides: { removed: ['neck'] },
    };
    const slots = CompanionService.computeAvailableSlots(entryNoNeck, makeInstance());
    expect(slots.find((s) => s.slot === 'neck')).toBeUndefined();
    // armor should still be there
    expect(slots.find((s) => s.slot === 'armor')).toBeDefined();
  });

  it('unusual body shape: no automatic slots', () => {
    const spider: AnimalCompanionEntry = { ...wolfBase, id: 'giant-spider', bodyShape: 'unusual' };
    const slots = CompanionService.computeAvailableSlots(spider, makeInstance());
    expect(slots).toEqual([]);
  });
});

describe('computeCompanionEffectiveLevel', () => {
  const druid = makeClassEntry({ name: 'Druid', level: 10, id: 'druid-1' });

  it('returns base level when no other classes stack', () => {
    expect(computeCompanionEffectiveLevel(druid, [druid])).toBe(10);
  });

  it('adds levels from a class that advances via "all"', () => {
    const natureWarden = makeClassEntry({
      name: 'Nature Warden',
      level: 5,
      advancesCompanionOf: 'all',
    });
    expect(computeCompanionEffectiveLevel(druid, [druid, natureWarden])).toBe(15);
  });

  it('adds levels from a class that advances the specific granting class by id', () => {
    const stacker = makeClassEntry({ name: 'Stacker', level: 3, advancesCompanionOf: 'druid-1' });
    expect(computeCompanionEffectiveLevel(druid, [druid, stacker])).toBe(13);
  });

  it('does not double-count the granting class itself even when it has advancesCompanionOf', () => {
    const selfRef = makeClassEntry({
      name: 'Druid',
      level: 10,
      id: 'druid-1',
      advancesCompanionOf: 'all',
    });
    expect(computeCompanionEffectiveLevel(selfRef, [selfRef])).toBe(10);
  });

  it('ignores classes with no advancesCompanionOf set', () => {
    const fighter = makeClassEntry({ name: 'Fighter', level: 8 });
    expect(computeCompanionEffectiveLevel(druid, [druid, fighter])).toBe(10);
  });

  it('ignores classes that advance a different class id', () => {
    const wrongStacker = makeClassEntry({
      name: 'Stacker',
      level: 4,
      advancesCompanionOf: 'ranger-1',
    });
    expect(computeCompanionEffectiveLevel(druid, [druid, wrongStacker])).toBe(10);
  });

  it('accumulates multiple stacking classes', () => {
    const stacker1 = makeClassEntry({ name: 'Stacker1', level: 3, advancesCompanionOf: 'all' });
    const stacker2 = makeClassEntry({ name: 'Stacker2', level: 2, advancesCompanionOf: 'druid-1' });
    expect(computeCompanionEffectiveLevel(druid, [druid, stacker1, stacker2])).toBe(15);
  });

  it('falls back to name when granting class has no id', () => {
    const noId = makeClassEntry({ name: 'Druid', level: 10 });
    const stacksByName = makeClassEntry({ name: 'NW', level: 4, advancesCompanionOf: 'Druid' });
    expect(computeCompanionEffectiveLevel(noId, [noId, stacksByName])).toBe(14);
  });
});
