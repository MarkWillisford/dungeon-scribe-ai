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
  flexibleAbilityBonus?: boolean; // true for races that get +2 to any one ability
  senses: string[];
  alternativeMovements?: {
    fly?: number;
    swim?: number;
    climb?: number;
    burrow?: number;
  };
  racialTraits: RacialTraitData[];
  languages: string[];
  bonusLanguages: string[];
  source: string;
}
