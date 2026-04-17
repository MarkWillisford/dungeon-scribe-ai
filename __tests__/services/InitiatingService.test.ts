import { InitiatingService } from '@services/InitiatingService';
import type {
  InitiatingContributor,
  InitiatingPool,
  KnownManeuver,
  ManeuverDefinition,
  MartialTradition,
  ReadiedManeuver,
  InitiatingProgressionTable,
} from '@/types/initiating';
import type { InitiatingData } from '@/data/classes/types';
import type { GameDataSource } from '@/types/gameData';

const POW_SOURCE: GameDataSource = {
  bookId: 'pow',
  bookName: 'Path of War',
  publisher: 'Dreamscarred Press',
};
const POWE_SOURCE: GameDataSource = {
  bookId: 'powe',
  bookName: 'Path of War: Expanded',
  publisher: 'Dreamscarred Press',
};

// ---- Fixtures ----

const MOCK_TABLES: Record<string, InitiatingProgressionTable> = {
  warblade: [
    [5, 4, 1], // 1
    [6, 4, 1], // 2
    [7, 5, 1], // 3
    [8, 5, 2], // 4
    [9, 5, 2], // 5
    [10, 6, 2], // 6
    [11, 6, 2], // 7
    [12, 6, 3], // 8
    [13, 7, 3], // 9
    [14, 7, 3], // 10
    [15, 7, 4], // 11
    [16, 8, 4], // 12
    [17, 8, 4], // 13
    [18, 8, 4], // 14
    [19, 9, 5], // 15
    [20, 9, 5], // 16
    [21, 9, 5], // 17
    [22, 10, 5], // 18
    [23, 10, 6], // 19
    [24, 10, 6], // 20
  ],
};

const MOCK_CLASS_DATA: InitiatingData = {
  type: 'Martial',
  initiatingAbility: 'INT',
  ilProgression: 'full',
  disciplines: ['iron-heart', 'diamond-mind', 'tiger-claw'],
  progressionTableKey: 'warblade',
  recoveryMechanics: {
    primary: { type: 'strike_recovers_all' },
  },
};

function makePool(overrides?: Partial<InitiatingPool>): InitiatingPool {
  return {
    baseClass: 'warblade',
    initiatingAbility: 'INT',
    contributors: [],
    effectiveInitiatorLevel: 10,
    maxManeuverLevel: 5,
    maneuversKnown: 14,
    maneuversReadied: 7,
    stancesKnown: 3,
    accessibleDisciplines: ['iron-heart', 'diamond-mind', 'tiger-claw'],
    bonusDisciplines: [],
    removedDisciplines: [],
    recoveryMechanics: { primary: { type: 'strike_recovers_all' } },
    maneuverDC: { base: 13, abilityMod: 3, miscBonus: 0 },
    ...overrides,
  };
}

function makeManeuver(overrides?: Partial<ManeuverDefinition>): ManeuverDefinition {
  return {
    id: 'test-maneuver',
    name: 'Test Strike',
    disciplineId: 'iron-heart',
    level: 3,
    type: 'strike',
    actionType: 'standard',
    range: 'melee',
    duration: 'instantaneous',
    description: '',
    prerequisites: {},
    source: POW_SOURCE,
    isOfficial: false,
    visibility: 'global',
    rev: 1,
    verificationStatus: 'needs_review',
    ...overrides,
  };
}

function makeContributor(
  className: string,
  classLevels: number,
  ilProgression: 'full' | 'half',
): InitiatingContributor {
  return {
    className,
    classLevels,
    ilProgression,
    advancesManeuverAccess: ilProgression === 'full',
    advancesInitiatorLevel: true,
  };
}

// ---- computeInitiatorLevel ----

