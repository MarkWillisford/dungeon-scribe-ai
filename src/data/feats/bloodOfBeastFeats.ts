import { BonusType } from '@/types/base';
import type { FeatDefinition } from '@/types/feats';

export const BLOOD_OF_BEAST_FEATS: FeatDefinition[] = [
  {
    id: 'cooperative_swarmer',
    name: 'Cooperative Swarmer',
    description:
      "You can share a square with an ally of your size or larger regardless of whether that ally possesses the swarming racial trait. Neither you nor your ally counts as flanking enemies while sharing a space. You gain a +2 shield bonus to AC while sharing a square with an ally that is larger than you. When you use the aid another action to boost an ally's attack roll or AC, increase the bonus provided by 1.",
    shortDescription:
      'Share space with any ally your size or larger; +2 shield AC with larger ally; aid another gives +1 extra bonus.',
    source: 'Blood of the Beast',
    types: ['combat'],
    prerequisites: [{ type: 'special', description: 'Swarming racial trait' }],
    effects: [
      {
        type: 'bonus',
        target: 'ac',
        value: 2,
        bonusType: BonusType.SHIELD,
        source: 'Cooperative Swarmer',
        condition: {
          type: 'custom',
          description: 'while sharing a square with an ally larger than you',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['swarming', 'teamwork', 'ratfolk', 'aid another', 'defense'],
  },
  {
    id: 'cunning_killer',
    name: 'Cunning Killer',
    description:
      "Upon successfully identifying a creature using a Knowledge check, if that creature's Intelligence score is 2 or lower and your Intelligence exceeds the target's by 5 or more, you gain a +1 insight bonus on attack and damage rolls against that creature for a number of rounds equal to your Intelligence bonus. At BAB +4, and every 4 points of BAB thereafter, the maximum Intelligence score of creatures you can affect with this feat increases by 2, to a maximum of Intelligence 12. At BAB +6, and every 6 points thereafter, the insight bonus increases by 1, to a maximum of +4.",
    shortDescription:
      'Gain insight bonus on attack and damage after identifying a low-Intelligence creature with a Knowledge check.',
    source: 'Blood of the Beast',
    types: ['general'],
    prerequisites: [
      { type: 'bab', minimum: 2 },
      { type: 'skill', skillId: 'knowledge_arcana', ranks: 3 },
    ],
    effects: [
      {
        type: 'bonus',
        target: 'attack.melee',
        value: 1,
        bonusType: BonusType.INSIGHT,
        source: 'Cunning Killer',
        condition: {
          type: 'custom',
          description:
            'against a creature identified via Knowledge check whose Intelligence is 2 or lower and at least 5 lower than yours',
          params: {},
        },
      },
      {
        type: 'bonus',
        target: 'damage.melee',
        value: 1,
        bonusType: BonusType.INSIGHT,
        source: 'Cunning Killer',
        condition: {
          type: 'custom',
          description:
            'against a creature identified via Knowledge check whose Intelligence is 2 or lower and at least 5 lower than yours',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['knowledge', 'insight', 'monster identification', 'attack'],
  },
  {
    id: 'empty_threats',
    name: 'Empty Threats',
    description:
      'You can substitute Bluff for Intimidate when demoralizing opponents in combat. You may also use Bluff instead of Intimidate for the Dazzling Display feat and any feats listing Dazzling Display as a prerequisite. Using Bluff to demoralize prevents you from using it to feint until your next turn begins, and vice versa.',
    shortDescription:
      'Substitute Bluff for Intimidate when demoralizing; cannot feint and demoralize in the same turn.',
    source: 'Blood of the Beast',
    types: ['general'],
    prerequisites: [{ type: 'skill', skillId: 'bluff', ranks: 5 }],
    effects: [],
    activationMode: 'passive',
    tags: ['bluff', 'intimidate', 'demoralize', 'dazzling display', 'tengu'],
  },
  {
    id: 'entwining_stare',
    name: 'Entwining Stare',
    description:
      "When you trigger your painful stare to add damage to an attack with the grab special attack, the target takes a -4 penalty to its CMD against the grab's grapple combat maneuver attempt.",
    shortDescription:
      'Triggering painful stare on a grab attack imposes -4 CMD penalty on the target against that grapple.',
    source: 'Blood of the Beast',
    types: ['general'],
    prerequisites: [
      { type: 'level', minimum: 7 },
      { type: 'class_feature', featureName: 'painful stare' },
    ],
    effects: [
      {
        type: 'bonus',
        target: 'enemy.cmd',
        value: -4,
        bonusType: BonusType.UNTYPED,
        source: 'Entwining Stare',
        condition: {
          type: 'custom',
          description: 'when painful stare is triggered on an attack with the grab special attack',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['mesmerist', 'painful stare', 'grapple', 'grab', 'cmd'],
  },
  {
    id: 'extended_combat_meditation',
    name: 'Extended Combat Meditation',
    description:
      'Add your Wisdom bonus (if any) to the number of rounds that you gain the benefits of your meditation feats when using Combat Meditation.',
    shortDescription: 'Add Wisdom bonus to the duration of Combat Meditation benefits.',
    source: 'Blood of the Beast',
    types: ['combat', 'meditation'],
    prerequisites: [
      { type: 'ability_score', ability: 'WIS', minimum: 13 },
      { type: 'feat', featId: 'combat_meditation' },
      { type: 'feat', featId: 'meditation_master' },
      { type: 'level', minimum: 9 },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['meditation', 'combat meditation', 'duration', 'wisdom'],
  },
  {
    id: 'graceful_athlete',
    name: 'Graceful Athlete',
    description:
      'You may substitute your Dexterity modifier for your Strength modifier when making Climb and Swim checks. If you have a penalty to Strength, both the penalty and your Dexterity modifier apply. This feat provides no benefit to creatures that already use their Dexterity modifier for these skills, such as Tiny or smaller creatures.',
    shortDescription: 'Use Dexterity modifier instead of Strength for Climb and Swim checks.',
    source: 'Blood of the Beast',
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'acrobatics', ranks: 1 },
      { type: 'skill', skillId: 'climb', ranks: 1 },
      { type: 'skill', skillId: 'swim', ranks: 1 },
      { type: 'special', description: 'Racial bonus to Dexterity' },
    ],
    effects: [
      {
        type: 'ability_substitution',
        target: 'skill.climb',
        value: 0,
        bonusType: BonusType.UNTYPED,
        source: 'Graceful Athlete',
        condition: {
          type: 'custom',
          description: 'always; use Dexterity modifier instead of Strength for Climb',
          params: {},
        },
      },
      {
        type: 'ability_substitution',
        target: 'skill.swim',
        value: 0,
        bonusType: BonusType.UNTYPED,
        source: 'Graceful Athlete',
        condition: {
          type: 'custom',
          description: 'always; use Dexterity modifier instead of Strength for Swim',
          params: {},
        },
      },
    ],
    activationMode: 'passive',
    tags: ['dexterity', 'climb', 'swim', 'skill', 'racial'],
  },
  {
    id: 'greater_meditation_master',
    name: 'Greater Meditation Master',
    description:
      'When you meditate, you gain a +2 insight bonus instead of the normal +1 insight bonus. You can split this bonus between any two d20 rolls (+1 each) or apply the full +2 to a single d20 roll.',
    shortDescription:
      'Meditation grants +2 insight bonus (instead of +1) to split or apply to d20 rolls.',
    source: 'Blood of the Beast',
    types: ['general', 'meditation'],
    prerequisites: [
      { type: 'ability_score', ability: 'WIS', minimum: 15 },
      { type: 'feat', featId: 'combat_meditation' },
      { type: 'feat', featId: 'meditation_master' },
      { type: 'level', minimum: 11 },
    ],
    effects: [
      {
        type: 'bonus',
        target: 'special.meditation_bonus',
        value: 2,
        bonusType: BonusType.INSIGHT,
        source: 'Greater Meditation Master',
        condition: {
          type: 'custom',
          description:
            'for 24 hours after meditating; replaces the normal +1 meditation insight bonus',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['meditation', 'insight', 'wisdom', 'd20'],
  },
  {
    id: 'human_guise',
    name: 'Human Guise',
    description:
      'You count as both human and your original race for the purposes of taking character options such as archetypes, feats, spells, traits, and prestige classes. When you appear in human form via your change shape ability, you also count as human for all effects that target humans (such as a human-bane weapon). If your true form appears human, you count as human in your true form instead.',
    shortDescription:
      'Count as human and your own race for character options; qualify as human for effects when in human form.',
    source: 'Blood of the Beast',
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'Change shape ability' },
      { type: 'special', description: 'Shapechanger subtype' },
      {
        type: 'special',
        description: 'Ability to change shape into a human or true form that appears human',
      },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['shapechanger', 'kitsune', 'skinwalker', 'human', 'change shape', 'dual race'],
  },
  {
    id: 'knotted_nets',
    name: 'Knotted Nets',
    description:
      "When you and one ally of the same size both have this feat and both ready net attacks against the same target, you function as if one size category larger for the purpose of entangling that creature. The entangled creature escapes using the lower of both nets' hit points, hardness, and break DCs; only one of you can attempt Strength checks to control the entangled creature's movement, but your ally grants a +1 bonus on those checks. With 3 additional allies who have this feat (4 total), you function as two size categories larger. With 7 additional allies (8 total), you function as three size categories larger.",
    shortDescription:
      'Coordinate net attacks with allies to entangle creatures larger than normal; scale with additional allies.',
    source: 'Blood of the Beast',
    types: ['combat', 'teamwork'],
    prerequisites: [
      { type: 'feat', featId: 'exotic_weapon_proficiency_net' },
      { type: 'bab', minimum: 1 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['net', 'teamwork', 'entangle', 'exotic weapon', 'grippli', 'kobold'],
  },
  {
    id: 'lovable_scoundrel',
    name: 'Lovable Scoundrel',
    description:
      'When you fail a Bluff check to deceive, an Intimidate check to force cooperation, or a Sleight of Hand check to steal, you may immediately attempt a Diplomacy check as a free action against the same DC. If you succeed, your target interprets your actions as jest or awkward tengu tradition rather than hostile intent, preventing immediate attitude deterioration. This ability can only be used once per day per target.',
    shortDescription:
      'Once per day per target, attempt a Diplomacy check to recover from a failed Bluff, Intimidate, or Sleight of Hand check.',
    source: 'Blood of the Beast',
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'bluff', ranks: 1 },
      { type: 'skill', skillId: 'diplomacy', ranks: 1 },
      { type: 'special', description: 'Tengu' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['tengu', 'bluff', 'diplomacy', 'social', 'recovery'],
  },
  {
    id: 'lucky',
    name: 'Lucky',
    description:
      'Select one of the following feats that you possess: Black Cat, Lucky Halfling, or any feat that lists one of those as a prerequisite and that is usable a limited number of times per day. Add two to the number of times per day you can use the chosen feat. You can take this feat multiple times; each time, it applies to the same or a different eligible feat. The maximum additional daily uses you can gain for any single feat is six.',
    shortDescription:
      'Add 2 daily uses to a chosen luck-based feat (Black Cat, Lucky Halfling, or related). Stackable, max +6.',
    source: 'Blood of the Beast',
    types: ['general'],
    prerequisites: [
      { type: 'feat', featId: 'black_cat' },
      { type: 'special', description: 'Must possess a racial trait with "luck" in its name' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['luck', 'catfolk', 'halfling', 'daily uses', 'stackable'],
  },
  {
    id: 'mindful_meditation',
    name: 'Mindful Meditation',
    description:
      'For 24 hours after you meditate, you gain a +1 bonus on Will saving throws against charm, compulsion, emotion, and fear effects. The DC to feint you and the DC to demoralize you each increase by 5. These bonuses increase by 1 for every 5 Hit Dice you possess, to a maximum of +4 at 20 Hit Dice.',
    shortDescription:
      'After meditating, gain +1 (scaling to +4) on Will saves vs mental effects; +5 to feint/demoralize DC against you.',
    source: 'Blood of the Beast',
    types: ['general', 'meditation'],
    prerequisites: [
      { type: 'ability_score', ability: 'WIS', minimum: 11 },
      { type: 'feat', featId: 'meditation_master' },
    ],
    effects: [
      {
        type: 'bonus',
        target: 'saving_throw.will',
        value: 1,
        bonusType: BonusType.UNTYPED,
        source: 'Mindful Meditation',
        condition: {
          type: 'custom',
          description:
            'for 24 hours after meditating; against charm, compulsion, emotion, and fear effects; scales +1 per 5 HD to max +4',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['meditation', 'will save', 'charm', 'fear', 'compulsion', 'wisdom'],
  },
  {
    id: 'mindfulness_mastery',
    name: 'Mindfulness Mastery',
    description:
      'For 24 hours after you meditate, whenever you fail a saving throw against a charm, compulsion, emotion, or fear effect, you can attempt a new saving throw against the same DC 1 round later. You get only this one extra chance to succeed at your saving throw.',
    shortDescription:
      'After meditating, get one extra saving throw attempt 1 round later when failing against charm, compulsion, emotion, or fear.',
    source: 'Blood of the Beast',
    types: ['general', 'meditation'],
    prerequisites: [
      { type: 'ability_score', ability: 'WIS', minimum: 19 },
      { type: 'feat', featId: 'meditation_master' },
      { type: 'feat', featId: 'mindful_meditation' },
      { type: 'level', minimum: 13 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['meditation', 'will save', 'charm', 'fear', 'compulsion', 'second chance', 'wisdom'],
  },
  {
    id: 'mobile_acrobat',
    name: 'Mobile Acrobat',
    description:
      'When making an Acrobatics check that would reduce your speed, treat your base speed as 10 feet faster before applying any speed reductions from that Acrobatics check.',
    shortDescription:
      'Treat base speed as 10 ft faster when making Acrobatics checks that reduce movement speed.',
    source: 'Blood of the Beast',
    types: ['general'],
    prerequisites: [{ type: 'special', description: 'Racial bonus to Dexterity' }],
    effects: [
      {
        type: 'bonus',
        target: 'speed.base',
        value: 10,
        bonusType: BonusType.UNTYPED,
        source: 'Mobile Acrobat',
        condition: {
          type: 'custom',
          description:
            'when making an Acrobatics check that would reduce your speed (for speed reduction calculation only)',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['acrobatics', 'movement', 'speed', 'dexterity', 'racial'],
  },
  {
    id: 'rat_stack',
    name: 'Rat Stack',
    description:
      'You can share a square with up to two other creatures that also have this feat, in addition to the normal benefits of your swarming racial trait. If you and all creatures sharing your square also have the Tunnel Rat feat, up to four creatures can share your square.',
    shortDescription:
      'Share a square with up to 2 other Rat Stack feat-holders; up to 4 if all also have Tunnel Rat.',
    source: 'Blood of the Beast',
    types: ['combat', 'teamwork'],
    prerequisites: [
      { type: 'ability_score', ability: 'DEX', minimum: 13 },
      { type: 'special', description: 'Swarming racial trait' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['swarming', 'teamwork', 'ratfolk', 'space sharing', 'tunnel rat'],
  },
  {
    id: 'rending_swarm',
    name: 'Rending Swarm',
    description:
      'You gain a +1 bonus on all melee damage rolls for each allied creature you share a square with that also has this feat. When two or more allies who share your square and have this feat also hit the same adjacent creature in a round, you tear the target in different directions at the end of the round, dealing additional damage equal to 1d6 plus the highest Strength modifier among all qualifying allies in the square who struck the target that round.',
    shortDescription:
      'Gain +1 melee damage per Rending Swarm ally in your square; coordinated hits deal extra 1d6+Str rending damage.',
    source: 'Blood of the Beast',
    types: ['combat', 'teamwork'],
    prerequisites: [
      { type: 'ability_score', ability: 'DEX', minimum: 15 },
      { type: 'feat', featId: 'rat_stack' },
      { type: 'special', description: 'Swarming racial trait' },
    ],
    effects: [
      {
        type: 'bonus',
        target: 'damage.melee',
        value: 1,
        bonusType: BonusType.UNTYPED,
        source: 'Rending Swarm',
        condition: {
          type: 'custom',
          description: 'per allied creature sharing your square that also has this feat',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['swarming', 'teamwork', 'ratfolk', 'melee damage', 'rend'],
  },
  {
    id: 'sensory_control',
    name: 'Sensory Control',
    description:
      "For 24 hours after you meditate, you gain low-light vision and the scent universal monster ability. If you already possess low-light vision, you can see three times as far in dim light. If you already have the scent ability, your scent range doubles (from the normal 60 feet to 120 feet downwind and 30 feet upwind). Monks with this feat may select Improved Blind-Fight as a bonus feat beginning at 6th level and Greater Blind-Fight as a bonus feat beginning at 10th level, without needing to meet those feats' normal prerequisites.",
    shortDescription:
      'After meditating, gain low-light vision and scent (enhanced if already possessed) for 24 hours.',
    source: 'Blood of the Beast',
    types: ['general', 'meditation'],
    prerequisites: [
      { type: 'ability_score', ability: 'WIS', minimum: 15 },
      { type: 'feat', featId: 'blind_fight' },
      { type: 'feat', featId: 'meditation_master' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['meditation', 'low-light vision', 'scent', 'perception', 'monk', 'blind fight'],
  },
  {
    id: 'shapechanging_savage',
    name: 'Shapechanging Savage',
    description:
      'When you use your change shape ability to assume a new form or return to your true form, you can attempt a Bluff check as a swift action to feint one opponent within 30 feet who witnessed the transformation. You take a -4 penalty on Bluff checks to feint opponents aware that you are a shapechanger. The normal penalties for feinting creatures of different types or with Intelligence 1-2 do not apply to this feint attempt. Characters with the wild shape class feature count as having the change shape ability and shapechanger subtype for prerequisite purposes and can use this feat whenever they assume a new form or return to their true form via wild shape.',
    shortDescription:
      "When changing shape, attempt a swift-action feint against an observer within 30 ft; -4 vs those who know you're a shapechanger.",
    source: 'Blood of the Beast',
    types: ['general'],
    prerequisites: [
      { type: 'feat', featId: 'improved_feint' },
      { type: 'special', description: 'Change shape ability' },
      { type: 'special', description: 'Shapechanger subtype' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['shapechanger', 'feint', 'bluff', 'swift action', 'druid', 'kitsune'],
  },
  {
    id: 'squirming_pile',
    name: 'Squirming Pile',
    description:
      'Whenever you share a square with an ally who also has this feat, you gain a 25% chance to negate the extra damage from a successful critical hit or sneak attack, treating the damage as if the attack were not a critical hit or sneak attack. This does not stack with similar protections such as the fortification armor special ability.',
    shortDescription:
      '25% chance to negate critical hit or sneak attack bonus damage when sharing a square with another Squirming Pile feat-holder.',
    source: 'Blood of the Beast',
    types: ['combat', 'teamwork'],
    prerequisites: [
      { type: 'skill', skillId: 'acrobatics', ranks: 5 },
      { type: 'special', description: 'Swarming racial trait' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['swarming', 'teamwork', 'ratfolk', 'critical hit', 'sneak attack', 'fortification'],
  },
  {
    id: 'startling_shapechanger',
    name: 'Startling Shapechanger',
    description:
      'When you use your change shape ability to assume a new form or return to your true form, you may immediately use Dazzling Display as a free action. Opponents who are aware that you are a shapechanger receive a +5 bonus on their saves against this Intimidate check. You can use Dazzling Display in this manner without having a weapon in hand. Characters with the wild shape class feature count as having the change shape ability and shapechanger subtype for prerequisite purposes.',
    shortDescription:
      "Use Dazzling Display as a free action when changing shape; no weapon required; +5 enemy bonus if they know you're a shapechanger.",
    source: 'Blood of the Beast',
    types: ['general'],
    prerequisites: [
      { type: 'feat', featId: 'dazzling_display' },
      { type: 'special', description: 'Change shape ability' },
      { type: 'special', description: 'Shapechanger subtype' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['shapechanger', 'dazzling display', 'intimidate', 'free action', 'druid', 'kitsune'],
  },
  {
    id: 'venomous_stare',
    name: 'Venomous Stare',
    description:
      'When you trigger your painful stare, the target is envenomed with a poison (Fortitude DC 10 + 1/2 mesmerist level + Charisma modifier; frequency 1/round for 6 rounds; effect 1d3 Dexterity damage; cure 2 consecutive saves). Regardless of whether the target succeeds on the saving throw, you cannot use this ability against the same target again for 24 hours.',
    shortDescription:
      'Triggering painful stare also applies a Dexterity-damaging poison; usable once per 24 hours per target.',
    source: 'Blood of the Beast',
    types: ['general'],
    prerequisites: [
      { type: 'level', minimum: 11 },
      { type: 'class_feature', featureName: 'painful stare' },
    ],
    effects: [
      {
        type: 'special',
        target: 'special.enemy',
        value: 0,
        bonusType: BonusType.UNTYPED,
        source: 'Venomous Stare',
        condition: {
          type: 'custom',
          description:
            'when painful stare is triggered; applies injury poison (Fort DC 10 + 1/2 level + Cha; 1d3 Dex/round for 6 rounds; cure 2 saves); once per 24 hours per target',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['mesmerist', 'painful stare', 'poison', 'dexterity damage', 'charisma'],
  },
];

// CHECKPOINT: last_written=venomous_stare, written=21/21, status=complete
