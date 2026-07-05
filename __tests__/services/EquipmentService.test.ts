import { GameDataService } from '@services/GameDataService';
import { StaticGameDataConnector } from '@services/StaticGameDataConnector';
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
  beforeAll(() => {
    GameDataService.setConnector(new StaticGameDataConnector());
  });

  let mockCharacter: Character;

  beforeEach(async () => {
    mockCharacter = createMockCharacter();
    await EquipmentDatabaseService.initialize();
  });

  describe('Equipment Management', () => {
    test('should add weapon to character inventory', async () => {
      const longswordTemplate = (await EquipmentDatabaseService.getEquipmentById('longsword'))!;
      const updatedCharacter = EquipmentService.addItemToCharacter(
        mockCharacter,
        longswordTemplate,
      );

      expect(updatedCharacter.equipment.weapons).toHaveLength(1);
      expect(updatedCharacter.equipment.weapons[0].name).toBe('Longsword');
      expect(updatedCharacter.equipment.weapons[0].enhancement).toBe(0);
      expect(updatedCharacter.equipment.weapons[0].equipped).toBe(false);
    });

    test('should add armor to character inventory', async () => {
      const leatherTemplate = (await EquipmentDatabaseService.getEquipmentById('leather'))!;
      const updatedCharacter = EquipmentService.addItemToCharacter(mockCharacter, leatherTemplate);

      expect(updatedCharacter.equipment.armor).toHaveLength(1);
      expect(updatedCharacter.equipment.armor[0].name).toBe('Leather');
      expect(updatedCharacter.equipment.armor[0].acBonus).toBe(2);
    });

    test('should remove item from character inventory', async () => {
      const longswordTemplate = (await EquipmentDatabaseService.getEquipmentById('longsword'))!;
      let updatedCharacter = EquipmentService.addItemToCharacter(mockCharacter, longswordTemplate);

      const weaponId = updatedCharacter.equipment.weapons[0].id;
      updatedCharacter = EquipmentService.removeItemFromCharacter(updatedCharacter, weaponId);

      expect(updatedCharacter.equipment.weapons).toHaveLength(0);
    });

    test('should equip weapon to main hand slot', async () => {
      const longswordTemplate = (await EquipmentDatabaseService.getEquipmentById('longsword'))!;
      let updatedCharacter = EquipmentService.addItemToCharacter(mockCharacter, longswordTemplate);

      const weaponId = updatedCharacter.equipment.weapons[0].id;
      const result = EquipmentService.equipItem(
        updatedCharacter,
        weaponId,
        EquipmentSlot.MAIN_HAND,
      );

      expect(result.isValid).toBe(true);
      expect(result.data!.equipment.equippedSlots[EquipmentSlot.MAIN_HAND]).toBe(weaponId);
    });

    test('should unequip item and remove bonuses', async () => {
      const longswordTemplate = (await EquipmentDatabaseService.getEquipmentById('longsword'))!;
      let updatedCharacter = EquipmentService.addItemToCharacter(mockCharacter, longswordTemplate);

      const weaponId = updatedCharacter.equipment.weapons[0].id;

      let result = EquipmentService.equipItem(updatedCharacter, weaponId, EquipmentSlot.MAIN_HAND);
      updatedCharacter = result.data!;
      expect(updatedCharacter.equipment.equippedSlots[EquipmentSlot.MAIN_HAND]).toBe(weaponId);

      updatedCharacter = EquipmentService.unequipItem(updatedCharacter, EquipmentSlot.MAIN_HAND);
      expect(updatedCharacter.equipment.equippedSlots[EquipmentSlot.MAIN_HAND]).toBeUndefined();
    });
  });

  describe('Bonus Calculations', () => {
    test('should calculate +1 sword bonuses correctly', async () => {
      const longswordTemplate = (await EquipmentDatabaseService.getEquipmentById('longsword'))!;
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

    test('should apply armor bonuses to AC', async () => {
      const leatherTemplate = (await EquipmentDatabaseService.getEquipmentById('leather'))!;
      let updatedCharacter = EquipmentService.addItemToCharacter(mockCharacter, leatherTemplate);

      const armorId = updatedCharacter.equipment.armor[0].id;

      const result = EquipmentService.equipItem(updatedCharacter, armorId, EquipmentSlot.BODY);
      updatedCharacter = result.data!;

      const bonuses = EquipmentService.calculateEquipmentBonuses(updatedCharacter);

      expect(bonuses.acBonuses).toHaveLength(1);
      expect(bonuses.acBonuses[0].type).toBe(BonusType.ARMOR);
      expect(bonuses.acBonuses[0].value).toBe(2);
    });

    test('should calculate masterwork weapon bonus', async () => {
      const longswordTemplate = (await EquipmentDatabaseService.getEquipmentById('longsword'))!;
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

    test('should not stack enhancement bonuses from masterwork and magic', async () => {
      const longswordTemplate = (await EquipmentDatabaseService.getEquipmentById('longsword'))!;
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
    test('should calculate carrying capacity based on strength', async () => {
      const capacity = EquipmentService.getCarryingCapacity(mockCharacter);

      // STR 15: (15-10)*15 + 100 = 175
      expect(capacity.light).toBe(175);
      expect(capacity.medium).toBe(350);
      expect(capacity.heavy).toBe(525);
    });

    test('should calculate encumbrance level correctly', async () => {
      mockCharacter.equipment.encumbranceSettings.enabled = true;
      mockCharacter.equipment.totalWeight = 100;

      const encumbrance = EquipmentService.calculateEncumbrance(mockCharacter);
      expect(encumbrance).toBe(EncumbranceLevel.LIGHT);

      mockCharacter.equipment.totalWeight = 300;
      const encumbranceMedium = EquipmentService.calculateEncumbrance(mockCharacter);
      expect(encumbranceMedium).toBe(EncumbranceLevel.MEDIUM);
    });

    test('should respect disabled encumbrance setting', async () => {
      mockCharacter.equipment.encumbranceSettings.enabled = false;
      mockCharacter.equipment.totalWeight = 1000;

      const encumbrance = EquipmentService.calculateEncumbrance(mockCharacter);
      expect(encumbrance).toBeNull();
    });

    test('should handle simplified encumbrance variant', async () => {
      mockCharacter.equipment.encumbranceSettings.enabled = true;
      mockCharacter.equipment.encumbranceSettings.variant = EncumbranceVariant.SIMPLIFIED;
      mockCharacter.equipment.totalWeight = 300;

      const encumbrance = EquipmentService.calculateEncumbrance(mockCharacter);
      expect(encumbrance).toBe(EncumbranceLevel.HEAVY);
    });
  });

  describe('Range Calculations', () => {
    test('should calculate range penalties correctly', async () => {
      const shortbowTemplate = (await EquipmentDatabaseService.getEquipmentById('shortbow'))!;
      const shortbow = EquipmentDatabaseService.createWeaponFromTemplate(shortbowTemplate);

      expect(EquipmentService.calculateRangePenalty(shortbow, 30)).toBe(0);
      expect(EquipmentService.calculateRangePenalty(shortbow, 60)).toBe(0);
      expect(EquipmentService.calculateRangePenalty(shortbow, 90)).toBe(-2);
      expect(EquipmentService.calculateRangePenalty(shortbow, 150)).toBe(-4);
    });

    test('should handle thrown weapons', async () => {
      const daggerTemplate = (await EquipmentDatabaseService.getEquipmentById('dagger'))!;
      const dagger = EquipmentDatabaseService.createWeaponFromTemplate(daggerTemplate);

      expect(EquipmentService.calculateRangePenalty(dagger, 5)).toBe(0);
      expect(EquipmentService.calculateRangePenalty(dagger, 15)).toBe(-2);
    });

    test('should return 0 penalty for melee weapons', async () => {
      const longswordTemplate = (await EquipmentDatabaseService.getEquipmentById('longsword'))!;
      const longsword = EquipmentDatabaseService.createWeaponFromTemplate(longswordTemplate);

      expect(EquipmentService.calculateRangePenalty(longsword, 100)).toBe(0);
    });

    test('should calculate effective range correctly', async () => {
      const longbowTemplate = (await EquipmentDatabaseService.getEquipmentById('longbow'))!;
      const longbow = EquipmentDatabaseService.createWeaponFromTemplate(longbowTemplate);

      expect(EquipmentService.getEffectiveRange(longbow)).toBe(1000);
    });
  });

  describe('Weight and Penalty Calculations', () => {
    test('should calculate total weight correctly', async () => {
      const longswordTemplate = (await EquipmentDatabaseService.getEquipmentById('longsword'))!;
      const leatherTemplate = (await EquipmentDatabaseService.getEquipmentById('leather'))!;

      let updatedCharacter = EquipmentService.addItemToCharacter(mockCharacter, longswordTemplate);
      updatedCharacter = EquipmentService.addItemToCharacter(updatedCharacter, leatherTemplate);

      expect(updatedCharacter.equipment.totalWeight).toBe(19);
    });

    test('should calculate armor check penalty with masterwork reduction', async () => {
      const studdedLeatherTemplate =
        (await EquipmentDatabaseService.getEquipmentById('studded_leather'))!;
      let updatedCharacter = EquipmentService.addItemToCharacter(
        mockCharacter,
        studdedLeatherTemplate,
      );

      updatedCharacter.equipment.armor[0].masterwork = true;
      updatedCharacter.equipment.armor[0].equipped = true;

      updatedCharacter = EquipmentService.recalculateEquipmentBonuses(updatedCharacter);

      expect(updatedCharacter.equipment.acPenalty).toBe(0);
    });

    test('should calculate spell failure correctly', async () => {
      const chainShirtTemplate = (await EquipmentDatabaseService.getEquipmentById('chain_shirt'))!;
      let updatedCharacter = EquipmentService.addItemToCharacter(mockCharacter, chainShirtTemplate);

      updatedCharacter.equipment.armor[0].equipped = true;
      updatedCharacter = EquipmentService.recalculateEquipmentBonuses(updatedCharacter);

      expect(updatedCharacter.equipment.spellFailure).toBe(20);
    });
  });

  describe('Two-Handed Weapon Conflicts', () => {
    test('should handle two-handed weapon conflicts', async () => {
      const greatswordTemplate = (await EquipmentDatabaseService.getEquipmentById('greatsword'))!;
      let updatedCharacter = EquipmentService.addItemToCharacter(mockCharacter, greatswordTemplate);

      const longswordTemplate = (await EquipmentDatabaseService.getEquipmentById('longsword'))!;
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
      expect(result.data!.equipment.equippedSlots[EquipmentSlot.MAIN_HAND]).toBeUndefined();
      expect(result.data!.equipment.equippedSlots[EquipmentSlot.TWO_HANDED]).toBe(greatswordId);
    });
  });
});

describe('EquipmentDatabaseService', () => {
  beforeAll(async () => {
    await EquipmentDatabaseService.initialize();
  });

  describe('getEquipmentByCategory', () => {
    it('returns weapons for category "weapons"', async () => {
      const weapons = await EquipmentDatabaseService.getEquipmentByCategory('weapons');
      expect(weapons.length).toBeGreaterThan(0);
      expect(weapons.every((w) => w.category === 'Weapons')).toBe(true);
    });

    it('returns armor for category "armor"', async () => {
      const armor = await EquipmentDatabaseService.getEquipmentByCategory('armor');
      expect(armor.length).toBeGreaterThan(0);
      expect(armor.every((a) => a.category === 'Armor')).toBe(true);
    });

    it('returns shields for category "shields"', async () => {
      const shields = await EquipmentDatabaseService.getEquipmentByCategory('shields');
      expect(shields.length).toBeGreaterThan(0);
    });

    it('returns gear for category "gear"', async () => {
      const gear = await EquipmentDatabaseService.getEquipmentByCategory('gear');
      expect(gear.length).toBeGreaterThan(0);
    });

    it('returns empty array for unknown category', async () => {
      const result = await EquipmentDatabaseService.getEquipmentByCategory('potions');
      expect(result).toHaveLength(0);
    });

    it('returns magic weapons for category "magic_weapon"', async () => {
      const results = await EquipmentDatabaseService.getEquipmentByCategory('magic_weapon');
      expect(results.length).toBeGreaterThan(0);
      expect(results.every((w) => w.category === 'magic_weapon')).toBe(true);
    });
  });

  describe('magic weapon loading', () => {
    it('retrieves Holy Avenger by id', async () => {
      const item = await EquipmentDatabaseService.getEquipmentById('weapon-holy-avenger');
      expect(item).not.toBeNull();
      expect(item!.name).toBe('Holy Avenger');
      expect(item!.category).toBe('magic_weapon');
    });

    it('includes magic weapons in getAllEquipment', async () => {
      const all = await EquipmentDatabaseService.getAllEquipment();
      const holyAvenger = all.find((i) => i.id === 'weapon-holy-avenger');
      expect(holyAvenger).toBeDefined();
    });

    it('magic weapon templates have correct type', async () => {
      const results = await EquipmentDatabaseService.getEquipmentByCategory('magic_weapon');
      expect(results.every((w) => w.type === 'magic_item')).toBe(true);
    });
  });

  describe('searchEquipment', () => {
    it('returns all items when query is empty', async () => {
      const all = await EquipmentDatabaseService.getAllEquipment();
      const results = await EquipmentDatabaseService.searchEquipment('');
      expect(results.length).toBe(all.length);
    });

    it('filters by name query', async () => {
      const results = await EquipmentDatabaseService.searchEquipment('longsword');
      expect(results.length).toBeGreaterThan(0);
      expect(results.some((r) => r.name.toLowerCase().includes('longsword'))).toBe(true);
    });

    it('filters by category', async () => {
      const results = await EquipmentDatabaseService.searchEquipment('', { category: 'Armor' });
      expect(results.every((r) => r.category === 'Armor')).toBe(true);
    });

    it('filters by subcategory', async () => {
      const results = await EquipmentDatabaseService.searchEquipment('', {
        subcategory: 'Light Armor',
      });
      expect(results.every((r) => r.subcategory === 'Light Armor')).toBe(true);
    });

    it('filters by source', async () => {
      const all = await EquipmentDatabaseService.getAllEquipment();
      const firstSource = all[0].source;
      const results = await EquipmentDatabaseService.searchEquipment('', { source: firstSource });
      expect(results.every((r) => r.source.toLowerCase() === firstSource.toLowerCase())).toBe(true);
    });

    it('filters by maxPrice', async () => {
      const results = await EquipmentDatabaseService.searchEquipment('', { maxPrice: 5 });
      expect(results.every((r) => r.basePrice <= 5)).toBe(true);
    });

    it('filters by maxWeight', async () => {
      const results = await EquipmentDatabaseService.searchEquipment('', { maxWeight: 5 });
      expect(results.every((r) => r.baseWeight <= 5)).toBe(true);
    });

    it('returns results sorted by name', async () => {
      const results = await EquipmentDatabaseService.searchEquipment('');
      const names = results.map((r) => r.name);
      const sorted = [...names].sort((a, b) => a.localeCompare(b));
      expect(names).toEqual(sorted);
    });
  });
});
