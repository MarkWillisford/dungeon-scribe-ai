// SEEDING ONLY — do not use in runtime app code.
// This array seeds Firestore. All runtime reads go through GameDataService → FirestoreGameDataConnector.

import type { MesmeristTrickEntry } from '@/types/classOptions';
import { mesmeristTricksBatch1 } from './mesmerist-tricks-batch1';
import { mesmeristTricksBatch2 } from './mesmerist-tricks-batch2';

export { mesmeristTricksBatch1, mesmeristTricksBatch2 };

export const ALL_MESMERIST_TRICKS: MesmeristTrickEntry[] = [
  ...mesmeristTricksBatch1,
  ...mesmeristTricksBatch2,
];

export const getMesmeristTrickById = (id: string): MesmeristTrickEntry | undefined =>
  ALL_MESMERIST_TRICKS.find((t) => t.id === id);

export const getMesmeristTrickByName = (name: string): MesmeristTrickEntry | undefined =>
  ALL_MESMERIST_TRICKS.find((t) => t.name.toLowerCase() === name.toLowerCase());

export const getMesmeristTricksByTier = (tier: 'standard' | 'masterful'): MesmeristTrickEntry[] =>
  ALL_MESMERIST_TRICKS.filter((t) => t.trickTier === tier);
