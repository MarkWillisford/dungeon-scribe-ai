import React, { useState, useMemo } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setSkillEntry, removeSkillEntry } from '@/store/slices/characterEntrySlice';
import type { AbilityKey } from '@/types/abilities';
import { PRESET_PF1E_STANDARD } from '@/config/rulesetPresets';
import {
  getPerSkillMaxRanks,
  exceedsPerSkillMax,
  clampSkillRanks,
  getTotalAvailableSkillRanks,
} from '@/utils/skillRanks';

type SkillEntry = { ranks: number; misc: number };

// ---- Static skill definitions ----

interface SkillDef {
  key: string;
  label: string;
  ability: AbilityKey;
  trainedOnly?: boolean;
  allowsSpecialties?: boolean;
  conditionalOn?: 'initiating'; // only shown when PoW or ToB mechanics are enabled
}

const SKILL_DEFS: SkillDef[] = [
  { key: 'acrobatics', label: 'Acrobatics', ability: 'dex' },
  { key: 'appraise', label: 'Appraise', ability: 'int' },
  { key: 'bluff', label: 'Bluff', ability: 'cha' },
  { key: 'climb', label: 'Climb', ability: 'str' },
  { key: 'craft', label: 'Craft', ability: 'int', allowsSpecialties: true },
  { key: 'diplomacy', label: 'Diplomacy', ability: 'cha' },
  { key: 'disableDevice', label: 'Disable Device', ability: 'dex', trainedOnly: true },
  { key: 'disguise', label: 'Disguise', ability: 'cha' },
  { key: 'escapeArtist', label: 'Escape Artist', ability: 'dex' },
  { key: 'fly', label: 'Fly', ability: 'dex' },
  { key: 'handleAnimal', label: 'Handle Animal', ability: 'cha', trainedOnly: true },
  { key: 'heal', label: 'Heal', ability: 'wis' },
  { key: 'intimidate', label: 'Intimidate', ability: 'cha' },
  { key: 'knowledgeArcana', label: 'Knowledge (Arcana)', ability: 'int', trainedOnly: true },
  {
    key: 'knowledgeDungeoneering',
    label: 'Knowledge (Dungeoneering)',
    ability: 'int',
    trainedOnly: true,
  },
  {
    key: 'knowledgeEngineering',
    label: 'Knowledge (Engineering)',
    ability: 'int',
    trainedOnly: true,
  },
  { key: 'knowledgeGeography', label: 'Knowledge (Geography)', ability: 'int', trainedOnly: true },
  { key: 'knowledgeHistory', label: 'Knowledge (History)', ability: 'int', trainedOnly: true },
  { key: 'knowledgeLocal', label: 'Knowledge (Local)', ability: 'int', trainedOnly: true },
  {
    key: 'knowledgeMartial',
    label: 'Knowledge (Martial)',
    ability: 'int',
    trainedOnly: true,
    conditionalOn: 'initiating',
  },
  { key: 'knowledgeNature', label: 'Knowledge (Nature)', ability: 'int', trainedOnly: true },
  { key: 'knowledgeNobility', label: 'Knowledge (Nobility)', ability: 'int', trainedOnly: true },
  { key: 'knowledgePlanes', label: 'Knowledge (Planes)', ability: 'int', trainedOnly: true },
  { key: 'knowledgeReligion', label: 'Knowledge (Religion)', ability: 'int', trainedOnly: true },
  { key: 'linguistics', label: 'Linguistics', ability: 'int', trainedOnly: true },
  { key: 'perception', label: 'Perception', ability: 'wis' },
  { key: 'perform', label: 'Perform', ability: 'cha', allowsSpecialties: true },
  {
    key: 'profession',
    label: 'Profession',
    ability: 'wis',
    trainedOnly: true,
    allowsSpecialties: true,
  },
  { key: 'ride', label: 'Ride', ability: 'dex' },
  { key: 'senseMotive', label: 'Sense Motive', ability: 'wis' },
  { key: 'sleightOfHand', label: 'Sleight of Hand', ability: 'dex', trainedOnly: true },
  { key: 'spellcraft', label: 'Spellcraft', ability: 'int', trainedOnly: true },
  { key: 'stealth', label: 'Stealth', ability: 'dex' },
  { key: 'survival', label: 'Survival', ability: 'wis' },
  { key: 'swim', label: 'Swim', ability: 'str' },
  { key: 'useMagicDevice', label: 'Use Magic Device', ability: 'cha', trainedOnly: true },
];

