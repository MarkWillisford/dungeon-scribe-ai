// Landsknecht — Path of War: Expanded prestige class (Dreamscarred Press)
// Source: https://www.d20pfsrd.com/alternative-rule-systems/3rd-party-rules-systems/path-of-war/prestige-classes/landsknecht/

import { BABProgression, SaveProgression } from '@/types/base';
import type { ExpandedClassData } from '../../types';
import type { InitiatingProgressionTable } from '../../initiatingProgressionTables';

// [maneuversKnown, maneuversReadied, stancesKnown] per prestige level 1-10
// These are cumulative gains from the prestige class itself.
export const LANDSKNECHT_PROGRESSION: InitiatingProgressionTable = [
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

export const LANDSKNECHT_CLASS: ExpandedClassData = {
  name: 'Landsknecht',
  category: 'Prestige',
  maxLevel: 10,
  hitDie: 10,
  skillRanksPerLevel: 4,
  classSkills: [
    'Acrobatics',
    'Bluff',
    'Diplomacy',
    'Intimidate',
    'Perform (dance)',
    'Sense Motive',
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
  classFeatures: [
    {
      name: 'Maneuvers',
      level: 1,
      description:
        'At every even level, a landsknecht gains a new maneuver known from his available disciplines. His available disciplines for these maneuvers are Mithral Current, Scarlet Throne, and two of his previously available disciplines, chosen when he takes his first landsknecht level. He must meet a maneuver\'s prerequisites to learn it. He adds his full landsknecht levels to his initiator level to determine his total initiator level and his highest-level maneuvers known. At 3rd level and again at 6th level and 9th level, a landsknecht gains an additional maneuver readied per day.',
    },
    {
      name: 'Stances Known',
      level: 1,
      description:
        'At 4th level and again at 6th level and 10th level, a landsknecht learns a new stance from any of the disciplines available to him as a landsknecht.',
    },
    {
      name: 'Threatening Demeanor',
      level: 1,
      description:
        'A landsknecht is considered to be threatening all squares within reach of his weapon, even if it is sheathed.',
    },
    {
      name: 'Strength of Arms',
      level: 1,
      description:
        'As long as the landsknecht only attacks with a single weapon wielded in one hand during a round, he adds 1-1/2 times his Strength modifier to damage, as if he was wielding the weapon in two hands.',
    },
    {
      name: 'Never Outnumbered',
      level: 2,
      description:
        'Starting at 2nd level, the landsknecht gains a +1 bonus on attack and damage rolls whenever he threatens two or more opponents. This bonus increases by +1 at 5th level and again at 8th level.',
    },
    {
      name: 'Uncanny Dodge',
      level: 2,
      description:
        'Starting at 2nd level, the landsknecht cannot be caught flat-footed, nor does he lose his Dexterity bonus to AC if the attacker is invisible. He still loses his Dexterity bonus to AC if immobilized. A landsknecht with this ability can still lose his Dexterity bonus to AC if an opponent successfully uses the feint action against him. If a landsknecht already possesses uncanny dodge from a different class, he automatically gains improved uncanny dodge instead.',
    },
    {
      name: 'Surprising Strike',
      level: 3,
      description:
        'At 3rd level, once per day, the landsknecht can use a strike with an initiation action of 1 standard action in place of an attack of opportunity. He can use this ability twice per day at 6th level, and three times per day at 9th level.',
    },
    {
      name: 'Superior Reach',
      level: 4,
      description:
        'At 4th level, as long as the landsknecht only attacks with a single weapon wielded in one hand during his turn, he increases his melee reach with that weapon by 5 feet.',
    },
    {
      name: 'Improved Uncanny Dodge',
      level: 5,
      description:
        'At 5th level, the landsknecht can no longer be flanked. This defense denies a rogue the ability to sneak attack the landsknecht by flanking him, unless the attacker has at least four more rogue levels than the landsknecht\'s class level.',
    },
    {
      name: 'Never Outnumbered +2',
      level: 5,
      description:
        'The landsknecht\'s bonus on attack and damage rolls when threatening two or more opponents increases to +2.',
    },
    {
      name: 'Mobile Attacker',
      level: 5,
      description:
        'At 5th level, once per round, the landsknecht can make a melee attack as a free action against an opponent he threatens at any point in his movement when he takes a move action or initiates a maneuver that allows him to move as part of its initiation action. He can use this ability a number of times per encounter equal to his highest initiation modifier.',
    },
    {
      name: 'Surprising Strike (2/day)',
      level: 6,
      description:
        'The landsknecht can use Surprising Strike twice per day.',
    },
    {
      name: 'Silver Crown Strike',
      level: 7,
      description:
        'At 7th level, the landsknecht gains Silver Crown Strike, a Scarlet Throne/Mithral Current strike requiring 1 standard action. The landsknecht makes a number of attacks with a single weapon against the target as if he had made a full attack against them. These attacks deal weapon damage as normal, except that the damage from all hits is totalled before applying damage reduction, resistances, or immunities. Only one critical hit is possible from this strike, multiplying the total damage. If the landsknecht draws his weapon as part of initiating this strike, he gains a circumstance bonus on critical confirmation rolls for these attacks equal to his initiation modifier.',
    },
    {
      name: 'Bait the Dragon',
      level: 8,
      description:
        'At 8th level, as a swift action, the landsknecht can choose to take a -4 penalty to AC for one round. If he does so, any melee attack made against him for one round provokes an attack of opportunity from the landsknecht.',
    },
    {
      name: 'Never Outnumbered +3',
      level: 8,
      description:
        'The landsknecht\'s bonus on attack and damage rolls when threatening two or more opponents increases to +3.',
    },
    {
      name: 'Surprising Strike (3/day)',
      level: 9,
      description:
        'The landsknecht can use Surprising Strike three times per day.',
    },
    {
      name: 'Stance of Assured Victory',
      level: 10,
      description:
        'At 10th level, as a swift action, the landsknecht can abandon his current stance to assume the Stance of Assured Victory. This ability is considered to be an 8th-level stance. While in this stance, the landsknecht and his allies within 30 feet gain a circumstance bonus on attack rolls equal to his highest initiation modifier. Additionally, whenever an opponent within 30 feet of the landsknecht attacks an ally, they provoke an attack of opportunity from any ally other than the target who is also within 30 feet. Such attacks of opportunity can be made even if the opponent is not within that ally\'s melee reach.',
    },
  ],
  prerequisites: {
    bab: 5,
    feats: ['Quick Draw', 'Combat Reflexes'],
    special: [
      'One Mithral Current or Scarlet Throne maneuver known, initiator level 5th',
    ],
  },
  spellcasting: {
    type: 'None',
    casting: 'None',
  },
  initiating: {
    type: 'Martial',
    initiatingAbility: 'WIS',
    ilProgression: 'full',
    disciplines: ['mithral-current', 'scarlet-throne'],
    progressionTableKey: 'LANDSKNECHT_PROGRESSION',
    recoveryMechanics: {
      primary: {
        type: 'custom',
        description:
          'The landsknecht recovers maneuvers through the recovery mechanics of his base initiating class.',
      },
    },
  },
  source: 'Path of War: Expanded',
};
