/**
 * Unit tests for EquipmentPickerSheet pure-function exports.
 * The component itself is mocked wherever EquipmentSection is tested;
 * here we exercise the utility functions directly.
 */

const mockGetWeapons = jest.fn();
const mockGetArmor = jest.fn();
const mockGetShields = jest.fn();
const mockGetMagicItemsBySlot = jest.fn();

jest.mock('@/services/GameDataService', () => ({
  GameDataService: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getWeapons: (...args: any[]) => mockGetWeapons(...args),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getArmor: (...args: any[]) => mockGetArmor(...args),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getShields: (...args: any[]) => mockGetShields(...args),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getMagicItemsBySlot: (...args: any[]) => mockGetMagicItemsBySlot(...args),
  },
}));

jest.mock('@/hooks/useTheme', () => ({
  useTheme: () => ({
    isDark: false,
    colors: {
      bg: { primary: '#fff', secondary: '#f5f5f5', tertiary: '#eee' },
      text: { primary: '#111', secondary: '#555', tertiary: '#999' },
      border: { DEFAULT: '#ddd' },
    },
    fantasy: { gold: '#d4af37', darkWood: '#8c5a28', bronze: '#cd7f32' },
  }),
}));

import {
  formatPrice,
  toFirestoreSlot,
  sourceLabel,
  mapWeapon,
  mapArmor,
  mapShield,
  mapMagicItem,
  loadItemsForSlot,
} from '@/components/character/direct-entry/EquipmentPickerSheet';
import type { WeaponDefinition, ArmorDefinition, ShieldDefinition } from '@/types/equipment';
import type { MagicItemDefinition } from '@/types/magicItems';

// ---- Minimal stubs ----

function makeWeapon(overrides: Partial<WeaponDefinition> = {}): WeaponDefinition {
  return {
    id: 'w1',
    name: 'Longsword',
    proficiency: 'martial',
    weaponType: 'melee',
    handedness: 'one-handed',
    weaponGroup: ['blades_heavy'],
    cost: 15,
    weight: 4,
    damageS: '1d6',
    damageM: '1d8',
    critical: '19-20/x2',
    damageType: ['slashing'],
    special: [],
    range: 0,
    isThrown: false,
    description: 'A standard sword.',
    source: 'Core',
    ...overrides,
  };
}

function makeArmor(overrides: Partial<ArmorDefinition> = {}): ArmorDefinition {
  return {
    id: 'a1',
    name: 'Chain Shirt',
    armorType: 'light',
    cost: 100,
    weight: 25,
    acBonus: 4,
    maxDexBonus: 4,
    checkPenalty: -2,
    spellFailure: 20,
    speed30: 30,
    speed20: 20,
    description: 'Light armor.',
    source: 'Core',
    ...overrides,
  };
}

function makeShield(overrides: Partial<ShieldDefinition> = {}): ShieldDefinition {
  return {
    id: 's1',
    name: 'Light Steel Shield',
    shieldType: 'light',
    cost: 9,
    weight: 6,
    acBonus: 1,
    checkPenalty: -1,
    spellFailure: 5,
    description: 'A light shield.',
    source: 'Core',
    ...overrides,
  };
}

function makeMagicItem(overrides: Partial<MagicItemDefinition> = {}): MagicItemDefinition {
  return {
    id: 'm1',
    name: 'Ring of Protection +1',
    category: 'ring',
    source: 'Core',
    isOfficial: true,
    aura: [{ school: 'abjuration', strength: 'faint' }],
    casterLevel: 5,
    slot: 'ring',
    price: 2000,
    weight: 0,
    description: 'Deflection bonus.',
    construction: { requirements: [], cost: 1000 },
    physicalStats: { material: 'gold', hardness: 10, hp: 1 },
    activationCategory: 'continuous',
    effects: [],
    ...overrides,
  } as MagicItemDefinition;
}

// ---- formatPrice ----

