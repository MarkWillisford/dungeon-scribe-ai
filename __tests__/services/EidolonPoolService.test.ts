import { EidolonPoolService } from '@services/EidolonPoolService';
import type { CharacterDraft } from '@/types/characterDraft';
import type { DraftEidolon, SelectedEvolution } from '@/types/eidolon';

// ---- Fixtures ----

const DATA_INDEX = EidolonPoolService.buildIndexFromStaticData();

function makeDraft(overrides: Partial<CharacterDraft> = {}): CharacterDraft {
  return {
    name: 'Tester',
    player: '',
    raceId: '',
    raceName: 'Human',
    alignment: 'True Neutral' as CharacterDraft['alignment'],
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
    classes: [],
    templates: [],
    combat: {
      currentHP: 0,
      nonlethalDamage: 0,
      tempHP: 0,
      acMiscBonus: 0,
      saveFortMisc: 0,
      saveRefMisc: 0,
      saveWillMisc: 0,
      meleeAttackMisc: 0,
      rangedAttackMisc: 0,
      cmbMisc: 0,
      speedLand: 30,
    },
    skills: {},
    traits: [],
    featSlots: [],
    spellcastingPools: [],
    equipment: [],
    eidolons: [],
    characterNotes: '',
    campaignNotes: '',
    ...overrides,
  };
}

function makeSummonerClass(
  overrides: Partial<CharacterDraft['classes'][number]> = {},
): CharacterDraft['classes'][number] {
  return {
    id: 'summoner-1',
    className: 'Summoner',
    level: 5,
    sourceSystem: 'pf1e',
    classChoices: [],
    prereqOverride: false,
    ...overrides,
  };
}

function makeEidolon(overrides: Partial<DraftEidolon> = {}): DraftEidolon {
  return {
    id: 'eid-1',
    name: 'Aziel',
    summonerClassEntryId: 'summoner-1',
    edition: 'unchained',
    baseForm: 'biped',
    subtype: 'angel',
    selectedEvolutions: [],
    ...overrides,
  };
}

function selectEvolution(id: string, metadata?: SelectedEvolution['metadata']): SelectedEvolution {
  return {
    instanceId: `inst-${id}-${Math.random().toString(36).slice(2, 7)}`,
    evolutionId: id,
    metadata,
  };
}

// ---- Base pool by level ----

describe('EidolonPoolService — base pool', () => {
  const APG_EXPECTED = [3, 4, 5, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 19, 20, 21, 22, 23, 25, 26];
  const UC_EXPECTED = [1, 2, 3, 3, 4, 5, 6, 6, 7, 8, 9, 9, 10, 11, 12, 12, 13, 14, 15, 15];

  for (let lvl = 1; lvl <= 20; lvl++) {
    test(`APG summoner level ${lvl} → ${APG_EXPECTED[lvl - 1]} ep`, () => {
      const draft = makeDraft({
        classes: [makeSummonerClass({ level: lvl })],
        eidolons: [makeEidolon({ edition: 'apg', subtype: undefined })],
      });
      const breakdown = EidolonPoolService.computePool(draft, 'eid-1', DATA_INDEX);
      expect(breakdown.sources.base).toBe(APG_EXPECTED[lvl - 1]);
    });
  }

  for (let lvl = 1; lvl <= 20; lvl++) {
    test(`Unchained summoner level ${lvl} → ${UC_EXPECTED[lvl - 1]} ep`, () => {
      const draft = makeDraft({
        classes: [makeSummonerClass({ level: lvl })],
        eidolons: [makeEidolon({ edition: 'unchained', subtype: 'angel' })],
      });
      const breakdown = EidolonPoolService.computePool(draft, 'eid-1', DATA_INDEX);
      expect(breakdown.sources.base).toBe(UC_EXPECTED[lvl - 1]);
    });
  }
});

// ---- Extra Evolution feat stacking ----

