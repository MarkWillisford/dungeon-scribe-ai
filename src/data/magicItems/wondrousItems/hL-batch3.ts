import type { WondrousItemDefinition } from '@/types/magicItems';
import { AuraStrength, MagicSchool } from '@/types/equipment';

export const wondrousItemsHL3: WondrousItemDefinition[] = [
  // ---- 1. Headband, Shifter's (+2) ----------------------------------------
  {
    id: 'wondrous-headband-shifters-2',
    name: "Headband, Shifter's +2",
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 8,
    slot: 'headband',

    price: 4500,
    weight: 0,

    description:
      "A band of reddish fox fur bearing a symbol that constantly shifts into a different character. " +
      "The headband grants a +2 enhancement bonus to Intelligence, Wisdom, or Charisma. For the first 24 hours " +
      "this acts as a temporary ability bonus. When boosting Intelligence it also grants additional skill ranks. " +
      "Shapeshifters treat their caster level as 1 higher for polymorph spells and extracts.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['polymorph'],
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
        bonusType: 'enhancement',
        target: 'ability.int',
        value: 2,
        source: "Headband, Shifter's +2",
      },
      {
        type: 'special',
        target: 'special.shifters_headband_polymorph_cl',
        value: 0,
        source: "Headband, Shifter's +2",
      },
    ],
  },

  // ---- 1b. Headband, Shifter's (+4) ---------------------------------------
  {
    id: 'wondrous-headband-shifters-4',
    name: "Headband, Shifter's +4",
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 8,
    slot: 'headband',

    price: 17500,
    weight: 0,

    description:
      "A band of reddish fox fur bearing a shifting symbol. Grants a +4 enhancement bonus to Intelligence, " +
      "Wisdom, or Charisma. For shapeshifters: treat caster level as 1 higher for polymorph effects, and once " +
      "per day while under a polymorph effect assume another allowed form as a standard action.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['polymorph'],
      cost: 8750,
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
        bonusType: 'enhancement',
        target: 'ability.int',
        value: 4,
        source: "Headband, Shifter's +4",
      },
      {
        type: 'special',
        target: 'special.shifters_headband_polymorph_cl',
        value: 0,
        source: "Headband, Shifter's +4",
      },
      {
        type: 'special',
        target: 'special.shifters_headband_extra_form',
        value: 0,
        source: "Headband, Shifter's +4",
      },
    ],
  },

  // ---- 1c. Headband, Shifter's (+6) ---------------------------------------
  {
    id: 'wondrous-headband-shifters-6',
    name: "Headband, Shifter's +6",
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 8,
    slot: 'headband',

    price: 39000,
    weight: 0,

    description:
      "A band of reddish fox fur bearing a shifting symbol. Grants a +6 enhancement bonus to Intelligence, " +
      "Wisdom, or Charisma. For shapeshifters: treat caster level as 1 higher for polymorph effects; once per " +
      "day while under a polymorph effect assume another allowed form as a standard action; and upon shapeshifting " +
      "gain DR 5/silver for 1 minute (ends when returning to natural form).",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['polymorph'],
      cost: 19500,
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
        bonusType: 'enhancement',
        target: 'ability.int',
        value: 6,
        source: "Headband, Shifter's +6",
      },
      {
        type: 'special',
        target: 'special.shifters_headband_polymorph_cl',
        value: 0,
        source: "Headband, Shifter's +6",
      },
      {
        type: 'special',
        target: 'special.shifters_headband_extra_form',
        value: 0,
        source: "Headband, Shifter's +6",
      },
      {
        type: 'special',
        target: 'special.shifters_headband_dr_silver',
        value: 0,
        source: "Headband, Shifter's +6",
      },
    ],
  },

  // ---- 2. Headband, Winter Wolf -------------------------------------------
  {
    id: 'wondrous-headband-winter-wolf',
    name: 'Headband, Winter Wolf',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 7,
    slot: 'headband',

    price: 32000,
    weight: 1,

    description:
      "This pale bone or silver headband displays a snarling wolf's head centered on the wearer's forehead. " +
      "It grants cold resistance 10. Once per day the wearer may transform into a Large white-furred wolf for " +
      "11 minutes. Once per day the wearer may breathe a 30-foot cone of cold (7d6 cold damage, Reflex DC 16 " +
      "half); this breath weapon may be used even while in wolf form.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['beast shape II', "dragon's breath", 'resist energy'],
      cost: 16000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'resistance',
        target: 'energy_resistance.cold',
        value: 10,
        source: 'Headband, Winter Wolf',
      },
      {
        type: 'special',
        target: 'special.winter_wolf_transformation',
        value: 0,
        source: 'Headband, Winter Wolf',
      },
      {
        type: 'special',
        target: 'special.winter_wolf_breath_weapon',
        value: 0,
        source: 'Headband, Winter Wolf',
      },
    ],
  },

  // ---- 3. Healer's Burning Glass ------------------------------------------
  {
    id: 'wondrous-healers-burning-glass',
    name: "Healer's Burning Glass",
    category: 'wondrous',
    source: 'Magical Marketplace',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.CONJURATION }],
    casterLevel: 13,
    slot: 'none',

    price: 32400,
    weight: 0,

    description:
      "This magnifying glass features a handle designed as a holy symbol of Sarenrae. When used in an area " +
      "of bright light, it provides a +4 circumstance bonus on Heal checks when treating deadly wounds. Also " +
      "in bright light, the user may cast regenerate on a touched creature once per day.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['regenerate'],
      cost: 15000,
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
        bonusType: 'circumstance',
        target: 'skill.heal',
        value: 4,
        source: "Healer's Burning Glass",
        condition: {
          type: 'custom',
          params: { descriptor: 'treat_deadly_wounds_bright_light' },
          description: 'when treating deadly wounds in bright light',
        },
      },
    ],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'regenerate',
            spellName: 'Regenerate',
            casterLevel: 13,
            usesPerDay: 1,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // ---- 4. Healer's Aid ----------------------------------------------------
  {
    id: 'wondrous-healers-aid',
    name: "Healer's Aid",
    category: 'wondrous',
    source: 'Potions and Poisons',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.EVOCATION }],
    casterLevel: 7,
    slot: 'none',

    price: 900,
    weight: 0,

    description:
      "A squat glass jar containing golden liquid that swirls constantly. When consumed, this elixir empowers " +
      "the next potion or elixir that restores hit points, increasing all variable numeric effects by 50%. " +
      "The effect lasts 5 minutes or until the imbiber's hit points are fully restored through an affected " +
      "potion, whichever occurs first.",

    construction: {
      feats: ['Craft Wondrous Item', 'Empower Spell'],
      spells: ['amplify elixir'],
      cost: 450,
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
        target: 'special.healers_aid_empower_potion',
        value: 0,
        source: "Healer's Aid",
      },
    ],
  },

  // ---- 5. Heirloom Seal ---------------------------------------------------
  {
    id: 'wondrous-heirloom-seal',
    name: 'Heirloom Seal',
    category: 'wondrous',
    source: 'Blood of the Ancients',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.UNIVERSAL }],
    casterLevel: 1,
    slot: 'none',

    price: 5000,
    weight: 0,

    description:
      "A carved stone seal used with red ink to stamp documents. Once sealed, writing becomes protected " +
      "against alteration. Spells that ruin, change, or render text unreadable cannot affect sealed writing " +
      "unless the caster succeeds at a caster level check (DC 15 + owner's Hit Dice). Mundane forgery " +
      "attempts vanish within 2d4 rounds. The seal cannot protect magical writing or runes. Its unique mark " +
      "can be verified with detect magic or read magic.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['arcane mark'],
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
        target: 'special.heirloom_seal_text_protection',
        value: 0,
        source: 'Heirloom Seal',
      },
    ],
  },

  // ---- 6. Helm of Brilliance ----------------------------------------------
  {
    id: 'wondrous-helm-brilliance',
    name: 'Helm of Brilliance',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [
      { strength: AuraStrength.STRONG, school: MagicSchool.EVOCATION },
      { strength: AuraStrength.MODERATE, school: MagicSchool.ABJURATION },
    ],
    casterLevel: 13,
    slot: 'head',

    price: 125000,
    weight: 3,

    description:
      "A silvered steel helm set with 10 diamonds, 20 rubies, 30 fire opals, and 40 opals. When activated " +
      "by command word it scintillates in bright light. Each gem may be used once: diamonds cast prismatic " +
      "spray (DC 20), rubies cast wall of fire, fire opals cast fireball (10d6, DC 20 Reflex half), and " +
      "opals cast daylight. Only one gem may be used per round. The helm also emanates bluish light within " +
      "30 feet dealing 1d6 per round to undead, allows the wearer to command weapons to gain the flaming " +
      "property, and grants fire resistance 30. If the wearer takes magical fire damage after resistance and " +
      "fails a DC 15 Will save, remaining gems detonate and the helm is destroyed.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: [
        'detect undead',
        'fireball',
        'flame blade',
        'daylight',
        'prismatic spray',
        'protection from energy',
        'wall of fire',
      ],
      cost: 62500,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 10,
      breakDC: 24,
    },

    activationCategory: 'command_word',
    activationAction: 'free',

    effects: [
      {
        type: 'bonus',
        target: 'spell.caster_level',
        value: 1,
        source: 'Helm of Brilliance',
        condition: {
          type: 'custom',
          params: { descriptor: 'fire' },
          description: 'fire spells only',
        },
      },
      {
        type: 'resistance',
        target: 'energy_resistance.fire',
        value: 30,
        source: 'Helm of Brilliance',
      },
      {
        type: 'special',
        target: 'special.helm_brilliance_undead_aura',
        value: 0,
        source: 'Helm of Brilliance',
      },
      {
        type: 'special',
        target: 'special.helm_brilliance_flaming_weapons',
        value: 0,
        source: 'Helm of Brilliance',
      },
      {
        type: 'special',
        target: 'special.helm_brilliance_gem_charges',
        value: 0,
        source: 'Helm of Brilliance',
      },
    ],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'prismatic_spray',
            spellName: 'Prismatic Spray',
            casterLevel: 13,
            usesPerDay: 10,
            saveDC: 20,
            activationAction: 'standard',
          },
          {
            spellId: 'wall_of_fire',
            spellName: 'Wall of Fire',
            casterLevel: 13,
            usesPerDay: 20,
            activationAction: 'standard',
          },
          {
            spellId: 'fireball',
            spellName: 'Fireball',
            casterLevel: 13,
            usesPerDay: 30,
            saveDC: 20,
            activationAction: 'standard',
          },
          {
            spellId: 'daylight',
            spellName: 'Daylight',
            casterLevel: 13,
            usesPerDay: 40,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // ---- 7. Helm of Brilliance, Lesser --------------------------------------
  {
    id: 'wondrous-helm-brilliance-lesser',
    name: 'Helm of Brilliance, Lesser',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [
      { strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION },
      { strength: AuraStrength.MODERATE, school: MagicSchool.ABJURATION },
    ],
    casterLevel: 5,
    slot: 'head',

    price: 36000,
    weight: 3,

    description:
      "A lesser version of the helm of brilliance, set with 10 diamonds, 20 corals, 30 garnets, and 40 agates. " +
      "Each gem may be used once: diamonds cast fireball (10d6, DC 20 Reflex half), corals cast flaming sphere, " +
      "garnets cast scorching ray, and agates cast light. The helm grants fire resistance 20, causes the wearer " +
      "to glow to harm undead, and allows commanding weapons to gain the flaming property. If gems are depleted, " +
      "a detonation risk exists as with the standard version.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: [
        'detect undead',
        'fireball',
        'flame blade',
        'flaming sphere',
        'light',
        'protection from energy',
        'scorching ray',
      ],
      cost: 18000,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 10,
      breakDC: 24,
    },

    activationCategory: 'command_word',
    activationAction: 'free',

    effects: [
      {
        type: 'resistance',
        target: 'energy_resistance.fire',
        value: 20,
        source: 'Helm of Brilliance, Lesser',
      },
      {
        type: 'special',
        target: 'special.helm_brilliance_undead_aura',
        value: 0,
        source: 'Helm of Brilliance, Lesser',
      },
      {
        type: 'special',
        target: 'special.helm_brilliance_flaming_weapons',
        value: 0,
        source: 'Helm of Brilliance, Lesser',
      },
      {
        type: 'special',
        target: 'special.helm_brilliance_gem_charges',
        value: 0,
        source: 'Helm of Brilliance, Lesser',
      },
    ],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'fireball',
            spellName: 'Fireball',
            casterLevel: 5,
            usesPerDay: 10,
            saveDC: 20,
            activationAction: 'standard',
          },
          {
            spellId: 'flaming_sphere',
            spellName: 'Flaming Sphere',
            casterLevel: 5,
            usesPerDay: 20,
            activationAction: 'standard',
          },
          {
            spellId: 'scorching_ray',
            spellName: 'Scorching Ray',
            casterLevel: 5,
            usesPerDay: 30,
            activationAction: 'standard',
          },
          {
            spellId: 'light',
            spellName: 'Light',
            casterLevel: 5,
            usesPerDay: 40,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // ---- 8. Helm of Comprehend Languages and Read Magic ---------------------
  {
    id: 'wondrous-helm-comprehend-languages-read-magic',
    name: 'Helm of Comprehend Languages and Read Magic',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 4,
    slot: 'head',

    price: 5200,
    weight: 3,

    description:
      "This magical helmet enables the wearer to understand the spoken words of any creature and to read " +
      "text in any language and any magical writing. The wearer also receives a +5 competence bonus on " +
      "Linguistics checks when deciphering incomplete, archaic, or exotic written forms. Comprehending " +
      "magical text does not grant the ability to cast spells from such texts.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['comprehend languages', 'read magic'],
      cost: 2600,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 10,
      breakDC: 24,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'special',
        target: 'special.comprehend_languages_continuous',
        value: 0,
        source: 'Helm of Comprehend Languages and Read Magic',
      },
      {
        type: 'special',
        target: 'special.read_magic_continuous',
        value: 0,
        source: 'Helm of Comprehend Languages and Read Magic',
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.linguistics',
        value: 5,
        source: 'Helm of Comprehend Languages and Read Magic',
        condition: {
          type: 'custom',
          params: { descriptor: 'decipher_incomplete_archaic_exotic' },
          description: 'when deciphering incomplete, archaic, or exotic written forms',
        },
      },
    ],
  },

  // ---- 9. Helm of Electric Radiance ---------------------------------------
  {
    id: 'wondrous-helm-electric-radiance',
    name: 'Helm of Electric Radiance',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [
      { strength: AuraStrength.STRONG, school: MagicSchool.EVOCATION },
      { strength: AuraStrength.MODERATE, school: MagicSchool.ABJURATION },
    ],
    casterLevel: 13,
    slot: 'head',

    price: 125000,
    weight: 3,

    description:
      "An electrical counterpart to the helm of brilliance, set with 10 sapphires, 20 amber pieces, " +
      "30 petrified wood pieces, and 40 opals. Each gem may be used once: sapphires cast chain lightning, " +
      "amber casts lightning bolt, petrified wood casts shocking sphere (electricity version of flaming sphere), " +
      "and opals cast daylight. The helm grants electricity resistance 30, allows the wearer to command " +
      "weapons to gain the shocking property, and emanates a glow that harms undead within 30 feet.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: [
        'chain lightning',
        'daylight',
        'detect undead',
        'flaming sphere',
        'lightning bolt',
        'protection from energy',
        'shocking grasp',
      ],
      cost: 62500,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 10,
      breakDC: 24,
    },

    activationCategory: 'command_word',
    activationAction: 'free',

    effects: [
      {
        type: 'resistance',
        target: 'energy_resistance.electricity',
        value: 30,
        source: 'Helm of Electric Radiance',
      },
      {
        type: 'special',
        target: 'special.helm_brilliance_undead_aura',
        value: 0,
        source: 'Helm of Electric Radiance',
      },
      {
        type: 'special',
        target: 'special.helm_electric_radiance_shocking_weapons',
        value: 0,
        source: 'Helm of Electric Radiance',
      },
      {
        type: 'special',
        target: 'special.helm_electric_radiance_gem_charges',
        value: 0,
        source: 'Helm of Electric Radiance',
      },
    ],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'chain_lightning',
            spellName: 'Chain Lightning',
            casterLevel: 13,
            usesPerDay: 10,
            activationAction: 'standard',
          },
          {
            spellId: 'lightning_bolt',
            spellName: 'Lightning Bolt',
            casterLevel: 13,
            usesPerDay: 20,
            activationAction: 'standard',
          },
          {
            spellId: 'flaming_sphere',
            spellName: 'Shocking Sphere',
            casterLevel: 13,
            usesPerDay: 30,
            activationAction: 'standard',
          },
          {
            spellId: 'daylight',
            spellName: 'Daylight',
            casterLevel: 13,
            usesPerDay: 40,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // ---- 10. Helm of Fearsome Mien ------------------------------------------
  {
    id: 'wondrous-helm-fearsome-mien',
    name: 'Helm of Fearsome Mien',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.NECROMANCY }],
    casterLevel: 1,
    slot: 'head',

    price: 5000,
    weight: 4,

    description:
      "This helm is fashioned to resemble a fearsome predator, featuring prominent fangs and intimidating " +
      "features. If the wearer is a barbarian, she can use the intimidating glare rage power whenever she " +
      "rages, even if she does not have that rage power. The helm has no mechanical benefit for " +
      "non-barbarians or characters lacking the rage class feature.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['cause fear'],
      cost: 2500,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 10,
      breakDC: 24,
    },

    activationCategory: 'continuous',

    effects: [],

    conditionalEffects: [
      {
        condition: 'wielder_class',
        classId: 'barbarian',
        effects: [
          {
            type: 'special',
            target: 'special.intimidating_glare_rage_power',
            value: 0,
            source: 'Helm of Fearsome Mien',
          },
        ],
      },
    ],
  },

  // ---- 11. Helm of Reclamation --------------------------------------------
  {
    id: 'wondrous-helm-reclamation',
    name: 'Helm of Reclamation',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [
      { strength: AuraStrength.STRONG, school: MagicSchool.EVOCATION },
      { strength: AuraStrength.MODERATE, school: MagicSchool.NECROMANCY },
    ],
    casterLevel: 15,
    slot: 'head',

    price: 80000,
    weight: 3,

    description:
      "A helm designed to destroy undead, set with 10 yellow diamonds, 30 bloodstones, and 40 opals. " +
      "Each gem may be used once: yellow diamonds cast sunburst, bloodstones cast searing light, and " +
      "opals cast daylight. The helm glows near undead and harms them, and allows commanding weapons to " +
      "gain the flaming property. Unlike the standard helm of brilliance, it does not grant fire " +
      "resistance and does not risk detonation.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['daylight', 'detect undead', 'flame blade', 'searing light', 'sunburst'],
      cost: 40000,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 10,
      breakDC: 24,
    },

    activationCategory: 'command_word',
    activationAction: 'free',

    effects: [
      {
        type: 'special',
        target: 'special.helm_brilliance_undead_aura',
        value: 0,
        source: 'Helm of Reclamation',
      },
      {
        type: 'special',
        target: 'special.helm_brilliance_flaming_weapons',
        value: 0,
        source: 'Helm of Reclamation',
      },
    ],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'sunburst',
            spellName: 'Sunburst',
            casterLevel: 15,
            usesPerDay: 10,
            activationAction: 'standard',
          },
          {
            spellId: 'searing_light',
            spellName: 'Searing Light',
            casterLevel: 15,
            usesPerDay: 30,
            activationAction: 'standard',
          },
          {
            spellId: 'daylight',
            spellName: 'Daylight',
            casterLevel: 15,
            usesPerDay: 40,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // ---- 12. Helm of Telepathy ----------------------------------------------
  {
    id: 'wondrous-helm-telepathy',
    name: 'Helm of Telepathy',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [
      { strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION },
      { strength: AuraStrength.FAINT, school: MagicSchool.ENCHANTMENT },
    ],
    casterLevel: 5,
    slot: 'head',

    price: 27000,
    weight: 3,

    description:
      "A pale metal or ivory headpiece that grants the wearer telepathic abilities. The wearer can use " +
      "detect thoughts at will, and may communicate telepathically with anyone whose surface thoughts are " +
      "being read. Once per day, the wearer can implant a suggestion along with telepathic communication; " +
      "the target receives a Will save (DC 14) to negate.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['detect thoughts', 'suggestion'],
      cost: 13500,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 10,
      breakDC: 24,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'special',
        target: 'special.helm_telepathy_communication',
        value: 0,
        source: 'Helm of Telepathy',
      },
    ],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'detect_thoughts',
            spellName: 'Detect Thoughts',
            casterLevel: 5,
            usesPerDay: 0,
            activationAction: 'standard',
          },
        ],
      },
      {
        spells: [
          {
            spellId: 'suggestion',
            spellName: 'Suggestion',
            casterLevel: 5,
            usesPerDay: 1,
            saveDC: 14,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // ---- 13. Helm of Teleportation ------------------------------------------
  {
    id: 'wondrous-helm-teleportation',
    name: 'Helm of Teleportation',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 9,
    slot: 'head',

    price: 73500,
    weight: 3,

    description:
      "The wearer can activate this helm to teleport three times daily. Each use allows instantaneous " +
      "transport of the wearer and carried personal items to a chosen destination, functioning identically " +
      "to the teleport spell.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['teleport'],
      cost: 36750,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 10,
      breakDC: 24,
    },

    activationCategory: 'command_word',
    activationAction: 'standard',

    effects: [],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'teleport',
            spellName: 'Teleport',
            casterLevel: 9,
            usesPerDay: 3,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // ---- 14. Helm of the Fanged Crown ----------------------------------------
  {
    id: 'wondrous-helm-fanged-crown',
    name: 'Helm of the Fanged Crown',
    category: 'wondrous',
    source: 'Curse of the Crimson Throne',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 9,
    slot: 'head',

    price: 12000,
    weight: 3,

    description:
      "An ornate Gray Maiden-style helm with a crown pattern, originally created for commanders during " +
      "Queen Ileosa's reign. Once per day as a standard action the wearer may cast heroism on herself, " +
      "lasting 3 hours or until the helm is removed. Against devils, devil-bound creatures, and creatures " +
      "with the infernal sorcerer bloodline, the spell's bonuses become penalties on attack rolls, skill " +
      "checks, and saving throws instead.",

    construction: {
      feats: ['Craft Wondrous Item', 'Extend Spell'],
      spells: ['heroism'],
      cost: 6000,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 10,
      breakDC: 24,
    },

    activationCategory: 'command_word',
    activationAction: 'standard',

    effects: [],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'heroism',
            spellName: 'Heroism',
            casterLevel: 9,
            usesPerDay: 1,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // ---- 15. Helm of the Mammoth Lord ----------------------------------------
  {
    id: 'wondrous-helm-mammoth-lord',
    name: 'Helm of the Mammoth Lord',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'head',

    price: 8500,
    weight: 3,

    description:
      "A hide helmet adorned with carved ivory plates featuring primitive runes and curved tusks serving " +
      "as cheek guards. The tusks deal 1d6 gore damage for Medium wearers (1d4 for Small) and function as " +
      "magical weapons for overcoming damage reduction. The helm functions as endure elements against cold " +
      "and grants a +5 competence bonus on Handle Animal, Ride, and wild empathy checks with elephants, " +
      "mammoths, mastodons, and similar creatures. On command, the wearer may use detect animals or plants " +
      "or speak with animals, both limited to elephant-like creatures.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: [
        'beast shape I',
        'charm animal',
        'detect animals or plants',
        'endure elements',
        'speak with animals',
      ],
      specialRequirements: ['5 ranks in Handle Animal', '5 ranks in Ride'],
      cost: 4250,
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
        target: 'special.gore_attack_1d6',
        value: 0,
        source: 'Helm of the Mammoth Lord',
      },
      {
        type: 'special',
        target: 'special.endure_elements_cold',
        value: 0,
        source: 'Helm of the Mammoth Lord',
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.handle_animal',
        value: 5,
        source: 'Helm of the Mammoth Lord',
        condition: {
          type: 'target_type',
          params: { creatureType: 'elephant-like' },
          description: 'with elephants, mammoths, mastodons, and similar creatures',
        },
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.ride',
        value: 5,
        source: 'Helm of the Mammoth Lord',
        condition: {
          type: 'target_type',
          params: { creatureType: 'elephant-like' },
          description: 'with elephants, mammoths, mastodons, and similar creatures',
        },
      },
    ],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'detect_animals_or_plants',
            spellName: 'Detect Animals or Plants',
            casterLevel: 5,
            usesPerDay: 0,
            activationAction: 'standard',
          },
          {
            spellId: 'speak_with_animals',
            spellName: 'Speak with Animals',
            casterLevel: 5,
            usesPerDay: 0,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // ---- 16. Helm of the Valkyrie -------------------------------------------
  {
    id: 'wondrous-helm-valkyrie',
    name: 'Helm of the Valkyrie',
    category: 'wondrous',
    source: 'Pathfinder #84: Pyramid of the Sky Pharaoh',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.CONJURATION }],
    casterLevel: 14,
    slot: 'head',

    price: 16000,
    weight: 3,

    description:
      "A luminous helm adorned with aurora-colored iridescence and whalebone wings extending from the " +
      "temples, bearing visible battle damage despite its otherwise excellent condition. Once per day the " +
      "wearer may summon a giant spectral wolf functioning as a phantom steed cast by a 14th-level caster " +
      "(AC 24, 100 hit points). The wolf remains for up to 24 hours as long as the wearer continues " +
      "wearing the helm. Despite its fearsome appearance, the creature is ethereal and cannot engage " +
      "in combat.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['phantom steed'],
      cost: 8000,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 10,
      breakDC: 24,
    },

    activationCategory: 'command_word',
    activationAction: 'standard',

    effects: [],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'phantom_steed',
            spellName: 'Phantom Steed',
            casterLevel: 14,
            usesPerDay: 1,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // ---- 17. Helm of Underwater Action --------------------------------------
  {
    id: 'wondrous-helm-underwater-action',
    name: 'Helm of Underwater Action',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'head',

    price: 24000,
    weight: 3,

    description:
      "This magical headpiece grants enhanced underwater vision by drawing small lenses into position, " +
      "allowing the wearer to see five times farther than water and light conditions would normally allow. " +
      "Speaking the command word bestows a 30-foot swim speed and creates a protective air globe around " +
      "the wearer's head enabling normal respiration underwater until the command word is spoken again.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['water breathing'],
      cost: 12000,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 10,
      breakDC: 24,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'special',
        target: 'special.underwater_vision_5x',
        value: 0,
        source: 'Helm of Underwater Action',
      },
      {
        type: 'special',
        target: 'special.underwater_action_swim_air',
        value: 0,
        source: 'Helm of Underwater Action',
      },
    ],
  },

  // ---- 18. Helm, Batrachian -----------------------------------------------
  {
    id: 'wondrous-helm-batrachian',
    name: 'Helm, Batrachian',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 10,
    slot: 'head',

    price: 26000,
    weight: 3,

    description:
      "An oily bronze helmet shaped like a frog's head. Three times per day as a swift action, the helm " +
      "projects a forceful tongue attack at a visible target within 20 feet. Unattended objects weighing " +
      "250 lbs or less are pulled 20 feet toward the wearer. Creatures of the wearer's size or smaller " +
      "may be pulled 20 feet on a successful combat maneuver check. Against larger creatures, heavy objects " +
      "over 250 lbs, or immobile structures, the wearer is instead pulled 20 feet toward the target. " +
      "All movement avoids provoking attacks of opportunity and stops at solid obstacles.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['telekinesis'],
      cost: 13000,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 10,
      breakDC: 24,
    },

    activationCategory: 'command_word',
    activationAction: 'swift',

    effects: [
      {
        type: 'special',
        target: 'special.batrachian_helm_tongue_attack',
        value: 3,
        source: 'Helm, Batrachian',
      },
    ],
  },

  // ---- 19. Helm, Grim -----------------------------------------------------
  {
    id: 'wondrous-helm-grim',
    name: 'Helm, Grim',
    category: 'wondrous',
    source: 'Pathfinder #139: The Dead Road',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 3,
    slot: 'head',

    price: 48000,
    weight: 4,

    description:
      "A pitted gray helm with a skull mask visor that absorbs rather than reflects light. The wearer " +
      "gains immunity to fear effects but cannot receive morale bonuses. Creatures within 20 feet must " +
      "succeed at a Will save (DC 14) or lose the benefits of morale bonuses while in the area. " +
      "Creatures that succeed at the save become immune to this aura for 24 hours.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['calm emotions'],
      cost: 24000,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 10,
      breakDC: 24,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'special',
        target: 'special.immunity_fear',
        value: 0,
        source: 'Helm, Grim',
      },
      {
        type: 'penalty',
        target: 'special.morale_bonuses_suppressed',
        value: 0,
        source: 'Helm, Grim',
      },
      {
        type: 'special',
        target: 'special.grim_helm_aura_morale',
        value: 0,
        source: 'Helm, Grim',
      },
    ],
  },

  // ---- 20. Helm, Howling --------------------------------------------------
  {
    id: 'wondrous-helm-howling',
    name: 'Helm, Howling',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.CONJURATION }],
    casterLevel: 5,
    slot: 'head',

    price: 22600,
    weight: 2,

    description:
      "A helm fashioned from a beast skull. The wearer can communicate with dogs, wolves, dire wolves, " +
      "foxes, jackals, coyotes, and similar canine animals as the speak with animals spell. It grants a " +
      "+2 competence bonus on Diplomacy checks and Charisma checks to influence wolf-like magical beasts " +
      "including blink dogs, winter wolves, and worgs. Three times per day, the wearer can unleash a " +
      "howl allowing an Intimidate check to demoralize all opponents within 30 feet; at the start of the " +
      "wearer's next turn 1d3 wolves appear as if summoned by summon nature's ally III, acting on the " +
      "wearer's initiative and obeying instructions for 5 rounds.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["speak with animals", "summon nature's ally III"],
      cost: 11300,
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
        target: 'special.speak_with_animals_canines',
        value: 0,
        source: 'Helm, Howling',
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.diplomacy',
        value: 2,
        source: 'Helm, Howling',
        condition: {
          type: 'target_type',
          params: { creatureType: 'wolf-like magical beast' },
          description: 'when influencing wolf-like magical beasts',
        },
      },
      {
        type: 'special',
        target: 'special.howling_helm_terrifying_howl',
        value: 3,
        source: 'Helm, Howling',
      },
    ],
  },

  // ---- 21. Helm, Maiden's -------------------------------------------------
  {
    id: 'wondrous-helm-maidens',
    name: "Helm, Maiden's",
    category: 'wondrous',
    source: "Adventurer's Guide",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 6,
    slot: 'head',

    price: 3500,
    weight: 3,

    description:
      "This helm resembles the distinctive plate and plumed headgear worn by the Gray Maidens. It " +
      "enhances the wearer's vocal presence and commanding authority, granting a +5 competence bonus on " +
      "Intimidate checks and allowing the wearer to cast command three times per day.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['cause fear', 'command'],
      cost: 1750,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 10,
      breakDC: 24,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.intimidate',
        value: 5,
        source: "Helm, Maiden's",
      },
    ],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'command',
            spellName: 'Command',
            casterLevel: 6,
            usesPerDay: 3,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // ---- 22. Helm, Stag's Helm ----------------------------------------------
  {
    id: 'wondrous-helm-stags',
    name: "Helm, Stag's",
    category: 'wondrous',
    source: 'Pathfinder #31: Stolen Land',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 5,
    slot: 'head',

    price: 3500,
    weight: 3,

    description:
      "A bone helmet fashioned to resemble a stag's skull with antlers as durable as metal. Grants a " +
      "+2 competence bonus on Perception checks. Once per day as a free action the wearer may enhance a " +
      "ranged attack within 30 feet, treating the target as flat-footed for that attack (enabling sneak " +
      "attack); the attack must be made within 1 round or the benefit is lost. Worshippers of Erastil " +
      "may use this ability up to 3 times per day instead.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['true strike'],
      specialRequirements: ['5 ranks in Perception'],
      cost: 1750,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 10,
      breakDC: 20,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.perception',
        value: 2,
        source: "Helm, Stag's",
      },
      {
        type: 'special',
        target: 'special.stags_helm_insightful_shot',
        value: 1,
        source: "Helm, Stag's",
      },
    ],
  },

  // ---- 23. Helm, Stormlord's ----------------------------------------------
  {
    id: 'wondrous-helm-stormlords',
    name: "Helm, Stormlord's",
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 10,
    slot: 'head',

    price: 35000,
    weight: 3,

    description:
      "An iron helm featuring two large horns carved with runes of storms, thunder, and lightning. " +
      "Once per day the wearer can call a thunderstorm, functioning as the control weather spell " +
      "(takes 10 minutes to initiate and an additional 10 minutes to manifest). Once the thunderstorm " +
      "manifests, the wearer may cast call lightning for up to 10 minutes or until dismissing the storm " +
      "as a standard action.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['call lightning', 'control weather'],
      cost: 17500,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 10,
      breakDC: 24,
    },

    activationCategory: 'command_word',
    activationAction: 'standard',

    effects: [],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'control_weather',
            spellName: 'Control Weather',
            casterLevel: 10,
            usesPerDay: 1,
            activationAction: 'standard',
          },
          {
            spellId: 'call_lightning',
            spellName: 'Call Lightning',
            casterLevel: 10,
            usesPerDay: 0,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // ---- 24. Helm, Tri-Faced ------------------------------------------------
  {
    id: 'wondrous-helm-tri-faced',
    name: 'Helm, Tri-Faced',
    category: 'wondrous',
    source: 'Pathfinder #41: The Thousand Fangs Below',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 5,
    slot: 'head',

    price: 22000,
    weight: 3,

    description:
      "This bronze, steel, and chain helmet features three stylized faces pointing in different directions " +
      "with the wearer's face concealed behind a central plate. The wearer can see in all directions " +
      "simultaneously, gains immunity to being flanked, and receives a +4 enhancement bonus on all " +
      "vision-based Perception checks. One in ten helms spontaneously manifests sentience after the death " +
      "of heroic previous owners, becoming lawful good intelligent items with ego 10 that speak languages, " +
      "possess knowledge of deities, and encourage wearers to defend holy places.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['clairvoyance'],
      cost: 11000,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 10,
      breakDC: 24,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'special',
        target: 'special.all_around_vision',
        value: 0,
        source: 'Helm, Tri-Faced',
      },
      {
        type: 'special',
        target: 'special.immunity_flanking',
        value: 0,
        source: 'Helm, Tri-Faced',
      },
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'skill.perception',
        value: 4,
        source: 'Helm, Tri-Faced',
        condition: {
          type: 'custom',
          params: { descriptor: 'vision_based' },
          description: 'vision-based Perception checks only',
        },
      },
    ],
  },

  // ---- 25. Herald Seed ----------------------------------------------------
  {
    id: 'wondrous-herald-seed',
    name: 'Herald Seed',
    category: 'wondrous',
    source: 'Blood of the Fey',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.DIVINATION }],
    casterLevel: 12,
    slot: 'none',

    price: 8000,
    weight: 0,

    description:
      "A palm-sized purple seed with tufts that can be thrown twice per day as a standard action. Once " +
      "thrown, it drifts toward a visualized location at 60 feet per round, traveling up to 12 miles " +
      "(approximately 2 hours). Someone may intercept it mid-flight with a successful combat maneuver " +
      "check against CMD 20. A gathlain thrower may record a message of up to 25 words that replays in " +
      "the thrower's voice upon arrival. Speaking a command word causes the seed to return to its last " +
      "throw location regardless of the thrower's visualization ability.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['commune with nature', 'message'],
      cost: 4000,
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
        target: 'special.herald_seed_message_delivery',
        value: 2,
        source: 'Herald Seed',
      },
    ],
  },
];
