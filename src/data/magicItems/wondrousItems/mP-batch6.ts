import type { WondrousItemDefinition } from '@/types/magicItems';
import { AuraStrength, MagicSchool } from '@/types/equipment';

export const wondrousItemsMP6: WondrousItemDefinition[] = [
  {
    id: 'wondrous-orb-of-golden-heaven',
    name: 'Orb of Golden Heaven',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION }],
    casterLevel: 10,
    slot: 'none',
    price: 22000,
    weight: 1,
    description:
      'This alabaster sphere with golden bands and diamond runes functions as a light source. It enables melee touch attacks ' +
      'equivalent to holy water. Good creatures can command it to cast consecrate and searing light once daily each. Evil ' +
      'bearers suffer a permanent negative level while holding it.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['bless water', 'consecrate', 'daylight', 'searing light'], cost: 11000 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.orb_golden_heaven', value: 0, source: 'Orb of Golden Heaven' }],
  },
  {
    id: 'wondrous-orb-of-storms',
    name: 'Orb of Storms',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    aura: [
      { strength: AuraStrength.STRONG, school: MagicSchool.EVOCATION },
      { strength: AuraStrength.STRONG, school: MagicSchool.TRANSMUTATION },
    ],
    casterLevel: 18,
    slot: 'none',
    price: 48000,
    weight: 6,
    description:
      'This 8-inch diameter glass sphere grants the possessor control over weather. Once daily cast control weather; once monthly ' +
      'conjure storm of vengeance; continuous endure elements protection.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['control weather', 'endure elements', 'storm of vengeance'], cost: 24000 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.orb_of_storms_weather', value: 0, source: 'Orb of Storms' }],
  },
  {
    id: 'wondrous-ornament-of-healing-light',
    name: 'Ornament of Healing Light',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.CONJURATION }],
    casterLevel: 5,
    slot: 'none',
    price: 10000,
    weight: 1,
    description:
      'This small holy symbol made of stained glass in a gold frame allows the holder to project the symbol\'s image within ' +
      '15 feet. If the bearer is a paladin, they can use lay on hands through the symbol at 15-foot range instead of touch.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['sacred bond'], cost: 5000 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.ornament_healing_light_ranged_loh', value: 0, source: 'Ornament of Healing Light' }],
  },
  {
    id: 'wondrous-page-of-spell-knowledge-1st',
    name: 'Page of Spell Knowledge (1st)',
    category: 'wondrous',
    source: 'Ultimate Magic',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 9,
    slot: 'none',
    price: 500,
    weight: 0,
    description:
      'Contains a single 1st-level spell. If the bearer is a spontaneous caster with the spell on their class list, they ' +
      'may use spell slots to cast it as if it were a spell known.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['creator must know the spell'], cost: 250 },
    activationCategory: 'continuous',
    effects: [{ type: 'special', target: 'special.page_spell_knowledge', value: 0, source: 'Page of Spell Knowledge (1st)' }],
  },
  {
    id: 'wondrous-page-of-spell-knowledge-2nd',
    name: 'Page of Spell Knowledge (2nd)',
    category: 'wondrous',
    source: 'Ultimate Magic',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 9,
    slot: 'none',
    price: 2000,
    weight: 0,
    description: 'As Page of Spell Knowledge (1st), but contains a 2nd-level spell.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['creator must know the spell'], cost: 1000 },
    activationCategory: 'continuous',
    effects: [{ type: 'special', target: 'special.page_spell_knowledge', value: 0, source: 'Page of Spell Knowledge (2nd)' }],
  },
  {
    id: 'wondrous-page-of-spell-knowledge-3rd',
    name: 'Page of Spell Knowledge (3rd)',
    category: 'wondrous',
    source: 'Ultimate Magic',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 9,
    slot: 'none',
    price: 4500,
    weight: 0,
    description: 'As Page of Spell Knowledge (1st), but contains a 3rd-level spell.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['creator must know the spell'], cost: 2250 },
    activationCategory: 'continuous',
    effects: [{ type: 'special', target: 'special.page_spell_knowledge', value: 0, source: 'Page of Spell Knowledge (3rd)' }],
  },
  {
    id: 'wondrous-pauldrons-of-the-bull',
    name: 'Pauldrons of the Bull',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION }],
    casterLevel: 5,
    slot: 'shoulders',
    price: 10000,
    weight: 3,
    description:
      'These shoulder armor pieces feature bull engravings. The wearer may roll twice and take the better result when performing ' +
      'a bull rush. They also provide a +2 enhancement bonus to CMD against bull rushes.',
    construction: { feats: ['Craft Wondrous Item'], spells: ["bull's strength"], cost: 5000 },
    activationCategory: 'continuous',
    effects: [
      { type: 'bonus', bonusType: 'enhancement', target: 'cmd', value: 2, source: 'Pauldrons of the Bull', condition: { type: 'custom', params: {}, description: 'vs. bull rush only' } },
    ],
  },
  {
    id: 'wondrous-pauldrons-of-the-serpent',
    name: 'Pauldrons of the Serpent',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION }],
    casterLevel: 3,
    slot: 'shoulders',
    price: 3000,
    weight: 3,
    description:
      'Mithral shoulder pieces with an embossed viper motif. They provide a +2 dodge bonus to AC vs. attacks of opportunity ' +
      'and +2 CMD against bull rush, grapple, reposition, and trip maneuvers.',
    construction: { feats: ['Craft Wondrous Item'], spells: ["cat's grace"], cost: 1500 },
    activationCategory: 'continuous',
    effects: [
      { type: 'bonus', bonusType: 'dodge', target: 'ac', value: 2, source: 'Pauldrons of the Serpent', condition: { type: 'custom', params: {}, description: 'vs. attacks of opportunity only' } },
      { type: 'bonus', target: 'cmd', value: 2, source: 'Pauldrons of the Serpent', condition: { type: 'custom', params: {}, description: 'vs. bull rush, grapple, reposition, trip' } },
    ],
  },
  {
    id: 'wondrous-pauldrons-of-the-watchful-lion',
    name: 'Pauldrons of the Watchful Lion',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.NECROMANCY }],
    casterLevel: 5,
    slot: 'shoulders',
    price: 10800,
    weight: 3,
    description:
      'Steel and brass shoulder armor with lion head ornaments. Twice daily as an immediate action, when a creature successfully ' +
      'moves through your threatened space via Acrobatics without triggering an AoO, a shadowy lion emerges and strikes using ' +
      'your BAB + DEX mod vs. touch AC, dealing 2d6 piercing damage (x2 crit) on success.',
    construction: { feats: ['Craft Wondrous Item', 'Craft Magic Arms and Armor'], spells: ['spectral hand'], cost: 5400 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.watchful_lion_spectral_strike', value: 0, source: 'Pauldrons of the Watchful Lion' }],
  },
  {
    id: 'wondrous-demonspike-pauldrons',
    name: 'Demonspike Pauldrons',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.NECROMANCY }],
    casterLevel: 7,
    slot: 'shoulders',
    price: 14350,
    weight: 8,
    description:
      'Black iron shoulder pieces with protruding spikes. They function as magical +2 armor spikes inflicting 1d2 bleed ' +
      'on grapple or melee strikes. Combined with standard armor spikes, damage increases to 1d6 (Small) or 1d8 (Medium), ' +
      'using whichever enhancement bonus is higher.',
    construction: { feats: ['Craft Wondrous Item', 'Craft Magic Arms and Armor'], spells: ['bleed'], cost: 7175 },
    activationCategory: 'continuous',
    effects: [
      { type: 'damage', target: 'special.demonspike_armor_spikes', value: 0, source: 'Demonspike Pauldrons' },
    ],
  },
  // Deferred items (AoN pages did not render):
  // Orb of Pure Law, Orb of the Waybringer, Orb of Utter Chaos, Orbicular Sac,
  // Origami Swarm, Ornamental Kobold Spellbook, Pact Parchment, Padma Blossom,
  // Pain Ward of the Ostiarius, Tribal War Paint, War Paint of the Terrible Visage,
  // Panacea Flask, Papyrus of Eternal Rest, Paradox Box, Paralyzing Snare,
  // Parting Glass, Sea Tyrant's Patch, Iron Guard Pauldrons, Juggernaut's Pauldrons
];
