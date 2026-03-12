import React from 'react';
import { render, fireEvent } from '../../helpers/testUtils';
import { AttackPanel } from '@/components/combat/AttackPanel';

function makeProps(overrides = {}) {
  return {
    meleeAttacks: [12, 7, 2],
    rangedAttacks: [10],
    onRollRecorded: jest.fn(),
    ...overrides,
  };
}

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

describe('AttackPanel', () => {
  it('renders melee attack bonuses', () => {
    const { getByText } = render(<AttackPanel {...makeProps()} />);
    expect(getByText('+12')).toBeTruthy();
    expect(getByText('+7')).toBeTruthy();
    expect(getByText('+2')).toBeTruthy();
  });

  it('renders attack row labels', () => {
    const { getByText } = render(<AttackPanel {...makeProps()} />);
    expect(getByText('Attack 1')).toBeTruthy();
    expect(getByText('Attack 2')).toBeTruthy();
    expect(getByText('Attack 3')).toBeTruthy();
  });

  it('shows Full Attack button when multiple attacks', () => {
    const { getByText } = render(<AttackPanel {...makeProps()} />);
    expect(getByText('Full Attack')).toBeTruthy();
  });

  it('does not show Full Attack for single attack', () => {
    const { queryByText } = render(
      <AttackPanel {...makeProps({ meleeAttacks: [8], rangedAttacks: [] })} />,
    );
    expect(queryByText('Full Attack')).toBeNull();
  });

  it('shows Melee / Ranged toggle', () => {
    const { getByText } = render(<AttackPanel {...makeProps()} />);
    expect(getByText('Melee')).toBeTruthy();
    expect(getByText('Ranged')).toBeTruthy();
  });

  it('roll button calls onRollRecorded via accessibilityLabel', () => {
    const onRollRecorded = jest.fn();
    const { tree } = render(<AttackPanel {...makeProps({ onRollRecorded })} />);
    const rollBtn = findByLabel(tree, 'Roll attack 1');
    expect(rollBtn).toBeTruthy();
    if (rollBtn?.props?.onPress) rollBtn.props.onPress();
    expect(onRollRecorded).toHaveBeenCalledTimes(1);
    const record = onRollRecorded.mock.calls[0][0];
    expect(record.type).toBe('attack');
    expect(record.isManual).toBe(false);
  });

  it('is findable by testID', () => {
    const { getByTestId } = render(<AttackPanel {...makeProps()} testID="attack-panel" />);
    expect(getByTestId('attack-panel')).toBeTruthy();
  });
});
