import type { PhrenicAmplificationEntry } from '@/types/classOptions';
import { phrenicAmplificationsStandard } from './raw/phrenicAmplifications_standard';
import { phrenicAmplificationsMajor } from './raw/phrenicAmplifications_major';

export const ALL_PHRENIC_AMPLIFICATIONS: PhrenicAmplificationEntry[] = [
  ...phrenicAmplificationsStandard,
  ...phrenicAmplificationsMajor,
];

export const getPhrenicAmplificationById = (id: string): PhrenicAmplificationEntry | undefined =>
  ALL_PHRENIC_AMPLIFICATIONS.find((a) => a.id === id);

export const getPhrenicAmplificationsByTier = (
  tier: 'standard' | 'major'
): PhrenicAmplificationEntry[] =>
  ALL_PHRENIC_AMPLIFICATIONS.filter((a) => a.amplificationTier === tier);
