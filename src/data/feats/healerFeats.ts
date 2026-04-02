import { BonusType } from '@/types/base';
import type { FeatDefinition } from '@/types/feats';

export const HEALER_FEATS: FeatDefinition[] = [
  // ==================== HEALER'S HANDBOOK (2016) ====================

  {
    id: 'combat_vigor',
    name: 'Combat Vigor',
    description:
      'You gain a vigor pool with a number of vigor points equal to your Constitution bonus (minimum 1). As a standard action, you can spend up to 1 vigor point per 3 Hit Dice you have (minimum 1) to regain 1d6 hit points per vigor point spent (maximum 7d6). Each time you spend vigor points, you become fatigued for 1 minute. You cannot spend vigor points while you are fatigued or exhausted. Spending vigor points does not provoke attacks of opportunity. Your vigor pool replenishes to its maximum after 8 hours of rest.',
    shortDescription:
      'Gain a vigor pool; spend points to heal 1d6 HP per point spent (max 7d6) as a standard action',
    source: "Healer's Handbook",
    types: ['combat'],
    prerequisites: [{ type: 'ability_score', ability: 'CON', minimum: 13 }],
    effects: [],
    activationMode: 'toggle',
    tags: ['healing', 'vigor', 'self-healing', 'constitution'],
  },

  {
    id: 'conditional_spell',
    name: 'Conditional Spell',
    description:
      "You can modify a spell to include a condition that must be met before the spell's benefits apply to the target. The target of the spell must meet the condition you set before benefiting from the spell's effect. If the condition is never met, the spell's magic dissipates harmlessly at the end of its duration. A conditional spell uses up a spell slot one level higher than the spell's actual level.",
    shortDescription: 'Add a trigger condition to a spell; uses a slot one level higher',
    source: "Healer's Handbook",
    types: ['metamagic'],
    prerequisites: [],
    effects: [],
    activationMode: 'conditional',
    tags: ['metamagic', 'conditional', 'spell modification'],
  },

  {
    id: 'contingent_spell',
    name: 'Contingent Spell',
    description:
      'You can infuse a target with a dormant healing or restorative spell that activates upon a trigger you set. This feat applies only to cure spells, breath of life, or harmless spells that remove ability score damage, drain, or negative conditions (such as break enchantment, neutralize poison, and remove disease). When cast, you set a specific trigger that determines when the spell activates—for example, "when the target is reduced below 0 hit points." The dormant spell persists for up to 10 minutes per caster level you have. Only one contingent spell can be active on a creature at a time. A contingent spell uses up a spell slot two levels higher than the spell\'s actual level.',
    shortDescription:
      'Infuse a target with a dormant healing spell that triggers on a set condition; uses a slot two levels higher',
    source: "Healer's Handbook",
    types: ['metamagic'],
    prerequisites: [
      {
        type: 'special',
        description: 'Ability to cast cure spells (any spell with "cure" in its name)',
      },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['metamagic', 'healing', 'contingent', 'trigger'],
  },

  {
    id: 'curative_mastery',
    name: 'Curative Mastery',
    description:
      "You can activate healing magic through magic items. Once per day, you can activate a magic item that has a conjuration spell as part of its construction requirements to cast cure light wounds at the item's caster level. You gain additional daily uses of this ability at base Fortitude save bonus +4 (2 uses), +6 (3 uses), +8 (4 uses), +10 (5 uses), and +12 (6 uses). By expending multiple uses, you can cast higher-level cure spells: 2 uses for cure moderate wounds, 3 uses for cure serious wounds, 4 uses for cure critical wounds, and 5 uses for breath of life. Each higher-level spell requires the item to have a spell of matching or greater level as a construction requirement (2nd level for moderate wounds, 3rd for serious, 4th for critical, 5th for breath of life).",
    shortDescription: 'Activate magic items to cast cure spells; scales with base Fortitude bonus',
    source: "Healer's Handbook",
    types: ['item_mastery'],
    prerequisites: [
      { type: 'skill', skillId: 'use_magic_device', ranks: 1 },
      { type: 'special', description: 'Base Fortitude save bonus +2' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['healing', 'item mastery', 'cure', 'magic items'],
  },

  {
    id: 'fortuitous_vigor',
    name: 'Fortuitous Vigor',
    description:
      'Your vigor pool increases by 1. Whenever you roll a natural 20 on an ability check, attack roll, saving throw, or skill check, or whenever you threaten a critical hit with an attack, you may spend 1 or more vigor points as a swift action to regain hit points as per the Combat Vigor feat.',
    shortDescription:
      'Gain 1 extra vigor point; spend vigor as a swift action on natural 20s or threatened crits',
    source: "Healer's Handbook",
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'CON', minimum: 13 },
      { type: 'feat', featId: 'combat_vigor' },
      { type: 'special', description: '4th character level' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['healing', 'vigor', 'self-healing', 'critical'],
  },

  {
    id: 'insidious_healing',
    name: 'Insidious Healing',
    description:
      'Any creature that chooses not to attempt a saving throw against any healing spell you cast takes a –4 penalty on saving throws against other targeted spells you cast for 24 hours.',
    shortDescription:
      'Creatures that forgo saves against your healing spells take –4 on saves vs. your other targeted spells for 24 hours',
    source: "Healer's Handbook",
    types: ['general'],
    prerequisites: [],
    effects: [],
    activationMode: 'conditional',
    tags: ['healing', 'spells', 'debuff', 'saving throws'],
  },

  {
    id: 'lifebound',
    name: 'Lifebound',
    description:
      "Whenever a spell, spell-like ability, or supernatural ability heals you up to your maximum number of hit points, any excess hit points persist for 1 round per character level as temporary hit points, up to a maximum of temporary hit points equal to 1/2 your character level. Additionally, if healing would normally generate temporary hit points (such as from an oracle of life's spirit boost revelation), add half your level to the caster's level when determining the total temporary hit points gained.",
    shortDescription:
      'Excess healing becomes temporary HP (up to 1/2 level, for 1 round/level); bonus to temp HP from healing abilities',
    source: "Healer's Handbook",
    types: ['general'],
    prerequisites: [],
    effects: [],
    activationMode: 'passive',
    tags: ['healing', 'temporary hit points', 'survivability'],
  },

  {
    id: 'painful_cures',
    name: 'Painful Cures',
    description:
      "When you cast a spell that restores hit points, you can modify it to inflict pain on the recipient. The spell gains the evil and pain descriptors, and the target takes nonlethal damage equal to the hit points restored. Additionally, if the target fails a saving throw against your healing spell (or doesn't attempt one), it suffers a –2 penalty on saving throws and skill checks for 10 minutes per caster level. For spells that don't normally allow saving throws, a Fortitude save is permitted to negate only the penalty (not the nonlethal damage).",
    shortDescription:
      'Healing spells deal equal nonlethal damage; targets that fail saves also take –2 on saves and skill checks for 10 min/level',
    source: "Healer's Handbook",
    types: ['general'],
    prerequisites: [{ type: 'special', description: 'Evil alignment' }],
    effects: [],
    activationMode: 'toggle',
    tags: ['healing', 'evil', 'pain', 'nonlethal', 'spells'],
  },

  {
    id: 'restorative_vigor',
    name: 'Restorative Vigor',
    description:
      'Your vigor pool increases by 1. When spending vigor points, instead of (or in addition to) regaining hit points, you may recover from 1d3 points of ability score damage from one physical ability score (Strength, Dexterity, or Constitution) per vigor point spent. You can mix and match between hit point recovery and ability score damage recovery with each vigor point you spend.',
    shortDescription:
      'Gain 1 extra vigor point; spend vigor to recover 1d3 ability damage per point (STR, DEX, or CON)',
    source: "Healer's Handbook",
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'CON', minimum: 15 },
      { type: 'feat', featId: 'combat_vigor' },
      { type: 'special', description: '8th character level' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['healing', 'vigor', 'ability damage', 'recovery'],
  },

  {
    id: 'take_a_breather',
    name: 'Take a Breather',
    description:
      'Your vigor pool increases by 1. When an opponent you threaten provokes an attack of opportunity, you may spend 1 or more vigor points as a swift action to regain hit points as per the Combat Vigor feat instead of making an attack of opportunity. Spending vigor points in this manner does not count against the total number of attacks of opportunity you can make during a round.',
    shortDescription:
      'Gain 1 extra vigor point; when foes provoke AoOs, spend vigor as a swift action to self-heal instead of attacking',
    source: "Healer's Handbook",
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'CON', minimum: 13 },
      { type: 'feat', featId: 'combat_vigor' },
      { type: 'special', description: '4th character level' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['healing', 'vigor', 'attack of opportunity', 'self-healing'],
  },

  {
    id: 'unconquerable_resolve',
    name: 'Unconquerable Resolve',
    description:
      "When you spend a daily use of your resolve class feature, you gain 1 temporary hit point per Hit Die you have. These temporary hit points are lost first when you take damage, disappear after 1 minute if not lost, and are refreshed each time you use your resolve ability. If you haven't lost the temporary hit points, they last for 24 hours before disappearing. Special: You can take this feat multiple times. Each additional time you take it, when you use your resolve ability you gain an additional 1 temporary hit point per Hit Die you have.",
    shortDescription:
      'Gain 1 temp HP/HD when using resolve; can be taken multiple times for additional temp HP',
    source: "Healer's Handbook",
    types: ['combat'],
    prerequisites: [
      { type: 'class_feature', featureName: 'resolve' },
      { type: 'special', description: 'Samurai level 1st' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['samurai', 'resolve', 'temporary hit points', 'survivability'],
  },

  {
    id: 'vim_and_vigor',
    name: 'Vim and Vigor',
    description:
      'Your vigor pool increases by 1. The fatigued condition resulting from spending vigor points lasts for only 3 rounds instead of 1 minute. Additionally, you gain a +2 bonus on saving throws against effects that cause the fatigued or exhausted condition.',
    shortDescription:
      'Gain 1 extra vigor point; vigor fatigue lasts 3 rounds (not 1 min); +2 saves vs. fatigue/exhaustion',
    source: "Healer's Handbook",
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'CON', minimum: 13 },
      { type: 'feat', featId: 'combat_vigor' },
      { type: 'feat', featId: 'endurance' },
      { type: 'special', description: '3rd character level' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'save.all',
        value: 2,
        source: 'Vim and Vigor',
        condition: {
          type: 'custom',
          description: 'Against effects that cause the fatigued or exhausted condition',
          params: {},
        },
      },
    ],
    activationMode: 'passive',
    tags: ['vigor', 'fatigue', 'exhaustion', 'saving throws', 'constitution'],
  },
];
