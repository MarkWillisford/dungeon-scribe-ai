import React, { useEffect } from 'react';
import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import { setUser } from '@/store/slices/authSlice';
import { FirebaseAuthService } from '@/services/FirebaseAuthService';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { fontAssets } from '@/theme/fonts';
import { initializeFeatRegistry } from '@/data/feats';

SplashScreen.preventAutoHideAsync();
initializeFeatRegistry?.();

function RootNavigation() {
  const [fontsLoaded, fontError] = useFonts(fontAssets);

  useEffect(() => {
    const unsubscribe = FirebaseAuthService.onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) {
        store.dispatch(
          setUser({
            uid: firebaseUser.uid,
            email: firebaseUser.email || '',
            displayName: firebaseUser.displayName || firebaseUser.email?.split('@')[0] || '',
            photoURL: firebaseUser.photoURL || null,
          }),
        );
      } else {
        store.dispatch(setUser(null));
      }
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}

export default function RootLayout() {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <RootNavigation />
      </Provider>
    </ErrorBoundary>
  );
}
