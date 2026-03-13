import type { FeatDefinition } from '@/types/feats';

/**
 * Additional Core Rulebook (PZO1110) feats not included in core.ts.
 */
export const CORE_EXTRA_FEATS: FeatDefinition[] = [
  // ==================== GENERAL FEATS ====================
  {
    id: 'extra_performance',
    name: 'Extra Performance',
    description:
      'You can use your bardic performance ability more often than normal. You can use bardic performance for 6 additional rounds per day.',
    shortDescription: 'Use bardic performance for 6 additional rounds per day',
    source: 'Core Rulebook',
    types: ['general'],
    prerequisites: [{ type: 'class_feature', featureName: 'bardic performance' }],
    effects: [],
    activationMode: 'passive',
    tags: ['bard', 'bardic performance', 'uses'],
  },
  // ==================== COMBAT FEATS ====================
  {
    id: 'defensive_combat_training',
    name: 'Defensive Combat Training',
    description:
      'You excel at defending yourself from all manner of combat maneuvers. You treat your total Hit Dice as your base attack bonus when calculating your Combat Maneuver Defense (see Chapter 8).',
    shortDescription: 'Use total Hit Dice as BAB for CMD',
    source: 'Core Rulebook',
    types: ['combat'],
    prerequisites: [],
    effects: [],
    activationMode: 'passive',
    tags: ['cmd', 'combat maneuver', 'defense'],
  },
  // ==================== CRITICAL FEATS ====================
  {
    id: 'deafening_critical',
    name: 'Deafening Critical',
    description:
      'Your critical hits cause opponents to become deafened. Whenever you score a critical hit against an opponent, the victim is permanently deafened. A successful Fortitude save reduces the deafness to 1 round. The DC of this Fortitude save is equal to 10 + your base attack bonus. This feat has no effect on deaf creatures.',
    shortDescription: 'Critical hits permanently deafen opponents (Fort negates)',
    source: 'Core Rulebook',
    types: ['combat', 'critical'],
    prerequisites: [
      { type: 'feat', featId: 'critical_focus' },
      { type: 'bab', minimum: 13 },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['critical', 'deafen', 'condition'],
  },
];
