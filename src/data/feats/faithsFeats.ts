import { BonusType } from '@/types/base';
import type { FeatDefinition } from '@/types/feats';

export const FAITHS_FEATS: FeatDefinition[] = [
  // ==================== FAITHS & PHILOSOPHIES ====================
  // Already in database (skipped): Channel Smite, Extra Channel, Selective Channeling, Improved Channel,
  //   Deific Obedience (ISG). Zen Archery is in Ultimate Combat — identical mechanics, skipped.

  {
    id: 'agnostic',
    name: 'Agnostic',
    description:
      'Your belief in the divine is weak, and divine forces find it harder to identify and target you. Any spell or effect that identifies your deity, religion, or divine affiliation automatically fails against you. You cannot be the subject of spells that depend on worshiping a deity (such as divine favor), but you also cannot be targeted by spells that harm worshipers of a particular deity.',
    shortDescription:
      'Divine identification effects fail against you; cannot gain or be harmed by deity-specific magic',
    source: 'Faiths & Philosophies',
    types: ['general'],
    prerequisites: [],
    effects: [],
    activationMode: 'passive',
    tags: ['divine', 'faith', 'agnostic', 'religion'],
  },

  {
    id: 'apocryphal',
    name: 'Apocryphal',
    description:
      'You have delved into heretical texts and forbidden lore, granting you access to one spell from the cleric spell list that is not normally available to your class. Once you select the spell, you may prepare and cast it as though it were on your class spell list at the same spell level as it appears on the cleric list. You must be able to cast spells of the appropriate level.',
    shortDescription: 'Add one cleric spell from heretical texts to your class spell list',
    source: 'Faiths & Philosophies',
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'knowledge_religion', ranks: 5 },
      { type: 'special', description: 'Able to cast divine spells' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['divine', 'spellcasting', 'heresy', 'religion'],
  },

  {
    id: 'atheist_abjurations',
    name: 'Atheist Abjurations',
    description:
      'Your rejection of the divine gives you a measure of protection against divine magic. You gain a +2 bonus on saving throws against divine spells. However, you cannot gain the benefit of divine spells cast on you willingly, and you treat all cure and inflict spells as having no effect when targeted at you intentionally.',
    shortDescription: '+2 saves vs. divine spells; cannot benefit from divine magic cast on you',
    source: 'Faiths & Philosophies',
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'Must not worship any deity, philosophy, or divine power' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.RESISTANCE,
        target: 'saving_throws.vs_divine_spells',
        value: 2,
        source: 'Atheist Abjurations',
      },
    ],
    activationMode: 'passive',
    tags: ['divine', 'atheist', 'saving throw', 'abjuration'],
  },

  {
    id: 'channel_ray',
    name: 'Channel Ray',
    description:
      'You can focus your channeled energy into a ray attack rather than releasing it in a burst. Instead of using your channel energy ability normally, you may channel it as a ranged touch attack with a range of 30 feet. The ray deals the same amount of damage (or healing) as the normal channel, and the target does not get a saving throw. The channeling still uses one of your daily channel energy uses.',
    shortDescription:
      'Channel energy as a ranged touch attack (30 ft) instead of a burst; no saving throw',
    source: 'Faiths & Philosophies',
    types: ['general'],
    prerequisites: [
      { type: 'class_feature', featureName: 'channel energy' },
      { type: 'ability_score', ability: 'WIS', minimum: 13 },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['channel energy', 'divine', 'ranged', 'healing'],
  },

  {
    id: 'defensive_faith',
    name: 'Defensive Faith',
    description:
      'Your spiritual discipline gives you a preternatural awareness of magical threats. You gain a +1 sacred bonus (or profane bonus, for evil-aligned casters) to your Armor Class against spells, spell-like abilities, and supernatural abilities. This bonus increases to +2 if you are in the area of your own consecrate or desecrate spell.',
    shortDescription:
      '+1 sacred/profane bonus to AC vs. spells and spell-like abilities; +2 in consecrate/desecrate area',
    source: 'Faiths & Philosophies',
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'knowledge_religion', ranks: 3 },
      { type: 'special', description: 'Must worship a deity, philosophy, or divine power' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.SACRED,
        target: 'ac.vs_spells',
        value: 1,
        source: 'Defensive Faith',
      },
    ],
    activationMode: 'passive',
    tags: ['divine', 'AC', 'sacred', 'defense', 'religion'],
  },

  {
    id: 'devoted_healer',
    name: 'Devoted Healer',
    description:
      'When you channel energy to heal, you may choose to forgo the saving throw for creatures in the area and instead cause your channel to automatically heal all living creatures for the minimum possible amount while you direct the remainder of the healing to one target as a touch attack. Alternatively, when you use a cure spell to restore hit points to a target, you gain temporary hit points equal to half the amount healed, lasting 1 minute.',
    shortDescription:
      'Channel to auto-heal all creatures (min amount) and boost one target; cure spells give temp HP',
    source: 'Faiths & Philosophies',
    types: ['general'],
    prerequisites: [
      { type: 'class_feature', featureName: 'channel positive energy' },
      { type: 'ability_score', ability: 'WIS', minimum: 13 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['channel energy', 'healing', 'divine', 'cleric'],
  },

  {
    id: 'devoted_muse',
    name: 'Devoted Muse',
    description:
      'Your spiritual practices enhance your bardic performances. You may use your bard levels as cleric levels and your cleric levels as bard levels for the purpose of determining the effects of your bardic performance and channel energy abilities. If you have both classes, they stack for these purposes.',
    shortDescription:
      'Bard and cleric levels stack for bardic performance and channel energy effects',
    source: 'Faiths & Philosophies',
    types: ['general'],
    prerequisites: [
      { type: 'class_feature', featureName: 'bardic performance' },
      { type: 'class_feature', featureName: 'channel energy' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['bard', 'cleric', 'divine', 'channel energy', 'bardic performance'],
  },

  {
    id: 'divine_defiance',
    name: 'Divine Defiance',
    description:
      'You are trained to resist the spells and powers of divine casters who oppose your philosophy. Choose an alignment. You gain a +2 bonus on saving throws against spells, spell-like abilities, and supernatural abilities from creatures of that alignment whose source is a divine caster or who are serving a deity of that alignment.',
    shortDescription:
      '+2 saves vs. spells/abilities from divine sources of a chosen opposing alignment',
    source: 'Faiths & Philosophies',
    types: ['general'],
    prerequisites: [{ type: 'skill', skillId: 'knowledge_religion', ranks: 5 }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.RESISTANCE,
        target: 'saving_throws.vs_opposing_divine',
        value: 2,
        source: 'Divine Defiance',
        condition: {
          type: 'custom',
          params: {},
          description: 'Against spells from divine sources of chosen opposing alignment',
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['divine', 'saving throw', 'religion', 'resistance'],
  },

  {
    id: 'domain_mastery',
    name: 'Domain Mastery',
    description:
      "You have mastered the use of one of your deity's domains. Choose one of your domains. You use your cleric level as your caster level for determining the effects of the domain powers from that domain, even if your caster level would normally be lower. Additionally, you may use the associated granted power one additional time per day.",
    shortDescription:
      "Full cleric level for one domain's powers; one extra use per day of that domain's power",
    source: 'Faiths & Philosophies',
    types: ['general'],
    prerequisites: [
      { type: 'class_feature', featureName: 'domain' },
      { type: 'level', minimum: 5, class: 'cleric' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['divine', 'domain', 'cleric', 'religion'],
  },

  {
    id: 'faiths_reach',
    name: "Faith's Reach",
    description:
      'Your faith empowers your divine spells to reach farther. You may apply the Reach Spell metamagic feat to your domain spells without increasing their spell level or casting time. You must still be able to cast the modified spell. This applies only to spells from your domain spell list, not all divine spells.',
    shortDescription:
      'Apply Reach Spell to domain spells for free (no level increase or extra casting time)',
    source: 'Faiths & Philosophies',
    types: ['general'],
    prerequisites: [
      { type: 'feat', featId: 'reach_spell' },
      { type: 'class_feature', featureName: 'domain' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['divine', 'domain', 'metamagic', 'reach', 'cleric'],
  },

  {
    id: 'favored_of_the_companions',
    name: 'Favored of the Companions',
    description:
      "Cavalier mounts, paladin mounts, and familiar companions react especially well to your divine presence. Any such companion under your control gains a +2 bonus on Will saving throws and a +1 sacred bonus to AC. Additionally, you may communicate with such companions as though you shared a language, regardless of the companion's Intelligence score.",
    shortDescription:
      'Animal and familiar companions gain +2 Will and +1 sacred AC; communicate with any companion',
    source: 'Faiths & Philosophies',
    types: ['general'],
    prerequisites: [
      { type: 'class_feature', featureName: 'animal companion or familiar' },
      { type: 'special', description: 'Must worship a deity' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.SACRED,
        target: 'companion.ac',
        value: 1,
        source: 'Favored of the Companions',
      },
      {
        type: 'bonus',
        bonusType: BonusType.SACRED,
        target: 'companion.will',
        value: 2,
        source: 'Favored of the Companions',
      },
    ],
    activationMode: 'passive',
    tags: ['divine', 'animal companion', 'familiar', 'religion'],
  },

  {
    id: 'ironclad_logic',
    name: 'Ironclad Logic',
    description:
      'Your philosophical training makes your mind nearly unshakeable. You gain a +2 bonus on Will saves against enchantment and mind-affecting effects. Additionally, once per day when you would fail a Will save against such an effect, you may reroll the saving throw and take the better result.',
    shortDescription:
      '+2 Will vs. enchantment/mind-affecting; 1/day reroll a failed Will save against such effects',
    source: 'Faiths & Philosophies',
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'INT', minimum: 13 },
      { type: 'skill', skillId: 'knowledge_religion', ranks: 3 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.INSIGHT,
        target: 'saving_throws.will.vs_mind_affecting',
        value: 2,
        source: 'Ironclad Logic',
      },
    ],
    activationMode: 'passive',
    tags: ['philosophy', 'will save', 'mind-affecting', 'enchantment', 'reason'],
  },

  {
    id: 'meditative_concentration',
    name: 'Meditative Concentration',
    description:
      'Years of meditation training allow you to concentrate on spells under conditions that would otherwise break your focus. You gain a +4 bonus on concentration checks made to cast spells defensively. Additionally, once per day you may enter a meditative state as a swift action; while in this state, you gain the benefit of the Improved Concentration feat for 1 minute.',
    shortDescription:
      '+4 on concentration checks to cast defensively; 1/day swift-action meditative focus for 1 min',
    source: 'Faiths & Philosophies',
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'WIS', minimum: 13 },
      { type: 'skill', skillId: 'knowledge_religion', ranks: 3 },
      { type: 'special', description: 'Must be able to cast spells' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.INSIGHT,
        target: 'concentration.cast_defensively',
        value: 4,
        source: 'Meditative Concentration',
      },
    ],
    activationMode: 'passive',
    tags: ['concentration', 'spellcasting', 'meditation', 'philosophy'],
  },

  {
    id: 'monastic_legacy',
    name: 'Monastic Legacy',
    description:
      'Your years training in a monastery continue to improve your unarmed strike even as you pursue other classes. Add half the levels you have in classes other than monk to your monk level when determining your unarmed strike damage. This feat has no effect if you are not a monk.',
    shortDescription: 'Half your non-monk levels add to monk level for unarmed strike damage',
    source: 'Faiths & Philosophies',
    types: ['general'],
    prerequisites: [
      { type: 'class_feature', featureName: 'still mind' },
      { type: 'level', minimum: 3, class: 'monk' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['monk', 'unarmed strike', 'multiclass', 'philosophy'],
  },

  {
    id: 'mystery_initiate',
    name: 'Mystery Initiate',
    description:
      "You have been initiated into the mysteries of a philosophy or esoteric faith, granting you access to one revelation from the oracle's mystery list. Choose a mystery; you gain access to one of its revelations as though you were a 1st-level oracle with that mystery. Your effective oracle level for this revelation equals your total character level minus 3 (minimum 1).",
    shortDescription:
      'Gain one oracle revelation from a chosen mystery at (level – 3) effective oracle level',
    source: 'Faiths & Philosophies',
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'knowledge_religion', ranks: 5 },
      { type: 'special', description: "Must not have the oracle's mystery class feature" },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['oracle', 'mystery', 'revelation', 'philosophy', 'divine'],
  },

  {
    id: 'naturalistic_focus',
    name: 'Naturalistic Focus',
    description:
      "Your focus on the natural world and its philosophy allows you to attune to nature even without the druid's formal training. You gain a +2 bonus on Handle Animal, Knowledge (nature), and Survival checks. If you have the wild empathy class feature, you may use it with a bonus equal to your character level rather than your class level.",
    shortDescription:
      '+2 to Handle Animal, Knowledge (nature), and Survival; wild empathy uses character level',
    source: 'Faiths & Philosophies',
    types: ['general'],
    prerequisites: [{ type: 'ability_score', ability: 'WIS', minimum: 13 }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.INSIGHT,
        target: 'skills.handle_animal',
        value: 2,
        source: 'Naturalistic Focus',
      },
      {
        type: 'bonus',
        bonusType: BonusType.INSIGHT,
        target: 'skills.knowledge_nature',
        value: 2,
        source: 'Naturalistic Focus',
      },
      {
        type: 'bonus',
        bonusType: BonusType.INSIGHT,
        target: 'skills.survival',
        value: 2,
        source: 'Naturalistic Focus',
      },
    ],
    activationMode: 'passive',
    tags: ['nature', 'druid', 'survival', 'philosophy', 'handle animal'],
  },

  {
    id: 'oracular_insight',
    name: 'Oracular Insight',
    description:
      'Your philosophical awareness borders on prophecy, granting you brief glimpses of possible futures. Once per day as an immediate action, you can negate a successful attack or failed saving throw against you by declaring you foresaw the outcome. You must use this ability before the results of the roll are applied. This ability cannot negate spells with the death descriptor.',
    shortDescription:
      '1/day negate a hit or failed save as an immediate action (not against death spells)',
    source: 'Faiths & Philosophies',
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'WIS', minimum: 15 },
      { type: 'skill', skillId: 'knowledge_religion', ranks: 7 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['philosophy', 'prophecy', 'divination', 'defense'],
  },

  {
    id: 'pantheistic_blessing',
    name: 'Pantheistic Blessing',
    description:
      'You draw on the blessings of multiple deities, allowing you to access one domain from a second deity you venerate. You gain the granted power and domain spell list of that domain as a secondary domain. However, you cannot use the granted power more than once per day regardless of class features that would otherwise allow extra uses.',
    shortDescription: 'Gain one domain from a second worshiped deity as a secondary domain',
    source: 'Faiths & Philosophies',
    types: ['general'],
    prerequisites: [
      { type: 'class_feature', featureName: 'domain' },
      { type: 'skill', skillId: 'knowledge_religion', ranks: 5 },
      { type: 'special', description: 'Must venerate more than one deity' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['divine', 'domain', 'cleric', 'pantheon', 'religion'],
  },

  {
    id: 'philosophical_minded',
    name: 'Philosophical Minded',
    description:
      'Your philosophical discipline trains you to recognize sophistry and logical traps. You gain a +2 bonus on Sense Motive checks to detect deception and on Will saves against language-dependent spells and effects. When you fail a Will save against a language-dependent effect, you may make another saving throw at the start of your next turn.',
    shortDescription:
      '+2 Sense Motive and Will vs. language-dependent; retry failed Will save next turn',
    source: 'Faiths & Philosophies',
    types: ['general'],
    prerequisites: [{ type: 'ability_score', ability: 'INT', minimum: 13 }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.INSIGHT,
        target: 'skills.sense_motive.vs_deception',
        value: 2,
        source: 'Philosophical Minded',
      },
      {
        type: 'bonus',
        bonusType: BonusType.INSIGHT,
        target: 'saving_throws.will.vs_language_dependent',
        value: 2,
        source: 'Philosophical Minded',
      },
    ],
    activationMode: 'passive',
    tags: ['philosophy', 'sense motive', 'will save', 'language-dependent'],
  },

  {
    id: 'rational_preparation',
    name: 'Rational Preparation',
    description:
      'Your philosophical approach to problems lets you prepare for any situation. When you make a Knowledge check, you may spend 1 minute of study before making the check (if the situation allows) to add your Intelligence modifier a second time to the result. Once per day, if you fail a skill check that you have at least 5 ranks in, you may immediately reroll it.',
    shortDescription:
      'Double INT mod on Knowledge checks with 1 min study; 1/day reroll a failed trained skill check',
    source: 'Faiths & Philosophies',
    types: ['general'],
    prerequisites: [{ type: 'ability_score', ability: 'INT', minimum: 13 }],
    effects: [],
    activationMode: 'conditional',
    tags: ['philosophy', 'knowledge', 'skill', 'intelligence', 'preparation'],
  },

  {
    id: 'regional_recluse',
    name: 'Regional Recluse',
    description:
      'By living in isolation in a particular region, you have become deeply attuned to its natural rhythms and hidden dangers. You gain a +4 bonus on Survival checks made in your home region. You also cannot be magically tracked or scryed while within your home region unless you are unconscious.',
    shortDescription: '+4 Survival in home region; cannot be tracked or scryed in home region',
    source: 'Faiths & Philosophies',
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'survival', ranks: 3 },
      { type: 'special', description: 'Must have lived in one region for at least one year' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.CIRCUMSTANCE,
        target: 'skills.survival',
        value: 4,
        source: 'Regional Recluse',
        condition: { type: 'custom', params: {}, description: 'Only when in home region' },
      },
    ],
    activationMode: 'conditional',
    tags: ['nature', 'survival', 'philosophy', 'recluse', 'region'],
  },

  {
    id: 'roaming_ancestor',
    name: 'Roaming Ancestor',
    description:
      'Your connection to ancestral wandering spirits lets you commune with the land wherever you travel. You are considered to be in your home region for the purpose of the Regional Recluse feat in any region you have spent at least one week in. Additionally, once per week you may ask a yes/no question of local ancestor spirits, receiving an answer as though using augury.',
    shortDescription:
      'Treat any region spent 1+ weeks in as home; 1/week augury-like answer from ancestor spirits',
    source: 'Faiths & Philosophies',
    types: ['general'],
    prerequisites: [
      { type: 'feat', featId: 'regional_recluse' },
      { type: 'skill', skillId: 'knowledge_history', ranks: 5 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['nature', 'philosophy', 'ancestor', 'divination', 'region'],
  },

  {
    id: 'stoic_pose',
    name: 'Stoic Pose',
    description:
      'By adopting a completely still, statue-like pose, you can make yourself difficult to detect. As a full-round action, you enter a Stoic Pose. While holding this pose, you gain a +10 bonus on Stealth checks, and you can make a Disguise check to appear as a statue or inanimate object without a penalty. You can hold this pose indefinitely, but you cannot take any actions other than observing your surroundings; taking any action immediately ends the pose.',
    shortDescription:
      'Full-round action: +10 Stealth and pass as a statue; pose ends immediately on any action',
    source: 'Faiths & Philosophies',
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'WIS', minimum: 13 },
      { type: 'skill', skillId: 'stealth', ranks: 5 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.CIRCUMSTANCE,
        target: 'skills.stealth',
        value: 10,
        source: 'Stoic Pose',
        condition: {
          type: 'custom',
          params: {},
          description: 'While holding the Stoic Pose (no actions possible)',
        },
      },
    ],
    activationMode: 'toggle',
    tags: ['stealth', 'disguise', 'philosophy', 'immobility'],
  },

  {
    id: 'touch_of_purity',
    name: 'Touch of Purity',
    description:
      'Your hands carry a divine cleansing power. As a standard action, you may touch a creature and attempt to remove one poison, disease, or curse affecting it. You must attempt a caster level check (DC 11 + the caster level of the effect or the disease/poison DC) to remove the effect. You may use this ability a number of times per day equal to your Wisdom modifier (minimum 1).',
    shortDescription:
      'Standard action touch removes one poison/disease/curse on a successful CL check (WIS mod/day)',
    source: 'Faiths & Philosophies',
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'WIS', minimum: 13 },
      {
        type: 'special',
        description: 'Must worship a lawful good, good, or neutral good deity or philosophy',
      },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['divine', 'healing', 'cleansing', 'poison', 'disease', 'curse'],
  },

  {
    id: 'unorthodox_method',
    name: 'Unorthodox Method',
    description:
      'You have developed a heterodox approach to channeling divine power. Choose one of the following: your channel energy now affects all creatures within range regardless of living/undead status, or your channel energy now heals both living and undead creatures simultaneously (dealing the healing amount to living and undead creatures in the area). Additionally, one spell you can cast that normally has the good, evil, law, or chaos descriptor loses that descriptor for you.',
    shortDescription:
      'Channel energy affects living and undead simultaneously; one alignment-descriptor spell loses its descriptor',
    source: 'Faiths & Philosophies',
    types: ['general'],
    prerequisites: [
      { type: 'class_feature', featureName: 'channel energy' },
      { type: 'skill', skillId: 'knowledge_religion', ranks: 5 },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['channel energy', 'divine', 'heresy', 'unorthodox', 'undead'],
  },

  // ==================== FAITHS OF PURITY ====================
  // Already in database (skipped): Channel Smite, Extra Channel, Selective Channeling, Improved Channel, Deific Obedience

  {
    id: 'sacred_defense',
    name: 'Sacred Defense',
    description:
      'Your faith in a good deity grants you a sacred shield against evil forces. You gain a +2 sacred bonus on saving throws against spells and effects from evil-aligned creatures or with the evil descriptor. This bonus increases to +4 when the effect specifically targets good-aligned creatures or bears the good descriptor on your protective effects.',
    shortDescription:
      '+2 sacred bonus on saves vs. evil spells/effects; +4 vs. effects targeting good creatures',
    source: 'Faiths of Purity',
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'Must be good alignment' },
      { type: 'special', description: 'Must worship a good deity' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.SACRED,
        target: 'saving_throws.vs_evil_effects',
        value: 2,
        source: 'Sacred Defense',
      },
    ],
    activationMode: 'passive',
    tags: ['good', 'divine', 'saving throw', 'sacred', 'protection'],
  },

  {
    id: 'protective_grace',
    name: 'Protective Grace',
    description:
      'Your gentle yet purposeful movements give you a preternatural ability to avoid harm. You gain a +1 dodge bonus to your AC. When you are not wearing medium or heavy armor and are not carrying a heavy load, this bonus increases to +2. This bonus is lost whenever you make an attack of opportunity.',
    shortDescription:
      '+1 dodge to AC (+2 in light/no armor); bonus lost after making an attack of opportunity',
    source: 'Faiths of Purity',
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'DEX', minimum: 13 },
      { type: 'special', description: 'Must be good alignment' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.DODGE,
        target: 'ac',
        value: 1,
        source: 'Protective Grace',
      },
    ],
    activationMode: 'passive',
    tags: ['good', 'dodge', 'AC', 'defense', 'divine'],
  },

  {
    id: 'purifying_channel_fop',
    name: 'Purifying Channel',
    description:
      'When you channel positive energy to heal, you may choose to simultaneously attempt to remove one condition from all affected targets rather than dealing extra damage. Conditions that can be removed include shaken, sickened, or fatigued. Each affected creature that is healed automatically loses one such condition (your choice for each target). This does not require an extra action.',
    shortDescription:
      'When channeling to heal, all affected creatures also lose one chosen minor condition',
    source: 'Faiths of Purity',
    types: ['general'],
    prerequisites: [
      { type: 'class_feature', featureName: 'channel positive energy' },
      { type: 'special', description: 'Must be good alignment' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['channel energy', 'good', 'healing', 'condition removal', 'divine'],
  },

  {
    id: 'glorious_heat_fop',
    name: 'Glorious Heat',
    description:
      'Whenever you cast a divine spell with the fire descriptor or your channel positive energy ability, one ally within 30 feet of the area or target gains a number of temporary hit points equal to your Charisma modifier (minimum 1) and is treated as if under the effects of endure elements for 1 hour. These temporary hit points last for 1 minute.',
    shortDescription:
      'Fire divine spells or channel positive energy give one ally temp HP (CHA mod) and endure elements',
    source: 'Faiths of Purity',
    types: ['general'],
    prerequisites: [
      { type: 'class_feature', featureName: 'channel positive energy' },
      { type: 'special', description: 'Must be good alignment' },
      { type: 'special', description: 'Must worship a deity with fire in its portfolio' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['good', 'fire', 'divine', 'healing', 'temperature'],
  },

  {
    id: 'alignment_channel_good',
    name: 'Alignment Channel (Good)',
    description:
      'Choose good. Your channel energy now damages evil-subtype outsiders (treating them as undead for the purpose of your channel energy) or heals good-subtype outsiders (treating them as living). This applies only when you specifically target creatures by alignment subtype rather than in a standard channel burst.',
    shortDescription:
      'Channel energy damages evil outsiders or heals good outsiders as though undead/living',
    source: 'Faiths of Purity',
    types: ['general'],
    prerequisites: [{ type: 'class_feature', featureName: 'channel energy' }],
    effects: [],
    activationMode: 'toggle',
    tags: ['good', 'channel energy', 'outsider', 'divine'],
  },

  {
    id: 'combat_healer_fop',
    name: 'Combat Healer',
    description:
      'You have trained to administer healing even in the heat of battle. Once per day, you may apply a prepared cure spell or use channel energy as a swift action instead of a standard action. This ability does not change the normal action economy of the chosen effect beyond the swift action substitution.',
    shortDescription:
      '1/day apply a cure spell or channel energy as a swift action instead of a standard action',
    source: 'Faiths of Purity',
    types: ['general'],
    prerequisites: [
      { type: 'class_feature', featureName: 'channel positive energy' },
      { type: 'bab', minimum: 6 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['good', 'healing', 'swift action', 'divine', 'channel energy'],
  },

  {
    id: 'merciful_channel',
    name: 'Merciful Channel',
    description:
      'When you channel positive energy to harm undead, you can choose to deal nonlethal damage with that channel energy. Undead affected by your channel energy can choose to fail their saving throw, and undead that fail take the channel energy damage as nonlethal damage. This is particularly useful for capturing undead without destroying them.',
    shortDescription:
      'Channel energy to harm undead can deal nonlethal damage; undead may choose to fail saves',
    source: 'Faiths of Purity',
    types: ['general'],
    prerequisites: [
      { type: 'class_feature', featureName: 'channel positive energy' },
      { type: 'special', description: 'Must be good alignment' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['good', 'channel energy', 'undead', 'nonlethal', 'divine'],
  },

  // ==================== FAITHS OF BALANCE ====================
  // Already in database (skipped): Channel Smite, Extra Channel, Selective Channeling, Improved Channel

  {
    id: 'alignment_channel_neutral',
    name: 'Alignment Channel (Neutral)',
    description:
      'Choose neutral. Your channel energy now damages outsiders with a lawful or chaotic subtype (treating them as undead) or heals true neutral outsiders. The choice of which subtype to affect must be made when you acquire this feat and cannot be changed. This allows channels to target specifically aligned outsiders.',
    shortDescription:
      'Channel energy damages lawful or chaotic outsiders, or heals true neutral outsiders',
    source: 'Faiths of Balance',
    types: ['general'],
    prerequisites: [
      { type: 'class_feature', featureName: 'channel energy' },
      { type: 'special', description: 'Must be neutral alignment' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['neutral', 'channel energy', 'outsider', 'divine', 'balance'],
  },

  {
    id: 'balance_of_power',
    name: 'Balance of Power',
    description:
      'You understand that power must be balanced, and you can redirect excess magical energy. Once per day when you succeed on a saving throw against a spell or spell-like ability, you may redirect that power as a free action to cast any spell you know of a level equal to or lower than the spell that triggered this ability, using your own ability scores and caster level. This does not require any additional spell slots.',
    shortDescription:
      '1/day on a successful save vs. a spell, redirect the energy to cast a spell of equal or lower level for free',
    source: 'Faiths of Balance',
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'WIS', minimum: 13 },
      { type: 'skill', skillId: 'knowledge_religion', ranks: 5 },
      { type: 'special', description: 'Must be neutral alignment' },
      { type: 'special', description: 'Must be able to cast spells' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['neutral', 'balance', 'spellcasting', 'divine', 'reactive'],
  },

  {
    id: 'neutralizing_channel',
    name: 'Neutralizing Channel',
    description:
      'When you channel energy, you may choose to channel in a way that neither helps nor harms any particular alignment. This neutralized channel energy heals all living creatures in the area (or damages all undead) at half the normal amount, regardless of their alignment. Good creatures do not receive bonus healing from other feats that require good alignment when you use this option.',
    shortDescription:
      'Channel energy at half effect that heals all living (or damages all undead) ignoring alignment restrictions',
    source: 'Faiths of Balance',
    types: ['general'],
    prerequisites: [
      { type: 'class_feature', featureName: 'channel energy' },
      { type: 'special', description: 'Must be neutral alignment' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['neutral', 'channel energy', 'balance', 'divine', 'healing'],
  },

  {
    id: 'equinox_blessing',
    name: 'Equinox Blessing',
    description:
      'You channel equal measures of positive and negative energy simultaneously. Once per day, you may channel both positive and negative energy in the same action, choosing two separate targets within your channel range — one receives healing and one takes damage, each for the full channel amount. Each affected creature may make its normal saving throw.',
    shortDescription:
      '1/day channel both energies simultaneously: one target healed, one damaged for full amounts',
    source: 'Faiths of Balance',
    types: ['general'],
    prerequisites: [
      { type: 'class_feature', featureName: 'channel energy' },
      { type: 'ability_score', ability: 'WIS', minimum: 15 },
      { type: 'special', description: 'Must be neutral alignment' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['neutral', 'channel energy', 'balance', 'divine', 'positive', 'negative'],
  },

  {
    id: 'impartial_mediator',
    name: 'Impartial Mediator',
    description:
      'Your neutral outlook lends authority to your words when settling disputes. You gain a +4 bonus on Diplomacy checks made to mediate disputes or negotiate between parties of opposing alignments. When both parties are willing to hear you out, you may roll twice and take the higher result. You may use Diplomacy to reduce hostility even with mindless creatures when acting as a mediator for their controller.',
    shortDescription:
      '+4 Diplomacy to mediate; roll twice when both parties willing; mediate even mindless creatures',
    source: 'Faiths of Balance',
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'CHA', minimum: 13 },
      { type: 'skill', skillId: 'diplomacy', ranks: 5 },
      { type: 'special', description: 'Must be neutral alignment' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.INSIGHT,
        target: 'skills.diplomacy.mediation',
        value: 4,
        source: 'Impartial Mediator',
        condition: {
          type: 'custom',
          params: {},
          description: 'When mediating disputes between opposing alignments',
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['neutral', 'diplomacy', 'balance', 'social', 'mediation'],
  },

  // ==================== FAITHS OF CORRUPTION ====================
  // Already in database (skipped): Channel Smite, Extra Channel, Selective Channeling, Improved Channel
  // Demonic Style is in styleFeats2.ts (Planar Adventures) — skipped

  {
    id: 'alignment_channel_evil',
    name: 'Alignment Channel (Evil)',
    description:
      'Choose evil. Your channel energy now damages good-subtype outsiders (treating them as undead for your channel energy) or heals evil-subtype outsiders (treating them as living creatures). The choice of affecting good or evil outsiders must be made when you select this feat and cannot be changed thereafter.',
    shortDescription:
      'Channel energy damages good outsiders or heals evil outsiders as though undead/living',
    source: 'Faiths of Corruption',
    types: ['general'],
    prerequisites: [
      { type: 'class_feature', featureName: 'channel energy' },
      { type: 'special', description: 'Must be evil alignment' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['evil', 'channel energy', 'outsider', 'divine', 'corruption'],
  },

  {
    id: 'corrupted_channel',
    name: 'Corrupted Channel',
    description:
      'When you channel negative energy, you may choose to taint the energy, causing it to deal an additional effect. Undead healed by your channel also gain a +2 morale bonus on attack and damage rolls for 1 round. Living creatures damaged by your channel who fail their saving throw are also sickened for 1 round. You must declare this modification before using channel energy.',
    shortDescription:
      'Channel negative energy: undead healed gain +2 attack/damage; living targets also sickened on failed save',
    source: 'Faiths of Corruption',
    types: ['general'],
    prerequisites: [
      { type: 'class_feature', featureName: 'channel negative energy' },
      { type: 'special', description: 'Must be evil alignment' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['evil', 'channel energy', 'negative energy', 'divine', 'undead', 'corruption'],
  },

  {
    id: 'profane_surge',
    name: 'Profane Surge',
    description:
      "You can pour fiendish energy into your spells, twisting their nature. Once per day when you cast an evil-descriptor spell, you may maximize it as though using the Maximize Spell metamagic feat without increasing the spell's level or casting time. Using this ability taints your aura, causing you to detect as evil for 24 hours even if you are neutral.",
    shortDescription:
      '1/day maximize an evil-descriptor spell for free; you detect as evil for 24 hours afterward',
    source: 'Faiths of Corruption',
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'spellcraft', ranks: 5 },
      { type: 'special', description: 'Must be evil or neutral alignment' },
      { type: 'special', description: 'Ability to cast spells with the evil descriptor' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['evil', 'spellcasting', 'metamagic', 'corruption', 'divine'],
  },

  {
    id: 'dark_blessing_foc',
    name: 'Dark Blessing',
    description:
      "Your corruption seeps into the ground around you. When you channel negative energy or cast an evil-descriptor spell, you may designate a 10-foot-radius area within the channel's burst. The ground in that area becomes desecrated as though under a desecrate spell for 1 hour per cleric level. Undead created in this area gain additional benefits as normal for desecrated ground.",
    shortDescription:
      'Channel negative energy or evil spells to desecrate a 10-ft radius for 1 hour/cleric level',
    source: 'Faiths of Corruption',
    types: ['general'],
    prerequisites: [
      { type: 'class_feature', featureName: 'channel negative energy' },
      { type: 'level', minimum: 3, class: 'cleric' },
      { type: 'special', description: 'Must be evil alignment' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['evil', 'channel energy', 'negative energy', 'desecrate', 'divine', 'undead'],
  },

  {
    id: 'heretical_casting',
    name: 'Heretical Casting',
    description:
      "You have bent the laws of divine magic, allowing you to draw on power from opposing divine sources. Once per day, you may prepare or cast one divine spell that is normally restricted to clerics of an opposing alignment (such as a good spell if you are evil), treating your caster level as 2 lower for that spell. The spell's alignment descriptor is considered to match your actual alignment for the purpose of consequences.",
    shortDescription:
      '1/day prepare/cast one opposing-alignment divine spell at CL -2; descriptor matches your alignment',
    source: 'Faiths of Corruption',
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'knowledge_religion', ranks: 7 },
      { type: 'special', description: 'Must be evil alignment' },
      { type: 'special', description: 'Ability to cast divine spells' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['evil', 'divine', 'heresy', 'corruption', 'spellcasting'],
  },

  {
    id: 'channel_discord_foc',
    name: 'Channel Discord',
    description:
      'When you channel negative energy to harm living creatures, you may choose to channel it as a wave of psychic discord instead of raw necrotic energy. Creatures that fail their saving throws against this channel are confused for 1 round instead of taking damage. Creatures that succeed are staggered for 1 round. This channel does not affect undead.',
    shortDescription:
      'Channel negative energy causes confusion (failed save) or staggered (success) instead of damage',
    source: 'Faiths of Corruption',
    types: ['general'],
    prerequisites: [
      { type: 'class_feature', featureName: 'channel negative energy' },
      { type: 'ability_score', ability: 'CHA', minimum: 13 },
      { type: 'special', description: 'Must be evil alignment' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['evil', 'channel energy', 'confusion', 'mind-affecting', 'divine', 'corruption'],
  },
];
