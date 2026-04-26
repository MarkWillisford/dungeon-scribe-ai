// EidolonBaseFormPicker — modal sheet for selecting a base form.
//
// Shows each form's stats so the player can compare at the point of decision:
//   - Starting size, speeds
//   - Natural armor, save profile
//   - Starting ability scores
//   - Base natural attacks
//   - Free evolutions granted at 1st level
//   - Edition availability (APG-only, Unchained-only, both, or legacy-supplemental)
//
// When the player picks a form that differs from the current one, the
// onSelect callback is invoked with the chosen form id. Invalidation of
// existing selections is handled by the caller (see EidolonSection).

import React, { useMemo } from 'react';
import { View, Text, Pressable, Modal, ScrollView, StyleSheet } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { ALL_EIDOLON_BASE_FORMS } from '@/data/eidolonBaseForms/index';
import type { EidolonBaseFormDefinition, EidolonEdition, EidolonForm } from '@/types/eidolon';

// ---- Props ----

interface EidolonBaseFormPickerProps {
  visible: boolean;
  edition: EidolonEdition;
  currentBaseForm: EidolonForm;
  onSelect: (baseForm: EidolonForm) => void;
  onClose: () => void;
}

// ---- Helpers ----

function formatSpeeds(speeds: EidolonBaseFormDefinition['speeds']): string {
  const parts: string[] = [`land ${speeds.land} ft`];
  if (speeds.fly) {
    parts.push(
      `fly ${speeds.fly} ft${speeds.flyManeuverability ? ` (${speeds.flyManeuverability})` : ''}`,
    );
  }
  if (speeds.swim) parts.push(`swim ${speeds.swim} ft`);
  if (speeds.climb) parts.push(`climb ${speeds.climb} ft`);
  if (speeds.burrow) parts.push(`burrow ${speeds.burrow} ft`);
  return parts.join(', ');
}

function formatSaves(saves: EidolonBaseFormDefinition['saves']): string {
  const parts: string[] = [];
  parts.push(`Fort ${saves.fort === 'good' ? 'good' : 'bad'}`);
  parts.push(`Ref ${saves.ref === 'good' ? 'good' : 'bad'}`);
  parts.push(`Will ${saves.will === 'good' ? 'good' : 'bad'}`);
  return parts.join(' / ');
}

function formatAbilities(abilities: EidolonBaseFormDefinition['abilityScores']): string {
  return `STR ${abilities.str}, DEX ${abilities.dex}, CON ${abilities.con}, INT ${abilities.int}, WIS ${abilities.wis}, CHA ${abilities.cha}`;
}

function formatBaseAttacks(attacks: EidolonBaseFormDefinition['baseAttacks']): string {
  if (attacks.length === 0) return 'none';
  return attacks
    .map((a) => {
      const count = a.count > 1 ? `${a.count} ` : '';
      const primary = a.primary ? 'primary' : 'secondary';
      const descriptor = a.descriptor ? ` ${a.descriptor}` : '';
      return `${count}${a.kind} (${a.damageMedium}${descriptor}, ${primary})`;
    })
    .join(', ');
}

function filterForEdition(
  forms: readonly EidolonBaseFormDefinition[],
  edition: EidolonEdition,
): EidolonBaseFormDefinition[] {
  return forms.filter((f) => f.edition === 'both' || f.edition === edition);
}

// ---- Component ----

