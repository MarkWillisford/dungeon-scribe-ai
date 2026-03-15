import { ClassOptionDocument } from '@/types/classOptions';
import { batch_001 } from './raw/ragepowers_batch_001';
import { batch_002 } from './raw/ragepowers_batch_002';

export const ALL_RAGE_POWERS: ClassOptionDocument[] = [...batch_001, ...batch_002];

export const getRagePowerById = (id: string): ClassOptionDocument | undefined =>
  ALL_RAGE_POWERS.find((p) => p.id === id);

export const getRagePowerByName = (name: string): ClassOptionDocument | undefined =>
  ALL_RAGE_POWERS.find((p) => p.name.toLowerCase() === name.toLowerCase());
