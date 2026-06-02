// SEEDING ONLY — do not use in runtime app code.
// This array seeds Firestore. All runtime reads go through GameDataService → FirestoreGameDataConnector.

// Staves — re-exports all batch files
// Engineer 2 (Doug)
import type { StaffDefinition } from '@/types/magicItems';
import { stavesBatch1 } from './staves-batch1';
import { stavesBatch2 } from './staves-batch2';
import { stavesBatch3 } from './staves-batch3';
import { stavesFill } from './staves-fill';

export const ALL_STAVES: StaffDefinition[] = [
  ...stavesBatch1,
  ...stavesBatch2,
  ...stavesBatch3,
  ...stavesFill,
];
