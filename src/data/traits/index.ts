// SEEDING ONLY — do not use in runtime app code.
// This array seeds Firestore. All runtime reads go through GameDataService → FirestoreGameDataConnector.

import type { TraitDefinition, TraitCategory } from '@/types/traits';

import { APG_TRAITS } from './core';
import { UC_TRAITS } from './ultimateCampaign';
import { UC_EXTRA_TRAITS } from './ucTraits-extra';
import { ARG_TRAITS } from './advancedRace';
import { FAITH_TRAITS } from './faiths';
import { RELIGION_EXTRA_TRAITS } from './religionTraits';
import { APG_EXTRA_TRAITS } from './apgTraits-extra';
import { ARG_EXTRA_RACE_TRAITS } from './argRaceTraits';
import { ARG_EXTRA_RACE_TRAITS_2 } from './argRaceTraits2';
import { INNER_SEA_TRAITS } from './innerSea';
import { MISC_TRAITS } from './miscTraits';
import { RELIGION_TRAITS_2 } from './religionTraits2';
import { PEOPLE_NORTH_RIVER_TRAITS } from './peopleNorthRiverTraits';
import { BLOOD_MOON_SHADOWS_BEAST_TRAITS } from './bloodMoonShadowsBeastTraits';
import { INNER_SEA_PRIMER_TRAITS } from './innerSeaPrimerTraits';
import { BLOOD_ANGELS_TRAITS, BLOOD_FIENDS_TRAITS } from './bloodAngelsFiendsTraits';
import { DRAGON_EMPIRES_PRIMER_TRAITS } from './dragonEmpiresTraits';
import { DRAGON_EMPIRES_PRIMER_TRAITS_2 } from './dragonEmpiresTraits2';
import { HUMANS_GOLARION_TRAITS } from './humansGolarionTraits';
import { HELLS_REBELS_TRAITS } from './hellsRebelsTraits';
import { COUNCIL_OF_THIEVES_TRAITS } from './councilThievesTraits';
import { JADE_REGENT_TRAITS } from './jadeRegentTraits';
import { REIGN_OF_WINTER_TRAITS } from './reignWinterTraits';
import { MUMMYS_MASK_TRAITS } from './mummysMaskTraits';
import { IRON_GODS_TRAITS } from './ironGodsTraits';
import { SHATTERED_STAR_TRAITS } from './shatteredStarTraits';
import { SERPENTS_SKULL_TRAITS } from './serpentSkullTraits';
import { HELLS_VENGEANCE_TRAITS } from './hellsVengeanceTraits';
import { GIANTSLAYER_TRAITS } from './giantslayerTraits';
import { ISG_RELIGION_TRAITS } from './isgReligionTraits';
import { ISG_RELIGION_TRAITS_2 } from './isgReligionTraits2';
import { FAITHS_GOLARION_TRAITS } from './faithsGolarionTraits';
import { PATHS_RIGHTEOUS_TRAITS } from './pathsRighteousTraits';
import { ADV_ARMORY_SOCIETY_TRAITS } from './advArmorySocietyTraits';
import { UC_DRAWBACK_TRAITS } from './ucDrawbackTraits';
import { PATH_OF_WAR_TRAITS } from './pathOfWar';

