import React from 'react';
import { render, type RenderedNode } from '../../helpers/testUtils';
import { InitiativeRow } from '@/components/combat/InitiativeRow';
import { DiceService } from '@services/DiceService';

jest.mock('@services/DiceService', () => ({
  DiceService: {
    rollD20: jest.fn(),
    buildNotation: jest.fn((count: number, sides: number, modifier: number) => {
      const base = `${count}d${sides}`;
      if (modifier === 0) return base;
      return modifier > 0 ? `${base}+${modifier}` : `${base}${modifier}`;
    }),
  },
}));

const mockRollD20 = DiceService.rollD20 as jest.Mock;

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

function makeProps(overrides: Partial<{ initiative: number; onRollRecorded: jest.Mock }> = {}) {
  return {
    initiative: 3,
    onRollRecorded: jest.fn(),
    ...overrides,
  };
}

describe('InitiativeRow', () => {
  beforeEach(() => {
    mockRollD20.mockReturnValue(12);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the initiative modifier as a positive string', () => {
    const { getByText } = render(<InitiativeRow {...makeProps({ initiative: 4 })} />);
    expect(getByText('+4')).toBeTruthy();
  });

  it('renders a negative initiative modifier without double sign', () => {
    const { getByText } = render(<InitiativeRow {...makeProps({ initiative: -1 })} />);
    expect(getByText('-1')).toBeTruthy();
  });

  it('renders Initiative label', () => {
    const { getByText } = render(<InitiativeRow {...makeProps()} />);
    expect(getByText('Initiative')).toBeTruthy();
  });

  it('renders Roll button', () => {
    const { getByText } = render(<InitiativeRow {...makeProps()} />);
    expect(getByText('Roll')).toBeTruthy();
  });

  it('roll button has correct accessibility label', () => {
    const { tree } = render(<InitiativeRow {...makeProps()} />);
    const btn = findByLabel(tree, 'Roll initiative');
    expect(btn).toBeTruthy();
  });

  it('rolling calls onRollRecorded with a record of type initiative', () => {
    mockRollD20.mockReturnValue(15);
    const onRollRecorded = jest.fn();
    const { tree } = render(<InitiativeRow {...makeProps({ initiative: 3, onRollRecorded })} />);
    const btn = findByLabel(tree, 'Roll initiative');
    expect(btn).toBeTruthy();
    if (btn?.props?.onPress) btn.props.onPress();
    expect(onRollRecorded).toHaveBeenCalledTimes(1);
    const record = onRollRecorded.mock.calls[0][0];
    expect(record.type).toBe('initiative');
    expect(record.rawRoll).toBe(15);
    expect(record.modifier).toBe(3);
    expect(record.total).toBe(18);
    expect(record.isManual).toBe(false);
  });

  it('roll result includes d20 value and initiative modifier in breakdown', () => {
    mockRollD20.mockReturnValue(10);
    const onRollRecorded = jest.fn();
    const { tree } = render(<InitiativeRow {...makeProps({ initiative: 2, onRollRecorded })} />);
    const btn = findByLabel(tree, 'Roll initiative');
    if (btn?.props?.onPress) btn.props.onPress();
    const record = onRollRecorded.mock.calls[0][0];
    expect(record.breakdown).toContain('d20: 10');
    expect(record.breakdown).toContain('Initiative: +2');
  });

  it('marks isCrit true on natural 20', () => {
    mockRollD20.mockReturnValue(20);
    const onRollRecorded = jest.fn();
    const { tree } = render(<InitiativeRow {...makeProps({ onRollRecorded })} />);
    const btn = findByLabel(tree, 'Roll initiative');
    if (btn?.props?.onPress) btn.props.onPress();
    const record = onRollRecorded.mock.calls[0][0];
    expect(record.isCrit).toBe(true);
    expect(record.isCritFail).toBe(false);
  });

  it('marks isCritFail true on natural 1', () => {
    mockRollD20.mockReturnValue(1);
    const onRollRecorded = jest.fn();
    const { tree } = render(<InitiativeRow {...makeProps({ onRollRecorded })} />);
    const btn = findByLabel(tree, 'Roll initiative');
    if (btn?.props?.onPress) btn.props.onPress();
    const record = onRollRecorded.mock.calls[0][0];
    expect(record.isCritFail).toBe(true);
    expect(record.isCrit).toBe(false);
  });

  it('is findable by testID', () => {
    const { getByTestId } = render(<InitiativeRow {...makeProps()} testID="initiative-row" />);
    expect(getByTestId('initiative-row')).toBeTruthy();
  });
});
