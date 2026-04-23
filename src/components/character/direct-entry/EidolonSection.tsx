// EidolonSection — the eidolon sub-sheet rendered inside ClassEntryCard for
// Summoner class entries. Handles the single-eidolon case (Broodmaster multi-
// eidolon flow lands in Phase 5).
//
// Visual layout:
//   1. Name + remove button row
//   2. Base form picker
//   3. Subtype picker (Unchained only)
//   4. Pool breakdown (total, spent, remaining, sources)
//   5. Selected evolutions list
//   6. Free evolutions list (read-only)
//   7. Add Evolution button → EvolutionPickerSheet

import React, { useMemo, useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Alert } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { InlinePicker, type PickerOption } from '@/components/ui/InlinePicker';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  addEidolon,
  removeEidolon,
  renameEidolon,
  setEidolonBaseForm,
  setEidolonSubtype,
  removeSelectedEvolution,
} from '@/store/slices/characterEntrySlice';
import type { CharacterDraft, DraftClassEntry } from '@/types/characterDraft';
import type {
  DraftEidolon,
  EidolonEdition,
  EidolonForm,
  EidolonSubtype,
  SelectedEvolution,
} from '@/types/eidolon';
import { EidolonPoolService, type EidolonDataIndex } from '@/services/EidolonPoolService';
import { ALL_EIDOLON_BASE_FORMS } from '@/data/eidolonBaseForms/index';
import { ALL_EIDOLON_SUBTYPES } from '@/data/eidolonSubtypes/index';
import { EvolutionPickerSheet } from './EvolutionPickerSheet';

// ---- Helpers ----

/**
 * Best-effort detection of which Summoner edition a class entry is using.
 * Distinguishes "Summoner (Unchained)" from plain "Summoner". Defaults to APG.
 */
function summonerEditionFromClassName(className: string): EidolonEdition {
  return /unchained/i.test(className) ? 'unchained' : 'apg';
}

function baseFormOptions(edition: EidolonEdition): PickerOption[] {
  return ALL_EIDOLON_BASE_FORMS.filter((f) => f.edition === 'both' || f.edition === edition).map(
    (f) => ({
      label: f.legacyBaseForm ? `${f.name} (supplemental)` : f.name,
      value: f.id,
    }),
  );
}

function subtypeOptions(currentBaseForm: EidolonForm): PickerOption[] {
  const opts: PickerOption[] = [{ label: '—— pick one ——', value: '' }];
  for (const st of ALL_EIDOLON_SUBTYPES) {
    if (st.requiredBaseForms.length > 0 && !st.requiredBaseForms.includes(currentBaseForm))
      continue;
    opts.push({ label: st.name, value: st.id });
  }
  return opts;
}

// ---- Component ----

interface EidolonSectionProps {
  classEntry: DraftClassEntry;
}

