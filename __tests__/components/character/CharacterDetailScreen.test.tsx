import React from 'react';
import { Alert } from 'react-native';
import { render, fireEvent, type RenderedNode } from '../../helpers/testUtils';

const flushPromises = () => new Promise((resolve) => setImmediate(resolve));

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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const OrnatePanel = (props: any) =>
    React.createElement('OrnatePanel', { testID: props.testID }, props.children);
  return { OrnatePanel };
});

jest.mock('@/components/ui/OrnateButton', () => {
  const React = require('react');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const OrnateButton = (props: any) =>
    React.createElement(
      'Pressable',
      { testID: props.testID, onPress: props.onPress, disabled: props.disabled },
      props.title,
    );
  return { OrnateButton };
});

jest.mock('@/components/ui/OrnateTab', () => {
  const React = require('react');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const OrnateTab = (props: any) => React.createElement('OrnateTab', props);
  return { OrnateTab };
});

jest.mock('@/components/ui/LoadingSpinner', () => {
  const React = require('react');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

// ---- Helpers for the confirmation modal flow ----

function nodeById(tree: RenderedNode, testID: string): RenderedNode | undefined {
  return findAllNodes(tree, (n) => typeof n === 'object' && n.props?.testID === testID)[0];
}

/** Render, then open the delete-confirmation modal and return the updated tree. */
function openDeleteModal() {
  const view = render(React.createElement(CharacterDetailScreen));
  const deleteButton = nodeById(view.tree, 'delete-character-button')!;
  fireEvent.press(deleteButton);
  return { view, tree: view.rerender() };
}

// ---- Tests: delete button placement ----

describe('CharacterDetailScreen — delete button', () => {
  beforeEach(() => {
    mockActiveCharacter = makeCharacter();
  });

  it('renders the delete button alongside the edit button when a character is loaded', () => {
    const { queryByTestId } = render(React.createElement(CharacterDetailScreen));
    expect(queryByTestId('delete-character-button')).not.toBeNull();
    expect(queryByTestId('character-detail-edit')).not.toBeNull();
  });

  it('does not show the confirmation modal until the delete button is pressed', () => {
    const { tree } = render(React.createElement(CharacterDetailScreen));
    // The mocked Modal renders null while hidden, so its contents are absent.
    expect(nodeById(tree, 'delete-confirm-input')).toBeUndefined();
  });

  it('opens the confirmation modal when the delete button is pressed', () => {
    const { tree } = openDeleteModal();
    expect(nodeById(tree, 'delete-confirm-modal')).toBeDefined();
    expect(nodeById(tree, 'delete-confirm-input')).toBeDefined();
  });
});

// ---- Tests: confirmation gating ----

describe('CharacterDetailScreen — delete confirmation gating', () => {
  beforeEach(() => {
    mockActiveCharacter = makeCharacter();
  });

  it('disables the confirm button until the typed name matches', () => {
    const { view, tree } = openDeleteModal();
    expect(nodeById(tree, 'delete-confirm-submit')!.props.disabled).toBe(true);

    fireEvent.changeText(nodeById(tree, 'delete-confirm-input')!, 'Wrong');
    expect(nodeById(view.rerender(), 'delete-confirm-submit')!.props.disabled).toBe(true);

    fireEvent.changeText(nodeById(view.rerender(), 'delete-confirm-input')!, 'Rissi');
    expect(nodeById(view.rerender(), 'delete-confirm-submit')!.props.disabled).toBe(false);
  });

  it('enables the confirm button for a case-insensitive, whitespace-padded match', () => {
    const { view, tree } = openDeleteModal();
    fireEvent.changeText(nodeById(tree, 'delete-confirm-input')!, '  rissi ');
    expect(nodeById(view.rerender(), 'delete-confirm-submit')!.props.disabled).toBe(false);
  });

  it('does not dispatch deleteCharacter when confirm is pressed with a non-matching name', async () => {
    const { deleteCharacter } = require('@/store/slices/charactersSlice');
    const { view, tree } = openDeleteModal();
    fireEvent.changeText(nodeById(tree, 'delete-confirm-input')!, 'Wrong');
    const submit = nodeById(view.rerender(), 'delete-confirm-submit')!;
    fireEvent.press(submit); // disabled → fireEvent is a no-op
    await flushPromises();
    expect(deleteCharacter).not.toHaveBeenCalled();
  });
});

// ---- Tests: confirm delete ----

describe('CharacterDetailScreen — confirming delete', () => {
  beforeEach(() => {
    mockActiveCharacter = makeCharacter();
  });

  async function confirmDeletion(name: string) {
    const { view, tree } = openDeleteModal();
    fireEvent.changeText(nodeById(tree, 'delete-confirm-input')!, name);
    const submit = nodeById(view.rerender(), 'delete-confirm-submit')!;
    await submit.props.onPress();
    return view;
  }

  it('dispatches deleteCharacter thunk when the name is confirmed', async () => {
    const { deleteCharacter } = require('@/store/slices/charactersSlice');
    await confirmDeletion('Rissi');
    expect(deleteCharacter).toHaveBeenCalledWith('char-123');
    expect(mockDispatch).toHaveBeenCalledWith('DELETE_CHARACTER_THUNK');
  });

  it('navigates to the characters list after a successful delete', async () => {
    await confirmDeletion('Rissi');
    expect(mockReplace).toHaveBeenCalledWith('/(tabs)/characters');
  });

  it('does not navigate when the deleteCharacter thunk throws', async () => {
    mockUnwrap.mockRejectedValueOnce('Delete failed');
    const alertSpy = jest.spyOn(Alert, 'alert').mockImplementation(() => undefined);
    await confirmDeletion('Rissi');
    expect(mockReplace).not.toHaveBeenCalled();
    alertSpy.mockRestore();
  });

  it('shows a Delete Failed alert when the deleteCharacter thunk throws', async () => {
    mockUnwrap.mockRejectedValueOnce('Network error');
    const alertSpy = jest.spyOn(Alert, 'alert').mockImplementation(() => undefined);
    await confirmDeletion('Rissi');
    expect(alertSpy).toHaveBeenCalledWith('Delete Failed', 'Network error');
    alertSpy.mockRestore();
  });
});

// ---- Tests: cancel delete ----

describe('CharacterDetailScreen — cancelling delete', () => {
  beforeEach(() => {
    mockActiveCharacter = makeCharacter();
  });

  it('closes the modal and does not dispatch deleteCharacter when Cancel is pressed', () => {
    const { deleteCharacter } = require('@/store/slices/charactersSlice');
    const { view, tree } = openDeleteModal();
    fireEvent.press(nodeById(tree, 'delete-confirm-cancel')!);
    const reTree = view.rerender();
    // Modal closed → its contents render null again.
    expect(nodeById(reTree, 'delete-confirm-input')).toBeUndefined();
    expect(deleteCharacter).not.toHaveBeenCalled();
    expect(mockReplace).not.toHaveBeenCalled();
    expect(mockBack).not.toHaveBeenCalled();
  });
});
