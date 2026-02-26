import { Bonus } from './base';

export interface AbilityScores {
  str: AbilityScore;
  dex: AbilityScore;
  con: AbilityScore;
  int: AbilityScore;
  wis: AbilityScore;
  cha: AbilityScore;
}

export interface AbilityScore {
  base: number; // Base score (point buy/rolled)
  racial: number; // Racial modifier
  inherent: number; // Inherent bonus (wish, tomes)
  damage: number; // Ability damage (temporary)
  drain: number; // Ability drain (until healed)

  // Bonuses tracked as arrays — only the highest of each type applies
  bonuses: {
    enhancement: Bonus[];
    morale: Bonus[];
    size: Bonus[];
    alchemical: Bonus[];
    insight: Bonus[];
    profane: Bonus[];
    sacred: Bonus[];
    luck: Bonus[];
    circumstance: Bonus[];
    competence: Bonus[];
    untyped: Bonus[]; // These stack
  };

  // Computed properties
  total: number;
  modifier: number;
  tempTotal: number;
  tempModifier: number;
}
