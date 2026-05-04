import React, { useState, useMemo, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  Modal,
  SectionList,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { GameDataService } from '@/services/GameDataService';
import type { WeaponDefinition, ArmorDefinition, ShieldDefinition } from '@/types/equipment';
import type { MagicItemDefinition, ItemSlot } from '@/types/magicItems';
import type { EditorEquippedSlot } from '@/types/character';
import type { Effect } from '@/types/base';

// ---- Types ----

export type PickerSlot = EditorEquippedSlot | 'orbiting' | 'none' | 'slotless';

export interface EquipmentPickerResult {
  definitionId: string;
  name: string;
  collection: 'weapons' | 'armor' | 'shields' | 'magicItems';
  allowsHandUse?: boolean;
  isContainer?: boolean;
  effects?: Effect[];
}

interface PickerItem extends EquipmentPickerResult {
  description?: string;
  price?: number;
  source?: string;
}

interface EquipmentPickerSheetProps {
  visible: boolean;
  slot: PickerSlot;
  onSelect: (result: EquipmentPickerResult) => void;
  onAddCustom: (name: string) => void;
  onClose: () => void;
}

// ---- Helpers ----

const SECTION_LABELS: Record<string, string> = {
  weapons: 'Mundane Weapons',
  armor: 'Mundane Armor',
  shields: 'Mundane Shields',
  magicItems: 'Magic Items',
};

const SLOT_TITLES: Record<string, string> = {
  head: 'Head Slot',
  headband: 'Headband Slot',
  eyes: 'Eyes Slot',
  neck: 'Neck Slot',
  shoulders: 'Shoulders Slot',
  chest: 'Chest Slot',
  body: 'Body Slot',
  belt: 'Belt Slot',
  wrists: 'Wrists Slot',
  hands: 'Hands Slot',
  ring_left: 'Ring (Left Hand)',
  ring_right: 'Ring (Right Hand)',
  feet: 'Feet Slot',
  armor: 'Armor',
  shield: 'Shield',
  main_hand: 'Main Hand',
  off_hand: 'Off Hand',
  orbiting: 'Ioun Stone',
  none: 'Container / Bag',
  slotless: 'Slotless Magic Items',
};

export function toFirestoreSlot(slot: PickerSlot): ItemSlot {
  if (slot === 'ring_left' || slot === 'ring_right') return 'ring';
  if (slot === 'orbiting' || slot === 'slotless') return 'none';
  return slot as ItemSlot;
}

export function sourceLabel(source: unknown): string | undefined {
  if (!source) return undefined;
  if (typeof source === 'string') return source;
  if (typeof source === 'object' && source !== null && 'bookId' in source) {
    return (source as { bookId: string }).bookId;
  }
  return undefined;
}

export function mapWeapon(w: WeaponDefinition): PickerItem {
  return {
    definitionId: w.id,
    name: w.name,
    description: w.description,
    price: w.cost,
    collection: 'weapons',
    source: sourceLabel(w.source),
  };
}

export function mapArmor(a: ArmorDefinition): PickerItem {
  return {
    definitionId: a.id,
    name: a.name,
    description: a.description,
    price: a.cost,
    collection: 'armor',
    source: sourceLabel(a.source),
  };
}

export function mapShield(s: ShieldDefinition): PickerItem {
  return {
    definitionId: s.id,
    name: s.name,
    description: s.description,
    price: s.cost,
    collection: 'shields',
    allowsHandUse: s.shieldType === 'buckler',
    source: sourceLabel(s.source),
  };
}

export function mapMagicItem(m: MagicItemDefinition, isContainer = false): PickerItem {
  const allowsHandUse = (m as { allowsHandUse?: boolean }).allowsHandUse;
  return {
    definitionId: m.id,
    name: m.name,
    description: m.description,
    price: m.price ?? undefined,
    collection: 'magicItems',
    allowsHandUse,
    isContainer: isContainer || undefined,
    source: sourceLabel(m.source),
    effects: m.effects,
  };
}

export async function loadItemsForSlot(slot: PickerSlot): Promise<PickerItem[]> {
  switch (slot) {
    case 'main_hand': {
      const [weapons, magicItems] = await Promise.all([
        GameDataService.getWeapons(),
        GameDataService.getMagicItemsBySlot('main_hand'),
      ]);
      return [...weapons.map(mapWeapon), ...magicItems.map((m) => mapMagicItem(m))];
    }

    case 'off_hand': {
      const [weapons, shields, magicItems] = await Promise.all([
        GameDataService.getWeapons(),
        GameDataService.getShields(),
        GameDataService.getMagicItemsBySlot('off_hand'),
      ]);
      return [
        ...weapons.map(mapWeapon),
        ...shields.map(mapShield),
        ...magicItems.map((m) => mapMagicItem(m)),
      ];
    }

    case 'armor': {
      const [armor, magicItems] = await Promise.all([
        GameDataService.getArmor(),
        GameDataService.getMagicItemsBySlot('armor'),
      ]);
      return [...armor.map(mapArmor), ...magicItems.map((m) => mapMagicItem(m))];
    }

    case 'shield': {
      const [shields, magicItems] = await Promise.all([
        GameDataService.getShields(),
        GameDataService.getMagicItemsBySlot('shield'),
      ]);
      return [...shields.map(mapShield), ...magicItems.map((m) => mapMagicItem(m))];
    }

    case 'orbiting': {
      const items = await GameDataService.getMagicItemsBySlot('none');
      return items.filter((m) => m.category === 'ioun_stone').map((m) => mapMagicItem(m));
    }

    case 'none': {
      // Containers/bags: show all slotless wondrous items, marked as containers
      const items = await GameDataService.getMagicItemsBySlot('none');
      return items.filter((m) => m.category === 'wondrous').map((m) => mapMagicItem(m, true));
    }

    case 'slotless': {
      // Slotless magic items (Pearls of Power, tomes, etc.) — excludes ioun stones
      const items = await GameDataService.getMagicItemsBySlot('none');
      return items.filter((m) => m.category !== 'ioun_stone').map((m) => mapMagicItem(m));
    }

    default: {
      const fsSlot = toFirestoreSlot(slot);
      const items = await GameDataService.getMagicItemsBySlot(fsSlot);
      return items.map((m) => mapMagicItem(m));
    }
  }
}

export function formatPrice(price: number | undefined): string | undefined {
  if (price === undefined || price === null) return undefined;
  if (price === 0) return 'free';
  if (price >= 1000) return `${(price / 1000).toFixed(price % 1000 === 0 ? 0 : 1)}k gp`;
  return `${price} gp`;
}

// ---- Component ----

export function EquipmentPickerSheet({
  visible,
  slot,
  onSelect,
  onAddCustom,
  onClose,
}: EquipmentPickerSheetProps) {
  const { colors, fantasy, isDark } = useTheme();
  const [query, setQuery] = useState('');
  const [allItems, setAllItems] = useState<PickerItem[]>([]);
  // Track which slot the current allItems were loaded for. Loading state is
  // derived (`visible && loadedSlot !== slot`) rather than stored, so the
  // effect doesn't need to setState synchronously on open.
  const [loadedSlot, setLoadedSlot] = useState<PickerSlot | null>(null);

  useEffect(() => {
    if (!visible) return;
    let cancelled = false;
    loadItemsForSlot(slot)
      .then((items) => {
        if (cancelled) return;
        setAllItems(items);
        setLoadedSlot(slot);
      })
      .catch((e) => {
        if (!cancelled) console.error('EquipmentPickerSheet: load failed', e);
      });
    return () => {
      cancelled = true;
    };
  }, [visible, slot]);

  const loading = visible && loadedSlot !== slot;

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return allItems.slice(0, 100);
    return allItems.filter((item) => item.name.toLowerCase().includes(q));
  }, [allItems, query]);

  const sections = useMemo(() => {
    const grouped = new Map<string, PickerItem[]>();
    for (const item of filtered) {
      const list = grouped.get(item.collection) ?? [];
      list.push(item);
      grouped.set(item.collection, list);
    }
    return Array.from(grouped.entries()).map(([key, data]) => ({
      title: SECTION_LABELS[key] ?? key,
      data,
    }));
  }, [filtered]);

  const handleClose = () => {
    setQuery('');
    onClose();
  };

  const handleSelect = (item: PickerItem) => {
    setQuery('');
    onSelect({
      definitionId: item.definitionId,
      name: item.name,
      collection: item.collection,
      allowsHandUse: item.allowsHandUse,
      isContainer: item.isContainer,
      effects: item.effects,
    });
  };

  const handleAddCustom = () => {
    if (!query.trim()) return;
    const name = query.trim();
    setQuery('');
    onAddCustom(name);
  };

  const title = SLOT_TITLES[slot] ?? 'Select Item';

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={handleClose}
    >
      <View
        style={[
          styles.container,
          { backgroundColor: isDark ? colors.bg.primary : colors.bg.secondary },
        ]}
      >
        {/* Header */}
        <View style={[styles.header, { borderBottomColor: colors.border.DEFAULT }]}>
          <Text style={[styles.title, { color: isDark ? fantasy.gold : fantasy.darkWood }]}>
            {title}
          </Text>
          <Pressable
            onPress={handleClose}
            style={styles.closeBtn}
            hitSlop={12}
            testID="picker-close-btn"
          >
            <Text style={[styles.closeText, { color: colors.text.tertiary }]}>✕</Text>
          </Pressable>
        </View>

        {/* Search */}
        <View style={[styles.searchRow, { borderBottomColor: colors.border.DEFAULT }]}>
          <TextInput
            testID="picker-search"
            value={query}
            onChangeText={setQuery}
            placeholder={`Search ${title.toLowerCase()}...`}
            placeholderTextColor={colors.text.tertiary}
            autoFocus
            style={[
              styles.searchInput,
              {
                color: colors.text.primary,
                backgroundColor: isDark ? colors.bg.tertiary : colors.bg.primary,
                borderColor: query ? fantasy.gold : colors.border.DEFAULT,
              },
            ]}
            clearButtonMode="while-editing"
          />
        </View>

        {/* Results */}
        {loading ? (
          <View style={styles.loadingView}>
            <ActivityIndicator size="large" color={fantasy.gold} />
            <Text style={[styles.loadingText, { color: colors.text.tertiary }]}>Loading...</Text>
          </View>
        ) : (
          <SectionList
            sections={sections}
            keyExtractor={(item) => item.definitionId}
            keyboardShouldPersistTaps="handled"
            renderSectionHeader={({ section }) =>
              sections.length > 1 ? (
                <View
                  style={[
                    styles.sectionHeader,
                    { backgroundColor: isDark ? colors.bg.tertiary : colors.bg.secondary },
                  ]}
                >
                  <Text
                    style={[
                      styles.sectionHeaderText,
                      { color: isDark ? fantasy.gold : fantasy.darkWood },
                    ]}
                  >
                    {section.title}
                  </Text>
                </View>
              ) : null
            }
            renderItem={({ item }) => (
              <Pressable
                testID={`picker-item-${item.definitionId}`}
                onPress={() => handleSelect(item)}
                style={({ pressed }) => [
                  styles.item,
                  {
                    borderBottomColor: colors.border.DEFAULT,
                    backgroundColor: pressed
                      ? isDark
                        ? 'rgba(212,175,55,0.1)'
                        : 'rgba(140,90,40,0.06)'
                      : 'transparent',
                  },
                ]}
              >
                <View style={styles.itemRow}>
                  <Text style={[styles.itemName, { color: colors.text.primary }]} numberOfLines={1}>
                    {item.name}
                  </Text>
                  {item.price !== undefined && (
                    <Text style={[styles.itemPrice, { color: colors.text.tertiary }]}>
                      {formatPrice(item.price)}
                    </Text>
                  )}
                </View>
                {item.description ? (
                  <Text
                    style={[styles.itemDesc, { color: colors.text.tertiary }]}
                    numberOfLines={1}
                  >
                    {item.description}
                  </Text>
                ) : null}
                {item.source ? (
                  <View
                    style={[
                      styles.sourceBadge,
                      { backgroundColor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)' },
                    ]}
                  >
                    <Text style={[styles.sourceBadgeText, { color: colors.text.tertiary }]}>
                      {item.source}
                    </Text>
                  </View>
                ) : null}
                {item.allowsHandUse && (
                  <Text style={[styles.bucklerNote, { color: fantasy.gold }]}>off-hand free</Text>
                )}
              </Pressable>
            )}
            contentContainerStyle={styles.listContent}
            ListEmptyComponent={
              <View style={styles.empty}>
                <Text style={[styles.emptyText, { color: colors.text.tertiary }]}>
                  {query ? `No items matching "${query}"` : 'No items available for this slot'}
                </Text>
              </View>
            }
          />
        )}

        {/* Custom add footer */}
        {query.trim() && !loading && (
          <View style={[styles.customFooter, { borderTopColor: colors.border.DEFAULT }]}>
            <Pressable
              testID="picker-add-custom"
              onPress={handleAddCustom}
              style={[styles.customButton, { borderColor: fantasy.bronze }]}
            >
              <Text
                style={[styles.customText, { color: isDark ? fantasy.gold : fantasy.darkWood }]}
              >
                + Add custom: &quot;{query.trim()}&quot;
              </Text>
            </Pressable>
          </View>
        )}
      </View>
    </Modal>
  );
}

