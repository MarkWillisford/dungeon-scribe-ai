import { Character } from '@/types';
import {
  Equipment,
  Weapon,
  Armor,
  Shield,
  MagicItem,
  Gear,
  EquipmentSlot,
  EquipmentTemplate,
  EquipmentType,
  EncumbranceLevel,
  EncumbranceSettings,
  EncumbranceVariant,
  CarryingCapacity,
} from '@/types/equipment';
import { Bonus, BonusType, Effect, Size } from '@/types/base';
import { ValidationResult } from '@/types/validation';
import { EquipmentDatabaseService } from '@services/EquipmentDatabaseService';

export class EquipmentService {
  // Equipment Management

  static addItemToCharacter(character: Character, template: EquipmentTemplate): Character {
    const updatedCharacter = { ...character };

    switch (template.type) {
      case EquipmentType.WEAPON:
        const weapon = EquipmentDatabaseService.createWeaponFromTemplate(template);
        updatedCharacter.equipment.weapons.push(weapon);
        break;
      case EquipmentType.ARMOR:
        const armor = EquipmentDatabaseService.createArmorFromTemplate(template);
        updatedCharacter.equipment.armor.push(armor);
        break;
      case EquipmentType.SHIELD:
        const shield = EquipmentDatabaseService.createShieldFromTemplate(template);
        updatedCharacter.equipment.shields.push(shield);
        break;
      case EquipmentType.MAGIC_ITEM:
        const magicItem = EquipmentDatabaseService.createGearFromTemplate(template);
        updatedCharacter.equipment.magicItems.push(magicItem as any);
        break;
      case EquipmentType.GEAR:
        const gear = EquipmentDatabaseService.createGearFromTemplate(template);
        updatedCharacter.equipment.gear.push(gear);
        break;
    }

    return this.recalculateEquipmentBonuses(updatedCharacter);
  }

  static removeItemFromCharacter(character: Character, itemId: string): Character {
    const updatedCharacter = { ...character };

    updatedCharacter.equipment.weapons = updatedCharacter.equipment.weapons.filter(
      (w) => w.id !== itemId,
    );
    updatedCharacter.equipment.armor = updatedCharacter.equipment.armor.filter(
      (a) => a.id !== itemId,
    );
    updatedCharacter.equipment.shields = updatedCharacter.equipment.shields.filter(
      (s) => s.id !== itemId,
    );
    updatedCharacter.equipment.magicItems = updatedCharacter.equipment.magicItems.filter(
      (m) => m.id !== itemId,
    );
    updatedCharacter.equipment.gear = updatedCharacter.equipment.gear.filter(
      (g) => g.id !== itemId,
    );

    for (const [slot, equippedItemId] of updatedCharacter.equipment.equippedSlots.entries()) {
      if (equippedItemId === itemId) {
        updatedCharacter.equipment.equippedSlots.delete(slot);
      }
    }

    return this.recalculateEquipmentBonuses(updatedCharacter);
  }

  static equipItem(
    character: Character,
    itemId: string,
    slot: EquipmentSlot,
  ): ValidationResult<Character> {
    const item = this.findItemById(character, itemId);
    if (!item) {
      return { isValid: false, errors: ['Item not found'], warnings: [], data: character };
    }

    const slotValidation = this.validateSlotCompatibility(item, slot);
    if (!slotValidation.isValid) {
      return { isValid: false, errors: slotValidation.errors, warnings: [], data: character };
    }

    const conflictValidation = this.checkSlotConflicts(character, item, slot);
    if (!conflictValidation.isValid) {
      return { isValid: false, errors: conflictValidation.errors, warnings: [], data: character };
    }

    const updatedCharacter = { ...character };

    if (slot === EquipmentSlot.TWO_HANDED) {
      updatedCharacter.equipment.equippedSlots.delete(EquipmentSlot.MAIN_HAND);
      updatedCharacter.equipment.equippedSlots.delete(EquipmentSlot.OFF_HAND);
    } else if (slot === EquipmentSlot.MAIN_HAND || slot === EquipmentSlot.OFF_HAND) {
      updatedCharacter.equipment.equippedSlots.delete(EquipmentSlot.TWO_HANDED);
    }

    updatedCharacter.equipment.equippedSlots.set(slot, itemId);
    this.setItemEquippedStatus(updatedCharacter, itemId, true);

    return {
      isValid: true,
      errors: [],
      warnings: [],
      data: this.recalculateEquipmentBonuses(updatedCharacter),
    };
  }

