import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, Modal } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { CombatService, HPState } from '@services/CombatService';

interface HPTrackerProps {
  currentHP: number;
  maxHP: number;
  tempHP: number;
  nonlethalDamage: number;
  conScore: number;
  onAdjustHP: (delta: number) => void;
  onAddTempHP: (amount: number) => void;
  onAdjustNonlethal: (delta: number) => void;
  testID?: string;
}

const HP_STATE_COLORS = {
  healthy: '#4CAF50',
  wounded: '#FF9800',
  disabled: '#FF5722',
  dying: '#F44336',
  dead: '#424242',
};

const HP_STATE_LABELS: Record<HPState, string> = {
  healthy: 'Healthy',
  wounded: 'Wounded',
  disabled: 'Disabled',
  dying: 'Dying',
  dead: 'Dead',
};

export function HPTracker({
  currentHP,
  maxHP,
  tempHP,
  nonlethalDamage,
  conScore,
  onAdjustHP,
  onAddTempHP,
  onAdjustNonlethal,
  testID,
}: HPTrackerProps) {
  const { colors, fantasy } = useTheme();
  const [customInput, setCustomInput] = useState('');
  const [tempInput, setTempInput] = useState('');
  const [showTempModal, setShowTempModal] = useState(false);

  const hpState = CombatService.getHPState(currentHP, maxHP, conScore);
  const stateColor = HP_STATE_COLORS[hpState];
  const hpPercent = maxHP > 0 ? Math.max(0, Math.min(1, currentHP / maxHP)) : 0;

  const handleQuickAdjust = (delta: number) => {
    onAdjustHP(delta);
  };

  const handleCustomDamage = () => {
    const val = parseInt(customInput, 10);
    if (!isNaN(val) && val > 0) {
      onAdjustHP(-val);
      setCustomInput('');
    }
  };

  const handleCustomHeal = () => {
    const val = parseInt(customInput, 10);
    if (!isNaN(val) && val > 0) {
      onAdjustHP(val);
      setCustomInput('');
    }
  };

  const handleAddTemp = () => {
    const val = parseInt(tempInput, 10);
    if (!isNaN(val) && val > 0) {
      onAddTempHP(val);
      setTempInput('');
      setShowTempModal(false);
    }
  };

  return (
    <View testID={testID} style={styles.container}>
      {/* HP Bar */}
      <View style={[styles.hpBar, { backgroundColor: colors.bg.tertiary }]}>
        <View
          style={[
            styles.hpBarFill,
            { width: `${hpPercent * 100}%` as `${number}%`, backgroundColor: stateColor },
          ]}
        />
      </View>

      {/* Main HP Display */}
      <View style={styles.hpDisplay}>
        <View style={styles.hpNumbers}>
          <View style={styles.currentHPContainer}>
            {tempHP > 0 && (
              <View style={[styles.tempHPBadge, { backgroundColor: '#2196F3' }]}>
                <Text style={styles.tempHPText}>{`+${tempHP} temp`}</Text>
              </View>
            )}
            <Text
              style={[styles.currentHP, { color: stateColor }]}
              accessibilityLabel={`Current hit points: ${currentHP}`}
            >
              {currentHP}
            </Text>
          </View>
          <Text style={[styles.hpDivider, { color: colors.text.tertiary }]}>/</Text>
          <Text style={[styles.maxHP, { color: colors.text.secondary }]}>{maxHP}</Text>
        </View>

        <View
          style={[styles.stateBadge, { backgroundColor: stateColor }]}
          accessibilityLabel={`HP state: ${HP_STATE_LABELS[hpState]}`}
        >
          <Text style={styles.stateLabel}>{HP_STATE_LABELS[hpState]}</Text>
        </View>
      </View>

      {/* Nonlethal indicator */}
      {nonlethalDamage > 0 && (
        <View style={styles.nonlethalRow}>
          <Text style={[styles.nonlethalLabel, { color: colors.text.tertiary }]}>
            {`Nonlethal: ${nonlethalDamage}`}
          </Text>
          <Pressable onPress={() => onAdjustNonlethal(-nonlethalDamage)}>
            <Text style={[styles.clearText, { color: fantasy.gold }]}>Clear</Text>
          </Pressable>
        </View>
      )}

      {/* Quick adjust buttons */}
      <View style={styles.quickButtons}>
        {[-10, -5, -1].map((delta) => (
          <Pressable
            key={delta}
            style={[
              styles.quickBtn,
              { borderColor: '#F44336', backgroundColor: colors.bg.secondary },
            ]}
            onPress={() => handleQuickAdjust(delta)}
            accessibilityLabel={`Take ${Math.abs(delta)} damage`}
          >
            <Text style={[styles.quickBtnText, { color: '#F44336' }]}>{delta}</Text>
          </Pressable>
        ))}
        {[1, 5, 10].map((delta) => (
          <Pressable
            key={delta}
            style={[
              styles.quickBtn,
              { borderColor: '#4CAF50', backgroundColor: colors.bg.secondary },
            ]}
            onPress={() => handleQuickAdjust(delta)}
            accessibilityLabel={`Heal ${delta} hit points`}
          >
            <Text style={[styles.quickBtnText, { color: '#4CAF50' }]}>{`+${delta}`}</Text>
          </Pressable>
        ))}
      </View>

      {/* Custom input row */}
      <View style={styles.customRow}>
        <TextInput
          style={[
            styles.customInput,
            {
              borderColor: colors.border.DEFAULT,
              backgroundColor: colors.bg.secondary,
              color: colors.text.primary,
            },
          ]}
          value={customInput}
          onChangeText={setCustomInput}
          keyboardType="numeric"
          placeholder="Amount"
          placeholderTextColor={colors.text.tertiary}
          accessibilityLabel="Custom HP amount"
        />
        <Pressable
          style={[styles.customBtn, { backgroundColor: '#F44336' }]}
          onPress={handleCustomDamage}
          accessibilityLabel="Apply damage"
        >
          <Text style={styles.customBtnText}>Damage</Text>
        </Pressable>
        <Pressable
          style={[styles.customBtn, { backgroundColor: '#4CAF50' }]}
          onPress={handleCustomHeal}
          accessibilityLabel="Apply healing"
        >
          <Text style={styles.customBtnText}>Heal</Text>
        </Pressable>
      </View>

      {/* Temp HP button */}
      <Pressable
        style={[
          styles.tempHPButton,
          { borderColor: '#2196F3', backgroundColor: colors.bg.secondary },
        ]}
        onPress={() => setShowTempModal(true)}
        accessibilityLabel="Add temporary hit points"
      >
        <Text style={[styles.tempHPButtonText, { color: '#2196F3' }]}>+ Temp HP</Text>
      </Pressable>

      {/* Temp HP Modal */}
      <Modal visible={showTempModal} transparent animationType="fade">
        <Pressable style={styles.modalOverlay} onPress={() => setShowTempModal(false)}>
          <View
            style={[
              styles.modalCard,
              { backgroundColor: colors.bg.primary, borderColor: fantasy.gold },
            ]}
          >
            <Text style={[styles.modalTitle, { color: fantasy.gold }]}>Add Temporary HP</Text>
            <TextInput
              style={[
                styles.customInput,
                {
                  borderColor: colors.border.DEFAULT,
                  backgroundColor: colors.bg.secondary,
                  color: colors.text.primary,
                  marginBottom: 12,
                },
              ]}
              value={tempInput}
              onChangeText={setTempInput}
              keyboardType="numeric"
              placeholder="Amount"
              placeholderTextColor={colors.text.tertiary}
              autoFocus
            />
            <Pressable
              style={[styles.customBtn, { backgroundColor: '#2196F3', alignSelf: 'stretch' }]}
              onPress={handleAddTemp}
            >
              <Text style={styles.customBtnText}>Add</Text>
            </Pressable>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { gap: 10 },
  hpBar: {
    height: 8,
    borderRadius: 4,
    overflow: 'hidden',
  },
  hpBarFill: {
    height: '100%',
    borderRadius: 4,
  },
  hpDisplay: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  hpNumbers: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 4,
  },
  currentHPContainer: {
    alignItems: 'center',
  },
  tempHPBadge: {
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginBottom: 2,
  },
  tempHPText: {
    fontFamily: 'LibreBaskerville',
    fontSize: 11,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  currentHP: {
    fontFamily: 'Cinzel',
    fontSize: 48,
    fontWeight: '700',
    lineHeight: 52,
  },
  hpDivider: {
    fontFamily: 'Cinzel',
    fontSize: 32,
    lineHeight: 48,
  },
  maxHP: {
    fontFamily: 'Cinzel',
    fontSize: 24,
    lineHeight: 48,
  },
  stateBadge: {
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  stateLabel: {
    fontFamily: 'Cinzel',
    fontSize: 12,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  nonlethalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nonlethalLabel: {
    fontFamily: 'LibreBaskerville',
    fontSize: 13,
  },
  clearText: {
    fontFamily: 'LibreBaskerville',
    fontSize: 13,
    fontWeight: '600',
  },
  quickButtons: {
    flexDirection: 'row',
    gap: 6,
  },
  quickBtn: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 6,
    paddingVertical: 8,
    alignItems: 'center',
    minHeight: 44,
    justifyContent: 'center',
  },
  quickBtnText: {
    fontFamily: 'Cinzel',
    fontSize: 13,
    fontWeight: '600',
  },
  customRow: {
    flexDirection: 'row',
    gap: 6,
    alignItems: 'center',
  },
  customInput: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontFamily: 'LibreBaskerville',
    fontSize: 14,
    minHeight: 44,
  },
  customBtn: {
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 10,
    minHeight: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  customBtnText: {
    fontFamily: 'Cinzel',
    fontSize: 12,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  tempHPButton: {
    borderWidth: 1,
    borderRadius: 6,
    paddingVertical: 8,
    alignItems: 'center',
    minHeight: 44,
    justifyContent: 'center',
  },
  tempHPButtonText: {
    fontFamily: 'Cinzel',
    fontSize: 13,
    fontWeight: '600',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalCard: {
    width: 260,
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    gap: 8,
  },
  modalTitle: {
    fontFamily: 'Cinzel',
    fontSize: 15,
    fontWeight: '700',
    textAlign: 'center',
  },
});
