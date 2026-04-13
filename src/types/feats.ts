import {
  BonusType,
  Effect,
  EffectCondition,
  EffectActivation,
  EffectType,
  EffectTarget,
} from './base';

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

// ---- Feat Choice Key (shared between FeatChoice.type and choiceRequirement.key) ----

export type FeatChoiceKey = 'weapon' | 'skill' | 'school' | 'ability' | 'custom';

// ---- Prerequisites (structured, machine-checkable) ----

export type Prerequisite =
  | {
      type: 'ability_score';
      ability: 'STR' | 'DEX' | 'CON' | 'INT' | 'WIS' | 'CHA';
      minimum: number;
    }
  | { type: 'bab'; minimum: number }
  | { type: 'level'; minimum: number; class?: string }
  | {
      type: 'feat';
      featId: string;
      // Static: prereq feat must have been taken with this specific choice (e.g. Bladed Brush → WF glaive)
      choiceRequirement?: { key: FeatChoiceKey; value: string };
      // Dynamic: prereq feat must match the same choice as the feat being validated (e.g. GWF → WF same weapon)
      matchChoiceKey?: FeatChoiceKey;
    }
  | { type: 'evolution'; evolutionId: string }
  | { type: 'skill'; skillId: string; ranks: number }
  | { type: 'class_feature'; featureName: string }
  | { type: 'proficiency'; proficiency: string }
  | { type: 'race'; raceName: string }
  | { type: 'caster_level'; minimum: number }
  | { type: 'mythic_tier'; minimum: number }
  | { type: 'special'; description: string }
  | { type: 'evolution'; evolutionId: string };

// Backwards-compatible alias — prefer Prerequisite in new code
export type FeatPrerequisite = Prerequisite;

// ---- Spell-Like Ability granted by a feat ----

export interface FeatSpellLikeAbility {
  spellId: string;
  spellName: string;
  casterLevel: number;
  usesPerDay: number; // 0 = at will
  saveDC?: number;
}

// ---- Feat Effect (extends Effect with required bonusType) ----

export interface FeatEffect extends Omit<Effect, 'bonusType' | 'type' | 'target'> {
  type: EffectType;
  target: EffectTarget;
  bonusType: BonusType;
  condition?: EffectCondition;
  activation?: EffectActivation;
}

// ---- Feat Choices (for feats requiring selection) ----

export interface FeatChoice {
  type: FeatChoiceKey;
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
  spellLikeAbilities?: FeatSpellLikeAbility[];
  activationMode: 'passive' | 'toggle' | 'conditional';
  choices?: FeatChoice[];
  tags?: string[];

  isCustom?: boolean;
  createdBy?: string;

  // TODO: Add `repeatable?: boolean` and `maxTaken?: number` to support feats that can be taken
  // more than once (e.g. Extra Channel, Spell Focus taken for different schools, Toughness at
  // mythic tier). Validation service must check CharacterFeat[] count against maxTaken before
  // allowing a second selection. When repeatable is true and the feat has a `choices` field,
  // each instance must have a different choice (e.g. Spell Focus: Evocation ≠ Spell Focus: Illusion).
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
