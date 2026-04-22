// Initiating prestige classes — imports from per-class files in initiating/prestige/.
//
// Populated per plans/data-scraping/path-of-war-scraping.md Phase 5.

import type { ExpandedClassData } from './types';

import { ANIMUS_ADEPT_CLASS } from './initiating/prestige/animus-adept';
import { AWAKENED_BLADE_CLASS } from './initiating/prestige/awakened-blade';
import { BATTLE_TEMPLAR_CLASS } from './initiating/prestige/battle-templar';
import { BLADECASTER_CLASS } from './initiating/prestige/bladecaster';
import { DRAGON_FURY_CLASS } from './initiating/prestige/dragon-fury';
import { LANDSKNECHT_CLASS } from './initiating/prestige/landsknecht';
import { MAGE_HUNTER_CLASS } from './initiating/prestige/mage-hunter';
import { PHOENIX_CHAMPION_CLASS } from './initiating/prestige/phoenix-champion';
import { UMBRAL_BLADE_CLASS } from './initiating/prestige/umbral-blade';

export const INITIATING_PRESTIGE_CLASSES: ExpandedClassData[] = [
  ANIMUS_ADEPT_CLASS,
  AWAKENED_BLADE_CLASS,
  BATTLE_TEMPLAR_CLASS,
  BLADECASTER_CLASS,
  DRAGON_FURY_CLASS,
  LANDSKNECHT_CLASS,
  MAGE_HUNTER_CLASS,
  PHOENIX_CHAMPION_CLASS,
  UMBRAL_BLADE_CLASS,
];
