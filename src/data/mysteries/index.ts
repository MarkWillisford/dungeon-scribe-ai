// SEEDING ONLY — do not use in runtime app code.
// This array seeds Firestore. All runtime reads go through GameDataService → FirestoreGameDataConnector.

import { type MysteryEntry } from '@/types/classOptions';
import { mysteriesBatch001 } from './raw/mysteries_batch_001';

export const ALL_MYSTERIES: MysteryEntry[] = [...mysteriesBatch001];
