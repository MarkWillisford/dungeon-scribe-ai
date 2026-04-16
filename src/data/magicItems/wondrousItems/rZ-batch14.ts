import type { WondrousItemDefinition } from '@/types/magicItems';
import { AuraStrength, MagicSchool } from '@/types/equipment';

export const wondrousItemsRZ14: WondrousItemDefinition[] = [
  {
    id: 'wondrous-wayfinder',
    name: 'Wayfinder',
    category: 'wondrous',
    source: 'Pathfinder Campaign Setting',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.EVOCATION }],
    casterLevel: 5,
    slot: 'none',
    price: 500,
    weight: 1,
    description:
      'Silver compass with gold accents resembling an Azlanti artifact. Command word produces light (as light spell). ' +
      '+2 circumstance on Survival to avoid getting lost. Includes indentation for mounting one ioun stone, which grants ' +
      'its standard benefits as if orbiting.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['light'], cost: 250 },
    physicalStats: { hardness: 5, hitPoints: 3, breakDC: 15 },
    activationCategory: 'command_word',
    effects: [
      { type: 'bonus', bonusType: 'circumstance', target: 'skill.survival', value: 2, source: 'Wayfinder', condition: { type: 'custom', params: {}, description: 'to avoid becoming lost only' } },
    ],
  },
  {
    id: 'wondrous-well-of-many-worlds',
    name: 'Well of Many Worlds',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.CONJURATION }],
    casterLevel: 17,
    slot: 'none',
    price: 82000,
    weight: 0,
    description:
      'Resembles a portable hole but transports objects to random worlds/planes. Opens to a new random plane when moved. ' +
      'Two-way portal — objects from other worlds can emerge.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['gate'], cost: 41000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.well_many_worlds_random_portal', value: 0, source: 'Well of Many Worlds' }],
  },
  {
    id: 'wondrous-wings-of-flying',
    name: 'Wings of Flying',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 10,
    slot: 'shoulders',
    price: 54000,
    weight: 2,
    description:
      'Black cloak or feathered cape. Command word transforms into bat/bird wings enabling flight at 60 ft/round (average ' +
      'maneuverability) with +5 competence on Fly checks.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['fly'], cost: 27000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'command_word',
    effects: [
      { type: 'grant_movement', target: 'fly', value: 60, source: 'Wings of Flying' },
      { type: 'bonus', bonusType: 'competence', target: 'skill.fly', value: 5, source: 'Wings of Flying' },
    ],
  },
  {
    id: 'wondrous-witching-gown',
    name: 'Witching Gown',
    category: 'wondrous',
    source: 'Pathfinder #47: Ashes at Dawn',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ABJURATION }],
    casterLevel: 7,
    slot: 'body',
    price: 35000,
    weight: 1,
    description:
      'Magical cotton gown providing enhanced saves and social skills for all wearers, doubled for witches. Witches can ' +
      'alter its appearance, gain disguise bonuses, and store a touch spell (4th level or lower) as a spite spell triggering ' +
      'against the next melee attacker.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['charm person', 'disguise self', 'resistance', 'spite'], cost: 17750 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'continuous',
    effects: [{ type: 'special', target: 'special.witching_gown_witch_bonus', value: 0, source: 'Witching Gown' }],
  },
  // Deferred items (AoN pages did not render):
  // Wasp Nest of Swarming, Watchful Tankard, Waters of Transfiguration, Wave Harp,
  // Wavecutter's Figurine, Wax of Defiance, Weirding Watch, Well of Stars,
  // Well of the Welcome Respite, Well (Shadow), Werewhistle, Wheel of Survival,
  // Whisper Safe, Whispering Shell, Whistle of Calling, Whistle (Devastating Dog),
  // Wig (Judge's), Wind-Caller Compass, Wine of Concordance,
  // Wings of Flying (Lesser), Wings of the Gargoyle
];
