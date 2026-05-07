/**
 * patchGreaterSpellPerfection.ts — Fix the Greater Spell Perfection feat.
 *
 * A duplicate entry with type: 'custom' (no options) overwrote the correct
 * type: 'spell' entry in Firestore, making the spell picker empty. This patch
 * restores the choices field to use type: 'spell' so the picker populates.
 *
 * Usage:
 *   export GOOGLE_APPLICATION_CREDENTIALS=/path/to/serviceAccount.json
 *   npx tsx scripts/db/patchGreaterSpellPerfection.ts [--dry-run]
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

async function patch(): Promise<void> {
  console.log(`\nPatching greater_spell_perfection in project: ${PROJECT_ID}`);
  if (DRY_RUN) console.log('[DRY RUN] — no writes will be performed\n');

  const ref = db.collection('feats').doc('greater_spell_perfection');
  const snap = await ref.get();

  if (!snap.exists) {
    console.error('ERROR: greater_spell_perfection document not found in feats collection.');
    process.exit(1);
  }

  const data = snap.data()!;
  console.log('Current choices:', JSON.stringify(data.choices));

  if (DRY_RUN) return;

  await ref.update({
    choices: [
      { type: 'spell', label: 'Spell (must have Spell Perfection for it)', affectsEffects: true },
    ],
  });

  console.log('Done. greater_spell_perfection choices restored to type: spell.');
}

patch().catch((e) => {
  console.error('Patch failed:', e);
  process.exit(1);
});
