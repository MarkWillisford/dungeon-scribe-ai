/**
 * seedInvestigatorTalents.ts — Upload ALL_INVESTIGATOR_TALENTS to Firestore
 *
 * Prerequisites:
 *   1. Download a service account key from Firebase Console:
 *      Project Settings → Service Accounts → Generate New Private Key
 *   2. Set env var: export GOOGLE_APPLICATION_CREDENTIALS=/path/to/serviceAccount.json
 *   3. Set env var: export FIREBASE_PROJECT_ID=dungeon-scribe-ai-stagin-b4fb5  (staging)
 *                   export FIREBASE_PROJECT_ID=<prod-project-id>               (prod)
 *
 * Usage:
 *   npx tsx scripts/db/seedInvestigatorTalents.ts [--dry-run]
 *
 * The script is idempotent: it uses batch.set() with the talent's own id as the
 * document ID, so re-running always upserts without removing campaign/homebrew
 * talents stored in the same collection.
 */

import * as admin from 'firebase-admin';
import { ALL_INVESTIGATOR_TALENTS } from '../../src/data/investigatorTalents/index';
import type { InvestigatorTalentEntry } from '../../src/types/classOptions';

const DRY_RUN = process.argv.includes('--dry-run');
const PROJECT_ID = process.env.FIREBASE_PROJECT_ID ?? 'dungeon-scribe-ai-stagin-b4fb5';
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

// --- Helpers ---
function chunkArray<T>(arr: T[], size: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

async function seedInvestigatorTalents(talents: InvestigatorTalentEntry[]): Promise<void> {
  console.log(`\nSeeding ${talents.length} investigator talents to project: ${PROJECT_ID}`);

  if (DRY_RUN) {
    console.log('\n[DRY RUN] — no writes performed.');
    return;
  }

  const chunks = chunkArray(talents, BATCH_SIZE);
  let totalWritten = 0;

  for (const chunk of chunks) {
    const batch = db.batch();
    chunk.forEach((talent) => {
      const ref = db.collection('investigatortalents').doc(talent.id);
      batch.set(ref, talent);
    });
    await batch.commit();
    totalWritten += chunk.length;
    console.log(`  Written: ${totalWritten}/${talents.length}`);
  }

  console.log(`\nDone. ${totalWritten} investigator talents seeded to Firestore.`);
}

// --- Run ---
seedInvestigatorTalents(ALL_INVESTIGATOR_TALENTS).catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
