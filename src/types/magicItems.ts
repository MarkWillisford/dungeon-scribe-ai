import { Effect, Alignment } from './base';
import type { MagicAura } from './equipment';
import type { GameDataSource } from './gameData';

// ---------------------------------------------------------------------------
// Slot type — worn location for magic items
// Distinct from EquipmentSlot (which tracks character equipment assignments)
// ---------------------------------------------------------------------------

export type ItemSlot =
  | 'armor'
  | 'belt'
  | 'body'
  | 'chest'
  | 'eyes'
  | 'feet'
  | 'hands'
  | 'head'
  | 'headband'
  | 'neck'
  | 'ring' // item definition slot — character equips to ring_left or ring_right (EquipmentSlot)
  | 'shield'
  | 'shoulders'
  | 'wrists'
  | 'main_hand'
  | 'off_hand'
  | 'none';

// ---------------------------------------------------------------------------
// Physical statistics
// ---------------------------------------------------------------------------

export interface ItemPhysicalStats {
  hardness: number;
  hitPoints: number;
  breakDC: number;
  savingThrowBonus?: number; // e.g. wand: Fort +2 vs. fire damage
}

// ---------------------------------------------------------------------------
// Activation
// ---------------------------------------------------------------------------

export type ActivationCategory =
  | 'continuous' // always active when worn/held
  | 'command_word' // speak a word — costs an action
  | 'spell_trigger' // requires knowing the spell (wands, staves)
  | 'spell_completion' // read from the item (scrolls)
  | 'use_activated'; // works by using it — drink potion, open bag, etc.

export type ActivationAction = 'standard' | 'move' | 'swift' | 'free' | 'immediate';
// only relevant for command_word and similar — omit for continuous/use_activated

// ---------------------------------------------------------------------------
// Construction requirements
// ---------------------------------------------------------------------------

export interface ConstructionRequirements {
  feats: string[]; // e.g. ['Craft Wondrous Item']
  spells: string[]; // spell IDs
  specialRequirements?: string[]; // free text for unusual prerequisites
  cost: number; // gp (typically price / 2)
}

// ---------------------------------------------------------------------------
// Spell-like abilities on items
// ---------------------------------------------------------------------------

export interface ItemSpellLikeAbility {
  spellId: string;
  spellName: string;
  casterLevel: number;
  usesPerDay?: number; // 0 = at will; omit when SlaBlock.usesPerDay provides the shared pool
  saveDC?: number;
  activationAction: ActivationAction;
}

// SlaBlock groups one or more SLAs with a shared daily pool.
//   usesPerDay on the block  → shared pool: the wielder picks one spell per use
//   usesPerDay absent        → independent: each spell uses its own ItemSpellLikeAbility.usesPerDay
//
// Examples:
//   [{ spells: [{ spellId: 'fly', usesPerDay: 3, ... }] }]              — 3/day independent
//   [{ usesPerDay: 1, spells: [fly, invisibility, ...] }]               — choose one per day
export interface SlaBlock {
  usesPerDay?: number; // shared pool across all spells in this block; 0 = at will
  spells: ItemSpellLikeAbility[];
}

// ---------------------------------------------------------------------------
// Conditional effects (class-gated, race-gated, target-type-gated powers)
// e.g. Holy Avenger (paladin only), Bane (target type), Dwarven Thrower
// ---------------------------------------------------------------------------

export interface ConditionalEffect {
  condition: 'wielder_class' | 'wielder_race' | 'wielder_alignment' | 'target_type';
  classId?: string;
  raceId?: string;
  alignment?: Alignment;
  creatureType?: string; // for Bane / Dwarven Thrower pattern
  enhancementBonus?: number; // replaces base enhancement when condition met
  effects?: Effect[];
  spellLikeAbilities?: SlaBlock[];
}

// ---------------------------------------------------------------------------
// Weapon and armor special abilities
// ---------------------------------------------------------------------------

export interface ItemSpecialAbility {
  id: string;
  name: string;
  description: string;
  bonusEquivalent?: number; // omit for non-standard abilities (Holy Avenger aura, etc.)
  casterLevel: number;
  effects: Effect[];
  spellLikeAbilities?: SlaBlock[];
  alignmentRequired?: Alignment[];
  conditionalEffects?: ConditionalEffect[];
}

// ---------------------------------------------------------------------------
// Scaling items (Pathfinder Unchained)
// ---------------------------------------------------------------------------

export interface ScalingTier {
  triggerType: 'character_level' | 'class_level' | 'bab' | 'caster_level';
  triggerClass?: string; // only for class_level
  threshold: number;

  // What changes at this tier — any combination
  enhancementBonus?: number;
  additionalEffects?: Effect[];
  additionalSpellLikeAbilities?: SlaBlock[];
  additionalGrantedFeats?: string[];
  notes?: string; // free text for complex unlocks
}

