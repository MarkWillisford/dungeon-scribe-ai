/**
 * Per-skill max-rank rule (Pathfinder 1e).
 *
 * Ranks in any single skill cannot exceed the character's total Hit Dice, which
 * for a class-leveled PC equals their total character level. These helpers are
 * pure so the rule can be unit-tested and shared by both the skill-entry UI and
 * CharacterValidationService (single source of truth for the cap).
 */

/**
 * The maximum ranks allowed in a single skill, given the character's total
 * level / Hit Dice. Fractional or negative input is floored to a sane integer.
 */
export function getPerSkillMaxRanks(totalLevel: number): number {
  if (!Number.isFinite(totalLevel)) {
    return 0;
  }
  return Math.max(0, Math.floor(totalLevel));
}

/**
 * True when an allocation exceeds the per-skill cap.
 *
 * Returns false when `maxRanks <= 0` (no levels assigned yet), so a partially
 * built character isn't flagged before any class levels exist — matching the
 * validation rule, which only enforces the cap once total HD is known.
 */
export function exceedsPerSkillMax(ranks: number, maxRanks: number): boolean {
  return maxRanks > 0 && ranks > maxRanks;
}

/**
 * Clamp a requested rank value into the allowed range.
 *
 * Negative or non-finite requests become 0. When `maxRanks <= 0` the cap is not
 * enforced (only the non-negative floor applies), so rank entry isn't blocked
 * before class levels are assigned.
 */
export function clampSkillRanks(requested: number, maxRanks: number): number {
  if (!Number.isFinite(requested) || requested < 0) {
    return 0;
  }
  if (maxRanks > 0 && requested > maxRanks) {
    return maxRanks;
  }
  return Math.floor(requested);
}

/** A class's contribution to the skill-rank pool: its per-level ranks and how many levels. */
export interface SkillRankSource {
  /** Base skill ranks the class grants per level (before INT). */
  skillRanksPerLevel: number;
  /** Number of levels taken in the class. */
  level: number;
}

/**
 * Total skill ranks available to spend, summed across all class levels.
 *
 * Each class grants `max(1, base + INT modifier)` ranks per level (Pathfinder's
 * one-rank-per-level minimum), multiplied by its levels. Does not yet include
 * favored-class bonus ranks or other situational sources — matching
 * CharacterValidationService's total-rank check, which shares this helper.
 */
export function getTotalAvailableSkillRanks(sources: SkillRankSource[], intMod: number): number {
  const mod = Number.isFinite(intMod) ? Math.floor(intMod) : 0;
  return sources.reduce((sum, s) => {
    const base = Number.isFinite(s.skillRanksPerLevel) ? Math.floor(s.skillRanksPerLevel) : 0;
    const levels = Number.isFinite(s.level) ? Math.max(0, Math.floor(s.level)) : 0;
    return sum + Math.max(1, base + mod) * levels;
  }, 0);
}
