// Rissi — development fixture for the direct-entry UI
// ECL 24: Cleric 5 / Hathran 5 / Dweomerkeeper 10 / Radiant Servant 2 / Prestige Paladin 2
// Human (CG), Cleric of Milani
//
// This object is loaded into characterEntrySlice via loadCharacter() for dev/testing.
// Nothing in the UI should reference this file directly — all data flows through Redux.

import { Alignment } from '@/types/base';
import { type CharacterDraft } from '@/types/characterDraft';

export const RISSI_FIXTURE: CharacterDraft = {
  // ---- Identity ----
  name: 'Rissi',
  player: 'Mark',
  raceId: 'human',
  raceName: 'Human',
  alignment: Alignment.ChaoticGood,
  deity: 'Milani',
  gender: 'Female',
  age: '24',
  height: '5\'4"',
  weight: '118 lbs',
  hair: 'Red',
  eyes: 'Green',
  skin: 'Fair',
  background:
    'A cleric of Milani who fights for the freedom of the oppressed. Trained in the Hathran tradition of the Rashemi witches, she has devoted her considerable magical gifts to liberating those who suffer under tyranny.',

  // ---- Abilities ----
  // STR 22: base 16, enhancement 4, levelIncrements 2
  // DEX 14: base 14
  // CON 18: base 14, enhancement 4
  // INT 14: base 12, enhancement 2
  // WIS 28: base 18, racial 2, enhancement 4, levelIncrements 4
  // CHA 14: base 14
  abilities: {
    str: { base: 16, racial: 0, inherent: 0, enhancement: 4, other: 0, levelIncrements: 2 },
    dex: { base: 14, racial: 0, inherent: 0, enhancement: 0, other: 0, levelIncrements: 0 },
    con: { base: 14, racial: 0, inherent: 0, enhancement: 4, other: 0, levelIncrements: 0 },
    int: { base: 12, racial: 0, inherent: 0, enhancement: 2, other: 0, levelIncrements: 0 },
    wis: { base: 18, racial: 2, inherent: 0, enhancement: 4, other: 0, levelIncrements: 4 },
    cha: { base: 14, racial: 0, inherent: 0, enhancement: 0, other: 0, levelIncrements: 0 },
  },
  levelIncrementSlots: [
    { atHD: 4, ability: 'wis' },
    { atHD: 8, ability: 'wis' },
    { atHD: 12, ability: 'wis' },
    { atHD: 16, ability: 'wis' },
    { atHD: 20, ability: 'str' },
    { atHD: 24, ability: 'str' },
  ],

  // ---- Classes ----
  classes: [
    {
      id: 'class-cleric',
      className: 'Cleric',
      level: 5,
      sourceSystem: 'pf1e',
      classChoices: [
        { featureName: 'Domain', takenAtLevel: 1, selection: 'healing' },
        { featureName: 'Domain', takenAtLevel: 1, selection: 'liberation' },
      ],
      prereqOverride: false,
    },
    {
      id: 'class-hathran',
      className: 'Hathran',
      level: 5,
      sourceSystem: '3.5e',
      spellcastingAdvancement: { type: 'divine' },
      classChoices: [],
      prereqOverride: false,
    },
    {
      id: 'class-dweomerkeeper',
      className: 'Dweomerkeeper',
      level: 10,
      sourceSystem: '3.5e',
      spellcastingAdvancement: { type: 'divine' },
      classChoices: [],
      prereqOverride: false,
    },
    {
      id: 'class-radiant-servant',
      className: 'Radiant Servant',
      level: 1,
      sourceSystem: 'pf1e',
      spellcastingAdvancement: { type: 'divine' },
      classChoices: [],
      prereqOverride: false,
    },
    {
      id: 'class-prestige-paladin',
      className: 'Prestige Paladin',
      level: 2,
      sourceSystem: '3.5e',
      spellcastingAdvancement: { type: 'divine' },
      classChoices: [],
      prereqOverride: false,
    },
  ],
  templates: [],

  // ---- Combat ----
  combat: {
    maxHPOverride: 240,
    currentHP: 240,
    nonlethalDamage: 0,
    tempHP: 0,
    acMiscBonus: 0,
    saveFortMisc: 2, // misc bonuses beyond auto-computed base+ability
    saveRefMisc: 0,
    saveWillMisc: 2,
    meleeAttackMisc: 0,
    rangedAttackMisc: 0,
    cmbMisc: 0,
    speedLand: 30,
    speedFly: 60,
  },

  // ---- Skills (ranks > 0 only) ----
  skills: {
    concentration: { ranks: 22, misc: 0 },
    diplomacy: { ranks: 5, misc: 2 },
    knowledgeArcana: { ranks: 10, misc: 0 },
    knowledgeReligion: { ranks: 10, misc: 0 },
    spellcraft: { ranks: 10, misc: 0 },
    perception: { ranks: 5, misc: 0 },
    senseMotive: { ranks: 4, misc: 0 },
  },

  // ---- Traits ----
  traits: [
    {
      id: 'trait-fates-favored',
      traitId: 'fates-favored',
      traitName: "Fate's Favored",
      category: 'Faith',
      description:
        'Whenever you are under the effect of a luck bonus of any kind, that bonus increases by 1.',
    },
    {
      id: 'trait-reactionary',
      traitId: 'reactionary',
      traitName: 'Reactionary',
      category: 'Combat',
      description:
        'You were bullied often as a child, but you learned to react swiftly. You gain a +2 trait bonus to Initiative checks.',
    },
  ],

  // ---- Feats ----
  featSlots: [
    {
      id: 'feat-slot-human-bonus',
      source: 'racial',
      availableAt: 'Human Bonus',
      availableAtLevel: 1,
      featId: 'extra-channel',
      featName: 'Extra Channel',
      prereqOverride: false,
    },
    {
      id: 'feat-slot-lvl1',
      source: 'level',
      availableAt: 'Lvl 1',
      availableAtLevel: 1,
      featId: 'selective-channel',
      featName: 'Selective Channel',
      prereqOverride: false,
    },
    {
      id: 'feat-slot-lvl3',
      source: 'level',
      availableAt: 'Lvl 3',
      availableAtLevel: 3,
      featId: 'spell-focus-necromancy',
      featName: 'Spell Focus (Necromancy)',
      prereqOverride: false,
    },
    {
      id: 'feat-slot-lvl5',
      source: 'level',
      availableAt: 'Lvl 5',
      availableAtLevel: 5,
      featId: 'augment-summoning',
      featName: 'Augment Summoning',
      prereqOverride: false,
    },
    {
      id: 'feat-slot-lvl7',
      source: 'level',
      availableAt: 'Lvl 7',
      availableAtLevel: 7,
      featId: 'sacred-summons',
      featName: 'Sacred Summons',
      prereqOverride: false,
    },
    {
      id: 'feat-slot-lvl9',
      source: 'level',
      availableAt: 'Lvl 9',
      availableAtLevel: 9,
      featId: 'spell-penetration',
      featName: 'Spell Penetration',
      prereqOverride: false,
    },
    {
      id: 'feat-slot-lvl11',
      source: 'level',
      availableAt: 'Lvl 11',
      availableAtLevel: 11,
      featId: 'greater-spell-penetration',
      featName: 'Greater Spell Penetration',
      prereqOverride: false,
    },
    {
      id: 'feat-slot-lvl13',
      source: 'level',
      availableAt: 'Lvl 13',
      availableAtLevel: 13,
      prereqOverride: false,
    },
    {
      id: 'feat-slot-lvl15',
      source: 'level',
      availableAt: 'Lvl 15',
      availableAtLevel: 15,
      prereqOverride: false,
    },
    {
      id: 'feat-slot-mythic-1',
      source: 'mythic',
      availableAt: 'Tier 1',
      availableAtLevel: 1,
      featId: 'mythic-spell-focus',
      featName: 'Mythic Spell Focus',
      prereqOverride: false,
    },
  ],

  // ---- Spellcasting ----
  spellcastingPools: [
    {
      id: 'pool-divine',
      poolType: 'divine',
      castingAbility: 'wis',
      spellsPerDayMisc: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    },
  ],

  // ---- Equipment ----
  weapons: [
    {
      id: 'weapon-mace',
      name: 'Heavy Mace +4',
      attackBonus: 12,
      damage: '1d8+8',
      damageType: 'B',
      critRange: '20',
      critMultiplier: 2,
    },
  ],
  armor: [
    {
      id: 'armor-fullplate',
      name: 'Mithral Full Plate +3',
      acBonus: 11,
      maxDex: 3,
      acp: 0,
    },
  ],
  magicItems: [
    {
      id: 'item-orange-ioun',
      name: 'Orange Ioun Stone',
      description: '+1 caster level to all spells',
      autoApplyNote: '+1 CL all spells → applied to Divine pool',
    },
    {
      id: 'item-headband',
      name: 'Headband of Mental Superiority +4',
      description: '+4 enhancement to INT, WIS, CHA',
      autoApplyNote: '+4 enhancement → WIS, INT, CHA auto-applied',
    },
    {
      id: 'item-belt',
      name: 'Belt of Physical Might +4 (STR/CON)',
      description: '+4 enhancement to STR and CON',
      autoApplyNote: '+4 enhancement → STR, CON auto-applied',
    },
    {
      id: 'item-ring-protection',
      name: 'Ring of Protection +4',
      description: '+4 deflection bonus to AC',
      autoApplyNote: '+4 deflection → AC auto-applied',
    },
  ],

  // ---- Notes ----
  characterNotes: '',
  campaignNotes: '',
};
