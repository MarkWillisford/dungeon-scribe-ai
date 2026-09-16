// Homebrew Classes — custom classes for Mark's campaign
// SEEDING ONLY — do not use in runtime app code.

import { BABProgression, SaveProgression, BonusType } from '@/types/base';
import { ExpandedClassData } from './types';

export const HOMEBREW_CLASSES: ExpandedClassData[] = [
  {
    name: 'Mord Sith',
    category: 'Base',
    maxLevel: 20,
    hitDie: 10,
    skillRanksPerLevel: 6,
    classSkills: [
      'Acrobatics',
      'Climb',
      'Craft',
      'Diplomacy',
      'Escape Artist',
      'Intimidate',
      'Knowledge (arcana)',
      'Knowledge (history)',
      'Knowledge (religion)',
      'Perception',
      'Sense Motive',
      'Spellcraft',
      'Stealth',
      'Swim',
    ],
    babProgression: BABProgression.Full,
    saves: {
      fortitude: SaveProgression.Good,
      reflex: SaveProgression.Poor,
      will: SaveProgression.Good,
    },
    weaponProficiencies: ['Simple weapons', 'Agiel', 'Whip'],
    armorProficiencies: ['Leather armor', 'Studded leather armor'],
    startingWealth: '1d6 × 10 gp',
    alignment: 'Any Lawful',
    spellcasting: {
      type: 'Arcane',
      casting: 'Spontaneous',
      spellList: 'Any (Stolen)',
      spellTableKey: 'MORD_SITH_SPELL_SLOTS',
      spellsKnownTableKey: 'MORD_SITH_SPELLS_KNOWN',
    },
    source: 'Homebrew',
    classFeatures: [
      // ── Level 1 ──────────────────────────────────────────────────────────────
      {
        name: 'Bonus Feat (Crane Style)',
        level: 1,
        description:
          'Gains Crane Style as a bonus feat. When fighting defensively or using Combat Expertise, the penalty to attack rolls is reduced by 2 (minimum -1 when fighting defensively).',
        effects: [
          {
            type: 'special',
            target: 'special.crane_style_stance',
            value: 1,
            source: 'Crane Style',
          },
          {
            type: 'bonus',
            bonusType: BonusType.UNTYPED,
            target: 'special.fighting_defensively_penalty_reduction',
            value: 2,
            source: 'Crane Style',
          },
        ],
      },
      {
        id: 'redirection',
        activationMode: 'toggle',
        name: 'Redirection',
        level: 1,
        shortDescription: 'Immediate: reposition or trip attacker (usable 1/round)',
        description:
          'As an immediate action, attempt a reposition or trip combat maneuver against a creature that threatens the Mord-Sith and attacks her. Usable once per round; usable a number of times per day equal to her Mord-Sith level.',
        effects: [
          {
            type: 'special',
            target: 'special.redirection',
            value: 0,
            source: 'Redirection',
            activation: {
              type: 'immediate',
              usesPerDay: -1,
              usesRemaining: -1,
              active: false,
            },
          },
        ],
      },
      {
        name: 'Mord Sith Finesse',
        level: 1,
        description:
          'Gains Improved Unarmed Strike as a bonus feat. Unarmed damage follows the Agiel progression minus one die size (minimum 1d3). May use Charisma in place of Intelligence as a prerequisite for qualifying combat feats.',
        effects: [
          {
            type: 'special',
            target: 'special.improved_unarmed_strike',
            value: 1,
            source: 'Mord Sith Finesse',
          },
          {
            type: 'ability_substitution',
            target: 'special.combat_feat_prerequisites',
            value: 'CHA',
            source: 'Mord Sith Finesse',
          },
        ],
      },
      {
        name: 'Agiel Pain',
        level: 1,
        description:
          'Each successful Agiel attack forces the target to make a Fortitude save (DC 10 + 1/2 Mord-Sith level + Cha modifier) or be sickened for 1d4 rounds. The Agiel counts as a monk weapon.',
        effects: [
          {
            type: 'special',
            target: 'special.agiel_pain',
            value: 0,
            source: 'Agiel Pain',
          },
          {
            type: 'special',
            target: 'special.agiel_monk_weapon',
            value: 1,
            source: 'Agiel Pain',
          },
        ],
      },
      {
        name: 'Spelldrinker',
        level: 1,
        description:
          'Does not learn spells by leveling; spell slots do not refresh normally. When a spell targeting the Mord-Sith fails to overcome her SR, she gains that spell added to her Spells Known and a spell slot of that spell level. Casts stolen spells as arcane using Charisma as her casting stat. 0th-level spells are cast without expending slots.',
        effects: [
          {
            type: 'special',
            target: 'special.spelldrinker',
            value: 1,
            source: 'Spelldrinker',
          },
          {
            type: 'ability_substitution',
            target: 'spell.save_dc',
            value: 'CHA',
            source: 'Spelldrinker',
          },
        ],
      },
      {
        name: 'Spell Resistance',
        level: 1,
        description: 'The Mord-Sith gains spell resistance equal to 11 plus her Mord-Sith level.',
        effects: [
          {
            type: 'resistance',
            target: 'sr',
            value: '11 + mordSithLevel',
            source: 'Spell Resistance',
          },
        ],
      },
      {
        name: 'Fuse Style (2 stances)',
        level: 1,
        description: 'Can have two style feat stances active simultaneously.',
        effects: [
          {
            type: 'special',
            target: 'special.fuse_style_stances',
            value: 2,
            source: 'Fuse Style',
          },
        ],
      },
      // ── Level 2 ──────────────────────────────────────────────────────────────
      {
        id: 'agiel_strike',
        activationMode: 'toggle',
        name: 'Agiel Strike',
        level: 2,
        shortDescription: 'Touch attack: nonlethal Agiel dmg + shaken 1 min (Fort neg)',
        description:
          'Standard action melee touch attack that deals Agiel damage as nonlethal and sickens the target for 1 minute. The target must succeed on a Fortitude save (DC 10 + 1/2 level + Cha modifier) or also be shaken for 1 minute. Usable 3 + Charisma modifier times per day. Grants a bonus to Intimidate checks against affected creatures equal to 1/2 her Mord-Sith level.',
        effects: [
          {
            type: 'special',
            target: 'special.agiel_strike',
            value: 0,
            source: 'Agiel Strike',
            activation: {
              type: 'standard',
              usesPerDay: -1,
              usesRemaining: -1,
              active: false,
            },
          },
        ],
      },
      {
        name: 'Flowing Dodge',
        level: 2,
        description:
          'Gains a +1 dodge bonus to AC for each adjacent enemy, up to a maximum equal to her Charisma modifier (minimum 1).',
        effects: [
          {
            type: 'bonus',
            bonusType: BonusType.DODGE,
            target: 'ac.dodge',
            value: 'min(adjacentEnemyCount, max(chaMod, 1))',
            source: 'Flowing Dodge',
            condition: {
              type: 'custom',
              params: { requires: 'adjacent_enemies' },
              description: 'Per adjacent enemy, capped at Cha modifier',
            },
          },
        ],
      },
      // ── Level 3 ──────────────────────────────────────────────────────────────
      {
        name: 'Unbalancing Counter',
        level: 3,
        description:
          'Attacks of opportunity made by the Mord-Sith render the struck creature flat-footed until the end of her next turn. A successful Reflex save (DC 10 + 1/2 level + Cha modifier) negates this effect.',
        effects: [
          {
            type: 'special',
            target: 'special.unbalancing_counter',
            value: 0,
            source: 'Unbalancing Counter',
          },
        ],
      },
      {
        name: 'Fast Movement',
        level: 3,
        description: 'Base land speed increases by 10 feet.',
        effects: [
          {
            type: 'bonus',
            bonusType: BonusType.UNTYPED,
            target: 'speed.base',
            value: 10,
            source: 'Fast Movement',
          },
        ],
      },
      // ── Level 4 ──────────────────────────────────────────────────────────────
      {
        name: 'AC Bonus',
        level: 4,
        description:
          'When wearing only Mord-Sith leather and unencumbered, adds her Charisma modifier to AC and CMD. This bonus applies against touch attacks and while flat-footed, but is lost when immobilized, helpless, wearing other armor or a shield, or carrying a medium or heavy load.',
        effects: [
          {
            type: 'bonus',
            bonusType: BonusType.UNTYPED,
            target: 'ac',
            value: 'chaMod',
            source: 'AC Bonus',
            condition: {
              type: 'armor_type',
              params: { armorType: 'mord_sith_leather', encumbrance: 'light' },
              description: 'Wearing only Mord-Sith leather, unencumbered',
            },
          },
          {
            type: 'bonus',
            bonusType: BonusType.UNTYPED,
            target: 'cmd',
            value: 'chaMod',
            source: 'AC Bonus',
            condition: {
              type: 'armor_type',
              params: { armorType: 'mord_sith_leather', encumbrance: 'light' },
              description: 'Wearing only Mord-Sith leather, unencumbered',
            },
          },
        ],
      },
      {
        name: 'Bonus Feat (Crane Wing)',
        level: 4,
        description:
          'Gains Crane Wing as a bonus feat. Once per round while using Crane Style and fighting defensively or using total defense, the Mord-Sith may deflect one melee attack directed at her.',
        effects: [
          {
            type: 'special',
            target: 'special.crane_wing',
            value: 1,
            source: 'Crane Wing',
          },
        ],
      },
      // ── Level 5 ──────────────────────────────────────────────────────────────
      {
        id: 'elusive_target',
        activationMode: 'toggle' as const,
        name: 'Elusive Target',
        level: 5,
        description:
          'As an immediate action, spend 3 spell slot levels: against attacks, make a Reflex save to halve damage; against spells, gain evasion for that effect.',
        shortDescription: 'Immediate: spend 3 spell slot levels for Reflex-halve or evasion',
        effects: [
          {
            type: 'special',
            target: 'special.elusive_target',
            value: 0,
            source: 'Elusive Target',
            activation: { type: 'immediate', active: false },
          },
        ],
      },
      {
        name: 'Style Strike',
        level: 5,
        description:
          'Learns one style strike from the Unchained Monk or Spell-Infused Shuriken list. During a full attack, may designate one attack as a style strike.',
        effects: [
          {
            type: 'special',
            target: 'special.style_strike_count',
            value: 1,
            source: 'Style Strike',
          },
        ],
      },
      // ── Level 6 ──────────────────────────────────────────────────────────────
      {
        name: 'Spellthief',
        level: 6,
        description:
          "While a stolen spell is retained and a slot capable of casting it exists, that spell is removed from the original caster's spell list and their used slot does not refresh normally. Grants a bonus to Intimidate against affected casters equal to double the highest spell level stolen (minimum +1). On a successful save against a spell targeting the Mord-Sith, gains 1 spell slot level.",
        effects: [
          {
            type: 'special',
            target: 'special.spellthief',
            value: 1,
            source: 'Spellthief',
          },
        ],
      },
      {
        name: 'Fast Movement',
        level: 6,
        description: 'Base land speed increases by an additional 10 feet (now +20 feet total).',
        effects: [
          {
            type: 'bonus',
            bonusType: BonusType.UNTYPED,
            target: 'speed.base',
            value: 10,
            source: 'Fast Movement',
          },
        ],
      },
      {
        name: 'Bonus Feat',
        level: 6,
        description:
          'Selects one bonus feat from the Mord-Sith bonus feat list: Stunning Fist, Elemental Fist, Superstition, Disruptive, Eater of Magic, Spellbreaker, Witch Hunter, Deflect Arrows, Medusa\'s Wrath, Snatch Arrows, Spring Attack, any combat style feat, or combat maneuver feats (Improved Bull Rush, Greater Bull Rush, Bull Rush Strike, etc.). She does not need to meet the prerequisites of these feats, except for Elemental Fist and Stunning Fist. For the purposes of rage powers and feats gained with this ability, she counts her Mord-Sith levels as barbarian levels. For Superstition, she is never considered raging; "once per rage" is "once per combat" until 17th level, then "once per round."',
        effects: [
          {
            type: 'special',
            target: 'special.mord_sith_bonus_feat',
            value: 1,
            source: 'Bonus Feat',
          },
        ],
      },
      // ── Level 7 ──────────────────────────────────────────────────────────────
      {
        name: 'Bonus Feat (Crane Riposte)',
        level: 7,
        description:
          'Gains Crane Riposte as a bonus feat. Takes only a -1 penalty to attack rolls when fighting defensively. The penalty from Combat Expertise is reduced by 1. When deflecting an attack via Crane Wing, may make an attack of opportunity against the attacker.',
        effects: [
          {
            type: 'bonus',
            bonusType: BonusType.UNTYPED,
            target: 'special.fighting_defensively_attack_penalty',
            value: 3,
            source: 'Crane Riposte',
          },
          {
            type: 'special',
            target: 'special.crane_riposte',
            value: 1,
            source: 'Crane Riposte',
          },
        ],
      },
      // ── Level 8 ──────────────────────────────────────────────────────────────
      {
        name: 'Fuse Style (3 stances)',
        level: 8,
        description:
          'Can have three style feat stances active simultaneously, gains +1 to attack rolls per active stance, and can enter up to three stances as a swift action.',
        effects: [
          {
            type: 'override',
            target: 'special.fuse_style_stances',
            value: 3,
            source: 'Fuse Style (3 stances)',
          },
          {
            type: 'special',
            target: 'special.fuse_style_attack_bonus_per_stance',
            value: 1,
            source: 'Fuse Style (3 stances)',
          },
        ],
      },
      // ── Level 9 ──────────────────────────────────────────────────────────────
      {
        name: 'Style Strike',
        level: 9,
        description: 'Learns a second style strike.',
        effects: [
          {
            type: 'bonus',
            bonusType: BonusType.UNTYPED,
            target: 'special.style_strike_count',
            value: 1,
            source: 'Style Strike',
          },
        ],
      },
      {
        name: 'Fast Movement',
        level: 9,
        description: 'Base land speed increases by an additional 10 feet (now +30 feet total).',
        effects: [
          {
            type: 'bonus',
            bonusType: BonusType.UNTYPED,
            target: 'speed.base',
            value: 10,
            source: 'Fast Movement',
          },
        ],
      },
      // ── Level 10 ─────────────────────────────────────────────────────────────
      {
        name: 'Black Leather',
        level: 10,
        description:
          "The Mord-Sith's leather upgrades to +1 light fortification leather of invulnerability. DR 5/magic becomes DR 5/—. Maximum Dexterity bonus increases to +10. Grants the ability to fly once per day.",
        effects: [
          {
            type: 'special',
            target: 'special.mord_sith_leather_tier',
            value: 2,
            source: 'Black Leather',
          },
          {
            type: 'resistance',
            target: 'dr',
            value: '5/—',
            source: 'Black Leather',
          },
        ],
      },
      {
        name: 'Bonus Feat',
        level: 10,
        description:
          "Selects a bonus feat from the Mord-Sith bonus feat list (see 6th level). Starting at this level, the Mord-Sith may instead gain a wildcard style slot. Whenever she enters one or more styles, she can spend wildcard style slots to gain feats in those styles' feat paths (such as Earth Child Topple). Each time she changes styles, she can reassign these wildcard slots. She may now have three style feat stances active at once; entering a stance is still a swift action.",
        effects: [
          {
            type: 'special',
            target: 'special.mord_sith_bonus_feat',
            value: 1,
            source: 'Bonus Feat',
          },
        ],
      },
      // ── Level 11 ─────────────────────────────────────────────────────────────
      {
        name: 'Improved Spell Resistance',
        level: 11,
        description: 'Spell resistance increases by +5, for a total of 16 + Mord-Sith level.',
        effects: [
          {
            type: 'bonus',
            bonusType: BonusType.UNTYPED,
            target: 'sr',
            value: 5,
            source: 'Improved Spell Resistance',
          },
        ],
      },
      {
        name: 'Improved Spelldrinker',
        level: 11,
        description:
          "When stealing a spell slot, may make a caster level check (DC = spell level × 3). On success, gains an additional slot one level lower. On a critical hit against a spellcaster, gains spell slot levels equal to half the target's highest spell level.",
        effects: [
          {
            type: 'special',
            target: 'special.improved_spelldrinker',
            value: 1,
            source: 'Improved Spelldrinker',
          },
        ],
      },
      // ── Level 12 ─────────────────────────────────────────────────────────────
      {
        id: 'counterstrike',
        activationMode: 'toggle',
        name: 'Counterstrike',
        level: 12,
        shortDescription: 'Reflect spell back at caster when SR beats it (3+Cha/day)',
        description:
          "When a spell fails to overcome the Mord-Sith's spell resistance, she may reflect it back as per spell turning. Usable 3 + Charisma modifier times per day.",
        effects: [
          {
            type: 'special',
            target: 'special.counterstrike',
            value: 0,
            source: 'Counterstrike',
            activation: {
              type: 'immediate',
              usesPerDay: -1,
              usesRemaining: -1,
              active: false,
            },
          },
        ],
      },
      {
        name: 'Fast Movement',
        level: 12,
        description: 'Base land speed increases by an additional 10 feet (now +40 feet total).',
        effects: [
          {
            type: 'bonus',
            bonusType: BonusType.UNTYPED,
            target: 'speed.base',
            value: 10,
            source: 'Fast Movement',
          },
        ],
      },
      // ── Level 13 ─────────────────────────────────────────────────────────────
      {
        name: 'Style Strike',
        level: 13,
        description: 'Learns a third style strike.',
        effects: [
          {
            type: 'bonus',
            bonusType: BonusType.UNTYPED,
            target: 'special.style_strike_count',
            value: 1,
            source: 'Style Strike',
          },
        ],
      },
      // ── Level 14 ─────────────────────────────────────────────────────────────
      {
        name: 'Bonus Feat',
        level: 14,
        description:
          'Selects a bonus feat from the Mord-Sith bonus feat list, or gains a wildcard style slot (see 10th level).',
        effects: [
          {
            type: 'special',
            target: 'special.mord_sith_bonus_feat',
            value: 1,
            source: 'Bonus Feat',
          },
        ],
      },
      // ── Level 15 ─────────────────────────────────────────────────────────────
      {
        id: 'breath_of_life',
        activationMode: 'toggle',
        name: 'Breath of Life',
        level: 15,
        shortDescription: 'Revive creature within 1 min of death (3/day)',
        description:
          "Can use breath of life 3 times per day, up to 1 minute after a creature's death.",
        effects: [
          {
            type: 'special',
            target: 'special.breath_of_life',
            value: 0,
            source: 'Breath of Life',
            activation: {
              type: 'standard',
              usesPerDay: 3,
              usesRemaining: 3,
              active: false,
            },
          },
        ],
      },
      {
        name: 'Fast Movement',
        level: 15,
        description: 'Base land speed increases by an additional 10 feet (now +50 feet total).',
        effects: [
          {
            type: 'bonus',
            bonusType: BonusType.UNTYPED,
            target: 'speed.base',
            value: 10,
            source: 'Fast Movement',
          },
        ],
      },
      // ── Level 16 ─────────────────────────────────────────────────────────────
      {
        name: 'Greater Spell Resistance',
        level: 16,
        description:
          'Against spells that normally allow SR, the caster makes their caster level check with disadvantage. Against spells that normally ignore SR, the Mord-Sith may apply her SR but the caster makes their check with advantage.',
        effects: [
          {
            type: 'special',
            target: 'special.greater_spell_resistance',
            value: 1,
            source: 'Greater Spell Resistance',
          },
        ],
      },
      // ── Level 17 ─────────────────────────────────────────────────────────────
      {
        name: 'Style Strike',
        level: 17,
        description: 'Learns a fourth style strike.',
        effects: [
          {
            type: 'bonus',
            bonusType: BonusType.UNTYPED,
            target: 'special.style_strike_count',
            value: 1,
            source: 'Style Strike',
          },
        ],
      },
      // ── Level 18 ─────────────────────────────────────────────────────────────
      {
        name: 'Bonus Feat',
        level: 18,
        description:
          'Selects a bonus feat from the Mord-Sith bonus feat list, or gains a wildcard style slot (see 10th level).',
        effects: [
          {
            type: 'special',
            target: 'special.mord_sith_bonus_feat',
            value: 1,
            source: 'Bonus Feat',
          },
        ],
      },
      {
        name: 'Fast Movement',
        level: 18,
        description: 'Base land speed increases by an additional 10 feet (now +60 feet total).',
        effects: [
          {
            type: 'bonus',
            bonusType: BonusType.UNTYPED,
            target: 'speed.base',
            value: 10,
            source: 'Fast Movement',
          },
        ],
      },
      // ── Level 19 ─────────────────────────────────────────────────────────────
      {
        name: 'Enchantment Drinker',
        level: 19,
        description:
          "When struck by a magic weapon, the weapon must succeed on a Will save (DC 20 + Cha modifier) or temporarily lose its enchantments. The Mord-Sith gains spell slot levels equal to the weapon's total enhancement bonus equivalent.",
        effects: [
          {
            type: 'special',
            target: 'special.enchantment_drinker',
            value: 0,
            source: 'Enchantment Drinker',
          },
        ],
      },
      // ── Level 20 ─────────────────────────────────────────────────────────────
      {
        name: 'White Leather',
        level: 20,
        description:
          "The Mord-Sith's leather upgrades to +1 heavy fortification leather of determination and improved invulnerability. DR improves to 8/—. Maximum Dexterity bonus increases to +12. Grants fly at will.",
        effects: [
          {
            type: 'special',
            target: 'special.mord_sith_leather_tier',
            value: 3,
            source: 'White Leather',
          },
          {
            type: 'override',
            target: 'dr',
            value: '8/—',
            source: 'White Leather',
          },
        ],
      },
      {
        name: 'Master Spelldrinker',
        level: 20,
        description:
          'Within 30 feet of the original source of stolen spells, the Mord-Sith casts those spells without expending slots and uses stolen spell-like abilities without expending their uses.',
        effects: [
          {
            type: 'special',
            target: 'special.master_spelldrinker',
            value: 1,
            source: 'Master Spelldrinker',
          },
        ],
      },
      {
        name: 'Perfect Style (4 stances)',
        level: 20,
        description:
          'Can have four style feat stances active simultaneously and can change stances as a free action.',
        effects: [
          {
            type: 'override',
            target: 'special.fuse_style_stances',
            value: 4,
            source: 'Perfect Style',
          },
          {
            type: 'special',
            target: 'special.fuse_style_free_action_switch',
            value: 1,
            source: 'Perfect Style',
          },
        ],
      },
    ],
  },
];
