import type { FeatDefinition } from '@/types/feats';
import { BonusType } from '@/types/base';

export const PSYCHIC_ANTHOLOGY_FEATS: FeatDefinition[] = [
  {
    id: 'blinding_stare',
    name: 'Blinding Stare',
    description:
      'Your stare robs your foe of all sight. When you trigger your painful stare, the target must succeed at a Will save (DC = 10 + half your mesmerist level + your Charisma modifier) or be blinded for 1 round.',
    shortDescription: 'Painful stare blinds target for 1 round on failed Will save.',
    source: 'Pathfinder Player Companion: Psychic Anthology',
    types: ['combat', 'general'],
    prerequisites: [
      { type: 'level', minimum: 7 },
      { type: 'class_feature', featureName: 'painful stare' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Blinding Stare',
      },
    ],
    activationMode: 'conditional',
    tags: ['mesmerist', 'stare', 'blind'],
  },
  {
    id: 'bouncing_trick',
    name: 'Bouncing Trick',
    description:
      "Whenever you implant a mesmerist trick in a target's mind, you can spend any number of additional uses of your mesmerist trick ability (up to your Charisma modifier) to transform the trick into a bouncing trick. After you trigger a bouncing trick, you can redirect the trick to one target within 30 feet as an immediate action. You can redirect the trick multiple times, up to the number of additional uses spent.",
    shortDescription:
      'Spend extra trick uses to bounce a triggered mesmerist trick to new targets within 30 feet.',
    source: 'Pathfinder Player Companion: Psychic Anthology',
    types: ['general'],
    prerequisites: [{ type: 'class_feature', featureName: 'mesmerist trick' }],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Bouncing Trick',
      },
    ],
    activationMode: 'conditional',
    tags: ['mesmerist', 'trick'],
  },
  {
    id: 'confusing_stare',
    name: 'Confusing Stare',
    description:
      'Your stare bewilders your foe. When you trigger your painful stare, the target must succeed at a Will save (DC = 10 + half your mesmerist level + your Charisma modifier) or become confused for 1 round.',
    shortDescription: 'Painful stare confuses target for 1 round on failed Will save.',
    source: 'Pathfinder Player Companion: Psychic Anthology',
    types: ['combat', 'general'],
    prerequisites: [
      { type: 'level', minimum: 7 },
      { type: 'class_feature', featureName: 'painful stare' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Confusing Stare',
      },
    ],
    activationMode: 'conditional',
    tags: ['mesmerist', 'stare', 'confusion'],
  },
  {
    id: 'contingent_trick',
    name: 'Contingent Trick',
    description:
      'You implant a flexible mesmerist trick in the target, triggering the more beneficial trick when the time is right. When implanting a contingent trick, you choose any two mesmerist tricks you know and implant both. When you trigger a contingent trick, it acts only as the mesmerist trick that corresponds to the condition you used to trigger it.',
    shortDescription:
      'Implant two mesmerist tricks as one contingent trick, triggering the appropriate one based on conditions.',
    source: 'Pathfinder Player Companion: Psychic Anthology',
    types: ['general'],
    prerequisites: [{ type: 'special', description: 'Any two trick feats' }],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Contingent Trick',
      },
    ],
    activationMode: 'conditional',
    tags: ['mesmerist', 'trick'],
  },
  {
    id: 'elemental_knowledge',
    name: 'Elemental Knowledge',
    description:
      "Your breadth of knowledge widens as you explore your connection to the elements. When you chose a different element from your primary element with the expanded element class feature at 7th level, you gain that element's associated skills as class skills. In addition, you gain a +1 bonus on all your element's associated skills.",
    shortDescription:
      "Gain expanded element's associated skills as class skills and a +1 bonus on those skills.",
    source: 'Pathfinder Player Companion: Psychic Anthology',
    types: ['general'],
    prerequisites: [{ type: 'class_feature', featureName: 'expanded element' }],
    effects: [
      {
        type: 'bonus',
        target: 'skill.elemental_associated',
        value: 1,
        bonusType: BonusType.UNTYPED,
        source: 'Elemental Knowledge',
      },
    ],
    activationMode: 'passive',
    tags: ['kineticist', 'elemental'],
  },
  {
    id: 'elemental_overload',
    name: 'Elemental Overload',
    description:
      'Whenever you have accepted at least 4 points of burn, the chance to ignore the effects of a critical hit or sneak attack increases by an additional 10%. This chance increases by an additional 5% for every 2 points of burn you accept after that. This chance cannot exceed 100%.',
    shortDescription:
      'Accepting 4+ burn increases your chance to negate critical hits and sneak attacks.',
    source: 'Pathfinder Player Companion: Psychic Anthology',
    types: ['general'],
    prerequisites: [
      { type: 'class_feature', featureName: 'elemental overflow' },
      { type: 'level', minimum: 15 },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Elemental Overload',
      },
    ],
    activationMode: 'conditional',
    tags: ['kineticist', 'burn', 'elemental'],
  },
  {
    id: 'kinetic_crafting',
    name: 'Kinetic Crafting',
    description:
      'When taking item creation feats or crafting magic items, you may treat your kineticist level as your caster level. Additionally, wild talents can substitute for spells as requirements for creating magic items, provided the wild talent shares the same element or energy damage type as the emulated spell. This benefit does not apply to spell-completion or spell-trigger items.',
    shortDescription:
      'Use kineticist level as caster level for crafting, and wild talents as spell prerequisites.',
    source: 'Pathfinder Player Companion: Psychic Anthology',
    types: ['item_creation'],
    prerequisites: [{ type: 'level', minimum: 3 }],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Kinetic Crafting',
      },
    ],
    activationMode: 'passive',
    tags: ['kineticist', 'crafting', 'item creation'],
  },
  {
    id: 'kinetic_invocation',
    name: 'Kinetic Invocation',
    description:
      'You can treat certain spells associated with your element as utility wild talents. Each such spell costs 1 burn to use (unless otherwise noted), uses your kineticist level as its caster level, and has a save DC of 10 + spell level + your Constitution modifier. Specific spells are available for each of the seven elements.',
    shortDescription:
      'Treat element-associated spells as utility wild talents, burning 1 point to cast them.',
    source: 'Pathfinder Player Companion: Psychic Anthology',
    types: ['general'],
    prerequisites: [
      { type: 'level', minimum: 1 },
      { type: 'class_feature', featureName: 'elemental focus' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Kinetic Invocation',
      },
    ],
    activationMode: 'conditional',
    tags: ['kineticist', 'elemental', 'wild talent'],
  },
  {
    id: 'metamagic_invocation',
    name: 'Metamagic Invocation',
    description:
      'Select one metamagic feat from the following list: Enlarge Spell, Extend Spell, Intuitive Spell, Logical Spell, Quicken Spell, Reach Spell, or Tenacious Spell. When casting a spell through Kinetic Invocation, you may increase its burn cost to augment the spell with that metamagic feat. The burn cost increase equals the spell level increase from the metamagic feat. You can take this feat more than once; each time, select another metamagic feat.',
    shortDescription:
      'Apply a selected metamagic feat to spells cast via Kinetic Invocation by spending additional burn.',
    source: 'Pathfinder Player Companion: Psychic Anthology',
    types: ['metamagic'],
    prerequisites: [{ type: 'class_feature', featureName: 'metakinesis' }],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Metamagic Invocation',
      },
    ],
    activationMode: 'conditional',
    tags: ['kineticist', 'metamagic', 'burn'],
  },
  {
    id: 'penetrating_stare',
    name: 'Penetrating Stare',
    description:
      "Your stare cuts through your foe's defenses. When you trigger your painful stare, the damage dealt ignores 5 points of the target's damage reduction, unless that damage reduction is untyped (for example, DR 10/—).",
    shortDescription: "Painful stare damage ignores 5 points of the target's damage reduction.",
    source: 'Pathfinder Player Companion: Psychic Anthology',
    types: ['combat', 'general'],
    prerequisites: [
      { type: 'level', minimum: 7 },
      { type: 'class_feature', featureName: 'painful stare' },
    ],
    effects: [
      {
        type: 'special',
        target: 'damage_reduction.penetration',
        value: 5,
        bonusType: BonusType.UNTYPED,
        source: 'Penetrating Stare',
      },
    ],
    activationMode: 'conditional',
    tags: ['mesmerist', 'stare', 'damage reduction'],
  },
  {
    id: 'perturbing_stare',
    name: 'Perturbing Stare',
    description:
      "Your stare dulls your foe's reactions. When you trigger your painful stare, the target must succeed at a Will save (DC = 10 + half your mesmerist level + your Charisma modifier) or lose its Dexterity modifier to AC for 1 round.",
    shortDescription:
      'Painful stare causes target to lose Dex bonus to AC for 1 round on failed Will save.',
    source: 'Pathfinder Player Companion: Psychic Anthology',
    types: ['combat', 'general'],
    prerequisites: [
      { type: 'level', minimum: 5 },
      { type: 'class_feature', featureName: 'painful stare' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Perturbing Stare',
      },
    ],
    activationMode: 'conditional',
    tags: ['mesmerist', 'stare'],
  },
  {
    id: 'reflexive_trick',
    name: 'Reflexive Trick',
    description:
      'You can implant a mesmerist trick in yourself as an immediate action when the triggering conditions for that trick occur, even without prior implantation. You can then immediately activate the trick as though it were already implanted. This ability cannot be used if you have already reached your maximum number of implanted mesmerist tricks.',
    shortDescription:
      'Implant a mesmerist trick in yourself as an immediate action when its trigger condition occurs.',
    source: 'Pathfinder Player Companion: Psychic Anthology',
    types: ['general'],
    prerequisites: [{ type: 'class_feature', featureName: 'mesmerist tricks' }],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Reflexive Trick',
      },
    ],
    activationMode: 'conditional',
    tags: ['mesmerist', 'trick'],
  },
  {
    id: 'spell_trick',
    name: 'Spell Trick',
    description:
      "You can implant a spell contingency in a target's mind as a mesmerist trick. When implanting, you specify triggering conditions and select a known mesmerist spell to duplicate upon activation, expending a mesmerist spell slot of the appropriate level. The implanted spell functions as if cast by you, using your caster level and modifiers.",
    shortDescription:
      'Implant a mesmerist spell as a contingency trick that activates under specified conditions.',
    source: 'Pathfinder Player Companion: Psychic Anthology',
    types: ['general'],
    prerequisites: [
      { type: 'class_feature', featureName: 'masterful tricks' },
      { type: 'special', description: 'Ability to cast 4th-level mesmerist spells' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Spell Trick',
      },
    ],
    activationMode: 'conditional',
    tags: ['mesmerist', 'trick', 'contingency'],
  },
  {
    id: 'split_trick',
    name: 'Split Trick',
    description:
      "Whenever you implant a mesmerist trick in a target's mind, you can split the trick between two targets simultaneously. When the trick's triggering condition occurs, you must choose one of the split trick's targets to receive the effects of the trick. The other target receives no benefit from the trick.",
    shortDescription:
      'Implant a mesmerist trick in two targets at once; only one receives the effect when triggered.',
    source: 'Pathfinder Player Companion: Psychic Anthology',
    types: ['general'],
    prerequisites: [{ type: 'class_feature', featureName: 'mesmerist trick' }],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Split Trick',
      },
    ],
    activationMode: 'conditional',
    tags: ['mesmerist', 'trick'],
  },
  {
    id: 'swap_trick',
    name: 'Swap Trick',
    description:
      'Whenever you implant a mesmerist trick in a target, you can designate that trick as a swap trick. The implanted trick functions as normal, except you can trigger the swap trick as a standard action by touching the target. When triggered in this manner, the target loses the swap trick and instead becomes implanted with any one mesmerist trick you know in its place. Implanting a mesmerist trick this way does not count against your number of daily uses.',
    shortDescription:
      'Trigger an implanted trick by touch to replace it with any other mesmerist trick you know, at no daily use cost.',
    source: 'Pathfinder Player Companion: Psychic Anthology',
    types: ['general'],
    prerequisites: [{ type: 'class_feature', featureName: 'mesmerist tricks' }],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Swap Trick',
      },
    ],
    activationMode: 'conditional',
    tags: ['mesmerist', 'trick'],
  },
];

// CHECKPOINT: last_written=swap_trick, written=15/15, status=complete
