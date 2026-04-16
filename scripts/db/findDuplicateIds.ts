/**
 * findDuplicateIds.ts — Find duplicate IDs in static data arrays
 *
 * Checks feats and traits for colliding IDs. When two items share an ID,
 * the seed upsert overwrites the first with the second — so the Firestore
 * count comes out lower than the static array length.
 *
 * Usage:
 *   npx tsx scripts/db/findDuplicateIds.ts
 */

import { ALL_FEATS } from '../../src/data/feats/index';
import { ALL_TRAITS } from '../../src/data/traits/index';

interface DuplicateGroup {
  id: string;
  count: number;
  names: string[];
}

function findDuplicates(items: { id: string; name: string }[], label: string): DuplicateGroup[] {
  const seen = new Map<string, string[]>();

  for (const item of items) {
    if (!seen.has(item.id)) {
      seen.set(item.id, []);
    }
    seen.get(item.id)!.push(item.name);
  }

  const dupes: DuplicateGroup[] = [];
  for (const [id, names] of seen.entries()) {
    if (names.length > 1) {
      dupes.push({ id, count: names.length, names });
    }
  }

  dupes.sort((a, b) => a.id.localeCompare(b.id));

  console.log(`\n${'─'.repeat(60)}`);
  console.log(`${label}: ${items.length} total, ${dupes.length} duplicate ID(s)`);
  console.log('─'.repeat(60));

  if (dupes.length === 0) {
    console.log('  No duplicates.');
  } else {
    for (const d of dupes) {
      console.log(`  ${d.id} (${d.count}x):`);
      for (const name of d.names) {
        console.log(`    - "${name}"`);
      }
    }
  }

  return dupes;
}

const featDupes = findDuplicates(ALL_FEATS, 'Feats');
const traitDupes = findDuplicates(ALL_TRAITS as { id: string; name: string }[], 'Traits');

console.log(`\n${'='.repeat(60)}`);
console.log('SUMMARY');
console.log('='.repeat(60));
console.log(
  `Feats:  ${featDupes.length} duplicate IDs → ${ALL_FEATS.length - featDupes.length} expected in Firestore`,
);
console.log(
  `Traits: ${traitDupes.length} duplicate IDs → ${(ALL_TRAITS as unknown[]).length - traitDupes.length} expected in Firestore`,
);
