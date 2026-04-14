import type { WondrousItemDefinition } from '@/types/magicItems';
import { AuraStrength, MagicSchool } from '@/types/equipment';

export const wondrousItemsEG1: WondrousItemDefinition[] = [
  // ---- 1. Eagle Knight Dress Uniform ------------------------------------------
  // Note: technically a magic armor on d20pfsrd; listed here as wondrous per manifest.
  {
    id: 'wondrous-eagle-knight-dress-uniform',
    name: 'Eagle Knight Dress Uniform',
    category: 'wondrous',
    source: 'Pathfinder Campaign Setting: Paths of Prestige',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 6,
    slot: 'body',

    price: 18175,
    weight: 20,

    description:
      'This set of fine +2 parade armor matches the dress uniforms worn by Eagle Knights of Andoran. ' +
      'When grappled or restrained, the wearer can attempt an Escape Artist check to get free as an ' +
      'immediate action, gaining a +2 competence bonus on that check. Once per day as a standard action, ' +
      'the wearer can cause the armor to gleam with shimmering golden light, increasing the enhancement ' +
      'bonus to AC from +2 to +5 for 10 minutes.',

    construction: {
      feats: ['Craft Magic Arms and Armor'],
      spells: ['liberating command', 'mage armor'],
      cost: 9175,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 20,
      breakDC: 26,
    },

    activationCategory: 'command_word',
    activationAction: 'standard',

    effects: [
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'ac.armor',
        value: 2,
        source: 'Eagle Knight Dress Uniform',
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.escape_artist',
        value: 2,
        source: 'Eagle Knight Dress Uniform',
        condition: {
          type: 'custom',
          params: { situation: 'grappled_or_restrained_immediate_action' },
          description: 'only when attempting Escape Artist as an immediate action while grappled or restrained',
        },
      },
      {
        // 1/day: enhancement bonus increases to +5 for 10 minutes
        type: 'special',
        target: 'special.eagle_knight_golden_reinforcement',
        value: 0,
        source: 'Eagle Knight Dress Uniform',
      },
    ],
  },

  // ---- 2. Earring, Mutineer's Bane --------------------------------------------
  {
    id: 'wondrous-earring-mutineers-bane',
    name: "Mutineer's Bane Earring",
    category: 'wondrous',
    source: "Pathfinder #59: The Price of Infamy",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.DIVINATION }],
    casterLevel: 7,
    slot: 'none',

    price: 4000,
    weight: 0,

    description:
      "This earring enhances the wearer's ability to sense crew unrest aboard ships. The wearer gains a " +
      '+5 bonus on all Sense Motive checks made while on a ship under conditions of poor morale. ' +
      'A commodore wearing this earring grants their squadron a +3 bonus on morale checks during fleet ' +
      'battles; an admiral wearing it grants all squadrons in their fleet a +1 bonus on morale checks ' +
      'during fleet battles.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['detect thoughts'],
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
        bonusType: 'untyped',
        target: 'skill.sense_motive',
        value: 5,
        source: "Mutineer's Bane Earring",
        condition: {
          type: 'custom',
          params: { situation: 'on_ship_poor_morale' },
          description: 'only while on a ship under conditions of poor morale',
        },
      },
      {
        // Naval command bonuses (squadron/fleet morale)
        type: 'special',
        target: 'special.mutineers_bane_naval_morale',
        value: 0,
        source: "Mutineer's Bane Earring",
      },
    ],
  },

  // ---- 3. Earth Child Faceguard -----------------------------------------------
  {
    id: 'wondrous-earth-child-faceguard',
    name: 'Earth Child Faceguard',
    category: 'wondrous',
    source: "Giant Hunter's Handbook",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 10,
    slot: 'head',

    price: 10000,
    weight: 0,

    description:
      'This faceguard grants the wearer the benefits of the Earth Child Style feat without needing to ' +
      'meet its prerequisites. The wearer gains a dodge bonus to AC against giants, though if the wearer ' +
      'lacks the defensive training racial trait, the dodge bonus is reduced to +2. A wearer who already ' +
      'possesses the Earth Child Style feat may enter the earth child stance as a free action instead of ' +
      'the normal action cost.',

    construction: {
      feats: ['Craft Wondrous Item', 'Earth Child Style'],
      spells: ['know the enemy'],
      cost: 5000,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 5,
      breakDC: 18,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'special',
        target: 'special.earth_child_style_benefit',
        value: 0,
        source: 'Earth Child Faceguard',
      },
      {
        type: 'special',
        target: 'special.earth_child_stance_free_action',
        value: 0,
        source: 'Earth Child Faceguard',
      },
    ],
  },

  // ---- 4. Ebony Bolero --------------------------------------------------------
  {
    id: 'wondrous-ebony-bolero',
    name: 'Ebony Bolero',
    category: 'wondrous',
    source: 'Agents of Evil',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 9,
    slot: 'shoulders',

    price: 18000,
    weight: 5,

    description:
      'These gray pauldrons crafted by fetchlings trail wisps of black smoke. As a move action, the ' +
      'wearer can manipulate shadow strands to assault a target within 60 feet, concentrating for up ' +
      'to 1 minute. A Will save (DC 16) negates the effects. The bolero has 5 charges that regenerate ' +
      'at dusk each day. Each effect costs 1 charge (except Emotion lasting 3 rounds, which costs 2): ' +
      'Emotion (suppress or trigger rage), Memory (erase past minute of memories), Thoughts (read ' +
      "mind as detect thoughts), or Vision (blind target with shadow matter impenetrable to darkvision).",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['shadow conjuration'],
      cost: 9000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 5,
      breakDC: 14,
    },

    activationCategory: 'use_activated',
    activationAction: 'move',

    charges: { maximum: 5, rechargeMethod: 'Recharges to 5 charges at dusk each day' },

    effects: [
      {
        type: 'special',
        target: 'special.ebony_bolero_emotion',
        value: 0,
        source: 'Ebony Bolero',
      },
      {
        type: 'special',
        target: 'special.ebony_bolero_memory',
        value: 0,
        source: 'Ebony Bolero',
      },
      {
        type: 'special',
        target: 'special.ebony_bolero_thoughts',
        value: 0,
        source: 'Ebony Bolero',
      },
      {
        type: 'special',
        target: 'special.ebony_bolero_vision',
        value: 0,
        source: 'Ebony Bolero',
      },
    ],
  },

  // ---- 5. Echo of Divinity's Promise ------------------------------------------
  {
    id: 'wondrous-echo-of-divinitys-promise',
    name: "Echo of Divinity's Promise",
    category: 'wondrous',
    source: "Disciple's Doctrine",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION }],
    casterLevel: 7,
    slot: 'none',

    price: 1400,
    weight: 8,

    description:
      'This stone tablet is inscribed with the story of a being who failed to achieve godhood through ' +
      'the Test of the Starstone. As a move action, the holder breaks the tablet, releasing residual ' +
      'divine energy. For 1 minute, the breaker gains a +1 morale bonus on attack rolls, weapon damage ' +
      'rolls, ability checks, skill checks, and saving throws. The breaker may also immediately attempt ' +
      'a new saving throw against one ongoing effect such as a disease. The tablet is destroyed when used.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['commune', 'divine favor'],
      cost: 700,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 5,
      breakDC: 10,
    },

    activationCategory: 'use_activated',
    activationAction: 'move',

    effects: [
      {
        type: 'bonus',
        bonusType: 'morale',
        target: 'attack.all',
        value: 1,
        source: "Echo of Divinity's Promise",
      },
      {
        type: 'bonus',
        bonusType: 'morale',
        target: 'damage.all',
        value: 1,
        source: "Echo of Divinity's Promise",
      },
      {
        type: 'bonus',
        bonusType: 'morale',
        target: 'save.all',
        value: 1,
        source: "Echo of Divinity's Promise",
      },
      {
        type: 'bonus',
        bonusType: 'morale',
        target: 'skill.all',
        value: 1,
        source: "Echo of Divinity's Promise",
      },
      {
        // New saving throw against one ongoing effect
        type: 'special',
        target: 'special.echo_divinity_new_save',
        value: 0,
        source: "Echo of Divinity's Promise",
      },
    ],
  },

  // ---- 6. Efficient Quiver ----------------------------------------------------
  {
    id: 'wondrous-efficient-quiver',
    name: 'Efficient Quiver',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 9,
    slot: 'none',

    price: 1800,
    weight: 2,

    description:
      'This appears to be a standard arrow quiver, but it has three separate nondimensional compartments. ' +
      'The smallest compartment holds up to 60 objects of the same general size and shape as an arrow. ' +
      'The second compartment holds up to 18 objects of the same general size and shape as a javelin. ' +
      'The third compartment holds up to 6 objects of the same general size and shape as a bow (spears, ' +
      'staffs, or the like may also be stored here). The quiver weighs the same no matter what is placed ' +
      'inside it. The owner can retrieve any item stored in the quiver as easily as a regular item.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['secret chest'],
      cost: 900,
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
        target: 'special.efficient_quiver_storage',
        value: 0,
        source: 'Efficient Quiver',
      },
    ],
  },

  // ---- 7. Efreeti Horns -------------------------------------------------------
  {
    id: 'wondrous-efreeti-horns',
    name: 'Efreeti Horns',
    category: 'wondrous',
    source: "Adventurer's Guide",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 8,
    slot: 'headband',

    price: 24000,
    weight: 1,

    description:
      "These ornate horns worn on the forehead grant the wearer a +4 enhancement bonus to Wisdom. " +
      "Additionally, by spending 1 ki point as a full-round action, the wearer can gain the effects of " +
      "enlarge person or reduce person (self only) for 1 minute. These powers function regardless of the " +
      "wearer's creature type.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["enlarge person", "owl's wisdom", 'reduce person'],
      cost: 12000,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 5,
      breakDC: 18,
    },

    activationCategory: 'use_activated',
    activationAction: 'standard',

    effects: [
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'ability.wis',
        value: 4,
        source: 'Efreeti Horns',
      },
      {
        // Ki-powered enlarge/reduce person 1 min
        type: 'special',
        target: 'special.efreeti_horns_size_change',
        value: 0,
        source: 'Efreeti Horns',
      },
    ],
  },

  // ---- 8. Eldritch Egress -----------------------------------------------------
  {
    id: 'wondrous-eldritch-egress',
    name: 'Eldritch Egress',
    category: 'wondrous',
    source: 'Seekers of Secrets',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 9,
    slot: 'none',

    price: 10000,
    weight: 4,

    description:
      'This bundle of wooden slats unfolds into a 3-foot-by-3-foot frame. Once per day, the frame can ' +
      'be placed on a solid surface and activated to create a passage up to 10 feet deep, functioning ' +
      'as a passwall spell. The passage lasts for 1 hour unless the frame is removed sooner. ' +
      'Unfolding or folding the frame is a full-round action that provokes attacks of opportunity. ' +
      'Activating the frame to create a passage is a standard action. Medium or smaller creatures pass ' +
      'through freely; Large creatures must succeed on an Escape Artist check. The frame can only be ' +
      'removed from outside the affected surface.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['passwall'],
      cost: 5000,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 5,
      breakDC: 14,
    },

    activationCategory: 'use_activated',
    activationAction: 'standard',

    effects: [
      {
        type: 'special',
        target: 'special.eldritch_egress_passwall',
        value: 0,
        source: 'Eldritch Egress',
      },
    ],
  },

  // ---- 9. Elemental Augmentations ---------------------------------------------
  // Multiple sub-items (each a separate implanted augmentation). Listed as one entry
  // with sub-effects; each variant is a separate implant applied to the character's body.
  // Blazing Eyes
  {
    id: 'wondrous-elemental-augmentation-blazing-eyes',
    name: 'Elemental Augmentation: Blazing Eyes',
    category: 'wondrous',
    source: 'Pathfinder Unchained',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 13,
    slot: 'none',

    price: 42000,
    weight: 0,

    description:
      "The wearer's eyes become blazing fire orbs. The wearer can cast spells with the fire descriptor " +
      'as if they were modified by the Silent Spell and Still Spell metamagic feats without increasing ' +
      'the spell level. The eyes shed candlelight but cannot use darkvision.',

    construction: {
      feats: ['Craft Wondrous Item', 'Silent Spell', 'Still Spell'],
      spells: ['faerie fire'],
      specialRequirements: ['Creator must have 13 ranks in Knowledge (planes)'],
      cost: 21000,
    },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'continuous',
    effects: [
      {
        type: 'special',
        target: 'special.elemental_aug_blazing_eyes_silent_still',
        value: 0,
        source: 'Elemental Augmentation: Blazing Eyes',
      },
    ],
  },

  // Blazing Hand
  {
    id: 'wondrous-elemental-augmentation-blazing-hand',
    name: 'Elemental Augmentation: Blazing Hand',
    category: 'wondrous',
    source: 'Pathfinder Unchained',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION }],
    casterLevel: 10,
    slot: 'none',

    price: 16000,
    weight: 0,

    description:
      "The wearer's hand becomes wreathed in flame. Unarmed strikes with that hand deal 1d6 additional " +
      'fire damage. A creature grappled by the wearer takes 2d6 fire damage per round. The hand sheds ' +
      'light as a torch and deals 1d6 fire damage to flammable objects after 1 round of contact.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['fireball'],
      specialRequirements: ['Creator must have 10 ranks in Knowledge (planes)'],
      cost: 8000,
    },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'continuous',
    effects: [
      {
        type: 'damage',
        bonusType: 'untyped',
        target: 'weapon.damage',
        value: '1d6',
        source: 'Elemental Augmentation: Blazing Hand',
        condition: {
          type: 'custom',
          params: { descriptor: 'fire', attackType: 'unarmed' },
          description: 'fire damage on unarmed strikes with the blazing hand',
        },
      },
      {
        type: 'special',
        target: 'special.elemental_aug_blazing_hand_grapple_fire',
        value: 0,
        source: 'Elemental Augmentation: Blazing Hand',
      },
    ],
  },

  // Hoarfrost Bones
  {
    id: 'wondrous-elemental-augmentation-hoarfrost-bones',
    name: 'Elemental Augmentation: Hoarfrost Bones',
    category: 'wondrous',
    source: 'Pathfinder Unchained',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 13,
    slot: 'none',

    price: 85000,
    weight: 0,

    description:
      "The wearer's bones are replaced with ice. The wearer gains fast healing 1 while in cold or " +
      'water environments and a +1 caster level bonus to cold spells. However, the wearer cannot heal ' +
      'naturally and becomes vulnerable to sonic damage.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['ice body', 'simulacrum'],
      specialRequirements: ['Creator must have 13 ranks in Knowledge (planes)'],
      cost: 42500,
    },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'continuous',
    effects: [
      {
        type: 'special',
        target: 'special.elemental_aug_hoarfrost_fast_healing',
        value: 0,
        source: 'Elemental Augmentation: Hoarfrost Bones',
      },
      {
        type: 'bonus',
        bonusType: 'untyped',
        target: 'spell.caster_level',
        value: 1,
        source: 'Elemental Augmentation: Hoarfrost Bones',
        condition: {
          type: 'custom',
          params: { descriptor: 'cold' },
          description: 'cold spells only',
        },
      },
    ],
  },

  // Quicksilver Blood
  {
    id: 'wondrous-elemental-augmentation-quicksilver-blood',
    name: 'Elemental Augmentation: Quicksilver Blood',
    category: 'wondrous',
    source: 'Pathfinder Unchained',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 9,
    slot: 'none',

    price: 62000,
    weight: 0,

    description:
      "The wearer's blood is replaced with quicksilver. The wearer automatically stabilizes at " +
      'negative hit points. The wearer is immune to the bleed condition and damage from wounding weapons, ' +
      'immune to ability damage from blood drain, and is treated as a ferrous creature.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['adhesive blood', 'lesser restoration'],
      specialRequirements: ['Creator must have 9 ranks in Knowledge (planes)'],
      cost: 31000,
    },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'continuous',
    effects: [
      {
        type: 'special',
        target: 'special.immunity_bleed',
        value: 1,
        source: 'Elemental Augmentation: Quicksilver Blood',
      },
      {
        type: 'special',
        target: 'special.elemental_aug_quicksilver_auto_stabilize',
        value: 0,
        source: 'Elemental Augmentation: Quicksilver Blood',
      },
    ],
  },

  // Smoldering Blood
  {
    id: 'wondrous-elemental-augmentation-smoldering-blood',
    name: 'Elemental Augmentation: Smoldering Blood',
    category: 'wondrous',
    source: 'Pathfinder Unchained',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ABJURATION }],
    casterLevel: 7,
    slot: 'none',

    price: 8000,
    weight: 0,

    description:
      "The wearer's blood burns. Creatures that damage the wearer with a melee attack and are within " +
      '5 feet take 1d6 fire damage. The wearer benefits from endure elements. However, the wearer takes ' +
      'a -4 penalty on saving throws against effects that cause fatigue or exhaustion.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['endure elements', 'fire shield'],
      specialRequirements: ['Creator must have 7 ranks in Knowledge (planes)'],
      cost: 4000,
    },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'continuous',
    effects: [
      {
        type: 'special',
        target: 'special.elemental_aug_smoldering_retaliatory_fire',
        value: 0,
        source: 'Elemental Augmentation: Smoldering Blood',
      },
      {
        type: 'special',
        target: 'special.elemental_aug_smoldering_endure_elements',
        value: 0,
        source: 'Elemental Augmentation: Smoldering Blood',
      },
      {
        type: 'penalty',
        target: 'save.all',
        value: 4,
        source: 'Elemental Augmentation: Smoldering Blood',
        condition: {
          type: 'custom',
          params: { condition: 'fatigue_or_exhaustion_effects' },
          description: 'only against effects causing fatigue or exhaustion',
        },
      },
    ],
  },

  // Vaporous Lungs
  {
    id: 'wondrous-elemental-augmentation-vaporous-lungs',
    name: 'Elemental Augmentation: Vaporous Lungs',
    category: 'wondrous',
    source: 'Pathfinder Unchained',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ABJURATION }],
    casterLevel: 7,
    slot: 'none',

    price: 10800,
    weight: 0,

    description:
      'Once per day, the wearer can inhale a cloud or fog effect within 20 feet, negating mundane ' +
      'versions or dispelling magical ones (dispel check 1d20+7). The wearer can hold their breath to ' +
      'contain the effect and expel it as a free action.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['gust of wind'],
      specialRequirements: ['Creator must have 7 ranks in Knowledge (planes)'],
      cost: 5400,
    },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [
      {
        type: 'special',
        target: 'special.elemental_aug_vaporous_lungs_inhale',
        value: 0,
        source: 'Elemental Augmentation: Vaporous Lungs',
      },
    ],
  },

  // Whirlpool Maw
  {
    id: 'wondrous-elemental-augmentation-whirlpool-maw',
    name: 'Elemental Augmentation: Whirlpool Maw',
    category: 'wondrous',
    source: 'Pathfinder Unchained',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 7,
    slot: 'none',

    price: 19000,
    weight: 0,

    description:
      "The wearer's maw can swallow unattended objects up to 10 cubic feet and store them in an " +
      'extradimensional space (one item at a time). Retrieval is a full-round action. The augmentation ' +
      'also halves the duration for which the wearer can hold their breath.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['aqueous orb', 'shrink item'],
      specialRequirements: ['Creator must have 7 ranks in Knowledge (planes)'],
      cost: 9500,
    },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [
      {
        type: 'special',
        target: 'special.elemental_aug_whirlpool_maw_storage',
        value: 0,
        source: 'Elemental Augmentation: Whirlpool Maw',
      },
    ],
  },

  // ---- 10. Elemental Storing Stone --------------------------------------------
  {
    id: 'wondrous-elemental-storing-stone',
    name: 'Elemental Storing Stone',
    category: 'wondrous',
    source: 'Magical Marketplace',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.EVOCATION }],
    casterLevel: 3,
    slot: 'none',

    price: 900,
    weight: 0.5,

    description:
      'This river rock with white marble veins activates once per day. When the wielder takes 10 or ' +
      'more points of energy damage of a single type (acid, cold, electricity, fire, or sonic), the ' +
      'stone becomes charged with that energy. Once charged, the stone can be hurled as a ranged touch ' +
      'attack (range 60 feet) dealing 2d6 damage of the stored energy type. Unused charges dissipate ' +
      'at the start of the following day.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['elemental touch'],
      cost: 450,
    },
    physicalStats: {
      hardness: 8,
      hitPoints: 5,
      breakDC: 16,
    },

    activationCategory: 'use_activated',
    activationAction: 'standard',

    effects: [
      {
        type: 'special',
        target: 'special.elemental_storing_stone_charge_and_ray',
        value: 0,
        source: 'Elemental Storing Stone',
      },
    ],
  },

  // ---- 11. Elixir of Two Worlds -----------------------------------------------
  {
    id: 'wondrous-elixir-of-two-worlds',
    name: 'Elixir of Two Worlds',
    category: 'wondrous',
    source: 'Aquatic Adventures',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 15,
    slot: 'none',

    price: 5000,
    weight: 0.5,

    description:
      'This elixir must be consumed underwater (using a potion sponge or potion sureseal bladder). ' +
      'A land-dwelling humanoid who drinks it has their legs permanently transformed into a tail fin, ' +
      'gaining a land speed of 5 feet and a swim speed of 40 feet, as well as the aquatic subtype. ' +
      'A merfolk or other sea creature gains humanoid legs with a land speed of 30 feet and loses the ' +
      'aquatic subtype. The effect is permanent and can only be reversed by miracle, wish, or another ' +
      'elixir of two worlds. This elixir is incompatible with alchemical allocation.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['fins to feet', 'polymorph any object'],
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
        target: 'special.elixir_two_worlds_transformation',
        value: 0,
        source: 'Elixir of Two Worlds',
      },
    ],
  },

  // ---- 12. Elixir, Honeytongue ------------------------------------------------
  // NOT FOUND on d20pfsrd or AoN under that name; likely in a third-party or
  // very obscure Paizo source. Flagged below.
  // NOT FOUND: Elixir, Honeytongue

  // ---- 13. Elixir of Agility --------------------------------------------------
  {
    id: 'wondrous-elixir-of-agility',
    name: 'Elixir of Agility',
    category: 'wondrous',
    source: 'Potions and Poisons',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'none',

    price: 450,
    weight: 0,

    description:
      'This square flask contains an effervescent green liquid. When consumed, it enhances the ' +
      "drinker's physical nimbleness for 30 minutes, increasing base speed by 5 feet and granting " +
      'a +2 competence bonus on Acrobatics checks and initiative checks.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["cat's grace", 'heightened awareness'],
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
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.acrobatics',
        value: 2,
        source: 'Elixir of Agility',
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'initiative',
        value: 2,
        source: 'Elixir of Agility',
      },
      {
        type: 'bonus',
        bonusType: 'untyped',
        target: 'speed.base',
        value: 5,
        source: 'Elixir of Agility',
      },
    ],
  },

  // ---- 14. Elixir of Amnesia --------------------------------------------------
  {
    id: 'wondrous-elixir-of-amnesia',
    name: 'Elixir of Amnesia',
    category: 'wondrous',
    source: 'Inner Sea Intrigue',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 5,
    slot: 'none',

    price: 500,
    weight: 0,

    description:
      'When consumed, this elixir allows the drinker to selectively erase one specific event or piece ' +
      'of information from their memory (such as a password, secret identity, or location). A Will save ' +
      '(DC 14) negates the effect. Forgotten memories can only be restored by a modify memory spell or ' +
      'similar magic. This is a mind-affecting compulsion enchantment.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['modify memory'],
      cost: 250,
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
        target: 'special.elixir_amnesia_selective_forget',
        value: 0,
        source: 'Elixir of Amnesia',
      },
    ],
  },

  // ---- 15. Elixir of Concordance ----------------------------------------------
  {
    id: 'wondrous-elixir-of-concordance',
    name: 'Elixir of Concordance',
    category: 'wondrous',
    source: "Pathfinder #125: Tower of the Drowned Dead",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION }],
    casterLevel: 7,
    slot: 'none',

    price: 1100,
    weight: 0,

    description:
      'This small vial of shimmering blue-gold liquid grants the drinker a luminous aura for 1 minute. ' +
      'All arcane spells cast during this time gain a +1 enhancement bonus to the DC of saving throws ' +
      'against them. Additionally, each arcane spell cast can be modified by one of the following ' +
      'metamagic feats without increasing the spell level or casting time: Enlarge Spell, Extend Spell, ' +
      'Silent Spell, or Still Spell. The caster chooses which metamagic to apply per spell cast.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['arcane concordance'],
      cost: 650,
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
        target: 'spell.save_dc',
        value: 1,
        source: 'Elixir of Concordance',
        condition: {
          type: 'custom',
          params: { spellType: 'arcane' },
          description: 'arcane spells only',
        },
      },
      {
        // Free metamagic application per arcane spell cast
        type: 'special',
        target: 'special.elixir_concordance_free_metamagic',
        value: 0,
        source: 'Elixir of Concordance',
      },
    ],
  },

  // ---- 16. Elixir of Countless Eyes -------------------------------------------
  {
    id: 'wondrous-elixir-of-countless-eyes',
    name: 'Elixir of Countless Eyes',
    category: 'wondrous',
    source: 'Potions and Poisons',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'none',

    price: 1200,
    weight: 0,

    description:
      "This bubbling green liquid causes eyes to sprout all over the drinker's body for 1 hour. " +
      'The drinker cannot be flanked during this time and gains a +2 competence bonus on initiative ' +
      'checks.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['countless eyes'],
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
        target: 'special.elixir_countless_eyes_no_flank',
        value: 0,
        source: 'Elixir of Countless Eyes',
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'initiative',
        value: 2,
        source: 'Elixir of Countless Eyes',
      },
    ],
  },

  // ---- 17. Elixir of Darksight ------------------------------------------------
  {
    id: 'wondrous-elixir-of-darksight',
    name: 'Elixir of Darksight',
    category: 'wondrous',
    source: 'Advanced Race Guide',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 6,
    slot: 'none',

    price: 1200,
    weight: 0,

    description:
      "This potion doubles the range of the drinker's darkvision and also enables the drinker to see " +
      'through deeper darkness when using darkvision. The effect lasts 1 hour.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['darkvision', 'deeper darkness'],
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
        target: 'special.elixir_darksight_double_range',
        value: 0,
        source: 'Elixir of Darksight',
      },
      {
        type: 'special',
        target: 'special.elixir_darksight_see_deeper_darkness',
        value: 0,
        source: 'Elixir of Darksight',
      },
    ],
  },

  // ---- 18. Elixir of Dragon Breath --------------------------------------------
  {
    id: 'wondrous-elixir-of-dragon-breath',
    name: 'Elixir of Dragon Breath',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION }],
    casterLevel: 7,
    slot: 'none',

    price: 1400,
    weight: 0,

    description:
      "This draught grants the drinker a single use of a dragon's breath weapon. As a standard action, " +
      'the drinker exhales a breath weapon dealing 7d6 points of energy damage. The type of breath ' +
      'weapon depends on the elixir: acid line (black/copper), electricity line (blue/bronze), fire line ' +
      '(brass), acid cone (green), fire cone (gold/red), or cold cone (silver/white). Lines are 30 feet ' +
      'long; cones are 15 feet. Targets may attempt a DC 16 Reflex save for half damage. The effect ' +
      'expires after 1 hour if unused.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["dragon's breath"],
      cost: 700,
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
        target: 'special.elixir_dragon_breath_weapon',
        value: 0,
        source: 'Elixir of Dragon Breath',
      },
    ],
  },

  // ---- 19. Elixir of Elemental Protection -------------------------------------
  {
    id: 'wondrous-elixir-of-elemental-protection',
    name: 'Elixir of Elemental Protection',
    category: 'wondrous',
    source: "Dragonslayer's Handbook",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ABJURATION }],
    casterLevel: 9,
    slot: 'none',

    price: 1800,
    weight: 0,

    description:
      'This swirling, iridescent liquid grants the drinker 100 points of protection from the first ' +
      'type of elemental damage (acid, cold, electricity, fire, or sonic) they take after drinking it. ' +
      'Any remaining protection expires 1 hour after consumption.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['protection from energy'],
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
        target: 'special.elixir_elemental_protection_100pts',
        value: 0,
        source: 'Elixir of Elemental Protection',
      },
    ],
  },

  // ---- 20. Elixir of Emulation ------------------------------------------------
  {
    id: 'wondrous-elixir-of-emulation',
    name: 'Elixir of Emulation',
    category: 'wondrous',
    source: 'Inner Sea Temples',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 9,
    slot: 'none',

    price: 4000,
    weight: 0,

    description:
      'Before consuming this elixir, the user must add biological material (hair, skin, fur, blood, or ' +
      'nail clippings) from a single living, corporeal, Small or Medium creature. The elixir remains ' +
      'viable for 24 hours after the material is added. When consumed, the drinker assumes the shape of ' +
      'the donor creature, functioning as alter self. The drinker gains a +20 bonus on Disguise checks ' +
      'to impersonate the donor and suffers no penalties for impersonating a different gender, race, or ' +
      'age. Once during the duration, the drinker may attempt to access information the donor possessed ' +
      'when harvested (functioning as harvest knowledge). Duration: 2d6+12 hours.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['detect thoughts', 'polymorph'],
      cost: 2000,
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
        bonusType: 'untyped',
        target: 'skill.disguise',
        value: 20,
        source: 'Elixir of Emulation',
        condition: {
          type: 'custom',
          params: { situation: 'impersonating_donor_creature' },
          description: 'only when impersonating the donor creature',
        },
      },
      {
        type: 'special',
        target: 'special.elixir_emulation_alter_self',
        value: 0,
        source: 'Elixir of Emulation',
      },
      {
        type: 'special',
        target: 'special.elixir_emulation_harvest_knowledge',
        value: 0,
        source: 'Elixir of Emulation',
      },
    ],
  },

  // ---- 21. Elixir of Fire Breath ----------------------------------------------
  {
    id: 'wondrous-elixir-of-fire-breath',
    name: 'Elixir of Fire Breath',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION }],
    casterLevel: 11,
    slot: 'none',

    price: 1100,
    weight: 0,

    description:
      'This bubbling liquid grants the drinker the ability to breathe fire. The consumer can unleash up ' +
      'to three bursts of flame, each dealing 4d6 fire damage to a single target within 25 feet. Targets ' +
      'may attempt a DC 13 Reflex save to take half damage. Any unused fire blasts expire 1 hour after ' +
      'consumption.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['scorching ray'],
      cost: 550,
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
        target: 'special.elixir_fire_breath_3_bursts',
        value: 0,
        source: 'Elixir of Fire Breath',
      },
    ],
  },

  // ---- 22. Elixir of Forceful Exhalation --------------------------------------
  {
    id: 'wondrous-elixir-of-forceful-exhalation',
    name: 'Elixir of Forceful Exhalation',
    category: 'wondrous',
    source: 'Advanced Race Guide',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.EVOCATION }],
    casterLevel: 3,
    slot: 'none',

    price: 900,
    weight: 1,

    description:
      'This sky-blue fizzy liquid makes the drinker feel buoyant yet bloated. It grants a +4 competence ' +
      'bonus on Acrobatics checks made to jump and on Swim checks for up to 1 hour. As a standard action, ' +
      'the drinker can exhale a 15-foot gust of wind effect up to three times before the elixir depletes. ' +
      'Unused gusts dissipate after 1 hour.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['gust of wind'],
      cost: 450,
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
        bonusType: 'competence',
        target: 'skill.acrobatics',
        value: 4,
        source: 'Elixir of Forceful Exhalation',
        condition: {
          type: 'custom',
          params: { situation: 'jumping' },
          description: 'only for Acrobatics checks to jump',
        },
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.swim',
        value: 4,
        source: 'Elixir of Forceful Exhalation',
      },
      {
        type: 'special',
        target: 'special.elixir_forceful_exhalation_gust_of_wind',
        value: 0,
        source: 'Elixir of Forceful Exhalation',
      },
    ],
  },

  // ---- 23. Elixir of Hiding ---------------------------------------------------
  {
    id: 'wondrous-elixir-of-hiding',
    name: 'Elixir of Hiding',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ILLUSION }],
    casterLevel: 5,
    slot: 'none',

    price: 250,
    weight: 0,

    description:
      'When consumed, this elixir grants the drinker an instinctive talent for concealment, providing ' +
      'a +10 competence bonus on Stealth checks for 1 hour.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['invisibility'],
      cost: 125,
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
        target: 'skill.stealth',
        value: 10,
        source: 'Elixir of Hiding',
      },
    ],
  },

  // ---- 24. Elixir of Last Will ------------------------------------------------
  {
    id: 'wondrous-elixir-of-last-will',
    name: 'Elixir of Last Will',
    category: 'wondrous',
    source: 'Tears at Bitter Manor',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.NECROMANCY }],
    casterLevel: 1,
    slot: 'none',

    price: 150,
    weight: 0,

    description:
      'When consumed, this gray liquid activates the next time the drinker falls below 0 hit points ' +
      'within 24 hours. At that moment, the drinker exhales a sliver of consciousness as an immediate ' +
      'action, guiding one ally within 30 feet and granting them a +2 luck bonus on their next attack ' +
      'roll, AC, or skill check. The bonus must be used within 1 round. Only one elixir functions per ' +
      '24-hour period.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['guidance'],
      cost: 75,
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
        target: 'special.elixir_last_will_triggered_bonus',
        value: 0,
        source: 'Elixir of Last Will',
      },
    ],
  },

  // ---- 25. Elixir of Love -----------------------------------------------------
  {
    id: 'wondrous-elixir-of-love',
    name: 'Elixir of Love',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 4,
    slot: 'none',

    price: 150,
    weight: 0,

    description:
      'This potion causes the drinker to become enraptured with the first creature they see after ' +
      'consuming it, functioning as the charm person spell. The target must be a humanoid of Medium ' +
      'or smaller size; a Will save (DC 14) negates the effect. The enchantment lasts 1d3 hours.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['charm person'],
      cost: 75,
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
        target: 'special.elixir_love_charm_person',
        value: 0,
        source: 'Elixir of Love',
      },
    ],
  },
];
