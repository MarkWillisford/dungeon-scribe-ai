import { DeityDocument } from '@/types/deities';

export const iomedae: DeityDocument = {
  id: 'iomedae',
  name: 'Iomedae',
  title: 'The Inheritor',
  alignment: 'LG',
  portfolio: 'honor, justice, rulership, valor',

  domains: ['glory', 'good', 'law', 'sun', 'war'],
  subdomains: [
    'glory-heroism',
    'glory-honor',
    'glory-hubris',
    'good-archon',
    'good-redemption',
    'law-archon',
    'sun-day',
    'sun-light',
    'sun-revelation',
    'war-duels',
    'war-tactics',
  ],
  favoredWeapon: 'longsword',
  allowedClericAlignments: ['LG', 'LN', 'NG'],

  symbol: 'Sword and sun',
  sacredAnimal: 'Lion',
  sacredColors: ['red', 'white'],
  description:
    'Iomedae is the goddess of righteous valor, justice, and honor. Having served as a mortal paladin and later as a herald of Aroden before ascending to divinity, she expects the same dedication from her followers that she exemplified in life. Her faithful are crusaders who live for the joy of righteous battle and serve as an example to others through the strength and justice of their actions. She is venerated across Absalom, Andoran, Cheliax, Lastwall, and Mendev, and is among the most widely worshipped deities in the Inner Sea region.',

  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};
