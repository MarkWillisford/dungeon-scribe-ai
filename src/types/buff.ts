import { BonusType } from './base';

// Active buff on a character
export interface Buff {
  id: string;
  name: string;
  description?: string;
  duration: number | null; // null if permanent
  durationType: 'rounds' | 'minutes' | 'hours' | 'permanent';
  bonusType: BonusType;
  effects: BuffEffects;
}

// Buff effect values — sparse (only non-zero keys present at runtime)
export interface BuffEffects {
  strength?: number;
  dexterity?: number;
  constitution?: number;
  intelligence?: number;
  wisdom?: number;
  charisma?: number;
  attackBonus?: number;
  ac?: number;
  naturalArmor?: number;
  fortitude?: number;
  reflex?: number;
  will?: number;
  damage?: number;
  cmb?: number;
  cmd?: number;
}

// Saved buff template for the character's buff library
export interface SavedBuff {
  id: string;
  name: string;
  description: string;
  category: string; // 'Spell', 'Custom', etc.
  duration: number;
  durationType: 'rounds' | 'minutes' | 'hours' | 'permanent';
  bonusType: BonusType;
  effects: BuffEffects;
}

// Buff package — a group of buffs applied together
export interface BuffPackage {
  id: string;
  name: string;
  description: string;
  category: 'Package';
  isPackage: true;
  buffs: SavedBuff[];
}
