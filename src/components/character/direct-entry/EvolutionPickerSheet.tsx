// EvolutionPickerSheet — modal for selecting an eidolon evolution.
//
// Groups the candidate list by point cost (1-4). Each row shows the cost,
// prereq/gate status, and a brief description. Selecting an evolution that
// needs metadata (ability increase target, resistance energy type, etc.)
// transitions the sheet to a metadata-picker step before dispatching.

import React, { useMemo, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  Modal,
  FlatList,
  StyleSheet,
  Keyboard,
} from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { InlinePicker, type PickerOption } from '@/components/ui/InlinePicker';
import { useAppDispatch } from '@/store/hooks';
import { addSelectedEvolution } from '@/store/slices/characterEntrySlice';
import type { EidolonEvolutionEntry } from '@/types/classOptions';
import type {
  DraftEidolon,
  SelectedEvolutionMetadata,
  EvolutionAbilityKey,
  EvolutionEnergyType,
} from '@/types/eidolon';
import { EidolonPoolService, type EidolonDataIndex } from '@/services/EidolonPoolService';

// ---- Metadata picker options ----

const ABILITY_OPTIONS: PickerOption[] = [
  { label: '—— choose ability ——', value: '' },
  { label: 'Strength', value: 'str' },
  { label: 'Dexterity', value: 'dex' },
  { label: 'Constitution', value: 'con' },
  { label: 'Intelligence', value: 'int' },
  { label: 'Wisdom', value: 'wis' },
  { label: 'Charisma', value: 'cha' },
];

const ENERGY_OPTIONS: PickerOption[] = [
  { label: '—— choose energy type ——', value: '' },
  { label: 'Acid', value: 'acid' },
  { label: 'Cold', value: 'cold' },
  { label: 'Electricity', value: 'electricity' },
  { label: 'Fire', value: 'fire' },
  { label: 'Sonic', value: 'sonic' },
];

// ---- Props ----

interface EvolutionPickerSheetProps {
  visible: boolean;
  eidolon: DraftEidolon;
  summonerLevel: number;
  remainingPool: number;
  dataIndex: EidolonDataIndex;
  onClose: () => void;
  /** When set, only evolutions with these IDs appear in the list (e.g. Large/Huge for Broodmaster). */
  allowedEvolutionIds?: string[];
  /** When provided, called instead of dispatching addSelectedEvolution. Caller controls the action. */
  onEvolutionSelected?: (evolutionId: string, metadata?: SelectedEvolutionMetadata) => void;
}

// ---- Component ----

