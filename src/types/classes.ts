import { BABProgression, SaveProgression, Effect } from './base';
import { FeatPrerequisite } from './feats';
import type { SpellcastingAdvancement } from './spells';
import type { BroodmasterState } from './eidolon';
import type { ResourcePoolDefinition } from './resources';

export type FavoredClassBonusSelection =
  | { level: number; type: 'hp' }
  | { level: number; type: 'skill' }
  | { level: number; type: 'alternate'; optionId: string };

export interface CharacterClasses {
  classes: ClassEntry[];
  totalLevel: number;
  baseAttackBonus: number[];
  baseFortSave: number;
  baseRefSave: number;
  baseWillSave: number;
  favoredClassBonuses: FavoredClassBonus[];
  /** Class entry IDs in character-level order (index 0 = character level 1). Absent until the user opens the level progression editor. */
  levelOrder?: string[];
}

export interface ClassEntry {
  name: string;
  archetype?: string[];
  level: number;
  hitDieSize: number; // d6, d8, d10, etc.
  hitDieResults: number[];
  skillRanks: number; // Skill ranks per level
  classSkills: string[];
  babProgression: BABProgression;
  fortProgression: SaveProgression;
  refProgression: SaveProgression;
  willProgression: SaveProgression;
  classFeatures: ClassFeature[];

  // Level-by-level selections (domains, talents, favored enemies, rage powers, etc.)
  classChoices?: ClassChoice[];

  // For prestige/advancement classes: advances an existing initiating pool
  initiatingAdvancement?: {
    type: 'full' | 'half' | 'chosen';
    chosenPool?: string;
  };

  // Prestige class entry requirements (point-in-time validated)
  prerequisites?: FeatPrerequisite[];

  // Custom / ported class metadata
  sourceSystem?: 'pf1e' | '3.5e' | 'homebrew' | 'campaign';
  isCustom?: boolean;
  sourceNotes?: string; // e.g. "Ported from Complete Divine p.52, modified for Milani"

  // Editor metadata — not used by the game engine
  id?: string; // stable local UUID for React keys and action targeting
  prereqOverride?: boolean; // DM override — suppress prereq warnings for this class
  isFavoredClass?: boolean;
  splitGroup?: string; // Shared UUID linking sibling cards that represent one class taken in multiple runs
  spellcastingAdvancement?: SpellcastingAdvancement;
  archetypeId?: string;
  archetypeName?: string;
  favoredClassBonuses?: FavoredClassBonusSelection[];
  summonerBroodmaster?: BroodmasterState;
  // Companion stacking: this class's levels add to the effective progression
  // level of companions granted by another class.
  //   'all'       — stacks with every companion-granting class (e.g. Nature Warden)
  //   '<classId>' — stacks with the specific class entry bearing that ID
  // Only set when the class explicitly says so in its rules text; most classes
  // (including Paladin's mount) do NOT stack with the druid animal companion.
  advancesCompanionOf?: 'all' | string;
}

// ---- Class Choices ----

export interface ClassChoice {
  featureName: string; // 'Domain', 'Favored Enemy', 'Rogue Talent', 'Rage Power', etc.
  takenAtLevel: number; // Character class level when this choice was made
  selection: string | string[];
  metadata?: Record<string, unknown>;
}

export interface ClassFeature {
  id?: string;
  name: string;
  description: string;
  shortDescription?: string;
  activationMode?: 'passive' | 'toggle' | 'conditional';
  level: number;
  uses?: {
    perDay?: number;
    perWeek?: number;
    formula?: string;
    current?: number;
  };
  effects: Effect[];
  resourcePool?: ResourcePoolDefinition;
}

export interface FavoredClassBonus {
  className: string;
  bonusType: string; // HP, skill rank, or other
  value: number;
}
