import React, { useMemo } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { toggleAlternateRacialTrait } from '@/store/slices/characterEntrySlice';
import { GameDataService } from '@/services/GameDataService';
import type { AlternativeRacialTraitData, RacialTraitData } from '@/data/races/types';

interface ActiveTraitsListProps {
  traits: RacialTraitData[];
}

function ActiveTraitsList({ traits }: ActiveTraitsListProps) {
  const { colors } = useTheme();
  return (
    <View style={styles.activeTraitsContainer} testID="active-traits-list">
      {traits.map((trait) => (
        <Text
          key={trait.name}
          style={[styles.activeTraitName, { color: colors.text.secondary }]}
          testID={`active-trait-${trait.name}`}
        >
          {trait.name}
        </Text>
      ))}
    </View>
  );
}

interface ArtRowProps {
  art: AlternativeRacialTraitData;
  isSelected: boolean;
  onToggle: () => void;
}

function ArtRow({ art, isSelected, onToggle }: ArtRowProps) {
  const { colors, fantasy, isDark } = useTheme();
  const replacesLabel = art.replaces.length > 0 ? art.replaces.join(', ') : null;

  return (
    <Pressable
      onPress={onToggle}
      style={[
        styles.artRow,
        {
          borderColor: isSelected ? fantasy.gold : colors.border.DEFAULT,
          backgroundColor: isSelected
            ? isDark
              ? 'rgba(212, 175, 55, 0.12)'
              : 'rgba(212, 175, 55, 0.08)'
            : isDark
              ? colors.bg.secondary
              : colors.bg.primary,
        },
      ]}
      accessibilityRole="checkbox"
      accessibilityLabel={`${art.name}${replacesLabel ? `, replaces ${replacesLabel}` : ''}`}
      accessibilityState={{ checked: isSelected }}
      testID={`art-row-${art.name}`}
    >
      <View style={styles.artRowContent}>
        <View style={styles.artNameRow}>
          <Text
            style={[styles.artName, { color: isSelected ? fantasy.gold : colors.text.primary }]}
          >
            {art.name}
          </Text>
          {isSelected && <Text style={[styles.activeTag, { color: fantasy.gold }]}>Active</Text>}
        </View>
        {replacesLabel && (
          <Text style={[styles.replacesLabel, { color: colors.text.tertiary }]}>
            {`Replaces: ${replacesLabel}`}
          </Text>
        )}
      </View>
      <View
        style={[
          styles.checkbox,
          {
            borderColor: isSelected ? fantasy.gold : colors.border.DEFAULT,
            backgroundColor: isSelected ? fantasy.gold : 'transparent',
          },
        ]}
      >
        {isSelected && <Text style={styles.checkmark}>✓</Text>}
      </View>
    </Pressable>
  );
}

interface AltRacialTraitsSectionProps {
  raceName: string;
}

export function AltRacialTraitsSection({ raceName }: AltRacialTraitsSectionProps) {
  const { colors, fantasy, isDark } = useTheme();
  const dispatch = useAppDispatch();
  const selectedArtNames = useAppSelector(
    (state) => state.characterEntry.character.info.selectedAlternateRacialTraits ?? [],
  );

  const race = useMemo(() => GameDataService.getRaceByNameSync(raceName), [raceName]);

  const altTraits = race?.alternativeRacialTraits ?? [];

  const activeTraits = useMemo((): RacialTraitData[] => {
    if (!race) return [];
    const replacedBySelections = new Set<string>(
      selectedArtNames.flatMap((artName) => {
        const art = altTraits.find((a) => a.name === artName);
        return art?.replaces.map((r) => r.toLowerCase()) ?? [];
      }),
    );
    const activeDefaults = race.racialTraits.filter(
      (t) => !replacedBySelections.has(t.name.toLowerCase()),
    );
    const selectedArtTraits: RacialTraitData[] = selectedArtNames
      .map((artName) => altTraits.find((a) => a.name === artName))
      .filter((a): a is AlternativeRacialTraitData => a !== undefined)
      .map((a) => ({ name: a.name, description: a.description }));
    return [...activeDefaults, ...selectedArtTraits];
  }, [race, selectedArtNames, altTraits]);

  if (altTraits.length === 0) return null;

  return (
    <View style={styles.container} testID="alt-racial-traits-section">
      <Text style={[styles.sectionTitle, { color: isDark ? fantasy.gold : fantasy.darkWood }]}>
        Racial Traits
      </Text>

      <Text style={[styles.subLabel, { color: colors.text.tertiary }]}>Active traits</Text>
      <ActiveTraitsList traits={activeTraits} />

      <Text style={[styles.subLabel, styles.altTraitsLabel, { color: colors.text.tertiary }]}>
        Alternate racial traits
      </Text>
      {altTraits.map((art) => (
        <ArtRow
          key={art.name}
          art={art}
          isSelected={selectedArtNames.includes(art.name)}
          onToggle={() => dispatch(toggleAlternateRacialTrait(art.name))}
        />
      ))}
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
  subLabel: {
    fontFamily: 'LibreBaskerville',
    fontSize: 11,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 4,
    marginTop: 8,
  },
  altTraitsLabel: {
    marginTop: 12,
  },
  activeTraitsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
  },
  activeTraitName: {
    fontFamily: 'LibreBaskerville',
    fontSize: 11,
  },
  artRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 6,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 6,
  },
  artRowContent: {
    flex: 1,
  },
  artNameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  artName: {
    fontFamily: 'Cinzel',
    fontSize: 12,
    fontWeight: '700',
  },
  activeTag: {
    fontFamily: 'LibreBaskerville',
    fontSize: 10,
    fontWeight: '600',
  },
  replacesLabel: {
    fontFamily: 'LibreBaskerville',
    fontSize: 11,
    marginTop: 2,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 1.5,
    marginLeft: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkmark: {
    color: '#FFFFFF',
    fontSize: 12,
    lineHeight: 16,
  },
});
