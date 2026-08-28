import React from 'react';
import { render, fireEvent, type RenderedNode } from '../../helpers/testUtils';
import { FeatSlotList } from '@/components/character/direct-entry/FeatSlotList';
import type { CharacterFeat } from '@/types/feats';

const mockDispatch = jest.fn();
const mockUseAppSelector = jest.fn((selector: (s: unknown) => unknown) =>
  selector({
    characterEntry: {
      character: {
        classes: { classes: [] },
        feats: { feats: [] },
        flaws: { flaws: [] },
        info: { race: { name: '' } },
        spellcasting: { pools: [], knownSpells: [], spellbooks: [] },
      },
    },
    ruleset: { activeRuleset: { optionalRules: { eitrMode: 'off' } } },
    gameData: { classes: [] },
  }),
);

jest.mock('@/store/hooks', () => ({
  useAppDispatch: () => mockDispatch,
  useAppSelector: (selector: (s: unknown) => unknown) => mockUseAppSelector(selector),
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
  computeFeatSlots: jest.fn(() => []),
  // Pure helpers — exercised for real in the characterComputations suite, so
  // keep the genuine behaviour here rather than stubbing it out.
  selectedArchetypeNames: (cls: { archetype?: string[]; archetypeName?: string }) =>
    cls.archetypeName ? [...(cls.archetype ?? []), cls.archetypeName] : (cls.archetype ?? []),
  buildReplacedFeaturesByClassId: jest.fn(() => new Map()),
}));

const featPickerProps: Record<string, unknown>[] = [];
jest.mock('@/components/character/direct-entry/FeatPickerSheet', () => ({
  FeatPickerSheet: (props: Record<string, unknown>) => {
    featPickerProps.push(props);
    return null;
  },
}));

