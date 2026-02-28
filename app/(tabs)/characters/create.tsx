import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useTheme } from '@/hooks/useTheme';
import { OrnatePanel } from '@/components/ui/OrnatePanel';
import { OrnateButton } from '@/components/ui/OrnateButton';

export default function CreateCharacterScreen() {
  const router = useRouter();
  const { colors } = useTheme();

  const handleBack = () => {
    router.back();
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.bg.primary }]}>
      <View style={styles.content}>
        <OrnatePanel title="Create Character" testID="create-character-screen">
          <Text style={[styles.placeholder, { color: colors.text.secondary }]}>
            Character creation wizard coming soon
          </Text>
        </OrnatePanel>

        <View style={styles.buttonContainer}>
          <OrnateButton
            title="Back"
            onPress={handleBack}
            variant="ghost"
            testID="create-character-back"
          />
        </View>
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
  },
  placeholder: {
    fontFamily: 'LibreBaskerville',
    fontSize: 14,
    textAlign: 'center',
    paddingVertical: 40,
    lineHeight: 20,
  },
  buttonContainer: {
    marginTop: 16,
  },
});
