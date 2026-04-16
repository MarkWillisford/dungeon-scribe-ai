import type { WondrousItemDefinition } from '@/types/magicItems';
import { AuraStrength, MagicSchool } from '@/types/equipment';

export const wondrousItemsCD7: WondrousItemDefinition[] = [
  // ---- 151. Collar of the True Companion ----------------------------------------
  {
    id: 'wondrous-collar-of-the-true-companion',
    name: 'Collar of the True Companion',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 9,
    slot: 'neck',

    price: 10000,
    weight: 1,

    description:
      'This simple leather collar is crafted by druids who sought to elevate animals to sentience. ' +
      'When worn by a creature of the animal type with an Intelligence score below 3, it grants a +2 ' +
      'enhancement bonus to Intelligence and allows the wearer to comprehend one spoken language chosen ' +
      'by the creator (though the animal cannot speak). If the collar is worn for at least 1 week by a ' +
      'creature of the animal type, the creature is raised to humanlike sentience as though by the awaken ' +
      'spell, after which the collar loses all magical properties. If a collar of the true companion is ' +
      'worn for more than 1 week by a creature not of the animal type, the wearer is feebleminded until ' +
      'the collar is removed.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["fox's cunning", 'awaken'],
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
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'ability.int',
        value: 2,
        source: 'Collar of the True Companion',
        condition: {
          type: 'target_type',
          params: { creatureType: 'animal' },
          description: 'only for animal-type creatures with Intelligence below 3',
        },
      },
      {
        type: 'special',
        target: 'special.collar_true_companion_awaken',
        value: 0,
        source: 'Collar of the True Companion',
      },
    ],
  },

  // ---- 152. Collar of Unliving Servitude ----------------------------------------
  {
    id: 'wondrous-collar-of-unliving-servitude',
    name: 'Collar of Unliving Servitude',
    category: 'wondrous',
    source: "Champions of Corruption",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.NECROMANCY }],
    casterLevel: 7,
    slot: 'neck',

    price: 14000,
    weight: 1,

    description:
      'This black iron choker establishes a magical connection between the wearer and any single undead ' +
      "creature of the wearer's choice. Command words activate and dismiss the bond. While linked and " +
      'within 100 feet of each other, positive energy damage intended for the undead creature transfers ' +
      'to the wearer as healing instead, and negative energy damage meant for the wearer heals the undead ' +
      'instead. The collar can transfer up to 70 total points of damage per day in this manner.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['shield other'],
      cost: 7000,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 5,
      breakDC: 20,
    },

    activationCategory: 'command_word',
    activationAction: 'standard',

    effects: [
      {
        type: 'special',
        target: 'special.collar_unliving_servitude_energy_link',
        value: 70,
        source: 'Collar of Unliving Servitude',
      },
    ],
  },

  // ---- 153. Collar, Bloodstone --------------------------------------------------
  {
    id: 'wondrous-collar-bloodstone',
    name: 'Collar, Bloodstone',
    category: 'wondrous',
    source: 'Blood of the Coven',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.NECROMANCY }],
    casterLevel: 3,
    slot: 'neck',

    price: 900,
    weight: 0,

    description:
      'This leather collar is studded with three red and black heliotrope gems. It is designed to be ' +
      'worn by a familiar or spirit animal. When damage would reduce the familiar or spirit animal below ' +
      '0 hit points, the collar stabilizes the creature at -1 hit point instead, and any excess damage ' +
      'transfers to the master. The master may choose to refuse this damage transfer, but doing so ' +
      'immediately slays the familiar. Death effects and non-hit-point damage do not trigger the collar. ' +
      'Each activation cracks one of the three heliotrope studs; after three activations the collar ' +
      'becomes nonmagical.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['life pact'],
      cost: 450,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'continuous',

    charges: { maximum: 3 },

    effects: [
      {
        type: 'special',
        target: 'special.collar_bloodstone_familiar_stabilize',
        value: 0,
        source: 'Collar, Bloodstone',
      },
    ],
  },

  // ---- 154. Collar, Spell-Sharing -----------------------------------------------
  {
    id: 'wondrous-collar-spell-sharing',
    name: 'Collar, Spell-Sharing',
    category: 'wondrous',
    source: 'Familiar Folio',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION }],
    casterLevel: 10,
    slot: 'neck',

    price: 7500,
    weight: 1,

    description:
      'This thick leather collar is studded with onyx gems and fastened with a metal clasp. It comes ' +
      'in various sizes to fit any creature capable of wearing a neck-slot item, and is typically sold ' +
      'in matched sets. Creatures with the share spells ability can, while wearing this collar, share ' +
      'spells with other creatures wearing an attuned collar rather than only their bonded master. Two ' +
      'or more collars attune to one another in 10 minutes while in contact; one collar can be attuned ' +
      'to up to three others simultaneously. The ability otherwise functions as the familiar share spells ' +
      'ability.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['imbue with spell ability'],
      cost: 3750,
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
        target: 'special.collar_spell_sharing_extended_share',
        value: 0,
        source: 'Collar, Spell-Sharing',
      },
    ],
  },

  // ---- 155. Colossus Draught ----------------------------------------------------
  {
    id: 'wondrous-colossus-draught',
    name: 'Colossus Draught',
    category: 'wondrous',
    source: 'Inner Sea Combat',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 16,
    slot: 'none',

    price: 28800,
    weight: 1,

    description:
      'This jade-colored liquid is stored in a tightly sealed vial that requires a DC 22 Strength check ' +
      'to open. Once opened, the contents must be consumed within 1 minute or they spoil. When imbibed, ' +
      'the draught grants a +4 enhancement bonus to both Strength and Constitution, and increases the ' +
      'imbiber to the next larger size category as the enlarge person spell (with all associated bonuses ' +
      'and penalties). These effects last for 24 hours. The imbiber also takes a -4 penalty on all Will ' +
      'saves for the duration.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['giant form I'],
      specialRequirements: ['Creator must be a 16th-level alchemist'],
      cost: 14400,
    },
    physicalStats: {
      hardness: 1,
      hitPoints: 1,
      breakDC: 12,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'ability.str',
        value: 4,
        source: 'Colossus Draught',
      },
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'ability.con',
        value: 4,
        source: 'Colossus Draught',
      },
      {
        type: 'penalty',
        bonusType: 'untyped',
        target: 'save.will',
        value: -4,
        source: 'Colossus Draught',
      },
      {
        type: 'special',
        target: 'special.colossus_draught_size_increase',
        value: 0,
        source: 'Colossus Draught',
      },
    ],
  },

  // ---- 156. Compass, Featherlight -----------------------------------------------
  {
    id: 'wondrous-compass-featherlight',
    name: 'Compass, Featherlight',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 3,
    slot: 'none',

    price: 1500,
    weight: 0,

    description:
      'This compass features extremely fine internal components that render it practically weightless. ' +
      'In areas with subjective directional gravity, the bearer automatically succeeds at Wisdom checks ' +
      'to change her directional orientation. Additionally, during the first round after the bearer ' +
      'changes her subjective gravitational direction, she can increase or decrease her falling speed ' +
      'by up to 30 feet.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['know direction'],
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
        type: 'special',
        target: 'special.compass_featherlight_subjective_gravity',
        value: 0,
        source: 'Compass, Featherlight',
      },
    ],
  },

  // ---- 157. Concealing Pocket ---------------------------------------------------
  {
    id: 'wondrous-concealing-pocket',
    name: 'Concealing Pocket',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ILLUSION }],
    casterLevel: 3,
    slot: 'none',

    price: 1000,
    weight: 0,

    description:
      'This 4-inch-square cloth pocket must be sewn onto a garment (requiring 1d4 minutes). Once ' +
      'attached, it blends with the garment to match its appearance. Any magic item inside the concealing ' +
      'pocket cannot be magically detected, as if protected by a magic aura spell. The wearer gains a ' +
      '+5 competence bonus on Sleight of Hand checks made to conceal an item stored in the pocket. ' +
      'Removing the pocket requires a DC 10 Heal check or an appropriate Craft check; failing by 5 or ' +
      'more gives the pocket the broken condition.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['magic aura'],
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
        bonusType: 'competence',
        target: 'skill.sleight_of_hand',
        value: 5,
        source: 'Concealing Pocket',
        condition: {
          type: 'custom',
          params: { descriptor: 'concealing_item_in_pocket' },
          description: 'to conceal an item stored in the pocket',
        },
      },
      {
        type: 'special',
        target: 'special.concealing_pocket_magic_aura',
        value: 0,
        source: 'Concealing Pocket',
      },
    ],
  },

  // ---- 158. Conquering Brand (7 variants) ---------------------------------------
  {
    id: 'wondrous-conquering-brand-conformity',
    name: 'Conquering Brand (Conformity)',
    category: 'wondrous',
    source: 'Path of the Hellknight',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 1,
    slot: 'none',

    price: 420,
    weight: 5,

    description:
      'This 3-foot-long branding iron can be heated once per day as a standard action. When heated, ' +
      'it can be used to brand a creature with the effects of brand of conformity.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['brand', 'brand of conformity'],
      cost: 220,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 10,
      breakDC: 22,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.conquering_brand_brand_of_conformity',
        value: 0,
        source: 'Conquering Brand (Conformity)',
      },
    ],
  },

  {
    id: 'wondrous-conquering-brand-hobbling',
    name: 'Conquering Brand (Hobbling)',
    category: 'wondrous',
    source: 'Path of the Hellknight',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 4,
    slot: 'none',

    price: 2820,
    weight: 5,

    description:
      'This 3-foot-long branding iron can be heated once per day as a standard action. When heated, ' +
      'it can be used to brand a creature with the effects of brand of hobbling.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['brand', 'brand of hobbling'],
      cost: 1420,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 10,
      breakDC: 22,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.conquering_brand_brand_of_hobbling',
        value: 0,
        source: 'Conquering Brand (Hobbling)',
      },
    ],
  },

  {
    id: 'wondrous-conquering-brand-lesser-geas',
    name: 'Conquering Brand (Lesser Geas)',
    category: 'wondrous',
    source: 'Path of the Hellknight',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 7,
    slot: 'none',

    price: 10020,
    weight: 5,

    description:
      'This 3-foot-long branding iron can be heated once per day as a standard action (requiring 1 ' +
      'round to heat). When heated, it can be used to brand a creature with the effects of lesser geas.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['brand', 'lesser geas'],
      cost: 5020,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 10,
      breakDC: 22,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.conquering_brand_lesser_geas',
        value: 0,
        source: 'Conquering Brand (Lesser Geas)',
      },
    ],
  },

  {
    id: 'wondrous-conquering-brand-subjugation',
    name: 'Conquering Brand (Subjugation)',
    category: 'wondrous',
    source: 'Path of the Hellknight',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 10,
    slot: 'none',

    price: 14420,
    weight: 5,

    description:
      'This 3-foot-long branding iron can be heated once per day as a standard action. When heated, ' +
      'it can be used to brand a creature with the effects of greater brand.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['brand', 'greater brand'],
      cost: 7220,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 10,
      breakDC: 22,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.conquering_brand_greater_brand',
        value: 0,
        source: 'Conquering Brand (Subjugation)',
      },
    ],
  },

  {
    id: 'wondrous-conquering-brand-tracking',
    name: 'Conquering Brand (Tracking)',
    category: 'wondrous',
    source: 'Path of the Hellknight',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 9,
    slot: 'none',

    price: 14420,
    weight: 5,

    description:
      'This 3-foot-long branding iron can be heated once per day as a standard action. When heated, ' +
      'it can be used to brand a creature with the effects of brand of tracking.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['brand', 'brand of tracking'],
      cost: 7220,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 10,
      breakDC: 22,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.conquering_brand_brand_of_tracking',
        value: 0,
        source: 'Conquering Brand (Tracking)',
      },
    ],
  },

  {
    id: 'wondrous-conquering-brand-justice',
    name: 'Conquering Brand (Justice)',
    category: 'wondrous',
    source: 'Path of the Hellknight',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.NECROMANCY }],
    casterLevel: 9,
    slot: 'none',

    price: 18020,
    weight: 5,

    description:
      'This 3-foot-long branding iron can be heated once per day as a standard action (requiring 10 ' +
      'minutes to heat). When heated, it can be used to brand a creature with the effects of mark of justice.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['brand', 'mark of justice'],
      cost: 9020,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 10,
      breakDC: 22,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.conquering_brand_mark_of_justice',
        value: 0,
        source: 'Conquering Brand (Justice)',
      },
    ],
  },

  {
    id: 'wondrous-conquering-brand-geas',
    name: 'Conquering Brand (Geas)',
    category: 'wondrous',
    source: 'Path of the Hellknight',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 11,
    slot: 'none',

    price: 26420,
    weight: 5,

    description:
      'This 3-foot-long branding iron can be heated once per day as a standard action (requiring 10 ' +
      'minutes to heat). When heated, it can be used to brand a creature with the effects of geas/quest.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['brand', 'geas/quest'],
      cost: 13220,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 10,
      breakDC: 22,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.conquering_brand_geas_quest',
        value: 0,
        source: 'Conquering Brand (Geas)',
      },
    ],
  },

  // ---- 159. Construct Channel Brick ---------------------------------------------
  {
    id: 'wondrous-construct-channel-brick',
    name: 'Construct Channel Brick',
    category: 'wondrous',
    source: "Advanced Player's Guide",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 7,
    slot: 'none',

    price: 10000,
    weight: 1,

    description:
      "This solid red brick changes its shape to match its bearer's holy symbol. A bearer with the " +
      'channel energy class feature can focus her power on the brick to repair damaged constructs and ' +
      'objects as if they were living creatures, functioning with either positive or negative energy. ' +
      'A bearer with the artifice domain adds +2d6 points of damage to her channel energy result when ' +
      'repairing constructs and objects.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['make whole'],
      cost: 5000,
    },
    physicalStats: {
      hardness: 8,
      hitPoints: 5,
      breakDC: 20,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.construct_channel_brick_repair',
        value: 0,
        source: 'Construct Channel Brick',
      },
    ],
  },

  // ---- 160. Copycat Siphon ------------------------------------------------------
  {
    id: 'wondrous-copycat-siphon',
    name: 'Copycat Siphon',
    category: 'wondrous',
    source: "Magical Marketplace",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ILLUSION }],
    casterLevel: 5,
    slot: 'none',

    price: 1800,
    weight: 1,

    description:
      'This metal tube connects two standard containers. Three times per day, the user can activate ' +
      'it with a command word while pouring liquid into one container, causing the other to fill with ' +
      'an exact replica of the poured liquid that appears identical to all normal senses (sight, smell, ' +
      'taste, and touch). When consumed, the copy acts as fresh water with no magical properties. The ' +
      'replica registers as the original liquid on detect spells, as per the magic aura spell (Will DC 14).',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['create water', 'magic aura', 'major image'],
      cost: 900,
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
        target: 'special.copycat_siphon_liquid_duplicate',
        value: 3,
        source: 'Copycat Siphon',
      },
    ],
  },

  // ---- 161. Cord of Stubborn Resolve --------------------------------------------
  {
    id: 'wondrous-cord-of-stubborn-resolve',
    name: 'Cord of Stubborn Resolve',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 8,
    slot: 'belt',

    price: 15000,
    weight: 1,

    description:
      'This rope belt worn at the waist provides a +2 enhancement bonus to Constitution, treated as ' +
      'a temporary bonus for the first 24 hours of wear. The wearer gains prodigious stamina. When the ' +
      'wearer would become fatigued, she instead takes 1d6 points of nonlethal damage. When she would ' +
      'become exhausted, she instead takes 1d6 points of nonlethal damage and becomes fatigued rather ' +
      'than exhausted.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["bear's endurance", 'lesser restoration'],
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
        bonusType: 'enhancement',
        target: 'ability.con',
        value: 2,
        source: 'Cord of Stubborn Resolve',
      },
      {
        type: 'special',
        target: 'special.cord_stubborn_resolve_fatigue_immunity',
        value: 0,
        source: 'Cord of Stubborn Resolve',
      },
    ],
  },

  // ---- 162. Corpse Puppet -------------------------------------------------------
  {
    id: 'wondrous-corpse-puppet',
    name: 'Corpse Puppet',
    category: 'wondrous',
    source: 'Blood of the Moon',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.NECROMANCY }],
    casterLevel: 5,
    slot: 'none',

    price: 250,
    weight: 0,

    description:
      'This roughly humanoid figure crafted from wax is carried by its owner. If the bearer dies while ' +
      'transformed by a shapeshifting effect, polymorph spell, or similar ability, the corpse puppet ' +
      'causes the bearer to automatically retain the shape she had upon dying instead of reverting to ' +
      'her natural form. Observers can attempt a DC 12 Will save to detect the unnatural state of the ' +
      'corpse. The item melts into nothingness when activated.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['sculpt corpse'],
      cost: 125,
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
        target: 'special.corpse_puppet_retain_form',
        value: 0,
        source: 'Corpse Puppet',
      },
    ],
  },

  // ---- 163. Corset of Dire Witchcraft -------------------------------------------
  {
    id: 'wondrous-corset-of-dire-witchcraft',
    name: 'Corset of Dire Witchcraft',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ABJURATION }],
    casterLevel: 6,
    slot: 'body',

    price: 22000,
    weight: 1,

    description:
      'This fitted garment features laces, buckles, and buttons and is reinforced with ribs of leather ' +
      'or bone. It provides a +4 armor bonus to AC. If the wearer is a witch, once per day when she ' +
      'communes with her familiar to prepare spells, she may choose one hex she knows to enhance. The ' +
      'enhanced hex functions at +2 caster level for 24 hours. The enhancement ends if the corset is ' +
      'removed or applied to a different hex.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['mage armor'],
      specialRequirements: ['Creator must be a witch'],
      cost: 11000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 3,
      breakDC: 12,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'armor',
        target: 'ac.armor',
        value: 4,
        source: 'Corset of Dire Witchcraft',
      },
    ],

    conditionalEffects: [
      {
        condition: 'wielder_class',
        classId: 'witch',
        effects: [
          {
            type: 'special',
            target: 'special.corset_dire_witchcraft_hex_caster_level',
            value: 2,
            source: 'Corset of Dire Witchcraft',
          },
        ],
      },
    ],
  },

  // ---- 164. Corset of the Vishkanya ----------------------------------------------
  {
    id: 'wondrous-corset-of-the-vishkanya',
    name: 'Corset of the Vishkanya',
    category: 'wondrous',
    source: 'Advanced Race Guide',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 3,
    slot: 'body',

    price: 3000,
    weight: 1,

    description:
      'This black garment fits beneath armor. It grants the wearer the ability to compress herself to ' +
      'fit through tight spaces as though affected by a squeeze spell for up to 10 rounds per day, ' +
      'activated as a free action. While this ability is active, the wearer gains a +5 bonus on ' +
      'Escape Artist checks.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['grease', 'squeeze'],
      cost: 1500,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 2,
      breakDC: 10,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'bonus',
        bonusType: 'untyped',
        target: 'skill.escape_artist',
        value: 5,
        source: 'Corset of the Vishkanya',
        condition: {
          type: 'custom',
          params: { descriptor: 'while_compressed' },
          description: 'while compression ability is active',
        },
      },
      {
        type: 'special',
        target: 'special.corset_vishkanya_compression',
        value: 10,
        source: 'Corset of the Vishkanya',
      },
    ],
  },

  // ---- 165. Costume Bureau ------------------------------------------------------
  {
    id: 'wondrous-costume-bureau',
    name: 'Costume Bureau',
    category: 'wondrous',
    source: 'Taldor, Echoes of Glory',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [
      { strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION },
      { strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION },
    ],
    casterLevel: 9,
    slot: 'none',

    price: 7000,
    weight: 500,

    description:
      'This large oaken bureau has a cabinet and three drawers. Once per day, the user concentrates ' +
      'on a desired clothing style for 1 minute, then retrieves magically fabricated garments matching ' +
      'that vision from the bureau. While worn, the magically created outfit grants a +2 enhancement ' +
      'bonus to Charisma. The clothing deteriorates to worthless scraps after 24 hours, including any ' +
      'separated components.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["eagle's splendor", 'fabricate', 'minor creation'],
      specialRequirements: ['Creator must have at least 2 ranks in Craft (tailoring) or Profession (tailor)'],
      cost: 3500,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 20,
      breakDC: 18,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'ability.cha',
        value: 2,
        source: 'Costume Bureau',
        condition: {
          type: 'custom',
          params: { descriptor: 'while_wearing_fabricated_outfit' },
          description: 'while wearing the magically created outfit',
        },
      },
    ],
  },

  // ---- 166. Coven Charm ---------------------------------------------------------
  {
    id: 'wondrous-coven-charm',
    name: 'Coven Charm',
    category: 'wondrous',
    source: 'Blood of the Coven',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [
      { strength: AuraStrength.STRONG, school: MagicSchool.EVOCATION },
      { strength: AuraStrength.STRONG, school: MagicSchool.NECROMANCY },
    ],
    casterLevel: 15,
    slot: 'belt',

    price: 75000,
    weight: 1,

    description:
      'This small bag binds members of a witch coven. Members contribute to it by placing a body part ' +
      '(minimum: a finger, toe, or tongue) into the bag as a full-round action; this deals 1d6 points ' +
      'of damage and imposes a permanent negative level on the contributor that cannot be regained until ' +
      'the charge is expended. The charm holds up to 3 charges. The wearer can expend charges to cast ' +
      'spells that normally require the full coven: 1 charge for spells up to 4th level, 2 charges for ' +
      'spells up to 6th level, and 3 charges for spells up to 8th level. If any coven member dies, all ' +
      'charges are lost and the bag cannot be refilled for 24 hours after complete depletion.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: [],
      specialRequirements: ['Creator must be a changeling or hag'],
      cost: 37500,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'use_activated',

    charges: { maximum: 3 },

    effects: [
      {
        type: 'special',
        target: 'special.coven_charm_solo_coven_spells',
        value: 0,
        source: 'Coven Charm',
      },
    ],
  },

  // ---- 167. Crackling Tassel ----------------------------------------------------
  {
    id: 'wondrous-crackling-tassel',
    name: 'Crackling Tassel',
    category: 'wondrous',
    source: "Merchant's Manifest",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION }],
    casterLevel: 6,
    slot: 'none',

    price: 2500,
    weight: 0,

    description:
      'These magical tassels are attached to a weapon pommel or similar weapon accessory. The wielder ' +
      'gains a +4 circumstance bonus on performance combat checks. When the wielder takes a standard ' +
      'action to fight defensively, the next attack that misses the wielder causes the tassel to ' +
      'discharge 3d6 points of electricity damage to the attacker. This electrical discharge can occur ' +
      'once per 24-hour period.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['defensive shock', 'hypnotism'],
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
        bonusType: 'circumstance',
        target: 'special.performance_combat_checks',
        value: 4,
        source: 'Crackling Tassel',
      },
      {
        type: 'special',
        target: 'special.crackling_tassel_electricity_discharge',
        value: 0,
        source: 'Crackling Tassel',
      },
    ],
  },

  // ---- 168. Crepuscular Trinket -------------------------------------------------
  {
    id: 'wondrous-crepuscular-trinket',
    name: 'Crepuscular Trinket',
    category: 'wondrous',
    source: 'Planar Adventures',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION }],
    casterLevel: 5,
    slot: 'neck',

    price: 4000,
    weight: 0,

    description:
      'This simple necklace contains an hourglass-shaped pendant with one black half and one white half. ' +
      'Once per day, the wearer can activate it via command word to gain spell resistance 15 against ' +
      'spells and spell-like abilities with the light or shadow descriptors, as well as spells from the ' +
      'shadow subschool. This effect lasts for 1 minute.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['dancing lights', 'darkness'],
      cost: 2000,
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
        type: 'resistance',
        bonusType: 'untyped',
        target: 'sr',
        value: 15,
        source: 'Crepuscular Trinket',
        condition: {
          type: 'custom',
          params: { descriptor: 'light_or_shadow' },
          description: 'against light descriptor, shadow descriptor, and shadow subschool spells only',
        },
      },
    ],
  },

  // ---- 169. Crook's Coin --------------------------------------------------------
  {
    id: 'wondrous-crooks-coin',
    name: "Crook's Coin",
    category: 'wondrous',
    source: "Antihero's Handbook",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION }],
    casterLevel: 5,
    slot: 'none',

    price: 8000,
    weight: 0,

    description:
      "This gold coin has blank faces where the owner can manifest a butterfly displaying celestial " +
      "imagery at will. The coin allows its bearer to control coin flip outcomes. More significantly, " +
      "it grants the bearer a +2 luck bonus on Reflex saving throws.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['divine favor'],
      cost: 4000,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 1,
      breakDC: 15,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'luck',
        target: 'save.reflex',
        value: 2,
        source: "Crook's Coin",
      },
    ],
  },

  // ---- 170. Crook's Cube --------------------------------------------------------
  {
    id: 'wondrous-crooks-cube',
    name: "Crook's Cube",
    category: 'wondrous',
    source: "Antihero's Handbook",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.DIVINATION }],
    casterLevel: 11,
    slot: 'none',

    price: 26000,
    weight: 4,

    description:
      'This crystalline cube has a thin plate of soft white stone on one of its faces inscribed with ' +
      'several lines of cryptic runes. When activated via command word, the runes reshape to reveal ' +
      'information about nearby secrets such as back alleys and hidden paths. The cube allows the ' +
      'bearer to cast find the path once per day. Additionally, the bearer gains a +5 insight bonus ' +
      'on Knowledge (dungeoneering), Knowledge (engineering), Knowledge (geography), Knowledge ' +
      '(history), and Knowledge (local) checks, provided the bearer has at least 5 ranks in the ' +
      'relevant skill.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['find the path'],
      specialRequirements: ['Creator must have at least 5 ranks in Knowledge (dungeoneering), Knowledge (engineering), Knowledge (geography), Knowledge (history), or Knowledge (local)'],
      cost: 13000,
    },
    physicalStats: {
      hardness: 8,
      hitPoints: 5,
      breakDC: 18,
    },

    activationCategory: 'command_word',
    activationAction: 'standard',

    effects: [
      {
        type: 'bonus',
        bonusType: 'insight',
        target: 'skill.knowledge_dungeoneering',
        value: 5,
        source: "Crook's Cube",
        condition: {
          type: 'custom',
          params: { descriptor: 'minimum_5_ranks' },
          description: 'only when bearer has at least 5 ranks in this skill',
        },
      },
      {
        type: 'bonus',
        bonusType: 'insight',
        target: 'skill.knowledge_engineering',
        value: 5,
        source: "Crook's Cube",
        condition: {
          type: 'custom',
          params: { descriptor: 'minimum_5_ranks' },
          description: 'only when bearer has at least 5 ranks in this skill',
        },
      },
      {
        type: 'bonus',
        bonusType: 'insight',
        target: 'skill.knowledge_geography',
        value: 5,
        source: "Crook's Cube",
        condition: {
          type: 'custom',
          params: { descriptor: 'minimum_5_ranks' },
          description: 'only when bearer has at least 5 ranks in this skill',
        },
      },
      {
        type: 'bonus',
        bonusType: 'insight',
        target: 'skill.knowledge_history',
        value: 5,
        source: "Crook's Cube",
        condition: {
          type: 'custom',
          params: { descriptor: 'minimum_5_ranks' },
          description: 'only when bearer has at least 5 ranks in this skill',
        },
      },
      {
        type: 'bonus',
        bonusType: 'insight',
        target: 'skill.knowledge_local',
        value: 5,
        source: "Crook's Cube",
        condition: {
          type: 'custom',
          params: { descriptor: 'minimum_5_ranks' },
          description: 'only when bearer has at least 5 ranks in this skill',
        },
      },
    ],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'find_the_path',
            spellName: 'Find the Path',
            casterLevel: 11,
            usesPerDay: 1,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // ---- 171. Crown of Blasting ---------------------------------------------------
  {
    id: 'wondrous-crown-of-blasting-minor',
    name: 'Crown of Blasting, Minor',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION }],
    casterLevel: 6,
    slot: 'head',

    price: 6480,
    weight: 1,

    description:
      'On command, this simple golden crown projects a blast of searing light once per day, dealing ' +
      '3d8 points of damage.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['searing light'],
      cost: 3240,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 5,
      breakDC: 20,
    },

    activationCategory: 'command_word',
    activationAction: 'standard',

    effects: [
      {
        type: 'special',
        target: 'special.crown_blasting_minor_searing_light',
        value: 0,
        source: 'Crown of Blasting, Minor',
      },
    ],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'searing_light',
            spellName: 'Searing Light',
            casterLevel: 6,
            usesPerDay: 1,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  {
    id: 'wondrous-crown-of-blasting-major',
    name: 'Crown of Blasting, Major',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.EVOCATION }],
    casterLevel: 17,
    slot: 'head',

    price: 23760,
    weight: 1,

    description:
      'On command, this elaborate golden crown projects a maximized blast of searing light once per ' +
      'day, dealing 40 points of damage (5d8 maximized).',

    construction: {
      feats: ['Craft Wondrous Item', 'Maximize Spell'],
      spells: ['searing light'],
      cost: 11880,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 5,
      breakDC: 20,
    },

    activationCategory: 'command_word',
    activationAction: 'standard',

    effects: [
      {
        type: 'special',
        target: 'special.crown_blasting_major_searing_light',
        value: 0,
        source: 'Crown of Blasting, Major',
      },
    ],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'searing_light',
            spellName: 'Searing Light (Maximized)',
            casterLevel: 17,
            usesPerDay: 1,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // ---- 172. Crown of Conquest ---------------------------------------------------
  {
    id: 'wondrous-crown-of-conquest',
    name: 'Crown of Conquest',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 7,
    slot: 'head',

    price: 24600,
    weight: 3,

    description:
      'This crown of steel and gold radiates an aura of threatening power. The wearer gains a +4 ' +
      'competence bonus on Intimidate checks. Whenever the wearer confirms a critical hit, the crown ' +
      'creates a prayer effect centered on the wearer (caster level 5th). If the wearer has the ' +
      'Leadership feat, he gains a +1 bonus to his Leadership score, and his followers and cohort gain ' +
      'a +1 bonus on attack rolls and saving throws against fear effects while within line of sight of ' +
      'the wearer.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['bless', "eagle's splendor", 'prayer'],
      cost: 12300,
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
        target: 'skill.intimidate',
        value: 4,
        source: 'Crown of Conquest',
      },
      {
        type: 'special',
        target: 'special.crown_conquest_prayer_on_crit',
        value: 0,
        source: 'Crown of Conquest',
      },
      {
        type: 'special',
        target: 'special.crown_conquest_leadership_bonus',
        value: 0,
        source: 'Crown of Conquest',
      },
    ],
  },

  // ---- 173. Crown of Heaven -----------------------------------------------------
  {
    id: 'wondrous-crown-of-heaven',
    name: 'Crown of Heaven',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ABJURATION }],
    casterLevel: 10,
    slot: 'head',

    price: 150000,
    weight: 5,

    description:
      'Part of the Regalia of Heaven, this radiant crown grants the wearer fluency in Celestial, a ' +
      '+5 sacred bonus on Knowledge (planes) checks concerning good and evil outsiders, and the ability ' +
      'to detect evil at will. Once per day the wearer can use tongues as a command-word activated ' +
      'spell-like ability. Spells and spell-like abilities with the good descriptor function at +1 ' +
      'caster level. Evil creatures that don the crown gain 1 negative level that cannot be removed ' +
      'while the crown is worn. When wielding the Orb of Heaven or Scepter of Heaven in addition to ' +
      'this crown, the wearer gains further bonuses to AC and saves against evil creatures and can ' +
      'radiate an aura of menace.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['aura of doom', 'detect evil', 'dispel evil', 'magic circle against evil', 'tongues'],
      cost: 75000,
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
        bonusType: 'sacred',
        target: 'skill.knowledge_planes',
        value: 5,
        source: 'Crown of Heaven',
        condition: {
          type: 'custom',
          params: { descriptor: 'regarding_good_evil_outsiders' },
          description: 'regarding good and evil outsiders only',
        },
      },
      {
        type: 'bonus',
        bonusType: 'untyped',
        target: 'spell.caster_level',
        value: 1,
        source: 'Crown of Heaven',
        condition: {
          type: 'custom',
          params: { descriptor: 'good' },
          description: 'for spells and spell-like abilities with the good descriptor',
        },
      },
      {
        type: 'special',
        target: 'special.crown_of_heaven_celestial_language',
        value: 0,
        source: 'Crown of Heaven',
      },
      {
        type: 'special',
        target: 'special.crown_of_heaven_detect_evil_at_will',
        value: 0,
        source: 'Crown of Heaven',
      },
    ],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'detect_evil',
            spellName: 'Detect Evil',
            casterLevel: 10,
            usesPerDay: 0,
            activationAction: 'standard',
          },
          {
            spellId: 'tongues',
            spellName: 'Tongues',
            casterLevel: 10,
            usesPerDay: 1,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // ---- 174. Crown of Swords -----------------------------------------------------
  {
    id: 'wondrous-crown-of-swords',
    name: 'Crown of Swords',
    category: 'wondrous',
    source: 'Advanced Race Guide',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.EVOCATION }],
    casterLevel: 3,
    slot: 'head',

    price: 6000,
    weight: 3,

    description:
      'This crown is crafted from steel and adorned with small mithral swords. The wearer can activate ' +
      'it up to 10 times per day. When struck in combat, the wearer may use an immediate action to ' +
      'generate a longsword-shaped spiritual weapon that attacks the attacker. On subsequent turns, ' +
      'the wearer can spend additional uses to continue attacking the same target. The weapon cannot ' +
      'be redirected to a new target and dissipates if the target dies or moves out of range. Multiple ' +
      'spiritual weapons can be active simultaneously if the wearer is struck in different rounds.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['spiritual weapon'],
      cost: 3000,
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
        target: 'special.crown_of_swords_spiritual_weapon',
        value: 10,
        source: 'Crown of Swords',
      },
    ],
  },

  // ---- 175. Crown of the Kobold King --------------------------------------------
  {
    id: 'wondrous-crown-of-the-kobold-king',
    name: 'Crown of the Kobold King',
    category: 'wondrous',
    source: 'Crown of the Kobold King',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 12,
    slot: 'head',

    price: 15000,
    weight: 1,

    description:
      'An ancient burnished bronze crown passed down through generations of kobold rulers. It grants ' +
      'the wearer a +2 enhancement bonus to Charisma and a +2 natural armor bonus. The wearer is immune ' +
      "to the frightful presence ability of all dragons. Sorcerers who wear the crown cast their spells " +
      'at +1 caster level.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['barkskin', "eagle's splendor"],
      cost: 7500,
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
        bonusType: 'enhancement',
        target: 'ability.cha',
        value: 2,
        source: 'Crown of the Kobold King',
      },
      {
        type: 'bonus',
        bonusType: 'natural',
        target: 'ac.natural',
        value: 2,
        source: 'Crown of the Kobold King',
      },
      {
        type: 'special',
        bonusType: 'untyped',
        target: 'special.immunity_frightful_presence',
        value: 0,
        source: 'Crown of the Kobold King',
      },
    ],

    conditionalEffects: [
      {
        condition: 'wielder_class',
        classId: 'sorcerer',
        effects: [
          {
            type: 'bonus',
            bonusType: 'untyped',
            target: 'spell.caster_level',
            value: 1,
            source: 'Crown of the Kobold King',
          },
        ],
      },
    ],
  },
];
