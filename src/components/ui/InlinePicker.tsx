import React, { useState } from 'react';
import { View, Text, Pressable, Modal, FlatList, StyleSheet, type ViewStyle } from 'react-native';
import { useTheme } from '@/hooks/useTheme';

export interface PickerOption {
  label: string;
  value: string;
}

interface InlinePickerProps {
  label?: string;
  value: string;
  options: PickerOption[];
  onValueChange: (value: string) => void;
  placeholder?: string;
  style?: ViewStyle;
  testID?: string;
}

/**
 * A tappable field that opens a modal sheet with a list of options.
 * Styled consistently with FantasyTextInput.
 */
export function InlinePicker({
  label,
  value,
  options,
  onValueChange,
  placeholder = 'Select...',
  style,
  testID,
}: InlinePickerProps) {
  const { colors, fantasy, isDark } = useTheme();
  const [open, setOpen] = useState(false);

  const selectedLabel = options.find((o) => o.value === value)?.label ?? placeholder;
  const hasValue = !!value;

  return (
    <View style={[styles.container, style]}>
      {label && <Text style={[styles.label, { color: colors.text.secondary }]}>{label}</Text>}

      <Pressable
        testID={testID}
        onPress={() => setOpen(true)}
        style={[
          styles.field,
          {
            backgroundColor: isDark ? colors.bg.tertiary : colors.bg.secondary,
            borderColor: open ? fantasy.gold : colors.border.DEFAULT,
          },
        ]}
        accessibilityRole="button"
        accessibilityLabel={label ? `${label}: ${selectedLabel}` : selectedLabel}
        accessibilityHint="Tap to open picker"
      >
        <Text
          style={[
            styles.valueText,
            { color: hasValue ? colors.text.primary : colors.text.tertiary },
          ]}
          numberOfLines={1}
        >
          {selectedLabel}
        </Text>
        <Text style={[styles.chevron, { color: colors.text.tertiary }]}>▾</Text>
      </Pressable>

      <Modal visible={open} transparent animationType="fade" onRequestClose={() => setOpen(false)}>
        <Pressable style={styles.backdrop} onPress={() => setOpen(false)}>
          <View
            style={[
              styles.sheet,
              {
                backgroundColor: isDark ? colors.bg.secondary : colors.bg.primary,
                borderColor: fantasy.bronze,
              },
            ]}
          >
            {label && (
              <Text
                style={[styles.sheetTitle, { color: isDark ? fantasy.gold : fantasy.darkWood }]}
              >
                {label}
              </Text>
            )}
            <FlatList
              data={options}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => {
                const isSelected = item.value === value;
                return (
                  <Pressable
                    onPress={() => {
                      onValueChange(item.value);
                      setOpen(false);
                    }}
                    style={[
                      styles.option,
                      {
                        borderBottomColor: colors.border.DEFAULT,
                        backgroundColor: isSelected
                          ? isDark
                            ? 'rgba(212,175,55,0.15)'
                            : 'rgba(140,90,40,0.08)'
                          : 'transparent',
                      },
                    ]}
                    accessibilityRole="menuitem"
                    accessibilityState={{ selected: isSelected }}
                  >
                    <Text
                      style={[
                        styles.optionText,
                        {
                          color: isSelected
                            ? isDark
                              ? fantasy.gold
                              : fantasy.darkWood
                            : colors.text.primary,
                          fontWeight: isSelected ? '700' : '400',
                        },
                      ]}
                    >
                      {item.label}
                    </Text>
                    {isSelected && (
                      <Text
                        style={[
                          styles.checkmark,
                          { color: isDark ? fantasy.gold : fantasy.darkWood },
                        ]}
                      >
                        ✓
                      </Text>
                    )}
                  </Pressable>
                );
              }}
            />
          </View>
        </Pressable>
      </Modal>
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
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 10,
    minHeight: 44,
  },
  valueText: {
    flex: 1,
    fontFamily: 'LibreBaskerville',
    fontSize: 16,
  },
  chevron: {
    fontSize: 14,
    marginLeft: 8,
  },
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  sheet: {
    width: '100%',
    maxHeight: 400,
    borderRadius: 10,
    borderWidth: 1,
    overflow: 'hidden',
  },
  sheetTitle: {
    fontFamily: 'Cinzel',
    fontSize: 14,
    fontWeight: '700',
    paddingHorizontal: 16,
    paddingVertical: 12,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    flex: 1,
    fontFamily: 'LibreBaskerville',
    fontSize: 16,
  },
  checkmark: {
    fontSize: 16,
    fontWeight: '700',
  },
});
