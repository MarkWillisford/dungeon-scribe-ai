import { preparedSpellKey, migrateIndexKeyedCastMarks } from '@/utils/spellUtils';
import type { PreparedSpell } from '@/types/spells';

function makeSpell(
  name: string,
  className: string,
  level: number,
  domain?: string,
  prepared = 1,
): PreparedSpell {
  return {
    name,
    className,
    classLevels: { [className.toLowerCase()]: level },
    domain,
    prepared,
    cast: 0,
    school: 'Evocation',
    components: { verbal: true, somatic: true, material: false },
    castingTime: '1 standard action',
    range: 'Medium',
    target: 'one creature',
    duration: 'instantaneous',
    savingThrow: 'none',
    spellResistance: 'yes',
    description: 'test',
    source: 'Core',
  };
}

// ----------------------------------------------------------------
// preparedSpellKey
// ----------------------------------------------------------------

describe('preparedSpellKey', () => {
  it('produces a string key from name, level, className, and domain', () => {
    const spell = makeSpell('Fireball', 'wizard', 3);
    expect(preparedSpellKey(spell)).toBe('Fireball|3|wizard|');
  });

  it('includes domain when present', () => {
    const spell = makeSpell('Cure Light Wounds', 'cleric', 1, 'Healing');
    expect(preparedSpellKey(spell)).toBe('Cure Light Wounds|1|cleric|Healing');
  });

  it('uses empty string for absent domain', () => {
    const spell = makeSpell('Magic Missile', 'wizard', 1);
    expect(preparedSpellKey(spell)).toBe('Magic Missile|1|wizard|');
  });

  it('looks up level from classLevels using className (case-insensitive)', () => {
    const spell = makeSpell('Bless', 'Cleric', 1);
    // className stored as 'Cleric', classLevels key is 'cleric'
    expect(preparedSpellKey(spell)).toBe('Bless|1|Cleric|');
  });

  it('defaults level to 0 when classLevels has no matching entry', () => {
    const spell: PreparedSpell = {
      ...makeSpell('Unknown', 'wizard', 1),
      classLevels: { sorcerer: 1 }, // no wizard entry
    };
    expect(preparedSpellKey(spell)).toBe('Unknown|0|wizard|');
  });

  it('two spells with the same name but different classes produce different keys', () => {
    const a = makeSpell('Shield', 'wizard', 1);
    const b = makeSpell('Shield', 'magus', 1);
    expect(preparedSpellKey(a)).not.toBe(preparedSpellKey(b));
  });

  it('two spells with the same name, class, but different levels produce different keys', () => {
    const a = makeSpell('Summon Monster', 'wizard', 1);
    const b: PreparedSpell = {
      ...makeSpell('Summon Monster', 'wizard', 2),
      classLevels: { wizard: 2 },
    };
    expect(preparedSpellKey(a)).not.toBe(preparedSpellKey(b));
  });

  it('is stable — same spell always returns the same key regardless of array position', () => {
    const spell = makeSpell('Haste', 'wizard', 3);
    expect(preparedSpellKey(spell)).toBe(preparedSpellKey(spell));
  });
});

// ----------------------------------------------------------------
// migrateIndexKeyedCastMarks
// ----------------------------------------------------------------

describe('migrateIndexKeyedCastMarks', () => {
  const spells = [
    makeSpell('Magic Missile', 'wizard', 1), // index 0
    makeSpell('Fireball', 'wizard', 3), // index 1
    makeSpell('Mage Armor', 'wizard', 1), // index 2
  ];

  it('converts index keys to stable spell keys', () => {
    const legacy = { '0': true, '2': true };
    const result = migrateIndexKeyedCastMarks(spells, legacy);
    expect(result['Magic Missile|1|wizard|']).toBe(1);
    expect(result['Mage Armor|1|wizard|']).toBe(1);
    expect(result['Fireball|3|wizard|']).toBeUndefined();
  });

  it('converts boolean true to 1', () => {
    const result = migrateIndexKeyedCastMarks(spells, { '0': true });
    expect(result['Magic Missile|1|wizard|']).toBe(1);
  });

  it('converts boolean false to 0', () => {
    const result = migrateIndexKeyedCastMarks(spells, { '0': false });
    expect(result['Magic Missile|1|wizard|']).toBe(0);
  });

  it('preserves numeric cast counts', () => {
    const result = migrateIndexKeyedCastMarks(spells, { '1': 2 });
    expect(result['Fireball|3|wizard|']).toBe(2);
  });

  it('skips indices that are out of range', () => {
    const result = migrateIndexKeyedCastMarks(spells, { '99': true });
    expect(Object.keys(result)).toHaveLength(0);
  });

  it('returns empty object when input is empty', () => {
    expect(migrateIndexKeyedCastMarks(spells, {})).toEqual({});
  });

  it('passes through already-stable keys unchanged', () => {
    const stable = { 'Fireball|3|wizard|': 1, 'Magic Missile|1|wizard|': 0 };
    const result = migrateIndexKeyedCastMarks(spells, stable);
    expect(result['Fireball|3|wizard|']).toBe(1);
    expect(result['Magic Missile|1|wizard|']).toBe(0);
  });

  it('normalizes boolean values in stable-key data', () => {
    const stable = { 'Fireball|3|wizard|': true as unknown as number };
    const result = migrateIndexKeyedCastMarks(spells, stable);
    expect(result['Fireball|3|wizard|']).toBe(1);
  });

  it('treats data as legacy only when ALL keys are numeric', () => {
    // mixed: has both numeric and non-numeric → treated as already stable
    const mixed = { '0': 1, 'some|key': 1 };
    const result = migrateIndexKeyedCastMarks(spells, mixed);
    expect(result['0']).toBe(1);
    expect(result['some|key']).toBe(1);
  });
});
