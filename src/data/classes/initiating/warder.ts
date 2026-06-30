// Warder — Path of War base initiating class
// Source: https://www.d20pfsrd.com/alternative-rule-systems/3rd-party-rules-systems/path-of-war/classes/warder/
// Scraped: 2026-04-15

import { BABProgression, SaveProgression } from '@/types/base';
import type { ExpandedClassData } from '../types';
import type { InitiatingProgressionTable } from '../initiatingProgressionTables';

// [maneuversKnown, maneuversReadied, stancesKnown] per class level 1-20
export const WARDER_PROGRESSION: InitiatingProgressionTable = [
  [5, 3, 1], // 1
  [6, 4, 2], // 2
  [7, 4, 2], // 3
  [7, 4, 2], // 4
  [8, 5, 3], // 5
  [8, 5, 3], // 6
  [9, 5, 3], // 7
  [9, 6, 3], // 8
  [10, 6, 4], // 9
  [10, 6, 4], // 10
  [11, 7, 5], // 11
  [11, 7, 5], // 12
  [12, 7, 5], // 13
  [12, 8, 5], // 14
  [13, 8, 6], // 15
  [13, 8, 6], // 16
  [14, 9, 6], // 17
  [14, 9, 7], // 18
  [15, 9, 7], // 19
  [16, 10, 7], // 20
];