export { APG_TRAITS } from './core';
export { UC_TRAITS } from './ultimateCampaign';
export { UC_EXTRA_TRAITS } from './ucTraits-extra';
export { ARG_TRAITS } from './advancedRace';
export { FAITH_TRAITS } from './faiths';
export { RELIGION_EXTRA_TRAITS } from './religionTraits';
export { APG_EXTRA_TRAITS } from './apgTraits-extra';
export { ARG_EXTRA_RACE_TRAITS } from './argRaceTraits';
export { ARG_EXTRA_RACE_TRAITS_2 } from './argRaceTraits2';
export { INNER_SEA_TRAITS } from './innerSea';
export { MISC_TRAITS } from './miscTraits';
export { RELIGION_TRAITS_2 } from './religionTraits2';
export { PEOPLE_NORTH_RIVER_TRAITS } from './peopleNorthRiverTraits';
export { BLOOD_MOON_SHADOWS_BEAST_TRAITS } from './bloodMoonShadowsBeastTraits';
export { INNER_SEA_PRIMER_TRAITS } from './innerSeaPrimerTraits';
export { BLOOD_ANGELS_TRAITS, BLOOD_FIENDS_TRAITS } from './bloodAngelsFiendsTraits';
export { DRAGON_EMPIRES_PRIMER_TRAITS } from './dragonEmpiresTraits';
export { DRAGON_EMPIRES_PRIMER_TRAITS_2 } from './dragonEmpiresTraits2';
export { HUMANS_GOLARION_TRAITS } from './humansGolarionTraits';
export { HELLS_REBELS_TRAITS } from './hellsRebelsTraits';
export { COUNCIL_OF_THIEVES_TRAITS } from './councilThievesTraits';
export { JADE_REGENT_TRAITS } from './jadeRegentTraits';
export { REIGN_OF_WINTER_TRAITS } from './reignWinterTraits';
export { MUMMYS_MASK_TRAITS } from './mummysMaskTraits';
export { IRON_GODS_TRAITS } from './ironGodsTraits';
export { SHATTERED_STAR_TRAITS } from './shatteredStarTraits';
export { SERPENTS_SKULL_TRAITS } from './serpentSkullTraits';
export { HELLS_VENGEANCE_TRAITS } from './hellsVengeanceTraits';
export { GIANTSLAYER_TRAITS } from './giantslayerTraits';
export { ISG_RELIGION_TRAITS } from './isgReligionTraits';
export { ISG_RELIGION_TRAITS_2 } from './isgReligionTraits2';
export { FAITHS_GOLARION_TRAITS } from './faithsGolarionTraits';
export { PATHS_RIGHTEOUS_TRAITS } from './pathsRighteousTraits';
export { ADV_ARMORY_SOCIETY_TRAITS } from './advArmorySocietyTraits';
export { UC_DRAWBACK_TRAITS } from './ucDrawbackTraits';
export { PATH_OF_WAR_TRAITS } from './pathOfWar';

export const ALL_TRAITS: TraitDefinition[] = [
  ...APG_TRAITS,
  ...APG_EXTRA_TRAITS,
  ...UC_TRAITS,
  ...UC_EXTRA_TRAITS,
  ...ARG_TRAITS,
  ...ARG_EXTRA_RACE_TRAITS,
  ...ARG_EXTRA_RACE_TRAITS_2,
  ...FAITH_TRAITS,
  ...RELIGION_EXTRA_TRAITS,
  ...RELIGION_TRAITS_2,
  ...INNER_SEA_TRAITS,
  ...MISC_TRAITS,
  ...PEOPLE_NORTH_RIVER_TRAITS,
  ...BLOOD_MOON_SHADOWS_BEAST_TRAITS,
  ...INNER_SEA_PRIMER_TRAITS,
  ...BLOOD_ANGELS_TRAITS,
  ...BLOOD_FIENDS_TRAITS,
  ...DRAGON_EMPIRES_PRIMER_TRAITS,
  ...DRAGON_EMPIRES_PRIMER_TRAITS_2,
  ...HUMANS_GOLARION_TRAITS,
  ...HELLS_REBELS_TRAITS,
  ...COUNCIL_OF_THIEVES_TRAITS,
  ...JADE_REGENT_TRAITS,
  ...REIGN_OF_WINTER_TRAITS,
  ...MUMMYS_MASK_TRAITS,
  ...IRON_GODS_TRAITS,
  ...SHATTERED_STAR_TRAITS,
  ...SERPENTS_SKULL_TRAITS,
  ...HELLS_VENGEANCE_TRAITS,
  ...GIANTSLAYER_TRAITS,
  ...ISG_RELIGION_TRAITS,
  ...ISG_RELIGION_TRAITS_2,
  ...FAITHS_GOLARION_TRAITS,
  ...PATHS_RIGHTEOUS_TRAITS,
  ...ADV_ARMORY_SOCIETY_TRAITS,
  ...UC_DRAWBACK_TRAITS,
  ...PATH_OF_WAR_TRAITS,
];

export function getTraitById(id: string): TraitDefinition | undefined {
  return ALL_TRAITS.find((trait) => trait.id === id);
}

export function getTraitsByCategory(category: TraitCategory): TraitDefinition[] {
  return ALL_TRAITS.filter((trait) => trait.category === category);
}

export function getTraitsBySource(source: string): TraitDefinition[] {
  return ALL_TRAITS.filter((trait) => trait.source === source);
}

export function searchTraits(query: string): TraitDefinition[] {
  const lower = query.toLowerCase();
  return ALL_TRAITS.filter(
    (trait) =>
      trait.name.toLowerCase().includes(lower) ||
      trait.id.includes(lower) ||
      trait.tags?.some((tag) => tag.includes(lower)) ||
      trait.shortDescription?.toLowerCase().includes(lower),
  );
}
