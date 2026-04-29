// EidolonSubtypePicker — modal sheet for selecting an Unchained Summoner subtype.
//
// Shows each subtype's description, alignment restriction, required base forms,
// and level-gated scaling grants (free evolutions, bonus ep, special abilities).
//
// Subtypes whose requiredBaseForms don't include the current base form are
// filtered out. The caller is responsible for invalidation handling if the
// player selects a new subtype that breaks existing evolution selections.

import React, { useMemo } from 'react';
import { View, Text, Pressable, Modal, ScrollView, StyleSheet } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { ALL_EIDOLON_SUBTYPES } from '@/data/eidolonSubtypes/index';
import type { EidolonForm, EidolonSubtype, EidolonSubtypeDefinition } from '@/types/eidolon';

// ---- Props ----

interface EidolonSubtypePickerProps {
  visible: boolean;
  currentBaseForm: EidolonForm;
  currentSubtype: EidolonSubtype | undefined;
  summonerLevel: number;
  onSelect: (subtype: EidolonSubtype | undefined) => void;
  onClose: () => void;
}

// ---- Helpers ----

function filterByBaseForm(
  subtypes: readonly EidolonSubtypeDefinition[],
  baseForm: EidolonForm,
): EidolonSubtypeDefinition[] {
  return subtypes
    .filter((st) => st.requiredBaseForms.length === 0 || st.requiredBaseForms.includes(baseForm))
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name));
}

function summarizeGrants(
  subtype: EidolonSubtypeDefinition,
  summonerLevel: number,
): {
  unlocked: string[];
  upcoming: string[];
} {
  const unlocked: string[] = [];
  const upcoming: string[] = [];

  for (const grant of subtype.scalingGrants) {
    const lines: string[] = [];
    if (grant.bonusEvolutionPoints) lines.push(`+${grant.bonusEvolutionPoints} evolution point`);
    if (grant.freeEvolutions && grant.freeEvolutions.length > 0) {
      lines.push(`free: ${grant.freeEvolutions.join(', ')}`);
    }
    if (grant.specialAbilities && grant.specialAbilities.length > 0) {
      lines.push(...grant.specialAbilities);
    }
    if (lines.length === 0) continue;

    const entry = `L${grant.classLevel}: ${lines.join('; ')}`;
    if (grant.classLevel <= summonerLevel) {
      unlocked.push(entry);
    } else {
      upcoming.push(entry);
    }
  }

  return { unlocked, upcoming };
}

// ---- Component ----

export function EidolonSubtypePicker({
  visible,
  currentBaseForm,
  currentSubtype,
  summonerLevel,
  onSelect,
  onClose,
}: EidolonSubtypePickerProps) {
  const { colors, fantasy, isDark } = useTheme();

  const subtypes = useMemo(
    () => filterByBaseForm(ALL_EIDOLON_SUBTYPES, currentBaseForm),
    [currentBaseForm],
  );

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
            Subtype
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
          {/* "Clear subtype" option — present but discouraged for Unchained */}
          <Pressable
            onPress={() => onSelect(undefined)}
            style={({ pressed }) => [
              styles.card,
              styles.clearCard,
              {
                borderColor: currentSubtype === undefined ? fantasy.gold : colors.border.DEFAULT,
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
            accessibilityLabel="Clear subtype"
            testID="subtype-option-none"
          >
            <Text style={[styles.clearName, { color: colors.text.tertiary }]}>
              —— no subtype ——
            </Text>
            <Text style={[styles.description, { color: colors.text.tertiary }]}>
              Unchained Summoners must have a subtype. Leaving this blank will surface a validation
              warning.
            </Text>
          </Pressable>

          {subtypes.length === 0 && (
            <View style={styles.empty}>
              <Text style={[styles.emptyText, { color: colors.text.tertiary }]}>
                No subtypes available for this base form.
              </Text>
            </View>
          )}

          {subtypes.map((subtype) => {
            const selected = subtype.id === currentSubtype;
            const { unlocked, upcoming } = summarizeGrants(subtype, summonerLevel);
            return (
              <Pressable
                key={subtype.id}
                onPress={() => onSelect(subtype.id)}
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
                accessibilityLabel={`Select ${subtype.name} subtype`}
                testID={`subtype-option-${subtype.id}`}
              >
                <View style={styles.cardHeader}>
                  <Text style={[styles.subtypeName, { color: colors.text.primary }]}>
                    {subtype.name}
                  </Text>
                  {selected && (
                    <Text style={[styles.selectedBadge, { color: fantasy.gold }]}>✓ current</Text>
                  )}
                </View>

                <Text style={[styles.description, { color: colors.text.secondary }]}>
                  {subtype.description}
                </Text>

                {subtype.alignmentRestriction && subtype.alignmentRestriction.length > 0 && (
                  <Text style={[styles.restrictionLine, { color: colors.text.tertiary }]}>
                    Alignment: {subtype.alignmentRestriction.join(', ')}
                  </Text>
                )}

                <Text style={[styles.restrictionLine, { color: colors.text.tertiary }]}>
                  Base forms: {subtype.requiredBaseForms.join(', ')}
                </Text>

                {unlocked.length > 0 && (
                  <View style={styles.grantsBlock}>
                    <Text style={[styles.grantsHeader, { color: colors.text.secondary }]}>
                      Unlocked (summoner L{summonerLevel})
                    </Text>
                    {unlocked.map((line, i) => (
                      <Text
                        key={`u-${i}`}
                        style={[styles.grantLine, { color: colors.text.primary }]}
                      >
                        {line}
                      </Text>
                    ))}
                  </View>
                )}

                {upcoming.length > 0 && (
                  <View style={styles.grantsBlock}>
                    <Text style={[styles.grantsHeader, { color: colors.text.tertiary }]}>
                      Upcoming
                    </Text>
                    {upcoming.map((line, i) => (
                      <Text
                        key={`p-${i}`}
                        style={[styles.grantLine, { color: colors.text.tertiary }]}
                      >
                        {line}
                      </Text>
                    ))}
                  </View>
                )}
              </Pressable>
            );
          })}
        </ScrollView>
      </View>
    </Modal>
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
  clearCard: {
    borderStyle: 'dashed',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  subtypeName: {
    flex: 1,
    fontFamily: 'Cinzel',
    fontSize: 16,
    fontWeight: '700',
  },
  clearName: {
    fontFamily: 'LibreBaskerville',
    fontSize: 14,
    fontStyle: 'italic',
    marginBottom: 4,
  },
  selectedBadge: {
    fontFamily: 'LibreBaskerville',
    fontSize: 11,
    fontWeight: '700',
    marginLeft: 8,
  },
  description: {
    fontFamily: 'LibreBaskerville',
    fontSize: 12,
    marginBottom: 6,
  },
  restrictionLine: {
    fontFamily: 'LibreBaskerville',
    fontSize: 11,
    fontStyle: 'italic',
    marginBottom: 2,
  },
  grantsBlock: {
    marginTop: 6,
    gap: 2,
  },
  grantsHeader: {
    fontFamily: 'LibreBaskerville',
    fontSize: 11,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 2,
  },
  grantLine: {
    fontFamily: 'LibreBaskerville',
    fontSize: 11,
    marginLeft: 4,
  },
  empty: {
    padding: 20,
    alignItems: 'center',
  },
  emptyText: {
    fontFamily: 'LibreBaskerville',
    fontSize: 13,
    fontStyle: 'italic',
  },
});
