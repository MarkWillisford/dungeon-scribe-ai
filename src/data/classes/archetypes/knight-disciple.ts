import { ArchetypeData } from '../types';
import type { InitiatingProgressionTable } from '../initiatingProgressionTables';

// ──────────────────────────────────────────────
// Knight Disciple — Paladin archetype (Path of War)
// GRANT archetype: gives the initiating system to the Paladin.
// Source: https://www.d20pfsrd.com/classes/core-classes/paladin/archetypes/dreamscarred-press-paladin-archetypes/knight-disciple-paladin-archetype
// ──────────────────────────────────────────────

/**
 * Archetype Maneuver Progression (shared by PoW GRANT archetypes).
 * 20 rows: [maneuversKnown, maneuversReadied, stancesKnown]
 */
export const KNIGHT_DISCIPLE_PROGRESSION: InitiatingProgressionTable = [
  // Lvl  MK  MR  SK
  [3, 3, 1], // 1
  [4, 3, 1], // 2
  [5, 3, 1], // 3
  [6, 4, 2], // 4
  [6, 4, 2], // 5
  [6, 4, 2], // 6
  [7, 4, 3], // 7
  [7, 4, 3], // 8
  [8, 4, 3], // 9
  [8, 5, 3], // 10
  [9, 5, 4], // 11
  [9, 5, 4], // 12
  [10, 5, 5], // 13
  [11, 5, 5], // 14
  [11, 6, 5], // 15
  [12, 6, 5], // 16
  [13, 6, 5], // 17
  [14, 6, 5], // 18
  [14, 6, 5], // 19
  [15, 7, 5], // 20
];

