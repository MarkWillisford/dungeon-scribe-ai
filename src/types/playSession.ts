import { Buff, CombatAbilityState } from './buff';
import type { Condition } from './character';

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
  /** Manually toggled combat conditions (Shaken, Sickened, etc.) — session-scoped */
  activeConditions: Condition[];
  combatAbilities: CombatAbilityState;
  /** pool.id ?? pool.baseClass → used slot count per spell level (index = level, 0 = cantrips) */
  spellSlotsUsed: Record<string, number[]>;
  /** stringified index into character.spellcasting.preparedSpells → cast state */
  preparedSpellsCast: Record<string, boolean>;
  /** resource pool id → current remaining value */
  resourcePools: Record<string, number>;
  round: number;
  createdAt: string;
  updatedAt: string;
}
