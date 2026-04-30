import React, { useMemo, useState, useEffect } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  removeSpellcastingPool,
  updatePoolCastingAbility,
  setSpellsPerDayMisc,
} from '@/store/slices/characterEntrySlice';
import { InlinePicker } from '@/components/ui/InlinePicker';
import { AutoComputedValue } from '@/components/ui/AutoComputedValue';
import { GameDataService } from '@/services/GameDataService';
import { selectClassDataMap } from '@/store/slices/gameDataSlice';
import type { ExpandedClassData, SpellProgressionTable } from '@/data/classes/types';
import { type SpellcastingPool } from '@/types/spells';
import { type ClassEntry } from '@/types/classes';
import { type AbilityKey } from '@/types/abilities';

// ---- Helpers ----

function fmtSign(n: number): string {
  return n >= 0 ? `+${n}` : `${n}`;
}

const ABILITY_OPTIONS = [
  { label: 'STR', value: 'str' },
  { label: 'DEX', value: 'dex' },
  { label: 'CON', value: 'con' },
  { label: 'INT', value: 'int' },
  { label: 'WIS', value: 'wis' },
  { label: 'CHA', value: 'cha' },
];

// ---- Spell computation helpers ----

/**
 * PF1e bonus spells for a casting ability modifier at a given spell level.
 * Formula: floor((mod - spellLevel) / 4) + 1  for mod >= spellLevel >= 1
 */
function abilityBonusSpells(abilityMod: number, spellLevel: number): number {
  if (spellLevel < 1 || spellLevel > 9 || abilityMod < spellLevel) return 0;
  return Math.floor((abilityMod - spellLevel) / 4) + 1;
}

/**
 * How many of an entry's levels contribute to a specific pool.
 * Base class: full level count. Prestige class: count of perLevel[i]
 * pointers targeting this pool's baseClassEntryId.
 */
interface PoolContributor {
  entry: ClassEntry;
  advancedLevels: number;
}

function getContributors(
  classes: ClassEntry[],
  pool: SpellcastingPool,
  classDataMap: Map<string, ExpandedClassData>,
): PoolContributor[] {
  const result: PoolContributor[] = [];
  for (const entry of classes) {
    // The pool's base class contributes its full level.
    if (entry.id === pool.baseClassEntryId) {
      if (entry.level > 0) result.push({ entry, advancedLevels: entry.level });
      continue;
    }

    // Prestige classes advance via per-level pointers, but only at the
    // levels listed in the class's advancement spec.
    const adv = entry.spellcastingAdvancement;
    if (!adv) continue;
    const spec = classDataMap.get(entry.name.toLowerCase())?.advancesSpellcasting;
    if (!spec) continue;
    const isAdvancingLevel = (lvl: number): boolean =>
      spec.atLevels ? spec.atLevels.includes(lvl) : lvl >= 1 && lvl <= entry.level;

    let count = 0;
    if (adv.mode === 'single') {
      count = adv.perLevel.filter(
        (p, i) => isAdvancingLevel(i + 1) && p.baseClassEntryId === pool.baseClassEntryId,
      ).length;
    } else {
      count = adv.perLevel.filter(
        (p, i) =>
          isAdvancingLevel(i + 1) &&
          (p.arcaneBaseClassEntryId === pool.baseClassEntryId ||
            p.divineBaseClassEntryId === pool.baseClassEntryId),
      ).length;
    }
    if (count > 0) result.push({ entry, advancedLevels: count });
  }
  return result;
}

/**
 * Spell table for a pool is determined by its base class only — the base
 * class's table governs what slots the caster has at each ESL.
 */
function resolveSpellTableKey(
  pool: SpellcastingPool,
  classes: ClassEntry[],
  expandedClasses: ExpandedClassData[],
): string {
  const base = classes.find((c) => c.id === pool.baseClassEntryId);
  if (base) {
    const data = expandedClasses.find((c) => c.name.toLowerCase() === base.name.toLowerCase());
    if (data?.spellcasting.spellTableKey) return data.spellcasting.spellTableKey;
  }
  return 'FULL_9_PREPARED_PER_DAY';
}

/**
 * Domain/school bonus slots come from the pool's base class (e.g. Cleric).
 */
function hasDomainSlots(
  pool: SpellcastingPool,
  classes: ClassEntry[],
  expandedClasses: ExpandedClassData[],
): boolean {
  const base = classes.find((c) => c.id === pool.baseClassEntryId);
  if (!base) return false;
  const data = expandedClasses.find((c) => c.name.toLowerCase() === base.name.toLowerCase());
  return data?.spellcasting.domainSlots === true;
}

// ---- Spells per day row ----

