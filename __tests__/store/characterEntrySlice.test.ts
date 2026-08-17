import { BonusType } from '@/types/base';
import reducer, {
  loadCharacter,
  resetDraft,
  setActiveTab,
  markDirty,
  markSaved,
  setValidationWarnings,
  acknowledgeWarning,
  clearValidation,
  setName,
  setPlayer,
  setRace,
  setAlignment,
  setDeity,
  setGender,
  setAge,
  setHeight,
  setWeight,
  setHair,
  setEyes,
  setSkin,
  setBackground,
  setPortrait,
  setAbilityBase,
  setAbilityInherent,
  setLevelIncrementAbility,
  setLevelIncrementSlots,
  addClass,
  removeClass,
  updateClassLevel,
  updateClassArchetype,
  updateClassSpellcastingAdvancement,
  upsertClassChoice,
  toggleClassPrereqOverride,
  addCompanion,
  removeCompanion,
  renameCompanion,
  updateCompanionEffectiveLevel,
  removeCompanionsGrantedByClass,
  setCompanionAbilityOverride,
  setCompanionHP,
  swapCompanionForm,
  setCompanionNotes,
  addCompanionFeat,
  removeCompanionFeatAt,
  toggleCompanionTrick,
  setCompanionSkillRank,
  setCompanionBackground,
  addCompanionTemplate,
  removeCompanionTemplateAt,
  updateCompanionTemplateAt,
  equipCompanionMagicItem,
  unequipCompanionMagicItem,
  toggleFavoredClass,
  setFavoredClassBonuses,
  setRacialFlexChoice,
  syncFeatSlots,
  reorderClasses,
  addTemplate,
  removeTemplate,
  updateTemplate,
  reorderTemplates,
  setTemplateAcquiredAtECL,
  resolveTemplateChoice,
  setCombatField,
  setSkillEntry,
  removeSkillEntry,
  addTrait,
  removeTrait,
  addFlaw,
  removeFlaw,
  addFeatSlot,
  removeFeatSlot,
  assignFeat,
  unassignFeat,
  toggleFeatPrereqOverride,
  addSpellcastingPool,
  removeSpellcastingPool,
  updatePoolCastingAbility,
  setSpellsPerDayMisc,
  addEquipment,
  removeEquipment,
  updateEquipment,
  assignEquipmentSlot,
  unassignEquipmentSlot,
  assignEquipmentContainer,
  reequipFromContainer,
  setCharacterNotes,
  setSaving,
  setSaveError,
  applyComputedStats,
  addOtherBonus,
  removeOtherBonus,
  setNotes,
  setCompanionHDAbilityIncrease,
  addEidolon,
  removeEidolon,
  renameEidolon,
  setEidolonBaseForm,
  setEidolonSubtype,
  addSelectedEvolution,
  removeSelectedEvolution,
  updateEvolutionMetadata,
  setEidolonPoolOverride,
  setBroodmasterShared,
  removeBroodmasterShared,
  setAspectDivert,
  addSummonerAspectEvolution,
  removeSummonerAspectEvolution,
  initLevelOrder,
  swapLevelSlot,
  splitClass,
  upsertRacialChoice,
  toggleAlternateRacialTrait,
  type EntryValidationWarning,
} from '@store/slices/characterEntrySlice';
import { Alignment } from '@/types/base';
import type { RacialChoice } from '@/types/racialChoices';
import { BABProgression, SaveProgression } from '@/types/base';
import type { ClassEntry } from '@/types/classes';
import type { AppliedTemplate } from '@/types/templates';
import type { TemplateDefinition } from '@/data/templates/types';
import type { CharacterTrait } from '@/types/traits';
import type { CharacterFlaw } from '@/types/flaws';
import type { SpellcastingPool } from '@/types/spells';
import type { EditorEquipmentItem } from '@/types/character';
import type { LevelIncrementSlot } from '@/types/character';
import type { Effect } from '@/types/base';
import type { Character } from '@/types';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function makeInitialState() {
  return reducer(undefined, { type: '@@INIT' });
}

function makeWarning(
  id: string,
  section: EntryValidationWarning['section'] = 'identity',
): EntryValidationWarning {
  return { id, section, message: `Warning ${id}`, isAcknowledged: false };
}

function makeClass(id: string, overrides: Partial<ClassEntry> = {}): ClassEntry {
  return {
    name: overrides.name ?? 'Fighter',
    level: 1,
    hitDieSize: 10,
    hitDieResults: [10],
    skillRanks: 2,
    classSkills: ['Climb', 'Swim'],
    babProgression: BABProgression.Full,
    fortProgression: SaveProgression.Good,
    refProgression: SaveProgression.Poor,
    willProgression: SaveProgression.Poor,
    classFeatures: [],
    id,
    prereqOverride: false,
    classChoices: [],
    ...overrides,
  };
}

function makeTemplate(id: string, overrides: Partial<AppliedTemplate> = {}): AppliedTemplate {
  return {
    id,
    templateId: id,
    name: overrides.name ?? 'Half-Dragon',
    appliedAs: 'la',
    la: 1,
    acquisitionType: 'either',
    paidTiers: [],
    sourceId: 'templates',
    sourceRev: 1,
    isFreeGrant: false,
    ...overrides,
  };
}

function makeFeatSlotInput(id: string, availableAtLevel = 1) {
  return {
    id,
    source: 'level' as const,
    availableAt: `Lvl ${availableAtLevel}`,
    availableAtLevel,
  };
}

function makeTrait(id: string): CharacterTrait {
  return {
    id,
    traitId: id,
    name: 'Reactionary',
    category: 'Combat' as CharacterTrait['category'],
    choices: {},
    description: '+2 trait bonus on Initiative checks.',
  };
}

function makePool(id: string, baseClassEntryId: string = 'class-test'): SpellcastingPool {
  return {
    id,
    baseClassEntryId,
    baseClass: 'wizard',
    castingType: 'arcane',
    spellAbility: 'INT',
    contributors: [],
    effectiveSpellcastingLevel: 1,
    baseCasterLevel: 1,
    clBonuses: [],
    spellsPerDay: {
      base: new Array(10).fill(0),
      bonus: new Array(10).fill(0),
      misc: new Array(10).fill(0),
      total: new Array(10).fill(0),
      used: new Array(10).fill(0),
    },
    spellDC: { base: 10, miscBonus: 0, byLevel: new Array(10).fill(10) },
    spellFailure: 0,
    concentration: { abilityMod: 0, casterLevel: 1, misc: 0, total: 1 },
  } as SpellcastingPool;
}

function makeEquipmentItem(
  id: string,
  overrides: Partial<EditorEquipmentItem> = {},
): EditorEquipmentItem {
  return {
    id,
    collection: 'magicItems',
    name: 'Cloak of Resistance +1',
    ...overrides,
  };
}

// ---------------------------------------------------------------------------
// Session management
// ---------------------------------------------------------------------------

describe('characterEntrySlice — session management', () => {
  it('initialises to default state', () => {
    const state = makeInitialState();
    expect(state.mode).toBe('new');
    expect(state.activeTab).toBe('identity');
    expect(state.isDirty).toBe(false);
    expect(state.originalCharacterId).toBeNull();
    expect(state.lastValidatedAt).toBeNull();
    expect(state.validationWarnings).toHaveLength(0);
    expect(state.character.info.name).toBe('');
  });

  describe('loadCharacter', () => {
    it('loads a character and sets mode', () => {
      const initial = makeInitialState();
      const char = { ...initial.character, info: { ...initial.character.info, name: 'Valeria' } };
      const state = reducer(
        initial,
        loadCharacter({ character: char, mode: 'edit', characterId: 'abc-123' }),
      );
      expect(state.character.info.name).toBe('Valeria');
      expect(state.mode).toBe('edit');
      expect(state.originalCharacterId).toBe('abc-123');
    });

    it('resets activeTab to identity, isDirty to false, and clears validation', () => {
      let state = makeInitialState();
      state = reducer(state, setActiveTab('feats'));
      state = reducer(state, markDirty());
      state = reducer(state, setValidationWarnings([makeWarning('w1')]));

      state = reducer(
        state,
        loadCharacter({ character: makeInitialState().character, mode: 'new' }),
      );
      expect(state.activeTab).toBe('identity');
      expect(state.isDirty).toBe(false);
      expect(state.lastValidatedAt).toBeNull();
      expect(state.validationWarnings).toHaveLength(0);
    });

    it('sets originalCharacterId to null when characterId is omitted', () => {
      const state = reducer(
        makeInitialState(),
        loadCharacter({ character: makeInitialState().character, mode: 'new' }),
      );
      expect(state.originalCharacterId).toBeNull();
    });
  });

  describe('resetDraft', () => {
    it('resets everything back to blank', () => {
      let state = makeInitialState();
      state = reducer(state, setName('Valeria'));
      state = reducer(state, setActiveTab('combat'));
      state = reducer(state, setValidationWarnings([makeWarning('w1')]));

      state = reducer(state, resetDraft());
      expect(state.character.info.name).toBe('');
      expect(state.mode).toBe('new');
      expect(state.activeTab).toBe('identity');
      expect(state.isDirty).toBe(false);
      expect(state.originalCharacterId).toBeNull();
      expect(state.lastValidatedAt).toBeNull();
      expect(state.validationWarnings).toHaveLength(0);
    });
  });

  describe('setActiveTab', () => {
    it('sets the active tab', () => {
      const state = reducer(makeInitialState(), setActiveTab('combat'));
      expect(state.activeTab).toBe('combat');
    });

    it('does not set isDirty', () => {
      const state = reducer(makeInitialState(), setActiveTab('skills'));
      expect(state.isDirty).toBe(false);
    });
  });

  describe('markDirty', () => {
    it('sets isDirty to true', () => {
      const state = reducer(makeInitialState(), markDirty());
      expect(state.isDirty).toBe(true);
    });
  });
});

// ---------------------------------------------------------------------------
// Validation
// ---------------------------------------------------------------------------

describe('characterEntrySlice — validation', () => {
  describe('setValidationWarnings', () => {
    it('replaces warnings and stamps lastValidatedAt', () => {
      const before = Date.now();
      const state = reducer(
        makeInitialState(),
        setValidationWarnings([makeWarning('w1'), makeWarning('w2')]),
      );
      const after = Date.now();
      expect(state.validationWarnings).toHaveLength(2);
      expect(state.validationWarnings[0].id).toBe('w1');
      expect(state.lastValidatedAt).toBeGreaterThanOrEqual(before);
      expect(state.lastValidatedAt).toBeLessThanOrEqual(after);
    });

    it('can set an empty array to clear warnings', () => {
      let state = reducer(makeInitialState(), setValidationWarnings([makeWarning('w1')]));
      state = reducer(state, setValidationWarnings([]));
      expect(state.validationWarnings).toHaveLength(0);
    });
  });

  describe('acknowledgeWarning', () => {
    it('marks the matching warning as acknowledged', () => {
      let state = reducer(
        makeInitialState(),
        setValidationWarnings([makeWarning('w1'), makeWarning('w2')]),
      );
      state = reducer(state, acknowledgeWarning('w1'));
      expect(state.validationWarnings[0].isAcknowledged).toBe(true);
      expect(state.validationWarnings[1].isAcknowledged).toBe(false);
    });

    it('is a no-op when id is not found', () => {
      let state = reducer(makeInitialState(), setValidationWarnings([makeWarning('w1')]));
      state = reducer(state, acknowledgeWarning('does-not-exist'));
      expect(state.validationWarnings[0].isAcknowledged).toBe(false);
    });
  });

  describe('clearValidation', () => {
    it('clears warnings and lastValidatedAt', () => {
      let state = reducer(makeInitialState(), setValidationWarnings([makeWarning('w1')]));
      state = reducer(state, clearValidation());
      expect(state.validationWarnings).toHaveLength(0);
      expect(state.lastValidatedAt).toBeNull();
    });
  });
});

// ---------------------------------------------------------------------------
// Identity
// ---------------------------------------------------------------------------

