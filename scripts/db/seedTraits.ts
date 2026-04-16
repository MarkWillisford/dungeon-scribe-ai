/**
 * seedTraits.ts — Upsert ALL_TRAITS to Firestore
 *
 * Prerequisites:
 *   1. Download a service account key from Firebase Console:
 *      Project Settings → Service Accounts → Generate New Private Key
 *   2. Set env var: export GOOGLE_APPLICATION_CREDENTIALS=/path/to/serviceAccount.json
 *   3. Set env var: export FIREBASE_PROJECT_ID=dungeon-scribe-ai-stagin-b4fb5  (staging)
 *                   export FIREBASE_PROJECT_ID=<prod-project-id>               (prod)
 *
 * Usage:
 *   npx tsx scripts/db/seedTraits.ts [--dry-run]
 *
 * The script is idempotent (upsert, not clear+insert). Document ID = trait.id.
 */

import * as admin from 'firebase-admin';
import { ALL_TRAITS } from '../../src/data/traits/index';
import type { TraitDefinition } from '../../src/types/traits';
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

async function seedTraits(traits: TraitDefinition[]): Promise<void> {
  console.log(`\nSeeding ${traits.length} traits to project: ${PROJECT_ID}`);

  const bySource: Record<string, number> = {};
  traits.forEach((t) => {
    bySource[t.source] = (bySource[t.source] ?? 0) + 1;
  });
  console.log(`By source (${Object.keys(bySource).length} sources):`, bySource);

  if (DRY_RUN) {
    console.log('\n[DRY RUN] — no writes performed.');
    return;
  }

  const chunks = chunkArray(traits, BATCH_SIZE);
  let totalWritten = 0;

  for (const chunk of chunks) {
    const batch = db.batch();
    chunk.forEach((trait) => {
      const ref = db.collection('traits').doc(trait.id);
      batch.set(ref, {
        ...trait,
        source: normalizeSource(trait.source),
        visibility: 'global' as const,
      });
    });
    await batch.commit();
    await sleep(500);
    totalWritten += chunk.length;
    console.log(`  Written: ${totalWritten}/${traits.length}`);
  }

  console.log(`\nDone. ${totalWritten} traits upserted to Firestore.`);
}

// --- Run ---
seedTraits(ALL_TRAITS).catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
