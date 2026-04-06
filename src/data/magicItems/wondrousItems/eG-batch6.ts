import type { WondrousItemDefinition } from '@/types/magicItems';
import { AuraStrength, MagicSchool } from '@/types/equipment';

export const wondrousItemsEG6: WondrousItemDefinition[] = [
  // 126 — Gauntlets of Twisting Vines
  {
    id: 'wondrous-gauntlets-of-twisting-vines',
    name: 'Gauntlets of Twisting Vines',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 3,
    slot: 'hands',

    price: 5000,
    weight: 2,

    description:
      'Dark, thorny vines constantly move and twist around the wearer\'s hands of their own accord. ' +
      'The wearer gains a +2 circumstance bonus on combat maneuver checks for disarm, grapple, and steal ' +
      'actions. Once per day, after successfully pinning an opponent via grapple, the vines can detach ' +
      'from the wearer, wrap around the target, and restrain them. The victim must succeed at a combat ' +
      'maneuver check or Escape Artist check (DC equal to the original grapple result) to break free. ' +
      'The original wearer can remove the gauntlets as a move action; others must succeed at a combat ' +
      'maneuver or Strength check at the same DC.',

    construction: {
      feats: ['Craft Wondrous Item', 'Improved Grapple'],
      spells: ['entangle'],
      cost: 2500,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 5,
      breakDC: 20,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'circumstance',
        target: 'cmb',
        value: 2,
        source: 'Gauntlets of Twisting Vines',
        condition: {
          type: 'custom',
          params: { maneuver: 'disarm_grapple_steal' },
          description: 'on disarm, grapple, and steal combat maneuver checks only',
        },
      },
      {
        type: 'special',
        target: 'special.twisting_vines_restrain',
        value: 0,
        source: 'Gauntlets of Twisting Vines',
      },
    ],
  },

  // 127 — Gauntlets, Form-Fixing
  {
    id: 'wondrous-gauntlets-form-fixing',
    name: 'Gauntlets, Form-Fixing',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.ABJURATION }],
    casterLevel: 15,
    slot: 'hands',

    price: 8000,
    weight: 1,

    description:
      'These leather gauntlets grant enhanced combat effectiveness against shapeshifters. ' +
      'The wearer gains a +2 morale bonus on unarmed strike attack rolls, natural attack rolls, and ' +
      'combat maneuver checks against creatures with the change shape special ability. Creatures the ' +
      'wearer grapples or pins must succeed at concentration checks (DC = 4 + spell casting DC) to ' +
      'use shape-changing abilities. When pinning a shapeshifter, successful grapple checks allow the ' +
      'wearer to force the target into a specific shape it can take naturally.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['polymorph any object'],
      cost: 4000,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 5,
      breakDC: 20,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'morale',
        target: 'attack.melee',
        value: 2,
        source: 'Gauntlets, Form-Fixing',
        condition: {
          type: 'target_type',
          params: { specialAbility: 'change_shape' },
          description: 'against creatures with the change shape special ability only',
        },
      },
      {
        type: 'bonus',
        bonusType: 'morale',
        target: 'cmb',
        value: 2,
        source: 'Gauntlets, Form-Fixing',
        condition: {
          type: 'target_type',
          params: { specialAbility: 'change_shape' },
          description: 'against creatures with the change shape special ability only',
        },
      },
      {
        type: 'special',
        target: 'special.form_fixing_concentration',
        value: 0,
        source: 'Gauntlets, Form-Fixing',
      },
      {
        type: 'special',
        target: 'special.form_fixing_forced_shape',
        value: 0,
        source: 'Gauntlets, Form-Fixing',
      },
    ],
  },

  // 128 — Gauntlets, Giant Fist
  {
    id: 'wondrous-gauntlets-giant-fist',
    name: 'Gauntlets, Giant Fist',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 8,
    slot: 'hands',

    price: 20000,
    weight: 5,

    description:
      'These rough leather gauntlets allow the wearer to expand her hands to twice normal size and ' +
      'harden them to the consistency of hardwood as a swift action. The effect persists for up to ' +
      '20 rounds per day, which need not be consecutive. When the wearer strikes with unarmed or ' +
      'natural attacks using the enlarged hands, she may attempt to bull rush her opponent as a ' +
      'free action.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['enlarge person'],
      cost: 10000,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 5,
      breakDC: 20,
    },

    activationCategory: 'use_activated',
    activationAction: 'swift',

    effects: [
      {
        type: 'special',
        target: 'special.giant_fist_enlarge_hands',
        value: 20,
        source: 'Gauntlets, Giant Fist',
      },
      {
        type: 'special',
        target: 'special.giant_fist_bull_rush',
        value: 0,
        source: 'Gauntlets, Giant Fist',
      },
    ],
  },

  // 129 — Gauntlets, Impact
  {
    id: 'wondrous-gauntlets-impact',
    name: 'Gauntlets, Impact',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'hands',

    price: 4500,
    weight: 1,

    description:
      'These worn leather gauntlets feature smooth palms and rough pebble-covered wrists and backs. ' +
      'The wearer gains the ability to catch Small, Medium, or Large rocks and similar projectiles ' +
      'as if possessing the rock catching monster ability, provided at least one hand remains free. ' +
      'Caught rocks shrink and are permanently absorbed into the gauntlets. Wearers with an existing ' +
      'rock catching ability can catch twice per round instead of once.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['shrink item'],
      cost: 2250,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 5,
      breakDC: 20,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'special',
        target: 'special.rock_catching',
        value: 0,
        source: 'Gauntlets, Impact',
      },
    ],
  },

  // 130 — Gauntlets, Inphidian
  {
    id: 'wondrous-gauntlets-inphidian',
    name: 'Gauntlets, Inphidian',
    category: 'wondrous',
    source: 'Bestiary 4',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 3,
    slot: 'hands',

    price: 24000,
    weight: 1,

    description:
      'These leather or metal gauntlets grant creatures lacking humanoid hands — particularly ' +
      'inphidians — fully functional hands for manipulating objects normally inaccessible to ' +
      'non-handed creatures. Wearers retain full use of their Strength and Dexterity scores while ' +
      'equipped. However, inphidians cannot use hand-snake bite attacks when wearing the gauntlets. ' +
      'The item provides no benefit to creatures that already possess humanoid hands.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['alter self'],
      cost: 12000,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 5,
      breakDC: 20,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'special',
        target: 'special.grant_humanoid_hands',
        value: 0,
        source: 'Gauntlets, Inphidian',
      },
    ],
  },

  // 131 — Gauntlets, Irongrip
  {
    id: 'wondrous-gauntlets-irongrip',
    name: 'Gauntlets, Irongrip',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 3,
    slot: 'hands',

    price: 4000,
    weight: 2,

    description:
      'These goatskin gloves reinforced with heavy iron strips reduce the penalty for wielding an ' +
      'improvised melee weapon or inappropriately sized weapon by 2 (minimum 0). They do not alter ' +
      'the number of hands needed to use such weapons.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["bull's strength", 'enlarge person'],
      cost: 2000,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 5,
      breakDC: 20,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'special',
        target: 'special.improvised_weapon_penalty_reduction',
        value: 2,
        source: 'Gauntlets, Irongrip',
      },
    ],
  },

  // 132 — Gauntlets, Skullcrusher
  {
    id: 'wondrous-gauntlets-skullcrusher',
    name: 'Gauntlets, Skullcrusher',
    category: 'wondrous',
    source: 'Advanced Class Guide',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION }],
    casterLevel: 10,
    slot: 'hands',

    price: 15302,
    weight: 6,

    description:
      'These oversized gauntlets combine blackened steel with polished white stone and bear ' +
      'bloodstains. They function as +1 gauntlets. Once per day, the wearer can execute a ' +
      'devastating knockout strike as a full-round action at her highest base attack bonus. ' +
      'On a hit, the target takes 4d6 force damage and must succeed at a DC 15 Fortitude save ' +
      'or fall unconscious until the end of their next turn. Even on a successful save, the ' +
      'target is staggered through its next turn. Creatures immune to critical hits are unaffected. ' +
      'When worn by a brawler with the knockout class feature, the DC increases by 2.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['deep slumber', 'stone fist'],
      cost: 7802,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 5,
      breakDC: 20,
    },

    activationCategory: 'use_activated',
    activationAction: 'standard',

    effects: [
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'attack.melee',
        value: 1,
        source: 'Gauntlets, Skullcrusher',
      },
      {
        type: 'special',
        target: 'special.skullcrusher_knockout_strike',
        value: 1,
        source: 'Gauntlets, Skullcrusher',
      },
    ],
  },

  // 133 — Gem of Brightness
  {
    id: 'wondrous-gem-of-brightness',
    name: 'Gem of Brightness',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION }],
    casterLevel: 6,
    slot: 'none',

    price: 13000,
    weight: 0,

    description:
      'This magical crystal prism has three distinct functions activated by different command words. ' +
      'The first command word causes the gem to emit light equal to a hooded lantern without consuming ' +
      'charges; a second command extinguishes it. The second command word projects a 1-foot-diameter ' +
      'beam extending 50 feet as a ranged touch attack; a struck creature is blinded for 1d4 rounds ' +
      '(DC 14 Fortitude negates) — this costs 1 charge. The third command word creates a blinding ' +
      'flash in a 30-foot cone; all creatures within must succeed at a DC 14 Fortitude save or be ' +
      'blinded for 1d4 rounds — this costs 5 charges. A newly created gem contains 50 charges; ' +
      'when depleted it becomes a cloudy, cracked, non-magical stone.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['daylight'],
      cost: 6500,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 1,
      breakDC: 12,
    },

    activationCategory: 'command_word',
    activationAction: 'standard',

    charges: { maximum: 50 },

    effects: [
      {
        type: 'special',
        target: 'special.gem_brightness_lantern_light',
        value: 0,
        source: 'Gem of Brightness',
      },
      {
        type: 'special',
        target: 'special.gem_brightness_bright_ray',
        value: 0,
        source: 'Gem of Brightness',
      },
      {
        type: 'special',
        target: 'special.gem_brightness_blinding_flash',
        value: 0,
        source: 'Gem of Brightness',
      },
    ],
  },

  // 134 — Gem of Seeing
  {
    id: 'wondrous-gem-of-seeing',
    name: 'Gem of Seeing',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.DIVINATION }],
    casterLevel: 10,
    slot: 'none',

    price: 75000,
    weight: 0,

    description:
      'This polished stone appears as an ordinary jewel. When gazed through, it grants the user ' +
      'vision as though she were affected by the true seeing spell. The gem can be used for up to ' +
      '30 minutes per day in 5-minute increments that need not be consecutive.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['true seeing'],
      cost: 37500,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 1,
      breakDC: 12,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.true_seeing_30_min_per_day',
        value: 0,
        source: 'Gem of Seeing',
      },
    ],
  },

  // 135 — Gem, Elemental (Air)
  {
    id: 'wondrous-elemental-gem-air',
    name: 'Elemental Gem (Air)',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 11,
    slot: 'none',

    price: 2250,
    weight: 0,

    description:
      'This transparent gem, when broken as a standard action, summons a Large air elemental ' +
      'as if by a summon nature\'s ally spell. The elemental obeys the creature who broke the gem.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["summon nature's ally v"],
      cost: 1125,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 1,
      breakDC: 12,
    },

    activationCategory: 'use_activated',
    activationAction: 'standard',

    effects: [
      {
        type: 'special',
        target: 'special.summon_large_air_elemental',
        value: 0,
        source: 'Elemental Gem (Air)',
      },
    ],
  },

  // 135 — Gem, Elemental (Earth)
  {
    id: 'wondrous-elemental-gem-earth',
    name: 'Elemental Gem (Earth)',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 11,
    slot: 'none',

    price: 2250,
    weight: 0,

    description:
      'This light brown gem, when broken as a standard action, summons a Large earth elemental ' +
      'as if by a summon nature\'s ally spell. The elemental obeys the creature who broke the gem.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["summon nature's ally v"],
      cost: 1125,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 1,
      breakDC: 12,
    },

    activationCategory: 'use_activated',
    activationAction: 'standard',

    effects: [
      {
        type: 'special',
        target: 'special.summon_large_earth_elemental',
        value: 0,
        source: 'Elemental Gem (Earth)',
      },
    ],
  },

  // 135 — Gem, Elemental (Fire)
  {
    id: 'wondrous-elemental-gem-fire',
    name: 'Elemental Gem (Fire)',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 11,
    slot: 'none',

    price: 2250,
    weight: 0,

    description:
      'This reddish orange gem, when broken as a standard action, summons a Large fire elemental ' +
      'as if by a summon nature\'s ally spell. The elemental obeys the creature who broke the gem.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["summon nature's ally v"],
      cost: 1125,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 1,
      breakDC: 12,
    },

    activationCategory: 'use_activated',
    activationAction: 'standard',

    effects: [
      {
        type: 'special',
        target: 'special.summon_large_fire_elemental',
        value: 0,
        source: 'Elemental Gem (Fire)',
      },
    ],
  },

  // 135 — Gem, Elemental (Water)
  {
    id: 'wondrous-elemental-gem-water',
    name: 'Elemental Gem (Water)',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 11,
    slot: 'none',

    price: 2250,
    weight: 0,

    description:
      'This blue-green gem, when broken as a standard action, summons a Large water elemental ' +
      'as if by a summon nature\'s ally spell. The elemental obeys the creature who broke the gem.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["summon nature's ally v"],
      cost: 1125,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 1,
      breakDC: 12,
    },

    activationCategory: 'use_activated',
    activationAction: 'standard',

    effects: [
      {
        type: 'special',
        target: 'special.summon_large_water_elemental',
        value: 0,
        source: 'Elemental Gem (Water)',
      },
    ],
  },

  // 136 — Gem, Kitsune Star (1st)
  {
    id: 'wondrous-kitsune-star-gem-1',
    name: 'Kitsune Star Gem (1st)',
    category: 'wondrous',
    source: 'Advanced Race Guide',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 1,
    slot: 'none',

    price: 750,
    weight: 0,

    description:
      'This magical jewel radiates light comparable to faerie fire and functions as a light source ' +
      'equivalent to a candle. It operates similarly to a pearl of power but only allows a kitsune ' +
      'to recover a spent use of a spell-like ability of 1st spell level.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: [],
      specialRequirements: ['Creator must be a kitsune'],
      cost: 375,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 1,
      breakDC: 12,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.recover_kitsune_sla_1st_level',
        value: 0,
        source: 'Kitsune Star Gem (1st)',
      },
    ],
  },

  // 136 — Gem, Kitsune Star (2nd)
  {
    id: 'wondrous-kitsune-star-gem-2',
    name: 'Kitsune Star Gem (2nd)',
    category: 'wondrous',
    source: 'Advanced Race Guide',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 3,
    slot: 'none',

    price: 3000,
    weight: 0,

    description:
      'This magical jewel radiates light comparable to faerie fire and functions as a light source ' +
      'equivalent to a candle. It operates similarly to a pearl of power but only allows a kitsune ' +
      'to recover a spent use of a spell-like ability of 2nd spell level.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: [],
      specialRequirements: ['Creator must be a kitsune'],
      cost: 1500,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 1,
      breakDC: 12,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.recover_kitsune_sla_2nd_level',
        value: 0,
        source: 'Kitsune Star Gem (2nd)',
      },
    ],
  },

  // 136 — Gem, Kitsune Star (3rd)
  {
    id: 'wondrous-kitsune-star-gem-3',
    name: 'Kitsune Star Gem (3rd)',
    category: 'wondrous',
    source: 'Advanced Race Guide',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'none',

    price: 6750,
    weight: 0,

    description:
      'This magical jewel radiates light comparable to faerie fire and functions as a light source ' +
      'equivalent to a candle. It operates similarly to a pearl of power but only allows a kitsune ' +
      'to recover a spent use of a spell-like ability of 3rd spell level.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: [],
      specialRequirements: ['Creator must be a kitsune'],
      cost: 3375,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 1,
      breakDC: 12,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.recover_kitsune_sla_3rd_level',
        value: 0,
        source: 'Kitsune Star Gem (3rd)',
      },
    ],
  },

  // 137 — Gem, Metamagic (Empowering Topaz)
  {
    id: 'wondrous-metamagic-gem-empowering-topaz',
    name: 'Gem, Metamagic (Empowering Topaz)',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.UNIVERSAL }],
    casterLevel: 11,
    slot: 'none',

    price: 2000,
    weight: 0,

    description:
      'This topaz gem is consumed as an additional material component when casting a spell, ' +
      'applying the Empower Spell metamagic feat to the spell without increasing its casting time ' +
      'or using a higher-level spell slot.',

    construction: {
      feats: ['Craft Wondrous Item', 'Empower Spell'],
      spells: [],
      cost: 1000,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 1,
      breakDC: 12,
    },

    activationCategory: 'spell_completion',

    effects: [
      {
        type: 'special',
        target: 'special.apply_empower_spell_metamagic',
        value: 0,
        source: 'Gem, Metamagic (Empowering Topaz)',
      },
    ],
  },

  // 137 — Gem, Metamagic (Enlarging Amethyst)
  {
    id: 'wondrous-metamagic-gem-enlarging-amethyst',
    name: 'Gem, Metamagic (Enlarging Amethyst)',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.UNIVERSAL }],
    casterLevel: 11,
    slot: 'none',

    price: 1000,
    weight: 0,

    description:
      'This amethyst gem is consumed as an additional material component when casting a spell, ' +
      'applying the Enlarge Spell metamagic feat to the spell without increasing its casting time ' +
      'or using a higher-level spell slot.',

    construction: {
      feats: ['Craft Wondrous Item', 'Enlarge Spell'],
      spells: [],
      cost: 500,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 1,
      breakDC: 12,
    },

    activationCategory: 'spell_completion',

    effects: [
      {
        type: 'special',
        target: 'special.apply_enlarge_spell_metamagic',
        value: 0,
        source: 'Gem, Metamagic (Enlarging Amethyst)',
      },
    ],
  },

  // 137 — Gem, Metamagic (Extending Garnet)
  {
    id: 'wondrous-metamagic-gem-extending-garnet',
    name: 'Gem, Metamagic (Extending Garnet)',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.UNIVERSAL }],
    casterLevel: 11,
    slot: 'none',

    price: 1000,
    weight: 0,

    description:
      'This garnet gem is consumed as an additional material component when casting a spell, ' +
      'applying the Extend Spell metamagic feat to the spell without increasing its casting time ' +
      'or using a higher-level spell slot.',

    construction: {
      feats: ['Craft Wondrous Item', 'Extend Spell'],
      spells: [],
      cost: 500,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 1,
      breakDC: 12,
    },

    activationCategory: 'spell_completion',

    effects: [
      {
        type: 'special',
        target: 'special.apply_extend_spell_metamagic',
        value: 0,
        source: 'Gem, Metamagic (Extending Garnet)',
      },
    ],
  },

  // 137 — Gem, Metamagic (Maximizing Sapphire)
  {
    id: 'wondrous-metamagic-gem-maximizing-sapphire',
    name: 'Gem, Metamagic (Maximizing Sapphire)',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.UNIVERSAL }],
    casterLevel: 11,
    slot: 'none',

    price: 4000,
    weight: 0,

    description:
      'This sapphire gem is consumed as an additional material component when casting a spell, ' +
      'applying the Maximize Spell metamagic feat to the spell without increasing its casting time ' +
      'or using a higher-level spell slot.',

    construction: {
      feats: ['Craft Wondrous Item', 'Maximize Spell'],
      spells: [],
      cost: 2000,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 1,
      breakDC: 12,
    },

    activationCategory: 'spell_completion',

    effects: [
      {
        type: 'special',
        target: 'special.apply_maximize_spell_metamagic',
        value: 0,
        source: 'Gem, Metamagic (Maximizing Sapphire)',
      },
    ],
  },

  // 137 — Gem, Metamagic (Quickening Diamond)
  {
    id: 'wondrous-metamagic-gem-quickening-diamond',
    name: 'Gem, Metamagic (Quickening Diamond)',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.UNIVERSAL }],
    casterLevel: 11,
    slot: 'none',

    price: 8000,
    weight: 0,

    description:
      'This diamond gem is consumed as an additional material component when casting a spell, ' +
      'applying the Quicken Spell metamagic feat to the spell, allowing it to be cast as a ' +
      'swift action without using a higher-level spell slot.',

    construction: {
      feats: ['Craft Wondrous Item', 'Quicken Spell'],
      spells: [],
      cost: 4000,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 1,
      breakDC: 12,
    },

    activationCategory: 'spell_completion',

    effects: [
      {
        type: 'special',
        target: 'special.apply_quicken_spell_metamagic',
        value: 0,
        source: 'Gem, Metamagic (Quickening Diamond)',
      },
    ],
  },

  // 137 — Gem, Metamagic (Silent Spinel)
  {
    id: 'wondrous-metamagic-gem-silent-spinel',
    name: 'Gem, Metamagic (Silent Spinel)',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.UNIVERSAL }],
    casterLevel: 11,
    slot: 'none',

    price: 1000,
    weight: 0,

    description:
      'This spinel gem is consumed as an additional material component when casting a spell, ' +
      'applying the Silent Spell metamagic feat to the spell without increasing its casting time ' +
      'or using a higher-level spell slot.',

    construction: {
      feats: ['Craft Wondrous Item', 'Silent Spell'],
      spells: [],
      cost: 500,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 1,
      breakDC: 12,
    },

    activationCategory: 'spell_completion',

    effects: [
      {
        type: 'special',
        target: 'special.apply_silent_spell_metamagic',
        value: 0,
        source: 'Gem, Metamagic (Silent Spinel)',
      },
    ],
  },

  // 137 — Gem, Metamagic (Still Amber)
  {
    id: 'wondrous-metamagic-gem-still-amber',
    name: 'Gem, Metamagic (Still Amber)',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.UNIVERSAL }],
    casterLevel: 11,
    slot: 'none',

    price: 1000,
    weight: 0,

    description:
      'This amber gem is consumed as an additional material component when casting a spell, ' +
      'applying the Still Spell metamagic feat to the spell without increasing its casting time ' +
      'or using a higher-level spell slot.',

    construction: {
      feats: ['Craft Wondrous Item', 'Still Spell'],
      spells: [],
      cost: 500,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 1,
      breakDC: 12,
    },

    activationCategory: 'spell_completion',

    effects: [
      {
        type: 'special',
        target: 'special.apply_still_spell_metamagic',
        value: 0,
        source: 'Gem, Metamagic (Still Amber)',
      },
    ],
  },

  // 137 — Gem, Metamagic (Widening Emerald)
  {
    id: 'wondrous-metamagic-gem-widening-emerald',
    name: 'Gem, Metamagic (Widening Emerald)',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.UNIVERSAL }],
    casterLevel: 11,
    slot: 'none',

    price: 4000,
    weight: 0,

    description:
      'This emerald gem is consumed as an additional material component when casting a spell, ' +
      'applying the Widen Spell metamagic feat to the spell without increasing its casting time ' +
      'or using a higher-level spell slot.',

    construction: {
      feats: ['Craft Wondrous Item', 'Widen Spell'],
      spells: [],
      cost: 2000,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 1,
      breakDC: 12,
    },

    activationCategory: 'spell_completion',

    effects: [
      {
        type: 'special',
        target: 'special.apply_widen_spell_metamagic',
        value: 0,
        source: 'Gem, Metamagic (Widening Emerald)',
      },
    ],
  },

  // 138 — Gem, Phantasmal
  {
    id: 'wondrous-gem-phantasmal',
    name: 'Gem, Phantasmal',
    category: 'wondrous',
    source: 'Advanced Race Guide',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ILLUSION }],
    casterLevel: 3,
    slot: 'none',

    price: 4000,
    weight: 1,

    description:
      'A small cut crystal containing hazy, indistinct images that constantly shift and vary. ' +
      'When a spellcaster holding it casts an illusion spell requiring concentration, the effect ' +
      'persists for up to 10 additional rounds after the caster stops concentrating. The caster ' +
      'may terminate the extended effect early as a swift action. Gnomes may recharge the gem by ' +
      'expending gnome spell-like abilities (each use restores 1 round, up to 10 rounds per day).',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: [],
      specialRequirements: ['Creator must be a gnome or illusion-specialized wizard'],
      cost: 2000,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 1,
      breakDC: 12,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'special',
        target: 'special.phantasmal_gem_extend_illusion',
        value: 10,
        source: 'Gem, Phantasmal',
      },
    ],
  },

  // 139 — Gem, Spell-Capturing
  {
    id: 'wondrous-gem-spell-capturing',
    name: 'Gem, Spell-Capturing',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.ABJURATION }],
    casterLevel: 13,
    slot: 'none',

    price: 5000,
    weight: 0,

    description:
      'This small blue gem (appearing as azurite, lapis lazuli, or turquoise) captures successfully ' +
      'countered spells for later use. When the owner counters a spell using dispel magic or similar ' +
      'means, she may choose to capture that foiled spell in the gem. The captured spell remains for ' +
      'a duration equal to the owner\'s caster level minus the spell\'s level (minimum 1 day). During ' +
      'that time, the wielder may cast the captured spell regardless of normal casting ability, using ' +
      'the minimum caster level. This is a single-use item; once used or the storage duration expires, ' +
      'the gem becomes a worthless gray pebble.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['spell turning'],
      cost: 2500,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 1,
      breakDC: 12,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.capture_countered_spell',
        value: 0,
        source: 'Gem, Spell-Capturing',
      },
    ],
  },

  // 140 — Gemcarver's Tools
  {
    id: 'wondrous-gemcarvers-tools',
    name: "Gemcarver's Tools",
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [
      { strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION },
      { strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION },
    ],
    casterLevel: 11,
    slot: 'none',

    price: 9000,
    weight: 5,

    description:
      'These elegant adamantine implements bear inscriptions in the four elemental languages ' +
      '(Aquan, Auran, Ignan, and Terran). They function as masterwork jewelry-crafting tools ' +
      'while enabling users to imbue gems with elemental properties during the cutting process. ' +
      'The tools allow crafting of elemental gems through an 8-hour process using an uncut gem ' +
      'worth 1,000 gp. Users must succeed at a DC 21 Craft (jewelry) check or lose materials. ' +
      'Crafting requires knowledge of the appropriate elemental language corresponding to the ' +
      'desired gem type.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['fabricate', "summon nature's ally v"],
      specialRequirements: ['5 ranks in Craft (jewelry)'],
      cost: 4500,
    },
    physicalStats: {
      hardness: 20,
      hitPoints: 10,
      breakDC: 24,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.craft_elemental_gem',
        value: 0,
        source: "Gemcarver's Tools",
      },
    ],
  },

  // 141 — Ghost Mask
  {
    id: 'wondrous-ghost-mask',
    name: 'Ghost Mask',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 8,
    slot: 'head',

    price: 8000,
    weight: 1,

    description:
      'These defaced masks feature monstrous or demonic appearances. The wearer can see through ' +
      'fog, smoke, and other obscuring vapors as if they do not exist, and can see underwater ' +
      'through silt and aquatic precipitates. The wearer is treated as one size category larger ' +
      'for purposes of wind effects and gains a +4 bonus on saving throws against wind effects. ' +
      'The wearer can also breathe underwater for up to 60 minutes per day in 10-minute increments.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['control winds', 'water breathing'],
      cost: 4000,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 5,
      breakDC: 18,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'special',
        target: 'special.see_through_obscurement',
        value: 0,
        source: 'Ghost Mask',
      },
      {
        type: 'bonus',
        bonusType: 'untyped',
        target: 'save.all',
        value: 4,
        source: 'Ghost Mask',
        condition: {
          type: 'custom',
          params: { effectType: 'wind' },
          description: 'against wind effects only',
        },
      },
      {
        type: 'special',
        target: 'special.water_breathing_60_min_per_day',
        value: 0,
        source: 'Ghost Mask',
      },
    ],
  },

  // 142 — Globe of Moonlight
  {
    id: 'wondrous-globe-of-moonlight',
    name: 'Globe of Moonlight',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [
      { strength: AuraStrength.MODERATE, school: MagicSchool.ENCHANTMENT },
      { strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION },
    ],
    casterLevel: 7,
    slot: 'none',

    price: 700,
    weight: 1,

    description:
      'This magical sphere, when broken as a standard action, floods a 30-foot radius burst in ' +
      'moonlight for 1 minute. The moonlight functions as dim light, replacing existing illumination. ' +
      'Lycanthropes and creatures affected by full moonlight experience those effects within range. ' +
      'Moonlight-dependent magical effects function within the burst radius.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['light', 'moonstruck'],
      cost: 350,
    },
    physicalStats: {
      hardness: 1,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'use_activated',
    activationAction: 'standard',

    effects: [
      {
        type: 'special',
        target: 'special.moonlight_burst_30ft',
        value: 0,
        source: 'Globe of Moonlight',
      },
    ],
  },

  // 143 — Glove of Familiar's Touch
  {
    id: 'wondrous-glove-of-familiars-touch',
    name: "Glove of Familiar's Touch",
    category: 'wondrous',
    source: "Familiar Folio",
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION }],
    casterLevel: 7,
    slot: 'hands',

    price: 23000,
    weight: 2,

    description:
      "This magical glove features a bright gem on its palm and includes an attuned companion gem. " +
      "When the wearer's familiar holds the attuned gem, the wearer may designate the familiar as the " +
      "source of any touch spell cast, regardless of physical separation between caster and familiar. " +
      "The glove occupies the entire hands slot.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['imbue with spell ability'],
      cost: 11500,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 3,
      breakDC: 15,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'special',
        target: 'special.familiar_touch_spell_delivery',
        value: 0,
        source: "Glove of Familiar's Touch",
      },
    ],
  },

  // 144 — Glove of Storing
  {
    id: 'wondrous-glove-of-storing',
    name: 'Glove of Storing',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 6,
    slot: 'hands',

    price: 10000,
    weight: 0,

    description:
      'A single leather glove that stores one item held in the hand. The stored item must weigh ' +
      'no more than 20 pounds and fit in one hand. While stored, the item becomes nearly weightless ' +
      'and invisible within the glove\'s palm. Storing or retrieving is a free action triggered by ' +
      'snapping the fingers. Spell durations are not suppressed but continue to expire. Suppressing ' +
      'or dispelling the glove causes the item to reappear instantly. Only one glove of storing can ' +
      'be worn at a time.',

    construction: {
      feats: ['Craft Wondrous Item', 'Shrink Item'],
      spells: [],
      cost: 5000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'use_activated',
    activationAction: 'free',

    effects: [
      {
        type: 'special',
        target: 'special.store_one_item_in_glove',
        value: 0,
        source: 'Glove of Storing',
      },
    ],
  },

  // 145 — Glove, Glowing
  {
    id: 'wondrous-glove-glowing',
    name: 'Glove, Glowing',
    category: 'wondrous',
    source: "Adventurer's Armory",
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.UNIVERSAL }],
    casterLevel: 1,
    slot: 'hands',

    price: 2000,
    weight: 0,

    description:
      "This white leather glove allows the wearer to press it against any surface or object and cause " +
      "a luminous handprint to appear. The handprint glows in any color the wearer selects, emits light " +
      "equivalent to a candle, and remains visible up to 60 feet away. Handprints persist for one day " +
      "before fading.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['arcane mark'],
      cost: 1000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'use_activated',
    activationAction: 'standard',

    effects: [
      {
        type: 'special',
        target: 'special.luminous_handprint',
        value: 0,
        source: 'Glove, Glowing',
      },
    ],
  },

  // 146 — Glove, Shadow Falconer's
  {
    id: 'wondrous-glove-shadow-falconers',
    name: "Glove, Shadow Falconer's",
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 7,
    slot: 'hands',

    price: 8000,
    weight: 1,

    description:
      "An elbow-length heavy leather glove decorated with fine embroidery showing numerous claw marks. " +
      "Once daily, the wearer can gesture toward a target within 30 feet to summon a featureless " +
      "bird-of-prey silhouette. This magical effect performs either a disarm or steal combat maneuver " +
      "(wearer's choice) with a combat maneuver bonus of +16. The shadow falcon does not provoke " +
      "attacks of opportunity. If the gloved hand is empty, the falcon delivers seized items to the " +
      "wearer's hand; otherwise it drops items in an adjacent unoccupied space.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['shadow conjuration'],
      cost: 4000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'use_activated',
    activationAction: 'standard',

    effects: [
      {
        type: 'special',
        target: 'special.shadow_falcon_disarm_steal',
        value: 1,
        source: "Glove, Shadow Falconer's",
      },
    ],
  },

  // 147 — Gloves Masterful Gray
  {
    id: 'wondrous-gloves-masterful-gray',
    name: 'Gloves Masterful Gray',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ILLUSION }],
    casterLevel: 3,
    slot: 'hands',

    price: 5400,
    weight: 1,

    description:
      'These dark-gray leather gloves are extremely supple and designed to aid in sleight of hand ' +
      'activities. They grant a +10 bonus on Sleight of Hand checks to take items from creatures ' +
      'unnoticed. Three times per day, when a creature notices the wearer\'s Sleight of Hand check ' +
      'to steal, the wearer can make the object invisible as an immediate action, enabling them to ' +
      'deny the theft.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['invisibility'],
      cost: 2700,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.sleight_of_hand',
        value: 10,
        source: 'Gloves Masterful Gray',
        condition: {
          type: 'custom',
          params: { action: 'steal_from_creature' },
          description: 'on Sleight of Hand checks to take items from creatures unnoticed only',
        },
      },
      {
        type: 'special',
        target: 'special.deny_theft_invisibility',
        value: 3,
        source: 'Gloves Masterful Gray',
      },
    ],
  },

  // 148 — Gloves of Arcane Striking
  {
    id: 'wondrous-gloves-of-arcane-striking',
    name: 'Gloves of Arcane Striking',
    category: 'wondrous',
    source: 'Ultimate Magic',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 1,
    slot: 'hands',

    price: 5000,
    weight: 1,

    description:
      'These soft leather gloves are decorated with even rows of mithral rivets. The wearer must ' +
      'possess the Arcane Strike feat to activate the abilities. When using aid another to boost an ' +
      "ally's attack roll, that ally gains the wearer's Arcane Strike damage bonus on the triggering " +
      "attack. Successful Arcane Strike attacks cause adjacent enemies to take damage equal to the " +
      "wearer's Arcane Strike bonus (matching the weapon's damage type). When aiding an ally's AC, " +
      "the ally adds the wearer's Arcane Strike damage bonus to AC against that specific opponent.",

    construction: {
      feats: ['Craft Wondrous Item', 'Arcane Strike'],
      spells: ['magic weapon'],
      cost: 2500,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'special',
        target: 'special.arcane_strike_splash_and_aid',
        value: 0,
        source: 'Gloves of Arcane Striking',
      },
    ],
  },

  // 149 — Gloves of Arrow Snaring
  {
    id: 'wondrous-gloves-of-arrow-snaring',
    name: 'Gloves of Arrow Snaring',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION }],
    casterLevel: 3,
    slot: 'hands',

    price: 4000,
    weight: 0,

    description:
      'These fitted gloves become nearly undetectable when worn. The wearer gains the ability to ' +
      'act as if he had the Snatch Arrows feat, even if he does not meet the prerequisites, twice ' +
      'per day. Both gloves must be worn together, and at least one hand must remain free to ' +
      'activate the magic.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['shield'],
      cost: 2000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.snatch_arrows_2_per_day',
        value: 2,
        source: 'Gloves of Arrow Snaring',
      },
    ],
  },

  // 150 — Gloves of Dueling
  {
    id: 'wondrous-gloves-of-dueling',
    name: 'Gloves of Dueling',
    category: 'wondrous',
    source: 'Advanced Player\'s Guide',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'hands',

    price: 15000,
    weight: 0,

    description:
      'These supple gloves provide defensive benefits for weapon wielders. The wearer gains a +4 ' +
      'bonus to CMD against disarm attacks, attempts to sunder her wielded weapons, and effects ' +
      "causing loss of grip (such as the grease spell). The wearer also retains held weapons when " +
      'panicked or stunned. For fighters with weapon training using an appropriate weapon group, ' +
      'the weapon training bonus increases by +2.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['greater magic weapon'],
      cost: 7500,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'untyped',
        target: 'cmd',
        value: 4,
        source: 'Gloves of Dueling',
        condition: {
          type: 'custom',
          params: { action: 'disarm_sunder_grip_loss' },
          description: 'against disarm, sunder, and grip-loss effects only',
        },
      },
      {
        type: 'special',
        target: 'special.retain_weapon_panicked_stunned',
        value: 0,
        source: 'Gloves of Dueling',
      },
      {
        type: 'bonus',
        bonusType: 'untyped',
        target: 'special.weapon_training_bonus',
        value: 2,
        source: 'Gloves of Dueling',
        condition: {
          type: 'custom',
          params: { classFeature: 'weapon_training' },
          description: 'fighter weapon training bonus only',
        },
      },
    ],
  },
];
