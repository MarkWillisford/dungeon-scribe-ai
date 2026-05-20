export class NonLethalService {
  /**
   * Returns true when non-lethal damage meets or exceeds current HP.
   * PF1e: this is the Staggered threshold.
   * Guard: only applies when currentHP > 0 (disabled/dying states are separate).
   */
  static checkStaggered(nonlethalDamage: number, currentHP: number): boolean {
    return currentHP > 0 && nonlethalDamage >= currentHP;
  }

  /**
   * Returns true when non-lethal damage exceeds max HP.
   * PF1e: character is rendered Unconscious (not Dying).
   */
  static checkUnconscious(nonlethalDamage: number, maxHP: number): boolean {
    return nonlethalDamage > maxHP;
  }

  /**
   * HP of non-lethal damage recovered per long rest (8 hours).
   * PF1e: 1 HP per character level.
   */
  static restRecoveryAmount(characterLevel: number): number {
    return Math.max(1, characterLevel);
  }

  /**
   * Returns new non-lethal damage total after applying healing.
   * Floors at 0.
   */
  static applyHeal(currentNonlethal: number, amount: number): number {
    return Math.max(0, currentNonlethal - amount);
  }
}
