// Favored Class Bonus (FCB) options — Firestore collection: 'favoredClassBonuses/{id}'
//
// Pathfinder 1e's core rule: each level in a character's favored class grants +1 HP or +1 skill rank.
// The Advanced Player's Guide (2010) and later books added a THIRD option per race × class combination:
// a mechanical alternate (e.g., Dwarf Fighter gets +1 CMD vs bull rush/trip, Aasimar Summoner gets
// DR/evil on their eidolon).
//
// FavoredClassBonusOption documents cover ONLY the alternate choices. The HP / skill-rank options
// are universal and implicit — never stored as documents.
//
// Some race × class combos have multiple entries (e.g., Dwarf Paladin has 2, Dwarf Wizard has 2).
// Each variant is a distinct document; the player may invest different class levels into different
// variants. Doc IDs use semantic suffixes to disambiguate: `dwarf-paladin-concentration`,
// `dwarf-paladin-creature-knowledge`.
//
// The `mechanicalEffect` field drives runtime application. PR 1 ships the data. PR 2 wires
// ModifierPipelineService to consume mechanicalEffect and emit Effect entries at the correct
// investment level (count of class levels spent on this alternate).

import type { GameDataSource } from './gameData';
import type { DataQualityFields } from './base';

// ---- Fractional bonus representation ----
//
// Pathfinder's "+1/N per level" rule: each class level invested in this alternate contributes
// `numerator / denominator` toward a whole-number bonus. Fractions accumulate literally; the
// total bonus is `floor(timesPicked * numerator / denominator)`.
//
// Examples:
//   "+1 per level"      → { numerator: 1, denominator: 1 }   (integer per level)
//   "+1/2 per level"    → { numerator: 1, denominator: 2 }   (whole bonus every 2 levels)
//   "+1/3 per level"    → { numerator: 1, denominator: 3 }
//   "+1/4 per level"    → { numerator: 1, denominator: 4 }
//   "+1/6 per level"    → { numerator: 1, denominator: 6 }
export interface FCBFraction {
  numerator: number;
  denominator: number;
}

// ---- Mechanical effect discriminated union ----
//
// Every FCB entry carries a mechanicalEffect that the runtime pipeline converts into actual
// character-state modifications. Variants are grouped by pattern. A scraper that cannot fit
// an alternate into a structured variant MUST emit { type: 'unmapped', reason } — this keeps
// data ingestion unblocked while surfacing coverage gaps for manual review.

// Which entity receives a bonus targeting a pet-like companion (several races bump eidolon AC,
// familiar natural armor, etc.).
export type FCBRecipient =
  | 'self'
  | 'animal_companion'
  | 'familiar'
  | 'eidolon'
  | 'spirit_animal'
  | 'phantom' // spiritualist manifestation
  | 'bonded_creature'; // generic pet fallback

// Flat bonus applied to a standard ModifierPipeline target.
//
// Examples:
//   "Add +1 to the Fighter's CMD when resisting a bull rush or trip"
//     → { type: 'bonus', bonusType: 'untyped', target: 'cmd',
//         perLevelValue: {1,1}, vsCombatManeuver: ['bull_rush','trip'] }
//
//   "Gain a +1/2 bonus on wild empathy checks ... that live underground" (dwarf ranger)
//     → { type: 'bonus', bonusType: 'untyped', target: 'wild_empathy',
//         perLevelValue: {1,2}, conditionDescription: 'animals and magical beasts that live underground' }
//
//   "Add +1/2 to the cavalier's bonus to damage against targets of his challenge"
//     → { type: 'bonus', bonusType: 'untyped', target: 'challenge_damage',
//         perLevelValue: {1,2} }
export interface FCBEffectBonus {
  type: 'bonus';
  bonusType: string; // BonusType enum value — kept as string to allow FCB-specific narrow targets
  target: string; // pipeline target: 'cmd' | 'ac' | 'fort' | 'weapon_damage' | 'skill_{name}' | etc.
  perLevelValue: FCBFraction;

  // When the bonus targets an entity other than the character (companion/eidolon/familiar/etc.).
  // Undefined = applies to self.
  recipient?: FCBRecipient;

  // Accumulated bonus is only applied in whole-number multiples of this step.
  // Example: Elf Barbarian speed (+1/level, applies only in increments of 5) →
  //   perLevelValue {1,1}, applyInIncrementsOf 5. After 7 picks raw = 7, effective = 5.
  applyInIncrementsOf?: number;

