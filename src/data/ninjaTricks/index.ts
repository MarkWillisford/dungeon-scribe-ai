import type { NinjaTrickEntry } from '@/types/classOptions';
import { ninjaTricksStandard } from './ninjaTricks-standard';
import { ninjaTricksMaster } from './ninjaTricks-master';

export { ninjaTricksStandard, ninjaTricksMaster };

export const ALL_NINJA_TRICKS: NinjaTrickEntry[] = [...ninjaTricksStandard, ...ninjaTricksMaster];
