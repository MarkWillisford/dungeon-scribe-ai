/**
 * seedPhrenicAmplifications.ts — Upsert ALL_PHRENIC_AMPLIFICATIONS to Firestore
 *
 * Prerequisites:
 *   1. Download a service account key from Firebase Console:
 *      Project Settings → Service Accounts → Generate New Private Key
 *   2. Set env var: export GOOGLE_APPLICATION_CREDENTIALS=/path/to/serviceAccount.json
 *   3. Set env var: export FIREBASE_PROJECT_ID=dungeon-scribe-ai-stagin-b4fb5  (staging)
 *                   export FIREBASE_PROJECT_ID=<prod-project-id>               (prod)
 *
 * Usage:
 *   npx tsx scripts/db/seedPhrenicAmplifications.ts [--dry-run]
 *
 * The script is idempotent (upsert, not clear+insert) so campaign/homebrew
 * amplifications added by users are preserved. Document ID = amplification.id.
 * Collection: 'phrenicamplifications'
 */

import * as admin from 'firebase-admin';
import { ALL_PHRENIC_AMPLIFICATIONS } from '../../src/data/phrenicAmplifications/index';
import type { PhrenicAmplificationEntry } from '../../src/types/classOptions';
import { normalizeSource } from '../../src/utils/normalizeSource';

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

function chunkArray<T>(arr: T[], size: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

async function seedPhrenicAmplifications(
  amplifications: PhrenicAmplificationEntry[],
): Promise<void> {
  console.log(
    `\nSeeding ${amplifications.length} phrenic amplifications to project: ${PROJECT_ID}`,
  );

  const standard = amplifications.filter((a) => a.amplificationTier === 'standard');
  const major = amplifications.filter((a) => a.amplificationTier === 'major');
  console.log(`  Standard: ${standard.length}, Major: ${major.length}`);

  if (DRY_RUN) {
    console.log('\n[DRY RUN] — no writes performed.');
    return;
  }

  const chunks = chunkArray(amplifications, BATCH_SIZE);
  let totalWritten = 0;

  for (const chunk of chunks) {
    const batch = db.batch();
    chunk.forEach((amp) => {
      const ref = db.collection('phrenicamplifications').doc(amp.id);
      batch.set(ref, { ...amp, source: normalizeSource(amp.source) });
    });
    await batch.commit();
    totalWritten += chunk.length;
    console.log(`  Written: ${totalWritten}/${amplifications.length}`);
  }

  console.log(`\nDone. ${totalWritten} phrenic amplifications upserted to Firestore.`);
}

seedPhrenicAmplifications(ALL_PHRENIC_AMPLIFICATIONS).catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
