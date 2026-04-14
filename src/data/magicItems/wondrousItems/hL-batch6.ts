import type { WondrousItemDefinition } from '@/types/magicItems';
import { AuraStrength, MagicSchool } from '@/types/equipment';

export const wondrousItemsHL6: WondrousItemDefinition[] = [
  // -------------------------------------------------------------------------
  // 1. Instant Muzzle
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-instant-muzzle',
    name: 'Instant Muzzle',
    category: 'wondrous',
    source: "Pathfinder Player Companion: Animal Archive",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [
      { strength: AuraStrength.MODERATE, school: MagicSchool.ENCHANTMENT },
      { strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION },
    ],
    casterLevel: 9,
    slot: 'none',

    price: 6500,
    weight: 4,

    description:
      'A fist-sized ball of iron bands and hinges, this device transforms into a metal muzzle when thrown at ' +
      'a creature or 5-foot square (up to three times per day). When it strikes a target, it attaches to the ' +
      'face of any Large or smaller creature in the impact area, preventing normal speech, imposing a 20% ' +
      'spell failure chance on spells with verbal components, creating a 20% chance of misusing command words ' +
      'on magic items, and preventing bite attacks and eating or drinking. The muzzle remains attached for 4 ' +
      'rounds before automatically detaching and teleporting back to the thrower\'s hand.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['fumbletongue', 'telekinesis'],
      cost: 3250,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 25,
      breakDC: 26,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.instant_muzzle_attach',
        value: 0,
        source: 'Instant Muzzle',
      },
    ],

    charges: { maximum: 3, rechargeMethod: 'daily' },
  },

  // -------------------------------------------------------------------------
  // 2. Interpretation of Secrets
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-interpretation-of-secrets',
    name: 'Interpretation of Secrets',
    category: 'wondrous',
    source: 'Pathfinder Campaign Setting: Planes of Power',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.DIVINATION }],
    casterLevel: 7,
    slot: 'none',

    price: 10000,
    weight: 0,

    description:
      'This disk of mithral is inscribed with dozens of spiraling arcane and magical sigils. When carried ' +
      'visibly, the bearer can speak and understand all elemental tongues. Additionally, the bearer gains a ' +
      '+5 competence bonus on Intimidate checks against genies when speaking their native language, and ' +
      'language-dependent spells cast by the carrier impose a -2 penalty on saving throws for any genie ' +
      'targeted by those effects.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['tongues'],
      cost: 5000,
    },
    physicalStats: {
      hardness: 15,
      hitPoints: 5,
      breakDC: 20,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'special',
        target: 'special.elemental_tongues',
        value: 0,
        source: 'Interpretation of Secrets',
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.intimidate',
        value: 5,
        source: 'Interpretation of Secrets',
        condition: {
          type: 'target_type',
          params: { creatureType: 'genie' },
          description: 'against genies when speaking their native language',
        },
      },
      {
        type: 'penalty',
        target: 'special.genie_save_vs_language_dependent_spells',
        value: -2,
        source: 'Interpretation of Secrets',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 3. Investigator's Pipe
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-investigators-pipe',
    name: "Investigator's Pipe",
    category: 'wondrous',
    source: 'Pathfinder Player Companion: Dirty Tactics Toolbox',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [
      { strength: AuraStrength.FAINT, school: MagicSchool.CONJURATION },
      { strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION },
    ],
    casterLevel: 5,
    slot: 'none',

    price: 9000,
    weight: 0,

    description:
      'This long-stemmed wooden pipe can burn tobacco or other substances. The smoker can summon a small, ' +
      'wispy gray smoke servant to perform minor tasks — it functions like an unseen servant but remains ' +
      'visible, and can clear one 5-foot square of smoke or fog per round. This ability can be used for up ' +
      'to 1 hour per day in 10-minute increments. Additionally, if the pipe\'s user is an investigator, she ' +
      'may use inspiration on Survival checks to track and on Perception checks to notice details without ' +
      'spending inspiration, and once per day may attempt a Knowledge check as if she possessed the eidetic ' +
      'recollection investigator talent.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['guidance', 'unseen servant'],
      cost: 4500,
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
        target: 'special.smoke_servant',
        value: 0,
        source: "Investigator's Pipe",
      },
    ],

    conditionalEffects: [
      {
        condition: 'wielder_class',
        classId: 'investigator',
        effects: [
          {
            type: 'special',
            target: 'special.free_inspiration_survival_tracking',
            value: 0,
            source: "Investigator's Pipe",
          },
          {
            type: 'special',
            target: 'special.free_inspiration_perception_details',
            value: 0,
            source: "Investigator's Pipe",
          },
          {
            type: 'special',
            target: 'special.eidetic_recollection_1_per_day',
            value: 0,
            source: "Investigator's Pipe",
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 4. Ioun Gauntlet
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-ioun-gauntlet',
    name: 'Ioun Gauntlet',
    category: 'wondrous',
    source: 'Pathfinder Player Companion: Armor Masters Handbook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [
      { strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION },
      { strength: AuraStrength.FAINT, school: MagicSchool.EVOCATION },
    ],
    casterLevel: 5,
    slot: 'hands',

    price: 1600,
    weight: 5,

    description:
      'This gauntlet accepts ioun stones into a matrix on the back of the hand, functioning similarly to a ' +
      'wayfinder. In its base form, the gauntlet grants the ability to cast detect magic as a spell-like ' +
      'ability once per day, and while active provides illumination in a 60-foot cone. Inserting an ioun ' +
      'stone (standard action) grants the stone\'s normal bonus plus an additional +1 enhancement bonus to ' +
      'a skill based on the stone\'s shape: cabochon (Acrobatics), disk (Linguistics), ellipsoid (Knowledge ' +
      '[arcana]), nodule (Knowledge [geography]), pentacle (Knowledge [religion]), prism (Perception), ' +
      'pyramid (Appraise), rhomboid (Stealth), sphere (Sense Motive), star (Knowledge [nobility]), or ' +
      'trillian (Bluff). A spindle grants one bonus language (Aboleth). Only one gauntlet\'s inserted ' +
      'stone benefit applies even if wearing two.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['detect magic', 'light'],
      cost: 800,
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
        target: 'special.ioun_stone_socket',
        value: 0,
        source: 'Ioun Gauntlet',
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

  // -------------------------------------------------------------------------
  // 5. Ioun Memory Node (four variants)
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-ioun-memory-node-i',
    name: 'Ioun Memory Node (Type I)',
    category: 'wondrous',
    source: 'Pathfinder Campaign Setting: Construct Handbook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 13,
    slot: 'none',

    price: 6000,
    weight: 0,

    description:
      'This ioun stone, when embedded in a clockwork construct, grants it humanlike sentience similar to ' +
      'the awaken construct spell. The node grants the construct Intelligence 7, a +2 Charisma bonus, 1 ' +
      'skill selection, 1 bonus language, and skill ranks equal to its Hit Dice. The alignment, skills, ' +
      'languages, memories, and personality are fixed at creation. Constructs with more than 4 HD are ' +
      'unaffected. Unlike standard awakening, this item grants no feats.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['awaken construct'],
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
        type: 'special',
        target: 'special.awaken_construct',
        value: 0,
        source: 'Ioun Memory Node (Type I)',
      },
    ],
  },

  {
    id: 'wondrous-ioun-memory-node-ii',
    name: 'Ioun Memory Node (Type II)',
    category: 'wondrous',
    source: 'Pathfinder Campaign Setting: Construct Handbook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 13,
    slot: 'none',

    price: 14000,
    weight: 0,

    description:
      'This ioun stone, when embedded in a clockwork construct, grants it humanlike sentience similar to ' +
      'the awaken construct spell. The node grants the construct Intelligence 10, a +5 Charisma bonus, 2 ' +
      'skill selections, 1 bonus language, and skill ranks equal to its Hit Dice. The alignment, skills, ' +
      'languages, memories, and personality are fixed at creation. Constructs with more than 8 HD are ' +
      'unaffected. Unlike standard awakening, this item grants no feats.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['awaken construct'],
      cost: 7000,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 5,
      breakDC: 15,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'special',
        target: 'special.awaken_construct',
        value: 0,
        source: 'Ioun Memory Node (Type II)',
      },
    ],
  },

  {
    id: 'wondrous-ioun-memory-node-iii',
    name: 'Ioun Memory Node (Type III)',
    category: 'wondrous',
    source: 'Pathfinder Campaign Setting: Construct Handbook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 13,
    slot: 'none',

    price: 24000,
    weight: 0,

    description:
      'This ioun stone, when embedded in a clockwork construct, grants it humanlike sentience similar to ' +
      'the awaken construct spell. The node grants the construct Intelligence 12, a +7 Charisma bonus, 3 ' +
      'skill selections, 2 bonus languages, and skill ranks equal to its Hit Dice. The alignment, skills, ' +
      'languages, memories, and personality are fixed at creation. Constructs with more than 12 HD are ' +
      'unaffected. Unlike standard awakening, this item grants no feats.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['awaken construct'],
      cost: 12000,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 5,
      breakDC: 15,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'special',
        target: 'special.awaken_construct',
        value: 0,
        source: 'Ioun Memory Node (Type III)',
      },
    ],
  },

  {
    id: 'wondrous-ioun-memory-node-iv',
    name: 'Ioun Memory Node (Type IV)',
    category: 'wondrous',
    source: 'Pathfinder Campaign Setting: Construct Handbook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 13,
    slot: 'none',

    price: 36000,
    weight: 0,

    description:
      'This ioun stone, when embedded in a clockwork construct, grants it humanlike sentience similar to ' +
      'the awaken construct spell. The node grants the construct Intelligence 15, a +10 Charisma bonus, 4 ' +
      'skill selections, 3 bonus languages, and skill ranks equal to its Hit Dice. The alignment, skills, ' +
      'languages, memories, and personality are fixed at creation. Constructs with more than 16 HD are ' +
      'unaffected. Unlike standard awakening, this item grants no feats.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['awaken construct'],
      cost: 18000,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 5,
      breakDC: 15,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'special',
        target: 'special.awaken_construct',
        value: 0,
        source: 'Ioun Memory Node (Type IV)',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 6. Ioun Spite Bracers
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-ioun-spite-bracers',
    name: 'Ioun Spite Bracers',
    category: 'wondrous',
    source: 'Pathfinder Player Companion: Seekers of Secrets',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.EVOCATION }],
    casterLevel: 12,
    slot: 'wrists',

    price: 15000,
    weight: 2,

    description:
      'These bracers allow the wearer to steal orbiting ioun stones and drain them for magical energy. ' +
      'As a standard action, the wearer can attempt a steal combat maneuver against any orbiting ioun stone ' +
      'within 30 feet; the target receives a +4 circumstance bonus to CMD. Successfully stolen stones embed ' +
      'in one of the four available slots (two per bracer) and provide their normal bonuses. Removal ' +
      'requires a move action. As a standard action, the wearer can drain an embedded non-gray ioun stone ' +
      'to cast magic missile as a spell-like ability, firing three missiles at targets within 160 feet. ' +
      'Drained stones become dull gray for 2d4 hours.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['magic missile', 'telekinesis'],
      cost: 7500,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 10,
      breakDC: 20,
    },

    activationCategory: 'use_activated',
    activationAction: 'standard',

    effects: [
      {
        type: 'special',
        target: 'special.steal_ioun_stone',
        value: 0,
        source: 'Ioun Spite Bracers',
      },
      {
        type: 'special',
        target: 'special.ioun_stone_socket',
        value: 0,
        source: 'Ioun Spite Bracers',
      },
    ],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'magic_missile',
            spellName: 'Magic Missile',
            casterLevel: 12,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 7. Ioun Torch
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-ioun-torch',
    name: 'Ioun Torch',
    category: 'wondrous',
    source: 'Pathfinder Player Companion: Seekers of Secrets',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.UNIVERSAL }],
    casterLevel: 12,
    slot: 'none',

    price: 75,
    weight: 0,

    description:
      'This burned-out, dull gray ioun stone has had a continual flame spell permanently cast upon it. ' +
      'Like other ioun stones, it orbits the bearer\'s head, allowing the bearer to maintain a light source ' +
      'while keeping both hands free. It can take any crystalline shape typical to ioun stones, such as ' +
      'ellipsoid, prism, or sphere.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['continual flame'],
      cost: 62,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 5,
      breakDC: 17,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'special',
        target: 'special.light_source_hands_free',
        value: 0,
        source: 'Ioun Torch',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 8. Ioun Tower
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-ioun-tower',
    name: 'Ioun Tower',
    category: 'wondrous',
    source: 'Pathfinder Adventure Path #126: Beyond the Veiled Past',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.UNIVERSAL }],
    casterLevel: 15,
    slot: 'none',

    price: 100000,
    weight: null,

    description:
      'Ioun towers range from 50 to 100 feet in height and function as arcane signal transmitters, ' +
      'blanketing a 7-mile-radius area with a magical benefit derived from whichever ioun stone is ' +
      'embedded within the tower. For example, a tower containing a clear spindle ioun stone grants all ' +
      'creatures within range the ability to alleviate the need to drink or eat. Swapping the embedded ' +
      'stone requires a DC 40 Use Magic Device check. Effectiveness varies by stone type, and some stones ' +
      'may not function in tower configuration at all (GM discretion).',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['permanency'],
      cost: 50000,
    },
    physicalStats: {
      hardness: 8,
      hitPoints: 200,
      breakDC: 40,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'special',
        target: 'special.ioun_tower_area_broadcast',
        value: 0,
        source: 'Ioun Tower',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 9. Iron Bands of Binding
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-iron-bands-of-binding',
    name: 'Iron Bands of Binding',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.EVOCATION }],
    casterLevel: 13,
    slot: 'none',

    price: 26000,
    weight: 1,

    description:
      'This device appears to be a 3-inch-diameter rusty iron sphere with metal bands covering its ' +
      'surface. When the command word is spoken and the sphere is thrown at a target as a ranged touch ' +
      'attack, the bands expand and then contract to immobilize a Large or smaller creature, holding it ' +
      'as if pinned. The restrained creature may escape with a DC 30 Strength check, DC 30 combat maneuver ' +
      'check, or DC 30 Escape Artist check. Repeating the command word causes the bands to reform into the ' +
      'sphere. The item may be used once per day.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['grasping hand'],
      cost: 13000,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 26,
      breakDC: 28,
    },

    activationCategory: 'command_word',
    activationAction: 'standard',

    effects: [
      {
        type: 'special',
        target: 'special.pin_target',
        value: 0,
        source: 'Iron Bands of Binding',
      },
    ],

    charges: { maximum: 1, rechargeMethod: 'daily' },
  },

  // -------------------------------------------------------------------------
  // 10. Iron Circlet of Guarded Souls
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-iron-circlet-of-guarded-souls',
    name: 'Iron Circlet of Guarded Souls',
    category: 'wondrous',
    source: 'Pathfinder Campaign Setting: Inner Sea Magic',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ABJURATION }],
    casterLevel: 11,
    slot: 'head',

    price: 30000,
    weight: 1,

    description:
      'This cold iron circlet is always slightly cool to the touch and bears no visible markings. It ' +
      'shields the wearer\'s soul and identity from mystic intrusion. The wearer is immune to effects ' +
      'that target souls (such as trap the soul) and to divination effects that would normally be blocked ' +
      'by nondetection — unlike nondetection, casters cannot attempt spell resistance checks to overcome ' +
      'this protection. If the wearer dies while wearing the circlet, magical resurrection is impossible ' +
      'except through miracle, wish, or direct divine intervention, until the circlet is removed.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['nondetection', 'trap the soul'],
      cost: 15000,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 10,
      breakDC: 26,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'special',
        target: 'special.soul_protection',
        value: 0,
        source: 'Iron Circlet of Guarded Souls',
      },
      {
        type: 'special',
        target: 'special.nondetection_no_spell_resistance_bypass',
        value: 0,
        source: 'Iron Circlet of Guarded Souls',
      },
      {
        type: 'special',
        target: 'special.blocks_resurrection',
        value: 0,
        source: 'Iron Circlet of Guarded Souls',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 11. Iron Collar of the Unbound Coven
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-iron-collar-of-the-unbound-coven',
    name: 'Iron Collar of the Unbound Coven',
    category: 'wondrous',
    source: 'Pathfinder Player Companion: Familiar Folio',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 11,
    slot: 'neck',

    price: 46000,
    weight: 2,

    description:
      'This crude band of iron bears the fist-sized shrunken heads of three hags — an annis hag, a green ' +
      'hag, and a sea hag — which remain partially animated, occasionally twitching and whispering. The ' +
      'item functions only for witches with the coven hex. It allows a coven to form without requiring a ' +
      'true hag member, provided all members possess the coven hex and at least one is a 9th-level witch. ' +
      'Three times per day as a swift action, the wearer can command the heads to fix their gaze on a ' +
      'humanoid within 30 feet; the target must succeed on a DC 15 Will save or become paralyzed by fear ' +
      '(as hold person). This is a mind-affecting fear effect. Once per day as a standard action, the ' +
      'wearer can transform into a Medium crone hybrid form (as the transformation spell), though this ' +
      'alters the wearer\'s mindset and suppresses spellcasting.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['alter self', 'hold person', 'transformation'],
      specialRequirements: ['Creator must have the coven hex', 'Craft (leather) 4 ranks'],
      cost: 23000,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 10,
      breakDC: 26,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.form_coven_without_hag',
        value: 0,
        source: 'Iron Collar of the Unbound Coven',
      },
    ],

    spellLikeAbilities: [
      {
        usesPerDay: 3,
        spells: [
          {
            spellId: 'hold_person',
            spellName: 'Hold Person (fear gaze)',
            casterLevel: 11,
            saveDC: 15,
            activationAction: 'swift',
          },
        ],
      },
      {
        usesPerDay: 1,
        spells: [
          {
            spellId: 'transformation',
            spellName: 'Transformation (crone form)',
            casterLevel: 11,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 12. Iron Flask
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-iron-flask',
    name: 'Iron Flask',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.CONJURATION }],
    casterLevel: 20,
    slot: 'none',

    price: 170000,
    weight: 1,

    description:
      'These containers are crafted from iron set with runes of silver and stoppered by a brass plug ' +
      'bearing a seal engraved with sigils, glyphs, and special symbols. When the command word is spoken ' +
      'and the flask is pointed at an extraplanar creature within 60 feet, the target must succeed on a ' +
      'DC 19 Will save or be sucked into the flask and trapped. The command word may only be used once ' +
      'per day, and the flask can hold only one creature at a time. Removing the stopper frees the ' +
      'captive. If the command word is used when releasing the creature, it must serve for 1 hour; ' +
      'otherwise, it acts according to its nature. A second containment attempt grants the creature a +2 ' +
      'bonus on its save and makes it immediately hostile. New flasks are empty (roll d% to determine ' +
      'random contents: 01-50 empty, 51+ various outsiders and elementals up to balors and pit fiends).',

    construction: {
      feats: ['Craft Wondrous Item', 'Trap the Soul'],
      spells: [],
      cost: 85000,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 20,
      breakDC: 30,
    },

    activationCategory: 'command_word',
    activationAction: 'standard',

    effects: [
      {
        type: 'special',
        target: 'special.trap_extraplanar_creature',
        value: 0,
        source: 'Iron Flask',
      },
    ],

    charges: { maximum: 1, rechargeMethod: 'daily' },
  },

  // -------------------------------------------------------------------------
  // 13. Iron Rope
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-iron-rope',
    name: 'Iron Rope',
    category: 'wondrous',
    source: 'Pathfinder Player Companion: Dungeoneer\'s Handbook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 4,
    slot: 'none',

    price: 750,
    weight: 1,

    description:
      'This magical 25-foot gray hemp rope transforms into solid iron when its end is held and a command ' +
      'word is spoken. The transmutation is permanent — the rope loses all magical properties and gains the ' +
      'hardness and hit points of a standard inch-thick iron bar. The rope can be cut into up to three ' +
      'sections before use, and each section can be hardened independently.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['animate rope'],
      cost: 375,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 4,
      breakDC: 15,
    },

    activationCategory: 'command_word',
    activationAction: 'standard',

    effects: [
      {
        type: 'special',
        target: 'special.transmute_rope_to_iron',
        value: 0,
        source: 'Iron Rope',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 14. Iron Spike of Safe Passage
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-iron-spike-of-safe-passage',
    name: 'Iron Spike of Safe Passage',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ILLUSION }],
    casterLevel: 3,
    slot: 'none',

    price: 2000,
    weight: 2,

    description:
      'This 9-inch iron spike creates an illusion up to 15 feet high in a 15-foot-diameter area centered ' +
      'on the spike when hammered into place. The illusion can depict a small hillock, mundane crates or ' +
      'barrels, a rubble mound, or a small structure such as a cabin or canvas enclosure. The appearance ' +
      'and parameters are determined when the spike is hammered in. Creatures interacting with the illusion ' +
      'may attempt a DC 12 Will save to disbelieve it. Hammering in or removing the spike is a full-round ' +
      'action. The effect persists until the spike is removed, and the spike may be reused.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['silent image'],
      cost: 1000,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 20,
      breakDC: 24,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.create_illusion_cover',
        value: 0,
        source: 'Iron Spike of Safe Passage',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 15. Jacket, Poisoner's (lesser and greater variants)
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-jacket-poisoners-lesser',
    name: "Poisoner's Jacket, Lesser",
    category: 'wondrous',
    source: 'Pathfinder Player Companion: Alchemy Manual',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [
      { strength: AuraStrength.FAINT, school: MagicSchool.CONJURATION },
      { strength: AuraStrength.FAINT, school: MagicSchool.NECROMANCY },
    ],
    casterLevel: 5,
    slot: 'body',

    price: 12000,
    weight: 3,

    description:
      'The wearer of this jacket may conjure a dose of poison three times daily. The poison appears as a ' +
      'murky amber fluid and may be any poison from the Core Rulebook costing 300 gp or less. Created ' +
      'poison becomes inert after one hour.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['minor creation', 'poison'],
      cost: 6000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 5,
      breakDC: 10,
    },

    activationCategory: 'use_activated',
    activationAction: 'standard',

    effects: [
      {
        type: 'special',
        target: 'special.conjure_poison_300gp',
        value: 0,
        source: "Poisoner's Jacket, Lesser",
      },
    ],

    charges: { maximum: 3, rechargeMethod: 'daily' },
  },

  {
    id: 'wondrous-jacket-poisoners-greater',
    name: "Poisoner's Jacket, Greater",
    category: 'wondrous',
    source: 'Pathfinder Player Companion: Alchemy Manual',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [
      { strength: AuraStrength.STRONG, school: MagicSchool.CONJURATION },
      { strength: AuraStrength.STRONG, school: MagicSchool.NECROMANCY },
    ],
    casterLevel: 15,
    slot: 'body',

    price: 58000,
    weight: 4,

    description:
      'This jacket possesses all capabilities of the lesser poisoner\'s jacket (conjuring up to three doses ' +
      'per day of any Core Rulebook poison costing 300 gp or less, each appearing as murky amber fluid and ' +
      'becoming inert after one hour). Additionally, once per day the wearer can produce one dose of any ' +
      'Core Rulebook poison worth 4,000 gp or less; this dose appears as murky lime fluid and also ' +
      'becomes inert after one hour.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['major creation', 'poison'],
      cost: 29000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 5,
      breakDC: 10,
    },

    activationCategory: 'use_activated',
    activationAction: 'standard',

    effects: [
      {
        type: 'special',
        target: 'special.conjure_poison_300gp',
        value: 0,
        source: "Poisoner's Jacket, Greater",
      },
      {
        type: 'special',
        target: 'special.conjure_poison_4000gp',
        value: 0,
        source: "Poisoner's Jacket, Greater",
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 16. Jacket, Sipping
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-jacket-sipping',
    name: 'Jacket, Sipping',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 7,
    slot: 'body',

    price: 5000,
    weight: 5,

    description:
      'This heavy canvas coat has absorbent fibers woven into its lining. Once daily as a standard action, ' +
      'the wearer can pour a potion onto the lining to infuse it into the coat. Potions with instantaneous ' +
      'durations activate as a swift action. Potions with round-based durations activate as a swift action ' +
      'to gain 1 round of benefit; this can be repeated each round (not necessarily consecutive) until the ' +
      'full duration is exhausted. The jacket only works with potions having instantaneous or round-based ' +
      'durations that affect creatures (not oils). An absorbed potion expires after 24 hours if unused and ' +
      'cannot be retrieved once absorbed.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['amplify elixir'],
      cost: 2500,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 5,
      breakDC: 10,
    },

    activationCategory: 'use_activated',
    activationAction: 'swift',

    effects: [
      {
        type: 'special',
        target: 'special.infuse_potion_into_jacket',
        value: 0,
        source: 'Jacket, Sipping',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 17. Jar of Haunt Siphoning
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-jar-of-haunt-siphoning',
    name: 'Jar of Haunt Siphoning',
    category: 'wondrous',
    source: 'Pathfinder Campaign Setting: Undead Unleashed',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.NECROMANCY }],
    casterLevel: 6,
    slot: 'none',

    price: 6250,
    weight: 1,

    description:
      'This transparent glass jar is bound with gold ribbons. As a standard action requiring both hands, ' +
      'the user unties the ribbon and removes the lid, releasing a burst of positive energy that deals 3d6 ' +
      'points of positive energy damage to all manifested haunts within 30 feet. When this damage reduces ' +
      'a haunt\'s hit points to 0, the haunt is neutralized and dissolves into violet mist that drains into ' +
      'the jar; neutralized haunts suffer a -5 penalty on caster level checks to manifest again. After use, ' +
      'the jar cannot reactivate for 1d4 rounds while the violet mist is present. As a full-round action ' +
      'the mist can be poured into a non-magical glass vial (worth 1+ gp), transforming it into a ' +
      'grenade-like splash weapon that deals negative energy damage.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['gentle repose', 'mass inflict light wounds'],
      cost: 3125,
    },
    physicalStats: {
      hardness: 1,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'use_activated',
    activationAction: 'standard',

    effects: [
      {
        type: 'damage',
        target: 'special.haunt_positive_energy',
        value: 3,
        source: 'Jar of Haunt Siphoning',
      },
      {
        type: 'special',
        target: 'special.neutralize_haunt',
        value: 0,
        source: 'Jar of Haunt Siphoning',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 18. Jar of Lightning
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-jar-of-lightning',
    name: 'Jar of Lightning',
    category: 'wondrous',
    source: 'Pathfinder Player Companion: Dungeoneer\'s Handbook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.EVOCATION }],
    casterLevel: 5,
    slot: 'none',

    price: 800,
    weight: 1,

    description:
      'This clear glass container with a stone lid secured by a leather ring and metal clamp houses a ' +
      'crackling electrical orb. The item is a one-use magical device. When thrown as a splash weapon it ' +
      'deals 5d6 electricity damage on a direct hit and 1d6 to adjacent targets. Alternatively, the lid ' +
      'can be removed to free the electrical sphere, which floats and detonates when a creature or metal ' +
      'object enters its space — dealing 2d6 damage in round 1, increasing by 2d6 each subsequent round ' +
      'to a maximum of 10d6 by round 5 (adjacent creatures take half damage; DC 15 Reflex for half). The ' +
      'sphere also detonates if struck by an arrow.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['call lightning', 'lightning bolt'],
      cost: 400,
    },
    physicalStats: {
      hardness: 1,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'damage',
        target: 'special.electricity_splash',
        value: 5,
        source: 'Jar of Lightning',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 19. Jars, Spirit
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-jars-spirit',
    name: 'Jars, Spirit',
    category: 'wondrous',
    source: 'Pathfinder Campaign Setting: Inner Sea Magic',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.NECROMANCY }],
    casterLevel: 7,
    slot: 'none',

    price: 26250,
    weight: 2,

    description:
      'These clay vessels are decorated with animal and monster heads and typically sold as a set of three. ' +
      'They function as focus items for the magic jar spell, eliminating the need for an alternate focus. ' +
      'Using the set, the caster can move his soul or that of a nearby target into any one of the three ' +
      'jars, or move his own soul between jars and bodies as he pleases. The jars are permanently affected ' +
      'by the magic jar spell. Souls can become trapped indefinitely within the jars. Opening a jar allows ' +
      'the trapped spirit to attempt a DC 17 Will save to swap with the jar holder. If the magic jar spell ' +
      'expires while a soul occupies a jar, that soul becomes permanently trapped; spirits without bodies ' +
      'or outside jars at spell\'s end return to empty jars in range or perish.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['gentle repose', 'magic jar'],
      cost: 13125,
    },
    physicalStats: {
      hardness: 1,
      hitPoints: 2,
      breakDC: 12,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.magic_jar_focus',
        value: 0,
        source: 'Jars, Spirit',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 20. Jingasa of the Fortunate Soldier
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-jingasa-of-the-fortunate-soldier',
    name: 'Jingasa of the Fortunate Soldier',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.DIVINATION }],
    casterLevel: 15,
    slot: 'head',

    price: 5000,
    weight: 3,

    description:
      'This conical iron war hat provides a +1 luck bonus to AC. Once per item lifetime, when the wearer ' +
      'suffers a critical hit or sneak attack, she may expend an immediate action to negate the critical ' +
      'hit or sneak attack entirely, converting the damage to a normal hit instead (similar to the ' +
      'fortification armor special ability, but requiring no roll). The luck bonus to AC persists after ' +
      'this ability is expended.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['divine favor', 'moment of prescience'],
      cost: 2500,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 10,
      breakDC: 24,
    },

    activationCategory: 'use_activated',
    activationAction: 'immediate',

    effects: [
      {
        type: 'bonus',
        bonusType: 'luck',
        target: 'ac',
        value: 1,
        source: 'Jingasa of the Fortunate Soldier',
      },
      {
        type: 'special',
        target: 'special.negate_critical_or_sneak_attack',
        value: 0,
        source: 'Jingasa of the Fortunate Soldier',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 21. Jungle Seeker's Monocle
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-jungle-seekers-monocle',
    name: "Jungle Seeker's Monocle",
    category: 'wondrous',
    source: "Pathfinder Player Companion: Merchant's Manifest",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.CONJURATION }],
    casterLevel: 3,
    slot: 'eyes',

    price: 12400,
    weight: 0,

    description:
      'This monocle\'s lens is made of carefully shaped Shory glass. The wearer can detect hidden creatures ' +
      'in jungle terrain, treating dense forest as sparse forest for detection purposes, extending ' +
      'detection range to 3d6 x 10 feet. Additionally, the wearer gains a +2 competence bonus on ' +
      'Perception checks to notice creatures using Stealth, regardless of environment.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['acute senses'],
      cost: 6200,
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
        value: 2,
        source: "Jungle Seeker's Monocle",
        condition: {
          type: 'custom',
          params: { descriptor: 'notice_stealth' },
          description: 'to notice creatures using Stealth',
        },
      },
      {
        type: 'special',
        target: 'special.jungle_detection_range',
        value: 0,
        source: "Jungle Seeker's Monocle",
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 22. Kapre Cigars
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-kapre-cigars',
    name: 'Kapre Cigars',
    category: 'wondrous',
    source: 'Pathfinder Adventure Path #58: Island of Empty Eyes',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [
      { strength: AuraStrength.FAINT, school: MagicSchool.EVOCATION },
      { strength: AuraStrength.FAINT, school: MagicSchool.NECROMANCY },
    ],
    casterLevel: 7,
    slot: 'none',

    price: 2250,
    weight: 4,

    description:
      'These 2-foot-long cigars perpetually burn without consuming themselves and produce candlelight that ' +
      'does not ignite organic material. Only Medium or larger creatures can attempt to smoke them. Those ' +
      'who inhale must succeed on a DC 16 Fortitude save or be nauseated for one hour; subsequent ' +
      'inhalation attempts grant a cumulative +1 bonus on this save. The smoker must exhale within one ' +
      'round of inhaling or suffer nausea. As a standard action, a Medium creature can blow smoke at one ' +
      'adjacent enemy; Large or larger creatures create a 15-foot cone effect. Targets must succeed on a ' +
      'DC 16 Fortitude save or become nauseated for one round.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: [],
      specialRequirements: ['Creator must be a kapre or work under kapre supervision'],
      cost: 1125,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 5,
    },

    activationCategory: 'use_activated',
    activationAction: 'standard',

    effects: [
      {
        type: 'special',
        target: 'special.nauseating_smoke_exhalation',
        value: 0,
        source: 'Kapre Cigars',
      },
      {
        type: 'special',
        target: 'special.perpetual_light_source',
        value: 0,
        source: 'Kapre Cigars',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 23. Keffiyeh of Cooling
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-keffiyeh-of-cooling',
    name: 'Keffiyeh of Cooling',
    category: 'wondrous',
    source: 'Pathfinder Player Companion: People of the Sands',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION }],
    casterLevel: 7,
    slot: 'head',

    price: 2100,
    weight: 2,

    description:
      'This headwear remains pristine white regardless of environmental conditions such as sandstorms. The ' +
      'wearer gains protection from extreme heat comparable to having the endure elements spell active ' +
      'against hot climates. It offers no magical defense against cold environments.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['endure elements'],
      cost: 1050,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 5,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'special',
        target: 'special.endure_elements_heat',
        value: 0,
        source: 'Keffiyeh of Cooling',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 24. Key Cloak
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-key-cloak',
    name: 'Key Cloak',
    category: 'wondrous',
    source: 'Pathfinder Player Companion: Magical Marketplace',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 9,
    slot: 'shoulders',

    price: 20000,
    weight: 2,

    description:
      'This short cloak is crafted from gold thread woven into interlocking key patterns. It grants the ' +
      'wearer a +1 shield bonus to AC at all times. As a move action, the wearer can activate the cloak ' +
      'to create a dome-shaped shield of hardened metal providing tower shield protection; while active, ' +
      'the wearer is immobile and cannot take actions except adjusting the shield\'s direction or dismissing ' +
      'it as a swift action. Resting in this form is equivalent to resting in heavy armor. Once per day as ' +
      'a standard action, the cloak produces a special skeleton key usable on any keyed lock, granting a ' +
      '+15 bonus to Disable Device checks regardless of training. The key lasts 1 hour and may only be ' +
      'attempted once per lock.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['fabricate', 'knock', 'stoneskin'],
      cost: 10000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 5,
      breakDC: 10,
    },

    activationCategory: 'continuous',
    activationAction: 'move',

    effects: [
      {
        type: 'bonus',
        bonusType: 'shield',
        target: 'ac',
        value: 1,
        source: 'Key Cloak',
      },
      {
        type: 'special',
        target: 'special.dome_shield_tower_protection',
        value: 0,
        source: 'Key Cloak',
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.disable_device',
        value: 15,
        source: 'Key Cloak',
        condition: {
          type: 'custom',
          params: { descriptor: 'skeleton_key_daily' },
          description: '1/day when using the conjured skeleton key',
        },
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 25. Key of Lock Jamming
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-key-of-lock-jamming',
    name: 'Key of Lock Jamming',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION }],
    casterLevel: 1,
    slot: 'none',

    price: 400,
    weight: 1,

    description:
      'This ornate brass key automatically reshapes itself to fit standard keyholes for Small or Medium ' +
      'creatures. When inserted into a lock and the command word spoken, the key merges with the mechanism ' +
      'and solidifies, preventing any unlocking attempt — including magical ones. It also reinforces the ' +
      'lock, increasing its hardness by 2, adding 8 hit points, and raising the Break DC by 5. Speaking a ' +
      'second command word causes the key to disintegrate, restoring the lock to its normal function.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['hold portal'],
      cost: 200,
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
        target: 'special.jam_lock',
        value: 0,
        source: 'Key of Lock Jamming',
      },
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'special.lock_hardness',
        value: 2,
        source: 'Key of Lock Jamming',
      },
    ],
  },
];
