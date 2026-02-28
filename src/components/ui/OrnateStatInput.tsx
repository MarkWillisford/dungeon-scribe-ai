import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useTheme } from '@/hooks/useTheme';

interface OrnateStatInputProps {
  label: string;
  value: number;
  modifier?: number;
  onIncrement: () => void;
  onDecrement: () => void;
  min?: number;
  max?: number;
  testID?: string;
}

export function OrnateStatInput({
  label,
  value,
  modifier,
  onIncrement,
  onDecrement,
  min = 1,
  max = 30,
  testID,
}: OrnateStatInputProps) {
  const { colors, isDark } = useTheme();

  const canDecrement = value > min;
  const canIncrement = value < max;

  const modifierText =
    modifier !== undefined ? (modifier >= 0 ? `+${modifier}` : `${modifier}`) : null;

  return (
    <View testID={testID} style={styles.container}>
      <Text style={[styles.label, { color: colors.text.secondary }]}>{label}</Text>

      <View
        style={[
          styles.inputRow,
          {
            backgroundColor: isDark ? colors.bg.tertiary : colors.bg.secondary,
            borderColor: colors.border.DEFAULT,
          },
        ]}
      >
        <Pressable
          onPress={onDecrement}
          disabled={!canDecrement}
          style={[
            styles.button,
            !canDecrement && styles.buttonDisabled,
            { borderRightColor: colors.border.DEFAULT },
          ]}
          accessibilityRole="button"
          accessibilityLabel={`Decrease ${label}`}
          accessibilityHint={`Current value is ${value}`}
        >
          <Text
            style={[
              styles.buttonText,
              { color: canDecrement ? colors.text.primary : colors.text.tertiary },
            ]}
          >
            -
          </Text>
        </Pressable>

        <View style={styles.valueContainer}>
          <Text
            style={[styles.valueText, { color: colors.text.primary }]}
            accessibilityLabel={`${label} value ${value}`}
          >
            {value}
          </Text>
        </View>

        <Pressable
          onPress={onIncrement}
          disabled={!canIncrement}
          style={[
            styles.button,
            !canIncrement && styles.buttonDisabled,
            { borderLeftColor: colors.border.DEFAULT },
          ]}
          accessibilityRole="button"
          accessibilityLabel={`Increase ${label}`}
          accessibilityHint={`Current value is ${value}`}
        >
          <Text
            style={[
              styles.buttonText,
              { color: canIncrement ? colors.text.primary : colors.text.tertiary },
            ]}
          >
            +
          </Text>
        </Pressable>
      </View>

      {modifierText !== null && (
        <Text
          style={[
            styles.modifier,
            {
              color:
                modifier! > 0
                  ? colors.success.DEFAULT
                  : modifier! < 0
                    ? colors.error.DEFAULT
                    : colors.text.tertiary,
            },
          ]}
        >
          {modifierText}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    minWidth: 80,
  },
  label: {
    fontFamily: 'Cinzel',
    fontSize: 12,
    fontWeight: '600',
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 6,
    overflow: 'hidden',
  },
  button: {
    width: 32,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 44,
    minHeight: 44,
  },
  buttonDisabled: {
    opacity: 0.3,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '700',
  },
  valueContainer: {
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  valueText: {
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'LibreBaskerville',
  },
  modifier: {
    fontFamily: 'LibreBaskerville',
    fontSize: 14,
    fontWeight: '700',
    marginTop: 4,
  },
});
