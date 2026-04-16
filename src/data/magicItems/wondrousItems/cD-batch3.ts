import type { WondrousItemDefinition } from '@/types/magicItems';
import { AuraStrength, MagicSchool } from '@/types/equipment';

export const wondrousItemsCD3: WondrousItemDefinition[] = [
  // ---- 51. Chalice of Poison Weeping ------------------------------------------
  {
    id: 'wondrous-chalice-of-poison-weeping',
    name: 'Chalice of Poison Weeping',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 7,
    slot: 'none',

    price: 8000,
    weight: 1,

    description:
      'A silver chalice featuring unicorn handles. Once per day the user can press the chalice to a ' +
      'poisoned creature and speak a command word, functioning as neutralize poison (CL 7). The expelled ' +
      'toxins are collected in the chalice as tears; if the poison has a tangible form it can be harvested ' +
      'as a single dose with its DC reduced by 4.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['fabricate', 'neutralize poison'],
      cost: 4000,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 5,
      breakDC: 15,
    },

    activationCategory: 'use_activated',
    activationAction: 'standard',

    effects: [
      {
        type: 'special',
        target: 'special.neutralize_poison',
        value: 1,
        source: 'Chalice of Poison Weeping',
      },
      {
        type: 'special',
        target: 'special.harvest_poison',
        value: 0,
        source: 'Chalice of Poison Weeping',
      },
    ],
  },

  // ---- 52. Chaos Emerald -------------------------------------------------------
  {
    id: 'wondrous-chaos-emerald',
    name: 'Chaos Emerald',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.ABJURATION }],
    casterLevel: 19,
    slot: 'none',

    price: 25000,
    weight: 1,

    description:
      'An uncut lustrous green gemstone roughly the size of a human fist. Non-chaotic creatures holding or ' +
      'carrying this gem gain one negative level that persists until the item is dropped and cannot be removed ' +
      'by restoration or similar magic. The gem holds up to 10 charges and regains 1d3-1 charges each day; ' +
      'newly created gems have 1d6+2 charges. Spending charges activates spell-like abilities: ' +
      '1 charge — entropic shield, lesser confusion, or magic circle against law; ' +
      '2 charges — chaos hammer.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['chaos hammer', 'entropic shield', 'confusion', 'magic circle against law'],
      specialRequirements: ['Creator must be chaotic'],
      cost: 12500,
    },
    physicalStats: {
      hardness: 8,
      hitPoints: 5,
      breakDC: 20,
    },

    activationCategory: 'command_word',
    activationAction: 'standard',

    charges: { maximum: 10, rechargeMethod: 'Regains 1d3-1 charges per day' },

    effects: [
      {
        type: 'special',
        target: 'special.negative_level_non_chaotic',
        value: 1,
        source: 'Chaos Emerald',
      },
    ],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'entropic_shield',
            spellName: 'Entropic Shield',
            casterLevel: 19,
            activationAction: 'standard',
          },
          {
            spellId: 'confusion_lesser',
            spellName: 'Lesser Confusion',
            casterLevel: 19,
            activationAction: 'standard',
          },
          {
            spellId: 'magic_circle_against_law',
            spellName: 'Magic Circle against Law',
            casterLevel: 19,
            activationAction: 'standard',
          },
        ],
      },
      {
        spells: [
          {
            spellId: 'chaos_hammer',
            spellName: 'Chaos Hammer',
            casterLevel: 19,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // ---- 53. Charlatan's Cope ---------------------------------------------------
  {
    id: 'wondrous-charlatans-cope',
    name: "Charlatan's Cope",
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ILLUSION }],
    casterLevel: 3,
    slot: 'body',

    price: 4800,
    weight: 2,

    description:
      'This plush hooded robe with gold trim creates flashy magical effects (bright lights and sounds) ' +
      'whenever the wearer casts spells, increasing the DC to identify those spells via Spellcraft by 10. ' +
      'Once per day as a move action the wearer can cause a dazzling burst that forces creatures within ' +
      '30 feet to succeed at a DC 13 Will save or be blinded for 1d4+1 rounds.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['ghost sound', 'pyrotechnics', 'silent image'],
      cost: 2400,
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
        target: 'special.spellcraft_identify_dc_increase',
        value: 10,
        source: "Charlatan's Cope",
      },
      {
        type: 'special',
        target: 'special.dazzling_burst',
        value: 0,
        source: "Charlatan's Cope",
      },
    ],
  },

  // ---- 54. Charm of Aluum Control ---------------------------------------------
  {
    id: 'wondrous-charm-of-aluum-control',
    name: 'Charm of Aluum Control',
    category: 'wondrous',
    source: "Pathfinder Chronicles: Dark Markets, A Guide to Katapesh",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 20,
    slot: 'neck',

    price: 20000,
    weight: 0,

    description:
      'This pendant contains a glowing crystal identical to those found in aluums. When attuned (by a ' +
      'pactmaster), the wearer can command any generic aluum within 100 feet as though using dominate person ' +
      'on a humanoid. Aluums under this control will not harm other aluums, pactmasters, or other attuned ' +
      'charm wearers. The wearer cannot access an aluum\'s senses. If multiple wearers issue conflicting ' +
      'orders, they make opposed Will saves to determine which commands take precedence.',

    construction: {
      feats: ['Craft Construct', 'Craft Wondrous Item'],
      spells: ['soul bind'],
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
        target: 'special.aluum_control',
        value: 0,
        source: 'Charm of Aluum Control',
      },
    ],
  },

  // ---- 55. Charm, Fortunate ---------------------------------------------------
  {
    id: 'wondrous-charm-fortunate',
    name: 'Charm, Fortunate',
    category: 'wondrous',
    source: 'Pathfinder Society Field Guide',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.EVOCATION }],
    casterLevel: 5,
    slot: 'neck',

    price: 3000,
    weight: 0,

    description:
      'This neck-worn charm grants the wearer one opportunity per day to reroll a skill check or ' +
      'concentration check after learning the result. The new result must be accepted regardless of ' +
      'whether it improves upon the original. This ability cannot be used on checks that have already ' +
      'been affected by another reroll effect.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['divine favor'],
      cost: 1500,
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
        target: 'special.reroll_skill_or_concentration',
        value: 1,
        source: 'Charm, Fortunate',
      },
    ],
  },

  // ---- 56. Charm, Halflight ---------------------------------------------------
  {
    id: 'wondrous-charm-halflight',
    name: 'Charm, Halflight',
    category: 'wondrous',
    source: 'Pathfinder Adventure Path #63: The Asylum Stone',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 3,
    slot: 'none',

    price: 2500,
    weight: 0,

    description:
      'A small crystal pendant on a leather cord that sheds light equivalent to a torch. Once per day ' +
      'the bearer can grasp the amulet and request assistance, immediately alerting the three nearest ' +
      'members of its associated faction to the pendant\'s exact location (within one mile), functioning ' +
      'similarly to locate object.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['light', 'locate object'],
      cost: 1250,
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
        target: 'special.alert_faction_members',
        value: 0,
        source: 'Charm, Halflight',
      },
    ],
  },

  // ---- 57. Charm, Halflight Greater -------------------------------------------
  {
    id: 'wondrous-charm-halflight-greater',
    name: 'Charm, Halflight Greater',
    category: 'wondrous',
    source: 'Pathfinder Adventure Path #63: The Asylum Stone',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 9,
    slot: 'neck',

    price: 20000,
    weight: 0,

    description:
      'A dark blue crystal amulet embossed with a golden arch and suspended from a black cord, granted ' +
      'only to those who have saved the life of a faction representative or performed significant service. ' +
      'The charm grants darkvision 60 feet and a +2 bonus on initiative checks while underground. Once per ' +
      'year the wearer may summon the specific representative imprinted on the charm to an adjacent square ' +
      '(same plane only), along with that representative\'s standard gear; the summoned individual is not ' +
      'compelled to obey.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['darkvision', 'teleport'],
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
        target: 'special.darkvision',
        value: 60,
        source: 'Charm, Halflight Greater',
      },
      {
        type: 'bonus',
        bonusType: 'untyped',
        target: 'initiative',
        value: 2,
        source: 'Charm, Halflight Greater',
        condition: {
          type: 'custom',
          params: { environment: 'underground' },
          description: 'while in underground areas',
        },
      },
      {
        type: 'special',
        target: 'special.summon_representative',
        value: 0,
        source: 'Charm, Halflight Greater',
      },
    ],
  },

  // ---- 58. Charm, Hexbiter ----------------------------------------------------
  {
    id: 'wondrous-charm-hexbiter',
    name: 'Charm, Hexbiter',
    category: 'wondrous',
    source: "Pathfinder Player Companion: Merchant's Manifest",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION }],
    casterLevel: 3,
    slot: 'neck',

    price: 180,
    weight: 0,

    description:
      'This walrus-shaped charm carved from ivory or bone is worn at the neck or shoulder. When the ' +
      'wearer is targeted by a witch\'s hex or curse effect, they may activate the charm as an immediate ' +
      'action to gain a +3 resistance bonus on the saving throw. If the curse takes effect despite the ' +
      'save, the wearer gains a +2 bonus on subsequent saving throws against that curse for up to one ' +
      'week and a +3 bonus on caster level checks to remove the curse. The charm functions once, after ' +
      'which its magic is permanently expended.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['resistance'],
      cost: 90,
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
        target: 'special.hexbiter_save_bonus',
        value: 0,
        source: 'Charm, Hexbiter',
      },
    ],
  },

  // ---- 59. Charm, Lynx-Eye ----------------------------------------------------
  {
    id: 'wondrous-charm-lynx-eye',
    name: 'Charm, Lynx-Eye',
    category: 'wondrous',
    source: "Pathfinder Player Companion: Merchant's Manifest",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [
      { strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION },
      { strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION },
    ],
    casterLevel: 3,
    slot: 'neck',

    price: 350,
    weight: 0,

    description:
      'An amber spherical charm with a natural inclusion resembling an eye. It occupies the neck or ' +
      'shoulder slot and can share that slot with one other magic item. The charm is single-use. ' +
      'As a swift action it grants low-light vision for 3 minutes. As a standard action it grants either ' +
      'darkvision 60 feet or see invisibility for 3 rounds.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['darkvision', 'see invisibility'],
      cost: 175,
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
        target: 'special.lynx_eye_vision',
        value: 0,
        source: 'Charm, Lynx-Eye',
      },
    ],
  },

  // ---- 60. Charm, Saint's Protection ------------------------------------------
  {
    id: 'wondrous-charm-saints-protection',
    name: "Charm, Saint's Protection",
    category: 'wondrous',
    source: 'Pathfinder Player Companion: Magical Marketplace',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 3,
    slot: 'wrists',

    price: 1500,
    weight: 0,

    description:
      'A copper disc worn on a bracelet depicting a religious figure. The wearer receives a +1 ' +
      'deflection bonus to AC and a +1 resistance bonus on saving throws, but these bonuses apply ' +
      'only against attacks or effects created by extraplanar creatures.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['protection from chaos'],
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
        bonusType: 'deflection',
        target: 'ac.deflection',
        value: 1,
        source: "Charm, Saint's Protection",
        condition: {
          type: 'target_type',
          params: { creatureType: 'extraplanar' },
          description: 'against attacks or effects from extraplanar creatures only',
        },
      },
      {
        type: 'bonus',
        bonusType: 'resistance',
        target: 'save.all',
        value: 1,
        source: "Charm, Saint's Protection",
        condition: {
          type: 'target_type',
          params: { creatureType: 'extraplanar' },
          description: 'against attacks or effects from extraplanar creatures only',
        },
      },
    ],
  },

  // ---- 61. Charmer's Kiss -----------------------------------------------------
  {
    id: 'wondrous-charmers-kiss',
    name: "Charmer's Kiss",
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 7,
    slot: 'none',

    price: 750,
    weight: 0,

    description:
      'A colored wax stick in a wooden cylinder applied to the lips as a standard action. Each dose ' +
      'lasts 4 hours or until delivered. The wearer can transfer the effect to a willing target or via ' +
      'melee touch attack; the target must succeed at a DC 16 Will save or be affected by charm monster ' +
      'for 7 minutes. Creatures of a different type than the user gain a +2 bonus on the save. ' +
      'Each stick contains 3 doses. This creates a mind-affecting charm and poison effect.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['charm monster'],
      cost: 375,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'use_activated',
    activationAction: 'standard',

    charges: { maximum: 3 },

    effects: [
      {
        type: 'special',
        target: 'special.charm_monster_touch',
        value: 0,
        source: "Charmer's Kiss",
      },
    ],
  },

  // ---- 62. Chest, Blood Chest -------------------------------------------------
  {
    id: 'wondrous-blood-chest',
    name: 'Blood Chest',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 9,
    slot: 'none',

    price: 42000,
    weight: 50,

    description:
      'A medium-sized chest of red iron holding 4 cubic feet of volume. A monstrous fanged face ' +
      'surrounds the lock, requiring a hand to enter the mouth to access it. The chest has a permanent ' +
      'arcane lock and magical resilience equivalent to a wall of force. The chest attunes to a specific ' +
      'owner (changeable via command word). When any key is inserted the fanged mouth bites the inserting ' +
      'hand for 1 point of damage; the chest opens only if the hand belongs to the attuned owner. A ' +
      'successful DC 50 Disable Device check bypasses the teeth entirely.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['arcane lock', 'vampiric touch', 'wall of force'],
      cost: 21000,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 30,
      breakDC: 28,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.blood_chest_attunement',
        value: 0,
        source: 'Blood Chest',
      },
    ],
  },

  // ---- 63. Chest, Chest of Defending ------------------------------------------
  {
    id: 'wondrous-chest-of-defending',
    name: 'Chest of Defending',
    category: 'wondrous',
    source: 'Lost Treasures',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 12,
    slot: 'none',

    price: 29300,
    weight: 100,

    description:
      'A large wooden chest (over 5 feet long and 3 feet wide and tall) with drawers and compartments ' +
      'holding 6 cubic feet of interior space. It has permanent alarm and arcane lock spells that ' +
      'recognize a specific creature via command word. When the alarm triggers, the chest transforms ' +
      'into a Medium wood golem that attacks the intruder, reverting to chest form after the threat is ' +
      'defeated. Contents remain unharmed during transformation.',

    construction: {
      feats: ['Craft Construct', 'Craft Wondrous Item'],
      spells: ['alarm', 'animate objects', "cat's grace", 'geas/quest', 'limited wish'],
      specialRequirements: ['Minimum caster level 12th', 'Successful DC 17 Craft (carpentry) check'],
      cost: 14800,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 30,
      breakDC: 23,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.golem_guardian_transform',
        value: 0,
        source: 'Chest of Defending',
      },
    ],
  },

  // ---- 64. Chest, Chest of the Mercane ----------------------------------------
  {
    id: 'wondrous-chest-of-the-mercane',
    name: 'Chest of the Mercane',
    category: 'wondrous',
    source: 'Lost Treasures',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 9,
    slot: 'none',

    price: 30000,
    weight: 250,

    description:
      'A gem-encrusted golden chest (4 feet long, 2 feet wide, 4 feet tall) engraved with symbols of ' +
      'wealth and trade, worth 5,000 gp in materials alone. Functioning similarly to secret chest, it ' +
      'allows retrieval and return of its extradimensional contents once per day each. When the chest is ' +
      'sent back to its mercane master, there is a chance the mercane purchases any new magical items ' +
      'inside, paying 40–75% of standard value; notes may be sent but receive no responses.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['contact other plane', 'secret chest'],
      cost: 15000,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 40,
      breakDC: 25,
    },

    activationCategory: 'use_activated',
    activationAction: 'standard',

    effects: [
      {
        type: 'special',
        target: 'special.extradimensional_storage',
        value: 0,
        source: 'Chest of the Mercane',
      },
      {
        type: 'special',
        target: 'special.mercane_trade',
        value: 0,
        source: 'Chest of the Mercane',
      },
    ],
  },

  // ---- 65. Chest, Corsair's Coffer --------------------------------------------
  {
    id: 'wondrous-corsairs-coffer',
    name: "Corsair's Coffer",
    category: 'wondrous',
    source: 'Lost Treasures',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 11,
    slot: 'none',

    price: 24000,
    weight: 250,

    description:
      'A large lacquered chest with gold-plated steel bindings and three locking hasps. It can be ' +
      'commanded to bury itself in soft terrain (dirt, soil, sand) to depths of 10–30 feet at a rate of ' +
      '1 minute per 10 feet, stopping at its desired depth, solid stone, or obstructions. It can be ' +
      'commanded to resurface from within 5 feet of its burial location. Its extradimensional interior ' +
      'holds up to 3,000 pounds and 500 cubic feet; contents do not affect the chest\'s weight and ' +
      'require a full-round action to retrieve. The interior holds sufficient air for living creatures ' +
      'for approximately 20 minutes. Magic items inside provide no benefits to carriers.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['move earth', 'secret chest'],
      cost: 12000,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 40,
      breakDC: 25,
    },

    activationCategory: 'command_word',
    activationAction: 'standard',

    effects: [
      {
        type: 'special',
        target: 'special.extradimensional_storage',
        value: 0,
        source: "Corsair's Coffer",
      },
      {
        type: 'special',
        target: 'special.burrowing_chest',
        value: 0,
        source: "Corsair's Coffer",
      },
    ],
  },

  // ---- 66. Chest, Flying Chest ------------------------------------------------
  {
    id: 'wondrous-flying-chest',
    name: 'Flying Chest',
    category: 'wondrous',
    source: 'Lost Treasures',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 10,
    slot: 'none',

    price: 19000,
    weight: 100,

    description:
      'A hinged reinforced wooden barrel with a saddle and a locked keyhole. The interior holds 6 cubic ' +
      'feet. One Medium creature or two Small creatures may ride it. The chest flies as though affected ' +
      'by overland flight (with a +5 bonus on Fly checks) for up to 10 hours per day. It carries up to ' +
      '300 pounds at a fly speed of 40 feet, or up to 600 pounds at 30 feet. Only exterior weight ' +
      'counts toward this limit.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['animate objects', 'overland flight', 'permanency'],
      cost: 8500,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 20,
      breakDC: 20,
    },

    activationCategory: 'command_word',
    activationAction: 'standard',

    effects: [
      {
        type: 'special',
        target: 'special.fly_speed',
        value: 40,
        source: 'Flying Chest',
      },
      {
        type: 'bonus',
        bonusType: 'untyped',
        target: 'skill.fly',
        value: 5,
        source: 'Flying Chest',
      },
    ],
  },

  // ---- 67. Chest, Tidy Trunk --------------------------------------------------
  {
    id: 'wondrous-tidy-trunk',
    name: 'Tidy Trunk',
    category: 'wondrous',
    source: 'Lost Treasures',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.UNIVERSAL }],
    casterLevel: 1,
    slot: 'none',

    price: 1000,
    weight: 25,

    description:
      'A small trunk with polished metal bindings and velvet lining. When latched, it preserves its ' +
      'contents from mold, moths, water damage, and decay (though perishables eventually spoil normally). ' +
      'After 8 hours of latching, items inside are neatly cleaned: clothing is folded, metal and ' +
      'crystalline items are polished, stains are removed, and contents are organized. Preexisting ' +
      'damage is not repaired.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['prestidigitation'],
      cost: 500,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 10,
      breakDC: 15,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.preserve_and_clean_contents',
        value: 0,
        source: 'Tidy Trunk',
      },
    ],
  },

  // ---- 68. Chime of Interruption ----------------------------------------------
  {
    id: 'wondrous-chime-of-interruption',
    name: 'Chime of Interruption',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION }],
    casterLevel: 7,
    slot: 'none',

    price: 16800,
    weight: 1,

    description:
      'This chime can be struck once every 10 minutes. Its resonant tone lasts for 3 minutes. While ' +
      'the chime resonates, any spellcaster within 30 feet who wants to cast a spell with a verbal ' +
      'component must succeed at a concentration check (DC 15 + spell level) or lose the spell. ' +
      'Spellcasters who lack the ability to make concentration checks cannot cast spells with verbal ' +
      'components at all while within range.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['shout'],
      cost: 8400,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 5,
      breakDC: 15,
    },

    activationCategory: 'use_activated',
    activationAction: 'standard',

    effects: [
      {
        type: 'special',
        target: 'special.verbal_spellcasting_disruption',
        value: 0,
        source: 'Chime of Interruption',
      },
    ],
  },

  // ---- 69. Chime of Opening ---------------------------------------------------
  {
    id: 'wondrous-chime-of-opening',
    name: 'Chime of Opening',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 11,
    slot: 'none',

    price: 3000,
    weight: 1,

    description:
      'A hollow mithral tube approximately one foot in length. When struck and pointed at a lock, lid, ' +
      'door, valve, or portal (target must be visible and known), the chime\'s vibrations open it. It ' +
      'works against physical restraints like bars, chains, and bolts; automatically dispels hold portal; ' +
      'and automatically dispels arcane lock cast by casters below 15th level. The user makes a caster ' +
      'level check against the lock\'s Disable Device DC. Each use addresses only one locking mechanism. ' +
      'The chime is negated by silence and has 10 uses before cracking.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['knock'],
      cost: 1500,
    },
    physicalStats: {
      hardness: 15,
      hitPoints: 5,
      breakDC: 18,
    },

    activationCategory: 'use_activated',
    activationAction: 'standard',

    charges: { maximum: 10 },

    effects: [
      {
        type: 'special',
        target: 'special.open_locks',
        value: 0,
        source: 'Chime of Opening',
      },
    ],
  },

  // ---- 70. Chime of Resounding Silence ----------------------------------------
  {
    id: 'wondrous-chime-of-resounding-silence',
    name: 'Chime of Resounding Silence',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION }],
    casterLevel: 7,
    slot: 'none',

    price: 10000,
    weight: 1,

    description:
      'This foot-long golden tube absorbs nearby sound when struck, functioning as silence once per day. ' +
      'The chime then vibrates silently for 5 rounds, with a cumulative 20% chance per round of releasing ' +
      'the pent-up sound as a shout spell in a random direction as a free action. The bearer can use a ' +
      'standard action to strike the vibrating chime, ending the silence early and directing the shout ' +
      'as desired. If dropped while vibrating the chime becomes broken and releases the shout randomly; ' +
      'a broken chime cannot function until repaired.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['shout', 'silence'],
      cost: 5000,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 5,
      breakDC: 15,
    },

    activationCategory: 'use_activated',
    activationAction: 'standard',

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'silence',
            spellName: 'Silence',
            casterLevel: 7,
            usesPerDay: 1,
            activationAction: 'standard',
          },
        ],
      },
      {
        spells: [
          {
            spellId: 'shout',
            spellName: 'Shout',
            casterLevel: 7,
            activationAction: 'standard',
          },
        ],
      },
    ],

    effects: [
      {
        type: 'special',
        target: 'special.resounding_silence_release',
        value: 0,
        source: 'Chime of Resounding Silence',
      },
    ],
  },

  // ---- 71. Chirurgeon Cube ----------------------------------------------------
  {
    id: 'wondrous-chirurgeon-cube',
    name: 'Chirurgeon Cube',
    category: 'wondrous',
    source: 'Pathfinder Campaign Setting: Construct Handbook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 11,
    slot: 'none',

    price: 9800,
    weight: 0,

    description:
      'A 1-inch steel cube with intricate carvings on each face. When activated it transforms into a ' +
      'Diminutive mechanical construct with wings and arms that obeys the activator\'s commands and ' +
      'understands Common but cannot speak. The construct specializes in healing other constructs; ' +
      'it provides fast healing 2 to any construct it attaches to and maintains contact with. ' +
      'Daily usage is limited to 10 minutes total, usable in 1-minute increments. If broken or ' +
      'destroyed in either form it is permanently ruined.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['animate objects', 'fly', 'make whole'],
      cost: 4900,
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
        target: 'special.construct_fast_healing',
        value: 2,
        source: 'Chirurgeon Cube',
      },
    ],
  },

  // ---- 72. Chisel of Excavation -----------------------------------------------
  {
    id: 'wondrous-chisel-of-excavation',
    name: 'Chisel of Excavation',
    category: 'wondrous',
    source: 'Pathfinder Player Companion: Blood of the Ancients',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 7,
    slot: 'none',

    price: 34000,
    weight: 3,

    description:
      'Crafted from purple worm tooth, this chisel functions as a masterwork tool for Craft and ' +
      'Profession checks involving stonework. It grants the wielder a burrow speed of 20 feet for up to ' +
      '5 minutes per day (usable in 1-minute increments). Additionally, when the wielder casts a ' +
      'spontaneous spell with both the earth descriptor and one or more metamagic feats, the total spell ' +
      'level adjustment from those metamagic feats is reduced by 1 (minimum 0).',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['stone shape'],
      cost: 17000,
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
        target: 'special.burrow_speed',
        value: 20,
        source: 'Chisel of Excavation',
      },
      {
        type: 'special',
        target: 'special.stonework_masterwork_tool',
        value: 2,
        source: 'Chisel of Excavation',
      },
      {
        type: 'special',
        target: 'special.metamagic_level_reduction_earth',
        value: 1,
        source: 'Chisel of Excavation',
      },
    ],
  },

  // ---- 73. Choker of the Beast ------------------------------------------------
  {
    id: 'wondrous-choker-of-the-beast',
    name: 'Choker of the Beast',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [
      { strength: AuraStrength.STRONG, school: MagicSchool.ABJURATION },
      { strength: AuraStrength.STRONG, school: MagicSchool.CONJURATION },
    ],
    casterLevel: 20,
    slot: 'neck',

    price: 100000,
    weight: 1,

    description:
      'This black iron necklace grants its evil-aligned wearer a +2 profane bonus on all saving throws. ' +
      'For antipaladins with touch of corruption, it increases the damage dice from 1d6 per 2 levels to ' +
      '1d8 per 2 levels. Good-aligned creatures within 120 feet suffer a -2 penalty on Perception checks ' +
      'from disconcerting bellows. Within 30 feet, good creatures must make a DC 18 Will save or become ' +
      'shaken; they may retry after 24 hours. If deliberately broken as a full-round action, the wearer ' +
      'is consumed via imprisonment and 1d6 rounds later a fiendish carnivorous blob emerges.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['imprisonment', 'summon monster IX'],
      cost: 50000,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 5,
      breakDC: 20,
    },

    activationCategory: 'continuous',

    effects: [
      {
        // +2 profane bonus on all saves — applies to evil-aligned wearers only (pipeline: check alignment)
        type: 'bonus',
        bonusType: 'profane',
        target: 'save.all',
        value: 2,
        source: 'Choker of the Beast',
        condition: {
          type: 'custom',
          params: { alignment: 'evil' },
          description: 'evil-aligned wearers only',
        },
      },
      {
        // Good-aligned creatures within 120 ft take -2 penalty on Perception checks
        type: 'special',
        target: 'special.choker_beast_perception_aura',
        value: 0,
        source: 'Choker of the Beast',
      },
      {
        // Good-aligned creatures within 30 ft: DC 18 Will save or shaken
        type: 'special',
        target: 'special.choker_beast_shaken',
        value: 0,
        source: 'Choker of the Beast',
      },
      {
        // Antipaladin touch of corruption: increases damage dice from 1d6 to 1d8 per 2 levels
        type: 'special',
        target: 'special.antipaladin_touch_corruption_upgrade',
        value: 0,
        source: 'Choker of the Beast',
      },
    ],
  },

  // ---- 74. Cinder, Jumping ----------------------------------------------------
  {
    id: 'wondrous-jumping-cinder',
    name: 'Jumping Cinder',
    category: 'wondrous',
    source: 'Pathfinder Player Companion: Goblins of Golarion',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.EVOCATION }],
    casterLevel: 3,
    slot: 'none',

    price: 300,
    weight: 1,

    description:
      'A sooty coal with embedded flint. When activated as a standard action, the cinder ignites and ' +
      'bounces randomly into adjacent squares each round for one minute. Any creature occupying a square ' +
      'where it lands must succeed at a DC 12 Reflex save or take 1d6 fire damage. Goblin tribes ' +
      'reportedly use these to randomly select individuals for undesirable tasks.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['flaming sphere'],
      cost: 150,
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
        type: 'damage',
        bonusType: 'untyped',
        target: 'damage.all',
        value: '1d6',
        source: 'Jumping Cinder',
        condition: {
          type: 'custom',
          params: { saveType: 'reflex', saveDC: 12, damageType: 'fire' },
          description: 'DC 12 Reflex save or 1d6 fire damage to creatures in landing square',
        },
      },
    ],
  },

  // ---- 75. Circlet of Mindsight -----------------------------------------------
  {
    id: 'wondrous-circlet-of-mindsight',
    name: 'Circlet of Mindsight',
    category: 'wondrous',
    source: 'Advanced Player\'s Guide',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.DIVINATION }],
    casterLevel: 9,
    slot: 'headband',

    price: 22000,
    weight: 0,

    description:
      'This gold-and-platinum filigree circlet with gem settings resembling eyes grants the wearer ' +
      'blindsense out to 30 feet, but only against thinking creatures susceptible to mind-affecting ' +
      'effects. It cannot detect undead, constructs, mindless creatures (oozes, vermin), or those ' +
      'protected by mind blank or a ring of mind shielding. Normal vision is unaffected.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['clairaudience/clairvoyance', 'detect thoughts'],
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
        target: 'special.blindsense',
        value: 30,
        source: 'Circlet of Mindsight',
        condition: {
          type: 'target_type',
          params: { creatureType: 'thinking_mind_affecting_susceptible' },
          description: 'only against thinking creatures susceptible to mind-affecting effects',
        },
      },
    ],
  },
];
