import type { WondrousItemDefinition } from '@/types/magicItems';
import { AuraStrength, MagicSchool } from '@/types/equipment';
import { Alignment } from '@/types/base';

export const wondrousItemsHL9: WondrousItemDefinition[] = [
  // ---- 1. Loathsome Mirror ---------------------------------------------------
  {
    id: 'wondrous-loathsome-mirror',
    name: 'Loathsome Mirror',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 5,
    slot: 'none',

    price: 9000,
    weight: 10,

    description:
      'This buckler-sized mirror displays creatures in their most unflattering appearance. ' +
      'Held in one hand, it can be activated three times per day as a standard action. ' +
      'When activated against a target within 30 feet who can see the mirror, the creature ' +
      'appears loathsome to observers for 5 rounds. During this period, any creature ' +
      'attempting to cast beneficial spells or effects on the subject must succeed at a ' +
      'DC 14 Will save or waste the action and choose a different target. Once a creature ' +
      'succeeds on the save, it can target the subject normally for the remainder of the effect.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['unadulterated loathing'],
      cost: 4500,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 5,
      breakDC: 12,
    },

    activationCategory: 'use_activated',
    activationAction: 'standard',

    charges: { maximum: 3, rechargeMethod: 'daily' },

    effects: [
      {
        type: 'special',
        target: 'special.loathsome_mirror_effect',
        value: 0,
        source: 'Loathsome Mirror',
      },
    ],
  },

  // ---- 2. Lock of Formbinding ------------------------------------------------
  {
    id: 'wondrous-lock-of-formbinding',
    name: 'Lock of Formbinding',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ABJURATION }],
    casterLevel: 7,
    slot: 'none',

    price: 50000,
    weight: 2,

    description:
      'This magical restraint is forged from adamantine and silver, and magically resizes to ' +
      "fit any humanoid wearer's ankle. The lock suppresses all polymorph and supernatural " +
      'shapechanging effects on the wearer, forcing them into their true form. However, it ' +
      "does not negate these effects — if removed before a duration expires, the wearer " +
      'reverts to their altered form. Creatures targeted by polymorph while wearing the lock ' +
      'are affected for only one round before reverting to their true form. A wearer attempting ' +
      'voluntary shapeshifting must succeed at a DC 16 Will save each round or revert to their ' +
      'true form. Attachment requires a full-round action and provokes attacks of opportunity; ' +
      'unwilling creatures must be unconscious, pinned, or helpless to have it attached. ' +
      'Without the key, removal requires a DC 30 Strength check, DC 37 Escape Artist check, ' +
      'or DC 30 Disable Device check.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['true form'],
      cost: 25000,
    },
    physicalStats: {
      hardness: 20,
      hitPoints: 20,
      breakDC: 30,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'special',
        target: 'special.suppress_polymorph',
        value: 0,
        source: 'Lock of Formbinding',
      },
      {
        type: 'special',
        target: 'special.voluntary_shapechange_will_save',
        value: 0,
        source: 'Lock of Formbinding',
      },
    ],
  },

  // ---- 3. Locket, Eye-Stealing -----------------------------------------------
  {
    id: 'wondrous-locket-eye-stealing',
    name: 'Locket, Eye-Stealing',
    category: 'wondrous',
    source: 'Blood of Shadows',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.NECROMANCY }],
    casterLevel: 3,
    slot: 'none',

    price: 24000,
    weight: 0,

    description:
      'A silver locket suspended from a silver chain. As a standard action, the holder can ' +
      'speak a command word to attempt stealing the sight of one creature within 30 feet. ' +
      "The target must make a DC 13 Fortitude save or have its eyes sealed within the locket " +
      'and replaced with featureless, shadowy orbs, becoming permanently blinded. Only the ' +
      'wielder can return the eyes by speaking a second command word; otherwise the blindness ' +
      'cannot be removed except through miracle or wish. The locket holds only one set of eyes ' +
      'at a time and grants the wielder a body-part connection to the original owner for scrying ' +
      'purposes. If wielded by a mesmerist against a target of their hypnotic stare, the Will ' +
      'save penalty applies to this Fortitude save.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['blindness/deafness'],
      cost: 12000,
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
        target: 'special.eye_stealing_blind',
        value: 0,
        source: 'Locket, Eye-Stealing',
      },
    ],
  },

  // ---- 4. Lockpicks, Luminous ------------------------------------------------
  {
    id: 'wondrous-lockpicks-luminous',
    name: 'Lockpicks, Luminous',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 3,
    slot: 'none',

    price: 6000,
    weight: 2,

    description:
      "These masterwork thieves' tools emit a glow visible only to their holder, allowing " +
      'them to function in all types of darkness without revealing the user to others. The ' +
      'light illuminates only the lock being worked on. As the tools operate, they change ' +
      'color to indicate the positioning of their picks within the lock mechanism. The tools ' +
      'grant a +5 circumstance bonus on Disable Device checks.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['knock'],
      cost: 3000,
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
        bonusType: 'circumstance',
        target: 'skill.disable_device',
        value: 5,
        source: 'Lockpicks, Luminous',
      },
      {
        type: 'special',
        target: 'special.invisible_glow_holder_only',
        value: 0,
        source: 'Lockpicks, Luminous',
      },
    ],
  },

  // ---- 5. Looter's Satchel ---------------------------------------------------
  {
    id: 'wondrous-looters-satchel',
    name: "Looter's Satchel",
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 9,
    slot: 'none',

    price: 3200,
    weight: 15,

    description:
      'A maroon satchel embroidered with slightly glowing runes. It functions as a bag of ' +
      'holding (type I), capable of carrying up to 250 pounds within 30 cubic feet of ' +
      'extradimensional space. When held over an adjacent dead or unconscious creature, the ' +
      'bearer can speak a command word to trigger item extraction. The satchel removes magic ' +
      "items from the creature's person — including weapons, armor, potions, scrolls, and " +
      'wondrous items — and deposits them into the bag over 1 uninterrupted round. The bearer ' +
      'must remain stationary during this process. If the capacity would be exceeded, the ' +
      'satchel takes items from smallest to largest until full.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['mage hand', 'secret chest'],
      cost: 1600,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 2,
      breakDC: 10,
    },

    activationCategory: 'command_word',
    activationAction: 'standard',

    effects: [
      {
        type: 'special',
        target: 'special.extradimensional_storage',
        value: 0,
        source: "Looter's Satchel",
      },
      {
        type: 'special',
        target: 'special.automatic_item_extraction',
        value: 0,
        source: "Looter's Satchel",
      },
    ],
  },

  // ---- 6. Lore Needle --------------------------------------------------------
  {
    id: 'wondrous-lore-needle',
    name: 'Lore Needle',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 3,
    slot: 'head',

    price: 4000,
    weight: 0,

    description:
      'A silver needle approximately 6 inches long that can be implanted into a willing or ' +
      'helpless target to expand their knowledge. Insertion takes 10 minutes and requires a ' +
      'DC 15 Heal check (DC 25 if self-implanting). A failed implantation check deals 2 points ' +
      'each of Constitution and Intelligence damage. A creature with an implanted lore needle ' +
      'can apply its bonus from any single trained Knowledge skill to up to three additional ' +
      'Knowledge checks per day, even for Knowledge skills it is not trained in.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['modify memory'],
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
        type: 'special',
        target: 'special.knowledge_skill_cross_application',
        value: 3,
        source: 'Lore Needle',
      },
    ],
  },

  // ---- 7. Lucky Horseshoe ----------------------------------------------------
  {
    id: 'wondrous-lucky-horseshoe',
    name: 'Lucky Horseshoe',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION }],
    casterLevel: 9,
    slot: 'none',

    price: 6800,
    weight: 2,

    description:
      'This wondrous horseshoe channels mystical forces of good fortune. The carrier gains a ' +
      'constant +1 luck bonus to saving throws while the horseshoe is on their person. ' +
      'Once per day, the owner may activate its power to gain a +4 luck bonus on a single ' +
      'saving throw, declared before the roll is made.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['divine favor'],
      cost: 3400,
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
        bonusType: 'luck',
        target: 'save.all',
        value: 1,
        source: 'Lucky Horseshoe',
      },
      {
        // 1/day activated +4 luck bonus on a single save (declared before roll)
        type: 'special',
        target: 'special.lucky_horseshoe_single_save_bonus',
        value: 4,
        source: 'Lucky Horseshoe',
      },
    ],
  },

  // ---- 8. Lucky Rock ---------------------------------------------------------
  {
    id: 'wondrous-lucky-rock',
    name: 'Lucky Rock',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [
      { strength: AuraStrength.MODERATE, school: MagicSchool.ENCHANTMENT },
      { strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION },
    ],
    casterLevel: 11,
    slot: 'none',

    price: 35000,
    weight: 0,

    description:
      "A weathered stone resembling shale. The lucky rock can cast good hope once per day, " +
      'and its bearer gains a +2 insight bonus on saving throws against fear effects and ' +
      'effects with the emotion descriptor. The stone is an intelligent item that speaks ' +
      'Common and Halfling in a drawling voice, offering unsolicited commentary and advice ' +
      'using simple language. It remains silent and shudders in the presence of obvious ' +
      'followers of evil deities.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['divine favor', 'good hope'],
      cost: 17500,
    },
    physicalStats: {
      hardness: 8,
      hitPoints: 5,
      breakDC: 20,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'insight',
        target: 'save.all',
        value: 2,
        source: 'Lucky Rock',
        condition: {
          type: 'custom',
          params: { descriptor: 'fear or emotion' },
          description: 'against fear effects and effects with the emotion descriptor',
        },
      },
    ],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'good_hope',
            spellName: 'Good Hope',
            casterLevel: 11,
            usesPerDay: 1,
            activationAction: 'standard',
          },
        ],
      },
    ],

    intelligentItem: {
      intelligence: 10,
      wisdom: 16,
      charisma: 14,
      alignment: Alignment.NeutralGood,
      ego: 10,
      communication: ['speech'],
      languages: ['Common', 'Halfling'],
      senses: ['120 ft.'],
      powers: [
        'Casts good hope 1/day',
        'Grants bearer +2 insight bonus on saves against fear and emotion effects',
        'Offers unsolicited advice; remains silent around obvious followers of evil deities',
      ],
    },
  },

  // ---- 9. Luminous Facet -----------------------------------------------------
  {
    id: 'wondrous-luminous-facet',
    name: 'Luminous Facet',
    category: 'wondrous',
    source: "Dungeoneer's Handbook",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.EVOCATION }],
    casterLevel: 3,
    slot: 'none',

    price: 850,
    weight: 3,

    description:
      'A glass cone welded to a brass base containing a faint crimson-and-violet flame shaped ' +
      'like a blooming flower that sheds no visible light in its dormant state. Speaking the ' +
      'command word ignites it to shed light like a torch; speaking it again extinguishes the ' +
      'flame. The user need not hold the facet but must be within 60 feet to activate or ' +
      'deactivate it. Multiple luminous facets can share the same command word, allowing ' +
      'coordinated lighting control. The flat base makes it easy to attach to walls or ' +
      'ceilings using alchemical cement or sovereign glue.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['continual flame', 'prestidigitation'],
      cost: 450,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'command_word',
    activationAction: 'free',

    effects: [
      {
        type: 'special',
        target: 'special.torch_light_30ft',
        value: 0,
        source: 'Luminous Facet',
      },
    ],
  },

  // ---- 10. Lute of the Battle Ready ------------------------------------------
  {
    id: 'wondrous-lute-of-the-battle-ready',
    name: 'Lute of the Battle Ready',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 3,
    slot: 'none',

    price: 2000,
    weight: 3,

    description:
      'This instrument, typically crafted as a lute, can be commanded three times per day ' +
      'to transform into a +1 spear, +1 longsword, or +1 battleaxe. The weapon type is ' +
      'determined at the time of the instrument\'s creation. The transformed weapon persists ' +
      'for 1 minute or until the wielder issues another command to revert it back to ' +
      'instrument form.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['shillelagh'],
      cost: 1000,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 5,
      breakDC: 18,
    },

    activationCategory: 'command_word',
    activationAction: 'free',

    charges: { maximum: 3, rechargeMethod: 'daily' },

    effects: [
      {
        type: 'special',
        target: 'special.instrument_weapon_transformation',
        value: 0,
        source: 'Lute of the Battle Ready',
      },
    ],
  },

  // ---- 11. Lyre of Building --------------------------------------------------
  {
    id: 'wondrous-lyre-of-building',
    name: 'Lyre of Building',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 6,
    slot: 'none',

    price: 13000,
    weight: 5,

    description:
      'This gold instrument inlaid with gems serves two powerful functions. Once per day, ' +
      'if the proper chords are struck, a single playing negates any attacks made against ' +
      'inanimate construction (walls, roof, floor, and so on) within 300 feet for 30 minutes. ' +
      'This protection includes effects from a horn of blasting, a disintegrate spell, or ' +
      'siege weapon attacks. ' +
      'Once per week, the strings can be strummed to magically assist construction of ' +
      'buildings, mines, tunnels, or ditches. The effect produced in 30 minutes equals the ' +
      'work that 100 humans could perform in 3 days of labor. Each hour after the first, the ' +
      'character playing the lyre must make a DC 18 Perform (string instruments) check; ' +
      'on a failure, she must stop and cannot use the lyre for construction purposes again ' +
      'until a week has passed.',

    construction: {
      feats: ['Craft Wondrous Item', 'Fabricate'],
      spells: ['fabricate'],
      cost: 6500,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 5,
      breakDC: 18,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        // Protects structures within 300 ft from damage; 1/day, 30 minutes
        type: 'special',
        target: 'special.negate_structure_damage',
        value: 0,
        source: 'Lyre of Building',
      },
      {
        // 1/week construction function: equals 100 humans laboring 3 days in 30 minutes
        type: 'special',
        target: 'special.magical_construction',
        value: 0,
        source: 'Lyre of Building',
      },
    ],
  },
];
