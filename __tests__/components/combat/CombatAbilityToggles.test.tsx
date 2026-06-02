import React from 'react';
import { render, type RenderedNode } from '../../helpers/testUtils';
import { CombatAbilityToggles } from '@/components/combat/CombatAbilityToggles';
import { CombatAbilityState } from '@/types/buff';
import { FeatRegistryService } from '@/services/FeatRegistryService';
import type { Character } from '@/types';
import type { FeatDefinition } from '@/types/feats';
import type { ClassFeature } from '@/types/classes';
import { BonusType } from '@/types/base';

jest.mock('@/services/FeatRegistryService');

function findByLabel(node: RenderedNode, label: string): RenderedNode | null {
  if (node.props?.accessibilityLabel === label) return node;
  for (const child of node.children ?? []) {
    if (typeof child !== 'string') {
      const found = findByLabel(child, label);
      if (found) return found;
    }
  }
  return null;
}

const mockPowerAttackDef: FeatDefinition = {
  id: 'power_attack',
  name: 'Power Attack',
  description: 'Trade melee attack bonus for damage.',
  shortDescription: 'Trade accuracy for damage',
  source: 'Core Rulebook',
  types: ['combat'],
  prerequisites: [],
  effects: [
    {
      type: 'penalty',
      bonusType: BonusType.UNTYPED,
      target: 'attack.melee',
      value: '-(floor(BAB/4)+1)',
      source: 'Power Attack',
      activation: { type: 'toggle', active: false },
    },
    {
      type: 'bonus',
      bonusType: BonusType.UNTYPED,
      target: 'damage.melee',
      value: '(floor(BAB/4)+1)*2',
      source: 'Power Attack',
      activation: { type: 'toggle', active: false },
    },
  ],
  activationMode: 'toggle',
  tags: ['melee'],
  verificationStatus: 'verified',
};

const mockCombatExpertiseDef: FeatDefinition = {
  id: 'combat_expertise',
  name: 'Combat Expertise',
  description: 'Trade attack bonus for AC bonus.',
  shortDescription: 'Trade accuracy for AC',
  source: 'Core Rulebook',
  types: ['combat'],
  prerequisites: [],
  effects: [],
  activationMode: 'toggle',
  tags: [],
  verificationStatus: 'verified',
};

const mockRageFeature: ClassFeature = {
  id: 'rage',
  name: 'Rage',
  description: 'Enter a battle frenzy, gaining bonuses to STR, CON, and Will saves.',
  shortDescription: 'Enter a battle frenzy',
  activationMode: 'toggle',
  level: 1,
  effects: [
    { type: 'bonus', bonusType: BonusType.MORALE, target: 'ability.str', value: 4, source: 'Rage' },
    { type: 'bonus', bonusType: BonusType.MORALE, target: 'ability.con', value: 4, source: 'Rage' },
    { type: 'bonus', bonusType: BonusType.MORALE, target: 'save.will', value: 2, source: 'Rage' },
    { type: 'penalty', bonusType: BonusType.UNTYPED, target: 'ac', value: -2, source: 'Rage' },
  ],
};

function makeCharacterWithFeats(featIds: string[]): Character {
  return {
    feats: {
      feats: featIds.map((id) => ({
        featId: id,
        name: id,
        source: 'level_1',
        grantedAtLevel: 1,
        active: true,
        choices: {},
      })),
      totalFeats: featIds.length,
      bonusFeats: 0,
    },
    classes: { classes: [] },
  } as unknown as Character;
}

function makeCharacterWithClassFeatures(features: ClassFeature[]): Character {
  return {
    feats: { feats: [], totalFeats: 0, bonusFeats: 0 },
    classes: {
      classes: [
        {
          name: 'Barbarian',
          level: 1,
          classFeatures: features,
          hitDieSize: 12,
          hitDieResults: [],
          skillRanks: 4,
          classSkills: [],
          babProgression: 'full',
          fortProgression: 'high',
          refProgression: 'low',
          willProgression: 'low',
        },
      ],
    },
  } as unknown as Character;
}

const defaultAbilities: CombatAbilityState = {
  activeToggles: {},
  twoWeaponFighting: false,
  twoWeaponFightingLightOffhand: false,
};

function makeProps(overrides = {}) {
  return {
    abilities: defaultAbilities,
    character: makeCharacterWithFeats(['power_attack']),
    bab: 6,
    onToggle: jest.fn(),
    ...overrides,
  };
}

