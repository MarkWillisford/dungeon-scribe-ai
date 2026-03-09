import { BonusType } from '@/types/base';
import type { TraitDefinition } from '@/types/traits';

/**
 * Additional APG traits not already in core.ts, ultimateCampaign.ts, or advancedRace.ts.
 * Traits that were reprinted identically in UC or ARG are stored under their reprint source
 * (whichever file already has them). Only genuinely new or race-variant entries live here.
 */
export const APG_EXTRA_TRAITS: TraitDefinition[] = [
  // ─── COMBAT TRAITS ───────────────────────────────────────────────
  {
    id: 'sacred_tattoo',
    name: 'Sacred Tattoo',
    description:
      "You bear a tattoo of your deity's holy symbol or another sacred image. You gain a +1 trait bonus on all saving throws.",
    shortDescription: '+1 trait bonus on all saving throws',
    source: "Advanced Player's Guide",
    category: 'combat',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.all',
        value: 1,
        source: 'Sacred Tattoo',
      },
    ],
    tags: ['save', 'fortitude', 'reflex', 'will'],
  },

  // ─── FAITH TRAITS ────────────────────────────────────────────────
  {
    id: 'demoness_redeemed',
    name: 'Demoness Redeemed',
    description:
      'You bear a strong hatred for demons and the damage they wreak. You gain a +2 trait bonus on Diplomacy checks made to influence good-aligned creatures.',
    shortDescription: '+2 trait bonus on Diplomacy vs good-aligned creatures',
    source: "Advanced Player's Guide",
    category: 'faith',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.diplomacy',
        value: 2,
        source: 'Demoness Redeemed',
        condition: { type: 'custom', params: {}, description: 'Against good-aligned creatures' },
      },
    ],
    tags: ['diplomacy', 'good'],
  },
  {
    id: 'ghost_sight',
    name: 'Ghost Sight',
    description:
      'You have a knack for sensing the appearance of the undead before others do. You gain a +2 trait bonus on Perception checks when trying to locate undead, and you can attempt such a check if undead are within 30 feet that you cannot see.',
    shortDescription: '+2 trait bonus on Perception to detect undead',
    source: "Advanced Player's Guide",
    category: 'faith',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.perception',
        value: 2,
        source: 'Ghost Sight',
        condition: { type: 'custom', params: {}, description: 'When trying to locate undead' },
      },
    ],
    tags: ['perception', 'undead'],
  },
  {
    id: 'greater_purpose',
    name: 'Greater Purpose',
    description:
      'You are convinced that you are alive in order to achieve a great purpose. You gain a +1 trait bonus on Will saves against fear effects, and on Constitution checks made to stabilize when dying.',
    shortDescription: '+1 trait bonus vs fear; +1 to stabilize',
    source: "Advanced Player's Guide",
    category: 'faith',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.will',
        value: 1,
        source: 'Greater Purpose',
        condition: { type: 'custom', params: {}, description: 'Against fear effects' },
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'check.stabilize',
        value: 1,
        source: 'Greater Purpose',
      },
    ],
    tags: ['will', 'fear', 'stabilize'],
  },

  // ─── MAGIC TRAITS ────────────────────────────────────────────────
  {
    id: 'skeptical',
    name: 'Skeptical',
    description:
      'Growing up, you were always around liars, and you developed a knack for distinguishing truth from fiction. You gain a +2 trait bonus on Sense Motive checks.',
    shortDescription: '+2 trait bonus on Sense Motive',
    source: "Advanced Player's Guide",
    category: 'magic',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.sense_motive',
        value: 2,
        source: 'Skeptical',
      },
    ],
    tags: ['sense_motive', 'skill'],
  },
  {
    id: 'cross_knowledge',
    name: 'Cross-Knowledge',
    description:
      'You have dabbled in one or more of the other schools of magic. Pick one spell from a school of magic other than your own. You may cast that spell as if it were one level higher than it actually is.',
    shortDescription: 'Cast one off-school spell at +1 level',
    source: "Advanced Player's Guide",
    category: 'magic',
    prerequisites: [],
    effects: [],
    choices: [
      { type: 'custom', label: 'Choose a spell from another school', affectsEffects: true },
    ],
    tags: ['spell', 'school', 'caster_level'],
  },
  {
    id: 'transmuter',
    name: 'Transmuter',
    description:
      'You were trained as a transmuter, and your studies of changing and rearranging matter have given you a +1 trait bonus on caster level checks made to overcome spell resistance when casting a transmutation spell.',
    shortDescription: '+1 to overcome SR with transmutation spells',
    source: "Advanced Player's Guide",
    category: 'magic',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'check.spell_resistance',
        value: 1,
        source: 'Transmuter',
        condition: {
          type: 'custom',
          params: { school: 'transmutation' },
          description: 'When casting transmutation spells',
        },
      },
    ],
    tags: ['transmutation', 'spell_resistance', 'caster'],
  },

  // ─── SOCIAL TRAITS ───────────────────────────────────────────────
  {
    id: 'missionary',
    name: 'Missionary',
    description:
      'You have served in distant lands, adapting to hostile environments. You gain a +1 trait bonus on Knowledge (religion) checks, and Knowledge (religion) is always a class skill for you.',
    shortDescription: '+1 Knowledge (religion), class skill',
    source: "Advanced Player's Guide",
    category: 'social',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_religion',
        value: 1,
        source: 'Missionary',
      },
    ],
    choices: [
      { type: 'class_skill', label: 'Class Skill: Knowledge (religion)', affectsEffects: false },
    ],
    tags: ['knowledge', 'religion', 'skill'],
  },
  {
    id: 'savanna_child',
    name: 'Savanna Child',
    description:
      'You were raised in the wide, open grasslands. You gain a +1 trait bonus on Knowledge (nature) checks, and Knowledge (nature) is always a class skill for you.',
    shortDescription: '+1 Knowledge (nature), class skill',
    source: "Advanced Player's Guide",
    category: 'social',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_nature',
        value: 1,
        source: 'Savanna Child',
      },
    ],
    choices: [
      { type: 'class_skill', label: 'Class Skill: Knowledge (nature)', affectsEffects: false },
    ],
    tags: ['knowledge', 'nature', 'skill'],
  },

  // ─── RACE TRAITS (APG-specific variants) ──────────────────────────
  // Dwarf
  {
    id: 'goldsniffer',
    name: 'Goldsniffer',
    description:
      'Your keen senses lead you to hidden treasures. You gain a +2 trait bonus on Perception checks related to metals, jewels, and gemstones.',
    shortDescription: '+2 Perception for metals, jewels, gemstones',
    source: "Advanced Player's Guide",
    category: 'race',
    prerequisites: [{ type: 'race', raceName: 'Dwarf' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.perception',
        value: 2,
        source: 'Goldsniffer',
        condition: {
          type: 'custom',
          params: {},
          description: 'Related to metals, jewels, and gemstones',
        },
      },
    ],
    tags: ['perception', 'dwarf'],
  },
  {
    id: 'tunnel_fighter',
    name: 'Tunnel Fighter',
    description:
      'Disorientation in the lightless depths beneath the earth is a possibly fatal occurrence, but you learned to fight in cramped quarters at a young age. While underground, you receive a +2 trait bonus to initiative checks and a +1 trait bonus on weapon damage rolls for critical hits (this damage is multiplied on a critical hit).',
    shortDescription: '+2 initiative and +1 crit damage underground',
    source: "Advanced Player's Guide",
    category: 'race',
    prerequisites: [{ type: 'race', raceName: 'Dwarf' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'initiative',
        value: 2,
        source: 'Tunnel Fighter',
        condition: { type: 'custom', params: {}, description: 'While underground' },
      },
    ],
    tags: ['initiative', 'critical', 'underground', 'dwarf'],
  },

  // Gnome (different from UC social "Rapscallion" — this is a gnome race trait)
  {
    id: 'rapscallion_gnome',
    name: 'Rapscallion',
    description:
      "You've spent your entire life thumbing your nose at the establishment and getting away with it. You gain a +1 trait bonus on Escape Artist checks and a +1 trait bonus on Initiative checks.",
    shortDescription: '+1 Escape Artist and +1 initiative',
    source: "Advanced Player's Guide",
    category: 'race',
    prerequisites: [{ type: 'race', raceName: 'Gnome' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.escape_artist',
        value: 1,
        source: 'Rapscallion',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'initiative',
        value: 1,
        source: 'Rapscallion',
      },
    ],
    tags: ['escape_artist', 'initiative', 'gnome'],
  },

  // Half-Elf
  {
    id: 'failed_apprentice',
    name: 'Failed Apprentice',
    description:
      "As a child, your parents sent you to a distant wizard's tower as an apprentice so that you could learn the arcane arts. Unfortunately, you had no aptitude for magic. However, your time at the academy was not wasted, for you learned a great deal about defending yourself against magic. You gain a +1 trait bonus on saves against arcane spells.",
    shortDescription: '+1 trait bonus on saves vs arcane spells',
    source: "Advanced Player's Guide",
    category: 'race',
    prerequisites: [{ type: 'race', raceName: 'Half-Elf' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.all',
        value: 1,
        source: 'Failed Apprentice',
        condition: { type: 'custom', params: {}, description: 'Against arcane spells' },
      },
    ],
    tags: ['save', 'arcane', 'half-elf'],
  },

  // Half-Orc
  {
    id: 'outcast',
    name: 'Outcast',
    description:
      'You are used to living on the outskirts of civilized lands and being ostracized by the people around you. You gain a +1 trait bonus on Survival skill checks, and Survival is always a class skill for you.',
    shortDescription: '+1 Survival, class skill',
    source: "Advanced Player's Guide",
    category: 'race',
    prerequisites: [{ type: 'race', raceName: 'Half-Orc' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.survival',
        value: 1,
        source: 'Outcast',
      },
    ],
    choices: [{ type: 'class_skill', label: 'Class Skill: Survival', affectsEffects: false }],
    tags: ['survival', 'skill', 'half-orc'],
  },

  // Halfling (different from UC social "Freedom Fighter" — this is a halfling race trait)
  {
    id: 'freedom_fighter_halfling',
    name: 'Freedom Fighter',
    description:
      'Your parents instilled in you a strong belief in the right to freedom, and you gain a +1 trait bonus on any skill check or attack roll made during the process of escaping captivity.',
    shortDescription: '+1 on checks to escape captivity',
    source: "Advanced Player's Guide",
    category: 'race',
    prerequisites: [{ type: 'race', raceName: 'Halfling' }],
    effects: [],
    tags: ['escape', 'halfling'],
  },

  // Human
  {
    id: 'scholar_apg',
    name: 'Scholar',
    description:
      'Growing up, you spent a good deal of your time in libraries, reading whatever you could find. You gain a +1 trait bonus on Knowledge (arcana) checks and a +1 trait bonus on Knowledge (history) checks.',
    shortDescription: '+1 Knowledge (arcana) and +1 Knowledge (history)',
    source: "Advanced Player's Guide",
    category: 'race',
    prerequisites: [{ type: 'race', raceName: 'Human' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_arcana',
        value: 1,
        source: 'Scholar',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_history',
        value: 1,
        source: 'Scholar',
      },
    ],
    tags: ['knowledge', 'arcana', 'history', 'human'],
  },
];
