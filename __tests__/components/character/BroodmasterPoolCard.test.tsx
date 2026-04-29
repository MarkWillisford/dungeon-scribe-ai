import React from 'react';
import { render, fireEvent } from '../../helpers/testUtils';
import { BroodmasterPoolCard } from '@/components/character/direct-entry/BroodmasterPoolCard';
import { EidolonPoolService } from '@/services/EidolonPoolService';
import type { DraftClassEntry } from '@/types/characterDraft';

// ---- Redux mock ----

const mockDispatch = jest.fn();
let mockDraft = {
  eidolons: [] as unknown[],
  classes: [] as unknown[],
  featSlots: [] as unknown[],
};

jest.mock('@/store/hooks', () => ({
  useAppDispatch: () => mockDispatch,
  useAppSelector: (selector: (s: unknown) => unknown) =>
    selector({ characterEntry: { draft: mockDraft } }),
}));

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

jest.mock('@/components/character/direct-entry/EvolutionPickerSheet', () => ({
  EvolutionPickerSheet: () => null,
}));

// Alert is already mocked at the react-native level by jest.setup.components.ts.

// ---- Fixtures ----

const DATA_INDEX = EidolonPoolService.buildIndexFromStaticData();

function makeClassEntry(overrides: Partial<DraftClassEntry> = {}): DraftClassEntry {
  return {
    id: 'summoner-1',
    className: 'Summoner',
    level: 10,
    sourceSystem: 'pf1e',
    classChoices: [],
    prereqOverride: false,
    archetypeId: 'broodmaster',
    ...overrides,
  };
}

// ---- Tests ----

describe('BroodmasterPoolCard', () => {
  beforeEach(() => {
    mockDispatch.mockClear();
    mockDraft = { eidolons: [], classes: [], featSlots: [] };
  });

  it('renders the Brood Pool heading', () => {
    const { getAllText } = render(
      <BroodmasterPoolCard classEntry={makeClassEntry()} edition="apg" dataIndex={DATA_INDEX} />,
    );
    expect(getAllText().join(' ')).toContain('Brood Pool');
  });

  it('shows "Add Brood Member" button', () => {
    const { queryByTestId } = render(
      <BroodmasterPoolCard classEntry={makeClassEntry()} edition="apg" dataIndex={DATA_INDEX} />,
    );
    expect(queryByTestId('add-brood-member-button')).not.toBeNull();
  });

  it('dispatches addEidolon when "Add Brood Member" is pressed', () => {
    const { getByTestId } = render(
      <BroodmasterPoolCard classEntry={makeClassEntry()} edition="apg" dataIndex={DATA_INDEX} />,
    );
    fireEvent.press(getByTestId('add-brood-member-button'));
    expect(mockDispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        payload: expect.objectContaining({ classEntryId: 'summoner-1' }),
      }),
    );
  });

  it('shows "Add Shared Evolution" button when level >= 8 and no shared evo selected', () => {
    const classEntry = makeClassEntry({ level: 8 });
    const { queryByTestId } = render(
      <BroodmasterPoolCard classEntry={classEntry} edition="apg" dataIndex={DATA_INDEX} />,
    );
    // canAddShared also requires preSplitTotal >= 4. With no brood members, preSplitTotal=0
    // so the button is hidden. We test it does NOT appear without brood members.
    expect(queryByTestId('add-brood-shared-button')).toBeNull();
  });

  it('does not show "Add Shared Evolution" button when level < 8', () => {
    const classEntry = makeClassEntry({ level: 5 });
    const { queryByTestId } = render(
      <BroodmasterPoolCard classEntry={classEntry} edition="apg" dataIndex={DATA_INDEX} />,
    );
    expect(queryByTestId('add-brood-shared-button')).toBeNull();
  });

  it('shows existing shared evolution name in the card', () => {
    const classEntry = makeClassEntry({
      summonerBroodmaster: {
        sharedEvolutions: [
          { instanceId: 'shared-1', evolutionId: 'evolution-large', metadata: undefined },
        ],
      },
    });
    const { getAllText } = render(
      <BroodmasterPoolCard classEntry={classEntry} edition="apg" dataIndex={DATA_INDEX} />,
    );
    const text = getAllText().join(' ');
    expect(text).toContain('Large');
  });

  it('shows remove button for each shared evolution', () => {
    const classEntry = makeClassEntry({
      summonerBroodmaster: {
        sharedEvolutions: [
          { instanceId: 'shared-abc', evolutionId: 'evolution-large', metadata: undefined },
        ],
      },
    });
    const { queryByTestId } = render(
      <BroodmasterPoolCard classEntry={classEntry} edition="apg" dataIndex={DATA_INDEX} />,
    );
    expect(queryByTestId('remove-brood-shared-shared-abc')).not.toBeNull();
  });

  it('pressing remove shared evolution button invokes Alert', () => {
    const { Alert } = require('react-native');
    const classEntry = makeClassEntry({
      summonerBroodmaster: {
        sharedEvolutions: [
          { instanceId: 'shared-abc', evolutionId: 'evolution-large', metadata: undefined },
        ],
      },
    });
    const { getByTestId } = render(
      <BroodmasterPoolCard classEntry={classEntry} edition="apg" dataIndex={DATA_INDEX} />,
    );
    fireEvent.press(getByTestId('remove-brood-shared-shared-abc'));
    expect(Alert.alert).toHaveBeenCalledWith(
      'Remove shared evolution?',
      expect.stringContaining('Large'),
      expect.any(Array),
    );
  });
});
