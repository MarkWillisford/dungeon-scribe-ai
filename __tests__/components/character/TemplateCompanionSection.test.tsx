import React from 'react';
import { render, fireEvent } from '../../helpers/testUtils';
import { TemplateCompanionSection } from '@/components/character/direct-entry/TemplateCompanionSection';
import type { CompanionInstance } from '@/types/companions';

// ---- Mocks ----

const mockDispatch = jest.fn();
let mockState: {
  characterEntry: {
    originalCharacterId: string | null;
    draft: { companions: CompanionInstance[]; classes: { level: number }[] };
  };
} = {
  characterEntry: {
    originalCharacterId: null,
    draft: { companions: [], classes: [{ level: 10 }] },
  },
};

jest.mock('@/store/hooks', () => ({
  useAppDispatch: () => mockDispatch,
  useAppSelector: (selector: (s: unknown) => unknown) => selector(mockState),
}));

jest.mock('@/hooks/useTheme', () => ({
  useTheme: () => ({
    colors: {
      bg: { primary: '#fff', secondary: '#f5f5f5', tertiary: '#eee' },
      border: { DEFAULT: '#ccc' },
      text: { primary: '#000', secondary: '#333', tertiary: '#999' },
    },
    fantasy: { gold: '#FFD700', bronze: '#CD7F32', darkWood: '#4A2C2A' },
    isDark: false,
  }),
}));

jest.mock('expo-router', () => ({
  useRouter: () => ({ push: jest.fn(), back: jest.fn() }),
}));

// CompanionPickerSheet reaches into the data layer when real; replace with a
// Pressable that fires a canned AnimalCompanionEntry on press. Ignores
// `visible` since the custom renderer doesn't re-render on setState.
jest.mock('@/components/character/direct-entry/CompanionPickerSheet', () => {
  const React = require('react');
  const { Pressable, Text } = require('react-native');
  return {
    CompanionPickerSheet: ({
      onSelect,
    }: {
      visible: boolean;
      title: string;
      pickerFilter: string;
      onSelect: (ac: { id: string; name: string }) => void;
      onClose: () => void;
    }) =>
      React.createElement(
        Pressable,
        {
          testID: 'mock-companion-picker-select',
          accessibilityRole: 'button',
          accessibilityLabel: 'mock-companion-picker',
          onPress: () => onSelect({ id: 'wolf', name: 'Wolf' } as { id: string; name: string }),
        },
        React.createElement(Text, null, 'mock-select'),
      ),
  };
});

// CompanionCard is a significant child component; stub to a text element that
// surfaces the companion name and a remove button so the remove path is testable.
jest.mock('@/components/character/direct-entry/CompanionCard', () => {
  const React = require('react');
  const { View, Text, Pressable } = require('react-native');
  return {
    CompanionCard: ({
      companion,
      grantedByLabel,
      onRemove,
    }: {
      companion: CompanionInstance;
      grantedByLabel: string;
      onRemove: () => void;
    }) =>
      React.createElement(
        View,
        { testID: 'companion-card' },
        React.createElement(Text, null, `companion-card:${companion.name}:${grantedByLabel}`),
        React.createElement(
          Pressable,
          {
            accessibilityRole: 'button',
            accessibilityLabel: `Remove companion ${companion.name}`,
            onPress: onRemove,
          },
          React.createElement(Text, null, 'remove'),
        ),
      ),
  };
});

// ALL_ANIMAL_COMPANIONS is pulled so the section can resolve the entry for
// CompanionCard. Keep the fixture small.
jest.mock('@/data/animalCompanions', () => ({
  ALL_ANIMAL_COMPANIONS: [
    {
      id: 'wolf',
      name: 'Wolf',
      companionType: 'animal',
      bodyShape: 'quadrupedClaws',
      size: 'Medium',
      speed: '50 ft.',
      naturalArmor: 2,
      attacks: 'bite (1d6)',
      str: 13,
      dex: 15,
      con: 15,
      int: 2,
      wis: 12,
      cha: 6,
      specialQualities: [],
      progressionTiers: [],
      source: 'pf1e-core',
      isOfficial: true,
      verificationStatus: 'verified',
      visibility: 'global',
      rev: 1,
    },
  ],
}));

// ---- Fixtures ----

function makeCompanion(overrides: Partial<CompanionInstance> = {}): CompanionInstance {
  return {
    instanceId: 'comp-1',
    sourceEntryId: 'wolf',
    name: 'Shadow',
    grantedBy: { type: 'template', templateId: 'druid-creature' },
    effectiveProgressionLevel: 7,
    abilityScoreOverrides: {},
    hp: { max: 0, current: 0, temp: 0, nonlethal: 0 },
    appliedTemplates: [],
    feats: [],
    tricks: [],
    skillRanks: {},
    equipment: {
      armor: [],
      weapons: [],
      magicItems: [],
      gear: [],
      equippedSlots: new Map(),
    },
    notes: '',
    background: '',
    ...overrides,
  };
}

