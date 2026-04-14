/**
 * seedRaces.ts — Upsert ALL_EXPANDED_RACES to Firestore
 *
 * Prerequisites:
 *   1. Download a service account key from Firebase Console:
 *      Project Settings → Service Accounts → Generate New Private Key
 *   2. Set env var: export GOOGLE_APPLICATION_CREDENTIALS=/path/to/serviceAccount.json
 *   3. Set env var: export FIREBASE_PROJECT_ID=dungeon-scribe-ai-stagin-b4fb5  (staging)
 *                   export FIREBASE_PROJECT_ID=<prod-project-id>               (prod)
 *
 * Usage:
 *   npx tsx scripts/db/seedRaces.ts [--dry-run]
 *
 * ExpandedRaceData has no id field — document ID is derived from name
 * (lowercase, non-alphanumeric chars replaced with hyphens).
 * The script is idempotent (upsert, not clear+insert).
 */

import * as admin from 'firebase-admin';
import { ALL_EXPANDED_RACES } from '../../src/data/races/index';
import type { ExpandedRaceData } from '../../src/data/races/types';
import { normalizeSource } from '../../src/utils/normalizeSource';

const DRY_RUN = process.argv.includes('--dry-run');
const PROJECT_ID = process.env.FIREBASE_PROJECT_ID ?? 'dungeon-scribe-ai-stagin-b4fb5';
const BATCH_SIZE = 500;

// --- Init ---
if (!admin.apps.length) {
  const credential = process.env.GOOGLE_APPLICATION_CREDENTIALS
    ? admin.credential.applicationDefault()
    : (() => {
        console.error(
          'ERROR: GOOGLE_APPLICATION_CREDENTIALS env var not set.\n' +
            'Download a service account key from Firebase Console and set:\n' +
            '  export GOOGLE_APPLICATION_CREDENTIALS=/path/to/key.json',
        );
        process.exit(1);
      })();

  admin.initializeApp({ credential, projectId: PROJECT_ID });
}

const db = admin.firestore();

// --- Helpers ---
function chunkArray<T>(arr: T[], size: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

/** Derive a stable Firestore document ID from race name. */
function raceDocId(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

async function seedRaces(races: ExpandedRaceData[]): Promise<void> {
  console.log(`\nSeeding ${races.length} races to project: ${PROJECT_ID}`);

  const byCategory: Record<string, number> = {};
  races.forEach((r) => {
    byCategory[r.category] = (byCategory[r.category] ?? 0) + 1;
  });
  console.log('By category:', byCategory);

  if (DRY_RUN) {
    console.log('\n[DRY RUN] — no writes performed.');
    return;
  }

  const chunks = chunkArray(races, BATCH_SIZE);
  let totalWritten = 0;

  for (const chunk of chunks) {
    const batch = db.batch();
    chunk.forEach((race) => {
      const ref = db.collection('races').doc(raceDocId(race.name));
      batch.set(ref, { ...race, source: normalizeSource(race.source) });
    });
    await batch.commit();
    totalWritten += chunk.length;
    console.log(`  Written: ${totalWritten}/${races.length}`);
  }

  console.log(`\nDone. ${totalWritten} races upserted to Firestore.`);
}

// --- Run ---
seedRaces(ALL_EXPANDED_RACES).catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
