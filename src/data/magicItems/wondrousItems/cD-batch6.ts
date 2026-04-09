import type { WondrousItemDefinition } from '@/types/magicItems';
import { AuraStrength, MagicSchool } from '@/types/equipment';

export const wondrousItemsCD6: WondrousItemDefinition[] = [
  // ---- 126: Cloak, Poet's -------------------------------------------------------
  {
    id: 'wondrous-cloak-poets',
    name: "Cloak, Poet's",
    category: 'wondrous',
    source: 'Advanced Class Guide',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 7,
    slot: 'shoulders',

    price: 9750,
    weight: 1,

    description:
      "This weathered traveler's cloak enables bardic performers to utilize raging song abilities as a " +
      '4th-level skald by consuming bardic performance rounds. Conversely, those with raging song gain ' +
      'access to inspire courage and inspire competence as a 4th-level bard. Additionally, the cloak ' +
      'permits granting one specific rage power during raging song performances, provided it is usable ' +
      'by a 4th-level skald without prerequisites beyond character level.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['good hope', 'rage'],
      specialRequirements: ['Creator must possess either bardic performance or raging song class feature'],
      cost: 4875,
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
        target: 'special.cloak_poets_bardic_raging_song_crossover',
        value: 0,
        source: "Cloak, Poet's",
      },
    ],
  },

  // ---- 127: Cloak, Prestidigitator's -------------------------------------------
  {
    id: 'wondrous-cloak-prestidigitators',
    name: "Cloak, Prestidigitator's",
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [
      { strength: AuraStrength.FAINT, school: MagicSchool.ILLUSION },
      { strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION },
    ],
    casterLevel: 5,
    slot: 'shoulders',

    price: 17200,
    weight: 1,

    description:
      'This black shoulder garment provides a +8 competence bonus on Sleight of Hand checks. As a ' +
      'full-round action, the wearer may remove it and place it on a single object occupying a 5-foot ' +
      'square or less weighing 100 lbs. or less. The object then vanishes into an extradimensional space. ' +
      'Items remain stored for a maximum of 1 hour before falling out adjacent to the cloak or wearer. ' +
      'The wearer can command the cloak to release stored objects into an adjacent square.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['guidance', 'rope trick'],
      cost: 8600,
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
        value: 8,
        source: "Cloak, Prestidigitator's",
      },
      {
        type: 'special',
        target: 'special.cloak_prestidigitators_extradimensional_storage',
        value: 0,
        source: "Cloak, Prestidigitator's",
      },
    ],
  },

  // ---- 128: Cloak, Protean (+1 through +5 variants) ----------------------------
  {
    id: 'wondrous-cloak-protean-1',
    name: 'Cloak, Protean +1',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION }],
    casterLevel: 5,
    slot: 'shoulders',

    price: 500,
    weight: 1,

    description:
      'This adaptive cloak shimmers with chaotic colors and provides a +1 resistance bonus to a single ' +
      "saving throw type chosen by the wearer. The wearer can change which saving throw receives the bonus " +
      'once daily as a standard action. The bonus defaults back to Will saves if left unattended beyond ' +
      '24 hours. The material feels scaly and rugose yet flows like silk.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['entropic shield', 'resistance'],
      specialRequirements: [
        'Creator must be chaotic; creator caster level must be at least 3 times the cloak bonus',
      ],
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
        bonusType: 'resistance',
        target: 'save.all',
        value: 1,
        source: 'Cloak, Protean +1',
        condition: {
          type: 'custom',
          params: { note: 'applies to one chosen save type; changeable once per day' },
          description: 'applies to one chosen saving throw type per day',
        },
      },
    ],
  },
  {
    id: 'wondrous-cloak-protean-2',
    name: 'Cloak, Protean +2',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION }],
    casterLevel: 5,
    slot: 'shoulders',

    price: 2000,
    weight: 1,

    description:
      'This adaptive cloak shimmers with chaotic colors and provides a +2 resistance bonus to a single ' +
      'saving throw type chosen by the wearer. The wearer can change which saving throw receives the bonus ' +
      'once daily as a standard action. The bonus defaults back to Will saves if left unattended beyond ' +
      '24 hours.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['entropic shield', 'resistance'],
      specialRequirements: [
        'Creator must be chaotic; creator caster level must be at least 3 times the cloak bonus',
      ],
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
        type: 'bonus',
        bonusType: 'resistance',
        target: 'save.all',
        value: 2,
        source: 'Cloak, Protean +2',
        condition: {
          type: 'custom',
          params: { note: 'applies to one chosen save type; changeable once per day' },
          description: 'applies to one chosen saving throw type per day',
        },
      },
    ],
  },
  {
    id: 'wondrous-cloak-protean-3',
    name: 'Cloak, Protean +3',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION }],
    casterLevel: 5,
    slot: 'shoulders',

    price: 4500,
    weight: 1,

    description:
      'This adaptive cloak shimmers with chaotic colors and provides a +3 resistance bonus to a single ' +
      'saving throw type chosen by the wearer. The wearer can change which saving throw receives the bonus ' +
      'once daily as a standard action. The bonus defaults back to Will saves if left unattended beyond ' +
      '24 hours.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['entropic shield', 'resistance'],
      specialRequirements: [
        'Creator must be chaotic; creator caster level must be at least 3 times the cloak bonus',
      ],
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
        bonusType: 'resistance',
        target: 'save.all',
        value: 3,
        source: 'Cloak, Protean +3',
        condition: {
          type: 'custom',
          params: { note: 'applies to one chosen save type; changeable once per day' },
          description: 'applies to one chosen saving throw type per day',
        },
      },
    ],
  },
  {
    id: 'wondrous-cloak-protean-4',
    name: 'Cloak, Protean +4',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION }],
    casterLevel: 5,
    slot: 'shoulders',

    price: 8000,
    weight: 1,

    description:
      'This adaptive cloak shimmers with chaotic colors and provides a +4 resistance bonus to a single ' +
      'saving throw type chosen by the wearer. The wearer can change which saving throw receives the bonus ' +
      'once daily as a standard action. The bonus defaults back to Will saves if left unattended beyond ' +
      '24 hours.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['entropic shield', 'resistance'],
      specialRequirements: [
        'Creator must be chaotic; creator caster level must be at least 3 times the cloak bonus',
      ],
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
        type: 'bonus',
        bonusType: 'resistance',
        target: 'save.all',
        value: 4,
        source: 'Cloak, Protean +4',
        condition: {
          type: 'custom',
          params: { note: 'applies to one chosen save type; changeable once per day' },
          description: 'applies to one chosen saving throw type per day',
        },
      },
    ],
  },
  {
    id: 'wondrous-cloak-protean-5',
    name: 'Cloak, Protean +5',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION }],
    casterLevel: 5,
    slot: 'shoulders',

    price: 12500,
    weight: 1,

    description:
      'This adaptive cloak shimmers with chaotic colors and provides a +5 resistance bonus to a single ' +
      'saving throw type chosen by the wearer. The wearer can change which saving throw receives the bonus ' +
      'once daily as a standard action. The bonus defaults back to Will saves if left unattended beyond ' +
      '24 hours.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['entropic shield', 'resistance'],
      specialRequirements: [
        'Creator must be chaotic; creator caster level must be at least 3 times the cloak bonus',
      ],
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
        bonusType: 'resistance',
        target: 'save.all',
        value: 5,
        source: 'Cloak, Protean +5',
        condition: {
          type: 'custom',
          params: { note: 'applies to one chosen save type; changeable once per day' },
          description: 'applies to one chosen saving throw type per day',
        },
      },
    ],
  },

  // ---- 129: Cloak, Quick Change ------------------------------------------------
  {
    id: 'wondrous-cloak-quick-change',
    name: 'Cloak, Quick Change',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 1,
    slot: 'shoulders',

    price: 1500,
    weight: 1,

    description:
      'This reversible gray hooded cape features ornate embroidery on one side and a shabby appearance ' +
      'on the other. The wearer can store up to three mundane disguises applied via the Disguise skill by ' +
      "passing the cloak's edge over their face as a swift action. Stored disguises can be reapplied on " +
      'command using the original Disguise check result, and any wearer may discard stored disguises as a ' +
      'free action.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['prestidigitation'],
      specialRequirements: ['Creator must possess at least 5 ranks in Disguise'],
      cost: 750,
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
        target: 'special.cloak_quick_change_store_disguise',
        value: 0,
        source: 'Cloak, Quick Change',
      },
    ],
  },

  // ---- 130: Cloak, Quicksand ---------------------------------------------------
  {
    id: 'wondrous-cloak-quicksand',
    name: 'Cloak, Quicksand',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'shoulders',

    price: 15000,
    weight: 4,

    description:
      'The garment features an extradimensional exterior containing water and sand. When a creature ' +
      'attempts to grapple the wearer (if equal to or smaller in size), it must succeed at a DC 15 ' +
      'Reflex saving throw or become trapped in quicksand. Each subsequent round, the trapped creature ' +
      'makes a DC 15 Swim check to escape, emerging prone adjacent to the wearer. Failing by 5 or more ' +
      'causes submersion and drowning. When placed on the ground, it functions as a quicksand patch ' +
      'occupying one 5-foot square. The cloak can contain only one creature at a time.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['create water', 'shifting sand'],
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
        target: 'special.cloak_quicksand_grapple_trap',
        value: 0,
        source: 'Cloak, Quicksand',
      },
    ],
  },

  // ---- 131: Cloak, Shield ------------------------------------------------------
  {
    id: 'wondrous-cloak-shield',
    name: 'Cloak, Shield',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION }],
    casterLevel: 4,
    slot: 'shoulders',

    price: 1000,
    weight: 1,

    description:
      'This garment can be grasped as a move action to harden its edge, functioning as a masterwork ' +
      'light wooden shield. It imposes no armor check penalty but causes a 5% arcane spell failure ' +
      'chance. The edge can be returned to normal as a free action. The cloak can receive shield ' +
      'enhancement bonuses and special abilities.',

    construction: {
      feats: ['Craft Wondrous Item', 'Craft Magic Arms and Armor'],
      spells: ['shield'],
      cost: 500,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 5,
      breakDC: 16,
    },

    activationCategory: 'use_activated',
    activationAction: 'move',

    effects: [
      {
        type: 'special',
        target: 'special.cloak_shield_masterwork_light_shield',
        value: 0,
        source: 'Cloak, Shield',
      },
    ],
  },

  // ---- 132: Cloak, Stone (Minor and Greater) -----------------------------------
  {
    id: 'wondrous-cloak-stone-minor',
    name: 'Cloak, Stone (Minor)',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION }],
    casterLevel: 5,
    slot: 'shoulders',

    price: 10000,
    weight: 1,

    description:
      'The wearer can freeze in place as a move action, gaining DR 5/adamantine and a +5 circumstance ' +
      'bonus on Stealth checks while motionless, but loses the Dexterity bonus to AC and can only take ' +
      'free actions while frozen. The wearer may resume normal movement as a move action.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['stone shape'],
      cost: 5000,
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
        target: 'dr',
        value: 5,
        source: 'Cloak, Stone (Minor)',
        condition: {
          type: 'custom',
          params: { activationState: 'frozen' },
          description: 'while frozen in place (move action to activate)',
        },
      },
      {
        type: 'bonus',
        bonusType: 'circumstance',
        target: 'skill.stealth',
        value: 5,
        source: 'Cloak, Stone (Minor)',
        condition: {
          type: 'custom',
          params: { activationState: 'frozen' },
          description: 'while frozen in place (move action to activate)',
        },
      },
    ],
  },
  {
    id: 'wondrous-cloak-stone-greater',
    name: 'Cloak, Stone (Greater)',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ABJURATION }],
    casterLevel: 8,
    slot: 'shoulders',

    price: 20000,
    weight: 1,

    description:
      'The wearer can freeze in place as a move action, gaining DR 10/adamantine and a +5 circumstance ' +
      'bonus on Stealth checks while motionless, but loses the Dexterity bonus to AC and can only take ' +
      'free actions while frozen. The wearer may resume normal movement as a move action.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['stoneskin'],
      cost: 10000,
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
        target: 'dr',
        value: 10,
        source: 'Cloak, Stone (Greater)',
        condition: {
          type: 'custom',
          params: { activationState: 'frozen' },
          description: 'while frozen in place (move action to activate)',
        },
      },
      {
        type: 'bonus',
        bonusType: 'circumstance',
        target: 'skill.stealth',
        value: 5,
        source: 'Cloak, Stone (Greater)',
        condition: {
          type: 'custom',
          params: { activationState: 'frozen' },
          description: 'while frozen in place (move action to activate)',
        },
      },
    ],
  },

  // ---- 133: Cloak, Tentacle ----------------------------------------------------
  {
    id: 'wondrous-cloak-tentacle',
    name: 'Cloak, Tentacle',
    category: 'wondrous',
    source: 'Advanced Race Guide',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 7,
    slot: 'shoulders',

    price: 14000,
    weight: 1,

    description:
      'A deep blue cloak that produces subtle, indefinable shapes rippling when moving. Once per day, ' +
      'two gray tentacles emerge from the shoulders, each dealing 1d6 bludgeoning damage (for Medium ' +
      'wearers, scaling by size). The tentacles have 10-foot reach, possess the grab ability, and grant ' +
      'the wearer a +4 competence bonus on grapple checks. Duration: 1 minute.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['polymorph'],
      cost: 7000,
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
            spellId: 'black_tentacles',
            spellName: 'Black Tentacles (partial — two tentacles only)',
            casterLevel: 7,
            usesPerDay: 1,
            activationAction: 'standard',
          },
        ],
      },
    ],

    effects: [
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'cmb',
        value: 4,
        source: 'Cloak, Tentacle',
        condition: {
          type: 'custom',
          params: { activationState: 'tentacles_active' },
          description: 'while tentacles are active (1/day, 1 minute)',
        },
      },
    ],
  },

  // ---- 134: Cloak, Treeform ----------------------------------------------------
  {
    id: 'wondrous-cloak-treeform',
    name: 'Cloak, Treeform',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 7,
    slot: 'shoulders',

    price: 6000,
    weight: 1,

    description:
      'This shoulder garment allows the wearer to assume the shape of a living tree, as the tree shape ' +
      'spell, once daily. Additionally, while transformed, the wearer gains healing benefits: each hour ' +
      'spent in tree form in direct sunlight heals 1d6 hit points.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['goodberry', 'tree shape'],
      cost: 3000,
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
            spellId: 'tree_shape',
            spellName: 'Tree Shape',
            casterLevel: 7,
            usesPerDay: 1,
            activationAction: 'standard',
          },
        ],
      },
    ],

    effects: [
      {
        type: 'special',
        target: 'special.cloak_treeform_sunlight_healing',
        value: 0,
        source: 'Cloak, Treeform',
      },
    ],
  },

  // ---- 135: Cloak, Wyvern ------------------------------------------------------
  {
    id: 'wondrous-cloak-wyvern',
    name: 'Cloak, Wyvern',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 7,
    slot: 'shoulders',

    price: 78600,
    weight: 1,

    description:
      'This blue scaled leather cloak provides multiple benefits. The wearer gains a +4 resistance ' +
      'bonus on Will saves and a continuous feather fall effect. Once per day, the wearer may cast fly. ' +
      'As a swift action, the wearer can transform the hem into a stinger natural weapon dealing 1d6 ' +
      'damage plus poison (DC 16), reverting it to normal form as a free action.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['feather fall', 'fly', 'poison', 'resistance'],
      specialRequirements: ['Creator caster level must be at least 12th'],
      cost: 39300,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'continuous',

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'fly',
            spellName: 'Fly',
            casterLevel: 7,
            usesPerDay: 1,
            activationAction: 'standard',
          },
        ],
      },
    ],

    effects: [
      {
        type: 'bonus',
        bonusType: 'resistance',
        target: 'save.will',
        value: 4,
        source: 'Cloak, Wyvern',
      },
      {
        type: 'special',
        target: 'special.cloak_wyvern_feather_fall',
        value: 0,
        source: 'Cloak, Wyvern',
      },
      {
        type: 'special',
        target: 'special.cloak_wyvern_stinger_attack',
        value: 0,
        source: 'Cloak, Wyvern',
      },
    ],
  },

  // ---- 136: Clockwork Arm ------------------------------------------------------
  {
    id: 'wondrous-clockwork-arm',
    name: 'Clockwork Arm',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [
      { strength: AuraStrength.STRONG, school: MagicSchool.CONJURATION },
      { strength: AuraStrength.STRONG, school: MagicSchool.TRANSMUTATION },
    ],
    casterLevel: 13,
    slot: 'none',

    price: 6400,
    weight: 25,

    description:
      "This prosthetic replacement arm attaches to a Medium humanoid and requires a one-hour surgical " +
      'installation by someone with 8 ranks in both Craft (clockwork) and Heal. The recipient must make ' +
      'a DC 18 Fortitude save and takes 2 points of Constitution damage regardless of outcome. When ' +
      "properly attached, it allows lifting 1.5 times the maximum load overhead and provides a secondary " +
      'claw attack dealing 1d6 points of damage when the arm is empty.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['bull strength', 'regenerate'],
      specialRequirements: ['Creator must possess 8 ranks in Craft (clockwork)'],
      cost: 3200,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 20,
      breakDC: 24,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'special',
        target: 'special.clockwork_arm_enhanced_lifting',
        value: 0,
        source: 'Clockwork Arm',
      },
      {
        type: 'special',
        target: 'special.clockwork_arm_claw_attack',
        value: 0,
        source: 'Clockwork Arm',
      },
    ],
  },

  // ---- 137: Clockwork Bug ------------------------------------------------------
  {
    id: 'wondrous-clockwork-bug',
    name: 'Clockwork Bug',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ILLUSION }],
    casterLevel: 4,
    slot: 'none',

    price: 1100,
    weight: 1,

    description:
      'This brass beetle-shaped construct records sounds within a 20-foot radius onto a gemstone ' +
      '(worth 10 gp) embedded in its body. It can capture up to 1 hour of continuous audio. Playback ' +
      'is a swift action. Used gemstones cannot be reused; replacement requires a DC 25 Disable Device ' +
      'check as a full-round action. The bug clings to surfaces indefinitely and includes optional ' +
      'timers for delayed recording (up to 24 hours) and self-destruction (up to 72 hours).',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['ghost sound'],
      specialRequirements: ['Craft (clockwork) 4 ranks'],
      cost: 550,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 5,
      breakDC: 18,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.clockwork_bug_sound_recording',
        value: 0,
        source: 'Clockwork Bug',
      },
    ],
  },

  // ---- 138: Clockwork Prosthesis -----------------------------------------------
  {
    id: 'wondrous-clockwork-prosthesis',
    name: 'Clockwork Prosthesis',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [
      { strength: AuraStrength.STRONG, school: MagicSchool.CONJURATION },
      { strength: AuraStrength.STRONG, school: MagicSchool.TRANSMUTATION },
    ],
    casterLevel: 13,
    slot: 'none',

    price: 6400,
    weight: 25,

    description:
      'This magical prosthetic limb replaces a lost arm or leg. Installation takes at least 1 hour; ' +
      'the bearer must make a DC 18 Fortitude save or suffer 2 points of Constitution damage during ' +
      'installation. A clockwork arm increases lifting capacity to 1.5 times maximum load (or 2 times ' +
      'with two arms) and allows lethal unarmed strikes, granting a +10 bonus to CMD against disarm ' +
      'attempts. A clockwork leg increases lifting capacity to 2.5 times maximum load off the ground ' +
      '(or 3 times with two legs) and provides a +4 bonus to CMD against trip and bull rush attempts.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['bull strength', 'regenerate'],
      specialRequirements: ['Craft (clockwork) 8 ranks'],
      cost: 3200,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 20,
      breakDC: 24,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'special',
        target: 'special.clockwork_prosthesis_arm_enhanced_lifting',
        value: 0,
        source: 'Clockwork Prosthesis',
      },
      {
        type: 'bonus',
        bonusType: 'untyped',
        target: 'cmd',
        value: 10,
        source: 'Clockwork Prosthesis',
        condition: {
          type: 'custom',
          params: { maneuver: 'disarm', limbType: 'arm' },
          description: 'arm only: against disarm attempts',
        },
      },
      {
        type: 'bonus',
        bonusType: 'untyped',
        target: 'cmd',
        value: 4,
        source: 'Clockwork Prosthesis',
        condition: {
          type: 'custom',
          params: { maneuver: 'trip_bull_rush', limbType: 'leg' },
          description: 'leg only: against trip and bull rush attempts',
        },
      },
    ],
  },

  // ---- 139: Coat of Mist -------------------------------------------------------
  {
    id: 'wondrous-coat-of-mist',
    name: 'Coat of Mist',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'chest',

    price: 8400,
    weight: 3,

    description:
      'A gossamer gray-and-white silk jacket providing stealth bonuses in misty conditions. The wearer ' +
      'gains a +5 bonus on Stealth checks in fog, mist, smoke, or heavy spray. As a standard action, ' +
      'the wearer can achieve total concealment in such areas regardless of distance. Attacking does not ' +
      'break concealment if remaining within or adjacent to the misty area. This total concealment ' +
      'ability can be used for 5 rounds per day (non-continuous). Additionally, once daily the wearer ' +
      'can transform into mist form per gaseous form spell for up to 5 rounds.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['gaseous form', 'obscuring mist'],
      cost: 4200,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'continuous',

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'gaseous_form',
            spellName: 'Gaseous Form',
            casterLevel: 5,
            usesPerDay: 1,
            activationAction: 'standard',
          },
        ],
      },
    ],

    effects: [
      {
        type: 'bonus',
        bonusType: 'circumstance',
        target: 'skill.stealth',
        value: 5,
        source: 'Coat of Mist',
        condition: {
          type: 'custom',
          params: { environment: 'fog_mist_smoke_spray' },
          description: 'in fog, mist, smoke, or heavy spray',
        },
      },
      {
        type: 'special',
        target: 'special.coat_of_mist_total_concealment',
        value: 5,
        source: 'Coat of Mist',
      },
    ],
  },

  // ---- 140: Coat of Pockets ----------------------------------------------------
  {
    id: 'wondrous-coat-of-pockets',
    name: 'Coat of Pockets',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 9,
    slot: 'body',

    price: 2500,
    weight: 7,

    description:
      'A black-and-gray wool coat with numerous pockets whose interdimensional magic causes anything ' +
      'placed in one pocket to immediately appear in another randomly determined pocket. Wearers gain a ' +
      '+5 circumstance bonus on Sleight of Hand checks to conceal small objects. However, retrieving ' +
      'items requires a standard action instead of a move action.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['secret chest'],
      cost: 1250,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 2,
      breakDC: 10,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'circumstance',
        target: 'skill.sleight_of_hand',
        value: 5,
        source: 'Coat of Pockets',
        condition: {
          type: 'custom',
          params: { use: 'conceal_small_objects' },
          description: 'to conceal small objects',
        },
      },
    ],
  },

  // ---- 141: Coat, Resplendent Uniform ------------------------------------------
  {
    id: 'wondrous-coat-resplendent-uniform',
    name: 'Coat, Resplendent Uniform',
    category: 'wondrous',
    source: 'Ultimate Combat',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 5,
    slot: 'chest',

    price: 7000,
    weight: 5,

    description:
      'This woolen long coat is typically worn over light armor by military commanders. A cavalier with ' +
      'the tactician ability may use that ability one additional time per day, and the tactician ability ' +
      'affects allies within 60 feet instead of 30 feet.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['heroism'],
      cost: 3500,
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
        target: 'special.coat_resplendent_uniform_tactician_extra_use',
        value: 1,
        source: 'Coat, Resplendent Uniform',
      },
      {
        type: 'special',
        target: 'special.coat_resplendent_uniform_tactician_range',
        value: 60,
        source: 'Coat, Resplendent Uniform',
      },
    ],

    conditionalEffects: [
      {
        condition: 'wielder_class',
        classId: 'cavalier',
        effects: [
          {
            type: 'bonus',
            bonusType: 'untyped',
            target: 'special.tactician_uses_per_day',
            value: 1,
            source: 'Coat, Resplendent Uniform',
          },
        ],
      },
    ],
  },

  // ---- 142: Cockatrice Grit ----------------------------------------------------
  {
    id: 'wondrous-cockatrice-grit',
    name: 'Cockatrice Grit',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 11,
    slot: 'none',

    price: 2000,
    weight: 0,

    description:
      'This magical substance is thrown at targets within 15 feet as a ranged touch attack. On a hit, ' +
      'the target suffers 1d4 Dexterity damage and becomes slowed for 1 round as petrification begins. ' +
      'Each subsequent round, the victim may attempt a DC 17 Fortitude save to end the effect; failure ' +
      'results in an additional 1d4 Dexterity damage and another round of slowness. The effect persists ' +
      'for up to 11 rounds maximum. If accumulated Dexterity damage meets or exceeds the victim\'s ' +
      'actual Dexterity score, they become permanently petrified as if by flesh to stone. The grit is ' +
      'consumed upon use and is safe to handle.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['calcific touch'],
      cost: 1000,
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
        target: 'special.cockatrice_grit_petrification',
        value: 0,
        source: 'Cockatrice Grit',
      },
    ],
  },

  // ---- 143: Coffer, Death's Head -----------------------------------------------
  {
    id: 'wondrous-coffer-deaths-head',
    name: "Coffer, Death's Head",
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.NECROMANCY }],
    casterLevel: 5,
    slot: 'none',

    price: 1000,
    weight: 5,

    description:
      "These small metal coffers preserve infectious substances of up to Tiny size in stasis when " +
      'sealed. The magic allows disease-ridden items to transmit afflictions to other objects placed ' +
      'inside for up to one week after removal. Complex locking variants may require a DC 20 Disable ' +
      'Device check to open. The coffer becomes mundane after being closed and reopened.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['contagion', 'gentle repose'],
      cost: 500,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 5,
      breakDC: 20,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.coffer_deaths_head_disease_stasis',
        value: 0,
        source: "Coffer, Death's Head",
      },
    ],
  },

  // ---- 144: Coin of the Untrodden Road -----------------------------------------
  {
    id: 'wondrous-coin-untrodden-road',
    name: 'Coin of the Untrodden Road',
    category: 'wondrous',
    source: 'Advanced Race Guide',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 6,
    slot: 'none',

    price: 6000,
    weight: 0,

    description:
      'This tarnished copper coin allows humans, half-elves, or half-orcs to flip it for effects ' +
      'lasting 1 hour. The user takes a -2 penalty to their racial +2 ability score bonus while gaining ' +
      'a +2 inherent bonus to a random other ability score. The coin functions three times daily.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['alter self'],
      cost: 3000,
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
        target: 'special.coin_untrodden_road_ability_swap',
        value: 0,
        source: 'Coin of the Untrodden Road',
      },
    ],
  },

  // ---- 145: Coin, Minder's -----------------------------------------------------
  {
    id: 'wondrous-coin-minders',
    name: "Coin, Minder's",
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 1,
    slot: 'none',

    price: 450,
    weight: 0,

    description:
      "A copper coin that creates a bond with whoever holds it under their tongue for 24 hours. The " +
      "owner can determine the coin's direction and distance each time she casts detect magic. The " +
      'connection severs if the coin enters another plane or an antimagic field.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['detect magic'],
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
        target: 'special.coin_minders_locate_coin',
        value: 0,
        source: "Coin, Minder's",
      },
    ],
  },

  // ---- 146: Coin, Pathfinder's -------------------------------------------------
  {
    id: 'wondrous-coin-pathfinders',
    name: "Coin, Pathfinder's",
    category: 'wondrous',
    source: 'Seekers of Secrets',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 3,
    slot: 'none',

    price: 1500,
    weight: 0,

    description:
      'This coin contains gold and platinum wires that cause it to levitate an inch above a wayfinder ' +
      'while slowly spinning. Users can record a message of up to 25 words, which plays in the ' +
      "speaker's voice when the coin is next floated above a wayfinder. Only one message stores at a " +
      'time; triggering it expends the message.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['identify', 'levitate', 'magic mouth'],
      cost: 750,
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
        target: 'special.coin_pathfinders_wayfinder_message',
        value: 0,
        source: "Coin, Pathfinder's",
      },
    ],
  },

  // ---- 147: Coin, Whispering ---------------------------------------------------
  {
    id: 'wondrous-coin-whispering',
    name: 'Coin, Whispering',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.DIVINATION }],
    casterLevel: 9,
    slot: 'none',

    price: 3000,
    weight: 0,

    description:
      'An ancient gold coin bearing an ancient rune on one side and a broken column on the other. The ' +
      "carrier receives a +1 resistance bonus on saving throws against spells matching the coin's " +
      'school. Once daily, the bearer can flip the coin while asking a question in the ancient language; ' +
      'it answers yes or no but only for matters affecting the carrier within the immediate future, not ' +
      'conjecture.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['augury', 'resistance'],
      cost: 1500,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'continuous',

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'augury',
            spellName: 'Augury',
            casterLevel: 9,
            usesPerDay: 1,
            activationAction: 'standard',
          },
        ],
      },
    ],

    effects: [
      {
        type: 'bonus',
        bonusType: 'resistance',
        target: 'save.all',
        value: 1,
        source: 'Coin, Whispering',
        condition: {
          type: 'custom',
          params: { magicSchool: "coin's school" },
          description: "against spells matching the coin's school",
        },
      },
    ],
  },

  // ---- 148: Coldfire Wrappings -------------------------------------------------
  {
    id: 'wondrous-coldfire-wrappings',
    name: 'Coldfire Wrappings',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION }],
    casterLevel: 10,
    slot: 'body',

    price: 2000,
    weight: 1,

    description:
      'These magical linen wrappings are wound around a Medium creature in 10 minutes. As an immediate ' +
      'action, the wearer can activate wispy blue flames that function as the chill shield version of ' +
      'fire shield, inflicting 1d6+10 points of cold damage to attackers. The protection persists for ' +
      '10 rounds before the wrappings deteriorate into fine ash.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['fire shield'],
      cost: 1000,
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
        target: 'special.coldfire_wrappings_chill_shield',
        value: 10,
        source: 'Coldfire Wrappings',
      },
    ],
  },

  // ---- 149: Collar of Obedience ------------------------------------------------
  {
    id: 'wondrous-collar-of-obedience',
    name: 'Collar of Obedience',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 9,
    slot: 'neck',

    price: 5000,
    weight: 3,

    description:
      'A red leather collar with a golden pendant that makes the wearer much more biddable and ' +
      'compliant. The wearer suffers a -4 penalty on saving throws against mind-affecting effects from ' +
      'the creature that placed the collar, while that creature gains a +4 bonus on Handle Animal ' +
      'checks against the wearer. Other creatures take a -4 penalty on Handle Animal checks against ' +
      'the wearer, who gains a +2 resistance bonus on saving throws against mind-affecting effects from ' +
      'those other creatures. Can be placed on Small, Medium, or Large creatures via successful grapple ' +
      'as a full-round action. Removing it also requires a full-round action.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['charm animal'],
      cost: 2500,
    },
    physicalStats: {
      hardness: 2,
      hitPoints: 5,
      breakDC: 16,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'penalty',
        target: 'save.will',
        value: -4,
        source: 'Collar of Obedience',
        condition: {
          type: 'custom',
          params: { source: 'mind_affecting_from_placer' },
          description: 'against mind-affecting effects from the creature that placed the collar',
        },
      },
      {
        type: 'bonus',
        bonusType: 'untyped',
        target: 'skill.handle_animal',
        value: 4,
        source: 'Collar of Obedience',
        condition: {
          type: 'custom',
          params: { role: 'placer_using_collar' },
          description: 'bonus for the creature that placed the collar on Handle Animal checks against the wearer',
        },
      },
      {
        type: 'bonus',
        bonusType: 'resistance',
        target: 'save.will',
        value: 2,
        source: 'Collar of Obedience',
        condition: {
          type: 'custom',
          params: { source: 'mind_affecting_from_others' },
          description: 'wearer resistance bonus vs mind-affecting from creatures other than the one who placed the collar',
        },
      },
    ],
  },

  // ---- 150: Collar of Sacrifice ------------------------------------------------
  {
    id: 'wondrous-collar-of-sacrifice',
    name: 'Collar of Sacrifice',
    category: 'wondrous',
    source: 'Ultimate Magic',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.NECROMANCY }],
    casterLevel: 10,
    slot: 'neck',

    price: 2000,
    weight: 0,

    description:
      "This plain black collar decorated with snowflake obsidian functions exclusively with a " +
      "spellcaster's familiar or spirit animal. When the bonded master dies, the collar drains the " +
      "familiar's life force to restore its master: the familiar is killed instantly and the bonded " +
      'master is returned to life with 1 hit point. The item has no effect on undead or construct ' +
      'familiars. A familiar wearing this collar becomes despondent and paranoid, requiring the master ' +
      'to succeed at a DC 15 Charisma check to compel obedience.',

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

    activationCategory: 'continuous',

    effects: [
      {
        type: 'special',
        target: 'special.collar_of_sacrifice_familiar_revival',
        value: 0,
        source: 'Collar of Sacrifice',
      },
    ],
  },
];
