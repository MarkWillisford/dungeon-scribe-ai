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
    description: `3/day ${desc} (${featName} feat). ${tier === 'lesser' ? 'Lesser' : tier === 'normal' ? 'Normal' : 'Greater'}: up to ${maxLevel}-level spells.`,
    construction: { feats: ['Craft Rod', featName], spells: [], cost: Math.floor(price / 2) },
    physicalStats: { hardness: 10, hitPoints: 10, breakDC: 27 },
    requiresFreeHand: true, activationCategory: 'use_activated', effects: [],
    metamagicType: featName, metamagicTier: tier,
  };
}

// Prices by spell level adjustment
const P2 = [9000, 32500, 73000] as const;    // +2 level
const P3 = [14000, 54000, 121500] as const;  // +3 level
const tiers = ['lesser', 'normal', 'greater'] as const;

export const rodsBatch4: RodDefinition[] = [
  // ═══ +2 Level Metamagic Rods ═══
  ...tiers.map((t, i) => mmRod('burning', 'Burning', 'Ultimate Equipment', t, P2[i],
    'cause fire spells to set targets on fire (1d6 fire/round, Ref DC 15 to extinguish)', 'Burning Spell')),
  ...tiers.map((t, i) => mmRod('concussive', 'Concussive', 'Ultimate Equipment', t, P2[i],
    'cause sonic-descriptor spells to deal 1d6 nonlethal per actual spell level to targets that take sonic damage', 'Concussive Spell')),
  ...tiers.map((t, i) => mmRod('persistent', 'Persistent', 'Advanced Player\'s Guide', t, P2[i],
    'force targets to save twice against a spell and take the worse result', 'Persistent Spell')),
  ...tiers.map((t, i) => mmRod('sickening', 'Sickening', 'Ultimate Equipment', t, P2[i],
    'cause targets that take damage or fail saves to become sickened for rounds equal to original spell level', 'Sickening Spell')),
  ...tiers.map((t, i) => mmRod('thanatopic', 'Thanatopic', 'Ultimate Equipment', t, P2[i],
    'cause death effects and negative energy spells to ignore undead immunity, treating them as living for the spell', 'Thanatopic Spell')),
  ...tiers.map((t, i) => mmRod('threnodic', 'Threnodic', 'Ultimate Equipment', t, P2[i],
    'cause mind-affecting spells to affect undead as if they were living (not mindless)', 'Threnodic Spell')),
  ...tiers.map((t, i) => mmRod('thundering', 'Thundering', 'Ultimate Equipment', t, P2[i],
    'cause spells with sonic descriptor to deafen targets for rounds equal to original spell level on failed save', 'Thundering Spell')),
  // ═══ +3 Level Metamagic Rods ═══
  ...tiers.map((t, i) => mmRod('dazing', 'Dazing', 'Ultimate Equipment', t, P3[i],
    'cause spells that deal damage to also daze targets for rounds equal to original spell level (Fort negates)', 'Dazing Spell')),
  ...tiers.map((t, i) => mmRod('echoing', 'Echoing', 'Ultimate Equipment', t, P3[i],
    'cast a spell that can be cast again on the next round without expending another spell slot', 'Echoing Spell')),
  ...tiers.map((t, i) => mmRod('widen', 'Widen', 'Ultimate Equipment', t, P3[i],
    'double the area of burst, emanation, or spread spells', 'Widen Spell')),
  // Deferred: Metamagic Rod Snuffing (Blood of Shadows), Familiar (Animal Archive) — niche sources
];
