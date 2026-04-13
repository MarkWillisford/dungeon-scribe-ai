import type { WondrousItemDefinition } from '@/types/magicItems';
import { AuraStrength, MagicSchool } from '@/types/equipment';

export const wondrousItemsRZ11: WondrousItemDefinition[] = [
  {
    id: 'wondrous-amazing-tools-of-manufacture',
    name: 'Amazing Tools of Manufacture',
    category: 'wondrous',
    source: 'Advanced Race Guide',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 3,
    slot: 'none',
    price: 12000,
    weight: 1,
    description:
      'Masterwork tools of mithral/darkwood/adamantine. +4 circumstance on Craft checks. With 6+ ranks: produce finished ' +
      'items at half cost, items ≤2,000 gp in 1 hour, or 2,000 gp/day for pricier items with one final check.',
    construction: { feats: ['Craft Wondrous Item', 'Master Craftsman'], spells: [], cost: 6000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'continuous',
    effects: [{ type: 'bonus', bonusType: 'circumstance', target: 'skill.craft', value: 4, source: 'Amazing Tools of Manufacture' }],
  },
  {
    id: 'wondrous-torc-of-bloody-rage',
    name: 'Torc of Bloody Rage',
    category: 'wondrous',
    source: 'Advanced Class Guide',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 7,
    slot: 'neck',
    price: 8000,
    weight: 1,
    description:
      'Crude iron torc. 1/day enter rage for 6 rounds as free action (12 rounds fatigue after). Those with rage class feature ' +
      'can instead gain 3 additional rage rounds daily.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['rage'], cost: 4000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.torc_bloody_rage', value: 0, source: 'Torc of Bloody Rage' }],
  },
  {
    id: 'wondrous-torc-of-lionheart-fury',
    name: 'Torc of Lionheart Fury',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION }],
    casterLevel: 3,
    slot: 'neck',
    price: 8000,
    weight: 1,
    description:
      'Copper neckpiece with snarling lion heads. +2 morale on fear saves. Barbarians 12+: fearless rage as bonus power. ' +
      'Those already having it become immune to panicked while raging and regain 1 rage round per panic attack (1/round).',
    construction: { feats: ['Craft Wondrous Item'], spells: ['remove fear'], cost: 4000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'continuous',
    effects: [
      { type: 'bonus', bonusType: 'morale', target: 'save.will', value: 2, source: 'Torc of Lionheart Fury', condition: { type: 'custom', params: {}, description: 'vs. fear effects' } },
    ],
  },
  {
    id: 'wondrous-trapmakers-sack',
    name: "Trapmaker's Sack",
    category: 'wondrous',
    source: 'Advanced Race Guide',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 9,
    slot: 'none',
    price: 20000,
    weight: 2,
    description:
      'Enchanted leather bag. 1/day full-round action to create any mechanical trap CR ≤4 within 50 ft. Requires Craft (traps) ' +
      'check matching construction DC. Trap instantly merges with chosen area as if actually built.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['fabricate'], cost: 10000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.trapmakers_sack_instant_trap', value: 0, source: "Trapmaker's Sack" }],
  },
  {
    id: 'wondrous-travelers-any-tool',
    name: "Traveler's Any-Tool",
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 9,
    slot: 'none',
    price: 250,
    weight: 2,
    description:
      'Iron bar that transforms into nearly any tool through folding/bending. Counts as masterwork artisan\'s tools for most ' +
      'Craft or Profession skills. Cannot replicate alchemy kits or complex multi-part devices. Useless as a weapon.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['major creation'], cost: 125 },
    physicalStats: { hardness: 10, hitPoints: 5, breakDC: 20 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.travelers_any_tool_transform', value: 0, source: "Traveler's Any-Tool" }],
  },
  {
    id: 'wondrous-treasurers-seal',
    name: "Treasurer's Seal",
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION }],
    casterLevel: 3,
    slot: 'none',
    price: 10000,
    weight: 1,
    description:
      '6-inch porcelain seal with two sides. Padlock side: applies alarm + arcane lock. Lightning side: casts fire trap on ' +
      'locks after 10 min contact. Bearer can suspend effects 1 min at will. Maintains enchantments on up to 3 items; ' +
      '4th removes oldest.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['alarm', 'arcane lock', 'fire trap'], cost: 5000 },
    physicalStats: { hardness: 2, hitPoints: 3, breakDC: 12 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.treasurers_seal_alarm_lock', value: 0, source: "Treasurer's Seal" }],
  },
  // Deferred items (AoN pages did not render):
  // Tome of Dissolution, Tome of Forgotten Epithets, Tongue of the Hidden,
  // Toothpick of Pyrotechnics, Torc of Innocuous Gems, Torc of The Primal Song,
  // Torch (Palelight), Toxin Sponge, Transport Token, Trapped Beverage,
  // Trapped Puzzle Box, Trapped Sword, Traveler's Grandiose Carrying Case,
  // Traveler's Translator, Traveler's Wet Suit, Traveling Master's Turban,
  // Triple Eyes of Vivid Auras, Trollbane Blanch, Trollblood Elixir
];
