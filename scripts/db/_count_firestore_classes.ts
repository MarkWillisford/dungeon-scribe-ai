/**
 * _count_firestore_classes.ts — Count classes and features in Firestore staging
 * Investigation only, no writes.
 * Run: GOOGLE_APPLICATION_CREDENTIALS=/home/mark/.firebase/serviceAccount-staging.json \
 *   npx tsx scripts/db/_count_firestore_classes.ts
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
  const snap = await db.collection('classes').get();
  console.log(`\nFirestore staging — class docs: ${snap.size}`);
  
  let totalFeatures = 0;
  let withEffects = 0;
  let withoutEffects = 0;
  const docIds: string[] = [];
  
  for (const docSnap of snap.docs) {
    const data = docSnap.data();
    const features: any[] = data.classFeatures ?? [];
    docIds.push(docSnap.id);
    totalFeatures += features.length;
    for (const f of features) {
      if ('effects' in f) withEffects++;
      else withoutEffects++;
    }
  }
  
  console.log(`Total class features in Firestore: ${totalFeatures}`);
  console.log(`  Features WITH effects property: ${withEffects}`);
  console.log(`  Features WITHOUT effects property: ${withoutEffects}`);
  console.log(`\nAll ${docIds.length} class doc IDs:`);
  docIds.sort().forEach(id => console.log('  ', id));
}

main().catch(console.error).finally(() => process.exit(0));
