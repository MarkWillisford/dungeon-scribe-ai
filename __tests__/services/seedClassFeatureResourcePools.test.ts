import * as fs from 'fs';
import * as admin from 'firebase-admin';
import {
  loadSeedData,
  seedClassFeatureResourcePools,
  type ResourcePoolSeedEntry,
  type SeedResult,
} from '../../scripts/db/seedClassFeatureResourcePools';

jest.mock('fs');
jest.mock('dotenv', () => ({ config: jest.fn() }));
jest.mock('firebase-admin', () => ({
  apps: [],
  initializeApp: jest.fn(),
  credential: { applicationDefault: jest.fn() },
  firestore: jest.fn(),
}));

const mockFs = fs as jest.Mocked<typeof fs>;

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

type MockBatch = {
  set: jest.Mock;
  commit: jest.Mock;
  calls: { id: string; data: Record<string, unknown>; options: unknown }[];
};

function makeMockDb(commitImpl = jest.fn().mockResolvedValue(undefined)): {
  db: admin.firestore.Firestore;
  batch: MockBatch;
} {
  const calls: { id: string; data: Record<string, unknown>; options: unknown }[] = [];

  const batch: MockBatch = {
    set: jest.fn((ref: { id: string }, data: Record<string, unknown>, options: unknown) => {
      calls.push({ id: ref.id, data, options });
    }),
    commit: commitImpl,
    calls,
  };

  const db = {
    batch: jest.fn(() => batch),
    collection: jest.fn().mockReturnValue({
      doc: jest.fn((id: string) => ({ id })),
    }),
  } as unknown as admin.firestore.Firestore;

  return { db, batch };
}

// ---------------------------------------------------------------------------
// Fixtures
// ---------------------------------------------------------------------------

const SAMPLE_ENTRIES: ResourcePoolSeedEntry[] = [
  {
    classId: 'barbarian',
    className: 'Barbarian',
    featureName: 'Rage',
    resourcePool: {
      id: 'rage_rounds',
      name: 'Rage',
      rechargeOn: 'rest',
      maxFormula: '4 + conMod + (barbarianLevel - 1) * 2',
      restRecoveryMode: 'full',
    },
  },
  {
    classId: 'cleric',
    className: 'Cleric',
    featureName: 'Channel Energy 1d6',
    resourcePool: {
      id: 'channel_energy_uses',
      name: 'Channel Energy',
      rechargeOn: 'rest',
      maxFormula: '3 + chaMod',
      restRecoveryMode: 'full',
    },
  },
  {
    classId: 'monk',
    className: 'Monk',
    featureName: 'Ki Pool (magic)',
    resourcePool: {
      id: 'ki',
      name: 'Ki Pool',
      rechargeOn: 'rest',
      maxFormula: 'floor(monkLevel / 2) + wisMod',
      restRecoveryMode: 'full',
    },
  },
  {
    classId: 'arcanist',
    className: 'Arcanist',
    featureName: 'Arcane Reservoir',
    resourcePool: {
      id: 'arcane_reservoir',
      name: 'Arcane Reservoir',
      rechargeOn: 'rest',
      maxFormula: '3 + arcanistLevel',
      restRecoveryMode: 'formula',
      restRecoveryFormula: '3 + floor(arcanistLevel / 2)',
    },
  },
];

// ---------------------------------------------------------------------------
// loadSeedData
// ---------------------------------------------------------------------------

