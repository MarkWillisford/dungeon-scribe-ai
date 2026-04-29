// Class Option Documents — one per Firestore collection
//
// Each major class choice type gets its own collection (same pattern as feats).
// ClassChoiceDefinition (classChoices.ts) routes to these collections at runtime.
// All descriptions are text — mechanical effects are wired by the modifier pipeline.

import { Prerequisite } from './feats';
import { Effect, DataQualityFields } from './base';
import { SpecialAbility } from './specialAbilities';
import type { GameDataSource } from './gameData';

// ---- Base type shared by all option collection documents ----

export interface ClassOptionBase extends DataQualityFields {
  id: string;
  name: string;
  description: string;
  prerequisites?: Prerequisite[];

  // ContentMetadata
  source: string | GameDataSource; // string during static data phase; GameDataSource after Firestore migration
  createdBy?: string; // userId; absent for official content
  visibility: 'global' | 'campaign' | 'private';
  campaignId?: string;
  isOfficial: boolean;
  rev: number;
}

// ---- Domain (Cleric, Inquisitor, Warpriest) ----
// Collection: 'domains'

export interface DomainPower {
  name: string;
  description: string;
  levelGained: number; // typically 1 or 6
}

export interface DomainEntry extends ClassOptionBase {
  domainSpells: string[]; // 9 entries — index 0 = level 1 spell name
  powers: DomainPower[];
  grantedClassSkills?: string[];
  druidAllowed?: boolean; // true if Druids can choose this domain via Nature Bond; absent = unknown/false
}

// ---- Bloodline (Sorcerer, Bloodrager — shared pool) ----
// Collection: 'bloodlines'

// Classes/archetypes that can select bloodlines.
// To add a new class, extend this union — no bloodline entry data changes needed
// if the new class draws from an existing pool (e.g. Eldritch Scion uses { classIds: 'sorcerer' }).
export type BloodlineClassId = 'sorcerer' | 'bloodrager';

export interface BloodlinePower {
  name: string;
  description: string;
  levelGained: number; // class levels: 1, 3, 9, 15, 20
}

export interface BloodlineEntry extends ClassOptionBase {
  classIds: BloodlineClassId[]; // which classes can select this bloodline
  bloodlineArcana?: string; // sorcerer only; bloodrager bloodlines have no arcana mechanic
  powers: BloodlinePower[];
  bonusSpells: string[]; // 9 entries — index 0 = level 1 bonus spell name
  bonusFeats: string[]; // feat names to choose from at levels 7, 13, 19
  bloodlineSkills?: string[];
}

// ---- Mystery (Oracle) ----
// Collection: 'mysteries'
// Revelations query a separate 'revelations' collection filtered by mysteryId.

export interface MysteryEntry extends ClassOptionBase {
  bonusSpells: string[]; // 9 entries — index 0 = level 1 bonus spell name
  classSkills: string[];
  finalRevelation: string; // text description of 20th-level ability
}

// ---- Rogue Talent (Rogue) ----
// Collection: 'roguetalents'

export interface RogueTalentEntry extends ClassOptionBase {
  talentTier: 'standard' | 'advanced'; // advanced requires class level 10+
}

// ---- Ninja Trick (Ninja) ----
// Collection: 'ninjatricks'
// Note: the "Rogue Talent" ninja trick lets a ninja pick from the roguetalents pool,
// but the ninja trick pool itself is a separate collection.

export interface NinjaTrickEntry extends ClassOptionBase {
  trickTier: 'standard' | 'master'; // master requires ninja level 10+
}

// ---- Slayer Talent (Slayer) ----
// Collection: 'slayertalents'

export interface SlayerTalentEntry extends ClassOptionBase {
  talentTier: 'standard' | 'advanced'; // advanced requires slayer level 10+
}

// ---- Magus Arcana (Magus) ----
// Collection: 'magusarcana'
// Base fields are sufficient — no collection-specific additions needed.

export type MagusArcanaEntry = ClassOptionBase;

// ---- Rage Power (Barbarian, Skald) ----
// Collection: 'ragepowers'
// Prerequisite rage powers use the prerequisites[] field on the base type.

export type RagePowerEntry = ClassOptionBase;

// ---- Hex (Witch) ----
// Collection: 'hexes'

export interface HexEntry extends ClassOptionBase {
  hexTier: 'standard' | 'major' | 'grand';
}

// ---- Arcanist Exploit (Arcanist) ----
// Collection: 'arcanistexploits'

export interface ArcanistExploitEntry extends ClassOptionBase {
  exploitTier: 'standard' | 'greater';
}

// ---- Investigator Talent ----
// Collection: 'investigatortalents'
// Base fields are sufficient — no collection-specific additions needed.

export type InvestigatorTalentEntry = ClassOptionBase;

// ---- Shaman Spirit ----
// Collection: 'shamanspirits'

export interface ShamanSpiritEntry extends ClassOptionBase {
  classIds?: string[]; // ['shaman'] or ['shaman', 'spirit-warrior-archetype']
  spiritSpells: string[]; // 9 entries — index 0 = level 1 spirit spell name
  abilities: {
    spirit: SpecialAbility; // 1st level — usable 3 + Wis modifier times per day
    greater: SpecialAbility; // 8th level
    true: SpecialAbility; // 16th level
    manifestation: SpecialAbility; // 20th level — permanent
  };
  hexList: string[]; // hex IDs available to the shaman when this spirit is chosen
  wanderingSpirit: boolean; // true if this spirit can be selected as a wandering (secondary) spirit
}

