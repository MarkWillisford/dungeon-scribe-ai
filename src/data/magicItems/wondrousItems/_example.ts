// EXAMPLE BATCH FILE — shows expected format for all wondrous item batch files.
// Delete this file before opening the PR.
//
// NAMING: one exported array per file, named after the file:
//   aB-batch1.ts  → export const wondrousItemsAB1: WondrousItemDefinition[]
//   mP-batch3.ts  → export const wondrousItemsMP3: WondrousItemDefinition[]
//
// IDs: lowercase, hyphen-separated, prefixed with 'wondrous-'.
//   Multi-word: 'wondrous-amulet-natural-armor-1' (include bonus number for variants)
//
// VARIANTS: Amulet of Natural Armor +1 and +2 are separate entries with separate IDs.
//   Keep all variants of an item in the same batch file (they count as one "item" toward
//   your 25-item limit — one item name, multiple entries).
//
// EFFECTS:
//   - Use 'bonus' for numeric stat bonuses (with bonusType)
//   - Use 'special' for everything the pipeline doesn't handle yet (qualitative powers)
//   - Use 'immunity' for full immunities
//   - target follows EffectTarget — e.g. 'ability.str', 'save.all', 'ac.natural', 'skill.perception'
//   - For non-standard targets use compound notation: 'special.lay_on_hands_uses_per_day'
//   - For conditional effects (only applies sometimes), add a `condition` field to the Effect:
//       condition: { type: 'weapon_type', params: { weaponType: 'firearm' }, description: '...' }
//       condition: { type: 'target_type', params: { creatureType: 'undead' }, description: '...' }
//       condition: { type: 'custom', params: { descriptor: 'fire' }, description: '...' }
//   - For powers gated on the wielder (class, race, alignment), use conditionalEffects[] on the item
//
// AURA: array, items can have multiple schools.
//   e.g. [{ strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION }]
//   Use MagicSchool.UNIVERSAL for items with a universal aura school.
//
// SLOT: use 'ring' for ring-slot items (rings, bands, etc.).
//   Left vs right is a character-sheet decision tracked via EquipmentSlot, not on the definition.
//
// SOURCES: use the book abbreviation as a string. Common values:
//   'Core Rulebook', 'Advanced Player\'s Guide', 'Ultimate Equipment', 'Ultimate Combat',
//   'Ultimate Magic', 'Pathfinder Unchained', 'Occult Adventures', 'Inner Sea World Guide',
//   'Advanced Race Guide', 'Seekers of Secrets', 'Adventurer\'s Armory'
//
// CONSTRUCTION FEATS: full name as string, e.g. 'Craft Wondrous Item', 'Forge Ring'
// CONSTRUCTION SPELLS: spell name as string, e.g. 'barkskin', 'magic fang'
//
// PRICE: in gp. Weight: in lbs (use 0 for negligible). null for priceless artifacts.
//
// DO NOT modify index.ts — index wiring happens after all batches are done.

import type { WondrousItemDefinition } from '@/types/magicItems';
import { AuraStrength, MagicSchool } from '@/types/equipment';
// ConditionalEffect is only needed for class/race/alignment-gated powers (e.g. Holy Avenger, Bracers of the Merciful Knight)
// For simple conditional bonuses (only vs. bullets, only vs. undead), use the `condition` field on Effect instead.

