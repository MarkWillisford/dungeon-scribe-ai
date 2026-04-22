// Initiating progression tables — one row per class level, three columns:
//   [maneuversKnown, maneuversReadied, stancesKnown]
//
// Registry keys are lowercase class names matching progressionTableKey on
// each ExpandedClassData entry (e.g. 'stalker', 'warder', 'warlord').
//
// See plans/initiating-system.md Phase 2 and plans/data-scraping/path-of-war-scraping.md.

import { STALKER_PROGRESSION } from './initiating/stalker';
import { WARDER_PROGRESSION } from './initiating/warder';
import { WARLORD_PROGRESSION } from './initiating/warlord';
import { HARBINGER_PROGRESSION } from './initiating/harbinger';
import { MYSTIC_PROGRESSION } from './initiating/mystic';
import { ZEALOT_PROGRESSION } from './initiating/zealot';

export type InitiatingProgressionTable = [number, number, number][];

export const INITIATING_TABLES: Record<string, InitiatingProgressionTable> = {
  stalker: STALKER_PROGRESSION,
  warder: WARDER_PROGRESSION,
  warlord: WARLORD_PROGRESSION,
  harbinger: HARBINGER_PROGRESSION,
  mystic: MYSTIC_PROGRESSION,
  zealot: ZEALOT_PROGRESSION,
};