  // Optional structured scope narrowing (pipeline uses these to decide when the bonus applies).
  vsCreatureType?: string[]; // e.g., ['outsider_evil']
  vsCombatManeuver?: string[]; // e.g., ['bull_rush', 'trip']
  inTerrain?: string[]; // e.g., ['underground']
  withDescriptor?: string[]; // e.g., ['good', 'fire']
  withDamageType?: string[]; // e.g., ['acid']
  onlyWhenActive?: string; // feature that must be active: 'mutagen', 'rage', 'challenge'
  requiresPickOne?: boolean; // player picks the specific instance at FCB selection time
  pickOnePrompt?: string; // e.g., 'weapon type', 'creature type', 'judgment type'
  pickCount?: number; // count of picks required (default 1) — e.g., Human Fighter picks TWO maneuvers
  conditionDescription?: string; // free-text for anything not captured structurally
}

// Natural armor bump on self, companion, familiar, eidolon, spirit animal.
// Separated from 'bonus' because natural armor targets are entity-scoped (pipeline needs to know
// whether to apply to the PC, the companion sheet, the eidolon sheet, etc.).
export interface FCBEffectNaturalArmor {
  type: 'natural_armor';
  target: FCBRecipient;
  perLevelValue: FCBFraction;
  onlyWhenActive?: string; // e.g., alchemist mutagen
  conditionDescription?: string;
}

// Damage reduction bump, typically on eidolon/companion.
// Examples: Aasimar Summoner "DR 1/evil to eidolon, each additional selection +1/2 evil, max DR 10".
export interface FCBEffectDamageReduction {
  type: 'damage_reduction';
  target: FCBRecipient;
  damageType: string; // 'evil', 'cold iron', 'silver', 'adamantine'
  perLevelValue: FCBFraction;
  maxTotal?: number; // per-rule cap on cumulative DR (e.g., 10)
}

// Expands a tracked resource pool (rage rounds, bloodrage rounds, grit, panache, ki, bardic performance rounds).
// Maps to Character.resources[].max bump at runtime.
export interface FCBEffectResourcePool {
  type: 'resource_pool';
  resourceId: string; // 'rage_rounds' | 'bloodrage_rounds' | 'grit' | 'panache' | 'ki' | 'bardic_performance_rounds' | ...
  perLevelValue: FCBFraction;
}

// Treats the class as +X levels higher when calculating ONE specific feature's effects.
// Requires player to pick which instance (e.g., which bardic performance, which revelation, which judgment).
// Example: "Choose one bardic performance; treat the bard as +1/6 level higher when determining
//          the effects of that performance." (Aasimar Bard)
export interface FCBEffectClassLevelBump {
  type: 'class_level_bump';
  featureName: string; // 'bardic_performance' | 'judgment' | 'revelation' | 'magus_arcana' | 'painful_stare' | 'domain_power' | 'mercy' | ...
  perLevelValue: FCBFraction;
  requiresPickOne: boolean; // usually true
  pickOnePrompt?: string; // 'bardic performance' | 'revelation' | 'judgment type'
  scopeDescription?: string; // free-text for scopes like "only to determine duration"
}

// Adds to the uses/day count of a finite-use class feature.
// Example: "Select one domain power granted at 1st level ... The cleric adds +1/2 to the number of uses per day"
export interface FCBEffectFeatureUsesPerDay {
  type: 'feature_uses_per_day';
  featureName: string; // 'domain_power' | 'blessing' | 'hex' | 'magus_arcana' | 'rage_power' | ...
  perLevelValue: FCBFraction;
  requiresPickOne: boolean;
  pickOnePrompt?: string;
  pickOneConstraint?: string; // e.g., 'must be a 1st-level domain power usable (3 + Wis mod)/day'
}

// Arcane spell failure chance reduction. Accumulates toward a cap (typically 10%) at which the
// character also gains a listed armor proficiency feat.
// Example: "Reduce arcane spell failure chance for casting bard spells when wearing medium armor by +1%.
//          Once the total reaches 10%, the bard also receives Medium Armor Proficiency"
export interface FCBEffectArcaneSpellFailureReduction {
  type: 'arcane_spell_failure_reduction';
  armorCategory: 'light' | 'medium' | 'heavy';
  perLevelPercent: FCBFraction; // usually { 1, 1 }
  maxReduction: number; // typically 10
  unlockedFeatOnMax?: string; // 'medium_armor_proficiency' | 'heavy_armor_proficiency'
}

// Weapon non-proficiency penalty reduction (oracle-pattern).
// Example: "Reduce the penalty for not being proficient with one weapon by 1. When the nonproficiency
//          penalty for a weapon becomes 0 because of this ability, the oracle is treated as having the
//          appropriate Martial or Exotic Weapon Proficiency feat with that weapon."
export interface FCBEffectWeaponProficiencyChip {
  type: 'weapon_proficiency_chip';
  perLevelValue: FCBFraction; // usually { 1, 1 }
  requiresPickOne: true; // always true — player chooses the weapon
  unlockProficiencyAtZero: boolean;
}

