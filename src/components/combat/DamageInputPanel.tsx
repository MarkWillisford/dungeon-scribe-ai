import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, ScrollView } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import {
  DamageResolutionService,
  type CharacterResistances,
  type IncomingDamageDescriptor,
} from '@services/DamageResolutionService';

interface DamageInputPanelProps {
  resistances: CharacterResistances;
  onApplyDamage: (resolvedAmount: number) => void;
  testID?: string;
}

const DESCRIPTOR_LABELS: Record<IncomingDamageDescriptor, string> = {
  fire: 'Fire',
  cold: 'Cold',
  electricity: 'Electricity',
  acid: 'Acid',
  sonic: 'Sonic',
  force: 'Force',
  negative: 'Negative',
  positive: 'Positive',
  piercing: 'Piercing',
  slashing: 'Slashing',
  bludgeoning: 'Bludgeoning',
  magic: 'Magic Weapon',
  silver: 'Silver',
  'cold iron': 'Cold Iron',
  adamantine: 'Adamantine',
  good: 'Good Aligned',
  evil: 'Evil Aligned',
  lawful: 'Lawful Aligned',
  chaotic: 'Chaotic Aligned',
};

export function DamageInputPanel({ resistances, onApplyDamage, testID }: DamageInputPanelProps) {
  const { colors, fantasy } = useTheme();
  const [amount, setAmount] = useState('');
  const [selectedType, setSelectedType] = useState<IncomingDamageDescriptor | null>(null);

  const showTypeSelector = DamageResolutionService.hasResistances(resistances);
  const selectorOptions = showTypeSelector
    ? DamageResolutionService.buildSelectorOptions(resistances)
    : [];

  const handleApply = () => {
    const val = parseInt(amount, 10);
    if (isNaN(val) || val <= 0) return;
    const resolved = DamageResolutionService.resolve(val, selectedType, resistances);
    onApplyDamage(resolved);
    setAmount('');
    setSelectedType(null);
  };

  const resolvedPreview =
    amount.length > 0 && !isNaN(parseInt(amount, 10)) && parseInt(amount, 10) > 0
      ? DamageResolutionService.resolve(parseInt(amount, 10), selectedType, resistances)
      : null;

  const showReduction =
    resolvedPreview !== null && selectedType !== null && resolvedPreview < parseInt(amount, 10);

  return (
    <View testID={testID} style={styles.container}>
      <View style={styles.inputRow}>
        <TextInput
          style={[
            styles.amountInput,
            {
              borderColor: colors.border.DEFAULT,
              backgroundColor: colors.bg.secondary,
              color: colors.text.primary,
            },
          ]}
          value={amount}
          onChangeText={setAmount}
          keyboardType="numeric"
          placeholder="Damage amount"
          placeholderTextColor={colors.text.tertiary}
          accessibilityLabel="Damage amount"
          testID={testID ? `${testID}-amount-input` : undefined}
        />
        <Pressable
          style={[styles.applyBtn, { backgroundColor: '#F44336' }]}
          onPress={handleApply}
          accessibilityLabel="Apply damage"
          testID={testID ? `${testID}-apply-btn` : undefined}
        >
          <Text style={styles.applyBtnText}>Apply</Text>
        </Pressable>
      </View>

      {showTypeSelector && (
        <View
          style={styles.typeSelectorContainer}
          testID={testID ? `${testID}-type-selector` : undefined}
        >
          <Text style={[styles.typeSelectorLabel, { color: colors.text.tertiary }]}>
            Damage type (optional — skip to apply raw)
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.typeChips}
          >
            {selectorOptions.map((type) => {
              const isSelected = selectedType === type;
              return (
                <Pressable
                  key={type}
                  style={[
                    styles.typeChip,
                    {
                      borderColor: isSelected ? fantasy.gold : colors.border.DEFAULT,
                      backgroundColor: isSelected ? fantasy.gold : colors.bg.secondary,
                    },
                  ]}
                  onPress={() => setSelectedType(isSelected ? null : type)}
                  accessibilityLabel={`Select ${DESCRIPTOR_LABELS[type]} damage type`}
                  accessibilityState={{ selected: isSelected }}
                  testID={testID ? `${testID}-type-${type}` : undefined}
                >
                  <Text
                    style={[
                      styles.typeChipText,
                      { color: isSelected ? colors.bg.primary : colors.text.secondary },
                    ]}
                  >
                    {DESCRIPTOR_LABELS[type]}
                  </Text>
                </Pressable>
              );
            })}
          </ScrollView>
        </View>
      )}

      {showReduction && resolvedPreview !== null && (
        <View
          style={[styles.reductionRow, { backgroundColor: colors.bg.secondary }]}
          testID={testID ? `${testID}-reduction-preview` : undefined}
        >
          <Text style={[styles.reductionText, { color: colors.text.tertiary }]}>
            {`Reduced: ${amount} → `}
          </Text>
          <Text style={[styles.reductionValue, { color: '#FF9800' }]}>{resolvedPreview}</Text>
          <Text style={[styles.reductionText, { color: colors.text.tertiary }]}>
            {` (−${parseInt(amount, 10) - resolvedPreview})`}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { gap: 8 },
  inputRow: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  amountInput: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontFamily: 'LibreBaskerville',
    fontSize: 14,
    minHeight: 44,
  },
  applyBtn: {
    borderRadius: 6,
    paddingHorizontal: 14,
    paddingVertical: 10,
    minHeight: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  applyBtnText: {
    fontFamily: 'Cinzel',
    fontSize: 12,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  typeSelectorContainer: {
    gap: 6,
  },
  typeSelectorLabel: {
    fontFamily: 'LibreBaskerville',
    fontSize: 11,
  },
  typeChips: {
    flexDirection: 'row',
    gap: 6,
    paddingVertical: 2,
  },
  typeChip: {
    borderWidth: 1,
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 6,
    minHeight: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  typeChipText: {
    fontFamily: 'LibreBaskerville',
    fontSize: 12,
    fontWeight: '600',
  },
  reductionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  reductionText: {
    fontFamily: 'LibreBaskerville',
    fontSize: 12,
  },
  reductionValue: {
    fontFamily: 'Cinzel',
    fontSize: 14,
    fontWeight: '700',
  },
});
