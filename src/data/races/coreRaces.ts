// Core Races — re-mapped from existing data into ExpandedRaceData format
// Source: https://www.d20pfsrd.com/races/core-races/

import { Size } from '@/types/base';
import { ExpandedRaceData } from './types';

export const CORE_RACES_EXPANDED: ExpandedRaceData[] = [
  {
    name: 'Dwarf',
    category: 'Core',
    powerTier: 'Advanced (11-20 RP)',
    racePoints: 11,
    size: Size.Medium,
    speed: 20,
    type: 'Humanoid',
    subtypes: ['Dwarf'],
    abilityModifiers: {
      constitution: 2,
      wisdom: 2,
      charisma: -2,
    },
    senses: ['Darkvision 60 ft.'],
    racialTraits: [
      {
        name: 'Defensive Training',
        description: 'Dwarves gain a +4 dodge bonus to AC against monsters of the giant subtype.',
      },
      {
        name: 'Greed',
        description:
          'Dwarves gain a +2 racial bonus on Appraise checks made to determine the price of non-magical goods that contain precious metals or gemstones.',
      },
      {
        name: 'Hatred',
        description:
          'Dwarves gain a +1 racial bonus on attack rolls against humanoid creatures of the orc and goblinoid subtypes.',
      },
      {
        name: 'Hardy',
        description:
          'Dwarves gain a +2 racial bonus on saving throws against poison, spells, and spell-like abilities.',
      },
      {
        name: 'Stability',
        description:
          'Dwarves gain a +4 racial bonus to their Combat Maneuver Defense when resisting a bull rush or trip attempt while standing on the ground.',
      },
      {
        name: 'Stonecunning',
        description:
          'Dwarves gain a +2 bonus on Perception checks to notice unusual stonework, such as traps and hidden doors located in stone walls or floors.',
      },
      {
        name: 'Weapon Familiarity',
        description:
          'Dwarves are proficient with battleaxes, heavy picks, and warhammers, and treat any weapon with the word "dwarven" in its name as a martial weapon.',
      },
    ],
    languages: ['Common', 'Dwarven'],
    bonusLanguages: ['Giant', 'Gnome', 'Goblin', 'Orc', 'Terran', 'Undercommon'],
    source: 'Core Rulebook',
  },
  {
    name: 'Elf',
    category: 'Core',
    powerTier: 'Standard (1-10 RP)',
    racePoints: 10,
    size: Size.Medium,
    speed: 30,
    type: 'Humanoid',
    subtypes: ['Elf'],
    abilityModifiers: {
      dexterity: 2,
      intelligence: 2,
      constitution: -2,
    },
    senses: ['Low-light vision'],
    racialTraits: [
      {
        name: 'Elven Immunities',
        description:
          'Elves are immune to magic sleep effects and gain a +2 racial saving throw bonus against enchantment spells and effects.',
      },
      {
        name: 'Elven Magic',
        description:
          'Elves receive a +2 racial bonus on caster level checks made to overcome spell resistance. In addition, elves receive a +2 racial bonus on Spellcraft skill checks made to identify the properties of magic items.',
      },
      {
        name: 'Keen Senses',
        description: 'Elves receive a +2 racial bonus on Perception checks.',
      },
      {
        name: 'Weapon Familiarity',
        description:
          'Elves are proficient with longbows (including composite longbows), longswords, rapiers, and shortbows (including composite shortbows), and treat any weapon with the word "elven" in its name as a martial weapon.',
      },
    ],
    languages: ['Common', 'Elven'],
    bonusLanguages: ['Celestial', 'Draconic', 'Gnoll', 'Gnome', 'Goblin', 'Orc', 'Sylvan'],
    source: 'Core Rulebook',
  },
  {
    name: 'Gnome',
    category: 'Core',
    powerTier: 'Standard (1-10 RP)',
    racePoints: 10,
    size: Size.Small,
    speed: 20,
    type: 'Humanoid',
    subtypes: ['Gnome'],
    abilityModifiers: {
      constitution: 2,
      charisma: 2,
      strength: -2,
    },
    senses: ['Low-light vision'],
    racialTraits: [
      {
        name: 'Defensive Training',
        description: 'Gnomes gain a +4 dodge bonus to AC against monsters of the giant subtype.',
      },
      {
        name: 'Gnome Magic',
        description:
          'Gnomes add +1 to the DC of any saving throws against illusion spells that they cast. Gnomes with Charisma scores of 11 or higher also gain the following spell-like abilities: 1/day — dancing lights, ghost sound, prestidigitation, and speak with animals.',
      },
      {
        name: 'Hatred',
        description:
          'Gnomes receive a +1 bonus on attack rolls against humanoid creatures of the reptilian and goblinoid subtypes.',
      },
      {
        name: 'Illusion Resistance',
        description:
          'Gnomes gain a +2 racial saving throw bonus against illusion spells and effects.',
      },
      {
        name: 'Keen Senses',
        description: 'Gnomes receive a +2 racial bonus on Perception checks.',
      },
      {
        name: 'Obsessive',
        description:
          'Gnomes receive a +2 racial bonus on a Craft or Profession skill of their choice.',
      },
      {
        name: 'Weapon Familiarity',
        description:
          'Gnomes treat any weapon with the word "gnome" in its name as a martial weapon.',
      },
    ],
    languages: ['Common', 'Gnome', 'Sylvan'],
    bonusLanguages: ['Draconic', 'Dwarven', 'Elven', 'Giant', 'Goblin', 'Orc'],
    source: 'Core Rulebook',
  },
  {
    name: 'Half-Elf',
    category: 'Core',
    powerTier: 'Standard (1-10 RP)',
    racePoints: 10,
    size: Size.Medium,
    speed: 30,
    type: 'Humanoid',
    subtypes: ['Elf', 'Human'],
    abilityModifiers: {},
    flexibleAbilityBonus: true,
    senses: ['Low-light vision'],
    racialTraits: [
      {
        name: 'Adaptability',
        description: 'Half-elves receive Skill Focus as a bonus feat at 1st level.',
      },
      {
        name: 'Elf Blood',
        description: 'Half-elves count as both elves and humans for any effect related to race.',
      },
      {
        name: 'Elven Immunities',
        description:
          'Half-elves are immune to magic sleep effects and gain a +2 racial saving throw bonus against enchantment spells and effects.',
      },
      {
        name: 'Keen Senses',
        description: 'Half-elves receive a +2 racial bonus on Perception checks.',
      },
      {
        name: 'Multitalented',
        description:
          'Half-elves choose two favored classes at first level and gain +1 hit point or +1 skill point whenever they take a level in either one of those classes.',
      },
    ],
    languages: ['Common', 'Elven'],
    bonusLanguages: ['Any (except secret languages such as Druidic)'],
    source: 'Core Rulebook',
  },
  {
    name: 'Halfling',
    category: 'Core',
    powerTier: 'Standard (1-10 RP)',
    racePoints: 9,
    size: Size.Small,
    speed: 20,
    type: 'Humanoid',
    subtypes: ['Halfling'],
    abilityModifiers: {
      dexterity: 2,
      charisma: 2,
      strength: -2,
    },
    senses: [],
    racialTraits: [
      {
        name: 'Fearless',
        description:
          'Halflings receive a +2 racial bonus on all saving throws against fear. This bonus stacks with the bonus granted by halfling luck.',
      },
      {
        name: 'Halfling Luck',
        description: 'Halflings receive a +1 racial bonus on all saving throws.',
      },
      {
        name: 'Keen Senses',
        description: 'Halflings receive a +2 racial bonus on Perception checks.',
      },
      {
        name: 'Sure-Footed',
        description: 'Halflings receive a +2 racial bonus on Acrobatics and Climb checks.',
      },
      {
        name: 'Weapon Familiarity',
        description:
          'Halflings are proficient with slings and treat any weapon with the word "halfling" in its name as a martial weapon.',
      },
    ],
    languages: ['Common', 'Halfling'],
    bonusLanguages: ['Dwarven', 'Elven', 'Gnome', 'Goblin'],
    source: 'Core Rulebook',
  },
  {
    name: 'Half-Orc',
    category: 'Core',
    powerTier: 'Standard (1-10 RP)',
    racePoints: 8,
    size: Size.Medium,
    speed: 30,
    type: 'Humanoid',
    subtypes: ['Human', 'Orc'],
    abilityModifiers: {},
    flexibleAbilityBonus: true,
    senses: ['Darkvision 60 ft.'],
    racialTraits: [
      {
        name: 'Intimidating',
        description:
          'Half-orcs receive a +2 racial bonus on Intimidate checks due to their fearsome nature.',
      },
      {
        name: 'Orc Blood',
        description: 'Half-orcs count as both humans and orcs for any effect related to race.',
      },
      {
        name: 'Orc Ferocity',
        description:
          'Once per day, when a half-orc is brought below 0 hit points but not killed, he can fight on for 1 more round as if disabled. At the end of his next turn, unless brought to above 0 hit points, he immediately falls unconscious and begins dying.',
      },
      {
        name: 'Weapon Familiarity',
        description:
          'Half-orcs are proficient with greataxes and falchions, and treat any weapon with the word "orc" in its name as a martial weapon.',
      },
    ],
    languages: ['Common', 'Orc'],
    bonusLanguages: ['Abyssal', 'Draconic', 'Giant', 'Gnoll', 'Goblin'],
    source: 'Core Rulebook',
  },
  {
    name: 'Human',
    category: 'Core',
    powerTier: 'Standard (1-10 RP)',
    racePoints: 9,
    size: Size.Medium,
    speed: 30,
    type: 'Humanoid',
    subtypes: ['Human'],
    abilityModifiers: {},
    flexibleAbilityBonus: true,
    senses: [],
    racialTraits: [
      {
        name: 'Bonus Feat',
        description: 'Humans select one extra feat at 1st level.',
      },
      {
        name: 'Skilled',
        description:
          'Humans gain an additional skill rank at first level and one additional rank whenever they gain a level.',
      },
    ],
    languages: ['Common'],
    bonusLanguages: ['Any (except secret languages such as Druidic)'],
    source: 'Core Rulebook',
  },
];
