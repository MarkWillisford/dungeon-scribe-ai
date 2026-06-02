// SEEDING ONLY — do not use in runtime app code.
// This array seeds Firestore. All runtime reads go through GameDataService → FirestoreGameDataConnector.

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
import { MARTIAL_ARTS_FEATS } from './martialArtsFeats';
import { MARTIAL_ARTS_FEATS_2 } from './martialArtsFeats2';
import { MARTIAL_ARTS_FEATS_3 } from './martialArtsFeats3';
import { ADVENTURERS_GUIDE_FEATS } from './adventurersGuideFeats';
import { ADVENTURERS_GUIDE_FEATS_2 } from './adventurersGuideFeats2';
import { ADVENTURERS_GUIDE_FEATS_3 } from './adventurersGuideFeats3';
import { VILLAIN_CODEX_FEATS } from './villainCodexFeats';
import { PLANAR_ADVENTURES_FEATS } from './planarAdventuresFeats';
import { PLANAR_ADVENTURES_FEATS_2 } from './planarAdventuresFeats2';
import { WILDERNESS_ORIGINS_FEATS } from './wildernessOriginsFeats';
import { MONSTER_CODEX_FEATS } from './monsterCodexFeats';
import { MONSTER_CODEX_FEATS_2 } from './monsterCodexFeats2';
import { HEROES_FROM_FRINGE_FEATS } from './heroesFromFringeFeats';
import { ULTIMATE_CAMPAIGN_FEATS } from './ultimateCampaignFeats';
import { ISWG_FEATS } from './iswgFeats';
import { ISWG_FEATS_2 } from './iswgFeats2';
import { BLOOD_OF_BEAST_FEATS } from './bloodOfBeastFeats';
import { QUESTS_CAMPAIGNS_FEATS } from './questsCampaignsFeats';
import { HEROES_OF_GOLARION_FEATS } from './heroesOfGolarionFeats';
import { AQUATIC_ADVENTURES_FEATS } from './aquaticAdventuresFeats';
import { HEROES_HIGH_COURT_FEATS } from './heroesHighCourtFeats';
import { PATHFINDER_UNCHAINED_FEATS } from './pathfinderUnchainedFeats';
import { PEOPLE_WASTES_FEATS } from './peopleWastesFeats';
import { ELEMENTAL_MASTERS_FEATS } from './elementalMastersFeats';
import { LEGACY_FIRST_WORLD_FEATS } from './legacyFirstWorldFeats';
import { LEGACY_DRAGONS_FEATS } from './legacyDragonsFeats';
import { CHRONICLE_LEGENDS_FEATS } from './chronicleLegendsFeats';
import { MONSTER_SUMMONER_FEATS } from './monsterSummonerFeats';
import { INNER_SEA_COMBAT_FEATS } from './innerSeaCombatFeats';
import { AGENTS_EVIL_FEATS } from './agentsEvilFeats';
import { BLOOD_ANCIENTS_FEATS } from './bloodAncientFeats';
import { PSYCHIC_ANTHOLOGY_FEATS } from './psychicAnthologyFeats';
import { POTIONS_POISONS_FEATS } from './potionsPoisonsFeats';
import { KOBOLD_GOLARION_FEATS } from './koboldGolarionFeats';
import { GIANT_HUNTERS_HANDBOOK_FEATS } from './giantHunterFeats';
import { TIER3_BATCH1_FEATS } from './tier3Batch1Feats';
import { TIER3_BATCH2_FEATS } from './tier3Batch2Feats';
import { TIER3_BATCH3_FEATS } from './tier3Batch3Feats';
import { TIER3_BATCH4_FEATS } from './tier3Batch4Feats';
import { TIER3_BATCH5_FEATS } from './tier3Batch5Feats';
import { TIER3_BATCH6_FEATS } from './tier3Batch6Feats';
import { ADVANCED_CLASS_ORIGINS_FEATS } from './advancedClassOriginsFeats';
import { DRAGONSLAYER_FEATS } from './dragonslayerFeats';
import { HALFLING_GOLARION_FEATS } from './halflingGolarionFeats';
import { ANIMAL_ARCHIVE_FEATS } from './animalArchiveFeats';
import { SPYMASTER_FEATS } from './spymasterFeats';
import { BOOK_DAMNED_FEATS } from './bookDamnedFeats';
import { OCCULT_ORIGINS_FEATS } from './occultOriginsFeats';
import { CHELIAX_FEATS } from './cheliaxFeats';
import { HELLKNIGHT_FEATS } from './hellknightFeats';
import { DISTANT_REALMS_FEATS } from './distantRealmsFeats';
import { ARCANE_ANTHOLOGY_FEATS } from './arcaneAnthologyFeats';
import { GOBLIN_GOLARION_FEATS } from './goblinGolarionFeats';
import { GNOME_GOLARION_FEATS } from './gnomeGolarionFeats';
import { TECHNOLOGY_GUIDE_FEATS } from './technologyGuideFeats';
import { ORC_GOLARION_FEATS } from './orcGolarionFeats';
import { OSIRION_FEATS } from './osirionFeats';
import { AP_VOLUME_FEATS } from './apVolumeFeats';

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
export { MARTIAL_ARTS_FEATS } from './martialArtsFeats';
export { MARTIAL_ARTS_FEATS_2 } from './martialArtsFeats2';
export { MARTIAL_ARTS_FEATS_3 } from './martialArtsFeats3';
export { ADVENTURERS_GUIDE_FEATS } from './adventurersGuideFeats';
export { ADVENTURERS_GUIDE_FEATS_2 } from './adventurersGuideFeats2';
export { ADVENTURERS_GUIDE_FEATS_3 } from './adventurersGuideFeats3';
export { VILLAIN_CODEX_FEATS } from './villainCodexFeats';
export { PLANAR_ADVENTURES_FEATS } from './planarAdventuresFeats';
export { PLANAR_ADVENTURES_FEATS_2 } from './planarAdventuresFeats2';
export { WILDERNESS_ORIGINS_FEATS } from './wildernessOriginsFeats';
export { MONSTER_CODEX_FEATS } from './monsterCodexFeats';
export { MONSTER_CODEX_FEATS_2 } from './monsterCodexFeats2';
export { HEROES_FROM_FRINGE_FEATS } from './heroesFromFringeFeats';
export { ULTIMATE_CAMPAIGN_FEATS } from './ultimateCampaignFeats';
export { ISWG_FEATS } from './iswgFeats';
export { ISWG_FEATS_2 } from './iswgFeats2';
export { BLOOD_OF_BEAST_FEATS } from './bloodOfBeastFeats';
export { QUESTS_CAMPAIGNS_FEATS } from './questsCampaignsFeats';
export { HEROES_OF_GOLARION_FEATS } from './heroesOfGolarionFeats';
export { AQUATIC_ADVENTURES_FEATS } from './aquaticAdventuresFeats';
export { HEROES_HIGH_COURT_FEATS } from './heroesHighCourtFeats';
export { PATHFINDER_UNCHAINED_FEATS } from './pathfinderUnchainedFeats';
export { PEOPLE_WASTES_FEATS } from './peopleWastesFeats';
export { ELEMENTAL_MASTERS_FEATS } from './elementalMastersFeats';
export { LEGACY_FIRST_WORLD_FEATS } from './legacyFirstWorldFeats';
export { LEGACY_DRAGONS_FEATS } from './legacyDragonsFeats';
export { CHRONICLE_LEGENDS_FEATS } from './chronicleLegendsFeats';
export { MONSTER_SUMMONER_FEATS } from './monsterSummonerFeats';
export { INNER_SEA_COMBAT_FEATS } from './innerSeaCombatFeats';
export { AGENTS_EVIL_FEATS } from './agentsEvilFeats';
export { BLOOD_ANCIENTS_FEATS } from './bloodAncientFeats';
export { PSYCHIC_ANTHOLOGY_FEATS } from './psychicAnthologyFeats';
export { POTIONS_POISONS_FEATS } from './potionsPoisonsFeats';
export { KOBOLD_GOLARION_FEATS } from './koboldGolarionFeats';
export { GIANT_HUNTERS_HANDBOOK_FEATS } from './giantHunterFeats';
export { TIER3_BATCH1_FEATS } from './tier3Batch1Feats';
export { TIER3_BATCH2_FEATS } from './tier3Batch2Feats';
export { TIER3_BATCH3_FEATS } from './tier3Batch3Feats';
export { TIER3_BATCH4_FEATS } from './tier3Batch4Feats';
export { TIER3_BATCH5_FEATS } from './tier3Batch5Feats';
export { TIER3_BATCH6_FEATS } from './tier3Batch6Feats';
export { ADVANCED_CLASS_ORIGINS_FEATS } from './advancedClassOriginsFeats';
export { DRAGONSLAYER_FEATS } from './dragonslayerFeats';
export { HALFLING_GOLARION_FEATS } from './halflingGolarionFeats';
export { ANIMAL_ARCHIVE_FEATS } from './animalArchiveFeats';
export { SPYMASTER_FEATS } from './spymasterFeats';
export { BOOK_DAMNED_FEATS } from './bookDamnedFeats';
export { OCCULT_ORIGINS_FEATS } from './occultOriginsFeats';
export { CHELIAX_FEATS } from './cheliaxFeats';
export { HELLKNIGHT_FEATS } from './hellknightFeats';
export { DISTANT_REALMS_FEATS } from './distantRealmsFeats';
export { ARCANE_ANTHOLOGY_FEATS } from './arcaneAnthologyFeats';
export { GOBLIN_GOLARION_FEATS } from './goblinGolarionFeats';
export { GNOME_GOLARION_FEATS } from './gnomeGolarionFeats';
export { TECHNOLOGY_GUIDE_FEATS } from './technologyGuideFeats';
export { ORC_GOLARION_FEATS } from './orcGolarionFeats';
export { OSIRION_FEATS } from './osirionFeats';
export { AP_VOLUME_FEATS } from './apVolumeFeats';

