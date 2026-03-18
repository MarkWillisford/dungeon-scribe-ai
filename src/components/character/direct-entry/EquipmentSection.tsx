import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, Modal, StyleSheet, ScrollView } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  addWeapon,
  removeWeapon,
  updateWeapon,
  addArmor,
  removeArmor,
  updateArmor,
  addMagicItem,
  removeMagicItem,
  updateMagicItem,
} from '@/store/slices/characterEntrySlice';
import { type DraftWeapon, type DraftArmor, type DraftMagicItem } from '@/types/characterDraft';

function genId(): string {
  return Math.random().toString(36).slice(2) + Date.now().toString(36);
}

// ---- Shared helpers ----

interface LabeledInputProps {
  label: string;
  value: string;
  onChangeText: (t: string) => void;
  placeholder?: string;
  keyboardType?: 'default' | 'number-pad' | 'numbers-and-punctuation';
  multiline?: boolean;
}

function LabeledInput({
  label,
  value,
  onChangeText,
  placeholder,
  keyboardType = 'default',
  multiline = false,
}: LabeledInputProps) {
  const { colors, fantasy, isDark } = useTheme();
  return (
    <View style={inputStyles.wrapper}>
      <Text style={[inputStyles.label, { color: colors.text.secondary }]}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.text.tertiary}
        keyboardType={keyboardType}
        selectTextOnFocus
        multiline={multiline}
        numberOfLines={multiline ? 3 : 1}
        style={[
          inputStyles.input,
          multiline && inputStyles.multiline,
          {
            color: colors.text.primary,
            borderColor: value ? (isDark ? fantasy.gold : fantasy.bronze) : colors.border.DEFAULT,
            backgroundColor: isDark ? colors.bg.tertiary : colors.bg.secondary,
          },
        ]}
      />
    </View>
  );
}

const inputStyles = StyleSheet.create({
  wrapper: {
    gap: 4,
    marginBottom: 8,
  },
  label: {
    fontFamily: 'LibreBaskerville',
    fontSize: 12,
    fontWeight: '600',
  },
  input: {
    fontFamily: 'LibreBaskerville',
    fontSize: 14,
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 8,
    minHeight: 40,
  },
  multiline: {
    minHeight: 72,
    textAlignVertical: 'top',
  },
});

// ---- Section subheader ----

function SubHeader({ title }: { title: string }) {
  const { colors, fantasy, isDark } = useTheme();
  return (
    <Text style={[subStyles.title, { color: isDark ? fantasy.gold : fantasy.darkWood }]}>
      {title}
    </Text>
  );
}

const subStyles = StyleSheet.create({
  title: {
    fontFamily: 'Cinzel',
    fontSize: 13,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginTop: 4,
    marginBottom: 6,
  },
});

// ---- Add button ----

function AddButton({ label, onPress }: { label: string; onPress: () => void }) {
  const { colors, fantasy, isDark } = useTheme();
  return (
    <Pressable
      onPress={onPress}
      style={[addBtnStyles.button, { borderColor: isDark ? fantasy.gold : colors.border.DEFAULT }]}
      accessibilityRole="button"
    >
      <Text style={[addBtnStyles.text, { color: isDark ? fantasy.gold : fantasy.darkWood }]}>
        {label}
      </Text>
    </Pressable>
  );
}

const addBtnStyles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderRadius: 8,
    borderStyle: 'dashed',
    paddingVertical: 10,
    alignItems: 'center',
    marginBottom: 8,
  },
  text: {
    fontFamily: 'LibreBaskerville',
    fontSize: 13,
    fontWeight: '600',
  },
});

// ================================================================
// WEAPON
// ================================================================

interface WeaponEditModalProps {
  visible: boolean;
  initial: DraftWeapon;
  onSave: (w: DraftWeapon) => void;
  onClose: () => void;
}

