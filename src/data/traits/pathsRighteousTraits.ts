import type { TraitDefinition } from '@/types/traits';
import { BonusType } from '@/types/base';

export const PATHS_RIGHTEOUS_TRAITS: TraitDefinition[] = [
  // ==================== DIVINE ANTHOLOGY — BASIC (FAITH) ====================

  {
    id: 'acolyte_of_apocrypha',
    name: 'Acolyte of Apocrypha',
    description:
      'You have studied apocryphal texts and may select apocryphal subdomains associated with your patron deity. In some cases you can access subdomains from domains your deity does not normally grant (marked with an asterisk); when a subdomain modifies two domains, you must choose one you actually have access to.',
    shortDescription: 'May select apocryphal subdomains for your patron deity',
    source: 'Divine Anthology',
    verificationStatus: 'needs_review' as const,
    category: 'faith',
    prerequisites: [],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.TRAIT,
        target: 'domain.subdomain_selection',
        value: 0,
        source: 'Acolyte of Apocrypha',
      },
    ],
    tags: ['domain', 'subdomain', 'apocrypha', 'faith'],
  },
  {
    id: 'apprentice_prime_ascended',
    name: 'Apprentice',
    description:
      'You studied "The Majestic Book of the Prime Ascended" and gained a measure of magical training from its teachings. You can cast one 0-level spell from the sorcerer/wizard spell list as a spell-like ability once per day.',
    shortDescription: 'Cast one chosen cantrip 1/day as spell-like ability',
    source: 'Divine Anthology',
    verificationStatus: 'needs_review' as const,
    category: 'faith',
    prerequisites: [],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.TRAIT,
        target: 'spell_like_ability.cantrip',
        value: 0,
        source: 'Apprentice',
      },
    ],
    tags: ['spellcasting', 'cantrip', 'spell-like ability', 'prime ascended'],
  },
  {
    id: 'arcane_scholar_da',
    name: 'Arcane Scholar',
    description:
      'Your studies of the "Prime Archmage" chapter of divine texts have honed your magical intellect. Select either Knowledge (arcana) or Spellcraft; you gain a +1 trait bonus on that skill and it is a class skill for you.',
    shortDescription: '+1 to Knowledge (arcana) or Spellcraft; class skill',
    source: 'Divine Anthology',
    verificationStatus: 'needs_review' as const,
    category: 'faith',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_arcana_or_spellcraft',
        value: 1,
        source: 'Arcane Scholar',
      },
    ],
    tags: ['knowledge', 'spellcraft', 'class skill', 'magic'],
  },
  {
    id: 'crusader_da',
    name: 'Crusader',
    description:
      'Your studies of the "Prime Commander" chapter and firsthand accounts of battles at the Worldwound have prepared you to fight the demonic hordes. You gain a +1 trait bonus on attack rolls against outsiders with the chaotic subtype.',
    shortDescription: '+1 attack rolls vs chaotic outsiders',
    source: 'Divine Anthology',
    verificationStatus: 'needs_review' as const,
    category: 'faith',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'attack.vs_chaotic_outsider',
        value: 1,
        source: 'Crusader',
      },
    ],
    tags: ['attack', 'outsider', 'chaotic', 'combat'],
  },
  {
    id: 'darkest_before_dawn',
    name: 'Darkest Before Dawn',
    description:
      'Your steadfast faith provides a bulwark against despair. You gain a +2 trait bonus on saving throws against spells with the emotion, fear, or pain descriptor. Once per day, you may choose to increase this bonus to +4 for a single saving throw before you roll.',
    shortDescription: '+2 saves vs emotion/fear/pain; once/day +4 instead',
    source: 'Divine Anthology',
    verificationStatus: 'needs_review' as const,
    category: 'faith',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.vs_emotion_fear_pain',
        value: 2,
        source: 'Darkest Before Dawn',
      },
    ],
    tags: ['save', 'emotion', 'fear', 'pain', 'resilience'],
  },
  {
    id: 'heedful_readiness',
    name: 'Heedful Readiness',
    description:
      'Through disciplined meditation and mindfulness, you have trained your mind to react swiftly. Once per day, you may add your Wisdom modifier to a single initiative check.',
    shortDescription: 'Once/day add Wisdom modifier to one initiative check',
    source: 'Divine Anthology',
    verificationStatus: 'needs_review' as const,
    category: 'faith',
    prerequisites: [],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.TRAIT,
        target: 'initiative',
        value: 0,
        source: 'Heedful Readiness',
      },
    ],
    tags: ['initiative', 'wisdom', 'meditation'],
  },
  {
    id: 'masked_da',
    name: 'Masked',
    description:
      'Your training in the "Prime Conspirator" chapter has taught you that concealing your true identity is essential to keeping secrets. Once per day when making a Disguise check, you may roll twice and take the higher result.',
    shortDescription: 'Once/day roll Disguise twice, take higher result',
    source: 'Divine Anthology',
    verificationStatus: 'needs_review' as const,
    category: 'faith',
    prerequisites: [],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.TRAIT,
        target: 'skill.disguise',
        value: 0,
        source: 'Masked',
      },
    ],
    tags: ['disguise', 'deception', 'reroll'],
  },
  {
    id: 'meditative_rest',
    name: 'Meditative Rest',
    description:
      'Through disciplined faith, you can maintain your spell preparation despite minor interruptions. You ignore the first interruption during rest for the purpose of determining how long you need to rest in full to regain the capacity to prepare spells, provided the interruption lasts no more than 15 minutes. Any spells you cast during such an interruption do not count against your daily limit when you wake and prepare spells.',
    shortDescription: 'Ignore one rest interruption (up to 15 min) per night for spell prep',
    source: 'Divine Anthology',
    verificationStatus: 'needs_review' as const,
    category: 'faith',
    prerequisites: [],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.TRAIT,
        target: 'rest.spell_preparation',
        value: 0,
        source: 'Meditative Rest',
      },
    ],
    tags: ['rest', 'spellcasting', 'preparation', 'meditation'],
  },
  {
    id: 'secret_keeper_da',
    name: 'Secret Keeper',
    description:
      "Your training in deception through necessity has sharpened your ability to mislead. You gain a +3 trait bonus on Bluff checks when they are opposed by another creature's Sense Motive check.",
    shortDescription: '+3 Bluff when opposed by Sense Motive',
    source: 'Divine Anthology',
    verificationStatus: 'needs_review' as const,
    category: 'faith',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.bluff',
        value: 3,
        source: 'Secret Keeper',
      },
    ],
    tags: ['bluff', 'deception', 'social'],
  },
  {
    id: 'strength_of_submission',
    name: 'Strength of Submission',
    description:
      "Your devotion to Razmir's church teaches that submission is its own form of power. Whenever you are under the effects of a compulsion effect, you gain a +1 trait bonus on attack and damage rolls.",
    shortDescription: '+1 attack and damage while under a compulsion effect',
    source: 'Divine Anthology',
    verificationStatus: 'needs_review' as const,
    category: 'faith',
    subcategory: 'Razmir',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'attack.melee',
        value: 1,
        source: 'Strength of Submission',
        condition: {
          type: 'custom',
          params: {},
          description: 'While under the effects of a compulsion effect',
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'damage.melee',
        value: 1,
        source: 'Strength of Submission',
        condition: {
          type: 'custom',
          params: {},
          description: 'While under the effects of a compulsion effect',
        },
      },
    ],
    tags: ['attack', 'damage', 'compulsion', 'Razmir'],
  },
  {
    id: 'student_of_history_da',
    name: 'Student of History',
    description:
      'Your path to enlightenment runs through the study of history. You gain a +1 trait bonus on Knowledge (history) checks, and Knowledge (history) is a class skill for you.',
    shortDescription: '+1 Knowledge (history); class skill',
    source: 'Divine Anthology',
    verificationStatus: 'needs_review' as const,
    category: 'faith',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_history',
        value: 1,
        source: 'Student of History',
      },
    ],
    tags: ['knowledge', 'history', 'class skill'],
  },
  {
    id: 'traditionalist_prime_ascended',
    name: 'Traditionalist (Prime Ascended)',
    description:
      'You value established customs and aristocratic conventions as part of your faith. You gain a +1 trait bonus on Knowledge (nobility) checks, and Knowledge (nobility) is a class skill for you.',
    shortDescription: '+1 Knowledge (nobility); class skill',
    source: 'Divine Anthology',
    verificationStatus: 'needs_review' as const,
    category: 'faith',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_nobility',
        value: 1,
        source: 'Traditionalist (Prime Ascended)',
      },
    ],
    tags: ['knowledge', 'nobility', 'class skill', 'prime ascended'],
  },
  {
    id: 'undaunted_da',
    name: 'Undaunted',
    description:
      'You have faced intimidation and bullying throughout your upbringing for following your path of freedom, and the experience has made you resilient to fear-based manipulation. The DC to demoralize you with an Intimidate check increases by 2.',
    shortDescription: 'DC to demoralize you with Intimidate +2',
    source: 'Divine Anthology',
    verificationStatus: 'needs_review' as const,
    category: 'faith',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'defense.demoralize_dc',
        value: 2,
        source: 'Undaunted',
      },
    ],
    tags: ['intimidate', 'demoralize', 'fear', 'resilience'],
  },
  {
    id: 'unshackled_da',
    name: 'Unshackled',
    description:
      'You have escaped slavery or other imprisonment and have vowed never to be shackled again. You gain a +1 trait bonus on Escape Artist checks, and Escape Artist is a class skill for you.',
    shortDescription: '+1 Escape Artist; class skill',
    source: 'Divine Anthology',
    verificationStatus: 'needs_review' as const,
    category: 'faith',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.escape_artist',
        value: 1,
        source: 'Unshackled',
      },
    ],
    tags: ['escape artist', 'class skill', 'freedom'],
  },
  {
    id: 'untrained_scholar_da',
    name: 'Untrained Scholar',
    description:
      'Your modest academic exposure outside your primary pursuits grants a measure of general knowledge. Once per day, you may attempt a Knowledge (geography), Knowledge (history), or Knowledge (local) check untrained with a +2 trait bonus.',
    shortDescription: 'Once/day attempt one untrained Knowledge check with +2 bonus',
    source: 'Divine Anthology',
    verificationStatus: 'needs_review' as const,
    category: 'faith',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_untrained',
        value: 2,
        source: 'Untrained Scholar',
      },
    ],
    tags: ['knowledge', 'untrained', 'geography', 'history', 'local'],
  },

  // ==================== DIVINE ANTHOLOGY — RELIGION (ANDOLETTA) ====================

  {
    id: 'andolettas_consolation',
    name: "Andoletta's Consolation",
    description:
      'A follower or agent of Andoletta once offered you unconventional comfort during a time of personal loss, and the memory of that kindness fortifies you against emotional manipulation. You gain a +2 trait bonus on saving throws against emotion and fear effects. If you have immunity to fear, you instead gain a +4 trait bonus on saves against emotion effects.',
    shortDescription: '+2 saves vs emotion and fear; +4 vs emotion if immune to fear',
    source: 'Divine Anthology',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Andoletta',
    prerequisites: [{ type: 'deity', deityName: 'Andoletta' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.vs_emotion_fear',
        value: 2,
        source: "Andoletta's Consolation",
      },
    ],
    tags: ['save', 'emotion', 'fear', 'Andoletta'],
  },
  {
    id: 'enemy_of_delusion',
    name: 'Enemy of Delusion',
    description:
      "You once witnessed injustice perpetrated by someone acting under delusion or ignorance, and Andoletta's teachings guide you to grant clarity to those similarly afflicted. Once per day, when you confirm a critical hit, successfully use a smite attack, or use lay on hands against a creature suffering from a charm or compulsion effect, you may invoke Andoletta to grant the creature clarity. If the original effect allowed a saving throw, the creature may attempt a new saving throw against it; success ends the effect immediately.",
    shortDescription:
      'Once/day grant a new save vs charm/compulsion on crit, smite, or lay on hands',
    source: 'Divine Anthology',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Andoletta',
    prerequisites: [{ type: 'deity', deityName: 'Andoletta' }],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.TRAIT,
        target: 'condition.charm_compulsion',
        value: 0,
        source: 'Enemy of Delusion',
      },
    ],
    tags: ['charm', 'compulsion', 'Andoletta', 'lay on hands', 'smite'],
  },

  // ==================== DIVINE ANTHOLOGY — RELIGION (ANGRADD) ====================

  {
    id: 'angradds_valor',
    name: "Angradd's Valor",
    description:
      'You aspire to join Angradd in the afterlife through righteous combat, and your faith fuels your martial aggression. You gain a +1 trait bonus on all melee attack rolls when you charge.',
    shortDescription: '+1 melee attack rolls when charging',
    source: 'Divine Anthology',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Angradd',
    prerequisites: [{ type: 'deity', deityName: 'Angradd' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'attack.melee',
        value: 1,
        source: "Angradd's Valor",
        condition: {
          type: 'custom',
          params: {},
          description: 'When charging',
        },
      },
    ],
    tags: ['attack', 'melee', 'charge', 'Angradd'],
  },
  {
    id: 'rousing_courage',
    name: 'Rousing Courage',
    description:
      "Witnessing a dwarven warrior's courageous act performed in Angradd's name during your early combat experience inspired you to share that courage with others. Once per day, when you generate an effect that grants a morale bonus, increase that bonus by 1 for all creatures affected.",
    shortDescription: 'Once/day increase a morale bonus you generate by 1',
    source: 'Divine Anthology',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Angradd',
    prerequisites: [{ type: 'deity', deityName: 'Angradd' }],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.TRAIT,
        target: 'bonus.morale_granted',
        value: 1,
        source: 'Rousing Courage',
      },
    ],
    tags: ['morale', 'bonus', 'Angradd', 'leadership'],
  },

  // ==================== DIVINE ANTHOLOGY — RELIGION (ARQUEROS) ====================

  {
    id: 'eye_of_arqueros',
    name: 'Eye of Arqueros',
    description:
      'You once dozed off during an important task but received a divine vision from Arqueros that roused you in time to prevent failure. You gain a +3 trait bonus on Perception checks attempted while you are alone on guard duty.',
    shortDescription: '+3 Perception while alone on guard duty',
    source: 'Divine Anthology',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Arqueros',
    prerequisites: [{ type: 'deity', deityName: 'Arqueros' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.perception',
        value: 3,
        source: 'Eye of Arqueros',
        condition: {
          type: 'custom',
          params: {},
          description: 'While alone on guard duty',
        },
      },
    ],
    tags: ['perception', 'guard', 'Arqueros'],
  },
  {
    id: 'living_bulwark',
    name: 'Living Bulwark',
    description:
      "Arqueros's example as the Golden Bulwark inspires you to give your all for those you protect. Once per day, when an adjacent ally becomes the target of an attack before the attack roll is made, you may use an immediate action to redirect that attack to yourself instead.",
    shortDescription: 'Once/day redirect an adjacent ally attack to yourself as immediate action',
    source: 'Divine Anthology',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Arqueros',
    prerequisites: [{ type: 'deity', deityName: 'Arqueros' }],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.TRAIT,
        target: 'defense.redirect_attack',
        value: 0,
        source: 'Living Bulwark',
      },
    ],
    tags: ['defense', 'ally', 'protection', 'Arqueros'],
  },

  // ==================== DIVINE ANTHOLOGY — RELIGION (CHALDIRA) ====================

  {
    id: 'chaldiras_luck',
    name: "Chaldira's Luck",
    description:
      'You once escaped a perilous situation in your youth through divine intervention after beseeching Chaldira Zuzaristan. Once per day, when making a skill check, you may roll twice and take the better result.',
    shortDescription: 'Once/day roll a skill check twice, take the better result',
    source: 'Divine Anthology',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Chaldira',
    prerequisites: [{ type: 'deity', deityName: 'Chaldira' }],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.TRAIT,
        target: 'skill.any',
        value: 0,
        source: "Chaldira's Luck",
      },
    ],
    tags: ['luck', 'reroll', 'skill', 'Chaldira'],
  },
  {
    id: 'mischievous_smite',
    name: 'Mischievous Smite',
    description:
      "You believe that mischief is a sacred method of humbling your adversaries, in accordance with Chaldira's teachings. When you perform a dirty trick combat maneuver while your smite evil bonus applies to combat maneuver checks, you do not provoke attacks of opportunity. If you already have an ability that prevents such attacks of opportunity (such as Improved Dirty Trick), you instead gain a +2 trait bonus on dirty trick combat maneuver checks against creatures that are the targets of your smite.",
    shortDescription: 'No AoO on dirty trick while smiting; or +2 dirty trick CMB vs smite target',
    source: 'Divine Anthology',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Chaldira',
    prerequisites: [{ type: 'deity', deityName: 'Chaldira' }],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.TRAIT,
        target: 'combat_maneuver.dirty_trick',
        value: 0,
        source: 'Mischievous Smite',
        condition: {
          type: 'custom',
          params: {},
          description: 'While smite evil bonus applies to CMB',
        },
      },
    ],
    tags: ['dirty trick', 'smite', 'combat maneuver', 'Chaldira'],
  },

  // ==================== DIVINE ANTHOLOGY — RELIGION (FOLGRIT) ====================

  {
    id: 'folgrits_bounty',
    name: "Folgrit's Bounty",
    description:
      'Your training in sacred hearth-keeping and culinary preparation grants you a +1 trait bonus on Profession (cook) checks. You may prepare a nourishing meal for up to eight people with 1 hour of work (costing 20 gp). Each person who consumes a portion (taking 10 minutes) within one day gains a +1 morale bonus applicable to any single skill check or attack roll of their choice within the next 8 hours; the bonus must be designated before the roll. A creature cannot benefit from another such meal for 24 hours after receiving this benefit.',
    shortDescription:
      '+1 Profession (cook); cook morale meals granting +1 to one roll within 8 hours',
    source: 'Divine Anthology',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Folgrit',
    prerequisites: [{ type: 'deity', deityName: 'Folgrit' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.profession_cook',
        value: 1,
        source: "Folgrit's Bounty",
      },
    ],
    tags: ['profession', 'cook', 'morale', 'Folgrit'],
  },
  {
    id: 'folgrits_mercy',
    name: "Folgrit's Mercy",
    description:
      "You were called to defend home or family during a critical moment and gained unexpected clarity through Folgrit's grace. Once per day when you use lay on hands, you may also cure the target of 1d4 points of Intelligence, Wisdom, or Charisma damage (your choice).",
    shortDescription: 'Once/day lay on hands also cures 1d4 ability damage (INT, WIS, or CHA)',
    source: 'Divine Anthology',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Folgrit',
    prerequisites: [{ type: 'deity', deityName: 'Folgrit' }],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.TRAIT,
        target: 'lay_on_hands.ability_damage',
        value: 0,
        source: "Folgrit's Mercy",
      },
    ],
    tags: ['lay on hands', 'ability damage', 'healing', 'Folgrit'],
  },

  // ==================== DIVINE ANTHOLOGY — RELIGION (KOLS) ====================

  {
    id: 'oathkeepers_vow',
    name: "Oathkeeper's Vow",
    description:
      'Your training in the sacred art of oath-making under Kols has expanded your arsenal as a paladin. The following spells are added to your paladin spell list: command (1st), forbid action (1st), suggestion restricted to fulfilling prior promises (2nd), lesser geas (3rd), and geas/quest (4th).',
    shortDescription:
      'Adds command, forbid action, suggestion, lesser geas, geas/quest to paladin list',
    source: 'Divine Anthology',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Kols',
    prerequisites: [
      { type: 'deity', deityName: 'Kols' },
      { type: 'special', description: 'Must be a paladin' },
    ],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.TRAIT,
        target: 'spell_list.paladin',
        value: 0,
        source: "Oathkeeper's Vow",
      },
    ],
    tags: ['paladin', 'spell list', 'oath', 'Kols'],
  },
  {
    id: 'relentless_duty',
    name: 'Relentless Duty',
    description:
      'Your upbringing instilled a commitment to keeping promises. Once per day, you may take 10 on a skill check attempted as part of fulfilling a prior promise, even if you are distracted or in combat.',
    shortDescription: 'Once/day take 10 on a skill check made to fulfill a promise, even in combat',
    source: 'Divine Anthology',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Kols',
    prerequisites: [{ type: 'deity', deityName: 'Kols' }],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.TRAIT,
        target: 'skill.any',
        value: 0,
        source: 'Relentless Duty',
        condition: {
          type: 'custom',
          params: {},
          description: 'Once/day when fulfilling a prior promise',
        },
      },
    ],
    tags: ['skill', 'take 10', 'oath', 'Kols'],
  },

  // ==================== DIVINE ANTHOLOGY — RELIGION (RAGATHIEL) ====================

  {
    id: 'avowed_inspiration',
    name: 'Avowed Inspiration',
    description:
      "You channel divine inspiration similar to Ragathiel's focused wrath. Once per day, when you attack an opponent who damaged you earlier in the same battle, you may use a move action to inspire your visible allies. Each ally within 30 feet who can see you gains a +2 morale bonus to their next attack roll.",
    shortDescription:
      'Once/day move action: allies in 30 ft gain +2 morale on next attack vs foe that hurt you',
    source: 'Divine Anthology',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Ragathiel',
    prerequisites: [{ type: 'deity', deityName: 'Ragathiel' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'attack.melee',
        value: 2,
        source: 'Avowed Inspiration',
        condition: {
          type: 'custom',
          params: {},
          description: 'Morale bonus granted to allies within 30 ft on next attack roll',
        },
      },
    ],
    tags: ['morale', 'ally', 'attack', 'Ragathiel'],
  },
  {
    id: 'redeemed_by_ragathiel',
    name: 'Redeemed by Ragathiel',
    description:
      "Evil influences once sought to shape your values, but Ragathiel's inspiration guided you toward moral conduct instead. You gain a +2 trait bonus on Sense Motive checks to see through an evil creature's Bluff attempts.",
    shortDescription: '+2 Sense Motive vs evil creatures bluffing',
    source: 'Divine Anthology',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Ragathiel',
    prerequisites: [{ type: 'deity', deityName: 'Ragathiel' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.sense_motive',
        value: 2,
        source: 'Redeemed by Ragathiel',
        condition: {
          type: 'custom',
          params: {},
          description: "Against evil creatures' Bluff attempts",
        },
      },
    ],
    tags: ['sense motive', 'bluff', 'evil', 'Ragathiel'],
  },

  // ==================== DIVINE ANTHOLOGY — RELIGION (SHIZURU) ====================

  {
    id: 'ancestors_blade',
    name: "Ancestor's Blade",
    description:
      'You have trained with a weapon inherited from a venerable ancestor who revered Shizuru. At character creation you receive an heirloom masterwork weapon worth up to 400 gp. You also gain a +1 trait bonus on attack rolls with weapons of that type when you smite evil.',
    shortDescription:
      'Start with heirloom masterwork weapon (up to 400 gp); +1 attack with that weapon type when smiting evil',
    source: 'Divine Anthology',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Shizuru',
    prerequisites: [{ type: 'deity', deityName: 'Shizuru' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'attack.heirloom_weapon_type',
        value: 1,
        source: "Ancestor's Blade",
        condition: {
          type: 'custom',
          params: {},
          description: 'When using smite evil',
        },
      },
    ],
    tags: ['weapon', 'masterwork', 'smite', 'Shizuru'],
  },
  {
    id: 'pristine_reputation',
    name: 'Pristine Reputation',
    description:
      'You come from a particularly respected family, religious order, school, or similar organization devoted to Shizuru, and you leverage that heritage to strengthen your sense of self. Once per day, when you fail a saving throw against a charm or compulsion effect, you may attempt that save again. If you do, you gain a +2 trait bonus to the reroll and must use the new result.',
    shortDescription: 'Once/day reroll a failed save vs charm or compulsion with +2 trait bonus',
    source: 'Divine Anthology',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Shizuru',
    prerequisites: [{ type: 'deity', deityName: 'Shizuru' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.vs_charm_compulsion',
        value: 2,
        source: 'Pristine Reputation',
        condition: {
          type: 'custom',
          params: {},
          description: 'Once/day reroll on failed save vs charm or compulsion',
        },
      },
    ],
    tags: ['save', 'charm', 'compulsion', 'reroll', 'Shizuru'],
  },

  // ==================== DIVINE ANTHOLOGY — RELIGION (TRUDD) ====================

  {
    id: 'guardian_smite',
    name: 'Guardian Smite',
    description:
      "You were trained by Trudd's paladins to serve as a blessed, living barrier against enemies who threaten those you hold dear. Once per day when using smite evil against a foe, you may choose to halve the damage dealt to that enemy in exchange for reducing its speed to 5 feet for 1 round.",
    shortDescription:
      'Once/day smite evil: halve damage dealt, but target speed reduced to 5 ft for 1 round',
    source: 'Divine Anthology',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Trudd',
    prerequisites: [
      { type: 'deity', deityName: 'Trudd' },
      { type: 'special', description: 'Must be a paladin of Trudd' },
    ],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.TRAIT,
        target: 'smite_evil.movement_reduction',
        value: 0,
        source: 'Guardian Smite',
      },
    ],
    tags: ['smite', 'paladin', 'movement', 'Trudd'],
  },
  {
    id: 'mighty_protector',
    name: 'Mighty Protector',
    description:
      'In your youth you witnessed a tragedy befalling an innocent and swore to Trudd to become strong enough to prevent such things. Once per day when you hit an enemy with a melee attack, you may use a free action to attempt an aid another action. If successful, an adjacent ally gains a +4 bonus to AC instead of the normal +2 for that round against the targeted foe.',
    shortDescription:
      'Once/day free aid another on melee hit: adjacent ally gains +4 AC (instead of +2) vs that foe',
    source: 'Divine Anthology',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Trudd',
    prerequisites: [{ type: 'deity', deityName: 'Trudd' }],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.TRAIT,
        target: 'combat.aid_another',
        value: 0,
        source: 'Mighty Protector',
      },
    ],
    tags: ['aid another', 'AC', 'protection', 'Trudd'],
  },

  // ==================== DIVINE ANTHOLOGY — RELIGION (VILDEIS) ====================

  {
    id: 'blind_zeal',
    name: 'Blind Zeal',
    description:
      'You received training from followers of Vildeis in sensory compensation. You do not need to make a skill check to move at full speed despite blindness. The penalties from blindness apply only to Acrobatics, Ride, Sleight of Hand, and Stealth checks (–4 penalty). You also gain Blind-Fight as a bonus feat. These benefits are lost if you gain sight but are regained if you become blind again.',
    shortDescription:
      'Blind-Fight bonus feat; reduced blindness penalties; move full speed while blind',
    source: 'Divine Anthology',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Vildeis',
    prerequisites: [{ type: 'deity', deityName: 'Vildeis' }],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.TRAIT,
        target: 'condition.blindness_penalties',
        value: 0,
        source: 'Blind Zeal',
      },
    ],
    tags: ['blindness', 'Blind-Fight', 'Vildeis', 'movement'],
  },
  {
    id: 'resilient_martyr',
    name: 'Resilient Martyr',
    description:
      'You once interposed yourself between an innocent and a dangerous evil threat, suffering significant blood loss and narrowly escaping death, and Vildeis blessed your recovery. You recover twice as many hit points and points of ability damage as normal when you rest, or three times as many when you take total bed rest.',
    shortDescription: 'Recover 2x HP and ability damage per rest; 3x on total bed rest',
    source: 'Divine Anthology',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Vildeis',
    prerequisites: [
      { type: 'deity', deityName: 'Vildeis' },
      {
        type: 'special',
        description:
          'Must have interposed yourself between an innocent and a dangerous evil threat',
      },
    ],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.TRAIT,
        target: 'recovery.rest',
        value: 0,
        source: 'Resilient Martyr',
      },
    ],
    tags: ['recovery', 'rest', 'healing', 'Vildeis'],
  },

  // ==================== DIVINE ANTHOLOGY — RELIGION (YUELRAL) ====================

  {
    id: 'gemstone_collector',
    name: 'Gemstone Collector',
    description:
      "Your deep appreciation for gemstones' natural beauty, as taught by Yuelral, provides a steadying influence provided you carry sufficient wealth in bejeweled objects. As long as you carry bejeweled items totaling at least 200 gp × your character level in combined value, you gain a +1 trait bonus on all Will saving throws and a +2 trait bonus on a single Charisma-based skill check of your choice.",
    shortDescription: '+1 Will saves; +2 one Cha skill; requires gems worth 200 gp × level',
    source: 'Divine Anthology',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Yuelral',
    prerequisites: [{ type: 'deity', deityName: 'Yuelral' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.will',
        value: 1,
        source: 'Gemstone Collector',
        condition: {
          type: 'custom',
          params: {},
          description: 'While carrying bejeweled items worth at least 200 gp x character level',
        },
      },
    ],
    tags: ['will', 'save', 'charisma', 'gems', 'Yuelral'],
  },
  {
    id: 'natural_magic_yuelral',
    name: 'Natural Magic',
    description:
      "Yuelral's teachings on the fundamental connection between magic and nature have broadened your understanding of spells. You select two 0-level druid spells. Those spells are treated as being on your class spell list and as spells known for every spellcasting class you possess.",
    shortDescription:
      'Two 0-level druid spells added to all your spellcasting class lists and spells known',
    source: 'Divine Anthology',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Yuelral',
    prerequisites: [{ type: 'deity', deityName: 'Yuelral' }],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.TRAIT,
        target: 'spell_list.all_classes',
        value: 0,
        source: 'Natural Magic',
      },
    ],
    tags: ['druid', 'cantrip', 'spell list', 'nature', 'Yuelral'],
  },
];

// CHECKPOINT: last_written=natural_magic_yuelral, written=37/37, status=complete
