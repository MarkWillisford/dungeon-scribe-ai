import { BonusType } from '@/types/base';
import type { TraitDefinition } from '@/types/traits';

export const RELIGION_EXTRA_TRAITS: TraitDefinition[] = [
  // ==================== IOMEDAE ====================
  {
    id: 'inheritors_smite',
    name: "Inheritor's Smite",
    description:
      'You have dedicated yourself to the Inheritor and her battle against evil. Once per day, you may add a +1 trait bonus on the damage roll of an attack made against an evil foe.',
    shortDescription: '+1 damage on one attack vs evil foe 1/day',
    source: 'Faiths of Purity',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Iomedae',
    prerequisites: [{ type: 'deity', deityName: 'Iomedae' }],
    effects: [],
    tags: ['damage', 'evil', 'smite'],
  },
  {
    id: 'blessed_by_the_light',
    name: 'Blessed by the Light',
    description:
      "Iomedae's blessing grants you inner strength. You gain a +1 trait bonus on saving throws against blindness and dazzle effects, and if you are ever blinded or dazzled, you may make a new save each round to end the effect.",
    shortDescription: '+1 saves vs blindness/dazzle; extra saves to end',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Iomedae',
    prerequisites: [{ type: 'deity', deityName: 'Iomedae' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.all',
        value: 1,
        source: 'Blessed by the Light',
        condition: {
          type: 'custom',
          params: {},
          description: 'Against blindness and dazzle effects',
        },
      },
    ],
    tags: ['save', 'blindness', 'dazzle'],
  },
  {
    id: 'iomedaean_sword_oath',
    name: 'Sword Oath',
    description:
      "You have sworn an oath on Iomedae's holy sword to defend the innocent. You gain a +1 trait bonus on attack rolls with longswords.",
    shortDescription: '+1 attack rolls with longswords',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Iomedae',
    prerequisites: [{ type: 'deity', deityName: 'Iomedae' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'attack.longsword',
        value: 1,
        source: 'Sword Oath',
      },
    ],
    tags: ['attack', 'longsword', 'weapon'],
  },

  // ==================== SARENRAE ====================
  {
    id: 'dawnflower_anchorite',
    name: 'Dawnflower Anchorite',
    description:
      "Your meditations on the Dawnflower's mercy have granted you resilience. You gain a +1 trait bonus on Will saving throws against charm and compulsion effects.",
    shortDescription: '+1 Will vs charm/compulsion',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Sarenrae',
    prerequisites: [{ type: 'deity', deityName: 'Sarenrae' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.will',
        value: 1,
        source: 'Dawnflower Anchorite',
        condition: {
          type: 'custom',
          params: {},
          description: 'Against charm and compulsion effects',
        },
      },
    ],
    tags: ['save', 'will', 'charm', 'compulsion'],
  },
  {
    id: 'cleansing_light',
    name: 'Cleansing Light',
    description:
      "Sarenrae's radiance fills your healing magic with purifying light. When you cast a spell that deals fire damage, you deal 1 additional point of fire damage.",
    shortDescription: '+1 fire damage with fire spells',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Sarenrae',
    prerequisites: [{ type: 'deity', deityName: 'Sarenrae' }],
    effects: [],
    tags: ['fire', 'damage', 'spell'],
  },
  {
    id: 'solar_invocation',
    name: 'Solar Invocation',
    description:
      "You call upon Sarenrae's light to illuminate darkness. You gain a +1 trait bonus on Intimidate checks made in bright light or against undead and evil outsiders.",
    shortDescription: '+1 Intimidate in bright light or vs undead/evil outsiders',
    source: 'Faiths of Purity',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Sarenrae',
    prerequisites: [{ type: 'deity', deityName: 'Sarenrae' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.intimidate',
        value: 1,
        source: 'Solar Invocation',
        condition: {
          type: 'custom',
          params: {},
          description: 'In bright light or vs undead/evil outsiders',
        },
      },
    ],
    tags: ['intimidate', 'undead', 'light'],
  },

  // ==================== DESNA ====================
  {
    id: 'starchild',
    name: 'Starchild',
    description:
      "Desna's starlight guides your steps. You gain a +2 trait bonus on Survival checks to avoid becoming lost, and you can determine where true north is as a free action.",
    shortDescription: '+2 Survival to avoid getting lost; always know north',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Desna',
    prerequisites: [{ type: 'deity', deityName: 'Desna' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.survival',
        value: 2,
        source: 'Starchild',
        condition: { type: 'custom', params: {}, description: 'To avoid becoming lost' },
      },
    ],
    tags: ['survival', 'navigation', 'travel'],
  },
  {
    id: 'dreamer',
    name: 'Dreamer',
    description:
      'Your dreams are touched by Desna, providing insight. You gain a +1 trait bonus on saving throws against sleep effects and a +2 trait bonus on Knowledge (planes) checks to identify creatures from the Dimension of Dreams.',
    shortDescription: '+1 saves vs sleep; +2 Knowledge (planes) for dream creatures',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Desna',
    prerequisites: [{ type: 'deity', deityName: 'Desna' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.all',
        value: 1,
        source: 'Dreamer',
        condition: { type: 'custom', params: {}, description: 'Against sleep effects' },
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_planes',
        value: 2,
        source: 'Dreamer',
        condition: {
          type: 'custom',
          params: {},
          description: 'To identify creatures from the Dimension of Dreams',
        },
      },
    ],
    tags: ['save', 'sleep', 'dreams', 'knowledge'],
  },
  {
    id: 'stargazer',
    name: 'Stargazer',
    description:
      "Desna's love of the night sky grants you special sight. You gain a +2 trait bonus on Perception checks made in dim light or darkness.",
    shortDescription: '+2 Perception in dim light or darkness',
    source: 'Faiths of Purity',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Desna',
    prerequisites: [{ type: 'deity', deityName: 'Desna' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.perception',
        value: 2,
        source: 'Stargazer',
        condition: { type: 'custom', params: {}, description: 'In dim light or darkness' },
      },
    ],
    tags: ['perception', 'darkness', 'night'],
  },

  // ==================== SHELYN ====================
  {
    id: 'shelynite_artist',
    name: 'Art of Love',
    description:
      "Shelyn's appreciation for beauty flows through you. You gain a +1 trait bonus on Craft and Perform checks, and one of these skills (your choice) is always a class skill for you.",
    shortDescription: '+1 Craft and Perform; one becomes class skill',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Shelyn',
    prerequisites: [{ type: 'deity', deityName: 'Shelyn' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.craft',
        value: 1,
        source: 'Art of Love',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.perform',
        value: 1,
        source: 'Art of Love',
      },
    ],
    choices: [
      {
        type: 'class_skill',
        label: 'Choose class skill',
        options: ['craft', 'perform'],
        affectsEffects: false,
      },
    ],
    tags: ['craft', 'perform', 'class skill', 'art'],
  },

  // ==================== ERASTIL ====================
  {
    id: 'erastils_speaker',
    name: "Erastil's Speaker",
    description:
      "Old Deadeye's guidance gives you a knack for connecting with rural folk. You gain a +1 trait bonus on Diplomacy checks, and Diplomacy is always a class skill for you.",
    shortDescription: '+1 Diplomacy; Diplomacy is class skill',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Erastil',
    prerequisites: [{ type: 'deity', deityName: 'Erastil' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.diplomacy',
        value: 1,
        source: "Erastil's Speaker",
      },
    ],
    tags: ['diplomacy', 'social', 'class skill'],
  },
  {
    id: 'deadeye_bowman',
    name: 'Deadeye Bowman',
    description:
      'You have been trained by followers of Erastil in the ways of the bow. You do not take the -4 penalty for firing into melee with a bow (longbow or shortbow only).',
    shortDescription: 'No -4 penalty firing into melee with bows',
    source: 'Faiths of Purity',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Erastil',
    prerequisites: [{ type: 'deity', deityName: 'Erastil' }],
    effects: [],
    tags: ['bow', 'ranged', 'combat', 'melee penalty'],
  },

  // ==================== CAYDEN CAILEAN ====================
  {
    id: 'fortified_drinker',
    name: 'Fortified Drinker',
    description:
      "Cayden Cailean's blessing makes alcohol bolster your courage. Whenever you drink a tankard of ale or mug of wine, you gain a +2 trait bonus on saving throws against fear effects for 1 hour.",
    shortDescription: '+2 saves vs fear for 1 hour after drinking alcohol',
    source: 'Faiths of Purity',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Cayden Cailean',
    prerequisites: [{ type: 'deity', deityName: 'Cayden Cailean' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.all',
        value: 2,
        source: 'Fortified Drinker',
        condition: {
          type: 'custom',
          params: {},
          description: 'Against fear effects for 1 hour after drinking alcohol',
        },
      },
    ],
    tags: ['save', 'fear', 'alcohol', 'courage'],
  },
  {
    id: 'freedoms_folk',
    name: "Freedom's Folk",
    description:
      "You were raised with Cayden Cailean's love of freedom. You gain a +1 trait bonus on saving throws against effects that cause the grappled, entangled, or paralyzed conditions.",
    shortDescription: '+1 saves vs grapple/entangle/paralysis',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Cayden Cailean',
    prerequisites: [{ type: 'deity', deityName: 'Cayden Cailean' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.all',
        value: 1,
        source: "Freedom's Folk",
        condition: {
          type: 'custom',
          params: {},
          description: 'Against grapple, entangle, or paralysis effects',
        },
      },
    ],
    tags: ['save', 'grapple', 'entangle', 'paralysis', 'freedom'],
  },
  {
    id: 'good_natured',
    name: 'Good-Natured',
    description:
      "Cayden Cailean's easy-going nature infuses your social interactions. You gain a +1 trait bonus on Sense Motive checks and Sense Motive is always a class skill for you.",
    shortDescription: '+1 Sense Motive; class skill',
    source: 'Faiths of Purity',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Cayden Cailean',
    prerequisites: [{ type: 'deity', deityName: 'Cayden Cailean' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.sense_motive',
        value: 1,
        source: 'Good-Natured',
      },
    ],
    tags: ['sense motive', 'class skill', 'social'],
  },

  // ==================== TORAG ====================
  {
    id: 'forge_hardened',
    name: 'Forge-Hardened',
    description:
      "Torag's teachings at the forge have toughened you against heat. You gain a +1 trait bonus on Fortitude saves against fire and heat effects.",
    shortDescription: '+1 Fort saves vs fire/heat',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Torag',
    prerequisites: [{ type: 'deity', deityName: 'Torag' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.fortitude',
        value: 1,
        source: 'Forge-Hardened',
        condition: { type: 'custom', params: {}, description: 'Against fire and heat effects' },
      },
    ],
    tags: ['save', 'fortitude', 'fire', 'heat', 'forge'],
  },
  {
    id: 'defensive_strategist',
    name: 'Defensive Strategist',
    description:
      "Torag's strategic teachings protect you when caught off guard. You are not flat-footed when you are caught unaware or surprised. You still lose your Dex bonus if immobilized.",
    shortDescription: 'Not flat-footed when surprised',
    source: 'Faiths of Purity',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Torag',
    prerequisites: [{ type: 'deity', deityName: 'Torag' }],
    effects: [],
    tags: ['surprise', 'flat-footed', 'initiative', 'defense'],
  },
  {
    id: 'guardian_of_the_forge_isg',
    name: 'Guardian of the Forge',
    description:
      "Torag's protection extends through your craftsmanship. You gain a +1 trait bonus on Knowledge (engineering) checks and Craft (armor or weapons) checks.",
    shortDescription: '+1 Knowledge (engineering) and Craft (armor/weapons)',
    source: 'Faiths of Purity',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Torag',
    prerequisites: [{ type: 'deity', deityName: 'Torag' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_engineering',
        value: 1,
        source: 'Guardian of the Forge',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.craft',
        value: 1,
        source: 'Guardian of the Forge',
      },
    ],
    tags: ['knowledge', 'engineering', 'craft', 'armor', 'weapons'],
  },

  // ==================== ABADAR ====================
  {
    id: 'master_of_the_marketplace',
    name: 'Master of the Marketplace',
    description:
      "Abadar's guidance makes you a shrewd negotiator. You gain a +1 trait bonus on Appraise checks and Bluff checks made in a business transaction or negotiation.",
    shortDescription: '+1 Appraise; +1 Bluff in negotiations',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Abadar',
    prerequisites: [{ type: 'deity', deityName: 'Abadar' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.appraise',
        value: 1,
        source: 'Master of the Marketplace',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.bluff',
        value: 1,
        source: 'Master of the Marketplace',
        condition: {
          type: 'custom',
          params: {},
          description: 'In business transactions or negotiations',
        },
      },
    ],
    tags: ['appraise', 'bluff', 'social', 'commerce'],
  },
  {
    id: 'ordered_mind',
    name: 'Ordered Mind',
    description:
      "Abadar's discipline helps you resist mental chaos. You gain a +1 trait bonus on Will saves against confusion, insanity, and polymorph effects.",
    shortDescription: '+1 Will vs confusion/insanity/polymorph',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Abadar',
    prerequisites: [{ type: 'deity', deityName: 'Abadar' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.will',
        value: 1,
        source: 'Ordered Mind',
        condition: {
          type: 'custom',
          params: {},
          description: 'Against confusion, insanity, and polymorph effects',
        },
      },
    ],
    tags: ['save', 'will', 'confusion', 'insanity', 'polymorph'],
  },

  // ==================== GOZREH ====================
  {
    id: 'storm_touched',
    name: 'Storm-Touched',
    description:
      "Gozreh's storms have inured you to electricity. You gain a +1 trait bonus on Reflex saves against effects that deal electricity damage.",
    shortDescription: '+1 Reflex vs electricity damage effects',
    source: 'Faiths of Balance',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Gozreh',
    prerequisites: [{ type: 'deity', deityName: 'Gozreh' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.reflex',
        value: 1,
        source: 'Storm-Touched',
        condition: {
          type: 'custom',
          params: {},
          description: 'Against effects that deal electricity damage',
        },
      },
    ],
    tags: ['save', 'reflex', 'electricity', 'storm'],
  },

  // ==================== IRORI ====================
  {
    id: 'balanced_offensive',
    name: 'Balanced Offensive',
    description:
      "Irori's teachings allow you to balance offense and defense. You gain a +1 trait bonus on attack rolls when fighting defensively or using Combat Expertise.",
    shortDescription: '+1 attack when fighting defensively or using Combat Expertise',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Irori',
    prerequisites: [{ type: 'deity', deityName: 'Irori' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'attack.all',
        value: 1,
        source: 'Balanced Offensive',
        condition: {
          type: 'custom',
          params: {},
          description: 'When fighting defensively or using Combat Expertise',
        },
      },
    ],
    tags: ['attack', 'fighting defensively', 'combat expertise'],
  },
  {
    id: 'inner_strength',
    name: 'Inner Strength',
    description:
      'Your intense meditation and focus on self-improvement grant mental resilience. You gain a +1 trait bonus on Will saving throws against mind-affecting effects.',
    shortDescription: '+1 Will vs mind-affecting',
    source: 'Faiths of Balance',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Irori',
    prerequisites: [{ type: 'deity', deityName: 'Irori' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.will',
        value: 1,
        source: 'Inner Strength',
        condition: { type: 'custom', params: {}, description: 'Against mind-affecting effects' },
      },
    ],
    tags: ['save', 'will', 'mind-affecting'],
  },

  // ==================== NETHYS ====================
  {
    id: 'magic_is_life',
    name: 'Magic Is Life',
    description:
      'Your faith in magic grants you resilience while under magical effects. As long as you are under the effects of any spell, you gain a +2 trait bonus on saving throws against death effects.',
    shortDescription: '+2 saves vs death effects while under a spell',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Nethys',
    prerequisites: [{ type: 'deity', deityName: 'Nethys' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.all',
        value: 2,
        source: 'Magic Is Life',
        condition: {
          type: 'custom',
          params: {},
          description: 'Against death effects while under the effects of a spell',
        },
      },
    ],
    tags: ['save', 'death', 'magic', 'spell'],
  },

  // ==================== PHARASMA ====================
  {
    id: 'deaths_diplomat',
    name: "Death's Diplomat",
    description:
      "Pharasma's teachings about the cycle of life and death inform your interactions. You gain a +1 trait bonus on Diplomacy checks and Knowledge (religion) checks regarding the undead or burial practices.",
    shortDescription: '+1 Diplomacy; +1 Knowledge (religion) re: undead/burial',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Pharasma',
    prerequisites: [{ type: 'deity', deityName: 'Pharasma' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.diplomacy',
        value: 1,
        source: "Death's Diplomat",
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_religion',
        value: 1,
        source: "Death's Diplomat",
        condition: {
          type: 'custom',
          params: {},
          description: 'Regarding undead or burial practices',
        },
      },
    ],
    tags: ['diplomacy', 'knowledge', 'religion', 'undead'],
  },
  {
    id: 'spirits_channel',
    name: "Spirit's Channel",
    description:
      "Pharasma's hatred of the undead flows through your channeling. You gain a +1 trait bonus on the damage dealt by your channel energy ability against undead.",
    shortDescription: '+1 channel energy damage vs undead',
    source: 'Faiths of Balance',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Pharasma',
    prerequisites: [{ type: 'deity', deityName: 'Pharasma' }],
    effects: [],
    tags: ['channel', 'undead', 'damage'],
  },

  // ==================== CALISTRIA ====================
  {
    id: 'calistrian_courtesan',
    name: 'Calistrian Courtesan',
    description:
      "Calistria's gift of seduction aids your social maneuvering. You gain a +1 trait bonus on Sense Motive checks and Bluff checks. One of these (your choice) is always a class skill for you.",
    shortDescription: '+1 Sense Motive and Bluff; one becomes class skill',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Calistria',
    prerequisites: [{ type: 'deity', deityName: 'Calistria' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.sense_motive',
        value: 1,
        source: 'Calistrian Courtesan',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.bluff',
        value: 1,
        source: 'Calistrian Courtesan',
      },
    ],
    choices: [
      {
        type: 'class_skill',
        label: 'Choose class skill',
        options: ['sense_motive', 'bluff'],
        affectsEffects: false,
      },
    ],
    tags: ['sense motive', 'bluff', 'social', 'class skill'],
  },
  {
    id: 'vengeful',
    name: 'Vengeful',
    description:
      "Calistria's thirst for vengeance burns in you. You gain a +1 trait bonus on attack rolls against any creature that has damaged you in the current combat.",
    shortDescription: '+1 attack vs creatures that have damaged you this combat',
    source: 'Faiths of Balance',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Calistria',
    prerequisites: [{ type: 'deity', deityName: 'Calistria' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'attack.all',
        value: 1,
        source: 'Vengeful',
        condition: {
          type: 'custom',
          params: {},
          description: 'Against creatures that have damaged you this combat',
        },
      },
    ],
    tags: ['attack', 'revenge', 'combat'],
  },

  // ==================== ASMODEUS ====================
  {
    id: 'asmodean_demon_hunter',
    name: 'Asmodean Demon Hunter',
    description:
      "Asmodeus's ancient hatred of demons has been drilled into you. You gain a +3 trait bonus on Knowledge (planes) checks regarding demons and the Abyss, and you gain a +2 trait bonus on Will saves against mind-affecting spells and effects from demons.",
    shortDescription: '+3 Knowledge (planes) re: demons; +2 Will vs demon mind-affecting',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Asmodeus',
    prerequisites: [{ type: 'deity', deityName: 'Asmodeus' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_planes',
        value: 3,
        source: 'Asmodean Demon Hunter',
        condition: { type: 'custom', params: {}, description: 'Regarding demons and the Abyss' },
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.will',
        value: 2,
        source: 'Asmodean Demon Hunter',
        condition: {
          type: 'custom',
          params: {},
          description: 'Against mind-affecting spells and effects from demons',
        },
      },
    ],
    tags: ['knowledge', 'planes', 'demons', 'save', 'will', 'mind-affecting'],
  },
  {
    id: 'fiendish_confidence',
    name: 'Fiendish Confidence',
    description:
      'Your devotion to the Prince of Darkness fills you with supreme confidence in your ability to command others. You gain a +1 trait bonus on Intimidate checks, and Intimidate is always a class skill for you.',
    shortDescription: '+1 Intimidate; class skill',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Asmodeus',
    prerequisites: [{ type: 'deity', deityName: 'Asmodeus' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.intimidate',
        value: 1,
        source: 'Fiendish Confidence',
      },
    ],
    tags: ['intimidate', 'class skill', 'social'],
  },
  {
    id: 'contract_master',
    name: 'Contract Master',
    description:
      "Asmodeus's love of binding contracts sharpens your mind. You gain a +1 trait bonus on Linguistics checks and on Sense Motive checks to detect lies.",
    shortDescription: '+1 Linguistics; +1 Sense Motive to detect lies',
    source: 'Faiths of Corruption',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Asmodeus',
    prerequisites: [{ type: 'deity', deityName: 'Asmodeus' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.linguistics',
        value: 1,
        source: 'Contract Master',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.sense_motive',
        value: 1,
        source: 'Contract Master',
        condition: { type: 'custom', params: {}, description: 'To detect lies' },
      },
    ],
    tags: ['linguistics', 'sense motive', 'lies', 'contracts'],
  },

  // ==================== LAMASHTU ====================
  {
    id: 'mother_of_beasts',
    name: 'Mother of Beasts',
    description:
      "Lamashtu's blessing grants you kinship with monsters. You gain a +1 trait bonus on Handle Animal checks and Knowledge (nature) checks related to animals and magical beasts.",
    shortDescription: '+1 Handle Animal; +1 Knowledge (nature) re: animals/magical beasts',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Lamashtu',
    prerequisites: [{ type: 'deity', deityName: 'Lamashtu' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.handle_animal',
        value: 1,
        source: 'Mother of Beasts',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_nature',
        value: 1,
        source: 'Mother of Beasts',
        condition: {
          type: 'custom',
          params: {},
          description: 'Related to animals and magical beasts',
        },
      },
    ],
    tags: ['handle animal', 'knowledge', 'nature', 'magical beasts'],
  },
  {
    id: 'fearful_frenzy',
    name: 'Fearful Frenzy',
    description:
      "Lamashtu's influence makes you terrifying in battle. You gain a +1 trait bonus on Intimidate checks, and if you successfully demoralize a foe, the effect lasts 1 additional round.",
    shortDescription: '+1 Intimidate; demoralize lasts +1 round',
    source: 'Faiths of Corruption',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Lamashtu',
    prerequisites: [{ type: 'deity', deityName: 'Lamashtu' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.intimidate',
        value: 1,
        source: 'Fearful Frenzy',
      },
    ],
    tags: ['intimidate', 'demoralize', 'fear'],
  },

  // ==================== NORGORBER ====================
  {
    id: 'secret_knowledge',
    name: 'Secret Knowledge',
    description:
      "Norgorber's domain over secrets grants you insight. You gain a +1 trait bonus on Knowledge (local) checks and can attempt Knowledge (local) checks untrained.",
    shortDescription: '+1 Knowledge (local); can use untrained',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Norgorber',
    prerequisites: [{ type: 'deity', deityName: 'Norgorber' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_local',
        value: 1,
        source: 'Secret Knowledge',
      },
    ],
    tags: ['knowledge', 'local', 'untrained'],
  },
  {
    id: 'practiced_deceiver',
    name: 'Practiced Deceiver',
    description:
      'Norgorber rewards those who lie well. You gain a +1 trait bonus on Bluff checks, and Bluff is always a class skill for you.',
    shortDescription: '+1 Bluff; class skill',
    source: 'Faiths of Corruption',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Norgorber',
    prerequisites: [{ type: 'deity', deityName: 'Norgorber' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.bluff',
        value: 1,
        source: 'Practiced Deceiver',
      },
    ],
    tags: ['bluff', 'class skill', 'deception'],
  },

  // ==================== ROVAGUG ====================
  {
    id: 'destructive_blows',
    name: 'Destructive Blows',
    description:
      "Rovagug's destructive power surges through your attacks. You gain a +1 trait bonus on Strength checks made to break objects and a +1 trait bonus on damage rolls against constructs.",
    shortDescription: '+1 Str checks to break objects; +1 damage vs constructs',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Rovagug',
    prerequisites: [{ type: 'deity', deityName: 'Rovagug' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'ability_check.strength',
        value: 1,
        source: 'Destructive Blows',
        condition: { type: 'custom', params: {}, description: 'To break objects' },
      },
    ],
    tags: ['strength', 'sunder', 'constructs', 'damage'],
  },
  {
    id: 'rage_of_the_destroyer',
    name: 'Rage of the Destroyer',
    description:
      'You channel the fury of the Rough Beast. Once per day when you are reduced to fewer than 0 hit points but not killed, you gain a +2 trait bonus on attack rolls for 1 round.',
    shortDescription: '+2 attack for 1 round 1/day when dropped below 0 HP',
    source: 'Faiths of Corruption',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Rovagug',
    prerequisites: [{ type: 'deity', deityName: 'Rovagug' }],
    effects: [],
    tags: ['attack', 'hit points', 'rage', 'fury'],
  },

  // ==================== URGATHOA ====================
  {
    id: 'deathly_pallor',
    name: 'Deathly Pallor',
    description:
      "Urgathoa's cold embrace protects you from the chill of death. You gain a +1 trait bonus on saving throws against death effects and energy drain.",
    shortDescription: '+1 saves vs death effects and energy drain',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Urgathoa',
    prerequisites: [{ type: 'deity', deityName: 'Urgathoa' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.all',
        value: 1,
        source: 'Deathly Pallor',
        condition: {
          type: 'custom',
          params: {},
          description: 'Against death effects and energy drain',
        },
      },
    ],
    tags: ['save', 'death', 'energy drain'],
  },
  {
    id: 'corpse_cannibal',
    name: 'Corpse Cannibal',
    description:
      "Urgathoa's gift lets you consume the dead to gain sustenance. You gain a +2 trait bonus on Survival checks to find food in the wild, and you never become sickened by eating spoiled food or raw meat.",
    shortDescription: '+2 Survival to find food; immune to sickness from spoiled/raw food',
    source: 'Faiths of Corruption',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Urgathoa',
    prerequisites: [{ type: 'deity', deityName: 'Urgathoa' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.survival',
        value: 2,
        source: 'Corpse Cannibal',
        condition: { type: 'custom', params: {}, description: 'To find food in the wild' },
      },
    ],
    tags: ['survival', 'food', 'sickness'],
  },

  // ==================== ZON-KUTHON ====================
  {
    id: 'pain_is_pleasure',
    name: 'Pain Is Pleasure',
    description:
      "Zon-Kuthon's embrace of pain grants you fortitude. You gain a +1 trait bonus on Fortitude saving throws.",
    shortDescription: '+1 Fortitude saves',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Zon-Kuthon',
    prerequisites: [{ type: 'deity', deityName: 'Zon-Kuthon' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.fortitude',
        value: 1,
        source: 'Pain Is Pleasure',
      },
    ],
    tags: ['save', 'fortitude', 'pain'],
  },
  {
    id: 'shadow_stalker',
    name: 'Shadow Stalker',
    description:
      "Zon-Kuthon's dominion over darkness aids your stealth. You gain a +1 trait bonus on Stealth checks, and Stealth is always a class skill for you.",
    shortDescription: '+1 Stealth; class skill',
    source: 'Faiths of Corruption',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Zon-Kuthon',
    prerequisites: [{ type: 'deity', deityName: 'Zon-Kuthon' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.stealth',
        value: 1,
        source: 'Shadow Stalker',
      },
    ],
    tags: ['stealth', 'class skill', 'shadow', 'darkness'],
  },
];
