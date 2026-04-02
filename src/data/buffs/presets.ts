import { BonusType } from '@/types/base';
import { SavedBuff } from '@/types/buff';

/**
 * Seeded buff library — common PF1e spells and abilities.
 * Applied as session buffs (not saved to character sheet).
 */
export const BUFF_PRESETS: SavedBuff[] = [
  // ── Morale bonuses (spells) ───────────────────────────────────────
  {
    id: 'bless',
    name: 'Bless',
    description: '+1 morale bonus on attack rolls and saves vs. fear',
    source: 'Cleric 1 / Paladin 1',
    category: 'Spell',
    bonusType: BonusType.MORALE,
    duration: 10,
    durationType: 'rounds',
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.MORALE,
        target: 'attack.all',
        value: 1,
        source: 'Bless',
      },
    ],
  },
  {
    id: 'bless_weapon',
    name: 'Bless Weapon',
    description: 'Weapon treated as good-aligned for DR; +1 on confirmation rolls',
    source: 'Paladin 1',
    category: 'Spell',
    bonusType: BonusType.MORALE,
    duration: 1,
    durationType: 'minutes',
    effects: [],
  },
  {
    id: 'inspire_courage',
    name: 'Inspire Courage',
    description: '+1 morale bonus on attacks, damage, saves vs. charm/fear',
    source: 'Bard (Bardic Performance)',
    category: 'Ability',
    bonusType: BonusType.MORALE,
    duration: 999,
    durationType: 'rounds',
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.MORALE,
        target: 'attack.all',
        value: 1,
        source: 'Inspire Courage',
      },
      {
        type: 'bonus',
        bonusType: BonusType.MORALE,
        target: 'damage.all',
        value: 1,
        source: 'Inspire Courage',
      },
    ],
  },
  {
    id: 'inspire_courage_2',
    name: 'Inspire Courage +2',
    description: '+2 morale bonus on attacks, damage, saves vs. charm/fear (higher-level bard)',
    source: 'Bard lv 5+ (Bardic Performance)',
    category: 'Ability',
    bonusType: BonusType.MORALE,
    duration: 999,
    durationType: 'rounds',
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.MORALE,
        target: 'attack.all',
        value: 2,
        source: 'Inspire Courage +2',
      },
      {
        type: 'bonus',
        bonusType: BonusType.MORALE,
        target: 'damage.all',
        value: 2,
        source: 'Inspire Courage +2',
      },
    ],
  },
  {
    id: 'heroes_feast',
    name: "Hero's Feast",
    description: '+1 morale bonus on attacks, saves vs. fear; +4 CON; immune to poison/disease',
    source: 'Cleric 6 / Druid 6',
    category: 'Spell',
    bonusType: BonusType.MORALE,
    duration: 720,
    durationType: 'minutes',
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.MORALE,
        target: 'attack.all',
        value: 1,
        source: "Hero's Feast",
      },
      {
        type: 'bonus',
        bonusType: BonusType.MORALE,
        target: 'ability.con',
        value: 4,
        source: "Hero's Feast",
      },
    ],
  },

  // ── Enhancement bonuses (spells) ─────────────────────────────────
  {
    id: 'bulls_strength',
    name: "Bull's Strength",
    description: '+4 enhancement bonus to Strength',
    source: 'Cleric 2 / Druid 2 / Sorcerer 2',
    category: 'Spell',
    bonusType: BonusType.ENHANCEMENT,
    duration: 1,
    durationType: 'minutes',
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.ENHANCEMENT,
        target: 'ability.str',
        value: 4,
        source: "Bull's Strength",
      },
    ],
  },
  {
    id: 'cats_grace',
    name: "Cat's Grace",
    description: '+4 enhancement bonus to Dexterity',
    source: 'Bard 2 / Druid 2 / Ranger 2',
    category: 'Spell',
    bonusType: BonusType.ENHANCEMENT,
    duration: 1,
    durationType: 'minutes',
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.ENHANCEMENT,
        target: 'ability.dex',
        value: 4,
        source: "Cat's Grace",
      },
    ],
  },
  {
    id: 'bears_endurance',
    name: "Bear's Endurance",
    description: '+4 enhancement bonus to Constitution',
    source: 'Cleric 2 / Druid 2 / Ranger 2',
    category: 'Spell',
    bonusType: BonusType.ENHANCEMENT,
    duration: 1,
    durationType: 'minutes',
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.ENHANCEMENT,
        target: 'ability.con',
        value: 4,
        source: "Bear's Endurance",
      },
    ],
  },
  {
    id: 'owls_wisdom',
    name: "Owl's Wisdom",
    description: '+4 enhancement bonus to Wisdom',
    source: 'Cleric 2 / Druid 2 / Ranger 2',
    category: 'Spell',
    bonusType: BonusType.ENHANCEMENT,
    duration: 1,
    durationType: 'minutes',
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.ENHANCEMENT,
        target: 'ability.wis',
        value: 4,
        source: "Owl's Wisdom",
      },
    ],
  },
  {
    id: 'foxs_cunning',
    name: "Fox's Cunning",
    description: '+4 enhancement bonus to Intelligence',
    source: 'Bard 2 / Sorcerer 2 / Wizard 2',
    category: 'Spell',
    bonusType: BonusType.ENHANCEMENT,
    duration: 1,
    durationType: 'minutes',
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.ENHANCEMENT,
        target: 'ability.int',
        value: 4,
        source: "Fox's Cunning",
      },
    ],
  },

  // ── Luck bonuses ─────────────────────────────────────────────────
  {
    id: 'divine_favor',
    name: 'Divine Favor',
    description: '+1 luck bonus per 3 caster levels (max +3) on attacks and damage',
    source: 'Cleric 1 / Paladin 1',
    category: 'Spell',
    bonusType: BonusType.LUCK,
    duration: 1,
    durationType: 'minutes',
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.LUCK,
        target: 'attack.all',
        value: 1,
        source: 'Divine Favor',
      },
      {
        type: 'bonus',
        bonusType: BonusType.LUCK,
        target: 'damage.all',
        value: 1,
        source: 'Divine Favor',
      },
    ],
  },
  {
    id: 'prayer',
    name: 'Prayer',
    description: '+1 luck bonus on attacks, damage, saves, skills for allies',
    source: 'Cleric 3 / Paladin 3',
    category: 'Spell',
    bonusType: BonusType.LUCK,
    duration: 1,
    durationType: 'rounds',
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.LUCK,
        target: 'attack.all',
        value: 1,
        source: 'Prayer',
      },
      { type: 'bonus', bonusType: BonusType.LUCK, target: 'save.all', value: 1, source: 'Prayer' },
    ],
  },

  // ── Resistance bonuses (saves) ────────────────────────────────────
  {
    id: 'resistance',
    name: 'Resistance',
    description: '+1 resistance bonus on all saving throws',
    source: 'Cleric 0 / Druid 0 / Wizard 0',
    category: 'Spell',
    bonusType: BonusType.RESISTANCE,
    duration: 1,
    durationType: 'minutes',
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.RESISTANCE,
        target: 'save.fortitude',
        value: 1,
        source: 'Resistance',
      },
      {
        type: 'bonus',
        bonusType: BonusType.RESISTANCE,
        target: 'save.reflex',
        value: 1,
        source: 'Resistance',
      },
      {
        type: 'bonus',
        bonusType: BonusType.RESISTANCE,
        target: 'save.will',
        value: 1,
        source: 'Resistance',
      },
    ],
  },
  {
    id: 'aid',
    name: 'Aid',
    description: '+1 morale on attacks/saves vs. fear, +1d8+CL temp HP',
    source: 'Cleric 2',
    category: 'Spell',
    bonusType: BonusType.MORALE,
    duration: 1,
    durationType: 'minutes',
    effects: [
      { type: 'bonus', bonusType: BonusType.MORALE, target: 'attack.all', value: 1, source: 'Aid' },
    ],
  },

  // ── Deflection bonuses (AC) ───────────────────────────────────────
  {
    id: 'shield_of_faith',
    name: 'Shield of Faith',
    description: '+2 deflection bonus to AC (+1 per 6 CL)',
    source: 'Cleric 1',
    category: 'Spell',
    bonusType: BonusType.DEFLECTION,
    duration: 1,
    durationType: 'minutes',
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.DEFLECTION,
        target: 'ac',
        value: 2,
        source: 'Shield of Faith',
      },
    ],
  },
  {
    id: 'mage_armor',
    name: 'Mage Armor',
    description: '+4 armor bonus to AC',
    source: 'Sorcerer/Wizard 1',
    category: 'Spell',
    bonusType: BonusType.ARMOR,
    duration: 60,
    durationType: 'minutes',
    effects: [
      { type: 'bonus', bonusType: BonusType.ARMOR, target: 'ac', value: 4, source: 'Mage Armor' },
    ],
  },
  {
    id: 'shield',
    name: 'Shield',
    description: '+4 shield bonus to AC; immune to magic missile',
    source: 'Sorcerer/Wizard 1',
    category: 'Spell',
    bonusType: BonusType.SHIELD,
    duration: 1,
    durationType: 'minutes',
    effects: [
      { type: 'bonus', bonusType: BonusType.SHIELD, target: 'ac', value: 4, source: 'Shield' },
    ],
  },

  // ── Competence bonuses ────────────────────────────────────────────
  {
    id: 'guidance',
    name: 'Guidance',
    description: '+1 competence bonus on one attack, save, or skill check',
    source: 'Cleric 0 / Druid 0',
    category: 'Spell',
    bonusType: BonusType.COMPETENCE,
    duration: 1,
    durationType: 'minutes',
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.COMPETENCE,
        target: 'attack.all',
        value: 1,
        source: 'Guidance',
      },
    ],
  },

  // ── Natural armor ─────────────────────────────────────────────────
  {
    id: 'barkskin',
    name: 'Barkskin',
    description: '+2 natural armor bonus to AC (+1 per 3 CL over 3, max +5)',
    source: 'Druid 2 / Ranger 2',
    category: 'Spell',
    bonusType: BonusType.NATURAL,
    duration: 10,
    durationType: 'minutes',
    effects: [
      { type: 'bonus', bonusType: BonusType.NATURAL, target: 'ac', value: 2, source: 'Barkskin' },
    ],
  },

  // ── Insight bonuses ───────────────────────────────────────────────
  {
    id: 'true_strike',
    name: 'True Strike',
    description: '+20 insight bonus on your next single attack',
    source: 'Sorcerer/Wizard 1',
    category: 'Spell',
    bonusType: BonusType.INSIGHT,
    duration: 1,
    durationType: 'rounds',
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.INSIGHT,
        target: 'attack.all',
        value: 20,
        source: 'True Strike',
      },
    ],
  },
];
