import { ResourcePoolService } from '@services/ResourcePoolService';
import { FeatRegistryService } from '@services/FeatRegistryService';
import { BonusType } from '@/types/base';
import { Size } from '@/types/base';
import type { Character } from '@/types';
import type { AbilityScore } from '@/types/abilities';
import type { ClassEntry } from '@/types/classes';
import type { ResourcePool, ResourcePoolDefinition } from '@/types/resources';
import type { FavoredClassBonusEntry } from '@/types/favoredClassBonuses';
import type { FeatDefinition } from '@/types/feats';

// ---- Helpers ----

function makeAbilityScore(total: number): AbilityScore {
  const modifier = Math.floor((total - 10) / 2);
  return {
    base: total,
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
    total,
    modifier,
    tempTotal: total,
    tempModifier: modifier,
  };
}

function makeClassEntry(
  name: string,
  level: number,
  resourcePools: ResourcePoolDefinition[] = [],
): ClassEntry {
  return {
    name,
    level,
    hitDieSize: 10,
    hitDieResults: [],
    skillRanks: 2,
    classSkills: [],
    babProgression: 'full' as ClassEntry['babProgression'],
    fortProgression: 'good' as ClassEntry['fortProgression'],
    refProgression: 'poor' as ClassEntry['refProgression'],
    willProgression: 'poor' as ClassEntry['willProgression'],
    classFeatures: resourcePools.map((rp, i) => ({
      name: rp.name,
      description: '',
      level: 1,
      effects: [],
      resourcePool: rp,
    })),
    favoredClassBonuses: [],
  } as ClassEntry;
}

function makeCharacter(options: {
  classes: ClassEntry[];
  str?: number;
  dex?: number;
  con?: number;
  int?: number;
  wis?: number;
  cha?: number;
  resources?: ResourcePool[];
  editorEquipment?: Character['editorEquipment'];
}): Character {
  const { classes, str = 10, dex = 10, con = 10, int = 10, wis = 10, cha = 10 } = options;
  const totalLevel = classes.reduce((sum, c) => sum + c.level, 0);

  return {
    info: {
      size: Size.Medium,
      race: { traits: [] },
    },
    abilityScores: {
      str: makeAbilityScore(str),
      dex: makeAbilityScore(dex),
      con: makeAbilityScore(con),
      int: makeAbilityScore(int),
      wis: makeAbilityScore(wis),
      cha: makeAbilityScore(cha),
    },
    classes: {
      classes,
      totalLevel,
      baseAttackBonus: [Math.floor(totalLevel * 0.75)],
      baseFortSave: 0,
      baseRefSave: 0,
      baseWillSave: 0,
      favoredClassBonuses: [],
    },
    feats: { feats: [], totalFeats: 0, bonusFeats: 0 },
    resources: options.resources ?? [],
    editorEquipment: options.editorEquipment ?? [],
    equipment: { armor: [], shields: [], weapons: [] },
    conditions: { activeConditions: [] },
    appliedTemplates: [],
    manualAbilityBonuses: [],
    eidolons: [],
    buffs: [],
  } as unknown as Character;
}

// ---- Resource pool definitions (mirroring seed data) ----

const RAGE_POOL: ResourcePoolDefinition = {
  id: 'rage_rounds',
  name: 'Rage',
  rechargeOn: 'rest',
  maxFormula: '4 + conMod + (barbarianLevel - 1) * 2',
  restRecoveryMode: 'full',
};

const BARDIC_PERF_POOL: ResourcePoolDefinition = {
  id: 'bardic_performance_rounds',
  name: 'Bardic Performance',
  rechargeOn: 'rest',
  maxFormula: '4 + chaMod + (bardLevel - 1) * 2',
  restRecoveryMode: 'full',
};

const CHANNEL_POOL: ResourcePoolDefinition = {
  id: 'channel_energy_uses',
  name: 'Channel Energy',
  rechargeOn: 'rest',
  maxFormula: '3 + chaMod',
  restRecoveryMode: 'full',
};

const KI_POOL: ResourcePoolDefinition = {
  id: 'ki',
  name: 'Ki Pool',
  rechargeOn: 'rest',
  maxFormula: 'floor(monkLevel / 2) + wisMod',
  restRecoveryMode: 'full',
};

