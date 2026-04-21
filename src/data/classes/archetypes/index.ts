// Barrel export for archetype data

import { ArchetypeData } from '../types';
import { ALCHEMIST_ARCHETYPES } from './alchemistArchetypes';
import { ANTIPALADIN_ARCHETYPES } from './antipaladinArchetypes';
import { ARCANIST_ARCHETYPES } from './arcanistArchetypes';
import { BARD_ARCHETYPES } from './bardArchetypes';
import { BLOODRAGER_ARCHETYPES } from './bloodragerArchetypes';
import { BRAWLER_ARCHETYPES } from './brawlerArchetypes';
import { CAVALIER_ARCHETYPES } from './cavalierArchetypes';
import { CLERIC_ARCHETYPES } from './clericArchetypes';
import { FIGHTER_ARCHETYPES } from './fighterArchetypes';
import { GUNSLINGER_ARCHETYPES } from './gunslingerArchetypes';
import { HUNTER_ARCHETYPES } from './hunterArchetypes';
import { INQUISITOR_ARCHETYPES } from './inquisitorArchetypes';
import { INVESTIGATOR_ARCHETYPES } from './investigatorArchetypes';
import { KINETICIST_ARCHETYPES } from './kineticistArchetypes';
import { MAGUS_ARCHETYPES } from './magusArchetypes';
import { MEDIUM_ARCHETYPES } from './mediumArchetypes';
import { MESMERIST_ARCHETYPES } from './mesmeristArchetypes';
import { NINJA_ARCHETYPES } from './ninjaArchetypes';
import { OCCULTIST_ARCHETYPES } from './occultistArchetypes';
import { ORACLE_ARCHETYPES } from './oracleArchetypes';
import { ROGUE_ARCHETYPES } from './rogueArchetypes';
import { PALADIN_ARCHETYPES } from './paladinArchetypes';
import { RANGER_ARCHETYPES } from './rangerArchetypes';
import { SAMURAI_ARCHETYPES } from './samuraiArchetypes';
import { PSYCHIC_ARCHETYPES } from './psychicArchetypes';
import { SHAMAN_ARCHETYPES } from './shamanArchetypes';
import { SKALD_ARCHETYPES } from './skaldArchetypes';
import { SPIRITUALIST_ARCHETYPES } from './spiritualistArchetypes';
import { SLAYER_ARCHETYPES } from './slayerArchetypes';
import { SORCERER_ARCHETYPES } from './sorcererArchetypes';
import { MONK_ARCHETYPES } from './monkArchetypes';
import { SUMMONER_ARCHETYPES } from './summonerArchetypes';
import { SWASHBUCKLER_ARCHETYPES } from './swashbucklerArchetypes';
import { WARPRIEST_ARCHETYPES } from './warpriestArchetypes';
import { WITCH_ARCHETYPES } from './witchArchetypes';
import { WIZARD_ARCHETYPES } from './wizardArchetypes';
import { INITIATING_ARCHETYPES } from './initiatingArchetypes';

