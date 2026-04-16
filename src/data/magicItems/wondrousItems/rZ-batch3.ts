import type { WondrousItemDefinition } from '@/types/magicItems';
import { AuraStrength, MagicSchool } from '@/types/equipment';

export const wondrousItemsRZ3: WondrousItemDefinition[] = [
  {
    id: 'wondrous-salve-of-slipperiness',
    name: 'Salve of Slipperiness',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 6,
    slot: 'none',
    price: 1000,
    weight: 0,
    description:
      'This ointment grants +20 competence on Escape Artist and CMB checks to escape grapples, +10 competence to CMD vs. ' +
      'grapple. Neutralizes magical/nonmagical webs, functions as grease on surfaces. Lasts ~8 hours.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['grease'], cost: 500 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [
      { type: 'bonus', bonusType: 'competence', target: 'skill.escape_artist', value: 20, source: 'Salve of Slipperiness' },
      { type: 'bonus', bonusType: 'competence', target: 'cmd', value: 10, source: 'Salve of Slipperiness', condition: { type: 'custom', params: {}, description: 'vs. grapple only' } },
    ],
  },
  {
    id: 'wondrous-stone-salve',
    name: 'Stone Salve',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    aura: [
      { strength: AuraStrength.STRONG, school: MagicSchool.ABJURATION },
      { strength: AuraStrength.STRONG, school: MagicSchool.TRANSMUTATION },
    ],
    casterLevel: 13,
    slot: 'none',
    price: 4000,
    weight: 0,
    description:
      'This ointment serves dual purposes. Applied to petrified flesh, it functions as stone to flesh. Applied to ' +
      'non-petrified creatures, it provides stoneskin protection. Price is per ounce.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['stone to flesh', 'stoneskin'], cost: 2000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.stone_salve_dual', value: 0, source: 'Stone Salve' }],
  },
  {
    id: 'wondrous-sandals-of-quick-reaction',
    name: 'Sandals of Quick Reaction',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 4,
    slot: 'feet',
    price: 4000,
    weight: 1,
    description:
      'These leather sandals grant both a standard and move action during surprise rounds. Characters who already have this ' +
      'capability instead gain +10 circumstance bonus to speed during surprise rounds.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['anticipate peril', 'haste'], cost: 2000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'continuous',
    effects: [{ type: 'special', target: 'special.sandals_quick_reaction_surprise', value: 0, source: 'Sandals of Quick Reaction' }],
  },
  {
    id: 'wondrous-sandals-of-the-lightest-step',
    name: 'Sandals of the Lightest Step',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 7,
    slot: 'feet',
    price: 5000,
    weight: 0,
    description:
      'Purple velvet-soled leather sandals with gold stitching. Once per round after moving 10+ feet, activate as a swift ' +
      'action to walk on air until round\'s end (as air walk). Must reach solid ground or fall. 5 uses/day, 1 min between uses.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['air walk'], cost: 2500 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.sandals_lightest_step_air_walk', value: 0, source: 'Sandals of the Lightest Step' }],
  },
  {
    id: 'wondrous-sash-of-flowing-water',
    name: 'Sash of Flowing Water',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ABJURATION }],
    casterLevel: 10,
    slot: 'belt',
    price: 25000,
    weight: 1,
    description:
      'With a free hand, the wearer can deflect successful melee attacks by rolling an unarmed strike against the attacker\'s ' +
      'roll. If higher, the attack is negated. The strike deals no damage and doesn\'t count as an attack. Regardless of success, ' +
      'the wearer takes -4 on attack rolls until end of next turn.',
    construction: { feats: ['Craft Wondrous Item', 'Combat Expertise', 'Improved Unarmed Strike'], spells: [], cost: 12500 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.sash_flowing_water_deflect', value: 0, source: 'Sash of Flowing Water' }],
  },
  {
    id: 'wondrous-sash-of-the-war-champion',
    name: 'Sash of the War Champion',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ABJURATION }],
    casterLevel: 9,
    slot: 'chest',
    price: 4000,
    weight: 1,
    description:
      'A bright red cloth strip with imagery of crowds and chariots. Treats the wearer\'s fighter level as 4 higher for ' +
      'the purpose of armor training and bravery class features.',
    construction: { feats: ['Craft Wondrous Item'], spells: ["cat's grace", 'remove fear'], cost: 2000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'continuous',
    effects: [{ type: 'bonus', target: 'special.fighter_armor_training_level', value: 4, source: 'Sash of the War Champion' }],
  },
  {
    id: 'wondrous-scabbard-of-honing',
    name: 'Scabbard of Honing',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 3,
    slot: 'none',
    price: 500,
    weight: 1,
    description:
      'This magical scabbard adapts to fit various blade types including axes, swords, and daggers. When a non-magical weapon ' +
      'is placed inside for one minute, its edge is sharpened as if with a whetstone.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['mending'], cost: 250 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.scabbard_honing_sharpen', value: 0, source: 'Scabbard of Honing' }],
  },
  // Deferred items (AoN pages did not render):
  // Runes of The Crone's Coven, Runes of The Old Faith, Runestone of Power,
  // Runestone (Hydrodaemon), Rust Monster Antenna Whip, Saccadic Focusing Prism,
  // Saddle of The Sky-River, Saddle (War), Saliharion, Saline Purge,
  // Salve of the Second Chance, Sandals of Interception, Sandals (Combat),
  // Sandals (Dryad), Sandals (Sandstorm), Sash (Diminishing), Sash (Scaled),
  // Satchel (Book Thief's)
];
