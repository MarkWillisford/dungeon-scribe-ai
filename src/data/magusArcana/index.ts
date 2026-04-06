import type { MagusArcanaEntry } from '@/types/classOptions';
import { magusArcanaUm } from './magusArcana-um';
import { magusArcanaUc } from './magusArcana-uc';
import { magusArcanaSupp1 } from './magusArcana-supp1';
import { magusArcanaSupp2 } from './magusArcana-supp2';

export { magusArcanaUm, magusArcanaUc, magusArcanaSupp1, magusArcanaSupp2 };

export const ALL_MAGUS_ARCANA: MagusArcanaEntry[] = [
  ...magusArcanaUm,
  ...magusArcanaUc,
  ...magusArcanaSupp1,
  ...magusArcanaSupp2,
];
