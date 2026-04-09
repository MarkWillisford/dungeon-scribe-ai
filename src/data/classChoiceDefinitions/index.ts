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
];

export const getDefinitionById = (id: string): ClassChoiceDefinition | undefined =>
  ALL_CLASS_CHOICE_DEFINITIONS.find((d) => d.id === id);

export const getDefinitionsForClass = (className: string): ClassChoiceDefinition[] =>
  ALL_CLASS_CHOICE_DEFINITIONS.filter((d) => d.className === className.toLowerCase());