describe('characterEntrySlice — identity', () => {
  it('setName updates name and sets isDirty', () => {
    const state = reducer(makeInitialState(), setName('Valeria'));
    expect(state.character.info.name).toBe('Valeria');
    expect(state.isDirty).toBe(true);
  });

  it('setPlayer updates player and sets isDirty', () => {
    const state = reducer(makeInitialState(), setPlayer('Mark'));
    expect(state.character.info.player).toBe('Mark');
    expect(state.isDirty).toBe(true);
  });

  it('setAlignment updates alignment and sets isDirty', () => {
    const state = reducer(makeInitialState(), setAlignment(Alignment.ChaoticGood));
    expect(state.character.info.alignment).toBe(Alignment.ChaoticGood);
    expect(state.isDirty).toBe(true);
  });

  describe('setDeity', () => {
    it('updates deity and sets isDirty', () => {
      const state = reducer(makeInitialState(), setDeity('Sarenrae'));
      expect(state.character.info.deity).toBe('Sarenrae');
      expect(state.isDirty).toBe(true);
    });

    it('clears Domain class choices when deity changes', () => {
      let state = makeInitialState();
      const clericClass = makeClass('cls-1', {
        name: 'Cleric',
        classChoices: [
          { featureName: 'Domain', takenAtLevel: 1, selection: 'Fire' },
          { featureName: 'Favored Enemy', takenAtLevel: 1, selection: 'Undead' },
        ],
      });
      state = reducer(state, addClass(clericClass));
      state = reducer(state, setDeity('Sarenrae'));
      state = reducer(state, setDeity('Iomedae'));

      const cls = state.character.classes.classes[0];
      expect(cls.classChoices?.find((c) => c.featureName === 'Domain')).toBeUndefined();
      expect(cls.classChoices?.find((c) => c.featureName === 'Favored Enemy')).toBeDefined();
    });

    it('does NOT clear Domain choices when deity is set to the same value', () => {
      let state = makeInitialState();
      state = reducer(state, setDeity('Sarenrae'));

      const clericClass = makeClass('cls-1', {
        name: 'Cleric',
        classChoices: [{ featureName: 'Domain', takenAtLevel: 1, selection: 'Fire' }],
      });
      state = reducer(state, addClass(clericClass));
      state = reducer(state, setDeity('Sarenrae'));

      expect(state.character.classes.classes[0].classChoices).toHaveLength(1);
    });
  });

  it('setGender updates gender and sets isDirty', () => {
    const state = reducer(makeInitialState(), setGender('Female'));
    expect(state.character.info.gender).toBe('Female');
    expect(state.isDirty).toBe(true);
  });

  it('setAge stores a parsed number and sets isDirty', () => {
    const state = reducer(makeInitialState(), setAge('28'));
    expect(state.character.info.age).toBe(28);
    expect(state.isDirty).toBe(true);
  });

  it('setHeight updates height and sets isDirty', () => {
    const state = reducer(makeInitialState(), setHeight('5\'8"'));
    expect(state.character.info.height).toBe('5\'8"');
    expect(state.isDirty).toBe(true);
  });

  it('setWeight updates weight and sets isDirty', () => {
    const state = reducer(makeInitialState(), setWeight('140 lbs'));
    expect(state.character.info.weight).toBe('140 lbs');
    expect(state.isDirty).toBe(true);
  });

  it('setHair updates hair and sets isDirty', () => {
    const state = reducer(makeInitialState(), setHair('Auburn'));
    expect(state.character.info.hair).toBe('Auburn');
    expect(state.isDirty).toBe(true);
  });

  it('setEyes updates eyes and sets isDirty', () => {
    const state = reducer(makeInitialState(), setEyes('Green'));
    expect(state.character.info.eyes).toBe('Green');
    expect(state.isDirty).toBe(true);
  });

  it('setSkin updates skin and sets isDirty', () => {
    const state = reducer(makeInitialState(), setSkin('Tan'));
    expect(state.character.info.skin).toBe('Tan');
    expect(state.isDirty).toBe(true);
  });

  it('setBackground updates background and sets isDirty', () => {
    const state = reducer(makeInitialState(), setBackground('Former soldier'));
    expect(state.character.info.background).toBe('Former soldier');
    expect(state.isDirty).toBe(true);
  });

  it('setPortrait updates portrait and sets isDirty', () => {
    const state = reducer(makeInitialState(), setPortrait('https://example.com/portrait.png'));
    expect(state.character.info.portrait).toBe('https://example.com/portrait.png');
    expect(state.isDirty).toBe(true);
  });

  describe('setRace', () => {
    it('sets raceName, and applies racial bonuses', () => {
      const state = reducer(
        makeInitialState(),
        setRace({ raceId: 'elf', raceName: 'Elf', racialBonuses: { dex: 2, int: 2, con: -2 } }),
      );
      expect(state.character.info.race.name).toBe('Elf');
      expect(state.character.abilityScores.dex.racial).toBe(2);
      expect(state.character.abilityScores.int.racial).toBe(2);
      expect(state.character.abilityScores.con.racial).toBe(-2);
      expect(state.isDirty).toBe(true);
    });

    it('clears old racial bonuses when race changes', () => {
      let state = reducer(
        makeInitialState(),
        setRace({ raceId: 'dwarf', raceName: 'Dwarf', racialBonuses: { con: 2, wis: 2, cha: -2 } }),
      );
      state = reducer(
        state,
        setRace({ raceId: 'elf', raceName: 'Elf', racialBonuses: { dex: 2, int: 2 } }),
      );
      expect(state.character.abilityScores.con.racial).toBe(0);
      expect(state.character.abilityScores.wis.racial).toBe(0);
      expect(state.character.abilityScores.cha.racial).toBe(0);
      expect(state.character.abilityScores.dex.racial).toBe(2);
      expect(state.character.abilityScores.int.racial).toBe(2);
    });

    it('defaults unspecified abilities to 0 racial bonus', () => {
      const state = reducer(
        makeInitialState(),
        setRace({ raceId: 'human', raceName: 'Human', racialBonuses: {} }),
      );
      const keys = ['str', 'dex', 'con', 'int', 'wis', 'cha'] as const;
      keys.forEach((k) => expect(state.character.abilityScores[k].racial).toBe(0));
    });
  });

  describe('setRacialFlexChoice', () => {
    const humanBonuses = [{ group: 'any' as const, count: 1 as const, modifier: 2 }];

    it('sets a new flex ability when none was previously set', () => {
      let state = reducer(
        makeInitialState(),
        setRace({
          raceId: 'human',
          raceName: 'Human',
          racialBonuses: {},
          flexibleAbilityBonuses: humanBonuses,
        }),
      );
      state = reducer(state, setRacialFlexChoice({ index: 0, value: 'str' }));
      expect(state.character.info.racialFlexChoices?.[0]).toBe('str');
      expect(state.character.abilityScores.str.racial).toBe(2);
      expect(state.isDirty).toBe(true);
    });

    it('clears the old flex racial bonus and applies it to the new ability', () => {
      let state = reducer(
        makeInitialState(),
        setRace({
          raceId: 'human',
          raceName: 'Human',
          racialBonuses: {},
          flexibleAbilityBonuses: humanBonuses,
        }),
      );
      state = reducer(state, setRacialFlexChoice({ index: 0, value: 'str' }));
      expect(state.character.abilityScores.str.racial).toBe(2);
      state = reducer(state, setRacialFlexChoice({ index: 0, value: 'dex' }));
      expect(state.character.abilityScores.str.racial).toBe(0);
      expect(state.character.abilityScores.dex.racial).toBe(2);
      expect(state.character.info.racialFlexChoices?.[0]).toBe('dex');
    });

    it('is a no-op on racial bonus when the same ability is selected again', () => {
      let state = reducer(
        makeInitialState(),
        setRace({
          raceId: 'human',
          raceName: 'Human',
          racialBonuses: {},
          flexibleAbilityBonuses: humanBonuses,
        }),
      );
      state = reducer(state, setRacialFlexChoice({ index: 0, value: 'con' }));
      state = reducer(state, setRacialFlexChoice({ index: 0, value: 'con' }));
      expect(state.character.abilityScores.con.racial).toBe(2);
    });

    describe('Elven Noble-style bonuses (count: all, group: other)', () => {
      // Mirrors extendedRaces.ts Elven Noble:
      // +2 to all abilities in chosen group, +4 and -2 from the other group
      const elvenNobleBonuses = [
        { group: 'any' as const, count: 'all' as const, modifier: 2 },
        { group: 'other' as const, count: 1 as const, modifier: 4 },
        { group: 'other' as const, count: 1 as const, modifier: -2 },
      ];

      function makeElvenState() {
        return reducer(
          makeInitialState(),
          setRace({
            raceId: 'elven-noble',
            raceName: 'Elven Noble',
            racialBonuses: {},
            flexibleAbilityBonuses: elvenNobleBonuses,
          }),
        );
      }

      it('applies +2 to all mental abilities when mental group is chosen', () => {
        const state = reducer(makeElvenState(), setRacialFlexChoice({ index: 0, value: 'mental' }));
        expect(state.character.abilityScores.int.racial).toBe(2);
        expect(state.character.abilityScores.wis.racial).toBe(2);
        expect(state.character.abilityScores.cha.racial).toBe(2);
        expect(state.character.abilityScores.str.racial).toBe(0);
        expect(state.character.abilityScores.dex.racial).toBe(0);
        expect(state.character.abilityScores.con.racial).toBe(0);
      });

      it('applies +2 to all physical abilities when physical group is chosen', () => {
        const state = reducer(
          makeElvenState(),
          setRacialFlexChoice({ index: 0, value: 'physical' }),
        );
        expect(state.character.abilityScores.str.racial).toBe(2);
        expect(state.character.abilityScores.dex.racial).toBe(2);
        expect(state.character.abilityScores.con.racial).toBe(2);
        expect(state.character.abilityScores.int.racial).toBe(0);
        expect(state.character.abilityScores.wis.racial).toBe(0);
        expect(state.character.abilityScores.cha.racial).toBe(0);
      });

      it('applies +4 to a physical ability when choices[0] is mental (other = physical pool)', () => {
        let state = reducer(makeElvenState(), setRacialFlexChoice({ index: 0, value: 'mental' }));
        state = reducer(state, setRacialFlexChoice({ index: 1, value: 'str' }));
        // mental group: int+2, wis+2, cha+2; other[physical] str+4
        expect(state.character.abilityScores.int.racial).toBe(2);
        expect(state.character.abilityScores.wis.racial).toBe(2);
        expect(state.character.abilityScores.cha.racial).toBe(2);
        expect(state.character.abilityScores.str.racial).toBe(4);
      });

      it('applies +4 to a mental ability when choices[0] is physical (other = mental pool)', () => {
        let state = reducer(makeElvenState(), setRacialFlexChoice({ index: 0, value: 'physical' }));
        state = reducer(state, setRacialFlexChoice({ index: 1, value: 'int' }));
        // physical group: str+2, dex+2, con+2; other[mental] int+4
        expect(state.character.abilityScores.str.racial).toBe(2);
        expect(state.character.abilityScores.dex.racial).toBe(2);
        expect(state.character.abilityScores.con.racial).toBe(2);
        expect(state.character.abilityScores.int.racial).toBe(4);
      });

      it('is a no-op for other-pool choices when the ability is not in the pool', () => {
        // choices[0] = 'mental' → other pool is PHYSICAL. Choosing 'int' (mental) is not in pool.
        let state = reducer(makeElvenState(), setRacialFlexChoice({ index: 0, value: 'mental' }));
        state = reducer(state, setRacialFlexChoice({ index: 1, value: 'int' }));
        expect(state.character.abilityScores.int.racial).toBe(2); // only from mental group, not +4
      });

      it('skips bonuses where no choice has been made yet (early return on undefined choice)', () => {
        // Only index 0 set; indices 1 and 2 are undefined → no +4 or -2 applied
        const state = reducer(makeElvenState(), setRacialFlexChoice({ index: 0, value: 'mental' }));
        // Only the 'all mental' +2 applies; +4 and -2 for 'other' are skipped
        expect(state.character.abilityScores.str.racial).toBe(0);
        expect(state.character.abilityScores.dex.racial).toBe(0);
        expect(state.character.abilityScores.con.racial).toBe(0);
      });
    });
  });

  describe('upsertRacialChoice', () => {
    it('initializes racialChoices array and adds the choice when previously undefined', () => {
      const choice: RacialChoice = { featureName: 'Agile Fighters', selection: 'Weapon Finesse' };
      const state = reducer(makeInitialState(), upsertRacialChoice(choice));
      expect(state.character.info.racialChoices).toHaveLength(1);
      expect(state.character.info.racialChoices?.[0]).toEqual(choice);
      expect(state.isDirty).toBe(true);
    });

    it('pushes a new choice when the featureName does not already exist', () => {
      const first: RacialChoice = { featureName: 'Agile Fighters', selection: 'Weapon Finesse' };
      const second: RacialChoice = { featureName: 'SLA', selection: 'Detect Magic' };
      let state = reducer(makeInitialState(), upsertRacialChoice(first));
      state = reducer(state, upsertRacialChoice(second));
      expect(state.character.info.racialChoices).toHaveLength(2);
      expect(state.character.info.racialChoices?.[1]).toEqual(second);
    });

    it('replaces an existing choice when featureName matches', () => {
      const original: RacialChoice = { featureName: 'Agile Fighters', selection: 'Weapon Finesse' };
      const updated: RacialChoice = { featureName: 'Agile Fighters', selection: 'Dodge' };
      let state = reducer(makeInitialState(), upsertRacialChoice(original));
      state = reducer(state, upsertRacialChoice(updated));
      expect(state.character.info.racialChoices).toHaveLength(1);
      expect(state.character.info.racialChoices?.[0].selection).toBe('Dodge');
    });

    it('preserves other choices when updating one by featureName', () => {
      const first: RacialChoice = { featureName: 'Agile Fighters', selection: 'Weapon Finesse' };
      const second: RacialChoice = { featureName: 'SLA', selection: 'Detect Magic' };
      const updatedFirst: RacialChoice = { featureName: 'Agile Fighters', selection: 'Dodge' };
      let state = reducer(makeInitialState(), upsertRacialChoice(first));
      state = reducer(state, upsertRacialChoice(second));
      state = reducer(state, upsertRacialChoice(updatedFirst));
      expect(state.character.info.racialChoices).toHaveLength(2);
      expect(state.character.info.racialChoices?.[0].selection).toBe('Dodge');
      expect(state.character.info.racialChoices?.[1].selection).toBe('Detect Magic');
    });

    it('clears racialChoices when race is changed', () => {
      const choice: RacialChoice = { featureName: 'Agile Fighters', selection: 'Weapon Finesse' };
      let state = reducer(makeInitialState(), upsertRacialChoice(choice));
      state = reducer(
        state,
        setRace({ raceId: 'elf', raceName: 'Elf', racialBonuses: { dex: 2 } }),
      );
      expect(state.character.info.racialChoices).toBeUndefined();
    });
  });

  describe('toggleAlternateRacialTrait', () => {
    it('adds an ART when selectedAlternateRacialTraits is undefined', () => {
      const state = reducer(makeInitialState(), toggleAlternateRacialTrait('Urbanite'));
      expect(state.character.info.selectedAlternateRacialTraits).toEqual(['Urbanite']);
      expect(state.isDirty).toBe(true);
    });

    it('adds a second ART without removing the first', () => {
      let state = reducer(makeInitialState(), toggleAlternateRacialTrait('Urbanite'));
      state = reducer(state, toggleAlternateRacialTrait('Dreamspeaker'));
      expect(state.character.info.selectedAlternateRacialTraits).toEqual([
        'Urbanite',
        'Dreamspeaker',
      ]);
    });

    it('removes an ART when it is already selected (toggle off)', () => {
      let state = reducer(makeInitialState(), toggleAlternateRacialTrait('Urbanite'));
      state = reducer(state, toggleAlternateRacialTrait('Urbanite'));
      expect(state.character.info.selectedAlternateRacialTraits).toEqual([]);
    });

    it('removes only the targeted ART when multiple are selected', () => {
      let state = reducer(makeInitialState(), toggleAlternateRacialTrait('Urbanite'));
      state = reducer(state, toggleAlternateRacialTrait('Dreamspeaker'));
      state = reducer(state, toggleAlternateRacialTrait('Urbanite'));
      expect(state.character.info.selectedAlternateRacialTraits).toEqual(['Dreamspeaker']);
    });

    it('clears selectedAlternateRacialTraits when race is changed', () => {
      let state = reducer(makeInitialState(), toggleAlternateRacialTrait('Urbanite'));
      state = reducer(
        state,
        setRace({ raceId: 'elf', raceName: 'Elf', racialBonuses: { dex: 2 } }),
      );
      expect(state.character.info.selectedAlternateRacialTraits).toBeUndefined();
    });
  });
});

// ---------------------------------------------------------------------------
// Abilities
// ---------------------------------------------------------------------------

describe('characterEntrySlice — abilities', () => {
  describe('setAbilityBase', () => {
    it('sets base on an ability score and sets isDirty', () => {
      const state = reducer(makeInitialState(), setAbilityBase({ ability: 'str', value: 16 }));
      expect(state.character.abilityScores.str.base).toBe(16);
      expect(state.isDirty).toBe(true);
    });
  });

  describe('setAbilityInherent', () => {
    it('sets inherent on an ability score', () => {
      const state = reducer(makeInitialState(), setAbilityInherent({ ability: 'cha', value: 5 }));
      expect(state.character.abilityScores.cha.inherent).toBe(5);
    });
  });

  describe('setLevelIncrementSlots', () => {
    it('replaces all level increment slots', () => {
      const slots: LevelIncrementSlot[] = [
        { atHD: 4, ability: 'str' },
        { atHD: 8, ability: null },
      ];
      const state = reducer(makeInitialState(), setLevelIncrementSlots(slots));
      expect(state.character.levelIncrementSlots).toEqual(slots);
      expect(state.isDirty).toBe(true);
    });
  });

  describe('setLevelIncrementAbility', () => {
    it('updates the ability on the matching slot and recalculates levelIncrements counts', () => {
      const slots: LevelIncrementSlot[] = [
        { atHD: 4, ability: null },
        { atHD: 8, ability: null },
        { atHD: 12, ability: null },
      ];
      let state = reducer(makeInitialState(), setLevelIncrementSlots(slots));
      state = reducer(state, setLevelIncrementAbility({ atHD: 4, ability: 'str' }));
      state = reducer(state, setLevelIncrementAbility({ atHD: 8, ability: 'str' }));
      state = reducer(state, setLevelIncrementAbility({ atHD: 12, ability: 'dex' }));

      expect(state.character.levelIncrementSlots[0].ability).toBe('str');
      expect(state.character.abilityScores.str.levelIncrements).toBe(2);
      expect(state.character.abilityScores.dex.levelIncrements).toBe(1);
      expect(state.character.abilityScores.con.levelIncrements).toBe(0);
      expect(state.isDirty).toBe(true);
    });

    it('is a no-op for the slot update when atHD is not found (still sets isDirty)', () => {
      const slots: LevelIncrementSlot[] = [{ atHD: 4, ability: null }];
      let state = reducer(makeInitialState(), setLevelIncrementSlots(slots));
      state = reducer(state, setLevelIncrementAbility({ atHD: 99, ability: 'str' }));
      expect(state.character.levelIncrementSlots[0].ability).toBeNull();
      expect(state.isDirty).toBe(true);
    });
  });
});

// ---------------------------------------------------------------------------
// Classes
// ---------------------------------------------------------------------------

