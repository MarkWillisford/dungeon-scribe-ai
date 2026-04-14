import { BonusType } from '@/types/base';
import type { TraitDefinition } from '@/types/traits';

export const BLOOD_MOON_SHADOWS_BEAST_TRAITS: TraitDefinition[] = [
  // ─── Pathfinder Player Companion: Blood of the Moon ──────────────────────────
  // Note: Blood of Shadows has no traits in the AoN database.

  {
    id: 'mastery_of_form',
    name: 'Mastery of Form',
    description:
      'Your skinwalker blood runs strong, granting you greater control over your bestial transformations. You can use your change shape ability as a move action instead of a standard action.',
    shortDescription: 'Use your change shape ability as a move action.',
    source: 'Pathfinder Player Companion: Blood of the Moon',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Skinwalker',
    prerequisites: [{ type: 'race', raceName: 'Skinwalker' }],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'special.change_shape',
        value: 0,
        source: 'Mastery of Form',
        condition: {
          type: 'custom',
          description: 'Change shape is a move action instead of standard',
          params: {},
        },
      },
    ],
    tags: ['skinwalker', 'change-shape', 'lycanthrope'],
  },

  {
    id: 'traumatic_shift',
    name: 'Traumatic Shift',
    description:
      'When you are reduced to half your maximum hit points or fewer, the trauma triggers an involuntary partial transformation. You gain a +2 trait bonus on attack rolls and a +1 trait bonus on damage rolls until the end of your next turn, but you must succeed at a DC 15 Will save or be staggered for 1 round as your body struggles with the change.',
    shortDescription:
      'When reduced to half hp, gain +2 attack and +1 damage until end of next turn (Will DC 15 or staggered).',
    source: 'Pathfinder Player Companion: Blood of the Moon',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Skinwalker',
    prerequisites: [{ type: 'race', raceName: 'Skinwalker' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'attack.melee',
        value: 2,
        source: 'Traumatic Shift',
        condition: {
          type: 'custom',
          description: 'When at half hp or fewer, until end of next turn',
          params: {},
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'damage.melee',
        value: 1,
        source: 'Traumatic Shift',
        condition: {
          type: 'custom',
          description: 'When at half hp or fewer, until end of next turn',
          params: {},
        },
      },
    ],
    tags: ['skinwalker', 'lycanthrope', 'attack', 'damage', 'bloodied'],
  },

  {
    id: 'fight_with_the_flock',
    name: 'Fight with the Flock',
    description:
      'Your werebat-kin instincts help you coordinate with allies in close quarters. When you are adjacent to at least two allies, you gain a +1 trait bonus on attack rolls.',
    shortDescription: '+1 attack rolls when adjacent to two or more allies.',
    source: 'Pathfinder Player Companion: Blood of the Moon',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Werebat-Kin',
    prerequisites: [{ type: 'special', description: 'Werebat-kin skinwalker' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'attack.melee',
        value: 1,
        source: 'Fight with the Flock',
        condition: {
          type: 'custom',
          description: 'When adjacent to at least two allies',
          params: {},
        },
      },
    ],
    tags: ['skinwalker', 'werebat-kin', 'attack', 'flanking'],
  },

  {
    id: 'precision_hearing',
    name: 'Precision Hearing',
    description:
      'Your werebat-kin echolocation gives you preternatural hearing. You gain a +4 trait bonus on Perception checks to pinpoint invisible or hidden creatures by sound, and you are never considered flat-footed against invisible creatures you can hear.',
    shortDescription:
      '+4 Perception to pinpoint creatures by sound; not flat-footed vs. audible invisible creatures.',
    source: 'Pathfinder Player Companion: Blood of the Moon',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Werebat-Kin',
    prerequisites: [{ type: 'special', description: 'Werebat-kin skinwalker' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.perception',
        value: 4,
        source: 'Precision Hearing',
        condition: {
          type: 'custom',
          description: 'To pinpoint invisible or hidden creatures by sound',
          params: {},
        },
      },
    ],
    tags: ['skinwalker', 'werebat-kin', 'perception', 'blindsense', 'invisible'],
  },

  {
    id: 'durable_change',
    name: 'Durable Change',
    description:
      'Your werebear-kin constitution allows you to sustain your bestial form for extended periods without strain. The duration of your change shape ability increases by 1 hour.',
    shortDescription: 'Your change shape duration increases by 1 hour.',
    source: 'Pathfinder Player Companion: Blood of the Moon',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Werebear-Kin',
    prerequisites: [{ type: 'special', description: 'Werebear-kin skinwalker' }],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'special.change_shape_duration',
        value: 0,
        source: 'Durable Change',
        condition: {
          type: 'custom',
          description: 'Change shape duration extended by 1 hour',
          params: {},
        },
      },
    ],
    tags: ['skinwalker', 'werebear-kin', 'change-shape', 'duration'],
  },

  {
    id: 'reviving_rest',
    name: 'Reviving Rest',
    description:
      'The regenerative power of your werebear-kin blood manifests during rest. When you rest for 8 hours, you recover twice your character level in additional hit points.',
    shortDescription: 'Recover twice your character level in additional hp after 8 hours of rest.',
    source: 'Pathfinder Player Companion: Blood of the Moon',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Werebear-Kin',
    prerequisites: [{ type: 'special', description: 'Werebear-kin skinwalker' }],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'special.hp_recovery',
        value: 0,
        source: 'Reviving Rest',
        condition: {
          type: 'custom',
          description: 'After 8 hours of rest, recover 2 × character level additional hp',
          params: {},
        },
      },
    ],
    tags: ['skinwalker', 'werebear-kin', 'healing', 'rest'],
  },

  {
    id: 'boar_resilience',
    name: 'Boar Resilience',
    description:
      'Your wereboar-kin ferocity keeps you fighting past mortal limits. Once per day when you would be reduced to 0 or fewer hit points, you may immediately make one melee attack before falling unconscious or dying.',
    shortDescription:
      'Once per day, make one melee attack before falling when reduced to 0 or fewer hp.',
    source: 'Pathfinder Player Companion: Blood of the Moon',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Wereboar-Kin',
    prerequisites: [{ type: 'special', description: 'Wereboar-kin skinwalker' }],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'special.ferocity',
        value: 0,
        source: 'Boar Resilience',
        condition: {
          type: 'custom',
          description: 'Once per day when reduced to 0 or fewer hp',
          params: {},
        },
      },
    ],
    tags: ['skinwalker', 'wereboar-kin', 'ferocity', 'hp', 'melee'],
  },

  {
    id: 'strength_of_body',
    name: 'Strength of Body',
    description:
      'The raw physical power of your wereboar-kin heritage adds to your melee strikes. You gain a +1 trait bonus on damage rolls with melee weapons.',
    shortDescription: '+1 trait bonus on melee damage rolls.',
    source: 'Pathfinder Player Companion: Blood of the Moon',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Wereboar-Kin',
    prerequisites: [{ type: 'special', description: 'Wereboar-kin skinwalker' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'damage.melee',
        value: 1,
        source: 'Strength of Body',
      },
    ],
    tags: ['skinwalker', 'wereboar-kin', 'damage', 'melee'],
  },

  {
    id: 'crocodile_swim',
    name: 'Crocodile Swim',
    description:
      'Your werecrocodile-kin blood grants you an affinity for water. You gain a +2 trait bonus on Swim checks and can hold your breath for twice as long as normal.',
    shortDescription: '+2 Swim; hold breath twice as long.',
    source: 'Pathfinder Player Companion: Blood of the Moon',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Werecrocodile-Kin',
    prerequisites: [{ type: 'special', description: 'Werecrocodile-kin skinwalker' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.swim',
        value: 2,
        source: 'Crocodile Swim',
      },
    ],
    tags: ['skinwalker', 'werecrocodile-kin', 'swim', 'aquatic'],
  },

  {
    id: 'terrifying_lunge',
    name: 'Terrifying Lunge',
    description:
      'Your werecrocodile-kin instincts lend terrifying speed to your ambushes. When you charge, the target must succeed at a Will save (DC 10 + 1/2 your character level + your Charisma modifier) or become shaken for 1 round.',
    shortDescription: 'When you charge, target must save or become shaken for 1 round.',
    source: 'Pathfinder Player Companion: Blood of the Moon',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Werecrocodile-Kin',
    prerequisites: [{ type: 'special', description: 'Werecrocodile-kin skinwalker' }],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'special.charge',
        value: 0,
        source: 'Terrifying Lunge',
        condition: {
          type: 'custom',
          description: 'Target shaken for 1 round on failed Will save when you charge',
          params: {},
        },
      },
    ],
    tags: ['skinwalker', 'werecrocodile-kin', 'charge', 'fear', 'shaken'],
  },

  {
    id: 'inured_to_disease',
    name: 'Inured to Disease',
    description:
      'Your wererat-kin heritage has exposed you to so many diseases that your body has developed a remarkable resistance. You gain a +4 trait bonus on Fortitude saves against disease.',
    shortDescription: '+4 trait bonus on Fortitude saves against disease.',
    source: 'Pathfinder Player Companion: Blood of the Moon',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Wererat-Kin',
    prerequisites: [{ type: 'special', description: 'Wererat-kin skinwalker' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.fortitude',
        value: 4,
        source: 'Inured to Disease',
        condition: { type: 'custom', description: 'Against disease', params: {} },
      },
    ],
    tags: ['skinwalker', 'wererat-kin', 'fortitude', 'disease'],
  },

  {
    id: 'rat_squeeze',
    name: 'Rat Squeeze',
    description:
      'Your wererat-kin flexibility allows you to slip through incredibly tight spaces. You can move through spaces one size smaller than you normally could without squeezing, and you take no penalty on attack rolls when squeezing.',
    shortDescription:
      'Move through spaces one size smaller without squeezing; no attack penalty when squeezing.',
    source: 'Pathfinder Player Companion: Blood of the Moon',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Wererat-Kin',
    prerequisites: [{ type: 'special', description: 'Wererat-kin skinwalker' }],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'speed.base',
        value: 0,
        source: 'Rat Squeeze',
        condition: {
          type: 'custom',
          description: 'Move through spaces one size smaller; no attack penalty when squeezing',
          params: {},
        },
      },
    ],
    tags: ['skinwalker', 'wererat-kin', 'squeeze', 'movement'],
  },

  {
    id: 'sharkchild',
    name: 'Sharkchild',
    description:
      'Your wereshark-kin senses make you adept at detecting blood and weakness in the water. When in water, you gain the scent ability and a +2 trait bonus on Perception checks.',
    shortDescription: 'While in water, gain scent and +2 Perception.',
    source: 'Pathfinder Player Companion: Blood of the Moon',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Wereshark-Kin',
    prerequisites: [{ type: 'special', description: 'Wereshark-kin skinwalker' }],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'scent',
        value: 0,
        source: 'Sharkchild',
        condition: { type: 'custom', description: 'While in water', params: {} },
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.perception',
        value: 2,
        source: 'Sharkchild',
        condition: { type: 'custom', description: 'While in water', params: {} },
      },
    ],
    tags: ['skinwalker', 'wereshark-kin', 'scent', 'perception', 'aquatic'],
  },

  {
    id: 'shoreline_skirmisher',
    name: 'Shoreline Skirmisher',
    description:
      'Your wereshark-kin blood makes you equally dangerous in and near water. You take no penalties on attack rolls when in water, and you gain a +1 trait bonus on attack rolls when fighting in shallow water or within 10 feet of a large body of water.',
    shortDescription: 'No attack penalties in water; +1 attack near water.',
    source: 'Pathfinder Player Companion: Blood of the Moon',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Wereshark-Kin',
    prerequisites: [{ type: 'special', description: 'Wereshark-kin skinwalker' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'attack.melee',
        value: 1,
        source: 'Shoreline Skirmisher',
        condition: {
          type: 'custom',
          description: 'When fighting in shallow water or within 10 feet of water',
          params: {},
        },
      },
    ],
    tags: ['skinwalker', 'wereshark-kin', 'attack', 'aquatic', 'water'],
  },

  {
    id: 'feline_instinct',
    name: 'Feline Instinct',
    description:
      'Your weretiger-kin senses give you an uncanny ability to read your prey. You gain a +2 trait bonus on Sense Motive checks, and you can always act in a surprise round even if you fail to notice enemies before combat begins.',
    shortDescription: '+2 Sense Motive; always act in surprise round.',
    source: 'Pathfinder Player Companion: Blood of the Moon',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Weretiger-Kin',
    prerequisites: [{ type: 'special', description: 'Weretiger-kin skinwalker' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.sense_motive',
        value: 2,
        source: 'Feline Instinct',
      },
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'special.surprise_round',
        value: 0,
        source: 'Feline Instinct',
        condition: { type: 'custom', description: 'Always act in surprise round', params: {} },
      },
    ],
    tags: ['skinwalker', 'weretiger-kin', 'sense-motive', 'initiative', 'surprise'],
  },

  {
    id: 'tigers_claw',
    name: "Tiger's Claw",
    description:
      'Your weretiger-kin heritage sharpens your natural weapons to lethal efficiency. Your claw attacks deal damage as if you were one size larger.',
    shortDescription: 'Your claw attacks deal damage as if one size larger.',
    source: 'Pathfinder Player Companion: Blood of the Moon',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Weretiger-Kin',
    prerequisites: [{ type: 'special', description: 'Weretiger-kin skinwalker' }],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'natural_weapon.claws',
        value: 0,
        source: "Tiger's Claw",
        condition: { type: 'custom', description: 'Claw damage as one size larger', params: {} },
      },
    ],
    tags: ['skinwalker', 'weretiger-kin', 'claws', 'natural-weapons', 'damage'],
  },

  {
    id: 'lycanthropic_bloodlust',
    name: 'Lycanthropic Bloodlust',
    description:
      'The predatory instincts of your werewolf-kin ancestry ignite when blood is drawn. The first time you deal damage to a creature that is already injured (at fewer than maximum hit points), you gain a +2 trait bonus on damage rolls against that creature for the rest of the combat.',
    shortDescription: '+2 damage vs. already-injured foes for the rest of combat.',
    source: 'Pathfinder Player Companion: Blood of the Moon',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Werewolf-Kin',
    prerequisites: [{ type: 'special', description: 'Werewolf-kin skinwalker' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'damage.melee',
        value: 2,
        source: 'Lycanthropic Bloodlust',
        condition: {
          type: 'custom',
          description: 'Against already-injured targets for the rest of combat',
          params: {},
        },
      },
    ],
    tags: ['skinwalker', 'werewolf-kin', 'damage', 'bloodlust'],
  },

  {
    id: 'shared_curse',
    name: 'Shared Curse',
    description:
      'You carry the curse of lycanthropy in your blood and can transfer some of its burden to others. Once per day as a standard action, you can touch a willing creature and grant it the benefits of your change shape ability for 1 minute.',
    shortDescription:
      'Once per day, grant a willing creature the benefits of your change shape ability for 1 minute.',
    source: 'Pathfinder Player Companion: Blood of the Moon',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Werewolf-Kin',
    prerequisites: [{ type: 'special', description: 'Werewolf-kin skinwalker' }],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'special.change_shape',
        value: 0,
        source: 'Shared Curse',
        condition: {
          type: 'custom',
          description: 'Once per day; grant change shape to willing touched creature for 1 minute',
          params: {},
        },
      },
    ],
    tags: ['skinwalker', 'werewolf-kin', 'change-shape', 'lycanthropy'],
  },

  {
    id: 'child_of_the_moon',
    name: 'Child of the Moon',
    description:
      'You have an innate connection to the moon and its cycles. You gain a +2 trait bonus on caster level checks to overcome spell resistance, and a +1 trait bonus on concentration checks, on nights when the moon is full.',
    shortDescription: '+2 CL vs SR and +1 concentration on nights of the full moon.',
    source: 'Pathfinder Player Companion: Blood of the Moon',
    verificationStatus: 'needs_review' as const,
    category: 'magic',
    subcategory: undefined,
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'spell.caster_level_check',
        value: 2,
        source: 'Child of the Moon',
        condition: { type: 'custom', description: 'On nights of the full moon', params: {} },
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'spell.concentration',
        value: 1,
        source: 'Child of the Moon',
        condition: { type: 'custom', description: 'On nights of the full moon', params: {} },
      },
    ],
    tags: ['moon', 'lycanthrope', 'spell-resistance', 'concentration', 'magic'],
  },

  // ─── Pathfinder Player Companion: Blood of the Beast ─────────────────────────

  {
    id: 'adherent_of_ancient_osirion',
    name: 'Adherent of Ancient Osirion',
    description:
      'Your catfolk lineage has preserved ancient ties to the god-kings of Osirion, and you have studied their rites. You gain a +1 trait bonus on Knowledge (religion) checks regarding Osiriani deities and ancient burial customs. In addition, you can cast one 0-level spell from the cleric spell list once per day as a spell-like ability (caster level equals your character level).',
    shortDescription: '+1 Know (religion) for Osirion; cast one 0-level cleric spell/day as SLA.',
    source: 'Pathfinder Player Companion: Blood of the Beast',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: undefined,
    prerequisites: [{ type: 'race', raceName: 'Catfolk' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_religion',
        value: 1,
        source: 'Adherent of Ancient Osirion',
        condition: {
          type: 'custom',
          description: 'Regarding Osiriani deities and ancient burial customs',
          params: {},
        },
      },
    ],
    tags: ['catfolk', 'knowledge-religion', 'osirion', 'spell-like-ability'],
  },

  {
    id: 'jungle_native',
    name: 'Jungle Native',
    description:
      'Your grippli clan has lived in the deep jungle for generations, and you have an instinctive understanding of its dangers and resources. You gain a +2 trait bonus on Survival checks in jungle environments, and jungle terrain is not difficult terrain for you.',
    shortDescription: '+2 Survival in jungle; jungle is not difficult terrain.',
    source: 'Pathfinder Player Companion: Blood of the Beast',
    verificationStatus: 'needs_review' as const,
    category: 'regional',
    subcategory: 'Jungle',
    prerequisites: [{ type: 'race', raceName: 'Grippli' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.survival',
        value: 2,
        source: 'Jungle Native',
        condition: { type: 'custom', description: 'In jungle environments', params: {} },
      },
    ],
    tags: ['grippli', 'survival', 'jungle', 'difficult-terrain'],
  },

  {
    id: 'caravan_nomad',
    name: 'Caravan Nomad',
    description:
      'Your kitsune family traveled with merchant caravans across the Inner Sea region, and you developed a talent for fitting in wherever your wanderings took you. You gain a +1 trait bonus on Disguise checks and a +1 trait bonus on Knowledge (local) checks.',
    shortDescription: '+1 Disguise and +1 Knowledge (local).',
    source: 'Pathfinder Player Companion: Blood of the Beast',
    verificationStatus: 'needs_review' as const,
    category: 'regional',
    subcategory: undefined,
    prerequisites: [{ type: 'race', raceName: 'Kitsune' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.disguise',
        value: 1,
        source: 'Caravan Nomad',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_local',
        value: 1,
        source: 'Caravan Nomad',
      },
    ],
    tags: ['kitsune', 'disguise', 'knowledge-local', 'caravan'],
  },

  {
    id: 'naga_emissary',
    name: 'Naga Emissary',
    description:
      'Your nagaji heritage marks you as a natural representative of naga interests, and you have trained to interact with surface-dwellers on behalf of your masters. You gain a +1 trait bonus on Diplomacy checks and a +1 trait bonus on Knowledge (nobility) checks.',
    shortDescription: '+1 Diplomacy and +1 Knowledge (nobility).',
    source: 'Pathfinder Player Companion: Blood of the Beast',
    verificationStatus: 'needs_review' as const,
    category: 'regional',
    subcategory: undefined,
    prerequisites: [{ type: 'race', raceName: 'Nagaji' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.diplomacy',
        value: 1,
        source: 'Naga Emissary',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_nobility',
        value: 1,
        source: 'Naga Emissary',
      },
    ],
    tags: ['nagaji', 'diplomacy', 'knowledge-nobility', 'naga'],
  },

  {
    id: 'prophet_of_burrows',
    name: 'Prophet of Burrows',
    description:
      'Your ratfolk community looked to you for spiritual guidance, and you have a deeper connection to the spirits that dwell in the earth and beneath city streets. You gain a +1 trait bonus on Knowledge (religion) checks, and Knowledge (religion) is always a class skill for you.',
    shortDescription: '+1 Knowledge (religion); Knowledge (religion) is a class skill.',
    source: 'Pathfinder Player Companion: Blood of the Beast',
    verificationStatus: 'needs_review' as const,
    category: 'regional',
    subcategory: undefined,
    prerequisites: [{ type: 'race', raceName: 'Ratfolk' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_religion',
        value: 1,
        source: 'Prophet of Burrows',
      },
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'class_skill.knowledge_religion',
        value: 0,
        source: 'Prophet of Burrows',
      },
    ],
    tags: ['ratfolk', 'knowledge-religion', 'class-skill'],
  },

  {
    id: 'jinx_eater',
    name: 'Jinx Eater',
    description:
      'Your tengu lineage has given you a talent for absorbing and deflecting ill fortune. Once per day when you fail a saving throw, you may reroll the save and take the higher result. You must decide to use this ability before the consequences of the failed save are applied.',
    shortDescription: 'Once per day, reroll a failed saving throw and take the higher result.',
    source: 'Pathfinder Player Companion: Blood of the Beast',
    verificationStatus: 'needs_review' as const,
    category: 'magic',
    subcategory: undefined,
    prerequisites: [{ type: 'race', raceName: 'Tengu' }],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'special.save',
        value: 0,
        source: 'Jinx Eater',
        condition: {
          type: 'custom',
          description: 'Once per day, reroll a failed save and take higher result',
          params: {},
        },
      },
    ],
    tags: ['tengu', 'saving-throw', 'reroll', 'luck'],
  },

  {
    id: 'fortune_found',
    name: 'Fortune Found',
    description:
      'Your vanara community taught you to find luck and opportunity in unlikely places. Once per day, when you roll a natural 1 on a skill check, you may reroll the check and take the second result.',
    shortDescription: 'Once per day, reroll a natural 1 on a skill check.',
    source: 'Pathfinder Player Companion: Blood of the Beast',
    verificationStatus: 'needs_review' as const,
    category: 'regional',
    subcategory: undefined,
    prerequisites: [{ type: 'race', raceName: 'Vanara' }],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'skill.check',
        value: 0,
        source: 'Fortune Found',
        condition: {
          type: 'custom',
          description: 'Once per day, reroll a natural 1 on a skill check',
          params: {},
        },
      },
    ],
    tags: ['vanara', 'skill-check', 'reroll', 'luck'],
  },
];

// CHECKPOINT: last_written=fortune_found, written=26/26, status=complete
