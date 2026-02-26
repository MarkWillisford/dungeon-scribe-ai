import { Effect } from './base';

export interface Feats {
  feats: Feat[];
  totalFeats: number;
  bonusFeats: number;
}

export interface Feat {
  name: string;
  description: string;
  source: string; // race, class, level, etc.
  prerequisites: string[];
  effects: Effect[];
}

export interface Traits {
  traits: Trait[];
}

export interface Trait {
  name: string;
  type: string; // combat, magic, social, etc.
  description: string;
  effects: Effect[];
}
