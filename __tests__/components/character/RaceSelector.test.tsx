import React from 'react';
import { render, fireEvent, getAllText } from '../../helpers/testUtils';
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

  describe('filtering', () => {
    // 65 races are seeded; scrolling the whole list to find one was the
    // complaint behind #363.
    function filterTo(query: string) {
      const rendered = render(<RaceSelector selectedRace={null} onSelectRace={() => {}} />);
      fireEvent.changeText(rendered.getByTestId('race-filter'), query);
      return rendered.rerender();
    }

    test('narrows the list to matching races', () => {
      const tree = filterTo('dwarf');
      const text = getAllText(tree);
      expect(text.some((t) => t === 'Dwarf')).toBe(true);
      expect(text.some((t) => t === 'Elf')).toBe(false);
    });

    test('matches case-insensitively and on partial names', () => {
      const text = getAllText(filterTo('HALF'));
      expect(text.some((t) => t === 'Half-Elf')).toBe(true);
      expect(text.some((t) => t === 'Half-Orc')).toBe(true);
      expect(text.some((t) => t === 'Gnome')).toBe(false);
    });

    test('drops section headers that no longer have races under them', () => {
      const text = getAllText(filterTo('dwarf'));
      expect(text.some((t) => t.includes('Featured Races'))).toBe(false);
    });

    test('says so when nothing matches, rather than showing an empty list', () => {
      const text = getAllText(filterTo('zzzz'));
      expect(text.some((t) => t.includes('No race matches'))).toBe(true);
    });

    test('restores the full list when the filter is cleared', () => {
      const rendered = render(<RaceSelector selectedRace={null} onSelectRace={() => {}} />);
      fireEvent.changeText(rendered.getByTestId('race-filter'), 'dwarf');
      rendered.rerender();
      fireEvent.changeText(rendered.getByTestId('race-filter'), '');
      const text = getAllText(rendered.rerender());
      expect(text.some((t) => t === 'Elf')).toBe(true);
      expect(text.some((t) => t === 'Dwarf')).toBe(true);
    });
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
      (r) =>
        r.props.accessibilityLabel === 'Mental (INT/WIS/CHA)' ||
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
