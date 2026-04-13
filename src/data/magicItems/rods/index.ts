// Rods — re-exports all batch files
// Engineer 2 (Doug)
import type { RodDefinition } from '@/types/magicItems';
import { rodsBatch1 } from './rods-batch1';
import { rodsBatch2 } from './rods-batch2';
import { rodsBatch3 } from './rods-batch3';
import { rodsBatch4 } from './rods-batch4';

export const ALL_RODS: RodDefinition[] = [
  ...rodsBatch1,
  ...rodsBatch2,
  ...rodsBatch3,
  ...rodsBatch4,
];
