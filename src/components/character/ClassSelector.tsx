import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet, ScrollView } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { FantasyDivider } from '@/components/ui/FantasyDivider';
import { CORE_CLASSES, type ClassData } from '@/data/classes';

interface ClassSelectorProps {
  selectedClass: string | null;
  onSelectClass: (className: string) => void;
  testID?: string;
}

export function ClassSelector({ selectedClass, onSelectClass, testID }: ClassSelectorProps) {
  const { colors, fantasy, isDark } = useTheme();
  const [expandedClass, setExpandedClass] = useState<string | null>(selectedClass);

  const handleClassPress = (cls: ClassData) => {
    setExpandedClass(cls.name === expandedClass ? null : cls.name);
    onSelectClass(cls.name);
  };

  const formatSaves = (cls: ClassData) => {
    const saves = [];
    if (cls.saves.fortitude === 'Good') saves.push('Fort');
    if (cls.saves.reflex === 'Good') saves.push('Ref');
    if (cls.saves.will === 'Good') saves.push('Will');
    return `Good Saves: ${saves.join(', ')}`;
  };

  return (
    <View testID={testID}>
      <ScrollView>
        {CORE_CLASSES.map((cls) => {
          const isSelected = selectedClass === cls.name;
          const isExpanded = expandedClass === cls.name;
          const level1Features = cls.classFeatures.filter((f) => f.level === 1);

          return (
            <Pressable
              key={cls.name}
              onPress={() => handleClassPress(cls)}
              accessibilityRole="radio"
              accessibilityLabel={cls.name}
              accessibilityState={{ selected: isSelected }}
            >
              <View
                style={[
                  styles.classItem,
                  {
                    backgroundColor: isSelected
                      ? isDark
                        ? colors.bg.tertiary
                        : colors.bg.tertiary
                      : isDark
                        ? colors.bg.secondary
                        : colors.bg.primary,
                    borderColor: isSelected ? fantasy.gold : colors.border.DEFAULT,
                  },
                ]}
              >
                <View style={styles.classHeader}>
                  <Text style={[styles.className, { color: colors.text.primary }]}>{cls.name}</Text>
                  <Text style={[styles.hitDie, { color: fantasy.gold }]}>d{cls.hitDie}</Text>
                </View>

                <Text style={[styles.classInfo, { color: colors.text.tertiary }]}>
                  BAB: {cls.babProgression} | {formatSaves(cls)}
                </Text>

                {isExpanded && (
                  <View style={styles.classDetails}>
                    <FantasyDivider />

                    <Text
                      style={[
                        styles.sectionTitle,
                        { color: isDark ? fantasy.gold : fantasy.darkWood },
                      ]}
                    >
                      Level 1 Features
                    </Text>
                    {level1Features.map((feature, idx) => (
                      <Text
                        key={idx}
                        style={[styles.featureText, { color: colors.text.secondary }]}
                      >
                        {feature.name}
                      </Text>
                    ))}

                    <Text
                      style={[
                        styles.sectionTitle,
                        { color: isDark ? fantasy.gold : fantasy.darkWood },
                      ]}
                    >
                      Skills ({cls.skillRanksPerLevel}/level)
                    </Text>
                    <Text style={[styles.skillsText, { color: colors.text.secondary }]}>
                      {cls.classSkills.join(', ')}
                    </Text>

                    <Text
                      style={[
                        styles.sectionTitle,
                        { color: isDark ? fantasy.gold : fantasy.darkWood },
                      ]}
                    >
                      Proficiencies
                    </Text>
                    <Text style={[styles.skillsText, { color: colors.text.secondary }]}>
                      Weapons: {cls.weaponProficiencies.join(', ')}
                    </Text>
                    {cls.armorProficiencies.length > 0 && (
                      <Text style={[styles.skillsText, { color: colors.text.secondary }]}>
                        Armor: {cls.armorProficiencies.join(', ')}
                      </Text>
                    )}
                  </View>
                )}
              </View>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  classItem: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
  },
  classHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  className: {
    fontFamily: 'Cinzel',
    fontSize: 15,
    fontWeight: '700',
  },
  hitDie: {
    fontFamily: 'Cinzel',
    fontSize: 14,
    fontWeight: '700',
  },
  classInfo: {
    fontFamily: 'LibreBaskerville',
    fontSize: 11,
    marginTop: 2,
  },
  classDetails: {
    marginTop: 4,
  },
  sectionTitle: {
    fontFamily: 'Cinzel',
    fontSize: 12,
    fontWeight: '700',
    marginTop: 8,
    marginBottom: 4,
  },
  featureText: {
    fontFamily: 'LibreBaskerville',
    fontSize: 12,
    paddingLeft: 8,
    marginBottom: 2,
  },
  skillsText: {
    fontFamily: 'LibreBaskerville',
    fontSize: 11,
    marginBottom: 4,
  },
});
