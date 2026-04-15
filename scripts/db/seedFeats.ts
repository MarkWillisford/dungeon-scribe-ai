/**
 * seedFeats.ts — Upsert ALL_FEATS to Firestore
 *
 * Prerequisites:
 *   1. Download a service account key from Firebase Console:
 *      Project Settings → Service Accounts → Generate New Private Key
 *   2. Set env var: export GOOGLE_APPLICATION_CREDENTIALS=/path/to/serviceAccount.json
 *   3. Set env var: export FIREBASE_PROJECT_ID=dungeon-scribe-ai-stagin-b4fb5  (staging)
 *                   export FIREBASE_PROJECT_ID=<prod-project-id>               (prod)
 *
 * Usage:
 *   npx tsx scripts/db/seedFeats.ts [--dry-run]
 *
 * Large dataset (~2,600+ feats). Batched in 500-doc chunks.
 * The script is idempotent (upsert, not clear+insert). Document ID = feat.id.
 */

import * as admin from 'firebase-admin';
import { ALL_FEATS } from '../../src/data/feats/index';
import type { FeatDefinition } from '../../src/types/feats';
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

async function seedFeats(feats: FeatDefinition[]): Promise<void> {
  console.log(`\nSeeding ${feats.length} feats to project: ${PROJECT_ID}`);

  const bySource: Record<string, number> = {};
  feats.forEach((f) => {
    bySource[f.source] = (bySource[f.source] ?? 0) + 1;
  });
  console.log(`By source (${Object.keys(bySource).length} sources):`, bySource);

  if (DRY_RUN) {
    console.log('\n[DRY RUN] — no writes performed.');
    return;
  }

  const chunks = chunkArray(feats, BATCH_SIZE);
  let totalWritten = 0;

  for (const chunk of chunks) {
    const batch = db.batch();
    chunk.forEach((feat) => {
      const ref = db.collection('feats').doc(feat.id);
      batch.set(ref, {
        ...feat,
        source: normalizeSource(feat.source),
        visibility: 'global' as const,
      });
    });
    await batch.commit();
    await sleep(500);
    totalWritten += chunk.length;
    console.log(`  Written: ${totalWritten}/${feats.length}`);
  }

  console.log(`\nDone. ${totalWritten} feats upserted to Firestore.`);
}

// --- Run ---
seedFeats(ALL_FEATS).catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
