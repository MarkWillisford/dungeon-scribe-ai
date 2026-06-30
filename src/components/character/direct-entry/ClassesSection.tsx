import React, { useMemo, useState, useCallback, useEffect, useRef } from 'react';
import { View, Text, Pressable, TextInput, Modal, StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  runOnJS,
  type SharedValue,
} from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { useTheme } from '@/hooks/useTheme';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  addClass,
  addSpellcastingPool,
  addTemplate,
  reorderClasses,
} from '@/store/slices/characterEntrySlice';
import { AutoComputedValue } from '@/components/ui/AutoComputedValue';
import { SearchPickerSheet, type SearchItem } from '@/components/ui/SearchPickerSheet';
import { ClassEntryCard } from './ClassEntryCard';
import { TemplateEntryCard } from './TemplateEntryCard';
import { GrantedBonusCard } from './GrantedBonusCard';
import { LevelSequenceEditor } from './LevelSequenceEditor';
import { selectClasses, selectClassDataMap } from '@/store/slices/gameDataSlice';
import { type ClassEntry } from '@/types/classes';
import { type AppliedTemplate } from '@/types/templates';
import { BABProgression, SaveProgression } from '@/types/base';
import { ALL_TEMPLATES } from '@/data/templates';

function genId(): string {
  return Math.random().toString(36).slice(2) + Date.now().toString(36);
}

// ---- Worklet: hover index from current drag state ----

function computeHoverIndex(heights: number[], fromIndex: number, dy: number): number {
  'worklet';
  let acc = 0;
  const offsets: number[] = [];
  for (let i = 0; i < heights.length; i++) {
    offsets.push(acc);
    acc += heights[i] ?? 80;
  }
  const fromH = heights[fromIndex] ?? 80;
  const landingCenter = (offsets[fromIndex] ?? 0) + dy + fromH / 2;
  let hoverIdx = fromIndex;
  for (let i = 0; i < heights.length; i++) {
    const center = (offsets[i] ?? 0) + (heights[i] ?? 80) / 2;
    if (landingCenter > center) {
      hoverIdx = i;
    }
  }
  return Math.max(0, Math.min(heights.length - 1, hoverIdx));
}

// ---- DraggableRow ----

interface DraggableRowProps {
  entry: ClassEntry;
  index: number;
  count: number;
  activeIndex: SharedValue<number>;
  dragY: SharedValue<number>;
  rowHeights: SharedValue<number[]>;
  onHeightChange: (index: number, height: number) => void;
  onDragEnd: (fromIndex: number, dy: number) => void;
}

function DraggableRow({
  entry,
  index,
  count,
  activeIndex,
  dragY,
  rowHeights,
  onHeightChange,
  onDragEnd,
}: DraggableRowProps) {
  const { colors } = useTheme();
  // Keep index accessible in UI-thread worklets
  const indexRef = useSharedValue(index);
  useEffect(() => {
    indexRef.value = index;
  }, [index, indexRef]);

  // The pan is attached ONLY to the drag handle (below), not the whole card, so
  // taps and presses on the card's controls are never intercepted. We claim the
  // row in onStart (gesture actually activates after a short long-press) rather
  // than onBegin (raw touch-down), so a stray tap on the handle doesn't trigger
  // the lifted/reorder visual state.
  const gesture = Gesture.Pan()
    .activateAfterLongPress(200)
    .onStart(() => {
      activeIndex.value = indexRef.value;
      dragY.value = 0;
    })
    .onUpdate((e) => {
      if (activeIndex.value === indexRef.value) {
        dragY.value = e.translationY;
      }
    })
    .onEnd(() => {
      const from = activeIndex.value;
      const dy = dragY.value;
      activeIndex.value = -1;
      dragY.value = 0;
      runOnJS(onDragEnd)(from, dy);
    })
    .onFinalize(() => {
      if (activeIndex.value === indexRef.value) {
        activeIndex.value = -1;
        dragY.value = 0;
      }
    });

  const rowStyle = useAnimatedStyle(() => {
    const myIndex = indexRef.value;
    const heights = rowHeights.value;
    const activeIdx = activeIndex.value;
    const dy = dragY.value;

    if (activeIdx === myIndex) {
      return {
        transform: [{ translateY: dy }],
        zIndex: 999,
        opacity: 0.92,
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 4 },
        elevation: 12,
      };
    }

    if (activeIdx === -1) {
      return {
        transform: [
          { translateY: withTiming(0, { duration: 200, easing: Easing.out(Easing.quad) }) },
        ],
        zIndex: 0,
        opacity: 1,
        elevation: 0,
      };
    }

    // Compute shift to make room for the dragged row
    const hoverIdx = computeHoverIndex(heights, activeIdx, dy);
    const fromH = heights[activeIdx] ?? 80;
    let shift = 0;
    if (activeIdx < myIndex && myIndex <= hoverIdx) {
      shift = -fromH;
    } else if (hoverIdx <= myIndex && myIndex < activeIdx) {
      shift = fromH;
    }

    return {
      transform: [
        { translateY: withTiming(shift, { duration: 200, easing: Easing.out(Easing.quad) }) },
      ],
      zIndex: 0,
      opacity: 1,
      elevation: 0,
    };
  });

  // Reordering only makes sense with more than one class; a lone class shows no
  // handle and has no gesture attached at all.
  const dragHandle =
    count > 1 ? (
      <GestureDetector gesture={gesture}>
        <View
          style={styles.dragHandle}
          hitSlop={8}
          accessibilityRole="button"
          accessibilityLabel={`Reorder ${entry.name}. Press and hold, then drag.`}
        >
          <Text style={[styles.dragHandleIcon, { color: colors.text.tertiary }]}>⋮⋮</Text>
        </View>
      </GestureDetector>
    ) : null;

  return (
    <Animated.View
      onLayout={(e) => onHeightChange(index, e.nativeEvent.layout.height)}
      style={[rowStyle, styles.draggableRow]}
    >
      <ClassEntryCard entry={entry} dragHandle={dragHandle} />
    </Animated.View>
  );
}

