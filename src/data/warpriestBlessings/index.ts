// SEEDING ONLY — do not use in runtime app code.
// This array seeds Firestore. All runtime reads go through GameDataService → FirestoreGameDataConnector.

import type { WarpriestBlessingEntry } from '@/types/classOptions';
import { warpriestBlessings1 } from './raw/blessings-batch1';
import { warpriestBlessings2 } from './raw/warpriestblessings_batch_002';

export { warpriestBlessings1, warpriestBlessings2 };

export const ALL_WARPRIEST_BLESSINGS: WarpriestBlessingEntry[] = [
  ...warpriestBlessings1,
  ...warpriestBlessings2,
];
