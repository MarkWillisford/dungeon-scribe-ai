import type { FeatDefinition } from '@/types/feats';
import { BonusType } from '@/types/base';

export const CHELIAX_FEATS: FeatDefinition[] = [
  {
    id: 'beliers_bite',
    name: "Belier's Bite",
    description:
      'Your unarmed attacks inflict an additional 1d4 bleed damage to wounded foes. This does not combine with other special abilities, attacks, or items that provide bleed damage.',
    shortDescription: 'Unarmed attacks deal 1d4 bleed to wounded foes.',
    source: 'Pathfinder Companion: Cheliax, Empire of Devils',
    types: ['combat'],
    prerequisites: [{ type: 'feat', featId: 'improved_unarmed_strike' }],
    effects: [
      {
        type: 'damage',
        target: 'unarmed',
        value: 0,
        bonusType: BonusType.UNTYPED,
        source: "Belier's Bite",
      },
    ],
    activationMode: 'conditional',
    tags: ['unarmed', 'bleed', 'monk', 'brawler'],
  },
  {
    id: 'cornugon_shield',
    name: 'Cornugon Shield',
    description:
      'When wielding a spiked chain, you gain a +1 shield bonus to your AC. When you are fighting defensively or using the total defense action, this shield bonus increases to +2.',
    shortDescription: '+1 shield AC with spiked chain; +2 when fighting defensively.',
    source: 'Pathfinder Companion: Cheliax, Empire of Devils',
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'DEX', minimum: 15 },
      { type: 'feat', featId: 'weapon_focus_spiked_chain' },
    ],
    effects: [
      {
        type: 'bonus',
        target: 'ac',
        value: 1,
        bonusType: BonusType.SHIELD,
        source: 'Cornugon Shield',
      },
    ],
    activationMode: 'passive',
    tags: ['spiked chain', 'shield', 'defense', 'devil'],
  },
  {
    id: 'cornugon_smash',
    name: 'Cornugon Smash',
    description:
      'When you damage an opponent with a Power Attack, you may make an immediate Intimidate check as a free action to attempt to demoralize your opponent.',
    shortDescription: 'Free Intimidate to demoralize when you hit with Power Attack.',
    source: 'Pathfinder Companion: Cheliax, Empire of Devils',
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'power_attack' },
      { type: 'skill', skillId: 'intimidate', ranks: 6 },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special',
        source: 'Cornugon Smash',
      },
    ],
    activationMode: 'conditional',
    tags: ['intimidate', 'power attack', 'demoralize', 'devil', 'fear'],
  },
  {
    id: 'cornugon_stun',
    name: 'Cornugon Stun',
    description:
      'You can apply Stunning Fist effects when attacking with special monk weapons, not just unarmed strikes.',
    shortDescription: 'Apply Stunning Fist with special monk weapons.',
    source: 'Pathfinder Companion: Cheliax, Empire of Devils',
    types: ['combat'],
    prerequisites: [{ type: 'feat', featId: 'stunning_fist' }],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special',
        source: 'Cornugon Stun',
      },
    ],
    activationMode: 'passive',
    tags: ['stunning fist', 'monk', 'weapon', 'devil'],
  },
  {
    id: 'cornugon_trip',
    name: 'Cornugon Trip',
    description:
      'You may throw your spiked chain as if it were a thrown weapon with a range increment of 10 feet and can make trip attacks when throwing it. Failing at this attack does not knock you prone.',
    shortDescription: 'Throw spiked chain (10 ft range) for ranged trip attacks.',
    source: 'Pathfinder Companion: Cheliax, Empire of Devils',
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'DEX', minimum: 15 },
      { type: 'feat', featId: 'improved_trip' },
      { type: 'feat', featId: 'weapon_focus_spiked_chain' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special',
        source: 'Cornugon Trip',
      },
    ],
    activationMode: 'conditional',
    tags: ['spiked chain', 'trip', 'thrown', 'devil', 'combat maneuver'],
  },
  {
    id: 'furys_fall',
    name: "Fury's Fall",
    description: 'When making a trip attack, add your Dexterity bonus to your CMB.',
    shortDescription: 'Add DEX to CMB for trip attacks.',
    source: 'Pathfinder Companion: Cheliax, Empire of Devils',
    types: ['combat'],
    prerequisites: [{ type: 'feat', featId: 'improved_trip' }],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'cmb',
        source: "Fury's Fall",
      },
    ],
    activationMode: 'passive',
    tags: ['trip', 'dexterity', 'combat maneuver', 'devil'],
  },
  {
    id: 'furys_snare',
    name: "Fury's Snare",
    description:
      'Upon successfully tripping a foe with a whip, you may drop the weapon to entangle your target. The opponent can escape via a DC 10 Strength check, DC 15 Escape Artist check (adjusted by the whip\'s enhancement bonus), or a full-round action. A successful Strength check breaks the whip. Magical whip properties like flaming deal damage each round on your turn.',
    shortDescription: 'Trip with whip to entangle foe; drop whip to bind them.',
    source: 'Pathfinder Companion: Cheliax, Empire of Devils',
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'furys_fall' },
      { type: 'feat', featId: 'improved_trip' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special',
        source: "Fury's Snare",
      },
    ],
    activationMode: 'conditional',
    tags: ['whip', 'trip', 'entangle', 'devil'],
  },
  {
    id: 'hamatula_strike',
    name: 'Hamatula Strike',
    description:
      'Whenever you damage an opponent with a piercing weapon, you can immediately make a grapple check; success means the opponent is impaled on your weapon and you both gain the grappled condition. While an opponent is impaled, you can perform a grapple check as an attack action with a -4 penalty to deal weapon damage, even with weapons that normally cannot be used during grapples.',
    shortDescription: 'Impale foes on piercing weapons to grapple; deal weapon damage while grappling.',
    source: 'Pathfinder Companion: Cheliax, Empire of Devils',
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'improved_grapple' },
      { type: 'ability_score', ability: 'STR', minimum: 13 },
      { type: 'bab', minimum: 7 },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special',
        source: 'Hamatula Strike',
      },
    ],
    activationMode: 'conditional',
    tags: ['grapple', 'piercing', 'impale', 'devil'],
  },
  {
    id: 'hamatula_grasp',
    name: 'Hamatula Grasp',
    description:
      'When using an impaling weapon against an opponent already impaled via Hamatula Strike, grapple checks incur only a -2 penalty instead of the standard -4. Successfully landing such a grapple check inflicts an additional 1d6 damage.',
    shortDescription: 'Reduced grapple penalty and +1d6 damage against impaled foes.',
    source: 'Pathfinder Companion: Cheliax, Empire of Devils',
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'hamatula_strike' },
      { type: 'feat', featId: 'improved_grapple' },
      { type: 'ability_score', ability: 'STR', minimum: 13 },
      { type: 'bab', minimum: 9 },
    ],
    effects: [
      {
        type: 'damage',
        target: 'grapple',
        value: 0,
        bonusType: BonusType.UNTYPED,
        source: 'Hamatula Grasp',
      },
    ],
    activationMode: 'conditional',
    tags: ['grapple', 'impale', 'damage', 'devil'],
  },
  {
    id: 'hellcat_pounce',
    name: 'Hellcat Pounce',
    description:
      'Whenever you attack and damage an opponent in the surprise round, you may immediately make a second attack against the same opponent using the same attack bonus. The second attack does not treat the target as flat-footed. This ability requires carrying a light load or less.',
    shortDescription: 'Extra attack in surprise round after damaging a foe.',
    source: 'Pathfinder Companion: Cheliax, Empire of Devils',
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'hellcat_stealth' },
      { type: 'feat', featId: 'skill_focus_stealth' },
      { type: 'special', description: 'Sneak attack +2d6' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special',
        source: 'Hellcat Pounce',
      },
    ],
    activationMode: 'conditional',
    tags: ['surprise', 'extra attack', 'stealth', 'sneak attack', 'devil'],
  },
  {
    id: 'hellcat_stealth',
    name: 'Hellcat Stealth',
    description:
      'You can attempt Stealth checks in normal or bright light conditions even while being observed, though with a -10 penalty.',
    shortDescription: 'Stealth in normal/bright light while observed at -10 penalty.',
    source: 'Pathfinder Companion: Cheliax, Empire of Devils',
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'skill_focus_stealth' },
      { type: 'skill', skillId: 'stealth', ranks: 6 },
    ],
    effects: [
      {
        type: 'special',
        value: -10,
        bonusType: BonusType.UNTYPED,
        target: 'stealth',
        source: 'Hellcat Stealth',
      },
    ],
    activationMode: 'conditional',
    tags: ['stealth', 'light', 'observed', 'devil', 'rogue'],
  },
  {
    id: 'osyluth_guile',
    name: 'Osyluth Guile',
    description:
      "While you are fighting defensively or using the total defense action, select one opponent. Add your Charisma bonus to your AC as a dodge bonus against that opponent's melee attacks until your next turn.",
    shortDescription: 'Add CHA as dodge AC vs. one foe while fighting defensively.',
    source: 'Pathfinder Companion: Cheliax, Empire of Devils',
    types: ['combat'],
    prerequisites: [
      { type: 'skill', skillId: 'bluff', ranks: 8 },
      { type: 'feat', featId: 'dodge' },
    ],
    effects: [
      {
        type: 'bonus',
        target: 'ac',
        value: 0,
        bonusType: BonusType.DODGE,
        source: 'Osyluth Guile',
      },
    ],
    activationMode: 'conditional',
    tags: ['dodge', 'charisma', 'defensive', 'bluff', 'devil'],
  },
];
