import reducer, {
  BLANK_DRAFT,
  loadCharacter,
  resetDraft,
  setActiveTab,
  markDirty,
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
  setAbilityField,
  setLevelIncrementAbility,
  setLevelIncrementSlots,
  addClass,
  removeClass,
  updateClassLevel,
  updateClassArchetype,
  updateClassSpellcastingAdvancement,
  upsertClassChoice,
  toggleClassPrereqOverride,
  reorderClasses,
  addTemplate,
  removeTemplate,
  updateTemplate,
  reorderTemplates,
  setTemplateAcquiredAtECL,
  setCombatField,
  setSkillEntry,
  removeSkillEntry,
  addTrait,
  removeTrait,
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
  setCharacterNotes,
  setCampaignNotes,
  type EntryValidationWarning,
} from '@store/slices/characterEntrySlice';
import { Alignment } from '@/types/base';
import type {
  CharacterDraft,
  DraftClassEntry,
  DraftTemplateEntry,
  DraftFeatSlot,
  DraftTrait,
  DraftSpellcastingPool,
  DraftEquipmentItem,
  LevelIncrementSlot,
} from '@/types/characterDraft';

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

function makeClass(id: string, overrides: Partial<DraftClassEntry> = {}): DraftClassEntry {
  return {
    id,
    className: 'Fighter',
    level: 1,
    sourceSystem: 'pf1e',
    classChoices: [],
    prereqOverride: false,
    ...overrides,
  };
}

function makeTemplate(id: string, overrides: Partial<DraftTemplateEntry> = {}): DraftTemplateEntry {
  return {
    id,
    templateName: 'Half-Dragon',
    isFreeGrant: false,
    ...overrides,
  };
}

function makeFeatSlot(id: string, availableAtLevel = 1): DraftFeatSlot {
  return {
    id,
    source: 'level',
    availableAt: `Lvl ${availableAtLevel}`,
    availableAtLevel,
    prereqOverride: false,
  };
}

function makeTrait(id: string): DraftTrait {
  return {
    id,
    traitName: 'Reactionary',
    category: 'Combat',
    description: '+2 trait bonus on Initiative checks.',
  };
}

function makePool(id: string, baseClassEntryId: string = 'class-test'): DraftSpellcastingPool {
  return {
    id,
    poolType: 'arcane',
    baseClassEntryId,
    castingAbility: 'int',
    spellsPerDayMisc: new Array(10).fill(0),
  };
}

