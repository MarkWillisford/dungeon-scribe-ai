import React from 'react';
import { render, fireEvent, getAllText } from '../../helpers/testUtils';
import { PickerField } from '@/components/ui/PickerField';

describe('PickerField', () => {
  const defaultProps = {
    label: 'Race',
    value: '',
    onPress: jest.fn(),
  };

  beforeEach(() => jest.clearAllMocks());

  test('renders its label', () => {
    const { getByText } = render(<PickerField {...defaultProps} />);
    expect(getByText('Race')).toBeTruthy();
  });

  test('shows the selected value', () => {
    const { getByText } = render(<PickerField {...defaultProps} value="Half-Elf" />);
    expect(getByText('Half-Elf')).toBeTruthy();
  });

  test('shows the placeholder when nothing is selected', () => {
    const { getByText } = render(
      <PickerField {...defaultProps} placeholder="Tap to select race..." />,
    );
    expect(getByText('Tap to select race...')).toBeTruthy();
  });

  test('opens the picker when pressed', () => {
    const onPress = jest.fn();
    const { getByTestId } = render(
      <PickerField {...defaultProps} onPress={onPress} testID="identity-race" />,
    );
    fireEvent.press(getByTestId('identity-race'));
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  test('marks a required field and warns while it is unset', () => {
    // Race was easy to skip entirely, and it drives ability mods, size, speed
    // and racial traits across the sheet (#365).
    const rendered = render(<PickerField {...defaultProps} required />);
    const text = getAllText(rendered.tree);
    expect(text.some((t) => t.includes('Race *'))).toBe(true);
    expect(text.some((t) => t.includes('Required'))).toBe(true);
  });

  test('drops the warning once a required field is filled', () => {
    const rendered = render(<PickerField {...defaultProps} required value="Half-Elf" />);
    expect(getAllText(rendered.tree).some((t) => t.includes('Required'))).toBe(false);
  });

  test('treats whitespace as unset', () => {
    const rendered = render(<PickerField {...defaultProps} required value="   " />);
    expect(getAllText(rendered.tree).some((t) => t.includes('Required'))).toBe(true);
  });

  test('does not mark an optional field', () => {
    const rendered = render(<PickerField {...defaultProps} label="Deity" />);
    const text = getAllText(rendered.tree);
    expect(text.some((t) => t.includes('Deity *'))).toBe(false);
    expect(text.some((t) => t.includes('Required'))).toBe(false);
  });

  test('describes its current state to screen readers', () => {
    const { getByLabelText } = render(
      <PickerField {...defaultProps} value="Half-Elf" testID="identity-race" />,
    );
    expect(getByLabelText('Race: Half-Elf. Tap to change.')).toBeTruthy();
  });

  test('says so when nothing is set', () => {
    const { getByLabelText } = render(<PickerField {...defaultProps} />);
    expect(getByLabelText('Race: not set. Tap to change.')).toBeTruthy();
  });

  test('offers a chevron instead of search when asked', () => {
    const rendered = render(<PickerField {...defaultProps} label="Ruleset" affordance="chevron" />);
    const text = getAllText(rendered.tree);
    expect(text.some((t) => t.includes('›'))).toBe(true);
    expect(text.some((t) => t.includes('🔍'))).toBe(false);
  });
});
