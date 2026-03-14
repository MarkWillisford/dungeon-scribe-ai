// Class Option Documents — one per Firestore collection
//
// Each major class choice type gets its own collection (same pattern as feats).
// ClassChoiceDefinition (classChoices.ts) routes to these collections at runtime.
// All descriptions are text — mechanical effects are wired by the modifier pipeline.

import { FeatPrerequisite } from './feats';

// ---- Base type shared by all option collection documents ----

export interface ClassOptionBase {
  id: string;
  name: string;
  description: string;
  prerequisites?: FeatPrerequisite[];

  // ContentMetadata
  source: string; // 'pf1e-core' | 'pf1e-apg' | '3.5e' | 'homebrew' | etc.
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
  druidAllowed: boolean; // true if Druids can choose this domain via Nature Bond
}

// ---- Bloodline (Sorcerer, Bloodrager — shared pool) ----
// Collection: 'bloodlines'

export interface BloodlinePower {
  name: string;
  description: string;
  levelGained: number; // class levels: 1, 3, 9, 15, 20
}

export interface BloodlineEntry extends ClassOptionBase {
  bloodlineArcana: string; // text description of passive benefit
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

// ---- Rogue Talent (Rogue, Ninja — shared pool) ----
// Collection: 'roguetalents'

export interface RogueTalentEntry extends ClassOptionBase {
  talentTier: 'standard' | 'advanced'; // advanced requires class level 10+
}

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
  spiritSpells: string[]; // 9 entries — index 0 = level 1 spirit spell name
  spiritAbility: string; // text description of the spirit ability
  hexList?: string[]; // hex ids available to this spirit's shaman
  wanderingSpirit: boolean; // can this spirit be taken as a wandering spirit?
}

// ---- Wild Talent (Kineticist) ----
// Collection: 'wildtalents'
// Kineticist choice architecture warrants its own design pass — this is a placeholder.

export interface WildTalentEntry extends ClassOptionBase {
  element: string; // 'aether' | 'air' | 'earth' | 'fire' | 'water' | 'void' | 'wood' | string
  talentType: 'infusion' | 'utility';
  requiredElement?: string; // some talents are locked to a specific element
}
