/**
 * seedDisciplines.ts — Upsert ALL_DISCIPLINES to Firestore
 *
 * Prerequisites:
 *   1. Download a service account key from Firebase Console:
 *      Project Settings → Service Accounts → Generate New Private Key
 *   2. Set env var: export GOOGLE_APPLICATION_CREDENTIALS=/path/to/serviceAccount.json
 *   3. Set env var: export FIREBASE_PROJECT_ID=dungeon-scribe-ai-stagin-b4fb5  (staging)
 *                   export FIREBASE_PROJECT_ID=<prod-project-id>               (prod)
 *
 * Usage:
 *   npx tsx scripts/db/seedDisciplines.ts [--dry-run]
 *
 * The script is idempotent (upsert, not clear+insert). Document ID = discipline.id.
 */

import * as admin from 'firebase-admin';
import { ALL_DISCIPLINES } from '../../src/data/disciplines/index';
import type { DisciplineDefinition } from '../../src/types/initiating';
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

async function seedDisciplines(disciplines: DisciplineDefinition[]): Promise<void> {
  console.log(`\nSeeding ${disciplines.length} disciplines to project: ${PROJECT_ID}`);

  const bySource: Record<string, number> = {};
  disciplines.forEach((d) => {
    bySource[d.sourceSystem] = (bySource[d.sourceSystem] ?? 0) + 1;
  });
  console.log(`By sourceSystem (${Object.keys(bySource).length} systems):`, bySource);

  if (DRY_RUN) {
    console.log('\n[DRY RUN] — no writes performed.');
    return;
  }

  const chunks = chunkArray(disciplines, BATCH_SIZE);
  let totalWritten = 0;

  for (const chunk of chunks) {
    const batch = db.batch();
    chunk.forEach((discipline) => {
      const ref = db.collection('disciplines').doc(discipline.id);
      batch.set(ref, {
        ...discipline,
        visibility: 'global' as const,
      });
    });
    await batch.commit();
    await sleep(500);
    totalWritten += chunk.length;
    console.log(`  Written: ${totalWritten}/${disciplines.length}`);
  }

  console.log(`\nDone. ${totalWritten} disciplines upserted to Firestore.`);
}

seedDisciplines(ALL_DISCIPLINES).catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