describe('formatPrice', () => {
  it('returns undefined for undefined', () => {
    expect(formatPrice(undefined)).toBeUndefined();
  });

  it('returns undefined for null (cast as undefined)', () => {
    expect(formatPrice(null as unknown as undefined)).toBeUndefined();
  });

  it('returns "free" for 0', () => {
    expect(formatPrice(0)).toBe('free');
  });

  it('returns compact form for exact thousands', () => {
    expect(formatPrice(1000)).toBe('1k gp');
    expect(formatPrice(2000)).toBe('2k gp');
    expect(formatPrice(50000)).toBe('50k gp');
  });

  it('returns one-decimal compact form for non-round thousands', () => {
    expect(formatPrice(1500)).toBe('1.5k gp');
    expect(formatPrice(2250)).toBe('2.3k gp'); // toFixed(1) rounding
  });

  it('returns plain "X gp" for prices under 1000', () => {
    expect(formatPrice(15)).toBe('15 gp');
    expect(formatPrice(999)).toBe('999 gp');
  });
});

// ---- toFirestoreSlot ----

describe('toFirestoreSlot', () => {
  it('maps ring_left to ring', () => {
    expect(toFirestoreSlot('ring_left')).toBe('ring');
  });

  it('maps ring_right to ring', () => {
    expect(toFirestoreSlot('ring_right')).toBe('ring');
  });

  it('maps orbiting to none', () => {
    expect(toFirestoreSlot('orbiting')).toBe('none');
  });

  it('maps slotless to none', () => {
    expect(toFirestoreSlot('slotless')).toBe('none');
  });

  it('passes through other slots unchanged', () => {
    expect(toFirestoreSlot('head')).toBe('head');
    expect(toFirestoreSlot('neck')).toBe('neck');
    expect(toFirestoreSlot('armor')).toBe('armor');
    expect(toFirestoreSlot('belt')).toBe('belt');
  });
});

// ---- sourceLabel ----

describe('sourceLabel', () => {
  it('returns undefined for undefined', () => {
    expect(sourceLabel(undefined)).toBeUndefined();
  });

  it('returns undefined for null', () => {
    expect(sourceLabel(null)).toBeUndefined();
  });

  it('returns undefined for empty string', () => {
    expect(sourceLabel('')).toBeUndefined();
  });

  it('returns the string directly for a string source', () => {
    expect(sourceLabel('Core Rulebook')).toBe('Core Rulebook');
  });

  it('returns bookId from a GameDataSource object', () => {
    expect(sourceLabel({ bookId: 'APG', pageNumber: 42 })).toBe('APG');
  });

  it('returns undefined for an object without bookId', () => {
    expect(sourceLabel({ foo: 'bar' })).toBeUndefined();
  });
});

// ---- mapWeapon ----

describe('mapWeapon', () => {
  it('maps weapon fields to PickerItem', () => {
    const w = makeWeapon({ id: 'w2', name: 'Dagger', cost: 2, description: 'Small blade.' });
    const result = mapWeapon(w);
    expect(result.definitionId).toBe('w2');
    expect(result.name).toBe('Dagger');
    expect(result.price).toBe(2);
    expect(result.collection).toBe('weapons');
    expect(result.description).toBe('Small blade.');
    expect(result.source).toBe('Core');
  });

  it('resolves source object via sourceLabel', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const w = makeWeapon({ source: { bookId: 'UC' } as any });
    expect(mapWeapon(w).source).toBe('UC');
  });
});

// ---- mapArmor ----

describe('mapArmor', () => {
  it('maps armor fields to PickerItem', () => {
    const a = makeArmor({ id: 'a2', name: 'Breastplate', cost: 200 });
    const result = mapArmor(a);
    expect(result.definitionId).toBe('a2');
    expect(result.name).toBe('Breastplate');
    expect(result.price).toBe(200);
    expect(result.collection).toBe('armor');
  });
});

// ---- mapShield ----

describe('mapShield', () => {
  it('maps shield fields to PickerItem', () => {
    const s = makeShield({ id: 's2', name: 'Heavy Steel Shield', shieldType: 'heavy' });
    const result = mapShield(s);
    expect(result.definitionId).toBe('s2');
    expect(result.collection).toBe('shields');
    expect(result.allowsHandUse).toBe(false);
  });

  it('sets allowsHandUse=true for buckler', () => {
    const s = makeShield({ shieldType: 'buckler' });
    expect(mapShield(s).allowsHandUse).toBe(true);
  });
});

// ---- mapMagicItem ----