describe('characterEntrySlice — classes', () => {
  describe('addClass', () => {
    it('pushes a class entry and sets isDirty', () => {
      const cls = makeClass('cls-1');
      const state = reducer(makeInitialState(), addClass(cls));
      expect(state.character.classes.classes).toHaveLength(1);
      expect(state.character.classes.classes[0].id).toBe('cls-1');
      expect(state.isDirty).toBe(true);
    });
  });

  describe('removeClass', () => {
    it('removes the class with the matching id', () => {
      let state = reducer(makeInitialState(), addClass(makeClass('cls-1')));
      state = reducer(state, addClass(makeClass('cls-2')));
      state = reducer(state, removeClass('cls-1'));
      expect(state.character.classes.classes).toHaveLength(1);
      expect(state.character.classes.classes[0].id).toBe('cls-2');
      expect(state.isDirty).toBe(true);
    });

    it('is a no-op when id is not found', () => {
      let state = reducer(makeInitialState(), addClass(makeClass('cls-1')));
      state = reducer(state, removeClass('does-not-exist'));
      expect(state.character.classes.classes).toHaveLength(1);
    });

    it('cascades: clears advancement pointers targeting the removed class', () => {
      let state = reducer(makeInitialState(), addClass(makeClass('base')));
      state = reducer(state, addClass(makeClass('prestige')));
      state = reducer(
        state,
        updateClassSpellcastingAdvancement({
          id: 'prestige',
          advancement: { mode: 'single', perLevel: [{ baseClassEntryId: 'base' }] },
        }),
      );
      state = reducer(state, removeClass('base'));
      const adv = state.character.classes.classes[0].spellcastingAdvancement;
      if (adv?.mode !== 'single') throw new Error('expected mode single');
      expect(adv.perLevel[0].baseClassEntryId).toBe('');
    });

    it('cascades: removes pools anchored to the removed class', () => {
      let state = reducer(makeInitialState(), addClass(makeClass('base')));
      state = reducer(state, addSpellcastingPool(makePool('pool-x', 'base')));
      state = reducer(state, removeClass('base'));
      expect(state.character.spellcasting.pools).toHaveLength(0);
    });

    it('cascades: clears dual-mode advancement pointers targeting the removed class', () => {
      let state = reducer(makeInitialState(), addClass(makeClass('base')));
      state = reducer(state, addClass(makeClass('prestige')));
      state = reducer(
        state,
        updateClassSpellcastingAdvancement({
          id: 'prestige',
          advancement: {
            mode: 'both',
            perLevel: [{ arcaneBaseClassEntryId: 'base', divineBaseClassEntryId: 'other' }],
          },
        }),
      );
      state = reducer(state, removeClass('base'));
      const adv = state.character.classes.classes[0].spellcastingAdvancement;
      if (adv?.mode !== 'both') throw new Error('expected mode both');
      expect(adv.perLevel[0].arcaneBaseClassEntryId).toBe('');
      expect(adv.perLevel[0].divineBaseClassEntryId).toBe('other');
    });
  });

  describe('updateClassLevel', () => {
    it('updates level on the matching class and sets isDirty', () => {
      let state = reducer(makeInitialState(), addClass(makeClass('cls-1')));
      state = reducer(state, updateClassLevel({ id: 'cls-1', level: 10 }));
      expect(state.character.classes.classes[0].level).toBe(10);
      expect(state.isDirty).toBe(true);
    });

    it('is a no-op when id is not found', () => {
      let state = reducer(makeInitialState(), addClass(makeClass('cls-1')));
      const before = state.character.classes.classes[0].level;
      state = reducer(state, updateClassLevel({ id: 'does-not-exist', level: 10 }));
      expect(state.character.classes.classes[0].level).toBe(before);
    });

    it('grows advancement perLevel when level increases, copying last target', () => {
      let state = reducer(makeInitialState(), addClass(makeClass('prestige', { level: 2 })));
      state = reducer(
        state,
        updateClassSpellcastingAdvancement({
          id: 'prestige',
          advancement: {
            mode: 'single',
            perLevel: [{ baseClassEntryId: 'base' }, { baseClassEntryId: 'base' }],
          },
        }),
      );
      state = reducer(state, updateClassLevel({ id: 'prestige', level: 4 }));
      const adv = state.character.classes.classes[0].spellcastingAdvancement;
      if (adv?.mode !== 'single') throw new Error('expected mode single');
      expect(adv.perLevel).toHaveLength(4);
      expect(adv.perLevel.every((p) => p.baseClassEntryId === 'base')).toBe(true);
    });

    it('trims advancement perLevel when level decreases', () => {
      let state = reducer(makeInitialState(), addClass(makeClass('prestige', { level: 5 })));
      state = reducer(
        state,
        updateClassSpellcastingAdvancement({
          id: 'prestige',
          advancement: {
            mode: 'single',
            perLevel: Array.from({ length: 5 }, () => ({ baseClassEntryId: 'base' })),
          },
        }),
      );
      state = reducer(state, updateClassLevel({ id: 'prestige', level: 2 }));
      const adv = state.character.classes.classes[0].spellcastingAdvancement;
      if (adv?.mode !== 'single') throw new Error('expected mode single');
      expect(adv.perLevel).toHaveLength(2);
    });

    it('prunes favoredClassBonuses selections beyond the new level when level decreases', () => {
      let state = reducer(makeInitialState(), addClass(makeClass('cls-1', { level: 5 })));
      state = reducer(state, toggleFavoredClass('cls-1'));
      const selections = [
        { level: 1, type: 'hp' as const },
        { level: 2, type: 'skill' as const },
        { level: 3, type: 'hp' as const },
        { level: 4, type: 'hp' as const },
        { level: 5, type: 'skill' as const },
      ];
      state = reducer(state, setFavoredClassBonuses({ id: 'cls-1', selections }));
      state = reducer(state, updateClassLevel({ id: 'cls-1', level: 3 }));
      expect(state.character.classes.classes[0].favoredClassBonuses).toEqual(
        selections.slice(0, 3),
      );
    });

    it('does not prune favoredClassBonuses when level increases', () => {
      let state = reducer(makeInitialState(), addClass(makeClass('cls-1', { level: 3 })));
      state = reducer(state, toggleFavoredClass('cls-1'));
      const selections = [
        { level: 1, type: 'hp' as const },
        { level: 2, type: 'skill' as const },
        { level: 3, type: 'hp' as const },
      ];
      state = reducer(state, setFavoredClassBonuses({ id: 'cls-1', selections }));
      state = reducer(state, updateClassLevel({ id: 'cls-1', level: 5 }));
      expect(state.character.classes.classes[0].favoredClassBonuses).toEqual(selections);
    });

    it('leaves favoredClassBonuses undefined when level decreases and field is absent', () => {
      let state = reducer(makeInitialState(), addClass(makeClass('cls-1', { level: 5 })));
      // isFavoredClass is false by default — no favoredClassBonuses
      state = reducer(state, updateClassLevel({ id: 'cls-1', level: 2 }));
      expect(state.character.classes.classes[0].favoredClassBonuses).toBeUndefined();
    });

    it('grows dual-mode advancement perLevel when level increases', () => {
      let state = reducer(makeInitialState(), addClass(makeClass('prestige', { level: 2 })));
      state = reducer(
        state,
        updateClassSpellcastingAdvancement({
          id: 'prestige',
          advancement: {
            mode: 'both',
            perLevel: [
              { arcaneBaseClassEntryId: 'arc', divineBaseClassEntryId: 'div' },
              { arcaneBaseClassEntryId: 'arc', divineBaseClassEntryId: 'div' },
            ],
          },
        }),
      );
      state = reducer(state, updateClassLevel({ id: 'prestige', level: 4 }));
      const adv = state.character.classes.classes[0].spellcastingAdvancement;
      if (adv?.mode !== 'both') throw new Error('expected mode both');
      expect(adv.perLevel).toHaveLength(4);
      expect(adv.perLevel.every((p) => p.arcaneBaseClassEntryId === 'arc')).toBe(true);
    });

    it('trims dual-mode advancement perLevel when level decreases', () => {
      let state = reducer(makeInitialState(), addClass(makeClass('prestige', { level: 4 })));
      state = reducer(
        state,
        updateClassSpellcastingAdvancement({
          id: 'prestige',
          advancement: {
            mode: 'both',
            perLevel: Array.from({ length: 4 }, () => ({
              arcaneBaseClassEntryId: 'arc',
              divineBaseClassEntryId: 'div',
            })),
          },
        }),
      );
      state = reducer(state, updateClassLevel({ id: 'prestige', level: 2 }));
      const adv = state.character.classes.classes[0].spellcastingAdvancement;
      if (adv?.mode !== 'both') throw new Error('expected mode both');
      expect(adv.perLevel).toHaveLength(2);
    });
  });

  describe('syncFeatSlots', () => {
    it('recalculates feat slots from classes and marks dirty', () => {
      let state = reducer(makeInitialState(), addClass(makeClass('cls-1', { level: 1 })));
      // Add an extra manual slot not yet synced
      state = reducer(state, syncFeatSlots());
      expect(state.isDirty).toBe(true);
    });
  });

  describe('updateClassArchetype', () => {
    it('sets archetype on the matching class', () => {
      let state = reducer(makeInitialState(), addClass(makeClass('cls-1')));
      state = reducer(
        state,
        updateClassArchetype({ id: 'cls-1', archetypeId: 'arch-1', archetypeName: 'Lore Warden' }),
      );
      expect(state.character.classes.classes[0].archetypeId).toBe('arch-1');
      expect(state.character.classes.classes[0].archetypeName).toBe('Lore Warden');
      expect(state.isDirty).toBe(true);
    });

    it('is a no-op when id is not found', () => {
      let state = reducer(makeInitialState(), addClass(makeClass('cls-1')));
      state = reducer(state, updateClassArchetype({ id: 'does-not-exist', archetypeId: 'arch-1' }));
      expect(state.character.classes.classes[0].archetypeId).toBeUndefined();
    });
  });

  describe('updateClassSpellcastingAdvancement', () => {
    it('sets spellcastingAdvancement on the matching class', () => {
      let state = reducer(makeInitialState(), addClass(makeClass('cls-1')));
      const adv = {
        mode: 'single' as const,
        perLevel: [{ baseClassEntryId: 'cls-target' }],
      };
      state = reducer(state, updateClassSpellcastingAdvancement({ id: 'cls-1', advancement: adv }));
      expect(state.character.classes.classes[0].spellcastingAdvancement).toEqual(adv);
      expect(state.isDirty).toBe(true);
    });

    it('is a no-op when id is not found', () => {
      let state = reducer(makeInitialState(), addClass(makeClass('cls-1')));
      state = reducer(
        state,
        updateClassSpellcastingAdvancement({
          id: 'does-not-exist',
          advancement: { mode: 'single', perLevel: [{ baseClassEntryId: 'x' }] },
        }),
      );
      expect(state.character.classes.classes[0].spellcastingAdvancement).toBeUndefined();
    });
  });

  describe('upsertClassChoice', () => {
    it('pushes a new choice when none exist for the featureName', () => {
      let state = reducer(makeInitialState(), addClass(makeClass('cls-1')));
      const choice = { featureName: 'Domain', takenAtLevel: 1, selection: 'Fire' };
      state = reducer(state, upsertClassChoice({ classId: 'cls-1', choiceIndex: 0, choice }));
      expect(state.character.classes.classes[0].classChoices).toHaveLength(1);
      expect(state.character.classes.classes[0].classChoices![0].selection).toBe('Fire');
      expect(state.isDirty).toBe(true);
    });

    it('updates an existing choice at the given index', () => {
      let state = reducer(
        makeInitialState(),
        addClass(
          makeClass('cls-1', {
            classChoices: [{ featureName: 'Domain', takenAtLevel: 1, selection: 'Fire' }],
          }),
        ),
      );
      const choice = { featureName: 'Domain', takenAtLevel: 1, selection: 'Water' };
      state = reducer(state, upsertClassChoice({ classId: 'cls-1', choiceIndex: 0, choice }));
      expect(state.character.classes.classes[0].classChoices![0].selection).toBe('Water');
    });

    it('appends a second choice for the same featureName at choiceIndex 1', () => {
      let state = reducer(
        makeInitialState(),
        addClass(
          makeClass('cls-1', {
            classChoices: [{ featureName: 'Domain', takenAtLevel: 1, selection: 'Fire' }],
          }),
        ),
      );
      const choice = { featureName: 'Domain', takenAtLevel: 1, selection: 'Water' };
      state = reducer(state, upsertClassChoice({ classId: 'cls-1', choiceIndex: 1, choice }));
      expect(state.character.classes.classes[0].classChoices).toHaveLength(2);
      expect(state.character.classes.classes[0].classChoices![1].selection).toBe('Water');
    });

    it('is a no-op when classId is not found', () => {
      let state = reducer(makeInitialState(), addClass(makeClass('cls-1')));
      const choice = { featureName: 'Domain', takenAtLevel: 1, selection: 'Fire' };
      state = reducer(
        state,
        upsertClassChoice({ classId: 'does-not-exist', choiceIndex: 0, choice }),
      );
      expect(state.character.classes.classes[0].classChoices).toHaveLength(0);
    });
  });

  describe('toggleClassPrereqOverride', () => {
    it('toggles prereqOverride on the matching class', () => {
      let state = reducer(
        makeInitialState(),
        addClass(makeClass('cls-1', { prereqOverride: false })),
      );
      state = reducer(state, toggleClassPrereqOverride('cls-1'));
      expect(state.character.classes.classes[0].prereqOverride).toBe(true);
      state = reducer(state, toggleClassPrereqOverride('cls-1'));
      expect(state.character.classes.classes[0].prereqOverride).toBe(false);
      expect(state.isDirty).toBe(true);
    });

    it('is a no-op when id is not found', () => {
      let state = reducer(
        makeInitialState(),
        addClass(makeClass('cls-1', { prereqOverride: false })),
      );
      state = reducer(state, toggleClassPrereqOverride('does-not-exist'));
      expect(state.character.classes.classes[0].prereqOverride).toBe(false);
    });
  });

  describe('toggleFavoredClass', () => {
    it('marks a class as favored and initializes bonus selections as empty array', () => {
      let state = reducer(makeInitialState(), addClass(makeClass('cls-1')));
      state = reducer(state, toggleFavoredClass('cls-1'));
      expect(state.character.classes.classes[0].isFavoredClass).toBe(true);
      expect(state.character.classes.classes[0].favoredClassBonuses).toEqual([]);
      expect(state.isDirty).toBe(true);
    });

    it('clears favored status on previously favored class when a different class is toggled', () => {
      let state = makeInitialState();
      state = reducer(state, addClass(makeClass('cls-1')));
      state = reducer(state, addClass(makeClass('cls-2')));
      state = reducer(state, toggleFavoredClass('cls-1'));
      state = reducer(state, toggleFavoredClass('cls-2'));
      expect(state.character.classes.classes[0].isFavoredClass).toBe(false);
      expect(state.character.classes.classes[1].isFavoredClass).toBe(true);
    });

    it('toggles off when the already-favored class is pressed again', () => {
      let state = reducer(makeInitialState(), addClass(makeClass('cls-1')));
      state = reducer(state, toggleFavoredClass('cls-1'));
      expect(state.character.classes.classes[0].isFavoredClass).toBe(true);
      state = reducer(state, toggleFavoredClass('cls-1'));
      expect(state.character.classes.classes[0].isFavoredClass).toBe(false);
    });

    it('clears favoredClassBonuses when toggling off the favored class', () => {
      let state = reducer(makeInitialState(), addClass(makeClass('cls-1')));
      state = reducer(state, toggleFavoredClass('cls-1'));
      state = reducer(
        state,
        setFavoredClassBonuses({
          id: 'cls-1',
          selections: [{ level: 1, type: 'hp' as const }],
        }),
      );
      expect(state.character.classes.classes[0].favoredClassBonuses).toHaveLength(1);
      // Toggle off
      state = reducer(state, toggleFavoredClass('cls-1'));
      expect(state.character.classes.classes[0].isFavoredClass).toBe(false);
      expect(state.character.classes.classes[0].favoredClassBonuses).toBeUndefined();
    });

    it('clears favoredClassBonuses on the previously-favored class when a different class is toggled on', () => {
      let state = makeInitialState();
      state = reducer(state, addClass(makeClass('cls-1')));
      state = reducer(state, addClass(makeClass('cls-2')));
      state = reducer(state, toggleFavoredClass('cls-1'));
      state = reducer(
        state,
        setFavoredClassBonuses({
          id: 'cls-1',
          selections: [{ level: 1, type: 'skill' as const }],
        }),
      );
      // Switch favored to cls-2
      state = reducer(state, toggleFavoredClass('cls-2'));
      expect(state.character.classes.classes[0].isFavoredClass).toBe(false);
      expect(state.character.classes.classes[0].favoredClassBonuses).toBeUndefined();
      expect(state.character.classes.classes[1].isFavoredClass).toBe(true);
    });

    it('is a no-op when id is not found', () => {
      let state = reducer(makeInitialState(), addClass(makeClass('cls-1')));
      const before = state.character.classes.classes[0].isFavoredClass;
      state = reducer(state, toggleFavoredClass('does-not-exist'));
      expect(state.character.classes.classes[0].isFavoredClass).toBe(before);
    });
  });

  describe('setFavoredClassBonuses', () => {
    it('stores per-level selections on the matching class', () => {
      let state = reducer(makeInitialState(), addClass(makeClass('cls-1', { level: 2 })));
      state = reducer(state, toggleFavoredClass('cls-1'));
      const selections = [
        { level: 1, type: 'hp' as const },
        { level: 2, type: 'skill' as const },
      ];
      state = reducer(state, setFavoredClassBonuses({ id: 'cls-1', selections }));
      expect(state.character.classes.classes[0].favoredClassBonuses).toEqual(selections);
      expect(state.isDirty).toBe(true);
    });

    it('clamps selections to cls.level, dropping entries beyond the class level', () => {
      let state = reducer(makeInitialState(), addClass(makeClass('cls-1', { level: 2 })));
      state = reducer(state, toggleFavoredClass('cls-1'));
      const selections = [
        { level: 1, type: 'hp' as const },
        { level: 2, type: 'skill' as const },
        { level: 3, type: 'hp' as const }, // over-length — should be dropped
      ];
      state = reducer(state, setFavoredClassBonuses({ id: 'cls-1', selections }));
      expect(state.character.classes.classes[0].favoredClassBonuses).toEqual([
        { level: 1, type: 'hp' },
        { level: 2, type: 'skill' },
      ]);
    });

    it('is a no-op when id is not found', () => {
      let state = reducer(makeInitialState(), addClass(makeClass('cls-1')));
      state = reducer(
        state,
        setFavoredClassBonuses({
          id: 'does-not-exist',
          selections: [{ level: 1, type: 'hp' as const }],
        }),
      );
      expect(state.character.classes.classes[0].favoredClassBonuses).toBeUndefined();
    });
  });

  describe('reorderClasses', () => {
    it('reorders classes by the provided id array', () => {
      let state = makeInitialState();
      state = reducer(state, addClass(makeClass('cls-1', { name: 'Fighter' })));
      state = reducer(state, addClass(makeClass('cls-2', { name: 'Rogue' })));
      state = reducer(state, addClass(makeClass('cls-3', { name: 'Cleric' })));
      state = reducer(state, reorderClasses(['cls-3', 'cls-1', 'cls-2']));
      expect(state.character.classes.classes.map((c) => c.id)).toEqual(['cls-3', 'cls-1', 'cls-2']);
      expect(state.isDirty).toBe(true);
    });

    it('omits classes not in the id array', () => {
      let state = makeInitialState();
      state = reducer(state, addClass(makeClass('cls-1')));
      state = reducer(state, addClass(makeClass('cls-2')));
      state = reducer(state, reorderClasses(['cls-2']));
      expect(state.character.classes.classes).toHaveLength(1);
      expect(state.character.classes.classes[0].id).toBe('cls-2');
    });
  });

  // ---- initLevelOrder / swapLevelSlot / splitClass ----

  describe('initLevelOrder', () => {
    it('builds levelOrder with one entry per class level', () => {
      let state = makeInitialState();
      state = reducer(state, addClass(makeClass('cls-1', { level: 3 })));
      state = reducer(state, addClass(makeClass('cls-2', { name: 'Rogue', level: 2 })));
      state = reducer(state, initLevelOrder());
      expect(state.character.classes.levelOrder).toEqual([
        'cls-1',
        'cls-1',
        'cls-1',
        'cls-2',
        'cls-2',
      ]);
      expect(state.isDirty).toBe(true);
    });
  });

  describe('swapLevelSlot', () => {
    it('reassigns a level slot from one class to another and updates levels', () => {
      let state = makeInitialState();
      state = reducer(state, addClass(makeClass('cls-1', { level: 3 })));
      state = reducer(state, addClass(makeClass('cls-2', { name: 'Rogue', level: 1 })));
      state = reducer(state, initLevelOrder());
      // levelOrder: ['cls-1','cls-1','cls-1','cls-2']
      // Swap charLevel 3 (index 2, currently cls-1) to cls-2
      state = reducer(state, swapLevelSlot({ charLevel: 3, newClassId: 'cls-2' }));
      expect(state.character.classes.levelOrder![2]).toBe('cls-2');
      const cls1 = state.character.classes.classes.find((c) => c.id === 'cls-1')!;
      const cls2 = state.character.classes.classes.find((c) => c.id === 'cls-2')!;
      expect(cls1.level).toBe(2);
      expect(cls2.level).toBe(2);
      expect(state.character.classes.totalLevel).toBe(4);
      expect(state.isDirty).toBe(true);
    });

    it('is a no-op when the slot already belongs to newClassId', () => {
      let state = makeInitialState();
      state = reducer(state, addClass(makeClass('cls-1', { level: 2 })));
      state = reducer(state, addClass(makeClass('cls-2', { name: 'Rogue', level: 1 })));
      state = reducer(state, initLevelOrder());
      const before = JSON.stringify(state.character.classes);
      state = reducer(state, swapLevelSlot({ charLevel: 1, newClassId: 'cls-1' }));
      expect(JSON.stringify(state.character.classes)).toBe(before);
    });

    it('shrinks spellcastingAdvancement perLevel on the class that lost a slot', () => {
      let state = makeInitialState();
      const adv = {
        mode: 'single' as const,
        perLevel: [
          { baseClassEntryId: 'cls-1' },
          { baseClassEntryId: 'cls-1' },
          { baseClassEntryId: 'cls-1' },
        ],
      };
      state = reducer(
        state,
        addClass(makeClass('cls-1', { level: 3, spellcastingAdvancement: adv })),
      );
      state = reducer(state, addClass(makeClass('cls-2', { name: 'Rogue', level: 1 })));
      state = reducer(state, initLevelOrder());
      // Swap level 3 (cls-1) to cls-2 — cls-1 drops from 3 to 2
      state = reducer(state, swapLevelSlot({ charLevel: 3, newClassId: 'cls-2' }));
      const cls1 = state.character.classes.classes.find((c) => c.id === 'cls-1')!;
      expect(cls1.spellcastingAdvancement!.perLevel).toHaveLength(2);
    });
  });

  describe('splitClass', () => {
    it('splits a 4-level class into two entries at the specified boundary', () => {
      let state = makeInitialState();
      state = reducer(state, addClass(makeClass('cls-1', { level: 4 })));
      state = reducer(state, initLevelOrder());
      state = reducer(
        state,
        splitClass({ classId: 'cls-1', firstRunLevel: 2, newEntryId: 'cls-1b' }),
      );

      expect(state.character.classes.classes).toHaveLength(2);
      const first = state.character.classes.classes[0];
      const second = state.character.classes.classes[1];
      expect(first.level).toBe(2);
      expect(second.level).toBe(2);
      expect(second.id).toBe('cls-1b');
      expect(state.character.classes.totalLevel).toBe(4);
      expect(state.isDirty).toBe(true);
    });

    it('updates levelOrder so the second run uses newEntryId', () => {
      let state = makeInitialState();
      state = reducer(state, addClass(makeClass('cls-1', { level: 4 })));
      state = reducer(state, initLevelOrder());
      // Before: ['cls-1','cls-1','cls-1','cls-1']
      state = reducer(
        state,
        splitClass({ classId: 'cls-1', firstRunLevel: 2, newEntryId: 'cls-1b' }),
      );
      const order = state.character.classes.levelOrder!;
      expect(order).toHaveLength(4);
      // Last 2 slots should be cls-1b; first 2 stay cls-1
      expect(order.filter((id) => id === 'cls-1')).toHaveLength(2);
      expect(order.filter((id) => id === 'cls-1b')).toHaveLength(2);
    });

    it('splits spellcastingAdvancement perLevel between the two entries', () => {
      let state = makeInitialState();
      const adv = {
        mode: 'single' as const,
        perLevel: [
          { baseClassEntryId: 'cls-1' },
          { baseClassEntryId: 'cls-1' },
          { baseClassEntryId: 'cls-1' },
          { baseClassEntryId: 'cls-1' },
        ],
      };
      state = reducer(
        state,
        addClass(makeClass('cls-1', { level: 4, spellcastingAdvancement: adv })),
      );
      state = reducer(state, initLevelOrder());
      state = reducer(
        state,
        splitClass({ classId: 'cls-1', firstRunLevel: 2, newEntryId: 'cls-1b' }),
      );

      const first = state.character.classes.classes[0];
      const second = state.character.classes.classes[1];
      expect(first.spellcastingAdvancement!.perLevel).toHaveLength(2);
      expect(second.spellcastingAdvancement!.perLevel).toHaveLength(2);
    });

    it('is a no-op when firstRunLevel would leave the second run with 0 levels', () => {
      let state = makeInitialState();
      state = reducer(state, addClass(makeClass('cls-1', { level: 3 })));
      state = reducer(state, initLevelOrder());
      // firstRunLevel = 3 means secondRunLevel = 0 — invalid
      state = reducer(
        state,
        splitClass({ classId: 'cls-1', firstRunLevel: 3, newEntryId: 'cls-1b' }),
      );
      expect(state.character.classes.classes).toHaveLength(1);
    });

    it('marks both runs with the same splitGroup', () => {
      let state = makeInitialState();
      state = reducer(state, addClass(makeClass('cls-1', { level: 4 })));
      state = reducer(state, initLevelOrder());
      state = reducer(
        state,
        splitClass({ classId: 'cls-1', firstRunLevel: 2, newEntryId: 'cls-1b' }),
      );
      const first = state.character.classes.classes[0];
      const second = state.character.classes.classes[1];
      expect(first.splitGroup).toBeDefined();
      expect(second.splitGroup).toBe(first.splitGroup);
    });
  });
});

// ---------------------------------------------------------------------------
// Templates
// ---------------------------------------------------------------------------

