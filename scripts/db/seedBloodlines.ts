/**
 * seedBloodlines.ts — Upsert ALL_BLOODLINES to Firestore
 *
 * Prerequisites:
 *   1. Download a service account key from Firebase Console:
 *      Project Settings → Service Accounts → Generate New Private Key
 *   2. Set env var: export GOOGLE_APPLICATION_CREDENTIALS=/path/to/serviceAccount.json
 *   3. Set env var: export FIREBASE_PROJECT_ID=dungeon-scribe-ai-stagin-b4fb5  (staging)
 *                   export FIREBASE_PROJECT_ID=<prod-project-id>               (prod)
 *
 * Usage:
 *   npx tsx scripts/db/seedBloodlines.ts [--dry-run]
 *
 * The script is idempotent (upsert, not clear+insert) so campaign/homebrew
 * bloodlines added by users are preserved. Document ID = bloodline.id.
 */

import * as admin from 'firebase-admin';
import { ALL_BLOODLINES } from '../../src/data/bloodlines/index';
import type { ClassOptionBase } from '../../src/types/classOptions';
import { normalizeSource } from '../../src/utils/normalizeSource';
import { sleep, chunkArray } from './seedUtils';

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

async function seedBloodlines(bloodlines: ClassOptionBase[]): Promise<void> {
  console.log(`\nSeeding ${bloodlines.length} bloodlines to project: ${PROJECT_ID}`);

  const bySource: Record<string, number> = {};
  bloodlines.forEach((b) => {
    const key = typeof b.source === 'string' ? b.source : b.source.bookId;
    bySource[key] = (bySource[key] ?? 0) + 1;
  });
  console.log('By source:', bySource);

  if (DRY_RUN) {
    console.log('\n[DRY RUN] — no writes performed.');
    return;
  }

  const chunks = chunkArray(bloodlines, BATCH_SIZE);
  let totalWritten = 0;

  for (const chunk of chunks) {
    const batch = db.batch();
    chunk.forEach((bloodline) => {
      const ref = db.collection('bloodlines').doc(bloodline.id);
      batch.set(ref, { ...bloodline, source: normalizeSource(bloodline.source) });
    });
    await batch.commit();
    await sleep(500);
    totalWritten += chunk.length;
    console.log(`  Written: ${totalWritten}/${bloodlines.length}`);
  }

  console.log(`\nDone. ${totalWritten} bloodlines upserted to Firestore.`);
}

// --- Run ---
seedBloodlines(ALL_BLOODLINES as ClassOptionBase[]).catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