describe('InitiatingService.computeInitiatorLevel', () => {
  it('single full initiator', () => {
    expect(InitiatingService.computeInitiatorLevel([makeContributor('Warblade', 10, 'full')])).toBe(
      10,
    );
  });

  it('full initiator + non-initiating class', () => {
    // Warder 4 / Fighter 10 → 4 + floor(10/2) = 9
    const contributors = [makeContributor('Warder', 4, 'full'), makeContributor('Fighter', 10, 'half')];
    expect(InitiatingService.computeInitiatorLevel(contributors)).toBe(9);
  });

  it('two initiating pools — each treats other as half', () => {
    // Stalker 6 / Warder 4: Stalker pool IL = 6 + floor(4/2) = 8
    const stalkerPoolContributors = [
      makeContributor('Stalker', 6, 'full'),
      makeContributor('Warder', 4, 'half'),
    ];
    expect(InitiatingService.computeInitiatorLevel(stalkerPoolContributors)).toBe(8);

    // Warder pool IL = 4 + floor(6/2) = 7
    const warderPoolContributors = [
      makeContributor('Warder', 4, 'full'),
      makeContributor('Stalker', 6, 'half'),
    ];
    expect(InitiatingService.computeInitiatorLevel(warderPoolContributors)).toBe(7);
  });

  it('minimum IL is 1 when any full initiating levels exist', () => {
    const contributors = [makeContributor('Warblade', 1, 'full')];
    expect(InitiatingService.computeInitiatorLevel(contributors)).toBe(1);
  });

  it('non-initiating character has IL 0', () => {
    const contributors = [makeContributor('Fighter', 10, 'half')];
    expect(InitiatingService.computeInitiatorLevel(contributors)).toBe(0);
  });

  it('20th level single initiator', () => {
    expect(
      InitiatingService.computeInitiatorLevel([makeContributor('Warblade', 20, 'full')]),
    ).toBe(20);
  });

  it('respects advancesInitiatorLevel = false', () => {
    const contributors: InitiatingContributor[] = [
      makeContributor('Warblade', 10, 'full'),
      {
        className: 'Prestige',
        classLevels: 5,
        ilProgression: 'half',
        advancesManeuverAccess: false,
        advancesInitiatorLevel: false, // does NOT contribute
      },
    ];
    expect(InitiatingService.computeInitiatorLevel(contributors)).toBe(10);
  });
});

// ---- maxManeuverLevel ----

describe('InitiatingService.maxManeuverLevel', () => {
  it.each([
    [1, 1],
    [2, 1],
    [3, 2],
    [4, 2],
    [5, 3],
    [9, 5],
    [10, 5],
    [17, 9],
    [18, 9],
    [20, 10], // exceeds cap
  ])('IL %i → max level %i (capped at 9)', (il, expected) => {
    expect(InitiatingService.maxManeuverLevel(il)).toBe(Math.min(9, expected));
  });

  it('IL 20 caps at 9', () => {
    expect(InitiatingService.maxManeuverLevel(20)).toBe(9);
  });
});

// ---- getProgressionAtLevel ----

describe('InitiatingService.getProgressionAtLevel', () => {
  it('returns correct progression at level 1', () => {
    expect(InitiatingService.getProgressionAtLevel(MOCK_TABLES, 'warblade', 1)).toEqual([5, 4, 1]);
  });

  it('returns correct progression at level 10', () => {
    expect(InitiatingService.getProgressionAtLevel(MOCK_TABLES, 'warblade', 10)).toEqual([14, 7, 3]);
  });

  it('returns null for unknown table key', () => {
    expect(InitiatingService.getProgressionAtLevel(MOCK_TABLES, 'unknown-class', 5)).toBeNull();
  });

  it('returns null for level out of range', () => {
    expect(InitiatingService.getProgressionAtLevel(MOCK_TABLES, 'warblade', 21)).toBeNull();
  });
});

// ---- computeManeuverDC ----

describe('InitiatingService.computeManeuverDC', () => {
  it('base formula: 10 + level + mod + misc', () => {
    expect(InitiatingService.computeManeuverDC(5, 3, 0)).toBe(18);
  });

  it('includes misc bonus', () => {
    expect(InitiatingService.computeManeuverDC(3, 2, 2)).toBe(17);
  });

  it('works with negative ability mod', () => {
    expect(InitiatingService.computeManeuverDC(4, -1, 0)).toBe(13);
  });
});

// ---- canLearnManeuver ----

