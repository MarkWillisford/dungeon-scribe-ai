import type { WondrousItemDefinition } from '@/types/magicItems';
import { AuraStrength, MagicSchool } from '@/types/equipment';

export const wondrousItemsAB7: WondrousItemDefinition[] = [
  // ---- 151. Belt, Heavyload --------------------------------------------------------
  {
    id: 'wondrous-belt-heavyload',
    name: 'Belt, Heavyload',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 1,
    slot: 'belt',

    price: 2000,
    weight: 3,

    description:
      'A wide leather belt secured with two strands of oxen skin threaded through holes at each end. ' +
      'The wearer gains the benefits of a permanent ant haul spell effect, tripling their carrying ' +
      'capacity as though they were one size category larger.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['ant haul'],
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
        type: 'special',
        target: 'special.carrying_capacity',
        value: 0,
        source: 'Belt, Heavyload',
      },
    ],
  },

  // ---- 152. Belt, Merform ----------------------------------------------------------
  {
    id: 'wondrous-belt-merform',
    name: 'Belt, Merform',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 3,
    slot: 'belt',

    price: 32000,
    weight: 2,

    description:
      "This belt, decorated with fish scales, grants the wearer a once-per-day transformation into a merfolk form. " +
      "When activated, the wearer can breathe water and transforms her lower body into a merfolk fishtail, gaining a " +
      "+2 natural armor bonus and a swim speed of 30 feet, but reducing her land speed to 5 feet. " +
      "This transformation lasts up to 12 hours and can be dismissed as a free action.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['alter self', 'water breathing'],
      cost: 16000,
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
        target: 'special.merform_transformation',
        value: 0,
        source: 'Belt, Merform',
      },
    ],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'alter_self',
            spellName: 'Alter Self (merfolk form)',
            casterLevel: 3,
            usesPerDay: 1,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // ---- 153. Belt, Meridian ---------------------------------------------------------
  {
    id: 'wondrous-belt-meridian',
    name: 'Belt, Meridian',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 9,
    slot: 'belt',

    price: 1000,
    weight: 1,

    description:
      'This narrow cloth belt features a silver buckle shaped like four rings. It enables the wearer to don ' +
      'magic rings on each foot alongside rings on each hand, though only two rings remain active simultaneously. ' +
      'As a swift action each round, the wearer can switch which two of the four worn rings are active, ' +
      'allowing flexible use of up to four rings while only powering two at once.',

    construction: {
      feats: ['Craft Wondrous Item', 'Polymorph'],
      spells: [],
      cost: 500,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'use_activated',
    activationAction: 'swift',

    effects: [
      {
        type: 'special',
        target: 'special.additional_ring_slots',
        value: 2,
        source: 'Belt, Meridian',
      },
    ],
  },

  // ---- 154. Belt, Minotaur ---------------------------------------------------------
  {
    id: 'wondrous-belt-minotaur',
    name: 'Belt, Minotaur',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 4,
    slot: 'belt',

    price: 11000,
    weight: 1,

    description:
      "This belt, tooled with bull horns and hoofprints, provides a +2 enhancement bonus to Strength. " +
      "Additionally, the wearer may disregard difficult terrain when executing a charge, overrun, " +
      "bull rush, or trample action.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["bull's strength", 'feather step'],
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
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'ability.str',
        value: 2,
        source: 'Belt, Minotaur',
      },
      {
        type: 'special',
        target: 'special.ignore_difficult_terrain_charge',
        value: 0,
        source: 'Belt, Minotaur',
      },
    ],
  },

  // ---- 155. Belt, Monkey / Belt, Monkey (Greater) ----------------------------------
  {
    id: 'wondrous-belt-monkey',
    name: 'Belt, Monkey',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 8,
    slot: 'belt',

    price: 9400,
    weight: 1,

    description:
      "This furry brown belt resembles a monkey's tail. It provides a +2 enhancement bonus to Dexterity " +
      "(functions as a temporary ability increase for the first 24 hours). The wearer does not lose her " +
      "Dexterity bonus to AC while climbing, and does not take a -5 penalty on Climb checks when climbing " +
      "at half speed. As a swift action, the belt animates into a prehensile tail for up to 5 minutes per " +
      "day (non-consecutive). The tail can make unarmed attacks and manipulate objects but cannot wield " +
      "weapons or perform fine motor tasks.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['beast shape I', "cat's grace"],
      cost: 4700,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'use_activated',
    activationAction: 'swift',

    effects: [
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'ability.dex',
        value: 2,
        source: 'Belt, Monkey',
      },
      {
        type: 'special',
        target: 'special.climb_dex_bonus_retained',
        value: 0,
        source: 'Belt, Monkey',
      },
      {
        type: 'special',
        target: 'special.prehensile_tail',
        value: 0,
        source: 'Belt, Monkey',
      },
    ],
  },

  {
    id: 'wondrous-belt-monkey-greater',
    name: 'Belt, Monkey (Greater)',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 8,
    slot: 'belt',

    price: 18000,
    weight: 1,

    description:
      "This greater version of the monkey belt functions as the standard belt but grants +2 enhancement " +
      "bonuses to both Strength and Dexterity (temporary for first 24 hours). When the belt animates into " +
      "a prehensile tail, the wearer also gains a +5 circumstance bonus on Climb checks.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['beast shape I', "bull's strength", "cat's grace"],
      cost: 9000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'use_activated',
    activationAction: 'swift',

    effects: [
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'ability.str',
        value: 2,
        source: 'Belt, Monkey (Greater)',
      },
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'ability.dex',
        value: 2,
        source: 'Belt, Monkey (Greater)',
      },
      {
        type: 'special',
        target: 'special.climb_dex_bonus_retained',
        value: 0,
        source: 'Belt, Monkey (Greater)',
      },
      {
        type: 'special',
        target: 'special.prehensile_tail',
        value: 0,
        source: 'Belt, Monkey (Greater)',
      },
      {
        type: 'bonus',
        bonusType: 'circumstance',
        target: 'skill.climb',
        value: 5,
        source: 'Belt, Monkey (Greater)',
        condition: {
          type: 'custom',
          params: { state: 'prehensile_tail_active' },
          description: 'while prehensile tail is animated',
        },
      },
    ],
  },

  // ---- 156. Belt, Plague Rat / Belt, Plague Rat (Greater) --------------------------
  {
    id: 'wondrous-belt-plague-rat',
    name: 'Belt, Plague Rat',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 8,
    slot: 'belt',

    price: 5200,
    weight: 1,

    description:
      "This belt, decorated with rat fur and small bones, provides a +2 enhancement bonus to Constitution " +
      "(temporary for first 24 hours). The wearer can use an immediate action three times daily to reroll " +
      "a saving throw against disease or poison, though they must accept the second result.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["bear's endurance", 'neutralize poison', 'remove disease'],
      cost: 2600,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'use_activated',
    activationAction: 'immediate',

    effects: [
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'ability.con',
        value: 2,
        source: 'Belt, Plague Rat',
      },
      {
        type: 'special',
        target: 'special.reroll_disease_poison_save',
        value: 3,
        source: 'Belt, Plague Rat',
      },
    ],
  },

  {
    id: 'wondrous-belt-plague-rat-greater',
    name: 'Belt, Plague Rat (Greater)',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 8,
    slot: 'belt',

    price: 11200,
    weight: 1,

    description:
      "This greater plague rat belt functions identically to the standard belt but grants +2 enhancement " +
      "bonuses to both Dexterity and Constitution (temporary for first 24 hours), along with three daily " +
      "rerolls on saving throws against disease or poison.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["bear's endurance", "cat's grace", 'neutralize poison', 'remove disease'],
      cost: 5600,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'use_activated',
    activationAction: 'immediate',

    effects: [
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'ability.dex',
        value: 2,
        source: 'Belt, Plague Rat (Greater)',
      },
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'ability.con',
        value: 2,
        source: 'Belt, Plague Rat (Greater)',
      },
      {
        type: 'special',
        target: 'special.reroll_disease_poison_save',
        value: 3,
        source: 'Belt, Plague Rat (Greater)',
      },
    ],
  },

  // ---- 157. Belt, Security ---------------------------------------------------------
  {
    id: 'wondrous-belt-security',
    name: 'Belt, Security',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'belt',

    price: 12500,
    weight: 1,

    description:
      "This belt increases the DC of Sleight of Hand checks made against the wearer by 5, and increases " +
      "the DC to locate hidden items or weapons on the wearer by 5. It grants a +5 bonus to CMD against " +
      "steal maneuvers. Once per day, the wearer can touch a single item up to 10 cubic feet and shrink " +
      "it into a tiny cloth duplicate (as the shrink item spell); a move action allows the wearer to draw " +
      "one of these items from the belt's pockets and restore it to normal size. The belt and its contents " +
      "appear non-magical to magical detection.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['magic aura', 'shrink item'],
      cost: 6250,
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
        type: 'bonus',
        bonusType: 'untyped',
        target: 'cmd',
        value: 5,
        source: 'Belt, Security',
        condition: {
          type: 'custom',
          params: { maneuver: 'steal' },
          description: 'against steal combat maneuvers only',
        },
      },
      {
        type: 'special',
        target: 'special.sleight_of_hand_dc_vs_wearer',
        value: 5,
        source: 'Belt, Security',
      },
      {
        type: 'special',
        target: 'special.shrink_item_storage',
        value: 0,
        source: 'Belt, Security',
      },
    ],
  },

  // ---- 158. Belt, Serpent / Belt, Serpent (Greater) --------------------------------
  {
    id: 'wondrous-belt-serpent',
    name: 'Belt, Serpent',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'belt',

    price: 9000,
    weight: 1,

    description:
      "This belt, crafted from snakeskin, provides a +4 bonus on saving throws against poisons and a " +
      "+2 bonus on Escape Artist checks. Once per day, the belt animates into either a venomous or " +
      "constrictor snake that obeys the wearer's spoken commands for up to one hour. The snake reverts " +
      "to belt form if slain or if it travels more than 100 feet from the wearer.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['beast shape I', 'neutralize poison', "summon nature's ally II"],
      cost: 4500,
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
        target: 'save.fortitude',
        value: 4,
        source: 'Belt, Serpent',
        condition: {
          type: 'custom',
          params: { descriptor: 'poison' },
          description: 'against poison only',
        },
      },
      {
        type: 'bonus',
        bonusType: 'untyped',
        target: 'skill.escape_artist',
        value: 2,
        source: 'Belt, Serpent',
      },
      {
        type: 'special',
        target: 'special.animate_snake',
        value: 0,
        source: 'Belt, Serpent',
      },
    ],
  },

  {
    id: 'wondrous-belt-serpent-greater',
    name: 'Belt, Serpent (Greater)',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 8,
    slot: 'belt',

    price: 20000,
    weight: 1,

    description:
      "This greater serpent belt functions as the standard serpent belt but also grants +2 enhancement " +
      "bonuses to both Strength and Dexterity (temporary for first 24 hours). When animated, the snake " +
      "can be given a second command word to apply one simple template: advanced, celestial, entropic, " +
      "fiendish, or resolute. Planar templates alter the snake's alignment accordingly.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['beast shape I', "bull's strength", "cat's grace", 'neutralize poison', "summon nature's ally II"],
      cost: 10000,
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
        bonusType: 'enhancement',
        target: 'ability.str',
        value: 2,
        source: 'Belt, Serpent (Greater)',
      },
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'ability.dex',
        value: 2,
        source: 'Belt, Serpent (Greater)',
      },
      {
        type: 'bonus',
        bonusType: 'untyped',
        target: 'save.fortitude',
        value: 4,
        source: 'Belt, Serpent (Greater)',
        condition: {
          type: 'custom',
          params: { descriptor: 'poison' },
          description: 'against poison only',
        },
      },
      {
        type: 'bonus',
        bonusType: 'untyped',
        target: 'skill.escape_artist',
        value: 2,
        source: 'Belt, Serpent (Greater)',
      },
      {
        type: 'special',
        target: 'special.animate_snake_with_template',
        value: 0,
        source: 'Belt, Serpent (Greater)',
      },
    ],
  },

  // ---- 159. Belt, Shadowform -------------------------------------------------------
  {
    id: 'wondrous-belt-shadowform',
    name: 'Belt, Shadowform',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 17,
    slot: 'belt',

    price: 110000,
    weight: 0,

    description:
      "This dark belt provides a +6 enhancement bonus to Dexterity (functions as a temporary ability " +
      "increase for the first 24 hours). As a swift action, the wearer can become incorporeal for up to " +
      "10 rounds per day (rounds need not be consecutive). While incorporeal, the wearer loses any " +
      "deflection bonus from Charisma but gains deflection bonuses from natural armor bonuses instead.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["cat's grace", 'etherealness'],
      cost: 55000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'use_activated',
    activationAction: 'swift',

    effects: [
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'ability.dex',
        value: 6,
        source: 'Belt, Shadowform',
      },
      {
        type: 'special',
        target: 'special.incorporeal_form',
        value: 10,
        source: 'Belt, Shadowform',
      },
    ],
  },

  // ---- 160. Belt, Tightfit ---------------------------------------------------------
  {
    id: 'wondrous-belt-tightfit',
    name: 'Belt, Tightfit',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 3,
    slot: 'belt',

    price: 4000,
    weight: 1,

    description:
      "This brown leather belt grants the wearer two abilities. As a free action, the wearer can compress " +
      "herself to fit through tight spaces as though affected by a squeeze spell for up to 10 rounds per " +
      "day; while using this ability, she gains a +5 circumstance bonus on Escape Artist checks. Once per " +
      "day as a move action, the wearer can reduce her size by one step as the reduce person spell for 1 round.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['grease', 'reduce person', 'squeeze'],
      cost: 2000,
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
        type: 'bonus',
        bonusType: 'circumstance',
        target: 'skill.escape_artist',
        value: 5,
        source: 'Belt, Tightfit',
        condition: {
          type: 'custom',
          params: { state: 'squeeze_active' },
          description: 'while squeeze ability is active',
        },
      },
      {
        type: 'special',
        target: 'special.squeeze_through_spaces',
        value: 10,
        source: 'Belt, Tightfit',
      },
      {
        type: 'special',
        target: 'special.reduce_person_once_per_day',
        value: 0,
        source: 'Belt, Tightfit',
      },
    ],
  },

  // ---- 161. Bestial Rags -----------------------------------------------------------
  {
    id: 'wondrous-bestial-rags',
    name: 'Bestial Rags',
    category: 'wondrous',
    source: 'Ultimate Wilderness',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 10,
    slot: 'body',

    price: 8000,
    weight: 2,

    description:
      "These worn garments serve shifters by extending their transformation capabilities. The item " +
      "provides 5 additional minutes per day for shifting into minor aspect forms. Each set of bestial " +
      "rags corresponds to a specific aspect, typically crafted from that creature's hide and decorated " +
      "with pictographic emblems. The rags also allow shifters to access that aspect's minor and major " +
      "forms appropriate to their character level; if the shifter already possesses the ability for that " +
      "form, the major form functions as if she were 2 levels higher.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['beast shape II'],
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
        target: 'special.shifter_aspect_minutes',
        value: 5,
        source: 'Bestial Rags',
      },
      {
        type: 'special',
        target: 'special.shifter_aspect_forms',
        value: 0,
        source: 'Bestial Rags',
      },
    ],
  },

  // ---- 162. Bilgewater Coat --------------------------------------------------------
  // Note: Listed under wondrous items on d20pfsrd; it is a +1 putrid padded armor with a
  // wondrous item trigger effect. Slot set to 'body' as it is a worn coat/garment.
  {
    id: 'wondrous-bilgewater-coat',
    name: 'Bilgewater Coat',
    category: 'wondrous',
    source: "Merchant's Manifest",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.CONJURATION }],
    casterLevel: 5,
    slot: 'body',

    price: 11655,
    weight: 10,

    description:
      "This +1 putrid padded armor features colorful silks, complete with a ruffled collar accented with " +
      "a brass button. When an adjacent creature scores a critical hit against the wearer, slimy bilgewater " +
      "gushes from inside the coat onto the ground, landing in the attacking creature's space. The affected " +
      "creature must succeed at a DC 13 Reflex save or fall prone. The bilgewater then mimics a grease " +
      "spell in that square for 5 minutes, requiring Acrobatics checks for any creatures moving through it.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['grease', 'stinking cloud'],
      cost: 6405,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 5,
      breakDC: 13,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'ac.armor',
        value: 1,
        source: 'Bilgewater Coat',
      },
      {
        type: 'special',
        target: 'special.bilgewater_critical_hit_response',
        value: 0,
        source: 'Bilgewater Coat',
      },
    ],
  },

  // ---- 163. Bivouac Banners --------------------------------------------------------
  {
    id: 'wondrous-bivouac-banners',
    name: 'Bivouac Banners',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [
      { strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION },
      { strength: AuraStrength.FAINT, school: MagicSchool.CONJURATION },
    ],
    casterLevel: 5,
    slot: 'none',

    price: 3200,
    weight: 5,

    description:
      "This set of three banners creates a triangular warded area when planted in the ground with no two " +
      "banners more than 40 feet apart. Once activated, an illusory mastiff manifests and walks a " +
      "triangular circuit from banner to banner at 30 feet per round for up to 8 hours. When any Tiny or " +
      "larger creature crosses the boundary, the mastiff barks loudly and the banners summon a riding dog " +
      "(as per summon nature's ally I). The summoned dog appears adjacent to where the ward was broken and " +
      "attacks the nearest intruder. Creatures already inside the warded area when the third banner is " +
      "planted are exempt. The banners require 12 hours before being replanted and reactivated. " +
      "Weight listed is per banner.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['alarm', 'minor image', "summon nature's ally I"],
      cost: 1600,
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
        target: 'special.ward_perimeter_alarm',
        value: 0,
        source: 'Bivouac Banners',
      },
    ],
  },

  // ---- 164. Black Heart ------------------------------------------------------------
  {
    id: 'wondrous-black-heart',
    name: 'Black Heart',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.NECROMANCY }],
    casterLevel: 5,
    slot: 'none',

    price: 18800,
    weight: 1,

    description:
      "A withered, black heart disturbingly cool to the touch. It must be attuned to an evil deity through " +
      "a vile ritual lasting at least 1 hour, requiring a living sentient creature as a sacrifice. Once " +
      "attuned, it functions as an unholy symbol of that deity and cannot be re-attuned for at least 1 week " +
      "after last use. By brandishing as a standard action, the wielder detects good creatures within 60 feet " +
      "once daily for up to 10 minutes with concentration. While concentrating, the wielder can squeeze the " +
      "heart as a standard action against a living creature within 60 feet, dealing 3d8+5 points of damage " +
      "and causing the target to become sickened for 1d4 rounds (DC 14 Fortitude halves and negates sickened). " +
      "Evil creatures are immune to this negative energy effect.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['detect good', 'inflict serious wounds'],
      specialRequirements: ['Creator must be an evil worshiper of an evil deity'],
      cost: 9400,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 2,
      breakDC: 10,
    },

    activationCategory: 'use_activated',
    activationAction: 'standard',

    effects: [
      {
        type: 'special',
        target: 'special.detect_good_aura',
        value: 0,
        source: 'Black Heart',
      },
      {
        type: 'special',
        target: 'special.unholy_symbol',
        value: 0,
        source: 'Black Heart',
      },
      {
        type: 'damage',
        bonusType: 'untyped',
        target: 'special.black_heart_squeeze',
        value: 0,
        source: 'Black Heart',
      },
    ],
  },

  // ---- 165. Black Soul Shard -------------------------------------------------------
  {
    id: 'wondrous-black-soul-shard',
    name: 'Black Soul Shard',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.NECROMANCY }],
    casterLevel: 7,
    slot: 'none',

    price: 12000,
    weight: 0,

    description:
      "This dark gemstone attunes to its bearer's soul over one week of continuous proximity. When the " +
      "attuned bearer suffers one or more negative levels, the black soul shard absorbs one of these " +
      "negative levels into itself, negating the effect. If used as an additional focus component during " +
      "a resurrection spell cast within 24 hours of death, it reduces the negative level cost by one " +
      "(minimum 1 level). Once the gem absorbs a negative level, another week of attunement is required " +
      "before it can function again. Only one shard may attune to a creature simultaneously.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['death ward', 'restoration'],
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
        target: 'special.absorb_negative_level',
        value: 1,
        source: 'Black Soul Shard',
      },
    ],
  },

  // ---- 166. Blasphemous Chalice ----------------------------------------------------
  {
    id: 'wondrous-blasphemous-chalice',
    name: 'Blasphemous Chalice',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 7,
    slot: 'none',

    price: 12000,
    weight: 3,

    description:
      "This enchanted box contains living tissue that bleeds greenish-black liquid. A character must bite " +
      "the tissue and consume the blood as a full-round action to activate its power. For one hour after " +
      "consumption, whenever the user suffers a critical hit or sneak attack, there is a 50% chance the " +
      "attack is negated and damage is rolled normally instead of applying the critical multiplier or " +
      "sneak attack bonus. The item produces enough blood for one use per day.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['shield of fortification'],
      cost: 6000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 3,
      breakDC: 15,
    },

    activationCategory: 'use_activated',
    activationAction: 'standard',

    effects: [
      {
        type: 'special',
        target: 'special.fortification_50_percent',
        value: 50,
        source: 'Blasphemous Chalice',
      },
    ],
  },

  // ---- 167. Blight Kickers ---------------------------------------------------------
  {
    id: 'wondrous-blight-kickers',
    name: 'Blight Kickers',
    category: 'wondrous',
    source: 'Potions & Poisons',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 7,
    slot: 'feet',

    price: 13500,
    weight: 1,

    description:
      "These leather combat boots feature brown or black laces and multiple rows of pouches positioned " +
      "near the top. The boots can conceal up to 5 doses of poison within their attached pouches. The " +
      "wearer gains a cumulative +1 competence bonus to Sleight of Hand and Stealth checks for each " +
      "poison dose stored (maximum +5). Once daily, the wearer can activate a command word to hasten " +
      "the onset of one stored poison, causing its effects to begin immediately.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['accelerate poison', "cat's grace"],
      cost: 6750,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 2,
      breakDC: 10,
    },

    activationCategory: 'command_word',
    activationAction: 'swift',

    effects: [
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.sleight_of_hand',
        value: 5,
        source: 'Blight Kickers',
        condition: {
          type: 'custom',
          params: { maxBonus: 5 },
          description: '+1 per poison dose stored (max +5)',
        },
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.stealth',
        value: 5,
        source: 'Blight Kickers',
        condition: {
          type: 'custom',
          params: { maxBonus: 5 },
          description: '+1 per poison dose stored (max +5)',
        },
      },
      {
        type: 'special',
        target: 'special.accelerate_poison_onset',
        value: 0,
        source: 'Blight Kickers',
      },
    ],
  },

  // ---- 168. Blindfold, Swordmaster's -----------------------------------------------
  {
    id: "wondrous-blindfold-swordmasters",
    name: "Swordmaster's Blindfold",
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 9,
    slot: 'eyes',

    price: 80000,
    weight: 0,

    description:
      "This magical black silk band causes the wearer to become blind but grants exceptional sensory " +
      "abilities in return. The wearer gains blindsight within the reach of her melee weapon, or 5 feet " +
      "if not wielding a melee weapon. Additionally, the wearer gains the benefits of a constant locate " +
      "weakness effect, though this applies only during melee attacks.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['blindness', 'locate weakness'],
      cost: 40000,
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
        bonusType: 'untyped',
        target: 'special.blindsight',
        value: 0,
        source: "Swordmaster's Blindfold",
      },
      {
        type: 'special',
        target: 'special.locate_weakness_melee',
        value: 0,
        source: "Swordmaster's Blindfold",
      },
      {
        type: 'special',
        target: 'special.wearer_blinded',
        value: 0,
        source: "Swordmaster's Blindfold",
      },
    ],
  },

  // ---- 169. Bliss Salve ------------------------------------------------------------
  {
    id: 'wondrous-bliss-salve',
    name: 'Bliss Salve',
    category: 'wondrous',
    source: 'Inner Sea Intrigue',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 3,
    slot: 'none',

    price: 4800,
    weight: 1,

    description:
      "A minty-scented unguent commonly used by elves to render unsuspecting victims more susceptible " +
      "to magical manipulation. Application takes a standard action and induces mild euphoria lasting " +
      "10 minutes (Will DC 14 negates). It can be applied to unwilling creatures via a melee touch attack. " +
      "Affected targets must succeed at concentration checks (DC 15 + spell level) when casting spells, " +
      "and must roll twice on saving throws against divinations, enchantments, and illusions, taking the " +
      "lower result. This is a mind-affecting poison effect.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['touch of idiocy'],
      cost: 250,
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
        target: 'special.bliss_salve_concentration_penalty',
        value: 0,
        source: 'Bliss Salve',
      },
      {
        type: 'special',
        target: 'special.bliss_salve_save_disadvantage',
        value: 0,
        source: 'Bliss Salve',
      },
    ],
  },

  // ---- 170. Blood Reservoir of Physical Prowess ------------------------------------
  {
    id: 'wondrous-blood-reservoir-of-physical-prowess',
    name: 'Blood Reservoir of Physical Prowess',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.NECROMANCY }],
    casterLevel: 3,
    slot: 'none',

    price: 2000,
    weight: 0,

    description:
      "This blown-glass vial attaches to a weapon handle. When filled with the user's blood (taking one " +
      "full minute and dealing 4 points of Constitution damage), it gains 4 charges. The magical blood " +
      "within doesn't clot or decay. Using the first command word allows the bearer to spend charges to " +
      "cure physical ability score damage (1 point per charge). Using the second command word drains all " +
      "charges to grant an inherent bonus to one physical ability score equal to twice the charges spent, " +
      "lasting until the end of the bearer's next turn. The item must be held or attached to a wielded " +
      "weapon to function. Carrying more than one charged reservoir causes extras to spontaneously drain " +
      "in 1d10 rounds.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['death knell'],
      cost: 1000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'command_word',
    activationAction: 'standard',

    charges: { maximum: 4, rechargeMethod: 'Fill with user blood (4 Con damage, full-round action)' },

    effects: [
      {
        type: 'special',
        target: 'special.cure_ability_damage_charges',
        value: 0,
        source: 'Blood Reservoir of Physical Prowess',
      },
      {
        type: 'special',
        target: 'special.inherent_ability_bonus_burst',
        value: 0,
        source: 'Blood Reservoir of Physical Prowess',
      },
    ],
  },

  // ---- 171. Bloodlink --------------------------------------------------------------
  {
    id: 'wondrous-bloodlink',
    name: 'Bloodlink',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [
      { strength: AuraStrength.FAINT, school: MagicSchool.EVOCATION },
      { strength: AuraStrength.FAINT, school: MagicSchool.ILLUSION },
    ],
    casterLevel: 3,
    slot: 'neck',

    price: 4800,
    weight: 0,

    description:
      "This amulet grants the wearer drow-like innate spellcasting and enhanced abilities. The wearer " +
      "can use dancing lights, darkness, and faerie fire each once per day as spell-like abilities. " +
      "The wearer also gains the ability to speak and understand Undercommon, proficiency with the " +
      "hand crossbow, rapier, and short sword, and radiates an aura of chaotic evil for detection spells. " +
      "The item can also serve as a focus for recorporeal incarnation spellcasting.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['bestow weapon proficiency', 'comprehend languages', 'dancing lights', 'darkness', 'faerie fire', 'misdirection'],
      cost: 6075,
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
        target: 'special.undercommon_language',
        value: 0,
        source: 'Bloodlink',
      },
      {
        type: 'special',
        target: 'special.weapon_proficiency_drow',
        value: 0,
        source: 'Bloodlink',
      },
      {
        type: 'special',
        target: 'special.chaotic_evil_aura',
        value: 0,
        source: 'Bloodlink',
      },
    ],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'dancing_lights',
            spellName: 'Dancing Lights',
            casterLevel: 3,
            usesPerDay: 1,
            activationAction: 'standard',
          },
          {
            spellId: 'darkness',
            spellName: 'Darkness',
            casterLevel: 3,
            usesPerDay: 1,
            activationAction: 'standard',
          },
          {
            spellId: 'faerie_fire',
            spellName: 'Faerie Fire',
            casterLevel: 3,
            usesPerDay: 1,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // ---- 172. Bloodstained Gloves ----------------------------------------------------
  {
    id: 'wondrous-bloodstained-gloves',
    name: 'Bloodstained Gloves',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.DIVINATION }],
    casterLevel: 6,
    slot: 'hands',

    price: 8000,
    weight: 5,

    description:
      "These calfskin gloves bear persistent bloodstains that cannot be cleaned away. When soaked in " +
      "fresh blood from a recently killed creature, the wearer gains a +1 insight bonus on attack rolls " +
      "and damage rolls against creatures of the same type for 1 hour. For slayers, the damage bonus " +
      "equals their studied target bonus instead of +1. The gloves cannot be activated by bloodless " +
      "creatures such as skeletons, golems, or clockwork constructs.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['instant enemy'],
      cost: 4000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 2,
      breakDC: 10,
    },

    activationCategory: 'use_activated',
    activationAction: 'standard',

    effects: [
      {
        type: 'bonus',
        bonusType: 'insight',
        target: 'attack.all',
        value: 1,
        source: 'Bloodstained Gloves',
        condition: {
          type: 'target_type',
          params: { creatureType: 'same_type_as_blood_source' },
          description: 'against creatures of the same type as the blood used to activate the gloves',
        },
      },
      {
        type: 'bonus',
        bonusType: 'insight',
        target: 'damage.all',
        value: 1,
        source: 'Bloodstained Gloves',
        condition: {
          type: 'target_type',
          params: { creatureType: 'same_type_as_blood_source' },
          description: 'against creatures of the same type as the blood used to activate the gloves',
        },
      },
    ],
  },

  // ---- 173. Blouse of the Boastful -------------------------------------------------
  {
    id: 'wondrous-blouse-of-the-boastful',
    name: 'Blouse of the Boastful',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'chest',

    price: 8000,
    weight: 0,

    description:
      "This purple silk garment features golden embroidered trim and encourages bold conduct. The wearer " +
      "gains a special benefit if she possesses the panache class feature: when she takes damage from a " +
      "successful critical hit, she regains 1 panache point. The item provides no advantage for characters " +
      "without the panache class feature.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['guidance', 'prestidigitation', 'resistance'],
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
        target: 'special.panache_on_critical_hit_taken',
        value: 1,
        source: 'Blouse of the Boastful',
      },
    ],
  },

  // ---- 174. Blouse, Cackling Hag's -------------------------------------------------
  {
    id: "wondrous-blouse-cackling-hags",
    name: "Blouse, Cackling Hag's",
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 3,
    slot: 'chest',

    price: 6000,
    weight: 2,

    description:
      "This garment provides a +2 competence bonus on Intimidate checks. For witch characters, the item " +
      "grants access to the cackle hex ability. Those who already possess this hex gain an additional " +
      "benefit: twice per day she can use her cackle ability as a swift action instead of a move action.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['hideous laughter'],
      specialRequirements: ['Creator must possess 5 ranks in Intimidate'],
      cost: 3000,
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
        source: "Blouse, Cackling Hag's",
      },
      {
        type: 'special',
        target: 'special.cackle_hex_access',
        value: 0,
        source: "Blouse, Cackling Hag's",
      },
    ],
  },

  // ---- 175. Boat, Folding ----------------------------------------------------------
  {
    id: 'wondrous-boat-folding',
    name: 'Boat, Folding',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 6,
    slot: 'none',

    price: 7200,
    weight: 4,

    description:
      "This magical item appears as a plain wooden box roughly 12 inches by 6 inches by 6 inches. " +
      "Speaking the first command word causes it to unfold into a 10-foot-long, 4-foot-wide, 2-foot-deep " +
      "rowboat with a pair of oars, anchor, mast, and lateen sail; this form comfortably carries up to " +
      "4 people and their gear. Speaking the second command word causes the box to unfold into a " +
      "24-foot-long, 8-foot-wide, 6-foot-deep ship with a deck, rowing seats, five sets of oars, a " +
      "rudder, anchor, cabin, and a square sail; this vessel can carry up to 15 people and their gear. " +
      "Speaking the third command word causes the vessel to fold back into a box (only works when " +
      "unoccupied). Items stored in the boat remain aboard after transformation.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['fabricate'],
      specialRequirements: ['Creator must possess 2 ranks in Craft (ships)'],
      cost: 3600,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 10,
      breakDC: 18,
    },

    activationCategory: 'command_word',
    activationAction: 'standard',

    effects: [
      {
        type: 'special',
        target: 'special.folding_boat_rowboat_form',
        value: 0,
        source: 'Boat, Folding',
      },
      {
        type: 'special',
        target: 'special.folding_boat_ship_form',
        value: 0,
        source: 'Boat, Folding',
      },
    ],
  },
];
