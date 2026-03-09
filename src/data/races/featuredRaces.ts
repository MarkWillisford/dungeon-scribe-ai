// Featured Races — from d20pfsrd.com Advanced Race Guide
// Source: https://www.d20pfsrd.com/races/other-races/featured-races/

import { Size } from '@/types/base';
import { RaceCategory, RacePowerTier, ExpandedRaceData } from './types';

export const FEATURED_RACES: ExpandedRaceData[] = [
  {
    name: 'Aasimar',
    category: 'Featured',
    powerTier: 'Advanced (11-20 RP)',
    racePoints: 15,
    size: Size.Medium,
    speed: 30,
    type: 'Outsider',
    subtypes: ['Native'],
    abilityModifiers: {
      wisdom: 2,
      charisma: 2,
    },
    senses: ['Darkvision 60 ft.'],
    racialTraits: [
      {
        name: 'Celestial Resistance',
        description:
          'Aasimars have acid resistance 5, cold resistance 5, and electricity resistance 5.',
      },
      {
        name: 'Skilled',
        description: 'Aasimars have a +2 racial bonus on Diplomacy and Perception checks.',
      },
      {
        name: 'Spell-Like Ability',
        description:
          "Aasimars can use daylight once per day as a spell-like ability (caster level equals the aasimar's class level).",
      },
    ],
    languages: ['Common', 'Celestial'],
    bonusLanguages: ['Draconic', 'Dwarven', 'Elven', 'Gnome', 'Halfling', 'Sylvan'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Catfolk',
    category: 'Featured',
    powerTier: 'Standard (1-10 RP)',
    racePoints: 9,
    size: Size.Medium,
    speed: 30,
    type: 'Humanoid',
    subtypes: ['Catfolk'],
    abilityModifiers: {
      dexterity: 2,
      charisma: 2,
      wisdom: -2,
    },
    senses: ['Low-light vision'],
    racialTraits: [
      {
        name: "Cat's Luck",
        description:
          'Once per day when a catfolk makes a Reflex saving throw, he can roll the saving throw twice and take the better result. He must decide to use this ability before the saving throw is rolled.',
      },
      {
        name: 'Natural Hunter',
        description:
          'Catfolk receive a +2 racial bonus on Perception, Stealth, and Survival checks.',
      },
      {
        name: 'Sprinter',
        description:
          'Catfolk gain a 10-foot racial bonus to their speed when using the charge, run, or withdraw actions.',
      },
    ],
    languages: ['Common', 'Catfolk'],
    bonusLanguages: ['Elven', 'Gnoll', 'Gnome', 'Goblin', 'Halfling', 'Orc', 'Sylvan'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Dhampir',
    category: 'Featured',
    powerTier: 'Advanced (11-20 RP)',
    racePoints: 11,
    size: Size.Medium,
    speed: 30,
    type: 'Humanoid',
    subtypes: ['Dhampir'],
    abilityModifiers: {
      dexterity: 2,
      charisma: 2,
      constitution: -2,
    },
    senses: ['Darkvision 60 ft.', 'Low-light vision'],
    racialTraits: [
      {
        name: 'Undead Resistance',
        description:
          'Dhampirs gain a +2 racial bonus on saving throws against disease and mind-affecting effects.',
      },
      {
        name: 'Resist Level Drain',
        description:
          'A dhampir takes no penalties from energy drain effects, though he can still be killed if he accrues more negative levels than he has Hit Dice. After 24 hours, any negative levels a dhampir takes are removed without the need for an additional saving throw.',
      },
      {
        name: 'Manipulative',
        description: 'Dhampirs gain a +2 racial bonus on Bluff and Perception checks.',
      },
      {
        name: 'Spell-Like Ability',
        description:
          "A dhampir can use detect undead three times per day as a spell-like ability (caster level equals the dhampir's class level).",
      },
      {
        name: 'Light Sensitivity',
        description:
          'Dhampirs are dazzled in areas of bright sunlight or within the radius of a daylight spell.',
      },
      {
        name: 'Negative Energy Affinity',
        description:
          'A dhampir reacts to positive and negative energy as if it were undead — positive energy harms it, negative energy heals it.',
      },
    ],
    languages: ['Common'],
    bonusLanguages: ['Any (except secret languages such as Druidic)'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Drow',
    category: 'Featured',
    powerTier: 'Advanced (11-20 RP)',
    racePoints: 14,
    size: Size.Medium,
    speed: 30,
    type: 'Humanoid',
    subtypes: ['Elf'],
    abilityModifiers: {
      dexterity: 2,
      charisma: 2,
      constitution: -2,
    },
    senses: ['Superior darkvision 120 ft.'],
    racialTraits: [
      {
        name: 'Immunities',
        description:
          'Drow are immune to magic sleep effects and gain a +2 racial bonus on saving throws against enchantment spells and effects.',
      },
      {
        name: 'Spell Resistance',
        description: 'Drow possess spell resistance equal to 6 plus their total class levels.',
      },
      {
        name: 'Keen Senses',
        description: 'Drow receive a +2 racial bonus on Perception checks.',
      },
      {
        name: 'Spell-Like Abilities',
        description:
          'A drow can cast dancing lights, darkness, and faerie fire each once per day, using her total character level as caster level.',
      },
      {
        name: 'Poison Use',
        description:
          'Drow are skilled in the use of poison and never risk accidentally poisoning themselves.',
      },
      {
        name: 'Weapon Familiarity',
        description: 'Drow are proficient with the hand crossbow, rapier, and short sword.',
      },
      {
        name: 'Light Blindness',
        description:
          'Abrupt exposure to bright light blinds drow for 1 round; on subsequent rounds, they are dazzled as long as they remain in the affected area.',
      },
    ],
    languages: ['Elven', 'Undercommon'],
    bonusLanguages: [
      'Abyssal',
      'Aklo',
      'Aquan',
      'Common',
      'Draconic',
      'Drow Sign Language',
      'Gnome',
      'Goblin',
    ],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Fetchling',
    category: 'Featured',
    powerTier: 'Advanced (11-20 RP)',
    racePoints: 17,
    size: Size.Medium,
    speed: 30,
    type: 'Outsider',
    subtypes: ['Native'],
    abilityModifiers: {
      dexterity: 2,
      charisma: 2,
      wisdom: -2,
    },
    senses: ['Darkvision 60 ft.', 'Low-light vision'],
    racialTraits: [
      {
        name: 'Shadow Blending',
        description:
          'Attacks against a fetchling in dim light have a 50% miss chance instead of the normal 20% miss chance.',
      },
      {
        name: 'Shadowy Resistance',
        description: 'Fetchlings have cold resistance 5 and electricity resistance 5.',
      },
      {
        name: 'Skilled',
        description: 'Fetchlings have a +2 racial bonus on Knowledge (planes) and Stealth checks.',
      },
      {
        name: 'Spell-Like Abilities',
        description:
          'A fetchling can use disguise self once per day as a spell-like ability. At 9th level, he can use shadow walk once per day. At 13th level, he can use plane shift once per day (self only, to the Shadow Plane or Material Plane only).',
      },
    ],
    languages: ['Common'],
    bonusLanguages: ['Aklo', 'Aquan', 'Auran', 'Draconic', "D'ziriak", 'Ignan', 'Terran'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Goblin',
    category: 'Featured',
    powerTier: 'Standard (1-10 RP)',
    racePoints: 10,
    size: Size.Small,
    speed: 30,
    type: 'Humanoid',
    subtypes: ['Goblinoid'],
    abilityModifiers: {
      dexterity: 4,
      strength: -2,
      charisma: -2,
    },
    senses: ['Darkvision 60 ft.'],
    racialTraits: [
      {
        name: 'Skilled',
        description: 'Goblins gain a +4 racial bonus on Ride and Stealth checks.',
      },
      {
        name: 'Fast Movement',
        description:
          'Goblins gain a +10 foot bonus to their base speed (already included in base speed of 30 ft.).',
      },
    ],
    languages: ['Goblin'],
    bonusLanguages: ['Common', 'Draconic', 'Dwarven', 'Gnoll', 'Gnome', 'Halfling', 'Orc'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Hobgoblin',
    category: 'Featured',
    powerTier: 'Standard (1-10 RP)',
    racePoints: 9,
    size: Size.Medium,
    speed: 30,
    type: 'Humanoid',
    subtypes: ['Goblinoid'],
    abilityModifiers: {
      dexterity: 2,
      constitution: 2,
    },
    senses: ['Darkvision 60 ft.'],
    racialTraits: [
      {
        name: 'Sneaky',
        description: 'Hobgoblins receive a +4 racial bonus on Stealth checks.',
      },
    ],
    languages: ['Common', 'Goblin'],
    bonusLanguages: ['Draconic', 'Dwarven', 'Infernal', 'Giant', 'Orc'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Ifrit',
    category: 'Featured',
    powerTier: 'Standard (1-10 RP)',
    racePoints: 6,
    size: Size.Medium,
    speed: 30,
    type: 'Outsider',
    subtypes: ['Native'],
    abilityModifiers: {
      dexterity: 2,
      charisma: 2,
      wisdom: -2,
    },
    senses: ['Darkvision 60 ft.'],
    racialTraits: [
      {
        name: 'Energy Resistance',
        description: 'Ifrits have fire resistance 5.',
      },
      {
        name: 'Spell-Like Ability',
        description:
          "Ifrits can use burning hands once per day as a spell-like ability (caster level equals the ifrit's level; DC 11 + Charisma modifier).",
      },
      {
        name: 'Fire Affinity',
        description:
          'Ifrit sorcerers with the elemental (fire) bloodline treat their Charisma score as 2 points higher for all sorcerer class abilities. Ifrit spellcasters with the Fire domain use their domain powers and spells at +1 caster level.',
      },
    ],
    languages: ['Common', 'Ignan'],
    bonusLanguages: ['Aquan', 'Auran', 'Dwarven', 'Elven', 'Gnome', 'Halfling', 'Terran'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Kobold',
    category: 'Featured',
    powerTier: 'Standard (1-10 RP)',
    racePoints: 5,
    size: Size.Small,
    speed: 30,
    type: 'Humanoid',
    subtypes: ['Reptilian'],
    abilityModifiers: {
      dexterity: 2,
      strength: -4,
      constitution: -2,
    },
    senses: ['Darkvision 60 ft.'],
    racialTraits: [
      {
        name: 'Natural Armor',
        description: 'Kobolds have a +1 natural armor bonus from their scaly skin.',
      },
      {
        name: 'Crafty',
        description:
          'Kobolds gain a +2 racial bonus on Craft (trapmaking), Perception, and Profession (miner) checks. Craft (trapmaking) and Profession (miner) are always class skills for a kobold.',
      },
      {
        name: 'Light Sensitivity',
        description:
          'Kobolds are dazzled in areas of bright sunlight or within the radius of a daylight spell.',
      },
    ],
    languages: ['Draconic'],
    bonusLanguages: ['Common', 'Dwarven', 'Gnome', 'Undercommon'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Orc',
    category: 'Featured',
    powerTier: 'Standard (1-10 RP)',
    racePoints: 8,
    size: Size.Medium,
    speed: 30,
    type: 'Humanoid',
    subtypes: ['Orc'],
    abilityModifiers: {
      strength: 4,
      intelligence: -2,
      wisdom: -2,
      charisma: -2,
    },
    senses: ['Darkvision 60 ft.'],
    racialTraits: [
      {
        name: 'Ferocity',
        description:
          'Orcs can remain conscious and continue fighting even when their hit point totals fall below 0. Orcs are still staggered at 0 hit points or lower and lose 1 hit point each round as normal.',
      },
      {
        name: 'Weapon Familiarity',
        description:
          'Orcs are always proficient with greataxes and falchions, and treat any weapon with the word "orc" in its name as a martial weapon.',
      },
      {
        name: 'Light Sensitivity',
        description:
          'Orcs are dazzled in areas of bright sunlight or within the radius of a daylight spell.',
      },
    ],
    languages: ['Common', 'Orc'],
    bonusLanguages: ['Dwarven', 'Giant', 'Gnoll', 'Goblin', 'Undercommon'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Oread',
    category: 'Featured',
    powerTier: 'Standard (1-10 RP)',
    racePoints: 6,
    size: Size.Medium,
    speed: 20,
    type: 'Outsider',
    subtypes: ['Native'],
    abilityModifiers: {
      strength: 2,
      wisdom: 2,
      charisma: -2,
    },
    senses: ['Darkvision 60 ft.'],
    racialTraits: [
      {
        name: 'Energy Resistance',
        description: 'Oreads have acid resistance 5.',
      },
      {
        name: 'Spell-Like Ability',
        description:
          "Oreads can use magic stone once per day as a spell-like ability (caster level equals the oread's total character level).",
      },
      {
        name: 'Earth Affinity',
        description:
          'Oread sorcerers with the elemental (earth) bloodline treat their Charisma score as 2 points higher for all sorcerer class abilities. Oread clerics with the Earth domain use their domain powers and spells at +1 caster level.',
      },
    ],
    languages: ['Common', 'Terran'],
    bonusLanguages: [
      'Aquan',
      'Auran',
      'Dwarven',
      'Elven',
      'Gnome',
      'Halfling',
      'Ignan',
      'Undercommon',
    ],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Ratfolk',
    category: 'Featured',
    powerTier: 'Standard (1-10 RP)',
    racePoints: 9,
    size: Size.Small,
    speed: 20,
    type: 'Humanoid',
    subtypes: ['Ratfolk'],
    abilityModifiers: {
      dexterity: 2,
      intelligence: 2,
      strength: -2,
    },
    senses: ['Darkvision 60 ft.'],
    racialTraits: [
      {
        name: 'Tinker',
        description:
          'Ratfolk gain a +2 racial bonus on Craft (alchemy), Perception, and Use Magic Device checks.',
      },
      {
        name: 'Rodent Empathy',
        description:
          'Ratfolk gain a +4 racial bonus on Handle Animal checks made to influence rodents.',
      },
      {
        name: 'Swarming',
        description:
          "Ratfolk are used to living and fighting communally, and are adept at swarming foes for their own gain and their foes' detriment. Up to two ratfolk can share the same square at the same time. If two ratfolk in the same square attack the same foe, they are considered to be flanking that foe.",
      },
    ],
    languages: ['Common'],
    bonusLanguages: [
      'Aklo',
      'Draconic',
      'Dwarven',
      'Gnoll',
      'Gnome',
      'Goblin',
      'Halfling',
      'Orc',
      'Undercommon',
    ],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Sylph',
    category: 'Featured',
    powerTier: 'Standard (1-10 RP)',
    racePoints: 6,
    size: Size.Medium,
    speed: 30,
    type: 'Outsider',
    subtypes: ['Native'],
    abilityModifiers: {
      dexterity: 2,
      intelligence: 2,
      constitution: -2,
    },
    senses: ['Darkvision 60 ft.'],
    racialTraits: [
      {
        name: 'Energy Resistance',
        description: 'Sylphs have electricity resistance 5.',
      },
      {
        name: 'Spell-Like Ability',
        description:
          "Sylphs can use feather fall once per day as a spell-like ability (caster level equals the sylph's total character level).",
      },
      {
        name: 'Air Affinity',
        description:
          'Sylph sorcerers with the elemental (air) bloodline treat their Charisma score as 2 points higher for all sorcerer class abilities. Sylph spellcasters with the Air domain use their domain powers and spells at +1 caster level.',
      },
    ],
    languages: ['Common', 'Auran'],
    bonusLanguages: ['Aquan', 'Dwarven', 'Elven', 'Gnome', 'Halfling', 'Ignan', 'Terran'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Tengu',
    category: 'Featured',
    powerTier: 'Advanced (11-20 RP)',
    racePoints: 13,
    size: Size.Medium,
    speed: 30,
    type: 'Humanoid',
    subtypes: ['Tengu'],
    abilityModifiers: {
      dexterity: 2,
      wisdom: 2,
      constitution: -2,
    },
    senses: ['Low-light vision'],
    racialTraits: [
      {
        name: 'Sneaky',
        description: 'Tengu gain a +2 racial bonus on Perception and Stealth checks.',
      },
      {
        name: 'Gifted Linguist',
        description:
          'Tengu gain a +4 racial bonus on Linguistics checks, and learn 2 languages each time they gain a rank in Linguistics rather than 1.',
      },
      {
        name: 'Swordtrained',
        description:
          'Tengu are trained from birth in swordplay, and as a result are automatically proficient with sword-like weapons (including bastard swords, daggers, elven curve blades, falchions, greatswords, kukris, longswords, punching daggers, rapiers, scimitars, short swords, and two-bladed swords).',
      },
      {
        name: 'Natural Weapon',
        description: 'A tengu has a bite attack that deals 1d3 points of damage.',
      },
    ],
    languages: ['Common', 'Tengu'],
    bonusLanguages: ['Any (except secret languages such as Druidic)'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Tiefling',
    category: 'Featured',
    powerTier: 'Advanced (11-20 RP)',
    racePoints: 13,
    size: Size.Medium,
    speed: 30,
    type: 'Outsider',
    subtypes: ['Native'],
    abilityModifiers: {
      dexterity: 2,
      intelligence: 2,
      charisma: -2,
    },
    senses: ['Darkvision 60 ft.'],
    racialTraits: [
      {
        name: 'Fiendish Resistance',
        description:
          'Tieflings have cold resistance 5, electricity resistance 5, and fire resistance 5.',
      },
      {
        name: 'Skilled',
        description: 'Tieflings gain a +2 racial bonus on Bluff and Stealth checks.',
      },
      {
        name: 'Spell-Like Ability',
        description:
          "Tieflings can use darkness once per day as a spell-like ability (caster level equals the tiefling's class level).",
      },
      {
        name: 'Fiendish Sorcery',
        description:
          'Tiefling sorcerers with the Abyssal or Infernal bloodline treat their Charisma score as 2 points higher for all sorcerer class abilities.',
      },
    ],
    languages: ['Common', 'Abyssal or Infernal'],
    bonusLanguages: [
      'Abyssal',
      'Draconic',
      'Dwarven',
      'Elven',
      'Gnome',
      'Goblin',
      'Halfling',
      'Infernal',
      'Orc',
    ],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Undine',
    category: 'Featured',
    powerTier: 'Standard (1-10 RP)',
    racePoints: 7,
    size: Size.Medium,
    speed: 30,
    type: 'Outsider',
    subtypes: ['Native'],
    abilityModifiers: {
      dexterity: 2,
      wisdom: 2,
      strength: -2,
    },
    senses: ['Darkvision 60 ft.'],
    alternativeMovements: {
      swim: 30,
    },
    racialTraits: [
      {
        name: 'Energy Resistance',
        description: 'Undines have cold resistance 5.',
      },
      {
        name: 'Spell-Like Ability',
        description:
          "Undines can use hydraulic push once per day as a spell-like ability (caster level equals the undine's character level).",
      },
      {
        name: 'Water Affinity',
        description:
          'Undine sorcerers with the elemental (water) bloodline treat their Charisma score as 2 points higher for all sorcerer class abilities. Undine clerics with the Water domain cast their domain powers and spells at +1 caster level.',
      },
    ],
    languages: ['Common', 'Aquan'],
    bonusLanguages: ['Auran', 'Dwarven', 'Elven', 'Gnome', 'Halfling', 'Ignan', 'Terran'],
    source: 'Advanced Race Guide',
  },
];
