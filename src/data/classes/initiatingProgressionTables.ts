// Initiating progression tables — maneuvers known, readied, and stances known per class level
// Format: [maneuversKnown, maneuversReadied, stancesKnown] indexed 0 = level 1
//
// TODO: All values marked with a comment need verification against the physical source books.
// These are best-effort approximations from available SRD data. Treat as stubs until verified.
//
// Sources:
//   ToB — Tome of Battle: The Book of Nine Swords (Wizards of the Coast, 3.5e)
//   PoW — Path of War (Dreamscarred Press, PF1e)
//   PoWE — Path of War: Expanded (Dreamscarred Press, PF1e)

export type InitiatingProgressionTable = [
  maneuversKnown: number,
  maneuversReadied: number,
  stancesKnown: number,
][];

// ─── ToB: Crusader ───────────────────────────────────────────────────────────
// Unique: readies ALL known maneuvers. maneuversReadied always equals maneuversKnown.
// Random grant mechanic: 2 granted per round at start (rises to 3 at level 14+).
// TODO: verify exact maneuver gain schedule and stance breakpoints
export const CRUSADER_PROGRESSION: InitiatingProgressionTable = [
  [3, 3, 1], // 1
  [5, 5, 1], // 2
  [6, 6, 1], // 3
  [7, 7, 2], // 4
  [8, 8, 2], // 5
  [10, 10, 2], // 6
  [11, 11, 2], // 7
  [12, 12, 3], // 8
  [13, 13, 3], // 9
  [15, 15, 3], // 10
  [16, 16, 3], // 11
  [17, 17, 4], // 12
  [18, 18, 4], // 13
  [20, 20, 4], // 14
  [21, 21, 4], // 15
  [22, 22, 5], // 16
  [23, 23, 5], // 17
  [25, 25, 5], // 18
  [26, 26, 5], // 19
  [27, 27, 6], // 20
];

// ─── ToB: Swordsage ──────────────────────────────────────────────────────────
// More maneuvers known than other classes; gains stances faster.
// TODO: verify — Swordsage is the most knowledgeable initiator in ToB
export const SWORDSAGE_PROGRESSION: InitiatingProgressionTable = [
  [6, 4, 1], // 1
  [7, 4, 2], // 2
  [8, 5, 2], // 3
  [9, 5, 2], // 4
  [10, 5, 2], // 5
  [11, 6, 3], // 6
  [12, 6, 3], // 7
  [13, 6, 3], // 8
  [14, 7, 3], // 9
  [15, 7, 4], // 10
  [16, 7, 4], // 11
  [17, 8, 4], // 12
  [18, 8, 4], // 13
  [19, 8, 5], // 14
  [20, 9, 5], // 15
  [21, 9, 5], // 16
  [22, 9, 5], // 17
  [23, 10, 6], // 18
  [24, 10, 6], // 19
  [25, 10, 6], // 20
];

// ─── ToB: Warblade ───────────────────────────────────────────────────────────
// Standard full initiator progression. Same table reused for PoW full-BAB classes.
// TODO: verify — ToB Warblade table may differ slightly from PoW full-initiator standard
export const WARBLADE_PROGRESSION: InitiatingProgressionTable = [
  [5, 4, 1], // 1
  [6, 4, 1], // 2
  [7, 5, 1], // 3
  [8, 5, 2], // 4
  [9, 5, 2], // 5
  [10, 6, 2], // 6
  [11, 6, 2], // 7
  [12, 6, 3], // 8
  [13, 7, 3], // 9
  [14, 7, 3], // 10
  [15, 7, 4], // 11
  [16, 8, 4], // 12
  [17, 8, 4], // 13
  [18, 8, 4], // 14
  [19, 9, 5], // 15
  [20, 9, 5], // 16
  [21, 9, 5], // 17
  [22, 10, 5], // 18
  [23, 10, 6], // 19
  [24, 10, 6], // 20
];

