import React from 'react';
import { render, fireEvent, setHookStateAt } from '../../helpers/testUtils';
import { MagicItemEffectImportSheet } from '@/components/character/direct-entry/MagicItemEffectImportSheet';
import { GameDataService } from '@/services/GameDataService';
import type { MagicItemDefinition } from '@/types/magicItems';

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

jest.mock('@/services/GameDataService', () => ({
  GameDataService: {
    searchMagicItems: jest.fn(),
  },
}));

// EquipmentPickerSheet exports SLOT_TITLES — stub the module
jest.mock('@/components/character/direct-entry/EquipmentPickerSheet', () => ({
  SLOT_TITLES: {
    head: 'Head',
    headband: 'Headband',
    neck: 'Neck',
    ring: 'Ring',
    belt: 'Belt',
    wrists: 'Wrists',
    hands: 'Hands',
    feet: 'Feet',
    body: 'Body',
    chest: 'Chest',
    shoulders: 'Shoulders',
    eyes: 'Eyes',
    slotless: 'Slotless',
  },
}));

const mockSearch = GameDataService.searchMagicItems as jest.Mock;

const RING_ITEM = {
  id: 'ring-of-protection-1',
  name: 'Ring of Protection +1',
  slot: 'ring',
  price: 2000,
  description: 'Grants +1 deflection bonus to AC.',
  effects: [
    {
      type: 'bonus' as const,
      target: 'ac.deflection' as const,
      bonusType: 'deflection' as never,
      value: 1,
      source: 'Ring of Protection +1',
    },
  ],
} as unknown as MagicItemDefinition;

const defaultProps = {
  visible: true,
  currentItemName: 'Custom Ring',
  onImport: jest.fn(),
  onBack: jest.fn(),
};

// State slot indices for MagicItemEffectImportSheet:
// 0 = query (string)
// 1 = results (MagicItemDefinition[])
// 2 = loading (boolean)
const SLOT_QUERY = 0;
const SLOT_RESULTS = 1;

const findTestId = (node: unknown, id: string): unknown => {
  if (!node || typeof node !== 'object') return null;
  const n = node as { props?: { testID?: string }; children?: unknown[] };
  if (n.props?.testID === id) return node;
  for (const child of n.children ?? []) {
    const found = findTestId(child, id);
    if (found) return found;
  }
  return null;
};

describe('MagicItemEffectImportSheet', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockSearch.mockResolvedValue([]);
  });

  it('renders search input and empty-state prompt when query is empty', () => {
    const { getByTestId, queryByText } = render(<MagicItemEffectImportSheet {...defaultProps} />);
    expect(getByTestId('import-search-input')).toBeTruthy();
    expect(queryByText('Type an item name to search')).toBeTruthy();
  });

  it('renders nothing when visible=false', () => {
    const { queryByTestId } = render(
      <MagicItemEffectImportSheet {...defaultProps} visible={false} />,
    );
    expect(queryByTestId('import-search-input')).toBeNull();
  });

  it('calls onBack when back button is pressed', () => {
    const onBack = jest.fn();
    const { getByTestId } = render(
      <MagicItemEffectImportSheet {...defaultProps} onBack={onBack} />,
    );
    fireEvent.press(getByTestId('import-back-btn'));
    expect(onBack).toHaveBeenCalled();
  });

  it('shows "No items found" when query is non-empty and results are empty', () => {
    const rendered = render(<MagicItemEffectImportSheet {...defaultProps} />);
    // useEffect is a no-op; inject state directly
    setHookStateAt(SLOT_QUERY, 'zzznothing');
    setHookStateAt(SLOT_RESULTS, []);
    const updated = rendered.rerender();
    const texts: string[] = [];
    const walk = (node: unknown) => {
      if (typeof node === 'string') {
        texts.push(node);
        return;
      }
      if (node && typeof node === 'object' && 'children' in node) {
        for (const child of (node as { children: unknown[] }).children) walk(child);
      }
    };
    walk(updated);
    expect(texts.some((t) => t.includes('No items found'))).toBe(true);
  });

  it('renders result rows when results are populated', () => {
    const rendered = render(<MagicItemEffectImportSheet {...defaultProps} />);
    setHookStateAt(SLOT_QUERY, 'ring');
    setHookStateAt(SLOT_RESULTS, [RING_ITEM]);
    const updated = rendered.rerender();
    // The result row testID comes from `import-item-${item.id}`
    const texts: string[] = [];
    const walk = (node: unknown) => {
      if (typeof node === 'string') {
        texts.push(node);
        return;
      }
      if (node && typeof node === 'object' && 'children' in node) {
        for (const child of (node as { children: unknown[] }).children) walk(child);
      }
    };
    walk(updated);
    expect(texts.some((t) => t.includes('Ring of Protection +1'))).toBe(true);
  });

  it('calls onImport with effects remapped to currentItemName and onBack when item tapped', () => {
    const onImport = jest.fn();
    const onBack = jest.fn();
    const rendered = render(
      <MagicItemEffectImportSheet
        {...defaultProps}
        currentItemName="Custom Ring"
        onImport={onImport}
        onBack={onBack}
      />,
    );
    setHookStateAt(SLOT_QUERY, 'ring');
    setHookStateAt(SLOT_RESULTS, [RING_ITEM]);
    const updated = rendered.rerender();
    const btn = findTestId(updated, 'import-item-ring-of-protection-1') as {
      props: { onPress?: () => void };
    } | null;
    expect(btn).toBeTruthy();
    btn!.props.onPress?.();
    expect(onImport).toHaveBeenCalledWith(
      expect.arrayContaining([
        expect.objectContaining({ source: 'Custom Ring', target: 'ac.deflection' }),
      ]),
    );
    expect(onBack).toHaveBeenCalled();
  });

  it('imports empty effects array when source item has no effects', () => {
    const noEffectsItem = {
      ...RING_ITEM,
      id: 'ring-no-effects',
      name: 'Plain Ring',
      effects: undefined,
    } as unknown as MagicItemDefinition;
    const onImport = jest.fn();
    const rendered = render(<MagicItemEffectImportSheet {...defaultProps} onImport={onImport} />);
    setHookStateAt(SLOT_QUERY, 'plain');
    setHookStateAt(SLOT_RESULTS, [noEffectsItem]);
    const updated = rendered.rerender();
    const btn = findTestId(updated, 'import-item-ring-no-effects') as {
      props: { onPress?: () => void };
    } | null;
    expect(btn).toBeTruthy();
    btn!.props.onPress?.();
    expect(onImport).toHaveBeenCalledWith([]);
  });
});