function WeaponEditModal({ visible, initial, onSave, onClose }: WeaponEditModalProps) {
  const { colors, fantasy, isDark } = useTheme();
  const [draft, setDraft] = useState<DraftWeapon>(initial);

  const patch = (p: Partial<DraftWeapon>) => setDraft((d) => ({ ...d, ...p }));

  const handleSave = () => {
    onSave(draft);
    onClose();
  };

  // Reset when modal opens
  React.useEffect(() => {
    if (visible) setDraft(initial);
  }, [visible, initial]);

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <View
        style={[
          modalStyles.container,
          { backgroundColor: isDark ? colors.bg.primary : colors.bg.secondary },
        ]}
      >
        <View style={[modalStyles.header, { borderBottomColor: colors.border.DEFAULT }]}>
          <Text style={[modalStyles.title, { color: isDark ? fantasy.gold : fantasy.darkWood }]}>
            Weapon
          </Text>
          <Pressable onPress={onClose} hitSlop={12}>
            <Text style={[modalStyles.closeText, { color: colors.text.tertiary }]}>✕</Text>
          </Pressable>
        </View>
        <ScrollView style={modalStyles.body} keyboardShouldPersistTaps="handled">
          <LabeledInput
            label="Name"
            value={draft.name}
            onChangeText={(t) => patch({ name: t })}
            placeholder="e.g. Mace +4"
          />
          <LabeledInput
            label="Attack bonus"
            value={String(draft.attackBonus)}
            onChangeText={(t) => patch({ attackBonus: parseInt(t, 10) || 0 })}
            keyboardType="numbers-and-punctuation"
            placeholder="+0"
          />
          <LabeledInput
            label="Damage"
            value={draft.damage}
            onChangeText={(t) => patch({ damage: t })}
            placeholder="1d8+8"
          />
          <LabeledInput
            label="Damage type"
            value={draft.damageType}
            onChangeText={(t) => patch({ damageType: t })}
            placeholder="B / P / S"
          />
          <LabeledInput
            label="Crit range"
            value={draft.critRange}
            onChangeText={(t) => patch({ critRange: t })}
            placeholder="20"
          />
          <LabeledInput
            label="Crit multiplier"
            value={String(draft.critMultiplier)}
            onChangeText={(t) => patch({ critMultiplier: parseInt(t, 10) || 2 })}
            keyboardType="number-pad"
            placeholder="2"
          />
        </ScrollView>
        <Pressable
          onPress={handleSave}
          style={[
            modalStyles.saveButton,
            { backgroundColor: isDark ? fantasy.gold : fantasy.darkWood },
          ]}
        >
          <Text style={[modalStyles.saveText, { color: isDark ? '#1a1208' : '#FFFFFF' }]}>
            Save Weapon
          </Text>
        </Pressable>
      </View>
    </Modal>
  );
}

function WeaponCard({ weapon }: { weapon: DraftWeapon }) {
  const { colors, fantasy, isDark } = useTheme();
  const dispatch = useAppDispatch();
  const [editing, setEditing] = useState(false);

  const fmtBonus = (n: number) => (n >= 0 ? `+${n}` : `${n}`);

  return (
    <>
      <View
        style={[
          cardStyles.card,
          {
            backgroundColor: isDark ? colors.bg.secondary : colors.bg.primary,
            borderColor: colors.border.DEFAULT,
          },
        ]}
      >
        <View style={cardStyles.row}>
          <Text style={[cardStyles.name, { color: isDark ? fantasy.gold : fantasy.darkWood }]}>
            {weapon.name || 'Unnamed Weapon'}
          </Text>
          <Pressable
            onPress={() => setEditing(true)}
            style={cardStyles.iconBtn}
            hitSlop={8}
            accessibilityRole="button"
            accessibilityLabel="Edit weapon"
          >
            <Text style={[cardStyles.iconText, { color: colors.text.secondary }]}>✎</Text>
          </Pressable>
          <Pressable
            onPress={() => dispatch(removeWeapon(weapon.id))}
            style={cardStyles.iconBtn}
            hitSlop={8}
            accessibilityRole="button"
            accessibilityLabel={`Remove ${weapon.name}`}
          >
            <Text style={[cardStyles.iconText, { color: colors.text.tertiary }]}>✕</Text>
          </Pressable>
        </View>
        <Text style={[cardStyles.detail, { color: colors.text.secondary }]}>
          {fmtBonus(weapon.attackBonus)} melee · {weapon.damage} · {weapon.damageType} ·{' '}
          {weapon.critRange}/×{weapon.critMultiplier}
        </Text>
      </View>

      <WeaponEditModal
        visible={editing}
        initial={weapon}
        onSave={(w) => dispatch(updateWeapon(w))}
        onClose={() => setEditing(false)}
      />
    </>
  );
}

