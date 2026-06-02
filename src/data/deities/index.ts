// SEEDING ONLY — do not use in runtime app code.
// This array seeds Firestore. All runtime reads go through GameDataService → FirestoreGameDataConnector.

import { DeityEntry } from '@/types/deities';
import { batch_001 } from './raw/deities_batch_001';
import { batch_002 } from './raw/deities_batch_002';
import { batch_003 } from './raw/deities_batch_003';
import { batch_004 } from './raw/deities_batch_004';
import { batch_005 } from './raw/deities_batch_005';
import { batch_006 } from './raw/deities_batch_006';
import { batch_007 } from './raw/deities_batch_007';
import { batch_008 } from './raw/deities_batch_008';
import { batch_009 } from './raw/deities_batch_009';
import { batch_010 } from './raw/deities_batch_010';
import { batch_011 } from './raw/deities_batch_011';
import { batch_012 } from './raw/deities_batch_012';
import { batch_013 } from './raw/deities_batch_013';
import { batch_014 } from './raw/deities_batch_014';
import { batch_015 } from './raw/deities_batch_015';
import { batch_016 } from './raw/deities_batch_016';
import { batch_017 } from './raw/deities_batch_017';
import { batch_018 } from './raw/deities_batch_018';
import { batch_019 } from './raw/deities_batch_019';
import { batch_020 } from './raw/deities_batch_020';
import { batch_021 } from './raw/deities_batch_021';
import { batch_022 } from './raw/deities_batch_022';
import { batch_023 } from './raw/deities_batch_023';
import { batch_024 } from './raw/deities_batch_024';
import { batch_025 } from './raw/deities_batch_025';
import { batch_026 } from './raw/deities_batch_026';
import { batch_027 } from './raw/deities_batch_027';
import { milani } from './milani';
import { iomedae } from './iomedae';

// All deities from batch files (milani and iomedae appear in batch_003 and batch_001
// respectively; seed script uses upsert so duplicates are safe).
// Hand-authored files are added last so they take precedence on deduplication.
const batchDeities: DeityEntry[] = [
  ...batch_001,
  ...batch_002,
  ...batch_003,
  ...batch_004,
  ...batch_005,
  ...batch_006,
  ...batch_007,
  ...batch_008,
  ...batch_009,
  ...batch_010,
  ...batch_011,
  ...batch_012,
  ...batch_013,
  ...batch_014,
  ...batch_015,
  ...batch_016,
  ...batch_017,
  ...batch_018,
  ...batch_019,
  ...batch_020,
  ...batch_021,
  ...batch_022,
  ...batch_023,
  ...batch_024,
  ...batch_025,
  ...batch_026,
  ...batch_027,
];

// Deduplicate: hand-authored entries override batch entries for the same id.
const handAuthored: DeityEntry[] = [milani, iomedae];
const handAuthoredIds = new Set(handAuthored.map((d) => d.id));
export const ALL_DEITIES: DeityEntry[] = [
  ...batchDeities.filter((d) => !handAuthoredIds.has(d.id)),
  ...handAuthored,
];

export const getDeityById = (id: string): DeityEntry | undefined =>
  ALL_DEITIES.find((d) => d.id === id);

export const getDeityByName = (name: string): DeityEntry | undefined =>
  ALL_DEITIES.find((d) => d.name.toLowerCase() === name.toLowerCase());
