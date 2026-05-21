import React from 'react';
import { render, fireEvent, setHookStateAt } from '../../helpers/testUtils';
import { DamageInputPanel } from '@/components/combat/DamageInputPanel';
import type { CharacterResistances } from '@services/DamageResolutionService';

const noResistances: CharacterResistances = { dr: [], energyResistance: {} };

const withFireResistance: CharacterResistances = {
  dr: [],
  energyResistance: { fire: 10 },
};

const withDRMagic: CharacterResistances = {
  dr: [{ amount: 5, bypass: 'magic' }],
  energyResistance: {},
};

const withDRAndResistance: CharacterResistances = {
  dr: [{ amount: 5, bypass: 'magic' }],
  energyResistance: { cold: 5 },
};

function makeProps(overrides: Partial<React.ComponentProps<typeof DamageInputPanel>> = {}) {
  return {
    resistances: noResistances,
    onApplyDamage: jest.fn(),
    testID: 'damage-panel',
    ...overrides,
  };
}

describe('DamageInputPanel', () => {
  describe('without DR or resistance', () => {
    it('renders damage amount input', () => {
      const { getByTestId } = render(<DamageInputPanel {...makeProps()} />);
      expect(getByTestId('damage-panel-amount-input')).toBeTruthy();
    });

    it('does not render damage type selector', () => {
      const { queryByTestId } = render(<DamageInputPanel {...makeProps()} />);
      expect(queryByTestId('damage-panel-type-selector')).toBeNull();
    });

    it('calls onApplyDamage with raw amount when applied', () => {
      const onApplyDamage = jest.fn();
      const { getByTestId, rerender } = render(
        <DamageInputPanel {...makeProps({ onApplyDamage })} />,
      );

      // Set amount state to "8"
      const input = getByTestId('damage-panel-amount-input');
      fireEvent.changeText(input, '8');
      setHookStateAt(0, '8');

      const updated = rerender();
      const applyBtn =
        updated.props.testID === 'damage-panel-apply-btn'
          ? updated
          : findByTestId(updated, 'damage-panel-apply-btn');
      if (applyBtn?.props?.onPress) applyBtn.props.onPress();

      expect(onApplyDamage).toHaveBeenCalledWith(8);
    });
  });

  describe('with energy resistance', () => {
    it('renders damage type selector', () => {
      const { getByTestId } = render(
        <DamageInputPanel {...makeProps({ resistances: withFireResistance })} />,
      );
      expect(getByTestId('damage-panel-type-selector')).toBeTruthy();
    });

    it('shows fire type option', () => {
      const { getByTestId } = render(
        <DamageInputPanel {...makeProps({ resistances: withFireResistance })} />,
      );
      expect(getByTestId('damage-panel-type-fire')).toBeTruthy();
    });

    it('applies energy resistance when fire type selected', () => {
      const onApplyDamage = jest.fn();
      // amount = '15', selectedType = 'fire'
      const { getByTestId, rerender } = render(
        <DamageInputPanel {...makeProps({ resistances: withFireResistance, onApplyDamage })} />,
      );

      fireEvent.changeText(getByTestId('damage-panel-amount-input'), '15');
      setHookStateAt(0, '15');
      setHookStateAt(1, 'fire');

      const updated = rerender();
      const applyBtn = findByTestId(updated, 'damage-panel-apply-btn');
      if (applyBtn?.props?.onPress) applyBtn.props.onPress();

      // fire resistance 10: 15 - 10 = 5
      expect(onApplyDamage).toHaveBeenCalledWith(5);
    });

    it('applies raw amount when no type selected (skip)', () => {
      const onApplyDamage = jest.fn();
      const { getByTestId, rerender } = render(
        <DamageInputPanel {...makeProps({ resistances: withFireResistance, onApplyDamage })} />,
      );

      fireEvent.changeText(getByTestId('damage-panel-amount-input'), '12');
      setHookStateAt(0, '12');
      // selectedType stays null (slot 1 not changed)

      const updated = rerender();
      const applyBtn = findByTestId(updated, 'damage-panel-apply-btn');
      if (applyBtn?.props?.onPress) applyBtn.props.onPress();

      expect(onApplyDamage).toHaveBeenCalledWith(12);
    });
  });

  describe('with DR', () => {
    it('renders damage type selector', () => {
      const { getByTestId } = render(
        <DamageInputPanel {...makeProps({ resistances: withDRMagic })} />,
      );
      expect(getByTestId('damage-panel-type-selector')).toBeTruthy();
    });

    it('shows magic option for DR/magic', () => {
      const { getByTestId } = render(
        <DamageInputPanel {...makeProps({ resistances: withDRMagic })} />,
      );
      expect(getByTestId('damage-panel-type-magic')).toBeTruthy();
    });

    it('applies DR when non-bypassing type selected', () => {
      const onApplyDamage = jest.fn();
      const { getByTestId, rerender } = render(
        <DamageInputPanel {...makeProps({ resistances: withDRMagic, onApplyDamage })} />,
      );

      fireEvent.changeText(getByTestId('damage-panel-amount-input'), '10');
      // bludgeoning doesn't bypass DR/magic
      setHookStateAt(0, '10');
      setHookStateAt(1, 'bludgeoning');

      const updated = rerender();
      const applyBtn = findByTestId(updated, 'damage-panel-apply-btn');
      if (applyBtn?.props?.onPress) applyBtn.props.onPress();

      // DR 5/magic: 10 - 5 = 5
      expect(onApplyDamage).toHaveBeenCalledWith(5);
    });

    it('bypasses DR when magic type selected', () => {
      const onApplyDamage = jest.fn();
      const { getByTestId, rerender } = render(
        <DamageInputPanel {...makeProps({ resistances: withDRMagic, onApplyDamage })} />,
      );

      fireEvent.changeText(getByTestId('damage-panel-amount-input'), '10');
      setHookStateAt(0, '10');
      setHookStateAt(1, 'magic');

      const updated = rerender();
      const applyBtn = findByTestId(updated, 'damage-panel-apply-btn');
      if (applyBtn?.props?.onPress) applyBtn.props.onPress();

      expect(onApplyDamage).toHaveBeenCalledWith(10);
    });
  });

  describe('with both DR and resistance', () => {
    it('shows all relevant type options', () => {
      const { getByTestId } = render(
        <DamageInputPanel {...makeProps({ resistances: withDRAndResistance })} />,
      );
      expect(getByTestId('damage-panel-type-magic')).toBeTruthy();
      expect(getByTestId('damage-panel-type-cold')).toBeTruthy();
    });
  });

  describe('edge cases', () => {
    it('does not call onApplyDamage for zero or empty input', () => {
      const onApplyDamage = jest.fn();
      const { getByTestId, rerender } = render(
        <DamageInputPanel {...makeProps({ onApplyDamage })} />,
      );

      // amount stays empty (slot 0 stays '')
      const updated = rerender();
      const applyBtn = findByTestId(updated, 'damage-panel-apply-btn');
      if (applyBtn?.props?.onPress) applyBtn.props.onPress();

      expect(onApplyDamage).not.toHaveBeenCalled();
    });

    it('does not call onApplyDamage for negative input', () => {
      const onApplyDamage = jest.fn();
      const { getByTestId, rerender } = render(
        <DamageInputPanel {...makeProps({ onApplyDamage })} />,
      );

      fireEvent.changeText(getByTestId('damage-panel-amount-input'), '-5');
      setHookStateAt(0, '-5');

      const updated = rerender();
      const applyBtn = findByTestId(updated, 'damage-panel-apply-btn');
      if (applyBtn?.props?.onPress) applyBtn.props.onPress();

      expect(onApplyDamage).not.toHaveBeenCalled();
    });
  });
});

// --- helper ---

function findByTestId(
  node: import('../../helpers/testUtils').RenderedNode,
  testId: string,
): import('../../helpers/testUtils').RenderedNode | null {
  if (node.props?.testID === testId) return node;
  for (const child of node.children ?? []) {
    if (typeof child !== 'string') {
      const found = findByTestId(child, testId);
      if (found) return found;
    }
  }
  return null;
}
