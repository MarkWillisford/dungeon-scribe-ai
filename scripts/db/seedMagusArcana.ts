/**
 * seedMagusArcana.ts — Upload ALL_MAGUS_ARCANA to Firestore
 *
 * Prerequisites:
 *   1. Download a service account key from Firebase Console:
 *      Project Settings → Service Accounts → Generate New Private Key
 *   2. Set env var: export GOOGLE_APPLICATION_CREDENTIALS=/path/to/serviceAccount.json
 *   3. Set env var: export FIREBASE_PROJECT_ID=dungeon-scribe-ai-stagin-b4fb5  (staging)
 *                   export FIREBASE_PROJECT_ID=<prod-project-id>               (prod)
 *
 * Usage:
 *   npx tsx scripts/db/seedMagusArcana.ts [--dry-run]
 *
 * The script is idempotent: uses batch.set() so re-running always upserts without
 * removing campaign/homebrew arcana stored in the same collection.
 */

import * as admin from 'firebase-admin';
import { ALL_MAGUS_ARCANA } from '../../src/data/magusArcana/index';
import type { MagusArcanaEntry } from '../../src/types/classOptions';
import { normalizeSource } from '../../src/utils/normalizeSource';
import { sleep, chunkArray } from './seedUtils';

const DRY_RUN = process.argv.includes('--dry-run');
const PROJECT_ID = process.env.FIREBASE_PROJECT_ID ?? 'dungeon-scribe-ai-stagin-b4fb5';
const BATCH_SIZE = 500;

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

async function seedMagusArcana(arcana: MagusArcanaEntry[]): Promise<void> {
  console.log(`\nSeeding ${arcana.length} magus arcana to project: ${PROJECT_ID}`);

  if (DRY_RUN) {
    console.log('\n[DRY RUN] — no writes performed.');
    return;
  }

  const chunks = chunkArray(arcana, BATCH_SIZE);
  let totalWritten = 0;
  for (const chunk of chunks) {
    const batch = db.batch();
    chunk.forEach((entry) => {
      batch.set(db.collection('magusarcana').doc(entry.id), {
        ...entry,
        source: normalizeSource(entry.source),
      });
    });
    await batch.commit();
    await sleep(500);
    totalWritten += chunk.length;
    console.log(`  Written: ${totalWritten}/${arcana.length}`);
  }

  console.log(`\nDone. ${totalWritten} magus arcana seeded to Firestore.`);
}

seedMagusArcana(ALL_MAGUS_ARCANA).catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
