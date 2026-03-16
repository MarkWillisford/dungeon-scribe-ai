import { RogueTalentDocument } from '@/types/classOptions';
import { batch_001 } from './raw/roguetalents_batch_001';
import { batch_002 } from './raw/roguetalents_batch_002';

export const ALL_ROGUE_TALENTS: RogueTalentDocument[] = [...batch_001, ...batch_002];

export function getRogueTalentById(id: string): RogueTalentDocument | undefined {
  const results = ALL_ROGUE_TALENTS.filter((t: RogueTalentDocument) => t.id === id);
  return results.length > 0 ? results[0] : undefined;
}

export function getRogueTalentByName(name: string): RogueTalentDocument | undefined {
  const lower = name.toLowerCase();
  const results = ALL_ROGUE_TALENTS.filter(
    (t: RogueTalentDocument) => t.name.toLowerCase() === lower,
  );
  return results.length > 0 ? results[0] : undefined;
}

export const getStandardTalents = (): RogueTalentDocument[] =>
  ALL_ROGUE_TALENTS.filter((t: RogueTalentDocument) => t.talentTier === 'standard');

export const getAdvancedTalents = (): RogueTalentDocument[] =>
  ALL_ROGUE_TALENTS.filter((t: RogueTalentDocument) => t.talentTier === 'advanced');