// ---- Helpers ----

function getSpecialtyKeys(skills: Record<string, SkillEntry>, baseKey: string): string[] {
  const prefix = `${baseKey} (`;
  return Object.keys(skills)
    .filter((k) => k.startsWith(prefix) && k.endsWith(')'))
    .sort();
}

function capitalizeWords(s: string): string {
  return s.replace(/\b\w/g, (c) => c.toUpperCase());
}

// ---- Skill row ----

interface SkillRowProps {
  def: SkillDef;
  label?: string;
  entry: SkillEntry;
  abilityMod: number;
  maxRanks: number;
  onChange: (entry: SkillEntry) => void;
  onRemove?: () => void;
}

function SkillRow({ def, label, entry, abilityMod, maxRanks, onChange, onRemove }: SkillRowProps) {
  const { colors, fantasy, isDark } = useTheme();
  const total = entry.ranks + entry.misc + abilityMod;
  const overMax = exceedsPerSkillMax(entry.ranks, maxRanks);
  const rankBorderColor = overMax
    ? colors.error.DEFAULT
    : entry.ranks > 0
      ? isDark
        ? fantasy.gold
        : fantasy.bronze
      : colors.border.DEFAULT;

  return (
    <View style={[styles.skillRow, { borderBottomColor: colors.border.DEFAULT }]}>
      <Text style={[styles.skillName, { color: colors.text.primary }]} numberOfLines={1}>
        {label ?? def.label}
      </Text>
      <Text style={[styles.abilityBadge, { color: colors.text.tertiary }]}>
        {def.ability.toUpperCase()}
      </Text>

      <View style={styles.inputCell}>
        <Text style={[styles.inputLabel, { color: colors.text.tertiary }]}>Rnk</Text>
        <TextInput
          value={entry.ranks > 0 ? String(entry.ranks) : ''}
          onChangeText={(t) => {
            const n = parseInt(t, 10);
            onChange({ ...entry, ranks: clampSkillRanks(isNaN(n) ? 0 : n, maxRanks) });
          }}
          keyboardType="number-pad"
          selectTextOnFocus
          placeholder="0"
          placeholderTextColor={colors.text.tertiary}
          accessibilityLabel={`${label ?? def.label} ranks`}
          accessibilityHint={maxRanks > 0 ? `Maximum ${maxRanks} ranks` : undefined}
          style={[
            styles.rankInput,
            {
              color: overMax ? colors.error.DEFAULT : colors.text.primary,
              borderColor: rankBorderColor,
              backgroundColor: isDark ? colors.bg.tertiary : colors.bg.secondary,
            },
          ]}
        />
      </View>

      <View style={styles.inputCell}>
        <Text style={[styles.inputLabel, { color: colors.text.tertiary }]}>Misc</Text>
        <TextInput
          value={entry.misc !== 0 ? String(entry.misc) : ''}
          onChangeText={(t) => {
            const n = parseInt(t, 10);
            onChange({ ...entry, misc: isNaN(n) ? 0 : n });
          }}
          keyboardType="numbers-and-punctuation"
          selectTextOnFocus
          placeholder="0"
          placeholderTextColor={colors.text.tertiary}
          style={[
            styles.rankInput,
            {
              color: colors.text.primary,
              borderColor: colors.border.DEFAULT,
              backgroundColor: isDark ? colors.bg.tertiary : colors.bg.secondary,
            },
          ]}
        />
      </View>

      <Text
        style={[
          styles.total,
          {
            color:
              total !== abilityMod
                ? isDark
                  ? fantasy.gold
                  : fantasy.bronze
                : colors.text.tertiary,
          },
        ]}
      >
        {total >= 0 ? `+${total}` : `${total}`}
      </Text>

      {onRemove ? (
        <Pressable
          onPress={onRemove}
          style={styles.removeButton}
          accessibilityLabel="Remove specialty"
          accessibilityRole="button"
        >
          <Text style={[styles.removeButtonText, { color: colors.text.tertiary }]}>×</Text>
        </Pressable>
      ) : (
        <View style={styles.removeButtonPlaceholder} />
      )}
    </View>
  );
}

