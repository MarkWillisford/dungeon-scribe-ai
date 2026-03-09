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

// Structured condition for effects
export interface EffectCondition {
  type:
    | 'always'
    | 'weapon_type'
    | 'weapon_group'
    | 'range'
    | 'target_type'
    | 'armor_type'
    | 'custom';
  params: Record<string, string | number | boolean>;
  description: string;
}

// Duration for temporary effects
export interface EffectDuration {
  type: 'rounds' | 'minutes' | 'hours' | 'permanent' | 'encounter' | string;
  value: number;
  remaining: number;
  startTime?: number;
}

// Activation mode for effects
export interface EffectActivation {
  type: 'passive' | 'toggle' | 'use' | 'immediate' | 'swift' | 'standard' | string;
  usesPerDay?: number;
  usesRemaining?: number;
  active: boolean;
}

// Effects system for modifiers
export interface Effect {
  type: string; // Effect type (bonus, penalty, special, override)
  bonusType?: BonusType | string; // Bonus type for stacking; defaults to UNTYPED if omitted
  target: string; // What it affects (ability.str, ac.armor, save.reflex, etc.)
  value: number | string; // Value or formula string
  source: string;

  condition?: EffectCondition;
  duration?: EffectDuration;
  activation?: EffectActivation;
}
