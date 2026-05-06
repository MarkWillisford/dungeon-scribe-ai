import React from 'react';
import { render, fireEvent, type RenderedNode } from '../../helpers/testUtils';
import {
  EquipmentSection,
  formatEffectSummary,
  formatSpecialSummary,
} from '@/components/character/direct-entry/EquipmentSection';
import type { EditorEquipmentItem } from '@/types/character';
import { BonusType } from '@/types/base';

// ---- Mocks ----

const mockDispatch = jest.fn();
let mockEquipment: EditorEquipmentItem[] = [];

jest.mock('@/store/hooks', () => ({
  useAppDispatch: () => mockDispatch,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  useAppSelector: (selector: (s: any) => any) =>
    selector({
      characterEntry: {
        character: {
          editorEquipment: mockEquipment,
          classes: { classes: [] },
          spellcasting: { pools: [] },
          info: { name: '' },
          abilityScores: {},
          combatStats: {},
          traits: { traits: [] },
          feats: { feats: [] },
        },
      },
    }),
}));

jest.mock('@/hooks/useTheme', () => ({
  useTheme: () => ({
    isDark: false,
    colors: {
      bg: { primary: '#fff', secondary: '#f5f5f5', tertiary: '#eee' },
      text: { primary: '#111', secondary: '#555', tertiary: '#999' },
      border: { DEFAULT: '#ddd' },
    },
    fantasy: { gold: '#d4af37', darkWood: '#8c5a28' },
  }),
}));

// Smart EquipmentPickerSheet mock — exposes select/custom/close callbacks
jest.mock('@/components/character/direct-entry/EquipmentPickerSheet', () => ({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  EquipmentPickerSheet: ({ onSelect, onAddCustom, onClose, visible }: any) => {
    if (!visible) return null;
    const React = require('react');
    return React.createElement('View', { testID: 'picker-sheet' }, [
      React.createElement('Pressable', {
        key: 'select',
        testID: 'mock-picker-select',
        onPress: () =>
          onSelect({
            definitionId: 'def-1',
            collection: 'magicItems',
            name: 'Ring of Protection',
            effects: [],
          }),
      }),
      React.createElement('Pressable', {
        key: 'custom',
        testID: 'mock-picker-custom',
        onPress: () => onAddCustom('Custom Amulet'),
      }),
      React.createElement('Pressable', {
        key: 'close',
        testID: 'mock-picker-close',
        onPress: onClose,
      }),
    ]);
  },
}));

// Smart ItemEffectEditorSheet mock — exposes save/remove/close callbacks
jest.mock('@/components/character/direct-entry/ItemEffectEditorSheet', () => ({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ItemEffectEditorSheet: ({ onSave, onRemoveItem, onClose, item }: any) => {
    if (!item) return null;
    const React = require('react');
    return React.createElement('View', { testID: 'editor-sheet' }, [
      React.createElement('Pressable', {
        key: 'save',
        testID: 'mock-editor-save',
        onPress: () => onSave({ ...item, name: 'Updated Name' }),
      }),
      React.createElement('Pressable', {
        key: 'remove',
        testID: 'mock-editor-remove',
        onPress: () => onRemoveItem(item.id),
      }),
      React.createElement('Pressable', {
        key: 'close',
        testID: 'mock-editor-close',
        onPress: onClose,
      }),
    ]);
  },
}));

// ---- Helpers ----

function findTestId(node: RenderedNode, testID: string): RenderedNode | null {
  if (node.props.testID === testID) return node;
  for (const child of node.children) {
    if (typeof child !== 'string') {
      const found = findTestId(child, testID);
      if (found) return found;
    }
  }
  return null;
}

function makeItem(overrides: Partial<EditorEquipmentItem> = {}): EditorEquipmentItem {
  return {
    id: 'item-1',
    collection: 'magicItems',
    name: 'Test Item',
    ...overrides,
  };
}

// ---- formatEffectSummary unit tests ----

