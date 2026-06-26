/**
 * Regression guard for issue #244.
 *
 * Firestore collection names are case-sensitive. If a seeded game-data
 * collection has no matching `match /<name>/{...}` rule (or the rule's name
 * differs in case), every client read of that collection silently fails with
 * "Missing or insufficient permissions" — which is exactly what blocked all
 * class-choice options (cavalierorders, roguetalents, …) from populating.
 *
 * This test asserts that every collection in the canonical seed registry
 * (COLLECTIONS in scripts/db/verifySeeding.ts) has a read rule whose path
 * matches exactly. It would have failed on the camelCase rule paths that
 * caused #244.
 */
import { readFileSync } from 'fs';
import { resolve } from 'path';

// verifySeeding imports firebase-admin / dotenv at module load — stub them so
// importing the COLLECTIONS registry does not require real credentials.
jest.mock('dotenv', () => ({ config: jest.fn() }));
jest.mock('firebase-admin', () => ({
  apps: [],
  initializeApp: jest.fn(),
  credential: { applicationDefault: jest.fn() },
  firestore: jest.fn(() => ({ settings: jest.fn(), collection: jest.fn() })),
}));

import { COLLECTIONS } from '../../scripts/db/verifySeeding';

/** Top-level collection names that have an explicit `match /<name>/{...}` rule. */
function ruleCollectionNames(rules: string): Set<string> {
  const names = new Set<string>();
  const re = /match\s+\/([A-Za-z0-9_]+)\/\{/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(rules)) !== null) {
    names.add(m[1]);
  }
  return names;
}

describe('firestore.rules — seeded collections have matching read rules (#244)', () => {
  const rules = readFileSync(resolve(__dirname, '../../firestore.rules'), 'utf8');
  const ruleNames = ruleCollectionNames(rules);

  it.each(COLLECTIONS.map((c) => [c.collection, c.label] as const))(
    'grants read access to seeded collection "%s" (%s)',
    (collection) => {
      expect(ruleNames).toContain(collection);
    },
  );

  // Not part of the COLLECTIONS registry, but seeded via
  // scripts/db/seedRacialChoiceDefinitions.ts and read by the connector.
  it('grants read access to racialChoiceDefinitions', () => {
    expect(ruleNames).toContain('racialChoiceDefinitions');
  });
});