export function EidolonSection({ classEntry }: EidolonSectionProps) {
  const { colors, fantasy, isDark } = useTheme();
  const dispatch = useAppDispatch();
  const eidolons = useAppSelector((state) =>
    state.characterEntry.draft.eidolons.filter((e) => e.summonerClassEntryId === classEntry.id),
  );
  const draft = useAppSelector((state) => state.characterEntry.draft);

  // EidolonDataIndex is built once and reused across renders within this section.
  const dataIndex: EidolonDataIndex = useMemo(
    () => EidolonPoolService.buildIndexFromStaticData(),
    [],
  );

  const edition = summonerEditionFromClassName(classEntry.className);

  // ── No eidolons yet — show "Create Eidolon" ──
  if (eidolons.length === 0) {
    return (
      <View style={[styles.section, { borderTopColor: colors.border.DEFAULT }]}>
        <Text style={[styles.sectionTitle, { color: isDark ? fantasy.gold : fantasy.darkWood }]}>
          Eidolon
        </Text>
        <Pressable
          onPress={() =>
            dispatch(
              addEidolon({
                classEntryId: classEntry.id,
                edition,
                baseForm: 'biped',
                subtype: edition === 'unchained' ? 'angel' : undefined,
              }),
            )
          }
          style={[
            styles.addEidolonButton,
            {
              borderColor: colors.border.DEFAULT,
              backgroundColor: isDark ? colors.bg.tertiary : colors.bg.secondary,
            },
          ]}
          accessibilityRole="button"
          accessibilityLabel="Create eidolon"
        >
          <Text style={[styles.addEidolonText, { color: colors.text.primary }]}>
            + Create Eidolon
          </Text>
          <Text style={[styles.addEidolonHint, { color: colors.text.tertiary }]}>
            {edition === 'unchained' ? 'Unchained Summoner' : 'APG Summoner'} — biped, Medium
          </Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={[styles.section, { borderTopColor: colors.border.DEFAULT }]}>
      <Text style={[styles.sectionTitle, { color: isDark ? fantasy.gold : fantasy.darkWood }]}>
        Eidolon
      </Text>
      {eidolons.map((eidolon) => (
        <EidolonCard
          key={eidolon.id}
          eidolon={eidolon}
          edition={edition}
          summonerLevel={classEntry.level}
          draft={draft}
          dataIndex={dataIndex}
        />
      ))}
    </View>
  );
}

// ---- Single eidolon card ----

interface EidolonCardProps {
  eidolon: DraftEidolon;
  edition: EidolonEdition;
  summonerLevel: number;
  draft: CharacterDraft;
  dataIndex: EidolonDataIndex;
}

function EidolonCard({ eidolon, edition, summonerLevel, draft, dataIndex }: EidolonCardProps) {
  const { colors, fantasy, isDark } = useTheme();
  const dispatch = useAppDispatch();
  const [pickerOpen, setPickerOpen] = useState(false);

  const breakdown = useMemo(
    () => EidolonPoolService.computePool(draft, eidolon.id, dataIndex),
    [draft, eidolon.id, dataIndex],
  );

  const handleRemoveEidolon = () => {
    Alert.alert(
      'Remove Eidolon',
      `Remove ${eidolon.name}? This will clear all ${eidolon.selectedEvolutions.length} selected evolution${
        eidolon.selectedEvolutions.length === 1 ? '' : 's'
      }.`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Remove',
          style: 'destructive',
          onPress: () => dispatch(removeEidolon(eidolon.id)),
        },
      ],
    );
  };

  return (
    <View
      style={[
        styles.card,
        {
          borderColor: colors.border.DEFAULT,
          backgroundColor: isDark ? colors.bg.tertiary : colors.bg.secondary,
        },
      ]}
    >
      {/* Header: name + remove */}
      <View style={styles.cardHeader}>
        <TextInput
          value={eidolon.name}
          onChangeText={(t) => dispatch(renameEidolon({ eidolonId: eidolon.id, name: t }))}
          style={[
            styles.nameInput,
            { color: colors.text.primary, borderBottomColor: colors.border.DEFAULT },
          ]}
          placeholder="Eidolon name"
          placeholderTextColor={colors.text.tertiary}
          accessibilityLabel="Eidolon name"
        />
        <Pressable
          onPress={handleRemoveEidolon}
          hitSlop={8}
          accessibilityRole="button"
          accessibilityLabel="Remove eidolon"
        >
          <Text style={[styles.removeIcon, { color: colors.text.tertiary }]}>✕</Text>
        </Pressable>
      </View>

      {/* Base form */}
      <View style={styles.row}>
        <Text style={[styles.fieldLabel, { color: colors.text.secondary }]}>Base form</Text>
        <InlinePicker
          value={eidolon.baseForm}
          options={baseFormOptions(edition)}
          onValueChange={(v) =>
            dispatch(setEidolonBaseForm({ eidolonId: eidolon.id, baseForm: v as EidolonForm }))
          }
          style={styles.picker}
          testID={`eidolon-base-form-${eidolon.id}`}
        />
      </View>

      {/* Subtype (UC only) */}
      {edition === 'unchained' && (
        <View style={styles.row}>
          <Text style={[styles.fieldLabel, { color: colors.text.secondary }]}>Subtype</Text>
          <InlinePicker
            value={eidolon.subtype ?? ''}
            options={subtypeOptions(eidolon.baseForm)}
            onValueChange={(v) =>
              dispatch(
                setEidolonSubtype({
                  eidolonId: eidolon.id,
                  subtype: (v || undefined) as EidolonSubtype | undefined,
                }),
              )
            }
            style={styles.picker}
            testID={`eidolon-subtype-${eidolon.id}`}
          />
        </View>
      )}

      {/* Pool breakdown */}
      <View style={styles.poolSummary}>
        <Text style={[styles.poolSummaryLine, { color: colors.text.primary }]}>
          Pool: <Text style={{ color: fantasy.gold, fontWeight: '700' }}>{breakdown.total}</Text>{' '}
          total, {breakdown.spent} spent,{' '}
          <Text
            style={{
              color: breakdown.remaining < 0 ? '#DC2626' : colors.text.primary,
              fontWeight: '700',
            }}
          >
            {breakdown.remaining}
          </Text>{' '}
          remaining
        </Text>
        <PoolBreakdownLines breakdown={breakdown} summonerLevel={summonerLevel} />
        {breakdown.warnings.length > 0 && (
          <View style={styles.warningsList}>
            {breakdown.warnings.map((msg, i) => (
              <Text key={i} style={[styles.warningText, { color: '#F59E0B' }]}>
                ⚠ {msg}
              </Text>
            ))}
          </View>
        )}
      </View>

      {/* Free evolutions */}
      <FreeEvolutionsList eidolon={eidolon} summonerLevel={summonerLevel} dataIndex={dataIndex} />

      {/* Selected evolutions */}
      <SelectedEvolutionsList eidolon={eidolon} dataIndex={dataIndex} />

      {/* Add evolution button */}
      <Pressable
        onPress={() => setPickerOpen(true)}
        style={[
          styles.addEvolutionButton,
          {
            borderColor: colors.border.DEFAULT,
            backgroundColor: isDark ? colors.bg.secondary : colors.bg.primary,
          },
        ]}
        accessibilityRole="button"
        accessibilityLabel="Add evolution"
      >
        <Text style={[styles.addEvolutionText, { color: colors.text.primary }]}>
          + Add Evolution
        </Text>
      </Pressable>

      <EvolutionPickerSheet
        visible={pickerOpen}
        eidolon={eidolon}
        summonerLevel={summonerLevel}
        remainingPool={breakdown.remaining}
        dataIndex={dataIndex}
        onClose={() => setPickerOpen(false)}
      />
    </View>
  );
}

