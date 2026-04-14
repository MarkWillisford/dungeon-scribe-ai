import { BonusType } from '@/types/base';
import type { FeatDefinition } from '@/types/feats';

export const HEROES_OF_GOLARION_FEATS: FeatDefinition[] = [
  {
    id: 'beast_speaker',
    name: 'Beast Speaker',
    description:
      'You can select a magical beast from the druid animal companion list to serve as your animal companion, acquiring and advancing it using the same mechanics as your class feature. You can dismiss it as your class allows. You must satisfy any additional prerequisites for companions with an Intelligence score of 3 or higher.',
    shortDescription: 'Select a magical beast as your animal companion.',
    source: 'Heroes of Golarion',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'handle_animal', ranks: 7 },
      {
        type: 'class_feature',
        featureName: 'animal companion with effective druid level 7',
      },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['animal companion', 'magical beast', 'wyrwood', 'druid'],
  },
  {
    id: 'beast_speaker_mastery',
    name: 'Beast Speaker Mastery',
    description:
      'Your beast companion gains the abilities and bonuses found in the mastery entry within its stat block. You must meet the minimum level requirement listed in the companion entry to access these abilities. If you obtain a new beast companion of a different type, you keep this feat but may not yet qualify for its mastery benefits.',
    shortDescription: 'Your beast companion gains mastery abilities from its stat block.',
    source: 'Heroes of Golarion',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'feat', featId: 'beast_speaker' },
      {
        type: 'special',
        description:
          'Character level equal to or higher than the level listed in the companion mastery entry',
      },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['animal companion', 'magical beast', 'mastery'],
  },
  {
    id: 'consume_power',
    name: 'Consume Power',
    description:
      'Once per day as a full-round action, you may destroy a magical item you possess. Upon consumption, you regain 1d6 hit points + 1 additional hit point per caster level of the item, and you gain a +1 bonus on attack and damage rolls for a number of rounds equal to the caster level of the item.',
    shortDescription:
      'Once per day, destroy a magic item to regain hit points and gain a +1 attack/damage bonus.',
    source: 'Heroes of Golarion',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'spellcraft', ranks: 3 },
      { type: 'special', description: 'Wyrwood race' },
    ],
    effects: [
      {
        type: 'bonus',
        target: 'attack.all',
        value: 1,
        bonusType: BonusType.UNTYPED,
        source: 'Consume Power',
        condition: {
          type: 'custom',
          description: 'for a number of rounds equal to the caster level of the consumed item',
          params: {},
        },
      },
      {
        type: 'bonus',
        target: 'damage.melee',
        value: 1,
        bonusType: BonusType.UNTYPED,
        source: 'Consume Power',
        condition: {
          type: 'custom',
          description: 'for a number of rounds equal to the caster level of the consumed item',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['wyrwood', 'magic item', 'healing', 'once per day'],
  },
  {
    id: 'dragon_shot',
    name: 'Dragon Shot',
    description:
      "As a swift action, you may spend 1 grit point to convert your gun's damage into acid, cold, electricity, or fire damage for 1 round. You may select a different damage type each time you use this ability. The shot retains its status as a ranged weapon attack for purposes of critical hit multipliers and abilities like Deadly Aim.",
    shortDescription: 'Spend 1 grit to convert firearm damage to an energy type for 1 round.',
    source: 'Heroes of Golarion',
    verificationStatus: 'needs_review' as const,
    types: ['combat', 'grit'],
    prerequisites: [
      {
        type: 'special',
        description: 'Amateur Gunslinger feat or grit class feature',
      },
      { type: 'skill', skillId: 'spellcraft', ranks: 5 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['grit', 'firearm', 'energy damage', 'gunslinger'],
  },
  {
    id: 'expressionless',
    name: 'Expressionless',
    description:
      'Your lack of emotion makes it difficult for non-wyrwoods to relate to you. When dealing with any race other than your own, you gain a +2 bonus on Bluff checks. Non-wyrwood creatures also take a -2 penalty on Diplomacy and Sense Motive checks attempted against you.',
    shortDescription:
      '+2 Bluff vs non-wyrwoods; they take -2 on Diplomacy and Sense Motive vs you.',
    source: 'Heroes of Golarion',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [{ type: 'special', description: 'Wyrwood race' }],
    effects: [
      {
        type: 'bonus',
        target: 'skill.bluff',
        value: 2,
        bonusType: BonusType.UNTYPED,
        source: 'Expressionless',
        condition: {
          type: 'custom',
          description: 'when dealing with non-wyrwood races',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['wyrwood', 'social', 'bluff', 'diplomacy'],
  },
  {
    id: 'freeze_in_place',
    name: 'Freeze in Place',
    description:
      'You gain the freeze universal monster rule, allowing you to appear as an ordinary statue by holding perfectly still. When you attack an unaware opponent while frozen, your critical threat range doubles. This doubling does not stack with other effects that expand your critical threat range.',
    shortDescription:
      'Appear as a statue while motionless; double critical threat range vs unaware foes.',
    source: 'Heroes of Golarion',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'skill', skillId: 'stealth', ranks: 5 },
      { type: 'special', description: 'Wyrwood race' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['wyrwood', 'stealth', 'critical', 'freeze'],
  },
  {
    id: 'glorious_blaze',
    name: 'Glorious Blaze',
    description:
      'When the sun is visible, you can spend 1 round performing a devotional dance. Beginning your next turn, allies who can see you gain a +1 morale bonus on attack rolls, skill checks, and saving throws for a number of rounds equal to half your character level + your Wisdom modifier (minimum 1 round). At 9th character level, this bonus increases to +2.',
    shortDescription:
      'Dance in sunlight to grant allies a morale bonus on attacks, skills, and saves.',
    source: 'Heroes of Golarion',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'Goblin race' },
      { type: 'special', description: 'Worshipper of Sarenrae' },
    ],
    effects: [
      {
        type: 'bonus',
        target: 'attack.all',
        value: 1,
        bonusType: BonusType.MORALE,
        source: 'Glorious Blaze',
        condition: {
          type: 'custom',
          description:
            'ally can see you after devotional dance; sun must be visible; increases to +2 at character level 9',
          params: {},
        },
      },
      {
        type: 'bonus',
        target: 'save.all',
        value: 1,
        bonusType: BonusType.MORALE,
        source: 'Glorious Blaze',
        condition: {
          type: 'custom',
          description:
            'ally can see you after devotional dance; sun must be visible; increases to +2 at character level 9',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['goblin', 'Sarenrae', 'morale', 'allies', 'sunlight'],
  },
  {
    id: 'infused_spell_cartridges',
    name: 'Infused Spell Cartridges',
    description:
      "When your firearm is enhanced through Arcane Strike, you may expend a standard action to cast an arcane spell of 3rd level or lower and channel it through a force bullet. The spell must have a touch range or create a ray effect; if the spell would create multiple rays, only one is delivered. Upon striking a target, the force bullet deals its normal damage and applies the channeled spell's effects. A critical hit from the force bullet causes the spell to deal doubled damage.",
    shortDescription:
      'Channel a 3rd-level or lower arcane spell through an Arcane Strike force bullet.',
    source: 'Heroes of Golarion',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'INT', minimum: 15 },
      { type: 'feat', featId: 'arcane_strike' },
      { type: 'feat', featId: 'spell_cartridges' },
      { type: 'special', description: 'Ability to cast 4th-level arcane spells' },
      { type: 'special', description: 'Proficiency with firearms' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['firearm', 'arcane', 'spell channeling', 'gunslinger', 'magus'],
  },
  {
    id: 'ioun_resonance',
    name: 'Ioun Resonance',
    description:
      'As a standard action, you can establish a magical connection between your ioun core and an active ioun stone you possess. While this link is maintained, any numerical bonuses and penalties from the ioun stone increase by 1. You may only maintain one such link at a time; creating a link to a new stone ends any previous link.',
    shortDescription:
      'Link an ioun stone to your core to increase its numerical bonuses and penalties by 1.',
    source: 'Heroes of Golarion',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [{ type: 'special', description: 'Wyrwood race' }],
    effects: [],
    activationMode: 'conditional',
    tags: ['wyrwood', 'ioun stone', 'enhancement'],
  },
  {
    id: 'lifecrafting',
    name: 'Lifecrafting',
    description:
      'You can craft new wyrwoods through a specialized ritual. You must spend one month in isolation with a Small wooden construct, using a flawless ioun stone worth at least 10,000 gp as the core component. Each week you must succeed at a Craft (carpentry or sculpture) check against DC 30. Successful completion transforms the construct into a humanoid wyrwood with commoner-level abilities. Failed checks require restarting the process, though materials can be salvaged.',
    shortDescription: 'Craft a new wyrwood construct through a month-long ritual.',
    source: 'Heroes of Golarion',
    verificationStatus: 'needs_review' as const,
    types: ['item_creation'],
    prerequisites: [
      { type: 'feat', featId: 'craft_construct' },
      { type: 'feat', featId: 'leadership' },
      { type: 'special', description: 'Wyrwood race' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['wyrwood', 'construct', 'crafting', 'ritual'],
  },
  {
    id: 'magical_heart',
    name: 'Magical Heart',
    description:
      'When your unarmed strikes are enhanced by Arcane Strike, a successful hit grants you temporary hit points equal to the bonus damage granted by Arcane Strike. These temporary hit points last until the start of your next turn.',
    shortDescription:
      'Arcane Strike unarmed hits grant temporary hit points equal to the Arcane Strike bonus.',
    source: 'Heroes of Golarion',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'arcane_strike' },
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'special', description: 'Wyrwood race' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['wyrwood', 'unarmed', 'arcane strike', 'temporary hit points'],
  },
  {
    id: 'mental_derail',
    name: 'Mental Derail',
    description:
      'As a swift action, you can shout nonsense to disorient an enemy within hearing range. The target must succeed at a Will save (DC = 10 + half your character level + your Charisma modifier) or become caught off guard and take a -2 penalty on attack rolls and Strength- and Dexterity-based skill checks until the end of its turn. Regardless of the outcome, a creature cannot be targeted again within 24 hours. This is a mind-affecting effect.',
    shortDescription:
      'Swift action: Will save or target takes -2 on attacks and Str/Dex skills until end of its turn.',
    source: 'Heroes of Golarion',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [{ type: 'special', description: 'Goblin race' }],
    effects: [
      {
        type: 'bonus',
        target: 'attack.all',
        value: -2,
        bonusType: BonusType.UNTYPED,
        source: 'Mental Derail',
        condition: {
          type: 'custom',
          description: "target failed Will save; until end of target's turn; mind-affecting",
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['goblin', 'mind-affecting', 'debuff', 'will save'],
  },
  {
    id: 'mental_stare',
    name: 'Mental Stare',
    description:
      'You can use your hypnotic stare class feature without relying on visual perception. You do not need to attempt concentration checks to maintain your hypnotic stare while blinded.',
    shortDescription: 'Use hypnotic stare while blind without concentration checks.',
    source: 'Heroes of Golarion',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [{ type: 'class_feature', featureName: 'hypnotic stare' }],
    effects: [],
    activationMode: 'passive',
    tags: ['mesmerist', 'hypnotic stare', 'blind', 'concentration'],
  },
  {
    id: 'occult_conduit',
    name: 'Occult Conduit',
    description:
      "You can invest mental focus into your body to use it as an implement. When doing so, your body functions as an implement of any implement school you know. You do not gain the resonant power of the chosen school, but your occultist level is treated as 1 higher for that school's focus powers. You can change which school is tied to your body each time you perform your daily implement investment.",
    shortDescription:
      "Use your body as an implement; treat occultist level as 1 higher for that school's focus powers.",
    source: 'Heroes of Golarion',
    verificationStatus: 'needs_review' as const,
    types: ['conduit'],
    prerequisites: [
      { type: 'level', minimum: 5 },
      { type: 'class_feature', featureName: 'implements' },
      { type: 'class_feature', featureName: 'mental focus' },
      { type: 'special', description: 'Wyrwood race' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['wyrwood', 'occultist', 'implement', 'mental focus', 'conduit'],
  },
  {
    id: 'overpowering_stare',
    name: 'Overpowering Stare',
    description:
      'When you use your painful stare ability, the target must succeed at a Will saving throw (DC = 10 + half your mesmerist level + your Charisma modifier) or become confused for 1 round. Regardless of the outcome, a creature cannot be affected by this ability again for 24 hours.',
    shortDescription: 'Painful stare forces Will save or target is confused for 1 round.',
    source: 'Heroes of Golarion',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'level', minimum: 11 },
      { type: 'class_feature', featureName: 'painful stare' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['mesmerist', 'painful stare', 'confused', 'will save'],
  },
  {
    id: 'piercing_chant',
    name: 'Piercing Chant',
    description:
      'As a full-round action, you can perform a discordant chant that forces each enemy within 15 feet who can hear you to succeed at a Will save (DC = 10 + half your character level + your Charisma modifier) or become dazed for 1 round. A creature cannot be affected by this ability more than once per 24-hour period. This is a mind-affecting effect.',
    shortDescription: 'Full-round action: Will save or enemies within 15 ft are dazed for 1 round.',
    source: 'Heroes of Golarion',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [{ type: 'special', description: 'Goblin race' }],
    effects: [],
    activationMode: 'conditional',
    tags: ['goblin', 'mind-affecting', 'dazed', 'will save', 'sonic'],
  },
  {
    id: 'recall_ammunition',
    name: 'Recall Ammunition',
    description:
      'When a ranged firearm attack misses, you can expend 2 grit points as an immediate action to magically retrieve the shot. The ammunition from the missed shot is magically loaded back into your firearm and is ready to fire again immediately.',
    shortDescription:
      'Spend 2 grit as an immediate action to retrieve and reload missed firearm ammunition.',
    source: 'Heroes of Golarion',
    verificationStatus: 'needs_review' as const,
    types: ['combat', 'grit'],
    prerequisites: [
      {
        type: 'special',
        description: 'Amateur Gunslinger feat or grit class feature',
      },
      { type: 'bab', minimum: 9 },
      { type: 'skill', skillId: 'spellcraft', ranks: 5 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['grit', 'firearm', 'gunslinger', 'ammunition'],
  },
  {
    id: 'robust_stench',
    name: 'Robust Stench',
    description:
      'Allies within 5 feet of you gain a +2 morale bonus on Fortitude saving throws. This bonus only applies to allies who have fought alongside you at least once before, and it ceases when they move beyond 5 feet of you.',
    shortDescription:
      'Allies within 5 ft who have fought with you gain +2 morale on Fortitude saves.',
    source: 'Heroes of Golarion',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [{ type: 'special', description: 'Goblin race' }],
    effects: [
      {
        type: 'bonus',
        target: 'save.fortitude',
        value: 2,
        bonusType: BonusType.MORALE,
        source: 'Robust Stench',
        condition: {
          type: 'custom',
          description: 'ally is within 5 feet and has fought alongside you at least once before',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['goblin', 'allies', 'fortitude', 'morale', 'aura'],
  },
  {
    id: 'sacred_pyromania',
    name: 'Sacred Pyromania',
    description:
      'Your fire damage affects incorporeal creatures regardless of whether the fire is magical or mundane. Incorporeal creatures do not gain their normal 50% damage reduction from corporeal sources against fire damage you deal.',
    shortDescription:
      'Your fire damage affects incorporeal creatures and ignores their damage reduction.',
    source: 'Heroes of Golarion',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'Goblin race' },
      { type: 'special', description: 'Worshipper of Sarenrae' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['goblin', 'Sarenrae', 'fire', 'incorporeal', 'sacred'],
  },
  {
    id: 'spell_cartridges',
    name: 'Spell Cartridges',
    description:
      'When your firearm is enhanced through Arcane Strike, you may discharge force bullets instead of standard ammunition. These magical projectiles deal 1d4 points of force damage for every five caster levels you have. Force bullets require no black powder or physical ammunition and count as magical weapons for overcoming damage reduction.',
    shortDescription:
      'Arcane Strike enables force bullets dealing 1d4 force damage per 5 caster levels, no ammo needed.',
    source: 'Heroes of Golarion',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'arcane_strike' },
      { type: 'special', description: 'Ability to cast arcane spells' },
      { type: 'special', description: 'Proficiency with firearms' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['firearm', 'arcane', 'force', 'arcane strike', 'gunslinger', 'magus'],
  },
  {
    id: 'swords_shadow',
    name: "Sword's Shadow",
    description:
      "When you successfully damage an opponent with your first attack during a full attack action, you may attempt a Sleight of Hand check against that opponent's CMD as an immediate action. If the check succeeds, you treat that opponent as flat-footed for your next attack during the same full attack action.",
    shortDescription:
      'On first hit of a full attack, make a Sleight of Hand vs CMD to treat foe as flat-footed for your next attack.',
    source: 'Heroes of Golarion',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'deft_hands' },
      { type: 'bab', minimum: 7 },
      { type: 'special', description: 'Wyrwood race' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['wyrwood', 'flat-footed', 'sleight of hand', 'full attack'],
  },
];

// CHECKPOINT: last_written=swords_shadow, written=21/21, status=complete
