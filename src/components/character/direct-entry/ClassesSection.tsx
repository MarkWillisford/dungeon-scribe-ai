import React, { useMemo, useState } from 'react';
import { View, Text, Pressable, TextInput, Modal, StyleSheet } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { addClass, addTemplate } from '@/store/slices/characterEntrySlice';
import { AutoComputedValue } from '@/components/ui/AutoComputedValue';
import { SearchPickerSheet, type SearchItem } from '@/components/ui/SearchPickerSheet';
import { ClassEntryCard } from './ClassEntryCard';
import { TemplateEntryCard } from './TemplateEntryCard';
import { GrantedBonusCard } from './GrantedBonusCard';
import {
  ALL_CLASSES_LIST,
  computeTotalBAB,
  formatBABString,
  computeBaseFort,
  computeBaseRef,
  computeBaseWill,
  computeECL,
} from '@/utils/characterComputations';
import { type DraftTemplateEntry } from '@/types/characterDraft';
function genId(): string {
  return Math.random().toString(36).slice(2) + Date.now().toString(36);
}

// ---- Class search items ----

const CLASS_SEARCH_ITEMS: SearchItem[] = ALL_CLASSES_LIST.map((cls) => ({
  key: cls.name,
  label: cls.name,
  subLabel: cls.category,
  category: cls.category,
}));

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
  const classes = useAppSelector((state) => state.characterEntry.draft.classes);
  const templates = useAppSelector((state) => state.characterEntry.draft.templates);

  const [classPickerOpen, setClassPickerOpen] = useState(false);
  const [grantModalOpen, setGrantModalOpen] = useState(false);

  const regularTemplates = templates.filter((t) => !t.isFreeGrant);
  const freeGrants = templates.filter((t) => t.isFreeGrant);

  // Computed summary values
  const totalBAB = useMemo(() => computeTotalBAB(classes), [classes]);
  const babString = useMemo(() => formatBABString(totalBAB), [totalBAB]);
  const fort = useMemo(() => computeBaseFort(classes), [classes]);
  const ref = useMemo(() => computeBaseRef(classes), [classes]);
  const will = useMemo(() => computeBaseWill(classes), [classes]);
  const ecl = useMemo(() => computeECL(classes, regularTemplates), [classes, regularTemplates]);

  const formatSave = (n: number) => (n >= 0 ? `+${n}` : `${n}`);

  const handleAddClass = (item: SearchItem) => {
    dispatch(
      addClass({
        id: genId(),
        className: item.label,
        level: 1,
        sourceSystem: 'pf1e',
        classChoices: [],
        prereqOverride: false,
      }),
    );
    setClassPickerOpen(false);
  };

  const handleAddGrant = (name: string, note: string, grantedBy: string) => {
    const entry: DraftTemplateEntry = {
      id: genId(),
      templateName: name,
      isFreeGrant: true,
      freeGrantNote: note || undefined,
      grantedBy: grantedBy || undefined,
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
        <AutoComputedValue value={`ECL ${ecl}`} label="ECL" />
        <View style={styles.summaryDivider} />
        <AutoComputedValue value={babString} label="BAB" />
        <View style={styles.summaryDivider} />
        <AutoComputedValue value={formatSave(fort)} label="Fort" />
        <AutoComputedValue value={formatSave(ref)} label="Ref" />
        <AutoComputedValue value={formatSave(will)} label="Will" />
      </View>

      {/* Class cards */}
      {classes.map((entry) => (
        <ClassEntryCard key={entry.id} entry={entry} />
      ))}

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
        onPress={() => {
          // Template picker — placeholder until template search is wired
          const entry: DraftTemplateEntry = {
            id: genId(),
            templateName: 'New Template',
            isFreeGrant: false,
            appliedAs: 'CR',
            crValue: 1,
            acquired: 'either',
          };
          dispatch(addTemplate(entry));
        }}
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
        items={CLASS_SEARCH_ITEMS}
        onSelect={handleAddClass}
        onClose={() => setClassPickerOpen(false)}
        placeholder="Search classes..."
        allowCustom
        onAddCustom={(name) => {
          dispatch(
            addClass({
              id: genId(),
              className: name,
              level: 1,
              sourceSystem: 'homebrew',
              classChoices: [],
              prereqOverride: false,
            }),
          );
          setClassPickerOpen(false);
        }}
      />

      {/* Add grant modal */}
      <AddGrantModal
        visible={grantModalOpen}
        onAdd={handleAddGrant}
        onClose={() => setGrantModalOpen(false)}
      />
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
