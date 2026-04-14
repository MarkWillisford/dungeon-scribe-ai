/**
 * seedRevelations.ts — Upsert ALL_REVELATIONS to Firestore
 *
 * Prerequisites:
 *   1. Download a service account key from Firebase Console:
 *      Project Settings → Service Accounts → Generate New Private Key
 *   2. Set env var: export GOOGLE_APPLICATION_CREDENTIALS=/path/to/serviceAccount.json
 *   3. Set env var: export FIREBASE_PROJECT_ID=dungeon-scribe-ai-stagin-b4fb5  (staging)
 *                   export FIREBASE_PROJECT_ID=<prod-project-id>               (prod)
 *
 * Usage:
 *   npx tsx scripts/db/seedRevelations.ts [--dry-run]
 *
 * The script is idempotent (upsert, not clear+insert) so campaign/homebrew
 * revelations added by users are preserved. Document ID = revelation.id.
 */

import * as admin from 'firebase-admin';
import { ALL_REVELATIONS } from '../../src/data/revelations/index';
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
db.settings({ ignoreUndefinedProperties: true });

async function seedRevelations(revelations: ClassOptionBase[]): Promise<void> {
  console.log(`\nSeeding ${revelations.length} revelations to project: ${PROJECT_ID}`);

  const bySource: Record<string, number> = {};
  revelations.forEach((r) => {
    const key = typeof r.source === 'string' ? r.source : r.source.bookId;
    bySource[key] = (bySource[key] ?? 0) + 1;
  });
  console.log('By source:', bySource);

  if (DRY_RUN) {
    console.log('\n[DRY RUN] — no writes performed.');
    return;
  }

  const chunks = chunkArray(revelations, BATCH_SIZE);
  let totalWritten = 0;

  for (const chunk of chunks) {
    const batch = db.batch();
    chunk.forEach((revelation) => {
      const ref = db.collection('revelations').doc(revelation.id);
      batch.set(ref, { ...revelation, source: normalizeSource(revelation.source) });
    });
    await batch.commit();
    await sleep(500);
    totalWritten += chunk.length;
    console.log(`  Written: ${totalWritten}/${revelations.length}`);
  }

  console.log(`\nDone. ${totalWritten} revelations upserted to Firestore.`);
}

// --- Run ---
seedRevelations(ALL_REVELATIONS as ClassOptionBase[]).catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
