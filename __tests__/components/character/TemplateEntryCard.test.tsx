import React from 'react';
import { render } from '../../helpers/testUtils';
import { TemplateEntryCard } from '@/components/character/direct-entry/TemplateEntryCard';
import type { AppliedTemplate } from '@/types/templates';
import type { TemplateChoiceRowProps } from '@/components/character/direct-entry/TemplateChoiceRow';

// ---- Mocks ----

const mockDispatch = jest.fn();

jest.mock('@/store/hooks', () => ({
  useAppDispatch: () => mockDispatch,
  useAppSelector: () => null,
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

// ALL_TEMPLATES lookup — provide a template with and without choices.
jest.mock('@/data/templates', () => ({
  ALL_TEMPLATES: [
    {
      id: 'celestial-blessed-creature',
      name: 'Celestial-Blessed Creature',
      description: 'Test',
      crAdjustment: 1,
      acquisitionType: 'acquired',
      isSimpleTemplate: false,
      features: [],
      choices: [
        {
          id: 'celestial-type',
          label: 'Celestial Type',
          optionSource: 'inline',
          optionGroups: [
            {
              id: 'g1',
              name: '',
              options: [
                { id: 'astral-deva', name: 'Astral Deva', description: 'Stunning Strike 5/day' },
              ],
            },
          ],
        },
      ],
      sourceInfo: { type: 'third_party', publisher: 'Test', publication: 'Test' },
      visibility: 'global',
      rev: 1,
      verificationStatus: 'needs_review',
    },
    {
      id: 'half-dragon',
      name: 'Half-Dragon',
      description: 'Test',
      crAdjustment: 2,
      acquisitionType: 'inherited',
      isSimpleTemplate: false,
      features: [],
      // no choices
      sourceInfo: { type: 'official', publication: 'MM' },
      visibility: 'global',
      rev: 1,
      verificationStatus: 'verified',
    },
    {
      id: 'celestial-with-companion',
      name: 'Celestial With Companion',
      description: 'Test',
      crAdjustment: 2,
      acquisitionType: 'acquired',
      isSimpleTemplate: false,
      features: [],
      choices: [
        {
          id: 'companion-bond',
          label: 'Companion Bond',
          optionSource: 'inline',
          optionGroups: [
            {
              id: 'g1',
              name: '',
              options: [{ id: 'wolf', name: 'Wolf', description: 'A wolf companion' }],
            },
          ],
        },
      ],
      grantsCompanion: { effectiveLevelFormula: 'characterLevel', pickerFilter: 'full' },
      sourceInfo: { type: 'official', publication: 'MM' },
      visibility: 'global',
      rev: 1,
      verificationStatus: 'verified',
    },
  ],
}));

// TemplateChoiceRow — stub renders a text identifying the choice label so we
// can confirm it was rendered without needing a full picker test here.
jest.mock('@/components/character/direct-entry/TemplateChoiceRow', () => {
  const React = require('react');
  const { View, Text } = require('react-native');
  return {
    TemplateChoiceRow: ({
      choice,
      currentSelection,
      templateDefinition,
    }: TemplateChoiceRowProps) => {
      const choiceDef = templateDefinition.choices?.find((c) => c.id === choice.id);
      const allOptions = choiceDef?.optionGroups?.flatMap((g) => g.options) ?? [];
      const selectedOption = currentSelection
        ? allOptions.find((o) => o.id === currentSelection)
        : undefined;
      return React.createElement(
        View,
        null,
        React.createElement(
          Text,
          { testID: `choice-row-${choice.id}` },
          `choice-row:${choice.label}:${currentSelection ?? 'unresolved'}`,
        ),
        selectedOption?.description
          ? React.createElement(
              Text,
              { testID: `choice-description-${choice.id}` },
              selectedOption.description,
            )
          : null,
      );
    },
  };
});

// TemplateCompanionSection — stub that renders an identifiable marker so
// coexistence with TemplateChoiceRow can be verified in one tree.
jest.mock('@/components/character/direct-entry/TemplateCompanionSection', () => {
  const React = require('react');
  const { View } = require('react-native');
  return {
    TemplateCompanionSection: () => React.createElement(View, { testID: 'companion-section' }),
  };
});

// InlinePicker — simple stub.
jest.mock('@/components/ui/InlinePicker', () => {
  const React = require('react');
  const { Text } = require('react-native');
  return {
    InlinePicker: ({ value }: { value: string }) => React.createElement(Text, null, value),
  };
});

// ---- Fixtures ----

function makeEntry(overrides: Partial<AppliedTemplate> = {}): AppliedTemplate {
  return {
    id: 'entry-1',
    templateId: 'celestial-blessed-creature',
    name: 'Celestial-Blessed Creature',
    appliedAs: 'cr',
    cr: 1,
    acquisitionType: 'acquired',
    paidTiers: [],
    sourceId: 'templates',
    sourceRev: 1,
    ...overrides,
  };
}

// ---- Tests ----

describe('TemplateEntryCard', () => {
  beforeEach(() => {
    mockDispatch.mockClear();
  });

  it('renders one TemplateChoiceRow per choice in the template definition', () => {
    const r = render(<TemplateEntryCard entry={makeEntry()} />);
    expect(r.getByTestId('choice-row-celestial-type')).toBeDefined();
    const text = r.getAllText().join(' ');
    expect(text).toMatch(/choice-row:Celestial Type:unresolved/);
  });

  it('passes currentSelection from templateChoices to the row', () => {
    const entry = makeEntry({
      templateChoices: [{ choiceId: 'celestial-type', selection: 'astral-deva' }],
    });
    const r = render(<TemplateEntryCard entry={entry} />);
    const text = r.getAllText().join(' ');
    expect(text).toMatch(/choice-row:Celestial Type:astral-deva/);
  });

  it('displays resolved option description below the row when a selection exists', () => {
    const entry = makeEntry({
      templateChoices: [{ choiceId: 'celestial-type', selection: 'astral-deva' }],
    });
    const r = render(<TemplateEntryCard entry={entry} />);
    expect(r.getByTestId('choice-description-celestial-type')).toBeDefined();
    const text = r.getAllText().join(' ');
    expect(text).toMatch(/Stunning Strike 5\/day/);
  });

  it('does not display description block under the row when no selection exists', () => {
    const entry = makeEntry();
    const r = render(<TemplateEntryCard entry={entry} />);
    expect(r.queryByTestId('choice-description-celestial-type')).toBeNull();
  });

  it('hides the choices section entirely when template has no choices', () => {
    const entry = makeEntry({ templateId: 'half-dragon', name: 'Half-Dragon' });
    const r = render(<TemplateEntryCard entry={entry} />);
    expect(r.queryByTestId('choice-row-celestial-type')).toBeNull();
  });

  it('hides the choices section for free grant entries (no catalog identity)', () => {
    const entry = makeEntry({ isFreeGrant: true });
    const r = render(<TemplateEntryCard entry={entry} />);
    expect(r.queryByTestId('choice-row-celestial-type')).toBeNull();
  });

  it('renders TemplateChoiceRow and TemplateCompanionSection together on the same card without layout regression', () => {
    const entry = makeEntry({
      templateId: 'celestial-with-companion',
      name: 'Celestial With Companion',
    });
    const r = render(<TemplateEntryCard entry={entry} />);
    expect(r.getByTestId('choice-row-companion-bond')).toBeDefined();
    expect(r.getByTestId('companion-section')).toBeDefined();
  });
});
