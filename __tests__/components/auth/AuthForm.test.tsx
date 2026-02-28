import React from 'react';
import { render, fireEvent } from '../../helpers/testUtils';
import { AuthForm } from '@/components/auth/AuthForm';

describe('AuthForm', () => {
  test('should render Sign In title in login mode', () => {
    const { getByText } = render(
      <AuthForm mode="login" onSubmit={() => {}} onToggleMode={() => {}} />,
    );
    expect(getByText('Sign In')).toBeTruthy();
  });

  test('should render Create Account title in signup mode', () => {
    const { getByText } = render(
      <AuthForm mode="signup" onSubmit={() => {}} onToggleMode={() => {}} />,
    );
    expect(getByText('Create Account')).toBeTruthy();
  });

  test('should show error message when error prop is provided', () => {
    const { getByText } = render(
      <AuthForm
        mode="login"
        onSubmit={() => {}}
        onToggleMode={() => {}}
        error="Invalid credentials"
      />,
    );
    expect(getByText('Invalid credentials')).toBeTruthy();
  });

  test('should show confirm password field in signup mode only', () => {
    const { queryByTestId: querySignup } = render(
      <AuthForm mode="signup" onSubmit={() => {}} onToggleMode={() => {}} />,
    );
    expect(querySignup('auth-confirm-password')).toBeTruthy();

    const { queryByTestId: queryLogin } = render(
      <AuthForm mode="login" onSubmit={() => {}} onToggleMode={() => {}} />,
    );
    expect(queryLogin('auth-confirm-password')).toBeNull();
  });

  test('should call onToggleMode when toggle button is pressed', () => {
    const onToggleMode = jest.fn();
    const { getByTestId } = render(
      <AuthForm mode="login" onSubmit={() => {}} onToggleMode={onToggleMode} />,
    );
    fireEvent.press(getByTestId('auth-toggle'));
    expect(onToggleMode).toHaveBeenCalledTimes(1);
  });

  test('should show Google login button when onGoogleLogin is provided', () => {
    const onGoogleLogin = jest.fn();
    const { getByTestId, getByText } = render(
      <AuthForm
        mode="login"
        onSubmit={() => {}}
        onToggleMode={() => {}}
        onGoogleLogin={onGoogleLogin}
      />,
    );
    expect(getByText('Continue with Google')).toBeTruthy();
    expect(getByTestId('auth-google')).toBeTruthy();
  });
});
