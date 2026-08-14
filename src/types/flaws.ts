import { Effect } from './base';

export interface FlawDefinition {
  id: string;
  name: string;
  description: string;
  source: string;
  effects: Effect[];
}

export interface CharacterFlaw {
  flawId: string;
  name: string;
}

export interface CharacterFlaws {
  flaws: CharacterFlaw[];
  maxFlaws: number;
}
