// Usage: GOOGLE_APPLICATION_CREDENTIALS=/path/to/key.json npx tsx scripts/db/seedClassFeatureResourcePools.ts [--dry-run]

import * as fs from 'fs';
import * as path from 'path';
import * as admin from 'firebase-admin';
import { config } from 'dotenv';
import type { ResourcePoolDefinition } from '../../src/types/resources';

config({ path: path.resolve(__dirname, '../../.env.local') });

const DRY_RUN = process.argv.includes('--dry-run');
const PROJECT_ID = process.env.FIREBASE_PROJECT_ID ?? 'dungeon-scribe-ai-stagin-b4fb5';
const COLLECTION = 'classes';
const SEED_DATA_PATH = path.resolve(__dirname, 'seed-data/class-feature-resource-pools.json');
const BATCH_SIZE = 500;

export interface ResourcePoolSeedEntry {
  classId: string;
  className: string;
  featureName: string;
  resourcePool: ResourcePoolDefinition;
}

export interface SeedResult {
  written: number;
  skipped: number;
  errors: string[];
}

export function loadSeedData(filePath: string): ResourcePoolSeedEntry[] {
  const raw = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(raw) as ResourcePoolSeedEntry[];
}

export async function seedClassFeatureResourcePools(
  entries: ResourcePoolSeedEntry[],
  db: admin.firestore.Firestore,
  dryRun = false,
): Promise<SeedResult> {
  const result: SeedResult = { written: 0, skipped: 0, errors: [] };

  if (entries.length === 0) {
    console.log('No entries to seed.');
    return result;
  }

  // Group entries by classId so each class document is written once.
  const grouped = new Map<string, Record<string, ResourcePoolDefinition>>();
  for (const entry of entries) {
    if (!grouped.has(entry.classId)) {
      grouped.set(entry.classId, {});
    }
    grouped.get(entry.classId)![entry.featureName] = entry.resourcePool;
  }

  const classWrites = [...grouped.entries()];
  console.log(
    `\nSeeding classFeatureResourcePools to ${classWrites.length} class documents in: ${COLLECTION}`,
  );

  if (dryRun) {
    console.log('[DRY RUN] -- no writes will be performed');
    classWrites.forEach(([classId, pools]) => {
      const features = Object.keys(pools).join(', ');
      console.log(`  would write: ${classId} (${features})`);
    });
    result.skipped = classWrites.length;
    return result;
  }

  // Process in batches to stay within Firestore's 500-write limit per batch.
  for (let i = 0; i < classWrites.length; i += BATCH_SIZE) {
    const chunk = classWrites.slice(i, i + BATCH_SIZE);
    const batch = db.batch();

    chunk.forEach(([classId, classFeatureResourcePools]) => {
      const ref = db.collection(COLLECTION).doc(classId);
      batch.set(ref, { classFeatureResourcePools }, { merge: true });
    });

    await batch.commit();
    result.written += chunk.length;
    console.log(`  Written: ${result.written}/${classWrites.length}`);
  }

  return result;
}

// --- Init and run ---

if (require.main === module) {
  if (!admin.apps.length) {
    if (!process.env.GOOGLE_APPLICATION_CREDENTIALS) {
      console.error(
        'ERROR: GOOGLE_APPLICATION_CREDENTIALS env var not set.\n' +
          'Download a service account key from Firebase Console and set:\n' +
          '  export GOOGLE_APPLICATION_CREDENTIALS=/path/to/key.json',
      );
      process.exit(1);
    }
    admin.initializeApp({
      credential: admin.credential.applicationDefault(),
      projectId: PROJECT_ID,
    });
  }

  const db = admin.firestore();

  const entries = loadSeedData(SEED_DATA_PATH);
  console.log(`Loaded ${entries.length} entries from seed data`);
  console.log(`Target project: ${PROJECT_ID}`);

  seedClassFeatureResourcePools(entries, db, DRY_RUN)
    .then((result) => {
      if (DRY_RUN) {
        console.log(`\nDry run complete. Would have written ${result.skipped} class documents.`);
      } else {
        console.log(
          `\nDone. ${result.written} class documents patched with classFeatureResourcePools.`,
        );
      }
    })
    .catch((err) => {
      console.error('Seed failed:', err);
      process.exit(1);
    });
}
