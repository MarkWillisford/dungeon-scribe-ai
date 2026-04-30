// BroodmasterPoolCard — shows the shared pre-split evolution pool for a
// Broodmaster summoner. Renders above the individual eidolon cards.
//
// Broodmaster rules (AoN-verified):
//   - At L8+, the summoner may pre-spend 4 ep on a Large evolution for all
//     brood members before the pool is split.
//   - At L13+, may instead spend 6 ep on the Huge size variant of that same
//     Large evolution. Huge is a cost variant — there is no separate data entry
//     for 'evolution-huge'; only 'evolution-large' exists in the catalog.
//   - The remaining pool is then divided equally (floor) among brood members;
//     the first member receives any leftover point.
//
// This component does NOT manage the per-eidolon pools — those remain on the
// individual EidolonCard instances. It manages only the shared pre-split slot.

import React, { useMemo, useState } from 'react';
import { View, Text, Pressable, StyleSheet, Alert } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  setBroodmasterShared,
  removeBroodmasterShared,
  addEidolon,
} from '@/store/slices/characterEntrySlice';
import type { ClassEntry } from '@/types/classes';
import type { EidolonEdition, EidolonForm, SelectedEvolution } from '@/types/eidolon';
import type { EidolonDataIndex } from '@/services/EidolonPoolService';
import { EidolonPoolService } from '@/services/EidolonPoolService';
import { EvolutionPickerSheet } from './EvolutionPickerSheet';

// The evolution a Broodmaster can share before the split.
// Note: Huge size is a cost variant of Large (6 ep at L13+), not a separate
// evolution ID in the data. Only 'evolution-large' exists as a data entry.
const SHARED_EVOLUTION_IDS = ['evolution-large'];

interface BroodmasterPoolCardProps {
  classEntry: ClassEntry;
  edition: EidolonEdition;
  dataIndex: EidolonDataIndex;
}