// ---- Specialty group ----

interface SpecialtyGroupProps {
  def: SkillDef;
  skills: Record<string, SkillEntry>;
  filterQuery: string;
  abilityMod: number;
  maxRanks: number;
  onChangeSkill: (skillKey: string, entry: SkillEntry) => void;
  onRemoveSkill: (skillKey: string) => void;
  onAddSkill: (skillKey: string) => void;
}

function SpecialtyGroup({
  def,
  skills,
  filterQuery,
  abilityMod,
  maxRanks,
  onChangeSkill,
  onRemoveSkill,
  onAddSkill,
}: SpecialtyGroupProps) {
  const { colors, fantasy, isDark } = useTheme();
  const [adding, setAdding] = useState(false);
  const [input, setInput] = useState('');

  const emptyEntry: SkillEntry = { ranks: 0, misc: 0 };
  const allKeys = useMemo(() => getSpecialtyKeys(skills, def.key), [skills, def.key]);

  const visibleKeys = useMemo(() => {
    if (!filterQuery) return allKeys;
    const q = filterQuery.toLowerCase();
    // If the base label matches, show all specialties
    if (def.label.toLowerCase().includes(q)) return allKeys;
    // Otherwise show only specialties whose key contains the query
    return allKeys.filter((k) => k.toLowerCase().includes(q));
  }, [allKeys, filterQuery, def.label]);

  function confirmAdd() {
    const name = input.trim().toLowerCase();
    if (!name) return;
    const key = `${def.key} (${name})`;
    if (key in skills) return; // already exists — don't overwrite ranks
    onAddSkill(key);
    setInput('');
    setAdding(false);
  }

  return (
    <View>
      {/* Category header */}
      <View style={[styles.specialtyHeader, { borderBottomColor: colors.border.DEFAULT }]}>
        <Text style={[styles.specialtyHeaderLabel, { color: colors.text.secondary }]}>
          {def.label}
          {def.trainedOnly ? <Text style={{ color: colors.text.tertiary }}> *</Text> : null}
        </Text>
        <Text style={[styles.abilityBadge, { color: colors.text.tertiary }]}>
          {def.ability.toUpperCase()}
        </Text>
        <View style={styles.specialtyHeaderSpacer} />
        <Pressable
          onPress={() => {
            setAdding((v) => !v);
            setInput('');
          }}
          accessibilityRole="button"
          style={styles.addSpecialtyButton}
        >
          <Text
            style={[
              styles.addSpecialtyButtonText,
              { color: isDark ? fantasy.gold : fantasy.bronze },
            ]}
          >
            {adding ? 'Cancel' : '+ Add'}
          </Text>
        </Pressable>
      </View>

      {/* Inline add form */}
      {adding && (
        <View
          style={[
            styles.addSpecialtyRow,
            {
              backgroundColor: isDark ? colors.bg.tertiary : colors.bg.secondary,
              borderBottomColor: colors.border.DEFAULT,
            },
          ]}
        >
          <TextInput
            value={input}
            onChangeText={setInput}
            placeholder={`${def.label} specialty...`}
            placeholderTextColor={colors.text.tertiary}
            autoFocus
            autoCapitalize="words"
            returnKeyType="done"
            onSubmitEditing={confirmAdd}
            style={[
              styles.addSpecialtyInput,
              {
                color: colors.text.primary,
                borderColor: isDark ? fantasy.gold : fantasy.bronze,
                backgroundColor: isDark ? colors.bg.secondary : colors.bg.primary,
              },
            ]}
          />
          <Pressable
            onPress={confirmAdd}
            disabled={!input.trim()}
            accessibilityRole="button"
            style={[
              styles.addSpecialtyConfirm,
              {
                backgroundColor: isDark ? fantasy.gold : fantasy.bronze,
                opacity: input.trim() ? 1 : 0.35,
              },
            ]}
          >
            <Text style={styles.addSpecialtyConfirmText}>Add</Text>
          </Pressable>
        </View>
      )}

      {/* Specialty rows */}
      {visibleKeys.map((k) => {
        const prefix = `${def.key} (`;
        const rawName = k.startsWith(prefix) ? k.slice(prefix.length, -1) : k;
        return (
          <SkillRow
            key={k}
            def={def}
            label={`${def.label} (${capitalizeWords(rawName)})`}
            entry={skills[k] ?? emptyEntry}
            abilityMod={abilityMod}
            maxRanks={maxRanks}
            onChange={(entry) => onChangeSkill(k, entry)}
            onRemove={() => onRemoveSkill(k)}
          />
        );
      })}

      {/* Empty state hint */}
      {visibleKeys.length === 0 && !adding && (
        <Text style={[styles.specialtyEmptyText, { color: colors.text.tertiary }]}>
          No {def.label} specialties added
        </Text>
      )}
    </View>
  );
}

