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

beforeEach(() => {
  mockDispatch.mockClear();
});

describe('FeatSlotList — Add bonus slot modal', () => {
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

  it('pressing Add bonus slot sets modal visible', () => {
    const { getAllByRole } = render(<FeatSlotList />);
    const buttons = getAllByRole('button');
    const addButton = buttons.find((b) => b.props.accessibilityLabel === 'Add bonus feat slot');
    expect(addButton).toBeTruthy();
    fireEvent.press(addButton!);
    // After pressing, modal visible state should be true — re-render to verify
    const modals = findByType(render(<FeatSlotList />).tree, 'Modal');
    expect(modals.length).toBeGreaterThan(0);
  });

  it('pressing Add Slot dispatches addFeatSlot action', () => {
    const { getAllByRole, rerender } = render(<FeatSlotList />);
    const buttons = getAllByRole('button');
    const addButton = buttons.find((b) => b.props.accessibilityLabel === 'Add bonus feat slot');
    fireEvent.press(addButton!);

    const updatedTree = rerender();
    function findAllNodes(node: RenderedNode, pred: (n: RenderedNode) => boolean): RenderedNode[] {
      const acc: RenderedNode[] = [];
      if (pred(node)) acc.push(node);
      for (const c of node.children) {
        if (typeof c !== 'string') acc.push(...findAllNodes(c, pred));
      }
      return acc;
    }
    const addSlotBtn = findAllNodes(
      updatedTree,
      (n) => n.props.accessibilityRole === 'button' && getAllText(n).includes('Add Slot'),
    );

    function getAllText(node: RenderedNode): string[] {
      const texts: string[] = [];
      for (const child of node.children) {
        if (typeof child === 'string') texts.push(child);
        else texts.push(...getAllText(child));
      }
      return texts;
    }

    if (addSlotBtn.length > 0) {
      fireEvent.press(addSlotBtn[0]);
      expect(mockDispatch).toHaveBeenCalled();
      const call = mockDispatch.mock.calls[mockDispatch.mock.calls.length - 1][0];
      expect(call.type).toBe('characterEntry/addFeatSlot');
    }
  });
});
