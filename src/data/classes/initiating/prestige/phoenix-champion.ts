// Phoenix Champion — Path of War prestige class (Dreamscarred Press)
// Source: https://www.d20pfsrd.com/alternative-rule-systems/3rd-party-rules-systems/path-of-war/prestige-classes/phoenix-champion/

import { BABProgression, SaveProgression } from '@/types/base';
import type { ExpandedClassData } from '../../types';
import type { InitiatingProgressionTable } from '../../initiatingProgressionTables';

// [maneuversKnown, maneuversReadied, stancesKnown] per prestige level 1-10
// These are cumulative gains from the prestige class itself.
export const PHOENIX_CHAMPION_PROGRESSION: InitiatingProgressionTable = [
  [0, 0, 0], // 1
  [1, 0, 0], // 2
  [1, 1, 0], // 3
  [2, 1, 1], // 4
  [2, 1, 1], // 5
  [3, 2, 2], // 6
  [3, 2, 2], // 7
  [4, 2, 2], // 8
  [4, 3, 2], // 9
  [5, 3, 3], // 10
];

export const PHOENIX_CHAMPION_CLASS: ExpandedClassData = {
  name: 'Phoenix Champion',
  category: 'Prestige',
  maxLevel: 10,
  hitDie: 10,
  skillRanksPerLevel: 4,
  classSkills: [
    'Diplomacy',
    'Perception',
    'Sleight of Hand',
    'Stealth',
    'Survival',
  ],
  babProgression: BABProgression.Full,
  saves: {
    fortitude: SaveProgression.Good,
    reflex: SaveProgression.Good,
    will: SaveProgression.Poor,
  },
  weaponProficiencies: [],
  armorProficiencies: [],
  alignment: 'Any non-evil',
  classFeatures: [
    {
      name: 'Maneuvers',
      level: 1,
      description:
        'At every even level, a phoenix champion gains a new maneuver known from the Silver Crane, Solar Wind, or Tempest Gale disciplines, or from two of his previously available disciplines chosen when he takes his first phoenix champion level. He must meet a maneuver\'s prerequisites to learn it. He adds his full phoenix champion levels to his initiator level to determine his total initiator level and his highest-level maneuvers known. At 3rd, 6th, and 9th levels, he gains an additional maneuver readied per day.',
    },
    {
      name: 'Stances Known',
      level: 1,
      description:
        'At 4th, 6th, and 10th levels, a phoenix champion learns a new stance from any of the disciplines available to him as a phoenix champion.',
    },
    {
      name: 'Burning Bow',
      level: 1,
      description:
        'Starting at 1st level, a phoenix champion deals an additional 1d6 points of fire damage on any ranged attack he makes as part of a maneuver. This stacks with the flaming weapon special ability and similar effects.',
    },
    {
      name: 'Eye of the Heavens (Darkvision)',
      level: 2,
      description:
        'Phoenix champions lead the light into the darkest places of the world, and their vision can pierce even the most opaque shadows. At 2nd level, a phoenix champion gains darkvision with a range of 60 feet. If he already has darkvision, the range of his darkvision instead increases by 30 feet.',
    },
    {
      name: 'Phoenix Wing Strike',
      level: 3,
      description:
        'At 3rd level, a phoenix champion gains the ability to expend a readied strike as a standard action to create a 30-foot cone of mystical fire and light that deals 1d6 points of damage per initiator level to any creature caught within the area. Half of this damage is fire damage and the other half is sacred damage. Creatures caught in this area may attempt a Reflex save (DC 10 + 1/2 initiator level + initiation modifier) for half damage. This ability is considered a 5th-level strike of the Silver Crane, Solar Wind, and Tempest Gale disciplines for the purposes of prerequisites and effects. Once the phoenix champion has used this ability, he cannot use it again until he recovers his maneuvers.',
    },
    {
      name: "Phoenix's Cunning",
      level: 4,
      description:
        'Starting at 4th level, a phoenix champion adds 1/2 his class level as a bonus on combat maneuver checks made with ranged weapons.',
    },
    {
      name: 'Eye of the Heavens (Blindsense)',
      level: 5,
      description:
        'At 5th level, the phoenix champion gains blindsense with a range of 30 feet.',
    },
    {
      name: 'Greater Phoenix Wing Strike',
      level: 6,
      description:
        'At 6th level, when a phoenix champion expends a Silver Crane, Solar Wind, or Tempest Gale maneuver to fuel his Phoenix Wing Strike, he may apply one of the following additional effects based on the discipline of the expended maneuver. Silver Crane: One ally within 30 feet of the phoenix champion is healed for an amount equal to half the damage dealt by the blast. Any ally within the blast radius takes no damage from the Phoenix Wing Strike. Solar Wind: Creatures that fail their Reflex save against the Phoenix Wing Strike are blinded for one round. Tempest Gale: The phoenix champion may attempt a trip combat maneuver check against each creature that failed its Reflex save, gaining a sacred bonus on these checks equal to his initiation modifier.',
    },
    {
      name: 'Rising Phoenix Dance',
      level: 7,
      description:
        'At 7th level, a phoenix champion may abandon a stance he is currently in to assume the Rising Phoenix Dance as a swift action, losing the benefits of the previous stance to gain the benefits of this one. This stance is considered a 6th-level stance of the Silver Crane, Solar Wind, and Tempest Gale disciplines. While in the Rising Phoenix Dance, the phoenix champion gains a fly speed equal to his land speed with good maneuverability, and gains a bonus on Fly checks equal to 1/2 his initiator level. All allies within 30 feet gain the benefits of the protection from evil spell and a +1 bonus on attack and damage rolls against evil creatures for every three phoenix champion levels.',
    },
    {
      name: 'Eye of the Heavens (True Seeing)',
      level: 8,
      description:
        'At 8th level, the phoenix champion gains the effects of the true seeing spell out to a distance of 60 feet at all times.',
    },
    {
      name: 'Cleansing Flames',
      level: 9,
      description:
        'At 9th level, whenever the phoenix champion initiates a maneuver that requires a ranged attack, one ally within 60 feet of him can attempt another saving throw against an ongoing condition affecting them. The DC for this saving throw is the same as the original effect that caused the condition, and a successful save ends the condition. This ability cannot be used to end conditions that allowed no saving throw.',
    },
    {
      name: 'Solar Inspiration',
      level: 10,
      description:
        'At 10th level, the phoenix champion gains a +10 insight bonus on Perception and Diplomacy checks, and when he uses his Phoenix Wing Strike ability, the Reflex saving throw only halves the fire damage from the blast. The sacred damage portion is no longer subject to the saving throw.',
    },
  ],
  prerequisites: {
    bab: 4,
    feats: [
      'Point-Blank Shot',
      'Precise Shot',
      'Discipline Focus (Solar Wind) or Discipline Focus (Tempest Gale)',
    ],
    special: [
      'Ability to initiate maneuvers, initiator level 5th',
    ],
    alignment: 'Any non-evil',
  },
  spellcasting: {
    type: 'None',
    casting: 'None',
  },
  initiating: {
    type: 'Martial',
    initiatingAbility: 'WIS',
    ilProgression: 'full',
    disciplines: [
      'silver-crane',
      'solar-wind',
      'tempest-gale',
    ],
    progressionTableKey: 'phoenix-champion',
    recoveryMechanics: {
      primary: {
        type: 'custom',
        description:
          'The phoenix champion recovers maneuvers through the recovery mechanics of his base initiating class.',
      },
    },
  },
  source: 'Path of War',
};
