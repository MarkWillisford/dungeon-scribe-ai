import { Effect } from './base';

export interface SpecialAbilities {
  specialAbilities: SpecialAbility[];
}

export interface SpecialAbility {
  name: string;
  type: string; // Ex, Su, Sp
  description: string;
  uses?: {
    perDay?: number;
    perWeek?: number;
    formula?: string;
    current: number;
  };
  effects: Effect[];
}