const LAY_ON_HANDS_POOL: ResourcePoolDefinition = {
  id: 'lay_on_hands_uses',
  name: 'Lay on Hands',
  rechargeOn: 'rest',
  maxFormula: 'floor(paladinLevel / 2) + chaMod',
  restRecoveryMode: 'full',
};

const SMITE_EVIL_POOL: ResourcePoolDefinition = {
  id: 'smite_evil_uses',
  name: 'Smite Evil',
  rechargeOn: 'rest',
  maxFormula: '1 + floor((paladinLevel - 1) / 3)',
  restRecoveryMode: 'full',
};

const ARCANE_RESERVOIR_POOL: ResourcePoolDefinition = {
  id: 'arcane_reservoir',
  name: 'Arcane Reservoir',
  rechargeOn: 'rest',
  maxFormula: '3 + arcanistLevel',
  restRecoveryMode: 'formula',
  restRecoveryFormula: '3 + floor(arcanistLevel / 2)',
};

const PANACHE_POOL: ResourcePoolDefinition = {
  id: 'panache',
  name: 'Panache',
  rechargeOn: 'special',
  maxFormula: 'max(1, chaMod)',
  restRecoveryMode: 'full',
  specialRechargeNote: 'Regain 1 on crit/kill',
};

// ---- Named character fixtures ----

function makeBarbarian(level: number, con: number): Character {
  return makeCharacter({
    classes: [makeClassEntry('Barbarian', level, [RAGE_POOL])],
    con,
  });
}

function makeCleric(level: number, cha: number): Character {
  return makeCharacter({
    classes: [makeClassEntry('Cleric', level, [CHANNEL_POOL])],
    cha,
  });
}

function makeMonk(level: number, wis: number): Character {
  return makeCharacter({
    classes: [makeClassEntry('Monk', level, [KI_POOL])],
    wis,
  });
}

function makeBard(level: number, cha: number): Character {
  return makeCharacter({
    classes: [makeClassEntry('Bard', level, [BARDIC_PERF_POOL])],
    cha,
  });
}

function makePaladin(level: number, cha: number): Character {
  return makeCharacter({
    classes: [makeClassEntry('Paladin', level, [LAY_ON_HANDS_POOL, SMITE_EVIL_POOL])],
    cha,
  });
}

function makeArcanist(level: number): Character {
  return makeCharacter({
    classes: [makeClassEntry('Arcanist', level, [ARCANE_RESERVOIR_POOL])],
  });
}

// ---- computePools: class-based pool computation ----