// ---- Styles ----

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
  },
  title: {
    flex: 1,
    fontFamily: 'Cinzel',
    fontSize: 16,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  closeBtn: { padding: 4 },
  closeText: { fontSize: 18, fontWeight: '700' },
  searchRow: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
  },
  searchInput: {
    fontFamily: 'LibreBaskerville',
    fontSize: 16,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    minHeight: 44,
  },
  loadingView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  loadingText: {
    fontFamily: 'LibreBaskerville',
    fontSize: 14,
    fontStyle: 'italic',
  },
  listContent: { flexGrow: 1 },
  sectionHeader: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  sectionHeaderText: {
    fontFamily: 'Cinzel',
    fontSize: 11,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  item: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    gap: 2,
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemName: {
    fontFamily: 'LibreBaskerville',
    fontSize: 15,
    fontWeight: '700',
    flex: 1,
  },
  itemPrice: {
    fontFamily: 'LibreBaskerville',
    fontSize: 12,
    marginLeft: 8,
  },
  itemDesc: {
    fontFamily: 'LibreBaskerville',
    fontSize: 11,
    fontStyle: 'italic',
  },
  sourceBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 6,
    paddingVertical: 1,
    borderRadius: 3,
    marginTop: 2,
  },
  sourceBadgeText: {
    fontFamily: 'Cinzel',
    fontSize: 8,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.3,
  },
  bucklerNote: {
    fontFamily: 'LibreBaskerville',
    fontSize: 10,
    fontStyle: 'italic',
  },
  empty: { padding: 32, alignItems: 'center' },
  emptyText: {
    fontFamily: 'LibreBaskerville',
    fontSize: 14,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  customFooter: { padding: 16, borderTopWidth: 1 },
  customButton: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  customText: { fontFamily: 'LibreBaskerville', fontSize: 14 },
});
