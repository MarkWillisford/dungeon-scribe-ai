import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useAppSelector } from '@/store/hooks';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
import { useTheme } from '@/hooks/useTheme';

export default function Index() {
  const router = useRouter();
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const { colors } = useTheme();

  useEffect(() => {
    if (isAuthenticated) {
      router.replace('/(tabs)/characters');
    } else {
      router.replace('/(auth)/login');
    }
  }, [isAuthenticated, router]);

  return (
    <View style={[styles.container, { backgroundColor: colors.bg.primary }]}>
      <LoadingSpinner message="Preparing your adventure..." />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
