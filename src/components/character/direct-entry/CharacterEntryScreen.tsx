import React, { useCallback, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Pressable,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useTheme } from '@/hooks/useTheme';
import { OrnateTab } from '@/components/ui/OrnateTab';
import { CharacterEntryHeader } from './CharacterEntryHeader';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  setActiveTab,
  setValidationWarnings,
  type EntryTabKey,
  type TabStatus,
} from '@/store/slices/characterEntrySlice';
import { saveCharacter } from '@/store/thunks/saveCharacter';
import { CharacterValidationService } from '@/services/CharacterValidationService';
import { selectClassDataMap } from '@/store/slices/gameDataSlice';
import { PRESET_PF1E_STANDARD } from '@/config/rulesetPresets';
import { ValidationReportSheet } from './ValidationReportSheet';
import { IdentitySection } from './IdentitySection';
import { AbilityScoreEntryPanel } from './AbilityScoreEntryPanel';
import { LevelIncrementSlots } from './LevelIncrementSlots';
import { ClassesSection } from './ClassesSection';
import { CombatStatsSection } from './CombatStatsSection';
import { SkillsSection } from './SkillsSection';
import { EquipmentSection } from './EquipmentSection';
import { TraitsSection } from './TraitsSection';
import { FeatSlotList } from './FeatSlotList';
import { SpellcastingSection } from './SpellcastingSection';
import { NotesSection } from './NotesSection';

// ---- Tab definitions ----

const TABS: { key: EntryTabKey; label: string }[] = [
  { key: 'identity', label: 'Identity' },
  { key: 'abilities', label: 'Abilities' },
  { key: 'classes', label: 'Classes' },
  { key: 'combat', label: 'Combat' },
  { key: 'skills', label: 'Skills' },
  { key: 'traits', label: 'Traits' },
  { key: 'feats', label: 'Feats' },
  { key: 'spells', label: 'Spells' },
  { key: 'equipment', label: 'Equipment' },
  { key: 'notes', label: 'Notes' },
];

// ---- Section placeholders ----
// Each will be replaced by a real section component in subsequent PRs.

function PlaceholderSection({ tab }: { tab: EntryTabKey }) {
  const { colors } = useTheme();
  return (
    <View style={styles.placeholder}>
      <Text style={[styles.placeholderText, { color: colors.text.tertiary }]}>
        {tab.charAt(0).toUpperCase() + tab.slice(1)} section — coming soon
      </Text>
    </View>
  );
}

// ---- Tab status derivation ----
// Returns the completion dot status for each tab based on character content.
// "empty" = no data entered, "complete" = data present, "warnings" = has warnings.

function useTabStatus(): Record<EntryTabKey, TabStatus> {
  const character = useAppSelector((state) => state.characterEntry.character);
  const warnings = useAppSelector((state) => state.characterEntry.validationWarnings);

  const hasWarning = (tab: EntryTabKey) =>
    warnings.some((w) => w.section === tab && !w.isAcknowledged);

  return {
    identity: hasWarning('identity') ? 'warnings' : character.info.name ? 'complete' : 'empty',
    abilities: hasWarning('abilities')
      ? 'warnings'
      : character.abilityScores.str.base !== 10
        ? 'complete'
        : 'empty',
    classes: hasWarning('classes')
      ? 'warnings'
      : character.classes.classes.length > 0
        ? 'complete'
        : 'empty',
    combat: hasWarning('combat')
      ? 'warnings'
      : character.combatStats.hitPoints.current > 0
        ? 'complete'
        : 'empty',
    skills: hasWarning('skills')
      ? 'warnings'
      : character.classes.classes.length > 0
        ? 'complete'
        : 'empty',
    traits: hasWarning('traits')
      ? 'warnings'
      : character.traits.traits.length > 0
        ? 'complete'
        : 'empty',
    feats: hasWarning('feats')
      ? 'warnings'
      : character.feats.feats.length > 0
        ? 'complete'
        : 'empty',
    spells: hasWarning('spells')
      ? 'warnings'
      : character.spellcasting.pools.length > 0
        ? 'complete'
        : 'empty',
    equipment: hasWarning('equipment')
      ? 'warnings'
      : (character.editorEquipment?.length ?? 0) > 0
        ? 'complete'
        : 'empty',
    notes: hasWarning('notes') ? 'warnings' : character.info.notes ? 'complete' : 'empty',
  };
}

// ---- Main screen ----

