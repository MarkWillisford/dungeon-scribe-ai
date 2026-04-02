/**
 * Codemod: migrate non-standard Effect.type and Effect.target values to the new EffectType /
 * EffectTarget enums introduced in PR A (MW/effect-type-redesign).
 *
 * Run: npx ts-node scripts/migrate-effect-types.ts
 *
 * Safe to run multiple times (idempotent — replacements only match the old values).
 */

import fs from 'fs';
import path from 'path';

// ---------------------------------------------------------------------------
// File list
// ---------------------------------------------------------------------------

function collectFiles(dir: string, ext = '.ts'): string[] {
  const results: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...collectFiles(full, ext));
    } else if (entry.isFile() && entry.name.endsWith(ext)) {
      results.push(full);
    }
  }
  return results;
}

const root = path.resolve(__dirname, '..');
const targetDirs = [path.join(root, 'src/data/feats'), path.join(root, 'src/data/traits')];
const extraFiles = [path.join(root, 'src/data/buffs/presets.ts')];

const files = [
  ...targetDirs.flatMap((d) => collectFiles(d)),
  ...extraFiles.filter((f) => fs.existsSync(f)),
];

// ---------------------------------------------------------------------------
// Replacement rules
// IMPORTANT: order matters — more specific patterns must come before general ones.
// ---------------------------------------------------------------------------

// Each entry is [regex, replacement]. Replacements applied in order per file.
// Valid bare single-word EffectTarget values (must NOT be prefixed with 'special.')
const VALID_BARE_TARGETS = new Set([
  'ac',
  'dr',
  'sr',
  'initiative',
  'cmb',
  'cmd',
  'hp',
  'sneak_attack',
  'critical_confirmation',
  'critical_threat_range',
  'attack_of_opportunity',
  'energy_resistance',
  // SenseType
  'darkvision',
  'low_light_vision',
  'blindsight',
  'blindsense',
  'tremorsense',
  'scent',
  // MovementType
  'fly',
  'swim',
  'burrow',
  'climb',
  // ImmunityTarget
  'fear',
  'poison',
  'disease',
  'sleep',
  'paralysis',
  'mind_affecting',
  'bleed',
  'death_effects',
  'exhaustion',
  'fatigue',
  // DamageType (for immunity/resistance targets)
  'fire',
  'cold',
  'electricity',
  'acid',
  'sonic',
  'force',
  'negative',
  'positive',
  'piercing',
  'slashing',
  'bludgeoning',
]);