describe('CombatAbilityToggles', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (FeatRegistryService.getFeat as jest.Mock).mockImplementation((id: string) => {
      if (id === 'power_attack') return mockPowerAttackDef;
      if (id === 'combat_expertise') return mockCombatExpertiseDef;
      return undefined;
    });
  });

  describe('feat scanning', () => {
    it('renders only feats the character has', () => {
      const { getByText, queryByText } = render(<CombatAbilityToggles {...makeProps()} />);
      expect(getByText('Power Attack')).toBeTruthy();
      expect(queryByText('Combat Expertise')).toBeNull();
    });

    it('renders nothing when character has no toggle feats or class features', () => {
      (FeatRegistryService.getFeat as jest.Mock).mockReturnValue(undefined);
      const { queryByText } = render(
        <CombatAbilityToggles {...makeProps({ character: makeCharacterWithFeats(['dodge']) })} />,
      );
      expect(queryByText('Combat Abilities')).toBeNull();
    });

    it('renders nothing when character is null', () => {
      const { queryByText } = render(<CombatAbilityToggles {...makeProps({ character: null })} />);
      expect(queryByText('Combat Abilities')).toBeNull();
    });

    it('calls onToggle with the feat ID when pressed', () => {
      const onToggle = jest.fn();
      const { tree } = render(<CombatAbilityToggles {...makeProps({ onToggle })} />);
      const paRow = findByLabel(tree, 'Toggle Power Attack');
      expect(paRow).toBeTruthy();
      if (paRow?.props?.onPress) paRow.props.onPress();
      expect(onToggle).toHaveBeenCalledWith('power_attack');
    });

    it('shows BAB-based preview when Power Attack is active (BAB 6 → -2 atk / +4 dmg)', () => {
      const abilities = { ...defaultAbilities, activeToggles: { power_attack: true } };
      const { getByText } = render(<CombatAbilityToggles {...makeProps({ abilities, bab: 6 })} />);
      // floor(6/4)+1 = 2, damage = 2*2 = 4
      expect(getByText('-2 atk / +4 dmg (+6 two-handed)')).toBeTruthy();
    });

    it('shows computed penalty and dodge values read-only when Combat Expertise is active', () => {
      (FeatRegistryService.getFeat as jest.Mock).mockImplementation((id: string) => {
        if (id === 'combat_expertise') return mockCombatExpertiseDef;
        return undefined;
      });
      const character = makeCharacterWithFeats(['combat_expertise']);
      const abilities = { ...defaultAbilities, activeToggles: { combat_expertise: true } };
      // BAB=6: floor(6/4)+1 = 2
      const { getByText } = render(
        <CombatAbilityToggles {...makeProps({ abilities, character, bab: 6 })} />,
      );
      expect(getByText('Penalty: -2 / Dodge: +2')).toBeTruthy();
    });

    it('is findable by testID', () => {
      const { getByTestId } = render(
        <CombatAbilityToggles {...makeProps()} testID="combat-ability-toggles" />,
      );
      expect(getByTestId('combat-ability-toggles')).toBeTruthy();
    });
  });

  describe('class feature scanning', () => {
    it('shows a class feature with activationMode toggle and an id', () => {
      const character = makeCharacterWithClassFeatures([mockRageFeature]);
      const { getByText } = render(<CombatAbilityToggles {...makeProps({ character })} />);
      expect(getByText('Rage')).toBeTruthy();
    });

    it('does not show a class feature with activationMode passive', () => {
      const passive: ClassFeature = { ...mockRageFeature, activationMode: 'passive' };
      const character = makeCharacterWithClassFeatures([passive]);
      const { queryByText } = render(<CombatAbilityToggles {...makeProps({ character })} />);
      expect(queryByText('Rage')).toBeNull();
      expect(queryByText('Combat Abilities')).toBeNull();
    });

    it('does not show a class feature with no activationMode set', () => {
      const { activationMode: _am, ...noMode } = mockRageFeature;
      const character = makeCharacterWithClassFeatures([noMode as ClassFeature]);
      const { queryByText } = render(<CombatAbilityToggles {...makeProps({ character })} />);
      expect(queryByText('Rage')).toBeNull();
      expect(queryByText('Combat Abilities')).toBeNull();
    });

    it('does not show a class feature with no id', () => {
      const { id: _id, ...noId } = mockRageFeature;
      const character = makeCharacterWithClassFeatures([noId as ClassFeature]);
      const { queryByText } = render(<CombatAbilityToggles {...makeProps({ character })} />);
      expect(queryByText('Rage')).toBeNull();
      expect(queryByText('Combat Abilities')).toBeNull();
    });

    it('calls onToggle with the class feature id when pressed', () => {
      const onToggle = jest.fn();
      const character = makeCharacterWithClassFeatures([mockRageFeature]);
      const { tree } = render(<CombatAbilityToggles {...makeProps({ character, onToggle })} />);
      const rageRow = findByLabel(tree, 'Toggle Rage');
      expect(rageRow).toBeTruthy();
      if (rageRow?.props?.onPress) rageRow.props.onPress();
      expect(onToggle).toHaveBeenCalledWith('rage');
    });

    it('shows effect preview for an active class feature', () => {
      const character = makeCharacterWithClassFeatures([mockRageFeature]);
      const abilities = { ...defaultAbilities, activeToggles: { rage: true } };
      const { getByText } = render(
        <CombatAbilityToggles {...makeProps({ character, abilities })} />,
      );
      expect(getByText('+4 STR / +4 CON / +2 will / -2 AC')).toBeTruthy();
    });

    it('shows both feats and class features together', () => {
      const character: Character = {
        feats: {
          feats: [
            {
              featId: 'power_attack',
              name: 'power_attack',
              source: 'level_1',
              grantedAtLevel: 1,
              active: true,
              choices: {},
            },
          ],
          totalFeats: 1,
          bonusFeats: 0,
        },
        classes: {
          classes: [
            {
              name: 'Barbarian',
              level: 1,
              classFeatures: [mockRageFeature],
              hitDieSize: 12,
              hitDieResults: [],
              skillRanks: 4,
              classSkills: [],
              babProgression: 'full',
              fortProgression: 'high',
              refProgression: 'low',
              willProgression: 'low',
            },
          ],
        },
      } as unknown as Character;
      const { getByText } = render(<CombatAbilityToggles {...makeProps({ character })} />);
      expect(getByText('Power Attack')).toBeTruthy();
      expect(getByText('Rage')).toBeTruthy();
    });
  });
});
