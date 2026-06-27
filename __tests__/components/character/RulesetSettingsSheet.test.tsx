import React from 'react';
import { render, fireEvent, type RenderedNode } from '../../helpers/testUtils';
import { RulesetSettingsSheet } from '@/components/character/direct-entry/RulesetSettingsSheet';
import type { Ruleset } from '@/types/ruleset';

const mockDispatch = jest.fn();

const baseRuleset: Ruleset = {
  id: 'preset-pf1e-standard',
  name: 'PF1e Standard',
  visibility: 'global',
  ownerId: 'system',
  allowedSources: ['pf1e-official'],
  optionalRules: {
    heroPoints: false,
    gestalt: false,
    fractionalBABSaves: false,
    variantMulticlassing: false,
    eitrMode: 'off',
    relaxedEntry: false,
    mythic: false,
    pathOfWarMechanics: false,
    tomeOfBattleMechanics: false,
    crTemplates: true,
    laTemplates: true,
    crRefunds: false,
    laBuyback: false,
    crLaAbilityScoreReductions: true,
    flaws: false,
  },
  itemOverrides: { banned: [], allowed: [] },
  campaignRequirements: {},
  validationSettings: {
    abilityScoreMethod: 'point-buy',
    pointBuyBudget: 20,
    maxTraits: 2,
    maxFlaws: 2,
  },
  version: 1,
  createdAt: '2026-04-09T00:00:00.000Z',
  updatedAt: '2026-04-09T00:00:00.000Z',
};

let mockActiveRuleset: Ruleset = { ...baseRuleset };
let mockIsModifiedFromPreset = false;

jest.mock('@/store/hooks', () => ({
  useAppDispatch: () => mockDispatch,
  useAppSelector: (selector: (s: unknown) => unknown) =>
    selector({
      ruleset: {
        activeRuleset: mockActiveRuleset,
        isModifiedFromPreset: mockIsModifiedFromPreset,
      },
    }),
}));

jest.mock('@/hooks/useTheme', () => ({
  useTheme: () => ({
    colors: {
      bg: { primary: '#111', secondary: '#222', tertiary: '#333' },
      border: { DEFAULT: '#ccc' },
      text: { primary: '#fff', secondary: '#aaa', tertiary: '#666' },
    },
    fantasy: { gold: '#FFD700', bronze: '#CD7F32', darkWood: '#5C3317' },
    isDark: true,
  }),
}));

jest.mock('@/config/rulesetPresets', () => ({
  SYSTEM_PRESETS: [],
}));

jest.mock('@/components/ui/InlinePicker', () => ({
  InlinePicker: () => null,
}));

function findAllNodes(node: RenderedNode, pred: (n: RenderedNode) => boolean): RenderedNode[] {
  const results: RenderedNode[] = [];
  if (pred(node)) results.push(node);
  for (const child of node.children) {
    if (typeof child !== 'string') results.push(...findAllNodes(child, pred));
  }
  return results;
}

const onClose = jest.fn();

function renderSheet() {
  return render(<RulesetSettingsSheet visible={true} onClose={onClose} />);
}

beforeEach(() => {
  jest.clearAllMocks();
  mockActiveRuleset = {
    ...baseRuleset,
    optionalRules: { ...baseRuleset.optionalRules, flaws: false },
    validationSettings: { ...baseRuleset.validationSettings, maxFlaws: 2 },
  };
  mockIsModifiedFromPreset = false;
});

describe('RulesetSettingsSheet — Flaws toggle', () => {
  it('renders the Flaws (3.5e) toggle in optional rules', () => {
    const { tree } = renderSheet();
    const checkboxes = findAllNodes(
      tree,
      (n) =>
        n.props.accessibilityRole === 'checkbox' && n.props.accessibilityLabel === 'Flaws (3.5e)',
    );
    expect(checkboxes.length).toBe(1);
  });

  it('renders the Flaws toggle as unchecked when flaws is false', () => {
    const { tree } = renderSheet();
    const flawsToggle = findAllNodes(
      tree,
      (n) =>
        n.props.accessibilityRole === 'checkbox' && n.props.accessibilityLabel === 'Flaws (3.5e)',
    )[0];
    expect(flawsToggle).toBeDefined();
    expect(flawsToggle.props.accessibilityState?.checked).toBe(false);
  });

  it('renders the Flaws toggle as checked when flaws is true', () => {
    mockActiveRuleset = {
      ...baseRuleset,
      optionalRules: { ...baseRuleset.optionalRules, flaws: true },
    };
    const { tree } = renderSheet();
    const flawsToggle = findAllNodes(
      tree,
      (n) =>
        n.props.accessibilityRole === 'checkbox' && n.props.accessibilityLabel === 'Flaws (3.5e)',
    )[0];
    expect(flawsToggle.props.accessibilityState?.checked).toBe(true);
  });

  it('dispatches patchActiveRuleset toggling flaws when pressed', () => {
    const { tree } = renderSheet();
    const flawsToggle = findAllNodes(
      tree,
      (n) =>
        n.props.accessibilityRole === 'checkbox' && n.props.accessibilityLabel === 'Flaws (3.5e)',
    )[0];
    fireEvent.press(flawsToggle);
    expect(mockDispatch).toHaveBeenCalled();
    const action = mockDispatch.mock.calls[0][0];
    expect(action.type).toBe('ruleset/patchActiveRuleset');
    expect(action.payload.optionalRules.flaws).toBe(true);
  });
});

