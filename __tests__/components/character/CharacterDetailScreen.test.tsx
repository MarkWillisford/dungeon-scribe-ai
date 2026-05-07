import React from 'react';
import { Alert } from 'react-native';
import { render, type RenderedNode } from '../../helpers/testUtils';

// ---- Router mock ----

const mockBack = jest.fn();
const mockReplace = jest.fn();
const mockPush = jest.fn();
jest.mock('expo-router', () => ({
  useRouter: () => ({ back: mockBack, replace: mockReplace, push: mockPush }),
  useLocalSearchParams: () => ({ id: 'char-123' }),
}));

// ---- Store state vars ----

const mockDispatch = jest.fn();
const mockUnwrap = jest.fn();

let mockActiveCharacter: unknown = null;
let mockLoading = false;

jest.mock('@/store/hooks', () => ({
  useAppDispatch: () => mockDispatch,
  useAppSelector: (selector: (s: unknown) => unknown) =>
    selector({
      characters: {
        activeCharacter: mockActiveCharacter,
        loading: mockLoading,
        error: null,
      },
    }),
}));

jest.mock('@/hooks/useTheme', () => ({
  useTheme: () => ({
    colors: {
      bg: { primary: '#111', secondary: '#222', tertiary: '#333' },
      border: { DEFAULT: '#ccc' },
      text: { primary: '#fff', secondary: '#aaa', tertiary: '#666', accent: '#FFD700' },
      accent: { DEFAULT: '#8B0000' },
    },
    fantasy: {
      gold: '#FFD700',
      bloodRed: '#8B0000',
      oceanBlue: '#1E90FF',
      forestGreen: '#228B22',
      mysticPurple: '#800080',
      bronze: '#CD7F32',
    },
    shadows: { panel: {} },
    isDark: true,
  }),
}));

// ---- Thunk mocks ----

jest.mock('@/store/slices/charactersSlice', () => ({
  fetchCharacter: jest.fn((_id: string) => 'FETCH_CHARACTER_THUNK'),
  toggleFeat: jest.fn((_featId: string) => 'TOGGLE_FEAT_THUNK'),
  deleteCharacter: jest.fn((_id: string) => 'DELETE_CHARACTER_THUNK'),
}));

// ---- Service mocks ----

jest.mock('@/services/FeatRegistryService', () => ({
  FeatRegistryService: { getFeat: jest.fn().mockReturnValue(null) },
}));

// ---- UI component mocks ----

jest.mock('@/components/ui/OrnatePanel', () => {
  const React = require('react');
  const OrnatePanel = (props: any) =>
    React.createElement('OrnatePanel', { testID: props.testID }, props.children);
  return { OrnatePanel };
});

jest.mock('@/components/ui/OrnateButton', () => {
  const React = require('react');
  const OrnateButton = (props: any) =>
    React.createElement('Pressable', { testID: props.testID, onPress: props.onPress }, props.title);
  return { OrnateButton };
});

jest.mock('@/components/ui/OrnateTab', () => {
  const React = require('react');
  const OrnateTab = (props: any) => React.createElement('OrnateTab', props);
  return { OrnateTab };
});

jest.mock('@/components/ui/LoadingSpinner', () => {
  const React = require('react');
  const LoadingSpinner = (props: any) =>
    React.createElement('LoadingSpinner', { testID: props.testID });
  return { LoadingSpinner };
});

jest.mock('@/components/ui/FantasyDivider', () => {
  const React = require('react');
  const FantasyDivider = () => React.createElement('FantasyDivider', {});
  return { FantasyDivider };
});

// ---- Helpers ----

function findAllNodes(node: RenderedNode, predicate: (n: RenderedNode) => boolean): RenderedNode[] {
  const results: RenderedNode[] = [];
  if (predicate(node)) results.push(node);
  for (const child of node.children) {
    if (typeof child !== 'string') results.push(...findAllNodes(child, predicate));
  }
  return results;
}

