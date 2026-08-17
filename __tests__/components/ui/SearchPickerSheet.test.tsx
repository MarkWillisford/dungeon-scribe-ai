import React from 'react';
import { render } from '../../helpers/testUtils';
import { SearchPickerSheet, type SearchItem } from '@/components/ui/SearchPickerSheet';

/**
 * Note on scope: the shared test harness (__tests__/helpers/testUtils.tsx)
 * renders a static tree — fireEvent invokes handlers but nothing re-renders — so
 * filtering and selection behaviour cannot be asserted here. These tests cover
 * what the harness can see: that the sheet renders its items, and that the
 * keyboard props governing tap handling are set. The same limitation is why the
 * existing EvolutionPickerSheet test asserts props rather than interactions.
 */

const ITEMS: SearchItem[] = [
  { key: 'elf', label: 'Elf', subLabel: 'Medium', category: 'Core' },
  { key: 'elven-noble', label: 'Elven Noble', subLabel: 'Medium', category: 'Featured' },
  { key: 'dwarf', label: 'Dwarf', subLabel: 'Medium', category: 'Core' },
];

function renderSheet() {
  const onSelect = jest.fn();
  const onClose = jest.fn();
  const utils = render(
    <SearchPickerSheet
      visible
      title="Select Race"
      items={ITEMS}
      onSelect={onSelect}
      onClose={onClose}
    />,
  );
  return { ...utils, onSelect, onClose };
}

describe('SearchPickerSheet', () => {
  describe('rendering', () => {
    it('renders every item when no query has been typed', () => {
      const { getByText } = renderSheet();
      expect(getByText('Elf')).toBeTruthy();
      expect(getByText('Elven Noble')).toBeTruthy();
      expect(getByText('Dwarf')).toBeTruthy();
    });

    it('renders the search field', () => {
      const { getByLabelText } = renderSheet();
      expect(getByLabelText('Search')).toBeTruthy();
    });
  });

  // Regression coverage for #358 (and #252 before it). This is the shared sheet
  // behind the class, feat, trait, template and class-choice pickers, so these
  // props govern most of the pickers in the app at once.
  describe('keyboard handling (#358)', () => {
    it('keeps taps working while the soft keyboard is open', () => {
      // #252 set this to "handled", which was not enough on Android: the tap
      // could still be consumed before the row's press handler claimed it, so an
      // item could only be chosen after dismissing the keyboard with Enter.
      const { getByTestId } = renderSheet();
      expect(getByTestId('search-picker-results').props.keyboardShouldPersistTaps).toBe('always');
    });

    it('dismisses the keyboard when the results list is scrolled', () => {
      // "always" removes tap-to-dismiss, so scrolling has to provide it instead.
      const { getByTestId } = renderSheet();
      expect(typeof getByTestId('search-picker-results').props.onScrollBeginDrag).toBe('function');
    });
  });
});
