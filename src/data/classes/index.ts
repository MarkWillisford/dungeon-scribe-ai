// Barrel export for class data — single source of truth for all class information

export type {
  ClassCategory,
  ClassFeatureData,
  PrestigePrerequisites,
  SpellProgressionTable,
  SpellcastingData,
  ArchetypeData,
  ExpandedClassData,
} from './types';

export { CORE_CLASSES_EXPANDED } from './coreClasses';
export { BASE_CLASSES_EXPANDED } from './baseClasses';
export { HYBRID_CLASSES_EXPANDED } from './hybridClasses';
export { UNCHAINED_CLASSES_EXPANDED } from './unchainedClasses';
export { OCCULT_CLASSES_EXPANDED } from './occultClasses';
export { ALTERNATE_CLASSES_EXPANDED } from './alternateClasses';
export { PRESTIGE_CLASSES_CRB } from './prestigeClassesCRB';
export { PRESTIGE_CLASSES_APG } from './prestigeClassesAPG';
export { PRESTIGE_CLASSES_POPULAR } from './prestigeClassesPopular';
export { INITIATING_CLASSES } from './initiatingClasses';
export { INITIATING_PRESTIGE_CLASSES } from './initiatingPrestigeClasses';
export { INITIATING_TABLES } from './initiatingProgressionTables';

export {
  SPELL_TABLES,
  SPELLS_KNOWN_TABLES,
  FULL_9_PREPARED_PER_DAY,
  FULL_9_SPONTANEOUS_PER_DAY,
  SIX_LEVEL_SPONTANEOUS_PER_DAY,
  SIX_LEVEL_PREPARED_PER_DAY,
  MAGUS_PREPARED_PER_DAY,
  FOUR_LEVEL_PREPARED_PER_DAY,
  ARCANIST_PER_DAY,
  BLOODRAGER_PER_DAY,
  FULL_9_SPONTANEOUS_KNOWN,
  SIX_LEVEL_SPONTANEOUS_KNOWN,
  BLOODRAGER_KNOWN,
} from './spellProgressionTables';

import { ExpandedClassData } from './types';
import { CORE_CLASSES_EXPANDED } from './coreClasses';
import { BASE_CLASSES_EXPANDED } from './baseClasses';
import { HYBRID_CLASSES_EXPANDED } from './hybridClasses';
import { UNCHAINED_CLASSES_EXPANDED } from './unchainedClasses';
import { OCCULT_CLASSES_EXPANDED } from './occultClasses';
import { ALTERNATE_CLASSES_EXPANDED } from './alternateClasses';
import { PRESTIGE_CLASSES_CRB } from './prestigeClassesCRB';
import { PRESTIGE_CLASSES_APG } from './prestigeClassesAPG';
import { PRESTIGE_CLASSES_POPULAR } from './prestigeClassesPopular';
import { INITIATING_CLASSES } from './initiatingClasses';
import { INITIATING_PRESTIGE_CLASSES } from './initiatingPrestigeClasses';

export const ALL_EXPANDED_CLASSES: ExpandedClassData[] = [
  ...CORE_CLASSES_EXPANDED,
  ...BASE_CLASSES_EXPANDED,
  ...HYBRID_CLASSES_EXPANDED,
  ...UNCHAINED_CLASSES_EXPANDED,
  ...OCCULT_CLASSES_EXPANDED,
  ...ALTERNATE_CLASSES_EXPANDED,
  ...PRESTIGE_CLASSES_CRB,
  ...PRESTIGE_CLASSES_APG,
  ...PRESTIGE_CLASSES_POPULAR,
  ...INITIATING_CLASSES,
  ...INITIATING_PRESTIGE_CLASSES,
];

export function getClassByName(name: string): ExpandedClassData | undefined {
  return ALL_EXPANDED_CLASSES.find((cls) => cls.name === name);
}

export function getClassNames(): string[] {
  return ALL_EXPANDED_CLASSES.map((cls) => cls.name);
}

export function getClassesByCategory(category: string): ExpandedClassData[] {
  return ALL_EXPANDED_CLASSES.filter((cls) => cls.category === category);
}

export function getPrestigeClasses(): ExpandedClassData[] {
  return ALL_EXPANDED_CLASSES.filter((cls) => cls.category === 'Prestige');
}

export function getCasterClasses(): ExpandedClassData[] {
  return ALL_EXPANDED_CLASSES.filter((cls) => cls.spellcasting.type !== 'None');
}
