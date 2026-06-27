import React from 'react';
import { render, fireEvent, type RenderedNode } from '../../helpers/testUtils';
import { SkillsSection } from '@/components/character/direct-entry/SkillsSection';
import { PRESET_PF1E_STANDARD, PRESET_GO_NUTS } from '@/config/rulesetPresets';
import type { Ruleset } from '@/types/ruleset';

const mockDispatch = jest.fn();

const baseAbilityScore = { modifier: 0 };

const mockAbilityScores = {
  str: baseAbilityScore,
  dex: baseAbilityScore,
  con: baseAbilityScore,
  int: baseAbilityScore,
  wis: baseAbilityScore,
  cha: baseAbilityScore,
};

let mockSkills: Record<string, { ranks: number; misc: number }> = {};
let mockRuleset: Ruleset = PRESET_PF1E_STANDARD;
let mockTotalLevel = 20;

jest.mock('@/store/hooks', () => ({
  useAppDispatch: () => mockDispatch,
  useAppSelector: (selector: (s: unknown) => unknown) =>
    selector({
      characterEntry: {
        character: {
          skills: mockSkills,
          abilityScores: mockAbilityScores,
          classes: { totalLevel: mockTotalLevel },
        },
      },
      ruleset: { activeRuleset: mockRuleset },
    }),
}));

jest.mock('@/hooks/useTheme', () => ({
  useTheme: () => ({
    colors: {
      bg: { primary: '#fff', secondary: '#f5f5f5', tertiary: '#eee' },
      border: { DEFAULT: '#ccc' },
      text: { primary: '#000', secondary: '#333', tertiary: '#999' },
      error: { DEFAULT: '#B00020' },
    },
    fantasy: { gold: '#FFD700', bronze: '#CD7F32' },
    isDark: false,
  }),
}));

function findByType(node: RenderedNode, typeName: string): RenderedNode[] {
  const results: RenderedNode[] = [];
  if (node.type === typeName) results.push(node);
  for (const child of node.children) {
    if (typeof child !== 'string') results.push(...findByType(child, typeName));
  }
  return results;
}

beforeEach(() => {
  mockSkills = {};
  mockRuleset = PRESET_PF1E_STANDARD;
  mockTotalLevel = 20;
  mockDispatch.mockClear();
});

describe('SkillsSection — Knowledge (Martial) gating', () => {
  it('hides Knowledge (Martial) with standard ruleset (no initiating mechanics)', () => {
    mockRuleset = PRESET_PF1E_STANDARD;
    const { getAllText } = render(<SkillsSection />);
    expect(getAllText().some((t) => t.includes('Knowledge (Martial)'))).toBe(false);
  });

  it('shows Knowledge (Martial) when pathOfWarMechanics is enabled', () => {
    mockRuleset = PRESET_GO_NUTS;
    mockSkills = { knowledgeMartial: { ranks: 1, misc: 0 } };
    const { getAllText } = render(<SkillsSection />);
    expect(getAllText().some((t) => t.includes('Knowledge (Martial)'))).toBe(true);
  });

  it('shows Knowledge (Martial) when only tomeOfBattleMechanics is enabled', () => {
    mockRuleset = {
      ...PRESET_PF1E_STANDARD,
      optionalRules: { ...PRESET_PF1E_STANDARD.optionalRules, tomeOfBattleMechanics: true },
    };
    mockSkills = { knowledgeMartial: { ranks: 1, misc: 0 } };
    const { getAllText } = render(<SkillsSection />);
    expect(getAllText().some((t) => t.includes('Knowledge (Martial)'))).toBe(true);
  });
});

describe('SkillsSection — specialty group visibility', () => {
  it('hides Craft group when no specialties exist and showAll is false', () => {
    mockSkills = {};
    const { getAllText } = render(<SkillsSection />);
    expect(getAllText().some((t) => t === 'Craft')).toBe(false);
  });

  it('shows Craft group when a 0-rank specialty exists (length > 0 guard)', () => {
    mockSkills = { 'craft (alchemy)': { ranks: 0, misc: 0 } };
    const { getAllText } = render(<SkillsSection />);
    expect(getAllText().some((t) => t === 'Craft')).toBe(true);
  });

  it('shows specialty row label for an existing craft specialty', () => {
    mockSkills = { 'craft (alchemy)': { ranks: 3, misc: 0 } };
    const { getAllText } = render(<SkillsSection />);
    expect(getAllText().some((t) => t.includes('Craft (Alchemy)'))).toBe(true);
  });
});