export function CharacterEntryScreen() {
  const { colors, fantasy } = useTheme();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const activeTab = useAppSelector((state) => state.characterEntry.activeTab);
  const character = useAppSelector((state) => state.characterEntry.character);
  const warnings = useAppSelector((state) => state.characterEntry.validationWarnings);
  const lastValidatedAt = useAppSelector((state) => state.characterEntry.lastValidatedAt);
  const isDirty = useAppSelector((state) => state.characterEntry.isDirty);
  const isSaving = useAppSelector((state) => state.characterEntry.isSaving);
  const ruleset = useAppSelector((state) => state.ruleset.activeRuleset ?? PRESET_PF1E_STANDARD);
  const classDataMap = useAppSelector(selectClassDataMap);
  const tabStatus = useTabStatus();

  const [showValidationSheet, setShowValidationSheet] = useState(false);

  const unacknowledgedCount = warnings.filter((w) => !w.isAcknowledged).length;
  const showValidationFAB = lastValidatedAt !== null;

  const handleTabChange = useCallback(
    (key: string) => dispatch(setActiveTab(key as EntryTabKey)),
    [dispatch],
  );

  const handleValidate = useCallback(async () => {
    const newWarnings = await CharacterValidationService.validate(character, ruleset, classDataMap);
    dispatch(setValidationWarnings(newWarnings));
    setShowValidationSheet(true);
  }, [character, ruleset, classDataMap, dispatch]);

  const navigateAway = useCallback(() => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace('/(tabs)/characters');
    }
  }, [router]);

  const handleSave = useCallback(async () => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      await (dispatch(saveCharacter() as any) as any).unwrap();
      navigateAway();
    } catch {
      // setSaveError was already dispatched by the thunk
    }
  }, [dispatch, navigateAway]);

  const handleBack = useCallback(() => {
    if (!isDirty) {
      navigateAway();
      return;
    }
    Alert.alert('Unsaved Changes', 'You have unsaved changes. Leave without saving?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Leave', style: 'destructive', onPress: navigateAway },
    ]);
  }, [isDirty, navigateAway]);

  const handlePortraitPress = useCallback(() => {
    // Portrait picker will be wired in a later PR
  }, []);

  return (
    <SafeAreaView style={[styles.root, { backgroundColor: colors.bg.primary }]}>
      {/* Sticky header */}
      <CharacterEntryHeader
        onValidate={handleValidate}
        onSave={isSaving ? () => {} : handleSave}
        onPortraitPress={handlePortraitPress}
        onBack={handleBack}
      />

      {/* Tab bar */}
      <OrnateTab
        tabs={TABS}
        activeTab={activeTab}
        onTabChange={handleTabChange}
        tabStatus={tabStatus}
      />

      {/* Scrollable section content — wrapped so inputs scroll above the keyboard */}
      <KeyboardAvoidingView
        style={styles.scrollView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={[
            styles.scrollContent,
            showValidationFAB && styles.scrollContentFAB,
          ]}
          keyboardShouldPersistTaps="handled"
        >
          {activeTab === 'identity' && <IdentitySection />}
          {activeTab === 'abilities' && (
            <>
              <AbilityScoreEntryPanel />
              <LevelIncrementSlots />
            </>
          )}
          {activeTab === 'classes' && <ClassesSection />}
          {activeTab === 'combat' && <CombatStatsSection />}
          {activeTab === 'skills' && <SkillsSection />}
          {activeTab === 'equipment' && <EquipmentSection />}
          {activeTab === 'traits' && <TraitsSection />}
          {activeTab === 'feats' && <FeatSlotList />}
          {activeTab === 'spells' && <SpellcastingSection />}
          {activeTab === 'notes' && <NotesSection />}
          {activeTab !== 'identity' &&
            activeTab !== 'abilities' &&
            activeTab !== 'classes' &&
            activeTab !== 'combat' &&
            activeTab !== 'skills' &&
            activeTab !== 'equipment' &&
            activeTab !== 'traits' &&
            activeTab !== 'feats' &&
            activeTab !== 'spells' &&
            activeTab !== 'notes' && <PlaceholderSection tab={activeTab} />}
        </ScrollView>
      </KeyboardAvoidingView>

      {/* Floating validation FAB */}
      {showValidationFAB && (
        <Pressable
          style={[
            styles.validationFAB,
            {
              backgroundColor: unacknowledgedCount > 0 ? fantasy.gold : '#4CAF50',
            },
          ]}
          onPress={() => setShowValidationSheet(true)}
          // FAB only renders when lastValidatedAt !== null (showValidationFAB).
          // First-run validation is triggered by the header Validate button (handleValidate).
          accessibilityRole="button"
          accessibilityLabel={
            unacknowledgedCount > 0
              ? `${unacknowledgedCount} validation warnings`
              : 'Validation passed'
          }
        >
          {unacknowledgedCount > 0 ? (
            <>
              <Text style={styles.fabIcon}>⚠</Text>
              <Text style={styles.fabBadge}>{unacknowledgedCount}</Text>
            </>
          ) : (
            <Text style={styles.fabIcon}>✓</Text>
          )}
        </Pressable>
      )}

      <ValidationReportSheet
        visible={showValidationSheet}
        onClose={() => setShowValidationSheet(false)}
        onSave={() => {
          setShowValidationSheet(false);
          handleSave();
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 12,
    paddingVertical: 16,
    gap: 16,
  },
  scrollContentFAB: {
    paddingBottom: 88,
  },
  placeholder: {
    paddingVertical: 60,
    alignItems: 'center',
  },
  placeholderText: {
    fontFamily: 'LibreBaskerville',
    fontSize: 14,
    fontStyle: 'italic',
  },
  validationFAB: {
    position: 'absolute',
    bottom: 24,
    right: 16,
    width: 52,
    height: 52,
    borderRadius: 26,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  fabIcon: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
  },
  fabBadge: {
    position: 'absolute',
    top: -4,
    right: -4,
    backgroundColor: '#B71C1C',
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '700',
    width: 18,
    height: 18,
    borderRadius: 9,
    textAlign: 'center',
    lineHeight: 18,
  },
});