describe('characterEntrySlice — templates', () => {
  describe('addTemplate', () => {
    it('pushes a paid template to appliedTemplates and sets isDirty', () => {
      const tpl = makeTemplate('tpl-1');
      const state = reducer(makeInitialState(), addTemplate(tpl));
      expect(state.character.appliedTemplates).toHaveLength(1);
      expect(state.isDirty).toBe(true);
    });

    it('pushes a free grant to grantedBonuses', () => {
      const tpl = makeTemplate('tpl-1', {
        isFreeGrant: true,
        name: 'Free Grant',
        freeGrantNote: 'desc',
      });
      const state = reducer(makeInitialState(), addTemplate(tpl));
      expect(state.character.grantedBonuses).toHaveLength(1);
      expect(state.character.appliedTemplates).toHaveLength(0);
    });
  });

  describe('removeTemplate', () => {
    it('removes a paid template by id', () => {
      let state = reducer(makeInitialState(), addTemplate(makeTemplate('tpl-1')));
      state = reducer(state, addTemplate(makeTemplate('tpl-2')));
      state = reducer(state, removeTemplate('tpl-1'));
      expect(state.character.appliedTemplates).toHaveLength(1);
      expect(state.character.appliedTemplates[0].id).toBe('tpl-2');
      expect(state.isDirty).toBe(true);
    });

    it('is a no-op when id is not found', () => {
      let state = reducer(makeInitialState(), addTemplate(makeTemplate('tpl-1')));
      state = reducer(state, removeTemplate('does-not-exist'));
      expect(state.character.appliedTemplates).toHaveLength(1);
    });

    it('sweeps companions granted by the removed template', () => {
      let state = reducer(makeInitialState(), addTemplate(makeTemplate('tpl-1')));
      state = reducer(
        state,
        addCompanion({
          instanceId: 'comp-1',
          sourceEntryId: 'wolf',
          name: 'Shadow',
          grantedBy: { type: 'template', templateId: 'tpl-1' },
          effectiveProgressionLevel: 5,
        }),
      );
      state = reducer(state, removeTemplate('tpl-1'));
      expect(state.character.appliedTemplates).toHaveLength(0);
      expect(state.character.companions).toHaveLength(0);
    });

    it('does not sweep companions granted by a different template', () => {
      let state = reducer(makeInitialState(), addTemplate(makeTemplate('tpl-1')));
      state = reducer(state, addTemplate(makeTemplate('tpl-2')));
      state = reducer(
        state,
        addCompanion({
          instanceId: 'comp-1',
          sourceEntryId: 'wolf',
          name: 'Shadow',
          grantedBy: { type: 'template', templateId: 'tpl-2' },
          effectiveProgressionLevel: 5,
        }),
      );
      state = reducer(state, removeTemplate('tpl-1'));
      expect(state.character.companions).toHaveLength(1);
    });
  });

  describe('updateTemplate', () => {
    it('replaces the matching paid template entry', () => {
      let state = reducer(
        makeInitialState(),
        addTemplate(makeTemplate('tpl-1', { name: 'Old Name' })),
      );
      const updated = makeTemplate('tpl-1', { name: 'New Name' });
      state = reducer(state, updateTemplate(updated));
      expect(state.character.appliedTemplates[0].name).toBe('New Name');
      expect(state.isDirty).toBe(true);
    });

    it('is a no-op when id is not found', () => {
      let state = reducer(
        makeInitialState(),
        addTemplate(makeTemplate('tpl-1', { name: 'Original' })),
      );
      state = reducer(state, updateTemplate(makeTemplate('does-not-exist', { name: 'Changed' })));
      expect(state.character.appliedTemplates[0].name).toBe('Original');
    });
  });

  describe('reorderTemplates', () => {
    it('reorders templates by the provided id array', () => {
      let state = makeInitialState();
      state = reducer(state, addTemplate(makeTemplate('tpl-1')));
      state = reducer(state, addTemplate(makeTemplate('tpl-2')));
      state = reducer(state, addTemplate(makeTemplate('tpl-3')));
      state = reducer(state, reorderTemplates(['tpl-3', 'tpl-1', 'tpl-2']));
      expect(state.character.appliedTemplates.map((t) => t.id)).toEqual([
        'tpl-3',
        'tpl-1',
        'tpl-2',
      ]);
      expect(state.isDirty).toBe(true);
    });
  });

  describe('setTemplateAcquiredAtECL', () => {
    it('sets acquiredAtCharacterLevel on the matching template', () => {
      let state = reducer(makeInitialState(), addTemplate(makeTemplate('tpl-1')));
      state = reducer(state, setTemplateAcquiredAtECL({ id: 'tpl-1', acquiredAtECL: 7 }));
      expect(state.character.appliedTemplates[0].acquiredAtCharacterLevel).toBe(7);
      expect(state.isDirty).toBe(true);
    });

    it('can clear acquiredAtCharacterLevel by setting undefined', () => {
      let state = reducer(
        makeInitialState(),
        addTemplate(makeTemplate('tpl-1', { acquiredAtCharacterLevel: 7 })),
      );
      state = reducer(state, setTemplateAcquiredAtECL({ id: 'tpl-1', acquiredAtECL: undefined }));
      expect(state.character.appliedTemplates[0].acquiredAtCharacterLevel).toBeUndefined();
    });

    it('is a no-op when id is not found', () => {
      let state = reducer(makeInitialState(), addTemplate(makeTemplate('tpl-1')));
      state = reducer(state, setTemplateAcquiredAtECL({ id: 'does-not-exist', acquiredAtECL: 7 }));
      expect(state.character.appliedTemplates[0].acquiredAtCharacterLevel).toBeUndefined();
    });
  });

  describe('resolveTemplateChoice', () => {
    function makeChoiceDef(): TemplateDefinition {
      return {
        id: 'celestial-blessed-creature',
        name: 'Celestial-Blessed Creature',
        description: 'Test',
        crAdjustment: 1,
        acquisitionType: 'acquired',
        isSimpleTemplate: false,
        features: [],
        sourceInfo: { type: 'third_party', publisher: 'Test', publication: 'Test' },
        visibility: 'global',
        rev: 1,
        verificationStatus: 'needs_review',
        choices: [
          {
            id: 'celestial-type',
            label: 'Celestial Type',
            optionSource: 'inline',
            optionGroups: [
              {
                id: 'g1',
                name: '',
                options: [
                  {
                    id: 'astral-deva',
                    name: 'Astral Deva',
                    description: 'Stunning Strike',
                    grantsFeature: {
                      id: 'stunning-strike',
                      scalingType: 'flat',
                      name: 'Stunning Strike 5/day',
                      description: 'Fort or stunned 1d6 rounds',
                      activationMode: 'action',
                      resourcePool: {
                        id: 'stunning_strike_uses',
                        name: 'Stunning Strike',
                        rechargeOn: 'rest',
                        maxFormula: '5',
                        restRecoveryMode: 'full',
                      },
                    },
                  },
                  {
                    id: 'avoral',
                    name: 'Avoral',
                    description: 'Wind Wall at will',
                    grantsFeature: {
                      id: 'wind-wall',
                      scalingType: 'flat',
                      name: 'Wind Wall at will',
                      description: 'Wind Wall spell-like ability usable at will.',
                      activationMode: 'toggle',
                    },
                  },
                ],
              },
            ],
          },
        ],
      } as TemplateDefinition;
    }

    it('updates templateChoices and features on the matching AppliedTemplate', () => {
      let state = reducer(
        makeInitialState(),
        addTemplate(makeTemplate('tpl-1', { templateId: 'celestial-blessed-creature' })),
      );
      const tplId = state.character.appliedTemplates[0].id!;
      state = reducer(
        state,
        resolveTemplateChoice({
          appliedTemplateId: tplId,
          templateDefinition: makeChoiceDef(),
          choiceId: 'celestial-type',
          selectionId: 'astral-deva',
        }),
      );
      const tpl = state.character.appliedTemplates[0];
      expect(tpl.templateChoices).toEqual([
        { choiceId: 'celestial-type', selection: 'astral-deva' },
      ]);
      expect(tpl.features).toHaveLength(1);
      expect(tpl.features![0].name).toBe('Stunning Strike 5/day');
      expect(state.isDirty).toBe(true);
    });

    it('is a no-op when appliedTemplateId does not match any template', () => {
      let state = reducer(
        makeInitialState(),
        addTemplate(makeTemplate('tpl-1', { templateId: 'celestial-blessed-creature' })),
      );
      const before = state.character.appliedTemplates[0];
      // Reset isDirty so we can verify the no-op dispatch does not set it.
      state = { ...state, isDirty: false };
      state = reducer(
        state,
        resolveTemplateChoice({
          appliedTemplateId: 'wrong-id',
          templateDefinition: makeChoiceDef(),
          choiceId: 'celestial-type',
          selectionId: 'astral-deva',
        }),
      );
      expect(state.character.appliedTemplates[0]).toEqual(before);
      expect(state.isDirty).toBe(false);
    });

    it('re-selection to different option replaces injected feature by derived id with no duplicate', () => {
      let state = reducer(
        makeInitialState(),
        addTemplate(makeTemplate('tpl-1', { templateId: 'celestial-blessed-creature' })),
      );
      const tplId = state.character.appliedTemplates[0].id!;
      const def = makeChoiceDef();
      state = reducer(
        state,
        resolveTemplateChoice({
          appliedTemplateId: tplId,
          templateDefinition: def,
          choiceId: 'celestial-type',
          selectionId: 'astral-deva',
        }),
      );
      state = reducer(
        state,
        resolveTemplateChoice({
          appliedTemplateId: tplId,
          templateDefinition: def,
          choiceId: 'celestial-type',
          selectionId: 'avoral',
        }),
      );
      const tpl = state.character.appliedTemplates[0];
      expect(tpl.templateChoices).toEqual([{ choiceId: 'celestial-type', selection: 'avoral' }]);
      expect(tpl.features).toHaveLength(1);
      expect(tpl.features![0]).toMatchObject({
        name: 'Wind Wall at will',
        id: 'celestial-blessed-creature__choice__celestial-type',
      });
    });

    it('same-option re-selection is idempotent: no duplicate features and selection unchanged', () => {
      let state = reducer(
        makeInitialState(),
        addTemplate(makeTemplate('tpl-1', { templateId: 'celestial-blessed-creature' })),
      );
      const tplId = state.character.appliedTemplates[0].id!;
      const def = makeChoiceDef();
      state = reducer(
        state,
        resolveTemplateChoice({
          appliedTemplateId: tplId,
          templateDefinition: def,
          choiceId: 'celestial-type',
          selectionId: 'astral-deva',
        }),
      );
      // Reset isDirty so the second (idempotent) dispatch is the only signal.
      state = { ...state, isDirty: false };
      state = reducer(
        state,
        resolveTemplateChoice({
          appliedTemplateId: tplId,
          templateDefinition: def,
          choiceId: 'celestial-type',
          selectionId: 'astral-deva',
        }),
      );
      const tpl = state.character.appliedTemplates[0];
      expect(tpl.templateChoices).toEqual([
        { choiceId: 'celestial-type', selection: 'astral-deva' },
      ]);
      expect(tpl.features).toHaveLength(1);
      expect(tpl.features![0].name).toBe('Stunning Strike 5/day');
      expect(state.isDirty).toBe(false);
    });

    it('does not mutate state for unknown choiceId', () => {
      let state = reducer(
        makeInitialState(),
        addTemplate(makeTemplate('tpl-1', { templateId: 'celestial-blessed-creature' })),
      );
      const tplId = state.character.appliedTemplates[0].id!;
      const stateBefore = state;

      state = reducer(
        state,
        resolveTemplateChoice({
          appliedTemplateId: tplId,
          templateDefinition: makeChoiceDef(),
          choiceId: 'unknown-choice-id',
          selectionId: 'some-option-id',
        }),
      );

      expect(state.character.appliedTemplates[0]).toBe(stateBefore.character.appliedTemplates[0]);
      expect(state.isDirty).toBe(stateBefore.isDirty);
    });
  });
});

// ---------------------------------------------------------------------------
// Combat
// ---------------------------------------------------------------------------

describe('characterEntrySlice — combat', () => {
  describe('setCombatField', () => {
    it('sets currentHP and sets isDirty', () => {
      const state = reducer(makeInitialState(), setCombatField({ field: 'currentHP', value: 42 }));
      expect(state.character.combatStats.hitPoints.current).toBe(42);
      expect(state.isDirty).toBe(true);
    });

    it('can set speedFly', () => {
      const state = reducer(makeInitialState(), setCombatField({ field: 'speedFly', value: 60 }));
      expect(state.character.combatStats.movement.fly).toBe(60);
    });

    it('can set saveFortMisc', () => {
      const state = reducer(
        makeInitialState(),
        setCombatField({ field: 'saveFortMisc', value: 2 }),
      );
      expect(state.character.combatStats.savingThrows.fortitude.misc).toBe(2);
    });

    it('can set speedLand', () => {
      const state = reducer(makeInitialState(), setCombatField({ field: 'speedLand', value: 20 }));
      expect(state.character.combatStats.movement.base).toBe(20);
    });
  });
});

// ---------------------------------------------------------------------------
// Skills
// ---------------------------------------------------------------------------

describe('characterEntrySlice — skills', () => {
  describe('setSkillEntry', () => {
    it('sets a skill entry by key and sets isDirty', () => {
      const entry = { ranks: 5, misc: 2 };
      const state = reducer(makeInitialState(), setSkillEntry({ skillKey: 'perception', entry }));
      const skill = state.character.skills.perception as { ranks: number; misc: number };
      expect(skill.ranks).toBe(5);
      expect(skill.misc).toBe(2);
      expect(state.isDirty).toBe(true);
    });

    it('overwrites an existing skill entry', () => {
      let state = reducer(
        makeInitialState(),
        setSkillEntry({ skillKey: 'perception', entry: { ranks: 3, misc: 0 } }),
      );
      state = reducer(
        state,
        setSkillEntry({ skillKey: 'perception', entry: { ranks: 7, misc: 1 } }),
      );
      const skill = state.character.skills.perception as { ranks: number; misc: number };
      expect(skill.ranks).toBe(7);
      expect(skill.misc).toBe(1);
    });
  });

  describe('removeSkillEntry', () => {
    it('resets a skill entry ranks and misc to 0 and sets isDirty', () => {
      let state = reducer(
        makeInitialState(),
        setSkillEntry({ skillKey: 'perception', entry: { ranks: 5, misc: 2 } }),
      );
      state = reducer(state, removeSkillEntry('perception'));
      const skill = state.character.skills.perception as { ranks: number; misc: number };
      expect(skill.ranks).toBe(0);
      expect(skill.misc).toBe(0);
      expect(state.isDirty).toBe(true);
    });

    it('is a no-op when key does not exist in standard skills', () => {
      const initial = makeInitialState();
      const state = reducer(initial, removeSkillEntry('nonexistent-skill-key'));
      // isDirty should not be set since nothing changed
      expect(state.isDirty).toBe(false);
    });
  });
});

// ---------------------------------------------------------------------------
// Traits
// ---------------------------------------------------------------------------

describe('characterEntrySlice — traits', () => {
  describe('addTrait', () => {
    it('pushes a trait and sets isDirty', () => {
      const trait = makeTrait('trait-1');
      const state = reducer(makeInitialState(), addTrait(trait));
      expect(state.character.traits.traits).toHaveLength(1);
      expect(state.character.traits.traits[0].id).toBe('trait-1');
      expect(state.isDirty).toBe(true);
    });
  });

  describe('removeTrait', () => {
    it('removes the trait with the matching id', () => {
      let state = reducer(makeInitialState(), addTrait(makeTrait('trait-1')));
      state = reducer(state, addTrait(makeTrait('trait-2')));
      state = reducer(state, removeTrait('trait-1'));
      expect(state.character.traits.traits).toHaveLength(1);
      expect(state.character.traits.traits[0].id).toBe('trait-2');
      expect(state.isDirty).toBe(true);
    });

    it('is a no-op when id is not found', () => {
      let state = reducer(makeInitialState(), addTrait(makeTrait('trait-1')));
      state = reducer(state, removeTrait('does-not-exist'));
      expect(state.character.traits.traits).toHaveLength(1);
    });
  });
});

// ---------------------------------------------------------------------------
// Feats
// ---------------------------------------------------------------------------

