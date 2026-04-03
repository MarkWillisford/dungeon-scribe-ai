import type { WondrousItemDefinition } from '@/types/magicItems';
import { AuraStrength, MagicSchool } from '@/types/equipment';

export const wondrousItemsMP9: WondrousItemDefinition[] = [
  {
    id: 'wondrous-pathfinder-pouch',
    name: 'Pathfinder Pouch',
    category: 'wondrous',
    source: 'Seekers of Secrets',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.CONJURATION }],
    casterLevel: 9,
    slot: 'none',
    price: 1000,
    weight: 1,
    description:
      'This belt pouch does not detect as magical (as magic aura) but acts as a very small bag of holding with a 10 lb limit ' +
      'and 2 cubic feet capacity. Via command word, the extradimensional space can be sealed, making the pouch appear ordinary ' +
      'and hiding all contents. Items remain accessible once reopened.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['magic aura', 'secret chest'], cost: 1000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'command_word',
    effects: [{ type: 'special', target: 'special.pathfinder_pouch_hidden_storage', value: 0, source: 'Pathfinder Pouch' }],
  },
  {
    id: 'wondrous-prayer-wheel-of-ethical-strength',
    name: 'Prayer Wheel of Ethical Strength',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'none',
    price: 10000,
    weight: 3,
    description:
      'A cylindrical wooden block with sacred or profane mantras covering its outer face, rotating around a decorative brass ' +
      'spindle. Once per day, the user can spin the wheel as a standard action to receive a bonus on a single attack roll, ' +
      'saving throw, or skill check aligned with the mantras\' ethical stance.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['bless', 'prayer'], cost: 5000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.prayer_wheel_ethical', value: 0, source: 'Prayer Wheel of Ethical Strength' }],
  },
  {
    id: 'wondrous-pressure-suit',
    name: 'Pressure Suit',
    category: 'wondrous',
    source: 'Distant Worlds',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION }],
    casterLevel: 5,
    slot: 'body',
    price: 4000,
    weight: 30,
    description:
      'This full-body suit protects from temperature extremes and vacuum. It provides 3 days of breathable air before recharge. ' +
      'A broken seal causes air loss in 2d6 rounds. Self-repairs minor punctures but critical hits can breach the seal (Reflex save). ' +
      'Repairs need DC 18 Craft check or make whole. Imposes -1 armor check penalty and occupies both body and helm slots.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['endure elements', 'gust of wind'], cost: 2000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'continuous',
    effects: [
      { type: 'special', target: 'special.pressure_suit_vacuum_protection', value: 0, source: 'Pressure Suit' },
      { type: 'penalty', target: 'special.armor_check', value: -1, source: 'Pressure Suit' },
    ],
  },
  {
    id: 'wondrous-pyxes-of-redirected-focus',
    name: 'Pyxes of Redirected Focus',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 9,
    slot: 'none',
    price: 1000,
    weight: 0,
    description:
      'This metallic container holds a coin-sized wooden token inscribed with prayers. Once daily, clerics or classes with ' +
      'domain spells may swap any prepared domain spell with a domain spell of the same level from their other domain. ' +
      'No effect on characters lacking domain spells or possessing only one domain.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['prayer'], cost: 500 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.pyxes_domain_swap', value: 0, source: 'Pyxes of Redirected Focus' }],
  },
  {
    id: 'wondrous-quill-of-passage',
    name: 'Quill of Passage',
    category: 'wondrous',
    source: "Merchant's Manifest",
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'none',
    price: 5000,
    weight: 0,
    description:
      'A black-feathered quill with a glowing nib. Three times daily, the bearer can draw a doorway on a wall (max 6 inches ' +
      'thick) by placing the nib against it and speaking a command word. The magical portal remains for 10 minutes, allowing ' +
      'creatures to enter as a move action. The space beyond must be unobstructed.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['knock', 'open/shut'], cost: 2500 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'command_word',
    effects: [{ type: 'special', target: 'special.quill_of_passage_portal', value: 0, source: 'Quill of Passage' }],
  },
  // Deferred items (AoN pages did not render):
  // Firefoot Powder, Preserving Flask, Preyfinder, Primal Dowser, Propagation Pod,
  // Protective Ruff, Psychic Aurascope, Pull-Ring of Scent, Pyre Bead, Pyre Salt
];