describe('RulesetSettingsSheet — maxFlaws input', () => {
  it('hides the Max Flaws input when flaws is off', () => {
    const { tree } = renderSheet();
    const maxFlawsInput = findAllNodes(tree, (n) => n.props.accessibilityLabel === 'Max flaws');
    expect(maxFlawsInput.length).toBe(0);
  });

  it('shows the Max Flaws input when flaws is on', () => {
    mockActiveRuleset = {
      ...baseRuleset,
      optionalRules: { ...baseRuleset.optionalRules, flaws: true },
    };
    const { tree } = renderSheet();
    const maxFlawsInput = findAllNodes(tree, (n) => n.props.accessibilityLabel === 'Max flaws');
    expect(maxFlawsInput.length).toBe(1);
  });

  it('displays the current maxFlaws value when flaws is on', () => {
    mockActiveRuleset = {
      ...baseRuleset,
      optionalRules: { ...baseRuleset.optionalRules, flaws: true },
      validationSettings: { ...baseRuleset.validationSettings, maxFlaws: 3 },
    };
    const { tree } = renderSheet();
    const maxFlawsInput = findAllNodes(tree, (n) => n.props.accessibilityLabel === 'Max flaws')[0];
    expect(maxFlawsInput.props.value).toBe('3');
  });

  it('dispatches patchActiveRuleset with updated maxFlaws on valid input', () => {
    mockActiveRuleset = {
      ...baseRuleset,
      optionalRules: { ...baseRuleset.optionalRules, flaws: true },
      validationSettings: { ...baseRuleset.validationSettings, maxFlaws: 2 },
    };
    const { tree } = renderSheet();
    const maxFlawsInput = findAllNodes(tree, (n) => n.props.accessibilityLabel === 'Max flaws')[0];
    fireEvent.changeText(maxFlawsInput, '4');
    expect(mockDispatch).toHaveBeenCalled();
    const action = mockDispatch.mock.calls[0][0];
    expect(action.type).toBe('ruleset/patchActiveRuleset');
    expect(action.payload.validationSettings.maxFlaws).toBe(4);
  });

  it('does not dispatch when maxFlaws input is not a valid number', () => {
    mockActiveRuleset = {
      ...baseRuleset,
      optionalRules: { ...baseRuleset.optionalRules, flaws: true },
    };
    const { tree } = renderSheet();
    const maxFlawsInput = findAllNodes(tree, (n) => n.props.accessibilityLabel === 'Max flaws')[0];
    fireEvent.changeText(maxFlawsInput, 'abc');
    expect(mockDispatch).not.toHaveBeenCalled();
  });

  it('does not dispatch when maxFlaws input is negative', () => {
    mockActiveRuleset = {
      ...baseRuleset,
      optionalRules: { ...baseRuleset.optionalRules, flaws: true },
    };
    const { tree } = renderSheet();
    const maxFlawsInput = findAllNodes(tree, (n) => n.props.accessibilityLabel === 'Max flaws')[0];
    fireEvent.changeText(maxFlawsInput, '-1');
    expect(mockDispatch).not.toHaveBeenCalled();
  });

  it('preserves other validationSettings when patching maxFlaws', () => {
    mockActiveRuleset = {
      ...baseRuleset,
      optionalRules: { ...baseRuleset.optionalRules, flaws: true },
      validationSettings: {
        abilityScoreMethod: 'point-buy',
        pointBuyBudget: 25,
        maxTraits: 3,
        maxFlaws: 2,
      },
    };
    const { tree } = renderSheet();
    const maxFlawsInput = findAllNodes(tree, (n) => n.props.accessibilityLabel === 'Max flaws')[0];
    fireEvent.changeText(maxFlawsInput, '5');
    const action = mockDispatch.mock.calls[0][0];
    expect(action.payload.validationSettings.abilityScoreMethod).toBe('point-buy');
    expect(action.payload.validationSettings.pointBuyBudget).toBe(25);
    expect(action.payload.validationSettings.maxTraits).toBe(3);
    expect(action.payload.validationSettings.maxFlaws).toBe(5);
  });
});