export function EidolonBaseFormPicker({
  visible,
  edition,
  currentBaseForm,
  onSelect,
  onClose,
}: EidolonBaseFormPickerProps) {
  const { colors, fantasy, isDark } = useTheme();

  const forms = useMemo(() => filterForEdition(ALL_EIDOLON_BASE_FORMS, edition), [edition]);

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <View
        style={[
          styles.container,
          { backgroundColor: isDark ? colors.bg.primary : colors.bg.secondary },
        ]}
      >
        {/* Header */}
        <View style={[styles.header, { borderBottomColor: colors.border.DEFAULT }]}>
          <Text style={[styles.title, { color: isDark ? fantasy.gold : fantasy.darkWood }]}>
            Base Form
          </Text>
          <Pressable
            onPress={onClose}
            style={styles.closeBtn}
            hitSlop={12}
            accessibilityRole="button"
            accessibilityLabel="Close"
          >
            <Text style={[styles.closeText, { color: colors.text.tertiary }]}>✕</Text>
          </Pressable>
        </View>

        <ScrollView contentContainerStyle={styles.listContent}>
          {forms.map((form) => {
            const selected = form.id === currentBaseForm;
            return (
              <Pressable
                key={form.id}
                onPress={() => onSelect(form.id)}
                style={({ pressed }) => [
                  styles.card,
                  {
                    borderColor: selected ? fantasy.gold : colors.border.DEFAULT,
                    backgroundColor: pressed
                      ? isDark
                        ? 'rgba(212,175,55,0.1)'
                        : 'rgba(140,90,40,0.06)'
                      : isDark
                        ? colors.bg.tertiary
                        : colors.bg.primary,
                  },
                ]}
                accessibilityRole="button"
                accessibilityLabel={`Select ${form.name} base form`}
                testID={`base-form-option-${form.id}`}
              >
                <View style={styles.cardHeader}>
                  <Text style={[styles.formName, { color: colors.text.primary }]}>{form.name}</Text>
                  <View style={styles.badges}>
                    {form.legacyBaseForm && (
                      <Text style={[styles.badge, { color: colors.text.tertiary }]}>
                        supplemental
                      </Text>
                    )}
                    {form.edition !== 'both' && (
                      <Text style={[styles.badge, { color: colors.text.tertiary }]}>
                        {form.edition === 'apg' ? 'APG only' : 'Unchained only'}
                      </Text>
                    )}
                    {selected && (
                      <Text style={[styles.selectedBadge, { color: fantasy.gold }]}>✓ current</Text>
                    )}
                  </View>
                </View>

                <Text style={[styles.description, { color: colors.text.secondary }]}>
                  {form.description}
                </Text>

                <View style={styles.statsGrid}>
                  <StatLine label="Size" value={form.startingSize} colors={colors} />
                  <StatLine label="Speed" value={formatSpeeds(form.speeds)} colors={colors} />
                  <StatLine label="Nat. Armor" value={`+${form.naturalArmor}`} colors={colors} />
                  <StatLine label="Saves" value={formatSaves(form.saves)} colors={colors} />
                  <StatLine
                    label="Abilities"
                    value={formatAbilities(form.abilityScores)}
                    colors={colors}
                  />
                  <StatLine
                    label="Attacks"
                    value={formatBaseAttacks(form.baseAttacks)}
                    colors={colors}
                  />
                  {form.freeEvolutions.length > 0 && (
                    <StatLine
                      label="Free evol."
                      value={`${form.freeEvolutions.length} granted at 1st level`}
                      colors={colors}
                    />
                  )}
                </View>
              </Pressable>
            );
          })}
        </ScrollView>
      </View>
    </Modal>
  );
}

// ---- Sub-components ----

function StatLine({
  label,
  value,
  colors,
}: {
  label: string;
  value: string;
  colors: ReturnType<typeof useTheme>['colors'];
}) {
  return (
    <View style={styles.statLine}>
      <Text style={[styles.statLabel, { color: colors.text.tertiary }]}>{label}</Text>
      <Text style={[styles.statValue, { color: colors.text.primary }]}>{value}</Text>
    </View>
  );
}

// ---- Styles ----

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
  },
  title: {
    flex: 1,
    fontFamily: 'Cinzel',
    fontSize: 16,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  closeBtn: {
    padding: 4,
  },
  closeText: {
    fontSize: 18,
    fontWeight: '700',
  },
  listContent: {
    padding: 12,
    gap: 10,
  },
  card: {
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 8,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  formName: {
    flex: 1,
    fontFamily: 'Cinzel',
    fontSize: 16,
    fontWeight: '700',
  },
  badges: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  badge: {
    fontFamily: 'LibreBaskerville',
    fontSize: 10,
    fontStyle: 'italic',
    textTransform: 'lowercase',
  },
  selectedBadge: {
    fontFamily: 'LibreBaskerville',
    fontSize: 11,
    fontWeight: '700',
  },
  description: {
    fontFamily: 'LibreBaskerville',
    fontSize: 12,
    marginBottom: 8,
  },
  statsGrid: {
    gap: 3,
  },
  statLine: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  statLabel: {
    fontFamily: 'LibreBaskerville',
    fontSize: 11,
    fontWeight: '700',
    textTransform: 'uppercase',
    width: 80,
    letterSpacing: 0.3,
  },
  statValue: {
    flex: 1,
    fontFamily: 'LibreBaskerville',
    fontSize: 12,
  },
});
