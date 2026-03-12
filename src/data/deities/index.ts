import { DeityDocument } from '@/types/deities';
import { milani } from './milani';
import { iomedae } from './iomedae';

export { milani, iomedae };

export const ALL_DEITIES: DeityDocument[] = [milani, iomedae];

export const getDeityById = (id: string): DeityDocument | undefined =>
  ALL_DEITIES.find((d) => d.id === id);

export const getDeityByName = (name: string): DeityDocument | undefined =>
  ALL_DEITIES.find((d) => d.name.toLowerCase() === name.toLowerCase());
