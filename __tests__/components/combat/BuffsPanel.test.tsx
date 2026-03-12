import React from 'react';
import { render, fireEvent } from '../../helpers/testUtils';
import { BuffsPanel } from '@/components/combat/BuffsPanel';
import { Buff, SavedBuff } from '@/types/buff';
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

function makeSavedBuff(overrides: Partial<SavedBuff> = {}): SavedBuff {
  return {
    id: 'bless',
    name: 'Bless',
    description: '+1 morale on attacks',
    source: 'Cleric 1',
    category: 'Spell',
    bonusType: BonusType.MORALE,
    duration: 10,
    durationType: 'rounds',
    effects: [],
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
});
