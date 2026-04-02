// Base types and enums used throughout the application

export enum Size {
  Fine = 'Fine',
  Diminutive = 'Diminutive',
  Tiny = 'Tiny',
  Small = 'Small',
  Medium = 'Medium',
  Large = 'Large',
  Huge = 'Huge',
  Gargantuan = 'Gargantuan',
  Colossal = 'Colossal',
}

export enum Alignment {
  LawfulGood = 'Lawful Good',
  NeutralGood = 'Neutral Good',
  ChaoticGood = 'Chaotic Good',
  LawfulNeutral = 'Lawful Neutral',
  TrueNeutral = 'True Neutral',
  ChaoticNeutral = 'Chaotic Neutral',
  LawfulEvil = 'Lawful Evil',
  NeutralEvil = 'Neutral Evil',
  ChaoticEvil = 'Chaotic Evil',
}

export enum BABProgression {
  Full = 'Full', // 1 per level (fighter)
  Medium = 'Medium', // 3/4 per level (cleric)
  Low = 'Low', // 1/2 per level (wizard)
}

export enum SaveProgression {
  Good = 'Good', // 2 + 1/2 per level
  Poor = 'Poor', // 0 + 1/3 per level
}

// Bonus types for stacking rules
// dodge and untyped stack; all other types take highest only
export enum BonusType {
  ALCHEMICAL = 'alchemical',
  ARMOR = 'armor',
  CIRCUMSTANCE = 'circumstance',
  COMPETENCE = 'competence',
  DEFLECTION = 'deflection',
  DODGE = 'dodge',
  ENHANCEMENT = 'enhancement',
  INHERENT = 'inherent',
  INSIGHT = 'insight',
  LUCK = 'luck',
  MORALE = 'morale',
  NATURAL = 'natural',
  PROFANE = 'profane',
  RACIAL = 'racial',
  RESISTANCE = 'resistance',
  SACRED = 'sacred',
  SHIELD = 'shield',
  SIZE = 'size',
  TRAIT = 'trait',
  UNTYPED = 'untyped',
}

// Base Item interface that all item types extend
export interface BaseItem {
  id: string;
  name: string;
  weight: number; // Weight per unit in pounds
  quantity: number;
  description: string;
  cost: number; // Cost in gold pieces
  isCarried: boolean;
  location: string; // Where it's stored (backpack, pouch, etc.)
  notes: string;
}

// Bonus system to track individual bonuses
export interface Bonus {
  type: BonusType;
  value: number;
  source: string;
  duration?: {
    type: string; // Rounds, minutes, hours, etc.
    value: number;
    remaining: number;
  };
  condition?: string; // Condition when bonus applies
  active?: boolean; // Defaults to true
}

// Structured condition for effects
export interface EffectCondition {
  type:
    | 'always'
    | 'weapon_type'
    | 'weapon_group'
    | 'range'
    | 'target_type'
    | 'armor_type'
    | 'custom';
  params: Record<string, string | number | boolean>;
  description: string;
}

// Duration for temporary effects
export interface EffectDuration {
  type: 'rounds' | 'minutes' | 'hours' | 'permanent' | 'encounter' | string;
  value: number;
  remaining: number;
  startTime?: number;
}

// Activation mode for effects
export interface EffectActivation {
  type: 'passive' | 'toggle' | 'use' | 'immediate' | 'swift' | 'standard' | string;
  usesPerDay?: number;
  usesRemaining?: number;
  active: boolean;
}

// ---- Effect type system ----

// The nature of the effect — controls how the pipeline interprets it.
// 'special' contract: pipeline ignores it entirely; UI renders it as readable ability text only.
// Items in the Feature Backlog use 'special' until their pipeline phase is built.
export type EffectType =
  | 'bonus' // numeric add — bonusType controls stacking
  | 'penalty' // numeric subtract — always stacks
  | 'damage' // damage dealt (weapon abilities, bonus on-hit damage)
  | 'resistance' // DR / SR / energy resistance (own stacking rules)
  | 'ability_substitution' // use one ability score in place of another
  | 'grant_sense' // darkvision, blindsight, tremorsense, scent, etc.
  | 'grant_movement' // grants a movement mode (fly, swim, burrow, climb)
  | 'immunity' // immune to a condition, damage type, or school
  | 'override' // replaces a stat value entirely
  | 'special'; // qualitative — pipeline ignores; UI displays as ability text

