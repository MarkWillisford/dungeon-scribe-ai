import type { WondrousItemDefinition } from '@/types/magicItems';
import { AuraStrength, MagicSchool } from '@/types/equipment';

export const wondrousItemsHL8: WondrousItemDefinition[] = [
  // ── 1. Lantern, Necromancer's Beacon ────────────────────────────────────────
  {
    id: 'wondrous-lantern-necromancers-beacon',
    name: "Lantern, Necromancer's Beacon",
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.NECROMANCY }],
    casterLevel: 13,
    slot: 'none',

    price: 48000,
    weight: 1,

    description:
      "This gruesome lantern is crafted from bone and emerald-tinted glass. When ignited, it produces " +
      "a disgusting green dim light in a 60-foot radius that makes living creatures uncomfortable " +
      "without causing direct harm. The lit lantern attracts undead creatures within 1,000 feet " +
      "regardless of visibility — intelligent undead receive a DC 20 Will save to resist, while " +
      "mindless undead have no save. Affected undead must move toward the lantern as quickly as " +
      "possible, but regain normal actions once within 60 feet. The effect can be blocked by 1 foot " +
      "of wood, 1 inch of stone, or lead shielding. Undead that succeed on their saving throw are " +
      "permanently immune to that specific lantern. All undead within the light take 1 point of " +
      "positive energy damage per round. Destroying the lantern immediately frees all affected undead.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['control undead'],
      cost: 24000,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 5,
      breakDC: 12,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.attract_undead',
        value: 0,
        source: "Lantern, Necromancer's Beacon",
      },
      {
        type: 'damage',
        target: 'special.undead_positive_energy_damage',
        value: 1,
        source: "Lantern, Necromancer's Beacon",
      },
    ],
  },

  // ── 2. Lantern, Voidlight ───────────────────────────────────────────────────
  {
    id: 'wondrous-lantern-voidlight',
    name: 'Lantern, Voidlight',
    category: 'wondrous',
    source: 'Blood of Shadows',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.EVOCATION }],
    casterLevel: 5,
    slot: 'none',

    price: 30000,
    weight: 2,

    description:
      'This ornate lantern crafted from volcanic glass creates areas of magical darkness when lit. ' +
      'In normal light conditions, it creates an area of darkness in a 20-foot radius and lowers the ' +
      'illumination level by one step for an additional 20 feet beyond that area. If used where ' +
      'darkness already exists, it produces supernatural darkness in a 20-foot radius matching the ' +
      'deeper darkness spell effect.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['deeper darkness'],
      cost: 15000,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 5,
      breakDC: 12,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.magical_darkness_aura',
        value: 0,
        source: 'Lantern, Voidlight',
      },
    ],
  },

  // ── 3. Lantern, Witchlight ──────────────────────────────────────────────────
  {
    id: 'wondrous-lantern-witchlight',
    name: 'Lantern, Witchlight',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [
      { strength: AuraStrength.MODERATE, school: MagicSchool.DIVINATION },
      { strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION },
    ],
    casterLevel: 7,
    slot: 'none',

    price: 7500,
    weight: 1,

    description:
      'This skull-shaped, wrought-iron lantern emits green light when within 60 feet of a magical ' +
      'aura. The intensity varies based on aura strength: dim light for faint auras, normal hooded ' +
      'lantern light for moderate auras, and bright light (30 feet) plus dim light (next 30 feet) ' +
      'for strong auras. When an overwhelming aura is detected within 60 feet, the lantern flares ' +
      'brilliantly, blinding all creatures in a 30-foot radius for 1d4 rounds (DC 16 Reflex save ' +
      'reduces to dazzled). After such a flare, the lantern cannot emit light for 1 hour.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['arcane sight', 'daylight'],
      cost: 3750,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 5,
      breakDC: 12,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.detect_magic_aura_light',
        value: 0,
        source: 'Lantern, Witchlight',
      },
      {
        type: 'special',
        target: 'special.overwhelming_aura_blind_burst',
        value: 0,
        source: 'Lantern, Witchlight',
      },
    ],
  },

  // ── 4. Last Leaves of the Autumn Dryad ─────────────────────────────────────
  {
    id: 'wondrous-last-leaves-autumn-dryad',
    name: 'Last Leaves of the Autumn Dryad',
    category: 'wondrous',
    source: "Adventurer's Guide",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [
      { strength: AuraStrength.MODERATE, school: MagicSchool.DIVINATION },
      { strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION },
    ],
    casterLevel: 8,
    slot: 'none',

    price: 52000,
    weight: 0,

    description:
      'This vibrant cluster of leaves constantly changes hue through the different colors of the ' +
      'autumn season. Once per day, the bearer can touch the leaves to their tongue to assume tree ' +
      'shape for up to 8 hours, appearing as a healthy, autumn-filled tree. While transformed, the ' +
      'user can release leaves that function as a scrying sensor with arcane eye capabilities. These ' +
      'leaves possess plant traits, fast healing 5, and fire vulnerability, with statistics based on ' +
      'an army ant swarm. The leaves can form a face shape, allowing the user to speak through them ' +
      'in a quiet, dry rustle. If the bearer has wild empathy or is a fey bloodline sorcerer, spells ' +
      'such as ghost sound, speak with animals, or speak with plants can originate from the leaves ' +
      'instead. If the leaves do not return before the bearer reverts to normal form, the item ' +
      'becomes nonfunctional for one week.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['arcane eye', 'tree shape', 'whispering wind'],
      cost: 26000,
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
        target: 'special.tree_shape_transformation',
        value: 0,
        source: 'Last Leaves of the Autumn Dryad',
      },
      {
        type: 'special',
        target: 'special.arcane_eye_scrying_sensor',
        value: 0,
        source: 'Last Leaves of the Autumn Dryad',
      },
    ],
  },

  // ── 5. Laurel of Command ────────────────────────────────────────────────────
  {
    id: 'wondrous-laurel-of-command',
    name: 'Laurel of Command',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 3,
    slot: 'head',

    price: 30000,
    weight: 0,

    description:
      'This circlet grants the wearer enhanced persuasive abilities. As a swift action, the wearer ' +
      'can encourage an ally within 30 feet, granting a +2 morale bonus on attack rolls, saving ' +
      'throws, skill checks, and ability checks until the start of the wearer\'s next turn. ' +
      'Self-application is permitted. Each creature can receive this bonus only once per day.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['heroism'],
      cost: 15000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'command_word',
    activationAction: 'swift',

    effects: [
      {
        type: 'bonus',
        bonusType: 'morale',
        target: 'attack.all',
        value: 2,
        source: 'Laurel of Command',
        condition: {
          type: 'custom',
          params: { descriptor: 'swift_action_encourage' },
          description: 'until start of wearer\'s next turn, once per ally per day',
        },
      },
      {
        type: 'bonus',
        bonusType: 'morale',
        target: 'save.all',
        value: 2,
        source: 'Laurel of Command',
        condition: {
          type: 'custom',
          params: { descriptor: 'swift_action_encourage' },
          description: 'until start of wearer\'s next turn, once per ally per day',
        },
      },
      {
        type: 'bonus',
        bonusType: 'morale',
        target: 'skill.all',
        value: 2,
        source: 'Laurel of Command',
        condition: {
          type: 'custom',
          params: { descriptor: 'swift_action_encourage' },
          description: 'until start of wearer\'s next turn, once per ally per day',
        },
      },
    ],
  },

  // ── 6. Lens of Detection ────────────────────────────────────────────────────
  {
    id: 'wondrous-lens-of-detection',
    name: 'Lens of Detection',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.DIVINATION }],
    casterLevel: 9,
    slot: 'eyes',

    price: 3500,
    weight: 1,

    description:
      'These thick-lensed spectacles grant the wearer a +5 competence bonus on Perception checks ' +
      'and a +5 competence bonus on Survival checks made to track.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['true seeing'],
      cost: 1750,
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
        target: 'skill.perception',
        value: 5,
        source: 'Lens of Detection',
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.survival',
        value: 5,
        source: 'Lens of Detection',
        condition: {
          type: 'custom',
          params: { descriptor: 'tracking' },
          description: 'when tracking only',
        },
      },
    ],
  },

  // ── 7. Lens of Otherworldly Answers ────────────────────────────────────────
  {
    id: 'wondrous-lens-of-otherworldly-answers',
    name: 'Lens of Otherworldly Answers',
    category: 'wondrous',
    source: 'Occult Adventures',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.DIVINATION }],
    casterLevel: 13,
    slot: 'none',

    price: 1150,
    weight: 0,

    description:
      'This multifaceted prism emits light in a small area when held, increasing the light level in ' +
      'a 10-foot radius by one step; the color of the light reflects the emotional state of the ' +
      'holder. The lens reduces the time needed to read an aura from 10 minutes to 5 minutes when ' +
      'used as a focus for that occult skill unlock. When expended as a material component for ' +
      'contact other plane, it enables the caster to make a Charisma, Intelligence, or Wisdom check ' +
      '(instead of only Intelligence) to resist ability drain. Additionally, the user subtracts 1d10 ' +
      'from the percentage roll (minimum 1) for determining the contacted entity\'s truthfulness, ' +
      'and subtracts an additional 1d10 if on the same plane as the entity.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['contact other plane'],
      cost: 575,
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
        target: 'special.read_aura_faster',
        value: 0,
        source: 'Lens of Otherworldly Answers',
      },
      {
        type: 'special',
        target: 'special.contact_other_plane_component',
        value: 0,
        source: 'Lens of Otherworldly Answers',
      },
    ],
  },

  // ── 8. Lens of Starsight ────────────────────────────────────────────────────
  {
    id: 'wondrous-lens-of-starsight',
    name: 'Lens of Starsight',
    category: 'wondrous',
    source: 'People of the Stars',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 1,
    slot: 'none',

    price: 2600,
    weight: 1,

    description:
      'This magical lens attaches to the viewing end of a telescope. When aimed at the night sky, ' +
      'the user gains the benefits of the starsight spell as well as a +2 competence bonus on ' +
      'Knowledge (geography) checks relating to the stars. Only one magical lens can attach to a ' +
      'telescope simultaneously.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['starsight'],
      specialRequirements: ['Creator must have at least 2 ranks in Knowledge (geography)'],
      cost: 1300,
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
        target: 'special.starsight_effect',
        value: 0,
        source: 'Lens of Starsight',
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.knowledge_geography',
        value: 2,
        source: 'Lens of Starsight',
        condition: {
          type: 'custom',
          params: { descriptor: 'stars' },
          description: 'relating to the stars only',
        },
      },
    ],
  },

  // ── 9. Lens, Harvesting ─────────────────────────────────────────────────────
  {
    id: 'wondrous-lens-harvesting',
    name: 'Lens, Harvesting',
    category: 'wondrous',
    source: 'People of the Stars',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.EVOCATION }],
    casterLevel: 3,
    slot: 'none',

    price: 5400,
    weight: 1,

    description:
      'This magical lens attaches to a telescope and collects cosmic energy in vials. When aimed at ' +
      'stars, it fills vials with silvery starlight that emits light for 8 hours. These vials ' +
      'function as throwable splash weapons (10-foot range) causing a blinding flash of light, ' +
      'affecting the target as a blinding ray (Fortitude DC 13 negates). Alternatively, when aimed ' +
      'at dark space, vials fill with dark matter creating an inky haze around holders (protective ' +
      'penumbra effect for 8 hours). Dark matter vials shatter on impact to create a 10-foot-radius ' +
      'emanation of magical darkness lasting 3 minutes. Only fully charged vials produce magical ' +
      'effects. A single magical lens attaches to a telescope at any time.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['blinding ray', 'light', 'protective penumbra'],
      cost: 2700,
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
        target: 'special.harvest_starlight_vials',
        value: 0,
        source: 'Lens, Harvesting',
      },
      {
        type: 'special',
        target: 'special.harvest_dark_matter_vials',
        value: 0,
        source: 'Lens, Harvesting',
      },
    ],
  },

  // ── 10. Lenses of Darkness ──────────────────────────────────────────────────
  {
    id: 'wondrous-lenses-of-darkness',
    name: 'Lenses of Darkness',
    category: 'wondrous',
    source: 'Advanced Race Guide',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 3,
    slot: 'eyes',

    price: 12000,
    weight: 0,

    description:
      'These dark crystalline lenses protect wearers with light sensitivity or light blindness ' +
      'against the harmful effects of sunlight, the daylight spell, and similar light effects. ' +
      'Both lenses must be worn together for the item to function.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['darkness'],
      cost: 6000,
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
        target: 'special.light_sensitivity_protection',
        value: 0,
        source: 'Lenses of Darkness',
      },
    ],
  },

  // ── 11. Lenses of Figment Piercing ──────────────────────────────────────────
  {
    id: 'wondrous-lenses-of-figment-piercing',
    name: 'Lenses of Figment Piercing',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 3,
    slot: 'eyes',

    price: 12000,
    weight: 0,

    description:
      'These magical lenses enable the wearer to immediately attempt saving throws against figment ' +
      'illusions upon first sight, rather than waiting for interaction. The wearer gains a +4 ' +
      'competence bonus on this saving throw if they initially failed to disbelieve but later ' +
      'interact with the illusion normally. The item only affects figment-subschool illusions with ' +
      'visual components that allow saving throws.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['see invisibility'],
      cost: 6000,
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
        target: 'special.immediate_figment_save',
        value: 0,
        source: 'Lenses of Figment Piercing',
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'save.will',
        value: 4,
        source: 'Lenses of Figment Piercing',
        condition: {
          type: 'custom',
          params: { descriptor: 'figment_illusion_after_interaction' },
          description: 'vs. figment illusions after interacting when initial save was failed',
        },
      },
    ],
  },

  // ── 12. Lenses of Situational Sight ────────────────────────────────────────
  {
    id: 'wondrous-lenses-of-situational-sight',
    name: 'Lenses of Situational Sight',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [
      { strength: AuraStrength.MODERATE, school: MagicSchool.DIVINATION },
      { strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION },
    ],
    casterLevel: 10,
    slot: 'eyes',

    price: 5000,
    weight: 1,

    description:
      'These wire spectacles feature three interchangeable crystal filter sets on hinged arms. As a ' +
      'standard action, the wearer can position any combination of filters in front of the lenses. ' +
      'Each filter provides distinct magical vision capabilities for a total of 10 minutes per day ' +
      '(usable in 1-minute increments). Green lenses grant detect magic benefits without requiring ' +
      'concentration. Pink lenses grant see invisibility benefits. Purple lenses grant 60-foot ' +
      'darkvision; if the wearer already possesses darkvision, it instead extends the range by 60 ' +
      'feet.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['arcane sight', 'darkvision', 'see invisibility'],
      cost: 2500,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'command_word',
    activationAction: 'standard',

    charges: { maximum: 10, rechargeMethod: '1 minute increments; recharges daily' },

    effects: [
      {
        type: 'special',
        target: 'special.detect_magic_no_concentration',
        value: 0,
        source: 'Lenses of Situational Sight',
        condition: {
          type: 'custom',
          params: { descriptor: 'green_filter' },
          description: 'green filter only',
        },
      },
      {
        type: 'special',
        target: 'special.see_invisibility',
        value: 0,
        source: 'Lenses of Situational Sight',
        condition: {
          type: 'custom',
          params: { descriptor: 'pink_filter' },
          description: 'pink filter only',
        },
      },
      {
        type: 'special',
        target: 'special.darkvision_60ft',
        value: 60,
        source: 'Lenses of Situational Sight',
        condition: {
          type: 'custom',
          params: { descriptor: 'purple_filter' },
          description: 'purple filter only; extends existing darkvision by 60 ft instead',
        },
      },
    ],
  },

  // ── 13. Lenses of the Bully ─────────────────────────────────────────────────
  {
    id: 'wondrous-lenses-of-the-bully',
    name: 'Lenses of the Bully',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION }],
    casterLevel: 3,
    slot: 'eyes',

    price: 12500,
    weight: 0,

    description:
      'These dark-tinted eyepieces enhance intimidation and conceal alignment. The wearer receives ' +
      'a +2 competence bonus on Intimidate checks. Additionally, the wearer functions under a ' +
      'constant undetectable alignment effect, obscuring their true nature from magical detection.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['undetectable alignment'],
      cost: 6250,
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
        target: 'skill.intimidate',
        value: 2,
        source: 'Lenses of the Bully',
      },
      {
        type: 'special',
        target: 'special.undetectable_alignment',
        value: 0,
        source: 'Lenses of the Bully',
      },
    ],
  },

  // ── 14. Lenses of the Predator's Gaze ──────────────────────────────────────
  {
    id: 'wondrous-lenses-of-the-predators-gaze',
    name: "Lenses of the Predator's Gaze",
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.DIVINATION }],
    casterLevel: 7,
    slot: 'eyes',

    price: 8000,
    weight: 0,

    description:
      'These amber cat-eye lenses grant the wearer enhanced tracking and combat abilities. As a ' +
      'standard action, the wearer can designate a target creature they can see, gaining a +1 bonus ' +
      'on Bluff, Knowledge, Perception, Sense Motive, and Survival checks against that creature, ' +
      'along with a +1 bonus on weapon attack rolls and damage rolls against it. Effects last up to ' +
      '10 rounds per day (non-consecutive). For users with the studied target class feature, the ' +
      'lenses instead function as a free action to increase effective slayer level by 5 for studied ' +
      'target purposes.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: [],
      specialRequirements: ['Creator must possess the studied target class feature'],
      cost: 4000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'command_word',
    activationAction: 'standard',

    effects: [
      {
        type: 'bonus',
        bonusType: 'untyped',
        target: 'attack.all',
        value: 1,
        source: "Lenses of the Predator's Gaze",
        condition: {
          type: 'custom',
          params: { descriptor: 'designated_target' },
          description: 'against designated target only, 10 rounds/day',
        },
      },
      {
        type: 'special',
        target: 'special.studied_target_boost',
        value: 5,
        source: "Lenses of the Predator's Gaze",
        condition: {
          type: 'custom',
          params: { descriptor: 'studied_target_class_feature' },
          description: 'for wielders with the studied target class feature only',
        },
      },
    ],
  },

  // ── 15. Lenses, Fogcutting ──────────────────────────────────────────────────
  {
    id: 'wondrous-lenses-fogcutting',
    name: 'Lenses, Fogcutting',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'eyes',

    price: 8000,
    weight: 1,

    description:
      'These crystal goggles with brass frames allow wearers to see through magical and normal ' +
      'obscurement such as fog and mist. They impose a -4 penalty on Perception checks due to ' +
      'visual distortion, and do not grant darkvision or low-light vision.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['darkvision', 'fog cloud'],
      cost: 4000,
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
        target: 'special.see_through_fog',
        value: 0,
        source: 'Lenses, Fogcutting',
      },
      {
        type: 'penalty',
        target: 'skill.perception',
        value: -4,
        source: 'Lenses, Fogcutting',
      },
    ],
  },

  // ── 16. Lenses, Rainbow ─────────────────────────────────────────────────────
  {
    id: 'wondrous-lenses-rainbow',
    name: 'Lenses, Rainbow',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 15,
    slot: 'eyes',

    price: 21000,
    weight: 0,

    description:
      'The wearer perceives everything in black and white, similar to darkvision. Once per day, the ' +
      'wearer can activate color spray, hypnotic pattern, and rainbow pattern.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['color spray', 'hypnotic pattern', 'rainbow pattern'],
      cost: 10500,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'command_word',
    activationAction: 'standard',

    effects: [
      {
        type: 'special',
        target: 'special.monochromatic_vision',
        value: 0,
        source: 'Lenses, Rainbow',
      },
    ],

    spellLikeAbilities: [
      {
        usesPerDay: 1,
        spells: [
          {
            spellId: 'color_spray',
            spellName: 'Color Spray',
            casterLevel: 15,
            activationAction: 'standard',
          },
          {
            spellId: 'hypnotic_pattern',
            spellName: 'Hypnotic Pattern',
            casterLevel: 15,
            activationAction: 'standard',
          },
          {
            spellId: 'rainbow_pattern',
            spellName: 'Rainbow Pattern',
            casterLevel: 15,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // ── 17. Levitating Land Mine ────────────────────────────────────────────────
  {
    id: 'wondrous-levitating-land-mine',
    name: 'Levitating Land Mine',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'none',

    price: 750,
    weight: 3,

    description:
      'This magical steel disc activates via command word, burrowing 3 inches into the ground. ' +
      'Finding it requires a DC 25 Perception check with the trapfinding ability. Planting the mine ' +
      'takes a full-round action and provokes attacks of opportunity. When triggered by a creature ' +
      'stepping on it, the creature must make a DC 14 Will save or be levitated 5 inches off the ' +
      'ground. Levitated creatures cannot move, lose their Dexterity bonus to AC, and suffer a -4 ' +
      'CMD penalty against bull rush, drag, and reposition maneuvers. Flying creatures are immune. ' +
      'The effect lasts 5 rounds, ends with a successful DC 25 Disable Device check, or when the ' +
      'creature succeeds on a new save each round. The mine is destroyed when the effect ends.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['hostile levitation', 'snare'],
      cost: 375,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 10,
      breakDC: 26,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.levitation_trap',
        value: 0,
        source: 'Levitating Land Mine',
      },
      {
        type: 'penalty',
        target: 'ac.dex',
        value: 0,
        source: 'Levitating Land Mine',
        condition: {
          type: 'custom',
          params: { descriptor: 'levitated' },
          description: 'levitated target loses Dexterity bonus to AC',
        },
      },
      {
        type: 'penalty',
        target: 'cmd',
        value: -4,
        source: 'Levitating Land Mine',
        condition: {
          type: 'custom',
          params: { descriptor: 'levitated_bull_rush_drag_reposition' },
          description: 'levitated target vs. bull rush, drag, reposition maneuvers only',
        },
      },
    ],
  },

  // ── 18. Liberator's Key ─────────────────────────────────────────────────────
  {
    id: 'wondrous-liberators-key',
    name: "Liberator's Key",
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'none',

    price: 2000,
    weight: 0,

    description:
      'This magical silver key unlocks restraints. When inserted into shackles, manacles, or leg ' +
      'irons as a standard action, it opens locks with a Disable Device DC of 30 or lower. Locks ' +
      'with a DC of 15 or lower are instantly and silently broken into fragments. The item functions ' +
      '10 times before crumbling to dust.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['knock', 'shatter'],
      cost: 1000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'use_activated',
    activationAction: 'standard',

    charges: { maximum: 10 },

    effects: [
      {
        type: 'special',
        target: 'special.unlock_restraints',
        value: 0,
        source: "Liberator's Key",
      },
    ],
  },

  // ── 19. Lidless Charm Bracelet ──────────────────────────────────────────────
  {
    id: 'wondrous-lidless-charm-bracelet',
    name: 'Lidless Charm Bracelet',
    category: 'wondrous',
    source: 'Inner Sea Monster Codex',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ABJURATION }],
    casterLevel: 9,
    slot: 'wrists',

    price: 10000,
    weight: 1,

    description:
      'This bronze bracelet with five dangling eye charms is crafted almost exclusively by medusa ' +
      'spellcasters as demonstrations of good faith to allies. Once per day, by touching the ' +
      'bracelet to a creature with a gaze attack, the wearer becomes immune to natural gaze attacks ' +
      'from all creatures of that type for 24 hours. This does not protect against magical gaze ' +
      'attacks from spells or items. When failing a save against a gaze attack, the wearer can ' +
      'expend a charm as an immediate action to reroll the save (must accept the new result). The ' +
      'bracelet contains five charms; when all are expended, the item loses all magical properties.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['blindness/deafness', 'lock gaze'],
      cost: 5000,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 5,
      breakDC: 15,
    },

    activationCategory: 'use_activated',
    activationAction: 'immediate',

    charges: { maximum: 5 },

    effects: [
      {
        type: 'special',
        target: 'special.gaze_type_immunity',
        value: 0,
        source: 'Lidless Charm Bracelet',
      },
      {
        type: 'special',
        target: 'special.gaze_save_reroll',
        value: 0,
        source: 'Lidless Charm Bracelet',
      },
    ],
  },

  // ── 20. Life Link Badge ─────────────────────────────────────────────────────
  {
    id: 'wondrous-life-link-badge',
    name: 'Life Link Badge',
    category: 'wondrous',
    source: 'Advanced Class Guide',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.CONJURATION }],
    casterLevel: 13,
    slot: 'none',

    price: 6000,
    weight: 1,

    description:
      "This leather badge displays a summoner's rune when affixed to armor or clothing. The " +
      'summoner can store charges by expending spell slots, gaining charges equal to the spell ' +
      "slot's level (maximum 5 charges). When the summoner uses their life link ability, instead of " +
      'sacrificing their own hit points, they may expend charges from the badge to heal the eidolon ' +
      '1d6 hit points per charge. The summoner can decide how many charges to expend after rolling. ' +
      'All charges deplete when the summoner prepares spells after resting.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['rejuvenate eidolon'],
      cost: 3000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 2,
      breakDC: 10,
    },

    activationCategory: 'use_activated',

    charges: { maximum: 5, rechargeMethod: 'Summoner expends spell slots; depletes on rest' },

    effects: [
      {
        type: 'special',
        target: 'special.life_link_charge_substitute',
        value: 0,
        source: 'Life Link Badge',
      },
    ],
  },

  // ── 21. Life-Reading Eyes ───────────────────────────────────────────────────
  {
    id: 'wondrous-life-reading-eyes',
    name: 'Life-Reading Eyes',
    category: 'wondrous',
    source: 'Agents of Evil',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.DIVINATION }],
    casterLevel: 7,
    slot: 'eyes',

    price: 15000,
    weight: 0,

    description:
      "These dark spectacles obscure the wearer's eyes while enabling perception of creature auras. " +
      'The item grants the ability to read the emotion and health auras of any creature, matching ' +
      "the analyze aura spell's function, though limited to those aura types only.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['analyze aura'],
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
        type: 'special',
        target: 'special.read_emotion_health_auras',
        value: 0,
        source: 'Life-Reading Eyes',
      },
    ],
  },

  // ── 22. Lintel Stone ────────────────────────────────────────────────────────
  {
    id: 'wondrous-lintel-stone',
    name: 'Lintel Stone',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 11,
    slot: 'none',

    price: 26000,
    weight: 12,

    description:
      'This granite brick activates when held atop a portal and touched with a forked metal rod ' +
      'attuned to plane shift. Once triggered, it affixes to the doorway for 1 minute. Creatures ' +
      'stepping through the opening must succeed at a DC 17 Will save or be shunted to the plane ' +
      'to which the metal rod is attuned. All travelers exit through a similar portal on the ' +
      'destination plane. The activating creature cannot control arrival points. After 1 minute, ' +
      'the stone vanishes and returns to the activator\'s possession. It can be used once per day.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['plane shift'],
      cost: 13000,
    },
    physicalStats: {
      hardness: 8,
      hitPoints: 15,
      breakDC: 20,
    },

    activationCategory: 'use_activated',
    activationAction: 'standard',

    effects: [
      {
        type: 'special',
        target: 'special.portal_plane_shift_trap',
        value: 0,
        source: 'Lintel Stone',
      },
    ],
  },

  // ── 23. Lioness's Horn ──────────────────────────────────────────────────────
  {
    id: 'wondrous-lionesss-horn',
    name: "Lioness's Horn",
    category: 'wondrous',
    source: 'Pathfinder Adventure Path #131',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.CONJURATION }],
    casterLevel: 15,
    slot: 'none',

    price: 55000,
    weight: 2,

    description:
      'This curved horn features a lioness head at its bell. While held, the wielder gains the ' +
      'benefits of the deathwatch spell, allowing them to perceive the health status of nearby ' +
      'creatures. Once per year, sounding the horn summons one sleipnir with a saddle for 1 hour ' +
      'in place of summoning the barbarians normally associated with a horn of valhalla. The ' +
      'summoned mount serves willingly as either a mount or combatant.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['deathwatch', 'summon monster VIII'],
      cost: 27500,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 5,
      breakDC: 15,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'special',
        target: 'special.deathwatch_constant',
        value: 0,
        source: "Lioness's Horn",
      },
    ],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'summon_sleipnir',
            spellName: 'Summon Sleipnir (as Summon Monster VIII)',
            casterLevel: 15,
            usesPerDay: 0,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // ── 24. Listening Trumpet ───────────────────────────────────────────────────
  {
    id: 'wondrous-listening-trumpet',
    name: 'Listening Trumpet',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 5,
    slot: 'none',

    price: 10800,
    weight: 1,

    description:
      'This silver ear trumpet features elaborate spirals carved along its 1-foot length. When held ' +
      'to the ear, it enhances hearing within a 200-foot cone, allowing the user to ignore the DC ' +
      'increase for distance applied to sound-based Perception checks. The item does not bypass ' +
      'modifiers for listening through barriers such as doors or walls.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['clairaudience/clairvoyance'],
      cost: 5000,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 5,
      breakDC: 15,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.ignore_distance_perception_penalty',
        value: 0,
        source: 'Listening Trumpet',
        condition: {
          type: 'custom',
          params: { descriptor: 'sound_based' },
          description: 'sound-based Perception checks only, within 200-foot cone',
        },
      },
    ],
  },

  // ── 25. Living Garments ─────────────────────────────────────────────────────
  {
    id: 'wondrous-living-garments',
    name: 'Living Garments',
    category: 'wondrous',
    source: 'Inner Sea World Guide',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 3,
    slot: 'body',

    price: 5000,
    weight: 2,

    description:
      "These spider silk robes adjust their appearance on command to reflect the wearer's mood. " +
      'They always remain clean, and automatically repair damage to themselves at a rate of 1 hit ' +
      'point per round. The garment has 4 hit points and 0 hardness. Wearers gain a +5 competence ' +
      'bonus on Diplomacy checks.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["eagle's splendor", 'mending', 'prestidigitation'],
      specialRequirements: ['Creator must be drow'],
      cost: 2500,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 4,
      breakDC: 10,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.diplomacy',
        value: 5,
        source: 'Living Garments',
      },
      {
        type: 'special',
        target: 'special.self_repair_1hp_per_round',
        value: 1,
        source: 'Living Garments',
      },
    ],
  },
];
