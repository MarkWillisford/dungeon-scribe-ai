import type { WondrousItemDefinition } from '@/types/magicItems';
import { AuraStrength, MagicSchool } from '@/types/equipment';

export const wondrousItemsEG4: WondrousItemDefinition[] = [
  // ---- Eyes of Charming -------------------------------------------------------
  {
    id: 'wondrous-eyes-of-charming',
    name: 'Eyes of Charming',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 7,
    slot: 'eyes',

    price: 56000,
    weight: 0,

    description:
      'These crystal lenses fit over the eyes. The wearer can, simply by meeting a creature\'s gaze, '
      + 'charm that creature (as charm person, with a DC 16 Will save) once per round. Both lenses must '
      + 'be worn for the magic item to take effect.',

    construction: {
      feats: ['Craft Wondrous Item', 'Heighten Spell'],
      spells: ['charm person'],
      cost: 28000,
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
        target: 'special.gaze_charm_person',
        value: 0,
        source: 'Eyes of Charming',
      },
    ],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'charm_person',
            spellName: 'Charm Person',
            casterLevel: 7,
            usesPerDay: 0,
            saveDC: 16,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // ---- Eyes of Doom -----------------------------------------------------------
  {
    id: 'wondrous-eyes-of-doom',
    name: 'Eyes of Doom',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.NECROMANCY }],
    casterLevel: 11,
    slot: 'eyes',

    price: 25000,
    weight: 0,

    description:
      'These crystal lenses fit over the eyes. The wearer can, by looking at a creature within 30 feet, '
      + 'affect it with doom (DC 11 Will save negates) once per round. The wearer also gains a continual '
      + 'deathwatch effect and may use fear as a gaze attack once per week (DC 16 Will save partial). '
      + 'Both lenses must be worn for the magic item to take effect.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['doom', 'deathwatch', 'fear'],
      cost: 12500,
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
        target: 'special.gaze_doom',
        value: 0,
        source: 'Eyes of Doom',
      },
      {
        type: 'special',
        target: 'special.deathwatch_continuous',
        value: 0,
        source: 'Eyes of Doom',
      },
    ],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'doom',
            spellName: 'Doom',
            casterLevel: 11,
            usesPerDay: 0,
            saveDC: 11,
            activationAction: 'standard',
          },
          {
            spellId: 'fear',
            spellName: 'Fear',
            casterLevel: 11,
            usesPerDay: 1,
            saveDC: 16,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // ---- Eyes of Eyebite --------------------------------------------------------
  {
    id: 'wondrous-eyes-of-eyebite',
    name: 'Eyes of Eyebite',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.NECROMANCY }],
    casterLevel: 11,
    slot: 'eyes',

    price: 30000,
    weight: 0,

    description:
      'These glasses look like golden teeth holding a pair of green-tinted lenses. The wearer can '
      + 'activate the eyebite spell effect up to 11 times per day, with each activation targeting one '
      + 'creature as a standard action. The effects end immediately upon removal of the glasses.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['eyebite'],
      cost: 15000,
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
        target: 'special.eyebite_gaze',
        value: 0,
        source: 'Eyes of Eyebite',
      },
    ],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'eyebite',
            spellName: 'Eyebite',
            casterLevel: 11,
            usesPerDay: 11,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // ---- Eyes of Keen Sight -----------------------------------------------------
  {
    id: 'wondrous-eyes-of-keen-sight',
    name: 'Eyes of Keen Sight',
    category: 'wondrous',
    source: 'Advanced Player\'s Guide',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 1,
    slot: 'eyes',

    price: 6000,
    weight: 0,

    description:
      'These clear crystal lenses fit over the wearer\'s eyes. They grant a +2 competence bonus on '
      + 'Perception checks and grant the wearer low-light vision. If the wearer already has low-light '
      + 'vision, the lenses double the distance at which that vision functions.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['keen senses'],
      cost: 3000,
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
        source: 'Eyes of Keen Sight',
      },
      {
        type: 'special',
        target: 'special.low_light_vision',
        value: 1,
        source: 'Eyes of Keen Sight',
      },
    ],
  },

  // ---- Eyes of the Dragon -----------------------------------------------------
  {
    id: 'wondrous-eyes-of-the-dragon',
    name: 'Eyes of the Dragon',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 15,
    slot: 'eyes',

    price: 110000,
    weight: 0,

    description:
      'These tigereye gems transform the wearer\'s eyes into draconic organs, granting darkvision '
      + '120 feet and blindsense 60 feet. The wearer also gains enhanced low-light vision, seeing '
      + 'four times as far in dim light as a normal human and twice as far in normal light.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['form of the dragon III'],
      cost: 55000,
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
        value: 120,
        source: 'Eyes of the Dragon',
      },
      {
        type: 'special',
        target: 'special.blindsense',
        value: 60,
        source: 'Eyes of the Dragon',
      },
      {
        type: 'special',
        target: 'special.low_light_vision',
        value: 1,
        source: 'Eyes of the Dragon',
      },
    ],
  },

  // ---- Eyes of the Eagle ------------------------------------------------------
  {
    id: 'wondrous-eyes-of-the-eagle',
    name: 'Eyes of the Eagle',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 3,
    slot: 'eyes',

    price: 2500,
    weight: 0,

    description:
      'These special crystal lenses fit over the wearer\'s eyes. Both lenses must be worn for the '
      + 'magic item to take effect. Wearing only one lens causes the wearer to become dizzy and '
      + 'stunned for 1 round. The lenses grant a +5 competence bonus on Perception checks.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['clairaudience/clairvoyance'],
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
        target: 'skill.perception',
        value: 5,
        source: 'Eyes of the Eagle',
      },
    ],
  },

  // ---- Eyes of the Owl --------------------------------------------------------
  {
    id: 'wondrous-eyes-of-the-owl',
    name: 'Eyes of the Owl',
    category: 'wondrous',
    source: 'Pathfinder Society Field Guide',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'eyes',

    price: 4000,
    weight: 0,

    description:
      'These magical goggles feature owl-themed decorations with feather clusters over the eyes. '
      + 'The wearer gains low-light vision, allowing them to see twice as far in dim light.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['beast shape I'],
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
        target: 'special.low_light_vision',
        value: 1,
        source: 'Eyes of the Owl',
      },
    ],
  },

  // ---- Eyes, Deathwatch -------------------------------------------------------
  {
    id: 'wondrous-eyes-deathwatch',
    name: 'Eyes, Deathwatch',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.NECROMANCY }],
    casterLevel: 1,
    slot: 'eyes',

    price: 2000,
    weight: 0,

    description:
      'These blood-red crystal lenses fit snugly over the wearer\'s eyes and grant the constant '
      + 'effects of the deathwatch spell, allowing the wearer to continuously perceive the life '
      + 'force of nearby creatures.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['deathwatch'],
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
        target: 'special.deathwatch_continuous',
        value: 0,
        source: 'Eyes, Deathwatch',
      },
    ],
  },

  // ---- Eyes, Mindmaster's -----------------------------------------------------
  {
    id: 'wondrous-eyes-mindmasters',
    name: "Eyes, Mindmaster's",
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 11,
    slot: 'eyes',

    price: 95000,
    weight: 0,

    description:
      'These ruby crystal lenses fit over the eyes. The wearer can use charm monster at will '
      + '(DC 19 Will save) and dominate person once per day (DC 20 Will save).',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['charm monster', 'dominate person'],
      cost: 47500,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'command_word',
    activationAction: 'standard',

    effects: [],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'charm_monster',
            spellName: 'Charm Monster',
            casterLevel: 11,
            usesPerDay: 0,
            saveDC: 19,
            activationAction: 'standard',
          },
          {
            spellId: 'dominate_person',
            spellName: 'Dominate Person',
            casterLevel: 11,
            usesPerDay: 1,
            saveDC: 20,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // ---- Face of Dagon ----------------------------------------------------------
  {
    id: 'wondrous-face-of-dagon',
    name: 'Face of Dagon',
    category: 'wondrous',
    source: 'Pathfinder Adventure Path #46: Wake of the Watcher',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.DIVINATION }],
    casterLevel: 13,
    slot: 'none',

    price: 27000,
    weight: 3,

    description:
      'This green stone idol depicts an octopoid creature. As long as the bearer carries the idol, '
      + 'she can breathe water as per the water breathing spell. Once per week, the bearer may cast '
      + 'commune to contact Dagon or a similar entity, but each time she does so she must succeed '
      + 'at a DC 20 Will save or suffer the effects of insanity.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['commune', 'water breathing'],
      cost: 14000,
    },
    physicalStats: {
      hardness: 8,
      hitPoints: 5,
      breakDC: 18,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'special',
        target: 'special.water_breathing_continuous',
        value: 0,
        source: 'Face of Dagon',
      },
    ],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'commune',
            spellName: 'Commune',
            casterLevel: 13,
            usesPerDay: 1,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // ---- False Face -------------------------------------------------------------
  {
    id: 'wondrous-false-face',
    name: 'False Face',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ILLUSION }],
    casterLevel: 3,
    slot: 'head',

    price: 1600,
    weight: 1,

    description:
      'This hand-painted party mask grants the wearer the appearance of a single specific Small or '
      + 'Medium humanoid creature, functioning identically to the disguise self spell. Each mask is '
      + 'permanently attuned to one fixed appearance that cannot be changed after creation.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['disguise self', 'magic aura'],
      cost: 800,
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
        target: 'special.disguise_self_fixed',
        value: 0,
        source: 'False Face',
      },
    ],
  },

  // ---- Familiar Bubble --------------------------------------------------------
  {
    id: 'wondrous-familiar-bubble',
    name: 'Familiar Bubble',
    category: 'wondrous',
    source: 'Pathfinder Society Field Guide',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.CONJURATION }],
    casterLevel: 3,
    slot: 'none',

    price: 2500,
    weight: 1,

    description:
      'This pair of reinforced leather straps fits over the shoulders and generates a transparent '
      + 'force bubble on the wearer\'s back. The bubble safely contains a Tiny or smaller creature '
      + 'plus up to 1 pound of additional items. It maintains breathable air, remains impervious '
      + 'to water while allowing air circulation, and spells and weapons can target contained '
      + 'creatures normally. The wearer may designate one creature within 30 feet to freely '
      + 'enter and exit; all other living creatures find it impenetrable.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['air bubble'],
      cost: 1250,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 2,
      breakDC: 12,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'special',
        target: 'special.familiar_force_bubble',
        value: 0,
        source: 'Familiar Bubble',
      },
    ],
  },

  // ---- Fan of Autumn ----------------------------------------------------------
  {
    id: 'wondrous-fan-of-autumn',
    name: 'Fan of Autumn',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ILLUSION }],
    casterLevel: 3,
    slot: 'none',

    price: 6000,
    weight: 1,

    description:
      'This delicate fan is crafted from dried leaves and thin twigs. Three times per day as a '
      + 'standard action, the wielder can wave it to summon a 30-foot cone of swirling red and '
      + 'gold leaves lasting 3 rounds. The effect functions as obscuring mist but is composed of '
      + 'leaves; creatures that can see through mist cannot see through this effect. The wielder '
      + 'retains normal vision while holding the fan.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['gust of wind'],
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
        target: 'special.leaf_cone_concealment',
        value: 0,
        source: 'Fan of Autumn',
      },
    ],

    charges: { maximum: 3, rechargeMethod: 'daily' },
  },

  // ---- Fan, Black Feather -----------------------------------------------------
  {
    id: 'wondrous-fan-black-feather',
    name: 'Fan, Black Feather',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.EVOCATION }],
    casterLevel: 5,
    slot: 'none',

    price: 10000,
    weight: 1,

    description:
      'An elaborate fan crafted with a dozen black feathers set into a metal handle embossed with '
      + 'a stylized crest. The bearer can use it to create wind-based effects — gust of wind, '
      + 'whispering wind, or wind wall — a total of 3 times per day in any combination.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['gust of wind', 'whispering wind', 'wind wall'],
      cost: 5000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'command_word',
    activationAction: 'standard',

    effects: [],

    spellLikeAbilities: [
      {
        usesPerDay: 3,
        spells: [
          {
            spellId: 'gust_of_wind',
            spellName: 'Gust of Wind',
            casterLevel: 5,
            activationAction: 'standard',
          },
          {
            spellId: 'whispering_wind',
            spellName: 'Whispering Wind',
            casterLevel: 5,
            activationAction: 'standard',
          },
          {
            spellId: 'wind_wall',
            spellName: 'Wind Wall',
            casterLevel: 5,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // ---- Fan, Red Feather -------------------------------------------------------
  {
    id: 'wondrous-fan-red-feather',
    name: 'Fan, Red Feather',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION }],
    casterLevel: 6,
    slot: 'none',

    price: 5000,
    weight: 1,

    description:
      'A copper fan with a dozen small feathers mounted on a bone ring handle. Once per day, '
      + 'the bearer can speak a command word to counterspell a darkness effect (as daylight) or '
      + 'counterspell a light effect (as deeper darkness). If overlapping light and darkness effects '
      + 'are present, one is randomly counterspelled.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['daylight', 'deeper darkness'],
      cost: 2500,
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
        target: 'special.counterspell_light_or_darkness',
        value: 0,
        source: 'Fan, Red Feather',
      },
    ],

    charges: { maximum: 1, rechargeMethod: 'daily' },
  },

  // ---- Fan, Wind --------------------------------------------------------------
  {
    id: 'wondrous-fan-wind',
    name: 'Wind Fan',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 3,
    slot: 'none',

    price: 5500,
    weight: 0,

    description:
      'This fan of wood and papyrus or cloth creates a cooling breeze. Upon speaking its command '
      + 'word, the wielder may duplicate the effects of a gust of wind spell. This is safe once per '
      + 'day; each additional use beyond the first in the same day has a cumulative 20% chance that '
      + 'the fan becomes useless, non-magical tatters.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['gust of wind'],
      cost: 2750,
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
        target: 'special.overuse_destruction_risk',
        value: 0,
        source: 'Wind Fan',
      },
    ],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'gust_of_wind',
            spellName: 'Gust of Wind',
            casterLevel: 3,
            usesPerDay: 0,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // ---- Far-Reaching Sight -----------------------------------------------------
  {
    id: 'wondrous-far-reaching-sight',
    name: 'Far-Reaching Sight',
    category: 'wondrous',
    source: 'Ultimate Combat',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 3,
    slot: 'none',

    price: 4000,
    weight: 1,

    description:
      'This sight attaches to a two-handed firearm and becomes part of the weapon. The wielder '
      + 'may spend a full-round action to make a single shot that can be resolved against the '
      + 'touch AC of the target regardless of the range increment. The sight can be removed '
      + 'from the weapon with a full-round action.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['true strike'],
      cost: 2000,
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
        target: 'special.firearm_touch_ac_shot',
        value: 0,
        source: 'Far-Reaching Sight',
      },
    ],
  },

  // ---- Farglass ---------------------------------------------------------------
  {
    id: 'wondrous-farglass',
    name: 'Farglass',
    category: 'wondrous',
    source: 'Pathfinder Adventure Path #56: Raiders of the Fever Sea',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 5,
    slot: 'none',

    price: 6400,
    weight: 1,

    description:
      'A telescoping brass spyglass that functions as a normal viewing instrument, providing clear '
      + 'vision to the horizon. Once per day, the bearer may activate a clairaudience/clairvoyance '
      + 'effect centered on any location visible through the lens. The sensor moves with the observed '
      + 'location and the effect lasts up to 5 minutes.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['clairaudience/clairvoyance'],
      cost: 3200,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 3,
      breakDC: 15,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.spyglass_extended_vision',
        value: 0,
        source: 'Farglass',
      },
    ],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'clairaudience_clairvoyance',
            spellName: 'Clairaudience/Clairvoyance',
            casterLevel: 5,
            usesPerDay: 1,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // ---- Farwatcher -------------------------------------------------------------
  {
    id: 'wondrous-farwatcher',
    name: 'Farwatcher',
    category: 'wondrous',
    source: 'Pathfinder Campaign Setting: Lost Kingdoms',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.DIVINATION }],
    casterLevel: 11,
    slot: 'none',

    price: 120850,
    weight: 260,

    description:
      'This ornate brass and crystal telescope exceeds 10 feet in length and features ivory '
      + 'accents, polished lenses, and silver mirrors. A user with at least 5 ranks in Profession '
      + '(astronomy) gains a +20 circumstance bonus on Perception checks to identify celestial '
      + 'bodies and a +20 circumstance bonus on Profession (astronomer) checks when used at night. '
      + 'Objects within 1 mile appear obscured beyond recognition. The telescope also grants true '
      + 'seeing for up to 1 hour per day, usable in increments of at least 10 minutes.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['true seeing'],
      specialRequirements: ['Profession (astronomy) 11 ranks'],
      cost: 60550,
    },
    physicalStats: {
      hardness: 8,
      hitPoints: 15,
      breakDC: 20,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'bonus',
        bonusType: 'circumstance',
        target: 'skill.perception',
        value: 20,
        source: 'Farwatcher',
        condition: {
          type: 'custom',
          params: { descriptor: 'celestial_body_identification' },
          description: 'when identifying celestial bodies through the telescope',
        },
      },
      {
        type: 'bonus',
        bonusType: 'circumstance',
        target: 'special.profession_astronomer',
        value: 20,
        source: 'Farwatcher',
        condition: {
          type: 'custom',
          params: { descriptor: 'night_use' },
          description: 'when used at night for astronomical observation',
        },
      },
    ],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'true_seeing',
            spellName: 'True Seeing',
            casterLevel: 11,
            usesPerDay: 0,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // ---- Fate-Reader's Lenses ---------------------------------------------------
  {
    id: 'wondrous-fate-readers-lenses',
    name: "Fate-Reader's Lenses",
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.DIVINATION }],
    casterLevel: 5,
    slot: 'none',

    price: 11250,
    weight: 0,

    description:
      'This item consists of two linked harrow decks with stylized eye imagery — one red-eyed deck '
      + 'and one blue-eyed deck. The owner can peer through the eyes of any red card to see whatever '
      + 'is in front of the corresponding blue-eyed card, as if using enter image. Drawing a card '
      + 'randomly requires a standard action; selecting a specific card requires a full-round action. '
      + 'Blue cards can be placed on creatures or affixed to surfaces. Only one card pair can '
      + 'maintain an active visual link at a time.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['enter image'],
      cost: 5625,
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
        target: 'special.harrow_card_remote_viewing',
        value: 0,
        source: "Fate-Reader's Lenses",
      },
    ],
  },

  // ---- Feather Token (Anchor) -------------------------------------------------
  {
    id: 'wondrous-feather-token-anchor',
    name: 'Feather Token (Anchor)',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.CONJURATION }],
    casterLevel: 12,
    slot: 'none',

    price: 50,
    weight: 0,

    description:
      'This small feather token creates a magical anchor when tossed onto the surface of water. '
      + 'It keeps a vessel in place until the anchor is removed. Each token is usable only once.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['major creation'],
      cost: 25,
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
        target: 'special.magical_anchor',
        value: 0,
        source: 'Feather Token (Anchor)',
      },
    ],
  },

  // ---- Feather Token (Bird) ---------------------------------------------------
  {
    id: 'wondrous-feather-token-bird',
    name: 'Feather Token (Bird)',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.CONJURATION }],
    casterLevel: 12,
    slot: 'none',

    price: 300,
    weight: 0,

    description:
      'This small feather token conjures a small bird that can carry a written message weighing '
      + 'up to 0.5 pounds to a designated destination. The bird travels at 30 mph over familiar '
      + 'terrain and up to 10 mph over unfamiliar terrain. Upon delivery, the bird disappears. '
      + 'Each token is usable only once.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['major creation'],
      cost: 150,
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
        target: 'special.messenger_bird',
        value: 0,
        source: 'Feather Token (Bird)',
      },
    ],
  },

  // ---- Feather Token (Fan) ----------------------------------------------------
  {
    id: 'wondrous-feather-token-fan',
    name: 'Feather Token (Fan)',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.CONJURATION }],
    casterLevel: 12,
    slot: 'none',

    price: 200,
    weight: 0,

    description:
      'This small feather token conjures a huge flapping fan that creates a strong wind in a '
      + 'specific direction when activated. The wind is sufficient to propel a large sailboat '
      + '(up to 30 feet long) at full sail. The fan lasts for 8 hours. Each token is usable '
      + 'only once.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['major creation'],
      cost: 100,
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
        target: 'special.ship_propelling_wind',
        value: 0,
        source: 'Feather Token (Fan)',
      },
    ],
  },

  // ---- Feather Token (Swan Boat) ----------------------------------------------
  {
    id: 'wondrous-feather-token-swan-boat',
    name: 'Feather Token (Swan Boat)',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.CONJURATION }],
    casterLevel: 12,
    slot: 'none',

    price: 450,
    weight: 0,

    description:
      'This small feather token creates a large, white swan-shaped boat capable of carrying up '
      + 'to eight people. The boat moves via its own magic on water at a speed of 60 feet per '
      + 'round and lasts for 1 day before disappearing. Each token is usable only once.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['major creation'],
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
        target: 'special.conjured_swan_boat',
        value: 0,
        source: 'Feather Token (Swan Boat)',
      },
    ],
  },

  // ---- Feather Token (Tree) ---------------------------------------------------
  {
    id: 'wondrous-feather-token-tree',
    name: 'Feather Token (Tree)',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.CONJURATION }],
    casterLevel: 12,
    slot: 'none',

    price: 400,
    weight: 0,

    description:
      'This small feather token grows into a great oak tree, 60 feet tall with a 5-foot diameter '
      + 'trunk and 40-foot-wide canopy, when placed on the ground. The tree is permanent. '
      + 'Each token is usable only once.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['major creation'],
      cost: 200,
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
        target: 'special.conjured_permanent_tree',
        value: 0,
        source: 'Feather Token (Tree)',
      },
    ],
  },

  // ---- Feather Token (Whip) ---------------------------------------------------
  {
    id: 'wondrous-feather-token-whip',
    name: 'Feather Token (Whip)',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.CONJURATION }],
    casterLevel: 12,
    slot: 'none',

    price: 500,
    weight: 0,

    description:
      'This small feather token creates a whip-like tentacle of energy that attacks all creatures '
      + 'within 10 feet as directed by the activator. The whip makes one attack per round against '
      + 'the nearest creature, dealing 1d6+1 points of damage, and lasts for 1 hour. '
      + 'Each token is usable only once.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['major creation'],
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
        target: 'special.animated_whip_attack',
        value: 0,
        source: 'Feather Token (Whip)',
      },
    ],
  },

  // ---- Feathered Headdress ----------------------------------------------------
  {
    id: 'wondrous-feathered-headdress',
    name: 'Feathered Headdress',
    category: 'wondrous',
    source: 'Inner Sea World Guide',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 10,
    slot: 'none',

    price: 52000,
    weight: 0,

    description:
      'These enchanted feathers rest in the wearer\'s hair and always lightly blow in the direction '
      + 'of north. The feathers grant a +2 competence bonus on Stealth checks and the Quick Draw '
      + 'and Run feats as bonus feats. Once per day as a swift action, the wearer can pluck one '
      + 'of the feathers and toss it to a location within 60 feet, instantly transporting there '
      + 'as dimension door, except the wearer can continue acting normally afterward.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['dimension door', 'expeditious retreat', 'know direction'],
      cost: 26000,
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
        target: 'skill.stealth',
        value: 2,
        source: 'Feathered Headdress',
      },
      {
        type: 'special',
        target: 'special.bonus_feat_quick_draw',
        value: 0,
        source: 'Feathered Headdress',
      },
      {
        type: 'special',
        target: 'special.bonus_feat_run',
        value: 0,
        source: 'Feathered Headdress',
      },
    ],

    grantedFeats: ['quick-draw', 'run'],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'dimension_door',
            spellName: 'Dimension Door',
            casterLevel: 10,
            usesPerDay: 1,
            activationAction: 'swift',
          },
        ],
      },
    ],
  },

  // ---- Festival Garment -------------------------------------------------------
  {
    id: 'wondrous-festival-garment',
    name: 'Festival Garment',
    category: 'wondrous',
    source: 'Heroes from the Fringe',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 1,
    slot: 'body',

    price: 2000,
    weight: 1,

    description:
      'This bright, finely made outfit allows the wearer to attempt a Perform (dance) check '
      + 'instead of a Diplomacy check to influence the attitude of a humanoid creature, provided '
      + 'its starting attitude is unfriendly or better. The wearer also gains a +5 competence '
      + 'bonus on Perform (dance) checks when at a festival or celebration.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['charm person'],
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
        target: 'special.perform_dance_as_diplomacy',
        value: 0,
        source: 'Festival Garment',
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.perform',
        value: 5,
        source: 'Festival Garment',
        condition: {
          type: 'custom',
          params: { descriptor: 'festival_or_celebration' },
          description: 'on Perform (dance) checks when at a festival or celebration',
        },
      },
    ],
  },

  // ---- Fey Map ----------------------------------------------------------------
  {
    id: 'wondrous-fey-map',
    name: 'Fey Map',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 9,
    slot: 'none',

    price: 16200,
    weight: 0,

    description:
      'A stylized map of the Plane of Faerie that constantly shifts to reflect the relative '
      + 'locations of dozens of major geographical features, settlements, and key locations. '
      + 'A tiny icon shows the holder\'s current position, moving to track his progress as '
      + 'he travels. Once per day, the user can fold the map so that his icon touches the icon '
      + 'of a named location and rub them together to instantly transport himself and up to '
      + 'three other touched creatures to a point just outside that location, functioning '
      + 'as the teleport spell.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['planar orientation', 'teleport'],
      cost: 8100,
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
        target: 'special.fey_plane_location_tracking',
        value: 0,
        source: 'Fey Map',
      },
    ],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'teleport',
            spellName: 'Teleport',
            casterLevel: 9,
            usesPerDay: 1,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // ---- Field Scrivener's Desk -------------------------------------------------
  {
    id: 'wondrous-field-scriveners-desk',
    name: "Field Scrivener's Desk",
    category: 'wondrous',
    source: 'Pathfinder Society Field Guide',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.EVOCATION }],
    casterLevel: 5,
    slot: 'none',

    price: 5400,
    weight: 2,

    description:
      'This magical desk transforms from a compact 3-inch cube into a full writing station over '
      + 'one round upon activation. It unfolds into an exquisite writing desk sized for a Small '
      + 'or Medium author, complete with four vials of ink, two writing quills, and 50 blank '
      + 'sheets of paper that replenish with each unfolding. The desk also creates a 20-foot-radius '
      + 'hemisphere identical to a tiny hut spell effect that lasts up to 10 hours or until the '
      + 'desk is folded or moved. The desk may be activated once per day.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['shrink item', 'tiny hut'],
      cost: 2700,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 3,
      breakDC: 15,
    },

    activationCategory: 'command_word',
    activationAction: 'free',

    effects: [
      {
        type: 'special',
        target: 'special.writing_supplies_replenishing',
        value: 0,
        source: "Field Scrivener's Desk",
      },
      {
        type: 'special',
        target: 'special.tiny_hut_hemisphere',
        value: 0,
        source: "Field Scrivener's Desk",
      },
    ],

    charges: { maximum: 1, rechargeMethod: 'daily' },
  },
];
