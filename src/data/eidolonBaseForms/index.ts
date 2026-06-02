// SEEDING ONLY — do not use in runtime app code.
// This array seeds Firestore. All runtime reads go through GameDataService → FirestoreGameDataConnector.

// Eidolon Base Forms — 7 first-party base forms.
// Sources: APG (biped, quadruped, serpentine), Bestiary 4 supplementals (aquatic,
// avian, tauric), Pathfinder Unchained (aberrant).
//
// Per project decision, late-APG forms (aquatic, avian, tauric) are allowed in
// both APG and Unchained Summoner builds, flagged `legacyBaseForm: true`.
// Aberrant is Unchained-only.
//
// freeEvolutions lists evolution IDs granted at 1st level; duplicates represent
// multiple selections of the same evolution (e.g., quadruped gets two limbs(legs)
// evolutions for its four legs). These do NOT count against the evolution pool.
// The picker renders them as a read-only "base form grants" section.

import type { EidolonBaseFormDefinition } from '@/types/eidolon';
import { Size } from '@/types/base';

export const BIPED_BASE_FORM: EidolonBaseFormDefinition = {
  id: 'biped',
  name: 'Biped',
  description:
    'A biped eidolon has two arms and two legs, standing upright like a humanoid. ' +
    'It is physically powerful and well-suited to hand-held weapons or claw attacks.',
  edition: 'both',
  startingSize: Size.Medium,
  speeds: { land: 30 },
  naturalArmor: 2,
  saves: { fort: 'good', ref: 'bad', will: 'good' },
  abilityScores: { str: 16, dex: 12, con: 13, int: 7, wis: 10, cha: 11 },
  baseAttacks: [
    {
      kind: 'claws',
      count: 2,
      primary: true,
      damageMedium: '1d4',
      damageLarge: '1d6',
      damageHuge: '1d8',
      descriptor: 'S',
    },
  ],
  freeEvolutions: ['evolution-claws', 'evolution-limbs', 'evolution-limbs'],
  source: {
    bookId: 'apg',
    bookName: "Advanced Player's Guide",
    publisher: 'Paizo',
  },
  isOfficial: true,
  visibility: 'global',
  verificationStatus: 'needs_review',
  rev: 1,
};

export const QUADRUPED_BASE_FORM: EidolonBaseFormDefinition = {
  id: 'quadruped',
  name: 'Quadruped',
  description:
    'A quadruped eidolon walks on all fours, swift and sturdy. It is the natural ' +
    'choice when the summoner wants a mount or a mobile brawler.',
  edition: 'both',
  startingSize: Size.Medium,
  speeds: { land: 40 },
  naturalArmor: 2,
  saves: { fort: 'good', ref: 'good', will: 'bad' },
  abilityScores: { str: 14, dex: 14, con: 13, int: 7, wis: 10, cha: 11 },
  baseAttacks: [
    {
      kind: 'bite',
      count: 1,
      primary: true,
      damageMedium: '1d6',
      damageLarge: '1d8',
      damageHuge: '2d6',
      descriptor: 'P',
    },
  ],
  freeEvolutions: ['evolution-bite', 'evolution-limbs', 'evolution-limbs'],
  source: {
    bookId: 'apg',
    bookName: "Advanced Player's Guide",
    publisher: 'Paizo',
  },
  isOfficial: true,
  visibility: 'global',
  verificationStatus: 'needs_review',
  rev: 1,
};

export const SERPENTINE_BASE_FORM: EidolonBaseFormDefinition = {
  id: 'serpentine',
  name: 'Serpentine',
  description:
    'A serpentine eidolon has a long, sinuous body with a tail in place of legs. ' +
    'It is agile, well-equipped to grapple, and can climb easily.',
  edition: 'both',
  startingSize: Size.Medium,
  speeds: { land: 20, climb: 20 },
  naturalArmor: 2,
  saves: { fort: 'bad', ref: 'good', will: 'good' },
  abilityScores: { str: 12, dex: 16, con: 13, int: 7, wis: 10, cha: 11 },
  baseAttacks: [
    {
      kind: 'bite',
      count: 1,
      primary: true,
      damageMedium: '1d6',
      damageLarge: '1d8',
      damageHuge: '2d6',
      descriptor: 'P',
    },
    {
      kind: 'tail-slap',
      count: 1,
      primary: false,
      damageMedium: '1d6',
      damageLarge: '1d8',
      damageHuge: '2d6',
      descriptor: 'B',
    },
  ],
  freeEvolutions: [
    'evolution-bite',
    'evolution-climb',
    'evolution-reach',
    'evolution-tail',
    'evolution-tail-slap',
  ],
  source: {
    bookId: 'apg',
    bookName: "Advanced Player's Guide",
    publisher: 'Paizo',
  },
  isOfficial: true,
  visibility: 'global',
  verificationStatus: 'needs_review',
  rev: 1,
};

