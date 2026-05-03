import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { BonusType } from '@/types/base';
import type { Effect, EffectTarget, EffectType } from '@/types/base';
import type { Character } from '@/types';
import type { EditorEquipmentItem } from '@/types/character';
import { EffectTargetPickerSheet, buildTargetLabelMap } from './EffectTargetPickerSheet';
import type { EffectTargetOption } from './EffectTargetPickerSheet';

// ---- Helpers ----

const BONUS_TYPE_CHIPS: { label: string; value: BonusType }[] = [
  { label: 'Resistance', value: BonusType.RESISTANCE },
  { label: 'Enhancement', value: BonusType.ENHANCEMENT },
  { label: 'Deflection', value: BonusType.DEFLECTION },
  { label: 'Natural', value: BonusType.NATURAL },
  { label: 'Morale', value: BonusType.MORALE },
  { label: 'Luck', value: BonusType.LUCK },
  { label: 'Sacred', value: BonusType.SACRED },
  { label: 'Profane', value: BonusType.PROFANE },
  { label: 'Insight', value: BonusType.INSIGHT },
  { label: 'Dodge', value: BonusType.DODGE },
  { label: 'Alchemical', value: BonusType.ALCHEMICAL },
  { label: 'Circumstance', value: BonusType.CIRCUMSTANCE },
  { label: 'Competence', value: BonusType.COMPETENCE },
  { label: 'Untyped', value: BonusType.UNTYPED },
];

function isSpecialTarget(target: EffectTarget): boolean {
  return target.startsWith('special.');
}

function effectTypeForTarget(target: EffectTarget): EffectType {
  return isSpecialTarget(target) ? 'special' : 'bonus';
}

function formatEffectRow(effect: Effect, labelMap: Map<string, string>): string {
  const targetLabel = labelMap.get(effect.target) ?? effect.target;
  const val =
    typeof effect.value === 'number'
      ? effect.value >= 0
        ? `+${effect.value}`
        : `${effect.value}`
      : String(effect.value);
  if (effect.type === 'special') {
    return `${targetLabel}: ${val}`;
  }
  const bt = effect.bonusType ?? 'untyped';
  return `${val} ${bt} → ${targetLabel}`;
}

// ---- Types ----

interface ItemEffectEditorSheetProps {
  item: EditorEquipmentItem | null;
  character: Character;
  onSave: (updated: EditorEquipmentItem) => void;
  onRemoveItem: (id: string) => void;
  onClose: () => void;
}

type SheetView = 'main' | 'targetPicker';

// ---- Component ----

