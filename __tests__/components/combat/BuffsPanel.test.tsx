import React from 'react';
import { fireEvent, render, setHookStateAt, type RenderedNode } from '../../helpers/testUtils';
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

function makeLibraryBuff(overrides: Partial<SavedBuff> = {}): SavedBuff {
  return {
    id: 'haste',
    name: 'Haste',
    description: '+1 attack, +1 AC, +1 Reflex, 30ft speed, extra attack',
    source: 'Wizard 3',
    category: 'Spell',
    bonusType: BonusType.ENHANCEMENT,
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
    activeConditions: [],
    onAddBuff: jest.fn(),
    onRemoveBuff: jest.fn(),
    onToggleBuff: jest.fn(),
    onSaveToLibrary: jest.fn(),
    onToggleCondition: jest.fn(),
    onStartTurn: jest.fn(),
    onEndTurn: jest.fn(),
    ...overrides,
  };
}

function findByLabel(tree: RenderedNode, label: string): RenderedNode | null {
  if (tree.props.accessibilityLabel === label) return tree;
  for (const child of tree.children) {
    if (typeof child !== 'string') {
      const found = findByLabel(child, label);
      if (found) return found;
    }
  }
  return null;
}

function findAllByLabel(tree: RenderedNode, label: string): RenderedNode[] {
  const results: RenderedNode[] = [];
  if (tree.props.accessibilityLabel === label) results.push(tree);
  for (const child of tree.children) {
    if (typeof child !== 'string') {
      results.push(...findAllByLabel(child, label));
    }
  }
  return results;
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

  // ---- Buff toggle ----

  it('calls onToggleBuff when Pause/Resume is pressed on an active buff', () => {
    const onToggleBuff = jest.fn();
    const buff = makeBuff({ id: 'bless', name: 'Bless', isActive: true });
    const { getByLabelText, rerender } = render(
      <BuffsPanel {...makeProps({ activeBuffs: [buff], onToggleBuff })} />,
    );
    // Expand the buff card first — state change requires rerender
    fireEvent.press(getByLabelText('Bless buff details'));
    const expandedTree = rerender();
    const deactivateBtn = findByLabel(expandedTree, 'Deactivate Bless');
    expect(deactivateBtn).toBeTruthy();
    fireEvent.press(deactivateBtn!);
    expect(onToggleBuff).toHaveBeenCalledWith('bless');
  });

  it('shows Resume label when buff is inactive', () => {
    const buff = makeBuff({ id: 'bless', name: 'Bless', isActive: false });
    const { getByLabelText, rerender } = render(
      <BuffsPanel {...makeProps({ activeBuffs: [buff] })} />,
    );
    fireEvent.press(getByLabelText('Bless buff details'));
    const expandedTree = rerender();
    expect(findByLabel(expandedTree, 'Activate Bless')).toBeTruthy();
  });

  // ---- Condition toggles ----

  it('renders condition toggle buttons', () => {
    const { getByLabelText } = render(<BuffsPanel {...makeProps()} />);
    expect(getByLabelText('Toggle Shaken condition')).toBeTruthy();
    expect(getByLabelText('Toggle Frightened condition')).toBeTruthy();
    expect(getByLabelText('Toggle Fatigued condition')).toBeTruthy();
    expect(getByLabelText('Toggle Sickened condition')).toBeTruthy();
    expect(getByLabelText('Toggle Stunned condition')).toBeTruthy();
    expect(getByLabelText('Toggle Staggered condition')).toBeTruthy();
  });

  it('calls onToggleCondition when a condition button is pressed', () => {
    const onToggleCondition = jest.fn();
    const { getByLabelText } = render(<BuffsPanel {...makeProps({ onToggleCondition })} />);
    fireEvent.press(getByLabelText('Toggle Shaken condition'));
    expect(onToggleCondition).toHaveBeenCalledWith('Shaken');
  });

  it('marks a condition as selected when it is in activeConditions', () => {
    const { getByLabelText } = render(
      <BuffsPanel {...makeProps({ activeConditions: ['Shaken'] })} />,
    );
    const btn = getByLabelText('Toggle Shaken condition');
    expect(btn.props.accessibilityState?.selected).toBe(true);
  });

  it('marks a condition as not selected when not in activeConditions', () => {
    const { getByLabelText } = render(<BuffsPanel {...makeProps({ activeConditions: [] })} />);
    const btn = getByLabelText('Toggle Shaken condition');
    expect(btn.props.accessibilityState?.selected).toBe(false);
  });

  // ---- External spell quick-add (library search) ----

  it('shows search input in library modal when open', () => {
    const { rerender } = render(<BuffsPanel {...makeProps()} />);
    // showLibrary is hook slot 0 — open the modal
    setHookStateAt(0, true);
    const updatedTree = rerender();
    const searchInput = findByLabel(updatedTree, 'Search buff library');
    expect(searchInput).toBeTruthy();
  });

  it('adds spell from library as active buff', () => {
    const onAddBuff = jest.fn();
    const library = [makeLibraryBuff({ id: 'haste', name: 'Haste' })];
    const { getByLabelText, rerender } = render(
      <BuffsPanel {...makeProps({ buffLibrary: library, onAddBuff })} />,
    );
    // Open library modal — state change requires rerender
    fireEvent.press(getByLabelText('Add buff from library'));
    const modalTree = rerender();
    const addHasteBtn = findByLabel(modalTree, 'Add Haste');
    expect(addHasteBtn).toBeTruthy();
    fireEvent.press(addHasteBtn!);
    expect(onAddBuff).toHaveBeenCalledWith(
      expect.objectContaining({ name: 'Haste', isActive: true }),
    );
  });

  it('filters library items by search text', () => {
    const library = [
      makeLibraryBuff({ id: 'haste', name: 'Haste' }),
      makeLibraryBuff({ id: 'bless', name: 'Bless', category: 'Spell' }),
    ];
    const { rerender } = render(<BuffsPanel {...makeProps({ buffLibrary: library })} />);
    // Open library (slot 0) and set search text (slot 5)
    setHookStateAt(0, true);
    setHookStateAt(5, 'haste');
    const updatedTree = rerender();
    // Should show Haste but not Bless
    expect(findByLabel(updatedTree, 'Add Haste')).toBeTruthy();
    expect(findAllByLabel(updatedTree, 'Add Bless')).toHaveLength(0);
  });
});