export { ALCHEMIST_ARCHETYPES } from './alchemistArchetypes';
export { ANTIPALADIN_ARCHETYPES } from './antipaladinArchetypes';
export { ARCANIST_ARCHETYPES } from './arcanistArchetypes';
export { BARD_ARCHETYPES } from './bardArchetypes';
export { BLOODRAGER_ARCHETYPES } from './bloodragerArchetypes';
export { BRAWLER_ARCHETYPES } from './brawlerArchetypes';
export { CAVALIER_ARCHETYPES } from './cavalierArchetypes';
export { CLERIC_ARCHETYPES } from './clericArchetypes';
export { FIGHTER_ARCHETYPES } from './fighterArchetypes';
export { GUNSLINGER_ARCHETYPES } from './gunslingerArchetypes';
export { HUNTER_ARCHETYPES } from './hunterArchetypes';
export { INQUISITOR_ARCHETYPES } from './inquisitorArchetypes';
export { INVESTIGATOR_ARCHETYPES } from './investigatorArchetypes';
export { KINETICIST_ARCHETYPES } from './kineticistArchetypes';
export { MAGUS_ARCHETYPES } from './magusArchetypes';
export { MEDIUM_ARCHETYPES } from './mediumArchetypes';
export { MESMERIST_ARCHETYPES } from './mesmeristArchetypes';
export { NINJA_ARCHETYPES } from './ninjaArchetypes';
export { OCCULTIST_ARCHETYPES } from './occultistArchetypes';
export { ORACLE_ARCHETYPES } from './oracleArchetypes';
export { PALADIN_ARCHETYPES } from './paladinArchetypes';
export { ROGUE_ARCHETYPES } from './rogueArchetypes';
export { RANGER_ARCHETYPES } from './rangerArchetypes';
export { SAMURAI_ARCHETYPES } from './samuraiArchetypes';
export { PSYCHIC_ARCHETYPES } from './psychicArchetypes';
export { SHAMAN_ARCHETYPES } from './shamanArchetypes';
export { SKALD_ARCHETYPES } from './skaldArchetypes';
export { SPIRITUALIST_ARCHETYPES } from './spiritualistArchetypes';
export { SLAYER_ARCHETYPES } from './slayerArchetypes';
export { SORCERER_ARCHETYPES } from './sorcererArchetypes';
export { MONK_ARCHETYPES } from './monkArchetypes';
export { SUMMONER_ARCHETYPES } from './summonerArchetypes';
export { SWASHBUCKLER_ARCHETYPES } from './swashbucklerArchetypes';
export { WARPRIEST_ARCHETYPES } from './warpriestArchetypes';
export { WITCH_ARCHETYPES } from './witchArchetypes';
export { WIZARD_ARCHETYPES } from './wizardArchetypes';
export { INITIATING_ARCHETYPES } from './initiatingArchetypes';

export const ALL_ARCHETYPES: ArchetypeData[] = [
  ...ALCHEMIST_ARCHETYPES,
  ...ANTIPALADIN_ARCHETYPES,
  ...ARCANIST_ARCHETYPES,
  ...BARD_ARCHETYPES,
  ...BLOODRAGER_ARCHETYPES,
  ...BRAWLER_ARCHETYPES,
  ...CAVALIER_ARCHETYPES,
  ...CLERIC_ARCHETYPES,
  ...FIGHTER_ARCHETYPES,
  ...GUNSLINGER_ARCHETYPES,
  ...HUNTER_ARCHETYPES,
  ...INQUISITOR_ARCHETYPES,
  ...INVESTIGATOR_ARCHETYPES,
  ...KINETICIST_ARCHETYPES,
  ...MAGUS_ARCHETYPES,
  ...MEDIUM_ARCHETYPES,
  ...MESMERIST_ARCHETYPES,
  ...MONK_ARCHETYPES,
  ...NINJA_ARCHETYPES,
  ...OCCULTIST_ARCHETYPES,
  ...ORACLE_ARCHETYPES,
  ...PALADIN_ARCHETYPES,
  ...RANGER_ARCHETYPES,
  ...ROGUE_ARCHETYPES,
  ...SAMURAI_ARCHETYPES,
  ...PSYCHIC_ARCHETYPES,
  ...SHAMAN_ARCHETYPES,
  ...SKALD_ARCHETYPES,
  ...SPIRITUALIST_ARCHETYPES,
  ...SLAYER_ARCHETYPES,
  ...SORCERER_ARCHETYPES,
  ...SUMMONER_ARCHETYPES,
  ...SWASHBUCKLER_ARCHETYPES,
  ...WARPRIEST_ARCHETYPES,
  ...WITCH_ARCHETYPES,
  ...WIZARD_ARCHETYPES,
  ...INITIATING_ARCHETYPES,
];

export function getArchetypesByClass(className: string): ArchetypeData[] {
  return ALL_ARCHETYPES.filter((a) => a.className === className);
}

export function getArchetypeByName(
  className: string,
  archetypeName: string,
): ArchetypeData | undefined {
  return ALL_ARCHETYPES.find((a) => a.className === className && a.name === archetypeName);
}
