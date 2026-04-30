import React from 'react';
import { render } from '../../helpers/testUtils';
import { EidolonSection } from '@/components/character/direct-entry/EidolonSection';
import type { ClassEntry } from '@/types/classes';
import type { DraftEidolon } from '@/types/eidolon';

// ---- GameDataService mock ----

jest.mock('@/services/GameDataService', () => ({
  GameDataService: {
    getEidolonDataIndex: jest.fn().mockResolvedValue({
      evolutions: new Map(),
      baseForms: new Map(),
      subtypes: new Map(),
    }),
  },
}));

// ---- Redux mock ----

const mockDispatch = jest.fn();
let mockEidolons: DraftEidolon[] = [];
let mockCharacter: Record<string, unknown> = { eidolons: [], classes: { classes: [] }, feats: { feats: [] } };

jest.mock('@/store/hooks', () => ({
  useAppDispatch: () => mockDispatch,
  useAppSelector: (selector: (s: unknown) => unknown) =>
    selector({
      characterEntry: {
        character: { ...mockCharacter, eidolons: mockEidolons },
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
jest.mock('@/components/character/direct-entry/EidolonAspectCard', () => ({
  EidolonAspectCard: () => null,
}));
jest.mock('@/components/character/direct-entry/BroodmasterPoolCard', () => ({
  BroodmasterPoolCard: () => null,
}));

// ---- Helpers ----

function makeClassEntry(overrides: Partial<ClassEntry> = {}): ClassEntry {
  return {
    id: 'summoner-1',
    name: 'Summoner (Unchained)',
    level: 5,
    sourceSystem: 'pf1e',
    classChoices: [],
    prereqOverride: false,
    ...overrides,
  } as ClassEntry;
}

// ---- Tests ----

describe('EidolonSection', () => {
  beforeEach(() => {
    mockDispatch.mockClear();
    mockEidolons = [];
    mockCharacter = { eidolons: [], classes: { classes: [] }, feats: { feats: [] } };
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
    mockCharacter = {
      eidolons: mockEidolons,
      classes: { classes: [makeClassEntry()] },
      feats: { feats: [] },
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
    mockCharacter = {
      eidolons: mockEidolons,
      classes: { classes: [makeClassEntry({ name: 'Summoner' })] },
      feats: { feats: [] },
    };
    const { getAllText } = render(
      <EidolonSection classEntry={makeClassEntry({ name: 'Summoner' })} />,
    );
    const texts = getAllText().join(' ');
    expect(texts).toContain('Base form');
    expect(texts).not.toContain('Subtype');
  });

  it('shows synthesist note when archetypeId includes synthesist', () => {
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
    mockCharacter = {
      eidolons: mockEidolons,
      classes: { classes: [makeClassEntry({ archetypeId: 'summoner-synthesist' })] },
      feats: { feats: [] },
    };
    const { getAllText } = render(
      <EidolonSection classEntry={makeClassEntry({ archetypeId: 'summoner-synthesist' })} />,
    );
    expect(getAllText().join(' ')).toContain('Synthesist');
  });
});
