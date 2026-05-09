import { CharacterTimelineService } from '@services/CharacterTimelineService';
import type { Character } from '@/types';
import type { ClassEntry } from '@/types/classes';
import type { AppliedTemplate } from '@/types/templates';
import type { AbilityScore } from '@/types/abilities';
import { Alignment, Size, BonusType } from '@/types/base';
import { BABProgression, SaveProgression } from '@/types/base';
import type { ClassDataMap } from '@/utils/characterComputations';

// Mocked computation fns ignore the map arg, so an empty Map is sufficient.
const EMPTY_MAP: ClassDataMap = new Map();

// Mock class data so tests don't depend on the full class catalog
jest.mock('@/utils/characterComputations', () => ({
  computeTotalBAB: jest.fn((classes: { name: string; level: number }[]) => {
    // Fighter = Full BAB (1.0), Wizard = Low BAB (0.5), Rogue = Medium BAB (0.75)
    return classes.reduce((sum, c) => {
      if (c.name === 'Fighter') return sum + c.level;
      if (c.name === 'Wizard') return sum + Math.floor(c.level * 0.5);
      return sum + Math.floor(c.level * 0.75); // default (Rogue, etc.)
    }, 0);
  }),
  computeTotalBABFractional: jest.fn((classes: { name: string; level: number }[]) => {
    // Fractional: sum raw fractions, floor once
    const raw = classes.reduce((sum, c) => {
      if (c.name === 'Fighter') return sum + c.level;
      if (c.name === 'Wizard') return sum + c.level * 0.5;
      return sum + c.level * 0.75; // default (Rogue, etc.)
    }, 0);
    return Math.floor(raw);
  }),
  // Standard saves — +2 base bonus applied once per character if any class has Good progression.
  // Fighter/Cleric: Good Fort; Cleric/Wizard: Good Will; nobody: Good Ref (in this mock).
  computeBaseFort: jest.fn((classes: { name: string; level: number }[]) => {
    const hasGood = classes.some((c) => c.name === 'Fighter' || c.name === 'Cleric');
    const prog = classes.reduce((sum, c) => {
      if (c.name === 'Fighter' || c.name === 'Cleric') return sum + Math.floor(c.level / 2);
      return sum + Math.floor(c.level / 3);
    }, 0);
    return (hasGood ? 2 : 0) + prog;
  }),
  computeBaseRef: jest.fn(() => 0),
  computeBaseWill: jest.fn((classes: { name: string; level: number }[]) => {
    const hasGood = classes.some((c) => c.name === 'Cleric' || c.name === 'Wizard');
    const prog = classes.reduce((sum, c) => {
      if (c.name === 'Cleric' || c.name === 'Wizard') return sum + Math.floor(c.level / 2);
      return sum + Math.floor(c.level / 3);
    }, 0);
    return (hasGood ? 2 : 0) + prog;
  }),
  computeBaseFortFractional: jest.fn((classes: { name: string; level: number }[]) => {
    const hasGood = classes.some((c) => c.name === 'Fighter' || c.name === 'Cleric');
    const raw = classes.reduce((sum, c) => {
      if (c.name === 'Fighter' || c.name === 'Cleric') return sum + c.level / 2;
      return sum + c.level / 3;
    }, 0);
    return (hasGood ? 2 : 0) + Math.floor(raw);
  }),
  computeBaseRefFractional: jest.fn(() => 0),
  computeBaseWillFractional: jest.fn((classes: { name: string; level: number }[]) => {
    const hasGood = classes.some((c) => c.name === 'Cleric' || c.name === 'Wizard');
    const raw = classes.reduce((sum, c) => {
      if (c.name === 'Cleric' || c.name === 'Wizard') return sum + c.level / 2;
      return sum + c.level / 3;
    }, 0);
    return (hasGood ? 2 : 0) + Math.floor(raw);
  }),
  lookupClassData: jest.fn((className: string) => {
    const data: Record<
      string,
      {
        classFeatures: { name: string; level: number; description: string }[];
        spellcasting: { type: string };
      }
    > = {
      Fighter: {
        classFeatures: [
          { name: 'Bonus Feat', level: 1, description: '' },
          { name: 'Bravery', level: 2, description: '' },
          { name: 'Armor Training 1', level: 3, description: '' },
        ],
        spellcasting: { type: 'None' },
      },
      Wizard: {
        classFeatures: [
          { name: 'Arcane Bond', level: 1, description: '' },
          { name: 'Arcane School', level: 1, description: '' },
        ],
        spellcasting: { type: 'Arcane' },
      },
      Cleric: {
        classFeatures: [
          { name: 'Aura', level: 1, description: '' },
          { name: 'Channel Energy', level: 1, description: '' },
        ],
        spellcasting: { type: 'Divine' },
      },
    };
    return data[className] ?? null;
  }),
}));

