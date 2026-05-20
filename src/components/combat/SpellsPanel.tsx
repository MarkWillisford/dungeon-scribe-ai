import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import type { SpellcastingPool, PreparedSpell } from '@/types/spells';

// Classes that cast spontaneously (slot-based, no spell preparation)
const SPONTANEOUS_CLASSES = new Set([
  'bard',
  'bloodrager',
  'oracle',
  'shaman',
  'skald',
  'sorcerer',
  'summoner',
  'unchained summoner',
]);

function isSpontaneous(baseClass: string): boolean {
  return SPONTANEOUS_CLASSES.has(baseClass.toLowerCase());
}

export interface SpellsPanelProps {
  pools: SpellcastingPool[];
  preparedSpells: PreparedSpell[];
  /** stringified index into preparedSpells → cast state */
  preparedSpellsCast: Record<string, boolean>;
  /** pool baseClass → used slot count per spell level (index = level) */
  spellSlotsUsed: Record<string, number[]>;
  onTogglePreparedSpell: (spellIndex: number) => void;
  onUseSpellSlot: (poolKey: string, level: number) => void;
  testID?: string;
}

export function SpellsPanel({
  pools,
  preparedSpells,
  preparedSpellsCast,
  spellSlotsUsed,
  onTogglePreparedSpell,
  onUseSpellSlot,
  testID,
}: SpellsPanelProps) {
  const { colors, fantasy } = useTheme();

  if (pools.length === 0) {
    return (
      <View testID={testID} style={styles.empty}>
        <Text style={[styles.emptyText, { color: colors.text.secondary }]}>
          No spellcasting pools for this character.
        </Text>
      </View>
    );
  }

  return (
    <View testID={testID} style={styles.container}>
      {pools.map((pool) => (
        <PoolSection
          key={pool.id ?? pool.baseClass}
          pool={pool}
          preparedSpells={preparedSpells}
          preparedSpellsCast={preparedSpellsCast}
          spellSlotsUsed={spellSlotsUsed}
          onTogglePreparedSpell={onTogglePreparedSpell}
          onUseSpellSlot={onUseSpellSlot}
          colors={colors}
          fantasy={fantasy}
        />
      ))}
    </View>
  );
}

interface PoolSectionProps {
  pool: SpellcastingPool;
  preparedSpells: PreparedSpell[];
  preparedSpellsCast: Record<string, boolean>;
  spellSlotsUsed: Record<string, number[]>;
  onTogglePreparedSpell: (spellIndex: number) => void;
  onUseSpellSlot: (poolKey: string, level: number) => void;
  colors: ReturnType<typeof useTheme>['colors'];
  fantasy: ReturnType<typeof useTheme>['fantasy'];
}

function PoolSection({
  pool,
  preparedSpells,
  preparedSpellsCast,
  spellSlotsUsed,
  onTogglePreparedSpell,
  onUseSpellSlot,
  colors,
  fantasy,
}: PoolSectionProps) {
  const poolKey = pool.baseClass;
  const poolLabel = pool.baseClass.charAt(0).toUpperCase() + pool.baseClass.slice(1);

  return (
    <View
      style={[
        styles.poolSection,
        { backgroundColor: colors.bg.secondary, borderColor: colors.border.DEFAULT },
      ]}
    >
      <Text style={[styles.poolTitle, { color: fantasy.gold }]}>{poolLabel}</Text>

      {isSpontaneous(pool.baseClass) ? (
        <SpontaneousView
          pool={pool}
          poolKey={poolKey}
          spellSlotsUsed={spellSlotsUsed}
          onUseSpellSlot={onUseSpellSlot}
          colors={colors}
          fantasy={fantasy}
        />
      ) : (
        <PreparedView
          pool={pool}
          preparedSpells={preparedSpells}
          preparedSpellsCast={preparedSpellsCast}
          onTogglePreparedSpell={onTogglePreparedSpell}
          colors={colors}
          fantasy={fantasy}
        />
      )}
    </View>
  );
}

interface SpontaneousViewProps {
  pool: SpellcastingPool;
  poolKey: string;
  spellSlotsUsed: Record<string, number[]>;
  onUseSpellSlot: (poolKey: string, level: number) => void;
  colors: ReturnType<typeof useTheme>['colors'];
  fantasy: ReturnType<typeof useTheme>['fantasy'];
}

function SpontaneousView({
  pool,
  poolKey,
  spellSlotsUsed,
  onUseSpellSlot,
  colors,
  fantasy,
}: SpontaneousViewProps) {
  const usedForPool = spellSlotsUsed[poolKey] ?? [];

  // Render only levels that have at least 1 total slot
  const levels: { level: number; total: number; used: number }[] = [];
  for (let lvl = 0; lvl < pool.spellsPerDay.total.length; lvl++) {
    const total = pool.spellsPerDay.total[lvl] ?? 0;
    if (total > 0) {
      levels.push({ level: lvl, total, used: usedForPool[lvl] ?? 0 });
    }
  }

  if (levels.length === 0) {
    return (
      <Text style={[styles.emptyPool, { color: colors.text.tertiary }]}>
        No spell slots available.
      </Text>
    );
  }

  return (
    <View style={styles.slotGrid}>
      {levels.map(({ level, total, used }) => {
        const remaining = Math.max(0, total - used);
        const canUse = remaining > 0;
        return (
          <View
            key={level}
            style={[
              styles.slotRow,
              { borderColor: colors.border.DEFAULT, backgroundColor: colors.bg.tertiary },
            ]}
          >
            <Text style={[styles.slotLevel, { color: colors.text.secondary }]}>
              {level === 0 ? 'Cantrips' : `Level ${level}`}
            </Text>
            <Text
              style={[
                styles.slotRemaining,
                { color: remaining > 0 ? fantasy.gold : colors.text.tertiary },
              ]}
            >
              {`${remaining}/${total}`}
            </Text>
            <Pressable
              style={[
                styles.useSlotBtn,
                { backgroundColor: canUse ? colors.primary.DEFAULT : colors.bg.secondary },
                !canUse && styles.useSlotBtnDisabled,
              ]}
              onPress={() => onUseSpellSlot(poolKey, level)}
              disabled={!canUse}
              accessibilityLabel={`Use ${level === 0 ? 'cantrip' : `level ${level}`} spell slot`}
            >
              <Text
                style={[
                  styles.useSlotBtnText,
                  { color: canUse ? '#FFFFFF' : colors.text.tertiary },
                ]}
              >
                Use
              </Text>
            </Pressable>
          </View>
        );
      })}
    </View>
  );
}

