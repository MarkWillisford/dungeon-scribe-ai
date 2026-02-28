import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { useTheme } from '@/hooks/useTheme';
import { login, googleLogin, clearError } from '@/store/slices/authSlice';
import { AuthForm } from '@/components/auth/AuthForm';

export default function LoginScreen() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { colors } = useTheme();
  const { error, loading } = useAppSelector((state) => state.auth);

  useEffect(() => {
    return () => {
      dispatch(clearError());
    };
  }, [dispatch]);

  const handleSubmit = (email: string, password: string) => {
    dispatch(login({ email, password }));
  };

  const handleGoogleLogin = () => {
    dispatch(googleLogin());
  };

  const handleToggleMode = () => {
    router.push('/(auth)/signup');
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.bg.primary }]}>
      <AuthForm
        mode="login"
        onSubmit={handleSubmit}
        onGoogleLogin={handleGoogleLogin}
        onToggleMode={handleToggleMode}
        error={error ?? undefined}
        loading={loading}
        testID="login-screen"
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
