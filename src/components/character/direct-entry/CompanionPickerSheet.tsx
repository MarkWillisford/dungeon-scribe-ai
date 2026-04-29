import React, { useMemo, useState, useEffect } from 'react';
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
import type { AnimalCompanionEntry, BodyShape } from '@/types/animalCompanions';

// ---- Filter -----------------------------------------------------------------
// Some granting sources restrict the picker. Paladin Divine Bond and Cavalier
// Mount only accept creatures that can serve as a mount for the character —
// shape-wise that means hooved/clawed/biped-claws quadrupeds, large avians
// for flying mounts, and a size category of Large+ so a Medium rider fits.
// Druid / Ranger / Hunter / Mad Dog / Sacred Huntsmaster use the full list.

export type CompanionPickerFilter = 'full' | 'mountsOnly';

// ---- Props ------------------------------------------------------------------

export interface CompanionPickerSheetProps {
  visible: boolean;
  title: string;
  pickerFilter: CompanionPickerFilter;
  onSelect: (entry: AnimalCompanionEntry) => void;
  onClose: () => void;
}

// ---- Component --------------------------------------------------------------

export function CompanionPickerSheet({
  visible,
  title,
  pickerFilter,
  onSelect,
  onClose,
}: CompanionPickerSheetProps) {
  const { colors, fantasy, isDark } = useTheme();
  const [query, setQuery] = useState('');
  const [allItems, setAllItems] = useState<AnimalCompanionEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!visible) return;
    let cancelled = false;
    GameDataService.getAnimalCompanions(
      pickerFilter === 'mountsOnly' ? { mountsOnly: true } : undefined,
    )
      .then((entries) => {
        if (!cancelled) {
          setAllItems([...entries].sort((a, b) => a.name.localeCompare(b.name)));
        }
      })
      .catch((e) => {
        console.error('Failed to load animal companions:', e);
      })
      .finally(() => {
        if (!cancelled) setIsLoading(false);
      });
    return () => {
      cancelled = true;
      setIsLoading(true);
      setAllItems([]);
    };
  }, [visible, pickerFilter]);

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return allItems;
    return allItems.filter(
      (entry) =>
        entry.name.toLowerCase().includes(q) ||
        entry.bodyShape.toLowerCase().includes(q) ||
        entry.size.toLowerCase().includes(q),
    );
  }, [allItems, query]);

  const handleClose = () => {
    setQuery('');
    onClose();
  };

  const handleSelect = (entry: AnimalCompanionEntry) => {
    setQuery('');
    onSelect(entry);
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

        <View style={[styles.searchRow, { borderBottomColor: colors.border.DEFAULT }]}>
          <TextInput
            value={query}
            onChangeText={setQuery}
            placeholder={
              pickerFilter === 'mountsOnly' ? 'Search mounts...' : 'Search companions...'
            }
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

        {isLoading && (
          <View style={styles.loadingRow}>
            <ActivityIndicator size="small" color={fantasy.gold} />
            <Text style={[styles.loadingText, { color: colors.text.tertiary }]}>
              Loading companions...
            </Text>
          </View>
        )}

        <FlatList
          data={filtered}
          keyExtractor={(entry) => entry.id}
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
              <Text style={[styles.entryName, { color: colors.text.primary }]}>{item.name}</Text>
              <Text style={[styles.meta, { color: colors.text.tertiary }]}>
                {item.size} · {formatBodyShape(item.bodyShape)}
              </Text>
            </Pressable>
          )}
          contentContainerStyle={styles.listContent}
          ListFooterComponent={
            !isLoading && filtered.length === 0 ? (
              <View style={styles.empty}>
                <Text style={[styles.emptyText, { color: colors.text.tertiary }]}>
                  {query
                    ? `No companions matching "${query}"`
                    : pickerFilter === 'mountsOnly'
                      ? 'No mountable companions available.'
                      : 'No companions available.'}
                </Text>
              </View>
            ) : null
          }
        />
      </View>
    </Modal>
  );
}

// ---- Helpers ----------------------------------------------------------------

const BODY_SHAPE_LABELS: Record<BodyShape, string> = {
  bipedHands: 'Biped (Hands)',
  bipedClaws: 'Biped (Claws)',
  quadrupedClaws: 'Quadruped',
  quadrupedHooves: 'Quadruped (Hooves)',
  quadrupedOther: 'Quadruped (Heavy)',
  quadrupedShortLegs: 'Quadruped (Short Legs)',
  avian: 'Avian',
  serpentine: 'Serpentine',
  piscine: 'Piscine',
  unusual: 'Unusual',
};

function formatBodyShape(shape: BodyShape): string {
  return BODY_SHAPE_LABELS[shape];
}

// ---- Styles -----------------------------------------------------------------

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
  listContent: { flexGrow: 1 },
  item: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    gap: 3,
  },
  entryName: { fontFamily: 'LibreBaskerville', fontSize: 15, fontWeight: '700' },
  meta: { fontFamily: 'LibreBaskerville', fontSize: 12, fontStyle: 'italic' },
  empty: { padding: 32, alignItems: 'center' },
  emptyText: { fontFamily: 'LibreBaskerville', fontSize: 14, fontStyle: 'italic' },
});
