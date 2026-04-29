// Martial Traditions — barrel export for the initiating system catalog.
// All traditions live in traditions.ts (Path of War: Expanded only; PoW base has none).
//
// Scraped per plans/data-scraping/path-of-war-scraping.md Phase 7.

import type { MartialTradition } from '@/types/initiating';

import { MARTIAL_TRADITIONS } from './traditions';

export const ALL_MARTIAL_TRADITIONS: MartialTradition[] = [
  ...MARTIAL_TRADITIONS,
];

export function getMartialTraditionById(id: string): MartialTradition | undefined {
  return ALL_MARTIAL_TRADITIONS.find((t) => t.id === id);
}