  static unequipItem(character: Character, slot: EquipmentSlot): Character {
    const updatedCharacter = { ...character };
    const itemId = updatedCharacter.equipment.equippedSlots.get(slot);

    if (itemId) {
      updatedCharacter.equipment.equippedSlots.delete(slot);
      this.setItemEquippedStatus(updatedCharacter, itemId, false);
    }

    return this.recalculateEquipmentBonuses(updatedCharacter);
  }

  // Bonus Calculations

  static calculateEquipmentBonuses(character: Character): {
    attackBonuses: Bonus[];
    damageBonuses: Bonus[];
    acBonuses: Bonus[];
    saveBonuses: Bonus[];
    skillBonuses: Bonus[];
  } {
    const bonuses = {
      attackBonuses: [] as Bonus[],
      damageBonuses: [] as Bonus[],
      acBonuses: [] as Bonus[],
      saveBonuses: [] as Bonus[],
      skillBonuses: [] as Bonus[],
    };

    const equippedItems = this.getEquippedItems(character);

    for (const item of equippedItems) {
      if (this.isWeapon(item)) {
        bonuses.attackBonuses.push(...this.calculateWeaponAttackBonuses(item));
        bonuses.damageBonuses.push(...this.calculateWeaponDamageBonuses(item));
      } else if (this.isArmor(item)) {
        bonuses.acBonuses.push(...this.calculateArmorBonuses(item));
      } else if (this.isShield(item)) {
        bonuses.acBonuses.push(...this.calculateShieldBonuses(item));
      } else if (this.isMagicItem(item)) {
        bonuses.acBonuses.push(...this.extractBonusesFromEffects(item.continuousEffects, 'ac'));
        bonuses.saveBonuses.push(
          ...this.extractBonusesFromEffects(item.continuousEffects, 'saves'),
        );
        bonuses.skillBonuses.push(
          ...this.extractBonusesFromEffects(item.continuousEffects, 'skills'),
        );
      }
    }

    return bonuses;
  }

  static recalculateEquipmentBonuses(character: Character): Character {
    const updatedCharacter = { ...character };

    updatedCharacter.equipment.totalWeight = this.calculateTotalWeight(updatedCharacter);
    updatedCharacter.equipment.acPenalty = this.calculateArmorCheckPenalty(updatedCharacter);
    updatedCharacter.equipment.maxDexBonus = this.calculateMaxDexBonus(updatedCharacter);
    updatedCharacter.equipment.spellFailure = this.calculateSpellFailure(updatedCharacter);

    if (updatedCharacter.equipment.encumbranceSettings.enabled) {
      updatedCharacter.equipment.encumbranceLevel =
        this.calculateEncumbrance(updatedCharacter) || undefined;
      const carryingCapacity = this.getCarryingCapacity(updatedCharacter);
      updatedCharacter.equipment.lightLoad = carryingCapacity.light;
      updatedCharacter.equipment.mediumLoad = carryingCapacity.medium;
      updatedCharacter.equipment.heavyLoad = carryingCapacity.heavy;
    }

    return updatedCharacter;
  }

  // Encumbrance System

  static getCarryingCapacity(character: Character): CarryingCapacity {
    const strength = character.abilityScores.str.total;

    let baseCapacity: number;
    if (strength <= 10) {
      baseCapacity = strength * 10;
    } else if (strength <= 20) {
      baseCapacity = (strength - 10) * 15 + 100;
    } else {
      const excessStr = strength - 20;
      const doublings = Math.floor(excessStr / 10);
      const remainder = excessStr % 10;
      baseCapacity = 250 * Math.pow(2, doublings) + remainder * 15 * Math.pow(2, doublings);
    }

    if (character.equipment.encumbranceSettings.customCarryingCapacity) {
      baseCapacity = character.equipment.encumbranceSettings.customCarryingCapacity;
    }

    return {
      light: baseCapacity,
      medium: baseCapacity * 2,
      heavy: baseCapacity * 3,
      max: baseCapacity * 5,
    };
  }

