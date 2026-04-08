import type { SlayerTalentEntry } from '@/types/classOptions';
import { slayerTalentsStandard } from './slayerTalents-standard';
import { slayerTalentsAdvanced } from './slayerTalents-advanced';

export { slayerTalentsStandard, slayerTalentsAdvanced };

export const ALL_SLAYER_TALENTS: SlayerTalentEntry[] = [
  ...slayerTalentsStandard,
  ...slayerTalentsAdvanced,
];

export const getSlayerTalentById = (id: string): SlayerTalentEntry | undefined =>
  ALL_SLAYER_TALENTS.find((t) => t.id === id);

export const getSlayerTalentByName = (name: string): SlayerTalentEntry | undefined => {
  const lower = name.toLowerCase();
  return ALL_SLAYER_TALENTS.find((t) => t.name.toLowerCase() === lower);
};

export const getStandardSlayerTalents = (): SlayerTalentEntry[] =>
  ALL_SLAYER_TALENTS.filter((t) => t.talentTier === 'standard');

export const getAdvancedSlayerTalents = (): SlayerTalentEntry[] =>
  ALL_SLAYER_TALENTS.filter((t) => t.talentTier === 'advanced');
