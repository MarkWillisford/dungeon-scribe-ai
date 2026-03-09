import { BonusType } from '@/types/base';
import type { FeatDefinition } from '@/types/feats';

export const MONSTER_HUNTER_FEATS: FeatDefinition[] = [
  // ==================== MONSTER HUNTER'S HANDBOOK (2017) ====================
  // Already in database (skipped): Monster Hunter (miscBooks1),
  //   Beastmaster Style / Beastmaster Salvation / Beastmaster Ire (styleFeats)

  {
    id: 'anatomical_savant_mhh',
    name: 'Anatomical Savant',
    description:
      "Choose one weapon with which you have the Weapon Focus feat. When you strike an opponent that has a chance of negating critical hits or sneak attacks (such as from the fortification armor special ability), reduce that chance by 25%. For creatures that are normally immune to critical hits or sneak attacks, treat them as instead having a 75% chance to negate the critical hit or sneak attack, taking only the attack's normal damage. You can take this feat multiple times. Each time you take the feat, it applies to a different weapon.",
    shortDescription:
      'Reduce fortification or critical-immunity chance by 25% (immune creatures treated as 75% instead)',
    source: "Monster Hunter's Handbook",
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'weapon_focus' },
      { type: 'bab', minimum: 12 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['critical hits', 'sneak attack', 'fortification', 'weapon focus', 'precision damage'],
  },

  {
    id: 'creature_focus_mhh',
    name: 'Creature Focus',
    description:
      'Choose a creature type from the ranger favored enemies table (except for humanoid or monstrous humanoid). You gain a +2 bonus on Perception checks, Survival checks, and weapon damage rolls against creatures of the selected type. You can attempt Knowledge skill checks untrained when attempting to identify such creatures. This feat counts as the favored enemy class feature for the purpose of meeting feat prerequisites. If another ability references your favored enemy bonus for the creature type selected, treat your favored enemy bonus as +2. If you later gain the favored enemy class feature, you can replace this feat with a different feat for which you qualify and whose prerequisites include the favored enemy class feature. You can gain this feat multiple times. Its effects do not stack. Each time you take the feat, it applies to a different creature type.',
    shortDescription:
      '+2 on Perception, Survival, and weapon damage vs a chosen creature type; counts as favored enemy',
    source: "Monster Hunter's Handbook",
    types: ['general'],
    prerequisites: [
      {
        type: 'special',
        description: 'No levels in a class that grants the favored enemy class feature',
      },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skills.perception',
        value: 2,
        source: 'Creature Focus',
        condition: {
          type: 'custom',
          params: {},
          description: 'Against chosen creature type',
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skills.survival',
        value: 2,
        source: 'Creature Focus',
        condition: {
          type: 'custom',
          params: {},
          description: 'Against chosen creature type',
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'combat.damage',
        value: 2,
        source: 'Creature Focus',
        condition: {
          type: 'custom',
          params: {},
          description: 'Weapon damage rolls against chosen creature type',
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['favored enemy', 'creature type', 'knowledge', 'perception', 'survival', 'damage'],
  },

  {
    id: 'monster_spotter_mhh',
    name: 'Monster Spotter',
    description:
      "Your knowledge of strange life forms makes you adept at piercing their disguises and detecting their hiding places. You can substitute a Knowledge skill for opposed Perception checks against creatures' Disguise and Stealth checks, and for Survival checks to track creatures. You must have 3 ranks in the Knowledge skill that corresponds to the creature's type (such as Knowledge [arcana] for dragons, Knowledge [religion] for undead, and so on) to substitute that skill.",
    shortDescription:
      'Substitute a relevant Knowledge skill for Perception (vs Disguise/Stealth) and Survival (tracking) vs that creature type',
    source: "Monster Hunter's Handbook",
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'Skill Focus (Knowledge [any])' },
      { type: 'special', description: 'Knowledge (any) 3 ranks' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: [
      'knowledge',
      'perception',
      'survival',
      'tracking',
      'stealth',
      'disguise',
      'monster lore',
    ],
  },

  {
    id: 'monstrous_disguise_mhh',
    name: 'Monstrous Disguise',
    description:
      'Your experience with monsters has given you intimate knowledge of their anatomy and behavior, allowing you to imitate them convincingly. You can use the Disguise skill to emulate creatures of the monstrous humanoid type, at a –5 penalty. Creating a monstrous humanoid disguise takes 1d3 hours.',
    shortDescription:
      'Use Disguise to impersonate monstrous humanoids at –5 penalty; takes 1d3 hours',
    source: "Monster Hunter's Handbook",
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'disguise', ranks: 5 },
      { type: 'skill', skillId: 'knowledge_nature', ranks: 5 },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['disguise', 'monstrous humanoid', 'infiltration', 'social', 'knowledge'],
  },
];
