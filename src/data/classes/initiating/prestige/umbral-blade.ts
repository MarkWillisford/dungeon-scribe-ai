// Umbral Blade — Path of War: Expanded prestige class (Dreamscarred Press)
// Source: https://www.d20pfsrd.com/alternative-rule-systems/3rd-party-rules-systems/path-of-war/prestige-classes/umbral-blade/

import { BABProgression, SaveProgression } from '@/types/base';
import type { ExpandedClassData } from '../../types';
import type { InitiatingProgressionTable } from '../../initiatingProgressionTables';

// [maneuversKnown, maneuversReadied, stancesKnown] per prestige level 1-10
// These are cumulative gains from the prestige class itself.
export const UMBRAL_BLADE_PROGRESSION: InitiatingProgressionTable = [
  [0, 0, 0], // 1
  [1, 0, 0], // 2
  [1, 1, 1], // 3
  [2, 1, 1], // 4
  [2, 1, 2], // 5
  [3, 2, 2], // 6
  [3, 2, 2], // 7
  [4, 2, 2], // 8
  [4, 3, 3], // 9
  [5, 3, 3], // 10
];

export const UMBRAL_BLADE_CLASS: ExpandedClassData = {
  name: 'Umbral Blade',
  category: 'Path of War Prestige',
  maxLevel: 10,
  hitDie: 10,
  skillRanksPerLevel: 4,
  classSkills: [
    'Acrobatics',
    'Intimidate',
    'Knowledge (local)',
    'Knowledge (planes)',
    'Perception',
    'Spellcraft',
    'Stealth',
  ],
  babProgression: BABProgression.Full,
  saves: {
    fortitude: SaveProgression.Poor,
    reflex: SaveProgression.Good,
    will: SaveProgression.Poor,
  },
  weaponProficiencies: [],
  armorProficiencies: [],
  classFeatures: [
    {
      name: 'Weapon and Armor Proficiency',
      level: 1,
      description: 'The umbral blade gains no new weapon or armor proficiencies.',
    },
    {
      name: 'Maneuvers',
      level: 1,
      description:
        "At every even level, an umbral blade gains new maneuvers known from his available disciplines: Cursed Razor, Steel Serpent, Veiled Moon, and two of his previously available disciplines chosen when he takes his first umbral blade level. He must meet a maneuver's prerequisites to learn it. He adds his full umbral blade levels to his initiator level to determine his total initiator level and his highest-level maneuvers known. At 3rd, 6th, and 9th levels, he gains an additional maneuver readied per day.",
    },
    {
      name: 'Stances Known',
      level: 1,
      description:
        'At 3rd level and again at 5th level and 9th level, an umbral blade learns a new stance from any of the disciplines available to him as an umbral blade.',
    },
    {
      name: 'Shadow Blade',
      level: 1,
      description:
        'Whenever he wields a weapon from the associated weapon groups of the Veiled Moon discipline, as a swift action the blade may be changed and altered by his promise to this darkness, resulting in it becoming a blade of ephemeral shadow and writhing smoke. The weapon inflicts an additional 1d6 points of cold damage on a successful hit. The character may add his initiation modifier to weapon damage rolls instead of his Strength modifier, and he may always use Weapon Finesse with the weapon due to its lightened weight. This effect ends when the umbral blade is no longer wielding the weapon or when he wills it to end as a free action.',
    },
    {
      name: 'Umbral Sight',
      level: 1,
      description:
        'At 1st level, the umbral blade gains darkvision out to 60 feet. If the character already possesses darkvision, its range increases by 30 feet.',
    },
    {
      name: 'Blade of Night',
      level: 2,
      description:
        'At 2nd level, the umbral blade may charge his shadow blade (be it a single weapon, double weapon, or paired weapons) with this power as a move action, and later when needed, he may release this power as a free action as part of an attack or martial strike. The shadow blade deals an additional 1d8 points of cold damage on each attack made during the round it is activated. This bonus damage increases to 2d8 at 6th level and 3d8 at 10th level.',
    },
    {
      name: 'Embrace the Shadows',
      level: 3,
      description:
        "At 3rd level, the umbral blade gains access to a special Veiled Moon stance called Embrace the Shadows as a bonus stance known. This stance is treated as a 3rd-level Veiled Moon stance, increasing to 4th level at umbral blade level 4, 5th level at umbral blade level 7, and 6th level at umbral blade level 9. The character's form and features change while in this stance; his skin becomes mottled heavily with inky black shadow and his eyes, hair, nails, and teeth turn pitch black. While in this stance, maneuvers from the Steel Serpent, Thrashing Dragon, and Veiled Moon disciplines gain a +2 increase to their saving throw DCs. The character also gains a +2 profane bonus per umbral blade level to Intimidate checks, automatically fails any Handle Animal checks, gains a +2 natural armor bonus to AC, a +2 profane bonus to saving throws, and a +2 profane bonus per umbral blade level to Stealth checks.",
    },
    {
      name: 'Shadow Consumption I',
      level: 4,
      description:
        'At 4th level, the darkness that the umbral blade has aligned himself with begins to devour his flesh. He uses his initiation modifier instead of his Constitution modifier for the purposes of determining his hit points and Fortitude saving throws.',
    },
    {
      name: 'Shadowblind',
      level: 5,
      description:
        'At 5th level, the umbral blade pulls concealing shadow to bend perception around him, and may hide in plain sight in areas of dim illumination or darker. He may make Stealth checks in dim light or darker conditions even while being observed.',
    },
    {
      name: 'Blade of Night +2d8',
      level: 6,
      description:
        "At 6th level, the umbral blade's Blade of Night bonus cold damage increases to 2d8 points of cold damage per attack.",
    },
    {
      name: 'Shadow Consumption II',
      level: 7,
      description:
        'At 7th level, the umbral blade gains the ability to use blink at will as a spell-like ability.',
    },
    {
      name: 'Terror in the Dark',
      level: 8,
      description:
        'At 8th level, the umbral blade may use the Stealth skill to hide as a swift action.',
    },
    {
      name: 'Shadow Consumption III',
      level: 9,
      description:
        'At 9th level, the umbral blade may gain the incorporeal subtype at will as a standard action. He may end this effect as a free action.',
    },
    {
      name: 'One with the Dark',
      level: 10,
      description:
        "At 10th level, the umbral blade's creature type changes to outsider (native). He gains the benefits of his Embrace the Shadows stance at all times as racial traits, even when not in the stance (these bonuses stack with the stance if he is in it). He gains cold resistance 10 and damage reduction 10/silver. He is considered a native of both his home plane and the Plane of Shadow.",
    },
    {
      name: 'Blade of Night +3d8',
      level: 10,
      description:
        "At 10th level, the umbral blade's Blade of Night bonus cold damage increases to 3d8 points of cold damage per attack.",
    },
  ],
  prerequisites: {
    bab: 4,
    skills: [
      { name: 'Knowledge (planes)', ranks: 6 },
      { name: 'Stealth', ranks: 6 },
    ],
    feats: ['Discipline Focus (Veiled Moon)'],
    special: ['Must be capable of initiating 3rd-level maneuvers of the Veiled Moon discipline'],
    alignment: 'Any non-good',
  },
  alignment: 'Any non-good',
  spellcasting: {
    type: 'None',
    casting: 'None',
  },
  initiating: {
    type: 'Martial',
    initiatingAbility: 'WIS',
    ilProgression: 'full',
    disciplines: ['cursed-razor', 'steel-serpent', 'veiled-moon'],
    progressionTableKey: 'umbral-blade',
    recoveryMechanics: {
      primary: {
        type: 'custom',
        description:
          'The umbral blade recovers maneuvers through the recovery mechanics of his base initiating class.',
      },
    },
  },
  source: 'Path of War: Expanded',
};
