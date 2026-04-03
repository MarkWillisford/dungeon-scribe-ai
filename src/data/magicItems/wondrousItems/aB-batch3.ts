import type { WondrousItemDefinition } from '@/types/magicItems';
import { AuraStrength, MagicSchool } from '@/types/equipment';

export const wondrousItemsAB3: WondrousItemDefinition[] = [
  // ---- 51. Animated Portrait --------------------------------------------------
  {
    id: 'wondrous-animated-portrait',
    name: 'Animated Portrait',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ILLUSION }],
    casterLevel: 5,
    slot: 'none',

    price: 500,
    weight: 10,

    description:
      'A 4-by-6-foot framed painting depicting an intelligent creature, magically animated to display ' +
      'movement and action. The portrait reacts to questioning, with the creature turning toward the viewer ' +
      'and providing appropriate responses. The effect has no genuine intelligence but contains programming ' +
      'for up to ten responses, each limited to 25 words. It can answer questions if its programmed responses ' +
      'match appropriately. When the crafter knows or has cooperation from the depicted creature, the image ' +
      'employs that creature\'s authentic voice and behavioral characteristics.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['magic mouth', 'major image'],
      cost: 250,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 5,
      breakDC: 12,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'special',
        target: 'special.animated_portrait_responses',
        value: 0,
        source: 'Animated Portrait',
      },
    ],
  },

  // ---- 52. Anointed Holy Symbol -----------------------------------------------
  {
    id: 'wondrous-anointed-holy-symbol',
    name: 'Anointed Holy Symbol',
    category: 'wondrous',
    source: 'Planar Adventures',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION }],
    casterLevel: 7,
    slot: 'none',

    price: 10000,
    weight: 1,

    description:
      'A hollow holy symbol containing a reservoir for holy water. When filled with holy water on a ' +
      "deity's home plane, it grants enhanced channeling capabilities. The wielder may select a variant " +
      "channeling ability based on one aspect of the deity's portfolio each time energy is channeled. " +
      'The symbol remains charged for 3 days before the holy water is consumed. An evil counterpart ' +
      'exists using unholy water instead.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['consecrate'],
      cost: 5000,
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
        target: 'special.variant_channeling',
        value: 0,
        source: 'Anointed Holy Symbol',
      },
    ],
  },

  // ---- 53. Anvil of the Skyseeker ---------------------------------------------
  {
    id: 'wondrous-anvil-of-the-skyseeker',
    name: 'Anvil of the Skyseeker',
    category: 'wondrous',
    source: 'Advanced Race Guide',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 14,
    slot: 'none',

    price: 7500,
    weight: 1,

    description:
      'This compact mithral anvil expands via command word to full crafting size (200 lbs) and shrinks ' +
      'back down. When a dwarf crafts a magic item on the anvil while adventuring, she gains full progress ' +
      'for the hours she spends, rather than half.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['haste', 'shrink item'],
      specialRequirements: ['Creator must be a dwarf'],
      cost: 3350,
    },
    physicalStats: {
      hardness: 15,
      hitPoints: 30,
      breakDC: 28,
    },

    activationCategory: 'command_word',

    effects: [
      {
        type: 'special',
        target: 'special.dwarven_magic_crafting_full_progress',
        value: 0,
        source: 'Anvil of the Skyseeker',
      },
    ],
  },

  // ---- 54. Apparatus of the Crab ----------------------------------------------
  {
    id: 'wondrous-apparatus-of-the-crab',
    name: 'Apparatus of the Crab',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [
      { strength: AuraStrength.STRONG, school: MagicSchool.EVOCATION },
      { strength: AuraStrength.STRONG, school: MagicSchool.TRANSMUTATION },
    ],
    casterLevel: 19,
    slot: 'none',

    price: 90000,
    weight: 500,

    description:
      'This metallic magical vehicle resembles a sealed iron barrel when inactive. It seats two Medium ' +
      'or Small creatures and features 10 unlabeled levers controlling various functions including ' +
      'leg/tail extension, portholes, pincers, movement, rotation, eyes with internal flames, water ' +
      'depth control, and hatch operation. Each lever requires a full-round action. The device operates ' +
      'underwater to 900 feet and provides breathable air for 1d4+1 hours (two occupants) or twice as ' +
      'long for one occupant. When active: HP 200, hardness 15, speed 20 ft./swim 20 ft., AC 20, melee ' +
      'attacks with pincers (+12, 2d8 damage).',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['animate objects', 'continual flame'],
      specialRequirements: ['Creator must have 8 ranks in Knowledge (engineering)'],
      cost: 45000,
    },
    physicalStats: {
      hardness: 15,
      hitPoints: 200,
      breakDC: 35,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.apparatus_vehicle_crab',
        value: 0,
        source: 'Apparatus of the Crab',
      },
    ],
  },

  // ---- 55. Apparatus of the Octopus -------------------------------------------
  {
    id: 'wondrous-apparatus-of-the-octopus',
    name: 'Apparatus of the Octopus',
    category: 'wondrous',
    source: 'Aquatic Adventures',
    isOfficial: true,

    aura: [
      { strength: AuraStrength.STRONG, school: MagicSchool.EVOCATION },
      { strength: AuraStrength.STRONG, school: MagicSchool.TRANSMUTATION },
    ],
    casterLevel: 19,
    slot: 'none',

    price: 20000,
    weight: 400,

    description:
      'This magical device resembles a large sealed iron barrel accommodating two Medium creatures. ' +
      'It contains ten unlabeled levers that control ten distinct functions, including extending ' +
      'tentacles, manipulating objects, moving through water, and managing ventilation. When activated, ' +
      'it gains AC 16, 100 hit points, hardness 5, and can swim at 40 feet per round. The apparatus ' +
      'functions underwater to depths of 5,000 feet and maintains breathable air for 2d4+2 hours with ' +
      'two occupants.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['animate objects', 'continual flame'],
      specialRequirements: ['Creator must possess 8 ranks in Knowledge (engineering)'],
      cost: 10000,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 100,
      breakDC: 28,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.apparatus_vehicle_octopus',
        value: 0,
        source: 'Apparatus of the Octopus',
      },
    ],
  },

  // ---- 56. Apple of Eternal Sleep ---------------------------------------------
  {
    id: 'wondrous-apple-of-eternal-sleep',
    name: 'Apple of Eternal Sleep',
    category: 'wondrous',
    source: "Advanced Player's Guide",
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 10,
    slot: 'none',

    price: 2500,
    weight: null,

    description:
      'A freshly-appearing red apple that induces magical slumber. Anyone tasting it must succeed at ' +
      'a DC 19 Will save or fall into an eternal slumber as though by the witch\'s grand hex of the ' +
      'same name. Awakening requires break enchantment, limited wish, wish, miracle, or a kiss from ' +
      'someone of royal blood.',

    construction: {
      feats: ['Brew Potion', 'Craft Wondrous Item'],
      spells: [],
      specialRequirements: ['Creator must be a witch possessing the eternal slumber grand hex'],
      cost: 1250,
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
        target: 'special.eternal_slumber_dc19_will',
        value: 0,
        source: 'Apple of Eternal Sleep',
      },
    ],
  },

  // ---- 57. Apron of the Careful Chemist ---------------------------------------
  {
    id: 'wondrous-apron-of-the-careful-chemist',
    name: 'Apron of the Careful Chemist',
    category: 'wondrous',
    source: "Advanced Player's Guide",
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 8,
    slot: 'chest',

    price: 5200,
    weight: 3,

    description:
      'This reinforced leather apron provides a +2 enhancement bonus to Dexterity (treating as ' +
      'temporary for the first 24 hours worn) and grants a +2 competence bonus on Craft (alchemy) ' +
      'checks. Additionally, when the wearer applies alchemical bonus items to self or others, that ' +
      'bonus increases by 1.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["cat's grace"],
      specialRequirements: ['Creator must possess 2 ranks in Craft (alchemy)'],
      cost: 2250,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 5,
      breakDC: 10,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'ability.dex',
        value: 2,
        source: 'Apron of the Careful Chemist',
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.craft',
        value: 2,
        source: 'Apron of the Careful Chemist',
      },
      {
        type: 'special',
        target: 'special.alchemical_bonus_increase',
        value: 1,
        source: 'Apron of the Careful Chemist',
      },
    ],
  },

  // ---- 58. Aquarium Ball, Replenishing (Lesser) --------------------------------
  {
    id: 'wondrous-aquarium-ball-replenishing-lesser',
    name: 'Aquarium Ball, Replenishing (Lesser)',
    category: 'wondrous',
    source: 'Familiar Folio',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 7,
    slot: 'none',

    price: 500,
    weight: 20,

    description:
      'This magical aquarium ball continually refreshes itself with clean water, allowing a creature ' +
      'within to live as long as it has food.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['create water'],
      cost: 250,
    },
    physicalStats: {
      hardness: 1,
      hitPoints: 5,
      breakDC: 13,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'special',
        target: 'special.aquarium_clean_water',
        value: 0,
        source: 'Aquarium Ball, Replenishing (Lesser)',
      },
    ],
  },

  // ---- 58. Aquarium Ball, Replenishing (Standard) -----------------------------
  {
    id: 'wondrous-aquarium-ball-replenishing-standard',
    name: 'Aquarium Ball, Replenishing',
    category: 'wondrous',
    source: 'Familiar Folio',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 7,
    slot: 'none',

    price: 2000,
    weight: 20,

    description:
      'This magical aquarium ball continually refreshes itself with clean water and fresh food, ' +
      'allowing a creature within to live indefinitely.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['create food and water'],
      cost: 1000,
    },
    physicalStats: {
      hardness: 1,
      hitPoints: 5,
      breakDC: 13,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'special',
        target: 'special.aquarium_clean_water_and_food',
        value: 0,
        source: 'Aquarium Ball, Replenishing',
      },
    ],
  },

  // ---- 58. Aquarium Ball, Replenishing (Greater) ------------------------------
  {
    id: 'wondrous-aquarium-ball-replenishing-greater',
    name: 'Aquarium Ball, Replenishing (Greater)',
    category: 'wondrous',
    source: 'Familiar Folio',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 7,
    slot: 'none',

    price: 4000,
    weight: 20,

    description:
      'This magical aquarium ball continually refreshes itself with clean water and fresh food, ' +
      'allowing a creature within to live indefinitely. Additionally, the glass is magically enhanced ' +
      'to hardness 8 and 15 hp without any increase in weight.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['create food and water', 'stoneskin'],
      cost: 2000,
    },
    physicalStats: {
      hardness: 8,
      hitPoints: 15,
      breakDC: 16,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'special',
        target: 'special.aquarium_clean_water_and_food',
        value: 0,
        source: 'Aquarium Ball, Replenishing (Greater)',
      },
    ],
  },

  // ---- 59. Arcane Battery -----------------------------------------------------
  {
    id: 'wondrous-arcane-battery',
    name: 'Arcane Battery',
    category: 'wondrous',
    source: 'Magical Marketplace',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION }],
    casterLevel: 7,
    slot: 'none',

    price: 22000,
    weight: null,

    description:
      'A fist-sized lead container holding magically treated saltwater. When attached to a staff, it ' +
      'increases maximum charges to 11 and allows the wielder to imbue up to two charges daily by ' +
      'expending two prepared spells or slots meeting staff recharge prerequisites. Only one battery ' +
      'may attach per staff, requiring 24 hours of attachment for attunement before functioning.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['imbue with spell ability'],
      cost: 11000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 3,
      breakDC: 10,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.staff_max_charges_11',
        value: 11,
        source: 'Arcane Battery',
      },
      {
        type: 'special',
        target: 'special.staff_charge_imbue_per_day',
        value: 2,
        source: 'Arcane Battery',
      },
    ],
  },

  // ---- 60. Archon's Torch -----------------------------------------------------
  {
    id: "wondrous-archons-torch",
    name: "Archon's Torch",
    category: 'wondrous',
    source: 'Ultimate Magic',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.EVOCATION }],
    casterLevel: 5,
    slot: 'none',

    price: 750,
    weight: 1,

    description:
      "A pale yellow wooden torch inscribed with holy runes. When lit, it functions as a standard " +
      "torch lasting 5 minutes. If held by a lawful good creature, it grants the benefits of an " +
      "archon's aura spell. The magical effect ceases if a lawful good holder releases it but " +
      "resumes upon being grasped again by such a creature.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["archon's aura"],
      cost: 375,
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
        target: "special.archons_aura_lawful_good_holder",
        value: 0,
        source: "Archon's Torch",
      },
    ],
  },

  // ---- 61. Armbands of the Brawler --------------------------------------------
  {
    id: 'wondrous-armbands-of-the-brawler',
    name: 'Armbands of the Brawler',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 3,
    slot: 'wrists',

    price: 500,
    weight: 1,

    description:
      'These worn leather armbands provide a +1 competence bonus on grapple checks and checks to ' +
      'break a grapple.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["bull's strength"],
      cost: 250,
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
        target: 'cmb',
        value: 1,
        source: 'Armbands of the Brawler',
      },
    ],
  },

  // ---- 62. Armguards of Waning Hope -------------------------------------------
  {
    id: 'wondrous-armguards-of-waning-hope',
    name: 'Armguards of Waning Hope',
    category: 'wondrous',
    source: "Merchant's Manifest",
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 9,
    slot: 'hands',

    price: 25000,
    weight: 1,

    description:
      'These leather bracers feature spiraling runes and small spikes. The wearer can activate them ' +
      'twice daily as a swift action after a successful attack. This ability steals all morale bonuses ' +
      'the target creature currently enjoys, transferring them to the wearer for 9 rounds. If durations ' +
      'expire before the transfer ends, bonuses cease and revert to the original creature. Using this ' +
      'on a creature with no morale bonuses wastes one daily use.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['siphon magic'],
      cost: 12500,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 5,
      breakDC: 12,
    },

    activationCategory: 'use_activated',
    activationAction: 'swift',

    charges: { maximum: 2, rechargeMethod: 'daily' },

    effects: [
      {
        type: 'special',
        target: 'special.steal_morale_bonuses',
        value: 0,
        source: 'Armguards of Waning Hope',
      },
    ],
  },

  // ---- 63. Armiger's Panoply --------------------------------------------------
  {
    id: "wondrous-armigers-panoply",
    name: "Armiger's Panoply",
    category: 'wondrous',
    source: 'Knights of the Inner Sea',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 3,
    slot: 'wrists',

    price: 7200,
    weight: 1,

    description:
      'A magical set comprising bracers and a leather sack. The bracers function as forearm guards ' +
      'made from padded cloth, leather, or chain. A command word is inscribed inside one bracer. ' +
      'The sack stores a single suit of armor and shield without altering their weight. Three times ' +
      'daily, the wearer can speak the command word to exchange armor between sack and body when the ' +
      'sack is within 500 feet. Armor teleports instantly onto the wearer while any currently worn ' +
      "armor moves to the sack. The armor must match the wearer's size for perfect fit without " +
      'hindering other worn items or movement.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['effortless armor'],
      cost: 3600,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 3,
      breakDC: 10,
    },

    activationCategory: 'command_word',

    effects: [
      {
        type: 'special',
        target: 'special.armor_exchange_teleport',
        value: 0,
        source: "Armiger's Panoply",
      },
    ],
  },

  // ---- 64. Arrow Magnet -------------------------------------------------------
  {
    id: 'wondrous-arrow-magnet',
    name: 'Arrow Magnet',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION }],
    casterLevel: 3,
    slot: 'none',

    price: 600,
    weight: null,

    description:
      'This diminutive silver cube activates when hurled at a square intersection within 50 feet. ' +
      'It hovers 5 feet above ground for 5 rounds. Small projectiles and thrown weapons passing ' +
      'through adjacent squares automatically redirect toward the cube without requiring an attack ' +
      'roll. The cube possesses 5 hit points and hardness 8. Contact by any creature or reduction ' +
      'to 0 HP causes it to fall and be destroyed.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['protection from arrows'],
      cost: 300,
    },
    physicalStats: {
      hardness: 8,
      hitPoints: 5,
      breakDC: 14,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.arrow_magnet_redirect',
        value: 0,
        source: 'Arrow Magnet',
      },
    ],
  },

  // ---- 65. Ashes of Unluck ----------------------------------------------------
  {
    id: 'wondrous-ashes-of-unluck',
    name: 'Ashes of Unluck',
    category: 'wondrous',
    source: 'Dirty Tactics Toolbox',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.NECROMANCY }],
    casterLevel: 5,
    slot: 'none',

    price: 2400,
    weight: null,

    description:
      'These materials usually come in a black leather bag covered in various symbols of bad luck. ' +
      'When dispersed into the air, the ashes affect creatures in a 10-foot radius, imposing a -4 ' +
      'penalty on attack rolls, saving throws, ability checks, and skill checks for 2d4 rounds. ' +
      'The user remains unaffected by this penalty.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['bestow curse'],
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
        type: 'penalty',
        target: 'attack.all',
        value: -4,
        source: 'Ashes of Unluck',
      },
      {
        type: 'penalty',
        target: 'save.all',
        value: -4,
        source: 'Ashes of Unluck',
      },
      {
        type: 'special',
        target: 'special.ashes_unluck_ability_skill_checks',
        value: -4,
        source: 'Ashes of Unluck',
      },
    ],
  },

  // ---- 66. Aspect Mask --------------------------------------------------------
  {
    id: 'wondrous-aspect-mask',
    name: 'Aspect Mask',
    category: 'wondrous',
    source: 'Advanced Class Guide',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 3,
    slot: 'head',

    price: 6500,
    weight: 2,

    description:
      'This leather mask features animalistic design with primitive inlays. It grants the wearer ' +
      "access to animal focus benefits three times daily. The specific animal aspect is determined " +
      "during creation and chosen from the hunter's animal focus list.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: [],
      specialRequirements: ['Creator must possess animal focus or wild shape class feature'],
      cost: 3250,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 3,
      breakDC: 10,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.animal_focus_3_per_day',
        value: 3,
        source: 'Aspect Mask',
      },
    ],
  },

  // ---- 67. Assassin's Dust ----------------------------------------------------
  {
    id: "wondrous-assassins-dust",
    name: "Assassin's Dust",
    category: 'wondrous',
    source: 'Advanced Class Guide',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'none',

    price: 750,
    weight: null,

    description:
      'This fine powder causes skin irritation upon contact. When applied to a dead body or skeletal ' +
      'remains, it reduces them to dust similar to the effects of a disintegrate spell. One vial treats ' +
      'eight Small corpses, four Medium corpses, or one Large corpse. Skeletal remains count as half ' +
      'the corpse size. The dust only affects dead or inanimate material, having no impact on living ' +
      'or undead entities.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['disintegrate'],
      cost: 375,
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
        target: 'special.disintegrate_corpse',
        value: 0,
        source: "Assassin's Dust",
      },
    ],
  },

  // ---- 68. Assassin's Sight ---------------------------------------------------
  {
    id: "wondrous-assassins-sight",
    name: "Assassin's Sight",
    category: 'wondrous',
    source: 'Ranged Tactics Toolbox',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 5,
    slot: 'none',

    price: 5250,
    weight: 4,

    description:
      'A black telescopic sight with a thick glass lens that mounts on light or heavy crossbows ' +
      '(not hand crossbows). It enables ranged sneak attacks at two selectable ranges: 0-30 feet ' +
      'or 30-60 feet. Changing the range setting requires a full-round action that provokes attacks ' +
      'of opportunity.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['locate weakness', 'true strike'],
      cost: 2625,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 3,
      breakDC: 10,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'special',
        target: 'special.ranged_sneak_attack_extended_range',
        value: 0,
        source: "Assassin's Sight",
      },
    ],
  },

  // ---- 69. Assassin's Sight, Greater ------------------------------------------
  {
    id: "wondrous-assassins-sight-greater",
    name: "Assassin's Sight, Greater",
    category: 'wondrous',
    source: 'Ranged Tactics Toolbox',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.DIVINATION }],
    casterLevel: 9,
    slot: 'none',

    price: 12250,
    weight: 2,

    description:
      'This improved telescopic sight offers extended range capabilities compared to the standard ' +
      "version. It operates at three distance settings: 0-30 feet, 30-60 feet, and 60-90 feet. " +
      'Adjusting the range requires a standard action and provokes attacks of opportunity. The item ' +
      'grants a +4 competence bonus on attack rolls to confirm critical hits within the set range.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['locate weakness', 'true strike'],
      cost: 6125,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 3,
      breakDC: 10,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'critical_confirmation',
        value: 4,
        source: "Assassin's Sight, Greater",
      },
      {
        type: 'special',
        target: 'special.ranged_sneak_attack_extended_range_90ft',
        value: 0,
        source: "Assassin's Sight, Greater",
      },
    ],
  },

  // ---- 70. Astralabe ----------------------------------------------------------
  {
    id: 'wondrous-astralabe',
    name: 'Astralabe',
    category: 'wondrous',
    source: 'Planar Adventures',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.DIVINATION }],
    casterLevel: 8,
    slot: 'none',

    price: 16000,
    weight: 3,

    description:
      'An astralabe functions as an extraplanar compass that helps planar explorers navigate realms ' +
      'without standard cardinal directions. It establishes abstract directional references (north, ' +
      'east, south, west, and concepts like past/future). Users gain a +4 bonus on Knowledge, ' +
      'Survival, or similar navigation checks when not on the Material Plane. The device can detect ' +
      'and display information about planar portals and gates on its surface. Successfully reading it ' +
      'requires a DC 25 Knowledge (planes) check, revealing the destination plane\'s name. The ' +
      'astralabe remains dormant on the Material Plane but activates within 20 feet of planar passages.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['know direction'],
      specialRequirements: ['Cannot be created on the Material Plane'],
      cost: 8000,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 5,
      breakDC: 14,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'untyped',
        target: 'skill.knowledge_planes',
        value: 4,
        source: 'Astralabe',
        condition: {
          type: 'custom',
          params: { plane: 'non_material' },
          description: 'when not on the Material Plane',
        },
      },
      {
        type: 'special',
        target: 'special.planar_portal_detection',
        value: 0,
        source: 'Astralabe',
      },
    ],
  },

  // ---- 71. Astrologer's Telescope ---------------------------------------------
  {
    id: "wondrous-astrologers-telescope",
    name: "Astrologer's Telescope",
    category: 'wondrous',
    source: 'People of the Stars',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.DIVINATION }],
    casterLevel: 10,
    slot: 'none',

    price: 54000,
    weight: 30,

    description:
      'This magical telescope features multiple lenses and measurement devices, functioning as a ' +
      'standard telescope with x50 magnification. Skilled astronomers can use it to gain insights ' +
      'about the future through stargazing. The user performs a DC 20 Knowledge (geography) check ' +
      '(or Perception at -5 penalty if untrained) over 1 hour. Success allows them to record the ' +
      'result and substitute it for any selected Knowledge check during the next 24 hours instead of ' +
      'rolling normally. Untrained users can only benefit if the DC is 20 or lower.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['divination'],
      specialRequirements: ['At least 10 ranks in Knowledge (geography)'],
      cost: 27000,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 10,
      breakDC: 14,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.stargazing_knowledge_substitute',
        value: 0,
        source: "Astrologer's Telescope",
      },
    ],
  },

  // ---- 72. Autonomous Cartographer --------------------------------------------
  {
    id: 'wondrous-autonomous-cartographer',
    name: 'Autonomous Cartographer',
    category: 'wondrous',
    source: 'Seekers of Secrets',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 5,
    slot: 'none',

    price: 2000,
    weight: null,

    description:
      'This magical item automatically renders detailed maps of visible surroundings onto parchment ' +
      'contained within. The device captures everything within normal vision range "as if depicted by ' +
      'a competent but unexceptional artist" and cannot record unseen details. Maps fit on ' +
      '1-foot-by-4-foot scrolls that can be erased and reused via command.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['erase', 'prestidigitation'],
      cost: 1000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 3,
      breakDC: 10,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'special',
        target: 'special.auto_map_visible_area',
        value: 0,
        source: 'Autonomous Cartographer',
      },
    ],
  },

  // ---- 73. Azata's Whimsy -----------------------------------------------------
  {
    id: "wondrous-azatas-whimsy",
    name: "Azata's Whimsy",
    category: 'wondrous',
    source: "Demon Hunter's Handbook",
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 7,
    slot: 'neck',

    price: 8000,
    weight: null,

    description:
      "This neck slot item modifies confusion effects for the wearer. When confused, babbling becomes " +
      "inspiring (functions as a 7th-level bard's inspire courage), self-damage becomes nonlethal, and " +
      'attacks gain tactical adjustments. Additionally, the wearer can voluntarily enter a confusion ' +
      'state for up to 7 rounds daily as a free action.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['confusion'],
      specialRequirements: ['Creator must be a chaotic good bard'],
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
        target: 'special.confusion_inspire_courage_conversion',
        value: 0,
        source: "Azata's Whimsy",
      },
      {
        type: 'special',
        target: 'special.voluntary_confusion_7_rounds',
        value: 7,
        source: "Azata's Whimsy",
      },
    ],
  },

  // ---- 74. Badge of Last Resort -----------------------------------------------
  {
    id: 'wondrous-badge-of-last-resort',
    name: 'Badge of Last Resort',
    category: 'wondrous',
    source: 'Inner Sea World Guide',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 3,
    slot: 'none',

    price: 750,
    weight: null,

    description:
      'This bronze badge (sometimes crafted in silver or gold) bears a coiled serpent insignia. ' +
      'When the wearer speaks a command word, it transforms into one of five tools: a masterwork ' +
      'light steel shield, a masterwork whip, a dagger poisoned with blue whinnis, 50 feet of silk ' +
      'rope with a grappling hook, or masterwork thieves\' tools. Each form lasts up to 24 hours or ' +
      'until commanded to return to badge form. The item can only transform five times before losing ' +
      'its magic permanently.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['fabricate'],
      cost: 375,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 3,
      breakDC: 12,
    },

    activationCategory: 'command_word',

    charges: { maximum: 5 },

    effects: [
      {
        type: 'special',
        target: 'special.badge_transform_tool',
        value: 0,
        source: 'Badge of Last Resort',
      },
    ],
  },

  // ---- 75. Badge of Veiled Authority ------------------------------------------
  {
    id: 'wondrous-badge-of-veiled-authority',
    name: 'Badge of Veiled Authority',
    category: 'wondrous',
    source: "Merchant's Manifest",
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ILLUSION }],
    casterLevel: 3,
    slot: 'none',

    price: 3500,
    weight: null,

    description:
      'A golden badge featuring an etched snake transforms into local law enforcement insignia twice ' +
      'daily for 3 hours per use. While active, it grants a +5 competence bonus on Bluff checks and ' +
      'can be dismissed freely. The effect persists even if another creature wears the transformed ' +
      'badge, though only the original wearer can end it early. If the location has no official badges, ' +
      'the item provides no visual change but still grants the Bluff bonus. Creatures examining the ' +
      'badge closely can make a DC 14 Will save to recognize it as fraudulent.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['disguise self'],
      cost: 1750,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 3,
      breakDC: 12,
    },

    activationCategory: 'command_word',

    effects: [
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.bluff',
        value: 5,
        source: 'Badge of Veiled Authority',
      },
      {
        type: 'special',
        target: 'special.badge_law_enforcement_disguise',
        value: 0,
        source: 'Badge of Veiled Authority',
      },
    ],
  },
];