export function EvolutionPickerSheet({
  visible,
  eidolon,
  summonerLevel,
  remainingPool,
  dataIndex,
  onClose,
  allowedEvolutionIds,
  onEvolutionSelected,
}: EvolutionPickerSheetProps) {
  const { colors, fantasy, isDark } = useTheme();
  const dispatch = useAppDispatch();
  const [query, setQuery] = useState('');
  const [stepEvolution, setStepEvolution] = useState<EidolonEvolutionEntry | null>(null);
  const [metadataDraft, setMetadataDraft] = useState<SelectedEvolutionMetadata>({});

  const reset = () => {
    setQuery('');
    setStepEvolution(null);
    setMetadataDraft({});
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  const handleSelected = (evolutionId: string, metadata?: SelectedEvolutionMetadata) => {
    if (onEvolutionSelected) {
      onEvolutionSelected(evolutionId, metadata);
    } else {
      dispatch(
        addSelectedEvolution({
          eidolonId: eidolon.id,
          evolutionId,
          metadata,
        }),
      );
    }
    handleClose();
  };

  // Filter + score all evolutions against the current eidolon. Evolutions whose
  // edition / base form / subtype doesn't match are hidden; anything else is
  // rendered with its canSelectEvolution verdict as a subtitle.
  const groupedByCost = useMemo(() => {
    const all = Array.from(dataIndex.evolutions.values());
    const q = query.trim().toLowerCase();

    const visible = all.filter((evo) => {
      if (allowedEvolutionIds && !allowedEvolutionIds.includes(evo.id)) return false;
      // Hard filters: edition, base form, subtype — these block the evolution
      // from even appearing in the list.
      if (evo.summoner && evo.summoner !== eidolon.edition) return false;
      if (
        evo.formRestrictions &&
        evo.formRestrictions.length > 0 &&
        !evo.formRestrictions.includes(eidolon.baseForm)
      ) {
        return false;
      }
      if (
        evo.subtypeRestrictions &&
        evo.subtypeRestrictions.length > 0 &&
        (!eidolon.subtype || !evo.subtypeRestrictions.includes(eidolon.subtype))
      ) {
        return false;
      }
      if (q && !evo.name.toLowerCase().includes(q)) return false;
      return true;
    });

    visible.sort((a, b) => a.name.localeCompare(b.name));

    const byCost: Record<1 | 2 | 3 | 4, EidolonEvolutionEntry[]> = { 1: [], 2: [], 3: [], 4: [] };
    for (const e of visible) byCost[e.evolutionPointCost].push(e);
    return byCost;
  }, [dataIndex, eidolon.edition, eidolon.baseForm, eidolon.subtype, query, allowedEvolutionIds]);

  const commit = (metadata?: SelectedEvolutionMetadata) => {
    if (!stepEvolution) return;
    handleSelected(stepEvolution.id, metadata);
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      onRequestClose={handleClose}
      presentationStyle="pageSheet"
    >
      <View
        style={[
          styles.container,
          { backgroundColor: isDark ? colors.bg.primary : colors.bg.secondary },
        ]}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={[styles.title, { color: isDark ? fantasy.gold : fantasy.darkWood }]}>
            {stepEvolution ? stepEvolution.name : 'Add Evolution'}
          </Text>
          <Pressable
            onPress={handleClose}
            hitSlop={8}
            accessibilityRole="button"
            accessibilityLabel="Close"
          >
            <Text style={[styles.closeIcon, { color: colors.text.secondary }]}>✕</Text>
          </Pressable>
        </View>

        {/* Summary line */}
        <View style={styles.summary}>
          <Text style={[styles.summaryText, { color: colors.text.tertiary }]}>
            Remaining: {remainingPool} ep · Summoner level {summonerLevel}
          </Text>
        </View>

        {stepEvolution ? (
          <MetadataStep
            evolution={stepEvolution}
            metadata={metadataDraft}
            onChange={setMetadataDraft}
            onConfirm={() => commit(metadataDraft)}
            onBack={() => {
              setStepEvolution(null);
              setMetadataDraft({});
            }}
          />
        ) : (
          <>
            <TextInput
              value={query}
              onChangeText={setQuery}
              placeholder="Search evolutions…"
              placeholderTextColor={colors.text.tertiary}
              style={[
                styles.search,
                {
                  color: colors.text.primary,
                  borderColor: colors.border.DEFAULT,
                  backgroundColor: isDark ? colors.bg.tertiary : colors.bg.primary,
                },
              ]}
            />
            <FlatList
              data={[1, 2, 3, 4] as const}
              keyExtractor={(c) => `cost-${c}`}
              keyboardShouldPersistTaps="always"
              onScrollBeginDrag={Keyboard.dismiss}
              testID="evolution-list"
              renderItem={({ item: cost }) => {
                const list = groupedByCost[cost];
                if (list.length === 0) return null;
                return (
                  <View style={styles.costGroup}>
                    <Text style={[styles.costHeader, { color: colors.text.secondary }]}>
                      {cost} Point{cost === 1 ? '' : 's'}
                    </Text>
                    {list.map((evo) => (
                      <EvolutionRow
                        key={evo.id}
                        evolution={evo}
                        eidolon={eidolon}
                        summonerLevel={summonerLevel}
                        remainingPool={remainingPool}
                        dataIndex={dataIndex}
                        onSelect={() => {
                          if (needsMetadata(evo)) {
                            setStepEvolution(evo);
                          } else {
                            handleSelected(evo.id);
                          }
                        }}
                      />
                    ))}
                  </View>
                );
              }}
              contentContainerStyle={styles.listContent}
            />
          </>
        )}
      </View>
    </Modal>
  );
}

// ---- Individual row ----

export function EvolutionRow({
  evolution,
  eidolon,
  summonerLevel,
  remainingPool,
  dataIndex,
  onSelect,
}: {
  evolution: EidolonEvolutionEntry;
  eidolon: DraftEidolon;
  summonerLevel: number;
  remainingPool: number;
  dataIndex: EidolonDataIndex;
  onSelect: () => void;
}) {
  const { colors, isDark } = useTheme();

  // Check without metadata first — if metadata is required, we defer the
  // detailed check to the MetadataStep. However, budget exhaustion is
  // independent of metadata: if the pool can't cover the cost, the row is
  // always disabled regardless of whether metadata is needed.
  const result = EidolonPoolService.canSelectEvolution(
    evolution.id,
    eidolon,
    summonerLevel,
    remainingPool,
    dataIndex,
  );
  const budgetInsufficient = evolution.evolutionPointCost > remainingPool;
  const disabled = !result.allowed && (!needsMetadata(evolution) || budgetInsufficient);

  return (
    <Pressable
      onPress={disabled ? undefined : onSelect}
      style={[
        styles.row,
        {
          borderColor: colors.border.DEFAULT,
          backgroundColor: isDark ? colors.bg.tertiary : colors.bg.primary,
          opacity: disabled ? 0.5 : 1,
        },
      ]}
      accessibilityRole="button"
      accessibilityState={{ disabled }}
      accessibilityLabel={`Add ${evolution.name}, ${evolution.evolutionPointCost} points`}
    >
      <View style={{ flex: 1 }}>
        <Text style={[styles.rowName, { color: colors.text.primary }]}>{evolution.name}</Text>
        {evolution.description && (
          <Text style={[styles.rowDescription, { color: colors.text.tertiary }]} numberOfLines={2}>
            {evolution.description}
          </Text>
        )}
        {!result.allowed && (
          <Text style={[styles.rowWarning, { color: '#F59E0B' }]}>⚠ {result.reason}</Text>
        )}
      </View>
      <Text style={[styles.rowCost, { color: colors.text.secondary }]}>
        {evolution.evolutionPointCost} ep
      </Text>
    </Pressable>
  );
}

// ---- Metadata step ----

export function MetadataStep({
  evolution,
  metadata,
  onChange,
  onConfirm,
  onBack,
}: {
  evolution: EidolonEvolutionEntry;
  metadata: SelectedEvolutionMetadata;
  onChange: (m: SelectedEvolutionMetadata) => void;
  onConfirm: () => void;
  onBack: () => void;
}) {
  const { colors, fantasy, isDark } = useTheme();
  const kind = evolution.stacking.requiresDifferentMetadata;
  const isAbilityIncrease = evolution.id === 'evolution-ability-increase';

  const canConfirm = Boolean(
    (isAbilityIncrease && metadata.ability) ||
    (kind === 'ability' && metadata.ability) ||
    (kind === 'energy' && metadata.energyType) ||
    (['attack', 'skill', 'spell', 'feat', 'slot', 'limbPair', 'tail'].includes(kind ?? '') &&
      metadata.notes),
  );

  return (
    <View style={styles.metadataStep}>
      <Text style={[styles.metadataDescription, { color: colors.text.secondary }]}>
        {evolution.description}
      </Text>

      <View style={styles.metadataField}>
        {(isAbilityIncrease || kind === 'ability') && (
          <View style={styles.metadataRow}>
            <Text style={[styles.metadataLabel, { color: colors.text.secondary }]}>Ability</Text>
            <InlinePicker
              value={metadata.ability ?? ''}
              options={ABILITY_OPTIONS}
              onValueChange={(v) =>
                onChange({
                  ...metadata,
                  ability: (v || undefined) as EvolutionAbilityKey | undefined,
                })
              }
              style={styles.metadataPicker}
            />
          </View>
        )}

        {kind === 'energy' && (
          <View style={styles.metadataRow}>
            <Text style={[styles.metadataLabel, { color: colors.text.secondary }]}>
              Energy type
            </Text>
            <InlinePicker
              value={metadata.energyType ?? ''}
              options={ENERGY_OPTIONS}
              onValueChange={(v) =>
                onChange({
                  ...metadata,
                  energyType: (v || undefined) as EvolutionEnergyType | undefined,
                })
              }
              style={styles.metadataPicker}
            />
          </View>
        )}

        {(kind === 'attack' ||
          kind === 'skill' ||
          kind === 'spell' ||
          kind === 'feat' ||
          kind === 'slot' ||
          kind === 'limbPair' ||
          kind === 'tail') && (
          <View style={styles.metadataRow}>
            <Text style={[styles.metadataLabel, { color: colors.text.secondary }]}>
              {labelForKind(kind)}
            </Text>
            <TextInput
              value={metadata.notes ?? ''}
              onChangeText={(t) => onChange({ ...metadata, notes: t })}
              placeholder={placeholderForKind(kind)}
              placeholderTextColor={colors.text.tertiary}
              style={[
                styles.metadataInput,
                {
                  color: colors.text.primary,
                  borderColor: colors.border.DEFAULT,
                  backgroundColor: isDark ? colors.bg.tertiary : colors.bg.primary,
                },
              ]}
            />
          </View>
        )}
      </View>

      <View style={styles.metadataActions}>
        <Pressable
          onPress={onBack}
          style={[
            styles.metadataButton,
            {
              borderColor: colors.border.DEFAULT,
              backgroundColor: isDark ? colors.bg.secondary : colors.bg.primary,
            },
          ]}
          accessibilityRole="button"
          accessibilityLabel="Back"
        >
          <Text style={[styles.metadataButtonText, { color: colors.text.secondary }]}>Back</Text>
        </Pressable>
        <Pressable
          onPress={canConfirm ? onConfirm : undefined}
          style={[
            styles.metadataButton,
            styles.metadataPrimary,
            {
              borderColor: fantasy.gold,
              backgroundColor: canConfirm ? fantasy.gold : colors.border.DEFAULT,
              opacity: canConfirm ? 1 : 0.5,
            },
          ]}
          accessibilityRole="button"
          accessibilityState={{ disabled: !canConfirm }}
          accessibilityLabel="Add evolution"
        >
          <Text style={[styles.metadataButtonText, { color: colors.text.primary }]}>Add</Text>
        </Pressable>
      </View>
    </View>
  );
}

// ---- Helpers ----

export function needsMetadata(evolution: EidolonEvolutionEntry): boolean {
  if (evolution.id === 'evolution-ability-increase') return true;
  return Boolean(evolution.stacking.requiresDifferentMetadata);
}

export function labelForKind(kind: string): string {
  switch (kind) {
    case 'attack':
      return 'Attack';
    case 'skill':
      return 'Skill';
    case 'spell':
      return 'Spell';
    case 'feat':
      return 'Feat';
    case 'slot':
      return 'Item slot';
    case 'limbPair':
      return 'Limb pair';
    case 'tail':
      return 'Tail';
    default:
      return 'Option';
  }
}

export function placeholderForKind(kind: string): string {
  switch (kind) {
    case 'attack':
      return 'e.g. bite, claws, slam';
    case 'skill':
      return 'e.g. stealth';
    case 'spell':
      return 'e.g. magic-missile';
    case 'feat':
      return 'e.g. improved-grapple';
    case 'slot':
      return 'e.g. neck, belt';
    case 'limbPair':
      return 'arms or legs';
    case 'tail':
      return 'which tail (if more than one)';
    default:
      return '';
  }
}

// ---- Styles ----

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(128,128,128,0.2)',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
  },
  closeIcon: {
    fontSize: 20,
  },
  summary: {
    paddingHorizontal: 16,
    paddingVertical: 6,
  },
  summaryText: {
    fontSize: 12,
  },
  search: {
    marginHorizontal: 16,
    marginVertical: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 6,
    fontSize: 14,
  },
  listContent: {
    padding: 16,
  },
  costGroup: {
    marginBottom: 12,
  },
  costHeader: {
    fontSize: 11,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 6,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginVertical: 3,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 6,
  },
  rowName: {
    fontSize: 14,
    fontWeight: '600',
  },
  rowDescription: {
    fontSize: 11,
    marginTop: 2,
    lineHeight: 14,
  },
  rowWarning: {
    fontSize: 11,
    marginTop: 2,
  },
  rowCost: {
    fontSize: 12,
    marginLeft: 8,
  },
  metadataStep: {
    padding: 16,
  },
  metadataDescription: {
    fontSize: 13,
    lineHeight: 18,
    marginBottom: 16,
  },
  metadataField: {
    marginBottom: 16,
  },
  metadataRow: {
    marginBottom: 12,
  },
  metadataLabel: {
    fontSize: 12,
    marginBottom: 4,
  },
  metadataPicker: {
    width: '100%',
  },
  metadataInput: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 6,
    fontSize: 14,
  },
  metadataActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 8,
  },
  metadataButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
    borderWidth: StyleSheet.hairlineWidth,
  },
  metadataPrimary: {},
  metadataButtonText: {
    fontSize: 14,
    fontWeight: '600',
  },
});
