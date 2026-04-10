import type { RodDefinition } from '@/types/magicItems';
import { AuraStrength, MagicSchool } from '@/types/equipment';

// Helper to generate a metamagic rod tier entry
function mmRod(
  idBase: string, nameBase: string, source: string,
  tier: 'lesser' | 'normal' | 'greater',
  price: number, desc: string, featName: string,
): RodDefinition {
  const tierLabel = tier === 'normal' ? '' : tier === 'lesser' ? ' (Lesser)' : ' (Greater)';
  const tierId = tier === 'normal' ? '' : tier === 'lesser' ? '-lesser' : '-greater';
  const maxLevel = tier === 'lesser' ? '3rd' : tier === 'normal' ? '6th' : '9th';
  return {
    id: `rod-metamagic-${idBase}${tierId}`,
    name: `Metamagic Rod, ${nameBase}${tierLabel}`,
    category: 'rod', source, isOfficial: true,
    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.UNIVERSAL }],
    casterLevel: 17, slot: 'none', price, weight: 5,
    description: `3/day ${desc} ${nameBase === tierLabel.trim() ? '' : `(${featName} feat).`} ${tier === 'lesser' ? 'Lesser' : tier === 'normal' ? 'Normal' : 'Greater'}: up to ${maxLevel}-level spells.`,
    construction: { feats: ['Craft Rod', featName], spells: [], cost: Math.floor(price / 2) },
    physicalStats: { hardness: 10, hitPoints: 10, breakDC: 27 },
    requiresFreeHand: true, activationCategory: 'use_activated', effects: [],
    metamagicType: featName, metamagicTier: tier,
  };
}

// Prices by spell level adjustment
const P1 = [3000, 11000, 24500] as const;   // +1 level
const tiers = ['lesser', 'normal', 'greater'] as const;

export const rodsBatch3: RodDefinition[] = [
  // ═══ Rod of Alertness ═══
  {
    id: 'rod-alertness',
    name: 'Rod of Alertness',
    category: 'rod', source: 'Core Rulebook', isOfficial: true,
    aura: [
      { strength: AuraStrength.MODERATE, school: MagicSchool.ABJURATION },
      { strength: AuraStrength.MODERATE, school: MagicSchool.DIVINATION },
      { strength: AuraStrength.MODERATE, school: MagicSchool.ENCHANTMENT },
      { strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION },
    ],
    casterLevel: 11, slot: 'none', price: 85000, weight: 4,
    description: '+1 light mace. +1 insight on initiative. Standard action at-will: detect chaos/evil/good/law/magic, discern lies, light, see invisibility. Plant in ground 1/day: senses hostile creatures 120 ft + prayer 20 ft radius (10 min). 1/day: animate objects (up to 11 Small, 11 rounds).',
    construction: { feats: ['Craft Rod'], spells: ['alarm', 'animate objects', 'detect chaos', 'detect evil', 'detect good', 'detect law', 'detect magic', 'discern lies', 'light', 'prayer', 'see invisibility'], cost: 42500 },
    physicalStats: { hardness: 5, hitPoints: 10, breakDC: 17 },
    requiresFreeHand: true, activationCategory: 'use_activated', effects: [],
  },
  // ═══ +1 Level Metamagic Rods (from UE/APG) ═══
  ...tiers.map((t, i) => mmRod('bouncing', 'Bouncing', 'Ultimate Equipment', t, P1[i],
    'cause spells that target one creature and miss or are saved against to redirect to another target within close range.', 'Bouncing Spell')),
  ...tiers.map((t, i) => mmRod('disruptive', 'Disruptive', 'Advanced Player\'s Guide', t, P1[i],
    'increase the DC of concentration checks to cast defensively within the spell\'s area by +4.', 'Disruptive Spell')),
  ...tiers.map((t, i) => mmRod('ectoplasmic', 'Ectoplasmic', 'Ultimate Equipment', t, P1[i],
    'cast spells that fully affect incorporeal and ethereal creatures.', 'Ectoplasmic Spell')),
  ...tiers.map((t, i) => mmRod('elemental', 'Elemental', 'Ultimate Equipment', t, P1[i],
    'change a spell\'s energy damage type to acid, cold, electricity, or fire.', 'Elemental Spell')),
  ...tiers.map((t, i) => mmRod('enlarge', 'Enlarge', 'Ultimate Equipment', t, P1[i],
    'double a spell\'s range (touch becomes close, close becomes medium, medium becomes long).', 'Enlarge Spell')),
  ...tiers.map((t, i) => mmRod('flaring', 'Flaring', 'Ultimate Equipment', t, P1[i],
    'cause fire/electricity/light spells to dazzle targets for rounds equal to actual spell level.', 'Flaring Spell')),
  ...tiers.map((t, i) => mmRod('focused', 'Focused', 'Ultimate Equipment', t, P1[i],
    'increase the DC of a spell\'s save by +2 when casting on one target only.', 'Focused Spell')),
  ...tiers.map((t, i) => mmRod('intensified', 'Intensified', 'Ultimate Equipment', t, P1[i],
    'increase the maximum damage dice of a spell by 5 levels (e.g., fireball caps at 15d6).', 'Intensified Spell')),
  ...tiers.map((t, i) => mmRod('lingering', 'Lingering', 'Ultimate Equipment', t, P1[i],
    'cause instantaneous-area spells to linger 1 round, dealing damage to creatures entering.', 'Lingering Spell')),
  ...tiers.map((t, i) => mmRod('piercing', 'Piercing', 'Ultimate Equipment', t, P1[i],
    'treat SR as 5 lower when resolving the spell against creatures with spell resistance.', 'Piercing Spell')),
  ...tiers.map((t, i) => mmRod('reach', 'Reach', 'Ultimate Equipment', t, P1[i],
    'increase a spell\'s range one step (touch to close, close to medium, medium to long).', 'Reach Spell')),
  ...tiers.map((t, i) => mmRod('rime', 'Rime', 'Ultimate Equipment', t, P1[i],
    'cause cold-descriptor spells to entangle targets that take cold damage for rounds equal to original spell level.', 'Rime Spell')),
  ...tiers.map((t, i) => mmRod('selective', 'Selective', 'Ultimate Equipment', t, P1[i],
    'exclude up to caster\'s ability modifier creatures from area-of-effect spells.', 'Selective Spell')),
  ...tiers.map((t, i) => mmRod('toppling', 'Toppling', 'Ultimate Equipment', t, P1[i],
    'cause force-descriptor spells to attempt a trip (CMB = CL + casting stat) against damaged targets.', 'Toppling Spell')),
  // Deferred: Metamagic Rod Eclipsed (Blood of Shadows), Murky (Aquatic Adventures), Steam (Aquatic Adventures) — niche sources
];
