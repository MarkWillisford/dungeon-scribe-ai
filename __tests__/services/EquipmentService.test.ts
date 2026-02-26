import { EquipmentService } from '@services/EquipmentService';
import { EquipmentDatabaseService } from '@services/EquipmentDatabaseService';
import { Character } from '@/types';
import { EquipmentSlot, EncumbranceVariant, EncumbranceLevel } from '@/types/equipment';
import { BonusType, Size, Alignment } from '@/types/base';
import { CharacterService } from '@services/CharacterService';
import { AbilityScoreMethod } from '@/types/character';

// Use CharacterService to create a proper mock character
const createMockCharacter = (): Character => {
  return CharacterService.createDefaultCharacter({
    name: 'Test Character',
    race: {
      name: 'Human',
      sizeMod: Size.Medium,
      baseSpeed: 30,
      alternativeMovements: {},
      abilityModifiers: {},
      traits: [],
      languages: ['Common'],
      bonusLanguages: ['Any'],
    },
    selectedClass: 'Fighter',
    abilityScoreMethod: AbilityScoreMethod.PointBuy,
    abilityScores: { str: 15, dex: 14, con: 13, int: 12, wis: 10, cha: 8 },
    alignment: Alignment.TrueNeutral,
    deity: '',
  });
};

describe('EquipmentService', () => {
  let mockCharacter: Character;

  beforeEach(() => {
    mockCharacter = createMockCharacter();
    EquipmentDatabaseService.initialize();
  });

  describe('Equipment Management', () => {
    test('should add weapon to character inventory', () => {
      const longswordTemplate = EquipmentDatabaseService.getEquipmentById('longsword')!;
      const updatedCharacter = EquipmentService.addItemToCharacter(
        mockCharacter,
        longswordTemplate,
      );

      expect(updatedCharacter.equipment.weapons).toHaveLength(1);
      expect(updatedCharacter.equipment.weapons[0].name).toBe('Longsword');
      expect(updatedCharacter.equipment.weapons[0].enhancement).toBe(0);
      expect(updatedCharacter.equipment.weapons[0].equipped).toBe(false);
    });

    test('should add armor to character inventory', () => {
      const leatherTemplate = EquipmentDatabaseService.getEquipmentById('leather')!;
      const updatedCharacter = EquipmentService.addItemToCharacter(mockCharacter, leatherTemplate);

      expect(updatedCharacter.equipment.armor).toHaveLength(1);
      expect(updatedCharacter.equipment.armor[0].name).toBe('Leather');
      expect(updatedCharacter.equipment.armor[0].acBonus).toBe(2);
    });

    test('should remove item from character inventory', () => {
      const longswordTemplate = EquipmentDatabaseService.getEquipmentById('longsword')!;
      let updatedCharacter = EquipmentService.addItemToCharacter(mockCharacter, longswordTemplate);

      const weaponId = updatedCharacter.equipment.weapons[0].id;
      updatedCharacter = EquipmentService.removeItemFromCharacter(updatedCharacter, weaponId);

      expect(updatedCharacter.equipment.weapons).toHaveLength(0);
    });

    test('should equip weapon to main hand slot', () => {
      const longswordTemplate = EquipmentDatabaseService.getEquipmentById('longsword')!;
      let updatedCharacter = EquipmentService.addItemToCharacter(mockCharacter, longswordTemplate);

      const weaponId = updatedCharacter.equipment.weapons[0].id;
      const result = EquipmentService.equipItem(
        updatedCharacter,
        weaponId,
        EquipmentSlot.MAIN_HAND,
      );

      expect(result.isValid).toBe(true);
      expect(result.data!.equipment.equippedSlots.get(EquipmentSlot.MAIN_HAND)).toBe(weaponId);
    });

    test('should unequip item and remove bonuses', () => {
      const longswordTemplate = EquipmentDatabaseService.getEquipmentById('longsword')!;
      let updatedCharacter = EquipmentService.addItemToCharacter(mockCharacter, longswordTemplate);

      const weaponId = updatedCharacter.equipment.weapons[0].id;

      let result = EquipmentService.equipItem(updatedCharacter, weaponId, EquipmentSlot.MAIN_HAND);
      updatedCharacter = result.data!;
      expect(updatedCharacter.equipment.equippedSlots.get(EquipmentSlot.MAIN_HAND)).toBe(weaponId);

      updatedCharacter = EquipmentService.unequipItem(updatedCharacter, EquipmentSlot.MAIN_HAND);
      expect(updatedCharacter.equipment.equippedSlots.get(EquipmentSlot.MAIN_HAND)).toBeUndefined();
    });
  });

  describe('Bonus Calculations', () => {
    test('should calculate +1 sword bonuses correctly', () => {
      const longswordTemplate = EquipmentDatabaseService.getEquipmentById('longsword')!;
      let updatedCharacter = EquipmentService.addItemToCharacter(mockCharacter, longswordTemplate);

      updatedCharacter.equipment.weapons[0].enhancement = 1;
      const weaponId = updatedCharacter.equipment.weapons[0].id;

      const result = EquipmentService.equipItem(
        updatedCharacter,
        weaponId,
        EquipmentSlot.MAIN_HAND,
      );
      updatedCharacter = result.data!;

      const bonuses = EquipmentService.calculateEquipmentBonuses(updatedCharacter);

      expect(bonuses.attackBonuses).toHaveLength(1);
      expect(bonuses.attackBonuses[0].type).toBe(BonusType.ENHANCEMENT);
      expect(bonuses.attackBonuses[0].value).toBe(1);

      expect(bonuses.damageBonuses).toHaveLength(1);
      expect(bonuses.damageBonuses[0].type).toBe(BonusType.ENHANCEMENT);
      expect(bonuses.damageBonuses[0].value).toBe(1);
    });

    test('should apply armor bonuses to AC', () => {
      const leatherTemplate = EquipmentDatabaseService.getEquipmentById('leather')!;
      let updatedCharacter = EquipmentService.addItemToCharacter(mockCharacter, leatherTemplate);

      const armorId = updatedCharacter.equipment.armor[0].id;

      const result = EquipmentService.equipItem(updatedCharacter, armorId, EquipmentSlot.BODY);
      updatedCharacter = result.data!;

      const bonuses = EquipmentService.calculateEquipmentBonuses(updatedCharacter);

      expect(bonuses.acBonuses).toHaveLength(1);
      expect(bonuses.acBonuses[0].type).toBe(BonusType.ARMOR);
      expect(bonuses.acBonuses[0].value).toBe(2);
    });

    test('should calculate masterwork weapon bonus', () => {
      const longswordTemplate = EquipmentDatabaseService.getEquipmentById('longsword')!;
      let updatedCharacter = EquipmentService.addItemToCharacter(mockCharacter, longswordTemplate);

      updatedCharacter.equipment.weapons[0].masterwork = true;
      const weaponId = updatedCharacter.equipment.weapons[0].id;

      const result = EquipmentService.equipItem(
        updatedCharacter,
        weaponId,
        EquipmentSlot.MAIN_HAND,
      );
      updatedCharacter = result.data!;

      const bonuses = EquipmentService.calculateEquipmentBonuses(updatedCharacter);

      expect(bonuses.attackBonuses).toHaveLength(1);
      expect(bonuses.attackBonuses[0].type).toBe(BonusType.ENHANCEMENT);
      expect(bonuses.attackBonuses[0].value).toBe(1);
      expect(bonuses.attackBonuses[0].source).toContain('(masterwork)');
    });

    test('should not stack enhancement bonuses from masterwork and magic', () => {
      const longswordTemplate = EquipmentDatabaseService.getEquipmentById('longsword')!;
      let updatedCharacter = EquipmentService.addItemToCharacter(mockCharacter, longswordTemplate);

      updatedCharacter.equipment.weapons[0].masterwork = true;
      updatedCharacter.equipment.weapons[0].enhancement = 1;
      const weaponId = updatedCharacter.equipment.weapons[0].id;

      const result = EquipmentService.equipItem(
        updatedCharacter,
        weaponId,
        EquipmentSlot.MAIN_HAND,
      );
      updatedCharacter = result.data!;

      const bonuses = EquipmentService.calculateEquipmentBonuses(updatedCharacter);

      expect(bonuses.attackBonuses).toHaveLength(1);
      expect(bonuses.attackBonuses[0].value).toBe(1);
    });
  });

  describe('Encumbrance System', () => {
    test('should calculate carrying capacity based on strength', () => {
      const capacity = EquipmentService.getCarryingCapacity(mockCharacter);

      // STR 15: (15-10)*15 + 100 = 175
      expect(capacity.light).toBe(175);
      expect(capacity.medium).toBe(350);
      expect(capacity.heavy).toBe(525);
    });

    test('should calculate encumbrance level correctly', () => {
      mockCharacter.equipment.encumbranceSettings.enabled = true;
      mockCharacter.equipment.totalWeight = 100;

      const encumbrance = EquipmentService.calculateEncumbrance(mockCharacter);
      expect(encumbrance).toBe(EncumbranceLevel.LIGHT);

      mockCharacter.equipment.totalWeight = 300;
      const encumbranceMedium = EquipmentService.calculateEncumbrance(mockCharacter);
      expect(encumbranceMedium).toBe(EncumbranceLevel.MEDIUM);
    });

    test('should respect disabled encumbrance setting', () => {
      mockCharacter.equipment.encumbranceSettings.enabled = false;
      mockCharacter.equipment.totalWeight = 1000;

      const encumbrance = EquipmentService.calculateEncumbrance(mockCharacter);
      expect(encumbrance).toBeNull();
    });

    test('should handle simplified encumbrance variant', () => {
      mockCharacter.equipment.encumbranceSettings.enabled = true;
      mockCharacter.equipment.encumbranceSettings.variant = EncumbranceVariant.SIMPLIFIED;
      mockCharacter.equipment.totalWeight = 300;

      const encumbrance = EquipmentService.calculateEncumbrance(mockCharacter);
      expect(encumbrance).toBe(EncumbranceLevel.HEAVY);
    });
  });

  describe('Range Calculations', () => {
    test('should calculate range penalties correctly', () => {
      const shortbowTemplate = EquipmentDatabaseService.getEquipmentById('shortbow')!;
      const shortbow = EquipmentDatabaseService.createWeaponFromTemplate(shortbowTemplate);

      expect(EquipmentService.calculateRangePenalty(shortbow, 30)).toBe(0);
      expect(EquipmentService.calculateRangePenalty(shortbow, 60)).toBe(0);
      expect(EquipmentService.calculateRangePenalty(shortbow, 90)).toBe(-2);
      expect(EquipmentService.calculateRangePenalty(shortbow, 150)).toBe(-4);
    });

    test('should handle thrown weapons', () => {
      const daggerTemplate = EquipmentDatabaseService.getEquipmentById('dagger')!;
      const dagger = EquipmentDatabaseService.createWeaponFromTemplate(daggerTemplate);

      expect(EquipmentService.calculateRangePenalty(dagger, 5)).toBe(0);
      expect(EquipmentService.calculateRangePenalty(dagger, 15)).toBe(-2);
    });

    test('should return 0 penalty for melee weapons', () => {
      const longswordTemplate = EquipmentDatabaseService.getEquipmentById('longsword')!;
      const longsword = EquipmentDatabaseService.createWeaponFromTemplate(longswordTemplate);

      expect(EquipmentService.calculateRangePenalty(longsword, 100)).toBe(0);
    });

    test('should calculate effective range correctly', () => {
      const longbowTemplate = EquipmentDatabaseService.getEquipmentById('longbow')!;
      const longbow = EquipmentDatabaseService.createWeaponFromTemplate(longbowTemplate);

      expect(EquipmentService.getEffectiveRange(longbow)).toBe(1000);
    });
  });

  describe('Weight and Penalty Calculations', () => {
    test('should calculate total weight correctly', () => {
      const longswordTemplate = EquipmentDatabaseService.getEquipmentById('longsword')!;
      const leatherTemplate = EquipmentDatabaseService.getEquipmentById('leather')!;

      let updatedCharacter = EquipmentService.addItemToCharacter(mockCharacter, longswordTemplate);
      updatedCharacter = EquipmentService.addItemToCharacter(updatedCharacter, leatherTemplate);

      expect(updatedCharacter.equipment.totalWeight).toBe(19);
    });

    test('should calculate armor check penalty with masterwork reduction', () => {
      const studdedLeatherTemplate = EquipmentDatabaseService.getEquipmentById('studded_leather')!;
      let updatedCharacter = EquipmentService.addItemToCharacter(
        mockCharacter,
        studdedLeatherTemplate,
      );

      updatedCharacter.equipment.armor[0].masterwork = true;
      updatedCharacter.equipment.armor[0].equipped = true;

      updatedCharacter = EquipmentService.recalculateEquipmentBonuses(updatedCharacter);

      expect(updatedCharacter.equipment.acPenalty).toBe(0);
    });

    test('should calculate spell failure correctly', () => {
      const chainShirtTemplate = EquipmentDatabaseService.getEquipmentById('chain_shirt')!;
      let updatedCharacter = EquipmentService.addItemToCharacter(mockCharacter, chainShirtTemplate);

      updatedCharacter.equipment.armor[0].equipped = true;
      updatedCharacter = EquipmentService.recalculateEquipmentBonuses(updatedCharacter);

      expect(updatedCharacter.equipment.spellFailure).toBe(20);
    });
  });

  describe('Two-Handed Weapon Conflicts', () => {
    test('should handle two-handed weapon conflicts', () => {
      const greatswordTemplate = EquipmentDatabaseService.getEquipmentById('greatsword')!;
      let updatedCharacter = EquipmentService.addItemToCharacter(mockCharacter, greatswordTemplate);

      const longswordTemplate = EquipmentDatabaseService.getEquipmentById('longsword')!;
      updatedCharacter = EquipmentService.addItemToCharacter(updatedCharacter, longswordTemplate);

      const longswordId = updatedCharacter.equipment.weapons[1].id;
      let result = EquipmentService.equipItem(
        updatedCharacter,
        longswordId,
        EquipmentSlot.MAIN_HAND,
      );
      updatedCharacter = result.data!;

      const greatswordId = updatedCharacter.equipment.weapons[0].id;
      result = EquipmentService.equipItem(updatedCharacter, greatswordId, EquipmentSlot.TWO_HANDED);

      expect(result.isValid).toBe(true);
      expect(result.data!.equipment.equippedSlots.get(EquipmentSlot.MAIN_HAND)).toBeUndefined();
      expect(result.data!.equipment.equippedSlots.get(EquipmentSlot.TWO_HANDED)).toBe(greatswordId);
    });
  });
});