// ================================================================
// ARMOR
// ================================================================

interface ArmorEditModalProps {
  visible: boolean;
  initial: DraftArmor;
  onSave: (a: DraftArmor) => void;
  onClose: () => void;
}

function ArmorEditModal({ visible, initial, onSave, onClose }: ArmorEditModalProps) {
  const { colors, fantasy, isDark } = useTheme();
  const [draft, setDraft] = useState<DraftArmor>(initial);
  const patch = (p: Partial<DraftArmor>) => setDraft((d) => ({ ...d, ...p }));

  React.useEffect(() => {
    if (visible) setDraft(initial);
  }, [visible, initial]);

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <View
        style={[
          modalStyles.container,
          { backgroundColor: isDark ? colors.bg.primary : colors.bg.secondary },
        ]}
      >
        <View style={[modalStyles.header, { borderBottomColor: colors.border.DEFAULT }]}>
          <Text style={[modalStyles.title, { color: isDark ? fantasy.gold : fantasy.darkWood }]}>
            Armor
          </Text>
          <Pressable onPress={onClose} hitSlop={12}>
            <Text style={[modalStyles.closeText, { color: colors.text.tertiary }]}>✕</Text>
          </Pressable>
        </View>
        <ScrollView style={modalStyles.body} keyboardShouldPersistTaps="handled">
          <LabeledInput
            label="Name"
            value={draft.name}
            onChangeText={(t) => patch({ name: t })}
            placeholder="e.g. Mithral Full Plate +3"
          />
          <LabeledInput
            label="AC bonus"
            value={String(draft.acBonus)}
            onChangeText={(t) => patch({ acBonus: parseInt(t, 10) || 0 })}
            keyboardType="number-pad"
            placeholder="0"
          />
          <LabeledInput
            label="Max Dex"
            value={draft.maxDex !== undefined ? String(draft.maxDex) : ''}
            onChangeText={(t) => patch({ maxDex: t ? parseInt(t, 10) || 0 : undefined })}
            keyboardType="number-pad"
            placeholder="—"
          />
          <LabeledInput
            label="ACP"
            value={String(draft.acp)}
            onChangeText={(t) => patch({ acp: parseInt(t, 10) || 0 })}
            keyboardType="numbers-and-punctuation"
            placeholder="0"
          />
        </ScrollView>
        <Pressable
          onPress={() => {
            onSave(draft);
            onClose();
          }}
          style={[
            modalStyles.saveButton,
            { backgroundColor: isDark ? fantasy.gold : fantasy.darkWood },
          ]}
        >
          <Text style={[modalStyles.saveText, { color: isDark ? '#1a1208' : '#FFFFFF' }]}>
            Save Armor
          </Text>
        </Pressable>
      </View>
    </Modal>
  );
}