function makeEquipmentItem(
  id: string,
  overrides: Partial<DraftEquipmentItem> = {},
): DraftEquipmentItem {
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
    expect(state.draft).toEqual(BLANK_DRAFT);
  });

  describe('loadCharacter', () => {
    it('loads a draft and sets mode', () => {
      const draft: CharacterDraft = { ...BLANK_DRAFT, name: 'Valeria' };
      const state = reducer(
        makeInitialState(),
        loadCharacter({ draft, mode: 'edit', characterId: 'abc-123' }),
      );
      expect(state.draft.name).toBe('Valeria');
      expect(state.mode).toBe('edit');
      expect(state.originalCharacterId).toBe('abc-123');
    });

    it('resets activeTab to identity, isDirty to false, and clears validation', () => {
      // Start with a dirty state with an active tab and warnings
      let state = makeInitialState();
      state = reducer(state, setActiveTab('feats'));
      state = reducer(state, markDirty());
      state = reducer(state, setValidationWarnings([makeWarning('w1')]));

      state = reducer(state, loadCharacter({ draft: BLANK_DRAFT, mode: 'new' }));
      expect(state.activeTab).toBe('identity');
      expect(state.isDirty).toBe(false);
      expect(state.lastValidatedAt).toBeNull();
      expect(state.validationWarnings).toHaveLength(0);
    });

    it('sets originalCharacterId to null when characterId is omitted', () => {
      const state = reducer(makeInitialState(), loadCharacter({ draft: BLANK_DRAFT, mode: 'new' }));
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
      expect(state.draft).toEqual(BLANK_DRAFT);
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
    expect(state.draft.name).toBe('Valeria');
    expect(state.isDirty).toBe(true);
  });

  it('setPlayer updates player and sets isDirty', () => {
    const state = reducer(makeInitialState(), setPlayer('Mark'));
    expect(state.draft.player).toBe('Mark');
    expect(state.isDirty).toBe(true);
  });

  it('setAlignment updates alignment and sets isDirty', () => {
    const state = reducer(makeInitialState(), setAlignment(Alignment.ChaoticGood));
    expect(state.draft.alignment).toBe(Alignment.ChaoticGood);
    expect(state.isDirty).toBe(true);
  });

  describe('setDeity', () => {
    it('updates deity and sets isDirty', () => {
      const state = reducer(makeInitialState(), setDeity('Sarenrae'));
      expect(state.draft.deity).toBe('Sarenrae');
      expect(state.isDirty).toBe(true);
    });

    it('clears Domain class choices when deity changes', () => {
      let state = makeInitialState();
      const clericClass = makeClass('cls-1', {
        className: 'Cleric',
        classChoices: [
          { featureName: 'Domain', takenAtLevel: 1, selection: 'Fire' },
          { featureName: 'Favored Enemy', takenAtLevel: 1, selection: 'Undead' },
        ],
      });
      state = reducer(state, addClass(clericClass));
      state = reducer(state, setDeity('Sarenrae'));
      state = reducer(state, setDeity('Iomedae'));

      // Domain choices cleared; other choices preserved
      const cls = state.draft.classes[0];
      expect(cls.classChoices.find((c) => c.featureName === 'Domain')).toBeUndefined();
      expect(cls.classChoices.find((c) => c.featureName === 'Favored Enemy')).toBeDefined();
    });

    it('does NOT clear Domain choices when deity is set to the same value', () => {
      // Set deity first, then add the class — so changing deity later from its
      // current value to the SAME value should be a no-op on classChoices.
      let state = makeInitialState();
      state = reducer(state, setDeity('Sarenrae')); // establish current deity

      const clericClass = makeClass('cls-1', {
        className: 'Cleric',
        classChoices: [{ featureName: 'Domain', takenAtLevel: 1, selection: 'Fire' }],
      });
      state = reducer(state, addClass(clericClass));

      state = reducer(state, setDeity('Sarenrae')); // same deity — should not clear

      expect(state.draft.classes[0].classChoices).toHaveLength(1);
    });
  });

  it('setGender updates gender and sets isDirty', () => {
    const state = reducer(makeInitialState(), setGender('Female'));
    expect(state.draft.gender).toBe('Female');
    expect(state.isDirty).toBe(true);
  });

  it('setAge updates age and sets isDirty', () => {
    const state = reducer(makeInitialState(), setAge('28'));
    expect(state.draft.age).toBe('28');
    expect(state.isDirty).toBe(true);
  });

  it('setHeight updates height and sets isDirty', () => {
    const state = reducer(makeInitialState(), setHeight('5\'8"'));
    expect(state.draft.height).toBe('5\'8"');
    expect(state.isDirty).toBe(true);
  });

  it('setWeight updates weight and sets isDirty', () => {
    const state = reducer(makeInitialState(), setWeight('140 lbs'));
    expect(state.draft.weight).toBe('140 lbs');
    expect(state.isDirty).toBe(true);
  });

  it('setHair updates hair and sets isDirty', () => {
    const state = reducer(makeInitialState(), setHair('Auburn'));
    expect(state.draft.hair).toBe('Auburn');
    expect(state.isDirty).toBe(true);
  });

  it('setEyes updates eyes and sets isDirty', () => {
    const state = reducer(makeInitialState(), setEyes('Green'));
    expect(state.draft.eyes).toBe('Green');
    expect(state.isDirty).toBe(true);
  });

  it('setSkin updates skin and sets isDirty', () => {
    const state = reducer(makeInitialState(), setSkin('Tan'));
    expect(state.draft.skin).toBe('Tan');
    expect(state.isDirty).toBe(true);
  });

  it('setBackground updates background and sets isDirty', () => {
    const state = reducer(makeInitialState(), setBackground('Former soldier'));
    expect(state.draft.background).toBe('Former soldier');
    expect(state.isDirty).toBe(true);
  });

  it('setPortrait updates portrait and sets isDirty', () => {
    const state = reducer(makeInitialState(), setPortrait('https://example.com/portrait.png'));
    expect(state.draft.portrait).toBe('https://example.com/portrait.png');
    expect(state.isDirty).toBe(true);
  });

  describe('setRace', () => {
    it('sets raceId, raceName, and applies racial bonuses', () => {
      const state = reducer(
        makeInitialState(),
        setRace({ raceId: 'elf', raceName: 'Elf', racialBonuses: { dex: 2, int: 2, con: -2 } }),
      );
      expect(state.draft.raceId).toBe('elf');
      expect(state.draft.raceName).toBe('Elf');
      expect(state.draft.abilities.dex.racial).toBe(2);
      expect(state.draft.abilities.int.racial).toBe(2);
      expect(state.draft.abilities.con.racial).toBe(-2);
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
      // Old dwarf bonuses should be cleared
      expect(state.draft.abilities.con.racial).toBe(0);
      expect(state.draft.abilities.wis.racial).toBe(0);
      expect(state.draft.abilities.cha.racial).toBe(0);
      // New elf bonuses should be applied
      expect(state.draft.abilities.dex.racial).toBe(2);
      expect(state.draft.abilities.int.racial).toBe(2);
    });

    it('defaults unspecified abilities to 0 racial bonus', () => {
      const state = reducer(
        makeInitialState(),
        setRace({ raceId: 'human', raceName: 'Human', racialBonuses: {} }),
      );
      const keys: (keyof typeof state.draft.abilities)[] = [
        'str',
        'dex',
        'con',
        'int',
        'wis',
        'cha',
      ];
      keys.forEach((k) => expect(state.draft.abilities[k].racial).toBe(0));
    });
  });
});