// Path of War / Path of War: Expanded (Dreamscarred Press)
import { POW_FEATS } from './pow-feats';
import { POW_FEATS_PART2 } from './pow-feats-part2';
import { POW_FEATS_PART3 } from './pow-feats-part3';
import { POW_FEATS_PART4 } from './pow-feats-part4';
import { POW_STYLE_FEATS } from './pow-style-feats';
import { POW_STYLE_FEATS_PART2 } from './pow-style-feats-part2';
import { POW_STYLE_FEATS_PART3 } from './pow-style-feats-part3';

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
  ...MARTIAL_ARTS_FEATS,
  ...MARTIAL_ARTS_FEATS_2,
  ...MARTIAL_ARTS_FEATS_3,
  ...ADVENTURERS_GUIDE_FEATS,
  ...ADVENTURERS_GUIDE_FEATS_2,
  ...ADVENTURERS_GUIDE_FEATS_3,
  ...VILLAIN_CODEX_FEATS,
  ...PLANAR_ADVENTURES_FEATS,
  ...PLANAR_ADVENTURES_FEATS_2,
  ...WILDERNESS_ORIGINS_FEATS,
  ...MONSTER_CODEX_FEATS,
  ...MONSTER_CODEX_FEATS_2,
  ...HEROES_FROM_FRINGE_FEATS,
  ...ULTIMATE_CAMPAIGN_FEATS,
  ...ISWG_FEATS,
  ...ISWG_FEATS_2,
  ...BLOOD_OF_BEAST_FEATS,
  ...QUESTS_CAMPAIGNS_FEATS,
  ...HEROES_OF_GOLARION_FEATS,
  ...AQUATIC_ADVENTURES_FEATS,
  ...HEROES_HIGH_COURT_FEATS,
  ...PATHFINDER_UNCHAINED_FEATS,
  ...PEOPLE_WASTES_FEATS,
  ...ELEMENTAL_MASTERS_FEATS,
  ...LEGACY_FIRST_WORLD_FEATS,
  ...LEGACY_DRAGONS_FEATS,
  ...CHRONICLE_LEGENDS_FEATS,
  ...MONSTER_SUMMONER_FEATS,
  ...INNER_SEA_COMBAT_FEATS,
  ...AGENTS_EVIL_FEATS,
  ...BLOOD_ANCIENTS_FEATS,
  ...PSYCHIC_ANTHOLOGY_FEATS,
  ...POTIONS_POISONS_FEATS,
  ...KOBOLD_GOLARION_FEATS,
  ...GIANT_HUNTERS_HANDBOOK_FEATS,
  ...TIER3_BATCH1_FEATS,
  ...TIER3_BATCH2_FEATS,
  ...TIER3_BATCH3_FEATS,
  ...TIER3_BATCH4_FEATS,
  ...TIER3_BATCH5_FEATS,
  ...TIER3_BATCH6_FEATS,
  ...ADVANCED_CLASS_ORIGINS_FEATS,
  ...DRAGONSLAYER_FEATS,
  ...HALFLING_GOLARION_FEATS,
  ...ANIMAL_ARCHIVE_FEATS,
  ...SPYMASTER_FEATS,
  ...BOOK_DAMNED_FEATS,
  ...OCCULT_ORIGINS_FEATS,
  ...CHELIAX_FEATS,
  ...HELLKNIGHT_FEATS,
  ...DISTANT_REALMS_FEATS,
  ...ARCANE_ANTHOLOGY_FEATS,
  ...GOBLIN_GOLARION_FEATS,
  ...GNOME_GOLARION_FEATS,
  ...TECHNOLOGY_GUIDE_FEATS,
  ...ORC_GOLARION_FEATS,
  ...OSIRION_FEATS,
  ...AP_VOLUME_FEATS,
  // Path of War / Path of War: Expanded
  ...POW_FEATS,
  ...POW_FEATS_PART2,
  ...POW_FEATS_PART3,
  ...POW_FEATS_PART4,
  ...POW_STYLE_FEATS,
  ...POW_STYLE_FEATS_PART2,
  ...POW_STYLE_FEATS_PART3,
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