const rules: [RegExp, string | ((_m: string, ...args: string[]) => string)][] = [
  // ── EffectType renames ──────────────────────────────────────────────────
  [/\btype: 'special_rule'/g, "type: 'special'"],
  [/\btype: 'skill_bonus'/g, "type: 'bonus'"],
  [/\btype: 'stat_replacement'/g, "type: 'ability_substitution'"],
  [/\btype: 'ac_bonus'/g, "type: 'bonus'"],
  [/\btype: 'combat_bonus'/g, "type: 'bonus'"],
  [/\btype: 'stat_bonus_to_damage'/g, "type: 'bonus'"],
  [/\btype: 'combat_maneuver_bonus'/g, "type: 'bonus'"],
  [/\btype: 'healing_bonus'/g, "type: 'special'"],
  [/\btype: 'save_dc_bonus'/g, "type: 'special'"],
  [/\btype: 'energy_resistance'/g, "type: 'resistance'"],
  [/\btype: 'insight_bonus'/g, "type: 'bonus'"],
  [/\btype: 'resource_increase'/g, "type: 'special'"],
  [/\btype: 'damage_reduction_penetration'/g, "type: 'special'"],
  [/\btype: 'sneak_attack_bonus'/g, "type: 'bonus'"],
  [/\btype: 'caster_level_bonus'/g, "type: 'bonus'"],
  [/\btype: 'bonus_damage'/g, "type: 'damage'"],
  // 'speed' as Effect.type (grant_movement). Must use word boundary + lookahead for target:
  // to avoid matching EffectCondition or EffectActivation 'speed' values.
  // Safe: Effect.type 'speed' only appears in effects arrays with a `target:` on the next line.
  [/\btype: 'speed'(?=,\n\s+target:)/g, "type: 'grant_movement'"],

  // ── EffectTarget renames ─────────────────────────────────────────────────
  // Saving throws — most specific first
  [/\btarget: 'saves\.all'/g, "target: 'save.all'"],
  [/\btarget: 'saving_throws\.fortitude'/g, "target: 'save.fortitude'"],
  [/\btarget: 'saving_throws\.will\.[^']+'/g, "target: 'save.will'"],
  [/\btarget: 'saving_throws\.[^']+'/g, "target: 'save.all'"],
  [/\btarget: 'saving_throws_vs_[^']+'/g, "target: 'save.all'"],
  [/\btarget: 'saves_vs_[^']+'/g, "target: 'save.all'"],
  [/\btarget: 'saving_throws'/g, "target: 'save.all'"],
  [/\btarget: 'saving_throw_will'/g, "target: 'save.will'"],
  [/\btarget: 'saving_throw_reflex'/g, "target: 'save.reflex'"],
  [/\btarget: 'saving_throw_fortitude'/g, "target: 'save.fortitude'"],
  [/\btarget: 'saving_throw_electricity'/g, "target: 'save.reflex'"],
  [/\btarget: 'saving_throw_[^']+'/g, "target: 'save.all'"],
  [/\btarget: 'saving_throw'/g, "target: 'save.all'"],
  [/\btarget: 'save\.fort'/g, "target: 'save.fortitude'"],
  [/\btarget: 'save\.mind_affecting'/g, "target: 'save.all'"],
  [/\btarget: 'save\.sleep_effects'/g, "target: 'save.will'"],
  [/\btarget: 'save\.vs_prone'/g, "target: 'save.reflex'"],
  // Skills — underscore notation (skill_X → skill.X)
  [/\btarget: 'skill_([a-z_]+)'/g, (_m, s) => `target: 'skill.${s}'`],
  // Skills — bare names (no prefix)
  [/\btarget: 'diplomacy'/g, "target: 'skill.diplomacy'"],
  [/\btarget: 'bluff'/g, "target: 'skill.bluff'"],
  [/\btarget: 'acrobatics'/g, "target: 'skill.acrobatics'"],
  [/\btarget: 'intimidate'/g, "target: 'skill.intimidate'"],
  [/\btarget: 'perception'/g, "target: 'skill.perception'"],
  [/\btarget: 'sense_motive'/g, "target: 'skill.sense_motive'"],
  [/\btarget: 'stealth'/g, "target: 'skill.stealth'"],
  [/\btarget: 'survival'/g, "target: 'skill.survival'"],
  [/\btarget: 'escape_artist'/g, "target: 'skill.escape_artist'"],
  [/\btarget: 'sleight_of_hand'/g, "target: 'skill.sleight_of_hand'"],
  [/\btarget: 'use_magic_device'/g, "target: 'skill.use_magic_device'"],
  [/\btarget: 'wild_empathy'/g, "target: 'skill.wild_empathy'"],
  [/\btarget: 'intimidate_demoralize'/g, "target: 'skill.intimidate'"],
  // Attack targets — specific before general
  [/\btarget: 'attack_rolls'/g, "target: 'attack.all'"],
  [/\btarget: 'attack_roll'/g, "target: 'attack.melee'"],
  [/\btarget: 'melee_attack_roll'/g, "target: 'attack.melee'"],
  [/\btarget: 'melee_attack'/g, "target: 'attack.melee'"],
  [/\btarget: 'attack_action'/g, "target: 'attack.melee'"],
  [/\btarget: 'attack_on_charge'/g, "target: 'attack.melee'"],
  [/\btarget: 'attack_ranged_close'/g, "target: 'attack.ranged'"],
  [/\btarget: 'ranged_attack'/g, "target: 'attack.ranged'"],
  [/\btarget: 'touch_attack'/g, "target: 'attack.melee'"],
  [/\btarget: 'natural_weapon_attack'/g, "target: 'attack.melee'"],
  // 'attack' bare — must come after specific attack patterns
  [/\btarget: 'attack'(?!')/g, "target: 'attack.melee'"],
  // Damage targets — specific before general
  [/\btarget: 'damage_rolls'/g, "target: 'damage.melee'"],
  [/\btarget: 'damage_roll'/g, "target: 'damage.melee'"],
  [/\btarget: 'weapon_damage'/g, "target: 'weapon.damage'"],
  [/\btarget: 'damage_ranged_close'/g, "target: 'damage.ranged'"],
  [/\btarget: 'damage_thrown_improvised'/g, "target: 'damage.thrown'"],
  [/\btarget: 'touch_attack_damage'/g, "target: 'damage.melee'"],
  // 'damage' bare — must come after specific patterns
  [/\btarget: 'damage'(?!')/g, "target: 'damage.melee'"],
  // CMB/CMD — specific before general
  [/\btarget: 'cmb_trip'/g, "target: 'cmb.trip'"],
  [/\btarget: 'cmb_overrun'/g, "target: 'cmb.overrun'"],
  [/\btarget: 'cmb_drag'/g, "target: 'cmb.drag'"],
  [/\btarget: 'cmb_bull_rush_or_trip'/g, "target: 'cmb.bull_rush'"],
  [/\btarget: 'cmb_bull_rush'/g, "target: 'cmb.bull_rush'"],
  [/\btarget: 'cmb_grapple_or_trip'/g, "target: 'cmb.grapple'"],
  [/\btarget: 'cmb_grapple_maintain'/g, "target: 'cmb.grapple'"],
  [/\btarget: 'combat_maneuver_disarm'/g, "target: 'cmb.disarm'"],
  [/\btarget: 'combat_maneuver_drag'/g, "target: 'cmb.drag'"],
  [/\btarget: 'combat_maneuver_grapple'/g, "target: 'cmb.grapple'"],
  [/\btarget: 'combat_maneuver_trip'/g, "target: 'cmb.trip'"],
  [/\btarget: 'combat_maneuver_defense'/g, "target: 'cmd'"],
  [/\btarget: 'combat_maneuver_check'/g, "target: 'cmb'"],
  [/\btarget: 'combat_maneuver'/g, "target: 'cmb'"],
  [/\btarget: 'cmd_bonus'/g, "target: 'cmd'"],
  // combat.X prefixes
  [/\btarget: 'combat\.ac'/g, "target: 'ac'"],
  [/\btarget: 'combat\.cmb_grapple_maintain'/g, "target: 'cmb.grapple'"],
  [/\btarget: 'combat\.cmb'/g, "target: 'cmb'"],
  [/\btarget: 'combat\.cmd'/g, "target: 'cmd'"],
  [/\btarget: 'combat\.dr'/g, "target: 'dr'"],
  [/\btarget: 'combat\.attack_rolls'/g, "target: 'attack.all'"],
  [/\btarget: 'combat\.ranged_attack'/g, "target: 'attack.ranged'"],
  [/\btarget: 'combat\.attack'/g, "target: 'attack.all'"],
  [/\btarget: 'combat\.damage'/g, "target: 'damage.melee'"],
  [/\btarget: 'combat\.feint'/g, "target: 'skill.bluff'"],
  [
    /\btarget: 'combat\.attack_damage_vs_favored_enemy'/g,
    "target: 'attack_and_damage.favored_enemy'",
  ],
  // Speed targets
  [/\btarget: 'movement_speed'/g, "target: 'speed.base'"],
  [/\btarget: 'movement'/g, "target: 'speed.base'"],
  [/\btarget: 'base_speed'/g, "target: 'speed.base'"],
  [/\btarget: 'land_speed'/g, "target: 'speed.base'"],
  // 'speed' bare as target — must NOT match 'speed.base' or 'speed.fly' etc.
  [/\btarget: 'speed'(?![.\w])/g, "target: 'speed.base'"],
  // Spell targets
  [/\btarget: 'concentration'/g, "target: 'spell.concentration'"],
  [/\btarget: 'caster_level_check'/g, "target: 'spell.caster_level_check'"],
  [/\btarget: 'caster_level_bonus'/g, "target: 'spell.caster_level'"],
  [/\btarget: 'scroll_caster_level'/g, "target: 'spell.caster_level'"],
  [/\btarget: 'spell\.dc'/g, "target: 'spell.save_dc'"],
  [/\btarget: 'spell_dc'/g, "target: 'spell.save_dc'"],
  [/\btarget: 'save_dc_bonus'/g, "target: 'spell.save_dc'"],
  [/\btarget: 'dispel_check'/g, "target: 'spell.caster_level_check'"],
  // HP / sneak attack
  [/\btarget: 'sneak_attack\.dice'/g, "target: 'sneak_attack'"],
  [/\btarget: 'sneak_attack_bonus'/g, "target: 'sneak_attack'"],
  [/\btarget: 'hp_restored_per_healing_die'/g, "target: 'healing.hp_per_die'"],
  // target: 'special' — effect type should already be 'special'; use compound key
  [/\btarget: 'special'(?!')/g, "target: 'special.ability'"],
  // AC targets
  [/\btarget: 'natural_armor'/g, "target: 'ac.natural'"],
  [/\btarget: 'AC'/g, "target: 'ac'"],
  // Buffs file: 'save.fort' already handled above

  // ── EffectType renames — round 2 ──────────────────────────────────────
  [/\btype: 'spell_like_ability'/g, "type: 'special'"],
  [/\btype: 'cmd_bonus'/g, "type: 'bonus'"],
  [/\btype: 'caster_level_check'(?=,\n\s+(?:bonus|target):)/g, "type: 'special'"],

  // ── EffectTarget renames — round 2 (specific patterns) ───────────────
  // Bare ability score names
  [/\btarget: 'strength'/g, "target: 'ability.str'"],
  [/\btarget: 'constitution'/g, "target: 'ability.con'"],
  // caster_level as target (not type)
  [/\btarget: 'caster_level'/g, "target: 'spell.caster_level'"],
  // Combat targets
  [/\btarget: 'attack_thrown_improvised'/g, "target: 'attack.thrown'"],
  [/\btarget: 'sunder'/g, "target: 'cmb.sunder'"],
  [/\btarget: 'elemental_resistance'/g, "target: 'energy_resistance'"],
  [/\btarget: 'combat_maneuver_bonus'/g, "target: 'cmb'"],
  // Skills — bare knowledge names
  [/\btarget: 'knowledge_arcana'/g, "target: 'skill.knowledge_arcana'"],
  [/\btarget: 'knowledge_local'/g, "target: 'skill.knowledge_local'"],
  [/\btarget: 'knowledge_planes'/g, "target: 'skill.knowledge_planes'"],
  [/\btarget: 'knowledge_skills'/g, "target: 'skill.all'"],
  [/\btarget: 'knowledge'/g, "target: 'skill.all'"],
  [/\btarget: 'disguise'/g, "target: 'skill.disguise'"],

  // ── Catch-all: bare single-word targets → special.X ──────────────────
  // Any remaining target: 'word_chars_only' that isn't a known valid bare target
  // gets prefixed with 'special.' to satisfy the ${string}.${string} catch-all.
  [
    /\btarget: '([a-zA-Z][a-zA-Z0-9_]*)'/g,
    (_m: string, t: string) => {
      if (VALID_BARE_TARGETS.has(t)) return `target: '${t}'`;
      return `target: 'special.${t}'`;
    },
  ],
];

// ---------------------------------------------------------------------------
// Apply rules
// ---------------------------------------------------------------------------

let totalChanges = 0;

for (const filePath of files) {
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;

  for (const [pattern, replacement] of rules) {
    if (typeof replacement === 'string') {
      content = content.replace(pattern, replacement);
    } else {
      // replacement is a function
      content = content.replace(
        pattern,
        replacement as (match: string, ...args: string[]) => string,
      );
    }
  }

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    const relPath = path.relative(root, filePath);
    console.log(`  updated: ${relPath}`);
    totalChanges++;
  }
}

console.log(`\nDone. ${totalChanges} files updated.`);
