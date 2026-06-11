// SEEDING ONLY — do not use in runtime app code.
// Combined barrel for scraped alternative racial traits (ARTs).
// Keyed by EXACT ExpandedRaceData.name; merged onto each race in ./index.ts.
// Source data: src/data/races/raw/alt_traits_batch_*.ts (see plans/data-scraping/alternative-racial-traits-database.md)

import { AlternativeRacialTraitData } from './types';
import { batch_001 } from './raw/alt_traits_batch_001';
import { batch_002 } from './raw/alt_traits_batch_002';
import { batch_003 } from './raw/alt_traits_batch_003';
import { batch_004 } from './raw/alt_traits_batch_004';
import { batch_005 } from './raw/alt_traits_batch_005';
import { batch_006 } from './raw/alt_traits_batch_006';
import { batch_007 } from './raw/alt_traits_batch_007';
import { batch_008 } from './raw/alt_traits_batch_008';

export const ALL_ALT_RACIAL_TRAITS: Record<string, AlternativeRacialTraitData[]> = {
  ...batch_001,
  ...batch_002,
  ...batch_003,
  ...batch_004,
  ...batch_005,
  ...batch_006,
  ...batch_007,
  ...batch_008,
};
