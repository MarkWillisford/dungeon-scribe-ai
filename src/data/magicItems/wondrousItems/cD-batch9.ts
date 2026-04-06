import type { WondrousItemDefinition } from '@/types/magicItems';
import { AuraStrength, MagicSchool } from '@/types/equipment';

export const wondrousItemsCD9: WondrousItemDefinition[] = [
  // ---- 201: Deadlimb Pins -------------------------------------------------------
  {
    id: 'wondrous-deadlimb-pins',
    name: 'Deadlimb Pins',
    category: 'wondrous',
    source: 'Pathfinder Campaign Setting: Pathfinder Society Field Guide',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 9,
    slot: 'none',

    price: 60000,
    weight: 1,

    description:
      'These two sharp pins (4 inches long) work with a paired vial of blue-black liquid. As a move ' +
      'action, the wielder coats the pins in the vial\'s contents, which lasts 1 minute. On a ' +
      'successful unarmed attack while holding both coated pins between the knuckles, the liquid ' +
      'flows under a target limb\'s skin (wielder\'s choice; two limbs on a critical hit). The target ' +
      'must succeed at a DC 17 Fortitude save or that limb becomes withered and useless: anything ' +
      'held in the limb drops to the ground and the victim cannot move the limb for 5 minutes. ' +
      'Movement is halved if a leg is affected. Multiple applications stack, potentially leaving ' +
      'creatures unable to move or attack. The pins must be used with their original vial and can ' +
      'function 50 times before depletion.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['baleful polymorph'],
      cost: 30000,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 2,
      breakDC: 15,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.deadlimb_pins_withered_limb',
        value: 0,
        source: 'Deadlimb Pins',
      },
    ],
  },

  // ---- 202: Death's Will --------------------------------------------------------
  {
    id: "wondrous-deaths-will",
    name: "Death's Will",
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 7,
    slot: 'hands',

    price: 3600,
    weight: 1,

    description:
      'This black leather fingerless glove extends to the midforearm and features delicate etched ' +
      'patterns. A concealed needle is built into its underside. The wearer gains a +4 competence ' +
      'bonus on Sleight of Hand checks to conceal poisons or toxins on her body. As a swift action, ' +
      'the wearer can fire poison from the needle at a target within 30 feet using a ranged touch ' +
      'attack. The needle holds a single poison dose at any time; refilling requires a full-round ' +
      'action that provokes attacks of opportunity.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["cat's grace", 'spit venom'],
      cost: 1800,
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
        bonusType: 'competence',
        target: 'skill.sleight_of_hand',
        value: 4,
        source: "Death's Will",
        condition: {
          type: 'custom',
          params: { descriptor: 'conceal_poison' },
          description: 'to conceal poisons or toxins on her body only',
        },
      },
      {
        type: 'special',
        target: 'special.deaths_will_needle_attack',
        value: 0,
        source: "Death's Will",
      },
    ],
  },

  // ---- 203: Decanter of Endless Water -------------------------------------------
  {
    id: 'wondrous-decanter-endless-water',
    name: 'Decanter of Endless Water',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 9,
    slot: 'none',

    price: 9000,
    weight: 2,

    description:
      'This flask produces water when the user speaks a command word that controls both type and ' +
      'volume. "Stream" generates 1 gallon per round. "Fountain" creates a 5-foot stream at 5 ' +
      'gallons per round. "Geyser" produces a 20-foot stream (1 foot wide) at 30 gallons per round; ' +
      'those struck must succeed at a DC 12 Strength check or be knocked prone and take 1d4 points ' +
      'of damage per round (2d4 against fire subtype creatures). A command word stops the flow.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['control water'],
      cost: 4500,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 12,
    },

    activationCategory: 'command_word',
    activationAction: 'standard',

    effects: [
      {
        type: 'special',
        target: 'special.endless_water_stream',
        value: 0,
        source: 'Decanter of Endless Water',
      },
    ],
  },

  // ---- 204: Deck of Illusions ---------------------------------------------------
  {
    id: 'wondrous-deck-of-illusions',
    name: 'Deck of Illusions',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ILLUSION }],
    casterLevel: 6,
    slot: 'none',

    price: 8100,
    weight: 1,

    description:
      'This collection consists of 34 parchment cards housed in an ivory, leather, or wooden box. ' +
      'When a card is drawn and thrown to the ground, it generates a major image of a creature that ' +
      'persists until dispelled. The illusion cannot travel beyond 30 feet from where the card ' +
      'landed but otherwise behaves as genuine. The card\'s drawer commands the figment\'s actions ' +
      'at all times. When the illusion is dispelled, the card becomes blank and unusable. If the ' +
      'card is picked up, the illusion immediately vanishes. A complete deck includes various ' +
      'creature illusions corresponding to playing cards and tarot cards, ranging from goblins to ' +
      'dragons to liches. Two jokers produce illusions of the deck\'s owner, the second showing ' +
      'reversed gender. Incomplete decks discovered with 1d20 cards missing are priced proportionally.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['major image'],
      cost: 4050,
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
        target: 'special.deck_of_illusions_major_image',
        value: 0,
        source: 'Deck of Illusions',
      },
    ],
  },

  // ---- 205: Defoliant Polish ----------------------------------------------------
  {
    id: 'wondrous-defoliant-polish',
    name: 'Defoliant Polish',
    category: 'wondrous',
    source: 'Advanced Player\'s Guide',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'none',

    price: 800,
    weight: 0,

    description:
      'This paste coats the armor of one Medium creature or two Small creatures and produces dark ' +
      'gray fumes for the next 24 hours. The wearer can move through overgrown or difficult terrain ' +
      'caused by vegetation as if it were normal ground, leaving a visible path of dead and ' +
      'withered plants. Plant-type creatures suffer 1 point of damage each time they use a natural ' +
      'attack or attempt to grapple the wearer.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['diminish plants'],
      cost: 400,
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
        target: 'special.defoliant_polish_terrain',
        value: 0,
        source: 'Defoliant Polish',
      },
      {
        type: 'damage',
        target: 'special.defoliant_polish_plant_damage',
        value: 1,
        source: 'Defoliant Polish',
        condition: {
          type: 'target_type',
          params: { creatureType: 'plant' },
          description: 'plant creatures only, on natural attack or grapple',
        },
      },
    ],
  },

  // ---- 206: Demon Blood ---------------------------------------------------------
  {
    id: 'wondrous-demon-blood',
    name: 'Demon Blood',
    category: 'wondrous',
    source: 'Pathfinder Campaign Setting: Lords of Chaos: Book of the Damned, Vol. 2',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.EVOCATION }],
    casterLevel: 5,
    slot: 'none',

    price: 800,
    weight: 1,

    description:
      'When consumed, the user must succeed at a DC 15 Fortitude save or become nauseated for 1d6 ' +
      'rounds. For one hour after consumption, demons take a -2 penalty on saving throws against ' +
      'the user\'s spells and spell-like abilities, and the user gains a +2 bonus on caster level ' +
      'checks to penetrate demon spell resistance. Demon blood carries addiction risks: users who ' +
      'stop taking daily doses must make DC 15 Fortitude saves for seven consecutive days or suffer ' +
      '1 point of Wisdom damage and the sickened condition.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['desecrate'],
      cost: 400,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'penalty',
        bonusType: 'untyped',
        target: 'save.all',
        value: -2,
        source: 'Demon Blood',
        condition: {
          type: 'target_type',
          params: { creatureType: 'demon' },
          description: 'demon targets only, against user\'s spells and spell-like abilities',
        },
      },
      {
        type: 'bonus',
        bonusType: 'untyped',
        target: 'special.caster_level_check_sr',
        value: 2,
        source: 'Demon Blood',
        condition: {
          type: 'target_type',
          params: { creatureType: 'demon' },
          description: 'to penetrate demon spell resistance only',
        },
      },
    ],
  },

  // ---- 207: Demon Senses --------------------------------------------------------
  {
    id: 'wondrous-demon-senses',
    name: 'Demon Senses',
    category: 'wondrous',
    source: 'Pathfinder Campaign Setting: Lords of Chaos: Book of the Damned, Vol. 2',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.CONJURATION }],
    casterLevel: 15,
    slot: 'none',

    price: 20000,
    weight: 1,

    description:
      'This item consists of a demonic eye, tongue, finger, ear, or nose floating in a small jar ' +
      'of transparent fluid. The user consumes the contents as a full-round action while ' +
      'concentrating on the body part. The consumer permanently gains a +8 racial bonus on all ' +
      'Perception checks. The corresponding body part of the consumer then transforms to match the ' +
      'consumed part: eyes become red, ears grow pointed, tongues fork, and so on. This racial ' +
      'bonus does not stack with other racial bonuses to Perception.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['limited wish', 'regenerate'],
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
        type: 'bonus',
        bonusType: 'racial',
        target: 'skill.perception',
        value: 8,
        source: 'Demon Senses',
      },
    ],
  },

  // ---- 208: Demon Talon ---------------------------------------------------------
  {
    id: 'wondrous-demon-talon',
    name: 'Demon Talon',
    category: 'wondrous',
    source: 'Pathfinder Campaign Setting: Lords of Chaos: Book of the Damned, Vol. 2',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.CONJURATION }],
    casterLevel: 15,
    slot: 'none',

    price: 20000,
    weight: 3,

    description:
      'This demonic appendage attaches to a severed hand or stump. When affixed to raw flesh, it ' +
      'fuses with the stump, granting the creature a claw attack as appropriate for a creature one ' +
      'size category larger. The demonic hand functions like a human hand and can wield weapons and ' +
      'perform standard manual tasks, but has an obviously infernal appearance with scales, unusual ' +
      'coloration, and elongated nails. Severing an existing hand inflicts 1d6 Constitution damage, ' +
      'but preparing a preexisting stump avoids significant harm.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['limited wish', 'regenerate'],
      cost: 10000,
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
        target: 'special.demon_talon_claw_attack',
        value: 0,
        source: 'Demon Talon',
      },
    ],
  },

  // ---- 209: Dervish Sikke -------------------------------------------------------
  {
    id: 'wondrous-dervish-sikke',
    name: 'Dervish Sikke',
    category: 'wondrous',
    source: 'Pathfinder Player Companion: Faiths & Philosophies',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 10,
    slot: 'head',

    price: 10000,
    weight: 1,

    description:
      'This cylindrical felt hat provides a +2 competence bonus on one Knowledge or Perform skill ' +
      'chosen when the dervish sikke is created (most commonly Knowledge [religion] or Perform ' +
      '[dance]). For bard wearers, the sikke also treats them as 5 class levels higher for bardic ' +
      'knowledge purposes, increases the bonuses from inspire courage and inspire competence by 1, ' +
      'and allows the wearer to take 10 on any Perform skill check in which she has at least 1 rank.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["fox's cunning", 'timely inspiration'],
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
        bonusType: 'competence',
        target: 'skill.perform',
        value: 2,
        source: 'Dervish Sikke',
        condition: {
          type: 'custom',
          params: { descriptor: 'chosen_skill_at_creation' },
          description: 'one chosen Knowledge or Perform skill only',
        },
      },
      {
        type: 'special',
        target: 'special.dervish_sikke_bard_abilities',
        value: 0,
        source: 'Dervish Sikke',
      },
    ],
  },

  // ---- 210: Desert Veil ---------------------------------------------------------
  {
    id: 'wondrous-desert-veil',
    name: 'Desert Veil',
    category: 'wondrous',
    source: 'Pathfinder Player Companion: Adventurer\'s Armory 2',
    isOfficial: true,

    aura: [
      { strength: AuraStrength.MODERATE, school: MagicSchool.ABJURATION },
      { strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION },
    ],
    casterLevel: 7,
    slot: 'head',

    price: 11000,
    weight: 0,

    description:
      'Small round mirrors adorn the edges of this yellow silk veil, which covers the wearer\'s ' +
      'mouth and nose. It grants protection against extreme temperatures equivalent to the endure ' +
      'elements spell. Once per day while in a warm or temperate desert, the wearer can speak a ' +
      'command word to create a 20-foot-radius oasis (functioning as grove of respite) within 40 ' +
      'feet that lasts 8 hours. Creatures outside the oasis must succeed at a DC 16 Will save or ' +
      'dismiss it as a mirage; those inside recognize its reality.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['endure elements', 'grove of respite'],
      cost: 5500,
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
        target: 'special.desert_veil_endure_elements',
        value: 0,
        source: 'Desert Veil',
      },
      {
        type: 'special',
        target: 'special.desert_veil_grove_of_respite',
        value: 0,
        source: 'Desert Veil',
      },
    ],
  },

  // ---- 211: Dhoti of Style Mastery ----------------------------------------------
  {
    id: 'wondrous-dhoti-of-style-mastery',
    name: 'Dhoti of Style Mastery',
    category: 'wondrous',
    source: 'Pathfinder Player Companion: Martial Arts Handbook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.NECROMANCY }],
    casterLevel: 3,
    slot: 'body',

    price: 5400,
    weight: 1,

    description:
      'When the wearer activates a stance from a style feat, she gains 1d8+3 temporary hit points ' +
      'plus an additional 1d8 temporary hit points for each feat that is a prerequisite of that ' +
      'style feat she possesses, to a maximum of 3d8+3 temporary hit points. These temporary hit ' +
      'points persist only while maintaining the stance during combat and expire when combat ends. ' +
      'The wearer may use this ability only once per day.',

    construction: {
      feats: ['Craft Wondrous Item', 'any style feat'],
      spells: ['false life'],
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
        target: 'special.dhoti_style_mastery_temp_hp',
        value: 0,
        source: 'Dhoti of Style Mastery',
      },
    ],
  },

  // ---- 212: Diadem of Control ---------------------------------------------------
  {
    id: 'wondrous-diadem-of-control',
    name: 'Diadem of Control',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 15,
    slot: 'headband',

    price: 189000,
    weight: 0,

    description:
      'This elegant headband features an intricately carved crystal in its center that shimmers ' +
      'with arcane energy. The wearer can attach the crystal to a construct via a touch attack as ' +
      'a standard action. The construct must succeed at a DC 23 Will save or become dominated and ' +
      'follow the headband wearer\'s orders. The wearer can assume direct control of the construct ' +
      'as a full-round action, controlling it as if via possession. The crystal can be removed as ' +
      'a standard action to control a different construct. If the construct is destroyed while the ' +
      'crystal remains attached, there is a 10% chance the crystal is also destroyed.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['dominate monster', 'possession'],
      cost: 94500,
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
        target: 'special.diadem_of_control_dominate_construct',
        value: 0,
        source: 'Diadem of Control',
      },
    ],
  },

  // ---- 213: Diadem of Inspiring Rule --------------------------------------------
  {
    id: 'wondrous-diadem-of-inspiring-rule',
    name: 'Diadem of Inspiring Rule',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'headband',

    price: 4500,
    weight: 0,

    description:
      'This ornate, ostentatious diadem provides a +3 competence bonus to the wearer\'s Leadership score.',

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

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'special.leadership_score',
        value: 3,
        source: 'Diadem of Inspiring Rule',
      },
    ],
  },

  // ---- 214: Dimensional Acid (4 variants) ----------------------------------------
  {
    id: 'wondrous-dimensional-acid-basic-pit',
    name: 'Dimensional Acid (Basic Pit)',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.CONJURATION }],
    casterLevel: 3,
    slot: 'none',

    price: 450,
    weight: 1,

    description:
      'This magical substance functions as a splash weapon with a 10-foot range increment (or as a ' +
      'special component for the snare spell). When it lands, it creates a temporary extradimensional ' +
      'pit as per the create pit spell.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['create pit'],
      cost: 225,
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
        target: 'special.dimensional_acid_create_pit',
        value: 0,
        source: 'Dimensional Acid (Basic Pit)',
      },
    ],
  },

  {
    id: 'wondrous-dimensional-acid-jagged-pit',
    name: 'Dimensional Acid (Jagged Pit)',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.CONJURATION }],
    casterLevel: 5,
    slot: 'none',

    price: 1000,
    weight: 1,

    description:
      'This magical substance functions as a splash weapon with a 10-foot range increment (or as a ' +
      'special component for the snare spell). When it lands, it creates a temporary extradimensional ' +
      'pit as per the spiked pit spell.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['spiked pit'],
      cost: 500,
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
        target: 'special.dimensional_acid_spiked_pit',
        value: 0,
        source: 'Dimensional Acid (Jagged Pit)',
      },
    ],
  },

  {
    id: 'wondrous-dimensional-acid-corrosive-pit',
    name: 'Dimensional Acid (Corrosive Pit)',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.CONJURATION }],
    casterLevel: 7,
    slot: 'none',

    price: 1750,
    weight: 1,

    description:
      'This magical substance functions as a splash weapon with a 10-foot range increment (or as a ' +
      'special component for the snare spell). When it lands, it creates a temporary extradimensional ' +
      'pit as per the acid pit spell.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['acid pit'],
      cost: 875,
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
        target: 'special.dimensional_acid_acid_pit',
        value: 0,
        source: 'Dimensional Acid (Corrosive Pit)',
      },
    ],
  },

  {
    id: 'wondrous-dimensional-acid-living-pit',
    name: 'Dimensional Acid (Living Pit)',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 9,
    slot: 'none',

    price: 2700,
    weight: 1,

    description:
      'This magical substance functions as a splash weapon with a 10-foot range increment (or as a ' +
      'special component for the snare spell). When it lands, it creates a temporary extradimensional ' +
      'pit as per the hungry pit spell.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['hungry pit'],
      cost: 1350,
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
        target: 'special.dimensional_acid_hungry_pit',
        value: 0,
        source: 'Dimensional Acid (Living Pit)',
      },
    ],
  },

  // ---- 215: Dimensional Shackles ------------------------------------------------
  {
    id: 'wondrous-dimensional-shackles',
    name: 'Dimensional Shackles',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ABJURATION }],
    casterLevel: 11,
    slot: 'wrists',

    price: 28000,
    weight: 5,

    description:
      'These restraints feature magical runes inscribed on cold iron links. Any creature bound ' +
      'within them automatically experiences the effects of a dimensional anchor spell with no ' +
      'saving throw, preventing any form of dimensional travel or teleportation. The shackles ' +
      'adjust to fit creatures of Small through Large size. Escaping or breaking the shackles ' +
      'requires a DC 30 check.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['dimensional anchor'],
      cost: 14000,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 10,
      breakDC: 30,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'special',
        target: 'special.dimensional_anchor_shackles',
        value: 0,
        source: 'Dimensional Shackles',
      },
    ],
  },

  // ---- 216: Dire Collar (2 variants) --------------------------------------------
  {
    id: 'wondrous-dire-collar',
    name: 'Dire Collar',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 3,
    slot: 'neck',

    price: 1000,
    weight: 2,

    description:
      'This leather collar adjusts to fit animals of various sizes. Once per day as a command ' +
      'action, the person who fastened the collar can enlarge an animal wearing it (or a different ' +
      'animal within 30 feet) with effects mimicking the enlarge person spell for 1 minute.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['animal growth'],
      cost: 500,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 12,
    },

    activationCategory: 'command_word',
    activationAction: 'standard',

    effects: [
      {
        type: 'special',
        target: 'special.dire_collar_enlarge_animal',
        value: 0,
        source: 'Dire Collar',
      },
    ],
  },

  {
    id: 'wondrous-dire-collar-greater',
    name: 'Dire Collar, Greater',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 9,
    slot: 'neck',

    price: 14000,
    weight: 2,

    description:
      'This leather collar adjusts to fit animals of various sizes. Once per day as a command ' +
      'action, the person who fastened the collar can affect an animal wearing it (or a different ' +
      'animal within 30 feet) with the animal growth spell for 1 minute.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['animal growth'],
      cost: 7000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 12,
    },

    activationCategory: 'command_word',
    activationAction: 'standard',

    effects: [
      {
        type: 'special',
        target: 'special.dire_collar_greater_animal_growth',
        value: 0,
        source: 'Dire Collar, Greater',
      },
    ],
  },

  // ---- 217: Dirgesinger's Choir -------------------------------------------------
  {
    id: "wondrous-dirgesingers-choir",
    name: "Dirgesinger's Choir",
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.NECROMANCY }],
    casterLevel: 13,
    slot: 'none',

    price: 34000,
    weight: 3,

    description:
      'This macabre harp-like instrument is constructed from a corpse, featuring a bone frame, ' +
      'skin stretched around the soundbox for percussion, and strings of twisted hair. When played, ' +
      'it summons the bound soul of the person whose corpse was used to craft it. The spirit appears ' +
      'as a translucent image that cannot attack or be attacked. It enhances performance with a +4 ' +
      'circumstance bonus on Perform checks and adds 1 to the DC of bard abilities like dirge of ' +
      'doom and deadly performance. Within 30 feet of undead, the musician can command the soul to ' +
      'seize them, requiring a DC 20 Will save; failed saves result in the soul controlling the ' +
      'undead for 1d4+1 rounds. Bards can spend bardic performance rounds to extend this duration.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['control undead', 'ghost sound'],
      specialRequirements: ['Creator must be evil'],
      cost: 17000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 5,
      breakDC: 15,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'bonus',
        bonusType: 'circumstance',
        target: 'skill.perform',
        value: 4,
        source: "Dirgesinger's Choir",
      },
      {
        type: 'special',
        target: 'special.dirgesingers_choir_soul_control',
        value: 0,
        source: "Dirgesinger's Choir",
      },
    ],
  },

  // ---- 218: Discordant Piccolo --------------------------------------------------
  {
    id: 'wondrous-discordant-piccolo',
    name: 'Discordant Piccolo',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 6,
    slot: 'none',

    price: 16000,
    weight: 1,

    description:
      'This bright silver piccolo produces disjointed notes regardless of the player\'s skill. With ' +
      'a DC 15 Perform (wind instruments) check, one target within 30 feet becomes sickened for 1 ' +
      'round (Will DC 14 negates). With a DC 25 Perform (wind instruments) check, the target ' +
      'becomes nauseated for 1 round (Will DC 16 reduces to sickened). A creature that succeeds on ' +
      'its save is immune to the piccolo\'s effects for 24 hours. This is a mind-affecting effect.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['cacophonous call'],
      cost: 8000,
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
        target: 'special.discordant_piccolo_sickened',
        value: 0,
        source: 'Discordant Piccolo',
      },
    ],
  },

  // ---- 219: Discretion Charm ----------------------------------------------------
  {
    id: 'wondrous-discretion-charm',
    name: 'Discretion Charm',
    category: 'wondrous',
    source: 'Pathfinder Player Companion: Spymaster\'s Handbook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ILLUSION }],
    casterLevel: 10,
    slot: 'none',

    price: 3500,
    weight: 0,

    description:
      'This magical piece of jewelry (a cuff link, earring, or similar item) is activated as a ' +
      'standard action by pressing its face. Once activated, it remains functional for up to 5 ' +
      'minutes. The wearer can then drop it as a free action to turn invisible (as per the vanish ' +
      'spell) while simultaneously creating an illusory duplicate of herself in her square (as per ' +
      'programmed image). The duplicate repeats recorded activities and can respond to stimuli with ' +
      'limited interaction such as turning to face speakers and responding with nods and smiles. ' +
      'If dropped within 1 minute of activation, observers gain a +5 bonus on Will saves to ' +
      'disbelieve the illusion. The duplicate lasts 10 minutes while the invisibility effect lasts ' +
      'only 5 rounds. After use, the charm becomes non-magical costume jewelry.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['programmed image', 'vanish'],
      cost: 1750,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'use_activated',
    activationAction: 'standard',

    charges: { maximum: 1 },

    effects: [
      {
        type: 'special',
        target: 'special.discretion_charm_vanish_duplicate',
        value: 0,
        source: 'Discretion Charm',
      },
    ],
  },

  // ---- 220: Displacing Stone ----------------------------------------------------
  {
    id: 'wondrous-displacing-stone',
    name: 'Displacing Stone',
    category: 'wondrous',
    source: 'Pathfinder Player Companion: Kobolds of Golarion',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 11,
    slot: 'none',

    price: 430,
    weight: 0,

    description:
      'This single-use pebble is activated with a standard action, releasing a burst of reverse ' +
      'gravity that clears a 5-foot-diameter sphere of any loose stone or earth and holds the ' +
      'displaced material in place for 1 minute before allowing collapse if unsupported. The stone ' +
      'does not harm living creatures and is consumed upon use. Activation does not provoke attacks ' +
      'of opportunity.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['move earth'],
      cost: 215,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'use_activated',
    activationAction: 'standard',

    charges: { maximum: 1 },

    effects: [
      {
        type: 'special',
        target: 'special.displacing_stone_clear_debris',
        value: 0,
        source: 'Displacing Stone',
      },
    ],
  },

  // ---- 221: Doll, Anatomy -------------------------------------------------------
  {
    id: 'wondrous-doll-anatomy',
    name: 'Doll, Anatomy',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.NECROMANCY }],
    casterLevel: 5,
    slot: 'none',

    price: 1000,
    weight: 1,

    description:
      'This rag doll depicts vital organs. The bearer applies a drop of blood from a living ' +
      'creature as a standard action to establish a sympathetic link. If the target has spell ' +
      'resistance, the doll must overcome it. As a standard action, the bearer twists or stabs ' +
      'the doll, causing the linked target to become sickened for 1 round and take 1 point of ' +
      'negative energy damage plus additional damage equal to each die of the bearer\'s sneak ' +
      'attack (if applicable). The target may attempt a DC 14 Will save to break the link each ' +
      'time the doll is used against it. The doll requires line of effect but not line of sight ' +
      'to the target. Once linked to a creature, it cannot link to another until the current ' +
      'link is broken.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['bestow curse', 'bleed'],
      cost: 500,
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
        target: 'special.doll_anatomy_sympathetic_link',
        value: 0,
        source: 'Doll, Anatomy',
      },
    ],
  },

  // ---- 222: Doll, Hexing --------------------------------------------------------
  {
    id: 'wondrous-doll-hexing',
    name: 'Doll, Hexing',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 5,
    slot: 'none',

    price: 2500,
    weight: 1,

    description:
      'This doll is made out of cheap rags and embroidery thread, stuffed with straw or sawdust. ' +
      'Any creature holding or carrying this doll takes a -4 penalty on saving throws against ' +
      'witch hexes. When a witch stuffs the doll with hair from a specific creature, she instead ' +
      'gains a +2 bonus to the DC of her hexes against that target. The witch does not suffer ' +
      'the -4 penalty when using the doll this way.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['bestow curse'],
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
        type: 'penalty',
        bonusType: 'untyped',
        target: 'save.all',
        value: -4,
        source: 'Doll, Hexing',
        condition: {
          type: 'custom',
          params: { descriptor: 'holder_vs_witch_hexes' },
          description: 'holder only, against witch hexes',
        },
      },
      {
        type: 'special',
        target: 'special.doll_hexing_witch_dc_bonus',
        value: 0,
        source: 'Doll, Hexing',
      },
    ],
  },

  // ---- 223: Doll, Witching ------------------------------------------------------
  {
    id: 'wondrous-doll-witching',
    name: 'Doll, Witching',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ABJURATION }],
    casterLevel: 5,
    slot: 'none',

    price: 30000,
    weight: 1,

    description:
      'The owner binds herself to this rag doll through a ritual involving her own hair and ' +
      'fingernails. She can concentrate to see and hear as if she were the doll for up to 1 hour ' +
      'at a time, becoming blind and deaf to her actual surroundings during this time. The doll ' +
      'gains limited animation, allowing it to turn its head, gesture, and speak quietly. ' +
      'Extraordinary senses (such as darkvision) function through the link, but magical senses ' +
      'do not. Once per day, the owner can cast a single touch-range spell (or a spell with a ' +
      'greater range) from the doll instead of from herself.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['enter image'],
      cost: 15000,
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
        target: 'special.doll_witching_remote_senses',
        value: 0,
        source: 'Doll, Witching',
      },
      {
        type: 'special',
        target: 'special.doll_witching_remote_spell_casting',
        value: 0,
        source: 'Doll, Witching',
      },
    ],
  },

  // ---- 224: Doomharp ------------------------------------------------------------
  {
    id: 'wondrous-doomharp',
    name: 'Doomharp',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.NECROMANCY }],
    casterLevel: 4,
    slot: 'none',

    price: 10000,
    weight: 5,

    description:
      'This masterwork harp is crafted from bone and sun-dried sinew. Any owner with the bardic ' +
      'performance class feature can use it to perform a dirge of doom regardless of their level. ' +
      'Bards who already possess dirge of doom can use the harp to expand that ability\'s ' +
      'effective radius to 60 feet.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['cause fear'],
      cost: 5000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 5,
      breakDC: 15,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.doomharp_dirge_of_doom',
        value: 0,
        source: 'Doomharp',
      },
    ],
  },

  // ---- 225: Dowsing Syrup -------------------------------------------------------
  {
    id: 'wondrous-dowsing-syrup',
    name: 'Dowsing Syrup',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.DIVINATION }],
    casterLevel: 11,
    slot: 'none',

    price: 1000,
    weight: 1,

    description:
      'This ceramic jar contains a thick, sweet-smelling liquid. When unstoppered as a standard ' +
      'action while concentrating on a specific person or object the user has seen within 30 feet, ' +
      'the syrup flows at 15 feet per round toward the target via the most direct route. The syrup ' +
      'can flow uphill, up stairs, and through openings as narrow as one-sixteenth of an inch, but ' +
      'cannot penetrate other liquids or absorbent surfaces such as sand. The syrup functions only ' +
      'if the target remains on the same plane.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['find the path', 'locate creature', 'locate object'],
      cost: 500,
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
        target: 'special.dowsing_syrup_locate_target',
        value: 0,
        source: 'Dowsing Syrup',
      },
    ],
  },
];
