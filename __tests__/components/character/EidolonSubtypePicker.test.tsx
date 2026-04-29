import React from 'react';
import { render, fireEvent } from '../../helpers/testUtils';
import { EidolonSubtypePicker } from '@/components/character/direct-entry/EidolonSubtypePicker';

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

describe('EidolonSubtypePicker', () => {
  const noop = () => {};

  test('offers a "no subtype" option', () => {
    const { getByTestId } = render(
      <EidolonSubtypePicker
        visible
        currentBaseForm="biped"
        currentSubtype={undefined}
        summonerLevel={5}
        onSelect={noop}
        onClose={noop}
      />,
    );
    expect(getByTestId('subtype-option-none')).toBeTruthy();
  });

  test('filters subtypes by required base form', () => {
    // Angel requires biped. It should appear for biped and disappear for serpentine.
    const bipedView = render(
      <EidolonSubtypePicker
        visible
        currentBaseForm="biped"
        currentSubtype={undefined}
        summonerLevel={5}
        onSelect={noop}
        onClose={noop}
      />,
    );
    expect(bipedView.queryByTestId('subtype-option-angel')).toBeTruthy();

    const serpentineView = render(
      <EidolonSubtypePicker
        visible
        currentBaseForm="serpentine"
        currentSubtype={undefined}
        summonerLevel={5}
        onSelect={noop}
        onClose={noop}
      />,
    );
    expect(serpentineView.queryByTestId('subtype-option-angel')).toBeNull();
  });

  test('calls onSelect with the chosen subtype id', () => {
    const onSelect = jest.fn();
    const { getByTestId } = render(
      <EidolonSubtypePicker
        visible
        currentBaseForm="biped"
        currentSubtype={undefined}
        summonerLevel={5}
        onSelect={onSelect}
        onClose={noop}
      />,
    );
    fireEvent.press(getByTestId('subtype-option-angel'));
    expect(onSelect).toHaveBeenCalledWith('angel');
  });

  test('calls onSelect with undefined when "no subtype" is chosen', () => {
    const onSelect = jest.fn();
    const { getByTestId } = render(
      <EidolonSubtypePicker
        visible
        currentBaseForm="biped"
        currentSubtype="angel"
        summonerLevel={5}
        onSelect={onSelect}
        onClose={noop}
      />,
    );
    fireEvent.press(getByTestId('subtype-option-none'));
    expect(onSelect).toHaveBeenCalledWith(undefined);
  });

  test('marks current subtype as selected', () => {
    const { getAllText } = render(
      <EidolonSubtypePicker
        visible
        currentBaseForm="biped"
        currentSubtype="angel"
        summonerLevel={5}
        onSelect={noop}
        onClose={noop}
      />,
    );
    expect(getAllText().join(' ')).toContain('✓ current');
  });

  test('shows unlocked grants at or below summoner level', () => {
    // Archon grants +1 ep at L4. At summoner level 10, the grant should be "Unlocked".
    const { getAllText } = render(
      <EidolonSubtypePicker
        visible
        currentBaseForm="biped"
        currentSubtype={undefined}
        summonerLevel={10}
        onSelect={noop}
        onClose={noop}
      />,
    );
    const joined = getAllText().join(' ');
    expect(joined).toContain('Unlocked');
    expect(joined).toContain('L4');
  });

  test('shows upcoming grants above summoner level', () => {
    // At summoner level 1, most scaling grants are upcoming.
    const { getAllText } = render(
      <EidolonSubtypePicker
        visible
        currentBaseForm="biped"
        currentSubtype="angel"
        summonerLevel={1}
        onSelect={noop}
        onClose={noop}
      />,
    );
    expect(getAllText().join(' ')).toContain('Upcoming');
  });
});
