import { BonusType } from './base';

// ---- Trait Categories ----

export type TraitCategory =
  | 'combat'
  | 'faith'
  | 'magic'
  | 'social'
  | 'race'
  | 'regional'
  | 'religion'
  | 'campaign'
  | 'equipment';

// ---- Trait Prerequisites ----

export type TraitPrerequisite =
  | { type: 'race'; raceName: string }
  | { type: 'class'; className: string }
  | { type: 'region'; regionName: string }
  | { type: 'deity'; deityName: string }
  | { type: 'alignment'; alignment: string }
  | { type: 'special'; description: string };

// ---- Trait Effect (simpler than FeatEffect — traits are always passive) ----

export interface TraitEffect {
  type: 'bonus' | 'penalty' | 'special';
  bonusType: BonusType;
  target: string;
  value: number | string;
  source: string;
  condition?: {
    type: 'always' | 'weapon_type' | 'custom';
    params: Record<string, string | number | boolean>;
    description: string;
  };
}

// ---- Trait Choices ----

export interface TraitChoice {
  type: 'skill' | 'weapon' | 'school' | 'class_skill' | 'custom';
  label: string;
  options?: string[];
  affectsEffects: boolean;
  effectTargetTemplate?: string;
}

// ---- Trait Definition (data template — stored in registry) ----

export interface TraitDefinition {
  id: string;
  name: string;
  description: string;
  shortDescription?: string;
  source: string;
  category: TraitCategory;
  subcategory?: string;
  prerequisites: TraitPrerequisite[];
  effects: TraitEffect[];
  choices?: TraitChoice[];
  tags?: string[];
}

// ---- Character's Trait Instance (runtime state, stored on Character) ----

export interface CharacterTrait {
  traitId: string;
  name: string;
  category: TraitCategory;
  choices: Record<string, string>;
}

// ---- Container on Character ----

export interface CharacterTraits {
  traits: CharacterTrait[];
  maxTraits: number;
}
