import React from 'react';
import { render } from '../../helpers/testUtils';
import { BuffsPanel } from '@/components/combat/BuffsPanel';
import { Buff } from '@/types/buff';
import { BonusType } from '@/types/base';

function makeBuff(overrides: Partial<Buff> = {}): Buff {
  return {
    id: 'bless',
    name: 'Bless',
    source: 'Cleric',
    bonusType: BonusType.MORALE,
    duration: 10,
    durationType: 'rounds',
    effects: [],
    isActive: true,
    ...overrides,
  };
}

function makeProps(overrides = {}) {
  return {
    activeBuffs: [],
    buffLibrary: [],
    round: 1,
    onAddBuff: jest.fn(),
    onRemoveBuff: jest.fn(),
    onToggleBuff: jest.fn(),
    onSaveToLibrary: jest.fn(),
    onStartTurn: jest.fn(),
    onEndTurn: jest.fn(),
    ...overrides,
  };
}

describe('BuffsPanel', () => {
  it('shows empty state when no buffs active', () => {
    const { getByText } = render(<BuffsPanel {...makeProps()} />);
    expect(getByText('No active buffs')).toBeTruthy();
  });

  it('renders active buff names', () => {
    const buffs = [
      makeBuff({ id: 'bless', name: 'Bless' }),
      makeBuff({ id: 'haste', name: 'Haste' }),
    ];
    const { getByText } = render(<BuffsPanel {...makeProps({ activeBuffs: buffs })} />);
    expect(getByText('Bless')).toBeTruthy();
    expect(getByText('Haste')).toBeTruthy();
  });

  it('shows + From Library button', () => {
    const { getByText } = render(<BuffsPanel {...makeProps()} />);
    expect(getByText('+ From Library')).toBeTruthy();
  });

  it('shows + Custom button', () => {
    const { getByText } = render(<BuffsPanel {...makeProps()} />);
    expect(getByText('+ Custom')).toBeTruthy();
  });

  it('is findable by testID', () => {
    const { getByTestId } = render(<BuffsPanel {...makeProps()} testID="buffs-panel" />);
    expect(getByTestId('buffs-panel')).toBeTruthy();
  });

  it('shows Start Turn button', () => {
    const { getByText } = render(<BuffsPanel {...makeProps()} />);
    expect(getByText('Start Turn')).toBeTruthy();
  });

  it('shows End Turn button', () => {
    const { getByText } = render(<BuffsPanel {...makeProps()} />);
    expect(getByText('End Turn')).toBeTruthy();
  });

  it('calls onStartTurn when Start Turn is pressed', () => {
    const onStartTurn = jest.fn();
    const { getByLabelText } = render(<BuffsPanel {...makeProps({ onStartTurn })} />);
    getByLabelText('Start Turn').props.onPress();
    expect(onStartTurn).toHaveBeenCalledTimes(1);
  });

  it('calls onEndTurn when End Turn is pressed', () => {
    const onEndTurn = jest.fn();
    const { getByLabelText } = render(<BuffsPanel {...makeProps({ onEndTurn })} />);
    getByLabelText('End Turn').props.onPress();
    expect(onEndTurn).toHaveBeenCalledTimes(1);
  });
});