  static calculateEncumbrance(character: Character): EncumbranceLevel | null {
    if (!character.equipment.encumbranceSettings.enabled) {
      return null;
    }

    const totalWeight = character.equipment.totalWeight;
    const capacity = this.getCarryingCapacity(character);

    switch (character.equipment.encumbranceSettings.variant) {
      case EncumbranceVariant.NONE:
        return null;

      case EncumbranceVariant.SIMPLIFIED:
        return totalWeight <= capacity.light ? EncumbranceLevel.LIGHT : EncumbranceLevel.HEAVY;

      case EncumbranceVariant.CORE_RULES:
      default:
        if (totalWeight <= capacity.light) return EncumbranceLevel.LIGHT;
        if (totalWeight <= capacity.medium) return EncumbranceLevel.MEDIUM;
        if (totalWeight <= capacity.heavy) return EncumbranceLevel.HEAVY;
        return EncumbranceLevel.OVERLOADED;
    }
  }

  // Range Calculations

  static calculateRangePenalty(weapon: Weapon, distance: number): number {
    const rangeIncrement = weapon.rangeIncrement || weapon.range || 0;

    if (rangeIncrement === 0 || (!weapon.isRanged && !weapon.isThrown)) {
      return 0;
    }

    if (distance <= rangeIncrement) {
      return 0;
    }

    const increments = Math.ceil(distance / rangeIncrement);
    return (increments - 1) * -2;
  }

  static getEffectiveRange(weapon: Weapon): number {
    const rangeIncrement = weapon.rangeIncrement || weapon.range || 0;
    return rangeIncrement * 10;
  }

  // Helper Methods

  private static findItemById(
    character: Character,
    itemId: string,
  ): Weapon | Armor | Shield | MagicItem | Gear | null {
    const allItems = [
      ...character.equipment.weapons,
      ...character.equipment.armor,
      ...character.equipment.shields,
      ...character.equipment.magicItems,
      ...character.equipment.gear,
    ];

    return allItems.find((item) => item.id === itemId) || null;
  }

  private static getEquippedItems(
    character: Character,
  ): (Weapon | Armor | Shield | MagicItem | Gear)[] {
    const equippedItems: (Weapon | Armor | Shield | MagicItem | Gear)[] = [];

    for (const itemId of character.equipment.equippedSlots.values()) {
      const item = this.findItemById(character, itemId);
      if (item) {
        equippedItems.push(item);
      }
    }

    return equippedItems;
  }

  private static setItemEquippedStatus(
    character: Character,
    itemId: string,
    equipped: boolean,
  ): void {
    const allItems = [
      ...character.equipment.weapons,
      ...character.equipment.armor,
      ...character.equipment.shields,
      ...character.equipment.magicItems,
    ];

    const item = allItems.find((i) => i.id === itemId);
    if (item && 'equipped' in item) {
      (item as any).equipped = equipped;
    }
  }

  private static validateSlotCompatibility(item: any, slot: EquipmentSlot): ValidationResult {
    if (this.isWeapon(item)) {
      const validWeaponSlots = [
        EquipmentSlot.MAIN_HAND,
        EquipmentSlot.OFF_HAND,
        EquipmentSlot.TWO_HANDED,
      ];
      if (!validWeaponSlots.includes(slot)) {
        return {
          isValid: false,
          errors: ['Weapons can only be equipped to hand slots'],
          warnings: [],
        };
      }
    }

    return { isValid: true, errors: [], warnings: [] };
  }

  private static checkSlotConflicts(
    character: Character,
    item: any,
    slot: EquipmentSlot,
  ): ValidationResult {
    const currentlyEquipped = character.equipment.equippedSlots.get(slot);

    if (currentlyEquipped && currentlyEquipped !== item.id) {
      return {
        isValid: false,
        errors: [`Slot ${slot} is already occupied. Unequip the current item first.`],
        warnings: [],
      };
    }

    return { isValid: true, errors: [], warnings: [] };
  }

  // Type Guards
  private static isWeapon(item: any): item is Weapon {
    return 'weaponGroup' in item;
  }

  private static isArmor(item: any): item is Armor {
    return 'acBonus' in item && 'armorAbilities' in item;
  }

  private static isShield(item: any): item is Shield {
    return 'acBonus' in item && 'shieldAbilities' in item;
  }

  private static isMagicItem(item: any): item is MagicItem {
    return 'casterLevel' in item;
  }

