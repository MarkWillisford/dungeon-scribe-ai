import React from 'react';
import { render, fireEvent } from '../../helpers/testUtils';
import { CombatAbilityToggles } from '@/components/combat/CombatAbilityToggles';
import { CombatAbilityState } from '@/types/buff';

function findByLabel(node: any, label: string): any {
  if (node.props?.accessibilityLabel === label) return node;
  for (const child of node.children ?? []) {
    if (typeof child !== 'string') {
      const found = findByLabel(child, label);
      if (found) return found;
    }
  }
  return null;
}

const defaultAbilities: CombatAbilityState = {
  powerAttack: false,
  deadlyAim: false,
  rage: false,
  twoWeaponFighting: false,
  twoWeaponFightingLightOffhand: false,
  haste: false,
  flurryOfBlows: false,
  combatExpertise: false,
  combatExpertisePenalty: 1,
};

function makeProps(overrides = {}) {
  return {
    abilities: defaultAbilities,
    bab: 6,
    onToggle: jest.fn(),
    onSetExpertisePenalty: jest.fn(),
    ...overrides,
  };
}

describe('CombatAbilityToggles', () => {
  it('renders all combat ability labels', () => {
    const { getByText } = render(<CombatAbilityToggles {...makeProps()} />);
    expect(getByText('Power Attack')).toBeTruthy();
    expect(getByText('Deadly Aim')).toBeTruthy();
    expect(getByText('Rage')).toBeTruthy();
    expect(getByText('Haste')).toBeTruthy();
    expect(getByText('Combat Expertise')).toBeTruthy();
    expect(getByText('Two-Weapon Fighting')).toBeTruthy();
    expect(getByText('Flurry of Blows')).toBeTruthy();
  });

  it('calls onToggle when ability row pressed', () => {
    const onToggle = jest.fn();
    const { tree } = render(<CombatAbilityToggles {...makeProps({ onToggle })} />);
    const paRow = findByLabel(tree, 'Toggle Power Attack');
    expect(paRow).toBeTruthy();
    if (paRow?.props?.onPress) paRow.props.onPress();
    expect(onToggle).toHaveBeenCalledWith('powerAttack');
  });

  it('shows power attack preview when active', () => {
    // BAB 6 → penalty = floor(6/4)+1 = 2, bonus = 4
    const abilities = { ...defaultAbilities, powerAttack: true };
    const { getByText } = render(<CombatAbilityToggles {...makeProps({ abilities, bab: 6 })} />);
    expect(getByText('-2 atk / +4 dmg')).toBeTruthy();
  });

  it('shows TWF light offhand option when TWF is active', () => {
    const abilities = { ...defaultAbilities, twoWeaponFighting: true };
    const { getByText } = render(<CombatAbilityToggles {...makeProps({ abilities })} />);
    expect(getByText('Light off-hand weapon')).toBeTruthy();
  });

  it('shows expertise penalty selector when active', () => {
    const abilities = { ...defaultAbilities, combatExpertise: true };
    const { getByText } = render(<CombatAbilityToggles {...makeProps({ abilities })} />);
    expect(getByText('Penalty: 1')).toBeTruthy();
  });

  it('is findable by testID', () => {
    const { getByTestId } = render(
      <CombatAbilityToggles {...makeProps()} testID="combat-ability-toggles" />,
    );
    expect(getByTestId('combat-ability-toggles')).toBeTruthy();
  });
});
