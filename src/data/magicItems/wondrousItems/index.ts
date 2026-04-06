// Wondrous Items — re-exports all batch files
// Engineer 1 (Mark): A–L batches
// Engineer 2 (Doug): M–Z batches (not yet written)

import type { WondrousItemDefinition } from '@/types/magicItems';

// A–B (304 items, 13 batches)
import { wondrousItemsAB1 } from './aB-batch1';
import { wondrousItemsAB2 } from './aB-batch2';
import { wondrousItemsAB3 } from './aB-batch3';
import { wondrousItemsAB4 } from './aB-batch4';
import { wondrousItemsAB5 } from './aB-batch5';
import { wondrousItemsAB6 } from './aB-batch6';
import { wondrousItemsAB7 } from './aB-batch7';
import { wondrousItemsAB8 } from './aB-batch8';
import { wondrousItemsAB9 } from './aB-batch9';
import { wondrousItemsAB10 } from './aB-batch10';
import { wondrousItemsAB11 } from './aB-batch11';
import { wondrousItemsAB12 } from './aB-batch12';
import { wondrousItemsAB13 } from './aB-batch13';

// C–D (252 items, 11 batches)
import { wondrousItemsCD1 } from './cD-batch1';
import { wondrousItemsCD2 } from './cD-batch2';
import { wondrousItemsCD3 } from './cD-batch3';
import { wondrousItemsCD4 } from './cD-batch4';
import { wondrousItemsCD5 } from './cD-batch5';
import { wondrousItemsCD6 } from './cD-batch6';
import { wondrousItemsCD7 } from './cD-batch7';
import { wondrousItemsCD8 } from './cD-batch8';
import { wondrousItemsCD9 } from './cD-batch9';
import { wondrousItemsCD10 } from './cD-batch10';
import { wondrousItemsCD11 } from './cD-batch11';

// E–G (226 items, 9 batches)
import { wondrousItemsEG1 } from './eG-batch1';
import { wondrousItemsEG2 } from './eG-batch2';
import { wondrousItemsEG3 } from './eG-batch3';
import { wondrousItemsEG4 } from './eG-batch4';
import { wondrousItemsEG5 } from './eG-batch5';
import { wondrousItemsEG6 } from './eG-batch6';
import { wondrousItemsEG7 } from './eG-batch7';
import { wondrousItemsEG8 } from './eG-batch8';
import { wondrousItemsEG9 } from './eG-batch9';

// H–L (210 items, 9 batches)
import { wondrousItemsHL1 } from './hL-batch1';
import { wondrousItemsHL2 } from './hL-batch2';
import { wondrousItemsHL3 } from './hL-batch3';
import { wondrousItemsHL4 } from './hL-batch4';
import { wondrousItemsHL5 } from './hL-batch5';
import { wondrousItemsHL6 } from './hL-batch6';
import { wondrousItemsHL7 } from './hL-batch7';
import { wondrousItemsHL8 } from './hL-batch8';
import { wondrousItemsHL9 } from './hL-batch9';

// M–Z batches will be imported here once Doug's work is merged.

export const ALL_WONDROUS_ITEMS: WondrousItemDefinition[] = [
  ...wondrousItemsAB1,
  ...wondrousItemsAB2,
  ...wondrousItemsAB3,
  ...wondrousItemsAB4,
  ...wondrousItemsAB5,
  ...wondrousItemsAB6,
  ...wondrousItemsAB7,
  ...wondrousItemsAB8,
  ...wondrousItemsAB9,
  ...wondrousItemsAB10,
  ...wondrousItemsAB11,
  ...wondrousItemsAB12,
  ...wondrousItemsAB13,
  ...wondrousItemsCD1,
  ...wondrousItemsCD2,
  ...wondrousItemsCD3,
  ...wondrousItemsCD4,
  ...wondrousItemsCD5,
  ...wondrousItemsCD6,
  ...wondrousItemsCD7,
  ...wondrousItemsCD8,
  ...wondrousItemsCD9,
  ...wondrousItemsCD10,
  ...wondrousItemsCD11,
  ...wondrousItemsEG1,
  ...wondrousItemsEG2,
  ...wondrousItemsEG3,
  ...wondrousItemsEG4,
  ...wondrousItemsEG5,
  ...wondrousItemsEG6,
  ...wondrousItemsEG7,
  ...wondrousItemsEG8,
  ...wondrousItemsEG9,
  ...wondrousItemsHL1,
  ...wondrousItemsHL2,
  ...wondrousItemsHL3,
  ...wondrousItemsHL4,
  ...wondrousItemsHL5,
  ...wondrousItemsHL6,
  ...wondrousItemsHL7,
  ...wondrousItemsHL8,
  ...wondrousItemsHL9,
];
