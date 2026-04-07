import type { NinjaTrickEntry } from '@/types/classOptions';
import { ninjaTricksStandard } from './ninjaTricks-standard';
import { ninjaTricksMaster } from './ninjaTricks-master';

export { ninjaTricksStandard, ninjaTricksMaster };

export const ALL_NINJA_TRICKS: NinjaTrickEntry[] = [...ninjaTricksStandard, ...ninjaTricksMaster];

export const getNinjaTrickById = (id: string): NinjaTrickEntry | undefined =>
  ALL_NINJA_TRICKS.find((t) => t.id === id);

export const getNinjaTrickByName = (name: string): NinjaTrickEntry | undefined => {
  const lower = name.toLowerCase();
  return ALL_NINJA_TRICKS.find((t) => t.name.toLowerCase() === lower);
};

export const getStandardTricks = (): NinjaTrickEntry[] =>
  ALL_NINJA_TRICKS.filter((t) => t.trickTier === 'standard');

export const getMasterTricks = (): NinjaTrickEntry[] =>
  ALL_NINJA_TRICKS.filter((t) => t.trickTier === 'master');
