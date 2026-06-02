// SEEDING ONLY — do not use in runtime app code.
// This array seeds Firestore. All runtime reads go through GameDataService → FirestoreGameDataConnector.

// Rings — re-exports all batch files
// Engineer 2 (Doug)
import type { RingDefinition } from '@/types/magicItems';
import { ringsBatch1 } from './rings-batch1';
import { ringsBatch2 } from './rings-batch2';
import { ringsBatch3 } from './rings-batch3';
import { ringsBatch4 } from './rings-batch4';
import { ringsRecovered } from './rings-recovered';

export const ALL_RINGS: RingDefinition[] = [
  ...ringsBatch1,
  ...ringsBatch2,
  ...ringsBatch3,
  ...ringsBatch4,
  ...ringsRecovered,
];
