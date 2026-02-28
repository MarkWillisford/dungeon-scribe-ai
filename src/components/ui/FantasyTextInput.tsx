import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, type ViewStyle } from 'react-native';
import { useTheme } from '@/hooks/useTheme';

interface FantasyTextInputProps {
  label?: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  error?: string;
  secureTextEntry?: boolean;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  keyboardType?: 'default' | 'email-address' | 'numeric';
  style?: ViewStyle;
  testID?: string;
  accessibilityLabel?: string;
  accessibilityHint?: string;
}

export function FantasyTextInput({
  label,
  value,
  onChangeText,
  placeholder,
  error,
  secureTextEntry,
  autoCapitalize,
  keyboardType,
  style,
  testID,
  accessibilityLabel,
  accessibilityHint,
}: FantasyTextInputProps) {
  const { colors, fantasy, isDark } = useTheme();
  const [focused, setFocused] = useState(false);

  const borderColor = error ? colors.error.DEFAULT : focused ? fantasy.gold : colors.border.DEFAULT;

  return (
    <View style={[styles.container, style]}>
      {label && <Text style={[styles.label, { color: colors.text.secondary }]}>{label}</Text>}

      <TextInput
        testID={testID}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.text.tertiary}
        secureTextEntry={secureTextEntry}
        autoCapitalize={autoCapitalize}
        keyboardType={keyboardType}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={[
          styles.input,
          {
            backgroundColor: isDark ? colors.bg.tertiary : colors.bg.secondary,
            color: colors.text.primary,
            borderColor,
          },
        ]}
        accessibilityLabel={accessibilityLabel || label}
        accessibilityHint={accessibilityHint}
      />

      {error && <Text style={[styles.error, { color: colors.error.DEFAULT }]}>{error}</Text>}
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
  input: {
    fontFamily: 'LibreBaskerville',
    fontSize: 16,
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 10,
    minHeight: 44,
  },
  error: {
    fontFamily: 'LibreBaskerville',
    fontSize: 12,
    marginTop: 4,
  },
});
