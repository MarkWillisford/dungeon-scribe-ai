import type { MagicShieldDefinition } from '@/types/magicItems';
import { AuraStrength, MagicSchool } from '@/types/equipment';

// Note: Darkwood Shield (257 gp) and Mithral Heavy Shield (1,020 gp) are non-magical
// special material items (no enhancement bonus) and do not fit MagicShieldDefinition.
// They should be represented in the mundane/special materials equipment data instead.

export const specificShieldsBatch1: MagicShieldDefinition[] = [
  {
    id: 'shield-casters-shield',
    name: "Caster's Shield",
    category: 'magic_shield', source: 'PRPG Core Rulebook', isOfficial: true,
    verificationStatus: 'needs_review' as const,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION }],
    casterLevel: 6, slot: 'shield', price: 3153, weight: 5,
    description: '+1 light wooden shield. The interior surface can store one scroll of any arcane or divine spell (up to 3rd level). The stored scroll does not take up a hand slot; it can be retrieved and used normally. A new scroll can be added at any time.',
    construction: { feats: ['Craft Magic Arms and Armor'], spells: ['calm emotions'], cost: 1576 },
    physicalStats: { hardness: 5, hitPoints: 7, breakDC: 16 },
    activationCategory: 'continuous', effects: [],
    baseShieldId: 'light_wooden_shield', enhancementBonus: 1, shieldSpecialAbilities: [],
  },
  {
    id: 'shield-spined',
    name: 'Spined Shield',
    category: 'magic_shield', source: 'PRPG Core Rulebook', isOfficial: true,
    verificationStatus: 'needs_review' as const,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION }],
    casterLevel: 6, slot: 'shield', price: 5580, weight: 15,
    description: '+1 heavy steel shield covered in iron spines. Three times per day as a free action, the wielder can fire one to three of the shield\'s spines as ranged attacks (range increment 30 ft, 1d6+1 piercing). The spines regrow at midnight.',
    construction: { feats: ['Craft Magic Arms and Armor'], spells: ['magic missile'], cost: 2790 },
    physicalStats: { hardness: 10, hitPoints: 20, breakDC: 23 },
    activationCategory: 'use_activated', effects: [],
    baseShieldId: 'heavy_steel_shield', enhancementBonus: 1, shieldSpecialAbilities: [],
  },
  {
    id: 'shield-lions-shield',
    name: "Lion's Shield",
    category: 'magic_shield', source: 'PRPG Core Rulebook', isOfficial: true,
    verificationStatus: 'needs_review' as const,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 10, slot: 'shield', price: 9170, weight: 15,
    description: '+2 heavy steel shield crafted in the shape of a lion\'s head. Three times per day, the shield\'s lion head can bite an adjacent foe as a free action (attack at the wielder\'s full BAB, dealing 2d6+3 damage).',
    construction: { feats: ['Craft Magic Arms and Armor'], spells: ['summon monster V'], cost: 4585 },
    physicalStats: { hardness: 10, hitPoints: 20, breakDC: 25 },
    activationCategory: 'use_activated', effects: [],
    baseShieldId: 'heavy_steel_shield', enhancementBonus: 2, shieldSpecialAbilities: [],
  },
  {
    id: 'shield-winged-shield',
    name: 'Winged Shield',
    category: 'magic_shield', source: 'PRPG Core Rulebook', isOfficial: true,
    verificationStatus: 'needs_review' as const,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5, slot: 'shield', price: 17257, weight: 10,
    description: '+3 heavy wooden shield with carved wings on the face. Once per day on command, the wielder can fly (as the fly spell, CL 5, 5 minutes duration).',
    construction: { feats: ['Craft Magic Arms and Armor'], spells: ['fly'], cost: 8628 },
    physicalStats: { hardness: 5, hitPoints: 15, breakDC: 22 },
    activationCategory: 'command_word',
    effects: [],
    spellLikeAbilities: [
      { spells: [{ spellId: 'fly', spellName: 'Fly', casterLevel: 5, usesPerDay: 1, activationAction: 'standard' }] },
    ],
    baseShieldId: 'heavy_wooden_shield', enhancementBonus: 3, shieldSpecialAbilities: [],
  },
  {
    id: 'shield-absorbing-shield',
    name: 'Absorbing Shield',
    category: 'magic_shield', source: 'PRPG Core Rulebook', isOfficial: true,
    verificationStatus: 'needs_review' as const,
    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 17, slot: 'shield', price: 50170, weight: 15,
    description: '+1 heavy steel shield. Twice per day, on a successful melee touch attack, the shield can disintegrate any one nonliving object touched (as disintegrate, no save). Against living creatures, on a touch attack the target takes 2d6 damage and may be reduced to dust if slain.',
    construction: { feats: ['Craft Magic Arms and Armor'], spells: ['disintegrate'], cost: 25085 },
    physicalStats: { hardness: 10, hitPoints: 20, breakDC: 23 },
    activationCategory: 'use_activated', effects: [],
    baseShieldId: 'heavy_steel_shield', enhancementBonus: 1, shieldSpecialAbilities: [],
  },
];
