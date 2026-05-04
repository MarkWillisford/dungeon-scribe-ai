/**
 * patchDruidCreatureTemplate.ts — Add abilityScoreChanges to druid-creature template doc.
 *
 * The scraper missed the "+4 Wisdom" rebuild rule. This patches the single doc.
 *
 * Usage:
 *   export GOOGLE_APPLICATION_CREDENTIALS=/path/to/serviceAccount.json
 *   npx tsx scripts/db/patchDruidCreatureTemplate.ts [--dry-run]
 */

import * as admin from 'firebase-admin';

const DRY_RUN = process.argv.includes('--dry-run');
const PROJECT_ID = process.env.FIREBASE_PROJECT_ID ?? 'dungeon-scribe-ai-stagin-b4fb5';

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    projectId: PROJECT_ID,
  });
}

const db = admin.firestore();

async function patch(): Promise<void> {
  console.log(`\nPatching druid-creature in project: ${PROJECT_ID}`);
  if (DRY_RUN) console.log('[DRY RUN] — no writes will be performed\n');

  const ref = db.collection('templates').doc('druid-creature');
  const snap = await ref.get();

  if (!snap.exists) {
    console.error('ERROR: druid-creature document not found in templates collection.');
    process.exit(1);
  }

  const data = snap.data()!;
  console.log('Current abilityScoreChanges:', data.abilityScoreChanges ?? 'missing');

  if (DRY_RUN) return;

  await ref.update({
    abilityScoreChanges: [{ ability: 'WIS', change: 4 }],
  });

  console.log(
    'Done. druid-creature patched with abilityScoreChanges: [{ ability: WIS, change: 4 }]',
  );
}

patch().catch((e) => {
  console.error('Patch failed:', e);
  process.exit(1);
});
