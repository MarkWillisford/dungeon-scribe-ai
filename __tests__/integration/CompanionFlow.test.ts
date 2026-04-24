/**
 * Phase 1.9 — Integration test: druid + AC + template grant + multi-companion
 *
 * Exercises the full companion lifecycle across the service layer (CompanionService)
 * and the Redux slice (characterEntrySlice). No mocking — all assertions run
 * against the real data and reducer logic.
 */

import { CompanionService } from '@services/CompanionService';
import reducer, {
  BLANK_DRAFT,
  addCompanion,
  removeCompanion,
  removeCompanionsGrantedByClass,
  updateCompanionEffectiveLevel,
  renameCompanion,
  toggleCompanionTrick,
  addCompanionFeat,
} from '@store/slices/characterEntrySlice';
import { ALL_TEMPLATES } from '@/data/templates';
import type { Character } from '@/types';
import type { ClassEntry } from '@/types/classes';
import type { AnimalCompanionEntry } from '@/types/animalCompanions';
import type { CompanionGrant, CompanionInstance } from '@/types/companions';
import { BABProgression, SaveProgression } from '@/types/base';

// ---------------------------------------------------------------------------
// Helpers — minimal stubs
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

function makeState() {
  return reducer(undefined, { type: '@@INIT' });
}