describe('EidolonPoolService — Extra Evolution feats', () => {
  test('each Extra Evolution feat adds +1 ep, capped at 5', () => {
    for (let count = 0; count <= 7; count++) {
      const featSlots = Array.from({ length: count }, (_, i) => ({
        id: `slot-${i}`,
        source: 'level' as const,
        availableAt: 'Lvl 1',
        availableAtLevel: 1,
        featId: 'extra-evolution',
        prereqOverride: false,
      }));
      const draft = makeDraft({
        classes: [makeSummonerClass({ level: 10 })],
        eidolons: [makeEidolon({ edition: 'apg', subtype: undefined })],
        featSlots,
      });
      const breakdown = EidolonPoolService.computePool(draft, 'eid-1', DATA_INDEX);
      expect(breakdown.sources.extraEvolutionFeats).toBe(Math.min(count, 5));
    }
  });
});

// ---- Subtype bonus ep grants ----

describe('EidolonPoolService — subtype bonus ep grants', () => {
  test.each([
    ['aberrant', 4, 1],
    ['archon', 4, 1],
    ['elemental', 4, 1],
    ['kyton', 4, 1],
    ['daemon', 8, 1],
    ['demon', 8, 1],
    ['div', 8, 1],
    ['psychopomp', 8, 1],
    ['shadow', 8, 1],
  ])('%s grants +%s ep at summoner level %s', (subtype, level, expected) => {
    const draft = makeDraft({
      classes: [makeSummonerClass({ level })],
      eidolons: [makeEidolon({ subtype: subtype as DraftEidolon['subtype'] })],
    });
    const breakdown = EidolonPoolService.computePool(draft, 'eid-1', DATA_INDEX);
    expect(breakdown.sources.subtypeGrants).toBe(expected);
  });

  test('archon bonus does not apply at level 3 (pre-L4)', () => {
    const draft = makeDraft({
      classes: [makeSummonerClass({ level: 3 })],
      eidolons: [makeEidolon({ subtype: 'archon' })],
    });
    const breakdown = EidolonPoolService.computePool(draft, 'eid-1', DATA_INDEX);
    expect(breakdown.sources.subtypeGrants).toBe(0);
  });

  test('angel subtype grants 0 bonus ep (no +ep in its scaling)', () => {
    const draft = makeDraft({
      classes: [makeSummonerClass({ level: 20 })],
      eidolons: [makeEidolon({ subtype: 'angel' })],
    });
    const breakdown = EidolonPoolService.computePool(draft, 'eid-1', DATA_INDEX);
    expect(breakdown.sources.subtypeGrants).toBe(0);
  });
});

// ---- Archetype modifiers ----

