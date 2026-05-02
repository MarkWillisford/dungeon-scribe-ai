import React, { useState, useMemo } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  assignFeat,
  unassignFeat,
  removeFeatSlot,
  addFeatSlot,
  toggleFeatPrereqOverride,
  syncFeatSlots,
  setFeatChoices,
} from '@/store/slices/characterEntrySlice';
import { FeatPickerSheet } from './FeatPickerSheet';
import { SearchPickerSheet, type SearchItem } from '@/components/ui/SearchPickerSheet';
import { computeFeatSlots } from '@/utils/characterComputations';
import { FeatRegistryService } from '@/services/FeatRegistryService';
import type { FeatChoice } from '@/types/feats';

type FeatSlotSource = 'racial' | 'level' | 'bonus' | 'mythic';

function genId(): string {
  return Math.random().toString(36).slice(2) + Date.now().toString(36);
}

// ---- Display model ----

interface FeatSlotDisplay {
  slotId: string;
  source: FeatSlotSource;
  availableAt: string;
  availableAtLevel: number;
  featId: string;
  featName: string;
  prereqOverride: boolean;
  featChoices: Record<string, string>;
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
  slot: FeatSlotDisplay;
}

function FeatSlotRow({ slot }: FeatSlotRowProps) {
  const { colors } = useTheme();
  const dispatch = useAppDispatch();
  const [pickerOpen, setPickerOpen] = useState(false);
  const [activeChoicePicker, setActiveChoicePicker] = useState<FeatChoice | null>(null);

  const assigned = !!slot.featName;
  const featDef = assigned ? FeatRegistryService.getFeat(slot.featId) : undefined;
  const requiredChoices = featDef?.choices ?? [];

  // Build display suffix from stored choices, e.g. " (Necromancy)"
  const choiceSuffix = requiredChoices
    .map((c) => slot.featChoices[c.type])
    .filter(Boolean)
    .map((v) => v.charAt(0).toUpperCase() + v.slice(1))
    .join(', ');
  const displayName = assigned
    ? choiceSuffix
      ? `${slot.featName} (${choiceSuffix})`
      : slot.featName
    : '—— unassigned ——';

  const openNextUnfilledChoice = (
    choices: FeatChoice[],
    currentChoices: Record<string, string>,
  ) => {
    const next = choices.find((c) => !currentChoices[c.type]);
    if (next) setActiveChoicePicker(next);
  };

  const choiceItems: SearchItem[] = activeChoicePicker
    ? (activeChoicePicker.options ?? []).map((opt) => ({
        key: opt,
        label: opt.charAt(0).toUpperCase() + opt.slice(1),
      }))
    : [];

  return (
    <>
      <Pressable
        onPress={() => setPickerOpen(true)}
        style={[rowStyles.row, { borderBottomColor: colors.border.DEFAULT }]}
        accessibilityRole="button"
        accessibilityLabel={`${slot.availableAt}: ${displayName}`}
        accessibilityHint="Tap to assign feat"
      >
        <SourceBadge source={slot.source} />
        <Text style={[rowStyles.atLabel, { color: colors.text.tertiary }]}>{slot.availableAt}</Text>
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
          {displayName}
        </Text>
        <View style={rowStyles.actions}>
          {assigned && requiredChoices.some((c) => !slot.featChoices[c.type]) && (
            <Pressable
              onPress={() => openNextUnfilledChoice(requiredChoices, slot.featChoices)}
              hitSlop={8}
              accessibilityRole="button"
              accessibilityLabel="Choose feat option"
            >
              <Text style={[rowStyles.actionIcon, { color: '#F59E0B' }]}>⚙</Text>
            </Pressable>
          )}
          {assigned && (
            <Pressable
              onPress={() => dispatch(unassignFeat(slot.slotId))}
              hitSlop={8}
              accessibilityRole="button"
              accessibilityLabel="Unassign feat"
            >
              <Text style={[rowStyles.actionIcon, { color: colors.text.tertiary }]}>✕</Text>
            </Pressable>
          )}
          {slot.source === 'bonus' && (
            <Pressable
              onPress={() => dispatch(removeFeatSlot(slot.slotId))}
              hitSlop={8}
              accessibilityRole="button"
              accessibilityLabel="Remove bonus slot"
            >
              <Text style={[rowStyles.actionIcon, { color: colors.text.tertiary }]}>🗑</Text>
            </Pressable>
          )}
        </View>
      </Pressable>

      {assigned && (
        <Pressable
          onPress={() => dispatch(toggleFeatPrereqOverride(slot.slotId))}
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
              { color: slot.prereqOverride ? '#10B981' : colors.text.tertiary },
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
          dispatch(assignFeat({ slotId: slot.slotId, featId, featName }));
          setPickerOpen(false);
          const def = FeatRegistryService.getFeat(featId);
          if (def?.choices?.length) {
            openNextUnfilledChoice(def.choices, slot.featChoices);
          }
        }}
        onClose={() => setPickerOpen(false)}
      />

      {activeChoicePicker && (
        <SearchPickerSheet
          visible
          title={`${slot.featName} — ${activeChoicePicker.label}`}
          items={choiceItems}
          onSelect={(item) => {
            const updated = { ...slot.featChoices, [activeChoicePicker.type]: item.key };
            dispatch(setFeatChoices({ slotId: slot.slotId, choices: updated }));
            setActiveChoicePicker(null);
            if (featDef?.choices) {
              openNextUnfilledChoice(featDef.choices, updated);
            }
          }}
          onClose={() => setActiveChoicePicker(null)}
          placeholder={`Search ${activeChoicePicker.label.toLowerCase()}...`}
        />
      )}
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
  const character = useAppSelector((state) => state.characterEntry.character);

  // Build the display slot list by merging computed slots with assigned feats
  const featSlots = useMemo<FeatSlotDisplay[]>(() => {
    const computed = computeFeatSlots(character.classes.classes, character.info.race.name);

    // Build a map of slotId → assigned feat
    const assignedMap = new Map<
      string,
      { featId: string; name: string; prereqOverride?: boolean; choices: Record<string, string> }
    >();
    for (const f of character.feats.feats) {
      if (f.featId) {
        const key = `${f.source}_${f.grantedAtLevel}`;
        const entry = {
          featId: f.featId,
          name: f.name,
          prereqOverride: f.prereqOverride,
          choices: f.choices ?? {},
        };
        assignedMap.set(key, entry);
        assignedMap.set(f.source, entry);
      }
    }

    const slots: FeatSlotDisplay[] = computed.map((s) => {
      const slotId = `${s.source}_${s.availableAtLevel}`;
      const assigned = assignedMap.get(slotId);
      return {
        slotId,
        source: s.source as FeatSlotSource,
        availableAt: s.availableAt,
        availableAtLevel: s.availableAtLevel,
        featId: assigned?.featId ?? '',
        featName: assigned?.name ?? '',
        prereqOverride: assigned?.prereqOverride ?? false,
        featChoices: assigned?.choices ?? {},
      };
    });

    // Also include manually-added bonus slots that aren't in the computed list
    for (const f of character.feats.feats) {
      if (f.source === 'bonus') {
        const slotId = `bonus_${f.grantedAtLevel}`;
        if (!slots.find((s) => s.slotId === slotId)) {
          slots.push({
            slotId,
            source: 'bonus',
            availableAt: 'Bonus',
            availableAtLevel: f.grantedAtLevel,
            featId: f.featId,
            featName: f.name,
            prereqOverride: f.prereqOverride ?? false,
            featChoices: f.choices ?? {},
          });
        }
      }
    }

    return slots;
  }, [character.classes.classes, character.feats.feats, character.info.race.name]);

  const total = featSlots.length;
  const assignedCount = featSlots.filter((s) => !!s.featName).length;

  return (
    <View style={styles.container}>
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
            {assignedCount}
          </Text>
          <Text>
            {' / '}
            {total} assigned
          </Text>
        </Text>
      </View>

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
            <FeatSlotRow key={slot.slotId} slot={slot} />
          ))}
        </View>
      ) : (
        <View style={styles.emptyState}>
          <Text style={[styles.emptyText, { color: colors.text.tertiary }]}>
            No feat slots yet — add classes to generate level feat slots, or add a bonus slot below.
          </Text>
        </View>
      )}

      <Pressable
        onPress={() =>
          dispatch(
            addFeatSlot({
              id: genId(),
              source: 'bonus',
              availableAt: 'Bonus',
              availableAtLevel: 0,
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
