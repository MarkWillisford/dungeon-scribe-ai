import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { useAppDispatch } from '@/store/hooks';
import { resolveTemplateChoice } from '@/store/slices/characterEntrySlice';
import { SearchPickerSheet, type SearchItem } from '@/components/ui/SearchPickerSheet';
import type { TemplateChoiceDefinition, TemplateDefinition } from '@/data/templates/types';

export interface TemplateChoiceRowProps {
  choice: TemplateChoiceDefinition;
  currentSelection: string | undefined;
  appliedTemplateId: string;
  templateDefinition: TemplateDefinition;
}

export function TemplateChoiceRow({
  choice,
  currentSelection,
  appliedTemplateId,
  templateDefinition,
}: TemplateChoiceRowProps) {
  const { colors, fantasy, isDark } = useTheme();
  const dispatch = useAppDispatch();
  const [pickerOpen, setPickerOpen] = useState(false);

  const allOptions = choice.optionGroups?.flatMap((g) => g.options) ?? [];

  const selectedName = currentSelection
    ? (allOptions.find((o) => o.id === currentSelection)?.name ?? currentSelection)
    : undefined;

  const pickerItems: SearchItem[] = allOptions.map((o) => ({
    key: o.id,
    label: o.name,
    subLabel: o.description,
  }));

  const handleSelect = (item: SearchItem) => {
    dispatch(
      resolveTemplateChoice({
        appliedTemplateId,
        templateDefinition,
        choiceId: choice.id,
        selectionId: item.key,
      }),
    );
    setPickerOpen(false);
  };

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => setPickerOpen(true)}
        style={styles.row}
        accessibilityRole="button"
        accessibilityLabel={`Choose ${choice.label}`}
      >
        <Text style={[styles.label, { color: colors.text.secondary }]}>{choice.label}</Text>
        <Text
          style={[
            styles.value,
            {
              color: selectedName ? colors.text.primary : colors.text.tertiary,
              fontStyle: selectedName ? 'normal' : 'italic',
            },
          ]}
        >
          {selectedName ?? '— choose —'}
        </Text>
        <Text style={[styles.chevron, { color: isDark ? fantasy.gold : fantasy.darkWood }]}>
          {'›'}
        </Text>
      </Pressable>

      <SearchPickerSheet
        visible={pickerOpen}
        title={choice.label}
        items={pickerItems}
        onSelect={handleSelect}
        onClose={() => setPickerOpen(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 0,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    gap: 8,
  },
  label: {
    fontFamily: 'LibreBaskerville',
    fontSize: 13,
    minWidth: 80,
  },
  value: {
    flex: 1,
    fontFamily: 'LibreBaskerville',
    fontSize: 13,
  },
  chevron: {
    fontSize: 18,
    fontWeight: '700',
  },
});
