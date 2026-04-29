import React from 'react';
import { render, fireEvent } from '../../helpers/testUtils';
import { EidolonAspectCard } from '@/components/character/direct-entry/EidolonAspectCard';
import { EidolonPoolService } from '@/services/EidolonPoolService';
import type { DraftEidolon } from '@/types/eidolon';

// ---- Redux mock ----

const mockDispatch = jest.fn();

jest.mock('@/store/hooks', () => ({
  useAppDispatch: () => mockDispatch,
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

// ---- Fixtures ----

const DATA_INDEX = EidolonPoolService.buildIndexFromStaticData();

function makeEidolon(overrides: Partial<DraftEidolon> = {}): DraftEidolon {
  return {
    id: 'eid-1',
    name: 'Aziel',
    summonerClassEntryId: 'summoner-1',
    edition: 'unchained',
    baseForm: 'biped',
    subtype: 'angel',
    selectedEvolutions: [],
    ...overrides,
  };
}

// ---- Tests ----

describe('EidolonAspectCard', () => {
  beforeEach(() => mockDispatch.mockClear());

  it('shows placeholder text when summoner level < 10', () => {
    const { getAllText } = render(
      <EidolonAspectCard eidolon={makeEidolon()} summonerLevel={5} dataIndex={DATA_INDEX} />,
    );
    expect(getAllText().join(' ')).toContain('Aspect unlocks at summoner level');
  });

  it('renders Aspect title at L10', () => {
    const { getAllText } = render(
      <EidolonAspectCard eidolon={makeEidolon()} summonerLevel={10} dataIndex={DATA_INDEX} />,
    );
    const text = getAllText().join(' ');
    expect(text).toContain('Aspect');
    expect(text).not.toContain('Greater');
  });

  it('renders Greater Aspect title at L18', () => {
    const { getAllText } = render(
      <EidolonAspectCard eidolon={makeEidolon()} summonerLevel={18} dataIndex={DATA_INDEX} />,
    );
    expect(getAllText().join(' ')).toContain('Greater Aspect');
  });

  it('displays 0 diverted points by default at L10', () => {
    const { getByTestId } = render(
      <EidolonAspectCard eidolon={makeEidolon()} summonerLevel={10} dataIndex={DATA_INDEX} />,
    );
    expect(getByTestId('aspect-value').props.children).toBe(0);
  });

  it('dispatches setAspectDivert increment when + pressed', () => {
    const { getByTestId } = render(
      <EidolonAspectCard eidolon={makeEidolon()} summonerLevel={10} dataIndex={DATA_INDEX} />,
    );
    fireEvent.press(getByTestId('aspect-increment'));
    expect(mockDispatch).toHaveBeenCalledWith(
      expect.objectContaining({ payload: { eidolonId: 'eid-1', divertedPoints: 1 } }),
    );
  });

  it('decrement button is disabled when divertedPoints is 0', () => {
    const { getByTestId } = render(
      <EidolonAspectCard eidolon={makeEidolon()} summonerLevel={10} dataIndex={DATA_INDEX} />,
    );
    // Button is disabled at 0 — press should not dispatch
    fireEvent.press(getByTestId('aspect-decrement'));
    expect(mockDispatch).not.toHaveBeenCalled();
  });

  it('shows existing divertedPoints from aspectTransfer', () => {
    const eidolon = makeEidolon({
      aspectTransfer: { divertedPoints: 2, summonerEvolutions: [] },
    });
    const { getByTestId } = render(
      <EidolonAspectCard eidolon={eidolon} summonerLevel={10} dataIndex={DATA_INDEX} />,
    );
    expect(getByTestId('aspect-value').props.children).toBe(2);
  });

  it('hides Add Evolution button when divertedPoints is 0', () => {
    const { queryByTestId } = render(
      <EidolonAspectCard eidolon={makeEidolon()} summonerLevel={10} dataIndex={DATA_INDEX} />,
    );
    expect(queryByTestId('aspect-add-evo-button')).toBeNull();
  });

  it('shows Add Evolution button when divertedPoints > 0', () => {
    const eidolon = makeEidolon({
      aspectTransfer: { divertedPoints: 1, summonerEvolutions: [] },
    });
    const { queryByTestId } = render(
      <EidolonAspectCard eidolon={eidolon} summonerLevel={10} dataIndex={DATA_INDEX} />,
    );
    expect(queryByTestId('aspect-add-evo-button')).not.toBeNull();
  });

  it('increment button is disabled at max (2) for standard Aspect (L10-L17)', () => {
    const eidolon = makeEidolon({
      aspectTransfer: { divertedPoints: 2, summonerEvolutions: [] },
    });
    const { getByTestId } = render(
      <EidolonAspectCard eidolon={eidolon} summonerLevel={10} dataIndex={DATA_INDEX} />,
    );
    // Button is disabled at max — press should not dispatch
    fireEvent.press(getByTestId('aspect-increment'));
    expect(mockDispatch).not.toHaveBeenCalled();
  });

  it('allows up to 6 diverted points at Greater Aspect (L18+)', () => {
    const eidolon = makeEidolon({
      aspectTransfer: { divertedPoints: 5, summonerEvolutions: [] },
    });
    const { getByTestId } = render(
      <EidolonAspectCard eidolon={eidolon} summonerLevel={18} dataIndex={DATA_INDEX} />,
    );
    fireEvent.press(getByTestId('aspect-increment'));
    expect(mockDispatch).toHaveBeenCalledWith(
      expect.objectContaining({ payload: { eidolonId: 'eid-1', divertedPoints: 6 } }),
    );
  });

  it('shows 1:1 exchange note at L10', () => {
    const { getAllText } = render(
      <EidolonAspectCard eidolon={makeEidolon()} summonerLevel={10} dataIndex={DATA_INDEX} />,
    );
    expect(getAllText().join(' ')).toContain('1:1');
  });

  it('shows 2:1 exchange note at L18', () => {
    const { getAllText } = render(
      <EidolonAspectCard eidolon={makeEidolon()} summonerLevel={18} dataIndex={DATA_INDEX} />,
    );
    expect(getAllText().join(' ')).toContain('2:1');
  });

  it('dispatches setAspectDivert decrement when – pressed and divertedPoints > 0', () => {
    const eidolon = makeEidolon({
      aspectTransfer: { divertedPoints: 2, summonerEvolutions: [] },
    });
    const { getByTestId } = render(
      <EidolonAspectCard eidolon={eidolon} summonerLevel={10} dataIndex={DATA_INDEX} />,
    );
    fireEvent.press(getByTestId('aspect-decrement'));
    expect(mockDispatch).toHaveBeenCalledWith(
      expect.objectContaining({ payload: { eidolonId: 'eid-1', divertedPoints: 1 } }),
    );
  });

  it('shows overBudget warning when summoner evolutions exceed diverted points', () => {
    const eidolon = makeEidolon({
      aspectTransfer: {
        divertedPoints: 1,
        summonerEvolutions: [
          { instanceId: 'asp-1', evolutionId: 'evolution-bite', metadata: undefined },
          { instanceId: 'asp-2', evolutionId: 'evolution-claws', metadata: undefined },
        ],
      },
    });
    const { getAllText } = render(
      <EidolonAspectCard eidolon={eidolon} summonerLevel={10} dataIndex={DATA_INDEX} />,
    );
    expect(getAllText().join('')).toContain('exceed diverted points');
  });

  it('shows Greater Aspect eidolon cost note when L18 and divertedPoints > 0', () => {
    const eidolon = makeEidolon({
      aspectTransfer: { divertedPoints: 4, summonerEvolutions: [] },
    });
    const { getAllText } = render(
      <EidolonAspectCard eidolon={eidolon} summonerLevel={18} dataIndex={DATA_INDEX} />,
    );
    expect(getAllText().join('')).toContain('Greater Aspect: eidolon loses');
  });

  it('pressing Add Evolution button does not throw', () => {
    const eidolon = makeEidolon({
      aspectTransfer: { divertedPoints: 1, summonerEvolutions: [] },
    });
    const { getByTestId } = render(
      <EidolonAspectCard eidolon={eidolon} summonerLevel={10} dataIndex={DATA_INDEX} />,
    );
    expect(() => fireEvent.press(getByTestId('aspect-add-evo-button'))).not.toThrow();
  });

  it('dispatches removeSummonerAspectEvolution when an evo remove button is pressed', () => {
    const eidolon = makeEidolon({
      aspectTransfer: {
        divertedPoints: 2,
        summonerEvolutions: [
          { instanceId: 'asp-123', evolutionId: 'evolution-bite', metadata: undefined },
        ],
      },
    });
    const { getByTestId } = render(
      <EidolonAspectCard eidolon={eidolon} summonerLevel={10} dataIndex={DATA_INDEX} />,
    );
    fireEvent.press(getByTestId('remove-aspect-evo-asp-123'));
    expect(mockDispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        payload: { eidolonId: 'eid-1', instanceId: 'asp-123' },
      }),
    );
  });
});
