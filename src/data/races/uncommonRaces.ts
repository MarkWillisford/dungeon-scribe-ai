// Uncommon Races — from d20pfsrd.com Advanced Race Guide
// Source: https://www.d20pfsrd.com/races/other-races/uncommon-races/

import { Size } from '@/types/base';
import { ExpandedRaceData } from './types';

export const UNCOMMON_RACES: ExpandedRaceData[] = [
  {
    name: 'Changeling',
    category: 'Uncommon',
    powerTier: 'Unknown',
    racePoints: null,
    size: Size.Medium,
    speed: 30,
    type: 'Humanoid',
    subtypes: ['Changeling'],
    abilityModifiers: {
      wisdom: 2,
      charisma: 2,
      constitution: -2,
    },
    senses: ['Darkvision 60 ft.'],
    racialTraits: [
      {
        name: 'Natural Armor',
        description: 'Changelings have a +1 natural armor bonus.',
      },
      {
        name: 'Claws',
        description: 'Changelings have two claw attacks that each deal 1d4 points of damage.',
      },
      {
        name: 'Hag Heritage',
        description:
          "A changeling inherits one of the following traits based on her mother's hag type: Hulking Changeling (Annis, +1 melee damage), Pyrophile (Ash, +1 fire spell damage per 4 levels), Green Widow (Green, +2 Bluff vs. attracted creatures), Sea Lungs (Sea, hold breath 3x Con score), Gaze Blindness (Mute, +2 vs. gaze attacks), Heartstone Heritor (Night, +2 vs. disease), Ice Climber (Winter, +5 Climb on ice), Inscrutable (Blood, +5 Sense Motive DC), or Wind Breaker (Storm, +2 size categories for wind effects).",
      },
    ],
    languages: ['Common'],
    bonusLanguages: ['Aklo', 'Draconic', 'Dwarven', 'Elven', 'Giant', 'Gnoll', 'Goblin', 'Orc'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Duergar',
    category: 'Uncommon',
    powerTier: 'Standard (1-10 RP)',
    racePoints: 8,
    size: Size.Medium,
    speed: 20,
    type: 'Humanoid',
    subtypes: ['Dwarf'],
    abilityModifiers: {
      constitution: 2,
      wisdom: 2,
      charisma: -4,
    },
    senses: ['Superior darkvision 120 ft.'],
    racialTraits: [
      {
        name: 'Duergar Immunities',
        description:
          'Duergar are immune to paralysis, phantasms, and poison. They also gain a +2 racial bonus on saves against spells and spell-like abilities.',
      },
      {
        name: 'Stability',
        description:
          'Duergar gain a +4 racial bonus to their Combat Maneuver Defense when resisting a bull rush or trip attempt while standing on the ground.',
      },
      {
        name: 'Spell-Like Abilities',
        description:
          'A duergar can use enlarge person and invisibility each once per day as spell-like abilities, affecting itself only.',
      },
      {
        name: 'Light Sensitivity',
        description:
          'Duergar are dazzled in areas of bright sunlight or within the radius of a daylight spell.',
      },
      {
        name: 'Slow and Steady',
        description: 'Duergar base speed is never modified by armor or encumbrance.',
      },
    ],
    languages: ['Common', 'Dwarven', 'Undercommon'],
    bonusLanguages: ['Aklo', 'Draconic', 'Giant', 'Goblin', 'Orc', 'Terran'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Gillman',
    category: 'Uncommon',
    powerTier: 'Unknown',
    racePoints: null,
    size: Size.Medium,
    speed: 30,
    type: 'Humanoid',
    subtypes: ['Aquatic'],
    abilityModifiers: {
      constitution: 2,
      charisma: 2,
      wisdom: -2,
    },
    senses: [],
    alternativeMovements: {
      swim: 30,
    },
    racialTraits: [
      {
        name: 'Amphibious',
        description: 'Gillmen can breathe both water and air.',
      },
      {
        name: 'Enchantment Resistance',
        description:
          'Gillmen gain a +2 racial saving throw bonus against non-aboleth enchantment effects, but take a -2 penalty on saving throws against aboleth sources.',
      },
      {
        name: 'Water Dependent',
        description:
          'A gillman who fails to immerse himself in water for at least 1 round per day risks internal organ failure, living for 4d6 hours before dying.',
      },
    ],
    languages: ['Common', 'Aboleth'],
    bonusLanguages: ['Aklo', 'Aquan', 'Draconic', 'Elven'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Grippli',
    category: 'Uncommon',
    powerTier: 'Standard (1-10 RP)',
    racePoints: 6,
    size: Size.Small,
    speed: 30,
    type: 'Humanoid',
    subtypes: ['Grippli'],
    abilityModifiers: {
      dexterity: 2,
      wisdom: 2,
      strength: -2,
    },
    senses: ['Darkvision 60 ft.'],
    alternativeMovements: {
      climb: 20,
    },
    racialTraits: [
      {
        name: 'Camouflage',
        description:
          'Gripplis receive a +4 racial bonus on Stealth checks in marshes and forested areas.',
      },
      {
        name: 'Swamp Stride',
        description:
          'A grippli can move through difficult terrain at its normal speed while within a swamp. Magically altered terrain affects a grippli normally.',
      },
      {
        name: 'Weapon Familiarity',
        description: 'Gripplis are proficient with nets.',
      },
    ],
    languages: ['Common', 'Grippli'],
    bonusLanguages: ['Boggard', 'Draconic', 'Elven', 'Gnome', 'Goblin', 'Sylvan'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Kitsune',
    category: 'Uncommon',
    powerTier: 'Unknown',
    racePoints: null,
    size: Size.Medium,
    speed: 30,
    type: 'Humanoid',
    subtypes: ['Kitsune', 'Shapechanger'],
    abilityModifiers: {
      dexterity: 2,
      charisma: 2,
      strength: -2,
    },
    senses: ['Low-light vision'],
    racialTraits: [
      {
        name: 'Agile',
        description: 'Kitsune receive a +2 racial bonus on Acrobatics checks.',
      },
      {
        name: 'Change Shape',
        description:
          'A kitsune can assume the appearance of a specific single human form of the same sex. The kitsune gains a +10 racial bonus on Disguise checks made to appear human. Changing shape is a standard action. This trait otherwise functions as alter self, except the kitsune does not adjust its ability scores. A kitsune cannot use its bite attack in human form.',
      },
      {
        name: 'Kitsune Magic',
        description:
          "Kitsune add +1 to the DC of any saving throws against enchantment spells that they cast. Kitsune with a Charisma score of 11 or higher gain the ability to use dancing lights 3/day as a spell-like ability (caster level equals the kitsune's level).",
      },
      {
        name: 'Natural Weapon',
        description:
          'In their natural form, kitsune have a bite attack that deals 1d4 points of damage.',
      },
    ],
    languages: ['Common', 'Sylvan'],
    bonusLanguages: ['Any human language', 'Aklo', 'Celestial', 'Elven', 'Gnome', 'Tengu'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Merfolk',
    category: 'Uncommon',
    powerTier: 'Unknown',
    racePoints: null,
    size: Size.Medium,
    speed: 5,
    type: 'Humanoid',
    subtypes: ['Aquatic'],
    abilityModifiers: {
      dexterity: 2,
      constitution: 2,
      charisma: 2,
    },
    senses: ['Low-light vision'],
    alternativeMovements: {
      swim: 50,
    },
    racialTraits: [
      {
        name: 'Natural Armor',
        description: 'Merfolk have a +2 natural armor bonus.',
      },
      {
        name: 'Legless',
        description: 'Merfolk have no legs and cannot be tripped.',
      },
      {
        name: 'Amphibious',
        description:
          'Merfolk can breathe both air and water, though they rarely spend long periods on land.',
      },
    ],
    languages: ['Common', 'Aquan'],
    bonusLanguages: ['Aboleth', 'Aklo', 'Draconic', 'Elven', 'Sylvan'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Nagaji',
    category: 'Uncommon',
    powerTier: 'Unknown',
    racePoints: null,
    size: Size.Medium,
    speed: 30,
    type: 'Humanoid',
    subtypes: ['Reptilian'],
    abilityModifiers: {
      strength: 2,
      charisma: 2,
      intelligence: -2,
    },
    senses: ['Low-light vision'],
    racialTraits: [
      {
        name: 'Armored Scales',
        description: 'Nagaji have a +1 natural armor bonus from their scaly flesh.',
      },
      {
        name: 'Resistant',
        description:
          'Nagaji receive a +2 racial saving throw bonus against mind-affecting effects and poison.',
      },
      {
        name: "Serpent's Sense",
        description:
          'Nagaji receive a +2 racial bonus on Handle Animal checks against reptiles, and a +2 racial bonus on Perception checks.',
      },
    ],
    languages: ['Common', 'Draconic'],
    bonusLanguages: [
      'Any human language',
      'Abyssal',
      'Aklo',
      'Celestial',
      'Draconic',
      'Giant',
      'Infernal',
      'Sylvan',
    ],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Samsaran',
    category: 'Uncommon',
    powerTier: 'Unknown',
    racePoints: null,
    size: Size.Medium,
    speed: 30,
    type: 'Humanoid',
    subtypes: ['Samsaran'],
    abilityModifiers: {
      intelligence: 2,
      wisdom: 2,
      constitution: -2,
    },
    senses: ['Low-light vision'],
    racialTraits: [
      {
        name: 'Lifebound',
        description:
          'Samsarans gain a +2 racial bonus on all saving throws made to resist death effects, saving throws against negative energy effects, Fortitude saves made to remove negative levels, and Constitution checks made to stabilize if reduced to negative hit points.',
      },
      {
        name: 'Shards of the Past',
        description:
          "A samsaran's past lives grant her bonuses on two particular skills. The samsaran chooses two skills — she gains a +2 racial bonus on both of these skills, and they are treated as class skills regardless of what class the samsaran actually takes.",
      },
      {
        name: 'Samsaran Magic',
        description:
          "Samsarans with a Charisma score of 11 or higher gain the following spell-like abilities: 1/day — comprehend languages, deathwatch, and stabilize. The caster level for these effects is equal to the samsaran's level.",
      },
    ],
    languages: ['Common', 'Samsaran'],
    bonusLanguages: [
      'Any human language',
      'Abyssal',
      'Aquan',
      'Auran',
      'Celestial',
      'Draconic',
      'Giant',
      'Ignan',
      'Infernal',
      'Nagaji',
      'Tengu',
      'Terran',
    ],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Strix',
    category: 'Uncommon',
    powerTier: 'Unknown',
    racePoints: null,
    size: Size.Medium,
    speed: 30,
    type: 'Humanoid',
    subtypes: ['Strix'],
    abilityModifiers: {
      dexterity: 2,
      charisma: -2,
    },
    senses: ['Darkvision 60 ft.', 'Low-light vision'],
    alternativeMovements: {
      fly: 60,
    },
    racialTraits: [
      {
        name: 'Nocturnal',
        description:
          'Strix gain a +2 racial bonus on Perception and Stealth checks in dim light or darkness.',
      },
      {
        name: 'Suspicious',
        description:
          'Strix receive a +2 racial bonus on saving throws against illusion spells and effects.',
      },
      {
        name: 'Hatred',
        description:
          'Strix receive a +1 racial bonus on attack rolls against humanoid creatures with the human subtype.',
      },
    ],
    languages: ['Strix'],
    bonusLanguages: ['Auran', 'Common', 'Draconic', 'Giant', 'Gnome', 'Goblin', 'Infernal'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Suli',
    category: 'Uncommon',
    powerTier: 'Advanced (11-20 RP)',
    racePoints: 16,
    size: Size.Medium,
    speed: 30,
    type: 'Outsider',
    subtypes: ['Native'],
    abilityModifiers: {
      strength: 2,
      charisma: 2,
      intelligence: -2,
    },
    senses: ['Darkvision 60 ft.', 'Low-light vision'],
    racialTraits: [
      {
        name: 'Energy Resistance',
        description: 'Sulis have resistance 5 to acid, cold, electricity, and fire.',
      },
      {
        name: 'Negotiator',
        description: 'Sulis receive a +2 racial bonus on Diplomacy and Sense Motive checks.',
      },
      {
        name: 'Elemental Assault',
        description:
          'Once per day as a swift action, a suli can shroud her arms in acid, cold, electricity, or fire. Her unarmed strikes or attacks with a held weapon deal +1d6 points of damage of the appropriate energy type. This lasts for 1 round per level.',
      },
    ],
    languages: ['Common'],
    bonusLanguages: ['Aquan', 'Auran', 'Draconic', 'Ignan', 'Terran'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Svirfneblin',
    category: 'Uncommon',
    powerTier: 'Monstrous (21-30 RP)',
    racePoints: 24,
    size: Size.Small,
    speed: 20,
    type: 'Humanoid',
    subtypes: ['Gnome'],
    abilityModifiers: {
      dexterity: 2,
      wisdom: 2,
      strength: -2,
      charisma: -4,
    },
    senses: ['Darkvision 120 ft.', 'Low-light vision'],
    racialTraits: [
      {
        name: 'Defensive Training',
        description: 'Svirfneblin gain a +2 dodge bonus to Armor Class.',
      },
      {
        name: 'Fortunate',
        description: 'Svirfneblin gain a +2 racial bonus on all saving throws.',
      },
      {
        name: 'Spell Resistance',
        description: 'Svirfneblin have spell resistance equal to 11 + their class levels.',
      },
      {
        name: 'Skilled',
        description:
          'Svirfneblin gain a +2 racial bonus on Stealth checks (which improves to +4 underground), and a +2 racial bonus on Craft (alchemy) and Perception checks.',
      },
      {
        name: 'Svirfneblin Magic',
        description:
          "Svirfneblin add +1 to the DC of any illusion spells they cast. They also gain the following spell-like abilities: constant — nondetection; 1/day — blindness/deafness, blur, disguise self. The caster level equals the svirfneblin's class level.",
      },
    ],
    languages: ['Gnome', 'Undercommon'],
    bonusLanguages: [
      'Aklo',
      'Common',
      'Draconic',
      'Dwarven',
      'Elven',
      'Giant',
      'Goblin',
      'Orc',
      'Terran',
    ],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Vanara',
    category: 'Uncommon',
    powerTier: 'Standard (1-10 RP)',
    racePoints: 8,
    size: Size.Medium,
    speed: 30,
    type: 'Humanoid',
    subtypes: ['Vanara'],
    abilityModifiers: {
      dexterity: 2,
      wisdom: 2,
      charisma: -2,
    },
    senses: ['Low-light vision'],
    alternativeMovements: {
      climb: 20,
    },
    racialTraits: [
      {
        name: 'Nimble',
        description: 'Vanaras gain a +2 racial bonus on Acrobatics and Stealth checks.',
      },
      {
        name: 'Prehensile Tail',
        description:
          'A vanara has a long, flexible tail that can be used to carry objects. She cannot wield weapons with her tail, but she can retrieve small, stowed objects carried on her person as a swift action.',
      },
    ],
    languages: ['Common', 'Vanaran'],
    bonusLanguages: ['Aklo', 'Celestial', 'Elven', 'Gnome', 'Goblin', 'Sylvan'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Vishkanya',
    category: 'Uncommon',
    powerTier: 'Advanced (11-20 RP)',
    racePoints: 13,
    size: Size.Medium,
    speed: 30,
    type: 'Humanoid',
    subtypes: ['Vishkanya'],
    abilityModifiers: {
      dexterity: 2,
      charisma: 2,
      wisdom: -2,
    },
    senses: ['Low-light vision'],
    racialTraits: [
      {
        name: 'Poison Resistance',
        description:
          'A vishkanya has a racial bonus on saving throws against poison equal to its Hit Dice.',
      },
      {
        name: 'Keen Senses',
        description: 'Vishkanyas receive a +2 racial bonus on Perception checks.',
      },
      {
        name: 'Limber',
        description: 'Vishkanyas receive a +2 racial bonus on Escape Artist and Stealth checks.',
      },
      {
        name: 'Poison Use',
        description:
          'Vishkanyas are skilled in the use of poison and never accidentally poison themselves when applying poison.',
      },
      {
        name: 'Toxic',
        description:
          "A number of times per day equal to her Constitution modifier (minimum 1/day), a vishkanya can envenom a weapon that she wields with her toxic saliva or blood (using a swift action). The venom deals 1d2 Dexterity damage (injury; save Fort DC 10 + 1/2 the vishkanya's Hit Dice + the vishkanya's Constitution modifier; frequency 1/round for 6 rounds; cure 1 save).",
      },
      {
        name: 'Weapon Familiarity',
        description: 'Vishkanyas are proficient with blowguns, kukris, and shuriken.',
      },
    ],
    languages: ['Common', 'Vishkanya'],
    bonusLanguages: ['Aklo', 'Draconic', 'Elven', 'Goblin', 'Sylvan', 'Undercommon'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Wayang',
    category: 'Uncommon',
    powerTier: 'Unknown',
    racePoints: null,
    size: Size.Small,
    speed: 20,
    type: 'Humanoid',
    subtypes: ['Wayang'],
    abilityModifiers: {
      dexterity: 2,
      intelligence: 2,
      wisdom: -2,
    },
    senses: ['Darkvision 60 ft.'],
    racialTraits: [
      {
        name: 'Shadow Resistance',
        description:
          'Wayangs gain a +2 racial bonus on saving throws against spells of the shadow subschool.',
      },
      {
        name: 'Lurker',
        description: 'Wayangs gain a +2 racial bonus on Perception and Stealth checks.',
      },
      {
        name: 'Shadow Magic',
        description:
          "Wayangs add +1 to the DC of any saving throws against spells of the shadow subschool that they cast. Wayangs with a Charisma score of 11 or higher also gain the following spell-like abilities: 1/day — ghost sound, pass without trace, ventriloquism. The caster level equals the wayang's level.",
      },
      {
        name: 'Light and Dark',
        description:
          'Once per day as an immediate action, a wayang can treat positive and negative energy effects as if she were an undead creature, taking damage from positive energy and healing from negative energy. This ability lasts for 1 minute once activated.',
      },
    ],
    languages: ['Common', 'Wayang'],
    bonusLanguages: [
      'Any human language',
      'Abyssal',
      'Aklo',
      'Draconic',
      'Goblin',
      'Infernal',
      'Nagaji',
      'Samsaran',
      'Tengu',
    ],
    source: 'Advanced Race Guide',
  },
];
