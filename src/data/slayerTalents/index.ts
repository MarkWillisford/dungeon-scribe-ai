import type { SlayerTalentEntry } from '@/types/classOptions';
import { slayerTalentsStandard } from './slayerTalents-standard';
import { slayerTalentsAdvanced } from './slayerTalents-advanced';

export { slayerTalentsStandard, slayerTalentsAdvanced };

export const ALL_SLAYER_TALENTS: SlayerTalentEntry[] = [
  ...slayerTalentsStandard,
  ...slayerTalentsAdvanced,
];
