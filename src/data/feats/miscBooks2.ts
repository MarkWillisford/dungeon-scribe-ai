import { BonusType } from '@/types/base';
import type { FeatDefinition } from '@/types/feats';

export const MISC_FEATS_2: FeatDefinition[] = [
  // ── Monster Codex: Gnolls ──────────────────────────────────────────────────
  {
    id: 'snapping_jaws',
    name: 'Snapping Jaws',
    description:
      'You have learned to use your bite as a natural weapon. This is a primary attack that deals 1d6 points of damage.',
    shortDescription: 'Gain a primary bite attack dealing 1d6 damage',
    source: 'Monster Codex',
    types: ['combat'],
    prerequisites: [
      { type: 'bab', minimum: 1 },
      { type: 'race', raceName: 'gnoll' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['gnoll', 'natural attack', 'racial'],
  },
  // ── Monster Codex: Hobgoblins ──────────────────────────────────────────────
  {
    id: 'bred_commander',
    name: 'Bred Commander',
    description:
      "When serving as a commander using the mass combat rules, you can add your class level to your army's Morale checks in place of your Charisma modifier.",
    shortDescription: 'Add class level instead of Charisma to army Morale checks',
    source: 'Monster Codex',
    types: ['general'],
    prerequisites: [{ type: 'race', raceName: 'hobgoblin' }],
    effects: [],
    activationMode: 'passive',
    tags: ['hobgoblin', 'mass combat', 'racial'],
  },
  {
    id: 'chain_challenge',
    name: 'Chain Challenge',
    description:
      'When the target of your challenge ability is killed or knocked unconscious, you can declare a new challenge target within 30 feet as an immediate action. You may chain additional challenges equal to your Charisma bonus (minimum 1) without counting against your daily uses.',
    shortDescription: 'Declare a new challenge target when your current target is defeated',
    source: 'Monster Codex',
    types: ['combat'],
    prerequisites: [
      { type: 'class_feature', featureName: 'challenge' },
      { type: 'level', minimum: 7 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['hobgoblin', 'cavalier', 'challenge'],
  },
  {
    id: 'commander_of_goblinkind',
    name: 'Commander of Goblinkind',
    description:
      'You receive a +5 competence bonus on Knowledge (local) checks and Charisma-based skills regarding goblinoids. If you have the Leadership feat, treat your leadership score as 2 higher when taking followers or a cohort with the goblinoid subtype.',
    shortDescription:
      '+5 competence on goblinoid-related checks; +2 leadership score for goblinoid followers',
    source: 'Monster Codex',
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'CHA', minimum: 13 },
      { type: 'race', raceName: 'hobgoblin' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.COMPETENCE,
        target: 'skill.knowledge_local',
        value: 5,
        source: 'Commander of Goblinkind',
        condition: {
          type: 'custom',
          description: 'Only applies to checks regarding goblinoids',
          params: {},
        },
      },
    ],
    activationMode: 'passive',
    tags: ['hobgoblin', 'racial', 'leadership'],
  },
  {
    id: 'warmonger',
    name: 'Warmonger',
    description:
      'You gain Bluff and Diplomacy as class skills and receive a +4 competence bonus using either skill to convince another character to go to war against or attack another creature or group.',
    shortDescription:
      'Bluff and Diplomacy as class skills; +4 competence to incite others to violence',
    source: 'Monster Codex',
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'CHA', minimum: 13 },
      { type: 'race', raceName: 'hobgoblin' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.COMPETENCE,
        target: 'skill.bluff',
        value: 4,
        source: 'Warmonger',
        condition: {
          type: 'custom',
          description: 'Only when convincing others to attack or go to war',
          params: {},
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.COMPETENCE,
        target: 'skill.diplomacy',
        value: 4,
        source: 'Warmonger',
        condition: {
          type: 'custom',
          description: 'Only when convincing others to attack or go to war',
          params: {},
        },
      },
    ],
    activationMode: 'passive',
    tags: ['hobgoblin', 'racial', 'social'],
  },
  // ── Monster Codex: Bugbears ────────────────────────────────────────────────
  {
    id: 'bushwhack',
    name: 'Bushwhack',
    description:
      'When a flat-footed creature is unaware of your presence and you successfully grapple it, you can attempt a second grapple combat maneuver check to pin the creature as a free action.',
    shortDescription: 'Pin an unaware grappled foe as a free action',
    source: 'Monster Codex',
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'DEX', minimum: 13 },
      { type: 'feat', featId: 'improved_grapple' },
      { type: 'feat', featId: 'improved_unarmed_strike' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['bugbear', 'grapple', 'stealth'],
  },
  {
    id: 'pile_on',
    name: 'Pile On',
    description:
      'Once per round when you damage a creature that is shaken, frightened, or panicked, you can choose to deal half your normal damage in order to extend the duration of its fear condition by 1 round.',
    shortDescription: "Deal half damage to extend a frightened foe's fear by 1 round",
    source: 'Monster Codex',
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'STR', minimum: 13 },
      { type: 'feat', featId: 'hurtful' },
      { type: 'feat', featId: 'power_attack' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['bugbear', 'fear', 'intimidate'],
  },
  {
    id: 'shocking_bellow',
    name: 'Shocking Bellow',
    description:
      'If you act in the surprise round of a combat, as a free action you can attempt a single Intimidate check to demoralize a creature within 30 feet.',
    shortDescription: 'Demoralize a foe as a free action during the surprise round',
    source: 'Monster Codex',
    types: ['combat'],
    prerequisites: [{ type: 'feat', featId: 'intimidating_prowess' }],
    effects: [],
    activationMode: 'conditional',
    tags: ['bugbear', 'intimidate', 'surprise'],
  },
  {
    id: 'visceral_threat',
    name: 'Visceral Threat',
    description:
      'You may use Intimidate, rather than Bluff, to attempt a feint against a creature within your melee reach.',
    shortDescription: 'Feint using Intimidate instead of Bluff',
    source: 'Monster Codex',
    types: ['combat'],
    prerequisites: [{ type: 'feat', featId: 'intimidating_prowess' }],
    effects: [],
    activationMode: 'passive',
    tags: ['bugbear', 'intimidate', 'feint'],
  },
  // ── Monster Codex: Kobolds ─────────────────────────────────────────────────
  {
    id: 'draconic_magic',
    name: 'Draconic Magic',
    description:
      'You gain spell-like abilities based on your draconic aspect color, each usable once per day. Black grants corrosive touch and darkness; Blue grants minor image and shocking grasp; Green grants entangle and gust of wind; Red grants burning hands and pyrotechnics; White grants a cold-damage burning hands and fog cloud. You can use this feat instead of Draconic Breath or Draconic Glide to qualify for Draconic Paragon.',
    shortDescription: 'Gain draconic spell-like abilities based on your aspect color',
    source: 'Monster Codex',
    types: ['general'],
    prerequisites: [
      { type: 'feat', featId: 'draconic_aspect' },
      { type: 'race', raceName: 'kobold' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['kobold', 'draconic', 'racial', 'spell-like ability'],
  },
  {
    id: 'slurk_rider',
    name: 'Slurk Rider',
    description:
      "You can control, guide, and communicate with slurks as if they understood Draconic. You can also spend a standard action to manipulate the nodules on the slurk's back to activate its slime ability.",
    shortDescription: 'Control and communicate with slurks; activate their slime ability',
    source: 'Monster Codex',
    types: ['combat'],
    prerequisites: [{ type: 'race', raceName: 'kobold' }],
    effects: [],
    activationMode: 'passive',
    tags: ['kobold', 'mount', 'racial'],
  },
  // ── Monster Codex: Orcs ───────────────────────────────────────────────────
  {
    id: 'mutual_hatred',
    name: 'Mutual Hatred',
    description:
      'You gain a +1 bonus on attack rolls and damage rolls against creatures whose hatred racial trait or favored enemy class feature applies to you.',
    shortDescription: '+1 attack and damage vs. creatures that specifically hate your kind',
    source: 'Monster Codex',
    types: ['combat'],
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'attack.melee',
        value: 1,
        source: 'Mutual Hatred',
        condition: {
          type: 'custom',
          description:
            'Target has a racial hatred trait or favored enemy feature against your race',
          params: {},
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'damage.melee',
        value: 1,
        source: 'Mutual Hatred',
        condition: {
          type: 'custom',
          description:
            'Target has a racial hatred trait or favored enemy feature against your race',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['orc', 'racial', 'combat'],
  },
  // ── Monster Codex: Trolls ─────────────────────────────────────────────────
  {
    id: 'cooperative_rend',
    name: 'Cooperative Rend',
    description:
      'When you and an ally with this feat both threaten the same creature, you need only hit with at least one claw attack (rather than two) to use your rend ability.',
    shortDescription: 'Trigger rend with just one claw hit when flanking with a teamwork ally',
    source: 'Monster Codex',
    types: ['combat', 'teamwork'],
    prerequisites: [
      { type: 'feat', featId: 'rend' },
      { type: 'race', raceName: 'troll' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['troll', 'teamwork', 'rend', 'natural attack'],
  },
  {
    id: 'raging_regeneration',
    name: 'Raging Regeneration',
    description:
      'During rage, fire and acid damage no longer suppress your regeneration from functioning on the following round; instead, they reduce hit points regained by regeneration by 2 per round until the end of your next turn.',
    shortDescription: 'Rage prevents fire/acid from fully shutting down regeneration',
    source: 'Monster Codex',
    types: ['combat'],
    prerequisites: [
      { type: 'class_feature', featureName: 'rage' },
      { type: 'special', description: 'Regeneration racial ability, troll' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['troll', 'rage', 'regeneration', 'racial'],
  },
  // ── Monster Codex: Vampires ────────────────────────────────────────────────
  {
    id: 'aversion_tolerance',
    name: 'Aversion Tolerance',
    description:
      'You gain a +2 bonus on saves made to resist aversions to objects, sounds, and materials appropriate to your vampire type. When confronted with such things, you can attempt a saving throw immediately instead of after 1 round.',
    shortDescription: '+2 save vs. vampire aversions; react to them immediately',
    source: 'Monster Codex',
    types: ['general'],
    prerequisites: [{ type: 'special', description: 'Vampire' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'save.all',
        value: 2,
        source: 'Aversion Tolerance',
        condition: {
          type: 'custom',
          description:
            'Saving throws against vampire aversions (garlic, holy symbols, mirrors, etc.)',
          params: {},
        },
      },
    ],
    activationMode: 'passive',
    tags: ['vampire', 'racial', 'undead'],
  },
  {
    id: 'vampiric_companion',
    name: 'Vampiric Companion',
    description:
      'Your animal companion or familiar becomes an undead creature and gains fast healing 5 along with your vampire or dhampir weaknesses. Depending on your vampire type, the companion gains additional abilities. You may apply this feat to a replacement creature if needed.',
    shortDescription:
      'Transform your animal companion or familiar into an undead creature with fast healing 5',
    source: 'Monster Codex',
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'Dhampir or vampire, nongood alignment' },
      { type: 'level', minimum: 10, class: 'any class granting familiar or animal companion' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['vampire', 'dhampir', 'animal companion', 'undead'],
  },
  // ── Monster Codex: Lizardfolk ──────────────────────────────────────────────
  {
    id: 'aquatic_adaptation',
    name: 'Aquatic Adaptation',
    description: 'You can breathe water as well as air.',
    shortDescription: 'Breathe water as well as air',
    source: 'Monster Codex',
    types: ['general'],
    prerequisites: [{ type: 'special', description: 'Hold breath ability' }],
    effects: [],
    activationMode: 'passive',
    tags: ['lizardfolk', 'aquatic', 'racial'],
  },
  {
    id: 'dangerous_tail',
    name: 'Dangerous Tail',
    description:
      'You gain a tail swipe attack usable at full base attack bonus –5 during a full attack, dealing 1d4 damage (Medium) plus half Strength modifier. On a critical hit, you can attempt a trip maneuver as a free action against the target.',
    shortDescription: 'Gain a secondary tail swipe attack; critical hits can trip',
    source: 'Monster Codex',
    types: ['combat'],
    prerequisites: [
      { type: 'bab', minimum: 5 },
      { type: 'race', raceName: 'lizardfolk' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['lizardfolk', 'natural attack', 'racial'],
  },
  // ── Monster Codex: Ratfolk ─────────────────────────────────────────────────
  {
    id: 'sharptooth',
    name: 'Sharptooth',
    description:
      'You gain a bite attack. This is a primary natural attack that deals 1d3 points of damage.',
    shortDescription: 'Gain a primary bite attack dealing 1d3 damage',
    source: 'Monster Codex',
    types: ['combat'],
    prerequisites: [{ type: 'race', raceName: 'ratfolk' }],
    effects: [],
    activationMode: 'passive',
    tags: ['ratfolk', 'natural attack', 'racial'],
  },
  {
    id: 'pack_rat',
    name: 'Pack Rat',
    description:
      'Once daily when you need a mundane item, you happen to have one available. The item must cost no more than 25 gp plus 5 gp per level, and you must pay its cost when you "find" it. You cannot obtain magical items or specific keyed items.',
    shortDescription: 'Once per day produce a mundane item you might plausibly have packed',
    source: 'Monster Codex',
    types: ['general'],
    prerequisites: [{ type: 'race', raceName: 'ratfolk' }],
    effects: [],
    activationMode: 'conditional',
    tags: ['ratfolk', 'racial', 'equipment'],
  },
  // ── Monster Codex: Sahuagin ────────────────────────────────────────────────
  {
    id: 'aquatic_advantage',
    name: 'Aquatic Advantage',
    description:
      'Foes without a swim speed provoke attacks of opportunity from you when underwater. This does not apply to creatures under freedom of movement effects.',
    shortDescription: 'Non-swimmers provoke attacks of opportunity from you underwater',
    source: 'Monster Codex',
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'combat_reflexes' },
      { type: 'special', description: 'Natural swim speed' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['sahuagin', 'aquatic', 'racial'],
  },
  {
    id: 'greater_blood_frenzy',
    name: 'Greater Blood Frenzy',
    description:
      "You eliminate the AC penalty normally imposed by blood frenzy. Additionally, if both claw attacks connect during frenzied combat, you may perform a rend attack dealing bonus damage equal to one claw's damage plus 1.5× Strength modifier.",
    shortDescription: 'Remove the AC penalty of blood frenzy; add rend when both claws hit',
    source: 'Monster Codex',
    types: ['combat'],
    prerequisites: [{ type: 'special', description: 'Blood frenzy ability, sahuagin race' }],
    effects: [],
    activationMode: 'conditional',
    tags: ['sahuagin', 'racial', 'frenzy'],
  },
  // ── Monster Codex: Ogres ──────────────────────────────────────────────────
  {
    id: 'night_stalker',
    name: 'Night Stalker',
    description:
      'While in areas of dim lighting or natural darkness, you ignore all size penalties on Stealth checks and gain a +2 bonus on attack rolls against flat-footed enemies.',
    shortDescription:
      'Ignore size Stealth penalties and gain +2 attack vs. flat-footed in dim light',
    source: 'Monster Codex',
    types: ['general'],
    prerequisites: [
      { type: 'feat', featId: 'skill_focus_stealth' },
      { type: 'special', description: 'Darkvision, half-ogre or ogre, size Large or larger' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'attack.melee',
        value: 2,
        source: 'Night Stalker',
        condition: {
          type: 'custom',
          description: 'In dim light or natural darkness, attacking a flat-footed opponent',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['ogre', 'racial', 'stealth', 'darkness'],
  },
  // ── Horror Adventures: Brute Style chain ─────────────────────────────────
  // ── Horror Adventures: Deadhand Style chain ───────────────────────────────
  // ── Horror Adventures: Kyton Style chain ─────────────────────────────────
  // ── Horror Adventures: Maddening Style chain ─────────────────────────────
  {
    id: 'maddening_style',
    name: 'Maddening Style',
    description:
      'This style grants an extra daily use of Stunning Fist. While active with at least 1 ki point, increase saving throw DCs for confusion, madness, and insanity effects by 1. When you successfully stun a foe with Stunning Fist, the target sustains 1 point of Wisdom damage.',
    shortDescription:
      'Extra Stunning Fist use; +1 DC on madness effects; stun causes Wisdom damage',
    source: 'Horror Adventures',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'ability_score', ability: 'WIS', minimum: 15 },
      { type: 'ability_score', ability: 'CHA', minimum: 11 },
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'feat', featId: 'stunning_fist' },
      { type: 'skill', skillId: 'knowledge_arcana', ranks: 4 },
      { type: 'class_feature', featureName: 'ki pool' },
      { type: 'special', description: 'Nongood alignment' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['horror', 'style', 'ki', 'madness', 'unarmed'],
  },
  {
    id: 'maddening_strike',
    name: 'Maddening Strike',
    description:
      'By expending 1 ki point as a swift action, channel cosmic madness into your next unarmed strike. A miss inflicts 2 Wisdom damage to you. A successful hit deals normal damage plus 1d4+1 Wisdom damage to the target, reducible to 2 damage with a Will save (DC = 10 + ½ level + Wisdom modifier).',
    shortDescription: 'Spend ki to deal Wisdom damage with unarmed strikes; miss harms yourself',
    source: 'Horror Adventures',
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'WIS', minimum: 17 },
      { type: 'ability_score', ability: 'CHA', minimum: 13 },
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'feat', featId: 'maddening_style' },
      { type: 'feat', featId: 'stunning_fist' },
      { type: 'skill', skillId: 'knowledge_arcana', ranks: 8 },
      { type: 'class_feature', featureName: 'ki pool' },
      { type: 'special', description: 'Nongood alignment' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['horror', 'style', 'ki', 'ability damage', 'madness'],
  },
  {
    id: 'maddening_obliteration',
    name: 'Maddening Obliteration',
    description:
      'While using Maddening Style and dealing unarmed damage with at least 1 ki point, affected creatures take a –2 penalty on saves against confusion, madness, and insanity effects for 1 round. When a Stunning Fist reduces a target below 0 HP, you may expend 2 ki points to disintegrate the body; Fortitude save (DC = 10 + ½ level + Wisdom modifier) negates.',
    shortDescription:
      'Madness save penalty while striking; spend ki to disintegrate foes killed by Stunning Fist',
    source: 'Horror Adventures',
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'WIS', minimum: 19 },
      { type: 'ability_score', ability: 'CHA', minimum: 15 },
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'feat', featId: 'maddening_strike' },
      { type: 'feat', featId: 'maddening_style' },
      { type: 'feat', featId: 'stunning_fist' },
      { type: 'skill', skillId: 'knowledge_arcana', ranks: 10 },
      { type: 'class_feature', featureName: 'ki pool' },
      { type: 'special', description: 'Nongood alignment' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['horror', 'style', 'ki', 'disintegrate', 'madness'],
  },
  // ── Planar Adventures: Archon Style chain ────────────────────────────────
  // ── Planar Adventures: Azata Style chain ─────────────────────────────────
  // ── Planar Adventures: Demonic Style chain ────────────────────────────────
  {
    id: 'demonic_slaughter',
    name: 'Demonic Slaughter',
    description:
      'While activating Demonic Style, when you successfully bull rush a target during a charge, you may immediately trigger Great Cleave as if you had used a standard action. The bull rush target must be the first target of the Great Cleave attack sequence.',
    shortDescription: 'Trigger Great Cleave after a charge bull rush in Demonic Style',
    source: 'Planar Adventures',
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'cleave' },
      { type: 'feat', featId: 'demonic_momentum' },
      { type: 'feat', featId: 'demonic_style' },
      { type: 'feat', featId: 'great_cleave' },
      { type: 'feat', featId: 'improved_bull_rush' },
      { type: 'feat', featId: 'power_attack' },
      { type: 'bab', minimum: 9 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['planar', 'style', 'cleave', 'demonic'],
  },
  // ── Planar Adventures: Diabolic Style chain ────────────────────────────────
  // ── Planar Adventures: General ────────────────────────────────────────────
  {
    id: 'planar_heritage',
    name: 'Planar Heritage',
    description:
      'Select one type of native outsider. You count as both human and that race for effects related to race, including traits, feat prerequisites, spells, and magic items. You must possess the necessary physical features.',
    shortDescription: 'Count as a specific native outsider race in addition to human',
    source: 'Planar Adventures',
    types: ['general'],
    prerequisites: [{ type: 'race', raceName: 'human' }],
    effects: [],
    activationMode: 'passive',
    tags: ['planar', 'racial', 'human', 'outsider'],
  },
  {
    id: 'planar_survivor',
    name: 'Planar Survivor',
    description:
      'You gain a +2 bonus on Survival checks on planes other than the Material Plane and a +2 bonus on saving throws against hazards encountered in such environments. With 10+ Survival ranks, the Survival bonus increases to +4. This bonus does not stack with the Self-Sufficient feat.',
    shortDescription: '+2 Survival and saves vs. planar hazards off the Material Plane',
    source: 'Planar Adventures',
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'knowledge_planes', ranks: 3 },
      { type: 'skill', skillId: 'survival', ranks: 3 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skill.survival',
        value: 2,
        source: 'Planar Survivor',
        condition: {
          type: 'custom',
          description: 'On planes other than the Material Plane',
          params: {},
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'save.all',
        value: 2,
        source: 'Planar Survivor',
        condition: {
          type: 'custom',
          description: 'Against environmental hazards on planes other than the Material Plane',
          params: {},
        },
      },
    ],
    activationMode: 'passive',
    tags: ['planar', 'exploration', 'survival'],
  },
  // ── Heroes of the Wild ─────────────────────────────────────────────────────
  {
    id: 'uncivilized_tactics',
    name: 'Uncivilized Tactics',
    description:
      "As a standard action, attempt a combat maneuver check against a creature no more than one size category larger than you (provoking an attack of opportunity). If successful, you disable one arm or natural attack of your choice for 1 round, plus 1 additional round for every 5 by which you exceed the target's CMD. The target can restore the limb as a standard action.",
    shortDescription: "Disable a foe's arm or natural attack with a successful combat maneuver",
    source: 'Heroes of the Wild',
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'STR', minimum: 13 },
      { type: 'feat', featId: 'power_attack' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['wild', 'combat maneuver', 'disarm'],
  },
  // ── Heroes of the Streets ─────────────────────────────────────────────────
  {
    id: 'edge_runner',
    name: 'Edge Runner',
    description:
      'You can move at full speed while using Acrobatics to balance on narrow surfaces without becoming flat-footed or losing your Dexterity bonus to AC. You also gain a +4 bonus on Climb checks to catch yourself while falling and a +4 bonus on saves against effects that would cause you to fall into pits.',
    shortDescription: 'Balance at full speed without penalties; +4 saves against falling into pits',
    source: 'Heroes of the Streets',
    types: ['general'],
    prerequisites: [{ type: 'ability_score', ability: 'DEX', minimum: 13 }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'climb',
        value: 4,
        source: 'Edge Runner',
        condition: {
          type: 'custom',
          description: 'Only when catching yourself while falling',
          params: {},
        },
      },
    ],
    activationMode: 'passive',
    tags: ['streets', 'acrobatics', 'urban'],
  },
  {
    id: 'throat_slicer',
    name: 'Throat Slicer',
    description:
      'When using a 1-handed, light, or natural weapon, you can deliver a coup de grace to an unconscious, bound, or pinned target as a standard action instead of a full-round action.',
    shortDescription:
      'Deliver coup de grace to unconscious/bound/pinned targets as a standard action',
    source: 'Heroes of the Streets',
    types: ['combat'],
    prerequisites: [{ type: 'bab', minimum: 1 }],
    effects: [],
    activationMode: 'passive',
    tags: ['streets', 'coup de grace', 'assassination'],
  },
  {
    id: 'filthy_weapons',
    name: 'Filthy Weapons',
    description:
      'As a standard action, coat a weapon with decomposing waste or virulent filth. The next successful attack exposes the target to filth fever. On a critical hit, the onset time reduces to 1 round, with a save DC of 10 + ½ base attack bonus + Intelligence modifier.',
    shortDescription: 'Coat a weapon to expose the next target to filth fever',
    source: 'Heroes of the Streets',
    types: ['combat'],
    prerequisites: [
      { type: 'skill', skillId: 'knowledge_dungeoneering', ranks: 1 },
      { type: 'skill', skillId: 'knowledge_nature', ranks: 1 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['streets', 'poison', 'disease'],
  },
  // ── Cohorts and Companions ────────────────────────────────────────────────
  {
    id: 'monstrous_companion',
    name: 'Monstrous Companion',
    description:
      "Replace your animal companion with a magical beast cohort. The creature's effective cohort level scales with your effective druid level (from cohort level 4 at druid level 7 to level 12 at druid level 20). Eligible creatures include griffons, pegasi, worgs, manticores, and other magical beasts. This feat counts as Leadership for prerequisite purposes; you cannot have both simultaneously.",
    shortDescription: 'Replace your animal companion with a magical beast cohort',
    source: 'Cohorts and Companions',
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'handle_animal', ranks: 7 },
      { type: 'class_feature', featureName: 'animal companion (effective druid level 7)' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['companion', 'animal companion', 'magical beast'],
  },
  {
    id: 'blazing_channel',
    name: 'Blazing Channel',
    description:
      'When using Turn Undead, undead creatures that fail their saving throw catch fire with holy flames. This divine fire functions like normal fire but cannot be extinguished by water—only negative energy healing of 5+ HP will extinguish the flames.',
    shortDescription: 'Undead that fail against Turn Undead catch divine fire',
    source: 'Cohorts and Companions',
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'turn_undead' },
      { type: 'class_feature', featureName: 'channel positive energy' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['cohorts', 'undead', 'channeling', 'fire'],
  },
  {
    id: 'channel_surge',
    name: 'Channel Surge',
    description:
      'Expend two uses of your channel energy or lay on hands ability as a full-round action to increase your healing or damage output by 50%.',
    shortDescription: 'Spend two channel/lay on hands uses to heal or deal 50% more',
    source: 'Cohorts and Companions',
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'Channel energy or lay on hands class feature' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['cohorts', 'channeling', 'healing'],
  },
  {
    id: 'charnel_soldiers',
    name: 'Charnel Soldiers',
    description:
      'When you create undead, they gain one teamwork feat you know as a bonus feat, functioning only when cooperating with you or other undead you created. Undead controlled via Command Undead or similar abilities also gain a bonus teamwork feat you know while under your control. Intelligent undead cannot benefit from this feat.',
    shortDescription: 'Undead you create or control gain one of your teamwork feats',
    source: 'Cohorts and Companions',
    types: ['teamwork'],
    prerequisites: [
      { type: 'special', description: 'Any teamwork feat; ability to control or create undead' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['cohorts', 'undead', 'teamwork', 'necromancy'],
  },
];
