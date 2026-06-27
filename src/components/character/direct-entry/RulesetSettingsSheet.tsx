import React from 'react';
import {
  Modal,
  View,
  Text,
  ScrollView,
  Pressable,
  TextInput,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { InlinePicker } from '@/components/ui/InlinePicker';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setActiveRuleset, patchActiveRuleset } from '@/store/slices/rulesetSlice';
import { SYSTEM_PRESETS } from '@/config/rulesetPresets';
import type { Ruleset, SourceCollection, OptionalRules, EitrMode } from '@/types/ruleset';

// ---- Display labels ----

const SOURCE_LABELS: Record<SourceCollection, string> = {
  'pf1e-official': 'Pathfinder 1e Official',
  '3.5e': 'D&D 3.5e',
  dreamscarred: 'Dreamscarred Press (PoW/PoWE)',
  'pf1e-3rdparty': 'PF1e Third Party',
  'campaign-homebrew': 'Campaign Homebrew',
  'system-homebrew': 'System Homebrew',
};

const SOURCE_ORDER: SourceCollection[] = [
  'pf1e-official',
  'dreamscarred',
  '3.5e',
  'pf1e-3rdparty',
  'campaign-homebrew',
  'system-homebrew',
];

type BoolOptionalRuleKey = {
  [K in keyof OptionalRules]: OptionalRules[K] extends boolean ? K : never;
}[keyof OptionalRules];

const OPTIONAL_RULE_LABELS: Record<BoolOptionalRuleKey, string> = {
  heroPoints: 'Hero Points',
  gestalt: 'Gestalt',
  fractionalBABSaves: 'Fractional BAB/Saves',
  variantMulticlassing: 'Variant Multiclassing',
  relaxedEntry: 'Relaxed Prestige Entry',
  mythic: 'Mythic',
  pathOfWarMechanics: 'Path of War Mechanics',
  tomeOfBattleMechanics: 'Tome of Battle Mechanics',
  crTemplates: 'CR Templates',
  laTemplates: 'LA Templates',
  crRefunds: 'CR Refunds',
  laBuyback: 'LA Buyback',
  crLaAbilityScoreReductions: 'CR/LA Ability Score Reductions',
  flaws: 'Flaws (3.5e)',
};

const OPTIONAL_RULE_ORDER: BoolOptionalRuleKey[] = [
  'pathOfWarMechanics',
  'tomeOfBattleMechanics',
  'flaws',
  'heroPoints',
  'gestalt',
  'fractionalBABSaves',
  'variantMulticlassing',
  'mythic',
  'relaxedEntry',
  'crTemplates',
  'laTemplates',
  'crRefunds',
  'laBuyback',
  'crLaAbilityScoreReductions',
];

const EITR_OPTIONS = [
  { label: 'Off', value: 'off' },
  { label: "Syren's Subset (not yet implemented)", value: 'syrens_subset' },
  { label: 'Full', value: 'full' },
];

const ABILITY_SCORE_OPTIONS = [
  { label: 'Point Buy', value: 'point-buy' },
  { label: 'Standard Array', value: 'standard-array' },
  { label: 'Dice Roll', value: 'dice' },
  { label: 'Freeform', value: 'freeform' },
];

// ---- Sub-components ----

function SectionHeader({
  title,
  colors,
}: {
  title: string;
  colors: ReturnType<typeof useTheme>['colors'];
}) {
  return (
    <Text
      style={[
        styles.sectionHeader,
        { color: colors.text.secondary, borderBottomColor: colors.border.DEFAULT },
      ]}
    >
      {title}
    </Text>
  );
}

function ToggleRow({
  label,
  value,
  onToggle,
  colors,
  fantasy,
}: {
  label: string;
  value: boolean;
  onToggle: () => void;
  colors: ReturnType<typeof useTheme>['colors'];
  fantasy: ReturnType<typeof useTheme>['fantasy'];
}) {
  return (
    <Pressable
      onPress={onToggle}
      style={styles.toggleRow}
      accessibilityRole="checkbox"
      accessibilityState={{ checked: value }}
      accessibilityLabel={label}
    >
      <Text style={[styles.toggleLabel, { color: colors.text.primary }]}>{label}</Text>
      <View
        style={[
          styles.toggleTrack,
          { backgroundColor: value ? fantasy.gold : colors.border.DEFAULT },
        ]}
      >
        <View
          style={[
            styles.toggleThumb,
            {
              backgroundColor: colors.bg.primary,
              transform: [{ translateX: value ? 20 : 2 }],
            },
          ]}
        />
      </View>
    </Pressable>
  );
}

// ---- Props ----