// ─── PoW: Stalker ────────────────────────────────────────────────────────────
// 3/4 initiating progression. Used for Stalker, Harbinger, Mystic.
// TODO: verify exact PoW 3/4-initiator table
export const STALKER_PROGRESSION: InitiatingProgressionTable = [
  [4, 3, 1], // 1
  [5, 3, 1], // 2
  [6, 4, 1], // 3
  [7, 4, 2], // 4
  [8, 4, 2], // 5
  [9, 5, 2], // 6
  [10, 5, 2], // 7
  [11, 5, 3], // 8
  [12, 6, 3], // 9
  [13, 6, 3], // 10
  [14, 6, 4], // 11
  [15, 7, 4], // 12
  [16, 7, 4], // 13
  [17, 7, 4], // 14
  [18, 8, 5], // 15
  [19, 8, 5], // 16
  [20, 8, 5], // 17
  [21, 9, 5], // 18
  [22, 9, 6], // 19
  [23, 9, 6], // 20
];

// ─── PoW: Warder ─────────────────────────────────────────────────────────────
// Full initiating progression. Identical to WARBLADE_PROGRESSION for PoW.
// TODO: verify against PoW source book
export const WARDER_PROGRESSION: InitiatingProgressionTable = WARBLADE_PROGRESSION;

// ─── PoW: Warlord ────────────────────────────────────────────────────────────
// Full initiating progression. Identical to WARBLADE_PROGRESSION for PoW.
// TODO: verify against PoW source book
export const WARLORD_PROGRESSION: InitiatingProgressionTable = WARBLADE_PROGRESSION;

// ─── PoWE: Harbinger ─────────────────────────────────────────────────────────
// 3/4 initiating progression. Same table as STALKER_PROGRESSION.
// TODO: verify against PoWE source book
export const HARBINGER_PROGRESSION: InitiatingProgressionTable = STALKER_PROGRESSION;

// ─── PoWE: Mystic ────────────────────────────────────────────────────────────
// 3/4 initiating progression. Same table as STALKER_PROGRESSION.
// TODO: verify against PoWE source book
export const MYSTIC_PROGRESSION: InitiatingProgressionTable = STALKER_PROGRESSION;

// ─── PoWE: Zealot ────────────────────────────────────────────────────────────
// Full initiating progression. Same table as WARBLADE_PROGRESSION.
// TODO: verify against PoWE source book
export const ZEALOT_PROGRESSION: InitiatingProgressionTable = WARBLADE_PROGRESSION;

// ─── Martial Archetype Progressions ──────────────────────────────────────────
// Grant-initiating archetypes for non-initiating classes. These give a class
// a limited initiating suite — typically fewer maneuvers than a pure initiator.
//
// IL is typically equal to full class level; the reduced counts below reflect
// the archetype giving up significant class features to gain initiation.
//
// TODO: All values need verification against PoW / PoWE source books.
// The tables below are reasonable approximations — treat as stubs until verified.

// Standard progression for full-BAB martial archetypes (Myrmidon, Primal Disciple).
// Full-BAB classes with no spellcasting get the richer table.
export const MARTIAL_ARCHETYPE_FULL_PROGRESSION: InitiatingProgressionTable = [
  [3, 2, 1], // 1
  [4, 2, 1], // 2
  [5, 3, 1], // 3
  [6, 3, 2], // 4
  [7, 3, 2], // 5
  [8, 4, 2], // 6
  [9, 4, 2], // 7
  [10, 4, 3], // 8
  [11, 5, 3], // 9
  [12, 5, 3], // 10
  [13, 5, 3], // 11
  [14, 6, 4], // 12
  [15, 6, 4], // 13
  [16, 6, 4], // 14
  [17, 7, 4], // 15
  [18, 7, 5], // 16
  [19, 7, 5], // 17
  [20, 8, 5], // 18
  [21, 8, 5], // 19
  [22, 8, 6], // 20
];