describe('ResourcePoolService.computePools — class features', () => {
  test('Barbarian level 6, con 14 → rage_rounds max = 16', () => {
    // 4 + 2(conMod) + (6-1)*2 = 16
    const char = makeBarbarian(6, 14);
    const pools = ResourcePoolService.computePools(char);
    const rage = pools.find((p) => p.id === 'rage_rounds');
    expect(rage).toBeDefined();
    expect(rage!.max).toBe(16);
    expect(rage!.baseMax).toBe(16);
  });

  test('Cleric level 5, cha 16 → channel_energy_uses max = 6', () => {
    // 3 + 3(chaMod) = 6
    const char = makeCleric(5, 16);
    const pools = ResourcePoolService.computePools(char);
    const channel = pools.find((p) => p.id === 'channel_energy_uses');
    expect(channel).toBeDefined();
    expect(channel!.max).toBe(6);
  });

  test('Monk level 6, wis 16 → ki max = 6', () => {
    // floor(6/2) + 3 = 3+3 = 6
    const char = makeMonk(6, 16);
    const pools = ResourcePoolService.computePools(char);
    const ki = pools.find((p) => p.id === 'ki');
    expect(ki).toBeDefined();
    expect(ki!.max).toBe(6);
  });

  test('Bard level 4, cha 14 → bardic_performance_rounds max = 12', () => {
    // 4 + 2 + (4-1)*2 = 12
    const char = makeBard(4, 14);
    const pools = ResourcePoolService.computePools(char);
    const perf = pools.find((p) => p.id === 'bardic_performance_rounds');
    expect(perf).toBeDefined();
    expect(perf!.max).toBe(12);
  });

  test('Paladin level 5, cha 14 → lay_on_hands_uses max = 4', () => {
    // floor(5/2) + 2 = 4
    const char = makePaladin(5, 14);
    const pools = ResourcePoolService.computePools(char);
    const loh = pools.find((p) => p.id === 'lay_on_hands_uses');
    expect(loh).toBeDefined();
    expect(loh!.max).toBe(4);
  });

  test('Paladin level 5 → smite_evil_uses max = 2', () => {
    // 1 + floor((5-1)/3) = 1+1 = 2
    const char = makePaladin(5, 14);
    const pools = ResourcePoolService.computePools(char);
    const smite = pools.find((p) => p.id === 'smite_evil_uses');
    expect(smite).toBeDefined();
    expect(smite!.max).toBe(2);
  });

  test('Arcanist level 4 → arcane_reservoir max = 7', () => {
    // 3 + 4 = 7
    const char = makeArcanist(4);
    const pools = ResourcePoolService.computePools(char);
    const reservoir = pools.find((p) => p.id === 'arcane_reservoir');
    expect(reservoir).toBeDefined();
    expect(reservoir!.max).toBe(7);
  });

  test('pool metadata is populated from class feature definition', () => {
    const char = makeArcanist(4);
    const pools = ResourcePoolService.computePools(char);
    const reservoir = pools.find((p) => p.id === 'arcane_reservoir')!;
    expect(reservoir.name).toBe('Arcane Reservoir');
    expect(reservoir.rechargeOn).toBe('rest');
    expect(reservoir.restRecoveryMode).toBe('formula');
    expect(reservoir.restRecoveryFormula).toBe('3 + floor(arcanistLevel / 2)');
  });

  test('class with no resource pool features produces no pools', () => {
    const char = makeCharacter({
      classes: [makeClassEntry('Fighter', 5, [])],
    });
    const pools = ResourcePoolService.computePools(char);
    expect(pools).toHaveLength(0);
  });
});

// ---- computePools: contributions array ----

