import React from 'react';
import { render } from '../../helpers/testUtils';
import { RollResultDisplay } from '@/components/dice/RollResultDisplay';
import { RollRecord } from '@/types/buff';

function makeRecord(overrides: Partial<RollRecord> = {}): RollRecord {
  return {
    id: 'rec_1',
    timestamp: Date.now(),
    type: 'attack',
    label: 'Melee Attack',
    diceNotation: '1d20+9',
    rawRoll: 14,
    modifier: 9,
    total: 23,
    breakdown: ['d20: 14', 'BAB: +6', 'STR: +3'],
    isManual: false,
    ...overrides,
  };
}

describe('RollResultDisplay', () => {
  it('renders label and total', () => {
    const { getByText } = render(<RollResultDisplay record={makeRecord()} />);
    expect(getByText('Melee Attack')).toBeTruthy();
    expect(getByText('23')).toBeTruthy();
  });

  it('shows CRITICAL badge for crit roll', () => {
    const record = makeRecord({ isCrit: true, rawRoll: 20, total: 29 });
    const { getByText } = render(<RollResultDisplay record={record} />);
    expect(getByText('CRITICAL!')).toBeTruthy();
  });

  it('shows FUMBLE badge for crit fail', () => {
    const record = makeRecord({ isCritFail: true, rawRoll: 1, total: 10 });
    const { getByText } = render(<RollResultDisplay record={record} />);
    expect(getByText('FUMBLE')).toBeTruthy();
  });

  it('shows dice notation', () => {
    const { getByText } = render(<RollResultDisplay record={makeRecord()} />);
    expect(getByText('1d20+9')).toBeTruthy();
  });

  it('shows breakdown toggle when breakdown has multiple lines', () => {
    const { getByText } = render(<RollResultDisplay record={makeRecord()} />);
    expect(getByText('Show breakdown ▼')).toBeTruthy();
  });

  it('does not show breakdown toggle for single-line breakdown', () => {
    const record = makeRecord({ breakdown: ['d20: 14'] });
    const { queryByText } = render(<RollResultDisplay record={record} />);
    expect(queryByText('Show breakdown ▼')).toBeNull();
  });

  it('compact mode renders label and total inline', () => {
    const { getByText } = render(<RollResultDisplay record={makeRecord()} compact />);
    expect(getByText('Melee Attack')).toBeTruthy();
    expect(getByText('23')).toBeTruthy();
  });

  it('is findable by testID', () => {
    const { getByTestId } = render(
      <RollResultDisplay record={makeRecord()} testID="roll-result" />,
    );
    expect(getByTestId('roll-result')).toBeTruthy();
  });
});
