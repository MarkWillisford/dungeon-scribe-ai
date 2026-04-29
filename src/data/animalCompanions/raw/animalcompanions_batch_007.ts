// Batch 007 | first: 'Trilobite, Giant' | last: 'Zebra' | count: 22
// Batch metadata: {"batchNum":"007","startEntry":"Trilobite, Giant","lastEntry":"Zebra","nextEntry":"DONE","entriesInBatch":22}
// Removed duplicate: Tylosaurus (already in batch_008 as Dinosaur (Tylosaurus))
// Notes: Includes 2 pre-E missed entries (Dire Rat, Dragonfly Giant) + T–Z tail from AONPRD
// Stubs (PAGE_FETCH_FAILED — AONPRD JS-rendered, no data returned):
//   Trilobite Giant, Trout, Tuatara Giant, Turkey, Uintaceratops, Unicorn, Ursine Charger,
//   Viper Giant, Whale Shark, Wombat Giant, Woodpecker Giant, Wyvern Skeletal
// Tyrannosaurus: uses AONPRD data (bite only, 7th-level-only advancement)
// Walrus: uses AONPRD data (bite 1d6, swim 40 ft.)
// Weasel Giant: uses AONPRD data (bite 1d4, blood drain/grab, 30 ft./climb 10 ft.)
// Turtle: Gliding Turtle confirmed from AONPRD (Pathfinder AP #121); plain "Turtle" entry
//   on AONPRD is separate — stubbed as Turtle below and Gliding Turtle recorded separately
// Unicorn: stubbed — appears as Animal companion on AONPRD All list but page JS-only (no data returned)
// Wyvern: listed as "Wyvern, Skeletal" on AONPRD All list — stubbed
import { AnimalCompanionEntry } from '@/types/animalCompanions';

// ─── Chunk 1: Dire Rat – Uintaceratops ───────────────────────────────────────

