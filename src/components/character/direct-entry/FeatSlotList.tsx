import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  assignFeat,
  unassignFeat,
  removeFeatSlot,
  addFeatSlot,
  toggleFeatPrereqOverride,
} from '@/store/slices/characterEntrySlice';
import { FeatPickerSheet } from './FeatPickerSheet';
import { type DraftFeatSlot, type FeatSlotSource } from '@/types/characterDraft';

function genId(): string {
  return Math.random().toString(36).slice(2) + Date.now().toString(36);
}

// ---- Source badge ----

const SOURCE_COLORS: Record<FeatSlotSource, { bg: string; text: string }> = {
  racial: { bg: 'rgba(212,175,55,0.2)', text: '#D4AF37' },
  level: { bg: 'rgba(59,130,246,0.15)', text: '#3B82F6' },
  bonus: { bg: 'rgba(16,185,129,0.15)', text: '#10B981' },
  mythic: { bg: 'rgba(139,92,246,0.15)', text: '#8B5CF6' },
};

function SourceBadge({ source }: { source: FeatSlotSource }) {
  const col = SOURCE_COLORS[source];
  return (
    <View style={[badgeStyles.badge, { backgroundColor: col.bg }]}>
      <Text style={[badgeStyles.text, { color: col.text }]}>{source.toUpperCase()}</Text>
    </View>
  );
}

const badgeStyles = StyleSheet.create({
  badge: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  text: {
    fontFamily: 'Cinzel',
    fontSize: 8,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
});

// ---- Feat slot row ----

interface FeatSlotRowProps {
  slot: DraftFeatSlot;
}

function FeatSlotRow({ slot }: FeatSlotRowProps) {
  const { colors, fantasy, isDark } = useTheme();
  const dispatch = useAppDispatch();
  const [pickerOpen, setPickerOpen] = useState(false);

  const assigned = !!slot.featName;

  return (
    <>
      <Pressable
        onPress={() => setPickerOpen(true)}
        style={[rowStyles.row, { borderBottomColor: colors.border.DEFAULT }]}
        accessibilityRole="button"
        accessibilityLabel={`${slot.availableAt}: ${slot.featName ?? 'unassigned'}`}
        accessibilityHint="Tap to assign feat"
      >
        {/* Source badge */}
        <SourceBadge source={slot.source} />

        {/* Available at */}
        <Text style={[rowStyles.atLabel, { color: colors.text.tertiary }]}>{slot.availableAt}</Text>

        {/* Feat name */}
        <Text
          style={[
            rowStyles.featName,
            {
              color: assigned ? colors.text.primary : colors.text.tertiary,
              fontStyle: assigned ? 'normal' : 'italic',
            },
          ]}
          numberOfLines={1}
        >
          {slot.featName ?? '—— unassigned ——'}
        </Text>

        {/* Unassign / remove */}
        <View style={rowStyles.actions}>
          {assigned && (
            <Pressable
              onPress={() => dispatch(unassignFeat(slot.id))}
              hitSlop={8}
              accessibilityRole="button"
              accessibilityLabel="Unassign feat"
            >
              <Text style={[rowStyles.actionIcon, { color: colors.text.tertiary }]}>✕</Text>
            </Pressable>
          )}
          {slot.source === 'bonus' && (
            <Pressable
              onPress={() => dispatch(removeFeatSlot(slot.id))}
              hitSlop={8}
              accessibilityRole="button"
              accessibilityLabel="Remove bonus slot"
            >
              <Text style={[rowStyles.actionIcon, { color: colors.text.tertiary }]}>🗑</Text>
            </Pressable>
          )}
        </View>
      </Pressable>

      {/* Prereq override row (shown when a feat is assigned) */}
      {assigned && (
        <Pressable
          onPress={() => dispatch(toggleFeatPrereqOverride(slot.id))}
          style={[rowStyles.prereqRow, { borderBottomColor: colors.border.DEFAULT }]}
          accessibilityRole="checkbox"
          accessibilityState={{ checked: slot.prereqOverride }}
        >
          <View
            style={[
              rowStyles.checkbox,
              {
                borderColor: slot.prereqOverride ? '#10B981' : colors.border.DEFAULT,
                backgroundColor: slot.prereqOverride ? 'rgba(16,185,129,0.15)' : 'transparent',
              },
            ]}
          >
            {slot.prereqOverride && (
              <Text style={[rowStyles.checkmark, { color: '#10B981' }]}>✓</Text>
            )}
          </View>
          <Text
            style={[
              rowStyles.prereqLabel,
              {
                color: slot.prereqOverride ? '#10B981' : colors.text.tertiary,
              },
            ]}
          >
            {slot.prereqOverride ? 'Prereqs: trust player' : 'Prereqs: not checked'}
          </Text>
        </Pressable>
      )}

      <FeatPickerSheet
        visible={pickerOpen}
        title={`${slot.availableAt} — Assign Feat`}
        onSelect={({ featId, featName }) => {
          dispatch(assignFeat({ slotId: slot.id, featId, featName }));
          setPickerOpen(false);
        }}
        onClose={() => setPickerOpen(false)}
      />
    </>
  );
}

const rowStyles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    gap: 8,
  },
  atLabel: {
    fontFamily: 'Cinzel',
    fontSize: 10,
    fontWeight: '700',
    width: 52,
  },
  featName: {
    flex: 1,
    fontFamily: 'LibreBaskerville',
    fontSize: 14,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  actionIcon: {
    fontSize: 14,
    fontWeight: '700',
  },
  prereqRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderBottomWidth: StyleSheet.hairlineWidth,
    gap: 8,
    paddingLeft: 100,
  },
  checkbox: {
    width: 16,
    height: 16,
    borderRadius: 3,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkmark: {
    fontSize: 10,
    fontWeight: '700',
    lineHeight: 12,
  },
  prereqLabel: {
    fontFamily: 'LibreBaskerville',
    fontSize: 11,
    fontStyle: 'italic',
  },
});

