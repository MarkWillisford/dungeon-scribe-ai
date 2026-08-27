/**
 * One-shot audit: count ClassFeatureData entries in Firestore's `classes`
 * collection that lack an `effects` field. Compares to what src/data has.
 *
 * Run from repo root:
 *   GOOGLE_APPLICATION_CREDENTIALS=~/.firebase/serviceAccount-staging.json \
 *     npx tsx /tmp/audit-firestore-effects.ts
 */

import * as admin from 'firebase-admin';

const PROJECT_ID = process.env.FIREBASE_PROJECT_ID ?? 'dungeon-scribe-ai-stagin-b4fb5';

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    projectId: PROJECT_ID,
  });
}

const db = admin.firestore();

async function main() {
  console.log(`Auditing project: ${PROJECT_ID}\n`);
  const snap = await db.collection('classes').get();
  console.log(`class docs: ${snap.size}\n`);

  let totalFeatures = 0;
  let missingEffects = 0;
  const offenders: { className: string; featureName: string; level: number }[] = [];

  snap.forEach((doc) => {
    const data = doc.data() as { name?: string; classFeatures?: unknown[] };
    const features = Array.isArray(data.classFeatures) ? data.classFeatures : [];
    for (const raw of features) {
      totalFeatures += 1;
      const f = raw as { name?: string; level?: number; effects?: unknown };
      if (!('effects' in f) || f.effects === undefined) {
        missingEffects += 1;
        offenders.push({
          className: data.name ?? doc.id,
          featureName: f.name ?? '(unnamed)',
          level: typeof f.level === 'number' ? f.level : -1,
        });
      }
    }
  });

  console.log(`total classFeatures across all docs: ${totalFeatures}`);
  console.log(`missing effects field: ${missingEffects}\n`);

  if (offenders.length > 0) {
    console.log('Offenders:');
    for (const o of offenders.slice(0, 50)) {
      console.log(`  ${o.className.padEnd(30)}  L${o.level}  ${o.featureName}`);
    }
    if (offenders.length > 50) console.log(`  ...and ${offenders.length - 50} more`);
  }
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error('audit failed:', err);
    process.exit(1);
  });
