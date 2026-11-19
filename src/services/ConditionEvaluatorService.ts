import type { Character } from '@/types';
import type { EffectCondition } from '@/types/base';

export class ConditionEvaluatorService {
  /**
   * Returns true if the given condition is satisfied for this character.
   * An absent condition (undefined) always evaluates to true.
   * Unrecognised condition types return false without throwing.
   */
  static evaluate(condition: EffectCondition | undefined, character: Character): boolean {
    if (!condition) return true;

    switch (condition.type) {
      case 'always':
        return true;

      case 'armor_type':
        return this.evaluateArmorType(condition, character);

      // Condition types not yet implemented in this slice — return false rather
      // than throwing so the pipeline remains stable as new types are added.
      case 'weapon_type':
      case 'weapon_group':
      case 'range':
      case 'target_type':
      case 'custom':
        return false;
    }
  }

  private static evaluateArmorType(condition: EffectCondition, character: Character): boolean {
    const maxArmor = condition.params.maxArmor as string | undefined;

    const equippedArmor = character.equipment.armor.filter((a) => a.equipped);
    if (equippedArmor.length === 0) {
      // Unarmored — always satisfies any armor_type condition
      return true;
    }

    const armorWeight = (type: string): number => {
      if (type === 'light') return 0;
      if (type === 'medium') return 1;
      if (type === 'heavy') return 2;
      return 0;
    };

    const maxEquippedWeight = Math.max(...equippedArmor.map((a) => armorWeight(a.type)));

    if (maxArmor === 'light') return maxEquippedWeight === 0;
    if (maxArmor === 'medium') return maxEquippedWeight <= 1;
    // maxArmor === 'heavy' or unspecified — always satisfied
    return true;
  }
}
