import type { InvestigatorTalentEntry } from '@/types/classOptions';
import { investigatorTalentsBatch1 } from './investigatorTalents-batch1';
import { investigatorTalentsBatch2 } from './investigatorTalents-batch2';
import { investigatorTalentsBatch3 } from './investigatorTalents-batch3';

export { investigatorTalentsBatch1, investigatorTalentsBatch2, investigatorTalentsBatch3 };

export const ALL_INVESTIGATOR_TALENTS: InvestigatorTalentEntry[] = [
  ...investigatorTalentsBatch1,
  ...investigatorTalentsBatch2,
  ...investigatorTalentsBatch3,
];
