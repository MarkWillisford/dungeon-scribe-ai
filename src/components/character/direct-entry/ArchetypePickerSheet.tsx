import React, { useState, useMemo, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  Modal,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { GameDataService } from '@/services/GameDataService';
import type { ArchetypeData } from '@/data/classes/types';

// ---- Doc ID helper (mirrors seed script) ----

function slug(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function archetypeDocId(className: string, name: string): string {
  return `${slug(className)}-${slug(name)}`;
}

// ---- List item type ----

interface ArchetypeItem {
  key: string;
  label: string;
  source: string;
  description?: string;
  isNone?: boolean;
}

const NONE_ITEM: ArchetypeItem = {
  key: '__none__',
  label: 'No Archetype',
  source: '',
  isNone: true,
};

function sourceLabel(source: unknown): string {
  if (!source) return '';
  if (typeof source === 'string') return source;
  if (typeof source === 'object' && 'bookName' in (source as object))
    return (source as { bookName: string }).bookName;
  return '';
}

function buildItems(archetypes: ArchetypeData[], className: string): ArchetypeItem[] {
  const items = archetypes.map((a) => ({
    key: archetypeDocId(className, a.name),
    label: a.name,
    source: sourceLabel(a.source),
    description: a.description?.slice(0, 120),
  }));
  items.sort((a, b) => a.label.localeCompare(b.label));
  return [NONE_ITEM, ...items];
}

// ---- Props ----

export interface ArchetypePickerResult {
  archetypeId: string | undefined;
  archetypeName: string | undefined;
}

interface ArchetypePickerSheetProps {
  visible: boolean;
  title: string;
  className: string;
  onSelect: (result: ArchetypePickerResult) => void;
  onClose: () => void;
}

// ---- Component ----

export function ArchetypePickerSheet({
  visible,
  title,
  className,
  onSelect,
  onClose,
}: ArchetypePickerSheetProps) {
  const { colors, fantasy, isDark } = useTheme();
  const [query, setQuery] = useState('');
  const [loadedClass, setLoadedClass] = useState<string | null>(null);
  const [allItems, setAllItems] = useState<ArchetypeItem[]>([NONE_ITEM]);

  const isLoading = visible && !!className && loadedClass !== className;

  useEffect(() => {
    if (!visible || !className) return;
    let cancelled = false;
    GameDataService.getArchetypesByClass(className)
      .then((archetypes) => {
        if (!cancelled) {
          setAllItems(buildItems(archetypes, className));
          setLoadedClass(className);
        }
      })
      .catch((e) => {
        if (!cancelled) {
          console.error('Failed to load archetypes:', e);
          setLoadedClass(className);
        }
      });
    return () => {
      cancelled = true;
    };
  }, [visible, className]);

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return allItems;
    return [
      NONE_ITEM,
      ...allItems.filter(
        (item) =>
          !item.isNone &&
          (item.label.toLowerCase().includes(q) ||
            item.source.toLowerCase().includes(q) ||
            item.description?.toLowerCase().includes(q)),
      ),
    ];
  }, [allItems, query]);

  const handleClose = () => {
    setQuery('');
    onClose();
  };

  const handleSelect = (item: ArchetypeItem) => {
    setQuery('');
    onSelect({
      archetypeId: item.isNone ? undefined : item.key,
      archetypeName: item.isNone ? undefined : item.label,
    });
  };

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
            accessibilityRole="button"
            accessibilityLabel="Close"
          >
            <Text style={[styles.closeText, { color: colors.text.tertiary }]}>✕</Text>
          </Pressable>
        </View>

        {/* Search */}
        <View style={[styles.searchRow, { borderBottomColor: colors.border.DEFAULT }]}>
          <TextInput
            value={query}
            onChangeText={setQuery}
            placeholder="Search archetypes..."
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

        {/* Loading indicator */}
        {isLoading && (
          <View style={styles.loadingRow}>
            <ActivityIndicator size="small" color={fantasy.gold} />
            <Text style={[styles.loadingText, { color: colors.text.tertiary }]}>
              Loading archetypes...
            </Text>
          </View>
        )}

        {/* Results */}
        <FlatList
          data={filtered}
          keyExtractor={(item) => item.key}
          keyboardShouldPersistTaps="handled"
          renderItem={({ item }) => (
            <Pressable
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
              accessibilityRole="menuitem"
            >
              <Text
                style={[
                  styles.archetypeName,
                  {
                    color: item.isNone ? colors.text.tertiary : colors.text.primary,
                    fontStyle: item.isNone ? 'italic' : 'normal',
                  },
                ]}
              >
                {item.label}
              </Text>
              {!item.isNone && item.source ? (
                <Text style={[styles.source, { color: colors.text.tertiary }]}>{item.source}</Text>
              ) : null}
              {!item.isNone && item.description ? (
                <Text style={[styles.description, { color: colors.text.secondary }]}>
                  {item.description}
                  {(item.description?.length ?? 0) >= 120 ? '…' : ''}
                </Text>
              ) : null}
            </Pressable>
          )}
          contentContainerStyle={styles.listContent}
          ListFooterComponent={
            !isLoading && filtered.length === 1 ? (
              <View style={styles.empty}>
                <Text style={[styles.emptyText, { color: colors.text.tertiary }]}>
                  {query
                    ? `No archetypes matching "${query}"`
                    : `No archetypes found for ${className}`}
                </Text>
              </View>
            ) : null
          }
        />
      </View>
    </Modal>
  );
}

// ---- Styles ----

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
  closeBtn: {
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
  loadingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    gap: 8,
  },
  loadingText: {
    fontFamily: 'LibreBaskerville',
    fontSize: 13,
    fontStyle: 'italic',
  },
  listContent: {
    flexGrow: 1,
  },
  item: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    gap: 3,
  },
  archetypeName: {
    fontFamily: 'LibreBaskerville',
    fontSize: 15,
    fontWeight: '700',
  },
  source: {
    fontFamily: 'LibreBaskerville',
    fontSize: 11,
    fontStyle: 'italic',
  },
  description: {
    fontFamily: 'LibreBaskerville',
    fontSize: 12,
  },
  empty: {
    padding: 32,
    alignItems: 'center',
  },
  emptyText: {
    fontFamily: 'LibreBaskerville',
    fontSize: 14,
    fontStyle: 'italic',
  },
});
