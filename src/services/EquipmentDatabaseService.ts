import {
  EquipmentTemplate,
  EquipmentType,
  Weapon,
  Armor,
  Shield,
  Gear,
  AmmoType,
} from '@/types/equipment';
import { CharacterMagicItem } from '@/types/magicItems';
import type {
  WeaponDefinition,
  ArmorDefinition,
  ShieldDefinition,
  GearDefinition,
} from '@/types/equipment';
import { Size } from '@/types/base';
import type { Effect } from '@/types/base';
import { GameDataService } from '@/services/GameDataService';

export class EquipmentDatabaseService {
  private static _weaponTemplates: EquipmentTemplate[] = [];
  private static _armorTemplates: EquipmentTemplate[] = [];
  private static _shieldTemplates: EquipmentTemplate[] = [];
  private static _gearTemplates: EquipmentTemplate[] = [];
  private static _initPromise: Promise<void> | null = null;

  static initialize(): Promise<void> {
    if (this._initPromise) return this._initPromise;
    this._initPromise = Promise.all([
      GameDataService.getWeapons(),
      GameDataService.getArmor(),
      GameDataService.getShields(),
      GameDataService.getGear(),
    ])
      .then(([weapons, armor, shields, gear]) => {
        this._weaponTemplates = weapons.map(this._weaponDefToTemplate);
        this._armorTemplates = armor.map(this._armorDefToTemplate);
        this._shieldTemplates = shields.map(this._shieldDefToTemplate);
        this._gearTemplates = gear.map(this._gearDefToTemplate);
      })
      .catch((e: unknown) => {
        // Clear the cached promise so callers can retry after a transient failure.
        this._initPromise = null;
        throw e;
      });
    return this._initPromise;
  }

  static async getAllEquipment(): Promise<EquipmentTemplate[]> {
    await this.initialize();
    return [
      ...this._weaponTemplates,
      ...this._armorTemplates,
      ...this._shieldTemplates,
      ...this._gearTemplates,
    ];
  }

  static async getEquipmentByCategory(category: string): Promise<EquipmentTemplate[]> {
    await this.initialize();

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

  static async searchEquipment(
    query: string,
    filters?: {
      category?: string;
      subcategory?: string;
      source?: string;
      maxPrice?: number;
      maxWeight?: number;
    },
  ): Promise<EquipmentTemplate[]> {
    await this.initialize();

    let results = await this.getAllEquipment();

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

  static async getEquipmentById(id: string): Promise<EquipmentTemplate | null> {
    await this.initialize();
    return (await this.getAllEquipment()).find((item) => item.id === id) ?? null;
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

  static createMagicItemFromTemplate(template: EquipmentTemplate): CharacterMagicItem {
    return {
      instanceId: `${template.id}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      definitionId: template.id,
      name: template.name,
      equipped: false,
      identified: true,
      notes: '',
    };
  }

  // Private helpers

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

  private static _capitalize(s: string): string {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  private static _weaponDefToTemplate(def: WeaponDefinition): EquipmentTemplate {
    const isRanged = def.weaponType === 'ranged' && !def.isThrown;
    const subcategory = `${EquipmentDatabaseService._capitalize(def.proficiency)} ${def.weaponType === 'ranged' || def.isThrown ? 'Ranged' : EquipmentDatabaseService._capitalize(def.handedness) + ' Melee'}`;

    return {
      id: def.id,
      name: def.name,
      type: EquipmentType.WEAPON,
      category: 'Weapons',
      subcategory,
      source: def.source,
      basePrice: def.cost,
      baseWeight: def.weight,
      description: def.description,
      properties: {
        type: def.proficiency,
        weaponGroup: def.weaponGroup,
        handedness: def.handedness,
        damage: def.damageM,
        damageS: def.damageS,
        critical: def.critical,
        damageType: def.damageType,
        special: def.special,
        isRanged,
        isThrown: def.isThrown,
        range: def.range,
        rangeIncrement: def.range > 0 ? def.range : undefined,
        ...(def.ammunition && {
          ammunition: def.ammunition,
          usesAmmunition: true,
          ammunitionType: def.ammunition,
        }),
      },
    };
  }

  private static _armorDefToTemplate(def: ArmorDefinition): EquipmentTemplate {
    return {
      id: def.id,
      name: def.name,
      type: EquipmentType.ARMOR,
      category: 'Armor',
      subcategory: `${EquipmentDatabaseService._capitalize(def.armorType)} Armor`,
      source: def.source,
      basePrice: def.cost,
      baseWeight: def.weight,
      description: def.description,
      properties: {
        type: def.armorType,
        acBonus: def.acBonus,
        maxDexBonus: def.maxDexBonus,
        checkPenalty: def.checkPenalty,
        spellFailure: def.spellFailure,
        speed30: def.speed30,
        speed20: def.speed20,
      },
    };
  }

  private static _shieldDefToTemplate(def: ShieldDefinition): EquipmentTemplate {
    return {
      id: def.id,
      name: def.name,
      type: EquipmentType.SHIELD,
      category: 'Shields',
      subcategory: `${EquipmentDatabaseService._capitalize(def.shieldType)} Shield`,
      source: def.source,
      basePrice: def.cost,
      baseWeight: def.weight,
      description: def.description,
      properties: {
        type: def.shieldType,
        acBonus: def.acBonus,
        checkPenalty: def.checkPenalty,
        spellFailure: def.spellFailure,
      },
    };
  }

  private static _gearDefToTemplate(def: GearDefinition): EquipmentTemplate {
    return {
      id: def.id,
      name: def.name,
      type: EquipmentType.GEAR,
      category: 'Gear',
      subcategory: `${EquipmentDatabaseService._capitalize(def.gearType)} Gear`,
      source: def.source,
      basePrice: def.cost,
      baseWeight: def.weight,
      description: def.description,
      properties: {
        type: def.gearType,
        isConsumable: def.isConsumable,
      },
    };
  }
}
