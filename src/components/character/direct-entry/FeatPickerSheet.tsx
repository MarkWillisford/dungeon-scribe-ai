import React, { useState, useMemo, useEffect } from 'react';
import { View, Text, TextInput, Pressable, Modal, FlatList, StyleSheet } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { GameDataService } from '@/services/GameDataService';
import { type FeatDefinition } from '@/types/feats';

// ---- Feat type pill colors ----

const TYPE_COLORS: Record<string, string> = {
  combat: '#EF4444',
  metamagic: '#3B82F6',
  item_creation: '#10B981',
  teamwork: '#F59E0B',
  mythic: '#8B5CF6',
  style: '#EC4899',
  general: '#6B7280',
};

function FeatTypePill({ type }: { type: string }) {
  const color = TYPE_COLORS[type] ?? TYPE_COLORS.general;
  return (
    <View style={[pillStyles.pill, { backgroundColor: `${color}22` }]}>
      <Text style={[pillStyles.text, { color }]}>{type.replace(/_/g, ' ')}</Text>
    </View>
  );
}

const pillStyles = StyleSheet.create({
  pill: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    marginRight: 4,
  },
  text: {
    fontFamily: 'Cinzel',
    fontSize: 8,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.3,
  },
});

// ---- Feat search item list ----
// Build once from static data

interface FeatItem {
  key: string;
  label: string;
  types: FeatDefinition['types'];
  prereqSummary?: string;
}

function buildPrereqSummary(feat: FeatDefinition): string | undefined {
  if (!feat.prerequisites || feat.prerequisites.length === 0) return undefined;
  return (
    feat.prerequisites
      .slice(0, 2)
      .map((p) => {
        switch (p.type) {
          case 'feat':
            return `feat: ${p.featId}`;
          case 'bab':
            return `BAB +${p.minimum}`;
          case 'ability_score':
            return `${p.ability} ${p.minimum}`;
          case 'level':
            return p.class ? `${p.class} ${p.minimum}` : `level ${p.minimum}`;
          case 'skill':
            return `${p.skillId} ${p.ranks}`;
          default:
            return '';
        }
      })
      .filter(Boolean)
      .join(', ') + (feat.prerequisites.length > 2 ? '...' : '')
  );
}

let FEAT_ITEMS_CACHE: FeatItem[] | null = null;

async function getFeatItems(): Promise<FeatItem[]> {
  if (FEAT_ITEMS_CACHE) return FEAT_ITEMS_CACHE;
  const feats = await GameDataService.getAllFeats();
  FEAT_ITEMS_CACHE = feats.map((f) => ({
    key: f.id,
    label: f.name,
    types: f.types,
    prereqSummary: buildPrereqSummary(f),
  }));
  return FEAT_ITEMS_CACHE;
}

// ---- Props ----

export interface FeatPickerResult {
  featId: string;
  featName: string;
}

interface FeatPickerSheetProps {
  visible: boolean;
  title: string;
  onSelect: (result: FeatPickerResult) => void;
  onClose: () => void;
}

// ---- Component ----

export function FeatPickerSheet({ visible, title, onSelect, onClose }: FeatPickerSheetProps) {
  const { colors, fantasy, isDark } = useTheme();
  const [query, setQuery] = useState('');
  const [allItems, setAllItems] = useState<FeatItem[]>([]);

  useEffect(() => {
    getFeatItems().then(setAllItems);
  }, []);

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return allItems.slice(0, 80); // cap initial list for performance
    return allItems.filter(
      (item) =>
        item.label.toLowerCase().includes(q) || item.prereqSummary?.toLowerCase().includes(q),
    );
  }, [allItems, query]);

  const handleClose = () => {
    setQuery('');
    onClose();
  };

  const handleSelect = (item: FeatItem) => {
    setQuery('');
    onSelect({ featId: item.key, featName: item.label });
  };

  const handleAddCustom = () => {
    if (!query.trim()) return;
    setQuery('');
    onSelect({ featId: `custom-${Date.now()}`, featName: query.trim() });
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
            placeholder="Search feats..."
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
              <Text style={[styles.featName, { color: colors.text.primary }]}>{item.label}</Text>
              <View style={styles.pillRow}>
                {item.types.slice(0, 3).map((t) => (
                  <FeatTypePill key={t} type={t} />
                ))}
              </View>
              {item.prereqSummary ? (
                <Text style={[styles.prereq, { color: colors.text.tertiary }]}>
                  Prereqs: {item.prereqSummary}
                </Text>
              ) : null}
            </Pressable>
          )}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={
            <View style={styles.empty}>
              <Text style={[styles.emptyText, { color: colors.text.tertiary }]}>
                {query ? `No feats matching "${query}"` : 'Start typing to search...'}
              </Text>
            </View>
          }
        />

        {/* Custom add footer */}
        {query.trim() && (
          <View style={[styles.customFooter, { borderTopColor: colors.border.DEFAULT }]}>
            <Pressable
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
  listContent: {
    flexGrow: 1,
  },
  item: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    gap: 4,
  },
  featName: {
    fontFamily: 'LibreBaskerville',
    fontSize: 15,
    fontWeight: '700',
  },
  pillRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  prereq: {
    fontFamily: 'LibreBaskerville',
    fontSize: 11,
    fontStyle: 'italic',
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
  customFooter: {
    padding: 16,
    borderTopWidth: 1,
  },
  customButton: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  customText: {
    fontFamily: 'LibreBaskerville',
    fontSize: 14,
  },
});
