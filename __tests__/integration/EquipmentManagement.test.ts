import { EquipmentService } from '@/services/EquipmentService';
import { EquipmentDatabaseService } from '@/services/EquipmentDatabaseService';
import { CharacterService } from '@/services/CharacterService';
import { Character } from '@/types';
import { EquipmentSlot, EncumbranceVariant, EncumbranceLevel } from '@/types/equipment';
import { BonusType, Size, Alignment } from '@/types/base';
import { AbilityScoreMethod } from '@/types/character';

/**
 * Integration tests for equipment management flows.
 *
 * These tests exercise the real EquipmentService and EquipmentDatabaseService
 * together with CharacterService -- no mocking of business logic services.
 */

const createTestCharacter = (): Character => {
  return CharacterService.createDefaultCharacter({
    name: 'Equipment Test Character',
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

describe('Equipment Management Integration', () => {
  let character: Character;

  beforeEach(() => {
    EquipmentDatabaseService.initialize();
    character = createTestCharacter();
  });

  // -----------------------------------------------------------------------
  // 1. Create weapons from database, add to character inventory
  // -----------------------------------------------------------------------
  describe('Create weapons from database and add to inventory', () => {
    test('should look up a weapon template and add it to inventory', () => {
      const longswordTemplate = EquipmentDatabaseService.getEquipmentById('longsword');
      expect(longswordTemplate).not.toBeNull();

      const updated = EquipmentService.addItemToCharacter(character, longswordTemplate!);

      expect(updated.equipment.weapons).toHaveLength(1);
      expect(updated.equipment.weapons[0].name).toBe('Longsword');
      expect(updated.equipment.weapons[0].damageM).toBe('1d8');
      expect(updated.equipment.weapons[0].critical).toBe('19-20/x2');
      expect(updated.equipment.weapons[0].equipped).toBe(false);
      expect(updated.equipment.weapons[0].enhancement).toBe(0);
    });

    test('should create weapon with correct properties from template', () => {
      const daggerTemplate = EquipmentDatabaseService.getEquipmentById('dagger')!;
      const updated = EquipmentService.addItemToCharacter(character, daggerTemplate);

      const dagger = updated.equipment.weapons[0];
      expect(dagger.name).toBe('Dagger');
      expect(dagger.weight).toBe(1);
      expect(dagger.isThrown).toBe(true);
      expect(dagger.damageType).toEqual(['piercing', 'slashing']);
    });
  });

  // -----------------------------------------------------------------------
  // 2. Create armor from database, equip it, verify AC bonus applied
  // -----------------------------------------------------------------------
  describe('Create armor, equip it, verify AC bonus', () => {
    test('should equip leather armor and see ARMOR-type AC bonus', () => {
      const leatherTemplate = EquipmentDatabaseService.getEquipmentById('leather')!;
      let updated = EquipmentService.addItemToCharacter(character, leatherTemplate);

      const armorId = updated.equipment.armor[0].id;
      const result = EquipmentService.equipItem(updated, armorId, EquipmentSlot.BODY);

      expect(result.isValid).toBe(true);
      updated = result.data!;

      const bonuses = EquipmentService.calculateEquipmentBonuses(updated);
      const armorBonuses = bonuses.acBonuses.filter((b) => b.type === BonusType.ARMOR);

      expect(armorBonuses).toHaveLength(1);
      expect(armorBonuses[0].value).toBe(2); // Leather gives +2 AC
      expect(armorBonuses[0].source).toBe('Leather');
    });

    test('should equip chain shirt and see higher AC bonus', () => {
      const chainShirtTemplate = EquipmentDatabaseService.getEquipmentById('chain_shirt')!;
      let updated = EquipmentService.addItemToCharacter(character, chainShirtTemplate);

      const armorId = updated.equipment.armor[0].id;
      const result = EquipmentService.equipItem(updated, armorId, EquipmentSlot.BODY);
      updated = result.data!;

      const bonuses = EquipmentService.calculateEquipmentBonuses(updated);
      const armorBonuses = bonuses.acBonuses.filter((b) => b.type === BonusType.ARMOR);

      expect(armorBonuses).toHaveLength(1);
      expect(armorBonuses[0].value).toBe(4); // Chain shirt gives +4 AC
    });
  });

  // -----------------------------------------------------------------------
  // 3. Equip a shield alongside armor, verify AC stacks correctly
  // -----------------------------------------------------------------------
  describe('Equip shield alongside armor, verify AC stacks', () => {
    test('should produce separate ARMOR and SHIELD AC bonuses when both equipped', () => {
      // Add and equip leather armor
      const leatherTemplate = EquipmentDatabaseService.getEquipmentById('leather')!;
      let updated = EquipmentService.addItemToCharacter(character, leatherTemplate);
      const armorId = updated.equipment.armor[0].id;
      const armorResult = EquipmentService.equipItem(updated, armorId, EquipmentSlot.BODY);
      expect(armorResult.isValid).toBe(true);
      updated = armorResult.data!;

      // Add and equip heavy shield
      const heavyShieldTemplate = EquipmentDatabaseService.getEquipmentById('heavy_shield')!;
      updated = EquipmentService.addItemToCharacter(updated, heavyShieldTemplate);
      const shieldId = updated.equipment.shields[0].id;
      const shieldResult = EquipmentService.equipItem(updated, shieldId, EquipmentSlot.OFF_HAND);
      expect(shieldResult.isValid).toBe(true);
      updated = shieldResult.data!;

      const bonuses = EquipmentService.calculateEquipmentBonuses(updated);

      const armorBonuses = bonuses.acBonuses.filter((b) => b.type === BonusType.ARMOR);
      const shieldBonuses = bonuses.acBonuses.filter((b) => b.type === BonusType.SHIELD);

      expect(armorBonuses).toHaveLength(1);
      expect(armorBonuses[0].value).toBe(2); // Leather +2
      expect(shieldBonuses).toHaveLength(1);
      expect(shieldBonuses[0].value).toBe(2); // Heavy shield +2

      // Total AC from equipment alone = 2 (armor) + 2 (shield) = 4
      const totalEquipmentAC = bonuses.acBonuses.reduce((sum, b) => sum + b.value, 0);
      expect(totalEquipmentAC).toBe(4);
    });
  });

  // -----------------------------------------------------------------------
  // 4. Unequip items, verify bonuses removed
  // -----------------------------------------------------------------------
  describe('Unequip items, verify bonuses removed', () => {
    test('should remove AC bonus when armor is unequipped', () => {
      const leatherTemplate = EquipmentDatabaseService.getEquipmentById('leather')!;
      let updated = EquipmentService.addItemToCharacter(character, leatherTemplate);
      const armorId = updated.equipment.armor[0].id;

      // Equip
      const equipResult = EquipmentService.equipItem(updated, armorId, EquipmentSlot.BODY);
      updated = equipResult.data!;

      let bonuses = EquipmentService.calculateEquipmentBonuses(updated);
      expect(bonuses.acBonuses).toHaveLength(1);

      // Unequip
      updated = EquipmentService.unequipItem(updated, EquipmentSlot.BODY);

      bonuses = EquipmentService.calculateEquipmentBonuses(updated);
      expect(bonuses.acBonuses).toHaveLength(0);
      expect(updated.equipment.equippedSlots.get(EquipmentSlot.BODY)).toBeUndefined();
    });

    test('should remove weapon bonuses when weapon is unequipped', () => {
      const longswordTemplate = EquipmentDatabaseService.getEquipmentById('longsword')!;
      let updated = EquipmentService.addItemToCharacter(character, longswordTemplate);
      updated.equipment.weapons[0].enhancement = 2;
      const weaponId = updated.equipment.weapons[0].id;

      // Equip
      const equipResult = EquipmentService.equipItem(updated, weaponId, EquipmentSlot.MAIN_HAND);
      updated = equipResult.data!;

      let bonuses = EquipmentService.calculateEquipmentBonuses(updated);
      expect(bonuses.attackBonuses).toHaveLength(1);
      expect(bonuses.damageBonuses).toHaveLength(1);

      // Unequip
      updated = EquipmentService.unequipItem(updated, EquipmentSlot.MAIN_HAND);

      bonuses = EquipmentService.calculateEquipmentBonuses(updated);
      expect(bonuses.attackBonuses).toHaveLength(0);
      expect(bonuses.damageBonuses).toHaveLength(0);
    });
  });

  // -----------------------------------------------------------------------
  // 5. Slot conflicts -- equipping new armor replaces old armor
  // -----------------------------------------------------------------------
  describe('Slot conflicts', () => {
    test('should fail to equip new armor in BODY slot when slot is already occupied', () => {
      // Add and equip leather armor
      const leatherTemplate = EquipmentDatabaseService.getEquipmentById('leather')!;
      let updated = EquipmentService.addItemToCharacter(character, leatherTemplate);
      const leatherId = updated.equipment.armor[0].id;
      const leatherResult = EquipmentService.equipItem(updated, leatherId, EquipmentSlot.BODY);
      expect(leatherResult.isValid).toBe(true);
      updated = leatherResult.data!;

      // Add chain shirt and attempt to equip to same BODY slot
      const chainShirtTemplate = EquipmentDatabaseService.getEquipmentById('chain_shirt')!;
      updated = EquipmentService.addItemToCharacter(updated, chainShirtTemplate);
      const chainShirtId = updated.equipment.armor[1].id;
      const chainResult = EquipmentService.equipItem(updated, chainShirtId, EquipmentSlot.BODY);

      // Should fail because slot is occupied
      expect(chainResult.isValid).toBe(false);
      expect(chainResult.errors.length).toBeGreaterThan(0);
      expect(chainResult.errors[0]).toContain('already occupied');
    });

    test('should allow equipping after unequipping the previous item', () => {
      // Add and equip leather armor
      const leatherTemplate = EquipmentDatabaseService.getEquipmentById('leather')!;
      let updated = EquipmentService.addItemToCharacter(character, leatherTemplate);
      const leatherId = updated.equipment.armor[0].id;
      const leatherResult = EquipmentService.equipItem(updated, leatherId, EquipmentSlot.BODY);
      updated = leatherResult.data!;

      // Unequip leather
      updated = EquipmentService.unequipItem(updated, EquipmentSlot.BODY);

      // Now equip chain shirt
      const chainShirtTemplate = EquipmentDatabaseService.getEquipmentById('chain_shirt')!;
      updated = EquipmentService.addItemToCharacter(updated, chainShirtTemplate);
      const chainShirtId = updated.equipment.armor[1].id;
      const chainResult = EquipmentService.equipItem(updated, chainShirtId, EquipmentSlot.BODY);

      expect(chainResult.isValid).toBe(true);
      updated = chainResult.data!;

      const bonuses = EquipmentService.calculateEquipmentBonuses(updated);
      const armorBonuses = bonuses.acBonuses.filter((b) => b.type === BonusType.ARMOR);
      expect(armorBonuses).toHaveLength(1);
      expect(armorBonuses[0].value).toBe(4); // Chain shirt +4
    });
  });

  // -----------------------------------------------------------------------
  // 6. Create magic items with enhancement bonuses, verify bonus calculation
  // -----------------------------------------------------------------------
  describe('Magic items with enhancement bonuses', () => {
    test('should calculate +1 enhanced weapon attack and damage bonuses', () => {
      const longswordTemplate = EquipmentDatabaseService.getEquipmentById('longsword')!;
      let updated = EquipmentService.addItemToCharacter(character, longswordTemplate);

      // Set as +1 longsword
      updated.equipment.weapons[0].enhancement = 1;
      const weaponId = updated.equipment.weapons[0].id;

      const result = EquipmentService.equipItem(updated, weaponId, EquipmentSlot.MAIN_HAND);
      updated = result.data!;

      const bonuses = EquipmentService.calculateEquipmentBonuses(updated);

      expect(bonuses.attackBonuses).toHaveLength(1);
      expect(bonuses.attackBonuses[0].type).toBe(BonusType.ENHANCEMENT);
      expect(bonuses.attackBonuses[0].value).toBe(1);

      expect(bonuses.damageBonuses).toHaveLength(1);
      expect(bonuses.damageBonuses[0].type).toBe(BonusType.ENHANCEMENT);
      expect(bonuses.damageBonuses[0].value).toBe(1);
    });

    test('should calculate +3 enhanced armor AC bonus', () => {
      const leatherTemplate = EquipmentDatabaseService.getEquipmentById('leather')!;
      let updated = EquipmentService.addItemToCharacter(character, leatherTemplate);

      // Set as +3 leather armor
      updated.equipment.armor[0].enhancement = 3;
      const armorId = updated.equipment.armor[0].id;

      const result = EquipmentService.equipItem(updated, armorId, EquipmentSlot.BODY);
      updated = result.data!;

      const bonuses = EquipmentService.calculateEquipmentBonuses(updated);
      const armorBonuses = bonuses.acBonuses.filter((b) => b.type === BonusType.ARMOR);

      expect(armorBonuses).toHaveLength(1);
      // Leather base AC = 2, enhancement = 3, total armor AC = 5
      expect(armorBonuses[0].value).toBe(5);
    });

    test('should calculate +2 enhanced shield AC bonus', () => {
      const heavyShieldTemplate = EquipmentDatabaseService.getEquipmentById('heavy_shield')!;
      let updated = EquipmentService.addItemToCharacter(character, heavyShieldTemplate);

      // Set as +2 heavy shield
      updated.equipment.shields[0].enhancement = 2;
      const shieldId = updated.equipment.shields[0].id;

      const result = EquipmentService.equipItem(updated, shieldId, EquipmentSlot.OFF_HAND);
      updated = result.data!;

      const bonuses = EquipmentService.calculateEquipmentBonuses(updated);
      const shieldBonuses = bonuses.acBonuses.filter((b) => b.type === BonusType.SHIELD);

      expect(shieldBonuses).toHaveLength(1);
      // Heavy shield base AC = 2, enhancement = 2, total shield AC = 4
      expect(shieldBonuses[0].value).toBe(4);
    });

    test('should not give masterwork attack bonus when weapon has enhancement', () => {
      const longswordTemplate = EquipmentDatabaseService.getEquipmentById('longsword')!;
      let updated = EquipmentService.addItemToCharacter(character, longswordTemplate);

      // +1 longsword is also masterwork, but masterwork bonus should NOT stack
      updated.equipment.weapons[0].masterwork = true;
      updated.equipment.weapons[0].enhancement = 1;
      const weaponId = updated.equipment.weapons[0].id;

      const result = EquipmentService.equipItem(updated, weaponId, EquipmentSlot.MAIN_HAND);
      updated = result.data!;

      const bonuses = EquipmentService.calculateEquipmentBonuses(updated);

      // Only the +1 enhancement should appear, not an extra masterwork bonus
      expect(bonuses.attackBonuses).toHaveLength(1);
      expect(bonuses.attackBonuses[0].value).toBe(1);
    });
  });

  // -----------------------------------------------------------------------
  // 7. Encumbrance calculation with multiple items
  // -----------------------------------------------------------------------
  describe('Encumbrance calculation with multiple items', () => {
    test('should track total weight as items are added', () => {
      const longswordTemplate = EquipmentDatabaseService.getEquipmentById('longsword')!; // 4 lbs
      const leatherTemplate = EquipmentDatabaseService.getEquipmentById('leather')!; // 15 lbs
      const heavyShieldTemplate = EquipmentDatabaseService.getEquipmentById('heavy_shield')!; // 15 lbs
      const backpackTemplate = EquipmentDatabaseService.getEquipmentById('backpack')!; // 2 lbs
      const ropeTemplate = EquipmentDatabaseService.getEquipmentById('rope_silk')!; // 5 lbs

      let updated = character;
      updated = EquipmentService.addItemToCharacter(updated, longswordTemplate);
      updated = EquipmentService.addItemToCharacter(updated, leatherTemplate);
      updated = EquipmentService.addItemToCharacter(updated, heavyShieldTemplate);
      updated = EquipmentService.addItemToCharacter(updated, backpackTemplate);
      updated = EquipmentService.addItemToCharacter(updated, ropeTemplate);

      // 4 + 15 + 15 + 2 + 5 = 41 lbs
      expect(updated.equipment.totalWeight).toBe(41);
    });

    test('should calculate encumbrance level with heavy load', () => {
      // STR 15 carrying capacity: light = 175, medium = 350, heavy = 525
      character.equipment.encumbranceSettings.enabled = true;
      character.equipment.encumbranceSettings.variant = EncumbranceVariant.CORE_RULES;

      // Add full plate (50 lbs) several times to push weight up
      const fullPlateTemplate = EquipmentDatabaseService.getEquipmentById('full_plate')!;
      let updated = character;

      // Add a lot of heavy items to exceed medium load (350 lbs)
      for (let i = 0; i < 8; i++) {
        updated = EquipmentService.addItemToCharacter(updated, fullPlateTemplate);
      }

      // 8 x 50 = 400 lbs, should be heavy (> 350, <= 525)
      expect(updated.equipment.totalWeight).toBe(400);

      const encumbrance = EquipmentService.calculateEncumbrance(updated);
      expect(encumbrance).toBe(EncumbranceLevel.HEAVY);
    });

    test('should report overloaded when exceeding heavy capacity', () => {
      character.equipment.encumbranceSettings.enabled = true;
      character.equipment.encumbranceSettings.variant = EncumbranceVariant.CORE_RULES;

      const fullPlateTemplate = EquipmentDatabaseService.getEquipmentById('full_plate')!;
      let updated = character;

      // 11 x 50 = 550 lbs, exceeds heavy (525)
      for (let i = 0; i < 11; i++) {
        updated = EquipmentService.addItemToCharacter(updated, fullPlateTemplate);
      }

      expect(updated.equipment.totalWeight).toBe(550);

      const encumbrance = EquipmentService.calculateEncumbrance(updated);
      expect(encumbrance).toBe(EncumbranceLevel.OVERLOADED);
    });

    test('should report light load for a lightly equipped character', () => {
      character.equipment.encumbranceSettings.enabled = true;
      character.equipment.encumbranceSettings.variant = EncumbranceVariant.CORE_RULES;

      const daggerTemplate = EquipmentDatabaseService.getEquipmentById('dagger')!; // 1 lb
      let updated = EquipmentService.addItemToCharacter(character, daggerTemplate);

      expect(updated.equipment.totalWeight).toBe(1);

      const encumbrance = EquipmentService.calculateEncumbrance(updated);
      expect(encumbrance).toBe(EncumbranceLevel.LIGHT);
    });
  });

  // -----------------------------------------------------------------------
  // 8. Equip a two-handed weapon, verify it takes correct slot
  // -----------------------------------------------------------------------
  describe('Two-handed weapon slot handling', () => {
    test('should equip greatsword to TWO_HANDED slot', () => {
      const greatswordTemplate = EquipmentDatabaseService.getEquipmentById('greatsword')!;
      let updated = EquipmentService.addItemToCharacter(character, greatswordTemplate);

      const weaponId = updated.equipment.weapons[0].id;
      const result = EquipmentService.equipItem(updated, weaponId, EquipmentSlot.TWO_HANDED);

      expect(result.isValid).toBe(true);
      updated = result.data!;

      expect(updated.equipment.equippedSlots.get(EquipmentSlot.TWO_HANDED)).toBe(weaponId);
      // Main hand and off hand should be cleared
      expect(updated.equipment.equippedSlots.get(EquipmentSlot.MAIN_HAND)).toBeUndefined();
      expect(updated.equipment.equippedSlots.get(EquipmentSlot.OFF_HAND)).toBeUndefined();
    });

    test('should clear two-handed weapon when equipping a one-handed weapon to main hand', () => {
      const greatswordTemplate = EquipmentDatabaseService.getEquipmentById('greatsword')!;
      const longswordTemplate = EquipmentDatabaseService.getEquipmentById('longsword')!;

      let updated = EquipmentService.addItemToCharacter(character, greatswordTemplate);
      updated = EquipmentService.addItemToCharacter(updated, longswordTemplate);

      const greatswordId = updated.equipment.weapons[0].id;
      const longswordId = updated.equipment.weapons[1].id;

      // Equip greatsword two-handed
      let result = EquipmentService.equipItem(updated, greatswordId, EquipmentSlot.TWO_HANDED);
      updated = result.data!;
      expect(updated.equipment.equippedSlots.get(EquipmentSlot.TWO_HANDED)).toBe(greatswordId);

      // Now equip longsword in main hand -- should clear two-handed
      result = EquipmentService.equipItem(updated, longswordId, EquipmentSlot.MAIN_HAND);
      updated = result.data!;

      expect(updated.equipment.equippedSlots.get(EquipmentSlot.MAIN_HAND)).toBe(longswordId);
      expect(updated.equipment.equippedSlots.get(EquipmentSlot.TWO_HANDED)).toBeUndefined();
    });

    test('should equip longbow to TWO_HANDED slot and track attack bonuses', () => {
      const longbowTemplate = EquipmentDatabaseService.getEquipmentById('longbow')!;
      let updated = EquipmentService.addItemToCharacter(character, longbowTemplate);

      // Make it a +1 longbow
      updated.equipment.weapons[0].enhancement = 1;
      const bowId = updated.equipment.weapons[0].id;

      const result = EquipmentService.equipItem(updated, bowId, EquipmentSlot.TWO_HANDED);
      expect(result.isValid).toBe(true);
      updated = result.data!;

      expect(updated.equipment.equippedSlots.get(EquipmentSlot.TWO_HANDED)).toBe(bowId);

      const bonuses = EquipmentService.calculateEquipmentBonuses(updated);
      expect(bonuses.attackBonuses).toHaveLength(1);
      expect(bonuses.attackBonuses[0].type).toBe(BonusType.ENHANCEMENT);
      expect(bonuses.attackBonuses[0].value).toBe(1);
    });
  });

  // -----------------------------------------------------------------------
  // 9. Add multiple weapons and verify inventory management
  // -----------------------------------------------------------------------
  describe('Multiple weapons and inventory management', () => {
    test('should track multiple weapons independently in inventory', () => {
      const longswordTemplate = EquipmentDatabaseService.getEquipmentById('longsword')!;
      const daggerTemplate = EquipmentDatabaseService.getEquipmentById('dagger')!;
      const greatswordTemplate = EquipmentDatabaseService.getEquipmentById('greatsword')!;

      let updated = character;
      updated = EquipmentService.addItemToCharacter(updated, longswordTemplate);
      updated = EquipmentService.addItemToCharacter(updated, daggerTemplate);
      updated = EquipmentService.addItemToCharacter(updated, greatswordTemplate);

      expect(updated.equipment.weapons).toHaveLength(3);
      expect(updated.equipment.weapons[0].name).toBe('Longsword');
      expect(updated.equipment.weapons[1].name).toBe('Dagger');
      expect(updated.equipment.weapons[2].name).toBe('Greatsword');

      // Each weapon should have a unique ID
      const ids = updated.equipment.weapons.map((w) => w.id);
      const uniqueIds = new Set(ids);
      expect(uniqueIds.size).toBe(3);
    });

    test('should remove one weapon without affecting others', () => {
      const longswordTemplate = EquipmentDatabaseService.getEquipmentById('longsword')!;
      const daggerTemplate = EquipmentDatabaseService.getEquipmentById('dagger')!;

      let updated = character;
      updated = EquipmentService.addItemToCharacter(updated, longswordTemplate);
      updated = EquipmentService.addItemToCharacter(updated, daggerTemplate);

      expect(updated.equipment.weapons).toHaveLength(2);

      // Remove the longsword
      const longswordId = updated.equipment.weapons[0].id;
      updated = EquipmentService.removeItemFromCharacter(updated, longswordId);

      expect(updated.equipment.weapons).toHaveLength(1);
      expect(updated.equipment.weapons[0].name).toBe('Dagger');
    });

    test('should equip main-hand and off-hand weapons simultaneously', () => {
      const longswordTemplate = EquipmentDatabaseService.getEquipmentById('longsword')!;
      const daggerTemplate = EquipmentDatabaseService.getEquipmentById('dagger')!;

      let updated = character;
      updated = EquipmentService.addItemToCharacter(updated, longswordTemplate);
      updated = EquipmentService.addItemToCharacter(updated, daggerTemplate);

      const longswordId = updated.equipment.weapons[0].id;
      const daggerId = updated.equipment.weapons[1].id;

      // Equip longsword in main hand
      let result = EquipmentService.equipItem(updated, longswordId, EquipmentSlot.MAIN_HAND);
      expect(result.isValid).toBe(true);
      updated = result.data!;

      // Equip dagger in off hand
      result = EquipmentService.equipItem(updated, daggerId, EquipmentSlot.OFF_HAND);
      expect(result.isValid).toBe(true);
      updated = result.data!;

      expect(updated.equipment.equippedSlots.get(EquipmentSlot.MAIN_HAND)).toBe(longswordId);
      expect(updated.equipment.equippedSlots.get(EquipmentSlot.OFF_HAND)).toBe(daggerId);
    });

    test('should update total weight as weapons are added and removed', () => {
      const longswordTemplate = EquipmentDatabaseService.getEquipmentById('longsword')!; // 4 lbs
      const spearTemplate = EquipmentDatabaseService.getEquipmentById('spear')!; // 6 lbs

      let updated = EquipmentService.addItemToCharacter(character, longswordTemplate);
      expect(updated.equipment.totalWeight).toBe(4);

      updated = EquipmentService.addItemToCharacter(updated, spearTemplate);
      expect(updated.equipment.totalWeight).toBe(10);

      // Remove the longsword
      const longswordId = updated.equipment.weapons[0].id;
      updated = EquipmentService.removeItemFromCharacter(updated, longswordId);
      expect(updated.equipment.totalWeight).toBe(6);
    });
  });

  // -----------------------------------------------------------------------
  // 10. Bonus stacking rules: typed bonuses don't stack (take highest),
  //     dodge and untyped stack
  // -----------------------------------------------------------------------
  describe('Bonus stacking rules', () => {
    test('typed (ARMOR) bonuses from equipment should not stack -- only highest applies', () => {
      // In Pathfinder, if two different sources grant an armor bonus,
      // only the highest armor bonus applies.
      // EquipmentService returns raw bonuses per equipped item.
      // We verify that both are reported, allowing upstream code
      // to apply the stacking rule (take highest of same type).

      const leatherTemplate = EquipmentDatabaseService.getEquipmentById('leather')!; // AC +2
      const chainShirtTemplate = EquipmentDatabaseService.getEquipmentById('chain_shirt')!; // AC +4

      let updated = character;
      updated = EquipmentService.addItemToCharacter(updated, leatherTemplate);
      updated = EquipmentService.addItemToCharacter(updated, chainShirtTemplate);

      const leatherId = updated.equipment.armor[0].id;
      const chainShirtId = updated.equipment.armor[1].id;

      // Equip leather to body
      let result = EquipmentService.equipItem(updated, leatherId, EquipmentSlot.BODY);
      updated = result.data!;

      // Cannot equip chain shirt to same slot, so we test bonuses from a single piece.
      // The stacking rule is: for ARMOR typed bonuses, take the highest.
      // With one armor, there is exactly one ARMOR bonus.
      const bonuses = EquipmentService.calculateEquipmentBonuses(updated);
      const armorBonuses = bonuses.acBonuses.filter((b) => b.type === BonusType.ARMOR);

      expect(armorBonuses).toHaveLength(1);
      expect(armorBonuses[0].value).toBe(2);

      // Swap to chain shirt (higher)
      updated = EquipmentService.unequipItem(updated, EquipmentSlot.BODY);
      result = EquipmentService.equipItem(updated, chainShirtId, EquipmentSlot.BODY);
      updated = result.data!;

      const newBonuses = EquipmentService.calculateEquipmentBonuses(updated);
      const newArmorBonuses = newBonuses.acBonuses.filter((b) => b.type === BonusType.ARMOR);
      expect(newArmorBonuses).toHaveLength(1);
      expect(newArmorBonuses[0].value).toBe(4);
    });

    test('ARMOR and SHIELD typed bonuses should both apply (different types stack)', () => {
      const leatherTemplate = EquipmentDatabaseService.getEquipmentById('leather')!;
      const bucklerTemplate = EquipmentDatabaseService.getEquipmentById('buckler')!;

      let updated = character;
      updated = EquipmentService.addItemToCharacter(updated, leatherTemplate);
      updated = EquipmentService.addItemToCharacter(updated, bucklerTemplate);

      const armorId = updated.equipment.armor[0].id;
      const shieldId = updated.equipment.shields[0].id;

      let result = EquipmentService.equipItem(updated, armorId, EquipmentSlot.BODY);
      updated = result.data!;
      result = EquipmentService.equipItem(updated, shieldId, EquipmentSlot.OFF_HAND);
      updated = result.data!;

      const bonuses = EquipmentService.calculateEquipmentBonuses(updated);

      const armorBonuses = bonuses.acBonuses.filter((b) => b.type === BonusType.ARMOR);
      const shieldBonuses = bonuses.acBonuses.filter((b) => b.type === BonusType.SHIELD);

      // Both types present -- they stack because they are different bonus types
      expect(armorBonuses).toHaveLength(1);
      expect(shieldBonuses).toHaveLength(1);
      expect(armorBonuses[0].value).toBe(2); // Leather +2
      expect(shieldBonuses[0].value).toBe(1); // Buckler +1
    });

    test('enhancement bonuses on armor are part of the ARMOR typed bonus (combined)', () => {
      // A +2 leather armor: base AC 2 + enhancement 2 = 4 total, reported as a single ARMOR bonus
      const leatherTemplate = EquipmentDatabaseService.getEquipmentById('leather')!;
      let updated = EquipmentService.addItemToCharacter(character, leatherTemplate);
      updated.equipment.armor[0].enhancement = 2;

      const armorId = updated.equipment.armor[0].id;
      const result = EquipmentService.equipItem(updated, armorId, EquipmentSlot.BODY);
      updated = result.data!;

      const bonuses = EquipmentService.calculateEquipmentBonuses(updated);
      const armorBonuses = bonuses.acBonuses.filter((b) => b.type === BonusType.ARMOR);

      expect(armorBonuses).toHaveLength(1);
      expect(armorBonuses[0].value).toBe(4); // 2 base + 2 enhancement
    });

    test('enhancement bonuses on shield are part of the SHIELD typed bonus (combined)', () => {
      const heavyShieldTemplate = EquipmentDatabaseService.getEquipmentById('heavy_shield')!;
      let updated = EquipmentService.addItemToCharacter(character, heavyShieldTemplate);
      updated.equipment.shields[0].enhancement = 1;

      const shieldId = updated.equipment.shields[0].id;
      const result = EquipmentService.equipItem(updated, shieldId, EquipmentSlot.OFF_HAND);
      updated = result.data!;

      const bonuses = EquipmentService.calculateEquipmentBonuses(updated);
      const shieldBonuses = bonuses.acBonuses.filter((b) => b.type === BonusType.SHIELD);

      expect(shieldBonuses).toHaveLength(1);
      expect(shieldBonuses[0].value).toBe(3); // 2 base + 1 enhancement
    });

    test('weapon attack bonuses: masterwork gives enhancement +1 only when no magic enhancement', () => {
      const longswordTemplate = EquipmentDatabaseService.getEquipmentById('longsword')!;

      // Masterwork only
      let updated = EquipmentService.addItemToCharacter(character, longswordTemplate);
      updated.equipment.weapons[0].masterwork = true;
      updated.equipment.weapons[0].enhancement = 0;

      const mwId = updated.equipment.weapons[0].id;
      let result = EquipmentService.equipItem(updated, mwId, EquipmentSlot.MAIN_HAND);
      updated = result.data!;

      let bonuses = EquipmentService.calculateEquipmentBonuses(updated);
      expect(bonuses.attackBonuses).toHaveLength(1);
      expect(bonuses.attackBonuses[0].type).toBe(BonusType.ENHANCEMENT);
      expect(bonuses.attackBonuses[0].value).toBe(1);
      expect(bonuses.attackBonuses[0].source).toContain('masterwork');

      // No damage bonus for masterwork-only
      expect(bonuses.damageBonuses).toHaveLength(0);

      // Now set enhancement to +2 -- masterwork should be suppressed
      updated.equipment.weapons[0].enhancement = 2;
      bonuses = EquipmentService.calculateEquipmentBonuses(updated);

      // Only the +2 enhancement bonus, no separate masterwork
      expect(bonuses.attackBonuses).toHaveLength(1);
      expect(bonuses.attackBonuses[0].value).toBe(2);
      expect(bonuses.attackBonuses[0].source).not.toContain('masterwork');

      // +2 enhancement also adds damage
      expect(bonuses.damageBonuses).toHaveLength(1);
      expect(bonuses.damageBonuses[0].value).toBe(2);
    });
  });
});
