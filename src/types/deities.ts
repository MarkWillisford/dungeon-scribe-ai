// Deity documents — Firestore collection: 'deities/{id}'
//
// Used to gate cleric domain selection, validate cleric alignment,
// and determine favored weapon for Warpriest and related features.
// Descriptions are flavor text — mechanical effects wired by modifier pipeline.

export interface DeityDocument {
  id: string; // kebab-case: 'milani', 'iomedae', 'cayden-cailean'
  name: string;
  title: string; // epithet: 'The Everbloom', 'The Inheritor'
  alignment: string; // 'LG' | 'NG' | 'CG' | 'LN' | 'N' | 'CN' | 'LE' | 'NE' | 'CE'
  portfolio: string; // 'hope, uprisings, devotion to a cause'

  // Mechanical — used at character creation / leveling
  domains: string[]; // domain ids available to clerics: ['good', 'liberation', 'protection']
  subdomains: string[]; // subdomain ids: ['liberation-freedom', 'liberation-revolution']
  favoredWeapon: string; // weapon name: 'morningstar', 'longsword'
  allowedClericAlignments: string[]; // alignments within one step of deity

  // Flavor
  symbol: string; // holy symbol description: 'rose on bloody street'
  sacredAnimal?: string;
  sacredColors?: string[];
  description?: string;

  // ContentMetadata
  source: string; // 'pf1e-core' | 'pf1e-apg' | '3.5e' | 'homebrew' | etc.
  createdBy?: string;
  visibility: 'global' | 'campaign' | 'private';
  campaignId?: string;
  isOfficial: boolean;
  rev: number;
}
