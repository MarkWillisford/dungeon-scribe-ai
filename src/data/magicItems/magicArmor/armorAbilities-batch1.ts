import type { ItemSpecialAbility } from '@/types/magicItems';

// Core Rulebook armor special abilities, sorted by bonus equivalent then alphabetically.
// These apply to both armor and shields unless noted otherwise.
export const armorAbilitiesBatch1: ItemSpecialAbility[] = [
  // +1 bonus equivalent
  {
    id: 'armor_blinding',
    name: 'Blinding',
    description: 'On a critical hit against the wearer, the attacker must succeed at a DC 14 Reflex save or be blinded for 1d4 rounds by a flash of light.',
    bonusEquivalent: 1, casterLevel: 5,
    effects: [],
  },
  {
    id: 'armor_fortification_light',
    name: 'Fortification (Light)',
    description: '25% chance to negate a critical hit or sneak attack, treating it as a normal hit.',
    bonusEquivalent: 1, casterLevel: 13,
    effects: [],
  },
  {
    id: 'armor_glamered',
    name: 'Glamered',
    description: 'On command, the armor changes its appearance to look like normal clothing or any other type of armor. It retains all properties while so disguised. Only the appearance changes, not the actual size, weight, or bulk.',
    bonusEquivalent: 1, casterLevel: 10,
    effects: [],
  },
  {
    id: 'armor_ghost_touch',
    name: 'Ghost Touch',
    description: 'The armor\'s enhancement bonus applies against the touch attacks of incorporeal creatures. The armor can be donned or removed by an incorporeal creature.',
    bonusEquivalent: 3, casterLevel: 15,
    effects: [],
  },
  {
    id: 'armor_slick',
    name: 'Slick',
    description: 'As if coated in grease, grants the wearer a +5 competence bonus on Escape Artist checks.',
    bonusEquivalent: 1, casterLevel: 4,
    effects: [
      { type: 'bonus', bonusType: 'competence', target: 'skill.escape_artist', value: 5, source: 'Slick Armor' },
    ],
  },
  {
    id: 'armor_shadow',
    name: 'Shadow',
    description: 'Grants the wearer a +5 competence bonus on Stealth checks.',
    bonusEquivalent: 1, casterLevel: 5,
    effects: [
      { type: 'bonus', bonusType: 'competence', target: 'skill.stealth', value: 5, source: 'Shadow Armor' },
    ],
  },
  {
    id: 'armor_silent_moves',
    name: 'Silent Moves',
    description: 'Grants the wearer a +5 competence bonus on Stealth checks to move silently.',
    bonusEquivalent: 1, casterLevel: 5,
    effects: [
      { type: 'bonus', bonusType: 'competence', target: 'skill.stealth', value: 5, source: 'Silent Moves Armor' },
    ],
  },
  {
    id: 'armor_spell_resistance_13',
    name: 'Spell Resistance (13)',
    description: 'Grants the wearer spell resistance 13.',
    bonusEquivalent: 2, casterLevel: 15,
    effects: [
      { type: 'bonus', bonusType: 'enhancement', target: 'sr', value: 13, source: 'Armor Spell Resistance 13' },
    ],
  },

  // +2 bonus equivalent
  {
    id: 'armor_energy_resistance',
    name: 'Energy Resistance',
    description: 'Grants resistance 10 to one energy type (acid, cold, electricity, fire, or sonic), chosen at creation.',
    bonusEquivalent: 2, casterLevel: 7,
    effects: [],
  },
  {
    id: 'armor_fortification_moderate',
    name: 'Fortification (Moderate)',
    description: '50% chance to negate a critical hit or sneak attack, treating it as a normal hit.',
    bonusEquivalent: 3, casterLevel: 13,
    effects: [],
  },
  {
    id: 'armor_invulnerability',
    name: 'Invulnerability',
    description: 'Grants the wearer DR 5/magic.',
    bonusEquivalent: 3, casterLevel: 18,
    effects: [
      { type: 'bonus', bonusType: 'untyped', target: 'dr', value: 5, source: 'Invulnerability Armor', condition: { type: 'custom', params: {}, description: 'DR 5/magic' } },
    ],
  },
  {
    id: 'armor_slick_improved',
    name: 'Slick (Improved)',
    description: 'As slick, but grants a +10 competence bonus on Escape Artist checks.',
    bonusEquivalent: 2, casterLevel: 10,
    effects: [
      { type: 'bonus', bonusType: 'competence', target: 'skill.escape_artist', value: 10, source: 'Improved Slick Armor' },
    ],
  },
  {
    id: 'armor_shadow_improved',
    name: 'Shadow (Improved)',
    description: 'As shadow, but grants a +10 competence bonus on Stealth checks.',
    bonusEquivalent: 2, casterLevel: 10,
    effects: [
      { type: 'bonus', bonusType: 'competence', target: 'skill.stealth', value: 10, source: 'Improved Shadow Armor' },
    ],
  },
  {
    id: 'armor_silent_moves_improved',
    name: 'Silent Moves (Improved)',
    description: 'As silent moves, but grants a +10 competence bonus on Stealth checks to move silently.',
    bonusEquivalent: 2, casterLevel: 10,
    effects: [
      { type: 'bonus', bonusType: 'competence', target: 'skill.stealth', value: 10, source: 'Improved Silent Moves Armor' },
    ],
  },
  {
    id: 'armor_spell_resistance_15',
    name: 'Spell Resistance (15)',
    description: 'Grants the wearer spell resistance 15.',
    bonusEquivalent: 3, casterLevel: 15,
    effects: [
      { type: 'bonus', bonusType: 'enhancement', target: 'sr', value: 15, source: 'Armor Spell Resistance 15' },
    ],
  },

  // +3 bonus equivalent
  {
    id: 'armor_energy_resistance_improved',
    name: 'Energy Resistance (Improved)',
    description: 'Grants resistance 20 to one energy type (acid, cold, electricity, fire, or sonic), chosen at creation.',
    bonusEquivalent: 3, casterLevel: 11,
    effects: [],
  },
  {
    id: 'armor_fortification_heavy',
    name: 'Fortification (Heavy)',
    description: '75% chance to negate a critical hit or sneak attack, treating it as a normal hit.',
    bonusEquivalent: 5, casterLevel: 13,
    effects: [],
  },
  {
    id: 'armor_slick_greater',
    name: 'Slick (Greater)',
    description: 'As slick, but grants a +15 competence bonus on Escape Artist checks.',
    bonusEquivalent: 3, casterLevel: 15,
    effects: [
      { type: 'bonus', bonusType: 'competence', target: 'skill.escape_artist', value: 15, source: 'Greater Slick Armor' },
    ],
  },
  {
    id: 'armor_shadow_greater',
    name: 'Shadow (Greater)',
    description: 'As shadow, but grants a +15 competence bonus on Stealth checks.',
    bonusEquivalent: 3, casterLevel: 15,
    effects: [
      { type: 'bonus', bonusType: 'competence', target: 'skill.stealth', value: 15, source: 'Greater Shadow Armor' },
    ],
  },
  {
    id: 'armor_silent_moves_greater',
    name: 'Silent Moves (Greater)',
    description: 'As silent moves, but grants a +15 competence bonus on Stealth checks to move silently.',
    bonusEquivalent: 3, casterLevel: 15,
    effects: [
      { type: 'bonus', bonusType: 'competence', target: 'skill.stealth', value: 15, source: 'Greater Silent Moves Armor' },
    ],
  },
  {
    id: 'armor_spell_resistance_17',
    name: 'Spell Resistance (17)',
    description: 'Grants the wearer spell resistance 17.',
    bonusEquivalent: 4, casterLevel: 15,
    effects: [
      { type: 'bonus', bonusType: 'enhancement', target: 'sr', value: 17, source: 'Armor Spell Resistance 17' },
    ],
  },

  // +4 bonus equivalent
  {
    id: 'armor_energy_resistance_greater',
    name: 'Energy Resistance (Greater)',
    description: 'Grants resistance 30 to one energy type (acid, cold, electricity, fire, or sonic), chosen at creation.',
    bonusEquivalent: 4, casterLevel: 15,
    effects: [],
  },
  {
    id: 'armor_spell_resistance_19',
    name: 'Spell Resistance (19)',
    description: 'Grants the wearer spell resistance 19.',
    bonusEquivalent: 5, casterLevel: 15,
    effects: [
      { type: 'bonus', bonusType: 'enhancement', target: 'sr', value: 19, source: 'Armor Spell Resistance 19' },
    ],
  },
  {
    id: 'armor_wild',
    name: 'Wild',
    description: 'The armor melds into the wearer\'s body when they use wild shape (or a similar ability). The enhancement bonus is preserved but no armor check penalty, arcane spell failure, or maximum Dex bonus applies while in wild shape.',
    bonusEquivalent: 3, casterLevel: 9,
    effects: [],
  },
];