describe('characterEntrySlice — feats', () => {
  describe('addFeatSlot', () => {
    it('adds an empty feat entry (placeholder slot) and sets isDirty', () => {
      const state = reducer(makeInitialState(), addFeatSlot(makeFeatSlotInput('slot-1', 1)));
      expect(state.character.feats.feats).toHaveLength(1);
      expect(state.character.feats.feats[0].featId).toBe('');
      expect(state.isDirty).toBe(true);
    });

    it('keeps feats sorted by grantedAtLevel', () => {
      let state = makeInitialState();
      state = reducer(state, addFeatSlot(makeFeatSlotInput('slot-3', 5)));
      state = reducer(state, addFeatSlot(makeFeatSlotInput('slot-1', 1)));
      state = reducer(state, addFeatSlot(makeFeatSlotInput('slot-2', 3)));
      expect(state.character.feats.feats.map((f) => f.grantedAtLevel)).toEqual([1, 3, 5]);
    });
  });

  describe('removeFeatSlot', () => {
    it('removes the slot with the matching source key', () => {
      let state = reducer(makeInitialState(), addFeatSlot(makeFeatSlotInput('level_1', 1)));
      state = reducer(state, addFeatSlot(makeFeatSlotInput('level_3', 3)));
      state = reducer(state, removeFeatSlot('level_1'));
      expect(state.character.feats.feats).toHaveLength(1);
      expect(state.character.feats.feats[0].grantedAtLevel).toBe(3);
      expect(state.isDirty).toBe(true);
    });
  });

  describe('assignFeat', () => {
    it('assigns a feat to the matching slot', () => {
      let state = reducer(makeInitialState(), addFeatSlot(makeFeatSlotInput('level_1', 1)));
      state = reducer(
        state,
        assignFeat({ slotId: 'level_1', featId: 'feat-power-attack', featName: 'Power Attack' }),
      );
      const feat = state.character.feats.feats[0];
      expect(feat.featId).toBe('feat-power-attack');
      expect(feat.name).toBe('Power Attack');
      expect(state.isDirty).toBe(true);
    });

    it('creates a new entry when slotId is not found in existing feats', () => {
      const state = reducer(
        makeInitialState(),
        assignFeat({ slotId: 'level_1', featId: 'feat-x', featName: 'X' }),
      );
      expect(state.character.feats.feats).toHaveLength(1);
      expect(state.character.feats.feats[0].featId).toBe('feat-x');
    });
  });

  describe('unassignFeat', () => {
    it('clears feat from the matching slot', () => {
      let state = reducer(makeInitialState(), addFeatSlot(makeFeatSlotInput('level_1', 1)));
      state = reducer(state, assignFeat({ slotId: 'level_1', featId: 'feat-x', featName: 'X' }));
      state = reducer(state, unassignFeat('level_1'));
      const feat = state.character.feats.feats[0];
      expect(feat.featId).toBe('');
      expect(feat.name).toBe('');
      expect(state.isDirty).toBe(true);
    });
  });

  describe('toggleFeatPrereqOverride', () => {
    it('toggles prereqOverride on the matching feat', () => {
      let state = reducer(makeInitialState(), addFeatSlot(makeFeatSlotInput('level_1', 1)));
      state = reducer(state, toggleFeatPrereqOverride('level_1'));
      expect(state.character.feats.feats[0].prereqOverride).toBe(true);
      state = reducer(state, toggleFeatPrereqOverride('level_1'));
      expect(state.character.feats.feats[0].prereqOverride).toBe(false);
      expect(state.isDirty).toBe(true);
    });
  });

  describe('syncFeatSlotsFromClasses', () => {
    // Slot display is computed on read via computeFeatSlots; feats.feats stores only
    // assigned feats (featId !== '') and bonus slots. Empty placeholders are always
    // pruned — the UI does not need them persisted.

    it('Test A (slot source): addClass does not persist empty placeholder entries — only assigned feats are stored', () => {
      // Fighter level 1 = HD 1 → one level feat slot exists in the computed list,
      // but feats.feats should be empty because nothing has been assigned yet.
      const state = reducer(
        makeInitialState(),
        addClass(makeClass('cls-1', { name: 'Fighter', level: 1 })),
      );
      expect(state.character.feats.feats).toHaveLength(0);
    });

    it('Test B (pruning): reducing class level removes assigned feats whose slots no longer exist', () => {
      // Fighter level 3 = HD 1 and HD 3 → two computed feat slots
      let state = reducer(
        makeInitialState(),
        addClass(makeClass('cls-1', { name: 'Fighter', level: 3 })),
      );
      // Assign a real feat to the level-3 slot so pruning has something to remove
      state = reducer(
        state,
        assignFeat({ slotId: 'level_3', featId: 'feat-power-attack', featName: 'Power Attack' }),
      );
      expect(state.character.feats.feats.some((f) => f.source === 'level_3')).toBe(true);

      // Drop to level 1 → HD 3 slot no longer exists; the assigned feat should be pruned
      state = reducer(state, updateClassLevel({ id: 'cls-1', level: 1 }));
      expect(state.character.feats.feats.some((f) => f.source === 'level_3')).toBe(false);
    });

    it('Test C (pruning preserves valid slots): assigned feat at a still-valid level survives a level change', () => {
      // Fighter level 3 → assign feat at level 1, then drop to level 1
      // The level-1 slot still exists, so the feat should be kept
      let state = reducer(
        makeInitialState(),
        addClass(makeClass('cls-1', { name: 'Fighter', level: 3 })),
      );
      state = reducer(
        state,
        assignFeat({ slotId: 'level_1', featId: 'feat-dodge', featName: 'Dodge' }),
      );
      state = reducer(state, updateClassLevel({ id: 'cls-1', level: 1 }));
      expect(
        state.character.feats.feats.some(
          (f) => f.source === 'level_1' && f.featId === 'feat-dodge',
        ),
      ).toBe(true);
    });
  });

  describe('syncLevelIncrementSlots', () => {
    // Pathfinder 1e: one ability score increase at every 4 HD (4, 8, 12, 16, 20).
    // syncLevelIncrementSlots is called from addClass, removeClass, updateClassLevel,
    // updateClassArchetype, and splitClass.

    it('addClass at level 4 creates exactly one increment slot at HD 4', () => {
      const state = reducer(makeInitialState(), addClass(makeClass('cls-1', { level: 4 })));
      const slots = state.character.levelIncrementSlots;
      expect(slots).toHaveLength(1);
      expect(slots[0].atHD).toBe(4);
      expect(slots[0].ability).toBeNull();
    });

    it('addClass at level 8 creates two increment slots at HD 4 and HD 8', () => {
      const state = reducer(makeInitialState(), addClass(makeClass('cls-1', { level: 8 })));
      const slots = state.character.levelIncrementSlots;
      expect(slots).toHaveLength(2);
      expect(slots.map((s: LevelIncrementSlot) => s.atHD)).toEqual([4, 8]);
      expect(slots.every((s: LevelIncrementSlot) => s.ability === null)).toBe(true);
    });

    it('leveling from 4 to 8 adds the second slot without losing the first or its selection', () => {
      // Start at level 4, assign an ability to the first slot
      let state = reducer(makeInitialState(), addClass(makeClass('cls-1', { level: 4 })));
      state = reducer(state, setLevelIncrementAbility({ atHD: 4, ability: 'str' }));
      expect(state.character.levelIncrementSlots[0].ability).toBe('str');

      // Level up to 8
      state = reducer(state, updateClassLevel({ id: 'cls-1', level: 8 }));
      const slots = state.character.levelIncrementSlots;
      expect(slots).toHaveLength(2);
      // First slot preserved with its selection
      expect(slots[0].atHD).toBe(4);
      expect(slots[0].ability).toBe('str');
      // New slot at HD 8 is empty
      expect(slots[1].atHD).toBe(8);
      expect(slots[1].ability).toBeNull();
    });

    it('removing a class that drops total HD below a multiple of 4 removes the corresponding slot', () => {
      // Two classes: Fighter 4 + Rogue 4 = 8 total HD → two slots
      let state = reducer(
        makeInitialState(),
        addClass(makeClass('cls-1', { name: 'Fighter', level: 4 })),
      );
      state = reducer(state, addClass(makeClass('cls-2', { name: 'Rogue', level: 4 })));
      expect(state.character.levelIncrementSlots).toHaveLength(2);

      // Remove the second class → 4 total HD → one slot
      state = reducer(state, removeClass('cls-2'));
      expect(state.character.levelIncrementSlots).toHaveLength(1);
      expect(state.character.levelIncrementSlots[0].atHD).toBe(4);
    });

    it('removing all classes clears all increment slots', () => {
      let state = reducer(makeInitialState(), addClass(makeClass('cls-1', { level: 8 })));
      expect(state.character.levelIncrementSlots).toHaveLength(2);
      state = reducer(state, removeClass('cls-1'));
      expect(state.character.levelIncrementSlots).toHaveLength(0);
    });

    it('slots exist at the correct milestone levels (4, 8, 12, 16, 20)', () => {
      const state = reducer(makeInitialState(), addClass(makeClass('cls-1', { level: 20 })));
      const slots = state.character.levelIncrementSlots;
      expect(slots).toHaveLength(5);
      expect(slots.map((s: LevelIncrementSlot) => s.atHD)).toEqual([4, 8, 12, 16, 20]);
    });

    it('no slots are created for HD below 4', () => {
      const state = reducer(makeInitialState(), addClass(makeClass('cls-1', { level: 3 })));
      expect(state.character.levelIncrementSlots).toHaveLength(0);
    });

    it('levelIncrements counts on ability scores reflect slot selections', () => {
      let state = reducer(makeInitialState(), addClass(makeClass('cls-1', { level: 8 })));
      state = reducer(state, setLevelIncrementAbility({ atHD: 4, ability: 'int' }));
      state = reducer(state, setLevelIncrementAbility({ atHD: 8, ability: 'int' }));
      expect(state.character.abilityScores.int.levelIncrements).toBe(2);
      expect(state.character.abilityScores.str.levelIncrements).toBe(0);
    });

    it('levelIncrements counts update correctly when a slot is removed via level reduction', () => {
      let state = reducer(makeInitialState(), addClass(makeClass('cls-1', { level: 8 })));
      state = reducer(state, setLevelIncrementAbility({ atHD: 4, ability: 'wis' }));
      state = reducer(state, setLevelIncrementAbility({ atHD: 8, ability: 'wis' }));
      expect(state.character.abilityScores.wis.levelIncrements).toBe(2);

      // Drop to level 4 — HD 8 slot removed
      state = reducer(state, updateClassLevel({ id: 'cls-1', level: 4 }));
      expect(state.character.levelIncrementSlots).toHaveLength(1);
      expect(state.character.abilityScores.wis.levelIncrements).toBe(1);
    });

    it('splitClass preserves existing slot selections across the split', () => {
      // Start with a level-8 class and assign both slots
      let state = reducer(makeInitialState(), addClass(makeClass('cls-1', { level: 8 })));
      state = reducer(state, setLevelIncrementAbility({ atHD: 4, ability: 'dex' }));
      state = reducer(state, setLevelIncrementAbility({ atHD: 8, ability: 'con' }));

      // Split: first run = 4, second run = 4 (total still 8)
      state = reducer(
        state,
        splitClass({ classId: 'cls-1', firstRunLevel: 4, newEntryId: 'cls-1b' }),
      );

      const slots = state.character.levelIncrementSlots;
      expect(slots).toHaveLength(2);
      expect(slots[0]).toEqual({ atHD: 4, ability: 'dex' });
      expect(slots[1]).toEqual({ atHD: 8, ability: 'con' });
    });
  });
});

// ---------------------------------------------------------------------------
// Spellcasting
// ---------------------------------------------------------------------------

describe('characterEntrySlice — spellcasting', () => {
  describe('addSpellcastingPool', () => {
    it('pushes a pool and sets isDirty', () => {
      const pool = makePool('pool-1');
      const state = reducer(makeInitialState(), addSpellcastingPool(pool));
      expect(state.character.spellcasting.pools).toHaveLength(1);
      expect(state.character.spellcasting.pools[0].id).toBe('pool-1');
      expect(state.isDirty).toBe(true);
    });
  });

  describe('removeSpellcastingPool', () => {
    it('removes the pool with the matching id', () => {
      let state = reducer(makeInitialState(), addSpellcastingPool(makePool('pool-1')));
      state = reducer(state, addSpellcastingPool(makePool('pool-2')));
      state = reducer(state, removeSpellcastingPool('pool-1'));
      expect(state.character.spellcasting.pools).toHaveLength(1);
      expect(state.character.spellcasting.pools[0].id).toBe('pool-2');
      expect(state.isDirty).toBe(true);
    });

    it('is a no-op when id is not found', () => {
      let state = reducer(makeInitialState(), addSpellcastingPool(makePool('pool-1')));
      state = reducer(state, removeSpellcastingPool('does-not-exist'));
      expect(state.character.spellcasting.pools).toHaveLength(1);
    });
  });

  describe('updatePoolCastingAbility', () => {
    it('updates spellAbility on the matching pool', () => {
      let state = reducer(makeInitialState(), addSpellcastingPool(makePool('pool-1')));
      state = reducer(state, updatePoolCastingAbility({ poolId: 'pool-1', ability: 'wis' }));
      expect(state.character.spellcasting.pools[0].spellAbility).toBe('WIS');
      expect(state.isDirty).toBe(true);
    });

    it('is a no-op when poolId is not found', () => {
      let state = reducer(makeInitialState(), addSpellcastingPool(makePool('pool-1')));
      state = reducer(
        state,
        updatePoolCastingAbility({ poolId: 'does-not-exist', ability: 'wis' }),
      );
      expect(state.character.spellcasting.pools[0].spellAbility).toBe('INT');
    });
  });

  describe('setSpellsPerDayMisc', () => {
    it('sets the misc value at the given spell level index', () => {
      let state = reducer(makeInitialState(), addSpellcastingPool(makePool('pool-1')));
      state = reducer(state, setSpellsPerDayMisc({ poolId: 'pool-1', spellLevel: 3, value: 2 }));
      expect(state.character.spellcasting.pools[0].spellsPerDay.misc[3]).toBe(2);
      expect(state.isDirty).toBe(true);
    });

    it('is a no-op when poolId is not found', () => {
      let state = reducer(makeInitialState(), addSpellcastingPool(makePool('pool-1')));
      state = reducer(
        state,
        setSpellsPerDayMisc({ poolId: 'does-not-exist', spellLevel: 3, value: 2 }),
      );
      expect(state.character.spellcasting.pools[0].spellsPerDay.misc[3]).toBe(0);
    });
  });
});

// ---------------------------------------------------------------------------
// Equipment
// ---------------------------------------------------------------------------

describe('characterEntrySlice — equipment', () => {
  describe('addEquipment', () => {
    it('pushes an item and sets isDirty', () => {
      const item = makeEquipmentItem('eq-1');
      const state = reducer(makeInitialState(), addEquipment(item));
      expect(state.character.editorEquipment).toHaveLength(1);
      expect(state.character.editorEquipment![0]).toEqual(item);
      expect(state.isDirty).toBe(true);
    });
  });

  describe('removeEquipment', () => {
    it('removes by id', () => {
      let state = reducer(makeInitialState(), addEquipment(makeEquipmentItem('eq-1')));
      state = reducer(state, addEquipment(makeEquipmentItem('eq-2')));
      state = reducer(state, removeEquipment('eq-1'));
      expect(state.character.editorEquipment).toHaveLength(1);
      expect(state.character.editorEquipment![0].id).toBe('eq-2');
      expect(state.isDirty).toBe(true);
    });

    it('is a no-op when id is not found', () => {
      let state = reducer(makeInitialState(), addEquipment(makeEquipmentItem('eq-1')));
      state = reducer(state, removeEquipment('does-not-exist'));
      expect(state.character.editorEquipment).toHaveLength(1);
    });
  });

  describe('updateEquipment', () => {
    it('replaces the matching item', () => {
      let state = reducer(makeInitialState(), addEquipment(makeEquipmentItem('eq-1')));
      const updated: EditorEquipmentItem = {
        ...makeEquipmentItem('eq-1'),
        name: 'Cloak of Resistance +3',
      };
      state = reducer(state, updateEquipment(updated));
      expect(state.character.editorEquipment![0].name).toBe('Cloak of Resistance +3');
      expect(state.isDirty).toBe(true);
    });

    it('is a no-op when id is not found', () => {
      let state = reducer(makeInitialState(), addEquipment(makeEquipmentItem('eq-1')));
      state = reducer(
        state,
        updateEquipment({ ...makeEquipmentItem('does-not-exist'), name: 'Ring of Wishes' }),
      );
      expect(state.character.editorEquipment![0].name).toBe('Cloak of Resistance +1');
    });
  });

  describe('assignEquipmentSlot', () => {
    it('assigns slot and clears containerId', () => {
      let state = reducer(
        makeInitialState(),
        addEquipment(makeEquipmentItem('eq-1', { containerId: 'bag-1' })),
      );
      state = reducer(state, assignEquipmentSlot({ id: 'eq-1', slot: 'belt' }));
      expect(state.character.editorEquipment![0].slot).toBe('belt');
      expect(state.character.editorEquipment![0].containerId).toBeUndefined();
      expect(state.isDirty).toBe(true);
    });

    it('is a no-op when id is not found', () => {
      let state = reducer(makeInitialState(), addEquipment(makeEquipmentItem('eq-1')));
      state = reducer(state, assignEquipmentSlot({ id: 'does-not-exist', slot: 'belt' }));
      expect(state.character.editorEquipment![0].slot).toBeUndefined();
    });
  });

  describe('unassignEquipmentSlot', () => {
    it('clears slot and sets unequippedFromSlot', () => {
      let state = reducer(
        makeInitialState(),
        addEquipment(makeEquipmentItem('eq-1', { slot: 'belt' })),
      );
      state = reducer(state, unassignEquipmentSlot('eq-1'));
      expect(state.character.editorEquipment![0].slot).toBeUndefined();
      expect(state.character.editorEquipment![0].unequippedFromSlot).toBe('belt');
      expect(state.isDirty).toBe(true);
    });

    it('sets containerId to first container when one exists', () => {
      let state = reducer(
        makeInitialState(),
        addEquipment(makeEquipmentItem('bag-1', { isContainer: true })),
      );
      state = reducer(state, addEquipment(makeEquipmentItem('eq-1', { slot: 'belt' })));
      state = reducer(state, unassignEquipmentSlot('eq-1'));
      const item = state.character.editorEquipment!.find((e) => e.id === 'eq-1')!;
      expect(item.containerId).toBe('bag-1');
    });

    it('leaves containerId undefined when no container exists', () => {
      let state = reducer(
        makeInitialState(),
        addEquipment(makeEquipmentItem('eq-1', { slot: 'belt' })),
      );
      state = reducer(state, unassignEquipmentSlot('eq-1'));
      expect(state.character.editorEquipment![0].containerId).toBeUndefined();
    });

    it('clears slot in all cases', () => {
      let state = reducer(
        makeInitialState(),
        addEquipment(makeEquipmentItem('bag-1', { isContainer: true })),
      );
      state = reducer(state, addEquipment(makeEquipmentItem('eq-1', { slot: 'head' })));
      state = reducer(state, unassignEquipmentSlot('eq-1'));
      const item = state.character.editorEquipment!.find((e) => e.id === 'eq-1')!;
      expect(item.slot).toBeUndefined();
    });
  });

  describe('assignEquipmentContainer', () => {
    it('assigns containerId and clears slot', () => {
      let state = reducer(
        makeInitialState(),
        addEquipment(makeEquipmentItem('eq-1', { slot: 'belt' })),
      );
      state = reducer(state, assignEquipmentContainer({ id: 'eq-1', containerId: 'bag-1' }));
      expect(state.character.editorEquipment![0].containerId).toBe('bag-1');
      expect(state.character.editorEquipment![0].slot).toBeUndefined();
      expect(state.isDirty).toBe(true);
    });
  });
});

// ---------------------------------------------------------------------------
// Notes
// ---------------------------------------------------------------------------

describe('characterEntrySlice — notes', () => {
  it('setCharacterNotes updates notes and sets isDirty', () => {
    const state = reducer(makeInitialState(), setCharacterNotes('Grew up in Absalom.'));
    expect(state.character.info.notes).toBe('Grew up in Absalom.');
    expect(state.isDirty).toBe(true);
  });
});

// ---------------------------------------------------------------------------
// Equipment effects via recalculate()
// ---------------------------------------------------------------------------

describe('characterEntrySlice — equipment effects via recalculate()', () => {
  const wisEffect: Effect = {
    type: 'bonus',
    bonusType: BonusType.ENHANCEMENT,
    target: 'ability.wis',
    value: 4,
    source: 'Headband of Inspired Wisdom +4',
  };

  it('addEquipment with a slotted item applies effects via recalculate()', () => {
    const item = makeEquipmentItem('head-1', { slot: 'head', effects: [wisEffect] });
    const state = reducer(makeInitialState(), addEquipment(item));
    expect(state.character.abilityScores.wis.bonuses.enhancement[0]?.value ?? 0).toBe(4);
  });

  it('addEquipment with no slot does not apply effects', () => {
    const item = makeEquipmentItem('head-1', { effects: [wisEffect] });
    const state = reducer(makeInitialState(), addEquipment(item));
    expect(state.character.abilityScores.wis.bonuses.enhancement[0]?.value ?? 0).toBe(0);
  });

  it('removeEquipment reverts effects immediately', () => {
    const item = makeEquipmentItem('head-1', { slot: 'head', effects: [wisEffect] });
    let state = reducer(makeInitialState(), addEquipment(item));
    state = reducer(state, removeEquipment('head-1'));
    expect(state.character.abilityScores.wis.bonuses.enhancement[0]?.value ?? 0).toBe(0);
  });

  it('two enhancement items to same ability — pipeline takes the higher value', () => {
    const item1 = makeEquipmentItem('belt-1', {
      slot: 'belt',
      effects: [
        {
          type: 'bonus',
          bonusType: BonusType.ENHANCEMENT,
          target: 'ability.str',
          value: 2,
          source: 'Belt +2',
        } as Effect,
        {
          type: 'bonus',
          bonusType: BonusType.ENHANCEMENT,
          target: 'ability.con',
          value: 2,
          source: 'Belt +2',
        } as Effect,
      ],
    });
    const item2 = makeEquipmentItem('belt-2', {
      slot: 'belt',
      effects: [
        {
          type: 'bonus',
          bonusType: BonusType.ENHANCEMENT,
          target: 'ability.str',
          value: 4,
          source: 'Belt +4',
        } as Effect,
      ],
    });
    let state = reducer(makeInitialState(), addEquipment(item1));
    state = reducer(state, addEquipment(item2));
    expect(state.character.abilityScores.str.bonuses.enhancement[0]?.value ?? 0).toBe(4);
    expect(state.character.abilityScores.con.bonuses.enhancement[0]?.value ?? 0).toBe(2);
  });

  it('updateEquipment triggers recalculate() and applies updated effects', () => {
    const item = makeEquipmentItem('head-1', { slot: 'head', effects: [wisEffect] });
    let state = reducer(makeInitialState(), addEquipment(item));
    const updatedItem = {
      ...item,
      effects: [{ ...wisEffect, value: 6, source: 'Headband of Inspired Wisdom +6' }],
    };
    state = reducer(state, updateEquipment(updatedItem));
    expect(state.character.abilityScores.wis.bonuses.enhancement[0]?.value ?? 0).toBe(6);
  });

  it('assignEquipmentSlot triggers recalculate() and applies item effects', () => {
    const item = makeEquipmentItem('head-1', { effects: [wisEffect] });
    let state = reducer(makeInitialState(), addEquipment(item));
    state = reducer(state, assignEquipmentSlot({ id: 'head-1', slot: 'head' }));
    expect(state.character.abilityScores.wis.bonuses.enhancement[0]?.value ?? 0).toBe(4);
  });

  it('unassignEquipmentSlot triggers recalculate() and reverts item effects', () => {
    const item = makeEquipmentItem('head-1', { slot: 'head', effects: [wisEffect] });
    let state = reducer(makeInitialState(), addEquipment(item));
    state = reducer(state, unassignEquipmentSlot('head-1'));
    expect(state.character.abilityScores.wis.bonuses.enhancement[0]?.value ?? 0).toBe(0);
  });

  it('reequipFromContainer triggers recalculate() and reapplies item effects', () => {
    const item = makeEquipmentItem('head-1', { slot: 'head', effects: [wisEffect] });
    let state = reducer(makeInitialState(), addEquipment(item));
    state = reducer(state, unassignEquipmentSlot('head-1'));
    expect(state.character.abilityScores.wis.bonuses.enhancement[0]?.value ?? 0).toBe(0);
    state = reducer(state, reequipFromContainer('head-1'));
    expect(state.character.abilityScores.wis.bonuses.enhancement[0]?.value ?? 0).toBe(4);
  });

  it('orbiting ioun stone (isOrbiting:true, no slot) applies effects via recalculate()', () => {
    const item = makeEquipmentItem('ioun-1', {
      isOrbiting: true,
      effects: [
        {
          type: 'bonus',
          bonusType: BonusType.ENHANCEMENT,
          target: 'ability.int',
          value: 2,
          source: 'Pale Blue Rhomboid Ioun Stone',
        } as Effect,
      ],
    });
    const state = reducer(makeInitialState(), addEquipment(item));
    expect(state.character.abilityScores.int.bonuses.enhancement[0]?.value ?? 0).toBe(2);
  });

  it('inventory item (no slot, not orbiting) is excluded by recalculate()', () => {
    const item = makeEquipmentItem('wand-1', {
      effects: [
        {
          type: 'bonus',
          bonusType: BonusType.ENHANCEMENT,
          target: 'ability.int',
          value: 2,
          source: 'carried item',
        } as Effect,
      ],
    });
    const state = reducer(makeInitialState(), addEquipment(item));
    expect(state.character.abilityScores.int.bonuses.enhancement[0]?.value ?? 0).toBe(0);
  });

  it('assignEquipmentContainer clears slot bonus immediately via recalculate()', () => {
    const item = makeEquipmentItem('head-1', { slot: 'head', effects: [wisEffect] });
    let state = reducer(makeInitialState(), addEquipment(item));
    expect(state.character.abilityScores.wis.bonuses.enhancement[0]?.value ?? 0).toBe(4);
    state = reducer(state, assignEquipmentContainer({ id: 'head-1', containerId: 'bag-1' }));
    expect(state.character.abilityScores.wis.bonuses.enhancement[0]?.value ?? 0).toBe(0);
  });

  it('assignEquipmentContainer clears bonuses from orbiting items immediately', () => {
    const item = makeEquipmentItem('ioun-1', {
      isOrbiting: true,
      effects: [
        {
          type: 'bonus',
          bonusType: BonusType.ENHANCEMENT,
          target: 'ability.int',
          value: 2,
          source: 'Pale Blue Rhomboid Ioun Stone',
        } as Effect,
      ],
    });
    let state = reducer(makeInitialState(), addEquipment(item));
    expect(state.character.abilityScores.int.bonuses.enhancement[0]?.value ?? 0).toBe(2);
    state = reducer(state, assignEquipmentContainer({ id: 'ioun-1', containerId: 'bag-1' }));
    expect(state.character.abilityScores.int.bonuses.enhancement[0]?.value ?? 0).toBe(0);
  });
});

