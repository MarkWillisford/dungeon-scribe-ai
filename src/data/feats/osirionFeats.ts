import type { FeatDefinition } from '@/types/feats';
import { BonusType } from '@/types/base';

// Note: Osirion, Land of the Pharaohs (2008) predates PF1e. Skill prereqs adapted
// to PF1e equivalents (Hide→Stealth, Search→Perception, Gather Information→Diplomacy).
// Thanatopic Spell and Threnodic Spell skipped (reprints, already in umagic.ts/umagic-extra.ts).

export const OSIRION_FEATS: FeatDefinition[] = [
  {
    id: 'black_marketeer',
    name: 'Black Marketeer',
    description:
      'Through black market connections, you gain a resource pool worth 100 gp for acquiring illegal or illicit items and services. This functions similarly to the Profits of Kalistrade feat but is restricted to contraband such as drugs, poisons, evil magic items, slaves, dead bodies, and secret information.',
    shortDescription: 'Gain a 100 gp resource pool for black market contraband.',
    source: 'Pathfinder Companion: Osirion, Land of the Pharaohs',
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'appraise', ranks: 4 },
      { type: 'skill', skillId: 'diplomacy', ranks: 4 },
      { type: 'skill', skillId: 'knowledge_local', ranks: 4 },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Black Marketeer',
      },
    ],
    activationMode: 'passive',
    tags: ['osirion', 'black market', 'social', 'resources'],
  },
  {
    id: 'conceal_scent',
    name: 'Conceal Scent',
    description:
      'Creatures cannot use the scent ability to track you, though they can still track you through standard means. Creatures with scent can detect your presence by smell at half the normal distance, but cannot pinpoint your location with scent.',
    shortDescription: 'Creatures with scent cannot track you; detection range halved.',
    source: 'Pathfinder Companion: Osirion, Land of the Pharaohs',
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'stealth', ranks: 3 },
      { type: 'skill', skillId: 'survival', ranks: 3 },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Conceal Scent',
      },
    ],
    activationMode: 'passive',
    tags: ['osirion', 'scent', 'stealth', 'tracking'],
  },
  {
    id: 'heightened_trap_sense',
    name: 'Heightened Trap Sense',
    description:
      'When you pass within 5 feet of a trap, you are entitled to an automatic Perception check to notice the trap. This check is made at a -10 penalty, or -5 if you are moving at half speed and taking no actions other than moving.',
    shortDescription: 'Automatic Perception check at -10 (-5 at half speed) when near traps.',
    source: 'Pathfinder Companion: Osirion, Land of the Pharaohs',
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'perception', ranks: 6 },
      { type: 'class_feature', featureName: 'trap sense' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'skill.perception',
        source: 'Heightened Trap Sense',
      },
    ],
    activationMode: 'passive',
    tags: ['osirion', 'trap', 'perception', 'rogue', 'dungeon'],
  },
  {
    id: 'lost_in_the_crowd',
    name: 'Lost in the Crowd',
    description:
      'You gain a +2 circumstance bonus on Stealth checks in urban areas; this bonus increases to +4 in crowds. You gain a +1 dodge bonus to AC when threatened by 2 or more enemies.',
    shortDescription: '+2/+4 Stealth in urban/crowds; +1 dodge AC when threatened by 2+ foes.',
    source: 'Pathfinder Companion: Osirion, Land of the Pharaohs',
    types: ['general'],
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        target: 'skill.stealth',
        value: 2,
        bonusType: BonusType.CIRCUMSTANCE,
        source: 'Lost in the Crowd',
      },
      {
        type: 'bonus',
        target: 'ac',
        value: 1,
        bonusType: BonusType.DODGE,
        source: 'Lost in the Crowd',
      },
    ],
    activationMode: 'conditional',
    tags: ['osirion', 'stealth', 'urban', 'crowd', 'dodge'],
  },
  {
    id: 'osiriontologist',
    name: 'Osiriontologist',
    description:
      'When in Osirion, you gain a +1 circumstance bonus on Bluff, Diplomacy, Disguise, Intimidate, and Perform checks. You gain a +5 bonus when using Appraise, Linguistics, Knowledge (all), and Perception to learn about a person, place, or item of ancient Osirion.',
    shortDescription:
      '+1 social skills in Osirion; +5 on knowledge/research about ancient Osirion.',
    source: 'Pathfinder Companion: Osirion, Land of the Pharaohs',
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'knowledge_history', ranks: 4 },
      { type: 'skill', skillId: 'knowledge_local', ranks: 4 },
      { type: 'skill', skillId: 'linguistics', ranks: 1 },
    ],
    effects: [
      {
        type: 'bonus',
        target: 'skill.bluff',
        value: 1,
        bonusType: BonusType.CIRCUMSTANCE,
        source: 'Osiriontologist',
      },
      {
        type: 'bonus',
        target: 'skill.diplomacy',
        value: 1,
        bonusType: BonusType.CIRCUMSTANCE,
        source: 'Osiriontologist',
      },
    ],
    activationMode: 'conditional',
    tags: ['osirion', 'knowledge', 'ancient', 'regional'],
  },
  {
    id: 'religious_pilgrim',
    name: 'Religious Pilgrim',
    description:
      'You gain a +1 bonus (sacred or profane based on alignment) to Will saves, Diplomacy checks, and Survival checks. These bonuses double to +2 on consecrated ground of your faith. You receive a 20% discount on non-magical religious items, including holy water.',
    shortDescription: '+1 sacred/profane Will, Diplomacy, Survival; +2 on consecrated ground.',
    source: 'Pathfinder Companion: Osirion, Land of the Pharaohs',
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'knowledge_geography', ranks: 2 },
      { type: 'skill', skillId: 'knowledge_religion', ranks: 4 },
    ],
    effects: [
      {
        type: 'bonus',
        target: 'special.will',
        value: 1,
        bonusType: BonusType.SACRED,
        source: 'Religious Pilgrim',
      },
      {
        type: 'bonus',
        target: 'skill.diplomacy',
        value: 1,
        bonusType: BonusType.SACRED,
        source: 'Religious Pilgrim',
      },
      {
        type: 'bonus',
        target: 'skill.survival',
        value: 1,
        bonusType: BonusType.SACRED,
        source: 'Religious Pilgrim',
      },
    ],
    activationMode: 'passive',
    tags: ['osirion', 'religion', 'pilgrim', 'consecrated'],
  },
  {
    id: 'serpent_lash',
    name: 'Serpent Lash',
    description:
      "As a standard action, attempt a disarm or trip with your whip. On success, gain an additional disarm or trip against a target adjacent to the first and within your whip's reach using the same bonus. You may also use your whip for reposition maneuvers at -4 CMB, only moving the target toward you.",
    shortDescription: 'Chain disarm/trip with whip to adjacent target; reposition at -4.',
    source: 'Pathfinder Companion: Osirion, Land of the Pharaohs',
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'weapon_finesse' },
      { type: 'proficiency', proficiency: 'whip' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Serpent Lash',
      },
    ],
    activationMode: 'conditional',
    tags: ['osirion', 'whip', 'trip', 'disarm', 'reposition'],
  },
  {
    id: 'swarm_dodger',
    name: 'Swarm Dodger',
    description:
      "When a swarm attacks you by ending its turn in your space, you may attempt a Reflex save (DC = swarm's distraction DC + 10) to avoid damage. Success also negates poison, blood drain, or comparable effects. Improved evasion extends to swarm encounters. You still face Fortitude saves against distraction if your turn begins in a swarm's space.",
    shortDescription: 'Reflex save to avoid swarm damage; improved evasion applies.',
    source: 'Pathfinder Companion: Osirion, Land of the Pharaohs',
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'DEX', minimum: 15 },
      { type: 'class_feature', featureName: 'evasion' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Swarm Dodger',
      },
    ],
    activationMode: 'conditional',
    tags: ['osirion', 'swarm', 'evasion', 'reflex', 'dungeon'],
  },
  // Thanatopic Spell — already in umagic-extra.ts (reprint)
  // Threnodic Spell — already in umagic.ts (reprint)
];
