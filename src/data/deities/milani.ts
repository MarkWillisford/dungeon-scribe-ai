import { DeityEntry } from '@/types/deities';

export const milani: DeityEntry = {
  id: 'milani',
  name: 'Milani',
  title: 'The Everbloom',
  alignment: 'CG',
  portfolio: 'devotion, hope, uprisings',

  domains: ['chaos', 'good', 'healing', 'liberation', 'protection'],
  subdomains: [
    'chaos-azata',
    'chaos-riot',
    'good-azata',
    'healing-restoration',
    'liberation-freedom',
    'liberation-revolution',
    'protection-defense',
    'protection-purity',
  ],
  favoredWeapon: 'morningstar',
  allowedClericAlignments: ['CG', 'NG', 'CN'],

  symbol: 'Rose on a bloody street',
  sacredAnimal: 'Mouse',
  sacredColors: ['red', 'white'],
  description:
    'Milani is a deity of revolutionary fervor and steadfast hope, beloved by those who fight against oppression and tyranny. Her faith holds that devoted followers who die protecting others may be reborn through divine intervention, and her priests are a fierce and stubborn lot who refuse to yield even against overwhelming odds. She is venerated throughout Cheliax, Galt, Irrisen, Isger, and Rahadoum — wherever common people suffer under the heel of unjust rulers.',

  source: 'pf1e-core',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};