function makeCharacter(overrides: Record<string, unknown> = {}) {
  return {
    info: {
      name: 'Rissi',
      race: { name: 'Gnome' },
      ...((overrides.info as object) ?? {}),
    },
    classes: { classes: [{ name: 'Rogue', level: 3 }] },
    abilityScores: {
      str: { total: 8, modifier: -1, base: 8, racial: 0, inherent: 0, damage: 0, drain: 0 },
      dex: { total: 16, modifier: 3, base: 14, racial: 2, inherent: 0, damage: 0, drain: 0 },
      con: { total: 12, modifier: 1, base: 12, racial: 0, inherent: 0, damage: 0, drain: 0 },
      int: { total: 10, modifier: 0, base: 10, racial: 0, inherent: 0, damage: 0, drain: 0 },
      wis: { total: 10, modifier: 0, base: 10, racial: 0, inherent: 0, damage: 0, drain: 0 },
      cha: { total: 14, modifier: 2, base: 12, racial: 2, inherent: 0, damage: 0, drain: 0 },
    },
    combatStats: {
      hitPoints: {
        current: 20,
        base: 18,
        temporary: 0,
        nonlethal: 0,
        constitution: 3,
        favoredClass: 0,
        other: 0,
      },
      armorClass: {
        total: 14,
        touch: 13,
        flatFooted: 11,
        armor: 0,
        shield: 0,
        dexterity: 3,
        natural: 0,
        deflection: 0,
        dodge: 0,
        size: 1,
        misc: 0,
      },
      savingThrows: {
        fortitude: { total: 2, base: 1, ability: 1, magic: 0, misc: 0 },
        reflex: { total: 6, base: 3, ability: 3, magic: 0, misc: 0 },
        will: { total: 1, base: 1, ability: 0, magic: 0, misc: 0 },
      },
      attackBonuses: {
        baseAttack: [2],
        meleeTotal: 1,
        rangedTotal: 5,
        allAttacks: { melee: [1], ranged: [5] },
      },
      combatManeuver: {
        bonus: { total: 1 },
        defense: { total: 14, flatFooted: 11 },
      },
      initiative: { total: 3 },
      movement: { current: 20, fly: 0, swim: 0, climb: 0 },
    },
    skills: { totalRanks: 0 },
    feats: { feats: [] },
    ...overrides,
  };
}

// ---- Setup ----

beforeEach(() => {
  jest.clearAllMocks();
  mockBack.mockReset();
  mockReplace.mockReset();
  mockPush.mockReset();
  mockDispatch.mockReturnValue({ unwrap: mockUnwrap });
  mockUnwrap.mockResolvedValue(undefined);
  mockActiveCharacter = null;
  mockLoading = false;
});

// Import component after mocks are set up

const CharacterDetailScreen = require('../../../app/(tabs)/characters/[id]/index').default;

// ---- Tests: loading state ----

describe('CharacterDetailScreen — loading state', () => {
  it('renders loading spinner when loading is true', () => {
    mockLoading = true;
    const { queryByTestId } = render(React.createElement(CharacterDetailScreen));
    expect(queryByTestId('character-detail-loading')).not.toBeNull();
  });

  it('does not render delete button when loading', () => {
    mockLoading = true;
    const { tree } = render(React.createElement(CharacterDetailScreen));
    const deleteButtons = findAllNodes(
      tree,
      (n) => typeof n === 'object' && n.props?.testID === 'delete-character-button',
    );
    expect(deleteButtons).toHaveLength(0);
  });
});

// ---- Tests: not-found state ----

describe('CharacterDetailScreen — character not found', () => {
  it('renders not-found panel when activeCharacter is null and not loading', () => {
    mockActiveCharacter = null;
    mockLoading = false;
    const { queryByTestId } = render(React.createElement(CharacterDetailScreen));
    expect(queryByTestId('character-not-found')).not.toBeNull();
  });

  it('does not render delete button when character is not found', () => {
    mockActiveCharacter = null;
    const { tree } = render(React.createElement(CharacterDetailScreen));
    const deleteButtons = findAllNodes(
      tree,
      (n) => typeof n === 'object' && n.props?.testID === 'delete-character-button',
    );
    expect(deleteButtons).toHaveLength(0);
  });
});

// ---- Tests: delete button ----

