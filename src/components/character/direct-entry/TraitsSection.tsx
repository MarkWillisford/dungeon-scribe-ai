import React, { useMemo, useState, useEffect } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { addTrait, removeTrait } from '@/store/slices/characterEntrySlice';
import { SearchPickerSheet, type SearchItem } from '@/components/ui/SearchPickerSheet';
import { GameDataService } from '@/services/GameDataService';
import { type DraftTrait } from '@/types/characterDraft';
import type { TraitDefinition } from '@/types/traits';

// ---- Category badge colors ----

const CATEGORY_COLORS: Record<string, { bg: string; text: string }> = {
  combat: { bg: 'rgba(239,68,68,0.15)', text: '#EF4444' },
  faith: { bg: 'rgba(139,92,246,0.15)', text: '#8B5CF6' },
  magic: { bg: 'rgba(59,130,246,0.15)', text: '#3B82F6' },
  social: { bg: 'rgba(16,185,129,0.15)', text: '#10B981' },
  race: { bg: 'rgba(212,175,55,0.15)', text: '#D4AF37' },
  regional: { bg: 'rgba(245,158,11,0.15)', text: '#F59E0B' },
  religion: { bg: 'rgba(167,139,250,0.15)', text: '#A78BFA' },
  campaign: { bg: 'rgba(20,184,166,0.15)', text: '#14B8A6' },
  equipment: { bg: 'rgba(107,114,128,0.15)', text: '#6B7280' },
};

function categoryLabel(cat: string): string {
  return cat.charAt(0).toUpperCase() + cat.slice(1);
}

function genId(): string {
  return Math.random().toString(36).slice(2) + Date.now().toString(36);
}

// ---- Trait card ----

interface TraitCardProps {
  trait: DraftTrait;
}

function TraitCard({ trait }: TraitCardProps) {
  const { colors, isDark } = useTheme();
  const dispatch = useAppDispatch();
  const catStyle = CATEGORY_COLORS[trait.category] ?? CATEGORY_COLORS.campaign;

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: isDark ? colors.bg.secondary : colors.bg.primary,
          borderColor: colors.border.DEFAULT,
        },
      ]}
    >
      <View style={styles.cardHeader}>
        <Text style={[styles.traitName, { color: isDark ? '#E5D5B0' : '#3D2B1F' }]}>
          {trait.traitName}
        </Text>
        <View style={[styles.categoryBadge, { backgroundColor: catStyle.bg }]}>
          <Text style={[styles.categoryText, { color: catStyle.text }]}>
            {categoryLabel(trait.category)}
          </Text>
        </View>
        <Pressable
          onPress={() => dispatch(removeTrait(trait.id))}
          hitSlop={8}
          accessibilityRole="button"
          accessibilityLabel={`Remove ${trait.traitName}`}
          style={styles.removeBtn}
        >
          <Text style={[styles.removeIcon, { color: colors.text.tertiary }]}>✕</Text>
        </Pressable>
      </View>
      {trait.description ? (
        <Text style={[styles.description, { color: colors.text.secondary }]}>
          {trait.description}
        </Text>
      ) : null}
    </View>
  );
}

// ---- Main section ----

const MAX_TRAITS_DEFAULT = 2;

export function TraitsSection() {
  const { colors, fantasy, isDark } = useTheme();
  const dispatch = useAppDispatch();
  const traits = useAppSelector((state) => state.characterEntry.draft.traits);
  const [pickerOpen, setPickerOpen] = useState(false);
  const [allTraitDefs, setAllTraitDefs] = useState<TraitDefinition[]>([]);

  useEffect(() => {
    GameDataService.getAllTraits().then(setAllTraitDefs);
  }, []);

  const traitSearchItems = useMemo<SearchItem[]>(
    () =>
      allTraitDefs.map((t) => ({
        key: t.id,
        label: t.name,
        subLabel: (t.shortDescription ?? t.description)?.slice(0, 80),
        category: categoryLabel(t.category),
      })),
    [allTraitDefs],
  );

  const overLimit = traits.length > MAX_TRAITS_DEFAULT;

  const handleSelect = (item: SearchItem) => {
    // Avoid duplicates
    if (traits.some((t) => t.traitId === item.key)) {
      setPickerOpen(false);
      return;
    }
    // Find the trait definition to pull category + description
    const def = allTraitDefs.find((t) => t.id === item.key);
    const draft: DraftTrait = {
      id: genId(),
      traitId: item.key,
      traitName: item.label,
      category: def?.category ?? 'campaign',
      description: def?.shortDescription ?? def?.description ?? '',
    };
    dispatch(addTrait(draft));
    setPickerOpen(false);
  };

  const handleAddCustom = (name: string) => {
    dispatch(
      addTrait({
        id: genId(),
        traitName: name,
        category: 'campaign',
        description: '',
      }),
    );
    setPickerOpen(false);
  };

  return (
    <View style={styles.container}>
      {/* Slot summary */}
      <View
        style={[
          styles.summaryRow,
          {
            backgroundColor: isDark ? colors.bg.secondary : colors.bg.tertiary,
            borderColor: overLimit ? '#EF4444' : colors.border.DEFAULT,
          },
        ]}
      >
        <Text style={[styles.summaryText, { color: colors.text.secondary }]}>
          Traits:{' '}
          <Text
            style={{
              fontWeight: '700',
              color: overLimit ? '#EF4444' : isDark ? fantasy.gold : fantasy.bronze,
            }}
          >
            {traits.length}
          </Text>
          <Text style={{ fontWeight: '400' }}> / {MAX_TRAITS_DEFAULT}</Text>
        </Text>
        {overLimit && (
          <Text style={[styles.overLimitNote, { color: '#EF4444' }]}>
            ⚠ over limit — DM approval needed
          </Text>
        )}
      </View>

      {/* Trait cards */}
      {traits.map((trait) => (
        <TraitCard key={trait.id} trait={trait} />
      ))}

      {/* Add button */}
      <Pressable
        onPress={() => setPickerOpen(true)}
        style={[styles.addButton, { borderColor: isDark ? fantasy.gold : colors.border.DEFAULT }]}
        accessibilityRole="button"
        accessibilityLabel="Add trait"
      >
        <Text style={[styles.addButtonText, { color: isDark ? fantasy.gold : fantasy.darkWood }]}>
          + Add Trait
        </Text>
      </Pressable>

      <SearchPickerSheet
        visible={pickerOpen}
        title="Add Trait"
        items={traitSearchItems}
        onSelect={handleSelect}
        onClose={() => setPickerOpen(false)}
        placeholder="Search traits..."
        allowCustom
        onAddCustom={handleAddCustom}
      />
    </View>
  );
}

// ---- Styles ----

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
  overLimitNote: {
    fontFamily: 'LibreBaskerville',
    fontSize: 11,
    fontStyle: 'italic',
    flex: 1,
    textAlign: 'right',
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
  traitName: {
    flex: 1,
    fontFamily: 'LibreBaskerville',
    fontSize: 14,
    fontWeight: '700',
  },
  categoryBadge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4,
  },
  categoryText: {
    fontFamily: 'Cinzel',
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  removeBtn: {
    padding: 4,
  },
  removeIcon: {
    fontSize: 14,
    fontWeight: '700',
  },
  description: {
    fontFamily: 'LibreBaskerville',
    fontSize: 12,
    lineHeight: 17,
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
