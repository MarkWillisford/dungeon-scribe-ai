import React, { useEffect } from 'react';
import { Alert, SafeAreaView, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { useTheme } from '@/hooks/useTheme';
import { signup, clearError } from '@/store/slices/authSlice';
import { AuthForm } from '@/components/auth/AuthForm';

export default function SignupScreen() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { colors } = useTheme();
  const { error, loading, isAuthenticated } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (isAuthenticated) {
      router.replace('/(tabs)/characters');
    }
  }, [isAuthenticated, router]);

  useEffect(() => {
    return () => {
      dispatch(clearError());
    };
  }, [dispatch]);

  const handleSubmit = (email: string, password: string) => {
    const displayName = email.split('@')[0];
    dispatch(signup({ email, password, displayName }));
  };

  const handleGoogleLogin = () => {
    Alert.alert('Not Available', 'Google Sign-In is not yet configured.');
  };

  const handleToggleMode = () => {
    router.push('/(auth)/login');
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.bg.primary }]}>
      <AuthForm
        mode="signup"
        onSubmit={handleSubmit}
        onGoogleLogin={handleGoogleLogin}
        onToggleMode={handleToggleMode}
        error={error ?? undefined}
        loading={loading}
        testID="signup-screen"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
});
