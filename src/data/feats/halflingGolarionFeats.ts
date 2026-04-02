import type { FeatDefinition } from '@/types/feats';
import { BonusType } from '@/types/base';

export const HALFLING_GOLARION_FEATS: FeatDefinition[] = [
  {
    id: 'ammo_drop',
    name: 'Ammo Drop',
    description:
      'You can load a sling or one end of a double sling with one hand as a swift action or move action. This does not provoke an attack of opportunity.',
    shortDescription: 'Load a sling one-handed as a swift or move action without provoking.',
    source: 'Pathfinder Player Companion: Halflings of Golarion',
    types: ['combat'],
    prerequisites: [
      { type: 'skill', skillId: 'sleight_of_hand', ranks: 1 },
      { type: 'proficiency', proficiency: 'sling' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Ammo Drop',
      },
    ],
    activationMode: 'passive',
    tags: ['sling', 'halfling', 'loading'],
  },
  {
    id: 'arcane_jinxer',
    name: 'Arcane Jinxer',
    description:
      'When you attempt to jinx a creature, you can expend one of your prepared arcane spells or available arcane spell slots to give your target a penalty on its jinx save equal to the level of the expended spell or spell slot.',
    shortDescription: "Expend an arcane spell to penalize a jinx target's save by spell level.",
    source: 'Pathfinder Player Companion: Halflings of Golarion',
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'Arcane spellcaster' },
      { type: 'special', description: 'Halfling Jinx alternate racial trait' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Arcane Jinxer',
      },
    ],
    activationMode: 'conditional',
    tags: ['jinx', 'halfling', 'arcane', 'spellcasting'],
  },
  {
    id: 'area_jinx',
    name: 'Area Jinx',
    description:
      'You can create an invisible burst affecting all creatures within 10 feet with your jinx. All creatures in the burst must save against your jinx regardless of visibility. Using the jinx again ends all current jinxes. Each additional time you select this feat, the maximum burst radius increases by 10 feet.',
    shortDescription: 'Your jinx affects all creatures in a 10 ft burst (expandable).',
    source: 'Pathfinder Player Companion: Halflings of Golarion',
    types: ['general'],
    prerequisites: [
      { type: 'feat', featId: 'widen_spell' },
      { type: 'special', description: 'Halfling Jinx alternate racial trait' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Area Jinx',
      },
    ],
    activationMode: 'conditional',
    tags: ['jinx', 'halfling', 'area', 'burst'],
  },
  {
    id: 'bolster_jinx',
    name: 'Bolster Jinx',
    description:
      'When you apply a jinx to a target, the penalty on saves corresponding to Great Fortitude, Iron Will, or Lightning Reflexes (whichever you possess) increases by 2. If you possess multiple such feats, all associated save penalties increase by 2.',
    shortDescription: 'Increase jinx save penalties by 2 for saves matching your save feats.',
    source: 'Pathfinder Player Companion: Halflings of Golarion',
    types: ['general'],
    prerequisites: [
      {
        type: 'special',
        description: 'Great Fortitude, Iron Will, or Lightning Reflexes',
      },
      { type: 'special', description: 'Halfling Jinx alternate racial trait' },
    ],
    effects: [
      {
        type: 'special',
        value: 2,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Bolster Jinx',
      },
    ],
    activationMode: 'passive',
    tags: ['jinx', 'halfling', 'saving throw'],
  },
  {
    id: 'distant_jinx',
    name: 'Distant Jinx',
    description:
      'The range of your jinx ability extends by 30 feet. You can take this feat multiple times; the effects stack.',
    shortDescription: 'Extend jinx range by 30 ft (stackable).',
    source: 'Pathfinder Player Companion: Halflings of Golarion',
    types: ['general'],
    prerequisites: [{ type: 'special', description: 'Halfling Jinx alternate racial trait' }],
    effects: [
      {
        type: 'special',
        value: 30,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Distant Jinx',
      },
    ],
    activationMode: 'passive',
    tags: ['jinx', 'halfling', 'range'],
  },
  {
    id: 'fascination_jinx',
    name: 'Fascination Jinx',
    description:
      'When you apply a jinx to a creature already affected by your bardic fascination, the target takes a -10 penalty on initiative checks while the jinx persists. Creatures under your fascinate ability take a -2 penalty on saves against your jinx. A jinxed fascinated creature cannot fully recover until the jinx ends.',
    shortDescription: 'Jinxed fascinated targets take -10 initiative and -2 on jinx saves.',
    source: 'Pathfinder Player Companion: Halflings of Golarion',
    types: ['general'],
    prerequisites: [
      { type: 'class_feature', featureName: 'bardic performance' },
      { type: 'special', description: 'Halfling Jinx alternate racial trait' },
    ],
    effects: [
      {
        type: 'special',
        value: -10,
        bonusType: BonusType.UNTYPED,
        target: 'initiative',
        source: 'Fascination Jinx',
      },
    ],
    activationMode: 'conditional',
    tags: ['jinx', 'halfling', 'bardic performance', 'fascinate'],
  },
  {
    id: 'halfling_slinger',
    name: 'Halfling Slinger',
    description: 'You gain a +1 racial bonus on attack rolls made using a sling.',
    shortDescription: '+1 racial bonus on sling attack rolls.',
    source: 'Pathfinder Player Companion: Halflings of Golarion',
    types: ['combat'],
    prerequisites: [{ type: 'race', raceName: 'Halfling' }],
    effects: [
      {
        type: 'bonus',
        target: 'special.sling',
        value: 1,
        bonusType: BonusType.RACIAL,
        source: 'Halfling Slinger',
      },
    ],
    activationMode: 'passive',
    tags: ['sling', 'halfling', 'racial'],
  },
  {
    id: 'jinx_alchemy',
    name: 'Jinx Alchemy',
    description:
      'A jinxed creature cannot benefit from the effects of potions, elixirs, or any other substance that it must ingest in order to activate. This includes alchemical substances like antitoxin but excludes extracts, mutagens, and other alchemist class abilities affecting only the alchemist. The jinxed creature still experiences any negative effects or penalties from ingested compounds or poisons.',
    shortDescription: "Jinxed creatures can't benefit from potions or ingested substances.",
    source: 'Pathfinder Player Companion: Halflings of Golarion',
    types: ['general'],
    prerequisites: [
      { type: 'class_feature', featureName: 'swift alchemy' },
      { type: 'special', description: 'Halfling Jinx alternate racial trait' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Jinx Alchemy',
      },
    ],
    activationMode: 'conditional',
    tags: ['jinx', 'halfling', 'alchemy', 'potion'],
  },
  {
    id: 'jinxed_spell',
    name: 'Jinxed Spell',
    description:
      "Any creature that fails its saving throw against a jinxed spell also suffers the effects of your jinx. This applies only to spells that allow saving throws. When affecting multiple targets or areas, you select one creature for the jinx effect, unless you possess Area Jinx, which allows applying the jinx to all failed saves within a burst area. A jinxed spell uses a spell slot one level higher than the spell's actual level.",
    shortDescription: 'Failed saves against your spells also trigger your jinx (+1 spell level).',
    source: 'Pathfinder Player Companion: Halflings of Golarion',
    types: ['metamagic'],
    prerequisites: [
      { type: 'special', description: 'Any two metamagic feats' },
      { type: 'special', description: 'Halfling Jinx alternate racial trait' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Jinxed Spell',
      },
    ],
    activationMode: 'conditional',
    tags: ['jinx', 'halfling', 'metamagic', 'spellcasting'],
  },
  {
    id: 'juggle_load',
    name: 'Juggle Load',
    description:
      'You can load a sling or double sling as a free action. This does not provoke attacks of opportunity. This feat allows you to fire your sling as many times in a full-attack action as you could attack if you were using a bow.',
    shortDescription: 'Load sling as free action; full-attack with sling like a bow.',
    source: 'Pathfinder Player Companion: Halflings of Golarion',
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'ammo_drop' },
      { type: 'skill', skillId: 'sleight_of_hand', ranks: 1 },
      { type: 'proficiency', proficiency: 'sling' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Juggle Load',
      },
    ],
    activationMode: 'passive',
    tags: ['sling', 'halfling', 'loading', 'full attack'],
  },
  {
    id: 'large_target',
    name: 'Large Target',
    description:
      'Your attacks with all kinds of slings add a +1 bonus on damage rolls for every size category your opponent is larger than you. This damage bonus is treated as precision damage and does not multiply on critical hits.',
    shortDescription: '+1 sling damage per size category the target is larger than you.',
    source: 'Pathfinder Player Companion: Halflings of Golarion',
    types: ['combat'],
    prerequisites: [{ type: 'proficiency', proficiency: 'sling' }],
    effects: [
      {
        type: 'damage',
        target: 'special.sling',
        value: 1,
        bonusType: BonusType.UNTYPED,
        source: 'Large Target',
      },
    ],
    activationMode: 'passive',
    tags: ['sling', 'halfling', 'size', 'precision'],
  },
  {
    id: 'malicious_eye',
    name: 'Malicious Eye',
    description:
      'When a creature fails its save against your evil eye hex, add the effect of your jinx to the effect of the hex. The save penalties from the hex and jinx stack. Using your jinx on another creature does not end the hex or the jinx effect on the hexed target.',
    shortDescription: 'Failed evil eye saves also apply your jinx; penalties stack.',
    source: 'Pathfinder Player Companion: Halflings of Golarion',
    types: ['general'],
    prerequisites: [
      { type: 'class_feature', featureName: 'evil eye hex' },
      { type: 'special', description: 'Halfling Jinx alternate racial trait' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Malicious Eye',
      },
    ],
    activationMode: 'conditional',
    tags: ['jinx', 'halfling', 'hex', 'witch', 'evil eye'],
  },
  {
    id: 'sluggish_jinx',
    name: 'Sluggish Jinx',
    description:
      "Your jinx's penalty on saving throws also applies to the target's initiative and attack rolls.",
    shortDescription: 'Jinx penalty extends to initiative and attack rolls.',
    source: 'Pathfinder Player Companion: Halflings of Golarion',
    types: ['general'],
    prerequisites: [{ type: 'special', description: 'Halfling Jinx alternate racial trait' }],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Sluggish Jinx',
      },
    ],
    activationMode: 'passive',
    tags: ['jinx', 'halfling', 'initiative', 'attack'],
  },
  {
    id: 'versatile_jinx',
    name: 'Versatile Jinx',
    description:
      'Instead of using Charisma to determine your jinx DC, you may select either Intelligence or Wisdom as your ability score modifier for this purpose.',
    shortDescription: 'Use INT or WIS instead of CHA for jinx DC.',
    source: 'Pathfinder Player Companion: Halflings of Golarion',
    types: ['general'],
    prerequisites: [
      { type: 'feat', featId: 'iron_will' },
      { type: 'special', description: 'Halfling Jinx alternate racial trait' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Versatile Jinx',
      },
    ],
    activationMode: 'passive',
    tags: ['jinx', 'halfling', 'ability score'],
  },
  {
    id: 'whip_slinger',
    name: 'Whip-Slinger',
    description:
      'When wielding a sling, double sling, or halfling sling staff, you can make attacks of opportunity with the weapon. The sling deals 1d4 nonlethal bludgeoning damage (1d6 for Medium wielders), threatens critical hits on a natural 20, and deals double damage on critical hits. An unloaded sling incurs a -4 penalty on attack rolls.',
    shortDescription: 'Threaten and make AoOs with slings; deal nonlethal bludgeoning damage.',
    source: 'Pathfinder Player Companion: Halflings of Golarion',
    types: ['combat'],
    prerequisites: [{ type: 'proficiency', proficiency: 'sling' }],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Whip-Slinger',
      },
    ],
    activationMode: 'passive',
    tags: ['sling', 'halfling', 'attack of opportunity', 'melee'],
  },
  {
    id: 'worst_case_jinx',
    name: 'Worst Case Jinx',
    description:
      'Beneficial variable effects affecting a jinxed target produce their minimum possible results. This includes healing spells like cure spells, aid, false life, and ability damage restoration from lesser restoration.',
    shortDescription: 'Beneficial variable effects on jinxed targets produce minimum results.',
    source: 'Pathfinder Player Companion: Halflings of Golarion',
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'knowledge_arcana', ranks: 5 },
      { type: 'special', description: 'Halfling Jinx alternate racial trait' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Worst Case Jinx',
      },
    ],
    activationMode: 'conditional',
    tags: ['jinx', 'halfling', 'healing', 'minimize'],
  },
];
