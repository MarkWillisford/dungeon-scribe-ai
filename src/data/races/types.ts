// Expanded race data types for the full d20pfsrd race catalog
// This is the data-collection shape — traits are stored as text descriptions.
// Mechanical effects will be handled by a separate system.

import { Size } from '@/types/base';

export type RaceCategory = 'Core' | 'Featured' | 'Uncommon';

export type RacePowerTier =
  | 'Standard (1-10 RP)'
  | 'Advanced (11-20 RP)'
  | 'Monstrous (21-30 RP)'
  | 'Very Powerful (31+ RP)'
  | 'Unknown';

export interface RacialTraitData {
  name: string;
  description: string;
}

export interface AlternativeRacialTraitData {
  name: string;
  description: string;
  replaces: string[]; // names of the standard racial trait(s) this gives up; [] if bonus-only
  source: string; // sourcebook, e.g. 'Advanced Race Guide'
}

export type AbilityKey =
  | 'strength'
  | 'dexterity'
  | 'constitution'
  | 'intelligence'
  | 'wisdom'
  | 'charisma';

// 'mental' = Int/Wis/Cha, 'physical' = Str/Dex/Con, 'any' = any single ability,
// 'other' = abilities from whichever group was NOT selected by an earlier 'any'+'all' entry
export type FlexibleAbilityGroup = 'mental' | 'physical' | 'any' | 'other';

export interface FlexibleAbilityBonus {
  // Which abilities the player may choose from
  group: FlexibleAbilityGroup;
  // How many abilities from that group receive the bonus/penalty
  count: number | 'all';
  // The modifier applied to each chosen ability
  modifier: number;
}

export type SLAFrequency =
  | 'Constant'
  | 'AtWill'
  | 'ThreePlusMod'
  | 'ThreePerDay'
  | 'TwoPerDay'
  | 'OnePerDay';

export interface SLAComponent {
  name: string;
  level: number;
  frequency: SLAFrequency;
  options?: string[];
}

export interface TraitDowngradeEntry {
  from: string;
  to: string | null;
  asCurrency: string;
}

export interface VariantAbilityEntry {
  d100: number;
  name: string;
  description: string;
  source: string;
}

export interface ExpandedRaceData {
  name: string;
  category: RaceCategory;
  powerTier: RacePowerTier;
  racePoints: number | null;
  size: Size;
  speed: number;
  type: string; // Humanoid, Outsider, Monstrous Humanoid, etc.
  subtypes: string[];
  abilityModifiers: {
    strength?: number;
    dexterity?: number;
    constitution?: number;
    intelligence?: number;
    wisdom?: number;
    charisma?: number;
  };
  // For races with player-chosen ability bonuses.
  // Human: [{ group: 'any', count: 1, modifier: 2 }]
  // Elven Noble: [{ group: 'any', count: 'all', modifier: 2 }, { group: 'other', count: 1, modifier: 4 }, { group: 'other', count: 1, modifier: -2 }]
  flexibleAbilityBonuses?: FlexibleAbilityBonus[];
  senses: string[];
  alternativeMovements?: {
    fly?: number;
    swim?: number;
    climb?: number;
    burrow?: number;
  };
  racialTraits: RacialTraitData[];
  alternativeRacialTraits?: AlternativeRacialTraitData[]; // omitted if race has no published ARTs
  inheritsAltTraitsFrom?: string[];
  traitDowngrades?: TraitDowngradeEntry[];
  slaComponents?: SLAComponent[];
  variantAbilityTable?: VariantAbilityEntry[];
  languages: string[];
  bonusLanguages: string[];
  source: string;
}
