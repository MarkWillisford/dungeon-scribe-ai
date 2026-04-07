import type { KineticistWildTalentEntry } from '@/types/classOptions';
import { wildTalentsInfusionsBatch1 } from './raw/wildTalents_infusions_batch1';
import { wildTalentsInfusionsBatch2 } from './raw/wildTalents_infusions_batch2';
import { wildTalentsInfusionsBatch3 } from './raw/wildTalents_infusions_batch3';
import { wildTalentsUtilitiesBatch1 } from './raw/wildTalents_utilities_batch1';
import { wildTalentsUtilitiesBatch2 } from './raw/wildTalents_utilities_batch2';
import { wildTalentsUtilitiesBatch3 } from './raw/wildTalents_utilities_batch3';
import { wildTalentsUtilitiesBatch4 } from './raw/wildTalents_utilities_batch4';
import { wildTalentsUtilitiesBatch5 } from './raw/wildTalents_utilities_batch5';
import { wildTalentsUtilitiesBatch6 } from './raw/wildTalents_utilities_batch6';
import { wildTalentsUtilitiesBatch7 } from './raw/wildTalents_utilities_batch7';

export const ALL_WILD_TALENTS: KineticistWildTalentEntry[] = [
  ...wildTalentsInfusionsBatch1,
  ...wildTalentsInfusionsBatch2,
  ...wildTalentsInfusionsBatch3,
  ...wildTalentsUtilitiesBatch1,
  ...wildTalentsUtilitiesBatch2,
  ...wildTalentsUtilitiesBatch3,
  ...wildTalentsUtilitiesBatch4,
  ...wildTalentsUtilitiesBatch5,
  ...wildTalentsUtilitiesBatch6,
  ...wildTalentsUtilitiesBatch7,
];

export const ALL_INFUSIONS: KineticistWildTalentEntry[] = ALL_WILD_TALENTS.filter(
  (t) => t.talentType === 'infusion'
);

export const ALL_UTILITY_TALENTS: KineticistWildTalentEntry[] = ALL_WILD_TALENTS.filter(
  (t) => t.talentType === 'utility'
);

export const getWildTalentById = (id: string): KineticistWildTalentEntry | undefined =>
  ALL_WILD_TALENTS.find((t) => t.id === id);

export const getWildTalentsByElement = (element: string): KineticistWildTalentEntry[] =>
  ALL_WILD_TALENTS.filter((t) => t.element === element);
