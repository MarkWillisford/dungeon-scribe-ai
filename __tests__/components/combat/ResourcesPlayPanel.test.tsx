import React from 'react';
import { render } from '../../helpers/testUtils';
import { ResourcesPlayPanel } from '@/components/combat/ResourcesPlayPanel';
import type { ResourcePool } from '@/types/resources';

function makePool(overrides: Partial<ResourcePool> = {}): ResourcePool {
  return {
    id: 'ki',
    name: 'Ki Points',
    current: 8,
    max: 8,
    baseMax: 8,
    contributions: [],
    rechargeOn: 'rest',
    restRecoveryMode: 'full',
    ...overrides,
  };
}

function makeProps(overrides: Partial<Parameters<typeof ResourcesPlayPanel>[0]> = {}) {
  return {
    pools: [makePool()],
    currentValues: { ki: 8 },
    onDecrementPool: jest.fn(),
    onNewEncounter: jest.fn(),
    showNewEncounterButton: false,
    ...overrides,
  };
}

describe('ResourcesPlayPanel', () => {
  it('renders pool rows with correct current and max values', () => {
    const { getByText } = render(
      <ResourcesPlayPanel {...makeProps({ currentValues: { ki: 5 } })} />,
    );
    expect(getByText('5 / 8')).toBeTruthy();
  });

  it('renders pool name', () => {
    const { getByText } = render(<ResourcesPlayPanel {...makeProps()} />);
    expect(getByText('Ki Points')).toBeTruthy();
  });

  it('renders multiple pools', () => {
    const pools = [
      makePool({ id: 'ki', name: 'Ki Points', max: 8 }),
      makePool({ id: 'rage', name: 'Rage Rounds', max: 12 }),
    ];
    const { getByText } = render(
      <ResourcesPlayPanel {...makeProps({ pools, currentValues: { ki: 8, rage: 12 } })} />,
    );
    expect(getByText('Ki Points')).toBeTruthy();
    expect(getByText('Rage Rounds')).toBeTruthy();
    expect(getByText('8 / 8')).toBeTruthy();
    expect(getByText('12 / 12')).toBeTruthy();
  });

  it('falls back to pool max when current value not tracked in Redux', () => {
    const { getByText } = render(<ResourcesPlayPanel {...makeProps({ currentValues: {} })} />);
    expect(getByText('8 / 8')).toBeTruthy();
  });

  it('calls onDecrementPool with amount 1 on press', () => {
    const onDecrementPool = jest.fn();
    const { tree } = render(<ResourcesPlayPanel {...makeProps({ onDecrementPool })} />);
    const btn = findByLabel(tree, 'Spend 1 Ki Points');
    expect(btn).toBeTruthy();
    if (btn?.props?.onPress) btn.props.onPress();
    expect(onDecrementPool).toHaveBeenCalledWith('ki', 1);
  });

  it('shows custom input row on long-press', () => {
    const { tree, rerender } = render(<ResourcesPlayPanel {...makeProps()} />);
    const btn = findByLabel(tree, 'Spend 1 Ki Points');
    expect(btn).toBeTruthy();
    if (btn?.props?.onLongPress) btn.props.onLongPress();
    const updated = rerender();
    const customInput = findByLabel(updated, 'Custom decrement amount for Ki Points');
    expect(customInput).toBeTruthy();
  });

  it('shows New Encounter button when showNewEncounterButton is true', () => {
    const { getByText } = render(
      <ResourcesPlayPanel {...makeProps({ showNewEncounterButton: true })} />,
    );
    expect(getByText('New Encounter')).toBeTruthy();
  });

  it('hides New Encounter button when showNewEncounterButton is false', () => {
    const { queryByText } = render(
      <ResourcesPlayPanel {...makeProps({ showNewEncounterButton: false })} />,
    );
    expect(queryByText('New Encounter')).toBeNull();
  });

  it('calls onNewEncounter when button is pressed', () => {
    const onNewEncounter = jest.fn();
    const { getByLabelText } = render(
      <ResourcesPlayPanel {...makeProps({ showNewEncounterButton: true, onNewEncounter })} />,
    );
    const btn = getByLabelText('New Encounter');
    if (btn.props.onPress) btn.props.onPress();
    expect(onNewEncounter).toHaveBeenCalledTimes(1);
  });

  it('shows empty state message when no pools', () => {
    const { getByText } = render(
      <ResourcesPlayPanel {...makeProps({ pools: [], currentValues: {} })} />,
    );
    expect(getByText('No resource pools defined')).toBeTruthy();
  });

  it('is findable by testID', () => {
    const { getByTestId } = render(
      <ResourcesPlayPanel {...makeProps()} testID="resources-panel" />,
    );
    expect(getByTestId('resources-panel')).toBeTruthy();
  });
});

// ----------------------------------------------------------------
// Helpers
// ----------------------------------------------------------------

import type { RenderedNode } from '../../helpers/testUtils';

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