// ---------------------------------------------------------------------------
// Companions
// ---------------------------------------------------------------------------

describe('characterEntrySlice — companions', () => {
  const druidGrant = (
    classEntryId = 'class-druid',
    className = 'Druid',
  ): Parameters<typeof addCompanion>[0]['grantedBy'] => ({
    type: 'class',
    classEntryId,
    className,
    classChoiceId: 'druid-nature-bond',
  });

  it('addCompanion seeds a new CompanionInstance with empty collections', () => {
    const state = reducer(
      makeInitialState(),
      addCompanion({
        instanceId: 'comp-1',
        sourceEntryId: 'wolf',
        name: 'Shadow',
        grantedBy: druidGrant(),
        effectiveProgressionLevel: 10,
      }),
    );
    expect(state.character.companions).toHaveLength(1);
    const comp = state.character.companions[0];
    expect(comp.instanceId).toBe('comp-1');
    expect(comp.name).toBe('Shadow');
    expect(comp.sourceEntryId).toBe('wolf');
    expect(comp.effectiveProgressionLevel).toBe(10);
    expect(comp.feats).toEqual([]);
    expect(comp.tricks).toEqual([]);
    expect(comp.appliedTemplates).toEqual([]);
    expect(state.isDirty).toBe(true);
  });

  it('removeCompanion drops by instanceId', () => {
    let state = reducer(
      makeInitialState(),
      addCompanion({
        instanceId: 'comp-1',
        sourceEntryId: 'wolf',
        name: 'Shadow',
        grantedBy: druidGrant(),
        effectiveProgressionLevel: 5,
      }),
    );
    state = reducer(
      state,
      addCompanion({
        instanceId: 'comp-2',
        sourceEntryId: 'leopard',
        name: 'Ember',
        grantedBy: druidGrant(),
        effectiveProgressionLevel: 5,
      }),
    );
    state = reducer(state, removeCompanion('comp-1'));
    expect(state.character.companions.map((c) => c.instanceId)).toEqual(['comp-2']);
  });

  it('renameCompanion updates the name on the matched instance', () => {
    let state = reducer(
      makeInitialState(),
      addCompanion({
        instanceId: 'comp-1',
        sourceEntryId: 'wolf',
        name: 'Shadow',
        grantedBy: druidGrant(),
        effectiveProgressionLevel: 1,
      }),
    );
    state = reducer(state, renameCompanion({ instanceId: 'comp-1', name: 'Umbra' }));
    expect(state.character.companions[0].name).toBe('Umbra');
  });

  it('updateCompanionEffectiveLevel changes progression level only', () => {
    let state = reducer(
      makeInitialState(),
      addCompanion({
        instanceId: 'comp-1',
        sourceEntryId: 'wolf',
        name: 'Shadow',
        grantedBy: druidGrant(),
        effectiveProgressionLevel: 4,
      }),
    );
    state = reducer(
      state,
      updateCompanionEffectiveLevel({ instanceId: 'comp-1', effectiveProgressionLevel: 7 }),
    );
    expect(state.character.companions[0].effectiveProgressionLevel).toBe(7);
    expect(state.character.companions[0].name).toBe('Shadow');
  });

  it('removeCompanionsGrantedByClass sweeps matches and keeps others', () => {
    let state = reducer(
      makeInitialState(),
      addCompanion({
        instanceId: 'comp-1',
        sourceEntryId: 'wolf',
        name: 'Shadow',
        grantedBy: druidGrant('class-druid'),
        effectiveProgressionLevel: 5,
      }),
    );
    state = reducer(
      state,
      addCompanion({
        instanceId: 'comp-2',
        sourceEntryId: 'leopard',
        name: 'Ember',
        grantedBy: druidGrant('class-ranger'),
        effectiveProgressionLevel: 5,
      }),
    );
    state = reducer(state, removeCompanionsGrantedByClass('class-druid'));
    expect(state.character.companions.map((c) => c.instanceId)).toEqual(['comp-2']);
  });

  it('removeClass cascades: companions granted by that class are dropped', () => {
    let state = reducer(makeInitialState(), addClass(makeClass('class-druid', { name: 'Druid' })));
    state = reducer(
      state,
      addCompanion({
        instanceId: 'comp-1',
        sourceEntryId: 'wolf',
        name: 'Shadow',
        grantedBy: druidGrant('class-druid'),
        effectiveProgressionLevel: 5,
      }),
    );
    state = reducer(state, removeClass('class-druid'));
    expect(state.character.classes.classes).toHaveLength(0);
    expect(state.character.companions).toHaveLength(0);
  });

  it('template-granted companions are NOT swept when an unrelated class is removed', () => {
    let state = reducer(makeInitialState(), addClass(makeClass('class-druid', { name: 'Druid' })));
    state = reducer(
      state,
      addCompanion({
        instanceId: 'comp-1',
        sourceEntryId: 'wolf',
        name: 'Shadow',
        grantedBy: { type: 'template', templateId: 'druid-simple' },
        effectiveProgressionLevel: 5,
      }),
    );
    state = reducer(state, removeClass('class-druid'));
    expect(state.character.companions).toHaveLength(1);
  });

  // ---- Phase 1.5: companion edit actions -----------------------------------

  describe('companion edit actions', () => {
    function seedCompanion() {
      return reducer(
        makeInitialState(),
        addCompanion({
          instanceId: 'comp-1',
          sourceEntryId: 'wolf',
          name: 'Shadow',
          grantedBy: druidGrant(),
          effectiveProgressionLevel: 10,
        }),
      );
    }

    it('setCompanionAbilityOverride: sets a STR override', () => {
      let state = seedCompanion();
      state = reducer(
        state,
        setCompanionAbilityOverride({ instanceId: 'comp-1', ability: 'STR', value: 20 }),
      );
      expect(state.character.companions[0].abilityScoreOverrides.STR).toBe(20);
    });

    it('setCompanionAbilityOverride: clears an override with value null', () => {
      let state = seedCompanion();
      state = reducer(
        state,
        setCompanionAbilityOverride({ instanceId: 'comp-1', ability: 'STR', value: 20 }),
      );
      state = reducer(
        state,
        setCompanionAbilityOverride({ instanceId: 'comp-1', ability: 'STR', value: null }),
      );
      expect(state.character.companions[0].abilityScoreOverrides.STR).toBeUndefined();
    });

    it('setCompanionAbilityOverride: no-op on unknown instanceId', () => {
      const state = reducer(
        seedCompanion(),
        setCompanionAbilityOverride({ instanceId: 'missing', ability: 'DEX', value: 22 }),
      );
      expect(state.character.companions[0].abilityScoreOverrides.DEX).toBeUndefined();
    });

    it('setCompanionHP: updates max field', () => {
      const state = reducer(
        seedCompanion(),
        setCompanionHP({ instanceId: 'comp-1', field: 'max', value: 48 }),
      );
      expect(state.character.companions[0].hp.max).toBe(48);
    });

    it('setCompanionHP: independently updates all four fields', () => {
      let state = seedCompanion();
      state = reducer(state, setCompanionHP({ instanceId: 'comp-1', field: 'max', value: 48 }));
      state = reducer(state, setCompanionHP({ instanceId: 'comp-1', field: 'current', value: 32 }));
      state = reducer(state, setCompanionHP({ instanceId: 'comp-1', field: 'temp', value: 5 }));
      state = reducer(
        state,
        setCompanionHP({ instanceId: 'comp-1', field: 'nonlethal', value: 10 }),
      );
      expect(state.character.companions[0].hp).toEqual({
        max: 48,
        current: 32,
        temp: 5,
        nonlethal: 10,
      });
    });

    it('swapCompanionForm: changes sourceEntryId, preserves other fields', () => {
      let state = seedCompanion();
      state = reducer(
        state,
        setCompanionAbilityOverride({ instanceId: 'comp-1', ability: 'STR', value: 22 }),
      );
      state = reducer(state, swapCompanionForm({ instanceId: 'comp-1', sourceEntryId: 'leopard' }));
      expect(state.character.companions[0].sourceEntryId).toBe('leopard');
      expect(state.character.companions[0].name).toBe('Shadow');
      expect(state.character.companions[0].abilityScoreOverrides.STR).toBe(22);
    });

    it('setCompanionNotes: updates notes text', () => {
      const state = reducer(
        seedCompanion(),
        setCompanionNotes({ instanceId: 'comp-1', notes: 'Prefers to flank.' }),
      );
      expect(state.character.companions[0].notes).toBe('Prefers to flank.');
    });

    // ---- Phase 1.6: feats / tricks / skill ranks -------------------------

    it('addCompanionFeat: appends a feat to the list', () => {
      const state = reducer(
        seedCompanion(),
        addCompanionFeat({
          instanceId: 'comp-1',
          feat: {
            featId: 'toughness',
            name: 'Toughness',
            hdWhenTaken: 3,
            active: true,
            choices: {},
          },
        }),
      );
      expect(state.character.companions[0].feats).toHaveLength(1);
      expect(state.character.companions[0].feats[0].featId).toBe('toughness');
    });

    it('addCompanionFeat: allows duplicates (same featId twice)', () => {
      let state = seedCompanion();
      state = reducer(
        state,
        addCompanionFeat({
          instanceId: 'comp-1',
          feat: {
            featId: 'toughness',
            name: 'Toughness',
            hdWhenTaken: 3,
            active: true,
            choices: {},
          },
        }),
      );
      state = reducer(
        state,
        addCompanionFeat({
          instanceId: 'comp-1',
          feat: {
            featId: 'toughness',
            name: 'Toughness',
            hdWhenTaken: 6,
            active: true,
            choices: {},
          },
        }),
      );
      expect(state.character.companions[0].feats).toHaveLength(2);
    });

    it('removeCompanionFeatAt: removes the feat at the given index', () => {
      let state = seedCompanion();
      state = reducer(
        state,
        addCompanionFeat({
          instanceId: 'comp-1',
          feat: {
            featId: 'toughness',
            name: 'Toughness',
            hdWhenTaken: 3,
            active: true,
            choices: {},
          },
        }),
      );
      state = reducer(
        state,
        addCompanionFeat({
          instanceId: 'comp-1',
          feat: {
            featId: 'weapon-focus',
            name: 'Weapon Focus',
            hdWhenTaken: 6,
            active: true,
            choices: {},
          },
        }),
      );
      state = reducer(state, removeCompanionFeatAt({ instanceId: 'comp-1', index: 0 }));
      expect(state.character.companions[0].feats.map((f) => f.featId)).toEqual(['weapon-focus']);
    });

    it('removeCompanionFeatAt: no-op on out-of-range index', () => {
      const state = reducer(
        seedCompanion(),
        removeCompanionFeatAt({ instanceId: 'comp-1', index: 5 }),
      );
      expect(state.character.companions[0].feats).toHaveLength(0);
    });

    it('toggleCompanionTrick: adds a trick the first time, removes it the second', () => {
      let state = seedCompanion();
      state = reducer(state, toggleCompanionTrick({ instanceId: 'comp-1', trick: 'attack' }));
      expect(state.character.companions[0].tricks).toEqual(['attack']);
      state = reducer(state, toggleCompanionTrick({ instanceId: 'comp-1', trick: 'attack' }));
      expect(state.character.companions[0].tricks).toEqual([]);
    });

    it('toggleCompanionTrick: preserves other tricks on toggle', () => {
      let state = seedCompanion();
      state = reducer(state, toggleCompanionTrick({ instanceId: 'comp-1', trick: 'attack' }));
      state = reducer(state, toggleCompanionTrick({ instanceId: 'comp-1', trick: 'stay' }));
      state = reducer(state, toggleCompanionTrick({ instanceId: 'comp-1', trick: 'attack' }));
      expect(state.character.companions[0].tricks).toEqual(['stay']);
    });

    it('setCompanionSkillRank: sets ranks for a skill', () => {
      const state = reducer(
        seedCompanion(),
        setCompanionSkillRank({ instanceId: 'comp-1', skill: 'Stealth', ranks: 3 }),
      );
      expect(state.character.companions[0].skillRanks.Stealth).toBe(3);
    });

    it('setCompanionSkillRank: clears the key when ranks drops to 0', () => {
      let state = reducer(
        seedCompanion(),
        setCompanionSkillRank({ instanceId: 'comp-1', skill: 'Stealth', ranks: 3 }),
      );
      state = reducer(
        state,
        setCompanionSkillRank({ instanceId: 'comp-1', skill: 'Stealth', ranks: 0 }),
      );
      expect(state.character.companions[0].skillRanks.Stealth).toBeUndefined();
    });

    it('companion reducers: no-op on unknown instanceId', () => {
      const base = seedCompanion();
      const a = reducer(
        base,
        addCompanionFeat({
          instanceId: 'missing',
          feat: { featId: 'x', name: 'X', hdWhenTaken: 1, active: true, choices: {} },
        }),
      );
      const b = reducer(a, toggleCompanionTrick({ instanceId: 'missing', trick: 'attack' }));
      const c = reducer(
        b,
        setCompanionSkillRank({ instanceId: 'missing', skill: 'Stealth', ranks: 3 }),
      );
      expect(c.character.companions[0].feats).toHaveLength(0);
      expect(c.character.companions[0].tricks).toHaveLength(0);
      expect(c.character.companions[0].skillRanks).toEqual({});
    });

    // ---- Phase 1.7: background / templates ---------------------------------

    it('addCompanion: seeds background as an empty string', () => {
      const state = seedCompanion();
      expect(state.character.companions[0].background).toBe('');
    });

    it('setCompanionBackground: stores the full narrative string', () => {
      const state = reducer(
        seedCompanion(),
        setCompanionBackground({
          instanceId: 'comp-1',
          background: 'Raised in the Whisperwood. Bonded to Rissi at the Verdant Trial.',
        }),
      );
      expect(state.character.companions[0].background).toBe(
        'Raised in the Whisperwood. Bonded to Rissi at the Verdant Trial.',
      );
    });

    it('setCompanionBackground: overwrites, does not append', () => {
      let state = reducer(
        seedCompanion(),
        setCompanionBackground({ instanceId: 'comp-1', background: 'first draft' }),
      );
      state = reducer(
        state,
        setCompanionBackground({ instanceId: 'comp-1', background: 'second draft' }),
      );
      expect(state.character.companions[0].background).toBe('second draft');
    });

    it('addCompanionTemplate: appends an AppliedTemplate to the list', () => {
      const state = reducer(
        seedCompanion(),
        addCompanionTemplate({
          instanceId: 'comp-1',
          template: {
            templateId: 'celestial',
            name: 'Celestial',
            appliedAs: 'cr',
            cr: 1,
            acquisitionType: 'inherited',
            paidTiers: [],
            sourceId: 'celestial',
            sourceRev: 1,
          },
        }),
      );
      expect(state.character.companions[0].appliedTemplates).toHaveLength(1);
      expect(state.character.companions[0].appliedTemplates[0].templateId).toBe('celestial');
    });

    it('addCompanionTemplate: allows two instances of the same template', () => {
      let state = seedCompanion();
      const make = (): Parameters<typeof addCompanionTemplate>[0] => ({
        instanceId: 'comp-1',
        template: {
          templateId: 'advanced',
          name: 'Advanced',
          appliedAs: 'cr',
          cr: 1,
          acquisitionType: 'either',
          paidTiers: [],
          sourceId: 'advanced',
          sourceRev: 1,
        },
      });
      state = reducer(state, addCompanionTemplate(make()));
      state = reducer(state, addCompanionTemplate(make()));
      expect(state.character.companions[0].appliedTemplates).toHaveLength(2);
    });

    it('removeCompanionTemplateAt: removes the template at the given index', () => {
      let state = seedCompanion();
      for (const id of ['half-celestial', 'advanced', 'young']) {
        state = reducer(
          state,
          addCompanionTemplate({
            instanceId: 'comp-1',
            template: {
              templateId: id,
              name: id,
              appliedAs: 'cr',
              cr: 1,
              acquisitionType: 'inherited',
              paidTiers: [],
              sourceId: id,
              sourceRev: 1,
            },
          }),
        );
      }
      state = reducer(state, removeCompanionTemplateAt({ instanceId: 'comp-1', index: 1 }));
      expect(state.character.companions[0].appliedTemplates.map((t) => t.templateId)).toEqual([
        'half-celestial',
        'young',
      ]);
    });

    it('removeCompanionTemplateAt: no-op on out-of-range index', () => {
      const state = reducer(
        seedCompanion(),
        removeCompanionTemplateAt({ instanceId: 'comp-1', index: 4 }),
      );
      expect(state.character.companions[0].appliedTemplates).toHaveLength(0);
    });

    it('updateCompanionTemplateAt: patches a single field', () => {
      let state = reducer(
        seedCompanion(),
        addCompanionTemplate({
          instanceId: 'comp-1',
          template: {
            templateId: 'fiendish',
            name: 'Fiendish',
            appliedAs: 'cr',
            cr: 1,
            acquisitionType: 'inherited',
            paidTiers: [],
            sourceId: 'fiendish',
            sourceRev: 1,
          },
        }),
      );
      state = reducer(
        state,
        updateCompanionTemplateAt({
          instanceId: 'comp-1',
          index: 0,
          patch: { acquisitionType: 'acquired', acquiredAtCharacterLevel: 8 },
        }),
      );
      expect(state.character.companions[0].appliedTemplates[0].acquisitionType).toBe('acquired');
      expect(state.character.companions[0].appliedTemplates[0].acquiredAtCharacterLevel).toBe(8);
      // Other fields untouched.
      expect(state.character.companions[0].appliedTemplates[0].templateId).toBe('fiendish');
    });

    it('updateCompanionTemplateAt: can change applied-as from LA to CR', () => {
      let state = reducer(
        seedCompanion(),
        addCompanionTemplate({
          instanceId: 'comp-1',
          template: {
            templateId: 'aasimar',
            name: 'Aasimar',
            appliedAs: 'la',
            la: 1,
            acquisitionType: 'inherited',
            paidTiers: [],
            sourceId: 'aasimar',
            sourceRev: 1,
          },
        }),
      );
      state = reducer(
        state,
        updateCompanionTemplateAt({
          instanceId: 'comp-1',
          index: 0,
          patch: { appliedAs: 'cr', cr: 1, la: undefined },
        }),
      );
      expect(state.character.companions[0].appliedTemplates[0].appliedAs).toBe('cr');
      expect(state.character.companions[0].appliedTemplates[0].cr).toBe(1);
      expect(state.character.companions[0].appliedTemplates[0].la).toBeUndefined();
    });

    it('updateCompanionTemplateAt: no-op on out-of-range index', () => {
      const state = reducer(
        seedCompanion(),
        updateCompanionTemplateAt({
          instanceId: 'comp-1',
          index: 7,
          patch: { acquisitionType: 'acquired' },
        }),
      );
      expect(state.character.companions[0].appliedTemplates).toHaveLength(0);
    });

    it('1.7 reducers: no-op on unknown instanceId', () => {
      const base = seedCompanion();
      const a = reducer(base, setCompanionBackground({ instanceId: 'missing', background: 'x' }));
      const b = reducer(
        a,
        addCompanionTemplate({
          instanceId: 'missing',
          template: {
            templateId: 'x',
            name: 'X',
            appliedAs: 'cr',
            cr: 1,
            acquisitionType: 'either',
            paidTiers: [],
            sourceId: 'x',
            sourceRev: 1,
          },
        }),
      );
      const c = reducer(b, removeCompanionTemplateAt({ instanceId: 'missing', index: 0 }));
      const d = reducer(
        c,
        updateCompanionTemplateAt({
          instanceId: 'missing',
          index: 0,
          patch: { acquisitionType: 'acquired' },
        }),
      );
      expect(d.character.companions[0].background).toBe('');
      expect(d.character.companions[0].appliedTemplates).toHaveLength(0);
    });

    // ---- Phase 1.7: equipment ---------------------------------------------

    const makeItem = (
      overrides: Partial<Parameters<typeof equipCompanionMagicItem>[0]['item']> = {},
    ): Parameters<typeof equipCompanionMagicItem>[0]['item'] => ({
      instanceId: 'item-1',
      definitionId: 'amulet-of-natural-armor',
      name: 'Amulet of Natural Armor +1',
      equipped: false,
      identified: true,
      ...overrides,
    });

    it('equipCompanionMagicItem: adds item to magicItems and maps slot→instance', () => {
      const state = reducer(
        seedCompanion(),
        equipCompanionMagicItem({
          instanceId: 'comp-1',
          slot: 'neck',
          item: makeItem(),
        }),
      );
      const comp = state.character.companions[0];
      expect(comp.equipment.magicItems).toHaveLength(1);
      expect(comp.equipment.magicItems[0].instanceId).toBe('item-1');
      expect(comp.equipment.magicItems[0].equipped).toBe(true);
      expect(comp.equipment.magicItems[0].equippedSlot).toBe('neck');
      expect(comp.equipment.equippedSlots['neck']).toBe('item-1');
    });

    it('equipCompanionMagicItem: ring slot tags instance as ring_left', () => {
      const state = reducer(
        seedCompanion(),
        equipCompanionMagicItem({
          instanceId: 'comp-1',
          slot: 'ring',
          item: makeItem({ instanceId: 'ring-1', name: 'Ring of Protection +1' }),
        }),
      );
      const comp = state.character.companions[0];
      expect(comp.equipment.magicItems[0].equippedSlot).toBe('ring_left');
      expect(comp.equipment.equippedSlots['ring']).toBe('ring-1');
    });

    it('equipCompanionMagicItem: replacing in a slot displaces the prior item', () => {
      let state = reducer(
        seedCompanion(),
        equipCompanionMagicItem({
          instanceId: 'comp-1',
          slot: 'neck',
          item: makeItem({ instanceId: 'item-1', name: 'Amulet A' }),
        }),
      );
      state = reducer(
        state,
        equipCompanionMagicItem({
          instanceId: 'comp-1',
          slot: 'neck',
          item: makeItem({ instanceId: 'item-2', name: 'Amulet B' }),
        }),
      );
      const comp = state.character.companions[0];
      expect(comp.equipment.magicItems).toHaveLength(1);
      expect(comp.equipment.magicItems[0].instanceId).toBe('item-2');
      expect(comp.equipment.equippedSlots['neck']).toBe('item-2');
    });

    it('equipCompanionMagicItem: different slots coexist', () => {
      let state = reducer(
        seedCompanion(),
        equipCompanionMagicItem({
          instanceId: 'comp-1',
          slot: 'neck',
          item: makeItem({ instanceId: 'item-1' }),
        }),
      );
      state = reducer(
        state,
        equipCompanionMagicItem({
          instanceId: 'comp-1',
          slot: 'armor',
          item: makeItem({ instanceId: 'item-2', name: 'Barding +1' }),
        }),
      );
      const comp = state.character.companions[0];
      expect(comp.equipment.magicItems).toHaveLength(2);
      expect(Object.keys(comp.equipment.equippedSlots)).toHaveLength(2);
    });

    it('unequipCompanionMagicItem: removes the item and clears the slot entry', () => {
      let state = reducer(
        seedCompanion(),
        equipCompanionMagicItem({
          instanceId: 'comp-1',
          slot: 'neck',
          item: makeItem(),
        }),
      );
      state = reducer(state, unequipCompanionMagicItem({ instanceId: 'comp-1', slot: 'neck' }));
      const comp = state.character.companions[0];
      expect(comp.equipment.magicItems).toHaveLength(0);
      expect(comp.equipment.equippedSlots['neck']).toBeUndefined();
    });

    it('unequipCompanionMagicItem: no-op when slot is empty', () => {
      const state = reducer(
        seedCompanion(),
        unequipCompanionMagicItem({ instanceId: 'comp-1', slot: 'neck' }),
      );
      expect(state.character.companions[0].equipment.magicItems).toHaveLength(0);
    });

    it('equipment reducers: no-op on unknown instanceId', () => {
      const base = seedCompanion();
      const a = reducer(
        base,
        equipCompanionMagicItem({
          instanceId: 'missing',
          slot: 'neck',
          item: makeItem(),
        }),
      );
      const b = reducer(a, unequipCompanionMagicItem({ instanceId: 'missing', slot: 'neck' }));
      expect(b.character.companions[0].equipment.magicItems).toHaveLength(0);
    });
  });
});

