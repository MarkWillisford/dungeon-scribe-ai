// ---- Resource Pools ----
// Tracks all per-day / per-encounter expendable resources:
// ki points, arcane pool, mythic power, rage rounds, channel energy uses, etc.

export interface ResourcePoolContribution {
  source: string; // e.g. "Cleric class feature", "Extra Channel", "Headband of Charisma +2"
  sourceType: 'class_feature' | 'feat' | 'equipment' | 'favored_class_bonus' | 'other';
  value: number;
}

export interface ResourcePool {
  id: string; // 'ki', 'arcane_pool', 'mythic_power', 'rage_rounds', etc.
  name: string;
  current: number;
  max: number;
  baseMax: number; // result of maxFormula before feat/equipment/FCB bonuses
  contributions: ResourcePoolContribution[];
  rechargeOn: 'rest' | 'per_encounter' | 'special';
  // 'rest'          — after 8-hour rest (ki, arcane pool, mythic power, spells, rage)
  // 'per_encounter' — resets after each encounter ends
  // 'special'       — condition-based recharge (panache on killing blow, grit on confirming crit, etc.)
  restRecoveryMode: 'full' | 'formula';
  // 'full'    — sets current to max on rest
  // 'formula' — evaluates restRecoveryFormula and adds result to current, capped at max
  restRecoveryFormula?: string; // only present when restRecoveryMode is 'formula'
  specialRechargeNote?: string;
}
