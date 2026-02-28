import React from 'react';
import { render, fireEvent } from '../../helpers/testUtils';
import { OrnateButton } from '@/components/ui/OrnateButton';

describe('OrnateButton', () => {
  test('should render with title', () => {
    const { getByText } = render(<OrnateButton title="Test Button" onPress={() => {}} />);
    expect(getByText('Test Button')).toBeTruthy();
  });

  test('should call onPress when pressed', () => {
    const onPress = jest.fn();
    const { getByRole } = render(<OrnateButton title="Press Me" onPress={onPress} />);
    fireEvent.press(getByRole('button'));
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  test('should not call onPress when disabled', () => {
    const onPress = jest.fn();
    const { getByRole } = render(<OrnateButton title="Disabled" onPress={onPress} disabled />);
    fireEvent.press(getByRole('button'));
    expect(onPress).not.toHaveBeenCalled();
  });

  test('should render with primary variant by default', () => {
    const { getByText } = render(<OrnateButton title="Primary" onPress={() => {}} />);
    expect(getByText('Primary')).toBeTruthy();
  });

  test('should have accessibility attributes', () => {
    const { getByRole } = render(
      <OrnateButton
        title="Accessible"
        onPress={() => {}}
        accessibilityLabel="Custom Label"
        accessibilityHint="Custom Hint"
      />,
    );
    const button = getByRole('button');
    expect(button.props.accessibilityLabel).toBe('Custom Label');
    expect(button.props.accessibilityHint).toBe('Custom Hint');
  });

  test('should show disabled accessibility state when disabled', () => {
    const { getByRole } = render(<OrnateButton title="Disabled" onPress={() => {}} disabled />);
    const button = getByRole('button');
    expect(button.props.accessibilityState).toEqual({ disabled: true });
  });
});
