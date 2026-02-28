import React from 'react';
import { render, fireEvent } from '../../helpers/testUtils';
import { RaceSelector } from '@/components/character/RaceSelector';
import { CORE_RACES } from '@/data/races';

describe('RaceSelector', () => {
  test('should render all 7 core race names', () => {
    const { getByText } = render(<RaceSelector selectedRace={null} onSelectRace={() => {}} />);
    const expectedRaces = ['Human', 'Dwarf', 'Elf', 'Gnome', 'Half-Elf', 'Half-Orc', 'Halfling'];
    for (const raceName of expectedRaces) {
      expect(getByText(raceName)).toBeTruthy();
    }
  });

  test('should call onSelectRace when a race is pressed', () => {
    const onSelectRace = jest.fn();
    const { getAllByRole } = render(
      <RaceSelector selectedRace={null} onSelectRace={onSelectRace} />,
    );
    const raceButtons = getAllByRole('radio');
    // Press the first race (Human)
    fireEvent.press(raceButtons[0]);
    expect(onSelectRace).toHaveBeenCalledTimes(1);
    expect(onSelectRace).toHaveBeenCalledWith(CORE_RACES[0]);
  });

  test('should render race traits when expanded (selected)', () => {
    const dwarf = CORE_RACES[1]; // Dwarf
    const { getByText } = render(<RaceSelector selectedRace={dwarf} onSelectRace={() => {}} />);
    // Dwarf is selected, so it should be expanded and show its traits
    expect(getByText('Racial Traits')).toBeTruthy();
    expect(getByText('Languages')).toBeTruthy();
  });

  test('should show speed and size when race is expanded', () => {
    const elf = CORE_RACES[2]; // Elf
    const { getAllText } = render(<RaceSelector selectedRace={elf} onSelectRace={() => {}} />);
    const allText = getAllText();
    expect(allText.some((t) => t.includes('Speed:'))).toBe(true);
    expect(allText.some((t) => t.includes('30'))).toBe(true);
    expect(allText.some((t) => t.includes('Medium'))).toBe(true);
  });

  test('should show flexible ability choice for Human', () => {
    const human = CORE_RACES[0]; // Human
    const onFlexibleAbilityChoice = jest.fn();
    const { getByText } = render(
      <RaceSelector
        selectedRace={human}
        onSelectRace={() => {}}
        onFlexibleAbilityChoice={onFlexibleAbilityChoice}
      />,
    );
    expect(getByText('Choose one ability score to receive +2:')).toBeTruthy();
    // Verify ability chip labels are rendered
    expect(getByText('STR')).toBeTruthy();
    expect(getByText('DEX')).toBeTruthy();
    expect(getByText('CON')).toBeTruthy();
    expect(getByText('INT')).toBeTruthy();
    expect(getByText('WIS')).toBeTruthy();
    expect(getByText('CHA')).toBeTruthy();
  });

  test('should not show flexible ability choice for Dwarf', () => {
    const dwarf = CORE_RACES[1]; // Dwarf
    const { queryByText } = render(
      <RaceSelector
        selectedRace={dwarf}
        onSelectRace={() => {}}
        onFlexibleAbilityChoice={() => {}}
      />,
    );
    expect(queryByText('Choose one ability score to receive +2:')).toBeNull();
  });
});
