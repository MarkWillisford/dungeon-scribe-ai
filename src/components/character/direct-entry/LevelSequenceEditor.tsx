import React, { useState, useMemo } from 'react';
import { View, Text, Pressable, Modal, ScrollView, StyleSheet } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { initLevelOrder, swapLevelSlot } from '@/store/slices/characterEntrySlice';

// ---- Class picker row ----

interface ClassOption {
  id: string;
  name: string;
  currentLevel: number;
}

interface SlotPickerProps {
  charLevel: number;
  currentClassId: string;
  options: ClassOption[];
  onSelect: (classId: string) => void;
  onClose: () => void;
}

function SlotPicker({ charLevel, currentClassId, options, onSelect, onClose }: SlotPickerProps) {
  const { colors, fantasy, isDark } = useTheme();

  return (
    <View
      style={[
        pickerStyles.container,
        {
          backgroundColor: isDark ? colors.bg.secondary : colors.bg.primary,
          borderColor: colors.border.DEFAULT,
        },
      ]}
    >
      <View style={[pickerStyles.header, { borderBottomColor: colors.border.DEFAULT }]}>
        <Text style={[pickerStyles.title, { color: isDark ? fantasy.gold : fantasy.darkWood }]}>
          {`Level ${charLevel} — Choose Class`}
        </Text>
        <Pressable onPress={onClose} hitSlop={12}>
          <Text style={[pickerStyles.close, { color: colors.text.tertiary }]}>✕</Text>
        </Pressable>
      </View>
      {options.map((opt) => {
        const isCurrent = opt.id === currentClassId;
        // Can't swap away the last level of a class from this slot
        const wouldEmpty = isCurrent && opt.currentLevel === 1;
        return (
          <Pressable
            key={opt.id}
            onPress={() => {
              if (!isCurrent && !wouldEmpty) onSelect(opt.id);
            }}
            style={[
              pickerStyles.option,
              { borderBottomColor: colors.border.DEFAULT },
              isCurrent && {
                backgroundColor: isDark ? 'rgba(212,175,55,0.1)' : 'rgba(120,80,20,0.07)',
              },
            ]}
            disabled={wouldEmpty && isCurrent}
          >
            <Text
              style={[
                pickerStyles.optionText,
                {
                  color: isCurrent
                    ? isDark
                      ? fantasy.gold
                      : fantasy.darkWood
                    : colors.text.primary,
                  fontWeight: isCurrent ? '700' : '400',
                },
              ]}
            >
              {opt.name}
            </Text>
            <Text style={[pickerStyles.optionSub, { color: colors.text.tertiary }]}>
              {isCurrent ? 'current' : `Lv ${opt.currentLevel}`}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const pickerStyles = StyleSheet.create({
  container: {
    borderRadius: 12,
    borderWidth: 1,
    overflow: 'hidden',
    marginTop: 4,
    marginBottom: 8,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  title: {
    flex: 1,
    fontFamily: 'Cinzel',
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  close: {
    fontSize: 14,
    fontWeight: '700',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    flex: 1,
    fontFamily: 'LibreBaskerville',
    fontSize: 14,
  },
  optionSub: {
    fontFamily: 'LibreBaskerville',
    fontSize: 11,
    fontStyle: 'italic',
  },
});

// ---- Main component ----

interface LevelSequenceEditorProps {
  visible: boolean;
  onClose: () => void;
}

export function LevelSequenceEditor({ visible, onClose }: LevelSequenceEditorProps) {
  const { colors, fantasy, isDark } = useTheme();
  const dispatch = useAppDispatch();
  const classes = useAppSelector((state) => state.characterEntry.character.classes.classes);
  const levelOrder = useAppSelector((state) => state.characterEntry.character.classes.levelOrder);

  const [openSlot, setOpenSlot] = useState<number | null>(null);

  // Build class options list
  const classOptions = useMemo<ClassOption[]>(
    () =>
      classes.map((c) => ({
        id: c.id ?? c.name,
        name: c.name,
        currentLevel: c.level,
      })),
    [classes],
  );

  // Resolve class name from ID for display
  const classNameById = useMemo(() => {
    const map = new Map<string, string>();
    for (const c of classes) {
      map.set(c.id ?? c.name, c.name);
    }
    return map;
  }, [classes]);

  const handleOpen = () => {
    if (!levelOrder) {
      dispatch(initLevelOrder());
    }
  };

  const order = levelOrder ?? [];

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
      onShow={handleOpen}
    >
      <View
        style={[
          styles.container,
          { backgroundColor: isDark ? colors.bg.primary : colors.bg.secondary },
        ]}
      >
        {/* Header */}
        <View style={[styles.header, { borderBottomColor: colors.border.DEFAULT }]}>
          <Text style={[styles.title, { color: isDark ? fantasy.gold : fantasy.darkWood }]}>
            Level Progression
          </Text>
          <Pressable onPress={onClose} hitSlop={12} style={styles.closeButton}>
            <Text style={[styles.closeText, { color: colors.text.tertiary }]}>✕</Text>
          </Pressable>
        </View>

        <Text style={[styles.hint, { color: colors.text.tertiary }]}>
          Tap any level to change which class was taken at that character level.
        </Text>

        <ScrollView contentContainerStyle={styles.list}>
          {order.map((classId, idx) => {
            const charLevel = idx + 1;
            const name = classNameById.get(classId) ?? classId;
            const isOpen = openSlot === charLevel;

            return (
              <View key={charLevel}>
                <Pressable
                  onPress={() => setOpenSlot(isOpen ? null : charLevel)}
                  style={[
                    styles.levelRow,
                    { borderBottomColor: colors.border.DEFAULT },
                    isOpen && {
                      backgroundColor: isDark ? 'rgba(212,175,55,0.08)' : 'rgba(120,80,20,0.05)',
                    },
                  ]}
                  accessibilityRole="button"
                  accessibilityLabel={`Character level ${charLevel}: ${name}. Tap to change.`}
                >
                  <Text style={[styles.levelNum, { color: colors.text.tertiary }]}>
                    {String(charLevel).padStart(2, ' ')}
                  </Text>
                  <Text style={[styles.className, { color: colors.text.primary }]}>{name}</Text>
                  <Text style={[styles.chevron, { color: colors.text.tertiary }]}>
                    {isOpen ? '▲' : '▼'}
                  </Text>
                </Pressable>

                {isOpen && (
                  <SlotPicker
                    charLevel={charLevel}
                    currentClassId={classId}
                    options={classOptions}
                    onSelect={(newClassId) => {
                      dispatch(swapLevelSlot({ charLevel, newClassId }));
                      setOpenSlot(null);
                    }}
                    onClose={() => setOpenSlot(null)}
                  />
                )}
              </View>
            );
          })}
        </ScrollView>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
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
  closeButton: {
    padding: 4,
  },
  closeText: {
    fontSize: 18,
    fontWeight: '700',
  },
  hint: {
    fontFamily: 'LibreBaskerville',
    fontSize: 12,
    fontStyle: 'italic',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  list: {
    paddingBottom: 40,
  },
  levelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    gap: 12,
  },
  levelNum: {
    fontFamily: 'Cinzel',
    fontSize: 12,
    fontWeight: '700',
    width: 24,
    textAlign: 'right',
  },
  className: {
    flex: 1,
    fontFamily: 'LibreBaskerville',
    fontSize: 15,
  },
  chevron: {
    fontSize: 10,
  },
});
