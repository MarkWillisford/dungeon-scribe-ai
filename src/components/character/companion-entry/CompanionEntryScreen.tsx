import React, { useMemo, useState } from 'react';
import { View, Text, ScrollView, KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useTheme } from '@/hooks/useTheme';
import { OrnateTab } from '@/components/ui/OrnateTab';
import { useAppSelector } from '@/store/hooks';
import { ALL_ANIMAL_COMPANIONS } from '@/data/animalCompanions';
import type { AnimalCompanionEntry } from '@/types/animalCompanions';
import type { CompanionInstance } from '@/types/companions';
import { CompanionEntryHeader } from './CompanionEntryHeader';
import { IdentitySection } from './IdentitySection';
import { AbilitiesSection } from './AbilitiesSection';
import { CombatSection } from './CombatSection';
import { SkillsSection } from './SkillsSection';
import { FeatsSection } from './FeatsSection';
import { TricksSection } from './TricksSection';
import { NotesSection } from './NotesSection';
import { TemplatesSection } from './TemplatesSection';
import { EquipmentSection } from './EquipmentSection';

// Phase 1.5 shipped Identity / Abilities / Combat. Phase 1.6 adds Skills /
// Feats / Tricks. Phase 1.7 fills Equipment / Templates / Notes. The tab list
// is complete up front so players see the full shape of the builder even if
// later tabs show placeholder content.
type CompanionTabKey =
  | 'identity'
  | 'abilities'
  | 'combat'
  | 'skills'
  | 'feats'
  | 'tricks'
  | 'equipment'
  | 'templates'
  | 'notes';

const TABS: { key: CompanionTabKey; label: string }[] = [
  { key: 'identity', label: 'Identity' },
  { key: 'abilities', label: 'Abilities' },
  { key: 'combat', label: 'Combat' },
  { key: 'skills', label: 'Skills' },
  { key: 'feats', label: 'Feats' },
  { key: 'tricks', label: 'Tricks' },
  { key: 'equipment', label: 'Equipment' },
  { key: 'templates', label: 'Templates' },
  { key: 'notes', label: 'Notes' },
];

export interface CompanionEntryScreenProps {
  instanceId: string;
}

export function CompanionEntryScreen({ instanceId }: CompanionEntryScreenProps) {
  const { colors, fantasy, isDark } = useTheme();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<CompanionTabKey>('identity');

  const companion: CompanionInstance | undefined = useAppSelector((state) =>
    state.characterEntry.draft.companions.find((c) => c.instanceId === instanceId),
  );

  const entry: AnimalCompanionEntry | undefined = useMemo(
    () =>
      companion ? ALL_ANIMAL_COMPANIONS.find((e) => e.id === companion.sourceEntryId) : undefined,
    [companion],
  );

  if (!companion) {
    return (
      <View
        style={[
          styles.notFound,
          { backgroundColor: isDark ? colors.bg.primary : colors.bg.secondary },
        ]}
      >
        <Text style={[styles.notFoundTitle, { color: fantasy.gold }]}>Companion Not Found</Text>
        <Text style={[styles.notFoundBody, { color: colors.text.secondary }]}>
          This companion may have been removed along with the class that granted it, or the link may
          be stale. Return to the character sheet and re-add it if needed.
        </Text>
        <Text
          style={[styles.notFoundBack, { color: fantasy.gold }]}
          onPress={() => router.back()}
          accessibilityRole="link"
        >
          ← Back
        </Text>
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View
        style={[styles.root, { backgroundColor: isDark ? colors.bg.primary : colors.bg.secondary }]}
      >
        <CompanionEntryHeader companion={companion} entry={entry} onBack={() => router.back()} />
        <OrnateTab
          tabs={TABS}
          activeTab={activeTab}
          onTabChange={(key) => setActiveTab(key as CompanionTabKey)}
        />
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={styles.scrollContent}
        >
          {activeTab === 'identity' && <IdentitySection companion={companion} entry={entry} />}
          {activeTab === 'abilities' && <AbilitiesSection companion={companion} entry={entry} />}
          {activeTab === 'combat' && <CombatSection companion={companion} entry={entry} />}
          {activeTab === 'skills' && <SkillsSection companion={companion} entry={entry} />}
          {activeTab === 'feats' && <FeatsSection companion={companion} entry={entry} />}
          {activeTab === 'tricks' && <TricksSection companion={companion} entry={entry} />}
          {activeTab === 'notes' && <NotesSection companion={companion} entry={entry} />}
          {activeTab === 'templates' && <TemplatesSection companion={companion} entry={entry} />}
          {activeTab === 'equipment' && <EquipmentSection companion={companion} entry={entry} />}
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
  scrollContent: {
    padding: 16,
    paddingBottom: 48,
  },
  notFound: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    gap: 12,
  },
  notFoundTitle: {
    fontFamily: 'Cinzel',
    fontSize: 20,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  notFoundBody: {
    fontFamily: 'LibreBaskerville',
    fontSize: 14,
    textAlign: 'center',
  },
  notFoundBack: {
    fontFamily: 'Cinzel',
    fontSize: 14,
    fontWeight: '700',
    marginTop: 12,
  },
});
