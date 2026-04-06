import type { WondrousItemDefinition } from '@/types/magicItems';
import { AuraStrength, MagicSchool } from '@/types/equipment';

export const wondrousItemsCD1: WondrousItemDefinition[] = [
  // ---- 1. Cage of Captivity -----------------------------------------------
  {
    id: 'wondrous-cage-of-captivity',
    name: 'Cage of Captivity',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 15,
    slot: 'none',

    price: 160000,
    weight: 1,

    description:
      'This golden wire miniature cage can capture a weakened outsider once per day. The target must be ' +
      'physically present (not summoned) and unable to take actions (cowering, dazed, dying, helpless, ' +
      'stunned, or unconscious). The user places gems worth at least 100 gp per Hit Die inside the cage ' +
      'and concentrates for 1 minute. The target must succeed at a DC 20 Will save (DC 25 if the user ' +
      "knows its true name) or shrink to 1 inch in height and enter the cage as per the binding spell's " +
      'minimum containment effect. Trapped outsiders cannot use supernatural or spell-like abilities but ' +
      'can interact and manipulate through skills. Opening the cage requires a DC 22 Will save; failure ' +
      'causes 24-hour repulsion. The original captor gains a +5 morale bonus on this save. Opening the ' +
      'cage allows compelling a service via geas/quest (if the true name is known), lesser geas (7 or ' +
      'fewer HD), or suggestion (more than 7 HD), ignoring spell resistance but allowing a DC 20 Will ' +
      'save to negate.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['antipathy', 'binding', 'geas/quest'],
      cost: 80000,
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
        target: 'special.cage_of_captivity_trap_outsider',
        value: 0,
        source: 'Cage of Captivity',
      },
    ],
  },

  // ---- 2. Caller's Feather -------------------------------------------------
  {
    id: 'wondrous-callers-feather',
    name: "Caller's Feather",
    category: 'wondrous',
    source: 'Ultimate Magic',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.CONJURATION }],
    casterLevel: 15,
    slot: 'none',

    price: 2000,
    weight: 0,

    description:
      'This feather allows the wearer to call outsiders with 2 additional Hit Dice when casting planar ' +
      'binding, planar ally, or gate spells. The wearer may alternatively expend the feather to summon ' +
      'a single outsider with up to 2 more Hit Dice than normally permitted by the spell. The item ' +
      'grants a +2 insight bonus on Charisma checks and Charisma-based skill checks made to influence ' +
      'called creatures. The feather crumbles to dust after use.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['planar ally', 'planar binding'],
      cost: 1000,
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
        bonusType: 'insight',
        target: 'skill.diplomacy',
        value: 2,
        source: "Caller's Feather",
        condition: {
          type: 'custom',
          params: { descriptor: 'called_outsider_influence' },
          description: 'on Charisma checks and Charisma-based skill checks to influence called creatures',
        },
      },
      {
        type: 'special',
        target: 'special.callers_feather_extra_hd',
        value: 2,
        source: "Caller's Feather",
      },
    ],
  },

  // ---- 3. Caltrop Bead (iron) ----------------------------------------------
  {
    id: 'wondrous-caltrop-bead-iron',
    name: 'Caltrop Bead (Iron)',
    category: 'wondrous',
    source: "Adventurer's Armory",
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.CONJURATION }],
    casterLevel: 7,
    slot: 'none',

    price: 40,
    weight: 2,

    description:
      'This throwable iron sphere functions as a ranged touch attack with a 10-foot range increment, ' +
      'or can be used as sling ammunition. Upon impact with a solid object it detonates, scattering ' +
      'caltrops across a 10-foot-radius area. A creature struck directly takes 2d4 piercing damage; ' +
      'creatures adjacent to the impact point take 1d4 damage. The created caltrops persist for 1 hour.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['minor creation'],
      cost: 20,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 2,
      breakDC: 15,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.caltrop_bead_scatter',
        value: 0,
        source: 'Caltrop Bead',
      },
    ],
  },

  // ---- 3b. Caltrop Bead (cold iron) ----------------------------------------
  {
    id: 'wondrous-caltrop-bead-cold-iron',
    name: 'Caltrop Bead (Cold Iron)',
    category: 'wondrous',
    source: "Adventurer's Armory",
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.CONJURATION }],
    casterLevel: 7,
    slot: 'none',

    price: 80,
    weight: 2,

    description:
      'This throwable cold iron sphere functions as a ranged touch attack with a 10-foot range ' +
      'increment, or can be used as sling ammunition. Upon impact with a solid object it detonates, ' +
      'scattering cold iron caltrops across a 10-foot-radius area. A creature struck directly takes ' +
      '2d4 piercing damage; creatures adjacent to the impact point take 1d4 damage. The created ' +
      'caltrops persist for 1 hour. The cold iron material bypasses damage reduction of fey and ' +
      'certain other creatures.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['minor creation'],
      cost: 40,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 2,
      breakDC: 15,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.caltrop_bead_scatter',
        value: 0,
        source: 'Caltrop Bead (Cold Iron)',
      },
    ],
  },

  // ---- 4. Canard, Raucous --------------------------------------------------
  {
    id: 'wondrous-canard-raucous',
    name: 'Canard, Raucous',
    category: 'wondrous',
    source: "Adventurer's Armory 2",
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 1,
    slot: 'none',

    price: 100,
    weight: 0,

    description:
      'A rolled parchment that can record messages of up to 25 words. When activated, it sprouts ' +
      'wings and circles overhead for 10 minutes, loudly repeating the stored message. Alternatively, ' +
      'the message triggers when the next person opens the parchment. After 10 minutes, the item ' +
      'vanishes in a shower of sparks.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['animate objects', 'magic mouth'],
      cost: 50,
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
        target: 'special.canard_raucous_message',
        value: 0,
        source: 'Canard, Raucous',
      },
    ],
  },

  // ---- 5. Candle of Abaddon ------------------------------------------------
  {
    id: 'wondrous-candle-of-abaddon',
    name: 'Candle of Abaddon',
    category: 'wondrous',
    source: 'Book of the Damned',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.NECROMANCY }],
    casterLevel: 13,
    slot: 'none',

    price: 9000,
    weight: 1,

    description:
      'This pale, milky-green wax candle shaped like screaming souls provides eerie illumination ' +
      'within a 15-foot radius, functioning as a 6th-level darkness spell. It grants evil spellcasters ' +
      'a +2 bonus to effective caster level for spells with the evil descriptor. The light creates a ' +
      'magic circle against evil effect against daemons specifically. Natural healing does not function ' +
      "within the candle's radius, and magical healing requires a successful DC 25 caster level check. " +
      'The candle burns for 4 hours total, consuming at least 10 minutes each time it is lit.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['desecrate', 'magic circle against evil'],
      specialRequirements: ['Creator must be evil'],
      cost: 4500,
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
        target: 'spell.caster_level',
        value: 2,
        source: 'Candle of Abaddon',
        condition: {
          type: 'custom',
          params: { descriptor: 'evil' },
          description: 'evil spellcasters only; applies to spells with the evil descriptor',
        },
      },
      {
        type: 'special',
        target: 'special.candle_abaddon_darkness',
        value: 0,
        source: 'Candle of Abaddon',
      },
      {
        type: 'special',
        target: 'special.candle_abaddon_healing_suppression',
        value: 0,
        source: 'Candle of Abaddon',
      },
    ],
  },

  // ---- 6. Candle of Clean Air ----------------------------------------------
  {
    id: 'wondrous-candle-of-clean-air',
    name: 'Candle of Clean Air',
    category: 'wondrous',
    source: 'Dungeons of Golarion',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ABJURATION }],
    casterLevel: 10,
    slot: 'none',

    price: 7500,
    weight: 0,

    description:
      'A white candle inscribed with floral glyphs that repels smoke, mist, cloud, and other gas ' +
      'effects in a 5-foot radius. It completely blocks spell-based gas effects of 3rd level or lower. ' +
      'Against more potent cloud effects it grants a +4 resistance bonus on saves and a +4 deflection ' +
      'bonus to AC against creatures with the air subtype. The candle can burn for up to 5 minutes in ' +
      '1-minute increments before it is consumed.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['wind wall'],
      cost: 3750,
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
        bonusType: 'resistance',
        target: 'save.all',
        value: 4,
        source: 'Candle of Clean Air',
        condition: {
          type: 'custom',
          params: { descriptor: 'gas_effects_4th_level_plus' },
          description: 'against potent cloud/gas effects of 4th level or higher',
        },
      },
      {
        type: 'bonus',
        bonusType: 'deflection',
        target: 'ac',
        value: 4,
        source: 'Candle of Clean Air',
        condition: {
          type: 'target_type',
          params: { creatureType: 'air_subtype' },
          description: 'against creatures with the air subtype',
        },
      },
      {
        type: 'special',
        target: 'special.candle_clean_air_gas_block',
        value: 3,
        source: 'Candle of Clean Air',
      },
    ],
  },

  // ---- 7. Candle of Invocation --------------------------------------------
  {
    id: 'wondrous-candle-of-invocation',
    name: 'Candle of Invocation',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.CONJURATION }],
    casterLevel: 17,
    slot: 'none',

    price: 8400,
    weight: 1,

    description:
      'Each of these special tapers is dedicated to one of the nine alignments. When burned, it ' +
      'grants a +2 morale bonus on attack rolls, saving throws, and skill checks to all characters ' +
      "within 30 feet whose alignment matches the candle's. Clerics of matching alignment who prepare " +
      'spells while the candle burns function as two caster levels higher. The candle burns for 4 ' +
      'hours and can be manually extinguished. Once per burning, the user may cast a gate spell to ' +
      'contact a respondent of matching alignment; doing so immediately consumes the candle.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['gate'],
      specialRequirements: ["Creator must match the candle's alignment"],
      cost: 4200,
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
        bonusType: 'morale',
        target: 'attack.all',
        value: 2,
        source: 'Candle of Invocation',
        condition: {
          type: 'custom',
          params: { descriptor: 'matching_alignment_within_30ft' },
          description: "characters within 30 feet whose alignment matches the candle's",
        },
      },
      {
        type: 'bonus',
        bonusType: 'morale',
        target: 'save.all',
        value: 2,
        source: 'Candle of Invocation',
        condition: {
          type: 'custom',
          params: { descriptor: 'matching_alignment_within_30ft' },
          description: "characters within 30 feet whose alignment matches the candle's",
        },
      },
      {
        type: 'special',
        target: 'special.candle_invocation_cleric_level_boost',
        value: 2,
        source: 'Candle of Invocation',
      },
      {
        type: 'special',
        target: 'special.candle_invocation_gate',
        value: 0,
        source: 'Candle of Invocation',
      },
    ],
  },

  // ---- 8. Candle of Truth -------------------------------------------------
  {
    id: 'wondrous-candle-of-truth',
    name: 'Candle of Truth',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 3,
    slot: 'none',

    price: 2500,
    weight: 1,

    description:
      'This white tallow candle creates a zone of truth effect (Will DC 13 negates) in a 5-foot ' +
      'radius centered on the candle when burned. The effect lasts for 1 hour while the candle burns, ' +
      'but is immediately canceled if the candle is extinguished.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['zone of truth'],
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
        target: 'special.candle_truth_zone_of_truth',
        value: 0,
        source: 'Candle of Truth',
      },
    ],
  },

  // ---- 9. Candle, Grave ---------------------------------------------------
  {
    id: 'wondrous-candle-grave',
    name: 'Candle, Grave',
    category: 'wondrous',
    source: 'Undead Slayer\'s Handbook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.NECROMANCY }],
    casterLevel: 10,
    slot: 'none',

    price: 5500,
    weight: 1,

    description:
      'This magical candle summons the spirit of a deceased creature from its physical remains. When ' +
      'placed amid the remains and lit, thick smoke rises and manifests as a ghostly shape. The ' +
      'summoned spirit can communicate but suffers a -4 penalty on saving throws. Each set of remains ' +
      'can only be affected once; the candle is consumed after a single use.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['speak with dead'],
      cost: 2750,
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
        target: 'special.candle_grave_speak_with_dead',
        value: 0,
        source: 'Candle, Grave',
      },
    ],
  },

  // ---- 10. Candle, Time-Bewitching ----------------------------------------
  {
    id: 'wondrous-candle-time-bewitching',
    name: 'Candle, Time-Bewitching',
    category: 'wondrous',
    source: 'Occult Adventures',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION }],
    casterLevel: 10,
    slot: 'none',

    price: 22500,
    weight: 1,

    description:
      'This item produces different magical effects based on the time of day it is lit. When lit ' +
      'during daylight hours, it creates an effect similar to deeper darkness in a 15-foot radius. ' +
      'When lit at night, it creates an effect similar to daylight in a 15-foot radius. The candle ' +
      'burns for 10 minutes total and can be lit and extinguished repeatedly in 1-minute increments.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['daylight', 'deeper darkness'],
      cost: 11250,
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
        target: 'special.candle_time_bewitching_light',
        value: 0,
        source: 'Candle, Time-Bewitching',
      },
    ],
  },

  // ---- 11. Canopic Wrap ---------------------------------------------------
  {
    id: 'wondrous-canopic-wrap',
    name: 'Canopic Wrap',
    category: 'wondrous',
    source: 'Mummy\'s Mask',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 7,
    slot: 'belt',

    price: 10500,
    weight: 1,

    description:
      "This belt comprises dozens of interwoven linen wraps bound together by a simple stone buckle. " +
      "It grants a +4 resistance bonus on saving throws against disease, including supernatural " +
      "diseases such as mummy rot. The item provides light fortification by randomly shifting the " +
      "wearer's internal organs, granting a 25% chance to negate extra damage from critical hits or " +
      "sneak attacks. However, this internal shifting increases the DC of Heal checks performed on " +
      "the wearer by 5.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["bear's endurance", 'greater infernal healing'],
      cost: 5250,
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
        bonusType: 'resistance',
        target: 'save.all',
        value: 4,
        source: 'Canopic Wrap',
        condition: {
          type: 'custom',
          params: { descriptor: 'disease' },
          description: 'against disease effects, including supernatural diseases like mummy rot',
        },
      },
      {
        type: 'special',
        target: 'special.canopic_wrap_light_fortification',
        value: 0,
        source: 'Canopic Wrap',
      },
    ],
  },

  // ---- 12. Canopy, Travel -------------------------------------------------
  {
    id: 'wondrous-canopy-travel',
    name: 'Canopy, Travel',
    category: 'wondrous',
    source: "Adventurer's Armory 2",
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.EVOCATION }],
    casterLevel: 7,
    slot: 'none',

    price: 750,
    weight: 3,

    description:
      'A 5-foot-square cloth canopy trimmed with gold fringe that unfolds and hovers 3 feet overhead ' +
      'when a command word is spoken, providing shade for the bearer and adjacent creatures. The ' +
      'canopy cannot support weight and automatically folds up when out of sunlight for more than ' +
      '1 minute.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['floating disk'],
      cost: 375,
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
        target: 'special.canopy_travel_shade',
        value: 0,
        source: 'Canopy, Travel',
      },
    ],
  },

  // ---- 13. Cap of Human Guise ---------------------------------------------
  {
    id: 'wondrous-cap-of-human-guise',
    name: 'Cap of Human Guise',
    category: 'wondrous',
    source: 'Advanced Race Guide',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ILLUSION }],
    casterLevel: 3,
    slot: 'head',

    price: 800,
    weight: 0,

    description:
      'This magical headpiece allows the wearer to alter their appearance as though using the disguise ' +
      'self spell. The transformation is limited to appearing as a plainly dressed Small human child, ' +
      'adult halfling, or adult gnome in a mundane profession such as peasant, blacksmith, or ' +
      'shopkeeper. The cap itself can be slightly altered as part of the disguise but the overall ' +
      'appearance must remain unremarkable. Though designed for Small humanoids, any Small or Medium ' +
      'humanoid can wear it.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['disguise self'],
      cost: 400,
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
        target: 'special.cap_human_guise_disguise',
        value: 0,
        source: 'Cap of Human Guise',
      },
    ],
  },

  // ---- 14. Cap of Light ---------------------------------------------------
  {
    id: 'wondrous-cap-of-light',
    name: 'Cap of Light',
    category: 'wondrous',
    source: "Adventurer's Armory",
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.EVOCATION }],
    casterLevel: 1,
    slot: 'head',

    price: 900,
    weight: 0,

    description:
      'A cloth skullcap with a small silver candle statue affixed to its crown. The wearer can ' +
      'command the statue to radiate light as per the light spell. The light can also be turned off ' +
      'on command.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['light'],
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
        target: 'special.cap_light_illuminate',
        value: 0,
        source: 'Cap of Light',
      },
    ],
  },

  // ---- 15. Cap of the Free Thinker ----------------------------------------
  {
    id: 'wondrous-cap-of-the-free-thinker',
    name: 'Cap of the Free Thinker',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ABJURATION }],
    casterLevel: 10,
    slot: 'head',

    price: 12000,
    weight: 0,

    description:
      'This soft cap helps the wearer free herself from outside mental influences. Once per day, when ' +
      'the wearer fails a saving throw against a mind-affecting effect, she can immediately reroll the ' +
      'saving throw and take the second result.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['mind blank'],
      cost: 6000,
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
        target: 'special.cap_free_thinker_reroll_mind_affecting',
        value: 0,
        source: 'Cap of the Free Thinker',
      },
    ],
  },

  // ---- 16. Cap, Buffering -------------------------------------------------
  {
    id: 'wondrous-cap-buffering',
    name: 'Cap, Buffering',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.CONJURATION }],
    casterLevel: 1,
    slot: 'head',

    price: 2000,
    weight: 1,

    description:
      "A floppy, shapeless cloth hat that protects against the worst of critical hits. Once per day, " +
      "when the wearer is struck by a critical hit, she can use an immediate action to convert the " +
      "bonus damage of the critical hit into nonlethal damage.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['shield'],
      cost: 1000,
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
        target: 'special.cap_buffering_crit_to_nonlethal',
        value: 0,
        source: 'Cap, Buffering',
      },
    ],
  },

  // ---- 17. Cap, Steel-Mind ------------------------------------------------
  {
    id: 'wondrous-cap-steel-mind',
    name: 'Cap, Steel-Mind',
    category: 'wondrous',
    source: 'Construct Handbook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ABJURATION }],
    casterLevel: 9,
    slot: 'head',

    price: 33600,
    weight: 3,

    description:
      'This ornate iron helmet, constructed from the ruined scraps of various constructs, exerts ' +
      "mechanical control over the wearer's body when the wearer experiences mental incapacity. When " +
      "the wearer is dazed, the cap converts the effect to confusion instead. When the wearer is " +
      "stunned, the cap converts the effect to both confusion and staggered. The effect's duration " +
      'counts toward the original daze or stun effect duration. The cap functions for up to 5 rounds ' +
      'per day; these rounds do not need to be consecutive.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['surmount affliction'],
      cost: 16800,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 10,
      breakDC: 22,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'special',
        target: 'special.cap_steel_mind_daze_conversion',
        value: 0,
        source: 'Cap, Steel-Mind',
      },
      {
        type: 'special',
        target: 'special.cap_steel_mind_stun_conversion',
        value: 0,
        source: 'Cap, Steel-Mind',
      },
    ],
  },

  // ---- 18. Caparison of Resistance +1 -------------------------------------
  {
    id: 'wondrous-caparison-of-resistance-1',
    name: 'Caparison of Resistance +1',
    category: 'wondrous',
    source: "Adventurer's Guide",
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION }],
    casterLevel: 5,
    slot: 'none',

    price: 2700,
    weight: 4,

    description:
      'This magical garment is intended for a horse or similar quadruped, but it can change size ' +
      'and shape to fit any four-legged creature from Small to Huge in size. It grants the creature ' +
      'wearing it a +1 resistance bonus on all saving throws. A rider mounted on the creature also ' +
      'receives this bonus, though the bonus does not stack with the same bonus from multiple riders.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['resistance'],
      cost: 1350,
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
        bonusType: 'resistance',
        target: 'save.all',
        value: 1,
        source: 'Caparison of Resistance +1',
      },
    ],
  },

  // ---- 18b. Caparison of Resistance +2 ------------------------------------
  {
    id: 'wondrous-caparison-of-resistance-2',
    name: 'Caparison of Resistance +2',
    category: 'wondrous',
    source: "Adventurer's Guide",
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION }],
    casterLevel: 5,
    slot: 'none',

    price: 10800,
    weight: 4,

    description:
      'This magical garment is intended for a horse or similar quadruped, but it can change size ' +
      'and shape to fit any four-legged creature from Small to Huge in size. It grants the creature ' +
      'wearing it a +2 resistance bonus on all saving throws. A rider mounted on the creature also ' +
      'receives this bonus, though the bonus does not stack with the same bonus from multiple riders.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['resistance'],
      cost: 5400,
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
        bonusType: 'resistance',
        target: 'save.all',
        value: 2,
        source: 'Caparison of Resistance +2',
      },
    ],
  },

  // ---- 18c. Caparison of Resistance +3 ------------------------------------
  {
    id: 'wondrous-caparison-of-resistance-3',
    name: 'Caparison of Resistance +3',
    category: 'wondrous',
    source: "Adventurer's Guide",
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION }],
    casterLevel: 5,
    slot: 'none',

    price: 24300,
    weight: 4,

    description:
      'This magical garment is intended for a horse or similar quadruped, but it can change size ' +
      'and shape to fit any four-legged creature from Small to Huge in size. It grants the creature ' +
      'wearing it a +3 resistance bonus on all saving throws. A rider mounted on the creature also ' +
      'receives this bonus, though the bonus does not stack with the same bonus from multiple riders.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['resistance'],
      cost: 12150,
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
        bonusType: 'resistance',
        target: 'save.all',
        value: 3,
        source: 'Caparison of Resistance +3',
      },
    ],
  },

  // ---- 18d. Caparison of Resistance +4 ------------------------------------
  {
    id: 'wondrous-caparison-of-resistance-4',
    name: 'Caparison of Resistance +4',
    category: 'wondrous',
    source: "Adventurer's Guide",
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION }],
    casterLevel: 5,
    slot: 'none',

    price: 43200,
    weight: 4,

    description:
      'This magical garment is intended for a horse or similar quadruped, but it can change size ' +
      'and shape to fit any four-legged creature from Small to Huge in size. It grants the creature ' +
      'wearing it a +4 resistance bonus on all saving throws. A rider mounted on the creature also ' +
      'receives this bonus, though the bonus does not stack with the same bonus from multiple riders.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['resistance'],
      cost: 21600,
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
        bonusType: 'resistance',
        target: 'save.all',
        value: 4,
        source: 'Caparison of Resistance +4',
      },
    ],
  },

  // ---- 18e. Caparison of Resistance +5 ------------------------------------
  {
    id: 'wondrous-caparison-of-resistance-5',
    name: 'Caparison of Resistance +5',
    category: 'wondrous',
    source: "Adventurer's Guide",
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION }],
    casterLevel: 5,
    slot: 'none',

    price: 67500,
    weight: 4,

    description:
      'This magical garment is intended for a horse or similar quadruped, but it can change size ' +
      'and shape to fit any four-legged creature from Small to Huge in size. It grants the creature ' +
      'wearing it a +5 resistance bonus on all saving throws. A rider mounted on the creature also ' +
      'receives this bonus, though the bonus does not stack with the same bonus from multiple riders.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['resistance'],
      cost: 33750,
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
        bonusType: 'resistance',
        target: 'save.all',
        value: 5,
        source: 'Caparison of Resistance +5',
      },
    ],
  },

  // ---- 19. Cape of Bravado ------------------------------------------------
  {
    id: 'wondrous-cape-of-bravado',
    name: 'Cape of Bravado',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 2,
    slot: 'none',

    price: 7000,
    weight: 1,

    description:
      'This bright red cape provides bonuses when held in one hand while draped over the arm. It ' +
      'grants a +1 insight bonus to AC and a +5 competence bonus on Bluff checks made to feint in ' +
      'combat. Readying the cape is a move action (or a free action for a character with a base ' +
      'attack bonus of +1 or higher). Once per day, the wielder can use an immediate action to ' +
      'compel an opponent within 30 feet to attack him on its next turn (Will DC 11 negates).',

    construction: {
      feats: ['Craft Wondrous Item', 'compel hostility'],
      spells: [],
      specialRequirements: ['Creator must have 5 ranks in Bluff'],
      cost: 3500,
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
        bonusType: 'insight',
        target: 'ac',
        value: 1,
        source: 'Cape of Bravado',
        condition: {
          type: 'custom',
          params: { descriptor: 'cape_held_in_hand' },
          description: 'only when held in one hand draped over the arm',
        },
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.bluff',
        value: 5,
        source: 'Cape of Bravado',
        condition: {
          type: 'custom',
          params: { descriptor: 'feint_in_combat' },
          description: 'only on Bluff checks made to feint in combat while cape is held',
        },
      },
      {
        type: 'special',
        target: 'special.cape_bravado_compel_attack',
        value: 0,
        source: 'Cape of Bravado',
      },
    ],
  },

  // ---- 20. Cape of Daring Deeds -------------------------------------------
  {
    id: 'wondrous-cape-of-daring-deeds',
    name: 'Cape of Daring Deeds',
    category: 'wondrous',
    source: 'Swashbuckler Errata / Advanced Class Guide',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION }],
    casterLevel: 5,
    slot: 'shoulders',

    price: 9000,
    weight: 2,

    description:
      'This short, silken cape can be changed to match any attire or mood with a full-round action. ' +
      'When a swashbuckler wearing this cape uses the derring-do deed, she adds an extra die on rolls ' +
      'of a natural 5 or 6 (rather than just a natural 6). The cape grants a +2 resistance bonus on ' +
      'saving throws, increasing to +4 for 1 round whenever the wearer activates the charmed life ' +
      'class feature.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['guidance', 'prestidigitation', 'resistance'],
      cost: 4500,
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
        bonusType: 'resistance',
        target: 'save.all',
        value: 2,
        source: 'Cape of Daring Deeds',
      },
      {
        type: 'special',
        target: 'special.cape_daring_deeds_derring_do',
        value: 0,
        source: 'Cape of Daring Deeds',
      },
      {
        type: 'special',
        target: 'special.cape_daring_deeds_charmed_life_boost',
        value: 0,
        source: 'Cape of Daring Deeds',
      },
    ],
  },

  // ---- 21. Cape of Effulgent Escape ---------------------------------------
  {
    id: 'wondrous-cape-of-effulgent-escape',
    name: 'Cape of Effulgent Escape',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [
      { strength: AuraStrength.FAINT, school: MagicSchool.EVOCATION },
      { strength: AuraStrength.FAINT, school: MagicSchool.ILLUSION },
    ],
    casterLevel: 3,
    slot: 'shoulders',

    price: 14000,
    weight: 1,

    description:
      'A white cloak trimmed with golden sunburst patterns that continuously emits light in a ' +
      '10-foot radius. Twice per day the wearer can trigger a blinding burst, forcing all creatures ' +
      'within 20 feet to succeed at a DC 14 Reflex save or be blinded for 1d4 rounds. The wearer ' +
      'then becomes invisible for 1 minute as per the invisibility spell, and the cape\'s light ' +
      'extinguishes for the duration of the invisibility.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['daylight', 'invisibility'],
      cost: 7000,
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
        target: 'special.cape_effulgent_escape_light',
        value: 0,
        source: 'Cape of Effulgent Escape',
      },
      {
        type: 'special',
        target: 'special.cape_effulgent_escape_blind_burst',
        value: 0,
        source: 'Cape of Effulgent Escape',
      },
    ],
    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'invisibility',
            spellName: 'Invisibility',
            casterLevel: 3,
            usesPerDay: 2,
            activationAction: 'immediate',
          },
        ],
      },
    ],
  },

  // ---- 22. Cape of Feinting -----------------------------------------------
  {
    id: 'wondrous-cape-of-feinting',
    name: 'Cape of Feinting',
    category: 'wondrous',
    source: 'Advanced Class Guide',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 8,
    slot: 'shoulders',

    price: 14000,
    weight: 1,

    description:
      'This shoulder garment allows the wearer to perform a feint three times per day as a standard ' +
      "action, causing an opponent to lose its Dexterity bonus to AC until the wearer's next turn. " +
      'Swashbucklers gain an additional benefit: if the swashbuckler uses this item or their superior ' +
      "feint deed to feint, the target becomes dazed until the swashbuckler's next turn if it fails " +
      'a DC 13 Will save.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['daze'],
      specialRequirements: ['Creator must be able to perform the superior feint deed'],
      cost: 7000,
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
        target: 'special.cape_feinting_feint_3_per_day',
        value: 3,
        source: 'Cape of Feinting',
      },
      {
        type: 'special',
        target: 'special.cape_feinting_swashbuckler_daze',
        value: 0,
        source: 'Cape of Feinting',
      },
    ],
  },

  // ---- 23. Cape of the Mountebank ----------------------------------------
  {
    id: 'wondrous-cape-of-the-mountebank',
    name: 'Cape of the Mountebank',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 9,
    slot: 'shoulders',

    price: 10800,
    weight: 1,

    description:
      'This bright red and gold cape grants the wearer one use per day of dimension door magic. ' +
      'The wearer vanishes in a harmless cloud of gray smoke and reappears similarly at the ' +
      'destination.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['dimension door'],
      cost: 5400,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 2,
      breakDC: 10,
    },

    activationCategory: 'command_word',
    activationAction: 'standard',

    effects: [],
    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'dimension_door',
            spellName: 'Dimension Door',
            casterLevel: 9,
            usesPerDay: 1,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // ---- 24. Cape, Catching -------------------------------------------------
  {
    id: 'wondrous-cape-catching',
    name: 'Cape, Catching',
    category: 'wondrous',
    source: "Adventurer's Armory",
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION }],
    casterLevel: 1,
    slot: 'shoulders',

    price: 200,
    weight: 3,

    description:
      'The wearer can activate this cape as a swift action to create a faint sphere of force that ' +
      'surrounds him on all sides, granting 20% concealment against ranged attacks for 1 minute or ' +
      'until a ranged attack misses due to the field. Once activated, the magical properties are ' +
      'consumed and the item becomes a mundane garment.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['shield'],
      cost: 100,
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
        target: 'special.cape_catching_ranged_concealment',
        value: 20,
        source: 'Cape, Catching',
      },
    ],
  },

  // ---- 25. Cape, Charlatan's ----------------------------------------------
  {
    id: "wondrous-cape-charlatans",
    name: "Cape, Charlatan's",
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [
      { strength: AuraStrength.STRONG, school: MagicSchool.EVOCATION },
      { strength: AuraStrength.STRONG, school: MagicSchool.ILLUSION },
    ],
    casterLevel: 13,
    slot: 'shoulders',

    price: 45000,
    weight: 1,

    description:
      "A red velvet cloak embroidered with gold-threaded harlequin patterns. It functions as a cape " +
      "of the mountebank but allows dimension door to be used three times per day instead of once. " +
      "Additionally, the wearer gains one daily use of ethereal jaunt.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['dimension door', 'ethereal jaunt'],
      cost: 22500,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 2,
      breakDC: 10,
    },

    activationCategory: 'command_word',
    activationAction: 'standard',

    effects: [],
    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'dimension_door',
            spellName: 'Dimension Door',
            casterLevel: 13,
            usesPerDay: 3,
            activationAction: 'standard',
          },
          {
            spellId: 'ethereal_jaunt',
            spellName: 'Ethereal Jaunt',
            casterLevel: 13,
            usesPerDay: 1,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },
];
