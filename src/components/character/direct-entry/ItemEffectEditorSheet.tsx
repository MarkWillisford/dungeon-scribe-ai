import React, { useState, useCallback, useEffect } from 'react';
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
import { MagicItemEffectImportSheet } from './MagicItemEffectImportSheet';
import { GameDataService } from '@/services/GameDataService';
import { FeatRegistryService } from '@/services/FeatRegistryService';
import type { EffectTargetOption } from './EffectTargetPickerSheet';
import type { FeatDefinition, FeatChoice, GrantedFeat } from '@/types/feats';
import { SearchPickerSheet } from '@/components/ui/SearchPickerSheet';
import type { SearchItem } from '@/components/ui/SearchPickerSheet';

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

// Quick-add presets vary by item collection
interface QuickPreset {
  label: string;
  effect: Omit<Effect, 'source'>;
}

function buildPresets(collection: EditorEquipmentItem['collection']): QuickPreset[] {
  const enhancements: QuickPreset[] = [1, 2, 3, 4, 5].map((n) => ({
    label: `+${n}`,
    effect: {
      type: 'bonus' as const,
      target: collection === 'armor' ? 'ac.armor' : 'attack.melee',
      bonusType: BonusType.ENHANCEMENT,
      value: n,
    },
  }));

  if (collection === 'weapons') {
    return [
      {
        label: 'MW',
        effect: { type: 'bonus', target: 'attack.melee', bonusType: BonusType.UNTYPED, value: 1 },
      },
      ...enhancements,
      {
        label: 'Flaming',
        effect: { type: 'special', target: 'special.flaming', value: 1 },
      },
      {
        label: 'Holy',
        effect: { type: 'special', target: 'special.holy', value: 1 },
      },
      {
        label: 'Bane',
        effect: { type: 'special', target: 'special.bane', value: 1 },
      },
      {
        label: 'Keen',
        effect: { type: 'special', target: 'special.keen', value: 1 },
      },
    ];
  }

  if (collection === 'armor') {
    return [
      {
        label: 'MW',
        effect: { type: 'bonus', target: 'ac.armor', bonusType: BonusType.UNTYPED, value: 1 },
      },
      ...enhancements,
      {
        label: 'Fortification',
        effect: { type: 'special', target: 'special.fortification', value: 1 },
      },
    ];
  }

  return [];
}

function isSpecialTarget(target: EffectTarget): boolean {
  return target.startsWith('special.');
}

function effectTypeForTarget(target: EffectTarget): EffectType {
  return isSpecialTarget(target) ? 'special' : 'bonus';
}