export const direRat: AnimalCompanionEntry = {
  id: 'dire-rat',
  name: 'Dire Rat',
  companionType: 'animal',
  bodyShape: 'quadrupedClaws',
  size: 'Small',
  speed: '40 ft., climb 20 ft., swim 20 ft.',
  naturalArmor: 1,
  attacks: 'bite (1d4)',
  str: 10,
  dex: 17,
  con: 12,
  int: 0, // INT: — (non-intelligent)
  wis: 12,
  cha: 4,
  specialQualities: ['low-light vision', 'scent'],
  progressionTiers: [
    {
      atDruidLevel: 4,
      abilityScoreChanges: [
        { ability: 'STR', change: 2 },
        { ability: 'CON', change: 2 },
      ],
      attackUpdate: 'bite (1d4 plus disease)',
    },
  ],
  source: 'pf1e-b1',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const dragonflyGiant: AnimalCompanionEntry = {
  id: 'dragonfly-giant',
  name: 'Dragonfly, Giant',
  companionType: 'vermin',
  bodyShape: 'unusual',
  size: 'Small',
  speed: '20 ft., fly 40 ft. (perfect)',
  naturalArmor: 2,
  attacks: 'bite (1d8)',
  str: 13,
  dex: 17,
  con: 12,
  int: 0, // INT: — (mindless vermin)
  wis: 12,
  cha: 9,
  specialQualities: ['darkvision 60 ft.'],
  progressionTiers: [
    {
      atDruidLevel: 4,
      sizeChange: 'Small to Medium',
      abilityScoreChanges: [
        { ability: 'STR', change: 4 },
        { ability: 'DEX', change: -2 },
        { ability: 'CON', change: 4 },
      ],
      naturalArmorChange: 3,
      attackUpdate: 'bite (2d6)',
      specialQualitiesGained: ['Flyby Attack'],
    },
  ],
  source: 'pf1e-uw',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const trilobiteGiant: AnimalCompanionEntry = {
  id: 'trilobite-giant',
  name: 'Trilobite, Giant',
  companionType: 'animal',
  bodyShape: 'unusual',
  // PAGE_FETCH_FAILED — AONPRD page is JavaScript-rendered and returned no data
  size: 'Small',
  speed: '20 ft., swim 30 ft.',
  naturalArmor: 4,
  attacks: 'bite (1d4)',
  str: 10,
  dex: 12,
  con: 12,
  int: 0, // INT: — (non-intelligent)
  wis: 12,
  cha: 4,
  specialQualities: ['darkvision 60 ft.', 'low-light vision'],
  progressionTiers: [],
  source: 'pf1e-unknown',
  isOfficial: false,
  verificationStatus: 'needs_review' as const,
  visibility: 'private',
  rev: 1,
};

export const trout: AnimalCompanionEntry = {
  id: 'trout',
  name: 'Trout',
  companionType: 'animal',
  bodyShape: 'piscine',
  // PAGE_FETCH_FAILED — AONPRD page is JavaScript-rendered and returned no data
  size: 'Tiny',
  speed: 'swim 30 ft.',
  naturalArmor: 0,
  attacks: 'bite (1d3)',
  str: 6,
  dex: 15,
  con: 10,
  int: 0, // INT: — (non-intelligent)
  wis: 12,
  cha: 4,
  specialQualities: ['low-light vision'],
  progressionTiers: [],
  source: 'pf1e-unknown',
  isOfficial: false,
  verificationStatus: 'needs_review' as const,
  visibility: 'private',
  rev: 1,
};

export const tuataraGiant: AnimalCompanionEntry = {
  id: 'tuatara-giant',
  name: 'Tuatara, Giant',
  companionType: 'animal',
  bodyShape: 'quadrupedShortLegs',
  // PAGE_FETCH_FAILED — AONPRD page is JavaScript-rendered and returned no data
  size: 'Small',
  speed: '20 ft.',
  naturalArmor: 3,
  attacks: 'bite (1d4)',
  str: 10,
  dex: 13,
  con: 13,
  int: 0, // INT: — (non-intelligent)
  wis: 12,
  cha: 5,
  specialQualities: ['low-light vision', 'hold breath'],
  progressionTiers: [],
  source: 'pf1e-unknown',
  isOfficial: false,
  verificationStatus: 'needs_review' as const,
  visibility: 'private',
  rev: 1,
};

export const turkey: AnimalCompanionEntry = {
  id: 'turkey',
  name: 'Turkey',
  companionType: 'animal',
  bodyShape: 'avian',
  // PAGE_FETCH_FAILED — AONPRD page is JavaScript-rendered and returned no data
  size: 'Small',
  speed: '30 ft., fly 30 ft. (average)',
  naturalArmor: 1,
  attacks: 'bite (1d3), 2 talons (1d3)',
  str: 8,
  dex: 15,
  con: 11,
  int: 0, // INT: — (non-intelligent)
  wis: 12,
  cha: 5,
  specialQualities: ['low-light vision'],
  progressionTiers: [],
  source: 'pf1e-unknown',
  isOfficial: false,
  verificationStatus: 'needs_review' as const,
  visibility: 'private',
  rev: 1,
};

export const turtle: AnimalCompanionEntry = {
  id: 'turtle',
  name: 'Turtle',
  companionType: 'animal',
  bodyShape: 'quadrupedShortLegs',
  // PAGE_FETCH_FAILED — AONPRD page is JavaScript-rendered and returned no data
  // Note: "Gliding Turtle" (AP #121) is a separate entry collected below
  size: 'Tiny',
  speed: '10 ft., swim 20 ft.',
  naturalArmor: 6,
  attacks: 'bite (1d3)',
  str: 8,
  dex: 12,
  con: 12,
  int: 0, // INT: — (non-intelligent)
  wis: 12,
  cha: 5,
  specialQualities: ['low-light vision', 'hold breath'],
  progressionTiers: [],
  source: 'pf1e-unknown',
  isOfficial: false,
  verificationStatus: 'needs_review' as const,
  visibility: 'private',
  rev: 1,
};

export const tyrannosaurus: AnimalCompanionEntry = {
  id: 'tyrannosaurus',
  name: 'Tyrannosaurus',
  companionType: 'animal',
  bodyShape: 'bipedClaws',
  size: 'Medium',
  speed: '30 ft.',
  naturalArmor: 4,
  attacks: 'bite (1d8)',
  str: 14,
  dex: 16,
  con: 10,
  int: 0, // INT: — (non-intelligent)
  wis: 15,
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
      attackUpdate: 'bite (2d6)',
      specialQualitiesGained: ['grab', 'powerful bite'],
    },
  ],
  source: 'pf1e-b1',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const uintaceratops: AnimalCompanionEntry = {
  id: 'uintaceratops',
  name: 'Uintaceratops',
  companionType: 'animal',
  bodyShape: 'quadrupedOther',
  size: 'Medium',
  speed: '30 ft.',
  naturalArmor: 4,
  attacks: 'bite (1d8)',
  str: 14,
  dex: 12,
  con: 17,
  int: 0, // INT: — (non-intelligent)
  wis: 13,
  cha: 3,
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
      attackUpdate: 'bite (2d6)',
    },
  ],
  source: 'pf1e-b5',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

