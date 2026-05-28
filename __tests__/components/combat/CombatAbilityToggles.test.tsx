import React from 'react';
import { render, type RenderedNode } from '../../helpers/testUtils';
import { CombatAbilityToggles } from '@/components/combat/CombatAbilityToggles';
import { CombatAbilityState } from '@/types/buff';
import { FeatRegistryService } from '@/services/FeatRegistryService';
import type { Character } from '@/types';
import type { FeatDefinition } from '@/types/feats';
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
  } as unknown as Character;
}

const defaultAbilities: CombatAbilityState = {
  activeToggles: {},
  twoWeaponFighting: false,
  twoWeaponFightingLightOffhand: false,
  combatExpertisePenalty: 1,
};

function makeProps(overrides = {}) {
  return {
    abilities: defaultAbilities,
    character: makeCharacterWithFeats(['power_attack']),
    bab: 6,
    onToggle: jest.fn(),
    onSetExpertisePenalty: jest.fn(),
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

  it('renders only feats the character has', () => {
    const { getByText, queryByText } = render(<CombatAbilityToggles {...makeProps()} />);
    expect(getByText('Power Attack')).toBeTruthy();
    expect(queryByText('Combat Expertise')).toBeNull();
  });

  it('renders nothing when character has no toggle feats', () => {
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

  it('shows Combat Expertise penalty selector when active', () => {
    (FeatRegistryService.getFeat as jest.Mock).mockImplementation((id: string) => {
      if (id === 'combat_expertise') return mockCombatExpertiseDef;
      return undefined;
    });
    const character = makeCharacterWithFeats(['combat_expertise']);
    const abilities = { ...defaultAbilities, activeToggles: { combat_expertise: true } };
    const { getByText } = render(<CombatAbilityToggles {...makeProps({ abilities, character })} />);
    expect(getByText('Penalty: 1')).toBeTruthy();
  });

  it('is findable by testID', () => {
    const { getByTestId } = render(
      <CombatAbilityToggles {...makeProps()} testID="combat-ability-toggles" />,
    );
    expect(getByTestId('combat-ability-toggles')).toBeTruthy();
  });
});