describe('ResourcePoolService.computePools — contributions', () => {
  test('base class feature contribution has correct sourceType and value', () => {
    const char = makeCleric(5, 16);
    const pools = ResourcePoolService.computePools(char);
    const channel = pools.find((p) => p.id === 'channel_energy_uses')!;
    const classContrib = channel.contributions.find((c) => c.sourceType === 'class_feature');
    expect(classContrib).toBeDefined();
    expect(classContrib!.value).toBe(6);
    expect(classContrib!.source).toContain('Cleric');
  });

  test('feat bonus contribution is attributed correctly', () => {
    const extraChannel: FeatDefinition = {
      id: 'extra_channel',
      name: 'Extra Channel',
      description: '+2 channel uses',
      source: 'CRB',
      verificationStatus: 'verified' as const,
      types: ['general'],
      prerequisites: [],
      effects: [
        {
          type: 'bonus',
          bonusType: BonusType.UNTYPED,
          target: 'resource.channel_energy_uses',
          value: 2,
          source: 'Extra Channel',
        },
      ],
      activationMode: 'passive',
    };

    FeatRegistryService.register(extraChannel);
    const char = makeCleric(5, 16);
    char.feats.feats.push({
      featId: 'extra_channel',
      name: 'Extra Channel',
      source: 'level_5',
      grantedAtLevel: 5,
      active: true,
      choices: {},
    });

    const pools = ResourcePoolService.computePools(char);
    const channel = pools.find((p) => p.id === 'channel_energy_uses')!;

    expect(channel.max).toBe(8); // 6 base + 2 feat
    const featContrib = channel.contributions.find((c) => c.sourceType === 'feat');
    expect(featContrib).toBeDefined();
    expect(featContrib!.value).toBe(2);
    expect(featContrib!.source).toBe('Extra Channel');

    FeatRegistryService.clear();
  });

  test('equipment bonus contribution is attributed correctly', () => {
    const char = makeMonk(6, 16);
    char.editorEquipment = [
      {
        id: 'item-1',
        collection: 'magicItems',
        name: 'Ki Amulet',
        slot: 'neck' as const,
        effects: [
          {
            type: 'bonus',
            bonusType: BonusType.UNTYPED,
            target: 'resource.ki',
            value: 2,
            source: 'Ki Amulet',
          },
        ],
      },
    ] as Character['editorEquipment'];

    const pools = ResourcePoolService.computePools(char);
    const ki = pools.find((p) => p.id === 'ki')!;

    expect(ki.max).toBe(8); // 6 base + 2 equipment
    const eqContrib = ki.contributions.find((c) => c.sourceType === 'equipment');
    expect(eqContrib).toBeDefined();
    expect(eqContrib!.value).toBe(2);
    expect(eqContrib!.source).toBe('Ki Amulet');
  });

  test('FCB resource_pool bonus is attributed correctly', () => {
    const fcbEntry: FavoredClassBonusEntry = {
      id: 'human-barbarian-rage',
      raceName: 'Human',
      className: 'Barbarian',
      shortName: 'Bonus Rage Round',
      description: '+1 rage round per level',
      mechanicalEffect: {
        type: 'resource_pool',
        resourceId: 'rage_rounds',
        perLevelValue: { numerator: 1, denominator: 1 },
      },
      source: { bookId: 'apg', bookName: "Advanced Player's Guide", publisher: 'Paizo', page: 10 },
      visibility: 'global',
      isOfficial: true,
      rev: 1,
      verificationStatus: 'verified',
    };

    const fcbMap = new Map<string, FavoredClassBonusEntry>([['human-barbarian-rage', fcbEntry]]);

    const barbarianEntry = makeClassEntry('Barbarian', 6, [RAGE_POOL]);
    barbarianEntry.favoredClassBonuses = [
      { level: 1, type: 'alternate', optionId: 'human-barbarian-rage' },
      { level: 2, type: 'alternate', optionId: 'human-barbarian-rage' },
      { level: 3, type: 'alternate', optionId: 'human-barbarian-rage' },
      { level: 4, type: 'hp' },
    ];

    const char = makeCharacter({ classes: [barbarianEntry], con: 14 });
    const pools = ResourcePoolService.computePools(char, fcbMap);
    const rage = pools.find((p) => p.id === 'rage_rounds')!;

    expect(rage.max).toBe(19); // 16 base + 3 FCB
    const fcbContrib = rage.contributions.find((c) => c.sourceType === 'favored_class_bonus');
    expect(fcbContrib).toBeDefined();
    expect(fcbContrib!.value).toBe(3);
  });

  test('FCB fractional bonus accumulates correctly', () => {
    // +1/2 per level: 6 picks → floor(6 * 1/2) = 3
    const fcbEntry: FavoredClassBonusEntry = {
      id: 'dwarf-barbarian-rage',
      raceName: 'Dwarf',
      className: 'Barbarian',
      shortName: 'Bonus Rage Round (half)',
      description: '+1/2 rage round per level',
      mechanicalEffect: {
        type: 'resource_pool',
        resourceId: 'rage_rounds',
        perLevelValue: { numerator: 1, denominator: 2 },
      },
      source: { bookId: 'apg', bookName: "Advanced Player's Guide", publisher: 'Paizo', page: 10 },
      visibility: 'global',
      isOfficial: true,
      rev: 1,
      verificationStatus: 'verified',
    };

    const fcbMap = new Map<string, FavoredClassBonusEntry>([['dwarf-barbarian-rage', fcbEntry]]);

    const barbarianEntry = makeClassEntry('Barbarian', 6, [RAGE_POOL]);
    barbarianEntry.favoredClassBonuses = Array.from({ length: 6 }, (_, i) => ({
      level: i + 1,
      type: 'alternate' as const,
      optionId: 'dwarf-barbarian-rage',
    }));

    const char = makeCharacter({ classes: [barbarianEntry], con: 14 });
    const pools = ResourcePoolService.computePools(char, fcbMap);
    const rage = pools.find((p) => p.id === 'rage_rounds')!;

    expect(rage.max).toBe(19); // 16 base + floor(6 * 0.5) = 3
  });

  test('FCB with zero effective value adds no contribution', () => {
    const fcbEntry: FavoredClassBonusEntry = {
      id: 'elf-barbarian-rage',
      raceName: 'Elf',
      className: 'Barbarian',
      shortName: 'Bonus Rage Round (half)',
      description: '+1/2 rage round per level',
      mechanicalEffect: {
        type: 'resource_pool',
        resourceId: 'rage_rounds',
        perLevelValue: { numerator: 1, denominator: 2 },
      },
      source: { bookId: 'apg', bookName: "Advanced Player's Guide", publisher: 'Paizo', page: 10 },
      visibility: 'global',
      isOfficial: true,
      rev: 1,
      verificationStatus: 'verified',
    };

    const fcbMap = new Map<string, FavoredClassBonusEntry>([['elf-barbarian-rage', fcbEntry]]);

    // Only 1 pick → floor(1 * 1/2) = 0 → no contribution
    const barbarianEntry = makeClassEntry('Barbarian', 6, [RAGE_POOL]);
    barbarianEntry.favoredClassBonuses = [
      { level: 1, type: 'alternate', optionId: 'elf-barbarian-rage' },
    ];

    const char = makeCharacter({ classes: [barbarianEntry], con: 14 });
    const pools = ResourcePoolService.computePools(char, fcbMap);
    const rage = pools.find((p) => p.id === 'rage_rounds')!;

    expect(rage.max).toBe(16); // No FCB contribution
    const fcbContrib = rage.contributions.find((c) => c.sourceType === 'favored_class_bonus');
    expect(fcbContrib).toBeUndefined();
  });
});

