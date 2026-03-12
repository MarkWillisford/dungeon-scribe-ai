import React from 'react';
import { render, fireEvent } from '../../helpers/testUtils';
import { DefensePanel } from '@/components/combat/DefensePanel';
import { ACTotals } from '@/types/combat';

const ac: ACTotals = {
  total: 18,
  touch: 13,
  flatFooted: 15,
  breakdown: ['Base: 10', 'Armor: +5', 'DEX: +3'],
};

function makeProps(overrides = {}) {
  return {
    ac,
    fort: 7,
    ref: 5,
    will: 3,
    cmb: 8,
    cmd: 21,
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

describe('DefensePanel', () => {
  it('renders AC values', () => {
    const { getByText } = render(<DefensePanel {...makeProps()} />);
    expect(getByText('18')).toBeTruthy();
    expect(getByText('13')).toBeTruthy();
    expect(getByText('15')).toBeTruthy();
  });

  it('renders save totals with + sign', () => {
    const { getByText } = render(<DefensePanel {...makeProps()} />);
    expect(getByText('+7')).toBeTruthy();
    expect(getByText('+5')).toBeTruthy();
    expect(getByText('+3')).toBeTruthy();
  });

  it('renders CMB and CMD', () => {
    const { getByText } = render(<DefensePanel {...makeProps()} />);
    expect(getByText('+8')).toBeTruthy();
    expect(getByText('21')).toBeTruthy();
  });

  it('renders section labels', () => {
    const { getByText } = render(<DefensePanel {...makeProps()} />);
    expect(getByText('Fortitude')).toBeTruthy();
    expect(getByText('Reflex')).toBeTruthy();
    expect(getByText('Will')).toBeTruthy();
    expect(getByText('AC')).toBeTruthy();
    expect(getByText('Touch')).toBeTruthy();
    expect(getByText('Flat-Footed')).toBeTruthy();
  });

  it('roll Fortitude save button calls onRollRecorded', () => {
    const onRollRecorded = jest.fn();
    const { tree } = render(<DefensePanel {...makeProps({ onRollRecorded })} />);
    const btn = findByLabel(tree, 'Roll Fortitude save');
    expect(btn).toBeTruthy();
    if (btn?.props?.onPress) btn.props.onPress();
    expect(onRollRecorded).toHaveBeenCalledTimes(1);
    const record = onRollRecorded.mock.calls[0][0];
    expect(record.type).toBe('save');
    expect(record.label).toBe('Fortitude Save');
  });

  it('is findable by testID', () => {
    const { getByTestId } = render(<DefensePanel {...makeProps()} testID="defense-panel" />);
    expect(getByTestId('defense-panel')).toBeTruthy();
  });
});
