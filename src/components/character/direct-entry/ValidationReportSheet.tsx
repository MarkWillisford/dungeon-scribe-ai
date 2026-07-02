import React from 'react';
import { View, Text, Pressable, Modal, SectionList, StyleSheet, SafeAreaView } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  acknowledgeWarning,
  setActiveTab,
  type EntryTabKey,
  type EntryValidationWarning,
} from '@/store/slices/characterEntrySlice';

// ---- Props ----

interface ValidationReportSheetProps {
  visible: boolean;
  onClose: () => void;
  onSave: () => void;
}

// ---- Section data ----

const TAB_ORDER: EntryTabKey[] = [
  'identity',
  'abilities',
  'classes',
  'combat',
  'skills',
  'traits',
  'flaws',
  'feats',
  'spells',
  'equipment',
  'notes',
];

const TAB_LABELS: Record<EntryTabKey, string> = {
  identity: 'Identity',
  abilities: 'Abilities',
  classes: 'Classes',
  combat: 'Combat',
  skills: 'Skills',
  traits: 'Traits',
  flaws: 'Flaws',
  feats: 'Feats',
  spells: 'Spells',
  equipment: 'Equipment',
  notes: 'Notes',
};

interface WarningSection {
  title: string;
  tabKey: EntryTabKey;
  data: EntryValidationWarning[];
}

function buildSections(warnings: EntryValidationWarning[]): WarningSection[] {
  return TAB_ORDER.map((tab) => {
    const sectionWarnings = warnings
      .filter((w) => w.section === tab)
      .sort((a, b) => {
        // Acknowledged warnings sink to the bottom within their section
        if (a.isAcknowledged !== b.isAcknowledged) return a.isAcknowledged ? 1 : -1;
        return 0;
      });
    return { title: TAB_LABELS[tab].toUpperCase(), tabKey: tab, data: sectionWarnings };
  }).filter((s) => s.data.length > 0);
}

// ---- Warning row ----

interface WarningRowProps {
  warning: EntryValidationWarning;
  onAcknowledge: () => void;
  onFixIn: () => void;
}

function WarningRow({ warning, onAcknowledge, onFixIn }: WarningRowProps) {
  const { colors, fantasy, isDark } = useTheme();
  const acknowledged = warning.isAcknowledged;

  return (
    <View
      style={[
        rowStyles.container,
        {
          borderBottomColor: colors.border.DEFAULT,
          opacity: acknowledged ? 0.45 : 1,
        },
      ]}
    >
      {/* Icon + message */}
      <View style={rowStyles.header}>
        <Text style={[rowStyles.icon, { color: acknowledged ? colors.text.tertiary : '#F59E0B' }]}>
          {acknowledged ? '✓' : '⚠'}
        </Text>
        <Text
          style={[
            rowStyles.message,
            { color: acknowledged ? colors.text.tertiary : colors.text.primary },
          ]}
        >
          {warning.message}
        </Text>
      </View>

      {/* Detail */}
      {warning.detail ? (
        <Text style={[rowStyles.detail, { color: colors.text.secondary }]}>{warning.detail}</Text>
      ) : null}

      {/* Actions */}
      {!acknowledged && (
        <View style={rowStyles.actions}>
          <Pressable
            onPress={onAcknowledge}
            style={[rowStyles.actionBtn, { borderColor: colors.border.DEFAULT }]}
            accessibilityRole="button"
            accessibilityLabel="Override — trust player"
          >
            <Text style={[rowStyles.actionText, { color: colors.text.tertiary }]}>Override</Text>
          </Pressable>
          <Pressable
            onPress={onFixIn}
            style={[rowStyles.actionBtn, { borderColor: isDark ? fantasy.gold : fantasy.bronze }]}
            accessibilityRole="button"
            accessibilityLabel={`Fix in ${TAB_LABELS[warning.section]}`}
          >
            <Text
              style={[rowStyles.actionText, { color: isDark ? fantasy.gold : fantasy.darkWood }]}
            >
              Fix in {TAB_LABELS[warning.section]}
            </Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}

const rowStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    gap: 6,
  },
  header: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'flex-start',
  },
  icon: {
    fontSize: 14,
    fontWeight: '700',
    marginTop: 1,
  },
  message: {
    flex: 1,
    fontFamily: 'LibreBaskerville',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 20,
  },
  detail: {
    fontFamily: 'LibreBaskerville',
    fontSize: 12,
    fontStyle: 'italic',
    lineHeight: 18,
    paddingLeft: 22, // align with message
  },
  actions: {
    flexDirection: 'row',
    gap: 8,
    paddingLeft: 22,
    marginTop: 2,
  },
  actionBtn: {
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  actionText: {
    fontFamily: 'LibreBaskerville',
    fontSize: 12,
  },
});

// ---- Main sheet ----