describe('EidolonPoolService — archetypes', () => {
  test('Master Summoner halves class level for pool math', () => {
    // Master Summoner level 10 APG → uses level 5 pool = 8 ep
    const draft = makeDraft({
      classes: [makeSummonerClass({ level: 10, archetypeId: 'master-summoner' })],
      eidolons: [makeEidolon({ edition: 'apg', subtype: undefined })],
    });
    const breakdown = EidolonPoolService.computePool(draft, 'eid-1', DATA_INDEX);
    expect(breakdown.sources.base).toBe(8); // level 5 APG pool
    // Archetype modifier captures the delta from full-level pool to halved-level
    expect(breakdown.sources.archetypeModifier).toBe(-6); // 14 - 8 = 6 lost
  });

  test('Wild Caller (ARG) adds floor(level / 4) ep', () => {
    const draft = makeDraft({
      classes: [makeSummonerClass({ level: 16, archetypeId: 'wild-caller-arg' })],
      eidolons: [makeEidolon({ edition: 'apg', subtype: undefined })],
    });
    const breakdown = EidolonPoolService.computePool(draft, 'eid-1', DATA_INDEX);
    expect(breakdown.sources.archetypeModifier).toBe(4); // floor(16/4)
  });

  test('Morphic Savant: -1 flat', () => {
    const draft = makeDraft({
      classes: [makeSummonerClass({ level: 10, archetypeId: 'morphic-savant' })],
      eidolons: [makeEidolon({ edition: 'apg', subtype: undefined })],
    });
    const breakdown = EidolonPoolService.computePool(draft, 'eid-1', DATA_INDEX);
    expect(breakdown.sources.archetypeModifier).toBe(-1);
  });

  test('Unwavering Conduit: -1 flat', () => {
    const draft = makeDraft({
      classes: [makeSummonerClass({ level: 10, archetypeId: 'unwavering-conduit' })],
      eidolons: [makeEidolon({ edition: 'apg', subtype: undefined })],
    });
    const breakdown = EidolonPoolService.computePool(draft, 'eid-1', DATA_INDEX);
    expect(breakdown.sources.archetypeModifier).toBe(-1);
  });

  test('Pyroclast: -1 flat', () => {
    const draft = makeDraft({
      classes: [makeSummonerClass({ level: 10, archetypeId: 'pyroclast' })],
      eidolons: [makeEidolon({ edition: 'apg', subtype: undefined })],
    });
    const breakdown = EidolonPoolService.computePool(draft, 'eid-1', DATA_INDEX);
    expect(breakdown.sources.archetypeModifier).toBe(-1);
  });

  test('Broodmaster with 2 eidolons splits the pool evenly', () => {
    const draft = makeDraft({
      classes: [makeSummonerClass({ level: 5, archetypeId: 'broodmaster' })],
      eidolons: [
        makeEidolon({ id: 'eid-1', name: 'A', edition: 'apg', subtype: undefined }),
        makeEidolon({ id: 'eid-2', name: 'B', edition: 'apg', subtype: undefined }),
      ],
    });
    // APG L5 pool = 8; split = 4/4
    const bA = EidolonPoolService.computePool(draft, 'eid-1', DATA_INDEX);
    const bB = EidolonPoolService.computePool(draft, 'eid-2', DATA_INDEX);
    expect(bA.total).toBe(4);
    expect(bB.total).toBe(4);
  });

  test('Broodmaster with 3 eidolons: uneven split leftover goes to first eidolon', () => {
    const draft = makeDraft({
      classes: [makeSummonerClass({ level: 5, archetypeId: 'broodmaster' })],
      eidolons: [
        makeEidolon({ id: 'eid-1', name: 'A', edition: 'apg', subtype: undefined }),
        makeEidolon({ id: 'eid-2', name: 'B', edition: 'apg', subtype: undefined }),
        makeEidolon({ id: 'eid-3', name: 'C', edition: 'apg', subtype: undefined }),
      ],
    });
    // APG L5 pool = 8; split 3 ways = 2, 2, 2 + leftover 2 to first = 4, 2, 2
    const bA = EidolonPoolService.computePool(draft, 'eid-1', DATA_INDEX);
    const bB = EidolonPoolService.computePool(draft, 'eid-2', DATA_INDEX);
    const bC = EidolonPoolService.computePool(draft, 'eid-3', DATA_INDEX);
    expect(bA.total).toBe(4);
    expect(bB.total).toBe(2);
    expect(bC.total).toBe(2);
  });

  test('Broodmaster pre-spent shared evolution subtracts from the split pool', () => {
    // APG L8 pool = 11, spend 4 on Large → 7 left, split 2 ways = 3/3, leftover 1 to first = 4/3
    const draft = makeDraft({
      classes: [
        makeSummonerClass({
          level: 8,
          archetypeId: 'broodmaster',
          summonerBroodmaster: {
            sharedEvolutions: [selectEvolution('evolution-large')],
          },
        }),
      ],
      eidolons: [
        makeEidolon({ id: 'eid-1', name: 'A', edition: 'apg', subtype: undefined }),
        makeEidolon({ id: 'eid-2', name: 'B', edition: 'apg', subtype: undefined }),
      ],
    });
    const bA = EidolonPoolService.computePool(draft, 'eid-1', DATA_INDEX);
    const bB = EidolonPoolService.computePool(draft, 'eid-2', DATA_INDEX);
    expect(bA.total).toBe(4);
    expect(bB.total).toBe(3);
  });
});

// ---- Aspect / Greater Aspect ----

