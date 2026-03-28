import type { FeatDefinition } from '@/types/feats';
import { FeatRegistryService } from '@/services/FeatRegistryService';

import { CORE_FEATS } from './core';
import { APG_FEATS } from './apg';
import { UCOMBAT_FEATS } from './ucombat';
import { UMAGIC_FEATS } from './umagic';
import { CORE_EXTRA_FEATS } from './core-extra';
import { APG_EXTRA_FEATS } from './apg-extra';
import { UMAGIC_EXTRA_FEATS } from './umagic-extra';
import { UCOMBAT_EXTRA_FEATS } from './ucombat-extra';
import { ACG_FEATS } from './acg';
import { ACG_EXTRA_FEATS } from './acg-extra';
import { UI_FEATS } from './ultimateIntrigue';
import { UW_FEATS } from './ultimateWilderness';
import { RACIAL_FEATS } from './racialFeats';
import { OA_FEATS } from './occultAdventures';
import { MISC_FEATS_1 } from './miscBooks1';
import { MISC_FEATS_2 } from './miscBooks2';
import { TEAMWORK_FEATS } from './teamworkFeats';
import { STYLE_FEATS } from './styleFeats';
import { STYLE_FEATS_2 } from './styleFeats2';
import { MYTHIC_FEATS } from './mythicFeats';
import { MAGIC_TACTICS_FEATS } from './magicTacticsToolbox';
import { BLOOD_OF_THE_MOON_FEATS } from './bloodOfTheMoon';
import { MYTHIC_FEATS_2 } from './mythicFeats2';
import { WMH_FEATS } from './wmhFeats';
import { AMH_FEATS } from './amhFeats';
import { HORROR_ADVENTURES_FEATS } from './horrorAdventures';
import { RTT_FEATS } from './rttFeats';
import { DTT_FEATS } from './dttFeats';
import { FAMILIAR_ALCHEMY_FEATS } from './familiarAlchemyFeats';
import { MTT_FEATS } from './mttFeats';
import { ISG_FEATS } from './isgFeats';
import { ISR_FEATS } from './isrFeats';
import { BLOOD_SERIES_FEATS } from './bloodSeriesFeats';
import { CHAMPIONS_FEATS } from './championsFeats';
import { PSO_FEATS } from './psoFeats';
import { FAITHS_FEATS } from './faithsFeats';
import { HEROES_FEATS } from './heroesFeats';
import { ARMORY_FEATS } from './armoryFeats';
import { HEALER_FEATS } from './healerFeats';
import { DRAGON_EMPIRES_FEATS } from './dragonEmpiresFeats';
import { ANTIHERO_FEATS } from './antiheroFeats';
import { HAUNTED_HEROES_FEATS } from './hauntedHeroesFeats';
import { MONSTER_HUNTER_FEATS } from './monsterHunterFeats';
import { PLANE_HOPPER_FEATS } from './planeHopperFeats';
import { PATHS_RIGHTEOUS_FEATS } from './pathsRighteousFeats';
import { DIVINE_ANTHOLOGY_FEATS } from './divineAnthologyFeats';

