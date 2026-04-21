import React, { useState, useMemo } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setSkillEntry } from '@/store/slices/characterEntrySlice';
import { getAbilityModifier } from '@/utils/characterComputations';
import { type AbilityKey } from '@/types/characterDraft';
import { type DraftSkillEntry } from '@/types/characterDraft';

// ---- Static skill definitions ----

interface SkillDef {
  key: string;
  label: string;
  ability: AbilityKey;
  trainedOnly?: boolean;
}

const SKILL_DEFS: SkillDef[] = [
  { key: 'acrobatics', label: 'Acrobatics', ability: 'dex' },
  { key: 'appraise', label: 'Appraise', ability: 'int' },
  { key: 'bluff', label: 'Bluff', ability: 'cha' },
  { key: 'climb', label: 'Climb', ability: 'str' },
  { key: 'craft', label: 'Craft', ability: 'int' },
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
  { key: 'knowledgeNature', label: 'Knowledge (Nature)', ability: 'int', trainedOnly: true },
  { key: 'knowledgeNobility', label: 'Knowledge (Nobility)', ability: 'int', trainedOnly: true },
  { key: 'knowledgePlanes', label: 'Knowledge (Planes)', ability: 'int', trainedOnly: true },
  { key: 'knowledgeReligion', label: 'Knowledge (Religion)', ability: 'int', trainedOnly: true },
  { key: 'linguistics', label: 'Linguistics', ability: 'int', trainedOnly: true },
  { key: 'perception', label: 'Perception', ability: 'wis' },
  { key: 'perform', label: 'Perform', ability: 'cha' },
  { key: 'profession', label: 'Profession', ability: 'wis', trainedOnly: true },
  { key: 'ride', label: 'Ride', ability: 'dex' },
  { key: 'senseMotive', label: 'Sense Motive', ability: 'wis' },
  { key: 'sleightOfHand', label: 'Sleight of Hand', ability: 'dex', trainedOnly: true },
  { key: 'spellcraft', label: 'Spellcraft', ability: 'int', trainedOnly: true },
  { key: 'stealth', label: 'Stealth', ability: 'dex' },
  { key: 'survival', label: 'Survival', ability: 'wis' },
  { key: 'swim', label: 'Swim', ability: 'str' },
  { key: 'useMagicDevice', label: 'Use Magic Device', ability: 'cha', trainedOnly: true },
];

// ---- Skill row ----

interface SkillRowProps {
  def: SkillDef;
  entry: DraftSkillEntry;
  abilityMod: number;
  onChange: (entry: DraftSkillEntry) => void;
}

function SkillRow({ def, entry, abilityMod, onChange }: SkillRowProps) {
  const { colors, fantasy, isDark } = useTheme();
  const total = entry.ranks + entry.misc + abilityMod;

  return (
    <View style={[styles.skillRow, { borderBottomColor: colors.border.DEFAULT }]}>
      <Text style={[styles.skillName, { color: colors.text.primary }]} numberOfLines={1}>
        {def.label}
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
            onChange({ ...entry, ranks: isNaN(n) ? 0 : n });
          }}
          keyboardType="number-pad"
          selectTextOnFocus
          placeholder="0"
          placeholderTextColor={colors.text.tertiary}
          style={[
            styles.rankInput,
            {
              color: colors.text.primary,
              borderColor:
                entry.ranks > 0 ? (isDark ? fantasy.gold : fantasy.bronze) : colors.border.DEFAULT,
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
    </View>
  );
}

// ---- Main section ----

export function SkillsSection() {
  const { colors, fantasy, isDark } = useTheme();
  const dispatch = useAppDispatch();
  const skills = useAppSelector((state) => state.characterEntry.draft.skills);
  const abilities = useAppSelector((state) => state.characterEntry.draft.abilities);

  const [showAll, setShowAll] = useState(false);
  const [query, setQuery] = useState('');

  const abilityMods = useMemo(
    () => ({
      str: getAbilityModifier(abilities, 'str'),
      dex: getAbilityModifier(abilities, 'dex'),
      con: getAbilityModifier(abilities, 'con'),
      int: getAbilityModifier(abilities, 'int'),
      wis: getAbilityModifier(abilities, 'wis'),
      cha: getAbilityModifier(abilities, 'cha'),
    }),
    [abilities],
  );

  const totalRanks = useMemo(
    () => Object.values(skills).reduce((sum, e) => sum + e.ranks, 0),
    [skills],
  );

  const filteredDefs = useMemo(() => {
    const q = query.toLowerCase().trim();
    return SKILL_DEFS.filter((def) => {
      if (q && !def.label.toLowerCase().includes(q)) return false;
      if (!showAll && !q) {
        const entry = skills[def.key];
        return entry ? entry.ranks > 0 : false;
      }
      return true;
    });
  }, [skills, showAll, query]);

  const emptyEntry: DraftSkillEntry = { ranks: 0, misc: 0 };

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
        </View>

        {filteredDefs.length === 0 && (
          <Text style={[styles.emptyText, { color: colors.text.tertiary }]}>
            {query ? `No skills matching "${query}"` : 'No skills with ranks yet'}
          </Text>
        )}

        {filteredDefs.map((def) => (
          <SkillRow
            key={def.key}
            def={def}
            entry={skills[def.key] ?? emptyEntry}
            abilityMod={abilityMods[def.ability]}
            onChange={(entry) => dispatch(setSkillEntry({ skillKey: def.key, entry }))}
          />
        ))}
      </View>

      {/* Show all toggle */}
      {!query && (
        <Pressable
          onPress={() => setShowAll((v) => !v)}
          style={[styles.showAllButton, { borderColor: colors.border.DEFAULT }]}
          accessibilityRole="button"
        >
          <Text style={[styles.showAllText, { color: colors.text.secondary }]}>
            {showAll ? 'Show ranked skills only' : `Show all ${SKILL_DEFS.length} skills`}
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
});
