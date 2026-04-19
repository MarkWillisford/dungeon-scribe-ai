// Expanded class data types for the full d20pfsrd class catalog
// This is the data-collection shape — features are stored as text descriptions.
// Mechanical effects will be handled by a separate system.

import { BABProgression, SaveProgression } from '@/types/base';
import type { RecoveryMechanics } from '@/types/initiating';

export type ClassCategory =
  | 'Core'
  | 'Base'
  | 'Hybrid'
  | 'Unchained'
  | 'Occult'
  | 'Alternate'
  | 'Prestige';

export interface ClassFeatureData {
  name: string;
  level: number;
  description: string;
}

export interface PrestigePrerequisites {
  bab?: number;
  skills?: { name: string; ranks: number }[];
  feats?: string[];
  spellcasting?: string; // e.g., "Ability to cast 3rd-level arcane spells"
  special?: string[]; // freeform requirements
  alignment?: string; // e.g., "Any evil"
}

// Spell progression table: spellTable[classLevel] = array of spells per spell level
// Index 0 = class level 1, index 19 = class level 20
// Each inner array: [0th, 1st, 2nd, ...] — null means no access to that spell level
export type SpellProgressionTable = (number | null)[][];

export interface SpellcastingData {
  type: 'Arcane' | 'Divine' | 'Psychic' | 'Alchemical' | 'None';
  casting: 'Prepared' | 'Spontaneous' | 'None';
  spellList?: string; // e.g., "Wizard/Sorcerer", "Cleric"
  spellTableKey?: string; // key into SPELL_TABLES (spells per day)
  spellsKnownTableKey?: string; // key into SPELLS_KNOWN_TABLES (spontaneous casters only)
  domainSlots?: boolean; // true for Cleric/Druid (+1 domain/nature slot per spell level)
}

export interface InitiatingData {
  type: 'Martial';
  initiatingAbility: 'INT' | 'WIS' | 'CHA';
  ilProgression: 'full' | 'half';
  disciplines: string[];
  progressionTableKey: string;
  recoveryMechanics: RecoveryMechanics;
}

export interface ArchetypeData {
  name: string;
  className: string; // parent class
  description: string;
  replacedFeatures: string[]; // class features removed
  modifiedFeatures: string[]; // class features altered
  newFeatures: ClassFeatureData[]; // archetype's own features
  initiating?: InitiatingData; // Archetypes that GRANT initiating to non-initiating classes
  disciplineSwaps?: {
    gained: string[];
    lost: string[];
  };
  source: string;
}

export interface ExpandedClassData {
  name: string;
  category: ClassCategory;
  maxLevel: number; // 20 for base, typically 10 for prestige
  hitDie: number;
  skillRanksPerLevel: number;
  classSkills: string[];
  babProgression: BABProgression;
  saves: {
    fortitude: SaveProgression;
    reflex: SaveProgression;
    will: SaveProgression;
  };
  weaponProficiencies: string[];
  armorProficiencies: string[];
  startingWealth?: string;
  classFeatures: ClassFeatureData[];
  spellcasting: SpellcastingData;
  initiating?: InitiatingData;
  prerequisites?: PrestigePrerequisites;
  alignment?: string; // e.g., "Any non-lawful", "Lawful Good"
  source: string;
}