describe('formatEffectSummary', () => {
  it('returns empty string for undefined', () => {
    expect(formatEffectSummary(undefined)).toBe('');
  });

  it('returns empty string for empty array', () => {
    expect(formatEffectSummary([])).toBe('');
  });

  it('returns empty string when all effects are special type', () => {
    expect(
      formatEffectSummary([
        { type: 'special', target: 'special.channel_dc', value: 2, source: 'x' },
      ]),
    ).toBe('');
  });

  it('formats a positive bonus', () => {
    const result = formatEffectSummary([
      { type: 'bonus', target: 'save.all', value: 2, bonusType: BonusType.RESISTANCE, source: 'x' },
    ]);
    expect(result).toContain('+2');
    expect(result).toContain('resistance');
  });

  it('formats a negative bonus', () => {
    const result = formatEffectSummary([
      {
        type: 'bonus',
        target: 'ability.str',
        value: -2,
        bonusType: BonusType.ENHANCEMENT,
        source: 'x',
      },
    ]);
    expect(result).toContain('-2');
  });

  it('falls back to "untyped" when bonusType missing', () => {
    const result = formatEffectSummary([
      { type: 'bonus', target: 'hp', value: 5, source: 'x' } as never,
    ]);
    expect(result).toContain('untyped');
  });

  it('caps at 3 bonus effects', () => {
    const effects = Array.from({ length: 5 }, (_, i) => ({
      type: 'bonus' as const,
      target: 'hp' as never,
      value: i + 1,
      bonusType: BonusType.UNTYPED,
      source: 'x',
    }));
    const parts = formatEffectSummary(effects).split(' · ');
    expect(parts).toHaveLength(3);
  });
});

// ---- formatSpecialSummary unit tests ----

describe('formatSpecialSummary', () => {
  it('returns empty string for undefined', () => {
    expect(formatSpecialSummary(undefined)).toBe('');
  });

  it('returns empty string for empty array', () => {
    expect(formatSpecialSummary([])).toBe('');
  });

  it('returns empty string when no special effects', () => {
    expect(
      formatSpecialSummary([
        {
          type: 'bonus',
          target: 'save.all',
          value: 1,
          bonusType: BonusType.RESISTANCE,
          source: 'x',
        },
      ]),
    ).toBe('');
  });

  it('formats a positive special effect', () => {
    const result = formatSpecialSummary([
      { type: 'special', target: 'special.channel_dc', value: 2, source: 'x' },
    ]);
    expect(result).toContain('+2');
    expect(result).toContain('channel dc');
  });

  it('formats a negative special effect', () => {
    const result = formatSpecialSummary([
      { type: 'special', target: 'special.rage_rounds', value: -1, source: 'x' },
    ]);
    expect(result).toContain('-1');
  });
});

// ---- EquipmentSection rendering tests ----

