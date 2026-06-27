import { TraitEffect } from './traits';

export interface FlawDefinition {
  id: string;
  name: string;
  description: string;
  source: string;
  effects: TraitEffect[];
}

export interface CharacterFlaw {
  flawId: string;
  name: string;
}

export interface CharacterFlaws {
  flaws: CharacterFlaw[];
  maxFlaws: number;
}