// ---- Helpers ----

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

function makeClass(name: string, level: number, id = name): ClassEntry {
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
  };
}

function blankCharacter(): Character {
  return {
    info: {
      id: 'test-id',
      name: 'Test Character',
      player: 'Test Player',
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
      str: makeAbilityScore(16),
      dex: makeAbilityScore(12),
      con: makeAbilityScore(14),
      int: makeAbilityScore(10),
      wis: makeAbilityScore(10),
      cha: makeAbilityScore(8),
    },
    classes: {
      classes: [],
      totalLevel: 0,
      baseAttackBonus: [0],
      baseFortSave: 0,
      baseRefSave: 0,
      baseWillSave: 0,
      favoredClassBonuses: [],
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    combatStats: {} as any,

    skills: {
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
      spellcraft: {
        ranks: 3,
        isClassSkill: false,
        ability: 'int',
        abilityMod: 0,
        classSkillBonus: 0,
        racial: 0,
        trait: 0,
        item: 0,
        misc: 0,
        armorPenalty: 0,
        total: 3,
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any,
    feats: { feats: [], totalFeats: 0, bonusFeats: 0 },
    traits: { traits: [], maxTraits: 2 },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    equipment: {} as any,
    spellcasting: {
      pools: [],
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any,

    initiating: {
      pools: [],
      disciplines: [],
      knownManeuvers: [],
      readiedManeuvers: [],
      equippedStances: [],
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

function laTemplate(
  la: number,
  acquisitionType: 'inherited' | 'acquired' = 'inherited',
  acquiredAtCharacterLevel?: number,
): AppliedTemplate {
  return {
    templateId: 'la-template',
    name: 'LA Template',
    appliedAs: 'la',
    la,
    acquisitionType,
    acquiredAtCharacterLevel,
    paidTiers: [],
    sourceId: 'la-template',
    sourceRev: 0,
    isFreeGrant: false,
  };
}

// ---- Tests ----

describe('CharacterTimelineService', () => {
  describe('buildTimeline', () => {
    it('single class: correct number of checkpoints', () => {
      const character = blankCharacter();
      character.classes.classes = [makeClass('Fighter', 5, '1')];

      const timeline = CharacterTimelineService.buildTimeline(character, undefined, EMPTY_MAP);

      expect(timeline.checkpoints).toHaveLength(5);
      expect(timeline.finalECL).toBe(5);
      expect(timeline.totalHD).toBe(5);
      expect(timeline.totalLA).toBe(0);
    });

    it('single class: all decisions are class type', () => {
      const character = blankCharacter();
      character.classes.classes = [makeClass('Fighter', 3, '1')];

      const timeline = CharacterTimelineService.buildTimeline(character, undefined, EMPTY_MAP);

      expect(timeline.checkpoints.every((c) => c.decision.type === 'class')).toBe(true);
    });

    it('single class: class levels increment correctly', () => {
      const character = blankCharacter();
      character.classes.classes = [makeClass('Fighter', 3, '1')];

      const timeline = CharacterTimelineService.buildTimeline(character, undefined, EMPTY_MAP);

      expect((timeline.checkpoints[0].decision as { classLevel: number }).classLevel).toBe(1);
      expect((timeline.checkpoints[1].decision as { classLevel: number }).classLevel).toBe(2);
      expect((timeline.checkpoints[2].decision as { classLevel: number }).classLevel).toBe(3);
    });

    it('multiclass: decisions expand in class order', () => {
      const character = blankCharacter();
      character.classes.classes = [makeClass('Fighter', 3, '1'), makeClass('Wizard', 2, '2')];

      const timeline = CharacterTimelineService.buildTimeline(character, undefined, EMPTY_MAP);

      expect(timeline.checkpoints).toHaveLength(5);
      expect(timeline.totalHD).toBe(5);
      expect((timeline.checkpoints[0].decision as { className: string }).className).toBe('Fighter');
      expect((timeline.checkpoints[3].decision as { className: string }).className).toBe('Wizard');
    });

    it('multiclass: BAB accumulates correctly across classes', () => {
      const character = blankCharacter();
      character.classes.classes = [makeClass('Fighter', 5, '1'), makeClass('Wizard', 3, '2')];

      const timeline = CharacterTimelineService.buildTimeline(character, undefined, EMPTY_MAP);

      // After Fighter 5 (ECL 5): BAB = 5 (full)
      const afterFighter5 = timeline.checkpoints[4].snapshot;
      expect(afterFighter5.classes.baseAttackBonus[0]).toBe(5);

      // After Wizard 3 (ECL 8): BAB = 5 + 1 = 6 (5 fighter + floor(3*0.5)=1 wizard)
      const afterWizard3 = timeline.checkpoints[7].snapshot;
      expect(afterWizard3.classes.baseAttackBonus[0]).toBe(6);
    });

    it('inherited LA template: first checkpoints are la_payment, HD stays 0', () => {
      const character = blankCharacter();
      character.appliedTemplates = [
        {
          templateId: 'half-dragon',
          name: 'Half-Dragon',
          appliedAs: 'la',
          la: 3,
          acquisitionType: 'inherited',
          paidTiers: [],
          sourceId: 'half-dragon',
          sourceRev: 0,
          isFreeGrant: false,
        },
      ];
      character.classes.classes = [makeClass('Fighter', 2, '1')];

      const timeline = CharacterTimelineService.buildTimeline(character, undefined, EMPTY_MAP);

      expect(timeline.checkpoints).toHaveLength(5);
      expect(timeline.totalLA).toBe(3);
      expect(timeline.totalHD).toBe(2);

      // First 3 checkpoints are LA payments
      expect(timeline.checkpoints[0].decision.type).toBe('la_payment');
      expect(timeline.checkpoints[1].decision.type).toBe('la_payment');
      expect(timeline.checkpoints[2].decision.type).toBe('la_payment');
      expect(timeline.checkpoints[0].hd).toBe(0);

      // Next 2 are class levels
      expect(timeline.checkpoints[3].decision.type).toBe('class');
      expect(timeline.checkpoints[3].hd).toBe(1);
    });

    it('free grant templates are ignored in LA computation', () => {
      const character = blankCharacter();
      character.appliedTemplates = [
        {
          templateId: 'celestial',
          name: 'Celestial Creature',
          appliedAs: 'cr',
          cr: 1,
          acquisitionType: 'either',
          paidTiers: [],
          sourceId: 'celestial',
          sourceRev: 0,
          isFreeGrant: true,
        },
      ];
      character.classes.classes = [makeClass('Fighter', 2, '1')];

      const timeline = CharacterTimelineService.buildTimeline(character, undefined, EMPTY_MAP);

      expect(timeline.totalLA).toBe(0);
      expect(timeline.checkpoints).toHaveLength(2);
    });
  });

  describe('snapshot content', () => {
    it('ability scores reflect base values', () => {
      const character = blankCharacter();
      character.classes.classes = [makeClass('Fighter', 1, '1')];

      const timeline = CharacterTimelineService.buildTimeline(character, undefined, EMPTY_MAP);
      const snapshot = timeline.checkpoints[0].snapshot;

      expect(snapshot.abilityScores.str.total).toBe(16);
      expect(snapshot.abilityScores.dex.total).toBe(12);
      expect(snapshot.abilityScores.con.total).toBe(14);
    });

    it('ability scores apply level increments only up to current HD', () => {
      const character = blankCharacter();
      character.classes.classes = [makeClass('Fighter', 8, '1')];
      character.levelIncrementSlots = [
        { atHD: 4, ability: 'str' },
        { atHD: 8, ability: 'str' },
      ];

      const timeline = CharacterTimelineService.buildTimeline(character, undefined, EMPTY_MAP);

      // At HD 3 — no increments applied yet
      const at3 = timeline.checkpoints[2].snapshot;
      expect(at3.abilityScores.str.total).toBe(16);

      // At HD 4 — one increment applied
      const at4 = timeline.checkpoints[3].snapshot;
      expect(at4.abilityScores.str.total).toBe(17);

      // At HD 8 — two increments applied
      const at8 = timeline.checkpoints[7].snapshot;
      expect(at8.abilityScores.str.total).toBe(18);
    });

    it('enhancement bonus from gear is included in ability score snapshot total', () => {
      const character = blankCharacter();
      character.classes.classes = [makeClass('Fighter', 1, '1')];
      character.abilityScores.str.bonuses.enhancement.push({
        type: BonusType.ENHANCEMENT,
        value: 4,
        source: 'Belt of Giant Strength +4',
        active: true,
      });

      const timeline = CharacterTimelineService.buildTimeline(character, undefined, EMPTY_MAP);
      const snapshot = timeline.checkpoints[0].snapshot;

      // str base=16, enhancement=4 → total=20
      expect(snapshot.abilityScores.str.total).toBe(20);
    });

    it('class features filtered to current class level', () => {
      const character = blankCharacter();
      character.classes.classes = [makeClass('Fighter', 3, '1')];

      const timeline = CharacterTimelineService.buildTimeline(character, undefined, EMPTY_MAP);

      // At Fighter 1: only level-1 features
      const at1 = timeline.checkpoints[0].snapshot.classes.classes[0];
      expect(at1.classFeatures.every((f) => f.level <= 1)).toBe(true);

      // At Fighter 3: all features up to level 3
      const at3 = timeline.checkpoints[2].snapshot.classes.classes[0];
      expect(at3.classFeatures.some((f) => f.name === 'Armor Training 1')).toBe(true);
    });

    it('feats filtered by grantedAtLevel <= ecl', () => {
      const character = blankCharacter();
      character.classes.classes = [makeClass('Fighter', 5, '1')];
      character.feats.feats = [
        {
          featId: 'power-attack',
          name: 'Power Attack',
          source: 'level_1',
          grantedAtLevel: 1,
          active: true,
          choices: {},
          prereqOverride: false,
        },
        {
          featId: 'cleave',
          name: 'Cleave',
          source: 'level_3',
          grantedAtLevel: 3,
          active: true,
          choices: {},
          prereqOverride: false,
        },
        // No entry for an unassigned slot at level 5
      ];

      const timeline = CharacterTimelineService.buildTimeline(character, undefined, EMPTY_MAP);

      // At ECL 1: only feat from level 1
      const at1 = timeline.checkpoints[0].snapshot.feats.feats;
      expect(at1).toHaveLength(1);
      expect(at1[0].featId).toBe('power-attack');

      // At ECL 3: feats from levels 1 and 3
      const at3 = timeline.checkpoints[2].snapshot.feats.feats;
      expect(at3).toHaveLength(2);

      // At ECL 5: still 2 (no third feat assigned)
      const at5 = timeline.checkpoints[4].snapshot.feats.feats;
      expect(at5).toHaveLength(2);
    });

    it('skills capped at currentHD — best-case assumption', () => {
      const character = blankCharacter();
      // character has perception: 5, spellcraft: 3 (from blankCharacter)
      character.classes.classes = [makeClass('Fighter', 5, '1')];

      const timeline = CharacterTimelineService.buildTimeline(character, undefined, EMPTY_MAP);

      // At HD 1: max possible ranks in any skill is 1
      expect(timeline.checkpoints[0].snapshot.skills['perception']?.ranks).toBe(1);
      expect(timeline.checkpoints[0].snapshot.skills['spellcraft']?.ranks).toBe(1);

      // At HD 3: spellcraft (total 3) fully available; perception (total 5) capped at 3
      expect(timeline.checkpoints[2].snapshot.skills['perception']?.ranks).toBe(3);
      expect(timeline.checkpoints[2].snapshot.skills['spellcraft']?.ranks).toBe(3);

      // At HD 5: perception (total 5) fully available
      expect(timeline.checkpoints[4].snapshot.skills['perception']?.ranks).toBe(5);
      expect(timeline.checkpoints[4].snapshot.skills['spellcraft']?.ranks).toBe(3);
    });

    it('race name passed from character', () => {
      const character = blankCharacter();
      character.info.race.name = 'Elf';
      character.classes.classes = [makeClass('Fighter', 1, '1')];

      const snapshot = CharacterTimelineService.buildTimeline(character, undefined, EMPTY_MAP)
        .checkpoints[0].snapshot;
      expect(snapshot.info.race.name).toBe('Elf');
    });

    it('spellcasting pool created for casting classes', () => {
      const character = blankCharacter();
      character.classes.classes = [makeClass('Fighter', 3, '1'), makeClass('Wizard', 2, '2')];

      const timeline = CharacterTimelineService.buildTimeline(character, undefined, EMPTY_MAP);

      // After Fighter 3 (ECL 3): no spellcasting pools
      const at3 = timeline.checkpoints[2].snapshot.spellcasting.pools;
      expect(at3).toHaveLength(0);

      // After Wizard 1 (ECL 4): one pool, CL 1
      const at4 = timeline.checkpoints[3].snapshot.spellcasting.pools;
      expect(at4).toHaveLength(1);
      expect(at4[0].baseCasterLevel).toBe(1);
      expect(at4[0].baseClass).toBe('Wizard');

      // After Wizard 2 (ECL 5): CL 2
      const at5 = timeline.checkpoints[4].snapshot.spellcasting.pools;
      expect(at5[0].baseCasterLevel).toBe(2);
    });

    it('totalLevel reflects HD only, not ECL', () => {
      const character = blankCharacter();
      character.appliedTemplates = [
        {
          templateId: 'lycanthrope',
          name: 'Lycanthrope',
          appliedAs: 'la',
          la: 2,
          acquisitionType: 'inherited',
          paidTiers: [],
          sourceId: 'lycanthrope',
          sourceRev: 0,
          isFreeGrant: false,
        },
      ];
      character.classes.classes = [makeClass('Fighter', 3, '1')];

      const timeline = CharacterTimelineService.buildTimeline(character, undefined, EMPTY_MAP);

      // ECL 2 (LA payment 2): HD still 0
      expect(timeline.checkpoints[1].hd).toBe(0);
      expect(timeline.checkpoints[1].snapshot.classes.totalLevel).toBe(0);

      // ECL 3 (Fighter 1): HD now 1
      expect(timeline.checkpoints[2].hd).toBe(1);
      expect(timeline.checkpoints[2].snapshot.classes.totalLevel).toBe(1);
    });
  });

  describe('snapshotAtECL', () => {
    it('returns correct snapshot at a given ECL', () => {
      const character = blankCharacter();
      character.classes.classes = [makeClass('Fighter', 5, '1')];

      const snapshot = CharacterTimelineService.snapshotAtECL(character, 3, undefined, EMPTY_MAP);
      expect(snapshot).not.toBeNull();
      expect(snapshot?.classes.totalLevel).toBe(3);
    });

    it('returns null for out-of-range ECL', () => {
      const character = blankCharacter();
      character.classes.classes = [makeClass('Fighter', 3, '1')];

      expect(
        CharacterTimelineService.snapshotAtECL(character, 99, undefined, EMPTY_MAP),
      ).toBeNull();
    });
  });

  describe('snapshotBeforeECL', () => {
    it('returns state at ECL-1', () => {
      const character = blankCharacter();
      character.classes.classes = [makeClass('Fighter', 5, '1')];

      const snapshot = CharacterTimelineService.snapshotBeforeECL(
        character,
        4,
        undefined,
        EMPTY_MAP,
      );
      // ECL-1 = 3, so Fighter 3 → totalLevel 3
      expect(snapshot?.classes.totalLevel).toBe(3);
    });

    it('returns null when ECL <= 1', () => {
      const character = blankCharacter();
      character.classes.classes = [makeClass('Fighter', 3, '1')];

      expect(
        CharacterTimelineService.snapshotBeforeECL(character, 1, undefined, EMPTY_MAP),
      ).toBeNull();
    });
  });

  describe('acquiredAtCharacterLevel ordering', () => {
    it('acquired LA with acquiredAtCharacterLevel is inserted at the specified position', () => {
      const character = blankCharacter();
      character.classes.classes = [makeClass('Fighter', 4, '1')];
      character.appliedTemplates = [
        {
          templateId: 'werewolf',
          name: 'Werewolf',
          appliedAs: 'la',
          la: 1,
          acquisitionType: 'acquired',
          acquiredAtCharacterLevel: 3,
          paidTiers: [],
          sourceId: 'werewolf',
          sourceRev: 0,
          isFreeGrant: false,
        },
      ];

      const timeline = CharacterTimelineService.buildTimeline(character, undefined, EMPTY_MAP);

      // Sequence: Fighter1, Fighter2, AcqLA(ECL3), Fighter3, Fighter4
      expect(timeline.checkpoints).toHaveLength(5);
      expect(timeline.checkpoints[0].decision).toMatchObject({
        type: 'class',
        className: 'Fighter',
        classLevel: 1,
      });
      expect(timeline.checkpoints[1].decision).toMatchObject({
        type: 'class',
        className: 'Fighter',
        classLevel: 2,
      });
      expect(timeline.checkpoints[2].decision).toMatchObject({
        type: 'la_payment',
        templateName: 'Werewolf',
      });
      expect(timeline.checkpoints[3].decision).toMatchObject({
        type: 'class',
        className: 'Fighter',
        classLevel: 3,
      });
      expect(timeline.checkpoints[4].decision).toMatchObject({
        type: 'class',
        className: 'Fighter',
        classLevel: 4,
      });
    });

    it('acquired LA without acquiredAtCharacterLevel appended at end', () => {
      const character = blankCharacter();
      character.classes.classes = [makeClass('Fighter', 3, '1')];
      character.appliedTemplates = [
        {
          templateId: 'werewolf',
          name: 'Werewolf',
          appliedAs: 'la',
          la: 1,
          acquisitionType: 'acquired',
          paidTiers: [],
          sourceId: 'werewolf',
          sourceRev: 0,
          isFreeGrant: false,
        },
      ];

      const timeline = CharacterTimelineService.buildTimeline(character, undefined, EMPTY_MAP);

      // Sequence: Fighter1, Fighter2, Fighter3, AcqLA
      expect(timeline.checkpoints).toHaveLength(4);
      expect(timeline.checkpoints[3].decision.type).toBe('la_payment');
    });

    it('multi-LA acquired template with acquiredAtCharacterLevel places payments consecutively', () => {
      const character = blankCharacter();
      character.classes.classes = [makeClass('Fighter', 5, '1')];
      character.appliedTemplates = [
        {
          templateId: 'half-dragon',
          name: 'Half-Dragon',
          appliedAs: 'la',
          la: 2,
          acquisitionType: 'acquired',
          acquiredAtCharacterLevel: 3,
          paidTiers: [],
          sourceId: 'half-dragon',
          sourceRev: 0,
          isFreeGrant: false,
        },
      ];

      const timeline = CharacterTimelineService.buildTimeline(character, undefined, EMPTY_MAP);

      // Sequence: F1, F2, LA(ECL3), LA(ECL4), F3, F4, F5
      expect(timeline.checkpoints).toHaveLength(7);
      expect(timeline.checkpoints[2].decision.type).toBe('la_payment');
      expect(timeline.checkpoints[3].decision.type).toBe('la_payment');
      expect(timeline.checkpoints[4].decision).toMatchObject({ type: 'class', classLevel: 3 });
    });
  });

  describe('fractional BAB', () => {
    it('standard BAB: each class contribution floored individually', () => {
      const character = blankCharacter();
      // Wizard 1 standard: floor(1 * 0.5) = 0
      character.classes.classes = [makeClass('Wizard', 1, '1')];

      const timeline = CharacterTimelineService.buildTimeline(character, undefined, EMPTY_MAP);
      expect(timeline.checkpoints[0].snapshot.classes.baseAttackBonus[0]).toBe(0);
    });

    it('fractional BAB: sum fractions then floor, giving higher BAB for multiclass', () => {
      const character = blankCharacter();
      // Rogue1/Wizard1: standard 0+0=0; fractional floor(0.75+0.5)=1
      character.classes.classes = [makeClass('Rogue', 1, '1'), makeClass('Wizard', 1, '2')];

      const mockRuleset = { optionalRules: { fractionalBABSaves: true } } as Parameters<
        typeof CharacterTimelineService.buildTimeline
      >[1];

      const standardTimeline = CharacterTimelineService.buildTimeline(
        character,
        undefined,
        EMPTY_MAP,
      );
      const fractionalTimeline = CharacterTimelineService.buildTimeline(
        character,
        mockRuleset,
        EMPTY_MAP,
      );

      const finalStandard = standardTimeline.checkpoints[1].snapshot.classes.baseAttackBonus[0];
      const finalFractional = fractionalTimeline.checkpoints[1].snapshot.classes.baseAttackBonus[0];

      // Standard: floor(0.75) + floor(0.5) = 0 + 0 = 0
      expect(finalStandard).toBe(0);
      // Fractional: floor(0.75 + 0.5) = floor(1.25) = 1
      expect(finalFractional).toBe(1);
    });
  });

  describe('saves in snapshot', () => {
    it('snapshot includes baseFortitude, baseReflex, baseWill', () => {
      const character = blankCharacter();
      character.classes.classes = [makeClass('Fighter', 2, '1')];

      const timeline = CharacterTimelineService.buildTimeline(character, undefined, EMPTY_MAP);
      const snapshot = timeline.checkpoints[1].snapshot; // after Fighter 2

      // Fighter has Good Fort: 2 + floor(2/2) = 3; Poor Ref: floor(2/3) = 0; Poor Will: floor(2/3) = 0
      expect(snapshot.classes.baseFortitude).toBe(3);
      expect(snapshot.classes.baseReflex).toBe(0);
      expect(snapshot.classes.baseWill).toBe(0);
    });

    it('fractional saves: sum fractions then floor', () => {
      const character = blankCharacter();
      // Cleric1/Fighter1: Fort standard = 2+floor(1/2)+floor(1/2) = 2
      // Fractional: 2 + floor(0.5+0.5) = 3 — diverges!
      character.classes.classes = [makeClass('Cleric', 1, '1'), makeClass('Fighter', 1, '2')];

      const mockRuleset = { optionalRules: { fractionalBABSaves: true } } as Parameters<
        typeof CharacterTimelineService.buildTimeline
      >[1];

      const standardTimeline = CharacterTimelineService.buildTimeline(
        character,
        undefined,
        EMPTY_MAP,
      );
      const fractionalTimeline = CharacterTimelineService.buildTimeline(
        character,
        mockRuleset,
        EMPTY_MAP,
      );

      const idx = standardTimeline.checkpoints.length - 1;
      // Standard Fort: 2+floor(1/2)+floor(1/2) = 2
      expect(standardTimeline.checkpoints[idx].snapshot.classes.baseFortitude).toBe(2);
      // Fractional Fort: 2 + floor(0.5+0.5) = 3
      expect(fractionalTimeline.checkpoints[idx].snapshot.classes.baseFortitude).toBe(3);
    });
  });
});