interface SpellRowProps {
  spellLevel: number;
  base: number | null;
  abilityBonus: number;
  domainSlot: boolean;
  misc: number;
  onMiscChange: (v: number) => void;
}

function SpellRow({
  spellLevel,
  base,
  abilityBonus,
  domainSlot,
  misc,
  onMiscChange,
}: SpellRowProps) {
  const { colors, fantasy, isDark } = useTheme();

  const total = (base ?? 0) + abilityBonus + (domainSlot ? 1 : 0) + misc;
  const hasSpells = base !== null;

  return (
    <View
      style={[
        gridStyles.row,
        {
          borderBottomColor: colors.border.DEFAULT,
          opacity: hasSpells ? 1 : 0.4,
        },
      ]}
    >
      <Text style={[gridStyles.levelCell, { color: colors.text.tertiary }]}>
        {spellLevel === 0 ? '0' : spellLevel}
      </Text>

      <Text style={[gridStyles.numCell, { color: isDark ? fantasy.gold : fantasy.bronze }]}>
        {base !== null ? String(base) : '—'}
      </Text>

      <Text style={[gridStyles.numCell, { color: isDark ? fantasy.gold : fantasy.bronze }]}>
        {abilityBonus > 0 ? `+${abilityBonus}` : '—'}
      </Text>

      <Text style={[gridStyles.numCell, { color: isDark ? fantasy.gold : fantasy.bronze }]}>
        {domainSlot && hasSpells ? '+1' : '—'}
      </Text>

      <TextInput
        value={misc !== 0 ? String(misc) : ''}
        onChangeText={(t) => {
          const n = parseInt(t, 10);
          onMiscChange(isNaN(n) ? 0 : n);
        }}
        keyboardType="numbers-and-punctuation"
        selectTextOnFocus
        placeholder="0"
        placeholderTextColor={colors.text.tertiary}
        editable={hasSpells}
        style={[
          gridStyles.miscInput,
          {
            color: colors.text.primary,
            borderColor:
              misc !== 0 ? (isDark ? fantasy.gold : fantasy.bronze) : colors.border.DEFAULT,
            backgroundColor: isDark ? colors.bg.tertiary : colors.bg.secondary,
          },
        ]}
      />

      <Text
        style={[
          gridStyles.totalCell,
          {
            color: hasSpells ? (isDark ? '#E5D5B0' : '#3D2B1F') : colors.text.tertiary,
            fontWeight: '700',
          },
        ]}
      >
        {hasSpells ? String(total) : '—'}
      </Text>
    </View>
  );
}

const gridStyles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderBottomWidth: StyleSheet.hairlineWidth,
    gap: 4,
  },
  levelCell: {
    width: 24,
    fontFamily: 'Cinzel',
    fontSize: 11,
    fontWeight: '700',
    textAlign: 'center',
  },
  numCell: {
    flex: 1,
    fontFamily: 'LibreBaskerville',
    fontSize: 13,
    textAlign: 'center',
  },
  miscInput: {
    flex: 1,
    fontFamily: 'LibreBaskerville',
    fontSize: 13,
    borderWidth: 1,
    borderRadius: 4,
    paddingVertical: 3,
    textAlign: 'center',
    minHeight: 28,
  },
  totalCell: {
    flex: 1,
    fontFamily: 'LibreBaskerville',
    fontSize: 14,
    textAlign: 'center',
  },
});

// ---- Pool card ----

interface PoolCardProps {
  pool: SpellcastingPool;
  abilityMod: number;
  expandedClasses: ExpandedClassData[];
  spellTables: Record<string, SpellProgressionTable>;
}

