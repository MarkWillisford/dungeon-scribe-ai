// SEEDING ONLY — do not use in runtime app code.
// This array seeds Firestore. All runtime reads go through GameDataService → FirestoreGameDataConnector.

import type { AlchemistDiscoveryEntry } from '@/types/classOptions';
import { alchemistDiscoveriesApg } from './raw/alchemist-discoveries-apg';
import { alchemistDiscoveriesUm } from './raw/alchemist-discoveries-um';
import { alchemistDiscoveriesArgBos } from './raw/alchemist-discoveries-arg-bos';
import { alchemistDiscoveriesIsmcHogDr } from './raw/alchemist-discoveries-ismc-hog-dr';
import { alchemistDiscoveriesUcUwCocCop } from './raw/alchemist-discoveries-uc-uw-coc-cop';
import { alchemistDiscoveriesAcgMisc1 } from './raw/alchemist-discoveries-acg-misc1';
import { alchemistDiscoveriesSmallSources1 } from './raw/alchemist-discoveries-small-sources1';
import { alchemistDiscoveriesSmallSources2 } from './raw/alchemist-discoveries-small-sources2';

export {
  alchemistDiscoveriesApg,
  alchemistDiscoveriesUm,
  alchemistDiscoveriesArgBos,
  alchemistDiscoveriesIsmcHogDr,
  alchemistDiscoveriesUcUwCocCop,
  alchemistDiscoveriesAcgMisc1,
  alchemistDiscoveriesSmallSources1,
  alchemistDiscoveriesSmallSources2,
};

export const ALL_ALCHEMIST_DISCOVERIES: AlchemistDiscoveryEntry[] = [
  ...alchemistDiscoveriesApg,
  ...alchemistDiscoveriesUm,
  ...alchemistDiscoveriesArgBos,
  ...alchemistDiscoveriesIsmcHogDr,
  ...alchemistDiscoveriesUcUwCocCop,
  ...alchemistDiscoveriesAcgMisc1,
  ...alchemistDiscoveriesSmallSources1,
  ...alchemistDiscoveriesSmallSources2,
];
