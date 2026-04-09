import type { WondrousItemDefinition } from '@/types/magicItems';
import { AuraStrength, MagicSchool } from '@/types/equipment';

export const wondrousItemsAB2: WondrousItemDefinition[] = [
  // ---- 26. Amulet of Magecraft -----------------------------------------------
  {
    id: 'wondrous-amulet-magecraft',
    name: 'Amulet of Magecraft',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    // aura is 'moderate universal' per source; MagicSchool has no UNIVERSAL value — using TRANSMUTATION as closest match
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 9,
    slot: 'neck',

    price: 20000,
    weight: 2,

    description:
      'A universalist wizard can select this amulet as a bonded object. Upon preparing spells daily, ' +
      'the wizard chooses one spell school. The amulet then allows spontaneous conversion of any prepared ' +
      'wizard spell from that school into another wizard spell of the same school, provided the new spell ' +
      'is equal or lower level than the prepared spell being converted.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['permanency'],
      specialRequirements: ['Creator must be a universalist wizard'],
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
        type: 'special',
        target: 'special.spontaneous_school_conversion',
        value: 0,
        source: 'Amulet of Magecraft',
      },
    ],
  },

  // ---- 27. Amulet of Mighty Fists (+1 through +5) ----------------------------
  {
    id: 'wondrous-amulet-mighty-fists-1',
    name: 'Amulet of Mighty Fists +1',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.EVOCATION }],
    casterLevel: 5,
    slot: 'neck',

    price: 4000,
    weight: 0,

    description:
      'This amulet grants an enhancement bonus on attack and damage rolls with unarmed strikes and natural ' +
      'weapon attacks. Alternatively, it can grant melee weapon special abilities that apply to unarmed ' +
      'strikes and natural attacks. The combined enhancement bonus and special ability bonus equivalents ' +
      'cannot exceed +5. Unlike most enhancement items, the amulet does not require a base +1 enhancement ' +
      'bonus to grant special abilities.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['greater magic fang'],
      specialRequirements: ["Creator's caster level must be at least three times the amulet's bonus"],
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
        target: 'attack.melee',
        value: 1,
        source: 'Amulet of Mighty Fists +1',
      },
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'damage.melee',
        value: 1,
        source: 'Amulet of Mighty Fists +1',
      },
    ],
  },

  {
    id: 'wondrous-amulet-mighty-fists-2',
    name: 'Amulet of Mighty Fists +2',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.EVOCATION }],
    casterLevel: 5,
    slot: 'neck',

    price: 16000,
    weight: 0,

    description:
      'This amulet grants an enhancement bonus on attack and damage rolls with unarmed strikes and natural ' +
      'weapon attacks. Alternatively, it can grant melee weapon special abilities that apply to unarmed ' +
      'strikes and natural attacks. The combined enhancement bonus and special ability bonus equivalents ' +
      'cannot exceed +5.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['greater magic fang'],
      specialRequirements: ["Creator's caster level must be at least three times the amulet's bonus"],
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
        target: 'attack.melee',
        value: 2,
        source: 'Amulet of Mighty Fists +2',
      },
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'damage.melee',
        value: 2,
        source: 'Amulet of Mighty Fists +2',
      },
    ],
  },

  {
    id: 'wondrous-amulet-mighty-fists-3',
    name: 'Amulet of Mighty Fists +3',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION }],
    casterLevel: 5,
    slot: 'neck',

    price: 36000,
    weight: 0,

    description:
      'This amulet grants an enhancement bonus on attack and damage rolls with unarmed strikes and natural ' +
      'weapon attacks. Alternatively, it can grant melee weapon special abilities that apply to unarmed ' +
      'strikes and natural attacks. The combined enhancement bonus and special ability bonus equivalents ' +
      'cannot exceed +5.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['greater magic fang'],
      specialRequirements: ["Creator's caster level must be at least three times the amulet's bonus"],
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
        target: 'attack.melee',
        value: 3,
        source: 'Amulet of Mighty Fists +3',
      },
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'damage.melee',
        value: 3,
        source: 'Amulet of Mighty Fists +3',
      },
    ],
  },

  {
    id: 'wondrous-amulet-mighty-fists-4',
    name: 'Amulet of Mighty Fists +4',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION }],
    casterLevel: 5,
    slot: 'neck',

    price: 64000,
    weight: 0,

    description:
      'This amulet grants an enhancement bonus on attack and damage rolls with unarmed strikes and natural ' +
      'weapon attacks. Alternatively, it can grant melee weapon special abilities that apply to unarmed ' +
      'strikes and natural attacks. The combined enhancement bonus and special ability bonus equivalents ' +
      'cannot exceed +5.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['greater magic fang'],
      specialRequirements: ["Creator's caster level must be at least three times the amulet's bonus"],
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
        target: 'attack.melee',
        value: 4,
        source: 'Amulet of Mighty Fists +4',
      },
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'damage.melee',
        value: 4,
        source: 'Amulet of Mighty Fists +4',
      },
    ],
  },

  {
    id: 'wondrous-amulet-mighty-fists-5',
    name: 'Amulet of Mighty Fists +5',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.EVOCATION }],
    casterLevel: 5,
    slot: 'neck',

    price: 100000,
    weight: 0,

    description:
      'This amulet grants an enhancement bonus on attack and damage rolls with unarmed strikes and natural ' +
      'weapon attacks. Alternatively, it can grant melee weapon special abilities that apply to unarmed ' +
      'strikes and natural attacks. The combined enhancement bonus and special ability bonus equivalents ' +
      'cannot exceed +5.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['greater magic fang'],
      specialRequirements: ["Creator's caster level must be at least three times the amulet's bonus"],
      cost: 50000,
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
        target: 'attack.melee',
        value: 5,
        source: 'Amulet of Mighty Fists +5',
      },
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'damage.melee',
        value: 5,
        source: 'Amulet of Mighty Fists +5',
      },
    ],
  },

  // ---- 28. Amulet of Natural Armor (+1 through +5) ---------------------------
  {
    id: 'wondrous-amulet-natural-armor-1',
    name: 'Amulet of Natural Armor +1',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'neck',

    price: 2000,
    weight: 0,

    description:
      'This amulet, usually containing a magically preserved monster hide—such as bone, horn, carapace, ' +
      'or beast scales—toughens the wearer\'s body and flesh, giving a +1 enhancement bonus to natural armor.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['barkskin'],
      specialRequirements: ["Creator's caster level must be at least three times the amulet's bonus"],
      cost: 1000,
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
        target: 'ac.natural',
        value: 1,
        source: 'Amulet of Natural Armor +1',
      },
    ],
  },

  {
    id: 'wondrous-amulet-natural-armor-2',
    name: 'Amulet of Natural Armor +2',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'neck',

    price: 8000,
    weight: 0,

    description:
      'This amulet, usually containing a magically preserved monster hide—such as bone, horn, carapace, ' +
      'or beast scales—toughens the wearer\'s body and flesh, giving a +2 enhancement bonus to natural armor.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['barkskin'],
      specialRequirements: ["Creator's caster level must be at least three times the amulet's bonus"],
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
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'ac.natural',
        value: 2,
        source: 'Amulet of Natural Armor +2',
      },
    ],
  },

  {
    id: 'wondrous-amulet-natural-armor-3',
    name: 'Amulet of Natural Armor +3',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'neck',

    price: 18000,
    weight: 0,

    description:
      'This amulet, usually containing a magically preserved monster hide—such as bone, horn, carapace, ' +
      'or beast scales—toughens the wearer\'s body and flesh, giving a +3 enhancement bonus to natural armor.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['barkskin'],
      specialRequirements: ["Creator's caster level must be at least three times the amulet's bonus"],
      cost: 9000,
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
        target: 'ac.natural',
        value: 3,
        source: 'Amulet of Natural Armor +3',
      },
    ],
  },

  {
    id: 'wondrous-amulet-natural-armor-4',
    name: 'Amulet of Natural Armor +4',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'neck',

    price: 32000,
    weight: 0,

    description:
      'This amulet, usually containing a magically preserved monster hide—such as bone, horn, carapace, ' +
      'or beast scales—toughens the wearer\'s body and flesh, giving a +4 enhancement bonus to natural armor.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['barkskin'],
      specialRequirements: ["Creator's caster level must be at least three times the amulet's bonus"],
      cost: 16000,
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
        target: 'ac.natural',
        value: 4,
        source: 'Amulet of Natural Armor +4',
      },
    ],
  },

  {
    id: 'wondrous-amulet-natural-armor-5',
    name: 'Amulet of Natural Armor +5',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'neck',

    price: 50000,
    weight: 0,

    description:
      'This amulet, usually containing a magically preserved monster hide—such as bone, horn, carapace, ' +
      'or beast scales—toughens the wearer\'s body and flesh, giving a +5 enhancement bonus to natural armor.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['barkskin'],
      specialRequirements: ["Creator's caster level must be at least three times the amulet's bonus"],
      cost: 25000,
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
        target: 'ac.natural',
        value: 5,
        source: 'Amulet of Natural Armor +5',
      },
    ],
  },

  // ---- 29. Amulet of Proof against Detection and Location --------------------
  {
    id: 'wondrous-amulet-proof-detection-location',
    name: 'Amulet of Proof against Detection and Location',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ABJURATION }],
    casterLevel: 8,
    slot: 'neck',

    price: 35000,
    weight: 0,

    description:
      'This silver amulet protects the wearer from scrying and magical detection, functioning like a ' +
      'nondetection spell. If a divination spell is attempted against the wearer, the caster of the ' +
      'divination must succeed on a caster level check (1d20 + caster level) against a DC of 19 to ' +
      'succeed.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['nondetection'],
      cost: 17500,
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
        target: 'special.nondetection_protection',
        value: 0,
        source: 'Amulet of Proof against Detection and Location',
      },
    ],
  },

  // ---- 30. Amulet of Proof against Petrification -----------------------------
  {
    id: 'wondrous-amulet-proof-petrification',
    name: 'Amulet of Proof against Petrification',
    category: 'wondrous',
    source: 'Advanced Race Guide',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ABJURATION }],
    casterLevel: 8,
    slot: 'neck',

    price: 8000,
    weight: 0,

    description:
      'This wooden amulet features a carved blindfolded medusa. When the wearer fails a saving throw that ' +
      'would petrify them, they become staggered for 1d6 rounds instead of being petrified. For effects ' +
      'that cause petrification without a saving throw, the wearer is staggered for 1 minute instead. ' +
      'The amulet does not function while the wearer is already staggered.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['stone to flesh'],
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
        target: 'special.petrification_to_staggered',
        value: 0,
        source: 'Amulet of Proof against Petrification',
      },
    ],
  },

  // ---- 31. Amulet of Spell Cunning -------------------------------------------
  {
    id: 'wondrous-amulet-spell-cunning',
    name: 'Amulet of Spell Cunning',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 7,
    slot: 'neck',

    price: 10000,
    weight: 1,

    description:
      'This silver locket functions only as a wizard\'s bonded object. When the wizard prepares spells ' +
      'each day while the amulet serves as his bonded object, he may prepare an extra 3 spell levels ' +
      "worth of spells. These bonus spell levels function like a specialist wizard's bonus spells — they " +
      'can only be used to prepare wizard spells.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['mnemonic enhancer'],
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
        type: 'special',
        target: 'special.wizard_bonus_spell_levels_3',
        value: 3,
        source: 'Amulet of Spell Cunning',
      },
    ],
  },

  // ---- 32. Amulet of Spell Mastery -------------------------------------------
  {
    id: 'wondrous-amulet-spell-mastery',
    name: 'Amulet of Spell Mastery',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 11,
    slot: 'neck',

    price: 22000,
    weight: 1,

    description:
      'This platinum locket functions only as a wizard\'s bonded object. When the wizard prepares spells ' +
      'each day while the amulet serves as his bonded object, he may prepare an additional 6 levels of ' +
      "spells per day. These bonus spell levels function like a specialist wizard's bonus spells — they " +
      'can only be used to prepare wizard spells.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['mnemonic enhancer'],
      cost: 11000,
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
        target: 'special.wizard_bonus_spell_levels_6',
        value: 6,
        source: 'Amulet of Spell Mastery',
      },
    ],
  },

  // ---- 33. Amulet of the Abyss -----------------------------------------------
  {
    id: 'wondrous-amulet-abyss',
    name: 'Amulet of the Abyss',
    category: 'wondrous',
    source: 'Inner Sea World Guide',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.CONJURATION }],
    casterLevel: 5,
    slot: 'neck',

    price: 15000,
    weight: 0,

    description:
      "This amulet displays the rune of a specific demon lord. It functions as an unholy symbol and, for " +
      "worshippers of the attuned demon lord, as a phylactery of faithfulness. The wearer can cast each " +
      "of the three spell-like abilities granted by the associated demon lord's first exalted demonic boon " +
      "once per day. Lawful or good-aligned wearers gain 2 negative levels that persist while wearing the " +
      "amulet and cannot be removed by any means, though they do not cause permanent level loss.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: [],
      specialRequirements: ['Creator must worship a demon lord'],
      cost: 7500,
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
        target: 'special.unholy_symbol',
        value: 0,
        source: 'Amulet of the Abyss',
      },
      {
        type: 'special',
        target: 'special.phylactery_of_faithfulness',
        value: 0,
        source: 'Amulet of the Abyss',
      },
      {
        type: 'special',
        target: 'special.demon_lord_boon_spells',
        value: 0,
        source: 'Amulet of the Abyss',
      },
    ],
  },

  // ---- 34. Amulet of the Blooded (10 variants) --------------------------------
  // Aberrant
  {
    id: 'wondrous-amulet-blooded-aberrant',
    name: 'Amulet of the Blooded (Aberrant)',
    category: 'wondrous',
    source: 'Advanced Class Guide',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ILLUSION }],
    casterLevel: 9,
    slot: 'neck',

    price: 15000,
    weight: 1,

    description:
      "This amulet grants powers from the aberrant sorcerer bloodline to non-sorcerers, but makes the " +
      "wearer vulnerable to attacks exploiting that bloodline. Creatures with the aberrant bloodline " +
      "treat their effective bloodline level as 2 higher instead of gaining the normal powers.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['blur', 'enlarge person'],
      specialRequirements: ['Creator must be a sorcerer with the aberrant bloodline'],
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
        target: 'special.bloodline_powers_aberrant',
        value: 0,
        source: 'Amulet of the Blooded (Aberrant)',
      },
    ],
  },

  // Abyssal
  {
    id: 'wondrous-amulet-blooded-abyssal',
    name: 'Amulet of the Blooded (Abyssal)',
    category: 'wondrous',
    source: 'Advanced Class Guide',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ABJURATION }],
    casterLevel: 9,
    slot: 'neck',

    price: 12000,
    weight: 1,

    description:
      "This amulet grants powers from the abyssal sorcerer bloodline to non-sorcerers, but makes the " +
      "wearer vulnerable to attacks exploiting that bloodline. Creatures with the abyssal bloodline " +
      "treat their effective bloodline level as 2 higher instead of gaining the normal powers.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['delay poison', 'magic fang', 'resist energy'],
      specialRequirements: ['Creator must be a sorcerer with the abyssal bloodline'],
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
        target: 'special.bloodline_powers_abyssal',
        value: 0,
        source: 'Amulet of the Blooded (Abyssal)',
      },
    ],
  },

  // Accursed
  {
    id: 'wondrous-amulet-blooded-accursed',
    name: 'Amulet of the Blooded (Accursed)',
    category: 'wondrous',
    source: 'Advanced Class Guide',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.NECROMANCY }],
    casterLevel: 9,
    slot: 'neck',

    price: 12000,
    weight: 1,

    description:
      "This amulet grants powers from the accursed sorcerer bloodline to non-sorcerers, but makes the " +
      "wearer vulnerable to attacks exploiting that bloodline. Creatures with the accursed bloodline " +
      "treat their effective bloodline level as 2 higher instead of gaining the normal powers.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['bestow curse', 'resist energy', 'resistance'],
      specialRequirements: ['Creator must be a sorcerer with the accursed bloodline'],
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
        target: 'special.bloodline_powers_accursed',
        value: 0,
        source: 'Amulet of the Blooded (Accursed)',
      },
    ],
  },

  // Celestial
  {
    id: 'wondrous-amulet-blooded-celestial',
    name: 'Amulet of the Blooded (Celestial)',
    category: 'wondrous',
    source: 'Advanced Class Guide',
    isOfficial: true,

    aura: [
      { strength: AuraStrength.MODERATE, school: MagicSchool.ABJURATION },
      { strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION },
    ],
    casterLevel: 9,
    slot: 'neck',

    price: 12000,
    weight: 1,

    description:
      "This amulet grants powers from the celestial sorcerer bloodline to non-sorcerers, but makes the " +
      "wearer vulnerable to attacks exploiting that bloodline. Creatures with the celestial bloodline " +
      "treat their effective bloodline level as 2 higher instead of gaining the normal powers.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['resist energy', 'scorching ray'],
      specialRequirements: ['Creator must be a sorcerer with the celestial bloodline'],
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
        target: 'special.bloodline_powers_celestial',
        value: 0,
        source: 'Amulet of the Blooded (Celestial)',
      },
    ],
  },

  // Destined
  {
    id: 'wondrous-amulet-blooded-destined',
    name: 'Amulet of the Blooded (Destined)',
    category: 'wondrous',
    source: 'Advanced Class Guide',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 7,
    slot: 'neck',

    price: 10000,
    weight: 1,

    description:
      "This amulet grants powers from the destined sorcerer bloodline to non-sorcerers, but makes the " +
      "wearer vulnerable to attacks exploiting that bloodline. Creatures with the destined bloodline " +
      "treat their effective bloodline level as 2 higher instead of gaining the normal powers.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['aid'],
      specialRequirements: ['Creator must be a sorcerer with the destined bloodline'],
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
        type: 'special',
        target: 'special.bloodline_powers_destined',
        value: 0,
        source: 'Amulet of the Blooded (Destined)',
      },
    ],
  },

  // Draconic
  {
    id: 'wondrous-amulet-blooded-draconic',
    name: 'Amulet of the Blooded (Draconic)',
    category: 'wondrous',
    source: 'Advanced Class Guide',
    isOfficial: true,

    aura: [
      { strength: AuraStrength.MODERATE, school: MagicSchool.ABJURATION },
      { strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION },
    ],
    casterLevel: 9,
    slot: 'neck',

    price: 12000,
    weight: 1,

    description:
      "This amulet grants powers from the draconic sorcerer bloodline to non-sorcerers, but makes the " +
      "wearer vulnerable to attacks exploiting that bloodline. Creatures with the draconic bloodline " +
      "treat their effective bloodline level as 2 higher instead of gaining the normal powers.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['fire breath', 'resist energy'],
      specialRequirements: ['Creator must be a sorcerer with the draconic bloodline'],
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
        target: 'special.bloodline_powers_draconic',
        value: 0,
        source: 'Amulet of the Blooded (Draconic)',
      },
    ],
  },

  // Elemental
  {
    id: 'wondrous-amulet-blooded-elemental',
    name: 'Amulet of the Blooded (Elemental)',
    category: 'wondrous',
    source: 'Advanced Class Guide',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION }],
    casterLevel: 9,
    slot: 'neck',

    price: 12000,
    weight: 1,

    description:
      "This amulet grants powers from the elemental sorcerer bloodline to non-sorcerers, but makes the " +
      "wearer vulnerable to attacks exploiting that bloodline. Creatures with the elemental bloodline " +
      "treat their effective bloodline level as 2 higher instead of gaining the normal powers.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['elemental aura', 'resist energy'],
      specialRequirements: ['Creator must be a sorcerer with the elemental bloodline'],
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
        target: 'special.bloodline_powers_elemental',
        value: 0,
        source: 'Amulet of the Blooded (Elemental)',
      },
    ],
  },

  // Fey
  {
    id: 'wondrous-amulet-blooded-fey',
    name: 'Amulet of the Blooded (Fey)',
    category: 'wondrous',
    source: 'Advanced Class Guide',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ILLUSION }],
    casterLevel: 9,
    slot: 'neck',

    price: 10000,
    weight: 1,

    description:
      "This amulet grants powers from the fey sorcerer bloodline to non-sorcerers, but makes the wearer " +
      "vulnerable to attacks exploiting that bloodline. Creatures with the fey bloodline treat their " +
      "effective bloodline level as 2 higher instead of gaining the normal powers.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['greater invisibility', 'hideous laughter'],
      specialRequirements: ['Creator must be a sorcerer with the fey bloodline'],
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
        type: 'special',
        target: 'special.bloodline_powers_fey',
        value: 0,
        source: 'Amulet of the Blooded (Fey)',
      },
    ],
  },

  // Infernal
  {
    id: 'wondrous-amulet-blooded-infernal',
    name: 'Amulet of the Blooded (Infernal)',
    category: 'wondrous',
    source: 'Advanced Class Guide',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ABJURATION }],
    casterLevel: 9,
    slot: 'neck',

    price: 12000,
    weight: 1,

    description:
      "This amulet grants powers from the infernal sorcerer bloodline to non-sorcerers, but makes the " +
      "wearer vulnerable to attacks exploiting that bloodline. Creatures with the infernal bloodline " +
      "treat their effective bloodline level as 2 higher instead of gaining the normal powers.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['chill touch', 'resist energy'],
      specialRequirements: ['Creator must be a sorcerer with the infernal bloodline'],
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
        target: 'special.bloodline_powers_infernal',
        value: 0,
        source: 'Amulet of the Blooded (Infernal)',
      },
    ],
  },

  // Undead
  {
    id: 'wondrous-amulet-blooded-undead',
    name: 'Amulet of the Blooded (Undead)',
    category: 'wondrous',
    source: 'Advanced Class Guide',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ABJURATION }],
    casterLevel: 9,
    slot: 'neck',

    price: 12000,
    weight: 1,

    description:
      "This amulet grants powers from the undead sorcerer bloodline to non-sorcerers, but makes the " +
      "wearer vulnerable to attacks exploiting that bloodline. Creatures with the undead bloodline " +
      "treat their effective bloodline level as 2 higher instead of gaining the normal powers.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['chill touch', 'resist energy'],
      specialRequirements: ['Creator must be a sorcerer with the undead bloodline'],
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
        target: 'special.bloodline_powers_undead',
        value: 0,
        source: 'Amulet of the Blooded (Undead)',
      },
    ],
  },

  // ---- 35. Amulet of the Planes -----------------------------------------------
  {
    id: 'wondrous-amulet-planes',
    name: 'Amulet of the Planes',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.CONJURATION }],
    casterLevel: 15,
    slot: 'neck',

    price: 120000,
    weight: 0,

    description:
      'This black circular pendant swirls with colors when examined closely. It allows the wearer to use ' +
      'plane shift at will. However, the wearer must succeed on a DC 15 Intelligence check to reach the ' +
      'intended destination; on a failure, they arrive at a random location on the intended plane (01–60 ' +
      'on 1d%) or on a completely random plane (61–100).',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['plane shift'],
      cost: 60000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'command_word',

    effects: [
      {
        type: 'special',
        target: 'special.plane_shift_at_will',
        value: 0,
        source: 'Amulet of the Planes',
      },
    ],
  },

  // ---- 36. Amulet of the Spirits (8 variants) ---------------------------------
  // Battle
  {
    id: 'wondrous-amulet-spirits-battle',
    name: 'Amulet of the Spirits (Battle)',
    category: 'wondrous',
    source: 'Advanced Class Guide',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.NECROMANCY }],
    casterLevel: 8,
    slot: 'neck',

    price: 12000,
    weight: 1,

    description:
      'This amulet shaped like a tiny downward-pointing dagger grants a +3 deflection bonus to AC that ' +
      'decreases by 1 each time the wearer is hit (minimum 0), lasting 8 rounds. Additionally, the wearer ' +
      'can curse enemies within 30 feet, increasing bleed damage by 1 and halving healing received for ' +
      '8 rounds (Will DC 13 negates).',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['bestow curse', 'entropic shield'],
      cost: 6000,
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
        bonusType: 'deflection',
        target: 'ac.deflection',
        value: 3,
        source: 'Amulet of the Spirits (Battle)',
      },
      {
        type: 'special',
        target: 'special.battle_spirit_curse',
        value: 0,
        source: 'Amulet of the Spirits (Battle)',
      },
    ],
  },

  // Bones
  {
    id: 'wondrous-amulet-spirits-bones',
    name: 'Amulet of the Spirits (Bones)',
    category: 'wondrous',
    source: 'Advanced Class Guide',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.NECROMANCY }],
    casterLevel: 8,
    slot: 'neck',

    price: 12000,
    weight: 1,

    description:
      'This necklace of petrified bones provides a +2 deflection bonus to AC for 8 rounds. Additionally, ' +
      'the wearer can frighten creatures within 30 feet (Will DC 13 negates the fear effect).',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['entropic shield', 'scare'],
      cost: 6000,
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
        bonusType: 'deflection',
        target: 'ac.deflection',
        value: 2,
        source: 'Amulet of the Spirits (Bones)',
      },
      {
        type: 'special',
        target: 'special.bones_spirit_fear_aura',
        value: 0,
        source: 'Amulet of the Spirits (Bones)',
      },
    ],
  },

  // Flame
  {
    id: 'wondrous-amulet-spirits-flame',
    name: 'Amulet of the Spirits (Flame)',
    category: 'wondrous',
    source: 'Advanced Class Guide',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION }],
    casterLevel: 8,
    slot: 'neck',

    price: 10000,
    weight: 1,

    description:
      'This fire opal on a brass chain creates a fire ward that deals 1d6+4 fire damage to creatures ' +
      'striking the wearer in melee. Additionally, the wearer can cause a target to become vulnerable ' +
      'to fire damage, taking 50% more fire damage for one round.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['burning hands'],
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
        type: 'special',
        target: 'special.flame_spirit_ward',
        value: 0,
        source: 'Amulet of the Spirits (Flame)',
      },
    ],
  },

  // Heavens
  {
    id: 'wondrous-amulet-spirits-heavens',
    name: 'Amulet of the Spirits (Heavens)',
    category: 'wondrous',
    source: 'Advanced Class Guide',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.DIVINATION }],
    casterLevel: 8,
    slot: 'neck',

    price: 8000,
    weight: 1,

    description:
      "This cat's eye on a silver chain adds the wearer's Wisdom modifier to Charisma checks made under " +
      "the night sky. The wearer can also reduce light levels in an area, imposing darkness on enemies " +
      "(8 rounds, Will DC 13 negates).",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['darkness', 'locate creature'],
      cost: 4000,
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
        target: 'special.heavens_spirit_charisma_wisdom',
        value: 0,
        source: 'Amulet of the Spirits (Heavens)',
      },
    ],
  },

  // Life
  {
    id: 'wondrous-amulet-spirits-life',
    name: 'Amulet of the Spirits (Life)',
    category: 'wondrous',
    source: 'Advanced Class Guide',
    isOfficial: true,

    aura: [
      { strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION },
      { strength: AuraStrength.MODERATE, school: MagicSchool.NECROMANCY },
    ],
    casterLevel: 10,
    slot: 'neck',

    price: 12000,
    weight: 1,

    description:
      'This petrified robin\'s egg on woven hair adds 1d6 hit points to cure spells cast by the wearer. ' +
      'Additionally, the wearer can prevent a target from receiving magical healing for 1 minute ' +
      '(Will DC 13 negates).',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['cure light wounds', 'inflict moderate wounds'],
      cost: 6000,
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
        target: 'special.life_spirit_cure_bonus',
        value: 0,
        source: 'Amulet of the Spirits (Life)',
      },
    ],
  },

  // Stone
  {
    id: 'wondrous-amulet-spirits-stone',
    name: 'Amulet of the Spirits (Stone)',
    category: 'wondrous',
    source: 'Advanced Class Guide',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ABJURATION }],
    casterLevel: 8,
    slot: 'neck',

    price: 10000,
    weight: 1,

    description:
      'This river rock on a copper chain grants DR 5/adamantine against the next two melee attacks (lasting ' +
      '1 minute). Additionally, the wearer can magnetize a creature, imposing a –4 penalty to AC against ' +
      'metal weapons for 2 rounds.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['heat metal', 'stoneskin'],
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
        type: 'special',
        target: 'special.stone_spirit_dr_adamantine',
        value: 5,
        source: 'Amulet of the Spirits (Stone)',
      },
    ],
  },

  // Waves
  {
    id: 'wondrous-amulet-spirits-waves',
    name: 'Amulet of the Spirits (Waves)',
    category: 'wondrous',
    source: 'Advanced Class Guide',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ILLUSION }],
    casterLevel: 8,
    slot: 'neck',

    price: 10000,
    weight: 1,

    description:
      'This small conch on a woven seaweed cord grants 20% concealment (as blur) until two attacks miss ' +
      'the wearer or 1 minute elapses. Additionally, creatures taking cold damage from the wearer become ' +
      'entangled for 1 minute.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['blur', 'chill touch'],
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
        type: 'special',
        target: 'special.waves_spirit_concealment',
        value: 20,
        source: 'Amulet of the Spirits (Waves)',
      },
    ],
  },

  // Wind
  {
    id: 'wondrous-amulet-spirits-wind',
    name: 'Amulet of the Spirits (Wind)',
    category: 'wondrous',
    source: 'Advanced Class Guide',
    isOfficial: true,

    aura: [
      { strength: AuraStrength.MODERATE, school: MagicSchool.ABJURATION },
      { strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION },
    ],
    casterLevel: 8,
    slot: 'neck',

    price: 8000,
    weight: 1,

    description:
      'This feather on a twig chain grants a 20% miss chance against ranged attacks for 1 minute. ' +
      'Additionally, targets struck by the wearer become wreathed in electricity, revealing invisible ' +
      'creatures within 5 feet and taking 5 electricity damage from metal melee hits for 4 rounds.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['entropic shield', 'shocking grasp'],
      cost: 4000,
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
        target: 'special.wind_spirit_ranged_miss_chance',
        value: 20,
        source: 'Amulet of the Spirits (Wind)',
      },
    ],
  },

  // ---- 37. Amulet of the Storm -----------------------------------------------
  {
    id: 'wondrous-amulet-storm',
    name: 'Amulet of the Storm',
    category: 'wondrous',
    source: 'Inner Sea World Guide',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ABJURATION }],
    casterLevel: 11,
    slot: 'neck',

    price: 36000,
    weight: 0,

    description:
      'This coral amulet grants energy resistance 5 against cold and electricity (or 10 for worshippers ' +
      'of Gozreh). The wearer automatically identifies spells with the air, electricity, or water ' +
      'descriptors cast within 30 feet. Once per day as an immediate action, the wearer can counterspell ' +
      'one such spell, redirecting the energy as lightning bolts that deal 1d6 electricity damage per ' +
      'spell level to the original caster (DC 18 Reflex for half).',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['dispel magic', 'protection from energy'],
      specialRequirements: ['Creator must be a worshipper of Gozreh'],
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
        type: 'resistance',
        target: 'energy_resistance.cold',
        value: 5,
        source: 'Amulet of the Storm',
      },
      {
        type: 'resistance',
        target: 'energy_resistance.electricity',
        value: 5,
        source: 'Amulet of the Storm',
      },
      {
        type: 'special',
        target: 'special.storm_counterspell_lightning',
        value: 0,
        source: 'Amulet of the Storm',
      },
    ],
  },

  // ---- 38. Amulet of the True Form -------------------------------------------
  {
    id: 'wondrous-amulet-true-form',
    name: 'Amulet of the True Form',
    category: 'wondrous',
    source: 'Advanced Race Guide',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 7,
    slot: 'neck',

    price: 6500,
    weight: 0,

    description:
      'This sapphire amulet set with a pearl grants a +2 resistance bonus on saving throws against ' +
      'polymorph effects and a +4 resistance bonus on saving throws against unwilling lycanthropic ' +
      'transformation.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['polymorph'],
      cost: 3250,
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
        source: 'Amulet of the True Form',
        condition: {
          type: 'custom',
          params: { descriptor: 'polymorph' },
          description: 'against polymorph effects',
        },
      },
      {
        type: 'special',
        target: 'special.lycanthropy_save_bonus_4',
        value: 4,
        source: 'Amulet of the True Form',
      },
    ],
  },

  // ---- 39. Amulet of Uncanny Defense -----------------------------------------
  {
    id: 'wondrous-amulet-uncanny-defense',
    name: 'Amulet of Uncanny Defense',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ABJURATION }],
    casterLevel: 9,
    slot: 'neck',

    price: 5000,
    weight: 0,

    description:
      "This cold-iron amulet features a bear's head with open jaws. It enhances the wearer's uncanny " +
      'dodge ability to function as improved uncanny dodge. For wearers who already have improved uncanny ' +
      'dodge, it instead treats their class level as 4 higher when determining the number of rogue levels ' +
      'an attacker must have to flank them.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['true seeing'],
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
        target: 'special.improved_uncanny_dodge',
        value: 0,
        source: 'Amulet of Uncanny Defense',
      },
    ],
  },

  // ---- 40. Amulet of Undead Persuasion ---------------------------------------
  {
    id: 'wondrous-amulet-undead-persuasion',
    name: 'Amulet of Undead Persuasion',
    category: 'wondrous',
    source: 'Advanced Race Guide',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 7,
    slot: 'neck',

    price: 15000,
    weight: 1,

    description:
      'This bloodstone amulet produces a red liquid once per day that sustains an undead creature\'s ' +
      'hunger for 24 hours (the liquid vanishes at sunrise if unused). Dhampir wearers gain additional ' +
      'benefits: a +4 bonus on Diplomacy checks against undead that consumed the liquid, a –2 penalty on ' +
      "saving throws those undead make against the wearer's spells, and the ability to use command undead " +
      'once per day on an undead that drank the liquid.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['command undead', 'minor creation'],
      specialRequirements: ['Creator must be a dhampir'],
      cost: 7500,
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
        target: 'special.undead_persuasion_liquid',
        value: 0,
        source: 'Amulet of Undead Persuasion',
      },
      {
        type: 'special',
        target: 'special.command_undead_1_per_day',
        value: 0,
        source: 'Amulet of Undead Persuasion',
      },
    ],
  },

  // ---- 41. Amulet of Water Parting -------------------------------------------
  {
    id: 'wondrous-amulet-water-parting',
    name: 'Amulet of Water Parting',
    category: 'wondrous',
    source: 'Advanced Race Guide',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 11,
    slot: 'neck',

    price: 10000,
    weight: 0,

    description:
      'This blackwood amulet with abstract wave-inspired designs provides a +2 enhancement bonus to ' +
      'natural armor, a +2 resistance bonus on saving throws against spells or effects with the water ' +
      'descriptor, and a +2 deflection bonus to AC against such spells or effects that require an ' +
      'attack roll.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['barkskin', 'control water'],
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
        target: 'ac.natural',
        value: 2,
        source: 'Amulet of Water Parting',
      },
      {
        type: 'bonus',
        bonusType: 'resistance',
        target: 'save.all',
        value: 2,
        source: 'Amulet of Water Parting',
        condition: {
          type: 'custom',
          params: { descriptor: 'water' },
          description: 'against spells and effects with the water descriptor',
        },
      },
      {
        type: 'bonus',
        bonusType: 'deflection',
        target: 'ac.deflection',
        value: 2,
        source: 'Amulet of Water Parting',
        condition: {
          type: 'custom',
          params: { descriptor: 'water', requiresAttackRoll: true },
          description: 'against water descriptor spells or effects requiring an attack roll',
        },
      },
    ],
  },

  // ---- 42. Amulet, Armillary --------------------------------------------------
  {
    id: 'wondrous-amulet-armillary',
    name: "Armillary Amulet",
    category: 'wondrous',
    source: 'From Shore to Sea',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 5,
    slot: 'neck',

    price: 2500,
    weight: 0,

    description:
      'A thin chain of silvery-gray metal holds interlocking rings that slowly turn within themselves, ' +
      'forming an accurate replication of the celestial sphere. The amulet grants a +5 competence bonus ' +
      'on Spellcraft checks and grants immunity to the dangerous effects of the Orrery of Nal-Kashel.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: [],
      specialRequirements: ['Creator must have 5 ranks in Spellcraft'],
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
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.spellcraft',
        value: 5,
        source: 'Armillary Amulet',
      },
      {
        type: 'special',
        target: 'special.orrery_immunity',
        value: 0,
        source: 'Armillary Amulet',
      },
    ],
  },

  // ---- 43. Amulet, Darksire --------------------------------------------------
  {
    id: 'wondrous-amulet-darksire',
    name: 'Darksire Amulet',
    category: 'wondrous',
    source: 'Advanced Race Guide',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION }],
    casterLevel: 3,
    slot: 'neck',

    price: 9000,
    weight: 1,

    description:
      'This iron locket contains a fiend token (a scale, horn shaving, claw shaving, or burning hair). ' +
      'When worn by a tiefling who already has cold, electricity, or fire resistance, it increases that ' +
      'resistance by 5 points. Additionally, it grants a +4 insight bonus on Diplomacy checks made to ' +
      'influence evil outsiders.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['resist energy'],
      specialRequirements: ['Creator must be a tiefling, half-fiend, or true fiend'],
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
        type: 'special',
        target: 'special.tiefling_energy_resistance_bonus_5',
        value: 5,
        source: 'Darksire Amulet',
      },
      {
        type: 'bonus',
        bonusType: 'insight',
        target: 'skill.diplomacy',
        value: 4,
        source: 'Darksire Amulet',
        condition: {
          type: 'custom',
          params: { targetType: 'evil outsider' },
          description: 'when influencing evil outsiders',
        },
      },
    ],
  },

  // ---- 44. Amulet, Dragonfoe -------------------------------------------------
  {
    id: 'wondrous-amulet-dragonfoe',
    name: 'Dragonfoe Amulet',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 9,
    slot: 'neck',

    price: 20000,
    weight: 1,

    description:
      'This amulet features a cracked dragon scale set in a disk of gold. It provides three benefits ' +
      'against dragons: the wearer ignores dragons\' damage reduction, the wearer may roll twice and ' +
      'take the higher result when making caster level checks to overcome dragon spell resistance, and ' +
      'the wearer gains evasion against dragon breath weapons (Reflex save for no damage instead of half).',

    construction: {
      feats: ['Craft Wondrous Item', 'Spell Penetration'],
      spells: ['magic weapon', 'jump'],
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
        type: 'special',
        target: 'special.ignore_dragon_dr',
        value: 0,
        source: 'Dragonfoe Amulet',
      },
      {
        type: 'special',
        target: 'special.dragon_sr_roll_twice',
        value: 0,
        source: 'Dragonfoe Amulet',
      },
      {
        type: 'special',
        target: 'special.dragon_breath_evasion',
        value: 0,
        source: 'Dragonfoe Amulet',
      },
    ],
  },

  // ---- 45. Amulet, Everwake -------------------------------------------------
  {
    id: 'wondrous-amulet-everwake',
    name: 'Everwake Amulet',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.CONJURATION }],
    casterLevel: 2,
    slot: 'neck',

    price: 8000,
    weight: 1,

    description:
      'This sun-shaped amulet with an open eye motif allows the wearer to forgo sleep. The wearer must ' +
      'still remain at ease for the normal rest period to regain spells and other abilities, though light ' +
      'activities like reading are permitted. After seven consecutive nights of use, the amulet becomes ' +
      'inert for one day and the wearer suffers exhaustion. Removing the amulet after using its ability ' +
      'causes exhaustion lasting four hours per skipped night of sleep.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['lesser restoration'],
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
        target: 'special.no_sleep_required',
        value: 0,
        source: 'Everwake Amulet',
      },
    ],
  },

  // ---- 46. Amulet, Forge Fist -----------------------------------------------
  {
    id: 'wondrous-amulet-forge-fist',
    name: 'Forge Fist Amulet',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.EVOCATION }],
    casterLevel: 6,
    slot: 'neck',

    price: 13000,
    weight: 1,

    description:
      "On command, this amulet transforms the wearer's fists into red-hot flaming adamantine. The wearer " +
      'is protected from the heat and may deliver powerful strikes. Unarmed strikes and natural attacks ' +
      'using the hands gain the flaming weapon ability and are treated as adamantine for bypassing damage ' +
      'reduction (but not hardness). While active, the hands cannot hold or manipulate objects unless the ' +
      'action could be performed with a club and is unaffected by fire. A swift action ends the effect.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['greater magic fang', 'flame blade'],
      cost: 6500,
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
        target: 'special.flaming_adamantine_fists',
        value: 0,
        source: 'Forge Fist Amulet',
      },
    ],
  },

  // ---- 47. Amulet, Frost Fist -----------------------------------------------
  {
    id: 'wondrous-amulet-frost-fist',
    name: 'Frost Fist Amulet',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.EVOCATION }],
    casterLevel: 5,
    slot: 'neck',

    price: 10000,
    weight: 1,

    description:
      "This iron fist-shaped amulet is surrounded by chilling mist. On command, the wearer's hands " +
      'become covered in freezing iron, granting unarmed strikes and natural attacks the frost weapon ' +
      'ability and treating them as cold iron for damage reduction purposes. The wearer is protected from ' +
      'the cold but cannot manipulate objects with their rigid hands (except those compatible with club ' +
      'use and unaffected by cold). A swift action ends the transformation.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['greater magic fang', 'cone of cold'],
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
        target: 'special.frost_cold_iron_fists',
        value: 0,
        source: 'Frost Fist Amulet',
      },
    ],
  },

  // ---- 48. Amulet, Righteous Fist -------------------------------------------
  {
    id: 'wondrous-amulet-righteous-fist',
    name: 'Righteous Fist Amulet',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 4,
    slot: 'neck',

    price: 4000,
    weight: 0,

    description:
      "This golden amulet grants divine practitioners the ability to make unarmed strikes in melee combat " +
      "as if they had the Improved Unarmed Strike feat while using their divine powers of retribution " +
      "(such as a cleric's smite, an inquisitor's smiting judgment, or a paladin's smite).",

    construction: {
      feats: ['Craft Wondrous Item', 'Improved Unarmed Strike'],
      spells: ['stone fist'],
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
        type: 'special',
        target: 'special.unarmed_strike_during_smite',
        value: 0,
        source: 'Righteous Fist Amulet',
      },
    ],
  },

  // ---- 49. Amulet, Shark Tooth -----------------------------------------------
  {
    id: 'wondrous-amulet-shark-tooth',
    name: 'Shark Tooth Amulet',
    category: 'wondrous',
    source: 'Advanced Race Guide',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION }],
    casterLevel: 5,
    slot: 'neck',

    price: 9000,
    weight: 0,

    description:
      'This petrified shark tooth on a kelp twine allows the wearer to use melee weapons normally ' +
      'underwater, taking no attack penalty and dealing full damage. Thrown weapons can also be used ' +
      'underwater with only a –2 attack penalty and half the normal range increments.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['touch of the sea'],
      specialRequirements: ['Creator must be an undine or possess the water subtype'],
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
        type: 'special',
        target: 'special.underwater_melee_no_penalty',
        value: 0,
        source: 'Shark Tooth Amulet',
      },
    ],
  },

  // ---- 50. Angel's Clarion ---------------------------------------------------
  {
    id: 'wondrous-angels-clarion',
    name: "Angel's Clarion",
    category: 'wondrous',
    source: 'Chronicle of the Righteous',
    isOfficial: true,

    aura: [
      { strength: AuraStrength.FAINT, school: MagicSchool.CONJURATION },
      { strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION },
    ],
    casterLevel: 5,
    slot: 'none',

    price: 23400,
    weight: 1,

    description:
      "A graceful trumpet with a bell that unfolds like flower petals, crafted from platinum or silver " +
      "near the mouthpiece transitioning to rose gold at the bell. When sounded (up to three times per " +
      "day), it emits a blast sounding like an angelic choir. Good-aligned creatures in a 30-foot cone " +
      "receive 3d8+5 points of healing from positive energy. Evil-aligned creatures in the area must " +
      "succeed at a DC 13 Reflex save or become entangled for 5 minutes as magical flowers spring up " +
      "around them. Neutral creatures receive neither benefit nor hindrance.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['cure serious wounds', 'entangle'],
      specialRequirements: ['Creator must worship an empyreal lord'],
      cost: 11700,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 2,
      breakDC: 12,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.angelic_choir_healing',
        value: 0,
        source: "Angel's Clarion",
      },
      {
        type: 'special',
        target: 'special.angelic_choir_entangle_evil',
        value: 0,
        source: "Angel's Clarion",
      },
    ],
  },
];
