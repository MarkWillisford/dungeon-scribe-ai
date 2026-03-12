import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Modal, SafeAreaView } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { useAppDispatch } from '@/store/hooks';
import { appendRoll } from '@store/slices/combatSlice';
import { RollRecord } from '@/types/buff';
import { DiceRoller } from './DiceRoller';

interface DiceFABProps {
  /** If true, the FAB is hidden (e.g. when the combat screen's Dice tab is active) */
  hidden?: boolean;
}

export function DiceFAB({ hidden = false }: DiceFABProps) {
  const { colors, fantasy } = useTheme();
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);

  if (hidden) return null;

  const handleRollRecorded = (record: RollRecord) => {
    dispatch(appendRoll(record));
  };

  return (
    <>
      {/* Floating button */}
      <Pressable
        style={[styles.fab, { backgroundColor: fantasy.bronze }]}
        onPress={() => setOpen(true)}
        accessibilityLabel="Open dice roller"
        accessibilityRole="button"
      >
        <Text style={styles.fabIcon}>⚄</Text>
      </Pressable>

      {/* Full-screen modal dice roller */}
      <Modal
        visible={open}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={() => setOpen(false)}
      >
        <SafeAreaView style={[styles.modalContainer, { backgroundColor: colors.bg.primary }]}>
          {/* Header */}
          <View style={[styles.modalHeader, { borderBottomColor: colors.border.DEFAULT }]}>
            <Text style={[styles.modalTitle, { color: fantasy.gold }]}>Dice Roller</Text>
            <Pressable
              style={[styles.closeBtn, { backgroundColor: colors.bg.tertiary }]}
              onPress={() => setOpen(false)}
              accessibilityLabel="Close dice roller"
            >
              <Text style={[styles.closeBtnText, { color: colors.text.secondary }]}>Done</Text>
            </Pressable>
          </View>

          <View style={styles.rollerWrapper}>
            <DiceRoller onRollRecorded={handleRollRecorded} />
          </View>
        </SafeAreaView>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    bottom: 90,
    right: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
    zIndex: 100,
  },
  fabIcon: {
    fontSize: 28,
  },
  modalContainer: {
    flex: 1,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  modalTitle: {
    fontFamily: 'Cinzel',
    fontSize: 18,
    fontWeight: '700',
  },
  closeBtn: {
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 6,
  },
  closeBtnText: {
    fontFamily: 'Cinzel',
    fontSize: 14,
    fontWeight: '600',
  },
  rollerWrapper: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
});
