import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { OrnatePanel } from '@/components/ui/OrnatePanel';

export default function CombatTrackerScreen() {
  const { colors } = useTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.bg.primary }]}>
      <View style={styles.content}>
        <OrnatePanel title="Combat Tracker" testID="combat-tracker-screen">
          <Text style={[styles.placeholder, { color: colors.text.secondary }]}>
            Coming in Phase 2
          </Text>
        </OrnatePanel>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  placeholder: {
    fontFamily: 'LibreBaskerville',
    fontSize: 14,
    textAlign: 'center',
    paddingVertical: 40,
    lineHeight: 20,
  },
});
