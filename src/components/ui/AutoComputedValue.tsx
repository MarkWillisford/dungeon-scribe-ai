import React from 'react';
import { View, Text, Pressable, StyleSheet, type ViewStyle } from 'react-native';
import { useTheme } from '@/hooks/useTheme';

interface AutoComputedValueProps {
  value: string | number;
  label?: string;
  isOverridden?: boolean;
  overrideNote?: string;
  onOverride?: () => void;
  style?: ViewStyle;
  testID?: string;
}

/**
 * Displays an auto-computed value in amber text.
 * When tapped (and onOverride is provided), signals intent to override.
 * Shows a lock icon and source note when already overridden.
 */
export function AutoComputedValue({
  value,
  label,
  isOverridden = false,
  overrideNote,
  onOverride,
  style,
  testID,
}: AutoComputedValueProps) {
  const { fantasy, colors } = useTheme();

  const amber = fantasy.gold;
  const tappable = !!onOverride;

  return (
    <Pressable
      testID={testID}
      onPress={onOverride}
      disabled={!tappable}
      style={[styles.container, style]}
      accessibilityRole={tappable ? 'button' : 'text'}
      accessibilityLabel={
        label
          ? `${label}: ${value}${isOverridden ? ' (manual override)' : ' (auto-computed)'}`
          : undefined
      }
      accessibilityHint={tappable && !isOverridden ? 'Tap to override this value' : undefined}
    >
      {label && <Text style={[styles.label, { color: colors.text.secondary }]}>{label}</Text>}
      <View style={styles.valueRow}>
        <Text style={[styles.value, { color: amber }]}>{value}</Text>
        {isOverridden && <Text style={[styles.lockIcon, { color: colors.text.tertiary }]}>🔒</Text>}
      </View>
      {isOverridden && overrideNote && (
        <Text style={[styles.note, { color: colors.text.tertiary }]}>{overrideNote}</Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
  },
  label: {
    fontFamily: 'Cinzel',
    fontSize: 10,
    fontWeight: '600',
    textTransform: 'uppercase',
    marginBottom: 2,
    letterSpacing: 0.5,
  },
  valueRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  value: {
    fontFamily: 'LibreBaskerville',
    fontSize: 16,
    fontWeight: '600',
  },
  lockIcon: {
    fontSize: 12,
  },
  note: {
    fontFamily: 'LibreBaskerville',
    fontSize: 11,
    fontStyle: 'italic',
    marginTop: 2,
  },
});
