import {
  EquipmentTemplate,
  EquipmentType,
  Weapon,
  Armor,
  Shield,
  Gear,
  AmmoType,
} from '@/types/equipment';
import { Size } from '@/types/base';

export class EquipmentDatabaseService {
  private static _weaponTemplates: EquipmentTemplate[] = [];
  private static _armorTemplates: EquipmentTemplate[] = [];
  private static _shieldTemplates: EquipmentTemplate[] = [];
  private static _gearTemplates: EquipmentTemplate[] = [];
  private static _initialized = false;

  static initialize(): void {
    if (this._initialized) return;

    this._initializeWeapons();
    this._initializeArmor();
    this._initializeShields();
    this._initializeGear();

    this._initialized = true;
  }

  static getAllEquipment(): EquipmentTemplate[] {
    this.initialize();
    return [
      ...this._weaponTemplates,
      ...this._armorTemplates,
      ...this._shieldTemplates,
      ...this._gearTemplates,
    ];
  }

  static getEquipmentByCategory(category: string): EquipmentTemplate[] {
    this.initialize();

    switch (category.toLowerCase()) {
      case 'weapons':
        return this._weaponTemplates;
      case 'armor':
        return this._armorTemplates;
      case 'shields':
        return this._shieldTemplates;
      case 'gear':
        return this._gearTemplates;
      default:
        return [];
    }
  }

  static searchEquipment(
    query: string,
    filters?: {
      category?: string;
      subcategory?: string;
      source?: string;
      maxPrice?: number;
      maxWeight?: number;
    },
  ): EquipmentTemplate[] {
    this.initialize();

    let results = this.getAllEquipment();

    if (query.trim()) {
      const searchTerm = query.toLowerCase();
      results = results.filter(
        (item) =>
          item.name.toLowerCase().includes(searchTerm) ||
          item.description.toLowerCase().includes(searchTerm) ||
          item.subcategory.toLowerCase().includes(searchTerm),
      );
    }

    if (filters) {
      if (filters.category) {
        results = results.filter(
          (item) => item.category.toLowerCase() === filters.category!.toLowerCase(),
        );
      }

      if (filters.subcategory) {
        results = results.filter(
          (item) => item.subcategory.toLowerCase() === filters.subcategory!.toLowerCase(),
        );
      }

      if (filters.source) {
        results = results.filter(
          (item) => item.source.toLowerCase() === filters.source!.toLowerCase(),
        );
      }

      if (filters.maxPrice !== undefined) {
        results = results.filter((item) => item.basePrice <= filters.maxPrice!);
      }

      if (filters.maxWeight !== undefined) {
        results = results.filter((item) => item.baseWeight <= filters.maxWeight!);
      }
    }

    return results.sort((a, b) => a.name.localeCompare(b.name));
  }

  static getEquipmentById(id: string): EquipmentTemplate | null {
    this.initialize();
    return this.getAllEquipment().find((item) => item.id === id) || null;
  }

  static createWeaponFromTemplate(
    template: EquipmentTemplate,
    options?: {
      enhancement?: number;
      masterwork?: boolean;
      material?: string;
      quantity?: number;
    },
  ): Weapon {
    const baseItem = this._createBaseItem(template, options?.quantity);
    const props = template.properties;

    return {
      ...baseItem,
      type: (props.type as string) || 'simple',
      weaponGroup: (props.weaponGroup as string[]) || [],
      handedness: (props.handedness as string) || 'one-handed',
      proficient: true,
      range: (props.range as number) || 0,
      rangeIncrement: props.rangeIncrement as number | undefined,
      size: Size.Medium,
      damageS: (props.damageS as string) || (props.damage as string) || '1d6',
      damageM: (props.damage as string) || '1d6',
      critical: (props.critical as string) || '20/x2',
      damageType: (props.damageType as string[]) || ['slashing'],
      special: (props.special as string[]) || [],
      isRanged: (props.isRanged as boolean) || false,
      isThrown: (props.isThrown as boolean) || false,
      ammunition: props.ammunition as AmmoType | undefined,
      equipped: false,
      masterwork: options?.masterwork || false,
      material: options?.material || '',
      enhancement: options?.enhancement || 0,
      weaponAbilities: [],
      specialAbilities: [],
      attackBonuses: [],
      damageBonuses: [],
      usesAmmunition: (props.usesAmmunition as boolean) || false,
      ammunitionType: (props.ammunitionType as string) || '',
      totalAttackBonus: 0,
      totalDamage: (props.damage as string) || '1d6',
    };
  }

