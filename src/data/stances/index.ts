// Stances — barrel export for the initiating system catalog.
// Raw per-discipline files live in raw/ and are spread into ALL_STANCES.
//
// Scraped per plans/data-scraping/path-of-war-scraping.md Phase 3.

import type { StanceDefinition } from '@/types/initiating';

export const ALL_STANCES: StanceDefinition[] = [];

export function getStanceById(id: string): StanceDefinition | undefined {
  return ALL_STANCES.find((s) => s.id === id);
}

export function getStancesByDiscipline(disciplineId: string): StanceDefinition[] {
  return ALL_STANCES.filter((s) => s.disciplineId === disciplineId);
}

export function getStancesByLevel(level: number): StanceDefinition[] {
  return ALL_STANCES.filter((s) => s.level === level);
}
