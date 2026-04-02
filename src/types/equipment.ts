import { BaseItem, Size, Bonus, Effect } from './base';
import type { CharacterMagicItem } from './magicItems';

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
  FIREARM = 'firearm',
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
  magicItems: CharacterMagicItem[];
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

// MagicItem instance type moved to src/types/magicItems.ts (CharacterMagicItem)

export interface Gear extends BaseItem {
  type: string; // adventuring, alchemical, tool, etc.
  isConsumable: boolean;
  usesRemaining?: number;
}

// --- Strongly-typed definition types for static data registry ---

export type WeaponProficiency = 'simple' | 'martial' | 'exotic';
export type WeaponHandedness = 'light' | 'one-handed' | 'two-handed';
export type ArmorWeight = 'light' | 'medium' | 'heavy';
export type ShieldWeight = 'buckler' | 'light' | 'heavy' | 'tower';
export type WeaponDamageType = 'bludgeoning' | 'piercing' | 'slashing';
export type GearCategory =
  | 'adventuring'
  | 'alchemical'
  | 'tool'
  | 'clothing'
  | 'kit'
  | 'container'
  | 'illumination'
  | 'writing'
  | 'food'
  | 'entertainment'
  | 'animal'
  | 'ammunition'
  | 'remedy'
  | 'class_tool';

export interface WeaponDefinition {
  id: string;
  name: string;
  proficiency: WeaponProficiency;
  weaponType: 'melee' | 'ranged';
  handedness: WeaponHandedness;
  weaponGroup: string[];
  cost: number;
  weight: number;
  damageS: string;
  damageM: string;
  critical: string;
  damageType: WeaponDamageType[];
  special: string[];
  range: number;
  isThrown: boolean;
  isDoubleWeapon?: boolean;
  ammunition?: AmmoType;
  description: string;
  source: string;
}

export interface ArmorDefinition {
  id: string;
  name: string;
  armorType: ArmorWeight;
  cost: number;
  weight: number;
  acBonus: number;
  maxDexBonus: number;
  checkPenalty: number;
  spellFailure: number;
  speed30: number;
  speed20: number;
  description: string;
  source: string;
}

export interface ShieldDefinition {
  id: string;
  name: string;
  shieldType: ShieldWeight;
  cost: number;
  weight: number;
  acBonus: number;
  checkPenalty: number;
  spellFailure: number;
  description: string;
  source: string;
}

export interface GearDefinition {
  id: string;
  name: string;
  gearType: GearCategory;
  cost: number;
  weight: number;
  description: string;
  isConsumable: boolean;
  quantity?: number;
  source: string;
}

export interface MaterialDefinition {
  id: string;
  name: string;
  description: string;
  weaponCostModifier?: string;
  armorCostModifier?: string;
  shieldCostModifier?: string;
  hardness?: number;
  hpPerInch?: number;
  properties: string[];
  applicableTo: ('weapon' | 'armor' | 'shield')[];
  source: string;
}

export interface ServiceDefinition {
  id: string;
  name: string;
  serviceType:
    | 'spellcasting'
    | 'hireling'
    | 'lodging'
    | 'transport'
    | 'food_drink'
    | 'entertainment';
  cost: number;
  costUnit?: string;
  description: string;
  source: string;
}
