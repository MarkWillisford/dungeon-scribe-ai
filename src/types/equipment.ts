import { BaseItem, Size, Bonus, Effect } from './base';

export enum EquipmentSlot {
  HEAD = 'head',
  NECK = 'neck',
  CHEST = 'chest',
  BODY = 'body',
  BELT = 'belt',
  WRISTS = 'wrists',
  HANDS = 'hands',
  RING_LEFT = 'ring_left',
  RING_RIGHT = 'ring_right',
  FEET = 'feet',
  MAIN_HAND = 'main_hand',
  OFF_HAND = 'off_hand',
  TWO_HANDED = 'two_handed',
}

export interface EncumbranceSettings {
  enabled: boolean;
  variant: EncumbranceVariant;
  customCarryingCapacity?: number;
}

export enum EncumbranceVariant {
  CORE_RULES = 'core',
  SIMPLIFIED = 'simplified',
  NONE = 'none',
}

export enum EncumbranceLevel {
  LIGHT = 'light',
  MEDIUM = 'medium',
  HEAVY = 'heavy',
  OVERLOADED = 'overloaded',
}

export interface MagicAura {
  strength: AuraStrength;
  school: MagicSchool;
}

export enum AuraStrength {
  FAINT = 'faint',
  MODERATE = 'moderate',
  STRONG = 'strong',
  OVERWHELMING = 'overwhelming',
}

export enum MagicSchool {
  ABJURATION = 'abjuration',
  CONJURATION = 'conjuration',
  DIVINATION = 'divination',
  ENCHANTMENT = 'enchantment',
  EVOCATION = 'evocation',
  ILLUSION = 'illusion',
  NECROMANCY = 'necromancy',
  TRANSMUTATION = 'transmutation',
}

export interface WeaponSpecialAbility {
  name: string;
  description: string;
  bonusEquivalent: number;
  conditions?: string[];
  effects: Effect[];
}

export enum AmmoType {
  ARROW = 'arrow',
  BOLT = 'bolt',
  BULLET = 'bullet',
  DART = 'dart',
  SHURIKEN = 'shuriken',
}

export interface EquipmentTemplate {
  id: string;
  name: string;
  type: EquipmentType;
  category: string;
  subcategory: string;
  source: string;
  basePrice: number;
  baseWeight: number;
  description: string;
  properties: Record<string, unknown>;
}

export enum EquipmentType {
  WEAPON = 'weapon',
  ARMOR = 'armor',
  SHIELD = 'shield',
  MAGIC_ITEM = 'magic_item',
  GEAR = 'gear',
}

export interface CarryingCapacity {
  light: number;
  medium: number;
  heavy: number;
  max: number;
}

export interface Equipment {
  weapons: Weapon[];
  armor: Armor[];
  shields: Shield[];
  magicItems: MagicItem[];
  gear: Gear[];

  // Equipment slot management — serialized as Record for Firestore
  equippedSlots: Map<EquipmentSlot, string>;

  encumbranceSettings: EncumbranceSettings;

  // Computed properties
  totalWeight: number;
  lightLoad: number;
  mediumLoad: number;
  heavyLoad: number;
  currentLoad: string;
  encumbranceLevel?: EncumbranceLevel;
  acPenalty: number;
  maxDexBonus: number;
  spellFailure: number;
}

export interface Weapon extends BaseItem {
  type: string; // simple, martial, exotic
  weaponGroup: string[];
  handedness: string; // one-handed, two-handed, light
  proficient: boolean;

  range: number;
  rangeIncrement?: number;
  size: Size;
  damageS: string; // Damage for small
  damageM: string; // Damage for medium
  critical: string; // e.g., "19-20/x2"
  damageType: string[]; // slashing, piercing, bludgeoning
  special: string[];

  isRanged: boolean;
  isThrown: boolean;
  ammunition?: AmmoType;

  equipped: boolean;
  masterwork: boolean;
  material: string;

  enhancement: number;
  weaponAbilities: {
    name: string;
    description: string;
    cost: number;
    effects: Effect[];
  }[];
  specialAbilities: WeaponSpecialAbility[];

  attackBonuses: Bonus[];
  damageBonuses: Bonus[];

  usesAmmunition: boolean;
  ammunitionType: string;
  loadedAmmunition?: {
    id: string;
    name: string;
    enhancement: number;
    special: string[];
  };

  totalAttackBonus: number;
  totalDamage: string;
}

export interface Armor extends BaseItem {
  type: string; // light, medium, heavy
  proficient: boolean;

  acBonus: number;
  maxDexBonus: number;
  checkPenalty: number;
  spellFailure: number;
  speed30: number;
  speed20: number;

  masterwork: boolean;
  material: string;
  equipped: boolean;

  enhancement: number;
  armorAbilities: {
    name: string;
    description: string;
    cost: number;
    effects: Effect[];
  }[];

  totalAcBonus: number;
  totalCheckPenalty: number;
}

export interface Shield extends BaseItem {
  type: string; // light, heavy, tower
  proficient: boolean;

  acBonus: number;
  checkPenalty: number;
  spellFailure: number;

  masterwork: boolean;
  material: string;
  equipped: boolean;

  enhancement: number;
  shieldAbilities: {
    name: string;
    description: string;
    cost: number;
    effects: Effect[];
  }[];

  totalAcBonus: number;
  totalCheckPenalty: number;
}

export interface MagicItem extends BaseItem {
  type: string; // wondrous, ring, staff, etc.
  slot: string;
  equipmentSlot?: EquipmentSlot;
  aura: string;
  magicAura: MagicAura;
  casterLevel: number;
  activationType: string;
  requirements: string[];

  charges?: {
    maximum: number;
    current: number;
    rechargeMethod?: string;
  };

  usesPerDay?: {
    maximum: number;
    current: number;
  };

  effects: Effect[];
  continuousEffects: Effect[];
  activatedEffects: Effect[];

  equipped: boolean;
  active: boolean;
}

export interface Gear extends BaseItem {
  type: string; // adventuring, alchemical, tool, etc.
  isConsumable: boolean;
  usesRemaining?: number;
}
