import { Size, Effect } from './base';

export interface Race {
  name: string;
  subtype?: string;
  sizeMod: Size;
  baseSpeed: number;
  alternativeMovements: {
    fly?: number;
    swim?: number;
    climb?: number;
    burrow?: number;
  };
  abilityModifiers: {
    str?: number;
    dex?: number;
    con?: number;
    int?: number;
    wis?: number;
    cha?: number;
  };
  traits: RacialTrait[];
  languages: string[];
  bonusLanguages: string[];
}

export interface RacialTrait {
  name: string;
  description: string;
  effects: Effect[];
}
