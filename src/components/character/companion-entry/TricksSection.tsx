import React, { useMemo } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { useAppDispatch } from '@/store/hooks';
import { toggleCompanionTrick } from '@/store/slices/characterEntrySlice';
import { CompanionService } from '@/services/CompanionService';
import type { CompanionInstance, TrickName } from '@/types/companions';
import type { AnimalCompanionEntry } from '@/types/animalCompanions';

export interface TricksSectionProps {
  companion: CompanionInstance;
  entry: AnimalCompanionEntry | undefined;
}

// Standard tricks list from TrickName. Display labels humanize camelCase.
// Grouped (general/combat) for scan-ability; mechanically identical.
interface TrickDef {
  key: TrickName;
  label: string;
  group: 'general' | 'combat';
}

const TRICKS: TrickDef[] = [
  { key: 'attack', label: 'Attack', group: 'combat' },
  { key: 'defend', label: 'Defend', group: 'combat' },
  { key: 'down', label: 'Down', group: 'combat' },
  { key: 'flank', label: 'Flank', group: 'combat' },
  { key: 'guard', label: 'Guard', group: 'combat' },
  { key: 'maneuver', label: 'Maneuver', group: 'combat' },
  { key: 'sneak', label: 'Sneak', group: 'combat' },
  { key: 'track', label: 'Track', group: 'combat' },
  { key: 'come', label: 'Come', group: 'general' },
  { key: 'fetch', label: 'Fetch', group: 'general' },
  { key: 'heel', label: 'Heel', group: 'general' },
  { key: 'perform', label: 'Perform', group: 'general' },
  { key: 'seek', label: 'Seek', group: 'general' },
  { key: 'stay', label: 'Stay', group: 'general' },
  { key: 'work', label: 'Work', group: 'general' },
  { key: 'assist', label: 'Assist', group: 'general' },
  { key: 'distract', label: 'Distract', group: 'general' },
  { key: 'getHelp', label: 'Get Help', group: 'general' },
];

export function TricksSection({ companion, entry }: TricksSectionProps) {
  const { colors, fantasy, isDark } = useTheme();
  const dispatch = useAppDispatch();

  const baseStats = useMemo(() => {
    if (!entry) return undefined;
    return CompanionService.computeBaseStatBlock(entry, companion.effectiveProgressionLevel);
  }, [entry, companion.effectiveProgressionLevel]);

  if (!entry || !baseStats) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={[styles.emptyText, { color: colors.text.tertiary }]}>
          Entry definition missing — can&apos;t compute trick slots.
        </Text>
      </View>
    );
  }

  // Known trick budget: 1 per HD by default (the companion's Link ability
  // trains one free trick per HD), plus any bonus tricks from the AC
  // progression table. Real PF1e teaching-via-Handle-Animal is out of scope.
  const knownBudget = baseStats.hd + baseStats.bonusTricks;
  const knownSet = new Set<TrickName>(companion.tricks);
  const knownCount = knownSet.size;

  const groups: ('combat' | 'general')[] = ['combat', 'general'];

  const handleToggle = (trick: TrickName) => {
    dispatch(toggleCompanionTrick({ instanceId: companion.instanceId, trick }));
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
        <Text style={[styles.budgetLabel, { color: colors.text.tertiary }]}>Tricks</Text>
        <Text
          style={[
            styles.budgetValue,
            {
              color: colors.text.primary,
              fontWeight: knownCount > knownBudget ? '700' : '400',
            },
          ]}
        >
          {knownCount} / {knownBudget} known
        </Text>
        <Text style={[styles.budgetHint, { color: colors.text.tertiary }]}>
          {baseStats.hd} HD + {baseStats.bonusTricks} bonus
        </Text>
      </View>

      {groups.map((group) => (
        <View key={group} style={styles.groupBlock}>
          <Text style={[styles.groupTitle, { color: colors.text.tertiary }]}>{group}</Text>
          {TRICKS.filter((t) => t.group === group).map((t) => {
            const known = knownSet.has(t.key);
            return (
              <Pressable
                key={t.key}
                onPress={() => handleToggle(t.key)}
                style={({ pressed }) => [
                  styles.trickRow,
                  {
                    borderBottomColor: colors.border.DEFAULT,
                    backgroundColor: pressed
                      ? isDark
                        ? colors.bg.tertiary
                        : colors.bg.primary
                      : 'transparent',
                  },
                ]}
                accessibilityRole="checkbox"
                accessibilityState={{ checked: known }}
                accessibilityLabel={`Trick: ${t.label}`}
              >
                <View
                  style={[
                    styles.checkbox,
                    {
                      borderColor: known ? fantasy.gold : colors.border.DEFAULT,
                      backgroundColor: known ? fantasy.gold : 'transparent',
                    },
                  ]}
                >
                  {known && <Text style={styles.checkmark}>✓</Text>}
                </View>
                <Text
                  style={[
                    styles.trickLabel,
                    { color: colors.text.primary, fontWeight: known ? '700' : '400' },
                  ]}
                >
                  {t.label}
                </Text>
              </Pressable>
            );
          })}
        </View>
      ))}

      <Text style={[styles.footer, { color: colors.text.tertiary }]}>
        Tricks are the standard PF1e list. Custom tricks and handler-taught tricks (via Handle
        Animal) are out of scope for this builder.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { gap: 16 },
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
  budgetValue: { fontFamily: 'Cinzel', fontSize: 18, fontWeight: '700' },
  budgetHint: { fontFamily: 'LibreBaskerville', fontSize: 11, fontStyle: 'italic' },
  groupBlock: { gap: 0 },
  groupTitle: {
    fontFamily: 'Cinzel',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.5,
    textTransform: 'uppercase',
    paddingVertical: 6,
  },
  trickRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 4,
    borderBottomWidth: StyleSheet.hairlineWidth,
    gap: 12,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1.5,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkmark: {
    color: '#000',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 16,
  },
  trickLabel: {
    fontFamily: 'LibreBaskerville',
    fontSize: 15,
  },
  footer: {
    fontFamily: 'LibreBaskerville',
    fontSize: 11,
    fontStyle: 'italic',
    paddingHorizontal: 4,
  },
  emptyContainer: { padding: 32, alignItems: 'center' },
  emptyText: { fontFamily: 'LibreBaskerville', fontSize: 14, fontStyle: 'italic' },
});
