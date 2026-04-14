/**
 * seedDeities.ts — Upsert deities to Firestore
 *
 * Uses upsert (not clear+rewrite) to preserve any campaign/homebrew content
 * already in the collection. Official entries are overwritten by document ID.
 * Custom entries not in this seed set are left untouched.
 *
 * Prerequisites:
 *   export GOOGLE_APPLICATION_CREDENTIALS=/path/to/serviceAccount.json
 *   export FIREBASE_PROJECT_ID=dungeon-scribe-ai-stagin-b4fb5
 *
 * Usage:
 *   npx tsx scripts/db/seedDeities.ts [--dry-run]
 */

import * as admin from 'firebase-admin';
import { ALL_DEITIES } from '../../src/data/deities/index';
import { normalizeSource } from '../../src/utils/normalizeSource';
import { sleep, chunkArray } from './seedUtils';

const DRY_RUN = process.argv.includes('--dry-run');
const PROJECT_ID = process.env.FIREBASE_PROJECT_ID ?? 'dungeon-scribe-ai-stagin-b4fb5';
const BATCH_SIZE = 500;

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    projectId: PROJECT_ID,
  });
}

const db = admin.firestore();
db.settings({ ignoreUndefinedProperties: true });

async function seed(): Promise<void> {
  console.log(`Seeding ${ALL_DEITIES.length} deities to project: ${PROJECT_ID}`);

  if (DRY_RUN) {
    console.log('[DRY RUN] — no writes performed.');
    ALL_DEITIES.slice(0, 3).forEach((d) => console.log(`  Sample: ${d.id} — ${d.name}`));
    return;
  }

  const chunks = chunkArray(ALL_DEITIES, BATCH_SIZE);
  let totalWritten = 0;

  for (const chunk of chunks) {
    const batch = db.batch();
    chunk.forEach((deity) => {
      const ref = db.collection('deities').doc(deity.id);
      batch.set(ref, { ...deity, source: normalizeSource(deity.source) }); // upsert — overwrites if exists, creates if not
    });
    await batch.commit();
    await sleep(500);
    totalWritten += chunk.length;
    console.log(`  Written: ${totalWritten}/${ALL_DEITIES.length}`);
  }

  console.log(`\nDone. ${totalWritten} deities upserted.`);
}

seed().catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