export const KNIGHT_DISCIPLE_ARCHETYPE: ArchetypeData = {
  name: 'Knight Disciple',
  className: 'Paladin',
  description:
    'Knight disciples are holy protectors who defend the innocent from the predations of evil creatures. Blessed with the martial might of heaven, they boldly charge into battle to defend their allies.',

  replacedFeatures: [
    'Spells',
    'Lay on Hands',
    'Divine Bond',
    'Smite Evil',
    'Mercy',
    'Channel Positive Energy',
    'Aura of Justice',
    'Holy Champion',
  ],
  modifiedFeatures: [],

  newFeatures: [
    // ── Maneuvers (replaces Spells) ──
    {
      name: 'Maneuvers',
      level: 1,
      description:
        "A knight disciple begins her career with knowledge of three martial maneuvers. The disciplines available to her are Golden Lion, Iron Tortoise, and Silver Crane. She gains Bluff and Perception as class skills, and gains 2 additional skill ranks per level. Once the knight disciple knows a maneuver, she must ready it before she can use it by meditating or performing weapon drills for 10 minutes. The maneuvers she chooses remain readied until she decides to meditate again and change them. She may ready all three of her starting maneuvers, but as she advances in level and learns more maneuvers, she must choose which maneuvers to ready. A maneuver is considered expended after use and cannot be used again until recovered. The knight disciple may not ready maneuvers from more than one discipline at a time. Each knight disciple level counts as a full initiator level, and she uses Charisma as her initiation modifier. Maneuvers are extraordinary abilities unless otherwise noted, are not affected by spell resistance, and do not provoke attacks of opportunity when initiated. The knight disciple learns additional maneuvers at higher levels as shown on Table: Archetype Maneuver Progression. She must meet a maneuver's prerequisites to learn it. Upon reaching 4th level and at every even-numbered level thereafter (6th, 8th, 10th, and so on), the knight disciple may exchange a maneuver she knows for a new one of any level she can learn.",
    },
    {
      name: 'Maneuvers Readied',
      level: 1,
      description:
        'A knight disciple can ready all three of her starting maneuvers at 1st level, and as she advances in level, she is able to ready more, as indicated on Table: Archetype Maneuver Progression. A knight disciple must always ready her maximum number of maneuvers. She readies her maneuvers by performing weapon drills or praying to her deity for 10 minutes. The maneuvers she readied remain readied until she spends another 10 minutes to change them. A knight disciple begins an encounter with all her readied maneuvers unexpended, regardless of how many times she may have already used them since she last readied her maneuvers. When she recovers her maneuvers, she may change which maneuvers are readied. To recover maneuvers, a knight disciple must project her power, protecting her allies from harm as a full-round action, recovering a number of expended maneuvers equal to her knight disciple initiation modifier (minimum 2) and granting all allies within 30 feet a sacred bonus to AC and saving throws equal to her initiation modifier (minimum 1) for one round. Alternatively, the knight disciple may recover a single expended maneuver as a standard action.',
    },
    {
      name: 'Stances',
      level: 1,
      description:
        'A knight disciple begins play with knowledge of one stance from any discipline open to her. At 4th, 7th, 11th, and 13th levels, she selects an additional stance to learn. Unlike maneuvers, stances are not expended and the knight disciple does not have to ready them. All the stances she knows are available to her at all times, and she can change the stance she currently uses as a swift action. A stance is an extraordinary ability unless otherwise stated in the stance or discipline description. Unlike with maneuvers, a knight disciple cannot learn a new stance at higher levels in place of one she already knows.',
    },

    // ── Crusader's Training (replaces Divine Bond) ──
    {
      name: "Crusader's Training",
      level: 1,
      description:
        'At 1st level and every three levels thereafter (4th, 7th, 10th, 13th, 16th, 19th), a knight disciple selects one of the following abilities. Once selected, these abilities cannot be changed. This ability replaces divine bond.',
    },
    {
      name: "Crusader's Training — Detect Alignment",
      level: 1,
      description:
        'The knight disciple gains the ability to use detect chaos, detect good, and detect law at will as spell-like abilities. She can only use one of these abilities at a time.',
    },
    {
      name: "Crusader's Training — Detect Undead",
      level: 1,
      description:
        'The knight disciple gains the ability to use detect undead at will as a spell-like ability. She can concentrate on detect undead and detect evil simultaneously.',
    },
    {
      name: "Crusader's Training — Divine Interception",
      level: 1,
      description:
        'Once per encounter, the knight disciple can move up to her speed as an immediate action to a square adjacent to an ally. This movement provokes attacks of opportunity as normal.',
    },
    {
      name: "Crusader's Training — Fiendbane",
      level: 1,
      description:
        "The knight disciple can expend a use of guardian's shield as a swift action to enchant her weapon with holy power. If the knight disciple successfully strikes an evil extraplanar outsider, that creature must succeed at a Will save (DC 10 + 1/2 the knight disciple's class level + her initiation modifier) or be banished back to its home plane. This is a supernatural ability.",
    },
    {
      name: "Crusader's Training — Ghost Hunter",
      level: 1,
      description: "The knight disciple's weapons and armor gain the ghost touch special ability.",
    },
    {
      name: "Crusader's Training — Improved Guardian's Shield",
      level: 1,
      description:
        "Allies under the effect of the knight disciple's guardian's shield also gain the benefits of a protection from evil spell.",
    },
    {
      name: "Crusader's Training — Know Thine Enemy",
      level: 1,
      description:
        'The knight disciple can make Knowledge checks untrained to identify creatures, and there is no limit to the DC of Knowledge checks she can attempt. She gains a bonus on Knowledge checks made to identify chaotic or evil creatures equal to 1/2 her class level (minimum 1).',
    },
    {
      name: "Crusader's Training — Righteous Sanctuary",
      level: 1,
      description:
        'Once per encounter as an immediate action, the knight disciple can allow a willing ally to move up to its speed to a square adjacent to her. This movement does not provoke attacks of opportunity.',
    },
    {
      name: "Crusader's Training — Truthseeker",
      level: 1,
      description:
        'The knight disciple can use discern lies as a spell-like ability for a number of rounds per day equal to her class level. These rounds do not need to be consecutive.',
    },

    // ── Guardian's Shield (replaces Lay on Hands) ──
    {
      name: "Guardian's Shield",
      level: 1,
      description:
        "When the knight disciple initiates a strike, she may apply her guardian's shield to one ally within 60 feet as a free action. The shield lasts for a number of rounds equal to the knight disciple's initiation modifier, granting temporary hit points equal to twice the knight disciple's initiator level. These temporary hit points do not stack with temporary hit points from other sources and vanish when the duration expires. The knight disciple may use this ability a number of times per day equal to 1/2 her class level (minimum 1) plus her knight disciple initiation modifier. Guardian's shield counts as the lay on hands class feature for the purpose of feats and other abilities that require it.",
    },

    // ── Spell Familiarity ──
    {
      name: 'Spell Familiarity',
      level: 1,
      description:
        'The knight disciple is able to use spell completion and spell trigger items as if she possessed the paladin spellcasting ability, using her initiator level as her effective caster level.',
    },

    // ── Mark of Censure (replaces Smite Evil) ──
    {
      name: 'Mark of Censure',
      level: 1,
      description:
        "Once per day as a swift action, the knight disciple can mark any evil creature she can see for 24 hours or until it is slain, whichever comes first. All allies of the knight disciple (but not the knight disciple herself) gain damage reduction equal to her initiation modifier against the marked creature's attacks. At 11th level, this damage reduction increases to twice her initiation modifier. The knight disciple gains an additional daily use of this ability at 4th level and every three levels thereafter (7th, 10th, 13th, 16th, 19th).",
    },

    // ── Merciful Shield (replaces Mercy) ──
    {
      name: 'Merciful Shield',
      level: 3,
      description:
        "At 3rd level, the knight disciple can select one condition from the list below. When an ally under the effect of guardian's shield would gain the selected condition, that condition is negated and the duration of the guardian's shield is reduced by one round. The knight disciple selects an additional condition at 6th level and every three levels thereafter. At 3rd level, the knight disciple can choose from the following conditions: fatigued, shaken, sickened. At 6th level, the following conditions are added to the list: dazed, diseased (acts as remove disease at the knight disciple's initiator level), staggered, stunned. At 9th level, the following conditions are added to the list: cursed (acts as remove curse at the knight disciple's initiator level), exhausted (the knight disciple must already have selected fatigued), frightened (the knight disciple must already have selected shaken), nauseated (the knight disciple must already have selected sickened), poisoned (acts as neutralize poison at the knight disciple's initiator level). At 12th level, the following conditions are added to the list: blinded, deafened, paralyzed.",
    },

    // ── Empowered Healing (replaces Channel Positive Energy) ──
    {
      name: 'Empowered Healing',
      level: 4,
      description:
        'At 4th level, whenever the knight disciple initiates a maneuver that heals hit point damage, the maneuver heals an additional 50% points of damage (rounded down). This ability replaces channel positive energy.',
    },

    // ── Guardian's Aura (replaces Aura of Justice) ──
    {
      name: "Guardian's Aura",
      level: 11,
      description:
        "At 11th level, whenever the knight disciple initiates a counter, she may choose to have the counter affect an ally within 10 feet instead of herself, treating the ally as if they were the knight disciple for the purpose of the counter's effects. This ability replaces aura of justice.",
    },

    // ── Holy Disciple (replaces Holy Champion capstone) ──
    {
      name: 'Holy Disciple',
      level: 20,
      description:
        "At 20th level, the knight disciple gains damage reduction 10/evil. Whenever a creature marked by her mark of censure deals damage to one of the knight disciple's allies, that creature takes half the damage it dealt (same damage type) as divine retribution. Additionally, the temporary hit points granted by the knight disciple's guardian's shield increase by 50% (rounded down). This ability replaces holy champion.",
    },
  ],

  initiating: {
    type: 'Martial',
    initiatingAbility: 'CHA',
    ilProgression: 'full',
    disciplines: ['golden-lion', 'iron-tortoise', 'silver-crane'],
    progressionTableKey: 'knight-disciple',
    recoveryMechanics: {
      primary: {
        type: 'custom',
        description:
          'As a full-round action, recover a number of expended maneuvers equal to initiation modifier (minimum 2) and grant all allies within 30 feet a sacred bonus to AC and saving throws equal to initiation modifier (minimum 1) for one round.',
      },
      secondary: {
        type: 'custom',
        description: 'As a standard action, recover a single expended maneuver.',
      },
    },
  },

  source: 'Path of War',
};
