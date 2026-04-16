import type { TraitDefinition } from '@/types/traits';
import { BonusType } from '@/types/base';

export const ISG_RELIGION_TRAITS: TraitDefinition[] = [
  // ==================== ALSETA ====================
  {
    id: 'opener_of_doors',
    name: 'Opener of Doors',
    description:
      'Alseta blesses you with the ability to notice hidden passages. You gain a +2 trait bonus on Perception checks made to discover secret doors.',
    shortDescription: '+2 Perception to discover secret doors',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Alseta',
    prerequisites: [{ type: 'deity', deityName: 'Alseta' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.perception',
        value: 2,
        source: 'Opener of Doors',
        condition: {
          type: 'custom',
          params: {},
          description: 'On Perception checks to discover secret doors',
        },
      },
    ],
    tags: ['perception', 'secret doors', 'exploration'],
  },

  // ==================== ANGRADD ====================
  {
    id: 'well_prepared',
    name: 'Well-Prepared',
    description:
      'Angradd teaches that a good offense can be the best defense. You gain a +1 trait bonus on attack rolls made as part of a readied action, and a +1 trait bonus on caster level checks when casting a spell as a readied action.',
    shortDescription: '+1 attack and caster level checks for readied actions',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Angradd',
    prerequisites: [{ type: 'deity', deityName: 'Angradd' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'attack.readied',
        value: 1,
        source: 'Well-Prepared',
        condition: {
          type: 'custom',
          params: {},
          description: 'On attack rolls made as part of a readied action',
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'spell.caster_level',
        value: 1,
        source: 'Well-Prepared',
        condition: {
          type: 'custom',
          params: {},
          description: 'On caster level checks when casting a spell as a readied action',
        },
      },
    ],
    tags: ['attack', 'readied action', 'caster level', 'preparation'],
  },

  // ==================== BOLKA ====================
  {
    id: 'wedded_bliss',
    name: 'Wedded Bliss',
    description:
      'Your commitment to the ideals of marriage and devotion to Bolka grants you supernatural resilience against magical manipulation. You gain a +2 trait bonus on saving throws against charm and compulsion effects.',
    shortDescription: '+2 saves vs charm and compulsion',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Bolka',
    prerequisites: [{ type: 'deity', deityName: 'Bolka' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.all',
        value: 2,
        source: 'Wedded Bliss',
        condition: {
          type: 'custom',
          params: {},
          description: 'Against charm and compulsion effects',
        },
      },
    ],
    tags: ['save', 'charm', 'compulsion', 'marriage'],
  },

  // ==================== CHALDIRA ZUZARISTAN ====================
  {
    id: 'reckless_luck',
    name: 'Reckless Luck',
    description:
      'Like your deity, you charge in when others fall back. When making a charge attack during the surprise round or the first round of combat, you receive a +2 trait bonus to your AC for 1 round.',
    shortDescription: '+2 AC for 1 round after charging in surprise or first combat round',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Chaldira Zuzaristan',
    prerequisites: [{ type: 'deity', deityName: 'Chaldira Zuzaristan' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'ac',
        value: 2,
        source: 'Reckless Luck',
        condition: {
          type: 'custom',
          params: {},
          description: 'For 1 round after charging during surprise round or first round of combat',
        },
      },
    ],
    tags: ['ac', 'charge', 'surprise', 'combat'],
  },
  {
    id: 'lessons_of_chaldira',
    name: 'Lessons of Chaldira',
    description:
      'Your familiarity with the divine exploits of Chaldira Zuzaristan has provided practical advantages in navigating dangerous situations. Once per day, you may reroll a saving throw. You must accept the second result, even if it is worse.',
    shortDescription: 'Once per day, reroll a saving throw (must accept second result)',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Chaldira Zuzaristan',
    prerequisites: [{ type: 'deity', deityName: 'Chaldira Zuzaristan' }],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        value: 0,
        source: 'Lessons of Chaldira',
      },
    ],
    tags: ['save', 'reroll', '1/day'],
  },

  // ==================== DAHAK ====================
  {
    id: 'dragon_tracker',
    name: 'Dragon Tracker',
    description:
      "You have developed expertise in identifying both obvious and subtle indicators of a dragon's presence or passage. You gain a +2 trait bonus on Survival checks made to track dragons, and you can attempt to track a dragon using Survival even without training, provided the check's DC is 15 or lower.",
    shortDescription: '+2 Survival to track dragons; track dragons untrained if DC 15 or lower',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Dahak',
    prerequisites: [{ type: 'deity', deityName: 'Dahak' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.survival',
        value: 2,
        source: 'Dragon Tracker',
        condition: {
          type: 'custom',
          params: {},
          description: 'On Survival checks to track dragons',
        },
      },
    ],
    tags: ['survival', 'tracking', 'dragon'],
  },
  {
    id: 'dragonslayer',
    name: 'Dragonslayer',
    description:
      "You possess exceptional skill in hunting and eliminating dragons, mirroring your patron god's preferred quarry. You gain a +1 trait bonus on attack rolls made against any creature with the dragon type.",
    shortDescription: '+1 attack rolls against dragons',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Dahak',
    prerequisites: [{ type: 'deity', deityName: 'Dahak' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'attack.melee',
        value: 1,
        source: 'Dragonslayer',
        condition: {
          type: 'custom',
          params: {},
          description: 'Against creatures with the dragon type',
        },
      },
    ],
    tags: ['attack', 'dragon', 'combat'],
  },

  // ==================== DRANNGVIT ====================
  {
    id: 'furious_vengeance',
    name: 'Furious Vengeance',
    description:
      'Your capacity for swift and brutal retribution reflects the vengeful nature associated with Dranngvit. Once per day as an immediate action, you gain a +1 trait bonus on a single attack roll. If the target has damaged you within the last round, you deal 1 additional point of damage on a successful hit.',
    shortDescription: 'Once per day: +1 attack and +1 damage (if target hurt you last round)',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Dranngvit',
    prerequisites: [{ type: 'deity', deityName: 'Dranngvit' }],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        value: 0,
        source: 'Furious Vengeance',
      },
    ],
    tags: ['attack', 'damage', 'vengeance', '1/day', 'immediate action'],
  },

  // ==================== DROSKAR ====================
  {
    id: 'extended_toil',
    name: 'Extended Toil',
    description:
      "Droskar's teachings help you maximize the efficacy of your conjured servants. When casting spells that create loyal servants for specific or mindless tasks (such as unseen servant, mount, or spiritual weapon, but not summon monster spells), you may increase the duration by 50%. This bonus does not stack with the Extend Spell feat. Dispel checks against spells modified this way receive a +4 bonus.",
    shortDescription: 'Non-summon servant spells last 50% longer (dispel +4 easier)',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Droskar',
    prerequisites: [{ type: 'deity', deityName: 'Droskar' }],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        value: 0,
        source: 'Extended Toil',
      },
    ],
    tags: ['duration', 'servant', 'conjuration', 'spellcasting'],
  },

  // ==================== FINDELADLARA ====================
  {
    id: 'structural_knowledge',
    name: 'Structural Knowledge',
    description:
      'A blessing from Findeladlara grants you insight into architecture and artifice. You gain a +1 trait bonus on Knowledge (engineering) checks, and Knowledge (engineering) becomes a class skill for you.',
    shortDescription: '+1 Knowledge (engineering); becomes class skill',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Findeladlara',
    prerequisites: [{ type: 'deity', deityName: 'Findeladlara' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_engineering',
        value: 1,
        source: 'Structural Knowledge',
      },
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'class_skill.knowledge_engineering',
        value: 0,
        source: 'Structural Knowledge',
      },
    ],
    tags: ['knowledge', 'engineering', 'class skill', 'architecture'],
  },

  // ==================== FOLGRIT ====================
  {
    id: 'blessed_orphan',
    name: 'Blessed Orphan',
    description:
      'Folgrit has watched over you since childhood. Once per day, you may gain a +1 trait bonus on any single saving throw. The bonus may be applied after rolling but before the result is revealed.',
    shortDescription: 'Once per day, +1 bonus on any saving throw (declare after rolling)',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Folgrit',
    prerequisites: [{ type: 'deity', deityName: 'Folgrit' }],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        value: 0,
        source: 'Blessed Orphan',
      },
    ],
    tags: ['save', '1/day', 'orphan'],
  },

  // ==================== GHLAUNDER ====================
  {
    id: 'diseased_heart',
    name: 'Diseased Heart',
    description:
      'Your experience with infections has imbued your spirit with disease, making you a vector for sickness. When a creature uses blood drain or swallow whole attacks against you, it must make a Fortitude save (DC = 10 + your character level + your Constitution modifier) or become infected with filth fever as a poison effect.',
    shortDescription:
      'Creatures using blood drain or swallow whole on you must save vs filth fever',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Ghlaunder',
    prerequisites: [{ type: 'deity', deityName: 'Ghlaunder' }],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        value: 0,
        source: 'Diseased Heart',
      },
    ],
    tags: ['disease', 'filth fever', 'blood drain', 'swallow whole'],
  },
  {
    id: 'potent_concoctions',
    name: 'Potent Concoctions',
    description:
      'Your devotion to Ghlaunder has granted you mastery over toxic substances. Select any two poisons from the Core Rulebook poison table. When you attempt to inflict either of these chosen poisons on an enemy, the DC to resist it increases by 1.',
    shortDescription: '+1 DC for two chosen poisons (selected from CRB table)',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Ghlaunder',
    prerequisites: [{ type: 'deity', deityName: 'Ghlaunder' }],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        value: 0,
        source: 'Potent Concoctions',
      },
    ],
    choices: [
      {
        type: 'custom',
        label: 'Choose two poisons from the Core Rulebook',
        affectsEffects: true,
      },
    ],
    tags: ['poison', 'dc', 'disease'],
  },

  // ==================== GREEN FAITH ====================
  {
    id: 'eyes_of_the_wild',
    name: 'Eyes of the Wild',
    description:
      'You have developed an attunement to wilderness ways through extensive time spent in natural environments. You gain a +2 trait bonus on Perception checks in natural settings.',
    shortDescription: '+2 Perception in natural settings',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Green Faith',
    prerequisites: [{ type: 'special', description: 'Green Faith' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.perception',
        value: 2,
        source: 'Eyes of the Wild',
        condition: {
          type: 'custom',
          params: {},
          description: 'In natural settings',
        },
      },
    ],
    tags: ['perception', 'nature', 'wilderness'],
  },
  {
    id: 'know_the_land',
    name: 'Know the Land',
    description:
      'Your familiarity with the plants and animals of a variety of environments enhances your practical knowledge of the natural world. You gain a +1 trait bonus on Knowledge (nature) and Survival checks, and one of these skills becomes a class skill for you.',
    shortDescription: '+1 Knowledge (nature) and Survival; one becomes a class skill',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Green Faith',
    prerequisites: [{ type: 'special', description: 'Green Faith' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_nature',
        value: 1,
        source: 'Know the Land',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.survival',
        value: 1,
        source: 'Know the Land',
      },
    ],
    choices: [
      {
        type: 'class_skill',
        label: 'Choose one skill to become a class skill',
        options: ['Knowledge (nature)', 'Survival'],
        affectsEffects: false,
      },
    ],
    tags: ['knowledge', 'nature', 'survival', 'class skill', 'wilderness'],
  },

  // ==================== GRUNDINNAR ====================
  {
    id: 'loyal_bond',
    name: 'Loyal Bond',
    description:
      'Your devotion to Grundinnar rewards those who prioritize protecting their allies. When casting spells that offer protection to an ally at your expense (such as shield other) or spells whose duration is divided when shared among many (such as water breathing or any of the communal spells), you gain a +1 bonus to caster level.',
    shortDescription:
      '+1 caster level for protective/shared spells (e.g., shield other, communal spells)',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Grundinnar',
    prerequisites: [{ type: 'deity', deityName: 'Grundinnar' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'spell.caster_level',
        value: 1,
        source: 'Loyal Bond',
        condition: {
          type: 'custom',
          params: {},
          description: 'When casting protective/shared spells (shield other, communal spells)',
        },
      },
    ],
    tags: ['caster level', 'protective', 'communal', 'ally'],
  },

  // ==================== GYRONNA ====================
  {
    id: 'wronged',
    name: 'Wronged',
    description:
      'Your past experience of being exploited has sharpened your insight into the motives of those who would wrong you. You gain a +2 trait bonus on Sense Motive checks when dealing with male creatures of your race. The DC for male creatures to Intimidate you increases by 2.',
    shortDescription:
      '+2 Sense Motive vs male creatures of your race; +2 DC to Intimidate you for them',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Gyronna',
    prerequisites: [{ type: 'deity', deityName: 'Gyronna' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.sense_motive',
        value: 2,
        source: 'Wronged',
        condition: {
          type: 'custom',
          params: {},
          description: 'When dealing with male creatures of your race',
        },
      },
    ],
    tags: ['sense motive', 'intimidate', 'defense'],
  },

  // ==================== HANSPUR ====================
  {
    id: 'river_freedom',
    name: 'River Freedom',
    description:
      "Water's natural liberty inspires your resistance to restraint. While touching flowing water, you gain a +2 trait bonus on saving throws against effects that would hamper your movement.",
    shortDescription: '+2 saves vs movement-hampering effects while touching flowing water',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Hanspur',
    prerequisites: [{ type: 'deity', deityName: 'Hanspur' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.all',
        value: 2,
        source: 'River Freedom',
        condition: {
          type: 'custom',
          params: {},
          description: 'While touching flowing water, against effects that hamper movement',
        },
      },
    ],
    tags: ['save', 'movement', 'water', 'freedom'],
  },
  {
    id: 'light_sleeper',
    name: 'Light Sleeper',
    description:
      'A blessing from Hanspur makes you a naturally light sleeper, alert even in rest. While sleeping, your modifier to Perception DCs is +5 instead of the normal +10.',
    shortDescription: 'Perception DC penalty while sleeping reduced to +5 (from +10)',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Hanspur',
    prerequisites: [{ type: 'deity', deityName: 'Hanspur' }],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        value: 0,
        source: 'Light Sleeper',
      },
    ],
    tags: ['perception', 'sleeping', 'awareness'],
  },

  // ==================== KETEPHYS ====================
  {
    id: 'favored_prey',
    name: 'Favored Prey',
    description:
      'Ketephys blesses those who pursue their quarry with dedication. You gain a +1 trait bonus on damage rolls when making bow attacks against a creature whose tracks you have successfully followed in the last hour.',
    shortDescription: '+1 bow damage vs creatures you have tracked in the last hour',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Ketephys',
    prerequisites: [{ type: 'deity', deityName: 'Ketephys' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'damage.ranged',
        value: 1,
        source: 'Favored Prey',
        condition: {
          type: 'custom',
          params: {},
          description:
            'With bow attacks against creatures whose tracks you followed in the last hour',
        },
      },
    ],
    tags: ['damage', 'ranged', 'bow', 'tracking', 'hunter'],
  },

  // ==================== KOLS ====================
  {
    id: 'strict_judgment',
    name: 'Strict Judgment',
    description:
      "Your deep respect for Kols's teachings on the letter of the law manifests in your magical abilities. Any spells you cast that prescribe certain behaviors with a consequence for breaking these directives (such as mark of justice or geas) gain a +1 bonus to their save DC.",
    shortDescription:
      '+1 save DC for spells prescribing behavior with consequences (mark of justice, geas)',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Kols',
    prerequisites: [{ type: 'deity', deityName: 'Kols' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'spell.save_dc',
        value: 1,
        source: 'Strict Judgment',
        condition: {
          type: 'custom',
          params: {},
          description:
            'For spells that prescribe behaviors with consequences (geas, mark of justice)',
        },
      },
    ],
    tags: ['spell dc', 'geas', 'mark of justice', 'law'],
  },

  // ==================== KURGESS ====================
  {
    id: 'strengths_fanfare',
    name: "Strength's Fanfare",
    description:
      'Songs celebrating your strength and accomplishments enhance your physical prowess. When you are the subject of any sonic effect granting a morale bonus on attack or damage rolls, you also gain a +1 trait bonus on Strength-based skill checks and a +1 trait bonus on combat maneuver checks to bull rush, grapple, or reposition, as well as +1 to your CMD against those same maneuvers.',
    shortDescription:
      '+1 Strength skills, bull rush/grapple/reposition CMB and CMD when benefiting from sonic morale bonuses',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Kurgess',
    prerequisites: [{ type: 'deity', deityName: 'Kurgess' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.strength_based',
        value: 1,
        source: "Strength's Fanfare",
        condition: {
          type: 'custom',
          params: {},
          description:
            'While subject to a sonic effect granting a morale bonus on attack or damage rolls',
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'cmb',
        value: 1,
        source: "Strength's Fanfare",
        condition: {
          type: 'custom',
          params: {},
          description:
            'Bull rush, grapple, or reposition while subject to a sonic effect granting morale bonus on attack/damage',
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'cmd',
        value: 1,
        source: "Strength's Fanfare",
        condition: {
          type: 'custom',
          params: {},
          description:
            'Against bull rush, grapple, or reposition while subject to a sonic effect granting morale bonus on attack/damage',
        },
      },
    ],
    tags: ['strength', 'cmb', 'cmd', 'grapple', 'bull rush', 'sonic', 'morale'],
  },
  {
    id: 'the_flexing_arm',
    name: 'The Flexing Arm',
    description:
      'Your training with Kurgess teaches you to use raw muscle to escape physical restraints. You may use your Strength modifier instead of your Dexterity modifier on Escape Artist checks made to escape from bonds. You also gain a +1 trait bonus on Escape Artist checks made to escape bondage.',
    shortDescription: 'Use Strength for Escape Artist vs bonds; +1 on those checks',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Kurgess',
    prerequisites: [{ type: 'deity', deityName: 'Kurgess' }],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        value: 0,
        source: 'The Flexing Arm',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.escape_artist',
        value: 1,
        source: 'The Flexing Arm',
        condition: {
          type: 'custom',
          params: {},
          description: 'On Escape Artist checks to escape from bonds',
        },
      },
    ],
    tags: ['escape artist', 'strength', 'bonds', 'grapple'],
  },

  // ==================== MAGRIM ====================
  {
    id: 'gifted_medium',
    name: 'Gifted Medium',
    description:
      "Magrim's divine teachings position you as an ideal vessel for mystical communication. You gain a +1 trait bonus on caster level when using divinations to reach out to other entities, such as commune or speak with dead.",
    shortDescription: '+1 caster level for commune, speak with dead, and similar divinations',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Magrim',
    prerequisites: [{ type: 'deity', deityName: 'Magrim' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'spell.caster_level',
        value: 1,
        source: 'Gifted Medium',
        condition: {
          type: 'custom',
          params: {},
          description:
            'When casting divinations to contact other entities (commune, speak with dead)',
        },
      },
    ],
    tags: ['caster level', 'divination', 'commune', 'speak with dead'],
  },
];

// CHECKPOINT: last_written=gifted_medium, written=26/26, status=complete
