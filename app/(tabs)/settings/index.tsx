import React from 'react';
import { SafeAreaView, View, Text, ScrollView, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { useTheme } from '@/hooks/useTheme';
import { toggleTheme } from '@/store/slices/themeSlice';
import { logout } from '@/store/slices/authSlice';
import { clearCharacters } from '@/store/slices/charactersSlice';
import { OrnatePanel } from '@/components/ui/OrnatePanel';
import { OrnateButton } from '@/components/ui/OrnateButton';
import { FantasyDivider } from '@/components/ui/FantasyDivider';

export default function SettingsScreen() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { colors, fantasy, isDark } = useTheme();

  const user = useAppSelector((state) => state.auth.user);

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  const handleLogout = async () => {
    await dispatch(logout());
    dispatch(clearCharacters());
    router.replace('/(auth)/login');
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.bg.primary }]}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={[styles.title, { color: colors.text.primary }]}>Settings</Text>

        <OrnatePanel title="Account" testID="settings-account-panel">
          <View style={styles.infoRow}>
            <Text style={[styles.infoLabel, { color: colors.text.secondary }]}>Email</Text>
            <Text style={[styles.infoValue, { color: colors.text.primary }]}>
              {user?.email ?? 'Not signed in'}
            </Text>
          </View>

          {user?.displayName && (
            <View style={styles.infoRow}>
              <Text style={[styles.infoLabel, { color: colors.text.secondary }]}>Display Name</Text>
              <Text style={[styles.infoValue, { color: colors.text.primary }]}>
                {user.displayName}
              </Text>
            </View>
          )}
        </OrnatePanel>

        <View style={styles.sectionSpacer} />

        <OrnatePanel title="Appearance" testID="settings-appearance-panel">
          <View style={styles.themeRow}>
            <Text style={[styles.themeLabel, { color: colors.text.secondary }]}>Current Theme</Text>
            <Text style={[styles.themeValue, { color: fantasy.gold }]}>
              {isDark ? 'Dark Mode' : 'Light Mode'}
            </Text>
          </View>

          <View style={styles.buttonContainer}>
            <OrnateButton
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              onPress={handleToggleTheme}
              variant="secondary"
              testID="toggle-theme-button"
            />
          </View>
        </OrnatePanel>

        <FantasyDivider />

        <View style={styles.buttonContainer}>
          <OrnateButton
            title="Logout"
            onPress={handleLogout}
            variant="danger"
            testID="logout-button"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 32,
  },
  title: {
    fontFamily: 'Cinzel',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 16,
  },
  sectionSpacer: {
    height: 16,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  infoLabel: {
    fontFamily: 'Cinzel',
    fontSize: 12,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  infoValue: {
    fontFamily: 'LibreBaskerville',
    fontSize: 14,
    flexShrink: 1,
    textAlign: 'right',
  },
  themeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    marginBottom: 8,
  },
  themeLabel: {
    fontFamily: 'Cinzel',
    fontSize: 12,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  themeValue: {
    fontFamily: 'LibreBaskerville',
    fontSize: 14,
    fontWeight: '600',
  },
  buttonContainer: {
    marginTop: 8,
  },
});
