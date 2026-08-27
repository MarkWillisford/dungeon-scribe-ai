/**
 * _diff_class_lists.ts — Compare class names between src/data and Firestore staging
 * Investigation only, no writes.
 */
import * as admin from 'firebase-admin';
import { ALL_EXPANDED_CLASSES } from '../../src/data/classes/index';

const PROJECT_ID = process.env.FIREBASE_PROJECT_ID ?? 'dungeon-scribe-ai-stagin-b4fb5';

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    projectId: PROJECT_ID,
  });
}

const db = admin.firestore();

function toDocId(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

async function main() {
  const snap = await db.collection('classes').get();
  const firestoreIds = new Set(snap.docs.map(d => d.id));
  const srcDataIds = new Set(ALL_EXPANDED_CLASSES.map(c => toDocId(c.name)));
  
  console.log(`src/data class count: ${srcDataIds.size}`);
  console.log(`Firestore class count: ${firestoreIds.size}`);
  
  const onlyInFirestore = [...firestoreIds].filter(id => !srcDataIds.has(id));
  const onlyInSrcData = [...srcDataIds].filter(id => !firestoreIds.has(id));
  
  console.log(`\nIn Firestore but NOT in src/data (${onlyInFirestore.length}):`);
  onlyInFirestore.forEach(id => console.log('  ', id));
  
  console.log(`\nIn src/data but NOT in Firestore (${onlyInSrcData.length}):`);
  onlyInSrcData.forEach(id => console.log('  ', id));
  
  // Also check feature counts per class
  console.log('\nFeature count deltas (Firestore vs src/data):');
  const srcMap = new Map(ALL_EXPANDED_CLASSES.map(c => [toDocId(c.name), c.classFeatures?.length ?? 0]));
  for (const docSnap of snap.docs) {
    const firestoreCount = (docSnap.data().classFeatures ?? []).length;
    const srcCount = srcMap.get(docSnap.id) ?? 0;
    if (firestoreCount !== srcCount) {
      console.log(`  ${docSnap.id}: Firestore=${firestoreCount}, src/data=${srcCount}, delta=${firestoreCount - srcCount}`);
    }
  }
}

main().catch(console.error).finally(() => process.exit(0));
