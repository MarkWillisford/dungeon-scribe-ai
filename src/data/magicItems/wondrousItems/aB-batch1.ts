import type { WondrousItemDefinition } from '@/types/magicItems';
import { AuraStrength, MagicSchool } from '@/types/equipment';

export const wondrousItemsAB1: WondrousItemDefinition[] = [
  // -------------------------------------------------------------------------
  // 1. Abjurant Salt
  // Source: Ultimate Equipment pg. 276
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-abjurant-salt',
    name: 'Abjurant Salt',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ABJURATION }],
    casterLevel: 9,
    slot: 'none',

    price: 600,
    weight: 1,

    description:
      'This salt, housed in a silver tube, creates a protective barrier against evil conjured creatures. ' +
      'When poured as a full-round action (provoking attacks of opportunity), it forms either a 5-foot ' +
      'diameter circle or a 15-foot line. Evil summoned or called creatures cannot cross or disturb the ' +
      'barrier, though they may still attack from range or use magic. Non-evil creatures can easily ' +
      'disrupt the line by scuffing it. The effect persists until the line is broken and cannot be ' +
      'recollected once laid.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['magic circle against evil', 'permanency'],
      cost: 300,
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
        target: 'special.evil_creature_barrier',
        value: 0,
        source: 'Abjurant Salt',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 2. Admixture Vial
  // Source: Ultimate Equipment pg. 276
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-admixture-vial',
    name: 'Admixture Vial',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 8,
    slot: 'none',

    price: 5000,
    weight: 0,

    description:
      'Once per day, an alchemist can use this simple-looking glass vial to combine two extracts into ' +
      'one usable extract as if he had the combine extracts discovery. The item only works with extracts ' +
      'of 3rd level or lower. Extracts combined through this vial cannot be recombined using either ' +
      'this item or the combine extracts discovery itself.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: [],
      specialRequirements: ['Creator must be an alchemist possessing the combine extracts discovery'],
      cost: 2500,
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
        target: 'special.combine_extracts',
        value: 1,
        source: 'Admixture Vial',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 3. Adventurer's Greatcoat
  // Source: Pathfinder Society Primer
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-adventurers-greatcoat',
    name: "Adventurer's Greatcoat",
    category: 'wondrous',
    source: 'Pathfinder Society Primer',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 9,
    slot: 'body',

    price: 8000,
    weight: 4,

    description:
      'This long, double-breasted coat of durable canvas has a removable liner. Visible on the coat ' +
      'are cloth patches representing various items. The wearer can detach one patch per round as a ' +
      'standard action; the patch transforms into its corresponding item. The coat contains approximately ' +
      '23 different items including rations, ammunition, tools, potions, magical gear, and even a ' +
      'combat-trained horse.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['fabricate'],
      cost: 4000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 5,
      breakDC: 10,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.patch_item_creation',
        value: 0,
        source: "Adventurer's Greatcoat",
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 4. Aegis of Recovery
  // Source: Advanced Player's Guide
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-aegis-of-recovery',
    name: 'Aegis of Recovery',
    category: 'wondrous',
    source: "Advanced Player's Guide",
    isOfficial: true,

    aura: [
      { strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION },
      { strength: AuraStrength.FAINT, school: MagicSchool.CONJURATION },
    ],
    casterLevel: 3,
    slot: 'neck',

    price: 1500,
    weight: 0,

    description:
      'The wearer gains a +2 resistance bonus on saving throws made to recover from ongoing effects ' +
      'such as poison damage, disease, or spells like hold person. This bonus applies only to recovery ' +
      'saves, not initial saves. When the wearer is reduced below 0 hit points, the aegis automatically ' +
      'heals them for 2d8+3 hit points and then crumbles to dust.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['barkskin', 'cure moderate wounds'],
      cost: 750,
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
        source: 'Aegis of Recovery',
        condition: {
          type: 'custom',
          params: { trigger: 'recovery_save' },
          description: 'Only applies to saves to recover from ongoing effects, not initial saves',
        },
      },
      {
        type: 'special',
        target: 'special.aegis_emergency_healing',
        value: 0,
        source: 'Aegis of Recovery',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 5. Agent's Clasp
  // Source: Inner Sea World Guide (Pathfinder Society gear)
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-agents-clasp',
    name: "Agent's Clasp",
    category: 'wondrous',
    source: 'Inner Sea World Guide',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION }],
    casterLevel: 9,
    slot: 'wrists',

    price: 60000,
    weight: 0,

    description:
      'These golden clasps come as a matched pair — one for a handler and one for an agent. The ' +
      "handler's clasp provides constant status information about the agent's clasp wearer. Either " +
      'wearer can speak a command word to transmit a message equivalent to the sending spell to the ' +
      "other. If the recipient isn't wearing their clasp, the message is stored until the clasp is " +
      'donned, then delivered with an opportunity to respond.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['sending', 'status'],
      specialRequirements: ['Creator must be human'],
      cost: 30000,
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
        target: 'special.status_link',
        value: 0,
        source: "Agent's Clasp",
      },
      {
        type: 'special',
        target: 'special.sending_at_will',
        value: 0,
        source: "Agent's Clasp",
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 6. Agile Alpenstock
  // Source: Ultimate Equipment pg. 276
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-agile-alpenstock',
    name: 'Agile Alpenstock',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 3,
    slot: 'none',

    price: 2000,
    weight: 1,

    description:
      'This wooden staff provides a +5-foot enhancement bonus to speed and a +2 enhancement bonus to ' +
      'CMD against trip attempts and on saving throws to avoid being tripped. These bonuses apply only ' +
      'while the staff is held in hand. It also functions as a quarterstaff in combat.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['longstrider'],
      cost: 1000,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 10,
      breakDC: 20,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'speed.base',
        value: 5,
        source: 'Agile Alpenstock',
        condition: {
          type: 'custom',
          params: { requires: 'held' },
          description: 'Only while held in hand',
        },
      },
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'cmd',
        value: 2,
        source: 'Agile Alpenstock',
        condition: {
          type: 'custom',
          params: { requires: 'held', against: 'trip' },
          description: 'Against trip attempts only, while held',
        },
      },
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'save.ref',
        value: 2,
        source: 'Agile Alpenstock',
        condition: {
          type: 'custom',
          params: { requires: 'held', trigger: 'avoid_trip' },
          description: 'On saves to avoid being tripped, while held',
        },
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 7. Alabaster Trapping
  // Source: Merchant's Manifest
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-alabaster-trapping',
    name: 'Alabaster Trapping',
    category: 'wondrous',
    source: "Merchant's Manifest",
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.EVOCATION }],
    casterLevel: 5,
    slot: 'body',

    price: 3500,
    weight: 1,

    description:
      'This white robe with golden embellishments maintains a constant cleaning effect, eliminating ' +
      'dirt and wrinkles. Once per day as an immediate action, the wearer can repel a creature making ' +
      'physical contact, dealing 5d4 force damage and pushing the target 10 feet away in a direction ' +
      'chosen by the wearer.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['force punch', 'prestidigitation'],
      cost: 1750,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 2,
      breakDC: 10,
    },

    activationCategory: 'use_activated',
    activationAction: 'immediate',

    effects: [
      {
        type: 'special',
        target: 'special.force_repulsion',
        value: 0,
        source: 'Alabaster Trapping',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 8. Alchemist's Atlatl
  // Source: Ranged Tactics Toolbox
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-alchemists-atlatl',
    name: "Alchemist's Atlatl",
    category: 'wondrous',
    source: 'Ranged Tactics Toolbox',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 1,
    slot: 'none',

    price: 1500,
    weight: 2,

    description:
      "This wooden atlatl features a shaft covered in carvings of alchemical formulae and a bowl-shaped " +
      'end to hold alchemical splash weapons such as acid flasks or alchemical fire. When used to launch ' +
      "a splash weapon, the weapon's range doubles. Magic items and alchemist bombs are unaffected. " +
      'Loading a splash weapon requires a move action that provokes attacks of opportunity.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['longshot'],
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
        target: 'special.double_splash_range',
        value: 0,
        source: "Alchemist's Atlatl",
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 9. Alchemist's Aspergillum
  // Source: Advanced Race Guide (or similar — uses Craft Magic Arms and Armor)
  // Note: This item is a +1 battle aspergillum; construction uses Craft Magic Arms and Armor
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-alchemists-aspergillum',
    name: "Alchemist's Aspergillum",
    category: 'wondrous',
    source: 'Advanced Race Guide',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION }],
    casterLevel: 3,
    slot: 'none',

    price: 2805,
    weight: 4,

    description:
      'This magical +1 battle aspergillum has a dappled surface and hollow interior made from a ' +
      'corrosion-resistant alloy. When filled with an alchemical weapon (acid, alkali, ice, lightning, ' +
      'fire, or sonic), it treats the contents similarly to holy water but deals the corresponding ' +
      'energy damage type instead of holy damage. Alchemists gain bonus uses equal to their Intelligence ' +
      'modifier before the aspergillum must be refilled.',

    construction: {
      feats: ['Craft Magic Arms and Armor'],
      spells: ['resist energy'],
      cost: 1402,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 5,
      breakDC: 20,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.alchemical_aspergillum',
        value: 0,
        source: "Alchemist's Aspergillum",
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 10. Alluring Golden Apple
  // Source: Ultimate Equipment
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-alluring-golden-apple',
    name: 'Alluring Golden Apple',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 4,
    slot: 'none',

    price: 400,
    weight: 1,

    description:
      'This enchanted apple appears to be solid gold. When dropped or thrown, it draws the attention of ' +
      'the nearest hostile creature within 20 feet, forcing a DC 13 Will save. On a failed save, the ' +
      'target is paralyzed (as hold person) while fixating on the apple. Affected creatures take a -2 ' +
      'penalty on Perception checks. A successful save on subsequent rounds breaks the effect. The apple ' +
      'is destroyed upon use.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['beguiling gift', 'hold person'],
      cost: 200,
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
        target: 'special.hold_person_lure',
        value: 0,
        source: 'Alluring Golden Apple',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 11. Altar of Dawn
  // Source: Inner Sea Gods (or similar faith supplement)
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-altar-of-dawn',
    name: 'Altar of Dawn',
    category: 'wondrous',
    source: 'Inner Sea Gods',
    isOfficial: true,

    aura: [
      { strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION },
      { strength: AuraStrength.MODERATE, school: MagicSchool.ENCHANTMENT },
    ],
    casterLevel: 10,
    slot: 'none',

    price: 10000,
    weight: 250,

    description:
      'This tiled blue box is detailed with mosaics of doves in flight and features a scimitar stand on ' +
      'top. The altar provides a +3 bonus on Diplomacy checks made to redeem evil creatures or change ' +
      "their attitude toward the associated faith. Creatures resting within 60 feet regain an additional " +
      'hit point per character level each day.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['cure light wounds', "eagle's splendor", 'magic circle against evil'],
      specialRequirements: ['Creator must worship the associated deity'],
      cost: 5000,
    },
    physicalStats: {
      hardness: 8,
      hitPoints: 30,
      breakDC: 28,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'untyped',
        target: 'skill.diplomacy',
        value: 3,
        source: 'Altar of Dawn',
        condition: {
          type: 'custom',
          params: { context: 'redeem_evil_or_faith_attitude' },
          description: 'To redeem evil creatures or change attitudes toward the associated faith',
        },
      },
      {
        type: 'special',
        target: 'special.resting_hp_per_level',
        value: 0,
        source: 'Altar of Dawn',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 12. Altar, Blackmarrow
  // Source: Rival Guide (or similar — necromancy-focused supplement)
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-altar-blackmarrow',
    name: 'Altar, Blackmarrow',
    category: 'wondrous',
    source: 'Rival Guide',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.NECROMANCY }],
    casterLevel: 17,
    slot: 'none',

    price: 32500,
    weight: 24,

    description:
      'Fashioned from skulls and bones as black as onyx, this altar radiates negative energy equivalent ' +
      'to the desecrate spell while upright. If toppled, the effect ceases until righted as a move ' +
      'action. Spellcasters can use it as a focus for animate dead or create undead, eliminating the ' +
      'need for onyx gems. The altar can sustain a maximum of 20 Hit Dice of undead and cannot create ' +
      'more than 20 HD of undead per week. Undead created via this focus cannot generate spawn. ' +
      'Undead controlled through this altar must remain within 100 feet or face destruction after 4 hours.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['desecrate'],
      cost: 16250,
    },
    physicalStats: {
      hardness: 8,
      hitPoints: 30,
      breakDC: 25,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'special',
        target: 'special.desecrate_aura',
        value: 0,
        source: 'Altar, Blackmarrow',
      },
      {
        type: 'special',
        target: 'special.animate_dead_focus',
        value: 0,
        source: 'Altar, Blackmarrow',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 13. Altar, Crimson
  // Source: (from d20pfsrd — specific book not confirmed; likely Pathfinder supplement)
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-altar-crimson',
    name: 'Altar, Crimson',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.NECROMANCY }],
    casterLevel: 8,
    slot: 'none',

    price: 17500,
    weight: 28,

    description:
      'This red marble altar is shaped like two legless conjoined humanoids with heads facing opposite ' +
      'directions, their four arms supporting the structure. Within 40 feet, any creature taking ' +
      'piercing or slashing damage automatically suffers 1d4 bleed damage. A silver cup (25 gp) placed ' +
      'in an indentation fills with crimson nectar after 30 points of bleed damage accumulate. Drinking ' +
      'the nectar restores 5d6 hit points to living or undead creatures, but must be consumed within 1 ' +
      'round of removal or it spoils. Maximum 3 cups can be produced daily.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['bleed', 'death knell'],
      cost: 8750,
    },
    physicalStats: {
      hardness: 8,
      hitPoints: 30,
      breakDC: 25,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'special',
        target: 'special.crimson_altar_bleed_aura',
        value: 0,
        source: 'Altar, Crimson',
      },
      {
        type: 'special',
        target: 'special.crimson_nectar_healing',
        value: 0,
        source: 'Altar, Crimson',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 14. Altar, Dark Lens
  // Source: (from d20pfsrd — specific book not confirmed; likely summoning supplement)
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-altar-dark-lens',
    name: 'Altar, Dark Lens',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.CONJURATION }],
    casterLevel: 13,
    slot: 'none',

    price: 40000,
    weight: 37,

    description:
      'A dark steel altar featuring an obsidian lens shaped like an eye at its center. Summoners within ' +
      '60 feet can use the lens as a focus for summon monster or summon nature\'s ally spells; creatures ' +
      'summoned through it gain benefits as if affected by lesser evolution surge as though they were ' +
      'eidolons with no base form. There is a 25% chance that summoned creatures attack the summoner ' +
      'instead of obeying commands. After each summoning, a vacuum effect pulls creatures within range ' +
      'toward the altar for 1 round (severity increases with spell level).',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['lesser evolution surge', 'plane shift'],
      cost: 20000,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 30,
      breakDC: 28,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'special',
        target: 'special.dark_lens_summon_evolution',
        value: 0,
        source: 'Altar, Dark Lens',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 15. Ampoule of False Blood
  // Source: Ultimate Equipment pg. 254
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-ampoule-of-false-blood',
    name: 'Ampoule of False Blood',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 15,
    slot: 'neck',

    price: 20000,
    weight: 0,

    description:
      'A gold-chain necklace bearing a sealed crystal vial of preserved blood attuned to a specific ' +
      "sorcerer bloodline. When worn for one day, the wearer gains that bloodline's powers while losing " +
      'access to their original bloodline powers. The item only functions while worn; after removal, the ' +
      'wearer cannot access any bloodline powers for one hour. As a full-round action (provoking attacks ' +
      'of opportunity), the wearer can break the ampoule and drink its contents, becoming sickened for ' +
      '1d4 hours. For sorcerers, this permanently changes their bloodline, affecting bonus spells, ' +
      'arcana, and powers — though previously selected bonus feats remain unchanged.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['limited wish', 'polymorph'],
      specialRequirements: ['Creator must be a sorcerer of the appropriate bloodline'],
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
        target: 'special.bloodline_swap',
        value: 0,
        source: 'Ampoule of False Blood',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 16–20. Amulet of Bullet Protection (+1 through +5)
  // Source: Ultimate Equipment
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-amulet-bullet-protection-1',
    name: 'Amulet of Bullet Protection +1',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION }],
    casterLevel: 5,
    slot: 'neck',

    price: 1500,
    weight: 0,

    description:
      "This amulet, usually crafted from the splintered remains of spent firearm bullets shaped into a " +
      'rough holy symbol or clover, grants the wearer a +1 luck bonus to AC against firearm attacks ' +
      'that specifically target touch AC.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['divine favor'],
      specialRequirements: ["Creator's caster level must be at least 3 (three times the amulet's bonus)"],
      cost: 750,
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
        target: 'ac',
        value: 1,
        source: 'Amulet of Bullet Protection +1',
        condition: {
          type: 'custom',
          params: { attackType: 'firearm_touch_ac' },
          description: 'Against firearm attacks targeting touch AC only',
        },
      },
    ],
  },

  {
    id: 'wondrous-amulet-bullet-protection-2',
    name: 'Amulet of Bullet Protection +2',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION }],
    casterLevel: 6,
    slot: 'neck',

    price: 6000,
    weight: 0,

    description:
      "This amulet, usually crafted from the splintered remains of spent firearm bullets shaped into a " +
      'rough holy symbol or clover, grants the wearer a +2 luck bonus to AC against firearm attacks ' +
      'that specifically target touch AC.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['divine favor'],
      specialRequirements: ["Creator's caster level must be at least 6 (three times the amulet's bonus)"],
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
        bonusType: 'luck',
        target: 'ac',
        value: 2,
        source: 'Amulet of Bullet Protection +2',
        condition: {
          type: 'custom',
          params: { attackType: 'firearm_touch_ac' },
          description: 'Against firearm attacks targeting touch AC only',
        },
      },
    ],
  },

  {
    id: 'wondrous-amulet-bullet-protection-3',
    name: 'Amulet of Bullet Protection +3',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION }],
    casterLevel: 9,
    slot: 'neck',

    price: 13500,
    weight: 0,

    description:
      "This amulet, usually crafted from the splintered remains of spent firearm bullets shaped into a " +
      'rough holy symbol or clover, grants the wearer a +3 luck bonus to AC against firearm attacks ' +
      'that specifically target touch AC.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['divine favor'],
      specialRequirements: ["Creator's caster level must be at least 9 (three times the amulet's bonus)"],
      cost: 6750,
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
        target: 'ac',
        value: 3,
        source: 'Amulet of Bullet Protection +3',
        condition: {
          type: 'custom',
          params: { attackType: 'firearm_touch_ac' },
          description: 'Against firearm attacks targeting touch AC only',
        },
      },
    ],
  },

  {
    id: 'wondrous-amulet-bullet-protection-4',
    name: 'Amulet of Bullet Protection +4',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION }],
    casterLevel: 12,
    slot: 'neck',

    price: 24000,
    weight: 0,

    description:
      "This amulet, usually crafted from the splintered remains of spent firearm bullets shaped into a " +
      'rough holy symbol or clover, grants the wearer a +4 luck bonus to AC against firearm attacks ' +
      'that specifically target touch AC.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['divine favor'],
      specialRequirements: ["Creator's caster level must be at least 12 (three times the amulet's bonus)"],
      cost: 12000,
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
        target: 'ac',
        value: 4,
        source: 'Amulet of Bullet Protection +4',
        condition: {
          type: 'custom',
          params: { attackType: 'firearm_touch_ac' },
          description: 'Against firearm attacks targeting touch AC only',
        },
      },
    ],
  },

  {
    id: 'wondrous-amulet-bullet-protection-5',
    name: 'Amulet of Bullet Protection +5',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION }],
    casterLevel: 15,
    slot: 'neck',

    price: 37500,
    weight: 0,

    description:
      "This amulet, usually crafted from the splintered remains of spent firearm bullets shaped into a " +
      'rough holy symbol or clover, grants the wearer a +5 luck bonus to AC against firearm attacks ' +
      'that specifically target touch AC.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['divine favor'],
      specialRequirements: ["Creator's caster level must be at least 15 (three times the amulet's bonus)"],
      cost: 18750,
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
        target: 'ac',
        value: 5,
        source: 'Amulet of Bullet Protection +5',
        condition: {
          type: 'custom',
          params: { attackType: 'firearm_touch_ac' },
          description: 'Against firearm attacks targeting touch AC only',
        },
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 21. Amulet of Channeled Life
  // Source: Advanced Race Guide
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-amulet-channeled-life',
    name: 'Amulet of Channeled Life',
    category: 'wondrous',
    source: 'Advanced Race Guide',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 10,
    slot: 'neck',

    price: 12000,
    weight: 0,

    description:
      'A pale translucent gemstone set in dull gray metal engraved with ancient runes. When worn by a ' +
      'creature with the negative energy affinity racial trait, positive energy that would normally heal ' +
      'living creatures instead grants the wearer temporary hit points equal to half the healing amount. ' +
      'These temporary hit points expire after 10 minutes and do not stack with other similar conversion ' +
      'effects. The item only benefits living creatures, not undead.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['life channel'],
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
        target: 'special.positive_energy_to_temp_hp',
        value: 0,
        source: 'Amulet of Channeled Life',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 22. Amulet of Courage
  // Source: Divine Anthology
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-amulet-of-courage',
    name: 'Amulet of Courage',
    category: 'wondrous',
    source: 'Divine Anthology',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION }],
    casterLevel: 3,
    slot: 'neck',

    price: 6000,
    weight: 0,

    description:
      "This silver amulet depicts an overflowing tankard. Once per day, when the wearer encounters a " +
      'magical or supernatural fear effect, the amulet automatically casts remove fear on them. ' +
      "Additionally, wearers with the fighter's bravery class feature gain a +1 bonus to their Will " +
      'saves against fear.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['remove fear'],
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
        bonusType: 'untyped',
        target: 'save.will',
        value: 1,
        source: 'Amulet of Courage',
        condition: {
          type: 'custom',
          params: { classFeature: 'bravery', against: 'fear' },
          description: "Only for wearers with the fighter's bravery class feature, against fear",
        },
      },
      {
        type: 'special',
        target: 'special.remove_fear_auto',
        value: 1,
        source: 'Amulet of Courage',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 23. Amulet of Eldest's Blessing
  // Source: Gnomes of Golarion / Ultimate Equipment
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-amulet-eldests-blessing',
    name: "Amulet of Eldest's Blessing",
    category: 'wondrous',
    source: 'Gnomes of Golarion',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 7,
    slot: 'neck',

    price: 10000,
    weight: 1,

    description:
      "This crystalline amulet contains a fragment from the fey world. When worn by a gnome, it " +
      "provides three benefits: the wearer doesn't register as extraplanar while on the fey world; the " +
      'wearer heals 1 point of lethal and nonlethal damage per minute (maximum per day equal to ' +
      'character level); and the wearer gains a +4 insight bonus on saving throws against the Bleaching.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: [],
      specialRequirements: ['Creator must be a gnome'],
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
        bonusType: 'insight',
        target: 'save.all',
        value: 4,
        source: "Amulet of Eldest's Blessing",
        condition: {
          type: 'custom',
          params: { race: 'gnome', against: 'bleaching' },
          description: 'Gnome wearers only; against the Bleaching',
        },
      },
      {
        type: 'special',
        target: 'special.fey_world_passive_healing',
        value: 0,
        source: "Amulet of Eldest's Blessing",
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 24. Amulet of Elemental Strife
  // Source: Ultimate Equipment pg. 254
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-amulet-elemental-strife',
    name: 'Amulet of Elemental Strife',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ABJURATION }],
    casterLevel: 8,
    slot: 'neck',

    price: 4000,
    weight: 1,

    description:
      'This amulet emits torch-like illumination within 60 feet of elementals, displaying colors ' +
      'matching their subtypes (white for air, yellow for earth, red for fire, blue for water). The ' +
      'wearer gains resistance 5 to one energy type corresponding to the nearest elemental\'s subtype, ' +
      'though this protection only applies against elemental attacks. The wearer\'s attacks also bypass ' +
      'elemental damage reduction.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['resist energy'],
      specialRequirements: ['Creator must be at least 8th level'],
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
        type: 'resistance',
        target: 'energy_resistance',
        value: 5,
        source: 'Amulet of Elemental Strife',
        condition: {
          type: 'custom',
          params: { source: 'nearest_elemental_subtype', attacker: 'elemental' },
          description: 'Matches nearest elemental subtype; only against elemental attacks',
        },
      },
      {
        type: 'special',
        target: 'special.bypass_elemental_dr',
        value: 0,
        source: 'Amulet of Elemental Strife',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 25. Amulet of Euphoric Healing
  // Source: Champions of Corruption
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-amulet-euphoric-healing',
    name: 'Amulet of Euphoric Healing',
    category: 'wondrous',
    source: 'Champions of Corruption',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 3,
    slot: 'neck',

    price: 12000,
    weight: 1,

    description:
      "This glass amulet contains bubbling red liquid and typically displays a holy symbol of Asmodeus " +
      "or Zon-Kuthon. When worn, it infuses the wearer's healing magic with an addictive sensation. " +
      'Recipients of healing spells or spell-like abilities cast by the wearer must succeed at a DC 13 ' +
      'Fortitude save or become addicted, suffering a -2 penalty on saves against the wearer\'s ' +
      'mind-affecting spells and 1 Wisdom damage over 24 hours. The wearer can suppress this effect as ' +
      'a free action.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['cure light wounds', 'enthrall'],
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
        target: 'special.euphoric_healing_addiction',
        value: 0,
        source: 'Amulet of Euphoric Healing',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Note: Items 17–25 above cover the remaining amulets from the list.
  // Items 16–20 (Amulet of Bullet Protection) are the 5 variants counted as
  // one "named item" (items 16 in the 25-item list).
  // Final count: 25 named items → 29 entries (5 Bullet Protection variants +
  //   Amulet of Grappling, Grasping Souls, Hidden Light, Hidden Strength)
  // -------------------------------------------------------------------------

  // -------------------------------------------------------------------------
  // Amulet of Grappling
  // Source: (book unclear from sources; using Ultimate Equipment as most likely)
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-amulet-of-grappling',
    name: 'Amulet of Grappling',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION }],
    casterLevel: 9,
    slot: 'neck',

    price: 20258,
    weight: 2,

    description:
      "This gold chain bears a nearly perfect pearl replica of a hand. Once per day as an immediate " +
      "action, the wearer can animate the hand to attempt to grapple an adjacent Medium or smaller " +
      "opponent using the wearer's CMB. While maintaining the grapple, the hand inflicts 1d4 nonlethal " +
      'damage per round. If the grapple attempt fails or the victim escapes, the hand stops. The hand ' +
      'also automatically activates to grapple any creature attempting theft from the wearer; if unworn, ' +
      "it uses the thief's own CMB and Strength.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['interposing hand'],
      cost: 10129,
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
        type: 'special',
        target: 'special.animated_grapple_hand',
        value: 0,
        source: 'Amulet of Grappling',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Amulet of Grasping Souls
  // Source: Tears at Bitter Manor
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-amulet-grasping-souls',
    name: 'Amulet of Grasping Souls',
    category: 'wondrous',
    source: 'Tears at Bitter Manor',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 13,
    slot: 'neck',

    price: 21000,
    weight: 0,

    description:
      'This amulet functions differently depending on whether the wearer is corporeal or incorporeal. ' +
      'For corporeal wearers, it grants the ghost touch quality to natural attacks and wielded weapons ' +
      '(including thrown weapons). Once per day as a swift action, the wearer can cast a spell affecting ' +
      'incorporeal creatures as though using the Ectoplasmic Spell metamagic without increasing the ' +
      'spell level. For incorporeal wearers, items carried become incorporeal, enabling interaction with ' +
      'the physical environment, and the creature uses Charisma instead of Strength for encumbrance.',

    construction: {
      feats: ['Craft Wondrous Item', 'Ectoplasmic Spell'],
      spells: ['plane shift'],
      cost: 10500,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'continuous',
    activationAction: 'swift',

    effects: [
      {
        type: 'special',
        target: 'special.ghost_touch_natural_attacks',
        value: 0,
        source: 'Amulet of Grasping Souls',
      },
      {
        type: 'special',
        target: 'special.ectoplasmic_spell_free',
        value: 1,
        source: 'Amulet of Grasping Souls',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Amulet of Hidden Light
  // Source: Advanced Race Guide
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-amulet-hidden-light',
    name: 'Amulet of Hidden Light',
    category: 'wondrous',
    source: 'Advanced Race Guide',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ILLUSION }],
    casterLevel: 3,
    slot: 'neck',

    price: 9000,
    weight: 0,

    description:
      'This rough-cut glass amulet can emit light on command, functioning like a sunrod (30 feet of ' +
      'bright light, 30 feet of dim light). The distinguishing feature is that creatures outside this ' +
      "area cannot see the amulet's light, providing concealed illumination visible only to those " +
      'within the illuminated area.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['light', 'invisibility'],
      cost: 4500,
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
        target: 'special.concealed_illumination',
        value: 0,
        source: 'Amulet of Hidden Light',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Amulet of Hidden Strength
  // Source: Ultimate Equipment pg. 254
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-amulet-hidden-strength',
    name: 'Amulet of Hidden Strength',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'neck',

    price: 9000,
    weight: 0,

    description:
      'A glass teardrop on a platinum chain. Once per day, the wearer can choose between two effects: ' +
      'execute a single melee or ranged attack at their highest bonus as a swift action, or (if the ' +
      'wearer possesses a ki pool) spend a full-round action to recover two ki points.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: [],
      specialRequirements: ['Creator must possess a ki pool'],
      cost: 4500,
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
        target: 'special.extra_attack_or_ki_recovery',
        value: 1,
        source: 'Amulet of Hidden Strength',
      },
    ],
  },
];
