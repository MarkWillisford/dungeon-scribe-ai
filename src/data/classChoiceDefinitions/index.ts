import { ClassChoiceDefinition } from '@/types/classChoices';
import { fighterDefinitions } from './fighter';
import { clericDefinitions } from './cleric';
import { druidDefinitions } from './druid';
import { barbarianDefinitions } from './barbarian';
import { rangerDefinitions } from './ranger';
import { paladinDefinitions } from './paladin';
import { wizardDefinitions } from './wizard';
import { rogueDefinitions } from './rogue';
import { dweomerkeeperDefinitions } from './dweomerkeeper';
import { radiantServantDefinitions } from './radiantServant';
import { prestigePaladinDefinitions } from './prestigePaladin';
import { sentinelDefinitions } from './sentinel';
import { cavalierDefinitions } from './cavalier';
import { inquisitorDefinitions } from './inquisitor';
import { oracleDefinitions } from './oracle';
import { bardDefinitions } from './bard';
import { skaldDefinitions } from './skald';
import { witchDefinitions } from './witch';
import { arcanistDefinitions } from './arcanist';
import { investigatorDefinitions } from './investigator';
import { sorcererDefinitions } from './sorcerer';
import { bloodragerDefinitions } from './bloodrager';
import { ninjaDefinitions } from './ninja';
import { slayerDefinitions } from './slayer';
import { magusDefinitions } from './magus';
import { samuraiDefinitions } from './samurai';
import { brawlerDefinitions } from './brawler';
import { hunterDefinitions } from './hunter';
import { gunslingerDefinitions } from './gunslinger';
import { barbarianUnchainedDefinitions } from './barbarianUnchained';
import { rogueUnchainedDefinitions } from './rogueUnchained';
import { shamanDefinitions } from './shaman';
import { summonerDefinitions } from './summoner';
import { mesmeristDefinitions } from './mesmerist';
import { kineticistDefinitions } from './kineticist';
import { occultistDefinitions } from './occultist';
import { psychicDefinitions } from './psychic';
import { spiritualistDefinitions } from './spiritualist';
import { crusaderDefinitions, swordsageDefinitions, warbladeDefinitions } from './tob';
import { stalkerDefinitions, warderDefinitions, warlordDefinitions } from './pow';
import { harbingerDefinitions, mysticDefinitions, zealotDefinitions } from './powe';
import {
  animusAdeptDefinitions,
  awakenedBladeDefinitions,
  battleTemplarDefinitions,
  bladecasterDefinitions,
  dragonFuryDefinitions,
  landsknechtDefinitions,
  mageHunterDefinitions,
  phoenixChampionDefinitions,
  umbralBladeDefinitions,
} from './initiatingPrestige';
import {
  primalDiscipleDefinitions,
  rubatodDefinitions,
  mymidonDefinitions,
  monkSilverFistDefinitions,
  knightDiscipleDefinitions,
  ambushHunterDefinitions,
  hiddenBladePowDefinitions,
} from './initiatingArchetypes';