// ---------------------------------------------------------------------------
// Eidolons
// ---------------------------------------------------------------------------

function makeStateWithSummoner() {
  const summoner: ClassEntry = {
    id: 'summoner-1',
    name: 'Summoner (Unchained)',
    level: 5,
    sourceSystem: 'pf1e',
    classChoices: [],
    prereqOverride: false,
  } as unknown as ClassEntry;
  return reducer(makeInitialState(), addClass(summoner));
}

describe('characterEntrySlice — eidolons', () => {
  describe('addEidolon', () => {
    it('pushes a new eidolon linked to the owning class entry', () => {
      const state = reducer(
        makeStateWithSummoner(),
        addEidolon({
          classEntryId: 'summoner-1',
          edition: 'unchained',
          baseForm: 'biped',
          subtype: 'angel',
          name: 'Aziel',
        }),
      );
      expect(state.character.eidolons).toHaveLength(1);
      const eid = state.character.eidolons[0];
      expect(eid.name).toBe('Aziel');
      expect(eid.baseForm).toBe('biped');
      expect(eid.subtype).toBe('angel');
      expect(eid.summonerClassEntryId).toBe('summoner-1');
      expect(eid.selectedEvolutions).toEqual([]);
      expect(state.isDirty).toBe(true);
    });

    it('uses a fallback name when none is provided', () => {
      const state = reducer(
        makeStateWithSummoner(),
        addEidolon({
          classEntryId: 'summoner-1',
          edition: 'apg',
          baseForm: 'quadruped',
        }),
      );
      expect(state.character.eidolons[0].name).toBe('Eidolon');
    });

    it('is a no-op when the owning class entry does not exist', () => {
      const state = reducer(
        makeInitialState(),
        addEidolon({ classEntryId: 'missing', edition: 'apg', baseForm: 'biped' }),
      );
      expect(state.character.eidolons).toHaveLength(0);
      expect(state.isDirty).toBe(false);
    });
  });

  describe('removeEidolon', () => {
    it('removes by id', () => {
      let state = reducer(
        makeStateWithSummoner(),
        addEidolon({ classEntryId: 'summoner-1', edition: 'apg', baseForm: 'biped' }),
      );
      const id = state.character.eidolons[0].id;
      state = reducer(state, removeEidolon(id));
      expect(state.character.eidolons).toHaveLength(0);
      expect(state.isDirty).toBe(true);
    });

    it('is a no-op when id is not found', () => {
      const state = reducer(makeInitialState(), removeEidolon('does-not-exist'));
      expect(state.isDirty).toBe(false);
    });
  });

  describe('renameEidolon', () => {
    it('updates the name', () => {
      let state = reducer(
        makeStateWithSummoner(),
        addEidolon({ classEntryId: 'summoner-1', edition: 'apg', baseForm: 'biped' }),
      );
      const id = state.character.eidolons[0].id;
      state = reducer(state, renameEidolon({ eidolonId: id, name: 'Companion' }));
      expect(state.character.eidolons[0].name).toBe('Companion');
    });
  });

  describe('setEidolonBaseForm / setEidolonSubtype', () => {
    it('updates base form and subtype independently', () => {
      let state = reducer(
        makeStateWithSummoner(),
        addEidolon({
          classEntryId: 'summoner-1',
          edition: 'unchained',
          baseForm: 'biped',
          subtype: 'angel',
        }),
      );
      const id = state.character.eidolons[0].id;
      state = reducer(state, setEidolonBaseForm({ eidolonId: id, baseForm: 'serpentine' }));
      state = reducer(state, setEidolonSubtype({ eidolonId: id, subtype: 'protean' }));
      expect(state.character.eidolons[0].baseForm).toBe('serpentine');
      expect(state.character.eidolons[0].subtype).toBe('protean');
    });

    it('setEidolonSubtype with undefined clears the subtype', () => {
      let state = reducer(
        makeStateWithSummoner(),
        addEidolon({
          classEntryId: 'summoner-1',
          edition: 'unchained',
          baseForm: 'biped',
          subtype: 'angel',
        }),
      );
      const id = state.character.eidolons[0].id;
      state = reducer(state, setEidolonSubtype({ eidolonId: id, subtype: undefined }));
      expect(state.character.eidolons[0].subtype).toBeUndefined();
    });

    it('setEidolonBaseForm removes invalidated evolution instances', () => {
      let state = reducer(
        makeStateWithSummoner(),
        addEidolon({ classEntryId: 'summoner-1', edition: 'apg', baseForm: 'biped' }),
      );
      const id = state.character.eidolons[0].id;
      state = reducer(
        state,
        addSelectedEvolution({ eidolonId: id, evolutionId: 'evo-limbs-arms', metadata: undefined }),
      );
      const instanceId = state.character.eidolons[0].selectedEvolutions[0].instanceId;
      state = reducer(
        state,
        setEidolonBaseForm({
          eidolonId: id,
          baseForm: 'serpentine',
          removeEvolutionInstanceIds: [instanceId],
        }),
      );
      expect(state.character.eidolons[0].baseForm).toBe('serpentine');
      expect(state.character.eidolons[0].selectedEvolutions).toHaveLength(0);
    });

    it('setEidolonSubtype removes invalidated evolution instances', () => {
      let state = reducer(
        makeStateWithSummoner(),
        addEidolon({ classEntryId: 'summoner-1', edition: 'apg', baseForm: 'biped' }),
      );
      const id = state.character.eidolons[0].id;
      state = reducer(
        state,
        addSelectedEvolution({ eidolonId: id, evolutionId: 'evo-claws', metadata: undefined }),
      );
      const instanceId = state.character.eidolons[0].selectedEvolutions[0].instanceId;
      state = reducer(
        state,
        setEidolonSubtype({
          eidolonId: id,
          subtype: 'daemon',
          removeEvolutionInstanceIds: [instanceId],
        }),
      );
      expect(state.character.eidolons[0].subtype).toBe('daemon');
      expect(state.character.eidolons[0].selectedEvolutions).toHaveLength(0);
    });
  });

  describe('addSelectedEvolution / removeSelectedEvolution / updateEvolutionMetadata', () => {
    function freshEidolon() {
      let state = reducer(
        makeStateWithSummoner(),
        addEidolon({ classEntryId: 'summoner-1', edition: 'apg', baseForm: 'biped' }),
      );
      const id = state.character.eidolons[0].id;
      return { state, id };
    }

    it('adds a selected evolution with an auto-generated instanceId', () => {
      const { state, id } = freshEidolon();
      const next = reducer(
        state,
        addSelectedEvolution({ eidolonId: id, evolutionId: 'evolution-bite' }),
      );
      expect(next.character.eidolons[0].selectedEvolutions).toHaveLength(1);
      expect(next.character.eidolons[0].selectedEvolutions[0].evolutionId).toBe('evolution-bite');
      expect(next.character.eidolons[0].selectedEvolutions[0].instanceId).toMatch(/^evo-/);
    });

    it('removes by instanceId', () => {
      let { state, id } = freshEidolon();
      state = reducer(
        state,
        addSelectedEvolution({ eidolonId: id, evolutionId: 'evolution-bite' }),
      );
      const instanceId = state.character.eidolons[0].selectedEvolutions[0].instanceId;
      state = reducer(state, removeSelectedEvolution({ eidolonId: id, instanceId }));
      expect(state.character.eidolons[0].selectedEvolutions).toHaveLength(0);
    });

    it('updates metadata on an existing selection', () => {
      let { state, id } = freshEidolon();
      state = reducer(
        state,
        addSelectedEvolution({
          eidolonId: id,
          evolutionId: 'evolution-ability-increase',
          metadata: { ability: 'str' },
        }),
      );
      const instanceId = state.character.eidolons[0].selectedEvolutions[0].instanceId;
      state = reducer(
        state,
        updateEvolutionMetadata({
          eidolonId: id,
          instanceId,
          metadata: { ability: 'dex' },
        }),
      );
      expect(state.character.eidolons[0].selectedEvolutions[0].metadata?.ability).toBe('dex');
    });

    it('rejects additions when already at the hard cap of 30 evolutions', () => {
      let { state, id } = freshEidolon();
      // Add 30 evolutions to reach the cap.
      for (let i = 0; i < 30; i++) {
        state = reducer(
          state,
          addSelectedEvolution({ eidolonId: id, evolutionId: 'evolution-bite' }),
        );
      }
      expect(state.character.eidolons[0].selectedEvolutions).toHaveLength(30);
      // A 31st addition must be silently rejected.
      state = reducer(
        state,
        addSelectedEvolution({ eidolonId: id, evolutionId: 'evolution-claws' }),
      );
      expect(state.character.eidolons[0].selectedEvolutions).toHaveLength(30);
    });
  });

  describe('setEidolonPoolOverride', () => {
    it('sets an override with a reason note', () => {
      let state = reducer(
        makeStateWithSummoner(),
        addEidolon({ classEntryId: 'summoner-1', edition: 'apg', baseForm: 'biped' }),
      );
      const id = state.character.eidolons[0].id;
      state = reducer(
        state,
        setEidolonPoolOverride({ eidolonId: id, value: 25, note: 'DM grant from artifact' }),
      );
      expect(state.character.eidolons[0].poolOverride).toEqual({
        value: 25,
        note: 'DM grant from artifact',
      });
    });

    it('clears the override', () => {
      let state = reducer(
        makeStateWithSummoner(),
        addEidolon({ classEntryId: 'summoner-1', edition: 'apg', baseForm: 'biped' }),
      );
      const id = state.character.eidolons[0].id;
      state = reducer(state, setEidolonPoolOverride({ eidolonId: id, value: 25, note: 'test' }));
      state = reducer(state, setEidolonPoolOverride({ eidolonId: id, clear: true }));
      expect(state.character.eidolons[0].poolOverride).toBeUndefined();
    });
  });

  describe('setBroodmasterShared / removeBroodmasterShared', () => {
    it('adds a shared evolution to the class entry broodmaster state', () => {
      const state = reducer(
        makeStateWithSummoner(),
        setBroodmasterShared({ classEntryId: 'summoner-1', evolutionId: 'evolution-large' }),
      );
      const cls = state.character.classes.classes[0];
      expect(cls.summonerBroodmaster?.sharedEvolutions).toHaveLength(1);
      expect(cls.summonerBroodmaster?.sharedEvolutions[0].evolutionId).toBe('evolution-large');
      expect(cls.summonerBroodmaster?.sharedEvolutions[0].instanceId).toMatch(/^brood-/);
    });

    it('initialises summonerBroodmaster if not present', () => {
      const state = reducer(
        makeStateWithSummoner(),
        setBroodmasterShared({ classEntryId: 'summoner-1', evolutionId: 'evolution-claws' }),
      );
      expect(state.character.classes.classes[0].summonerBroodmaster).toBeDefined();
    });

    it('is a no-op for an unknown classEntryId', () => {
      const state = reducer(
        makeStateWithSummoner(),
        setBroodmasterShared({ classEntryId: 'missing', evolutionId: 'evolution-large' }),
      );
      expect(state.character.classes.classes[0].summonerBroodmaster).toBeUndefined();
    });

    it('removes a shared evolution by instanceId', () => {
      let state = reducer(
        makeStateWithSummoner(),
        setBroodmasterShared({ classEntryId: 'summoner-1', evolutionId: 'evolution-large' }),
      );
      const instanceId =
        state.character.classes.classes[0].summonerBroodmaster!.sharedEvolutions[0].instanceId;
      state = reducer(state, removeBroodmasterShared({ classEntryId: 'summoner-1', instanceId }));
      expect(state.character.classes.classes[0].summonerBroodmaster?.sharedEvolutions).toHaveLength(
        0,
      );
    });

    it('removeBroodmasterShared is a no-op when broodmaster state is absent', () => {
      const initial = makeStateWithSummoner();
      const state = reducer(
        initial,
        removeBroodmasterShared({ classEntryId: 'summoner-1', instanceId: 'nonexistent' }),
      );
      expect(state.character.classes.classes[0].summonerBroodmaster).toBeUndefined();
    });
  });

  describe('setAspectDivert', () => {
    it('sets divertedPoints on the eidolon aspectTransfer', () => {
      let state = reducer(
        makeStateWithSummoner(),
        addEidolon({ classEntryId: 'summoner-1', edition: 'unchained', baseForm: 'biped' }),
      );
      const id = state.character.eidolons[0].id;
      state = reducer(state, setAspectDivert({ eidolonId: id, divertedPoints: 2 }));
      expect(state.character.eidolons[0].aspectTransfer?.divertedPoints).toBe(2);
    });

    it('initialises aspectTransfer if not present', () => {
      let state = reducer(
        makeStateWithSummoner(),
        addEidolon({ classEntryId: 'summoner-1', edition: 'unchained', baseForm: 'biped' }),
      );
      const id = state.character.eidolons[0].id;
      state = reducer(state, setAspectDivert({ eidolonId: id, divertedPoints: 1 }));
      expect(state.character.eidolons[0].aspectTransfer).toBeDefined();
      expect(state.character.eidolons[0].aspectTransfer?.summonerEvolutions).toEqual([]);
    });

    it('clamps to zero when negative value given', () => {
      let state = reducer(
        makeStateWithSummoner(),
        addEidolon({ classEntryId: 'summoner-1', edition: 'unchained', baseForm: 'biped' }),
      );
      const id = state.character.eidolons[0].id;
      state = reducer(state, setAspectDivert({ eidolonId: id, divertedPoints: -3 }));
      expect(state.character.eidolons[0].aspectTransfer?.divertedPoints).toBe(0);
    });

    it('is a no-op for unknown eidolonId', () => {
      const state = reducer(
        makeStateWithSummoner(),
        setAspectDivert({ eidolonId: 'missing', divertedPoints: 2 }),
      );
      expect(state.character.eidolons).toHaveLength(0);
    });

    it('clamps to 6 (Greater Aspect max) when value exceeds the ceiling', () => {
      let state = reducer(
        makeStateWithSummoner(),
        addEidolon({ classEntryId: 'summoner-1', edition: 'unchained', baseForm: 'biped' }),
      );
      const id = state.character.eidolons[0].id;
      state = reducer(state, setAspectDivert({ eidolonId: id, divertedPoints: 100 }));
      expect(state.character.eidolons[0].aspectTransfer?.divertedPoints).toBe(6);
    });
  });

  describe('addSummonerAspectEvolution / removeSummonerAspectEvolution', () => {
    it('adds a summoner aspect evolution with auto-generated instanceId', () => {
      let state = reducer(
        makeStateWithSummoner(),
        addEidolon({ classEntryId: 'summoner-1', edition: 'unchained', baseForm: 'biped' }),
      );
      const id = state.character.eidolons[0].id;
      state = reducer(
        state,
        addSummonerAspectEvolution({ eidolonId: id, evolutionId: 'evolution-bite' }),
      );
      const evos = state.character.eidolons[0].aspectTransfer?.summonerEvolutions ?? [];
      expect(evos).toHaveLength(1);
      expect(evos[0].evolutionId).toBe('evolution-bite');
      expect(evos[0].instanceId).toMatch(/^asp-/);
    });

    it('initialises aspectTransfer if absent before adding', () => {
      let state = reducer(
        makeStateWithSummoner(),
        addEidolon({ classEntryId: 'summoner-1', edition: 'unchained', baseForm: 'biped' }),
      );
      const id = state.character.eidolons[0].id;
      state = reducer(
        state,
        addSummonerAspectEvolution({ eidolonId: id, evolutionId: 'evolution-bite' }),
      );
      expect(state.character.eidolons[0].aspectTransfer?.divertedPoints).toBe(0);
    });

    it('removes a summoner aspect evolution by instanceId', () => {
      let state = reducer(
        makeStateWithSummoner(),
        addEidolon({ classEntryId: 'summoner-1', edition: 'unchained', baseForm: 'biped' }),
      );
      const id = state.character.eidolons[0].id;
      state = reducer(
        state,
        addSummonerAspectEvolution({ eidolonId: id, evolutionId: 'evolution-bite' }),
      );
      const instanceId =
        state.character.eidolons[0].aspectTransfer!.summonerEvolutions[0].instanceId;
      state = reducer(state, removeSummonerAspectEvolution({ eidolonId: id, instanceId }));
      expect(state.character.eidolons[0].aspectTransfer?.summonerEvolutions).toHaveLength(0);
    });

    it('removeSummonerAspectEvolution is a no-op when aspectTransfer is absent', () => {
      let state = reducer(
        makeStateWithSummoner(),
        addEidolon({ classEntryId: 'summoner-1', edition: 'unchained', baseForm: 'biped' }),
      );
      const id = state.character.eidolons[0].id;
      const before = JSON.stringify(state.character.eidolons[0]);
      state = reducer(
        state,
        removeSummonerAspectEvolution({ eidolonId: id, instanceId: 'nonexistent' }),
      );
      expect(JSON.stringify(state.character.eidolons[0])).toBe(before);
    });
  });
});

