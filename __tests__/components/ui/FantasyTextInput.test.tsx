import React from 'react';
import { render } from '../../helpers/testUtils';
import { FantasyTextInput } from '@/components/ui/FantasyTextInput';

describe('FantasyTextInput', () => {
  const defaultProps = {
    value: '',
    onChangeText: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should render with label', () => {
    const { getByText } = render(<FantasyTextInput {...defaultProps} label="Character Name" />);
    expect(getByText('Character Name')).toBeTruthy();
  });

  test('should render without label when omitted', () => {
    const { queryByText } = render(
      <FantasyTextInput {...defaultProps} placeholder="Enter name..." />,
    );
    expect(queryByText('Character Name')).toBeNull();
  });

  test('should render placeholder text on the input', () => {
    const { getByTestId } = render(
      <FantasyTextInput {...defaultProps} testID="name-input" placeholder="Enter name..." />,
    );
    const input = getByTestId('name-input');
    expect(input.props.placeholder).toBe('Enter name...');
  });

  test('should show error message when error prop is provided', () => {
    const { getByText } = render(
      <FantasyTextInput {...defaultProps} label="Email" error="Invalid email address" />,
    );
    expect(getByText('Invalid email address')).toBeTruthy();
  });

  test('should not show error when error prop is not provided', () => {
    const { queryByText } = render(<FantasyTextInput {...defaultProps} label="Email" />);
    expect(queryByText('Invalid email address')).toBeNull();
  });

  test('should pass onChangeText through to the input via onChange', () => {
    const onChangeText = jest.fn();
    const { getByTestId } = render(
      <FantasyTextInput {...defaultProps} testID="name-input" onChangeText={onChangeText} />,
    );
    const input = getByTestId('name-input');
    // The TextInput mock remaps onChangeText to onChange
    expect(input.props.onChange).toBeDefined();
    input.props.onChange({ nativeEvent: { text: 'Gandalf' } });
    expect(onChangeText).toHaveBeenCalledWith('Gandalf');
  });

  test('should have accessibility label from label prop by default', () => {
    const { getByTestId } = render(
      <FantasyTextInput {...defaultProps} testID="name-input" label="Character Name" />,
    );
    const input = getByTestId('name-input');
    expect(input.props.accessibilityLabel).toBe('Character Name');
  });

  test('should use custom accessibility label when provided', () => {
    const { getByTestId } = render(
      <FantasyTextInput
        {...defaultProps}
        testID="name-input"
        label="Name"
        accessibilityLabel="Enter your character name"
      />,
    );
    const input = getByTestId('name-input');
    expect(input.props.accessibilityLabel).toBe('Enter your character name');
  });
});