// ---------------------------------------------------------------------------
// Abilities
// ---------------------------------------------------------------------------

describe('characterEntrySlice — abilities', () => {
  describe('setAbilityField', () => {
    it('sets a specific field on an ability score', () => {
      const state = reducer(
        makeInitialState(),
        setAbilityField({ ability: 'str', field: 'base', value: 16 }),
      );
      expect(state.draft.abilities.str.base).toBe(16);
      expect(state.isDirty).toBe(true);
    });

    it('can set the inherent field', () => {
      const state = reducer(
        makeInitialState(),
        setAbilityField({ ability: 'cha', field: 'inherent', value: 5 }),
      );
      expect(state.draft.abilities.cha.inherent).toBe(5);
    });
  });

  describe('setLevelIncrementSlots', () => {
    it('replaces all level increment slots', () => {
      const slots: LevelIncrementSlot[] = [
        { atHD: 4, ability: 'str' },
        { atHD: 8, ability: null },
      ];
      const state = reducer(makeInitialState(), setLevelIncrementSlots(slots));
      expect(state.draft.levelIncrementSlots).toEqual(slots);
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

      expect(state.draft.levelIncrementSlots[0].ability).toBe('str');
      expect(state.draft.abilities.str.levelIncrements).toBe(2);
      expect(state.draft.abilities.dex.levelIncrements).toBe(1);
      expect(state.draft.abilities.con.levelIncrements).toBe(0);
      expect(state.isDirty).toBe(true);
    });

    it('is a no-op for the slot update when atHD is not found (still sets isDirty)', () => {
      const slots: LevelIncrementSlot[] = [{ atHD: 4, ability: null }];
      let state = reducer(makeInitialState(), setLevelIncrementSlots(slots));
      state = reducer(state, setLevelIncrementAbility({ atHD: 99, ability: 'str' }));
      // Slot unchanged
      expect(state.draft.levelIncrementSlots[0].ability).toBeNull();
      // isDirty still set
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
      expect(state.draft.classes).toHaveLength(1);
      expect(state.draft.classes[0]).toEqual(cls);
      expect(state.isDirty).toBe(true);
    });
  });

  describe('removeClass', () => {
    it('removes the class with the matching id', () => {
      let state = reducer(makeInitialState(), addClass(makeClass('cls-1')));
      state = reducer(state, addClass(makeClass('cls-2')));
      state = reducer(state, removeClass('cls-1'));
      expect(state.draft.classes).toHaveLength(1);
      expect(state.draft.classes[0].id).toBe('cls-2');
      expect(state.isDirty).toBe(true);
    });

    it('is a no-op when id is not found', () => {
      let state = reducer(makeInitialState(), addClass(makeClass('cls-1')));
      state = reducer(state, removeClass('does-not-exist'));
      expect(state.draft.classes).toHaveLength(1);
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
      const adv = state.draft.classes[0].spellcastingAdvancement;
      if (adv?.mode !== 'single') throw new Error('expected mode single');
      expect(adv.perLevel[0].baseClassEntryId).toBe('');
    });

    it('cascades: removes pools anchored to the removed class', () => {
      let state = reducer(makeInitialState(), addClass(makeClass('base')));
      state = reducer(state, addSpellcastingPool(makePool('pool-x', 'base')));
      state = reducer(state, removeClass('base'));
      expect(state.draft.spellcastingPools).toHaveLength(0);
    });
  });

  describe('updateClassLevel', () => {
    it('updates level on the matching class and sets isDirty', () => {
      let state = reducer(makeInitialState(), addClass(makeClass('cls-1')));
      state = reducer(state, updateClassLevel({ id: 'cls-1', level: 10 }));
      expect(state.draft.classes[0].level).toBe(10);
      expect(state.isDirty).toBe(true);
    });

    it('is a no-op when id is not found', () => {
      let state = reducer(makeInitialState(), addClass(makeClass('cls-1')));
      const before = state.draft.classes[0].level;
      state = reducer(state, updateClassLevel({ id: 'does-not-exist', level: 10 }));
      // Only the data guard matters — level must not change
      expect(state.draft.classes[0].level).toBe(before);
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
      const adv = state.draft.classes[0].spellcastingAdvancement;
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
      const adv = state.draft.classes[0].spellcastingAdvancement;
      if (adv?.mode !== 'single') throw new Error('expected mode single');
      expect(adv.perLevel).toHaveLength(2);
    });
  });

  describe('updateClassArchetype', () => {
    it('sets archetype on the matching class', () => {
      let state = reducer(makeInitialState(), addClass(makeClass('cls-1')));
      state = reducer(
        state,
        updateClassArchetype({ id: 'cls-1', archetypeId: 'arch-1', archetypeName: 'Lore Warden' }),
      );
      expect(state.draft.classes[0].archetypeId).toBe('arch-1');
      expect(state.draft.classes[0].archetypeName).toBe('Lore Warden');
      expect(state.isDirty).toBe(true);
    });

    it('is a no-op when id is not found', () => {
      let state = reducer(makeInitialState(), addClass(makeClass('cls-1')));
      state = reducer(state, updateClassArchetype({ id: 'does-not-exist', archetypeId: 'arch-1' }));
      expect(state.draft.classes[0].archetypeId).toBeUndefined();
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
      expect(state.draft.classes[0].spellcastingAdvancement).toEqual(adv);
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
      expect(state.draft.classes[0].spellcastingAdvancement).toBeUndefined();
    });
  });

  describe('upsertClassChoice', () => {
    it('pushes a new choice when none exist for the featureName', () => {
      let state = reducer(makeInitialState(), addClass(makeClass('cls-1')));
      const choice = { featureName: 'Domain', takenAtLevel: 1, selection: 'Fire' };
      state = reducer(state, upsertClassChoice({ classId: 'cls-1', choiceIndex: 0, choice }));
      expect(state.draft.classes[0].classChoices).toHaveLength(1);
      expect(state.draft.classes[0].classChoices[0].selection).toBe('Fire');
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
      expect(state.draft.classes[0].classChoices[0].selection).toBe('Water');
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
      expect(state.draft.classes[0].classChoices).toHaveLength(2);
      expect(state.draft.classes[0].classChoices[1].selection).toBe('Water');
    });

    it('is a no-op when classId is not found', () => {
      let state = reducer(makeInitialState(), addClass(makeClass('cls-1')));
      const choice = { featureName: 'Domain', takenAtLevel: 1, selection: 'Fire' };
      state = reducer(
        state,
        upsertClassChoice({ classId: 'does-not-exist', choiceIndex: 0, choice }),
      );
      expect(state.draft.classes[0].classChoices).toHaveLength(0);
    });
  });

  describe('toggleClassPrereqOverride', () => {
    it('toggles prereqOverride on the matching class', () => {
      let state = reducer(
        makeInitialState(),
        addClass(makeClass('cls-1', { prereqOverride: false })),
      );
      state = reducer(state, toggleClassPrereqOverride('cls-1'));
      expect(state.draft.classes[0].prereqOverride).toBe(true);
      state = reducer(state, toggleClassPrereqOverride('cls-1'));
      expect(state.draft.classes[0].prereqOverride).toBe(false);
      expect(state.isDirty).toBe(true);
    });

    it('is a no-op when id is not found', () => {
      let state = reducer(
        makeInitialState(),
        addClass(makeClass('cls-1', { prereqOverride: false })),
      );
      state = reducer(state, toggleClassPrereqOverride('does-not-exist'));
      expect(state.draft.classes[0].prereqOverride).toBe(false);
    });
  });

  describe('reorderClasses', () => {
    it('reorders classes by the provided id array', () => {
      let state = makeInitialState();
      state = reducer(state, addClass(makeClass('cls-1', { className: 'Fighter' })));
      state = reducer(state, addClass(makeClass('cls-2', { className: 'Rogue' })));
      state = reducer(state, addClass(makeClass('cls-3', { className: 'Cleric' })));
      state = reducer(state, reorderClasses(['cls-3', 'cls-1', 'cls-2']));
      expect(state.draft.classes.map((c) => c.id)).toEqual(['cls-3', 'cls-1', 'cls-2']);
      expect(state.isDirty).toBe(true);
    });

    it('omits classes not in the id array', () => {
      let state = makeInitialState();
      state = reducer(state, addClass(makeClass('cls-1')));
      state = reducer(state, addClass(makeClass('cls-2')));
      state = reducer(state, reorderClasses(['cls-2']));
      expect(state.draft.classes).toHaveLength(1);
      expect(state.draft.classes[0].id).toBe('cls-2');
    });
  });
});

