// SEEDING ONLY — do not use in runtime app code.
// This array seeds Firestore. All runtime reads go through GameDataService → FirestoreGameDataConnector.

import type { OccultistFocusPowerEntry, OccultistSchool } from '@/types/classOptions';
import { focusPowersBatch1 } from './raw/focusPowers_batch1';
import { focusPowersBatch2 } from './raw/focusPowers_batch2';
import { focusPowersBatch3 } from './raw/focusPowers_batch3';

export const ALL_OCCULTIST_FOCUS_POWERS: OccultistFocusPowerEntry[] = [
  ...focusPowersBatch1,
  ...focusPowersBatch2,
  ...focusPowersBatch3,
];

export const getFocusPowerById = (id: string): OccultistFocusPowerEntry | undefined =>
  ALL_OCCULTIST_FOCUS_POWERS.find((p) => p.id === id);

export const getFocusPowersBySchool = (school: OccultistSchool): OccultistFocusPowerEntry[] =>
  ALL_OCCULTIST_FOCUS_POWERS.filter((p) => p.school === school);