// Firearm misfire reduction (gunslinger-pattern).
// Example: "Reduce the misfire chance for one type of firearm by 1/4. You cannot reduce the misfire
//          chance of a firearm below 1."
export interface FCBEffectFirearmMisfireReduction {
  type: 'firearm_misfire_reduction';
  perLevelValue: FCBFraction;
  requiresPickOne: true;
  minimumMisfire: number; // typically 1
}

// Caster level modifier, optionally scoped to school/descriptor/duration.
// Example: "Add +1/4 to the sorcerer's caster level when casting spells with the good descriptor" (Aasimar Sorcerer)
// Example: "Add 1/3 to the effective caster level of wizard abjuration spells, but only to determine duration" (Dwarf Wizard #2)
export interface FCBEffectCasterLevel {
  type: 'caster_level';
  scopeType: 'full' | 'duration_only' | 'sr_check_only' | 'concentration_only';
  perLevelValue: FCBFraction;
  schoolFilter?: string; // 'abjuration' | 'evocation' | etc.
  descriptorFilter?: string[]; // ['good', 'fire']
  terrainFilter?: string[]; // e.g., ['forest'] — Elf Sorcerer #2: CL bump for spells cast in chosen terrain
  requiresPickOne?: boolean; // e.g., choose a terrain at FCB selection time
  pickOnePrompt?: string;
  targetClass?: string; // when a specific class's CL is targeted (for prestige-advanced pools)
  conditionDescription?: string; // free-text scope not captured by school/descriptor/terrain (e.g., "spells granted by patron")
}

// Crafting speedup (wizard item creation pattern).
// Example: "Select one item creation feat known by the wizard. Whenever he crafts an item using that
//          feat, the amount of progress he makes in an 8-hour period increases by 200 gp (50 gp if
//          crafting while adventuring)."
export interface FCBEffectCraftingSpeedup {
  type: 'crafting_speedup';
  goldPerDay: number; // additional gp of progress per 8-hour workday
  goldPerDayAdventuring: number;
  requiresPickOne: true;
  pickOnePrompt: 'item_creation_feat';
}

// Hardness reduction on unarmed strike (dwarf monk / dwarf brawler).
// Example: "Reduce the hardness of any object made from clay, stone, or metal by 1 whenever the object
//          is struck by the monk's unarmed strike (minimum 0)."
// NOTE: This isn't a cumulative fraction — the bonus is a flat "-1" that always applies. Kept as
// a structured effect so it's discoverable; perLevelValue has denominator 1 (every level contributes +1
// to the reduction counter, but since the rule caps at "minimum 0 hardness", picking it more than once
// is functionally wasted unless the DM rules otherwise).
export interface FCBEffectHardnessReductionOnStrike {
  type: 'hardness_reduction_on_strike';
  materials: string[]; // ['clay', 'stone', 'metal']
  perLevelValue: FCBFraction;
  minimumResultingHardness: number; // typically 0
}

// Unique bonus pattern that doesn't fit the above variants but is still well-understood.
// Used for things like "increase painful stare damage by 1/4 point" (mesmerist), where the feature
// is uniquely the mesmerist's and the pipeline needs a feature-specific hook.
export interface FCBEffectFeatureNumericBump {
  type: 'feature_numeric_bump';
  featureName: string; // 'painful_stare' | 'social_grace' | ...
  bumpType: 'damage' | 'duration' | 'uses_per_day' | 'bonus' | 'other';
  perLevelValue: FCBFraction;
  conditionDescription?: string;
}

