/**
 * seedEidolonSubtypes.ts — Upload ALL_EIDOLON_SUBTYPES to Firestore
 *
 * Firestore collection: 'eidolonsubtypes'
 * Document ID: subtype id ('angel', 'daemon', etc.)
 *
 * Prerequisites:
 *   export GOOGLE_APPLICATION_CREDENTIALS=/path/to/serviceAccount.json
 *   export FIREBASE_PROJECT_ID=dungeon-scribe-ai-stagin-b4fb5   (staging, default)
 *                              <prod-project-id>               (prod)
 *
 * Usage:
 *   npx tsx scripts/db/seedEidolonSubtypes.ts [--dry-run]
 *
 * Idempotent: batch.set() upserts by document id.
 */

import * as admin from 'firebase-admin';
import { ALL_EIDOLON_SUBTYPES } from '../../src/data/eidolonSubtypes/index';
import type { EidolonSubtypeDefinition } from '../../src/types/eidolon';
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

async function seedEidolonSubtypes(subtypes: EidolonSubtypeDefinition[]): Promise<void> {
  console.log(`\nSeeding ${subtypes.length} eidolon subtypes to project: ${PROJECT_ID}`);

  const withBonusEP = subtypes.filter((s) =>
    s.scalingGrants.some((g) => g.bonusEvolutionPoints),
  ).length;
  console.log(`Subtypes that grant +ep pool bumps: ${withBonusEP}`);

  if (DRY_RUN) {
    console.log('\n[DRY RUN] — no writes performed.');
    return;
  }

  const chunks = chunkArray(subtypes, BATCH_SIZE);
  let totalWritten = 0;

  for (const chunk of chunks) {
    const batch = db.batch();
    chunk.forEach((st) => {
      const ref = db.collection('eidolonsubtypes').doc(st.id);
      batch.set(ref, {
        ...st,
        visibility: 'global' as const,
      });
    });
    await batch.commit();
    await sleep(500);
    totalWritten += chunk.length;
    console.log(`  Written: ${totalWritten}/${subtypes.length}`);
  }

  console.log(`\nDone. ${totalWritten} eidolon subtypes seeded to Firestore.`);
}

seedEidolonSubtypes(ALL_EIDOLON_SUBTYPES).catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
