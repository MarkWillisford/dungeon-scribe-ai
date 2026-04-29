// Disciplines — barrel export for the initiating system catalog.
// Individual disciplines live in pow.ts (10) and pow-extended.ts (10),
// plus tob.ts once Tome of Battle scraping is in scope.
//
// Scraped per plans/data-scraping/path-of-war-scraping.md Phase 1.

import type { DisciplineDefinition } from '@/types/initiating';

import { POW_DISCIPLINES } from './pow';
import { POW_EXTENDED_DISCIPLINES } from './pow-extended';

export const ALL_DISCIPLINES: DisciplineDefinition[] = [
  ...POW_DISCIPLINES,
  ...POW_EXTENDED_DISCIPLINES,
];

export function getDisciplineById(id: string): DisciplineDefinition | undefined {
  return ALL_DISCIPLINES.find((d) => d.id === id);
}

export function getDisciplinesBySourceSystem(
  sourceSystem: DisciplineDefinition['sourceSystem'],
): DisciplineDefinition[] {
  return ALL_DISCIPLINES.filter((d) => d.sourceSystem === sourceSystem);
}
