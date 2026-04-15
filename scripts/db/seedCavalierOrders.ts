/**
 * seedCavalierOrders.ts — Upsert ALL_CAVALIER_ORDERS to Firestore
 *
 * Prerequisites:
 *   1. Download a service account key from Firebase Console:
 *      Project Settings → Service Accounts → Generate New Private Key
 *   2. Set env var: export GOOGLE_APPLICATION_CREDENTIALS=/path/to/serviceAccount.json
 *   3. Set env var: export FIREBASE_PROJECT_ID=dungeon-scribe-ai-stagin-b4fb5  (staging)
 *                   export FIREBASE_PROJECT_ID=<prod-project-id>               (prod)
 *
 * Usage:
 *   npx tsx scripts/db/seedCavalierOrders.ts [--dry-run]
 *
 * The script is idempotent (upsert, not clear+insert) so campaign/homebrew
 * cavalier orders added by users are preserved. Document ID = order.id.
 */

import * as admin from 'firebase-admin';
import { ALL_CAVALIER_ORDERS } from '../../src/data/cavalierOrders/index';
import type { ClassOptionBase } from '../../src/types/classOptions';
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

async function seedCavalierOrders(orders: ClassOptionBase[]): Promise<void> {
  console.log(`\nSeeding ${orders.length} cavalier orders to project: ${PROJECT_ID}`);

  const bySource: Record<string, number> = {};
  orders.forEach((o) => {
    const key = typeof o.source === 'string' ? o.source : o.source.bookId;
    bySource[key] = (bySource[key] ?? 0) + 1;
  });
  console.log('By source:', bySource);

  if (DRY_RUN) {
    console.log('\n[DRY RUN] — no writes performed.');
    return;
  }

  const chunks = chunkArray(orders, BATCH_SIZE);
  let totalWritten = 0;

  for (const chunk of chunks) {
    const batch = db.batch();
    chunk.forEach((order) => {
      const ref = db.collection('cavalierorders').doc(order.id);
      batch.set(ref, {
        ...order,
        source: normalizeSource(order.source),
        visibility: 'global' as const,
      });
    });
    await batch.commit();
    await sleep(500);
    totalWritten += chunk.length;
    console.log(`  Written: ${totalWritten}/${orders.length}`);
  }

  console.log(`\nDone. ${totalWritten} cavalier orders upserted to Firestore.`);
}

// --- Run ---
seedCavalierOrders(ALL_CAVALIER_ORDERS as ClassOptionBase[]).catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