export { CORE_FEATS } from './core';
export { CORE_EXTRA_FEATS } from './core-extra';
export { APG_FEATS } from './apg';
export { APG_EXTRA_FEATS } from './apg-extra';
export { UCOMBAT_FEATS } from './ucombat';
export { UCOMBAT_EXTRA_FEATS } from './ucombat-extra';
export { UMAGIC_FEATS } from './umagic';
export { UMAGIC_EXTRA_FEATS } from './umagic-extra';
export { ACG_FEATS } from './acg';
export { ACG_EXTRA_FEATS } from './acg-extra';
export { UI_FEATS } from './ultimateIntrigue';
export { UW_FEATS } from './ultimateWilderness';
export { RACIAL_FEATS } from './racialFeats';
export { OA_FEATS } from './occultAdventures';
export { MISC_FEATS_1 } from './miscBooks1';
export { MISC_FEATS_2 } from './miscBooks2';
export { TEAMWORK_FEATS } from './teamworkFeats';
export { STYLE_FEATS } from './styleFeats';
export { STYLE_FEATS_2 } from './styleFeats2';
export { MYTHIC_FEATS } from './mythicFeats';
export { MAGIC_TACTICS_FEATS } from './magicTacticsToolbox';
export { BLOOD_OF_THE_MOON_FEATS } from './bloodOfTheMoon';
export { MYTHIC_FEATS_2 } from './mythicFeats2';
export { WMH_FEATS } from './wmhFeats';
export { AMH_FEATS } from './amhFeats';
export { HORROR_ADVENTURES_FEATS } from './horrorAdventures';
export { RTT_FEATS } from './rttFeats';
export { DTT_FEATS } from './dttFeats';
export { FAMILIAR_ALCHEMY_FEATS } from './familiarAlchemyFeats';
export { MTT_FEATS } from './mttFeats';
export { ISG_FEATS } from './isgFeats';
export { ISR_FEATS } from './isrFeats';
export { BLOOD_SERIES_FEATS } from './bloodSeriesFeats';
export { CHAMPIONS_FEATS } from './championsFeats';
export { PSO_FEATS } from './psoFeats';
export { FAITHS_FEATS } from './faithsFeats';
export { HEROES_FEATS } from './heroesFeats';
export { ARMORY_FEATS } from './armoryFeats';
export { HEALER_FEATS } from './healerFeats';
export { DRAGON_EMPIRES_FEATS } from './dragonEmpiresFeats';
export { ANTIHERO_FEATS } from './antiheroFeats';
export { HAUNTED_HEROES_FEATS } from './hauntedHeroesFeats';
export { MONSTER_HUNTER_FEATS } from './monsterHunterFeats';
export { PLANE_HOPPER_FEATS } from './planeHopperFeats';
export { PATHS_RIGHTEOUS_FEATS } from './pathsRighteousFeats';
export { DIVINE_ANTHOLOGY_FEATS } from './divineAnthologyFeats';

export const ALL_FEATS: FeatDefinition[] = [
  ...CORE_FEATS,
  ...CORE_EXTRA_FEATS,
  ...APG_FEATS,
  ...APG_EXTRA_FEATS,
  ...UCOMBAT_FEATS,
  ...UCOMBAT_EXTRA_FEATS,
  ...UMAGIC_FEATS,
  ...UMAGIC_EXTRA_FEATS,
  ...ACG_FEATS,
  ...ACG_EXTRA_FEATS,
  ...UI_FEATS,
  ...UW_FEATS,
  ...RACIAL_FEATS,
  ...OA_FEATS,
  ...MISC_FEATS_1,
  ...MISC_FEATS_2,
  ...TEAMWORK_FEATS,
  ...STYLE_FEATS,
  ...STYLE_FEATS_2,
  ...MYTHIC_FEATS,
  ...MAGIC_TACTICS_FEATS,
  ...BLOOD_OF_THE_MOON_FEATS,
  ...MYTHIC_FEATS_2,
  ...WMH_FEATS,
  ...AMH_FEATS,
  ...HORROR_ADVENTURES_FEATS,
  ...RTT_FEATS,
  ...DTT_FEATS,
  ...FAMILIAR_ALCHEMY_FEATS,
  ...MTT_FEATS,
  ...ISG_FEATS,
  ...ISR_FEATS,
  ...BLOOD_SERIES_FEATS,
  ...CHAMPIONS_FEATS,
  ...PSO_FEATS,
  ...FAITHS_FEATS,
  ...HEROES_FEATS,
  ...ARMORY_FEATS,
  ...HEALER_FEATS,
  ...DRAGON_EMPIRES_FEATS,
  ...ANTIHERO_FEATS,
  ...HAUNTED_HEROES_FEATS,
  ...MONSTER_HUNTER_FEATS,
  ...PLANE_HOPPER_FEATS,
  ...PATHS_RIGHTEOUS_FEATS,
  ...DIVINE_ANTHOLOGY_FEATS,
];

export function initializeFeatRegistry(): void {
  FeatRegistryService.registerBatch(ALL_FEATS);
}

export function getFeatById(id: string): FeatDefinition | undefined {
  return ALL_FEATS.find((feat) => feat.id === id);
}

export function getFeatsByType(type: string): FeatDefinition[] {
  return ALL_FEATS.filter((feat) => feat.types.includes(type as FeatDefinition['types'][number]));
}

export function getFeatsBySource(source: string): FeatDefinition[] {
  return ALL_FEATS.filter((feat) => feat.source === source);
}

export function searchFeats(query: string): FeatDefinition[] {
  const lower = query.toLowerCase();
  return ALL_FEATS.filter(
    (feat) =>
      feat.name.toLowerCase().includes(lower) ||
      feat.id.includes(lower) ||
      feat.tags?.some((tag) => tag.includes(lower)) ||
      feat.shortDescription?.toLowerCase().includes(lower),
  );
}