function ArmorCard({ armor }: { armor: DraftArmor }) {
  const { colors, fantasy, isDark } = useTheme();
  const dispatch = useAppDispatch();
  const [editing, setEditing] = useState(false);

  return (
    <>
      <View
        style={[
          cardStyles.card,
          {
            backgroundColor: isDark ? colors.bg.secondary : colors.bg.primary,
            borderColor: colors.border.DEFAULT,
          },
        ]}
      >
        <View style={cardStyles.row}>
          <Text style={[cardStyles.name, { color: isDark ? fantasy.gold : fantasy.darkWood }]}>
            {armor.name || 'Unnamed Armor'}
          </Text>
          <Pressable
            onPress={() => setEditing(true)}
            style={cardStyles.iconBtn}
            hitSlop={8}
            accessibilityRole="button"
            accessibilityLabel="Edit armor"
          >
            <Text style={[cardStyles.iconText, { color: colors.text.secondary }]}>✎</Text>
          </Pressable>
          <Pressable
            onPress={() => dispatch(removeArmor(armor.id))}
            style={cardStyles.iconBtn}
            hitSlop={8}
            accessibilityRole="button"
            accessibilityLabel={`Remove ${armor.name}`}
          >
            <Text style={[cardStyles.iconText, { color: colors.text.tertiary }]}>✕</Text>
          </Pressable>
        </View>
        <Text style={[cardStyles.detail, { color: colors.text.secondary }]}>
          AC +{armor.acBonus}
          {armor.maxDex !== undefined ? ` · Max Dex +${armor.maxDex}` : ''}
          {armor.acp !== 0 ? ` · ACP ${armor.acp}` : ''}
        </Text>
      </View>

      <ArmorEditModal
        visible={editing}
        initial={armor}
        onSave={(a) => dispatch(updateArmor(a))}
        onClose={() => setEditing(false)}
      />
    </>
  );
}

// ================================================================
// MAGIC ITEM
// ================================================================

interface ItemEditModalProps {
  visible: boolean;
  initial: DraftMagicItem;
  onSave: (item: DraftMagicItem) => void;
  onClose: () => void;
}

function ItemEditModal({ visible, initial, onSave, onClose }: ItemEditModalProps) {
  const { colors, fantasy, isDark } = useTheme();
  const [draft, setDraft] = useState<DraftMagicItem>(initial);
  const patch = (p: Partial<DraftMagicItem>) => setDraft((d) => ({ ...d, ...p }));

  React.useEffect(() => {
    if (visible) setDraft(initial);
  }, [visible, initial]);

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <View
        style={[
          modalStyles.container,
          { backgroundColor: isDark ? colors.bg.primary : colors.bg.secondary },
        ]}
      >
        <View style={[modalStyles.header, { borderBottomColor: colors.border.DEFAULT }]}>
          <Text style={[modalStyles.title, { color: isDark ? fantasy.gold : fantasy.darkWood }]}>
            Magic Item
          </Text>
          <Pressable onPress={onClose} hitSlop={12}>
            <Text style={[modalStyles.closeText, { color: colors.text.tertiary }]}>✕</Text>
          </Pressable>
        </View>
        <ScrollView style={modalStyles.body} keyboardShouldPersistTaps="handled">
          <LabeledInput
            label="Name"
            value={draft.name}
            onChangeText={(t) => patch({ name: t })}
            placeholder="e.g. Orange Ioun Stone"
          />
          <LabeledInput
            label="Description / Effect"
            value={draft.description}
            onChangeText={(t) => patch({ description: t })}
            placeholder="e.g. +1 CL all spells"
            multiline
          />
          <LabeledInput
            label="Auto-apply note"
            value={draft.autoApplyNote ?? ''}
            onChangeText={(t) => patch({ autoApplyNote: t || undefined })}
            placeholder="e.g. +1 CL → Divine pool (optional)"
          />
        </ScrollView>
        <Pressable
          onPress={() => {
            onSave(draft);
            onClose();
          }}
          style={[
            modalStyles.saveButton,
            { backgroundColor: isDark ? fantasy.gold : fantasy.darkWood },
          ]}
        >
          <Text style={[modalStyles.saveText, { color: isDark ? '#1a1208' : '#FFFFFF' }]}>
            Save Item
          </Text>
        </Pressable>
      </View>
    </Modal>
  );
}