function PoolCard({ pool, abilityMod, expandedClasses, spellTables }: PoolCardProps) {
  const { colors, fantasy, isDark } = useTheme();
  const dispatch = useAppDispatch();
  const classes = useAppSelector((state) => state.characterEntry.character.classes.classes);
  const classDataMap = useAppSelector(selectClassDataMap);
  const [spellsExpanded, setSpellsExpanded] = useState(true);
  const [contributorsExpanded, setContributorsExpanded] = useState(false);

  const contributors = useMemo(
    () => getContributors(classes, pool, classDataMap),
    [classes, pool, classDataMap],
  );
  const esl = useMemo(
    () => contributors.reduce((sum, c) => sum + c.advancedLevels, 0),
    [contributors],
  );
  const tableKey = useMemo(
    () => resolveSpellTableKey(pool, classes, expandedClasses),
    [pool, classes, expandedClasses],
  );
  const domainSlots = useMemo(
    () => hasDomainSlots(pool, classes, expandedClasses),
    [pool, classes, expandedClasses],
  );

  const spellTable = spellTables[tableKey];
  const tableRow = spellTable && esl > 0 ? spellTable[Math.min(esl, spellTable.length) - 1] : null;

  const dcBase = 10 + abilityMod;

  return (
    <View
      style={[
        poolStyles.card,
        {
          backgroundColor: isDark ? colors.bg.secondary : colors.bg.primary,
          borderColor: colors.border.DEFAULT,
        },
      ]}
    >
      {/* Card header */}
      <View style={poolStyles.header}>
        <View
          style={[
            poolStyles.typeBadge,
            {
              backgroundColor:
                pool.castingType === 'divine' ? 'rgba(139,92,246,0.2)' : 'rgba(59,130,246,0.2)',
            },
          ]}
        >
          <Text
            style={[
              poolStyles.typeBadgeText,
              { color: pool.castingType === 'divine' ? '#8B5CF6' : '#3B82F6' },
            ]}
          >
            {pool.castingType.toUpperCase()}
          </Text>
        </View>

        <InlinePicker
          value={pool.spellAbility.toLowerCase() as AbilityKey}
          options={ABILITY_OPTIONS}
          onValueChange={(v) =>
            dispatch(updatePoolCastingAbility({ poolId: pool.id ?? '', ability: v }))
          }
          style={poolStyles.abilityPicker}
        />

        <Pressable
          onPress={() => dispatch(removeSpellcastingPool(pool.id ?? ''))}
          hitSlop={8}
          accessibilityRole="button"
          accessibilityLabel="Remove pool"
          style={poolStyles.removeBtn}
        >
          <Text style={[poolStyles.removeIcon, { color: colors.text.tertiary }]}>✕</Text>
        </Pressable>
      </View>

      {/* ESL / CL / DC / Concentration summary */}
      <View style={poolStyles.summaryRow}>
        <AutoComputedValue value={`${esl}`} label="ESL" />
        <AutoComputedValue value={`${esl}`} label="CL" />
        <AutoComputedValue value={`${dcBase} + lvl`} label="Spell DC" />
        <AutoComputedValue value={fmtSign(esl + abilityMod)} label="Concentration" />
        <Text style={[poolStyles.abilityMod, { color: colors.text.secondary }]}>
          {pool.spellAbility} {fmtSign(abilityMod)}
        </Text>
      </View>

      {/* Contributors (collapsible) */}
      <Pressable
        onPress={() => setContributorsExpanded((v) => !v)}
        style={[poolStyles.sectionToggle, { borderTopColor: colors.border.DEFAULT }]}
        accessibilityRole="button"
      >
        <Text style={[poolStyles.sectionLabel, { color: colors.text.secondary }]}>
          {contributorsExpanded ? '▾' : '▸'} Contributors ({contributors.length})
        </Text>
      </Pressable>

      {contributorsExpanded && (
        <View style={[poolStyles.contributorsList, { borderTopColor: colors.border.DEFAULT }]}>
          {contributors.length === 0 ? (
            <Text style={[poolStyles.emptyNote, { color: colors.text.tertiary }]}>
              No classes marked as contributing — set spellcasting advancement in Classes tab.
            </Text>
          ) : (
            contributors.map((c) => (
              <View key={c.entry.id ?? c.entry.name} style={poolStyles.contributorRow}>
                <Text style={[poolStyles.contributorName, { color: colors.text.primary }]}>
                  {c.entry.name}
                </Text>
                <Text
                  style={[
                    poolStyles.contributorLevel,
                    { color: isDark ? fantasy.gold : fantasy.bronze },
                  ]}
                >
                  {c.advancedLevels}
                </Text>
              </View>
            ))
          )}
        </View>
      )}

      {/* Spells per day (collapsible) */}
      <Pressable
        onPress={() => setSpellsExpanded((v) => !v)}
        style={[poolStyles.sectionToggle, { borderTopColor: colors.border.DEFAULT }]}
        accessibilityRole="button"
      >
        <Text style={[poolStyles.sectionLabel, { color: colors.text.secondary }]}>
          {spellsExpanded ? '▾' : '▸'} Spells Per Day
        </Text>
      </Pressable>

      {spellsExpanded && (
        <View
          style={{
            borderTopColor: colors.border.DEFAULT,
            borderTopWidth: StyleSheet.hairlineWidth,
          }}
        >
          {/* Grid header */}
          <View style={[gridStyles.row, { borderBottomColor: colors.border.DEFAULT }]}>
            {['Lvl', 'Base', `Bns`, 'Dom', 'Misc', 'Tot'].map((h) => (
              <Text
                key={h}
                style={[
                  h === 'Lvl' ? gridStyles.levelCell : { flex: 1 },
                  {
                    fontFamily: 'Cinzel',
                    fontSize: 9,
                    fontWeight: '700',
                    color: colors.text.tertiary,
                    textAlign: 'center',
                    textTransform: 'uppercase',
                  },
                ]}
              >
                {h}
              </Text>
            ))}
          </View>

          {Array.from({ length: 10 }, (_, i) => i).map((spellLevel) => {
            const base = tableRow ? (tableRow[spellLevel] ?? null) : null;
            const bonus = spellLevel === 0 ? 0 : abilityBonusSpells(abilityMod, spellLevel);

            return (
              <SpellRow
                key={spellLevel}
                spellLevel={spellLevel}
                base={base}
                abilityBonus={bonus}
                domainSlot={domainSlots && spellLevel > 0}
                misc={pool.spellsPerDay.misc[spellLevel] ?? 0}
                onMiscChange={(v) =>
                  dispatch(setSpellsPerDayMisc({ poolId: pool.id ?? '', spellLevel, value: v }))
                }
              />
            );
          })}
        </View>
      )}
    </View>
  );
}

