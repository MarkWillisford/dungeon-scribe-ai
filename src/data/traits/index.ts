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
