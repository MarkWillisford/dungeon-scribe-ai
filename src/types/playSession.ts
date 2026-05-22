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
  tempHP: number;
  activeBuffs: Buff[];
  combatAbilities: CombatAbilityState;
  /** spell level (1-9) → number of slots expended */
  spellSlotsUsed: Record<number, number>;
  /** resource pool id → current remaining value */
  resourcePools: Record<string, number>;
  round: number;
  createdAt: string;
  updatedAt: string;
}
