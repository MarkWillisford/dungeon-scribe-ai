import React, { useEffect, useMemo, useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { useAppDispatch } from '@/store/hooks';
import {
  equipCompanionMagicItem,
  unequipCompanionMagicItem,
} from '@/store/slices/characterEntrySlice';
import { CompanionService } from '@/services/CompanionService';
import { GameDataService } from '@/services/GameDataService';
import { SearchPickerSheet, type SearchItem } from '@/components/ui/SearchPickerSheet';
import type { CompanionInstance } from '@/types/companions';
import type { AnimalCompanionEntry } from '@/types/animalCompanions';
import type { MagicItemDefinition, ItemSlot, CharacterMagicItem } from '@/types/magicItems';
import type { CompanionSlotAccess } from '@/data/companions/bodyShapeSlots';

export interface EquipmentSectionProps {
  companion: CompanionInstance;
  entry: AnimalCompanionEntry | undefined;
}

// Labels humans read. Also drives what we call the slot in the picker title.
const SLOT_LABEL: Record<ItemSlot, string> = {
  armor: 'Armor / Barding',
  belt: 'Belt',
  body: 'Body',
  chest: 'Chest',
  eyes: 'Eyes',
  feet: 'Feet',
  hands: 'Hands',
  head: 'Head',
  headband: 'Headband',
  neck: 'Neck',
  ring: 'Ring',
  shield: 'Shield',
  shoulders: 'Shoulders',
  wrists: 'Wrists',
  main_hand: 'Main Hand',
  off_hand: 'Off Hand',
  none: 'Held / Slotless',
};

function genId(): string {
  return Math.random().toString(36).slice(2) + Date.now().toString(36);
}

export function EquipmentSection({ companion, entry }: EquipmentSectionProps) {
  const { colors } = useTheme();
  const dispatch = useAppDispatch();

  const [pickerSlot, setPickerSlot] = useState<ItemSlot | null>(null);
  const [pickerItems, setPickerItems] = useState<MagicItemDefinition[]>([]);

  // Compute the slot grid from the body shape. Feat-gated slots are filtered
  // out by CompanionService (they require Extra Item Slot to unlock) so the
  // builder only surfaces what the companion can actually use today.
  const availableSlots: CompanionSlotAccess[] = useMemo(() => {
    if (!entry) return [];
    return CompanionService.computeAvailableSlots(entry, companion);
  }, [entry, companion]);

  // Load magic items for the active picker slot. The connector's
  // getMagicItemsBySlot returns the full definition list for that slot;
  // we map to SearchItem at render time.
  useEffect(() => {
    if (!pickerSlot) return;
    let cancelled = false;
    GameDataService.getMagicItemsBySlot(pickerSlot)
      .then((items) => {
        if (!cancelled) setPickerItems(items);
      })
      .catch(() => {
        if (!cancelled) setPickerItems([]);
      });
    return () => {
      cancelled = true;
    };
  }, [pickerSlot]);

  const pickerSearchItems = useMemo<SearchItem[]>(
    () =>
      pickerItems.map((def) => ({
        key: def.id,
        label: def.name,
        subLabel: def.price != null ? `${def.price.toLocaleString()} gp` : 'priceless',
        category: def.category,
      })),
    [pickerItems],
  );

  const handlePick = (item: SearchItem) => {
    if (!pickerSlot) return;
    const def = pickerItems.find((d) => d.id === item.key);
    if (!def) return;
    const charItem: CharacterMagicItem = {
      instanceId: genId(),
      definitionId: def.id,
      name: def.name,
      equipped: true,
      identified: true,
    };
    dispatch(
      equipCompanionMagicItem({
        instanceId: companion.instanceId,
        slot: pickerSlot,
        item: charItem,
      }),
    );
    setPickerSlot(null);
  };

  if (!entry) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={[styles.emptyText, { color: colors.text.tertiary }]}>
          Entry definition missing — can&apos;t render equipment slots.
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.header, { color: colors.text.tertiary }]}>
        Slots available to a {entry.name.toLowerCase()} — {availableSlots.length} unlocked.
      </Text>

      {availableSlots.length === 0 ? (
        <View style={[styles.emptyPanel, { borderColor: colors.border.DEFAULT }]}>
          <Text style={[styles.emptyText, { color: colors.text.tertiary }]}>
            This companion&apos;s body shape has no automatic magic-item slots. Take the Extra Item
            Slot feat to unlock one.
          </Text>
        </View>
      ) : (
        <View style={styles.grid}>
          {availableSlots.map((access) => (
            <SlotCell
              key={access.slot}
              access={access}
              companion={companion}
              onOpenPicker={() => setPickerSlot(access.slot)}
              onUnequip={() =>
                dispatch(
                  unequipCompanionMagicItem({
                    instanceId: companion.instanceId,
                    slot: access.slot,
                  }),
                )
              }
            />
          ))}
        </View>
      )}

      <Text style={[styles.footer, { color: colors.text.tertiary }]}>
        Weapons, rods, staves, and wands require a grasping body shape and are not yet wired into
        the builder. Magic-item slots follow the Ultimate Wilderness p. 176 table.
      </Text>

      <SearchPickerSheet
        visible={pickerSlot !== null}
        title={pickerSlot ? `Equip ${SLOT_LABEL[pickerSlot]}` : 'Equip'}
        items={pickerSearchItems}
        onSelect={handlePick}
        onClose={() => setPickerSlot(null)}
        placeholder="Search magic items..."
      />
    </View>
  );
}