// ---------------------------------------------------------------------------
// Templates
// ---------------------------------------------------------------------------

describe('characterEntrySlice — templates', () => {
  describe('addTemplate', () => {
    it('pushes a template and sets isDirty', () => {
      const tpl = makeTemplate('tpl-1');
      const state = reducer(makeInitialState(), addTemplate(tpl));
      expect(state.draft.templates).toHaveLength(1);
      expect(state.isDirty).toBe(true);
    });
  });

  describe('removeTemplate', () => {
    it('removes the template with the matching id', () => {
      let state = reducer(makeInitialState(), addTemplate(makeTemplate('tpl-1')));
      state = reducer(state, addTemplate(makeTemplate('tpl-2')));
      state = reducer(state, removeTemplate('tpl-1'));
      expect(state.draft.templates).toHaveLength(1);
      expect(state.draft.templates[0].id).toBe('tpl-2');
      expect(state.isDirty).toBe(true);
    });

    it('is a no-op when id is not found', () => {
      let state = reducer(makeInitialState(), addTemplate(makeTemplate('tpl-1')));
      state = reducer(state, removeTemplate('does-not-exist'));
      expect(state.draft.templates).toHaveLength(1);
    });
  });

  describe('updateTemplate', () => {
    it('replaces the matching template entry', () => {
      let state = reducer(
        makeInitialState(),
        addTemplate(makeTemplate('tpl-1', { templateName: 'Old Name' })),
      );
      const updated = makeTemplate('tpl-1', { templateName: 'New Name' });
      state = reducer(state, updateTemplate(updated));
      expect(state.draft.templates[0].templateName).toBe('New Name');
      expect(state.isDirty).toBe(true);
    });

    it('is a no-op when id is not found', () => {
      let state = reducer(
        makeInitialState(),
        addTemplate(makeTemplate('tpl-1', { templateName: 'Original' })),
      );
      state = reducer(
        state,
        updateTemplate(makeTemplate('does-not-exist', { templateName: 'Changed' })),
      );
      expect(state.draft.templates[0].templateName).toBe('Original');
    });
  });

  describe('reorderTemplates', () => {
    it('reorders templates by the provided id array', () => {
      let state = makeInitialState();
      state = reducer(state, addTemplate(makeTemplate('tpl-1')));
      state = reducer(state, addTemplate(makeTemplate('tpl-2')));
      state = reducer(state, addTemplate(makeTemplate('tpl-3')));
      state = reducer(state, reorderTemplates(['tpl-3', 'tpl-1', 'tpl-2']));
      expect(state.draft.templates.map((t) => t.id)).toEqual(['tpl-3', 'tpl-1', 'tpl-2']);
      expect(state.isDirty).toBe(true);
    });
  });

  describe('setTemplateAcquiredAtECL', () => {
    it('sets acquiredAtECL on the matching template', () => {
      let state = reducer(makeInitialState(), addTemplate(makeTemplate('tpl-1')));
      state = reducer(state, setTemplateAcquiredAtECL({ id: 'tpl-1', acquiredAtECL: 7 }));
      expect(state.draft.templates[0].acquiredAtECL).toBe(7);
      expect(state.isDirty).toBe(true);
    });

    it('can clear acquiredAtECL by setting undefined', () => {
      let state = reducer(
        makeInitialState(),
        addTemplate(makeTemplate('tpl-1', { acquiredAtECL: 7 })),
      );
      state = reducer(state, setTemplateAcquiredAtECL({ id: 'tpl-1', acquiredAtECL: undefined }));
      expect(state.draft.templates[0].acquiredAtECL).toBeUndefined();
    });

    it('is a no-op when id is not found', () => {
      let state = reducer(makeInitialState(), addTemplate(makeTemplate('tpl-1')));
      state = reducer(state, setTemplateAcquiredAtECL({ id: 'does-not-exist', acquiredAtECL: 7 }));
      expect(state.draft.templates[0].acquiredAtECL).toBeUndefined();
    });
  });
});

