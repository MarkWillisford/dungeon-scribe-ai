import React from 'react';
import { render, fireEvent } from '../../helpers/testUtils';
import { EidolonBaseFormPicker } from '@/components/character/direct-entry/EidolonBaseFormPicker';

jest.mock('@/hooks/useTheme', () => ({
  useTheme: () => ({
    colors: {
      bg: { primary: '#fff', secondary: '#f5f5f5', tertiary: '#eee' },
      border: { DEFAULT: '#ccc' },
      text: { primary: '#000', secondary: '#333', tertiary: '#999' },
    },
    fantasy: { gold: '#FFD700', bronze: '#CD7F32', darkWood: '#6B4423' },
    isDark: false,
  }),
}));

describe('EidolonBaseFormPicker', () => {
  const noop = () => {};

  test('lists APG + both-edition forms and hides aberrant when edition is APG', () => {
    const { getAllText } = render(
      <EidolonBaseFormPicker
        visible
        edition="apg"
        currentBaseForm="biped"
        onSelect={noop}
        onClose={noop}
      />,
    );
    const joined = getAllText().join(' ');
    expect(joined).toContain('Biped');
    expect(joined).toContain('Quadruped');
    expect(joined).toContain('Serpentine');
    // Aberrant is Unchained-only; must not appear in APG
    expect(joined).not.toMatch(/\bAberrant\b/);
  });

  test('shows aberrant form for Unchained edition', () => {
    const { getAllText } = render(
      <EidolonBaseFormPicker
        visible
        edition="unchained"
        currentBaseForm="biped"
        onSelect={noop}
        onClose={noop}
      />,
    );
    expect(getAllText().join(' ')).toContain('Aberrant');
  });

  test('marks the current base form as selected', () => {
    const { getAllText } = render(
      <EidolonBaseFormPicker
        visible
        edition="apg"
        currentBaseForm="quadruped"
        onSelect={noop}
        onClose={noop}
      />,
    );
    expect(getAllText().join(' ')).toContain('✓ current');
  });

  test('calls onSelect with the chosen form id when a card is pressed', () => {
    const onSelect = jest.fn();
    const { getByTestId } = render(
      <EidolonBaseFormPicker
        visible
        edition="apg"
        currentBaseForm="biped"
        onSelect={onSelect}
        onClose={noop}
      />,
    );
    fireEvent.press(getByTestId('base-form-option-quadruped'));
    expect(onSelect).toHaveBeenCalledWith('quadruped');
  });

  test('renders stat summary for each form (size, speed, saves)', () => {
    const { getAllText } = render(
      <EidolonBaseFormPicker
        visible
        edition="apg"
        currentBaseForm="biped"
        onSelect={noop}
        onClose={noop}
      />,
    );
    const joined = getAllText().join(' ');
    expect(joined).toContain('Size');
    expect(joined).toContain('Speed');
    expect(joined).toContain('Saves');
    expect(joined).toContain('land 30 ft');
    expect(joined).toContain('Medium');
  });

  test('invokes onClose when close button pressed', () => {
    const onClose = jest.fn();
    const { getByRole } = render(
      <EidolonBaseFormPicker
        visible
        edition="apg"
        currentBaseForm="biped"
        onSelect={noop}
        onClose={onClose}
      />,
    );
    // Close button is the only element with accessibilityRole="button" and label "Close"
    // But there are many buttons (one per form). Find by label via getByText fallback not
    // sufficient — use getByTestId-free lookup: we rely on the first button with label "Close".
    const allButtons = getByRole('button');
    // getByRole returns the first match; happens to be the close button since it renders first.
    fireEvent.press(allButtons);
    expect(onClose).toHaveBeenCalled();
  });
});
