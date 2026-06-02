// SEEDING ONLY — do not use in runtime app code.
// This array seeds Firestore. All runtime reads go through GameDataService → FirestoreGameDataConnector.

import type { BloodlineEntry } from '@/types/classOptions';

import { sorcererBloodlinesBatch1 } from './sorcerer-batch1';
import { sorcererBloodlinesBatch2 } from './sorcerer-batch2';
import { sorcererWildblooded } from './sorcerer-wildblooded';
import { bloodragerBloodlinesBatch1 } from './bloodrager-batch1';

export const ALL_BLOODLINES: BloodlineEntry[] = [
  ...sorcererBloodlinesBatch1,
  ...sorcererBloodlinesBatch2,
  ...sorcererWildblooded,
  ...bloodragerBloodlinesBatch1,
];