  static createArmorFromTemplate(
    template: EquipmentTemplate,
    options?: {
      enhancement?: number;
      masterwork?: boolean;
      material?: string;
      quantity?: number;
    },
  ): Armor {
    const baseItem = this._createBaseItem(template, options?.quantity);
    const props = template.properties;

    return {
      ...baseItem,
      type: (props.type as string) || 'light',
      proficient: true,
      acBonus: (props.acBonus as number) || 0,
      maxDexBonus: (props.maxDexBonus as number) || 99,
      checkPenalty: (props.checkPenalty as number) || 0,
      spellFailure: (props.spellFailure as number) || 0,
      speed30: (props.speed30 as number) || 30,
      speed20: (props.speed20 as number) || 20,
      masterwork: options?.masterwork || false,
      material: options?.material || '',
      equipped: false,
      enhancement: options?.enhancement || 0,
      armorAbilities: [],
      totalAcBonus: ((props.acBonus as number) || 0) + (options?.enhancement || 0),
      totalCheckPenalty: (props.checkPenalty as number) || 0,
    };
  }

  static createShieldFromTemplate(
    template: EquipmentTemplate,
    options?: {
      enhancement?: number;
      masterwork?: boolean;
      material?: string;
      quantity?: number;
    },
  ): Shield {
    const baseItem = this._createBaseItem(template, options?.quantity);
    const props = template.properties;

    return {
      ...baseItem,
      type: (props.type as string) || 'light',
      proficient: true,
      acBonus: (props.acBonus as number) || 0,
      checkPenalty: (props.checkPenalty as number) || 0,
      spellFailure: (props.spellFailure as number) || 0,
      masterwork: options?.masterwork || false,
      material: options?.material || '',
      equipped: false,
      enhancement: options?.enhancement || 0,
      shieldAbilities: [],
      totalAcBonus: ((props.acBonus as number) || 0) + (options?.enhancement || 0),
      totalCheckPenalty: (props.checkPenalty as number) || 0,
    };
  }

  static createGearFromTemplate(
    template: EquipmentTemplate,
    options?: {
      quantity?: number;
    },
  ): Gear {
    const baseItem = this._createBaseItem(template, options?.quantity);
    const props = template.properties;

    return {
      ...baseItem,
      type: (props.type as string) || 'adventuring',
      isConsumable: (props.isConsumable as boolean) || false,
      usesRemaining: props.usesRemaining as number | undefined,
    };
  }

  // Private initialization methods