// ---- Eidolon Evolution (Summoner, Summoner (Unchained) — shared pool) ----
// Collection: 'eidolonevolutions'
//
// EidolonForm and EidolonSubtype unions live in src/types/eidolon.ts alongside
// the base-form and subtype definition interfaces.

import type { EidolonForm, EidolonSubtype, EvolutionStacking } from './eidolon';

export type { EidolonForm, EidolonSubtype } from './eidolon';

export interface EidolonEvolutionEntry extends ClassOptionBase {
  evolutionPointCost: 1 | 2 | 3 | 4;
  // Structured stacking rules. Replaces the old `canBeTakenMultipleTimes: boolean`.
  stacking: EvolutionStacking;
  effects: Effect[]; // structured grants (attacks, senses, movement, stat bonuses, etc.)
  summoner?: 'apg' | 'unchained'; // absent = available to both summoner versions
  formRestrictions?: EidolonForm[]; // absent = any base form
  subtypeRestrictions?: EidolonSubtype[]; // Unchained only — absent = any subtype
  // Whether the evolution is selectable via Aspect / Greater Aspect (applies to
  // the summoner, not the eidolon). Populated in the Phase 5 research pass.
  aspectEligible?: boolean;
}

// ---- Mesmerist Trick ----
// Collection: 'mesmeristtricks'

export interface MesmeristTrickEntry extends ClassOptionBase {
  trickTier: 'standard' | 'masterful'; // masterful tricks require mesmerist level 5+
}

// ---- Wild Talent (Kineticist) ----
// Collection: 'wildtalents'
// Prerequisites are talent names (strings), not FeatPrerequisite — use Omit to override.

export interface KineticistWildTalentEntry extends Omit<ClassOptionBase, 'prerequisites'> {
  prerequisites?: string[]; // prerequisite talent names
  element: string; // 'aether' | 'air' | 'earth' | 'fire' | 'water' | 'void' | 'wood' | 'universal'
  talentType: 'infusion' | 'utility';
  infusionType?: 'form' | 'substance'; // only when talentType === 'infusion'
  burnCost: number;
  requiredLevel: number;
  associatedBlasts?: string[]; // blast types this infusion can be applied to (only for infusions)
}

// Keep deprecated alias for backward compatibility
/** @deprecated Use KineticistWildTalentEntry */
export type WildTalentEntry = KineticistWildTalentEntry;

// ---- Occultist Focus Power ----
// Collection: 'occultistfocuspowers'
// Filtered at runtime by the occultist's chosen implement school.

export type OccultistSchool =
  | 'abjuration'
  | 'conjuration'
  | 'divination'
  | 'enchantment'
  | 'evocation'
  | 'illusion'
  | 'necromancy'
  | 'transmutation';

export interface OccultistFocusPowerEntry extends ClassOptionBase {
  school: OccultistSchool;
  focusCost: number; // mental focus points spent to activate
  isBasePower: boolean; // true = the free base power granted by the school
  requiredLevel?: number; // minimum occultist level to select
  isSacredImplementPower?: boolean; // true = requires a specific deity's sacred implement
}

// ---- Phrenic Amplification (Psychic) ----
// Collection: 'phrenicamplifications'
// Prerequisites are amplification names (strings).

export interface PhrenicAmplificationEntry extends Omit<ClassOptionBase, 'prerequisites'> {
  prerequisites?: string[]; // prerequisite amplification names
  amplificationTier: 'standard' | 'major';
  phrenicPointCost: number; // points spent from phrenic pool
}

// ---- Cavalier Order ----
// Collection: 'cavalierorders'

export interface CavalierOrderEntry extends ClassOptionBase {
  classSkills: string[]; // skills granted by the order
  edicts: string; // roleplay obligations the cavalier must uphold
}

// ---- Inquisition (Inquisitor) ----
// Collection: 'inquisitions'
// Inquisitions are alternatives to domains for the Inquisitor class (APG+).
// Base fields are sufficient — mechanics are described in description.

export type InquisitionEntry = ClassOptionBase;

// ---- Revelation (Oracle) ----
// Collection: 'revelations'
// Filtered at runtime by mysteryId matching the oracle's chosen mystery.

export interface RevelationEntry extends ClassOptionBase {
  mysteryId: string; // e.g. 'battle', 'bones', 'flame' — matches MysteryEntry.id
}

// ---- Warpriest Blessing ----
// Collection: 'warpriestblessings'
// Warpriests select 2 blessings at creation, each tied to a domain their deity grants.
// Each blessing has a minor power (level 1+) and a major power (level 10+).

export interface WarpriestBlessingEntry extends ClassOptionBase {
  minorPower: string; // description of the minor blessing power (available from level 1)
  majorPower: string; // description of the major blessing power (available from level 10)
}

// ---- Alchemist Discovery ----
// Collection: 'alchemistdiscoveries'
// Standard discoveries available at level 2+; grand discoveries only at level 20.

export interface AlchemistDiscoveryEntry extends ClassOptionBase {
  discoveryTier: 'standard' | 'grand'; // grand discoveries require level 20
}
