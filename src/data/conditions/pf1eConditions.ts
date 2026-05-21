import { BonusType, type Effect } from '@/types/base';

export interface ConditionDefinition {
  name: string;
  description: string;
  effects: Effect[];
}

export const PF1E_CONDITIONS: ConditionDefinition[] = [
  {
    name: 'Shaken',
    description: '-2 penalty on attack rolls, saving throws, skill checks, and ability checks',
    effects: [
      {
        type: 'penalty',
        bonusType: BonusType.UNTYPED,
        target: 'attack.all',
        value: -2,
        source: 'Shaken',
      },
      {
        type: 'penalty',
        bonusType: BonusType.UNTYPED,
        target: 'save.all',
        value: -2,
        source: 'Shaken',
      },
    ],
  },
  {
    name: 'Frightened',
    description:
      '-2 penalty on attack rolls, saving throws, skill checks, and ability checks; must flee from the source of fear',
    effects: [
      {
        type: 'penalty',
        bonusType: BonusType.UNTYPED,
        target: 'attack.all',
        value: -2,
        source: 'Frightened',
      },
      {
        type: 'penalty',
        bonusType: BonusType.UNTYPED,
        target: 'save.all',
        value: -2,
        source: 'Frightened',
      },
    ],
  },
  {
    name: 'Fatigued',
    description: '-2 penalty on STR and DEX; cannot run or charge',
    effects: [
      {
        type: 'penalty',
        bonusType: BonusType.UNTYPED,
        target: 'ability.str',
        value: -2,
        source: 'Fatigued',
      },
      {
        type: 'penalty',
        bonusType: BonusType.UNTYPED,
        target: 'ability.dex',
        value: -2,
        source: 'Fatigued',
      },
    ],
  },
  {
    name: 'Sickened',
    description:
      '-2 penalty on attack rolls, weapon damage rolls, saving throws, skill checks, and ability checks',
    effects: [
      {
        type: 'penalty',
        bonusType: BonusType.UNTYPED,
        target: 'attack.all',
        value: -2,
        source: 'Sickened',
      },
      {
        type: 'penalty',
        bonusType: BonusType.UNTYPED,
        target: 'save.all',
        value: -2,
        source: 'Sickened',
      },
    ],
  },
  {
    name: 'Stunned',
    description: 'Cannot take actions; loses DEX bonus to AC; -2 penalty to AC',
    effects: [
      { type: 'penalty', bonusType: BonusType.UNTYPED, target: 'ac', value: -2, source: 'Stunned' },
    ],
  },
  {
    name: 'Staggered',
    description: 'Limited to a single move or standard action each round',
    effects: [],
  },
  {
    name: 'Blinded',
    description:
      '-2 AC; loses DEX bonus to AC; -4 on most Perception checks; opponents gain +2 to attack',
    effects: [
      { type: 'penalty', bonusType: BonusType.UNTYPED, target: 'ac', value: -2, source: 'Blinded' },
      {
        type: 'penalty',
        bonusType: BonusType.UNTYPED,
        target: 'skill.perception',
        value: -4,
        source: 'Blinded',
      },
    ],
  },
  {
    name: 'Dazzled',
    description: '-1 penalty on attack rolls and Perception checks',
    effects: [
      {
        type: 'penalty',
        bonusType: BonusType.UNTYPED,
        target: 'attack.all',
        value: -1,
        source: 'Dazzled',
      },
      {
        type: 'penalty',
        bonusType: BonusType.UNTYPED,
        target: 'skill.perception',
        value: -1,
        source: 'Dazzled',
      },
    ],
  },
  {
    name: 'Entangled',
    description: '-2 penalty on attack rolls; -4 to DEX',
    effects: [
      {
        type: 'penalty',
        bonusType: BonusType.UNTYPED,
        target: 'attack.all',
        value: -2,
        source: 'Entangled',
      },
      {
        type: 'penalty',
        bonusType: BonusType.UNTYPED,
        target: 'ability.dex',
        value: -4,
        source: 'Entangled',
      },
    ],
  },
  {
    name: 'Exhausted',
    description: '-6 penalty on STR and DEX; can only move at half speed',
    effects: [
      {
        type: 'penalty',
        bonusType: BonusType.UNTYPED,
        target: 'ability.str',
        value: -6,
        source: 'Exhausted',
      },
      {
        type: 'penalty',
        bonusType: BonusType.UNTYPED,
        target: 'ability.dex',
        value: -6,
        source: 'Exhausted',
      },
    ],
  },
];
