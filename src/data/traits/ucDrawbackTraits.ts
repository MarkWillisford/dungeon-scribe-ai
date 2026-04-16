import type { TraitDefinition } from '@/types/traits';
import { BonusType } from '@/types/base';

export const UC_DRAWBACK_TRAITS: TraitDefinition[] = [
  // ==================== DRAWBACK TRAITS ====================

  {
    id: 'anxious',
    name: 'Anxious',
    description:
      'After suffering terribly for not being tightlipped enough as a child, such as when you accidentally exposed your family to enemy inquisitors, you developed a habit of being overly cautious with your words. You take a -2 penalty on Diplomacy checks.',
    shortDescription: '-2 penalty on Diplomacy checks.',
    source: 'Quests and Campaigns',
    verificationStatus: 'needs_review' as const,
    category: 'social',
    subcategory: 'Drawback',
    prerequisites: [],
    effects: [
      {
        type: 'penalty',
        bonusType: BonusType.UNTYPED,
        target: 'skill.diplomacy',
        value: -2,
        source: 'Anxious',
      },
    ],
    tags: ['drawback', 'diplomacy', 'social'],
  },

  {
    id: 'attached',
    name: 'Attached',
    description:
      "You have a strong emotional attachment to a person or object that you are terrified of losing. The GM chooses the object of your attachment. Whenever the object of your attachment is threatened, in danger, or in someone else's possession, you take a -1 penalty on Will saving throws and a -2 penalty on saving throws against fear effects. If you lose the object of your attachment, replace this drawback with the Doubt drawback.",
    shortDescription: '-1 Will saves and -2 vs. fear when attachment is threatened.',
    source: 'Ultimate Campaign',
    verificationStatus: 'needs_review' as const,
    category: 'social',
    subcategory: 'Drawback',
    prerequisites: [],
    effects: [
      {
        type: 'penalty',
        bonusType: BonusType.UNTYPED,
        target: 'save.will',
        value: -1,
        source: 'Attached',
        condition: {
          type: 'custom',
          params: { trigger: 'attachment_threatened' },
          description:
            "When the object of attachment is threatened, in danger, or in someone else's possession",
        },
      },
      {
        type: 'penalty',
        bonusType: BonusType.UNTYPED,
        target: 'save.fear',
        value: -2,
        source: 'Attached',
        condition: {
          type: 'custom',
          params: { trigger: 'attachment_threatened' },
          description:
            "When the object of attachment is threatened, in danger, or in someone else's possession",
        },
      },
    ],
    tags: ['drawback', 'fear', 'will'],
  },

  {
    id: 'avarice',
    name: 'Avarice',
    description:
      'You have a lust for wealth. Whenever you receive your cut of any treasure, you must receive at least 10% more in value than any other single party member or you become irritable and irrational, taking a -2 penalty on all Charisma-based skill checks and on Will saving throws to resist compulsion effects for 1 week.',
    shortDescription: 'Must receive 10% more treasure than allies or suffer penalties for 1 week.',
    source: 'Ultimate Campaign',
    verificationStatus: 'needs_review' as const,
    category: 'social',
    subcategory: 'Drawback',
    prerequisites: [],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        value: 0,
        source: 'Avarice',
      },
    ],
    tags: ['drawback', 'greed', 'charisma', 'will'],
  },

  {
    id: 'bitter',
    name: 'Bitter',
    description:
      "You have been betrayed so many times in your life that you have difficulty accepting help from others. When you receive healing from an ally's class feature, spell, or spell-like ability, reduce the amount of that healing by 1 hit point.",
    shortDescription: 'Healing from allies is reduced by 1 hp.',
    source: "Antihero's Handbook",
    verificationStatus: 'needs_review' as const,
    category: 'social',
    subcategory: 'Drawback',
    prerequisites: [],
    effects: [
      {
        type: 'penalty',
        bonusType: BonusType.UNTYPED,
        target: 'special.healing_received',
        value: -1,
        source: 'Bitter',
        condition: {
          type: 'custom',
          params: { trigger: 'ally_healing' },
          description:
            "When receiving healing from an ally's class feature, spell, or spell-like ability",
        },
      },
    ],
    tags: ['drawback', 'healing', 'allies'],
  },

  {
    id: 'burned',
    name: 'Burned',
    description:
      "You were badly burned by fire at some point in your past—perhaps in a volcanic eruption, a conflagration, or a group of torchbearing villagers. Your scars are a constant reminder of fire's destructive power. You take a -1 penalty on saving throws against fire effects. In addition, while you are adjacent to an open flame or on fire, you take a -1 penalty on all attack rolls, saving throws, and skill checks. This second penalty persists for 1 round after you are no longer adjacent to flames or on fire. If the fire was instantaneous, the penalty persists for 1 round after the effect ends. These two penalties don't stack.",
    shortDescription: '-1 on saves vs. fire; -1 to attacks, saves, and skills near open flames.',
    source: 'Quests and Campaigns',
    verificationStatus: 'needs_review' as const,
    category: 'social',
    subcategory: 'Drawback',
    prerequisites: [],
    effects: [
      {
        type: 'penalty',
        bonusType: BonusType.UNTYPED,
        target: 'save.all',
        value: -1,
        source: 'Burned',
        condition: {
          type: 'custom',
          params: { descriptor: 'fire' },
          description: 'Against fire effects',
        },
      },
      {
        type: 'penalty',
        bonusType: BonusType.UNTYPED,
        target: 'attack.melee',
        value: -1,
        source: 'Burned',
        condition: {
          type: 'custom',
          params: { trigger: 'adjacent_to_fire' },
          description: 'While adjacent to open flame or on fire',
        },
      },
    ],
    tags: ['drawback', 'fire', 'saves'],
  },

  {
    id: 'condescending',
    name: 'Condescending',
    description:
      "You were raised to believe that those of your race, ethnicity, or nation are the only people truly worth knowing and respecting. You take a -5 penalty on Diplomacy and Intimidate checks to improve other creatures' attitudes toward you.",
    shortDescription: '-5 on Diplomacy and Intimidate checks to improve creature attitudes.',
    source: 'Quests and Campaigns',
    verificationStatus: 'needs_review' as const,
    category: 'social',
    subcategory: 'Drawback',
    prerequisites: [],
    effects: [
      {
        type: 'penalty',
        bonusType: BonusType.UNTYPED,
        target: 'skill.diplomacy',
        value: -5,
        source: 'Condescending',
        condition: {
          type: 'custom',
          params: { use: 'improve_attitude' },
          description: 'When improving the attitude of other creatures',
        },
      },
      {
        type: 'penalty',
        bonusType: BonusType.UNTYPED,
        target: 'skill.intimidate',
        value: -5,
        source: 'Condescending',
        condition: {
          type: 'custom',
          params: { use: 'improve_attitude' },
          description: 'When improving the attitude of other creatures',
        },
      },
    ],
    tags: ['drawback', 'diplomacy', 'intimidate', 'social'],
  },

  {
    id: 'cowardly',
    name: 'Cowardly',
    description:
      'Despite appearing outwardly brave when adventuring, you are at heart a coward. Any penalties to your saving throws or statistics from the cowering, frightened, panicked, or shaken conditions are increased by 1. If you would normally be immune to fear, you lose that immunity (from any source) and do not gain the speed bonus when fleeing.',
    shortDescription: 'Fear condition penalties increased by 1; lose immunity to fear.',
    source: "Antihero's Handbook",
    verificationStatus: 'needs_review' as const,
    category: 'social',
    subcategory: 'Drawback',
    prerequisites: [],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        value: 0,
        source: 'Cowardly',
      },
    ],
    tags: ['drawback', 'fear', 'shaken', 'frightened'],
  },

  {
    id: 'cruelty',
    name: 'Cruelty',
    description:
      "You were rewarded as a child for flaunting your victory over others as completely as possible, and you discovered you enjoyed the feeling of rubbing your foes' faces in the dirt. When there is a dying or helpless enemy within 30 feet of you, you take a -2 penalty on attack rolls made against foes that are neither dying nor helpless.",
    shortDescription:
      '-2 on attacks against non-dying, non-helpless foes when a fallen enemy is within 30 ft.',
    source: 'Quests and Campaigns',
    verificationStatus: 'needs_review' as const,
    category: 'social',
    subcategory: 'Drawback',
    prerequisites: [],
    effects: [
      {
        type: 'penalty',
        bonusType: BonusType.UNTYPED,
        target: 'attack.melee',
        value: -2,
        source: 'Cruelty',
        condition: {
          type: 'custom',
          params: { trigger: 'dying_enemy_nearby' },
          description:
            'When a dying or helpless enemy is within 30 feet, against non-dying non-helpless foes',
        },
      },
    ],
    tags: ['drawback', 'attack', 'combat'],
  },

  {
    id: 'dependent',
    name: 'Dependent',
    description:
      'You rely on others to make you feel safe. You have a weak will and easily become unhinged when you fail to get approval. Whenever you fail a Diplomacy check, you become shaken for 1 hour.',
    shortDescription: 'Become shaken for 1 hour when you fail a Diplomacy check.',
    source: 'Ultimate Campaign',
    verificationStatus: 'needs_review' as const,
    category: 'social',
    subcategory: 'Drawback',
    prerequisites: [],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'condition.shaken',
        value: 0,
        source: 'Dependent',
        condition: {
          type: 'custom',
          params: { trigger: 'failed_diplomacy' },
          description: 'Become shaken for 1 hour when failing a Diplomacy check',
        },
      },
    ],
    tags: ['drawback', 'diplomacy', 'shaken', 'social'],
  },

  {
    id: 'doubt',
    name: 'Doubt',
    description:
      "You lack confidence in your abilities or in the universe's mercy. Whenever you fail a skill or ability check, you take a -4 penalty on that type of skill or ability check for the next hour.",
    shortDescription: '-4 on the same skill or ability check for 1 hour after failing.',
    source: 'Ultimate Campaign',
    verificationStatus: 'needs_review' as const,
    category: 'social',
    subcategory: 'Drawback',
    prerequisites: [],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        value: 0,
        source: 'Doubt',
        condition: {
          type: 'custom',
          params: { trigger: 'failed_check' },
          description:
            '-4 penalty on the same type of skill or ability check for 1 hour after failing',
        },
      },
    ],
    tags: ['drawback', 'skill', 'ability check'],
  },

  {
    id: 'empty_mask',
    name: 'Empty Mask',
    description:
      'You have hidden your true identity for so long while evading your political enemies that you have lost your own sense of self. You take a -1 penalty on Will saving throws against compulsions, and a -2 penalty against compulsion effects from foes who know your true identity.',
    shortDescription:
      '-1 on Will saves vs. compulsions; -2 if the caster knows your true identity.',
    source: "Spymaster's Handbook",
    verificationStatus: 'needs_review' as const,
    category: 'social',
    subcategory: 'Drawback',
    prerequisites: [],
    effects: [
      {
        type: 'penalty',
        bonusType: BonusType.UNTYPED,
        target: 'save.will',
        value: -1,
        source: 'Empty Mask',
        condition: {
          type: 'custom',
          params: { descriptor: 'compulsion' },
          description: 'Against compulsion effects',
        },
      },
      {
        type: 'penalty',
        bonusType: BonusType.UNTYPED,
        target: 'save.will',
        value: -2,
        source: 'Empty Mask',
        condition: {
          type: 'custom',
          params: { descriptor: 'compulsion', trigger: 'foe_knows_identity' },
          description: 'Against compulsion effects from foes who know your true identity',
        },
      },
    ],
    tags: ['drawback', 'will', 'compulsion'],
  },

  {
    id: 'entomophobe',
    name: 'Entomophobe',
    description:
      "A terrifying encounter with insects during your childhood left you with a deep-seated aversion to vermin. You take a -2 penalty on attack rolls against vermin and a -2 penalty on saving throws against the nauseated condition from a swarm's distraction ability.",
    shortDescription: '-2 on attacks against vermin; -2 on saves vs. swarm distraction.',
    source: "Antihero's Handbook",
    verificationStatus: 'needs_review' as const,
    category: 'social',
    subcategory: 'Drawback',
    prerequisites: [],
    effects: [
      {
        type: 'penalty',
        bonusType: BonusType.UNTYPED,
        target: 'attack.melee',
        value: -2,
        source: 'Entomophobe',
        condition: {
          type: 'custom',
          params: { target_type: 'vermin' },
          description: 'Against vermin',
        },
      },
      {
        type: 'penalty',
        bonusType: BonusType.UNTYPED,
        target: 'save.fortitude',
        value: -2,
        source: 'Entomophobe',
        condition: {
          type: 'custom',
          params: { trigger: 'swarm_distraction' },
          description: "Against the nauseated condition from a swarm's distraction ability",
        },
      },
    ],
    tags: ['drawback', 'vermin', 'swarm', 'attack'],
  },

  {
    id: 'envy',
    name: 'Envy',
    description:
      'You were raised in a culture that prizes success and looks down on failure. You have a deep compulsion to steal or acquire by other means at least 10 gp worth of valuables each day. If you fail to do so, you must succeed at a DC 20 Will save or take a -1 penalty on Will saves, Reflex saves, and concentration checks. These penalties are cumulative (maximum -5), but reset to 0 after you succeed at the save.',
    shortDescription:
      'Must steal or acquire 10 gp daily or take cumulative -1 penalties (max -5) on Will, Reflex, and concentration.',
    source: 'Quests and Campaigns',
    verificationStatus: 'needs_review' as const,
    category: 'social',
    subcategory: 'Drawback',
    prerequisites: [],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        value: 0,
        source: 'Envy',
        condition: {
          type: 'custom',
          params: { trigger: 'daily_theft_requirement' },
          description: 'Must acquire 10 gp in valuables each day or face cumulative penalties',
        },
      },
    ],
    tags: ['drawback', 'will', 'reflex', 'concentration'],
  },

  {
    id: 'family_ties',
    name: 'Family Ties',
    description:
      'Your family is extremely important to you, and you feel obligated to fulfill their requests. When a family member makes a request of you, you must fulfill that request or take a -2 penalty on all Wisdom- and Charisma-based ability checks and skill checks until you do so. Once per day, at the start of each day, you may attempt a DC 20 Will saving throw to overcome this compulsion and ignore the penalty. If you lose contact with your family or they are killed, replace this drawback with the Doubt drawback.',
    shortDescription: '-2 on Wis- and Cha-based checks until you fulfill family requests.',
    source: 'Ultimate Campaign',
    verificationStatus: 'needs_review' as const,
    category: 'social',
    subcategory: 'Drawback',
    prerequisites: [{ type: 'special', description: 'Must have family members' }],
    effects: [
      {
        type: 'penalty',
        bonusType: BonusType.UNTYPED,
        target: 'skill.wisdom_based',
        value: -2,
        source: 'Family Ties',
        condition: {
          type: 'custom',
          params: { trigger: 'unfulfilled_family_request' },
          description: 'Until family request is fulfilled or DC 20 Will save is succeeded',
        },
      },
      {
        type: 'penalty',
        bonusType: BonusType.UNTYPED,
        target: 'skill.charisma_based',
        value: -2,
        source: 'Family Ties',
        condition: {
          type: 'custom',
          params: { trigger: 'unfulfilled_family_request' },
          description: 'Until family request is fulfilled or DC 20 Will save is succeeded',
        },
      },
    ],
    tags: ['drawback', 'family', 'social', 'charisma', 'wisdom'],
  },

  {
    id: 'fey_taken',
    name: 'Fey-Taken',
    description:
      'As a child, mischievous fey lured you into the First World, and you were not the same after your return. You take a -2 penalty on saving throws against disease, illusions, and poison, and against the spells, spell-like abilities, and supernatural abilities of fey creatures.',
    shortDescription: '-2 on saves vs. disease, illusions, poison, and fey abilities.',
    source: 'Quests and Campaigns',
    verificationStatus: 'needs_review' as const,
    category: 'social',
    subcategory: 'Drawback',
    prerequisites: [],
    effects: [
      {
        type: 'penalty',
        bonusType: BonusType.UNTYPED,
        target: 'save.all',
        value: -2,
        source: 'Fey-Taken',
        condition: {
          type: 'custom',
          params: { descriptor: 'disease_illusion_poison_fey' },
          description: 'Against disease, illusions, poison, and spells/abilities of fey creatures',
        },
      },
    ],
    tags: ['drawback', 'fey', 'saves', 'disease', 'illusion', 'poison'],
  },

  {
    id: 'forgetful',
    name: 'Forgetful',
    description:
      'Your memory is terrible and you frequently misplace important items. Whenever you leave a location where you have spent at least 1 hour, you must succeed at a DC 10 Wisdom check or leave one random mundane item (a purse of money counts as an item) behind in that location.',
    shortDescription: 'DC 10 Wis check when leaving a location or lose a mundane item.',
    source: 'Quests and Campaigns',
    verificationStatus: 'needs_review' as const,
    category: 'social',
    subcategory: 'Drawback',
    prerequisites: [],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        value: 0,
        source: 'Forgetful',
        condition: {
          type: 'custom',
          params: { trigger: 'leaving_location', dc: 10, check: 'wisdom' },
          description:
            'DC 10 Wisdom check when leaving a location after 1+ hours or lose a random mundane item',
        },
      },
    ],
    tags: ['drawback', 'wisdom', 'equipment'],
  },

  {
    id: 'foul_brand',
    name: 'Foul Brand',
    description:
      'You bear the symbol of an evil deity burned into your flesh. If the symbol is on your hand, you take a -1 penalty on Disable Device, Disguise, and Sleight of Hand checks. If it is on your face, you take a -2 penalty on Bluff, Diplomacy, and Disguise checks. This brand does not count as a holy symbol for the purposes of a divine focus for spellcasting.',
    shortDescription:
      'Brand on hand: -1 to Disable Device, Disguise, Sleight of Hand. Brand on face: -2 to Bluff, Diplomacy, Disguise.',
    source: 'Champions of Corruption',
    verificationStatus: 'needs_review' as const,
    category: 'social',
    subcategory: 'Drawback',
    prerequisites: [],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        value: 0,
        source: 'Foul Brand',
      },
    ],
    tags: ['drawback', 'evil', 'disguise', 'social'],
  },

  {
    id: 'guilty_fraud',
    name: 'Guilty Fraud',
    description:
      'You have something you do not deserve — a position, an item, or a relation you obtained through dishonest means — and deep down you feel guilty about it. You take a -4 penalty on Bluff checks against creatures with an attitude toward you of indifferent or better.',
    shortDescription: '-4 on Bluff checks against indifferent or better creatures.',
    source: "Spymaster's Handbook",
    verificationStatus: 'needs_review' as const,
    category: 'social',
    subcategory: 'Drawback',
    prerequisites: [],
    effects: [
      {
        type: 'penalty',
        bonusType: BonusType.UNTYPED,
        target: 'skill.bluff',
        value: -4,
        source: 'Guilty Fraud',
        condition: {
          type: 'custom',
          params: { target_attitude: 'indifferent_or_better' },
          description: 'Against creatures with an attitude of indifferent or better',
        },
      },
    ],
    tags: ['drawback', 'bluff', 'social'],
  },

  {
    id: 'haunted',
    name: 'Haunted',
    description:
      'You are troubled by a dark past or a current secret that weighs heavily on you. You feel the shadow of corruption ever ready to swallow you, and this fear makes you more susceptible to evil magic. You take a -2 penalty on saving throws against spells with the evil descriptor.',
    shortDescription: '-2 on saves against evil descriptor spells.',
    source: "Antihero's Handbook",
    verificationStatus: 'needs_review' as const,
    category: 'social',
    subcategory: 'Drawback',
    prerequisites: [],
    effects: [
      {
        type: 'penalty',
        bonusType: BonusType.UNTYPED,
        target: 'save.all',
        value: -2,
        source: 'Haunted',
        condition: {
          type: 'custom',
          params: { descriptor: 'evil' },
          description: 'Against spells with the evil descriptor',
        },
      },
    ],
    tags: ['drawback', 'evil', 'saves'],
  },

  {
    id: 'haunting_regret',
    name: 'Haunting Regret',
    description:
      'You argued frequently with a relative who has since died and cannot rest. This spirit appears around you at inopportune times, distracting you with its presence and the regret you feel for your inability to resolve your dispute. You take a -2 penalty on concentration checks and on saving throws against swarm distraction and mind-affecting effects.',
    shortDescription:
      '-2 on concentration checks and saves vs. swarm distraction and mind-affecting effects.',
    source: 'Quests and Campaigns',
    verificationStatus: 'needs_review' as const,
    category: 'social',
    subcategory: 'Drawback',
    prerequisites: [],
    effects: [
      {
        type: 'penalty',
        bonusType: BonusType.UNTYPED,
        target: 'spell.concentration',
        value: -2,
        source: 'Haunting Regret',
      },
      {
        type: 'penalty',
        bonusType: BonusType.UNTYPED,
        target: 'save.all',
        value: -2,
        source: 'Haunting Regret',
        condition: {
          type: 'custom',
          params: { descriptor: 'mind-affecting_swarm_distraction' },
          description: 'Against swarm distraction and mind-affecting effects',
        },
      },
    ],
    tags: ['drawback', 'concentration', 'mind-affecting', 'undead'],
  },

  {
    id: 'headstrong',
    name: 'Headstrong',
    description:
      "You feel compelled to correct every action and argument that contradicts your worldview. Whenever you witness an action or hear an argument that contradicts your alignment, you must attempt to stop or correct that action or argument. If you either don't try to stop it or fail in your attempt to stop it (as adjudicated by the GM), you become shaken for 1 hour.",
    shortDescription: 'Must oppose alignment-violating actions; fail and become shaken for 1 hour.',
    source: 'Ultimate Campaign',
    verificationStatus: 'needs_review' as const,
    category: 'social',
    subcategory: 'Drawback',
    prerequisites: [],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'condition.shaken',
        value: 0,
        source: 'Headstrong',
        condition: {
          type: 'custom',
          params: { trigger: 'failed_to_stop_alignment_violation' },
          description:
            'Become shaken for 1 hour when failing to oppose alignment-violating actions',
        },
      },
    ],
    tags: ['drawback', 'alignment', 'shaken'],
  },

  {
    id: 'hedonistic',
    name: 'Hedonistic',
    description:
      "You enjoy life's pleasures and must indulge yourself at every opportunity. Each day, you must spend at least 10 gp in treasure or spend 1 hour engaged in entertainment or pleasure, or you must succeed at a DC 20 Fortitude save or start the next day fatigued. The fatigue lasts 4 hours or until you indulge yourself.",
    shortDescription: 'Must spend 10 gp or spend 1 hr on pleasure each day or become fatigued.',
    source: 'Ultimate Campaign',
    verificationStatus: 'needs_review' as const,
    category: 'social',
    subcategory: 'Drawback',
    prerequisites: [],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'condition.fatigued',
        value: 0,
        source: 'Hedonistic',
        condition: {
          type: 'custom',
          params: { trigger: 'deprivation_dc20_fort', dc: 20 },
          description:
            'DC 20 Fort save if no 10 gp spent or 1 hour pleasure; fail = fatigued next day for 4 hours',
        },
      },
    ],
    tags: ['drawback', 'fatigue', 'daily'],
  },

  {
    id: 'helpless',
    name: 'Helpless',
    description:
      'You watched a loved one suffer a terrible fate and were unable to do anything to help. The first time per combat encounter that an ally within 30 feet falls unconscious or dies as a result of an attack, you are dazed until the end of your next turn.',
    shortDescription:
      'Dazed until end of next turn the first time per encounter an ally within 30 ft falls unconscious or dies.',
    source: "Antihero's Handbook",
    verificationStatus: 'needs_review' as const,
    category: 'social',
    subcategory: 'Drawback',
    prerequisites: [],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'condition.dazed',
        value: 0,
        source: 'Helpless',
        condition: {
          type: 'custom',
          params: { trigger: 'ally_falls_30ft', frequency: 'once_per_encounter' },
          description:
            'First time per encounter an ally within 30 feet falls unconscious or dies from an attack',
        },
      },
    ],
    tags: ['drawback', 'dazed', 'allies', 'combat'],
  },

  {
    id: 'impatient',
    name: 'Impatient',
    description:
      'You love leaping into battle at the earliest opportunity, and it frustrates you to wait for others to act. You cannot use the delay action and cannot ready actions. If you act last among all of your allies in a combat round, you take a -1 penalty on ability checks, attack rolls, saving throws, and skill checks for that round.',
    shortDescription: 'Cannot delay or ready; -1 to all rolls if acting last among allies.',
    source: "Antihero's Handbook",
    verificationStatus: 'needs_review' as const,
    category: 'social',
    subcategory: 'Drawback',
    prerequisites: [],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        value: 0,
        source: 'Impatient',
      },
      {
        type: 'penalty',
        bonusType: BonusType.UNTYPED,
        target: 'attack.melee',
        value: -1,
        source: 'Impatient',
        condition: {
          type: 'custom',
          params: { trigger: 'act_last_among_allies' },
          description: 'When acting last among all allies in a combat round',
        },
      },
    ],
    tags: ['drawback', 'initiative', 'combat', 'attack'],
  },

  {
    id: 'infamous',
    name: 'Infamous',
    description:
      'You were publicly accused of committing a terrible crime in a particular jurisdiction and are considered guilty by many, whether or not you actually did it. You and apparent allies take a -4 penalty on Diplomacy checks when interacting with law-abiding citizens of that jurisdiction, not including those who themselves oppose the governing authority.',
    shortDescription: '-4 on Diplomacy with law-abiding citizens of the affected jurisdiction.',
    source: "Spymaster's Handbook",
    verificationStatus: 'needs_review' as const,
    category: 'social',
    subcategory: 'Drawback',
    prerequisites: [],
    effects: [
      {
        type: 'penalty',
        bonusType: BonusType.UNTYPED,
        target: 'skill.diplomacy',
        value: -4,
        source: 'Infamous',
        condition: {
          type: 'custom',
          params: { target_type: 'law_abiding_citizens' },
          description: 'When interacting with law-abiding citizens of the affected jurisdiction',
        },
      },
    ],
    tags: ['drawback', 'diplomacy', 'social', 'reputation'],
  },

  {
    id: 'information_overload',
    name: 'Information Overload',
    description:
      'You have been privy to so much confusing and contradictory intelligence that you have trouble sorting out what is true and what is a planted lie. You take a -2 penalty on all Knowledge checks, and if you fail a Knowledge check by 5 or more, you recall information that is diametrically opposed to the truth.',
    shortDescription: '-2 on all Knowledge checks; fail by 5+ recalls false information.',
    source: "Spymaster's Handbook",
    verificationStatus: 'needs_review' as const,
    category: 'social',
    subcategory: 'Drawback',
    prerequisites: [],
    effects: [
      {
        type: 'penalty',
        bonusType: BonusType.UNTYPED,
        target: 'skill.knowledge',
        value: -2,
        source: 'Information Overload',
      },
    ],
    tags: ['drawback', 'knowledge', 'intelligence'],
  },

  {
    id: 'insatiable',
    name: 'Insatiable',
    description:
      'You have become so accustomed to an extravagant lifestyle that you require more of everything than most people. All goods and services cost you 10% more than listed prices, and this additional cost cannot be paid by your allies. In addition, you require twice the normal amount of food and water to avoid starvation and thirst.',
    shortDescription: 'All goods/services cost 10% more; requires double food and water.',
    source: "Antihero's Handbook",
    verificationStatus: 'needs_review' as const,
    category: 'social',
    subcategory: 'Drawback',
    prerequisites: [],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        value: 0,
        source: 'Insatiable',
      },
    ],
    tags: ['drawback', 'wealth', 'survival'],
  },

  {
    id: 'lonely',
    name: 'Lonely',
    description:
      'You are far too easily convinced of the friendly intentions of others, and are desperate for companionship. You take a -2 penalty on Sense Motive checks and Perception checks to see through disguises, and a -2 penalty on saving throws against charm spells and spell-like abilities.',
    shortDescription: '-2 on Sense Motive, Perception vs. disguises, and saves vs. charm.',
    source: "Spymaster's Handbook",
    verificationStatus: 'needs_review' as const,
    category: 'social',
    subcategory: 'Drawback',
    prerequisites: [],
    effects: [
      {
        type: 'penalty',
        bonusType: BonusType.UNTYPED,
        target: 'skill.sense_motive',
        value: -2,
        source: 'Lonely',
      },
      {
        type: 'penalty',
        bonusType: BonusType.UNTYPED,
        target: 'skill.perception',
        value: -2,
        source: 'Lonely',
        condition: {
          type: 'custom',
          params: { use: 'see_through_disguise' },
          description: 'To see through disguises',
        },
      },
      {
        type: 'penalty',
        bonusType: BonusType.UNTYPED,
        target: 'save.will',
        value: -2,
        source: 'Lonely',
        condition: {
          type: 'custom',
          params: { descriptor: 'charm' },
          description: 'Against charm spells and spell-like abilities',
        },
      },
    ],
    tags: ['drawback', 'sense motive', 'charm', 'social'],
  },

  {
    id: 'loner',
    name: 'Loner',
    description:
      'You grew up among renegades, exiles, or pirates, and learned to rely only on yourself. You take a -1 penalty to AC and on attack rolls when adjacent to an ally, and a -1 penalty to AC and on attack rolls when using the aid another action.',
    shortDescription: '-1 AC and attack rolls when adjacent to allies or using aid another.',
    source: 'Quests and Campaigns',
    verificationStatus: 'needs_review' as const,
    category: 'social',
    subcategory: 'Drawback',
    prerequisites: [],
    effects: [
      {
        type: 'penalty',
        bonusType: BonusType.UNTYPED,
        target: 'ac',
        value: -1,
        source: 'Loner',
        condition: {
          type: 'custom',
          params: { trigger: 'adjacent_to_ally' },
          description: 'When adjacent to an ally',
        },
      },
      {
        type: 'penalty',
        bonusType: BonusType.UNTYPED,
        target: 'attack.melee',
        value: -1,
        source: 'Loner',
        condition: {
          type: 'custom',
          params: { trigger: 'adjacent_to_ally' },
          description: 'When adjacent to an ally',
        },
      },
    ],
    tags: ['drawback', 'ac', 'attack', 'allies'],
  },

  {
    id: 'lovesick',
    name: 'Lovesick',
    description:
      'Your love for another is so strong that it is a constant distraction. The GM chooses the object of your affection. Whenever you begin a day separated from that person, you take a -2 penalty on initiative checks and Perception checks for that day. If you lose the love or the loved one is killed, replace this drawback with the Doubt drawback.',
    shortDescription: '-2 on initiative and Perception when separated from your beloved.',
    source: 'Ultimate Campaign',
    verificationStatus: 'needs_review' as const,
    category: 'social',
    subcategory: 'Drawback',
    prerequisites: [],
    effects: [
      {
        type: 'penalty',
        bonusType: BonusType.UNTYPED,
        target: 'initiative',
        value: -2,
        source: 'Lovesick',
        condition: {
          type: 'custom',
          params: { trigger: 'separated_from_beloved' },
          description: 'When separated from the object of affection at the start of the day',
        },
      },
      {
        type: 'penalty',
        bonusType: BonusType.UNTYPED,
        target: 'skill.perception',
        value: -2,
        source: 'Lovesick',
        condition: {
          type: 'custom',
          params: { trigger: 'separated_from_beloved' },
          description: 'When separated from the object of affection at the start of the day',
        },
      },
    ],
    tags: ['drawback', 'initiative', 'perception', 'social'],
  },

  {
    id: 'magical_klutz',
    name: 'Magical Klutz',
    description:
      'You were born in a region rife with unpredictable magic, and this has left its mark on your relationship with magical items. When activating a magic item blindly, roll twice and take the lower result on Use Magic Device checks. When making a Reflex saving throw against an effect produced by a magic item, roll twice and take the lower result.',
    shortDescription:
      'Roll twice and take lower on UMD blind activations and Reflex saves vs. magic item effects.',
    source: "Spymaster's Handbook",
    verificationStatus: 'needs_review' as const,
    category: 'social',
    subcategory: 'Drawback',
    prerequisites: [],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        value: 0,
        source: 'Magical Klutz',
        condition: {
          type: 'custom',
          params: { trigger: 'umd_blind_or_reflex_vs_magic_item' },
          description:
            'Roll twice take lower on UMD blind activation and Reflex saves vs. magic item effects',
        },
      },
    ],
    tags: ['drawback', 'magic items', 'umd', 'reflex'],
  },

  {
    id: 'mark_of_slavery',
    name: 'Mark of Slavery',
    description:
      'You were a slave in your early years, and you still bear the brand or tattoo that marked you as a slave. Whenever you fail a skill check, you take a -2 penalty on any skill check or attack roll you attempt before the end of your next turn unless it is a part of retrying the failed skill check.',
    shortDescription: '-2 on skill checks and attacks the turn after failing a skill check.',
    source: 'Quests and Campaigns',
    verificationStatus: 'needs_review' as const,
    category: 'social',
    subcategory: 'Drawback',
    prerequisites: [],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        value: 0,
        source: 'Mark of Slavery',
        condition: {
          type: 'custom',
          params: { trigger: 'failed_skill_check' },
          description:
            '-2 on skill checks and attack rolls until end of next turn after failing a skill check',
        },
      },
    ],
    tags: ['drawback', 'skill', 'attack'],
  },

  {
    id: 'meticulous',
    name: 'Meticulous',
    description:
      'You plan and prepare everything in advance, and your plans rarely take into account improvisation or the actions of others. You take a -2 penalty on skill checks for skills with which you are untrained.',
    shortDescription: '-2 on untrained skill checks.',
    source: 'Ultimate Campaign',
    verificationStatus: 'needs_review' as const,
    category: 'social',
    subcategory: 'Drawback',
    prerequisites: [],
    effects: [
      {
        type: 'penalty',
        bonusType: BonusType.UNTYPED,
        target: 'skill.untrained',
        value: -2,
        source: 'Meticulous',
      },
    ],
    tags: ['drawback', 'skill', 'untrained'],
  },

  {
    id: 'misbegotten',
    name: 'Misbegotten',
    description:
      'A deformity, whether from malign magic, disease, or the scorn of the gods, has twisted your body. You take a -2 penalty on all Dexterity-based skill checks.',
    shortDescription: '-2 on all Dexterity-based skill checks.',
    source: 'Quests and Campaigns',
    verificationStatus: 'needs_review' as const,
    category: 'social',
    subcategory: 'Drawback',
    prerequisites: [],
    effects: [
      {
        type: 'penalty',
        bonusType: BonusType.UNTYPED,
        target: 'skill.dexterity_based',
        value: -2,
        source: 'Misbegotten',
      },
    ],
    tags: ['drawback', 'dexterity', 'skill'],
  },

  {
    id: 'naive',
    name: 'Naive',
    description:
      'You believe that everyone is essentially good at heart and that no one is truly evil, just misguided. You take a -2 penalty to AC against attacks made with improvised weapons and a -2 penalty to your CMD against dirty trick combat maneuvers.',
    shortDescription: '-2 AC vs. improvised weapons and -2 CMD vs. dirty tricks.',
    source: 'Quests and Campaigns',
    verificationStatus: 'needs_review' as const,
    category: 'social',
    subcategory: 'Drawback',
    prerequisites: [],
    effects: [
      {
        type: 'penalty',
        bonusType: BonusType.UNTYPED,
        target: 'ac',
        value: -2,
        source: 'Naive',
        condition: {
          type: 'custom',
          params: { weapon_type: 'improvised' },
          description: 'Against attacks made with improvised weapons',
        },
      },
      {
        type: 'penalty',
        bonusType: BonusType.UNTYPED,
        target: 'cmd',
        value: -2,
        source: 'Naive',
        condition: {
          type: 'custom',
          params: { maneuver: 'dirty_trick' },
          description: 'Against dirty trick combat maneuvers',
        },
      },
    ],
    tags: ['drawback', 'ac', 'cmd', 'combat'],
  },

  {
    id: 'nervous',
    name: 'Nervous',
    description:
      'You have been persecuted and threatened for most of your life, and you have become mentally unstable. When you take 10 on a skill check or ability check and failure carries consequences (not merely time loss), treat your result as an 8 instead.',
    shortDescription: 'Taking 10 on checks with failure consequences yields 8 instead.',
    source: 'Quests and Campaigns',
    verificationStatus: 'needs_review' as const,
    category: 'social',
    subcategory: 'Drawback',
    prerequisites: [],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        value: 0,
        source: 'Nervous',
        condition: {
          type: 'custom',
          params: { trigger: 'take_10_with_consequences' },
          description: 'When taking 10 on a check where failure has consequences beyond time loss',
        },
      },
    ],
    tags: ['drawback', 'skill', 'ability check'],
  },

  {
    id: 'oblivious',
    name: 'Oblivious',
    description:
      'You are completely absent-minded, either constantly daydreaming or so focused on your own obsessions that you are slow to notice what is going on around you. You take a -2 penalty on Sense Motive checks and on sight-based Perception checks.',
    shortDescription: '-2 on Sense Motive and sight-based Perception checks.',
    source: 'Quests and Campaigns',
    verificationStatus: 'needs_review' as const,
    category: 'social',
    subcategory: 'Drawback',
    prerequisites: [],
    effects: [
      {
        type: 'penalty',
        bonusType: BonusType.UNTYPED,
        target: 'skill.sense_motive',
        value: -2,
        source: 'Oblivious',
      },
      {
        type: 'penalty',
        bonusType: BonusType.UNTYPED,
        target: 'skill.perception',
        value: -2,
        source: 'Oblivious',
        condition: {
          type: 'custom',
          params: { sense: 'sight' },
          description: 'Sight-based Perception checks only',
        },
      },
    ],
    tags: ['drawback', 'perception', 'sense motive'],
  },

  {
    id: 'occult_bargain',
    name: 'Occult Bargain',
    description:
      "You gain your magical abilities from a source that demands anonymity. Each day you must invoke this entity's name through speech or writing, or you cannot regain spell slots. You take a -1 penalty on concentration checks.",
    shortDescription: '-1 on concentration; must invoke patron name daily or lose spell recovery.',
    source: "Spymaster's Handbook",
    verificationStatus: 'needs_review' as const,
    category: 'social',
    subcategory: 'Drawback',
    prerequisites: [
      {
        type: 'special',
        description: 'Must be able to cast 0-level and 1st-level spells as a class feature',
      },
    ],
    effects: [
      {
        type: 'penalty',
        bonusType: BonusType.UNTYPED,
        target: 'spell.concentration',
        value: -1,
        source: 'Occult Bargain',
      },
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'special.spell_recovery',
        value: 0,
        source: 'Occult Bargain',
        condition: {
          type: 'custom',
          params: { trigger: 'failed_to_invoke_patron' },
          description: 'Cannot regain spell slots if patron is not invoked daily',
        },
      },
    ],
    tags: ['drawback', 'concentration', 'spellcasting'],
  },

  {
    id: 'oppressive_expectations',
    name: 'Oppressive Expectations',
    description:
      'You grew up in a family with a high social standing and have always been told you were destined for greatness. When you fail a skill check, you take a -2 penalty on checks with that skill. This penalty persists until you succeed at a check with the same skill or fail a different skill check.',
    shortDescription: '-2 on a skill after failing it until you succeed or fail a different skill.',
    source: 'Quests and Campaigns',
    verificationStatus: 'needs_review' as const,
    category: 'social',
    subcategory: 'Drawback',
    prerequisites: [],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        value: 0,
        source: 'Oppressive Expectations',
        condition: {
          type: 'custom',
          params: { trigger: 'failed_skill_check' },
          description: '-2 on same skill after failure until success or different skill fails',
        },
      },
    ],
    tags: ['drawback', 'skill', 'social'],
  },

  {
    id: 'overprotective',
    name: 'Overprotective',
    description:
      'When you were young, you failed to protect someone important to you. Now you feel a compulsive need to protect your companions. Whenever an ally within 30 feet falls unconscious from hit point damage, you take a -2 penalty on attack rolls and skill checks as long as you are more than 10 feet away from that ally. This penalty persists until the ally is no longer unconscious.',
    shortDescription: '-2 on attacks and skills when more than 10 ft from an unconscious ally.',
    source: 'Quests and Campaigns',
    verificationStatus: 'needs_review' as const,
    category: 'social',
    subcategory: 'Drawback',
    prerequisites: [],
    effects: [
      {
        type: 'penalty',
        bonusType: BonusType.UNTYPED,
        target: 'attack.melee',
        value: -2,
        source: 'Overprotective',
        condition: {
          type: 'custom',
          params: { trigger: 'ally_unconscious_10ft_away' },
          description: 'When more than 10 ft from an unconscious ally',
        },
      },
      {
        type: 'penalty',
        bonusType: BonusType.UNTYPED,
        target: 'skill.all',
        value: -2,
        source: 'Overprotective',
        condition: {
          type: 'custom',
          params: { trigger: 'ally_unconscious_10ft_away' },
          description: 'When more than 10 ft from an unconscious ally',
        },
      },
    ],
    tags: ['drawback', 'attack', 'skill', 'allies'],
  },

  {
    id: 'paranoid',
    name: 'Paranoid',
    description:
      'You believe that someone or something is always out to get you, so you have trouble trusting anyone, even your allies. Whenever another character attempts to use the aid another action to give you a bonus, they must succeed at a DC 15 check instead of the normal DC 10.',
    shortDescription: 'Allies must beat DC 15 (not 10) to aid another for you.',
    source: 'Ultimate Campaign',
    verificationStatus: 'needs_review' as const,
    category: 'social',
    subcategory: 'Drawback',
    prerequisites: [],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        value: 0,
        source: 'Paranoid',
        condition: {
          type: 'custom',
          params: { trigger: 'aid_another', dc: 15 },
          description: 'Aid another actions to help you require DC 15 instead of DC 10',
        },
      },
    ],
    tags: ['drawback', 'aid another', 'allies'],
  },

  {
    id: 'power_hungry',
    name: 'Power-Hungry',
    description:
      'You crave power above all things, and your lust for it makes you susceptible to those who promise it to you. You take a -2 penalty on Will saving throws against charm and compulsion effects from any creature that promises you wealth or power.',
    shortDescription:
      '-2 on Will saves vs. charm and compulsion from creatures promising wealth or power.',
    source: 'Ultimate Campaign',
    verificationStatus: 'needs_review' as const,
    category: 'social',
    subcategory: 'Drawback',
    prerequisites: [],
    effects: [
      {
        type: 'penalty',
        bonusType: BonusType.UNTYPED,
        target: 'save.will',
        value: -2,
        source: 'Power-Hungry',
        condition: {
          type: 'custom',
          params: { descriptor: 'charm_compulsion', trigger: 'promises_wealth_or_power' },
          description:
            'Against charm and compulsion effects from creatures promising wealth or power',
        },
      },
    ],
    tags: ['drawback', 'will', 'charm', 'compulsion'],
  },

  {
    id: 'pride',
    name: 'Pride',
    description:
      "You can't abide challenges to your dignity, authority, or honor. When a creature challenges your dignity, honor, or authority (as adjudicated by the GM), you take a -2 penalty on Diplomacy checks and Sense Motive checks involving that creature until it apologizes.",
    shortDescription:
      '-2 on Diplomacy and Sense Motive against a creature that challenged your honor until it apologizes.',
    source: 'Ultimate Campaign',
    verificationStatus: 'needs_review' as const,
    category: 'social',
    subcategory: 'Drawback',
    prerequisites: [],
    effects: [
      {
        type: 'penalty',
        bonusType: BonusType.UNTYPED,
        target: 'skill.diplomacy',
        value: -2,
        source: 'Pride',
        condition: {
          type: 'custom',
          params: { trigger: 'creature_challenged_honor' },
          description:
            'Against a creature that challenged your dignity, honor, or authority (until it apologizes)',
        },
      },
      {
        type: 'penalty',
        bonusType: BonusType.UNTYPED,
        target: 'skill.sense_motive',
        value: -2,
        source: 'Pride',
        condition: {
          type: 'custom',
          params: { trigger: 'creature_challenged_honor' },
          description:
            'Against a creature that challenged your dignity, honor, or authority (until it apologizes)',
        },
      },
    ],
    tags: ['drawback', 'diplomacy', 'sense motive', 'social'],
  },

  {
    id: 'provincial',
    name: 'Provincial',
    description:
      'You have a difficult time with change, and you resist ideas or concepts outside your worldview. Whenever you interact with a creature of a different religion or alignment than yourself, you take a -2 penalty on Diplomacy and Sense Motive checks.',
    shortDescription:
      '-2 on Diplomacy and Sense Motive with creatures of different religion or alignment.',
    source: 'Ultimate Campaign',
    verificationStatus: 'needs_review' as const,
    category: 'social',
    subcategory: 'Drawback',
    prerequisites: [],
    effects: [
      {
        type: 'penalty',
        bonusType: BonusType.UNTYPED,
        target: 'skill.diplomacy',
        value: -2,
        source: 'Provincial',
        condition: {
          type: 'custom',
          params: { target_type: 'different_religion_or_alignment' },
          description: 'Against creatures of a different religion or alignment',
        },
      },
      {
        type: 'penalty',
        bonusType: BonusType.UNTYPED,
        target: 'skill.sense_motive',
        value: -2,
        source: 'Provincial',
        condition: {
          type: 'custom',
          params: { target_type: 'different_religion_or_alignment' },
          description: 'Against creatures of a different religion or alignment',
        },
      },
    ],
    tags: ['drawback', 'diplomacy', 'sense motive', 'alignment'],
  },

  {
    id: 'righteous_indignation_ah',
    name: 'Righteous Indignation',
    description:
      'You have trouble controlling your temper when others behave in a way you find offensive. Whenever an enemy provokes an attack of opportunity from you, you must take it unless you succeed at a Will save (DC = 10 + your character level). You also take a -1 penalty on Will saving throws against spells with the emotion descriptor unless those spells also have the fear descriptor.',
    shortDescription: 'Must make Will save to forgo AoOs; -1 Will vs. emotion spells (not fear).',
    source: "Spymaster's Handbook",
    verificationStatus: 'needs_review' as const,
    category: 'social',
    subcategory: 'Drawback',
    prerequisites: [],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        value: 0,
        source: 'Righteous Indignation',
        condition: {
          type: 'custom',
          params: { trigger: 'opportunity_attack_provoked' },
          description: 'Must take AoOs unless Will save (DC 10 + level) is succeeded',
        },
      },
      {
        type: 'penalty',
        bonusType: BonusType.UNTYPED,
        target: 'save.will',
        value: -1,
        source: 'Righteous Indignation',
        condition: {
          type: 'custom',
          params: { descriptor: 'emotion', excludes: 'fear' },
          description:
            'Against emotion descriptor spells (excluding those with the fear descriptor)',
        },
      },
    ],
    tags: ['drawback', 'will', 'emotion', 'attack of opportunity'],
  },

  {
    id: 'scarred',
    name: 'Scarred',
    description:
      'An injury has left visible, disfiguring scars on your face or body. You take a -5 penalty on Disguise checks and a -2 penalty on Bluff checks.',
    shortDescription: '-5 on Disguise checks and -2 on Bluff checks.',
    source: "Antihero's Handbook",
    verificationStatus: 'needs_review' as const,
    category: 'social',
    subcategory: 'Drawback',
    prerequisites: [],
    effects: [
      {
        type: 'penalty',
        bonusType: BonusType.UNTYPED,
        target: 'skill.disguise',
        value: -5,
        source: 'Scarred',
      },
      {
        type: 'penalty',
        bonusType: BonusType.UNTYPED,
        target: 'skill.bluff',
        value: -2,
        source: 'Scarred',
      },
    ],
    tags: ['drawback', 'disguise', 'bluff', 'social'],
  },

  {
    id: 'secret_shame',
    name: 'Secret Shame',
    description:
      'You harbor guilt over something shameful that, if revealed, would cause you to lose standing with a specific group you care about. You take a -1 penalty on saving throws against fear effects, and the DC of Intimidate checks to demoralize you is reduced by 1. If you are normally immune to fear, you instead lose that immunity.',
    shortDescription:
      '-1 on fear saves; Intimidate DC to demoralize you reduced by 1; lose fear immunity.',
    source: "Spymaster's Handbook",
    verificationStatus: 'needs_review' as const,
    category: 'social',
    subcategory: 'Drawback',
    prerequisites: [],
    effects: [
      {
        type: 'penalty',
        bonusType: BonusType.UNTYPED,
        target: 'save.all',
        value: -1,
        source: 'Secret Shame',
        condition: {
          type: 'custom',
          params: { descriptor: 'fear' },
          description: 'Against fear effects',
        },
      },
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        value: 0,
        source: 'Secret Shame',
        condition: {
          type: 'custom',
          params: { trigger: 'intimidate_demoralize_dc' },
          description:
            'DC of Intimidate checks to demoralize you is reduced by 1; lose fear immunity if applicable',
        },
      },
    ],
    tags: ['drawback', 'fear', 'intimidate'],
  },

  {
    id: 'self_doubting',
    name: 'Self-Doubting',
    description:
      'You lack confidence in your abilities and are easily shaken by setbacks. The first time each day that you fail a Will saving throw or skill check, you take a -2 penalty on the next Will saving throw or skill check of that kind.',
    shortDescription:
      'First daily failure on a Will save or skill check imposes -2 on the next of that type.',
    source: "Antihero's Handbook",
    verificationStatus: 'needs_review' as const,
    category: 'social',
    subcategory: 'Drawback',
    prerequisites: [],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        value: 0,
        source: 'Self-Doubting',
        condition: {
          type: 'custom',
          params: { trigger: 'first_daily_will_or_skill_failure' },
          description:
            'First time per day failing a Will save or skill check imposes -2 on next of that type',
        },
      },
    ],
    tags: ['drawback', 'will', 'skill'],
  },

  {
    id: 'sentimental',
    name: 'Sentimental',
    description:
      'You are prone to nostalgia and flights of fancy that sometimes cause you to miss things happening around you. You take a -2 penalty on Perception checks to avoid being surprised and a -2 penalty on Reflex saving throws to avoid traps or hazards.',
    shortDescription: '-2 on Perception vs. surprise and Reflex saves vs. traps/hazards.',
    source: 'Ultimate Campaign',
    verificationStatus: 'needs_review' as const,
    category: 'social',
    subcategory: 'Drawback',
    prerequisites: [],
    effects: [
      {
        type: 'penalty',
        bonusType: BonusType.UNTYPED,
        target: 'skill.perception',
        value: -2,
        source: 'Sentimental',
        condition: {
          type: 'custom',
          params: { use: 'avoid_surprise' },
          description: 'To avoid being surprised',
        },
      },
      {
        type: 'penalty',
        bonusType: BonusType.UNTYPED,
        target: 'save.reflex',
        value: -2,
        source: 'Sentimental',
        condition: {
          type: 'custom',
          params: { trigger: 'trap_or_hazard' },
          description: 'To avoid traps or hazards',
        },
      },
    ],
    tags: ['drawback', 'perception', 'reflex', 'traps'],
  },

  {
    id: 'shadow_scarred',
    name: 'Shadow-Scarred',
    description:
      'You have been touched by darkness, whether from shadow creatures, aberrations from the Dark Tapestry, or similar entities. When you are in dim light or darkness, you take a -1 penalty on saving throws.',
    shortDescription: '-1 on saving throws while in dim light or darkness.',
    source: 'Quests and Campaigns',
    verificationStatus: 'needs_review' as const,
    category: 'social',
    subcategory: 'Drawback',
    prerequisites: [],
    effects: [
      {
        type: 'penalty',
        bonusType: BonusType.UNTYPED,
        target: 'save.all',
        value: -1,
        source: 'Shadow-Scarred',
        condition: {
          type: 'custom',
          params: { lighting: 'dim_light_or_darkness' },
          description: 'While in dim light or darkness',
        },
      },
    ],
    tags: ['drawback', 'saves', 'darkness', 'shadow'],
  },

  {
    id: 'sheltered',
    name: 'Sheltered',
    description:
      'You were brought up in a courtly environment and know little of violence. Whenever your current hit points are below half your maximum hit points, you gain the shaken condition.',
    shortDescription: 'Shaken whenever below half maximum hit points.',
    source: 'Quests and Campaigns',
    verificationStatus: 'needs_review' as const,
    category: 'social',
    subcategory: 'Drawback',
    prerequisites: [],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'condition.shaken',
        value: 0,
        source: 'Sheltered',
        condition: {
          type: 'custom',
          params: { trigger: 'below_half_hp' },
          description: 'Whenever current HP is below half maximum HP',
        },
      },
    ],
    tags: ['drawback', 'shaken', 'hit points'],
  },

  {
    id: 'sleepy',
    name: 'Sleepy',
    description:
      "You need more sleep than most people to function properly. You must sleep at least 12 hours per night in order to gain the benefits of a full night's rest. In addition, you take a -2 penalty on all saving throws against sleep effects.",
    shortDescription: 'Requires 12 hours of sleep; -2 on saves vs. sleep effects.',
    source: 'Quests and Campaigns',
    verificationStatus: 'needs_review' as const,
    category: 'social',
    subcategory: 'Drawback',
    prerequisites: [],
    effects: [
      {
        type: 'penalty',
        bonusType: BonusType.UNTYPED,
        target: 'save.all',
        value: -2,
        source: 'Sleepy',
        condition: {
          type: 'custom',
          params: { descriptor: 'sleep' },
          description: 'Against sleep effects',
        },
      },
    ],
    tags: ['drawback', 'sleep', 'saves'],
  },

  {
    id: 'spooked',
    name: 'Spooked',
    description:
      "A terrifying brush with a supernatural creature in your past has left you perpetually unnerved. When you first perceive a fey, outsider, or undead creature within 60 feet, you must succeed at a Will save (DC 15 + creature's Charisma modifier) or become shaken for 1d4 rounds. Even if you are normally immune to fear effects, you still must make this save but gain a +4 bonus.",
    shortDescription:
      'Will save (DC 15 + Cha) when first perceiving fey, outsider, or undead within 60 ft or become shaken.',
    source: 'Quests and Campaigns',
    verificationStatus: 'needs_review' as const,
    category: 'social',
    subcategory: 'Drawback',
    prerequisites: [],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'condition.shaken',
        value: 0,
        source: 'Spooked',
        condition: {
          type: 'custom',
          params: { trigger: 'perceive_fey_outsider_undead_60ft', save_dc: '15_plus_cha' },
          description:
            'Will save DC 15 + creature Cha when first perceiving fey/outsider/undead within 60 ft or shaken 1d4 rounds',
        },
      },
    ],
    tags: ['drawback', 'shaken', 'fear', 'fey', 'outsider', 'undead'],
  },

  {
    id: 'stigmatized',
    name: 'Stigmatized',
    description:
      "Somewhere in your past you were shunned and ostracized, and even in new environments among strangers, you feel the weight of inadequate socialization. You take a -3 penalty on Diplomacy checks to gather information or improve a creature's attitude.",
    shortDescription: '-3 on Diplomacy to gather information or improve attitudes.',
    source: "Antihero's Handbook",
    verificationStatus: 'needs_review' as const,
    category: 'social',
    subcategory: 'Drawback',
    prerequisites: [],
    effects: [
      {
        type: 'penalty',
        bonusType: BonusType.UNTYPED,
        target: 'skill.diplomacy',
        value: -3,
        source: 'Stigmatized',
        condition: {
          type: 'custom',
          params: { use: 'gather_info_or_improve_attitude' },
          description: "To gather information or improve a creature's attitude",
        },
      },
    ],
    tags: ['drawback', 'diplomacy', 'social'],
  },

  {
    id: 'tainted_spirit',
    name: 'Tainted Spirit',
    description:
      'When you were young, someone in a position of power over you made a deal with a fiend, trading away some of your vitality for a minor boon. After any combat encounter in which you actively participated, you must attempt a Fortitude saving throw (DC 10 + the number of rounds you participated in combat). If you fail this save, you become fatigued for 10 minutes per round you participated in that combat.',
    shortDescription: 'Fortitude save after combat (DC 10 + rounds fought) or become fatigued.',
    source: 'Quests and Campaigns',
    verificationStatus: 'needs_review' as const,
    category: 'social',
    subcategory: 'Drawback',
    prerequisites: [],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'condition.fatigued',
        value: 0,
        source: 'Tainted Spirit',
        condition: {
          type: 'custom',
          params: { trigger: 'post_combat_fort_save', dc: '10_plus_rounds' },
          description:
            'Fortitude save (DC 10 + rounds in combat) after combat or fatigued 10 min per round fought',
        },
      },
    ],
    tags: ['drawback', 'fatigue', 'combat', 'fortitude'],
  },

  {
    id: 'too_many_secrets',
    name: 'Too Many Secrets',
    description:
      'You have maintained so many cover identities and told so many lies that you no longer know who you truly are, and you hesitate in moments of deception. You take a -2 penalty on Bluff checks and a -2 penalty on saving throws against illusions.',
    shortDescription: '-2 on Bluff checks and saves vs. illusions.',
    source: "Spymaster's Handbook",
    verificationStatus: 'needs_review' as const,
    category: 'social',
    subcategory: 'Drawback',
    prerequisites: [],
    effects: [
      {
        type: 'penalty',
        bonusType: BonusType.UNTYPED,
        target: 'skill.bluff',
        value: -2,
        source: 'Too Many Secrets',
      },
      {
        type: 'penalty',
        bonusType: BonusType.UNTYPED,
        target: 'save.all',
        value: -2,
        source: 'Too Many Secrets',
        condition: {
          type: 'custom',
          params: { school: 'illusion' },
          description: 'Against illusion spells and effects',
        },
      },
    ],
    tags: ['drawback', 'bluff', 'illusion', 'saves'],
  },

  {
    id: 'umbral_unmasking',
    name: 'Umbral Unmasking',
    description:
      'You cast no shadow or have a visibly monstrous shadow that is difficult to conceal. This is observable under normal light conditions, and observers can notice it with a DC 15 Wisdom check or appropriate Perception check. The effect cannot be concealed by misdirection, nondetection, or most illusions — only magic that affects shadows directly (such as invisibility) can obscure it.',
    shortDescription:
      'Cast no shadow or have a monstrous shadow visible in normal light (DC 15 Wis to notice).',
    source: 'Champions of Corruption',
    verificationStatus: 'needs_review' as const,
    category: 'social',
    subcategory: 'Drawback',
    prerequisites: [],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        value: 0,
        source: 'Umbral Unmasking',
      },
    ],
    tags: ['drawback', 'shadow', 'evil'],
  },

  {
    id: 'unlearned',
    name: 'Unlearned',
    description:
      'You are not well educated and know only what you need to know to get by in your chosen profession. Choose one Knowledge skill — you may attempt untrained checks with it as normal. You cannot attempt untrained checks with any other Knowledge skills, regardless of the DC. When accessing a library, you may attempt an untrained Knowledge check with a -2 penalty.',
    shortDescription:
      'Can only attempt untrained Knowledge checks for one chosen skill; -2 when using a library.',
    source: 'Quests and Campaigns',
    verificationStatus: 'needs_review' as const,
    category: 'social',
    subcategory: 'Drawback',
    prerequisites: [],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        value: 0,
        source: 'Unlearned',
      },
    ],
    choices: [
      {
        type: 'skill',
        label: 'Permitted Knowledge Skill',
        options: [
          'Knowledge (arcana)',
          'Knowledge (dungeoneering)',
          'Knowledge (engineering)',
          'Knowledge (geography)',
          'Knowledge (history)',
          'Knowledge (local)',
          'Knowledge (nature)',
          'Knowledge (nobility)',
          'Knowledge (planes)',
          'Knowledge (religion)',
        ],
        affectsEffects: false,
      },
    ],
    tags: ['drawback', 'knowledge', 'skill'],
  },

  {
    id: 'vain',
    name: 'Vain',
    description:
      'You are sensitive about the way others perceive you. Whenever you fail an opposed Charisma-based check, you take a -2 penalty on all Charisma-based checks for the next 24 hours.',
    shortDescription: '-2 on all Cha-based checks for 24 hours after failing an opposed Cha check.',
    source: 'Ultimate Campaign',
    verificationStatus: 'needs_review' as const,
    category: 'social',
    subcategory: 'Drawback',
    prerequisites: [],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        value: 0,
        source: 'Vain',
        condition: {
          type: 'custom',
          params: { trigger: 'failed_opposed_cha_check' },
          description:
            '-2 on all Charisma-based checks for 24 hours after failing an opposed Charisma check',
        },
      },
    ],
    tags: ['drawback', 'charisma', 'social'],
  },

  {
    id: 'vainglory',
    name: 'Vainglory',
    description:
      'Your desire for recognition and fame makes it difficult for you to be discreet. You take a -1 penalty on Bluff, Disguise, and Stealth checks. Additionally, the save DC of any illusion spells or effects you create is reduced by 1.',
    shortDescription: '-1 on Bluff, Disguise, and Stealth; -1 to illusion spell DCs.',
    source: "Spymaster's Handbook",
    verificationStatus: 'needs_review' as const,
    category: 'social',
    subcategory: 'Drawback',
    prerequisites: [],
    effects: [
      {
        type: 'penalty',
        bonusType: BonusType.UNTYPED,
        target: 'skill.bluff',
        value: -1,
        source: 'Vainglory',
      },
      {
        type: 'penalty',
        bonusType: BonusType.UNTYPED,
        target: 'skill.disguise',
        value: -1,
        source: 'Vainglory',
      },
      {
        type: 'penalty',
        bonusType: BonusType.UNTYPED,
        target: 'skill.stealth',
        value: -1,
        source: 'Vainglory',
      },
      {
        type: 'penalty',
        bonusType: BonusType.UNTYPED,
        target: 'spell_dc.illusion',
        value: -1,
        source: 'Vainglory',
      },
    ],
    tags: ['drawback', 'bluff', 'disguise', 'stealth', 'illusion'],
  },

  {
    id: 'warded_against_nature',
    name: 'Warded Against Nature',
    description:
      "Animals do not willingly approach within 30 feet of you unless you or the animal's master succeeds at a DC 20 Handle Animal, Ride, or wild empathy check. Class-granted animal companions, familiars, and mounts are not affected by this drawback.",
    shortDescription:
      'Animals avoid within 30 ft (DC 20 Handle Animal/Ride/wild empathy to override).',
    source: 'Champions of Corruption',
    verificationStatus: 'needs_review' as const,
    category: 'social',
    subcategory: 'Drawback',
    prerequisites: [],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        value: 0,
        source: 'Warded Against Nature',
        condition: {
          type: 'custom',
          params: { trigger: 'animal_aversion_30ft', override_dc: 20 },
          description:
            'Animals avoid you within 30 ft; DC 20 Handle Animal/Ride/wild empathy overrides',
        },
      },
    ],
    tags: ['drawback', 'animals', 'nature'],
  },

  {
    id: 'xenophobic',
    name: 'Xenophobic',
    description:
      'You have trouble relating to those who are different from you. Whenever you interact with a creature of a different race or from a foreign culture, you take a -2 penalty on Diplomacy and Sense Motive checks.',
    shortDescription: '-2 on Diplomacy and Sense Motive with different races or cultures.',
    source: 'Ultimate Campaign',
    verificationStatus: 'needs_review' as const,
    category: 'social',
    subcategory: 'Drawback',
    prerequisites: [],
    effects: [
      {
        type: 'penalty',
        bonusType: BonusType.UNTYPED,
        target: 'skill.diplomacy',
        value: -2,
        source: 'Xenophobic',
        condition: {
          type: 'custom',
          params: { target_type: 'different_race_or_culture' },
          description: 'Against creatures of a different race or foreign culture',
        },
      },
      {
        type: 'penalty',
        bonusType: BonusType.UNTYPED,
        target: 'skill.sense_motive',
        value: -2,
        source: 'Xenophobic',
        condition: {
          type: 'custom',
          params: { target_type: 'different_race_or_culture' },
          description: 'Against creatures of a different race or foreign culture',
        },
      },
    ],
    tags: ['drawback', 'diplomacy', 'sense motive', 'social'],
  },

  {
    id: 'zealous',
    name: 'Zealous',
    description:
      'You are fanatical in your beliefs, ruled by emotion over reason. When you attack a creature you know worships a different religion than you, you take a -5 penalty on the attack roll. However, you gain a +2 trait bonus on the damage roll with your first attack against that creature.',
    shortDescription:
      '-5 on attack vs. different-religion targets; +2 damage on first attack against them.',
    source: 'Ultimate Campaign',
    verificationStatus: 'needs_review' as const,
    category: 'social',
    subcategory: 'Drawback',
    prerequisites: [],
    effects: [
      {
        type: 'penalty',
        bonusType: BonusType.UNTYPED,
        target: 'attack.melee',
        value: -5,
        source: 'Zealous',
        condition: {
          type: 'custom',
          params: { target_type: 'different_religion' },
          description: 'Against creatures known to worship a different religion',
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'damage.melee',
        value: 2,
        source: 'Zealous',
        condition: {
          type: 'custom',
          params: { target_type: 'different_religion', frequency: 'first_attack' },
          description: 'First attack against a creature of different religion',
        },
      },
    ],
    tags: ['drawback', 'attack', 'damage', 'religion'],
  },
];

// CHECKPOINT: last_written=zealous, written=64/64, status=complete
