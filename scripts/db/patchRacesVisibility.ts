/**
 * patchRacesVisibility.ts — Add visibility: 'global' to all race documents
 * that are missing the field.
 *
 * Usage:
 *   export GOOGLE_APPLICATION_CREDENTIALS=/path/to/serviceAccount.json
 *   npx tsx scripts/db/patchRacesVisibility.ts [--dry-run]
 */

import * as admin from 'firebase-admin';

const DRY_RUN = process.argv.includes('--dry-run');
const PROJECT_ID = process.env.FIREBASE_PROJECT_ID ?? 'dungeon-scribe-ai-stagin-b4fb5';

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

async function patchRacesVisibility(): Promise<void> {
  console.log(`\nPatching races in project: ${PROJECT_ID}`);
  if (DRY_RUN) console.log('[DRY RUN] — no writes will be performed\n');

  const snap = await db.collection('races').get();
  const toFix = snap.docs.filter((d) => d.data().visibility === undefined);

  console.log(`Total race docs: ${snap.size}`);
  console.log(`Missing visibility field: ${toFix.length}`);

  if (toFix.length === 0) {
    console.log('Nothing to patch.');
    return;
  }

  if (DRY_RUN) {
    toFix.slice(0, 5).forEach((d) => console.log(' ', d.id));
    if (toFix.length > 5) console.log(`  ... and ${toFix.length - 5} more`);
    return;
  }

  // Batch-update in chunks of 500
  const BATCH_SIZE = 500;
  let updated = 0;
  for (let i = 0; i < toFix.length; i += BATCH_SIZE) {
    const batch = db.batch();
    toFix.slice(i, i + BATCH_SIZE).forEach((d) => {
      batch.update(d.ref, { visibility: 'global' });
    });
    await batch.commit();
    updated += Math.min(BATCH_SIZE, toFix.length - i);
    console.log(`  Updated: ${updated}/${toFix.length}`);
  }

  console.log(`\nDone. ${updated} race documents patched.`);
}

patchRacesVisibility().catch((e) => {
  console.error('Patch failed:', e);
  process.exit(1);
});
