import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { OrnatePanel } from '@/components/ui/OrnatePanel';
import { OrnateButton } from '@/components/ui/OrnateButton';
import { FantasyTextInput } from '@/components/ui/FantasyTextInput';
import { FantasyDivider } from '@/components/ui/FantasyDivider';

interface AuthFormProps {
  mode: 'login' | 'signup';
  onSubmit: (email: string, password: string) => void;
  onGoogleLogin?: () => void;
  onToggleMode: () => void;
  error?: string;
  loading?: boolean;
  testID?: string;
}

export function AuthForm({
  mode,
  onSubmit,
  onGoogleLogin,
  onToggleMode,
  error,
  loading = false,
  testID,
}: AuthFormProps) {
  const { colors } = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [validationError, setValidationError] = useState('');

  const isSignup = mode === 'signup';
  const title = isSignup ? 'Create Account' : 'Sign In';

  const handleSubmit = () => {
    setValidationError('');

    if (!email.trim()) {
      setValidationError('Email is required');
      return;
    }

    if (!password) {
      setValidationError('Password is required');
      return;
    }

    if (isSignup && password.length < 6) {
      setValidationError('Password must be at least 6 characters');
      return;
    }

    if (isSignup && password !== confirmPassword) {
      setValidationError('Passwords do not match');
      return;
    }

    onSubmit(email.trim(), password);
  };

  const displayError = validationError || error;

  return (
    <View testID={testID}>
      <OrnatePanel title={title}>
        {displayError && (
          <Text style={[styles.error, { color: colors.error.DEFAULT }]}>{displayError}</Text>
        )}

        <FantasyTextInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          placeholder="adventurer@example.com"
          keyboardType="email-address"
          autoCapitalize="none"
          testID="auth-email"
          accessibilityLabel="Email address"
        />

        <FantasyTextInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          placeholder="Enter password"
          secureTextEntry
          testID="auth-password"
          accessibilityLabel="Password"
        />

        {isSignup && (
          <FantasyTextInput
            label="Confirm Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholder="Confirm password"
            secureTextEntry
            testID="auth-confirm-password"
            accessibilityLabel="Confirm password"
          />
        )}

        <View style={styles.submitContainer}>
          <OrnateButton
            title={loading ? 'Loading...' : title}
            onPress={handleSubmit}
            disabled={loading}
            variant="primary"
            testID="auth-submit"
          />
        </View>

        {onGoogleLogin && (
          <>
            <FantasyDivider symbol="or" />
            <OrnateButton
              title="Continue with Google"
              onPress={onGoogleLogin}
              variant="ghost"
              disabled={loading}
              testID="auth-google"
            />
          </>
        )}

        <View style={styles.toggleContainer}>
          <OrnateButton
            title={isSignup ? 'Already have an account? Sign In' : 'Need an account? Sign Up'}
            onPress={onToggleMode}
            variant="ghost"
            testID="auth-toggle"
          />
        </View>
      </OrnatePanel>
    </View>
  );
}

const styles = StyleSheet.create({
  error: {
    fontFamily: 'LibreBaskerville',
    fontSize: 13,
    textAlign: 'center',
    marginBottom: 12,
    padding: 8,
  },
  submitContainer: {
    marginTop: 8,
  },
  toggleContainer: {
    marginTop: 12,
    alignItems: 'center',
  },
});
