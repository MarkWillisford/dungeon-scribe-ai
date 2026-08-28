/**
 * auditRaceDocs.ts — Find race documents in Firestore that no seed run produced
 *
 * Why this exists (issue #267): the race picker shows a duplicate "Elven Noble
 * with Aasimar Blood" entry. That name has never existed in src/data/races/ or
 * anywhere in git history, so it cannot be fixed by editing seed data and
 * re-seeding. It is a stale Firestore document, and seedRaces only upserts —
 * it never deletes — so re-running the seed will not remove it.
 *
 * What counts as an orphan:
 *   A doc with visibility 'global' whose ID is not derivable from any entry in
 *   ALL_EXPANDED_RACES. Global content is always seed-produced, so a global doc
 *   with no seed counterpart is left over from an older run.
 *
 * What is NOT an orphan:
 *   Anything with visibility 'campaign' or 'private'. Homebrew and campaign
 *   content lives only in Firestore by design and must never be touched here.
 *   Docs missing a visibility field are also left alone and reported separately
 *   rather than assumed deletable.
 *
 * Prerequisites:
 *   1. Download a service account key from Firebase Console:
 *      Project Settings → Service Accounts → Generate New Private Key
 *   2. export GOOGLE_APPLICATION_CREDENTIALS=/path/to/serviceAccount.json
 *   3. export FIREBASE_PROJECT_ID=dungeon-scribe-ai-stagin-b4fb5   (staging)
 *
 * Usage:
 *   npx tsx scripts/db/auditRaceDocs.ts             # report only (default)
 *   npx tsx scripts/db/auditRaceDocs.ts --delete    # delete orphans, with prompt
 *
 * --delete is deliberately not silent: it prints every doc it intends to remove
 * and requires typing the count to confirm.
 */

import * as admin from 'firebase-admin';
import * as readline from 'readline';
import { ALL_EXPANDED_RACES } from '../../src/data/races/index';
import { raceDocId } from './seedUtils';

const DELETE_MODE = process.argv.includes('--delete');
const PROJECT_ID = process.env.FIREBASE_PROJECT_ID ?? 'dungeon-scribe-ai-stagin-b4fb5';

if (!admin.apps.length) {
  if (!process.env.GOOGLE_APPLICATION_CREDENTIALS) {
    console.error(
      'ERROR: GOOGLE_APPLICATION_CREDENTIALS env var not set.\n' +
        'Download a service account key from Firebase Console and set:\n' +
        '  export GOOGLE_APPLICATION_CREDENTIALS=/path/to/key.json',
    );
    process.exit(1);
  }
  admin.initializeApp({ credential: admin.credential.applicationDefault(), projectId: PROJECT_ID });
}

const db = admin.firestore();

interface RaceDocSummary {
  docId: string;
  name: string;
  visibility: string;
  campaignId?: string;
  source?: string;
  verificationStatus?: string;
}

function summarize(doc: admin.firestore.QueryDocumentSnapshot): RaceDocSummary {
  const data = doc.data();
  return {
    docId: doc.id,
    name: typeof data.name === 'string' ? data.name : '<no name field>',
    visibility: typeof data.visibility === 'string' ? data.visibility : '<unset>',
    campaignId: typeof data.campaignId === 'string' ? data.campaignId : undefined,
    source: typeof data.source?.bookName === 'string' ? data.source.bookName : undefined,
    verificationStatus:
      typeof data.verificationStatus === 'string' ? data.verificationStatus : undefined,
  };
}

function printRow(r: RaceDocSummary): void {
  const bits = [`visibility=${r.visibility}`];
  if (r.campaignId) bits.push(`campaignId=${r.campaignId}`);
  if (r.source) bits.push(`source=${r.source}`);
  if (r.verificationStatus) bits.push(r.verificationStatus);
  console.log(`  ${r.docId.padEnd(40)} "${r.name}"  [${bits.join(', ')}]`);
}

async function confirm(question: string, expected: string): Promise<boolean> {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  const answer = await new Promise<string>((resolve) => rl.question(question, resolve));
  rl.close();
  return answer.trim() === expected;
}

async function auditRaceDocs(): Promise<void> {
  console.log(`\nAuditing 'races' collection in project: ${PROJECT_ID}`);

  const expectedIds = new Map<string, string>();
  for (const race of ALL_EXPANDED_RACES) {
    expectedIds.set(raceDocId(race.name), race.name);
  }
  console.log(`Seed data defines ${expectedIds.size} races.`);

  const snap = await db.collection('races').get();
  console.log(`Firestore holds ${snap.size} race documents.\n`);

  const orphans: RaceDocSummary[] = [];
  const homebrew: RaceDocSummary[] = [];
  const unknownVisibility: RaceDocSummary[] = [];
  const seenExpected = new Set<string>();

  for (const doc of snap.docs) {
    if (expectedIds.has(doc.id)) {
      seenExpected.add(doc.id);
      continue;
    }
    const summary = summarize(doc);
    if (summary.visibility === 'global') orphans.push(summary);
    else if (summary.visibility === '<unset>') unknownVisibility.push(summary);
    else homebrew.push(summary);
  }

  const missing = [...expectedIds.entries()].filter(([id]) => !seenExpected.has(id));

  if (homebrew.length) {
    console.log(`Campaign / private content — intentional, never deleted (${homebrew.length}):`);
    homebrew.forEach(printRow);
    console.log('');
  }

  if (unknownVisibility.length) {
    console.log(
      `No visibility field — NOT deleted, needs a human decision (${unknownVisibility.length}):`,
    );
    unknownVisibility.forEach(printRow);
    console.log('');
  }

  if (missing.length) {
    console.log(`In seed data but missing from Firestore — re-run seedRaces (${missing.length}):`);
    missing.forEach(([id, name]) => console.log(`  ${id.padEnd(40)} "${name}"`));
    console.log('');
  }

  if (!orphans.length) {
    console.log('No orphaned global race documents found.');
    return;
  }

  console.log(`ORPHANED global race documents — no seed counterpart (${orphans.length}):`);
  orphans.forEach(printRow);
  console.log('');

  if (!DELETE_MODE) {
    console.log('Report-only mode. Re-run with --delete to remove the orphans above.');
    return;
  }

  const ok = await confirm(
    `Type ${orphans.length} to delete these ${orphans.length} document(s) from ${PROJECT_ID}: `,
    String(orphans.length),
  );
  if (!ok) {
    console.log('Aborted — nothing deleted.');
    return;
  }

  const batch = db.batch();
  for (const orphan of orphans) {
    batch.delete(db.collection('races').doc(orphan.docId));
  }
  await batch.commit();
  console.log(`Deleted ${orphans.length} orphaned race document(s).`);
}

auditRaceDocs()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
