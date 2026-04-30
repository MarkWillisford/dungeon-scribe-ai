import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  addEquipment,
  removeEquipment,
  assignEquipmentSlot,
  unassignEquipmentSlot,
} from '@/store/slices/characterEntrySlice';
import {
  EquipmentPickerSheet,
  type PickerSlot,
  type EquipmentPickerResult,
} from './EquipmentPickerSheet';
import type { EditorEquipmentItem, EditorEquippedSlot } from '@/types/character';

// ---- Helpers ----

function genId(): string {
  return Math.random().toString(36).slice(2) + Date.now().toString(36);
}

// ---- Slot grid layout ----

interface SlotCell {
  label: string;
  slot: EditorEquippedSlot | null;
}

const SLOT_ROWS: SlotCell[][] = [
  [
    { label: 'Head', slot: 'head' },
    { label: 'Headband', slot: 'headband' },
    { label: 'Eyes', slot: 'eyes' },
  ],
  [
    { label: 'Neck', slot: 'neck' },
    { label: 'Shoulders', slot: 'shoulders' },
    { label: 'Chest', slot: 'chest' },
  ],
  [
    { label: 'Body', slot: 'body' },
    { label: 'Belt', slot: 'belt' },
    { label: 'Wrists', slot: 'wrists' },
  ],
  [
    { label: 'Hands', slot: 'hands' },
    { label: 'Ring L', slot: 'ring_left' },
    { label: 'Ring R', slot: 'ring_right' },
  ],
  [
    { label: 'Feet', slot: 'feet' },
    { label: 'Armor', slot: 'armor' },
    { label: 'Shield', slot: 'shield' },
  ],
  [
    { label: 'Main Hand', slot: 'main_hand' },
    { label: 'Off Hand', slot: 'off_hand' },
    { label: '', slot: null },
  ],
];

// ---- SlotCellView ----

interface SlotCellProps {
  cell: SlotCell;
  equippedItem?: EditorEquipmentItem;
  onPickerOpen: (slot: EditorEquippedSlot) => void;
  onUnassign: (id: string) => void;
}

