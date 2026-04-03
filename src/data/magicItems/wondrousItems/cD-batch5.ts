import type { WondrousItemDefinition } from '@/types/magicItems';
import { AuraStrength, MagicSchool } from '@/types/equipment';
import { Alignment } from '@/types/base';

export const wondrousItemsCD5: WondrousItemDefinition[] = [
  // ── 1. Cloak of Resistance (+1 through +5) ─────────────────────────────────
  {
    id: 'wondrous-cloak-of-resistance-1',
    name: 'Cloak of Resistance +1',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION }],
    casterLevel: 5,
    slot: 'shoulders',

    price: 1000,
    weight: 1,

    description:
      'Magical cloaks with silver or steel flecks woven into the fabric grant the wearer a ' +
      '+1 resistance bonus on all saving throws (Fortitude, Reflex, and Will).',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['resistance'],
      cost: 500,
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
        bonusType: 'resistance',
        target: 'save.all',
        value: 1,
        source: 'Cloak of Resistance +1',
      },
    ],
  },

  {
    id: 'wondrous-cloak-of-resistance-2',
    name: 'Cloak of Resistance +2',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION }],
    casterLevel: 5,
    slot: 'shoulders',

    price: 4000,
    weight: 1,

    description:
      'Magical cloaks with silver or steel flecks woven into the fabric grant the wearer a ' +
      '+2 resistance bonus on all saving throws (Fortitude, Reflex, and Will).',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['resistance'],
      cost: 2000,
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
        bonusType: 'resistance',
        target: 'save.all',
        value: 2,
        source: 'Cloak of Resistance +2',
      },
    ],
  },

  {
    id: 'wondrous-cloak-of-resistance-3',
    name: 'Cloak of Resistance +3',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION }],
    casterLevel: 5,
    slot: 'shoulders',

    price: 9000,
    weight: 1,

    description:
      'Magical cloaks with silver or steel flecks woven into the fabric grant the wearer a ' +
      '+3 resistance bonus on all saving throws (Fortitude, Reflex, and Will).',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['resistance'],
      cost: 4500,
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
        bonusType: 'resistance',
        target: 'save.all',
        value: 3,
        source: 'Cloak of Resistance +3',
      },
    ],
  },

  {
    id: 'wondrous-cloak-of-resistance-4',
    name: 'Cloak of Resistance +4',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION }],
    casterLevel: 5,
    slot: 'shoulders',

    price: 16000,
    weight: 1,

    description:
      'Magical cloaks with silver or steel flecks woven into the fabric grant the wearer a ' +
      '+4 resistance bonus on all saving throws (Fortitude, Reflex, and Will).',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['resistance'],
      cost: 8000,
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
        bonusType: 'resistance',
        target: 'save.all',
        value: 4,
        source: 'Cloak of Resistance +4',
      },
    ],
  },

  {
    id: 'wondrous-cloak-of-resistance-5',
    name: 'Cloak of Resistance +5',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION }],
    casterLevel: 5,
    slot: 'shoulders',

    price: 25000,
    weight: 1,

    description:
      'Magical cloaks with silver or steel flecks woven into the fabric grant the wearer a ' +
      '+5 resistance bonus on all saving throws (Fortitude, Reflex, and Will).',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['resistance'],
      cost: 12500,
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
        bonusType: 'resistance',
        target: 'save.all',
        value: 5,
        source: 'Cloak of Resistance +5',
      },
    ],
  },

  // ── 2. Cloak of the Bat ────────────────────────────────────────────────────
  {
    id: 'wondrous-cloak-of-the-bat',
    name: 'Cloak of the Bat',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 7,
    slot: 'shoulders',

    price: 26000,
    weight: 1,

    description:
      'Useful to spies and thieves, this dark cloak provides a +5 competence bonus on Stealth checks. ' +
      'The wearer can hang upside down from a ceiling by hooking the cloak over a protrusion. In darkness, ' +
      'the wearer can fly by holding the cloak edges (as the fly spell, with a +7 bonus on Fly checks) for ' +
      'up to 7 minutes at a time; after which the cloak cannot provide flight for an equal duration. ' +
      'At will, the wearer can transform into a bat using beast shape III. All carried items transform with the wearer.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['beast shape III', 'fly'],
      cost: 13000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'command_word',

    effects: [
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.stealth',
        value: 5,
        source: 'Cloak of the Bat',
      },
      {
        type: 'special',
        target: 'special.cloak_of_the_bat_flight',
        value: 0,
        source: 'Cloak of the Bat',
      },
      {
        type: 'special',
        target: 'special.cloak_of_the_bat_polymorph',
        value: 0,
        source: 'Cloak of the Bat',
      },
    ],
  },

  // ── 3. Cloak of the Crusader ───────────────────────────────────────────────
  {
    id: 'wondrous-cloak-of-the-crusader',
    name: 'Cloak of the Crusader',
    category: 'wondrous',
    source: 'Inner Sea World Guide',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 1,
    slot: 'shoulders',

    price: 2700,
    weight: 1,

    description:
      "A striking red cloak displaying a golden upright winged sword—the holy symbol of Iomedae. " +
      "The wearer can cast bless once per day. If Iomedae is the wearer's patron deity, they also receive " +
      "a +1 enhancement bonus to natural armor. As a standard action, a devotee of Iomedae can conjure an " +
      "illusory representation of her battle standard that hovers 2–5 feet overhead while conscious; " +
      "those with the banner class feature may use this as their battle standard.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['barkskin', 'bless', 'silent image'],
      cost: 1350,
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
        target: 'special.cloak_of_the_crusader_bless',
        value: 0,
        source: 'Cloak of the Crusader',
      },
    ],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'bless',
            spellName: 'Bless',
            casterLevel: 1,
            usesPerDay: 1,
            activationAction: 'standard',
          },
        ],
      },
    ],

    conditionalEffects: [
      {
        condition: 'wielder_alignment',
        alignment: Alignment.LawfulGood,
        effects: [
          {
            type: 'bonus',
            bonusType: 'enhancement',
            target: 'ac.natural',
            value: 1,
            source: 'Cloak of the Crusader (Iomedae devotee)',
          },
        ],
        spellLikeAbilities: [
          {
            spells: [
              {
                spellId: 'silent_image',
                spellName: 'Silent Image (banner)',
                casterLevel: 1,
                usesPerDay: 0,
                activationAction: 'standard',
              },
            ],
          },
        ],
      },
    ],
  },

  // ── 4. Cloak of the Dark Tapestry ─────────────────────────────────────────
  {
    id: 'wondrous-cloak-of-the-dark-tapestry',
    name: 'Cloak of the Dark Tapestry',
    category: 'wondrous',
    source: 'Inner Sea World Guide',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION }],
    casterLevel: 5,
    slot: 'shoulders',

    price: 2500,
    weight: 5,

    description:
      "A dark hooded cloak embroidered with comets, moons, and stars along its edges. " +
      "All wearers gain protection from temperature extremes while sleeping (endure elements), " +
      "can sleep in medium armor without fatigue, and can use know direction once per day. " +
      "A wearer with a good-aligned patron deity can manipulate the celestial embroidery to match " +
      "the current night sky at will, gain longstrider benefits once per day, cast a flare meteor " +
      "once per day, and activate dimension door once per day while under a starry sky.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: [
        'disguise self',
        'endure elements',
        'flare',
        'know direction',
        'lesser restoration',
        'longstrider',
      ],
      cost: 1250,
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
        target: 'special.endure_elements_sleep',
        value: 0,
        source: 'Cloak of the Dark Tapestry',
      },
      {
        type: 'special',
        target: 'special.sleep_in_medium_armor',
        value: 0,
        source: 'Cloak of the Dark Tapestry',
      },
    ],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'know_direction',
            spellName: 'Know Direction',
            casterLevel: 5,
            usesPerDay: 1,
            activationAction: 'standard',
          },
        ],
      },
    ],

    conditionalEffects: [
      {
        condition: 'wielder_alignment',
        alignment: Alignment.NeutralGood,
        spellLikeAbilities: [
          {
            spells: [
              {
                spellId: 'longstrider',
                spellName: 'Longstrider',
                casterLevel: 5,
                usesPerDay: 1,
                activationAction: 'standard',
              },
              {
                spellId: 'dimension_door',
                spellName: 'Dimension Door',
                casterLevel: 5,
                usesPerDay: 1,
                activationAction: 'standard',
              },
            ],
          },
        ],
      },
    ],
  },

  // ── 5. Cloak of the Diplomat ───────────────────────────────────────────────
  {
    id: 'wondrous-cloak-of-the-diplomat',
    name: 'Cloak of the Diplomat',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 7,
    slot: 'shoulders',

    price: 20000,
    weight: 1,

    description:
      'This forest-green cloak grants a +5 competence bonus on Diplomacy and Sense Motive checks. ' +
      'Once per day before making either check, the wearer may roll twice and take the better result. ' +
      'The wearer can also shift a creature\'s attitude up to three steps when using Diplomacy instead ' +
      'of the normal limit of two steps. However, should the wearer fail a Diplomacy check to adjust ' +
      "a creature's attitude by 5 or more, the creature's attitude is reduced by two steps instead of one.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['charm person'],
      specialRequirements: ['Creator must have 5 ranks in both Diplomacy and Sense Motive'],
      cost: 10000,
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
        target: 'skill.diplomacy',
        value: 5,
        source: 'Cloak of the Diplomat',
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.sense_motive',
        value: 5,
        source: 'Cloak of the Diplomat',
      },
      {
        type: 'special',
        target: 'special.cloak_diplomat_reroll',
        value: 0,
        source: 'Cloak of the Diplomat',
      },
      {
        type: 'special',
        target: 'special.cloak_diplomat_attitude_shift',
        value: 0,
        source: 'Cloak of the Diplomat',
      },
    ],
  },

  // ── 6. Cloak of the Dusk Walker ───────────────────────────────────────────
  {
    id: 'wondrous-cloak-of-the-dusk-walker',
    name: 'Cloak of the Dusk Walker',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ILLUSION }],
    casterLevel: 3,
    slot: 'shoulders',

    price: 10000,
    weight: 1,

    description:
      'This dark, velvety cloak billows with a dramatic flourish in its wearer\'s wake. It grants the ' +
      'wearer constant low-light vision. Once per day as a command word action, the wearer can activate ' +
      'darkness around herself, functioning as the darkness spell. While this darkness is active, the ' +
      'cloak additionally grants darkvision out to 60 feet and low-light vision.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['darkness', 'darkvision'],
      cost: 5000,
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
        target: 'special.low_light_vision',
        value: 1,
        source: 'Cloak of the Dusk Walker',
      },
      {
        type: 'special',
        target: 'special.cloak_dusk_walker_darkness',
        value: 0,
        source: 'Cloak of the Dusk Walker',
      },
    ],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'darkness',
            spellName: 'Darkness',
            casterLevel: 3,
            usesPerDay: 1,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // ── 7. Cloak of the Hedge Wizard ──────────────────────────────────────────
  // Eight school variants — each treated as a separate entry.
  {
    id: 'wondrous-cloak-of-the-hedge-wizard-abjuration',
    name: 'Cloak of the Hedge Wizard (Abjuration)',
    category: 'wondrous',
    source: "Ultimate Equipment",
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION }],
    casterLevel: 1,
    slot: 'shoulders',

    price: 2500,
    weight: 1,

    description:
      'This magical cloak allows the wearer to use prestidigitation on command and at will, plus ' +
      'resistance at will, and endure elements and shield each once per day (abjuration variant).',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['prestidigitation', 'resistance', 'endure elements', 'shield'],
      specialRequirements: ['Spell Focus (Abjuration)'],
      cost: 1125,
    },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'command_word',

    effects: [],

    spellLikeAbilities: [
      {
        spells: [
          { spellId: 'prestidigitation', spellName: 'Prestidigitation', casterLevel: 1, usesPerDay: 0, activationAction: 'standard' },
          { spellId: 'resistance', spellName: 'Resistance', casterLevel: 1, usesPerDay: 0, activationAction: 'standard' },
          { spellId: 'endure_elements', spellName: 'Endure Elements', casterLevel: 1, usesPerDay: 1, activationAction: 'standard' },
          { spellId: 'shield', spellName: 'Shield', casterLevel: 1, usesPerDay: 1, activationAction: 'standard' },
        ],
      },
    ],
  },

  {
    id: 'wondrous-cloak-of-the-hedge-wizard-conjuration',
    name: 'Cloak of the Hedge Wizard (Conjuration)',
    category: 'wondrous',
    source: "Ultimate Equipment",
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.CONJURATION }],
    casterLevel: 1,
    slot: 'shoulders',

    price: 2500,
    weight: 1,

    description:
      'This magical cloak allows the wearer to use prestidigitation on command and at will, plus ' +
      'acid splash at will, and mage armor and unseen servant each once per day (conjuration variant).',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['prestidigitation', 'acid splash', 'mage armor', 'unseen servant'],
      specialRequirements: ['Spell Focus (Conjuration)'],
      cost: 1125,
    },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'command_word',

    effects: [],

    spellLikeAbilities: [
      {
        spells: [
          { spellId: 'prestidigitation', spellName: 'Prestidigitation', casterLevel: 1, usesPerDay: 0, activationAction: 'standard' },
          { spellId: 'acid_splash', spellName: 'Acid Splash', casterLevel: 1, usesPerDay: 0, activationAction: 'standard' },
          { spellId: 'mage_armor', spellName: 'Mage Armor', casterLevel: 1, usesPerDay: 1, activationAction: 'standard' },
          { spellId: 'unseen_servant', spellName: 'Unseen Servant', casterLevel: 1, usesPerDay: 1, activationAction: 'standard' },
        ],
      },
    ],
  },

  {
    id: 'wondrous-cloak-of-the-hedge-wizard-divination',
    name: 'Cloak of the Hedge Wizard (Divination)',
    category: 'wondrous',
    source: "Ultimate Equipment",
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 1,
    slot: 'shoulders',

    price: 2500,
    weight: 1,

    description:
      'This magical cloak allows the wearer to use prestidigitation on command and at will, plus ' +
      'detect magic at will, and detect secret doors and true strike each once per day (divination variant).',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['prestidigitation', 'detect magic', 'detect secret doors', 'true strike'],
      specialRequirements: ['Spell Focus (Divination)'],
      cost: 1125,
    },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'command_word',

    effects: [],

    spellLikeAbilities: [
      {
        spells: [
          { spellId: 'prestidigitation', spellName: 'Prestidigitation', casterLevel: 1, usesPerDay: 0, activationAction: 'standard' },
          { spellId: 'detect_magic', spellName: 'Detect Magic', casterLevel: 1, usesPerDay: 0, activationAction: 'standard' },
          { spellId: 'detect_secret_doors', spellName: 'Detect Secret Doors', casterLevel: 1, usesPerDay: 1, activationAction: 'standard' },
          { spellId: 'true_strike', spellName: 'True Strike', casterLevel: 1, usesPerDay: 1, activationAction: 'standard' },
        ],
      },
    ],
  },

  {
    id: 'wondrous-cloak-of-the-hedge-wizard-enchantment',
    name: 'Cloak of the Hedge Wizard (Enchantment)',
    category: 'wondrous',
    source: "Ultimate Equipment",
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 1,
    slot: 'shoulders',

    price: 2500,
    weight: 1,

    description:
      'This magical cloak allows the wearer to use prestidigitation on command and at will, plus ' +
      'daze at will, and charm person and sleep each once per day (enchantment variant).',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['prestidigitation', 'daze', 'charm person', 'sleep'],
      specialRequirements: ['Spell Focus (Enchantment)'],
      cost: 1125,
    },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'command_word',

    effects: [],

    spellLikeAbilities: [
      {
        spells: [
          { spellId: 'prestidigitation', spellName: 'Prestidigitation', casterLevel: 1, usesPerDay: 0, activationAction: 'standard' },
          { spellId: 'daze', spellName: 'Daze', casterLevel: 1, usesPerDay: 0, activationAction: 'standard' },
          { spellId: 'charm_person', spellName: 'Charm Person', casterLevel: 1, usesPerDay: 1, activationAction: 'standard' },
          { spellId: 'sleep', spellName: 'Sleep', casterLevel: 1, usesPerDay: 1, activationAction: 'standard' },
        ],
      },
    ],
  },

  {
    id: 'wondrous-cloak-of-the-hedge-wizard-evocation',
    name: 'Cloak of the Hedge Wizard (Evocation)',
    category: 'wondrous',
    source: "Ultimate Equipment",
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.EVOCATION }],
    casterLevel: 1,
    slot: 'shoulders',

    price: 2500,
    weight: 1,

    description:
      'This magical cloak allows the wearer to use prestidigitation on command and at will, plus ' +
      'light at will, and floating disk and magic missile each once per day (evocation variant).',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['prestidigitation', 'light', 'floating disk', 'magic missile'],
      specialRequirements: ['Spell Focus (Evocation)'],
      cost: 1125,
    },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'command_word',

    effects: [],

    spellLikeAbilities: [
      {
        spells: [
          { spellId: 'prestidigitation', spellName: 'Prestidigitation', casterLevel: 1, usesPerDay: 0, activationAction: 'standard' },
          { spellId: 'light', spellName: 'Light', casterLevel: 1, usesPerDay: 0, activationAction: 'standard' },
          { spellId: 'floating_disk', spellName: "Tenser's Floating Disk", casterLevel: 1, usesPerDay: 1, activationAction: 'standard' },
          { spellId: 'magic_missile', spellName: 'Magic Missile', casterLevel: 1, usesPerDay: 1, activationAction: 'standard' },
        ],
      },
    ],
  },

  {
    id: 'wondrous-cloak-of-the-hedge-wizard-illusion',
    name: 'Cloak of the Hedge Wizard (Illusion)',
    category: 'wondrous',
    source: "Ultimate Equipment",
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ILLUSION }],
    casterLevel: 1,
    slot: 'shoulders',

    price: 2500,
    weight: 1,

    description:
      'This magical cloak allows the wearer to use prestidigitation on command and at will, plus ' +
      'ghost sound at will, and color spray and silent image each once per day (illusion variant).',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['prestidigitation', 'ghost sound', 'color spray', 'silent image'],
      specialRequirements: ['Spell Focus (Illusion)'],
      cost: 1125,
    },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'command_word',

    effects: [],

    spellLikeAbilities: [
      {
        spells: [
          { spellId: 'prestidigitation', spellName: 'Prestidigitation', casterLevel: 1, usesPerDay: 0, activationAction: 'standard' },
          { spellId: 'ghost_sound', spellName: 'Ghost Sound', casterLevel: 1, usesPerDay: 0, activationAction: 'standard' },
          { spellId: 'color_spray', spellName: 'Color Spray', casterLevel: 1, usesPerDay: 1, activationAction: 'standard' },
          { spellId: 'silent_image', spellName: 'Silent Image', casterLevel: 1, usesPerDay: 1, activationAction: 'standard' },
        ],
      },
    ],
  },

  {
    id: 'wondrous-cloak-of-the-hedge-wizard-necromancy',
    name: 'Cloak of the Hedge Wizard (Necromancy)',
    category: 'wondrous',
    source: "Ultimate Equipment",
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.NECROMANCY }],
    casterLevel: 1,
    slot: 'shoulders',

    price: 2500,
    weight: 1,

    description:
      'This magical cloak allows the wearer to use prestidigitation on command and at will, plus ' +
      'touch of fatigue at will, and cause fear and ray of enfeeblement each once per day (necromancy variant).',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['prestidigitation', 'touch of fatigue', 'cause fear', 'ray of enfeeblement'],
      specialRequirements: ['Spell Focus (Necromancy)'],
      cost: 1125,
    },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'command_word',

    effects: [],

    spellLikeAbilities: [
      {
        spells: [
          { spellId: 'prestidigitation', spellName: 'Prestidigitation', casterLevel: 1, usesPerDay: 0, activationAction: 'standard' },
          { spellId: 'touch_of_fatigue', spellName: 'Touch of Fatigue', casterLevel: 1, usesPerDay: 0, activationAction: 'standard' },
          { spellId: 'cause_fear', spellName: 'Cause Fear', casterLevel: 1, usesPerDay: 1, activationAction: 'standard' },
          { spellId: 'ray_of_enfeeblement', spellName: 'Ray of Enfeeblement', casterLevel: 1, usesPerDay: 1, activationAction: 'standard' },
        ],
      },
    ],
  },

  {
    id: 'wondrous-cloak-of-the-hedge-wizard-transmutation',
    name: 'Cloak of the Hedge Wizard (Transmutation)',
    category: 'wondrous',
    source: "Ultimate Equipment",
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 1,
    slot: 'shoulders',

    price: 2500,
    weight: 1,

    description:
      'This magical cloak allows the wearer to use prestidigitation on command and at will, plus ' +
      'mage hand at will, and enlarge person and expeditious retreat each once per day (transmutation variant).',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['prestidigitation', 'mage hand', 'enlarge person', 'expeditious retreat'],
      specialRequirements: ['Spell Focus (Transmutation)'],
      cost: 1125,
    },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'command_word',

    effects: [],

    spellLikeAbilities: [
      {
        spells: [
          { spellId: 'prestidigitation', spellName: 'Prestidigitation', casterLevel: 1, usesPerDay: 0, activationAction: 'standard' },
          { spellId: 'mage_hand', spellName: 'Mage Hand', casterLevel: 1, usesPerDay: 0, activationAction: 'standard' },
          { spellId: 'enlarge_person', spellName: 'Enlarge Person', casterLevel: 1, usesPerDay: 1, activationAction: 'standard' },
          { spellId: 'expeditious_retreat', spellName: 'Expeditious Retreat', casterLevel: 1, usesPerDay: 1, activationAction: 'standard' },
        ],
      },
    ],
  },

  // ── 8. Cloak of the Jungle ────────────────────────────────────────────────
  {
    id: 'wondrous-cloak-of-the-jungle',
    name: 'Cloak of the Jungle',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 3,
    slot: 'shoulders',

    price: 2400,
    weight: 1,

    description:
      'This green cloak allows the wearer to transform into a Large tree or shrub as per the ' +
      'tree shape spell when the hood is drawn up. The transformation can be used once daily and ' +
      'lasts up to one hour. The wearer may revert to normal form instantly as a free action.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['tree shape'],
      cost: 1200,
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
        target: 'special.cloak_of_the_jungle_tree_shape',
        value: 0,
        source: 'Cloak of the Jungle',
      },
    ],
  },

  // ── 9. Cloak of the Manta Ray ─────────────────────────────────────────────
  {
    id: 'wondrous-cloak-of-the-manta-ray',
    name: 'Cloak of the Manta Ray',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 9,
    slot: 'shoulders',

    price: 7200,
    weight: 1,

    description:
      'This cloak is cut and dyed to resemble a manta ray. When the wearer enters salt water, ' +
      'it causes her to transform into the form of a manta ray (as beast shape II, manta ray form only). ' +
      'The wearer gains a +3 natural armor bonus, the ability to breathe underwater, a 60-foot swim speed, ' +
      'and can make tail spine attacks dealing 1d6 damage. The wearer may release her arms from the cloak ' +
      'while maintaining underwater mobility.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['beast shape II', 'water breathing'],
      cost: 3600,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'bonus',
        bonusType: 'natural',
        target: 'ac.natural',
        value: 3,
        source: 'Cloak of the Manta Ray',
        condition: {
          type: 'custom',
          params: { descriptor: 'salt_water_immersion' },
          description: 'while transformed in salt water',
        },
      },
      {
        type: 'special',
        target: 'special.swim_speed',
        value: 60,
        source: 'Cloak of the Manta Ray',
        condition: {
          type: 'custom',
          params: { descriptor: 'salt_water_immersion' },
          description: 'while transformed in salt water',
        },
      },
      {
        type: 'special',
        target: 'special.cloak_manta_ray_underwater_breathing',
        value: 0,
        source: 'Cloak of the Manta Ray',
      },
    ],
  },

  // ── 10. Cloak of the Scuttling Rat ────────────────────────────────────────
  {
    id: 'wondrous-cloak-of-the-scuttling-rat',
    name: 'Cloak of the Scuttling Rat',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'shoulders',

    price: 6000,
    weight: 1,

    description:
      'This leather cloak transforms the wearer into a dire rat upon speaking the command word, ' +
      'functioning as the beast shape I spell. The wearer can use this ability for up to 5 minutes ' +
      'per day, usable in 1-minute increments that need not be consecutive.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['beast shape I'],
      cost: 3000,
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
        target: 'special.cloak_scuttling_rat_polymorph',
        value: 0,
        source: 'Cloak of the Scuttling Rat',
      },
    ],
  },

  // ── 11. Cloak of the Sneaky Scoundrel ─────────────────────────────────────
  {
    id: 'wondrous-cloak-of-the-sneaky-scoundrel',
    name: 'Cloak of the Sneaky Scoundrel',
    category: 'wondrous',
    source: 'Advanced Class Guide',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ILLUSION }],
    casterLevel: 5,
    slot: 'shoulders',

    price: 6400,
    weight: 2,

    description:
      'This burgundy cloak shifts color subtly, providing a +5 competence bonus on Stealth checks. ' +
      'A concealed scabbard for light blades requires a DC 20 Perception check to discover during a search. ' +
      'A swashbuckler wearing this cloak may spend 1 panache point to cast vanish.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['shrink item', 'vanish'],
      cost: 3200,
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
        target: 'skill.stealth',
        value: 5,
        source: 'Cloak of the Sneaky Scoundrel',
      },
      {
        type: 'special',
        target: 'special.cloak_sneaky_scoundrel_hidden_scabbard',
        value: 0,
        source: 'Cloak of the Sneaky Scoundrel',
      },
    ],

    conditionalEffects: [
      {
        condition: 'wielder_class',
        classId: 'swashbuckler',
        spellLikeAbilities: [
          {
            spells: [
              {
                spellId: 'vanish',
                spellName: 'Vanish',
                casterLevel: 5,
                activationAction: 'swift',
              },
            ],
          },
        ],
      },
    ],
  },

  // ── 12. Cloak of Woodland Creatures ───────────────────────────────────────
  {
    id: 'wondrous-cloak-of-woodland-creatures',
    name: 'Cloak of Woodland Creatures',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [
      { strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION },
      { strength: AuraStrength.FAINT, school: MagicSchool.CONJURATION },
    ],
    casterLevel: 5,
    slot: 'shoulders',

    price: 3500,
    weight: 1,

    description:
      'A forest-green wool cloak featuring embroidered woodland creatures in white thread along ' +
      'the hem and hood edges. It grants a +1 resistance bonus on all saving throws. When removed ' +
      'and placed on natural outdoor ground, it summons animals for 10 minutes (usable up to 3 times ' +
      'per day). Summoned creatures obey Handle Animal skill commands. The cloak cannot function on ' +
      'artificial surfaces. Roll d%: 01-30 = 1 owl; 31-60 = 1d3 rats; 61-75 = 1 weasel; ' +
      '76-90 = 1d6 squirrels; 91-100 = 1d4 rabbits.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["resistance", "summon nature's ally I"],
      cost: 2250,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'bonus',
        bonusType: 'resistance',
        target: 'save.all',
        value: 1,
        source: 'Cloak of Woodland Creatures',
      },
      {
        type: 'special',
        target: 'special.cloak_woodland_creatures_summon',
        value: 0,
        source: 'Cloak of Woodland Creatures',
      },
    ],
  },

  // ── 13. Cloak, Arbalest ───────────────────────────────────────────────────
  {
    id: 'wondrous-cloak-arbalest',
    name: 'Cloak, Arbalest',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 9,
    slot: 'shoulders',

    price: 9000,
    weight: 8,

    description:
      'This metallic cloak displays images of ballistae and fits over armor without adding bulk. ' +
      'When activated as a swift action, the cloak extends outward with jagged, sharp points for one round. ' +
      'During that round the wearer gains masterwork armor spikes (and proficiency with them) and can walk on air ' +
      'as per the air walk spell (a mounted wearer\'s mount gains the benefit instead). The wearer must be on ' +
      'solid ground by round\'s end or falls, taking damage. On the first successful charge that round, the ' +
      'wearer deals an additional 1d6 piercing damage (1d4 if Small), plus 1d6 (1d4 if Small) per 20 feet ' +
      'traveled in a straight line during the charge, to a maximum of 3d6. Usable up to 3 times per day, ' +
      'no more than once per minute.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["air walk", "bull's strength"],
      cost: 4500,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 5,
      breakDC: 18,
    },

    activationCategory: 'command_word',
    activationAction: 'swift',

    effects: [
      {
        type: 'special',
        target: 'special.cloak_arbalest_spike_charge',
        value: 0,
        source: 'Cloak, Arbalest',
      },
    ],
  },

  // ── 14. Cloak, Cocoon ─────────────────────────────────────────────────────
  {
    id: 'wondrous-cloak-cocoon',
    name: 'Cloak, Cocoon',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 7,
    slot: 'shoulders',

    price: 10000,
    weight: 1,

    description:
      'A durable silk cloak that automatically transforms into a protective cocoon whenever the wearer ' +
      'falls asleep, whether naturally or magically induced. While in cocoon form the wearer gains a +4 ' +
      'enhancement bonus to natural armor and protection equivalent to light fortification (25% chance to ' +
      'negate critical hits and sneak attacks, dealing normal damage instead). The cocoon reverts to cloak ' +
      'form when the wearer awakens.',

    construction: {
      feats: ['Craft Wondrous Item', 'Vermin Shape I'],
      spells: [],
      cost: 5000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'ac.natural',
        value: 4,
        source: 'Cloak, Cocoon',
        condition: {
          type: 'custom',
          params: { descriptor: 'cocoon_form' },
          description: 'while in cocoon form (wearer is asleep)',
        },
      },
      {
        type: 'special',
        target: 'special.cloak_cocoon_light_fortification',
        value: 0,
        source: 'Cloak, Cocoon',
      },
    ],
  },

  // ── 15. Cloak, Comfort's ──────────────────────────────────────────────────
  {
    id: "wondrous-cloak-comforts",
    name: "Cloak, Comfort's",
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [
      { strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION },
      { strength: AuraStrength.FAINT, school: MagicSchool.NECROMANCY },
    ],
    casterLevel: 5,
    slot: 'shoulders',

    price: 15600,
    weight: 1,

    description:
      "This ranger-favored cloak provides a constant endure elements effect. It grants a +4 " +
      "competence bonus on saving throws against disease, energy drain, fatigue and exhaustion " +
      "effects, and poisons. During 8 hours of rest, the wearer recovers twice their Hit Dice in " +
      "hit points instead of the normal amount. A 24-hour rest period grants recovery of 5 times " +
      "Hit Dice in hit points instead of the typical 2 times.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['endure elements'],
      cost: 7800,
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
        target: 'special.endure_elements',
        value: 0,
        source: "Cloak, Comfort's",
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'save.fortitude',
        value: 4,
        source: "Cloak, Comfort's",
        condition: {
          type: 'custom',
          params: { descriptor: 'disease_energy_drain_fatigue_poison' },
          description: 'against disease, energy drain, fatigue/exhaustion, and poison effects',
        },
      },
      {
        type: 'special',
        target: "special.cloak_comforts_enhanced_rest",
        value: 0,
        source: "Cloak, Comfort's",
      },
    ],
  },

  // ── 16. Cloak, Cowardly Crouching ─────────────────────────────────────────
  {
    id: 'wondrous-cloak-cowardly-crouching',
    name: 'Cloak, Cowardly Crouching',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION }],
    casterLevel: 1,
    slot: 'shoulders',

    price: 1800,
    weight: 4,

    description:
      'A nondescript gray cloak with an oversized hood. The wearer can use a move action to cover ' +
      'his face and drop to a huddling crouch. Creatures attempting direct attacks must succeed at a ' +
      'DC 11 Will save, as if affected by the sanctuary spell. While crouching, the wearer cannot see ' +
      'or take actions (effectively blinded with standard penalties) but is not helpless. The wearer ' +
      'can end the crouch by standing or moving.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['sanctuary'],
      cost: 900,
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
        target: 'special.cloak_cowardly_crouching_sanctuary',
        value: 0,
        source: 'Cloak, Cowardly Crouching',
      },
    ],
  },

  // ── 17. Cloak, Deathlurker's ──────────────────────────────────────────────
  {
    id: "wondrous-cloak-deathlurkers",
    name: "Cloak, Deathlurker's",
    category: 'wondrous',
    source: 'Inner Sea Gods',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.NECROMANCY }],
    casterLevel: 3,
    slot: 'shoulders',

    price: 2700,
    weight: 1,

    description:
      "A drab gray cloak that billows on an invisible wind. The wearer can cast doom once per day. " +
      "Worshippers of the associated deity may also cast false life once per day. While false life is active, " +
      "if the wearer executes a dying opponent via coup de grace, the false life's temporary hit points increase " +
      "by 1 (maximum 20 temporary HP); this bonus only applies if the slain creature has at least as many Hit " +
      "Dice as the wearer.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['death knell', 'doom', 'false life'],
      cost: 1350,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'command_word',
    activationAction: 'standard',

    effects: [],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'doom',
            spellName: 'Doom',
            casterLevel: 3,
            usesPerDay: 1,
            activationAction: 'standard',
          },
        ],
      },
    ],

    conditionalEffects: [
      {
        condition: 'wielder_alignment',
        alignment: Alignment.NeutralEvil,
        spellLikeAbilities: [
          {
            spells: [
              {
                spellId: 'false_life',
                spellName: 'False Life',
                casterLevel: 3,
                usesPerDay: 1,
                activationAction: 'standard',
              },
            ],
          },
        ],
        effects: [
          {
            type: 'special',
            target: 'special.cloak_deathlurker_coup_de_grace_temp_hp',
            value: 0,
            source: "Cloak, Deathlurker's",
          },
        ],
      },
    ],
  },

  // ── 18. Cloak, Elusion ────────────────────────────────────────────────────
  {
    id: 'wondrous-cloak-elusion',
    name: 'Cloak, Elusion',
    category: 'wondrous',
    source: 'Advanced Race Guide',
    isOfficial: true,

    aura: [
      { strength: AuraStrength.FAINT, school: MagicSchool.ILLUSION },
      { strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION },
    ],
    casterLevel: 1,
    slot: 'shoulders',

    price: 3600,
    weight: 1,

    description:
      'This garment provides a +5 competence bonus on Stealth checks made against creatures at least ' +
      'one size category larger than the wearer. Once per day as a free action when failing a saving throw ' +
      'against a fear effect, the wearer can activate expeditious retreat for 5 rounds or the duration of ' +
      'the fear effect, whichever is shorter.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['expeditious retreat'],
      cost: 1800,
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
        target: 'skill.stealth',
        value: 5,
        source: 'Cloak, Elusion',
        condition: {
          type: 'target_type',
          params: { sizeRelation: 'larger' },
          description: 'against creatures at least one size category larger than the wearer',
        },
      },
      {
        type: 'special',
        target: 'special.cloak_elusion_fear_sprint',
        value: 0,
        source: 'Cloak, Elusion',
      },
    ],
  },

  // ── 19. Cloak, Erinyes Company ────────────────────────────────────────────
  {
    id: 'wondrous-cloak-erinyes-company',
    name: 'Cloak, Erinyes Company',
    category: 'wondrous',
    source: 'Inner Sea World Guide',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 10,
    slot: 'shoulders',

    price: 22000,
    weight: 3,

    description:
      "A crimson cloak adorned with feathers from erinyes devils. The wearer gains a +2 resistance " +
      "bonus on all saving throws. Three times per day the cloak transforms into black-feathered wings " +
      "granting a 30-foot fly speed (average maneuverability) for 10 minutes. When paired with Gray Maiden " +
      "plate, the armor check penalty does not apply to Fly checks.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['fly', 'resistance'],
      cost: 11000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 3,
      breakDC: 12,
    },

    activationCategory: 'command_word',
    activationAction: 'standard',

    effects: [
      {
        type: 'bonus',
        bonusType: 'resistance',
        target: 'save.all',
        value: 2,
        source: 'Cloak, Erinyes Company',
      },
      {
        type: 'special',
        target: 'special.cloak_erinyes_company_fly',
        value: 0,
        source: 'Cloak, Erinyes Company',
      },
    ],
  },

  // ── 20. Cloak, Grasping ───────────────────────────────────────────────────
  {
    id: 'wondrous-cloak-grasping',
    name: 'Cloak, Grasping',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 3,
    slot: 'shoulders',

    price: 3000,
    weight: 1,

    description:
      'This worn cloak manifests a claw with opposable digits, functioning as an extra appendage. ' +
      'As a swift action the wearer can retrieve any small, stowed item on their person or an unattended ' +
      'item within 5 feet. The cloak can hold one item but cannot manipulate it beyond placing it in the ' +
      "wearer's hand; it cannot wield weapons or shields. Once per day as a standard action the wearer can " +
      'brace with the claw, gaining a +4 competence bonus to CMD for 1 round (the cloak cannot retrieve or ' +
      'hold items while bracing).',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['mage hand'],
      cost: 1500,
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
        type: 'special',
        target: 'special.cloak_grasping_retrieve_item',
        value: 0,
        source: 'Cloak, Grasping',
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'cmd',
        value: 4,
        source: 'Cloak, Grasping',
        condition: {
          type: 'custom',
          params: { descriptor: 'brace_action' },
          description: '1/day for 1 round when bracing with the cloak claw',
        },
      },
    ],
  },

  // ── 21. Cloak, Great Barghest Hero ────────────────────────────────────────
  {
    id: 'wondrous-cloak-great-barghest-hero',
    name: 'Cloak, Great Barghest Hero',
    category: 'wondrous',
    source: 'Inner Sea Gods',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 7,
    slot: 'shoulders',

    price: 2800,
    weight: 5,

    description:
      'This cloak resembles a gray wolf pelt with legs and tail, fastened with a wolf-tooth clasp. ' +
      'It grants a +2 competence bonus on Intimidate checks. Once per day, a worshipper of the associated ' +
      'deity or a goblin barghest hero can polymorph into a wolf or wolf-goblin hybrid form (resembling a ' +
      'barghest but with standard wolf statistics) for up to 7 minutes.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['polymorph'],
      specialRequirements: ['Creator must have at least 5 ranks in Intimidate'],
      cost: 1400,
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
        bonusType: 'competence',
        target: 'skill.intimidate',
        value: 2,
        source: 'Cloak, Great Barghest Hero',
      },
      {
        type: 'special',
        target: 'special.cloak_great_barghest_polymorph',
        value: 0,
        source: 'Cloak, Great Barghest Hero',
      },
    ],
  },

  // ── 22. Cloak, Harborwing ─────────────────────────────────────────────────
  {
    id: 'wondrous-cloak-harborwing',
    name: 'Cloak, Harborwing',
    category: 'wondrous',
    source: 'Inner Sea Gods',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 3,
    slot: 'shoulders',

    price: 5200,
    weight: 1,

    description:
      "A white-hooded cloak trimmed with seagull feathers that repels water when the hood is drawn, " +
      "keeping the wearer dry. Three times per day when falling more than 5 feet the wearer may use an " +
      "immediate action to gain feather fall benefits. Once per day as a standard action the cloak becomes " +
      "water-like, providing a 20% miss chance against attacks and up to 3 minutes (in 1-minute increments) " +
      "during which the wearer may use Stealth to hide in rainy conditions even when observed, gaining a " +
      "+5 circumstance bonus on Stealth checks in such environments.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['create water', 'feather fall', 'invisibility'],
      specialRequirements: ['Creator must worship the associated deity'],
      cost: 2600,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'command_word',
    activationAction: 'immediate',

    effects: [
      {
        type: 'special',
        target: 'special.cloak_harborwing_waterproof',
        value: 0,
        source: 'Cloak, Harborwing',
      },
      {
        type: 'bonus',
        bonusType: 'circumstance',
        target: 'skill.stealth',
        value: 5,
        source: 'Cloak, Harborwing',
        condition: {
          type: 'custom',
          params: { descriptor: 'rainy_conditions_liquid_form' },
          description: 'in rainy conditions while liquid form is active',
        },
      },
    ],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'feather_fall',
            spellName: 'Feather Fall',
            casterLevel: 3,
            usesPerDay: 3,
            activationAction: 'immediate',
          },
        ],
      },
    ],
  },

  // ── 23. Cloak, Hunter's ───────────────────────────────────────────────────
  {
    id: "wondrous-cloak-hunters",
    name: "Cloak, Hunter's",
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'shoulders',

    price: 7500,
    weight: 1,

    description:
      "Usually made from the skins of giant serpents, this cloak helps rangers and trackers blend " +
      "into environments they know well. The wearer with the favored terrain class ability can transform " +
      "into an animal native to one of their favored terrains, functioning as beast shape I restricted to " +
      "creatures native to that environment. The effect grants 10 minutes of daily usage, usable in " +
      "1-minute increments that need not be consecutive.",

    construction: {
      feats: ['Craft Wondrous Item', 'Beast Shape I'],
      spells: ['beast shape I'],
      cost: 3750,
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
        target: 'special.cloak_hunters_favored_terrain_polymorph',
        value: 0,
        source: "Cloak, Hunter's",
      },
    ],
  },

  // ── 24. Cloak, Lion ───────────────────────────────────────────────────────
  {
    id: 'wondrous-cloak-lion',
    name: 'Cloak, Lion',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 10,
    slot: 'shoulders',

    price: 12000,
    weight: 1,

    description:
      "Made from a single male lion's coat with the mane surrounding its hood, this cloak grants a " +
      '+2 resistance bonus on saving throws against mind-affecting and fear effects, plus a +2 circumstance ' +
      'bonus on Intimidate checks. Once per day the wearer can don the hood to assume lion form via beast ' +
      'shape II for up to 10 minutes. Paladins with smite evil can use this ability additional times by ' +
      'expending smite uses (up to their total smites plus one); while transformed they cannot use smite.',

    construction: {
      feats: ['Craft Wondrous Item', 'beast shape II'],
      spells: ['beast shape II'],
      cost: 6000,
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
        bonusType: 'resistance',
        target: 'save.will',
        value: 2,
        source: 'Cloak, Lion',
        condition: {
          type: 'custom',
          params: { descriptor: 'mind_affecting_or_fear' },
          description: 'against mind-affecting and fear effects',
        },
      },
      {
        type: 'bonus',
        bonusType: 'circumstance',
        target: 'skill.intimidate',
        value: 2,
        source: 'Cloak, Lion',
      },
      {
        type: 'special',
        target: 'special.cloak_lion_polymorph',
        value: 0,
        source: 'Cloak, Lion',
      },
    ],
  },

  // ── 25. Cloak, Moss ───────────────────────────────────────────────────────
  {
    id: 'wondrous-cloak-moss',
    name: 'Cloak, Moss',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 7,
    slot: 'shoulders',

    price: 18700,
    weight: 5,

    description:
      'This magical garment consists of a layer of green moss growing on a thin, damp sheet of sod. ' +
      'When worn in forest or jungle terrain it grants a +10 competence bonus on Stealth checks. Once per ' +
      'day as a standard action the wearer can eliminate a single poison currently affecting them. This ability ' +
      'causes the moss to discolor to brown, negating the Stealth bonus until the cloak naturally heals ' +
      'over 24 hours.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['invisibility', 'neutralize poison', 'restoration'],
      cost: 9350,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 5,
      breakDC: 12,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.stealth',
        value: 10,
        source: 'Cloak, Moss',
        condition: {
          type: 'custom',
          params: { descriptor: 'forest_or_jungle_terrain' },
          description: 'in forest or jungle terrain only',
        },
      },
      {
        type: 'special',
        target: 'special.cloak_moss_poison_removal',
        value: 0,
        source: 'Cloak, Moss',
      },
    ],
  },
];