jest.mock('@/components/ui/SearchPickerSheet', () => ({
  SearchPickerSheet: () => null,
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
    getArchetypesByClass: () => Promise.resolve([]),
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
  mockUseAppSelector.mockClear();
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

  it('onShow callback executes deferred focus path without error', () => {
    const result = render(<FeatSlotList />);
    const modals = findByType(result.tree, 'Modal');
    expect(modals.length).toBeGreaterThan(0);
    expect(() => modals[0].props.onShow()).not.toThrow();
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

describe('FeatSlotList - Slot rendering', () => {
  const computeFeatSlotsMock = jest.requireMock('@/utils/characterComputations')
    .computeFeatSlots as jest.Mock;
  const buildReplacedMock = jest.requireMock('@/utils/characterComputations')
    .buildReplacedFeaturesByClassId as jest.Mock;

  // Raw computed slot format (source, availableAt, availableAtLevel only)
  const rawLevelSlot = { source: 'level', availableAt: 'Level 1', availableAtLevel: 1 };
  const rawRacialSlot = { source: 'racial', availableAt: 'Race', availableAtLevel: 1 };
  const rawMythicSlot = { source: 'mythic', availableAt: 'Mythic 1', availableAtLevel: 1 };

  // Bonus feats come from store feats where source starts with 'bonus_'
  const bonusFeat: CharacterFeat = {
    featId: '',
    name: '',
    source: 'bonus_1',
    grantedAtLevel: 2,
    active: true,
    prereqOverride: false,
    choices: {},
    sourceLabel: 'Fighter 2',
  };

  const assignedFeat: CharacterFeat = {
    featId: 'power-attack',
    name: 'Power Attack',
    source: 'racial',
    grantedAtLevel: 1,
    active: true,
    prereqOverride: false,
    choices: {},
  };

  function stateWith(feats: CharacterFeat[]) {
    return (selector: (s: unknown) => unknown) =>
      selector({
        characterEntry: {
          character: {
            classes: { classes: [] },
            feats: { feats: feats },
            flaws: { flaws: [] },
            info: { race: { name: '' } },
            spellcasting: { pools: [], knownSpells: [], spellbooks: [] },
          },
        },
        ruleset: { activeRuleset: { optionalRules: { eitrMode: 'off' } } },
        gameData: { classes: [] },
      });
  }

  beforeEach(() => {
    mockDispatch.mockClear();
    mockUseAppSelector.mockClear();
    computeFeatSlotsMock.mockReturnValue([]);
    buildReplacedMock.mockReturnValue(new Map());
  });

  it('renders an unassigned slot row with placeholder label', () => {
    computeFeatSlotsMock.mockReturnValueOnce([rawLevelSlot]);
    const { getAllByRole } = render(<FeatSlotList />);
    const slotBtn = getAllByRole('button').find(
      (b) => b.props.accessibilityLabel === 'Level 1: —— unassigned ——',
    );
    expect(slotBtn).toBeTruthy();
  });

  it('renders an assigned slot row with feat name', () => {
    computeFeatSlotsMock.mockReturnValueOnce([rawRacialSlot]);
    mockUseAppSelector.mockImplementation(stateWith([assignedFeat]));
    const { getAllByRole } = render(<FeatSlotList />);
    const slotBtn = getAllByRole('button').find(
      (b) => b.props.accessibilityLabel === 'Race: Power Attack',
    );
    expect(slotBtn).toBeTruthy();
  });

  it('renders a bonus slot using sourceLabel instead of availableAt', () => {
    mockUseAppSelector.mockImplementation(stateWith([bonusFeat]));
    const result = render(<FeatSlotList />);
    const allText = getAllText(result.tree);
    expect(allText.some((t) => t === 'Fighter 2')).toBe(true);
  });

  it('renders SOURCE badge for each slot source type', () => {
    computeFeatSlotsMock.mockReturnValueOnce([rawLevelSlot, rawRacialSlot, rawMythicSlot]);
    mockUseAppSelector.mockImplementation(stateWith([bonusFeat]));
    const result = render(<FeatSlotList />);
    const allText = getAllText(result.tree);
    expect(allText.some((t) => t === 'LEVEL')).toBe(true);
    expect(allText.some((t) => t === 'RACIAL')).toBe(true);
    expect(allText.some((t) => t === 'BONUS')).toBe(true);
    expect(allText.some((t) => t === 'MYTHIC')).toBe(true);
  });

  // ---- class-granted slots (issue #256) ----

  const rawClassSlot = {
    id: 'class:cls-1:bonus-feat:4',
    source: 'class',
    availableAt: 'Fighter 4',
    availableAtLevel: 4,
    sourceLabel: 'Fighter 4',
    classLevel: 4,
    allowedFeatTypes: ['combat'],
  };

  it('renders a class-granted slot with a CLASS badge and its class label', () => {
    computeFeatSlotsMock.mockReturnValueOnce([rawClassSlot]);
    const result = render(<FeatSlotList />);
    const allText = getAllText(result.tree);
    expect(allText.some((t) => t === 'CLASS')).toBe(true);
    expect(allText.some((t) => t === 'Fighter 4')).toBe(true);
  });

  it('threads archetype-replaced features through to computeFeatSlots', () => {
    // An archetype that replaces "Bonus Feats" has to reach computeFeatSlots as
    // options.replacedFeaturesByClassId, or the slots it removed keep rendering.
    const replaced = new Map([['cls-1', new Set(['Bonus Feat'])]]);
    buildReplacedMock.mockReturnValue(replaced);

    render(<FeatSlotList />);

    expect(computeFeatSlotsMock).toHaveBeenCalled();
    const options = computeFeatSlotsMock.mock.calls.at(-1)?.[3];
    expect(options.replacedFeaturesByClassId).toBe(replaced);
  });

  it('matches an assigned feat to a class slot by its composite id', () => {
    const assignedClassFeat: CharacterFeat = {
      featId: 'power-attack',
      name: 'Power Attack',
      source: 'class:cls-1:bonus-feat:4',
      grantedAtLevel: 4,
      active: true,
      prereqOverride: false,
      choices: {},
      sourceLabel: 'Fighter 4',
    };
    computeFeatSlotsMock.mockReturnValueOnce([rawClassSlot]);
    mockUseAppSelector.mockImplementation(stateWith([assignedClassFeat]));
    const { getAllByRole } = render(<FeatSlotList />);
    const slotBtn = getAllByRole('button').find(
      (b) => b.props.accessibilityLabel === 'Fighter 4: Power Attack',
    );
    expect(slotBtn).toBeTruthy();
  });

  it('keeps an assigned class feat visible when its slot is no longer computed', () => {
    const orphanedClassFeat: CharacterFeat = {
      featId: 'cleave',
      name: 'Cleave',
      source: 'class:cls-gone:bonus-feat:2',
      grantedAtLevel: 2,
      active: true,
      prereqOverride: false,
      choices: {},
      sourceLabel: 'Fighter 2',
    };
    mockUseAppSelector.mockImplementation(stateWith([orphanedClassFeat]));
    const { getAllByRole } = render(<FeatSlotList />);
    const slotBtn = getAllByRole('button').find(
      (b) => b.props.accessibilityLabel === 'Fighter 2: Cleave',
    );
    expect(slotBtn).toBeTruthy();
  });

  it('passes the slot restriction through to the feat picker', () => {
    featPickerProps.length = 0;
    computeFeatSlotsMock.mockReturnValueOnce([rawClassSlot]);
    render(<FeatSlotList />);
    expect(featPickerProps.some((p) => p.allowedTypes === rawClassSlot.allowedFeatTypes)).toBe(
      true,
    );
  });

  it('leaves the picker unrestricted for ordinary level slots', () => {
    featPickerProps.length = 0;
    computeFeatSlotsMock.mockReturnValueOnce([rawLevelSlot]);
    render(<FeatSlotList />);
    expect(featPickerProps.length).toBeGreaterThan(0);
    expect(featPickerProps.every((p) => p.allowedTypes === undefined)).toBe(true);
  });

  it('does not offer a remove button on class-granted slots', () => {
    computeFeatSlotsMock.mockReturnValueOnce([rawClassSlot]);
    const { getAllByRole } = render(<FeatSlotList />);
    const removeBtn = getAllByRole('button').find(
      (b) => b.props.accessibilityLabel === 'Remove bonus slot',
    );
    expect(removeBtn).toBeFalsy();
  });

  it('pressing an unassigned slot row does not dispatch', () => {
    computeFeatSlotsMock.mockReturnValueOnce([rawLevelSlot]);
    const { getAllByRole } = render(<FeatSlotList />);
    const slotBtn = getAllByRole('button').find(
      (b) => b.props.accessibilityLabel === 'Level 1: —— unassigned ——',
    );
    expect(slotBtn).toBeTruthy();
    fireEvent.press(slotBtn!);
    expect(mockDispatch).not.toHaveBeenCalled();
  });

  it('unassign button is rendered for assigned slots', () => {
    computeFeatSlotsMock.mockReturnValueOnce([rawRacialSlot]);
    mockUseAppSelector.mockImplementation(stateWith([assignedFeat]));
    const { getAllByRole } = render(<FeatSlotList />);
    const unassignBtn = getAllByRole('button').find(
      (b) => b.props.accessibilityLabel === 'Unassign feat',
    );
    expect(unassignBtn).toBeTruthy();
  });

  it('pressing unassign dispatches unassignFeat', () => {
    computeFeatSlotsMock.mockReturnValueOnce([rawRacialSlot]);
    mockUseAppSelector.mockImplementation(stateWith([assignedFeat]));
    const { getAllByRole } = render(<FeatSlotList />);
    const unassignBtn = getAllByRole('button').find(
      (b) => b.props.accessibilityLabel === 'Unassign feat',
    );
    expect(unassignBtn).toBeTruthy();
    fireEvent.press(unassignBtn!);
    expect(mockDispatch).toHaveBeenCalled();
    const action = mockDispatch.mock.calls[mockDispatch.mock.calls.length - 1][0];
    expect(action.type).toBe('characterEntry/unassignFeat');
  });

  it('remove bonus slot button dispatches removeFeatSlot', () => {
    mockUseAppSelector.mockImplementation(stateWith([bonusFeat]));
    const { getAllByRole } = render(<FeatSlotList />);
    const removeBtn = getAllByRole('button').find(
      (b) => b.props.accessibilityLabel === 'Remove bonus slot',
    );
    expect(removeBtn).toBeTruthy();
    fireEvent.press(removeBtn!);
    expect(mockDispatch).toHaveBeenCalled();
    const action = mockDispatch.mock.calls[mockDispatch.mock.calls.length - 1][0];
    expect(action.type).toBe('characterEntry/removeFeatSlot');
  });

  it('adding a slot when bonus feats exist uses the correct next index', () => {
    mockUseAppSelector.mockImplementation(stateWith([bonusFeat]));
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
    expect(addSlotBtn.length).toBeGreaterThan(0);
    fireEvent.press(addSlotBtn[0]);

    expect(mockDispatch).toHaveBeenCalled();
    const call = mockDispatch.mock.calls[mockDispatch.mock.calls.length - 1][0];
    expect(call.type).toBe('characterEntry/addFeatSlot');
    expect(call.payload.availableAtLevel).toBe(2);
  });
});
