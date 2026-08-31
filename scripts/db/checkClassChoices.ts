/**
 * checkClassChoices.ts — Answer why a class's choices do not appear in the app
 *
 * The app reads class choices with a single Firestore query:
 *
 *   collection('classChoiceDefinitions').where('className', '==', <class>.toLowerCase())
 *
 * When that comes back empty the UI has nothing to show, and three very
 * different causes look identical from the outside (#360):
 *
 *   1. The collection was never seeded in this project.
 *   2. The documents are there but their `className` does not match what the
 *      app sends — a casing or wording difference such as 'Unchained Rogue'
 *      against 'rogue (unchained)'.
 *   3. The documents are there and match, but the client is denied by stale
 *      security rules that predate the classChoiceDefinitions grant (#207).
 *
 * This script runs with ADMIN credentials, which bypass security rules. So:
 *
 *   - Script finds nothing            → cause 1 or 2, and it says which.
 *   - Script finds it, app does not   → cause 3. Deploy current firestore.rules.
 *
 * Prerequisites:
 *   export GOOGLE_APPLICATION_CREDENTIALS=/path/to/serviceAccount.json
 *   export FIREBASE_PROJECT_ID=dungeon-scribe-doug-dev
 *
 * Usage:
 *   npx tsx scripts/db/checkClassChoices.ts                     # the classes from issue #360
 *   npx tsx scripts/db/checkClassChoices.ts "Cavalier" "Sentinel"
 */

import { config } from 'dotenv';
import { resolve } from 'path';
config({ path: resolve(__dirname, '../../.env.local') });

import * as admin from 'firebase-admin';

const COLLECTION = 'classChoiceDefinitions';
const DEFAULT_CLASSES = ['Cavalier', 'Rogue (Unchained)'];

function initFirestore(): admin.firestore.Firestore {
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.applicationDefault(),
      projectId: process.env.FIREBASE_PROJECT_ID,
    });
  }
  return admin.firestore();
}

async function main(): Promise<void> {
  const classNames = process.argv.slice(2).length ? process.argv.slice(2) : DEFAULT_CLASSES;
  const db = initFirestore();

  console.log(`Project: ${process.env.FIREBASE_PROJECT_ID ?? '(from credentials)'}`);

  const all = await db.collection(COLLECTION).get();
  console.log(`\n${COLLECTION}: ${all.size} documents total`);

  if (all.empty) {
    console.log(`\n  The collection is EMPTY. Run scripts/db/seedClassChoiceDefinitions.ts.`);
    return;
  }

  // Every distinct className present, so a near-miss is obvious on sight.
  const present = new Map<string, number>();
  for (const doc of all.docs) {
    const name = (doc.data() as { className?: string }).className ?? '(missing className)';
    present.set(name, (present.get(name) ?? 0) + 1);
  }

  for (const className of classNames) {
    const queried = className.toLowerCase();
    console.log(`\n--- ${className} ---`);
    console.log(`  app queries className == "${queried}"`);

    const snap = await db.collection(COLLECTION).where('className', '==', queried).get();

    if (!snap.empty) {
      console.log(`  ✓ ${snap.size} matching definition(s):`);
      for (const doc of snap.docs) {
        const d = doc.data() as {
          featureName?: string;
          collectionName?: string;
          selectionMode?: { type?: string };
        };
        console.log(
          `      ${doc.id} — ${d.featureName} (${d.selectionMode?.type}) from "${d.collectionName}"`,
        );
      }
      console.log(
        `  The data and the query agree. If the app still shows nothing, the client read is`,
      );
      console.log(`  being DENIED — deploy current firestore.rules to this project (see #207).`);
      continue;
    }

    console.log(`  ✗ no documents match.`);

    // A near miss is far more likely than a genuine absence, so name it.
    const near = [...present.keys()].filter(
      (name) =>
        name.toLowerCase().includes(queried) ||
        queried.includes(name.toLowerCase()) ||
        name.toLowerCase().replace(/[^a-z]/g, '') === queried.replace(/[^a-z]/g, ''),
    );
    if (near.length) {
      console.log(
        `  Close matches present in the collection: ${near.map((n) => `"${n}"`).join(', ')}`,
      );
      console.log(`  This is a className mismatch, not a missing document.`);
    } else {
      console.log(
        `  No similar className exists — this class genuinely has no definitions seeded.`,
      );
    }
  }

  console.log(`\nAll className values present (${present.size} distinct):`);
  for (const [name, count] of [...present.entries()].sort()) {
    console.log(`  ${count.toString().padStart(3)}  ${name}`);
  }
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