describe('InitiatingService.canLearnManeuver', () => {
  const pool = makePool({ maxManeuverLevel: 5, effectiveInitiatorLevel: 9 });

  it('allows maneuver in accessible discipline within level cap', () => {
    const maneuver = makeManeuver({ disciplineId: 'iron-heart', level: 3 });
    expect(InitiatingService.canLearnManeuver(maneuver, pool, [])).toBe(true);
  });

  it('blocks maneuver from non-accessible discipline', () => {
    const maneuver = makeManeuver({ disciplineId: 'golden-lion', level: 1 });
    expect(InitiatingService.canLearnManeuver(maneuver, pool, [])).toBe(false);
  });

  it('blocks maneuver exceeding maxManeuverLevel', () => {
    const maneuver = makeManeuver({ disciplineId: 'iron-heart', level: 6 });
    expect(InitiatingService.canLearnManeuver(maneuver, pool, [])).toBe(false);
  });

  it('blocks if required specific maneuver not known', () => {
    const maneuver = makeManeuver({
      prerequisites: { requiredManeuverIds: ['steel-wind'] },
    });
    expect(InitiatingService.canLearnManeuver(maneuver, pool, [])).toBe(false);
  });

  it('allows when required specific maneuver is known', () => {
    const maneuver = makeManeuver({
      prerequisites: { requiredManeuverIds: ['steel-wind'] },
    });
    const knownManeuvers: KnownManeuver[] = [
      {
        maneuverId: 'steel-wind',
        maneuverName: 'Steel Wind',
        disciplineId: 'iron-heart',
        level: 1,
        type: 'strike',
        poolBaseClass: 'warblade',
      },
    ];
    expect(InitiatingService.canLearnManeuver(maneuver, pool, knownManeuvers)).toBe(true);
  });

  it('self-inclusive disciplineManeuversKnown: 0 known + learning = 1, satisfies prereq of 1', () => {
    // Prereq says 1 Iron Heart maneuver. Character knows 0.
    // Self-inclusive: learning this maneuver counts as +1, so 0+1=1 >= 1. Should pass.
    const maneuver = makeManeuver({
      disciplineId: 'iron-heart',
      prerequisites: { disciplineManeuversKnown: 1 },
    });
    expect(InitiatingService.canLearnManeuver(maneuver, pool, [])).toBe(true);
  });

  it('self-inclusive disciplineManeuversKnown: prereq of 2, only 0 other known → blocks', () => {
    // Prereq says 2 Iron Heart. Know 0. 0+1=1 < 2. Should block.
    const maneuver = makeManeuver({
      disciplineId: 'iron-heart',
      prerequisites: { disciplineManeuversKnown: 2 },
    });
    expect(InitiatingService.canLearnManeuver(maneuver, pool, [])).toBe(false);
  });

  it('self-inclusive disciplineManeuversKnown: prereq of 2, 1 other known → allows', () => {
    // Prereq says 2 Iron Heart. Know 1. 1+1=2 >= 2. Should allow.
    const maneuver = makeManeuver({
      disciplineId: 'iron-heart',
      prerequisites: { disciplineManeuversKnown: 2 },
    });
    const knownManeuvers: KnownManeuver[] = [
      {
        maneuverId: 'steel-wind',
        maneuverName: 'Steel Wind',
        disciplineId: 'iron-heart',
        level: 1,
        type: 'strike',
        poolBaseClass: 'warblade',
      },
    ];
    expect(InitiatingService.canLearnManeuver(maneuver, pool, knownManeuvers)).toBe(true);
  });

  it('blocks if minimumInitiatorLevel not met', () => {
    const maneuver = makeManeuver({
      prerequisites: { minimumInitiatorLevel: 15 },
    });
    expect(InitiatingService.canLearnManeuver(maneuver, pool, [])).toBe(false);
  });

  it('allows if minimumInitiatorLevel is met', () => {
    const maneuver = makeManeuver({
      prerequisites: { minimumInitiatorLevel: 9 },
    });
    expect(InitiatingService.canLearnManeuver(maneuver, pool, [])).toBe(true);
  });
});

