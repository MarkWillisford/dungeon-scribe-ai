import React, { useMemo, useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { useAppDispatch } from '@/store/hooks';
import { addCompanionFeat, removeCompanionFeatAt } from '@/store/slices/characterEntrySlice';
import {
  FeatPickerSheet,
  type FeatPickerResult,
} from '@/components/character/direct-entry/FeatPickerSheet';
import { CompanionService } from '@/services/CompanionService';
import type { CompanionInstance } from '@/types/companions';
import type { AnimalCompanionEntry } from '@/types/animalCompanions';

export interface FeatsSectionProps {
  companion: CompanionInstance;
  entry: AnimalCompanionEntry | undefined;
}

export function FeatsSection({ companion, entry }: FeatsSectionProps) {
  const { colors, fantasy, isDark } = useTheme();
  const dispatch = useAppDispatch();
  const [pickerOpen, setPickerOpen] = useState(false);

  const baseStats = useMemo(() => {
    if (!entry) return undefined;
    return CompanionService.computeBaseStatBlock(entry, companion.effectiveProgressionLevel);
  }, [entry, companion.effectiveProgressionLevel]);

  if (!entry || !baseStats) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={[styles.emptyText, { color: colors.text.tertiary }]}>
          Entry definition missing — can&apos;t compute feat slots.
        </Text>
      </View>
    );
  }

  const slotCount = baseStats.featSlots;
  const assigned = companion.feats;
  const available = Math.max(0, slotCount - assigned.length);

  const handlePick = (result: FeatPickerResult) => {
    dispatch(
      addCompanionFeat({
        instanceId: companion.instanceId,
        feat: {
          featId: result.featId,
          name: result.featName,
          hdWhenTaken: baseStats.hd,
          active: true,
          choices: {},
        },
      }),
    );
    setPickerOpen(false);
  };

  const handleRemove = (index: number) => {
    dispatch(removeCompanionFeatAt({ instanceId: companion.instanceId, index }));
  };

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.budgetPanel,
          {
            borderColor: colors.border.DEFAULT,
            backgroundColor: isDark ? colors.bg.tertiary : colors.bg.primary,
          },
        ]}
      >
        <Text style={[styles.budgetLabel, { color: colors.text.tertiary }]}>Feats</Text>
        <Text
          style={[
            styles.budgetValue,
            {
              color: colors.text.primary,
              fontWeight: assigned.length > slotCount ? '700' : '400',
            },
          ]}
        >
          {assigned.length} / {slotCount}
        </Text>
        <Text style={[styles.budgetHint, { color: colors.text.tertiary }]}>
          Companion earns a feat every 3 HD. Current: {baseStats.hd} HD.
        </Text>
      </View>

      {assigned.length === 0 ? (
        <View style={styles.emptyAssigned}>
          <Text style={[styles.emptyText, { color: colors.text.tertiary }]}>
            No feats assigned yet.
          </Text>
        </View>
      ) : (
        assigned.map((feat, idx) => (
          <View
            key={`${feat.featId}-${idx}`}
            style={[styles.featRow, { borderBottomColor: colors.border.DEFAULT }]}
          >
            <View style={styles.featText}>
              <Text style={[styles.featName, { color: colors.text.primary }]}>{feat.name}</Text>
              <Text style={[styles.featMeta, { color: colors.text.tertiary }]}>
                taken at HD {feat.hdWhenTaken}
              </Text>
            </View>
            <Pressable
              onPress={() => handleRemove(idx)}
              hitSlop={8}
              accessibilityRole="button"
              accessibilityLabel={`Remove feat ${feat.name}`}
              style={styles.removeBtn}
            >
              <Text style={[styles.removeText, { color: colors.text.tertiary }]}>✕</Text>
            </Pressable>
          </View>
        ))
      )}

      <Pressable
        onPress={() => setPickerOpen(true)}
        disabled={available === 0}
        style={[
          styles.addBtn,
          {
            borderColor: available > 0 ? fantasy.gold : colors.border.DEFAULT,
            opacity: available > 0 ? 1 : 0.5,
          },
        ]}
        accessibilityRole="button"
        accessibilityLabel="Add feat"
      >
        <Text
          style={[
            styles.addText,
            {
              color:
                available > 0 ? (isDark ? fantasy.gold : fantasy.darkWood) : colors.text.tertiary,
            },
          ]}
        >
          {available > 0 ? `+ Add Feat  (${available} open)` : 'All feat slots filled'}
        </Text>
      </Pressable>

      <Text style={[styles.footer, { color: colors.text.tertiary }]}>
        Companion-eligibility filtering (e.g. no Two-Weapon Fighting on a snake) will land with the
        prerequisite pipeline.
      </Text>

      <FeatPickerSheet
        visible={pickerOpen}
        title="Add Companion Feat"
        onSelect={handlePick}
        onClose={() => setPickerOpen(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { gap: 12 },
  budgetPanel: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    alignItems: 'center',
    gap: 2,
  },
  budgetLabel: {
    fontFamily: 'Cinzel',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  budgetValue: { fontFamily: 'Cinzel', fontSize: 20, fontWeight: '700' },
  budgetHint: { fontFamily: 'LibreBaskerville', fontSize: 11, fontStyle: 'italic' },
  featRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 4,
    borderBottomWidth: StyleSheet.hairlineWidth,
    gap: 8,
  },
  featText: { flex: 1, gap: 2 },
  featName: { fontFamily: 'LibreBaskerville', fontSize: 15, fontWeight: '700' },
  featMeta: { fontFamily: 'LibreBaskerville', fontSize: 11, fontStyle: 'italic' },
  removeBtn: { padding: 6 },
  removeText: { fontSize: 18, fontWeight: '700' },
  addBtn: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
  },
  addText: {
    fontFamily: 'Cinzel',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  emptyAssigned: { paddingVertical: 12, alignItems: 'center' },
  footer: {
    fontFamily: 'LibreBaskerville',
    fontSize: 11,
    fontStyle: 'italic',
    paddingHorizontal: 4,
  },
  emptyContainer: { padding: 32, alignItems: 'center' },
  emptyText: { fontFamily: 'LibreBaskerville', fontSize: 14, fontStyle: 'italic' },
});
