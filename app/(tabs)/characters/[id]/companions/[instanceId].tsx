import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams } from 'expo-router';
import { CompanionEntryScreen } from '@/components/character/companion-entry/CompanionEntryScreen';

export default function CompanionBuilderRoute() {
  const { instanceId } = useLocalSearchParams<{ id: string; instanceId: string }>();
  const resolved = typeof instanceId === 'string' ? instanceId : '';

  return (
    <SafeAreaView style={styles.safe}>
      <CompanionEntryScreen instanceId={resolved} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
});
