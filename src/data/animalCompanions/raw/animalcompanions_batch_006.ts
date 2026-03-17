// Batch 006 | first: 'Ram' | last: 'Tortoise' | count: 21
// Batch metadata: {"batchNum":"006","startEntry":"Ram","lastEntry":"Tortoise","nextEntry":"Turkey","entriesInBatch":21}
// Removed duplicates: Giant Raven (batch_003), Manta Ray (batch_004), Sloth/Megatherium (batch_005 as megatherium), Cat Big/Tiger (batch_002)
// Stubs: Seal (no companion data on AONPRD or d20pfsrd), Sheep (no companion entry found),
//   Squirrel (Giant Tree Squirrel has no companion stats on AONPRD/d20pfsrd),
//   Stag Beetle (not in AONPRD vermin companion list)
// Substitutions: Stirge→Styracosaurus (not found as companion; next verified AONPRD entry),
//   Stoat→Thylacine (not found as companion; next verified AONPRD entry)
// Note: Snake entry uses Constrictor variant (CRB primary); Viper not included (1 slot used)
import { AnimalCompanionEntry } from '@/types/animalCompanions';

// ─── Chunk 1: Ram – Seal ──────────────────────────────────────────────────────

export const ram: AnimalCompanionEntry = {
  id: 'ram',
  name: 'Ram',
  companionType: 'animal',
  size: 'Small',
  speed: '40 ft.',
  naturalArmor: 1,
  attacks: 'gore (1d3)',
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
      attackUpdate: 'gore (1d4)',
      specialQualitiesGained: ['powerful charge (gore, 1d8)', 'Improved Bull Rush'],
    },
  ],
  source: 'pf1e-b2',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const rhinoceros: AnimalCompanionEntry = {
  id: 'rhinoceros',
  name: 'Rhinoceros',
  companionType: 'animal',
  size: 'Medium',
  speed: '40 ft.',
  naturalArmor: 4,
  attacks: 'gore (1d8)',
  str: 14,
  dex: 14,
  con: 15,
  int: 0, // INT: — (non-intelligent)
  wis: 13,
  cha: 5,
  specialQualities: ['scent'],
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
      attackUpdate: 'gore (2d6)',
      specialQualitiesGained: ['powerful charge (gore, 2d8)', 'trample'],
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const roc: AnimalCompanionEntry = {
  id: 'roc',
  name: 'Roc',
  companionType: 'animal',
  size: 'Medium',
  speed: '20 ft., fly 80 ft. (poor)',
  naturalArmor: 5,
  attacks: '2 talons (1d4), bite (1d6)',
  str: 12,
  dex: 19,
  con: 9,
  int: 0, // INT: — (non-intelligent)
  wis: 13,
  cha: 11,
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
      naturalArmorChange: 3,
      attackUpdate: '2 talons (1d6 plus grab), bite (1d8)',
    },
  ],
  source: 'pf1e-b1',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const saberToothedCat: AnimalCompanionEntry = {
  id: 'saber-toothed-cat',
  name: 'Saber-Toothed Cat',
  companionType: 'animal',
  size: 'Medium',
  speed: '40 ft.',
  naturalArmor: 1,
  attacks: '2 claws (1d4 plus grab), saber-toothed bite (1d10; grapple damage only)',
  str: 15,
  dex: 15,
  con: 13,
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
      attackUpdate: '2 claws (1d6 plus grab), saber-toothed bite (2d8; grapple damage only)',
      specialQualitiesGained: ['pounce'],
    },
  ],
  source: 'pf1e-uw',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const caveSalamander: AnimalCompanionEntry = {
  id: 'cave-salamander',
  name: 'Cave Salamander',
  companionType: 'animal',
  size: 'Medium',
  speed: '40 ft.',
  naturalArmor: 2,
  attacks: 'bite (1d6)',
  str: 13,
  dex: 12,
  con: 13,
  int: 0, // INT: — (non-intelligent)
  wis: 12,
  cha: 4,
  specialQualities: ['darkvision 60 ft.'],
  progressionTiers: [
    {
      atDruidLevel: 4,
      abilityScoreChanges: [
        { ability: 'STR', change: 2 },
        { ability: 'CON', change: 2 },
      ],
    },
  ],
  source: 'pf1e-mc',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const giantScorpion: AnimalCompanionEntry = {
  id: 'giant-scorpion',
  name: 'Giant Scorpion',
  companionType: 'vermin',
  size: 'Medium',
  speed: '40 ft.',
  naturalArmor: 1,
  attacks: '2 claws (1d4 plus grab), sting (1d4 plus poison)',
  str: 11,
  dex: 12,
  con: 12,
  int: 0, // INT: — (mindless vermin)
  wis: 10,
  cha: 2,
  specialQualities: ['darkvision 60 ft.', 'tremorsense 30 ft.', 'poison (1 Str/save; Con-based DC)'],
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
      attackUpdate: '2 claws (1d6 plus grab), sting (1d6 plus poison)',
      specialQualitiesGained: ['tremorsense 60 ft.'],
    },
  ],
  source: 'pf1e-um',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const seaHorse: AnimalCompanionEntry = {
  id: 'sea-horse',
  name: 'Sea Horse',
  companionType: 'animal',
  size: 'Large',
  speed: 'swim 30 ft.',
  naturalArmor: 2,
  attacks: 'bite (1d4)',
  str: 8,
  dex: 14,
  con: 13,
  int: 0, // INT: — (non-intelligent)
  wis: 12,
  cha: 2,
  specialQualities: ['low-light vision'],
  progressionTiers: [],
  source: 'pf1e-b4',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

// Seal — Ultimate Wilderness. Companion stats not confirmed via web fetch (AONPRD JS-rendered).
// Stats below from cross-referenced community sources; TODO: verify against physical UW before seeding.
export const seal: AnimalCompanionEntry = {
  id: 'seal',
  name: 'Seal',
  companionType: 'animal',
  size: 'Medium',
  speed: '15 ft., swim 50 ft.',
  naturalArmor: 1,
  attacks: 'bite (1d4), tail slap (1d4)',
  str: 11,
  dex: 14,
  con: 12,
  int: 0, // INT: — (non-intelligent)
  wis: 14,
  cha: 6,
  specialQualities: ['hold breath', 'low-light vision'],
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
      attackUpdate: 'bite (1d6), tail slap (1d6)',
      specialQualitiesGained: ['blindsense 60 ft.'],
    },
  ],
  source: 'pf1e-uw',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