// Learn a discrete option — spell, formula, feat, rogue talent, hex, etc. — accumulated fractionally.
// Example: "Add one spell known from the oracle spell list. This spell must be at least one level
//          below the highest spell level the oracle can cast." (Human Oracle)
//   → perLevelValue {1,1}, optionType 'spell_known', listConstraint 'oracle spell list',
//     spellLevelConstraint 'at least 1 below highest castable'
// Example: "Gain 1/6 of a new bonus combat feat." (Human Warpriest)
//   → perLevelValue {1,6}, optionType 'combat_feat'
// Example: "Add 1/2 of an illusion spell from the sorcerer/wizard spell list that isn't on the magus
//          spell list to the magus's spellbook." (Gnome Magus #2)
//   → perLevelValue {1,2}, optionType 'spell_in_spellbook', listConstraint "sorcerer/wizard illusion not on magus list"
export interface FCBEffectLearnOption {
  type: 'learn_option';
  optionType:
    | 'extract_formula'
    | 'spell_known'
    | 'spell_in_spellbook'
    | 'spell_to_familiar'
    | 'spell_to_phantom'
    | 'feat'
    | 'combat_feat'
    | 'rogue_talent'
    | 'magus_arcana'
    | 'slayer_talent'
    | 'hex'
    | 'wild_talent'
    | 'shaman_hex'
    | 'witch_hex'
    | 'ninja_trick'
    | 'mesmerist_trick'
    | 'focus_power'
    | 'arcanist_exploit'
    | 'investigator_talent'
    | 'rage_power'
    | 'bonus_weapon_property'
    | 'alchemist_discovery'
    | 'phrenic_amplification';
  perLevelValue: FCBFraction;
  spellLevelConstraint?: string; // e.g., 'at least 1 level below highest castable'
  listConstraint?: string; // e.g., 'cleric spell list not on shaman list', 'illusion school only'
  requiresPickOne?: boolean; // true when option selection needs a further sub-pick beyond the option itself
  pickOnePrompt?: string;
  scopeDescription?: string;
}

// Compound — entry describes multiple distinct effects combined into one bonus selection.
// Example: "Gain a +1/4 bonus on Perception checks when underground and +1/2 bonus to the
//          investigator's trap sense ability regarding stone traps." (Dwarf Investigator)
export interface FCBEffectCompound {
  type: 'compound';
  effects: FCBMechanicalEffect[];
}

// Fallback — scraper encountered an entry that doesn't fit any structured variant. PR 2's pipeline
// wiring reviews these manually and either extends the union or explicitly accepts a free-text-only
// interpretation (with no runtime application). NEVER the default; scrapers must make a good-faith
// attempt at a structured variant before using this.
export interface FCBEffectUnmapped {
  type: 'unmapped';
  reason: string; // why scraper couldn't structure this; e.g., 'Requires runtime hook for [X] feature not yet modeled'
}

export type FCBMechanicalEffect =
  | FCBEffectBonus
  | FCBEffectNaturalArmor
  | FCBEffectDamageReduction
  | FCBEffectResourcePool
  | FCBEffectClassLevelBump
  | FCBEffectFeatureUsesPerDay
  | FCBEffectArcaneSpellFailureReduction
  | FCBEffectWeaponProficiencyChip
  | FCBEffectFirearmMisfireReduction
  | FCBEffectCasterLevel
  | FCBEffectCraftingSpeedup
  | FCBEffectHardnessReductionOnStrike
  | FCBEffectFeatureNumericBump
  | FCBEffectLearnOption
  | FCBEffectCompound
  | FCBEffectUnmapped;

// ---- The collection document ----

export interface FavoredClassBonusOption extends DataQualityFields {
  // Unique document ID.
  // Base pattern: '{race-slug}-{class-slug}'.
  // Multi-variant pattern: '{race-slug}-{class-slug}-{semantic-suffix}'.
  // Examples: 'dwarf-fighter', 'dwarf-paladin-concentration', 'dwarf-paladin-creature-knowledge',
  //           'aasimar-summoner', 'dwarf-wizard-crafting', 'dwarf-wizard-abjuration-duration'.
  id: string;

  // Must match ExpandedRaceData.name exactly (case-sensitive).
  // Used by GameDataService.getFavoredClassBonuses(raceName, className).
  raceName: string;

  // Must match ExpandedClassData.name exactly (case-sensitive).
  className: string;

  // Short UI label for the picker row. Scraper-synthesized from the first clause of the description.
  // Examples: 'Bonus Rage Round', 'Bull Rush/Trip Resist', 'Smite Knowledge'.
  // Not a canonical Paizo label — optimized for picker UX at narrow screen widths.
  shortName: string;

  // Verbatim rules text from the source book. Used in full-description display and validation report.
  // Never edited by the player.
  description: string;

  // Minimum class level required before the player can SELECT this FCB at level-up.
  // Uncommon — most FCBs are selectable from level 1.
  // Example: Gnome Monk — "A monk must be at least 5th level to select this benefit."
  minimumClassLevel?: number;

  // Runtime effect model. Consumed by ModifierPipelineService in PR 2.
  mechanicalEffect: FCBMechanicalEffect;

  // ContentMetadata (matches DeityEntry pattern).
  source: GameDataSource;
  createdBy?: string;
  visibility: 'global' | 'campaign' | 'private';
  campaignId?: string;
  isOfficial: boolean;
  rev: number;
}
