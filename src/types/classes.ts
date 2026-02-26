import { BABProgression, SaveProgression, Effect } from './base';

export interface CharacterClasses {
  classes: ClassEntry[];
  totalLevel: number;
  baseAttackBonus: number[];
  baseFortSave: number;
  baseRefSave: number;
  baseWillSave: number;
  favoredClassBonuses: FavoredClassBonus[];
}

export interface ClassEntry {
  name: string;
  archetype?: string[];
  level: number;
  hitDieSize: number; // d6, d8, d10, etc.
  hitDieResults: number[];
  skillRanks: number; // Skill ranks per level
  classSkills: string[];
  babProgression: BABProgression;
  fortProgression: SaveProgression;
  refProgression: SaveProgression;
  willProgression: SaveProgression;
  classFeatures: ClassFeature[];
}

export interface ClassFeature {
  name: string;
  description: string;
  level: number;
  uses?: {
    perDay?: number;
    perWeek?: number;
    formula?: string;
    current?: number;
  };
  effects: Effect[];
}

export interface FavoredClassBonus {
  className: string;
  bonusType: string; // HP, skill rank, or other
  value: number;
}
