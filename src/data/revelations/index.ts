// SEEDING ONLY — do not use in runtime app code.
// This array seeds Firestore. All runtime reads go through GameDataService → FirestoreGameDataConnector.

import { type RevelationEntry } from '@/types/classOptions';
import { revelationsBatch001 } from './raw/revelations_batch_001';
import { revelationsBatch002 } from './raw/revelations_batch_002';

export const ALL_REVELATIONS: RevelationEntry[] = [...revelationsBatch001, ...revelationsBatch002];

export const getRevelationById = (id: string): RevelationEntry | undefined =>
  ALL_REVELATIONS.find((r) => r.id === id);

export const getRevelationsByMystery = (mysteryId: string): RevelationEntry[] =>
  ALL_REVELATIONS.filter((r) => r.mysteryId === mysteryId);