describe('loadSeedData', () => {
  beforeEach(() => jest.clearAllMocks());

  test('parses valid JSON and returns typed entries array', () => {
    mockFs.readFileSync.mockReturnValue(JSON.stringify(SAMPLE_ENTRIES));

    const result = loadSeedData('/some/path.json');

    expect(result).toHaveLength(SAMPLE_ENTRIES.length);
    expect(result[0].classId).toBe('barbarian');
    expect(result[0].featureName).toBe('Rage');
    expect(result[0].resourcePool.id).toBe('rage_rounds');
    expect(result[0].resourcePool.maxFormula).toBeTruthy();
  });

  test('all four spot-check entries are present in the seed data file', () => {
    const realFs = jest.requireActual<typeof import('fs')>('fs');
    const realPath = jest.requireActual<typeof import('path')>('path');
    const seedPath = realPath.resolve(
      __dirname,
      '../../scripts/db/seed-data/class-feature-resource-pools.json',
    );
    const raw = realFs.readFileSync(seedPath, 'utf-8');
    mockFs.readFileSync.mockReturnValue(raw);

    const entries = loadSeedData(seedPath);
    const pairs = entries.map((e) => `${e.classId}:${e.featureName}`);

    expect(pairs).toContain('barbarian:Rage');
    expect(pairs).toContain('cleric:Channel Energy 1d6');
    expect(pairs).toContain('monk:Ki Pool (magic)');
    expect(pairs).toContain('arcanist:Arcane Reservoir');
  });

  test('all entries in seed file have required resourcePool fields', () => {
    const realFs = jest.requireActual<typeof import('fs')>('fs');
    const realPath = jest.requireActual<typeof import('path')>('path');
    const seedPath = realPath.resolve(
      __dirname,
      '../../scripts/db/seed-data/class-feature-resource-pools.json',
    );
    const raw = realFs.readFileSync(seedPath, 'utf-8');
    mockFs.readFileSync.mockReturnValue(raw);

    const entries = loadSeedData(seedPath);

    entries.forEach((entry) => {
      expect(entry.classId).toBeTruthy();
      expect(entry.featureName).toBeTruthy();
      expect(entry.resourcePool.id).toBeTruthy();
      expect(entry.resourcePool.name).toBeTruthy();
      expect(entry.resourcePool.maxFormula).toBeTruthy();
      expect(['rest', 'per_encounter', 'special']).toContain(entry.resourcePool.rechargeOn);
      expect(['full', 'formula']).toContain(entry.resourcePool.restRecoveryMode);
    });
  });
});

// ---------------------------------------------------------------------------
// seedClassFeatureResourcePools
// ---------------------------------------------------------------------------