describe('mapMagicItem', () => {
  it('maps magic item fields to PickerItem', () => {
    const m = makeMagicItem({ id: 'm2', name: 'Cloak of Resistance +1', price: 1000 });
    const result = mapMagicItem(m);
    expect(result.definitionId).toBe('m2');
    expect(result.name).toBe('Cloak of Resistance +1');
    expect(result.price).toBe(1000);
    expect(result.collection).toBe('magicItems');
    expect(result.isContainer).toBeUndefined();
  });

  it('sets isContainer when flag is true', () => {
    const m = makeMagicItem();
    expect(mapMagicItem(m, true).isContainer).toBe(true);
  });

  it('maps null price to undefined', () => {
    const m = makeMagicItem({ price: null });
    expect(mapMagicItem(m).price).toBeUndefined();
  });

  it('copies effects from the item', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const effects = [{ type: 'bonus' as const, target: 'ac' as any, value: 1, source: 'x' }];
    const m = makeMagicItem({ effects });
    expect(mapMagicItem(m).effects).toEqual(effects);
  });
});

// ---- loadItemsForSlot ----

describe('loadItemsForSlot', () => {
  const weapon = makeWeapon({ id: 'lw1', name: 'Sword' });
  const armor = makeArmor({ id: 'la1', name: 'Armor' });
  const shield = makeShield({ id: 'ls1', name: 'Shield' });
  const magicItem = makeMagicItem({ id: 'lm1', name: 'Magic Thing', slot: 'neck' });
  const iounStone = makeMagicItem({
    id: 'li1',
    name: 'Dusty Rose Prism',
    category: 'ioun_stone',
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    slot: 'none' as any,
  });
  const wondrous = makeMagicItem({
    id: 'lw2',
    name: 'Haversack',
    category: 'wondrous',
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    slot: 'none' as any,
  });
  const nonIoun = makeMagicItem({
    id: 'ln1',
    name: 'Pearl of Power',
    category: 'wondrous',
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    slot: 'none' as any,
  });

  beforeEach(() => {
    mockGetWeapons.mockResolvedValue([weapon]);
    mockGetArmor.mockResolvedValue([armor]);
    mockGetShields.mockResolvedValue([shield]);
    mockGetMagicItemsBySlot.mockResolvedValue([magicItem]);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('main_hand: combines weapons and magic items', async () => {
    mockGetMagicItemsBySlot.mockResolvedValue([magicItem]);
    const items = await loadItemsForSlot('main_hand');
    expect(items.some((i) => i.collection === 'weapons')).toBe(true);
    expect(items.some((i) => i.collection === 'magicItems')).toBe(true);
  });

  it('off_hand: combines weapons, shields, and magic items', async () => {
    mockGetMagicItemsBySlot.mockResolvedValue([magicItem]);
    const items = await loadItemsForSlot('off_hand');
    expect(items.some((i) => i.collection === 'weapons')).toBe(true);
    expect(items.some((i) => i.collection === 'shields')).toBe(true);
    expect(items.some((i) => i.collection === 'magicItems')).toBe(true);
  });

  it('armor: combines mundane armor and magic items', async () => {
    mockGetMagicItemsBySlot.mockResolvedValue([magicItem]);
    const items = await loadItemsForSlot('armor');
    expect(items.some((i) => i.collection === 'armor')).toBe(true);
    expect(items.some((i) => i.collection === 'magicItems')).toBe(true);
  });

  it('shield: combines shields and magic items', async () => {
    mockGetMagicItemsBySlot.mockResolvedValue([magicItem]);
    const items = await loadItemsForSlot('shield');
    expect(items.some((i) => i.collection === 'shields')).toBe(true);
    expect(items.some((i) => i.collection === 'magicItems')).toBe(true);
  });

  it('orbiting: returns only ioun stones', async () => {
    mockGetMagicItemsBySlot.mockResolvedValue([iounStone, wondrous]);
    const items = await loadItemsForSlot('orbiting');
    expect(items).toHaveLength(1);
    expect(items[0].definitionId).toBe('li1');
  });

  it('none: returns wondrous items marked as containers', async () => {
    mockGetMagicItemsBySlot.mockResolvedValue([iounStone, wondrous]);
    const items = await loadItemsForSlot('none');
    expect(items).toHaveLength(1);
    expect(items[0].isContainer).toBe(true);
    expect(items[0].definitionId).toBe('lw2');
  });

  it('slotless: returns non-ioun-stone items', async () => {
    mockGetMagicItemsBySlot.mockResolvedValue([iounStone, nonIoun]);
    const items = await loadItemsForSlot('slotless');
    expect(items).toHaveLength(1);
    expect(items[0].definitionId).toBe('ln1');
  });

  it('default slot: fetches by firestore slot and maps magic items', async () => {
    mockGetMagicItemsBySlot.mockResolvedValue([magicItem]);
    const items = await loadItemsForSlot('neck');
    expect(mockGetMagicItemsBySlot).toHaveBeenCalledWith('neck');
    expect(items).toHaveLength(1);
    expect(items[0].collection).toBe('magicItems');
  });

  it('ring_left: maps to ring slot for firestore query', async () => {
    mockGetMagicItemsBySlot.mockResolvedValue([magicItem]);
    await loadItemsForSlot('ring_left');
    expect(mockGetMagicItemsBySlot).toHaveBeenCalledWith('ring');
  });
});

// ---- EquipmentPickerSheet component (loading state) ----
// useEffect is a no-op in testUtils, so the component always renders in loading
// state (loadedSlot=null ≠ slot). We exercise the component function body,
// filtered/sections memos, and handleClose.

import React from 'react';
import { render, fireEvent, setHookStateAt } from '../../helpers/testUtils';
import { EquipmentPickerSheet } from '@/components/character/direct-entry/EquipmentPickerSheet';

describe('EquipmentPickerSheet component (loading state)', () => {
  const onSelect = jest.fn();
  const onAddCustom = jest.fn();
  const onClose = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    mockGetMagicItemsBySlot.mockResolvedValue([]);
  });

  it('renders loading spinner when visible=true (useEffect no-op means data never loads)', () => {
    const { getAllText } = render(
      <EquipmentPickerSheet
        visible
        slot="neck"
        onSelect={onSelect}
        onAddCustom={onAddCustom}
        onClose={onClose}
      />,
    );
    expect(getAllText().some((t) => t.includes('Loading'))).toBe(true);
  });

  it('calls onClose when the ✕ button is pressed', () => {
    const rendered = render(
      <EquipmentPickerSheet
        visible
        slot="head"
        onSelect={onSelect}
        onAddCustom={onAddCustom}
        onClose={onClose}
      />,
    );
    const closeBtn = rendered.getByTestId('picker-close-btn');
    fireEvent.press(closeBtn);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('enters non-loading state when visible=false (covers loading=false branch)', () => {
    // When visible=false, loading=false so SectionList renders instead of the spinner.
    // In testUtils, Modal is never called as a child when it wraps the component return,
    // so children are always rendered; we verify the SectionList path (no "Loading..." text).
    const { getAllText } = render(
      <EquipmentPickerSheet
        visible={false}
        slot="belt"
        onSelect={onSelect}
        onAddCustom={onAddCustom}
        onClose={onClose}
      />,
    );
    expect(getAllText().some((t) => t.includes('Loading'))).toBe(false);
    expect(getAllText().some((t) => t.includes('Belt Slot'))).toBe(true);
  });

  it('shows custom footer and calls onAddCustom when query is set (visible=false = loading=false)', () => {
    // visible=false → loading=false. With a non-empty query the custom add footer renders
    // because {query.trim() && !loading} is truthy. Pressing it calls handleAddCustom.
    const rendered = render(
      <EquipmentPickerSheet
        visible={false}
        slot="neck"
        onSelect={onSelect}
        onAddCustom={onAddCustom}
        onClose={onClose}
      />,
    );
    const searchInput = rendered.getByTestId('picker-search');
    fireEvent.changeText(searchInput, 'Sword of Truth');
    const withQuery = rendered.rerender();
    // Walk the tree to find the custom add button
    function findNode(
      node: import('../../helpers/testUtils').RenderedNode,
      testID: string,
    ): import('../../helpers/testUtils').RenderedNode | null {
      if (node.props.testID === testID) return node;
      for (const c of node.children) {
        if (typeof c !== 'string') {
          const f = findNode(c, testID);
          if (f) return f;
        }
      }
      return null;
    }
    const addBtn = findNode(
      withQuery as unknown as import('../../helpers/testUtils').RenderedNode,
      'picker-add-custom',
    );
    expect(addBtn).toBeTruthy();
    fireEvent.press(addBtn!);
    expect(onAddCustom).toHaveBeenCalledWith('Sword of Truth');
  });
});

// ---- EquipmentPickerSheet renderItem branches (state injection) ----
// useEffect is a no-op so allItems stays [] and loadedSlot stays null by default.
// We use setHookStateAt to inject allItems (slot 1) and loadedSlot (slot 2) directly
// after the initial render so rerender() sees them and the SectionList receives real data.
// Hook slot order in EquipmentPickerSheet: 0=query, 1=allItems, 2=loadedSlot
// (useEffect is no-op and does NOT consume a slot).

describe('EquipmentPickerSheet renderItem / renderSectionHeader branches', () => {
  const onSelect = jest.fn();
  const onAddCustom = jest.fn();
  const onClose = jest.fn();

  function findNode(
    node: import('../../helpers/testUtils').RenderedNode,
    testID: string,
  ): import('../../helpers/testUtils').RenderedNode | null {
    if (node.props.testID === testID) return node;
    for (const c of node.children) {
      if (typeof c !== 'string') {
        const f = findNode(c, testID);
        if (f) return f;
      }
    }
    return null;
  }

  beforeEach(() => jest.clearAllMocks());

  it('covers renderItem true branches: price, description, source, allowsHandUse', () => {
    // Item with all optional fields populated → covers all "truthy" branches in renderItem
    const fullItem = {
      definitionId: 'w-full',
      name: 'Longsword',
      collection: 'weapons',
      price: 15,
      description: 'A standard sword.',
      source: 'Core',
      allowsHandUse: true,
    };
    const rendered = render(
      <EquipmentPickerSheet
        visible
        slot="neck"
        onSelect={onSelect}
        onAddCustom={onAddCustom}
        onClose={onClose}
      />,
    );
    setHookStateAt(1, [fullItem]);
    setHookStateAt(2, 'neck'); // loadedSlot = slot → loading = false
    const withItems =
      rendered.rerender() as unknown as import('../../helpers/testUtils').RenderedNode;
    expect(findNode(withItems, 'picker-item-w-full')).toBeTruthy();
  });

  it('covers renderItem false branches: no price, no description, no source, no allowsHandUse', () => {
    const nakedItem = {
      definitionId: 'm-naked',
      name: 'Mystery Item',
      collection: 'magicItems',
      price: undefined,
      description: undefined,
      source: undefined,
      allowsHandUse: undefined,
    };
    const rendered = render(
      <EquipmentPickerSheet
        visible
        slot="neck"
        onSelect={onSelect}
        onAddCustom={onAddCustom}
        onClose={onClose}
      />,
    );
    setHookStateAt(1, [nakedItem]);
    setHookStateAt(2, 'neck');
    const withItems =
      rendered.rerender() as unknown as import('../../helpers/testUtils').RenderedNode;
    expect(findNode(withItems, 'picker-item-m-naked')).toBeTruthy();
  });

  it('covers renderSectionHeader true branch: more than one section', () => {
    // Two items from different collections → sections.length > 1 → header View renders
    const weaponItem = { definitionId: 'w1', name: 'Dagger', collection: 'weapons' };
    const magicItem = { definitionId: 'm1', name: 'Ring of Protection', collection: 'magicItems' };
    const rendered = render(
      <EquipmentPickerSheet
        visible
        slot="neck"
        onSelect={onSelect}
        onAddCustom={onAddCustom}
        onClose={onClose}
      />,
    );
    setHookStateAt(1, [weaponItem, magicItem]);
    setHookStateAt(2, 'neck');
    const withItems =
      rendered.rerender() as unknown as import('../../helpers/testUtils').RenderedNode;
    // Both items should render
    expect(findNode(withItems, 'picker-item-w1')).toBeTruthy();
    expect(findNode(withItems, 'picker-item-m1')).toBeTruthy();
  });

  it('covers handleSelect: pressing an item calls onSelect', () => {
    const item = {
      definitionId: 'sel-1',
      name: 'Cloak of Resistance +1',
      collection: 'magicItems',
      effects: [],
    };
    const rendered = render(
      <EquipmentPickerSheet
        visible
        slot="neck"
        onSelect={onSelect}
        onAddCustom={onAddCustom}
        onClose={onClose}
      />,
    );
    setHookStateAt(1, [item]);
    setHookStateAt(2, 'neck');
    const withItems =
      rendered.rerender() as unknown as import('../../helpers/testUtils').RenderedNode;
    const itemBtn = findNode(withItems, 'picker-item-sel-1');
    expect(itemBtn).toBeTruthy();
    fireEvent.press(itemBtn!);
    expect(onSelect).toHaveBeenCalledWith(
      expect.objectContaining({ definitionId: 'sel-1', name: 'Cloak of Resistance +1' }),
    );
  });
});
