import { BonusType } from '@/types/base';
import type { FeatDefinition } from '@/types/feats';

export const FAMILIAR_ALCHEMY_FEATS: FeatDefinition[] = [
  // ==================== FAMILIAR FOLIO FEATS ====================

  {
    id: 'familiar_bond',
    name: 'Familiar Bond',
    description:
      'You have forged a close bond with a familiar, even though you do not yet have the ability to acquire one normally. Prerequisite classes that grant a familiar at 1st level treat you as having the arcane bond class feature for the purpose of familiar-related feats.',
    shortDescription: 'Gain a familiar as if you had the arcane bond class feature',
    source: 'Familiar Folio',
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'INT', minimum: 13 },
      { type: 'special', description: 'Must be able to cast 1st-level arcane spells' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['familiar', 'arcane bond'],
  },

  {
    id: 'resilient_familiar',
    name: 'Resilient Familiar',
    description:
      'Your familiar gains a +2 bonus to natural armor and a +2 bonus on all saving throws.',
    shortDescription: 'Familiar gains +2 natural armor and +2 to all saves',
    source: 'Familiar Folio',
    types: ['general'],
    prerequisites: [{ type: 'class_feature', featureName: 'familiar' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.NATURAL,
        target: 'special.familiar_natural_armor',
        value: 2,
        source: 'Resilient Familiar',
      },
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'special.familiar_saves',
        value: 2,
        source: 'Resilient Familiar',
      },
    ],
    activationMode: 'passive',
    tags: ['familiar', 'saves', 'defense'],
  },

  {
    id: 'vexing_familiar',
    name: 'Vexing Familiar',
    description:
      'Your familiar is adept at distracting enemies. When your familiar is adjacent to an enemy, that enemy is considered flanked for the purposes of your attacks even if you are not on the opposite side of the enemy from your familiar.',
    shortDescription:
      'Familiar flanks enemies adjacent to it without requiring opposite positioning',
    source: 'Familiar Folio',
    types: ['general'],
    prerequisites: [
      { type: 'class_feature', featureName: 'familiar' },
      { type: 'bab', minimum: 3 },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['familiar', 'flanking', 'combat'],
  },

  {
    id: 'vigilant_familiar',
    name: 'Vigilant Familiar',
    description:
      'Your familiar gains Alertness as a bonus feat when adjacent to you, and extends the Alertness bonus to you even when not adjacent. When your familiar is within 1 mile of you, you gain a +2 bonus on Perception and Sense Motive checks.',
    shortDescription: 'Gain Alertness bonus from familiar at any distance up to 1 mile',
    source: 'Familiar Folio',
    types: ['general'],
    prerequisites: [{ type: 'class_feature', featureName: 'familiar' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skill.perception',
        value: 2,
        source: 'Vigilant Familiar',
        condition: {
          type: 'custom',
          description: 'Familiar is within 1 mile',
          params: {},
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skill.sense_motive',
        value: 2,
        source: 'Vigilant Familiar',
        condition: {
          type: 'custom',
          description: 'Familiar is within 1 mile',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['familiar', 'perception', 'sense motive', 'alertness'],
  },

  {
    id: 'familiar_clarity',
    name: "Familiar's Clarity",
    description:
      "Your familiar has uncanny senses that help it perceive the world around you both clearly. While your familiar is within arm's reach, it gains a +4 bonus on Perception checks and can use its master's skill ranks in place of its own when making Perception checks.",
    shortDescription: "Familiar gains +4 Perception and can use master's Perception ranks",
    source: 'Familiar Folio',
    types: ['general'],
    prerequisites: [
      { type: 'class_feature', featureName: 'familiar' },
      { type: 'skill', skillId: 'perception', ranks: 5 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'special.familiar_perception',
        value: 4,
        source: "Familiar's Clarity",
      },
    ],
    activationMode: 'passive',
    tags: ['familiar', 'perception', 'senses'],
  },

  {
    id: 'improved_familiar_concentration',
    name: 'Improved Familiar Concentration',
    description:
      'Your familiar can maintain concentration on spells even while being threatened. Your familiar can use your concentration bonus when concentrating on a spell in place of its own.',
    shortDescription: "Familiar uses master's concentration bonus to maintain spells",
    source: 'Familiar Folio',
    types: ['general'],
    prerequisites: [
      { type: 'class_feature', featureName: 'familiar' },
      { type: 'special', description: 'Familiar must be able to cast or deliver touch spells' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['familiar', 'concentration', 'spellcasting'],
  },

  {
    id: 'arcane_talent_ff',
    name: 'Arcane Talent',
    description:
      'Choose a 0-level spell from the sorcerer/wizard spell list. You can cast that spell three times per day as a spell-like ability, using your Charisma modifier as your key spellcasting ability. The caster level for the spell-like ability equals your character level.',
    shortDescription: 'Cast a chosen 0-level arcane spell 3/day as a spell-like ability',
    source: 'Familiar Folio',
    types: ['general'],
    prerequisites: [{ type: 'ability_score', ability: 'CHA', minimum: 10 }],
    effects: [],
    activationMode: 'passive',
    tags: ['spell-like ability', 'cantrip', 'arcane'],
  },

  {
    id: 'familiar_focus_ff',
    name: 'Familiar Focus',
    description:
      "Your bond with your familiar is so close that it becomes more capable as you grow in power. Your familiar's Intelligence increases by 2, and your familiar gains a +2 bonus on saving throws against magical effects.",
    shortDescription: "Familiar's Intelligence +2 and +2 on saves vs. magical effects",
    source: 'Familiar Folio',
    types: ['general'],
    prerequisites: [
      { type: 'class_feature', featureName: 'familiar' },
      { type: 'special', description: 'Caster level 5th' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'special.familiar_intelligence',
        value: 2,
        source: 'Familiar Focus',
      },
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'special.familiar_saves_vs_magic',
        value: 2,
        source: 'Familiar Focus',
      },
    ],
    activationMode: 'passive',
    tags: ['familiar', 'intelligence', 'saves'],
  },

  {
    id: 'maulers_endurance',
    name: "Mauler's Endurance",
    description:
      'Your familiar is tougher than normal. Your familiar gains bonus hit points equal to your caster level, and its Constitution score increases by 2.',
    shortDescription: 'Familiar gains bonus HP equal to caster level and +2 Constitution',
    source: 'Familiar Folio',
    types: ['general'],
    prerequisites: [{ type: 'class_feature', featureName: 'familiar' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'special.familiar_constitution',
        value: 2,
        source: "Mauler's Endurance",
      },
    ],
    activationMode: 'passive',
    tags: ['familiar', 'hit points', 'constitution', 'mauler'],
  },

  {
    id: 'extra_evolution_ff',
    name: 'Extra Evolution',
    description:
      'Your familiar gains one additional evolution point worth of evolutions. You may take this feat multiple times; each time it grants an additional evolution point to your familiar.',
    shortDescription: 'Familiar gains 1 additional evolution point',
    source: 'Familiar Folio',
    types: ['general'],
    prerequisites: [
      { type: 'class_feature', featureName: 'familiar' },
      { type: 'special', description: 'Familiar must be of the mauler or protector archetype' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['familiar', 'evolution', 'mauler'],
  },

  {
    id: 'evolved_familiar_ff',
    name: 'Evolved Familiar',
    description:
      'Your familiar gains one basic evolution from the eidolon evolution list. This feat can be taken multiple times; each time it grants a different basic evolution. The familiar must meet all prerequisites for the evolution chosen.',
    shortDescription: 'Familiar gains a basic eidolon evolution',
    source: 'Familiar Folio',
    types: ['general'],
    prerequisites: [
      { type: 'class_feature', featureName: 'familiar' },
      { type: 'special', description: 'Caster level 3rd' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['familiar', 'evolution', 'summoner'],
  },

  // ==================== ALCHEMY MANUAL FEATS ====================

  {
    id: 'brew_flare',
    name: 'Brew Flare',
    description:
      'You can create alchemical flares as if you had the Craft (alchemy) skill. A flare is a simple alchemical item that produces a bright flash of light when detonated. You can create one flare per day as part of your morning alchemy preparations at no cost. A flare can be used as a ranged attack (range increment 10 feet) that deals no damage but dazzles the target for 1 round on a hit (Fortitude DC 13 negates). Alternatively, a flare can be used to signal over long distances.',
    shortDescription: 'Create alchemical flares daily; flares can dazzle targets on hit',
    source: 'Alchemy Manual',
    types: ['item_creation'],
    prerequisites: [{ type: 'class_feature', featureName: 'alchemy' }],
    effects: [],
    activationMode: 'passive',
    tags: ['alchemy', 'item creation', 'alchemist', 'flare', 'dazzle'],
  },

  {
    id: 'celestial_poison',
    name: 'Celestial Poison',
    description:
      'You can infuse your poisons with holy power, making them effective against creatures normally immune to poison. When you craft a poison, you may expend a prepared divine spell slot of 1st level or higher as part of the crafting process. The resulting poison is treated as a good-aligned magical effect and can affect creatures immune to mundane poison, including celestials (though they receive a +4 bonus on their saving throw).',
    shortDescription: 'Infuse poison with divine power to affect poison-immune creatures',
    source: 'Alchemy Manual',
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'Ability to cast divine spells' },
      { type: 'skill', skillId: 'craft_alchemy', ranks: 5 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['alchemy', 'poison', 'divine', 'good'],
  },

  {
    id: 'expeditious_alchemy',
    name: 'Expeditious Alchemy',
    description:
      'You can craft alchemical items in half the normal time. When using the Craft (alchemy) skill to create alchemical items, you may make two progress checks per day instead of one. This feat does not reduce the time needed to use the craft skill in combat situations.',
    shortDescription: 'Craft alchemical items in half the normal time',
    source: 'Alchemy Manual',
    types: ['general'],
    prerequisites: [{ type: 'skill', skillId: 'craft_alchemy', ranks: 5 }],
    effects: [],
    activationMode: 'passive',
    tags: ['alchemy', 'crafting', 'speed'],
  },

  {
    id: 'extended_potion',
    name: 'Extended Potion',
    description:
      "When you brew a potion, you can extend its duration. When using Brew Potion, you may expend an additional spell slot of equal or higher level to double the duration of the brewed potion's effect. This cannot extend a potion beyond 24 hours.",
    shortDescription: 'Expend an extra spell slot when brewing to double potion duration',
    source: 'Alchemy Manual',
    types: ['item_creation'],
    prerequisites: [{ type: 'feat', featId: 'brew_potion' }],
    effects: [],
    activationMode: 'conditional',
    tags: ['alchemy', 'potion', 'crafting', 'duration'],
  },

  {
    id: 'master_alchemist',
    name: 'Master Alchemist',
    description:
      'You have mastered the art of alchemy, allowing you to create alchemical items quickly and with greater potency. You can create alchemical items as a full-round action. Any alchemical items you create have their save DCs increased by 2. In addition, you can create mundane alchemical items up to 250 gp in value without needing a lab.',
    shortDescription: 'Craft alchemical items as a full-round action; +2 to save DCs',
    source: 'Alchemy Manual',
    types: ['item_creation'],
    prerequisites: [
      { type: 'skill', skillId: 'craft_alchemy', ranks: 10 },
      { type: 'special', description: 'Ability to create alchemical items' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'special.alchemical_item_save_dc',
        value: 2,
        source: 'Master Alchemist',
      },
    ],
    activationMode: 'passive',
    tags: ['alchemy', 'crafting', 'save dc', 'alchemist'],
  },

  {
    id: 'preserve_organs',
    name: 'Preserve Organs',
    description:
      "You have learned to harden your body's vital organs against damage. You gain a 25% chance to negate any extra damage dealt by a critical hit or sneak attack, treating the damage as normal damage instead. This does not stack with similar protective abilities (such as the fortification magic armor property).",
    shortDescription: '25% chance to negate extra damage from critical hits and sneak attacks',
    source: 'Alchemy Manual',
    types: ['general'],
    prerequisites: [
      { type: 'class_feature', featureName: 'alchemy' },
      { type: 'level', minimum: 7 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['alchemy', 'alchemist', 'critical hit', 'sneak attack', 'defense'],
  },

  {
    id: 'poisonous_impact',
    name: 'Poisonous Impact',
    description:
      'When you confirm a critical hit with a melee attack, you can apply a dose of contact or injury poison you are holding to the weapon as a free action, delivering it automatically with the attack. This does not consume additional uses of the poison beyond the one normally applied.',
    shortDescription: 'Apply a held poison on a confirmed critical hit as a free action',
    source: 'Alchemy Manual',
    types: ['combat'],
    prerequisites: [
      { type: 'bab', minimum: 5 },
      { type: 'skill', skillId: 'craft_alchemy', ranks: 5 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['alchemy', 'poison', 'critical hit', 'combat'],
  },

  {
    id: 'infusing_familiar',
    name: 'Infusing Familiar',
    description:
      'Your familiar can carry and deliver alchemical extracts and bombs for you. Your familiar can store a number of extracts or bombs equal to your Intelligence modifier. When your familiar delivers a touch extract, it uses your Intelligence modifier in place of its own for the purpose of any effects tied to an ability score. Additionally, your familiar is immune to the damage from your bombs.',
    shortDescription: 'Familiar carries and delivers your extracts and bombs',
    source: 'Alchemy Manual',
    types: ['general'],
    prerequisites: [
      { type: 'class_feature', featureName: 'familiar' },
      { type: 'class_feature', featureName: 'alchemy' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['familiar', 'alchemy', 'alchemist', 'extracts', 'bombs'],
  },

  {
    id: 'concentrate_poison',
    name: 'Concentrate Poison',
    description:
      'You can combine two doses of the same poison to increase its potency. As a full-round action, you can combine two doses of the same poison. If you do, the resulting single dose deals +1 damage per damage die and the saving throw DC increases by 2. Combining doses in this way is irreversible; the combined dose is used as a single dose.',
    shortDescription: 'Combine two poison doses for +1 damage per die and +2 save DC',
    source: 'Alchemy Manual',
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'craft_alchemy', ranks: 6 },
      { type: 'class_feature', featureName: 'poison use' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['alchemy', 'poison', 'crafting'],
  },

  {
    id: 'alchemical_affinity',
    name: 'Alchemical Affinity',
    description:
      'Choose one alchemical substance type (acid, fire, cold, or electricity). When you craft alchemical items of that type, they deal an additional 1 point of damage per damage die. In addition, your saving throw DCs for alchemical items of that type increase by 1.',
    shortDescription: 'Choose an energy type; alchemical items of that type deal +1/die and +1 DC',
    source: 'Alchemy Manual',
    types: ['general'],
    prerequisites: [{ type: 'skill', skillId: 'craft_alchemy', ranks: 3 }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'special.alchemical_item_save_dc',
        value: 1,
        source: 'Alchemical Affinity',
      },
    ],
    activationMode: 'passive',
    tags: ['alchemy', 'elemental', 'damage', 'save dc'],
  },

  {
    id: 'alchemical_power_component',
    name: 'Alchemical Power Component',
    description:
      "You can substitute alchemical items for costly material components in your spells. When you cast a spell with a material component costing 1 gp or less, you may substitute an alchemical item of the appropriate type (GM discretion) as part of the casting. When you do, the spell's saving throw DC increases by 1.",
    shortDescription: 'Substitute alchemical items for cheap material components; +1 spell DC',
    source: 'Alchemy Manual',
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'Ability to cast spells with material components' },
      { type: 'skill', skillId: 'craft_alchemy', ranks: 3 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['alchemy', 'spellcasting', 'material component', 'save dc'],
  },

  {
    id: 'greater_alchemical_simulacrum',
    name: 'Greater Alchemical Simulacrum',
    description:
      'Your alchemical simulacrum is more powerful than normal. A simulacrum you create using the alchemical simulacrum discovery has additional hit points equal to twice your alchemist level and its physical ability scores are 4 higher than normal for the simulacrum formula. In addition, the simulacrum can use any of your extracts you have previously prepared as if they were potions (expending them from your extract pool).',
    shortDescription: 'Simulacrum gains bonus HP, +4 physical stats, and can use your extracts',
    source: 'Alchemy Manual',
    types: ['general'],
    prerequisites: [
      { type: 'class_feature', featureName: 'alchemical simulacrum' },
      { type: 'level', minimum: 14 },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['alchemy', 'alchemist', 'simulacrum', 'discovery'],
  },

  {
    id: 'mixture',
    name: 'Mixture',
    description:
      "You can combine two alchemical splash weapons into one combined weapon. As a full-round action, combine two alchemical splash weapons (such as acid flasks or alchemist's fire) into one weapon that delivers both effects simultaneously. The combined weapon is a single splash weapon that deals the damage of both constituent items; however, its weight is the combined weight of both items. If the combined weapon misses, neither effect triggers.",
    shortDescription: 'Combine two splash weapons into one that delivers both effects on a hit',
    source: 'Alchemy Manual',
    types: ['general'],
    prerequisites: [{ type: 'skill', skillId: 'craft_alchemy', ranks: 7 }],
    effects: [],
    activationMode: 'conditional',
    tags: ['alchemy', 'splash weapon', 'crafting', 'combination'],
  },
];