describe('CharacterDetailScreen — delete button', () => {
  let alertSpy: jest.SpyInstance;

  beforeEach(() => {
    mockActiveCharacter = makeCharacter();
    alertSpy = jest.spyOn(Alert, 'alert').mockImplementation(() => undefined);
  });

  afterEach(() => {
    alertSpy.mockRestore();
  });

  it('renders the delete button when a character is loaded', () => {
    const { queryByTestId } = render(React.createElement(CharacterDetailScreen));
    expect(queryByTestId('delete-character-button')).not.toBeNull();
  });

  it('shows Alert with correct title when delete button is pressed', () => {
    const { tree } = render(React.createElement(CharacterDetailScreen));
    const deleteButton = findAllNodes(
      tree,
      (n) => typeof n === 'object' && n.props?.testID === 'delete-character-button',
    )[0];
    expect(deleteButton).toBeDefined();
    deleteButton.props.onPress();
    expect(alertSpy).toHaveBeenCalledWith(
      'Delete Character',
      expect.stringContaining('Rissi'),
      expect.any(Array),
    );
  });

  it('Alert message includes the character name', () => {
    mockActiveCharacter = makeCharacter({ info: { name: 'Thorn', race: { name: 'Human' } } });
    const { tree } = render(React.createElement(CharacterDetailScreen));
    const deleteButton = findAllNodes(
      tree,
      (n) => typeof n === 'object' && n.props?.testID === 'delete-character-button',
    )[0];
    deleteButton.props.onPress();
    expect(alertSpy).toHaveBeenCalledWith(
      'Delete Character',
      expect.stringContaining('Thorn'),
      expect.any(Array),
    );
  });

  it('Alert has Cancel and Delete buttons', () => {
    const { tree } = render(React.createElement(CharacterDetailScreen));
    const deleteButton = findAllNodes(
      tree,
      (n) => typeof n === 'object' && n.props?.testID === 'delete-character-button',
    )[0];
    deleteButton.props.onPress();
    const buttons: { text: string; style?: string; onPress?: () => void }[] =
      alertSpy.mock.calls[0][2];
    expect(buttons.find((b) => b.text === 'Cancel')).toBeDefined();
    expect(buttons.find((b) => b.text === 'Delete')).toBeDefined();
  });

  it('Cancel button has cancel style', () => {
    const { tree } = render(React.createElement(CharacterDetailScreen));
    const deleteButton = findAllNodes(
      tree,
      (n) => typeof n === 'object' && n.props?.testID === 'delete-character-button',
    )[0];
    deleteButton.props.onPress();
    const buttons: { text: string; style?: string }[] = alertSpy.mock.calls[0][2];
    const cancelBtn = buttons.find((b) => b.text === 'Cancel');
    expect(cancelBtn?.style).toBe('cancel');
  });

  it('Delete button has destructive style', () => {
    const { tree } = render(React.createElement(CharacterDetailScreen));
    const deleteButton = findAllNodes(
      tree,
      (n) => typeof n === 'object' && n.props?.testID === 'delete-character-button',
    )[0];
    deleteButton.props.onPress();
    const buttons: { text: string; style?: string }[] = alertSpy.mock.calls[0][2];
    const deleteBtn = buttons.find((b) => b.text === 'Delete');
    expect(deleteBtn?.style).toBe('destructive');
  });
});

// ---- Tests: confirm delete ----

