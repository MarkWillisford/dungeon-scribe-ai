import type { WondrousItemDefinition } from '@/types/magicItems';
import { AuraStrength, MagicSchool } from '@/types/equipment';

export const wondrousItemsRZ2: WondrousItemDefinition[] = [
  {
    id: 'wondrous-robe-of-useful-items',
    name: 'Robe of Useful Items',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 9,
    slot: 'body',
    price: 7000,
    weight: 1,
    description:
      'This worn garment displays patches that reshape into practical items. One patch detaches per round. Starts with two ' +
      'each of: dagger, bullseye lantern, mirror, 10-foot pole, 50-foot rope, and sack. 4d4 additional random patches provide ' +
      'items from gold and gems to mules, rowboats, or iron doors.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['fabricate'], cost: 3500 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.robe_useful_items_patches', value: 0, source: 'Robe of Useful Items' }],
  },
  {
    id: 'wondrous-blazing-robe',
    name: 'Blazing Robe',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION }],
    casterLevel: 8,
    slot: 'body',
    price: 11000,
    weight: 1,
    description:
      'This crimson and orange silk robe resembles flames beneath its surface. It provides fire resistance 5, +1 caster level ' +
      'for fire descriptor spells, and once daily a 20 ft radius fire burst dealing 2d6 fire damage (Reflex DC 16 half).',
    construction: { feats: ['Craft Wondrous Item', 'Heighten Spell'], spells: ['resist energy', 'fireball'], cost: 5500 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [
      { type: 'resistance', target: 'energy_resistance', value: 5, source: 'Blazing Robe', condition: { type: 'custom', params: { descriptor: 'fire' }, description: 'fire resistance 5' } },
      { type: 'bonus', target: 'spell.caster_level', value: 1, source: 'Blazing Robe', condition: { type: 'custom', params: { descriptor: 'fire' }, description: 'fire descriptor spells only' } },
    ],
  },
  {
    id: 'wondrous-monks-robe',
    name: "Monk's Robe",
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 10,
    slot: 'body',
    price: 13000,
    weight: 1,
    description:
      'This brown robe treats monk wearers as 5 levels higher for AC and unarmed damage. Characters with Stunning Fist gain ' +
      'one additional use daily. Non-monks gain 5th-level monk AC and unarmed damage without Wisdom bonus.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['righteous might'], cost: 6500 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'continuous',
    effects: [{ type: 'bonus', target: 'special.monk_effective_level', value: 5, source: "Monk's Robe" }],
  },
  {
    id: 'wondrous-shocking-robe',
    name: 'Shocking Robe',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    aura: [
      { strength: AuraStrength.MODERATE, school: MagicSchool.ABJURATION },
      { strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION },
    ],
    casterLevel: 10,
    slot: 'body',
    price: 11000,
    weight: 1,
    description:
      'Violet and yellow silk robe with crackling electricity imagery. Electricity resistance 5, +1 CL for electricity spells, ' +
      'and once daily 20 ft radius electricity burst dealing 2d6 electricity damage (Reflex DC 16 half).',
    construction: { feats: ['Craft Wondrous Item', 'Heighten Spell'], spells: ['resist energy', 'lightning bolt'], cost: 5500 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [
      { type: 'resistance', target: 'energy_resistance', value: 5, source: 'Shocking Robe', condition: { type: 'custom', params: { descriptor: 'electricity' }, description: 'electricity resistance 5' } },
      { type: 'bonus', target: 'spell.caster_level', value: 1, source: 'Shocking Robe', condition: { type: 'custom', params: { descriptor: 'electricity' }, description: 'electricity descriptor spells only' } },
    ],
  },
  {
    id: 'wondrous-slayers-robe',
    name: "Slayer's Robe",
    category: 'wondrous',
    source: 'Advanced Class Guide',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.DIVINATION }],
    casterLevel: 9,
    slot: 'body',
    price: 15000,
    weight: 5,
    description:
      'Brown monastic garb for assassins. +5 competence on Stealth and Sleight of Hand (weapon concealment). +1 resistance ' +
      'on all saves (equals studied target bonus for slayers). Gaseous form up to 5 min/day with +10 Stealth while misted.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['gaseous form', 'guidance'], cost: 7500 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [
      { type: 'bonus', bonusType: 'competence', target: 'skill.stealth', value: 5, source: "Slayer's Robe" },
      { type: 'bonus', bonusType: 'competence', target: 'skill.sleight_of_hand', value: 5, source: "Slayer's Robe", condition: { type: 'custom', params: {}, description: 'weapon concealment only' } },
      { type: 'bonus', bonusType: 'resistance', target: 'save.all', value: 1, source: "Slayer's Robe" },
    ],
  },
  {
    id: 'wondrous-sorcerers-robe',
    name: "Sorcerer's Robe",
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION }],
    casterLevel: 10,
    slot: 'body',
    price: 5000,
    weight: 1,
    description:
      'Allows a sorcerer to incorporate her 1st-level bloodline power into spells as a swift action (3/day). Expend one use ' +
      'of the bloodline power to apply it to one target of the spell. Successful saves reduce or negate the bloodline effect.',
    construction: { feats: ['Craft Wondrous Item', 'Quicken Spell-Like Ability'], spells: [], cost: 2500 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.sorcerers_robe_bloodline_channel', value: 0, source: "Sorcerer's Robe" }],
  },
  {
    id: 'wondrous-voidfrost-robe',
    name: 'Voidfrost Robe',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    aura: [
      { strength: AuraStrength.MODERATE, school: MagicSchool.ABJURATION },
      { strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION },
    ],
    casterLevel: 10,
    slot: 'body',
    price: 11000,
    weight: 1,
    description:
      'Blue and white silk with icy appearance. Cold resistance 5, +1 CL for cold descriptor spells, and once daily ' +
      '20 ft radius cold burst dealing 2d6 cold damage (Reflex DC 16 half).',
    construction: { feats: ['Craft Wondrous Item', 'Heighten Spell'], spells: ['resist energy', 'cone of cold'], cost: 5500 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [
      { type: 'resistance', target: 'energy_resistance', value: 5, source: 'Voidfrost Robe', condition: { type: 'custom', params: { descriptor: 'cold' }, description: 'cold resistance 5' } },
      { type: 'bonus', target: 'spell.caster_level', value: 1, source: 'Voidfrost Robe', condition: { type: 'custom', params: { descriptor: 'cold' }, description: 'cold descriptor spells only' } },
    ],
  },
  {
    id: 'wondrous-xorn-robe',
    name: 'Xorn Robe',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 9,
    slot: 'body',
    price: 20000,
    weight: 1,
    description:
      'Soiled brown/gray robe with gem-like eye patterns. +5 Perception bonus, can traverse up to 20 ft of stone daily ' +
      'via earth glide (5 ft increments), and can eat gems/metals/ore for sustenance (100 gp = 1 day). Removing the robe ' +
      'after eating causes sickness for 24 hours.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['passwall', 'purify food and drink'], cost: 10000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'continuous',
    effects: [
      { type: 'bonus', bonusType: 'competence', target: 'skill.perception', value: 5, source: 'Xorn Robe' },
      { type: 'special', target: 'special.xorn_robe_earth_glide', value: 0, source: 'Xorn Robe' },
    ],
  },
  {
    id: 'wondrous-rope-of-climbing',
    name: 'Rope of Climbing',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 3,
    slot: 'none',
    price: 3000,
    weight: 3,
    description:
      'This 60-foot rope supports 3,000 pounds and responds to commands, moving at 10 ft/round in any direction and securing ' +
      'itself. Can knot itself at 1-foot intervals (shortening to 50 ft) reducing Climb DC by 10. Requires someone to hold one end.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['animate rope'], cost: 1500 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'command_word',
    effects: [{ type: 'special', target: 'special.rope_climbing_animate', value: 0, source: 'Rope of Climbing' }],
  },
  {
    id: 'wondrous-rope-of-entanglement',
    name: 'Rope of Entanglement',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 12,
    slot: 'none',
    price: 21000,
    weight: 5,
    description:
      'This 30-foot hempen rope lashes forward up to 20 ft or upward 10 ft to entangle targets. DC 20 Strength or Escape ' +
      'Artist to break free. AC 22, 12 HP, hardness 10, DR 5/slashing. Regenerates 1 HP/5 min. Destroyed if all HP lost.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['animate objects', 'animate rope'], cost: 10500 },
    physicalStats: { hardness: 10, hitPoints: 12, breakDC: 20 },
    activationCategory: 'command_word',
    effects: [{ type: 'special', target: 'special.rope_entanglement_grapple', value: 0, source: 'Rope of Entanglement' }],
  },
  {
    id: 'wondrous-rope-of-knots',
    name: 'Rope of Knots',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 9,
    slot: 'none',
    price: 6000,
    weight: 0,
    description:
      'This 100-foot rope combines climbing with self-knotting. On command it fashions bridges, nets, hammocks, or ladders. ' +
      'Complex formations take up to 10 rounds; returning to coiled form takes half that. Hardness 1, 20 HP, regenerates 2 HP/10 min.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['animate rope'], cost: 3000 },
    physicalStats: { hardness: 1, hitPoints: 20, breakDC: 15 },
    activationCategory: 'command_word',
    effects: [{ type: 'special', target: 'special.rope_knots_formations', value: 0, source: 'Rope of Knots' }],
  },
  // Deferred items (AoN pages did not render):
  // Robe of the Master of Masters, Robe of the Resplendent Thespian, Robe (Anaphexis),
  // Robe (Hamatulatsu), Robe (Liar's), Robe (Smuggler's Collapsible), Robe (Summoner's),
  // Robes of Lead, Robes of the Defender, Robes of the Summit, Robes (Pauper's),
  // Ropes (Razored), Roseskin Comb, Ruff (Mummer's)
];