export const wondrousItemsExample: WondrousItemDefinition[] = [
  // ---- Example 1: simple numeric bonus ----------------------------------------
  {
    id: 'wondrous-amulet-natural-armor-1',
    name: 'Amulet of Natural Armor +1',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'neck',

    price: 2000,
    weight: 0,

    description:
      "This amulet, usually crafted from bone or beast scales, toughens the wearer's body and flesh, " +
      'giving him a +1 enhancement bonus to his natural armor rating.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['barkskin', 'magic fang'],
      cost: 1000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'ac.natural',
        value: 1,
        source: 'Amulet of Natural Armor +1',
      },
    ],
  },

  {
    id: 'wondrous-amulet-natural-armor-2',
    name: 'Amulet of Natural Armor +2',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'neck',

    price: 8000,
    weight: 0,

    description:
      "This amulet, usually crafted from bone or beast scales, toughens the wearer's body and flesh, " +
      'giving him a +2 enhancement bonus to his natural armor rating.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['barkskin', 'magic fang'],
      cost: 4000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'ac.natural',
        value: 2,
        source: 'Amulet of Natural Armor +2',
      },
    ],
  },

  // ---- Example 2: multiple effects, use-activated ------------------------------
  {
    id: 'wondrous-bag-of-holding-1',
    name: 'Bag of Holding (Type I)',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 9,
    slot: 'none',

    price: 2500,
    weight: 15, // weight of bag itself; contents are extradimensional and weightless

    description:
      'This appears to be a common cloth sack about 2 feet by 4 feet in size. The bag of holding opens ' +
      'into a nondimensional space: its inside is larger than its outside dimensions. Regardless of what ' +
      'is put into the bag, it weighs a fixed amount. A type I bag of holding can carry up to 250 pounds ' +
      'and has an interior volume of 30 cubic feet.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['secret chest'],
      cost: 1250,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 2,
      breakDC: 10,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        // No pipeline handling yet — mark as special.
        // Future service: extradimensional storage, 250 lb / 30 cu ft capacity.
        type: 'special',
        target: 'special.extradimensional_storage',
        value: 0,
        source: 'Bag of Holding (Type I)',
      },
    ],
  },

  // ---- Example 3: multiple aura schools, multiple effects, command word --------
  {
    id: 'wondrous-helm-brilliance',
    name: 'Helm of Brilliance',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [
      { strength: AuraStrength.STRONG, school: MagicSchool.EVOCATION },
      { strength: AuraStrength.MODERATE, school: MagicSchool.ABJURATION },
    ],
    casterLevel: 13,
    slot: 'head',

    price: 125000,
    weight: 3,

    description:
      'This normal-looking helm takes its true form and manifests its powers when the user dons it ' +
      'and speaks the command word. Made of brilliant steel, it is set with large magic gems: 10 diamonds, ' +
      '20 rubies, 30 fire opals, and 40 opals. When struck by bright light, the helm scintillates and ' +
      'sends forth reflective rays in all directions from its gems.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['daylight', 'fireball', 'prismatic_spray', 'protection_from_energy'],
      cost: 62500,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 10,
      breakDC: 24,
    },

    activationCategory: 'command_word',
    activationAction: 'free',

    effects: [
      {
        // +1 effective caster level for fire spells
        type: 'bonus',
        target: 'spell.caster_level',
        value: 1,
        source: 'Helm of Brilliance',
        condition: {
          type: 'custom',
          params: { descriptor: 'fire' },
          description: 'fire spells only',
        },
      },
      {
        // Undead take fire damage when wearer casts fire spells — pipeline ignores for now
        type: 'special',
        target: 'special.helm_brilliance_undead_fire',
        value: 0,
        source: 'Helm of Brilliance',
      },
      {
        // Gem charges — modeled as special; charge tracking lives on CharacterMagicItem
        type: 'special',
        target: 'special.helm_brilliance_gem_charges',
        value: 0,
        source: 'Helm of Brilliance',
      },
    ],

    spellLikeAbilities: [
      {
        spellId: 'daylight',
        spellName: 'Daylight',
        casterLevel: 13,
        usesPerDay: 0, // at will (from diamond charge)
        activationAction: 'standard',
      },
      {
        spellId: 'fireball',
        spellName: 'Fireball',
        casterLevel: 13,
        usesPerDay: 0, // per ruby charge
        saveDC: 20,
        activationAction: 'standard',
      },
    ],
  },

  // ---- Example 4: conditional effects (EffectCondition vs ConditionalEffect) ----------
  //
  // EffectCondition (condition field on Effect): the bonus only applies sometimes.
  //   Use for: "only vs. firearms", "only vs. undead", "only for fire spells", etc.
  //   This is the more common case for wondrous items.
  //
  // ConditionalEffect (conditionalEffects[] on the item): entirely different powers for
  //   different wielders — class-gated, race-gated, or alignment-gated abilities.
  //   Use for: "paladin only", "dwarf only", "lawful good only" power blocks.
  {
    id: 'wondrous-amulet-bullet-protection-1',
    name: 'Amulet of Bullet Protection +1',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION }],
    casterLevel: 5,
    slot: 'neck',

    price: 1500,
    weight: 0,

    description:
      'This amulet grants the wearer a +1 luck bonus to AC against firearm attacks.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['bullet shield'],
      cost: 750,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'continuous',

    effects: [
      {
        // Conditional effect: bonus only applies vs. firearm attacks.
        // Use `condition` on the Effect for "only applies sometimes" bonuses.
        type: 'bonus',
        bonusType: 'luck',
        target: 'ac',
        value: 1,
        source: 'Amulet of Bullet Protection +1',
        condition: {
          type: 'weapon_type',
          params: { weaponType: 'firearm' },
          description: 'against firearm attacks only',
        },
      },
    ],
  },

  // ---- Example 5: ConditionalEffect — class-gated power block -------------------
  //
  // Bracers of the Merciful Knight: standard bonuses apply to all wielders,
  // but the paladin-only spell-like abilities use conditionalEffects[].
  {
    id: 'wondrous-bracers-merciful-knight',
    name: 'Bracers of the Merciful Knight',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 5,
    slot: 'wrists',

    price: 15700,
    weight: 1,

    description:
      "These silver bracers are etched with images of angelic figures. They provide a +2 armor bonus to AC. " +
      "If the wearer is a paladin, once per day she may use lesser restoration, neutralize poison, or remove disease " +
      "as a spell-like ability.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['lesser restoration', 'neutralize poison', 'remove disease'],
      cost: 7850,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 5,
      breakDC: 20,
    },

    activationCategory: 'continuous',

    effects: [
      {
        // Applies to all wielders
        type: 'bonus',
        bonusType: 'armor',
        target: 'ac.armor',
        value: 2,
        source: 'Bracers of the Merciful Knight',
      },
    ],

    // Powers that only apply to a specific class go in conditionalEffects[].
    // The pipeline skips these if the condition isn't met.
    conditionalEffects: [
      {
        condition: 'wielder_class',
        classId: 'paladin',
        spellLikeAbilities: [
          {
            spellId: 'lesser_restoration',
            spellName: 'Lesser Restoration',
            casterLevel: 5,
            usesPerDay: 1,
            activationAction: 'standard',
          },
          {
            spellId: 'neutralize_poison',
            spellName: 'Neutralize Poison',
            casterLevel: 5,
            usesPerDay: 1,
            activationAction: 'standard',
          },
          {
            spellId: 'remove_disease',
            spellName: 'Remove Disease',
            casterLevel: 5,
            usesPerDay: 1,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },
];
