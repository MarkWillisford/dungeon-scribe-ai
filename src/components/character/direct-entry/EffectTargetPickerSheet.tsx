import React, { useState, useMemo } from 'react';
import { View, Text, TextInput, Pressable, SectionList, FlatList, StyleSheet } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import type { Character } from '@/types';
import type { EffectTarget } from '@/types/base';

// ---- Types ----

export interface EffectTargetOption {
  target: EffectTarget;
  label: string;
}

interface EffectTargetPickerSheetProps {
  character: Character;
  onSelect: (option: EffectTargetOption) => void;
  onBack: () => void;
}

// ---- Static target sections ----

const STATIC_SECTIONS: { title: string; data: EffectTargetOption[] }[] = [
  {
    title: 'Saving Throws',
    data: [
      { target: 'save.all', label: 'All Saves' },
      { target: 'save.fortitude', label: 'Fortitude Save' },
      { target: 'save.reflex', label: 'Reflex Save' },
      { target: 'save.will', label: 'Will Save' },
    ],
  },
  {
    title: 'Ability Scores',
    data: [
      { target: 'ability.str', label: 'Strength' },
      { target: 'ability.dex', label: 'Dexterity' },
      { target: 'ability.con', label: 'Constitution' },
      { target: 'ability.int', label: 'Intelligence' },
      { target: 'ability.wis', label: 'Wisdom' },
      { target: 'ability.cha', label: 'Charisma' },
    ],
  },
  {
    title: 'Armor Class',
    data: [
      { target: 'ac', label: 'AC (misc)' },
      { target: 'ac.armor', label: 'Armor Bonus' },
      { target: 'ac.shield', label: 'Shield Bonus' },
      { target: 'ac.natural', label: 'Natural Armor' },
      { target: 'ac.deflection', label: 'Deflection' },
      { target: 'ac.dodge', label: 'Dodge' },
    ],
  },
  {
    title: 'Combat',
    data: [
      { target: 'attack.all', label: 'All Attacks' },
      { target: 'attack.melee', label: 'Melee Attack' },
      { target: 'attack.ranged', label: 'Ranged Attack' },
      { target: 'damage.melee', label: 'Melee Damage' },
      { target: 'damage.ranged', label: 'Ranged Damage' },
      { target: 'cmb', label: 'CMB' },
      { target: 'cmd', label: 'CMD' },
      { target: 'initiative', label: 'Initiative' },
    ],
  },
  {
    title: 'Hit Points',
    data: [{ target: 'hp', label: 'Hit Points' }],
  },
  {
    title: 'Skills',
    data: [
      { target: 'skill.acrobatics', label: 'Acrobatics' },
      { target: 'skill.appraise', label: 'Appraise' },
      { target: 'skill.bluff', label: 'Bluff' },
      { target: 'skill.climb', label: 'Climb' },
      { target: 'skill.craft', label: 'Craft' },
      { target: 'skill.diplomacy', label: 'Diplomacy' },
      { target: 'skill.disable_device', label: 'Disable Device' },
      { target: 'skill.disguise', label: 'Disguise' },
      { target: 'skill.escape_artist', label: 'Escape Artist' },
      { target: 'skill.fly', label: 'Fly' },
      { target: 'skill.handle_animal', label: 'Handle Animal' },
      { target: 'skill.heal', label: 'Heal' },
      { target: 'skill.intimidate', label: 'Intimidate' },
      { target: 'skill.knowledge_arcana', label: 'Knowledge (Arcana)' },
      { target: 'skill.knowledge_dungeoneering', label: 'Knowledge (Dungeoneering)' },
      { target: 'skill.knowledge_engineering', label: 'Knowledge (Engineering)' },
      { target: 'skill.knowledge_geography', label: 'Knowledge (Geography)' },
      { target: 'skill.knowledge_history', label: 'Knowledge (History)' },
      { target: 'skill.knowledge_local', label: 'Knowledge (Local)' },
      { target: 'skill.knowledge_nature', label: 'Knowledge (Nature)' },
      { target: 'skill.knowledge_nobility', label: 'Knowledge (Nobility)' },
      { target: 'skill.knowledge_planes', label: 'Knowledge (Planes)' },
      { target: 'skill.knowledge_religion', label: 'Knowledge (Religion)' },
      { target: 'skill.linguistics', label: 'Linguistics' },
      { target: 'skill.perception', label: 'Perception' },
      { target: 'skill.perform', label: 'Perform' },
      { target: 'skill.profession', label: 'Profession' },
      { target: 'skill.ride', label: 'Ride' },
      { target: 'skill.sense_motive', label: 'Sense Motive' },
      { target: 'skill.sleight_of_hand', label: 'Sleight of Hand' },
      { target: 'skill.spellcraft', label: 'Spellcraft' },
      { target: 'skill.stealth', label: 'Stealth' },
      { target: 'skill.survival', label: 'Survival' },
      { target: 'skill.swim', label: 'Swim' },
      { target: 'skill.use_magic_device', label: 'Use Magic Device' },
    ],
  },
];

