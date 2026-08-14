import React, { useState, useEffect, useMemo } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { SearchPickerSheet, type SearchItem } from '@/components/ui/SearchPickerSheet';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { upsertRacialChoice } from '@/store/slices/characterEntrySlice';
import { GameDataService } from '@/services/GameDataService';
import type { RacialChoiceDefinition } from '@/types/racialChoices';

function buildInlineItems(definition: RacialChoiceDefinition): SearchItem[] {
  if (!definition.optionGroups) return [];
  return definition.optionGroups.flatMap((group) =>
    group.options.map((opt) => ({
      key: opt.id,
      label: opt.name,
      subLabel: opt.description?.slice(0, 80),
      category: group.name || undefined,
    })),
  );
}

interface RacialChoiceRowProps {
  definition: RacialChoiceDefinition;
  currentSelection?: string;
}

function RacialChoiceRow({ definition, currentSelection }: RacialChoiceRowProps) {
  const { colors, fantasy, isDark } = useTheme();
  const dispatch = useAppDispatch();
  const [pickerOpen, setPickerOpen] = useState(false);
  const [collectionItems, setCollectionItems] = useState<SearchItem[]>([]);

  const inlineItems = useMemo(
    () => (definition.optionSource === 'inline' ? buildInlineItems(definition) : []),
    [definition],
  );

  useEffect(() => {
    if (definition.optionSource === 'collection' && definition.collectionName) {
      GameDataService.getClassChoiceItems(
        definition.collectionName,
        definition.collectionFilter ?? {},
      )
        .then((items) => setCollectionItems(items))
        .catch((e) => console.error('RacialChoiceRow: failed to load collection items', e));
    }
  }, [definition]);

  const pickerItems = definition.optionSource === 'inline' ? inlineItems : collectionItems;

  const selectedLabel =
    pickerItems.find((i) => i.key === currentSelection)?.label ?? currentSelection ?? '';

  const handleSelect = (item: SearchItem) => {
    dispatch(
      upsertRacialChoice({
        featureName: definition.featureName,
        selection: item.key,
      }),
    );
    setPickerOpen(false);
  };

  return (
    <>
      <Pressable
        onPress={() => setPickerOpen(true)}
        style={[
          styles.row,
          {
            borderColor: colors.border.DEFAULT,
            backgroundColor: isDark ? colors.bg.secondary : colors.bg.primary,
          },
        ]}
        accessibilityRole="button"
        accessibilityLabel={`Choose ${definition.featureName}`}
      >
        <View style={styles.rowContent}>
          <Text style={[styles.featureName, { color: colors.text.primary }]}>
            {definition.featureName}
          </Text>
          <Text
            style={[
              styles.selection,
              { color: selectedLabel ? fantasy.gold : colors.text.tertiary },
            ]}
          >
            {selectedLabel || 'Tap to choose...'}
          </Text>
        </View>
        <Text style={[styles.chevron, { color: colors.text.tertiary }]}>›</Text>
      </Pressable>

      <SearchPickerSheet
        visible={pickerOpen}
        title={definition.featureName}
        items={pickerItems}
        onSelect={handleSelect}
        onClose={() => setPickerOpen(false)}
      />
    </>
  );
}

interface RacialChoicesSectionProps {
  raceName: string;
}

export function RacialChoicesSection({ raceName }: RacialChoicesSectionProps) {
  const { colors, fantasy, isDark } = useTheme();
  const dispatch = useAppDispatch();
  const racialChoices = useAppSelector(
    (state) => state.characterEntry.character.info.racialChoices ?? [],
  );
  const [definitions, setDefinitions] = useState<RacialChoiceDefinition[]>([]);

  useEffect(() => {
    if (!raceName) return;
    GameDataService.getRacialChoiceDefinitions(raceName)
      .then(setDefinitions)
      .catch((e) => console.error('RacialChoicesSection: failed to load definitions', e));
  }, [raceName]);

  if (definitions.length === 0) return null;

  return (
    <View style={styles.container}>
      <Text style={[styles.sectionTitle, { color: isDark ? fantasy.gold : fantasy.darkWood }]}>
        Racial Choices
      </Text>
      {definitions.map((def) => {
        const current = racialChoices.find((c) => c.featureName === def.featureName);
        const currentSelection =
          typeof current?.selection === 'string' ? current.selection : undefined;
        return (
          <RacialChoiceRow key={def.id} definition={def} currentSelection={currentSelection} />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
  },
  sectionTitle: {
    fontFamily: 'Cinzel',
    fontSize: 13,
    fontWeight: '700',
    marginBottom: 6,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 6,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 6,
  },
  rowContent: {
    flex: 1,
  },
  featureName: {
    fontFamily: 'Cinzel',
    fontSize: 12,
    fontWeight: '700',
    marginBottom: 2,
  },
  selection: {
    fontFamily: 'LibreBaskerville',
    fontSize: 12,
  },
  chevron: {
    fontFamily: 'LibreBaskerville',
    fontSize: 18,
    marginLeft: 8,
  },
});