describe('EidolonPoolService — aspectCostToEidolon', () => {
  test('Aspect at L10–L17 is 1:1 exchange', () => {
    expect(EidolonPoolService.aspectCostToEidolon(2, 10)).toBe(2);
    expect(EidolonPoolService.aspectCostToEidolon(2, 17)).toBe(2);
  });
  test('Greater Aspect at L18+ is 2:1 rounded up', () => {
    expect(EidolonPoolService.aspectCostToEidolon(6, 18)).toBe(3);
    expect(EidolonPoolService.aspectCostToEidolon(5, 20)).toBe(3); // ceil(5/2) = 3
    expect(EidolonPoolService.aspectCostToEidolon(3, 18)).toBe(2); // ceil(3/2) = 2
  });
  test('No diversion returns 0', () => {
    expect(EidolonPoolService.aspectCostToEidolon(0, 15)).toBe(0);
    expect(EidolonPoolService.aspectCostToEidolon(-3, 10)).toBe(0);
  });

  test('computePool reports transferredToSummoner', () => {
    const draft = makeDraft({
      classes: [makeSummonerClass({ level: 18 })],
      eidolons: [
        makeEidolon({
          edition: 'apg',
          subtype: undefined,
          aspectTransfer: { divertedPoints: 6, summonerEvolutions: [] },
        }),
      ],
    });
    const b = EidolonPoolService.computePool(draft, 'eid-1', DATA_INDEX);
    expect(b.transferredToSummoner).toBe(3);
    // APG L18 = 23 ep, minus 3 transfer = 20 remaining (no spent evolutions)
    expect(b.remaining).toBe(23 - 3);
  });
});

// ---- Pool override ----

describe('EidolonPoolService — pool override', () => {
  test('override replaces calculated total', () => {
    const draft = makeDraft({
      classes: [makeSummonerClass({ level: 5 })],
      eidolons: [
        makeEidolon({
          edition: 'apg',
          subtype: undefined,
          poolOverride: { value: 99, note: 'DM granted bonus ep for story beat' },
        }),
      ],
    });
    const b = EidolonPoolService.computePool(draft, 'eid-1', DATA_INDEX);
    expect(b.total).toBe(99);
    expect(b.sources.override).toBe(99);
    expect(b.sources.base).toBe(8); // calculated source still populated
  });

  test('override without reason produces a warning', () => {
    const draft = makeDraft({
      classes: [makeSummonerClass({ level: 5 })],
      eidolons: [
        makeEidolon({
          edition: 'apg',
          subtype: undefined,
          poolOverride: { value: 10, note: '' },
        }),
      ],
    });
    const b = EidolonPoolService.computePool(draft, 'eid-1', DATA_INDEX);
    expect(b.warnings.some((w) => /reason note/i.test(w))).toBe(true);
  });
});

// ---- Overspend ----

describe('EidolonPoolService — overspend warning', () => {
  test('spending more than the pool triggers a warning', () => {
    const draft = makeDraft({
      classes: [makeSummonerClass({ level: 1 })], // UC L1 = 1 ep
      eidolons: [
        makeEidolon({
          edition: 'unchained',
          subtype: 'angel',
          selectedEvolutions: [
            selectEvolution('evolution-bite'),
            selectEvolution('evolution-claws'),
          ],
        }),
      ],
    });
    const b = EidolonPoolService.computePool(draft, 'eid-1', DATA_INDEX);
    expect(b.spent).toBe(2);
    expect(b.remaining).toBe(-1);
    expect(b.warnings.some((w) => /overspent/i.test(w))).toBe(true);
  });
});

// ---- Free evolutions ----

describe('EidolonPoolService — computeFreeEvolutions', () => {
  test('biped base form grants claws + two limbs', () => {
    const free = EidolonPoolService.computeFreeEvolutions('biped', undefined, 1, DATA_INDEX);
    expect(free.filter((e) => e === 'evolution-claws')).toHaveLength(1);
    expect(free.filter((e) => e === 'evolution-limbs')).toHaveLength(2);
  });

  test('angel subtype adds flight evolution at L8', () => {
    const freeAtL7 = EidolonPoolService.computeFreeEvolutions('biped', 'angel', 7, DATA_INDEX);
    const freeAtL8 = EidolonPoolService.computeFreeEvolutions('biped', 'angel', 8, DATA_INDEX);
    expect(freeAtL7.includes('evolution-flight')).toBe(false);
    expect(freeAtL8.includes('evolution-flight')).toBe(true);
  });
});

