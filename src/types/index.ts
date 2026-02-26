// Complete Character interface — brings together all component types
import { CharacterInfo, Experience, Currency, Conditions } from './character';
import { AbilityScores } from './abilities';
import { CharacterClasses } from './classes';
import { CombatStats } from './combat';
import { Skills } from './skills';
import { Feats, Traits } from './feats';
import { Equipment } from './equipment';
import { Spellcasting } from './spells';
import { SpecialAbilities } from './specialAbilities';
import { Buff, SavedBuff, BuffPackage } from './buff';

export interface Character {
  info: CharacterInfo;
  abilityScores: AbilityScores;
  classes: CharacterClasses;
  combatStats: CombatStats;
  skills: Skills;
  feats: Feats;
  traits: Traits;
  equipment: Equipment;
  spellcasting: Spellcasting;
  specialAbilities: SpecialAbilities;
  conditions: Conditions;
  experience: Experience;
  currency: Currency;

  // Combat runtime — from HL
  buffs: Buff[];
  savedBuffs: (SavedBuff | BuffPackage)[];

  // Version tracking
  schemaVersion: string;
  lastUpdated: Date;
  createdAt?: Date;
}

// Re-export all types
export * from './base';
export * from './character';
export * from './race';
export * from './abilities';
export * from './classes';
export * from './combat';
export * from './skills';
export * from './feats';
export * from './equipment';
export * from './spells';
export * from './specialAbilities';
export * from './storage';
export * from './auth';
export * from './campaign';
export * from './notes';
export * from './session';
export * from './handout';
export * from './buff';
export * from './theme';
export * from './validation';
