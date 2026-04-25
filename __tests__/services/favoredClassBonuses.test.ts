/**
 * Structural validation for ALL_FAVORED_CLASS_BONUSES.
 *
 * Checks data integrity across every entry — unique IDs, required fields,
 * raceName/className references that resolve to known races and classes.
 * Does not load Firestore or any service — pure static data check.
 */

import { ALL_FAVORED_CLASS_BONUSES } from '@/data/favoredClassBonuses/index';
import { ALL_EXPANDED_RACES } from '@/data/races';
import { ALL_EXPANDED_CLASSES } from '@/data/classes/index';

const KNOWN_RACE_NAMES = new Set(ALL_EXPANDED_RACES.map((r) => r.name));
const KNOWN_CLASS_NAMES = new Set(ALL_EXPANDED_CLASSES.map((c) => c.name));

describe('ALL_FAVORED_CLASS_BONUSES — structural integrity', () => {
  test('has entries', () => {
    expect(ALL_FAVORED_CLASS_BONUSES.length).toBeGreaterThan(0);
  });

  test('all doc IDs are unique', () => {
    const ids = ALL_FAVORED_CLASS_BONUSES.map((e) => e.id);
    const unique = new Set(ids);
    const duplicates = ids.filter((id, idx) => ids.indexOf(id) !== idx);
    expect(duplicates).toEqual([]);
    expect(unique.size).toBe(ids.length);
  });

  test('every entry has non-empty id', () => {
    const bad = ALL_FAVORED_CLASS_BONUSES.filter((e) => !e.id || e.id.trim() === '');
    expect(bad).toEqual([]);
  });

  test('every entry has non-empty raceName', () => {
    const bad = ALL_FAVORED_CLASS_BONUSES.filter((e) => !e.raceName || e.raceName.trim() === '');
    expect(bad).toEqual([]);
  });

  test('every entry has non-empty className', () => {
    const bad = ALL_FAVORED_CLASS_BONUSES.filter((e) => !e.className || e.className.trim() === '');
    expect(bad).toEqual([]);
  });

  test('every entry has non-empty description', () => {
    const bad = ALL_FAVORED_CLASS_BONUSES.filter(
      (e) => !e.description || e.description.trim() === '',
    );
    expect(bad).toEqual([]);
  });

  test('every entry has non-empty shortName', () => {
    const bad = ALL_FAVORED_CLASS_BONUSES.filter((e) => !e.shortName || e.shortName.trim() === '');
    expect(bad).toEqual([]);
  });

  test('every entry has isOfficial: true', () => {
    const bad = ALL_FAVORED_CLASS_BONUSES.filter((e) => e.isOfficial !== true);
    expect(bad.map((e) => e.id)).toEqual([]);
  });

  test("every entry has visibility: 'global'", () => {
    const bad = ALL_FAVORED_CLASS_BONUSES.filter((e) => e.visibility !== 'global');
    expect(bad.map((e) => e.id)).toEqual([]);
  });

  test('every raceName resolves to a known race in ALL_EXPANDED_RACES', () => {
    const unknown = ALL_FAVORED_CLASS_BONUSES.filter((e) => !KNOWN_RACE_NAMES.has(e.raceName));
    expect(unknown.map((e) => `${e.id} → "${e.raceName}"`)).toEqual([]);
  });

  test('every className resolves to a known class in ALL_EXPANDED_CLASSES', () => {
    const unknown = ALL_FAVORED_CLASS_BONUSES.filter((e) => !KNOWN_CLASS_NAMES.has(e.className));
    expect(unknown.map((e) => `${e.id} → "${e.className}"`)).toEqual([]);
  });

  test('every entry has a mechanicalEffect with a valid type', () => {
    const VALID_TYPES = new Set([
      'bonus',
      'natural_armor',
      'damage_reduction',
      'resource_pool',
      'class_level_bump',
      'feature_uses_per_day',
      'arcane_spell_failure_reduction',
      'weapon_proficiency_chip',
      'firearm_misfire_reduction',
      'caster_level',
      'crafting_speedup',
      'hardness_reduction_on_strike',
      'feature_numeric_bump',
      'learn_option',
      'compound',
      'unmapped',
    ]);
    const bad = ALL_FAVORED_CLASS_BONUSES.filter(
      (e) => !e.mechanicalEffect || !VALID_TYPES.has(e.mechanicalEffect.type),
    );
    expect(bad.map((e) => e.id)).toEqual([]);
  });
});
