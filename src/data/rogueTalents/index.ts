import { RogueTalentEntry } from '@/types/classOptions';
import { batch_001 } from './raw/roguetalents_batch_001';
import { batch_002 } from './raw/roguetalents_batch_002';

export const ALL_ROGUE_TALENTS: RogueTalentEntry[] = [...batch_001, ...batch_002];

export function getRogueTalentById(id: string): RogueTalentEntry | undefined {
  const results = ALL_ROGUE_TALENTS.filter((t: RogueTalentEntry) => t.id === id);
  return results.length > 0 ? results[0] : undefined;
}

export function getRogueTalentByName(name: string): RogueTalentEntry | undefined {
  const lower = name.toLowerCase();
  const results = ALL_ROGUE_TALENTS.filter(
    (t: RogueTalentEntry) => t.name.toLowerCase() === lower,
  );
  return results.length > 0 ? results[0] : undefined;
}

export const getStandardTalents = (): RogueTalentEntry[] =>
  ALL_ROGUE_TALENTS.filter((t: RogueTalentEntry) => t.talentTier === 'standard');

export const getAdvancedTalents = (): RogueTalentEntry[] =>
  ALL_ROGUE_TALENTS.filter((t: RogueTalentEntry) => t.talentTier === 'advanced');