interface RulesetSettingsSheetProps {
  visible: boolean;
  onClose: () => void;
}

// ---- Main component ----

export function RulesetSettingsSheet({ visible, onClose }: RulesetSettingsSheetProps) {
  const { colors, fantasy, isDark } = useTheme();
  const dispatch = useAppDispatch();
  const activeRuleset = useAppSelector((state) => state.ruleset.activeRuleset);
  const isModifiedFromPreset = useAppSelector((state) => state.ruleset.isModifiedFromPreset);

  const patch = (changes: Partial<Ruleset>) => dispatch(patchActiveRuleset(changes));

  const toggleSource = (source: SourceCollection) => {
    const current = activeRuleset.allowedSources;
    const next = current.includes(source)
      ? current.filter((s) => s !== source)
      : [...current, source];
    patch({ allowedSources: next });
  };

  const toggleOptionalRule = (key: BoolOptionalRuleKey) => {
    patch({
      optionalRules: {
        ...activeRuleset.optionalRules,
        [key]: !activeRuleset.optionalRules[key],
      },
    });
  };

  const headerBg = isDark ? colors.bg.secondary : colors.bg.primary;

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <SafeAreaView style={[styles.root, { backgroundColor: colors.bg.primary }]}>
        {/* Header */}
        <View
          style={[
            styles.header,
            {
              backgroundColor: headerBg,
              borderBottomColor: isDark ? fantasy.gold : fantasy.bronze,
            },
          ]}
        >
          <Text style={[styles.headerTitle, { color: isDark ? fantasy.gold : fantasy.darkWood }]}>
            Ruleset Settings
          </Text>
          <Pressable
            onPress={onClose}
            hitSlop={8}
            accessibilityRole="button"
            accessibilityLabel="Close ruleset settings"
          >
            <Text style={[styles.closeButton, { color: colors.text.secondary }]}>Done</Text>
          </Pressable>
        </View>

        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
        >
          {/* Section A — Starting Points */}
          <SectionHeader title="Starting Points" colors={colors} />
          <Text style={[styles.sectionHint, { color: colors.text.tertiary }]}>
            Tap a preset to reset all settings to that configuration.
          </Text>
          <View style={styles.presetRow}>
            {SYSTEM_PRESETS.map((preset) => {
              const isActive = !isModifiedFromPreset && activeRuleset.id === preset.id;
              return (
                <Pressable
                  key={preset.id}
                  onPress={() => {
                    if (isActive) return;
                    dispatch(setActiveRuleset(preset));
                  }}
                  style={[
                    styles.presetCard,
                    {
                      backgroundColor: isDark ? colors.bg.secondary : colors.bg.primary,
                      borderColor: isActive ? fantasy.gold : colors.border.DEFAULT,
                      borderWidth: isActive ? 2 : 1,
                    },
                  ]}
                  accessibilityRole="button"
                  accessibilityLabel={`Use ${preset.name} preset`}
                  accessibilityState={{ selected: isActive }}
                >
                  {isActive && <Text style={[styles.presetCheck, { color: fantasy.gold }]}>✓</Text>}
                  <Text
                    style={[
                      styles.presetName,
                      {
                        color: isActive
                          ? isDark
                            ? fantasy.gold
                            : fantasy.darkWood
                          : colors.text.primary,
                      },
                    ]}
                  >
                    {preset.name}
                  </Text>
                  <Text
                    style={[styles.presetDesc, { color: colors.text.tertiary }]}
                    numberOfLines={2}
                  >
                    {preset.description}
                  </Text>
                </Pressable>
              );
            })}
          </View>

          {/* Section B — Allowed Sources */}
          <SectionHeader title="Allowed Sources" colors={colors} />
          {SOURCE_ORDER.map((source) => (
            <ToggleRow
              key={source}
              label={SOURCE_LABELS[source]}
              value={activeRuleset.allowedSources.includes(source)}
              onToggle={() => toggleSource(source)}
              colors={colors}
              fantasy={fantasy}
            />
          ))}

          {/* Section C — Ability Scores */}
          <SectionHeader title="Ability Scores" colors={colors} />
          <InlinePicker
            label="Method"
            value={activeRuleset.validationSettings.abilityScoreMethod}
            options={ABILITY_SCORE_OPTIONS}
            onValueChange={(v) =>
              patch({
                validationSettings: {
                  ...activeRuleset.validationSettings,
                  abilityScoreMethod: v as Ruleset['validationSettings']['abilityScoreMethod'],
                },
              })
            }
          />
          {activeRuleset.validationSettings.abilityScoreMethod === 'point-buy' && (
            <View style={styles.numberRow}>
              <Text style={[styles.numberLabel, { color: colors.text.secondary }]}>
                Point Buy Budget
              </Text>
              <TextInput
                value={String(activeRuleset.validationSettings.pointBuyBudget ?? 20)}
                onChangeText={(t) => {
                  const n = parseInt(t, 10);
                  if (!isNaN(n) && n >= 0)
                    patch({
                      validationSettings: {
                        ...activeRuleset.validationSettings,
                        pointBuyBudget: n,
                      },
                    });
                }}
                keyboardType="number-pad"
                selectTextOnFocus
                style={[
                  styles.numberInput,
                  {
                    color: colors.text.primary,
                    borderColor: colors.border.DEFAULT,
                    backgroundColor: isDark ? colors.bg.tertiary : colors.bg.secondary,
                  },
                ]}
                accessibilityLabel="Point buy budget"
              />
            </View>
          )}

          {/* Section D — Traits */}
          <SectionHeader title="Traits" colors={colors} />
          <View style={styles.numberRow}>
            <Text style={[styles.numberLabel, { color: colors.text.secondary }]}>
              Traits allowed
            </Text>
            <TextInput
              value={String(activeRuleset.validationSettings.maxTraits)}
              onChangeText={(t) => {
                const n = parseInt(t, 10);
                if (!isNaN(n) && n >= 0)
                  patch({
                    validationSettings: {
                      ...activeRuleset.validationSettings,
                      maxTraits: n,
                    },
                  });
              }}
              keyboardType="number-pad"
              selectTextOnFocus
              style={[
                styles.numberInput,
                {
                  color: colors.text.primary,
                  borderColor: colors.border.DEFAULT,
                  backgroundColor: isDark ? colors.bg.tertiary : colors.bg.secondary,
                },
              ]}
              accessibilityLabel="Traits allowed"
            />
          </View>

          {/* Section E — Optional Rules */}
          <SectionHeader title="Optional Rules" colors={colors} />
          <InlinePicker
            label="EitR Mode"
            value={activeRuleset.optionalRules.eitrMode}
            options={EITR_OPTIONS}
            onValueChange={(v) =>
              patch({
                optionalRules: {
                  ...activeRuleset.optionalRules,
                  eitrMode: v as EitrMode,
                },
              })
            }
          />
          {OPTIONAL_RULE_ORDER.map((key) => (
            <ToggleRow
              key={key}
              label={OPTIONAL_RULE_LABELS[key]}
              value={activeRuleset.optionalRules[key] as boolean}
              onToggle={() => toggleOptionalRule(key)}
              colors={colors}
              fantasy={fantasy}
            />
          ))}

          <View style={styles.bottomPad} />
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  headerTitle: {
    fontFamily: 'Cinzel',
    fontSize: 18,
    fontWeight: '700',
  },
  closeButton: {
    fontFamily: 'LibreBaskerville',
    fontSize: 15,
    fontWeight: '600',
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 32,
  },
  sectionHeader: {
    fontFamily: 'Cinzel',
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 0.5,
    textTransform: 'uppercase',
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 6,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 4,
  },
  sectionHint: {
    fontFamily: 'LibreBaskerville',
    fontSize: 12,
    fontStyle: 'italic',
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  presetRow: {
    flexDirection: 'row',
    gap: 10,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  presetCard: {
    flex: 1,
    borderRadius: 8,
    padding: 10,
    gap: 4,
  },
  presetCheck: {
    fontSize: 12,
    fontWeight: '700',
  },
  presetName: {
    fontFamily: 'Cinzel',
    fontSize: 13,
    fontWeight: '700',
  },
  presetDesc: {
    fontFamily: 'LibreBaskerville',
    fontSize: 11,
    fontStyle: 'italic',
  },
  toggleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  toggleLabel: {
    flex: 1,
    fontFamily: 'LibreBaskerville',
    fontSize: 14,
  },
  toggleTrack: {
    width: 44,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
  },
  toggleThumb: {
    width: 20,
    height: 20,
    borderRadius: 10,
    position: 'absolute',
    top: 2,
  },
  numberRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    gap: 12,
  },
  twoNumberRow: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 8,
    gap: 24,
  },
  numberRowHalf: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  numberLabel: {
    fontFamily: 'LibreBaskerville',
    fontSize: 14,
    flex: 1,
  },
  numberInput: {
    fontFamily: 'LibreBaskerville',
    fontSize: 16,
    fontWeight: '700',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 6,
    width: 64,
    textAlign: 'center',
    minHeight: 38,
  },
  bottomPad: {
    height: 24,
  },
});