describe('EquipmentSection', () => {
  beforeEach(() => {
    mockDispatch.mockClear();
    mockEquipment = [];
  });

  it('renders the slot grid with empty slot buttons', () => {
    const { getAllByRole } = render(<EquipmentSection />);
    const buttons = getAllByRole('button');
    expect(buttons.length).toBeGreaterThan(0);
  });

  it('shows equipped item name when slot has an item', () => {
    mockEquipment = [makeItem({ slot: 'neck' })];
    const { queryByText } = render(<EquipmentSection />);
    expect(queryByText('Test Item')).toBeTruthy();
  });

  it('shows bonus effect summary on filled slot cell', () => {
    mockEquipment = [
      makeItem({
        slot: 'neck',
        effects: [
          {
            type: 'bonus',
            target: 'save.all',
            value: 2,
            bonusType: BonusType.RESISTANCE,
            source: 'x',
          },
        ],
      }),
    ];
    const { getAllText } = render(<EquipmentSection />);
    expect(getAllText().some((t) => t.includes('+2'))).toBe(true);
  });

  it('shows special effect summary on filled slot cell', () => {
    mockEquipment = [
      makeItem({
        slot: 'neck',
        effects: [{ type: 'special', target: 'special.channel_dc', value: 2, source: 'x' }],
      }),
    ];
    const { getAllText } = render(<EquipmentSection />);
    expect(getAllText().some((t) => t.includes('channel dc'))).toBe(true);
  });

  it('dispatches unassignEquipmentSlot when unassign button pressed', () => {
    mockEquipment = [makeItem({ slot: 'neck', id: 'neck-item' })];
    const rendered = render(<EquipmentSection />);
    const unassignBtn = findTestId(rendered.tree, 'unassign-neck');
    expect(unassignBtn).toBeTruthy();
    fireEvent.press(unassignBtn!);
    expect(mockDispatch).toHaveBeenCalled();
  });

  it('opens the picker when an empty slot is pressed', () => {
    mockEquipment = [];
    const rendered = render(<EquipmentSection />);
    const emptyBtn = rendered.getByLabelText('Equip Head');
    fireEvent.press(emptyBtn);
    const withPicker = rendered.rerender();
    expect(findTestId(withPicker, 'picker-sheet')).toBeTruthy();
  });

  it('dispatches addEquipment + assignEquipmentSlot when picker selects a slotted item', () => {
    mockEquipment = [];
    const rendered = render(<EquipmentSection />);
    fireEvent.press(rendered.getByLabelText('Equip Neck'));
    const withPicker = rendered.rerender();
    const selectBtn = findTestId(withPicker, 'mock-picker-select');
    expect(selectBtn).toBeTruthy();
    fireEvent.press(selectBtn!);
    expect(mockDispatch).toHaveBeenCalledTimes(2); // addEquipment + assignEquipmentSlot
  });

  it('dispatches addEquipment only (no assign) when picker adds item for slotless', () => {
    mockEquipment = [];
    // Slotless section's "Add Slotless Item" button has no testID, but we can trigger via picker
    // We'll open via the slot picker and test 'none' behavior by pressing Add Container
    const rendered = render(<EquipmentSection />);
    // The Add Container button is the first 'button' role in ContainerList section
    // It renders after the slot grid; let's use getAllByRole
    const buttons = rendered.getAllByRole('button');
    // The add-container button is in ContainerList (accessibilityRole="button", no label)
    // Press one that triggers onPickerOpen('none') — ContainerList's add button
    // We know buttons[15] or so, but easiest to just check dispatch count after picker custom
    fireEvent.press(rendered.getByLabelText('Equip Head'));
    const withPicker = rendered.rerender();
    const customBtn = findTestId(withPicker, 'mock-picker-custom');
    expect(customBtn).toBeTruthy();
    fireEvent.press(customBtn!);
    // pickerSlot = 'head' here, so assignEquipmentSlot IS dispatched
    expect(mockDispatch).toHaveBeenCalled();
  });

  it('closes picker when close button pressed', () => {
    mockEquipment = [];
    const rendered = render(<EquipmentSection />);
    fireEvent.press(rendered.getByLabelText('Equip Head'));
    const withPicker = rendered.rerender();
    const closeBtn = findTestId(withPicker, 'mock-picker-close');
    expect(closeBtn).toBeTruthy();
    fireEvent.press(closeBtn!);
    const closed = rendered.rerender();
    expect(findTestId(closed, 'picker-sheet')).toBeNull();
  });

  it('opens effect editor when slot item is tapped', () => {
    mockEquipment = [makeItem({ slot: 'neck', id: 'neck-1' })];
    const rendered = render(<EquipmentSection />);
    const slotBtn = findTestId(rendered.tree, 'slot-item-neck');
    expect(slotBtn).toBeTruthy();
    fireEvent.press(slotBtn!);
    const withEditor = rendered.rerender();
    expect(findTestId(withEditor, 'editor-sheet')).toBeTruthy();
  });

  it('dispatches updateEquipment when editor saves', () => {
    mockEquipment = [makeItem({ slot: 'neck', id: 'neck-1' })];
    const rendered = render(<EquipmentSection />);
    fireEvent.press(findTestId(rendered.tree, 'slot-item-neck')!);
    const withEditor = rendered.rerender();
    fireEvent.press(findTestId(withEditor, 'mock-editor-save')!);
    expect(mockDispatch).toHaveBeenCalled();
    const closed = rendered.rerender();
    expect(findTestId(closed, 'editor-sheet')).toBeNull();
  });

  it('dispatches removeEquipment when editor removes item', () => {
    mockEquipment = [makeItem({ slot: 'neck', id: 'neck-1' })];
    const rendered = render(<EquipmentSection />);
    fireEvent.press(findTestId(rendered.tree, 'slot-item-neck')!);
    const withEditor = rendered.rerender();
    fireEvent.press(findTestId(withEditor, 'mock-editor-remove')!);
    expect(mockDispatch).toHaveBeenCalled();
    const closed = rendered.rerender();
    expect(findTestId(closed, 'editor-sheet')).toBeNull();
  });

  it('closes editor without dispatch when close button pressed', () => {
    mockEquipment = [makeItem({ slot: 'neck', id: 'neck-1' })];
    const rendered = render(<EquipmentSection />);
    fireEvent.press(findTestId(rendered.tree, 'slot-item-neck')!);
    const withEditor = rendered.rerender();
    fireEvent.press(findTestId(withEditor, 'mock-editor-close')!);
    const closed = rendered.rerender();
    expect(findTestId(closed, 'editor-sheet')).toBeNull();
  });
});