// ---- computePools: multiclass characters ----

describe('ResourcePoolService.computePools — multiclass', () => {
  test('Monk 4 / Cleric 4 produces pools for both classes', () => {
    const char = makeCharacter({
      classes: [makeClassEntry('Monk', 4, [KI_POOL]), makeClassEntry('Cleric', 4, [CHANNEL_POOL])],
      wis: 14,
      cha: 14,
    });

    const pools = ResourcePoolService.computePools(char);
    expect(pools.some((p) => p.id === 'ki')).toBe(true);
    expect(pools.some((p) => p.id === 'channel_energy_uses')).toBe(true);
  });

  test('multiclass character only gets pools for classes that define them', () => {
    const char = makeCharacter({
      classes: [
        makeClassEntry('Barbarian', 4, [RAGE_POOL]),
        makeClassEntry('Fighter', 4, []), // no resource pools
      ],
      con: 14,
    });

    const pools = ResourcePoolService.computePools(char);
    expect(pools.some((p) => p.id === 'rage_rounds')).toBe(true);
    expect(pools.every((p) => p.id === 'rage_rounds')).toBe(true);
  });

  test('Monk 4 / Cleric 4 ki pool uses monkLevel not totalLevel', () => {
    const char = makeCharacter({
      classes: [makeClassEntry('Monk', 4, [KI_POOL]), makeClassEntry('Cleric', 4, [CHANNEL_POOL])],
      wis: 14, // wisMod = 2
    });

    const pools = ResourcePoolService.computePools(char);
    const ki = pools.find((p) => p.id === 'ki')!;
    // floor(4/2) + 2 = 2+2 = 4 (monkLevel=4, not totalLevel=8)
    expect(ki.max).toBe(4);
  });
});

// ---- computePools: current value preservation ----

describe('ResourcePoolService.computePools — current value preservation', () => {
  test('preserves current from existing character.resources on recalculation', () => {
    const existing: ResourcePool = {
      id: 'rage_rounds',
      name: 'Rage',
      current: 5,
      max: 10,
      baseMax: 10,
      contributions: [],
      rechargeOn: 'rest',
      restRecoveryMode: 'full',
    };

    const char = makeBarbarian(6, 14);
    char.resources = [existing];

    const pools = ResourcePoolService.computePools(char);
    const rage = pools.find((p) => p.id === 'rage_rounds')!;
    expect(rage.current).toBe(5); // preserved, not reset to max
  });

  test('defaults current to max for new pools not in character.resources', () => {
    const char = makeArcanist(4);
    char.resources = []; // no existing resources

    const pools = ResourcePoolService.computePools(char);
    const reservoir = pools.find((p) => p.id === 'arcane_reservoir')!;
    expect(reservoir.current).toBe(reservoir.max);
  });
});

