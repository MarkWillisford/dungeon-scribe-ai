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

// Prestige classes
import { ANIMUS_ADEPT_PROGRESSION } from './initiating/prestige/animus-adept';
import { AWAKENED_BLADE_PROGRESSION } from './initiating/prestige/awakened-blade';
import { BATTLE_TEMPLAR_PROGRESSION } from './initiating/prestige/battle-templar';
import { BLADECASTER_PROGRESSION } from './initiating/prestige/bladecaster';
import { DRAGON_FURY_PROGRESSION } from './initiating/prestige/dragon-fury';
import { LANDSKNECHT_PROGRESSION } from './initiating/prestige/landsknecht';
import { MAGE_HUNTER_PROGRESSION } from './initiating/prestige/mage-hunter';
import { PHOENIX_CHAMPION_PROGRESSION } from './initiating/prestige/phoenix-champion';
import { UMBRAL_BLADE_PROGRESSION } from './initiating/prestige/umbral-blade';

// Grant archetypes
import { MYRMIDON_PROGRESSION } from './archetypes/myrmidon';
import { HIDDEN_BLADE_PROGRESSION } from './archetypes/hidden-blade';
import { KNIGHT_DISCIPLE_PROGRESSION } from './archetypes/knight-disciple';
import { AMBUSH_HUNTER_PROGRESSION } from './archetypes/ambush-hunter';
import { PRIMAL_DISCIPLE_PROGRESSION } from './archetypes/primal-disciple';
import { RUBATO_PROGRESSION } from './archetypes/rubato';
import { MONK_OF_THE_SILVER_FIST_PROGRESSION } from './archetypes/monk-of-the-silver-fist';

export type InitiatingProgressionTable = [number, number, number][];

export const INITIATING_TABLES: Record<string, InitiatingProgressionTable> = {
  // Base classes
  stalker: STALKER_PROGRESSION,
  warder: WARDER_PROGRESSION,
  warlord: WARLORD_PROGRESSION,
  harbinger: HARBINGER_PROGRESSION,
  mystic: MYSTIC_PROGRESSION,
  zealot: ZEALOT_PROGRESSION,

  // Prestige classes
  'animus-adept': ANIMUS_ADEPT_PROGRESSION,
  'awakened-blade': AWAKENED_BLADE_PROGRESSION,
  'battle-templar': BATTLE_TEMPLAR_PROGRESSION,
  bladecaster: BLADECASTER_PROGRESSION,
  'dragon-fury': DRAGON_FURY_PROGRESSION,
  landsknecht: LANDSKNECHT_PROGRESSION,
  'mage-hunter': MAGE_HUNTER_PROGRESSION,
  'phoenix-champion': PHOENIX_CHAMPION_PROGRESSION,
  'umbral-blade': UMBRAL_BLADE_PROGRESSION,

  // Grant archetypes
  myrmidon: MYRMIDON_PROGRESSION,
  'hidden-blade': HIDDEN_BLADE_PROGRESSION,
  'knight-disciple': KNIGHT_DISCIPLE_PROGRESSION,
  'ambush-hunter': AMBUSH_HUNTER_PROGRESSION,
  'primal-disciple': PRIMAL_DISCIPLE_PROGRESSION,
  rubato: RUBATO_PROGRESSION,
  'monk-of-the-silver-fist': MONK_OF_THE_SILVER_FIST_PROGRESSION,
};
