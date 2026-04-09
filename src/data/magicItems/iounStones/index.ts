// Ioun Stones — re-exports all batch files
// Engineer 1 (Mark): all 47 standard stones + cracked/flawed variants

import type { IounStoneDefinition } from '@/types/magicItems';

import { iounStonesBatch1 } from './iounStones-batch1';
import { iounStonesBatch2 } from './iounStones-batch2';

export const ALL_IOUN_STONES: IounStoneDefinition[] = [
  ...iounStonesBatch1,
  ...iounStonesBatch2,
];