export interface LevelingScaling {
  scalingTiers: ScalingTier[];
  scalingItemTier?: 'bauble' | 'prize' | 'wonder';
  clScalesWithCharacterLevel?: boolean;
  maxEffectiveCL?: number;
}

// ---------------------------------------------------------------------------
// Overlays — any combination may be present simultaneously on any item
// ---------------------------------------------------------------------------

export interface ItemCurse {
  curseType:
    | 'delusion' // appears to work normally
    | 'opposite_effect' // does the reverse
    | 'intermittent' // works unreliably
    | 'requirement' // demands a condition
    | 'drawback' // automatic negative effect
    | 'different_effect'; // does something unrelated
  description: string;
  appearsAs: string; // "appears to be a +2 longsword"
  removalDC: number; // 10 + item CL for remove curse
}

export interface IntelligentItemProperties {
  intelligence: number;
  wisdom: number;
  charisma: number;
  alignment: Alignment;
  ego: number;
  communication: ('empathy' | 'speech' | 'telepathy')[];
  languages: string[];
  senses: string[]; // "darkvision 60 ft.", "read magic", etc.
  powers: string[]; // free text — structure further if needed
  specialPurpose?: string;
  dedicatedPowers?: string[];
}

export interface ArtifactProperties {
  tier: 'minor' | 'major';
  destruction?: string; // specific method to destroy it
}

// ---------------------------------------------------------------------------
// Item category
// ---------------------------------------------------------------------------

export type MagicItemCategory =
  | 'wondrous'
  | 'ring'
  | 'staff'
  | 'rod'
  | 'wand'
  | 'potion'
  | 'scroll'
  | 'magic_weapon'
  | 'magic_armor'
  | 'magic_shield'
  | 'ioun_stone';

// ---------------------------------------------------------------------------
// Base definition interface — shared by all 11 categories
// MagicAura, AuraStrength, MagicSchool are imported from equipment.ts
// ---------------------------------------------------------------------------

export interface MagicItemDefinition {
  id: string;
  name: string;
  category: MagicItemCategory;
  source: string | GameDataSource; // string during static data phase; GameDataSource after Firestore migration
  isOfficial: boolean;

  aura: MagicAura[]; // array because items can have multiple schools (e.g. "moderate abjuration and faint transmutation")
  casterLevel: number;
  slot: ItemSlot;
  requiresFreeHand?: boolean;

  price: number | null; // null = priceless (artifacts)
  weight: number | null; // null = negligible

  description: string;
  construction: ConstructionRequirements;
  physicalStats: ItemPhysicalStats;

  activationCategory: ActivationCategory;
  activationAction?: ActivationAction;

  effects: Effect[];
  grantedFeats?: string[]; // feat IDs — suppressed in antimagic field
  spellLikeAbilities?: SlaBlock[];
  conditionalEffects?: ConditionalEffect[]; // class/race/alignment-gated powers (e.g. Bracers of the Merciful Knight, Holy Avenger)
  useMagicDeviceDC?: number;

  // Overlays — any combination may be present simultaneously
  curse?: ItemCurse;
  intelligentItem?: IntelligentItemProperties;
  artifactProperties?: ArtifactProperties;
  levelingScaling?: LevelingScaling;
}

// ---------------------------------------------------------------------------
// Category-specific extensions
// ---------------------------------------------------------------------------

export interface WondrousItemDefinition extends MagicItemDefinition {
  category: 'wondrous';
  charges?: { maximum: number; rechargeMethod?: string };
}

export interface RingDefinition extends MagicItemDefinition {
  category: 'ring';
}

export interface StaffDefinition extends MagicItemDefinition {
  category: 'staff';
  requiresFreeHand: true;
  spells: {
    spellId: string;
    spellName: string;
    spellLevel: number;
    casterLevel: number;
    chargesRequired: 1 | 2 | 3;
  }[];
  maximumCharges: 10;
}

export interface RodDefinition extends MagicItemDefinition {
  category: 'rod';
  requiresFreeHand: true;
  charges?: { maximum: number; rechargeMethod?: string };
  metamagicType?: string; // "Empower", "Maximize", etc.
  metamagicTier?: 'lesser' | 'normal' | 'greater'; // max spell level it applies to
}

export interface WandDefinition extends MagicItemDefinition {
  category: 'wand';
  requiresFreeHand: true;
  spellId: string;
  spellName: string;
  spellLevel: number; // max 4 per rules; DM may override
  spellLevelDmOverride?: boolean; // flag when DM allowed above-limit spell level
  spellCasterClass: string;
  maximumCharges: 50;
  useMagicDeviceDC: number; // required on wands
}

export interface PotionDefinition extends MagicItemDefinition {
  category: 'potion';
  spellId: string;
  spellName: string;
  spellLevel: number; // max 3 per rules; DM may override
  spellLevelDmOverride?: boolean;
  spellCasterClass: string;
}

