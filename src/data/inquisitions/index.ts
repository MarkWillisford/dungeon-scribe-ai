// SEEDING ONLY — do not use in runtime app code.
// This array seeds Firestore. All runtime reads go through GameDataService → FirestoreGameDataConnector.

import { type InquisitionEntry } from '@/types/classOptions';
import { inquisitionsBatch001 } from './raw/inquisitions_batch_001';

export const ALL_INQUISITIONS: InquisitionEntry[] = [...inquisitionsBatch001];
