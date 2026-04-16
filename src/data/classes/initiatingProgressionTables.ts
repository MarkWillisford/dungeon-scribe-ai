// Initiating progression tables — one row per class level, three columns:
//   [maneuversKnown, maneuversReadied, stancesKnown]
//
// Populated per-class as Phase 4 (base classes) and Phase 5 (prestige classes)
// land. Registry keys follow the <CLASSNAME>_PROGRESSION convention.
//
// See plans/initiating-system.md Phase 2 and plans/data-scraping/path-of-war-scraping.md.

export type InitiatingProgressionTable = [number, number, number][];

export const INITIATING_TABLES: Record<string, InitiatingProgressionTable> = {
  // Populated by Phase 4/5 scraping:
  //   STALKER_PROGRESSION, WARDER_PROGRESSION, WARLORD_PROGRESSION,
  //   HARBINGER_PROGRESSION, MYSTIC_PROGRESSION, ZEALOT_PROGRESSION,
  //   CRUSADER_PROGRESSION, SWORDSAGE_PROGRESSION, WARBLADE_PROGRESSION,
  //   and per-archetype tables (e.g. MYRMIDON_PROGRESSION).
};
