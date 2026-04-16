import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Redirect, Stack } from 'expo-router';
import { AdminService } from '@/services/AdminService';

/**
 * Role gate for the admin section.
 *
 * Checks the Firebase Custom Claim on mount. Shows a brief loading state while
 * the token resolves, then either renders the admin stack or redirects to root.
 * All screens under app/admin/ can trust this gate — they don't need to re-check.
 */
export default function AdminLayout() {
  const [checked, setChecked] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    AdminService.isAdmin()
      .then((result) => {
        setIsAdmin(result);
        setChecked(true);
      })
      .catch(() => {
        setIsAdmin(false);
        setChecked(true);
      });
  }, []);

  if (!checked) {
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