export const WARDER_CLASS: ExpandedClassData = {
  name: 'Warder',
  category: 'Path of War',
  maxLevel: 20,
  hitDie: 12,
  skillRanksPerLevel: 4,
  classSkills: [
    'Acrobatics',
    'Bluff',
    'Climb',
    'Craft',
    'Diplomacy',
    'Handle Animal',
    'Intimidate',
    'Knowledge (history)',
    'Knowledge (martial)',
    'Knowledge (nobility)',
    'Profession',
    'Ride',
    'Survival',
    'Swim',
  ],
  babProgression: BABProgression.Full,
  saves: {
    fortitude: SaveProgression.Good,
    reflex: SaveProgression.Poor,
    will: SaveProgression.Good,
  },
  weaponProficiencies: ['Simple melee weapons', 'Martial melee weapons'],
  armorProficiencies: ['Light armor', 'Medium armor', 'Heavy armor', 'Shields', 'Tower shields'],
  startingWealth: '5d6 × 10 gp', // As paladin
  classFeatures: [
    {
      name: 'Maneuvers',
      level: 1,
      description:
        "A warder begins her career with knowledge of five martial maneuvers. The disciplines available to her are Broken Blade, Golden Lion, Iron Tortoise, Primal Fury, and either Eternal Guardian or Piercing Thunder. If she does not have the associated skill for a chosen discipline as a class skill, she gains it as a class skill. She readies her maneuvers by going over battle tactics, through weapon drills, or spending time meditating in prayer for 10 minutes. She need not sleep or be well-rested beforehand. At 4th level and every even level thereafter, the warder may exchange one known maneuver for another of any level she qualifies for. Maneuvers are extraordinary abilities, unaffected by spell resistance, and do not provoke attacks of opportunity when initiated. A warder's initiation modifier is Intelligence.",
      effects: [],
    },
    {
      name: 'Maneuver Recovery',
      level: 1,
      description:
        'For a warder to recover expended maneuvers, she must take stock of her situation to plan for her next movement. By focusing entirely on a defensive position to prepare her next move, she is able to regain maneuvers expended to assist her to victory. By taking a full round action to plan her next move (activating her defensive focus class feature, see below), she recovers a number of expended maneuvers equal to her warder initiation modifier (minimum of 2). Alternately, she may take a brief pause in battle and recover a single maneuver of her choosing by spending a standard action on her turn.',
      effects: [],
    },
    {
      name: 'Defensive Focus',
      level: 1,
      id: 'defensive-focus',
      shortDescription: 'Full-round action — expand threatened area, bonus CMD, AoO while in reach',
      activationMode: 'toggle',
      description:
        'At 1st level, the defensive prowess of the warder is second to none, allowing her to focus her actions purely on defending himself and her allies in ways that cannot be replicated. The warder gains the Combat Reflexes feat as a bonus feat, using her warder initiation modifier in place of her Dexterity modifier to determine the number of additional attacks of opportunity she may make each round. When recovering warder maneuvers as a full round action, the warder sets up a defensive perimeter around herself to defend her allies, increasing her threatened area by 5 feet + 5 feet for every five initiator levels she possesses. Until the beginning of her next turn, she may make attacks of opportunity against any opponent in this threatened area that provokes attacks of opportunity. She may move as part of these attacks of opportunity, provided her total movement before her next turn does not exceed her speed (his movement provokes attacks of opportunity as normal). Additionally, while using defensive focus, the warder adds her warder initiation modifier plus her class level to her CMD for the purposes of defending against enemies trying to use the Acrobatics skill to prevent her from getting attacks of opportunity against them.',
    },
    {
      name: 'Aegis',
      level: 1,
      description:
        "At 1st level, the warder's defensive prowess extends to those who choose to stay near to him. Allies who are within 10 ft. of the warder's position gain a +1 morale bonus to Armor Class and to Will saves under the warder's defensive aegis, her presence bolstering and shepherding the defenses of her allies. This bonus improves to +2 at 5th level (+3 at 9th level, +4 at 13th level, and +5 at 17th level). The warder does not receive this bonus, but may receive the benefits of this ability from another warder. If the ally cannot see or hear the warder, then the ally does not gain the benefits of this ability (such as if the warder is concealed or invisible). At 6th level, her aegis' range increases its effective area, growing to a 20 ft. radius. At 12th level, this increases again to 30 ft.",
      effects: [],
    },
    {
      name: "Armiger's Mark",
      level: 2,
      id: 'armigers-mark',
      shortDescription:
        'Free action on hit — mark foe, -4 attack vs. non-warder (uses/day scale with level)',
      activationMode: 'toggle',
      description:
        "At 2nd level, a warder is trained in how best to control her enemies and how they behave in battle, urging them to throw their all against the warder's indomitable armor and unyielding shield. With a sharp blade, a clever taunt, or something that otherwise attracts her foe, the warder can direct the attention of enemies towards himself. Whenever the warder attacks a foe in combat and inflicts at least 1 point of damage, as a free action she may mark them as her foe (she may even mark a foe during an attack of opportunity and may make the free action to do so, even though it is not her turn) and attempt to continue to force them to engage the warder only. The target is aware of being marked, and the mark remains for a number of rounds equal to her warder initiation modifier (minimum of 1). Marked targets suffer a -4 penalty to attack rolls against foes that are not the warder, and arcane spellcasters suffer an increase in arcane spell failure of 10% + 1% per two warder levels until the mark expires. The warder may only maintain a number of marks equal to 3 + her warder initiation modifier at a time, and she may make a number of marks per day equal to 1/2 warder level + warder initiation modifier. At 8th level, this penalty increases to -6, and it increases again to -8 at 16th level. This ability functions on creatures with an Intelligence score of 1 or more, allowing her to mark animals and other beasts as well as sentient beings, but not mindless creatures such as skeletons. Multiple armiger's marks overlap (do not stack). At 9th level, the warder may expend two uses of her armiger's mark to make a grand challenge to all enemies within a 30 ft. radius and mark them with her words alone. Creatures affected must make a Will save (DC 10 + 1/2 warder level + warder initiation modifier) against the warder's mark ability or suffer the penalties of being marked for a number of rounds equal to her warder initiation modifier. This does not count against her normal marking limit. This is a language-dependent ability and does not affect creatures of less than 1 Intelligence. At 16th level, the armiger's mark improves to allow her to recover an expended maneuver whenever she reduces a marked opponent's hit points to 0 or less (this can only trigger once per marked opponent).",
      resourcePool: {
        id: 'armigers_mark',
        name: "Armiger's Mark",
        rechargeOn: 'rest',
        maxFormula: 'floor(warderLevel / 2) + intMod',
        restRecoveryMode: 'full',
      },
      effects: [],
    },
    {
      name: 'Bonus Feat',
      level: 3,
      description:
        'At 3rd level and every 5th level thereafter (8th, 13th, 18th), a warder receives a bonus combat or teamwork feat. She must meet all prerequisites for these feats.',
      effects: [],
    },
    {
      name: 'Tactical Acumen',
      level: 4,
      description:
        'At 4th level, the combat training that the warder has received hones her reflexes. Through her knowledge of tactics, training manuals, and lessons in the histories of war, her wits aid her when her agility may be impaired by her heavy armor. The warder may add her warder initiation modifier to her Reflex saves and to her initiative in place of her Dexterity modifier (using the higher of the two bonuses).',
      effects: [],
    },
    {
      name: 'Extended Defense',
      level: 5,
      id: 'extended-defense',
      shortDescription:
        'Immediate action — initiate a readied counter as free action until next turn',
      activationMode: 'toggle',
      description:
        "Upon reaching 5th level, the warder becomes ever more skilled at adapting to the flow of combat. Once per day, the warder may activate Extended Defense as an immediate action. When she does, the character chooses a counter she has readied; she may initiate that counter as a free action (even on another's turn) at will until the beginning of her next turn. At the beginning of her next turn, the chosen counter is expended. Every three levels beyond this (8th, 11th, 14th, and 17th levels), she may use this ability an additional time per day. This ability can only be used with counters that negate attacks or allow the warder to use another roll in place of a saving throw.",
      resourcePool: {
        id: 'extended_defense',
        name: 'Extended Defense',
        rechargeOn: 'rest',
        maxFormula: 'floor((warderLevel - 2) / 3)',
        restRecoveryMode: 'full',
      },
      effects: [],
    },
    {
      name: 'Clad in Steel',
      level: 6,
      description:
        'Having improved her skill with her armor, the warder is a more capable combatant in it when protecting her allies or cause. The warder may subtract her aegis bonus from her total armor check penalty and increase the maximum Dexterity bonus on her armor by 1 at 6th level, and by 2 at 12th level.',
      effects: [],
    },
    {
      name: 'Adaptive Tactics',
      level: 7,
      description:
        "A warrior can attempt to plan for everything, but no plan stands against the heat of battle if there is no room for adaptation. At 7th level, the warder can expend one use of her armiger's mark ability as a full-round action to expend up to her warder initiation modifier in readied maneuvers, then instantly ready an equal amount of maneuvers. The warder may not replace expended maneuvers using this ability; any maneuver she is re-preparing with this ability must be unexpended to be exchanged. She may choose from any of her known maneuvers.",
    },
    {
      name: 'Bonus Feat',
      level: 8,
      description: 'The warder receives an additional bonus combat or teamwork feat.',
      effects: [],
    },
    {
      name: 'Improved Defensive Focus',
      level: 10,
      description:
        'At 10th level, her defensive focus improves further. While her reach is increased by this ability, opponents treat her threatened area as difficult terrain. If a foe tries to move through a space within her reach, the movement through those squares costs double (x2). Additionally, while using her defensive focus to make an attack of opportunity, her movement does not provoke attacks of opportunity.',
      effects: [],
    },
    {
      name: 'Stalwart',
      level: 12,
      description:
        'At 12th level, a warder can use mental and physical resiliency to avoid certain attacks. If she makes a successful Fortitude or Will saving throw against an attack that has a reduced effect on a successful save, she instead avoids the effect entirely. A helpless warder does not gain the benefit of the stalwart ability.',
      effects: [],
    },
    {
      name: 'Bonus Feat',
      level: 13,
      description: 'The warder receives an additional bonus combat or teamwork feat.',
      effects: [],
    },
    {
      name: 'Steel Defense',
      level: 15,
      description:
        "At 15th level, the warder is capable of turning an otherwise lethal blow and continue the fight. When an attack that inflicts hit point damage from a natural attack, melee weapon, or ranged weapon would reduce the warder to 0 or fewer hit points, she can make a Fortitude save (DC the attacker's attack roll) to deflect the attack to her armor or shield (light, heavy, or tower shields only), causing it to suffer the damage in her place (apply item hardness as normal). If this would break the character's armor, it gains the broken condition until it is repaired. The warder cannot use this ability with broken armor or a broken shield. The warder must be wearing armor or a shield to use this ability.",
      effects: [],
    },
    {
      name: 'Bonus Feat',
      level: 18,
      description: 'The warder receives an additional bonus combat or teamwork feat.',
      effects: [],
    },
    {
      name: 'Born of Steel',
      level: 19,
      description:
        'At 19th level, the warder is so at home in her armor that it is like a second skin, protecting her with its familiar embrace. When wearing medium or heavy armor, the warder is more resistant to critical hits. When a critical threat is rolled against her, the warder may add her warder initiation modifier to her AC against the critical confirmation roll.',
      effects: [],
    },
    {
      name: 'Deathless Defenses',
      level: 20,
      description:
        "At 20th level, the warder can indefinitely hold a position to protect her allies, even if it may cost her her life. The warder must expend two uses of her armiger's mark ability as an immediate action to activate her deathless defenses. While this ability is active, the warder is capable of maintaining her defensive focus as a move action (but recovers no maneuvers unless she spends a full round to recover) but gains the full bonuses of her defensive focus. Additionally, she receives the benefits of her aegis ability as well. She is unable to die from hit point damage while this effect is in use. She may maintain the use of this ability each round at the cost of one use of her armiger's mark ability, or she may end it as a free action. Abilities or effects that don't inflict hit point damage, such as energy drain or ability damage, can still kill the warder. While this effect is in use, she is immune to mind-affecting abilities, as her focus prevents any from tampering with her mind. Once this ability ends, either voluntarily or if the character runs out of uses of armiger's mark (assuming she is not dead), the warder is exhausted and must rest a full 8 hours to recover.",
    },
  ],
  spellcasting: {
    type: 'None',
    casting: 'None',
  },
  initiating: {
    type: 'Martial',
    initiatingAbility: 'INT',
    ilProgression: 'full',
    // Warder chooses either Eternal Guardian or Piercing Thunder as 5th discipline.
    // FLAG: d20pfsrd lists "Broken Blade, Golden Lion, Iron Tortoise, Primal Fury,
    // and either Eternal Guardian or Piercing Thunder" — NOT Scarlet Throne.
    disciplines: [
      'broken-blade',
      'golden-lion',
      'iron-tortoise',
      'primal-fury',
      'eternal-guardian', // choice: Eternal Guardian OR Piercing Thunder
      'piercing-thunder', // choice: Eternal Guardian OR Piercing Thunder
    ],
    progressionTableKey: 'warder',
    // Recovery: full-round recovers initiation modifier (min 2) maneuvers,
    // standard action recovers 1 maneuver. Not a "recover all" mechanic.
    recoveryMechanics: {
      primary: { type: 'full_round_modifier_min_2' },
      secondary: { type: 'standard_one' },
    },
  },
  source: 'Path of War',
};
