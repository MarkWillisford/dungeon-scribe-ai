import { BonusType } from '@/types/base';
import type { FlawDefinition } from '@/types/flaws';

// TODO: add Tome of Secrets flaws (Taboo Proficiency, Deity's Wrath) pending source material

export const FLAWS_3_5E: FlawDefinition[] = [
  {
    id: 'noncombatant',
    name: 'Noncombatant',
    description:
      'You are not a trained combatant. You take a -2 penalty on all melee attack rolls.',
    source: '3.5e',
    effects: [
      {
        type: 'penalty',
        bonusType: BonusType.UNTYPED,
        target: 'attack.melee',
        value: 2,
        source: 'Noncombatant',
      },
    ],
  },
  {
    id: 'shaky',
    name: 'Shaky',
    description:
      'You are not steady with ranged weapons. You take a -2 penalty on all ranged attack rolls.',
    source: '3.5e',
    effects: [
      {
        type: 'penalty',
        bonusType: BonusType.UNTYPED,
        target: 'attack.ranged',
        value: 2,
        source: 'Shaky',
      },
    ],
  },
  {
    id: 'weak_will',
    name: 'Weak Will',
    description:
      'You lack the mental fortitude to withstand assaults on your mind. You take a -3 penalty on Will saving throws.',
    source: '3.5e',
    effects: [
      {
        type: 'penalty',
        bonusType: BonusType.UNTYPED,
        target: 'save.will',
        value: 3,
        source: 'Weak Will',
      },
    ],
  },
  {
    id: 'frail',
    name: 'Frail',
    description: 'Your body is physically weak. You take a -1 penalty on Fortitude saving throws.',
    source: '3.5e',
    effects: [
      {
        type: 'penalty',
        bonusType: BonusType.UNTYPED,
        target: 'save.fortitude',
        value: 1,
        source: 'Frail',
      },
    ],
  },
  {
    id: 'inattentive',
    name: 'Inattentive',
    description:
      'You are poor at noticing details in your environment. You take a -4 penalty on Perception checks.',
    source: '3.5e',
    effects: [
      {
        type: 'penalty',
        bonusType: BonusType.UNTYPED,
        target: 'skill.perception',
        value: 4,
        source: 'Inattentive',
      },
    ],
  },
  {
    id: 'vulnerable',
    name: 'Vulnerable',
    description: 'You are not good at defending yourself. You take a -1 penalty to Armor Class.',
    source: '3.5e',
    effects: [
      {
        type: 'penalty',
        bonusType: BonusType.UNTYPED,
        target: 'ac',
        value: 1,
        source: 'Vulnerable',
      },
    ],
  },
  {
    id: 'unreactive',
    name: 'Unreactive',
    description: 'You are slow to respond to danger. You take a -6 penalty on initiative checks.',
    source: '3.5e',
    effects: [
      {
        type: 'penalty',
        bonusType: BonusType.UNTYPED,
        target: 'initiative',
        value: 6,
        source: 'Unreactive',
      },
    ],
  },
  {
    id: 'murky_eyed',
    name: 'Murky-Eyed',
    description:
      'Your vision is obscured. You have a 20% miss chance on ranged attacks due to impaired sight.',
    source: '3.5e',
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'special.ranged_miss_chance',
        value: 20,
        source: 'Murky-Eyed',
      },
    ],
  },
];