// ---- Class ability target builder ----

const CLASS_ABILITY_MAP: { keywords: string[]; targets: EffectTargetOption[] }[] = [
  {
    keywords: ['channel energy'],
    targets: [
      { target: 'special.channel_dc', label: 'Channel Energy DC' },
      { target: 'special.channel_dice', label: 'Channel Energy Dice' },
    ],
  },
  {
    keywords: ['bardic performance', 'bardic music'],
    targets: [{ target: 'special.bardic_performance_rounds', label: 'Bardic Performance Rounds' }],
  },
  {
    keywords: ['sneak attack'],
    targets: [{ target: 'special.sneak_attack_dice', label: 'Sneak Attack Dice' }],
  },
  {
    keywords: ['rage'],
    targets: [{ target: 'special.rage_rounds', label: 'Rage Rounds/Day' }],
  },
  {
    keywords: ['lay on hands'],
    targets: [{ target: 'special.lay_on_hands_dice', label: 'Lay on Hands Dice' }],
  },
  {
    keywords: ['ki pool'],
    targets: [{ target: 'special.ki_pool', label: 'Ki Pool Points' }],
  },
  {
    keywords: ['bomb'],
    targets: [
      { target: 'special.bomb_dice', label: 'Bomb Dice' },
      { target: 'special.bomb_dc', label: 'Bomb DC' },
    ],
  },
  {
    keywords: ['wild shape'],
    targets: [{ target: 'special.wild_shape_uses', label: 'Wild Shape Uses/Day' }],
  },
  {
    keywords: ['smite'],
    targets: [{ target: 'special.smite_uses', label: 'Smite Uses/Day' }],
  },
  {
    keywords: ['grit', 'panache'],
    targets: [{ target: 'special.grit_points', label: 'Grit/Panache Points' }],
  },
];

export function buildClassAbilityTargets(character: Character): EffectTargetOption[] {
  const featureNames = character.classes.classes
    .flatMap((cls) => cls.classFeatures ?? [])
    .map((f) => f.name.toLowerCase());

  const seen = new Set<string>();
  const results: EffectTargetOption[] = [];

  for (const { keywords, targets } of CLASS_ABILITY_MAP) {
    const matches = keywords.some((kw) => featureNames.some((name) => name.includes(kw)));
    if (matches) {
      for (const t of targets) {
        if (!seen.has(t.target)) {
          seen.add(t.target);
          results.push(t);
        }
      }
    }
  }

  return results;
}

// Build a flat label map for resolving target strings → display labels elsewhere
export function buildTargetLabelMap(character: Character): Map<string, string> {
  const map = new Map<string, string>();
  for (const section of STATIC_SECTIONS) {
    for (const opt of section.data) {
      map.set(opt.target, opt.label);
    }
  }
  for (const opt of buildClassAbilityTargets(character)) {
    map.set(opt.target, opt.label);
  }
  // Spellcasting
  if (character.spellcasting.pools.length > 0) {
    map.set('spell.save_dc', 'Spell DC');
    map.set('spell.caster_level', 'Caster Level');
    map.set('spell.concentration', 'Concentration');
  }
  return map;
}

// ---- Component ----

