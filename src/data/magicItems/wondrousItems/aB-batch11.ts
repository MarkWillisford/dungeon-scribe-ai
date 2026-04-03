import type { WondrousItemDefinition } from '@/types/magicItems';
import { AuraStrength, MagicSchool } from '@/types/equipment';

export const wondrousItemsAB11: WondrousItemDefinition[] = [
  // ---- 251: Bottled Sunlight -----------------------------------------------
  {
    id: 'wondrous-bottled-sunlight',
    name: 'Bottled Sunlight',
    category: 'wondrous',
    source: 'Ultimate Wilderness',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.EVOCATION }],
    casterLevel: 1,
    slot: 'none',

    price: 200,
    weight: 0,

    description:
      'An opaque orb containing distilled sunlight essence. Once per day the wearer can release a vial that ' +
      'produces bright light in one square for 1 hour — light that counts as natural sunlight and provides ' +
      'enough energy to satisfy a plant creature\'s daily nourishment. Undead creatures with a sunlight ' +
      'weakness may attempt a DC 11 Will save each round to extinguish the vial, but the light does not ' +
      'actually deal damage. Shattering the vial extinguishes it (hardness 2, 5 hp). After 50 vials have ' +
      'been released the orb loses its magic.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['daylight'],
      cost: 100,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'command_word',
    activationAction: 'standard',

    charges: { maximum: 50, rechargeMethod: 'does not recharge; expended when 50 vials released' },

    effects: [
      {
        type: 'special',
        target: 'special.bottled_sunlight_vial',
        value: 0,
        source: 'Bottled Sunlight',
      },
    ],
  },

  // ---- 252: Bottled Yeti Fur ------------------------------------------------
  {
    id: 'wondrous-bottled-yeti-fur',
    name: 'Bottled Yeti Fur',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION }],
    casterLevel: 3,
    slot: 'none',

    price: 800,
    weight: 0,

    description:
      'A compact flask containing coarse white fur that spreads across the user\'s body when opened. The ' +
      'coating persists for 24 hours or until removed by soaking in alcohol. The flask is single-use.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['barkskin', 'resist energy'],
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
        type: 'resistance',
        bonusType: 'untyped',
        target: 'energy_resistance.cold',
        value: 5,
        source: 'Bottled Yeti Fur',
      },
      {
        type: 'bonus',
        bonusType: 'natural',
        target: 'ac.natural',
        value: 2,
        source: 'Bottled Yeti Fur',
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.stealth',
        value: 4,
        source: 'Bottled Yeti Fur',
        condition: {
          type: 'custom',
          params: { environment: 'ice_and_snow' },
          description: 'in ice and snow environments only',
        },
      },
    ],
  },

  // ---- 253: Boundary Chalk --------------------------------------------------
  {
    id: 'wondrous-boundary-chalk',
    name: 'Boundary Chalk',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION }],
    casterLevel: 10,
    slot: 'none',

    price: 10000,
    weight: 0,

    description:
      'A stick of white chalk covered with silvery runes. Drawing a 5-foot line on a surface (a standard ' +
      'action that provokes attacks of opportunity) creates a wall of force extending 10 feet perpendicular ' +
      'to that surface, lasting 10 minutes. The bearer can dismiss any wall section as a swift action while ' +
      'touching the chalk. One stick can draw up to 100 feet total before being depleted.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['wall of force'],
      cost: 5000,
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
        target: 'special.boundary_chalk_wall_of_force',
        value: 0,
        source: 'Boundary Chalk',
      },
    ],
  },

  // ---- 254: Bounteous Bath Suffusion ----------------------------------------
  {
    id: 'wondrous-bounteous-bath-suffusion',
    name: 'Bounteous Bath Suffusion',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.CONJURATION }],
    casterLevel: 12,
    slot: 'none',

    price: 1200,
    weight: 0,

    description:
      'When added to a bath, this suffusion fills it with enough water for a single Medium or Large creature. ' +
      'A creature that bathes for 20 minutes receives the effects of neutralize poison and remove disease, ' +
      'and gains a +2 circumstance bonus on saving throws against diseases and poisons for the next 24 hours.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['neutralize poison', 'remove disease'],
      cost: 600,
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
        target: 'special.neutralize_poison',
        value: 0,
        source: 'Bounteous Bath Suffusion',
      },
      {
        type: 'special',
        target: 'special.remove_disease',
        value: 0,
        source: 'Bounteous Bath Suffusion',
      },
      {
        type: 'bonus',
        bonusType: 'circumstance',
        target: 'save.all',
        value: 2,
        source: 'Bounteous Bath Suffusion',
        condition: {
          type: 'custom',
          params: { descriptor: 'disease_or_poison' },
          description: 'against diseases and poisons only, for 24 hours after bathing',
        },
      },
    ],
  },

  // ---- 255: Bowl of Conjuring Water Elementals --------------------------------
  {
    id: 'wondrous-bowl-conjuring-water-elementals',
    name: 'Bowl of Conjuring Water Elementals',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 11,
    slot: 'none',

    price: 90000,
    weight: 3,

    description:
      'This silver bowl, approximately 1 foot in diameter and half that deep, is etched with a rippled ' +
      'pattern. It must be filled with fresh or salt water to function. As a full-round action, the bearer ' +
      'may summon a water elemental: salt water summons a Huge water elemental (as summon monster VI) and ' +
      'fresh water summons a Large water elemental (as summon monster V). No additional elementals may be ' +
      'conjured until the previous one is dismissed, killed, or its duration expires.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['summon monster V', 'summon monster VI'],
      cost: 45000,
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
        type: 'special',
        target: 'special.summon_water_elemental',
        value: 0,
        source: 'Bowl of Conjuring Water Elementals',
      },
    ],
  },

  // ---- 256: Bracelet of Bargaining ------------------------------------------
  {
    id: 'wondrous-bracelet-of-bargaining',
    name: 'Bracelet of Bargaining',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.DIVINATION }],
    casterLevel: 7,
    slot: 'wrists',

    price: 14500,
    weight: 0,

    description:
      'This heavy gold band can be worn openly or concealed beneath a sleeve. It provides a +5 competence ' +
      'bonus on Bluff, Diplomacy, and Sense Motive checks. When the wearer shakes hands to seal a deal or ' +
      'promise, they can sense whether deceit is involved (Will save DC 16 negates), though the exact ' +
      'nature of the deception remains unknown.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['detect lie', 'detect thoughts'],
      cost: 7250,
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
        bonusType: 'competence',
        target: 'skill.bluff',
        value: 5,
        source: 'Bracelet of Bargaining',
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.diplomacy',
        value: 5,
        source: 'Bracelet of Bargaining',
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.sense_motive',
        value: 5,
        source: 'Bracelet of Bargaining',
      },
      {
        type: 'special',
        target: 'special.bracelet_of_bargaining_detect_deception',
        value: 0,
        source: 'Bracelet of Bargaining',
      },
    ],
  },

  // ---- 257: Bracelet of Friends ---------------------------------------------
  {
    id: 'wondrous-bracelet-of-friends',
    name: 'Bracelet of Friends',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.CONJURATION }],
    casterLevel: 15,
    slot: 'wrists',

    price: 19000,
    weight: 0,

    description:
      'This silver charm bracelet contains four charms upon creation. The wearer designates one known ' +
      'person per charm (standard action, permanent until changed). Grasping a charm and speaking the ' +
      "designated person's name (standard action) teleports that individual and their gear to the " +
      "wearer's location, provided both are on the same plane and the called person is willing. Each " +
      'charm vanishes after use. Separated charms are worthless; a bracelet with fewer than four charms ' +
      'is worth 25% less per missing charm.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['refuge'],
      cost: 9500,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 3,
      breakDC: 15,
    },

    activationCategory: 'command_word',
    activationAction: 'standard',

    charges: { maximum: 4, rechargeMethod: 'does not recharge; each charm is single-use' },

    effects: [
      {
        type: 'special',
        target: 'special.bracelet_of_friends_teleport',
        value: 0,
        source: 'Bracelet of Friends',
      },
    ],
  },

  // ---- 258: Bracelet of Mercy -----------------------------------------------
  {
    id: 'wondrous-bracelet-of-mercy',
    name: 'Bracelet of Mercy',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.CONJURATION }],
    casterLevel: 5,
    slot: 'wrists',

    price: 15000,
    weight: 0,

    description:
      'A metal bracelet adorned with gems that have received priestly blessings. The wearer with the ' +
      'lay on hands class feature gains one additional daily use of that ability and is always treated ' +
      'as possessing the diseased mercy. If the wearer already has the diseased mercy, their effective ' +
      'caster level for removing disease increases by 4.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['remove disease'],
      cost: 7500,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 3,
      breakDC: 15,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'untyped',
        target: 'special.lay_on_hands_uses_per_day',
        value: 1,
        source: 'Bracelet of Mercy',
      },
      {
        type: 'special',
        target: 'special.bracelet_of_mercy_diseased_mercy',
        value: 0,
        source: 'Bracelet of Mercy',
      },
    ],
  },

  // ---- 259: Bracelet of Second Chances --------------------------------------
  {
    id: 'wondrous-bracelet-of-second-chances',
    name: 'Bracelet of Second Chances',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 9,
    slot: 'wrists',

    price: 15750,
    weight: 0,

    description:
      'This wrist-worn bracelet features seven intricately carved coral beads. When the wearer is targeted ' +
      'by a confirmed critical hit or sneak attack, they can use an immediate action to convert that attack ' +
      'into a normal hit before damage is calculated. Each bead shatters when used, and the bracelet crumbles ' +
      'to dust after all seven are expended.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['breath of life'],
      cost: 7875,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 5,
      breakDC: 15,
    },

    activationCategory: 'use_activated',
    activationAction: 'immediate',

    charges: { maximum: 7, rechargeMethod: 'does not recharge; item destroyed when all beads expended' },

    effects: [
      {
        type: 'special',
        target: 'special.bracelet_second_chances_negate_crit',
        value: 0,
        source: 'Bracelet of Second Chances',
      },
    ],
  },

  // ---- 260: Bracelet, Charm -------------------------------------------------
  {
    id: 'wondrous-bracelet-charm',
    name: 'Bracelet, Charm',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.UNIVERSAL }],
    casterLevel: 5,
    slot: 'wrists',

    price: 8000,
    weight: 0,

    description:
      'This wrist ornament features gold charms on linked bands. It includes 1d4+4 non-magical charms ' +
      'plus five magical ones, each usable once before dissolving into vapor. The magical charms are: ' +
      '(1) Arming Sword — transforms into a masterwork longsword and heavy wooden shield for 1 hour; ' +
      '(2) Healthy Apple — restores 2d8 hit points when consumed and grants new saving throws against ' +
      'poison and disease; (3) Loving Heart — activates charm person as a spell-like ability (Will DC 11) ' +
      'usable before the wearer\'s next turn; (4) Lucky Star — grants a +2 luck bonus on ability checks, ' +
      'attack rolls, saving throws, and skill checks within 20 feet for 1 round; ' +
      "(5) Peaceful Dove — functions as calm emotions in a 20-foot radius (Will DC 13); creatures " +
      'affected by rage also suffer a –2 penalty.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['calm emotions', 'charm person', 'cure moderate wounds', 'prayer', 'shadow weapon'],
      cost: 4000,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 3,
      breakDC: 15,
    },

    activationCategory: 'use_activated',

    charges: { maximum: 5, rechargeMethod: 'does not recharge; each magical charm is single-use' },

    effects: [
      {
        type: 'special',
        target: 'special.bracelet_charm_arming_sword',
        value: 0,
        source: 'Bracelet, Charm',
      },
      {
        type: 'special',
        target: 'special.bracelet_charm_healthy_apple',
        value: 0,
        source: 'Bracelet, Charm',
      },
      {
        type: 'special',
        target: 'special.bracelet_charm_loving_heart',
        value: 0,
        source: 'Bracelet, Charm',
      },
      {
        type: 'special',
        target: 'special.bracelet_charm_lucky_star',
        value: 0,
        source: 'Bracelet, Charm',
      },
      {
        type: 'special',
        target: 'special.bracelet_charm_peaceful_dove',
        value: 0,
        source: 'Bracelet, Charm',
      },
    ],
  },

  // ---- 261: Bracelet, Seducer's Bane ----------------------------------------
  {
    id: 'wondrous-bracelet-seducers-bane',
    name: "Bracelet, Seducer's Bane",
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ABJURATION }],
    casterLevel: 6,
    slot: 'wrists',

    price: 9900,
    weight: 0,

    description:
      'A slender silver bracelet featuring interwoven designs of acacia, apocynum, and bilberry flowers, ' +
      'symbolizing concealment, treachery, and falsehood. The bracelet grants a +5 competence bonus on ' +
      'Sense Motive checks and a +5 resistance bonus on Will saves against enchantment effects. When the ' +
      'wearer successfully saves against an enchantment, the caster falsely perceives the spell succeeded. ' +
      'The wearer knows when an enchantment targets them and can identify its source, while a detectable ' +
      'magical aura matching the failed enchantment spell persists for that spell\'s duration. The ' +
      'deception breaks if the wearer attacks the caster or their allies, or acts contrary to the ' +
      "spell's intended effect.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['detect magic', 'magic aura', 'resistance'],
      specialRequirements: ['Creator must have 3 ranks in Sense Motive'],
      cost: 4950,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 3,
      breakDC: 15,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.sense_motive',
        value: 5,
        source: "Bracelet, Seducer's Bane",
      },
      {
        type: 'bonus',
        bonusType: 'resistance',
        target: 'save.will',
        value: 5,
        source: "Bracelet, Seducer's Bane",
        condition: {
          type: 'custom',
          params: { school: 'enchantment' },
          description: 'against enchantment effects only',
        },
      },
      {
        type: 'special',
        target: 'special.bracelet_seducers_bane_false_success',
        value: 0,
        source: "Bracelet, Seducer's Bane",
      },
    ],
  },

  // ---- 262: Bracelet, Silver Smite ------------------------------------------
  {
    id: 'wondrous-bracelet-silver-smite',
    name: 'Bracelet, Silver Smite',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 9,
    slot: 'wrists',

    price: 16000,
    weight: 1,

    description:
      'A heavy silver bracelet engraved with symbols representing purity, fidelity, chastity, and honor ' +
      "that emits soft white light when the owner prays. The wearer's paladin level counts as 4 levels " +
      'higher when determining the damage bonus and DC for her smite evil ability.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['align weapon'],
      specialRequirements: ['Creator must be a paladin'],
      cost: 8000,
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
        bonusType: 'untyped',
        target: 'special.paladin_level_for_smite_evil',
        value: 4,
        source: 'Bracelet, Silver Smite',
      },
    ],
  },

  // ---- 263: Bracelet, Verdant Vine ------------------------------------------
  {
    id: 'wondrous-bracelet-verdant-vine',
    name: 'Bracelet, Verdant Vine',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.CONJURATION }],
    casterLevel: 5,
    slot: 'wrists',

    price: 6000,
    weight: 0,

    description:
      'A vine bracelet adorned with five green berries. Once per day on command, the wearer can pinch a ' +
      'berry off the vine and throw it up to 30 feet away. Thorny vines erupt in a 20-foot radius from ' +
      'the impact point; creatures must succeed at a DC 16 Reflex save or become entangled. Entangled ' +
      'creatures take 1d4 damage at the start of their turn if they fail a new save. A DC 20 Strength ' +
      'check (standard action) allows escape, but failure deals 1d4 damage from constriction.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['entangle', 'plant growth'],
      cost: 3000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 2,
      breakDC: 10,
    },

    activationCategory: 'command_word',
    activationAction: 'standard',

    charges: { maximum: 5, rechargeMethod: 'does not recharge; each berry is single-use' },

    effects: [
      {
        type: 'special',
        target: 'special.bracelet_verdant_vine_entangle',
        value: 0,
        source: 'Bracelet, Verdant Vine',
      },
    ],
  },

  // ---- 264: Bracelets of Stone ----------------------------------------------
  {
    id: 'wondrous-bracelets-of-stone',
    name: 'Bracelets of Stone',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 9,
    slot: 'wrists',

    price: 26760,
    weight: 4,

    description:
      'These adjustable stone armbands enable the wearer to create walls of stone once daily. The bracelets ' +
      'can merge with stone surfaces and magically grant the wearer sufficient strength to support the ' +
      'created wall, allowing construction of bridges or barriers. Once per day the wearer may create a ' +
      'wall of stone up to 2 inches thick and 45 feet long (or 90 feet if reduced to 1 inch thick), ' +
      'with the wearer standing adjacent to a connection point. The wearer becomes flat-footed and ' +
      'immobilized while maintaining the wall. The wearer may end the effect as an immediate action, ' +
      'destroying the wall; the effect also ends if either bracelet is removed or the wall is breached.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['wall of stone'],
      cost: 13380,
    },
    physicalStats: {
      hardness: 8,
      hitPoints: 10,
      breakDC: 20,
    },

    activationCategory: 'command_word',
    activationAction: 'standard',

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'wall_of_stone',
            spellName: 'Wall of Stone',
            casterLevel: 9,
            usesPerDay: 1,
            activationAction: 'standard',
          },
        ],
      },
    ],

    effects: [
      {
        type: 'special',
        target: 'special.bracelets_of_stone_wall',
        value: 0,
        source: 'Bracelets of Stone',
      },
    ],
  },

  // ---- 265: Bracer, Electro-Temporal ----------------------------------------
  {
    id: 'wondrous-bracer-electro-temporal',
    name: 'Bracer, Electro-Temporal',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 17,
    slot: 'wrists',

    price: 32000,
    weight: 1,

    description:
      'A thick golden bracelet covered with runes that periodically crackles with flashes of blue energy. ' +
      'As a swift action, the wearer activates a crackling blue nimbus lasting up to 3 minutes per day ' +
      '(usable in 1-minute increments). While active, each electricity descriptor spell the wearer casts ' +
      'gains one additional effect of the wearer\'s choice: dazzle all targets for 1 round, stagger a ' +
      'single target for 1 round, or grant one target the benefits of haste for 1 round. Targets who ' +
      'avoid the electricity spell\'s effects entirely bypass the bonus effect. If the wearer takes ' +
      '50 or more points of electricity damage from a single source, time stop triggers and the bracer ' +
      'is disabled for one month.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['haste', 'slow', 'time stop'],
      cost: 16000,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 5,
      breakDC: 20,
    },

    activationCategory: 'command_word',
    activationAction: 'swift',

    effects: [
      {
        type: 'special',
        target: 'special.bracer_electro_temporal_nimbus',
        value: 0,
        source: 'Bracer, Electro-Temporal',
      },
    ],
  },

  // ---- 266: Bracer, Spellsight ----------------------------------------------
  {
    id: 'wondrous-bracer-spellsight',
    name: 'Bracer, Spellsight',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION }],
    casterLevel: 5,
    slot: 'wrists',

    price: 2100,
    weight: 1,

    description:
      'This ornately patterned leather bracer features a polished spherical gem (carbuncle, olivine, or ' +
      'sard) mounted near the wrist that appears to open like an eye when magical abilities activate. ' +
      'The bracer grants a +1 resistance bonus on Will saves and allows the wearer to use detect magic ' +
      'once per day. If the associated deity is the wearer\'s patron, once per day the wearer may also ' +
      'use the bracer as a lesser silent metamagic rod or cast mage hand spontaneously without requiring ' +
      'it on their spell list.',

    construction: {
      feats: ['Craft Wondrous Item', 'Silent Spell'],
      spells: ['detect magic', 'mage hand', 'resistance'],
      cost: 1050,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 3,
      breakDC: 15,
    },

    activationCategory: 'command_word',
    activationAction: 'standard',

    effects: [
      {
        type: 'bonus',
        bonusType: 'resistance',
        target: 'save.will',
        value: 1,
        source: 'Bracer, Spellsight',
      },
    ],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'detect_magic',
            spellName: 'Detect Magic',
            casterLevel: 5,
            usesPerDay: 1,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // ---- 267: Bracers of Archery (Lesser & Greater) ---------------------------
  {
    id: 'wondrous-bracers-of-archery-lesser',
    name: 'Bracers of Archery, Lesser',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 4,
    slot: 'wrists',

    price: 5000,
    weight: 1,

    description:
      'These lightweight bracers allow the wearer to use any bow (excluding crossbows) as if proficient. ' +
      'Those already proficient with a bow type gain a +1 competence bonus on attack rolls when using ' +
      'that type of bow. Both bracers must be worn together for effectiveness.',

    construction: {
      feats: ['Craft Magic Arms and Armor', 'Craft Wondrous Item'],
      spells: [],
      specialRequirements: ['Creator must be proficient with a longbow or shortbow'],
      cost: 2500,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 5,
      breakDC: 18,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'attack.ranged',
        value: 1,
        source: 'Bracers of Archery, Lesser',
        condition: {
          type: 'custom',
          params: { group: 'bow' },
          description: 'with bows only (not crossbows)',
        },
      },
    ],
  },

  {
    id: 'wondrous-bracers-of-archery-greater',
    name: 'Bracers of Archery, Greater',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 8,
    slot: 'wrists',

    price: 25000,
    weight: 1,

    description:
      'These protective-looking bracers allow the wearer to use any bow (excluding crossbows) as if ' +
      'proficient. Those already proficient with a bow type gain a +2 competence bonus on attack rolls ' +
      'and a +1 competence bonus on damage rolls when using that type of bow. Both bracers must be worn ' +
      'together for effectiveness.',

    construction: {
      feats: ['Craft Magic Arms and Armor', 'Craft Wondrous Item'],
      spells: [],
      specialRequirements: ['Creator must be proficient with a longbow or shortbow'],
      cost: 12500,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 5,
      breakDC: 18,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'attack.ranged',
        value: 2,
        source: 'Bracers of Archery, Greater',
        condition: {
          type: 'custom',
          params: { group: 'bow' },
          description: 'with bows only (not crossbows)',
        },
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'damage.ranged',
        value: 1,
        source: 'Bracers of Archery, Greater',
        condition: {
          type: 'custom',
          params: { group: 'bow' },
          description: 'with bows only (not crossbows)',
        },
      },
    ],
  },

  // ---- 268: Bracers of Armor (+1 through +8) --------------------------------
  {
    id: 'wondrous-bracers-of-armor-1',
    name: 'Bracers of Armor +1',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.CONJURATION }],
    casterLevel: 7,
    slot: 'wrists',

    price: 1000,
    weight: 1,

    description:
      'These wrist or arm guards surround the wearer with an invisible but tangible field of force, ' +
      'granting a +1 armor bonus to AC. Both bracers must be worn together for effectiveness. Bracers ' +
      'of armor do not stack with other armor; whichever source provides the larger bonus takes ' +
      'precedence.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['mage armor'],
      cost: 500,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 5,
      breakDC: 18,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'armor',
        target: 'ac.armor',
        value: 1,
        source: 'Bracers of Armor +1',
      },
    ],
  },

  {
    id: 'wondrous-bracers-of-armor-2',
    name: 'Bracers of Armor +2',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.CONJURATION }],
    casterLevel: 7,
    slot: 'wrists',

    price: 4000,
    weight: 1,

    description:
      'These wrist or arm guards surround the wearer with an invisible but tangible field of force, ' +
      'granting a +2 armor bonus to AC. Both bracers must be worn together for effectiveness. Bracers ' +
      'of armor do not stack with other armor; whichever source provides the larger bonus takes ' +
      'precedence.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['mage armor'],
      cost: 2000,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 5,
      breakDC: 18,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'armor',
        target: 'ac.armor',
        value: 2,
        source: 'Bracers of Armor +2',
      },
    ],
  },

  {
    id: 'wondrous-bracers-of-armor-3',
    name: 'Bracers of Armor +3',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 7,
    slot: 'wrists',

    price: 9000,
    weight: 1,

    description:
      'These wrist or arm guards surround the wearer with an invisible but tangible field of force, ' +
      'granting a +3 armor bonus to AC. Both bracers must be worn together for effectiveness. Bracers ' +
      'of armor do not stack with other armor; whichever source provides the larger bonus takes ' +
      'precedence.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['mage armor'],
      cost: 4500,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 5,
      breakDC: 18,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'armor',
        target: 'ac.armor',
        value: 3,
        source: 'Bracers of Armor +3',
      },
    ],
  },

  {
    id: 'wondrous-bracers-of-armor-4',
    name: 'Bracers of Armor +4',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 7,
    slot: 'wrists',

    price: 16000,
    weight: 1,

    description:
      'These wrist or arm guards surround the wearer with an invisible but tangible field of force, ' +
      'granting a +4 armor bonus to AC. Both bracers must be worn together for effectiveness. Bracers ' +
      'of armor do not stack with other armor; whichever source provides the larger bonus takes ' +
      'precedence.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['mage armor'],
      cost: 8000,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 5,
      breakDC: 18,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'armor',
        target: 'ac.armor',
        value: 4,
        source: 'Bracers of Armor +4',
      },
    ],
  },

  {
    id: 'wondrous-bracers-of-armor-5',
    name: 'Bracers of Armor +5',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 7,
    slot: 'wrists',

    price: 25000,
    weight: 1,

    description:
      'These wrist or arm guards surround the wearer with an invisible but tangible field of force, ' +
      'granting a +5 armor bonus to AC. Both bracers must be worn together for effectiveness. Bracers ' +
      'of armor do not stack with other armor; whichever source provides the larger bonus takes ' +
      'precedence.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['mage armor'],
      cost: 12500,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 5,
      breakDC: 18,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'armor',
        target: 'ac.armor',
        value: 5,
        source: 'Bracers of Armor +5',
      },
    ],
  },

  {
    id: 'wondrous-bracers-of-armor-6',
    name: 'Bracers of Armor +6',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.CONJURATION }],
    casterLevel: 7,
    slot: 'wrists',

    price: 36000,
    weight: 1,

    description:
      'These wrist or arm guards surround the wearer with an invisible but tangible field of force, ' +
      'granting a +6 armor bonus to AC. Both bracers must be worn together for effectiveness. Bracers ' +
      'of armor do not stack with other armor; whichever source provides the larger bonus takes ' +
      'precedence.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['mage armor'],
      cost: 18000,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 5,
      breakDC: 18,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'armor',
        target: 'ac.armor',
        value: 6,
        source: 'Bracers of Armor +6',
      },
    ],
  },

  {
    id: 'wondrous-bracers-of-armor-7',
    name: 'Bracers of Armor +7',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.CONJURATION }],
    casterLevel: 7,
    slot: 'wrists',

    price: 49000,
    weight: 1,

    description:
      'These wrist or arm guards surround the wearer with an invisible but tangible field of force, ' +
      'granting a +7 armor bonus to AC. Both bracers must be worn together for effectiveness. Bracers ' +
      'of armor do not stack with other armor; whichever source provides the larger bonus takes ' +
      'precedence.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['mage armor'],
      cost: 24500,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 5,
      breakDC: 18,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'armor',
        target: 'ac.armor',
        value: 7,
        source: 'Bracers of Armor +7',
      },
    ],
  },

  {
    id: 'wondrous-bracers-of-armor-8',
    name: 'Bracers of Armor +8',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.CONJURATION }],
    casterLevel: 7,
    slot: 'wrists',

    price: 64000,
    weight: 1,

    description:
      'These wrist or arm guards surround the wearer with an invisible but tangible field of force, ' +
      'granting a +8 armor bonus to AC. Both bracers must be worn together for effectiveness. Bracers ' +
      'of armor do not stack with other armor; whichever source provides the larger bonus takes ' +
      'precedence.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['mage armor'],
      cost: 32000,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 5,
      breakDC: 18,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'armor',
        target: 'ac.armor',
        value: 8,
        source: 'Bracers of Armor +8',
      },
    ],
  },

  // ---- 269: Bracers of Celestial Intervention --------------------------------
  {
    id: 'wondrous-bracers-of-celestial-intervention',
    name: 'Bracers of Celestial Intervention',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.CONJURATION }],
    casterLevel: 13,
    slot: 'wrists',

    price: 16000,
    weight: 1,

    description:
      "These golden bracers are engraved with prayers and images of celestial beings. A paladin can " +
      "expend uses of her smite evil ability as a standard action to summon celestial allies. The " +
      "number of smite evil uses expended determines the effective spell level of the summoning, " +
      "functioning as a summon monster spell of that level. Summoned creatures must be agathions, " +
      "angels, or archons from the standard or expanded summon monster lists.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['summon monster VII'],
      specialRequirements: ['Creator must be lawful good'],
      cost: 8000,
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
        type: 'special',
        target: 'special.bracers_celestial_intervention_summon',
        value: 0,
        source: 'Bracers of Celestial Intervention',
      },
    ],
  },

  // ---- 270: Bracers of Falcon's Aim -----------------------------------------
  {
    id: 'wondrous-bracers-of-falcons-aim',
    name: "Bracers of Falcon's Aim",
    category: 'wondrous',
    source: "Advanced Player's Guide",
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 3,
    slot: 'wrists',

    price: 4000,
    weight: 1,

    description:
      'These crimson leather wrist bracers feature a golden falcon image. Once per day, the wearer can ' +
      "activate them to gain the benefits of the aspect of the falcon spell for 1 minute. The bracers " +
      'must be worn continuously for 24 hours before this ability becomes available for use.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['aspect of the falcon'],
      cost: 2000,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 3,
      breakDC: 15,
    },

    activationCategory: 'command_word',
    activationAction: 'standard',

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'aspect_of_the_falcon',
            spellName: 'Aspect of the Falcon',
            casterLevel: 3,
            usesPerDay: 1,
            activationAction: 'standard',
          },
        ],
      },
    ],

    effects: [],
  },

  // ---- 271: Bracers of Primal Mastery ----------------------------------------
  {
    id: 'wondrous-bracers-of-primal-mastery',
    name: 'Bracers of Primal Mastery',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION }],
    casterLevel: 5,
    slot: 'wrists',

    price: 30000,
    weight: 1,

    description:
      'These steel bracers have seven mithral strips woven around them and thrum faintly with the force ' +
      'of stabilizing magic. When the wearer activates a magic item, casts a spell, or uses a spell-like ' +
      'ability that triggers a primal magic event, the outcome is determined twice and the caster chooses ' +
      'which result occurs. The bracers also allow the wearer to roll twice when using a rod of wonder ' +
      'and select the preferred outcome.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['dispel magic'],
      cost: 15000,
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
        target: 'special.bracers_primal_mastery_choose_primal_event',
        value: 0,
        source: 'Bracers of Primal Mastery',
      },
    ],
  },

  // ---- 272: Bracers of Steadiness -------------------------------------------
  {
    id: 'wondrous-bracers-of-steadiness',
    name: 'Bracers of Steadiness',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION }],
    casterLevel: 1,
    slot: 'wrists',

    price: 2000,
    weight: 2,

    description:
      'Made of tortoiseshell, these snug-fitting bracers promote calmness and composure. Whenever the ' +
      'wearer takes 20 on a skill check for a skill that primarily depends on her arms and hands, she ' +
      'gains a +5 competence bonus on the check.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['aid'],
      cost: 1000,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 5,
      breakDC: 15,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'special.take_20_arm_hand_skills',
        value: 5,
        source: 'Bracers of Steadiness',
        condition: {
          type: 'custom',
          params: { action: 'take_20', skillGroup: 'arm_and_hand_skills' },
          description: 'only when taking 20 on arm/hand-dependent skill checks',
        },
      },
    ],
  },

  // ---- 273: Bracers of Sworn Vengeance ---------------------------------------
  {
    id: 'wondrous-bracers-of-sworn-vengeance',
    name: 'Bracers of Sworn Vengeance',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.EVOCATION }],
    casterLevel: 15,
    slot: 'wrists',

    price: 25000,
    weight: 1,

    description:
      'White leather bracers featuring elven runes meaning "swift defeat" and "vengeance." Once per day, ' +
      'as an immediate action when the wearer takes damage, she may swear vengeance against the attacker. ' +
      'This grants a +1 competence bonus on weapon attacks against that target and an additional 2d6 ' +
      'damage on successful weapon attacks against the target, but imposes a –2 penalty on all attacks ' +
      'against other targets. Effects persist for 24 hours or until the sworn enemy dies by the ' +
      "wearer's hand, whichever occurs first. If the target survives the full duration, the bracers " +
      'cannot be used again for 7 days.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['shout'],
      specialRequirements: ['Creator must be an elf'],
      cost: 12500,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 5,
      breakDC: 18,
    },

    activationCategory: 'use_activated',
    activationAction: 'immediate',

    effects: [
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'attack.all',
        value: 1,
        source: 'Bracers of Sworn Vengeance',
        condition: {
          type: 'target_type',
          params: { targetType: 'sworn_enemy' },
          description: 'against sworn enemy only',
        },
      },
      {
        type: 'bonus',
        bonusType: 'untyped',
        target: 'damage.all',
        value: '2d6',
        source: 'Bracers of Sworn Vengeance',
        condition: {
          type: 'target_type',
          params: { targetType: 'sworn_enemy' },
          description: '+2d6 damage against sworn enemy only',
        },
      },
      {
        type: 'penalty',
        bonusType: 'untyped',
        target: 'attack.all',
        value: -2,
        source: 'Bracers of Sworn Vengeance',
        condition: {
          type: 'target_type',
          params: { targetType: 'non_sworn_enemy' },
          description: 'penalty on attacks against all targets other than sworn enemy',
        },
      },
    ],
  },

  // ---- 274: Bracers of the Avenging Knight -----------------------------------
  {
    id: 'wondrous-bracers-of-the-avenging-knight',
    name: 'Bracers of the Avenging Knight',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 8,
    slot: 'wrists',

    price: 11500,
    weight: 1,

    description:
      'These silver bracers have a polished, mirrored finish and adapt their appearance to match any ' +
      'armor worn with them. For wearers with a smite ability (such as paladins), the smite damage is ' +
      'calculated as if they were four levels higher in their class. For wearers without a smite ability, ' +
      'once per day the wearer may execute one smite attack, gaining a bonus to the attack roll equal to ' +
      'their Charisma modifier and a +5 bonus to damage on a successful hit.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['bless weapon'],
      cost: 5750,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 5,
      breakDC: 20,
    },

    activationCategory: 'continuous',

    effects: [
      {
        // For wearers with a smite ability: counts as 4 class levels higher for smite damage
        type: 'bonus',
        bonusType: 'untyped',
        target: 'special.paladin_level_for_smite_damage',
        value: 4,
        source: 'Bracers of the Avenging Knight',
      },
      {
        // For wearers without a smite ability: 1/day smite attack (Cha to attack, +5 damage)
        type: 'special',
        target: 'special.bracers_avenging_knight_smite',
        value: 0,
        source: 'Bracers of the Avenging Knight',
      },
    ],
  },

  // ---- 275: Bracers of the Glib Entertainer ----------------------------------
  {
    id: 'wondrous-bracers-of-the-glib-entertainer',
    name: 'Bracers of the Glib Entertainer',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 7,
    slot: 'wrists',

    price: 7900,
    weight: 1,

    description:
      'Decorative bracers adorned with vibrant colors and tiny bells sewn across the surface. They grant ' +
      'a +5 competence bonus on Perform checks and allow the wearer to activate a glibness effect once ' +
      'per day.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['glibness'],
      cost: 3950,
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
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.perform',
        value: 5,
        source: 'Bracers of the Glib Entertainer',
      },
    ],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'glibness',
            spellName: 'Glibness',
            casterLevel: 7,
            usesPerDay: 1,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },
];