// ---------------------------------------------------------------------------
// Combat
// ---------------------------------------------------------------------------

describe('characterEntrySlice — combat', () => {
  describe('setCombatField', () => {
    it('sets a field on draft.combat and sets isDirty', () => {
      const state = reducer(makeInitialState(), setCombatField({ field: 'currentHP', value: 42 }));
      expect(state.draft.combat.currentHP).toBe(42);
      expect(state.isDirty).toBe(true);
    });

    it('can set an optional field', () => {
      const state = reducer(makeInitialState(), setCombatField({ field: 'speedFly', value: 60 }));
      expect(state.draft.combat.speedFly).toBe(60);
    });

    it('can set a field to undefined', () => {
      let state = reducer(
        makeInitialState(),
        setCombatField({ field: 'maxHPOverride', value: 100 }),
      );
      state = reducer(state, setCombatField({ field: 'maxHPOverride', value: undefined }));
      expect(state.draft.combat.maxHPOverride).toBeUndefined();
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
      expect(state.draft.skills['perception']).toEqual(entry);
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
      expect(state.draft.skills['perception']).toEqual({ ranks: 7, misc: 1 });
    });
  });

  describe('removeSkillEntry', () => {
    it('deletes the key and sets isDirty', () => {
      let state = reducer(
        makeInitialState(),
        setSkillEntry({ skillKey: 'craft (alchemy)', entry: { ranks: 3, misc: 0 } }),
      );
      state = reducer(state, removeSkillEntry('craft (alchemy)'));
      expect(state.draft.skills['craft (alchemy)']).toBeUndefined();
      expect(state.isDirty).toBe(true);
    });

    it('is a no-op when key does not exist', () => {
      const initial = makeInitialState();
      const state = reducer(initial, removeSkillEntry('craft (nonexistent)'));
      expect(state.draft.skills).toEqual(initial.draft.skills);
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
      expect(state.draft.traits).toHaveLength(1);
      expect(state.draft.traits[0]).toEqual(trait);
      expect(state.isDirty).toBe(true);
    });
  });

  describe('removeTrait', () => {
    it('removes the trait with the matching id', () => {
      let state = reducer(makeInitialState(), addTrait(makeTrait('trait-1')));
      state = reducer(state, addTrait(makeTrait('trait-2')));
      state = reducer(state, removeTrait('trait-1'));
      expect(state.draft.traits).toHaveLength(1);
      expect(state.draft.traits[0].id).toBe('trait-2');
      expect(state.isDirty).toBe(true);
    });

    it('is a no-op when id is not found', () => {
      let state = reducer(makeInitialState(), addTrait(makeTrait('trait-1')));
      state = reducer(state, removeTrait('does-not-exist'));
      expect(state.draft.traits).toHaveLength(1);
    });
  });
});

