// SEEDING ONLY — do not use in runtime app code.
// This array seeds Firestore. All runtime reads go through GameDataService → FirestoreGameDataConnector.

import { type CavalierOrderEntry } from '@/types/classOptions';
import { cavalierOrdersBatch001 } from './raw/cavalierorders_batch_001';

export const ALL_CAVALIER_ORDERS: CavalierOrderEntry[] = [...cavalierOrdersBatch001];