function SlotCellView({ cell, equippedItem, onPickerOpen, onUnassign }: SlotCellProps) {
  const { colors, fantasy, isDark } = useTheme();

  if (!cell.slot) {
    return <View style={styles.slotEmpty} />;
  }

  const isEmpty = !equippedItem;

  return (
    <View style={styles.slotCell}>
      <Text style={[styles.slotLabel, { color: colors.text.tertiary }]}>{cell.label}</Text>
      {isEmpty ? (
        <Pressable
          onPress={() => onPickerOpen(cell.slot!)}
          style={[
            styles.slotButton,
            {
              borderColor: isDark ? 'rgba(212,175,55,0.3)' : 'rgba(140,90,40,0.2)',
              backgroundColor: isDark ? colors.bg.tertiary : colors.bg.secondary,
            },
          ]}
          accessibilityRole="button"
          accessibilityLabel={`Equip ${cell.label}`}
        >
          <Text style={[styles.slotPlus, { color: isDark ? fantasy.gold : fantasy.darkWood }]}>
            +
          </Text>
        </Pressable>
      ) : (
        <View
          style={[
            styles.slotFilledButton,
            {
              borderColor: isDark ? fantasy.gold : fantasy.darkWood,
              backgroundColor: isDark ? 'rgba(212,175,55,0.12)' : 'rgba(140,90,40,0.08)',
            },
          ]}
        >
          <Text style={[styles.slotItemName, { color: colors.text.primary }]} numberOfLines={2}>
            {equippedItem.name}
          </Text>
          {equippedItem.allowsHandUse && (
            <Text style={[styles.bucklerNote, { color: fantasy.gold }]}>off-hand free</Text>
          )}
          <Pressable
            onPress={() => onUnassign(equippedItem.id)}
            hitSlop={8}
            style={styles.removeBtn}
          >
            <Text style={[styles.removeBtnText, { color: colors.text.tertiary }]}>✕</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}

// ---- ContainerList ----

interface ContainerListProps {
  containers: EditorEquipmentItem[];
  equipment: EditorEquipmentItem[];
  onPickerOpen: (slot: PickerSlot) => void;
  onRemove: (id: string) => void;
}

function ContainerList({ containers, equipment, onPickerOpen, onRemove }: ContainerListProps) {
  const { colors, isDark } = useTheme();
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  const toggle = (id: string) =>
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  return (
    <View style={styles.subSection}>
      {containers.length > 0 && (
        <>
          <Text style={[styles.subSectionLabel, { color: colors.text.tertiary }]}>Containers</Text>
          {containers.map((bag) => {
            const contents = equipment.filter((e) => e.containerId === bag.id);
            const isOpen = expanded.has(bag.id);
            return (
              <View
                key={bag.id}
                style={[
                  styles.containerCard,
                  {
                    borderColor: colors.border.DEFAULT,
                    backgroundColor: isDark ? colors.bg.secondary : colors.bg.primary,
                  },
                ]}
              >
                <Pressable onPress={() => toggle(bag.id)} style={styles.containerHeader}>
                  <Text style={[styles.containerName, { color: colors.text.primary }]}>
                    {bag.name}
                  </Text>
                  <Text style={[styles.containerCount, { color: colors.text.tertiary }]}>
                    {contents.length} item{contents.length !== 1 ? 's' : ''} {isOpen ? '▲' : '▼'}
                  </Text>
                  <Pressable onPress={() => onRemove(bag.id)} hitSlop={8}>
                    <Text style={[styles.removeBtnText, { color: colors.text.tertiary }]}>✕</Text>
                  </Pressable>
                </Pressable>
                {isOpen && (
                  <View
                    style={[styles.containerContents, { borderTopColor: colors.border.DEFAULT }]}
                  >
                    {contents.length === 0 ? (
                      <Text style={[styles.emptyContainerText, { color: colors.text.tertiary }]}>
                        Empty
                      </Text>
                    ) : (
                      contents.map((item) => (
                        <View key={item.id} style={styles.containerItem}>
                          <Text style={[styles.containerItemName, { color: colors.text.primary }]}>
                            {item.name}
                          </Text>
                          <Pressable onPress={() => onRemove(item.id)} hitSlop={8}>
                            <Text style={[styles.removeBtnText, { color: colors.text.tertiary }]}>
                              ✕
                            </Text>
                          </Pressable>
                        </View>
                      ))
                    )}
                  </View>
                )}
              </View>
            );
          })}
        </>
      )}
      <Pressable
        onPress={() => onPickerOpen('none')}
        style={[styles.addButton, { borderColor: colors.border.DEFAULT }]}
        accessibilityRole="button"
      >
        <Text style={[styles.addButtonText, { color: colors.text.tertiary }]}>+ Add Container</Text>
      </Pressable>
    </View>
  );
}

// ---- IounStoneSection ----

interface IounStoneSectionProps {
  stones: EditorEquipmentItem[];
  onPickerOpen: (slot: PickerSlot) => void;
  onRemove: (id: string) => void;
}

function IounStoneSection({ stones, onPickerOpen, onRemove }: IounStoneSectionProps) {
  const { colors } = useTheme();

  return (
    <View style={styles.subSection}>
      {stones.length > 0 && (
        <>
          <Text style={[styles.subSectionLabel, { color: colors.text.tertiary }]}>
            Orbiting Ioun Stones
          </Text>
          {stones.map((stone) => (
            <View
              key={stone.id}
              style={[
                styles.iounRow,
                { borderColor: colors.border.DEFAULT, backgroundColor: colors.bg.secondary },
              ]}
            >
              <Text style={[styles.iounName, { color: colors.text.primary }]}>{stone.name}</Text>
              <Pressable onPress={() => onRemove(stone.id)} hitSlop={8}>
                <Text style={[styles.removeBtnText, { color: colors.text.tertiary }]}>✕</Text>
              </Pressable>
            </View>
          ))}
        </>
      )}
      <Pressable
        onPress={() => onPickerOpen('orbiting')}
        style={[styles.addButton, { borderColor: colors.border.DEFAULT }]}
        accessibilityRole="button"
      >
        <Text style={[styles.addButtonText, { color: colors.text.tertiary }]}>
          + Add Orbiting Ioun Stone
        </Text>
      </Pressable>
    </View>
  );
}

// ---- CarriedList ----

function CarriedList({
  carried,
  onRemove,
}: {
  carried: EditorEquipmentItem[];
  onRemove: (id: string) => void;
}) {
  const { colors } = useTheme();

  if (carried.length === 0) return null;

  return (
    <View style={styles.subSection}>
      <Text style={[styles.subSectionLabel, { color: colors.text.tertiary }]}>Carried</Text>
      {carried.map((item) => (
        <View
          key={item.id}
          style={[
            styles.carriedRow,
            { borderColor: colors.border.DEFAULT, backgroundColor: colors.bg.secondary },
          ]}
        >
          <Text style={[styles.carriedName, { color: colors.text.primary }]}>{item.name}</Text>
          <Pressable onPress={() => onRemove(item.id)} hitSlop={8}>
            <Text style={[styles.removeBtnText, { color: colors.text.tertiary }]}>✕</Text>
          </Pressable>
        </View>
      ))}
    </View>
  );
}

// ---- Main Section ----

export function EquipmentSection() {
  const dispatch = useAppDispatch();
  const equipment = useAppSelector((state) => state.characterEntry.character.editorEquipment ?? []);
  const [pickerSlot, setPickerSlot] = useState<PickerSlot | null>(null);

  const slottedItems = equipment.filter((e) => e.slot !== undefined);
  const containers = equipment.filter((e) => e.isContainer && !e.slot);
  const iounStones = equipment.filter((e) => e.isOrbiting && !e.slot && !e.containerId);
  const carried = equipment.filter(
    (e) => !e.slot && !e.containerId && !e.isContainer && !e.isOrbiting,
  );

  const getItemForSlot = (slot: EditorEquippedSlot) => slottedItems.find((e) => e.slot === slot);

  const handlePickerSelect = (result: EquipmentPickerResult) => {
    if (!pickerSlot) return;
    const newItem: EditorEquipmentItem = {
      id: genId(),
      definitionId: result.definitionId,
      collection: result.collection,
      name: result.name,
      allowsHandUse: result.allowsHandUse,
      isContainer: result.isContainer,
      isOrbiting: pickerSlot === 'orbiting' || undefined,
      effects: result.effects,
    };
    dispatch(addEquipment(newItem));
    if (pickerSlot !== 'orbiting' && pickerSlot !== 'none') {
      dispatch(assignEquipmentSlot({ id: newItem.id, slot: pickerSlot as EditorEquippedSlot }));
    }
    setPickerSlot(null);
  };

  const handleAddCustom = (name: string) => {
    if (!pickerSlot) return;
    const newItem: EditorEquipmentItem = {
      id: genId(),
      collection: 'magicItems',
      name,
      isContainer: pickerSlot === 'none' || undefined,
      isOrbiting: pickerSlot === 'orbiting' || undefined,
    };
    dispatch(addEquipment(newItem));
    if (pickerSlot !== 'orbiting' && pickerSlot !== 'none') {
      dispatch(assignEquipmentSlot({ id: newItem.id, slot: pickerSlot as EditorEquippedSlot }));
    }
    setPickerSlot(null);
  };

  return (
    <View style={styles.container}>
      {/* Slot Grid */}
      <View style={styles.slotGrid}>
        {SLOT_ROWS.map((row, rowIdx) => (
          <View key={rowIdx} style={styles.slotRow}>
            {row.map((cell, colIdx) => (
              <SlotCellView
                key={cell.slot ?? `empty-${colIdx}`}
                cell={cell}
                equippedItem={cell.slot ? getItemForSlot(cell.slot) : undefined}
                onPickerOpen={(slot) => setPickerSlot(slot)}
                onUnassign={(id) => dispatch(unassignEquipmentSlot(id))}
              />
            ))}
          </View>
        ))}
      </View>

      {/* Containers */}
      <ContainerList
        containers={containers}
        equipment={equipment}
        onPickerOpen={(slot) => setPickerSlot(slot)}
        onRemove={(id) => dispatch(removeEquipment(id))}
      />

      {/* Ioun Stones */}
      <IounStoneSection
        stones={iounStones}
        onPickerOpen={(slot) => setPickerSlot(slot)}
        onRemove={(id) => dispatch(removeEquipment(id))}
      />

      {/* Carried */}
      <CarriedList carried={carried} onRemove={(id) => dispatch(removeEquipment(id))} />

      {/* Picker Modal */}
      {pickerSlot !== null && (
        <EquipmentPickerSheet
          visible
          slot={pickerSlot}
          onSelect={handlePickerSelect}
          onAddCustom={handleAddCustom}
          onClose={() => setPickerSlot(null)}
        />
      )}
    </View>
  );
}

// ---- Styles ----

const styles = StyleSheet.create({
  container: { gap: 16 },
  slotGrid: { gap: 6 },
  slotRow: { flexDirection: 'row', gap: 6 },
  slotCell: { flex: 1, gap: 3 },
  slotEmpty: { flex: 1 },
  slotLabel: {
    fontFamily: 'Cinzel',
    fontSize: 8,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    textAlign: 'center',
  },
  slotButton: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 8,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
  },
  slotPlus: { fontSize: 20, fontWeight: '300', lineHeight: 24 },
  slotFilledButton: {
    borderWidth: 1,
    borderRadius: 8,
    minHeight: 52,
    paddingHorizontal: 6,
    paddingVertical: 6,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
  },
  slotItemName: {
    fontFamily: 'LibreBaskerville',
    fontSize: 10,
    fontWeight: '700',
    textAlign: 'center',
  },
  bucklerNote: {
    fontFamily: 'LibreBaskerville',
    fontSize: 8,
    fontStyle: 'italic',
  },
  removeBtn: { position: 'absolute', top: 2, right: 4 },
  removeBtnText: { fontSize: 12, fontWeight: '700' },
  subSection: { gap: 6 },
  subSectionLabel: {
    fontFamily: 'Cinzel',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  containerCard: { borderWidth: 1, borderRadius: 8, overflow: 'hidden' },
  containerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
    gap: 8,
  },
  containerName: {
    fontFamily: 'LibreBaskerville',
    fontSize: 14,
    fontWeight: '700',
    flex: 1,
  },
  containerCount: { fontFamily: 'LibreBaskerville', fontSize: 12 },
  containerContents: {
    borderTopWidth: StyleSheet.hairlineWidth,
    paddingHorizontal: 12,
    paddingVertical: 8,
    gap: 6,
  },
  emptyContainerText: {
    fontFamily: 'LibreBaskerville',
    fontSize: 12,
    fontStyle: 'italic',
  },
  containerItem: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  containerItemName: { fontFamily: 'LibreBaskerville', fontSize: 13, flex: 1 },
  iounRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    gap: 8,
  },
  iounName: { fontFamily: 'LibreBaskerville', fontSize: 13, flex: 1 },
  carriedRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    gap: 8,
  },
  carriedName: { fontFamily: 'LibreBaskerville', fontSize: 13, flex: 1 },
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