// ---- Main section ----

export function SkillsSection() {
  const { colors, fantasy, isDark } = useTheme();
  const dispatch = useAppDispatch();
  const character = useAppSelector((state) => state.characterEntry.character);
  const skills = character.skills as unknown as Record<string, SkillEntry>;
  const ruleset = useAppSelector((state) => state.ruleset.activeRuleset ?? PRESET_PF1E_STANDARD);
  const showInitiating =
    ruleset.optionalRules.pathOfWarMechanics || ruleset.optionalRules.tomeOfBattleMechanics;
  const [showAll, setShowAll] = useState(false);
  const [query, setQuery] = useState('');

  const abilityMods = {
    str: character.abilityScores.str.modifier,
    dex: character.abilityScores.dex.modifier,
    con: character.abilityScores.con.modifier,
    int: character.abilityScores.int.modifier,
    wis: character.abilityScores.wis.modifier,
    cha: character.abilityScores.cha.modifier,
  };

  const totalRanks = useMemo(
    () =>
      Object.values(skills)
        .filter((e): e is SkillEntry => typeof e === 'object' && e !== null && 'ranks' in e)
        .reduce((sum, e) => sum + e.ranks, 0),
    [skills],
  );

  // Max ranks allowed in any single skill = character total level (Hit Dice).
  const maxRanks = getPerSkillMaxRanks(character.classes.totalLevel);

  // Total ranks available to spend across all class levels, and how many remain.
  const totalAvailable = getTotalAvailableSkillRanks(
    character.classes.classes.map((c) => ({
      skillRanksPerLevel: c.skillRanks ?? 2,
      level: c.level,
    })),
    character.abilityScores.int.modifier,
  );
  const remaining = totalAvailable - totalRanks;

  const filteredDefs = useMemo(() => {
    const q = query.toLowerCase().trim();
    return SKILL_DEFS.filter((def) => {
      if (def.conditionalOn === 'initiating' && !showInitiating) return false;
      if (!def.allowsSpecialties) {
        if (q && !def.label.toLowerCase().includes(q)) return false;
        if (!showAll && !q) {
          const entry = skills[def.key];
          return entry ? entry.ranks > 0 : false;
        }
        return true;
      } else {
        // Specialty skill: show based on query or rank presence
        if (q) {
          if (def.label.toLowerCase().includes(q)) return true;
          return getSpecialtyKeys(skills, def.key).some((k) => k.toLowerCase().includes(q));
        }
        if (!showAll) {
          return getSpecialtyKeys(skills, def.key).length > 0;
        }
        return true;
      }
    });
  }, [skills, showAll, query, showInitiating]);

  const emptyEntry: SkillEntry = { ranks: 0, misc: 0 };

  return (
    <View style={styles.container}>
      {/* Summary */}
      <View
        style={[
          styles.summaryRow,
          {
            backgroundColor: isDark ? colors.bg.secondary : colors.bg.tertiary,
            borderColor: colors.border.DEFAULT,
          },
        ]}
      >
        <Text style={[styles.summaryText, { color: colors.text.secondary }]}>
          Ranks used:{' '}
          <Text style={{ color: isDark ? fantasy.gold : fantasy.bronze, fontWeight: '700' }}>
            {totalRanks}
          </Text>
          {totalAvailable > 0 ? (
            <Text style={{ color: colors.text.secondary }}>
              {' of '}
              <Text style={{ color: isDark ? fantasy.gold : fantasy.bronze, fontWeight: '700' }}>
                {totalAvailable}
              </Text>
              {'   Remaining: '}
              <Text
                testID="skill-ranks-remaining"
                style={{
                  color:
                    remaining < 0 ? colors.error.DEFAULT : isDark ? fantasy.gold : fantasy.bronze,
                  fontWeight: '700',
                }}
              >
                {remaining}
              </Text>
            </Text>
          ) : null}
          {maxRanks > 0 ? (
            <Text style={{ color: colors.text.tertiary }}>
              {'   Max per skill: '}
              <Text style={{ color: isDark ? fantasy.gold : fantasy.bronze, fontWeight: '700' }}>
                {maxRanks}
              </Text>
            </Text>
          ) : null}
        </Text>
      </View>

      {/* Search */}
      <View
        style={[
          styles.searchRow,
          {
            borderColor: query ? (isDark ? fantasy.gold : fantasy.bronze) : colors.border.DEFAULT,
            backgroundColor: isDark ? colors.bg.tertiary : colors.bg.secondary,
          },
        ]}
      >
        <TextInput
          value={query}
          onChangeText={setQuery}
          placeholder="Search skills..."
          placeholderTextColor={colors.text.tertiary}
          style={[styles.searchInput, { color: colors.text.primary }]}
          clearButtonMode="while-editing"
        />
      </View>

      {/* Skill list */}
      <View
        style={[
          styles.listPanel,
          {
            backgroundColor: isDark ? colors.bg.secondary : colors.bg.primary,
            borderColor: colors.border.DEFAULT,
          },
        ]}
      >
        {/* Column header */}
        <View style={[styles.headerRow, { borderBottomColor: colors.border.DEFAULT }]}>
          <Text style={[styles.headerSkill, { color: colors.text.tertiary }]}>Skill</Text>
          <Text style={[styles.headerAbility, { color: colors.text.tertiary }]}>Abl</Text>
          <Text style={[styles.headerNum, { color: colors.text.tertiary }]}>Rnk</Text>
          <Text style={[styles.headerNum, { color: colors.text.tertiary }]}>Misc</Text>
          <Text style={[styles.headerTotal, { color: colors.text.tertiary }]}>Total</Text>
          <View style={styles.removeButtonPlaceholder} />
        </View>

        {filteredDefs.length === 0 && (
          <Text style={[styles.emptyText, { color: colors.text.tertiary }]}>
            {query ? `No skills matching "${query}"` : 'No skills with ranks yet'}
          </Text>
        )}

        {filteredDefs.map((def) =>
          def.allowsSpecialties ? (
            <SpecialtyGroup
              key={def.key}
              def={def}
              skills={skills}
              filterQuery={query}
              abilityMod={abilityMods[def.ability]}
              maxRanks={maxRanks}
              onChangeSkill={(skillKey, entry) => dispatch(setSkillEntry({ skillKey, entry }))}
              onRemoveSkill={(skillKey) => dispatch(removeSkillEntry(skillKey))}
              onAddSkill={(skillKey) => dispatch(setSkillEntry({ skillKey, entry: emptyEntry }))}
            />
          ) : (
            <SkillRow
              key={def.key}
              def={def}
              entry={skills[def.key] ?? emptyEntry}
              abilityMod={abilityMods[def.ability]}
              maxRanks={maxRanks}
              onChange={(entry) => dispatch(setSkillEntry({ skillKey: def.key, entry }))}
            />
          ),
        )}
      </View>

      {/* Show all toggle */}
      {!query && (
        <Pressable
          onPress={() => setShowAll((v) => !v)}
          style={[styles.showAllButton, { borderColor: colors.border.DEFAULT }]}
          accessibilityRole="button"
        >
          <Text style={[styles.showAllText, { color: colors.text.secondary }]}>
            {showAll ? 'Show ranked skills only' : 'Show all skills'}
          </Text>
        </Pressable>
      )}
    </View>
  );
}

