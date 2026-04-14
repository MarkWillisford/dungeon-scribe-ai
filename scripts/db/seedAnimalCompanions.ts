/**
 * seedAnimalCompanions.ts — Upsert ALL_ANIMAL_COMPANIONS to Firestore
 *
 * Prerequisites:
 *   1. Download a service account key from Firebase Console:
 *      Project Settings → Service Accounts → Generate New Private Key
 *   2. Set env var: export GOOGLE_APPLICATION_CREDENTIALS=/path/to/serviceAccount.json
 *   3. Set env var: export FIREBASE_PROJECT_ID=dungeon-scribe-ai-stagin-b4fb5  (staging)
 *                   export FIREBASE_PROJECT_ID=<prod-project-id>               (prod)
 *
 * Usage:
 *   npx tsx scripts/db/seedAnimalCompanions.ts [--dry-run]
 *
 * The script is UPSERT-only (no clear before seed) to preserve campaign/homebrew
 * companions (visibility: 'campaign' | 'private') added by DMs.
 * Document ID = companion.id — deterministic and idempotent.
 *
 * DO NOT RUN AUTOMATICALLY — must be invoked manually.
 */

import * as admin from 'firebase-admin';
import { ALL_ANIMAL_COMPANIONS } from '../../src/data/animalCompanions/index';
import type { AnimalCompanionEntry } from '../../src/types/animalCompanions';
import { normalizeSource } from '../../src/utils/normalizeSource';
import { sleep, chunkArray } from './seedUtils';

const DRY_RUN = process.argv.includes('--dry-run');
const PROJECT_ID = process.env.FIREBASE_PROJECT_ID ?? 'dungeon-scribe-ai-stagin-b4fb5';
const COLLECTION = 'animalcompanions';
const BATCH_SIZE = 500; // Firestore max writes per batch

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
db.settings({ ignoreUndefinedProperties: true });

// --- Seed ---
async function seedAnimalCompanions(companions: AnimalCompanionEntry[]): Promise<void> {
  console.log(`\nSeeding ${companions.length} animal companions to project: ${PROJECT_ID}`);
  console.log(`Collection: ${COLLECTION}`);
  console.log('NOTE: Upsert-only — existing campaign/homebrew companions are preserved.\n');

  const byType: Record<string, number> = {};
  companions.forEach((c) => {
    byType[c.companionType] = (byType[c.companionType] ?? 0) + 1;
  });
  console.log('By type:', byType);

  if (DRY_RUN) {
    console.log('\n[DRY RUN] — no writes performed.');
    companions.forEach((c) => console.log(`  ${c.id} (${c.companionType})`));
    return;
  }

  const chunks = chunkArray(companions, BATCH_SIZE);
  let totalWritten = 0;

  for (const chunk of chunks) {
    const batch = db.batch();
    chunk.forEach((companion) => {
      // Document ID = companion.id — deterministic and idempotent
      const ref = db.collection(COLLECTION).doc(companion.id);
      batch.set(ref, { ...companion, source: normalizeSource(companion.source) });
    });
    await batch.commit();
    await sleep(500);
    totalWritten += chunk.length;
    console.log(`  Written: ${totalWritten}/${companions.length}`);
  }

  console.log(`\nDone. ${totalWritten} animal companions upserted to Firestore.`);
}

// --- Run ---
seedAnimalCompanions(ALL_ANIMAL_COMPANIONS).catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
