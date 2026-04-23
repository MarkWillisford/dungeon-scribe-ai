// Batch 002 | first: 'Camel' | last: 'Elasmotherium' | count: 25
// Source: https://www.d20pfsrd.com/classes/core-classes/druid/animal-companions/
// 3pp boundary: not reached — stopped at 'Elasmotherium' (alphabetical, letter E)
// PAGE_FETCH_FAILED entries: Cattle, Deer (Ringhorn), Devil Monkey
//   — page fetch failed after 2 attempts; stat blocks below are community-sourced
//     fallback data (not empty shells), so they're tagged verificationStatus: 'needs_review'
//     rather than 'stub'. Admin should verify against a physical source before marking 'verified'.

import { AnimalCompanionEntry } from '@/types/animalCompanions';

// ─── Chunk 1: Camel – Crocodile ───────────────────────────────────────────────

export const camel: AnimalCompanionEntry = {
  id: 'camel',
  name: 'Camel',
  companionType: 'animal',
  bodyShape: 'quadrupedHooves',
  size: 'Large',
  speed: '50 ft.',
  naturalArmor: 1,
  attacks: 'bite (1d4), 2 kicks (1d4)',
  str: 18,
  dex: 16,
  con: 14,
  int: 0, // INT: — (non-intelligent)
  wis: 11,
  cha: 4,
  specialQualities: ['low-light vision', 'scent'],
  progressionTiers: [
    {
      atDruidLevel: 4,
      abilityScoreChanges: [
        { ability: 'STR', change: 2 },
        { ability: 'DEX', change: 2 },
        { ability: 'CON', change: 2 },
      ],
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const catBig: AnimalCompanionEntry = {
  id: 'cat-big',
  name: 'Cat, Big',
  companionType: 'animal',
  bodyShape: 'quadrupedClaws',
  size: 'Medium',
  speed: '40 ft.',
  naturalArmor: 1,
  attacks: 'bite (1d6), 2 claws (1d4)',
  str: 15,
  dex: 17,
  con: 13,
  int: 0, // INT: — (non-intelligent)
  wis: 12,
  cha: 6,
  specialQualities: ['low-light vision', 'scent'],
  progressionTiers: [
    {
      atDruidLevel: 7,
      sizeChange: 'Medium to Large',
      abilityScoreChanges: [
        { ability: 'STR', change: 8 },
        { ability: 'DEX', change: -2 },
        { ability: 'CON', change: 4 },
      ],
      naturalArmorChange: 2,
      attackUpdate: 'bite (1d8), 2 claws (1d6)',
      specialQualitiesGained: ['grab', 'pounce'],
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const catSmall: AnimalCompanionEntry = {
  id: 'cat-small',
  name: 'Cat, Small',
  companionType: 'animal',
  bodyShape: 'quadrupedClaws',
  size: 'Small',
  speed: '40 ft.',
  naturalArmor: 1,
  attacks: 'bite (1d4), 2 claws (1d3)',
  str: 12,
  dex: 17,
  con: 10,
  int: 0, // INT: — (non-intelligent)
  wis: 12,
  cha: 6,
  specialQualities: ['low-light vision', 'scent'],
  progressionTiers: [
    {
      atDruidLevel: 4,
      sizeChange: 'Small to Medium',
      abilityScoreChanges: [
        { ability: 'STR', change: 4 },
        { ability: 'DEX', change: -2 },
        { ability: 'CON', change: 2 },
      ],
      naturalArmorChange: 1,
      attackUpdate: 'bite (1d6), 2 claws (1d4)',
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const cattle: AnimalCompanionEntry = {
  id: 'cattle',
  name: 'Cattle',
  companionType: 'animal',
  bodyShape: 'quadrupedHooves',
  size: 'Medium',
  speed: '40 ft.',
  naturalArmor: 2,
  attacks: 'gore (1d6)',
  str: 14,
  dex: 12,
  con: 12,
  int: 0, // INT: — (non-intelligent)
  wis: 11,
  cha: 4,
  specialQualities: ['low-light vision'],
  progressionTiers: [
    {
      atDruidLevel: 7,
      sizeChange: 'Medium to Large',
      abilityScoreChanges: [
        { ability: 'STR', change: 8 },
        { ability: 'DEX', change: -2 },
        { ability: 'CON', change: 4 },
      ],
      naturalArmorChange: 2,
      attackUpdate: 'gore (1d8)',
      specialQualitiesGained: ['powerful charge (gore, 2d6)', 'trample (1d8, DC Str-based)'],
    },
  ],
  source: 'pf1e-uw',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const centipedeGiant: AnimalCompanionEntry = {
  id: 'centipede-giant',
  name: 'Centipede, Giant',
  companionType: 'vermin',
  bodyShape: 'unusual',
  size: 'Small',
  speed: '40 ft., climb 40 ft.',
  naturalArmor: 3,
  attacks: 'bite (1d6 plus poison)',
  str: 13,
  dex: 16,
  con: 13,
  int: 0, // INT: — (mindless vermin)
  wis: 10,
  cha: 2,
  specialQualities: ['darkvision 60 ft.', 'tremorsense 30 ft.'],
  progressionTiers: [
    {
      atDruidLevel: 7,
      sizeChange: 'Small to Medium',
      abilityScoreChanges: [
        { ability: 'STR', change: 4 },
        { ability: 'DEX', change: -2 },
        { ability: 'CON', change: 2 },
      ],
      naturalArmorChange: 1,
      attackUpdate: 'bite (1d8 plus poison)',
    },
  ],
  source: 'pf1e-um',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const chalicotherium: AnimalCompanionEntry = {
  id: 'chalicotherium',
  name: 'Chalicotherium',
  companionType: 'animal',
  bodyShape: 'quadrupedClaws',
  size: 'Medium',
  speed: '40 ft.',
  naturalArmor: 3,
  attacks: '2 claws (1d6)',
  str: 16,
  dex: 14,
  con: 15,
  int: 0, // INT: — (non-intelligent)
  wis: 13,
  cha: 5,
  specialQualities: ['low-light vision', 'scent'],
  progressionTiers: [
    {
      atDruidLevel: 7,
      sizeChange: 'Medium to Large',
      abilityScoreChanges: [
        { ability: 'STR', change: 8 },
        { ability: 'DEX', change: -2 },
        { ability: 'CON', change: 4 },
      ],
      naturalArmorChange: 2,
      attackUpdate: '2 claws (1d8)',
      specialQualitiesGained: ['reach 10 ft.'],
    },
  ],
  source: 'pf1e-b5',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const chameleonGiant: AnimalCompanionEntry = {
  id: 'chameleon-giant',
  name: 'Chameleon, Giant',
  companionType: 'animal',
  bodyShape: 'quadrupedShortLegs',
  size: 'Medium',
  speed: '30 ft., climb 30 ft.',
  naturalArmor: 2,
  attacks: 'bite (1d6)',
  str: 14,
  dex: 16,
  con: 13,
  int: 0, // INT: — (non-intelligent)
  wis: 13,
  cha: 6,
  specialQualities: ['low-light vision', 'scent', 'camouflage', 'prehensile tongue'],
  progressionTiers: [
    {
      atDruidLevel: 7,
      sizeChange: 'Medium to Large',
      abilityScoreChanges: [
        { ability: 'STR', change: 8 },
        { ability: 'DEX', change: -2 },
        { ability: 'CON', change: 4 },
      ],
      naturalArmorChange: 3,
      attackUpdate: 'bite (1d8)',
    },
  ],
  source: 'pf1e-b3',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const cooshee: AnimalCompanionEntry = {
  id: 'cooshee',
  name: 'Cooshee',
  companionType: 'animal',
  bodyShape: 'quadrupedClaws',
  size: 'Small',
  speed: '40 ft.',
  naturalArmor: 2,
  attacks: 'bite (1d4)',
  str: 13,
  dex: 15,
  con: 12,
  int: 3, // INT: 3 — mildly intelligent (elven dog)
  wis: 12,
  cha: 6,
  specialQualities: ['low-light vision', 'scent'],
  progressionTiers: [
    {
      atDruidLevel: 4,
      sizeChange: 'Small to Medium',
      abilityScoreChanges: [
        { ability: 'STR', change: 4 },
        { ability: 'DEX', change: -2 },
        { ability: 'CON', change: 2 },
      ],
      naturalArmorChange: 1,
      attackUpdate: 'bite (1d6)',
    },
  ],
  source: 'pf1e-um',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const crabGiant: AnimalCompanionEntry = {
  id: 'crab-giant',
  name: 'Crab, Giant',
  companionType: 'vermin',
  bodyShape: 'unusual',
  size: 'Small',
  speed: '30 ft., swim 20 ft.',
  naturalArmor: 4,
  attacks: '2 claws (1d4)',
  str: 13,
  dex: 15,
  con: 13,
  int: 0, // INT: — (mindless vermin)
  wis: 10,
  cha: 2,
  specialQualities: ['darkvision 60 ft.', 'tremorsense 60 ft.'],
  progressionTiers: [
    {
      atDruidLevel: 7,
      sizeChange: 'Small to Medium',
      abilityScoreChanges: [
        { ability: 'STR', change: 4 },
        { ability: 'DEX', change: -2 },
        { ability: 'CON', change: 2 },
      ],
      naturalArmorChange: 2,
      attackUpdate: '2 claws (1d6)',
    },
  ],
  source: 'pf1e-um',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const crocodile: AnimalCompanionEntry = {
  id: 'crocodile',
  name: 'Crocodile',
  companionType: 'animal',
  bodyShape: 'quadrupedShortLegs',
  size: 'Small',
  speed: '20 ft., swim 30 ft.',
  naturalArmor: 8,
  attacks: 'bite (1d6)',
  str: 15,
  dex: 14,
  con: 13,
  int: 0, // INT: — (non-intelligent)
  wis: 12,
  cha: 8,
  specialQualities: ['low-light vision', 'hold breath', 'scent'],
  progressionTiers: [
    {
      atDruidLevel: 7,
      sizeChange: 'Small to Medium',
      abilityScoreChanges: [
        { ability: 'STR', change: 4 },
        { ability: 'DEX', change: -2 },
        { ability: 'CON', change: 2 },
      ],
      naturalArmorChange: 3,
      attackUpdate: 'bite (1d8)',
      specialQualitiesGained: ['grab (bite)'],
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

// ─── Chunk 2: Deer (Reindeer) – Dog ───────────────────────────────────────────

export const deerReindeer: AnimalCompanionEntry = {
  id: 'deer-reindeer',
  name: 'Deer, Reindeer',
  companionType: 'animal',
  bodyShape: 'quadrupedHooves',
  size: 'Small',
  speed: '50 ft.',
  naturalArmor: 1,
  attacks: 'gore (1d4)',
  str: 10,
  dex: 16,
  con: 12,
  int: 0, // INT: — (non-intelligent)
  wis: 13,
  cha: 5,
  specialQualities: ['low-light vision'],
  progressionTiers: [
    {
      atDruidLevel: 4,
      abilityScoreChanges: [
        { ability: 'STR', change: 2 },
        { ability: 'DEX', change: 2 },
        { ability: 'CON', change: 2 },
      ],
    },
  ],
  source: 'pf1e-b4',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const deerRinghorn: AnimalCompanionEntry = {
  id: 'deer-ringhorn',
  name: 'Deer, Ringhorn',
  companionType: 'animal',
  bodyShape: 'quadrupedHooves',
  size: 'Small',
  speed: '40 ft.',
  naturalArmor: 1,
  attacks: '2 hooves (1d3)',
  str: 11,
  dex: 18,
  con: 11,
  int: 0, // INT: — (non-intelligent)
  wis: 12,
  cha: 13,
  specialQualities: ['low-light vision', 'scent'],
  progressionTiers: [
    {
      atDruidLevel: 4,
      sizeChange: 'Small to Medium',
      abilityScoreChanges: [
        { ability: 'STR', change: 2 },
        { ability: 'DEX', change: -2 },
        { ability: 'CON', change: 2 },
      ],
      attackUpdate: '2 hooves (1d4)',
      specialQualitiesGained: ['Nimble Moves'],
    },
  ],
  source: 'pf1e-ap115',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const deinonychus: AnimalCompanionEntry = {
  id: 'deinonychus',
  name: 'Deinonychus',
  companionType: 'animal',
  bodyShape: 'bipedClaws',
  size: 'Small',
  speed: '60 ft.',
  naturalArmor: 1,
  attacks: 'bite (1d4), 2 claws (1d4)',
  str: 13,
  dex: 17,
  con: 10,
  int: 0, // INT: — (non-intelligent)
  wis: 12,
  cha: 7,
  specialQualities: ['low-light vision', 'scent'],
  progressionTiers: [
    {
      atDruidLevel: 4,
      sizeChange: 'Small to Medium',
      abilityScoreChanges: [
        { ability: 'STR', change: 4 },
        { ability: 'DEX', change: -2 },
        { ability: 'CON', change: 2 },
      ],
    },
    {
      atDruidLevel: 7,
      sizeChange: 'Medium to Large',
      abilityScoreChanges: [
        { ability: 'STR', change: 4 },
        { ability: 'DEX', change: -2 },
        { ability: 'CON', change: 2 },
      ],
      naturalArmorChange: 2,
      attackUpdate: 'bite (1d6), 2 claws (1d6)',
    },
  ],
  source: 'pf1e-b1',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const deinotherium: AnimalCompanionEntry = {
  id: 'deinotherium',
  name: 'Deinotherium',
  companionType: 'animal',
  bodyShape: 'quadrupedOther',
  size: 'Medium',
  speed: '30 ft.',
  naturalArmor: 4,
  attacks: 'gore (1d8)',
  str: 14,
  dex: 12,
  con: 15,
  int: 0, // INT: — (non-intelligent)
  wis: 13,
  cha: 3,
  specialQualities: ['low-light vision', 'scent'],
  progressionTiers: [
    {
      atDruidLevel: 7,
      sizeChange: 'Medium to Large',
      abilityScoreChanges: [
        { ability: 'STR', change: 8 },
        { ability: 'DEX', change: -2 },
        { ability: 'CON', change: 4 },
      ],
      naturalArmorChange: 2,
      attackUpdate: 'gore (2d8)',
    },
  ],
  source: 'pf1e-b6',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const devilMonkey: AnimalCompanionEntry = {
  id: 'devil-monkey',
  name: 'Devil Monkey',
  companionType: 'animal',
  bodyShape: 'bipedHands',
  size: 'Medium',
  speed: '30 ft.',
  naturalArmor: 3,
  attacks: 'bite (1d8)',
  str: 15,
  dex: 19,
  con: 8,
  int: 0, // INT: — (non-intelligent)
  wis: 15,
  cha: 10,
  specialQualities: ['low-light vision'],
  progressionTiers: [
    {
      atDruidLevel: 4,
      sizeChange: 'Medium to Large',
      abilityScoreChanges: [
        { ability: 'STR', change: 8 },
        { ability: 'DEX', change: -2 },
        { ability: 'CON', change: 4 },
      ],
      naturalArmorChange: 2,
      attackUpdate: 'bite (1d10)',
      specialQualitiesGained: ['puncture armor', 'rock throwing'],
    },
  ],
  source: 'pf1e-b6',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const dimetrodon: AnimalCompanionEntry = {
  id: 'dimetrodon',
  name: 'Dimetrodon',
  companionType: 'animal',
  bodyShape: 'quadrupedShortLegs',
  size: 'Medium',
  speed: '30 ft.',
  naturalArmor: 3,
  attacks: 'bite (1d6), tail slap (1d6)',
  str: 13,
  dex: 16,
  con: 12,
  int: 0, // INT: — (non-intelligent)
  wis: 13,
  cha: 8,
  specialQualities: ['low-light vision', 'scent'],
  progressionTiers: [
    {
      atDruidLevel: 7,
      sizeChange: 'Medium to Large',
      abilityScoreChanges: [
        { ability: 'STR', change: 8 },
        { ability: 'DEX', change: -2 },
        { ability: 'CON', change: 4 },
      ],
      naturalArmorChange: 2,
      attackUpdate: 'bite (1d8), tail slap (1d8)',
    },
  ],
  source: 'pf1e-b3',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const dimorphodon: AnimalCompanionEntry = {
  id: 'dimorphodon',
  name: 'Dimorphodon',
  companionType: 'animal',
  bodyShape: 'avian',
  size: 'Small',
  speed: '30 ft., fly 40 ft. (poor)',
  naturalArmor: 1,
  attacks: 'bite (1d4)',
  str: 8,
  dex: 15,
  con: 12,
  int: 0, // INT: — (non-intelligent)
  wis: 13,
  cha: 7,
  specialQualities: ['low-light vision'],
  progressionTiers: [
    {
      atDruidLevel: 4,
      abilityScoreChanges: [
        { ability: 'DEX', change: 2 },
        { ability: 'CON', change: 2 },
      ],
    },
    {
      atDruidLevel: 7,
      sizeChange: 'Small to Large',
      abilityScoreChanges: [
        { ability: 'STR', change: 8 },
        { ability: 'DEX', change: -2 },
        { ability: 'CON', change: 4 },
      ],
      naturalArmorChange: 2,
      attackUpdate: 'bite (1d8 plus grab), 2 talons (1d6)',
      specialQualitiesGained: ['grab (Large)', 'pounce'],
    },
  ],
  source: 'pf1e-b4',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const diplodocus: AnimalCompanionEntry = {
  id: 'diplodocus',
  name: 'Diplodocus',
  companionType: 'animal',
  bodyShape: 'quadrupedOther',
  size: 'Medium',
  speed: '40 ft.',
  naturalArmor: 1,
  attacks: 'tail (1d4)',
  str: 10,
  dex: 14,
  con: 9,
  int: 0, // INT: — (non-intelligent)
  wis: 13,
  cha: 10,
  specialQualities: ['low-light vision', 'scent'],
  progressionTiers: [
    {
      atDruidLevel: 7,
      sizeChange: 'Medium to Large',
      abilityScoreChanges: [
        { ability: 'STR', change: 8 },
        { ability: 'DEX', change: -2 },
        { ability: 'CON', change: 4 },
      ],
      naturalArmorChange: 2,
      attackUpdate: 'tail (1d6)',
      specialQualitiesGained: ['trample'],
    },
  ],
  source: 'pf1e-b3',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const dog: AnimalCompanionEntry = {
  id: 'dog',
  name: 'Dog',
  companionType: 'animal',
  bodyShape: 'quadrupedClaws',
  size: 'Small',
  speed: '40 ft.',
  naturalArmor: 1,
  attacks: 'bite (1d4)',
  str: 13,
  dex: 15,
  con: 15,
  int: 0, // INT: — (non-intelligent)
  wis: 12,
  cha: 6,
  specialQualities: ['low-light vision', 'scent'],
  progressionTiers: [
    {
      atDruidLevel: 4,
      sizeChange: 'Small to Medium',
      abilityScoreChanges: [
        { ability: 'STR', change: 2 },
        { ability: 'DEX', change: -2 },
        { ability: 'CON', change: 2 },
      ],
      naturalArmorChange: 1,
      attackUpdate: 'bite (1d6)',
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

// ─── Chunk 3: Dolphin – Elasmotherium + Batch Array ──────────────────────────

export const dolphin: AnimalCompanionEntry = {
  id: 'dolphin',
  name: 'Dolphin',
  companionType: 'animal',
  bodyShape: 'piscine',
  size: 'Medium',
  speed: 'swim 40 ft.',
  naturalArmor: 1,
  attacks: 'bite (1d4)',
  str: 12,
  dex: 14,
  con: 13,
  int: 0, // INT: — (non-intelligent)
  wis: 12,
  cha: 9,
  specialQualities: ['low-light vision', 'hold breath'],
  progressionTiers: [
    {
      atDruidLevel: 4,
      abilityScoreChanges: [
        { ability: 'STR', change: 2 },
        { ability: 'DEX', change: -2 },
        { ability: 'CON', change: 2 },
      ],
    },
    {
      atDruidLevel: 7,
      sizeChange: 'Medium to Large',
      abilityScoreChanges: [
        { ability: 'STR', change: 8 },
        { ability: 'DEX', change: -2 },
        { ability: 'CON', change: 4 },
      ],
      naturalArmorChange: 2,
      attackUpdate: 'bite (1d6)',
    },
  ],
  source: 'pf1e-b1',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const drake: AnimalCompanionEntry = {
  id: 'drake',
  name: 'Drake',
  companionType: 'animal',
  bodyShape: 'avian',
  size: 'Tiny',
  speed: '30 ft., fly 60 ft. (average)',
  naturalArmor: 1,
  attacks: 'bite (1d3)',
  str: 10,
  dex: 17,
  con: 12,
  int: 0, // INT: — (non-intelligent)
  wis: 13,
  cha: 8,
  specialQualities: ['low-light vision', 'scent'],
  progressionTiers: [
    {
      atDruidLevel: 4,
      abilityScoreChanges: [
        { ability: 'STR', change: 2 },
        { ability: 'DEX', change: -2 },
        { ability: 'CON', change: 2 },
      ],
      specialQualitiesGained: ['breath weapon (1d6, DC 11)'],
    },
    {
      atDruidLevel: 7,
      sizeChange: 'Tiny to Small',
      abilityScoreChanges: [
        { ability: 'STR', change: 4 },
        { ability: 'DEX', change: -2 },
        { ability: 'CON', change: 2 },
      ],
      naturalArmorChange: 2,
      attackUpdate: 'bite (1d4)',
      specialQualitiesGained: ['breath weapon (2d6, DC increases)'],
    },
  ],
  source: 'pf1e-pzo9470',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const dunkleosteus: AnimalCompanionEntry = {
  id: 'dunkleosteus',
  name: 'Dunkleosteus',
  companionType: 'animal',
  bodyShape: 'piscine',
  size: 'Medium',
  speed: 'swim 40 ft.',
  naturalArmor: 2,
  attacks: 'bite (1d6)',
  str: 14,
  dex: 13,
  con: 15,
  int: 0, // INT: — (non-intelligent)
  wis: 10,
  cha: 2,
  specialQualities: ['low-light vision', 'scent'],
  progressionTiers: [
    {
      atDruidLevel: 4,
      abilityScoreChanges: [
        { ability: 'STR', change: 2 },
        { ability: 'DEX', change: -2 },
        { ability: 'CON', change: 4 },
      ],
    },
    {
      atDruidLevel: 7,
      sizeChange: 'Medium to Large',
      abilityScoreChanges: [
        { ability: 'STR', change: 8 },
        { ability: 'DEX', change: -2 },
        { ability: 'CON', change: 4 },
      ],
      naturalArmorChange: 2,
      attackUpdate: 'bite (1d8)',
    },
  ],
  source: 'pf1e-b6',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const eelElectric: AnimalCompanionEntry = {
  id: 'eel-electric',
  name: 'Eel, Electric',
  companionType: 'animal',
  bodyShape: 'piscine',
  size: 'Small',
  speed: 'swim 30 ft.',
  naturalArmor: 1,
  attacks: 'bite (1d3)',
  str: 8,
  dex: 14,
  con: 11,
  int: 0, // INT: — (non-intelligent)
  wis: 12,
  cha: 2,
  specialQualities: ['low-light vision', 'scent', 'electric discharge'],
  progressionTiers: [
    {
      atDruidLevel: 4,
      abilityScoreChanges: [
        { ability: 'STR', change: 2 },
        { ability: 'DEX', change: -2 },
        { ability: 'CON', change: 2 },
      ],
    },
    {
      atDruidLevel: 7,
      sizeChange: 'Small to Medium',
      abilityScoreChanges: [
        { ability: 'STR', change: 4 },
        { ability: 'DEX', change: -2 },
        { ability: 'CON', change: 2 },
      ],
      naturalArmorChange: 2,
      attackUpdate: 'bite (1d4)',
    },
  ],
  source: 'pf1e-b1',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const elasmosaurus: AnimalCompanionEntry = {
  id: 'elasmosaurus',
  name: 'Elasmosaurus',
  companionType: 'animal',
  bodyShape: 'piscine',
  size: 'Medium',
  speed: 'swim 40 ft.',
  naturalArmor: 1,
  attacks: 'bite (1d4), tail slap (1d4)',
  str: 11,
  dex: 14,
  con: 12,
  int: 0, // INT: — (non-intelligent)
  wis: 13,
  cha: 6,
  specialQualities: ['low-light vision', 'hold breath'],
  progressionTiers: [
    {
      atDruidLevel: 4,
      abilityScoreChanges: [
        { ability: 'STR', change: 2 },
        { ability: 'DEX', change: -2 },
        { ability: 'CON', change: 2 },
      ],
    },
    {
      atDruidLevel: 7,
      sizeChange: 'Medium to Large',
      abilityScoreChanges: [
        { ability: 'STR', change: 8 },
        { ability: 'DEX', change: -2 },
        { ability: 'CON', change: 4 },
      ],
      naturalArmorChange: 2,
      attackUpdate: 'bite (1d6), tail slap (1d6)',
      specialQualitiesGained: ['grab'],
    },
  ],
  source: 'pf1e-b1',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const elasmotherium: AnimalCompanionEntry = {
  id: 'elasmotherium',
  name: 'Elasmotherium',
  companionType: 'animal',
  bodyShape: 'quadrupedOther',
  size: 'Medium',
  speed: '40 ft.',
  naturalArmor: 3,
  attacks: 'gore (1d6)',
  str: 14,
  dex: 12,
  con: 15,
  int: 0, // INT: — (non-intelligent)
  wis: 13,
  cha: 3,
  specialQualities: ['low-light vision', 'scent'],
  progressionTiers: [
    {
      atDruidLevel: 4,
      abilityScoreChanges: [
        { ability: 'STR', change: 2 },
        { ability: 'DEX', change: -2 },
        { ability: 'CON', change: 2 },
      ],
    },
    {
      atDruidLevel: 7,
      sizeChange: 'Medium to Large',
      abilityScoreChanges: [
        { ability: 'STR', change: 8 },
        { ability: 'DEX', change: -2 },
        { ability: 'CON', change: 4 },
      ],
      naturalArmorChange: 2,
      attackUpdate: 'gore (1d8)',
      specialQualitiesGained: ['powerful charge', 'trample'],
    },
  ],
  source: 'pf1e-b6',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

// ─── Batch Array ───────────────────────────────────────────────────────────────

export const batch_002: AnimalCompanionEntry[] = [
  camel,
  catBig,
  catSmall,
  cattle,
  centipedeGiant,
  chalicotherium,
  chameleonGiant,
  cooshee,
  crabGiant,
  crocodile,
  deerReindeer,
  deerRinghorn,
  deinonychus,
  deinotherium,
  devilMonkey,
  dimetrodon,
  dimorphodon,
  diplodocus,
  dog,
  dolphin,
  drake,
  dunkleosteus,
  eelElectric,
  elasmosaurus,
  elasmotherium,
];
