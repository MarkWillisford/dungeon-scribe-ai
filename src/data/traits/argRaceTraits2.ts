import { BonusType } from '@/types/base';
import type { TraitDefinition } from '@/types/traits';

/**
 * Advanced Race Guide race traits — PART 2.
 * Remaining core-race traits plus featured/uncommon race traits
 * not already present in advancedRace.ts, apgTraits-extra.ts, or argRaceTraits.ts.
 */
export const ARG_EXTRA_RACE_TRAITS_2: TraitDefinition[] = [
  // ==================== DWARF RACE TRAITS ====================
  {
    id: 'lorekeeper',
    name: 'Lorekeeper',
    description:
      'You have a knack for picking up local history and legends. You gain a +2 trait bonus on Knowledge (history) checks related to dwarves or their enemies, and Knowledge (history) is always a class skill for you.',
    shortDescription: '+2 Knowledge (history) about dwarves; class skill',
    source: 'Advanced Race Guide',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Dwarf',
    prerequisites: [{ type: 'race', raceName: 'Dwarf' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledgeHistory',
        value: 2,
        source: 'Lorekeeper',
        condition: {
          type: 'custom',
          params: {},
          description: 'Checks related to dwarves or their enemies',
        },
      },
      {
        type: 'special',
        bonusType: BonusType.TRAIT,
        target: 'class_skill.knowledgeHistory',
        value: 1,
        source: 'Lorekeeper',
      },
    ],
    tags: ['knowledge', 'history', 'dwarf', 'class skill'],
  },
  {
    id: 'relentless',
    name: 'Relentless',
    description:
      'You never waver in the face of adversity. You gain a +2 trait bonus on bull rush and overrun combat maneuver checks.',
    shortDescription: '+2 on bull rush and overrun CMB checks',
    source: 'Advanced Race Guide',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Dwarf',
    prerequisites: [{ type: 'race', raceName: 'Dwarf' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'cmb.bullRush',
        value: 2,
        source: 'Relentless',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'cmb.overrun',
        value: 2,
        source: 'Relentless',
      },
    ],
    tags: ['combat', 'dwarf', 'bull rush', 'overrun', 'cmb'],
  },
  {
    id: 'unstoppable',
    name: 'Unstoppable',
    description:
      'You are difficult to stop once you build momentum. You gain a +1 trait bonus on saving throws against effects that would cause you to become paralyzed, slowed, or entangled.',
    shortDescription: '+1 saves vs paralysis, slow, entangle',
    source: 'Advanced Race Guide',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Dwarf',
    prerequisites: [{ type: 'race', raceName: 'Dwarf' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.all',
        value: 1,
        source: 'Unstoppable',
        condition: {
          type: 'custom',
          params: {},
          description: 'Against paralysis, slow, and entangle effects',
        },
      },
    ],
    tags: ['save', 'dwarf', 'paralysis', 'entangle'],
  },

  // ==================== ELF RACE TRAITS ====================
  {
    id: 'lightbringer',
    name: 'Lightbringer',
    description:
      'You are immune to light-based blindness and dazzle effects, and you cast spells with the light descriptor at +1 caster level.',
    shortDescription: 'Immune to light blindness/dazzle; +1 CL for light spells',
    source: 'Advanced Race Guide',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Elf',
    prerequisites: [{ type: 'race', raceName: 'Elf' }],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.TRAIT,
        target: 'immunity.lightBlindness',
        value: 1,
        source: 'Lightbringer',
      },
      {
        type: 'special',
        bonusType: BonusType.TRAIT,
        target: 'immunity.dazzle',
        value: 1,
        source: 'Lightbringer',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'special.casterLevel',
        value: 1,
        source: 'Lightbringer',
        condition: {
          type: 'custom',
          params: {},
          description: 'Spells with the light descriptor only',
        },
      },
    ],
    tags: ['elf', 'light', 'caster level', 'immunity'],
  },
  {
    id: 'woodcraft',
    name: 'Woodcraft',
    description:
      'You have a deep familiarity with woodlands. You gain a +1 trait bonus on Knowledge (nature) checks and Survival checks while in forests, and Knowledge (nature) is always a class skill for you.',
    shortDescription: '+1 Knowledge (nature) and Survival in forests; class skill',
    source: 'Advanced Race Guide',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Elf',
    prerequisites: [{ type: 'race', raceName: 'Elf' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledgeNature',
        value: 1,
        source: 'Woodcraft',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.survival',
        value: 1,
        source: 'Woodcraft',
        condition: { type: 'custom', params: {}, description: 'While in forests' },
      },
      {
        type: 'special',
        bonusType: BonusType.TRAIT,
        target: 'class_skill.knowledgeNature',
        value: 1,
        source: 'Woodcraft',
      },
    ],
    tags: ['elf', 'nature', 'survival', 'forest', 'class skill'],
  },
  {
    id: 'spirit_of_the_waters',
    name: 'Spirit of the Waters',
    description:
      'Your ancestors adapted to life near the sea or waterways. You gain a +4 trait bonus on Swim checks and can always take 10 while swimming.',
    shortDescription: '+4 Swim; can always take 10 swimming',
    source: 'Advanced Race Guide',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Elf',
    prerequisites: [{ type: 'race', raceName: 'Elf' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.swim',
        value: 4,
        source: 'Spirit of the Waters',
      },
      {
        type: 'special',
        bonusType: BonusType.TRAIT,
        target: 'swim.take10',
        value: 1,
        source: 'Spirit of the Waters',
      },
    ],
    tags: ['elf', 'swim', 'aquatic'],
  },

  // ==================== GNOME RACE TRAITS ====================
  {
    id: 'academician',
    name: 'Academician',
    description:
      'You have spent much of your long gnome life in study. You gain a +2 trait bonus on any one Knowledge skill of your choice, and that skill is always a class skill for you.',
    shortDescription: '+2 to one chosen Knowledge skill; class skill',
    source: 'Advanced Race Guide',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Gnome',
    prerequisites: [{ type: 'race', raceName: 'Gnome' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge.chosen',
        value: 2,
        source: 'Academician',
      },
    ],
    choices: [
      {
        type: 'skill',
        label: 'Choose a Knowledge skill',
        options: [
          'Knowledge (arcana)',
          'Knowledge (dungeoneering)',
          'Knowledge (engineering)',
          'Knowledge (geography)',
          'Knowledge (history)',
          'Knowledge (local)',
          'Knowledge (nature)',
          'Knowledge (nobility)',
          'Knowledge (planes)',
          'Knowledge (religion)',
        ],
        affectsEffects: true,
        effectTargetTemplate: 'skill.knowledge{choice}',
      },
    ],
    tags: ['gnome', 'knowledge', 'class skill'],
  },
  {
    id: 'bond_to_the_land',
    name: 'Bond to the Land',
    description:
      'You are deeply connected to a specific biome. You gain a +2 trait bonus on Survival checks in your chosen terrain type.',
    shortDescription: '+2 Survival in one chosen terrain',
    source: 'Advanced Race Guide',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Gnome',
    prerequisites: [{ type: 'race', raceName: 'Gnome' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.survival',
        value: 2,
        source: 'Bond to the Land',
        condition: { type: 'custom', params: {}, description: 'In chosen terrain type only' },
      },
    ],
    choices: [
      {
        type: 'custom',
        label: 'Choose a terrain type',
        options: [
          'Desert',
          'Forest',
          'Hills',
          'Mountains',
          'Plains',
          'Swamp',
          'Underground',
          'Urban',
          'Water',
        ],
        affectsEffects: true,
        effectTargetTemplate: 'terrain.{choice}',
      },
    ],
    tags: ['gnome', 'survival', 'terrain'],
  },
  {
    id: 'warden_of_nature',
    name: 'Warden of Nature',
    description:
      'You are a careful guardian of the natural world. You gain a +1 trait bonus on Knowledge (nature) checks and Handle Animal checks, and one of these skills (your choice) is always a class skill for you.',
    shortDescription: '+1 Knowledge (nature) and Handle Animal; one becomes class skill',
    source: 'Advanced Race Guide',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Gnome',
    prerequisites: [{ type: 'race', raceName: 'Gnome' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledgeNature',
        value: 1,
        source: 'Warden of Nature',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.handleAnimal',
        value: 1,
        source: 'Warden of Nature',
      },
    ],
    choices: [
      {
        type: 'class_skill',
        label: 'Choose class skill',
        options: ['Knowledge (nature)', 'Handle Animal'],
        affectsEffects: true,
        effectTargetTemplate: 'class_skill.{choice}',
      },
    ],
    tags: ['gnome', 'nature', 'handle animal', 'class skill'],
  },

  // ==================== HALF-ELF RACE TRAITS ====================
  {
    id: 'dual_minded',
    name: 'Dual-Minded',
    description:
      'The blending of elven and human heritage has hardened your mind. You gain a +2 trait bonus on Will saving throws.',
    shortDescription: '+2 Will saves',
    source: 'Advanced Race Guide',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Half-Elf',
    prerequisites: [{ type: 'race', raceName: 'Half-Elf' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.will',
        value: 2,
        source: 'Dual-Minded',
      },
    ],
    tags: ['half-elf', 'will', 'save'],
  },
  {
    id: 'integrated',
    name: 'Integrated',
    description:
      'You have learned to blend in with members of your non-elven parent race. You gain a +1 trait bonus on Bluff, Disguise, and Knowledge (local) checks.',
    shortDescription: '+1 Bluff, Disguise, and Knowledge (local)',
    source: 'Advanced Race Guide',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Half-Elf',
    prerequisites: [{ type: 'race', raceName: 'Half-Elf' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.bluff',
        value: 1,
        source: 'Integrated',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.disguise',
        value: 1,
        source: 'Integrated',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledgeLocal',
        value: 1,
        source: 'Integrated',
      },
    ],
    tags: ['half-elf', 'bluff', 'disguise', 'social'],
  },
  {
    id: 'kindred_raised',
    name: 'Kindred-Raised',
    description:
      'You were raised by your non-human parent or in a community of such creatures. You gain the elf or half-elf weapon familiarity racial trait, and elven is a bonus language regardless of Intelligence.',
    shortDescription: 'Gain elf weapon familiarity and Elven language',
    source: 'Advanced Race Guide',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Half-Elf',
    prerequisites: [{ type: 'race', raceName: 'Half-Elf' }],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.TRAIT,
        target: 'weaponFamiliarity.elven',
        value: 1,
        source: 'Kindred-Raised',
      },
      {
        type: 'special',
        bonusType: BonusType.TRAIT,
        target: 'language.elven',
        value: 1,
        source: 'Kindred-Raised',
      },
    ],
    tags: ['half-elf', 'weapon', 'language'],
  },

  // ==================== HALF-ORC RACE TRAITS ====================
  {
    id: 'toothy',
    name: 'Toothy',
    description:
      'You have abnormally large and sharp tusks. You gain a bite attack dealing 1d4 points of damage.',
    shortDescription: 'Gain a 1d4 bite natural attack',
    source: 'Advanced Race Guide',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Half-Orc',
    prerequisites: [{ type: 'race', raceName: 'Half-Orc' }],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.TRAIT,
        target: 'naturalAttack.bite',
        value: '1d4',
        source: 'Toothy',
      },
    ],
    tags: ['half-orc', 'natural attack', 'bite', 'combat'],
  },
  {
    id: 'city_raised',
    name: 'City-Raised',
    description:
      'You grew up in a human city and are familiar with its ways. You gain a +1 trait bonus on Knowledge (local) checks and Diplomacy checks. Knowledge (local) is always a class skill for you.',
    shortDescription: '+1 Knowledge (local) and Diplomacy; Knowledge (local) class skill',
    source: 'Advanced Race Guide',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Half-Orc',
    prerequisites: [{ type: 'race', raceName: 'Half-Orc' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledgeLocal',
        value: 1,
        source: 'City-Raised',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.diplomacy',
        value: 1,
        source: 'City-Raised',
      },
      {
        type: 'special',
        bonusType: BonusType.TRAIT,
        target: 'class_skill.knowledgeLocal',
        value: 1,
        source: 'City-Raised',
      },
    ],
    tags: ['half-orc', 'knowledge', 'diplomacy', 'social', 'class skill'],
  },
  {
    id: 'gatecrasher',
    name: 'Gatecrasher',
    description:
      'You have a talent for breaking things. You gain a +2 trait bonus on Strength checks to break objects and a +2 trait bonus on sunder combat maneuver checks.',
    shortDescription: '+2 Str checks to break objects; +2 sunder CMB',
    source: 'Advanced Race Guide',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Half-Orc',
    prerequisites: [{ type: 'race', raceName: 'Half-Orc' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'check.breakObject',
        value: 2,
        source: 'Gatecrasher',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'cmb.sunder',
        value: 2,
        source: 'Gatecrasher',
      },
    ],
    tags: ['half-orc', 'strength', 'sunder', 'combat'],
  },
  {
    id: 'rock_climber',
    name: 'Rock Climber',
    description:
      'You grew up in rocky terrain and have become adept at navigating it. You gain a +1 trait bonus on Acrobatics and Climb checks, and one of these skills (your choice) is always a class skill for you.',
    shortDescription: '+1 Acrobatics and Climb; one becomes class skill',
    source: 'Advanced Race Guide',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Half-Orc',
    prerequisites: [{ type: 'race', raceName: 'Half-Orc' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.acrobatics',
        value: 1,
        source: 'Rock Climber',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.climb',
        value: 1,
        source: 'Rock Climber',
      },
    ],
    choices: [
      {
        type: 'class_skill',
        label: 'Choose class skill',
        options: ['Acrobatics', 'Climb'],
        affectsEffects: true,
        effectTargetTemplate: 'class_skill.{choice}',
      },
    ],
    tags: ['half-orc', 'acrobatics', 'climb', 'class skill'],
  },

  // ==================== HALFLING RACE TRAITS ====================
  {
    id: 'low_blow',
    name: 'Low Blow',
    description:
      'You are experienced at fighting larger creatures and know how to strike where it hurts. You gain a +1 trait bonus on critical confirmation rolls against opponents larger than you.',
    shortDescription: '+1 critical confirmation vs larger foes',
    source: 'Advanced Race Guide',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Halfling',
    prerequisites: [{ type: 'race', raceName: 'Halfling' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'attack.criticalConfirmation',
        value: 1,
        source: 'Low Blow',
        condition: { type: 'custom', params: {}, description: 'Against opponents larger than you' },
      },
    ],
    tags: ['halfling', 'critical', 'combat'],
  },
  {
    id: 'outrider',
    name: 'Outrider',
    description:
      'You are comfortable astride a mount and gain a +2 trait bonus on Ride checks and Handle Animal checks related to your mount.',
    shortDescription: '+2 Ride and +2 Handle Animal for mount',
    source: 'Advanced Race Guide',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Halfling',
    prerequisites: [{ type: 'race', raceName: 'Halfling' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.ride',
        value: 2,
        source: 'Outrider',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.handleAnimal',
        value: 2,
        source: 'Outrider',
        condition: { type: 'custom', params: {}, description: 'Related to your mount only' },
      },
    ],
    tags: ['halfling', 'ride', 'mount', 'handle animal'],
  },
  {
    id: 'wanderlust',
    name: 'Wanderlust',
    description:
      'You yearn to see the world and have spent much of your life traveling. You gain a +1 trait bonus on Knowledge (geography) and Survival checks, and one of these skills (your choice) is always a class skill for you.',
    shortDescription: '+1 Knowledge (geography) and Survival; one becomes class skill',
    source: 'Advanced Race Guide',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Halfling',
    prerequisites: [{ type: 'race', raceName: 'Halfling' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledgeGeography',
        value: 1,
        source: 'Wanderlust',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.survival',
        value: 1,
        source: 'Wanderlust',
      },
    ],
    choices: [
      {
        type: 'class_skill',
        label: 'Choose class skill',
        options: ['Knowledge (geography)', 'Survival'],
        affectsEffects: true,
        effectTargetTemplate: 'class_skill.{choice}',
      },
    ],
    tags: ['halfling', 'geography', 'survival', 'travel', 'class skill'],
  },
  {
    id: 'caretaker_race',
    name: 'Caretaker',
    description:
      'You have a natural gift for tending to the needs of others. You gain a +2 trait bonus on Heal checks.',
    shortDescription: '+2 Heal checks',
    source: 'Advanced Race Guide',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Halfling',
    prerequisites: [{ type: 'race', raceName: 'Halfling' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.heal',
        value: 2,
        source: 'Caretaker',
      },
    ],
    tags: ['halfling', 'heal'],
  },

  // ==================== HUMAN RACE TRAITS ====================
  {
    id: 'dual_talent',
    name: 'Dual Talent',
    description:
      'Your multifaceted nature allows you to improve two abilities simultaneously. You gain a +2 racial bonus to two ability scores of your choice instead of the normal +2 to one ability score.',
    shortDescription: '+2 to two ability scores instead of one',
    source: 'Advanced Race Guide',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Human',
    prerequisites: [{ type: 'race', raceName: 'Human' }],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.RACIAL,
        target: 'abilityScore.chosen1',
        value: 2,
        source: 'Dual Talent',
      },
      {
        type: 'special',
        bonusType: BonusType.RACIAL,
        target: 'abilityScore.chosen2',
        value: 2,
        source: 'Dual Talent',
      },
    ],
    choices: [
      {
        type: 'custom',
        label: 'Choose first ability score',
        options: ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma'],
        affectsEffects: true,
        effectTargetTemplate: 'ability.{choice}',
      },
      {
        type: 'custom',
        label: 'Choose second ability score',
        options: ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma'],
        affectsEffects: true,
        effectTargetTemplate: 'ability.{choice}',
      },
    ],
    tags: ['human', 'ability score', 'versatile'],
  },
  {
    id: 'heroic',
    name: 'Heroic',
    description:
      'You have a natural tendency toward heroism. Once per day, you may reroll a single ability check, attack roll, saving throw, or skill check. You must take the second result, even if it is worse.',
    shortDescription: '1/day reroll one d20 roll',
    source: 'Advanced Race Guide',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Human',
    prerequisites: [{ type: 'race', raceName: 'Human' }],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.TRAIT,
        target: 'special.reroll',
        value: 1,
        source: 'Heroic',
      },
    ],
    tags: ['human', 'reroll', 'luck'],
  },
  {
    id: 'mixed_heritage',
    name: 'Mixed Heritage',
    description:
      'Your diverse lineage gives you a broader perspective. You gain a +2 trait bonus on Diplomacy checks when dealing with non-humans and a +1 trait bonus on Will saving throws against charm effects.',
    shortDescription: '+2 Diplomacy vs non-humans; +1 Will vs charm',
    source: 'Advanced Race Guide',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Human',
    prerequisites: [{ type: 'race', raceName: 'Human' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.diplomacy',
        value: 2,
        source: 'Mixed Heritage',
        condition: { type: 'custom', params: {}, description: 'When dealing with non-humans' },
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.will',
        value: 1,
        source: 'Mixed Heritage',
        condition: { type: 'custom', params: {}, description: 'Against charm effects only' },
      },
    ],
    tags: ['human', 'diplomacy', 'will', 'charm'],
  },
  {
    id: 'awareness',
    name: 'Awareness',
    description:
      'You are always on the lookout for danger. You gain a +1 trait bonus on Perception checks and Perception is always a class skill for you.',
    shortDescription: '+1 Perception; class skill',
    source: 'Advanced Race Guide',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Human',
    prerequisites: [{ type: 'race', raceName: 'Human' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.perception',
        value: 1,
        source: 'Awareness',
      },
      {
        type: 'special',
        bonusType: BonusType.TRAIT,
        target: 'class_skill.perception',
        value: 1,
        source: 'Awareness',
      },
    ],
    tags: ['human', 'perception', 'class skill'],
  },

  // ==================== CHANGELING RACE TRAITS ====================
  {
    id: 'hag_magic',
    name: 'Hag Magic',
    description:
      'Some changelings develop a talent for the same dark magic as their hag mothers. You gain a +1 trait bonus on caster level checks to overcome spell resistance and a +1 trait bonus on the DC of any charm or compulsion spells you cast.',
    shortDescription: '+1 CL to overcome SR; +1 DC on charm/compulsion spells',
    source: 'Advanced Race Guide',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Changeling',
    prerequisites: [{ type: 'race', raceName: 'Changeling' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'special.spellPenetration',
        value: 1,
        source: 'Hag Magic',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'spellDC.charm',
        value: 1,
        source: 'Hag Magic',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'spellDC.compulsion',
        value: 1,
        source: 'Hag Magic',
      },
    ],
    tags: ['changeling', 'magic', 'spell resistance', 'charm', 'compulsion'],
  },
  {
    id: 'hulking_changeling',
    name: 'Hulking Changeling',
    description:
      "You inherited your hag mother's impressive stature. You gain a +1 trait bonus on damage rolls against foes at least one size category larger than you.",
    shortDescription: '+1 damage vs larger foes',
    source: 'Advanced Race Guide',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Changeling',
    prerequisites: [{ type: 'race', raceName: 'Changeling' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'damage.melee',
        value: 1,
        source: 'Hulking Changeling',
        condition: {
          type: 'custom',
          params: {},
          description: 'Against foes at least one size category larger',
        },
      },
    ],
    tags: ['changeling', 'damage', 'combat'],
  },

  // ==================== GRIPPLI RACE TRAITS ====================
  {
    id: 'toxic_skin',
    name: 'Toxic Skin',
    description:
      'Your skin secretes a mild toxin. Once per day as a swift action, you can envenom a weapon you are wielding. The poison deals 1d2 Dexterity damage (DC 10 + 1/2 your character level + your Constitution modifier; 1 save; frequency 1/round for 6 rounds).',
    shortDescription: '1/day envenom weapon with Dex-damaging toxin',
    source: 'Advanced Race Guide',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Grippli',
    prerequisites: [{ type: 'race', raceName: 'Grippli' }],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.TRAIT,
        target: 'ability.envenomWeapon',
        value: 1,
        source: 'Toxic Skin',
      },
    ],
    tags: ['grippli', 'poison', 'combat', 'swift action'],
  },
  {
    id: 'princely',
    name: 'Princely',
    description:
      'You are treated as minor nobility among your kin. You gain a +2 trait bonus on Diplomacy checks and Diplomacy is always a class skill for you.',
    shortDescription: '+2 Diplomacy; class skill',
    source: 'Advanced Race Guide',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Grippli',
    prerequisites: [{ type: 'race', raceName: 'Grippli' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.diplomacy',
        value: 2,
        source: 'Princely',
      },
      {
        type: 'special',
        bonusType: BonusType.TRAIT,
        target: 'class_skill.diplomacy',
        value: 1,
        source: 'Princely',
      },
    ],
    tags: ['grippli', 'diplomacy', 'social', 'class skill'],
  },

  // ==================== KITSUNE RACE TRAITS ====================
  {
    id: 'keen_kitsune',
    name: 'Keen Kitsune',
    description:
      'Your senses are sharper than most of your kind. You gain a +2 trait bonus on Perception checks.',
    shortDescription: '+2 Perception',
    source: 'Advanced Race Guide',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Kitsune',
    prerequisites: [{ type: 'race', raceName: 'Kitsune' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.perception',
        value: 2,
        source: 'Keen Kitsune',
      },
    ],
    tags: ['kitsune', 'perception'],
  },
  {
    id: 'kitsunes_guile',
    name: "Kitsune's Guile",
    description:
      'You are particularly adept at deception. You gain a +1 trait bonus on Bluff checks and a +1 trait bonus on the DC of any illusion spells you cast.',
    shortDescription: '+1 Bluff; +1 DC on illusion spells',
    source: 'Advanced Race Guide',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Kitsune',
    prerequisites: [{ type: 'race', raceName: 'Kitsune' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.bluff',
        value: 1,
        source: "Kitsune's Guile",
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'spellDC.illusion',
        value: 1,
        source: "Kitsune's Guile",
      },
    ],
    tags: ['kitsune', 'bluff', 'illusion', 'magic'],
  },

  // ==================== NAGAJI RACE TRAITS ====================
  {
    id: 'serpents_sense',
    name: "Serpent's Sense",
    description:
      'You have keen reptilian senses. You gain a +2 trait bonus on Perception checks and a +2 trait bonus on saving throws against poison.',
    shortDescription: '+2 Perception; +2 saves vs poison',
    source: 'Advanced Race Guide',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Nagaji',
    prerequisites: [{ type: 'race', raceName: 'Nagaji' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.perception',
        value: 2,
        source: "Serpent's Sense",
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.all',
        value: 2,
        source: "Serpent's Sense",
        condition: { type: 'custom', params: {}, description: 'Against poison only' },
      },
    ],
    tags: ['nagaji', 'perception', 'poison', 'save'],
  },
  {
    id: 'hypnotic_gaze',
    name: 'Hypnotic Gaze',
    description:
      'Your gaze is particularly compelling. Once per day, you can attempt to fascinate a single creature within 30 feet. The target must succeed on a Will save (DC 10 + 1/2 your character level + your Charisma modifier) or be fascinated for 1d4 rounds.',
    shortDescription: '1/day fascinate a creature within 30 ft (Will negates)',
    source: 'Advanced Race Guide',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Nagaji',
    prerequisites: [{ type: 'race', raceName: 'Nagaji' }],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.TRAIT,
        target: 'ability.fascinateGaze',
        value: 1,
        source: 'Hypnotic Gaze',
      },
    ],
    tags: ['nagaji', 'gaze', 'fascinate', 'enchantment'],
  },

  // ==================== SAMSARAN RACE TRAITS ====================
  {
    id: 'mystic_past_life',
    name: 'Mystic Past Life',
    description:
      "You can add spells from another spellcasting class to the spell list of your current class. You add a number of spells equal to 1 + your spellcasting class's key ability modifier to your class spell list. These spells must be the same type (arcane or divine) as the spellcasting class you are adding them to. Once chosen, these spells cannot be changed.",
    shortDescription: 'Add spells from another class to your spell list',
    source: 'Advanced Race Guide',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Samsaran',
    prerequisites: [{ type: 'race', raceName: 'Samsaran' }],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.TRAIT,
        target: 'spellList.expand',
        value: 1,
        source: 'Mystic Past Life',
      },
    ],
    tags: ['samsaran', 'spells', 'magic', 'popular'],
  },

  // ==================== STRIX RACE TRAITS ====================
  {
    id: 'suspicious_mindset',
    name: 'Suspicious Mindset',
    description:
      "Your people's long-standing distrust of outsiders has made you especially wary. You gain a +2 trait bonus on Sense Motive checks and a +1 trait bonus on Will saves against illusion spells.",
    shortDescription: '+2 Sense Motive; +1 Will vs illusions',
    source: 'Advanced Race Guide',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Strix',
    prerequisites: [{ type: 'race', raceName: 'Strix' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.senseMotive',
        value: 2,
        source: 'Suspicious Mindset',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.will',
        value: 1,
        source: 'Suspicious Mindset',
        condition: { type: 'custom', params: {}, description: 'Against illusion spells only' },
      },
    ],
    tags: ['strix', 'sense motive', 'will', 'illusion'],
  },
  {
    id: 'wing_clipped',
    name: 'Wing-Clipped',
    description:
      'You have learned to fight even when your wings are bound or damaged. You do not take penalties to attack rolls when your wings are pinned, entangled, or otherwise restricted, and you gain a +1 trait bonus on Escape Artist checks.',
    shortDescription: 'No penalties fighting with restricted wings; +1 Escape Artist',
    source: 'Advanced Race Guide',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Strix',
    prerequisites: [{ type: 'race', raceName: 'Strix' }],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.TRAIT,
        target: 'combat.restrictedWings',
        value: 0,
        source: 'Wing-Clipped',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.escapeArtist',
        value: 1,
        source: 'Wing-Clipped',
      },
    ],
    tags: ['strix', 'escape artist', 'wings', 'combat'],
  },

  // ==================== SULI RACE TRAITS ====================
  {
    id: 'elemental_assault_trait',
    name: 'Elemental Assault',
    description:
      'You can channel elemental power into your melee attacks. Once per day as a swift action, you can shroud your arms in acid, cold, electricity, or fire. Your melee attacks deal an extra 1d6 points of energy damage of the chosen type for 1 round.',
    shortDescription: '1/day add 1d6 energy damage to melee for 1 round',
    source: 'Advanced Race Guide',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Suli',
    prerequisites: [{ type: 'race', raceName: 'Suli' }],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.TRAIT,
        target: 'ability.elementalAssault',
        value: '1d6',
        source: 'Elemental Assault',
      },
    ],
    choices: [
      {
        type: 'custom',
        label: 'Choose energy type',
        options: ['Acid', 'Cold', 'Electricity', 'Fire'],
        affectsEffects: true,
        effectTargetTemplate: 'energy.{choice}',
      },
    ],
    tags: ['suli', 'elemental', 'energy damage', 'combat', 'swift action'],
  },

  // ==================== VANARA RACE TRAITS ====================
  {
    id: 'prehensile_tail_trait',
    name: 'Prehensile Tail',
    description:
      'Your tail is especially flexible and strong. You can use it to retrieve small, stowed objects on your person as a swift action.',
    shortDescription: 'Retrieve stowed items as swift action with tail',
    source: 'Advanced Race Guide',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Vanara',
    prerequisites: [{ type: 'race', raceName: 'Vanara' }],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.TRAIT,
        target: 'ability.prehensileTail',
        value: 1,
        source: 'Prehensile Tail',
      },
    ],
    tags: ['vanara', 'tail', 'swift action', 'item retrieval'],
  },
  {
    id: 'tree_stranger',
    name: 'Tree Stranger',
    description:
      'Despite your arboreal heritage, you have spent more time on the ground. You gain a +1 trait bonus on Knowledge (local) checks and Survival checks in urban environments, but take a -1 penalty on Climb checks.',
    shortDescription: '+1 Knowledge (local) and Survival in cities; -1 Climb',
    source: 'Advanced Race Guide',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Vanara',
    prerequisites: [{ type: 'race', raceName: 'Vanara' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledgeLocal',
        value: 1,
        source: 'Tree Stranger',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.survival',
        value: 1,
        source: 'Tree Stranger',
        condition: { type: 'custom', params: {}, description: 'In urban environments only' },
      },
      {
        type: 'penalty',
        bonusType: BonusType.TRAIT,
        target: 'skill.climb',
        value: -1,
        source: 'Tree Stranger',
      },
    ],
    tags: ['vanara', 'urban', 'knowledge', 'survival'],
  },

  // ==================== VISHKANYA RACE TRAITS ====================
  {
    id: 'subtle_appearance',
    name: 'Subtle Appearance',
    description:
      'You have learned to disguise your true nature. You gain a +2 trait bonus on Disguise checks to appear human and a +1 trait bonus on Bluff checks.',
    shortDescription: '+2 Disguise to appear human; +1 Bluff',
    source: 'Advanced Race Guide',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Vishkanya',
    prerequisites: [{ type: 'race', raceName: 'Vishkanya' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.disguise',
        value: 2,
        source: 'Subtle Appearance',
        condition: { type: 'custom', params: {}, description: 'To appear human' },
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.bluff',
        value: 1,
        source: 'Subtle Appearance',
      },
    ],
    tags: ['vishkanya', 'disguise', 'bluff', 'social'],
  },
  {
    id: 'toxic_arg2',
    name: 'Toxic',
    description:
      'Your body produces a potent venom. You gain an additional use per day of your vishkanya venom racial ability.',
    shortDescription: '+1 use/day of vishkanya venom',
    source: 'Advanced Race Guide',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Vishkanya',
    prerequisites: [{ type: 'race', raceName: 'Vishkanya' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'ability.venomUses',
        value: 1,
        source: 'Toxic',
      },
    ],
    tags: ['vishkanya', 'poison', 'venom'],
  },
];
