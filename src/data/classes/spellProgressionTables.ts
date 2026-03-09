// Shared spell progression tables — deduplicated across classes
// Each table: spellTable[classLevelIndex] = [0th, 1st, 2nd, ...]
// Index 0 = class level 1, index 19 = class level 20
// null = no access to that spell level yet

import { SpellProgressionTable } from './types';

// ─── SPELLS PER DAY ──────────────────────────────────────────────────────────

// Full 9-level prepared caster (Wizard, Cleric base, Druid base, Shaman, Witch)
// Cleric/Druid add +1 domain/nature slot per level via domainSlots flag
export const FULL_9_PREPARED_PER_DAY: SpellProgressionTable = [
  [3, 1, null, null, null, null, null, null, null, null], // 1
  [4, 2, null, null, null, null, null, null, null, null], // 2
  [4, 2, 1, null, null, null, null, null, null, null], // 3
  [4, 3, 2, null, null, null, null, null, null, null], // 4
  [4, 3, 2, 1, null, null, null, null, null, null], // 5
  [4, 3, 3, 2, null, null, null, null, null, null], // 6
  [4, 4, 3, 2, 1, null, null, null, null, null], // 7
  [4, 4, 3, 3, 2, null, null, null, null, null], // 8
  [4, 4, 4, 3, 2, 1, null, null, null, null], // 9
  [4, 4, 4, 3, 3, 2, null, null, null, null], // 10
  [4, 4, 4, 4, 3, 2, 1, null, null, null], // 11
  [4, 4, 4, 4, 3, 3, 2, null, null, null], // 12
  [4, 4, 4, 4, 4, 3, 2, 1, null, null], // 13
  [4, 4, 4, 4, 4, 3, 3, 2, null, null], // 14
  [4, 4, 4, 4, 4, 4, 3, 2, 1, null], // 15
  [4, 4, 4, 4, 4, 4, 3, 3, 2, null], // 16
  [4, 4, 4, 4, 4, 4, 4, 3, 2, 1], // 17
  [4, 4, 4, 4, 4, 4, 4, 3, 3, 2], // 18
  [4, 4, 4, 4, 4, 4, 4, 4, 3, 3], // 19
  [4, 4, 4, 4, 4, 4, 4, 4, 4, 4], // 20
];

// Full 9-level spontaneous caster spells per day (Sorcerer, Oracle)
// Note: 0th-level spells are unlimited (cantrips/orisons), shown as null
export const FULL_9_SPONTANEOUS_PER_DAY: SpellProgressionTable = [
  [null, 3, null, null, null, null, null, null, null, null], // 1
  [null, 4, null, null, null, null, null, null, null, null], // 2
  [null, 5, null, null, null, null, null, null, null, null], // 3
  [null, 6, 3, null, null, null, null, null, null, null], // 4
  [null, 6, 4, null, null, null, null, null, null, null], // 5
  [null, 6, 5, 3, null, null, null, null, null, null], // 6
  [null, 6, 6, 4, null, null, null, null, null, null], // 7
  [null, 6, 6, 5, 3, null, null, null, null, null], // 8
  [null, 6, 6, 6, 4, null, null, null, null, null], // 9
  [null, 6, 6, 6, 5, 3, null, null, null, null], // 10
  [null, 6, 6, 6, 6, 4, null, null, null, null], // 11
  [null, 6, 6, 6, 6, 5, 3, null, null, null], // 12
  [null, 6, 6, 6, 6, 6, 4, null, null, null], // 13
  [null, 6, 6, 6, 6, 6, 5, 3, null, null], // 14
  [null, 6, 6, 6, 6, 6, 6, 4, null, null], // 15
  [null, 6, 6, 6, 6, 6, 6, 5, 3, null], // 16
  [null, 6, 6, 6, 6, 6, 6, 6, 4, null], // 17
  [null, 6, 6, 6, 6, 6, 6, 6, 5, 3], // 18
  [null, 6, 6, 6, 6, 6, 6, 6, 6, 4], // 19
  [null, 6, 6, 6, 6, 6, 6, 6, 6, 6], // 20
];