function findNextUnfilledChoice(
  choices: FeatChoice[],
  filled: Record<string, string>,
): FeatChoice | null {
  return choices.find((c) => !filled[c.type]) ?? null;
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

type SheetView = 'main' | 'targetPicker' | 'itemImport' | 'featSearch';

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
  const [workingGrantedFeats, setWorkingGrantedFeats] = useState<GrantedFeat[]>(
    item?.grantedFeats ?? [],
  );
  const [addingEffect, setAddingEffect] = useState(false);
  const [pendingTarget, setPendingTarget] = useState<EffectTargetOption | null>(null);
  const [pendingBonusType, setPendingBonusType] = useState<BonusType>(BonusType.UNTYPED);
  const [pendingValue, setPendingValue] = useState('');

  // Feat search state
  const [featQuery, setFeatQuery] = useState('');
  const [featResults, setFeatResults] = useState<FeatDefinition[]>([]);
  const [featNameMap, setFeatNameMap] = useState<Map<string, string>>(new Map());

  // Feat choice prompt state (for feats that require a selection before being added)
  const [pendingFeat, setPendingFeat] = useState<FeatDefinition | null>(null);
  const [pendingGrant, setPendingGrant] = useState<GrantedFeat | null>(null);
  const [activeChoice, setActiveChoice] = useState<FeatChoice | null>(null);
  const [choiceWeaponItems, setChoiceWeaponItems] = useState<SearchItem[]>([]);

  /* istanbul ignore next */
  useEffect(() => {
    if (workingGrantedFeats.length === 0) return;
    const missing = workingGrantedFeats.filter((g) => !featNameMap.has(g.featId));
    if (missing.length === 0) return;
    let cancelled = false;
    Promise.all(missing.map((g) => GameDataService.getFeatById(g.featId)))
      .then((feats) => {
        if (cancelled) return;
        setFeatNameMap((prev) => {
          const next = new Map(prev);
          feats.forEach((f, i) => {
            if (f) next.set(missing[i].featId, f.name);
          });
          return next;
        });
      })
      .catch(() => {
        // Keep existing names; ignore transient lookup failures.
      });
    return () => {
      cancelled = true;
    };
  }, [workingGrantedFeats]); // eslint-disable-line react-hooks/exhaustive-deps

  /* istanbul ignore next */
  useEffect(() => {
    if (activeChoice?.type !== 'weapon') return;
    let cancelled = false;
    GameDataService.getWeapons()
      .then((weapons) => {
        if (cancelled) return;
        setChoiceWeaponItems(
          weapons
            .map((w) => ({ key: w.name, label: w.name }))
            .sort((a, b) => a.label.localeCompare(b.label)),
        );
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [activeChoice?.type]);

  /* istanbul ignore next */
  useEffect(() => {
    if (sheetView !== 'featSearch' || !featQuery) return;
    let cancelled = false;
    GameDataService.searchFeats(featQuery).then((results) => {
      if (!cancelled) setFeatResults(results);
    });
    return () => {
      cancelled = true;
    };
  }, [featQuery, sheetView]);

  const labelMap = buildTargetLabelMap(character);

  const handleTargetSelect = useCallback((option: EffectTargetOption) => {
    setPendingTarget(option);
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

  const handleQuickPreset = useCallback(
    (preset: QuickPreset) => {
      const effect: Effect = {
        ...preset.effect,
        source: editedName || item?.name || 'Custom',
      } as Effect;
      setWorkingEffects((prev) => [...prev, effect]);
    },
    [editedName, item?.name],
  );

  const handleImportEffects = useCallback((effects: Effect[]) => {
    setWorkingEffects((prev) => [...prev, ...effects]);
  }, []);

  const handleAddFeat = useCallback(
    (feat: FeatDefinition) => {
      if (workingGrantedFeats.some((g) => g.featId === feat.id)) return;
      const grant: GrantedFeat = {
        featId: feat.id,
        choices: {},
        active: feat.activationMode !== 'toggle',
      };
      setFeatNameMap((prev) => new Map(prev).set(feat.id, feat.name));
      setFeatQuery('');
      setFeatResults([]);
      setSheetView('main');
      const firstChoice = findNextUnfilledChoice(feat.choices ?? [], {});
      if (firstChoice) {
        setPendingFeat(feat);
        setPendingGrant(grant);
        setActiveChoice(firstChoice);
        return;
      }
      setWorkingGrantedFeats((prev) => [...prev, grant]);
    },
    [workingGrantedFeats],
  );

  const handleChoiceSelect = useCallback(
    (value: string) => {
      if (!pendingFeat || !pendingGrant || !activeChoice) return;
      const updatedChoices = { ...(pendingGrant.choices ?? {}), [activeChoice.type]: value };
      const next = findNextUnfilledChoice(pendingFeat.choices ?? [], updatedChoices);
      if (next) {
        setPendingGrant({ ...pendingGrant, choices: updatedChoices });
        setActiveChoice(next);
      } else {
        setWorkingGrantedFeats((prev) => [...prev, { ...pendingGrant, choices: updatedChoices }]);
        setPendingFeat(null);
        setPendingGrant(null);
        setActiveChoice(null);
      }
    },
    [pendingFeat, pendingGrant, activeChoice],
  );

  const handleChoiceCancel = useCallback(() => {
    setPendingFeat(null);
    setPendingGrant(null);
    setActiveChoice(null);
  }, []);

  const handleToggleFeat = useCallback((featId: string) => {
    setWorkingGrantedFeats((prev) =>
      prev.map((g) => (g.featId === featId ? { ...g, active: !g.active } : g)),
    );
  }, []);

  const handleRemoveFeat = useCallback((featId: string) => {
    setWorkingGrantedFeats((prev) => prev.filter((g) => g.featId !== featId));
  }, []);

  const handleSave = useCallback(() => {
    if (!item) return;
    onSave({
      ...item,
      name: editedName || item.name,
      effects: workingEffects,
      grantedFeats: workingGrantedFeats.length > 0 ? workingGrantedFeats : undefined,
    });
  }, [item, editedName, workingEffects, workingGrantedFeats, onSave]);

  const handleRemoveItem = useCallback(() => {
    if (!item) return;
    onRemoveItem(item.id);
  }, [item, onRemoveItem]);

  if (!item) return null;

  const isDbItem = !!item.definitionId;
  const gold = isDark ? fantasy.gold : fantasy.darkWood;
  const headerBg = isDark ? colors.bg.secondary : colors.bg.primary;
  const presets = buildPresets(item.collection);

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

  // ---- Import from item view ----
  if (sheetView === 'itemImport') {
    return (
      <View
        style={[styles.root, { backgroundColor: isDark ? colors.bg.primary : colors.bg.secondary }]}
      >
        <MagicItemEffectImportSheet
          visible={true}
          currentItemName={editedName || item.name}
          onImport={handleImportEffects}
          onBack={() => setSheetView('main')}
        />
      </View>
    );
  }

  // ---- Feat search view ----
  if (sheetView === 'featSearch') {
    return (
      <KeyboardAvoidingView
        style={[styles.root, { backgroundColor: isDark ? colors.bg.primary : colors.bg.secondary }]}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View
          style={[
            styles.header,
            { backgroundColor: headerBg, borderBottomColor: colors.border.DEFAULT },
          ]}
        >
          <Pressable
            onPress={() => {
              setSheetView('main');
              setFeatQuery('');
            }}
            hitSlop={12}
            testID="feat-search-back-btn"
          >
            <Text style={[styles.backBtn, { color: gold }]}>‹ Back</Text>
          </Pressable>
          <Text style={[styles.headerTitle, { color: gold }]}>Add Granted Feat</Text>
        </View>
        <View
          style={[
            styles.searchRow,
            { borderBottomColor: colors.border.DEFAULT, backgroundColor: headerBg },
          ]}
        >
          <TextInput
            testID="feat-search-input"
            value={featQuery}
            onChangeText={setFeatQuery}
            placeholder="Type a feat name..."
            placeholderTextColor={colors.text.tertiary}
            style={[
              styles.searchInput,
              {
                color: colors.text.primary,
                backgroundColor: isDark ? colors.bg.tertiary : colors.bg.secondary,
                borderColor: colors.border.DEFAULT,
              },
            ]}
            autoFocus
            returnKeyType="search"
            clearButtonMode="while-editing"
          />
        </View>
        <ScrollView keyboardShouldPersistTaps="handled">
          {!featQuery && (
            <View style={styles.centerState}>
              <Text style={[styles.hintText, { color: colors.text.tertiary }]}>
                Type a feat name to search
              </Text>
            </View>
          )}
          {featQuery.length > 0 && featResults.length === 0 && (
            <View style={styles.centerState}>
              <Text style={[styles.hintText, { color: colors.text.tertiary }]}>No feats found</Text>
            </View>
          )}
          {featResults.map((feat) => (
            <Pressable
              key={feat.id}
              testID={`feat-result-${feat.id}`}
              onPress={() => handleAddFeat(feat)}
              style={[styles.effectRow, { borderBottomColor: colors.border.DEFAULT }]}
            >
              <Text style={[styles.effectLabel, { color: colors.text.primary }]}>{feat.name}</Text>
            </Pressable>
          ))}
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }

  // ---- Main editor view ----

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
        {/* Quick-add preset chips */}
        {presets.length > 0 && (
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.presetsRow}
            contentContainerStyle={styles.presetsContent}
          >
            {presets.map((preset) => (
              <Pressable
                key={preset.label}
                testID={`preset-chip-${preset.label}`}
                onPress={() => handleQuickPreset(preset)}
                style={[
                  styles.chip,
                  {
                    borderColor: gold,
                    backgroundColor: isDark ? 'rgba(212,175,55,0.1)' : 'rgba(140,90,40,0.07)',
                  },
                ]}
              >
                <Text style={[styles.chipText, { color: gold }]}>{preset.label}</Text>
              </Pressable>
            ))}
          </ScrollView>
        )}

        {/* Import from item button */}
        <Pressable
          onPress={() => setSheetView('itemImport')}
          testID="import-from-item-btn"
          style={[
            styles.importBtn,
            { borderColor: isDark ? colors.border.DEFAULT : colors.border.DEFAULT },
          ]}
        >
          <Text style={[styles.importBtnText, { color: colors.text.secondary }]}>
            + Import from Item
          </Text>
        </Pressable>

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
              testID={`remove-effect-${index}`}
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
            testID="add-effect-btn"
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
              testID="choose-target-btn"
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
                        testID={`bonus-chip-${chip.value}`}
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
              testID="pending-value-input"
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
                testID="cancel-effect-btn"
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
                testID="confirm-effect-btn"
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

        {/* Granted Feats section */}
        <View style={styles.sectionHeader}>
          <Text style={[styles.sectionTitle, { color: colors.text.secondary }]}>Granted Feats</Text>
          <Pressable testID="add-feat-btn" onPress={() => setSheetView('featSearch')} hitSlop={10}>
            <Text style={[styles.sectionAddBtn, { color: gold }]}>+ Add</Text>
          </Pressable>
        </View>

        {workingGrantedFeats.length === 0 && (
          <Text
            style={[
              styles.emptyText,
              { color: colors.text.tertiary, marginHorizontal: 16, marginBottom: 8 },
            ]}
          >
            None
          </Text>
        )}

        {workingGrantedFeats.map((grant) => {
          const featDef = FeatRegistryService.getFeat(grant.featId);
          const isToggle = featDef?.activationMode === 'toggle';
          return (
            <View
              key={grant.featId}
              style={[styles.effectRow, { borderBottomColor: colors.border.DEFAULT }]}
            >
              <Text
                style={[styles.effectLabel, { color: colors.text.primary, flex: 1 }]}
                numberOfLines={1}
              >
                {featNameMap.get(grant.featId) ?? grant.featId}
              </Text>
              {isToggle && (
                <Pressable
                  testID={`toggle-feat-${grant.featId}`}
                  onPress={() => handleToggleFeat(grant.featId)}
                  hitSlop={10}
                  style={[
                    styles.toggleChip,
                    {
                      borderColor: grant.active ? gold : colors.border.DEFAULT,
                      backgroundColor: grant.active
                        ? isDark
                          ? 'rgba(212,175,55,0.15)'
                          : 'rgba(140,90,40,0.08)'
                        : 'transparent',
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.toggleChipText,
                      { color: grant.active ? gold : colors.text.tertiary },
                    ]}
                  >
                    {grant.active ? 'On' : 'Off'}
                  </Text>
                </Pressable>
              )}
              <Pressable
                onPress={() => handleRemoveFeat(grant.featId)}
                hitSlop={10}
                testID={`remove-feat-${grant.featId}`}
                style={styles.removeBtn}
              >
                <Text style={[styles.removeBtnText, { color: colors.text.tertiary }]}>✕</Text>
              </Pressable>
            </View>
          );
        })}
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

      {activeChoice && pendingFeat && (
        <SearchPickerSheet
          visible
          testID="feat-choice-picker"
          title={`${pendingFeat.name} — ${activeChoice.label}`}
          items={
            activeChoice.type === 'weapon'
              ? choiceWeaponItems
              : (activeChoice.options ?? []).map((o) => ({ key: o, label: o }))
          }
          allowCustom={activeChoice.freeText}
          onAddCustom={activeChoice.freeText ? handleChoiceSelect : undefined}
          onSelect={(item) => handleChoiceSelect(item.key)}
          onClose={handleChoiceCancel}
          placeholder={
            activeChoice.freeText
              ? `Type ${activeChoice.label.toLowerCase()}...`
              : `Search ${activeChoice.label.toLowerCase()}...`
          }
        />
      )}
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
    flex: 1,
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
  backBtn: {
    fontFamily: 'LibreBaskerville',
    fontSize: 16,
    fontWeight: '700',
  },
  closeBtn: { paddingTop: 2 },
  closeBtnText: {
    fontFamily: 'LibreBaskerville',
    fontSize: 18,
  },
  presetsRow: {
    flexGrow: 0,
    marginTop: 12,
    marginBottom: 4,
  },
  presetsContent: {
    paddingHorizontal: 16,
    gap: 6,
  },
  importBtn: {
    marginHorizontal: 16,
    marginTop: 6,
    marginBottom: 2,
    paddingVertical: 8,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 8,
    alignItems: 'center',
  },
  importBtnText: {
    fontFamily: 'LibreBaskerville',
    fontSize: 13,
    fontWeight: '600',
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
  featDisclaimerText: {
    fontFamily: 'LibreBaskerville',
    fontSize: 11,
    fontStyle: 'italic',
    marginHorizontal: 16,
    marginBottom: 8,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  sectionTitle: {
    fontFamily: 'LibreBaskerville',
    fontSize: 11,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    flex: 1,
  },
  sectionAddBtn: {
    fontFamily: 'LibreBaskerville',
    fontSize: 13,
    fontWeight: '700',
  },
  searchRow: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  searchInput: {
    fontFamily: 'LibreBaskerville',
    fontSize: 15,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    minHeight: 40,
  },
  centerState: {
    padding: 32,
    alignItems: 'center',
  },
  hintText: {
    fontFamily: 'LibreBaskerville',
    fontSize: 14,
    fontStyle: 'italic',
    textAlign: 'center',
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
  toggleChip: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderWidth: 1,
    borderRadius: 12,
    marginRight: 8,
  },
  toggleChipText: {
    fontFamily: 'LibreBaskerville',
    fontSize: 12,
    fontWeight: '600',
  },
});
