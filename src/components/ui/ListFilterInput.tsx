import React from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { useTheme } from '@/hooks/useTheme';

interface ListFilterInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  /** Shown alongside the field while filtering, so an empty list is explicable. */
  resultCount?: number;
  testID?: string;
  accessibilityLabel?: string;
}

/**
 * An inline filter box for a long browsable list.
 *
 * The guided flow renders every race and every class as an expandable card, so
 * a modal search picker would cost the browsing that makes those screens
 * useful. This narrows the list in place instead (#363).
 */
export function ListFilterInput({
  value,
  onChangeText,
  placeholder = 'Filter...',
  resultCount,
  testID,
  accessibilityLabel,
}: ListFilterInputProps) {
  const { colors, isDark } = useTheme();
  const isFiltering = value.trim() !== '';

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.field,
          {
            backgroundColor: isDark ? colors.bg.tertiary : colors.bg.secondary,
            borderColor: colors.border.DEFAULT,
          },
        ]}
      >
        <Text style={styles.icon}>🔍</Text>
        <TextInput
          testID={testID}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={colors.text.tertiary}
          autoCorrect={false}
          autoCapitalize="none"
          style={[styles.input, { color: colors.text.primary }]}
          accessibilityLabel={accessibilityLabel ?? placeholder}
        />
        {isFiltering && (
          <Pressable
            onPress={() => onChangeText('')}
            hitSlop={8}
            accessibilityRole="button"
            accessibilityLabel="Clear filter"
            testID={testID ? `${testID}-clear` : undefined}
          >
            <Text style={[styles.clear, { color: colors.text.tertiary }]}>✕</Text>
          </Pressable>
        )}
      </View>

      {isFiltering && resultCount !== undefined && (
        <Text style={[styles.count, { color: colors.text.tertiary }]}>
          {resultCount === 1 ? '1 match' : `${resultCount} matches`}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingTop: 8,
    paddingBottom: 4,
  },
  field: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 10,
    minHeight: 40,
  },
  icon: {
    fontSize: 14,
  },
  input: {
    flex: 1,
    fontFamily: 'LibreBaskerville',
    fontSize: 15,
    paddingVertical: 8,
  },
  clear: {
    fontSize: 14,
  },
  count: {
    fontFamily: 'LibreBaskerville',
    fontSize: 11,
    marginTop: 4,
  },
});