// 6-level spontaneous caster spells per day (Bard, Skald)
// 0th-level cantrips are unlimited (null)
export const SIX_LEVEL_SPONTANEOUS_PER_DAY: SpellProgressionTable = [
  [null, 1, null, null, null, null, null], // 1
  [null, 2, null, null, null, null, null], // 2
  [null, 3, null, null, null, null, null], // 3
  [null, 3, 1, null, null, null, null], // 4
  [null, 4, 2, null, null, null, null], // 5
  [null, 4, 3, null, null, null, null], // 6
  [null, 4, 3, 1, null, null, null], // 7
  [null, 4, 4, 2, null, null, null], // 8
  [null, 5, 4, 3, null, null, null], // 9
  [null, 5, 4, 3, 1, null, null], // 10
  [null, 5, 4, 4, 2, null, null], // 11
  [null, 5, 5, 4, 3, null, null], // 12
  [null, 5, 5, 4, 3, 1, null], // 13
  [null, 5, 5, 4, 4, 2, null], // 14
  [null, 5, 5, 5, 4, 3, null], // 15
  [null, 5, 5, 5, 4, 3, 1], // 16
  [null, 5, 5, 5, 4, 4, 2], // 17
  [null, 5, 5, 5, 5, 4, 3], // 18
  [null, 5, 5, 5, 5, 5, 4], // 19
  [null, 5, 5, 5, 5, 5, 5], // 20
];

// 6-level prepared/extract caster spells per day (Alchemist, Magus, Inquisitor, etc.)
// No cantrips — only spell levels 1-6
export const SIX_LEVEL_PREPARED_PER_DAY: SpellProgressionTable = [
  [1, null, null, null, null, null], // 1
  [2, null, null, null, null, null], // 2
  [3, null, null, null, null, null], // 3
  [3, 1, null, null, null, null], // 4
  [4, 2, null, null, null, null], // 5
  [4, 3, null, null, null, null], // 6
  [4, 3, 1, null, null, null], // 7
  [4, 4, 2, null, null, null], // 8
  [5, 4, 3, null, null, null], // 9
  [5, 4, 3, 1, null, null], // 10
  [5, 4, 4, 2, null, null], // 11
  [5, 5, 4, 3, null, null], // 12
  [5, 5, 4, 3, 1, null], // 13
  [5, 5, 4, 4, 2, null], // 14
  [5, 5, 5, 4, 3, null], // 15
  [5, 5, 5, 4, 3, 1], // 16
  [5, 5, 5, 4, 4, 2], // 17
  [5, 5, 5, 5, 4, 3], // 18
  [5, 5, 5, 5, 5, 4], // 19
  [5, 5, 5, 5, 5, 5], // 20
];

// 6-level prepared caster with cantrips (Magus)
// Cantrips go 3,4,4,4,4,5,5,5,5,5... then 1st-6th match SIX_LEVEL_PREPARED_PER_DAY
export const MAGUS_PREPARED_PER_DAY: SpellProgressionTable = [
  [3, 1, null, null, null, null, null], // 1
  [4, 2, null, null, null, null, null], // 2
  [4, 3, null, null, null, null, null], // 3
  [4, 3, 1, null, null, null, null], // 4
  [4, 4, 2, null, null, null, null], // 5
  [5, 4, 3, null, null, null, null], // 6
  [5, 4, 3, 1, null, null, null], // 7
  [5, 4, 4, 2, null, null, null], // 8
  [5, 5, 4, 3, null, null, null], // 9
  [5, 5, 4, 3, 1, null, null], // 10
  [5, 5, 4, 4, 2, null, null], // 11
  [5, 5, 5, 4, 3, null, null], // 12
  [5, 5, 5, 4, 3, 1, null], // 13
  [5, 5, 5, 4, 4, 2, null], // 14
  [5, 5, 5, 5, 4, 3, null], // 15
  [5, 5, 5, 5, 4, 3, 1], // 16
  [5, 5, 5, 5, 4, 4, 2], // 17
  [5, 5, 5, 5, 5, 4, 3], // 18
  [5, 5, 5, 5, 5, 5, 4], // 19
  [5, 5, 5, 5, 5, 5, 5], // 20
];