// ---- DraggableClassList ----

function DraggableClassList() {
  const dispatch = useAppDispatch();
  const classes = useAppSelector((state) => state.characterEntry.character.classes.classes);

  const activeIndex = useSharedValue(-1);
  const dragY = useSharedValue(0);
  const rowHeights = useSharedValue<number[]>(classes.map(() => 80));
  const heightsRef = useRef<number[]>(classes.map(() => 80));

  useEffect(() => {
    if (heightsRef.current.length !== classes.length) {
      heightsRef.current = classes.map((_, i) => heightsRef.current[i] ?? 80);
      rowHeights.value = [...heightsRef.current];
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [classes]);

  const handleHeightChange = useCallback(
    (index: number, h: number) => {
      if (heightsRef.current[index] === h) return;
      heightsRef.current[index] = h;
      rowHeights.value = [...heightsRef.current];
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const handleDragEnd = useCallback(
    (fromIndex: number, dy: number) => {
      const heights = rowHeights.value;
      let acc = 0;
      const offsets: number[] = [];
      for (const h of heights) {
        offsets.push(acc);
        acc += h ?? 80;
      }
      const fromH = heights[fromIndex] ?? 80;
      const landingCenter = (offsets[fromIndex] ?? 0) + dy + fromH / 2;

      let toIndex = fromIndex;
      for (let i = 0; i < classes.length; i++) {
        const center = (offsets[i] ?? 0) + (heights[i] ?? 80) / 2;
        if (landingCenter > center) {
          toIndex = i;
        }
      }
      toIndex = Math.max(0, Math.min(classes.length - 1, toIndex));

      if (toIndex !== fromIndex) {
        const reordered = [...classes];
        const [moved] = reordered.splice(fromIndex, 1);
        reordered.splice(toIndex, 0, moved);
        dispatch(reorderClasses(reordered.map((c) => c.id ?? c.name)));
      }
    },
    [classes, dispatch, rowHeights],
  );

  return (
    <>
      {classes.map((entry, index) => (
        <DraggableRow
          key={entry.id}
          entry={entry}
          index={index}
          count={classes.length}
          activeIndex={activeIndex}
          dragY={dragY}
          rowHeights={rowHeights}
          onHeightChange={handleHeightChange}
          onDragEnd={handleDragEnd}
        />
      ))}
    </>
  );
}

// ---- Add Free Grant modal ----

interface AddGrantModalProps {
  visible: boolean;
  onAdd: (name: string, note: string, grantedBy: string) => void;
  onClose: () => void;
}

function AddGrantModal({ visible, onAdd, onClose }: AddGrantModalProps) {
  const { colors, fantasy, isDark } = useTheme();
  const [name, setName] = useState('');
  const [note, setNote] = useState('');
  const [grantedBy, setGrantedBy] = useState('');

  const handleAdd = () => {
    if (!name.trim()) return;
    onAdd(name.trim(), note.trim(), grantedBy.trim());
    setName('');
    setNote('');
    setGrantedBy('');
  };

  const handleClose = () => {
    setName('');
    setNote('');
    setGrantedBy('');
    onClose();
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={handleClose}
    >
      <View
        style={[
          styles.modalContainer,
          { backgroundColor: isDark ? colors.bg.primary : colors.bg.secondary },
        ]}
      >
        <View style={[styles.modalHeader, { borderBottomColor: colors.border.DEFAULT }]}>
          <Text style={[styles.modalTitle, { color: isDark ? fantasy.gold : fantasy.darkWood }]}>
            Add Free Grant
          </Text>
          <Pressable onPress={handleClose} hitSlop={12} style={styles.modalClose}>
            <Text style={[styles.modalCloseText, { color: colors.text.tertiary }]}>✕</Text>
          </Pressable>
        </View>

        <View style={styles.modalBody}>
          <Text style={[styles.inputLabel, { color: colors.text.secondary }]}>Name *</Text>
          <TextInput
            value={name}
            onChangeText={setName}
            placeholder="e.g. Divine Grace, Darkvision 60 ft..."
            placeholderTextColor={colors.text.tertiary}
            autoFocus
            style={[
              styles.textInput,
              {
                color: colors.text.primary,
                backgroundColor: isDark ? colors.bg.tertiary : colors.bg.primary,
                borderColor: name ? fantasy.gold : colors.border.DEFAULT,
              },
            ]}
          />

          <Text style={[styles.inputLabel, { color: colors.text.secondary }]}>Note</Text>
          <TextInput
            value={note}
            onChangeText={setNote}
            placeholder="Optional description..."
            placeholderTextColor={colors.text.tertiary}
            multiline
            numberOfLines={3}
            style={[
              styles.textInput,
              styles.textArea,
              {
                color: colors.text.primary,
                backgroundColor: isDark ? colors.bg.tertiary : colors.bg.primary,
                borderColor: colors.border.DEFAULT,
              },
            ]}
          />

          <Text style={[styles.inputLabel, { color: colors.text.secondary }]}>Granted by</Text>
          <TextInput
            value={grantedBy}
            onChangeText={setGrantedBy}
            placeholder="e.g. DM (campaign grant), Paladin class feature..."
            placeholderTextColor={colors.text.tertiary}
            style={[
              styles.textInput,
              {
                color: colors.text.primary,
                backgroundColor: isDark ? colors.bg.tertiary : colors.bg.primary,
                borderColor: colors.border.DEFAULT,
              },
            ]}
          />

          <Pressable
            onPress={handleAdd}
            disabled={!name.trim()}
            style={[
              styles.addGrantButton,
              {
                backgroundColor: name.trim()
                  ? isDark
                    ? fantasy.gold
                    : fantasy.darkWood
                  : colors.border.DEFAULT,
              },
            ]}
          >
            <Text
              style={[
                styles.addGrantButtonText,
                { color: name.trim() ? (isDark ? '#1a1208' : '#FFFFFF') : colors.text.tertiary },
              ]}
            >
              Add Grant
            </Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

// ---- Main section ----

export function ClassesSection() {
  const { colors, fantasy, isDark } = useTheme();
  const dispatch = useAppDispatch();
  const character = useAppSelector((state) => state.characterEntry.character);
  const classes = character.classes.classes;
  const templates = character.appliedTemplates;
  const allClasses = useAppSelector(selectClasses);
  const classDataMap = useAppSelector(selectClassDataMap);

  const [classPickerOpen, setClassPickerOpen] = useState(false);
  const [templatePickerOpen, setTemplatePickerOpen] = useState(false);
  const [grantModalOpen, setGrantModalOpen] = useState(false);
  const [levelEditorOpen, setLevelEditorOpen] = useState(false);

  const regularTemplates = templates.filter((t) => !t.isFreeGrant);
  const freeGrants = templates.filter((t) => t.isFreeGrant);

  const classSearchItems = useMemo<SearchItem[]>(
    () =>
      allClasses.map((cls) => ({
        key: cls.name,
        label: cls.name,
        subLabel: cls.category,
        category: cls.category,
      })),
    [allClasses],
  );

  const totalHD = classes.reduce((sum, c) => sum + c.level, 0);
  const templateLA = regularTemplates
    .filter((t) => t.appliedAs === 'la' && t.la != null)
    .reduce((sum, t) => sum + (t.la ?? 0), 0);
  const ecl = totalHD + templateLA;

  const cs = character.combatStats;
  const babString = cs.attackBonuses.baseAttack.map((n) => (n >= 0 ? `+${n}` : `${n}`)).join('/');
  const fort = cs.savingThrows.fortitude.total;
  const ref = cs.savingThrows.reflex.total;
  const will = cs.savingThrows.will.total;

  const formatSave = (n: number) => (n >= 0 ? `+${n}` : `${n}`);

  const handleAddClass = (item: SearchItem) => {
    const entryId = genId();
    const classData = classDataMap.get(item.label.toLowerCase());
    const spellType = classData?.spellcasting.type;
    const advancesSpec = classData?.advancesSpellcasting;

    // Pre-populate advancement for prestige advancers so the UI picker
    // shows up immediately with the right shape and length.
    const initialAdvancement = advancesSpec
      ? advancesSpec.mode === 'single'
        ? { mode: 'single' as const, perLevel: [{ baseClassEntryId: '' }] }
        : {
            mode: 'both' as const,
            perLevel: [{ arcaneBaseClassEntryId: '', divineBaseClassEntryId: '' }],
          }
      : undefined;

    const emptySpellsPerDay = {
      base: Array(10).fill(0),
      bonus: Array(10).fill(0),
      misc: Array(10).fill(0),
      total: Array(10).fill(0),
      used: Array(10).fill(0),
    };

    dispatch(
      addClass({
        id: entryId,
        name: item.label,
        level: 1,
        hitDieSize: classData?.hitDie ?? 8,
        hitDieResults: [],
        skillRanks: classData?.skillRanksPerLevel ?? 2,
        classSkills: classData?.classSkills ?? [],
        babProgression: (classData?.babProgression ?? BABProgression.Medium) as BABProgression,
        fortProgression: (classData?.saves.fortitude ?? SaveProgression.Poor) as SaveProgression,
        refProgression: (classData?.saves.reflex ?? SaveProgression.Poor) as SaveProgression,
        willProgression: (classData?.saves.will ?? SaveProgression.Poor) as SaveProgression,
        classFeatures:
          classData?.classFeatures
            ?.filter((f) => f.level <= 1)
            .map((f) => ({ effects: [], ...f })) ?? [],
        sourceSystem: 'pf1e',
        spellcastingAdvancement: initialAdvancement,
        classChoices: [],
        prereqOverride: false,
      }),
    );

    // Only base casters get their own pool. Advancers feed into someone
    // else's pool via spellcastingAdvancement.
    if (!advancesSpec && (spellType === 'Divine' || spellType === 'Arcane')) {
      dispatch(
        addSpellcastingPool({
          id: `pool-${entryId}`,
          baseClass: item.label.toLowerCase(),
          castingType: spellType === 'Divine' ? 'divine' : 'arcane',
          spellAbility: spellType === 'Divine' ? 'WIS' : 'INT',
          baseClassEntryId: entryId,
          contributors: [],
          effectiveSpellcastingLevel: 0,
          baseCasterLevel: 0,
          clBonuses: [],
          spellsPerDay: emptySpellsPerDay,
          spellDC: { base: 0, miscBonus: 0, byLevel: Array(10).fill(0) },
          spellFailure: 0,
          concentration: { abilityMod: 0, casterLevel: 0, misc: 0, total: 0 },
        }),
      );
    }
    setClassPickerOpen(false);
  };

  const templateSearchItems = useMemo<SearchItem[]>(
    () =>
      ALL_TEMPLATES.map((t) => {
        let cost = '';
        if (t.laAdjustment != null) cost = `LA +${t.laAdjustment}`;
        else if (t.crAdjustment != null) cost = `CR +${t.crAdjustment}`;
        else if (t.crTiers?.length) cost = 'CR (tiered)';
        const acq =
          t.acquisitionType === 'inherited'
            ? 'Inherited'
            : t.acquisitionType === 'acquired'
              ? 'Acquired'
              : 'Either';
        return {
          key: t.id,
          label: t.name,
          subLabel: [cost, acq].filter(Boolean).join(' · '),
          category: acq,
        };
      }),
    [],
  );

  const handleAddTemplate = (item: SearchItem) => {
    const tpl = ALL_TEMPLATES.find((t) => t.id === item.key);
    if (!tpl) return;
    const entry: AppliedTemplate = {
      id: genId(),
      templateId: tpl.id,
      name: tpl.name,
      abilityScoreChanges: tpl.abilityScoreChanges?.length ? tpl.abilityScoreChanges : undefined,
      isFreeGrant: false,
      acquisitionType: tpl.acquisitionType,
      appliedAs: tpl.laAdjustment != null ? 'la' : 'cr',
      la: tpl.laAdjustment != null ? tpl.laAdjustment : undefined,
      cr: tpl.crAdjustment != null ? tpl.crAdjustment : undefined,
      paidTiers: [],
      sourceId: tpl.id,
      sourceRev: 0,
    };
    dispatch(addTemplate(entry));
    setTemplatePickerOpen(false);
  };

  const handleAddGrant = (name: string, note: string, grantedBy: string) => {
    const entry: AppliedTemplate = {
      id: genId(),
      name,
      templateId: '',
      isFreeGrant: true,
      freeGrantNote: note || undefined,
      grantedBy: grantedBy || undefined,
      appliedAs: 'cr',
      acquisitionType: 'either',
      paidTiers: [],
      sourceId: '',
      sourceRev: 0,
    };
    dispatch(addTemplate(entry));
    setGrantModalOpen(false);
  };

  return (
    <View style={styles.container}>
      {/* Summary row */}
      <View
        style={[
          styles.summaryRow,
          {
            backgroundColor: isDark ? colors.bg.secondary : colors.bg.tertiary,
            borderColor: colors.border.DEFAULT,
          },
        ]}
      >
        {ecl !== totalHD && (
          <>
            <AutoComputedValue value={`${ecl}`} label="ECL" />
            <View style={styles.summaryDivider} />
          </>
        )}
        <AutoComputedValue value={`${totalHD}`} label="HD" />
        <View style={styles.summaryDivider} />
        <AutoComputedValue value={babString} label="BAB" />
        <View style={styles.summaryDivider} />
        <AutoComputedValue value={formatSave(fort)} label="Fort" />
        <AutoComputedValue value={formatSave(ref)} label="Ref" />
        <AutoComputedValue value={formatSave(will)} label="Will" />
      </View>

      {/* Class cards — long-press ☰ handle to drag and reorder (multiclass only) */}
      <DraggableClassList />

      {/* Level progression editor — only relevant with multiple classes */}
      {classes.length > 1 && (
        <Pressable
          onPress={() => setLevelEditorOpen(true)}
          style={[styles.levelProgressionButton, { borderColor: colors.border.DEFAULT }]}
          accessibilityRole="button"
          accessibilityLabel="Edit level progression order"
        >
          <Text style={[styles.levelProgressionText, { color: colors.text.tertiary }]}>
            ⟳ Edit Level Progression
          </Text>
        </Pressable>
      )}

      {/* Add class button */}
      <Pressable
        onPress={() => setClassPickerOpen(true)}
        style={[styles.addButton, { borderColor: isDark ? fantasy.gold : fantasy.bronze }]}
        accessibilityRole="button"
        accessibilityLabel="Add class"
      >
        <Text style={[styles.addButtonText, { color: isDark ? fantasy.gold : fantasy.darkWood }]}>
          + Add Class
        </Text>
      </Pressable>

      {/* Templates section */}
      {regularTemplates.length > 0 && (
        <View style={styles.subSection}>
          <Text style={[styles.subSectionLabel, { color: colors.text.tertiary }]}>Templates</Text>
          {regularTemplates.map((entry) => (
            <TemplateEntryCard key={entry.id} entry={entry} />
          ))}
        </View>
      )}

      <Pressable
        onPress={() => setTemplatePickerOpen(true)}
        style={[styles.addButton, { borderColor: colors.border.DEFAULT }]}
        accessibilityRole="button"
        accessibilityLabel="Add template"
      >
        <Text style={[styles.addButtonText, { color: colors.text.tertiary }]}>+ Add Template</Text>
      </Pressable>

      {/* Free grants section */}
      {freeGrants.length > 0 && (
        <View style={styles.subSection}>
          <Text style={[styles.subSectionLabel, { color: colors.text.tertiary }]}>Free Grants</Text>
          {freeGrants.map((entry) => (
            <GrantedBonusCard key={entry.id} entry={entry} />
          ))}
        </View>
      )}

      <Pressable
        onPress={() => setGrantModalOpen(true)}
        style={[styles.addButton, { borderColor: colors.border.DEFAULT }]}
        accessibilityRole="button"
        accessibilityLabel="Add free grant"
      >
        <Text style={[styles.addButtonText, { color: colors.text.tertiary }]}>
          + Add Free Grant
        </Text>
      </Pressable>

      {/* Class picker sheet */}
      <SearchPickerSheet
        visible={classPickerOpen}
        title="Add Class"
        items={classSearchItems}
        onSelect={handleAddClass}
        onClose={() => setClassPickerOpen(false)}
        placeholder="Search classes..."
        allowCustom
        onAddCustom={(name) => {
          dispatch(
            addClass({
              id: genId(),
              name,
              level: 1,
              hitDieSize: 8,
              hitDieResults: [],
              skillRanks: 2,
              classSkills: [],
              babProgression: BABProgression.Medium,
              fortProgression: SaveProgression.Poor,
              refProgression: SaveProgression.Poor,
              willProgression: SaveProgression.Poor,
              classFeatures: [],
              sourceSystem: 'homebrew',
              classChoices: [],
              prereqOverride: false,
            }),
          );
          setClassPickerOpen(false);
        }}
      />

      {/* Template picker sheet */}
      <SearchPickerSheet
        visible={templatePickerOpen}
        title="Add Template"
        items={templateSearchItems}
        onSelect={handleAddTemplate}
        onClose={() => setTemplatePickerOpen(false)}
        placeholder="Search templates..."
      />

      {/* Add grant modal */}
      <AddGrantModal
        visible={grantModalOpen}
        onAdd={handleAddGrant}
        onClose={() => setGrantModalOpen(false)}
      />

      {/* Level progression editor */}
      <LevelSequenceEditor visible={levelEditorOpen} onClose={() => setLevelEditorOpen(false)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 0,
  },
  summaryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 12,
    gap: 4,
  },
  summaryDivider: {
    width: StyleSheet.hairlineWidth,
    height: 28,
    backgroundColor: 'rgba(128,128,128,0.3)',
    marginHorizontal: 4,
  },
  draggableRow: {
    paddingBottom: 8,
  },
  dragHandle: {
    paddingVertical: 4,
    paddingRight: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dragHandleIcon: {
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: -2,
  },
  subSection: {
    marginTop: 8,
  },
  subSectionLabel: {
    fontFamily: 'Cinzel',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1,
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  addButton: {
    borderWidth: 1,
    borderRadius: 8,
    borderStyle: 'dashed',
    paddingVertical: 10,
    alignItems: 'center',
    marginBottom: 8,
  },
  addButtonText: {
    fontFamily: 'LibreBaskerville',
    fontSize: 13,
    fontWeight: '600',
  },
  levelProgressionButton: {
    borderWidth: 1,
    borderRadius: 8,
    borderStyle: 'dashed',
    paddingVertical: 8,
    alignItems: 'center',
    marginBottom: 8,
  },
  levelProgressionText: {
    fontFamily: 'LibreBaskerville',
    fontSize: 12,
  },
  // Modal styles
  modalContainer: {
    flex: 1,
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
  },
  modalTitle: {
    flex: 1,
    fontFamily: 'Cinzel',
    fontSize: 16,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  modalClose: {
    padding: 4,
  },
  modalCloseText: {
    fontSize: 18,
    fontWeight: '700',
  },
  modalBody: {
    padding: 16,
    gap: 8,
  },
  inputLabel: {
    fontFamily: 'LibreBaskerville',
    fontSize: 12,
    fontWeight: '600',
    marginTop: 4,
  },
  textInput: {
    fontFamily: 'LibreBaskerville',
    fontSize: 15,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    minHeight: 44,
  },
  textArea: {
    minHeight: 80,
    textAlignVertical: 'top',
  },
  addGrantButton: {
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 8,
  },
  addGrantButtonText: {
    fontFamily: 'Cinzel',
    fontSize: 14,
    fontWeight: '700',
  },
});
