import { ArchetypeData } from '../types';
import type { InitiatingProgressionTable } from '../initiatingProgressionTables';

// Path of War standard archetype maneuver progression (20 rows)
// [maneuversKnown, maneuversReadied, stancesKnown]
export const MYRMIDON_PROGRESSION: InitiatingProgressionTable = [
  [3, 3, 1], // Level 1
  [4, 3, 1], // Level 2
  [5, 3, 1], // Level 3
  [6, 4, 2], // Level 4
  [6, 4, 2], // Level 5
  [6, 4, 2], // Level 6
  [7, 4, 3], // Level 7
  [7, 4, 3], // Level 8
  [8, 4, 3], // Level 9
  [8, 5, 3], // Level 10
  [9, 5, 4], // Level 11
  [9, 5, 4], // Level 12
  [10, 5, 5], // Level 13
  [11, 5, 5], // Level 14
  [11, 6, 5], // Level 15
  [12, 6, 5], // Level 16
  [13, 6, 5], // Level 17
  [14, 6, 5], // Level 18
  [14, 6, 5], // Level 19
  [15, 7, 5], // Level 20
];

export const MYRMIDON_ARCHETYPE: ArchetypeData = {
  name: 'Myrmidon',
  className: 'Fighter',
  description:
    'Some fighters attend grand colleges of war where they learn to master more esoteric martial forms, and some learn the techniques of many different schools of combat and forge their own path. Others are trained in small regiments to fight as a single cohesive, adaptable unit where all members are capable of playing the other\'s parts. These fighters are known as myrmidons, the pinnacle of the fighter\'s tradition of adaptability, ingenuity, and enduring strength.',
  replacedFeatures: [
    'Bonus Feat (1st level)',
    'Bonus Feat (2nd level)',
    'Bonus Feat (6th level)',
    'Bonus Feat (10th level)',
    'Bonus Feat (14th level)',
    'Bonus Feat (18th level)',
  ],
  modifiedFeatures: ['Class Skills', 'Skill Ranks per Level'],
  newFeatures: [
    // ── Maneuvers ──
    {
      name: 'Maneuvers',
      level: 1,
      description:
        'A myrmidon begins his career with knowledge of three martial maneuvers. When he takes his first myrmidon level, he selects four of the following disciplines to gain access to for myrmidon maneuvers: Broken Blade, Golden Lion, Iron Tortoise, Mithral Current, Piercing Thunder, Primal Fury, Scarlet Throne, Tempest Gale, and Thrashing Dragon. If one of his selected disciplines\' associated skills is not on his class skill list, he gains it as a class skill. A maneuver usable by myrmidons is considered an extraordinary ability unless otherwise noted in it or its discipline\'s description. A myrmidon\'s maneuvers are not affected by spell resistance, and he does not provoke attacks of opportunity when he initiates one. The myrmidon learns additional maneuvers at higher levels, as indicated on Table: Archetype Maneuver Progression. The maximum level of maneuvers gained through myrmidon levels is limited by those listed in that table as well, although this restriction does not apply to maneuvers added to his maneuvers known through other methods, such as prestige classes or the Advanced Study feat. A myrmidon must meet a maneuver\'s prerequisite to learn it. Upon reaching 4th level, and at every even numbered initiator level thereafter (6th, 8th, 10th, and so on), the myrmidon can choose to learn a new maneuver in place of one he already knows. In effect, he loses the old maneuver in exchange for the new one. He can choose a new maneuver of any level he likes, as long as he observes the restriction on the highest-level maneuvers he knows; the myrmidon need not replace the old maneuver with a maneuver of the same level. He can swap only a single maneuver at any given level. A myrmidon\'s initiation modifier is Wisdom, and each myrmidon level is counted as a full initiator level.',
    },
    {
      name: 'Maneuvers Readied',
      level: 1,
      description:
        'A myrmidon can ready all three of his maneuvers known at 1st level, and as he advances in level and learns more maneuvers, he is able to ready more, but must still choose which maneuvers to ready. A myrmidon must always ready his maximum number of maneuvers readied. He readies his maneuvers by performing weapon drills for ten minutes. The maneuvers he chooses remain readied until he decides to practice again and change them. The myrmidon does not need to sleep or rest for any long period of time in order to ready his maneuvers; any time he spends ten minutes practicing, he can change his readied maneuvers. A myrmidon begins an encounter with all his readied maneuvers unexpended, regardless of how many times he might have already used them since he chose them. When he initiates a maneuver, he expends it for the current encounter, so each of his readied maneuvers can be used once per encounter (unless he recovers them, as described below). In order for the myrmidon to recover maneuvers, he must take on a defensive form as a full-round action, resetting his rhythm to continue the battle. When he does so, he recovers a number of maneuvers equal to his myrmidon initiation modifier (minimum 2) and until the start of his next turn, attacks made against the myrmidon provoke an attack of opportunity from him and he can take a 5-foot step each time he is attacked (even if he has already taken one this round). In addition, he gains the benefit of the Combat Reflexes feat, and can use his myrmidon initiation modifier instead of his Dexterity modifier for determining how many additional attacks of opportunity he can make. Alternately, the myrmidon may take a moment to focus, recovering a single maneuver as a standard action.',
    },
    {
      name: 'Stances Known',
      level: 1,
      description:
        'A myrmidon begins his career with knowledge of one stance from any discipline open to myrmidons. At 4th, 7th, 11th, and 13th levels, he can select an additional stance to learn. The maximum level of stances gained through myrmidon levels is limited by those listed in Table: Archetype Maneuver Progression. Unlike maneuvers, stances are not expended and the myrmidon does not have to ready them. All the stances he knows are available to him at all times, and he can change the stance he is currently maintaining as a swift action. A stance is an extraordinary ability unless otherwise stated in the stance or discipline description. Unlike with maneuvers, a myrmidon cannot learn a new stance at higher levels in place of one he already knows. This ability replaces the bonus feats gained at 6th, 10th, 14th, and 18th levels.',
    },

    // ── Grit ──
    {
      name: 'Grit',
      level: 1,
      description:
        'At 1st level, the myrmidon makes his mark upon the world with nerves of steel and superior training. Through determination, verve, or otherwise dumb luck, the myrmidon is capable of forcing incredible feats of daring and skill through their own tenacity. In game terms, grit is a fluctuating measure of a myrmidon\'s ability to perform incredible actions in combat. At the start of each day, a myrmidon gains a number of grit points equal to his myrmidon initiation modifier (minimum 1). His grit goes up or down throughout the day, but usually cannot go higher than his myrmidon initiation modifier (minimum 1), though some feats and magic items may affect this maximum. A myrmidon spends grit to accomplish deeds (see below), and regains grit in the following ways. Critical Hit: Each time the myrmidon confirms a critical hit while in the heat of combat with a weapon with which he has Weapon Focus or is in a weapon group associated with a discipline he has Discipline Focus for, he regains one grit point. Confirming a critical hit on a helpless or unaware creature or on a creature that has fewer Hit Dice than half the myrmidon\'s character level does not restore grit. Killing Blow: When the myrmidon reduces a creature to 0 or fewer hit points with a maneuver or with a weapon he has Weapon Focus with, he regains 1 grit point. Destroying an unattended object, reducing a helpless or unaware creature to 0 or fewer hit points, or reducing a creature that has fewer Hit Dice than half the myrmidon\'s character level to 0 or fewer hit points does not restore any grit. Daring Acts: With the GM\'s approval, a myrmidon can regain grit by performing daring acts. As a general rule, a daring act should be risky and dramatic. It should take a good deal of guts, and its outcome should have a low probability of success. If it is successful, the myrmidon regains 1 grit point. Before attempting a daring act, the player should ask the GM whether the act qualifies. The GM is the final arbiter of what\'s considered a daring act, and can grant a regained grit point for a daring act even if the player does not ask beforehand whether the act qualifies. This ability replaces the bonus feat gained at 2nd level.',
    },

    // ── Deeds ──
    {
      name: 'Unbreakable',
      level: 1,
      description:
        'Starting at 1st level, a myrmidon is trained very well to protect himself against the many unnatural elements of this world where he must rely on only his wits and training to protect him from harm. He can spend 1 grit point as an immediate action to gain a +4 circumstance bonus on a single saving throw.',
    },
    {
      name: 'Heroic Recovery',
      level: 1,
      description:
        'Starting at 1st level, a myrmidon can spend 1 grit point as a swift action to recover a single expended maneuver.',
    },
    {
      name: 'Man of Action',
      level: 1,
      description:
        'Starting at 1st level, a myrmidon can spend 1 grit point as a swift action to gain a circumstance bonus on a single Acrobatics, Climb, or Swim check equal to his class level.',
    },
    {
      name: 'Ready for Trouble',
      level: 3,
      description:
        'Starting at 3rd level, as long as the myrmidon has at least 1 grit point, he gains a +2 bonus on initiative checks and Will saves to resist compulsion and fear effects. In addition, if his hands are free and unrestrained, he can spend 1 grit point as part of making an initiative check to draw a single non-hidden light or one-handed weapon or to draw and don a shield (except a tower shield).',
    },
    {
      name: 'Utility Trick',
      level: 3,
      description:
        'Starting at 3rd level, as long as the myrmidon has at least 1 grit point, he can perform any of the following utility tricks. The myrmidon must declare the utility trick he is using before using the ability. Field Bandage: By using a healer\'s kit to quickly dress and bandage a wound, the myrmidon can grant 1d6 temporary hit points per three character levels to himself or an adjacent creature as a full-round action. These temporary hit points cannot increase a creature\'s hit points beyond its normal maximum, and last for ten minutes. A creature can only receive the benefits of this ability for one day or until they have received magical healing equal to or greater than the amount of temporary hit points granted by the myrmidon\'s field bandage, whichever comes first. This ability also halts a bleeding wound, stopping a creature from taking further bleed damage. Makeshift Tool: Should he need a tool in a combat situation, the myrmidon makes due with his weapons. He is not penalized for not having a proper tool when making skill checks in combat. Improvise Weapon: The myrmidon can use objects not intended to be normal weapons or cobble together something that can be used as a weapon. He only takes a -2 penalty while wielding improvised weapons, rather than -4.',
    },
    {
      name: "Warrior's Determination",
      level: 6,
      description:
        'The myrmidon gains an uncanny ability to force himself through many hardships and keep on going through his superior training and experience. Starting at 6th level, he can spend 1 grit point as an immediate action to negate a single condition currently affecting him until the end of the encounter, at which point it returns as if its duration had not been interrupted. The myrmidon can activate this ability even if he would not normally be able to act because of the condition in question. A myrmidon can use this ability multiple times in an encounter, spending 1 grit point and negating a single condition each time he does. At 6th level, the myrmidon can temporarily negate the fatigued, shaken, or sickened conditions using this ability. At 10th level, a myrmidon can temporarily negate the dazed or staggered conditions, or ignore the effects of a disease (including ability damage he may have taken from the disease) using this ability. At 14th level, a myrmidon can temporarily negate the exhausted, frightened, or nauseated conditions using this ability.',
    },
  ],
  initiating: {
    type: 'Martial',
    initiatingAbility: 'WIS',
    ilProgression: 'full',
    disciplines: [
      'Broken Blade',
      'Golden Lion',
      'Iron Tortoise',
      'Mithral Current',
      'Piercing Thunder',
      'Primal Fury',
      'Scarlet Throne',
      'Tempest Gale',
      'Thrashing Dragon',
    ],
    progressionTableKey: 'MYRMIDON_PROGRESSION',
    recoveryMechanics: {
      primary: {
        type: 'custom',
        description:
          'The myrmidon takes on a defensive form as a full-round action, recovering a number of maneuvers equal to his initiation modifier (minimum 2). Until the start of his next turn, attacks made against him provoke attacks of opportunity and he can take a 5-foot step each time he is attacked. He gains the benefit of Combat Reflexes using his initiation modifier instead of Dexterity.',
      },
      secondary: { type: 'swift_one' },
    },
  },
  source: 'Path of War',
};
