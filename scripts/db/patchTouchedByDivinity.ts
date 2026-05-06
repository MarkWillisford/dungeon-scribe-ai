/**
 * patchTouchedByDivinity.ts — Fix the Touched by Divinity campaign trait.
 *
 * The existing doc had completely wrong data (a +1 save bonus trait).
 * The correct trait grants a free holy symbol + 1st-level domain spell 1/day.
 *
 * Usage:
 *   export GOOGLE_APPLICATION_CREDENTIALS=/path/to/serviceAccount.json
 *   npx tsx scripts/db/patchTouchedByDivinity.ts [--dry-run]
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
  console.log(`\nPatching touched_by_divinity in project: ${PROJECT_ID}`);
  if (DRY_RUN) console.log('[DRY RUN] — no writes will be performed\n');

  const ref = db.collection('traits').doc('touched_by_divinity');
  const snap = await ref.get();

  if (!snap.exists) {
    console.error('ERROR: touched_by_divinity document not found in traits collection.');
    process.exit(1);
  }

  const data = snap.data()!;
  console.log('Current description:', data.description);
  console.log('Current shortDescription:', data.shortDescription);

  if (DRY_RUN) return;

  await ref.update({
    description:
      "As long as you can remember, you've had an unexplainable interest in one deity in particular. One of your parents might have been a priest of the deity, but even this can't explain your deep connection to the faith. You begin play with a silver holy symbol of your chosen deity for free. In addition, choose one domain associated with your chosen deity. You gain the use of that domain's 1st-level domain spell as a spell-like ability usable once per day (CL equals your character level).",
    shortDescription: 'Free silver holy symbol; 1st-level domain spell 1/day (CL = character level)',
    source: 'Pathfinder Adventure Path: Wrath of the Righteous',
    effects: [],
    choices: [
      {
        type: 'custom',
        label: 'Chosen deity',
        options: [],
        affectsEffects: false,
      },
      {
        type: 'custom',
        label: 'Chosen domain',
        options: [],
        affectsEffects: false,
      },
    ],
    tags: ['divine', 'spell-like ability', 'campaign'],
  });

  console.log('Done. touched_by_divinity patched with correct data.');
}

patch().catch((e) => {
  console.error('Patch failed:', e);
  process.exit(1);
});