// 4-level delayed prepared caster spells per day (Paladin, Ranger)
// No spells at levels 1-3, casting starts at level 4
export const FOUR_LEVEL_PREPARED_PER_DAY: SpellProgressionTable = [
  [null, null, null, null], // 1
  [null, null, null, null], // 2
  [null, null, null, null], // 3
  [0, null, null, null], // 4
  [1, null, null, null], // 5
  [1, null, null, null], // 6
  [1, 0, null, null], // 7
  [1, 1, null, null], // 8
  [2, 1, null, null], // 9
  [2, 1, 0, null], // 10
  [2, 1, 1, null], // 11
  [2, 2, 1, null], // 12
  [3, 2, 1, 0], // 13
  [3, 2, 1, 1], // 14
  [3, 2, 2, 1], // 15
  [3, 3, 2, 1], // 16
  [4, 3, 2, 1], // 17
  [4, 3, 2, 2], // 18
  [4, 3, 3, 2], // 19
  [4, 4, 3, 3], // 20
];

// Full 9-level caster with fewer slots (Arcanist)
// Cantrips are at will (null). Slots per day for 1st-9th: max 4 each.
// New spell level gained every 2 levels; each starts at 2, goes 3→4.
export const ARCANIST_PER_DAY: SpellProgressionTable = [
  [null, 2, null, null, null, null, null, null, null, null], // 1
  [null, 3, null, null, null, null, null, null, null, null], // 2
  [null, 4, null, null, null, null, null, null, null, null], // 3
  [null, 4, 2, null, null, null, null, null, null, null], // 4
  [null, 4, 3, null, null, null, null, null, null, null], // 5
  [null, 4, 4, 2, null, null, null, null, null, null], // 6
  [null, 4, 4, 3, null, null, null, null, null, null], // 7
  [null, 4, 4, 4, 2, null, null, null, null, null], // 8
  [null, 4, 4, 4, 3, null, null, null, null, null], // 9
  [null, 4, 4, 4, 4, 2, null, null, null, null], // 10
  [null, 4, 4, 4, 4, 3, null, null, null, null], // 11
  [null, 4, 4, 4, 4, 4, 2, null, null, null], // 12
  [null, 4, 4, 4, 4, 4, 3, null, null, null], // 13
  [null, 4, 4, 4, 4, 4, 4, 2, null, null], // 14
  [null, 4, 4, 4, 4, 4, 4, 3, null, null], // 15
  [null, 4, 4, 4, 4, 4, 4, 4, 2, null], // 16
  [null, 4, 4, 4, 4, 4, 4, 4, 3, null], // 17
  [null, 4, 4, 4, 4, 4, 4, 4, 4, 2], // 18
  [null, 4, 4, 4, 4, 4, 4, 4, 4, 3], // 19
  [null, 4, 4, 4, 4, 4, 4, 4, 4, 4], // 20
];

// 4-level delayed spontaneous caster (Bloodrager)
// No spells at levels 1-3; casting starts at level 4
export const BLOODRAGER_PER_DAY: SpellProgressionTable = [
  [null, null, null, null], // 1
  [null, null, null, null], // 2
  [null, null, null, null], // 3
  [1, null, null, null], // 4
  [1, null, null, null], // 5
  [1, null, null, null], // 6
  [1, 1, null, null], // 7
  [1, 1, null, null], // 8
  [2, 1, null, null], // 9
  [2, 1, 1, null], // 10
  [2, 1, 1, null], // 11
  [2, 2, 1, null], // 12
  [3, 2, 1, 1], // 13
  [3, 2, 1, 1], // 14
  [3, 2, 2, 1], // 15
  [3, 3, 2, 1], // 16
  [4, 3, 2, 1], // 17
  [4, 3, 2, 2], // 18
  [4, 3, 3, 2], // 19
  [4, 4, 3, 2], // 20
];

// ─── SPELLS KNOWN ────────────────────────────────────────────────────────────

