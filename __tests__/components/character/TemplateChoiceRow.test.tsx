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
});