// ---- Styles ----

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
  summaryRow: {
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  summaryText: {
    fontFamily: 'LibreBaskerville',
    fontSize: 13,
  },
  searchRow: {
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  searchInput: {
    fontFamily: 'LibreBaskerville',
    fontSize: 15,
    minHeight: 36,
  },
  listPanel: {
    borderRadius: 10,
    borderWidth: 1,
    overflow: 'hidden',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderBottomWidth: StyleSheet.hairlineWidth,
    gap: 4,
  },
  headerSkill: {
    flex: 1,
    fontFamily: 'Cinzel',
    fontSize: 9,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  headerAbility: {
    width: 30,
    fontFamily: 'Cinzel',
    fontSize: 9,
    fontWeight: '700',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  headerNum: {
    width: 44,
    fontFamily: 'Cinzel',
    fontSize: 9,
    fontWeight: '700',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  headerTotal: {
    width: 44,
    fontFamily: 'Cinzel',
    fontSize: 9,
    fontWeight: '700',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  skillRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderBottomWidth: StyleSheet.hairlineWidth,
    gap: 4,
  },
  skillName: {
    flex: 1,
    fontFamily: 'LibreBaskerville',
    fontSize: 13,
  },
  abilityBadge: {
    width: 30,
    fontFamily: 'LibreBaskerville',
    fontSize: 10,
    textAlign: 'center',
  },
  inputCell: {
    width: 44,
    alignItems: 'center',
    gap: 2,
  },
  inputLabel: {
    fontFamily: 'LibreBaskerville',
    fontSize: 9,
    textTransform: 'uppercase',
  },
  rankInput: {
    fontFamily: 'LibreBaskerville',
    fontSize: 14,
    fontWeight: '700',
    borderWidth: 1,
    borderRadius: 4,
    width: 40,
    paddingVertical: 4,
    textAlign: 'center',
    minHeight: 32,
  },
  total: {
    width: 44,
    fontFamily: 'LibreBaskerville',
    fontSize: 14,
    fontWeight: '700',
    textAlign: 'center',
  },
  removeButton: {
    width: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  removeButtonText: {
    fontFamily: 'LibreBaskerville',
    fontSize: 18,
    lineHeight: 22,
  },
  removeButtonPlaceholder: {
    width: 24,
  },
  emptyText: {
    fontFamily: 'LibreBaskerville',
    fontSize: 13,
    fontStyle: 'italic',
    textAlign: 'center',
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  showAllButton: {
    borderWidth: 1,
    borderRadius: 8,
    borderStyle: 'dashed',
    paddingVertical: 10,
    alignItems: 'center',
  },
  showAllText: {
    fontFamily: 'LibreBaskerville',
    fontSize: 13,
  },
  // Specialty group
  specialtyHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderBottomWidth: StyleSheet.hairlineWidth,
    gap: 4,
  },
  specialtyHeaderLabel: {
    flex: 1,
    fontFamily: 'Cinzel',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
  specialtyHeaderSpacer: {
    flex: 0,
    width: 132, // aligns with rnk + misc + total columns (44 + 44 + 44)
  },
  addSpecialtyButton: {
    paddingHorizontal: 4,
    paddingVertical: 2,
    width: 56,
    alignItems: 'flex-end',
  },
  addSpecialtyButtonText: {
    fontFamily: 'LibreBaskerville',
    fontSize: 12,
    fontWeight: '700',
  },
  addSpecialtyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderBottomWidth: StyleSheet.hairlineWidth,
    gap: 8,
  },
  addSpecialtyInput: {
    flex: 1,
    fontFamily: 'LibreBaskerville',
    fontSize: 13,
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 6,
    minHeight: 36,
  },
  addSpecialtyConfirm: {
    borderRadius: 6,
    paddingHorizontal: 14,
    paddingVertical: 7,
    minHeight: 36,
    justifyContent: 'center',
  },
  addSpecialtyConfirmText: {
    fontFamily: 'Cinzel',
    fontSize: 12,
    fontWeight: '700',
    color: '#1a1a1a',
  },
  specialtyEmptyText: {
    fontFamily: 'LibreBaskerville',
    fontSize: 12,
    fontStyle: 'italic',
    textAlign: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
});