// Standard progression for partial-BAB / hybrid martial archetypes.
// Classes that give up secondary class features (Rubato, Monk of Silver Fist,
// Knight Disciple, Ambush Hunter, Hidden Blade PoW).
export const MARTIAL_ARCHETYPE_PARTIAL_PROGRESSION: InitiatingProgressionTable = [
  [3, 2, 1], // 1
  [4, 2, 1], // 2
  [5, 3, 1], // 3
  [5, 3, 2], // 4
  [6, 3, 2], // 5
  [7, 4, 2], // 6
  [8, 4, 2], // 7
  [9, 4, 3], // 8
  [10, 5, 3], // 9
  [11, 5, 3], // 10
  [12, 5, 3], // 11
  [13, 6, 4], // 12
  [14, 6, 4], // 13
  [15, 6, 4], // 14
  [16, 7, 4], // 15
  [17, 7, 5], // 16
  [18, 7, 5], // 17
  [19, 8, 5], // 18
  [20, 8, 5], // 19
  [21, 8, 6], // 20
];

// Primal Disciple (Barbarian) — full-BAB, rage synergy, treat as full archetype
export const PRIMAL_DISCIPLE_PROGRESSION: InitiatingProgressionTable =
  MARTIAL_ARCHETYPE_FULL_PROGRESSION;

// Rubato (Bard) — 3/4 BAB, CHA initiator, bardic performance synergy
export const RUBATO_PROGRESSION: InitiatingProgressionTable =
  MARTIAL_ARCHETYPE_PARTIAL_PROGRESSION;

// Myrmidon (Fighter) — full-BAB, 4 chosen disciplines, richest archetype
export const MYRMIDON_PROGRESSION: InitiatingProgressionTable =
  MARTIAL_ARCHETYPE_FULL_PROGRESSION;

// Monk of the Silver Fist (Monk) — full-BAB (unarmed), WIS initiator
export const MONK_SILVER_FIST_PROGRESSION: InitiatingProgressionTable =
  MARTIAL_ARCHETYPE_PARTIAL_PROGRESSION;

// Knight Disciple (Paladin) — full-BAB, CHA initiator, limited by divine casting
export const KNIGHT_DISCIPLE_PROGRESSION: InitiatingProgressionTable =
  MARTIAL_ARCHETYPE_PARTIAL_PROGRESSION;

// Ambush Hunter (Ranger) — 3/4 BAB, WIS initiator, limited by ranger spells/bonus
export const AMBUSH_HUNTER_PROGRESSION: InitiatingProgressionTable =
  MARTIAL_ARCHETYPE_PARTIAL_PROGRESSION;

// Hidden Blade (Path of War) (Rogue) — 3/4 BAB, INT initiator, limited by sneak attack trade
export const HIDDEN_BLADE_POW_PROGRESSION: InitiatingProgressionTable =
  MARTIAL_ARCHETYPE_PARTIAL_PROGRESSION;

// ─── Registry ─────────────────────────────────────────────────────────────────
export const INITIATING_TABLES: Record<string, InitiatingProgressionTable> = {
  crusader: CRUSADER_PROGRESSION,
  swordsage: SWORDSAGE_PROGRESSION,
  warblade: WARBLADE_PROGRESSION,
  stalker: STALKER_PROGRESSION,
  warder: WARDER_PROGRESSION,
  warlord: WARLORD_PROGRESSION,
  harbinger: HARBINGER_PROGRESSION,
  mystic: MYSTIC_PROGRESSION,
  zealot: ZEALOT_PROGRESSION,
  // Martial archetypes (grant initiating to non-initiating classes)
  'primal-disciple': PRIMAL_DISCIPLE_PROGRESSION,
  'rubato': RUBATO_PROGRESSION,
  'myrmidon': MYRMIDON_PROGRESSION,
  'monk-silver-fist': MONK_SILVER_FIST_PROGRESSION,
  'knight-disciple': KNIGHT_DISCIPLE_PROGRESSION,
  'ambush-hunter': AMBUSH_HUNTER_PROGRESSION,
  'hidden-blade-pow': HIDDEN_BLADE_POW_PROGRESSION,
};