// Full 9-level spontaneous caster spells known (Sorcerer, Oracle)
export const FULL_9_SPONTANEOUS_KNOWN: SpellProgressionTable = [
  [4, 2, null, null, null, null, null, null, null, null], // 1
  [5, 2, null, null, null, null, null, null, null, null], // 2
  [5, 3, null, null, null, null, null, null, null, null], // 3
  [6, 3, 1, null, null, null, null, null, null, null], // 4
  [6, 4, 2, null, null, null, null, null, null, null], // 5
  [7, 4, 2, 1, null, null, null, null, null, null], // 6
  [7, 5, 3, 2, null, null, null, null, null, null], // 7
  [8, 5, 3, 2, 1, null, null, null, null, null], // 8
  [8, 5, 4, 3, 2, null, null, null, null, null], // 9
  [9, 5, 4, 3, 2, 1, null, null, null, null], // 10
  [9, 5, 5, 4, 3, 2, null, null, null, null], // 11
  [9, 5, 5, 4, 3, 2, 1, null, null, null], // 12
  [9, 5, 5, 4, 4, 3, 2, null, null, null], // 13
  [9, 5, 5, 4, 4, 3, 2, 1, null, null], // 14
  [9, 5, 5, 4, 4, 4, 3, 2, null, null], // 15
  [9, 5, 5, 4, 4, 4, 3, 2, 1, null], // 16
  [9, 5, 5, 4, 4, 4, 3, 3, 2, null], // 17
  [9, 5, 5, 4, 4, 4, 3, 3, 2, 1], // 18
  [9, 5, 5, 4, 4, 4, 3, 3, 3, 2], // 19
  [9, 5, 5, 4, 4, 4, 3, 3, 3, 3], // 20
];

// 6-level spontaneous caster spells known (Bard, Skald)
export const SIX_LEVEL_SPONTANEOUS_KNOWN: SpellProgressionTable = [
  [4, 2, null, null, null, null, null], // 1
  [5, 3, null, null, null, null, null], // 2
  [6, 4, null, null, null, null, null], // 3
  [6, 4, 2, null, null, null, null], // 4
  [6, 4, 3, null, null, null, null], // 5
  [6, 4, 4, null, null, null, null], // 6
  [6, 5, 4, 2, null, null, null], // 7
  [6, 5, 4, 3, null, null, null], // 8
  [6, 5, 4, 4, null, null, null], // 9
  [6, 5, 5, 4, 2, null, null], // 10
  [6, 6, 5, 4, 3, null, null], // 11
  [6, 6, 5, 4, 4, null, null], // 12
  [6, 6, 5, 5, 4, 2, null], // 13
  [6, 6, 6, 5, 4, 3, null], // 14
  [6, 6, 6, 5, 4, 4, null], // 15
  [6, 6, 6, 5, 5, 4, 2], // 16
  [6, 6, 6, 6, 5, 4, 3], // 17
  [6, 6, 6, 6, 5, 4, 4], // 18
  [6, 6, 6, 6, 5, 5, 4], // 19
  [6, 6, 6, 6, 6, 5, 5], // 20
];

// 4-level delayed spontaneous caster spells known (Bloodrager)
export const BLOODRAGER_KNOWN: SpellProgressionTable = [
  [null, null, null, null], // 1
  [null, null, null, null], // 2
  [null, null, null, null], // 3
  [2, null, null, null], // 4
  [3, null, null, null], // 5
  [4, null, null, null], // 6
  [4, 2, null, null], // 7
  [4, 3, null, null], // 8
  [5, 4, null, null], // 9
  [5, 4, 2, null], // 10
  [5, 4, 3, null], // 11
  [6, 5, 4, null], // 12
  [6, 5, 4, 2], // 13
  [6, 5, 4, 3], // 14
  [6, 6, 5, 4], // 15
  [6, 6, 5, 4], // 16
  [6, 6, 5, 4], // 17
  [6, 6, 6, 5], // 18
  [6, 6, 6, 5], // 19
  [6, 6, 6, 5], // 20
];

// ─── TABLE REGISTRY ──────────────────────────────────────────────────────────
// Lookup maps for referencing tables by key from class entries

export const SPELL_TABLES: Record<string, SpellProgressionTable> = {
  FULL_9_PREPARED_PER_DAY,
  FULL_9_SPONTANEOUS_PER_DAY,
  SIX_LEVEL_SPONTANEOUS_PER_DAY,
  SIX_LEVEL_PREPARED_PER_DAY,
  MAGUS_PREPARED_PER_DAY,
  FOUR_LEVEL_PREPARED_PER_DAY,
  ARCANIST_PER_DAY,
  BLOODRAGER_PER_DAY,
};

export const SPELLS_KNOWN_TABLES: Record<string, SpellProgressionTable> = {
  FULL_9_SPONTANEOUS_KNOWN,
  SIX_LEVEL_SPONTANEOUS_KNOWN,
  BLOODRAGER_KNOWN,
};
