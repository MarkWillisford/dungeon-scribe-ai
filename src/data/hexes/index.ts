// SEEDING ONLY — do not use in runtime app code.
// This array seeds Firestore. All runtime reads go through GameDataService → FirestoreGameDataConnector.

import type { HexEntry } from '@/types/classOptions';
import { hexesBatch1 } from './hexes-batch1';
import { hexesBatch2 } from './hexes-batch2';
import { hexesMajor } from './hexes-major';
import { hexesGrand } from './hexes-grand';

export { hexesBatch1, hexesBatch2, hexesMajor, hexesGrand };

export const ALL_HEXES: HexEntry[] = [...hexesBatch1, ...hexesBatch2, ...hexesMajor, ...hexesGrand];