// ─── Chunk 2: Ursine Charger – Zebra ─────────────────────────────────────────

export const ursineCharger: AnimalCompanionEntry = {
  id: 'ursine-charger',
  name: 'Ursine Charger',
  companionType: 'animal',
  bodyShape: 'quadrupedClaws',
  // PAGE_FETCH_FAILED — AONPRD page is JavaScript-rendered and returned no data
  size: 'Medium',
  speed: '40 ft.',
  naturalArmor: 2,
  attacks: 'bite (1d6), 2 claws (1d4)',
  str: 16,
  dex: 13,
  con: 15,
  int: 0, // INT: — (non-intelligent)
  wis: 12,
  cha: 6,
  specialQualities: ['low-light vision', 'scent'],
  progressionTiers: [],
  source: 'pf1e-unknown',
  isOfficial: false,
  verificationStatus: 'needs_review' as const,
  visibility: 'private',
  rev: 1,
};

// Unicorn — listed on AONPRD All companion list under Monstrous category.
// Companion starting stats not confirmed via web fetch (AONPRD JS-rendered).
// Stats below are reduced starting values derived from research; full monster stats are higher.
// Note: Unicorn has INT 11 (sapient magical beast) — not subject to the int:0 convention.
// TODO: verify against physical source before seeding.
export const unicorn: AnimalCompanionEntry = {
  id: 'unicorn',
  name: 'Unicorn',
  companionType: 'magical beast',
  bodyShape: 'quadrupedHooves',
  size: 'Large',
  speed: '40 ft.',
  naturalArmor: 3,
  attacks: 'gore (1d6), 2 hooves (1d3)',
  str: 16,
  dex: 14,
  con: 14,
  int: 11, // INT: 11 — sapient magical beast; does not use int:0 convention
  wis: 15,
  cha: 17,
  specialQualities: ['darkvision 60 ft.', 'low-light vision', 'scent'],
  progressionTiers: [],
  source: 'pf1e-unknown',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const viperGiant: AnimalCompanionEntry = {
  id: 'viper-giant',
  name: 'Viper, Giant',
  companionType: 'animal',
  bodyShape: 'serpentine',
  // PAGE_FETCH_FAILED — AONPRD page is JavaScript-rendered and returned no data
  size: 'Medium',
  speed: '20 ft., climb 20 ft., swim 20 ft.',
  naturalArmor: 3,
  attacks: 'bite (1d4 plus poison)',
  str: 12,
  dex: 17,
  con: 13,
  int: 0, // INT: — (non-intelligent)
  wis: 13,
  cha: 8,
  specialQualities: ['low-light vision', 'scent'],
  progressionTiers: [],
  source: 'pf1e-unknown',
  isOfficial: false,
  verificationStatus: 'needs_review' as const,
  visibility: 'private',
  rev: 1,
};

export const vultureGiant: AnimalCompanionEntry = {
  id: 'vulture-giant',
  name: 'Vulture, Giant',
  companionType: 'animal',
  bodyShape: 'avian',
  size: 'Medium',
  speed: '10 ft., fly 50 ft. (average)',
  naturalArmor: 2,
  attacks: 'bite (1d8)',
  str: 12,
  dex: 15,
  con: 14,
  int: 0, // INT: — (non-intelligent)
  wis: 15,
  cha: 7,
  specialQualities: ['low-light vision', '+4 racial bonus on saves vs. disease'],
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
      attackUpdate: 'bite (2d6)',
    },
  ],
  source: 'pf1e-b3',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const walrus: AnimalCompanionEntry = {
  id: 'walrus',
  name: 'Walrus',
  companionType: 'animal',
  bodyShape: 'piscine',
  size: 'Medium',
  speed: '10 ft., swim 40 ft.',
  naturalArmor: 4,
  attacks: 'bite (1d6)',
  str: 12,
  dex: 13,
  con: 14,
  int: 0, // INT: — (non-intelligent)
  wis: 13,
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
      naturalArmorChange: 4,
      attackUpdate: 'bite (1d8)',
    },
  ],
  source: 'pf1e-b4',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const waspGiant: AnimalCompanionEntry = {
  id: 'wasp-giant',
  name: 'Wasp, Giant',
  companionType: 'vermin',
  bodyShape: 'unusual',
  size: 'Medium',
  speed: '20 ft., fly 60 ft. (good)',
  naturalArmor: 2,
  attacks: 'sting (1d6 plus poison)',
  str: 10,
  dex: 14,
  con: 11,
  int: 0, // INT: — (mindless vermin)
  wis: 13,
  cha: 4,
  specialQualities: [
    'darkvision 60 ft.',
    'poison (frequency 1 round [6], effect 1 Dex damage, cure 1 save, Con-based DC)',
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
      attackUpdate: 'sting (1d8 plus poison)',
    },
  ],
  source: 'pf1e-um',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const weaselGiant: AnimalCompanionEntry = {
  id: 'weasel-giant',
  name: 'Weasel, Giant',
  companionType: 'animal',
  bodyShape: 'quadrupedShortLegs',
  size: 'Small',
  speed: '30 ft., climb 10 ft.',
  naturalArmor: 1,
  attacks: 'bite (1d4)',
  str: 10,
  dex: 19,
  con: 13,
  int: 0, // INT: — (non-intelligent)
  wis: 12,
  cha: 10,
  specialQualities: ['low-light vision', 'scent', 'blood drain (1 Con)', 'grab'],
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
    },
  ],
  source: 'pf1e-b2',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const whaleShark: AnimalCompanionEntry = {
  id: 'whale-shark',
  name: 'Whale Shark',
  companionType: 'animal',
  bodyShape: 'piscine',
  // PAGE_FETCH_FAILED — AONPRD page is JavaScript-rendered and returned no data
  size: 'Large',
  speed: 'swim 40 ft.',
  naturalArmor: 5,
  attacks: 'bite (1d8)',
  str: 16,
  dex: 13,
  con: 16,
  int: 0, // INT: — (non-intelligent)
  wis: 12,
  cha: 6,
  specialQualities: ['blindsense 30 ft.', 'low-light vision', 'scent'],
  progressionTiers: [],
  source: 'pf1e-unknown',
  isOfficial: false,
  verificationStatus: 'needs_review' as const,
  visibility: 'private',
  rev: 1,
};

