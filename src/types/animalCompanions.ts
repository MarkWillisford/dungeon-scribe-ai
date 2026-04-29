// src/types/animalCompanions.ts

import type { GameDataSource } from './gameData';
import type { DataQualityFields } from './base';
import type { ItemSlot } from './magicItems';

// ---- BodyShape ---------------------------------------------------------------
// Paizo-canonical taxonomy from Ultimate Wilderness (2017) p. 176 / Animal
// Archive (2013), mirrored on Archives of Nethys:
// https://aonprd.com/Rules.aspx?Name=Magic+Item+Slots&Category=Companions+and+Familiars
//
// Ten categories, subdivided beyond visual shape by how the slot table treats
// them — e.g. quadrupeds are split by foot type because hooves get a
// `horseshoes` subtype restriction on `feet` and claws don't. Distinct from
// `companionType` (the creature type for Wild Empathy / spell targeting).

export type BodyShape =
  | 'bipedHands' // ape, chimp, baboon — can grasp, full humanoid slots
  | 'bipedClaws' // t-rex, deinonychus, allosaurus
  | 'quadrupedClaws' // wolf, big cat, bear, dog
  | 'quadrupedHooves' // horse, pony, elk, boar
  | 'quadrupedOther' // elephant, rhino, brachiosaurus
  | 'quadrupedShortLegs' // crocodile, tortoise, giant weasel
  | 'avian' // roc, giant eagle, dire bat, axe beak
  | 'serpentine' // snake, eel, giant slug
  | 'piscine' // shark, dolphin, orca
  | 'unusual'; // plants + vermin — giant spider, mantis

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

  // Paizo body-shape category. Drives magic item slot availability via
  // BODY_SHAPE_SLOTS (src/data/companions/bodyShapeSlots.ts).
  bodyShape: BodyShape;

  // Per-entry deviation from the shape's default slot set. Rare — used for
  // creatures that diverge from their shape's typical anatomy. Added slots
  // are treated as automatic (no Extra Item Slot feat required).
  slotOverrides?: {
    added?: ItemSlot[];
    removed?: ItemSlot[];
  };

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
