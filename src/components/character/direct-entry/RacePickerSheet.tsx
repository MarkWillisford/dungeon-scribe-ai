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
import type { ExpandedRaceData, FlexibleAbilityBonus } from '@/data/races';
import type { AbilityKey } from '@/types/abilities';

// ---- Types ----

export interface RacePickerResult {
  raceId: string;
  raceName: string;
  racialBonuses: Partial<Record<AbilityKey, number>>;
  hasFlexBonus: boolean;
  flexibleAbilityBonuses?: FlexibleAbilityBonus[];
}

interface RacePickerSheetProps {
  visible: boolean;
  onSelect: (result: RacePickerResult) => void;
  onClose: () => void;
}

// ---- Helpers ----

const ABILITY_KEY_MAP: Record<string, AbilityKey> = {
  strength: 'str',
  dexterity: 'dex',
  constitution: 'con',
  intelligence: 'int',
  wisdom: 'wis',
  charisma: 'cha',
};

const ABILITY_LABEL: Record<AbilityKey, string> = {
  str: 'STR',
  dex: 'DEX',
  con: 'CON',
  int: 'INT',
  wis: 'WIS',
  cha: 'CHA',
};

function toRacialBonuses(
  mods: ExpandedRaceData['abilityModifiers'],
): Partial<Record<AbilityKey, number>> {
  const out: Partial<Record<AbilityKey, number>> = {};
  for (const [long, val] of Object.entries(mods)) {
    const key = ABILITY_KEY_MAP[long];
    if (key && val !== undefined) out[key] = val;
  }
  return out;
}

function formatMods(race: ExpandedRaceData): string {
  if (race.flexibleAbilityBonuses && race.flexibleAbilityBonuses.length > 0) {
    const summary = race.flexibleAbilityBonuses
      .map((b) => {
        const sign = b.modifier > 0 ? '+' : '';
        if (b.count === 'all') {
          const grp = b.group === 'any' ? 'chosen group' : b.group;
          return `${sign}${b.modifier} to all (${grp})`;
        }
        const grp =
          b.group === 'other' ? 'other group' : b.group === 'any' ? 'any ability' : b.group;
        return `${sign}${b.modifier} to 1 (${grp})`;
      })
      .join(' / ');
    return summary;
  }
  const parts: string[] = [];
  for (const [long, val] of Object.entries(race.abilityModifiers)) {
    const key = ABILITY_KEY_MAP[long];
    if (!key || val === undefined) continue;
    parts.push(`${val > 0 ? '+' : ''}${val} ${ABILITY_LABEL[key]}`);
  }
  return parts.length ? parts.join(' / ') : 'No modifiers';
}

// ---- Component ----

function flattenGroups(groups: {
  core: ExpandedRaceData[];
  featured: ExpandedRaceData[];
  uncommon: ExpandedRaceData[];
}): ExpandedRaceData[] {
  const flat = [...groups.core, ...groups.featured, ...groups.uncommon];
  const seen = new Set<string>();
  return flat.filter((r) => {
    if (seen.has(r.name)) return false;
    seen.add(r.name);
    return true;
  });
}

export function RacePickerSheet({ visible, onSelect, onClose }: RacePickerSheetProps) {
  const { colors, fantasy, isDark } = useTheme();
  const [query, setQuery] = useState('');
  const [allRaces, setAllRaces] = useState<ExpandedRaceData[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!visible || loaded) return;
    let cancelled = false;
    GameDataService.getRaceGroups()
      .then((groups) => {
        if (cancelled) return;
        setAllRaces(flattenGroups(groups));
        setLoaded(true);
      })
      .catch((e) => {
        if (cancelled) return;
        console.error('RacePickerSheet: Firestore load failed', e);
        setError('Failed to load races. Please close and try again.');
        setLoaded(true);
      });
    return () => {
      cancelled = true;
    };
  }, [visible, loaded]);

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return allRaces.slice(0, 100);
    return allRaces.filter((r) => r.name.toLowerCase().includes(q));
  }, [allRaces, query]);

  const handleClose = () => {
    setQuery('');
    setError(null);
    onClose();
  };

  const handleSelect = (race: ExpandedRaceData) => {
    setQuery('');
    onSelect({
      raceId: race.name.toLowerCase().replace(/\s+/g, '_'),
      raceName: race.name,
      racialBonuses: toRacialBonuses(race.abilityModifiers),
      hasFlexBonus: (race.flexibleAbilityBonuses?.length ?? 0) > 0,
      flexibleAbilityBonuses: race.flexibleAbilityBonuses,
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
            Select Race
          </Text>
          <Pressable onPress={handleClose} style={styles.closeBtn} hitSlop={12}>
            <Text style={[styles.closeText, { color: colors.text.tertiary }]}>✕</Text>
          </Pressable>
        </View>

        {/* Search */}
        <View style={[styles.searchRow, { borderBottomColor: colors.border.DEFAULT }]}>
          <TextInput
            value={query}
            onChangeText={setQuery}
            placeholder="Search races..."
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
        {!loaded ? (
          <View style={styles.loadingView}>
            <ActivityIndicator size="large" color={fantasy.gold} />
            <Text style={[styles.loadingText, { color: colors.text.tertiary }]}>Loading...</Text>
          </View>
        ) : error ? (
          <View style={styles.empty}>
            <Text style={[styles.emptyText, { color: colors.text.tertiary }]}>{error}</Text>
          </View>
        ) : (
          <FlatList
            data={filtered}
            keyExtractor={(r) => r.name}
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
              >
                <View style={styles.itemRow}>
                  <Text style={[styles.itemName, { color: colors.text.primary }]} numberOfLines={1}>
                    {item.name}
                  </Text>
                  <View
                    style={[
                      styles.categoryBadge,
                      { backgroundColor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)' },
                    ]}
                  >
                    <Text style={[styles.categoryText, { color: colors.text.tertiary }]}>
                      {item.category}
                    </Text>
                  </View>
                </View>
                <Text style={[styles.itemMods, { color: colors.text.secondary }]}>
                  {formatMods(item)}
                </Text>
              </Pressable>
            )}
            contentContainerStyle={styles.listContent}
            ListEmptyComponent={
              <View style={styles.empty}>
                <Text style={[styles.emptyText, { color: colors.text.tertiary }]}>
                  {query ? `No races matching "${query}"` : 'No races available'}
                </Text>
              </View>
            }
          />
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
  item: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    gap: 2,
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  itemName: {
    flex: 1,
    fontFamily: 'LibreBaskerville',
    fontSize: 15,
    fontWeight: '700',
  },
  categoryBadge: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 3,
  },
  categoryText: {
    fontFamily: 'Cinzel',
    fontSize: 8,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.3,
  },
  itemMods: {
    fontFamily: 'LibreBaskerville',
    fontSize: 12,
    fontStyle: 'italic',
  },
  empty: { padding: 32, alignItems: 'center' },
  emptyText: {
    fontFamily: 'LibreBaskerville',
    fontSize: 14,
    fontStyle: 'italic',
    textAlign: 'center',
  },
});
