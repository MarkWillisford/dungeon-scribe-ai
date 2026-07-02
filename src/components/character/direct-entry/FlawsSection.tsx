import React, { useMemo, useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { addFlaw, removeFlaw } from '@/store/slices/characterEntrySlice';
import { SearchPickerSheet, type SearchItem } from '@/components/ui/SearchPickerSheet';
import { FlawRegistryService } from '@/services/FlawRegistryService';
import { PRESET_PF1E_STANDARD } from '@/config/rulesetPresets';
import type { CharacterFlaw } from '@/types/flaws';

function genId(): string {
  return Math.random().toString(36).slice(2) + Date.now().toString(36);
}

interface FlawCardProps {
  flaw: CharacterFlaw;
}

function FlawCard({ flaw }: FlawCardProps) {
  const { colors, isDark } = useTheme();
  const dispatch = useAppDispatch();

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: isDark ? colors.bg.secondary : colors.bg.primary,
          borderColor: colors.border.DEFAULT,
        },
      ]}
      testID={`flaw-card-${flaw.flawId}`}
    >
      <View style={styles.cardHeader}>
        <Text style={[styles.flawName, { color: isDark ? '#E5D5B0' : '#3D2B1F' }]}>
          {flaw.name}
        </Text>
        <Pressable
          onPress={() => dispatch(removeFlaw(flaw.flawId))}
          hitSlop={8}
          accessibilityRole="button"
          accessibilityLabel={`Remove ${flaw.name}`}
          style={styles.removeBtn}
          testID={`remove-flaw-${flaw.flawId}`}
        >
          <Text style={[styles.removeIcon, { color: colors.text.tertiary }]}>✕</Text>
        </Pressable>
      </View>
    </View>
  );
}

export function FlawsSection() {
  const { colors, fantasy, isDark } = useTheme();
  const dispatch = useAppDispatch();
  const flaws = useAppSelector((state) => state.characterEntry.character.flaws.flaws);
  const ruleset = useAppSelector((state) => state.ruleset.activeRuleset ?? PRESET_PF1E_STANDARD);
  const maxFlaws = ruleset.validationSettings.maxFlaws;
  const allowedSources = ruleset.allowedSources;
  const [pickerOpen, setPickerOpen] = useState(false);

  const flawSearchItems = useMemo<SearchItem[]>(() => {
    const all = FlawRegistryService.getAllFlaws();
    const filtered =
      allowedSources.length > 0
        ? all.filter((f) => allowedSources.some((s) => s === f.source))
        : all;
    return filtered.map((f) => ({
      key: f.id,
      label: f.name,
      subLabel: f.description?.slice(0, 80),
      category: f.source,
    }));
  }, [allowedSources]);

  const atLimit = flaws.length >= maxFlaws;

  const handleSelect = (item: SearchItem) => {
    if (flaws.some((f) => f.flawId === item.key)) {
      setPickerOpen(false);
      return;
    }
    dispatch(addFlaw({ flawId: item.key, name: item.label }));
    setPickerOpen(false);
  };

  const handleAddCustom = (name: string) => {
    if (atLimit) {
      setPickerOpen(false);
      return;
    }
    dispatch(addFlaw({ flawId: genId(), name }));
    setPickerOpen(false);
  };

  return (
    <View style={styles.container} testID="flaws-section">
      <View
        style={[
          styles.summaryRow,
          {
            backgroundColor: isDark ? colors.bg.secondary : colors.bg.tertiary,
            borderColor: colors.border.DEFAULT,
          },
        ]}
        testID="flaws-summary"
      >
        <Text style={[styles.summaryText, { color: colors.text.secondary }]}>
          Flaws:{' '}
          <Text
            style={{
              fontWeight: '700',
              color: isDark ? fantasy.gold : fantasy.bronze,
            }}
          >
            {flaws.length}
          </Text>
          <Text style={{ fontWeight: '400' }}> / {maxFlaws}</Text>
        </Text>
      </View>

      {flaws.map((flaw) => (
        <FlawCard key={flaw.flawId} flaw={flaw} />
      ))}

      <Pressable
        onPress={() => setPickerOpen(true)}
        style={[styles.addButton, { borderColor: isDark ? fantasy.gold : colors.border.DEFAULT }]}
        accessibilityRole="button"
        accessibilityLabel="Add flaw"
        disabled={atLimit}
        testID="add-flaw-button"
      >
        <Text
          style={[
            styles.addButtonText,
            {
              color: atLimit ? colors.text.tertiary : isDark ? fantasy.gold : fantasy.darkWood,
            },
          ]}
        >
          + Add Flaw
        </Text>
      </Pressable>

      <SearchPickerSheet
        visible={pickerOpen}
        title="Add Flaw"
        items={flawSearchItems}
        onSelect={handleSelect}
        onClose={() => setPickerOpen(false)}
        placeholder="Search flaws..."
        allowCustom
        onAddCustom={handleAddCustom}
        testID="flaw-picker"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
  summaryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 8,
    gap: 8,
  },
  summaryText: {
    fontFamily: 'LibreBaskerville',
    fontSize: 13,
  },
  card: {
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 10,
    gap: 6,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  flawName: {
    flex: 1,
    fontFamily: 'LibreBaskerville',
    fontSize: 14,
    fontWeight: '700',
  },
  removeBtn: {
    padding: 4,
  },
  removeIcon: {
    fontSize: 14,
    fontWeight: '700',
  },
  addButton: {
    borderWidth: 1,
    borderRadius: 8,
    borderStyle: 'dashed',
    paddingVertical: 10,
    alignItems: 'center',
  },
  addButtonText: {
    fontFamily: 'LibreBaskerville',
    fontSize: 13,
    fontWeight: '600',
  },
});
