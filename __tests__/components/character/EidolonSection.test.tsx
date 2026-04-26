import React from 'react';
import { render } from '../../helpers/testUtils';
import { EidolonSection } from '@/components/character/direct-entry/EidolonSection';
import type { CharacterDraft, DraftClassEntry } from '@/types/characterDraft';
import type { DraftEidolon } from '@/types/eidolon';

// ---- Redux mock ----

const mockDispatch = jest.fn();
let mockEidolons: DraftEidolon[] = [];
let mockDraft: Partial<CharacterDraft> = { eidolons: [] };

jest.mock('@/store/hooks', () => ({
  useAppDispatch: () => mockDispatch,
  useAppSelector: (selector: (s: unknown) => unknown) =>
    selector({
      characterEntry: {
        draft: { ...mockDraft, eidolons: mockEidolons },
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
    fantasy: { gold: '#FFD700', bronze: '#CD7F32', darkWood: '#6B4423' },
    isDark: false,
  }),
}));

// Picker sheets all render inside Modal — stub to keep this suite focused on EidolonSection.
jest.mock('@/components/character/direct-entry/EvolutionPickerSheet', () => ({
  EvolutionPickerSheet: () => null,
}));
jest.mock('@/components/character/direct-entry/EidolonBaseFormPicker', () => ({
  EidolonBaseFormPicker: () => null,
}));
jest.mock('@/components/character/direct-entry/EidolonSubtypePicker', () => ({
  EidolonSubtypePicker: () => null,
}));

// ---- Helpers ----

function makeClassEntry(overrides: Partial<DraftClassEntry> = {}): DraftClassEntry {
  return {
    id: 'summoner-1',
    className: 'Summoner (Unchained)',
    level: 5,
    sourceSystem: 'pf1e',
    classChoices: [],
    prereqOverride: false,
    ...overrides,
  };
}

// ---- Tests ----

describe('EidolonSection', () => {
  beforeEach(() => {
    mockDispatch.mockClear();
    mockEidolons = [];
    mockDraft = { eidolons: [], classes: [], featSlots: [] };
  });

  it('renders the Create Eidolon button when no eidolons exist', () => {
    const { getAllText } = render(<EidolonSection classEntry={makeClassEntry()} />);
    const texts = getAllText().join(' ');
    expect(texts).toContain('Eidolon');
    expect(texts).toContain('+ Create Eidolon');
  });

  it("shows the eidolon's name and pool info when one is present", () => {
    mockEidolons = [
      {
        id: 'eid-1',
        name: 'Aziel',
        summonerClassEntryId: 'summoner-1',
        edition: 'unchained',
        baseForm: 'biped',
        subtype: 'angel',
        selectedEvolutions: [],
      },
    ];
    mockDraft = {
      eidolons: mockEidolons,
      classes: [makeClassEntry()],
      featSlots: [],
    };
    const { getAllText } = render(<EidolonSection classEntry={makeClassEntry()} />);
    const texts = getAllText().join(' ');
    expect(texts).toContain('Pool:');
    expect(texts).toContain('Base form');
    expect(texts).toContain('Subtype');
    expect(texts).toContain('+ Add Evolution');
  });

  it('hides the subtype picker for APG summoners', () => {
    mockEidolons = [
      {
        id: 'eid-1',
        name: 'Aziel',
        summonerClassEntryId: 'summoner-1',
        edition: 'apg',
        baseForm: 'biped',
        selectedEvolutions: [],
      },
    ];
    mockDraft = {
      eidolons: mockEidolons,
      classes: [makeClassEntry({ className: 'Summoner' })],
      featSlots: [],
    };
    const { getAllText } = render(
      <EidolonSection classEntry={makeClassEntry({ className: 'Summoner' })} />,
    );
    const texts = getAllText().join(' ');
    expect(texts).toContain('Base form');
    expect(texts).not.toContain('Subtype');
  });
});
