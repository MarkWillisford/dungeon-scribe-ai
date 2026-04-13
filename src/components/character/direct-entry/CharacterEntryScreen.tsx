import React, { useCallback, useState } from 'react';
import { View, Text, ScrollView, Pressable, StyleSheet, SafeAreaView } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { OrnateTab } from '@/components/ui/OrnateTab';
import { CharacterEntryHeader } from './CharacterEntryHeader';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setActiveTab, setValidationWarnings, type EntryTabKey, type TabStatus } from '@/store/slices/characterEntrySlice';
import { DraftValidationService } from '@/services/DraftValidationService';
import { PRESET_PF1E_STANDARD } from '@/data/rulesets/presets';
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
// Returns the completion dot status for each tab based on draft content.
// "empty" = no data entered, "complete" = data present, "warnings" = has warnings.

function useTabStatus(): Record<EntryTabKey, TabStatus> {
  const draft = useAppSelector((state) => state.characterEntry.draft);
  const warnings = useAppSelector((state) => state.characterEntry.validationWarnings);

  const hasWarning = (tab: EntryTabKey) =>
    warnings.some((w) => w.section === tab && !w.isAcknowledged);

  return {
    identity: hasWarning('identity') ? 'warnings' : draft.name ? 'complete' : 'empty',
    abilities: hasWarning('abilities')
      ? 'warnings'
      : draft.abilities.str.base !== 10
        ? 'complete'
        : 'empty',
    classes: hasWarning('classes') ? 'warnings' : draft.classes.length > 0 ? 'complete' : 'empty',
    combat: hasWarning('combat') ? 'warnings' : draft.combat.currentHP > 0 ? 'complete' : 'empty',
    skills: hasWarning('skills')
      ? 'warnings'
      : Object.keys(draft.skills).length > 0
        ? 'complete'
        : 'empty',
    traits: hasWarning('traits') ? 'warnings' : draft.traits.length > 0 ? 'complete' : 'empty',
    feats: hasWarning('feats') ? 'warnings' : draft.featSlots.length > 0 ? 'complete' : 'empty',
    spells: hasWarning('spells')
      ? 'warnings'
      : draft.spellcastingPools.length > 0
        ? 'complete'
        : 'empty',
    equipment: hasWarning('equipment')
      ? 'warnings'
      : draft.weapons.length > 0 || draft.armor.length > 0
        ? 'complete'
        : 'empty',
    notes: hasWarning('notes') ? 'warnings' : draft.characterNotes ? 'complete' : 'empty',
  };
}

// ---- Main screen ----

export function CharacterEntryScreen() {
  const { colors, fantasy } = useTheme();
  const dispatch = useAppDispatch();
  const activeTab = useAppSelector((state) => state.characterEntry.activeTab);
  const draft = useAppSelector((state) => state.characterEntry.draft);
  const warnings = useAppSelector((state) => state.characterEntry.validationWarnings);
  const lastValidatedAt = useAppSelector((state) => state.characterEntry.lastValidatedAt);
  const ruleset = useAppSelector((state) => state.ruleset.activeRuleset ?? PRESET_PF1E_STANDARD);
  const tabStatus = useTabStatus();

  const [showValidationSheet, setShowValidationSheet] = useState(false);

  const unacknowledgedCount = warnings.filter((w) => !w.isAcknowledged).length;
  const showValidationFAB = lastValidatedAt !== null;

  const handleTabChange = useCallback(
    (key: string) => dispatch(setActiveTab(key as EntryTabKey)),
    [dispatch],
  );

  const handleValidate = useCallback(() => {
    const newWarnings = DraftValidationService.validate(draft, ruleset);
    dispatch(setValidationWarnings(newWarnings));
    setShowValidationSheet(true);
  }, [draft, ruleset, dispatch]);

  const handleSave = useCallback(() => {
    // Save logic will be wired when the characters service is connected
  }, []);

  const handlePortraitPress = useCallback(() => {
    // Portrait picker will be wired in a later PR
  }, []);

  return (
    <SafeAreaView style={[styles.root, { backgroundColor: colors.bg.primary }]}>
      {/* Sticky header */}
      <CharacterEntryHeader
        onValidate={handleValidate}
        onSave={handleSave}
        onPortraitPress={handlePortraitPress}
      />

      {/* Tab bar */}
      <OrnateTab
        tabs={TABS}
        activeTab={activeTab}
        onTabChange={handleTabChange}
        tabStatus={tabStatus}
      />

      {/* Scrollable section content */}
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
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
