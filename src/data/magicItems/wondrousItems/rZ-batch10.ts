import type { WondrousItemDefinition } from '@/types/magicItems';
import { AuraStrength, MagicSchool } from '@/types/equipment';

export const wondrousItemsRZ10: WondrousItemDefinition[] = [
  {
    id: 'wondrous-hypnotic-tattoo',
    name: 'Hypnotic Tattoo',
    category: 'wondrous',
    source: 'Magical Marketplace',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 1,
    slot: 'none',
    price: 900,
    weight: 0,
    description:
      'Arabesque tattoo granting +2 circumstance on Perform (dance) when visible. During performance/bardic performance, ' +
      'target one creature within 90 ft that can see it for -2 on Perception and Sense Motive. Mind-affecting; change target as free action.',
    construction: { feats: ['Inscribe Magical Tattoo'], spells: ['hypnotism'], cost: 450 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'continuous',
    effects: [
      { type: 'bonus', bonusType: 'circumstance', target: 'skill.perform_dance', value: 2, source: 'Hypnotic Tattoo' },
    ],
  },
  {
    id: 'wondrous-reservoir-tattoo',
    name: 'Reservoir Tattoo',
    category: 'wondrous',
    source: 'Magical Marketplace',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 7,
    slot: 'none',
    price: 10000,
    weight: 0,
    description:
      'Once per day as a standard action, transfer an ongoing single-target spell (up to 3rd level) into the tattoo. ' +
      'Spell effects are suppressed and duration suspended. Standard action to bring it back into effect on yourself.',
    construction: { feats: ['Inscribe Magical Tattoo'], spells: ['mnemonic enhancer'], cost: 5000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.reservoir_tattoo_store_spell', value: 0, source: 'Reservoir Tattoo' }],
  },
  {
    id: 'wondrous-runeward-tattoo',
    name: 'Runeward Tattoo',
    category: 'wondrous',
    source: 'Magical Marketplace',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 1,
    slot: 'none',
    price: 1000,
    weight: 0,
    description:
      'Keyed to a single magic school. Detect magic at will for that school only. +1 insight on saves vs. spells/SLAs of that ' +
      'school. Aware when such magic is cast within 60 ft.',
    construction: { feats: ['Inscribe Magical Tattoo'], spells: ['detect magic', 'guidance'], cost: 500 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'continuous',
    effects: [
      { type: 'bonus', bonusType: 'insight', target: 'save.all', value: 1, source: 'Runeward Tattoo', condition: { type: 'custom', params: {}, description: 'vs. spells and SLAs of the keyed school' } },
    ],
  },
  {
    id: 'wondrous-tengu-drinking-jug',
    name: 'Tengu Drinking Jug',
    category: 'wondrous',
    source: 'Advanced Race Guide',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 3,
    slot: 'none',
    price: 1000,
    weight: 2,
    description:
      'Stoneware jug with painted black birds holding up to 1 gallon. Automatically purifies any liquid placed inside. ' +
      'Adjust temperature 3/day (ice-cold to boiling). 1/day transform water into plum liquor, sake, or tea.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['prestidigitation', 'purify food and drink'], cost: 500 },
    physicalStats: { hardness: 2, hitPoints: 3, breakDC: 12 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.tengu_jug_purify_transform', value: 0, source: 'Tengu Drinking Jug' }],
  },
  {
    id: 'wondrous-third-eye',
    name: 'Third Eye',
    category: 'wondrous',
    source: 'Curse of the Crimson Throne',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.DIVINATION }],
    casterLevel: 11,
    slot: 'none',
    price: 20000,
    weight: 0,
    description:
      'Eye grafted into the palm. Undetectable when closed. See through donor creature\'s remaining eye and view areas with ' +
      'specially prepared bloodstones. When open in unoccupied hand: all-round vision, +4 Perception, no flanking. ' +
      '3/day clairaudience/clairvoyance. Cannot be transferred; destroyed if removed.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['clairaudience/clairvoyance'], cost: 10000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [
      { type: 'bonus', target: 'skill.perception', value: 4, source: 'Third Eye', condition: { type: 'custom', params: {}, description: 'open in unoccupied hand only' } },
    ],
  },
  // Deferred items (AoN pages did not render):
  // Tattoo (Kin's Face), Tattoo (Mesmerizing), Tattoo (Penumbra), Tattoo (Radiant),
  // Tattoo (Serpentine), Tattoo (Spell), Tattoo (Swirling Smoke), Tattoo (Viper),
  // Tattoo (Weapon), Teleporting Climbing Rig, Thoqqua Snake, Threshold Guardian,
  // Thunder Fang, Thunder Strap, Thundering Collar, Tidefinder, Tiller's Pendant,
  // Toastmaster's Teacup, Token (Mother-Sphinx), Token (Shield)
];
