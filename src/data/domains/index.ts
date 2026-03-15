import { DomainDocument } from '@/types/classOptions';
import { batch_001 } from './raw/domains_batch_001';
import { batch_002 } from './raw/domains_batch_002';
import { batch_003 } from './raw/domains_batch_003';
import { batch_004 } from './raw/domains_batch_004';
import { batch_005 } from './raw/domains_batch_005';
import { batch_006 } from './raw/domains_batch_006';
import { batch_007 } from './raw/domains_batch_007';

export { batch_001, batch_002, batch_003, batch_004, batch_005, batch_006, batch_007 };

export const ALL_DOMAINS: DomainDocument[] = [
  ...batch_001,
  ...batch_002,
  ...batch_003,
  ...batch_004,
  ...batch_005,
  ...batch_006,
  ...batch_007,
];

export const getDomainById = (id: string): DomainDocument | undefined =>
  ALL_DOMAINS.find((d) => d.id === id);