const wolfEntry: AnimalCompanionEntry = {
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

const classGrant = (classEntryId: string): CompanionGrant => ({
  type: 'class',
  classEntryId,
  classChoiceId: 'animal-companion',
});

const templateGrant = (templateId: string): CompanionGrant => ({
  type: 'template',
  templateId,
});

// ---------------------------------------------------------------------------
// 1. druid-creature template definition
// ---------------------------------------------------------------------------

describe('druid-creature template definition', () => {
  let druidCreature: ReturnType<typeof ALL_TEMPLATES.find>;

  beforeAll(() => {
    druidCreature = ALL_TEMPLATES.find((t) => t.id === 'druid-creature');
  });

  it('exists in ALL_TEMPLATES', () => {
    expect(druidCreature).toBeDefined();
  });

  it('has grantsCompanion with characterLevel-3 formula', () => {
    expect(druidCreature?.grantsCompanion).toEqual({
      effectiveLevelFormula: 'characterLevel-3',
      pickerFilter: 'full',
    });
  });
});

// ---------------------------------------------------------------------------
// 2. CompanionService.computeEffectiveLevel — class grant paths
// ---------------------------------------------------------------------------

describe('CompanionService.computeEffectiveLevel — class grants', () => {
  it('Druid 10: effective level = 10 (equals class level)', () => {
    const char = makeCharacter([makeClassEntry({ name: 'Druid', level: 10 })]);
    expect(CompanionService.computeEffectiveLevel(char, classGrant('Druid'))).toBe(10);
  });

  it('Ranger 10: effective level = 7 (characterLevel - 3)', () => {
    const char = makeCharacter([makeClassEntry({ name: 'Ranger', level: 10 })]);
    expect(CompanionService.computeEffectiveLevel(char, classGrant('Ranger'))).toBe(7);
  });

  it('Paladin 5: effective level = 1 (characterLevel - 4, clamped)', () => {
    const char = makeCharacter([makeClassEntry({ name: 'Paladin', level: 5 })]);
    expect(CompanionService.computeEffectiveLevel(char, classGrant('Paladin'))).toBe(1);
  });

  it('Hunter 8: effective level = 8 (equals class level)', () => {
    const char = makeCharacter([makeClassEntry({ name: 'Hunter', level: 8 })]);
    expect(CompanionService.computeEffectiveLevel(char, classGrant('Hunter'))).toBe(8);
  });

  it('Inquisitor (Sacred Huntsmaster) 7: effective level = 7', () => {
    const char = makeCharacter([
      makeClassEntry({ name: 'Inquisitor', level: 7, archetype: ['Sacred Huntsmaster'] }),
    ]);
    expect(CompanionService.computeEffectiveLevel(char, classGrant('Inquisitor'))).toBe(7);
  });

  it('Inquisitor (no archetype): effective level = 0', () => {
    const char = makeCharacter([makeClassEntry({ name: 'Inquisitor', level: 7 })]);
    expect(CompanionService.computeEffectiveLevel(char, classGrant('Inquisitor'))).toBe(0);
  });

  it('Barbarian (Mad Dog) 8: effective level = 6 (level - 2)', () => {
    const char = makeCharacter([
      makeClassEntry({ name: 'Barbarian', level: 8, archetype: ['Mad Dog'] }),
    ]);
    expect(CompanionService.computeEffectiveLevel(char, classGrant('Barbarian'))).toBe(6);
  });

  it('multiclass character: Druid/Fighter — Druid level used, not total', () => {
    const char = makeCharacter([
      makeClassEntry({ name: 'Druid', level: 6 }),
      makeClassEntry({ name: 'Fighter', level: 4 }),
    ]);
    expect(CompanionService.computeEffectiveLevel(char, classGrant('Druid'))).toBe(6);
  });

  it('missing class entry returns 0', () => {
    const char = makeCharacter([makeClassEntry({ name: 'Fighter', level: 10 })]);
    expect(CompanionService.computeEffectiveLevel(char, classGrant('Druid'))).toBe(0);
  });
});

// ---------------------------------------------------------------------------
// 3. CompanionService.computeEffectiveLevel — template grant path
// ---------------------------------------------------------------------------

describe('CompanionService.computeEffectiveLevel — template grants', () => {
  it('druid-creature at character level 10: effective level = 7 (characterLevel - 3)', () => {
    const char = makeCharacter([
      makeClassEntry({ name: 'Druid', level: 6 }),
      makeClassEntry({ name: 'Fighter', level: 4 }),
    ]);
    expect(CompanionService.computeEffectiveLevel(char, templateGrant('druid-creature'))).toBe(7);
  });

  it('druid-creature at character level 3: effective level = 1 (clamped)', () => {
    const char = makeCharacter([makeClassEntry({ name: 'Druid', level: 3 })]);
    expect(CompanionService.computeEffectiveLevel(char, templateGrant('druid-creature'))).toBe(1);
  });

  it('druid-creature at character level 1: effective level = 1 (clamp to minimum)', () => {
    const char = makeCharacter([makeClassEntry({ name: 'Druid', level: 1 })]);
    expect(CompanionService.computeEffectiveLevel(char, templateGrant('druid-creature'))).toBe(1);
  });

  it('unknown template falls back to character total level', () => {
    const char = makeCharacter([makeClassEntry({ name: 'Druid', level: 10 })]);
    expect(
      CompanionService.computeEffectiveLevel(char, templateGrant('nonexistent-template')),
    ).toBe(10);
  });
});

// ---------------------------------------------------------------------------
// 4. CompanionService — stat block reflects progression tiers
// ---------------------------------------------------------------------------

describe('CompanionService.computeBaseStatBlock — wolf progression', () => {
  it('level 1–3: Medium size, no tier applied (STR less than post-tier value)', () => {
    const statsLevel3 = CompanionService.computeBaseStatBlock(wolfEntry, 3);
    const statsLevel4 = CompanionService.computeBaseStatBlock(wolfEntry, 4);
    // Size: no tier at level 3
    expect(statsLevel3.size).toBe('Medium');
    // STR before the tier is strictly less than after (tier grants STR +8)
    expect(statsLevel3.str).toBeLessThan(statsLevel4.str);
  });

  it('level 4+: tier applied — Large size, STR and CON boosted', () => {
    const statsLevel3 = CompanionService.computeBaseStatBlock(wolfEntry, 3);
    const statsLevel4 = CompanionService.computeBaseStatBlock(wolfEntry, 4);
    expect(statsLevel4.size).toBe('Large');
    // Tier: STR +8, DEX -2, CON +4 (on top of the universal progression bonus)
    expect(statsLevel4.str - statsLevel3.str).toBe(8);
    expect(statsLevel4.dex - statsLevel3.dex).toBe(-2);
    expect(statsLevel4.con - statsLevel3.con).toBe(4);
  });

  it('level 10: same tier (wolf has one tier), size still Large', () => {
    const stats = CompanionService.computeBaseStatBlock(wolfEntry, 10);
    expect(stats.size).toBe('Large');
    // Higher progression bonuses at level 10 mean STR > level-4 value
    const statsLevel4 = CompanionService.computeBaseStatBlock(wolfEntry, 4);
    expect(stats.str).toBeGreaterThanOrEqual(statsLevel4.str);
  });
});

// ---------------------------------------------------------------------------
// 5. Redux slice — addCompanion lifecycle
// ---------------------------------------------------------------------------

describe('characterEntrySlice — companion lifecycle', () => {
  it('starts with no companions', () => {
    const state = makeState();
    expect(state.draft.companions).toHaveLength(0);
  });

  it('addCompanion creates a well-formed instance', () => {
    let state = makeState();
    state = reducer(
      state,
      addCompanion({
        instanceId: 'inst-1',
        sourceEntryId: 'wolf',
        name: 'Shadow',
        grantedBy: classGrant('Druid'),
        effectiveProgressionLevel: 10,
      }),
    );
    const comp = state.draft.companions[0];
    expect(comp).toMatchObject({
      instanceId: 'inst-1',
      sourceEntryId: 'wolf',
      name: 'Shadow',
      effectiveProgressionLevel: 10,
      notes: '',
      background: '',
      feats: [],
      tricks: [],
      skillRanks: {},
      appliedTemplates: [],
    });
    expect(comp.hp).toEqual({ max: 0, current: 0, temp: 0, nonlethal: 0 });
    expect(comp.equipment.magicItems).toHaveLength(0);
    expect(state.isDirty).toBe(true);
  });

  it('removeCompanion removes by instanceId', () => {
    let state = makeState();
    state = reducer(
      state,
      addCompanion({
        instanceId: 'inst-1',
        sourceEntryId: 'wolf',
        name: 'Shadow',
        grantedBy: classGrant('Druid'),
        effectiveProgressionLevel: 10,
      }),
    );
    state = reducer(state, removeCompanion('inst-1'));
    expect(state.draft.companions).toHaveLength(0);
  });

  it('updateCompanionEffectiveLevel updates only the target', () => {
    let state = makeState();
    state = reducer(
      state,
      addCompanion({
        instanceId: 'inst-1',
        sourceEntryId: 'wolf',
        name: 'Shadow',
        grantedBy: classGrant('Druid'),
        effectiveProgressionLevel: 10,
      }),
    );
    state = reducer(
      state,
      updateCompanionEffectiveLevel({ instanceId: 'inst-1', effectiveProgressionLevel: 12 }),
    );
    expect(state.draft.companions[0].effectiveProgressionLevel).toBe(12);
  });

  it('renameCompanion updates the name without touching other fields', () => {
    let state = makeState();
    state = reducer(
      state,
      addCompanion({
        instanceId: 'inst-1',
        sourceEntryId: 'wolf',
        name: 'Shadow',
        grantedBy: classGrant('Druid'),
        effectiveProgressionLevel: 10,
      }),
    );
    state = reducer(state, renameCompanion({ instanceId: 'inst-1', name: 'Fang' }));
    expect(state.draft.companions[0].name).toBe('Fang');
    expect(state.draft.companions[0].sourceEntryId).toBe('wolf');
  });

  it('toggleCompanionTrick adds and then removes the trick', () => {
    let state = makeState();
    state = reducer(
      state,
      addCompanion({
        instanceId: 'inst-1',
        sourceEntryId: 'wolf',
        name: 'Shadow',
        grantedBy: classGrant('Druid'),
        effectiveProgressionLevel: 10,
      }),
    );
    state = reducer(state, toggleCompanionTrick({ instanceId: 'inst-1', trick: 'attack' }));
    expect(state.draft.companions[0].tricks).toContain('attack');
    state = reducer(state, toggleCompanionTrick({ instanceId: 'inst-1', trick: 'attack' }));
    expect(state.draft.companions[0].tricks).not.toContain('attack');
  });

  it('addCompanionFeat records feat with hdWhenTaken', () => {
    let state = makeState();
    state = reducer(
      state,
      addCompanion({
        instanceId: 'inst-1',
        sourceEntryId: 'wolf',
        name: 'Shadow',
        grantedBy: classGrant('Druid'),
        effectiveProgressionLevel: 10,
      }),
    );
    state = reducer(
      state,
      addCompanionFeat({
        instanceId: 'inst-1',
        feat: {
          featId: 'improved-natural-attack',
          name: 'Improved Natural Attack',
          hdWhenTaken: 3,
          active: true,
          choices: {},
        },
      }),
    );
    expect(state.draft.companions[0].feats).toHaveLength(1);
    expect(state.draft.companions[0].feats[0].featId).toBe('improved-natural-attack');
    expect(state.draft.companions[0].feats[0].hdWhenTaken).toBe(3);
  });
});

// ---------------------------------------------------------------------------
// 6. Multi-companion — druid class + template grant coexist
// ---------------------------------------------------------------------------

describe('multi-companion: class grant + template grant coexist', () => {
  function buildMultiCompanionState() {
    let state = makeState();

    // Companion 1: granted by Druid class
    state = reducer(
      state,
      addCompanion({
        instanceId: 'class-comp',
        sourceEntryId: 'wolf',
        name: 'Shadow',
        grantedBy: classGrant('Druid'),
        effectiveProgressionLevel: 10,
      }),
    );

    // Companion 2: granted by druid-creature template
    state = reducer(
      state,
      addCompanion({
        instanceId: 'tpl-comp',
        sourceEntryId: 'leopard',
        name: 'Ghost',
        grantedBy: templateGrant('druid-creature'),
        effectiveProgressionLevel: 7,
      }),
    );

    return state;
  }

  it('draft holds both companions', () => {
    const state = buildMultiCompanionState();
    expect(state.draft.companions).toHaveLength(2);
  });

  it('class companion isolated by grantedBy.type === class', () => {
    const state = buildMultiCompanionState();
    const classCompanions = state.draft.companions.filter((c) => c.grantedBy.type === 'class');
    expect(classCompanions).toHaveLength(1);
    expect(classCompanions[0].instanceId).toBe('class-comp');
  });

  it('template companion isolated by grantedBy.templateId', () => {
    const state = buildMultiCompanionState();
    const tplCompanions = state.draft.companions.filter(
      (c) => c.grantedBy.type === 'template' && c.grantedBy.templateId === 'druid-creature',
    );
    expect(tplCompanions).toHaveLength(1);
    expect(tplCompanions[0].instanceId).toBe('tpl-comp');
  });

  it('removeCompanionsGrantedByClass removes class companion, preserves template companion', () => {
    let state = buildMultiCompanionState();
    state = reducer(state, removeCompanionsGrantedByClass('Druid'));
    expect(state.draft.companions).toHaveLength(1);
    expect(state.draft.companions[0].instanceId).toBe('tpl-comp');
  });

  it('removeCompanion(class-comp) leaves template companion untouched', () => {
    let state = buildMultiCompanionState();
    state = reducer(state, removeCompanion('class-comp'));
    expect(state.draft.companions).toHaveLength(1);
    expect(state.draft.companions[0].grantedBy.type).toBe('template');
  });

  it('each companion mutation is independent', () => {
    let state = buildMultiCompanionState();
    state = reducer(
      state,
      updateCompanionEffectiveLevel({ instanceId: 'class-comp', effectiveProgressionLevel: 11 }),
    );
    const classComp = state.draft.companions.find((c) => c.instanceId === 'class-comp')!;
    const tplComp = state.draft.companions.find((c) => c.instanceId === 'tpl-comp')!;
    expect(classComp.effectiveProgressionLevel).toBe(11);
    expect(tplComp.effectiveProgressionLevel).toBe(7); // unchanged
  });
});

// ---------------------------------------------------------------------------
// 7. Multi-companion (Beastmaster) — multiple class-granted companions
// ---------------------------------------------------------------------------

describe('multi-companion: Beastmaster with two class-granted companions', () => {
  it('two companions from the same class entry can coexist', () => {
    let state = makeState();

    state = reducer(
      state,
      addCompanion({
        instanceId: 'bm-1',
        sourceEntryId: 'wolf',
        name: 'Fang',
        grantedBy: { type: 'class', classEntryId: 'Ranger', classChoiceId: 'beastmaster-1' },
        effectiveProgressionLevel: 7,
      }),
    );

    state = reducer(
      state,
      addCompanion({
        instanceId: 'bm-2',
        sourceEntryId: 'eagle',
        name: 'Talon',
        grantedBy: { type: 'class', classEntryId: 'Ranger', classChoiceId: 'beastmaster-2' },
        effectiveProgressionLevel: 7,
      }),
    );

    expect(state.draft.companions).toHaveLength(2);
  });

  it('removeCompanionsGrantedByClass("Ranger") sweeps both Beastmaster companions', () => {
    let state = makeState();

    state = reducer(
      state,
      addCompanion({
        instanceId: 'bm-1',
        sourceEntryId: 'wolf',
        name: 'Fang',
        grantedBy: { type: 'class', classEntryId: 'Ranger', classChoiceId: 'beastmaster-1' },
        effectiveProgressionLevel: 7,
      }),
    );

    state = reducer(
      state,
      addCompanion({
        instanceId: 'bm-2',
        sourceEntryId: 'eagle',
        name: 'Talon',
        grantedBy: { type: 'class', classEntryId: 'Ranger', classChoiceId: 'beastmaster-2' },
        effectiveProgressionLevel: 7,
      }),
    );

    state = reducer(state, removeCompanionsGrantedByClass('Ranger'));
    expect(state.draft.companions).toHaveLength(0);
  });
});

// ---------------------------------------------------------------------------
// 8. CompanionService.computeAvailableSlots — body-shape gate
// ---------------------------------------------------------------------------

const wolfInstance: CompanionInstance = {
  instanceId: 'slot-test',
  sourceEntryId: 'wolf',
  name: 'Shadow',
  grantedBy: { type: 'class', classEntryId: 'Druid', classChoiceId: 'animal-companion' },
  effectiveProgressionLevel: 10,
  abilityScoreOverrides: {},
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
    equippedSlots: new Map(),
  },
  notes: '',
  background: '',
};