// ---- Main component ----

export function FeatSlotList() {
  const { colors, fantasy, isDark } = useTheme();
  const dispatch = useAppDispatch();
  const featSlots = useAppSelector((state) => state.characterEntry.draft.featSlots);

  const total = featSlots.length;
  const assigned = featSlots.filter((s) => !!s.featName).length;

  return (
    <View style={styles.container}>
      {/* Summary */}
      <View
        style={[
          styles.summaryRow,
          {
            backgroundColor: isDark ? colors.bg.secondary : colors.bg.tertiary,
            borderColor: colors.border.DEFAULT,
          },
        ]}
      >
        <Text style={[styles.summaryText, { color: colors.text.secondary }]}>
          Slots:{' '}
          <Text style={{ fontWeight: '700', color: isDark ? fantasy.gold : fantasy.bronze }}>
            {assigned}
          </Text>
          <Text>
            {' / '}
            {total} assigned
          </Text>
        </Text>
      </View>

      {/* Slot list */}
      {featSlots.length > 0 ? (
        <View
          style={[
            styles.listPanel,
            {
              backgroundColor: isDark ? colors.bg.secondary : colors.bg.primary,
              borderColor: colors.border.DEFAULT,
            },
          ]}
        >
          {featSlots.map((slot) => (
            <FeatSlotRow key={slot.id} slot={slot} />
          ))}
        </View>
      ) : (
        <View style={styles.emptyState}>
          <Text style={[styles.emptyText, { color: colors.text.tertiary }]}>
            No feat slots yet — add classes to generate level feat slots, or add a bonus slot below.
          </Text>
        </View>
      )}

      {/* Add bonus slot */}
      <Pressable
        onPress={() =>
          dispatch(
            addFeatSlot({
              id: genId(),
              source: 'bonus',
              availableAt: 'Bonus',
              availableAtLevel: 0,
              prereqOverride: false,
            }),
          )
        }
        style={[styles.addButton, { borderColor: colors.border.DEFAULT }]}
        accessibilityRole="button"
        accessibilityLabel="Add bonus feat slot"
      >
        <Text style={[styles.addButtonText, { color: colors.text.tertiary }]}>
          + Add bonus slot
        </Text>
      </Pressable>
    </View>
  );
}

// ---- Styles ----

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
  summaryRow: {
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  summaryText: {
    fontFamily: 'LibreBaskerville',
    fontSize: 13,
  },
  listPanel: {
    borderRadius: 10,
    borderWidth: 1,
    overflow: 'hidden',
  },
  emptyState: {
    paddingVertical: 32,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  emptyText: {
    fontFamily: 'LibreBaskerville',
    fontSize: 13,
    fontStyle: 'italic',
    textAlign: 'center',
    lineHeight: 18,
  },
  addButton: {
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
