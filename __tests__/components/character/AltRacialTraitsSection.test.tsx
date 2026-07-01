import React from 'react';
import { render, fireEvent } from '../../helpers/testUtils';
import { AltRacialTraitsSection } from '@/components/character/direct-entry/AltRacialTraitsSection';
import type { ExpandedRaceData } from '@/data/races/types';

const mockDispatch = jest.fn();
let mockSelectedArtNames: string[] = [];

jest.mock('@/store/hooks', () => ({
  useAppDispatch: () => mockDispatch,
  useAppSelector: (selector: (s: unknown) => unknown) =>
    selector({
      characterEntry: {
        character: {
          info: {
            selectedAlternateRacialTraits: mockSelectedArtNames,
          },
        },
      },
    }),
}));

jest.mock('@/hooks/useTheme', () => ({
  useTheme: () => ({
    colors: {
      bg: { primary: '#fff', secondary: '#f5f5f5', tertiary: '#eee' },
      border: { DEFAULT: '#ccc' },
      text: { primary: '#000', secondary: '#333', tertiary: '#999' },
    },
    fantasy: { gold: '#FFD700', darkWood: '#5C3317' },
    isDark: false,
  }),
}));

const mockRaceWithArts: ExpandedRaceData = {
  name: 'Elf',
  category: 'Core',
  powerTier: 'Standard (1-10 RP)',
  racePoints: 10,
  size: 'Medium' as ExpandedRaceData['size'],
  speed: 30,
  type: 'Humanoid',
  subtypes: ['Elf'],
  abilityModifiers: { dexterity: 2, intelligence: 2, constitution: -2 },
  senses: ['Low-light vision'],
  racialTraits: [
    { name: 'Elven Immunities', description: 'Immune to sleep effects.' },
    { name: 'Keen Senses', description: '+2 Perception.' },
  ],
  alternativeRacialTraits: [
    {
      name: 'Urbanite',
      description: '+2 Diplomacy and Sense Motive.',
      replaces: ['Keen Senses'],
      source: 'Advanced Race Guide',
    },
    {
      name: 'Dreamspeaker',
      description: '+1 DC for sleep spells.',
      replaces: ['Elven Immunities'],
      source: 'Advanced Race Guide',
    },
  ],
  languages: ['Common', 'Elven'],
  bonusLanguages: ['Celestial'],
  source: 'Core Rulebook',
};

const mockRaceWithoutArts: ExpandedRaceData = {
  ...mockRaceWithArts,
  name: 'Dwarf',
  racialTraits: [{ name: 'Hardy', description: '+2 vs poison.' }],
  alternativeRacialTraits: undefined,
};

jest.mock('@/services/GameDataService', () => ({
  GameDataService: {
    getRaceByNameSync: (name: string) => {
      if (name === 'Elf') return mockRaceWithArts;
      if (name === 'Dwarf') return mockRaceWithoutArts;
      return undefined;
    },
  },
}));

beforeEach(() => {
  mockDispatch.mockClear();
  mockSelectedArtNames = [];
});

describe('AltRacialTraitsSection', () => {
  it('renders null when race has no alternate racial traits', () => {
    const { queryByTestId } = render(<AltRacialTraitsSection raceName="Dwarf" />);
    expect(queryByTestId('alt-racial-traits-section')).toBeNull();
  });

  it('renders null when race is not found', () => {
    const { queryByTestId } = render(<AltRacialTraitsSection raceName="Unknown Race" />);
    expect(queryByTestId('alt-racial-traits-section')).toBeNull();
  });

  it('renders the section when the race has alternate racial traits', () => {
    const { getByTestId } = render(<AltRacialTraitsSection raceName="Elf" />);
    expect(getByTestId('alt-racial-traits-section')).toBeTruthy();
  });

  it('shows all default racial traits in the active list when none are selected', () => {
    const { getByTestId } = render(<AltRacialTraitsSection raceName="Elf" />);
    expect(getByTestId('active-trait-Elven Immunities')).toBeTruthy();
    expect(getByTestId('active-trait-Keen Senses')).toBeTruthy();
  });

  it('shows all available ARTs with their replacement targets', () => {
    const { getByText } = render(<AltRacialTraitsSection raceName="Elf" />);
    expect(getByText('Urbanite')).toBeTruthy();
    expect(getByText('Replaces: Keen Senses')).toBeTruthy();
    expect(getByText('Dreamspeaker')).toBeTruthy();
    expect(getByText('Replaces: Elven Immunities')).toBeTruthy();
  });

  it('dispatches toggleAlternateRacialTrait when an ART row is pressed', () => {
    const { getByTestId } = render(<AltRacialTraitsSection raceName="Elf" />);
    const artRow = getByTestId('art-row-Urbanite');
    fireEvent.press(artRow);
    expect(mockDispatch).toHaveBeenCalledTimes(1);
    const dispatchedAction = mockDispatch.mock.calls[0][0];
    expect(dispatchedAction.type).toContain('toggleAlternateRacialTrait');
    expect(dispatchedAction.payload).toBe('Urbanite');
  });

  it('replaces the targeted default trait with the selected ART in the active list', () => {
    mockSelectedArtNames = ['Urbanite'];
    const { queryByTestId, getByTestId } = render(<AltRacialTraitsSection raceName="Elf" />);
    // Keen Senses is replaced; Urbanite takes its place
    expect(queryByTestId('active-trait-Keen Senses')).toBeNull();
    expect(getByTestId('active-trait-Urbanite')).toBeTruthy();
    // Elven Immunities is unaffected
    expect(getByTestId('active-trait-Elven Immunities')).toBeTruthy();
  });

  it('marks the ART row as checked when it is selected', () => {
    mockSelectedArtNames = ['Urbanite'];
    const { getByTestId } = render(<AltRacialTraitsSection raceName="Elf" />);
    const artRow = getByTestId('art-row-Urbanite');
    expect(artRow.props.accessibilityState?.checked).toBe(true);
  });

  it('marks the ART row as unchecked when it is not selected', () => {
    mockSelectedArtNames = [];
    const { getByTestId } = render(<AltRacialTraitsSection raceName="Elf" />);
    const artRow = getByTestId('art-row-Urbanite');
    expect(artRow.props.accessibilityState?.checked).toBe(false);
  });

  it('restores the default trait in the active list when the ART is deselected', () => {
    mockSelectedArtNames = ['Urbanite'];
    const { queryByTestId } = render(<AltRacialTraitsSection raceName="Elf" />);
    // Keen Senses should be gone when Urbanite is selected
    expect(queryByTestId('active-trait-Keen Senses')).toBeNull();
    expect(queryByTestId('active-trait-Urbanite')).toBeTruthy();

    // Simulate deselection by clearing selection
    mockSelectedArtNames = [];
    const { getByTestId: getByTestId2, queryByTestId: query2 } = render(
      <AltRacialTraitsSection raceName="Elf" />,
    );
    expect(getByTestId2('active-trait-Keen Senses')).toBeTruthy();
    expect(query2('active-trait-Urbanite')).toBeNull();
  });
});