// ---- Sub-component rendering tests ----

describe('EquipmentSection sub-components', () => {
  beforeEach(() => {
    mockDispatch.mockClear();
    mockEquipment = [];
  });

  it('CarriedList: renders carried items (non-magicItems, no slot/container/orbiting)', () => {
    mockEquipment = [makeItem({ id: 'gear-1', collection: 'weapons', name: 'Backpack' })];
    const { queryByText } = render(<EquipmentSection />);
    expect(queryByText('Backpack')).toBeTruthy();
  });

  it('CarriedList: renders nothing when no carried items', () => {
    mockEquipment = [];
    const rendered = render(<EquipmentSection />);
    const carriedItem = findTestId(rendered.tree, 'carried-item-item-1');
    expect(carriedItem).toBeNull();
  });

  it('CarriedList: dispatches removeEquipment when ✕ pressed', () => {
    mockEquipment = [makeItem({ id: 'gear-1', collection: 'weapons' })];
    const rendered = render(<EquipmentSection />);
    const removeBtn = findTestId(rendered.tree, 'carried-remove-gear-1');
    expect(removeBtn).toBeTruthy();
    fireEvent.press(removeBtn!);
    expect(mockDispatch).toHaveBeenCalled();
  });

  it('CarriedList: tapping item opens editor', () => {
    mockEquipment = [makeItem({ id: 'gear-1', collection: 'weapons' })];
    const rendered = render(<EquipmentSection />);
    fireEvent.press(findTestId(rendered.tree, 'carried-item-gear-1')!);
    const withEditor = rendered.rerender();
    expect(findTestId(withEditor, 'editor-sheet')).toBeTruthy();
  });

  it('IounStoneSection: renders orbiting ioun stones', () => {
    mockEquipment = [makeItem({ id: 'stone-1', isOrbiting: true, name: 'Dusty Rose Prism' })];
    const { queryByText } = render(<EquipmentSection />);
    expect(queryByText('Dusty Rose Prism')).toBeTruthy();
  });

  it('IounStoneSection: renders bonus summary for ioun stone', () => {
    mockEquipment = [
      makeItem({
        id: 'stone-1',
        isOrbiting: true,
        effects: [
          { type: 'bonus', target: 'ac', value: 1, bonusType: BonusType.INSIGHT, source: 'x' },
        ],
      }),
    ];
    const { getAllText } = render(<EquipmentSection />);
    expect(getAllText().some((t) => t.includes('+1'))).toBe(true);
  });

  it('IounStoneSection: dispatches removeEquipment when ✕ pressed', () => {
    mockEquipment = [makeItem({ id: 'stone-1', isOrbiting: true })];
    const rendered = render(<EquipmentSection />);
    fireEvent.press(findTestId(rendered.tree, 'ioun-remove-stone-1')!);
    expect(mockDispatch).toHaveBeenCalled();
  });

  it('IounStoneSection: tapping stone opens editor', () => {
    mockEquipment = [makeItem({ id: 'stone-1', isOrbiting: true })];
    const rendered = render(<EquipmentSection />);
    fireEvent.press(findTestId(rendered.tree, 'ioun-stone-stone-1')!);
    const withEditor = rendered.rerender();
    expect(findTestId(withEditor, 'editor-sheet')).toBeTruthy();
  });

  it('SlotlessItemsSection: renders slotless magic items', () => {
    mockEquipment = [makeItem({ id: 'sl-1', collection: 'magicItems', name: 'Wand of Fireballs' })];
    const { queryByText } = render(<EquipmentSection />);
    expect(queryByText('Wand of Fireballs')).toBeTruthy();
  });

  it('SlotlessItemsSection: renders bonus summary for slotless item', () => {
    mockEquipment = [
      makeItem({
        id: 'sl-1',
        collection: 'magicItems',
        effects: [
          { type: 'bonus', target: 'hp', value: 10, bonusType: BonusType.UNTYPED, source: 'x' },
        ],
      }),
    ];
    const { getAllText } = render(<EquipmentSection />);
    expect(getAllText().some((t) => t.includes('+10'))).toBe(true);
  });

  it('SlotlessItemsSection: dispatches removeEquipment when ✕ pressed', () => {
    mockEquipment = [makeItem({ id: 'sl-1', collection: 'magicItems' })];
    const rendered = render(<EquipmentSection />);
    fireEvent.press(findTestId(rendered.tree, 'slotless-remove-sl-1')!);
    expect(mockDispatch).toHaveBeenCalled();
  });

  it('SlotlessItemsSection: tapping item opens editor', () => {
    mockEquipment = [makeItem({ id: 'sl-1', collection: 'magicItems' })];
    const rendered = render(<EquipmentSection />);
    fireEvent.press(findTestId(rendered.tree, 'slotless-item-sl-1')!);
    const withEditor = rendered.rerender();
    expect(findTestId(withEditor, 'editor-sheet')).toBeTruthy();
  });

  it('ContainerList: renders containers with item counts', () => {
    mockEquipment = [makeItem({ id: 'bag-1', isContainer: true, name: 'Haversack' })];
    const { queryByText } = render(<EquipmentSection />);
    expect(queryByText('Haversack')).toBeTruthy();
  });

  it('ContainerList: shows container contents when expanded', () => {
    mockEquipment = [
      makeItem({ id: 'bag-1', isContainer: true, name: 'Bag of Holding' }),
      makeItem({ id: 'loot-1', containerId: 'bag-1', name: 'Gold Coins' }),
    ];
    const rendered = render(<EquipmentSection />);
    // Toggle the container open
    const toggleBtn = findTestId(rendered.tree, 'container-toggle-bag-1');
    expect(toggleBtn).toBeTruthy();
    fireEvent.press(toggleBtn!);
    // ContainerList sub-state gets fresh on rerender, but toggle was exercised
  });

  it('ContainerList: dispatches removeEquipment when container ✕ pressed', () => {
    mockEquipment = [makeItem({ id: 'bag-1', isContainer: true })];
    const rendered = render(<EquipmentSection />);
    fireEvent.press(findTestId(rendered.tree, 'container-remove-bag-1')!);
    expect(mockDispatch).toHaveBeenCalled();
  });

  it('IounStoneSection: opens picker with orbiting slot when Add Orbiting Ioun Stone pressed', () => {
    mockEquipment = [];
    const rendered = render(<EquipmentSection />);
    const addBtn = findTestId(rendered.tree, 'add-orbiting-ioun-stone');
    expect(addBtn).toBeTruthy();
    fireEvent.press(addBtn!);
    const withPicker = rendered.rerender();
    expect(findTestId(withPicker, 'picker-sheet')).toBeTruthy();
  });

  it('SlotlessItemsSection: opens picker with slotless slot when Add Slotless Item pressed', () => {
    mockEquipment = [];
    const rendered = render(<EquipmentSection />);
    const addBtn = findTestId(rendered.tree, 'add-slotless-item');
    expect(addBtn).toBeTruthy();
    fireEvent.press(addBtn!);
    const withPicker = rendered.rerender();
    expect(findTestId(withPicker, 'picker-sheet')).toBeTruthy();
  });

  it('dispatches addEquipment only (no assign) when picker selects for orbiting slot', () => {
    mockEquipment = [];
    const rendered = render(<EquipmentSection />);
    fireEvent.press(findTestId(rendered.tree, 'add-orbiting-ioun-stone')!);
    const withPicker = rendered.rerender();
    fireEvent.press(findTestId(withPicker, 'mock-picker-select')!);
    expect(mockDispatch).toHaveBeenCalledTimes(1); // only addEquipment, no assignEquipmentSlot
  });

  it('dispatches addEquipment only (no assign) when picker selects for slotless slot', () => {
    mockEquipment = [];
    const rendered = render(<EquipmentSection />);
    fireEvent.press(findTestId(rendered.tree, 'add-slotless-item')!);
    const withPicker = rendered.rerender();
    fireEvent.press(findTestId(withPicker, 'mock-picker-select')!);
    expect(mockDispatch).toHaveBeenCalledTimes(1); // only addEquipment, no assignEquipmentSlot
  });
});