export function EffectTargetPickerSheet({
  character,
  onSelect,
  onBack,
}: EffectTargetPickerSheetProps) {
  const { colors, fantasy, isDark } = useTheme();
  const [query, setQuery] = useState('');

  const spellcastingSection = useMemo(() => {
    if (!character.spellcasting.pools.length) return null;
    return {
      title: 'Spellcasting',
      data: [
        { target: 'spell.save_dc' as EffectTarget, label: 'Spell DC' },
        { target: 'spell.caster_level' as EffectTarget, label: 'Caster Level' },
        { target: 'spell.concentration' as EffectTarget, label: 'Concentration' },
      ],
    };
  }, [character.spellcasting.pools.length]);

  const classAbilitySection = useMemo(() => {
    const targets = buildClassAbilityTargets(character);
    if (!targets.length) return null;
    return { title: 'Class Abilities', data: targets };
  }, [character]);

  const allSections = useMemo(() => {
    const sections = [...STATIC_SECTIONS];
    if (spellcastingSection) sections.push(spellcastingSection);
    if (classAbilitySection) sections.push(classAbilitySection);
    return sections;
  }, [spellcastingSection, classAbilitySection]);

  const flatFiltered = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return null;
    return allSections.flatMap((s) => s.data).filter((opt) => opt.label.toLowerCase().includes(q));
  }, [query, allSections]);

  const renderItem = ({ item }: { item: EffectTargetOption }) => (
    <Pressable
      onPress={() => onSelect(item)}
      style={({ pressed }) => [
        styles.item,
        {
          borderBottomColor: colors.border.DEFAULT,
          backgroundColor: pressed
            ? isDark
              ? 'rgba(212,175,55,0.1)'
              : 'rgba(140,90,40,0.06)'
            : 'transparent',
        },
      ]}
    >
      <Text style={[styles.itemLabel, { color: colors.text.primary }]}>{item.label}</Text>
      <Text style={[styles.itemTarget, { color: colors.text.tertiary }]}>{item.target}</Text>
    </Pressable>
  );

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDark ? colors.bg.primary : colors.bg.secondary },
      ]}
    >
      {/* Sub-header */}
      <View style={[styles.subHeader, { borderBottomColor: colors.border.DEFAULT }]}>
        <Pressable onPress={onBack} style={styles.backBtn} hitSlop={12} testID="back-btn">
          <Text style={[styles.backText, { color: isDark ? fantasy.gold : fantasy.darkWood }]}>
            ← Back
          </Text>
        </Pressable>
        <Text style={[styles.subTitle, { color: isDark ? fantasy.gold : fantasy.darkWood }]}>
          Choose Target
        </Text>
      </View>

      {/* Search */}
      <View style={[styles.searchRow, { borderBottomColor: colors.border.DEFAULT }]}>
        <TextInput
          value={query}
          onChangeText={setQuery}
          placeholder="Search targets..."
          placeholderTextColor={colors.text.tertiary}
          autoFocus
          style={[
            styles.searchInput,
            {
              color: colors.text.primary,
              backgroundColor: isDark ? colors.bg.tertiary : colors.bg.primary,
              borderColor: query ? fantasy.gold : colors.border.DEFAULT,
            },
          ]}
          clearButtonMode="while-editing"
        />
      </View>

      {/* Results */}
      {flatFiltered ? (
        <FlatList
          data={flatFiltered}
          keyExtractor={(item) => item.target}
          keyboardShouldPersistTaps="handled"
          renderItem={renderItem}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={
            <View style={styles.empty}>
              <Text style={[styles.emptyText, { color: colors.text.tertiary }]}>
                No targets matching &quot;{query}&quot;
              </Text>
            </View>
          }
        />
      ) : (
        <SectionList
          sections={allSections}
          keyExtractor={(item) => item.target}
          keyboardShouldPersistTaps="handled"
          renderSectionHeader={({ section }) => (
            <View
              style={[
                styles.sectionHeader,
                { backgroundColor: isDark ? colors.bg.tertiary : colors.bg.secondary },
              ]}
            >
              <Text
                style={[
                  styles.sectionHeaderText,
                  { color: isDark ? fantasy.gold : fantasy.darkWood },
                ]}
              >
                {section.title}
              </Text>
            </View>
          )}
          renderItem={renderItem}
          contentContainerStyle={styles.listContent}
        />
      )}
    </View>
  );
}

// ---- Styles ----

const styles = StyleSheet.create({
  container: { flex: 1 },
  subHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    gap: 12,
  },
  backBtn: {},
  backText: {
    fontFamily: 'LibreBaskerville',
    fontSize: 15,
    fontWeight: '700',
  },
  subTitle: {
    fontFamily: 'Cinzel',
    fontSize: 14,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  searchRow: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
  },
  searchInput: {
    fontFamily: 'LibreBaskerville',
    fontSize: 15,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    minHeight: 40,
  },
  sectionHeader: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  sectionHeaderText: {
    fontFamily: 'Cinzel',
    fontSize: 10,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  listContent: { flexGrow: 1 },
  item: {
    paddingHorizontal: 16,
    paddingVertical: 11,
    borderBottomWidth: StyleSheet.hairlineWidth,
    gap: 2,
  },
  itemLabel: {
    fontFamily: 'LibreBaskerville',
    fontSize: 15,
    fontWeight: '700',
  },
  itemTarget: {
    fontFamily: 'LibreBaskerville',
    fontSize: 11,
    fontStyle: 'italic',
  },
  empty: { padding: 32, alignItems: 'center' },
  emptyText: {
    fontFamily: 'LibreBaskerville',
    fontSize: 14,
    fontStyle: 'italic',
    textAlign: 'center',
  },
});
