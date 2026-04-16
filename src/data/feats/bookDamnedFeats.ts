import type { FeatDefinition } from '@/types/feats';
import { BonusType } from '@/types/base';

export const BOOK_DAMNED_FEATS: FeatDefinition[] = [
  {
    id: 'chain_mastery',
    name: 'Chain Mastery',
    description:
      'You can treat a spiked chain as a one-handed martial weapon. You retain the option to wield it two-handed, and doing so grants a +2 bonus on combat maneuver checks to disarm or trip foes with your spiked chain.',
    shortDescription:
      'Spiked chain becomes one-handed martial; +2 disarm/trip CMB when two-handed.',
    source: 'Pathfinder Campaign Setting: Book of the Damned',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'DEX', minimum: 15 },
      { type: 'proficiency', proficiency: 'spiked chain' },
    ],
    effects: [
      {
        type: 'special',
        value: 2,
        bonusType: BonusType.UNTYPED,
        target: 'cmb',
        source: 'Chain Mastery',
      },
    ],
    activationMode: 'passive',
    tags: ['spiked chain', 'combat maneuver', 'disarm', 'trip'],
  },
  {
    id: 'damned_disciple',
    name: 'Damned Disciple',
    description:
      'You can select either an evangelist boon or an exalted boon when gaining boons through Fiendish Obedience; this choice is permanent. You gain a +2 profane bonus on checks with two selected skills.',
    shortDescription: 'Choose evangelist/exalted boon path; +2 profane on two chosen skills.',
    source: 'Pathfinder Campaign Setting: Book of the Damned',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [{ type: 'feat', featId: 'fiendish_obedience' }],
    effects: [
      {
        type: 'bonus',
        target: 'special.chosen_skill',
        value: 2,
        bonusType: BonusType.PROFANE,
        source: 'Damned Disciple',
      },
    ],
    activationMode: 'passive',
    tags: ['fiendish obedience', 'boon', 'profane', 'evil'],
  },
  {
    id: 'damned_soldier',
    name: 'Damned Soldier',
    description:
      "You can select either a sentinel or exalted boon through Fiendish Obedience; this choice is permanent. You gain a +1 profane bonus on weapon damage rolls with your god's favored weapon.",
    shortDescription:
      "Choose sentinel/exalted boon path; +1 profane damage with deity's favored weapon.",
    source: 'Pathfinder Campaign Setting: Book of the Damned',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [{ type: 'feat', featId: 'fiendish_obedience' }],
    effects: [
      {
        type: 'damage',
        target: 'special.favored_weapon',
        value: 1,
        bonusType: BonusType.PROFANE,
        source: 'Damned Soldier',
      },
    ],
    activationMode: 'passive',
    tags: ['fiendish obedience', 'boon', 'profane', 'evil', 'weapon'],
  },
  {
    id: 'dance_of_chains',
    name: 'Dance of Chains',
    description:
      "When wielding a spiked chain one-handed, you substitute your Dexterity modifier for Strength when calculating damage. The weapon's reach extends 5 feet beyond normal during your turn. These advantages disappear if you fight with multiple weapons or use a shield (bucklers are excepted).",
    shortDescription: 'DEX to damage with one-handed spiked chain; +5 ft reach on your turn.',
    source: 'Pathfinder Campaign Setting: Book of the Damned',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'DEX', minimum: 15 },
      { type: 'feat', featId: 'chain_mastery' },
      { type: 'proficiency', proficiency: 'spiked chain' },
      { type: 'feat', featId: 'weapon_finesse' },
      { type: 'skill', skillId: 'perform_dance', ranks: 1 },
    ],
    effects: [
      {
        type: 'damage',
        target: 'special.spiked_chain',
        value: 0,
        bonusType: BonusType.UNTYPED,
        source: 'Dance of Chains',
      },
    ],
    activationMode: 'passive',
    tags: ['spiked chain', 'dexterity', 'finesse', 'reach', 'dance'],
  },
  {
    id: 'deadly_horns',
    name: 'Deadly Horns',
    description:
      'You gain a gore natural attack that deals 1d6 points of damage. You cannot use your gore attack simultaneously with other natural weapons during a full attack. When combined with manufactured weapon attacks, the gore functions as a secondary attack.',
    shortDescription: 'Gain a 1d6 gore natural attack.',
    source: 'Pathfinder Campaign Setting: Book of the Damned',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'bab', minimum: 1 },
      { type: 'race', raceName: 'Tiefling' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.natural_attack',
        source: 'Deadly Horns',
      },
    ],
    activationMode: 'passive',
    tags: ['tiefling', 'natural attack', 'gore', 'horns'],
  },
  {
    id: 'fiendish_obedience',
    name: 'Fiendish Obedience',
    description:
      'By performing daily obedience rituals (maximum 1 hour), you gain special abilities based on your fiend patron. At 12+ Hit Dice you gain the first boon, at 16+ HD the second boon, and at 20+ HD the third boon. Unless a specific duration or number of uses per day is listed, boon effects are constant. You can select evangelist, exalted, or sentinel boon categories. Failing to perform daily obedience causes loss of all benefits until the next performance.',
    shortDescription: 'Daily fiendish rituals grant scaling boons at 12, 16, and 20 HD.',
    source: 'Pathfinder Campaign Setting: Book of the Damned',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'knowledge_religion', ranks: 3 },
      { type: 'special', description: 'Must worship a fiendish deity, demigod, or quasi deity' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Fiendish Obedience',
      },
    ],
    activationMode: 'passive',
    tags: ['evil', 'fiend', 'obedience', 'boon', 'deity'],
  },
  {
    id: 'soul_powered_magic',
    name: 'Soul-Powered Magic',
    description:
      'When casting a spell that would require an expensive material component, you can substitute a captured soul in its place. The soul must equal the gp cost of the component being replaced. Using a soul damages but does not destroy it, and the soul is released afterward. Creatures whose souls were used this way cannot be restored via raise dead, though reincarnate, resurrection, true resurrection, miracle, and wish may succeed.',
    shortDescription: 'Substitute captured souls for expensive material components.',
    source: 'Pathfinder Campaign Setting: Book of the Damned',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'Any evil alignment' },
      { type: 'caster_level', minimum: 5 },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Soul-Powered Magic',
      },
    ],
    activationMode: 'conditional',
    tags: ['evil', 'soul', 'material component', 'spellcasting'],
  },
  // Fiendish Serpent, Fiendish Wings, Infernal Legist, Nightmare Chains, Sacrificial Potency
  // skipped — require outsider/devil/kyton subtypes (monster feats, not player-usable)
];
