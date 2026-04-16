import type { FeatDefinition } from '@/types/feats';
import { BonusType } from '@/types/base';

export const GIANT_HUNTERS_HANDBOOK_FEATS: FeatDefinition[] = [
  {
    id: 'arcing_lob',
    name: 'Arcing Lob',
    description:
      'When you hit a target that is Large or larger with a splash weapon, you can choose to deal splash damage to all creatures within 5 feet of the target, splash damage to no creatures, or splash damage as normal. Normally, hitting a Large or larger creature with a splash weapon forces you to choose one square of the target, with splash damage affecting creatures within 5 feet of that specific square.',
    shortDescription:
      'Control splash damage placement when hitting Large or larger targets with splash weapons.',
    source: "Pathfinder Player Companion: Giant Hunter's Handbook",
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'DEX', minimum: 15 },
      { type: 'feat', featId: 'point_blank_shot' },
      { type: 'feat', featId: 'precise_shot' },
      { type: 'feat', featId: 'throw_anything' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['splash', 'thrown', 'giant', 'ranged'],
  },
  {
    id: 'cry_challenge',
    name: 'Cry Challenge',
    description:
      'When you take a 5-foot step, you may choose to provoke attacks of opportunity from all opponents currently threatening you after taking the step. You gain a +4 dodge bonus to AC against attacks of opportunity provoked by this feat.',
    shortDescription:
      'Deliberately provoke attacks of opportunity after a 5-foot step, gaining +4 dodge AC against them.',
    source: "Pathfinder Player Companion: Giant Hunter's Handbook",
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [{ type: 'feat', featId: 'antagonize' }],
    effects: [
      {
        type: 'bonus',
        target: 'special.vs_provoked_aoo',
        value: 4,
        bonusType: BonusType.DODGE,
        source: 'Cry Challenge',
      },
    ],
    activationMode: 'conditional',
    tags: ['giant', 'defense', 'attack of opportunity', 'maneuver'],
  },
  {
    id: 'darting_retrieval',
    name: 'Darting Retrieval',
    description:
      'When an ally who also has this feat successfully disarms an opponent and the disarmed weapon lands within your melee reach, you can use an immediate action to either move the item to any other square within your reach or, if you have a free hand, pick it up. This movement does not provoke attacks of opportunity.',
    shortDescription:
      'Use an immediate action to grab or reposition a disarmed weapon when your ally disarms a foe.',
    source: "Pathfinder Player Companion: Giant Hunter's Handbook",
    verificationStatus: 'needs_review' as const,
    types: ['combat', 'teamwork'],
    prerequisites: [
      { type: 'ability_score', ability: 'INT', minimum: 13 },
      { type: 'feat', featId: 'combat_expertise' },
      { type: 'feat', featId: 'improved_disarm' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['teamwork', 'disarm', 'giant', 'combat maneuver'],
  },
  {
    id: 'giant_vendetta',
    name: 'Giant Vendetta',
    description:
      'Your life has been shaped by a significant encounter with giants. Select one giant type (hill, stone, frost, fire, cloud, or storm). You gain a +1 bonus on attack rolls against that giant type, a +1 bonus on Knowledge (local) checks about that giant type, and a +1 dodge bonus to AC against all giants. Goal: Defeat a challenging giant of your chosen type. Completion Benefit: You gain a +1 bonus on initiative checks against any giant (increasing to +2 against giants of your selected type). Each time you defeat a challenging giant, your type-specific bonuses expand to include that newly defeated giant type.',
    shortDescription:
      'Story feat granting bonuses against a chosen giant type, with expanding benefits as you defeat more giants.',
    source: "Pathfinder Player Companion: Giant Hunter's Handbook",
    verificationStatus: 'needs_review' as const,
    types: ['story'],
    prerequisites: [
      {
        type: 'special',
        description:
          'Must have been knocked unconscious by a challenging giant, or must have the Giant Foe or Giantslayer Scion regional or campaign trait',
      },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'attack.all',
        value: 1,
        source: 'Giant Vendetta (chosen giant type)',
      },
      {
        type: 'bonus',
        target: 'special.vs_giants',
        value: 1,
        bonusType: BonusType.DODGE,
        source: 'Giant Vendetta',
      },
    ],
    activationMode: 'passive',
    tags: ['story', 'giant', 'knowledge', 'initiative'],
  },
  {
    id: 'giant_bane_caster',
    name: 'Giant-Bane Caster',
    description:
      'Add 1/2 your favored enemy bonus against giants to the DC of all saving throws against spells you cast against creatures with the giant subtype, as well as to caster level checks made to overcome the spell resistance of creatures with the giant subtype.',
    shortDescription:
      'Add half your favored enemy (giants) bonus to spell save DCs and CL checks vs. giants.',
    source: "Pathfinder Player Companion: Giant Hunter's Handbook",
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'caster_level', minimum: 4 },
      { type: 'class_feature', featureName: 'favored enemy (giant)' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Giant-Bane Caster',
      },
    ],
    activationMode: 'passive',
    tags: ['giant', 'spellcasting', 'favored enemy', 'ranger', 'spell resistance'],
  },
  {
    id: 'giant_killer_stance',
    name: 'Giant-Killer Stance',
    description:
      'You can treat any reach weapon you wield as having the brace property against creatures that are Large or larger. If your readied attack hits, the creature takes a -2 penalty on melee attack rolls for 1 round.',
    shortDescription:
      'Treat your reach weapon as having brace against Large or larger foes; hits impose a -2 attack penalty.',
    source: "Pathfinder Player Companion: Giant Hunter's Handbook",
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [{ type: 'feat', featId: 'power_attack' }],
    effects: [
      {
        type: 'special',
        value: -2,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Giant-Killer Stance',
      },
    ],
    activationMode: 'conditional',
    tags: ['giant', 'reach', 'brace', 'readied action', 'polearm'],
  },
  {
    id: 'ground_grabber',
    name: 'Ground-Grabber',
    description:
      'You hunch down to more easily keep your feet when facing larger foes. You receive a +2 competence bonus to your Combat Maneuver Defense (CMD) when resisting awesome blow, bull rush, drag, reposition, or trip combat maneuvers attempted by creatures larger than you.',
    shortDescription:
      '+2 competence bonus to CMD against awesome blow, bull rush, drag, reposition, and trip from larger foes.',
    source: "Pathfinder Player Companion: Giant Hunter's Handbook",
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [{ type: 'ability_score', ability: 'CON', minimum: 13 }],
    effects: [
      {
        type: 'bonus',
        target: 'special.vs_maneuvers_from_larger_foes',
        value: 2,
        bonusType: BonusType.COMPETENCE,
        source: 'Ground-Grabber',
      },
    ],
    activationMode: 'passive',
    tags: ['giant', 'cmd', 'bull rush', 'trip', 'stability', 'defense'],
  },
  {
    id: 'mountain_splitting_strike',
    name: 'Mountain-Splitting Strike',
    description:
      'When charging an opponent that is at least one size category larger than you, your unarmed strikes deal damage as though you were one size category larger. Additionally, you receive a +2 bonus to the DC of any Stunning Fist effect you deliver with this charge attack.',
    shortDescription:
      'Charge attacks against larger foes deal damage as one size larger; +2 to Stunning Fist DC on such charges.',
    source: "Pathfinder Player Companion: Giant Hunter's Handbook",
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'WIS', minimum: 13 },
      { type: 'feat', featId: 'improved_unarmed_strike' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Mountain-Splitting Strike',
      },
      {
        type: 'special',
        value: 2,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Mountain-Splitting Strike',
      },
    ],
    activationMode: 'conditional',
    tags: ['giant', 'unarmed', 'charge', 'stunning fist', 'monk'],
  },
  {
    id: 'pernicious_stab',
    name: 'Pernicious Stab',
    description:
      "When you hit an opponent with a poisoned weapon and would deal sneak attack damage, you can choose to forgo some or all of your sneak attack damage dice to increase the save DC of the poison. For every 2d6 of sneak attack damage you forgo, the poison's save DC increases by 1. This DC bonus does not apply to creatures that are immune to precision damage.",
    shortDescription:
      "Sacrifice sneak attack dice (2d6 per +1) to increase a delivered poison's save DC.",
    source: "Pathfinder Player Companion: Giant Hunter's Handbook",
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [{ type: 'special', description: 'Sneak attack +2d6' }],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Pernicious Stab',
      },
    ],
    activationMode: 'conditional',
    tags: ['rogue', 'poison', 'sneak attack', 'precision', 'giant'],
  },
  {
    id: 'scuttle',
    name: 'Scuttle',
    description:
      'You can crawl at half your normal speed and can take a 5-foot step when crawling. When crawling, you do not provoke attacks of opportunity from opponents that are one or more size categories larger than you. Normally, crawling is limited to 5 feet as a move action and crawling provokes attacks of opportunity.',
    shortDescription:
      'Crawl at half speed, take 5-ft steps while crawling, and avoid AoOs from larger foes while crawling.',
    source: "Pathfinder Player Companion: Giant Hunter's Handbook",
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [],
    effects: [],
    activationMode: 'passive',
    tags: ['giant', 'movement', 'crawling', 'attack of opportunity', 'defense'],
  },
  {
    id: 'stone_dodger',
    name: 'Stone Dodger',
    description:
      "By working with an ally to gauge the trajectory of incoming attacks, you can more easily avoid taking damage. Whenever you are able to see and hear at least one ally with this feat, you receive a +4 dodge bonus to AC against attacks from hurled rocks or similar projectiles. If you are hit by such an attack while you have this bonus, you can attempt a Reflex save (DC equal to the attack roll's total bonus) to take only half damage.",
    shortDescription:
      '+4 dodge AC vs. hurled rocks and similar projectiles when an ally with this feat is nearby; Reflex save for half damage on a hit.',
    source: "Pathfinder Player Companion: Giant Hunter's Handbook",
    verificationStatus: 'needs_review' as const,
    types: ['teamwork'],
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        target: 'special.vs_hurled_rocks',
        value: 4,
        bonusType: BonusType.DODGE,
        source: 'Stone Dodger',
      },
    ],
    activationMode: 'passive',
    tags: ['teamwork', 'giant', 'ranged', 'defense', 'dodge', 'siege'],
  },
  {
    id: 'suppress_regeneration',
    name: 'Suppress Regeneration',
    description:
      "When you make a successful attack that causes a creature's regeneration ability to cease functioning for at least 1 round, any ally who also has this feat and is currently threatening the creature can make an attack of opportunity against it. This attack of opportunity deals no damage, but it extends the duration the creature's regeneration is suppressed by 1 additional round. Multiple allies with this feat can each trigger this effect, and the extensions stack.",
    shortDescription:
      "When you suppress a foe's regeneration, allies with this feat can attack to extend the suppression by 1 round each.",
    source: "Pathfinder Player Companion: Giant Hunter's Handbook",
    verificationStatus: 'needs_review' as const,
    types: ['combat', 'teamwork'],
    prerequisites: [],
    effects: [],
    activationMode: 'conditional',
    tags: ['teamwork', 'giant', 'regeneration', 'attack of opportunity', 'troll'],
  },
  {
    id: 'swing_about',
    name: 'Swing About',
    description:
      'If you have a free hand, as a move action you can grab a willing adjacent ally who also has this feat and place them in any other space adjacent to you. This movement does not provoke attacks of opportunity. You can do this only with allies of your size or smaller who are able to move freely.',
    shortDescription:
      'Use a move action to reposition a willing ally with this feat to any adjacent square.',
    source: "Pathfinder Player Companion: Giant Hunter's Handbook",
    verificationStatus: 'needs_review' as const,
    types: ['teamwork'],
    prerequisites: [{ type: 'feat', featId: 'escape_route' }],
    effects: [],
    activationMode: 'conditional',
    tags: ['teamwork', 'giant', 'movement', 'reposition', 'flanking'],
  },
  {
    id: 'yai_mimic_spell',
    name: 'Yai-Mimic Spell',
    description:
      "You can modify a ray spell so it originates from the center of your forehead instead of requiring a somatic component. When you cast a yai-mimic spell, you gain regeneration 1 for a number of rounds equal to the spell's original level. This regeneration cannot restore lost limbs or reattach severed body parts. Fire or acid damage suppresses this regeneration for 1 round. A yai-mimic spell uses up a spell slot 3 levels higher than the spell's actual level.",
    shortDescription:
      'Metamagic: cast ray spells from your forehead (no somatic component) and gain regeneration 1 for rounds equal to spell level; uses a slot 3 levels higher.',
    source: "Pathfinder Player Companion: Giant Hunter's Handbook",
    verificationStatus: 'needs_review' as const,
    types: ['metamagic'],
    prerequisites: [
      { type: 'ability_score', ability: 'INT', minimum: 15 },
      { type: 'feat', featId: 'still_spell' },
    ],
    effects: [
      {
        type: 'special',
        value: 1,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Yai-Mimic Spell',
      },
    ],
    activationMode: 'conditional',
    tags: ['metamagic', 'ray', 'regeneration', 'giant', 'oni', 'yai'],
  },
  // Harder They Fall (teamwork) — already exists in teamworkFeats.ts; same source, same mechanics. Skipped.
];

// CHECKPOINT: last_written=yai_mimic_spell, written=14/14, status=complete
