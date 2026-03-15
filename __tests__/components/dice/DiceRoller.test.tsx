import React from 'react';
import { render, type RenderedNode } from '../../helpers/testUtils';
import { DiceRoller } from '@/components/dice/DiceRoller';

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

describe('DiceRoller', () => {
  it('renders die type buttons', () => {
    const onRollRecorded = jest.fn();
    const { getByText } = render(<DiceRoller onRollRecorded={onRollRecorded} />);
    expect(getByText('d4')).toBeTruthy();
    expect(getByText('d6')).toBeTruthy();
    expect(getByText('d8')).toBeTruthy();
    expect(getByText('d10')).toBeTruthy();
    expect(getByText('d12')).toBeTruthy();
    expect(getByText('d20')).toBeTruthy();
    expect(getByText('d100')).toBeTruthy();
  });

  it('shows roll button with current notation', () => {
    const onRollRecorded = jest.fn();
    const { getByText } = render(<DiceRoller onRollRecorded={onRollRecorded} />);
    expect(getByText('Roll 1d20')).toBeTruthy();
  });

  it('pressing Roll via accessibilityLabel calls onRollRecorded', () => {
    const onRollRecorded = jest.fn();
    const { tree } = render(<DiceRoller onRollRecorded={onRollRecorded} />);
    const rollBtn = findByLabel(tree, 'Roll 1d20');
    expect(rollBtn).toBeTruthy();
    if (rollBtn?.props?.onPress) rollBtn.props.onPress();
    expect(onRollRecorded).toHaveBeenCalledTimes(1);
    const record = onRollRecorded.mock.calls[0][0];
    expect(record.type).toBe('free');
    expect(record.isManual).toBe(false);
  });

  it('apply manual roll does nothing without valid input', () => {
    const onRollRecorded = jest.fn();
    const { tree } = render(<DiceRoller onRollRecorded={onRollRecorded} />);
    // Without a valid manual input, pressing Apply should do nothing
    const applyBtn = findByLabel(tree, 'Apply manual roll');
    expect(applyBtn).toBeTruthy();
    if (applyBtn?.props?.onPress) applyBtn.props.onPress();
    expect(onRollRecorded).not.toHaveBeenCalled();
  });

  it('error text is not visible initially', () => {
    const onRollRecorded = jest.fn();
    const { queryByText } = render(<DiceRoller onRollRecorded={onRollRecorded} />);
    expect(queryByText('Invalid notation (e.g. 2d6+3)')).toBeNull();
  });

  it('is findable by testID', () => {
    const { getByTestId } = render(<DiceRoller onRollRecorded={jest.fn()} testID="dice-roller" />);
    expect(getByTestId('dice-roller')).toBeTruthy();
  });
});
