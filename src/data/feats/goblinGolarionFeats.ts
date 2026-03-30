import type { FeatDefinition } from '@/types/feats';
import { BonusType } from '@/types/base';

export const GOBLIN_GOLARION_FEATS: FeatDefinition[] = [
  {
    id: 'ankle_biter',
    name: 'Ankle Biter',
    description:
      'When targeted by a combat maneuver, you may use an immediate action to bite your opponent as a natural attack dealing base damage appropriate for your size (usually 1d4 for Small). This does not provoke AoOs. If grappled or pinned, you can bite each round as a swift action and gain a bonus on grapple escape attempts equal to the bite damage dealt that round.',
    shortDescription: 'Bite attacker as immediate action when targeted by combat maneuver.',
    source: 'Pathfinder Player Companion: Goblins of Golarion',
    types: ['combat'],
    prerequisites: [
      { type: 'race', raceName: 'Goblin' },
      { type: 'skill', skillId: 'escape_artist', ranks: 1 },
    ],
    effects: [{ type: 'special', value: 0, bonusType: BonusType.UNTYPED, target: 'special', source: 'Ankle Biter' }],
    activationMode: 'conditional',
    tags: ['goblin', 'bite', 'natural attack', 'grapple'],
  },
  {
    id: 'battle_singer',
    name: 'Battle Singer',
    description:
      'When using bardic performance to inspire courage, you can sing in Goblin. Allies who do not speak Goblin gain no benefits. Allied goblins who hear your battle songs add the inspire courage bonus to all saving throws as a morale bonus.',
    shortDescription: 'Inspire courage in Goblin adds the bonus to goblin allies\' saves.',
    source: 'Pathfinder Player Companion: Goblins of Golarion',
    types: ['general'],
    prerequisites: [
      { type: 'race', raceName: 'Goblin' },
      { type: 'class_feature', featureName: 'bardic performance' },
    ],
    effects: [{ type: 'special', value: 0, bonusType: BonusType.MORALE, target: 'saves', source: 'Battle Singer' }],
    activationMode: 'conditional',
    tags: ['goblin', 'bard', 'bardic performance', 'inspire courage'],
  },
  {
    id: 'burn_burn_burn',
    name: 'Burn! Burn! Burn!',
    description:
      'You deal an additional 1d4 points of fire damage when attacking with nonmagical fire sources like alchemical fire or torches. You also gain a +4 competence bonus on Reflex saves to avoid catching on fire or to put yourself out when on fire. The additional damage does not extend to magical attacks or splash damage.',
    shortDescription: '+1d4 fire damage with nonmagical fire; +4 Reflex vs. catching fire.',
    source: 'Pathfinder Player Companion: Goblins of Golarion',
    types: ['general'],
    prerequisites: [
      { type: 'race', raceName: 'Goblin' },
      { type: 'skill', skillId: 'disable_device', ranks: 1 },
    ],
    effects: [
      { type: 'damage_bonus', target: 'fire', value: 0, bonusType: BonusType.UNTYPED, source: 'Burn! Burn! Burn!' },
      { type: 'save_bonus', target: 'reflex', value: 4, bonusType: BonusType.COMPETENCE, source: 'Burn! Burn! Burn!' },
    ],
    activationMode: 'conditional',
    tags: ['goblin', 'fire', 'alchemical', 'torch'],
  },
  {
    id: 'combat_distraction_goblin',
    name: 'Combat Distraction',
    description:
      'As a full-round action, you perform distracting antics. Any creature other than a goblin within 5 feet takes a -2 penalty on Perception checks and concentration checks while you maintain this behavior. The penalty stacks with multiple goblins using this feat.',
    shortDescription: 'Full-round action: -2 Perception and concentration to non-goblins within 5 ft.',
    source: 'Pathfinder Player Companion: Goblins of Golarion',
    types: ['combat'],
    prerequisites: [
      { type: 'race', raceName: 'Goblin' },
      { type: 'skill', skillId: 'acrobatics', ranks: 1 },
      { type: 'skill', skillId: 'escape_artist', ranks: 1 },
    ],
    effects: [{ type: 'special', value: -2, bonusType: BonusType.UNTYPED, target: 'special', source: 'Combat Distraction' }],
    activationMode: 'conditional',
    tags: ['goblin', 'distraction', 'perception', 'concentration'],
  },
  {
    id: 'dog_killer_horse_hunter',
    name: 'Dog Killer, Horse Hunter',
    description:
      'You gain a +2 morale bonus on attack and damage rolls against dogs and horses (including similar creatures like nightmares or worgs), and a +2 bonus on rolls to confirm critical hits against these foes.',
    shortDescription: '+2 morale attack/damage and +2 crit confirm vs. dogs and horses.',
    source: 'Pathfinder Player Companion: Goblins of Golarion',
    types: ['combat'],
    prerequisites: [
      { type: 'race', raceName: 'Goblin' },
      { type: 'skill', skillId: 'handle_animal', ranks: 1 },
    ],
    effects: [
      { type: 'attack_bonus', target: 'dogs_horses', value: 2, bonusType: BonusType.MORALE, source: 'Dog Killer, Horse Hunter' },
      { type: 'damage_bonus', target: 'dogs_horses', value: 2, bonusType: BonusType.MORALE, source: 'Dog Killer, Horse Hunter' },
    ],
    activationMode: 'passive',
    tags: ['goblin', 'favored enemy', 'dogs', 'horses'],
  },
  {
    id: 'lead_from_the_back',
    name: 'Lead from the Back',
    description:
      'During any round in which you gain the benefit of cover or concealment against at least one opponent and are not threatened, you can bark orders as a standard action. All allies within 30 feet gain a +1 bonus on all weapon damage rolls for 1 round.',
    shortDescription: '+1 weapon damage to allies within 30 ft while you have cover and aren\'t threatened.',
    source: 'Pathfinder Player Companion: Goblins of Golarion',
    types: ['combat'],
    prerequisites: [
      { type: 'race', raceName: 'Goblin' },
      { type: 'skill', skillId: 'intimidate', ranks: 1 },
    ],
    effects: [{ type: 'damage_bonus', target: 'allies', value: 1, bonusType: BonusType.UNTYPED, source: 'Lead from the Back' }],
    activationMode: 'conditional',
    tags: ['goblin', 'leadership', 'cover', 'support'],
  },
  {
    id: 'letter_fury',
    name: 'Letter Fury',
    description:
      'When someone reads, writes, or casts spells like glyph of warding or symbol in your presence, you can activate rage as an immediate action for 1 round without counting against daily rage rounds. Continuing beyond that round expends normal rage. You must wait at least 1 minute after rage ends before using this feat again.',
    shortDescription: 'Enter rage as immediate action when witnessing reading/writing (free 1 round).',
    source: 'Pathfinder Player Companion: Goblins of Golarion',
    types: ['general'],
    prerequisites: [
      { type: 'race', raceName: 'Goblin' },
      { type: 'class_feature', featureName: 'rage' },
    ],
    effects: [{ type: 'special', value: 0, bonusType: BonusType.UNTYPED, target: 'special', source: 'Letter Fury' }],
    activationMode: 'conditional',
    tags: ['goblin', 'rage', 'barbarian', 'literacy', 'writing'],
  },
  {
    id: 'roll_with_it',
    name: 'Roll With It',
    description:
      'When struck by a melee weapon, make an Acrobatics check (DC = 5 + damage dealt) as an immediate action. Success converts damage into uncontrolled bouncing movement (1 ft per damage point, up to your speed). Movement halts if you hit a creature/object of your size or larger, dealing 1d4 damage and leaving you prone. This movement provokes AoOs except from the attacker. You are staggered for 1 round after attempting this feat.',
    shortDescription: 'Acrobatics check to convert melee damage into bouncing movement.',
    source: 'Pathfinder Player Companion: Goblins of Golarion',
    types: ['combat'],
    prerequisites: [
      { type: 'race', raceName: 'Goblin' },
      { type: 'skill', skillId: 'acrobatics', ranks: 1 },
    ],
    effects: [{ type: 'special', value: 0, bonusType: BonusType.UNTYPED, target: 'special', source: 'Roll With It' }],
    activationMode: 'conditional',
    tags: ['goblin', 'acrobatics', 'damage avoidance', 'movement'],
  },
  {
    id: 'saddle_shrieker',
    name: 'Saddle Shrieker',
    description:
      'You can accept a -1 penalty on all attack rolls and CMB checks to give your mount a +1 bonus on all attack and damage rolls with natural weapons for 1 round. At BAB +4 and every 4 points thereafter, the penalty increases by -1 and the mount bonus by +1, to a max of +5. Must declare before attacking.',
    shortDescription: 'Trade attack penalty for scaling mount natural attack/damage bonus.',
    source: 'Pathfinder Player Companion: Goblins of Golarion',
    types: ['combat'],
    prerequisites: [
      { type: 'race', raceName: 'Goblin' },
      { type: 'skill', skillId: 'ride', ranks: 1 },
    ],
    effects: [{ type: 'special', value: 0, bonusType: BonusType.UNTYPED, target: 'special', source: 'Saddle Shrieker' }],
    activationMode: 'conditional',
    tags: ['goblin', 'mount', 'ride', 'natural attack'],
  },
  {
    id: 'vandal_goblin',
    name: 'Vandal',
    description:
      'You treat unattended objects as vulnerable to sneak attack, dealing half the normal extra damage.',
    shortDescription: 'Sneak attack unattended objects for half extra damage.',
    source: 'Pathfinder Player Companion: Goblins of Golarion',
    types: ['combat'],
    prerequisites: [
      { type: 'race', raceName: 'Goblin' },
      { type: 'class_feature', featureName: 'sneak attack' },
    ],
    effects: [{ type: 'special', value: 0, bonusType: BonusType.UNTYPED, target: 'special', source: 'Vandal' }],
    activationMode: 'passive',
    tags: ['goblin', 'sneak attack', 'objects', 'rogue'],
  },
];
