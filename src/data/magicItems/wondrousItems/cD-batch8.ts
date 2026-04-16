import type { WondrousItemDefinition } from '@/types/magicItems';
import { AuraStrength, MagicSchool } from '@/types/equipment';
import { Alignment } from '@/types/base';

export const wondrousItemsCD8: WondrousItemDefinition[] = [
  // ---- 176: Crown, Cat's Eye --------------------------------------------------
  {
    id: "wondrous-crown-cats-eye",
    name: "Crown, Cat's Eye",
    category: 'wondrous',
    source: "Advanced Race Guide",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.DIVINATION }],
    casterLevel: 10,
    slot: 'head',

    price: 18000,
    weight: 1,

    description:
      "This silver crown features a detachable cat's eye gemstone centerpiece. The wearer gains darkvision 60 feet, or increases existing darkvision by 60 feet. Once per day, the wearer can activate clairaudience/clairvoyance using the gemstone as the magical sensor, and the wearer gains darkvision through that sensor. " +
      "The spell functions even if another creature carries the gemstone, using that creature's senses instead. " +
      "The gemstone can be destroyed (Hardness 8, 5 hp), which severs the connection. A replacement cat's eye gemstone of at least 100 gp value requires 24 hours of attunement.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['clairaudience/clairvoyance', 'darkvision'],
      specialRequirements: ['Creator must be catfolk'],
      cost: 9000,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 5,
      breakDC: 12,
    },

    activationCategory: 'command_word',
    activationAction: 'standard',

    effects: [
      {
        type: 'special',
        bonusType: 'untyped',
        target: 'special.darkvision',
        value: 60,
        source: "Crown, Cat's Eye",
      },
    ],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'clairaudience_clairvoyance',
            spellName: 'Clairaudience/Clairvoyance',
            casterLevel: 10,
            usesPerDay: 1,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // ---- 177: Crusader's Scabbard -----------------------------------------------
  {
    id: "wondrous-crusaders-scabbard",
    name: "Crusader's Scabbard",
    category: 'wondrous',
    source: "Pathfinder Player Companion: Magical Marketplace",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 7,
    slot: 'belt',

    price: 8500,
    weight: 3,

    description:
      "This intelligent scabbard can hold any sword-like weapon. It grants three daily uses of bless weapon on any weapon sheathed within it, though it does so reluctantly on non-longsword weapons. " +
      "During combat, the scabbard hurls threats of righteous retribution in a loud, clear voice, granting the wielder a +7 bonus on Intimidate checks to demoralize foes. " +
      "The consciousness within is valorous and stridently condemns displays of cowardice or dishonesty.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['bless weapon', 'greater magic weapon'],
      cost: 4250,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 10,
      breakDC: 20,
    },

    activationCategory: 'command_word',
    activationAction: 'standard',

    effects: [
      {
        type: 'bonus',
        bonusType: 'untyped',
        target: 'skill.intimidate',
        value: 7,
        source: "Crusader's Scabbard",
        condition: {
          type: 'custom',
          params: { situation: 'demoralize' },
          description: 'to demoralize foes in combat',
        },
      },
    ],

    intelligentItem: {
      intelligence: 10,
      wisdom: 12,
      charisma: 14,
      alignment: Alignment.LawfulGood,
      ego: 6,
      communication: ['speech'],
      languages: ['Common'],
      senses: ['60 ft.'],
      powers: ['3/day bless weapon on sheathed weapon'],
    },

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'bless_weapon',
            spellName: 'Bless Weapon',
            casterLevel: 7,
            usesPerDay: 3,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // ---- 178: Crux, Devil's -----------------------------------------------------
  {
    id: "wondrous-crux-devils",
    name: "Crux, Devil's",
    category: 'wondrous',
    source: "Pathfinder Adventure Path #101: The Kintargo Contract",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 9,
    slot: 'none',

    price: 2000,
    weight: 5,

    description:
      "A 6-inch wooden-and-metal dodecahedron puzzle box with 12 surfaces carved with different shapes and runes. The interior space exceeds its exterior dimensions, able to hold up to 200 pounds of material; it unfolds into a 2-foot square. " +
      "Opening requires tracing the runes in the correct sequence (DC 25 Intelligence check or DC 35 Disable Device check, 1 minute per attempt). Incorrect attempts deal fire damage equal to 2 points plus 2 points for each previous failed attempt, and reset the sequence after 8 consecutive failures. " +
      "Once the combination is known, three consecutive full-round actions open the box automatically. " +
      "Forcing the box open (DC 28 Strength) deals 3d6+6 fire damage in a 10-foot radius (Reflex DC 15 half) and destroys the box.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['fire trap', 'secret chest'],
      cost: 1000,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 15,
      breakDC: 28,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.extradimensional_storage',
        value: 200,
        source: "Crux, Devil's",
      },
    ],
  },

  // ---- 179: Crux, Marionette --------------------------------------------------
  {
    id: "wondrous-crux-marionette",
    name: "Crux, Marionette",
    category: 'wondrous',
    source: "Pathfinder Campaign Setting: Rival Guide",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 9,
    slot: 'none',

    price: 36000,
    weight: 5,

    description:
      "This cross-shaped wooden bar has twine strands that dangle sharp metal needles from each end. " +
      "As a standard action, the holder can make a ranged touch attack at a target within 25 feet. On a hit, the target becomes sickened for 1 round and must succeed at a DC 17 Will save or become dominated (as dominate person). " +
      "The item's holder controls the dominated humanoid; control transfers if the crux is given to another creature. Domination lasts one day but can be extended indefinitely with repeated uses. " +
      "The crux can only dominate one creature at a time; dominating a second victim releases the first. It can be used up to twice per day.",

    construction: {
      feats: ['Craft Wondrous Item', 'dominate person'],
      spells: ['dominate person'],
      cost: 18000,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 10,
      breakDC: 16,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.crux_marionette_dominate',
        value: 0,
        source: "Crux, Marionette",
      },
    ],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'dominate_person',
            spellName: 'Dominate Person',
            casterLevel: 9,
            usesPerDay: 2,
            saveDC: 17,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // ---- 180: Crystal Ball (standard) -------------------------------------------
  {
    id: "wondrous-crystal-ball",
    name: "Crystal Ball",
    category: 'wondrous',
    source: "Core Rulebook",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.DIVINATION }],
    casterLevel: 10,
    slot: 'none',

    price: 42000,
    weight: 7,

    description:
      "A crystal sphere approximately 6 inches in diameter that allows scrying across vast distances and other planes. The viewer must succeed at a Perception check to see clearly. " +
      "The crystal ball can be used multiple times per day, but each use after the first reduces the resistance DC by 1.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['scrying'],
      cost: 21000,
    },
    physicalStats: {
      hardness: 1,
      hitPoints: 5,
      breakDC: 12,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.scrying',
        value: 0,
        source: "Crystal Ball",
      },
    ],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'scrying',
            spellName: 'Scrying',
            casterLevel: 10,
            usesPerDay: 0,
            saveDC: 16,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // ---- 180b: Crystal Ball with See Invisibility --------------------------------
  {
    id: "wondrous-crystal-ball-see-invisibility",
    name: "Crystal Ball with See Invisibility",
    category: 'wondrous',
    source: "Core Rulebook",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.DIVINATION }],
    casterLevel: 10,
    slot: 'none',

    price: 50000,
    weight: 7,

    description:
      "This crystal ball functions as a standard crystal ball, but the viewer also gains the benefit of see invisibility while using it to scry.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['scrying', 'see invisibility'],
      cost: 25000,
    },
    physicalStats: {
      hardness: 1,
      hitPoints: 5,
      breakDC: 12,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.scrying',
        value: 0,
        source: "Crystal Ball with See Invisibility",
      },
    ],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'scrying',
            spellName: 'Scrying',
            casterLevel: 10,
            usesPerDay: 0,
            saveDC: 16,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // ---- 180c: Crystal Ball with Detect Thoughts --------------------------------
  {
    id: "wondrous-crystal-ball-detect-thoughts",
    name: "Crystal Ball with Detect Thoughts",
    category: 'wondrous',
    source: "Core Rulebook",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.DIVINATION }],
    casterLevel: 10,
    slot: 'none',

    price: 51000,
    weight: 7,

    description:
      "This crystal ball functions as a standard crystal ball, and also permits the viewer to use detect thoughts on any creature shown in the crystal ball (Will DC 13 negates).",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['scrying', 'detect thoughts'],
      cost: 25500,
    },
    physicalStats: {
      hardness: 1,
      hitPoints: 5,
      breakDC: 12,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.scrying',
        value: 0,
        source: "Crystal Ball with Detect Thoughts",
      },
    ],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'scrying',
            spellName: 'Scrying',
            casterLevel: 10,
            usesPerDay: 0,
            saveDC: 16,
            activationAction: 'standard',
          },
          {
            spellId: 'detect_thoughts',
            spellName: 'Detect Thoughts',
            casterLevel: 10,
            usesPerDay: 0,
            saveDC: 13,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // ---- 180d: Crystal Ball with Telepathy --------------------------------------
  {
    id: "wondrous-crystal-ball-telepathy",
    name: "Crystal Ball with Telepathy",
    category: 'wondrous',
    source: "Core Rulebook",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.DIVINATION }],
    casterLevel: 10,
    slot: 'none',

    price: 70000,
    weight: 7,

    description:
      "This crystal ball functions as a standard crystal ball, and also allows the viewer to send and receive silent mental messages with the creature shown in the ball. Once per day, the viewer may attempt to cast suggestion on that creature (Will DC 14 negates).",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['scrying', 'suggestion'],
      cost: 35000,
    },
    physicalStats: {
      hardness: 1,
      hitPoints: 5,
      breakDC: 12,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.scrying',
        value: 0,
        source: "Crystal Ball with Telepathy",
      },
    ],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'scrying',
            spellName: 'Scrying',
            casterLevel: 10,
            usesPerDay: 0,
            saveDC: 16,
            activationAction: 'standard',
          },
          {
            spellId: 'suggestion',
            spellName: 'Suggestion',
            casterLevel: 10,
            usesPerDay: 1,
            saveDC: 14,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // ---- 180e: Crystal Ball with True Seeing ------------------------------------
  {
    id: "wondrous-crystal-ball-true-seeing",
    name: "Crystal Ball with True Seeing",
    category: 'wondrous',
    source: "Core Rulebook",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.DIVINATION }],
    casterLevel: 10,
    slot: 'none',

    price: 80000,
    weight: 7,

    description:
      "This crystal ball functions as a standard crystal ball, and also grants the viewer the benefit of true seeing while using it to scry, allowing the viewer to see all things within the scrying area as they actually are.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['scrying', 'true seeing'],
      cost: 40000,
    },
    physicalStats: {
      hardness: 1,
      hitPoints: 5,
      breakDC: 12,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.scrying',
        value: 0,
        source: "Crystal Ball with True Seeing",
      },
    ],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'scrying',
            spellName: 'Scrying',
            casterLevel: 10,
            usesPerDay: 0,
            saveDC: 16,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // ---- 181: Crystal of Healing Hands ------------------------------------------
  {
    id: "wondrous-crystal-of-healing-hands",
    name: "Crystal of Healing Hands",
    category: 'wondrous',
    source: "Advanced Player's Guide",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 10,
    slot: 'neck',

    price: 12000,
    weight: 1,

    description:
      "This magical prism is held by a cloth cord marked with religious symbols. A character with the lay on hands class feature can store one use of that ability in the crystal as a standard action. " +
      "When the wearer speaks a command word as a standard action, they receive the stored healing as if touched by the person who infused the crystal with its power, including any mercies the original user possessed. " +
      "The crystal glows with a pearly white light when it holds a stored use of lay on hands.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['cure light wounds'],
      specialRequirements: ['Creator must be a paladin'],
      cost: 6000,
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
        target: 'special.stored_lay_on_hands',
        value: 0,
        source: "Crystal of Healing Hands",
      },
    ],
  },

  // ---- 182: Crystal, Pallid ---------------------------------------------------
  {
    id: "wondrous-crystal-pallid",
    name: "Crystal, Pallid",
    category: 'wondrous',
    source: "Inner Sea Gods",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.NECROMANCY }],
    casterLevel: 3,
    slot: 'neck',

    price: 3300,
    weight: 0,

    description:
      "This finger-length crystal appears pale opaque pink on living creatures but becomes translucent deep violet when carried by undead. " +
      "The bearer can consume spoiled food and drink as if fresh, maintaining the original flavor. Professional cooks can use the crystal to season meals with alternative spices. " +
      "Worshippers of the appropriate deity can cast death knell once per day as a spell-like ability. " +
      "Both cure and inflict spells heal the crystal's wearer, whether they are living or undead, with the crystal converting energy appropriately.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['cure light wounds', 'death knell', 'inflict light wounds', 'purify food and drink'],
      cost: 1650,
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
        target: 'special.pallid_crystal_dual_healing',
        value: 0,
        source: "Crystal, Pallid",
      },
    ],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'death_knell',
            spellName: 'Death Knell',
            casterLevel: 3,
            usesPerDay: 1,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // ---- 183: Crystal, Rhombocrystal --------------------------------------------
  {
    id: "wondrous-crystal-rhombocrystal",
    name: "Crystal, Rhombocrystal",
    category: 'wondrous',
    source: "Pathfinder Chronicles: Gods and Magic",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.EVOCATION }],
    casterLevel: 1,
    slot: 'none',

    price: 2250,
    weight: 0,

    description:
      "This jewel-like lens shifts colors over time and can be worn as a pendant, monocle, or loupe. It functions as a magnifying glass and grants a +5 competence bonus on Appraise checks involving gems and crystals. " +
      "If Nivi Rhombodazzle is the bearer's patron deity, the bearer also gains a +1 luck bonus on Reflex saving throws.",

    construction: {
      feats: ['Craft Wondrous Item', 'divine favor'],
      spells: [],
      specialRequirements: ['Creator must have 5 ranks in Appraise'],
      cost: 1125,
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
        target: 'skill.appraise',
        value: 5,
        source: "Crystal, Rhombocrystal",
        condition: {
          type: 'custom',
          params: { itemType: 'gems and crystals' },
          description: 'on Appraise checks involving gems and crystals only',
        },
      },
      {
        type: 'bonus',
        bonusType: 'luck',
        target: 'save.reflex',
        value: 1,
        source: "Crystal, Rhombocrystal",
        condition: {
          type: 'custom',
          params: { deity: 'Nivi Rhombodazzle' },
          description: "only if Nivi Rhombodazzle is the bearer's patron deity",
        },
      },
    ],
  },

  // ---- 184: Cube of Force -----------------------------------------------------
  {
    id: "wondrous-cube-of-force",
    name: "Cube of Force",
    category: 'wondrous',
    source: "Core Rulebook",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION }],
    casterLevel: 10,
    slot: 'none',

    price: 62000,
    weight: 0.5,

    description:
      "This small device is less than an inch across, typically fashioned from ivory, bone, or hard mineral with polished or rune-etched faces. It projects six wall of force barriers forming a 10-foot cube around the user that moves with them. " +
      "It holds 36 charges that automatically renew each day. Pressing one face activates or deactivates the effect. " +
      "The six settings are: (1) excludes gases and wind (1 charge/min, max 30 ft. speed); (2) excludes nonliving matter (2 charges/min, max 20 ft. speed); (3) excludes living creatures (3 charges/min, max 15 ft. speed); (4) excludes magic (4 charges/min, max 10 ft. speed); (5) excludes all things (6 charges/min, max 10 ft. speed); (6) deactivates. " +
      "Attacks dealing more than 30 damage in a round drain 1 charge per 10 points above that threshold. Certain spells drain additional charges if they strike the cube.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['wall of force'],
      cost: 31000,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 10,
      breakDC: 20,
    },

    activationCategory: 'use_activated',

    charges: { maximum: 36, rechargeMethod: 'Daily automatic renewal' },

    effects: [
      {
        type: 'special',
        target: 'special.cube_of_force_barrier',
        value: 0,
        source: "Cube of Force",
      },
    ],
  },

  // ---- 185: Cube of Force, Discriminating -------------------------------------
  {
    id: "wondrous-cube-of-force-discriminating",
    name: "Cube of Force, Discriminating",
    category: 'wondrous',
    source: "Pathfinder Chronicles: Classic Treasures Revisited",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION }],
    casterLevel: 10,
    slot: 'none',

    price: 40000,
    weight: 0.5,

    description:
      "This specialized cube of force only creates one type of screen, which excludes living matter. Unlike the standard cube of force, it features five active faces each configured to exclude a different living creature category, using the same classifications found in the bane weapon special ability. " +
      "The sixth face deactivates the device. It otherwise functions identically to a standard cube of force.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['summon monster I', 'wall of force'],
      cost: 20000,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 10,
      breakDC: 20,
    },

    activationCategory: 'use_activated',

    charges: { maximum: 36, rechargeMethod: 'Daily automatic renewal' },

    effects: [
      {
        type: 'special',
        target: 'special.cube_of_force_barrier',
        value: 0,
        source: "Cube of Force, Discriminating",
      },
    ],
  },

  // ---- 186: Cube of Force, Independent ----------------------------------------
  {
    id: "wondrous-cube-of-force-independent",
    name: "Cube of Force, Independent",
    category: 'wondrous',
    source: "Pathfinder Chronicles: Classic Treasures Revisited",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION }],
    casterLevel: 10,
    slot: 'none',

    price: 70000,
    weight: 0.5,

    description:
      "This cube functions identically to a standard cube of force, with one key distinction: it remains activated when dropped or set down. The cube can be picked up and deactivated by anyone, or its active wall type changed. It automatically deactivates only when depleted of charges.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['wall of force'],
      cost: 35000,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 10,
      breakDC: 20,
    },

    activationCategory: 'use_activated',

    charges: { maximum: 36, rechargeMethod: 'Daily automatic renewal' },

    effects: [
      {
        type: 'special',
        target: 'special.cube_of_force_barrier',
        value: 0,
        source: "Cube of Force, Independent",
      },
    ],
  },

  // ---- 187: Cube of Force, Rechargeable ----------------------------------------
  {
    id: "wondrous-cube-of-force-rechargeable",
    name: "Cube of Force, Rechargeable",
    category: 'wondrous',
    source: "Pathfinder Chronicles: Classic Treasures Revisited",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION }],
    casterLevel: 10,
    slot: 'none',

    price: 70000,
    weight: 0.5,

    description:
      "This cube functions identically to a standard cube of force, but it can be recharged by casting a wall of force spell into it. Each spell cast in this manner adds 2 charges to the cube. The cube cannot hold more than 36 charges.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['wall of force'],
      cost: 35000,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 10,
      breakDC: 20,
    },

    activationCategory: 'use_activated',

    charges: { maximum: 36, rechargeMethod: 'Casting wall of force into the cube adds 2 charges per casting' },

    effects: [
      {
        type: 'special',
        target: 'special.cube_of_force_barrier',
        value: 0,
        source: "Cube of Force, Rechargeable",
      },
    ],
  },

  // ---- 188: Cube of Force, Remote Activation -----------------------------------
  {
    id: "wondrous-cube-of-force-remote-activation",
    name: "Cube of Force, Remote Activation",
    category: 'wondrous',
    source: "Pathfinder Chronicles: Classic Treasures Revisited",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION }],
    casterLevel: 10,
    slot: 'none',

    price: 70000,
    weight: 0.5,

    description:
      "This cube functions identically to a standard cube of force, but it can be activated or deactivated from a distance using the mage hand spell or the hand of the apprentice ability. " +
      "Note that the antimagic wall (face 4) and the wall that excludes all things (face 5) prevent remote deactivation in this manner.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['mage hand', 'wall of force'],
      cost: 35000,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 10,
      breakDC: 20,
    },

    activationCategory: 'use_activated',

    charges: { maximum: 36, rechargeMethod: 'Daily automatic renewal' },

    effects: [
      {
        type: 'special',
        target: 'special.cube_of_force_barrier',
        value: 0,
        source: "Cube of Force, Remote Activation",
      },
    ],
  },

  // ---- 189: Cube of Frost Resistance ------------------------------------------
  {
    id: "wondrous-cube-of-frost-resistance",
    name: "Cube of Frost Resistance",
    category: 'wondrous',
    source: "Core Rulebook",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION }],
    casterLevel: 5,
    slot: 'none',

    price: 27000,
    weight: 2,

    description:
      "This cube generates a 10-foot cube of protected space when activated by pressing one side. The field maintains a minimum temperature of 65 degrees Fahrenheit within and absorbs all cold-based damage directed at those inside. " +
      "If the field takes more than 50 points of cold damage in a single round, it collapses and cannot be reactivated for 1 hour. " +
      "If the cube absorbs more than 100 points of cold damage within a 10-round span, the item is destroyed.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['protection from energy'],
      cost: 13500,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 10,
      breakDC: 20,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        bonusType: 'untyped',
        target: 'special.immunity_cold',
        value: 0,
        source: "Cube of Frost Resistance",
      },
    ],
  },

  // ---- 190: Cube of Varied Force Walls ----------------------------------------
  {
    id: "wondrous-cube-of-varied-force-walls",
    name: "Cube of Varied Force Walls",
    category: 'wondrous',
    source: "Pathfinder Chronicles: Classic Treasures Revisited",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION }],
    casterLevel: 10,
    slot: 'none',

    price: 56000,
    weight: 0.5,

    description:
      "This cube works similarly to a standard cube of force, but with independent wall activation. Rather than generating a uniform six-sided cube, each face can be configured with a different protective effect. " +
      "For example, one wall can block living matter, another wall can block magic, a third can keep out gases, while the remaining sides remain open. " +
      "Charge cost for each active wall is based on standard cube of force costs for the corresponding effect type.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['wall of force'],
      cost: 28000,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 10,
      breakDC: 20,
    },

    activationCategory: 'use_activated',

    charges: { maximum: 36, rechargeMethod: 'Daily automatic renewal' },

    effects: [
      {
        type: 'special',
        target: 'special.cube_of_force_barrier',
        value: 0,
        source: "Cube of Varied Force Walls",
      },
    ],
  },

  // ---- 191: Cube, Discriminating (alias entry) ---------------------------------
  // NOTE: "Cube, Discriminating" refers to the same item as "Cube of Force, Discriminating"
  // above (entry 185). No separate entry is needed; both names refer to the same item
  // from Classic Treasures Revisited. See wondrous-cube-of-force-discriminating.

  // ---- 192: Cubes of Force, Twinned -------------------------------------------
  {
    id: "wondrous-cubes-of-force-twinned",
    name: "Cubes of Force, Twinned",
    category: 'wondrous',
    source: "Pathfinder Chronicles: Classic Treasures Revisited",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION }],
    casterLevel: 10,
    slot: 'none',

    price: 66000,
    weight: 0.5,

    description:
      "These paired cubes operate like standard cubes of force, but with a key distinction: when a face on one cube is pressed, its counterpart creates the appropriate wall instead, provided the cubes remain within 100 feet of each other. " +
      "Both cubes can function independently after being placed and left unattended, enabling tactical flexibility across distances up to 100 feet.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['wall of force'],
      cost: 33000,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 10,
      breakDC: 20,
    },

    activationCategory: 'use_activated',

    charges: { maximum: 36, rechargeMethod: 'Daily automatic renewal' },

    effects: [
      {
        type: 'special',
        target: 'special.cube_of_force_barrier',
        value: 0,
        source: "Cubes of Force, Twinned",
      },
    ],
  },

  // ---- 193: Cubic Gate --------------------------------------------------------
  {
    id: "wondrous-cubic-gate",
    name: "Cubic Gate",
    category: 'wondrous',
    source: "Core Rulebook",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.CONJURATION }],
    casterLevel: 13,
    slot: 'none',

    price: 164000,
    weight: 2,

    description:
      "A small cube made of carnelian with six sides, each keyed to a different plane of existence. One side connects to the Material Plane; the creator chooses the other five destinations. " +
      "Pressing a face once opens a gate to a random point on that plane. There is a 10% chance per minute that a random outsider comes through seeking food, fun, or trouble. Pressing the same face again closes the gate. Only one gate may be open at a time. " +
      "Pressing a face twice in quick succession transports the user and all adjacent creatures to a random point on that plane (Will DC 23 negates for unwilling creatures).",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['plane shift'],
      cost: 82000,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 10,
      breakDC: 20,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.planar_gate',
        value: 0,
        source: "Cubic Gate",
      },
    ],
  },

  // ---- 194: Cummerbund, Aquatic -----------------------------------------------
  {
    id: "wondrous-cummerbund-aquatic",
    name: "Cummerbund, Aquatic",
    category: 'wondrous',
    source: "Gnomes of Golarion",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'belt',

    price: 2600,
    weight: 0,

    description:
      "This deep blue cummerbund features embroidered dolphins and is believed to be of gnomish origin. " +
      "It grants the wearer a +4 competence bonus on Swim checks, and allows the wearer to take 10 on such checks even if distracted or endangered.",

    construction: {
      feats: ['Craft Wondrous Item', 'touch of the sea'],
      spells: [],
      cost: 1300,
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
        target: 'skill.swim',
        value: 4,
        source: "Cummerbund, Aquatic",
      },
      {
        type: 'special',
        target: 'special.take10_swim_in_danger',
        value: 0,
        source: "Cummerbund, Aquatic",
      },
    ],
  },

  // ---- 195: Cups of Rapport ---------------------------------------------------
  {
    id: "wondrous-cups-of-rapport",
    name: "Cups of Rapport",
    category: 'wondrous',
    source: "Ultimate Equipment",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 5,
    slot: 'none',

    price: 8000,
    weight: 1,

    description:
      "This magical pair consists of a master cup and a mark cup. When the master cup's user shares drinks with someone using the mark cup for 5 minutes of socializing, they gain a +5 bonus on Bluff, Diplomacy, and Sense Motive checks against that person. The beverages must come from a common source. " +
      "The bonus remains active for 1 hour or until the users separate beyond 15 feet. Each creature can only be affected by the same mark cup once per day.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['charm person'],
      cost: 4000,
    },
    physicalStats: {
      hardness: 1,
      hitPoints: 2,
      breakDC: 12,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'bonus',
        bonusType: 'untyped',
        target: 'skill.bluff',
        value: 5,
        source: "Cups of Rapport",
        condition: {
          type: 'custom',
          params: { situation: 'vs mark cup user' },
          description: 'against the creature who shared from the mark cup',
        },
      },
      {
        type: 'bonus',
        bonusType: 'untyped',
        target: 'skill.diplomacy',
        value: 5,
        source: "Cups of Rapport",
        condition: {
          type: 'custom',
          params: { situation: 'vs mark cup user' },
          description: 'against the creature who shared from the mark cup',
        },
      },
      {
        type: 'bonus',
        bonusType: 'untyped',
        target: 'skill.sense_motive',
        value: 5,
        source: "Cups of Rapport",
        condition: {
          type: 'custom',
          params: { situation: 'vs mark cup user' },
          description: 'against the creature who shared from the mark cup',
        },
      },
    ],
  },

  // ---- 196: Cyclops Helm ------------------------------------------------------
  {
    id: "wondrous-cyclops-helm",
    name: "Cyclops Helm",
    category: 'wondrous',
    source: "Pathfinder Module: The Emerald Spire Superdungeon",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 1,
    slot: 'head',

    price: 5600,
    weight: 5,

    description:
      "This magical headpiece is fashioned from a shrunken cyclops skull and emulates a portion of the creature's signature insight ability. " +
      "Once per day as an immediate action, the wearer can choose the result of the next die roll instead of rolling — applying this to an attack roll, saving throw, skill check, or ability check.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['true strike'],
      cost: 2800,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 10,
      breakDC: 20,
    },

    activationCategory: 'command_word',
    activationAction: 'immediate',

    effects: [
      {
        type: 'special',
        target: 'special.cyclops_foresight',
        value: 0,
        source: "Cyclops Helm",
      },
    ],
  },

  // ---- 197: Dagger, Sacrificial Dagger of the Blood Mother --------------------
  {
    id: "wondrous-sacrificial-dagger-blood-mother",
    name: "Dagger, Sacrificial Dagger of the Blood Mother",
    category: 'wondrous',
    source: "Pathfinder Adventure Path: Giants Revisited",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.NECROMANCY }],
    casterLevel: 3,
    slot: 'none',

    price: 2700,
    weight: 1,

    description:
      "Typically fashioned from carved stone or sharpened mammoth bone with an elongated hilt suited for Large creatures, this ritual implement bears imagery of a female figure holding meat and a stone tablet. " +
      "Though symbolic in nature and unsuitable for combat, it grants the wielder the ability to cast detect animals or plants once daily. " +
      "Followers of the giant goddess Fandarra gain an additional ability: they can cast death knell once per day when offering the target's blood as tribute to their patron deity.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['death knell', 'detect animals or plants'],
      cost: 1350,
    },
    physicalStats: {
      hardness: 2,
      hitPoints: 5,
      breakDC: 15,
    },

    activationCategory: 'command_word',
    activationAction: 'standard',

    effects: [
      {
        type: 'special',
        target: 'special.ritual_implement',
        value: 0,
        source: "Dagger, Sacrificial Dagger of the Blood Mother",
      },
      {
        type: 'special',
        target: 'special.fandarra_death_knell',
        value: 0,
        source: "Dagger, Sacrificial Dagger of the Blood Mother",
        condition: {
          type: 'custom',
          params: { deity: 'Fandarra' },
          description: "death knell 1/day usable only by worshippers of Fandarra who offer the target's blood as tribute",
        },
      },
    ],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'detect_animals_or_plants',
            spellName: 'Detect Animals or Plants',
            casterLevel: 3,
            usesPerDay: 1,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // ---- 198: Dagon's Eye -------------------------------------------------------
  {
    id: "wondrous-dagons-eye",
    name: "Dagon's Eye",
    category: 'wondrous',
    source: "Pathfinder Adventure Path: Skull and Shackles",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [
      { strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION },
      { strength: AuraStrength.FAINT, school: MagicSchool.EVOCATION },
    ],
    casterLevel: 5,
    slot: 'none',

    price: 12600,
    weight: 2,

    description:
      "A luminous yellow crystal that floats one foot above solid surfaces and emits light like a torch. It provides normal light in a 20-foot radius, with an additional 20 feet of increased light (one step brighter than the surrounding environment). " +
      "Any text written in Abyssal becomes intelligible to any observer, functioning like the comprehend languages spell. " +
      "Any Celestial writing ignites when exposed to the crystal's light, detonating as a fireball dealing 6d6 points of fire damage to all creatures within 20 feet (Reflex DC 14 half). This ability recharges every 10 minutes.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['comprehend languages', 'explosive runes'],
      specialRequirements: ['Creator must worship a demon lord'],
      cost: 6300,
    },
    physicalStats: {
      hardness: 1,
      hitPoints: 5,
      breakDC: 12,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'special',
        target: 'special.torch_light',
        value: 0,
        source: "Dagon's Eye",
      },
      {
        type: 'special',
        target: 'special.comprehend_abyssal_text',
        value: 0,
        source: "Dagon's Eye",
      },
      {
        type: 'damage',
        bonusType: 'untyped',
        target: 'special.celestial_text_fireball',
        value: '6d6',
        source: "Dagon's Eye",
        condition: {
          type: 'custom',
          params: { trigger: 'celestial_writing_in_light_radius' },
          description: 'when Celestial writing is exposed to the crystal\'s light',
        },
      },
    ],
  },

  // ---- 199: Darkskull ---------------------------------------------------------
  {
    id: "wondrous-darkskull",
    name: "Darkskull",
    category: 'wondrous',
    source: "Core Rulebook",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION }],
    casterLevel: 9,
    slot: 'none',

    price: 60000,
    weight: 5,

    description:
      "An ebony skull carved with inherent malevolence. Wherever the skull goes, the area around it is treated as though an unhallow spell had been cast with the skull as the touched point of origin. " +
      "Each darkskull is permanently attuned to a single spell effect from the unhallow spell's standard list, determined at creation and unable to be modified afterward.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['unhallow'],
      specialRequirements: ['Creator must be evil'],
      cost: 30000,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 10,
      breakDC: 20,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'special',
        target: 'special.unhallow_aura',
        value: 0,
        source: "Darkskull",
      },
    ],
  },

  // ---- 200: Dawn's Light ------------------------------------------------------
  {
    id: "wondrous-dawns-light",
    name: "Dawn's Light",
    category: 'wondrous',
    source: "Inner Sea Gods",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [
      { strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION },
      { strength: AuraStrength.FAINT, school: MagicSchool.EVOCATION },
    ],
    casterLevel: 5,
    slot: 'none',

    price: 40000,
    weight: 2,

    description:
      "This lantern functions as a standard light source and produces illumination comparable to daylight across a 60-foot radius when activated. " +
      "Once per day, if the wielder is a good-aligned divine spellcaster, they can activate an enhanced mode as a swift action that lasts 1 hour. This intensified state produces three effects: " +
      "it causes dazzlement to evil outsiders and undead creatures in the area, reduces the damage resistance of evil incorporeal creatures from 50% to 25% against magical attacks, " +
      "and makes visible any marks indicating evil allegiance, causing such symbols to glow visibly through most concealments.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['daylight', 'detect evil'],
      specialRequirements: ['Creator must worship a good deity associated with light'],
      cost: 20000,
    },
    physicalStats: {
      hardness: 1,
      hitPoints: 5,
      breakDC: 12,
    },

    activationCategory: 'command_word',
    activationAction: 'swift',

    effects: [
      {
        type: 'special',
        target: 'special.daylight_illumination',
        value: 0,
        source: "Dawn's Light",
      },
      {
        type: 'special',
        target: 'special.dawns_light_enhanced_mode',
        value: 0,
        source: "Dawn's Light",
        condition: {
          type: 'custom',
          params: { requirement: 'good_aligned_divine_spellcaster' },
          description: 'enhanced mode usable once per day only by good-aligned divine spellcasters',
        },
      },
    ],
  },
];
