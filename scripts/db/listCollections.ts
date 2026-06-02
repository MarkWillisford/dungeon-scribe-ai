import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

async function main() {
  const app = initializeApp({ credential: cert(process.env.GOOGLE_APPLICATION_CREDENTIALS!) });
  const db = getFirestore(app);
  const cols = await db.listCollections();
  cols.forEach((c) => console.log(c.id));
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
