import type { WondrousItemDefinition } from '@/types/magicItems';
import { AuraStrength, MagicSchool } from '@/types/equipment';

export const wondrousItemsAB8: WondrousItemDefinition[] = [
  // ---- 176: Body Wrap of Mighty Strikes (+1 through +5) -----------------------
  {
    id: 'wondrous-body-wrap-mighty-strikes-1',
    name: 'Body Wrap of Mighty Strikes +1',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.EVOCATION }],
    casterLevel: 5,
    slot: 'body',

    price: 3000,
    weight: 1,

    description:
      'This cloth bandage wraps around the chest and torso. Once per round as a free action (even on an ' +
      "opponent's turn), the wearer can add a +1 enhancement bonus to one unarmed strike or natural attack's " +
      'attack and damage rolls. At BAB +6, +11, and +16, the wearer gains one additional use per round. ' +
      'The wearer must choose to activate the wrap before the attack roll is made. The wrap can also grant ' +
      'melee weapon special abilities to unarmed attacks so long as those abilities apply to unarmed attacks; ' +
      'the total enhancement bonus plus the bonus equivalents of any special abilities cannot exceed +7.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['greater magic fang'],
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
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'attack.melee',
        value: 1,
        source: 'Body Wrap of Mighty Strikes +1',
        condition: {
          type: 'custom',
          params: { attackType: 'unarmed_or_natural' },
          description: 'once per round, one unarmed strike or natural attack',
        },
      },
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'damage.melee',
        value: 1,
        source: 'Body Wrap of Mighty Strikes +1',
        condition: {
          type: 'custom',
          params: { attackType: 'unarmed_or_natural' },
          description: 'once per round, one unarmed strike or natural attack',
        },
      },
    ],
  },

  {
    id: 'wondrous-body-wrap-mighty-strikes-2',
    name: 'Body Wrap of Mighty Strikes +2',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.EVOCATION }],
    casterLevel: 5,
    slot: 'body',

    price: 12000,
    weight: 1,

    description:
      'This cloth bandage wraps around the chest and torso. Once per round as a free action (even on an ' +
      "opponent's turn), the wearer can add a +2 enhancement bonus to one unarmed strike or natural attack's " +
      'attack and damage rolls. At BAB +6, +11, and +16, the wearer gains one additional use per round.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['greater magic fang'],
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
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'attack.melee',
        value: 2,
        source: 'Body Wrap of Mighty Strikes +2',
        condition: {
          type: 'custom',
          params: { attackType: 'unarmed_or_natural' },
          description: 'once per round, one unarmed strike or natural attack',
        },
      },
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'damage.melee',
        value: 2,
        source: 'Body Wrap of Mighty Strikes +2',
        condition: {
          type: 'custom',
          params: { attackType: 'unarmed_or_natural' },
          description: 'once per round, one unarmed strike or natural attack',
        },
      },
    ],
  },

  {
    id: 'wondrous-body-wrap-mighty-strikes-3',
    name: 'Body Wrap of Mighty Strikes +3',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.EVOCATION }],
    casterLevel: 5,
    slot: 'body',

    price: 27000,
    weight: 1,

    description:
      'This cloth bandage wraps around the chest and torso. Once per round as a free action (even on an ' +
      "opponent's turn), the wearer can add a +3 enhancement bonus to one unarmed strike or natural attack's " +
      'attack and damage rolls. At BAB +6, +11, and +16, the wearer gains one additional use per round.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['greater magic fang'],
      cost: 13500,
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
        bonusType: 'enhancement',
        target: 'attack.melee',
        value: 3,
        source: 'Body Wrap of Mighty Strikes +3',
        condition: {
          type: 'custom',
          params: { attackType: 'unarmed_or_natural' },
          description: 'once per round, one unarmed strike or natural attack',
        },
      },
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'damage.melee',
        value: 3,
        source: 'Body Wrap of Mighty Strikes +3',
        condition: {
          type: 'custom',
          params: { attackType: 'unarmed_or_natural' },
          description: 'once per round, one unarmed strike or natural attack',
        },
      },
    ],
  },

  {
    id: 'wondrous-body-wrap-mighty-strikes-4',
    name: 'Body Wrap of Mighty Strikes +4',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.EVOCATION }],
    casterLevel: 5,
    slot: 'body',

    price: 48000,
    weight: 1,

    description:
      'This cloth bandage wraps around the chest and torso. Once per round as a free action (even on an ' +
      "opponent's turn), the wearer can add a +4 enhancement bonus to one unarmed strike or natural attack's " +
      'attack and damage rolls. At BAB +6, +11, and +16, the wearer gains one additional use per round.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['greater magic fang'],
      cost: 24000,
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
        bonusType: 'enhancement',
        target: 'attack.melee',
        value: 4,
        source: 'Body Wrap of Mighty Strikes +4',
        condition: {
          type: 'custom',
          params: { attackType: 'unarmed_or_natural' },
          description: 'once per round, one unarmed strike or natural attack',
        },
      },
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'damage.melee',
        value: 4,
        source: 'Body Wrap of Mighty Strikes +4',
        condition: {
          type: 'custom',
          params: { attackType: 'unarmed_or_natural' },
          description: 'once per round, one unarmed strike or natural attack',
        },
      },
    ],
  },

  {
    id: 'wondrous-body-wrap-mighty-strikes-5',
    name: 'Body Wrap of Mighty Strikes +5',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.EVOCATION }],
    casterLevel: 5,
    slot: 'body',

    price: 75000,
    weight: 1,

    description:
      'This cloth bandage wraps around the chest and torso. Once per round as a free action (even on an ' +
      "opponent's turn), the wearer can add a +5 enhancement bonus to one unarmed strike or natural attack's " +
      'attack and damage rolls. At BAB +6, +11, and +16, the wearer gains one additional use per round.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['greater magic fang'],
      cost: 37500,
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
        bonusType: 'enhancement',
        target: 'attack.melee',
        value: 5,
        source: 'Body Wrap of Mighty Strikes +5',
        condition: {
          type: 'custom',
          params: { attackType: 'unarmed_or_natural' },
          description: 'once per round, one unarmed strike or natural attack',
        },
      },
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'damage.melee',
        value: 5,
        source: 'Body Wrap of Mighty Strikes +5',
        condition: {
          type: 'custom',
          params: { attackType: 'unarmed_or_natural' },
          description: 'once per round, one unarmed strike or natural attack',
        },
      },
    ],
  },

  // ---- 177: Bondbreaker's Boots -----------------------------------------------
  {
    id: 'wondrous-bondbreakers-boots',
    name: "Bondbreaker's Boots",
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 1,
    slot: 'feet',

    price: 1600,
    weight: 1,

    description:
      'These blue leather boots are decorated with a knife motif. Three times per day, the wearer can ' +
      'speak the command word as a swift action to conjure a short-lived serrated blade that severs ' +
      'non-magical restraints such as ropes, brambles, tanglefoot bags, vines, and webs. The blade cannot ' +
      'cut through magical bonds, creature-based restraints (such as a grapple), manacles, or chains.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['unseen servant'],
      cost: 800,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'command_word',
    activationAction: 'swift',

    effects: [
      {
        type: 'special',
        target: 'special.bondbreakers_boots_cut_restraints',
        value: 3,
        source: "Bondbreaker's Boots",
      },
    ],
  },

  // ---- 178: Bone Razor ---------------------------------------------------------
  {
    id: 'wondrous-bone-razor',
    name: 'Bone Razor',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.NECROMANCY }],
    casterLevel: 5,
    slot: 'none',

    price: 5000,
    weight: 1,

    description:
      'This thin, jagged bone knife is used to deliver coups de grace. When used to deliver a coup de ' +
      'grace to a helpless living creature that dies from the attack, the victim\'s flesh separates from ' +
      'the body and the bones animate as a skeleton under the wielder\'s control. The separated flesh ' +
      'decays normally but can be reattached within 1 minute, restoring a normal corpse and ending the ' +
      'necromantic effect. If a new skeleton is animated using the razor, any previously animated skeleton ' +
      'from this weapon is destroyed.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['animate dead'],
      cost: 2500,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 5,
      breakDC: 12,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.bone_razor_animate_skeleton',
        value: 0,
        source: 'Bone Razor',
      },
    ],
  },

  // ---- 179: Bones of the Founder -----------------------------------------------
  {
    id: 'wondrous-bones-of-the-founder',
    name: 'Bones of the Founder',
    category: 'wondrous',
    source: "Pathfinder Player Companion: Blood of the Coven",
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 4,
    slot: 'none',

    price: 2250,
    weight: 1,

    description:
      'These small blackened bone fragments, mostly under 1 inch long, provide a sensation of warmth. ' +
      'There are 32 such bones in existence. Each bone grants its bearer 1 temporary hit point; these ' +
      'temporary hit points stack with each other (but not with other sources of temporary hit points) ' +
      'and refresh daily at dawn. The bearer becomes aware of any other bones within 50 feet of her ' +
      'position. When a character acquires a bone, she must succeed at a Will save (DC 10 + the number ' +
      'of bones she possesses) or experience dreams that encourage her to collect the remaining bones. ' +
      'If all 32 bones are brought together, they crumble to dust and release the soul they contain, ' +
      'destroying all magical properties.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['aid'],
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
        bonusType: 'untyped',
        target: 'hp',
        value: 1,
        source: 'Bones of the Founder',
      },
      {
        type: 'special',
        target: 'special.bones_founder_proximity_sense',
        value: 50,
        source: 'Bones of the Founder',
      },
    ],
  },

  // ---- 180: Book of Cults ------------------------------------------------------
  {
    id: 'wondrous-book-of-cults',
    name: 'Book of Cults',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.CONJURATION }],
    casterLevel: 5,
    slot: 'none',

    price: 1500,
    weight: 5,

    description:
      'This leather-bound tome features erratic handwriting, with passages translated from Gnome into ' +
      'Common, and is filled with cult practices, rants about ancient entities, and summoning circle ' +
      'diagrams (many of which are crossed out or damaged). While carrying the book, the bearer gains ' +
      'a +1 resistance bonus on Will saving throws. If the bearer\'s patron is one of the Great Old Ones, ' +
      'she can hold the book to use it as a lesser extend metamagic rod, but only for conjuration spells ' +
      'that summon or call evil outsiders.',

    construction: {
      feats: ['Craft Wondrous Item', 'Extend Spell'],
      spells: ['resistance'],
      cost: 750,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 5,
      breakDC: 10,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'resistance',
        target: 'save.will',
        value: 1,
        source: 'Book of Cults',
      },
      {
        type: 'special',
        target: 'special.book_of_cults_metamagic_rod',
        value: 0,
        source: 'Book of Cults',
        condition: {
          type: 'custom',
          params: { patronType: 'great_old_one' },
          description: 'Only for bearers whose patron is one of the Great Old Ones; only for conjuration spells summoning/calling evil outsiders',
        },
      },
    ],
  },

  // ---- 181: Book of Extended Summoning (lesser, standard, greater) -------------
  {
    id: 'wondrous-book-extended-summoning-lesser',
    name: 'Book of Extended Summoning (Lesser)',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.CONJURATION }],
    casterLevel: 17,
    slot: 'none',

    price: 750,
    weight: 1,

    description:
      'This magical tome allows a spellcaster to apply the Extend Spell metamagic feat to a summoning ' +
      'spell without increasing the spell slot required. The lesser version applies to summoning spells ' +
      'of 3rd level or lower. The book is keyed to one alignment (chaotic, evil, good, or lawful) and ' +
      'only functions when summoning creatures of that alignment. The book crumbles into cold ash and is ' +
      'destroyed after a single use.',

    construction: {
      feats: ['Craft Wondrous Item', 'Extend Spell'],
      spells: ['summon monster i'],
      cost: 375,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'use_activated',

    charges: { maximum: 1 },

    effects: [
      {
        type: 'special',
        target: 'special.extend_summoning_3rd_level',
        value: 0,
        source: 'Book of Extended Summoning (Lesser)',
      },
    ],
  },

  {
    id: 'wondrous-book-extended-summoning-standard',
    name: 'Book of Extended Summoning (Standard)',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.CONJURATION }],
    casterLevel: 17,
    slot: 'none',

    price: 2750,
    weight: 1,

    description:
      'This magical tome allows a spellcaster to apply the Extend Spell metamagic feat to a summoning ' +
      'spell without increasing the spell slot required. The standard version applies to summoning spells ' +
      'of 6th level or lower. The book is keyed to one alignment (chaotic, evil, good, or lawful) and ' +
      'only functions when summoning creatures of that alignment. The book crumbles into cold ash and is ' +
      'destroyed after a single use.',

    construction: {
      feats: ['Craft Wondrous Item', 'Extend Spell'],
      spells: ['summon monster i'],
      cost: 1375,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'use_activated',

    charges: { maximum: 1 },

    effects: [
      {
        type: 'special',
        target: 'special.extend_summoning_6th_level',
        value: 0,
        source: 'Book of Extended Summoning (Standard)',
      },
    ],
  },

  {
    id: 'wondrous-book-extended-summoning-greater',
    name: 'Book of Extended Summoning (Greater)',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.CONJURATION }],
    casterLevel: 17,
    slot: 'none',

    price: 6126,
    weight: 1,

    description:
      'This magical tome allows a spellcaster to apply the Extend Spell metamagic feat to a summoning ' +
      'spell without increasing the spell slot required. The greater version applies to summoning spells ' +
      'of 9th level or lower. The book is keyed to one alignment (chaotic, evil, good, or lawful) and ' +
      'only functions when summoning creatures of that alignment. The book crumbles into cold ash and is ' +
      'destroyed after a single use.',

    construction: {
      feats: ['Craft Wondrous Item', 'Extend Spell'],
      spells: ['summon monster i'],
      cost: 3063,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'use_activated',

    charges: { maximum: 1 },

    effects: [
      {
        type: 'special',
        target: 'special.extend_summoning_9th_level',
        value: 0,
        source: 'Book of Extended Summoning (Greater)',
      },
    ],
  },

  // ---- 182: Book of Marvelous Recipes ------------------------------------------
  {
    id: 'wondrous-book-of-marvelous-recipes',
    name: 'Book of Marvelous Recipes',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 11,
    slot: 'none',

    price: 28800,
    weight: 3,

    description:
      "This leather-bound tome has pages that visibly rewrite themselves as a reader flips through them, " +
      "creating a number of delicious recipes. The book allows the reader to use the Profession (cook) " +
      "skill without training. If the reader is already trained in Profession (cook), she instead gains " +
      "a +4 competence bonus on checks with that skill. Once per day, the book can enhance a meal being " +
      "prepared, granting it the effects of a heroes' feast spell (caster level 11th).",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["heroes' feast"],
      specialRequirements: ['Creator must have at least 4 ranks in Profession (cook)'],
      cost: 14400,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 5,
      breakDC: 10,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.profession',
        value: 4,
        source: 'Book of Marvelous Recipes',
        condition: {
          type: 'custom',
          params: { skill: 'profession_cook', trained: true },
          description: 'only if already trained in Profession (cook)',
        },
      },
      {
        type: 'special',
        target: 'special.book_marvelous_recipes_untrained_cook',
        value: 0,
        source: 'Book of Marvelous Recipes',
      },
    ],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'heroes_feast',
            spellName: "Heroes' Feast",
            casterLevel: 11,
            usesPerDay: 1,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // ---- 183: Book of the Loremaster --------------------------------------------
  {
    id: 'wondrous-book-of-the-loremaster',
    name: 'Book of the Loremaster',
    category: 'wondrous',
    source: 'Advanced Player\'s Guide',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.DIVINATION }],
    casterLevel: 7,
    slot: 'none',

    price: 15000,
    weight: 2,

    description:
      'This pocket-sized tome is filled with cryptic words, phrases, and memory techniques. Three times ' +
      'per day, a bard using his lore master class ability can consult the book to gain a +5 competence ' +
      'bonus on the Knowledge check when taking 10 or taking 20.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['clairaudience/clairvoyance'],
      cost: 7500,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 2,
      breakDC: 10,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.knowledge_arcana',
        value: 5,
        source: 'Book of the Loremaster',
        condition: {
          type: 'custom',
          params: { classAbility: 'lore_master', takingTenOrTwenty: true },
          description: 'bard lore master ability only, 3/day, when taking 10 or 20',
        },
      },
    ],
  },

  // ---- 184: Book of Whispers --------------------------------------------------
  {
    id: 'wondrous-book-of-whispers',
    name: 'Book of Whispers',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 3,
    slot: 'none',

    price: 6000,
    weight: 1,

    description:
      'This magical tome begins as a blank book with 25 pages. As a standard action, the owner can ' +
      'remove a page to create a "secret letter" while leaving a "source page" in the book. The owner ' +
      'writes a message of up to 25 words, drawings, or maps on the source page and inscribes an ' +
      'activation word in the margin. The message instantly duplicates onto the linked secret letter, ' +
      'and both pages become hidden by a secret page effect. The carrier of the secret letter can use ' +
      'the activation word to reveal or conceal the contents. The owner can also rip out a source page ' +
      'entirely as a standard action, causing the linked secret letter to crumble to ash. The book ' +
      'allows only 25 total uses before becoming an ordinary book.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['magic aura', 'secret page', 'sending'],
      cost: 3000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 2,
      breakDC: 10,
    },

    activationCategory: 'use_activated',

    charges: { maximum: 25 },

    effects: [
      {
        type: 'special',
        target: 'special.book_of_whispers_secret_pages',
        value: 25,
        source: 'Book of Whispers',
      },
    ],
  },

  // ---- 185: Book, Behemoth Golem Manual ----------------------------------------
  {
    id: 'wondrous-book-behemoth-golem-manual',
    name: 'Book, Behemoth Golem Manual',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [
      { strength: AuraStrength.STRONG, school: MagicSchool.CONJURATION },
      { strength: AuraStrength.STRONG, school: MagicSchool.ENCHANTMENT },
      { strength: AuraStrength.STRONG, school: MagicSchool.EVOCATION },
    ],
    casterLevel: 18,
    slot: 'none',

    price: 70000,
    weight: 5,

    description:
      'This manual contains all the information and magical power required to create a behemoth golem. ' +
      'The tome grants the reader the Craft Construct feat (if she does not already have it), provides ' +
      'a +5 competence bonus on Craft checks related to creating the golem, and treats the reader\'s ' +
      'caster level as 2 higher for the purpose of crafting the golem. The book also contains the ' +
      'spells earthquake, geas/quest, mage\'s magnificent mansion, and wish, which can only be used ' +
      'in the creation of the behemoth golem. The manual is consumed when the golem is completed.',

    construction: {
      feats: ['Craft Construct'],
      spells: ['earthquake', "geas/quest", "mage's magnificent mansion", 'wish'],
      cost: 35000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 5,
      breakDC: 10,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.golem_manual_craft_construct',
        value: 0,
        source: 'Book, Behemoth Golem Manual',
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.craft',
        value: 5,
        source: 'Book, Behemoth Golem Manual',
        condition: {
          type: 'custom',
          params: { activity: 'golem_construction' },
          description: 'only for crafting behemoth golem',
        },
      },
    ],
  },

  // ---- 186: Book, Blessed ------------------------------------------------------
  {
    id: 'wondrous-book-blessed',
    name: 'Book, Blessed',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 7,
    slot: 'none',

    price: 12500,
    weight: 1,

    description:
      'This small, durable tome is typically 12 inches tall, 8 inches wide, and 1 inch thick, with iron ' +
      'binding overlaid in silver and a locking mechanism. It contains 1,000 pages. A wizard may inscribe ' +
      'spells into this book without paying the material cost. The tome never appears as randomly generated ' +
      'treasure with spells already written inside.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['secret page'],
      cost: 6250,
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
        target: 'special.blessed_book_free_spell_inscription',
        value: 0,
        source: 'Book, Blessed',
      },
    ],
  },

  // ---- 187: Book, Dream Journal of the Pallid Seer ----------------------------
  {
    id: 'wondrous-book-dream-journal-pallid-seer',
    name: 'Book, Dream Journal of the Pallid Seer',
    category: 'wondrous',
    source: 'Occult Adventures',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 3,
    slot: 'none',

    price: 600,
    weight: 2,

    description:
      'This worn leather notebook appears nonmagical due to a permanent magic aura. Anyone who reads the ' +
      'journal for an hour or more has strange dreams the following night and is fatigued the next day. ' +
      'After reading for 24 or more hours total, the character receives a vision of her own death. When ' +
      'a character with this death vision is reduced to 0 or fewer hit points, she may either reroll one ' +
      'failed saving throw from the last round or force an opponent to reroll the attack or effect that ' +
      'reduced her to 0 or fewer hit points. The character must accept the result of the second roll. ' +
      'This ability activates only once; the journal provides no further benefit thereafter.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['guidance', 'magic aura'],
      cost: 300,
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
        target: 'special.dream_journal_death_vision_reroll',
        value: 0,
        source: 'Book, Dream Journal of the Pallid Seer',
      },
    ],
  },

  // ---- 188: Book, Golem Manual (all variants — one per golem type) -------------
  // 31 variants sourced from d20pfsrd.com/magic-items/wondrous-items/a-b/book-golem-manual/
  // Core Rulebook: Flesh, Clay, Stone, Iron
  // Ultimate Equipment: most remaining variants
  // Each manual grants Craft Construct feat, +5 competence to Craft (golem construction),
  // and contains the listed spells (consumed when golem is completed).

  // Adamantine Golem Manual
  {
    id: 'wondrous-book-golem-manual-adamantine',
    name: 'Book, Golem Manual (Adamantine)',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [
      { strength: AuraStrength.STRONG, school: MagicSchool.ABJURATION },
      { strength: AuraStrength.STRONG, school: MagicSchool.CONJURATION },
      { strength: AuraStrength.STRONG, school: MagicSchool.ENCHANTMENT },
      { strength: AuraStrength.STRONG, school: MagicSchool.EVOCATION },
    ],
    casterLevel: 20,
    slot: 'none',

    price: 125000,
    weight: 5,

    description:
      'This manual contains all the information and magical power required to create an adamantine golem. ' +
      'It grants the reader the Craft Construct feat (if she does not already have it), provides a +5 ' +
      'competence bonus on Craft checks related to creating the golem, and contains the spells crushing hand, ' +
      'geas/quest, heal, stoneskin, and wish, usable only for the golem\'s construction. ' +
      'The manual is consumed when the golem is completed.',

    construction: {
      feats: ['Craft Construct'],
      spells: ['crushing hand', 'geas/quest', 'heal', 'stoneskin', 'wish'],
      cost: 62500,
    },
    physicalStats: { hardness: 0, hitPoints: 5, breakDC: 10 },
    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.golem_manual_craft_construct',
        value: 0,
        source: 'Book, Golem Manual (Adamantine)',
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.craft',
        value: 5,
        source: 'Book, Golem Manual (Adamantine)',
        condition: {
          type: 'custom',
          params: { activity: 'golem_construction' },
          description: 'only for crafting adamantine golem',
        },
      },
    ],
  },

  // Alchemical Golem Manual
  {
    id: 'wondrous-book-golem-manual-alchemical',
    name: 'Book, Golem Manual (Alchemical)',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [
      { strength: AuraStrength.MODERATE, school: MagicSchool.ABJURATION },
      { strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION },
      { strength: AuraStrength.MODERATE, school: MagicSchool.ENCHANTMENT },
      { strength: AuraStrength.MODERATE, school: MagicSchool.NECROMANCY },
      { strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION },
    ],
    casterLevel: 10,
    slot: 'none',

    price: 10000,
    weight: 5,

    description:
      'This manual contains all the information and magical power required to create an alchemical golem. ' +
      'It grants the reader the Craft Construct feat (if she does not already have it), provides a +5 ' +
      'competence bonus on Craft checks related to creating the golem, and contains the spells geas/quest, ' +
      'gentle repose, major creation, resist energy, and telekinesis, usable only for the golem\'s construction. ' +
      'The manual is consumed when the golem is completed.',

    construction: {
      feats: ['Craft Construct'],
      spells: ['geas/quest', 'gentle repose', 'major creation', 'resist energy', 'telekinesis'],
      cost: 5000,
    },
    physicalStats: { hardness: 0, hitPoints: 5, breakDC: 10 },
    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.golem_manual_craft_construct',
        value: 0,
        source: 'Book, Golem Manual (Alchemical)',
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.craft',
        value: 5,
        source: 'Book, Golem Manual (Alchemical)',
        condition: {
          type: 'custom',
          params: { activity: 'golem_construction' },
          description: 'only for crafting alchemical golem',
        },
      },
    ],
  },

  // Behemoth Golem Manual — already listed above as item 185; duplicate omitted here.
  // See: wondrous-book-behemoth-golem-manual

  // Blood Golem Manual
  {
    id: 'wondrous-book-golem-manual-blood',
    name: 'Book, Golem Manual (Blood)',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [
      { strength: AuraStrength.STRONG, school: MagicSchool.CONJURATION },
      { strength: AuraStrength.STRONG, school: MagicSchool.ENCHANTMENT },
      { strength: AuraStrength.STRONG, school: MagicSchool.NECROMANCY },
    ],
    casterLevel: 12,
    slot: 'none',

    price: 70000,
    weight: 5,

    description:
      'This manual contains all the information and magical power required to create a blood golem. ' +
      'It grants the reader the Craft Construct feat (if she does not already have it), provides a +5 ' +
      'competence bonus on Craft checks related to creating the golem, and contains the spells animate dead, ' +
      'bleed, cure critical wounds, and geas/quest, usable only for the golem\'s construction. ' +
      'The manual is consumed when the golem is completed.',

    construction: {
      feats: ['Craft Construct'],
      spells: ['animate dead', 'bleed', 'cure critical wounds', 'geas/quest'],
      cost: 35000,
    },
    physicalStats: { hardness: 0, hitPoints: 5, breakDC: 10 },
    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.golem_manual_craft_construct',
        value: 0,
        source: 'Book, Golem Manual (Blood)',
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.craft',
        value: 5,
        source: 'Book, Golem Manual (Blood)',
        condition: {
          type: 'custom',
          params: { activity: 'golem_construction' },
          description: 'only for crafting blood golem',
        },
      },
    ],
  },

  // Bone Golem Manual
  {
    id: 'wondrous-book-golem-manual-bone',
    name: 'Book, Golem Manual (Bone)',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [
      { strength: AuraStrength.MODERATE, school: MagicSchool.ENCHANTMENT },
      { strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION },
    ],
    casterLevel: 9,
    slot: 'none',

    price: 12000,
    weight: 5,

    description:
      'This manual contains all the information and magical power required to create a bone golem. ' +
      'It grants the reader the Craft Construct feat (if she does not already have it), provides a +5 ' +
      'competence bonus on Craft checks related to creating the golem, and contains the spells animate objects, ' +
      'geas/quest, limited wish, and telekinesis, usable only for the golem\'s construction. ' +
      'The manual is consumed when the golem is completed.',

    construction: {
      feats: ['Craft Construct'],
      spells: ['animate objects', 'geas/quest', 'limited wish', 'telekinesis'],
      cost: 6000,
    },
    physicalStats: { hardness: 0, hitPoints: 5, breakDC: 10 },
    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.golem_manual_craft_construct',
        value: 0,
        source: 'Book, Golem Manual (Bone)',
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.craft',
        value: 5,
        source: 'Book, Golem Manual (Bone)',
        condition: {
          type: 'custom',
          params: { activity: 'golem_construction' },
          description: 'only for crafting bone golem',
        },
      },
    ],
  },

  // Brass Golem Manual
  {
    id: 'wondrous-book-golem-manual-brass',
    name: 'Book, Golem Manual (Brass)',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [
      { strength: AuraStrength.STRONG, school: MagicSchool.CONJURATION },
      { strength: AuraStrength.STRONG, school: MagicSchool.DIVINATION },
      { strength: AuraStrength.STRONG, school: MagicSchool.ENCHANTMENT },
    ],
    casterLevel: 17,
    slot: 'none',

    price: 55000,
    weight: 5,

    description:
      'This manual contains all the information and magical power required to create a brass golem. ' +
      'It grants the reader the Craft Construct feat (if she does not already have it), provides a +5 ' +
      'competence bonus on Craft checks related to creating the golem, and contains the spells geas/quest, ' +
      'incendiary cloud, limited wish, and see invisibility, usable only for the golem\'s construction. ' +
      'The manual is consumed when the golem is completed.',

    construction: {
      feats: ['Craft Construct'],
      spells: ['geas/quest', 'incendiary cloud', 'limited wish', 'see invisibility'],
      cost: 27500,
    },
    physicalStats: { hardness: 0, hitPoints: 5, breakDC: 10 },
    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.golem_manual_craft_construct',
        value: 0,
        source: 'Book, Golem Manual (Brass)',
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.craft',
        value: 5,
        source: 'Book, Golem Manual (Brass)',
        condition: {
          type: 'custom',
          params: { activity: 'golem_construction' },
          description: 'only for crafting brass golem',
        },
      },
    ],
  },

  // Cannon Golem Manual
  {
    id: 'wondrous-book-golem-manual-cannon',
    name: 'Book, Golem Manual (Cannon)',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [
      { strength: AuraStrength.STRONG, school: MagicSchool.CONJURATION },
      { strength: AuraStrength.STRONG, school: MagicSchool.ENCHANTMENT },
    ],
    casterLevel: 17,
    slot: 'none',

    price: 60000,
    weight: 5,

    description:
      'This manual contains all the information and magical power required to create a cannon golem. ' +
      'It grants the reader the Craft Construct feat (if she does not already have it), provides a +5 ' +
      'competence bonus on Craft checks related to creating the golem, and contains the spells geas/quest, ' +
      'limited wish, and secret chest, usable only for the golem\'s construction. ' +
      'The manual is consumed when the golem is completed.',

    construction: {
      feats: ['Craft Construct'],
      spells: ['geas/quest', 'limited wish', 'secret chest'],
      cost: 30000,
    },
    physicalStats: { hardness: 0, hitPoints: 5, breakDC: 10 },
    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.golem_manual_craft_construct',
        value: 0,
        source: 'Book, Golem Manual (Cannon)',
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.craft',
        value: 5,
        source: 'Book, Golem Manual (Cannon)',
        condition: {
          type: 'custom',
          params: { activity: 'golem_construction' },
          description: 'only for crafting cannon golem',
        },
      },
    ],
  },

  // Carrion Golem Manual
  {
    id: 'wondrous-book-golem-manual-carrion',
    name: 'Book, Golem Manual (Carrion)',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [
      { strength: AuraStrength.MODERATE, school: MagicSchool.ENCHANTMENT },
      { strength: AuraStrength.MODERATE, school: MagicSchool.NECROMANCY },
    ],
    casterLevel: 7,
    slot: 'none',

    price: 30000,
    weight: 5,

    description:
      'This manual contains all the information and magical power required to create a carrion golem. ' +
      'It grants the reader the Craft Construct feat (if she does not already have it), provides a +5 ' +
      'competence bonus on Craft checks related to creating the golem, and contains the spells animate dead, ' +
      'contagion, false life, gentle repose, and lesser geas, usable only for the golem\'s construction. ' +
      'The manual is consumed when the golem is completed.',

    construction: {
      feats: ['Craft Construct'],
      spells: ['animate dead', 'contagion', 'false life', 'gentle repose', 'lesser geas'],
      cost: 15000,
    },
    physicalStats: { hardness: 0, hitPoints: 5, breakDC: 10 },
    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.golem_manual_craft_construct',
        value: 0,
        source: 'Book, Golem Manual (Carrion)',
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.craft',
        value: 5,
        source: 'Book, Golem Manual (Carrion)',
        condition: {
          type: 'custom',
          params: { activity: 'golem_construction' },
          description: 'only for crafting carrion golem',
        },
      },
    ],
  },

  // Clay Golem Manual
  {
    id: 'wondrous-book-golem-manual-clay',
    name: 'Book, Golem Manual (Clay)',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 11,
    slot: 'none',

    price: 12000,
    weight: 5,

    description:
      'This manual contains all the information and magical power required to create a clay golem. ' +
      'It grants the reader the Craft Construct feat (if she does not already have it), provides a +5 ' +
      'competence bonus on Craft checks related to creating the golem, and contains the spells animate ' +
      'objects, bless, commune, prayer, and resurrection, usable only for the golem\'s construction. ' +
      'The manual is consumed when the golem is completed.',

    construction: {
      feats: ['Craft Construct'],
      spells: ['animate objects', 'bless', 'commune', 'prayer', 'resurrection'],
      cost: 6000,
    },
    physicalStats: { hardness: 0, hitPoints: 5, breakDC: 10 },
    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.golem_manual_craft_construct',
        value: 0,
        source: 'Book, Golem Manual (Clay)',
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.craft',
        value: 5,
        source: 'Book, Golem Manual (Clay)',
        condition: {
          type: 'custom',
          params: { activity: 'golem_construction' },
          description: 'only for crafting clay golem',
        },
      },
    ],
  },

  // Clockwork Golem Manual
  {
    id: 'wondrous-book-golem-manual-clockwork',
    name: 'Book, Golem Manual (Clockwork)',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [
      { strength: AuraStrength.STRONG, school: MagicSchool.ENCHANTMENT },
      { strength: AuraStrength.STRONG, school: MagicSchool.EVOCATION },
      { strength: AuraStrength.STRONG, school: MagicSchool.TRANSMUTATION },
    ],
    casterLevel: 15,
    slot: 'none',

    price: 35000,
    weight: 5,

    description:
      'This manual contains all the information and magical power required to create a clockwork golem. ' +
      'It grants the reader the Craft Construct feat (if she does not already have it), provides a +5 ' +
      'competence bonus on Craft checks related to creating the golem, and contains the spells animate objects, ' +
      'blade barrier, geas/quest, grease, and telekinesis, usable only for the golem\'s construction. ' +
      'The manual is consumed when the golem is completed.',

    construction: {
      feats: ['Craft Construct'],
      spells: ['animate objects', 'blade barrier', 'geas/quest', 'grease', 'telekinesis'],
      cost: 17500,
    },
    physicalStats: { hardness: 0, hitPoints: 5, breakDC: 10 },
    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.golem_manual_craft_construct',
        value: 0,
        source: 'Book, Golem Manual (Clockwork)',
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.craft',
        value: 5,
        source: 'Book, Golem Manual (Clockwork)',
        condition: {
          type: 'custom',
          params: { activity: 'golem_construction' },
          description: 'only for crafting clockwork golem',
        },
      },
    ],
  },

  // Coral Golem Manual
  {
    id: 'wondrous-book-golem-manual-coral',
    name: 'Book, Golem Manual (Coral)',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [
      { strength: AuraStrength.MODERATE, school: MagicSchool.ENCHANTMENT },
      { strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION },
    ],
    casterLevel: 11,
    slot: 'none',

    price: 17500,
    weight: 5,

    description:
      'This manual contains all the information and magical power required to create a coral golem. ' +
      'It grants the reader the Craft Construct feat (if she does not already have it), provides a +5 ' +
      'competence bonus on Craft checks related to creating the golem, and contains the spells geas/quest, ' +
      'keen edge, limited wish, and water breathing, usable only for the golem\'s construction. ' +
      'The manual is consumed when the golem is completed.',

    construction: {
      feats: ['Craft Construct'],
      spells: ['geas/quest', 'keen edge', 'limited wish', 'water breathing'],
      cost: 8750,
    },
    physicalStats: { hardness: 0, hitPoints: 5, breakDC: 10 },
    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.golem_manual_craft_construct',
        value: 0,
        source: 'Book, Golem Manual (Coral)',
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.craft',
        value: 5,
        source: 'Book, Golem Manual (Coral)',
        condition: {
          type: 'custom',
          params: { activity: 'golem_construction' },
          description: 'only for crafting coral golem',
        },
      },
    ],
  },

  // Crystal Golem Manual
  {
    id: 'wondrous-book-golem-manual-crystal',
    name: 'Book, Golem Manual (Crystal)',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [
      { strength: AuraStrength.STRONG, school: MagicSchool.DIVINATION },
      { strength: AuraStrength.STRONG, school: MagicSchool.ENCHANTMENT },
      { strength: AuraStrength.STRONG, school: MagicSchool.NECROMANCY },
    ],
    casterLevel: 15,
    slot: 'none',

    price: 40000,
    weight: 5,

    description:
      'This manual contains all the information and magical power required to create a crystal golem. ' +
      'It grants the reader the Craft Construct feat (if she does not already have it), provides a +5 ' +
      'competence bonus on Craft checks related to creating the golem, and contains the spells geas/quest, ' +
      'limited wish, possession, and thoughtsense, usable only for the golem\'s construction. ' +
      'The manual is consumed when the golem is completed.',

    construction: {
      feats: ['Craft Construct'],
      spells: ['geas/quest', 'limited wish', 'possession', 'thoughtsense'],
      cost: 20000,
    },
    physicalStats: { hardness: 0, hitPoints: 5, breakDC: 10 },
    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.golem_manual_craft_construct',
        value: 0,
        source: 'Book, Golem Manual (Crystal)',
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.craft',
        value: 5,
        source: 'Book, Golem Manual (Crystal)',
        condition: {
          type: 'custom',
          params: { activity: 'golem_construction' },
          description: 'only for crafting crystal golem',
        },
      },
    ],
  },

  // Dragonhide Golem Manual
  {
    id: 'wondrous-book-golem-manual-dragonhide',
    name: 'Book, Golem Manual (Dragonhide)',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [
      { strength: AuraStrength.STRONG, school: MagicSchool.ENCHANTMENT },
      { strength: AuraStrength.STRONG, school: MagicSchool.NECROMANCY },
      { strength: AuraStrength.STRONG, school: MagicSchool.TRANSMUTATION },
    ],
    casterLevel: 16,
    slot: 'none',

    price: 65000,
    weight: 5,

    description:
      'This manual contains all the information and magical power required to create a dragonhide golem. ' +
      'It grants the reader the Craft Construct feat (if she does not already have it), provides a +5 ' +
      'competence bonus on Craft checks related to creating the golem, and contains the spells create greater undead, ' +
      'form of the dragon I, geas/quest, and limited wish, usable only for the golem\'s construction. ' +
      'The manual is consumed when the golem is completed.',

    construction: {
      feats: ['Craft Construct'],
      spells: ['create greater undead', 'form of the dragon I', 'geas/quest', 'limited wish'],
      cost: 32500,
    },
    physicalStats: { hardness: 0, hitPoints: 5, breakDC: 10 },
    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.golem_manual_craft_construct',
        value: 0,
        source: 'Book, Golem Manual (Dragonhide)',
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.craft',
        value: 5,
        source: 'Book, Golem Manual (Dragonhide)',
        condition: {
          type: 'custom',
          params: { activity: 'golem_construction' },
          description: 'only for crafting dragonhide golem',
        },
      },
    ],
  },

  // Flesh Golem Manual
  {
    id: 'wondrous-book-golem-manual-flesh',
    name: 'Book, Golem Manual (Flesh)',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [
      { strength: AuraStrength.MODERATE, school: MagicSchool.ENCHANTMENT },
      { strength: AuraStrength.MODERATE, school: MagicSchool.NECROMANCY },
      { strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION },
    ],
    casterLevel: 8,
    slot: 'none',

    price: 8000,
    weight: 5,

    description:
      'This manual contains all the information and magical power required to create a flesh golem. ' +
      'It grants the reader the Craft Construct feat (if she does not already have it), provides a +5 ' +
      'competence bonus on Craft checks related to creating the golem, and contains the spells animate ' +
      'dead, bull\'s strength, geas/quest, and limited wish, usable only for the golem\'s construction. ' +
      'The manual is consumed when the golem is completed.',

    construction: {
      feats: ['Craft Construct'],
      spells: ['animate dead', "bull's strength", 'geas/quest', 'limited wish'],
      cost: 4000,
    },
    physicalStats: { hardness: 0, hitPoints: 5, breakDC: 10 },
    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.golem_manual_craft_construct',
        value: 0,
        source: 'Book, Golem Manual (Flesh)',
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.craft',
        value: 5,
        source: 'Book, Golem Manual (Flesh)',
        condition: {
          type: 'custom',
          params: { activity: 'golem_construction' },
          description: 'only for crafting flesh golem',
        },
      },
    ],
  },

  // Fossil Golem Manual
  {
    id: 'wondrous-book-golem-manual-fossil',
    name: 'Book, Golem Manual (Fossil)',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [
      { strength: AuraStrength.STRONG, school: MagicSchool.ENCHANTMENT },
      { strength: AuraStrength.STRONG, school: MagicSchool.TRANSMUTATION },
    ],
    casterLevel: 15,
    slot: 'none',

    price: 37500,
    weight: 5,

    description:
      'This manual contains all the information and magical power required to create a fossil golem. ' +
      'It grants the reader the Craft Construct feat (if she does not already have it), provides a +5 ' +
      'competence bonus on Craft checks related to creating the golem, and contains the spells flesh to stone, ' +
      'geas/quest, limited wish, and stone shape, usable only for the golem\'s construction. ' +
      'The manual is consumed when the golem is completed.',

    construction: {
      feats: ['Craft Construct'],
      spells: ['flesh to stone', 'geas/quest', 'limited wish', 'stone shape'],
      cost: 18750,
    },
    physicalStats: { hardness: 0, hitPoints: 5, breakDC: 10 },
    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.golem_manual_craft_construct',
        value: 0,
        source: 'Book, Golem Manual (Fossil)',
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.craft',
        value: 5,
        source: 'Book, Golem Manual (Fossil)',
        condition: {
          type: 'custom',
          params: { activity: 'golem_construction' },
          description: 'only for crafting fossil golem',
        },
      },
    ],
  },

  // Glass Golem Manual
  {
    id: 'wondrous-book-golem-manual-glass',
    name: 'Book, Golem Manual (Glass)',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [
      { strength: AuraStrength.MODERATE, school: MagicSchool.ABJURATION },
      { strength: AuraStrength.MODERATE, school: MagicSchool.ENCHANTMENT },
      { strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION },
      { strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION },
    ],
    casterLevel: 10,
    slot: 'none',

    price: 10000,
    weight: 5,

    description:
      'This manual contains all the information and magical power required to create a glass golem. ' +
      'It grants the reader the Craft Construct feat (if she does not already have it), provides a +5 ' +
      'competence bonus on Craft checks related to creating the golem, and contains the spells animate objects, ' +
      'flame strike, geas/quest, and spell turning, usable only for the golem\'s construction. ' +
      'The manual is consumed when the golem is completed.',

    construction: {
      feats: ['Craft Construct'],
      spells: ['animate objects', 'flame strike', 'geas/quest', 'spell turning'],
      cost: 5000,
    },
    physicalStats: { hardness: 0, hitPoints: 5, breakDC: 10 },
    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.golem_manual_craft_construct',
        value: 0,
        source: 'Book, Golem Manual (Glass)',
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.craft',
        value: 5,
        source: 'Book, Golem Manual (Glass)',
        condition: {
          type: 'custom',
          params: { activity: 'golem_construction' },
          description: 'only for crafting glass golem',
        },
      },
    ],
  },

  // Gold Golem Manual
  {
    id: 'wondrous-book-golem-manual-gold',
    name: 'Book, Golem Manual (Gold)',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [
      { strength: AuraStrength.STRONG, school: MagicSchool.ENCHANTMENT },
      { strength: AuraStrength.STRONG, school: MagicSchool.EVOCATION },
      { strength: AuraStrength.STRONG, school: MagicSchool.TRANSMUTATION },
    ],
    casterLevel: 18,
    slot: 'none',

    price: 65000,
    weight: 5,

    description:
      'This manual contains all the information and magical power required to create a gold golem. ' +
      'It grants the reader the Craft Construct feat (if she does not already have it), provides a +5 ' +
      'competence bonus on Craft checks related to creating the golem, and contains the spells geas/quest, ' +
      'limited wish, polymorph any object, and prismatic spray, usable only for the golem\'s construction. ' +
      'The manual is consumed when the golem is completed.',

    construction: {
      feats: ['Craft Construct'],
      spells: ['geas/quest', 'limited wish', 'polymorph any object', 'prismatic spray'],
      cost: 32500,
    },
    physicalStats: { hardness: 0, hitPoints: 5, breakDC: 10 },
    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.golem_manual_craft_construct',
        value: 0,
        source: 'Book, Golem Manual (Gold)',
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.craft',
        value: 5,
        source: 'Book, Golem Manual (Gold)',
        condition: {
          type: 'custom',
          params: { activity: 'golem_construction' },
          description: 'only for crafting gold golem',
        },
      },
    ],
  },

  // Ice Golem Manual
  {
    id: 'wondrous-book-golem-manual-ice',
    name: 'Book, Golem Manual (Ice)',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [
      { strength: AuraStrength.STRONG, school: MagicSchool.ABJURATION },
      { strength: AuraStrength.STRONG, school: MagicSchool.ENCHANTMENT },
      { strength: AuraStrength.STRONG, school: MagicSchool.EVOCATION },
    ],
    casterLevel: 12,
    slot: 'none',

    price: 5000,
    weight: 5,

    description:
      'This manual contains all the information and magical power required to create an ice golem. ' +
      'It grants the reader the Craft Construct feat (if she does not already have it), provides a +5 ' +
      'competence bonus on Craft checks related to creating the golem, and contains the spells chill touch, ' +
      'cone of cold, geas/quest, ice storm, and resist energy (cold), usable only for the golem\'s construction. ' +
      'The manual is consumed when the golem is completed.',

    construction: {
      feats: ['Craft Construct'],
      spells: ['chill touch', 'cone of cold', 'geas/quest', 'ice storm', 'resist energy'],
      cost: 2500,
    },
    physicalStats: { hardness: 0, hitPoints: 5, breakDC: 10 },
    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.golem_manual_craft_construct',
        value: 0,
        source: 'Book, Golem Manual (Ice)',
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.craft',
        value: 5,
        source: 'Book, Golem Manual (Ice)',
        condition: {
          type: 'custom',
          params: { activity: 'golem_construction' },
          description: 'only for crafting ice golem',
        },
      },
    ],
  },

  // Inubrix Golem Manual
  {
    id: 'wondrous-book-golem-manual-inubrix',
    name: 'Book, Golem Manual (Inubrix)',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [
      { strength: AuraStrength.STRONG, school: MagicSchool.ENCHANTMENT },
      { strength: AuraStrength.STRONG, school: MagicSchool.NECROMANCY },
      { strength: AuraStrength.STRONG, school: MagicSchool.TRANSMUTATION },
    ],
    casterLevel: 16,
    slot: 'none',

    price: 90000,
    weight: 5,

    description:
      'This manual contains all the information and magical power required to create an inubrix golem. ' +
      'It grants the reader the Craft Construct feat (if she does not already have it), provides a +5 ' +
      'competence bonus on Craft checks related to creating the golem, and contains the spells air walk, ' +
      'enervation, geas/quest, and limited wish, usable only for the golem\'s construction. ' +
      'The manual is consumed when the golem is completed.',

    construction: {
      feats: ['Craft Construct'],
      spells: ['air walk', 'enervation', 'geas/quest', 'limited wish'],
      cost: 45000,
    },
    physicalStats: { hardness: 0, hitPoints: 5, breakDC: 10 },
    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.golem_manual_craft_construct',
        value: 0,
        source: 'Book, Golem Manual (Inubrix)',
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.craft',
        value: 5,
        source: 'Book, Golem Manual (Inubrix)',
        condition: {
          type: 'custom',
          params: { activity: 'golem_construction' },
          description: 'only for crafting inubrix golem',
        },
      },
    ],
  },

  // Iron Golem Manual
  {
    id: 'wondrous-book-golem-manual-iron',
    name: 'Book, Golem Manual (Iron)',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [
      { strength: AuraStrength.STRONG, school: MagicSchool.CONJURATION },
      { strength: AuraStrength.STRONG, school: MagicSchool.ENCHANTMENT },
      { strength: AuraStrength.STRONG, school: MagicSchool.TRANSMUTATION },
    ],
    casterLevel: 16,
    slot: 'none',

    price: 35000,
    weight: 5,

    description:
      'This manual contains all the information and magical power required to create an iron golem. ' +
      'It grants the reader the Craft Construct feat (if she does not already have it), provides a +5 ' +
      'competence bonus on Craft checks related to creating the golem, and contains the spells cloudkill, ' +
      'geas/quest, limited wish, and polymorph any object, usable only for the golem\'s construction. ' +
      'The manual is consumed when the golem is completed.',

    construction: {
      feats: ['Craft Construct'],
      spells: ['cloudkill', 'geas/quest', 'limited wish', 'polymorph any object'],
      cost: 17500,
    },
    physicalStats: { hardness: 0, hitPoints: 5, breakDC: 10 },
    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.golem_manual_craft_construct',
        value: 0,
        source: 'Book, Golem Manual (Iron)',
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.craft',
        value: 5,
        source: 'Book, Golem Manual (Iron)',
        condition: {
          type: 'custom',
          params: { activity: 'golem_construction' },
          description: 'only for crafting iron golem',
        },
      },
    ],
  },

  // Junk Golem Manual
  {
    id: 'wondrous-book-golem-manual-junk',
    name: 'Book, Golem Manual (Junk)',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [
      { strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION },
      { strength: AuraStrength.MODERATE, school: MagicSchool.ENCHANTMENT },
      { strength: AuraStrength.MODERATE, school: MagicSchool.NECROMANCY },
      { strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION },
    ],
    casterLevel: 7,
    slot: 'none',

    price: 3000,
    weight: 5,

    description:
      'This manual contains all the information and magical power required to create a junk golem. ' +
      'It grants the reader the Craft Construct feat (if she does not already have it), provides a +5 ' +
      'competence bonus on Craft checks related to creating the golem, and contains the spells false life, ' +
      'lesser geas, minor creation, and rusting grasp, usable only for the golem\'s construction. ' +
      'The manual is consumed when the golem is completed.',

    construction: {
      feats: ['Craft Construct'],
      spells: ['false life', 'lesser geas', 'minor creation', 'rusting grasp'],
      cost: 1500,
    },
    physicalStats: { hardness: 0, hitPoints: 5, breakDC: 10 },
    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.golem_manual_craft_construct',
        value: 0,
        source: 'Book, Golem Manual (Junk)',
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.craft',
        value: 5,
        source: 'Book, Golem Manual (Junk)',
        condition: {
          type: 'custom',
          params: { activity: 'golem_construction' },
          description: 'only for crafting junk golem',
        },
      },
    ],
  },

  // Lead Golem Manual
  {
    id: 'wondrous-book-golem-manual-lead',
    name: 'Book, Golem Manual (Lead)',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [
      { strength: AuraStrength.STRONG, school: MagicSchool.ABJURATION },
      { strength: AuraStrength.STRONG, school: MagicSchool.CONJURATION },
      { strength: AuraStrength.STRONG, school: MagicSchool.ENCHANTMENT },
    ],
    casterLevel: 13,
    slot: 'none',

    price: 20000,
    weight: 5,

    description:
      'This manual contains all the information and magical power required to create a lead golem. ' +
      'It grants the reader the Craft Construct feat (if she does not already have it), provides a +5 ' +
      'competence bonus on Craft checks related to creating the golem, and contains the spells cloudkill, ' +
      'geas/quest, limited wish, and sequester, usable only for the golem\'s construction. ' +
      'The manual is consumed when the golem is completed.',

    construction: {
      feats: ['Craft Construct'],
      spells: ['cloudkill', 'geas/quest', 'limited wish', 'sequester'],
      cost: 10000,
    },
    physicalStats: { hardness: 0, hitPoints: 5, breakDC: 10 },
    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.golem_manual_craft_construct',
        value: 0,
        source: 'Book, Golem Manual (Lead)',
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.craft',
        value: 5,
        source: 'Book, Golem Manual (Lead)',
        condition: {
          type: 'custom',
          params: { activity: 'golem_construction' },
          description: 'only for crafting lead golem',
        },
      },
    ],
  },

  // Mithral Golem Manual
  {
    id: 'wondrous-book-golem-manual-mithral',
    name: 'Book, Golem Manual (Mithral)',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [
      { strength: AuraStrength.STRONG, school: MagicSchool.ABJURATION },
      { strength: AuraStrength.STRONG, school: MagicSchool.ENCHANTMENT },
      { strength: AuraStrength.STRONG, school: MagicSchool.EVOCATION },
      { strength: AuraStrength.STRONG, school: MagicSchool.TRANSMUTATION },
    ],
    casterLevel: 16,
    slot: 'none',

    price: 80000,
    weight: 5,

    description:
      'This manual contains all the information and magical power required to create a mithral golem. ' +
      'It grants the reader the Craft Construct feat (if she does not already have it), provides a +5 ' +
      'competence bonus on Craft checks related to creating the golem, and contains the spells cloudkill, ' +
      'geas/quest, limited wish, and polymorph any object, usable only for the golem\'s construction. ' +
      'The manual is consumed when the golem is completed.',

    construction: {
      feats: ['Craft Construct'],
      spells: ['cloudkill', 'geas/quest', 'limited wish', 'polymorph any object'],
      cost: 40000,
    },
    physicalStats: { hardness: 0, hitPoints: 5, breakDC: 10 },
    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.golem_manual_craft_construct',
        value: 0,
        source: 'Book, Golem Manual (Mithral)',
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.craft',
        value: 5,
        source: 'Book, Golem Manual (Mithral)',
        condition: {
          type: 'custom',
          params: { activity: 'golem_construction' },
          description: 'only for crafting mithral golem',
        },
      },
    ],
  },

  // Obsidian Golem Manual
  {
    id: 'wondrous-book-golem-manual-obsidian',
    name: 'Book, Golem Manual (Obsidian)',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [
      { strength: AuraStrength.STRONG, school: MagicSchool.ENCHANTMENT },
      { strength: AuraStrength.STRONG, school: MagicSchool.EVOCATION },
    ],
    casterLevel: 15,
    slot: 'none',

    price: 40000,
    weight: 5,

    description:
      'This manual contains all the information and magical power required to create an obsidian golem. ' +
      'It grants the reader the Craft Construct feat (if she does not already have it), provides a +5 ' +
      'competence bonus on Craft checks related to creating the golem, and contains the spells geas/quest, ' +
      'limited wish, and volcanic storm, usable only for the golem\'s construction. ' +
      'The manual is consumed when the golem is completed.',

    construction: {
      feats: ['Craft Construct'],
      spells: ['geas/quest', 'limited wish', 'volcanic storm'],
      cost: 20000,
    },
    physicalStats: { hardness: 0, hitPoints: 5, breakDC: 10 },
    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.golem_manual_craft_construct',
        value: 0,
        source: 'Book, Golem Manual (Obsidian)',
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.craft',
        value: 5,
        source: 'Book, Golem Manual (Obsidian)',
        condition: {
          type: 'custom',
          params: { activity: 'golem_construction' },
          description: 'only for crafting obsidian golem',
        },
      },
    ],
  },

  // Quintessence Golem Manual
  {
    id: 'wondrous-book-golem-manual-quintessence',
    name: 'Book, Golem Manual (Quintessence)',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [
      { strength: AuraStrength.STRONG, school: MagicSchool.CONJURATION },
      { strength: AuraStrength.STRONG, school: MagicSchool.ENCHANTMENT },
      { strength: AuraStrength.STRONG, school: MagicSchool.NECROMANCY },
    ],
    casterLevel: 20,
    slot: 'none',

    price: 150000,
    weight: 5,

    description:
      'This manual contains all the information and magical power required to create a quintessence golem. ' +
      'It grants the reader the Craft Construct feat (if she does not already have it), provides a +5 ' +
      'competence bonus on Craft checks related to creating the golem, and contains the spells energy drain, ' +
      'geas/quest, trap the soul, and wish, usable only for the golem\'s construction. ' +
      'The manual is consumed when the golem is completed.',

    construction: {
      feats: ['Craft Construct'],
      spells: ['energy drain', 'geas/quest', 'trap the soul', 'wish'],
      cost: 75000,
    },
    physicalStats: { hardness: 0, hitPoints: 5, breakDC: 10 },
    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.golem_manual_craft_construct',
        value: 0,
        source: 'Book, Golem Manual (Quintessence)',
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.craft',
        value: 5,
        source: 'Book, Golem Manual (Quintessence)',
        condition: {
          type: 'custom',
          params: { activity: 'golem_construction' },
          description: 'only for crafting quintessence golem',
        },
      },
    ],
  },

  // Sand Golem Manual
  {
    id: 'wondrous-book-golem-manual-sand',
    name: 'Book, Golem Manual (Sand)',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [
      { strength: AuraStrength.STRONG, school: MagicSchool.ENCHANTMENT },
      { strength: AuraStrength.STRONG, school: MagicSchool.TRANSMUTATION },
    ],
    casterLevel: 12,
    slot: 'none',

    price: 15000,
    weight: 5,

    description:
      'This manual contains all the information and magical power required to create a sand golem. ' +
      'It grants the reader the Craft Construct feat (if she does not already have it), provides a +5 ' +
      'competence bonus on Craft checks related to creating the golem, and contains the spells geas/quest, ' +
      'limited wish, and move earth, usable only for the golem\'s construction. ' +
      'The manual is consumed when the golem is completed.',

    construction: {
      feats: ['Craft Construct'],
      spells: ['geas/quest', 'limited wish', 'move earth'],
      cost: 7500,
    },
    physicalStats: { hardness: 0, hitPoints: 5, breakDC: 10 },
    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.golem_manual_craft_construct',
        value: 0,
        source: 'Book, Golem Manual (Sand)',
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.craft',
        value: 5,
        source: 'Book, Golem Manual (Sand)',
        condition: {
          type: 'custom',
          params: { activity: 'golem_construction' },
          description: 'only for crafting sand golem',
        },
      },
    ],
  },

  // Stone Golem Manual
  {
    id: 'wondrous-book-golem-manual-stone',
    name: 'Book, Golem Manual (Stone)',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [
      { strength: AuraStrength.STRONG, school: MagicSchool.ABJURATION },
      { strength: AuraStrength.STRONG, school: MagicSchool.ENCHANTMENT },
    ],
    casterLevel: 14,
    slot: 'none',

    price: 22000,
    weight: 5,

    description:
      'This manual contains all the information and magical power required to create a stone golem. ' +
      'It grants the reader the Craft Construct feat (if she does not already have it), provides a +5 ' +
      'competence bonus on Craft checks related to creating the golem, and contains the spells antimagic ' +
      'field, geas/quest, limited wish, and symbol of stunning, usable only for the golem\'s construction. ' +
      'The manual is consumed when the golem is completed.',

    construction: {
      feats: ['Craft Construct'],
      spells: ['antimagic field', 'geas/quest', 'limited wish', 'symbol of stunning'],
      cost: 11000,
    },
    physicalStats: { hardness: 0, hitPoints: 5, breakDC: 10 },
    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.golem_manual_craft_construct',
        value: 0,
        source: 'Book, Golem Manual (Stone)',
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.craft',
        value: 5,
        source: 'Book, Golem Manual (Stone)',
        condition: {
          type: 'custom',
          params: { activity: 'golem_construction' },
          description: 'only for crafting stone golem',
        },
      },
    ],
  },

  // Stone Guardian Golem Manual
  {
    id: 'wondrous-book-golem-manual-stone-guardian',
    name: 'Book, Golem Manual (Stone Guardian)',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [
      { strength: AuraStrength.STRONG, school: MagicSchool.ABJURATION },
      { strength: AuraStrength.STRONG, school: MagicSchool.ENCHANTMENT },
    ],
    casterLevel: 14,
    slot: 'none',

    price: 44000,
    weight: 5,

    description:
      'This manual contains all the information and magical power required to create a stone guardian golem. ' +
      'It grants the reader the Craft Construct feat (if she does not already have it), provides a +5 ' +
      'competence bonus on Craft checks related to creating the golem, and contains the spells antimagic field, ' +
      'discern location, geas/quest, limited wish, shield other, and symbol of stunning, usable only for ' +
      'the golem\'s construction. The manual is consumed when the golem is completed.',

    construction: {
      feats: ['Craft Construct'],
      spells: [
        'antimagic field',
        'discern location',
        'geas/quest',
        'limited wish',
        'shield other',
        'symbol of stunning',
      ],
      cost: 22000,
    },
    physicalStats: { hardness: 0, hitPoints: 5, breakDC: 10 },
    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.golem_manual_craft_construct',
        value: 0,
        source: 'Book, Golem Manual (Stone Guardian)',
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.craft',
        value: 5,
        source: 'Book, Golem Manual (Stone Guardian)',
        condition: {
          type: 'custom',
          params: { activity: 'golem_construction' },
          description: 'only for crafting stone guardian golem',
        },
      },
    ],
  },

  // Viridium Golem Manual
  {
    id: 'wondrous-book-golem-manual-viridium',
    name: 'Book, Golem Manual (Viridium)',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [
      { strength: AuraStrength.STRONG, school: MagicSchool.ENCHANTMENT },
      { strength: AuraStrength.STRONG, school: MagicSchool.NECROMANCY },
    ],
    casterLevel: 18,
    slot: 'none',

    price: 75000,
    weight: 5,

    description:
      'This manual contains all the information and magical power required to create a viridium golem. ' +
      'It grants the reader the Craft Construct feat (if she does not already have it), provides a +5 ' +
      'competence bonus on Craft checks related to creating the golem, and contains the spells contagion, ' +
      'geas/quest, horrid wilting, poison, and wish, usable only for the golem\'s construction. ' +
      'The manual is consumed when the golem is completed.',

    construction: {
      feats: ['Craft Construct'],
      spells: ['contagion', 'geas/quest', 'horrid wilting', 'poison', 'wish'],
      cost: 37500,
    },
    physicalStats: { hardness: 0, hitPoints: 5, breakDC: 10 },
    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.golem_manual_craft_construct',
        value: 0,
        source: 'Book, Golem Manual (Viridium)',
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.craft',
        value: 5,
        source: 'Book, Golem Manual (Viridium)',
        condition: {
          type: 'custom',
          params: { activity: 'golem_construction' },
          description: 'only for crafting viridium golem',
        },
      },
    ],
  },

  // Wax Golem Manual
  {
    id: 'wondrous-book-golem-manual-wax',
    name: 'Book, Golem Manual (Wax)',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [
      { strength: AuraStrength.MODERATE, school: MagicSchool.ENCHANTMENT },
      { strength: AuraStrength.MODERATE, school: MagicSchool.ILLUSION },
      { strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION },
    ],
    casterLevel: 9,
    slot: 'none',

    price: 4000,
    weight: 5,

    description:
      'This manual contains all the information and magical power required to create a wax golem. ' +
      'It grants the reader the Craft Construct feat (if she does not already have it), provides a +5 ' +
      'competence bonus on Craft checks related to creating the golem, and contains the spells animate objects, ' +
      'geas/quest, limited wish, and silent image, usable only for the golem\'s construction. ' +
      'The manual is consumed when the golem is completed.',

    construction: {
      feats: ['Craft Construct'],
      spells: ['animate objects', 'geas/quest', 'limited wish', 'silent image'],
      cost: 2000,
    },
    physicalStats: { hardness: 0, hitPoints: 5, breakDC: 10 },
    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.golem_manual_craft_construct',
        value: 0,
        source: 'Book, Golem Manual (Wax)',
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.craft',
        value: 5,
        source: 'Book, Golem Manual (Wax)',
        condition: {
          type: 'custom',
          params: { activity: 'golem_construction' },
          description: 'only for crafting wax golem',
        },
      },
    ],
  },

  // Wood Golem Manual
  {
    id: 'wondrous-book-golem-manual-wood',
    name: 'Book, Golem Manual (Wood)',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [
      { strength: AuraStrength.STRONG, school: MagicSchool.ABJURATION },
      { strength: AuraStrength.STRONG, school: MagicSchool.ENCHANTMENT },
      { strength: AuraStrength.STRONG, school: MagicSchool.TRANSMUTATION },
    ],
    casterLevel: 12,
    slot: 'none',

    price: 6000,
    weight: 5,

    description:
      'This manual contains all the information and magical power required to create a wood golem. ' +
      'It grants the reader the Craft Construct feat (if she does not already have it), provides a +5 ' +
      'competence bonus on Craft checks related to creating the golem, and contains the spells alarm, ' +
      'animate objects, cat\'s grace, geas/quest, and limited wish, usable only for the golem\'s construction. ' +
      'The manual is consumed when the golem is completed.',

    construction: {
      feats: ['Craft Construct'],
      spells: ['alarm', 'animate objects', "cat's grace", 'geas/quest', 'limited wish'],
      cost: 3000,
    },
    physicalStats: { hardness: 0, hitPoints: 5, breakDC: 10 },
    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.golem_manual_craft_construct',
        value: 0,
        source: 'Book, Golem Manual (Wood)',
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.craft',
        value: 5,
        source: 'Book, Golem Manual (Wood)',
        condition: {
          type: 'custom',
          params: { activity: 'golem_construction' },
          description: 'only for crafting wood golem',
        },
      },
    ],
  },

  // ---- 189: Book, Manual of Bodily Health (+1 through +5) ---------------------
  {
    id: 'wondrous-book-manual-bodily-health-1',
    name: 'Book, Manual of Bodily Health +1',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.EVOCATION }],
    casterLevel: 17,
    slot: 'none',

    price: 27500,
    weight: 5,

    description:
      'This thick tome contains exercise and health regimens infused with powerful magic. Anyone who ' +
      'reads this book — a process requiring 48 hours over a minimum of 6 days — gains a +1 inherent ' +
      'bonus to Constitution. The magical properties of the book disappear after it is read, leaving ' +
      'only a mundane text.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['wish', 'miracle'],
      cost: 26250,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 5,
      breakDC: 10,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'bonus',
        bonusType: 'inherent',
        target: 'ability.con',
        value: 1,
        source: 'Book, Manual of Bodily Health +1',
      },
    ],
  },

  {
    id: 'wondrous-book-manual-bodily-health-2',
    name: 'Book, Manual of Bodily Health +2',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.EVOCATION }],
    casterLevel: 17,
    slot: 'none',

    price: 55000,
    weight: 5,

    description:
      'This thick tome contains exercise and health regimens infused with powerful magic. Anyone who ' +
      'reads this book — a process requiring 48 hours over a minimum of 6 days — gains a +2 inherent ' +
      'bonus to Constitution. The magical properties of the book disappear after it is read, leaving ' +
      'only a mundane text.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['wish', 'miracle'],
      cost: 52500,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 5,
      breakDC: 10,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'bonus',
        bonusType: 'inherent',
        target: 'ability.con',
        value: 2,
        source: 'Book, Manual of Bodily Health +2',
      },
    ],
  },

  {
    id: 'wondrous-book-manual-bodily-health-3',
    name: 'Book, Manual of Bodily Health +3',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.EVOCATION }],
    casterLevel: 17,
    slot: 'none',

    price: 82500,
    weight: 5,

    description:
      'This thick tome contains exercise and health regimens infused with powerful magic. Anyone who ' +
      'reads this book — a process requiring 48 hours over a minimum of 6 days — gains a +3 inherent ' +
      'bonus to Constitution. The magical properties of the book disappear after it is read, leaving ' +
      'only a mundane text.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['wish', 'miracle'],
      cost: 78750,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 5,
      breakDC: 10,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'bonus',
        bonusType: 'inherent',
        target: 'ability.con',
        value: 3,
        source: 'Book, Manual of Bodily Health +3',
      },
    ],
  },

  {
    id: 'wondrous-book-manual-bodily-health-4',
    name: 'Book, Manual of Bodily Health +4',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.EVOCATION }],
    casterLevel: 17,
    slot: 'none',

    price: 110000,
    weight: 5,

    description:
      'This thick tome contains exercise and health regimens infused with powerful magic. Anyone who ' +
      'reads this book — a process requiring 48 hours over a minimum of 6 days — gains a +4 inherent ' +
      'bonus to Constitution. The magical properties of the book disappear after it is read, leaving ' +
      'only a mundane text.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['wish', 'miracle'],
      cost: 105000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 5,
      breakDC: 10,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'bonus',
        bonusType: 'inherent',
        target: 'ability.con',
        value: 4,
        source: 'Book, Manual of Bodily Health +4',
      },
    ],
  },

  {
    id: 'wondrous-book-manual-bodily-health-5',
    name: 'Book, Manual of Bodily Health +5',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.EVOCATION }],
    casterLevel: 17,
    slot: 'none',

    price: 137500,
    weight: 5,

    description:
      'This thick tome contains exercise and health regimens infused with powerful magic. Anyone who ' +
      'reads this book — a process requiring 48 hours over a minimum of 6 days — gains a +5 inherent ' +
      'bonus to Constitution. The magical properties of the book disappear after it is read, leaving ' +
      'only a mundane text.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['wish', 'miracle'],
      cost: 131250,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 5,
      breakDC: 10,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'bonus',
        bonusType: 'inherent',
        target: 'ability.con',
        value: 5,
        source: 'Book, Manual of Bodily Health +5',
      },
    ],
  },

  // ---- 190: Book, Manual of Calm Reflection -----------------------------------
  {
    id: 'wondrous-book-manual-calm-reflection',
    name: 'Book, Manual of Calm Reflection',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'none',

    price: 4000,
    weight: 2,

    description:
      'This 30-chapter tome helps readers center their spirit. After spending 1 hour reading this book, ' +
      'the reader gains a +1 bonus on saving throws against mind-affecting spells and effects for the ' +
      'remainder of that day. If the reader worships a deity associated with the book, this bonus ' +
      'increases to +2.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['aid'],
      cost: 2000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 2,
      breakDC: 10,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'bonus',
        bonusType: 'untyped',
        target: 'save.will',
        value: 1,
        source: 'Book, Manual of Calm Reflection',
        condition: {
          type: 'custom',
          params: { descriptor: 'mind_affecting' },
          description: 'vs. mind-affecting spells and effects; +2 if worshipping associated deity',
        },
      },
    ],
  },

  // ---- 191: Book, Manual of Gainful Exercise (+1 through +5) ------------------
  {
    id: 'wondrous-book-manual-gainful-exercise-1',
    name: 'Book, Manual of Gainful Exercise +1',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.EVOCATION }],
    casterLevel: 17,
    slot: 'none',

    price: 27500,
    weight: 5,

    description:
      'This thick volume contains exercise routines and nutritional guidance infused with magical ' +
      'properties. Anyone who reads this book — a process requiring 48 hours over a minimum of 6 days — ' +
      'gains a +1 inherent bonus to Strength. The magical properties of the book disappear after it is ' +
      'read, leaving only a mundane text.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['wish', 'miracle'],
      cost: 26250,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 5,
      breakDC: 10,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'bonus',
        bonusType: 'inherent',
        target: 'ability.str',
        value: 1,
        source: 'Book, Manual of Gainful Exercise +1',
      },
    ],
  },

  {
    id: 'wondrous-book-manual-gainful-exercise-2',
    name: 'Book, Manual of Gainful Exercise +2',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.EVOCATION }],
    casterLevel: 17,
    slot: 'none',

    price: 55000,
    weight: 5,

    description:
      'This thick volume contains exercise routines and nutritional guidance infused with magical ' +
      'properties. Anyone who reads this book — a process requiring 48 hours over a minimum of 6 days — ' +
      'gains a +2 inherent bonus to Strength. The magical properties of the book disappear after it is ' +
      'read, leaving only a mundane text.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['wish', 'miracle'],
      cost: 52500,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 5,
      breakDC: 10,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'bonus',
        bonusType: 'inherent',
        target: 'ability.str',
        value: 2,
        source: 'Book, Manual of Gainful Exercise +2',
      },
    ],
  },

  {
    id: 'wondrous-book-manual-gainful-exercise-3',
    name: 'Book, Manual of Gainful Exercise +3',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.EVOCATION }],
    casterLevel: 17,
    slot: 'none',

    price: 82500,
    weight: 5,

    description:
      'This thick volume contains exercise routines and nutritional guidance infused with magical ' +
      'properties. Anyone who reads this book — a process requiring 48 hours over a minimum of 6 days — ' +
      'gains a +3 inherent bonus to Strength. The magical properties of the book disappear after it is ' +
      'read, leaving only a mundane text.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['wish', 'miracle'],
      cost: 78750,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 5,
      breakDC: 10,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'bonus',
        bonusType: 'inherent',
        target: 'ability.str',
        value: 3,
        source: 'Book, Manual of Gainful Exercise +3',
      },
    ],
  },

  {
    id: 'wondrous-book-manual-gainful-exercise-4',
    name: 'Book, Manual of Gainful Exercise +4',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.EVOCATION }],
    casterLevel: 17,
    slot: 'none',

    price: 110000,
    weight: 5,

    description:
      'This thick volume contains exercise routines and nutritional guidance infused with magical ' +
      'properties. Anyone who reads this book — a process requiring 48 hours over a minimum of 6 days — ' +
      'gains a +4 inherent bonus to Strength. The magical properties of the book disappear after it is ' +
      'read, leaving only a mundane text.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['wish', 'miracle'],
      cost: 105000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 5,
      breakDC: 10,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'bonus',
        bonusType: 'inherent',
        target: 'ability.str',
        value: 4,
        source: 'Book, Manual of Gainful Exercise +4',
      },
    ],
  },

  {
    id: 'wondrous-book-manual-gainful-exercise-5',
    name: 'Book, Manual of Gainful Exercise +5',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.EVOCATION }],
    casterLevel: 17,
    slot: 'none',

    price: 137500,
    weight: 5,

    description:
      'This thick volume contains exercise routines and nutritional guidance infused with magical ' +
      'properties. Anyone who reads this book — a process requiring 48 hours over a minimum of 6 days — ' +
      'gains a +5 inherent bonus to Strength. The magical properties of the book disappear after it is ' +
      'read, leaving only a mundane text.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['wish', 'miracle'],
      cost: 131250,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 5,
      breakDC: 10,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'bonus',
        bonusType: 'inherent',
        target: 'ability.str',
        value: 5,
        source: 'Book, Manual of Gainful Exercise +5',
      },
    ],
  },

  // ---- 192: Book, Manual of Quickness of Action (+1 through +5) ---------------
  {
    id: 'wondrous-book-manual-quickness-action-1',
    name: 'Book, Manual of Quickness of Action +1',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.EVOCATION }],
    casterLevel: 17,
    slot: 'none',

    price: 27500,
    weight: 5,

    description:
      'This tome contains tips for improving speed and reaction time, infused with powerful magic. ' +
      'Anyone who reads this book — a process requiring 48 hours over a minimum of 6 days — gains a ' +
      '+1 inherent bonus to Dexterity. The magical properties of the book disappear after it is read, ' +
      'leaving only a mundane text.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['wish', 'miracle'],
      cost: 26250,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 5,
      breakDC: 10,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'bonus',
        bonusType: 'inherent',
        target: 'ability.dex',
        value: 1,
        source: 'Book, Manual of Quickness of Action +1',
      },
    ],
  },

  {
    id: 'wondrous-book-manual-quickness-action-2',
    name: 'Book, Manual of Quickness of Action +2',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.EVOCATION }],
    casterLevel: 17,
    slot: 'none',

    price: 55000,
    weight: 5,

    description:
      'This tome contains tips for improving speed and reaction time, infused with powerful magic. ' +
      'Anyone who reads this book — a process requiring 48 hours over a minimum of 6 days — gains a ' +
      '+2 inherent bonus to Dexterity. The magical properties of the book disappear after it is read, ' +
      'leaving only a mundane text.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['wish', 'miracle'],
      cost: 52500,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 5,
      breakDC: 10,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'bonus',
        bonusType: 'inherent',
        target: 'ability.dex',
        value: 2,
        source: 'Book, Manual of Quickness of Action +2',
      },
    ],
  },

  {
    id: 'wondrous-book-manual-quickness-action-3',
    name: 'Book, Manual of Quickness of Action +3',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.EVOCATION }],
    casterLevel: 17,
    slot: 'none',

    price: 82500,
    weight: 5,

    description:
      'This tome contains tips for improving speed and reaction time, infused with powerful magic. ' +
      'Anyone who reads this book — a process requiring 48 hours over a minimum of 6 days — gains a ' +
      '+3 inherent bonus to Dexterity. The magical properties of the book disappear after it is read, ' +
      'leaving only a mundane text.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['wish', 'miracle'],
      cost: 78750,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 5,
      breakDC: 10,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'bonus',
        bonusType: 'inherent',
        target: 'ability.dex',
        value: 3,
        source: 'Book, Manual of Quickness of Action +3',
      },
    ],
  },

  {
    id: 'wondrous-book-manual-quickness-action-4',
    name: 'Book, Manual of Quickness of Action +4',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.EVOCATION }],
    casterLevel: 17,
    slot: 'none',

    price: 110000,
    weight: 5,

    description:
      'This tome contains tips for improving speed and reaction time, infused with powerful magic. ' +
      'Anyone who reads this book — a process requiring 48 hours over a minimum of 6 days — gains a ' +
      '+4 inherent bonus to Dexterity. The magical properties of the book disappear after it is read, ' +
      'leaving only a mundane text.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['wish', 'miracle'],
      cost: 105000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 5,
      breakDC: 10,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'bonus',
        bonusType: 'inherent',
        target: 'ability.dex',
        value: 4,
        source: 'Book, Manual of Quickness of Action +4',
      },
    ],
  },

  {
    id: 'wondrous-book-manual-quickness-action-5',
    name: 'Book, Manual of Quickness of Action +5',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.EVOCATION }],
    casterLevel: 17,
    slot: 'none',

    price: 137500,
    weight: 5,

    description:
      'This tome contains tips for improving speed and reaction time, infused with powerful magic. ' +
      'Anyone who reads this book — a process requiring 48 hours over a minimum of 6 days — gains a ' +
      '+5 inherent bonus to Dexterity. The magical properties of the book disappear after it is read, ' +
      'leaving only a mundane text.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['wish', 'miracle'],
      cost: 131250,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 5,
      breakDC: 10,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'bonus',
        bonusType: 'inherent',
        target: 'ability.dex',
        value: 5,
        source: 'Book, Manual of Quickness of Action +5',
      },
    ],
  },

  // ---- 193: Book, Monster Almanac ----------------------------------------------
  {
    id: 'wondrous-book-monster-almanac',
    name: 'Book, Monster Almanac',
    category: 'wondrous',
    source: 'Horror Adventures',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 3,
    slot: 'none',

    price: 4000,
    weight: 0,

    description:
      'This enchanted sketchbook contains approximately 100 pages featuring notes and illustrations of ' +
      'various monsters. When a user concentrates on a specific page, the text and pictures animate to ' +
      'reveal more details about the creature. The item requires 10 minutes of study focused on a ' +
      'particular monster type to provide benefits. Users trained in the relevant Knowledge skill receive ' +
      'a +2 circumstance bonus on checks to identify creatures. Untrained users may attempt Knowledge ' +
      'checks to identify creatures with DC 15 or lower, though without the bonus.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['augury', 'silent image'],
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
        type: 'bonus',
        bonusType: 'circumstance',
        target: 'skill.knowledge_arcana',
        value: 2,
        source: 'Book, Monster Almanac',
        condition: {
          type: 'custom',
          params: { activity: 'identify_creature', trained: true },
          description: 'trained users only, after 10 minutes of study on specific monster type',
        },
      },
      {
        type: 'special',
        target: 'special.monster_almanac_untrained_identify',
        value: 0,
        source: 'Book, Monster Almanac',
      },
    ],
  },

  // ---- 194: Book, Monster Almanac, Greater ------------------------------------
  {
    id: 'wondrous-book-monster-almanac-greater',
    name: 'Book, Monster Almanac, Greater',
    category: 'wondrous',
    source: 'Horror Adventures',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.DIVINATION }],
    casterLevel: 11,
    slot: 'none',

    price: 20000,
    weight: 4,

    description:
      'This hefty tome contains detailed illustrations and descriptions of creatures from the Material ' +
      'Plane and other planes. The book magically expands its pages when opened, despite appearing slim ' +
      'when closed. After 10 minutes of research on a specific monster type, users trained in the ' +
      'appropriate Knowledge skill gain a +5 circumstance bonus on checks to identify creatures. ' +
      'Untrained users can attempt Knowledge checks to identify creatures regardless of DC, without the ' +
      'bonus. Spending 24 hours researching a specific creature type allows the user to treat the result ' +
      'of an identification check as 25, functioning like consulting an extensive library.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['legend lore', 'major image'],
      cost: 10000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 5,
      breakDC: 10,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'bonus',
        bonusType: 'circumstance',
        target: 'skill.knowledge_arcana',
        value: 5,
        source: 'Book, Monster Almanac, Greater',
        condition: {
          type: 'custom',
          params: { activity: 'identify_creature', trained: true },
          description: 'trained users only, after 10 minutes of study on specific monster type',
        },
      },
      {
        type: 'special',
        target: 'special.monster_almanac_greater_untrained_identify',
        value: 0,
        source: 'Book, Monster Almanac, Greater',
      },
      {
        type: 'special',
        target: 'special.monster_almanac_greater_result_25',
        value: 24,
        source: 'Book, Monster Almanac, Greater',
      },
    ],
  },

  // ---- 195: Book, Tome of Clear Thought (+1 through +5) -----------------------
  {
    id: 'wondrous-book-tome-clear-thought-1',
    name: 'Book, Tome of Clear Thought +1',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.EVOCATION }],
    casterLevel: 17,
    slot: 'none',

    price: 27500,
    weight: 5,

    description:
      'This tome provides tips for improving memory and logical thinking, infused with powerful magic. ' +
      'Anyone who reads this book — a process requiring 48 hours over a minimum of 6 days — gains a ' +
      '+1 inherent bonus to Intelligence. The magical properties of the book disappear after it is read, ' +
      'leaving only a mundane text.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['wish', 'miracle'],
      cost: 26250,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 5,
      breakDC: 10,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'bonus',
        bonusType: 'inherent',
        target: 'ability.int',
        value: 1,
        source: 'Book, Tome of Clear Thought +1',
      },
    ],
  },

  {
    id: 'wondrous-book-tome-clear-thought-2',
    name: 'Book, Tome of Clear Thought +2',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.EVOCATION }],
    casterLevel: 17,
    slot: 'none',

    price: 55000,
    weight: 5,

    description:
      'This tome provides tips for improving memory and logical thinking, infused with powerful magic. ' +
      'Anyone who reads this book — a process requiring 48 hours over a minimum of 6 days — gains a ' +
      '+2 inherent bonus to Intelligence. The magical properties of the book disappear after it is read, ' +
      'leaving only a mundane text.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['wish', 'miracle'],
      cost: 52500,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 5,
      breakDC: 10,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'bonus',
        bonusType: 'inherent',
        target: 'ability.int',
        value: 2,
        source: 'Book, Tome of Clear Thought +2',
      },
    ],
  },

  {
    id: 'wondrous-book-tome-clear-thought-3',
    name: 'Book, Tome of Clear Thought +3',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.EVOCATION }],
    casterLevel: 17,
    slot: 'none',

    price: 82500,
    weight: 5,

    description:
      'This tome provides tips for improving memory and logical thinking, infused with powerful magic. ' +
      'Anyone who reads this book — a process requiring 48 hours over a minimum of 6 days — gains a ' +
      '+3 inherent bonus to Intelligence. The magical properties of the book disappear after it is read, ' +
      'leaving only a mundane text.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['wish', 'miracle'],
      cost: 78750,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 5,
      breakDC: 10,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'bonus',
        bonusType: 'inherent',
        target: 'ability.int',
        value: 3,
        source: 'Book, Tome of Clear Thought +3',
      },
    ],
  },

  {
    id: 'wondrous-book-tome-clear-thought-4',
    name: 'Book, Tome of Clear Thought +4',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.EVOCATION }],
    casterLevel: 17,
    slot: 'none',

    price: 110000,
    weight: 5,

    description:
      'This tome provides tips for improving memory and logical thinking, infused with powerful magic. ' +
      'Anyone who reads this book — a process requiring 48 hours over a minimum of 6 days — gains a ' +
      '+4 inherent bonus to Intelligence. The magical properties of the book disappear after it is read, ' +
      'leaving only a mundane text.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['wish', 'miracle'],
      cost: 105000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 5,
      breakDC: 10,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'bonus',
        bonusType: 'inherent',
        target: 'ability.int',
        value: 4,
        source: 'Book, Tome of Clear Thought +4',
      },
    ],
  },

  {
    id: 'wondrous-book-tome-clear-thought-5',
    name: 'Book, Tome of Clear Thought +5',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.EVOCATION }],
    casterLevel: 17,
    slot: 'none',

    price: 137500,
    weight: 5,

    description:
      'This tome provides tips for improving memory and logical thinking, infused with powerful magic. ' +
      'Anyone who reads this book — a process requiring 48 hours over a minimum of 6 days — gains a ' +
      '+5 inherent bonus to Intelligence. The magical properties of the book disappear after it is read, ' +
      'leaving only a mundane text.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['wish', 'miracle'],
      cost: 131250,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 5,
      breakDC: 10,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'bonus',
        bonusType: 'inherent',
        target: 'ability.int',
        value: 5,
        source: 'Book, Tome of Clear Thought +5',
      },
    ],
  },

  // ---- 196: Book, Tome of Leadership and Influence (+1 through +5) ------------
  {
    id: 'wondrous-book-tome-leadership-influence-1',
    name: 'Book, Tome of Leadership and Influence +1',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.EVOCATION }],
    casterLevel: 17,
    slot: 'none',

    price: 27500,
    weight: 5,

    description:
      'This tome provides tips for improving social grace and personal magnetism, infused with powerful ' +
      'magic. Anyone who reads this book — a process requiring 48 hours over a minimum of 6 days — gains ' +
      'a +1 inherent bonus to Charisma. The magical properties of the book disappear after it is read, ' +
      'leaving only a mundane text.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['wish', 'miracle'],
      cost: 26250,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 5,
      breakDC: 10,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'bonus',
        bonusType: 'inherent',
        target: 'ability.cha',
        value: 1,
        source: 'Book, Tome of Leadership and Influence +1',
      },
    ],
  },

  {
    id: 'wondrous-book-tome-leadership-influence-2',
    name: 'Book, Tome of Leadership and Influence +2',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.EVOCATION }],
    casterLevel: 17,
    slot: 'none',

    price: 55000,
    weight: 5,

    description:
      'This tome provides tips for improving social grace and personal magnetism, infused with powerful ' +
      'magic. Anyone who reads this book — a process requiring 48 hours over a minimum of 6 days — gains ' +
      'a +2 inherent bonus to Charisma. The magical properties of the book disappear after it is read, ' +
      'leaving only a mundane text.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['wish', 'miracle'],
      cost: 52500,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 5,
      breakDC: 10,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'bonus',
        bonusType: 'inherent',
        target: 'ability.cha',
        value: 2,
        source: 'Book, Tome of Leadership and Influence +2',
      },
    ],
  },

  {
    id: 'wondrous-book-tome-leadership-influence-3',
    name: 'Book, Tome of Leadership and Influence +3',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.EVOCATION }],
    casterLevel: 17,
    slot: 'none',

    price: 82500,
    weight: 5,

    description:
      'This tome provides tips for improving social grace and personal magnetism, infused with powerful ' +
      'magic. Anyone who reads this book — a process requiring 48 hours over a minimum of 6 days — gains ' +
      'a +3 inherent bonus to Charisma. The magical properties of the book disappear after it is read, ' +
      'leaving only a mundane text.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['wish', 'miracle'],
      cost: 78750,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 5,
      breakDC: 10,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'bonus',
        bonusType: 'inherent',
        target: 'ability.cha',
        value: 3,
        source: 'Book, Tome of Leadership and Influence +3',
      },
    ],
  },

  {
    id: 'wondrous-book-tome-leadership-influence-4',
    name: 'Book, Tome of Leadership and Influence +4',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.EVOCATION }],
    casterLevel: 17,
    slot: 'none',

    price: 110000,
    weight: 5,

    description:
      'This tome provides tips for improving social grace and personal magnetism, infused with powerful ' +
      'magic. Anyone who reads this book — a process requiring 48 hours over a minimum of 6 days — gains ' +
      'a +4 inherent bonus to Charisma. The magical properties of the book disappear after it is read, ' +
      'leaving only a mundane text.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['wish', 'miracle'],
      cost: 105000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 5,
      breakDC: 10,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'bonus',
        bonusType: 'inherent',
        target: 'ability.cha',
        value: 4,
        source: 'Book, Tome of Leadership and Influence +4',
      },
    ],
  },

  {
    id: 'wondrous-book-tome-leadership-influence-5',
    name: 'Book, Tome of Leadership and Influence +5',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.EVOCATION }],
    casterLevel: 17,
    slot: 'none',

    price: 137500,
    weight: 5,

    description:
      'This tome provides tips for improving social grace and personal magnetism, infused with powerful ' +
      'magic. Anyone who reads this book — a process requiring 48 hours over a minimum of 6 days — gains ' +
      'a +5 inherent bonus to Charisma. The magical properties of the book disappear after it is read, ' +
      'leaving only a mundane text.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['wish', 'miracle'],
      cost: 131250,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 5,
      breakDC: 10,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'bonus',
        bonusType: 'inherent',
        target: 'ability.cha',
        value: 5,
        source: 'Book, Tome of Leadership and Influence +5',
      },
    ],
  },

  // ---- 197: Book, Tome of Understanding (+1 through +5) -----------------------
  {
    id: 'wondrous-book-tome-understanding-1',
    name: 'Book, Tome of Understanding +1',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.EVOCATION }],
    casterLevel: 17,
    slot: 'none',

    price: 27500,
    weight: 5,

    description:
      'This tome provides tips for improving instinct and perception, infused with powerful magic. ' +
      'Anyone who reads this book — a process requiring 48 hours over a minimum of 6 days — gains a ' +
      '+1 inherent bonus to Wisdom. The magical properties of the book disappear after it is read, ' +
      'leaving only a mundane text.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['wish', 'miracle'],
      cost: 26250,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 5,
      breakDC: 10,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'bonus',
        bonusType: 'inherent',
        target: 'ability.wis',
        value: 1,
        source: 'Book, Tome of Understanding +1',
      },
    ],
  },

  {
    id: 'wondrous-book-tome-understanding-2',
    name: 'Book, Tome of Understanding +2',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.EVOCATION }],
    casterLevel: 17,
    slot: 'none',

    price: 55000,
    weight: 5,

    description:
      'This tome provides tips for improving instinct and perception, infused with powerful magic. ' +
      'Anyone who reads this book — a process requiring 48 hours over a minimum of 6 days — gains a ' +
      '+2 inherent bonus to Wisdom. The magical properties of the book disappear after it is read, ' +
      'leaving only a mundane text.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['wish', 'miracle'],
      cost: 52500,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 5,
      breakDC: 10,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'bonus',
        bonusType: 'inherent',
        target: 'ability.wis',
        value: 2,
        source: 'Book, Tome of Understanding +2',
      },
    ],
  },

  {
    id: 'wondrous-book-tome-understanding-3',
    name: 'Book, Tome of Understanding +3',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.EVOCATION }],
    casterLevel: 17,
    slot: 'none',

    price: 82500,
    weight: 5,

    description:
      'This tome provides tips for improving instinct and perception, infused with powerful magic. ' +
      'Anyone who reads this book — a process requiring 48 hours over a minimum of 6 days — gains a ' +
      '+3 inherent bonus to Wisdom. The magical properties of the book disappear after it is read, ' +
      'leaving only a mundane text.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['wish', 'miracle'],
      cost: 78750,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 5,
      breakDC: 10,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'bonus',
        bonusType: 'inherent',
        target: 'ability.wis',
        value: 3,
        source: 'Book, Tome of Understanding +3',
      },
    ],
  },

  {
    id: 'wondrous-book-tome-understanding-4',
    name: 'Book, Tome of Understanding +4',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.EVOCATION }],
    casterLevel: 17,
    slot: 'none',

    price: 110000,
    weight: 5,

    description:
      'This tome provides tips for improving instinct and perception, infused with powerful magic. ' +
      'Anyone who reads this book — a process requiring 48 hours over a minimum of 6 days — gains a ' +
      '+4 inherent bonus to Wisdom. The magical properties of the book disappear after it is read, ' +
      'leaving only a mundane text.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['wish', 'miracle'],
      cost: 105000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 5,
      breakDC: 10,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'bonus',
        bonusType: 'inherent',
        target: 'ability.wis',
        value: 4,
        source: 'Book, Tome of Understanding +4',
      },
    ],
  },

  {
    id: 'wondrous-book-tome-understanding-5',
    name: 'Book, Tome of Understanding +5',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.EVOCATION }],
    casterLevel: 17,
    slot: 'none',

    price: 137500,
    weight: 5,

    description:
      'This tome provides tips for improving instinct and perception, infused with powerful magic. ' +
      'Anyone who reads this book — a process requiring 48 hours over a minimum of 6 days — gains a ' +
      '+5 inherent bonus to Wisdom. The magical properties of the book disappear after it is read, ' +
      'leaving only a mundane text.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['wish', 'miracle'],
      cost: 131250,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 5,
      breakDC: 10,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'bonus',
        bonusType: 'inherent',
        target: 'ability.wis',
        value: 5,
        source: 'Book, Tome of Understanding +5',
      },
    ],
  },

  // ---- 198: Bookmark of Deception ---------------------------------------------
  {
    id: 'wondrous-bookmark-of-deception',
    name: 'Bookmark of Deception',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ILLUSION }],
    casterLevel: 5,
    slot: 'none',

    price: 1500,
    weight: 0,

    description:
      'This magical bookmark causes its host book to appear as another book entirely, even upon a ' +
      'thorough reading. The illusory appearance is determined during crafting, typically mimicking ' +
      'mundane texts such as legal or religious documents. The bookmark grants both itself and the ' +
      'book a nondetection effect, preventing magical detection or scrying. Readers perceive only ' +
      'the false content.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['nondetection', 'secret page'],
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
        type: 'special',
        target: 'special.bookmark_deception_false_appearance',
        value: 0,
        source: 'Bookmark of Deception',
      },
      {
        type: 'special',
        target: 'special.bookmark_deception_nondetection',
        value: 0,
        source: 'Bookmark of Deception',
      },
    ],
  },

  // ---- 199: Bookplate of Recall -----------------------------------------------
  {
    id: 'wondrous-bookplate-of-recall',
    name: 'Bookplate of Recall',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.CONJURATION }],
    casterLevel: 13,
    slot: 'none',

    price: 1000,
    weight: 0,

    description:
      'This metal bookplate features mystical Draconic inscriptions and a space for a single name. When ' +
      'affixed to the inner cover of a book, the named individual may speak the title of the book to ' +
      'summon it as if using instant summons. This ability functions once per day.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['instant summons'],
      cost: 500,
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
        target: 'special.bookplate_recall_instant_summons',
        value: 1,
        source: 'Bookplate of Recall',
      },
    ],
  },

  // ---- 200: Boots of Elvenkind ------------------------------------------------
  {
    id: 'wondrous-boots-of-elvenkind',
    name: 'Boots of Elvenkind',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'feet',

    price: 2500,
    weight: 1,

    description:
      'These boots are partially made out of living leaves and other natural materials. The wearer ' +
      'moves with extraordinary grace and silence, gaining a +5 competence bonus on Acrobatics checks.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["cat's grace"],
      specialRequirements: ['Creator must be an elf'],
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
        target: 'skill.acrobatics',
        value: 5,
        source: 'Boots of Elvenkind',
      },
    ],
  },
];
