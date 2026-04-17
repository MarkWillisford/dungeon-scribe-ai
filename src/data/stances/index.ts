// Stances — barrel export for the initiating system catalog.
// Raw per-bundle files live in raw/ and are spread into ALL_STANCES.
//
// Scraped per plans/data-scraping/path-of-war-scraping.md Phase 3.

import type { StanceDefinition } from '@/types/initiating';

// Path of War
import { POW_STANCES_1 } from './raw/pow-stances-1';
import { POW_STANCES_2 } from './raw/pow-stances-2';

// Path of War: Expanded
import { POWE_STANCES_1 } from './raw/powe-stances-1';
import { POWE_STANCES_2 } from './raw/powe-stances-2';

export const ALL_STANCES: StanceDefinition[] = [
  ...POW_STANCES_1,
  ...POW_STANCES_2,
  ...POWE_STANCES_1,
  ...POWE_STANCES_2,
];

export function getStanceById(id: string): StanceDefinition | undefined {
  return ALL_STANCES.find((s) => s.id === id);
}

export function getStancesByDiscipline(disciplineId: string): StanceDefinition[] {
  return ALL_STANCES.filter((s) => s.disciplineId === disciplineId);
}

export function getStancesByLevel(level: number): StanceDefinition[] {
  return ALL_STANCES.filter((s) => s.level === level);
}
