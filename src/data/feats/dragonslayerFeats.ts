import type { FeatDefinition } from '@/types/feats';
import { BonusType } from '@/types/base';

export const DRAGONSLAYER_FEATS: FeatDefinition[] = [
  {
    id: 'courage_in_numbers',
    name: 'Courage in Numbers',
    description:
      'You gain a +2 morale bonus on saves against fear for every ally within 10 feet who possesses this feat (maximum +8).',
    shortDescription: '+2 morale bonus on fear saves per ally with this feat within 10 ft (max +8).',
    source: "Pathfinder Player Companion: Dragonslayer's Handbook",
    types: ['teamwork'],
    prerequisites: [{ type: 'feat', featId: 'iron_will' }],
    effects: [
      {
        type: 'bonus',
        target: 'fear',
        value: 2,
        bonusType: BonusType.MORALE,
        source: 'Courage in Numbers',
      },
    ],
    activationMode: 'conditional',
    tags: ['fear', 'teamwork', 'morale', 'dragon'],
  },
  {
    id: 'covering_shield',
    name: 'Covering Shield',
    description:
      "While using a shield of the type to which your Shield Focus feat applies, you gain a bonus on Reflex saves against area of effect attacks. The bonus equals your shield's base bonus to armor class plus any bonuses granted by feats or class abilities. Enhancement bonuses on the shield do not apply to this bonus.",
    shortDescription: 'Gain Reflex save bonus vs. area attacks equal to shield base AC bonus.',
    source: "Pathfinder Player Companion: Dragonslayer's Handbook",
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'DEX', minimum: 13 },
      { type: 'feat', featId: 'shield_focus' },
      { type: 'proficiency', proficiency: 'shield' },
    ],
    effects: [
      {
        type: 'bonus',
        target: 'reflex',
        value: 0,
        bonusType: BonusType.SHIELD,
        source: 'Covering Shield',
      },
    ],
    activationMode: 'conditional',
    tags: ['shield', 'reflex', 'area of effect', 'breath weapon', 'dragon'],
  },
  {
    id: 'death_from_below',
    name: 'Death from Below',
    description:
      'You have been trained to fight flying creatures. You gain a +2 circumstance bonus on attack rolls against flying opponents when you have set a weapon against a charge, or when you are allowed an attack of opportunity against the flying opponent.',
    shortDescription: '+2 attack vs. flying foes on set-against-charge or AoOs.',
    source: "Pathfinder Player Companion: Dragonslayer's Handbook",
    types: ['combat'],
    prerequisites: [{ type: 'bab', minimum: 1 }],
    effects: [
      {
        type: 'bonus',
        target: 'attack',
        value: 2,
        bonusType: BonusType.CIRCUMSTANCE,
        source: 'Death from Below',
      },
    ],
    activationMode: 'conditional',
    tags: ['flying', 'dragon', 'charge', 'attack of opportunity'],
  },
  {
    id: 'dragoncrafting',
    name: 'Dragoncrafting',
    description:
      "You can create a variety of dragoncraft items from materials gathered from the bodies of true dragons. You must harvest appropriate materials within 48 hours of a dragon's death by succeeding on a Heal check (DC 10 + dragon's CR). Crafting time is 1 hour per 100 gp of items produced. Craftable items include dragonfire (2d6 fire damage reagent), draconic perfume (+2 on social checks), dragon's blood (heals 1d4 and grants save bonuses), dragon's gut (2d4 acid splash weapon), and dragonskin grip (+2 CMD vs. disarm).",
    shortDescription: 'Harvest dragon materials to craft alchemical dragoncraft items.',
    source: "Pathfinder Player Companion: Dragonslayer's Handbook",
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'craft', ranks: 5 },
      { type: 'skill', skillId: 'knowledge_arcana', ranks: 3 },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special',
        source: 'Dragoncrafting',
      },
    ],
    activationMode: 'passive',
    tags: ['crafting', 'dragon', 'alchemy', 'harvest'],
  },
  {
    id: 'dragonheart',
    name: 'Dragonheart',
    description:
      'You gain a +1 bonus on all saving throws against auras, breath weapons, spell-like abilities, spells, supernatural abilities, and other special attacks of creatures with the dragon type.',
    shortDescription: '+1 on all saves vs. dragon special attacks.',
    source: "Pathfinder Player Companion: Dragonslayer's Handbook",
    types: ['general'],
    prerequisites: [{ type: 'skill', skillId: 'knowledge_arcana', ranks: 1 }],
    effects: [
      {
        type: 'bonus',
        target: 'all',
        value: 1,
        bonusType: BonusType.UNTYPED,
        source: 'Dragonheart',
      },
    ],
    activationMode: 'conditional',
    tags: ['dragon', 'saving throw', 'resistance'],
  },
  {
    id: 'dragonslayer',
    name: 'Dragonslayer',
    description:
      "When you confirm a critical hit against an opponent possessing a breath weapon ability, you may forgo the additional critical damage. Instead, the target is prevented from using its breath weapon for a number of rounds equal to twice the weapon's critical multiplier, beyond any standard recharge time the ability specifies.",
    shortDescription: 'On a crit, forgo extra damage to suppress breath weapon for rounds.',
    source: "Pathfinder Player Companion: Dragonslayer's Handbook",
    types: ['combat'],
    prerequisites: [
      { type: 'skill', skillId: 'knowledge_arcana', ranks: 4 },
      { type: 'bab', minimum: 4 },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special',
        source: 'Dragonslayer',
      },
    ],
    activationMode: 'conditional',
    tags: ['critical hit', 'breath weapon', 'dragon', 'suppress'],
  },
  {
    id: 'dragon_touched',
    name: 'Dragon-Touched',
    description:
      'Select one dragon kind (blue, green, silver, etc.). You gain a +2 bonus on Reflex saves against the breath weapons of dragons of the chosen kind, a +1 bonus on attack rolls against that dragon kind, and a +1 dodge bonus to AC against that dragon kind. Goal: Defeat a dragon of the chosen kind with CR equal to or greater than your character level. Completion Benefit: You may select a new dragon kind, and you gain a +2 bonus on initiative checks when facing a dragon of your selected kind.',
    shortDescription: 'Gain attack, AC, and Reflex bonuses vs. a chosen dragon type; story feat with goals.',
    source: "Pathfinder Player Companion: Dragonslayer's Handbook",
    types: ['story'],
    prerequisites: [
      {
        type: 'special',
        description:
          'Must have been knocked unconscious in an encounter with a challenging draconic foe, or have a regional background tied to a specific dragon',
      },
    ],
    effects: [
      {
        type: 'bonus',
        target: 'attack',
        value: 1,
        bonusType: BonusType.UNTYPED,
        source: 'Dragon-Touched',
      },
      {
        type: 'bonus',
        target: 'ac',
        value: 1,
        bonusType: BonusType.DODGE,
        source: 'Dragon-Touched',
      },
      {
        type: 'bonus',
        target: 'reflex',
        value: 2,
        bonusType: BonusType.UNTYPED,
        source: 'Dragon-Touched',
      },
    ],
    activationMode: 'conditional',
    tags: ['dragon', 'story', 'breath weapon', 'chosen enemy'],
  },
  {
    id: 'flaying_critical',
    name: 'Flaying Critical',
    description:
      "Whenever you score a critical hit, your opponent takes a -1 penalty to its natural armor bonus for the duration of the encounter. This penalty is cumulative, but cannot reduce an opponent's natural armor bonus below 0.",
    shortDescription: 'Critical hits reduce foe natural armor by 1 (cumulative).',
    source: "Pathfinder Player Companion: Dragonslayer's Handbook",
    types: ['combat', 'critical'],
    prerequisites: [
      { type: 'feat', featId: 'critical_focus' },
      { type: 'bab', minimum: 11 },
    ],
    effects: [
      {
        type: 'special',
        value: -1,
        bonusType: BonusType.UNTYPED,
        target: 'natural_armor',
        source: 'Flaying Critical',
      },
    ],
    activationMode: 'conditional',
    tags: ['critical hit', 'natural armor', 'dragon', 'debuff'],
  },
  {
    id: 'overwhelm_teamwork',
    name: 'Overwhelm',
    description:
      'You are considered to be flanking an opponent if at least one ally who also has this feat is threatening that opponent and the opponent is at least two size categories larger than the larger of you or your ally, regardless of your actual positioning.',
    shortDescription: 'Flank large foes with an ally who has this feat if the foe is 2+ sizes larger.',
    source: "Pathfinder Player Companion: Dragonslayer's Handbook",
    types: ['combat', 'teamwork'],
    prerequisites: [],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special',
        source: 'Overwhelm',
      },
    ],
    activationMode: 'conditional',
    tags: ['flanking', 'teamwork', 'size', 'dragon'],
  },
  {
    id: 'porcupine_defense',
    name: 'Porcupine Defense',
    description:
      'Whenever an opponent of at least one size category larger than yourself attempts a combat maneuver attack against you, you gain a +2 bonus on any allowed attacks of opportunity. If the opponent can execute such maneuvers without triggering attacks of opportunity, you instead receive a +2 bonus to your CMD against those specific maneuvers.',
    shortDescription: '+2 on AoOs or CMD when larger foes attempt combat maneuvers on you.',
    source: "Pathfinder Player Companion: Dragonslayer's Handbook",
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'combat_expertise' },
      { type: 'feat', featId: 'combat_reflexes' },
      { type: 'bab', minimum: 6 },
    ],
    effects: [
      {
        type: 'bonus',
        target: 'attack_of_opportunity',
        value: 2,
        bonusType: BonusType.UNTYPED,
        source: 'Porcupine Defense',
      },
    ],
    activationMode: 'conditional',
    tags: ['combat maneuver', 'size', 'dragon', 'defense'],
  },
  {
    id: 'reach_defense',
    name: 'Reach Defense',
    description:
      'You gain a +2 dodge bonus to armor class against attacks of opportunity from opponents that are not adjacent to you. Special: This feat counts as Dodge for the purpose of meeting prerequisites for Mobility and Spring Attack.',
    shortDescription: '+2 dodge AC vs. AoOs from non-adjacent foes; counts as Dodge for prereqs.',
    source: "Pathfinder Player Companion: Dragonslayer's Handbook",
    types: ['combat'],
    prerequisites: [{ type: 'ability_score', ability: 'DEX', minimum: 15 }],
    effects: [
      {
        type: 'bonus',
        target: 'ac',
        value: 2,
        bonusType: BonusType.DODGE,
        source: 'Reach Defense',
      },
    ],
    activationMode: 'conditional',
    tags: ['dodge', 'reach', 'attack of opportunity', 'dragon'],
  },
  {
    id: 'snoutgrip_dh',
    name: 'Snoutgrip',
    description:
      "When a larger opponent misses you with a bite attack, you can attempt a grapple check (at -5 penalty) as an immediate action to seize your opponent's mouth. Upon success, you establish a grapple while preventing the target from using its bite attack, breath weapon, or spells requiring verbal components until it escapes the grapple. You may make this grapple attempt even if the target is out of your reach.",
    shortDescription: 'Grapple a larger foe\'s snout on a missed bite to suppress breath weapon and bite.',
    source: "Pathfinder Player Companion: Dragonslayer's Handbook",
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'combat_expertise' },
      { type: 'feat', featId: 'combat_reflexes' },
      { type: 'feat', featId: 'improved_grapple' },
      { type: 'feat', featId: 'improved_unarmed_strike' },
      {
        type: 'special',
        description: 'Base attack bonus +12 or monk level 10th',
      },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special',
        source: 'Snoutgrip',
      },
    ],
    activationMode: 'conditional',
    tags: ['grapple', 'bite', 'breath weapon', 'dragon', 'monk'],
  },
  {
    id: 'tandem_evasion_dh',
    name: 'Tandem Evasion',
    description:
      "When standing adjacent to an ally who also possesses this feat, you gain evasion against a dragon's breath weapon and tail sweep special attacks. If you already possess evasion, you instead gain improved evasion against those attacks.",
    shortDescription: 'Gain evasion vs. dragon breath/tail sweep when adjacent to an ally with this feat.',
    source: "Pathfinder Player Companion: Dragonslayer's Handbook",
    types: ['combat', 'teamwork'],
    prerequisites: [
      { type: 'ability_score', ability: 'DEX', minimum: 13 },
      { type: 'feat', featId: 'dodge' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special',
        source: 'Tandem Evasion',
      },
    ],
    activationMode: 'conditional',
    tags: ['evasion', 'teamwork', 'breath weapon', 'dragon', 'reflex'],
  },
  {
    id: 'wingclipper',
    name: 'Wingclipper',
    description:
      'Whenever you confirm a critical hit against an opponent that uses wings to fly, you can forgo the extra critical damage to instead prevent it from flying for a number of rounds equal to twice the critical multiplier of your attack. If the target was airborne when struck, it must succeed at a DC 20 Fly check or suffer falling damage.',
    shortDescription: 'On a crit vs. winged flier, forgo extra damage to ground it for rounds.',
    source: "Pathfinder Player Companion: Dragonslayer's Handbook",
    types: ['combat'],
    prerequisites: [{ type: 'bab', minimum: 9 }],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special',
        source: 'Wingclipper',
      },
    ],
    activationMode: 'conditional',
    tags: ['critical hit', 'flying', 'wing', 'dragon', 'grounding'],
  },
];