// Component types for EffectTarget
export type AbilityScoreTarget = 'str' | 'dex' | 'con' | 'int' | 'wis' | 'cha';
// Uppercase refs used as VALUES in ability_substitution effects (e.g. value: 'DEX')
export type AbilityScoreRef = 'STR' | 'DEX' | 'CON' | 'INT' | 'WIS' | 'CHA';
export type SaveType = 'fortitude' | 'reflex' | 'will' | 'all';
export type SkillName =
  | 'acrobatics'
  | 'appraise'
  | 'bluff'
  | 'climb'
  | 'craft'
  | 'diplomacy'
  | 'disable_device'
  | 'disguise'
  | 'escape_artist'
  | 'fly'
  | 'handle_animal'
  | 'heal'
  | 'intimidate'
  | 'knowledge_arcana'
  | 'knowledge_dungeoneering'
  | 'knowledge_engineering'
  | 'knowledge_geography'
  | 'knowledge_history'
  | 'knowledge_local'
  | 'knowledge_nature'
  | 'knowledge_nobility'
  | 'knowledge_planes'
  | 'knowledge_religion'
  | 'knowledge_martial' // Path of War
  | 'linguistics'
  | 'perception'
  | 'perform'
  | 'profession'
  | 'ride'
  | 'sense_motive'
  | 'sleight_of_hand'
  | 'spellcraft'
  | 'stealth'
  | 'survival'
  | 'swim'
  | 'use_magic_device'
  | 'all';
export type ACComponent =
  | 'armor'
  | 'shield'
  | 'natural'
  | 'deflection'
  | 'dodge'
  | 'insight'
  | 'profane'
  | 'sacred'
  | 'size';
export type AttackMode = 'melee' | 'ranged' | 'thrown' | 'all';
export type SpeedType = 'base' | 'fly' | 'swim' | 'burrow' | 'climb';
export type DamageType =
  | 'fire'
  | 'cold'
  | 'electricity'
  | 'acid'
  | 'sonic'
  | 'force'
  | 'negative'
  | 'positive'
  | 'piercing'
  | 'slashing'
  | 'bludgeoning';
export type SenseType =
  | 'darkvision'
  | 'low_light_vision'
  | 'blindsight'
  | 'blindsense'
  | 'tremorsense'
  | 'scent'
  | 'lifesense';
export type MovementType = 'fly' | 'swim' | 'burrow' | 'climb';
export type ImmunityTarget =
  | DamageType
  | 'fear'
  | 'poison'
  | 'disease'
  | 'sleep'
  | 'paralysis'
  | 'mind_affecting'
  | 'bleed'
  | 'death_effects'
  | 'exhaustion'
  | 'fatigue';

// What the effect modifies. Template literal types enforce structure without a flat enum.
// Rules:
//   - Well-known stat paths use the typed template literals below for IDE autocomplete + validation.
//   - Any compound path (namespace.detail) is accepted via `${string}.${string}` — this covers
//     ability-substitution compound paths, maneuver-specific CMB/CMD, class resources, etc.
//   - Bare single-word targets are only valid if explicitly listed.
//   - 'special' is intentionally NOT a valid target — if type is 'special', use a descriptive
//     compound key like 'special.ability' or 'special.your_feat_name'.
export type EffectTarget =
  // Well-known stat paths (IDE autocomplete + pipeline compatibility)
  | `ability.${AbilityScoreTarget}`
  | `save.${SaveType}`
  | `skill.${SkillName}`
  | `ac.${ACComponent}`
  | 'ac' // misc AC (catch-all in pipeline)
  | `attack.${AttackMode}`
  | `damage.${AttackMode}`
  | 'weapon.damage' // bonus on-hit damage (e.g. flaming, bane)
  | `speed.${SpeedType}`
  | `energy_resistance.${DamageType}`
  | `energy_resistance` // unspecified energy resistance type
  | `spell.${'save_dc' | 'caster_level' | 'caster_level_check' | 'concentration'}`
  // Typed targets for structured effect types
  | SenseType // for grant_sense
  | MovementType // for grant_movement
  | ImmunityTarget // for immunity
  // Combat stats
  | 'dr'
  | 'sr'
  | 'initiative'
  | 'cmb'
  | 'cmd'
  // Hit points
  | 'hp'
  | 'hp.per_level'
  // Known single-word misc targets
  | 'sneak_attack'
  | 'critical_confirmation'
  | 'critical_threat_range'
  | 'attack_of_opportunity'
  // Compound path catch-all — accepts any 'namespace.detail' format.
  // Use this for: CMB maneuver specifics (cmb.trip), class resources (resource.crystalline_dust),
  // ability-substitution paths (skills.charisma_based, attack_rolls.favored_weapon),
  // healing modifiers (healing.hp_per_die), special ability keys (special.ability), etc.
  | `${string}.${string}`;

// Effects system for modifiers
export interface Effect {
  type: EffectType;
  bonusType?: BonusType | string; // Bonus type for stacking; defaults to UNTYPED if omitted
  target: EffectTarget;
  value: number | string; // numeric value or formula string; for ability_substitution use AbilityScoreRef
  source: string;

  condition?: EffectCondition;
  duration?: EffectDuration;
  activation?: EffectActivation;
}