// ---- buildPool ----

describe('InitiatingService.buildPool', () => {
  it('builds a pool with correct IL and progression at level 10', () => {
    const contributors = [
      makeContributor('Warblade', 10, 'full'),
      makeContributor('Fighter', 10, 'half'),
    ];
    const pool = InitiatingService.buildPool(
      'Warblade',
      MOCK_CLASS_DATA,
      10, // classLevel
      contributors,
      [],
      [],
      MOCK_TABLES,
      3, // abilityMod
    );

    expect(pool.baseClass).toBe('Warblade');
    expect(pool.effectiveInitiatorLevel).toBe(15); // 10 + floor(10/2)
    expect(pool.maxManeuverLevel).toBe(8); // ceil(15/2)
    expect(pool.maneuversKnown).toBe(14); // MOCK_TABLES.warblade[9][0]
    expect(pool.maneuversReadied).toBe(7); // MOCK_TABLES.warblade[9][1]
    expect(pool.stancesKnown).toBe(3); // MOCK_TABLES.warblade[9][2]
    expect(pool.accessibleDisciplines).toEqual(['iron-heart', 'diamond-mind', 'tiger-claw']);
    expect(pool.maneuverDC.abilityMod).toBe(3);
    expect(pool.maneuverDC.base).toBe(13); // 10 + 3
  });

  it('falls back to [0, 0, 0] for unknown progression table key', () => {
    const pool = InitiatingService.buildPool(
      'Unknown',
      { ...MOCK_CLASS_DATA, progressionTableKey: 'missing-key' },
      5,
      [makeContributor('Unknown', 5, 'full')],
      [],
      [],
      MOCK_TABLES,
      2,
    );
    expect(pool.maneuversKnown).toBe(0);
    expect(pool.maneuversReadied).toBe(0);
    expect(pool.stancesKnown).toBe(0);
  });
});

// ---- getEffectiveDisciplines ----

describe('InitiatingService.getEffectiveDisciplines', () => {
  it('returns base disciplines when no swaps', () => {
    const pool = makePool();
    expect(InitiatingService.getEffectiveDisciplines(pool)).toEqual([
      'iron-heart',
      'diamond-mind',
      'tiger-claw',
    ]);
  });

  it('removes disciplines in removedDisciplines', () => {
    const pool = makePool({
      removedDisciplines: [{ disciplineId: 'tiger-claw', reason: 'Archetype swap' }],
    });
    expect(InitiatingService.getEffectiveDisciplines(pool)).not.toContain('tiger-claw');
    expect(InitiatingService.getEffectiveDisciplines(pool)).toContain('iron-heart');
  });

  it('adds disciplines in bonusDisciplines', () => {
    const pool = makePool({
      bonusDisciplines: [{ disciplineId: 'golden-lion', source: 'Martial Tradition' }],
    });
    expect(InitiatingService.getEffectiveDisciplines(pool)).toContain('golden-lion');
  });

  it('deduplicates bonus disciplines already in base', () => {
    const pool = makePool({
      bonusDisciplines: [{ disciplineId: 'iron-heart', source: 'Some source' }],
    });
    const result = InitiatingService.getEffectiveDisciplines(pool);
    expect(result.filter((d) => d === 'iron-heart')).toHaveLength(1);
  });

  it('tradition swap: removes one, adds another', () => {
    const pool = makePool({
      removedDisciplines: [{ disciplineId: 'tiger-claw', reason: 'Tradition' }],
      bonusDisciplines: [{ disciplineId: 'silver-crane', source: 'Empyreal Guardians' }],
    });
    const result = InitiatingService.getEffectiveDisciplines(pool);
    expect(result).not.toContain('tiger-claw');
    expect(result).toContain('silver-crane');
    expect(result).toContain('iron-heart');
  });
});

// ---- applyTradition ----

