/**
 * seedEidolonBaseForms.ts — Upload ALL_EIDOLON_BASE_FORMS to Firestore
 *
 * Firestore collection: 'eidolonbaseforms'
 * Document ID: base form id ('biped', 'quadruped', etc.)
 *
 * Prerequisites:
 *   export GOOGLE_APPLICATION_CREDENTIALS=/path/to/serviceAccount.json
 *   export FIREBASE_PROJECT_ID=dungeon-scribe-ai-stagin-b4fb5   (staging, default)
 *                              <prod-project-id>               (prod)
 *
 * Usage:
 *   npx tsx scripts/db/seedEidolonBaseForms.ts [--dry-run]
 *
 * Idempotent: batch.set() upserts by document id.
 */

import * as admin from 'firebase-admin';
import { ALL_EIDOLON_BASE_FORMS } from '../../src/data/eidolonBaseForms/index';
import type { EidolonBaseFormDefinition } from '../../src/types/eidolon';
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

async function seedEidolonBaseForms(baseForms: EidolonBaseFormDefinition[]): Promise<void> {
  console.log(`\nSeeding ${baseForms.length} eidolon base forms to project: ${PROJECT_ID}`);

  const byEdition: Record<string, number> = { apg: 0, unchained: 0, both: 0 };
  baseForms.forEach((bf) => {
    byEdition[bf.edition] = (byEdition[bf.edition] ?? 0) + 1;
  });
  console.log('By edition:', byEdition);

  if (DRY_RUN) {
    console.log('\n[DRY RUN] — no writes performed.');
    return;
  }

  const chunks = chunkArray(baseForms, BATCH_SIZE);
  let totalWritten = 0;

  for (const chunk of chunks) {
    const batch = db.batch();
    chunk.forEach((bf) => {
      const ref = db.collection('eidolonbaseforms').doc(bf.id);
      batch.set(ref, {
        ...bf,
        visibility: 'global' as const,
      });
    });
    await batch.commit();
    await sleep(500);
    totalWritten += chunk.length;
    console.log(`  Written: ${totalWritten}/${baseForms.length}`);
  }

  console.log(`\nDone. ${totalWritten} eidolon base forms seeded to Firestore.`);
}

seedEidolonBaseForms(ALL_EIDOLON_BASE_FORMS).catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