// ---------------------------------------------------------------------------
// Feats
// ---------------------------------------------------------------------------

describe('characterEntrySlice — feats', () => {
  describe('addFeatSlot', () => {
    it('pushes a feat slot and sets isDirty', () => {
      const slot = makeFeatSlot('slot-1', 1);
      const state = reducer(makeInitialState(), addFeatSlot(slot));
      expect(state.draft.featSlots).toHaveLength(1);
      expect(state.isDirty).toBe(true);
    });

    it('keeps featSlots sorted by availableAtLevel', () => {
      let state = makeInitialState();
      state = reducer(state, addFeatSlot(makeFeatSlot('slot-3', 5)));
      state = reducer(state, addFeatSlot(makeFeatSlot('slot-1', 1)));
      state = reducer(state, addFeatSlot(makeFeatSlot('slot-2', 3)));
      expect(state.draft.featSlots.map((f) => f.availableAtLevel)).toEqual([1, 3, 5]);
    });
  });

  describe('removeFeatSlot', () => {
    it('removes the slot with the matching id', () => {
      let state = reducer(makeInitialState(), addFeatSlot(makeFeatSlot('slot-1')));
      state = reducer(state, addFeatSlot(makeFeatSlot('slot-2')));
      state = reducer(state, removeFeatSlot('slot-1'));
      expect(state.draft.featSlots).toHaveLength(1);
      expect(state.draft.featSlots[0].id).toBe('slot-2');
      expect(state.isDirty).toBe(true);
    });

    it('is a no-op when id is not found', () => {
      let state = reducer(makeInitialState(), addFeatSlot(makeFeatSlot('slot-1')));
      state = reducer(state, removeFeatSlot('does-not-exist'));
      expect(state.draft.featSlots).toHaveLength(1);
    });
  });

  describe('assignFeat', () => {
    it('assigns a feat to the matching slot', () => {
      let state = reducer(makeInitialState(), addFeatSlot(makeFeatSlot('slot-1')));
      state = reducer(
        state,
        assignFeat({ slotId: 'slot-1', featId: 'feat-power-attack', featName: 'Power Attack' }),
      );
      const slot = state.draft.featSlots[0];
      expect(slot.featId).toBe('feat-power-attack');
      expect(slot.featName).toBe('Power Attack');
      expect(state.isDirty).toBe(true);
    });

    it('is a no-op when slotId is not found', () => {
      let state = reducer(makeInitialState(), addFeatSlot(makeFeatSlot('slot-1')));
      state = reducer(
        state,
        assignFeat({ slotId: 'does-not-exist', featId: 'feat-x', featName: 'X' }),
      );
      expect(state.draft.featSlots[0].featId).toBeUndefined();
    });
  });

  describe('unassignFeat', () => {
    it('clears feat from the matching slot', () => {
      let state = reducer(makeInitialState(), addFeatSlot(makeFeatSlot('slot-1')));
      state = reducer(state, assignFeat({ slotId: 'slot-1', featId: 'feat-x', featName: 'X' }));
      state = reducer(state, unassignFeat('slot-1'));
      const slot = state.draft.featSlots[0];
      expect(slot.featId).toBeUndefined();
      expect(slot.featName).toBeUndefined();
      expect(state.isDirty).toBe(true);
    });

    it('is a no-op when slotId is not found', () => {
      let state = reducer(makeInitialState(), addFeatSlot(makeFeatSlot('slot-1')));
      state = reducer(state, assignFeat({ slotId: 'slot-1', featId: 'feat-x', featName: 'X' }));
      state = reducer(state, unassignFeat('does-not-exist'));
      expect(state.draft.featSlots[0].featId).toBe('feat-x');
      expect(state.isDirty).toBe(true); // was already dirty from assignFeat
    });
  });

  describe('toggleFeatPrereqOverride', () => {
    it('toggles prereqOverride on the matching slot', () => {
      let state = reducer(makeInitialState(), addFeatSlot(makeFeatSlot('slot-1')));
      state = reducer(state, toggleFeatPrereqOverride('slot-1'));
      expect(state.draft.featSlots[0].prereqOverride).toBe(true);
      state = reducer(state, toggleFeatPrereqOverride('slot-1'));
      expect(state.draft.featSlots[0].prereqOverride).toBe(false);
      expect(state.isDirty).toBe(true);
    });

    it('is a no-op when slotId is not found', () => {
      let state = reducer(makeInitialState(), addFeatSlot(makeFeatSlot('slot-1')));
      state = reducer(state, toggleFeatPrereqOverride('does-not-exist'));
      expect(state.draft.featSlots[0].prereqOverride).toBe(false);
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
      expect(state.draft.spellcastingPools).toHaveLength(1);
      expect(state.draft.spellcastingPools[0]).toEqual(pool);
      expect(state.isDirty).toBe(true);
    });
  });

  describe('removeSpellcastingPool', () => {
    it('removes the pool with the matching id', () => {
      let state = reducer(makeInitialState(), addSpellcastingPool(makePool('pool-1')));
      state = reducer(state, addSpellcastingPool(makePool('pool-2')));
      state = reducer(state, removeSpellcastingPool('pool-1'));
      expect(state.draft.spellcastingPools).toHaveLength(1);
      expect(state.draft.spellcastingPools[0].id).toBe('pool-2');
      expect(state.isDirty).toBe(true);
    });

    it('is a no-op when id is not found', () => {
      let state = reducer(makeInitialState(), addSpellcastingPool(makePool('pool-1')));
      state = reducer(state, removeSpellcastingPool('does-not-exist'));
      expect(state.draft.spellcastingPools).toHaveLength(1);
    });
  });

  describe('updatePoolCastingAbility', () => {
    it('updates castingAbility on the matching pool', () => {
      let state = reducer(makeInitialState(), addSpellcastingPool(makePool('pool-1')));
      state = reducer(state, updatePoolCastingAbility({ poolId: 'pool-1', ability: 'wis' }));
      expect(state.draft.spellcastingPools[0].castingAbility).toBe('wis');
      expect(state.isDirty).toBe(true);
    });

    it('is a no-op when poolId is not found', () => {
      let state = reducer(makeInitialState(), addSpellcastingPool(makePool('pool-1')));
      state = reducer(
        state,
        updatePoolCastingAbility({ poolId: 'does-not-exist', ability: 'wis' }),
      );
      expect(state.draft.spellcastingPools[0].castingAbility).toBe('int');
    });
  });

  describe('setSpellsPerDayMisc', () => {
    it('sets the misc value at the given spell level index', () => {
      let state = reducer(makeInitialState(), addSpellcastingPool(makePool('pool-1')));
      state = reducer(state, setSpellsPerDayMisc({ poolId: 'pool-1', spellLevel: 3, value: 2 }));
      expect(state.draft.spellcastingPools[0].spellsPerDayMisc[3]).toBe(2);
      expect(state.isDirty).toBe(true);
    });

    it('is a no-op when poolId is not found', () => {
      let state = reducer(makeInitialState(), addSpellcastingPool(makePool('pool-1')));
      state = reducer(
        state,
        setSpellsPerDayMisc({ poolId: 'does-not-exist', spellLevel: 3, value: 2 }),
      );
      expect(state.draft.spellcastingPools[0].spellsPerDayMisc[3]).toBe(0);
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
      expect(state.draft.equipment).toHaveLength(1);
      expect(state.draft.equipment[0]).toEqual(item);
      expect(state.isDirty).toBe(true);
    });
  });

  describe('removeEquipment', () => {
    it('removes by id', () => {
      let state = reducer(makeInitialState(), addEquipment(makeEquipmentItem('eq-1')));
      state = reducer(state, addEquipment(makeEquipmentItem('eq-2')));
      state = reducer(state, removeEquipment('eq-1'));
      expect(state.draft.equipment).toHaveLength(1);
      expect(state.draft.equipment[0].id).toBe('eq-2');
      expect(state.isDirty).toBe(true);
    });

    it('is a no-op when id is not found', () => {
      let state = reducer(makeInitialState(), addEquipment(makeEquipmentItem('eq-1')));
      state = reducer(state, removeEquipment('does-not-exist'));
      expect(state.draft.equipment).toHaveLength(1);
    });
  });

  describe('updateEquipment', () => {
    it('replaces the matching item', () => {
      let state = reducer(makeInitialState(), addEquipment(makeEquipmentItem('eq-1')));
      const updated: DraftEquipmentItem = {
        ...makeEquipmentItem('eq-1'),
        name: 'Cloak of Resistance +3',
      };
      state = reducer(state, updateEquipment(updated));
      expect(state.draft.equipment[0].name).toBe('Cloak of Resistance +3');
      expect(state.isDirty).toBe(true);
    });

    it('is a no-op when id is not found', () => {
      let state = reducer(makeInitialState(), addEquipment(makeEquipmentItem('eq-1')));
      state = reducer(
        state,
        updateEquipment({ ...makeEquipmentItem('does-not-exist'), name: 'Ring of Wishes' }),
      );
      expect(state.draft.equipment[0].name).toBe('Cloak of Resistance +1');
    });
  });

  describe('assignEquipmentSlot', () => {
    it('assigns slot and clears containerId', () => {
      let state = reducer(
        makeInitialState(),
        addEquipment(makeEquipmentItem('eq-1', { containerId: 'bag-1' })),
      );
      state = reducer(state, assignEquipmentSlot({ id: 'eq-1', slot: 'belt' }));
      expect(state.draft.equipment[0].slot).toBe('belt');
      expect(state.draft.equipment[0].containerId).toBeUndefined();
      expect(state.isDirty).toBe(true);
    });

    it('is a no-op when id is not found', () => {
      let state = reducer(makeInitialState(), addEquipment(makeEquipmentItem('eq-1')));
      state = reducer(state, assignEquipmentSlot({ id: 'does-not-exist', slot: 'belt' }));
      expect(state.draft.equipment[0].slot).toBeUndefined();
    });
  });

  describe('unassignEquipmentSlot', () => {
    it('clears slot', () => {
      let state = reducer(
        makeInitialState(),
        addEquipment(makeEquipmentItem('eq-1', { slot: 'belt' })),
      );
      state = reducer(state, unassignEquipmentSlot('eq-1'));
      expect(state.draft.equipment[0].slot).toBeUndefined();
      expect(state.isDirty).toBe(true);
    });
  });

  describe('assignEquipmentContainer', () => {
    it('assigns containerId and clears slot', () => {
      let state = reducer(
        makeInitialState(),
        addEquipment(makeEquipmentItem('eq-1', { slot: 'belt' })),
      );
      state = reducer(state, assignEquipmentContainer({ id: 'eq-1', containerId: 'bag-1' }));
      expect(state.draft.equipment[0].containerId).toBe('bag-1');
      expect(state.draft.equipment[0].slot).toBeUndefined();
      expect(state.isDirty).toBe(true);
    });
  });
});

// ---------------------------------------------------------------------------
// Notes
// ---------------------------------------------------------------------------

describe('characterEntrySlice — notes', () => {
  it('setCharacterNotes updates characterNotes and sets isDirty', () => {
    const state = reducer(makeInitialState(), setCharacterNotes('Grew up in Absalom.'));
    expect(state.draft.characterNotes).toBe('Grew up in Absalom.');
    expect(state.isDirty).toBe(true);
  });

  it('setCampaignNotes updates campaignNotes and sets isDirty', () => {
    const state = reducer(makeInitialState(), setCampaignNotes('Session 12: Found the artifact.'));
    expect(state.draft.campaignNotes).toBe('Session 12: Found the artifact.');
    expect(state.isDirty).toBe(true);
  });
});
