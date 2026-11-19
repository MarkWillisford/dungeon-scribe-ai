import React from 'react';
import { View, Text, Pressable, StyleSheet, type ViewStyle } from 'react-native';
import { useTheme } from '@/hooks/useTheme';

interface PickerFieldProps {
  label: string;
  /** Current selection. Empty string renders the placeholder instead. */
  value: string;
  placeholder?: string;
  onPress: () => void;
  /**
   * Marks the field as one the character cannot do without. When it is also
   * empty the border and hint turn to the warning colour, so an unset value is
   * visible rather than merely absent.
   */
  required?: boolean;
  /** Affordance on the right. Search for a long list, chevron for a short one. */
  affordance?: 'search' | 'chevron';
  style?: ViewStyle;
  testID?: string;
  accessibilityLabel?: string;
}

/**
 * A field that opens a picker, styled as the twin of FantasyTextInput.
 *
 * Identity used three different idioms for what is, to the user, the same act
 * of filling in a field: text inputs, inline pickers, and one-off Pressables
 * for Race and Ruleset. Race in particular read as decoration rather than an
 * input and was easy to skip entirely (#365). Anything that opens a picker
 * should look like the fields either side of it.
 */
export function PickerField({
  label,
  value,
  placeholder = 'Tap to select...',
  onPress,
  required = false,
  affordance = 'search',
  style,
  testID,
  accessibilityLabel,
}: PickerFieldProps) {
  const { colors, fantasy, isDark } = useTheme();

  const isUnset = value.trim() === '';
  const needsAttention = required && isUnset;

  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.label, { color: colors.text.secondary }]}>
        {required ? `${label} *` : label}
      </Text>

      <Pressable
        onPress={onPress}
        testID={testID}
        accessibilityRole="button"
        accessibilityLabel={accessibilityLabel ?? `${label}: ${value || 'not set'}. Tap to change.`}
        style={[
          styles.field,
          {
            backgroundColor: isDark ? colors.bg.tertiary : colors.bg.secondary,
            borderColor: needsAttention ? colors.warning.DEFAULT : colors.border.DEFAULT,
          },
        ]}
      >
        <Text
          style={[
            styles.value,
            {
              color: isUnset ? colors.text.tertiary : isDark ? fantasy.gold : fantasy.darkWood,
              fontStyle: isUnset ? 'italic' : 'normal',
            },
          ]}
          numberOfLines={1}
        >
          {value || placeholder}
        </Text>
        <Text style={[styles.affordance, { color: colors.text.tertiary }]}>
          {affordance === 'search' ? '🔍' : '›'}
        </Text>
      </Pressable>

      {needsAttention && (
        <Text style={[styles.hint, { color: colors.warning.DEFAULT }]}>
          {`Required — ${label.toLowerCase()} drives much of the sheet`}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
  },
  label: {
    fontFamily: 'Cinzel',
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 4,
    textTransform: 'uppercase',
  },
  field: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 10,
    minHeight: 44,
  },
  value: {
    flex: 1,
    fontFamily: 'LibreBaskerville',
    fontSize: 16,
  },
  affordance: {
    fontSize: 14,
  },
  hint: {
    fontFamily: 'LibreBaskerville',
    fontSize: 12,
    marginTop: 4,
  },
});