describe('CharacterDetailScreen — confirming delete', () => {
  let alertSpy: jest.SpyInstance;

  beforeEach(() => {
    mockActiveCharacter = makeCharacter();
    alertSpy = jest.spyOn(Alert, 'alert').mockImplementation(() => undefined);
  });

  afterEach(() => {
    alertSpy.mockRestore();
  });

  it('dispatches deleteCharacter thunk when Delete is confirmed', async () => {
    const { deleteCharacter } = require('@/store/slices/charactersSlice');
    const { tree } = render(React.createElement(CharacterDetailScreen));
    const deleteButton = findAllNodes(
      tree,
      (n) => typeof n === 'object' && n.props?.testID === 'delete-character-button',
    )[0];
    deleteButton.props.onPress();
    const buttons: { text: string; onPress?: () => Promise<void> }[] = alertSpy.mock.calls[0][2];
    const confirmBtn = buttons.find((b) => b.text === 'Delete');
    await confirmBtn!.onPress!();
    expect(deleteCharacter).toHaveBeenCalledWith('char-123');
    expect(mockDispatch).toHaveBeenCalledWith('DELETE_CHARACTER_THUNK');
  });

  it('navigates to characters list after successful delete', async () => {
    const { tree } = render(React.createElement(CharacterDetailScreen));
    const deleteButton = findAllNodes(
      tree,
      (n) => typeof n === 'object' && n.props?.testID === 'delete-character-button',
    )[0];
    deleteButton.props.onPress();
    const buttons: { text: string; onPress?: () => Promise<void> }[] = alertSpy.mock.calls[0][2];
    const confirmBtn = buttons.find((b) => b.text === 'Delete');
    await confirmBtn!.onPress!();
    expect(mockReplace).toHaveBeenCalledWith('/(tabs)/characters');
  });

  it('does not navigate when deleteCharacter thunk throws', async () => {
    mockUnwrap.mockRejectedValueOnce(new Error('Delete failed'));
    // Suppress the second Alert (Delete Failed) as well
    alertSpy.mockImplementation(() => undefined);

    const { tree } = render(React.createElement(CharacterDetailScreen));
    const deleteButton = findAllNodes(
      tree,
      (n) => typeof n === 'object' && n.props?.testID === 'delete-character-button',
    )[0];
    deleteButton.props.onPress();
    const buttons: { text: string; onPress?: () => Promise<void> }[] = alertSpy.mock.calls[0][2];
    const confirmBtn = buttons.find((b) => b.text === 'Delete');
    await confirmBtn!.onPress!();
    expect(mockReplace).not.toHaveBeenCalled();
  });

  it('shows Delete Failed alert when deleteCharacter thunk throws', async () => {
    mockUnwrap.mockRejectedValueOnce(new Error('Network error'));
    const { tree } = render(React.createElement(CharacterDetailScreen));
    const deleteButton = findAllNodes(
      tree,
      (n) => typeof n === 'object' && n.props?.testID === 'delete-character-button',
    )[0];
    deleteButton.props.onPress();
    const buttons: { text: string; onPress?: () => Promise<void> }[] = alertSpy.mock.calls[0][2];
    const confirmBtn = buttons.find((b) => b.text === 'Delete');
    await confirmBtn!.onPress!();
    expect(alertSpy).toHaveBeenCalledWith('Delete Failed', 'Network error');
  });
});

// ---- Tests: cancel delete ----

describe('CharacterDetailScreen — cancelling delete', () => {
  let alertSpy: jest.SpyInstance;

  beforeEach(() => {
    mockActiveCharacter = makeCharacter();
    alertSpy = jest.spyOn(Alert, 'alert').mockImplementation(() => undefined);
  });

  afterEach(() => {
    alertSpy.mockRestore();
  });

  it('does not dispatch deleteCharacter when Cancel is pressed', () => {
    const { deleteCharacter } = require('@/store/slices/charactersSlice');
    const { tree } = render(React.createElement(CharacterDetailScreen));
    const deleteButton = findAllNodes(
      tree,
      (n) => typeof n === 'object' && n.props?.testID === 'delete-character-button',
    )[0];
    deleteButton.props.onPress();
    const buttons: { text: string; onPress?: () => void }[] = alertSpy.mock.calls[0][2];
    const cancelBtn = buttons.find((b) => b.text === 'Cancel');
    cancelBtn!.onPress?.();
    expect(deleteCharacter).not.toHaveBeenCalled();
    expect(mockDispatch).not.toHaveBeenCalledWith('DELETE_CHARACTER_THUNK');
  });

  it('does not navigate when Cancel is pressed', () => {
    const { tree } = render(React.createElement(CharacterDetailScreen));
    const deleteButton = findAllNodes(
      tree,
      (n) => typeof n === 'object' && n.props?.testID === 'delete-character-button',
    )[0];
    deleteButton.props.onPress();
    const buttons: { text: string; onPress?: () => void }[] = alertSpy.mock.calls[0][2];
    const cancelBtn = buttons.find((b) => b.text === 'Cancel');
    cancelBtn!.onPress?.();
    expect(mockReplace).not.toHaveBeenCalled();
    expect(mockBack).not.toHaveBeenCalled();
  });
});