export interface ScrollDefinition extends MagicItemDefinition {
  category: 'scroll';
  scrollType: 'arcane' | 'divine';
  spellId: string;
  spellName: string;
  spellLevel: number;
  spellCasterClass: string;
  useMagicDeviceDC: number; // required on scrolls
}

export interface MagicWeaponDefinition extends MagicItemDefinition {
  category: 'magic_weapon';
  baseWeaponId: string; // → WeaponDefinition.id
  enhancementBonus: 1 | 2 | 3 | 4 | 5;
  weaponSpecialAbilities: ItemSpecialAbility[];
  // Rule: enhancementBonus + sum of bonusEquivalent values ≤ 10
}

export interface MagicArmorDefinition extends MagicItemDefinition {
  category: 'magic_armor';
  baseArmorId: string; // → ArmorDefinition.id
  enhancementBonus: 1 | 2 | 3 | 4 | 5;
  armorSpecialAbilities: ItemSpecialAbility[];
}

export interface MagicShieldDefinition extends MagicItemDefinition {
  category: 'magic_shield';
  baseShieldId: string; // → ShieldDefinition.id
  enhancementBonus: 1 | 2 | 3 | 4 | 5;
  shieldSpecialAbilities: ItemSpecialAbility[];
  allowsHandUse?: boolean; // true for bucklers
}

// ---------------------------------------------------------------------------
// Ioun stones
// ---------------------------------------------------------------------------

// Resonance power granted when an ioun stone is slotted in a wayfinder.
// All three grades (standard/cracked/flawed) of a stone share the same resonance power.
// Source: Seekers of Secrets (primary), PFS Field Guide, PFS Primer, Inner Sea Combat, others.
// Wayfinder of Hidden Strength shape-based resonance override is modeled on its wondrous item
// entry, not on the stone.
export interface IounStoneResonancePower {
  description: string; // always present — full rules text
  // Optional structured fields for simple numeric bonus resonance powers:
  bonusType?: 'competence' | 'insight' | 'resistance' | 'sacred' | 'circumstance';
  bonusValue?: number;
  bonusTarget?: string; // e.g. 'fortitude_saves', 'combat_maneuver_checks'
  // Flags for special cases:
  requiresHoldingWayfinder?: boolean; // e.g. Pale Lavender / Lavender and Green Ellipsoid
  consumesStone?: boolean; // e.g. Clear Spindle — destroys on use
}

export interface IounStoneDefinition extends MagicItemDefinition {
  category: 'ioun_stone';
  color: string; // "dusty rose prism"
  shape: string; // "prism", "rhomboid", "ellipsoid", etc.
  iounVariant?: 'standard' | 'cracked' | 'flawed';
  // Cracked/flawed variants are separate definition entries (different IDs, prices, effects)
  // slot is always 'none' — floating/embedded/wayfinder state lives on CharacterMagicItem
  resonancePower?: IounStoneResonancePower; // undefined = no resonance (e.g. Dark Green Rhomboid)
}

// ---------------------------------------------------------------------------
// Character instance — one per owned item on a character sheet
// ---------------------------------------------------------------------------

export type IounStoneState = 'floating' | 'embedded' | 'wayfinder';

// Recipe for reconstructing a generated item definition without a Firestore document.
// Checked before definitionId lookup — if present, definitionId is undefined.
export type GeneratedItemRecipe =
  | {
      recipe: 'wand' | 'potion' | 'scroll';
      spellId: string;
      spellLevel: number;
      casterLevel: number;
      casterClass: string;
    }
  | {
      recipe: 'magic_weapon' | 'magic_armor' | 'magic_shield';
      baseItemId: string;
      enhancementBonus: number;
      abilityIds: string[];
    };

export interface CharacterMagicItem {
  instanceId: string; // UUID, unique to this character's item
  definitionId?: string; // → MagicItemDefinition.id; undefined for generated items (use generatedFrom)
  name: string; // denormalized for display

  equipped: boolean;
  equippedSlot?: Exclude<ItemSlot, 'ring'> | 'ring_left' | 'ring_right'; // rings: use ring_left/ring_right to track which finger
  charges?: number; // current charges remaining

  // Identification state
  identified: boolean; // has the item been identified at all?
  identifiedAs?: string; // what the player currently thinks it is (may be wrong for cursed items)
  playerKnowsCurse?: boolean; // for cursed items: does the player know?

  // Ioun stone only
  iounState?: IounStoneState;

  // Generated items (wands, potions, scrolls, runtime-built magic weapons/armor/shields).
  // When present, definitionId is undefined — call reconstructDefinition(generatedFrom) instead.
  generatedFrom?: GeneratedItemRecipe;

  // DM additions to a named item (e.g. Bane added to a Holy Avenger).
  // Applied on top of the base definition at runtime.
  additionalSpecialAbilities?: ItemSpecialAbility[];

  notes?: string;
  dmOverrides?: Record<string, unknown>;
}
