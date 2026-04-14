import type { WondrousItemDefinition } from '@/types/magicItems';
import { AuraStrength, MagicSchool } from '@/types/equipment';

export const wondrousItemsCD11: WondrousItemDefinition[] = [
  // ---- 251: Dweomer's Essence -----------------------------------------------
  {
    id: "wondrous-dweomers-essence",
    name: "Dweomer's Essence",
    category: 'wondrous',
    source: 'Pathfinder Society Field Guide',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ABJURATION }],
    casterLevel: 9,
    slot: 'none',

    price: 500,
    weight: 0,

    description:
      "Derived from the patient distillation of rare magical reagents, a pinch of this fine white powder " +
      "can be added to the casting of any spell as an additional material component to give the spellcaster " +
      "a +5 bonus on caster level checks made to overcome spell resistance.",

    construction: {
      feats: ['Craft Wondrous Item', 'Spell Penetration'],
      spells: [],
      cost: 250,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'bonus',
        bonusType: 'untyped',
        target: 'spell.caster_level_check',
        value: 5,
        source: "Dweomer's Essence",
        condition: {
          type: 'custom',
          params: { descriptor: 'overcome_spell_resistance' },
          description: 'on caster level checks to overcome spell resistance only',
        },
      },
    ],
  },

  // ---- 252: Dye, Truecolor --------------------------------------------------
  {
    id: 'wondrous-dye-truecolor',
    name: 'Dye, Truecolor',
    category: 'wondrous',
    source: 'Dragon Empires Primer',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 1,
    slot: 'none',

    price: 50,
    weight: 0,

    description:
      "This magical dye originates from rare plants found in the lush regions of Tian Xia. When applied to " +
      "a material, it displays colors that vary based on the alignment of the viewer. Good-aligned observers " +
      "perceive it as gold, evil-aligned observers see blood red, and neutral viewers see its actual dull " +
      "orange hue. Historically used by Tian Xia's miracle courts to reveal the alignments of emissaries, " +
      "this secret is now common knowledge; a DC 25 Knowledge (geography or nature) check can identify the " +
      "dye's properties. One vial covers one square foot of material or inks five pages. The dye is " +
      "permanent once applied, but can be removed with universal solvent.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['detect good', 'detect evil'],
      cost: 25,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.truecolor_dye_alignment_reveal',
        value: 0,
        source: 'Dye, Truecolor',
      },
    ],
  },
];