const poolStyles = StyleSheet.create({
  card: {
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 12,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
    gap: 8,
  },
  typeBadge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4,
  },
  typeBadgeText: {
    fontFamily: 'Cinzel',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  abilityPicker: {
    width: 80,
    marginBottom: 0,
  },
  removeBtn: {
    marginLeft: 'auto',
    padding: 4,
  },
  removeIcon: {
    fontSize: 14,
    fontWeight: '700',
  },
  summaryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingBottom: 8,
    gap: 8,
    flexWrap: 'wrap',
  },
  abilityMod: {
    fontFamily: 'LibreBaskerville',
    fontSize: 12,
    marginLeft: 'auto',
  },
  sectionToggle: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  sectionLabel: {
    fontFamily: 'LibreBaskerville',
    fontSize: 13,
    fontWeight: '600',
  },
  contributorsList: {
    paddingHorizontal: 12,
    paddingBottom: 8,
    gap: 4,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  contributorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
  },
  contributorName: {
    flex: 1,
    fontFamily: 'LibreBaskerville',
    fontSize: 13,
  },
  contributorLevel: {
    fontFamily: 'Cinzel',
    fontSize: 13,
    fontWeight: '700',
  },
  emptyNote: {
    fontFamily: 'LibreBaskerville',
    fontSize: 12,
    fontStyle: 'italic',
    paddingVertical: 8,
    lineHeight: 17,
  },
});

// ---- Main section ----

export function SpellcastingSection() {
  const { colors } = useTheme();
  const character = useAppSelector((state) => state.characterEntry.character);
  const pools = character.spellcasting.pools;
  const [expandedClasses, setExpandedClasses] = useState<ExpandedClassData[]>([]);
  const [spellTables, setSpellTables] = useState<Record<string, SpellProgressionTable>>({});

  useEffect(() => {
    Promise.all([GameDataService.getExpandedClasses(), GameDataService.getSpellTables()])
      .then(([classes, tables]) => {
        setExpandedClasses(classes);
        setSpellTables(tables);
      })
      .catch((e) => console.error('Failed to load spellcasting data:', e));
  }, []);

  const abilityMods = useMemo(
    () => ({
      str: character.abilityScores.str.modifier,
      dex: character.abilityScores.dex.modifier,
      con: character.abilityScores.con.modifier,
      int: character.abilityScores.int.modifier,
      wis: character.abilityScores.wis.modifier,
      cha: character.abilityScores.cha.modifier,
    }),
    [character.abilityScores],
  );

  return (
    <View style={styles.container}>
      {pools.length === 0 && (
        <View style={styles.emptyState}>
          <Text style={[styles.emptyText, { color: colors.text.tertiary }]}>
            No spellcasting pools yet. Add a caster class on the Classes tab to create its pool
            automatically.
          </Text>
        </View>
      )}

      {pools.map((pool) => (
        <PoolCard
          key={pool.id ?? pool.castingType}
          pool={pool}
          abilityMod={abilityMods[pool.spellAbility.toLowerCase() as AbilityKey]}
          expandedClasses={expandedClasses}
          spellTables={spellTables}
        />
      ))}
    </View>
  );
}

// ---- Styles ----

const styles = StyleSheet.create({
  container: {
    gap: 0,
  },
  emptyState: {
    paddingVertical: 32,
    alignItems: 'center',
  },
  emptyText: {
    fontFamily: 'LibreBaskerville',
    fontSize: 13,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  addRow: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 4,
  },
  addButton: {
    flex: 1,
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