// ---- applyRest ----

describe('ResourcePoolService.applyRest', () => {
  test('full recovery mode sets current to max', () => {
    const char = makeCleric(5, 16);
    const pools: ResourcePool[] = [
      {
        id: 'channel_energy_uses',
        name: 'Channel Energy',
        current: 2,
        max: 6,
        baseMax: 6,
        contributions: [],
        rechargeOn: 'rest',
        restRecoveryMode: 'full',
      },
    ];

    const result = ResourcePoolService.applyRest(pools, char);
    expect(result[0].current).toBe(6);
  });

  test('formula recovery mode adds formula result to current, capped at max', () => {
    const char = makeArcanist(4);
    // 3 + floor(4/2) = 3+2 = 5 recovery
    const pools: ResourcePool[] = [
      {
        id: 'arcane_reservoir',
        name: 'Arcane Reservoir',
        current: 2,
        max: 7,
        baseMax: 7,
        contributions: [],
        rechargeOn: 'rest',
        restRecoveryMode: 'formula',
        restRecoveryFormula: '3 + floor(arcanistLevel / 2)',
      },
    ];

    const result = ResourcePoolService.applyRest(pools, char);
    expect(result[0].current).toBe(7); // min(7, 2+5) = 7
  });

  test('formula recovery caps at max', () => {
    const char = makeArcanist(4);
    const pools: ResourcePool[] = [
      {
        id: 'arcane_reservoir',
        name: 'Arcane Reservoir',
        current: 5,
        max: 7,
        baseMax: 7,
        contributions: [],
        rechargeOn: 'rest',
        restRecoveryMode: 'formula',
        restRecoveryFormula: '3 + floor(arcanistLevel / 2)',
      },
    ];

    const result = ResourcePoolService.applyRest(pools, char);
    expect(result[0].current).toBe(7); // min(7, 5+5) = 7, not 10
  });

  test('formula recovery does not exceed max when partially depleted', () => {
    const char = makeArcanist(4);
    const pools: ResourcePool[] = [
      {
        id: 'arcane_reservoir',
        name: 'Arcane Reservoir',
        current: 1,
        max: 7,
        baseMax: 7,
        contributions: [],
        rechargeOn: 'rest',
        restRecoveryMode: 'formula',
        restRecoveryFormula: '3 + floor(arcanistLevel / 2)',
      },
    ];

    const result = ResourcePoolService.applyRest(pools, char);
    expect(result[0].current).toBe(6); // min(7, 1+5) = 6
  });

  test('special recharge pools are not touched by rest', () => {
    const char = makeCharacter({
      classes: [makeClassEntry('Swashbuckler', 5, [PANACHE_POOL])],
      cha: 16,
    });
    const pools: ResourcePool[] = [
      {
        id: 'panache',
        name: 'Panache',
        current: 1,
        max: 3,
        baseMax: 3,
        contributions: [],
        rechargeOn: 'special',
        restRecoveryMode: 'full',
      },
    ];

    const result = ResourcePoolService.applyRest(pools, char);
    expect(result[0].current).toBe(1); // unchanged
  });

  test('applyRest returns new pool array, does not mutate input', () => {
    const char = makeCleric(5, 16);
    const original: ResourcePool = {
      id: 'channel_energy_uses',
      name: 'Channel Energy',
      current: 2,
      max: 6,
      baseMax: 6,
      contributions: [],
      rechargeOn: 'rest',
      restRecoveryMode: 'full',
    };
    const pools = [original];

    const result = ResourcePoolService.applyRest(pools, char);
    expect(result[0].current).toBe(6);
    expect(original.current).toBe(2); // not mutated
  });

  test('per_encounter pools with full recovery are reset on rest', () => {
    const char = makeCharacter({ classes: [] });
    const pools: ResourcePool[] = [
      {
        id: 'some_encounter_pool',
        name: 'Some Encounter Pool',
        current: 1,
        max: 5,
        baseMax: 5,
        contributions: [],
        rechargeOn: 'per_encounter',
        restRecoveryMode: 'full',
      },
    ];

    const result = ResourcePoolService.applyRest(pools, char);
    expect(result[0].current).toBe(5);
  });
});