// ---- Slot cell ----

interface SlotCellProps {
  access: CompanionSlotAccess;
  companion: CompanionInstance;
  onOpenPicker: () => void;
  onUnequip: () => void;
}

function SlotCell({ access, companion, onOpenPicker, onUnequip }: SlotCellProps) {
  const { colors, fantasy, isDark } = useTheme();
  const equippedInstanceId = companion.equipment.equippedSlots.get(access.slot);
  const equippedItem = equippedInstanceId
    ? companion.equipment.magicItems.find((m) => m.instanceId === equippedInstanceId)
    : undefined;

  const isEmpty = !equippedItem;
  const restrictionNote = access.restriction
    ? access.restriction === 'saddle'
      ? 'saddles only'
      : 'horseshoes only'
    : null;

  return (
    <View style={styles.cell}>
      <Text style={[styles.cellLabel, { color: colors.text.tertiary }]}>
        {SLOT_LABEL[access.slot]}
      </Text>
      {restrictionNote && (
        <Text style={[styles.cellRestriction, { color: colors.text.tertiary }]}>
          ({restrictionNote})
        </Text>
      )}
      {isEmpty ? (
        <Pressable
          onPress={onOpenPicker}
          style={[
            styles.cellButton,
            {
              borderColor: isDark ? 'rgba(212,175,55,0.3)' : 'rgba(140,90,40,0.2)',
              backgroundColor: isDark ? colors.bg.tertiary : colors.bg.secondary,
            },
          ]}
          accessibilityRole="button"
          accessibilityLabel={`Equip ${SLOT_LABEL[access.slot]}`}
        >
          <Text style={[styles.cellPlus, { color: isDark ? fantasy.gold : fantasy.darkWood }]}>
            +
          </Text>
        </Pressable>
      ) : (
        <View
          style={[
            styles.cellFilled,
            {
              borderColor: isDark ? fantasy.gold : fantasy.darkWood,
              backgroundColor: isDark ? 'rgba(212,175,55,0.12)' : 'rgba(140,90,40,0.08)',
            },
          ]}
        >
          <Text style={[styles.cellItemName, { color: colors.text.primary }]} numberOfLines={2}>
            {equippedItem.name}
          </Text>
          <Pressable
            onPress={onUnequip}
            hitSlop={6}
            accessibilityRole="button"
            accessibilityLabel={`Unequip ${equippedItem.name}`}
            style={styles.cellRemove}
          >
            <Text style={[styles.cellRemoveIcon, { color: colors.text.tertiary }]}>✕</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { gap: 12 },
  header: {
    fontFamily: 'LibreBaskerville',
    fontSize: 12,
    fontStyle: 'italic',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  cell: {
    width: '31%',
    alignItems: 'center',
    gap: 2,
  },
  cellLabel: {
    fontFamily: 'Cinzel',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 0.3,
    textTransform: 'uppercase',
  },
  cellRestriction: {
    fontFamily: 'LibreBaskerville',
    fontSize: 9,
    fontStyle: 'italic',
  },
  cellButton: {
    width: '100%',
    height: 52,
    borderWidth: 1,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
  },
  cellPlus: {
    fontFamily: 'Cinzel',
    fontSize: 20,
    fontWeight: '700',
  },
  cellFilled: {
    width: '100%',
    minHeight: 52,
    borderWidth: 1,
    borderRadius: 6,
    padding: 6,
    marginTop: 2,
    position: 'relative',
  },
  cellItemName: {
    fontFamily: 'LibreBaskerville',
    fontSize: 11,
    textAlign: 'center',
    paddingRight: 14,
  },
  cellRemove: {
    position: 'absolute',
    top: 2,
    right: 4,
    padding: 2,
  },
  cellRemoveIcon: {
    fontSize: 11,
    fontWeight: '700',
  },
  emptyPanel: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  emptyText: {
    fontFamily: 'LibreBaskerville',
    fontSize: 13,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  emptyContainer: { padding: 32, alignItems: 'center' },
  footer: {
    fontFamily: 'LibreBaskerville',
    fontSize: 11,
    fontStyle: 'italic',
    paddingHorizontal: 4,
  },
});
