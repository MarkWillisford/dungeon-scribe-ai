import type { EffectsStatus } from '@/data/classes/types';

/**
 * Patterns in a class feature description that indicate the feature grants a
 * numeric bonus that belongs in the modifier pipeline. A feature matching any
 * of these is classified 'unmodelled' when its effects[] array is empty.
 *
 * The heuristic targets explicit numeric bonus language common in PF1e text:
 *   "+2 bonus to AC", "gains a +1 morale bonus", "you gain a +X bonus equal
 *   to your Wisdom modifier", "adds your Charisma modifier", etc.
 * It intentionally avoids prose that is purely narrative ("you can speak with
 * animals") or structural (spell lists, action costs).
 */
const NUMERIC_BONUS_PATTERNS: RegExp[] = [
  // Explicit +N adjacent to a PF1e bonus type keyword
  /\+\d+\s+(?:alchemical|armor|circumstance|competence|deflection|dodge|enhancement|inherent|insight|luck|morale|natural|profane|racial|resistance|sacred|shield|size|trait|untyped|competence)\s+bonus/i,
  // Generic "+N bonus to" or "grants a +N"
  /(?:gain(?:s)?|grant(?:s)?|provide(?:s)?|receive(?:s)?|add(?:s)?)\s+(?:a\s+)?(?:[\+\-])?\d+/i,
  // "+N to [stat-like word]"
  /\+\d+\s+to\s+(?:your\s+)?(?:AC|attack|damage|saves?|initiative|CMB|CMD|skill|check|roll|hit\s+points?|speed|fly\s+speed|swim\s+speed|climb\s+speed)/i,
  // "bonus equal to your [ability] modifier" (adds variable numeric value)
  /bonus\s+equal\s+to\s+(?:your|their|his|her|the)\s+/i,
  // "adds your [ability] modifier to" or "plus your [ability] modifier"
  /(?:adds?|plus)\s+(?:your|their|his|her)\s+\w+\s+modifier/i,
  // "increases [stat] by N" or "increases your [stat]"
  /increases?\s+(?:your\s+|the\s+|by\s+\d)/i,
  // Bare "+N" followed immediately by a stat or save name
  /\+\d+\s+(?:on\s+)?(?:Fortitude|Reflex|Will|fort|ref|will|perception|bluff|diplomacy|intimidate|stealth)\s+(?:saves?|checks?)?/i,
];

/**
 * Classify a class feature based on its description and existing effects array.
 *
 * Rules (in priority order):
 *   1. effects[] is non-empty → 'modelled'
 *   2. description matches any NUMERIC_BONUS_PATTERNS → 'unmodelled'
 *   3. otherwise → 'none'
 */
export function classifyEffectsStatus(description: string, effectsLength: number): EffectsStatus {
  if (effectsLength > 0) return 'modelled';
  for (const pattern of NUMERIC_BONUS_PATTERNS) {
    if (pattern.test(description)) return 'unmodelled';
  }
  return 'none';
}