// ---------------------------------------------------------------------------
// Coverage targets — reducers not exercised elsewhere
// ---------------------------------------------------------------------------

describe('characterEntrySlice — misc state reducers', () => {
  it('setSaving toggles isSaving', () => {
    let state = reducer(undefined, { type: '@@INIT' });
    state = reducer(state, setSaving(true));
    expect(state.isSaving).toBe(true);
    state = reducer(state, setSaving(false));
    expect(state.isSaving).toBe(false);
  });

  it('setSaveError stores and clears error', () => {
    let state = reducer(undefined, { type: '@@INIT' });
    state = reducer(state, setSaveError('write failed'));
    expect(state.saveError).toBe('write failed');
    state = reducer(state, setSaveError(null));
    expect(state.saveError).toBeNull();
  });

  it('applyComputedStats replaces character in-place', () => {
    const state0 = reducer(undefined, { type: '@@INIT' });
    const patched = { ...state0.character, info: { ...state0.character.info, name: 'Patched' } };
    const state1 = reducer(state0, applyComputedStats(patched));
    expect(state1.character.info.name).toBe('Patched');
  });

  it('addOtherBonus stores a typed bonus in manualAbilityBonuses', () => {
    let state = reducer(undefined, { type: '@@INIT' });
    state = reducer(
      state,
      addOtherBonus({ ability: 'str', bonusType: BonusType.MORALE, value: 4, source: 'Rage' }),
    );
    const bonus = state.character.manualAbilityBonuses?.[0];
    expect(bonus?.ability).toBe('str');
    expect(bonus?.bonusType).toBe(BonusType.MORALE);
    expect(bonus?.value).toBe(4);
    expect(bonus?.source).toBe('Rage');
    expect(state.isDirty).toBe(true);
  });

  it('removeOtherBonus removes a bonus by ability-scoped index', () => {
    let state = reducer(undefined, { type: '@@INIT' });
    state = reducer(
      state,
      addOtherBonus({ ability: 'str', bonusType: BonusType.MORALE, value: 4 }),
    );
    state = reducer(
      state,
      addOtherBonus({ ability: 'str', bonusType: BonusType.SACRED, value: 2 }),
    );
    state = reducer(state, removeOtherBonus({ ability: 'str', index: 0 }));
    expect(state.character.manualAbilityBonuses?.length).toBe(1);
    expect(state.character.manualAbilityBonuses?.[0].bonusType).toBe(BonusType.SACRED);
    expect(state.isDirty).toBe(true);
  });

  it('setNotes updates character notes', () => {
    let state = reducer(undefined, { type: '@@INIT' });
    state = reducer(state, setNotes('adventure log'));
    expect(state.character.info.notes).toBe('adventure log');
    expect(state.isDirty).toBe(true);
  });
});

describe('characterEntrySlice — companion reducer no-op guards', () => {
  const addComp = () =>
    addCompanion({
      instanceId: 'comp-1',
      sourceEntryId: 'wolf',
      name: 'Shadow',
      grantedBy: {
        type: 'class',
        classEntryId: 'druid-1',
        className: 'Druid',
        classChoiceId: 'druid-nature-bond',
      },
      effectiveProgressionLevel: 10,
    });

  it('setCompanionHP is no-op for unknown instanceId', () => {
    const s0 = reducer(undefined, { type: '@@INIT' });
    const s1 = reducer(s0, setCompanionHP({ instanceId: 'nope', field: 'max', value: 99 }));
    expect(s1.character.companions).toHaveLength(0);
  });

  it('swapCompanionForm is no-op for unknown instanceId', () => {
    const s0 = reducer(undefined, { type: '@@INIT' });
    const s1 = reducer(s0, swapCompanionForm({ instanceId: 'nope', sourceEntryId: 'cat' }));
    expect(s1.character.companions).toHaveLength(0);
  });

  it('setCompanionNotes is no-op for unknown instanceId', () => {
    const s0 = reducer(undefined, { type: '@@INIT' });
    const s1 = reducer(s0, setCompanionNotes({ instanceId: 'nope', notes: 'x' }));
    expect(s1.character.companions).toHaveLength(0);
  });

  it('addCompanionFeat is no-op for unknown instanceId', () => {
    const s0 = reducer(undefined, { type: '@@INIT' });
    const s1 = reducer(
      s0,
      addCompanionFeat({
        instanceId: 'nope',
        feat: { featId: 'f1', name: 'Dodge', hdWhenTaken: 1, active: true, choices: {} },
      }),
    );
    expect(s1.character.companions).toHaveLength(0);
  });

  it('removeCompanionFeatAt is no-op for unknown instanceId and out-of-bounds index', () => {
    let state = reducer(reducer(undefined, { type: '@@INIT' }), addComp());
    state = reducer(
      state,
      addCompanionFeat({
        instanceId: 'comp-1',
        feat: { featId: 'f1', name: 'Dodge', hdWhenTaken: 1, active: true, choices: {} },
      }),
    );
    // unknown instanceId
    const before = state.character.companions[0].feats.length;
    state = reducer(state, removeCompanionFeatAt({ instanceId: 'nope', index: 0 }));
    expect(state.character.companions[0].feats).toHaveLength(before);
    // out-of-bounds index
    state = reducer(state, removeCompanionFeatAt({ instanceId: 'comp-1', index: 99 }));
    expect(state.character.companions[0].feats).toHaveLength(before);
  });

  it('toggleCompanionTrick is no-op for unknown instanceId', () => {
    const s0 = reducer(undefined, { type: '@@INIT' });
    const s1 = reducer(s0, toggleCompanionTrick({ instanceId: 'nope', trick: 'come' }));
    expect(s1.character.companions).toHaveLength(0);
  });

  it('setCompanionSkillRank is no-op for unknown instanceId', () => {
    const s0 = reducer(undefined, { type: '@@INIT' });
    const s1 = reducer(
      s0,
      setCompanionSkillRank({ instanceId: 'nope', skill: 'perception', ranks: 3 }),
    );
    expect(s1.character.companions).toHaveLength(0);
  });

  it('setCompanionBackground is no-op for unknown instanceId', () => {
    const s0 = reducer(undefined, { type: '@@INIT' });
    const s1 = reducer(s0, setCompanionBackground({ instanceId: 'nope', background: 'hero' }));
    expect(s1.character.companions).toHaveLength(0);
  });

  it('setCompanionHDAbilityIncrease adds new increase and updates existing', () => {
    let state = reducer(reducer(undefined, { type: '@@INIT' }), addComp());
    state = reducer(
      state,
      setCompanionHDAbilityIncrease({ instanceId: 'comp-1', atLevel: 4, ability: 'STR' }),
    );
    expect(state.character.companions[0].hdAbilityIncreases).toEqual([
      { atLevel: 4, ability: 'STR' },
    ]);
    // Update existing entry at same level
    state = reducer(
      state,
      setCompanionHDAbilityIncrease({ instanceId: 'comp-1', atLevel: 4, ability: 'DEX' }),
    );
    expect(state.character.companions[0].hdAbilityIncreases).toEqual([
      { atLevel: 4, ability: 'DEX' },
    ]);
    // No-op for unknown instanceId
    const snapshot = JSON.stringify(state.character.companions);
    state = reducer(
      state,
      setCompanionHDAbilityIncrease({ instanceId: 'nope', atLevel: 4, ability: 'CON' }),
    );
    expect(JSON.stringify(state.character.companions)).toBe(snapshot);
  });
});

describe('characterEntrySlice — removeTemplate and updateTemplate branches', () => {
  it('removeTemplate sweeps grantedBonuses by id', () => {
    let state = reducer(undefined, { type: '@@INIT' });
    state = reducer(
      state,
      addTemplate(makeTemplate('tmpl-1', { isFreeGrant: true, freeGrantNote: 'LA +4' })),
    );
    expect(state.character.grantedBonuses).toHaveLength(1);
    state = reducer(state, removeTemplate('tmpl-1'));
    expect(state.character.grantedBonuses).toHaveLength(0);
  });

  it('updateTemplate with isFreeGrant: false updates appliedTemplates', () => {
    let state = reducer(undefined, { type: '@@INIT' });
    state = reducer(state, addTemplate(makeTemplate('tmpl-2', { name: 'Vampire' })));
    state = reducer(state, updateTemplate(makeTemplate('tmpl-2', { name: 'Vampire (Greater)' })));
    expect(state.character.appliedTemplates[0].name).toBe('Vampire (Greater)');
  });
});

// ---------------------------------------------------------------------------
// reequipFromContainer
// ---------------------------------------------------------------------------

describe('characterEntrySlice — reequipFromContainer', () => {
  it('re-equips item to its unequippedFromSlot and clears tracking fields', () => {
    let state = reducer(
      makeInitialState(),
      addEquipment(
        makeEquipmentItem('amulet-1', { containerId: 'bag-1', unequippedFromSlot: 'neck' }),
      ),
    );
    state = reducer(state, reequipFromContainer('amulet-1'));
    const item = state.character.editorEquipment!.find((e) => e.id === 'amulet-1')!;
    expect(item.slot).toBe('neck');
    expect(item.unequippedFromSlot).toBeUndefined();
    expect(item.containerId).toBeUndefined();
    expect(state.isDirty).toBe(true);
  });

  it('is a no-op when unequippedFromSlot is not set on the item', () => {
    let state = reducer(
      makeInitialState(),
      addEquipment(makeEquipmentItem('amulet-1', { containerId: 'bag-1' })),
    );
    const snapshot = JSON.stringify(state.character.editorEquipment);
    state = reducer(state, reequipFromContainer('amulet-1'));
    expect(JSON.stringify(state.character.editorEquipment)).toBe(snapshot);
  });

  it('is a no-op when the item id is not found', () => {
    let state = reducer(
      makeInitialState(),
      addEquipment(makeEquipmentItem('amulet-1', { unequippedFromSlot: 'neck' })),
    );
    const snapshot = JSON.stringify(state.character.editorEquipment);
    state = reducer(state, reequipFromContainer('does-not-exist'));
    expect(JSON.stringify(state.character.editorEquipment)).toBe(snapshot);
  });

  it('displaces the current occupant of the target slot, clearing its slot', () => {
    let state = reducer(
      makeInitialState(),
      addEquipment(makeEquipmentItem('belt-old', { slot: 'belt' })),
    );
    state = reducer(
      state,
      addEquipment(makeEquipmentItem('belt-new', { unequippedFromSlot: 'belt' })),
    );
    state = reducer(state, reequipFromContainer('belt-new'));
    const displaced = state.character.editorEquipment!.find((e) => e.id === 'belt-old')!;
    expect(displaced.slot).toBeUndefined();
  });

  it('sets displaced.containerId to the first available container when one exists', () => {
    let state = reducer(
      makeInitialState(),
      addEquipment(makeEquipmentItem('bag-1', { isContainer: true })),
    );
    state = reducer(state, addEquipment(makeEquipmentItem('belt-old', { slot: 'belt' })));
    state = reducer(
      state,
      addEquipment(
        makeEquipmentItem('belt-new', { unequippedFromSlot: 'belt', containerId: 'bag-1' }),
      ),
    );
    state = reducer(state, reequipFromContainer('belt-new'));
    const displaced = state.character.editorEquipment!.find((e) => e.id === 'belt-old')!;
    expect(displaced.containerId).toBe('bag-1');
    expect(displaced.unequippedFromSlot).toBeUndefined();
  });

  it('does not set containerId on displaced item when no container exists', () => {
    let state = reducer(
      makeInitialState(),
      addEquipment(makeEquipmentItem('belt-old', { slot: 'belt' })),
    );
    state = reducer(
      state,
      addEquipment(makeEquipmentItem('belt-new', { unequippedFromSlot: 'belt' })),
    );
    state = reducer(state, reequipFromContainer('belt-new'));
    const displaced = state.character.editorEquipment!.find((e) => e.id === 'belt-old')!;
    expect(displaced.slot).toBeUndefined();
    expect(displaced.containerId).toBeUndefined();
  });
});

// ---------------------------------------------------------------------------
// Flaws
// ---------------------------------------------------------------------------

function makeFlaw(flawId: string): CharacterFlaw {
  return { flawId, name: `Flaw ${flawId}` };
}

describe('characterEntrySlice — flaws', () => {
  it('initializes flaws with empty list and maxFlaws 2', () => {
    const state = makeInitialState();
    expect(state.character.flaws.flaws).toEqual([]);
    expect(state.character.flaws.maxFlaws).toBe(2);
  });

  describe('addFlaw', () => {
    it('appends a flaw and sets isDirty', () => {
      const flaw = makeFlaw('flaw-1');
      const state = reducer(makeInitialState(), addFlaw(flaw));
      expect(state.character.flaws.flaws).toHaveLength(1);
      expect(state.character.flaws.flaws[0].flawId).toBe('flaw-1');
      expect(state.isDirty).toBe(true);
    });

    it('appends multiple flaws in order', () => {
      let state = reducer(makeInitialState(), addFlaw(makeFlaw('flaw-1')));
      state = reducer(state, addFlaw(makeFlaw('flaw-2')));
      expect(state.character.flaws.flaws).toHaveLength(2);
      expect(state.character.flaws.flaws[0].flawId).toBe('flaw-1');
      expect(state.character.flaws.flaws[1].flawId).toBe('flaw-2');
    });
  });

  describe('removeFlaw', () => {
    it('removes the flaw with the matching flawId', () => {
      let state = reducer(makeInitialState(), addFlaw(makeFlaw('flaw-1')));
      state = reducer(state, addFlaw(makeFlaw('flaw-2')));
      state = reducer(state, removeFlaw('flaw-1'));
      expect(state.character.flaws.flaws).toHaveLength(1);
      expect(state.character.flaws.flaws[0].flawId).toBe('flaw-2');
      expect(state.isDirty).toBe(true);
    });

    it('is a no-op when flawId is not found', () => {
      let state = reducer(makeInitialState(), addFlaw(makeFlaw('flaw-1')));
      state = reducer(state, removeFlaw('does-not-exist'));
      expect(state.character.flaws.flaws).toHaveLength(1);
    });
  });

  // Regression coverage for #355 — a saved character must stop behaving like a
  // draft, or every later save writes another copy.
  describe('markSaved', () => {
    it('records the Firestore document ID the save wrote', () => {
      const state = reducer(makeInitialState(), markSaved({ characterId: 'firestore-doc-1' }));
      expect(state.originalCharacterId).toBe('firestore-doc-1');
    });

    it("flips a new session to 'edit' so later saves update in place", () => {
      const initial = makeInitialState();
      expect(initial.mode).toBe('new');
      const state = reducer(initial, markSaved({ characterId: 'firestore-doc-1' }));
      expect(state.mode).toBe('edit');
    });

    it('rebinds an imported session to the created document', () => {
      let state = reducer(
        makeInitialState(),
        loadCharacter({ character: makeInitialState().character, mode: 'import' }),
      );
      expect(state.originalCharacterId).toBeNull();
      state = reducer(state, markSaved({ characterId: 'firestore-doc-2' }));
      expect(state.mode).toBe('edit');
      expect(state.originalCharacterId).toBe('firestore-doc-2');
    });

    it('resetDraft clears the binding so a new draft does not overwrite it', () => {
      let state = reducer(makeInitialState(), markSaved({ characterId: 'firestore-doc-1' }));
      state = reducer(state, resetDraft());
      expect(state.originalCharacterId).toBeNull();
      expect(state.mode).toBe('new');
    });
  });
});
