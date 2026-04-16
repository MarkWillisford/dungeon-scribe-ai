import type { WondrousItemDefinition } from '@/types/magicItems';
import { AuraStrength, MagicSchool } from '@/types/equipment';

export const wondrousItemsMP8: WondrousItemDefinition[] = [
  {
    id: 'wondrous-phylactery-of-negative-channeling',
    name: 'Phylactery of Negative Channeling',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.NECROMANCY }],
    casterLevel: 10,
    slot: 'headband',
    price: 11000,
    weight: 0,
    description:
      'This headband enhances characters capable of channeling negative energy, boosting damage to living creatures by an ' +
      'additional 2d6. The same increase applies to healing received by undead entities.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['creator must be a 10th-level cleric'], cost: 5500 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'continuous',
    effects: [{ type: 'bonus', target: 'special.channel_negative_damage', value: 2, source: 'Phylactery of Negative Channeling' }],
  },
  {
    id: 'wondrous-phylactery-of-positive-channeling',
    name: 'Phylactery of Positive Channeling',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.NECROMANCY }],
    casterLevel: 10,
    slot: 'headband',
    price: 11000,
    weight: 0,
    description:
      'This headband enhances positive energy channeling, dealing an additional 2d6 damage to undead while boosting healing ' +
      'effects for living creatures by 2d6.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['creator must be a 10th-level cleric'], cost: 5500 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'continuous',
    effects: [{ type: 'bonus', target: 'special.channel_positive_damage', value: 2, source: 'Phylactery of Positive Channeling' }],
  },
  {
    id: 'wondrous-pipes-of-haunting',
    name: 'Pipes of Haunting',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.NECROMANCY }],
    casterLevel: 4,
    slot: 'none',
    price: 6000,
    weight: 3,
    description:
      'These pan pipes produce an unsettling melody when played (DC 15 Perform). Listeners within 30 feet must make a DC 13 ' +
      'Will save or become frightened for 4 rounds. Creatures with 6+ HD are immune. Functions twice daily.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['scare'], cost: 3000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.pipes_haunting_fear', value: 0, source: 'Pipes of Haunting' }],
  },
  {
    id: 'wondrous-pipes-of-pain',
    name: 'Pipes of Pain',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 6,
    slot: 'none',
    price: 12000,
    weight: 3,
    description:
      'These pipes mesmerize creatures within 30 feet on a DC 15 Perform check (Will DC 14 resists). Upon ceasing play, ' +
      'fascinated creatures suffer heightened sound sensitivity for 2d4 rounds: 1d4 damage/round from noise, sonic vulnerability. ' +
      'Afterward, affected creatures remain shaken in noisy environments due to a curse-like hypersensitivity.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['sound burst'], cost: 6000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.pipes_of_pain_mesmerize', value: 0, source: 'Pipes of Pain' }],
  },
  {
    id: 'wondrous-pipes-of-sounding',
    name: 'Pipes of Sounding',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ILLUSION }],
    casterLevel: 2,
    slot: 'none',
    price: 1800,
    weight: 3,
    description:
      'These metallic pan pipes produce imitative sounds when played by someone with Perform (wind instruments) skill. ' +
      'The magical sounds function as the ghost sound spell.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['ghost sound'], cost: 900 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    spellLikeAbilities: [
      { spells: [{ spellId: 'ghost_sound', spellName: 'Ghost Sound', casterLevel: 2, usesPerDay: 0, activationAction: 'standard' }] },
    ],
    effects: [{ type: 'special', target: 'special.pipes_sounding_ghost_sound', value: 0, source: 'Pipes of Sounding' }],
  },
  {
    id: 'wondrous-pipes-of-the-sewers',
    name: 'Pipes of the Sewers',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.CONJURATION }],
    casterLevel: 2,
    slot: 'none',
    price: 1150,
    weight: 3,
    description:
      'These pipes summon rat swarms within 400 feet on a DC 10 Perform check. The user controls them telepathically while ' +
      'playing. DC increases by 5 for each successful summoning within 24 hours. Rats depart immediately when playing stops.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['charm animal', 'summon nature\'s ally I'], cost: 575 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.pipes_sewers_summon_rats', value: 0, source: 'Pipes of the Sewers' }],
  },
  {
    id: 'wondrous-polymorphic-pouch',
    name: 'Polymorphic Pouch',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 9,
    slot: 'none',
    price: 5000,
    weight: 1,
    description:
      'This enchanted leather pouch with druidic decoration holds up to 4 cubic feet or 40 pounds of extradimensional space. ' +
      'It never merges with the bearer\'s body when assuming animal, dragon, elemental, magical beast, plant, or vermin forms — ' +
      'instead automatically reattaching to an accessible location on the transformed body.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['polymorph', 'secret chest'], cost: 2500 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'continuous',
    effects: [{ type: 'special', target: 'special.polymorphic_pouch_persist', value: 0, source: 'Polymorphic Pouch' }],
  },
  {
    id: 'wondrous-portable-hole',
    name: 'Portable Hole',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.CONJURATION }],
    casterLevel: 12,
    slot: 'none',
    price: 20000,
    weight: 0,
    description:
      'Crafted from phase spider silk woven with ethereal strands and starlight. When opened, it measures 6 feet in diameter ' +
      'and folds small enough for a pocket. Creates a 10-foot-deep extradimensional space. Holds enough air for one Medium or ' +
      'two Small creatures for 10 minutes. Placing a bag of holding inside creates an Astral Plane rift destroying both items; ' +
      'nesting a portable hole in a bag of holding opens a gate pulling creatures through and destroying both.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['plane shift'], cost: 10000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.portable_hole_extradimensional', value: 0, source: 'Portable Hole' }],
  },
  // Deferred items (AoN pages did not render):
  // Phylactery of the Shepherd, Pipes of Dissolution, Pipes of Shifting Tempo,
  // Pipes of the Warren Guardian, Pirate Queen's Bones, Pirate Queen's Tricorne,
  // Planar Carriage, Planar Guide, Planar Keystone, Planar Strap,
  // Platter of Exquisite Feasting, Player's Prize, Plume of Panache,
  // Poison Popcushion, Poison Vial of Distance, Polish of Inconspicuous Armor, Gunfighter's Poncho
];
