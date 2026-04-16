import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Redirect, Stack } from 'expo-router';
import { useAppSelector } from '@/store/hooks';

/**
 * Role gate for the admin section.
 *
 * Reads admin status and auth initialization state from Redux — both are
 * populated by the onAuthStateChanged listener in app/_layout.tsx after
 * Firebase restores the session. This avoids the race condition that would
 * occur if we called AdminService.isAdmin() directly here (auth.currentUser
 * is null until Firebase finishes async session restore).
 *
 * Shows a spinner until auth is initialized, then either renders the admin
 * stack (admin users) or redirects to root (everyone else). Also re-gates
 * automatically on sign-out since isAdmin is cleared in the Redux slice.
 */
export default function AdminLayout() {
  const authInitialized = useAppSelector((state) => state.auth.authInitialized);
  const isAdmin = useAppSelector((state) => state.auth.isAdmin);

  if (!authInitialized) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator />
      </View>
    );
  }

  if (!isAdmin) {
    return <Redirect href="/" />;
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}
