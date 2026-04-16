/**
 * seedClasses.ts — Upsert ALL_EXPANDED_CLASSES to Firestore
 *
 * Prerequisites:
 *   1. Download a service account key from Firebase Console:
 *      Project Settings → Service Accounts → Generate New Private Key
 *   2. Set env var: export GOOGLE_APPLICATION_CREDENTIALS=/path/to/serviceAccount.json
 *   3. Set env var: export FIREBASE_PROJECT_ID=dungeon-scribe-ai-stagin-b4fb5  (staging)
 *                   export FIREBASE_PROJECT_ID=<prod-project-id>               (prod)
 *
 * Usage:
 *   npx tsx scripts/db/seedClasses.ts [--dry-run]
 *
 * ExpandedClassData has no id field — document ID is derived from name
 * (lowercase, non-alphanumeric chars replaced with hyphens).
 * The script is idempotent (upsert, not clear+insert).
 */

import * as admin from 'firebase-admin';
import { ALL_EXPANDED_CLASSES } from '../../src/data/classes/index';
import type { ExpandedClassData } from '../../src/data/classes/types';
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

/** Derive a stable Firestore document ID from class name. */
function classDocId(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

async function seedClasses(classes: ExpandedClassData[]): Promise<void> {
  console.log(`\nSeeding ${classes.length} classes to project: ${PROJECT_ID}`);

  const byCategory: Record<string, number> = {};
  classes.forEach((c) => {
    byCategory[c.category] = (byCategory[c.category] ?? 0) + 1;
  });
  console.log('By category:', byCategory);

  if (DRY_RUN) {
    console.log('\n[DRY RUN] — no writes performed.');
    return;
  }

  const chunks = chunkArray(classes, BATCH_SIZE);
  let totalWritten = 0;

  for (const chunk of chunks) {
    const batch = db.batch();
    chunk.forEach((cls) => {
      const ref = db.collection('classes').doc(classDocId(cls.name));
      batch.set(ref, {
        ...cls,
        source: normalizeSource(cls.source),
        visibility: 'global' as const,
      });
    });
    await batch.commit();
    await sleep(500);
    totalWritten += chunk.length;
    console.log(`  Written: ${totalWritten}/${classes.length}`);
  }

  console.log(`\nDone. ${totalWritten} classes upserted to Firestore.`);
}

// --- Run ---
seedClasses(ALL_EXPANDED_CLASSES).catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