// ---- totalEvolutionCost ----

describe('EidolonPoolService — totalEvolutionCost', () => {
  test('sums the cost of known evolutions', () => {
    const cost = EidolonPoolService.totalEvolutionCost(
      [
        selectEvolution('evolution-bite'), // 1
        selectEvolution('evolution-claws'), // 1
        selectEvolution('evolution-ability-increase', { ability: 'str' }), // 2
        selectEvolution('evolution-large'), // 4
      ],
      DATA_INDEX,
    );
    expect(cost).toBe(8);
  });

  test('unknown evolutions contribute zero', () => {
    const cost = EidolonPoolService.totalEvolutionCost(
      [selectEvolution('evolution-bite'), selectEvolution('made-up-evo')],
      DATA_INDEX,
    );
    expect(cost).toBe(1);
  });
});

// ---- canSelectEvolution ----

describe('EidolonPoolService — canSelectEvolution', () => {
  test('edition mismatch is rejected (UC-only picking APG-only)', () => {
    const uc = makeEidolon({ edition: 'unchained', subtype: 'angel' });
    // Bleed is APG-only
    const result = EidolonPoolService.canSelectEvolution(
      'evolution-bleed',
      uc,
      10,
      100,
      DATA_INDEX,
    );
    expect(result.allowed).toBe(false);
    expect(result.reason).toMatch(/APG/);
  });

  test('base form restriction blocks serpentine-required evolution on biped', () => {
    const biped = makeEidolon({ baseForm: 'biped', subtype: 'angel' });
    // Constrict requires serpentine base form
    const result = EidolonPoolService.canSelectEvolution(
      'evolution-constrict',
      biped,
      10,
      100,
      DATA_INDEX,
    );
    expect(result.allowed).toBe(false);
    expect(result.reason).toMatch(/serpentine/);
  });

  test('subtype restriction rejects when subtype does not match (UC Poison on angel)', () => {
    const angel = makeEidolon({ baseForm: 'biped', subtype: 'angel', edition: 'unchained' });
    // Poison UC requires daemon/demon/devil/elemental/protean
    const result = EidolonPoolService.canSelectEvolution(
      'evolution-poison-uc',
      angel,
      10,
      100,
      DATA_INDEX,
    );
    expect(result.allowed).toBe(false);
    expect(result.reason).toMatch(/subtype/i);
  });

  test('level gate blocks Large at summoner level 7 (APG requires 8)', () => {
    const biped = makeEidolon({ subtype: 'angel' });
    const result = EidolonPoolService.canSelectEvolution(
      'evolution-large',
      biped,
      7,
      100,
      DATA_INDEX,
    );
    expect(result.allowed).toBe(false);
    expect(result.reason).toMatch(/level 8/);
  });

  test('level gate passes at exactly the minimum', () => {
    const biped = makeEidolon({ subtype: 'angel' });
    const result = EidolonPoolService.canSelectEvolution(
      'evolution-large',
      biped,
      8,
      100,
      DATA_INDEX,
    );
    expect(result.allowed).toBe(true);
  });

  test('evolution prereq blocks selection without prior evolution', () => {
    const biped = makeEidolon({ subtype: 'angel', selectedEvolutions: [] });
    // claws requires limbs — biped's free evolutions include limbs, but the
    // selectedEvolutions list doesn't carry them. canSelectEvolution checks
    // against selectedEvolutions only; free evolutions are the picker's job.
    const result = EidolonPoolService.canSelectEvolution(
      'evolution-claws',
      biped,
      10,
      100,
      DATA_INDEX,
    );
    expect(result.allowed).toBe(false);
    expect(result.reason).toMatch(/limbs/i);
  });

  test('evolution prereq passes when the prereq evolution is present', () => {
    const biped = makeEidolon({
      subtype: 'angel',
      selectedEvolutions: [selectEvolution('evolution-limbs', { notes: 'arms' })],
    });
    const result = EidolonPoolService.canSelectEvolution(
      'evolution-claws',
      biped,
      10,
      100,
      DATA_INDEX,
    );
    expect(result.allowed).toBe(true);
  });

  test('cost exceeding remaining pool is rejected', () => {
    const biped = makeEidolon({ subtype: 'angel' });
    const result = EidolonPoolService.canSelectEvolution(
      'evolution-large', // 4 ep
      biped,
      10,
      3,
      DATA_INDEX,
    );
    expect(result.allowed).toBe(false);
    expect(result.reason).toMatch(/only 3 remaining/);
  });

  test('stacking canRepeat=false rejects a second selection', () => {
    const biped = makeEidolon({
      subtype: 'angel',
      selectedEvolutions: [selectEvolution('evolution-large')],
    });
    const result = EidolonPoolService.canSelectEvolution(
      'evolution-large',
      biped,
      20,
      100,
      DATA_INDEX,
    );
    expect(result.allowed).toBe(false);
    expect(result.reason).toMatch(/more than once/);
  });

  test('breath weapon cannot repeat (additional uses are an upgrade, not a re-take)', () => {
    const biped = makeEidolon({
      subtype: 'angel',
      selectedEvolutions: [selectEvolution('evolution-breath-weapon', { energyType: 'fire' })],
    });
    const result = EidolonPoolService.canSelectEvolution(
      'evolution-breath-weapon',
      biped,
      20,
      100,
      DATA_INDEX,
      { energyType: 'cold' },
    );
    expect(result.allowed).toBe(false);
    expect(result.reason).toMatch(/more than once/);
  });

  test('requiresDifferentMetadata=energy rejects the same energy type repeat', () => {
    const biped = makeEidolon({
      subtype: 'angel',
      selectedEvolutions: [selectEvolution('evolution-resistance', { energyType: 'fire' })],
    });
    const result = EidolonPoolService.canSelectEvolution(
      'evolution-resistance',
      biped,
      10,
      100,
      DATA_INDEX,
      { energyType: 'fire' },
    );
    expect(result.allowed).toBe(false);
    expect(result.reason).toMatch(/already taken/i);
  });

  test('requiresDifferentMetadata=energy allows a different energy type', () => {
    const biped = makeEidolon({
      subtype: 'angel',
      selectedEvolutions: [selectEvolution('evolution-resistance', { energyType: 'fire' })],
    });
    const result = EidolonPoolService.canSelectEvolution(
      'evolution-resistance',
      biped,
      10,
      100,
      DATA_INDEX,
      { energyType: 'cold' },
    );
    expect(result.allowed).toBe(true);
  });

  test('ability increase cap: STR at L1 caps at 1', () => {
    const biped = makeEidolon({
      subtype: 'angel',
      selectedEvolutions: [selectEvolution('evolution-ability-increase', { ability: 'str' })],
    });
    const result = EidolonPoolService.canSelectEvolution(
      'evolution-ability-increase',
      biped,
      1,
      100,
      DATA_INDEX,
      { ability: 'str' },
    );
    expect(result.allowed).toBe(false);
    expect(result.reason).toMatch(/cap/i);
  });

  test('ability increase cap: STR at L6 allows 2', () => {
    const biped = makeEidolon({
      subtype: 'angel',
      selectedEvolutions: [selectEvolution('evolution-ability-increase', { ability: 'str' })],
    });
    const result = EidolonPoolService.canSelectEvolution(
      'evolution-ability-increase',
      biped,
      6,
      100,
      DATA_INDEX,
      { ability: 'str' },
    );
    expect(result.allowed).toBe(true);
  });

  test('ability increase cap: different ability scores each allow one at L1', () => {
    const biped = makeEidolon({
      subtype: 'angel',
      selectedEvolutions: [selectEvolution('evolution-ability-increase', { ability: 'str' })],
    });
    const result = EidolonPoolService.canSelectEvolution(
      'evolution-ability-increase',
      biped,
      1,
      100,
      DATA_INDEX,
      { ability: 'dex' },
    );
    expect(result.allowed).toBe(true);
  });
});