interface PreparedViewProps {
  pool: SpellcastingPool;
  preparedSpells: PreparedSpell[];
  preparedSpellsCast: Record<string, boolean>;
  onTogglePreparedSpell: (spellIndex: number) => void;
  colors: ReturnType<typeof useTheme>['colors'];
  fantasy: ReturnType<typeof useTheme>['fantasy'];
}

function PreparedView({
  pool,
  preparedSpells,
  preparedSpellsCast,
  onTogglePreparedSpell,
  colors,
  fantasy,
}: PreparedViewProps) {
  // Collect prepared spells for this pool's class with their original indices
  const poolSpells: { spell: PreparedSpell; index: number }[] = [];
  preparedSpells.forEach((spell, index) => {
    if (spell.className.toLowerCase() === pool.baseClass.toLowerCase()) {
      poolSpells.push({ spell, index });
    }
  });

  if (poolSpells.length === 0) {
    return (
      <Text style={[styles.emptyPool, { color: colors.text.tertiary }]}>No prepared spells.</Text>
    );
  }

  return (
    <View style={styles.spellList}>
      {poolSpells.map(({ spell, index }) => {
        const isCast = preparedSpellsCast[String(index)] ?? false;
        const spellLevel = spell.classLevels[pool.baseClass] ?? 0;
        return (
          <View
            key={index}
            style={[
              styles.spellRow,
              {
                borderColor: colors.border.DEFAULT,
                backgroundColor: isCast ? colors.bg.primary : colors.bg.tertiary,
              },
            ]}
          >
            <View style={styles.spellInfo}>
              <Text
                style={[
                  styles.spellName,
                  { color: isCast ? colors.text.tertiary : colors.text.primary },
                ]}
                numberOfLines={1}
              >
                {spell.name}
              </Text>
              <Text style={[styles.spellMeta, { color: colors.text.tertiary }]}>
                {spell.domain ? `${spell.domain} · ` : ''}
                {spellLevel === 0 ? 'Cantrip' : `Level ${spellLevel}`}
                {spell.prepared > 1 ? ` (×${spell.prepared})` : ''}
              </Text>
            </View>

            <Pressable
              style={[
                styles.castToggle,
                isCast
                  ? { backgroundColor: colors.bg.secondary, borderColor: colors.border.DEFAULT }
                  : { backgroundColor: fantasy.bronze, borderColor: fantasy.bronze },
              ]}
              onPress={() => onTogglePreparedSpell(index)}
              accessibilityLabel={isCast ? `Uncast ${spell.name}` : `Cast ${spell.name}`}
              accessibilityState={{ selected: isCast }}
            >
              <Text
                style={[
                  styles.castToggleText,
                  { color: isCast ? colors.text.secondary : '#FFFFFF' },
                ]}
              >
                {isCast ? 'Uncast' : 'Cast'}
              </Text>
            </Pressable>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { gap: 12 },
  empty: {
    padding: 16,
    alignItems: 'center',
  },
  emptyText: {
    fontFamily: 'LibreBaskerville',
    fontSize: 13,
    textAlign: 'center',
  },
  poolSection: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    gap: 10,
  },
  poolTitle: {
    fontFamily: 'Cinzel',
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  emptyPool: {
    fontFamily: 'LibreBaskerville',
    fontSize: 12,
    fontStyle: 'italic',
  },
  // Spontaneous slot grid
  slotGrid: { gap: 6 },
  slotRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    gap: 8,
  },
  slotLevel: {
    fontFamily: 'LibreBaskerville',
    fontSize: 13,
    flex: 1,
  },
  slotRemaining: {
    fontFamily: 'Cinzel',
    fontSize: 16,
    fontWeight: '700',
    minWidth: 44,
    textAlign: 'right',
  },
  useSlotBtn: {
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 8,
    minHeight: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
  useSlotBtnDisabled: {
    opacity: 0.4,
  },
  useSlotBtnText: {
    fontFamily: 'Cinzel',
    fontSize: 11,
    fontWeight: '600',
  },
  // Prepared spell list
  spellList: { gap: 6 },
  spellRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    gap: 8,
  },
  spellInfo: {
    flex: 1,
    gap: 2,
  },
  spellName: {
    fontFamily: 'LibreBaskerville',
    fontSize: 13,
    fontWeight: '600',
  },
  spellMeta: {
    fontFamily: 'LibreBaskerville',
    fontSize: 11,
  },
  castToggle: {
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 8,
    minHeight: 36,
    minWidth: 64,
    justifyContent: 'center',
    alignItems: 'center',
  },
  castToggleText: {
    fontFamily: 'Cinzel',
    fontSize: 11,
    fontWeight: '600',
  },
});
