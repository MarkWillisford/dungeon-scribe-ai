import type { WondrousItemDefinition } from '@/types/magicItems';
import { AuraStrength, MagicSchool } from '@/types/equipment';

export const wondrousItemsRZ6: WondrousItemDefinition[] = [
  {
    id: 'wondrous-silversheen',
    name: 'Silversheen',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'none',
    price: 250,
    weight: 0,
    description:
      'A shimmering paste that coats weapons to grant alchemical silver properties for 1 hour, displacing other special ' +
      'materials. One vial coats a single melee weapon or 20 units of ammunition.',
    construction: { feats: ['Craft Wondrous Item'], spells: [], cost: 125 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.silversheen_silver_coating', value: 0, source: 'Silversheen' }],
  },
  {
    id: 'wondrous-sleeves-of-many-garments',
    name: 'Sleeves of Many Garments',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ILLUSION }],
    casterLevel: 1,
    slot: 'wrists',
    price: 200,
    weight: 1,
    description:
      'Cloth arm tubes that alter the wearer\'s garment appearance to any nonmagical outfit. New clothes fit perfectly and ' +
      'are always clean and mended unless specifically designated otherwise. Removing the sleeves reverts clothing to original form.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['disguise self'], cost: 100 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.sleeves_many_garments_disguise', value: 0, source: 'Sleeves of Many Garments' }],
  },
  {
    id: 'wondrous-slippers-of-spider-climbing',
    name: 'Slippers of Spider Climbing',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 4,
    slot: 'feet',
    price: 4800,
    weight: 0,
    description:
      'Grants climb speed of 20 ft on vertical surfaces and ceilings with hands free. Functions 10 min/day in 1-min increments. ' +
      'Ineffective on extremely slippery surfaces like ice or greased areas.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['spider climb'], cost: 2400 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'grant_movement', target: 'climb', value: 20, source: 'Slippers of Spider Climbing' }],
  },
  {
    id: 'wondrous-feather-step-slippers',
    name: 'Feather Step Slippers',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 3,
    slot: 'feet',
    price: 2000,
    weight: 1,
    description:
      'Silken slippers activated once daily for 10 minutes to ignore adverse movement effects of difficult terrain (as feather ' +
      'step spell), enabling 5-foot steps in difficult terrain.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['feather step'], cost: 1000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.feather_step_slippers_terrain', value: 0, source: 'Feather Step Slippers' }],
  },
  {
    id: 'wondrous-snapleaf',
    name: 'Snapleaf',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'none',
    price: 750,
    weight: 0,
    description:
      'Crystalline leaf charm worn on a neck strap or clothing. When falling, destroy as an immediate action for simultaneous ' +
      'feather fall and invisibility. Durations are independent — ending one doesn\'t affect the other. Single use.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['feather fall', 'invisibility'], cost: 375 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.snapleaf_feather_fall_invis', value: 0, source: 'Snapleaf' }],
  },
  // Deferred items (AoN pages did not render):
  // Shroud (Spectral), Sigil Chalk, Silver Nail, Silver Nocking Point, Silverfang,
  // Singing Bell of Striking, Sinner's Wage, Skelterhide, Skin Harp,
  // Sky Marines Elite Saddle, Skyspirit Stone, Slippers of Cloud Walking,
  // Slippers of the Primordial Wilds, Slippers of the Triton, Slippers (Acrobat),
  // Slippers (Quick Action), Smear of Seeing, Snake Charmer's Flute,
  // Soaring Cathedra, Soles of the Silent Stride
];
