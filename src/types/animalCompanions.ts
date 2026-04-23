// src/types/animalCompanions.ts

import type { GameDataSource } from './gameData';
import type { DataQualityFields } from './base';

// ---- BodyShape ---------------------------------------------------------------
// Where on the creature magic item slots are available. Used by the picker
// filter and the BODY_SHAPE_SLOTS map (added in a follow-up phase). Distinct
// from `companionType` (which is a creature type for Wild Empathy / spell
// targeting purposes).

export type BodyShape =
  | 'biped' // gorilla, dire ape — humanoid item slots
  | 'quadruped' // wolf, big cat, bear, dog
  | 'serpentine' // snake, eel
  | 'avian' // roc, giant eagle, dire bat
  | 'aquatic' // shark, dolphin, octopus
  | 'multilegged' // giant spider, giant mantis, scorpion
  | 'amorphous'; // ooze (rare AC)

export interface AnimalCompanionProgressionTier {
  atDruidLevel: 4 | 7; // druid/ranger level when this tier activates
  sizeChange?: string; // e.g. 'Medium to Large' — omit if no size change
  abilityScoreChanges: {
    ability: 'STR' | 'DEX' | 'CON' | 'INT' | 'WIS' | 'CHA';
    change: number; // always a delta from the previous tier — never a final value
  }[];
  naturalArmorChange?: number; // delta from previous tier; omit if unchanged
  attackUpdate?: string; // updated attack string if dice change — e.g. 'bite (1d8)'
  specialQualitiesGained?: string[]; // new SQs that activate at this tier
}

export interface AnimalCompanionEntry extends DataQualityFields {
  id: string; // kebab-case: 'wolf', 'leopard', 'giant-eagle', 'giant-mantis'
  name: string;
  companionType: 'animal' | 'magical beast' | 'plant' | 'vermin' | 'aberration' | 'accursed';

  // Starting statistics (before any druid-level progression)
  size: string; // 'Tiny' | 'Small' | 'Medium' | 'Large' | 'Huge'
  speed: string; // e.g. '50 ft.' or '30 ft., climb 20 ft., swim 20 ft.'
  naturalArmor: number; // starting natural armor bonus
  attacks: string; // e.g. 'bite (1d6)' or 'bite (1d6), 2 claws (1d4)'
  str: number;
  dex: number;
  con: number;
  int: number;
  wis: number;
  cha: number;
  specialQualities: string[]; // e.g. ['low-light vision', 'scent', 'darkvision 60 ft.']

  progressionTiers: AnimalCompanionProgressionTier[]; // [] if no progression

  // ContentMetadata
  source: string | GameDataSource; // string during static data phase; GameDataSource after Firestore migration
  isOfficial: boolean;
  visibility: 'global' | 'campaign' | 'private';
  campaignId?: string;
  createdBy?: string;
  rev: number;
}