export const AQUATIC_BASE_FORM: EidolonBaseFormDefinition = {
  id: 'aquatic',
  name: 'Aquatic',
  description:
    'An aquatic eidolon is adapted to life under the waves, equally at home in ' +
    'the depths of the sea or the open ocean.',
  edition: 'both',
  legacyBaseForm: true,
  startingSize: Size.Medium,
  speeds: { land: 20, swim: 40 },
  naturalArmor: 4,
  saves: { fort: 'good', ref: 'good', will: 'bad' },
  abilityScores: { str: 16, dex: 12, con: 13, int: 7, wis: 10, cha: 11 },
  baseAttacks: [
    {
      kind: 'bite',
      count: 1,
      primary: true,
      damageMedium: '1d6',
      damageLarge: '1d8',
      damageHuge: '2d6',
      descriptor: 'P',
    },
  ],
  freeEvolutions: [
    'evolution-bite',
    'evolution-improved-natural-armor',
    'evolution-gills',
    'evolution-swim',
    'evolution-swim',
  ],
  source: {
    bookId: 'bestiary-4',
    bookName: 'Bestiary 4',
    publisher: 'Paizo',
  },
  isOfficial: true,
  visibility: 'global',
  verificationStatus: 'needs_review',
  rev: 1,
};

export const AVIAN_BASE_FORM: EidolonBaseFormDefinition = {
  id: 'avian',
  name: 'Avian',
  description:
    'An avian eidolon has wings and is built for flight. Small avian eidolons ' +
    'may take the Large size up for 2 evolution points; at 5th level a Medium ' +
    'or larger avian eidolon gains a +40 ft bonus to its fly speed.',
  edition: 'both',
  legacyBaseForm: true,
  startingSize: Size.Small,
  speeds: { land: 30, fly: 30, flyManeuverability: 'good' },
  naturalArmor: 2,
  saves: { fort: 'bad', ref: 'good', will: 'good' },
  abilityScores: { str: 12, dex: 16, con: 13, int: 7, wis: 10, cha: 11 },
  baseAttacks: [
    {
      kind: 'claws',
      count: 2,
      primary: true,
      damageMedium: '1d4',
      damageLarge: '1d6',
      damageHuge: '1d8',
      descriptor: 'S',
    },
  ],
  freeEvolutions: ['evolution-claws', 'evolution-flight', 'evolution-limbs'],
  source: {
    bookId: 'bestiary-4',
    bookName: 'Bestiary 4',
    publisher: 'Paizo',
  },
  isOfficial: true,
  visibility: 'global',
  verificationStatus: 'needs_review',
  rev: 1,
};

export const TAURIC_BASE_FORM: EidolonBaseFormDefinition = {
  id: 'tauric',
  name: 'Tauric',
  description:
    'A tauric eidolon has a humanoid upper body atop a quadrupedal lower body, ' +
    'like a centaur. It combines the versatility of a biped with the speed of a ' +
    'quadruped.',
  edition: 'both',
  legacyBaseForm: true,
  startingSize: Size.Small,
  speeds: { land: 40 },
  naturalArmor: 2,
  saves: { fort: 'good', ref: 'bad', will: 'good' },
  abilityScores: { str: 14, dex: 14, con: 13, int: 7, wis: 10, cha: 11 },
  baseAttacks: [
    {
      kind: 'claws',
      count: 2,
      primary: true,
      damageMedium: '1d4',
      damageLarge: '1d6',
      damageHuge: '1d8',
      descriptor: 'S',
    },
  ],
  freeEvolutions: ['evolution-claws', 'evolution-limbs', 'evolution-limbs', 'evolution-limbs'],
  source: {
    bookId: 'bestiary-4',
    bookName: 'Bestiary 4',
    publisher: 'Paizo',
  },
  isOfficial: true,
  visibility: 'global',
  verificationStatus: 'needs_review',
  rev: 1,
};

export const ABERRANT_BASE_FORM: EidolonBaseFormDefinition = {
  id: 'aberrant',
  name: 'Aberrant',
  description:
    'An aberrant eidolon is a twisted, alien thing of writhing tentacles and ' +
    'unsettling anatomy. Exclusive to the Unchained Summoner, it pairs with the ' +
    "aberrant subtype's unique psychic magic and alien consciousness evolutions.",
  edition: 'unchained',
  startingSize: Size.Medium,
  speeds: { land: 20, swim: 20 },
  naturalArmor: 2,
  saves: { fort: 'good', ref: 'bad', will: 'good' },
  abilityScores: { str: 12, dex: 13, con: 16, int: 7, wis: 10, cha: 11 },
  baseAttacks: [
    {
      kind: 'bite',
      count: 1,
      primary: true,
      damageMedium: '1d6',
      damageLarge: '1d8',
      damageHuge: '2d6',
      descriptor: 'P',
    },
    {
      kind: 'tentacle',
      count: 2,
      primary: false,
      damageMedium: '1d6',
      damageLarge: '1d8',
      damageHuge: '2d6',
      descriptor: 'B',
    },
  ],
  freeEvolutions: ['evolution-bite', 'evolution-tentacle', 'evolution-tentacle'],
  source: {
    bookId: 'unchained',
    bookName: 'Pathfinder Unchained',
    publisher: 'Paizo',
  },
  isOfficial: true,
  visibility: 'global',
  verificationStatus: 'needs_review',
  rev: 1,
};

export const ALL_EIDOLON_BASE_FORMS: EidolonBaseFormDefinition[] = [
  BIPED_BASE_FORM,
  QUADRUPED_BASE_FORM,
  SERPENTINE_BASE_FORM,
  AQUATIC_BASE_FORM,
  AVIAN_BASE_FORM,
  TAURIC_BASE_FORM,
  ABERRANT_BASE_FORM,
];

export const getEidolonBaseFormById = (id: string): EidolonBaseFormDefinition | undefined =>
  ALL_EIDOLON_BASE_FORMS.find((bf) => bf.id === id);