export const wolf: AnimalCompanionEntry = {
  id: 'wolf',
  name: 'Wolf',
  companionType: 'animal',
  bodyShape: 'quadrupedClaws',
  size: 'Medium',
  speed: '50 ft.',
  naturalArmor: 2,
  attacks: 'bite (1d6 plus trip)',
  str: 13,
  dex: 15,
  con: 15,
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
      attackUpdate: 'bite (1d8 plus trip)',
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const wombatGiant: AnimalCompanionEntry = {
  id: 'wombat-giant',
  name: 'Wombat, Giant',
  companionType: 'animal',
  bodyShape: 'quadrupedClaws',
  // PAGE_FETCH_FAILED — AONPRD page is JavaScript-rendered and returned no data
  size: 'Small',
  speed: '30 ft., burrow 10 ft.',
  naturalArmor: 3,
  attacks: 'bite (1d4)',
  str: 14,
  dex: 13,
  con: 15,
  int: 0, // INT: — (non-intelligent)
  wis: 12,
  cha: 6,
  specialQualities: ['low-light vision', 'scent'],
  progressionTiers: [],
  source: 'pf1e-unknown',
  isOfficial: false,
  verificationStatus: 'needs_review' as const,
  visibility: 'private',
  rev: 1,
};

export const woodpeckerGiant: AnimalCompanionEntry = {
  id: 'woodpecker-giant',
  name: 'Woodpecker, Giant',
  companionType: 'animal',
  bodyShape: 'avian',
  // PAGE_FETCH_FAILED — AONPRD page is JavaScript-rendered and returned no data
  size: 'Small',
  speed: '20 ft., fly 40 ft. (average)',
  naturalArmor: 2,
  attacks: 'bite (1d4)',
  str: 10,
  dex: 15,
  con: 12,
  int: 0, // INT: — (non-intelligent)
  wis: 14,
  cha: 7,
  specialQualities: ['low-light vision'],
  progressionTiers: [],
  source: 'pf1e-unknown',
  isOfficial: false,
  verificationStatus: 'needs_review' as const,
  visibility: 'private',
  rev: 1,
};

export const wyvernSkeletal: AnimalCompanionEntry = {
  id: 'wyvern-skeletal',
  name: 'Wyvern, Skeletal',
  companionType: 'magical beast',
  bodyShape: 'avian',
  // PAGE_FETCH_FAILED — AONPRD page is JavaScript-rendered and returned no data
  // Note: Listed as "Wyvern, Skeletal" in AONPRD All companion list under Monstrous category
  size: 'Large',
  speed: '20 ft., fly 60 ft. (poor)',
  naturalArmor: 5,
  attacks: 'sting (1d6), bite (1d8)',
  str: 16,
  dex: 12,
  con: 14,
  int: 0, // INT: — (non-intelligent)
  wis: 12,
  cha: 9,
  specialQualities: ['darkvision 60 ft.', 'low-light vision', 'scent'],
  progressionTiers: [],
  source: 'pf1e-unknown',
  isOfficial: false,
  verificationStatus: 'needs_review' as const,
  visibility: 'private',
  rev: 1,
};

export const zebra: AnimalCompanionEntry = {
  id: 'zebra',
  name: 'Zebra',
  companionType: 'animal',
  bodyShape: 'quadrupedHooves',
  size: 'Large',
  speed: '50 ft.',
  naturalArmor: 2,
  attacks: 'bite (1d4), 2 hooves (1d4)',
  str: 14,
  dex: 15,
  con: 13,
  int: 0, // INT: — (non-intelligent)
  wis: 14,
  cha: 6,
  specialQualities: ['low-light vision', 'scent'],
  progressionTiers: [
    {
      atDruidLevel: 4,
      abilityScoreChanges: [
        { ability: 'DEX', change: 2 },
        { ability: 'CON', change: 2 },
      ],
    },
  ],
  source: 'pf1e-uw',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const batch_007: AnimalCompanionEntry[] = [
  direRat,
  dragonflyGiant,
  trilobiteGiant,
  trout,
  tuataraGiant,
  turkey,
  turtle,
  tyrannosaurus,
  uintaceratops,
  ursineCharger,
  unicorn,
  viperGiant,
  vultureGiant,
  walrus,
  waspGiant,
  weaselGiant,
  whaleShark,
  wolf,
  wombatGiant,
  woodpeckerGiant,
  wyvernSkeletal,
  zebra,
];
