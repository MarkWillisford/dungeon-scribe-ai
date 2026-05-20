import React from 'react';
import { render, type RenderedNode } from '../../helpers/testUtils';
import { HPTracker } from '@/components/combat/HPTracker';

function makeProps(overrides = {}) {
  return {
    currentHP: 20,
    maxHP: 30,
    tempHP: 0,
    nonlethalDamage: 0,
    conScore: 14,
    isStaggered: false,
    staggeredAutoApplied: false,
    onAdjustHP: jest.fn(),
    onAddTempHP: jest.fn(),
    onAdjustNonlethal: jest.fn(),
    onToggleStaggered: jest.fn(),
    ...overrides,
  };
}

describe('HPTracker', () => {
  it('renders current and max HP', () => {
    const { getByText } = render(<HPTracker {...makeProps()} />);
    expect(getByText('20')).toBeTruthy();
    expect(getByText('30')).toBeTruthy();
  });

  it('shows Healthy state when above half HP', () => {
    const { getByText } = render(<HPTracker {...makeProps({ currentHP: 20, maxHP: 30 })} />);
    expect(getByText('Healthy')).toBeTruthy();
  });

  it('shows Wounded state when at or below half HP', () => {
    const { getByText } = render(<HPTracker {...makeProps({ currentHP: 15, maxHP: 30 })} />);
    expect(getByText('Wounded')).toBeTruthy();
  });

  it('shows Disabled at 0 HP', () => {
    const { getByText } = render(<HPTracker {...makeProps({ currentHP: 0, maxHP: 30 })} />);
    expect(getByText('Disabled')).toBeTruthy();
  });

  it('shows Dying at negative HP', () => {
    const { getByText } = render(<HPTracker {...makeProps({ currentHP: -3, maxHP: 30 })} />);
    expect(getByText('Dying')).toBeTruthy();
  });

  it('shows Dead when HP <= -CON', () => {
    const { getByText } = render(
      <HPTracker {...makeProps({ currentHP: -14, maxHP: 30, conScore: 14 })} />,
    );
    expect(getByText('Dead')).toBeTruthy();
  });

  it('shows temp HP badge when tempHP > 0', () => {
    const { getByText } = render(<HPTracker {...makeProps({ tempHP: 5 })} />);
    expect(getByText('+5 temp')).toBeTruthy();
  });

  it('shows nonlethal damage indicator', () => {
    const { getByText } = render(<HPTracker {...makeProps({ nonlethalDamage: 8 })} />);
    expect(getByText('Nonlethal: 8')).toBeTruthy();
  });

  it('shows Unconscious when nonlethal exceeds max HP', () => {
    const { getByText } = render(
      <HPTracker {...makeProps({ currentHP: 20, maxHP: 30, nonlethalDamage: 31 })} />,
    );
    expect(getByText('Unconscious')).toBeTruthy();
  });

  it('shows staggered badge when isStaggered is true', () => {
    const { getByText } = render(<HPTracker {...makeProps({ isStaggered: true })} />);
    expect(getByText('Staggered')).toBeTruthy();
  });

  it('shows auto label when staggeredAutoApplied is true', () => {
    const { getByText } = render(
      <HPTracker {...makeProps({ isStaggered: true, staggeredAutoApplied: true })} />,
    );
    expect(getByText('Staggered (auto)')).toBeTruthy();
  });

  it('shows Disabled (not Unconscious) when currentHP is 0 and nonlethal exceeds max HP', () => {
    const { getByText } = render(
      <HPTracker {...makeProps({ currentHP: 0, maxHP: 30, nonlethalDamage: 31 })} />,
    );
    expect(getByText('Disabled')).toBeTruthy();
  });

  it('calls onToggleStaggered when stagger badge is pressed', () => {
    const onToggleStaggered = jest.fn();
    const { tree } = render(<HPTracker {...makeProps({ isStaggered: true, onToggleStaggered })} />);
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
    const badge = findByLabel(tree, 'Staggered — tap to clear');
    expect(badge).toBeTruthy();
    if (badge?.props?.onPress) badge.props.onPress();
    expect(onToggleStaggered).toHaveBeenCalledTimes(1);
  });

  it('quick damage button calls onAdjustHP with damage amount', () => {
    const onAdjustHP = jest.fn();
    const { tree } = render(<HPTracker {...makeProps({ onAdjustHP })} />);
    // Find the Pressable by accessibilityLabel to avoid substring ambiguity
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
    const btn = findByLabel(tree, 'Take 1 damage');
    expect(btn).toBeTruthy();
    if (btn?.props?.onPress) btn.props.onPress();
    expect(onAdjustHP).toHaveBeenCalledWith(-1);
  });

  it('quick heal button calls onAdjustHP with heal amount', () => {
    const onAdjustHP = jest.fn();
    const { tree } = render(<HPTracker {...makeProps({ onAdjustHP })} />);
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
    const btn = findByLabel(tree, 'Heal 5 hit points');
    expect(btn).toBeTruthy();
    if (btn?.props?.onPress) btn.props.onPress();
    expect(onAdjustHP).toHaveBeenCalledWith(5);
  });

  it('is findable by testID', () => {
    const { getByTestId } = render(<HPTracker {...makeProps()} testID="hp-tracker" />);
    expect(getByTestId('hp-tracker')).toBeTruthy();
  });
});
