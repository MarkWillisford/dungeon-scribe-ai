import React from 'react';
import { render, fireEvent, getAllText } from '../../helpers/testUtils';
import { ListFilterInput } from '@/components/ui/ListFilterInput';

describe('ListFilterInput', () => {
  const defaultProps = {
    value: '',
    onChangeText: jest.fn(),
  };

  beforeEach(() => jest.clearAllMocks());

  test('reports what the user types', () => {
    const onChangeText = jest.fn();
    const { getByTestId } = render(
      <ListFilterInput {...defaultProps} onChangeText={onChangeText} testID="race-filter" />,
    );
    fireEvent.changeText(getByTestId('race-filter'), 'elf');
    expect(onChangeText).toHaveBeenCalledWith('elf');
  });

  test('shows the match count while filtering', () => {
    const rendered = render(<ListFilterInput {...defaultProps} value="elf" resultCount={4} />);
    expect(getAllText(rendered.tree).some((t) => t.includes('4 matches'))).toBe(true);
  });

  test('says match, not matches, for a single result', () => {
    const rendered = render(<ListFilterInput {...defaultProps} value="dwarf" resultCount={1} />);
    expect(getAllText(rendered.tree).some((t) => t.includes('1 match'))).toBe(true);
  });

  test('reports zero rather than going quiet', () => {
    // An empty list with no explanation reads as broken data.
    const rendered = render(<ListFilterInput {...defaultProps} value="zzz" resultCount={0} />);
    expect(getAllText(rendered.tree).some((t) => t.includes('0 matches'))).toBe(true);
  });

  test('hides the count when the field is empty', () => {
    const rendered = render(<ListFilterInput {...defaultProps} value="" resultCount={65} />);
    expect(getAllText(rendered.tree).some((t) => t.includes('65 matches'))).toBe(false);
  });

  test('offers a clear control only while filtering', () => {
    const { queryByLabelText } = render(<ListFilterInput {...defaultProps} value="" />);
    expect(queryByLabelText('Clear filter')).toBeNull();
  });

  test('clears the filter when asked', () => {
    const onChangeText = jest.fn();
    const { getByLabelText } = render(
      <ListFilterInput {...defaultProps} value="elf" onChangeText={onChangeText} />,
    );
    fireEvent.press(getByLabelText('Clear filter'));
    expect(onChangeText).toHaveBeenCalledWith('');
  });

  test('treats whitespace as not filtering', () => {
    const { queryByLabelText } = render(<ListFilterInput {...defaultProps} value="   " />);
    expect(queryByLabelText('Clear filter')).toBeNull();
  });
});
