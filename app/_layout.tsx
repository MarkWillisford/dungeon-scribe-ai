import React, { useEffect } from 'react';
import { Stack, usePathname } from 'expo-router';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Provider } from 'react-redux';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { store } from '@/store/store';
import { setUser, setIsAdmin, setAuthInitialized } from '@/store/slices/authSlice';
import { FirebaseAuthService } from '@/services/FirebaseAuthService';
import { AdminService } from '@/services/AdminService';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { fontAssets } from '@/theme/fonts';
import { initializeFeatRegistry } from '@/data/feats';
import { DiceFAB } from '@/components/dice/DiceFAB';
import { ToastHost } from '@/components/ui/ToastHost';

SplashScreen.preventAutoHideAsync();
initializeFeatRegistry?.();

function DiceFABWrapper() {
  const pathname = usePathname();
  // Hide FAB on the play tab (has embedded roller) and character entry screen (keyboard/scroll conflicts)
  const hideFAB =
    pathname.startsWith('/play') ||
    pathname.startsWith('/(tabs)/play') ||
    pathname.endsWith('/entry');
  return <DiceFAB hidden={hideFAB} />;
}

function RootNavigation() {
  const [fontsLoaded, fontError] = useFonts(fontAssets);

  useEffect(() => {
    const unsubscribe = FirebaseAuthService.onAuthStateChanged(async (firebaseUser) => {
      if (firebaseUser) {
        store.dispatch(
          setUser({
            uid: firebaseUser.uid,
            email: firebaseUser.email || '',
            displayName: firebaseUser.displayName || firebaseUser.email?.split('@')[0] || '',
            photoURL: firebaseUser.photoURL || null,
          }),
        );
        // Resolve admin claim here — auth.currentUser is guaranteed non-null
        // inside onAuthStateChanged, so isAdmin() won't race against session restore.
        const adminStatus = await AdminService.isAdmin().catch(() => false);
        store.dispatch(setIsAdmin(adminStatus));
      } else {
        store.dispatch(setUser(null));
        store.dispatch(setIsAdmin(false));
      }
      // Signal that Firebase auth has fully initialized (even if signed out).
      store.dispatch(setAuthInitialized());
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

  return (
    <>
      <Stack screenOptions={{ headerShown: false }} />
      <DiceFABWrapper />
      {/* Above the navigator, so a toast survives the screen that raised it. */}
      <ToastHost />
    </>
  );
}

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ErrorBoundary>
        <Provider store={store}>
          <RootNavigation />
        </Provider>
      </ErrorBoundary>
    </GestureHandlerRootView>
  );
}