describe('InitiatingService.applyTradition', () => {
  const tradition: MartialTradition = {
    id: 'empyreal-guardians',
    name: 'Empyreal Guardians',
    description: 'A lawful good tradition.',
    favoredDisciplineId: 'silver-crane',
    alignmentRequirement: 'Lawful Good',
    source: POWE_SOURCE,
    isOfficial: false,
    visibility: 'global',
    rev: 1,
    verificationStatus: 'needs_review',
  };

  it('sets martialTraditionId', () => {
    const pool = makePool();
    const updated = InitiatingService.applyTradition(pool, tradition, 'tiger-claw');
    expect(updated.martialTraditionId).toBe('empyreal-guardians');
  });

  it('adds the tradition discipline to bonusDisciplines', () => {
    const pool = makePool();
    const updated = InitiatingService.applyTradition(pool, tradition, 'tiger-claw');
    expect(updated.bonusDisciplines.some((b) => b.disciplineId === 'silver-crane')).toBe(true);
  });

  it('adds the removed discipline to removedDisciplines', () => {
    const pool = makePool();
    const updated = InitiatingService.applyTradition(pool, tradition, 'tiger-claw');
    expect(updated.removedDisciplines.some((r) => r.disciplineId === 'tiger-claw')).toBe(true);
  });

  it('does not mutate the original pool', () => {
    const pool = makePool();
    InitiatingService.applyTradition(pool, tradition, 'tiger-claw');
    expect(pool.martialTraditionId).toBeUndefined();
    expect(pool.bonusDisciplines).toHaveLength(0);
    expect(pool.removedDisciplines).toHaveLength(0);
  });

  it('includes tradition name in source attribution', () => {
    const pool = makePool();
    const updated = InitiatingService.applyTradition(pool, tradition, 'tiger-claw');
    expect(updated.bonusDisciplines[0].source).toContain('Empyreal Guardians');
    expect(updated.removedDisciplines[0].reason).toContain('Empyreal Guardians');
  });
});

// ---- rollCrusaderGrants ----

describe('InitiatingService.rollCrusaderGrants', () => {
  function makeReadied(id: string, isExpended = false): ReadiedManeuver {
    return {
      maneuverId: id,
      maneuverName: id,
      disciplineId: 'devoted-spirit',
      level: 1,
      type: 'strike',
      poolBaseClass: 'crusader',
      isExpended,
      isGranted: false,
    };
  }

  it('grants exactly grantCount maneuvers', () => {
    const readied = [
      makeReadied('a'),
      makeReadied('b'),
      makeReadied('c'),
      makeReadied('d'),
      makeReadied('e'),
    ];
    const result = InitiatingService.rollCrusaderGrants(readied, 2);
    const granted = result.filter((m) => m.isGranted);
    expect(granted).toHaveLength(2);
  });

  it('does not grant expended maneuvers', () => {
    const readied = [
      makeReadied('a', true), // expended
      makeReadied('b', true), // expended
      makeReadied('c'),
      makeReadied('d'),
    ];
    const result = InitiatingService.rollCrusaderGrants(readied, 2);
    const grantedExpended = result.filter((m) => m.isGranted && m.isExpended);
    expect(grantedExpended).toHaveLength(0);
  });

  it('clears all previous isGranted flags before rolling', () => {
    const readied = [
      { ...makeReadied('a'), isGranted: true },
      { ...makeReadied('b'), isGranted: true },
      makeReadied('c'),
    ];
    const result = InitiatingService.rollCrusaderGrants(readied, 1);
    const granted = result.filter((m) => m.isGranted);
    expect(granted).toHaveLength(1);
  });

  it('grants all unexpended if grantCount exceeds available', () => {
    const readied = [makeReadied('a'), makeReadied('b', true), makeReadied('c')];
    const result = InitiatingService.rollCrusaderGrants(readied, 5);
    const granted = result.filter((m) => m.isGranted);
    expect(granted).toHaveLength(2); // only 'a' and 'c' are unexpended
  });

  it('does not mutate the input array', () => {
    const readied = [makeReadied('a'), makeReadied('b')];
    const origA = readied[0];
    InitiatingService.rollCrusaderGrants(readied, 1);
    expect(readied[0]).toBe(origA);
    expect(origA.isGranted).toBe(false);
  });
});
