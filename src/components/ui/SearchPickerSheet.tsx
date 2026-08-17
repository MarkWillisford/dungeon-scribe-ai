import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  Modal,
  FlatList,
  StyleSheet,
  Keyboard,
} from 'react-native';
import { useTheme } from '@/hooks/useTheme';

export interface SearchItem {
  key: string;
  label: string;
  subLabel?: string;
  category?: string;
}

interface SearchPickerSheetProps {
  visible: boolean;
  title: string;
  items: SearchItem[];
  onSelect: (item: SearchItem) => void;
  onClose: () => void;
  placeholder?: string;
  allowCustom?: boolean;
  onAddCustom?: (name: string) => void;
  testID?: string;
}

/**
 * A full-screen modal bottom sheet with search input and grouped results.
 * Used for selecting classes, archetypes, feats, traits, templates, etc.
 */
export function SearchPickerSheet({
  visible,
  title,
  items,
  onSelect,
  onClose,
  placeholder = 'Search...',
  allowCustom = false,
  onAddCustom,
  testID,
}: SearchPickerSheetProps) {
  const { colors, fantasy, isDark } = useTheme();
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return items;
    return items.filter(
      (item) =>
        item.label.toLowerCase().includes(q) ||
        item.subLabel?.toLowerCase().includes(q) ||
        item.category?.toLowerCase().includes(q),
    );
  }, [items, query]);

  // Group by category
  const grouped = useMemo(() => {
    const map = new Map<string, SearchItem[]>();
    for (const item of filtered) {
      const cat = item.category ?? '';
      if (!map.has(cat)) map.set(cat, []);
      map.get(cat)!.push(item);
    }
    return Array.from(map.entries()).sort(([a], [b]) => a.localeCompare(b));
  }, [filtered]);

  // Flatten for FlatList with section headers
  const flatData = useMemo(() => {
    const rows: ({ type: 'header'; label: string } | { type: 'item'; item: SearchItem })[] = [];
    for (const [category, catItems] of grouped) {
      if (category) {
        rows.push({ type: 'header', label: category });
      }
      for (const item of catItems) {
        rows.push({ type: 'item', item });
      }
    }
    return rows;
  }, [grouped]);

  const handleClose = () => {
    setQuery('');
    onClose();
  };

  const handleSelect = (item: SearchItem) => {
    setQuery('');
    onSelect(item);
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={handleClose}
      testID={testID}
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
            style={styles.closeButton}
            accessibilityRole="button"
            accessibilityLabel="Close"
            hitSlop={12}
          >
            <Text style={[styles.closeText, { color: colors.text.tertiary }]}>✕</Text>
          </Pressable>
        </View>

        {/* Search */}
        <View style={[styles.searchRow, { borderBottomColor: colors.border.DEFAULT }]}>
          <TextInput
            value={query}
            onChangeText={setQuery}
            placeholder={placeholder}
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
            accessibilityLabel="Search"
            clearButtonMode="while-editing"
          />
        </View>

        {/* Results */}
        <FlatList
          testID="search-picker-results"
          data={flatData}
          keyExtractor={(row, i) =>
            row.type === 'header' ? `header-${row.label}-${i}` : row.item.key
          }
          renderItem={({ item: row }) => {
            if (row.type === 'header') {
              return (
                <Text
                  style={[
                    styles.sectionHeader,
                    {
                      color: isDark ? fantasy.gold : fantasy.darkWood,
                      backgroundColor: isDark ? colors.bg.secondary : colors.bg.tertiary,
                    },
                  ]}
                >
                  {row.label}
                </Text>
              );
            }
            return (
              <Pressable
                onPress={() => handleSelect(row.item)}
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
                accessibilityRole="menuitem"
              >
                <View style={styles.itemContent}>
                  <Text style={[styles.itemLabel, { color: colors.text.primary }]}>
                    {row.item.label}
                  </Text>
                  {row.item.subLabel && (
                    <Text style={[styles.itemSubLabel, { color: colors.text.tertiary }]}>
                      {row.item.subLabel}
                    </Text>
                  )}
                </View>
              </Pressable>
            );
          }}
          contentContainerStyle={styles.listContent}
          keyboardShouldPersistTaps="always"
          onScrollBeginDrag={Keyboard.dismiss}
          ListEmptyComponent={
            <View style={styles.empty}>
              <Text style={[styles.emptyText, { color: colors.text.tertiary }]}>
                {'No results for "'}
                {query}
                {'"'}
              </Text>
              {allowCustom && onAddCustom && query.trim() && (
                <Pressable
                  onPress={() => {
                    onAddCustom(query.trim());
                    handleClose();
                  }}
                  style={[styles.addCustomButton, { borderColor: fantasy.bronze }]}
                >
                  <Text
                    style={[
                      styles.addCustomText,
                      { color: isDark ? fantasy.gold : fantasy.darkWood },
                    ]}
                  >
                    {'+ Add "'}
                    {query.trim()}
                    {'" as custom'}
                  </Text>
                </Pressable>
              )}
            </View>
          }
        />

        {allowCustom && onAddCustom && query.trim() && filtered.length > 0 && (
          <View style={[styles.customFooter, { borderTopColor: colors.border.DEFAULT }]}>
            <Pressable
              onPress={() => {
                onAddCustom(query.trim());
                handleClose();
              }}
              style={[styles.addCustomButton, { borderColor: fantasy.bronze }]}
            >
              <Text
                style={[styles.addCustomText, { color: isDark ? fantasy.gold : fantasy.darkWood }]}
              >
                {'+ Add "'}
                {query.trim()}
                {'" as custom'}
              </Text>
            </Pressable>
          </View>
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
  closeButton: {
    padding: 4,
  },
  closeText: {
    fontSize: 18,
    fontWeight: '700',
  },
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
  listContent: {
    flexGrow: 1,
  },
  sectionHeader: {
    fontFamily: 'Cinzel',
    fontSize: 11,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  item: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  itemContent: {
    gap: 2,
  },
  itemLabel: {
    fontFamily: 'LibreBaskerville',
    fontSize: 16,
  },
  itemSubLabel: {
    fontFamily: 'LibreBaskerville',
    fontSize: 12,
    fontStyle: 'italic',
  },
  empty: {
    padding: 32,
    alignItems: 'center',
    gap: 16,
  },
  emptyText: {
    fontFamily: 'LibreBaskerville',
    fontSize: 14,
    fontStyle: 'italic',
  },
  addCustomButton: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  addCustomText: {
    fontFamily: 'LibreBaskerville',
    fontSize: 14,
  },
  customFooter: {
    padding: 16,
    borderTopWidth: 1,
  },
});
