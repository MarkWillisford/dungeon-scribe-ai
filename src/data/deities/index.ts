import { DeityEntry } from '@/types/deities';
import { milani } from './milani';
import { iomedae } from './iomedae';

export { milani, iomedae };

export const ALL_DEITIES: DeityEntry[] = [milani, iomedae];

export const getDeityById = (id: string): DeityEntry | undefined =>
  ALL_DEITIES.find((d) => d.id === id);

export const getDeityByName = (name: string): DeityEntry | undefined =>
  ALL_DEITIES.find((d) => d.name.toLowerCase() === name.toLowerCase());
