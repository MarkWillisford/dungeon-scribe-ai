/**
 * seedManeuvers.ts — Upsert ALL_MANEUVERS to Firestore
 *
 * Prerequisites:
 *   1. Download a service account key from Firebase Console:
 *      Project Settings → Service Accounts → Generate New Private Key
 *   2. Set env var: export GOOGLE_APPLICATION_CREDENTIALS=/path/to/serviceAccount.json
 *   3. Set env var: export FIREBASE_PROJECT_ID=dungeon-scribe-ai-stagin-b4fb5  (staging)
 *                   export FIREBASE_PROJECT_ID=<prod-project-id>               (prod)
 *
 * Usage:
 *   npx tsx scripts/db/seedManeuvers.ts [--dry-run]
 *
 * The script is idempotent (upsert, not clear+insert). Document ID = maneuver.id.
 */

import * as admin from 'firebase-admin';
import { ALL_MANEUVERS } from '../../src/data/maneuvers/index';
import type { ManeuverDefinition } from '../../src/types/initiating';
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

async function seedManeuvers(maneuvers: ManeuverDefinition[]): Promise<void> {
  console.log(`\nSeeding ${maneuvers.length} maneuvers to project: ${PROJECT_ID}`);

  const byDiscipline: Record<string, number> = {};
  maneuvers.forEach((m) => {
    byDiscipline[m.disciplineId] = (byDiscipline[m.disciplineId] ?? 0) + 1;
  });
  console.log(`By discipline (${Object.keys(byDiscipline).length} disciplines):`, byDiscipline);

  if (DRY_RUN) {
    console.log('\n[DRY RUN] — no writes performed.');
    return;
  }

  const chunks = chunkArray(maneuvers, BATCH_SIZE);
  let totalWritten = 0;

  for (const chunk of chunks) {
    const batch = db.batch();
    chunk.forEach((maneuver) => {
      const ref = db.collection('maneuvers').doc(maneuver.id);
      batch.set(ref, {
        ...maneuver,
        visibility: 'global' as const,
      });
    });
    await batch.commit();
    await sleep(500);
    totalWritten += chunk.length;
    console.log(`  Written: ${totalWritten}/${maneuvers.length}`);
  }

  console.log(`\nDone. ${totalWritten} maneuvers upserted to Firestore.`);
}

seedManeuvers(ALL_MANEUVERS).catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
