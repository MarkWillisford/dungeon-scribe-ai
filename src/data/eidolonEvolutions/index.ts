import type { EidolonEvolutionEntry } from '@/types/classOptions';
import { eidolonEvolutionsApg1pt } from './raw/eidolonEvolutions_1pt';
import { eidolonEvolutionsApg2pt } from './raw/eidolonEvolutions_apg_2pt';
import { eidolonEvolutionsApg3pt4pt } from './raw/eidolonEvolutions_apg_3pt4pt';
import { eidolonEvolutionsUc1pt } from './raw/eidolonEvolutions_uc_1pt';
import { eidolonEvolutionsUc2pt } from './raw/eidolonEvolutions_uc_2pt';
import { eidolonEvolutionsUc3pt4pt } from './raw/eidolonEvolutions_uc_3pt4pt';

export {
  eidolonEvolutionsApg1pt,
  eidolonEvolutionsApg2pt,
  eidolonEvolutionsApg3pt4pt,
  eidolonEvolutionsUc1pt,
  eidolonEvolutionsUc2pt,
  eidolonEvolutionsUc3pt4pt,
};

export const ALL_EIDOLON_EVOLUTIONS: EidolonEvolutionEntry[] = [
  ...eidolonEvolutionsApg1pt,
  ...eidolonEvolutionsApg2pt,
  ...eidolonEvolutionsApg3pt4pt,
  ...eidolonEvolutionsUc1pt,
  ...eidolonEvolutionsUc2pt,
  ...eidolonEvolutionsUc3pt4pt,
];

export const getEidolonEvolutionById = (id: string): EidolonEvolutionEntry | undefined =>
  ALL_EIDOLON_EVOLUTIONS.find((e) => e.id === id);

export const getEidolonEvolutionByName = (name: string): EidolonEvolutionEntry | undefined =>
  ALL_EIDOLON_EVOLUTIONS.find((e) => e.name.toLowerCase() === name.toLowerCase());

export const getEidolonEvolutionsByPointCost = (cost: 1 | 2 | 3 | 4): EidolonEvolutionEntry[] =>
  ALL_EIDOLON_EVOLUTIONS.filter((e) => e.evolutionPointCost === cost);

export const getEvolutionsForSummoner = (
  summoner: 'apg' | 'unchained',
): EidolonEvolutionEntry[] =>
  ALL_EIDOLON_EVOLUTIONS.filter((e) => !e.summoner || e.summoner === summoner);