describe('SkillsSection — event handlers', () => {
  it('dispatches setSkillEntry when rank input changes on a regular skill', () => {
    mockSkills = { acrobatics: { ranks: 3, misc: 0 } };
    const result = render(<SkillsSection />);
    // TextInputs: [0] search, [1] acrobatics ranks, [2] acrobatics misc
    const inputs = findByType(result.tree, 'TextInput');
    fireEvent.changeText(inputs[1], '5');
    expect(mockDispatch).toHaveBeenCalled();
    const call = mockDispatch.mock.calls[mockDispatch.mock.calls.length - 1][0];
    expect(call.type).toBe('characterEntry/setSkillEntry');
    expect(call.payload.skillKey).toBe('acrobatics');
    expect(call.payload.entry.ranks).toBe(5);
  });

  it('dispatches setSkillEntry when misc input changes on a regular skill', () => {
    mockSkills = { acrobatics: { ranks: 3, misc: 0 } };
    const result = render(<SkillsSection />);
    const inputs = findByType(result.tree, 'TextInput');
    fireEvent.changeText(inputs[2], '2');
    expect(mockDispatch).toHaveBeenCalled();
    const call = mockDispatch.mock.calls[mockDispatch.mock.calls.length - 1][0];
    expect(call.type).toBe('characterEntry/setSkillEntry');
    expect(call.payload.skillKey).toBe('acrobatics');
    expect(call.payload.entry.misc).toBe(2);
  });

  it('rank input treats non-numeric input as 0', () => {
    mockSkills = { acrobatics: { ranks: 3, misc: 0 } };
    const result = render(<SkillsSection />);
    const inputs = findByType(result.tree, 'TextInput');
    fireEvent.changeText(inputs[1], 'abc');
    expect(mockDispatch).toHaveBeenCalled();
    const call = mockDispatch.mock.calls[mockDispatch.mock.calls.length - 1][0];
    expect(call.payload.entry.ranks).toBe(0);
  });

  it('dispatches setSkillEntry when specialty rank changes', () => {
    mockSkills = { 'craft (alchemy)': { ranks: 3, misc: 0 } };
    const result = render(<SkillsSection />);
    // TextInputs: [0] search, [1] craft(alchemy) ranks, [2] craft(alchemy) misc
    const inputs = findByType(result.tree, 'TextInput');
    fireEvent.changeText(inputs[1], '4');
    expect(mockDispatch).toHaveBeenCalled();
    const call = mockDispatch.mock.calls[mockDispatch.mock.calls.length - 1][0];
    expect(call.type).toBe('characterEntry/setSkillEntry');
    expect(call.payload.skillKey).toBe('craft (alchemy)');
    expect(call.payload.entry.ranks).toBe(4);
  });

  it('dispatches setSkillEntry when specialty misc changes', () => {
    mockSkills = { 'craft (alchemy)': { ranks: 3, misc: 0 } };
    const result = render(<SkillsSection />);
    const inputs = findByType(result.tree, 'TextInput');
    fireEvent.changeText(inputs[2], '1');
    expect(mockDispatch).toHaveBeenCalled();
    const call = mockDispatch.mock.calls[mockDispatch.mock.calls.length - 1][0];
    expect(call.payload.skillKey).toBe('craft (alchemy)');
    expect(call.payload.entry.misc).toBe(1);
  });

  it('dispatches removeSkillEntry when × pressed on specialty row', () => {
    mockSkills = { 'craft (alchemy)': { ranks: 3, misc: 0 } };
    const { getAllByRole } = render(<SkillsSection />);
    const buttons = getAllByRole('button');
    const removeButton = buttons.find((b) => b.props.accessibilityLabel === 'Remove specialty');
    expect(removeButton).toBeTruthy();
    fireEvent.press(removeButton!);
    expect(mockDispatch).toHaveBeenCalled();
    const call = mockDispatch.mock.calls[mockDispatch.mock.calls.length - 1][0];
    expect(call.type).toBe('characterEntry/removeSkillEntry');
    expect(call.payload).toBe('craft (alchemy)');
  });

  it('pressing + Add button on specialty group runs without error', () => {
    mockSkills = { 'craft (alchemy)': { ranks: 3, misc: 0 } };
    const { getAllByRole } = render(<SkillsSection />);
    const buttons = getAllByRole('button');
    // First button is the + Add button on the Craft specialty header
    fireEvent.press(buttons[0]);
    // The handler flips adding state; no dispatch expected
    expect(mockDispatch).not.toHaveBeenCalled();
  });

  it('pressing show all toggle runs without error', () => {
    mockSkills = {};
    const { getAllByRole } = render(<SkillsSection />);
    const buttons = getAllByRole('button');
    // With no skills, the only button is the show-all toggle
    const showAllButton = buttons[buttons.length - 1];
    fireEvent.press(showAllButton);
    expect(mockDispatch).not.toHaveBeenCalled();
  });

  it('search input onChangeText runs without error', () => {
    mockSkills = {};
    const result = render(<SkillsSection />);
    const inputs = findByType(result.tree, 'TextInput');
    // First input is always the search bar
    fireEvent.changeText(inputs[0], 'acro');
    expect(mockDispatch).not.toHaveBeenCalled();
  });
});

