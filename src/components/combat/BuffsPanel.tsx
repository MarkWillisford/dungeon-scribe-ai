import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, TextInput, ScrollView, Modal } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { Buff, SavedBuff } from '@/types/buff';
import { BonusType } from '@/types/base';
import { PF1E_CONDITIONS } from '@/data/conditions/pf1eConditions';

const makeTimestamp = () => Date.now();

interface BuffsPanelProps {
  activeBuffs: Buff[];
  buffLibrary: SavedBuff[];
  round: number;
  activeConditions: string[];
  onAddBuff: (buff: Buff) => void;
  onRemoveBuff: (id: string) => void;
  onToggleBuff: (id: string) => void;
  onSaveToLibrary: (buff: SavedBuff) => void;
  onToggleCondition: (conditionName: string) => void;
  onStartTurn: () => void;
  onEndTurn: () => void;
  testID?: string;
}

const CATEGORY_COLORS: Record<string, string> = {
  Spell: '#7C4DFF',
  Item: '#B87333',
  Ability: '#228B22',
  Custom: '#1A237E',
};

const ACTIVE_GREEN = '#4CAF50';
const INACTIVE_GREY = '#9E9E9E';
const CONDITION_ACTIVE = '#E53935';

export function BuffsPanel({
  activeBuffs,
  buffLibrary,
  round: _round,
  activeConditions,
  onAddBuff,
  onRemoveBuff,
  onToggleBuff,
  onSaveToLibrary: _onSaveToLibrary,
  onToggleCondition,
  onStartTurn,
  onEndTurn,
  testID,
}: BuffsPanelProps) {
  const { colors, fantasy } = useTheme();
  const [showLibrary, setShowLibrary] = useState(false);
  const [showCustomModal, setShowCustomModal] = useState(false);
  const [customName, setCustomName] = useState('');
  const [customDuration, setCustomDuration] = useState('');
  const [expandedBuff, setExpandedBuff] = useState<string | null>(null);
  const [spellSearch, setSpellSearch] = useState('');

  const filteredLibrary = spellSearch.trim()
    ? buffLibrary.filter((b) => b.name.toLowerCase().includes(spellSearch.toLowerCase()))
    : buffLibrary;

  const handleAddFromLibrary = (saved: SavedBuff) => {
    const buff: Buff = {
      id: `${saved.id}_${makeTimestamp()}`,
      name: saved.name,
      description: saved.description,
      source: saved.source,
      bonusType: saved.bonusType,
      duration: saved.duration,
      durationType: saved.durationType,
      effects: saved.effects,
      isActive: true,
    };
    onAddBuff(buff);
    setShowLibrary(false);
    setSpellSearch('');
  };

  const handleCloseLibrary = () => {
    setShowLibrary(false);
    setSpellSearch('');
  };

  const handleAddCustom = () => {
    const name = customName.trim();
    if (!name) return;
    const dur = parseInt(customDuration, 10);
    const buff: Buff = {
      id: `custom_${Date.now()}`,
      name,
      source: 'Custom',
      bonusType: BonusType.UNTYPED,
      duration: isNaN(dur) || dur <= 0 ? null : dur,
      durationType: isNaN(dur) || dur <= 0 ? 'permanent' : 'rounds',
      effects: [],
      isActive: true,
    };
    onAddBuff(buff);
    setCustomName('');
    setCustomDuration('');
    setShowCustomModal(false);
  };

  const formatDuration = (buff: Buff): string => {
    if (buff.duration === null || buff.durationType === 'permanent') return 'Permanent';
    return `${buff.duration} ${buff.durationType}`;
  };

  return (
    <View testID={testID} style={styles.container}>
      {/* Active buffs */}
      {activeBuffs.length === 0 ? (
        <View style={[styles.emptyState, { borderColor: colors.border.DEFAULT }]}>
          <Text style={[styles.emptyText, { color: colors.text.tertiary }]}>No active buffs</Text>
        </View>
      ) : (
        activeBuffs.map((buff) => (
          <View
            key={buff.id}
            style={[
              styles.buffCard,
              {
                backgroundColor: colors.bg.secondary,
                borderColor: buff.isActive ? fantasy.bronze : colors.border.DEFAULT,
                opacity: buff.isActive ? 1 : 0.5,
              },
            ]}
          >
            <Pressable
              style={styles.buffHeader}
              onPress={() => setExpandedBuff(expandedBuff === buff.id ? null : buff.id)}
              accessibilityLabel={`${buff.name} buff details`}
            >
              <View style={styles.buffTitleRow}>
                <View
                  style={[
                    styles.buffDot,
                    { backgroundColor: buff.isActive ? ACTIVE_GREEN : INACTIVE_GREY },
                  ]}
                />
                <Text style={[styles.buffName, { color: colors.text.primary }]}>{buff.name}</Text>
              </View>
              <Text style={[styles.buffDuration, { color: fantasy.gold }]}>
                {formatDuration(buff)}
              </Text>
            </Pressable>

            {expandedBuff === buff.id && (
              <View style={[styles.buffDetails, { borderTopColor: colors.border.DEFAULT }]}>
                {buff.description ? (
                  <Text style={[styles.buffDesc, { color: colors.text.secondary }]}>
                    {buff.description}
                  </Text>
                ) : null}
                {buff.effects.length > 0 && (
                  <View style={styles.effectsList}>
                    {buff.effects.map((e, i) => (
                      <Text key={i} style={[styles.effectLine, { color: colors.text.tertiary }]}>
                        {e.target}:{' '}
                        {typeof e.value === 'number' && e.value >= 0 ? `+${e.value}` : e.value} (
                        {e.type})
                      </Text>
                    ))}
                  </View>
                )}
                <View style={styles.buffActions}>
                  <Pressable
                    style={[
                      styles.actionBtn,
                      { borderColor: buff.isActive ? '#FF9800' : ACTIVE_GREEN },
                    ]}
                    onPress={() => onToggleBuff(buff.id)}
                    accessibilityLabel={
                      buff.isActive ? `Deactivate ${buff.name}` : `Activate ${buff.name}`
                    }
                  >
                    <Text
                      style={[
                        styles.actionBtnText,
                        { color: buff.isActive ? '#FF9800' : ACTIVE_GREEN },
                      ]}
                    >
                      {buff.isActive ? 'Pause' : 'Resume'}
                    </Text>
                  </Pressable>
                  <Pressable
                    style={[styles.actionBtn, { borderColor: '#F44336' }]}
                    onPress={() => onRemoveBuff(buff.id)}
                    accessibilityLabel={`Remove ${buff.name}`}
                  >
                    <Text style={[styles.actionBtnText, { color: '#F44336' }]}>Remove</Text>
                  </Pressable>
                </View>
              </View>
            )}
          </View>
        ))
      )}

      {/* Turn cycle buttons */}
      <View style={styles.turnRow}>
        <Pressable
          style={[
            styles.turnBtn,
            { borderColor: ACTIVE_GREEN, backgroundColor: colors.bg.secondary },
          ]}
          onPress={onStartTurn}
          accessibilityLabel="Start Turn"
        >
          <Text style={[styles.turnBtnText, { color: ACTIVE_GREEN }]}>Start Turn</Text>
        </Pressable>
        <Pressable
          style={[
            styles.turnBtn,
            { borderColor: fantasy.bronze, backgroundColor: colors.bg.secondary },
          ]}
          onPress={onEndTurn}
          accessibilityLabel="End Turn"
        >
          <Text style={[styles.turnBtnText, { color: fantasy.bronze }]}>End Turn</Text>
        </Pressable>
      </View>

      {/* Add buttons */}
      <View style={styles.addRow}>
        <Pressable
          style={[styles.addBtn, { backgroundColor: colors.primary.DEFAULT }]}
          onPress={() => setShowLibrary(true)}
          accessibilityLabel="Add buff from library"
        >
          <Text style={styles.addBtnText}>+ From Library</Text>
        </Pressable>
        <Pressable
          style={[
            styles.addBtn,
            { backgroundColor: colors.bg.tertiary, borderColor: fantasy.bronze, borderWidth: 1 },
          ]}
          onPress={() => setShowCustomModal(true)}
          accessibilityLabel="Add custom buff"
        >
          <Text style={[styles.addBtnText, { color: fantasy.bronze }]}>+ Custom</Text>
        </Pressable>
      </View>

      {/* Conditions section */}
      <View style={[styles.conditionsSection, { borderColor: colors.border.DEFAULT }]}>
        <Text style={[styles.sectionHeader, { color: fantasy.gold }]}>Conditions</Text>
        <View style={styles.conditionsGrid}>
          {PF1E_CONDITIONS.map((cond) => {
            const isActive = activeConditions.includes(cond.name);
            return (
              <Pressable
                key={cond.name}
                style={[
                  styles.conditionBtn,
                  {
                    borderColor: isActive ? CONDITION_ACTIVE : colors.border.DEFAULT,
                    backgroundColor: isActive ? `${CONDITION_ACTIVE}22` : colors.bg.secondary,
                  },
                ]}
                onPress={() => onToggleCondition(cond.name)}
                accessibilityLabel={`Toggle ${cond.name} condition`}
                accessibilityState={{ selected: isActive }}
              >
                <Text
                  style={[
                    styles.conditionText,
                    { color: isActive ? CONDITION_ACTIVE : colors.text.secondary },
                  ]}
                >
                  {cond.name}
                </Text>
              </Pressable>
            );
          })}
        </View>
      </View>

      {/* Library Modal */}
      <Modal visible={showLibrary} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View
            style={[
              styles.modalSheet,
              { backgroundColor: colors.bg.primary, borderColor: fantasy.gold },
            ]}
          >
            <View style={styles.modalHeader}>
              <Text style={[styles.modalTitle, { color: fantasy.gold }]}>Buff Library</Text>
              <Pressable onPress={handleCloseLibrary} accessibilityLabel="Close library">
                <Text style={[styles.closeBtn, { color: colors.text.tertiary }]}>✕</Text>
              </Pressable>
            </View>
            <TextInput
              style={[
                styles.searchInput,
                {
                  borderColor: colors.border.DEFAULT,
                  backgroundColor: colors.bg.secondary,
                  color: colors.text.primary,
                },
              ]}
              value={spellSearch}
              onChangeText={setSpellSearch}
              placeholder="Search spells and abilities…"
              placeholderTextColor={colors.text.tertiary}
              accessibilityLabel="Search buff library"
            />
            <ScrollView style={styles.libraryList} showsVerticalScrollIndicator={false}>
              {filteredLibrary.length === 0 ? (
                <Text
                  style={[
                    styles.emptyText,
                    { color: colors.text.tertiary, textAlign: 'center', paddingVertical: 20 },
                  ]}
                >
                  {spellSearch.trim() ? 'No results' : 'No saved buffs yet'}
                </Text>
              ) : (
                filteredLibrary.map((saved) => (
                  <Pressable
                    key={saved.id}
                    style={[
                      styles.libraryItem,
                      { borderColor: colors.border.DEFAULT, backgroundColor: colors.bg.secondary },
                    ]}
                    onPress={() => handleAddFromLibrary(saved)}
                    accessibilityLabel={`Add ${saved.name}`}
                  >
                    <View style={styles.libraryItemHeader}>
                      <Text style={[styles.libraryName, { color: colors.text.primary }]}>
                        {saved.name}
                      </Text>
                      <View
                        style={[
                          styles.categoryBadge,
                          { backgroundColor: CATEGORY_COLORS[saved.category] ?? '#666' },
                        ]}
                      >
                        <Text style={styles.categoryText}>{saved.category}</Text>
                      </View>
                    </View>
                    <Text
                      style={[styles.libraryDesc, { color: colors.text.secondary }]}
                      numberOfLines={2}
                    >
                      {saved.description}
                    </Text>
                    <Text style={[styles.libraryDuration, { color: fantasy.gold }]}>
                      {saved.duration} {saved.durationType}
                    </Text>
                  </Pressable>
                ))
              )}
            </ScrollView>
          </View>
        </View>
      </Modal>

      {/* Custom Buff Modal */}
      <Modal visible={showCustomModal} transparent animationType="fade">
        <Pressable style={styles.modalOverlay} onPress={() => setShowCustomModal(false)}>
          <View
            style={[
              styles.customCard,
              { backgroundColor: colors.bg.primary, borderColor: fantasy.gold },
            ]}
          >
            <Text style={[styles.modalTitle, { color: fantasy.gold }]}>Custom Buff</Text>
            <TextInput
              style={[
                styles.input,
                {
                  borderColor: colors.border.DEFAULT,
                  backgroundColor: colors.bg.secondary,
                  color: colors.text.primary,
                },
              ]}
              value={customName}
              onChangeText={setCustomName}
              placeholder="Buff name"
              placeholderTextColor={colors.text.tertiary}
              autoFocus
            />
            <TextInput
              style={[
                styles.input,
                {
                  borderColor: colors.border.DEFAULT,
                  backgroundColor: colors.bg.secondary,
                  color: colors.text.primary,
                },
              ]}
              value={customDuration}
              onChangeText={setCustomDuration}
              placeholder="Duration (rounds, blank = permanent)"
              placeholderTextColor={colors.text.tertiary}
              keyboardType="numeric"
            />
            <Pressable
              style={[styles.addBtn, { backgroundColor: colors.primary.DEFAULT }]}
              onPress={handleAddCustom}
              accessibilityLabel="Add custom buff"
            >
              <Text style={styles.addBtnText}>Add Buff</Text>
            </Pressable>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { gap: 8 },
  emptyState: {
    borderWidth: 1,
    borderRadius: 8,
    borderStyle: 'dashed',
    padding: 20,
    alignItems: 'center',
  },
  emptyText: {
    fontFamily: 'LibreBaskerville',
    fontSize: 13,
  },
  buffCard: {
    borderWidth: 1,
    borderRadius: 8,
    overflow: 'hidden',
  },
  buffHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  buffTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    flex: 1,
  },
  buffDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  buffName: {
    fontFamily: 'Cinzel',
    fontSize: 13,
    fontWeight: '600',
    flex: 1,
  },
  buffDuration: {
    fontFamily: 'LibreBaskerville',
    fontSize: 12,
    marginLeft: 8,
  },
  buffDetails: {
    borderTopWidth: 1,
    padding: 10,
    gap: 6,
  },
  buffDesc: {
    fontFamily: 'LibreBaskerville',
    fontSize: 12,
  },
  effectsList: { gap: 2 },
  effectLine: {
    fontFamily: 'LibreBaskerville',
    fontSize: 11,
  },
  buffActions: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 4,
  },
  actionBtn: {
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 6,
    minHeight: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionBtnText: {
    fontFamily: 'Cinzel',
    fontSize: 11,
    fontWeight: '600',
  },
  turnRow: {
    flexDirection: 'row',
    gap: 8,
  },
  turnBtn: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
    minHeight: 44,
    justifyContent: 'center',
  },
  turnBtnText: {
    fontFamily: 'Cinzel',
    fontSize: 13,
    fontWeight: '600',
  },
  addRow: {
    flexDirection: 'row',
    gap: 8,
  },
  addBtn: {
    flex: 1,
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
    minHeight: 44,
    justifyContent: 'center',
  },
  addBtnText: {
    fontFamily: 'Cinzel',
    fontSize: 13,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  conditionsSection: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    gap: 8,
  },
  sectionHeader: {
    fontFamily: 'Cinzel',
    fontSize: 13,
    fontWeight: '700',
  },
  conditionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  conditionBtn: {
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 6,
    minHeight: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  conditionText: {
    fontFamily: 'LibreBaskerville',
    fontSize: 12,
    fontWeight: '600',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'flex-end',
  },
  modalSheet: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    maxHeight: '70%',
    padding: 16,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  modalTitle: {
    fontFamily: 'Cinzel',
    fontSize: 16,
    fontWeight: '700',
  },
  closeBtn: {
    fontFamily: 'Cinzel',
    fontSize: 18,
    padding: 4,
  },
  searchInput: {
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontFamily: 'LibreBaskerville',
    fontSize: 13,
    minHeight: 40,
    marginBottom: 10,
  },
  libraryList: { flex: 1 },
  libraryItem: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 8,
    gap: 4,
  },
  libraryItemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  libraryName: {
    fontFamily: 'Cinzel',
    fontSize: 13,
    fontWeight: '600',
    flex: 1,
  },
  categoryBadge: {
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  categoryText: {
    fontFamily: 'LibreBaskerville',
    fontSize: 10,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  libraryDesc: {
    fontFamily: 'LibreBaskerville',
    fontSize: 12,
  },
  libraryDuration: {
    fontFamily: 'LibreBaskerville',
    fontSize: 11,
  },
  customCard: {
    margin: 20,
    borderRadius: 12,
    borderWidth: 1,
    padding: 20,
    gap: 12,
  },
  input: {
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontFamily: 'LibreBaskerville',
    fontSize: 14,
    minHeight: 44,
  },
});