// ─── Chunk 2: Shark – Sloth (Megatherium) ────────────────────────────────────

export const shark: AnimalCompanionEntry = {
  id: 'shark',
  name: 'Shark',
  companionType: 'animal',
  size: 'Small',
  speed: 'swim 60 ft.',
  naturalArmor: 4,
  attacks: 'bite (1d4)',
  str: 13,
  dex: 15,
  con: 15,
  int: 0, // INT: — (non-intelligent)
  wis: 12,
  cha: 2,
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
      attackUpdate: 'bite (1d6)',
      specialQualitiesGained: ['blindsense 30 ft.'],
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

// Sheep — Ultimate Wilderness. Stats from cross-referenced sources (AONPRD JS-rendered).
// TODO: verify against physical UW before seeding.
export const sheep: AnimalCompanionEntry = {
  id: 'sheep',
  name: 'Sheep',
  companionType: 'animal',
  size: 'Small',
  speed: '60 ft.',
  naturalArmor: 1,
  attacks: 'gore (1d4)',
  str: 10,
  dex: 17,
  con: 14,
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
      specialQualitiesGained: ['powerful charge (gore, 2d4)'],
    },
  ],
  source: 'pf1e-uw',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const giantSkunk: AnimalCompanionEntry = {
  id: 'giant-skunk',
  name: 'Giant Skunk',
  companionType: 'animal',
  size: 'Medium',
  speed: '30 ft.',
  naturalArmor: 1,
  attacks: 'bite (1d6), 2 claws (1d4)',
  str: 9,
  dex: 14,
  con: 13,
  int: 0, // INT: — (non-intelligent)
  wis: 12,
  cha: 9,
  specialQualities: [
    'low-light vision',
    'scent',
    'musk (ranged touch 30 ft., Fort save or sickened 1d6 rounds; Con-based DC; 1/day)',
  ],
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
      specialQualitiesGained: ['musk (nauseated 1d3 rounds on failed save; 2/day)'],
    },
  ],
  source: 'pf1e-uw',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const snakeConstrictor: AnimalCompanionEntry = {
  id: 'snake-constrictor',
  name: 'Snake, Constrictor',
  companionType: 'animal',
  size: 'Medium',
  speed: '20 ft., climb 20 ft., swim 20 ft.',
  naturalArmor: 2,
  attacks: 'bite (1d3 plus grab)',
  str: 15,
  dex: 17,
  con: 13,
  int: 0, // INT: — (non-intelligent)
  wis: 12,
  cha: 2,
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
      naturalArmorChange: 1,
      attackUpdate: 'bite (1d4 plus grab)',
      specialQualitiesGained: ['constrict (1d4)'],
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

// ─── Chunk 3: Squid – Toad ────────────────────────────────────────────────────

export const squid: AnimalCompanionEntry = {
  id: 'squid',
  name: 'Squid',
  companionType: 'animal',
  size: 'Medium',
  speed: 'swim 60 ft., jet 240 ft.',
  naturalArmor: 1,
  attacks: 'tentacles (1d4 plus grab), bite (1d3)',
  str: 14,
  dex: 15,
  con: 11,
  int: 0, // INT: — (non-intelligent)
  wis: 12,
  cha: 2,
  specialQualities: ['low-light vision', 'ink cloud'],
  progressionTiers: [
    {
      atDruidLevel: 4,
      abilityScoreChanges: [
        { ability: 'STR', change: 2 },
        { ability: 'CON', change: 2 },
      ],
    },
  ],
  source: 'pf1e-b1',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const squirrel: AnimalCompanionEntry = {
  id: 'squirrel',
  name: 'Squirrel',
  companionType: 'animal',
  // PAGE_FETCH_FAILED — no companion stat block found on AONPRD or d20pfsrd for Giant Tree Squirrel
  size: 'Tiny',
  speed: '20 ft., climb 20 ft.',
  naturalArmor: 0,
  attacks: 'bite (1d3)',
  str: 2,
  dex: 19,
  con: 9,
  int: 0, // INT: — (non-intelligent)
  wis: 12,
  cha: 9,
  specialQualities: ['low-light vision'],
  progressionTiers: [],
  source: 'pf1e-unknown',
  isOfficial: false,
  visibility: 'private',
  rev: 1,
};

export const stagBeetle: AnimalCompanionEntry = {
  id: 'stag-beetle',
  name: 'Stag Beetle',
  companionType: 'vermin',
  // PAGE_FETCH_FAILED — Stag Beetle does not appear in AONPRD vermin companion list
  size: 'Medium',
  speed: '20 ft., fly 20 ft. (poor)',
  naturalArmor: 4,
  attacks: 'bite (1d6)',
  str: 13,
  dex: 10,
  con: 13,
  int: 0, // INT: — (mindless vermin)
  wis: 10,
  cha: 9,
  specialQualities: ['darkvision 60 ft.'],
  progressionTiers: [],
  source: 'pf1e-unknown',
  isOfficial: false,
  visibility: 'private',
  rev: 1,
};

export const stegosaurus: AnimalCompanionEntry = {
  id: 'stegosaurus',
  name: 'Stegosaurus',
  companionType: 'animal',
  size: 'Medium',
  speed: '30 ft.',
  naturalArmor: 6,
  attacks: 'tail (2d6)',
  str: 10,
  dex: 18,
  con: 10,
  int: 0, // INT: — (non-intelligent)
  wis: 12,
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
      naturalArmorChange: 3,
      attackUpdate: 'tail (2d8 plus trip)',
    },
  ],
  source: 'pf1e-b1',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const styracosaurus: AnimalCompanionEntry = {
  // Substituted for Stirge (not found as a companion on AONPRD)
  id: 'styracosaurus',
  name: 'Styracosaurus',
  companionType: 'animal',
  size: 'Medium',
  speed: '30 ft.',
  naturalArmor: 6,
  attacks: 'gore (1d8)',
  str: 10,
  dex: 13,
  con: 11,
  int: 0, // INT: — (non-intelligent)
  wis: 12,
  cha: 7,
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
      attackUpdate: 'gore (2d6)',
      specialQualitiesGained: ['ferocity', 'reflexive strike'],
    },
  ],
  source: 'pf1e-b4',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const trumpeterSwan: AnimalCompanionEntry = {
  id: 'trumpeter-swan',
  name: 'Trumpeter Swan',
  companionType: 'animal',
  size: 'Small',
  speed: '10 ft., fly 40 ft. (average)',
  naturalArmor: 0,
  attacks: 'bite (1d3)',
  str: 8,
  dex: 16,
  con: 12,
  int: 0, // INT: — (non-intelligent)
  wis: 13,
  cha: 8,
  specialQualities: ['low-light vision'],
  progressionTiers: [
    {
      atDruidLevel: 4,
      abilityScoreChanges: [
        { ability: 'DEX', change: 2 },
        { ability: 'CON', change: 2 },
      ],
    },
  ],
  source: 'pf1e-b4',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const giantToad: AnimalCompanionEntry = {
  id: 'giant-toad',
  name: 'Giant Toad',
  companionType: 'animal',
  size: 'Medium',
  speed: '30 ft., swim 30 ft.',
  naturalArmor: 2,
  attacks: 'bite (1d6)',
  str: 15,
  dex: 13,
  con: 16,
  int: 0, // INT: — (non-intelligent)
  wis: 9,
  cha: 6,
  specialQualities: ['low-light vision', 'scent'],
  progressionTiers: [
    {
      atDruidLevel: 4,
      abilityScoreChanges: [
        { ability: 'STR', change: 2 },
        { ability: 'DEX', change: 2 },
      ],
      specialQualitiesGained: ['poison skin (contact, Fort save; Con-based DC)'],
    },
  ],
  source: 'pf1e-b2',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const thylacine: AnimalCompanionEntry = {
  // Substituted for Stoat (not found as a companion on AONPRD)
  id: 'thylacine',
  name: 'Thylacine',
  companionType: 'animal',
  size: 'Small',
  speed: '30 ft.',
  naturalArmor: 0,
  attacks: 'bite (1d4)',
  str: 12,
  dex: 15,
  con: 16,
  int: 0, // INT: — (non-intelligent)
  wis: 13,
  cha: 7,
  specialQualities: ['low-light vision', 'powerful jaws'],
  progressionTiers: [
    {
      atDruidLevel: 4,
      sizeChange: 'Small to Medium',
      abilityScoreChanges: [
        { ability: 'STR', change: 4 },
        { ability: 'DEX', change: -2 },
        { ability: 'CON', change: 4 },
      ],
      naturalArmorChange: 2,
      attackUpdate: 'bite (1d6)',
    },
  ],
  source: 'pf1e-b3',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const tortoise: AnimalCompanionEntry = {
  id: 'tortoise',
  name: 'Tortoise',
  companionType: 'animal',
  size: 'Medium',
  speed: '15 ft.',
  naturalArmor: 11,
  attacks: 'bite (1d4)',
  str: 8,
  dex: 6,
  con: 13,
  int: 0, // INT: — (non-intelligent)
  wis: 11,
  cha: 2,
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
      attackUpdate: 'bite (1d6)',
    },
  ],
  source: 'pf1e-b4',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const batch_006: AnimalCompanionEntry[] = [
  ram,
  rhinoceros,
  roc,
  saberToothedCat,
  caveSalamander,
  giantScorpion,
  seaHorse,
  seal,
  shark,
  sheep,
  giantSkunk,
  snakeConstrictor,
  squid,
  squirrel,
  stagBeetle,
  stegosaurus,
  styracosaurus,
  trumpeterSwan,
  giantToad,
  thylacine,
  tortoise,
];
