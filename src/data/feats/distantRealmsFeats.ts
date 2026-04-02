import type { FeatDefinition } from '@/types/feats';
import { BonusType } from '@/types/base';

export const DISTANT_REALMS_FEATS: FeatDefinition[] = [
  {
    id: 'choral_support',
    name: 'Choral Support',
    description:
      "As a standard action, you can attempt a DC 10 Perform (sing) check to aid an ally who also possesses this feat. Success allows your ally's spells cast before your next turn that normally deal acid, cold, electricity, or fire damage to instead deal sonic damage. Spells already dealing sonic damage are converted to half sonic and half divine damage.",
    shortDescription: 'Aid an ally to convert their elemental spell damage to sonic.',
    source: 'Pathfinder Campaign Setting: Distant Realms',
    types: ['teamwork'],
    prerequisites: [{ type: 'skill', skillId: 'perform_sing', ranks: 3 }],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Choral Support',
      },
    ],
    activationMode: 'conditional',
    tags: ['teamwork', 'sonic', 'perform', 'singing', 'spellcasting'],
  },
  {
    id: 'controlled_patterns',
    name: 'Controlled Patterns',
    description:
      "When casting pattern subschool spells, you can choose a specific creature type or subtype to shield from the spell's full effects. Affected creatures of that type reduce the spell's save DC by 4. At 11th caster level and every 4 levels after, you can protect an additional creature type (max four at 19th). Multiple subtypes on a single creature stack the DC reduction.",
    shortDescription: 'Reduce pattern spell DCs by 4 for chosen creature types.',
    source: 'Pathfinder Campaign Setting: Distant Realms',
    types: ['general'],
    prerequisites: [
      { type: 'feat', featId: 'pattern_message' },
      { type: 'feat', featId: 'spell_focus_illusion' },
      { type: 'caster_level', minimum: 7 },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Controlled Patterns',
      },
    ],
    activationMode: 'conditional',
    tags: ['pattern', 'illusion', 'friendly fire', 'creature type'],
  },
  {
    id: 'heavenly_bane',
    name: 'Heavenly Bane',
    description:
      'Whenever you have a weapon imbued with the bane special quality, that weapon is considered good and lawful for the purpose of overcoming damage reduction.',
    shortDescription: 'Bane weapons count as good and lawful for DR purposes.',
    source: 'Pathfinder Campaign Setting: Distant Realms',
    types: ['general'],
    prerequisites: [{ type: 'class_feature', featureName: 'bane' }],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Heavenly Bane',
      },
    ],
    activationMode: 'passive',
    tags: ['bane', 'inquisitor', 'good', 'lawful', 'damage reduction'],
  },
  {
    id: 'joined_wings',
    name: 'Joined Wings',
    description:
      'You can use your lay on hands or the healing granted by fervor on allies with this feat as a swift action.',
    shortDescription: 'Lay on hands or fervor on allies with this feat as a swift action.',
    source: 'Pathfinder Campaign Setting: Distant Realms',
    types: ['teamwork'],
    prerequisites: [{ type: 'special', description: 'Fervor or lay on hands class feature' }],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Joined Wings',
      },
    ],
    activationMode: 'conditional',
    tags: ['teamwork', 'lay on hands', 'fervor', 'healing', 'paladin', 'warpriest'],
  },
  {
    id: 'lantern_style',
    name: 'Lantern Style',
    description:
      'Your thrown weapons glow with holy light, illuminating a 20-foot-radius area where they fall for 1 round. A target damaged by one of these weapons becomes dazzled for 1 round.',
    shortDescription: 'Thrown weapons illuminate and dazzle targets.',
    source: 'Pathfinder Campaign Setting: Distant Realms',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'point_blank_shot' },
      { type: 'special', description: 'Good or lawful alignment' },
      { type: 'special', description: 'Caster level 1st or monk level 1st' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Lantern Style',
      },
    ],
    activationMode: 'conditional',
    tags: ['style', 'thrown', 'light', 'dazzle', 'holy'],
  },
  {
    id: 'lantern_light',
    name: 'Lantern Light',
    description:
      "When you make a single ranged attack with a thrown weapon, that weapon temporarily transforms into pure holy light, overcoming the target's damage reduction, if any.",
    shortDescription: 'Single thrown attacks overcome all DR as holy light.',
    source: 'Pathfinder Campaign Setting: Distant Realms',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'lantern_style' },
      { type: 'feat', featId: 'point_blank_shot' },
      { type: 'feat', featId: 'precise_shot' },
      {
        type: 'special',
        description: 'Good or lawful alignment, caster level 7th or monk level 7th',
      },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Lantern Light',
      },
    ],
    activationMode: 'conditional',
    tags: ['style', 'thrown', 'holy light', 'damage reduction'],
  },
  {
    id: 'lantern_glare',
    name: 'Lantern Glare',
    description:
      'When you hit a creature with a thrown weapon, both the target and creatures within 20 feet must make a Will save (DC = 10 + half character level + Charisma modifier) or become shaken. A creature that succeeds at its save or that damages you after becoming shaken becomes immune for 24 hours.',
    shortDescription: 'Thrown weapon hits cause shaken in 20 ft area (Will negates).',
    source: 'Pathfinder Campaign Setting: Distant Realms',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'lantern_light' },
      { type: 'feat', featId: 'lantern_style' },
      { type: 'feat', featId: 'point_blank_shot' },
      { type: 'feat', featId: 'precise_shot' },
      {
        type: 'special',
        description: 'Good or lawful alignment, caster level 11th or monk level 11th',
      },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Lantern Glare',
      },
    ],
    activationMode: 'conditional',
    tags: ['style', 'thrown', 'fear', 'shaken', 'holy light'],
  },
  {
    id: 'magic_trick_floating_disk',
    name: 'Magic Trick (Floating Disk)',
    description:
      'You gain access to specialized tricks for the floating disk spell: Disk Rider (Fly 3 ranks), Defensive Disk (Fly 3 ranks + Shield Proficiency), Drifting Defense (Fly 6 ranks + Mobility + Shield Proficiency), Expanded Disk (Fly 3 ranks + Heighten Spell), Force Check (Fly 3 ranks + Catch Off-Guard or Improved Bull Rush), and Spurn Gravity (Fly 6 ranks). Each modifies how floating disk functions.',
    shortDescription: 'Unlock six specialized tricks for the floating disk spell.',
    source: 'Pathfinder Campaign Setting: Distant Realms',
    types: ['general'],
    prerequisites: [{ type: 'special', description: 'Ability to cast floating disk' }],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Magic Trick (Floating Disk)',
      },
    ],
    activationMode: 'conditional',
    tags: ['magic trick', 'floating disk', 'versatile'],
  },
  {
    id: 'passing_grace',
    name: 'Passing Grace',
    description:
      'Whenever a healing spell or effect would restore you to above your maximum hit points, you can redirect excess hit points to an adjacent ally who has this feat. This only applies to effects requiring an action to activate; passive healing like fast healing or regeneration does not qualify.',
    shortDescription: 'Redirect excess healing to an adjacent ally with this feat.',
    source: 'Pathfinder Campaign Setting: Distant Realms',
    types: ['teamwork'],
    prerequisites: [],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Passing Grace',
      },
    ],
    activationMode: 'conditional',
    tags: ['teamwork', 'healing', 'overflow', 'support'],
  },
  {
    id: 'pattern_message',
    name: 'Pattern Message',
    description:
      "When you cast a spell from the pattern subschool, you can embed a short message within the effect. You designate any number of the spell's targets to receive this encoded message, regardless of language, but only a creature failing its save against your pattern spell can receive your message. The message is delivered visually. During each round you concentrate to maintain a pattern spell, you can change the message and targets.",
    shortDescription: 'Embed visual messages in pattern spells for targets who fail their saves.',
    source: 'Pathfinder Campaign Setting: Distant Realms',
    types: ['general'],
    prerequisites: [{ type: 'caster_level', minimum: 3 }],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Pattern Message',
      },
    ],
    activationMode: 'conditional',
    tags: ['pattern', 'illusion', 'communication', 'message'],
  },
  {
    id: 'reviving_channel',
    name: 'Reviving Channel',
    description:
      'When you use channel energy, you can focus on one creature within range whose hit points are below 0 that would be healed by your channel energy. No other creatures are healed, but the target creature is restored to 0 hit points before the normal healing takes effect.',
    shortDescription: 'Focus channel energy to restore one dying creature to 0 HP first.',
    source: 'Pathfinder Campaign Setting: Distant Realms',
    types: ['general'],
    prerequisites: [{ type: 'special', description: 'Channel energy 3d6' }],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Reviving Channel',
      },
    ],
    activationMode: 'conditional',
    tags: ['channel energy', 'healing', 'dying', 'cleric'],
  },
  {
    id: 'shifting_patterns',
    name: 'Shifting Patterns',
    description:
      'When you are concentrating to maintain a spell from the pattern subschool, you can move any area effects associated with that spell by up to 10 feet as a move action. Creatures in the new area must attempt saves as normal. For pattern spells that already permit movement (like rainbow pattern), the distance increases by 50%.',
    shortDescription: 'Move pattern spell areas 10 ft as a move action while concentrating.',
    source: 'Pathfinder Campaign Setting: Distant Realms',
    types: ['general'],
    prerequisites: [
      { type: 'feat', featId: 'spell_focus_illusion' },
      { type: 'caster_level', minimum: 5 },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Shifting Patterns',
      },
    ],
    activationMode: 'conditional',
    tags: ['pattern', 'illusion', 'move', 'concentration'],
  },
];
