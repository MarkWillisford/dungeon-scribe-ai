/**
 * seedMartialTraditions.ts — Upsert ALL_MARTIAL_TRADITIONS to Firestore
 *
 * Prerequisites:
 *   1. Download a service account key from Firebase Console:
 *      Project Settings → Service Accounts → Generate New Private Key
 *   2. Set env var: export GOOGLE_APPLICATION_CREDENTIALS=/path/to/serviceAccount.json
 *   3. Set env var: export FIREBASE_PROJECT_ID=dungeon-scribe-ai-stagin-b4fb5  (staging)
 *                   export FIREBASE_PROJECT_ID=<prod-project-id>               (prod)
 *
 * Usage:
 *   npx tsx scripts/db/seedMartialTraditions.ts [--dry-run]
 *
 * The script is idempotent (upsert, not clear+insert). Document ID = tradition.id.
 */

import * as admin from 'firebase-admin';
import { ALL_MARTIAL_TRADITIONS } from '../../src/data/martialTraditions/index';
import type { MartialTradition } from '../../src/types/initiating';
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

async function seedMartialTraditions(traditions: MartialTradition[]): Promise<void> {
  console.log(`\nSeeding ${traditions.length} martial traditions to project: ${PROJECT_ID}`);

  const byDiscipline: Record<string, number> = {};
  traditions.forEach((t) => {
    byDiscipline[t.favoredDisciplineId] = (byDiscipline[t.favoredDisciplineId] ?? 0) + 1;
  });
  console.log(
    `By favored discipline (${Object.keys(byDiscipline).length} disciplines):`,
    byDiscipline,
  );

  if (DRY_RUN) {
    console.log('\n[DRY RUN] — no writes performed.');
    return;
  }

  const chunks = chunkArray(traditions, BATCH_SIZE);
  let totalWritten = 0;

  for (const chunk of chunks) {
    const batch = db.batch();
    chunk.forEach((tradition) => {
      const ref = db.collection('martialTraditions').doc(tradition.id);
      batch.set(ref, {
        ...tradition,
        visibility: 'global' as const,
      });
    });
    await batch.commit();
    await sleep(500);
    totalWritten += chunk.length;
    console.log(`  Written: ${totalWritten}/${traditions.length}`);
  }

  console.log(`\nDone. ${totalWritten} martial traditions upserted to Firestore.`);
}

// --- Run ---
seedMartialTraditions(ALL_MARTIAL_TRADITIONS).catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
