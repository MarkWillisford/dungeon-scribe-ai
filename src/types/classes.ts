import { BABProgression, SaveProgression, Effect } from './base';
import { FeatPrerequisite } from './feats';

export interface CharacterClasses {
  classes: ClassEntry[];
  totalLevel: number;
  baseAttackBonus: number[];
  baseFortSave: number;
  baseRefSave: number;
  baseWillSave: number;
  favoredClassBonuses: FavoredClassBonus[];
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

  // For prestige/advancement classes: advances an existing casting pool rather than granting its own
  spellcastingAdvancement?: {
    type: 'divine' | 'arcane' | 'both' | 'highest' | 'chosen';
    chosenType?: 'divine' | 'arcane'; // Required when type === 'chosen'
  };

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
}

// ---- Class Choices ----

export interface ClassChoice {
  featureName: string; // 'Domain', 'Favored Enemy', 'Rogue Talent', 'Rage Power', etc.
  takenAtLevel: number; // Character class level when this choice was made
  selection: string | string[];
  metadata?: Record<string, unknown>;
}

export interface ClassFeature {
  name: string;
  description: string;
  level: number;
  uses?: {
    perDay?: number;
    perWeek?: number;
    formula?: string;
    current?: number;
  };
  effects: Effect[];
}

export interface FavoredClassBonus {
  className: string;
  bonusType: string; // HP, skill rank, or other
  value: number;
}
