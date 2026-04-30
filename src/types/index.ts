// Complete Character interface — brings together all component types
import {
  CharacterInfo,
  Experience,
  Currency,
  Conditions,
  LevelIncrementSlot,
  EditorEquipmentItem,
} from './character';
import { AbilityScores } from './abilities';
import { CharacterClasses } from './classes';
import { CombatStats } from './combat';
import { Skills } from './skills';
import { Feats } from './feats';
import { CharacterTraits } from './traits';
import { Equipment } from './equipment';
import { Spellcasting } from './spells';
import { SpecialAbilities } from './specialAbilities';
import { Buff, SavedBuff, BuffPackage } from './buff';
import { Initiating } from './initiating';
import { MythicProgression } from './mythic';
import { ResourcePool } from './resources';
import { AppliedTemplate, GrantedBonus, LevelUpDecision, CharacterCRTracking } from './templates';
import { Ruleset, CampaignRulesetLink } from './ruleset';
import { CompanionInstance } from './companions';
import { Eidolon } from './eidolon';

export interface Character {
  info: CharacterInfo;
  abilityScores: AbilityScores;
  classes: CharacterClasses;
  combatStats: CombatStats;
  skills: Skills;
  feats: Feats;
  traits: CharacterTraits;
  equipment: Equipment;
  spellcasting: Spellcasting;
  initiating: Initiating;
  specialAbilities: SpecialAbilities;
  conditions: Conditions;
  experience: Experience;
  currency: Currency;

  // Eidolons — always a list; empty for non-summoners, length 1 for standard
  // summoners, 2–4 for Broodmaster. Runtime shape mirrors draft in v1; the
  // combat sheet extends this in a later phase.
  eidolons: Eidolon[];

  // Level history — source of truth for ECL, class levels, CR/LA tracking
  levelHistory: LevelUpDecision[];

  // Templates
  appliedTemplates: AppliedTemplate[]; // Paid templates (carry ECL machinery)
  grantedBonuses: GrantedBonus[]; // Free campaign grants (no ECL impact)
  crTracking?: CharacterCRTracking; // Aggregate CR tracking (present if any CR templates)

  // Mythic progression (absent if campaign doesn't use mythic)
  mythic?: MythicProgression;

  // Resource pools (ki, arcane pool, mythic power, rage rounds, etc.)
  resources: ResourcePool[];

  // Animal companions / special mounts — see plans/animal-companion-builder.md
  companions: CompanionInstance[];

  // Combat runtime — from HL
  buffs: Buff[];
  savedBuffs: (SavedBuff | BuffPackage)[];

  // Ruleset — always present; embedded snapshot of the rules governing this character
  ruleset: Ruleset;
  // Present when character is linked to a campaign
  campaignRulesetLink?: CampaignRulesetLink;

  // Editor metadata — which ability received each +1 at HD 4/8/12/...
  levelIncrementSlots: LevelIncrementSlot[];

  // Editor metadata — simplified equipment list (full typed arrays in `equipment` stay empty
  // until item picker provides full definition data)
  editorEquipment?: EditorEquipmentItem[];

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
export * from './traits';
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
export * from './effectTargets';
export * from './dice';
export * from './templates';
export * from './mythic';
export * from './resources';
export * from './classChoices';
export * from './classOptions';
export * from './deities';
export * from './animalCompanions';
export * from './magicItems';
export * from './ruleset';
export * from './initiating';
export * from './gameData';
export * from './companions';
export * from './favoredClassBonuses';
export * from './eidolon';