export function ItemEffectEditorSheet({
  item,
  character,
  onSave,
  onRemoveItem,
  onClose,
}: ItemEffectEditorSheetProps) {
  const { colors, fantasy, isDark } = useTheme();

  // Component is remounted via key={item.id} in parent when item changes — initial state is correct.
  const [sheetView, setSheetView] = useState<SheetView>('main');
  const [editedName, setEditedName] = useState(item?.name ?? '');
  const [workingEffects, setWorkingEffects] = useState<Effect[]>(item?.effects ?? []);
  const [addingEffect, setAddingEffect] = useState(false);
  const [pendingTarget, setPendingTarget] = useState<EffectTargetOption | null>(null);
  const [pendingBonusType, setPendingBonusType] = useState<BonusType>(BonusType.UNTYPED);
  const [pendingValue, setPendingValue] = useState('');

  const labelMap = buildTargetLabelMap(character);

  const handleTargetSelect = useCallback((option: EffectTargetOption) => {
    setPendingTarget(option);
    // Auto-set a sensible default bonus type for standard targets
    if (!isSpecialTarget(option.target)) {
      if (option.target.startsWith('save.')) setPendingBonusType(BonusType.RESISTANCE);
      else if (option.target.startsWith('ac.')) setPendingBonusType(BonusType.DEFLECTION);
      else if (option.target.startsWith('ability.')) setPendingBonusType(BonusType.ENHANCEMENT);
      else if (option.target.startsWith('attack.') || option.target.startsWith('damage.'))
        setPendingBonusType(BonusType.ENHANCEMENT);
      else setPendingBonusType(BonusType.UNTYPED);
    }
    setSheetView('main');
  }, []);

  const handleConfirmEffect = useCallback(() => {
    if (!pendingTarget) return;
    const parsed = parseFloat(pendingValue);
    if (isNaN(parsed)) return;

    const newEffect: Effect = {
      type: effectTypeForTarget(pendingTarget.target),
      target: pendingTarget.target,
      value: parsed,
      source: editedName || item?.name || 'Custom',
      ...(isSpecialTarget(pendingTarget.target) ? {} : { bonusType: pendingBonusType }),
    };

    setWorkingEffects((prev) => [...prev, newEffect]);
    setPendingTarget(null);
    setPendingBonusType(BonusType.UNTYPED);
    setPendingValue('');
    setAddingEffect(false);
  }, [pendingTarget, pendingBonusType, pendingValue, editedName, item?.name]);

  const handleRemoveEffect = useCallback((index: number) => {
    setWorkingEffects((prev) => prev.filter((_, i) => i !== index));
  }, []);

  const handleSave = useCallback(() => {
    if (!item) return;
    onSave({ ...item, name: editedName || item.name, effects: workingEffects });
  }, [item, editedName, workingEffects, onSave]);

  const handleRemoveItem = useCallback(() => {
    if (!item) return;
    onRemoveItem(item.id);
  }, [item, onRemoveItem]);

  if (!item) return null;

  const isDbItem = !!item.definitionId;

  // ---- Target picker view ----
  if (sheetView === 'targetPicker') {
    return (
      <View
        style={[styles.root, { backgroundColor: isDark ? colors.bg.primary : colors.bg.secondary }]}
      >
        <EffectTargetPickerSheet
          character={character}
          onSelect={handleTargetSelect}
          onBack={() => setSheetView('main')}
        />
      </View>
    );
  }

  // ---- Main editor view ----
  const gold = isDark ? fantasy.gold : fantasy.darkWood;
  const headerBg = isDark ? colors.bg.secondary : colors.bg.primary;

  return (
    <KeyboardAvoidingView
      style={[styles.root, { backgroundColor: isDark ? colors.bg.primary : colors.bg.secondary }]}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      {/* Header */}
      <View
        style={[
          styles.header,
          { backgroundColor: headerBg, borderBottomColor: colors.border.DEFAULT },
        ]}
      >
        <View style={styles.headerLeft}>
          {isDbItem ? (
            <Text style={[styles.headerTitle, { color: gold }]} numberOfLines={1}>
              {item.name}
            </Text>
          ) : (
            <TextInput
              value={editedName}
              onChangeText={setEditedName}
              style={[
                styles.headerTitleInput,
                { color: colors.text.primary, borderBottomColor: colors.border.DEFAULT },
              ]}
              placeholderTextColor={colors.text.tertiary}
              placeholder="Item name"
              returnKeyType="done"
            />
          )}
          <Text style={[styles.headerSubtitle, { color: colors.text.tertiary }]}>
            {item.slot ? `Slot: ${item.slot}` : 'Slotless'}
          </Text>
        </View>
        <Pressable onPress={onClose} hitSlop={12} style={styles.closeBtn} testID="editor-close-btn">
          <Text style={[styles.closeBtnText, { color: colors.text.secondary }]}>✕</Text>
        </Pressable>
      </View>

      <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={styles.listContent}>
        {/* Empty state */}
        {workingEffects.length === 0 && !addingEffect && (
          <View style={styles.emptyState}>
            <Text style={[styles.emptyText, { color: colors.text.tertiary }]}>
              No effects — tap Add Effect to begin
            </Text>
          </View>
        )}

        {/* Effect rows */}
        {workingEffects.map((effect, index) => (
          <View
            key={index}
            style={[styles.effectRow, { borderBottomColor: colors.border.DEFAULT }]}
          >
            <View style={styles.effectInfo}>
              <Text style={[styles.effectLabel, { color: colors.text.primary }]} numberOfLines={1}>
                {formatEffectRow(effect, labelMap)}
              </Text>
              {effect.type === 'special' && (
                <Text
                  style={[
                    styles.effectSpecialBadge,
                    { color: isDark ? fantasy.gold : fantasy.darkWood },
                  ]}
                >
                  Special
                </Text>
              )}
            </View>
            <Pressable
              onPress={() => handleRemoveEffect(index)}
              hitSlop={10}
              style={styles.removeBtn}
            >
              <Text style={[styles.removeBtnText, { color: colors.text.tertiary }]}>✕</Text>
            </Pressable>
          </View>
        ))}

        {/* Add Effect button */}
        {!addingEffect && (
          <Pressable
            onPress={() => setAddingEffect(true)}
            style={[styles.addEffectBtn, { borderColor: isDark ? fantasy.gold : fantasy.darkWood }]}
          >
            <Text style={[styles.addEffectBtnText, { color: gold }]}>+ Add Effect</Text>
          </Pressable>
        )}

        {/* Inline new-effect form */}
        {addingEffect && (
          <View
            style={[
              styles.addForm,
              {
                borderColor: colors.border.DEFAULT,
                backgroundColor: isDark ? colors.bg.secondary : colors.bg.primary,
              },
            ]}
          >
            {/* Target row */}
            <Text style={[styles.formLabel, { color: colors.text.secondary }]}>Target</Text>
            <Pressable
              onPress={() => setSheetView('targetPicker')}
              style={[
                styles.targetPickerBtn,
                { borderColor: pendingTarget ? gold : colors.border.DEFAULT },
              ]}
            >
              <Text
                style={[
                  styles.targetPickerBtnText,
                  { color: pendingTarget ? colors.text.primary : colors.text.tertiary },
                ]}
              >
                {pendingTarget ? pendingTarget.label : 'Choose target...'}
              </Text>
              <Text style={[styles.chevron, { color: colors.text.tertiary }]}>›</Text>
            </Pressable>

            {/* Bonus type chips — only for non-special targets */}
            {pendingTarget && !isSpecialTarget(pendingTarget.target) && (
              <>
                <Text style={[styles.formLabel, { color: colors.text.secondary }]}>Bonus Type</Text>
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  style={styles.chipsRow}
                >
                  {BONUS_TYPE_CHIPS.map((chip) => {
                    const selected = pendingBonusType === chip.value;
                    return (
                      <Pressable
                        key={chip.value}
                        onPress={() => setPendingBonusType(chip.value)}
                        style={[
                          styles.chip,
                          {
                            backgroundColor: selected
                              ? isDark
                                ? 'rgba(212,175,55,0.25)'
                                : 'rgba(140,90,40,0.12)'
                              : 'transparent',
                            borderColor: selected ? gold : colors.border.DEFAULT,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.chipText,
                            { color: selected ? gold : colors.text.secondary },
                          ]}
                        >
                          {chip.label}
                        </Text>
                      </Pressable>
                    );
                  })}
                </ScrollView>
              </>
            )}

            {/* Value row */}
            <Text style={[styles.formLabel, { color: colors.text.secondary }]}>Value</Text>
            <TextInput
              value={pendingValue}
              onChangeText={setPendingValue}
              keyboardType="numbers-and-punctuation"
              placeholder="+2"
              placeholderTextColor={colors.text.tertiary}
              returnKeyType="done"
              style={[
                styles.valueInput,
                {
                  color: colors.text.primary,
                  backgroundColor: isDark ? colors.bg.tertiary : colors.bg.secondary,
                  borderColor: colors.border.DEFAULT,
                },
              ]}
            />

            {/* Confirm / Cancel */}
            <View style={styles.formButtons}>
              <Pressable
                onPress={() => {
                  setAddingEffect(false);
                  setPendingTarget(null);
                  setPendingValue('');
                  setPendingBonusType(BonusType.UNTYPED);
                }}
                style={[styles.formBtn, { borderColor: colors.border.DEFAULT }]}
              >
                <Text style={[styles.formBtnText, { color: colors.text.secondary }]}>Cancel</Text>
              </Pressable>
              <Pressable
                onPress={handleConfirmEffect}
                disabled={!pendingTarget || !pendingValue}
                style={[
                  styles.formBtn,
                  styles.formBtnPrimary,
                  {
                    backgroundColor:
                      pendingTarget && pendingValue
                        ? isDark
                          ? 'rgba(212,175,55,0.2)'
                          : 'rgba(140,90,40,0.1)'
                        : colors.bg.tertiary,
                    borderColor: pendingTarget && pendingValue ? gold : colors.border.DEFAULT,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.formBtnText,
                    { color: pendingTarget && pendingValue ? gold : colors.text.tertiary },
                  ]}
                >
                  Confirm
                </Text>
              </Pressable>
            </View>
          </View>
        )}
      </ScrollView>

      {/* Footer */}
      <View
        style={[
          styles.footer,
          { borderTopColor: colors.border.DEFAULT, backgroundColor: headerBg },
        ]}
      >
        <Pressable onPress={handleRemoveItem} style={styles.footerBtnLeft} testID="remove-item-btn">
          <Text style={[styles.removeItemText, { color: '#c0392b' }]}>Remove Item</Text>
        </Pressable>
        <Pressable
          onPress={handleSave}
          testID="save-btn"
          style={[
            styles.footerBtnRight,
            {
              backgroundColor: isDark ? 'rgba(212,175,55,0.2)' : 'rgba(140,90,40,0.1)',
              borderColor: gold,
            },
          ]}
        >
          <Text style={[styles.saveText, { color: gold }]}>Save</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
}

// ---- Styles ----

const styles = StyleSheet.create({
  root: { flex: 1 },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
    gap: 12,
  },
  headerLeft: { flex: 1 },
  headerTitle: {
    fontFamily: 'Cinzel',
    fontSize: 16,
    fontWeight: '700',
  },
  headerTitleInput: {
    fontFamily: 'Cinzel',
    fontSize: 16,
    fontWeight: '700',
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingBottom: 2,
  },
  headerSubtitle: {
    fontFamily: 'LibreBaskerville',
    fontSize: 11,
    fontStyle: 'italic',
    marginTop: 2,
  },
  closeBtn: { paddingTop: 2 },
  closeBtnText: {
    fontFamily: 'LibreBaskerville',
    fontSize: 18,
  },
  listContent: { flexGrow: 1, paddingBottom: 8 },
  emptyState: {
    padding: 32,
    alignItems: 'center',
  },
  emptyText: {
    fontFamily: 'LibreBaskerville',
    fontSize: 14,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  effectRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  effectInfo: { flex: 1 },
  effectLabel: {
    fontFamily: 'LibreBaskerville',
    fontSize: 14,
    fontWeight: '600',
  },
  effectSpecialBadge: {
    fontFamily: 'LibreBaskerville',
    fontSize: 10,
    fontStyle: 'italic',
    marginTop: 1,
  },
  removeBtn: { paddingLeft: 12 },
  removeBtnText: {
    fontFamily: 'LibreBaskerville',
    fontSize: 16,
  },
  addEffectBtn: {
    margin: 16,
    paddingVertical: 12,
    borderWidth: 1.5,
    borderStyle: 'dashed',
    borderRadius: 8,
    alignItems: 'center',
  },
  addEffectBtnText: {
    fontFamily: 'LibreBaskerville',
    fontSize: 15,
    fontWeight: '700',
  },
  addForm: {
    margin: 16,
    marginTop: 0,
    padding: 14,
    borderWidth: 1,
    borderRadius: 10,
    gap: 8,
  },
  formLabel: {
    fontFamily: 'LibreBaskerville',
    fontSize: 11,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  targetPickerBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 8,
  },
  targetPickerBtnText: {
    flex: 1,
    fontFamily: 'LibreBaskerville',
    fontSize: 15,
  },
  chevron: {
    fontFamily: 'LibreBaskerville',
    fontSize: 20,
    lineHeight: 22,
  },
  chipsRow: {
    flexGrow: 0,
  },
  chip: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderRadius: 16,
    marginRight: 6,
  },
  chipText: {
    fontFamily: 'LibreBaskerville',
    fontSize: 12,
    fontWeight: '600',
  },
  valueInput: {
    fontFamily: 'LibreBaskerville',
    fontSize: 15,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    minHeight: 40,
  },
  formButtons: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 4,
  },
  formBtn: {
    flex: 1,
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
  },
  formBtnPrimary: {},
  formBtnText: {
    fontFamily: 'LibreBaskerville',
    fontSize: 14,
    fontWeight: '700',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
    gap: 12,
  },
  footerBtnLeft: { flex: 1 },
  removeItemText: {
    fontFamily: 'LibreBaskerville',
    fontSize: 14,
    fontWeight: '700',
  },
  footerBtnRight: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderWidth: 1.5,
    borderRadius: 8,
  },
  saveText: {
    fontFamily: 'Cinzel',
    fontSize: 14,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
});
