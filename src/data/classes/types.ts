// Expanded class data types for the full d20pfsrd class catalog
// This is the data-collection shape — features are stored as text descriptions.
// Mechanical effects will be handled by a separate system.

import { BABProgression, SaveProgression } from '@/types/base';
import type { Effect } from '@/types/base';
import type { RecoveryMechanics } from '@/types/initiating';
import type { ResourcePoolDefinition } from '@/types/resources';

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
  // Toggle/resource fields — populated for abilities that appear in the combat panel.
  // Snapshotted onto the character at selection time (see issue #213).
  id?: string;
  shortDescription?: string;
  activationMode?: 'passive' | 'toggle' | 'conditional';
  effects?: Effect[];
  resourcePool?: ResourcePoolDefinition;
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

export interface SpellcastingAdvancementSpec {
  // 'single' — one base caster advanced per qualifying level.
  // 'both'   — one arcane AND one divine advanced per qualifying level (Mystic Theurge).
  mode: 'single' | 'both';

  // Eligible target tradition for 'single' mode.
  //   'arcane' — only arcane base casters may be picked (Eldritch Knight, Arcane Archer)
  //   'divine' — only divine base casters may be picked (Holy Vindicator, Rage Prophet)
  //   'chosen' — either tradition is valid (Loremaster, Hathran)
  // Ignored when mode === 'both' (arcane and divine pickers are each tradition-locked).
  tradition?: 'arcane' | 'divine' | 'chosen';

  // 1-based prestige class levels at which advancement actually occurs.
  // Omit to mean "every level 1..maxLevel." Arcane Archer: [1,2,4,5,7,8,10].
  // Holy Vindicator: [2,3,4,5,6,7,8,9,10] (skips 1st).
  atLevels?: number[];
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
  // When set, this class is a prestige advancer — it does not grant its own
  // spellcasting pool; instead each of its levels listed in atLevels
  // advances another caster's pool chosen on the Classes tab.
  advancesSpellcasting?: SpellcastingAdvancementSpec;
  initiating?: InitiatingData;
  prerequisites?: PrestigePrerequisites;
  alignment?: string; // e.g., "Any non-lawful", "Lawful Good"
  source: string;
}