// ---- Pool breakdown lines ----

function PoolBreakdownLines({
  breakdown,
  summonerLevel,
}: {
  breakdown: ReturnType<typeof EidolonPoolService.computePool>;
  summonerLevel: number;
}) {
  const { colors } = useTheme();
  const { sources } = breakdown;

  const lines: string[] = [`├ Base (L${summonerLevel}):   ${sources.base}`];
  if (sources.extraEvolutionFeats > 0) {
    lines.push(`├ Extra Evol feats: +${sources.extraEvolutionFeats}`);
  }
  if (sources.subtypeGrants > 0) {
    lines.push(`├ Subtype bonus:    +${sources.subtypeGrants}`);
  }
  if (sources.archetypeModifier !== 0) {
    const sign = sources.archetypeModifier > 0 ? '+' : '';
    lines.push(`├ Archetype:        ${sign}${sources.archetypeModifier}`);
  }
  if (sources.broodmasterShare !== 0) {
    lines.push(`├ Brood split:      ${sources.broodmasterShare}`);
  }
  if (sources.override !== 0) {
    lines.push(`├ GM override:      ${sources.override} (replaces calculated)`);
  }
  if (breakdown.transferredToSummoner !== 0) {
    lines.push(`└ To summoner:      -${breakdown.transferredToSummoner}`);
  }

  return (
    <View style={styles.breakdownLines}>
      {lines.map((line, i) => (
        <Text
          key={i}
          style={[styles.breakdownLine, { color: colors.text.tertiary, fontFamily: 'monospace' }]}
        >
          {line}
        </Text>
      ))}
    </View>
  );
}

// ---- Selected evolutions list ----

function SelectedEvolutionsList({
  eidolon,
  dataIndex,
}: {
  eidolon: DraftEidolon;
  dataIndex: EidolonDataIndex;
}) {
  const { colors, isDark } = useTheme();
  const dispatch = useAppDispatch();

  if (eidolon.selectedEvolutions.length === 0) {
    return (
      <View style={styles.emptySelectedList}>
        <Text style={[styles.emptyText, { color: colors.text.tertiary }]}>
          No evolutions selected.
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.selectedList}>
      <Text style={[styles.listLabel, { color: colors.text.secondary }]}>Selected Evolutions</Text>
      {eidolon.selectedEvolutions.map((sel) => (
        <SelectedEvolutionRow
          key={sel.instanceId}
          eidolonId={eidolon.id}
          selection={sel}
          dataIndex={dataIndex}
          onRemove={() =>
            dispatch(removeSelectedEvolution({ eidolonId: eidolon.id, instanceId: sel.instanceId }))
          }
          isDark={isDark}
        />
      ))}
    </View>
  );
}

function SelectedEvolutionRow({
  selection,
  dataIndex,
  onRemove,
  isDark,
}: {
  eidolonId: string;
  selection: SelectedEvolution;
  dataIndex: EidolonDataIndex;
  onRemove: () => void;
  isDark: boolean;
}) {
  const { colors } = useTheme();
  const def = dataIndex.evolutions.get(selection.evolutionId);
  const name = def?.name ?? selection.evolutionId;
  const cost = def?.evolutionPointCost ?? 0;
  const metadataLabel = formatMetadataLabel(selection);

  return (
    <View
      style={[
        styles.selectedRow,
        { borderColor: colors.border.DEFAULT, backgroundColor: isDark ? '#1A1F26' : '#FBF8F3' },
      ]}
    >
      <View style={{ flex: 1 }}>
        <Text style={[styles.selectedName, { color: colors.text.primary }]}>{name}</Text>
        {metadataLabel && (
          <Text style={[styles.selectedMetadata, { color: colors.text.tertiary }]}>
            {metadataLabel}
          </Text>
        )}
      </View>
      <Text style={[styles.selectedCost, { color: colors.text.secondary }]}>{cost} ep</Text>
      <Pressable
        onPress={onRemove}
        hitSlop={8}
        accessibilityRole="button"
        accessibilityLabel={`Remove ${name}`}
      >
        <Text style={[styles.removeIcon, { color: colors.text.tertiary }]}>✕</Text>
      </Pressable>
    </View>
  );
}

