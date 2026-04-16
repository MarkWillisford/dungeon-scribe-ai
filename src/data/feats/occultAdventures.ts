import { BonusType } from '@/types/base';
import type { FeatDefinition } from '@/types/feats';

export const OA_FEATS: FeatDefinition[] = [
  // ==================== PSYCHIC FEATS ====================
  {
    id: 'psychic_sensitivity',
    name: 'Psychic Sensitivity',
    description:
      'You unlock the secrets of the occult world. You gain access to occult skill unlocks for the skills you have ranks in. You can use phrenology, psychometry, and read aura as if you had the Psychic Sensitivity trait.',
    shortDescription: 'Gain access to occult skill unlocks',
    source: 'Occult Adventures',
    types: ['general'],
    prerequisites: [],
    effects: [],
    activationMode: 'passive',
    tags: ['psychic', 'occult', 'skill unlock'],
  },
  {
    id: 'psychic_virtuoso',
    name: 'Psychic Virtuoso',
    description:
      'Your mastery of occult skill unlocks has reached its peak. When using an occult skill unlock, you can take 10 even if stress or distractions would normally prevent you from doing so. Additionally, you can use each occult skill unlock one additional time per day.',
    shortDescription: 'Take 10 on occult skill unlocks, extra use per day',
    source: 'Occult Adventures',
    types: ['general'],
    prerequisites: [
      { type: 'feat', featId: 'psychic_sensitivity' },
      { type: 'special', description: '5 ranks in any skill with an occult skill unlock' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['psychic', 'occult', 'skill unlock'],
  },
  {
    id: 'psychic_combatant',
    name: 'Psychic Combatant',
    description:
      'Your mind is a fortress even in the heat of battle. You can maintain concentration on psychic spells while in combat more easily. You gain a +4 bonus on concentration checks for psychic spells when casting defensively or when grappled.',
    shortDescription: '+4 on concentration checks for psychic spells in combat',
    source: 'Occult Adventures',
    types: ['general'],
    prerequisites: [
      { type: 'feat', featId: 'psychic_sensitivity' },
      { type: 'special', description: 'Ability to cast psychic spells' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'concentration.psychic_defensive',
        value: 4,
        source: 'Psychic Combatant',
      },
    ],
    activationMode: 'conditional',
    tags: ['psychic', 'concentration', 'casting'],
  },
  {
    id: 'psychic_adept',
    name: 'Psychic Adept',
    description:
      'You have awakened your mind to psychic power. You gain the ability to cast a 0-level psychic spell as a spell-like ability at will, and a 1st-level psychic spell as a spell-like ability once per day. Your caster level is equal to your character level for these spell-like abilities, and the save DCs are Charisma-based.',
    shortDescription: 'Gain a 0-level at-will and 1st-level 1/day psychic spell-like ability',
    source: 'Occult Adventures',
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'CHA', minimum: 11 },
      { type: 'feat', featId: 'psychic_sensitivity' },
    ],
    effects: [],
    activationMode: 'passive',
    choices: [
      {
        type: 'custom',
        label: '0-level Psychic Spell',
        affectsEffects: false,
      },
      {
        type: 'custom',
        label: '1st-level Psychic Spell',
        affectsEffects: false,
      },
    ],
    tags: ['psychic', 'spell-like ability'],
  },
  {
    id: 'psychic_disciple',
    name: 'Psychic Disciple',
    description:
      'Your psychic abilities continue to grow. You can use your 1st-level psychic spell-like ability from Psychic Adept three times per day, and you gain a 2nd-level psychic spell as a spell-like ability once per day.',
    shortDescription: '1st-level SLA 3/day, gain 2nd-level SLA 1/day',
    source: 'Occult Adventures',
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'CHA', minimum: 13 },
      { type: 'feat', featId: 'psychic_adept' },
      { type: 'level', minimum: 4 },
    ],
    effects: [],
    activationMode: 'passive',
    choices: [
      {
        type: 'custom',
        label: '2nd-level Psychic Spell',
        affectsEffects: false,
      },
    ],
    tags: ['psychic', 'spell-like ability'],
  },
  {
    id: 'psychic_healing',
    name: 'Psychic Healing',
    description:
      'You can channel psychic energy to heal wounds. By expending your psionic focus, you can heal a living creature you touch for 1d6 hit points of damage. For every 3 character levels you possess beyond 1st, you heal an additional 1d6 hit points (2d6 at 4th, 3d6 at 7th, etc.).',
    shortDescription: 'Heal 1d6 per 3 levels by expending psionic focus',
    source: 'Occult Adventures',
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'WIS', minimum: 13 },
      { type: 'feat', featId: 'psychic_sensitivity' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['psychic', 'healing'],
  },
  {
    id: 'third_eye',
    name: 'Third Eye',
    description:
      'You have opened your third eye, granting you extraordinary perception. You gain a +4 bonus on Perception checks to notice invisible creatures or objects, and you can sense the presence of psychic energy within 30 feet as a constant detect psychic significance effect.',
    shortDescription: '+4 Perception vs invisible, detect psychic significance 30 ft',
    source: 'Occult Adventures',
    types: ['general'],
    prerequisites: [
      { type: 'feat', featId: 'psychic_sensitivity' },
      { type: 'skill', skillId: 'perception', ranks: 7 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skill.perception',
        value: 4,
        source: 'Third Eye',
        condition: {
          type: 'custom',
          params: {},
          description: 'Only against invisible creatures or objects',
        },
      },
    ],
    activationMode: 'passive',
    tags: ['psychic', 'perception', 'invisible'],
  },

  // ==================== POSSESSED HAND CHAIN ====================
  {
    id: 'possessed_hand_oa',
    name: 'Possessed Hand',
    description:
      'One of your hands has an eerie sentience of its own. Your possessed hand grants you a +1 bonus on all Sleight of Hand checks, and you can retrieve a stored item as a swift action instead of a move action. The hand can also independently perform simple tasks like opening doors.',
    shortDescription: '+1 Sleight of Hand, retrieve items as swift action',
    source: 'Occult Adventures',
    types: ['general'],
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skill.sleight_of_hand',
        value: 1,
        source: 'Possessed Hand',
      },
    ],
    activationMode: 'passive',
    tags: ['possessed hand', 'hand'],
  },
  {
    id: 'hands_autonomy_oa',
    name: "Hand's Autonomy",
    description:
      'Your possessed hand can act more independently. The hand can make attacks of opportunity independently of your normal actions, using your base attack bonus and Strength modifier. It threatens all squares within your natural reach.',
    shortDescription: 'Possessed hand can make independent AoOs',
    source: 'Occult Adventures',
    types: ['combat'],
    prerequisites: [{ type: 'feat', featId: 'possessed_hand_oa' }],
    effects: [],
    activationMode: 'passive',
    tags: ['possessed hand', 'hand', 'attacks of opportunity'],
  },
  {
    id: 'hands_detachment_oa',
    name: "Hand's Detachment",
    description:
      'Your possessed hand can detach from your body and act independently. Once per day as a standard action, you can detach the hand. It has your hit points, AC, and saving throws, flies at 30 feet (perfect), and can manipulate objects and deliver touch spells. It lasts 10 minutes per character level.',
    shortDescription: 'Detach your hand to act independently 1/day',
    source: 'Occult Adventures',
    types: ['general'],
    prerequisites: [
      { type: 'feat', featId: 'possessed_hand_oa' },
      { type: 'feat', featId: 'hands_autonomy_oa' },
      { type: 'level', minimum: 5 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['possessed hand', 'hand', 'detach'],
  },
  {
    id: 'hands_knowledge_oa',
    name: "Hand's Knowledge",
    description:
      'Your possessed hand can grant you flashes of insight. You can use the hand to gain a +4 insight bonus on a single Knowledge check once per day. Additionally, the hand grants you the ability to read any language by touch for 1 minute per day.',
    shortDescription: '+4 insight on one Knowledge check 1/day',
    source: 'Occult Adventures',
    types: ['general'],
    prerequisites: [{ type: 'feat', featId: 'possessed_hand_oa' }],
    effects: [],
    activationMode: 'conditional',
    tags: ['possessed hand', 'hand', 'knowledge'],
  },
  {
    id: 'hands_sight_oa',
    name: "Hand's Sight",
    description:
      'Your possessed hand can see for you. You gain blindsight 30 feet for as long as your possessed hand is touching a solid surface. This blindsight is based on vibration and does not function against creatures that are not in contact with the same surface.',
    shortDescription: 'Gain blindsight 30 ft while hand touches a surface',
    source: 'Occult Adventures',
    types: ['general'],
    prerequisites: [
      { type: 'feat', featId: 'possessed_hand_oa' },
      { type: 'feat', featId: 'hands_knowledge_oa' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['possessed hand', 'hand', 'blindsight', 'perception'],
  },

  // ==================== CHAKRA FEATS ====================
  {
    id: 'chakra_initiate',
    name: 'Chakra Initiate',
    description:
      'You have learned to open your chakras, the energy centers of your body. You can open your root chakra as a standard action. While your root chakra is open, you gain a +2 insight bonus on Fortitude saves. Opening a chakra requires concentration, and the chakra closes if you are knocked unconscious.',
    shortDescription: 'Open root chakra for +2 insight to Fortitude saves',
    source: 'Occult Adventures',
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'WIS', minimum: 13 },
      { type: 'feat', featId: 'psychic_sensitivity' },
      { type: 'level', minimum: 5 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.INSIGHT,
        target: 'save.fortitude',
        value: 2,
        source: 'Chakra Initiate (root chakra)',
      },
    ],
    activationMode: 'toggle',
    tags: ['chakra', 'psychic', 'fortitude'],
  },
  {
    id: 'chakra_adept',
    name: 'Chakra Adept',
    description:
      'You can open additional chakras beyond the root. You can open your sacral chakra (gaining a +2 insight bonus on Reflex saves) and your navel chakra (gaining a +2 insight bonus on Will saves). You can have multiple chakras open at once, but opening each one requires a standard action.',
    shortDescription: 'Open sacral and navel chakras for saves bonuses',
    source: 'Occult Adventures',
    types: ['general'],
    prerequisites: [
      { type: 'feat', featId: 'chakra_initiate' },
      { type: 'level', minimum: 9 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.INSIGHT,
        target: 'save.reflex',
        value: 2,
        source: 'Chakra Adept (sacral chakra)',
      },
      {
        type: 'bonus',
        bonusType: BonusType.INSIGHT,
        target: 'save.will',
        value: 2,
        source: 'Chakra Adept (navel chakra)',
      },
    ],
    activationMode: 'toggle',
    tags: ['chakra', 'psychic', 'saves'],
  },
  {
    id: 'chakra_master',
    name: 'Chakra Master',
    description:
      'You have achieved mastery over all seven chakras. You can open your heart, throat, brow, and crown chakras in addition to those from Chakra Initiate and Chakra Adept. Each grants a unique benefit. When all seven are open, you gain damage reduction 5/- and spell resistance equal to 11 + your character level.',
    shortDescription: 'Open all seven chakras for powerful benefits',
    source: 'Occult Adventures',
    types: ['general'],
    prerequisites: [
      { type: 'feat', featId: 'chakra_adept' },
      { type: 'level', minimum: 13 },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['chakra', 'psychic', 'DR', 'spell resistance'],
  },
  {
    id: 'open_chakra',
    name: 'Open Chakra',
    description:
      'You can quickly align your chakric energy. You can open a chakra as a move action instead of a standard action. If you have the Chakra Master feat, you can open a chakra as a swift action.',
    shortDescription: 'Open a chakra as a move action (swift with Chakra Master)',
    source: 'Occult Adventures',
    types: ['general'],
    prerequisites: [{ type: 'feat', featId: 'chakra_initiate' }],
    effects: [],
    activationMode: 'passive',
    tags: ['chakra', 'psychic', 'action economy'],
  },

  // ==================== EXTRA CLASS FEATURE FEATS ====================
  {
    id: 'extra_amplification',
    name: 'Extra Amplification',
    description:
      'You gain one additional phrenic amplification. You must meet the prerequisites for the phrenic amplification you select.',
    shortDescription: 'Gain an additional phrenic amplification',
    source: 'Occult Adventures',
    types: ['general'],
    prerequisites: [{ type: 'class_feature', featureName: 'phrenic amplification' }],
    effects: [],
    activationMode: 'passive',
    tags: ['psychic', 'phrenic', 'amplification', 'extra'],
  },
  {
    id: 'extra_focus_power',
    name: 'Extra Focus Power',
    description:
      'You gain one additional focus power from your chosen implement school. You must meet the prerequisites for the focus power you select.',
    shortDescription: 'Gain an additional occultist focus power',
    source: 'Occult Adventures',
    types: ['general'],
    prerequisites: [{ type: 'class_feature', featureName: 'focus power' }],
    effects: [],
    activationMode: 'passive',
    tags: ['occultist', 'focus power', 'extra'],
  },
  {
    id: 'extra_mesmerist_trick',
    name: 'Extra Mesmerist Trick',
    description:
      'You can implant one additional mesmerist trick at a time. This stacks with the number of tricks you can have active from your mesmerist level.',
    shortDescription: 'Implant one additional mesmerist trick at a time',
    source: 'Occult Adventures',
    types: ['general'],
    prerequisites: [{ type: 'class_feature', featureName: 'mesmerist trick' }],
    effects: [],
    activationMode: 'passive',
    tags: ['mesmerist', 'trick', 'extra'],
  },
  {
    id: 'extra_occultist_implement',
    name: 'Extra Occultist Implement',
    description:
      'You gain an additional occultist implement school and its base focus power. You gain mental focus points for this implement as normal.',
    shortDescription: 'Gain an additional implement school',
    source: 'Occult Adventures',
    types: ['general'],
    prerequisites: [{ type: 'class_feature', featureName: 'implements' }],
    effects: [],
    activationMode: 'passive',
    tags: ['occultist', 'implement', 'extra'],
  },
  {
    id: 'extra_phantom',
    name: 'Extra Phantom',
    description:
      'You can bond with an additional phantom emotional focus. Once per day, you can dismiss your current phantom and summon a phantom with a different emotional focus you have selected with this feat. The new phantom appears with full hit points.',
    shortDescription: 'Bond with an additional phantom emotional focus',
    source: 'Occult Adventures',
    types: ['general'],
    prerequisites: [{ type: 'class_feature', featureName: 'phantom' }],
    effects: [],
    activationMode: 'passive',
    tags: ['spiritualist', 'phantom', 'extra'],
  },
  {
    id: 'extra_phrenic_pool',
    name: 'Extra Phrenic Pool',
    description:
      'Your phrenic pool increases by 2 points. You can select this feat multiple times. Its effects stack.',
    shortDescription: '+2 phrenic pool points',
    source: 'Occult Adventures',
    types: ['general'],
    prerequisites: [{ type: 'class_feature', featureName: 'phrenic pool' }],
    effects: [],
    activationMode: 'passive',
    tags: ['psychic', 'phrenic pool', 'extra'],
  },

  // ==================== HYPNOTIC STARE / PAINFUL STARE FEATS ====================
  {
    id: 'compounded_pain',
    name: 'Compounded Pain',
    description:
      'Your painful stare causes lingering agony. When you trigger your painful stare, the target takes an additional 1d6 points of damage at the start of its next turn. This additional damage is not multiplied on a critical hit.',
    shortDescription: 'Painful stare deals extra 1d6 damage next round',
    source: 'Occult Adventures',
    types: ['general'],
    prerequisites: [
      { type: 'class_feature', featureName: 'painful stare' },
      { type: 'level', minimum: 7, class: 'mesmerist' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['mesmerist', 'painful stare', 'damage'],
  },
  {
    id: 'intense_pain',
    name: 'Intense Pain',
    description:
      'Your painful stare is exceptionally potent. You add your Charisma modifier to the damage dealt by your painful stare instead of half your mesmerist level.',
    shortDescription: 'Add CHA modifier to painful stare damage',
    source: 'Occult Adventures',
    types: ['general'],
    prerequisites: [
      { type: 'class_feature', featureName: 'painful stare' },
      { type: 'ability_score', ability: 'CHA', minimum: 15 },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['mesmerist', 'painful stare', 'damage'],
  },
  {
    id: 'lethality',
    name: 'Lethality',
    description:
      'Your painful stare becomes even more devastating against creatures that are unaware of your presence. When you trigger your painful stare against a flat-footed or unaware target, the painful stare damage dice increase by one step (d6 becomes d8).',
    shortDescription: 'Painful stare damage dice increase vs flat-footed targets',
    source: 'Occult Adventures',
    types: ['general'],
    prerequisites: [
      { type: 'class_feature', featureName: 'painful stare' },
      { type: 'level', minimum: 5, class: 'mesmerist' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['mesmerist', 'painful stare', 'flat-footed'],
  },

  // ==================== OCCULT SKILL UNLOCK / MISC FEATS ====================
  {
    id: 'focused_phantom',
    name: 'Focused Phantom',
    description:
      'Your phantom is especially resilient when confined to your consciousness. While your phantom is confined to your consciousness, you gain a +2 bonus on saves against mind-affecting effects. If you are affected by a mind-affecting effect that allows a save, your phantom can attempt the save as well using its own modifiers.',
    shortDescription: '+2 vs mind-affecting while phantom is in consciousness',
    source: 'Occult Adventures',
    types: ['general'],
    prerequisites: [{ type: 'class_feature', featureName: 'phantom' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'save.all',
        value: 2,
        source: 'Focused Phantom',
        condition: {
          type: 'custom',
          params: {},
          description: 'Only while phantom is confined to consciousness',
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['spiritualist', 'phantom', 'mind-affecting', 'saves'],
  },
  {
    id: 'lucid_dreamer',
    name: 'Lucid Dreamer',
    description:
      'You maintain your awareness even while asleep or unconscious. You can attempt Sense Motive checks while asleep to sense hostile intent. You gain a +4 bonus on saving throws against effects that occur while you are asleep, such as nightmare or dream.',
    shortDescription: '+4 saves vs effects while asleep, sense hostility',
    source: 'Occult Adventures',
    types: ['general'],
    prerequisites: [
      { type: 'feat', featId: 'psychic_sensitivity' },
      { type: 'skill', skillId: 'sense_motive', ranks: 3 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'save.will',
        value: 4,
        source: 'Lucid Dreamer',
      },
    ],
    activationMode: 'passive',
    tags: ['psychic', 'dream', 'sleep'],
  },
  {
    id: 'mesmerizing_feint',
    name: 'Mesmerizing Feint',
    description:
      'You can use your hypnotic stare to feint in combat. When you feint using your hypnotic stare, you can use Bluff, Diplomacy, or Intimidate in place of the normal Bluff check. If you succeed, the target is denied its Dexterity bonus to AC against your next attack and also takes your painful stare damage if applicable.',
    shortDescription: 'Use hypnotic stare to feint with Bluff, Diplomacy, or Intimidate',
    source: 'Occult Adventures',
    types: ['combat'],
    prerequisites: [
      { type: 'class_feature', featureName: 'hypnotic stare' },
      { type: 'class_feature', featureName: 'mesmerist trick' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['mesmerist', 'feint', 'hypnotic stare'],
  },

  // ==================== COMBAT / STYLE FEATS ====================
  {
    id: 'psychic_maestro',
    name: 'Psychic Maestro',
    description:
      'You have learned to channel psychic energy through performance. When you use a Perform check as part of a bardic performance or similar ability, you can expend one use of your phrenic pool to add your Intelligence modifier as an insight bonus on the Perform check.',
    shortDescription: 'Spend phrenic pool to add INT to Perform checks',
    source: 'Occult Adventures',
    types: ['general'],
    prerequisites: [
      { type: 'class_feature', featureName: 'phrenic pool' },
      { type: 'skill', skillId: 'perform', ranks: 3 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['psychic', 'performance', 'phrenic'],
  },
  {
    id: 'phantom_ally_oa',
    name: 'Phantom Ally',
    description:
      'Your phantom is especially skilled at aiding you and your allies. When your phantom uses the aid another action, the bonus it grants increases to +4 instead of +2. Your phantom can also use aid another as a move action instead of a standard action.',
    shortDescription: 'Phantom grants +4 with aid another as a move action',
    source: 'Occult Adventures',
    types: ['general'],
    prerequisites: [{ type: 'class_feature', featureName: 'phantom' }],
    effects: [],
    activationMode: 'passive',
    tags: ['spiritualist', 'phantom', 'aid another', 'teamwork'],
  },
  {
    id: 'phantom_fighter',
    name: 'Phantom Fighter',
    description:
      'Your phantom fights with supernatural ferocity. Your phantom gains a +2 bonus on attack rolls and damage rolls when flanking with you. Additionally, your phantom threatens critical hits on a 19-20 with its slam attacks.',
    shortDescription: 'Phantom gets +2 attack/damage flanking, 19-20 crit range',
    source: 'Occult Adventures',
    types: ['combat'],
    prerequisites: [
      { type: 'class_feature', featureName: 'phantom' },
      { type: 'level', minimum: 5, class: 'spiritualist' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['spiritualist', 'phantom', 'combat', 'flanking'],
  },

  // ==================== GENERAL / UTILITY FEATS ====================
  {
    id: 'ability_mastery',
    name: 'Ability Mastery',
    description:
      'Your dedication has sharpened one of your abilities to an extraordinary degree. Choose one ability score. You gain a +2 bonus on all checks and DCs that use that ability score. This does not increase the ability score itself.',
    shortDescription: '+2 on checks and DCs using one chosen ability score',
    source: 'Occult Adventures',
    types: ['general'],
    prerequisites: [
      { type: 'feat', featId: 'psychic_sensitivity' },
      { type: 'level', minimum: 11 },
    ],
    effects: [],
    activationMode: 'passive',
    choices: [
      {
        type: 'ability',
        label: 'Ability Score',
        options: ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA'],
        affectsEffects: true,
        effectTargetTemplate: 'ability_checks.{choice}',
      },
    ],
    tags: ['psychic', 'ability score'],
  },
  {
    id: 'automatic_writing',
    name: 'Automatic Writing',
    description:
      'You can produce mysterious writing that reveals hidden truths. Once per day, you can spend 1 hour in a trance-like state to produce automatic writing. This functions as an augury spell, using your character level as the caster level.',
    shortDescription: 'Produce augury-like writing once per day',
    source: 'Occult Adventures',
    types: ['general'],
    prerequisites: [
      { type: 'feat', featId: 'psychic_sensitivity' },
      { type: 'skill', skillId: 'linguistics', ranks: 3 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['psychic', 'divination', 'occult'],
  },
  {
    id: 'conduit_surge',
    name: 'Conduit Surge',
    description:
      'You can channel a surge of spiritual energy to boost your spell-like abilities. When you use a spell-like ability, you can take 1d4 points of damage to increase its effective caster level by 2. At 10th level, you can take 2d4 damage to increase it by 4.',
    shortDescription: 'Take damage to boost spell-like ability caster level',
    source: 'Occult Adventures',
    types: ['general'],
    prerequisites: [{ type: 'special', description: 'Spell-like ability with a caster level' }],
    effects: [],
    activationMode: 'conditional',
    tags: ['psychic', 'spell-like ability', 'caster level'],
  },
  {
    id: 'ectoplasmic_snare',
    name: 'Ectoplasmic Snare',
    description:
      'You can manifest ectoplasm to entangle foes. As a standard action, you can target a creature within 30 feet with a ranged touch attack. On a hit, the target is entangled for 1d4 rounds. You can use this ability a number of times per day equal to 3 + your Charisma modifier.',
    shortDescription: 'Ranged touch attack to entangle foes with ectoplasm',
    source: 'Occult Adventures',
    types: ['general'],
    prerequisites: [
      { type: 'feat', featId: 'psychic_sensitivity' },
      { type: 'ability_score', ability: 'CHA', minimum: 13 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['psychic', 'ectoplasm', 'entangle'],
  },
  {
    id: 'emotional_conduit',
    name: 'Emotional Conduit',
    description:
      "You can channel your phantom's emotional energy to affect others. While your phantom is manifested, you gain a +2 bonus on Intimidate checks (if your phantom has a negative emotional focus) or Diplomacy checks (if it has a positive emotional focus).",
    shortDescription: '+2 Intimidate or Diplomacy based on phantom emotional focus',
    source: 'Occult Adventures',
    types: ['general'],
    prerequisites: [{ type: 'class_feature', featureName: 'phantom' }],
    effects: [],
    activationMode: 'conditional',
    tags: ['spiritualist', 'phantom', 'emotional', 'social'],
  },
  {
    id: 'faith_healing',
    name: 'Faith Healing',
    description:
      'Your belief in a higher power enhances your ability to treat wounds through mundane means. When you use the Heal skill to treat deadly wounds, you restore an additional number of hit points equal to your Wisdom modifier. You can treat deadly wounds on a creature once per day per 4 character levels you possess.',
    shortDescription: 'Add WIS to Heal skill deadly wounds, treat more often',
    source: 'Occult Adventures',
    types: ['general'],
    prerequisites: [
      { type: 'feat', featId: 'psychic_sensitivity' },
      { type: 'skill', skillId: 'heal', ranks: 1 },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['psychic', 'healing', 'heal skill'],
  },
  {
    id: 'haruspicy',
    name: 'Haruspicy',
    description:
      'You can divine the future by reading the entrails of a recently slain creature. By spending 10 minutes examining the remains of a creature that died within the last hour, you can gain the benefits of an augury spell. At 8th level, this functions as divination instead.',
    shortDescription: 'Divine future via entrails; augury then divination',
    source: 'Occult Adventures',
    types: ['general'],
    prerequisites: [
      { type: 'feat', featId: 'psychic_sensitivity' },
      { type: 'skill', skillId: 'survival', ranks: 3 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['psychic', 'divination', 'occult'],
  },
  {
    id: 'implement_focus',
    name: 'Implement Focus',
    description:
      'You invest more mental focus into one of your implements. Choose one implement school. The maximum amount of mental focus you can invest in that implement increases by 2. You can select this feat multiple times, choosing a different school each time.',
    shortDescription: '+2 max mental focus for one implement school',
    source: 'Occult Adventures',
    types: ['general'],
    prerequisites: [{ type: 'class_feature', featureName: 'implements' }],
    effects: [],
    activationMode: 'passive',
    choices: [
      {
        type: 'custom',
        label: 'Implement School',
        affectsEffects: true,
        effectTargetTemplate: 'implement.{choice}.max_focus',
      },
    ],
    tags: ['occultist', 'implement', 'mental focus'],
  },
  {
    id: 'prognostication',
    name: 'Prognostication',
    description:
      'You can use divination tools to predict the future for yourself and others. By spending 1 minute using cards, bones, or other fortune-telling implements, you can grant one creature a +2 insight bonus on one type of d20 roll (attack rolls, saving throws, ability checks, or skill checks) for 10 minutes.',
    shortDescription: '+2 insight to one d20 roll type for 10 min via divination',
    source: 'Occult Adventures',
    types: ['general'],
    prerequisites: [
      { type: 'feat', featId: 'psychic_sensitivity' },
      { type: 'skill', skillId: 'sense_motive', ranks: 5 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['psychic', 'divination', 'fortune'],
  },
  {
    id: 'psychic_defender',
    name: 'Psychic Defender',
    description:
      'You can use psychic energy to create a defensive barrier. When fighting defensively or using total defense, you gain an additional +2 dodge bonus to AC. This bonus increases to +4 if you have 10 or more ranks in the Autohypnosis or Knowledge (arcana) skill.',
    shortDescription: 'Extra +2 dodge to AC when fighting defensively',
    source: 'Occult Adventures',
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'psychic_sensitivity' },
      { type: 'ability_score', ability: 'WIS', minimum: 13 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.DODGE,
        target: 'ac',
        value: 2,
        source: 'Psychic Defender',
        condition: {
          type: 'custom',
          params: {},
          description: 'Only when fighting defensively or total defense',
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['psychic', 'defense', 'dodge', 'AC'],
  },
  {
    id: 'spirit_sense',
    name: 'Spirit Sense',
    description:
      'You can sense the presence of undead, living creatures possessed by outside entities, and creatures on the Ethereal Plane within 30 feet. This functions as detect undead but also detects possession and ethereal creatures. You must concentrate to maintain this sense.',
    shortDescription: 'Detect undead, possessed, and ethereal creatures in 30 ft',
    source: 'Occult Adventures',
    types: ['general'],
    prerequisites: [
      { type: 'feat', featId: 'psychic_sensitivity' },
      { type: 'skill', skillId: 'perception', ranks: 3 },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['psychic', 'detection', 'undead', 'ethereal'],
  },
  {
    id: 'traumatic_spell',
    name: 'Traumatic Spell',
    description:
      "You can embed a psychic trauma in your spells. A traumatic spell causes the target to be shaken for a number of rounds equal to the spell's level if it fails its save (or for 1 round if it succeeds). This is a mind-affecting fear effect. A traumatic spell uses a spell slot one level higher than the spell's actual level.",
    shortDescription: 'Metamagic: failed save targets are shaken, +1 spell level',
    source: 'Occult Adventures',
    types: ['metamagic'],
    prerequisites: [
      {
        type: 'special',
        description: 'Ability to cast psychic spells or spells with the emotion or fear descriptor',
      },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['metamagic', 'psychic', 'fear', 'shaken'],
  },

  // ==================== ADDITIONAL NOTABLE FEATS ====================
  {
    id: 'spirit_symbiosis',
    name: 'Spirit Symbiosis',
    description:
      'Your phantom strengthens you when it resides within your consciousness. While your phantom is confined, you gain temporary hit points equal to your spiritualist level. These temporary hit points refresh each time the phantom returns to your consciousness.',
    shortDescription: 'Gain temporary HP equal to spiritualist level while phantom confined',
    source: 'Occult Adventures',
    types: ['general'],
    prerequisites: [
      { type: 'class_feature', featureName: 'phantom' },
      { type: 'level', minimum: 5, class: 'spiritualist' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['spiritualist', 'phantom', 'temporary HP'],
  },
  {
    id: 'psychic_maestro_greater',
    name: 'Psychic Maestro, Greater',
    description:
      'Your mastery of psychic performance reaches sublime heights. When you use Psychic Maestro, you can also apply the insight bonus to the effective level of your bardic performance for the purpose of determining its effects. Additionally, allies affected by your performance gain a +1 morale bonus on Will saves.',
    shortDescription: 'Enhance Psychic Maestro; allies gain +1 Will saves',
    source: 'Occult Adventures',
    types: ['general'],
    prerequisites: [
      { type: 'feat', featId: 'psychic_maestro' },
      { type: 'skill', skillId: 'perform', ranks: 10 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['psychic', 'performance', 'phrenic', 'Will save'],
  },
  {
    id: 'phrenic_strike',
    name: 'Phrenic Strike',
    description:
      'You can channel phrenic energy through your weapon attacks. By spending 1 point from your phrenic pool as a swift action, your next melee or ranged attack deals an additional 2d6 points of damage. This damage is force damage and is not multiplied on a critical hit.',
    shortDescription: 'Spend phrenic pool for +2d6 force damage on attack',
    source: 'Occult Adventures',
    types: ['combat'],
    prerequisites: [
      { type: 'class_feature', featureName: 'phrenic pool' },
      { type: 'bab', minimum: 5 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['psychic', 'phrenic', 'combat', 'force damage'],
  },
  {
    id: 'excoriating_stare',
    name: 'Excoriating Stare',
    description:
      "Your hypnotic stare eats away at the target's confidence. A creature under the effect of your hypnotic stare takes a -2 penalty on attack rolls in addition to the normal penalties imposed by your hypnotic stare.",
    shortDescription: 'Hypnotic stare also imposes -2 on attack rolls',
    source: 'Occult Adventures',
    types: ['general'],
    prerequisites: [
      { type: 'class_feature', featureName: 'hypnotic stare' },
      { type: 'level', minimum: 7, class: 'mesmerist' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['mesmerist', 'hypnotic stare', 'attack penalty'],
  },
  {
    id: 'psychic_school',
    name: 'Psychic School',
    description:
      "You have learned the fundamentals of a psychic discipline. Choose one psychic discipline. You gain the discipline's 1st-level discipline power, using your character level as your effective psychic class level. You can use this power a number of times per day equal to 3 + your Charisma modifier.",
    shortDescription: 'Gain a psychic discipline 1st-level power',
    source: 'Occult Adventures',
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'INT', minimum: 13 },
      { type: 'feat', featId: 'psychic_sensitivity' },
      { type: 'level', minimum: 3 },
    ],
    effects: [],
    activationMode: 'conditional',
    choices: [
      {
        type: 'custom',
        label: 'Psychic Discipline',
        affectsEffects: false,
      },
    ],
    tags: ['psychic', 'discipline'],
  },
  {
    id: 'spirit_focus',
    name: 'Spirit Focus',
    description:
      'Your connection to the spirit world grants you deeper insight. Choose one Knowledge skill. You gain a +2 bonus on that Knowledge skill from communing with spirits. Once per day, you can commune with spirits for 10 minutes to reroll a failed Knowledge check with a +4 insight bonus.',
    shortDescription: '+2 Knowledge skill, reroll 1/day with +4 insight',
    source: 'Occult Adventures',
    types: ['general'],
    prerequisites: [
      { type: 'feat', featId: 'psychic_sensitivity' },
      { type: 'skill', skillId: 'knowledge_religion', ranks: 3 },
    ],
    effects: [],
    activationMode: 'passive',
    choices: [
      {
        type: 'skill',
        label: 'Knowledge Skill',
        affectsEffects: true,
        effectTargetTemplate: 'skill.{choice}',
      },
    ],
    tags: ['psychic', 'knowledge', 'spirits'],
  },
  {
    id: 'shared_consciousness',
    name: 'Shared Consciousness',
    description:
      "While your phantom is confined to your consciousness, you gain the benefits of the phantom's good saving throws. If the phantom has a good Fortitude save progression, you use its Fortitude bonus if it is higher than yours, and similarly for Reflex and Will saves.",
    shortDescription: "Use phantom's good saves while it is confined",
    source: 'Occult Adventures',
    types: ['general'],
    prerequisites: [{ type: 'class_feature', featureName: 'shared consciousness' }],
    effects: [],
    activationMode: 'conditional',
    tags: ['spiritualist', 'phantom', 'saves'],
  },
  {
    id: 'token_spell',
    name: 'Token Spell',
    description:
      'You can store a spell within a small token or implement. As a standard action, you can store a spell of 3rd level or lower in a token. Any creature holding the token can release the spell as a standard action. The spell remains stored for 24 hours or until released.',
    shortDescription: 'Store a spell of 3rd level or lower in a token',
    source: 'Occult Adventures',
    types: ['general'],
    prerequisites: [
      { type: 'caster_level', minimum: 5 },
      { type: 'special', description: 'Ability to cast psychic spells' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['psychic', 'token', 'spell storage'],
  },
  {
    id: 'undead_master_oa',
    name: 'Undead Master',
    description:
      'Your mastery of necromantic energy allows you to command additional undead. The maximum number of Hit Dice of undead you can control through animate dead, command undead, and similar effects increases by your caster level.',
    shortDescription: 'Control additional HD of undead equal to caster level',
    source: 'Occult Adventures',
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'Ability to cast animate dead or command undead' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['necromancy', 'undead', 'control'],
  },
  {
    id: 'living_fortress',
    name: 'Living Fortress',
    description:
      'Your psychic defenses protect your allies. As a standard action, you can extend your psychic protection to all allies within 10 feet. They gain a +2 morale bonus on saving throws against mind-affecting effects for 1 round per character level. You can use this ability once per day.',
    shortDescription: '+2 morale to allies vs mind-affecting within 10 ft',
    source: 'Occult Adventures',
    types: ['general'],
    prerequisites: [
      { type: 'feat', featId: 'psychic_sensitivity' },
      { type: 'ability_score', ability: 'CHA', minimum: 15 },
      { type: 'level', minimum: 7 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['psychic', 'aura', 'mind-affecting', 'allies'],
  },
  {
    id: 'spirit_beacon',
    name: 'Spirit Beacon',
    description:
      'Your psychic presence is a beacon for spirits. You gain a +4 bonus on Diplomacy checks to influence incorporeal undead and outsiders from the Ethereal Plane. Additionally, you can communicate telepathically with any incorporeal creature within 30 feet.',
    shortDescription: '+4 Diplomacy vs incorporeal undead, telepathy 30 ft',
    source: 'Occult Adventures',
    types: ['general'],
    prerequisites: [
      { type: 'feat', featId: 'spirit_sense' },
      { type: 'skill', skillId: 'diplomacy', ranks: 5 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skill.diplomacy',
        value: 4,
        source: 'Spirit Beacon',
        condition: {
          type: 'custom',
          params: {},
          description: 'Only when interacting with incorporeal undead or ethereal outsiders',
        },
      },
    ],
    activationMode: 'passive',
    tags: ['psychic', 'spirits', 'incorporeal', 'diplomacy'],
  },
];
