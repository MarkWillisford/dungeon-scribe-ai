import { type CavalierOrderEntry } from '@/types/classOptions';
import { cavalierOrdersBatch001 } from './raw/cavalierorders_batch_001';

export const ALL_CAVALIER_ORDERS: CavalierOrderEntry[] = [
  ...cavalierOrdersBatch001,
];
