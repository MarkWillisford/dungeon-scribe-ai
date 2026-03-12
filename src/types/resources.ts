// ---- Resource Pools ----
// Tracks all per-day / per-encounter expendable resources:
// ki points, arcane pool, mythic power, rage rounds, channel energy uses, etc.

export interface ResourcePool {
  id: string; // 'ki', 'arcane_pool', 'mythic_power', 'rage_rounds', etc.
  name: string;
  current: number;
  max: number; // Stored; recomputed on level-up
  rechargeOn: 'rest' | 'per_encounter' | 'special';
  // 'rest'          — after 8-hour rest (ki, arcane pool, mythic power, spells, rage)
  // 'per_encounter' — resets after each encounter ends
  // 'special'       — condition-based recharge (panache on killing blow, grit on confirming crit, etc.)
  specialRechargeNote?: string;
}