function formatMetadataLabel(selection: SelectedEvolution): string | null {
  const m = selection.metadata;
  if (!m) return null;
  if (m.ability) return `(${m.ability.toUpperCase()})`;
  if (m.energyType) return `(${m.energyType})`;
  if (m.skillKey) return `(${m.skillKey})`;
  if (m.attackId) return `(${m.attackId})`;
  if (m.spellId) return `(spell: ${m.spellId})`;
  if (m.featId) return `(feat: ${m.featId})`;
  if (m.slotId) return `(slot: ${m.slotId})`;
  if (m.notes) return `(${m.notes})`;
  return null;
}

// ---- Free evolutions list ----

function FreeEvolutionsList({
  eidolon,
  summonerLevel,
  dataIndex,
}: {
  eidolon: DraftEidolon;
  summonerLevel: number;
  dataIndex: EidolonDataIndex;
}) {
  const { colors } = useTheme();

  const free = useMemo(
    () =>
      EidolonPoolService.computeFreeEvolutions(
        eidolon.baseForm,
        eidolon.subtype,
        summonerLevel,
        dataIndex,
      ),
    [eidolon.baseForm, eidolon.subtype, summonerLevel, dataIndex],
  );

  if (free.length === 0) return null;

  // Group by evolution id for compact display with counts.
  const counts = new Map<string, number>();
  for (const id of free) counts.set(id, (counts.get(id) ?? 0) + 1);

  const labels: string[] = [];
  for (const [id, n] of counts) {
    const name = dataIndex.evolutions.get(id)?.name ?? id;
    labels.push(n > 1 ? `${name} ×${n}` : name);
  }

  return (
    <View style={styles.freeList}>
      <Text style={[styles.listLabel, { color: colors.text.secondary }]}>
        Free from base form + subtype
      </Text>
      <Text style={[styles.freeText, { color: colors.text.tertiary }]}>{labels.join(', ')}</Text>
    </View>
  );
}

// ---- Styles ----

const styles = StyleSheet.create({
  section: {
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 8,
  },
  addEidolonButton: {
    padding: 12,
    borderRadius: 8,
    borderWidth: StyleSheet.hairlineWidth,
    alignItems: 'center',
  },
  addEidolonText: {
    fontSize: 14,
    fontWeight: '600',
  },
  addEidolonHint: {
    fontSize: 11,
    marginTop: 2,
  },
  card: {
    padding: 12,
    borderRadius: 8,
    borderWidth: StyleSheet.hairlineWidth,
    marginBottom: 8,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  nameInput: {
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
    paddingBottom: 4,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  removeIcon: {
    fontSize: 16,
    marginLeft: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  fieldLabel: {
    fontSize: 12,
    width: 90,
  },
  picker: {
    flex: 1,
  },
  poolSummary: {
    marginTop: 10,
    paddingTop: 8,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: 'rgba(128,128,128,0.2)',
  },
  poolSummaryLine: {
    fontSize: 13,
  },
  breakdownLines: {
    marginTop: 4,
    marginLeft: 4,
  },
  breakdownLine: {
    fontSize: 11,
    lineHeight: 15,
  },
  warningsList: {
    marginTop: 4,
  },
  warningText: {
    fontSize: 11,
  },
  selectedList: {
    marginTop: 10,
  },
  emptySelectedList: {
    marginTop: 10,
  },
  emptyText: {
    fontSize: 12,
    fontStyle: 'italic',
  },
  listLabel: {
    fontSize: 11,
    fontWeight: '600',
    marginBottom: 4,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  selectedRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginVertical: 2,
    borderRadius: 6,
    borderWidth: StyleSheet.hairlineWidth,
  },
  selectedName: {
    fontSize: 13,
    fontWeight: '500',
  },
  selectedMetadata: {
    fontSize: 11,
  },
  selectedCost: {
    fontSize: 12,
    marginHorizontal: 8,
  },
  freeList: {
    marginTop: 10,
  },
  freeText: {
    fontSize: 12,
    lineHeight: 16,
  },
  addEvolutionButton: {
    marginTop: 10,
    padding: 8,
    borderRadius: 6,
    borderWidth: StyleSheet.hairlineWidth,
    alignItems: 'center',
  },
  addEvolutionText: {
    fontSize: 13,
    fontWeight: '600',
  },
});
