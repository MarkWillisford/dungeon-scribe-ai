import React, { useMemo, useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { useAppDispatch } from '@/store/hooks';
import {
  renameCompanion,
  setCompanionNotes,
  swapCompanionForm,
} from '@/store/slices/characterEntrySlice';
import { CompanionService } from '@/services/CompanionService';
import { CompanionPickerSheet } from '@/components/character/direct-entry/CompanionPickerSheet';
import type { CompanionInstance } from '@/types/companions';
import type { AnimalCompanionEntry } from '@/types/animalCompanions';

export interface IdentitySectionProps {
  companion: CompanionInstance;
  entry: AnimalCompanionEntry | undefined;
}

export function IdentitySection({ companion, entry }: IdentitySectionProps) {
  const { colors, fantasy, isDark } = useTheme();
  const dispatch = useAppDispatch();
  const [swapOpen, setSwapOpen] = useState(false);

  // Use the computed stat block for size and special qualities so that
  // progression tiers (e.g. Medium → Large at effective level 7) are reflected.
  const baseStats = useMemo(() => {
    if (!entry) return undefined;
    return CompanionService.computeBaseStatBlock(entry, companion.effectiveProgressionLevel);
  }, [entry, companion.effectiveProgressionLevel]);

  const handleNameChange = (text: string) => {
    dispatch(renameCompanion({ instanceId: companion.instanceId, name: text }));
  };

  const handleNotesChange = (text: string) => {
    dispatch(setCompanionNotes({ instanceId: companion.instanceId, notes: text }));
  };

  const handleSwap = (newEntry: AnimalCompanionEntry) => {
    dispatch(swapCompanionForm({ instanceId: companion.instanceId, sourceEntryId: newEntry.id }));
    setSwapOpen(false);
  };

  return (
    <View style={styles.container}>
      <Field label="Name">
        <TextInput
          value={companion.name}
          onChangeText={handleNameChange}
          placeholder="e.g. Shadow"
          placeholderTextColor={colors.text.tertiary}
          style={[
            styles.input,
            {
              color: colors.text.primary,
              backgroundColor: isDark ? colors.bg.tertiary : colors.bg.primary,
              borderColor: colors.border.DEFAULT,
            },
          ]}
        />
      </Field>

      <Field label="Form">
        <View style={styles.formRow}>
          <View
            style={[
              styles.chip,
              {
                borderColor: colors.border.DEFAULT,
                backgroundColor: isDark ? colors.bg.tertiary : colors.bg.primary,
              },
            ]}
          >
            <Text style={[styles.chipText, { color: colors.text.primary }]}>
              {entry?.name ?? companion.sourceEntryId}
            </Text>
          </View>
          <Pressable
            onPress={() => setSwapOpen(true)}
            style={styles.swapBtn}
            accessibilityRole="button"
            accessibilityLabel="Swap companion form"
          >
            <Text style={[styles.swapText, { color: isDark ? fantasy.gold : fantasy.darkWood }]}>
              Swap ›
            </Text>
          </Pressable>
        </View>
      </Field>

      <Field label="Size">
        <Text style={[styles.readonly, { color: colors.text.secondary }]}>
          {baseStats?.size ?? entry?.size ?? '—'}
        </Text>
      </Field>

      <Field label="Type">
        <Text style={[styles.readonly, { color: colors.text.secondary }]}>
          {entry?.companionType ?? '—'}
        </Text>
      </Field>

      <Field label="Special Qualities">
        {(baseStats?.specialQualities ?? entry?.specialQualities ?? []).length ? (
          <View style={styles.qualitiesList}>
            {(baseStats?.specialQualities ?? entry?.specialQualities ?? []).map((q) => (
              <Text key={q} style={[styles.qualityItem, { color: colors.text.secondary }]}>
                • {q}
              </Text>
            ))}
          </View>
        ) : (
          <Text style={[styles.readonly, { color: colors.text.tertiary }]}>none</Text>
        )}
      </Field>

      <Field label="Notes">
        <TextInput
          value={companion.notes}
          onChangeText={handleNotesChange}
          placeholder="Freeform notes — behavior, lore, combat habits..."
          placeholderTextColor={colors.text.tertiary}
          multiline
          numberOfLines={4}
          textAlignVertical="top"
          style={[
            styles.input,
            styles.multiline,
            {
              color: colors.text.primary,
              backgroundColor: isDark ? colors.bg.tertiary : colors.bg.primary,
              borderColor: colors.border.DEFAULT,
            },
          ]}
        />
      </Field>

      <CompanionPickerSheet
        visible={swapOpen}
        title="Swap Companion Form"
        pickerFilter="full"
        onSelect={handleSwap}
        onClose={() => setSwapOpen(false)}
      />
    </View>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  const { colors } = useTheme();
  return (
    <View style={styles.field}>
      <Text style={[styles.fieldLabel, { color: colors.text.tertiary }]}>{label}</Text>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { gap: 16 },
  field: { gap: 6 },
  fieldLabel: {
    fontFamily: 'Cinzel',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  input: {
    fontFamily: 'LibreBaskerville',
    fontSize: 15,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 8,
    minHeight: 44,
  },
  multiline: {
    minHeight: 96,
    paddingTop: 10,
  },
  readonly: {
    fontFamily: 'LibreBaskerville',
    fontSize: 15,
    paddingHorizontal: 4,
  },
  formRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  chip: {
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  chipText: {
    fontFamily: 'LibreBaskerville',
    fontSize: 14,
    fontWeight: '700',
  },
  swapBtn: { paddingVertical: 4, paddingHorizontal: 8 },
  swapText: {
    fontFamily: 'Cinzel',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  qualitiesList: { gap: 2 },
  qualityItem: {
    fontFamily: 'LibreBaskerville',
    fontSize: 14,
  },
});
