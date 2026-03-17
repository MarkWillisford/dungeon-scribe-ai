// Batch 005 | first: 'Megatherium' | last: 'Quetzalcoatlus' | count: 25
// Batch metadata: {"batchNum":"005","startEntry":"Megatherium","lastEntry":"Quetzalcoatlus","nextEntry":"Ram","entriesInBatch":25}
import { AnimalCompanionEntry } from '@/types/animalCompanions';

// ─── Chunk 1: Megatherium – Mosquito, Giant ───────────────────────────────────

export const megatherium: AnimalCompanionEntry = {
  id: 'megatherium',
  name: 'Megatherium',
  companionType: 'animal',
  size: 'Medium',
  speed: '40 ft., climb 10 ft.',
  naturalArmor: 5,
  attacks: '2 claws (1d4)',
  str: 9,
  dex: 14,
  con: 11,
  int: 0, // INT: — (non-intelligent)
  wis: 13,
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
      attackUpdate: '2 claws (1d6)',
      specialQualitiesGained: ['rend (2 claws, 1d8)'],
    },
  ],
  source: 'pf1e-b2',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const megaprimatus: AnimalCompanionEntry = {
  id: 'megaprimatus',
  name: 'Megaprimatus',
  companionType: 'magical beast',
  size: 'Medium',
  speed: '30 ft.',
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
      sizeChange: 'Medium to Large',
      abilityScoreChanges: [
        { ability: 'STR', change: 8 },
        { ability: 'DEX', change: -2 },
        { ability: 'CON', change: 4 },
      ],
      naturalArmorChange: 2,
      attackUpdate: 'bite (1d6), 2 claws (1d6)',
    },
  ],
  source: 'pf1e-b5',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const mindspinRam: AnimalCompanionEntry = {
  id: 'mindspin-ram',
  name: 'Mindspin Ram',
  companionType: 'animal',
  size: 'Small',
  speed: '40 ft.',
  naturalArmor: 1,
  attacks: 'gore (1d4)',
  str: 10,
  dex: 17,
  con: 11,
  int: 0, // INT: — (non-intelligent)
  wis: 14,
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
      attackUpdate: 'gore (1d6)',
      specialQualitiesGained: ['bleed (gore, 1)', 'powerful charge (gore, 1d8)'],
    },
  ],
  source: 'pf1e-ap91',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const moa: AnimalCompanionEntry = {
  id: 'moa',
  name: 'Moa',
  companionType: 'animal',
  size: 'Medium',
  speed: '30 ft.',
  naturalArmor: 1,
  attacks: '2 talons (1d3)',
  str: 13,
  dex: 16,
  con: 12,
  int: 0, // INT: — (non-intelligent)
  wis: 11,
  cha: 9,
  specialQualities: ['low-light vision'],
  progressionTiers: [
    {
      atDruidLevel: 7,
      sizeChange: 'Medium to Large',
      abilityScoreChanges: [
        { ability: 'STR', change: 4 },
        { ability: 'CON', change: 2 },
      ],
      naturalArmorChange: 1,
      attackUpdate: '2 talons (1d4)',
    },
  ],
  source: 'pf1e-b5',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const mokeleMbembe: AnimalCompanionEntry = {
  id: 'mokele-mbembe',
  name: 'Mokele-Mbembe',
  companionType: 'animal',
  size: 'Medium',
  speed: '30 ft., swim 30 ft.',
  naturalArmor: 5,
  attacks: 'bite (1d8), tail slap (1d8)',
  str: 16,
  dex: 17,
  con: 10,
  int: 0, // INT: — (non-intelligent)
  wis: 15,
  cha: 11,
  specialQualities: ['low-light vision', 'scent'],
  progressionTiers: [],
  source: 'pf1e-b6',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const moleGiant: AnimalCompanionEntry = {
  id: 'mole-giant',
  name: 'Mole, Giant',
  companionType: 'animal',
  size: 'Small',
  speed: '20 ft., burrow 10 ft.',
  naturalArmor: 1,
  attacks: '2 claws (1d4)',
  str: 12,
  dex: 15,
  con: 13,
  int: 0, // INT: — (non-intelligent)
  wis: 10,
  cha: 5,
  specialQualities: ['low-light vision', 'tremorsense 30 ft.'],
  progressionTiers: [
    {
      atDruidLevel: 4,
      sizeChange: 'Small to Medium',
      abilityScoreChanges: [
        { ability: 'STR', change: 2 },
        { ability: 'DEX', change: -2 },
        { ability: 'CON', change: 4 },
      ],
      naturalArmorChange: 1,
      attackUpdate: '2 claws (1d6)',
      specialQualitiesGained: ['rend (2 claws, 1d6)', 'burrow 20 ft.'],
    },
  ],
  source: 'pf1e-uw',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const momeRath: AnimalCompanionEntry = {
  id: 'mome-rath',
  name: 'Mome Rath',
  companionType: 'magical beast',
  size: 'Small',
  speed: '30 ft., climb 10 ft.',
  naturalArmor: 1,
  attacks: '2 claws (1d3 plus poison)',
  str: 12,
  dex: 14,
  con: 15,
  int: 0, // INT: — (non-intelligent)
  wis: 14,
  cha: 17,
  specialQualities: ['low-light vision', 'scent'],
  progressionTiers: [
    {
      atDruidLevel: 4,
      sizeChange: 'Small to Medium',
      abilityScoreChanges: [],
      attackUpdate: '2 claws (1d4 plus poison)',
    },
  ],
  source: 'pf1e-ap119',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const moose: AnimalCompanionEntry = {
  id: 'moose',
  name: 'Moose',
  companionType: 'animal',
  size: 'Medium',
  speed: '40 ft.',
  naturalArmor: 2,
  attacks: 'gore (1d6), 2 hooves (1d3)',
  str: 12,
  dex: 15,
  con: 14,
  int: 0, // INT: — (non-intelligent)
  wis: 13,
  cha: 7,
  specialQualities: ['low-light vision'],
  progressionTiers: [
    {
      atDruidLevel: 7,
      sizeChange: 'Medium to Large',
      abilityScoreChanges: [
        { ability: 'STR', change: 6 },
        { ability: 'DEX', change: -2 },
        { ability: 'CON', change: 4 },
      ],
      naturalArmorChange: 1,
      attackUpdate: 'gore (1d8), 2 hooves (1d4)',
      specialQualitiesGained: ['powerful charge (gore, 1d8)'],
    },
  ],
  source: 'pf1e-uw',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const morayEel: AnimalCompanionEntry = {
  id: 'moray-eel',
  name: 'Moray Eel',
  companionType: 'animal',
  size: 'Medium',
  speed: 'swim 30 ft.',
  naturalArmor: 5,
  attacks: 'bite (1d8)',
  str: 14,
  dex: 16,
  con: 12,
  int: 0, // INT: — (non-intelligent)
  wis: 12,
  cha: 8,
  specialQualities: ['low-light vision', 'grab'],
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
      attackUpdate: 'bite (2d6)',
      specialQualitiesGained: ['gnaw'],
    },
  ],
  source: 'pf1e-b1',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const mosquitoGiant: AnimalCompanionEntry = {
  id: 'mosquito-giant',
  name: 'Mosquito, Giant',
  companionType: 'vermin',
  size: 'Small',
  speed: '20 ft., fly 60 ft. (good)',
  naturalArmor: 1,
  attacks: 'bite (1d6 plus bleed and grab)',
  str: 14,
  dex: 21,
  con: 15,
  int: 0, // INT: — (mindless vermin)
  wis: 13,
  cha: 6,
  specialQualities: ['darkvision 60 ft.', 'bleed (1d4)', 'grab'],
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
      attackUpdate: 'bite (1d8 plus bleed and grab)',
      specialQualitiesGained: ['bleed (2d4)', 'blood drain (1d2 Constitution)'],
    },
  ],
  source: 'pf1e-uw',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

// ─── Chunk 2: Narwhal – Porcupine ─────────────────────────────────────────────

export const narwhal: AnimalCompanionEntry = {
  id: 'narwhal',
  name: 'Narwhal',
  companionType: 'animal',
  size: 'Medium',
  speed: 'swim 80 ft.',
  naturalArmor: 1,
  attacks: 'bite (1d6)',
  str: 11,
  dex: 19,
  con: 10,
  int: 0, // INT: — (non-intelligent)
  wis: 14,
  cha: 6,
  specialQualities: ['low-light vision', 'hold breath'],
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
      attackUpdate: 'bite (1d8)',
      specialQualitiesGained: ['blindsight 120 ft.', 'tusk'],
    },
  ],
  source: 'pf1e-b5',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const octopus: AnimalCompanionEntry = {
  id: 'octopus',
  name: 'Octopus',
  companionType: 'animal',
  size: 'Small',
  speed: '20 ft., swim 30 ft., jet 200 ft.',
  naturalArmor: 1,
  attacks: 'bite (1d3), tentacles (grab)',
  str: 12,
  dex: 17,
  con: 14,
  int: 0, // INT: — (non-intelligent)
  wis: 12,
  cha: 3,
  specialQualities: ['low-light vision', 'ink cloud'],
  progressionTiers: [
    {
      atDruidLevel: 4,
      abilityScoreChanges: [
        { ability: 'STR', change: 2 },
        { ability: 'CON', change: 2 },
      ],
      attackUpdate: 'bite (1d3 plus poison), tentacles (grab)',
    },
  ],
  source: 'pf1e-b1',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const orca: AnimalCompanionEntry = {
  id: 'orca',
  name: 'Orca',
  companionType: 'animal',
  size: 'Medium',
  speed: 'swim 80 ft.',
  naturalArmor: 1,
  attacks: 'bite (1d6)',
  str: 11,
  dex: 19,
  con: 10,
  int: 0, // INT: — (non-intelligent)
  wis: 14,
  cha: 6,
  specialQualities: ['low-light vision', 'hold breath'],
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
      attackUpdate: 'bite (1d8)',
      specialQualitiesGained: ['blindsight 120 ft.'],
    },
  ],
  source: 'pf1e-b1',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const ornithomimosaur: AnimalCompanionEntry = {
  id: 'ornithomimosaur',
  name: 'Ornithomimosaur',
  companionType: 'animal',
  size: 'Medium',
  speed: '40 ft.',
  naturalArmor: 1,
  attacks: '2 claws (1d8)',
  str: 11,
  dex: 15,
  con: 12,
  int: 0, // INT: — (non-intelligent)
  wis: 13,
  cha: 8,
  specialQualities: ['low-light vision', 'scent'],
  progressionTiers: [
    {
      atDruidLevel: 7,
      abilityScoreChanges: [
        { ability: 'STR', change: 2 },
        { ability: 'DEX', change: 2 },
        { ability: 'CON', change: 2 },
      ],
      naturalArmorChange: 1,
      attackUpdate: '2 claws (1d8 plus 1d4 bleed)',
      specialQualitiesGained: ['sprint', 'speed 60 ft.'],
    },
  ],
  source: 'pf1e-uw',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const ostrich: AnimalCompanionEntry = {
  id: 'ostrich',
  name: 'Ostrich',
  companionType: 'animal',
  size: 'Small',
  speed: '40 ft.',
  naturalArmor: 1,
  attacks: 'claw (1d4)',
  str: 13,
  dex: 16,
  con: 12,
  int: 0, // INT: — (non-intelligent)
  wis: 13,
  cha: 11,
  specialQualities: ['low-light vision'],
  progressionTiers: [
    {
      atDruidLevel: 4,
      sizeChange: 'Small to Medium',
      abilityScoreChanges: [
        { ability: 'STR', change: 4 },
        { ability: 'DEX', change: -2 },
        { ability: 'CON', change: 2 },
      ],
      attackUpdate: 'claw (1d6)',
      specialQualitiesGained: ['crouch', 'speed 60 ft.'],
    },
  ],
  source: 'pf1e-unknown',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const owlGiant: AnimalCompanionEntry = {
  id: 'owl-giant',
  name: 'Owl, Giant',
  companionType: 'animal',
  size: 'Medium',
  speed: '10 ft., fly 60 ft. (average)',
  naturalArmor: 2,
  attacks: '2 talons (1d4)',
  str: 10,
  dex: 17,
  con: 13,
  int: 0, // INT: — (non-intelligent)
  wis: 13,
  cha: 6,
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
      attackUpdate: '2 talons (1d6)',
      specialQualitiesGained: ['rend (2 talons, 1d6)'],
    },
  ],
  source: 'pf1e-uw',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const panda: AnimalCompanionEntry = {
  id: 'panda',
  name: 'Panda',
  companionType: 'animal',
  size: 'Small',
  speed: '30 ft.',
  naturalArmor: 2,
  attacks: 'bite (1d4), 2 claws (1d3)',
  str: 13,
  dex: 12,
  con: 14,
  int: 0, // INT: — (non-intelligent)
  wis: 13,
  cha: 9,
  specialQualities: ['low-light vision'],
  progressionTiers: [
    {
      atDruidLevel: 7,
      sizeChange: 'Small to Medium',
      abilityScoreChanges: [
        { ability: 'STR', change: 4 },
        { ability: 'DEX', change: -2 },
        { ability: 'CON', change: 4 },
      ],
      naturalArmorChange: 1,
      attackUpdate: 'bite (1d6), 2 claws (1d4)',
      specialQualitiesGained: ['powerful bite'],
    },
  ],
  source: 'pf1e-uw',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const pilo: AnimalCompanionEntry = {
  id: 'pilo',
  name: 'Pilo',
  companionType: 'animal',
  size: 'Small',
  speed: '30 ft.',
  naturalArmor: 2,
  attacks: 'gore (1d6)',
  str: 13,
  dex: 13,
  con: 14,
  int: 0, // INT: — (non-intelligent)
  wis: 14,
  cha: 7,
  specialQualities: ['low-light vision', 'scent', 'roll up'],
  progressionTiers: [
    {
      atDruidLevel: 4,
      abilityScoreChanges: [
        { ability: 'STR', change: 2 },
        { ability: 'CON', change: 2 },
      ],
      naturalArmorChange: 2,
      attackUpdate: 'gore (1d6), tail slap (1d4)',
      specialQualitiesGained: ['poison', 'quills'],
    },
  ],
  source: 'pf1e-ap85',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const plesiosaurus: AnimalCompanionEntry = {
  id: 'plesiosaurus',
  name: 'Plesiosaurus',
  companionType: 'animal',
  size: 'Medium',
  speed: '5 ft., swim 60 ft.',
  naturalArmor: 1,
  attacks: 'bite (1d8)',
  str: 12,
  dex: 15,
  con: 12,
  int: 0, // INT: — (non-intelligent)
  wis: 15,
  cha: 9,
  specialQualities: ['keen scent', 'low-light vision', 'scent'],
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
      attackUpdate: 'bite (2d6)',
      specialQualitiesGained: ['ambush attack +1d6', 'bleed (1)'],
    },
  ],
  source: 'pf1e-b5',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const polarBear: AnimalCompanionEntry = {
  id: 'polar-bear',
  name: 'Polar Bear',
  companionType: 'animal',
  size: 'Small',
  speed: '40 ft.',
  naturalArmor: 2,
  attacks: 'bite (1d4), 2 claws (1d3)',
  str: 15,
  dex: 15,
  con: 13,
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
      attackUpdate: 'bite (1d6), 2 claws (1d4)',
    },
  ],
  source: 'pf1e-b5',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

// ─── Chunk 3: Porcupine – Quetzalcoatlus ──────────────────────────────────────

export const porcupine: AnimalCompanionEntry = {
  id: 'porcupine',
  name: 'Porcupine',
  companionType: 'animal',
  size: 'Small',
  speed: '30 ft.',
  naturalArmor: 1,
  attacks: 'tail slap (1d4)',
  str: 14,
  dex: 12,
  con: 15,
  int: 0, // INT: — (non-intelligent)
  wis: 13,
  cha: 5,
  specialQualities: ['low-light vision', 'scent', 'quills'],
  progressionTiers: [
    {
      atDruidLevel: 4,
      sizeChange: 'Small to Medium',
      abilityScoreChanges: [
        { ability: 'STR', change: 2 },
        { ability: 'DEX', change: -2 },
        { ability: 'CON', change: 4 },
      ],
      naturalArmorChange: 1,
      attackUpdate: 'tail slap (1d6)',
      specialQualitiesGained: ['quills (giant porcupine)'],
    },
  ],
  source: 'pf1e-uw',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const prayingMantis: AnimalCompanionEntry = {
  id: 'praying-mantis',
  name: 'Praying Mantis',
  companionType: 'vermin',
  size: 'Medium',
  speed: '30 ft., climb 30 ft., fly 40 ft. (average)',
  naturalArmor: 3,
  attacks: '2 claws (1d4 plus grab)',
  str: 10,
  dex: 15,
  con: 10,
  int: 0, // INT: — (mindless vermin)
  wis: 12,
  cha: 7,
  specialQualities: ['darkvision', 'lunge'],
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
      attackUpdate: '2 claws (1d6)',
      specialQualitiesGained: ['mandibles (1d6)', 'sudden strike'],
    },
  ],
  source: 'pf1e-um',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const pteranodon: AnimalCompanionEntry = {
  id: 'pteranodon',
  name: 'Pteranodon',
  companionType: 'animal',
  size: 'Medium',
  speed: '40 ft., fly 40 ft. (average)',
  naturalArmor: 1,
  attacks: 'bite (1d4)',
  str: 10,
  dex: 17,
  con: 12,
  int: 0, // INT: — (non-intelligent)
  wis: 13,
  cha: 6,
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
      attackUpdate: 'bite (1d6)',
      specialQualitiesGained: ['talons (1d4)'],
    },
  ],
  source: 'pf1e-b1',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

// Puma — source not fully verified; stats from community research (Paizo forum, unconfirmed).
// TODO: verify against physical source before seeding.
export const puma: AnimalCompanionEntry = {
  id: 'puma',
  name: 'Puma',
  companionType: 'animal',
  size: 'Medium',
  speed: '30 ft.',
  naturalArmor: 4,
  attacks: '2 claws (1d6)',
  str: 12,
  dex: 18,
  con: 10,
  int: 0, // INT: — (non-intelligent)
  wis: 15,
  cha: 11,
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
      naturalArmorChange: 3,
      attackUpdate: '2 claws (1d8)',
      specialQualitiesGained: ['bleed (1d6)', 'sweeping strike'],
    },
  ],
  source: 'pf1e-unknown',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const quetzalcoatlus: AnimalCompanionEntry = {
  id: 'quetzalcoatlus',
  name: 'Quetzalcoatlus',
  companionType: 'animal',
  size: 'Medium',
  speed: '30 ft., fly 50 ft. (clumsy)',
  naturalArmor: 2,
  attacks: 'bite (1d8)',
  str: 9,
  dex: 21,
  con: 10,
  int: 0, // INT: — (non-intelligent)
  wis: 14,
  cha: 12,
  specialQualities: ['low-light vision', 'scent'],
  progressionTiers: [],
  source: 'pf1e-b6',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const batch_005: AnimalCompanionEntry[] = [
  megatherium,
  megaprimatus,
  mindspinRam,
  moa,
  mokeleMbembe,
  moleGiant,
  momeRath,
  moose,
  morayEel,
  mosquitoGiant,
  narwhal,
  octopus,
  orca,
  ornithomimosaur,
  ostrich,
  owlGiant,
  panda,
  pilo,
  plesiosaurus,
  polarBear,
  porcupine,
  prayingMantis,
  pteranodon,
  puma,
  quetzalcoatlus,
];
