import type { RingDefinition } from '@/types/magicItems';
import { AuraStrength, MagicSchool } from '@/types/equipment';

export const ringsBatch4: RingDefinition[] = [
  {
    id: 'ring-telekinesis',
    name: 'Ring of Telekinesis',
    category: 'ring',
    source: 'Core Rulebook',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 9,
    slot: 'ring',
    price: 75000,
    weight: 0,
    description:
      'Metallic tendrils around red/amber gemstones. Grants telekinesis at will, enabling lifting and manipulating distant objects.',
    construction: { feats: ['Forge Ring'], spells: ['telekinesis'], cost: 37500 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.ring_telekinesis_at_will', value: 0, source: 'Ring of Telekinesis' }],
  },
  {
    id: 'ring-regeneration',
    name: 'Ring of Regeneration',
    category: 'ring',
    source: 'Core Rulebook',
    isOfficial: true,
    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.CONJURATION }],
    casterLevel: 15,
    slot: 'ring',
    price: 90000,
    weight: 0,
    description:
      'White gold ring with large green sapphire. Continuous healing of 1 HP/round, immunity to bleed, and restoration of ' +
      'lost limbs/body parts through regeneration.',
    construction: { feats: ['Forge Ring'], spells: ['regenerate'], cost: 45000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'continuous',
    effects: [
      { type: 'special', target: 'special.ring_regeneration_1hp', value: 1, source: 'Ring of Regeneration' },
      { type: 'immunity', target: 'bleed', value: 0, source: 'Ring of Regeneration' },
    ],
  },
  {
    id: 'ring-spell-turning',
    name: 'Ring of Spell Turning',
    category: 'ring',
    source: 'Core Rulebook',
    isOfficial: true,
    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.ABJURATION }],
    casterLevel: 13,
    slot: 'ring',
    price: 100000,
    weight: 0,
    description:
      'Platinum ring. 3/day, automatically reflects the next 9 levels of spells cast at the wearer (as spell turning).',
    construction: { feats: ['Forge Ring'], spells: ['spell turning'], cost: 50000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.ring_spell_turning_reflect', value: 0, source: 'Ring of Spell Turning' }],
  },
  {
    id: 'ring-three-wishes',
    name: 'Ring of Three Wishes',
    category: 'ring',
    source: 'Core Rulebook',
    isOfficial: true,
    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.UNIVERSAL }],
    casterLevel: 20,
    slot: 'ring',
    price: 120000,
    weight: 0,
    description:
      'Contains three rubies, each storing a wish spell. When a wish is used, that ruby disappears. Loses magic when all ' +
      'three wishes are expended.',
    construction: { feats: ['Forge Ring'], spells: ['wish'], cost: 97500 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.ring_three_wishes', value: 0, source: 'Ring of Three Wishes' }],
  },
  // Deferred items (AoN pages did not render):
  // Ring of Spell Storing, Ring of Continuation, Ring of Inner Fortitude Greater,
  // Ring of Wizardry III/IV, Ring of Djinni Calling, Ring of Elemental Command,
  // Ring of Spell Storing Major
];