beforeEach(() => {
  mockDispatch.mockClear();
  mockState = {
    characterEntry: {
      originalCharacterId: null,
      draft: { companions: [], classes: [{ level: 10 }] },
    },
  };
});

// ---- Tests ----

describe('TemplateCompanionSection', () => {
  it('renders + Add button when no companion is granted yet', () => {
    const r = render(
      <TemplateCompanionSection
        templateEntryId="tpl-entry-1"
        templateId="druid-creature"
        templateName="Druid Creature"
        spec={{ effectiveLevelFormula: 'characterLevel-3', pickerFilter: 'full' }}
      />,
    );
    const text = r.getAllText().join(' ');
    expect(text).toMatch(/\+ Add Companion.*Druid Creature/);
  });

  it('picker onSelect dispatches addCompanion with template grant + formula-derived level', () => {
    // characterLevel=10, formula 'characterLevel-3' → effective level 7
    const r = render(
      <TemplateCompanionSection
        templateEntryId="tpl-entry-1"
        templateId="druid-creature"
        templateName="Druid Creature"
        spec={{ effectiveLevelFormula: 'characterLevel-3', pickerFilter: 'full' }}
      />,
    );
    const pickerTrigger = r.getByTestId('mock-companion-picker-select');
    fireEvent.press(pickerTrigger);
    expect(mockDispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: 'characterEntry/addCompanion',
        payload: expect.objectContaining({
          sourceEntryId: 'wolf',
          name: 'Wolf',
          grantedBy: { type: 'template', templateId: 'druid-creature' },
          effectiveProgressionLevel: 7,
        }),
      }),
    );
  });

  it('characterLevel formula uses total level exactly', () => {
    mockState.characterEntry.draft.classes = [{ level: 6 }, { level: 4 }];
    const r = render(
      <TemplateCompanionSection
        templateEntryId="tpl-entry-1"
        templateId="some-template"
        templateName="Some Template"
        spec={{ effectiveLevelFormula: 'characterLevel', pickerFilter: 'full' }}
      />,
    );
    fireEvent.press(r.getByTestId('mock-companion-picker-select'));
    expect(mockDispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        payload: expect.objectContaining({ effectiveProgressionLevel: 10 }),
      }),
    );
  });

  it('characterLevel-4 formula clamps to 1 at low levels', () => {
    mockState.characterEntry.draft.classes = [{ level: 3 }];
    const r = render(
      <TemplateCompanionSection
        templateEntryId="tpl-entry-1"
        templateId="paladinish"
        templateName="Paladinish"
        spec={{ effectiveLevelFormula: 'characterLevel-4', pickerFilter: 'mountsOnly' }}
      />,
    );
    fireEvent.press(r.getByTestId('mock-companion-picker-select'));
    expect(mockDispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        payload: expect.objectContaining({ effectiveProgressionLevel: 1 }),
      }),
    );
  });

  it('renders CompanionCard when a companion for this template already exists', () => {
    mockState.characterEntry.draft.companions = [makeCompanion()];
    const r = render(
      <TemplateCompanionSection
        templateEntryId="tpl-entry-1"
        templateId="druid-creature"
        templateName="Druid Creature"
        spec={{ effectiveLevelFormula: 'characterLevel-3', pickerFilter: 'full' }}
      />,
    );
    expect(r.queryByTestId('companion-card')).not.toBeNull();
  });

  it('CompanionCard remove dispatches removeCompanion with the instanceId', () => {
    mockState.characterEntry.draft.companions = [makeCompanion({ instanceId: 'comp-9' })];
    const r = render(
      <TemplateCompanionSection
        templateEntryId="tpl-entry-1"
        templateId="druid-creature"
        templateName="Druid Creature"
        spec={{ effectiveLevelFormula: 'characterLevel-3', pickerFilter: 'full' }}
      />,
    );
    const removeBtn = r
      .getAllByRole('button')
      .find((n) => n.props.accessibilityLabel === 'Remove companion Shadow');
    expect(removeBtn).toBeDefined();
    fireEvent.press(removeBtn!);
    expect(mockDispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: 'characterEntry/removeCompanion',
        payload: 'comp-9',
      }),
    );
  });

  it('filters by templateId — companion granted by a different template is not rendered', () => {
    mockState.characterEntry.draft.companions = [
      makeCompanion({
        instanceId: 'comp-other',
        grantedBy: { type: 'template', templateId: 'half-celestial' },
      }),
    ];
    const r = render(
      <TemplateCompanionSection
        templateEntryId="tpl-entry-1"
        templateId="druid-creature"
        templateName="Druid Creature"
        spec={{ effectiveLevelFormula: 'characterLevel-3', pickerFilter: 'full' }}
      />,
    );
    // Other template's companion should not appear here — the add button should.
    expect(r.queryByTestId('companion-card')).toBeNull();
    const text = r.getAllText().join(' ');
    expect(text).toMatch(/\+ Add Companion/);
  });
});
