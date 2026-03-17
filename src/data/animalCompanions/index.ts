// src/data/animalCompanions/index.ts
// Combined barrel — merges all raw batches into a single export.
// Batch count: 8  |  Total entries: ~220
// Batches: 001 (Allosaurus–Bustard), 002 (Camel–Elasmotherium),
//          003 (Elephant/Mastodon–Hippocampus), 004 (Hippogriff–Megaloceros),
//          005 (Megatherium–Quetzalcoatlus), 006 (Ram–Tortoise),
//          007 (Trilobite Giant–Zebra, T–Z tail), 008 (Anglerfish–Dire Polar Bear, missed A–E)

import { AnimalCompanionEntry } from '@/types/animalCompanions';
import { batch_001 } from './raw/animalcompanions_batch_001';
import { batch_002 } from './raw/animalcompanions_batch_002';
import { batch_003 } from './raw/animalcompanions_batch_003';
import { batch_004 } from './raw/animalcompanions_batch_004';
import { batch_005 } from './raw/animalcompanions_batch_005';
import { batch_006 } from './raw/animalcompanions_batch_006';
import { batch_007 } from './raw/animalcompanions_batch_007';
import { batch_008 } from './raw/animalcompanions_batch_008';

export const ALL_ANIMAL_COMPANIONS: AnimalCompanionEntry[] = [
  ...batch_001,
  ...batch_002,
  ...batch_003,
  ...batch_004,
  ...batch_005,
  ...batch_006,
  ...batch_007,
  ...batch_008,
];

export { batch_001, batch_002, batch_003, batch_004, batch_005, batch_006, batch_007, batch_008 };

export type { AnimalCompanionEntry };
export type { AnimalCompanionProgressionTier } from '@/types/animalCompanions';