// ---- computeInvalidatedEvolutions ----

describe('EidolonPoolService — computeInvalidatedEvolutions', () => {
  test('returns empty when nothing is selected', () => {
    const eidolon = makeEidolon({ selectedEvolutions: [] });
    expect(
      EidolonPoolService.computeInvalidatedEvolutions(eidolon, 'quadruped', null, DATA_INDEX),
    ).toEqual([]);
  });

  test('returns empty when selections have no form/subtype restrictions', () => {
    const eidolon = makeEidolon({
      baseForm: 'biped',
      subtype: 'demon',
      selectedEvolutions: [selectEvolution('evolution-bite')],
    });
    const result = EidolonPoolService.computeInvalidatedEvolutions(
      eidolon,
      'quadruped',
      null,
      DATA_INDEX,
    );
    expect(result).toEqual([]);
  });

  test('flags evolutions whose subtype restriction the new subtype breaks', () => {
    // evolution-mount-uc requires daemon/demon/devil/elemental/protean AND quadruped/serpentine
    const eidolon = makeEidolon({
      edition: 'unchained',
      baseForm: 'quadruped',
      subtype: 'demon',
      selectedEvolutions: [selectEvolution('evolution-mount-uc')],
    });
    const result = EidolonPoolService.computeInvalidatedEvolutions(
      eidolon,
      null,
      'angel',
      DATA_INDEX,
    );
    expect(result).toHaveLength(1);
    expect(result[0].evolutionId).toBe('evolution-mount-uc');
    expect(result[0].reason).toMatch(/subtype/);
  });

  test('flags evolutions whose form restriction the new base form breaks', () => {
    // evolution-mount-uc requires quadruped or serpentine base form
    const eidolon = makeEidolon({
      edition: 'unchained',
      baseForm: 'quadruped',
      subtype: 'demon',
      selectedEvolutions: [selectEvolution('evolution-mount-uc')],
    });
    const result = EidolonPoolService.computeInvalidatedEvolutions(
      eidolon,
      'biped',
      null,
      DATA_INDEX,
    );
    expect(result).toHaveLength(1);
    expect(result[0].evolutionId).toBe('evolution-mount-uc');
    expect(result[0].reason).toMatch(/base form/);
  });

  test('flags subtype-restricted evolutions when subtype is cleared', () => {
    const eidolon = makeEidolon({
      edition: 'unchained',
      baseForm: 'quadruped',
      subtype: 'demon',
      selectedEvolutions: [selectEvolution('evolution-mount-uc')],
    });
    const result = EidolonPoolService.computeInvalidatedEvolutions(
      eidolon,
      null,
      undefined,
      DATA_INDEX,
    );
    expect(result).toHaveLength(1);
    expect(result[0].evolutionId).toBe('evolution-mount-uc');
  });

  test('returns the instanceId from the SelectedEvolution', () => {
    const selection = selectEvolution('evolution-mount-uc');
    const eidolon = makeEidolon({
      baseForm: 'quadruped',
      subtype: 'demon',
      selectedEvolutions: [selection],
    });
    const result = EidolonPoolService.computeInvalidatedEvolutions(
      eidolon,
      'biped',
      null,
      DATA_INDEX,
    );
    expect(result[0].instanceId).toBe(selection.instanceId);
  });

  test('ignores unknown evolution ids (leaves validation to surface them)', () => {
    const eidolon = makeEidolon({
      selectedEvolutions: [selectEvolution('evolution-does-not-exist')],
    });
    const result = EidolonPoolService.computeInvalidatedEvolutions(
      eidolon,
      'biped',
      null,
      DATA_INDEX,
    );
    expect(result).toEqual([]);
  });
});
