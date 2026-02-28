import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { useTheme } from '@/hooks/useTheme';
import { resetPassword } from '@/store/slices/authSlice';
import { OrnatePanel } from '@/components/ui/OrnatePanel';
import { OrnateButton } from '@/components/ui/OrnateButton';
import { FantasyTextInput } from '@/components/ui/FantasyTextInput';

export default function ResetPasswordScreen() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { colors } = useTheme();
  const { error, loading } = useAppSelector((state) => state.auth);

  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const [validationError, setValidationError] = useState('');

  const handleReset = async () => {
    setValidationError('');
    setSuccess(false);

    if (!email.trim()) {
      setValidationError('Email is required');
      return;
    }

    try {
      await dispatch(resetPassword(email.trim())).unwrap();
      setSuccess(true);
    } catch {
      // Error is handled by the Redux slice and displayed via state.auth.error
    }
  };

  const handleBackToLogin = () => {
    router.push('/(auth)/login');
  };

  const displayError = validationError || error;

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.bg.primary }]}>
      <OrnatePanel title="Reset Password" testID="reset-password-screen">
        {displayError && !success && (
          <Text style={[styles.errorText, { color: colors.error.DEFAULT }]}>{displayError}</Text>
        )}

        {success ? (
          <View style={styles.successContainer}>
            <Text style={[styles.successText, { color: colors.success.DEFAULT }]}>
              Password reset email sent! Check your inbox for further instructions.
            </Text>
            <View style={styles.buttonContainer}>
              <OrnateButton
                title="Back to Login"
                onPress={handleBackToLogin}
                variant="primary"
                testID="reset-back-to-login"
              />
            </View>
          </View>
        ) : (
          <View>
            <Text style={[styles.instructions, { color: colors.text.secondary }]}>
              Enter your email address and we will send you a link to reset your password.
            </Text>

            <FantasyTextInput
              label="Email"
              value={email}
              onChangeText={setEmail}
              placeholder="adventurer@example.com"
              keyboardType="email-address"
              autoCapitalize="none"
              testID="reset-email"
              accessibilityLabel="Email address"
            />

            <View style={styles.buttonContainer}>
              <OrnateButton
                title={loading ? 'Sending...' : 'Send Reset Link'}
                onPress={handleReset}
                disabled={loading}
                variant="primary"
                testID="reset-submit"
              />
            </View>

            <View style={styles.buttonContainer}>
              <OrnateButton
                title="Back to Login"
                onPress={handleBackToLogin}
                variant="ghost"
                testID="reset-back"
              />
            </View>
          </View>
        )}
      </OrnatePanel>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  instructions: {
    fontFamily: 'LibreBaskerville',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 20,
  },
  errorText: {
    fontFamily: 'LibreBaskerville',
    fontSize: 13,
    textAlign: 'center',
    marginBottom: 12,
    padding: 8,
  },
  successContainer: {
    alignItems: 'center',
  },
  successText: {
    fontFamily: 'LibreBaskerville',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 20,
  },
  buttonContainer: {
    marginTop: 8,
  },
});