export function ValidationReportSheet({ visible, onClose, onSave }: ValidationReportSheetProps) {
  const { colors, fantasy, isDark } = useTheme();
  const dispatch = useAppDispatch();
  const warnings = useAppSelector((state) => state.characterEntry.validationWarnings);

  const sections = buildSections(warnings);
  const totalCount = warnings.length;
  const unacknowledgedCount = warnings.filter((w) => !w.isAcknowledged).length;

  const handleAcknowledge = (id: string) => dispatch(acknowledgeWarning(id));

  const handleFixIn = (tab: EntryTabKey) => {
    dispatch(setActiveTab(tab));
    onClose();
  };

  const summaryText =
    totalCount === 0
      ? 'All checks passed'
      : unacknowledgedCount === 0
        ? `${totalCount} warning${totalCount !== 1 ? 's' : ''} — all overridden`
        : `${unacknowledgedCount} warning${unacknowledgedCount !== 1 ? 's' : ''} remaining`;

  const summaryColor =
    totalCount === 0 ? '#4CAF50' : unacknowledgedCount === 0 ? colors.text.tertiary : '#F59E0B';

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <SafeAreaView
        style={[
          styles.container,
          { backgroundColor: isDark ? colors.bg.primary : colors.bg.secondary },
        ]}
      >
        {/* Header */}
        <View style={[styles.header, { borderBottomColor: colors.border.DEFAULT }]}>
          <Text style={[styles.title, { color: isDark ? fantasy.gold : fantasy.darkWood }]}>
            Validation Report
          </Text>
          <Pressable
            onPress={onClose}
            style={styles.closeBtn}
            hitSlop={12}
            accessibilityRole="button"
            accessibilityLabel="Close"
          >
            <Text style={[styles.closeText, { color: colors.text.tertiary }]}>✕</Text>
          </Pressable>
        </View>

        {/* Summary */}
        <View style={[styles.summaryRow, { borderBottomColor: colors.border.DEFAULT }]}>
          <Text style={[styles.summaryText, { color: summaryColor }]}>{summaryText}</Text>
        </View>

        {/* Warning list */}
        {totalCount === 0 ? (
          <View style={styles.emptyState}>
            <Text style={[styles.emptyIcon, { color: '#4CAF50' }]}>✓</Text>
            <Text style={[styles.emptyText, { color: colors.text.secondary }]}>
              No issues found. This character is good to go.
            </Text>
          </View>
        ) : (
          <SectionList
            sections={sections}
            keyExtractor={(item) => item.id}
            renderSectionHeader={({ section }) => (
              <View
                style={[
                  styles.sectionHeader,
                  { backgroundColor: isDark ? colors.bg.tertiary : colors.bg.primary },
                ]}
              >
                <Text
                  style={[
                    styles.sectionTitle,
                    { color: isDark ? fantasy.bronze : fantasy.darkWood },
                  ]}
                >
                  {section.title}
                </Text>
                <Text style={[styles.sectionCount, { color: colors.text.tertiary }]}>
                  {section.data.length}
                </Text>
              </View>
            )}
            renderItem={({ item }) => (
              <WarningRow
                warning={item}
                onAcknowledge={() => handleAcknowledge(item.id)}
                onFixIn={() => handleFixIn(item.section)}
              />
            )}
            contentContainerStyle={styles.listContent}
            stickySectionHeadersEnabled
          />
        )}

        {/* Footer */}
        <View style={[styles.footer, { borderTopColor: colors.border.DEFAULT }]}>
          <Pressable
            onPress={onSave}
            style={[styles.saveBtn, { backgroundColor: isDark ? fantasy.gold : fantasy.darkWood }]}
            accessibilityRole="button"
            accessibilityLabel="Save anyway"
          >
            <Text style={[styles.saveBtnText, { color: isDark ? '#1a1008' : '#fff' }]}>
              Save Anyway
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </Modal>
  );
}

// ---- Styles ----

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
  closeBtn: {
    padding: 4,
  },
  closeText: {
    fontSize: 18,
    fontWeight: '700',
  },
  summaryRow: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
  },
  summaryText: {
    fontFamily: 'LibreBaskerville',
    fontSize: 13,
    fontWeight: '700',
  },
  emptyState: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    paddingHorizontal: 32,
  },
  emptyIcon: {
    fontSize: 48,
  },
  emptyText: {
    fontFamily: 'LibreBaskerville',
    fontSize: 15,
    textAlign: 'center',
    lineHeight: 22,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  sectionTitle: {
    flex: 1,
    fontFamily: 'Cinzel',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1,
  },
  sectionCount: {
    fontFamily: 'LibreBaskerville',
    fontSize: 11,
  },
  listContent: {
    flexGrow: 1,
  },
  footer: {
    padding: 16,
    borderTopWidth: 1,
  },
  saveBtn: {
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
  },
  saveBtnText: {
    fontFamily: 'Cinzel',
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
});
