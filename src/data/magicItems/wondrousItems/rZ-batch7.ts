import type { WondrousItemDefinition } from '@/types/magicItems';
import { AuraStrength, MagicSchool } from '@/types/equipment';

export const wondrousItemsRZ7: WondrousItemDefinition[] = [
  {
    id: 'wondrous-soul-soap',
    name: 'Soul Soap',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION }],
    casterLevel: 1,
    slot: 'none',
    price: 200,
    weight: 2,
    description:
      'Coarse gray bar embedded with ash/coal/earth. Requires water and 1 minute to wash a creature, granting a new Will save ' +
      'against any ongoing hostile mind-affecting effects. Unwilling targets must be pinned or helpless. One bar per creature.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['resistance'], cost: 100 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.soul_soap_resave', value: 0, source: 'Soul Soap' }],
  },
  {
    id: 'wondrous-sovereign-glue',
    name: 'Sovereign Glue',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 20,
    slot: 'none',
    price: 2400,
    weight: 0,
    description:
      'Pale amber adhesive that permanently bonds any two surfaces. One ounce covers 1 sq ft, sets in 1 round. Must be stored ' +
      'in flasks lined with salve of slipperiness. Bond can only be broken by universal solvent. Price per ounce.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['make whole'], cost: 1200 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.sovereign_glue_bond', value: 0, source: 'Sovereign Glue' }],
  },
  {
    id: 'wondrous-spectacles-of-understanding',
    name: 'Spectacles of Understanding',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 2,
    slot: 'eyes',
    price: 3000,
    weight: 0,
    description:
      'Convert any written language to one known by the wearer (as comprehend languages). +5 on Linguistics checks for ' +
      'identifying forgeries and allows untrained checks for this purpose.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['comprehend languages'], cost: 1500 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'continuous',
    effects: [
      { type: 'bonus', target: 'skill.linguistics', value: 5, source: 'Spectacles of Understanding', condition: { type: 'custom', params: {}, description: 'forgery identification only' } },
    ],
  },
  {
    id: 'wondrous-steadfast-grapple',
    name: 'Steadfast Grapple',
    category: 'wondrous',
    source: 'Pathfinder #55: The Wormwood Mutiny',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 3,
    slot: 'none',
    price: 5000,
    weight: 9,
    description:
      'Iron grappling hook with 50 ft silk rope. Automatically hits and attaches to any targeted object/structure within range. ' +
      'Normal attack rolls vs. creatures. Removal requires DC 30 Strength, command word, or dispel magic.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['animate rope', 'true strike'], cost: 2500 },
    physicalStats: { hardness: 10, hitPoints: 5, breakDC: 20 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.steadfast_grapple_auto_attach', value: 0, source: 'Steadfast Grapple' }],
  },
  {
    id: 'wondrous-steadfast-gut-stone',
    name: 'Steadfast Gut-Stone',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION }],
    casterLevel: 3,
    slot: 'none',
    price: 800,
    weight: 2,
    description:
      'Swallowed as standard action, lasts up to 1 week. Absorbs precision damage (crits/sneak attacks). Has 10 HP, 0 hardness. ' +
      'Owner can sacrifice it as a free sunder maneuver dealing 1d4 to attacker\'s weapon (bypasses hardness). One per creature.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['magic stone', 'shield other'], cost: 400 },
    physicalStats: { hardness: 0, hitPoints: 10, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.gut_stone_precision_absorb', value: 0, source: 'Steadfast Gut-Stone' }],
  },
  // Deferred items (AoN pages did not render):
  // Solidsmoke Pipeweed, Soothing Stole, Soul Scribe Quill, Soulspeaker,
  // Spartoi Seeds, Spectacles of Comprehension, Spectacles of Lip Reading,
  // Spectacles (Annihilation), Spectacles (Physician's), Spell Lattice,
  // Spell Totem, Spiral Tiles, Spirit Planchette, Sporecrafter's Kindness,
  // Spy Eyes, Stalactite (Portable), Stalagmite Seed, Steelbone Frame,
  // Sterling Salt, Stewards' Favor
];
