// SEEDING ONLY — do not use in runtime app code.
// This array seeds Firestore. All runtime reads go through GameDataService → FirestoreGameDataConnector.

// Barrel export for race data — single source of truth for all race information

export type { RaceCategory, RacePowerTier, RacialTraitData, ExpandedRaceData, FlexibleAbilityBonus, FlexibleAbilityGroup, AbilityKey as RaceAbilityKey } from './types';
export { CORE_RACES_EXPANDED } from './coreRaces';
export { FEATURED_RACES } from './featuredRaces';
export { UNCOMMON_RACES } from './uncommonRaces';
export {
  STANDARD_RP_EXTRA_RACES,
  ADVANCED_RP_EXTRA_RACES,
  MONSTROUS_AND_POWERFUL_RACES,
  RP_UNKNOWN_RACES,
} from './extendedRaces';

import { ExpandedRaceData } from './types';
import { CORE_RACES_EXPANDED } from './coreRaces';
import { FEATURED_RACES } from './featuredRaces';
import { UNCOMMON_RACES } from './uncommonRaces';
import {
  STANDARD_RP_EXTRA_RACES,
  ADVANCED_RP_EXTRA_RACES,
  MONSTROUS_AND_POWERFUL_RACES,
  RP_UNKNOWN_RACES,
} from './extendedRaces';

// Alias for backward compatibility — consumers that used CORE_RACES from the old file
export const CORE_RACES = CORE_RACES_EXPANDED;

export const ALL_EXPANDED_RACES: ExpandedRaceData[] = [
  ...CORE_RACES_EXPANDED,
  ...FEATURED_RACES,
  ...UNCOMMON_RACES,
  ...STANDARD_RP_EXTRA_RACES,
  ...ADVANCED_RP_EXTRA_RACES,
  ...MONSTROUS_AND_POWERFUL_RACES,
  ...RP_UNKNOWN_RACES,
];

// Races with player-chosen ability bonuses (determined by flexibleAbilityBonuses field)
export const FLEXIBLE_ABILITY_RACES: string[] = ALL_EXPANDED_RACES.filter(
  (r) => r.flexibleAbilityBonuses && r.flexibleAbilityBonuses.length > 0,
).map((r) => r.name);

export function getRaceByName(name: string): ExpandedRaceData | undefined {
  return ALL_EXPANDED_RACES.find((race) => race.name === name);
}

export function getRaceNames(): string[] {
  return ALL_EXPANDED_RACES.map((race) => race.name);
}

export function getRacesByCategory(category: string): ExpandedRaceData[] {
  return ALL_EXPANDED_RACES.filter((race) => race.category === category);
}

export function getRacesByPowerTier(powerTier: string): ExpandedRaceData[] {
  return ALL_EXPANDED_RACES.filter((race) => race.powerTier === powerTier);
}