function MagicItemCard({ item }: { item: DraftMagicItem }) {
  const { colors, fantasy, isDark } = useTheme();
  const dispatch = useAppDispatch();
  const [editing, setEditing] = useState(false);

  return (
    <>
      <View
        style={[
          cardStyles.card,
          {
            backgroundColor: isDark ? colors.bg.secondary : colors.bg.primary,
            borderColor: colors.border.DEFAULT,
          },
        ]}
      >
        <View style={cardStyles.row}>
          <Text style={[cardStyles.name, { color: isDark ? fantasy.gold : fantasy.darkWood }]}>
            {item.name || 'Unnamed Item'}
          </Text>
          <Pressable
            onPress={() => setEditing(true)}
            style={cardStyles.iconBtn}
            hitSlop={8}
            accessibilityRole="button"
            accessibilityLabel="Edit item"
          >
            <Text style={[cardStyles.iconText, { color: colors.text.secondary }]}>✎</Text>
          </Pressable>
          <Pressable
            onPress={() => dispatch(removeMagicItem(item.id))}
            style={cardStyles.iconBtn}
            hitSlop={8}
            accessibilityRole="button"
            accessibilityLabel={`Remove ${item.name}`}
          >
            <Text style={[cardStyles.iconText, { color: colors.text.tertiary }]}>✕</Text>
          </Pressable>
        </View>
        {item.description ? (
          <Text style={[cardStyles.detail, { color: colors.text.secondary }]} numberOfLines={2}>
            {item.description}
          </Text>
        ) : null}
        {item.autoApplyNote ? (
          <Text style={[cardStyles.autoApply, { color: isDark ? fantasy.gold : fantasy.bronze }]}>
            ⟳ {item.autoApplyNote}
          </Text>
        ) : null}
      </View>

      <ItemEditModal
        visible={editing}
        initial={item}
        onSave={(i) => dispatch(updateMagicItem(i))}
        onClose={() => setEditing(false)}
      />
    </>
  );
}

// ================================================================
// MAIN SECTION
// ================================================================

export function EquipmentSection() {
  const dispatch = useAppDispatch();
  const weapons = useAppSelector((state) => state.characterEntry.draft.weapons);
  const armor = useAppSelector((state) => state.characterEntry.draft.armor);
  const magicItems = useAppSelector((state) => state.characterEntry.draft.magicItems);

  const blankWeapon = (): DraftWeapon => ({
    id: genId(),
    name: '',
    attackBonus: 0,
    damage: '1d6',
    damageType: 'B',
    critRange: '20',
    critMultiplier: 2,
  });

  const blankArmor = (): DraftArmor => ({
    id: genId(),
    name: '',
    acBonus: 0,
    acp: 0,
  });

  const blankItem = (): DraftMagicItem => ({
    id: genId(),
    name: '',
    description: '',
  });

  return (
    <View style={styles.container}>
      {/* Weapons */}
      <SubHeader title="Weapons" />
      {weapons.map((w) => (
        <WeaponCard key={w.id} weapon={w} />
      ))}
      <AddButton label="+ Add Weapon" onPress={() => dispatch(addWeapon(blankWeapon()))} />

      {/* Armor */}
      <SubHeader title="Armor" />
      {armor.map((a) => (
        <ArmorCard key={a.id} armor={a} />
      ))}
      <AddButton label="+ Add Armor" onPress={() => dispatch(addArmor(blankArmor()))} />

      {/* Magic Items */}
      <SubHeader title="Magic Items" />
      {magicItems.map((item) => (
        <MagicItemCard key={item.id} item={item} />
      ))}
      <AddButton label="+ Add Magic Item" onPress={() => dispatch(addMagicItem(blankItem()))} />
    </View>
  );
}

// ---- Shared card styles ----

const cardStyles = StyleSheet.create({
  card: {
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 8,
    gap: 4,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  name: {
    flex: 1,
    fontFamily: 'LibreBaskerville',
    fontSize: 14,
    fontWeight: '700',
  },
  iconBtn: {
    padding: 4,
  },
  iconText: {
    fontSize: 16,
  },
  detail: {
    fontFamily: 'LibreBaskerville',
    fontSize: 12,
  },
  autoApply: {
    fontFamily: 'LibreBaskerville',
    fontSize: 11,
    fontStyle: 'italic',
  },
});

// ---- Modal styles ----

const modalStyles = StyleSheet.create({
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
  closeText: {
    fontSize: 18,
    fontWeight: '700',
    padding: 4,
  },
  body: {
    flex: 1,
    padding: 16,
  },
  saveButton: {
    margin: 16,
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
  },
  saveText: {
    fontFamily: 'Cinzel',
    fontSize: 14,
    fontWeight: '700',
  },
});

const styles = StyleSheet.create({
  container: {
    gap: 0,
  },
});
