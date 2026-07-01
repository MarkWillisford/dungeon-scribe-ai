import React from 'react';
import { render, fireEvent, getAllText } from '../../helpers/testUtils';
import { TemplateChoiceRow } from '@/components/character/direct-entry/TemplateChoiceRow';
import type { TemplateChoiceDefinition } from '@/data/templates/types';
import type { TemplateDefinition } from '@/data/templates/types';

// ---- Mocks ----

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
    fantasy: { gold: '#FFD700', bronze: '#CD7F32', darkWood: '#4A2C2A' },
    isDark: false,
  }),
}));

// SearchPickerSheet is a modal — stub it so tests can control selection without
// a real modal stack.
let mockPickerOnSelect: ((item: { key: string; label: string }) => void) | null = null;
jest.mock('@/components/ui/SearchPickerSheet', () => {
  const React = require('react');
  const { Pressable, Text } = require('react-native');
  return {
    SearchPickerSheet: ({
      visible,
      onSelect,
      onClose,
    }: {
      visible: boolean;
      onSelect: (item: { key: string; label: string }) => void;
      onClose: () => void;
    }) => {
      mockPickerOnSelect = onSelect;
      if (!visible) return null;
      return React.createElement(
        Pressable,
        {
          testID: 'mock-picker-close',
          onPress: onClose,
        },
        React.createElement(Text, null, 'picker-open'),
      );
    },
  };
});

// ---- Fixtures ----

const CHOICE_DEF: TemplateChoiceDefinition = {
  id: 'celestial-type',
  label: 'Celestial Type',
  optionSource: 'inline',
  optionGroups: [
    {
      id: 'g1',
      name: '',
      options: [
        { id: 'astral-deva', name: 'Astral Deva', description: 'Stunning Strike 5/day' },
        { id: 'bralani', name: 'Bralani', description: 'Wind Wall at will' },
      ],
    },
  ],
};

const TEMPLATE_DEF: TemplateDefinition = {
  id: 'celestial-blessed-creature',
  name: 'Celestial-Blessed Creature',
  description: 'Test',
  crAdjustment: 1,
  acquisitionType: 'acquired',
  isSimpleTemplate: false,
  features: [],
  choices: [CHOICE_DEF],
  sourceInfo: { type: 'third_party', publisher: 'Test', publication: 'Test' },
  visibility: 'global',
  rev: 1,
  verificationStatus: 'needs_review',
} as TemplateDefinition;

beforeEach(() => {
  mockDispatch.mockClear();
  mockPickerOnSelect = null;
});

// ---- Tests ----

describe('TemplateChoiceRow', () => {
  it('renders unresolved state with placeholder when no selection', () => {
    const r = render(
      <TemplateChoiceRow
        choice={CHOICE_DEF}
        currentSelection={undefined}
        appliedTemplateId="applied-1"
        templateDefinition={TEMPLATE_DEF}
      />,
    );
    const text = r.getAllText().join(' ');
    expect(text).toMatch(/Celestial Type/);
    expect(text).toMatch(/choose/i);
  });

  it('renders resolved state with selected option name', () => {
    const r = render(
      <TemplateChoiceRow
        choice={CHOICE_DEF}
        currentSelection="astral-deva"
        appliedTemplateId="applied-1"
        templateDefinition={TEMPLATE_DEF}
      />,
    );
    const text = r.getAllText().join(' ');
    expect(text).toMatch(/Astral Deva/);
  });

  it('displays selected option description below the row when resolved', () => {
    const r = render(
      <TemplateChoiceRow
        choice={CHOICE_DEF}
        currentSelection="astral-deva"
        appliedTemplateId="applied-1"
        templateDefinition={TEMPLATE_DEF}
      />,
    );
    const text = r.getAllText().join(' ');
    expect(text).toMatch(/Stunning Strike 5\/day/);
    expect(r.getByTestId('choice-option-description-celestial-type')).toBeDefined();
  });

  it('does not display description block when no selection exists', () => {
    const r = render(
      <TemplateChoiceRow
        choice={CHOICE_DEF}
        currentSelection={undefined}
        appliedTemplateId="applied-1"
        templateDefinition={TEMPLATE_DEF}
      />,
    );
    expect(r.queryByTestId('choice-option-description-celestial-type')).toBeNull();
  });

  it('renders raw id as fallback when currentSelection does not match any option', () => {
    const r = render(
      <TemplateChoiceRow
        choice={CHOICE_DEF}
        currentSelection="unknown-id"
        appliedTemplateId="applied-1"
        templateDefinition={TEMPLATE_DEF}
      />,
    );
    const text = r.getAllText().join(' ');
    expect(text).toMatch(/unknown-id/);
  });

  it('renders nothing for collection-backed option sources (not yet implemented)', () => {
    const collectionChoice: TemplateChoiceDefinition = {
      id: 'collection-choice',
      label: 'Some Choice',
      optionSource: 'collection',
      collectionName: 'some-collection',
    };
    const r = render(
      <TemplateChoiceRow
        choice={collectionChoice}
        currentSelection={undefined}
        appliedTemplateId="applied-1"
        templateDefinition={TEMPLATE_DEF}
      />,
    );
    // null return — no button, no text content rendered
    expect(r.getAllByRole('button')).toHaveLength(0);
    expect(r.getAllText()).toHaveLength(0);
  });

  it('tap opens the picker', () => {
    const r = render(
      <TemplateChoiceRow
        choice={CHOICE_DEF}
        currentSelection={undefined}
        appliedTemplateId="applied-1"
        templateDefinition={TEMPLATE_DEF}
      />,
    );
    const rowBtn = r.getByRole('button');
    fireEvent.press(rowBtn);
    // Re-render to pick up the state change (pickerOpen: true)
    const updatedTree = r.rerender();
    // Picker becomes visible — stub renders "picker-open" text
    const afterText = getAllText(updatedTree).join(' ');
    expect(afterText).toMatch(/picker-open/);
  });

  it('dispatches resolveTemplateChoice on picker selection', () => {
    const r = render(
      <TemplateChoiceRow
        choice={CHOICE_DEF}
        currentSelection={undefined}
        appliedTemplateId="applied-1"
        templateDefinition={TEMPLATE_DEF}
      />,
    );
    // Open picker
    fireEvent.press(r.getByRole('button'));
    // Simulate picker selection
    expect(mockPickerOnSelect).not.toBeNull();
    mockPickerOnSelect!({ key: 'astral-deva', label: 'Astral Deva' });
    expect(mockDispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: 'characterEntry/resolveTemplateChoice',
        payload: expect.objectContaining({
          appliedTemplateId: 'applied-1',
          choiceId: 'celestial-type',
          selectionId: 'astral-deva',
        }),
      }),
    );
  });

  it('disables row and is a no-op when choice has no options', () => {
    const emptyChoice = { ...CHOICE_DEF, optionGroups: [] };
    const r = render(
      <TemplateChoiceRow
        choice={emptyChoice}
        currentSelection={undefined}
        appliedTemplateId="applied-1"
        templateDefinition={TEMPLATE_DEF}
      />,
    );

    const row = r.getByTestId('template-choice-row');
    expect(row.props.disabled).toBe(true);
    expect(row.props.style).toEqual(
      expect.arrayContaining([expect.objectContaining({ opacity: 0.4 })]),
    );

    fireEvent.press(row);
    expect(mockDispatch).not.toHaveBeenCalled();
    // Picker must stay closed: stub returns null when !visible, so no "picker-open" text
    const text = r.getAllText().join(' ');
    expect(text).not.toMatch(/picker-open/);
  });
});
