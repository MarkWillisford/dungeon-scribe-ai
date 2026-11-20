import { Buff, CombatAbilityState } from './buff';

/**
 * Firestore document stored at users/{userId}/sessions/{characterId}.
 * Captures the transient combat session state so it survives app restarts.
 */
export interface PlaySessionDoc {
  characterId: string;
  userId: string;
  currentHP: number;
  nonlethalDamage: number;
  isStabilized?: boolean;
  tempHP: number;
  activeBuffs: Buff[];
  combatAbilities: CombatAbilityState;
  /** pool.id ?? pool.baseClass → used slot count per spell level (index = level, 0 = cantrips) */
  spellSlotsUsed: Record<string, number[]>;
  /** stable spell key (preparedSpellKey) → number of castings used (0 = not cast) */
  preparedSpellsCast: Record<string, number>;
  /** resource pool id → current remaining value */
  resourcePools: Record<string, number>;
  round: number;
  createdAt: string;
  updatedAt: string;
}
