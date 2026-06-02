import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

async function main() {
  const app = initializeApp({ credential: cert(process.env.GOOGLE_APPLICATION_CREDENTIALS!) });
  const db = getFirestore(app);
  const snap = await db.collection('campaigns').limit(10).get();
  snap.forEach((d) => {
    const data = d.data();
    console.log(d.id, '-', data.name ?? data.title ?? '(no name)');
  });
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
