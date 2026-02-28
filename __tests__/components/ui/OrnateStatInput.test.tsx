import React from 'react';
import { render, fireEvent } from '../../helpers/testUtils';
import { OrnateStatInput } from '@/components/ui/OrnateStatInput';

describe('OrnateStatInput', () => {
  const defaultProps = {
    label: 'Strength',
    value: 10,
    onIncrement: jest.fn(),
    onDecrement: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should render label and value', () => {
    const { getByText, getAllText } = render(<OrnateStatInput {...defaultProps} />);
    expect(getByText('Strength')).toBeTruthy();
    expect(getAllText()).toContain('10');
  });

  test('should show positive modifier with plus sign', () => {
    const { getAllText } = render(<OrnateStatInput {...defaultProps} modifier={2} />);
    expect(getAllText()).toContain('+2');
  });

  test('should show negative modifier with minus sign', () => {
    const { getAllText } = render(<OrnateStatInput {...defaultProps} modifier={-1} />);
    expect(getAllText()).toContain('-1');
  });

  test('should call onIncrement when plus button is pressed', () => {
    const onIncrement = jest.fn();
    const { getAllByRole } = render(
      <OrnateStatInput {...defaultProps} onIncrement={onIncrement} />,
    );
    const buttons = getAllByRole('button');
    // Increment button is the second button (after decrement)
    const incrementButton = buttons.find((b) => b.props.accessibilityLabel === 'Increase Strength');
    expect(incrementButton).toBeTruthy();
    fireEvent.press(incrementButton!);
    expect(onIncrement).toHaveBeenCalledTimes(1);
  });

  test('should call onDecrement when minus button is pressed', () => {
    const onDecrement = jest.fn();
    const { getAllByRole } = render(
      <OrnateStatInput {...defaultProps} onDecrement={onDecrement} />,
    );
    const buttons = getAllByRole('button');
    const decrementButton = buttons.find((b) => b.props.accessibilityLabel === 'Decrease Strength');
    expect(decrementButton).toBeTruthy();
    fireEvent.press(decrementButton!);
    expect(onDecrement).toHaveBeenCalledTimes(1);
  });

  test('should disable decrement at min value', () => {
    const onDecrement = jest.fn();
    const { getAllByRole } = render(
      <OrnateStatInput {...defaultProps} value={1} min={1} onDecrement={onDecrement} />,
    );
    const buttons = getAllByRole('button');
    const decrementButton = buttons.find((b) => b.props.accessibilityLabel === 'Decrease Strength');
    expect(decrementButton).toBeTruthy();
    fireEvent.press(decrementButton!);
    expect(onDecrement).not.toHaveBeenCalled();
  });

  test('should disable increment at max value', () => {
    const onIncrement = jest.fn();
    const { getAllByRole } = render(
      <OrnateStatInput {...defaultProps} value={30} max={30} onIncrement={onIncrement} />,
    );
    const buttons = getAllByRole('button');
    const incrementButton = buttons.find((b) => b.props.accessibilityLabel === 'Increase Strength');
    expect(incrementButton).toBeTruthy();
    fireEvent.press(incrementButton!);
    expect(onIncrement).not.toHaveBeenCalled();
  });

  test('should have accessibility labels on buttons', () => {
    const { getAllByRole } = render(<OrnateStatInput {...defaultProps} />);
    const buttons = getAllByRole('button');
    const labels = buttons.map((b) => b.props.accessibilityLabel);
    expect(labels).toContain('Decrease Strength');
    expect(labels).toContain('Increase Strength');
  });
});
