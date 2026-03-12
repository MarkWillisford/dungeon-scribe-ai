import { BonusType, Effect, EffectCondition, EffectActivation } from './base';

// ---- Feat Types/Categories ----

export type FeatType =
  | 'general'
  | 'combat'
  | 'critical'
  | 'item_creation'
  | 'metamagic'
  | 'monster'
  | 'teamwork'
  | 'grit'
  | 'style'
  | 'performance'
  | 'panache'
  | 'achievement'
  | 'story'
  | 'mythic'
  | 'blood_hex'
  | 'conduit'
  | 'damnation'
  | 'faction'
  | 'hero_point'
  | 'item_mastery'
  | 'meditation'
  | 'targeting';

// ---- Prerequisites (structured, machine-checkable) ----

export type FeatPrerequisite =
  | {
      type: 'ability_score';
      ability: 'STR' | 'DEX' | 'CON' | 'INT' | 'WIS' | 'CHA';
      minimum: number;
    }
  | { type: 'bab'; minimum: number }
  | { type: 'level'; minimum: number; class?: string }
  | { type: 'feat'; featId: string }
  | { type: 'skill'; skillId: string; ranks: number }
  | { type: 'class_feature'; featureName: string }
  | { type: 'proficiency'; proficiency: string }
  | { type: 'race'; raceName: string }
  | { type: 'caster_level'; minimum: number }
  | { type: 'mythic_tier'; minimum: number }
  | { type: 'special'; description: string };

// ---- Feat Effect (extends Effect with required bonusType) ----

export interface FeatEffect extends Omit<Effect, 'bonusType'> {
  bonusType: BonusType;
  condition?: EffectCondition;
  activation?: EffectActivation;
}

// ---- Feat Choices (for feats requiring selection) ----

export interface FeatChoice {
  type: 'weapon' | 'skill' | 'school' | 'ability' | 'custom';
  label: string;
  options?: string[];
  affectsEffects: boolean;
  effectTargetTemplate?: string;
}

// ---- Feat Definition (data template — stored in registry) ----

export interface FeatDefinition {
  id: string;
  name: string;
  description: string;
  shortDescription?: string;
  source: string;

  types: FeatType[];
  prerequisites: FeatPrerequisite[];
  effects: FeatEffect[];
  activationMode: 'passive' | 'toggle' | 'conditional';
  choices?: FeatChoice[];
  tags?: string[];

  isCustom?: boolean;
  createdBy?: string;
}

// ---- Character's Feat Instance (runtime state, stored on Character) ----

export interface CharacterFeat {
  featId: string;
  name: string;
  source: string; // How acquired: 'level_1', 'fighter_bonus_2', 'human_bonus'
  grantedAtLevel: number;
  active: boolean;
  choices: Record<string, string>;

  // Point-in-time validation snapshots (what the character looked like when this feat was taken)
  babWhenTaken?: number;
  classLevelsWhenTaken?: Record<string, number>;

  // Mythic feat flag
  isMythic?: boolean;
}

// ---- Container on Character ----

export interface Feats {
  feats: CharacterFeat[];
  totalFeats: number;
  bonusFeats: number;
}
