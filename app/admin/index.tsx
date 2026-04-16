import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useTheme } from '@/hooks/useTheme';
import { OrnatePanel } from '@/components/ui/OrnatePanel';
import { FantasyDivider } from '@/components/ui/FantasyDivider';

interface AdminNavCardProps {
  title: string;
  description: string;
  onPress: () => void;
  comingSoon?: boolean;
}

function AdminNavCard({ title, description, onPress, comingSoon = false }: AdminNavCardProps) {
  const { colors, fantasy, fonts } = useTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={comingSoon}
      activeOpacity={comingSoon ? 1 : 0.7}
      style={[styles.card, { opacity: comingSoon ? 0.5 : 1 }]}
    >
      <View
        style={[
          styles.cardInner,
          {
            backgroundColor: colors.bg.secondary,
            borderColor: colors.border.DEFAULT,
          },
        ]}
      >
        <View style={styles.cardContent}>
          <Text style={[styles.cardTitle, { color: fantasy.gold, fontFamily: fonts.heading }]}>
            {title}
          </Text>
          <Text style={[styles.cardDescription, { color: colors.text.secondary }]}>
            {description}
          </Text>
          {comingSoon && (
            <Text style={[styles.comingSoon, { color: colors.text.tertiary }]}>Coming soon</Text>
          )}
        </View>
        {!comingSoon && (
          <Text style={[styles.arrow, { color: colors.text.tertiary }]}>›</Text>
        )}
      </View>
    </TouchableOpacity>
  );
}

export default function AdminHomeScreen() {
  const router = useRouter();
  const { colors, fonts } = useTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.bg.primary }]}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={[styles.title, { color: colors.text.primary, fontFamily: fonts.heading }]}>
          Admin
        </Text>

        <OrnatePanel title="Tools" testID="admin-tools-panel">
          <AdminNavCard
            title="Data Quality"
            description="Review and verify seeded game data. Mark entries as verified or stub."
            onPress={() => router.push('/admin/data-review')}
            comingSoon
          />

          <FantasyDivider />

          <AdminNavCard
            title="Content"
            description="Create and manage custom homebrew content for campaigns."
            onPress={() => router.push('/admin/content')}
            comingSoon
          />
        </OrnatePanel>
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
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 16,
  },
  card: {
    marginVertical: 4,
  },
  cardInner: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    borderRadius: 6,
    borderWidth: 1,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  cardDescription: {
    fontFamily: 'LibreBaskerville',
    fontSize: 13,
    lineHeight: 18,
  },
  comingSoon: {
    fontFamily: 'LibreBaskerville',
    fontSize: 11,
    fontStyle: 'italic',
    marginTop: 4,
  },
  arrow: {
    fontSize: 24,
    marginLeft: 8,
  },
});