  private static _createBaseItem(template: EquipmentTemplate, quantity = 1) {
    return {
      id: `${template.id}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      name: template.name,
      weight: template.baseWeight,
      quantity,
      description: template.description,
      cost: template.basePrice,
      isCarried: true,
      location: 'backpack',
      notes: '',
    };
  }

  private static _initializeWeapons(): void {
    this._weaponTemplates = [
      // Simple Melee Weapons
      {
        id: 'club',
        name: 'Club',
        type: EquipmentType.WEAPON,
        category: 'Weapons',
        subcategory: 'Simple Melee',
        source: 'Core Rulebook',
        basePrice: 0,
        baseWeight: 3,
        description: 'A simple wooden club.',
        properties: {
          type: 'simple',
          weaponGroup: ['clubs'],
          handedness: 'one-handed',
          damage: '1d6',
          damageS: '1d4',
          critical: '20/x2',
          damageType: ['bludgeoning'],
          special: [],
          isRanged: false,
          isThrown: false,
        },
      },
      {
        id: 'dagger',
        name: 'Dagger',
        type: EquipmentType.WEAPON,
        category: 'Weapons',
        subcategory: 'Simple Melee',
        source: 'Core Rulebook',
        basePrice: 2,
        baseWeight: 1,
        description: 'A sharp, pointed blade.',
        properties: {
          type: 'simple',
          weaponGroup: ['light blades'],
          handedness: 'light',
          damage: '1d4',
          damageS: '1d3',
          critical: '19-20/x2',
          damageType: ['piercing', 'slashing'],
          special: [],
          isRanged: false,
          isThrown: true,
          rangeIncrement: 10,
        },
      },
      {
        id: 'spear',
        name: 'Spear',
        type: EquipmentType.WEAPON,
        category: 'Weapons',
        subcategory: 'Simple Melee',
        source: 'Core Rulebook',
        basePrice: 2,
        baseWeight: 6,
        description: 'A long wooden shaft with a sharp metal point.',
        properties: {
          type: 'simple',
          weaponGroup: ['spears'],
          handedness: 'two-handed',
          damage: '1d8',
          damageS: '1d6',
          critical: '20/x3',
          damageType: ['piercing'],
          special: ['brace', 'reach'],
          isRanged: false,
          isThrown: true,
          rangeIncrement: 20,
        },
      },
      // Martial Melee Weapons
      {
        id: 'longsword',
        name: 'Longsword',
        type: EquipmentType.WEAPON,
        category: 'Weapons',
        subcategory: 'Martial Melee',
        source: 'Core Rulebook',
        basePrice: 15,
        baseWeight: 4,
        description: 'A versatile one-handed sword.',
        properties: {
          type: 'martial',
          weaponGroup: ['heavy blades'],
          handedness: 'one-handed',
          damage: '1d8',
          damageS: '1d6',
          critical: '19-20/x2',
          damageType: ['slashing'],
          special: [],
          isRanged: false,
          isThrown: false,
        },
      },
      {
        id: 'greatsword',
        name: 'Greatsword',
        type: EquipmentType.WEAPON,
        category: 'Weapons',
        subcategory: 'Martial Melee',
        source: 'Core Rulebook',
        basePrice: 50,
        baseWeight: 8,
        description: 'A massive two-handed sword.',
        properties: {
          type: 'martial',
          weaponGroup: ['heavy blades'],
          handedness: 'two-handed',
          damage: '2d6',
          damageS: '1d12',
          critical: '19-20/x2',
          damageType: ['slashing'],
          special: [],
          isRanged: false,
          isThrown: false,
        },
      },
      // Ranged Weapons
      {
        id: 'shortbow',
        name: 'Shortbow',
        type: EquipmentType.WEAPON,
        category: 'Weapons',
        subcategory: 'Martial Ranged',
        source: 'Core Rulebook',
        basePrice: 30,
        baseWeight: 2,
        description: 'A small, curved bow.',
        properties: {
          type: 'martial',
          weaponGroup: ['bows'],
          handedness: 'two-handed',
          damage: '1d6',
          damageS: '1d4',
          critical: '20/x3',
          damageType: ['piercing'],
          special: [],
          isRanged: true,
          isThrown: false,
          rangeIncrement: 60,
          usesAmmunition: true,
          ammunition: AmmoType.ARROW,
          ammunitionType: 'arrows',
        },
      },
      {
        id: 'longbow',
        name: 'Longbow',
        type: EquipmentType.WEAPON,
        category: 'Weapons',
        subcategory: 'Martial Ranged',
        source: 'Core Rulebook',
        basePrice: 100,
        baseWeight: 3,
        description: 'A large, powerful bow.',
        properties: {
          type: 'martial',
          weaponGroup: ['bows'],
          handedness: 'two-handed',
          damage: '1d8',
          damageS: '1d6',
          critical: '20/x3',
          damageType: ['piercing'],
          special: [],
          isRanged: true,
          isThrown: false,
          rangeIncrement: 100,
          usesAmmunition: true,
          ammunition: AmmoType.ARROW,
          ammunitionType: 'arrows',
        },
      },
    ];
  }

  private static _initializeArmor(): void {
    this._armorTemplates = [
      // Light Armor
      {
        id: 'padded',
        name: 'Padded',
        type: EquipmentType.ARMOR,
        category: 'Armor',
        subcategory: 'Light Armor',
        source: 'Core Rulebook',
        basePrice: 5,
        baseWeight: 10,
        description: 'Quilted cloth armor.',
        properties: {
          type: 'light',
          acBonus: 1,
          maxDexBonus: 8,
          checkPenalty: 0,
          spellFailure: 5,
          speed30: 30,
          speed20: 20,
        },
      },
      {
        id: 'leather',
        name: 'Leather',
        type: EquipmentType.ARMOR,
        category: 'Armor',
        subcategory: 'Light Armor',
        source: 'Core Rulebook',
        basePrice: 10,
        baseWeight: 15,
        description: 'Soft leather armor.',
        properties: {
          type: 'light',
          acBonus: 2,
          maxDexBonus: 6,
          checkPenalty: 0,
          spellFailure: 10,
          speed30: 30,
          speed20: 20,
        },
      },
      {
        id: 'studded_leather',
        name: 'Studded Leather',
        type: EquipmentType.ARMOR,
        category: 'Armor',
        subcategory: 'Light Armor',
        source: 'Core Rulebook',
        basePrice: 25,
        baseWeight: 20,
        description: 'Leather armor with metal studs.',
        properties: {
          type: 'light',
          acBonus: 3,
          maxDexBonus: 5,
          checkPenalty: -1,
          spellFailure: 15,
          speed30: 30,
          speed20: 20,
        },
      },
      // Medium Armor
      {
        id: 'chain_shirt',
        name: 'Chain Shirt',
        type: EquipmentType.ARMOR,
        category: 'Armor',
        subcategory: 'Medium Armor',
        source: 'Core Rulebook',
        basePrice: 100,
        baseWeight: 25,
        description: 'A shirt of chain mail.',
        properties: {
          type: 'medium',
          acBonus: 4,
          maxDexBonus: 4,
          checkPenalty: -2,
          spellFailure: 20,
          speed30: 30,
          speed20: 20,
        },
      },
      {
        id: 'scale_mail',
        name: 'Scale Mail',
        type: EquipmentType.ARMOR,
        category: 'Armor',
        subcategory: 'Medium Armor',
        source: 'Core Rulebook',
        basePrice: 50,
        baseWeight: 30,
        description: 'Armor made of overlapping metal scales.',
        properties: {
          type: 'medium',
          acBonus: 5,
          maxDexBonus: 3,
          checkPenalty: -4,
          spellFailure: 25,
          speed30: 20,
          speed20: 15,
        },
      },
      // Heavy Armor
      {
        id: 'splint_mail',
        name: 'Splint Mail',
        type: EquipmentType.ARMOR,
        category: 'Armor',
        subcategory: 'Heavy Armor',
        source: 'Core Rulebook',
        basePrice: 200,
        baseWeight: 45,
        description: 'Metal strips sewn to a leather backing.',
        properties: {
          type: 'heavy',
          acBonus: 7,
          maxDexBonus: 0,
          checkPenalty: -7,
          spellFailure: 40,
          speed30: 20,
          speed20: 15,
        },
      },
      {
        id: 'full_plate',
        name: 'Full Plate',
        type: EquipmentType.ARMOR,
        category: 'Armor',
        subcategory: 'Heavy Armor',
        source: 'Core Rulebook',
        basePrice: 1500,
        baseWeight: 50,
        description: 'Complete suit of fitted metal plates.',
        properties: {
          type: 'heavy',
          acBonus: 9,
          maxDexBonus: 1,
          checkPenalty: -6,
          spellFailure: 35,
          speed30: 20,
          speed20: 15,
        },
      },
    ];
  }

  private static _initializeShields(): void {
    this._shieldTemplates = [
      {
        id: 'buckler',
        name: 'Buckler',
        type: EquipmentType.SHIELD,
        category: 'Shields',
        subcategory: 'Light Shield',
        source: 'Core Rulebook',
        basePrice: 5,
        baseWeight: 5,
        description: 'A small, round shield.',
        properties: { type: 'light', acBonus: 1, checkPenalty: -1, spellFailure: 5 },
      },
      {
        id: 'light_shield',
        name: 'Light Shield',
        type: EquipmentType.SHIELD,
        category: 'Shields',
        subcategory: 'Light Shield',
        source: 'Core Rulebook',
        basePrice: 3,
        baseWeight: 6,
        description: 'A small shield made of wood or metal.',
        properties: { type: 'light', acBonus: 1, checkPenalty: -1, spellFailure: 5 },
      },
      {
        id: 'heavy_shield',
        name: 'Heavy Shield',
        type: EquipmentType.SHIELD,
        category: 'Shields',
        subcategory: 'Heavy Shield',
        source: 'Core Rulebook',
        basePrice: 7,
        baseWeight: 15,
        description: 'A large shield that covers most of the torso.',
        properties: { type: 'heavy', acBonus: 2, checkPenalty: -2, spellFailure: 15 },
      },
    ];
  }

  private static _initializeGear(): void {
    this._gearTemplates = [
      {
        id: 'backpack',
        name: 'Backpack',
        type: EquipmentType.GEAR,
        category: 'Gear',
        subcategory: 'Adventuring Gear',
        source: 'Core Rulebook',
        basePrice: 2,
        baseWeight: 2,
        description: 'A leather pack worn on the back.',
        properties: { type: 'adventuring', isConsumable: false },
      },
      {
        id: 'rope_silk',
        name: 'Rope, Silk (50 ft.)',
        type: EquipmentType.GEAR,
        category: 'Gear',
        subcategory: 'Adventuring Gear',
        source: 'Core Rulebook',
        basePrice: 10,
        baseWeight: 5,
        description: 'Strong silk rope.',
        properties: { type: 'adventuring', isConsumable: false },
      },
      {
        id: 'torch',
        name: 'Torch',
        type: EquipmentType.GEAR,
        category: 'Gear',
        subcategory: 'Adventuring Gear',
        source: 'Core Rulebook',
        basePrice: 0.01,
        baseWeight: 1,
        description: 'A wooden torch that burns for 1 hour.',
        properties: { type: 'adventuring', isConsumable: true, usesRemaining: 1 },
      },
      {
        id: 'rations_trail',
        name: 'Trail Rations (per day)',
        type: EquipmentType.GEAR,
        category: 'Gear',
        subcategory: 'Adventuring Gear',
        source: 'Core Rulebook',
        basePrice: 0.5,
        baseWeight: 1,
        description: 'Dried and preserved food for travel.',
        properties: { type: 'adventuring', isConsumable: true, usesRemaining: 1 },
      },
    ];
  }
}
