import type { ItemSpecialAbility } from '@/types/magicItems';

// Armor special abilities — batch 5 (items 101–109).
// Sources: Core Rulebook, Ultimate Equipment, Armor Master's Handbook,
// Aquatic Adventures, and other Pathfinder 1e supplements.
export const armorAbilitiesBatch5: ItemSpecialAbility[] = [
  // +3 bonus equivalent
  {
    id: 'armor_vigilant',
    name: 'Vigilant',
    description: 'Once per day on command, the wearer can activate an effect functioning as the righteous might spell for 10 rounds, granting DR 5/chaotic (instead of the standard DR/evil or DR/good). Any chaotic creature that dons this armor gains one permanent negative level for as long as they wear it; this penalty cannot be removed by restoration spells and vanishes only upon removal. The armor typically displays lawful religious iconography and requires a lawful creator.',
    bonusEquivalent: 3, casterLevel: 10,
    effects: [],
  },

  // +3 bonus equivalent (Ultimate Equipment)
  {
    id: 'armor_determination',
    name: 'Determination',
    description: 'Once per day, when the wearer is reduced to 0 or fewer hit points (but not killed outright), they automatically stabilize and immediately gain 2d8+10 temporary hit points. These temporary hit points last for 1 minute.',
    bonusEquivalent: 3, casterLevel: 10,
    effects: [],
  },

  // +3 bonus equivalent
  {
    id: 'armor_aquadynamic_greater',
    name: 'Greater Aquadynamic',
    description: 'This sleek and mobile armor is magically streamlined to assist in swimming. Grants the wearer a +15 competence bonus on Swim checks.',
    bonusEquivalent: 3, casterLevel: 5,
    effects: [
      { type: 'bonus', bonusType: 'competence', target: 'skill.swim', value: 15, source: 'Greater Aquadynamic Armor' },
    ],
  },

  // +3 bonus equivalent
  {
    id: 'armor_shadow_greater',
    name: 'Shadow (Greater)',
    description: 'As shadow, but grants a +15 competence bonus on Stealth checks.',
    bonusEquivalent: 3, casterLevel: 15,
    effects: [
      { type: 'bonus', bonusType: 'competence', target: 'skill.stealth', value: 15, source: 'Greater Shadow Armor' },
    ],
  },

  // +3 bonus equivalent
  {
    id: 'armor_slick_greater',
    name: 'Slick (Greater)',
    description: 'As slick, but grants a +15 competence bonus on Escape Artist checks.',
    bonusEquivalent: 3, casterLevel: 15,
    effects: [
      { type: 'bonus', bonusType: 'competence', target: 'skill.escape_artist', value: 15, source: 'Greater Slick Armor' },
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

  // +5 bonus equivalent
  {
    id: 'armor_etherealness',
    name: 'Etherealness',
    description: 'On command, once per day, the wearer becomes ethereal, functioning as the ethereal jaunt spell. The wearer may remain ethereal for any desired duration and return to normal form at will. After returning to normal form, the ability cannot be used again until the following day.',
    bonusEquivalent: 5, casterLevel: 13,
    effects: [],
  },

  // +5 bonus equivalent
  {
    id: 'armor_undead_controlling',
    name: 'Undead Controlling',
    description: 'The wearer can control up to 26 Hit Dice of undead per day, as the control undead spell. At each dawn, any undead previously dominated by the wearer are released from control. Armor bearing this enchantment typically features skeletal decorations or a bone-like appearance.',
    bonusEquivalent: 5, casterLevel: 13,
    effects: [],
  },

  // +4 bonus equivalent
  {
    id: 'armor_energy_resistance_greater',
    name: 'Energy Resistance (Greater)',
    description: 'Grants resistance 30 to one energy type (acid, cold, electricity, fire, or sonic), chosen at creation.',
    bonusEquivalent: 4, casterLevel: 15,
    effects: [],
  },
];
