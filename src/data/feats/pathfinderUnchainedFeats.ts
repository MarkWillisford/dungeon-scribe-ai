import { BonusType } from '@/types/base';
import type { FeatDefinition } from '@/types/feats';

export const PATHFINDER_UNCHAINED_FEATS: FeatDefinition[] = [
  // ── Champion of Anarchy ───────────────────────────────────────────────────
  {
    id: 'champion_of_anarchy',
    name: 'Champion of Anarchy',
    description:
      'You embody the chaotic neutral ideal of personal freedom untethered from moral constraint. You may store a number of affirmations up to your Charisma bonus (minimum 1) to use at any time, not just within 24 hours. You may expend an affirmation to cast lesser confusion as a spell-like ability (standard action; caster level equals your Hit Dice; duration 1d4 rounds on a failed save). You gain a +2 bonus on weapon and spell damage rolls against lawful creatures. This is an alignment-based effect. If you lose your chaotic neutral alignment, you retain the +2 damage bonus against lawful creatures but lose all other benefits.',
    shortDescription:
      'Gain affirmation storage, lesser confusion SLA, and +2 damage vs. lawful foes.',
    source: 'Pathfinder Unchained',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'level', minimum: 10 },
      { type: 'special', description: 'Chaotic neutral alignment' },
    ],
    effects: [
      {
        type: 'bonus',
        target: 'damage.melee',
        value: 2,
        bonusType: BonusType.UNTYPED,
        source: 'Champion of Anarchy',
        condition: {
          type: 'custom',
          description: 'on weapon and spell damage rolls against lawful creatures',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['alignment', 'chaotic neutral', 'affirmation', 'damage bonus'],
  },

  // ── Champion of Balance ───────────────────────────────────────────────────
  {
    id: 'champion_of_balance',
    name: 'Champion of Balance',
    description:
      'You embody the true neutral ideal of equilibrium between all forces. You gain a +2 bonus on weapon and spell damage rolls against good and evil creatures, and a +2 bonus on weapon and spell damage rolls against lawful and chaotic creatures. These bonuses stack with each other. This is an alignment-based effect.',
    shortDescription:
      'Gain +2 damage vs. good, evil, lawful, and chaotic creatures (bonuses stack).',
    source: 'Pathfinder Unchained',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'level', minimum: 10 },
      { type: 'special', description: 'Neutral (true neutral) alignment' },
    ],
    effects: [
      {
        type: 'bonus',
        target: 'damage.melee',
        value: 2,
        bonusType: BonusType.UNTYPED,
        source: 'Champion of Balance',
        condition: {
          type: 'custom',
          description: 'on weapon and spell damage rolls against good or evil creatures',
          params: {},
        },
      },
      {
        type: 'bonus',
        target: 'damage.melee',
        value: 2,
        bonusType: BonusType.UNTYPED,
        source: 'Champion of Balance',
        condition: {
          type: 'custom',
          description: 'on weapon and spell damage rolls against lawful or chaotic creatures',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['alignment', 'true neutral', 'damage bonus'],
  },

  // ── Champion of Destruction ───────────────────────────────────────────────
  {
    id: 'champion_of_destruction',
    name: 'Champion of Destruction',
    description:
      'You embody the chaotic evil ideal of destruction and selfish cruelty. You may store a number of affirmations up to your Charisma bonus (minimum 1) to use at any time, not just within 24 hours. You may expend an affirmation to neutralize alignment-based spell or magic item effects targeting you. You gain a +2 bonus on weapon and spell damage rolls against lawful and good creatures, or +4 if the target is both lawful and good. This is an alignment-based effect. If you lose your chaotic evil alignment, you retain the damage bonus but lose all other benefits.',
    shortDescription:
      'Gain affirmation storage, counter alignment effects, and +2/+4 damage vs. lawful/good foes.',
    source: 'Pathfinder Unchained',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'level', minimum: 10 },
      { type: 'special', description: 'Chaotic evil alignment' },
    ],
    effects: [
      {
        type: 'bonus',
        target: 'damage.melee',
        value: 2,
        bonusType: BonusType.UNTYPED,
        source: 'Champion of Destruction',
        condition: {
          type: 'custom',
          description:
            'on weapon and spell damage rolls against lawful or good creatures (+4 if the target is both)',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['alignment', 'chaotic evil', 'affirmation', 'damage bonus'],
  },

  // ── Champion of Freedom ───────────────────────────────────────────────────
  {
    id: 'champion_of_freedom',
    name: 'Champion of Freedom',
    description:
      'You embody the chaotic good ideal of personal freedom and compassionate rebellion. You may store a number of affirmations up to your Charisma bonus (minimum 1) to use at any time, not just within 24 hours. You may expend an affirmation to gain the effects of freedom of movement for 1 round. You gain a +2 bonus on weapon and spell damage rolls against evil and lawful creatures, or +4 if the target is both evil and lawful. This is an alignment-based effect. If you lose your chaotic good alignment, you retain the damage bonus but lose all other benefits.',
    shortDescription:
      'Gain affirmation storage, freedom of movement, and +2/+4 damage vs. evil/lawful foes.',
    source: 'Pathfinder Unchained',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'level', minimum: 10 },
      { type: 'special', description: 'Chaotic good alignment' },
    ],
    effects: [
      {
        type: 'bonus',
        target: 'damage.melee',
        value: 2,
        bonusType: BonusType.UNTYPED,
        source: 'Champion of Freedom',
        condition: {
          type: 'custom',
          description:
            'on weapon and spell damage rolls against evil or lawful creatures (+4 if the target is both)',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['alignment', 'chaotic good', 'affirmation', 'damage bonus', 'freedom of movement'],
  },

  // ── Champion of Grace ─────────────────────────────────────────────────────
  {
    id: 'champion_of_grace',
    name: 'Champion of Grace',
    description:
      'You embody the neutral good ideal of benevolence without allegiance to law or chaos. You may store a number of affirmations up to your Charisma bonus (minimum 1) to use at any time, not just within 24 hours. As a standard action, you may touch a creature and expend an affirmation to remove a single condition or harmful effect from the list of paladin mercies, using your Hit Dice as your paladin level. You gain a +2 bonus on weapon and spell damage rolls against evil creatures. This is an alignment-based effect. If you lose your neutral good alignment, you retain the +2 damage bonus against evil creatures but lose all other benefits.',
    shortDescription:
      'Gain affirmation storage, paladin mercy removal, and +2 damage vs. evil foes.',
    source: 'Pathfinder Unchained',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'level', minimum: 10 },
      { type: 'special', description: 'Neutral good alignment' },
    ],
    effects: [
      {
        type: 'bonus',
        target: 'damage.melee',
        value: 2,
        bonusType: BonusType.UNTYPED,
        source: 'Champion of Grace',
        condition: {
          type: 'custom',
          description: 'on weapon and spell damage rolls against evil creatures',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['alignment', 'neutral good', 'affirmation', 'healing', 'damage bonus'],
  },

  // ── Champion of Malevolence ───────────────────────────────────────────────
  {
    id: 'champion_of_malevolence',
    name: 'Champion of Malevolence',
    description:
      'You embody the neutral evil ideal of self-serving cruelty. You may store a number of affirmations up to your Charisma bonus (minimum 1) to use at any time, not just within 24 hours. As a standard action, you may touch a creature and expend an affirmation to bestow conditions or harmful effects from antipaladin cruelties, using your Hit Dice as your antipaladin level. You gain a +2 bonus on weapon and spell damage rolls against good creatures. This is an alignment-based effect. If you lose your neutral evil alignment, you retain the +2 damage bonus against good creatures but lose all other benefits.',
    shortDescription:
      'Gain affirmation storage, antipaladin cruelty application, and +2 damage vs. good foes.',
    source: 'Pathfinder Unchained',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'level', minimum: 10 },
      { type: 'special', description: 'Neutral evil alignment' },
    ],
    effects: [
      {
        type: 'bonus',
        target: 'damage.melee',
        value: 2,
        bonusType: BonusType.UNTYPED,
        source: 'Champion of Malevolence',
        condition: {
          type: 'custom',
          description: 'on weapon and spell damage rolls against good creatures',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['alignment', 'neutral evil', 'affirmation', 'cruelty', 'damage bonus'],
  },

  // ── Champion of Righteousness ─────────────────────────────────────────────
  {
    id: 'champion_of_righteousness',
    name: 'Champion of Righteousness',
    description:
      'You embody the lawful good ideal of justice and honor. You may store a number of affirmations up to your Charisma bonus (minimum 1) to use at any time, not just within 24 hours. You may expend an affirmation to treat alignment-based spell effects or magic item effects targeting you as if you were neutral rather than lawful good. You gain a +2 bonus on weapon and spell damage rolls against chaotic and evil creatures, or +4 if the target is both chaotic and evil. This is an alignment-based effect. If you lose your lawful good alignment, you retain the damage bonus but lose all other benefits.',
    shortDescription:
      'Gain affirmation storage, alignment protection, and +2/+4 damage vs. chaotic/evil foes.',
    source: 'Pathfinder Unchained',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'level', minimum: 10 },
      { type: 'special', description: 'Lawful good alignment' },
    ],
    effects: [
      {
        type: 'bonus',
        target: 'damage.melee',
        value: 2,
        bonusType: BonusType.UNTYPED,
        source: 'Champion of Righteousness',
        condition: {
          type: 'custom',
          description:
            'on weapon and spell damage rolls against chaotic or evil creatures (+4 if the target is both)',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['alignment', 'lawful good', 'affirmation', 'damage bonus'],
  },

  // ── Champion of Tranquility ───────────────────────────────────────────────
  {
    id: 'champion_of_tranquility',
    name: 'Champion of Tranquility',
    description:
      'You embody the lawful neutral ideal of order and discipline without regard for good or evil. You may store a number of affirmations up to your Charisma bonus (minimum 1) to use at any time, not just within 24 hours. You may expend an affirmation to cast calm emotions as a spell-like ability (standard action; caster level equals your Hit Dice). You gain a +2 bonus on weapon and spell damage rolls against chaotic creatures. This is an alignment-based effect. If you lose your lawful neutral alignment, you retain the +2 damage bonus against chaotic creatures but lose all other benefits.',
    shortDescription:
      'Gain affirmation storage, calm emotions SLA, and +2 damage vs. chaotic foes.',
    source: 'Pathfinder Unchained',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'level', minimum: 10 },
      { type: 'special', description: 'Lawful neutral alignment' },
    ],
    effects: [
      {
        type: 'bonus',
        target: 'damage.melee',
        value: 2,
        bonusType: BonusType.UNTYPED,
        source: 'Champion of Tranquility',
        condition: {
          type: 'custom',
          description: 'on weapon and spell damage rolls against chaotic creatures',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['alignment', 'lawful neutral', 'affirmation', 'spell-like ability', 'damage bonus'],
  },

  // ── Champion of Tyranny ───────────────────────────────────────────────────
  {
    id: 'champion_of_tyranny',
    name: 'Champion of Tyranny',
    description:
      'You embody the lawful evil ideal of domination and ruthless control. You may store a number of affirmations up to your Charisma bonus (minimum 1) to use at any time, not just within 24 hours. You may expend an affirmation to cast hold person as a spell-like ability (standard action; caster level equals your Hit Dice). You gain a +2 bonus on weapon and spell damage rolls against chaotic and good creatures, or +4 if the target is both chaotic and good. This is an alignment-based effect. If you lose your lawful evil alignment, you retain the damage bonus but lose all other benefits.',
    shortDescription:
      'Gain affirmation storage, hold person SLA, and +2/+4 damage vs. chaotic/good foes.',
    source: 'Pathfinder Unchained',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'level', minimum: 10 },
      { type: 'special', description: 'Lawful evil alignment' },
    ],
    effects: [
      {
        type: 'bonus',
        target: 'damage.melee',
        value: 2,
        bonusType: BonusType.UNTYPED,
        source: 'Champion of Tyranny',
        condition: {
          type: 'custom',
          description:
            'on weapon and spell damage rolls against chaotic or good creatures (+4 if the target is both)',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['alignment', 'lawful evil', 'affirmation', 'spell-like ability', 'damage bonus'],
  },

  // combat_stamina — already in mttFeats.ts (same mechanics; MTT is a reprint)

  // ── Esoteric Abjuration ───────────────────────────────────────────────────
  {
    id: 'esoteric_abjuration',
    name: 'Esoteric Abjuration',
    description:
      "When you cast an abjuration spell using geodes as esoteric material components, you may grant a single target a +1 competence bonus on its Fortitude, Reflex, or Will saving throws for the duration of the spell. The spell must have a duration measured in rounds or minutes. Only one such bonus can affect a creature at a time. When you gain the greater component effect of geodes on an abjuration spell, your caster level increases by 1 for determining that spell's duration.",
    shortDescription:
      'Abjuration spells with geodes grant a +1 save bonus to one target and increase caster level for duration.',
    source: 'Pathfinder Unchained',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      {
        type: 'special',
        description:
          'Ability to cast abjuration spells; access to the esoteric material components system (Pathfinder Unchained)',
      },
    ],
    effects: [
      {
        type: 'bonus',
        target: 'save.all',
        value: 1,
        bonusType: BonusType.COMPETENCE,
        source: 'Esoteric Abjuration',
        condition: {
          type: 'custom',
          description:
            "to one target's Fortitude, Reflex, or Will saving throws when casting an abjuration spell with geodes as esoteric material components",
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['esoteric', 'abjuration', 'spellcasting', 'material components'],
  },

  // ── Esoteric Conjuration ──────────────────────────────────────────────────
  {
    id: 'esoteric_conjuration',
    name: 'Esoteric Conjuration',
    description:
      'When you cast a conjuration spell using prismatic sand as esoteric material components, one creature summoned, called, or moved from another plane remains partially phased for 1 round, granting it a 20% miss chance against attacks (or causing attacks without rolls to deal 20% reduced damage). When you gain the greater component effect of prismatic sand on a conjuration spell, treat your caster level as 2 higher for determining the range of the spell.',
    shortDescription:
      'Conjuration spells with prismatic sand grant phased protection to one summoned creature and increase range.',
    source: 'Pathfinder Unchained',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      {
        type: 'special',
        description:
          'Ability to cast conjuration spells; access to the esoteric material components system (Pathfinder Unchained)',
      },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['esoteric', 'conjuration', 'spellcasting', 'material components', 'miss chance'],
  },

  // ── Esoteric Divination ───────────────────────────────────────────────────
  {
    id: 'esoteric_divination',
    name: 'Esoteric Divination',
    description:
      'When you cast a divination spell using verdant salts as esoteric material components, you gain one of the following benefits: increase the likelihood of a percentage-based divination working correctly by 5% (apply a -5 penalty to the relevant d% roll), gain a +2 competence bonus on Perception checks while using a scrying-type divination, or ask one additional question with spells such as contact other plane or speak with dead. When you gain the greater component effect of verdant salts on a divination spell, the DC of the spell increases by 1.',
    shortDescription:
      'Divination spells with verdant salts improve accuracy, Perception, or questions; greater effect raises DC.',
    source: 'Pathfinder Unchained',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      {
        type: 'special',
        description:
          'Ability to cast divination spells; access to the esoteric material components system (Pathfinder Unchained)',
      },
    ],
    effects: [
      {
        type: 'bonus',
        target: 'skill.perception',
        value: 2,
        bonusType: BonusType.COMPETENCE,
        source: 'Esoteric Divination',
        condition: {
          type: 'custom',
          description:
            'on Perception checks while using a scrying-type divination cast with verdant salts as esoteric material components',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['esoteric', 'divination', 'spellcasting', 'material components', 'scrying'],
  },

  // ── Esoteric Enchantment ──────────────────────────────────────────────────
  {
    id: 'esoteric_enchantment',
    name: 'Esoteric Enchantment',
    description:
      'When you cast an enchantment spell using verdant salts as esoteric material components, one target affected by the spell takes a -2 penalty on your choice of ability checks, attack rolls, damage rolls, saving throws, or skill checks for 1 round. If the target makes a successful saving throw against the spell, it avoids this penalty. Only one such penalty can affect a creature at a time. This ability is a mind-affecting effect. When you gain the greater component effect of verdant salts on an enchantment spell, the DC of the spell increases by 1.',
    shortDescription:
      'Enchantment spells with verdant salts impose a -2 penalty to one category of rolls on one target.',
    source: 'Pathfinder Unchained',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      {
        type: 'special',
        description:
          'Ability to cast enchantment spells; access to the esoteric material components system (Pathfinder Unchained)',
      },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: [
      'esoteric',
      'enchantment',
      'spellcasting',
      'material components',
      'mind-affecting',
      'penalty',
    ],
  },

  // ── Esoteric Evocation ────────────────────────────────────────────────────
  {
    id: 'esoteric_evocation',
    name: 'Esoteric Evocation',
    description:
      "When you cast an evocation spell using entropic resin as esoteric material components, you may damage one adjacent creature. The resin deals 1 point of damage per 2 caster levels of the spell (minimum 1) and matches the damage type of your spell. When you gain the greater component effect of entropic resin on an evocation spell, your caster level increases by 1 for determining the spell's damage dice and the additional Esoteric Evocation damage (potentially raising the maximum damage dice).",
    shortDescription:
      'Evocation spells with entropic resin damage one adjacent creature and increase damage dice with greater effect.',
    source: 'Pathfinder Unchained',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      {
        type: 'special',
        description:
          'Ability to cast evocation spells; access to the esoteric material components system (Pathfinder Unchained)',
      },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['esoteric', 'evocation', 'spellcasting', 'material components', 'damage'],
  },

  // ── Esoteric Illusion ─────────────────────────────────────────────────────
  {
    id: 'esoteric_illusion',
    name: 'Esoteric Illusion',
    description:
      "When you cast an illusion spell using prismatic sand as esoteric material components, the DC to disbelieve the illusion increases by 2, as does the spell's AC if applicable. This bonus persists for the duration of the spell (excluding spells with instantaneous or permanent durations). When you gain the greater component effect of prismatic sand on an illusion spell, treat your caster level as 2 higher for determining the range of the spell.",
    shortDescription:
      'Illusion spells with prismatic sand raise disbelief DC by 2 and increase spell range with greater effect.',
    source: 'Pathfinder Unchained',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      {
        type: 'special',
        description:
          'Ability to cast illusion spells; access to the esoteric material components system (Pathfinder Unchained)',
      },
    ],
    effects: [
      {
        type: 'bonus',
        target: 'spell.save_dc',
        value: 2,
        bonusType: BonusType.UNTYPED,
        source: 'Esoteric Illusion',
        condition: {
          type: 'custom',
          description:
            'to the DC to disbelieve illusion spells cast with prismatic sand as esoteric material components',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['esoteric', 'illusion', 'spellcasting', 'material components', 'disbelief'],
  },

  // ── Esoteric Necromancy ───────────────────────────────────────────────────
  {
    id: 'esoteric_necromancy',
    name: 'Esoteric Necromancy',
    description:
      'When you cast a necromancy spell using entropic resin as esoteric material components, one target becomes shaken unless it succeeds at a saving throw. The shaken condition does not stack with existing fear effects imposed by the spell itself. This is a mind-affecting fear effect. When you gain the greater component effect of entropic resin on a necromancy spell, your caster level increases by 1 for calculating damage dice (potentially increasing the maximum damage output).',
    shortDescription:
      'Necromancy spells with entropic resin cause one target to become shaken and increase damage dice with greater effect.',
    source: 'Pathfinder Unchained',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      {
        type: 'special',
        description:
          'Ability to cast necromancy spells; access to the esoteric material components system (Pathfinder Unchained)',
      },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['esoteric', 'necromancy', 'spellcasting', 'material components', 'fear', 'shaken'],
  },

  // ── Esoteric Transmutation ────────────────────────────────────────────────
  {
    id: 'esoteric_transmutation',
    name: 'Esoteric Transmutation',
    description:
      "When you cast a transmutation spell using geodes as esoteric material components, you gain a +2 bonus on attack rolls, ability checks, and skill checks that rely on your choice of Strength, Dexterity, or Constitution. This bonus persists until the end of your next turn. When you gain the greater component effect of geodes on a transmutation spell, your caster level increases by 1 for calculating the spell's duration.",
    shortDescription:
      "Transmutation spells with geodes grant a +2 bonus to one physical ability's checks until your next turn.",
    source: 'Pathfinder Unchained',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      {
        type: 'special',
        description:
          'Ability to cast transmutation spells; access to the esoteric material components system (Pathfinder Unchained)',
      },
    ],
    effects: [
      {
        type: 'bonus',
        target: 'attack.all',
        value: 2,
        bonusType: BonusType.UNTYPED,
        source: 'Esoteric Transmutation',
        condition: {
          type: 'custom',
          description:
            'on attack rolls, ability checks, and skill checks relying on Strength, Dexterity, or Constitution (chosen when cast) after casting a transmutation spell with geodes; lasts until end of next turn',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['esoteric', 'transmutation', 'spellcasting', 'material components', 'physical ability'],
  },

  // ── Extra Stamina ─────────────────────────────────────────────────────────
  {
    id: 'extra_stamina',
    name: 'Extra Stamina',
    description:
      'Your stamina pool increases by 3 points. You can select this feat up to three times; each time you do, your stamina pool grows by an additional 3 points.',
    shortDescription: 'Increase your stamina pool by 3 points (can be taken up to 3 times).',
    source: 'Pathfinder Unchained',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'combat_stamina' },
      { type: 'bab', minimum: 5 },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['stamina', 'resource pool', 'fighter'],
  },

  // ── Push the Limits ───────────────────────────────────────────────────────
  {
    id: 'push_the_limits',
    name: 'Push the Limits',
    description:
      "You gain a secondary stamina pool containing a number of points equal to your Constitution modifier. These secondary points can only be spent when your primary stamina pool is depleted or when you are fatigued. Spending these secondary points to zero causes you to become exhausted until you regain at least one primary stamina point. Fatigue persists while your primary pool is at zero, even if you have secondary points remaining. The secondary pool resets after a full night's rest.",
    shortDescription:
      'Gain a secondary stamina pool equal to your Constitution modifier, usable only when primary pool is empty or fatigued.',
    source: 'Pathfinder Unchained',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'CON', minimum: 13 },
      { type: 'feat', featId: 'combat_stamina' },
      { type: 'bab', minimum: 1 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['stamina', 'resource pool', 'constitution', 'exhaustion'],
  },

  // ── Unstoppable Esotery ───────────────────────────────────────────────────
  {
    id: 'unstoppable_esotery',
    name: 'Unstoppable Esotery',
    description:
      'When you use esoteric material components as part of casting a spell, you gain a +2 bonus on concentration checks to cast that spell, and the spell is treated as though its caster level were 2 higher against attempts to dispel it. This increase stacks with bonuses from greater component or limited magic benefits.',
    shortDescription:
      'Spells cast with esoteric components gain +2 on concentration checks and +2 effective caster level vs. dispel.',
    source: 'Pathfinder Unchained',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      {
        type: 'special',
        description: 'Access to the esoteric material components system (Pathfinder Unchained)',
      },
    ],
    effects: [
      {
        type: 'bonus',
        target: 'spell.concentration',
        value: 2,
        bonusType: BonusType.UNTYPED,
        source: 'Unstoppable Esotery',
        condition: {
          type: 'custom',
          description:
            'on concentration checks when casting a spell with esoteric material components',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['esoteric', 'spellcasting', 'concentration', 'dispel', 'material components'],
  },
];

// CHECKPOINT: last_written=unstoppable_esotery, written=20/20, status=complete
