import { Size } from '@/types/base';

export interface RaceData {
  name: string;
  size: Size;
  speed: number;
  abilityModifiers: {
    strength?: number;
    dexterity?: number;
    constitution?: number;
    intelligence?: number;
    wisdom?: number;
    charisma?: number;
  };
  traits: string[];
  languages: string[];
  vision?: string;
}

export const CORE_RACES: RaceData[] = [
  {
    name: 'Human',
    size: Size.Medium,
    speed: 30,
    abilityModifiers: {
      // Humans get +2 to one ability of choice - handled separately
    },
    traits: [
      'Bonus Feat: Humans select one extra feat at 1st level',
      'Skilled: Humans gain an additional skill rank at first level and one additional rank whenever they gain a level',
    ],
    languages: ['Common'],
    vision: 'Normal',
  },
  {
    name: 'Dwarf',
    size: Size.Medium,
    speed: 20,
    abilityModifiers: {
      constitution: 2,
      wisdom: 2,
      charisma: -2,
    },
    traits: [
      'Darkvision 60 ft.',
      'Defensive Training: +4 dodge bonus to AC against giants',
      'Greed: +2 racial bonus on Appraise checks for precious metals or gems',
      'Hatred: +1 bonus on attack rolls against orcs and goblinoids',
      'Hardy: +2 racial bonus on saves against poison, spells, and spell-like abilities',
      'Stability: +4 racial bonus to CMD against bull rush or trip',
      'Stonecunning: +2 bonus on Perception checks for unusual stonework',
      'Weapon Familiarity: Proficient with battleaxes, heavy picks, and warhammers',
    ],
    languages: ['Common', 'Dwarven'],
    vision: 'Darkvision 60 ft.',
  },
  {
    name: 'Elf',
    size: Size.Medium,
    speed: 30,
    abilityModifiers: {
      dexterity: 2,
      intelligence: 2,
      constitution: -2,
    },
    traits: [
      'Low-Light Vision',
      'Elven Immunities: Immune to magic sleep; +2 racial bonus on saves against enchantment',
      'Elven Magic: +2 racial bonus on caster level checks against spell resistance',
      'Keen Senses: +2 racial bonus on Perception checks',
      'Weapon Familiarity: Proficient with longbows, longswords, rapiers, and shortbows',
    ],
    languages: ['Common', 'Elven'],
    vision: 'Low-Light Vision',
  },
  {
    name: 'Gnome',
    size: Size.Small,
    speed: 20,
    abilityModifiers: {
      constitution: 2,
      charisma: 2,
      strength: -2,
    },
    traits: [
      'Low-Light Vision',
      'Defensive Training: +4 dodge bonus to AC against giants',
      'Gnome Magic: +1 to DC of illusion spells cast',
      'Hatred: +1 bonus on attack rolls against reptilian humanoids and goblinoids',
      'Illusion Resistance: +2 racial bonus on saves against illusions',
      'Keen Senses: +2 racial bonus on Perception checks',
      'Obsessive: +2 racial bonus on Craft or Profession of choice',
      'Weapon Familiarity: Treat any weapon with "gnome" in name as martial weapon',
    ],
    languages: ['Common', 'Gnome', 'Sylvan'],
    vision: 'Low-Light Vision',
  },
  {
    name: 'Half-Elf',
    size: Size.Medium,
    speed: 30,
    abilityModifiers: {
      // Half-elves get +2 to one ability of choice - handled separately
    },
    traits: [
      'Low-Light Vision',
      'Adaptability: Skill Focus as bonus feat at 1st level',
      'Elf Blood: Count as both elves and humans for effects',
      'Elven Immunities: +2 racial bonus on saves against enchantment; immune to sleep',
      'Keen Senses: +2 racial bonus on Perception checks',
      'Multitalented: Two favored classes instead of one',
    ],
    languages: ['Common', 'Elven'],
    vision: 'Low-Light Vision',
  },
  {
    name: 'Half-Orc',
    size: Size.Medium,
    speed: 30,
    abilityModifiers: {
      // Half-orcs get +2 to one ability of choice - handled separately
    },
    traits: [
      'Darkvision 60 ft.',
      'Intimidating: +2 racial bonus on Intimidate checks',
      'Orc Blood: Count as both orcs and humans for effects',
      'Orc Ferocity: Once per day, when reduced to 0 HP, can fight for 1 more round',
      'Weapon Familiarity: Proficient with greataxes and falchions',
    ],
    languages: ['Common', 'Orc'],
    vision: 'Darkvision 60 ft.',
  },
  {
    name: 'Halfling',
    size: Size.Small,
    speed: 20,
    abilityModifiers: {
      dexterity: 2,
      charisma: 2,
      strength: -2,
    },
    traits: [
      'Fearless: +2 racial bonus on saves against fear',
      'Halfling Luck: +1 racial bonus on all saving throws',
      'Keen Senses: +2 racial bonus on Perception checks',
      'Sure-Footed: +2 racial bonus on Acrobatics and Climb checks',
      'Weapon Familiarity: Proficient with slings',
    ],
    languages: ['Common', 'Halfling'],
    vision: 'Normal',
  },
];

// Races that get +2 to any one ability score
export const FLEXIBLE_ABILITY_RACES = ['Human', 'Half-Elf', 'Half-Orc'];

export function getRaceByName(name: string): RaceData | undefined {
  return CORE_RACES.find((race) => race.name === name);
}

export function getRaceNames(): string[] {
  return CORE_RACES.map((race) => race.name);
}
