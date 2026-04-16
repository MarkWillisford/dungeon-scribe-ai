import type { FeatDefinition } from '@/types/feats';
import { BonusType } from '@/types/base';

export const ORC_GOLARION_FEATS: FeatDefinition[] = [
  // Amplified Rage — already in teamworkFeats.ts
  // Blood Vengeance — already in racialFeats.ts
  // Brutal Grappler — already in teamworkFeats.ts
  // Destroyer's Blessing — already in racialFeats.ts
  // Ferocious Tenacity — already in racialFeats.ts
  // Gore Fiend — already in racialFeats.ts
  // Sympathetic Rage — already in racialFeats.ts
  {
    id: 'adept_channel',
    name: 'Adept Channel',
    description:
      'You gain the channel energy class feature, as a cleric, usable 2 times per day. Your effective cleric level equals your divine spellcasting class level minus 3. The daily uses are not modified by Charisma modifier.',
    shortDescription: 'Gain channel energy 2/day at divine caster level -3.',
    source: 'Pathfinder Player Companion: Orcs of Golarion',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'Ability to cast divine spells' },
      { type: 'class_feature', featureName: 'summon familiar' },
      { type: 'caster_level', minimum: 4 },
      { type: 'ability_score', ability: 'CHA', minimum: 13 },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Adept Channel',
      },
    ],
    activationMode: 'conditional',
    tags: ['channel energy', 'divine', 'orc', 'half-orc'],
  },
  {
    id: 'fire_gods_blessing',
    name: "Fire God's Blessing",
    description:
      'In combat, you gain 1 hit point of healing whenever you deal fire damage to an enemy, maximum once per round. If an attack causes a target to catch on fire, you heal each round that target takes fire damage.',
    shortDescription: 'Heal 1 HP when you deal fire damage to an enemy (1/round).',
    source: 'Pathfinder Player Companion: Orcs of Golarion',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'Half-orc or orc' },
      { type: 'special', description: 'Worshiper of the orc fire deity' },
    ],
    effects: [
      {
        type: 'bonus',
        target: 'special.healing',
        value: 1,
        bonusType: BonusType.UNTYPED,
        source: "Fire God's Blessing",
      },
    ],
    activationMode: 'conditional',
    tags: ['orc', 'half-orc', 'fire', 'healing', 'deity'],
  },
  {
    id: 'thrill_of_the_kill',
    name: 'Thrill of the Kill',
    description:
      'When raging and an attack reduces an enemy to negative hit points or kills it, you regain 1 round of rage. The enemy must have had at least as many Hit Dice as you. This benefit can only be gained once per round.',
    shortDescription: 'Regain 1 rage round when you drop a foe with equal or more HD (1/round).',
    source: 'Pathfinder Player Companion: Orcs of Golarion',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'special', description: 'Half-orc or orc' },
      { type: 'class_feature', featureName: 'rage' },
    ],
    effects: [
      {
        type: 'special',
        value: 1,
        bonusType: BonusType.UNTYPED,
        target: 'special.rage_rounds',
        source: 'Thrill of the Kill',
      },
    ],
    activationMode: 'conditional',
    tags: ['orc', 'half-orc', 'rage', 'barbarian', 'kill'],
  },
  {
    id: 'warleaders_rage',
    name: "Warleader's Rage",
    description:
      'Feats and abilities that allow an ally to rage or enhance a rage if adjacent to you persist as long as your ally is within 30 feet of you and can see you, rather than requiring adjacency. Allies must still meet original activation requirements.',
    shortDescription: 'Rage-sharing effects extend to 30 ft instead of requiring adjacency.',
    source: 'Pathfinder Player Companion: Orcs of Golarion',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'CHA', minimum: 13 },
      { type: 'special', description: 'Half-orc or orc' },
      { type: 'special', description: 'Non-lawful alignment' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: "Warleader's Rage",
      },
    ],
    activationMode: 'passive',
    tags: ['orc', 'half-orc', 'rage', 'leadership', 'range'],
  },
];
