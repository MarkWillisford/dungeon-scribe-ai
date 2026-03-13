import React from 'react';
import { render, type RenderedNode } from '../../helpers/testUtils';
import { RollLog } from '@/components/combat/RollLog';
import { RollRecord } from '@/types/buff';

function makeRoll(overrides: Partial<RollRecord> = {}): RollRecord {
  return {
    id: 'roll_1',
    timestamp: 1700000000000,
    type: 'attack',
    label: 'Melee Attack 1',
    diceNotation: '1d20+9',
    rawRoll: 14,
    modifier: 9,
    total: 23,
    breakdown: ['d20: 14', 'Bonus: +9'],
    isManual: false,
    ...overrides,
  };
}

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

describe('RollLog', () => {
  it('shows empty state when no rolls', () => {
    const { getByText } = render(<RollLog rolls={[]} onClear={jest.fn()} />);
    expect(getByText('No rolls recorded yet')).toBeTruthy();
  });

  it('renders roll labels', () => {
    const rolls = [makeRoll({ id: 'r1', label: 'Melee Attack 1', total: 23 })];
    const { getByText } = render(<RollLog rolls={rolls} onClear={jest.fn()} />);
    expect(getByText('Melee Attack 1')).toBeTruthy();
    expect(getByText('23')).toBeTruthy();
  });

  it('shows multiple rolls', () => {
    const rolls = [
      makeRoll({ id: 'r1', label: 'Attack 1', total: 18 }),
      makeRoll({ id: 'r2', label: 'Save vs Fire', type: 'save', total: 12 }),
    ];
    const { getByText } = render(<RollLog rolls={rolls} onClear={jest.fn()} />);
    expect(getByText('Attack 1')).toBeTruthy();
    expect(getByText('Save vs Fire')).toBeTruthy();
  });

  it('shows CRIT marker for crit rolls', () => {
    const rolls = [makeRoll({ id: 'r1', total: 29, isCrit: true, rawRoll: 20 })];
    const { getByText } = render(<RollLog rolls={rolls} onClear={jest.fn()} />);
    expect(getByText('29★')).toBeTruthy();
  });

  it('shows MISS marker for crit fails', () => {
    const rolls = [makeRoll({ id: 'r1', total: 1, isCritFail: true, rawRoll: 1 })];
    const { getByText } = render(<RollLog rolls={rolls} onClear={jest.fn()} />);
    expect(getByText('1✗')).toBeTruthy();
  });

  it('calls onClear when Clear roll log button pressed', () => {
    const onClear = jest.fn();
    const rolls = [makeRoll()];
    const { tree } = render(<RollLog rolls={rolls} onClear={onClear} />);
    const clearBtn = findByLabel(tree, 'Clear roll log');
    expect(clearBtn).toBeTruthy();
    if (clearBtn?.props?.onPress) clearBtn.props.onPress();
    expect(onClear).toHaveBeenCalledTimes(1);
  });

  it('is findable by testID', () => {
    const { getByTestId } = render(
      <RollLog rolls={[makeRoll()]} onClear={jest.fn()} testID="roll-log" />,
    );
    expect(getByTestId('roll-log')).toBeTruthy();
  });
});
