import { BonusType, Effect } from './base';

// Active buff on a character (session-local, lives in combatSlice during play)
export interface Buff {
  id: string;
  name: string;
  description?: string;
  source: string; // spell name, feat name, item name, etc.
  bonusType: BonusType; // primary type for display grouping
  duration: number | null; // null = permanent / toggle (no countdown)
  durationType: 'rounds' | 'minutes' | 'hours' | 'permanent';
  effects: Effect[]; // uses Effect.target system from base.ts
  isActive: boolean;
}

// Saved buff template in a character's personal library (persists to Firebase)
export interface SavedBuff {
  id: string;
  name: string;
  description: string;
  source: string;
  category: 'Spell' | 'Item' | 'Ability' | 'Custom';
  bonusType: BonusType;
  duration: number;
  durationType: 'rounds' | 'minutes' | 'hours' | 'permanent';
  effects: Effect[];
}

// Buff package — a named group of SavedBuffs applied together in one tap
export interface BuffPackage {
  id: string;
  name: string;
  description: string;
  buffs: SavedBuff[];
}

// Active state of combat ability toggles (lives in combatSlice)
export interface CombatAbilityState {
  // Keyed by feat ID or class-feature ID. Populated from the character's
  // feats/class features where activationMode === 'toggle'.
  activeToggles: Record<string, boolean>;
  // TWF is always available — anyone can dual-wield; feats only reduce the penalties
  twoWeaponFighting: boolean;
  twoWeaponFightingLightOffhand: boolean; // true = light off-hand (smaller penalty)
}

// Maps legacy flat-boolean field names to feat IDs for session migration
export const LEGACY_COMBAT_ABILITY_MIGRATION: Record<string, string> = {
  powerAttack: 'power_attack',
  deadlyAim: 'deadly_aim',
  rage: 'rage',
  flurryOfBlows: 'flurry_of_blows',
  combatExpertise: 'combat_expertise',
};

// A single roll result stored in the session log
export interface RollRecord {
  id: string;
  timestamp: number;
  type: 'attack' | 'damage' | 'save' | 'skill' | 'initiative' | 'free';
  label: string; // e.g. "Attack vs Goblin", "Perception Check"
  diceNotation: string; // e.g. "1d20+9"
  rawRoll: number; // the raw die result before modifier
  modifier: number; // total modifier applied
  total: number; // rawRoll + modifier
  breakdown: string[]; // ["d20: 14", "BAB: +6", "STR: +3", "Power Attack: -3"]
  isCrit?: boolean;
  isCritFail?: boolean;
  isManual: boolean; // true if player typed result from physical dice
}
