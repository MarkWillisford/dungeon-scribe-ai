import React from 'react';
import { render, fireEvent, type RenderedNode } from '../../helpers/testUtils';
import { FeatSlotList } from '@/components/character/direct-entry/FeatSlotList';

const mockDispatch = jest.fn();

jest.mock('@/store/hooks', () => ({
  useAppDispatch: () => mockDispatch,
  useAppSelector: (selector: (s: unknown) => unknown) =>
    selector({
      characterEntry: {
        character: {
          classes: { classes: [] },
          feats: { feats: [] },
          info: { race: { name: '' } },
          spellcasting: { pools: [], knownSpells: [], spellbooks: [] },
        },
      },
      ruleset: {
        activeRuleset: {
          optionalRules: { eitrMode: 'off' },
        },
      },
      gameData: { classes: [] },
    }),
}));

jest.mock('@/hooks/useTheme', () => ({
  useTheme: () => ({
    colors: {
      bg: { primary: '#fff', secondary: '#f5f5f5', tertiary: '#eee' },
      border: { DEFAULT: '#ccc' },
      text: { primary: '#000', secondary: '#333', tertiary: '#999' },
    },
    fantasy: { gold: '#FFD700', bronze: '#CD7F32', darkWood: '#5C3317' },
    isDark: false,
  }),
}));

jest.mock('@/utils/characterComputations', () => ({
  computeFeatSlots: () => [],
}));

jest.mock('@/store/slices/gameDataSlice', () => ({
  selectClassDataMap: () => ({}),
}));

jest.mock('@/services/FeatRegistryService', () => ({
  FeatRegistryService: { getFeat: () => undefined },
}));

jest.mock('@/services/GameDataService', () => ({
  GameDataService: {
    getWeapons: () => Promise.resolve([]),
    buildCastableSpellItems: () => Promise.resolve([]),
  },
}));

function findByType(node: RenderedNode, typeName: string): RenderedNode[] {
  const results: RenderedNode[] = [];
  if (node.type === typeName) results.push(node);
  for (const child of node.children) {
    if (typeof child !== 'string') results.push(...findByType(child, typeName));
  }
  return results;
}

function getAllText(node: RenderedNode): string[] {
  const texts: string[] = [];
  for (const child of node.children) {
    if (typeof child === 'string') texts.push(child);
    else texts.push(...getAllText(child));
  }
  return texts;
}

function findAllNodes(node: RenderedNode, pred: (n: RenderedNode) => boolean): RenderedNode[] {
  const acc: RenderedNode[] = [];
  if (pred(node)) acc.push(node);
  for (const c of node.children) {
    if (typeof c !== 'string') acc.push(...findAllNodes(c, pred));
  }
  return acc;
}

beforeEach(() => {
  mockDispatch.mockClear();
});

describe('FeatSlotList - Add bonus slot modal', () => {
  it('renders the Add bonus slot button', () => {
    const { getAllByRole } = render(<FeatSlotList />);
    const buttons = getAllByRole('button');
    const addButton = buttons.find((b) => b.props.accessibilityLabel === 'Add bonus feat slot');
    expect(addButton).toBeTruthy();
  });

  it('modal TextInput does not use autoFocus', () => {
    const result = render(<FeatSlotList />);
    const inputs = findByType(result.tree, 'TextInput');
    for (const input of inputs) {
      expect(input.props.autoFocus).toBeFalsy();
    }
  });

  it('modal has onShow prop for deferred focus', () => {
    const result = render(<FeatSlotList />);
    const modals = findByType(result.tree, 'Modal');
    expect(modals.length).toBeGreaterThan(0);
    expect(typeof modals[0].props.onShow).toBe('function');
  });

  it('pressing Add bonus slot sets modal visible=true on same instance', () => {
    const { getAllByRole, rerender } = render(<FeatSlotList />);
    const buttons = getAllByRole('button');
    const addButton = buttons.find((b) => b.props.accessibilityLabel === 'Add bonus feat slot');
    expect(addButton).toBeTruthy();
    fireEvent.press(addButton!);
    // Re-render the same instance so the updated bonusLabelVisible state is reflected
    const updatedTree = rerender();
    const modals = findByType(updatedTree, 'Modal');
    expect(modals.length).toBeGreaterThan(0);
    expect(modals[0].props.visible).toBe(true);
  });

  it('pressing Add Slot dispatches addFeatSlot action', () => {
    const { getAllByRole, rerender } = render(<FeatSlotList />);
    const buttons = getAllByRole('button');
    const addButton = buttons.find((b) => b.props.accessibilityLabel === 'Add bonus feat slot');
    fireEvent.press(addButton!);

    const updatedTree = rerender();
    const addSlotBtn = findAllNodes(
      updatedTree,
      (n) => n.props.accessibilityLabel === 'Add bonus feat slot confirm',
    );

    expect(addSlotBtn.length).toBeGreaterThan(0);
    fireEvent.press(addSlotBtn[0]);
    expect(mockDispatch).toHaveBeenCalled();
    const call = mockDispatch.mock.calls[mockDispatch.mock.calls.length - 1][0];
    expect(call.type).toBe('characterEntry/addFeatSlot');
  });

  it('pressing Add Slot with no input dispatches with sourceLabel undefined', () => {
    const { getAllByRole, rerender } = render(<FeatSlotList />);
    const addButton = getAllByRole('button').find(
      (b) => b.props.accessibilityLabel === 'Add bonus feat slot',
    );
    fireEvent.press(addButton!);

    const updatedTree = rerender();
    const addSlotBtn = findAllNodes(
      updatedTree,
      (n) => n.props.accessibilityLabel === 'Add bonus feat slot confirm',
    );
    fireEvent.press(addSlotBtn[0]);

    const call = mockDispatch.mock.calls[mockDispatch.mock.calls.length - 1][0];
    expect(call.type).toBe('characterEntry/addFeatSlot');
    expect(call.payload.sourceLabel).toBeUndefined();
  });

  it('pressing Cancel does not dispatch and closes modal', () => {
    const { getAllByRole, rerender } = render(<FeatSlotList />);
    const addButton = getAllByRole('button').find(
      (b) => b.props.accessibilityLabel === 'Add bonus feat slot',
    );
    fireEvent.press(addButton!);

    const updatedTree = rerender();
    const cancelBtn = findAllNodes(
      updatedTree,
      (n) => n.props.accessibilityLabel === 'Cancel adding bonus feat slot',
    );
    expect(cancelBtn.length).toBeGreaterThan(0);
    fireEvent.press(cancelBtn[0]);

    expect(mockDispatch).not.toHaveBeenCalled();
    const finalTree = rerender();
    const modals = findByType(finalTree, 'Modal');
    expect(modals[0].props.visible).toBe(false);
  });

  it('onRequestClose closes the modal without dispatching', () => {
    const { getAllByRole, rerender } = render(<FeatSlotList />);
    const addButton = getAllByRole('button').find(
      (b) => b.props.accessibilityLabel === 'Add bonus feat slot',
    );
    fireEvent.press(addButton!);

    const updatedTree = rerender();
    const modals = findByType(updatedTree, 'Modal');
    expect(modals.length).toBeGreaterThan(0);
    modals[0].props.onRequestClose();

    const finalTree = rerender();
    expect(findByType(finalTree, 'Modal')[0].props.visible).toBe(false);
    expect(mockDispatch).not.toHaveBeenCalled();
  });
});
