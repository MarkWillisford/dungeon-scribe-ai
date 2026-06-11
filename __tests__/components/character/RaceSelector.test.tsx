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
    // Press the first race in the list
    fireEvent.press(raceButtons[0]);
    expect(onSelectRace).toHaveBeenCalledTimes(1);
    expect(onSelectRace).toHaveBeenCalledWith(CORE_RACES[0]);
  });

  test('should render race traits when expanded (selected)', () => {
    const dwarf = CORE_RACES.find((r) => r.name === 'Dwarf')!;
    const { getByText } = render(<RaceSelector selectedRace={dwarf} onSelectRace={() => {}} />);
    expect(getByText('Racial Traits')).toBeTruthy();
    expect(getByText('Languages')).toBeTruthy();
  });

  test('should show speed and size when race is expanded', () => {
    const elf = CORE_RACES.find((r) => r.name === 'Elf')!;
    const { getAllText } = render(<RaceSelector selectedRace={elf} onSelectRace={() => {}} />);
    const allText = getAllText();
    expect(allText.some((t) => t.includes('Speed:'))).toBe(true);
    expect(allText.some((t) => t.includes('30'))).toBe(true);
    expect(allText.some((t) => t.includes('Medium'))).toBe(true);
  });

  test('should show flexible ability choice for Human', () => {
    const human = CORE_RACES.find((r) => r.name === 'Human')!;
    const onFlexibleAbilityChoice = jest.fn();
    const { getByText } = render(
      <RaceSelector
        selectedRace={human}
        onSelectRace={() => {}}
        onFlexibleAbilityChoice={onFlexibleAbilityChoice}
      />,
    );
    expect(getByText('Choose one ability score to receive +2:')).toBeTruthy();
    expect(getByText('STR')).toBeTruthy();
    expect(getByText('DEX')).toBeTruthy();
    expect(getByText('CON')).toBeTruthy();
    expect(getByText('INT')).toBeTruthy();
    expect(getByText('WIS')).toBeTruthy();
    expect(getByText('CHA')).toBeTruthy();
  });

  test('should not show flexible ability choice for Dwarf', () => {
    const dwarf = CORE_RACES.find((r) => r.name === 'Dwarf')!;
    const { queryByText } = render(
      <RaceSelector
        selectedRace={dwarf}
        onSelectRace={() => {}}
        onFlexibleAbilityChoice={() => {}}
      />,
    );
    expect(queryByText('Choose one ability score to receive +2:')).toBeNull();
  });

  test('should show group toggle for race with count:all any-group bonus', () => {
    const groupRace = {
      ...CORE_RACES[0],
      name: 'Group Test Race',
      flexibleAbilityBonuses: [{ group: 'any' as const, count: 'all' as const, modifier: 2 }],
    };
    const { getByText } = render(
      <RaceSelector
        selectedRace={groupRace}
        onSelectRace={() => {}}
        onFlexibleAbilityChoice={jest.fn()}
      />,
    );
    expect(getByText('Mental')).toBeTruthy();
    expect(getByText('Physical')).toBeTruthy();
    expect(getByText('INT / WIS / CHA')).toBeTruthy();
    expect(getByText('STR / DEX / CON')).toBeTruthy();
  });

  test('should show other-group ability picker when group is chosen', () => {
    const groupRace = {
      ...CORE_RACES[0],
      name: 'Group Test Race',
      flexibleAbilityBonuses: [
        { group: 'any' as const, count: 'all' as const, modifier: 2 },
        { group: 'other' as const, count: 1 as const, modifier: 4 },
      ],
    };
    const { getAllText } = render(
      <RaceSelector
        selectedRace={groupRace}
        onSelectRace={() => {}}
        flexibleAbilityChoices={['mental']}
        onFlexibleAbilityChoice={jest.fn()}
      />,
    );
    const texts = getAllText();
    // When mental is chosen, physical abilities should be available for the +4 picker
    expect(texts.some((t) => t === 'STR')).toBe(true);
    expect(texts.some((t) => t === 'DEX')).toBeTruthy();
    expect(texts.some((t) => t === 'CON')).toBeTruthy();
  });

  test('should call onFlexibleAbilityChoice when group chip is pressed', () => {
    const groupRace = {
      ...CORE_RACES[0],
      name: 'Group Test Race',
      flexibleAbilityBonuses: [{ group: 'any' as const, count: 'all' as const, modifier: 2 }],
    };
    const onFlexibleAbilityChoice = jest.fn();
    const { getAllByRole } = render(
      <RaceSelector
        selectedRace={groupRace}
        onSelectRace={() => {}}
        onFlexibleAbilityChoice={onFlexibleAbilityChoice}
      />,
    );
    const radios = getAllByRole('radio');
    const groupChips = radios.filter(
      (r) => r.props.accessibilityLabel === 'Mental (INT/WIS/CHA)' ||
             r.props.accessibilityLabel === 'Physical (STR/DEX/CON)',
    );
    expect(groupChips.length).toBeGreaterThan(0);
    fireEvent.press(groupChips[0]);
    expect(onFlexibleAbilityChoice).toHaveBeenCalledWith(0, 'mental');
  });

  test('should call onFlexibleAbilityChoice when ability chip is pressed', () => {
    const human = CORE_RACES.find((r) => r.name === 'Human')!;
    const onFlexibleAbilityChoice = jest.fn();
    const { getAllByRole } = render(
      <RaceSelector
        selectedRace={human}
        onSelectRace={() => {}}
        onFlexibleAbilityChoice={onFlexibleAbilityChoice}
      />,
    );
    const radios = getAllByRole('radio');
    const strChip = radios.find((r) => r.props.accessibilityLabel === 'STR +2');
    expect(strChip).toBeTruthy();
    fireEvent.press(strChip!);
    expect(onFlexibleAbilityChoice).toHaveBeenCalledWith(0, 'strength');
  });

  test('should highlight selected ability chip', () => {
    const human = CORE_RACES.find((r) => r.name === 'Human')!;
    const { getAllByRole } = render(
      <RaceSelector
        selectedRace={human}
        onSelectRace={() => {}}
        flexibleAbilityChoices={['strength']}
        onFlexibleAbilityChoice={jest.fn()}
      />,
    );
    const radios = getAllByRole('radio');
    const strChip = radios.find((r) => r.props.accessibilityLabel === 'STR +2');
    expect(strChip).toBeTruthy();
    expect(strChip!.props.accessibilityState?.selected).toBe(true);
  });
});

