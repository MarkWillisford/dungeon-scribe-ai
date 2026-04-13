import type { ShamanSpiritEntry } from '@/types/classOptions';
import { shamanSpirits } from './shamanSpirits';

export { shamanSpirits };

export const ALL_SHAMAN_SPIRITS: ShamanSpiritEntry[] = [...shamanSpirits];

export const getShamanSpiritById = (id: string): ShamanSpiritEntry | undefined =>
  ALL_SHAMAN_SPIRITS.find((s) => s.id === id);

export const getShamanSpiritByName = (name: string): ShamanSpiritEntry | undefined =>
  ALL_SHAMAN_SPIRITS.find((s) => s.name.toLowerCase() === name.toLowerCase());

export const getWanderingSpirits = (): ShamanSpiritEntry[] =>
  ALL_SHAMAN_SPIRITS.filter((s) => s.wanderingSpirit);
