jest.mock('dotenv', () => ({ config: jest.fn() }));

import { raceDocId } from '../../scripts/db/seedUtils';
import { ALL_EXPANDED_RACES } from '@/data/races/index';

describe('raceDocId', () => {
  it('lowercases and hyphenates', () => {
    expect(raceDocId('Elven Noble')).toBe('elven-noble');
    expect(raceDocId('Half-Orc')).toBe('half-orc');
  });

  it('collapses runs of non-alphanumeric characters into a single hyphen', () => {
    expect(raceDocId('Elven  Noble')).toBe('elven-noble');
  });

  it('trims leading and trailing hyphens', () => {
    expect(raceDocId(' Elven Noble ')).toBe('elven-noble');
  });

  // Issue #267: the duplicate race entry in the picker.
  it('derives a different id for a renamed race, which is how orphans appear', () => {
    // seedRaces only upserts — it never deletes. A race seeded under one name
    // and later renamed leaves its original document behind, and both then show
    // up in the picker.
    expect(raceDocId('Elven Noble with Aasimar Blood')).toBe('elven-noble-with-aasimar-blood');
    expect(raceDocId('Elven Noble with Aasimar Blood')).not.toBe(raceDocId('Elven Noble'));
  });

  it('produces a unique id for every seeded race', () => {
    const ids = ALL_EXPANDED_RACES.map((r) => raceDocId(r.name));
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('produces a non-empty id for every seeded race', () => {
    for (const race of ALL_EXPANDED_RACES) {
      expect(raceDocId(race.name).length).toBeGreaterThan(0);
    }
  });

  it('does not derive an id matching the reported duplicate', () => {
    // Guards the diagnosis: nothing in seed data produces the orphan doc, so
    // editing src/data/races/ cannot fix #267.
    const ids = ALL_EXPANDED_RACES.map((r) => raceDocId(r.name));
    expect(ids).not.toContain('elven-noble-with-aasimar-blood');
    expect(ids).toContain('elven-noble');
  });
});
