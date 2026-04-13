// Deity documents — Firestore collection: 'deities/{id}'
//
// Used to gate cleric domain selection, validate cleric alignment,
// and determine favored weapon for Warpriest and related features.
// Descriptions are flavor text — mechanical effects wired by modifier pipeline.

// ---- Prestige class boons (Sentinel 3/6/9, Evangelist 3/6/9, Exalted 3/6/9) ----
// Boons are text descriptions only — mechanical effects wired by modifier pipeline.

import type { GameDataSource } from './gameData';

export interface DeityBoonTier {
  tier: 1 | 2 | 3;
  description: string;
}

export interface DeityBoons {
  obedienceRequirement: string;
  evangelist: DeityBoonTier[]; // exactly 3 entries
  exalted: DeityBoonTier[]; // exactly 3 entries
  sentinel: DeityBoonTier[]; // exactly 3 entries
}

export interface DeityEntry {
  id: string; // kebab-case: 'milani', 'iomedae', 'cayden-cailean'
  name: string;
  title?: string; // epithet: 'The Everbloom', 'The Inheritor'; absent for collective entities
  alignment: string; // 'LG' | 'NG' | 'CG' | 'LN' | 'N' | 'CN' | 'LE' | 'NE' | 'CE'
  portfolio: string; // 'hope, uprisings, devotion to a cause'

  // Mechanical — used at character creation / leveling
  domains: string[]; // domain ids available to clerics: ['good', 'liberation', 'protection']
  subdomains: string[]; // subdomain ids: ['liberation-freedom', 'liberation-revolution']
  favoredWeapon: string; // weapon name: 'morningstar', 'longsword'
  allowedClericAlignments: string[]; // alignments within one step of deity

  // Flavor
  symbol?: string; // holy symbol description: 'rose on bloody street'; absent if undocumented
  sacredAnimal?: string;
  sacredColors?: string[];
  description?: string;

  // Prestige class boons (Evangelist / Exalted / Sentinel)
  boons?: DeityBoons;

  // ContentMetadata
  source: string | GameDataSource; // string during static data phase; GameDataSource after Firestore migration
  createdBy?: string;
  visibility: 'global' | 'campaign' | 'private';
  campaignId?: string;
  isOfficial: boolean;
  rev: number;
}