describe('SkillsSection — per-skill max-rank cap', () => {
  it('shows the per-skill max in the summary when the character has levels', () => {
    mockTotalLevel = 3;
    const { getAllText } = render(<SkillsSection />);
    const text = getAllText();
    expect(text.some((t) => t.includes('Max per skill'))).toBe(true);
    expect(text.some((t) => t === '3')).toBe(true);
  });

  it('does not show a max-per-skill summary when the character has no levels', () => {
    mockTotalLevel = 0;
    const { getAllText } = render(<SkillsSection />);
    expect(getAllText().some((t) => t.includes('Max per skill'))).toBe(false);
  });

  it('clamps a rank entry above the cap down to the character level', () => {
    mockTotalLevel = 3;
    mockSkills = { acrobatics: { ranks: 2, misc: 0 } };
    const result = render(<SkillsSection />);
    const inputs = findByType(result.tree, 'TextInput');
    fireEvent.changeText(inputs[1], '9');
    const call = mockDispatch.mock.calls[mockDispatch.mock.calls.length - 1][0];
    expect(call.payload.skillKey).toBe('acrobatics');
    expect(call.payload.entry.ranks).toBe(3);
  });

  it('allows a rank entry at or below the cap', () => {
    mockTotalLevel = 5;
    mockSkills = { acrobatics: { ranks: 1, misc: 0 } };
    const result = render(<SkillsSection />);
    const inputs = findByType(result.tree, 'TextInput');
    fireEvent.changeText(inputs[1], '5');
    const call = mockDispatch.mock.calls[mockDispatch.mock.calls.length - 1][0];
    expect(call.payload.entry.ranks).toBe(5);
  });

  it('does not clamp when the character has no levels (cap not yet known)', () => {
    mockTotalLevel = 0;
    mockSkills = { acrobatics: { ranks: 1, misc: 0 } };
    const result = render(<SkillsSection />);
    const inputs = findByType(result.tree, 'TextInput');
    fireEvent.changeText(inputs[1], '9');
    const call = mockDispatch.mock.calls[mockDispatch.mock.calls.length - 1][0];
    expect(call.payload.entry.ranks).toBe(9);
  });

  it('flags an existing over-cap entry with the error color', () => {
    mockTotalLevel = 2;
    mockSkills = { acrobatics: { ranks: 5, misc: 0 } };
    const result = render(<SkillsSection />);
    const inputs = findByType(result.tree, 'TextInput');
    // inputs[1] is the acrobatics rank field; its border should use the error color.
    const style = Array.isArray(inputs[1].props.style)
      ? Object.assign({}, ...inputs[1].props.style)
      : inputs[1].props.style;
    expect(style.borderColor).toBe('#B00020');
  });
});
