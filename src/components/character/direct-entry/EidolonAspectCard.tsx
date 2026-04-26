// EidolonAspectCard — Aspect / Greater Aspect sub-flow for Summoners.
//
// Appears inside the EidolonCard when the summoner class level reaches 10.
// Below L10, renders a collapsed placeholder showing when it unlocks.
//
// Rules (AoN-verified):
//   Aspect (L10):        divert 0–2 ep from eidolon to summoner, 1:1 exchange.
//   Greater Aspect (L18): divert 0–6 ep, 2:1 exchange (eidolon loses ceil(diverted/2)).
//
// The summoner's aspect evolutions are tracked on DraftEidolon.aspectTransfer so
// pool math in EidolonPoolService can deduct the eidolon-side cost correctly.

import React, { useMemo, useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { useAppDispatch } from '@/store/hooks';
import {
  setAspectDivert,
  addSummonerAspectEvolution,
  removeSummonerAspectEvolution,
} from '@/store/slices/characterEntrySlice';
import type { DraftEidolon, SelectedEvolution } from '@/types/eidolon';
import type { EidolonDataIndex } from '@/services/EidolonPoolService';
import { EidolonPoolService } from '@/services/EidolonPoolService';
import { EvolutionPickerSheet } from './EvolutionPickerSheet';

// ---- Constants ----

const ASPECT_UNLOCK_LEVEL = 10;
const ASPECT_MAX_DIVERTED = 2;
const GREATER_ASPECT_UNLOCK_LEVEL = 18;
const GREATER_ASPECT_MAX_DIVERTED = 6;

// ---- Props ----

interface EidolonAspectCardProps {
  eidolon: DraftEidolon;
  summonerLevel: number;
  dataIndex: EidolonDataIndex;
}

// ---- Component ----

export function EidolonAspectCard({ eidolon, summonerLevel, dataIndex }: EidolonAspectCardProps) {
  const { colors, fantasy, isDark } = useTheme();
  const dispatch = useAppDispatch();
  const [pickerOpen, setPickerOpen] = useState(false);

  const isGreaterAspect = summonerLevel >= GREATER_ASPECT_UNLOCK_LEVEL;
  const maxDiverted = isGreaterAspect ? GREATER_ASPECT_MAX_DIVERTED : ASPECT_MAX_DIVERTED;
  const title = isGreaterAspect ? 'Greater Aspect' : 'Aspect';
  const exchangeNote = isGreaterAspect
    ? '2:1 exchange — eidolon loses ⌈diverted / 2⌉ ep'
    : '1:1 exchange — eidolon loses every point diverted';

  const aspectTransfer = eidolon.aspectTransfer;
  const divertedPoints = aspectTransfer?.divertedPoints ?? 0;
  const summonerEvolutions: SelectedEvolution[] = aspectTransfer?.summonerEvolutions ?? [];

  const eidolonCost = EidolonPoolService.aspectCostToEidolon(divertedPoints, summonerLevel);

  const summonerSpent = useMemo(
    () => EidolonPoolService.totalEvolutionCost(summonerEvolutions, dataIndex),
    [summonerEvolutions, dataIndex],
  );

  const summonerRemaining = divertedPoints - summonerSpent;

  // Synthetic eidolon for EvolutionPickerSheet — represents the summoner's
  // Aspect "pool" so the picker's edition/baseForm gating is inherited.
  const syntheticEidolon = useMemo(
    () => ({
      ...eidolon,
      id: `${eidolon.id}__aspect`,
      selectedEvolutions: summonerEvolutions,
    }),
    [eidolon, summonerEvolutions],
  );

  function decrement() {
    const next = Math.max(0, divertedPoints - 1);
    dispatch(setAspectDivert({ eidolonId: eidolon.id, divertedPoints: next }));
  }

  function increment() {
    const next = Math.min(maxDiverted, divertedPoints + 1);
    dispatch(setAspectDivert({ eidolonId: eidolon.id, divertedPoints: next }));
  }

  if (summonerLevel < ASPECT_UNLOCK_LEVEL) {
    return (
      <View style={[styles.placeholder, { borderTopColor: colors.border.DEFAULT }]}>
        <Text style={[styles.placeholderText, { color: colors.text.tertiary }]}>
          {'Aspect unlocks at summoner level ' +
            ASPECT_UNLOCK_LEVEL +
            ' (currently L' +
            summonerLevel +
            ')'}
        </Text>
      </View>
    );
  }

  return (
    <View style={[styles.card, { borderTopColor: colors.border.DEFAULT }]}>
      {/* Header */}
      <Text style={[styles.title, { color: isDark ? fantasy.gold : fantasy.darkWood }]}>
        {title}
      </Text>

      <Text style={[styles.subtitle, { color: colors.text.tertiary }]}>
        {'Divert evolution points from ' + eidolon.name + ' to yourself.'}
      </Text>

      {/* Stepper */}
      <View style={styles.stepperRow}>
        <Text style={[styles.stepperLabel, { color: colors.text.secondary }]}>Diverted:</Text>
        <Pressable
          onPress={decrement}
          disabled={divertedPoints <= 0}
          style={[
            styles.stepperBtn,
            {
              borderColor: colors.border.DEFAULT,
              opacity: divertedPoints <= 0 ? 0.4 : 1,
            },
          ]}
          accessibilityRole="button"
          accessibilityLabel="Decrease diverted points"
          testID="aspect-decrement"
        >
          <Text style={[styles.stepperBtnText, { color: colors.text.primary }]}>−</Text>
        </Pressable>
        <Text style={[styles.stepperValue, { color: colors.text.primary }]} testID="aspect-value">
          {divertedPoints}
        </Text>
        <Pressable
          onPress={increment}
          disabled={divertedPoints >= maxDiverted}
          style={[
            styles.stepperBtn,
            {
              borderColor: colors.border.DEFAULT,
              opacity: divertedPoints >= maxDiverted ? 0.4 : 1,
            },
          ]}
          accessibilityRole="button"
          accessibilityLabel="Increase diverted points"
          testID="aspect-increment"
        >
          <Text style={[styles.stepperBtnText, { color: colors.text.primary }]}>+</Text>
        </Pressable>
        <Text style={[styles.stepperMax, { color: colors.text.tertiary }]}>
          {'of ' + maxDiverted + ' max'}
        </Text>
      </View>

      {/* Summoner evolution list */}
      {summonerEvolutions.length > 0 && (
        <View style={styles.summonerList}>
          <Text style={[styles.listLabel, { color: colors.text.secondary }]}>
            Summoner evolutions:
          </Text>
          {summonerEvolutions.map((sel) => {
            const def = dataIndex.evolutions.get(sel.evolutionId);
            const name = def?.name ?? sel.evolutionId;
            const cost = def?.evolutionPointCost ?? 0;
            return (
              <View
                key={sel.instanceId}
                style={[
                  styles.evoRow,
                  {
                    borderColor: colors.border.DEFAULT,
                    backgroundColor: isDark ? '#1A1F26' : '#FBF8F3',
                  },
                ]}
              >
                <Text style={[styles.evoName, { color: colors.text.primary }]}>{name}</Text>
                <Text style={[styles.evoCost, { color: colors.text.secondary }]}>
                  {cost + ' ep'}
                </Text>
                <Pressable
                  onPress={() =>
                    dispatch(
                      removeSummonerAspectEvolution({
                        eidolonId: eidolon.id,
                        instanceId: sel.instanceId,
                      }),
                    )
                  }
                  hitSlop={8}
                  accessibilityRole="button"
                  accessibilityLabel={'Remove summoner aspect evolution ' + name}
                  testID={'remove-aspect-evo-' + sel.instanceId}
                >
                  <Text style={[styles.removeIcon, { color: colors.text.tertiary }]}>✕</Text>
                </Pressable>
              </View>
            );
          })}
          {summonerRemaining < 0 && (
            <Text style={[styles.overBudget, { color: '#DC2626' }]}>
              {'⚠ Summoner evolutions exceed diverted points by ' +
                Math.abs(summonerRemaining) +
                ' ep'}
            </Text>
          )}
        </View>
      )}

      {/* Add evolution to summoner */}
      {divertedPoints > 0 && (
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
          accessibilityLabel="Add evolution to summoner"
          testID="aspect-add-evo-button"
        >
          <Text style={[styles.addButtonText, { color: colors.text.primary }]}>
            + Add Evolution to Summoner
          </Text>
        </Pressable>
      )}

      {/* Cost note */}
      <Text style={[styles.exchangeNote, { color: colors.text.tertiary }]}>
        {'Cost to eidolon: ' + eidolonCost + ' ep (' + exchangeNote + ')'}
      </Text>

      {isGreaterAspect && divertedPoints > 0 && (
        <Text style={[styles.exchangeNote, { color: colors.text.tertiary }]}>
          {'Greater Aspect: eidolon loses ' +
            eidolonCost +
            ' ep for ' +
            divertedPoints +
            ' ep diverted'}
        </Text>
      )}

      <EvolutionPickerSheet
        visible={pickerOpen}
        eidolon={syntheticEidolon}
        summonerLevel={summonerLevel}
        remainingPool={summonerRemaining}
        dataIndex={dataIndex}
        onEvolutionSelected={(evolutionId, metadata) => {
          dispatch(addSummonerAspectEvolution({ eidolonId: eidolon.id, evolutionId, metadata }));
          setPickerOpen(false);
        }}
        onClose={() => setPickerOpen(false)}
      />
    </View>
  );
}

// ---- Styles ----

const styles = StyleSheet.create({
  placeholder: {
    marginTop: 10,
    paddingTop: 8,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  placeholderText: {
    fontFamily: 'LibreBaskerville',
    fontSize: 11,
    fontStyle: 'italic',
  },
  card: {
    marginTop: 10,
    paddingTop: 8,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  title: {
    fontFamily: 'Cinzel',
    fontSize: 13,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  subtitle: {
    fontFamily: 'LibreBaskerville',
    fontSize: 11,
    marginBottom: 8,
  },
  stepperRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    gap: 8,
  },
  stepperLabel: {
    fontFamily: 'LibreBaskerville',
    fontSize: 12,
    marginRight: 4,
  },
  stepperBtn: {
    width: 28,
    height: 28,
    borderRadius: 6,
    borderWidth: StyleSheet.hairlineWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepperBtnText: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 20,
  },
  stepperValue: {
    fontFamily: 'Cinzel',
    fontSize: 16,
    fontWeight: '700',
    minWidth: 24,
    textAlign: 'center',
  },
  stepperMax: {
    fontFamily: 'LibreBaskerville',
    fontSize: 11,
    marginLeft: 4,
  },
  summonerList: {
    marginBottom: 8,
  },
  listLabel: {
    fontFamily: 'LibreBaskerville',
    fontSize: 11,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.3,
    marginBottom: 4,
  },
  evoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginVertical: 2,
    borderRadius: 6,
    borderWidth: StyleSheet.hairlineWidth,
  },
  evoName: {
    flex: 1,
    fontFamily: 'LibreBaskerville',
    fontSize: 13,
  },
  evoCost: {
    fontFamily: 'LibreBaskerville',
    fontSize: 12,
    marginHorizontal: 8,
  },
  removeIcon: {
    fontSize: 14,
  },
  overBudget: {
    fontFamily: 'LibreBaskerville',
    fontSize: 11,
    marginTop: 4,
  },
  addButton: {
    marginTop: 4,
    marginBottom: 6,
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
  exchangeNote: {
    fontFamily: 'LibreBaskerville',
    fontSize: 11,
    fontStyle: 'italic',
    marginTop: 2,
  },
});
