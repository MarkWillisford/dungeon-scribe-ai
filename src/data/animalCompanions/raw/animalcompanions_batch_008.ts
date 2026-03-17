// Batch 008 | first: 'Anglerfish' | last: 'Dire Polar Bear' | count: 25
// Batch metadata: {"batchNum":"008","startEntry":"Anglerfish","lastEntry":"Dire Polar Bear","nextEntry":"DONE","entriesInBatch":25}
// Note: These are AONPRD entries missed in the d20pfsrd-sourced batches 001–002
import { AnimalCompanionEntry } from '@/types/animalCompanions';

export const anglerfish: AnimalCompanionEntry = {
  id: 'anglerfish',
  name: 'Anglerfish',
  companionType: 'animal',
  size: 'Small',
  speed: 'swim 40 ft.',
  naturalArmor: 1,
  attacks: 'bite (1d8 plus grab)',
  str: 13,
  dex: 15,
  con: 12,
  int: 1, // INT: — (non-intelligent)
  wis: 12,
  cha: 2,
  specialQualities: ['aquatic', 'grab (Medium)', 'low-light vision', 'lure (sheds light as per a candle)', 'scent'],
  progressionTiers: [
    {
      atDruidLevel: 4,
      sizeChange: 'Small to Medium',
      abilityScoreChanges: [
        { ability: 'STR', change: 2 },
        { ability: 'DEX', change: -2 },
        { ability: 'CON', change: 4 },
      ],
      naturalArmorChange: 2,
      attackUpdate: 'bite (2d6 plus grab)',
      specialQualitiesGained: ['grab (Large)', 'swallow whole (Medium)'],
    },
  ],
  source: 'pf1e-uw',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const archaeopteryx: AnimalCompanionEntry = {
  id: 'archaeopteryx',
  name: 'Archaeopteryx',
  companionType: 'animal',
  size: 'Small',
  speed: '30 ft., fly 40 ft. (poor)',
  naturalArmor: 1,
  attacks: 'bite (1d4)',
  str: 8,
  dex: 15,
  con: 12,
  int: 2, // INT: — (non-intelligent)
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
  ],
  source: 'pf1e-uw',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const armorfish: AnimalCompanionEntry = {
  id: 'armorfish',
  name: 'Armorfish',
  companionType: 'animal',
  size: 'Small',
  speed: 'swim 30 ft.',
  naturalArmor: 6,
  attacks: 'bite (1d4)',
  str: 13,
  dex: 13,
  con: 15,
  int: 1, // INT: — (non-intelligent)
  wis: 8,
  cha: 2,
  specialQualities: ['aquatic', 'low-light vision', 'scent'],
  progressionTiers: [
    {
      atDruidLevel: 4,
      sizeChange: 'Small to Medium',
      abilityScoreChanges: [
        { ability: 'STR', change: 2 },
        { ability: 'DEX', change: -2 },
        { ability: 'CON', change: 4 },
      ],
      naturalArmorChange: 2,
      attackUpdate: 'bite (1d6)',
    },
  ],
  source: 'pf1e-uw',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const assassinBugGiant: AnimalCompanionEntry = {
  id: 'assassin-bug-giant',
  name: 'Assassin Bug, Giant',
  companionType: 'vermin',
  size: 'Small',
  speed: '30 ft., fly 30 ft. (clumsy)',
  naturalArmor: 2,
  attacks: 'bite (1d4 plus poison), 2 claws (1d3)',
  str: 13,
  dex: 15,
  con: 13,
  int: 0, // INT: — (mindless vermin)
  wis: 10,
  cha: 2,
  specialQualities: ['darkvision 60 ft.', 'poison (frequency 1 round [4]; effect 1d2 Dex; cure 1 save; Con-based DC)', 'poison stream (15-ft. line, Reflex negates; usable every 1d4 rounds)', 'CMD +8 vs. trip'],
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
      attackUpdate: 'bite (1d6 plus poison), 2 claws (1d4)',
    },
  ],
  source: 'pf1e-uw',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const bacallia: AnimalCompanionEntry = {
  id: 'bacallia',
  name: 'Bacallia',
  companionType: 'animal',
  size: 'Medium',
  speed: '40 ft.',
  naturalArmor: 1,
  attacks: '2 hooves (1d4)',
  str: 13,
  dex: 13,
  con: 13,
  int: 2, // INT: — (non-intelligent)
  wis: 12,
  cha: 13,
  specialQualities: ['low-light vision', 'pristine wool', 'spit'],
  progressionTiers: [
    {
      atDruidLevel: 4,
      abilityScoreChanges: [
        { ability: 'STR', change: 2 },
        { ability: 'CON', change: 2 },
      ],
      specialQualitiesGained: ['aura of dazzling (10 ft.)', 'Nimble Moves (bonus feat)'],
    },
  ],
  source: 'pf1e-unknown', // Druma, Profit and Prophecy pg. 62
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const blueWhale: AnimalCompanionEntry = {
  id: 'blue-whale',
  name: 'Blue Whale',
  companionType: 'animal',
  size: 'Medium',
  speed: 'swim 80 ft.',
  naturalArmor: 1,
  attacks: 'tail slap (1d8)',
  str: 11,
  dex: 19,
  con: 10,
  int: 2, // INT: — (non-intelligent)
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
      attackUpdate: 'tail slap (2d6)',
    },
  ],
  source: 'pf1e-b5',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const bullOfZagresh: AnimalCompanionEntry = {
  id: 'bull-of-zagresh',
  name: 'Bull of Zagresh',
  companionType: 'animal',
  size: 'Medium',
  speed: '40 ft.',
  naturalArmor: 4,
  attacks: 'gore (1d8)',
  str: 15,
  dex: 14,
  con: 13,
  int: 2, // INT: — (non-intelligent)
  wis: 11,
  cha: 4,
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
      naturalArmorChange: -1,
      attackUpdate: 'gore (2d6)',
      specialQualitiesGained: ['trample'],
    },
  ],
  source: 'pf1e-unknown', // Belkzen, Hold of the Orc Hordes pg. 55
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const cameroceras: AnimalCompanionEntry = {
  id: 'cameroceras',
  name: 'Cameroceras',
  companionType: 'animal',
  size: 'Medium',
  speed: '5 ft., swim 20 ft., jet 90 ft.',
  naturalArmor: 1,
  attacks: 'tentacles (1d4 plus grab), bite (1d3)',
  str: 14,
  dex: 15,
  con: 11,
  int: 2, // INT: — (non-intelligent)
  wis: 12,
  cha: 2,
  specialQualities: ['low-light vision', 'pressure adaptation'],
  progressionTiers: [
    {
      atDruidLevel: 7,
      sizeChange: 'Medium to Large',
      abilityScoreChanges: [
        { ability: 'STR', change: 4 },
        { ability: 'DEX', change: -2 },
        { ability: 'CON', change: 2 },
      ],
      naturalArmorChange: 2,
      attackUpdate: 'tentacles (1d6 plus grab), bite (1d4)',
      specialQualitiesGained: ['constrict (1d6)'],
    },
  ],
  source: 'pf1e-b5',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const capybara: AnimalCompanionEntry = {
  id: 'capybara',
  name: 'Capybara',
  companionType: 'animal',
  size: 'Medium',
  speed: '30 ft., swim 20 ft.',
  naturalArmor: 1,
  attacks: 'bite (1d6)',
  str: 12,
  dex: 15,
  con: 12,
  int: 2, // INT: — (non-intelligent)
  wis: 13,
  cha: 5,
  specialQualities: ['low-light vision', 'scent'],
  progressionTiers: [
    {
      atDruidLevel: 4,
      abilityScoreChanges: [
        { ability: 'STR', change: 2 },
        { ability: 'CON', change: 2 },
      ],
    },
  ],
  source: 'pf1e-uw',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const caterpillarGiant: AnimalCompanionEntry = {
  id: 'caterpillar-giant',
  name: 'Caterpillar, Giant',
  companionType: 'vermin',
  size: 'Small',
  speed: '30 ft., climb 30 ft.',
  naturalArmor: 2,
  attacks: 'bite (1d6), bristles (1d4 plus poison)',
  str: 14,
  dex: 13,
  con: 13,
  int: 0, // INT: — (mindless vermin)
  wis: 11,
  cha: 2,
  specialQualities: ['compression', 'darkvision 60 ft.', 'poison (frequency 1 round [4]; effect 1d2 Str; cure 1 save; Con-based DC)', 'CMD cannot be tripped'],
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
      attackUpdate: 'bite (1d8), bristles (1d6 plus poison)',
    },
  ],
  source: 'pf1e-uw',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const ceratosaurus: AnimalCompanionEntry = {
  id: 'ceratosaurus',
  name: 'Ceratosaurus',
  companionType: 'animal',
  size: 'Medium',
  speed: '40 ft.',
  naturalArmor: 4,
  attacks: 'bite (1d8)',
  str: 14,
  dex: 17,
  con: 11,
  int: 2, // INT: — (non-intelligent)
  wis: 11,
  cha: 10,
  specialQualities: ['low-light vision', 'scent', 'trip'],
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
      specialQualitiesGained: ['blood rage', 'ferocity'],
    },
  ],
  source: 'pf1e-b5',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const chimpanzee: AnimalCompanionEntry = {
  id: 'chimpanzee',
  name: 'Chimpanzee',
  companionType: 'animal',
  size: 'Small',
  speed: '30 ft., climb 30 ft.',
  naturalArmor: 1,
  attacks: 'bite (1d4), slam (1d4 plus grab)',
  str: 13,
  dex: 17,
  con: 12,
  int: 2, // INT: — (non-intelligent)
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
      attackUpdate: 'bite (1d6), slam (1d4 plus grab)',
    },
  ],
  source: 'pf1e-uw',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const cockroachGiant: AnimalCompanionEntry = {
  id: 'cockroach-giant',
  name: 'Cockroach, Giant',
  companionType: 'vermin',
  size: 'Small',
  speed: '30 ft., climb 30 ft., fly 20 ft. (poor)',
  naturalArmor: 1,
  attacks: 'bite (1d4)',
  str: 9,
  dex: 10,
  con: 17,
  int: 0, // INT: — (mindless vermin)
  wis: 11,
  cha: 2,
  specialQualities: ['darkvision 60 ft.', 'hold breath', 'light sensitivity', 'tremorsense 60 ft.', 'CMD +8 vs. trip', 'Endurance (bonus feat)'],
  progressionTiers: [
    {
      atDruidLevel: 4,
      abilityScoreChanges: [
        { ability: 'STR', change: 2 },
        { ability: 'DEX', change: 2 },
        { ability: 'CON', change: 2 },
      ],
      naturalArmorChange: 2,
      specialQualitiesGained: ['fly 30 ft. (poor)', 'Diehard (bonus feat)'],
    },
  ],
  source: 'pf1e-uw',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const corpseEaterFungus: AnimalCompanionEntry = {
  id: 'corpse-eater-fungus',
  name: 'Corpse-Eater Fungus',
  companionType: 'plant',
  size: 'Small',
  speed: '30 ft.',
  naturalArmor: 2,
  attacks: 'bite (1d6 plus 1d2 acid)',
  str: 14,
  dex: 13,
  con: 12,
  int: 1, // INT: — (non-intelligent)
  wis: 11,
  cha: 4,
  specialQualities: ['darkvision 60 ft.', 'spit acid (ranged touch attack, 30-ft. range, 1d6 acid)', 'CMD +12 vs. trip'],
  progressionTiers: [
    {
      atDruidLevel: 4,
      sizeChange: 'Small to Medium',
      abilityScoreChanges: [
        { ability: 'STR', change: 4 },
        { ability: 'DEX', change: -2 },
        { ability: 'CON', change: 2 },
      ],
      naturalArmorChange: 2,
      attackUpdate: 'bite (1d8 plus 1d4 acid)',
      specialQualitiesGained: ['spit acid damage increases to 1d8'],
    },
  ],
  source: 'pf1e-uw',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const creepingPuffball: AnimalCompanionEntry = {
  id: 'creeping-puffball',
  name: 'Creeping Puffball',
  companionType: 'plant',
  size: 'Small',
  speed: '30 ft.',
  naturalArmor: 1,
  attacks: 'slam (1d4 plus poison)',
  str: 12,
  dex: 15,
  con: 14,
  int: 1, // INT: — (non-intelligent)
  wis: 12,
  cha: 9,
  specialQualities: ['darkvision 60 ft.', 'poison (frequency 1 round [4]; effect 1d2 Wis and dazzled; cure 1 save; Con-based DC)', 'defensive puff (1/minute as immediate action, exposes adjacent creature to poison)', 'CMD cannot be tripped'],
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
      attackUpdate: 'slam (1d6 plus poison)',
    },
  ],
  source: 'pf1e-uw',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const dallo: AnimalCompanionEntry = {
  id: 'dallo',
  name: 'Dallo',
  companionType: 'animal',
  size: 'Small',
  speed: '30 ft., burrow 10 ft.',
  naturalArmor: 2,
  attacks: '2 claws (1d3), gore (1d4)',
  str: 11,
  dex: 12,
  con: 13,
  int: 2, // INT: — (non-intelligent)
  wis: 13,
  cha: 8,
  specialQualities: ['darkvision 30 ft.', 'low-light vision', 'scent'],
  progressionTiers: [
    {
      atDruidLevel: 4,
      sizeChange: 'Small to Medium',
      abilityScoreChanges: [
        { ability: 'STR', change: 4 },
        { ability: 'DEX', change: -2 },
        { ability: 'CON', change: 2 },
      ],
      attackUpdate: 'gore (1d6), 2 claws (1d4)',
    },
  ],
  source: 'pf1e-unknown', // Pathfinder #118: Siege of Stone pg. 82
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const digmaul: AnimalCompanionEntry = {
  id: 'digmaul',
  name: 'Digmaul',
  companionType: 'animal',
  size: 'Small',
  speed: '50 ft.',
  naturalArmor: 1,
  attacks: 'bite (1d4), 2 claws (1d2), tail (1d2)',
  str: 10,
  dex: 21,
  con: 13,
  int: 2, // INT: — (non-intelligent)
  wis: 12,
  cha: 6,
  specialQualities: ['ball tail', 'low-light vision', 'scent'],
  progressionTiers: [
    {
      atDruidLevel: 4,
      sizeChange: 'Small to Medium',
      abilityScoreChanges: [
        { ability: 'STR', change: 4 },
        { ability: 'DEX', change: -2 },
        { ability: 'CON', change: 2 },
      ],
      attackUpdate: 'bite (1d6), 2 claws (1d3), tail (1d3)',
    },
  ],
  source: 'pf1e-b5',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const iguanodon: AnimalCompanionEntry = {
  id: 'iguanodon',
  name: 'Iguanodon',
  companionType: 'animal',
  size: 'Medium',
  speed: '30 ft.',
  naturalArmor: 3,
  attacks: 'claw (1d6)',
  str: 17,
  dex: 15,
  con: 15,
  int: 2, // INT: — (non-intelligent)
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
      naturalArmorChange: -1,
      attackUpdate: 'claw (1d8)',
      specialQualitiesGained: ['thumb spikes'],
    },
  ],
  source: 'pf1e-b3',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const pachycephalosaurus: AnimalCompanionEntry = {
  id: 'pachycephalosaurus',
  name: 'Pachycephalosaurus',
  companionType: 'animal',
  size: 'Medium',
  speed: '30 ft.',
  naturalArmor: 3,
  attacks: 'gore (1d8)',
  str: 15,
  dex: 16,
  con: 13,
  int: 2, // INT: — (non-intelligent)
  wis: 12,
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
      naturalArmorChange: -1,
      attackUpdate: 'gore (1d10)',
      specialQualitiesGained: ['clobbering charge'],
    },
  ],
  source: 'pf1e-b3',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const parasaurolophus: AnimalCompanionEntry = {
  id: 'parasaurolophus',
  name: 'Parasaurolophus',
  companionType: 'animal',
  size: 'Medium',
  speed: '30 ft.',
  naturalArmor: 2,
  attacks: 'tail (1d6)',
  str: 11,
  dex: 18,
  con: 9,
  int: 2, // INT: — (non-intelligent)
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
      attackUpdate: 'tail (1d8)',
      specialQualitiesGained: ['trample (1d8)'],
    },
  ],
  source: 'pf1e-b2',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const spinosaurus: AnimalCompanionEntry = {
  id: 'spinosaurus',
  name: 'Spinosaurus',
  companionType: 'animal',
  size: 'Medium',
  speed: '30 ft., swim 20 ft.',
  naturalArmor: 3,
  attacks: 'bite (1d6), 2 claws (1d4)',
  str: 18,
  dex: 15,
  con: 15,
  int: 2, // INT: — (non-intelligent)
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
      attackUpdate: 'bite (1d8), 2 claws (1d6)',
    },
  ],
  source: 'pf1e-b3',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const triceratops: AnimalCompanionEntry = {
  id: 'triceratops',
  name: 'Triceratops',
  companionType: 'animal',
  size: 'Medium',
  speed: '30 ft.',
  naturalArmor: 6,
  attacks: 'gore (1d8)',
  str: 10,
  dex: 13,
  con: 11,
  int: 2, // INT: — (non-intelligent)
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
      specialQualitiesGained: ['powerful charge'],
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const tylosaurus: AnimalCompanionEntry = {
  id: 'tylosaurus',
  name: 'Tylosaurus',
  companionType: 'animal',
  size: 'Medium',
  speed: '20 ft., swim 50 ft.',
  naturalArmor: 3,
  attacks: 'bite (1d6)',
  str: 10,
  dex: 17,
  con: 10,
  int: 2, // INT: — (non-intelligent)
  wis: 13,
  cha: 9,
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
      naturalArmorChange: -1,
      attackUpdate: 'bite (1d8)',
      specialQualitiesGained: ['grab'],
    },
  ],
  source: 'pf1e-b2',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const velociraptor: AnimalCompanionEntry = {
  id: 'velociraptor',
  name: 'Velociraptor',
  companionType: 'animal',
  size: 'Small',
  speed: '60 ft.',
  naturalArmor: 1,
  attacks: '2 talons (1d6), bite (1d4)',
  str: 11,
  dex: 17,
  con: 17,
  int: 2, // INT: — (non-intelligent)
  wis: 12,
  cha: 14,
  specialQualities: ['low-light vision', 'scent'],
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
      attackUpdate: '2 talons (1d8), bite (1d6), 2 claws (1d4)',
      specialQualitiesGained: ['pounce'],
    },
  ],
  source: 'pf1e-b4',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const direPolarBear: AnimalCompanionEntry = {
  id: 'dire-polar-bear',
  name: 'Dire Polar Bear',
  companionType: 'animal',
  size: 'Small',
  speed: '40 ft.',
  naturalArmor: 2,
  attacks: 'bite (1d4), 2 claws (1d3)',
  str: 15,
  dex: 15,
  con: 13,
  int: 2, // INT: — (non-intelligent)
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

export const batch_008: AnimalCompanionEntry[] = [
  anglerfish,
  archaeopteryx,
  armorfish,
  assassinBugGiant,
  bacallia,
  blueWhale,
  bullOfZagresh,
  cameroceras,
  capybara,
  caterpillarGiant,
  ceratosaurus,
  chimpanzee,
  cockroachGiant,
  corpseEaterFungus,
  creepingPuffball,
  dallo,
  digmaul,
  iguanodon,
  pachycephalosaurus,
  parasaurolophus,
  spinosaurus,
  triceratops,
  tylosaurus,
  velociraptor,
  direPolarBear,
];