  private static calculateWeaponAttackBonuses(weapon: Weapon): Bonus[] {
    const bonuses: Bonus[] = [];

    if (weapon.enhancement > 0) {
      bonuses.push({
        type: BonusType.ENHANCEMENT,
        value: weapon.enhancement,
        source: weapon.name,
        condition: 'attack rolls',
      });
    }

    if (weapon.masterwork && weapon.enhancement === 0) {
      bonuses.push({
        type: BonusType.ENHANCEMENT,
        value: 1,
        source: `${weapon.name} (masterwork)`,
        condition: 'attack rolls',
      });
    }

    for (const ability of weapon.specialAbilities) {
      bonuses.push(...this.extractBonusesFromEffects(ability.effects, 'attack'));
    }

    bonuses.push(...weapon.attackBonuses);

    return bonuses;
  }

  private static calculateWeaponDamageBonuses(weapon: Weapon): Bonus[] {
    const bonuses: Bonus[] = [];

    if (weapon.enhancement > 0) {
      bonuses.push({
        type: BonusType.ENHANCEMENT,
        value: weapon.enhancement,
        source: weapon.name,
        condition: 'damage rolls',
      });
    }

    for (const ability of weapon.specialAbilities) {
      bonuses.push(...this.extractBonusesFromEffects(ability.effects, 'damage'));
    }

    bonuses.push(...weapon.damageBonuses);

    return bonuses;
  }

  private static calculateArmorBonuses(armor: Armor): Bonus[] {
    const bonuses: Bonus[] = [];

    const totalAcBonus = armor.acBonus + armor.enhancement;
    bonuses.push({
      type: BonusType.ARMOR,
      value: totalAcBonus,
      source: armor.name,
      condition: 'AC',
    });

    for (const ability of armor.armorAbilities) {
      bonuses.push(...this.extractBonusesFromEffects(ability.effects, 'ac'));
    }

    return bonuses;
  }

  private static calculateShieldBonuses(shield: Shield): Bonus[] {
    const bonuses: Bonus[] = [];

    const totalAcBonus = shield.acBonus + shield.enhancement;
    bonuses.push({
      type: BonusType.SHIELD,
      value: totalAcBonus,
      source: shield.name,
      condition: 'AC',
    });

    for (const ability of shield.shieldAbilities) {
      bonuses.push(...this.extractBonusesFromEffects(ability.effects, 'ac'));
    }

    return bonuses;
  }

  private static extractBonusesFromEffects(effects: Effect[], bonusCategory: string): Bonus[] {
    const bonuses: Bonus[] = [];

    for (const effect of effects) {
      if (effect.target.includes(bonusCategory)) {
        const bonus: Bonus = {
          type: (effect.bonusType as BonusType) || BonusType.UNTYPED,
          value: typeof effect.value === 'number' ? effect.value : 0,
          source: effect.source,
          condition: effect.condition?.description,
          active: effect.activation?.active ?? true,
        };
        bonuses.push(bonus);
      }
    }

    return bonuses;
  }

  private static calculateTotalWeight(character: Character): number {
    const allItems = [
      ...character.equipment.weapons,
      ...character.equipment.armor,
      ...character.equipment.shields,
      ...character.equipment.magicItems,
      ...character.equipment.gear,
    ];

    return allItems.reduce((total, item) => total + item.weight * item.quantity, 0);
  }

  private static calculateArmorCheckPenalty(character: Character): number {
    let penalty = 0;

    for (const armor of character.equipment.armor.filter((a) => a.equipped)) {
      let armorPenalty = Math.abs(armor.checkPenalty || 0);
      if (armor.masterwork) {
        armorPenalty = Math.max(0, armorPenalty - 1);
      }
      penalty += armorPenalty;
    }

    for (const shield of character.equipment.shields.filter((s) => s.equipped)) {
      let shieldPenalty = Math.abs(shield.checkPenalty || 0);
      if (shield.masterwork) {
        shieldPenalty = Math.max(0, shieldPenalty - 1);
      }
      penalty += shieldPenalty;
    }

    return penalty;
  }

  private static calculateMaxDexBonus(character: Character): number {
    let maxDex = Infinity;

    for (const armor of character.equipment.armor.filter((a) => a.equipped)) {
      maxDex = Math.min(maxDex, armor.maxDexBonus);
    }

    return maxDex === Infinity ? 99 : maxDex;
  }

  private static calculateSpellFailure(character: Character): number {
    let spellFailure = 0;

    for (const armor of character.equipment.armor.filter((a) => a.equipped)) {
      spellFailure += armor.spellFailure || 0;
    }

    for (const shield of character.equipment.shields.filter((s) => s.equipped)) {
      spellFailure += shield.spellFailure || 0;
    }

    return spellFailure;
  }
}
