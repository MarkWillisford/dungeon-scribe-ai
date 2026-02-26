// Base types and enums used throughout the application

export enum Size {
  Fine = 'Fine',
  Diminutive = 'Diminutive',
  Tiny = 'Tiny',
  Small = 'Small',
  Medium = 'Medium',
  Large = 'Large',
  Huge = 'Huge',
  Gargantuan = 'Gargantuan',
  Colossal = 'Colossal',
}

export enum Alignment {
  LawfulGood = 'Lawful Good',
  NeutralGood = 'Neutral Good',
  ChaoticGood = 'Chaotic Good',
  LawfulNeutral = 'Lawful Neutral',
  TrueNeutral = 'True Neutral',
  ChaoticNeutral = 'Chaotic Neutral',
  LawfulEvil = 'Lawful Evil',
  NeutralEvil = 'Neutral Evil',
  ChaoticEvil = 'Chaotic Evil',
}

export enum BABProgression {
  Full = 'Full', // 1 per level (fighter)
  Medium = 'Medium', // 3/4 per level (cleric)
  Low = 'Low', // 1/2 per level (wizard)
}

export enum SaveProgression {
  Good = 'Good', // 2 + 1/2 per level
  Poor = 'Poor', // 0 + 1/3 per level
}

// Bonus types for stacking rules
// dodge and untyped stack; all other types take highest only
export enum BonusType {
  ALCHEMICAL = 'alchemical',
  ARMOR = 'armor',
  CIRCUMSTANCE = 'circumstance',
  COMPETENCE = 'competence',
  DEFLECTION = 'deflection',
  DODGE = 'dodge',
  ENHANCEMENT = 'enhancement',
  INHERENT = 'inherent',
  INSIGHT = 'insight',
  LUCK = 'luck',
  MORALE = 'morale',
  NATURAL = 'natural',
  PROFANE = 'profane',
  RACIAL = 'racial',
  RESISTANCE = 'resistance',
  SACRED = 'sacred',
  SHIELD = 'shield',
  SIZE = 'size',
  TRAIT = 'trait',
  UNTYPED = 'untyped',
}

// Base Item interface that all item types extend
export interface BaseItem {
  id: string;
  name: string;
  weight: number; // Weight per unit in pounds
  quantity: number;
  description: string;
  cost: number; // Cost in gold pieces
  isCarried: boolean;
  location: string; // Where it's stored (backpack, pouch, etc.)
  notes: string;
}

// Bonus system to track individual bonuses
export interface Bonus {
  type: BonusType;
  value: number;
  source: string;
  duration?: {
    type: string; // Rounds, minutes, hours, etc.
    value: number;
    remaining: number;
  };
  condition?: string; // Condition when bonus applies
  active?: boolean; // Defaults to true
}

// Effects system for modifiers
export interface Effect {
  type: string; // Effect type (bonus, penalty, special)
  bonusType?: string;
  target: string; // What it affects (attribute.strength, ac.armor, etc.)
  value: number | string; // Value/formula
  source: string;

  condition?: {
    type: string;
    description: string;
    check: string;
  };

  duration?: {
    type: string;
    value: number;
    remaining: number;
    startTime?: number;
  };

  activation?: {
    type: string; // How it's activated (standard, swift, etc.)
    usesPerDay?: number;
    usesRemaining?: number;
    active: boolean;
  };
}
