import { Size, Alignment, Effect } from './base';
import { Race } from './race';

// Core character information
export interface CharacterInfo {
  id: string;
  name: string;
  player: string;
  userId: string; // Firebase Auth UID — owner of this character
  firebaseId?: string; // Firestore document ID (may differ from id)
  race: Race;
  size: Size;
  alignment: Alignment;
  deity: string;
  gender: string;
  age: number;
  height: string;
  weight: string;
  hair: string;
  eyes: string;
  skin: string;
  homeland: string;
  campaign: string;
  portrait: string;
  background: string;
  notes: string;
}

// Experience Points
export interface Experience {
  current: number;
  nextLevel: number;
}

// Currency
export interface Currency {
  platinum: number;
  gold: number;
  silver: number;
  copper: number;
  totalGP: number; // Total converted to gold pieces
}

// Conditions
export interface Conditions {
  activeConditions: Condition[];
}

export interface Condition {
  name: string;
  description: string;
  effects: Effect[];
  duration?: {
    type: string;
    value: number;
    remaining: number;
  };
}

// Character validation
export interface CharacterValidationResult {
  valid: boolean;
  errors: string[];
  warnings: string[];
}

// Character summary for lists
export interface CharacterSummary {
  id: string;
  name: string;
  level: number;
  race: string;
  classes: string; // e.g., "Fighter 3/Wizard 2"
  lastUpdated: Date;
  portrait?: string;
}

// Ability score generation methods
export enum AbilityScoreMethod {
  PointBuy = 'Point Buy',
  Roll3d6 = '3d6 Straight',
  Roll4d6DropLowest = '4d6 Drop Lowest',
  RollCustom = 'Custom Dice',
}

// Character creation parameters
export interface CreateCharacterParams {
  name: string;
  race: Race;
  selectedClass: string;
  abilityScoreMethod: AbilityScoreMethod;
  abilityScores: {
    str: number;
    dex: number;
    con: number;
    int: number;
    wis: number;
    cha: number;
  };
  alignment: Alignment;
  deity?: string;
}

// Ability score generation configuration
export interface AbilityScoreGeneration {
  method: AbilityScoreMethod;
  pointBuyTotal?: number; // 15, 20, 25 point buy, or custom
  customDiceFormula?: string; // e.g., "4d6k3"
  allowRerolls?: boolean;
  rollHistory?: DiceRoll[];
}

// Individual dice roll tracking
export interface DiceRoll {
  ability: string;
  rolls: number[];
  total: number;
  timestamp: Date;
}