export {
  fighterDefinitions,
  clericDefinitions,
  druidDefinitions,
  barbarianDefinitions,
  rangerDefinitions,
  paladinDefinitions,
  wizardDefinitions,
  rogueDefinitions,
  dweomerkeeperDefinitions,
  radiantServantDefinitions,
  prestigePaladinDefinitions,
  sentinelDefinitions,
  cavalierDefinitions,
  inquisitorDefinitions,
  oracleDefinitions,
  bardDefinitions,
  skaldDefinitions,
  witchDefinitions,
  arcanistDefinitions,
  investigatorDefinitions,
  sorcererDefinitions,
  bloodragerDefinitions,
  ninjaDefinitions,
  slayerDefinitions,
  magusDefinitions,
  samuraiDefinitions,
  brawlerDefinitions,
  hunterDefinitions,
  gunslingerDefinitions,
  barbarianUnchainedDefinitions,
  rogueUnchainedDefinitions,
  shamanDefinitions,
  summonerDefinitions,
  mesmeristDefinitions,
  kineticistDefinitions,
  occultistDefinitions,
  psychicDefinitions,
  spiritualistDefinitions,
  // ToB
  crusaderDefinitions,
  swordsageDefinitions,
  warbladeDefinitions,
  // PoW
  stalkerDefinitions,
  warderDefinitions,
  warlordDefinitions,
  // PoWE
  harbingerDefinitions,
  mysticDefinitions,
  zealotDefinitions,
  // Initiating prestige classes
  animusAdeptDefinitions,
  awakenedBladeDefinitions,
  battleTemplarDefinitions,
  bladecasterDefinitions,
  dragonFuryDefinitions,
  landsknechtDefinitions,
  mageHunterDefinitions,
  phoenixChampionDefinitions,
  umbralBladeDefinitions,
  // Grant-initiating martial archetypes
  primalDiscipleDefinitions,
  rubatodDefinitions,
  mymidonDefinitions,
  monkSilverFistDefinitions,
  knightDiscipleDefinitions,
  ambushHunterDefinitions,
  hiddenBladePowDefinitions,
};

export const ALL_CLASS_CHOICE_DEFINITIONS: ClassChoiceDefinition[] = [
  ...fighterDefinitions,
  ...clericDefinitions,
  ...druidDefinitions,
  ...barbarianDefinitions,
  ...rangerDefinitions,
  ...paladinDefinitions,
  ...wizardDefinitions,
  ...rogueDefinitions,
  ...dweomerkeeperDefinitions,
  ...radiantServantDefinitions,
  ...prestigePaladinDefinitions,
  ...sentinelDefinitions,
  ...cavalierDefinitions,
  ...inquisitorDefinitions,
  ...oracleDefinitions,
  ...bardDefinitions,
  ...skaldDefinitions,
  ...witchDefinitions,
  ...arcanistDefinitions,
  ...investigatorDefinitions,
  ...sorcererDefinitions,
  ...bloodragerDefinitions,
  ...ninjaDefinitions,
  ...slayerDefinitions,
  ...magusDefinitions,
  ...samuraiDefinitions,
  ...brawlerDefinitions,
  ...hunterDefinitions,
  ...gunslingerDefinitions,
  ...barbarianUnchainedDefinitions,
  ...rogueUnchainedDefinitions,
  ...shamanDefinitions,
  ...summonerDefinitions,
  ...mesmeristDefinitions,
  ...kineticistDefinitions,
  ...occultistDefinitions,
  ...psychicDefinitions,
  ...spiritualistDefinitions,
  // Initiating system — ToB
  ...crusaderDefinitions,
  ...swordsageDefinitions,
  ...warbladeDefinitions,
  // Initiating system — PoW
  ...stalkerDefinitions,
  ...warderDefinitions,
  ...warlordDefinitions,
  // Initiating system — PoWE
  ...harbingerDefinitions,
  ...mysticDefinitions,
  ...zealotDefinitions,
  // Initiating prestige classes
  ...animusAdeptDefinitions,
  ...awakenedBladeDefinitions,
  ...battleTemplarDefinitions,
  ...bladecasterDefinitions,
  ...dragonFuryDefinitions,
  ...landsknechtDefinitions,
  ...mageHunterDefinitions,
  ...phoenixChampionDefinitions,
  ...umbralBladeDefinitions,
  // Grant-initiating martial archetypes
  ...primalDiscipleDefinitions,
  ...rubatodDefinitions,
  ...mymidonDefinitions,
  ...monkSilverFistDefinitions,
  ...knightDiscipleDefinitions,
  ...ambushHunterDefinitions,
  ...hiddenBladePowDefinitions,
];

export const getDefinitionById = (id: string): ClassChoiceDefinition | undefined =>
  ALL_CLASS_CHOICE_DEFINITIONS.find((d) => d.id === id);

export const getDefinitionsForClass = (className: string): ClassChoiceDefinition[] =>
  ALL_CLASS_CHOICE_DEFINITIONS.filter((d) => d.className === className.toLowerCase());
