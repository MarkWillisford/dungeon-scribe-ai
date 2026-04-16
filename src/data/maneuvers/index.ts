// Maneuvers — barrel export for the initiating system catalog.
// Raw per-discipline files live in raw/ and are spread into ALL_MANEUVERS.
//
// Scraped per plans/data-scraping/path-of-war-scraping.md Phase 2.

import type { ManeuverDefinition, ManeuverType } from '@/types/initiating';

export const ALL_MANEUVERS: ManeuverDefinition[] = [];

export function getManeuverById(id: string): ManeuverDefinition | undefined {
  return ALL_MANEUVERS.find((m) => m.id === id);
}

export function getManeuversByDiscipline(disciplineId: string): ManeuverDefinition[] {
  return ALL_MANEUVERS.filter((m) => m.disciplineId === disciplineId);
}

export function getManeuversByLevel(level: number): ManeuverDefinition[] {
  return ALL_MANEUVERS.filter((m) => m.level === level);
}

export function getManeuversByType(type: ManeuverType): ManeuverDefinition[] {
  return ALL_MANEUVERS.filter((m) => m.type === type);
}
