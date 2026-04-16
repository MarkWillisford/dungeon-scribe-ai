/**
 * seedClassChoiceDefinitions.ts — Upload ALL_CLASS_CHOICE_DEFINITIONS to Firestore
 *
 * Prerequisites:
 *   1. Download a service account key from Firebase Console:
 *      Project Settings → Service Accounts → Generate New Private Key
 *   2. Set env var: export GOOGLE_APPLICATION_CREDENTIALS=/path/to/serviceAccount.json
 *   3. Set env var: export FIREBASE_PROJECT_ID=dungeon-scribe-ai-stagin-b4fb5  (staging)
 *                   export FIREBASE_PROJECT_ID=<prod-project-id>               (prod)
 *
 * Usage:
 *   npx tsx scripts/db/seedClassChoiceDefinitions.ts [--dry-run]
 *
 * Idempotent: sets each document by its stable `id` field. Safe to re-run.
 */

import * as admin from 'firebase-admin';
import { ALL_CLASS_CHOICE_DEFINITIONS } from '../../src/data/classChoiceDefinitions/index';
import type { ClassChoiceDefinition } from '../../src/types/classChoices';
import { normalizeSource } from '../../src/utils/normalizeSource';
import { sleep, chunkArray } from './seedUtils';

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
db.settings({ ignoreUndefinedProperties: true });

async function seedClassChoiceDefinitions(defs: ClassChoiceDefinition[]): Promise<void> {
  console.log(`\nSeeding ${defs.length} class choice definitions to project: ${PROJECT_ID}`);

  const byClassName: Record<string, number> = {};
  defs.forEach((d) => {
    byClassName[d.className] = (byClassName[d.className] ?? 0) + 1;
  });
  console.log('By className:', byClassName);

  if (DRY_RUN) {
    console.log('\n[DRY RUN] — no writes performed.');
    return;
  }

  const chunks = chunkArray(defs, BATCH_SIZE);
  let totalWritten = 0;

  for (const chunk of chunks) {
    const batch = db.batch();
    chunk.forEach((def) => {
      const ref = db.collection('classChoiceDefinitions').doc(def.id);
      batch.set(ref, {
        ...def,
        source: normalizeSource(def.source),
        visibility: 'global' as const,
      });
    });
    await batch.commit();
    await sleep(500);
    totalWritten += chunk.length;
    console.log(`  Written: ${totalWritten}/${defs.length}`);
  }

  console.log(`\nDone. ${totalWritten} class choice definitions seeded to Firestore.`);
}

// --- Run ---
seedClassChoiceDefinitions(ALL_CLASS_CHOICE_DEFINITIONS).catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
