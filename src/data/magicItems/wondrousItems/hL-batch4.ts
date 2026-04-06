import type { WondrousItemDefinition } from '@/types/magicItems';
import { AuraStrength, MagicSchool } from '@/types/equipment';

export const wondrousItemsHL4: WondrousItemDefinition[] = [
  // -------------------------------------------------------------------------
  // 1. Hexing Runes
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-hexing-runes',
    name: 'Hexing Runes',
    category: 'wondrous',
    source: "Dragonslayer's Handbook",
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ABJURATION }],
    casterLevel: 8,
    slot: 'neck',

    price: 10000,
    weight: 0,

    description:
      'These runes may be carved from wood or cast in silver and are worn on a leather cord. ' +
      'When a witch prepares spells, she can use these runes to enhance one hex, increasing its ' +
      'save DC by 1 for 24 hours. Additionally, once daily upon speaking the command word, the ' +
      'wearer gains the benefits of the ward hex as if cast by an 8th-level witch.',

    construction: {
      feats: ['Craft Wondrous Item', 'Spell Focus (abjuration)'],
      spells: ['resistance'],
      specialRequirements: ['Creator must be able to use the ward hex'],
      cost: 5000,
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
        target: 'special.hex_save_dc',
        value: 1,
        source: 'Hexing Runes',
        condition: {
          type: 'custom',
          params: { descriptor: 'witch_hex_preparation' },
          description: 'Increases one hex save DC by 1 when witch prepares spells; applies to that hex for 24 hours',
        },
      },
      {
        type: 'special',
        target: 'special.ward_hex',
        value: 0,
        source: 'Hexing Runes',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 2. Hobgoblin Battle Standard — Despair
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-hobgoblin-battle-standard-despair',
    name: 'Hobgoblin Battle Standard (Despair)',
    category: 'wondrous',
    source: 'Advanced Race Guide',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 10,
    slot: 'none',

    price: 50000,
    weight: 3,

    description:
      'This cloth battle standard is 2 feet wide and 4 feet long, designed to be mounted on a lance, ' +
      'polearm, frame, or staff. It must be properly planted to function and loses its power if toppled ' +
      'or touched by an enemy until reclaimed and replanted. Enemies within 60 feet of the planted standard ' +
      'become sickened. Those who sustain a critical hit while sickened must succeed at a DC 15 Will save ' +
      'or become dazed for 1 round.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['crushing despair'],
      cost: 25000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 5,
      breakDC: 15,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'special',
        target: 'special.aura_sickened_60ft',
        value: 0,
        source: 'Hobgoblin Battle Standard (Despair)',
      },
      {
        type: 'special',
        target: 'special.dazed_on_crit',
        value: 0,
        source: 'Hobgoblin Battle Standard (Despair)',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 3. Hobgoblin Battle Standard — Ferocity
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-hobgoblin-battle-standard-ferocity',
    name: 'Hobgoblin Battle Standard (Ferocity)',
    category: 'wondrous',
    source: 'Advanced Race Guide',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 10,
    slot: 'none',

    price: 60000,
    weight: 3,

    description:
      'This cloth battle standard is 2 feet wide and 4 feet long, designed to be mounted on a lance, ' +
      'polearm, frame, or staff. It must be properly planted to function and loses its power if toppled ' +
      'or touched by an enemy until reclaimed and replanted. Allies within 60 feet of the planted standard ' +
      'gain a +2 morale bonus on attack rolls, weapon damage rolls, and saving throws against mind-affecting effects.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['rage'],
      cost: 30000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 5,
      breakDC: 15,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'morale',
        target: 'attack.all',
        value: 2,
        source: 'Hobgoblin Battle Standard (Ferocity)',
        condition: {
          type: 'custom',
          params: { descriptor: 'ally_within_60ft_of_standard' },
          description: 'Allies within 60 feet of planted standard',
        },
      },
      {
        type: 'bonus',
        bonusType: 'morale',
        target: 'damage.all',
        value: 2,
        source: 'Hobgoblin Battle Standard (Ferocity)',
        condition: {
          type: 'custom',
          params: { descriptor: 'ally_within_60ft_of_standard' },
          description: 'Allies within 60 feet of planted standard (weapon damage only)',
        },
      },
      {
        type: 'bonus',
        bonusType: 'morale',
        target: 'save.mind_affecting',
        value: 2,
        source: 'Hobgoblin Battle Standard (Ferocity)',
        condition: {
          type: 'custom',
          params: { descriptor: 'ally_within_60ft_of_standard' },
          description: 'Allies within 60 feet of planted standard (saves vs. mind-affecting only)',
        },
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 4. Hobgoblin Battle Standard — Iron Resolve
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-hobgoblin-battle-standard-iron-resolve',
    name: 'Hobgoblin Battle Standard (Iron Resolve)',
    category: 'wondrous',
    source: 'Advanced Race Guide',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 10,
    slot: 'none',

    price: 45000,
    weight: 3,

    description:
      'This cloth battle standard is 2 feet wide and 4 feet long, designed to be mounted on a lance, ' +
      'polearm, frame, or staff. It must be properly planted to function and loses its power if toppled ' +
      'or touched by an enemy until reclaimed and replanted. Allies within 30 feet of the planted standard ' +
      'gain 10 temporary hit points and the benefits of the Diehard feat. Each creature may only gain these ' +
      'temporary hit points once per day.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['aid', "bear's endurance"],
      cost: 22500,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 5,
      breakDC: 15,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'special',
        target: 'special.temporary_hit_points_10',
        value: 10,
        source: 'Hobgoblin Battle Standard (Iron Resolve)',
        condition: {
          type: 'custom',
          params: { descriptor: 'ally_within_30ft_of_standard' },
          description: 'Allies within 30 feet of planted standard; once per creature per day',
        },
      },
      {
        type: 'special',
        target: 'special.diehard_feat_benefit',
        value: 0,
        source: 'Hobgoblin Battle Standard (Iron Resolve)',
        condition: {
          type: 'custom',
          params: { descriptor: 'ally_within_30ft_of_standard' },
          description: 'Allies within 30 feet of planted standard',
        },
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 5. Holdout Wand Wrap
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-holdout-wand-wrap',
    name: 'Holdout Wand Wrap',
    category: 'wondrous',
    source: 'Inner Sea Intrigue',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ILLUSION }],
    casterLevel: 10,
    slot: 'none',

    price: 4000,
    weight: 0,

    description:
      'This 8-inch leather cord has polished silver beads at each end. When wound around a wand as a ' +
      'standard action, it causes the wand to change its shape and appearance to resemble another object ' +
      'of similar size and shape, such as a feather, a folded fan, or a spoon. The disguised wand retains ' +
      'all its properties and weight but ceases radiating magic. Only true seeing or similar magic reveals ' +
      'its true nature. When the wand is activated, the wrap suppresses its effects for 1 minute.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['disguise self', 'magic aura'],
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
        type: 'special',
        target: 'special.wand_disguise',
        value: 0,
        source: 'Holdout Wand Wrap',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 6. Homebound Timepiece
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-homebound-timepiece',
    name: 'Homebound Timepiece',
    category: 'wondrous',
    source: 'Planar Adventures',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 5,
    slot: 'none',

    price: 4000,
    weight: 1,

    description:
      'This brass chronometer can only be wound on the Material Plane. Winding takes 10 minutes and ' +
      'allows it to keep accurate time for the next 10 days as time passes on the Material Plane. ' +
      'When taken to planes with erratic or flowing time traits, it adjusts to measure Material Plane ' +
      'time accordingly. On timeless planes, it becomes harmlessly unwound.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['divination'],
      cost: 2000,
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
        target: 'special.material_plane_timekeeping',
        value: 0,
        source: 'Homebound Timepiece',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 7. Homunculus Clay
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-homunculus-clay',
    name: 'Homunculus Clay',
    category: 'wondrous',
    source: 'Magical Marketplace',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 11,
    slot: 'none',

    price: 4100,
    weight: 1,

    description:
      'This fist-sized lump of dry clay transforms into a homunculus when an alchemist pours his mutagen ' +
      'onto it as a standard action (provoking attacks of opportunity). The alchemist who provides the mutagen ' +
      'becomes its creator. The homunculus gains the mutagen\'s benefits, with Constitution increases converted ' +
      'to bonus hit points per Hit Die and Fortitude save bonuses. When the mutagen expires or the homunculus ' +
      'dies, it reverts to clay and can be reused. If the homunculus clay is broken or destroyed in its ' +
      'inactive form, it is forever ruined.',

    construction: {
      feats: ['Craft Construct', 'Craft Wondrous Item'],
      spells: ['animate objects', 'arcane eye', 'mending', 'mirror image'],
      specialRequirements: ['Craft (alchemy) 2 ranks', 'Craft (sculptures) 2 ranks'],
      cost: 2050,
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
        target: 'special.homunculus_creation',
        value: 0,
        source: 'Homunculus Clay',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 8. Hood of the Living
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-hood-of-the-living',
    name: 'Hood of the Living',
    category: 'wondrous',
    source: "Undead Slayer's Handbook",
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 1,
    slot: 'head',

    price: 2840,
    weight: 1,

    description:
      'This leather coif provides defensive capabilities against undead threats. The wearer gains a ' +
      '+2 resistance bonus on Will saves against mind-affecting effects created by undead creatures. ' +
      'Three times daily, the wearer can activate the hood to detect undead auras within 30 feet as ' +
      'though concentrating for 3 rounds while using detect undead, revealing the presence, quantity, ' +
      'and direction of the nearest undead aura. Activation also detects living creatures within 30 feet ' +
      'that are under undead-created charm or compulsion effects, though only their presence is disclosed.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['detect undead', 'protection from evil'],
      cost: 1420,
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
        bonusType: 'resistance',
        target: 'save.will',
        value: 2,
        source: 'Hood of the Living',
        condition: {
          type: 'target_type',
          params: { creatureType: 'undead' },
          description: 'Against mind-affecting effects created by undead only',
        },
      },
    ],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'detect_undead',
            spellName: 'Detect Undead',
            casterLevel: 1,
            usesPerDay: 3,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 9. Horn of Antagonism
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-horn-of-antagonism',
    name: 'Horn of Antagonism',
    category: 'wondrous',
    source: "Advanced Player's Guide",
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 3,
    slot: 'none',

    price: 20000,
    weight: 4,

    description:
      'This bone instrument produces an unsettling sound. Once per day, a character who possesses the ' +
      "ranger's favored enemy class feature can blow this horn as a standard action, targeting one favored " +
      'enemy type. Affected creatures of that type within 90 feet must succeed at a DC 13 Will save or ' +
      'become dazed for 1d4 rounds. Deaf creatures are immune. The horn has no effect in the hands of ' +
      'those without the favored enemy ability.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['daze monster'],
      cost: 10000,
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
        target: 'special.daze_favored_enemy_90ft',
        value: 0,
        source: 'Horn of Antagonism',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 10. Horn of Battle Clarity
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-horn-of-battle-clarity',
    name: 'Horn of Battle Clarity',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 5,
    slot: 'none',

    price: 6000,
    weight: 2,

    description:
      'This hollowed animal horn provides combat benefits when sounded. All creatures within 60 feet who ' +
      'have not yet acted in combat are no longer considered flat-footed. This does not affect other ' +
      'conditions that treat creatures as flat-footed. Barbarians gain an additional benefit: they may ' +
      'expend 2 rage rounds while sounding the horn to gain the superstition rage power for the remainder ' +
      'of that battle.',

    construction: {
      feats: ['Craft Wondrous Item', 'rage'],
      spells: [],
      cost: 3000,
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
        target: 'special.remove_flat_footed_60ft',
        value: 0,
        source: 'Horn of Battle Clarity',
      },
      {
        type: 'special',
        target: 'special.barbarian_superstition_rage_power',
        value: 0,
        source: 'Horn of Battle Clarity',
        condition: {
          type: 'custom',
          params: { descriptor: 'barbarian_rage_2rounds' },
          description: 'Barbarian only; costs 2 rage rounds to activate',
        },
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 11. Horn of Blasting
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-horn-of-blasting',
    name: 'Horn of Blasting',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION }],
    casterLevel: 7,
    slot: 'none',

    price: 20000,
    weight: 1,

    description:
      'This spiraling animal horn can be sounded as a normal horn, but if the command word is spoken ' +
      'and the instrument is then played, it deals 5d6 points of sonic damage to creatures within a ' +
      '40-foot cone and causes them to be deafened for 2d6 rounds (DC 16 Fortitude save halves damage ' +
      'and negates deafening). Crystalline creatures and objects take 7d6 points of sonic damage under ' +
      'the same save conditions. Using the horn magically more than once per day incurs a cumulative 20% ' +
      'chance of explosion, dealing 10d6 sonic damage to the user.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['shout'],
      cost: 10000,
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
        type: 'damage',
        target: 'special.sonic_cone_40ft',
        value: 0,
        source: 'Horn of Blasting',
      },
      {
        type: 'special',
        target: 'special.deafened_2d6_rounds',
        value: 0,
        source: 'Horn of Blasting',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 12. Horn of Blasting, Greater
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-horn-of-blasting-greater',
    name: 'Horn of Blasting, Greater',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.EVOCATION }],
    casterLevel: 16,
    slot: 'none',

    price: 70000,
    weight: 1,

    description:
      'This larger spiraling animal horn functions like the horn of blasting but with greater power. ' +
      'When the command word is spoken and the horn is played, it deals 10d6 points of sonic damage to ' +
      'creatures within a 40-foot cone, stuns them for 1 round, and deafens them for 4d6 rounds (DC 19 ' +
      'Fortitude save halves damage and negates stunning and deafening). Crystalline objects take 16d6 ' +
      'sonic damage. Using the horn magically more than once per day incurs a cumulative 20% chance of ' +
      'explosion, dealing 10d6 sonic damage to the user.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['greater shout'],
      cost: 35000,
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
        type: 'damage',
        target: 'special.sonic_cone_40ft',
        value: 0,
        source: 'Horn of Blasting, Greater',
      },
      {
        type: 'special',
        target: 'special.stunned_1_round',
        value: 0,
        source: 'Horn of Blasting, Greater',
      },
      {
        type: 'special',
        target: 'special.deafened_4d6_rounds',
        value: 0,
        source: 'Horn of Blasting, Greater',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 13. Horn of Fog
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-horn-of-fog',
    name: 'Horn of Fog',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.CONJURATION }],
    casterLevel: 3,
    slot: 'none',

    price: 2000,
    weight: 1,

    description:
      'This magical bugle produces a thick cloud of heavy fog similar to that of an obscuring mist spell. ' +
      'Each round the user blows it, fog covers a 10-foot square adjacent to the horn blower. The fog ' +
      'travels 10 feet per round in a straight line unless blocked by substantial obstacles. The device ' +
      'emits a distinctive foghorn sound with a pitch drop at the end of each blast. The fog naturally ' +
      'dissipates after 3 minutes but disperses faster in wind (4 rounds in moderate winds of 11+ mph; ' +
      '1 round in strong winds of 21+ mph).',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['obscuring mist'],
      cost: 1000,
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
        target: 'special.fog_cloud_10ft_square',
        value: 0,
        source: 'Horn of Fog',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 14. Horn of Goodness/Evil
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-horn-of-goodness-evil',
    name: 'Horn of Goodness/Evil',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ABJURATION }],
    casterLevel: 6,
    slot: 'none',

    price: 6500,
    weight: 1,

    description:
      'This magical trumpet functions based on its owner\'s moral alignment and remains dormant for ' +
      'neutral characters. A good-aligned owner triggers a magic circle against evil effect when the ' +
      'horn is sounded, while an evil-aligned owner activates a magic circle against good effect. ' +
      'The protective ward persists for one hour following activation, and the horn may be used once per day.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['magic circle against evil', 'magic circle against good'],
      cost: 3250,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 5,
      breakDC: 15,
    },

    activationCategory: 'use_activated',

    spellLikeAbilities: [
      {
        usesPerDay: 1,
        spells: [
          {
            spellId: 'magic_circle_against_evil',
            spellName: 'Magic Circle Against Evil',
            casterLevel: 6,
            activationAction: 'standard',
          },
          {
            spellId: 'magic_circle_against_good',
            spellName: 'Magic Circle Against Good',
            casterLevel: 6,
            activationAction: 'standard',
          },
        ],
      },
    ],

    effects: [
      {
        type: 'special',
        target: 'special.alignment_gated_magic_circle',
        value: 0,
        source: 'Horn of Goodness/Evil',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 15. Horn of Judgment
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-horn-of-judgment',
    name: 'Horn of Judgment',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 9,
    slot: 'none',

    price: 15000,
    weight: 1,

    description:
      'A golden trumpet featuring silver and ivory inlays, this magical instrument produces a singular ' +
      'clarion note when activated. Once per day, the bearer can sound the trumpet to affect up to 9 ' +
      'incorporeal creatures within 30 feet. The effect mimics ghostbane dirge and lasts for 9 rounds, ' +
      'allowing targets a DC 17 Will save to negate.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['ghostbane dirge'],
      cost: 7500,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 5,
      breakDC: 15,
    },

    activationCategory: 'use_activated',

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'ghostbane_dirge',
            spellName: 'Ghostbane Dirge',
            casterLevel: 9,
            usesPerDay: 1,
            saveDC: 17,
            activationAction: 'standard',
          },
        ],
      },
    ],

    effects: [
      {
        type: 'special',
        target: 'special.ghostbane_dirge_9_targets',
        value: 9,
        source: 'Horn of Judgment',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 16. Horn of Plenty
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-horn-of-plenty',
    name: 'Horn of Plenty',
    category: 'wondrous',
    source: 'Quests and Campaigns',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 9,
    slot: 'none',

    price: 6500,
    weight: 3,

    description:
      'This magical horn exists in four variants: plentiful goods, labor, influence, or magic. The type ' +
      'is determined at creation and cannot be changed. The horn may be blown once per week of downtime ' +
      'to improve the rate at which its bearer can exchange capital. The goods, labor, and influence ' +
      'versions allow the user to trade 2 points of any capital type for 1 point of the corresponding ' +
      'category (lasting 1 day). At GM discretion, when already trading two single types for one, the ' +
      'effect becomes a 1-to-1 exchange. The magic version allows trading 3 points of Goods, Labor, or ' +
      'Influence for 1 point of Magic.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['charm person'],
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
        target: 'special.downtime_capital_exchange',
        value: 0,
        source: 'Horn of Plenty',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 17. Horn of the Golden Draught
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-horn-of-the-golden-draught',
    name: 'Horn of the Golden Draught',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 10,
    slot: 'none',

    price: 7000,
    weight: 5,

    description:
      'This gold-plated drinking horn produces a magical draught as a standard action. The liquid serves ' +
      'dual purposes depending on the condition of the imbiber or creature anointed: if a magical ' +
      'affliction is present, the draught frees the target from enchantments, transmutations, and curses ' +
      'as if subjected to a break enchantment spell. If no magical afflictions exist, the draught grants ' +
      'golden skin providing protection almost impervious to blows, as per stoneskin. The horn can ' +
      'generate up to five uses of each draught type before becoming nonmagical brass.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['break enchantment', 'stoneskin'],
      cost: 3500,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 5,
      breakDC: 15,
    },

    activationCategory: 'use_activated',

    charges: { maximum: 10, rechargeMethod: 'None — becomes nonmagical brass when all charges expended' },

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'break_enchantment',
            spellName: 'Break Enchantment',
            casterLevel: 10,
            activationAction: 'standard',
          },
          {
            spellId: 'stoneskin',
            spellName: 'Stoneskin',
            casterLevel: 10,
            activationAction: 'standard',
          },
        ],
      },
    ],

    effects: [
      {
        type: 'special',
        target: 'special.dual_draught_conditional',
        value: 0,
        source: 'Horn of the Golden Draught',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 18. Horn of the Huntmaster
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-horn-of-the-huntmaster',
    name: 'Horn of the Huntmaster',
    category: 'wondrous',
    source: "Advanced Player's Guide",
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 11,
    slot: 'none',

    price: 5000,
    weight: 5,

    description:
      "This elongated horn curves sharply, resembling a large pipe. The user must possess the hunter's " +
      'bond (companions) class feature to activate it. Once per day, the wielder may blow the horn as a ' +
      'standard action to grant his full favored enemy bonus (instead of half) against a single target ' +
      'to all allies within 30 feet who can see and hear him. The magical effect persists for 1 minute.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['greater heroism'],
      cost: 2500,
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
        target: 'special.full_favored_enemy_bonus_allies',
        value: 0,
        source: 'Horn of the Huntmaster',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 19. Horn of the Tritons
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-horn-of-the-tritons',
    name: 'Horn of the Tritons',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 9,
    slot: 'none',

    price: 15000,
    weight: 2,

    description:
      'This decorated conch shell can be activated once per day by most users, though tritons may sound ' +
      'it three times daily. The horn provides three distinct magical functions when blown: it can calm ' +
      'rough waters in a 1-mile radius or cast dismissal against water elementals (DC 19); it can summon ' +
      '1d4+1 standard sharks or 1d3 advanced sharks as if using summon nature\'s ally V; or it can create ' +
      'a fear effect targeting only aquatic and amphibious creatures with Intelligence 1 or 2 within a ' +
      '500-foot radius (DC 16 negates). All uses are audible to tritons within 3 miles.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['control water', 'dismissal', 'fear', "summon nature's ally V"],
      specialRequirements: ['Creator must be a triton'],
      cost: 7500,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 5,
      breakDC: 15,
    },

    activationCategory: 'use_activated',

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'control_water',
            spellName: 'Control Water',
            casterLevel: 9,
            usesPerDay: 1,
            activationAction: 'standard',
          },
          {
            spellId: 'dismissal',
            spellName: 'Dismissal',
            casterLevel: 9,
            usesPerDay: 1,
            saveDC: 19,
            activationAction: 'standard',
          },
          {
            spellId: 'summon_natures_ally_v',
            spellName: "Summon Nature's Ally V",
            casterLevel: 9,
            usesPerDay: 1,
            activationAction: 'standard',
          },
          {
            spellId: 'fear',
            spellName: 'Fear',
            casterLevel: 9,
            usesPerDay: 1,
            saveDC: 16,
            activationAction: 'standard',
          },
        ],
      },
    ],

    effects: [
      {
        type: 'special',
        target: 'special.triton_uses_per_day_3',
        value: 3,
        source: 'Horn of the Tritons',
        condition: {
          type: 'custom',
          params: { descriptor: 'triton_wielder' },
          description: 'Triton wielders may sound the horn three times per day instead of once',
        },
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 20. Horn of Valhalla — Silver
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-horn-of-valhalla-silver',
    name: 'Horn of Valhalla (Silver)',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.CONJURATION }],
    casterLevel: 13,
    slot: 'none',

    price: 50000,
    weight: 2,

    description:
      'This silver horn, when blown, summons 2d4+2 barbarian warriors of 2nd level to fight on behalf ' +
      'of the sounding character. The summoned warriors are constructs, not living creatures, and arrive ' +
      'equipped as standard barbarians. They obey the horn-wielder\'s commands to attack designated ' +
      'targets for up to 1 hour. The silver horn has no prerequisite for use. The horn may only be ' +
      'sounded once per 7 days.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['summon monster VI'],
      cost: 25000,
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
        target: 'special.summon_barbarians_2d4_plus_2_level_2',
        value: 0,
        source: 'Horn of Valhalla (Silver)',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 21. Horn of Valhalla — Brass
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-horn-of-valhalla-brass',
    name: 'Horn of Valhalla (Brass)',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.CONJURATION }],
    casterLevel: 13,
    slot: 'none',

    price: 50000,
    weight: 2,

    description:
      'This brass horn, when blown, summons 2d4+1 barbarian warriors of 3rd level to fight on behalf ' +
      'of the sounding character. The summoned warriors are constructs, not living creatures, and arrive ' +
      'equipped as standard barbarians. They obey the horn-wielder\'s commands to attack designated ' +
      'targets for up to 1 hour. The user must be a spellcaster of at least 1st level to sound this ' +
      'horn safely; otherwise the summoned barbarians attack the user. The horn may only be sounded ' +
      'once per 7 days.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['summon monster VI'],
      cost: 25000,
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
        target: 'special.summon_barbarians_2d4_plus_1_level_3',
        value: 0,
        source: 'Horn of Valhalla (Brass)',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 22. Horn of Valhalla — Bronze
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-horn-of-valhalla-bronze',
    name: 'Horn of Valhalla (Bronze)',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.CONJURATION }],
    casterLevel: 13,
    slot: 'none',

    price: 50000,
    weight: 2,

    description:
      'This bronze horn, when blown, summons 2d4 barbarian warriors of 4th level to fight on behalf ' +
      'of the sounding character. The summoned warriors are constructs, not living creatures, and arrive ' +
      'equipped as standard barbarians. They obey the horn-wielder\'s commands to attack designated ' +
      'targets for up to 1 hour. The user must be proficient with all martial weapons or possess the ' +
      'bardic performance ability to sound this horn safely; otherwise the summoned barbarians attack ' +
      'the user. The horn may only be sounded once per 7 days.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['summon monster VI'],
      cost: 25000,
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
        target: 'special.summon_barbarians_2d4_level_4',
        value: 0,
        source: 'Horn of Valhalla (Bronze)',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 23. Horn of Valhalla — Iron
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-horn-of-valhalla-iron',
    name: 'Horn of Valhalla (Iron)',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.CONJURATION }],
    casterLevel: 13,
    slot: 'none',

    price: 50000,
    weight: 2,

    description:
      'This iron horn, when blown, summons 1d4+1 barbarian warriors of 5th level to fight on behalf ' +
      'of the sounding character. The summoned warriors are constructs, not living creatures, and arrive ' +
      'equipped as standard barbarians. They obey the horn-wielder\'s commands to attack designated ' +
      'targets for up to 1 hour. The user must be proficient with all martial weapons or possess the ' +
      'bardic performance ability to sound this horn safely; otherwise the summoned barbarians attack ' +
      'the user. The horn may only be sounded once per 7 days.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['summon monster VI'],
      cost: 25000,
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
        target: 'special.summon_barbarians_1d4_plus_1_level_5',
        value: 0,
        source: 'Horn of Valhalla (Iron)',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 24. Horn of Valhalla, Aligned
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-horn-of-valhalla-aligned',
    name: 'Horn of Valhalla, Aligned',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.CONJURATION }],
    casterLevel: 13,
    slot: 'none',

    price: 45000,
    weight: 2,

    description:
      'This magical horn summons barbarians of a specific alignment matching the horn itself. The horn ' +
      'possesses an alignment determined at creation, though it lacks intelligence. A character sounding ' +
      'the horn who differs by more than one alignment step from the horn\'s alignment faces attack from ' +
      'the summoned barbarians. Additionally, the summoned warriors will turn against an owner who commands ' +
      'them to act contrary to their ethical code, such as ordering lawful good barbarians to harm ' +
      'defenseless civilians.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['summon monster VI'],
      cost: 25000,
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
        target: 'special.summon_aligned_barbarians',
        value: 0,
        source: 'Horn of Valhalla, Aligned',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 25. Horn, Wolf Caller's
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-horn-wolf-callers',
    name: "Horn, Wolf Caller's",
    category: 'wondrous',
    source: 'Horror Adventures',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 11,
    slot: 'none',

    price: 4000,
    weight: 1,

    description:
      "This ornate silver horn functions as a standard signal instrument. Once daily as a standard " +
      "action, the user can produce an eerie, canine howl that compels up to four wolf-like creatures " +
      "within 200 feet to respond. Affected creatures (including wolves, dire wolves, winter wolves, " +
      "worgs, dogs, barghests, and werewolves) become dazed for 1 round and cannot take actions except " +
      "howling. A DC 17 Will save negates this effect. Werewolves receive a +5 bonus on their saves " +
      "while in humanoid form if they are aware of their condition.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['mass daze', 'mass suggestion'],
      cost: 2000,
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
        target: 'special.daze_canines_200ft',
        value: 0,
        source: "Horn, Wolf Caller's",
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 26. Horse-Caller Flute
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-horse-caller-flute',
    name: 'Horse-Caller Flute',
    category: 'wondrous',
    source: "Merchant's Manifest",
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 4,
    slot: 'none',

    price: 4200,
    weight: 0,

    description:
      'This wooden flute is elaborately decorated with carved motifs of horses running across grassy plains. ' +
      'Once per day, the user can play a melody while making a DC 10 Perform (wind instruments) check. On a ' +
      'success, a light riding horse materializes in an adjacent space to serve as the user\'s mount. The ' +
      'duration lasts 2 hours, plus an additional 2 hours for every 5 points by which the result exceeds ' +
      'the DC 10 check. The horse will not manifest if the terrain cannot support it, but the daily use ' +
      'is not consumed in such cases.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['ghost sound', 'mount'],
      cost: 2100,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'use_activated',

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'mount',
            spellName: 'Mount',
            casterLevel: 4,
            usesPerDay: 1,
            activationAction: 'standard',
          },
        ],
      },
    ],

    effects: [
      {
        type: 'special',
        target: 'special.summon_riding_horse',
        value: 0,
        source: 'Horse-Caller Flute',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 27. Horsemaster's Saddle
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-horsemasters-saddle',
    name: "Horsemaster's Saddle",
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'none',

    price: 12000,
    weight: 5,

    description:
      'This ornate military saddle features elaborate equine tooling. When used, it provides the mounted ' +
      'creature a +5 competence bonus on Acrobatics checks and grants the rider a +5 competence bonus on ' +
      'Ride checks. Additionally, the mount gains the benefits of any teamwork feats the rider possesses.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['mount'],
      specialRequirements: ['Creator must have 5 ranks in Ride'],
      cost: 6000,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 10,
      breakDC: 15,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.acrobatics',
        value: 5,
        source: "Horsemaster's Saddle",
        condition: {
          type: 'custom',
          params: { descriptor: 'mount_wearing_saddle' },
          description: 'Applies to the mount wearing the saddle',
        },
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.ride',
        value: 5,
        source: "Horsemaster's Saddle",
      },
      {
        type: 'special',
        target: 'special.mount_gains_rider_teamwork_feats',
        value: 0,
        source: "Horsemaster's Saddle",
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 28. Horseshoes of a Zephyr
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-horseshoes-of-a-zephyr',
    name: 'Horseshoes of a Zephyr',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 3,
    slot: 'feet',

    price: 6000,
    weight: 4,

    description:
      'These silvery horseshoes feature designs depicting swift clouds and personified wind imagery. ' +
      'When attached to a horse, all four shoes allow the animal to levitate approximately 4 inches ' +
      'above the ground while maintaining normal movement speed. The horse can traverse unstable ' +
      'surfaces like water and avoid leaving tracks. All four shoes must be worn by the same creature ' +
      'to be effective.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['levitate'],
      cost: 3000,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 10,
      breakDC: 20,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'special',
        target: 'special.levitate_4_inches',
        value: 0,
        source: 'Horseshoes of a Zephyr',
      },
      {
        type: 'special',
        target: 'special.traverse_water_no_tracks',
        value: 0,
        source: 'Horseshoes of a Zephyr',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 29. Horseshoes of Crushing Blows +1
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-horseshoes-of-crushing-blows-1',
    name: 'Horseshoes of Crushing Blows +1',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.EVOCATION }],
    casterLevel: 5,
    slot: 'feet',

    price: 4000,
    weight: 4,

    description:
      'These magical horseshoes enhance hoof attacks, granting a +1 enhancement bonus on attack and ' +
      'damage rolls made with hoof attacks. Like the amulet of mighty fists, they can be enchanted with ' +
      'melee weapon special abilities applicable to unarmed strikes, though the modified bonus cannot ' +
      'exceed +5. All four shoes must be worn by the same animal to be effective.',

    construction: {
      feats: ['Craft Magic Arms and Armor', 'Craft Wondrous Item'],
      spells: [],
      cost: 2000,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 10,
      breakDC: 20,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'attack.all',
        value: 1,
        source: 'Horseshoes of Crushing Blows +1',
        condition: {
          type: 'custom',
          params: { descriptor: 'hoof_attacks_only' },
          description: 'Hoof attacks only',
        },
      },
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'damage.all',
        value: 1,
        source: 'Horseshoes of Crushing Blows +1',
        condition: {
          type: 'custom',
          params: { descriptor: 'hoof_attacks_only' },
          description: 'Hoof attacks only',
        },
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 30. Horseshoes of Crushing Blows +2
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-horseshoes-of-crushing-blows-2',
    name: 'Horseshoes of Crushing Blows +2',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.EVOCATION }],
    casterLevel: 5,
    slot: 'feet',

    price: 16000,
    weight: 4,

    description:
      'These magical horseshoes enhance hoof attacks, granting a +2 enhancement bonus on attack and ' +
      'damage rolls made with hoof attacks. Like the amulet of mighty fists, they can be enchanted with ' +
      'melee weapon special abilities applicable to unarmed strikes, though the modified bonus cannot ' +
      'exceed +5. All four shoes must be worn by the same animal to be effective.',

    construction: {
      feats: ['Craft Magic Arms and Armor', 'Craft Wondrous Item'],
      spells: [],
      cost: 8000,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 10,
      breakDC: 20,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'attack.all',
        value: 2,
        source: 'Horseshoes of Crushing Blows +2',
        condition: {
          type: 'custom',
          params: { descriptor: 'hoof_attacks_only' },
          description: 'Hoof attacks only',
        },
      },
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'damage.all',
        value: 2,
        source: 'Horseshoes of Crushing Blows +2',
        condition: {
          type: 'custom',
          params: { descriptor: 'hoof_attacks_only' },
          description: 'Hoof attacks only',
        },
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 31. Horseshoes of Crushing Blows +3
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-horseshoes-of-crushing-blows-3',
    name: 'Horseshoes of Crushing Blows +3',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION }],
    casterLevel: 5,
    slot: 'feet',

    price: 36000,
    weight: 4,

    description:
      'These magical horseshoes enhance hoof attacks, granting a +3 enhancement bonus on attack and ' +
      'damage rolls made with hoof attacks. Like the amulet of mighty fists, they can be enchanted with ' +
      'melee weapon special abilities applicable to unarmed strikes, though the modified bonus cannot ' +
      'exceed +5. All four shoes must be worn by the same animal to be effective.',

    construction: {
      feats: ['Craft Magic Arms and Armor', 'Craft Wondrous Item'],
      spells: [],
      cost: 18000,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 10,
      breakDC: 20,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'attack.all',
        value: 3,
        source: 'Horseshoes of Crushing Blows +3',
        condition: {
          type: 'custom',
          params: { descriptor: 'hoof_attacks_only' },
          description: 'Hoof attacks only',
        },
      },
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'damage.all',
        value: 3,
        source: 'Horseshoes of Crushing Blows +3',
        condition: {
          type: 'custom',
          params: { descriptor: 'hoof_attacks_only' },
          description: 'Hoof attacks only',
        },
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 32. Horseshoes of Crushing Blows +4
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-horseshoes-of-crushing-blows-4',
    name: 'Horseshoes of Crushing Blows +4',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION }],
    casterLevel: 5,
    slot: 'feet',

    price: 64000,
    weight: 4,

    description:
      'These magical horseshoes enhance hoof attacks, granting a +4 enhancement bonus on attack and ' +
      'damage rolls made with hoof attacks. Like the amulet of mighty fists, they can be enchanted with ' +
      'melee weapon special abilities applicable to unarmed strikes, though the modified bonus cannot ' +
      'exceed +5. All four shoes must be worn by the same animal to be effective.',

    construction: {
      feats: ['Craft Magic Arms and Armor', 'Craft Wondrous Item'],
      spells: [],
      cost: 32000,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 10,
      breakDC: 20,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'attack.all',
        value: 4,
        source: 'Horseshoes of Crushing Blows +4',
        condition: {
          type: 'custom',
          params: { descriptor: 'hoof_attacks_only' },
          description: 'Hoof attacks only',
        },
      },
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'damage.all',
        value: 4,
        source: 'Horseshoes of Crushing Blows +4',
        condition: {
          type: 'custom',
          params: { descriptor: 'hoof_attacks_only' },
          description: 'Hoof attacks only',
        },
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 33. Horseshoes of Crushing Blows +5
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-horseshoes-of-crushing-blows-5',
    name: 'Horseshoes of Crushing Blows +5',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.EVOCATION }],
    casterLevel: 5,
    slot: 'feet',

    price: 100000,
    weight: 4,

    description:
      'These magical horseshoes enhance hoof attacks, granting a +5 enhancement bonus on attack and ' +
      'damage rolls made with hoof attacks. Like the amulet of mighty fists, they can be enchanted with ' +
      'melee weapon special abilities applicable to unarmed strikes, though the modified bonus cannot ' +
      'exceed +5. All four shoes must be worn by the same animal to be effective.',

    construction: {
      feats: ['Craft Magic Arms and Armor', 'Craft Wondrous Item'],
      spells: [],
      cost: 50000,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 10,
      breakDC: 20,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'attack.all',
        value: 5,
        source: 'Horseshoes of Crushing Blows +5',
        condition: {
          type: 'custom',
          params: { descriptor: 'hoof_attacks_only' },
          description: 'Hoof attacks only',
        },
      },
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'damage.all',
        value: 5,
        source: 'Horseshoes of Crushing Blows +5',
        condition: {
          type: 'custom',
          params: { descriptor: 'hoof_attacks_only' },
          description: 'Hoof attacks only',
        },
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 34. Horseshoes of Glory
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-horseshoes-of-glory',
    name: 'Horseshoes of Glory',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [
      { strength: AuraStrength.MODERATE, school: MagicSchool.ABJURATION },
      { strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION },
    ],
    casterLevel: 11,
    slot: 'feet',

    price: 39600,
    weight: 12,

    description:
      'These magical horseshoes feature deadly spikes that jut from their front. All four shoes must ' +
      'be worn by the same mount to function. Once per day on command, the rider may trigger one of ' +
      'two effects: increase the mount\'s size by one category (maximum Huge), or change the mount\'s ' +
      'type to magical beast via beast shape IV. While augmented by either effect, the mount gains ' +
      'DR 5 against chaos, evil, good, or law (rider\'s choice).',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['beast shape IV', 'protection from chaos', 'protection from evil', 'protection from good', 'protection from law'],
      cost: 19800,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 10,
      breakDC: 20,
    },

    activationCategory: 'command_word',
    activationAction: 'standard',

    spellLikeAbilities: [
      {
        usesPerDay: 1,
        spells: [
          {
            spellId: 'enlarge_person',
            spellName: 'Enlarge Person (mount size increase)',
            casterLevel: 11,
            activationAction: 'standard',
          },
          {
            spellId: 'beast_shape_iv',
            spellName: 'Beast Shape IV',
            casterLevel: 11,
            activationAction: 'standard',
          },
        ],
      },
    ],

    effects: [
      {
        type: 'resistance',
        target: 'special.dr_5_alignment',
        value: 5,
        source: 'Horseshoes of Glory',
        condition: {
          type: 'custom',
          params: { descriptor: 'while_size_or_type_augmented' },
          description: 'DR 5/alignment (rider\'s choice) while mount is augmented',
        },
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 35. Horseshoes of Great Burden
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-horseshoes-of-great-burden',
    name: 'Horseshoes of Great Burden',
    category: 'wondrous',
    source: 'Seekers of Secrets',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 3,
    slot: 'feet',

    price: 2500,
    weight: 24,

    description:
      'These iron horseshoes enhance an animal\'s carrying ability. When affixed to an animal\'s hooves, ' +
      'they double the animal\'s carrying capacity. All four shoes must be worn simultaneously by the ' +
      'same creature for the magic to function.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["bear's endurance", "bull's strength"],
      cost: 1250,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 10,
      breakDC: 20,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'special',
        target: 'special.carrying_capacity_doubled',
        value: 2,
        source: 'Horseshoes of Great Burden',
      },
    ],
  },
];
