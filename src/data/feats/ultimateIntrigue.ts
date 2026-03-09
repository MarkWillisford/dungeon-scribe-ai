import { BonusType } from '@/types/base';
import type { FeatDefinition } from '@/types/feats';

export const UI_FEATS: FeatDefinition[] = [
  // ==================== VIGILANTE FEATS ====================
  {
    id: 'social_grace',
    name: 'Social Grace',
    description:
      'Choose one Intelligence-, Wisdom-, or Charisma-based skill. While in your social identity, you receive a +4 circumstance bonus on checks with the chosen skill. At 5th level and every 4 levels thereafter, you can choose another skill to gain this bonus.',
    shortDescription: '+4 circumstance bonus to a chosen social skill in social identity',
    source: 'Ultimate Intrigue',
    types: ['general'],
    prerequisites: [{ type: 'class_feature', featureName: 'social identity' }],
    effects: [],
    activationMode: 'conditional',
    choices: [
      {
        type: 'skill',
        label: 'Skill',
        affectsEffects: true,
        effectTargetTemplate: 'skill.{choice}',
      },
    ],
    tags: ['vigilante', 'social', 'skill'],
  },
  {
    id: 'renown',
    name: 'Renown',
    description:
      'You are known in a particular community. When in your social identity and within your area of renown, you gain a +4 circumstance bonus on Diplomacy and Intimidate checks. You can select this talent multiple times, each time choosing a different community.',
    shortDescription: '+4 to Diplomacy and Intimidate in your area of renown',
    source: 'Ultimate Intrigue',
    types: ['general'],
    prerequisites: [{ type: 'class_feature', featureName: 'social identity' }],
    effects: [],
    activationMode: 'conditional',
    tags: ['vigilante', 'social', 'reputation'],
  },
  {
    id: 'quick_change',
    name: 'Quick Change',
    description:
      'You can switch between your identities in 1 minute rather than the normal 5 minutes. If you have the seamless guise social talent, you can change identities as a full-round action.',
    shortDescription: 'Switch identities in 1 minute instead of 5',
    source: 'Ultimate Intrigue',
    types: ['general'],
    prerequisites: [{ type: 'class_feature', featureName: 'dual identity' }],
    effects: [],
    activationMode: 'passive',
    tags: ['vigilante', 'identity'],
  },
  {
    id: 'immediate_change',
    name: 'Immediate Change',
    description:
      'You can switch between your identities as a swift action. You must be unobserved to use this ability. You can use this ability a number of times per day equal to your vigilante level.',
    shortDescription: 'Switch identities as a swift action',
    source: 'Ultimate Intrigue',
    types: ['general'],
    prerequisites: [
      { type: 'class_feature', featureName: 'dual identity' },
      { type: 'feat', featId: 'quick_change' },
      { type: 'level', minimum: 7, class: 'vigilante' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['vigilante', 'identity'],
  },
  {
    id: 'lethal_grace',
    name: 'Lethal Grace',
    description:
      'You combine strength and precision to devastating effect. You gain a bonus equal to half your vigilante level on damage rolls with weapons with which you have Weapon Finesse. You also gain Weapon Finesse as a bonus feat.',
    shortDescription: 'Add half vigilante level to damage with finesse weapons',
    source: 'Ultimate Intrigue',
    types: ['combat'],
    prerequisites: [
      { type: 'class_feature', featureName: 'vigilante specialization' },
      { type: 'special', description: 'Stalker specialization' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['vigilante', 'stalker', 'damage', 'finesse'],
  },

  // ==================== INTRIGUE FEATS ====================
  {
    id: 'call_truce',
    name: 'Call Truce',
    description:
      'You can attempt a Diplomacy check to temporarily halt combat. As a full-round action that provokes attacks of opportunity, you can make a Diplomacy check (DC 20 + the highest level among your opponents). On a success, combat pauses for 1 round while you negotiate. Hostile actions immediately end the truce.',
    shortDescription: 'Use Diplomacy to temporarily halt combat',
    source: 'Ultimate Intrigue',
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'CHA', minimum: 15 },
      { type: 'skill', skillId: 'diplomacy', ranks: 5 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['social', 'diplomacy', 'intrigue'],
  },
  {
    id: 'conversion_channel',
    name: 'Conversion Channel',
    description:
      'When you channel energy to heal living creatures, any undead creature in the area that is healed by your channel energy (such as through the Command Undead feat) is also subject to a suggestion effect (as the spell) with a Will save DC equal to your channel energy DC.',
    shortDescription: 'Add suggestion effect when channeling heals undead',
    source: 'Ultimate Intrigue',
    types: ['general'],
    prerequisites: [
      { type: 'class_feature', featureName: 'channel energy' },
      { type: 'feat', featId: 'command_undead' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['channel', 'undead', 'intrigue'],
  },
  {
    id: 'cunning_caster',
    name: 'Cunning Caster',
    description:
      "You can attempt to conceal your spellcasting from observers. When casting a spell or using a spell-like ability, you can attempt a Bluff check (opposed by observers' Perception or Sense Motive) to conceal the fact that you are casting a spell. If successful, observers do not realize you are casting.",
    shortDescription: 'Use Bluff to hide spellcasting from observers',
    source: 'Ultimate Intrigue',
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'bluff', ranks: 5 },
      { type: 'special', description: 'Ability to cast spells or use spell-like abilities' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['spellcasting', 'stealth', 'intrigue', 'bluff'],
  },
  {
    id: 'rumormonger',
    name: 'Rumormonger',
    description:
      'You can attempt to spread a rumor through a settlement. By spending 1d4 hours socializing and making a Bluff check, you can start a rumor. The DC depends on the size of the settlement and the plausibility of the rumor. A successful check means the rumor spreads through the settlement in 1d6 days.',
    shortDescription: 'Spread rumors through settlements using Bluff',
    source: 'Ultimate Intrigue',
    types: ['general'],
    prerequisites: [{ type: 'skill', skillId: 'bluff', ranks: 5 }],
    effects: [],
    activationMode: 'conditional',
    tags: ['social', 'bluff', 'intrigue'],
  },

  // ==================== STYLE FEATS: BETRAYAL ====================
  {
    id: 'betrayal_style',
    name: 'Betrayal Style',
    description:
      "You can set up allies to take the fall for you. While using this style, whenever an ally within your melee reach is targeted by a melee or ranged attack, you can use an immediate action to attempt a Bluff check opposed by the attacker's Sense Motive. If successful, the attack targets you instead.",
    shortDescription: 'Redirect attacks targeting adjacent allies to yourself',
    source: 'Ultimate Intrigue',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'combat_expertise' },
      { type: 'special', description: 'Must not have any teamwork feats' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['style', 'betrayal', 'intrigue'],
  },

  // ==================== STYLE FEATS: BRUTE ====================
  {
    id: 'brute_style_ui',
    name: 'Brute Style',
    description:
      'Your unarmed strikes emulate the powerful and clumsy blows of a brute. While using this style, you can make unarmed strike attacks as if you were one size category larger. You take a -2 penalty on attack rolls when using this ability.',
    shortDescription: 'Unarmed strikes count as one size larger at -2 attack',
    source: 'Ultimate Intrigue',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'ability_score', ability: 'STR', minimum: 13 },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['style', 'brute', 'unarmed'],
  },
  {
    id: 'brute_stomp_ui',
    name: 'Brute Stomp',
    description:
      'While using Brute Style, when you successfully trip a foe, you can make an unarmed strike attack against that foe as a swift action. This attack deals damage as if you were one size category larger.',
    shortDescription: 'Free unarmed strike after successful trip in Brute Style',
    source: 'Ultimate Intrigue',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'brute_style' },
      { type: 'feat', featId: 'improved_trip' },
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'ability_score', ability: 'STR', minimum: 13 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['style', 'brute', 'unarmed', 'trip'],
  },
  {
    id: 'brute_assault_ui',
    name: 'Brute Assault',
    description:
      'While using Brute Style, when you confirm a critical hit with an unarmed strike, you can attempt a free bull rush or trip combat maneuver against the target without provoking an attack of opportunity.',
    shortDescription: 'Free bull rush or trip on critical hit with unarmed strike',
    source: 'Ultimate Intrigue',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'brute_style' },
      { type: 'feat', featId: 'brute_stomp' },
      { type: 'feat', featId: 'improved_trip' },
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'ability_score', ability: 'STR', minimum: 13 },
      { type: 'bab', minimum: 8 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['style', 'brute', 'unarmed', 'critical'],
  },

  // ==================== STYLE FEATS: CLOAK AND DAGGER ====================
  {
    id: 'cloak_and_dagger_style',
    name: 'Cloak and Dagger Style',
    description:
      'Your fighting style emphasizes misdirection and hidden weapons. While using this style, you gain a +2 bonus on Sleight of Hand checks to conceal light weapons and you can draw hidden weapons as a move action without provoking attacks of opportunity.',
    shortDescription: '+2 to conceal weapons, draw hidden weapons as move action',
    source: 'Ultimate Intrigue',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'combat_expertise' },
      { type: 'feat', featId: 'improved_feint' },
      { type: 'skill', skillId: 'sleight_of_hand', ranks: 3 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skill.sleight_of_hand',
        value: 2,
        source: 'Cloak and Dagger Style',
      },
    ],
    activationMode: 'toggle',
    tags: ['style', 'intrigue', 'feint', 'stealth'],
  },
  {
    id: 'cloak_and_dagger_subterfuge',
    name: 'Cloak and Dagger Subterfuge',
    description:
      'While using Cloak and Dagger Style, your feint attempts gain a +2 bonus. When you successfully feint against a foe, that foe is denied its Dexterity bonus to AC against your attacks until the end of your next turn (rather than just your next attack).',
    shortDescription: '+2 to feint, extended duration on successful feint',
    source: 'Ultimate Intrigue',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'cloak_and_dagger_style' },
      { type: 'feat', featId: 'combat_expertise' },
      { type: 'feat', featId: 'improved_feint' },
      { type: 'skill', skillId: 'sleight_of_hand', ranks: 6 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'combat.feint',
        value: 2,
        source: 'Cloak and Dagger Subterfuge',
      },
    ],
    activationMode: 'conditional',
    tags: ['style', 'intrigue', 'feint'],
  },
  {
    id: 'cloak_and_dagger_tactics',
    name: 'Cloak and Dagger Tactics',
    description:
      'While using Cloak and Dagger Style, when you successfully feint against a foe, you can draw a hidden weapon as a free action and make a single melee attack against that foe with the drawn weapon as part of the same action. This attack deals sneak attack damage if you have that ability.',
    shortDescription: 'Draw hidden weapon and attack as part of a successful feint',
    source: 'Ultimate Intrigue',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'cloak_and_dagger_style' },
      { type: 'feat', featId: 'cloak_and_dagger_subterfuge' },
      { type: 'feat', featId: 'combat_expertise' },
      { type: 'feat', featId: 'improved_feint' },
      { type: 'skill', skillId: 'sleight_of_hand', ranks: 9 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['style', 'intrigue', 'feint', 'sneak_attack'],
  },
  {
    id: 'impostors_mark',
    name: "Impostor's Mark",
    description:
      'You can study a creature for 10 minutes to learn its mannerisms. After studying, you gain a +4 bonus on Disguise checks to impersonate that specific creature and a +2 bonus on Bluff checks against creatures familiar with the target.',
    shortDescription: '+4 Disguise to impersonate studied creature, +2 Bluff',
    source: 'Ultimate Intrigue',
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'disguise', ranks: 5 },
      { type: 'skill', skillId: 'bluff', ranks: 5 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['intrigue', 'disguise', 'impersonation'],
  },

  // ==================== TEAMWORK FEATS ====================
  {
    id: 'ensemble_ui',
    name: 'Ensemble',
    description:
      'You can combine your bardic performance with an ally who also has this feat. When you and at least one ally with this feat perform the same bardic performance simultaneously, you use the higher of your two Perform check results and add +2 for each additional performer beyond the first.',
    shortDescription: 'Combine bardic performances with allies for higher checks',
    source: 'Ultimate Intrigue',
    types: ['teamwork'],
    prerequisites: [{ type: 'skill', skillId: 'perform', ranks: 5 }],
    effects: [],
    activationMode: 'conditional',
    tags: ['teamwork', 'bardic', 'performance'],
  },
  {
    id: 'harder_they_fall_ui',
    name: 'Harder They Fall',
    description:
      'You and your allies can work together to trip larger foes. When you and an ally who also has this feat are both threatening the same creature, you can attempt to trip a foe up to two size categories larger than you. You and your ally must both use a standard action to attempt the trip on the same round.',
    shortDescription: 'Trip foes up to two sizes larger with an ally',
    source: 'Ultimate Intrigue',
    types: ['combat', 'teamwork'],
    prerequisites: [
      { type: 'feat', featId: 'improved_trip' },
      { type: 'bab', minimum: 6 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['teamwork', 'trip', 'combat_maneuver'],
  },
  {
    id: 'coordinated_reposition',
    name: 'Coordinated Reposition',
    description:
      'Whenever an ally who also has this feat takes a 5-foot step or uses a reposition combat maneuver, you can move 5 feet as an immediate action. This movement does not count as a 5-foot step and provokes attacks of opportunity.',
    shortDescription: 'Move 5 feet when an ally repositions or 5-foot steps',
    source: 'Ultimate Intrigue',
    types: ['combat', 'teamwork'],
    prerequisites: [{ type: 'bab', minimum: 3 }],
    effects: [],
    activationMode: 'conditional',
    tags: ['teamwork', 'movement', 'positioning'],
  },

  // ==================== COMBAT FEATS ====================
  {
    id: 'brilliant_planner',
    name: 'Brilliant Planner',
    description:
      'Once per day, you can retroactively declare that you have planned for the current situation. You can spend 10 minutes and a variable amount of gold to produce nearly any nonmagical item worth up to 50 gp per character level, as if you had purchased it beforehand. The item must be something you could have reasonably acquired.',
    shortDescription: 'Retroactively plan ahead for situations with prepared items',
    source: 'Ultimate Intrigue',
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'INT', minimum: 13 },
      { type: 'level', minimum: 5 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['planning', 'utility', 'intrigue'],
  },
  {
    id: 'ranged_feint',
    name: 'Ranged Feint',
    description:
      'You can feint with a ranged weapon by making a Bluff check against a foe within 30 feet. If you succeed, the target is denied its Dexterity bonus to AC against your next ranged attack against it before the end of your next turn.',
    shortDescription: 'Feint at range with ranged weapons within 30 feet',
    source: 'Ultimate Intrigue',
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'DEX', minimum: 15 },
      { type: 'bab', minimum: 2 },
      { type: 'feat', featId: 'point_blank_shot' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['ranged', 'feint', 'combat'],
  },
  {
    id: 'improved_ranged_feint',
    name: 'Improved Ranged Feint',
    description:
      'You can feint with a ranged weapon as a swift action instead of a standard action. You can use ranged feint against foes within your first range increment rather than just within 30 feet.',
    shortDescription: 'Ranged feint as swift action within first range increment',
    source: 'Ultimate Intrigue',
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'DEX', minimum: 17 },
      { type: 'bab', minimum: 6 },
      { type: 'feat', featId: 'point_blank_shot' },
      { type: 'feat', featId: 'ranged_feint' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['ranged', 'feint', 'combat'],
  },

  // ==================== GENERAL FEATS ====================
  {
    id: 'accomplished_barrister',
    name: 'Accomplished Barrister',
    description:
      'You gain a +2 bonus on Diplomacy and Knowledge (local) checks. If you have 10 or more ranks in one of these skills, the bonus increases to +4 for that skill.',
    shortDescription: '+2 to Diplomacy and Knowledge (local), +4 at 10 ranks',
    source: 'Ultimate Intrigue',
    types: ['general'],
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skill.diplomacy',
        value: 2,
        source: 'Accomplished Barrister',
      },
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skill.knowledge_local',
        value: 2,
        source: 'Accomplished Barrister',
      },
    ],
    activationMode: 'passive',
    tags: ['skill', 'social', 'intrigue'],
  },
  {
    id: 'conceal_spell',
    name: 'Conceal Spell',
    description:
      "You can conceal the appearance and sound of your spellcasting. When you cast a spell or use a spell-like ability, you can make a Bluff check and a Sleight of Hand check (each opposed by observers' Perception) to conceal both the verbal and somatic components.",
    shortDescription: 'Conceal both verbal and somatic spellcasting components',
    source: 'Ultimate Intrigue',
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'bluff', ranks: 1 },
      { type: 'skill', skillId: 'disguise', ranks: 1 },
      { type: 'skill', skillId: 'sleight_of_hand', ranks: 1 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['spellcasting', 'stealth', 'intrigue'],
  },
  {
    id: 'esoteric_linguistics',
    name: 'Esoteric Linguistics',
    description:
      'You can use Linguistics to create and decode ciphers and secret messages far more effectively. You gain a +4 bonus on Linguistics checks to create or decipher secret messages, and you can create ciphers that are nearly unbreakable without the key.',
    shortDescription: '+4 Linguistics for ciphers and secret messages',
    source: 'Ultimate Intrigue',
    types: ['general'],
    prerequisites: [{ type: 'skill', skillId: 'linguistics', ranks: 3 }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skill.linguistics',
        value: 4,
        source: 'Esoteric Linguistics',
      },
    ],
    activationMode: 'passive',
    tags: ['skill', 'linguistics', 'intrigue'],
  },
  {
    id: 'fox_shape',
    name: 'Fox Shape',
    description:
      'You can take the form of a fox. You can use your change shape racial ability to assume the form of a fox (as beast shape II). While in fox form, you gain a +10 bonus on Disguise checks to appear as a mundane fox.',
    shortDescription: 'Change shape into a fox',
    source: 'Ultimate Intrigue',
    types: ['general'],
    prerequisites: [
      { type: 'race', raceName: 'kitsune' },
      { type: 'ability_score', ability: 'CHA', minimum: 13 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['racial', 'kitsune', 'shapeshifting'],
  },
  {
    id: 'intrepid_rescuer',
    name: 'Intrepid Rescuer',
    description:
      'When an ally within your reach is hit by a melee attack, you can use an attack of opportunity to attempt an aid another action to grant that ally a +2 bonus to AC. You must declare this before the attack roll is confirmed. If the attack still hits, the ally takes half damage.',
    shortDescription: 'Use AoO to aid another on ally hit by melee attack',
    source: 'Ultimate Intrigue',
    types: ['combat'],
    prerequisites: [{ type: 'bab', minimum: 1 }],
    effects: [],
    activationMode: 'conditional',
    tags: ['combat', 'defensive', 'ally', 'aid'],
  },
  {
    id: 'masked_by_fear',
    name: 'Masked by Fear',
    description:
      'When you successfully demoralize a foe using the Intimidate skill, you gain a +4 circumstance bonus on Bluff and Disguise checks against that foe for a number of rounds equal to the duration of the shaken condition you applied.',
    shortDescription: '+4 Bluff and Disguise against demoralized foes',
    source: 'Ultimate Intrigue',
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'intimidate', ranks: 5 },
      { type: 'skill', skillId: 'bluff', ranks: 1 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['intrigue', 'intimidate', 'disguise'],
  },
  {
    id: 'nerve_racking_negotiator',
    name: 'Nerve-Racking Negotiator',
    description:
      "When you use Intimidate to improve a creature's attitude, you can also attempt a Diplomacy check to make a request of the creature at the same time. If both checks succeed, the creature fulfills the request. If the Intimidate check succeeds but the Diplomacy fails, the creature's attitude still improves but the request is denied.",
    shortDescription: 'Combine Intimidate attitude shift with Diplomacy request',
    source: 'Ultimate Intrigue',
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'diplomacy', ranks: 5 },
      { type: 'skill', skillId: 'intimidate', ranks: 5 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['social', 'intimidate', 'diplomacy', 'intrigue'],
  },
  {
    id: 'noble_scion',
    name: 'Noble Scion',
    description:
      'You are a member of a prominent noble family. Choose one of the following benefits: Scion of the Arts (+1 Perform), Scion of Lore (+1 Knowledge of choice), Scion of Peace (+1 Sense Motive), Scion of War (use Charisma for initiative instead of Dexterity), or Scion of Nobility (+1 Diplomacy plus class skill).',
    shortDescription: 'Gain a noble benefit based on your chosen legacy',
    source: 'Ultimate Intrigue',
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'CHA', minimum: 13 },
      { type: 'special', description: 'Must be taken at 1st level' },
    ],
    effects: [],
    activationMode: 'passive',
    choices: [
      {
        type: 'custom',
        label: 'Scion Type',
        options: [
          'Scion of the Arts',
          'Scion of Lore',
          'Scion of Peace',
          'Scion of War',
          'Scion of Nobility',
        ],
        affectsEffects: true,
      },
    ],
    tags: ['social', 'nobility', 'intrigue'],
  },
  {
    id: 'orator',
    name: 'Orator',
    description:
      'You can use Linguistics in place of Bluff to lie, in place of Diplomacy to change attitudes, and in place of Intimidate to demoralize foes. You must share a language with the target creature to use this ability.',
    shortDescription: 'Use Linguistics in place of Bluff, Diplomacy, and Intimidate',
    source: 'Ultimate Intrigue',
    types: ['general'],
    prerequisites: [{ type: 'skill', skillId: 'linguistics', ranks: 5 }],
    effects: [],
    activationMode: 'passive',
    tags: ['social', 'linguistics', 'intrigue', 'skill_replacement'],
  },
  {
    id: 'ostentatious_display',
    name: 'Ostentatious Display',
    description:
      "When you use a magic item with a visible display (such as a wand or staff), you can make an Intimidate check to demoralize all enemies within 30 feet as a free action. You gain a +2 bonus on this Intimidate check for each 10,000 gp of the displayed item's market price.",
    shortDescription: 'Demoralize foes when visibly using magic items',
    source: 'Ultimate Intrigue',
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'intimidate', ranks: 5 },
      { type: 'skill', skillId: 'use_magic_device', ranks: 5 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['social', 'intimidate', 'magic_items', 'intrigue'],
  },
  {
    id: 'persuasive_bribery',
    name: 'Persuasive Bribery',
    description:
      "You know how to bribe effectively. When offering a bribe to improve a creature's attitude or as part of a Diplomacy check to make a request, you gain a +2 bonus on the Diplomacy check for every 50 gp offered (up to a maximum bonus of +10).",
    shortDescription: '+2 Diplomacy per 50 gp bribe offered (max +10)',
    source: 'Ultimate Intrigue',
    types: ['general'],
    prerequisites: [{ type: 'skill', skillId: 'diplomacy', ranks: 1 }],
    effects: [],
    activationMode: 'conditional',
    tags: ['social', 'diplomacy', 'intrigue'],
  },
  {
    id: 'play_to_the_crowd',
    name: 'Play to the Crowd',
    description:
      'When you succeed at an Intimidate check to demoralize a foe in combat, you can also improve the attitude of all non-hostile intelligent creatures within 30 feet who can see you by one step (as if you had made a successful Diplomacy check). This only works once per combat per audience.',
    shortDescription: 'Improve audience attitude when demoralizing foes',
    source: 'Ultimate Intrigue',
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'intimidate', ranks: 3 },
      { type: 'ability_score', ability: 'CHA', minimum: 13 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['social', 'intimidate', 'performance', 'intrigue'],
  },
  {
    id: 'sense_relationships',
    name: 'Sense Relationships',
    description:
      'You can use Sense Motive to determine the relationships between creatures you observe. By spending 1 minute observing two or more creatures interacting, you can make a Sense Motive check to determine their general relationship (hostile, unfriendly, indifferent, friendly, or intimate).',
    shortDescription: 'Use Sense Motive to determine relationships between others',
    source: 'Ultimate Intrigue',
    types: ['general'],
    prerequisites: [{ type: 'skill', skillId: 'sense_motive', ranks: 3 }],
    effects: [],
    activationMode: 'conditional',
    tags: ['social', 'sense_motive', 'intrigue', 'observation'],
  },
  {
    id: 'skill_unlock',
    name: 'Skill Unlock',
    description:
      'Choose a skill. You gain the ability to use the skill unlock powers for that skill as described in Pathfinder Unchained. You can select this feat multiple times. Each time you do, choose a different skill.',
    shortDescription: 'Gain skill unlock powers for a chosen skill',
    source: 'Ultimate Intrigue',
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'any', ranks: 5 },
      { type: 'special', description: 'Must not be an unchained rogue' },
    ],
    effects: [],
    activationMode: 'passive',
    choices: [
      {
        type: 'skill',
        label: 'Skill',
        affectsEffects: true,
      },
    ],
    tags: ['skill', 'unchained', 'unlock'],
  },
  {
    id: 'street_smarts',
    name: 'Street Smarts',
    description:
      'You gain a +2 bonus on Knowledge (local) and Sense Motive checks. If you have 10 or more ranks in one of these skills, the bonus increases to +4 for that skill.',
    shortDescription: '+2 to Knowledge (local) and Sense Motive, +4 at 10 ranks',
    source: 'Ultimate Intrigue',
    types: ['general'],
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skill.knowledge_local',
        value: 2,
        source: 'Street Smarts',
      },
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skill.sense_motive',
        value: 2,
        source: 'Street Smarts',
      },
    ],
    activationMode: 'passive',
    tags: ['skill', 'intrigue', 'urban'],
  },
  {
    id: 'verbal_duelist',
    name: 'Verbal Duelist',
    description:
      'You gain a +2 bonus on Linguistics checks and Sense Motive checks used in verbal duels. You also gain a +2 bonus on Bluff, Diplomacy, and Intimidate checks used to make exchanges in a verbal duel.',
    shortDescription: '+2 on all checks in verbal duels',
    source: 'Ultimate Intrigue',
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'linguistics', ranks: 3 },
      { type: 'skill', skillId: 'sense_motive', ranks: 3 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['social', 'verbal_duel', 'intrigue'],
  },

  // ==================== METAMAGIC ====================
  {
    id: 'intuitive_spell',
    name: 'Intuitive Spell',
    description:
      "You can cast a spell with no verbal component by using pure intuition. An intuitive spell uses a spell slot one level higher than the spell's actual level. A spell cast in this way has no verbal component and cannot be identified by observers as being cast using verbal cues.",
    shortDescription: 'Cast spells without verbal components (+1 level)',
    source: 'Ultimate Intrigue',
    types: ['metamagic'],
    prerequisites: [{ type: 'ability_score', ability: 'WIS', minimum: 13 }],
    effects: [],
    activationMode: 'passive',
    tags: ['metamagic', 'stealth', 'spellcasting'],
  },

  // ==================== ADDITIONAL INTRIGUE / SOCIAL FEATS ====================
  {
    id: 'anonymous_clue',
    name: 'Anonymous Clue',
    description:
      'You can anonymously tip off authorities or other interested parties about criminal activity or wrongdoing. By spending 1 hour composing and delivering an anonymous message, you can make a Diplomacy check to provide information without revealing your identity. The DC is modified by the plausibility of the information.',
    shortDescription: 'Anonymously tip off authorities using Diplomacy',
    source: 'Ultimate Intrigue',
    types: ['general'],
    prerequisites: [{ type: 'skill', skillId: 'diplomacy', ranks: 3 }],
    effects: [],
    activationMode: 'conditional',
    tags: ['social', 'intrigue', 'information'],
  },
  {
    id: 'authority',
    name: 'Authority',
    description:
      'You hold a position of social authority. You gain a +2 bonus on Diplomacy and Intimidate checks against creatures of a lower social standing. Additionally, once per day you can issue a command (as the spell) to a creature who recognizes your authority (Will negates, DC 10 + half your level + your Charisma modifier).',
    shortDescription: '+2 Diplomacy and Intimidate against lower-standing creatures',
    source: 'Ultimate Intrigue',
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'CHA', minimum: 13 },
      { type: 'skill', skillId: 'diplomacy', ranks: 5 },
      { type: 'skill', skillId: 'intimidate', ranks: 5 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['social', 'authority', 'intrigue', 'command'],
  },
  {
    id: 'network',
    name: 'Network',
    description:
      'You have a network of contacts who can provide information and favors. By spending 1d4 hours and making a Diplomacy check, you can gather information, find safe houses, or obtain minor favors from your network. The DC depends on the nature and scope of the request.',
    shortDescription: 'Maintain a network of contacts for information and favors',
    source: 'Ultimate Intrigue',
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'CHA', minimum: 13 },
      { type: 'skill', skillId: 'diplomacy', ranks: 5 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['social', 'contacts', 'intrigue', 'information'],
  },
  {
    id: 'subjective_truth',
    name: 'Subjective Truth',
    description:
      "You are so skilled at bending the truth that even magic has difficulty detecting your lies. Whenever a creature uses a spell or ability to determine whether you are lying (such as discern lies or zone of truth), you can make a Bluff check opposed by the caster's caster level check. If you succeed, the spell reports that you are telling the truth.",
    shortDescription: 'Bluff check to defeat magical lie detection',
    source: 'Ultimate Intrigue',
    types: ['general'],
    prerequisites: [{ type: 'skill', skillId: 'bluff', ranks: 9 }],
    effects: [],
    activationMode: 'conditional',
    tags: ['social', 'bluff', 'intrigue', 'magic_resistance'],
  },
  {
    id: 'cutting_humiliation',
    name: 'Cutting Humiliation',
    description:
      'When you successfully demoralize a foe using the Intimidate skill, you can choose to humiliate the target instead of shaking them. A humiliated target takes a -2 penalty on attack rolls and skill checks for a number of rounds equal to the duration of the shaken condition you would have applied.',
    shortDescription: 'Humiliate foes for -2 attack and skill penalty instead of shaken',
    source: 'Ultimate Intrigue',
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'intimidate', ranks: 5 },
      { type: 'ability_score', ability: 'CHA', minimum: 13 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['social', 'intimidate', 'intrigue', 'debuff'],
  },
  {
    id: 'secret_identity',
    name: 'Secret Identity',
    description:
      'You maintain a secret identity that is so well established that divination magic treats it as your true identity. Spells like discern lies and detect thoughts reveal information about your secret identity rather than your true self. You gain a +10 bonus on Disguise checks to maintain your secret identity.',
    shortDescription: '+10 Disguise for secret identity, fools divination',
    source: 'Ultimate Intrigue',
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'disguise', ranks: 5 },
      { type: 'skill', skillId: 'bluff', ranks: 5 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skill.disguise',
        value: 10,
        source: 'Secret Identity',
      },
    ],
    activationMode: 'conditional',
    tags: ['intrigue', 'disguise', 'identity', 'divination'],
  },
  {
    id: 'feinting_flurry',
    name: 'Feinting Flurry',
    description:
      'When using flurry of blows or a similar ability that grants multiple attacks, you can replace your first attack with a feint attempt. If the feint succeeds, all remaining attacks in the flurry are made against a foe denied its Dexterity bonus to AC.',
    shortDescription: 'Replace first flurry attack with feint for all remaining attacks',
    source: 'Ultimate Intrigue',
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'improved_feint' },
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'class_feature', featureName: 'flurry of blows' },
      { type: 'bab', minimum: 6 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['combat', 'feint', 'flurry', 'monk'],
  },
  {
    id: 'taskmaster',
    name: 'Taskmaster',
    description:
      'You are skilled at directing others in their work. When you use the aid another action to help an ally with a skill check, the bonus you provide increases to +4. If you have 10 or more ranks in the skill you are aiding with, the bonus increases to +6.',
    shortDescription: 'Aid another provides +4 bonus on skill checks (+6 at 10 ranks)',
    source: 'Ultimate Intrigue',
    types: ['general'],
    prerequisites: [{ type: 'ability_score', ability: 'CHA', minimum: 13 }],
    effects: [],
    activationMode: 'conditional',
    tags: ['social', 'aid', 'leadership', 'intrigue'],
  },
  {
    id: 'voice_of_the_sibyl',
    name: 'Voice of the Sibyl',
    description:
      'Your voice carries supernatural weight. You gain a +1 bonus on all Bluff, Diplomacy, and Perform (oratory) checks. If you have 10 or more ranks in any of these skills, the bonus increases to +3 for that skill.',
    shortDescription: '+1 to Bluff, Diplomacy, and Perform (oratory), +3 at 10 ranks',
    source: 'Ultimate Intrigue',
    types: ['general'],
    prerequisites: [{ type: 'ability_score', ability: 'CHA', minimum: 15 }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skill.bluff',
        value: 1,
        source: 'Voice of the Sibyl',
      },
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skill.diplomacy',
        value: 1,
        source: 'Voice of the Sibyl',
      },
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skill.perform',
        value: 1,
        source: 'Voice of the Sibyl',
      },
    ],
    activationMode: 'passive',
    tags: ['social', 'bluff', 'diplomacy', 'perform'],
  },
  {
    id: 'street_sweep',
    name: 'Street Sweep',
    description:
      'You are skilled at fighting in urban environments. You gain a +1 bonus on attack rolls and a +2 bonus on Acrobatics checks when fighting in an urban environment (streets, buildings, alleys, rooftops). You can also move through crowds at full speed without penalty.',
    shortDescription: '+1 attack and +2 Acrobatics in urban environments',
    source: 'Ultimate Intrigue',
    types: ['combat'],
    prerequisites: [
      { type: 'skill', skillId: 'acrobatics', ranks: 3 },
      { type: 'skill', skillId: 'knowledge_local', ranks: 3 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['combat', 'urban', 'movement', 'intrigue'],
  },
  {
    id: 'confabulist',
    name: 'Confabulist',
    description:
      'You weave such elaborate lies that even you begin to believe them. You gain a +2 bonus on Bluff checks to tell lies. If you fail a Bluff check to tell a lie, you can immediately attempt a new Bluff check against the same target with a -5 penalty to convince the target you were merely joking or testing them.',
    shortDescription: '+2 Bluff to lie, retry failed lies at -5',
    source: 'Ultimate Intrigue',
    types: ['general'],
    prerequisites: [{ type: 'skill', skillId: 'bluff', ranks: 9 }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skill.bluff',
        value: 2,
        source: 'Confabulist',
      },
    ],
    activationMode: 'passive',
    tags: ['social', 'bluff', 'intrigue'],
  },
  {
    id: 'social_identity_channel',
    name: 'Tap Inner Beauty',
    description:
      'Once per day, you can meditate for 1 minute to gain an insight bonus equal to your Wisdom modifier on all Bluff, Diplomacy, and Intimidate checks for a number of hours equal to your character level.',
    shortDescription: 'Gain Wisdom bonus to social skills for hours after meditation',
    source: 'Ultimate Intrigue',
    types: ['general'],
    prerequisites: [{ type: 'ability_score', ability: 'WIS', minimum: 13 }],
    effects: [],
    activationMode: 'conditional',
    tags: ['social', 'insight', 'meditation'],
  },
  {
    id: 'misdirection_tactics',
    name: 'Misdirection Tactics',
    description:
      'You can use the Bluff skill to create diversions for your allies. As a standard action, you can make a Bluff check to distract all enemies within 30 feet. Each enemy must succeed on a Sense Motive check opposed by your Bluff check or be flat-footed against the next attack made by one of your allies before the start of your next turn.',
    shortDescription: 'Bluff to make enemies flat-footed against ally attacks',
    source: 'Ultimate Intrigue',
    types: ['combat'],
    prerequisites: [
      { type: 'skill', skillId: 'bluff', ranks: 7 },
      { type: 'ability_score', ability: 'CHA', minimum: 13 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['combat', 'bluff', 'feint', 'ally', 'intrigue'],
  },
];
