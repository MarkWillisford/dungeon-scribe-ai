/**
 * queryClassesAudit.ts — Check which classes from Mark's audit list exist in Firestore
 * and whether they have classFeatureResourcePools entries.
 *
 * Usage:
 *   GOOGLE_APPLICATION_CREDENTIALS=~/.firebase/serviceAccount-staging.json \
 *   npx tsx scripts/db/queryClassesAudit.ts
 */

import * as admin from 'firebase-admin';

const PROJECT_ID = process.env.FIREBASE_PROJECT_ID ?? 'dungeon-scribe-ai-stagin-b4fb5';

if (!admin.apps.length) {
  const credential = process.env.GOOGLE_APPLICATION_CREDENTIALS
    ? admin.credential.applicationDefault()
    : (() => {
        console.error('ERROR: GOOGLE_APPLICATION_CREDENTIALS not set.');
        process.exit(1);
      })();
  admin.initializeApp({ credential, projectId: PROJECT_ID });
}

const db = admin.firestore();

function classDocId(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

const AUDIT_CLASSES = [
  'Cleric',
  'Hathran',
  'Dweomerkeeper',
  'Radiant Servant',
  'Simple Druid',
  'Simple Paladin',
  'Nemesis',
  'Fighter',
  'Rogue',
  'Simple Cleric',
  'Druid',
  'Simple Barbarian',
  'Warder',
  'Leader of the Faith',
  'Simple Fighter',
  'Suzerain',
  'Ranger',
  'Horizon Walker',
  'Stalker',
  'Holy Creature',
  'Celestial-Blessed Creature',
  'Saint',
  'Mammoth Rider',
  'Inquisitor',
  'Battlecaster',
  // Prestige Paladin variants
  'Paladin of Tyranny',
  'Prestige Paladin',
];

async function main() {
  console.log(`\nQuerying project: ${PROJECT_ID}\n`);
  console.log('='.repeat(70));

  const results: {
    name: string;
    docId: string;
    inClasses: boolean;
    featureCount: number;
    hasResourcePool: boolean;
  }[] = [];

  for (const name of AUDIT_CLASSES) {
    const docId = classDocId(name);
    const snap = await db.collection('classes').doc(docId).get();
    const inClasses = snap.exists;
    const featureCount = inClasses ? ((snap.data()?.classFeatures as unknown[]) ?? []).length : 0;

    // Check classFeatureResourcePools collection for entries referencing this class
    const poolSnap = await db
      .collection('classFeatureResourcePools')
      .where('className', '==', name)
      .limit(5)
      .get();
    const hasResourcePool = !poolSnap.empty;

    results.push({ name, docId, inClasses, featureCount, hasResourcePool });
  }

  // Also check for fuzzy matches (e.g. "radiant-servant-of-milani")
  const extraChecks = [
    'radiant-servant-of-milani',
    'radiant-servant-of-pelor',
    'nemesis',
    'suzerain-creature',
    'holy-creature',
    'saint-template',
    'battlecaster',
    'bladecaster',
  ];

  console.log('\nDirect name lookups:\n');
  for (const r of results) {
    const status = r.inClasses ? '✓ FOUND' : '✗ MISSING';
    const pool = r.hasResourcePool ? ' [has resource pool]' : '';
    const features = r.inClasses ? ` (${r.featureCount} features)` : '';
    console.log(`  ${status.padEnd(10)} ${r.name.padEnd(30)} doc: ${r.docId}${features}${pool}`);
  }

  console.log('\nExtra ID checks:\n');
  for (const docId of extraChecks) {
    const snap = await db.collection('classes').doc(docId).get();
    const status = snap.exists ? '✓ FOUND' : '✗ MISSING';
    const featureCount = snap.exists ? ((snap.data()?.classFeatures as unknown[]) ?? []).length : 0;
    const name = snap.exists ? (snap.data()?.name ?? docId) : docId;
    console.log(
      `  ${status.padEnd(10)} ${name.toString().padEnd(30)} doc: ${docId}${snap.exists ? ` (${featureCount} features)` : ''}`,
    );
  }

  // Show full list of prestige classes in DB for reference
  console.log('\n\nAll Prestige classes in DB:\n');
  const prestigeSnap = await db.collection('classes').where('category', '==', 'Prestige').get();
  const prestigeNames = prestigeSnap.docs.map((d) => `  ${d.data().name} (${d.id})`).sort();
  prestigeNames.forEach((n) => console.log(n));
  console.log(`\n  Total: ${prestigeSnap.size}`);

  console.log('\nDone.\n');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
