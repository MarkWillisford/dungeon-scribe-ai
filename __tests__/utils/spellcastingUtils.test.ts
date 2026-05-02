import { getContributors, computePoolEsl } from '@/utils/spellcastingUtils';
import type { ClassEntry } from '@/types/classes';
import type { SpellcastingPool } from '@/types/spells';
import type { ExpandedClassData } from '@/data/classes/types';

function makePool(baseClassEntryId: string): SpellcastingPool {
  return {
    id: `pool-${baseClassEntryId}`,
    baseClass: 'cleric',
    baseClassEntryId,
  } as SpellcastingPool;
}

function makeClassEntry(
  overrides: Partial<ClassEntry> & { id: string; name: string; level: number },
): ClassEntry {
  return {
    spellcastingAdvancement: undefined,
    ...overrides,
  } as ClassEntry;
}

const EMPTY_MAP = new Map<string, ExpandedClassData>();

describe('getContributors', () => {
  it('base class contributes its full level', () => {
    const pool = makePool('entry-cleric');
    const cleric = makeClassEntry({ id: 'entry-cleric', name: 'Cleric', level: 7 });
    const result = getContributors([cleric], pool, EMPTY_MAP);
    expect(result).toHaveLength(1);
    expect(result[0].advancedLevels).toBe(7);
    expect(result[0].entry.id).toBe('entry-cleric');
  });

  it('base class at level 0 is excluded', () => {
    const pool = makePool('entry-cleric');
    const cleric = makeClassEntry({ id: 'entry-cleric', name: 'Cleric', level: 0 });
    const result = getContributors([cleric], pool, EMPTY_MAP);
    expect(result).toHaveLength(0);
  });

  it('class with no spellcastingAdvancement is excluded', () => {
    const pool = makePool('entry-cleric');
    const fighter = makeClassEntry({ id: 'entry-fighter', name: 'Fighter', level: 5 });
    const result = getContributors([fighter], pool, EMPTY_MAP);
    expect(result).toHaveLength(0);
  });

  it('prestige class in single mode counts matching perLevel pointers', () => {
    const pool = makePool('entry-cleric');
    const classDataMap = new Map<string, ExpandedClassData>([
      [
        'mystic theurge',
        {
          name: 'Mystic Theurge',
          advancesSpellcasting: { mode: 'both', atLevels: undefined },
        } as unknown as ExpandedClassData,
      ],
    ]);
    const mt = makeClassEntry({
      id: 'entry-mt',
      name: 'Mystic Theurge',
      level: 3,
      spellcastingAdvancement: {
        mode: 'both',
        perLevel: [
          { arcaneBaseClassEntryId: 'entry-wizard', divineBaseClassEntryId: 'entry-cleric' },
          { arcaneBaseClassEntryId: 'entry-wizard', divineBaseClassEntryId: 'entry-cleric' },
          { arcaneBaseClassEntryId: 'entry-wizard', divineBaseClassEntryId: 'entry-cleric' },
        ],
      } as ClassEntry['spellcastingAdvancement'],
    });
    const result = getContributors([mt], pool, classDataMap);
    expect(result).toHaveLength(1);
    expect(result[0].advancedLevels).toBe(3);
  });

  it('prestige class in single mode only counts levels targeting this pool', () => {
    const pool = makePool('entry-cleric');
    const classDataMap = new Map<string, ExpandedClassData>([
      [
        'eldritch knight',
        {
          name: 'Eldritch Knight',
          advancesSpellcasting: { mode: 'single' },
        } as unknown as ExpandedClassData,
      ],
    ]);
    const ek = makeClassEntry({
      id: 'entry-ek',
      name: 'Eldritch Knight',
      level: 5,
      spellcastingAdvancement: {
        mode: 'single',
        perLevel: [
          // levels 1–5; only levels 2–5 advance casting
          { baseClassEntryId: 'entry-wizard' },
          { baseClassEntryId: 'entry-wizard' },
          { baseClassEntryId: 'entry-wizard' },
          { baseClassEntryId: 'entry-wizard' },
          { baseClassEntryId: 'entry-wizard' },
        ],
      } as ClassEntry['spellcastingAdvancement'],
    });
    // pool is for cleric, so none of these match
    const result = getContributors([ek], pool, classDataMap);
    expect(result).toHaveLength(0);
  });

  it('base class and prestige class both contribute', () => {
    const pool = makePool('entry-cleric');
    const classDataMap = new Map<string, ExpandedClassData>([
      [
        'dweomerkeeper',
        {
          name: 'Dweomerkeeper',
          advancesSpellcasting: { mode: 'single' },
        } as unknown as ExpandedClassData,
      ],
    ]);
    const cleric = makeClassEntry({ id: 'entry-cleric', name: 'Cleric', level: 10 });
    const dw = makeClassEntry({
      id: 'entry-dw',
      name: 'Dweomerkeeper',
      level: 5,
      spellcastingAdvancement: {
        mode: 'single',
        perLevel: [
          { baseClassEntryId: 'entry-cleric' },
          { baseClassEntryId: 'entry-cleric' },
          { baseClassEntryId: 'entry-cleric' },
          { baseClassEntryId: 'entry-cleric' },
          { baseClassEntryId: 'entry-cleric' },
        ],
      } as ClassEntry['spellcastingAdvancement'],
    });
    const result = getContributors([cleric, dw], pool, classDataMap);
    expect(result).toHaveLength(2);
    const total = result.reduce((s, c) => s + c.advancedLevels, 0);
    expect(total).toBe(15);
  });
});

describe('computePoolEsl', () => {
  it('sums advancedLevels from all contributors', () => {
    const pool = makePool('entry-cleric');
    const classDataMap = new Map<string, ExpandedClassData>([
      [
        'dweomerkeeper',
        {
          name: 'Dweomerkeeper',
          advancesSpellcasting: { mode: 'single' },
        } as unknown as ExpandedClassData,
      ],
    ]);
    const cleric = makeClassEntry({ id: 'entry-cleric', name: 'Cleric', level: 8 });
    const dw = makeClassEntry({
      id: 'entry-dw',
      name: 'Dweomerkeeper',
      level: 2,
      spellcastingAdvancement: {
        mode: 'single',
        perLevel: [{ baseClassEntryId: 'entry-cleric' }, { baseClassEntryId: 'entry-cleric' }],
      } as ClassEntry['spellcastingAdvancement'],
    });
    expect(computePoolEsl(pool, [cleric, dw], classDataMap)).toBe(10);
  });

  it('returns 0 for a class not on the character sheet', () => {
    const pool = makePool('entry-cleric');
    const fighter = makeClassEntry({ id: 'entry-fighter', name: 'Fighter', level: 10 });
    expect(computePoolEsl(pool, [fighter], EMPTY_MAP)).toBe(0);
  });
});
