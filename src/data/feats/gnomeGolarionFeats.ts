import type { FeatDefinition } from '@/types/feats';
import { BonusType } from '@/types/base';

export const GNOME_GOLARION_FEATS: FeatDefinition[] = [
  {
    id: 'arcane_school_spirit',
    name: 'Arcane School Spirit',
    description:
      "As a full-round action, extol the virtues of your magic school to one creature within 30 feet. Make a Bluff check opposed by the target's Sense Motive; success imposes a -2 penalty on saves against your next spell from that school. Universalists select a school each use but the penalty is only -1.",
    shortDescription: 'Bluff to impose -2 save penalty vs. your next spell from your school.',
    source: 'Pathfinder Player Companion: Gnomes of Golarion',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'bluff', ranks: 1 },
      { type: 'class_feature', featureName: 'arcane school' },
      { type: 'race', raceName: 'Gnome' },
    ],
    effects: [
      {
        type: 'special',
        value: -2,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Arcane School Spirit',
      },
    ],
    activationMode: 'conditional',
    tags: ['gnome', 'bluff', 'wizard', 'arcane school', 'spell DC'],
  },
  {
    id: 'babble_peddler',
    name: 'Babble-Peddler',
    description:
      'You can deceive creatures into trading valuable possessions for worthless items. Make a Bluff check to convince a target to exchange their item for yours, with modifiers for obvious value disparities. On success, an opposed Appraise check determines how long the target believes the false assessment (1 round base, +1 round per 5 you exceed). Cannot be used in combat, vs. hostile creatures, or vs. INT 3 or lower.',
    shortDescription: 'Bluff to trick targets into trading valuables for worthless items.',
    source: 'Pathfinder Player Companion: Gnomes of Golarion',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'appraise', ranks: 5 },
      { type: 'skill', skillId: 'bluff', ranks: 5 },
      { type: 'race', raceName: 'Gnome' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Babble-Peddler',
      },
    ],
    activationMode: 'conditional',
    tags: ['gnome', 'bluff', 'appraise', 'trade', 'social'],
  },
  {
    id: 'bewildering_koan_gg',
    name: 'Bewildering Koan',
    description:
      'As a swift action, spend 1 ki point and make a Bluff check by posing an impossible question to a creature. If the creature fails, you either cause it to lose its next action or gain a +2 damage bonus against it for 1 round.',
    shortDescription: 'Spend ki + Bluff to make a foe lose its action or take +2 damage.',
    source: 'Pathfinder Player Companion: Gnomes of Golarion',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'bluff', ranks: 1 },
      { type: 'class_feature', featureName: 'ki pool' },
      { type: 'race', raceName: 'Gnome' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Bewildering Koan',
      },
    ],
    activationMode: 'conditional',
    tags: ['gnome', 'ki', 'monk', 'bluff', 'debuff'],
  },
  {
    id: 'blood_ties_gnome',
    name: 'Blood Ties',
    description:
      'When attempting a Diplomacy check to influence a creature with a plausible connection to your sorcerous bloodline, you may instead make a Bluff check.',
    shortDescription: 'Use Bluff instead of Diplomacy vs. creatures related to your bloodline.',
    source: 'Pathfinder Player Companion: Gnomes of Golarion',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'bluff', ranks: 1 },
      { type: 'class_feature', featureName: 'bloodline' },
      { type: 'race', raceName: 'Gnome' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Blood Ties',
      },
    ],
    activationMode: 'conditional',
    tags: ['gnome', 'sorcerer', 'bloodline', 'bluff', 'diplomacy'],
  },
  {
    id: 'caustic_slur',
    name: 'Caustic Slur',
    description:
      'As a standard action, make a Bluff check against one favored enemy type. Creatures of that type within 60 feet must succeed at a Will save or become angered — gaining Power Attack benefits (attack penalty for damage bonus). Those already having Power Attack increase both penalty and bonus. Effects end when combat concludes. Requires targets to understand you.',
    shortDescription: 'Taunt favored enemies into using Power Attack involuntarily.',
    source: 'Pathfinder Player Companion: Gnomes of Golarion',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'bluff', ranks: 1 },
      { type: 'class_feature', featureName: 'favored enemy' },
      { type: 'race', raceName: 'Gnome' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Caustic Slur',
      },
    ],
    activationMode: 'conditional',
    tags: ['gnome', 'ranger', 'favored enemy', 'bluff', 'taunt'],
  },
  {
    id: 'effortless_trickery_gg',
    name: 'Effortless Trickery',
    description:
      'You can maintain concentration on one spell of the illusion school as a swift action. This does not affect spells from other schools or illusion spells whose durations do not rely on concentration.',
    shortDescription: 'Maintain concentration on one illusion spell as a swift action.',
    source: 'Pathfinder Player Companion: Gnomes of Golarion',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [{ type: 'race', raceName: 'Gnome' }],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Effortless Trickery',
      },
    ],
    activationMode: 'passive',
    tags: ['gnome', 'illusion', 'concentration', 'swift action'],
  },
  {
    id: 'extra_gnome_magic',
    name: 'Extra Gnome Magic',
    description:
      'You gain an additional three uses per day of your gnome spell-like abilities (dancing lights, ghost sound, prestidigitation). You may allocate these uses flexibly or apply them to substitute 0-level spells.',
    shortDescription: '+3 daily uses of gnome racial spell-like abilities.',
    source: 'Pathfinder Player Companion: Gnomes of Golarion',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'CHA', minimum: 13 },
      { type: 'race', raceName: 'Gnome' },
    ],
    effects: [
      {
        type: 'special',
        value: 3,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Extra Gnome Magic',
      },
    ],
    activationMode: 'passive',
    tags: ['gnome', 'spell-like ability', 'racial'],
  },
  {
    id: 'helpless_prisoner',
    name: 'Helpless Prisoner',
    description:
      'When restrained or imprisoned, make a Bluff check vs. a creature within 30 feet to emphasize your harmlessness. Success grants a +5 bonus on your next Escape Artist check. Creatures aware of your danger gain +4 to resist; cruel creatures that succeed impose a -5 penalty on your Escape Artist checks.',
    shortDescription: 'Bluff captors for +5 Escape Artist; risky if they see through it.',
    source: 'Pathfinder Player Companion: Gnomes of Golarion',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'bluff', ranks: 5 },
      { type: 'skill', skillId: 'escape_artist', ranks: 1 },
      { type: 'race', raceName: 'Gnome' },
    ],
    effects: [
      {
        type: 'special',
        value: 5,
        bonusType: BonusType.UNTYPED,
        target: 'skill.escape_artist',
        source: 'Helpless Prisoner',
      },
    ],
    activationMode: 'conditional',
    tags: ['gnome', 'bluff', 'escape artist', 'prisoner'],
  },
  {
    id: 'invoke_primal_instinct',
    name: 'Invoke Primal Instinct',
    description:
      'As a standard action, pantomime predator or prey behavior, expend one wild shape use, and make a Bluff check. Creatures within 30 feet that fail a Will save become either frightened for 1 round/druid level (fear) or regard you as harmless for 1 minute (contempt), ignoring you unless attacked.',
    shortDescription: 'Expend wild shape to frighten or become "harmless" to nearby creatures.',
    source: 'Pathfinder Player Companion: Gnomes of Golarion',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'bluff', ranks: 1 },
      { type: 'class_feature', featureName: 'wild shape' },
      { type: 'race', raceName: 'Gnome' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Invoke Primal Instinct',
      },
    ],
    activationMode: 'conditional',
    tags: ['gnome', 'druid', 'wild shape', 'bluff', 'fear'],
  },
  {
    id: 'master_of_wonders',
    name: 'Master of Wonders',
    description:
      'When you activate a rod of wonder, roll d% to determine the effect. If you wish, you can roll d% again and use the second result. You can only use this ability once per round.',
    shortDescription: 'Reroll rod of wonder results once per round.',
    source: 'Pathfinder Player Companion: Gnomes of Golarion',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'feat', featId: 'iron_will' },
      { type: 'special', description: 'Wonderseeker faction' },
      { type: 'race', raceName: 'Gnome' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Master of Wonders',
      },
    ],
    activationMode: 'conditional',
    tags: ['gnome', 'rod of wonder', 'reroll', 'wonderseeker'],
  },
  {
    id: 'tantrum',
    name: 'Tantrum',
    description:
      'You may use the Bluff skill to feint while raging. The effect of the feint lasts only until the first time you hit the target.',
    shortDescription: 'Feint with Bluff while raging (effect ends on first hit).',
    source: 'Pathfinder Player Companion: Gnomes of Golarion',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'bluff', ranks: 1 },
      { type: 'class_feature', featureName: 'rage' },
      { type: 'race', raceName: 'Gnome' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Tantrum',
      },
    ],
    activationMode: 'conditional',
    tags: ['gnome', 'rage', 'barbarian', 'bluff', 'feint'],
  },
  {
    id: 'threatening_illusion_gg',
    name: 'Threatening Illusion',
    description:
      "When casting an illusion (figment) spell, designate one 5-foot square within the illusion as threatening, causing a target to perceive it as an actual threat and creating flanking opportunities. Targets may Will save to disbelieve. You can adjust the threatening square as a swift action while maintaining the illusion. Uses a spell slot one level higher than the spell's actual level.",
    shortDescription:
      'Figment illusions create a flanking-capable threatening square (+1 spell level).',
    source: 'Pathfinder Player Companion: Gnomes of Golarion',
    verificationStatus: 'needs_review' as const,
    types: ['metamagic'],
    prerequisites: [
      { type: 'feat', featId: 'spell_focus_illusion' },
      { type: 'race', raceName: 'Gnome' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Threatening Illusion',
      },
    ],
    activationMode: 'conditional',
    tags: ['gnome', 'illusion', 'figment', 'flanking', 'metamagic'],
  },
  {
    id: 'witty_feint',
    name: 'Witty Feint',
    description:
      'When you successfully feint, instead of denying the opponent its Dexterity bonus, you may gain a dodge bonus to your AC against its attacks equal to your weapon training bonus. This persists until combat ends, you switch opponents, or you change weapons.',
    shortDescription:
      'Successful feint grants dodge AC equal to weapon training bonus vs. that foe.',
    source: 'Pathfinder Player Companion: Gnomes of Golarion',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'skill', skillId: 'bluff', ranks: 1 },
      { type: 'class_feature', featureName: 'weapon training' },
      { type: 'race', raceName: 'Gnome' },
    ],
    effects: [
      { type: 'bonus', target: 'ac', value: 0, bonusType: BonusType.DODGE, source: 'Witty Feint' },
    ],
    activationMode: 'conditional',
    tags: ['gnome', 'fighter', 'weapon training', 'feint', 'dodge'],
  },
];
