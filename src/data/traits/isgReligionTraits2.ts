import type { TraitDefinition } from '@/types/traits';
import { BonusType } from '@/types/base';

export const ISG_RELIGION_TRAITS_2: TraitDefinition[] = [
  // ==================== NADERI ====================
  {
    id: 'empty_heart_full_heart',
    name: 'Empty Heart, Full Heart',
    description:
      'Your devotion to Naderi, goddess of forbidden love, has given you insight into the nature of longing and desire. You gain a +1 trait bonus on saving throws against charm effects, and targets of your charm spells take a -1 penalty on their saving throws.',
    shortDescription: '+1 saves vs charm; -1 penalty to targets of your charm spells',
    source: 'Inner Sea Gods',
    category: 'religion',
    subcategory: 'Naderi',
    prerequisites: [{ type: 'deity', deityName: 'Naderi' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.all',
        value: 1,
        source: 'Empty Heart, Full Heart',
        condition: {
          type: 'custom',
          params: {},
          description: 'Against charm effects',
        },
      },
      {
        type: 'penalty',
        bonusType: BonusType.TRAIT,
        target: 'special.ability',
        value: 1,
        source: 'Empty Heart, Full Heart',
        condition: {
          type: 'custom',
          params: {},
          description: 'Penalty to saving throws of targets of your charm spells',
        },
      },
    ],
    tags: ['charm', 'save', 'spellcasting'],
  },

  // ==================== NIVI RHOMBODAZZLE ====================
  {
    id: 'agent_of_chance',
    name: 'Agent of Chance',
    description:
      'Your faith in Nivi Rhombodazzle gives you the ability to influence the fortune of others. Once per day, when an adjacent ally is about to make a skill check, you can use an immediate action to allow that ally to reroll the skill check before the result is revealed. The ally must take the second roll, even if it is worse.',
    shortDescription: '1/day grant adjacent ally a skill check reroll (must take result)',
    source: 'Inner Sea Gods',
    category: 'religion',
    subcategory: 'Nivi Rhombodazzle',
    prerequisites: [{ type: 'deity', deityName: 'Nivi Rhombodazzle' }],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.TRAIT,
        target: 'special.ability',
        value: 0,
        source: 'Agent of Chance',
        condition: {
          type: 'custom',
          params: {},
          description: '1/day grant adjacent ally a skill check reroll',
        },
      },
    ],
    tags: ['reroll', 'luck', 'ally', 'skill'],
  },

  // ==================== THAMIR GIXX ====================
  {
    id: 'always_threatening_thamir',
    name: 'Always Threatening',
    description:
      'Your dedication to Thamir Gixx has made you adept at drawing hidden blades before opponents can react. As a move action, you can draw a light, concealed weapon for which you have Weapon Focus. If you have the Quick Draw feat, drawing this weapon is a free action instead.',
    shortDescription: 'Draw a concealed weapon as move action (free with Quick Draw)',
    source: 'Inner Sea Gods',
    category: 'religion',
    subcategory: 'Thamir Gixx',
    prerequisites: [{ type: 'deity', deityName: 'Thamir Gixx' }],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.TRAIT,
        target: 'special.ability',
        value: 0,
        source: 'Always Threatening',
        condition: {
          type: 'custom',
          params: {},
          description: 'Draw concealed weapon as move action; free action with Quick Draw',
        },
      },
    ],
    tags: ['weapon', 'draw', 'stealth', 'halfling'],
  },

  // ==================== TRUDD ====================
  {
    id: 'steady_strength',
    name: 'Steady Strength',
    description:
      'Your devotion to Trudd, god of strength, allows you to bear the weight of armor without impeding your physical feats. When you wear medium or heavy armor, your armor check penalty on Strength-based skills is reduced by 2.',
    shortDescription: 'Armor check penalty on Str-based skills reduced by 2 in medium/heavy armor',
    source: 'Inner Sea Gods',
    category: 'religion',
    subcategory: 'Trudd',
    prerequisites: [{ type: 'deity', deityName: 'Trudd' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'special.ability',
        value: 2,
        source: 'Steady Strength',
        condition: {
          type: 'custom',
          params: {},
          description: 'Reduces armor check penalty on Str-based skills in medium or heavy armor',
        },
      },
    ],
    tags: ['armor', 'strength', 'armor-check-penalty'],
  },

  // ==================== YDERSIUS ====================
  {
    id: 'serpentine_squeeze',
    name: 'Serpentine Squeeze',
    description:
      'Your worship of Ydersius, the serpent-god, has given you serpentine tenacity in close combat. You gain a +1 trait bonus on combat maneuver checks to grapple a foe, as well as a +1 trait bonus to your CMD whenever an opponent tries to grapple you.',
    shortDescription: '+1 on grapple CMB; +1 CMD vs grapple',
    source: 'Inner Sea Gods',
    category: 'religion',
    subcategory: 'Ydersius',
    prerequisites: [{ type: 'deity', deityName: 'Ydersius' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'cmb',
        value: 1,
        source: 'Serpentine Squeeze',
        condition: {
          type: 'custom',
          params: {},
          description: 'On grapple combat maneuver checks',
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'cmd',
        value: 1,
        source: 'Serpentine Squeeze',
        condition: {
          type: 'custom',
          params: {},
          description: 'Against grapple attempts',
        },
      },
    ],
    tags: ['grapple', 'cmb', 'cmd', 'combat-maneuver'],
  },

  // ==================== YUELRAL ====================
  {
    id: 'magics_might',
    name: "Magic's Might",
    description:
      'Your natural affinity for magic, honed through devotion to Yuelral, the elven goddess of magic, allows you to affect even those who resist it. You gain a +1 trait bonus on caster level checks to overcome spell resistance.',
    shortDescription: '+1 on caster level checks to overcome spell resistance',
    source: 'Inner Sea Gods',
    category: 'religion',
    subcategory: 'Yuelral',
    prerequisites: [{ type: 'deity', deityName: 'Yuelral' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'special.ability',
        value: 1,
        source: "Magic's Might",
        condition: {
          type: 'custom',
          params: {},
          description: 'On caster level checks to overcome spell resistance',
        },
      },
    ],
    tags: ['spell-resistance', 'caster-level', 'magic'],
  },

  // ==================== ZYPHUS ====================
  {
    id: 'accident_resistant',
    name: 'Accident Resistant',
    description:
      'Your worship of Zyphus, god of accidental death, has made you keenly aware of dangerous situations before they unfold. You gain a +2 trait bonus on Reflex saves when denied your Dexterity bonus or during a surprise round.',
    shortDescription: '+2 Reflex saves when denied Dex bonus or in surprise round',
    source: 'Inner Sea Gods',
    category: 'religion',
    subcategory: 'Zyphus',
    prerequisites: [{ type: 'deity', deityName: 'Zyphus' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.reflex',
        value: 2,
        source: 'Accident Resistant',
        condition: {
          type: 'custom',
          params: {},
          description: 'When denied Dex bonus to AC or during a surprise round',
        },
      },
    ],
    tags: ['save', 'reflex', 'surprise', 'initiative'],
  },
  {
    id: 'fatal_trapper',
    name: 'Fatal Trapper',
    description:
      'Your patron Zyphus grants you expertise at creating and disabling deadly traps. You gain a +1 trait bonus on Craft (traps) checks, as well as a +1 trait bonus on Disable Device checks to disable traps.',
    shortDescription: '+1 Craft (traps) and +1 Disable Device to disable traps',
    source: 'Inner Sea Gods',
    category: 'religion',
    subcategory: 'Zyphus',
    prerequisites: [{ type: 'deity', deityName: 'Zyphus' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.craft',
        value: 1,
        source: 'Fatal Trapper',
        condition: {
          type: 'custom',
          params: {},
          description: 'Craft (traps) checks',
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.disable_device',
        value: 1,
        source: 'Fatal Trapper',
        condition: {
          type: 'custom',
          params: {},
          description: 'Disable Device checks to disable traps',
        },
      },
    ],
    tags: ['craft', 'traps', 'disable-device'],
  },

  // ==================== ANY ELEMENTAL LORD ====================
  {
    id: 'affinity_for_the_elements',
    name: 'Affinity for the Elements',
    description:
      'Your patron elemental lord grants you a gift for elemental magic. Add 1 to the DC of saving throws made to resist the effects of spells cast by you that have either the air, earth, fire, or water descriptor, depending on which elemental lord you worship. You must choose a single elemental lord when you take this trait; once chosen, it cannot be changed.',
    shortDescription: '+1 to save DCs of your elemental (air/earth/fire/water) spells',
    source: 'Inner Sea Gods',
    category: 'religion',
    subcategory: 'Any Elemental Lord',
    prerequisites: [{ type: 'special', description: 'Must worship an elemental lord' }],
    choices: [
      {
        type: 'custom',
        label: 'Elemental lord (determines descriptor)',
        options: ['Air (Hshurha)', 'Earth (Ayrzul)', 'Fire (Ymeri)', 'Water (Kelizandri)'],
        affectsEffects: false,
      },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'special.ability',
        value: 1,
        source: 'Affinity for the Elements',
        condition: {
          type: 'custom',
          params: {},
          description: 'Save DCs of your elemental descriptor spells (air, earth, fire, or water)',
        },
      },
    ],
    tags: ['elemental', 'spell-dc', 'air', 'earth', 'fire', 'water'],
  },
  {
    id: 'elemental_resilience',
    name: 'Elemental Resilience',
    description:
      'Your devotion to an elemental lord has strengthened your body against a specific energy type. Choose one energy type (acid, cold, electricity, or fire) when you take this trait. You gain a +1 trait bonus on saving throws against spells with that descriptor. Once chosen, this selection cannot be changed.',
    shortDescription: '+1 saves vs spells of chosen energy type (acid/cold/electricity/fire)',
    source: 'Inner Sea Gods',
    category: 'religion',
    subcategory: 'Any Elemental Lord',
    prerequisites: [{ type: 'special', description: 'Must worship an elemental lord' }],
    choices: [
      {
        type: 'custom',
        label: 'Energy type',
        options: ['Acid', 'Cold', 'Electricity', 'Fire'],
        affectsEffects: true,
        effectTargetTemplate: 'save.all',
      },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.all',
        value: 1,
        source: 'Elemental Resilience',
        condition: {
          type: 'custom',
          params: {},
          description: 'Against spells with chosen energy descriptor',
        },
      },
    ],
    tags: ['save', 'elemental', 'energy-resistance', 'acid', 'cold', 'electricity', 'fire'],
  },

  // ==================== ANY DEMON LORD ====================
  {
    id: 'demonic_persuasion',
    name: 'Demonic Persuasion',
    description:
      'Your worship of a demon lord has granted you a measure of authority when dealing with the servants of the Abyss. You gain a +2 trait bonus on Diplomacy and Intimidate checks when dealing with creatures of the demon subtype.',
    shortDescription: '+2 Diplomacy and Intimidate vs demons',
    source: 'Inner Sea Gods',
    category: 'religion',
    subcategory: 'Any Demon Lord',
    prerequisites: [{ type: 'special', description: 'Must worship a demon lord' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.diplomacy',
        value: 2,
        source: 'Demonic Persuasion',
        condition: {
          type: 'custom',
          params: {},
          description: 'Against creatures of the demon subtype',
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.intimidate',
        value: 2,
        source: 'Demonic Persuasion',
        condition: {
          type: 'custom',
          params: {},
          description: 'Against creatures of the demon subtype',
        },
      },
    ],
    tags: ['diplomacy', 'intimidate', 'demon', 'outsider'],
  },

  // ==================== ANY ARCHDEVIL ====================
  {
    id: 'flames_of_hell',
    name: 'Flames of Hell',
    description:
      'Your devotion to an archdevil of Hell empowers your channel energy ability with infernal force. You increase the saving throw DC of your channel energy ability by 1.',
    shortDescription: '+1 DC on channel energy',
    source: 'Inner Sea Gods',
    category: 'religion',
    subcategory: 'Any Archdevil',
    prerequisites: [
      { type: 'special', description: 'Must worship an archdevil' },
      { type: 'special', description: 'Channel energy class feature' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'special.ability',
        value: 1,
        source: 'Flames of Hell',
        condition: {
          type: 'custom',
          params: {},
          description: 'DC of channel energy ability',
        },
      },
    ],
    tags: ['channel-energy', 'dc', 'devil', 'infernal'],
  },

  // ==================== ANY ELDER GOD ====================
  {
    id: 'unspeakable_bond',
    name: 'Unspeakable Bond',
    description:
      'Your connection to an Elder God has made you an ally of the strange and the unnatural. You gain a +2 trait bonus on Diplomacy checks when dealing with creatures of the aberration type.',
    shortDescription: '+2 Diplomacy vs aberrations',
    source: 'Inner Sea Gods',
    category: 'religion',
    subcategory: 'Any Elder God',
    prerequisites: [{ type: 'special', description: 'Must worship an Elder God' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.diplomacy',
        value: 2,
        source: 'Unspeakable Bond',
        condition: {
          type: 'custom',
          params: {},
          description: 'Against creatures of the aberration type',
        },
      },
    ],
    tags: ['diplomacy', 'aberration', 'elder-god'],
  },

  // ==================== ANY OF THE ELDEST ====================
  {
    id: 'shaper_of_reality',
    name: 'Shaper of Reality',
    description:
      'Your devotion to one of the Eldest, the powerful fey lords of the First World, has granted you enhanced skill in shaping existence. Once per day, you can cast either a conjuration spell or a transmutation spell at +1 caster level.',
    shortDescription: '1/day cast a conjuration or transmutation spell at +1 caster level',
    source: 'Inner Sea Gods',
    category: 'religion',
    subcategory: 'Any of the Eldest',
    prerequisites: [{ type: 'special', description: 'Must worship one of the Eldest' }],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.TRAIT,
        target: 'special.ability',
        value: 0,
        source: 'Shaper of Reality',
        condition: {
          type: 'custom',
          params: {},
          description: '1/day cast conjuration or transmutation spell at +1 caster level',
        },
      },
    ],
    tags: ['caster-level', 'conjuration', 'transmutation', 'fey', 'eldest'],
  },

  // ==================== ANY GREAT OLD ONE ====================
  {
    id: 'worthless_pawn',
    name: 'Worthless Pawn',
    description:
      "Your patron Great Old One views you as a disposable instrument, yet this bleak relationship grants a strange boon: you may prepare and cast spells whose alignment is in opposition to your patron's. Each time you cast such an opposing spell, you suffer 1 point of Wisdom damage per spell level. This trait does not grant access to spell trigger or completion items that oppose your patron's alignment.",
    shortDescription: 'Cast opposing-alignment spells at cost of 1 Wis damage per spell level',
    source: 'Inner Sea Gods',
    category: 'religion',
    subcategory: 'Any Great Old One',
    prerequisites: [{ type: 'special', description: 'Must worship a Great Old One' }],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.TRAIT,
        target: 'special.ability',
        value: 0,
        source: 'Worthless Pawn',
        condition: {
          type: 'custom',
          params: {},
          description: 'Cast opposing-alignment spells at cost of 1 Wis damage per spell level',
        },
      },
    ],
    tags: ['spellcasting', 'alignment', 'wisdom', 'great-old-one'],
  },

  // ==================== ANY DWARVEN DEITY ====================
  {
    id: 'propitiation',
    name: 'Propitiation',
    description:
      'Your familiarity with the dwarven pantheon allows you to invoke whichever god governs a particular aspect of your life. Each day, select one skill from the following list: Appraise, Bluff, Craft (any single craft), Diplomacy, Intimidate, or Knowledge (local). You receive a +2 trait bonus to your chosen skill until the next dawn.',
    shortDescription: 'Each day, choose one of several skills to gain +2 trait bonus',
    source: 'Inner Sea Gods',
    category: 'religion',
    subcategory: 'Any Dwarven Deity',
    prerequisites: [{ type: 'special', description: 'Must worship a dwarven deity' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'special.ability',
        value: 2,
        source: 'Propitiation',
        condition: {
          type: 'custom',
          params: {},
          description:
            'Daily chosen skill (Appraise/Bluff/Craft/Diplomacy/Intimidate/Knowledge local)',
        },
      },
    ],
    tags: ['skill', 'daily', 'dwarf', 'flexible'],
  },

  // ==================== ANY ELVEN DEITY ====================
  {
    id: 'elven_polytheist',
    name: 'Elven Polytheist',
    description:
      'Your knowledge of the diverse elven gods has given you a broad perspective on divine matters. You gain a +1 trait bonus on Knowledge (religion) skill checks, and Knowledge (religion) is a class skill for you.',
    shortDescription: '+1 Knowledge (religion); Knowledge (religion) is a class skill',
    source: 'Inner Sea Gods',
    category: 'religion',
    subcategory: 'Any Elven Deity',
    prerequisites: [{ type: 'special', description: 'Must worship an elven deity' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_religion',
        value: 1,
        source: 'Elven Polytheist',
      },
      {
        type: 'special',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_religion',
        value: 0,
        source: 'Elven Polytheist',
        condition: {
          type: 'custom',
          params: {},
          description: 'Knowledge (religion) becomes a class skill',
        },
      },
    ],
    tags: ['knowledge', 'religion', 'class-skill', 'elf'],
  },

  // ==================== GREEN FAITH ====================
  {
    id: 'eyes_of_the_wild',
    name: 'Eyes of the Wild',
    description:
      'Your devotion to the Green Faith and the natural world has sharpened your awareness of your surroundings in the wilderness. You gain a +2 trait bonus on Perception checks in natural settings.',
    shortDescription: '+2 Perception in natural settings',
    source: 'Inner Sea Gods',
    category: 'religion',
    subcategory: 'Green Faith',
    prerequisites: [{ type: 'special', description: 'Must follow the Green Faith' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.perception',
        value: 2,
        source: 'Eyes of the Wild',
        condition: {
          type: 'custom',
          params: {},
          description: 'In natural settings',
        },
      },
    ],
    tags: ['perception', 'nature', 'wilderness', 'green-faith'],
  },
  {
    id: 'know_the_land',
    name: 'Know the Land',
    description:
      'Your training in the ways of the Green Faith has given you a deep understanding of the natural world. You gain a +1 trait bonus on Knowledge (nature) and Survival checks. Additionally, one of these two skills (your choice) becomes a class skill for you.',
    shortDescription: '+1 Knowledge (nature) and Survival; one becomes a class skill',
    source: 'Inner Sea Gods',
    category: 'religion',
    subcategory: 'Green Faith',
    prerequisites: [{ type: 'special', description: 'Must follow the Green Faith' }],
    choices: [
      {
        type: 'skill',
        label: 'Class skill choice',
        options: ['Knowledge (nature)', 'Survival'],
        affectsEffects: false,
      },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_nature',
        value: 1,
        source: 'Know the Land',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.survival',
        value: 1,
        source: 'Know the Land',
      },
      {
        type: 'special',
        bonusType: BonusType.TRAIT,
        target: 'special.ability',
        value: 0,
        source: 'Know the Land',
        condition: {
          type: 'custom',
          params: {},
          description: 'Chosen skill (Knowledge nature or Survival) becomes a class skill',
        },
      },
    ],
    tags: ['knowledge', 'nature', 'survival', 'class-skill', 'green-faith'],
  },

  // ==================== FOUR HORSEMEN ====================
  {
    id: 'covenant_of_abaddon',
    name: 'Covenant of Abaddon',
    description:
      "Your pact with one of Abaddon's Four Horsemen affords you protection against the life-draining powers that serve their apocalyptic cause. You gain a +2 trait bonus on Fortitude saving throws against level-draining effects.",
    shortDescription: '+2 Fortitude saves vs level-draining effects',
    source: 'Inner Sea Gods',
    category: 'religion',
    subcategory: 'Four Horsemen',
    prerequisites: [{ type: 'special', description: 'Must worship one of the Four Horsemen' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.fortitude',
        value: 2,
        source: 'Covenant of Abaddon',
        condition: {
          type: 'custom',
          params: {},
          description: 'Against level-draining effects',
        },
      },
    ],
    tags: ['save', 'fortitude', 'level-drain', 'energy-drain', 'abaddon'],
  },
];

// CHECKPOINT: last_written=covenant_of_abaddon, written=20/20, status=complete