describe('CompanionService.computeAvailableSlots — slot gating by body shape', () => {
  it('quadrupedClaws (wolf) has neck slot', () => {
    const slots = CompanionService.computeAvailableSlots(wolfEntry, wolfInstance);
    expect(slots.some((s) => s.slot === 'neck')).toBe(true);
  });

  it('quadrupedClaws (wolf) does NOT have hands slot', () => {
    const slots = CompanionService.computeAvailableSlots(wolfEntry, wolfInstance);
    expect(slots.some((s) => s.slot === 'hands')).toBe(false);
  });

  it('quadrupedClaws (wolf) has armor slot (automatic)', () => {
    const slots = CompanionService.computeAvailableSlots(wolfEntry, wolfInstance);
    const armorSlot = slots.find((s) => s.slot === 'armor');
    expect(armorSlot).toBeDefined();
    expect(armorSlot?.automatic).toBe(true);
  });

  it('quadrupedClaws (wolf) chest slot is feat-gated (not in automatic list)', () => {
    // chest requires Extra Item Slot feat — absent on wolfInstance, so filtered out
    const slots = CompanionService.computeAvailableSlots(wolfEntry, wolfInstance);
    const chestSlot = slots.find((s) => s.slot === 'chest');
    expect(chestSlot).toBeUndefined();
  });
});
