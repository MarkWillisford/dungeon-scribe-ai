import { Size, Alignment, Effect } from './base';
import { Race } from './race';
import type { AbilityKey } from './abilities';
import type { ItemSlot } from './magicItems';

// Which ability receives the +1 at each class-HD milestone (every 4 HD)
export interface LevelIncrementSlot {
  atHD: number; // 4, 8, 12, 16, 20, 24, ...
  ability: AbilityKey | null;
}

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
  // The flexibleAbilityBonuses from the selected race, stored so picker UI can render without
  // re-fetching the full race object.
  racialFlexBonuses?: import('../data/races/types').FlexibleAbilityBonus[];
  // Player's choices, indexed to match racialFlexBonuses. Group-toggle entries store 'mental'|'physical'.
  racialFlexChoices?: string[];
  // Player's racial trait/feat selections (e.g. Elven Noble's Agile Fighters feat choice)
  racialChoices?: import('./racialChoices').RacialChoice[];
  // Names of selected alternate racial traits; default traits are active when absent from this list
  selectedAlternateRacialTraits?: string[];
}

// Character-layer equipped slot — ring splits into ring_left / ring_right
export type EditorEquippedSlot = Exclude<ItemSlot, 'ring'> | 'ring_left' | 'ring_right';

// Simplified equipment item used by the direct-entry editor.
// The full Character.equipment typed arrays are populated when full item data is available.
export interface EditorEquipmentItem {
  id: string;
  definitionId?: string; // Firestore doc id in the source collection
  collection: 'weapons' | 'armor' | 'shields' | 'magicItems';
  name: string;
  slot?: EditorEquippedSlot;
  containerId?: string;
  isContainer?: boolean;
  isOrbiting?: boolean;
  allowsHandUse?: boolean;
  notes?: string;
  effects?: Effect[]; // snapshot from MagicItemDefinition.effects at pick time
  grantedFeats?: import('./feats').GrantedFeat[]; // feats granted while this item is equipped
  unequippedFromSlot?: EditorEquippedSlot; // set when slot-cleared to a container; used for re-equip
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
  skillRanks?: Record<string, number>;
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
