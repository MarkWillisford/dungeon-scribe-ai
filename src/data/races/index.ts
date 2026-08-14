// SEEDING ONLY — do not use in runtime app code.
// This array seeds Firestore. All runtime reads go through GameDataService → FirestoreGameDataConnector.

// Barrel export for race data — single source of truth for all race information

export type {
  RaceCategory,
  RacePowerTier,
  RacialTraitData,
  AlternativeRacialTraitData,
  ExpandedRaceData,
  FlexibleAbilityBonus,
  FlexibleAbilityGroup,
  AbilityKey as RaceAbilityKey,
  SLAFrequency,
  SLAComponent,
  TraitDowngradeEntry,
  VariantAbilityEntry,
} from './types';
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
import { ALL_ALT_RACIAL_TRAITS } from './altRacialTraits';
import { VARIANT_SLA_TABLES } from './variantSLATables';

// Alias for backward compatibility — consumers that used CORE_RACES from the old file
export const CORE_RACES = CORE_RACES_EXPANDED;

function raceHasTrait(
  race: ExpandedRaceData,
  value: string,
  activeDowngradeKeys: Set<string>,
): boolean {
  const v = value.toLowerCase();
  if (race.racialTraits.some((t) => t.name.toLowerCase() === v)) return true;
  if (race.senses.some((s) => s.toLowerCase().includes(v))) return true;
  if (race.languages.some((l) => v.includes(l.toLowerCase()))) return true;
  if (race.type.toLowerCase() === v) return true;
  if (race.subtypes.some((s) => s.toLowerCase() === v)) return true;
  if (activeDowngradeKeys.has(value)) return true;
  return false;
}

// Attach alternative racial traits, variant ability tables, and inherited ART pools.
// Phase A: union own ARTs + ARTs inherited from parent races; own ARTs win on name collision.
// Phase B: resolve which downgrade keys are active based on racial traits the race actually has.
// Phase C: filter pool to ARTs whose `replaces` entries the race can satisfy.
function withAltTraits(race: ExpandedRaceData): ExpandedRaceData {
  // Phase A
  const ownArts = ALL_ALT_RACIAL_TRAITS[race.name] ?? [];
  const ownNames = new Set(ownArts.map((a) => a.name));
  const seenInherited = new Set<string>();
  const inheritedArts = (race.inheritsAltTraitsFrom ?? [])
    .flatMap((parentName) => ALL_ALT_RACIAL_TRAITS[parentName] ?? [])
    .filter((a) => {
      if (ownNames.has(a.name) || seenInherited.has(a.name)) return false;
      seenInherited.add(a.name);
      return true;
    });
  const candidatePool = [...ownArts, ...inheritedArts];

  // Phase B
  const activeDowngradeKeys = new Set<string>();
  for (const entry of race.traitDowngrades ?? []) {
    if (race.racialTraits.some((t) => t.name === entry.from)) {
      activeDowngradeKeys.add(entry.asCurrency);
    }
  }

  // Phase C
  const filteredArts = candidatePool.filter(
    (art) =>
      art.replaces.length === 0 ||
      art.replaces.every((r) => raceHasTrait(race, r, activeDowngradeKeys)),
  );

  const result: ExpandedRaceData = { ...race };
  if (filteredArts.length) result.alternativeRacialTraits = filteredArts;
  const variantTable = VARIANT_SLA_TABLES[race.name];
  if (variantTable) result.variantAbilityTable = variantTable;
  return result;
}

export const ALL_EXPANDED_RACES: ExpandedRaceData[] = [
  ...CORE_RACES_EXPANDED,
  ...FEATURED_RACES,
  ...UNCOMMON_RACES,
  ...STANDARD_RP_EXTRA_RACES,
  ...ADVANCED_RP_EXTRA_RACES,
  ...MONSTROUS_AND_POWERFUL_RACES,
  ...RP_UNKNOWN_RACES,
].map(withAltTraits);

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
