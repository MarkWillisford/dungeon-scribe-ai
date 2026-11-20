import type { PreparedSpell } from '@/types/spells';

/**
 * Returns a stable string key for a prepared spell entry.
 * The key is derived from spell properties rather than array index,
 * so it survives list reordering, insertion, or deletion.
 *
 * Format: "{name}|{level}|{className}|{domain}"
 */
export function preparedSpellKey(spell: PreparedSpell): string {
  const level = spell.classLevels[spell.className.toLowerCase()] ?? 0;
  return `${spell.name}|${level}|${spell.className}|${spell.domain ?? ''}`;
}

/**
 * Migrates a legacy index-keyed cast map to the stable-key format.
 *
 * Legacy sessions stored cast marks as `{ "0": true, "1": false }` (numeric
 * string keys pointing into the prepared spells array). New sessions use
 * `preparedSpellKey(spell)` as the key and a numeric cast count as the value.
 *
 * Detection: if every key is a pure integer string the input is treated as
 * legacy. Mixed or non-numeric keys are treated as already-migrated data
 * (values are still normalised from boolean to number).
 *
 * This must be called at the app layer (Play screen / session load) where both
 * the session document and the character's prepared spells are available.
 */
export function migrateIndexKeyedCastMarks(
  preparedSpells: PreparedSpell[],
  legacy: Record<string, boolean | number>,
): Record<string, number> {
  const keys = Object.keys(legacy);
  if (keys.length === 0) return {};

  const isLegacy = keys.every((k) => /^\d+$/.test(k));

  if (!isLegacy) {
    // Already using stable keys — just ensure values are numbers
    return Object.fromEntries(
      Object.entries(legacy).map(([k, v]) => [k, typeof v === 'boolean' ? (v ? 1 : 0) : v]),
    );
  }

  const result: Record<string, number> = {};
  for (const [indexStr, castValue] of Object.entries(legacy)) {
    const index = parseInt(indexStr, 10);
    const spell = preparedSpells[index];
    if (spell) {
      const key = preparedSpellKey(spell);
      result[key] = typeof castValue === 'boolean' ? (castValue ? 1 : 0) : castValue;
    }
  }
  return result;
}
