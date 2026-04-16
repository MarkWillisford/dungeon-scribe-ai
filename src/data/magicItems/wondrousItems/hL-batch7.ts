import type { WondrousItemDefinition } from '@/types/magicItems';
import { AuraStrength, MagicSchool } from '@/types/equipment';

export const wondrousItemsHL7: WondrousItemDefinition[] = [
  // ---- Key of the Second Vault ------------------------------------------------
  {
    id: 'wondrous-key-of-the-second-vault',
    name: 'Key of the Second Vault',
    category: 'wondrous',
    source: 'Pathfinder Adventure Path',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [
      { strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION },
      { strength: AuraStrength.FAINT, school: MagicSchool.CONJURATION },
    ],
    casterLevel: 5,
    slot: 'none',

    price: 3000,
    weight: 0,

    description:
      'An ornate key on a gold chain that always glints, even in the dimmest light. ' +
      'The bearer can lock (but not unlock) any non-magical lock as if possessing the correct key. ' +
      'Once per day, turning the key clockwise activates shield of faith on the bearer (chaotic wearers ' +
      'receive only a +1 deflection bonus instead). Once per day, speaking a command word summons a ' +
      'two-headed eagle via summon monster II that obeys the bearer\'s commands. While worn as a pendant ' +
      'or held, the key grants a +2 bonus on Appraise checks. If the associated deity is the bearer\'s ' +
      'patron, it also functions as a holy symbol.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["fox's cunning", 'shield of faith', 'summon monster II'],
      specialRequirements: ['Creator requires 5 ranks in Appraise'],
      cost: 1500,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 1,
      breakDC: 15,
    },

    activationCategory: 'command_word',
    activationAction: 'standard',

    effects: [
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.appraise',
        value: 2,
        source: 'Key of the Second Vault',
      },
      {
        type: 'special',
        target: 'special.lock_nonmagical',
        value: 0,
        source: 'Key of the Second Vault',
      },
    ],
    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'shield_of_faith',
            spellName: 'Shield of Faith',
            casterLevel: 5,
            usesPerDay: 1,
            activationAction: 'standard',
          },
        ],
      },
      {
        spells: [
          {
            spellId: 'summon_monster_ii',
            spellName: 'Summon Monster II',
            casterLevel: 5,
            usesPerDay: 1,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // ---- Key, Clockwork ---------------------------------------------------------
  {
    id: 'wondrous-key-clockwork',
    name: 'Key, Clockwork',
    category: 'wondrous',
    source: "Pathfinder Player Companion: Faiths of Balance",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION }],
    casterLevel: 5,
    slot: 'none',

    price: 500,
    weight: 1,

    description:
      'This magical key causes constructs to avoid attacking the bearer, directing their attacks ' +
      'toward other targets if possible, unless directly threatened by the bearer or ordered by their ' +
      'creator to attack. The key can also be used as an improvised weapon dealing 1d2 damage. Against ' +
      'constructs, it inflicts 1d4 damage and forces a DC 12 Will save; failure paralyzes the construct ' +
      'for 1d4 rounds. The key is destroyed after successfully paralyzing a construct.',

    construction: {
      feats: ['Craft Construct', 'Craft Wondrous Item'],
      spells: ['shatter'],
      cost: 250,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 1,
      breakDC: 15,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'special',
        target: 'special.construct_avoidance',
        value: 0,
        source: 'Key, Clockwork',
      },
      {
        type: 'special',
        target: 'special.construct_paralysis_weapon',
        value: 0,
        source: 'Key, Clockwork',
      },
    ],
  },

  // ---- Key, Moribund ----------------------------------------------------------
  {
    id: 'wondrous-key-moribund',
    name: 'Key, Moribund',
    category: 'wondrous',
    source: 'Pathfinder Adventure Path #47: Ashes at Dawn',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.NECROMANCY }],
    casterLevel: 12,
    slot: 'none',

    price: 40000,
    weight: 1,

    description:
      'This key resembles an engraved skull with burned-out ioun stones for eyes. The skull\'s head ' +
      'rotates to align runic symbols with openings along the edge, matching inscriptions on cultist ' +
      'objects such as statues and doors; proper arrangement activates stored spell effects including ' +
      'wards and arcane locks. The bearer can cast message at will, and cast spectral hand and vampiric ' +
      'touch three times daily. The skull\'s eyes glow when undead approach within 60 feet. Good ' +
      'creatures carrying the key suffer one negative level that cannot be removed while they possess it.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['detect undead', 'knock', 'message', 'spectral hand', 'vampiric touch'],
      cost: 20000,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 2,
      breakDC: 15,
    },

    activationCategory: 'command_word',
    activationAction: 'standard',

    effects: [
      {
        type: 'special',
        target: 'special.undead_detection_60ft',
        value: 0,
        source: 'Key, Moribund',
      },
      {
        type: 'penalty',
        target: 'special.negative_level',
        value: 1,
        source: 'Key, Moribund',
        condition: {
          type: 'custom',
          params: { descriptor: 'good_alignment_bearer' },
          description: 'good-aligned creatures carrying this key only',
        },
      },
    ],
    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'message',
            spellName: 'Message',
            casterLevel: 12,
            usesPerDay: 0,
            activationAction: 'standard',
          },
        ],
      },
      {
        spells: [
          {
            spellId: 'spectral_hand',
            spellName: 'Spectral Hand',
            casterLevel: 12,
            usesPerDay: 3,
            activationAction: 'standard',
          },
          {
            spellId: 'vampiric_touch',
            spellName: 'Vampiric Touch',
            casterLevel: 12,
            usesPerDay: 3,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // ---- Ki Mat -----------------------------------------------------------------
  {
    id: 'wondrous-ki-mat',
    name: 'Ki Mat',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 7,
    slot: 'none',

    price: 10000,
    weight: 3,

    description:
      'This woven reed pad is designed to aid meditation and mental recovery. The owner can sit on ' +
      'the mat for one hour without taking other actions and attempt to center themselves. At the end ' +
      'of the hour, the user makes a Wisdom check (DC 10 + current ki points); success restores 1 ki ' +
      'point. Note that ability checks do not automatically succeed on a roll of 20.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['lesser restoration'],
      specialRequirements: ['Creator must be a monk'],
      cost: 5000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 2,
      breakDC: 10,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.ki_point_recovery',
        value: 1,
        source: 'Ki Mat',
      },
    ],
  },

  // ---- Ki Robes ---------------------------------------------------------------
  {
    id: 'wondrous-ki-robes',
    name: 'Ki Robes',
    category: 'wondrous',
    source: "Pathfinder Player Companion: Merchant's Manifest",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ABJURATION }],
    casterLevel: 11,
    slot: 'body',

    price: 10000,
    weight: 1,

    description:
      'This black-and-white robe is specially crafted to help the wearer regulate the flow of ki in ' +
      'the body, allowing for the generation of internal strength. Each time the wearer expends a ki ' +
      'point, they receive a +1 natural armor bonus to AC and a +1 enhancement bonus to Strength for ' +
      '1 round. If another ki point is spent before the next turn ends, the duration extends by 1 round ' +
      'and the bonuses each increase by +1 (maximum +4 total). Benefits end 1 round after the last ki ' +
      'point expenditure.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: [],
      specialRequirements: ['Creator must possess a ki pool class feature'],
      cost: 5000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 2,
      breakDC: 10,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'special',
        target: 'special.ki_robes_stacking_bonus',
        value: 0,
        source: 'Ki Robes',
      },
    ],
  },

  // ---- Kilt, War-Kilt of the Dervish ------------------------------------------
  {
    id: 'wondrous-kilt-war-kilt-of-the-dervish',
    name: 'War-Kilt of the Dervish',
    category: 'wondrous',
    source: 'Qadira: Gateway to the East',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 9,
    slot: 'body',

    price: 13000,
    weight: 5,

    description:
      'This magically reinforced silk skirt features overlapping, brightly colored panels. It grants ' +
      'a +2 natural armor bonus to AC and a +2 competence bonus on Acrobatics and Perform (dance) checks. ' +
      'Once per day, when an adjacent enemy takes a 5-foot step away, the wearer may use an immediate ' +
      'action to take a 5-foot step to remain adjacent. This reactive step prevents a 5-foot step on ' +
      'the wearer\'s next turn, or reduces total movement by 5 feet if a full movement action is taken.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['expeditious retreat', 'barkskin'],
      cost: 6500,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 2,
      breakDC: 10,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'natural',
        target: 'ac.natural',
        value: 2,
        source: 'War-Kilt of the Dervish',
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.acrobatics',
        value: 2,
        source: 'War-Kilt of the Dervish',
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.perform',
        value: 2,
        source: 'War-Kilt of the Dervish',
      },
      {
        type: 'special',
        target: 'special.reactive_5ft_step',
        value: 0,
        source: 'War-Kilt of the Dervish',
      },
    ],
  },

  // ---- Kilt, Windwave Kilt ----------------------------------------------------
  {
    id: 'wondrous-kilt-windwave',
    name: 'Windwave Kilt',
    category: 'wondrous',
    source: 'Pathfinder Player Companion',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'body',

    price: 7000,
    weight: 5,

    description:
      'This garment is made from thick woven strips of sea-green and sky-blue cloth decorated with ' +
      'tiny pearls and bits of coral along the beltline. The wearer receives a +3 competence bonus on ' +
      'Swim checks. The kilt floats on water when unworn, buoying creatures weighing 100 lbs or less, ' +
      'and aids flotation for heavier creatures. Once per day, the wearer with a patron deity can ' +
      'activate a gaseous form that allows them to breathe underwater, enter liquids as bubbles, swim ' +
      'at 10 feet per round, and drink saltwater as fresh water.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['create water', 'gaseous form', 'levitate'],
      specialRequirements: ['Creator must possess 5 ranks in Swim'],
      cost: 3500,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 2,
      breakDC: 10,
    },

    activationCategory: 'command_word',
    activationAction: 'standard',

    effects: [
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.swim',
        value: 3,
        source: 'Windwave Kilt',
      },
      {
        type: 'special',
        target: 'special.water_buoyancy',
        value: 0,
        source: 'Windwave Kilt',
      },
    ],
    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'gaseous_form',
            spellName: 'Gaseous Form',
            casterLevel: 5,
            usesPerDay: 1,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // ---- Kimono, Otherworldly ---------------------------------------------------
  {
    id: 'wondrous-kimono-otherworldly',
    name: 'Kimono, Otherworldly',
    category: 'wondrous',
    source: 'Pathfinder Campaign Setting',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.CONJURATION }],
    casterLevel: 15,
    slot: 'body',

    price: 67000,
    weight: 1,

    description:
      'A blue silk kimono decorated with embroidered cherry blossoms and flying cranes. The wearer ' +
      'can reposition these images at will. The kimono grants a +4 resistance bonus on all saving throws ' +
      'and a +4 bonus on caster level checks. Once per day, the wearer may capture a single creature ' +
      'within 60 feet within the kimono (no save), trapping it in an extradimensional space resembling ' +
      'an endless cherry orchard filled with walls of windblown cherry blossoms. Victims can attempt a ' +
      'DC 20 Intelligence check each round as a full-round action to escape; if unsuccessful after 10 ' +
      'minutes, they are released at their original location. While a creature is trapped, the kimono\'s ' +
      'bonuses increase to +6 on saving throws and caster level checks.',

    construction: {
      feats: ['Craft Wondrous Item', 'Heighten Spell'],
      spells: ['maze', 'resistance'],
      cost: 33500,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 2,
      breakDC: 10,
    },

    activationCategory: 'command_word',
    activationAction: 'standard',

    effects: [
      {
        type: 'bonus',
        bonusType: 'resistance',
        target: 'save.all',
        value: 4,
        source: 'Kimono, Otherworldly',
      },
      {
        type: 'bonus',
        bonusType: 'untyped',
        target: 'special.caster_level_checks',
        value: 4,
        source: 'Kimono, Otherworldly',
      },
      {
        type: 'special',
        target: 'special.extradimensional_capture',
        value: 0,
        source: 'Kimono, Otherworldly',
      },
    ],
  },

  // ---- Kineticist's Diadem (Lesser) ------------------------------------------
  {
    id: 'wondrous-kineticists-diadem-lesser',
    name: "Kineticist's Diadem (Lesser)",
    category: 'wondrous',
    source: 'Occult Adventures',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION }],
    casterLevel: 10,
    slot: 'headband',

    price: 18000,
    weight: 0,

    description:
      'A metal headband featuring a diamond-shaped gem in one of five colors corresponding to elements: ' +
      'blue (water), clear (aether), green (earth), red (fire), or white (air). This lesser version ' +
      'increases the damage dealt by the kineticist\'s simple and composite blasts by 1d6 (physical ' +
      'blasts use d8s instead). The extra dice do not multiply on critical hits and do not apply to ' +
      'form infusions like kinetic blade or kinetic whip.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: [],
      specialRequirements: ['Creator must be a 10th-level kineticist with access to the appropriate element'],
      cost: 9000,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 1,
      breakDC: 15,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'untyped',
        target: 'special.kineticist_blast_damage_dice',
        value: 1,
        source: "Kineticist's Diadem (Lesser)",
      },
    ],
  },

  // ---- Kineticist's Diadem (Standard) ----------------------------------------
  {
    id: 'wondrous-kineticists-diadem',
    name: "Kineticist's Diadem",
    category: 'wondrous',
    source: 'Occult Adventures',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION }],
    casterLevel: 10,
    slot: 'headband',

    price: 50000,
    weight: 0,

    description:
      'A metal headband featuring a diamond-shaped gem in one of five colors corresponding to elements: ' +
      'blue (water), clear (aether), green (earth), red (fire), or white (air). This standard version ' +
      'increases the damage dealt by the kineticist\'s simple and composite blasts by 2d6 (physical ' +
      'blasts use d8s instead). The extra dice do not multiply on critical hits and do not apply to ' +
      'form infusions like kinetic blade or kinetic whip.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: [],
      specialRequirements: ['Creator must be a 10th-level kineticist with access to the appropriate element'],
      cost: 25000,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 1,
      breakDC: 15,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'untyped',
        target: 'special.kineticist_blast_damage_dice',
        value: 2,
        source: "Kineticist's Diadem",
      },
    ],
  },

  // ---- Kineticist's Diadem (Greater) -----------------------------------------
  {
    id: 'wondrous-kineticists-diadem-greater',
    name: "Kineticist's Diadem (Greater)",
    category: 'wondrous',
    source: 'Occult Adventures',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION }],
    casterLevel: 10,
    slot: 'headband',

    price: 98000,
    weight: 0,

    description:
      'A metal headband featuring a diamond-shaped gem in one of five colors corresponding to elements: ' +
      'blue (water), clear (aether), green (earth), red (fire), or white (air). This greater version ' +
      'increases the damage dealt by the kineticist\'s simple and composite blasts by 3d6 (physical ' +
      'blasts use d8s instead). The extra dice do not multiply on critical hits and do not apply to ' +
      'form infusions like kinetic blade or kinetic whip.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: [],
      specialRequirements: ['Creator must be a 10th-level kineticist with access to the appropriate element'],
      cost: 49000,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 1,
      breakDC: 15,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'untyped',
        target: 'special.kineticist_blast_damage_dice',
        value: 3,
        source: "Kineticist's Diadem (Greater)",
      },
    ],
  },

  // ---- Knight's Pennon (Battle) -----------------------------------------------
  {
    id: 'wondrous-knights-pennon-battle',
    name: "Knight's Pennon (Battle)",
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 6,
    slot: 'none',

    price: 4500,
    weight: 1,

    description:
      'A narrow red cloth flag designed to mount on a knight\'s lance, spear, polearm, or staff. ' +
      'Its effects only function when properly mounted on such a weapon. Once per day, the bearer ' +
      'and all allies within 60 feet who can see the pennon gain the benefit of a heroism spell.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['heroism'],
      cost: 2250,
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
            spellId: 'heroism',
            spellName: 'Heroism',
            casterLevel: 6,
            usesPerDay: 1,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // ---- Knight's Pennon (Honor) ------------------------------------------------
  {
    id: 'wondrous-knights-pennon-honor',
    name: "Knight's Pennon (Honor)",
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ABJURATION }],
    casterLevel: 6,
    slot: 'none',

    price: 2200,
    weight: 1,

    description:
      'A narrow gold cloth flag designed to mount on a knight\'s lance, spear, polearm, or staff. ' +
      'Its effects only function when properly mounted on such a weapon. Once per day, the bearer ' +
      'and all allies within 60 feet who can see the pennon gain the benefit of a protection from evil spell.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['protection from evil'],
      cost: 1100,
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
            spellId: 'protection_from_evil',
            spellName: 'Protection from Evil',
            casterLevel: 6,
            usesPerDay: 1,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // ---- Knight's Pennon (Parley) -----------------------------------------------
  {
    id: 'wondrous-knights-pennon-parley',
    name: "Knight's Pennon (Parley)",
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 6,
    slot: 'none',

    price: 4500,
    weight: 1,

    description:
      'A narrow white cloth flag designed to mount on a knight\'s lance, spear, polearm, or staff. ' +
      'Its effects only function when properly mounted on such a weapon. When displayed during ' +
      'negotiations, the bearer and all allies within 60 feet who can see the pennon gain a +4 ' +
      'enhancement bonus to Bluff, Diplomacy, Intimidate, and Sense Motive checks for 1 hour, ' +
      'provided the bearer does not initiate hostility.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["eagle's splendor"],
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
        bonusType: 'enhancement',
        target: 'skill.bluff',
        value: 4,
        source: "Knight's Pennon (Parley)",
      },
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'skill.diplomacy',
        value: 4,
        source: "Knight's Pennon (Parley)",
      },
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'skill.intimidate',
        value: 4,
        source: "Knight's Pennon (Parley)",
      },
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'skill.sense_motive',
        value: 4,
        source: "Knight's Pennon (Parley)",
      },
    ],
  },

  // ---- Kohl of Uncanny Discernment --------------------------------------------
  {
    id: 'wondrous-kohl-of-uncanny-discernment',
    name: 'Kohl of Uncanny Discernment',
    category: 'wondrous',
    source: 'Pathfinder Adventure Path #79: The Half-Dead City',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 1,
    slot: 'eyes',

    price: 1500,
    weight: 0,

    description:
      'This cosmetic product in tube form is made from finely ground minerals, traditionally used to ' +
      'reduce desert sun glare and enhance eye appearance. When applied to the eyes as a full-round ' +
      'action, it grants low-light vision (or doubles existing low-light vision range), a +2 competence ' +
      'bonus on Perception checks, and a +2 resistance bonus on saving throws against gaze attacks, ' +
      'patterns, visual effects, and sight-based attacks. Duration is 1 hour per application. One tube ' +
      'contains 5 applications.',

    charges: { maximum: 5 },

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['keen senses', 'resistance'],
      cost: 750,
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
        target: 'special.low_light_vision',
        value: 0,
        source: 'Kohl of Uncanny Discernment',
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.perception',
        value: 2,
        source: 'Kohl of Uncanny Discernment',
      },
      {
        type: 'bonus',
        bonusType: 'resistance',
        target: 'save.all',
        value: 2,
        source: 'Kohl of Uncanny Discernment',
        condition: {
          type: 'custom',
          params: { descriptor: 'gaze_pattern_visual_sight' },
          description: 'against gaze attacks, patterns, visual effects, and sight-based attacks only',
        },
      },
    ],
  },

  // ---- Lady's Mercy -----------------------------------------------------------
  {
    id: 'wondrous-ladys-mercy',
    name: "Lady's Mercy",
    category: 'wondrous',
    source: 'Pathfinder Player Companion',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.CONJURATION }],
    casterLevel: 1,
    slot: 'none',

    price: 150,
    weight: 0,

    description:
      'A coin-sized black disk featuring a spiral on one side and a whippoorwill on the other. ' +
      'When the bearer successfully makes a Constitution check to stabilize while dying, the disk ' +
      'activates automatically and restores the wearer to 1 hit point. The disk then disintegrates. ' +
      'If a character carries multiple disks, only one activates per stabilization attempt.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['cure light wounds'],
      cost: 75,
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
        target: 'special.auto_stabilize_to_1hp',
        value: 1,
        source: "Lady's Mercy",
      },
    ],
  },

  // ---- Lambent Window ---------------------------------------------------------
  {
    id: 'wondrous-lambent-window',
    name: 'Lambent Window',
    category: 'wondrous',
    source: 'Pathfinder Campaign Setting',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.DIVINATION }],
    casterLevel: 7,
    slot: 'none',

    price: 20000,
    weight: 2,

    description:
      'This small pane of glass in a frame made of black metal resembles a hand mirror. When a user ' +
      'gazes into it for at least one minute, the reflection transforms to display a corresponding ' +
      'location on an alternate plane, showing the Shadow Plane when used on the Material Plane and ' +
      'vice versa. The view is visual only; sound and other sensory data cannot pass through. The ' +
      'window functions up to 10 minutes daily (not necessarily consecutive); the initial activation ' +
      'minute does not count against this limit. When held during a plane shift spell or ability, it ' +
      'serves as a special focus allowing precise arrival at the viewed location rather than the ' +
      'standard 5-500 mile variance.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['plane shift', 'scrying'],
      cost: 10000,
    },
    physicalStats: {
      hardness: 1,
      hitPoints: 1,
      breakDC: 12,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.planar_scrying_view',
        value: 0,
        source: 'Lambent Window',
      },
      {
        type: 'special',
        target: 'special.plane_shift_precise_arrival',
        value: 0,
        source: 'Lambent Window',
      },
    ],
  },

  // ---- Lamp, Salt -------------------------------------------------------------
  {
    id: 'wondrous-lamp-salt',
    name: 'Lamp, Salt',
    category: 'wondrous',
    source: 'Pathfinder Player Companion',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.CONJURATION }],
    casterLevel: 5,
    slot: 'none',

    price: 350,
    weight: 2,

    description:
      'A fist-sized chunk of pink, white, or green quartz-like rock crafted from compressed salt mined ' +
      'from magically infused areas. Speaking the command word causes the lamp to emit light equivalent ' +
      'to a torch and generate warmth; it functions for 1d4+1 hours before becoming ordinary salt. While ' +
      'glowing, the lamp may be hurled at a floor, creating a 10-foot radius cloud of glimmering salt ' +
      'crystals that continues emitting torch-level light, makes invisible objects visible within the ' +
      'cloud, and covers creatures with adhesive salt particles lasting the lamp\'s duration. Affected ' +
      'creatures suffer a -40 penalty on Stealth checks; this cannot be removed by normal means (dispel ' +
      'magic works).',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['glitterdust', 'light'],
      cost: 175,
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
        target: 'special.salt_lamp_light_and_warmth',
        value: 0,
        source: 'Lamp, Salt',
      },
      {
        type: 'penalty',
        target: 'skill.stealth',
        value: -40,
        source: 'Lamp, Salt',
        condition: {
          type: 'custom',
          params: { descriptor: 'covered_by_salt_cloud' },
          description: 'creatures caught in the salt crystal cloud only',
        },
      },
    ],
  },

  // ---- Lantern of Auras -------------------------------------------------------
  {
    id: 'wondrous-lantern-of-auras',
    name: 'Lantern of Auras',
    category: 'wondrous',
    source: 'Pathfinder Player Companion',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 1,
    slot: 'none',

    price: 2000,
    weight: 2,

    description:
      'This bullseye lantern crafted from cold iron with adjustable lenses and colored glass filters ' +
      'requires no oil to function. Speaking the command word reveals magical auras as per the detect ' +
      'magic spell, displaying all detectable auras within 3 rounds while its light remains focused on ' +
      'the same area. Observers performing a full-round action each round can make Knowledge (arcana) ' +
      'checks to identify spell schools or Spellcraft checks to determine magical item properties within ' +
      'the illuminated zone. Approximately 45% of these lanterns have the command word etched on the ' +
      'bottom; casting identify reveals the command word on any lantern lacking this marking.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['detect magic', 'light'],
      cost: 1000,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 5,
      breakDC: 15,
    },

    activationCategory: 'command_word',
    activationAction: 'standard',

    effects: [],
    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'detect_magic',
            spellName: 'Detect Magic',
            casterLevel: 1,
            usesPerDay: 0,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // ---- Lantern of Concealment -------------------------------------------------
  {
    id: 'wondrous-lantern-of-concealment',
    name: 'Lantern of Concealment',
    category: 'wondrous',
    source: 'Pathfinder Player Companion',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ILLUSION }],
    casterLevel: 5,
    slot: 'none',

    price: 12000,
    weight: 2,

    description:
      'A black lamp featuring a wooden frame wrapped in white linen, decorated with intricate runes ' +
      'and constellation drawings. When lit and stationary, the lantern produces a hide campsite effect ' +
      'within a 20-foot cube centered on itself, lasting 10 hours. The effect only functions when the ' +
      'lantern is stationary; relocating it requires a 10-minute adjustment period before the ' +
      'concealment resumes. Limited to one use per day.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['hide campsite'],
      cost: 6000,
    },
    physicalStats: {
      hardness: 2,
      hitPoints: 3,
      breakDC: 12,
    },

    activationCategory: 'use_activated',

    effects: [],
    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'hide_campsite',
            spellName: 'Hide Campsite',
            casterLevel: 5,
            usesPerDay: 1,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // ---- Lantern of Dancing Shadows ---------------------------------------------
  {
    id: 'wondrous-lantern-of-dancing-shadows',
    name: 'Lantern of Dancing Shadows',
    category: 'wondrous',
    source: 'Pathfinder Player Companion',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 6,
    slot: 'none',

    price: 41000,
    weight: 2,

    description:
      'This thin paper and black iron lantern burns for 6 hours on 1 pint of oil. The light causes the ' +
      'illumination level in a 30-foot radius to move one step toward dim light from brighter conditions. ' +
      'Nonmagical light sources do not increase levels within the lantern\'s radius, while magical light ' +
      'or darkness only affects the area if possessing a higher caster level than the lantern. Once per ' +
      'day when commanded, the lit lantern creates quasi-real illusions from shadows cast by its light, ' +
      'functioning as shadow conjuration. Once per day when commanded, the lantern solidifies shadows ' +
      'within its 30-foot illumination radius, forcing incorporeal creatures into semi-physical forms ' +
      'as per mass ghostbane dirge.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['darkness', 'mass ghostbane dirge', 'shadow conjuration'],
      cost: 20500,
    },
    physicalStats: {
      hardness: 1,
      hitPoints: 3,
      breakDC: 12,
    },

    activationCategory: 'command_word',
    activationAction: 'standard',

    effects: [
      {
        type: 'special',
        target: 'special.dim_light_aura_30ft',
        value: 0,
        source: 'Lantern of Dancing Shadows',
      },
    ],
    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'shadow_conjuration',
            spellName: 'Shadow Conjuration',
            casterLevel: 6,
            usesPerDay: 1,
            activationAction: 'standard',
          },
          {
            spellId: 'mass_ghostbane_dirge',
            spellName: 'Mass Ghostbane Dirge',
            casterLevel: 6,
            usesPerDay: 1,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // ---- Lantern of Hidden Light ------------------------------------------------
  {
    id: 'wondrous-lantern-of-hidden-light',
    name: 'Lantern of Hidden Light',
    category: 'wondrous',
    source: 'Pathfinder Player Companion',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.EVOCATION }],
    casterLevel: 5,
    slot: 'none',

    price: 1000,
    weight: 2,

    description:
      'This magical lantern enables discreet illumination in darkness. When activated by touching one ' +
      'of its crystal panes, it functions as a hooded lantern, except that its light and what it ' +
      'illuminates is visible only to the character who holds the lantern. To all other observers, the ' +
      'lantern appears completely unlit.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['light'],
      cost: 500,
    },
    physicalStats: {
      hardness: 2,
      hitPoints: 3,
      breakDC: 12,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.invisible_light_bearer_only',
        value: 0,
        source: 'Lantern of Hidden Light',
      },
    ],
  },

  // ---- Lantern of Revealing ---------------------------------------------------
  {
    id: 'wondrous-lantern-of-revealing',
    name: 'Lantern of Revealing',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.EVOCATION }],
    casterLevel: 5,
    slot: 'none',

    price: 30000,
    weight: 2,

    description:
      'This device functions as a standard hooded lantern. When lit, it automatically exposes all ' +
      'invisible creatures and objects within a 25-foot radius, functioning identically to the ' +
      'invisibility purge spell. No command word or special activation is required; the lantern ' +
      'activates automatically when lit.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['invisibility purge'],
      cost: 15000,
    },
    physicalStats: {
      hardness: 2,
      hitPoints: 5,
      breakDC: 15,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.invisibility_purge_25ft',
        value: 0,
        source: 'Lantern of Revealing',
      },
    ],
  },

  // ---- Lantern of the Four Elements (Standard) --------------------------------
  {
    id: 'wondrous-lantern-of-the-four-elements',
    name: 'Lantern of the Four Elements',
    category: 'wondrous',
    source: 'Pathfinder Player Companion',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'none',

    price: 1500,
    weight: 2,

    description:
      'A bronze lantern with a square base and four glass panels, each representing one of the ' +
      'fundamental elements through color, shape, and light quality. The lantern produces light ' +
      'equivalent to the light spell and grants protection from extreme temperatures as per endure ' +
      'elements. Light toggles via a standard action. The lantern also grants a +2 competence bonus ' +
      'on Spellcraft checks to identify spells with the air, earth, fire, or water descriptors, and ' +
      'a +2 competence bonus on Knowledge (planes) checks for identifying Elemental Plane creatures.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['endure elements', 'light'],
      cost: 750,
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
        target: 'special.endure_elements',
        value: 0,
        source: 'Lantern of the Four Elements',
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.spellcraft',
        value: 2,
        source: 'Lantern of the Four Elements',
        condition: {
          type: 'custom',
          params: { descriptor: 'air_earth_fire_water_spell' },
          description: 'to identify spells with air, earth, fire, or water descriptors only',
        },
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.knowledge_planes',
        value: 2,
        source: 'Lantern of the Four Elements',
        condition: {
          type: 'custom',
          params: { descriptor: 'elemental_plane_creature' },
          description: 'to identify Elemental Plane creatures only',
        },
      },
    ],
  },

  // ---- Lantern of the Four Elements (Greater) ---------------------------------
  {
    id: 'wondrous-lantern-of-the-four-elements-greater',
    name: 'Lantern of the Four Elements (Greater)',
    category: 'wondrous',
    source: 'Pathfinder Player Companion',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'none',

    price: 6500,
    weight: 2,

    description:
      'A bronze lantern with a square base and four glass panels, each representing one of the ' +
      'fundamental elements through color, shape, and light quality. Like the standard version, it ' +
      'produces light, grants endure elements, and provides competence bonuses on Spellcraft and ' +
      'Knowledge (planes) checks. In addition, pressing one of the four panels as a standard action ' +
      'activates a spell-like ability once per panel per day: the air panel casts levitate, the fire ' +
      'panel casts resist energy (fire only), the water panel casts air bubble, and the earth panel ' +
      'casts spider climb.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['endure elements', 'light', 'air bubble', 'levitate', 'resist energy', 'spider climb'],
      cost: 3250,
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
        target: 'special.endure_elements',
        value: 0,
        source: 'Lantern of the Four Elements (Greater)',
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.spellcraft',
        value: 2,
        source: 'Lantern of the Four Elements (Greater)',
        condition: {
          type: 'custom',
          params: { descriptor: 'air_earth_fire_water_spell' },
          description: 'to identify spells with air, earth, fire, or water descriptors only',
        },
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.knowledge_planes',
        value: 2,
        source: 'Lantern of the Four Elements (Greater)',
        condition: {
          type: 'custom',
          params: { descriptor: 'elemental_plane_creature' },
          description: 'to identify Elemental Plane creatures only',
        },
      },
    ],
    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'levitate',
            spellName: 'Levitate',
            casterLevel: 5,
            usesPerDay: 1,
            activationAction: 'standard',
          },
        ],
      },
      {
        spells: [
          {
            spellId: 'resist_energy',
            spellName: 'Resist Energy (fire)',
            casterLevel: 5,
            usesPerDay: 1,
            activationAction: 'standard',
          },
        ],
      },
      {
        spells: [
          {
            spellId: 'air_bubble',
            spellName: 'Air Bubble',
            casterLevel: 5,
            usesPerDay: 1,
            activationAction: 'standard',
          },
        ],
      },
      {
        spells: [
          {
            spellId: 'spider_climb',
            spellName: 'Spider Climb',
            casterLevel: 5,
            usesPerDay: 1,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // ---- Lantern of the Shining Truth -------------------------------------------
  {
    id: 'wondrous-lantern-of-the-shining-truth',
    name: 'Lantern of the Shining Truth',
    category: 'wondrous',
    source: 'Pathfinder Player Companion',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [
      { strength: AuraStrength.FAINT, school: MagicSchool.CONJURATION },
      { strength: AuraStrength.FAINT, school: MagicSchool.EVOCATION },
    ],
    casterLevel: 3,
    slot: 'none',

    price: 5400,
    weight: 2,

    description:
      'An iron lantern housing a citrine gemstone that radiates arcane energy. The lantern functions ' +
      'as a continuous light spell; the bearer may suppress or reactivate the light using a command ' +
      'word. Once per day, the bearer can activate a second command word to cast glitterdust in a ' +
      '10-foot radius. Creatures caught in the effect must make a DC 15 Will saving throw or suffer ' +
      'blindness for 3 rounds.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['glitterdust', 'light'],
      cost: 2700,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 5,
      breakDC: 15,
    },

    activationCategory: 'command_word',
    activationAction: 'standard',

    effects: [
      {
        type: 'special',
        target: 'special.continuous_light',
        value: 0,
        source: 'Lantern of the Shining Truth',
      },
    ],
    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'glitterdust',
            spellName: 'Glitterdust',
            casterLevel: 3,
            usesPerDay: 1,
            saveDC: 15,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // ---- Lantern, Faithful ------------------------------------------------------
  {
    id: 'wondrous-lantern-faithful',
    name: 'Lantern, Faithful',
    category: 'wondrous',
    source: 'Pathfinder Player Companion',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [
      { strength: AuraStrength.MODERATE, school: MagicSchool.ABJURATION },
      { strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION },
    ],
    casterLevel: 9,
    slot: 'none',

    price: 2500,
    weight: 2,

    description:
      'A silver bullseye lantern decorated with a sentinel image that functions without requiring oil ' +
      'and floats beside the user, directing light where they look. On command, the lantern floats ' +
      'autonomously alongside its user. It can be designated as a guard for up to 8 hours per day, ' +
      'acting as an alarm spell within a 30-foot radius and detecting creatures Small or larger ' +
      '(it cannot perceive invisible creatures). Upon detecting an intruder, it provides a mental ' +
      'alarm notification to the designated user and illuminates the intruder until commanded otherwise.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['alarm', 'light', "mage's faithful hound", 'unseen servant'],
      cost: 1250,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 5,
      breakDC: 15,
    },

    activationCategory: 'command_word',
    activationAction: 'standard',

    effects: [
      {
        type: 'special',
        target: 'special.floating_lantern',
        value: 0,
        source: 'Lantern, Faithful',
      },
    ],
    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'alarm',
            spellName: 'Alarm',
            casterLevel: 9,
            usesPerDay: 1,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // ---- Lantern, Foxfire -------------------------------------------------------
  {
    id: 'wondrous-lantern-foxfire',
    name: 'Lantern, Foxfire',
    category: 'wondrous',
    source: 'Pathfinder Player Companion',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 3,
    slot: 'none',

    price: 3000,
    weight: 1,

    description:
      'This copper lantern emits a steady green glow equivalent to candlelight. When filled with oil ' +
      'as a full-round action, it burns at normal lamp intensity for 6 hours. The lantern can be ' +
      'attuned to a specific creature type through a successful DC 15 Knowledge check; once attuned, ' +
      'the flame shifts to red when creatures of that type approach within 50 feet. More specific ' +
      'creature selections increase the Knowledge check DC to 15 + the target creature\'s CR.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['alarm', 'blood biography'],
      cost: 1500,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 3,
      breakDC: 12,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.creature_type_alarm_50ft',
        value: 0,
        source: 'Lantern, Foxfire',
      },
    ],
  },

  // ---- Lantern, Moonlight -----------------------------------------------------
  {
    id: 'wondrous-lantern-moonlight',
    name: 'Lantern, Moonlight',
    category: 'wondrous',
    source: 'Pathfinder Player Companion',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 13,
    slot: 'none',

    price: 66000,
    weight: 3,

    description:
      'An ornate silver bullseye lantern featuring stained glass depicting a wolf howling at the moon. ' +
      'It produces pale blue light that creates dim illumination in a 60-foot cone and operates for 30 ' +
      'minutes daily, usable in 5-minute increments. When the lantern\'s beam strikes creatures in ' +
      'alternate forms (polymorphed creatures, doppelgangers, lycanthropes), observers perceive all ' +
      'forms as semi-transparent overlays on the current form. Once per day as a standard action, the ' +
      'bearer can compel a creature within the light to assume another of its forms: for spellcasting ' +
      'polymorph effects the lantern attempts dispellation; for shapechanger creatures a DC 20 Fortitude ' +
      'save applies, with failure allowing the bearer to select another form for a minimum of 1 minute.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['dispel magic', 'greater polymorph', 'true seeing'],
      cost: 33000,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 5,
      breakDC: 18,
    },

    activationCategory: 'command_word',
    activationAction: 'standard',

    effects: [
      {
        type: 'special',
        target: 'special.true_form_reveal_60ft',
        value: 0,
        source: 'Lantern, Moonlight',
      },
      {
        type: 'special',
        target: 'special.forced_form_change',
        value: 0,
        source: 'Lantern, Moonlight',
      },
    ],
  },
];
