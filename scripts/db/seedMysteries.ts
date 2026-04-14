/**
 * seedMysteries.ts — Upsert ALL_MYSTERIES to Firestore
 *
 * Prerequisites:
 *   1. Download a service account key from Firebase Console:
 *      Project Settings → Service Accounts → Generate New Private Key
 *   2. Set env var: export GOOGLE_APPLICATION_CREDENTIALS=/path/to/serviceAccount.json
 *   3. Set env var: export FIREBASE_PROJECT_ID=dungeon-scribe-ai-stagin-b4fb5  (staging)
 *                   export FIREBASE_PROJECT_ID=<prod-project-id>               (prod)
 *
 * Usage:
 *   npx tsx scripts/db/seedMysteries.ts [--dry-run]
 *
 * The script is idempotent (upsert, not clear+insert) so campaign/homebrew
 * mysteries added by users are preserved. Document ID = mystery.id.
 */

import * as admin from 'firebase-admin';
import { ALL_MYSTERIES } from '../../src/data/mysteries/index';
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

async function seedMysteries(mysteries: ClassOptionBase[]): Promise<void> {
  console.log(`\nSeeding ${mysteries.length} mysteries to project: ${PROJECT_ID}`);

  const bySource: Record<string, number> = {};
  mysteries.forEach((m) => {
    const key = typeof m.source === 'string' ? m.source : m.source.bookId;
    bySource[key] = (bySource[key] ?? 0) + 1;
  });
  console.log('By source:', bySource);

  if (DRY_RUN) {
    console.log('\n[DRY RUN] — no writes performed.');
    return;
  }

  const chunks = chunkArray(mysteries, BATCH_SIZE);
  let totalWritten = 0;

  for (const chunk of chunks) {
    const batch = db.batch();
    chunk.forEach((mystery) => {
      const ref = db.collection('mysteries').doc(mystery.id);
      batch.set(ref, { ...mystery, source: normalizeSource(mystery.source) });
    });
    await batch.commit();
    await sleep(500);
    totalWritten += chunk.length;
    console.log(`  Written: ${totalWritten}/${mysteries.length}`);
  }

  console.log(`\nDone. ${totalWritten} mysteries upserted to Firestore.`);
}

// --- Run ---
seedMysteries(ALL_MYSTERIES as ClassOptionBase[]).catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
