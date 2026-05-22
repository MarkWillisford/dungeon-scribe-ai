import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, TextInput } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import type { ResourcePool } from '@/types/resources';

interface ResourcesPlayPanelProps {
  pools: ResourcePool[];
  currentValues: Record<string, number>;
  onDecrementPool: (poolId: string, amount: number) => void;
  onNewEncounter: () => void;
  showNewEncounterButton: boolean;
  onLongRest: () => void;
  testID?: string;
}

export function ResourcesPlayPanel({
  pools,
  currentValues,
  onDecrementPool,
  onNewEncounter,
  showNewEncounterButton,
  onLongRest,
  testID,
}: ResourcesPlayPanelProps) {
  const { colors, fantasy } = useTheme();
  const [customInputFor, setCustomInputFor] = useState<string | null>(null);
  const [customAmount, setCustomAmount] = useState('');

  if (pools.length === 0) {
    return (
      <View testID={testID} style={styles.container}>
        <Text style={[styles.emptyText, { color: colors.text.tertiary }]}>
          No resource pools defined
        </Text>
        <Pressable
          style={[styles.restBtn, { borderColor: fantasy.gold }]}
          onPress={onLongRest}
          accessibilityLabel="Long Rest"
        >
          <Text style={[styles.restBtnText, { color: fantasy.gold }]}>Long Rest</Text>
        </Pressable>
      </View>
    );
  }

  const handleLongPress = (poolId: string) => {
    setCustomInputFor(poolId);
    setCustomAmount('');
  };

  const handleApplyCustom = () => {
    if (customInputFor === null) return;
    const val = parseInt(customAmount, 10);
    if (!isNaN(val) && val > 0) {
      onDecrementPool(customInputFor, val);
    }
    setCustomInputFor(null);
    setCustomAmount('');
  };

  const handleCancelCustom = () => {
    setCustomInputFor(null);
    setCustomAmount('');
  };

  return (
    <View testID={testID} style={styles.container}>
      {pools.map((pool) => {
        const current = currentValues[pool.id] ?? pool.max;
        const isEditingThis = customInputFor === pool.id;
        return (
          <View key={pool.id}>
            <View
              style={[
                styles.poolRow,
                {
                  borderColor: colors.border.DEFAULT,
                  backgroundColor: colors.bg.secondary,
                },
              ]}
            >
              <View style={styles.poolInfo}>
                <Text style={[styles.poolName, { color: colors.text.tertiary }]}>{pool.name}</Text>
                <Text style={[styles.poolValue, { color: fantasy.gold }]}>
                  {`${current} / ${pool.max}`}
                </Text>
              </View>
              <Pressable
                style={[styles.decrementBtn, { backgroundColor: colors.primary.DEFAULT }]}
                onPress={() => onDecrementPool(pool.id, 1)}
                onLongPress={() => handleLongPress(pool.id)}
                accessibilityLabel={`Spend 1 ${pool.name}`}
              >
                <Text style={styles.decrementBtnText}>−1</Text>
              </Pressable>
            </View>

            {isEditingThis && (
              <View
                style={[
                  styles.customRow,
                  {
                    borderColor: colors.border.DEFAULT,
                    backgroundColor: colors.bg.secondary,
                  },
                ]}
              >
                <TextInput
                  style={[
                    styles.customInput,
                    {
                      borderColor: colors.border.DEFAULT,
                      backgroundColor: colors.bg.primary,
                      color: colors.text.primary,
                    },
                  ]}
                  value={customAmount}
                  onChangeText={setCustomAmount}
                  keyboardType="numeric"
                  autoFocus
                  placeholder="Amount"
                  placeholderTextColor={colors.text.tertiary}
                  maxLength={3}
                  accessibilityLabel={`Custom decrement amount for ${pool.name}`}
                />
                <Pressable
                  style={[styles.customBtn, { borderColor: colors.border.DEFAULT }]}
                  onPress={handleCancelCustom}
                  accessibilityLabel="Cancel custom decrement"
                >
                  <Text style={[styles.customBtnText, { color: colors.text.secondary }]}>
                    Cancel
                  </Text>
                </Pressable>
                <Pressable
                  style={[styles.customBtn, { backgroundColor: colors.primary.DEFAULT }]}
                  onPress={handleApplyCustom}
                  accessibilityLabel="Apply custom decrement"
                >
                  <Text style={[styles.customBtnText, { color: '#FFFFFF' }]}>Apply</Text>
                </Pressable>
              </View>
            )}
          </View>
        );
      })}

      {showNewEncounterButton && (
        <Pressable
          style={[styles.newEncounterBtn, { borderColor: fantasy.bronze }]}
          onPress={onNewEncounter}
          accessibilityLabel="New Encounter"
        >
          <Text style={[styles.newEncounterBtnText, { color: fantasy.bronze }]}>New Encounter</Text>
        </Pressable>
      )}

      <Pressable
        style={[styles.restBtn, { borderColor: fantasy.gold }]}
        onPress={onLongRest}
        accessibilityLabel="Long Rest"
      >
        <Text style={[styles.restBtnText, { color: fantasy.gold }]}>Long Rest</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { gap: 8 },
  emptyText: {
    fontFamily: 'LibreBaskerville',
    fontSize: 13,
    textAlign: 'center',
    paddingVertical: 12,
  },
  poolRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    gap: 10,
  },
  poolInfo: {
    flex: 1,
    gap: 2,
  },
  poolName: {
    fontFamily: 'LibreBaskerville',
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  poolValue: {
    fontFamily: 'Cinzel',
    fontSize: 22,
    fontWeight: '700',
  },
  decrementBtn: {
    borderRadius: 6,
    paddingHorizontal: 14,
    paddingVertical: 8,
    minHeight: 44,
    minWidth: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  decrementBtnText: {
    fontFamily: 'Cinzel',
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: '700',
  },
  customRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    gap: 8,
    marginTop: 4,
  },
  customInput: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 8,
    fontFamily: 'LibreBaskerville',
    fontSize: 14,
    minHeight: 44,
    textAlign: 'center',
  },
  customBtn: {
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 8,
    minHeight: 44,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'transparent',
  },
  customBtnText: {
    fontFamily: 'Cinzel',
    fontSize: 12,
    fontWeight: '600',
  },
  newEncounterBtn: {
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 4,
  },
  newEncounterBtnText: {
    fontFamily: 'Cinzel',
    fontSize: 13,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  restBtn: {
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 4,
  },
  restBtnText: {
    fontFamily: 'Cinzel',
    fontSize: 13,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
});