describe('seedClassFeatureResourcePools', () => {
  beforeEach(() => jest.clearAllMocks());

  test('writes one document per unique classId to the classes collection', async () => {
    const { db, batch } = makeMockDb();

    const result: SeedResult = await seedClassFeatureResourcePools(SAMPLE_ENTRIES, db);

    // 4 unique classIds in SAMPLE_ENTRIES
    expect(batch.set).toHaveBeenCalledTimes(4);
    expect(batch.commit).toHaveBeenCalledTimes(1);
    expect(result.written).toBe(4);
  });

  test('targets the classes collection for all writes', async () => {
    const { db } = makeMockDb();
    const collectionMock = db.collection as jest.Mock;

    await seedClassFeatureResourcePools(SAMPLE_ENTRIES, db);

    expect(collectionMock).toHaveBeenCalledWith('classes');
  });

  test('uses set+merge so existing class document fields are not overwritten', async () => {
    const { db, batch } = makeMockDb();

    await seedClassFeatureResourcePools(SAMPLE_ENTRIES, db);

    batch.calls.forEach(({ options }) => {
      expect(options).toEqual({ merge: true });
    });
  });

  test('writes correct classFeatureResourcePools map for each spot-check class', async () => {
    const { db, batch } = makeMockDb();

    await seedClassFeatureResourcePools(SAMPLE_ENTRIES, db);

    const barbarian = batch.calls.find((c) => c.id === 'barbarian');
    expect(barbarian?.data).toEqual({
      classFeatureResourcePools: {
        Rage: {
          id: 'rage_rounds',
          name: 'Rage',
          rechargeOn: 'rest',
          maxFormula: '4 + conMod + (barbarianLevel - 1) * 2',
          restRecoveryMode: 'full',
        },
      },
    });

    const monk = batch.calls.find((c) => c.id === 'monk');
    expect(monk?.data).toMatchObject({
      classFeatureResourcePools: {
        'Ki Pool (magic)': { id: 'ki', rechargeOn: 'rest', maxFormula: expect.any(String) },
      },
    });

    const cleric = batch.calls.find((c) => c.id === 'cleric');
    expect(cleric?.data).toMatchObject({
      classFeatureResourcePools: {
        'Channel Energy 1d6': { id: 'channel_energy_uses', rechargeOn: 'rest' },
      },
    });

    const arcanist = batch.calls.find((c) => c.id === 'arcanist');
    expect(arcanist?.data).toMatchObject({
      classFeatureResourcePools: {
        'Arcane Reservoir': {
          id: 'arcane_reservoir',
          restRecoveryMode: 'formula',
          restRecoveryFormula: '3 + floor(arcanistLevel / 2)',
        },
      },
    });
  });

  test('groups multiple features for the same class into a single write', async () => {
    const { db, batch } = makeMockDb();

    const paladinEntries: ResourcePoolSeedEntry[] = [
      {
        classId: 'paladin',
        className: 'Paladin',
        featureName: 'Lay on Hands',
        resourcePool: {
          id: 'lay_on_hands_uses',
          name: 'Lay on Hands',
          rechargeOn: 'rest',
          maxFormula: 'floor(paladinLevel / 2) + chaMod',
          restRecoveryMode: 'full',
        },
      },
      {
        classId: 'paladin',
        className: 'Paladin',
        featureName: 'Smite Evil 1/day',
        resourcePool: {
          id: 'smite_evil_uses',
          name: 'Smite Evil',
          rechargeOn: 'rest',
          maxFormula: '1 + floor((paladinLevel - 1) / 3)',
          restRecoveryMode: 'full',
        },
      },
    ];

    await seedClassFeatureResourcePools(paladinEntries, db);

    expect(batch.set).toHaveBeenCalledTimes(1);
    const paladin = batch.calls.find((c) => c.id === 'paladin');
    expect(paladin?.data).toMatchObject({
      classFeatureResourcePools: {
        'Lay on Hands': { id: 'lay_on_hands_uses' },
        'Smite Evil 1/day': { id: 'smite_evil_uses' },
      },
    });
  });

  test('dry run skips all writes and returns skipped count', async () => {
    const { db, batch } = makeMockDb();

    const result = await seedClassFeatureResourcePools(SAMPLE_ENTRIES, db, true);

    expect(batch.set).not.toHaveBeenCalled();
    expect(batch.commit).not.toHaveBeenCalled();
    expect(result.skipped).toBe(4);
    expect(result.written).toBe(0);
  });

  test('returns zero written for empty entries array', async () => {
    const { db, batch } = makeMockDb();

    const result = await seedClassFeatureResourcePools([], db);

    expect(batch.set).not.toHaveBeenCalled();
    expect(result.written).toBe(0);
    expect(result.skipped).toBe(0);
  });

  test('documents absent from entries are never written to', async () => {
    const { db, batch } = makeMockDb();

    await seedClassFeatureResourcePools([SAMPLE_ENTRIES[0]], db);

    expect(batch.set).toHaveBeenCalledTimes(1);
    expect(batch.calls[0].id).toBe('barbarian');
  });

  test('second run produces identical writes (idempotent)', async () => {
    const { db: db1, batch: b1 } = makeMockDb();
    const { db: db2, batch: b2 } = makeMockDb();

    await seedClassFeatureResourcePools(SAMPLE_ENTRIES, db1);
    await seedClassFeatureResourcePools(SAMPLE_ENTRIES, db2);

    const ids1 = b1.calls.map((c) => c.id).sort();
    const ids2 = b2.calls.map((c) => c.id).sort();
    expect(ids1).toEqual(ids2);

    const data1 = b1.calls.map((c) => c.data);
    const data2 = b2.calls.map((c) => c.data);
    expect(data1).toEqual(data2);
  });

  test('splits 1100 unique-class entries across three batches of 500', async () => {
    const batches: MockBatch[] = [];

    const db = {
      batch: jest.fn(() => {
        const calls: MockBatch['calls'] = [];
        const b: MockBatch = {
          set: jest.fn((ref: { id: string }, data: Record<string, unknown>, options: unknown) => {
            calls.push({ id: ref.id, data, options });
          }),
          commit: jest.fn().mockResolvedValue(undefined),
          calls,
        };
        batches.push(b);
        return b;
      }),
      collection: jest.fn().mockReturnValue({
        doc: jest.fn((id: string) => ({ id })),
      }),
    } as unknown as admin.firestore.Firestore;

    const large = Array.from({ length: 1100 }, (_, i) => ({
      classId: `class-${i}`,
      className: `Class ${i}`,
      featureName: `Feature ${i}`,
      resourcePool: {
        id: `pool_${i}`,
        name: `Pool ${i}`,
        rechargeOn: 'rest' as const,
        maxFormula: '10',
        restRecoveryMode: 'full' as const,
      },
    }));

    const result = await seedClassFeatureResourcePools(large, db);

    expect(batches).toHaveLength(3);
    expect(batches[0].set).toHaveBeenCalledTimes(500);
    expect(batches[1].set).toHaveBeenCalledTimes(500);
    expect(batches[2].set).toHaveBeenCalledTimes(100);
    expect(result.written).toBe(1100);
  });
});
