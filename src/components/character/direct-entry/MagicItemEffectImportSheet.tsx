import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { GameDataService } from '@/services/GameDataService';
import { SLOT_TITLES } from './EquipmentPickerSheet';
import type { Effect } from '@/types/base';
import type { MagicItemDefinition } from '@/types/magicItems';

interface MagicItemEffectImportSheetProps {
  visible: boolean;
  currentItemName: string;
  onImport: (effects: Effect[]) => void;
  onBack: () => void;
}

export function MagicItemEffectImportSheet({
  visible,
  currentItemName,
  onImport,
  onBack,
}: MagicItemEffectImportSheetProps) {
  const { colors, fantasy, isDark } = useTheme();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<MagicItemDefinition[]>([]);
  const [loading, setLoading] = useState(false);

  /* istanbul ignore next */
  useEffect(() => {
    if (!visible || !query) return;
    let cancelled = false;
    setLoading(true); // eslint-disable-line react-hooks/set-state-in-effect -- intentional: synchronously setting loading state at effect start before async work begins
    GameDataService.searchMagicItems(query).then((items) => {
      if (!cancelled) {
        setResults(items);
      }
      setLoading(false);
    });
    return () => {
      cancelled = true;
    };
  }, [visible, query]);

  const handleSelect = useCallback(
    (item: MagicItemDefinition) => {
      const remapped: Effect[] = (item.effects ?? []).map((e) => ({
        ...e,
        source: currentItemName,
      }));
      onImport(remapped);
      onBack();
    },
    [currentItemName, onImport, onBack],
  );

  const gold = isDark ? fantasy.gold : fantasy.darkWood;
  const headerBg = isDark ? colors.bg.secondary : colors.bg.primary;

  if (!visible) return null;

  return (
    <View
      style={[styles.root, { backgroundColor: isDark ? colors.bg.primary : colors.bg.secondary }]}
    >
      {/* Header */}
      <View
        style={[
          styles.header,
          { backgroundColor: headerBg, borderBottomColor: colors.border.DEFAULT },
        ]}
      >
        <Pressable onPress={onBack} hitSlop={12} testID="import-back-btn">
          <Text style={[styles.backBtn, { color: gold }]}>‹ Back</Text>
        </Pressable>
        <Text style={[styles.headerTitle, { color: gold }]} numberOfLines={1}>
          Import Effects
        </Text>
      </View>

      {/* Search input */}
      <View
        style={[
          styles.searchRow,
          { borderBottomColor: colors.border.DEFAULT, backgroundColor: headerBg },
        ]}
      >
        <TextInput
          testID="import-search-input"
          value={query}
          onChangeText={setQuery}
          placeholder="Type an item name to search..."
          placeholderTextColor={colors.text.tertiary}
          style={[
            styles.searchInput,
            {
              color: colors.text.primary,
              backgroundColor: isDark ? colors.bg.tertiary : colors.bg.secondary,
              borderColor: colors.border.DEFAULT,
            },
          ]}
          autoFocus
          returnKeyType="search"
          clearButtonMode="while-editing"
        />
      </View>

      {/* Results */}
      {loading && (
        <View style={styles.centerState}>
          <ActivityIndicator color={gold} />
        </View>
      )}

      {!loading && !query && (
        <View style={styles.centerState}>
          <Text style={[styles.hintText, { color: colors.text.tertiary }]}>
            Type an item name to search
          </Text>
        </View>
      )}

      {!loading && query.length > 0 && results.length === 0 && (
        <View style={styles.centerState}>
          <Text style={[styles.hintText, { color: colors.text.tertiary }]}>No items found</Text>
        </View>
      )}

      {!loading && results.length > 0 && (
        <FlatList
          data={results}
          keyExtractor={(item) => item.id}
          keyboardShouldPersistTaps="handled"
          renderItem={({ item }) => (
            <Pressable
              testID={`import-item-${item.id}`}
              onPress={() => handleSelect(item)}
              style={({ pressed }) => [
                styles.resultRow,
                {
                  borderBottomColor: colors.border.DEFAULT,
                  backgroundColor: pressed
                    ? isDark
                      ? 'rgba(212,175,55,0.08)'
                      : 'rgba(140,90,40,0.06)'
                    : 'transparent',
                },
              ]}
            >
              <View style={styles.resultInfo}>
                <Text style={[styles.resultName, { color: colors.text.primary }]} numberOfLines={1}>
                  {item.name}
                </Text>
                {item.description ? (
                  <Text
                    style={[styles.resultDesc, { color: colors.text.tertiary }]}
                    numberOfLines={2}
                  >
                    {item.description}
                  </Text>
                ) : null}
              </View>
              {item.slot ? (
                <View
                  style={[
                    styles.slotBadge,
                    { backgroundColor: isDark ? 'rgba(212,175,55,0.15)' : 'rgba(140,90,40,0.1)' },
                  ]}
                >
                  <Text style={[styles.slotBadgeText, { color: gold }]}>
                    {SLOT_TITLES[item.slot] ?? item.slot}
                  </Text>
                </View>
              ) : null}
            </Pressable>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
    gap: 12,
  },
  backBtn: {
    fontFamily: 'LibreBaskerville',
    fontSize: 16,
    fontWeight: '700',
  },
  headerTitle: {
    fontFamily: 'Cinzel',
    fontSize: 16,
    fontWeight: '700',
    flex: 1,
  },
  searchRow: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  searchInput: {
    fontFamily: 'LibreBaskerville',
    fontSize: 15,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    minHeight: 40,
  },
  centerState: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32,
  },
  hintText: {
    fontFamily: 'LibreBaskerville',
    fontSize: 14,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  resultRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    gap: 10,
  },
  resultInfo: { flex: 1 },
  resultName: {
    fontFamily: 'LibreBaskerville',
    fontSize: 15,
    fontWeight: '700',
  },
  resultDesc: {
    fontFamily: 'LibreBaskerville',
    fontSize: 12,
    marginTop: 2,
  },
  slotBadge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
  },
  slotBadgeText: {
    fontFamily: 'LibreBaskerville',
    fontSize: 11,
    fontWeight: '700',
  },
});
