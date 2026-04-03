import type { WondrousItemDefinition } from '@/types/magicItems';
import { AuraStrength, MagicSchool } from '@/types/equipment';

export const wondrousItemsHL2: WondrousItemDefinition[] = [
  // ---- Haunt Siphon -----------------------------------------------------------
  {
    id: 'wondrous-haunt-siphon',
    name: 'Haunt Siphon',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.NECROMANCY }],
    casterLevel: 3,
    slot: 'none',

    price: 400,
    weight: 1,

    description:
      'This glass vial sits within a cold-iron casing etched with strange runes and necromantic designs. ' +
      'A white vapor churns inside like a miniature vortex of air. As a standard action when a haunt ' +
      'manifests, the user twists the casing to capture its energies, dealing 3d6 points of positive ' +
      'energy damage to the haunt. If this reduces the haunt to 0 hit points, the mist glows green and ' +
      'the haunt receives a -5 penalty on caster level checks to manifest again after its reset time. ' +
      'Once a haunt is neutralized, the siphon becomes a grenadelike splash weapon dealing 1d6 points ' +
      'of negative energy damage on a direct hit, plus 1 point of splash damage to creatures within ' +
      '5 feet.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['gentle repose'],
      cost: 200,
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
        target: 'special.haunt_siphon_capture',
        value: 0,
        source: 'Haunt Siphon',
      },
    ],
  },

  // ---- Headband of Aerial Agility +2 ------------------------------------------
  {
    id: 'wondrous-headband-aerial-agility-2',
    name: 'Headband of Aerial Agility +2',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 8,
    slot: 'headband',

    price: 4500,
    weight: 0,

    description:
      'This headband is decorated with feathers from a number of colorful birds. It grants a +2 ' +
      'enhancement bonus to one mental ability score (Intelligence, Wisdom, or Charisma, chosen at ' +
      'creation). The wearer treats her caster level as one higher when casting flight-granting spells ' +
      'or extracts. When it grants an Intelligence bonus, it also provides skill ranks as a headband of ' +
      'vast intelligence (typically in Fly, Acrobatics, or Knowledge [planes]).',

    construction: {
      feats: ['Craft Wondrous Item', 'Extend Spell'],
      spells: ['fly'],
      cost: 2250,
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
        bonusType: 'enhancement',
        target: 'ability.int',
        value: 2,
        source: 'Headband of Aerial Agility +2',
      },
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'spell.caster_level',
        value: 1,
        source: 'Headband of Aerial Agility +2',
        condition: {
          type: 'custom',
          params: { descriptor: 'flight' },
          description: 'flight-granting spells and extracts only',
        },
      },
    ],
  },

  // ---- Headband of Aerial Agility +4 ------------------------------------------
  {
    id: 'wondrous-headband-aerial-agility-4',
    name: 'Headband of Aerial Agility +4',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 8,
    slot: 'headband',

    price: 42000,
    weight: 0,

    description:
      'This headband is decorated with feathers from a number of colorful birds. It grants a +4 ' +
      'enhancement bonus to one mental ability score (Intelligence, Wisdom, or Charisma, chosen at ' +
      'creation). The wearer treats her caster level as one higher when casting flight-granting spells ' +
      'or extracts. The +4 version also grants the fly spell three times per day. When it grants an ' +
      'Intelligence bonus, it also provides skill ranks as a headband of vast intelligence.',

    construction: {
      feats: ['Craft Wondrous Item', 'Extend Spell'],
      spells: ['fly'],
      cost: 21000,
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
        bonusType: 'enhancement',
        target: 'ability.int',
        value: 4,
        source: 'Headband of Aerial Agility +4',
      },
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'spell.caster_level',
        value: 1,
        source: 'Headband of Aerial Agility +4',
        condition: {
          type: 'custom',
          params: { descriptor: 'flight' },
          description: 'flight-granting spells and extracts only',
        },
      },
    ],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'fly',
            spellName: 'Fly',
            casterLevel: 8,
            usesPerDay: 3,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // ---- Headband of Aerial Agility +6 ------------------------------------------
  {
    id: 'wondrous-headband-aerial-agility-6',
    name: 'Headband of Aerial Agility +6',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 8,
    slot: 'headband',

    price: 81000,
    weight: 0,

    description:
      'This headband is decorated with feathers from a number of colorful birds. It grants a +6 ' +
      'enhancement bonus to one mental ability score (Intelligence, Wisdom, or Charisma, chosen at ' +
      'creation). The wearer treats her caster level as one higher when casting flight-granting spells ' +
      'or extracts. The +6 version grants the fly spell at will. When it grants an Intelligence bonus, ' +
      'it also provides skill ranks as a headband of vast intelligence.',

    construction: {
      feats: ['Craft Wondrous Item', 'Extend Spell'],
      spells: ['fly'],
      cost: 40500,
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
        bonusType: 'enhancement',
        target: 'ability.int',
        value: 6,
        source: 'Headband of Aerial Agility +6',
      },
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'spell.caster_level',
        value: 1,
        source: 'Headband of Aerial Agility +6',
        condition: {
          type: 'custom',
          params: { descriptor: 'flight' },
          description: 'flight-granting spells and extracts only',
        },
      },
    ],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'fly',
            spellName: 'Fly',
            casterLevel: 8,
            usesPerDay: 0, // at will
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // ---- Headband of Alluring Charisma +2 ----------------------------------------
  {
    id: 'wondrous-headband-alluring-charisma-2',
    name: 'Headband of Alluring Charisma +2',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 8,
    slot: 'headband',

    price: 4000,
    weight: 1,

    description:
      'This attractive silver headband is decorated with small red and orange gemstones. It grants the ' +
      'wearer a +2 enhancement bonus to Charisma. Treat this as a temporary ability bonus for the first ' +
      '24 hours the headband is worn.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["eagle's splendor"],
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
        bonusType: 'enhancement',
        target: 'ability.cha',
        value: 2,
        source: 'Headband of Alluring Charisma +2',
      },
    ],
  },

  // ---- Headband of Alluring Charisma +4 ----------------------------------------
  {
    id: 'wondrous-headband-alluring-charisma-4',
    name: 'Headband of Alluring Charisma +4',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 8,
    slot: 'headband',

    price: 16000,
    weight: 1,

    description:
      'This attractive silver headband is decorated with small red and orange gemstones. It grants the ' +
      'wearer a +4 enhancement bonus to Charisma. Treat this as a temporary ability bonus for the first ' +
      '24 hours the headband is worn.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["eagle's splendor"],
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
        bonusType: 'enhancement',
        target: 'ability.cha',
        value: 4,
        source: 'Headband of Alluring Charisma +4',
      },
    ],
  },

  // ---- Headband of Alluring Charisma +6 ----------------------------------------
  {
    id: 'wondrous-headband-alluring-charisma-6',
    name: 'Headband of Alluring Charisma +6',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 8,
    slot: 'headband',

    price: 36000,
    weight: 1,

    description:
      'This attractive silver headband is decorated with small red and orange gemstones. It grants the ' +
      'wearer a +6 enhancement bonus to Charisma. Treat this as a temporary ability bonus for the first ' +
      '24 hours the headband is worn.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["eagle's splendor"],
      cost: 18000,
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
        bonusType: 'enhancement',
        target: 'ability.cha',
        value: 6,
        source: 'Headband of Alluring Charisma +6',
      },
    ],
  },

  // ---- Headband of Arcane Energy -----------------------------------------------
  {
    id: 'wondrous-headband-arcane-energy',
    name: 'Headband of Arcane Energy',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.EVOCATION }],
    casterLevel: 13,
    slot: 'headband',

    price: 20000,
    weight: 1,

    description:
      'Three swirling patterns of red, green, and blue crystals arc across the length of this headband. ' +
      'Three times per day, the wearer may sacrifice an arcane spell to create one of two effects. ' +
      'First, she may make a ranged touch attack (range 30 feet) dealing 1d6 points of energy damage ' +
      '(cold, electricity, or fire, chosen when used) per spell level sacrificed. Second, she may ' +
      'create a swirling band of energy that lasts 1 round, granting a deflection bonus to AC equal ' +
      'to 2 + the level of the spell sacrificed.',

    construction: {
      feats: ['Arcane Blast', 'Arcane Shield', 'Craft Wondrous Item'],
      spells: ['prismatic spray'],
      cost: 10000,
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
        target: 'special.arcane_energy_blast',
        value: 0,
        source: 'Headband of Arcane Energy',
      },
      {
        type: 'special',
        target: 'special.arcane_energy_shield',
        value: 0,
        source: 'Headband of Arcane Energy',
      },
    ],

    charges: { maximum: 3, rechargeMethod: 'daily' },
  },

  // ---- Headband of Counterspelling ---------------------------------------------
  {
    id: 'wondrous-headband-counterspelling',
    name: 'Headband of Counterspelling',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.ABJURATION }],
    casterLevel: 13,
    slot: 'headband',

    price: 20000,
    weight: 1,

    description:
      'This headband grants a +5 insight bonus on Spellcraft checks made to identify a spell as it is ' +
      'being cast. Once per day, the wearer may attempt to counter a spell by casting the appropriate ' +
      'spell as an immediate action instead of doing so with a readied action. The wearer must ' +
      'successfully identify the spell before attempting to counter it.',

    construction: {
      feats: ['Craft Wondrous Item', 'Spell Turning'],
      spells: [],
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
        bonusType: 'insight',
        target: 'skill.spellcraft',
        value: 5,
        source: 'Headband of Counterspelling',
        condition: {
          type: 'custom',
          params: { descriptor: 'identify_spell' },
          description: 'when identifying a spell being cast',
        },
      },
      {
        type: 'special',
        target: 'special.counterspell_immediate_action',
        value: 0,
        source: 'Headband of Counterspelling',
      },
    ],
  },

  // ---- Headband of Deathless Devotion -----------------------------------------
  {
    id: 'wondrous-headband-deathless-devotion',
    name: 'Headband of Deathless Devotion',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 1,
    slot: 'headband',

    price: 6400,
    weight: 1,

    description:
      "This white headband decorated with calligraphy or a stylized sunburst helps focus the wearer's " +
      'resolve and absolute determination to survive and succeed. The wearer gains a +2 morale bonus ' +
      'on stabilization checks and a +2 morale bonus on saving throws against ongoing effects with ' +
      'recurring saves (such as diseases, poisons, and compulsions like dominate person or hold person). ' +
      'If the wearer is a samurai, her resolve ability functions as if she were two class levels higher.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['heroism', 'stabilize'],
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
        bonusType: 'morale',
        target: 'special.stabilization_check',
        value: 2,
        source: 'Headband of Deathless Devotion',
      },
      {
        type: 'bonus',
        bonusType: 'morale',
        target: 'save.all',
        value: 2,
        source: 'Headband of Deathless Devotion',
        condition: {
          type: 'custom',
          params: { descriptor: 'recurring_save' },
          description: 'against ongoing effects with recurring saves (diseases, poisons, compulsions)',
        },
      },
    ],

    conditionalEffects: [
      {
        condition: 'wielder_class',
        classId: 'samurai',
        effects: [
          {
            type: 'special',
            target: 'special.samurai_resolve_effective_level',
            value: 2,
            source: 'Headband of Deathless Devotion',
          },
        ],
      },
    ],
  },

  // ---- Headband of Fortune's Favor ---------------------------------------------
  {
    id: 'wondrous-headband-fortunes-favor',
    name: "Headband of Fortune's Favor",
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [
      { strength: AuraStrength.FAINT, school: MagicSchool.ENCHANTMENT },
      { strength: AuraStrength.FAINT, school: MagicSchool.EVOCATION },
    ],
    casterLevel: 5,
    slot: 'headband',

    price: 7700,
    weight: 1,

    description:
      "This decorative headband with beaded tassels enhances the wearer's luck. The wearer receives a " +
      '+1 luck bonus on saving throws. Additionally, any effect that provides a luck bonus or increases ' +
      "good fortune (such as divine favor, prayer, a witch's fortune hex, or cleric luck domain powers) " +
      'lasts one round longer than normal. Non-duration luck effects such as luck stones are unaffected.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['ill omen', 'prayer'],
      cost: 3850,
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
        bonusType: 'luck',
        target: 'save.all',
        value: 1,
        source: "Headband of Fortune's Favor",
      },
      {
        type: 'special',
        target: 'special.luck_effect_duration_extension',
        value: 0,
        source: "Headband of Fortune's Favor",
      },
    ],
  },

  // ---- Headband of Havoc -------------------------------------------------------
  {
    id: 'wondrous-headband-havoc',
    name: 'Headband of Havoc',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 5,
    slot: 'headband',

    price: 8000,
    weight: 1,

    description:
      "This headband enhances a barbarian's combat capabilities during rage. When the wearer enters a " +
      'rage, she selects one rage power she possesses; that power functions as if she were four class ' +
      'levels higher. Additionally, the wearer may spend 2 rounds of rage to initiate a rage as an ' +
      'immediate action when attacked or required to make a saving throw. This emergency rage activates ' +
      "before resolving the triggering attack and persists until the wearer's next turn.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['rage'],
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
        target: 'special.barbarian_rage_power_effective_level',
        value: 4,
        source: 'Headband of Havoc',
      },
      {
        type: 'special',
        target: 'special.barbarian_rage_immediate_action',
        value: 0,
        source: 'Headband of Havoc',
      },
    ],
  },

  // ---- Headband of Inspired Wisdom +2 -----------------------------------------
  {
    id: 'wondrous-headband-inspired-wisdom-2',
    name: 'Headband of Inspired Wisdom +2',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 8,
    slot: 'headband',

    price: 4000,
    weight: 1,

    description:
      'This simple bronze headband is decorated with intricate fine green etchings. It grants the ' +
      'wearer a +2 enhancement bonus to Wisdom. Treat this as a temporary ability bonus for the first ' +
      '24 hours the headband is worn.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["owl's wisdom"],
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
        bonusType: 'enhancement',
        target: 'ability.wis',
        value: 2,
        source: 'Headband of Inspired Wisdom +2',
      },
    ],
  },

  // ---- Headband of Inspired Wisdom +4 -----------------------------------------
  {
    id: 'wondrous-headband-inspired-wisdom-4',
    name: 'Headband of Inspired Wisdom +4',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 8,
    slot: 'headband',

    price: 16000,
    weight: 1,

    description:
      'This simple bronze headband is decorated with intricate fine green etchings. It grants the ' +
      'wearer a +4 enhancement bonus to Wisdom. Treat this as a temporary ability bonus for the first ' +
      '24 hours the headband is worn.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["owl's wisdom"],
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
        bonusType: 'enhancement',
        target: 'ability.wis',
        value: 4,
        source: 'Headband of Inspired Wisdom +4',
      },
    ],
  },

  // ---- Headband of Inspired Wisdom +6 -----------------------------------------
  {
    id: 'wondrous-headband-inspired-wisdom-6',
    name: 'Headband of Inspired Wisdom +6',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 8,
    slot: 'headband',

    price: 36000,
    weight: 1,

    description:
      'This simple bronze headband is decorated with intricate fine green etchings. It grants the ' +
      'wearer a +6 enhancement bonus to Wisdom. Treat this as a temporary ability bonus for the first ' +
      '24 hours the headband is worn.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["owl's wisdom"],
      cost: 18000,
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
        bonusType: 'enhancement',
        target: 'ability.wis',
        value: 6,
        source: 'Headband of Inspired Wisdom +6',
      },
    ],
  },

  // ---- Headband of Intuition --------------------------------------------------
  {
    id: 'wondrous-headband-intuition',
    name: 'Headband of Intuition',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 3,
    slot: 'headband',

    price: 7000,
    weight: 1,

    description:
      'This headband grants the wearer foresight regarding potential outcomes. Three times per day as ' +
      'a standard action, the wearer may gain information about a specified course of action as if ' +
      'using the augury spell, except that the wearer always receives a meaningful reply rather than ' +
      'an unclear result.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['augury'],
      cost: 3500,
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
        target: 'special.augury_guaranteed',
        value: 0,
        source: 'Headband of Intuition',
      },
    ],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'augury',
            spellName: 'Augury',
            casterLevel: 3,
            usesPerDay: 3,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // ---- Headband of Ki Focus ---------------------------------------------------
  {
    id: 'wondrous-headband-ki-focus',
    name: 'Headband of Ki Focus',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION }],
    casterLevel: 1,
    slot: 'headband',

    price: 5400,
    weight: 1,

    description:
      'This tied headband enhances the wearer\'s ability to focus ki energy. Whenever the wearer ' +
      'spends ki points to make an additional attack, that attack roll gains a +1 insight bonus ' +
      '(+2 if the wearer is using a ki focus weapon with that attack). The wearer is also immune ' +
      "to the ninja's ki block trick and similar effects that block the use of ki points.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: [],
      specialRequirements: ['Creator must possess a ki pool ability'],
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
        bonusType: 'insight',
        target: 'attack.all',
        value: 1,
        source: 'Headband of Ki Focus',
        condition: {
          type: 'custom',
          params: { descriptor: 'ki_extra_attack' },
          description: 'on attacks made by spending ki points',
        },
      },
      {
        type: 'special',
        target: 'special.ki_block_immunity',
        value: 0,
        source: 'Headband of Ki Focus',
      },
    ],
  },

  // ---- Headband of Knucklebones -----------------------------------------------
  {
    id: 'wondrous-headband-knucklebones',
    name: 'Headband of Knucklebones',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.NECROMANCY }],
    casterLevel: 9,
    slot: 'headband',

    price: 27500,
    weight: 1,

    description:
      'This headband consists of finger bones interconnected by leathery tissue. Three times per day, ' +
      'the wearer can use command undead, though this ability affects only zombies. Once per day, the ' +
      'wearer can animate a single Medium or smaller zombie corpse (as the animate dead spell).',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['animate dead', 'command undead'],
      cost: 13750,
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
        target: 'special.command_undead_zombies',
        value: 0,
        source: 'Headband of Knucklebones',
      },
    ],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'command_undead',
            spellName: 'Command Undead',
            casterLevel: 9,
            usesPerDay: 3,
            activationAction: 'standard',
          },
          {
            spellId: 'animate_dead',
            spellName: 'Animate Dead',
            casterLevel: 9,
            usesPerDay: 1,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // ---- Headband of Mental Prowess +2 ------------------------------------------
  {
    id: 'wondrous-headband-mental-prowess-2',
    name: 'Headband of Mental Prowess +2',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 12,
    slot: 'headband',

    price: 10000,
    weight: 1,

    description:
      'A copper headband with a yellow gem positioned on the wearer\'s forehead, often designed to ' +
      'resemble a third eye. It grants a +2 enhancement bonus to two mental ability scores (chosen ' +
      'from Intelligence, Wisdom, and Charisma at creation). The chosen combination cannot be changed. ' +
      'Treat this as a temporary ability bonus for the first 24 hours the headband is worn. If one of ' +
      'the boosted scores is Intelligence, the headband also provides skill ranks as a headband of ' +
      'vast intelligence.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["eagle's splendor", "fox's cunning", "owl's wisdom"],
      cost: 5000,
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
        bonusType: 'enhancement',
        target: 'ability.int',
        value: 2,
        source: 'Headband of Mental Prowess +2',
      },
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'ability.wis',
        value: 2,
        source: 'Headband of Mental Prowess +2',
      },
    ],
  },

  // ---- Headband of Mental Prowess +4 ------------------------------------------
  {
    id: 'wondrous-headband-mental-prowess-4',
    name: 'Headband of Mental Prowess +4',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 12,
    slot: 'headband',

    price: 40000,
    weight: 1,

    description:
      'A copper headband with a yellow gem positioned on the wearer\'s forehead, often designed to ' +
      'resemble a third eye. It grants a +4 enhancement bonus to two mental ability scores (chosen ' +
      'from Intelligence, Wisdom, and Charisma at creation). The chosen combination cannot be changed. ' +
      'Treat this as a temporary ability bonus for the first 24 hours the headband is worn. If one of ' +
      'the boosted scores is Intelligence, the headband also provides skill ranks as a headband of ' +
      'vast intelligence.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["eagle's splendor", "fox's cunning", "owl's wisdom"],
      cost: 20000,
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
        bonusType: 'enhancement',
        target: 'ability.int',
        value: 4,
        source: 'Headband of Mental Prowess +4',
      },
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'ability.wis',
        value: 4,
        source: 'Headband of Mental Prowess +4',
      },
    ],
  },

  // ---- Headband of Mental Prowess +6 ------------------------------------------
  {
    id: 'wondrous-headband-mental-prowess-6',
    name: 'Headband of Mental Prowess +6',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 12,
    slot: 'headband',

    price: 90000,
    weight: 1,

    description:
      'A copper headband with a yellow gem positioned on the wearer\'s forehead, often designed to ' +
      'resemble a third eye. It grants a +6 enhancement bonus to two mental ability scores (chosen ' +
      'from Intelligence, Wisdom, and Charisma at creation). The chosen combination cannot be changed. ' +
      'Treat this as a temporary ability bonus for the first 24 hours the headband is worn. If one of ' +
      'the boosted scores is Intelligence, the headband also provides skill ranks as a headband of ' +
      'vast intelligence.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["eagle's splendor", "fox's cunning", "owl's wisdom"],
      cost: 45000,
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
        bonusType: 'enhancement',
        target: 'ability.int',
        value: 6,
        source: 'Headband of Mental Prowess +6',
      },
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'ability.wis',
        value: 6,
        source: 'Headband of Mental Prowess +6',
      },
    ],
  },

  // ---- Headband of Mental Resilience ------------------------------------------
  {
    id: 'wondrous-headband-mental-resilience',
    name: 'Headband of Mental Resilience',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [
      { strength: AuraStrength.STRONG, school: MagicSchool.ABJURATION },
      { strength: AuraStrength.STRONG, school: MagicSchool.TRANSMUTATION },
    ],
    casterLevel: 16,
    slot: 'headband',

    price: 64000,
    weight: 1,

    description:
      'This headband is set with five faceted sapphires. It grants a +2 enhancement bonus to ' +
      'Intelligence, Wisdom, and Charisma, and provides skill ranks as a headband of vast ' +
      'intelligence +2. After the headband has been worn for 24 hours, the wearer gains five ' +
      'temporary ability points that absorb damage or drain to Intelligence, Wisdom, or Charisma ' +
      'before those scores are actually reduced. These temporary points restore themselves after ' +
      '24 hours, but ability drain permanently destroys them.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["eagle's splendor", "fox's cunning", 'lesser restoration', "owl's wisdom"],
      cost: 32000,
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
        bonusType: 'enhancement',
        target: 'ability.int',
        value: 2,
        source: 'Headband of Mental Resilience',
      },
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'ability.wis',
        value: 2,
        source: 'Headband of Mental Resilience',
      },
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'ability.cha',
        value: 2,
        source: 'Headband of Mental Resilience',
      },
      {
        type: 'special',
        target: 'special.mental_ability_damage_buffer',
        value: 5,
        source: 'Headband of Mental Resilience',
      },
    ],
  },

  // ---- Headband of Mental Superiority +2 --------------------------------------
  {
    id: 'wondrous-headband-mental-superiority-2',
    name: 'Headband of Mental Superiority +2',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 16,
    slot: 'headband',

    price: 16000,
    weight: 1,

    description:
      'This powerful headband grants a +2 enhancement bonus to all three mental ability scores: ' +
      'Intelligence, Wisdom, and Charisma. Treat this as a temporary ability bonus for the first ' +
      '24 hours the headband is worn. The headband also provides skill ranks as a headband of ' +
      'vast intelligence.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["eagle's splendor", "fox's cunning", "owl's wisdom"],
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
        bonusType: 'enhancement',
        target: 'ability.int',
        value: 2,
        source: 'Headband of Mental Superiority +2',
      },
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'ability.wis',
        value: 2,
        source: 'Headband of Mental Superiority +2',
      },
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'ability.cha',
        value: 2,
        source: 'Headband of Mental Superiority +2',
      },
    ],
  },

  // ---- Headband of Mental Superiority +4 --------------------------------------
  {
    id: 'wondrous-headband-mental-superiority-4',
    name: 'Headband of Mental Superiority +4',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 16,
    slot: 'headband',

    price: 64000,
    weight: 1,

    description:
      'This powerful headband grants a +4 enhancement bonus to all three mental ability scores: ' +
      'Intelligence, Wisdom, and Charisma. Treat this as a temporary ability bonus for the first ' +
      '24 hours the headband is worn. The headband also provides skill ranks as a headband of ' +
      'vast intelligence.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["eagle's splendor", "fox's cunning", "owl's wisdom"],
      cost: 32000,
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
        bonusType: 'enhancement',
        target: 'ability.int',
        value: 4,
        source: 'Headband of Mental Superiority +4',
      },
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'ability.wis',
        value: 4,
        source: 'Headband of Mental Superiority +4',
      },
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'ability.cha',
        value: 4,
        source: 'Headband of Mental Superiority +4',
      },
    ],
  },

  // ---- Headband of Mental Superiority +6 --------------------------------------
  {
    id: 'wondrous-headband-mental-superiority-6',
    name: 'Headband of Mental Superiority +6',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 16,
    slot: 'headband',

    price: 144000,
    weight: 1,

    description:
      'This powerful headband grants a +6 enhancement bonus to all three mental ability scores: ' +
      'Intelligence, Wisdom, and Charisma. Treat this as a temporary ability bonus for the first ' +
      '24 hours the headband is worn. The headband also provides skill ranks as a headband of ' +
      'vast intelligence.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["eagle's splendor", "fox's cunning", "owl's wisdom"],
      cost: 72000,
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
        bonusType: 'enhancement',
        target: 'ability.int',
        value: 6,
        source: 'Headband of Mental Superiority +6',
      },
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'ability.wis',
        value: 6,
        source: 'Headband of Mental Superiority +6',
      },
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'ability.cha',
        value: 6,
        source: 'Headband of Mental Superiority +6',
      },
    ],
  },

  // ---- Headband of Ponderous Recollection -------------------------------------
  {
    id: 'wondrous-headband-ponderous-recollection',
    name: 'Headband of Ponderous Recollection',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [
      { strength: AuraStrength.MODERATE, school: MagicSchool.DIVINATION },
      { strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION },
    ],
    casterLevel: 8,
    slot: 'headband',

    price: 5100,
    weight: 1,

    description:
      'A black leather headband featuring two small amber gemstones positioned on the wearer\'s ' +
      'forehead. It grants a +2 enhancement bonus to Intelligence (temporary for the first 24 hours ' +
      'worn) and provides skill ranks in Knowledge skills as a headband of vast intelligence. ' +
      'Three times per day as a swift action, the wearer can identify a creature within line of sight. ' +
      "On the turn the ability is activated, the wearer gains information as if rolling a natural 5 on " +
      'the relevant Knowledge check. On the next turn, information equal to a natural 10. On the ' +
      'following turn, information equal to a natural 15. These bonuses apply to all checks against ' +
      'that creature.',

    construction: {
      feats: ['Craft Wondrous Item', 'Know the Enemy'],
      spells: [],
      cost: 2550,
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
        bonusType: 'enhancement',
        target: 'ability.int',
        value: 2,
        source: 'Headband of Ponderous Recollection',
      },
      {
        type: 'special',
        target: 'special.creature_identification_progressive',
        value: 0,
        source: 'Headband of Ponderous Recollection',
      },
    ],
  },

  // ---- Headband of Seduction --------------------------------------------------
  {
    id: 'wondrous-headband-seduction',
    name: 'Headband of Seduction',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [
      { strength: AuraStrength.FAINT, school: MagicSchool.ENCHANTMENT },
      { strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION },
    ],
    casterLevel: 5,
    slot: 'headband',

    price: 40000,
    weight: 1,

    description:
      "This plain white band enhances the wearer's attractiveness and charm. The wearer gains a " +
      '+2 competence bonus on Charisma-based checks made against other members of his creature type. ' +
      'For humanoid wearers, this bonus increases to +5 when interacting with creatures of the same ' +
      'subtype. Once per day, the wearer can use unnatural lust (DC 14) as a spell-like ability, ' +
      'though the effect lasts only 10 minutes.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['unnatural lust'],
      cost: 20000,
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
        target: 'skill.cha_based',
        value: 2,
        source: 'Headband of Seduction',
        condition: {
          type: 'target_type',
          params: { creatureType: 'same_creature_type' },
          description: 'against creatures of the same creature type',
        },
      },
      {
        type: 'special',
        target: 'special.seduction_same_subtype_bonus',
        value: 5,
        source: 'Headband of Seduction',
      },
    ],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'unnatural_lust',
            spellName: 'Unnatural Lust',
            casterLevel: 5,
            usesPerDay: 1,
            saveDC: 14,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // ---- Headband of the Ninjitsu -----------------------------------------------
  {
    id: 'wondrous-headband-ninjitsu',
    name: 'Headband of the Ninjitsu',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION }],
    casterLevel: 1,
    slot: 'headband',

    price: 15000,
    weight: 1,

    description:
      "This black cloth headband enhances the wearer's combat deception and stealth. The wearer " +
      'gains a +2 competence bonus on Bluff checks made to feint and on combat maneuver checks ' +
      'made to reposition. Once per day, the wearer can perform a feint or reposition maneuver ' +
      'as a swift action instead of a standard action. The wearer also gains a +2 insight bonus ' +
      'on attack rolls made as sneak attacks and can make sneak attacks against creatures with ' +
      'concealment or total concealment, though miss chances apply normally.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["eagle's splendor", 'see invisibility'],
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
        bonusType: 'competence',
        target: 'skill.bluff',
        value: 2,
        source: 'Headband of the Ninjitsu',
        condition: {
          type: 'custom',
          params: { descriptor: 'feint' },
          description: 'when feinting',
        },
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'special.cmb_reposition',
        value: 2,
        source: 'Headband of the Ninjitsu',
      },
      {
        type: 'bonus',
        bonusType: 'insight',
        target: 'attack.all',
        value: 2,
        source: 'Headband of the Ninjitsu',
        condition: {
          type: 'custom',
          params: { descriptor: 'sneak_attack' },
          description: 'on sneak attack rolls',
        },
      },
      {
        type: 'special',
        target: 'special.sneak_attack_through_concealment',
        value: 0,
        source: 'Headband of the Ninjitsu',
      },
      {
        type: 'special',
        target: 'special.feint_or_reposition_swift_action',
        value: 0,
        source: 'Headband of the Ninjitsu',
      },
    ],
  },

  // ---- Headband of the Tainted Ouroboros --------------------------------------
  {
    id: 'wondrous-headband-tainted-ouroboros',
    name: 'Headband of the Tainted Ouroboros',
    category: 'wondrous',
    source: 'Potions and Poisons',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'headband',

    price: 4500,
    weight: 0,

    description:
      'Small metal scales that shimmer in emerald and forest green colors cover this headband. ' +
      'The wearer can transmit any poison she is currently suffering from to another creature ' +
      'via a melee touch attack. The target must make a Fortitude save against the original ' +
      "poison's DC or suffer its full effects. Only one additional target can receive the " +
      'duplicated poison at a time.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['touch injection'],
      cost: 2250,
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
        target: 'special.poison_transmission_touch',
        value: 0,
        source: 'Headband of the Tainted Ouroboros',
      },
    ],
  },

  // ---- Headband of the Wolf ---------------------------------------------------
  {
    id: 'wondrous-headband-wolf',
    name: 'Headband of the Wolf',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'headband',

    price: 5000,
    weight: 1,

    description:
      "This silver band is styled with hunting wolves. The wearer can activate the scent ability " +
      "(as the wolf aspect from a hunter's animal focus): 10-foot range under normal conditions, " +
      '20 feet upwind, and 5 feet downwind. For hunters who already possess the wolf aspect, ' +
      'this headband instead grants +8 to effective hunter level for the purpose of that aspect.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['bloodhound'],
      specialRequirements: ['Creator must possess the animal focus class feature'],
      cost: 2500,
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
        target: 'special.scent',
        value: 0,
        source: 'Headband of the Wolf',
      },
    ],

    conditionalEffects: [
      {
        condition: 'wielder_class',
        classId: 'hunter',
        effects: [
          {
            type: 'special',
            target: 'special.hunter_wolf_aspect_effective_level',
            value: 8,
            source: 'Headband of the Wolf',
          },
        ],
      },
    ],
  },

  // ---- Headband of Twisted Intellect ------------------------------------------
  {
    id: 'wondrous-headband-twisted-intellect',
    name: 'Headband of Twisted Intellect',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 10,
    slot: 'headband',

    price: 8000,
    weight: 1,

    description:
      'This metal headband is adorned with intertwined tentacles inscribed with Aboleth runes. ' +
      'The tentacles adjust to fit the wearer\'s head. It grants a +2 enhancement bonus to ' +
      'Intelligence. The headband contains two slots that function like a wayfinder, allowing two ' +
      'ioun stones to be slotted and function as if they were orbiting the wearer\'s head. Slotted ' +
      'stones do not suppress the headband\'s own magic. When the wearer carries both this headband ' +
      'and another wayfinder or similar ioun stone container, the other container is suppressed.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["fox's cunning"],
      specialRequirements: ['Creator must be an aboleth'],
      cost: 4000,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 5,
      breakDC: 20,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'ability.int',
        value: 2,
        source: 'Headband of Twisted Intellect',
      },
      {
        type: 'special',
        target: 'special.ioun_stone_slots',
        value: 2,
        source: 'Headband of Twisted Intellect',
      },
    ],
  },

  // ---- Headband of Unshakeable Resolve ----------------------------------------
  {
    id: 'wondrous-headband-unshakeable-resolve',
    name: 'Headband of Unshakeable Resolve',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [
      { strength: AuraStrength.MODERATE, school: MagicSchool.ABJURATION },
      { strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION },
    ],
    casterLevel: 8,
    slot: 'headband',

    price: 5600,
    weight: 1,

    description:
      'A white cotton headband decorated with an imperial dragon symbol above the wearer\'s forehead. ' +
      'It provides a +2 enhancement bonus to Wisdom, treating this as a temporary ability bonus for ' +
      'the first 24 hours worn. Up to three times per day as an immediate action, the wearer can ' +
      'reduce the severity of a fear effect by one step: panicked becomes frightened, frightened ' +
      'becomes shaken, and shaken is negated entirely.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["owl's wisdom", 'remove fear'],
      cost: 2800,
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
        bonusType: 'enhancement',
        target: 'ability.wis',
        value: 2,
        source: 'Headband of Unshakeable Resolve',
      },
      {
        type: 'special',
        target: 'special.fear_severity_reduction',
        value: 0,
        source: 'Headband of Unshakeable Resolve',
      },
    ],
  },

  // ---- Headband of Vast Intelligence +2 ---------------------------------------
  {
    id: 'wondrous-headband-vast-intelligence-2',
    name: 'Headband of Vast Intelligence +2',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 8,
    slot: 'headband',

    price: 4000,
    weight: 1,

    description:
      'This headband grants a +2 enhancement bonus to Intelligence. Treat this as a temporary ' +
      'ability bonus for the first 24 hours the headband is worn. When the headband is created, ' +
      'one skill is chosen by the creator. After 24 hours of wear, the headband grants a number ' +
      'of ranks in that skill equal to the wearer\'s total Hit Dice (these ranks do not stack ' +
      'with existing ranks). The chosen skill is treated as a class skill for the wearer.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["fox's cunning"],
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
        bonusType: 'enhancement',
        target: 'ability.int',
        value: 2,
        source: 'Headband of Vast Intelligence +2',
      },
      {
        type: 'special',
        target: 'special.granted_skill_ranks',
        value: 1,
        source: 'Headband of Vast Intelligence +2',
      },
    ],
  },

  // ---- Headband of Vast Intelligence +4 ---------------------------------------
  {
    id: 'wondrous-headband-vast-intelligence-4',
    name: 'Headband of Vast Intelligence +4',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 8,
    slot: 'headband',

    price: 16000,
    weight: 1,

    description:
      'This headband grants a +4 enhancement bonus to Intelligence. Treat this as a temporary ' +
      'ability bonus for the first 24 hours the headband is worn. When the headband is created, ' +
      'two skills are chosen by the creator. After 24 hours of wear, the headband grants a number ' +
      'of ranks in each chosen skill equal to the wearer\'s total Hit Dice (these ranks do not ' +
      'stack with existing ranks). The chosen skills are treated as class skills for the wearer.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["fox's cunning"],
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
        bonusType: 'enhancement',
        target: 'ability.int',
        value: 4,
        source: 'Headband of Vast Intelligence +4',
      },
      {
        type: 'special',
        target: 'special.granted_skill_ranks',
        value: 2,
        source: 'Headband of Vast Intelligence +4',
      },
    ],
  },

  // ---- Headband of Vast Intelligence +6 ---------------------------------------
  {
    id: 'wondrous-headband-vast-intelligence-6',
    name: 'Headband of Vast Intelligence +6',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 8,
    slot: 'headband',

    price: 36000,
    weight: 1,

    description:
      'This headband grants a +6 enhancement bonus to Intelligence. Treat this as a temporary ' +
      'ability bonus for the first 24 hours the headband is worn. When the headband is created, ' +
      'three skills are chosen by the creator. After 24 hours of wear, the headband grants a ' +
      'number of ranks in each chosen skill equal to the wearer\'s total Hit Dice (these ranks ' +
      'do not stack with existing ranks). The chosen skills are treated as class skills for the ' +
      'wearer.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["fox's cunning"],
      cost: 18000,
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
        bonusType: 'enhancement',
        target: 'ability.int',
        value: 6,
        source: 'Headband of Vast Intelligence +6',
      },
      {
        type: 'special',
        target: 'special.granted_skill_ranks',
        value: 3,
        source: 'Headband of Vast Intelligence +6',
      },
    ],
  },

  // ---- Headband, Dead Man's ---------------------------------------------------
  {
    id: 'wondrous-headband-dead-mans',
    name: "Dead Man's Headband",
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [
      { strength: AuraStrength.FAINT, school: MagicSchool.ENCHANTMENT },
      { strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION },
    ],
    casterLevel: 1,
    slot: 'headband',

    price: 3600,
    weight: 1,

    description:
      'A black band featuring a black metal skull clip that attaches to headgear or wears ' +
      'independently. The wearer gains a +2 competence bonus on Intimidate checks and increases ' +
      'the DC of any fear effect she creates by 1. When the headband is attached to a hat or ' +
      'other headgear, that item cannot be removed by wind, water, or environmental effects, ' +
      'and the wearer gains a +5 circumstance bonus to CMD against steal and sunder attempts ' +
      'targeting his headgear.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['doom', 'shrink item'],
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
        target: 'skill.intimidate',
        value: 2,
        source: "Dead Man's Headband",
      },
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'special.fear_effect_dc',
        value: 1,
        source: "Dead Man's Headband",
      },
      {
        type: 'bonus',
        bonusType: 'circumstance',
        target: 'special.cmd_headgear',
        value: 5,
        source: "Dead Man's Headband",
      },
    ],
  },

  // ---- Headband, Imperious ----------------------------------------------------
  {
    id: 'wondrous-headband-imperious',
    name: 'Headband, Imperious',
    category: 'wondrous',
    source: 'Agents of Evil',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 3,
    slot: 'headband',

    price: 4000,
    weight: 0,

    description:
      'These bronze headbands adorned with feathers are favored by paranoid nobility seeking ' +
      'protection from treacherous servants. The wearer gains a +4 deflection bonus to AC ' +
      'against attacks made by any hired worker, enslaved person, servant, or employed sentient ' +
      'creature. Such employed creatures must succeed at a DC 13 Will save or treat the wearer ' +
      'as though affected by a sanctuary spell. When magically compelled to attack the wearer, ' +
      'such creatures must roll their attack rolls and spell resistance checks twice and use the ' +
      'lower result.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['charm person', 'sanctuary'],
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
        bonusType: 'deflection',
        target: 'ac',
        value: 4,
        source: 'Headband, Imperious',
        condition: {
          type: 'target_type',
          params: { creatureType: 'employed_creature' },
          description: 'against attacks from hired workers, servants, or employed creatures',
        },
      },
      {
        type: 'special',
        target: 'special.imperious_sanctuary_effect',
        value: 0,
        source: 'Headband, Imperious',
      },
      {
        type: 'special',
        target: 'special.imperious_compelled_attack_disadvantage',
        value: 0,
        source: 'Headband, Imperious',
      },
    ],
  },
];
