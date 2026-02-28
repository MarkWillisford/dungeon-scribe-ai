import React from 'react';
import { View, Pressable, Text, StyleSheet, ScrollView } from 'react-native';
import { useTheme } from '@/hooks/useTheme';

interface Tab {
  key: string;
  label: string;
}

interface OrnateTabProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (key: string) => void;
  testID?: string;
}

export function OrnateTab({ tabs, activeTab, onTabChange, testID }: OrnateTabProps) {
  const { colors, fantasy, isDark } = useTheme();

  return (
    <View testID={testID} style={[styles.container, { borderBottomColor: colors.border.DEFAULT }]}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {tabs.map((tab) => {
          const isActive = tab.key === activeTab;
          return (
            <Pressable
              key={tab.key}
              onPress={() => onTabChange(tab.key)}
              style={[
                styles.tab,
                isActive && {
                  borderBottomColor: fantasy.gold,
                  borderBottomWidth: 2,
                },
              ]}
              accessibilityRole="tab"
              accessibilityLabel={tab.label}
              accessibilityState={{ selected: isActive }}
            >
              <Text
                style={[
                  styles.tabText,
                  {
                    color: isActive
                      ? isDark
                        ? fantasy.gold
                        : fantasy.darkWood
                      : colors.text.tertiary,
                  },
                ]}
              >
                {tab.label}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    minHeight: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabText: {
    fontFamily: 'Cinzel',
    fontSize: 13,
    fontWeight: '600',
  },
});
