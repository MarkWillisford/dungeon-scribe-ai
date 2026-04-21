// Initiating prestige classes — Path of War and Path of War: Expanded
// All are 10-level prestige classes. All advance IL at full progression.
//
// Sources:
//   dsp-pow   — Path of War (Dreamscarred Press)
//   dsp-powe  — Path of War: Expanded (Dreamscarred Press)
//
// TODO: Prerequisites, exact class features, and discipline lists need verification
// against physical source books before final release.

import { BABProgression, SaveProgression } from '@/types/base';
import { ExpandedClassData } from './types';

export const INITIATING_PRESTIGE_CLASSES: ExpandedClassData[] = [
  // ──────────────────────────────────────────────────────────────────────────
  // 1. ANIMUS ADEPT (Path of War: Expanded)
  // Extends Mystic animus mechanics; specializes in glyph-based combat
  // ──────────────────────────────────────────────────────────────────────────
  {
    name: 'Animus Adept',
    category: 'Prestige',
    maxLevel: 10,
    hitDie: 8,
    skillRanksPerLevel: 4,
    classSkills: [
      'Acrobatics',
      'Craft',
      'Knowledge (arcana)',
      'Knowledge (planes)',
      'Perception',
      'Sense Motive',
      'Spellcraft',
      'Stealth',
      'Use Magic Device',
    ],
    babProgression: BABProgression.Medium,
    saves: {
      fortitude: SaveProgression.Poor,
      reflex: SaveProgression.Good,
      will: SaveProgression.Good,
    },
    weaponProficiencies: [],
    armorProficiencies: [],
    prerequisites: {
      bab: 5,
      skills: [{ name: 'Knowledge (arcana)', ranks: 5 }],
      special: ['Animus pool class feature', 'Ability to initiate 3rd-level maneuvers'],
    },
    classFeatures: [
      {
        name: 'Initiator Level Advancement',
        level: 1,
        description:
          'Each level of Animus Adept advances the character\'s initiator level as if she had gained a level in the initiating class that granted her animus pool.',
      },
      {
        name: 'Expanded Animus',
        level: 1,
        description:
          'The animus adept\'s maximum animus pool increases by 2. At 5th and 10th level, it increases by an additional 2.',
      },
      {
        name: 'Animus Glyph',
        level: 2,
        description:
          'The adept can spend animus to place persistent glyphs on surfaces or creatures. A glyph persists for 1 minute per initiator level. When a glyph triggers, it deals damage equal to 1d6 per 2 adept levels of her elemental attunement type.',
      },
      {
        name: 'Glyph Mastery',
        level: 5,
        description:
          'The adept can place up to three glyphs simultaneously. She may spend animus to detonate all placed glyphs simultaneously as a swift action.',
      },
      {
        name: 'Perfect Animus',
        level: 10,
        description:
          'The adept\'s mastery of animus is complete. Her animus pool no longer resets between encounters and she regains animus points equal to her Wisdom modifier each round automatically.',
      },
    ],
    spellcasting: { type: 'None', casting: 'None' },
    initiating: {
      type: 'Martial',
      initiatingAbility: 'WIS',
      ilProgression: 'full',
      disciplines: [],
      progressionTableKey: 'prestige-full',
      recoveryMechanics: {
        primary: { type: 'animus_fueled', resourceId: 'mystic_animus' },
      },
    },
    source: 'dsp-powe',
  },

  // ──────────────────────────────────────────────────────────────────────────
  // 2. AWAKENED BLADE (Path of War)
  // Hybrid psionic/initiating prestige class
  // ──────────────────────────────────────────────────────────────────────────
  {
    name: 'Awakened Blade',
    category: 'Prestige',
    maxLevel: 10,
    hitDie: 8,
    skillRanksPerLevel: 4,
    classSkills: [
      'Acrobatics',
      'Autohypnosis',
      'Climb',
      'Craft',
      'Knowledge (psionics)',
      'Perception',
      'Profession',
      'Sense Motive',
      'Stealth',
    ],
    babProgression: BABProgression.Full,
    saves: {
      fortitude: SaveProgression.Good,
      reflex: SaveProgression.Poor,
      will: SaveProgression.Good,
    },
    weaponProficiencies: [],
    armorProficiencies: [],
    prerequisites: {
      bab: 5,
      skills: [{ name: 'Autohypnosis', ranks: 5 }],
      special: ['Ability to manifest 3rd-level psionic powers', 'Ability to initiate 3rd-level maneuvers'],
    },
    classFeatures: [
      {
        name: 'Initiator Level Advancement',
        level: 1,
        description: 'Each level of Awakened Blade advances the character\'s initiator level as if she had gained a level in her primary initiating class.',
      },
      {
        name: 'Psionic Surge',
        level: 1,
        description:
          'The awakened blade can expend her psionic focus to add 2d6 damage to a single attack. This damage increases by 1d6 for every two awakened blade levels.',
      },
      {
        name: 'Blade of the Mind',
        level: 3,
        description:
          'The awakened blade\'s weapon attacks are treated as having the Psychokinetic enhancement for the purpose of overcoming damage reduction when she is psionically focused.',
      },
      {
        name: 'Mental Resilience',
        level: 5,
        description:
          'The awakened blade adds her primary psionic manifesting ability modifier to Will saving throws in addition to her Wisdom modifier (if different).',
      },
      {
        name: 'Mind and Blade United',
        level: 10,
        description:
          'The awakened blade perfectly fuses her psionic and martial abilities. She may expend psionic focus as part of initiating a maneuver to add her manifester level to the damage dealt.',
      },
    ],
    spellcasting: { type: 'None', casting: 'None' },
    initiating: {
      type: 'Martial',
      initiatingAbility: 'WIS',
      ilProgression: 'full',
      disciplines: [],
      progressionTableKey: 'prestige-full',
      recoveryMechanics: {
        primary: { type: 'full_round_one' },
      },
    },
    source: 'dsp-pow',
  },

  // ──────────────────────────────────────────────────────────────────────────
  // 3. BATTLE TEMPLAR (Path of War: Expanded)
  // Divine spellcaster / initiator hybrid; adds Golden Lion and Iron Tortoise
  // ──────────────────────────────────────────────────────────────────────────
  {
    name: 'Battle Templar',
    category: 'Prestige',
    maxLevel: 10,
    hitDie: 10,
    skillRanksPerLevel: 2,
    classSkills: [
      'Craft',
      'Diplomacy',
      'Handle Animal',
      'Intimidate',
      'Knowledge (religion)',
      'Perception',
      'Profession',
      'Ride',
      'Sense Motive',
      'Spellcraft',
    ],
    babProgression: BABProgression.Full,
    saves: {
      fortitude: SaveProgression.Good,
      reflex: SaveProgression.Poor,
      will: SaveProgression.Good,
    },
    weaponProficiencies: [],
    armorProficiencies: [],
    prerequisites: {
      bab: 5,
      spellcasting: 'Ability to cast 2nd-level divine spells',
      special: ['Ability to initiate 3rd-level maneuvers'],
    },
    classFeatures: [
      {
        name: 'Initiator Level Advancement',
        level: 1,
        description: 'Each level of Battle Templar advances the character\'s initiator level as if she had gained a level in her primary initiating class.',
      },
      {
        name: 'Spellcasting Advancement',
        level: 1,
        description:
          'At each even-numbered Battle Templar level (2nd, 4th, 6th, 8th, 10th), the character gains new spells per day as if she had also gained a level in the divine spellcasting class she belonged to before taking this prestige class.',
      },
      {
        name: 'Divine Aegis',
        level: 1,
        description:
          'The battle templar can channel divine energy through her martial maneuvers. When she initiates a Golden Lion or Iron Tortoise maneuver, she may spend one use of Channel Energy (if she has it) to add its effect to the maneuver.',
      },
      {
        name: 'Sacred Combat',
        level: 4,
        description:
          'The battle templar\'s weapon attacks are treated as the alignment of her deity (lawful, chaotic, good, or evil) for the purpose of overcoming damage reduction.',
      },
      {
        name: 'Aura of Conviction',
        level: 7,
        description:
          'Allies within 30 feet of the battle templar gain a +2 morale bonus on saving throws against fear and a +2 morale bonus on attack rolls against creatures the templar is engaged with.',
      },
      {
        name: 'Divine Warrior',
        level: 10,
        description:
          'The battle templar achieves perfect union between divine devotion and martial excellence. She gains a bonus equal to her Wisdom modifier on all attack rolls and damage rolls, and all her maneuvers gain the divine descriptor.',
      },
    ],
    spellcasting: { type: 'Divine', casting: 'Prepared' },
    initiating: {
      type: 'Martial',
      initiatingAbility: 'WIS',
      ilProgression: 'full',
      disciplines: ['golden-lion', 'iron-tortoise'],
      progressionTableKey: 'prestige-full',
      recoveryMechanics: {
        primary: { type: 'full_round_all' },
      },
    },
    source: 'dsp-powe',
  },

  // ──────────────────────────────────────────────────────────────────────────
  // 4. BLADECASTER (Path of War)
  // Arcane spellcaster / initiator hybrid
  // ──────────────────────────────────────────────────────────────────────────
  {
    name: 'Bladecaster',
    category: 'Prestige',
    maxLevel: 10,
    hitDie: 8,
    skillRanksPerLevel: 2,
    classSkills: [
      'Craft',
      'Fly',
      'Intimidate',
      'Knowledge (arcana)',
      'Perception',
      'Profession',
      'Sense Motive',
      'Spellcraft',
      'Use Magic Device',
    ],
    babProgression: BABProgression.Medium,
    saves: {
      fortitude: SaveProgression.Poor,
      reflex: SaveProgression.Poor,
      will: SaveProgression.Good,
    },
    weaponProficiencies: [],
    armorProficiencies: [],
    prerequisites: {
      bab: 3,
      spellcasting: 'Ability to cast 2nd-level arcane spells',
      special: ['Ability to initiate 2nd-level maneuvers'],
    },
    classFeatures: [
      {
        name: 'Initiator Level Advancement',
        level: 1,
        description: 'Each level of Bladecaster advances the character\'s initiator level as if she had gained a level in her primary initiating class.',
      },
      {
        name: 'Spellcasting Advancement',
        level: 1,
        description:
          'At each odd-numbered Bladecaster level (1st, 3rd, 5th, 7th, 9th), the character gains new spells per day and spells known as if she had also gained a level in the arcane spellcasting class she belonged to before taking this prestige class.',
      },
      {
        name: 'Spell-Powered Strike',
        level: 2,
        description:
          'When the bladecaster initiates a strike, she may simultaneously cast a spell with a casting time of 1 standard action or less. Both effects resolve simultaneously. The spell still expends its spell slot and any material components.',
      },
      {
        name: 'Arcane Defense',
        level: 4,
        description:
          'The bladecaster\'s arcane mastery protects her. She gains a bonus to AC equal to her Intelligence modifier (minimum +0) as a deflection bonus when she is not wearing heavy armor.',
      },
      {
        name: 'Imbued Maneuver',
        level: 6,
        description:
          'The bladecaster can prepare maneuvers that carry stored spells. When she initiates an imbued maneuver, the stored spell is also released as a free action.',
      },
      {
        name: 'Perfect Fusion',
        level: 10,
        description:
          'The bladecaster achieves perfect balance between sword and spell. Once per round, she may initiate a maneuver as a swift action when casting a spell of 3rd level or higher.',
      },
    ],
    spellcasting: { type: 'Arcane', casting: 'Prepared' },
    initiating: {
      type: 'Martial',
      initiatingAbility: 'INT',
      ilProgression: 'full',
      disciplines: [],
      progressionTableKey: 'prestige-full',
      recoveryMechanics: {
        primary: { type: 'full_round_one' },
      },
    },
    source: 'dsp-pow',
  },

  // ──────────────────────────────────────────────────────────────────────────
  // 5. DRAGON FURY (Path of War)
  // TWF specialist; adds Mithral Current and Primal Fury
  // ──────────────────────────────────────────────────────────────────────────
  {
    name: 'Dragon Fury',
    category: 'Prestige',
    maxLevel: 10,
    hitDie: 10,
    skillRanksPerLevel: 4,
    classSkills: [
      'Acrobatics',
      'Climb',
      'Craft',
      'Intimidate',
      'Perception',
      'Profession',
      'Sense Motive',
      'Swim',
    ],
    babProgression: BABProgression.Full,
    saves: {
      fortitude: SaveProgression.Good,
      reflex: SaveProgression.Good,
      will: SaveProgression.Poor,
    },
    weaponProficiencies: [],
    armorProficiencies: [],
    prerequisites: {
      bab: 7,
      feats: ['Two-Weapon Fighting', 'Double Slice'],
      special: ['Ability to initiate 4th-level maneuvers', 'Access to Thrashing Dragon discipline'],
    },
    classFeatures: [
      {
        name: 'Initiator Level Advancement',
        level: 1,
        description: 'Each level of Dragon Fury advances the character\'s initiator level as if she had gained a level in her primary initiating class.',
      },
      {
        name: 'Dual Discipline Access',
        level: 1,
        description:
          'The dragon fury gains access to Mithral Current and Primal Fury disciplines in addition to those from her initiating base class. She adds these disciplines to her list of accessible disciplines.',
      },
      {
        name: 'Flowing Motion',
        level: 2,
        description:
          'When the dragon fury makes a full-attack with two weapons, she may add her off-hand weapon\'s enhancement bonus to all damage rolls in that full attack, not just off-hand attack rolls.',
      },
      {
        name: 'Dual Strike',
        level: 4,
        description:
          'The dragon fury can make both weapon attacks when initiating a strike that would normally require only a single attack. Both attacks use the strike\'s attack modifier and deal the strike\'s bonus damage.',
      },
      {
        name: 'Whirling Frenzy',
        level: 7,
        description:
          'When the dragon fury initiates a boost from Thrashing Dragon or Mithral Current, she gains an additional attack with her off-hand weapon at her highest base attack bonus.',
      },
      {
        name: 'Perfect Two-Weapon Mastery',
        level: 10,
        description:
          'The dragon fury eliminates all penalties for fighting with two weapons. When initiating any maneuver, she may make an additional off-hand attack at her highest base attack bonus as a free action.',
      },
    ],
    spellcasting: { type: 'None', casting: 'None' },
    initiating: {
      type: 'Martial',
      initiatingAbility: 'WIS',
      ilProgression: 'full',
      disciplines: ['mithral-current', 'primal-fury'],
      progressionTableKey: 'prestige-full',
      recoveryMechanics: {
        primary: { type: 'strike_recovers_all' },
      },
    },
    source: 'dsp-pow',
  },

  // ──────────────────────────────────────────────────────────────────────────
  // 6. LANDSKNECHT (Path of War: Expanded)
  // One-handed weapon specialist; adds Mithral Current and Scarlet Throne
  // ──────────────────────────────────────────────────────────────────────────
  {
    name: 'Landsknecht',
    category: 'Prestige',
    maxLevel: 10,
    hitDie: 10,
    skillRanksPerLevel: 4,
    classSkills: [
      'Acrobatics',
      'Bluff',
      'Craft',
      'Diplomacy',
      'Intimidate',
      'Perception',
      'Profession',
      'Ride',
      'Sense Motive',
    ],
    babProgression: BABProgression.Full,
    saves: {
      fortitude: SaveProgression.Good,
      reflex: SaveProgression.Good,
      will: SaveProgression.Poor,
    },
    weaponProficiencies: [],
    armorProficiencies: [],
    prerequisites: {
      bab: 5,
      feats: ['Quick Draw', 'Weapon Focus'],
      special: ['Ability to initiate 3rd-level maneuvers'],
    },
    classFeatures: [
      {
        name: 'Initiator Level Advancement',
        level: 1,
        description: 'Each level of Landsknecht advances the character\'s initiator level as if she had gained a level in her primary initiating class.',
      },
      {
        name: 'Dual Discipline Access',
        level: 1,
        description:
          'The landsknecht gains access to Mithral Current and Scarlet Throne disciplines in addition to those from her initiating base class.',
      },
      {
        name: 'Fluid Blade',
        level: 1,
        description:
          'The landsknecht\'s expertise with one-handed weapons is legendary. She treats all one-handed melee weapons as if they had the Agile property, adding her Dexterity modifier instead of her Strength modifier on damage rolls.',
      },
      {
        name: 'Blade Whip',
        level: 3,
        description:
          'The landsknecht can use a one-handed weapon as if it had reach 5 feet for the purpose of threatening squares and making attacks of opportunity.',
      },
      {
        name: 'Counter Riposte',
        level: 5,
        description:
          'When the landsknecht successfully uses a counter maneuver to negate an attack, she may immediately make a free attack against the attacker at her highest base attack bonus.',
      },
      {
        name: 'Blade Mastery',
        level: 10,
        description:
          'The landsknecht achieves complete mastery with one-handed blades. Her critical threat range is doubled with all one-handed weapons (stacks with Improved Critical), and she gains a +4 bonus on attack rolls to confirm critical hits.',
      },
    ],
    spellcasting: { type: 'None', casting: 'None' },
    initiating: {
      type: 'Martial',
      initiatingAbility: 'INT',
      ilProgression: 'full',
      disciplines: ['mithral-current', 'scarlet-throne'],
      progressionTableKey: 'prestige-full',
      recoveryMechanics: {
        primary: { type: 'full_round_one' },
      },
    },
    source: 'dsp-powe',
  },

  // ──────────────────────────────────────────────────────────────────────────
  // 7. MAGE HUNTER (Path of War: Expanded)
  // Anti-caster specialist
  // ──────────────────────────────────────────────────────────────────────────
  {
    name: 'Mage Hunter',
    category: 'Prestige',
    maxLevel: 10,
    hitDie: 8,
    skillRanksPerLevel: 4,
    classSkills: [
      'Acrobatics',
      'Climb',
      'Craft',
      'Intimidate',
      'Knowledge (arcana)',
      'Perception',
      'Profession',
      'Sense Motive',
      'Spellcraft',
      'Stealth',
    ],
    babProgression: BABProgression.Full,
    saves: {
      fortitude: SaveProgression.Good,
      reflex: SaveProgression.Good,
      will: SaveProgression.Good,
    },
    weaponProficiencies: [],
    armorProficiencies: [],
    prerequisites: {
      bab: 5,
      skills: [{ name: 'Spellcraft', ranks: 5 }],
      special: ['Ability to initiate 3rd-level maneuvers'],
    },
    classFeatures: [
      {
        name: 'Initiator Level Advancement',
        level: 1,
        description: 'Each level of Mage Hunter advances the character\'s initiator level as if she had gained a level in her primary initiating class.',
      },
      {
        name: 'Spell Disruption',
        level: 1,
        description:
          'When the mage hunter deals damage to a spellcaster who is concentrating to maintain a spell or attempting to cast defensively, the concentration DC increases by 5 per mage hunter level.',
      },
      {
        name: 'Arcane Resistance',
        level: 2,
        description:
          'The mage hunter gains a bonus equal to her Wisdom modifier on saving throws against spells and spell-like abilities.',
      },
      {
        name: 'Spellbreaker',
        level: 4,
        description:
          'The mage hunter gains Spellbreaker as a bonus feat. Additionally, she threatens any spellcaster within her reach who begins casting a spell.',
      },
      {
        name: 'Counter Magic',
        level: 6,
        description:
          'Once per day per 3 mage hunter levels, when an enemy within 30 feet successfully casts a spell, the mage hunter may spend an immediate action to attempt a Spellcraft check (DC = 15 + spell level). On a success, the spell is countered.',
      },
      {
        name: 'Spell Bane',
        level: 8,
        description:
          'The mage hunter\'s attacks are particularly devastating to spellcasters. She deals additional damage equal to her initiator level against creatures with spellcasting or spell-like abilities.',
      },
      {
        name: 'Master Mage Hunter',
        level: 10,
        description:
          'The mage hunter\'s antimagic expertise reaches its apex. She gains spell resistance equal to 11 + her initiator level, and once per day she can completely suppress an enemy spellcaster\'s ability to cast spells for 1 round (no save, 30-foot range).',
      },
    ],
    spellcasting: { type: 'None', casting: 'None' },
    initiating: {
      type: 'Martial',
      initiatingAbility: 'WIS',
      ilProgression: 'full',
      disciplines: [],
      progressionTableKey: 'prestige-full',
      recoveryMechanics: {
        primary: { type: 'full_round_one' },
      },
    },
    source: 'dsp-powe',
  },

  // ──────────────────────────────────────────────────────────────────────────
  // 8. PHOENIX CHAMPION (Path of War)
  // Ranged combat specialist; adds Solar Wind and Tempest Gale
  // ──────────────────────────────────────────────────────────────────────────
  {
    name: 'Phoenix Champion',
    category: 'Prestige',
    maxLevel: 10,
    hitDie: 8,
    skillRanksPerLevel: 4,
    classSkills: [
      'Acrobatics',
      'Craft',
      'Knowledge (local)',
      'Perception',
      'Profession',
      'Ride',
      'Sense Motive',
      'Stealth',
      'Survival',
    ],
    babProgression: BABProgression.Full,
    saves: {
      fortitude: SaveProgression.Good,
      reflex: SaveProgression.Good,
      will: SaveProgression.Poor,
    },
    weaponProficiencies: [],
    armorProficiencies: [],
    prerequisites: {
      bab: 5,
      feats: ['Point-Blank Shot', 'Precise Shot'],
      special: ['Ability to initiate 3rd-level maneuvers'],
    },
    classFeatures: [
      {
        name: 'Initiator Level Advancement',
        level: 1,
        description: 'Each level of Phoenix Champion advances the character\'s initiator level as if she had gained a level in her primary initiating class.',
      },
      {
        name: 'Dual Discipline Access',
        level: 1,
        description:
          'The phoenix champion gains access to Solar Wind and Tempest Gale disciplines in addition to those from her initiating base class.',
      },
      {
        name: 'Aerial Grace',
        level: 1,
        description:
          'The phoenix champion ignores the –4 penalty for firing a ranged weapon while prone. She also ignores cover bonuses granted by terrain when attacking targets at close range (within 30 feet).',
      },
      {
        name: 'Phoenix Strike',
        level: 3,
        description:
          'The phoenix champion can channel fire energy through her ranged attacks. As a swift action, her ranged attacks deal an additional 1d6 fire damage per two phoenix champion levels for 1 round.',
      },
      {
        name: 'Rebirth',
        level: 5,
        description:
          'Once per day, when the phoenix champion would be reduced to 0 or fewer hit points, she may immediately expend all readied maneuvers to heal 1d8 hit points per initiator level and stand as a free action.',
      },
      {
        name: 'Eternal Flame',
        level: 10,
        description:
          'The phoenix champion becomes one with solar fire. She gains fire immunity and her ranged attacks ignore fire resistance and deal half damage to creatures with fire immunity. Her Rebirth ability now functions twice per day.',
      },
    ],
    spellcasting: { type: 'None', casting: 'None' },
    initiating: {
      type: 'Martial',
      initiatingAbility: 'WIS',
      ilProgression: 'full',
      disciplines: ['solar-wind', 'tempest-gale'],
      progressionTableKey: 'prestige-full',
      recoveryMechanics: {
        primary: { type: 'full_round_one' },
      },
    },
    source: 'dsp-pow',
  },

  // ──────────────────────────────────────────────────────────────────────────
  // 9. UMBRAL BLADE (Path of War: Expanded)
  // Shadow/teleportation specialist; deep Veiled Moon focus
  // ──────────────────────────────────────────────────────────────────────────
  {
    name: 'Umbral Blade',
    category: 'Prestige',
    maxLevel: 10,
    hitDie: 8,
    skillRanksPerLevel: 4,
    classSkills: [
      'Acrobatics',
      'Bluff',
      'Craft',
      'Intimidate',
      'Knowledge (planes)',
      'Perception',
      'Profession',
      'Sense Motive',
      'Stealth',
    ],
    babProgression: BABProgression.Full,
    saves: {
      fortitude: SaveProgression.Poor,
      reflex: SaveProgression.Good,
      will: SaveProgression.Good,
    },
    weaponProficiencies: [],
    armorProficiencies: [],
    prerequisites: {
      bab: 7,
      skills: [{ name: 'Stealth', ranks: 7 }],
      special: ['Ability to initiate 4th-level maneuvers', 'Access to Veiled Moon discipline'],
    },
    classFeatures: [
      {
        name: 'Initiator Level Advancement',
        level: 1,
        description: 'Each level of Umbral Blade advances the character\'s initiator level as if she had gained a level in her primary initiating class.',
      },
      {
        name: 'Umbral Step',
        level: 1,
        description:
          'As a swift action, the umbral blade can teleport up to 10 feet per class level to an unoccupied space she can see. This does not provoke attacks of opportunity. She can use this ability a number of times per day equal to 3 + her initiator level modifier.',
      },
      {
        name: 'Shadow Strike',
        level: 2,
        description:
          'When the umbral blade attacks from concealment or after teleporting using Umbral Step this turn, she deals an additional 2d6 precision damage. This increases by 2d6 at 5th and 8th level.',
      },
      {
        name: 'Dimension Door',
        level: 4,
        description:
          'The umbral blade can use dimension door as a spell-like ability once per day per four umbral blade levels. Her caster level equals her initiator level.',
      },
      {
        name: 'Planar Attunement',
        level: 6,
        description:
          'The umbral blade gains the ability to exist partially on the Ethereal Plane. She gains concealment (20% miss chance) at all times while she has a readied maneuver.',
      },
      {
        name: 'Shadow Twin',
        level: 8,
        description:
          'Once per day, the umbral blade can create a shadow duplicate that occupies an adjacent square. The duplicate acts on her initiative, has her statistics, and shares her readied maneuvers, but any maneuver used by the duplicate is also expended for the original.',
      },
      {
        name: 'Umbral Mastery',
        level: 10,
        description:
          'The umbral blade achieves mastery over shadow and space. Her Umbral Step has no daily limit, she is permanently under a blur effect, and she can use shadow walk once per day as a spell-like ability (CL = initiator level).',
      },
    ],
    spellcasting: { type: 'None', casting: 'None' },
    initiating: {
      type: 'Martial',
      initiatingAbility: 'WIS',
      ilProgression: 'full',
      disciplines: ['veiled-moon'],
      progressionTableKey: 'prestige-full',
      recoveryMechanics: {
        primary: { type: 'full_round_one' },
      },
    },
    source: 'dsp-powe',
  },
];
