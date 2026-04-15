import type { ItemSpecialAbility } from '@/types/magicItems';

// Shield special abilities, batch 3 (item 51).
// Sources: Core Rulebook, Ultimate Equipment, and other Pathfinder 1e supplements.
export const shieldAbilitiesBatch3: ItemSpecialAbility[] = [
  // +4 bonus equivalent
  {
    id: 'shield_energy_resistance_greater',
    name: 'Energy Resistance (Greater)',
    description: 'A shield with this ability grants resistance 30 to one energy type (acid, cold, electricity, fire, or sonic), chosen at creation.',
    bonusEquivalent: 4, casterLevel: 15,
    effects: [],
  },
];
