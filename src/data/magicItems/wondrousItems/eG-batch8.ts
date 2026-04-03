import type { WondrousItemDefinition } from '@/types/magicItems';
import { AuraStrength, MagicSchool } from '@/types/equipment';

export const wondrousItemsEG8: WondrousItemDefinition[] = [
  // ---- 176. Gloves, Healer's (version 1 — faint conjuration, simple Heal bonus) ------
  // Two distinct "Gloves, Healer's" exist on d20pfsrd. This version (2,500 gp) grants only
  // a competence bonus on Heal checks. The second version (3,000 gp) also adds a critical
  // confirmation bonus — see the next entry.
  {
    id: 'wondrous-gloves-healers-v1',
    name: "Gloves, Healer's",
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.CONJURATION }],
    casterLevel: 5,
    slot: 'hands',

    price: 2500,
    weight: 0,

    description:
      'These pure-white leather gloves are decorated with healing and faith symbols on their backs. ' +
      'The wearer gains a +5 competence bonus on Heal checks.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: [],
      specialRequirements: ['Creator must possess 5 ranks in Heal'],
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
        target: 'skill.heal',
        value: 5,
        source: "Gloves, Healer's",
      },
    ],
  },

  // ---- 176 (cont). Gloves, Healer's (version 2 — faint divination, Heal + crit bonus) ---
  {
    id: 'wondrous-gloves-healers-v2',
    name: "Gloves, Healer's (Combat)",
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 5,
    slot: 'hands',

    price: 3000,
    weight: 0,

    description:
      'These magical gloves enhance the wearer\'s healing abilities and fighting prowess against humanoids. ' +
      'The wearer gains a +4 competence bonus on Heal checks made to provide first aid, long-term care, and ' +
      'treat deadly wounds for living humanoid creatures. Additionally, the wearer gains a +2 competence bonus ' +
      'on rolls to confirm critical hits with unarmed strikes or natural weapons against living humanoid creatures.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['status', 'true strike'],
      specialRequirements: ['Creator must have 5 ranks in Heal'],
      cost: 1500,
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
        target: 'skill.heal',
        value: 4,
        source: "Gloves, Healer's (Combat)",
        condition: {
          type: 'target_type',
          params: { creatureType: 'humanoid' },
          description: 'when providing first aid, long-term care, or treating deadly wounds for living humanoids',
        },
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'critical_confirmation',
        value: 2,
        source: "Gloves, Healer's (Combat)",
        condition: {
          type: 'target_type',
          params: { creatureType: 'humanoid' },
          description: 'with unarmed strikes or natural weapons against living humanoid creatures',
        },
      },
    ],
  },

  // ---- 177. Gloves, Magnetist's -----------------------------------------------
  {
    id: 'wondrous-gloves-magnetists',
    name: "Gloves, Magnetist's",
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.CONJURATION }],
    casterLevel: 3,
    slot: 'hands',

    price: 6000,
    weight: 0,

    description:
      'These thin leather gloves have delicate steel wires woven throughout. Three times per day as a standard ' +
      'action, the wearer can attempt a disarm combat maneuver against a metallic item within 30 feet without ' +
      'provoking attacks of opportunity. On a successful check, the target item drops to the ground in the ' +
      "target's square and moves 1 additional square toward the wearer for every 5 by which the check exceeds " +
      'the DC. If the item would land in the wearer\'s square, the wearer may catch it with a DC 10 Dexterity ' +
      'check. The wearer must have at least one free hand to use this ability.',

    construction: {
      feats: ['Craft Wondrous Item', 'Telekinesis'],
      spells: ['telekinesis'],
      cost: 3000,
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
        target: 'special.ranged_disarm_metallic',
        value: 0,
        source: "Gloves, Magnetist's",
      },
    ],
    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'telekinesis',
            spellName: 'Telekinesis (disarm only)',
            casterLevel: 3,
            usesPerDay: 3,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // ---- 178. Gloves, Perilous --------------------------------------------------
  {
    id: 'wondrous-gloves-perilous',
    name: 'Gloves, Perilous',
    category: 'wondrous',
    source: 'Advanced Class Guide',
    isOfficial: true,

    aura: [
      { strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION },
      { strength: AuraStrength.FAINT, school: MagicSchool.NECROMANCY },
    ],
    casterLevel: 1,
    slot: 'hands',

    price: 10000,
    weight: 1,

    description:
      'These black gloves glow faintly during combat. Once per day, when the wearer threatens a critical hit ' +
      'with an unarmed strike, the wearer gains a +2 bonus to the confirmation roll. Regardless of whether the ' +
      'critical hit is confirmed, the attack deals an extra 1d8 damage.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['inflict light wounds', 'unerring weapon'],
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
        type: 'bonus',
        bonusType: 'untyped',
        target: 'critical_confirmation',
        value: 2,
        source: 'Gloves, Perilous',
        condition: {
          type: 'custom',
          params: { trigger: 'threatened_critical_unarmed' },
          description: 'once per day when threatening a critical hit with an unarmed strike',
        },
      },
      {
        type: 'damage',
        bonusType: 'untyped',
        target: 'damage.melee',
        value: '1d8',
        source: 'Gloves, Perilous',
        condition: {
          type: 'custom',
          params: { trigger: 'threatened_critical_unarmed' },
          description: 'extra damage on the critical-threatening unarmed strike, once per day',
        },
      },
    ],
  },

  // ---- 179. Gloves, Pliant ----------------------------------------------------
  {
    id: 'wondrous-gloves-pliant',
    name: 'Gloves, Pliant',
    category: 'wondrous',
    source: 'Advanced Race Guide',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 9,
    slot: 'hands',

    price: 10000,
    weight: 0,

    description:
      "These fingerless black gloves enhance the wearer's flexibility. As a swift action, the wearer can " +
      'extend their arms for up to 10 rounds per day, gaining 5 additional feet of reach. Extended limbs ' +
      'impose a \u20132 penalty on attack rolls (\u20134 with two-handed weapons). The wearer can still make ' +
      'hand-based natural attacks such as claws while extended. When not extended, the gloves grant a +5 ' +
      'enhancement bonus on Escape Artist checks and Acrobatics checks made to avoid falling damage.',

    construction: {
      feats: ['Craft Wondrous Item', 'Fluid Form'],
      spells: ['fluid form'],
      cost: 5000,
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
        target: 'skill.escape_artist',
        value: 5,
        source: 'Gloves, Pliant',
        condition: {
          type: 'custom',
          params: { state: 'not_extended' },
          description: 'when arms are not extended',
        },
      },
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'special.acrobatics_falling',
        value: 5,
        source: 'Gloves, Pliant',
        condition: {
          type: 'custom',
          params: { state: 'not_extended' },
          description: 'on Acrobatics checks to avoid falling damage, when arms are not extended',
        },
      },
      {
        type: 'special',
        target: 'special.extended_reach_5ft',
        value: 0,
        source: 'Gloves, Pliant',
      },
    ],
  },

  // ---- 180. Gloves, Poisoner's ------------------------------------------------
  {
    id: 'wondrous-gloves-poisoners',
    name: "Gloves, Poisoner's",
    category: 'wondrous',
    source: "Adventurer's Armory",
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'hands',

    price: 5000,
    weight: 0,

    description:
      'These black, rubbery gloves have sharpened fingertips with fine channels running to each digit tip. ' +
      'Each glove can hold one dose of poison, potion, alchemist infusion, holy water, or similar liquid ' +
      '(excluding substances that would damage the gloves). The wearer delivers the dose via melee touch ' +
      'attack or as part of an unarmed or natural attack with the hands. Both gloves can function ' +
      'simultaneously in one round using two-weapon fighting or multiple natural attacks. Each glove ' +
      'recharges once daily. Filling a glove is a full-round action that provokes attacks of opportunity.',

    construction: {
      feats: ['Craft Wondrous Item', 'Touch Injection'],
      spells: [],
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
        target: 'special.poison_delivery_gloves',
        value: 0,
        source: "Gloves, Poisoner's",
      },
    ],
  },

  // ---- 181. Gloves, Portal-Finding --------------------------------------------
  {
    id: 'wondrous-gloves-portal-finding',
    name: 'Gloves, Portal-Finding',
    category: 'wondrous',
    source: 'Planar Adventures',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 5,
    slot: 'none',

    price: 12500,
    weight: 0,

    description:
      'These tight-fitting black leather gloves feature reinforced fingertips marked with arcane symbols. ' +
      'They tingle when near portals to other planes. The wearer gains a +5 bonus on Perception and ' +
      'Knowledge (planes) checks made to identify portals and planar connections. By touching a portal ' +
      'or adjacent area within 10 feet, the wearer automatically determines where the connection leads.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['detect magic', 'divination'],
      cost: 6250,
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
        target: 'skill.perception',
        value: 5,
        source: 'Gloves, Portal-Finding',
        condition: {
          type: 'custom',
          params: { context: 'identifying_portals' },
          description: 'when identifying portals and planar connections',
        },
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.knowledge_planes',
        value: 5,
        source: 'Gloves, Portal-Finding',
        condition: {
          type: 'custom',
          params: { context: 'identifying_portals' },
          description: 'when identifying portals and planar connections',
        },
      },
      {
        type: 'special',
        target: 'special.portal_destination_sense',
        value: 0,
        source: 'Gloves, Portal-Finding',
      },
    ],
  },

  // ---- 182. Gloves, Quickfingers ----------------------------------------------
  {
    id: 'wondrous-gloves-quickfingers',
    name: 'Gloves, Quickfingers',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'hands',

    price: 2500,
    weight: 0,

    description:
      'These dark-colored, skin-tight gloves are typically made of supple calfskin or silk. A wearer with ' +
      'at least 1 rank in Sleight of Hand can attempt that skill as a move action by accepting a \u221210 ' +
      'penalty instead of the standard \u221220 penalty. Both gloves must be worn for the magic to function.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["cat's grace", 'haste'],
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
        type: 'special',
        target: 'special.sleight_of_hand_move_action',
        value: 0,
        source: 'Gloves, Quickfingers',
      },
    ],
  },

  // ---- 183. Gloves, Rimeshaper ------------------------------------------------
  {
    id: 'wondrous-gloves-rimeshaper',
    name: 'Gloves, Rimeshaper',
    category: 'wondrous',
    source: 'Pathfinder Campaign Setting',
    isOfficial: true,

    aura: [
      { strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION },
      { strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION },
    ],
    casterLevel: 3,
    slot: 'hands',

    price: 3000,
    weight: 1,

    description:
      'These sleek gloves feature a faint scaled pattern and shimmer as if covered in ice crystals. In cold ' +
      'weather, the wearer can solidify nearby snow or ice into light or one-handed weapons of normal quality ' +
      '(hardness 2) as a move action. The weapons evaporate if left unattended for 1 round; otherwise they ' +
      'last 1 minute before melting. As an alternative move action, the wearer can form ice crystals on the ' +
      'gloves, making them function as masterwork spiked gauntlets that grant a +2 competence bonus on Climb ' +
      'checks. This effect lasts until dismissed as a standard action. The gloves also grant cold resistance 5.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['resist energy', 'chill metal'],
      cost: 1500,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'use_activated',
    activationAction: 'move',

    effects: [
      {
        type: 'resistance',
        bonusType: 'untyped',
        target: 'energy_resistance.cold',
        value: 5,
        source: 'Gloves, Rimeshaper',
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.climb',
        value: 2,
        source: 'Gloves, Rimeshaper',
        condition: {
          type: 'custom',
          params: { state: 'ice_gauntlet_mode' },
          description: 'when the gloves are shaped into spiked gauntlet mode',
        },
      },
      {
        type: 'special',
        target: 'special.ice_weapon_creation',
        value: 0,
        source: 'Gloves, Rimeshaper',
      },
    ],
  },

  // ---- 184. Gloves, Rubble ----------------------------------------------------
  {
    id: 'wondrous-gloves-rubble',
    name: 'Gloves, Rubble',
    category: 'wondrous',
    source: 'Advanced Class Guide',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'hands',

    price: 8000,
    weight: 1,

    description:
      'These metal mesh gloves allow the wearer to touch a 5-foot stone or earth floor square as a standard ' +
      'action, causing rubble to roil to the surface and making that square difficult terrain. This ability ' +
      'does not provoke attacks of opportunity. The wearer can create up to 20 such difficult terrain squares ' +
      'per day.',

    construction: {
      feats: ['Craft Wondrous Item', 'Expeditious Excavation'],
      spells: [],
      cost: 4000,
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
        target: 'special.create_difficult_terrain_rubble',
        value: 20,
        source: 'Gloves, Rubble',
      },
    ],
  },

  // ---- 185. Gloves, Saboteur's ------------------------------------------------
  {
    id: 'wondrous-gloves-saboteurs',
    name: "Gloves, Saboteur's",
    category: 'wondrous',
    source: 'Ultimate Intrigue',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ABJURATION }],
    casterLevel: 8,
    slot: 'hands',

    price: 15240,
    weight: 1,

    description:
      'These leather gloves provide a +4 competence bonus on Disable Device checks made to disable magic traps ' +
      'and allow delicate work without impediment. Once per day, a wearer trained in Disable Device can enchant ' +
      'an unattended magic item with a trap by commanding the gloves (a standard action). The wearer makes a ' +
      'caster level check (DC = 11 + the target item\'s caster level), using the higher of the wearer\'s own ' +
      'caster level or the gloves\' caster level. On a success, the item is marked with a glyph of warding ' +
      '(blast variety) lasting up to one day.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['glyph of warding'],
      cost: 7620,
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
        target: 'skill.disable_device',
        value: 4,
        source: "Gloves, Saboteur's",
        condition: {
          type: 'custom',
          params: { trapType: 'magic' },
          description: 'on Disable Device checks to disable magic traps',
        },
      },
      {
        type: 'special',
        target: 'special.enchant_item_glyph_trap',
        value: 0,
        source: "Gloves, Saboteur's",
      },
    ],
  },

  // ---- 186. Gloves, Spellstrike -----------------------------------------------
  {
    id: 'wondrous-gloves-spellstrike',
    name: 'Gloves, Spellstrike',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.UNIVERSAL }],
    casterLevel: 17,
    slot: 'hands',

    price: 8000,
    weight: 0,

    description:
      "These black leather gloves with soft velveteen lining and silver buckles extending from wrist to elbow " +
      "allow the wearer to treat a ranged magus spell as having touch range, enabling delivery through the " +
      "spellstrike class ability. This can be activated three times per day. The ability works only with spells " +
      "that target one or more creatures at ranges beyond touch (such as slow), not rays or area-created effects. " +
      "The altered spell affects only the creature struck.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: [],
      specialRequirements: ['Creator must be a magus'],
      cost: 4000,
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
        type: 'special',
        target: 'special.ranged_spell_to_touch_spellstrike',
        value: 0,
        source: 'Gloves, Spellstrike',
      },
    ],
  },

  // ---- 187. Gloves, Trapspringer's --------------------------------------------
  {
    id: 'wondrous-gloves-trapspringers',
    name: "Gloves, Trapspringer's",
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 5,
    slot: 'hands',

    price: 4000,
    weight: 1,

    description:
      'These studded leather gloves feature reinforced metal strips that can be extended or retracted at will, ' +
      'with each fingertip functioning as a customizable tool for trap examination and disarming. The gloves ' +
      'provide a +5 competence bonus on all Disable Device checks made to disarm traps and a +1 luck bonus ' +
      'on all saving throws made against traps.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['find traps'],
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
        bonusType: 'competence',
        target: 'skill.disable_device',
        value: 5,
        source: "Gloves, Trapspringer's",
        condition: {
          type: 'custom',
          params: { context: 'disarm_trap' },
          description: 'on Disable Device checks to disarm traps',
        },
      },
      {
        type: 'bonus',
        bonusType: 'luck',
        target: 'save.all',
        value: 1,
        source: "Gloves, Trapspringer's",
        condition: {
          type: 'custom',
          params: { context: 'trap' },
          description: 'on saving throws against traps',
        },
      },
    ],
  },

  // ---- 188. Gloves, Vampiric --------------------------------------------------
  {
    id: 'wondrous-gloves-vampiric',
    name: 'Gloves, Vampiric',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.NECROMANCY }],
    casterLevel: 5,
    slot: 'hands',

    price: 18000,
    weight: 0,

    description:
      "These pale leather gloves are adorned with blood-red finger stitching resembling blood-encrusted " +
      "fingernails. The wearer gains three daily uses each of vampiric touch and bleed. The vampiric touch " +
      "effect may be delivered as a ranged touch attack with a 30-foot range against dying or bleeding targets. " +
      "Charges persist as long as the gloves remain equipped but dissipate upon removal. One vampiric touch " +
      "charge can be expended to end the wearer's own active bleed condition.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['bleed', 'vampiric touch'],
      cost: 9000,
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
        target: 'special.vampiric_touch_ranged_dying',
        value: 0,
        source: 'Gloves, Vampiric',
      },
    ],
    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'vampiric_touch',
            spellName: 'Vampiric Touch',
            casterLevel: 5,
            usesPerDay: 3,
            activationAction: 'standard',
          },
          {
            spellId: 'bleed',
            spellName: 'Bleed',
            casterLevel: 5,
            usesPerDay: 3,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // ---- 189. Gloves, Whispering ------------------------------------------------
  {
    id: 'wondrous-gloves-whispering',
    name: 'Gloves, Whispering',
    category: 'wondrous',
    source: 'Ultimate Intrigue',
    isOfficial: true,

    aura: [
      { strength: AuraStrength.FAINT, school: MagicSchool.ILLUSION },
      { strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION },
    ],
    casterLevel: 5,
    slot: 'hands',

    price: 15400,
    weight: 0,

    description:
      "These gloves create a localized silence effect around the wearer's hands. When the wearer touches " +
      "or holds objects, they produce no sound, enabling silent lock-picking or muffling of sounds. The " +
      "effect extends only a few inches, so careful handling is silent but forceful actions still generate " +
      "noise. Additionally, when the wearer places a finger to her lips and speaks, she makes no audible " +
      "sound in her general area but chosen individuals within line of sight hear the words clearly.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['message', 'silence'],
      cost: 7700,
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
        target: 'special.silent_hands',
        value: 0,
        source: 'Gloves, Whispering',
      },
      {
        type: 'special',
        target: 'special.whisper_to_chosen_targets',
        value: 0,
        source: 'Gloves, Whispering',
      },
    ],
  },

  // ---- 190. Gloves, Whispering (First World) ----------------------------------
  {
    id: 'wondrous-gloves-whispering-first-world',
    name: 'Gloves, Whispering (First World)',
    category: 'wondrous',
    source: 'Legacy of the First World',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 3,
    slot: 'hands',

    price: 1000,
    weight: 1,

    description:
      'These silk gloves allow the wearer to deliver a complex secret message to a single target that can ' +
      'see the wearer as if she had succeeded at a DC 20 Bluff check. The message is conveyed via rapid ' +
      'hand gestures that the target automatically understands. Onlookers may attempt a DC 20 Sense Motive ' +
      'check to notice and decipher the message.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['message'],
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
        target: 'special.secret_hand_gesture_message',
        value: 0,
        source: 'Gloves, Whispering (First World)',
      },
    ],
  },

  // ---- 191. Glowing Gourd -----------------------------------------------------
  {
    id: 'wondrous-glowing-gourd',
    name: 'Glowing Gourd',
    category: 'wondrous',
    source: 'Halloween Special / Pathfinder Society',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION }],
    casterLevel: 9,
    slot: 'none',

    price: 4250,
    weight: 8,

    description:
      "This hollowed gourd is carved with a good deity's symbol and provides light equivalent to a candle. " +
      "When smashed on the ground as a standard action, the gourd creates a 40-foot-radius area affected by " +
      "the hallow spell with remove fear fixed to it. The item is typically crafted from pumpkins, though " +
      "other gourds or large turnips serve as alternatives.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['hallow', 'remove fear'],
      cost: 3125,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 8,
    },

    activationCategory: 'use_activated',
    activationAction: 'standard',

    effects: [
      {
        type: 'special',
        target: 'special.hallow_on_break',
        value: 0,
        source: 'Glowing Gourd',
      },
    ],
  },

  // ---- 192. Goblet of Quenching -----------------------------------------------
  {
    id: 'wondrous-goblet-of-quenching',
    name: 'Goblet of Quenching',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.CONJURATION }],
    casterLevel: 1,
    slot: 'none',

    price: 180,
    weight: 1,

    description:
      'This clay goblet magically generates drinking water on command, producing up to 2 gallons of ' +
      'ordinary water per day. The water evaporates naturally and can be stored or used to create holy water.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['create water'],
      cost: 90,
    },
    physicalStats: {
      hardness: 1,
      hitPoints: 2,
      breakDC: 10,
    },

    activationCategory: 'command_word',
    activationAction: 'standard',

    effects: [
      {
        type: 'special',
        target: 'special.create_water_2gal_per_day',
        value: 0,
        source: 'Goblet of Quenching',
      },
    ],
  },

  // ---- 193. Goblin Fire Drum --------------------------------------------------
  {
    id: 'wondrous-goblin-fire-drum',
    name: 'Goblin Fire Drum',
    category: 'wondrous',
    source: 'Goblins of Golarion',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 3,
    slot: 'none',

    price: 2000,
    weight: 1,

    description:
      'This small, crude-looking drum is attached to a strap long enough to loop around the wearer\'s neck. ' +
      'A DC 12 Perform (percussion) check activates it. While the bearer spends a move action each round ' +
      'playing, all fires within 30 feet deal an additional 1 point of fire damage per round. Unattended ' +
      'flammable alchemical objects within range have a 10% chance of spontaneously igniting when the drum ' +
      'activates, increasing by 5% each subsequent round.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['pyrotechnics', 'spark'],
      cost: 1000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 2,
      breakDC: 12,
    },

    activationCategory: 'use_activated',
    activationAction: 'move',

    effects: [
      {
        type: 'bonus',
        bonusType: 'untyped',
        target: 'special.fire_damage_bonus_per_round',
        value: 1,
        source: 'Goblin Fire Drum',
      },
      {
        type: 'special',
        target: 'special.alchemical_ignition_chance',
        value: 0,
        source: 'Goblin Fire Drum',
      },
    ],
  },

  // ---- 193 (variant). Goblin Fire Drum, Greater --------------------------------
  {
    id: 'wondrous-goblin-fire-drum-greater',
    name: 'Goblin Fire Drum, Greater',
    category: 'wondrous',
    source: 'Goblins of Golarion',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 3,
    slot: 'none',

    price: 4500,
    weight: 1,

    description:
      'This more powerful version of the goblin fire drum functions as the standard goblin fire drum but ' +
      'increases the fire damage bonus to 2 points per round. Additionally, it can cast pyrotechnics once ' +
      'per day.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['pyrotechnics', 'spark'],
      cost: 2250,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 2,
      breakDC: 12,
    },

    activationCategory: 'use_activated',
    activationAction: 'move',

    effects: [
      {
        type: 'bonus',
        bonusType: 'untyped',
        target: 'special.fire_damage_bonus_per_round',
        value: 2,
        source: 'Goblin Fire Drum, Greater',
      },
      {
        type: 'special',
        target: 'special.alchemical_ignition_chance',
        value: 0,
        source: 'Goblin Fire Drum, Greater',
      },
    ],
    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'pyrotechnics',
            spellName: 'Pyrotechnics',
            casterLevel: 3,
            usesPerDay: 1,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // ---- 194. Goblin Skull Bomb -------------------------------------------------
  {
    id: 'wondrous-goblin-skull-bomb',
    name: 'Goblin Skull Bomb',
    category: 'wondrous',
    source: 'Goblins of Golarion',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION }],
    casterLevel: 6,
    slot: 'none',

    price: 1200,
    weight: 1,

    description:
      "A blackened goblin skull with glowing ember eyes. When the skull bomb breaks, the last creature to " +
      "touch it bursts into a raging magical flame dealing 5d6 fire damage (Reflex DC 13 halves). On a failed " +
      "save the target catches fire. If the target dies, its skull becomes a new goblin skull bomb. The item " +
      "functions as a thrown weapon with a 10-foot range increment and detonates on impact or miss. It can be " +
      "safely moved via magic or ranged attacks (hardness 0, 1 hp).",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['flaming sphere'],
      cost: 600,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 8,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'damage',
        bonusType: 'untyped',
        target: 'damage.ranged',
        value: '5d6',
        source: 'Goblin Skull Bomb',
        condition: {
          type: 'custom',
          params: { damageType: 'fire' },
          description: 'fire damage to last creature to touch it when the skull breaks',
        },
      },
      {
        type: 'special',
        target: 'special.skull_bomb_propagation',
        value: 0,
        source: 'Goblin Skull Bomb',
      },
    ],
  },

  // ---- 195. Godstar -----------------------------------------------------------
  {
    id: 'wondrous-godstar',
    name: 'Godstar',
    category: 'wondrous',
    source: 'Pathfinder Society Primer',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 3,
    slot: 'none',

    price: 1000,
    weight: 5,

    description:
      "A small star made of brittle metal alloy that attaches to armor or a gauntlet. Each of its five points " +
      "is keyed to a specific god and serves as a holy symbol. As a standard action, the wearer can break off " +
      "a point to activate its unique effect: (1) creates a zone of truth in a 5-foot radius for 10 minutes " +
      "(DC 13 Will); (2) grants fire resistance 5 and the flaming weapon ability for 1 minute; (3) allows a " +
      "new saving throw against a fear effect with a +4 sacred bonus; (4) permits Knowledge checks to identify " +
      "creatures untrained with a +8 bonus; (5) transforms into a +1 warhammer for 1 minute or until released.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['burst of insight', 'magic weapon', 'remove fear', 'resist energy', 'zone of truth'],
      cost: 500,
    },
    physicalStats: {
      hardness: 2,
      hitPoints: 5,
      breakDC: 12,
    },

    activationCategory: 'use_activated',
    activationAction: 'standard',

    effects: [
      {
        type: 'special',
        target: 'special.godstar_five_points',
        value: 0,
        source: 'Godstar',
      },
    ],
  },

  // ---- 196. Goggles of Brilliant Light ----------------------------------------
  {
    id: 'wondrous-goggles-brilliant-light',
    name: 'Goggles of Brilliant Light',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.EVOCATION }],
    casterLevel: 3,
    slot: 'eyes',

    price: 8800,
    weight: 0,

    description:
      'These sturdy goggles have a mirror sheen on the outside of their lenses and wrap snugly with leather. ' +
      'The tinted lenses block significant natural light. Twice per day, the wearer can emit a burst of ' +
      'brilliant light reaching 30 feet, forcing creatures in that area to make a DC 13 Fortitude save or ' +
      'be blinded for 1 hour. The wearer also gains a +2 bonus on saving throws against visual effects.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['light', 'scorching ray'],
      cost: 4400,
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
        target: 'save.all',
        value: 2,
        source: 'Goggles of Brilliant Light',
        condition: {
          type: 'custom',
          params: { descriptor: 'visual' },
          description: 'against visual effects',
        },
      },
      {
        type: 'special',
        target: 'special.blinding_light_burst',
        value: 0,
        source: 'Goggles of Brilliant Light',
      },
    ],
    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'light',
            spellName: 'Brilliant Light Burst',
            casterLevel: 3,
            usesPerDay: 2,
            saveDC: 13,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // ---- 197. Goggles of Elvenkind ----------------------------------------------
  {
    id: 'wondrous-goggles-elvenkind',
    name: 'Goggles of Elvenkind',
    category: 'wondrous',
    source: 'Advanced Race Guide',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 5,
    slot: 'eyes',

    price: 8500,
    weight: 0,

    description:
      'These emerald-framed goggles grant the wearer low-light vision and a +5 competence bonus on Spellcraft ' +
      'checks to identify magic auras and items. If the wearer already possesses low-light vision, the goggles ' +
      'double their low-light vision range instead.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['beast shape II', 'guidance'],
      cost: 4250,
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
        target: 'special.low_light_vision',
        value: 1,
        source: 'Goggles of Elvenkind',
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.spellcraft',
        value: 5,
        source: 'Goggles of Elvenkind',
        condition: {
          type: 'custom',
          params: { context: 'identify_magic_aura_or_item' },
          description: 'on Spellcraft checks to identify magic auras and items',
        },
      },
    ],
  },

  // ---- 198. Goggles of Minute Seeing ------------------------------------------
  {
    id: 'wondrous-goggles-minute-seeing',
    name: 'Goggles of Minute Seeing',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 3,
    slot: 'eyes',

    price: 2500,
    weight: 0,

    description:
      'These special crystal lenses have metallic thread patterns woven through them. They enable the wearer ' +
      'to see exceptionally well at close range (1 foot or less), providing a +5 competence bonus on Disable ' +
      'Device checks. Both lenses must be worn together for the effect to function.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['true seeing'],
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
        target: 'skill.disable_device',
        value: 5,
        source: 'Goggles of Minute Seeing',
      },
    ],
  },

  // ---- 199. Goggles of Night --------------------------------------------------
  {
    id: 'wondrous-goggles-of-night',
    name: 'Goggles of Night',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 3,
    slot: 'eyes',

    price: 12000,
    weight: 0,

    description:
      'These violet crystal lenses allow the wearer to see normally while granting 60-foot darkvision. ' +
      'Both lenses must be worn together for the magic to function.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['darkvision'],
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
        bonusType: 'untyped',
        target: 'special.darkvision',
        value: 60,
        source: 'Goggles of Night',
      },
    ],
  },

  // ---- 200. Goggles, Arachnid -------------------------------------------------
  {
    id: 'wondrous-goggles-arachnid',
    name: 'Goggles, Arachnid',
    category: 'wondrous',
    source: "Villain Codex",
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 9,
    slot: 'eyes',

    price: 15000,
    weight: 2,

    description:
      'A leather band studded with numerous faceted crystals of varied sizes, with two larger crystals ' +
      'positioned over the eyes. When worn, the wearer uses all the crystals as eyes, gaining all-around vision.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['countless eyes'],
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
        target: 'special.all_around_vision',
        value: 0,
        source: 'Goggles, Arachnid',
      },
    ],
  },
];
