import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

const app = initializeApp({ credential: cert(process.env.GOOGLE_APPLICATION_CREDENTIALS!) });
const db = getFirestore(app);

async function main() {
  const snap = await db.collection('races').where('name', '==', 'Elven Noble').limit(1).get();
  if (snap.empty) { console.log('Not found'); return; }
  const data = snap.docs[0].data();
  console.log(JSON.stringify(data, null, 2));
}

main().then(() => process.exit(0)).catch(e => { console.error(e); process.exit(1); });