export function BroodmasterPoolCard({ classEntry, edition, dataIndex }: BroodmasterPoolCardProps) {
  const { colors, fantasy, isDark } = useTheme();
  const dispatch = useAppDispatch();
  const [pickerOpen, setPickerOpen] = useState(false);

  const character = useAppSelector((s) => s.characterEntry.character);
  const broodEidolons = character.eidolons.filter((e) => e.summonerClassEntryId === classEntry.id);
  const broodSize = broodEidolons.length;

  const sharedEvolutions: SelectedEvolution[] = useMemo(
    () => classEntry.summonerBroodmaster?.sharedEvolutions ?? [],
    [classEntry.summonerBroodmaster?.sharedEvolutions],
  );

  const sharedCost = useMemo(
    () => EidolonPoolService.totalEvolutionCost(sharedEvolutions, dataIndex),
    [sharedEvolutions, dataIndex],
  );

  // Compute the full pre-split pool for display. We use the first brood member's
  // breakdown (or a synthetic one) to get the total before sharing.
  const summonerLevel = classEntry.level;
  const preSplitTotal = useMemo(() => {
    if (broodEidolons.length === 0) return 0;
    const b = EidolonPoolService.computePool(character, broodEidolons[0].id, dataIndex);
    // Undo the broodmasterShare delta to recover the pre-split pool.
    return b.total - b.sources.broodmasterShare;
  }, [character, broodEidolons, dataIndex]);

  const poolAfterShared = preSplitTotal - sharedCost;
  const perMemberShare = broodSize > 0 ? Math.floor(poolAfterShared / broodSize) : poolAfterShared;

  // A synthetic "eidolon" stub used to feed EvolutionPickerSheet.
  // We limit the picker to Large/Huge only via a filter in the picker.
  const syntheticEidolon = useMemo(
    () => ({
      id: '__brood-shared__',
      name: 'Broodmaster Shared',
      summonerClassEntryId: classEntry.id,
      edition,
      baseForm: 'quadruped' as EidolonForm,
      selectedEvolutions: sharedEvolutions,
    }),
    [classEntry.id, edition, sharedEvolutions],
  );

  // Remaining budget for shared evolutions.
  const sharedRemaining = preSplitTotal - sharedCost;

  // Huge is a cost variant of Large (6 ep), not a separate evolution ID.
  // The only gate is L8+ with at least 4 ep available.
  const canAddShared = sharedEvolutions.length === 0 && summonerLevel >= 8 && preSplitTotal >= 4;

  function handleAddBroodMember() {
    dispatch(
      addEidolon({
        classEntryId: classEntry.id ?? '',
        edition,
        baseForm: 'biped',
      }),
    );
  }

  function handleRemoveShared(instanceId: string, name: string) {
    Alert.alert('Remove shared evolution?', `Remove "${name}" from the shared brood pool?`, [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Remove',
        style: 'destructive',
        onPress: () =>
          dispatch(removeBroodmasterShared({ classEntryId: classEntry.id ?? '', instanceId })),
      },
    ]);
  }

  return (
    <View
      style={[
        styles.card,
        {
          borderColor: fantasy.gold,
          backgroundColor: isDark ? colors.bg.tertiary : colors.bg.secondary,
        },
      ]}
    >
      <Text style={[styles.heading, { color: isDark ? fantasy.gold : fantasy.darkWood }]}>
        Brood Pool
      </Text>

      <Text style={[styles.line, { color: colors.text.secondary }]}>
        Shared budget before split:{' '}
        <Text style={{ color: colors.text.primary, fontWeight: '700' }}>{preSplitTotal}</Text> ep
      </Text>

      {/* Shared evolutions */}
      {sharedEvolutions.length > 0 ? (
        <View style={styles.sharedList}>
          <Text style={[styles.label, { color: colors.text.tertiary }]}>Shared (pre-split):</Text>
          {sharedEvolutions.map((sel) => {
            const def = dataIndex.evolutions.get(sel.evolutionId);
            const name = def?.name ?? sel.evolutionId;
            const cost = def?.evolutionPointCost ?? 0;
            return (
              <View
                key={sel.instanceId}
                style={[
                  styles.sharedRow,
                  {
                    borderColor: colors.border.DEFAULT,
                    backgroundColor: isDark ? colors.bg.secondary : colors.bg.primary,
                  },
                ]}
              >
                <Text style={[styles.sharedName, { color: colors.text.primary }]}>{name}</Text>
                <Text style={[styles.sharedCost, { color: colors.text.secondary }]}>{cost} ep</Text>
                <Pressable
                  onPress={() => handleRemoveShared(sel.instanceId, name)}
                  hitSlop={8}
                  accessibilityRole="button"
                  accessibilityLabel={`Remove shared ${name}`}
                  testID={`remove-brood-shared-${sel.instanceId}`}
                >
                  <Text style={[styles.removeIcon, { color: colors.text.tertiary }]}>✕</Text>
                </Pressable>
              </View>
            );
          })}
        </View>
      ) : (
        <Text style={[styles.emptyShared, { color: colors.text.tertiary }]}>
          {summonerLevel < 8
            ? 'Shared evolution available at L8 (Large, 4 ep)'
            : 'No shared evolution selected'}
        </Text>
      )}

      {canAddShared && (
        <Pressable
          onPress={() => setPickerOpen(true)}
          style={[
            styles.addButton,
            {
              borderColor: colors.border.DEFAULT,
              backgroundColor: isDark ? colors.bg.secondary : colors.bg.primary,
            },
          ]}
          accessibilityRole="button"
          accessibilityLabel="Add shared evolution"
          testID="add-brood-shared-button"
        >
          <Text style={[styles.addButtonText, { color: colors.text.primary }]}>
            + Add Shared Evolution
          </Text>
        </Pressable>
      )}

      {/* Split summary */}
      {broodSize > 0 && (
        <Text style={[styles.splitSummary, { color: colors.text.secondary }]}>
          After shared: <Text style={{ color: colors.text.primary }}>{poolAfterShared}</Text> ep
          split across <Text style={{ color: colors.text.primary }}>{broodSize}</Text>{' '}
          {broodSize === 1 ? 'member' : 'members'} (
          <Text style={{ color: colors.text.primary }}>{perMemberShare}</Text> ep each
          {poolAfterShared % broodSize > 0 ? '; +1 to first' : ''})
        </Text>
      )}

      {/* Add brood member button */}
      <Pressable
        onPress={handleAddBroodMember}
        style={[
          styles.addButton,
          {
            borderColor: colors.border.DEFAULT,
            backgroundColor: isDark ? colors.bg.secondary : colors.bg.primary,
          },
        ]}
        accessibilityRole="button"
        accessibilityLabel="Add brood member"
        testID="add-brood-member-button"
      >
        <Text style={[styles.addButtonText, { color: colors.text.primary }]}>
          + Add Brood Member
        </Text>
      </Pressable>

      {/* Shared evolution picker — constrained to Large / Huge */}
      <EvolutionPickerSheet
        visible={pickerOpen}
        eidolon={syntheticEidolon as Parameters<typeof EvolutionPickerSheet>[0]['eidolon']}
        summonerLevel={summonerLevel}
        remainingPool={sharedRemaining}
        dataIndex={dataIndex}
        allowedEvolutionIds={SHARED_EVOLUTION_IDS}
        onEvolutionSelected={(evolutionId, metadata) => {
          dispatch(setBroodmasterShared({ classEntryId: classEntry.id ?? '', evolutionId, metadata }));
          setPickerOpen(false);
        }}
        onClose={() => setPickerOpen(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 10,
  },
  heading: {
    fontFamily: 'Cinzel',
    fontSize: 13,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 8,
  },
  line: {
    fontFamily: 'LibreBaskerville',
    fontSize: 12,
    marginBottom: 6,
  },
  label: {
    fontFamily: 'LibreBaskerville',
    fontSize: 11,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.3,
    marginBottom: 4,
  },
  sharedList: {
    marginBottom: 6,
  },
  sharedRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginVertical: 2,
    borderRadius: 6,
    borderWidth: StyleSheet.hairlineWidth,
  },
  sharedName: {
    flex: 1,
    fontFamily: 'LibreBaskerville',
    fontSize: 13,
  },
  sharedCost: {
    fontFamily: 'LibreBaskerville',
    fontSize: 12,
    marginHorizontal: 8,
  },
  removeIcon: {
    fontSize: 14,
  },
  emptyShared: {
    fontFamily: 'LibreBaskerville',
    fontSize: 12,
    fontStyle: 'italic',
    marginBottom: 6,
  },
  splitSummary: {
    fontFamily: 'LibreBaskerville',
    fontSize: 12,
    marginTop: 6,
    marginBottom: 4,
  },
  addButton: {
    marginTop: 8,
    padding: 8,
    borderRadius: 6,
    borderWidth: StyleSheet.hairlineWidth,
    alignItems: 'center',
  },
  addButtonText: {
    fontFamily: 'LibreBaskerville',
    fontSize: 13,
    fontWeight: '600',
  },
});
