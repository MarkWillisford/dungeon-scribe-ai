import { BonusType } from '@/types/base';
import type { TraitDefinition } from '@/types/traits';

export const RELIGION_TRAITS_2: TraitDefinition[] = [
  // ==================== GORUM ====================
  {
    id: 'veteran_of_battle_gor',
    name: 'Veteran of Battle',
    description:
      'You have fought in several battles, and you can feel the ebb and flow of combat. You gain a +1 trait bonus on initiative checks, and if you are able to act during a surprise round, you may draw a weapon (but not a potion or magic item) as a free action during that round.',
    shortDescription: '+1 initiative; draw weapon free in surprise round',
    source: 'Ultimate Campaign',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Gorum',
    prerequisites: [{ type: 'deity', deityName: 'Gorum' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'initiative',
        value: 1,
        source: 'Veteran of Battle',
      },
    ],
    tags: ['initiative', 'combat', 'weapon'],
  },
  {
    id: 'iron_grip',
    name: 'Iron Grip',
    description:
      'You and your weapon are practically one. You gain a +2 trait bonus to your CMD against disarm attempts.',
    shortDescription: '+2 CMD vs disarm',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Gorum',
    prerequisites: [{ type: 'deity', deityName: 'Gorum' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'cmd.disarm',
        value: 2,
        source: 'Iron Grip',
      },
    ],
    tags: ['cmd', 'disarm', 'weapon'],
  },
  {
    id: 'wrecking_wrath',
    name: 'Wrecking Wrath',
    description:
      'Once per day, after successfully hitting a foe with a melee weapon, you can add your Strength modifier to the damage roll a second time (your Strength modifier is not doubled if you are using a two-handed weapon). Doing so has a 25% chance of giving your weapon the broken condition.',
    shortDescription: '1/day add Str mod to damage again; 25% chance weapon breaks',
    source: 'Ultimate Campaign',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Gorum',
    prerequisites: [{ type: 'deity', deityName: 'Gorum' }],
    effects: [],
    tags: ['damage', 'strength', 'melee'],
  },
  {
    id: 'furious_vengeance_r2',
    name: 'Furious Vengeance',
    description:
      'Once per day as an immediate action, you gain a +1 trait bonus on a single attack roll. In addition, if the target has damaged you within the last round, you deal 1 additional point of damage on a successful hit.',
    shortDescription: '1/day +1 attack; +1 damage if target hurt you last round',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Gorum',
    prerequisites: [{ type: 'deity', deityName: 'Gorum' }],
    effects: [],
    tags: ['attack', 'damage', 'vengeance'],
  },
  {
    id: 'strengths_fanfare_r2',
    name: "Strength's Fanfare",
    description:
      'When you are the subject of any sonic effect that grants a morale bonus on attack or damage rolls, you also gain a +1 trait bonus on Strength-based skill checks; on combat maneuver checks to bull rush, grapple, and reposition; and to your CMD against those combat maneuvers.',
    shortDescription:
      '+1 Str skill checks and CMB/CMD for bull rush/grapple/reposition when under morale sonic bonus',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Gorum',
    prerequisites: [{ type: 'deity', deityName: 'Gorum' }],
    effects: [],
    tags: ['strength', 'cmb', 'cmd', 'sonic'],
  },
  {
    id: 'the_flexing_arm_r2',
    name: 'The Flexing Arm',
    description:
      'You are practiced at using physical might to escape your bonds. You can use Strength instead of Dexterity as your base ability for Escape Artist skill checks to free yourself from bondage. Additionally, you gain a +1 trait bonus on such Escape Artist checks.',
    shortDescription: 'Use Str for Escape Artist; +1 on those checks',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Gorum',
    prerequisites: [{ type: 'deity', deityName: 'Gorum' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.escape_artist',
        value: 1,
        source: 'The Flexing Arm',
        condition: {
          type: 'custom',
          params: {},
          description: 'When using Strength for Escape Artist to free yourself from bondage',
        },
      },
    ],
    tags: ['escape_artist', 'strength', 'bonds'],
  },
  {
    id: 'sacred_smasher',
    name: 'Sacred Smasher',
    description:
      'Your love of carnage extends even to the defenseless, inanimate objects around you. Whenever you make an attempt to break an object, you receive a +2 trait bonus on your Strength check.',
    shortDescription: '+2 Strength checks to break objects',
    source: 'Orcs of Golarion',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Gorum',
    prerequisites: [{ type: 'deity', deityName: 'Gorum' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'check.strength.break_object',
        value: 2,
        source: 'Sacred Smasher',
        condition: {
          type: 'custom',
          params: {},
          description: 'When attempting to break an object',
        },
      },
    ],
    tags: ['strength', 'objects', 'destruction'],
  },

  // ==================== ACHAEKEK ====================
  {
    id: 'always_threatening',
    name: 'Always Threatening',
    description:
      'You are fast on the draw. As a move action, you can draw a light, concealed weapon for which you have Weapon Focus. If you have the Quick Draw feat, drawing this weapon is a free action.',
    shortDescription: 'Draw concealed light weapon as move action (free with Quick Draw)',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Achaekek',
    prerequisites: [{ type: 'deity', deityName: 'Achaekek' }],
    effects: [],
    tags: ['weapon', 'draw', 'concealed'],
  },
  {
    id: 'fatal_trapper_r2',
    name: 'Fatal Trapper',
    description:
      'Your patron grants you expertise at creating or disabling traps. You gain a +1 trait bonus on Craft (traps) checks, as well as a +1 trait bonus on Disable Device checks to disable traps.',
    shortDescription: '+1 Craft (traps); +1 Disable Device vs traps',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Achaekek',
    prerequisites: [{ type: 'deity', deityName: 'Achaekek' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.craft_traps',
        value: 1,
        source: 'Fatal Trapper',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.disable_device',
        value: 1,
        source: 'Fatal Trapper',
        condition: { type: 'custom', params: {}, description: 'To disable traps' },
      },
    ],
    tags: ['traps', 'craft', 'disable_device'],
  },
  {
    id: 'opportune_slayer',
    name: 'Opportune Slayer',
    description:
      'You gain a +2 trait bonus on damage rolls against those you hit with attacks of opportunity.',
    shortDescription: '+2 damage on attacks of opportunity',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Achaekek',
    prerequisites: [{ type: 'deity', deityName: 'Achaekek' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'damage.melee',
        value: 2,
        source: 'Opportune Slayer',
        condition: { type: 'custom', params: {}, description: 'On attacks of opportunity' },
      },
    ],
    tags: ['damage', 'attack_of_opportunity'],
  },
  {
    id: 'deep_wounding',
    name: 'Deep Wounding',
    description:
      'When you deal bleed damage with a melee weapon, a successful DC 20 Heal check is required to stop the bleed damage. Magical healing stops the damage as normal.',
    shortDescription: 'Bleed damage requires DC 20 Heal to stop',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Achaekek',
    prerequisites: [{ type: 'deity', deityName: 'Achaekek' }],
    effects: [],
    tags: ['bleed', 'melee', 'assassination'],
  },
  {
    id: 'poisonous_slayer',
    name: 'Poisonous Slayer',
    description:
      'You know the secret of plunging a poisoned weapon in just the right spot. You gain a +1 trait bonus on attack rolls when you are wielding a weapon treated with poison.',
    shortDescription: '+1 attack rolls with poisoned weapons',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Achaekek',
    prerequisites: [{ type: 'deity', deityName: 'Achaekek' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'attack.melee',
        value: 1,
        source: 'Poisonous Slayer',
        condition: {
          type: 'custom',
          params: {},
          description: 'When wielding a weapon treated with poison',
        },
      },
    ],
    tags: ['attack', 'poison', 'weapon'],
  },

  // ==================== BRIGH ====================
  {
    id: 'nimble_fingers_keen_mind',
    name: 'Nimble Fingers, Keen Mind',
    description:
      'You have studied clockwork mechanisms and other mechanical wonders. You gain a +1 trait bonus on Disable Device checks, and Disable Device is a class skill for you.',
    shortDescription: '+1 Disable Device; class skill',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Brigh',
    prerequisites: [{ type: 'deity', deityName: 'Brigh' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.disable_device',
        value: 1,
        source: 'Nimble Fingers, Keen Mind',
      },
    ],
    tags: ['disable_device', 'clockwork', 'craft'],
  },
  {
    id: 'structural_knowledge_r2',
    name: 'Structural Knowledge',
    description:
      'You are blessed with an insight into architecture and artifice. You gain a +1 trait bonus on Knowledge (engineering) checks, and Knowledge (engineering) is a class skill for you.',
    shortDescription: '+1 Knowledge (engineering); class skill',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Brigh',
    prerequisites: [{ type: 'deity', deityName: 'Brigh' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_engineering',
        value: 1,
        source: 'Structural Knowledge',
      },
    ],
    tags: ['knowledge_engineering', 'architecture', 'craft'],
  },

  // ==================== GROETUS ====================
  {
    id: 'broken_mind',
    name: 'Broken Mind',
    description:
      "You're used to living with your own madness. You gain a +2 trait bonus on saving throws against madness and confusion effects.",
    shortDescription: '+2 saves vs madness and confusion',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Groetus',
    prerequisites: [{ type: 'deity', deityName: 'Groetus' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.all',
        value: 2,
        source: 'Broken Mind',
        condition: {
          type: 'custom',
          params: {},
          description: 'Against madness and confusion effects',
        },
      },
    ],
    tags: ['save', 'madness', 'confusion'],
  },
  {
    id: 'hatred_of_the_gods',
    name: 'Hatred of the Gods',
    description: 'You gain a +1 trait bonus on saving throws made against divine spells.',
    shortDescription: '+1 saves vs divine spells',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Groetus',
    prerequisites: [{ type: 'deity', deityName: 'Groetus' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.all',
        value: 1,
        source: 'Hatred of the Gods',
        condition: { type: 'custom', params: {}, description: 'Against divine spells' },
      },
    ],
    tags: ['save', 'divine', 'spells'],
  },
  {
    id: 'unhinged_mentality',
    name: 'Unhinged Mentality',
    description:
      'Your goddess-granted madness protects you. You gain a +2 trait bonus on saves against confusion, insanity, and fear effects.',
    shortDescription: '+2 saves vs confusion, insanity, and fear',
    source: 'Faiths of Corruption',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Groetus',
    prerequisites: [{ type: 'deity', deityName: 'Groetus' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.all',
        value: 2,
        source: 'Unhinged Mentality',
        condition: {
          type: 'custom',
          params: {},
          description: 'Against confusion, insanity, and fear effects',
        },
      },
    ],
    tags: ['save', 'fear', 'madness', 'confusion'],
  },

  // ==================== MILANI ====================
  {
    id: 'inspiring_leader',
    name: 'Inspiring Leader',
    description:
      'You have an innate talent for inspiring those around you. You gain a +1 trait bonus on Diplomacy checks, and Diplomacy is a class skill for you.',
    shortDescription: '+1 Diplomacy; class skill',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Milani',
    prerequisites: [{ type: 'deity', deityName: 'Milani' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.diplomacy',
        value: 1,
        source: 'Inspiring Leader',
      },
    ],
    tags: ['diplomacy', 'leadership', 'inspire'],
  },
  {
    id: 'river_freedom_r2',
    name: 'River Freedom',
    description:
      'While touching flowing water, you gain a +2 trait bonus on saving throws against effects that would hamper your movement.',
    shortDescription: '+2 saves vs movement-hampering effects while touching flowing water',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Milani',
    prerequisites: [{ type: 'deity', deityName: 'Milani' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.all',
        value: 2,
        source: 'River Freedom',
        condition: {
          type: 'custom',
          params: {},
          description: 'Against movement-hampering effects while touching flowing water',
        },
      },
    ],
    tags: ['save', 'movement', 'freedom', 'water'],
  },
  {
    id: 'split_second_defense',
    name: 'Split-Second Defense',
    description:
      "When you are the target of an attack by an opponent that is flanking you, as an immediate action once per day you can foil that opponent's attack. For that attack, the opponent does not gain any of the bonuses or effects that are associated with flanking.",
    shortDescription: '1/day negate flanking bonuses on one attack as immediate action',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Milani',
    prerequisites: [{ type: 'deity', deityName: 'Milani' }],
    effects: [],
    tags: ['flanking', 'defense', 'immediate_action'],
  },

  // ==================== SIVANAH ====================
  {
    id: 'veils_upon_veils',
    name: 'Veils upon Veils',
    description: 'Once per day when casting an illusion spell, you can do so at +1 caster level.',
    shortDescription: '1/day cast illusion spell at +1 caster level',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Sivanah',
    prerequisites: [{ type: 'deity', deityName: 'Sivanah' }],
    effects: [],
    tags: ['illusion', 'caster_level', 'spells'],
  },
  {
    id: 'seer_of_reality',
    name: 'Seer of Reality',
    description:
      'You have a deep understanding of the world around you, and are more perceptive about what belongs and what does not. You gain a +2 trait bonus on saving throws against illusion magic.',
    shortDescription: '+2 saves vs illusion magic',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Sivanah',
    prerequisites: [{ type: 'deity', deityName: 'Sivanah' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.all',
        value: 2,
        source: 'Seer of Reality',
        condition: { type: 'custom', params: {}, description: 'Against illusion magic' },
      },
    ],
    tags: ['save', 'illusion'],
  },
  {
    id: 'strip_the_veils',
    name: 'Strip the Veils',
    description:
      'You are unusually perceptive when dealing with others. You gain a +1 trait bonus on Sense Motive checks, and Sense Motive is a class skill for you.',
    shortDescription: '+1 Sense Motive; class skill',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Sivanah',
    prerequisites: [{ type: 'deity', deityName: 'Sivanah' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.sense_motive',
        value: 1,
        source: 'Strip the Veils',
      },
    ],
    tags: ['sense_motive', 'perception', 'illusion'],
  },
  {
    id: 'shadow_caster',
    name: 'Shadow Caster',
    description:
      'You gain a +4 trait bonus on concentration checks when casting spells with the darkness, pain, or shadow descriptor.',
    shortDescription: '+4 concentration for darkness/pain/shadow descriptor spells',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Sivanah',
    prerequisites: [{ type: 'deity', deityName: 'Sivanah' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'spell.concentration',
        value: 4,
        source: 'Shadow Caster',
        condition: {
          type: 'custom',
          params: {},
          description: 'When casting spells with the darkness, pain, or shadow descriptor',
        },
      },
    ],
    tags: ['concentration', 'shadow', 'darkness', 'spells'],
  },

  // ==================== URGATHOA (extra) ====================
  {
    id: 'deathspeaker',
    name: 'Deathspeaker',
    description:
      'You gain a +2 trait bonus on Diplomacy checks when dealing with undead, as well as a +2 trait bonus on Charisma checks to influence undead.',
    shortDescription: '+2 Diplomacy and Cha checks with undead',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Urgathoa',
    prerequisites: [{ type: 'deity', deityName: 'Urgathoa' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.diplomacy',
        value: 2,
        source: 'Deathspeaker',
        condition: { type: 'custom', params: {}, description: 'When dealing with undead' },
      },
    ],
    tags: ['undead', 'diplomacy', 'charisma'],
  },
  {
    id: 'corpse_hunter',
    name: 'Corpse Hunter',
    description:
      'You have dedicated yourself to the destruction of undead. You gain a +1 trait bonus on attacks made against undead.',
    shortDescription: '+1 attack vs undead',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Urgathoa',
    prerequisites: [{ type: 'deity', deityName: 'Urgathoa' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'attack.melee',
        value: 1,
        source: 'Corpse Hunter',
        condition: { type: 'custom', params: {}, description: 'Against undead' },
      },
    ],
    tags: ['attack', 'undead', 'hunting'],
  },
  {
    id: 'inoculated',
    name: 'Inoculated',
    description:
      'You have regular exposure to plagues. You gain a +2 trait bonus on saving throws against disease effects.',
    shortDescription: '+2 saves vs disease',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Urgathoa',
    prerequisites: [{ type: 'deity', deityName: 'Urgathoa' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.all',
        value: 2,
        source: 'Inoculated',
        condition: { type: 'custom', params: {}, description: 'Against disease effects' },
      },
    ],
    tags: ['save', 'disease', 'plague'],
  },
  {
    id: 'diseased_heart_r2',
    name: 'Diseased Heart',
    description:
      'Your work with infections has infused your spirit with disease. Any creature that performs a blood drain or swallow whole attack on you must succeed at a Fortitude saving throw (DC = 10 + your character level + your Constitution modifier) or become infected with filth fever.',
    shortDescription: 'Creatures draining your blood or swallowing you risk filth fever',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Urgathoa',
    prerequisites: [{ type: 'deity', deityName: 'Urgathoa' }],
    effects: [],
    tags: ['disease', 'filth_fever', 'undead'],
  },

  // ==================== APSU ====================
  {
    id: 'dragon_tracker_r2',
    name: 'Dragon Tracker',
    description:
      "You have been taught to identify the subtle and not-so-subtle signs of a dragon's passage. You gain a +2 trait bonus on Survival checks to track dragons and can track dragons untrained if the DC is 15 or lower.",
    shortDescription: '+2 Survival to track dragons; untrained tracking if DC 15 or lower',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Apsu',
    prerequisites: [{ type: 'deity', deityName: 'Apsu' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.survival',
        value: 2,
        source: 'Dragon Tracker',
        condition: { type: 'custom', params: {}, description: 'When tracking dragons' },
      },
    ],
    tags: ['survival', 'tracking', 'dragons'],
  },
  {
    id: 'dragonslayer_r2',
    name: 'Dragonslayer',
    description: 'You gain a +1 trait bonus on attack rolls against creatures of the dragon type.',
    shortDescription: '+1 attack vs dragons',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Apsu',
    prerequisites: [{ type: 'deity', deityName: 'Apsu' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'attack.melee',
        value: 1,
        source: 'Dragonslayer',
        condition: {
          type: 'custom',
          params: {},
          description: 'Against creatures of the dragon type',
        },
      },
    ],
    tags: ['attack', 'dragons'],
  },
  {
    id: 'scaly_ally',
    name: 'Scaly Ally',
    description:
      'You gain a +2 trait bonus on Diplomacy checks involving reptiles or those of draconic blood, whether they are good-aligned or not.',
    shortDescription: '+2 Diplomacy with reptiles and draconic creatures',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Apsu',
    prerequisites: [{ type: 'deity', deityName: 'Apsu' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.diplomacy',
        value: 2,
        source: 'Scaly Ally',
        condition: {
          type: 'custom',
          params: {},
          description: 'With reptiles or creatures of draconic blood',
        },
      },
    ],
    tags: ['diplomacy', 'dragons', 'reptiles'],
  },

  // ==================== CAYDEN CAILEAN (extra) ====================
  {
    id: 'adventurous_imbiber',
    name: 'Adventurous Imbiber',
    description:
      "You've never been afraid of good, strong drink, and that has prepared you for the perils of more dangerous substances. You gain a +1 trait bonus on saving throws against poison.",
    shortDescription: '+1 saves vs poison',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Cayden Cailean',
    prerequisites: [{ type: 'deity', deityName: 'Cayden Cailean' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.all',
        value: 1,
        source: 'Adventurous Imbiber',
        condition: { type: 'custom', params: {}, description: 'Against poison' },
      },
    ],
    tags: ['save', 'poison', 'drink'],
  },
  {
    id: 'reckless_luck_r2',
    name: 'Reckless Luck',
    description:
      'When you make a charge attack in the surprise round or first round of combat, you gain a +2 trait bonus to your AC for 1 round.',
    shortDescription: '+2 AC for 1 round when charging in surprise/first round',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Cayden Cailean',
    prerequisites: [{ type: 'deity', deityName: 'Cayden Cailean' }],
    effects: [],
    tags: ['ac', 'charge', 'luck'],
  },
  {
    id: 'thrill_seeker',
    name: 'Thrill-Seeker',
    description:
      'Your deity has blessed you not just with a love of taking chances, but also the fortune to come out of such risky situations unscathed. Once per day before you make an Acrobatics check, you may roll twice and take the better result.',
    shortDescription: '1/day roll Acrobatics twice and take better result',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Cayden Cailean',
    prerequisites: [{ type: 'deity', deityName: 'Cayden Cailean' }],
    effects: [],
    tags: ['acrobatics', 'luck', 'risk'],
  },
  {
    id: 'deck_fighter',
    name: 'Deck Fighter',
    description: 'You gain a +1 trait bonus on attacks of opportunity when fighting aboard a ship.',
    shortDescription: '+1 attacks of opportunity while aboard a ship',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Cayden Cailean',
    prerequisites: [{ type: 'deity', deityName: 'Cayden Cailean' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'attack.melee',
        value: 1,
        source: 'Deck Fighter',
        condition: {
          type: 'custom',
          params: {},
          description: 'On attacks of opportunity when fighting aboard a ship',
        },
      },
    ],
    tags: ['attack', 'ship', 'attack_of_opportunity'],
  },

  // ==================== NETHYS (extra) ====================
  {
    id: 'magics_might_r2',
    name: "Magic's Might",
    description:
      'Your natural affinity for magic allows you to affect even those who resist it. You gain a +1 trait bonus on caster level checks to overcome spell resistance.',
    shortDescription: '+1 caster level checks to overcome spell resistance',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Nethys',
    prerequisites: [{ type: 'deity', deityName: 'Nethys' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'caster_level_check.spell_resistance',
        value: 1,
        source: "Magic's Might",
      },
    ],
    tags: ['spell_resistance', 'caster_level', 'magic'],
  },
  {
    id: 'arcane_depth',
    name: 'Arcane Depth',
    description:
      'You have studied the great masters of spellcraft, and your knowledge is exceptional. You gain a +1 trait bonus on Spellcraft checks and a +2 trait bonus on Knowledge (arcana) checks.',
    shortDescription: '+1 Spellcraft; +2 Knowledge (arcana)',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Nethys',
    prerequisites: [{ type: 'deity', deityName: 'Nethys' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.spellcraft',
        value: 1,
        source: 'Arcane Depth',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_arcana',
        value: 2,
        source: 'Arcane Depth',
      },
    ],
    tags: ['spellcraft', 'knowledge_arcana', 'magic'],
  },
  {
    id: 'shaper_of_reality_r2',
    name: 'Shaper of Reality',
    description:
      'Once per day, you can cast either a conjuration spell or a transmutation spell at +1 caster level.',
    shortDescription: '1/day cast conjuration or transmutation spell at +1 caster level',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Nethys',
    prerequisites: [{ type: 'deity', deityName: 'Nethys' }],
    effects: [],
    tags: ['caster_level', 'transmutation', 'conjuration'],
  },

  // ==================== PHARASMA (extra) ====================
  {
    id: 'denial_of_fate',
    name: 'Denial of Fate',
    description:
      'Once per day while you are below 0 hit points, at the start of your turn you can choose to stabilize without needing to succeed at a Constitution check.',
    shortDescription: '1/day auto-stabilize when below 0 hp',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Pharasma',
    prerequisites: [{ type: 'deity', deityName: 'Pharasma' }],
    effects: [],
    tags: ['stabilize', 'death', 'survival'],
  },
  {
    id: 'gifted_medium_r2',
    name: 'Gifted Medium',
    description:
      'You gain a +1 trait bonus on your caster level when using divinations to reach out to other entities, such as commune or speak with dead.',
    shortDescription: '+1 caster level for commune/speak with dead type divinations',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Pharasma',
    prerequisites: [{ type: 'deity', deityName: 'Pharasma' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'spell.caster_level',
        value: 1,
        source: 'Gifted Medium',
        condition: {
          type: 'custom',
          params: {},
          description: 'When using divinations to reach out to other entities',
        },
      },
    ],
    tags: ['caster_level', 'divination', 'spirits'],
  },
  {
    id: 'stabilizing_touch',
    name: 'Stabilizing Touch',
    description:
      'Once per day, you can use stabilize as a spell-like ability, but with a range of touch.',
    shortDescription: '1/day use stabilize as touch spell-like ability',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Pharasma',
    prerequisites: [{ type: 'deity', deityName: 'Pharasma' }],
    effects: [],
    tags: ['stabilize', 'touch', 'healing'],
  },
  {
    id: 'undead_slayer_pha',
    name: 'Undead Slayer',
    description:
      'Instructed at a young age in the tenets of the faith of the Goddess of Souls, you view the undead as abominations that must be destroyed so their souls can journey beyond to be judged. You gain a +1 trait bonus on weapon damage rolls against undead.',
    shortDescription: '+1 weapon damage vs undead',
    source: 'Ultimate Campaign',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Pharasma',
    prerequisites: [{ type: 'deity', deityName: 'Pharasma' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'damage.weapon',
        value: 1,
        source: 'Undead Slayer',
        condition: { type: 'custom', params: {}, description: 'Against undead' },
      },
    ],
    tags: ['damage', 'undead'],
  },
  {
    id: 'spirit_guide',
    name: 'Spirit Guide',
    description:
      'As someone who has performed or observed funeral rites for a wide variety of people, you have a basic understanding of many different religions. You gain a +2 trait bonus on Knowledge (religion) checks, and Knowledge (religion) is a class skill for you.',
    shortDescription: '+2 Knowledge (religion); class skill',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Pharasma',
    prerequisites: [{ type: 'deity', deityName: 'Pharasma' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_religion',
        value: 2,
        source: 'Spirit Guide',
      },
    ],
    tags: ['knowledge_religion', 'death', 'funeral'],
  },

  // ==================== GOZREH (extra) ====================
  {
    id: 'natural_philosopher',
    name: 'Natural Philosopher',
    description:
      'You study the outdoors, and leave books for dusty libraries. You can attempt Knowledge (geography) and Knowledge (nature) checks as if you were trained.',
    shortDescription: 'Attempt Knowledge (geography) and Knowledge (nature) untrained',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Gozreh',
    prerequisites: [{ type: 'deity', deityName: 'Gozreh' }],
    effects: [],
    tags: ['knowledge_geography', 'knowledge_nature', 'nature'],
  },
  {
    id: 'elemental_resilience_r2',
    name: 'Elemental Resilience',
    description:
      'Choose one of the following energy types: acid, cold, electricity, or fire. You gain a +1 trait bonus on saving throws against spells with that descriptor.',
    shortDescription: '+1 saves vs spells of one chosen energy type',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Gozreh',
    prerequisites: [{ type: 'deity', deityName: 'Gozreh' }],
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
          description:
            'Against spells of the chosen energy type (acid, cold, electricity, or fire)',
        },
      },
    ],
    tags: ['save', 'energy', 'elements'],
  },
  {
    id: 'strong_swimmer',
    name: 'Strong Swimmer',
    description:
      'Your faith gives you the confidence to swim without fear. You gain a +2 trait bonus on all Swim checks, and can hold your breath for an extra 2 rounds when underwater.',
    shortDescription: '+2 Swim; hold breath 2 extra rounds',
    source: 'Faiths of Balance',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Gozreh',
    prerequisites: [{ type: 'deity', deityName: 'Gozreh' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.swim',
        value: 2,
        source: 'Strong Swimmer',
      },
    ],
    tags: ['swim', 'water', 'breath'],
  },

  // ==================== IRORI (extra) ====================
  {
    id: 'lessons_of_faith',
    name: 'Lessons of Faith',
    description:
      'Once per day before the result of a saving throw is known, you can reroll that saving throw. You must take the second result even if it is worse.',
    shortDescription: '1/day reroll a saving throw before result is revealed',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Irori',
    prerequisites: [{ type: 'deity', deityName: 'Irori' }],
    effects: [],
    tags: ['save', 'reroll', 'discipline'],
  },
  {
    id: 'thirst_for_knowledge',
    name: 'Thirst for Knowledge',
    description:
      "You have a need to bring old knowledge into the light, no matter what language it's written in. You gain a +1 trait bonus on Linguistics checks, and Linguistics is a class skill for you.",
    shortDescription: '+1 Linguistics; class skill',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Irori',
    prerequisites: [{ type: 'deity', deityName: 'Irori' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.linguistics',
        value: 1,
        source: 'Thirst for Knowledge',
      },
    ],
    tags: ['linguistics', 'knowledge', 'language'],
  },

  // ==================== LAMASHTU (extra) ====================
  {
    id: 'mothers_rage',
    name: "Mother's Rage",
    description:
      'The blood of the beast runs thick in your veins. You gain a +1 trait bonus on Survival checks and treat your caster level as +1 higher when summoning creatures.',
    shortDescription: '+1 Survival; +1 caster level when summoning',
    source: 'Orcs of Golarion',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Lamashtu',
    prerequisites: [{ type: 'deity', deityName: 'Lamashtu' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.survival',
        value: 1,
        source: "Mother's Rage",
      },
    ],
    tags: ['survival', 'summoning', 'bestial'],
  },
  {
    id: 'unspeakable_bond_r2',
    name: 'Unspeakable Bond',
    description:
      'You are an ally of the unclean creatures of the world. You gain a +2 trait bonus on Diplomacy checks when dealing with creatures of the aberration type.',
    shortDescription: '+2 Diplomacy with aberrations',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Lamashtu',
    prerequisites: [{ type: 'deity', deityName: 'Lamashtu' }],
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
          description: 'When dealing with aberration-type creatures',
        },
      },
    ],
    tags: ['diplomacy', 'aberrations', 'monsters'],
  },

  // ==================== NORGORBER (extra) ====================
  {
    id: 'liars_tongue',
    name: "Liar's Tongue",
    description:
      'Thanks to your friendly mien and sly tongue, your lies are often believed. You gain a +1 trait bonus on Bluff checks, and Bluff is a class skill for you.',
    shortDescription: '+1 Bluff; class skill',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Norgorber',
    prerequisites: [{ type: 'deity', deityName: 'Norgorber' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.bluff',
        value: 1,
        source: "Liar's Tongue",
      },
    ],
    tags: ['bluff', 'deception', 'lies'],
  },
  {
    id: 'shadow_whispers_nor',
    name: 'Shadow Whispers',
    description:
      "You have a penchant for knowing others' secrets. You gain a +1 trait bonus on Knowledge (local) checks and a +2 trait bonus on Intimidate checks made to demoralize opponents.",
    shortDescription: '+1 Knowledge (local); +2 Intimidate to demoralize',
    source: 'Ultimate Campaign',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Norgorber',
    prerequisites: [{ type: 'deity', deityName: 'Norgorber' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_local',
        value: 1,
        source: 'Shadow Whispers',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.intimidate',
        value: 2,
        source: 'Shadow Whispers',
        condition: { type: 'custom', params: {}, description: 'When demoralizing opponents' },
      },
    ],
    tags: ['knowledge_local', 'intimidate', 'secrets'],
  },

  // ==================== ASMODEUS (extra) ====================
  {
    id: 'flames_of_hell_r2',
    name: 'Flames of Hell',
    description:
      'Your hellish bond strengthens your ability to channel powers of the divine. Add 1 to the DC of saving throws made to resist the effects of your channel energy ability.',
    shortDescription: '+1 DC on channel energy saves',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Asmodeus',
    prerequisites: [{ type: 'deity', deityName: 'Asmodeus' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'channel_energy.dc',
        value: 1,
        source: 'Flames of Hell',
      },
    ],
    tags: ['channel_energy', 'dc', 'infernal'],
  },

  // ==================== EMPYREAL LORDS ====================
  {
    id: 'empyreal_focus',
    name: 'Empyreal Focus',
    description:
      'Once per day, before you attempt a skill check, you gain a +2 trait bonus on that skill check.',
    shortDescription: '1/day +2 on one skill check',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Empyreal Lord',
    prerequisites: [{ type: 'special', description: 'Must worship an empyreal lord' }],
    effects: [],
    tags: ['skill', 'bonus', 'divine'],
  },
  {
    id: 'light_bringer',
    name: 'Light-Bringer',
    description:
      'You were born sheathed in light. Once per day, you can use light as a spell-like ability. Your caster level is equal to your character level.',
    shortDescription: '1/day use light as spell-like ability',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Empyreal Lord',
    prerequisites: [{ type: 'special', description: 'Must worship an empyreal lord' }],
    effects: [],
    tags: ['light', 'spell_like', 'divine'],
  },
  {
    id: 'a_shining_beacon',
    name: 'A Shining Beacon',
    description:
      "You carry a burning hatred in your heart for all things demonic, and have studied their weaknesses carefully. You deal an amount of additional damage equal to your weapon's critical hit modifier when you score a successful critical hit with a weapon against a demon.",
    shortDescription: 'Extra damage = weapon crit modifier on critical hits vs demons',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Empyreal Lord',
    prerequisites: [{ type: 'special', description: 'Must worship an empyreal lord' }],
    effects: [],
    tags: ['critical', 'damage', 'demons'],
  },

  // ==================== ABADAR (extra) ====================
  {
    id: 'eye_for_quality',
    name: 'Eye for Quality',
    description:
      "You gain a +1 trait bonus on Appraise checks, you don't suffer the effects of failing such checks by 5 or more, and Appraise is a class skill for you.",
    shortDescription: '+1 Appraise; class skill; no penalty for failing by 5+',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Abadar',
    prerequisites: [{ type: 'deity', deityName: 'Abadar' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.appraise',
        value: 1,
        source: 'Eye for Quality',
      },
    ],
    tags: ['appraise', 'commerce', 'quality'],
  },
  {
    id: 'illuminator',
    name: 'Illuminator',
    description:
      'Your speeches take on a fiery eloquence. You gain a +2 trait bonus on Diplomacy checks, and Diplomacy is a class skill for you.',
    shortDescription: '+2 Diplomacy; class skill',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Abadar',
    prerequisites: [{ type: 'deity', deityName: 'Abadar' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.diplomacy',
        value: 2,
        source: 'Illuminator',
      },
    ],
    tags: ['diplomacy', 'speech', 'law'],
  },

  // ==================== CALISTRIA (extra) ====================
  {
    id: 'opportunistic',
    name: 'Opportunistic',
    description:
      'You have learned to recognize openings that your foes leave. You gain a +1 trait bonus on attacks of opportunity when using a dagger, sword, or whip.',
    shortDescription: '+1 attacks of opportunity with dagger, sword, or whip',
    source: 'Faiths of Balance',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Calistria',
    prerequisites: [{ type: 'deity', deityName: 'Calistria' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'attack.melee',
        value: 1,
        source: 'Opportunistic',
        condition: {
          type: 'weapon_type',
          params: { weapon: 'dagger, sword, or whip' },
          description: 'On attacks of opportunity when using a dagger, sword, or whip',
        },
      },
    ],
    tags: ['attack', 'attack_of_opportunity', 'weapon'],
  },

  // ==================== DESNA (extra) ====================
  {
    id: 'agent_of_chance_r2',
    name: 'Agent of Chance',
    description:
      'Once per day, you can allow an adjacent ally to reroll a skill check as an immediate action before the result is revealed. The ally must take the second roll, even if it is worse.',
    shortDescription: '1/day let adjacent ally reroll a skill check before result is revealed',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Desna',
    prerequisites: [{ type: 'deity', deityName: 'Desna' }],
    effects: [],
    tags: ['reroll', 'skill', 'luck', 'ally'],
  },
  {
    id: 'accident_resistant_r2',
    name: 'Accident Resistant',
    description:
      'You gain a +2 trait bonus on Reflex saves when denied your Dexterity bonus or during a surprise round.',
    shortDescription: '+2 Reflex saves when flat-footed or in surprise round',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Desna',
    prerequisites: [{ type: 'deity', deityName: 'Desna' }],
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
          description: 'When denied Dexterity bonus or during a surprise round',
        },
      },
    ],
    tags: ['save', 'reflex', 'flat-footed', 'surprise'],
  },

  // ==================== ROVAGUG (extra) ====================
  {
    id: 'bestial_wrath',
    name: 'Bestial Wrath',
    description: 'You gain a +2 trait bonus on critical confirmation rolls.',
    shortDescription: '+2 critical confirmation rolls',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Rovagug',
    prerequisites: [{ type: 'deity', deityName: 'Rovagug' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'critical_confirmation',
        value: 2,
        source: 'Bestial Wrath',
      },
    ],
    tags: ['critical', 'confirmation', 'attack'],
  },

  // ==================== ZON-KUTHON (extra) ====================
  {
    id: 'deformed',
    name: 'Deformed',
    description:
      'You gain a +1 trait bonus on Intimidate checks, and Intimidate is a class skill for you.',
    shortDescription: '+1 Intimidate; class skill',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Zon-Kuthon',
    prerequisites: [{ type: 'deity', deityName: 'Zon-Kuthon' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.intimidate',
        value: 1,
        source: 'Deformed',
      },
    ],
    tags: ['intimidate', 'fear', 'dark'],
  },
];
