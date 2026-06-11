// Extended Races — Standard RP extras, Advanced RP, Monstrous RP, Very Powerful, and RP Unknown
// Sources: https://www.d20pfsrd.com/races/other-races/more-races/

import { Size } from '@/types/base';
import { ExpandedRaceData } from './types';

// ============================================================
// Standard RP (1-10) — races not in Core/Featured/Uncommon
// ============================================================

export const STANDARD_RP_EXTRA_RACES: ExpandedRaceData[] = [
  {
    name: 'Gnoll',
    category: 'Uncommon',
    powerTier: 'Standard (1-10 RP)',
    racePoints: 6,
    size: Size.Medium,
    speed: 30,
    type: 'Humanoid',
    subtypes: ['Gnoll'],
    abilityModifiers: {
      strength: 2,
      constitution: 2,
    },
    senses: ['Darkvision 60 ft.'],
    racialTraits: [
      {
        name: 'Natural Armor',
        description: 'Gnolls have a +1 natural armor bonus from their tough hides.',
      },
    ],
    languages: ['Gnoll'],
    bonusLanguages: ['Common', 'Draconic', 'Orc'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Lizardfolk',
    category: 'Uncommon',
    powerTier: 'Standard (1-10 RP)',
    racePoints: 8,
    size: Size.Medium,
    speed: 30,
    type: 'Humanoid',
    subtypes: ['Reptilian'],
    abilityModifiers: {
      strength: 2,
      constitution: 2,
    },
    senses: [],
    alternativeMovements: {
      swim: 30,
    },
    racialTraits: [
      {
        name: 'Natural Armor',
        description: 'Lizardfolk have a +1 natural armor bonus from their scaly skin.',
      },
      {
        name: 'Bite',
        description:
          'Lizardfolk gain a natural bite attack dealing 1d3 damage. The bite is a primary attack, or a secondary attack if wielding manufactured weapons.',
      },
      {
        name: 'Claws',
        description:
          'Lizardfolk receive two claw attacks that are primary natural attacks dealing 1d4 damage each.',
      },
    ],
    languages: ['Draconic'],
    bonusLanguages: ['Aquan', 'Common', 'Goblin', 'Orc'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Monkey Goblin',
    category: 'Uncommon',
    powerTier: 'Standard (1-10 RP)',
    racePoints: 10,
    size: Size.Small,
    speed: 20,
    type: 'Humanoid',
    subtypes: ['Goblinoid'],
    abilityModifiers: {
      dexterity: 4,
      wisdom: -2,
      charisma: -2,
    },
    senses: ['Low-light vision'],
    alternativeMovements: {
      climb: 30,
    },
    racialTraits: [
      {
        name: 'Fearless',
        description: 'Monkey goblins gain a +2 racial bonus on all saving throws against fear.',
      },
      {
        name: 'Acrobatic',
        description: 'Monkey goblins gain a +2 racial bonus on Acrobatics and Stealth checks.',
      },
      {
        name: 'Prehensile Tail',
        description:
          'Monkey goblins have long, flexible tails that they can use to carry objects. They cannot wield weapons with their tails, but they can retrieve small, stowed objects carried on their persons as a swift action.',
      },
    ],
    languages: ['Goblin'],
    bonusLanguages: ['Common', 'Draconic', 'Dwarven', 'Gnoll', 'Gnome', 'Halfling', 'Orc'],
    source: 'Inner Sea Bestiary',
  },
  {
    name: 'Skinwalker',
    category: 'Uncommon',
    powerTier: 'Standard (1-10 RP)',
    racePoints: 10,
    size: Size.Medium,
    speed: 30,
    type: 'Humanoid',
    subtypes: ['Skinwalker', 'Shapechanger'],
    abilityModifiers: {
      wisdom: 2,
      intelligence: -2,
    },
    senses: ['Low-light vision'],
    racialTraits: [
      {
        name: 'Change Shape',
        description:
          'A skinwalker can change shape to a bestial form as a standard action. In bestial form, a skinwalker gains a +2 racial bonus to either Strength, Dexterity, or Constitution (chosen at character creation). While in bestial form, the skinwalker also gains one of the following features: 2 claw attacks dealing 1d4 damage each, darkvision 60 feet, or +1 natural armor bonus.',
      },
      {
        name: 'Animal-Minded',
        description: 'Skinwalkers gain a +2 racial bonus on Handle Animal and wild empathy checks.',
      },
      {
        name: 'Spell-Like Ability',
        description:
          'Skinwalkers with a Wisdom score of 11 or higher can use speak with animals once per day as a spell-like ability.',
      },
    ],
    languages: ['Common'],
    bonusLanguages: ['Any (except secret languages such as Druidic)'],
    source: 'Blood of the Moon',
  },
  {
    name: 'Triaxian',
    category: 'Uncommon',
    powerTier: 'Standard (1-10 RP)',
    racePoints: 10,
    size: Size.Medium,
    speed: 30,
    type: 'Humanoid',
    subtypes: ['Triaxian'],
    abilityModifiers: {
      constitution: 2,
      wisdom: 2,
      strength: -2,
    },
    senses: ['Low-light vision'],
    racialTraits: [
      {
        name: 'Keen Senses',
        description: 'Triaxians receive a +2 racial bonus on Perception checks.',
      },
      {
        name: 'Bonus Feat',
        description: 'Triaxians select one extra feat at 1st level.',
      },
      {
        name: 'Seasoned',
        description:
          'Triaxians suffer no harm from being in hot or cold environments depending on whether they are Summerborn (comfortable 90-110\u00B0F) or Winterborn (comfortable 0-40\u00B0F). They need to attempt Fortitude saves only once per hour instead of every 10 minutes when in more extreme temperatures.',
      },
    ],
    languages: ['Triaxian'],
    bonusLanguages: ['Any (except secret languages such as Druidic)'],
    source: 'People of the Stars',
  },
];

// ============================================================
// Advanced RP (11-20) — races not in Featured/Uncommon
// ============================================================

export const ADVANCED_RP_EXTRA_RACES: ExpandedRaceData[] = [
  {
    name: 'Android',
    category: 'Uncommon',
    powerTier: 'Advanced (11-20 RP)',
    racePoints: 16,
    size: Size.Medium,
    speed: 30,
    type: 'Humanoid',
    subtypes: ['Android'],
    abilityModifiers: {
      dexterity: 2,
      intelligence: 2,
      charisma: -2,
    },
    senses: ['Darkvision 60 ft.', 'Low-light vision'],
    racialTraits: [
      {
        name: 'Alert',
        description: 'Androids gain a +2 racial bonus on Perception checks.',
      },
      {
        name: 'Emotionless',
        description:
          'Androids have problems processing emotions properly, and thus take a -4 penalty on Sense Motive checks.',
      },
      {
        name: 'Constructed',
        description:
          'Androids count as both humanoids and constructs for effects targeting creatures by type. They gain a +4 racial bonus on all saving throws against mind-affecting effects, paralysis, poison, and stun effects. They are not subject to fatigue or exhaustion, and are immune to disease and sleep effects. Androids can never gain morale bonuses, and are immune to fear effects and all emotion-based effects.',
      },
      {
        name: 'Nanite Surge',
        description:
          "An android can use nanite surge once per day as an immediate action, gaining a bonus equal to 3 + the android's character level on any one d20 roll. This must be activated before the roll is made.",
      },
    ],
    languages: ['Common'],
    bonusLanguages: ['Any (except secret languages such as Druidic)'],
    source: 'People of the Stars',
  },
  {
    name: 'Aquatic Elf',
    category: 'Uncommon',
    powerTier: 'Advanced (11-20 RP)',
    racePoints: 14,
    size: Size.Medium,
    speed: 30,
    type: 'Humanoid',
    subtypes: ['Elf', 'Aquatic'],
    abilityModifiers: {
      dexterity: 2,
      intelligence: 2,
      constitution: -2,
    },
    senses: ['Low-light vision'],
    alternativeMovements: {
      swim: 30,
    },
    racialTraits: [
      {
        name: 'Elven Immunities',
        description:
          'Aquatic elves are immune to magic sleep effects and gain a +2 racial saving throw bonus against enchantment spells and effects.',
      },
      {
        name: 'Keen Senses',
        description: 'Aquatic elves receive a +2 racial bonus on Perception checks.',
      },
      {
        name: 'Elven Magic',
        description:
          'Aquatic elves receive a +2 racial bonus on caster level checks made to overcome spell resistance, and a +2 racial bonus on Spellcraft checks made to identify the properties of magic items.',
      },
      {
        name: 'Weapon Familiarity',
        description:
          'Aquatic elves are proficient with rapiers, short swords, and tridents, and treat any weapon with the word "elven" in its name as a martial weapon.',
      },
      {
        name: 'Amphibious',
        description: 'Aquatic elves can breathe both water and air.',
      },
    ],
    languages: ['Common', 'Elven'],
    bonusLanguages: ['Celestial', 'Draconic', 'Gnoll', 'Gnome', 'Goblin', 'Orc', 'Sylvan'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Gathlain',
    category: 'Uncommon',
    powerTier: 'Advanced (11-20 RP)',
    racePoints: 12,
    size: Size.Small,
    speed: 30,
    type: 'Fey',
    subtypes: [],
    abilityModifiers: {
      dexterity: 2,
      charisma: 2,
      constitution: -2,
    },
    senses: ['Low-light vision'],
    alternativeMovements: {
      fly: 40,
    },
    racialTraits: [
      {
        name: 'Natural Armor',
        description: 'Gathlains have a +1 natural armor bonus.',
      },
      {
        name: 'Spell-Like Abilities',
        description:
          "Gathlains can use entangle and feather step each once per day as spell-like abilities (caster level equals the gathlain's character level).",
      },
    ],
    languages: ['Common', 'Sylvan'],
    bonusLanguages: ['Draconic', 'Elven', 'Goblin', 'Halfling', 'Orc'],
    source: 'Ultimate Wilderness',
  },
  {
    name: 'Ghoran',
    category: 'Uncommon',
    powerTier: 'Advanced (11-20 RP)',
    racePoints: 19,
    size: Size.Medium,
    speed: 30,
    type: 'Plant',
    subtypes: [],
    abilityModifiers: {
      constitution: 2,
      charisma: 2,
      intelligence: -2,
    },
    senses: ['Low-light vision'],
    racialTraits: [
      {
        name: 'Natural Armor',
        description: 'Ghorans have a +2 natural armor bonus to AC.',
      },
      {
        name: 'Natural Magic',
        description:
          "Ghorans with a Charisma score of 11 or higher gain the following spell-like abilities: 1/day — detect poison, goodberry, and purify food and drink. The caster level equals the ghoran's character level.",
      },
      {
        name: 'Seed',
        description:
          "As a full-round action, a ghoran can expel a seed from its body. If planted in fertile ground and left undisturbed for 2d6 days, the seed grows into a healthy duplicate of the original ghoran, save that the duplicate has none of the original's gear. The original ghoran who expels a seed takes 1 negative level and the duplicate is effectively the original, as the ghoran's soul transfers to the new body. The original body dies 4d6 hours after the seed is expelled.",
      },
      {
        name: 'Past-Life Knowledge',
        description: 'Ghorans treat all Knowledge skills as class skills.',
      },
      {
        name: 'Light Dependent',
        description:
          'Ghorans take 1d4 points of Constitution damage each day they go without exposure to sunlight.',
      },
      {
        name: 'Delicious',
        description:
          'Ghorans take a -2 penalty on Escape Artist and combat maneuver checks to escape a grapple against a creature that has a bite attack with the grab special attack.',
      },
    ],
    languages: ['Common', 'Sylvan'],
    bonusLanguages: ['Any (except secret languages such as Druidic)'],
    source: 'Ultimate Wilderness',
  },
  {
    name: 'Kasatha',
    category: 'Uncommon',
    powerTier: 'Advanced (11-20 RP)',
    racePoints: 20,
    size: Size.Medium,
    speed: 30,
    type: 'Humanoid',
    subtypes: ['Kasatha'],
    abilityModifiers: {
      dexterity: 2,
      wisdom: 2,
    },
    senses: [],
    racialTraits: [
      {
        name: 'Defensive Training, Greater',
        description: 'Kasathas gain a +2 dodge bonus to Armor Class.',
      },
      {
        name: 'Desert Runner',
        description:
          'Kasathas gain a +4 racial bonus on Constitution checks and Fortitude saves to avoid fatigue, exhaustion, and other ill effects from running, forced marches, starvation, thirst, and hot or cold environments.',
      },
      {
        name: 'Stalker',
        description: 'Perception and Stealth are always class skills for kasathas.',
      },
      {
        name: 'Jumper',
        description:
          'Kasathas are always considered to have a running start when making Acrobatics checks to jump.',
      },
      {
        name: 'Desert Stride',
        description:
          'Kasathas can move through non-magical difficult terrain in desert environments at normal speed.',
      },
      {
        name: 'Multi-Armed',
        description:
          'A kasatha has four arms. One hand is considered its primary hand; all others are off hands. It can use any of its hands for other purposes that require free hands.',
      },
    ],
    languages: ['Common', 'Kasatha'],
    bonusLanguages: ['Dwarven', 'Draconic', 'Gnoll', 'Orc', 'Sphinx'],
    source: 'People of the Stars',
  },
  {
    name: 'Lashunta',
    category: 'Uncommon',
    powerTier: 'Advanced (11-20 RP)',
    racePoints: 11,
    size: Size.Medium,
    speed: 30,
    type: 'Humanoid',
    subtypes: ['Lashunta'],
    abilityModifiers: {
      intelligence: 2,
      // Note: Males get +2 Str/-2 Wis, Females get +2 Cha/-2 Con
      // Stored as the universal modifier; sex-based differences noted in traits
    },
    senses: [],
    racialTraits: [
      {
        name: 'Sexual Dimorphism',
        description:
          'Male lashuntas gain +2 Strength and -2 Wisdom (in addition to +2 Intelligence). Female lashuntas gain +2 Charisma and -2 Constitution (in addition to +2 Intelligence).',
      },
      {
        name: 'Knowledgeable',
        description: 'Lashuntas gain a +2 racial bonus to any one Knowledge skill of their choice.',
      },
      {
        name: 'Lashunta Magic',
        description:
          "Lashuntas with an Intelligence score of 11 or higher gain the following spell-like abilities: at will — daze, mage hand; 1/day — detect thoughts. The caster level for these effects equals the lashunta's class levels.",
      },
      {
        name: 'Limited Telepathy',
        description:
          'A lashunta is able to mentally communicate with any creature within 30 feet with whom she shares a language. This communication is one-way unless the receiving creature also has telepathy or limited telepathy.',
      },
    ],
    languages: ['Elven', 'Lashunta'],
    bonusLanguages: ['Any (except secret languages such as Druidic)'],
    source: 'People of the Stars',
  },
  {
    name: 'Shabti',
    category: 'Uncommon',
    powerTier: 'Advanced (11-20 RP)',
    racePoints: 13,
    size: Size.Medium,
    speed: 30,
    type: 'Outsider',
    subtypes: ['Native'],
    abilityModifiers: {
      constitution: 2,
      charisma: 2,
    },
    senses: ['Darkvision 60 ft.'],
    racialTraits: [
      {
        name: 'Immortal',
        description:
          'Shabti do not age naturally and cannot die of old age. Magical aging effects still apply.',
      },
      {
        name: 'Immune to Undeath',
        description: 'Shabti cannot be transformed into undead creatures.',
      },
      {
        name: 'Resist Level Drain',
        description:
          'A shabti takes no penalties from energy drain effects, though she can still be killed if she accrues more negative levels than she has Hit Dice. After 24 hours, any negative levels are removed without the need for an additional saving throw.',
      },
      {
        name: 'Past Life Knowledge',
        description:
          'Shabti treat all Knowledge skills as class skills due to fragmentary memories of a prior existence.',
      },
      {
        name: 'Shattered Soul',
        description:
          "Returning a shabti to life via raise dead or resurrection requires a caster level check (DC 10 + the shabti's Hit Dice). Failure means another attempt cannot be made for 24 hours.",
      },
      {
        name: 'Spell-Like Ability',
        description:
          "A shabti can use suggestion once per day as a spell-like ability (caster level equals the shabti's class level).",
      },
    ],
    languages: ['Common'],
    bonusLanguages: ['Any (except secret languages such as Druidic)'],
    source: 'People of the Sands',
  },
  {
    name: 'Syrinx',
    category: 'Uncommon',
    powerTier: 'Advanced (11-20 RP)',
    racePoints: 16,
    size: Size.Medium,
    speed: 30,
    type: 'Humanoid',
    subtypes: ['Avian'],
    abilityModifiers: {
      wisdom: 2,
      dexterity: -2,
    },
    senses: ['Darkvision 60 ft.', 'Low-light vision'],
    alternativeMovements: {
      fly: 60,
    },
    racialTraits: [
      {
        name: 'Pride',
        description:
          'Syrinx gain a +2 racial bonus on saving throws against mind-affecting effects.',
      },
      {
        name: 'Nocturnal',
        description: 'Syrinx gain a +2 racial bonus on Perception and Stealth checks at night.',
      },
      {
        name: 'Speak with Avians',
        description:
          'Syrinx can communicate with birds and birdlike magical beasts such as phoenixes and thunderbirds.',
      },
    ],
    languages: ['Syrinx'],
    bonusLanguages: ['Auran', 'Celestial', 'Common', 'Infernal', 'Strix'],
    source: 'Inner Sea Bestiary',
  },
  {
    name: 'Wyrwood',
    category: 'Uncommon',
    powerTier: 'Advanced (11-20 RP)',
    racePoints: 20,
    size: Size.Small,
    speed: 30,
    type: 'Construct',
    subtypes: [],
    abilityModifiers: {
      dexterity: 2,
      intelligence: 2,
      charisma: -2,
    },
    senses: ['Darkvision 60 ft.', 'Low-light vision'],
    racialTraits: [
      {
        name: 'Construct Type',
        description:
          'Wyrwoods are constructs, granting them many immunities. Unlike most constructs, wyrwoods have Constitution scores and are not immune to mind-affecting effects.',
      },
    ],
    languages: ['Common'],
    bonusLanguages: ['Any (except secret languages such as Druidic)'],
    source: 'Bestiary 4',
  },
  {
    name: 'Wyvaran',
    category: 'Uncommon',
    powerTier: 'Advanced (11-20 RP)',
    racePoints: 17,
    size: Size.Medium,
    speed: 30,
    type: 'Dragon',
    subtypes: [],
    abilityModifiers: {
      dexterity: 2,
      wisdom: 2,
      intelligence: -2,
    },
    senses: ['Darkvision 60 ft.', 'Low-light vision'],
    alternativeMovements: {
      fly: 30,
    },
    racialTraits: [
      {
        name: 'Slapping Tail',
        description: 'Wyvarans have a tail attack that is a natural attack dealing 1d8 damage.',
      },
      {
        name: 'Flight',
        description: 'Wyvarans have a fly speed of 30 feet with clumsy maneuverability.',
      },
    ],
    languages: ['Common', 'Draconic'],
    bonusLanguages: ['Any (except secret languages such as Druidic)'],
    source: 'Bestiary 4',
  },
];

// ============================================================
// Monstrous RP (21-30) and Very Powerful (31+)
// ============================================================

export const MONSTROUS_AND_POWERFUL_RACES: ExpandedRaceData[] = [
  {
    name: 'Trox',
    category: 'Uncommon',
    powerTier: 'Monstrous (21-30 RP)',
    racePoints: 28,
    size: Size.Large,
    speed: 30,
    type: 'Monstrous Humanoid',
    subtypes: [],
    abilityModifiers: {
      strength: 8,
      dexterity: -2,
      intelligence: -2,
      wisdom: -2,
      charisma: -2,
    },
    senses: ['Darkvision 60 ft.'],
    alternativeMovements: {
      burrow: 20,
    },
    racialTraits: [
      {
        name: 'Frenzy',
        description:
          'Once per day, whenever a trox takes damage, it flies into a frenzy for 1 minute, gaining a +2 racial bonus to Constitution and Strength, but a -2 penalty to AC.',
      },
      {
        name: 'Grabbing Appendages',
        description:
          'Trox gain the Improved Grapple feat as a bonus feat. They can maintain a grapple and still make attacks with their primary limbs.',
      },
    ],
    languages: ['Terran'],
    bonusLanguages: ['Common', 'Giant', 'Orc'],
    source: 'Bestiary 4',
  },
  {
    name: 'Drow Noble',
    category: 'Uncommon',
    powerTier: 'Very Powerful (31+ RP)',
    racePoints: 41,
    size: Size.Medium,
    speed: 30,
    type: 'Humanoid',
    subtypes: ['Elf'],
    abilityModifiers: {
      dexterity: 4,
      constitution: -2,
      intelligence: 2,
      wisdom: 2,
      charisma: 2,
    },
    senses: ['Superior darkvision 120 ft.'],
    racialTraits: [
      {
        name: 'Immunities',
        description:
          'Drow nobles are immune to magic sleep effects and gain a +2 racial bonus on saving throws against enchantment spells and effects.',
      },
      {
        name: 'Greater Spell Resistance',
        description: 'Drow nobles possess spell resistance equal to 11 + their class levels.',
      },
      {
        name: 'Keen Senses',
        description: 'Drow nobles receive a +2 racial bonus on Perception checks.',
      },
      {
        name: 'Spell-Like Abilities',
        description:
          "Drow nobles can cast dancing lights, deeper darkness, faerie fire, feather fall, and levitate each at will, and have divine favor, dispel magic, and suggestion each once per day. The caster level equals the drow noble's character level.",
      },
      {
        name: 'Poison Use',
        description:
          'Drow nobles are skilled in the use of poison and never risk accidentally poisoning themselves.',
      },
      {
        name: 'Weapon Familiarity',
        description: 'Drow nobles are proficient with the hand crossbow, rapier, and short sword.',
      },
      {
        name: 'Light Blindness',
        description:
          'Abrupt exposure to bright light blinds drow nobles for 1 round; on subsequent rounds, they are dazzled as long as they remain in the affected area.',
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
    name: 'Drider',
    category: 'Uncommon',
    powerTier: 'Very Powerful (31+ RP)',
    racePoints: 35,
    size: Size.Large,
    speed: 40,
    type: 'Aberration',
    subtypes: [],
    abilityModifiers: {
      strength: 2,
      dexterity: 2,
      constitution: 4,
      wisdom: 2,
    },
    senses: ['Darkvision 60 ft.'],
    alternativeMovements: {
      climb: 20,
    },
    racialTraits: [
      {
        name: 'Natural Armor',
        description: 'Driders have a +2 natural armor bonus from their tough exoskeleton.',
      },
      {
        name: 'Greater Spell Resistance',
        description: 'Driders possess spell resistance equal to 11 + their class levels.',
      },
      {
        name: 'Multilegged',
        description:
          'Driders possess eight legs. They gain a +12 racial bonus to CMD against trip attempts and a +10-foot bonus to their base speed.',
      },
    ],
    languages: ['Elven', 'Undercommon'],
    bonusLanguages: ['Abyssal', 'Aklo', 'Common', 'Draconic', 'Giant'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Gargoyle',
    category: 'Uncommon',
    powerTier: 'Very Powerful (31+ RP)',
    racePoints: 36,
    size: Size.Medium,
    speed: 30,
    type: 'Monstrous Humanoid',
    subtypes: [],
    abilityModifiers: {
      strength: 6,
      constitution: 4,
      intelligence: -2,
      wisdom: -2,
      charisma: -2,
    },
    senses: ['Darkvision 60 ft.'],
    alternativeMovements: {
      fly: 50,
    },
    racialTraits: [
      {
        name: 'Damage Reduction',
        description: 'Gargoyles have damage reduction 10/magic.',
      },
      {
        name: 'Natural Armor',
        description: 'Gargoyles have a +5 natural armor bonus to AC.',
      },
      {
        name: 'Natural Attacks',
        description: 'Gargoyles possess bite, claw, and gore natural attacks.',
      },
      {
        name: 'Skilled',
        description: 'Gargoyles gain a +2 racial bonus on Stealth checks.',
      },
    ],
    languages: ['Common', 'Terran'],
    bonusLanguages: ['Auran', 'Dwarven', 'Elven', 'Giant'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Elven Noble',
    category: 'Uncommon',
    powerTier: 'Very Powerful (31+ RP)',
    racePoints: 43,
    size: Size.Medium,
    speed: 30,
    type: 'Humanoid',
    subtypes: ['Elf', 'Aasimar'],
    abilityModifiers: {},
    flexibleAbilityBonuses: [
      { group: 'any', count: 'all', modifier: 2 },
      { group: 'other', count: 1, modifier: 4 },
      { group: 'other', count: 1, modifier: -2 },
    ],
    senses: ['Low-light vision', 'Darkvision 60 ft.'],
    racialTraits: [
      {
        name: 'Ability Score Racial Traits',
        description:
          'Elven Nobles are the pinnacle of their race. Choose either mental (Intelligence, Wisdom, Charisma) or physical (Strength, Dexterity, Constitution) ability scores. The character gains a +2 bonus to all three scores of the chosen group, a +4 bonus to one score of the other group, and a -2 penalty to one other score of that group.',
      },
      {
        name: 'Elven Immunities',
        description:
          'Elven Nobles are immune to magic sleep effects and gain a +2 racial bonus on saving throws against enchantment spells and effects.',
      },
      {
        name: 'Bonus Feat',
        description: 'Elven Nobles select one bonus feat at 1st level.',
      },
      {
        name: 'Keen Senses',
        description: 'Elven Nobles receive a +2 racial bonus on Perception checks.',
      },
      {
        name: 'Agile Fighters',
        description:
          'Elven Nobles receive Dodge, Weapon Focus, or Combat Casting as a bonus feat at 1st level. Once chosen, this feat cannot be changed.',
      },
      {
        name: 'Insightful Leaders',
        description:
          "Elven Nobles gain the planetar's visions or ethical leader trait as a bonus trait at 1st level. Once chosen, this trait cannot be changed.",
      },
      {
        name: 'Elevated Elven Magic',
        description:
          'Elven Nobles gain a +4 racial bonus on caster level checks made to overcome spell resistance. They also receive a +4 racial bonus on Spellcraft checks made to identify the properties of magic items.',
      },
      {
        name: 'Spell-Like Abilities',
        description:
          'Elven Nobles can cast eagle eye (2nd level), daylight (1st level), and feather step (1st level) each at will, and have detect magic as a constant spell-like ability. At 1st level they select one 1/day ability: arcane sight, deadly juggernaut, or ranged deadly juggernaut. Caster level equals effective character level.',
      },
      {
        name: 'Weapon Familiarity',
        description:
          'Elven Nobles are proficient with the longsword, rapier, longbow (including composite longbow), and shortbow (including composite shortbow). They treat any weapon with "elven" in its name as a martial weapon.',
      },
      {
        name: 'Alternate Racial Traits',
        description:
          'Elven Nobles qualify for any alternate racial trait available to Elves or Aasimars, and for any feat or ability that lists Elf or Aasimar as a prerequisite.',
      },
    ],
    languages: ['Common', 'Elven', 'Celestial'],
    bonusLanguages: [],
    source: 'homebrew',
  },
];

// ============================================================
// Race Points Unknown
// ============================================================

export const RP_UNKNOWN_RACES: ExpandedRaceData[] = [
  {
    name: 'Astomoi',
    category: 'Uncommon',
    powerTier: 'Unknown',
    racePoints: null,
    size: Size.Medium,
    speed: 30,
    type: 'Humanoid',
    subtypes: ['Astomoi'],
    abilityModifiers: {
      intelligence: 2,
      wisdom: 2,
      constitution: -2,
    },
    senses: ['Telepathic senses 60 ft.', 'Scent'],
    racialTraits: [
      {
        name: 'Telepathy',
        description:
          'Astomoi can communicate telepathically with any creature within 100 feet that has a language. This is their primary means of communication as they cannot speak.',
      },
      {
        name: 'Telepathic Senses',
        description:
          'Astomoi perceive the world via mental perception rather than sight. They can perceive their surroundings within 60 feet as if with darkvision. Verbal components of spells become thought components.',
      },
      {
        name: 'Sensitive Breath',
        description:
          'Astomoi take a -2 penalty on saving throws against disease and inhaled poisons.',
      },
      {
        name: 'Mouthless',
        description:
          'Astomoi do not need to eat or drink to survive. They absorb nutrients from nearby food. They are immune to ingested poisons.',
      },
    ],
    languages: ['Common'],
    bonusLanguages: ['Abyssal', 'Aklo', 'Celestial', 'Elven', 'Gnome', 'Infernal', 'Sylvan'],
    source: 'Bestiary 5',
  },
  {
    name: 'Caligni',
    category: 'Uncommon',
    powerTier: 'Unknown',
    racePoints: null,
    size: Size.Medium,
    speed: 30,
    type: 'Humanoid',
    subtypes: ['Dark Folk'],
    abilityModifiers: {
      dexterity: 2,
      constitution: 2,
      intelligence: -2,
    },
    senses: ['See in darkness'],
    racialTraits: [
      {
        name: 'See in Darkness',
        description:
          'Caligni can see perfectly in darkness of any kind, including that created by deeper darkness.',
      },
      {
        name: 'Light Sensitivity',
        description:
          'Caligni are dazzled in areas of bright sunlight or within the radius of a daylight spell.',
      },
      {
        name: 'Death Throes',
        description:
          'When a caligni dies, its body combusts in a flash of searing light. Creatures within 5 feet must make a Fortitude save or become dazzled for 1d4 rounds. The body becomes a withered and unrecognizable husk at one-third its original size.',
      },
    ],
    languages: ['Dark Folk'],
    bonusLanguages: ['Aklo', 'Common', 'Dwarven', 'Elven', 'Undercommon'],
    source: 'Bestiary 5',
  },
  {
    name: 'Deep One Hybrid',
    category: 'Uncommon',
    powerTier: 'Unknown',
    racePoints: null,
    size: Size.Medium,
    speed: 20,
    type: 'Humanoid',
    subtypes: ['Human', 'Deep One'],
    abilityModifiers: {
      constitution: 2,
      wisdom: 2,
      dexterity: -2,
    },
    senses: ['Low-light vision'],
    alternativeMovements: {
      swim: 30,
    },
    racialTraits: [
      {
        name: 'Natural Armor',
        description: 'Deep one hybrids have a +1 natural armor bonus to AC.',
      },
      {
        name: 'Final Change',
        description:
          'At venerable age (around 60 years), the hybrid dies and within 1d12 months transforms into a full deep one.',
      },
      {
        name: 'Sea Longing',
        description:
          'A deep one hybrid must make a DC 20 Will save every 24 hours it is more than 10 miles from the sea or suffer 1 point of Wisdom drain.',
      },
      {
        name: 'Take to the Water',
        description:
          'Deep one hybrids can hold their breath 10 times longer than humans. They gain a +2 bonus on Initiative checks and Reflex saving throws while swimming.',
      },
    ],
    languages: ['Aklo', 'Common'],
    bonusLanguages: [
      'Abyssal',
      'Aquan',
      'Dwarven',
      'Elven',
      'Giant',
      'Gnome',
      'Goblin',
      'Halfling',
      'Orc',
      'Undercommon',
    ],
    source: 'Bestiary 5',
  },
  {
    name: 'Ganzi',
    category: 'Uncommon',
    powerTier: 'Unknown',
    racePoints: null,
    size: Size.Medium,
    speed: 30,
    type: 'Outsider',
    subtypes: ['Native'],
    abilityModifiers: {
      constitution: 2,
      charisma: 2,
      intelligence: -2,
    },
    senses: ['Darkvision 60 ft.'],
    racialTraits: [
      {
        name: 'Maelstrom Resistance',
        description:
          'Ganzi have acid resistance 5, electricity resistance 5, and sonic resistance 5. They also gain a +2 racial bonus on saving throws against spells with the polymorph subschool.',
      },
      {
        name: 'Skilled',
        description: 'Ganzi gain a +2 racial bonus on Sense Motive and Survival checks.',
      },
      {
        name: 'Ganzi Oddity',
        description:
          'Each ganzi manifests a unique supernatural or extraordinary ability. The most common is Quibble, which allows the ganzi to force a creature within 30 feet to reroll a d20 roll once per day.',
      },
    ],
    languages: ['Common'],
    bonusLanguages: [
      'Abyssal',
      'Aklo',
      'Aquan',
      'Auran',
      'Celestial',
      'Ignan',
      'Protean',
      'Sylvan',
      'Terran',
    ],
    source: 'Planar Adventures',
  },
  {
    name: 'Kuru',
    category: 'Uncommon',
    powerTier: 'Unknown',
    racePoints: null,
    size: Size.Medium,
    speed: 30,
    type: 'Humanoid',
    subtypes: ['Kuru'],
    abilityModifiers: {
      dexterity: 2,
      constitution: 2,
      intelligence: -2,
    },
    senses: ['Low-light vision'],
    racialTraits: [
      {
        name: 'Bite',
        description: 'Kuru have a natural bite attack that deals 1d6 points of damage.',
      },
      {
        name: 'Blood Courage',
        description:
          'Once per day when a kuru makes a saving throw against a fear effect, he can roll the saving throw twice and take the better result. He must decide to use this ability before the roll is made.',
      },
      {
        name: 'Cannibalistic Vitality',
        description:
          'When a kuru successfully bites a living creature that has blood, the kuru gains 1 temporary hit point. These temporary hit points last for 1 minute.',
      },
      {
        name: 'Light Sensitivity',
        description:
          'Kuru are dazzled in areas of bright sunlight or within the radius of a daylight spell.',
      },
    ],
    languages: ['Kuru'],
    bonusLanguages: ['Abyssal', 'Common', 'Polyglot', 'Undercommon'],
    source: 'Isles of the Shackles',
  },
  {
    name: 'Munavri',
    category: 'Uncommon',
    powerTier: 'Unknown',
    racePoints: null,
    size: Size.Medium,
    speed: 30,
    type: 'Humanoid',
    subtypes: ['Munavri'],
    abilityModifiers: {
      dexterity: 4,
      constitution: 2,
      intelligence: 2,
      wisdom: 2,
      charisma: 2,
      strength: -2,
    },
    senses: ['Darkvision 120 ft.'],
    racialTraits: [
      {
        name: 'Telepathy',
        description: 'Munavri can mentally communicate with other munavri within 60 feet.',
      },
      {
        name: 'Advanced Object Reading',
        description:
          'Munavri can cast object reading at will. Once per day, after using object reading on a weapon, armor, or spell-trigger item, they gain proficiency with that item for a number of minutes equal to their character level.',
      },
      {
        name: 'Spell Resistance',
        description: 'Munavri have spell resistance equal to 8 + their total class levels.',
      },
      {
        name: 'Light Blindness',
        description:
          'Abrupt exposure to bright light blinds munavri for 1 round; on subsequent rounds, they are dazzled as long as they remain in the affected area.',
      },
    ],
    languages: ['Munavri'],
    bonusLanguages: ['Aklo', 'Aboleth', 'Aquan', 'Dark Folk', 'Draconic', 'Terran', 'Undercommon'],
    source: 'Occult Bestiary',
  },
  {
    name: 'Orang-Pendak',
    category: 'Uncommon',
    powerTier: 'Unknown',
    racePoints: null,
    size: Size.Small,
    speed: 30,
    type: 'Humanoid',
    subtypes: ['Sasquatch'],
    abilityModifiers: {
      strength: 2,
      wisdom: 2,
      intelligence: -2,
    },
    senses: ['Low-light vision'],
    racialTraits: [
      {
        name: 'Forest Walker',
        description:
          'Orang-pendaks gain a +4 racial bonus on Climb and Stealth checks in forests and jungles.',
      },
      {
        name: 'Simian Empathy',
        description:
          'Orang-pendaks gain a +4 racial bonus on Handle Animal and wild empathy checks made with apes and monkeys.',
      },
      {
        name: 'Tear Apart',
        description:
          'Orang-pendaks gain a +2 racial bonus on Strength checks to break objects and on sunder combat maneuver checks.',
      },
      {
        name: 'Own Two Feet',
        description:
          'Orang-pendaks take a -2 penalty on all skill checks made while riding any creature or vehicle.',
      },
    ],
    languages: ['Sasquatch'],
    bonusLanguages: [
      'Aklo',
      'Common',
      'Draconic',
      'Goblin',
      'Grippli',
      'Sylvan',
      'Vanaran',
      'Vishkanya',
    ],
    source: 'Bestiary 5',
  },
  {
    name: 'Reptoid',
    category: 'Uncommon',
    powerTier: 'Unknown',
    racePoints: null,
    size: Size.Medium,
    speed: 30,
    type: 'Humanoid',
    subtypes: ['Reptilian', 'Shapechanger'],
    abilityModifiers: {
      strength: 2,
      charisma: 2,
      dexterity: -2,
    },
    senses: ['Low-light vision'],
    racialTraits: [
      {
        name: 'Natural Armor',
        description: 'Reptoids have a +1 natural armor bonus in their natural form.',
      },
      {
        name: 'Cold-Blooded',
        description:
          'Reptoids gain a +2 racial saving throw bonus against mind-affecting effects and poison.',
      },
      {
        name: 'Natural Weapons',
        description:
          'In their natural form, reptoids have a bite attack dealing 1d3 damage and two claw attacks each dealing 1d3 damage.',
      },
      {
        name: 'Change Shape',
        description:
          'A reptoid can assume the appearance of a specific single Medium humanoid, gaining a +10 racial bonus on Disguise checks to appear as that individual. This functions as alter self except the reptoid does not adjust its ability scores.',
      },
      {
        name: 'Mental Potency',
        description:
          'A reptoid increases the Hit Die limit and the total number of creatures it can affect with enchantment and illusion spells by 1.',
      },
    ],
    languages: ['Common', 'Reptoid'],
    bonusLanguages: ['Any (except secret languages such as Druidic)'],
    source: 'Bestiary 5',
  },
];
