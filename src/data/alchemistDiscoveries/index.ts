import type { AlchemistDiscoveryEntry } from '@/types/classOptions';
import { alchemistDiscoveriesApg } from './alchemist-discoveries-apg';
import { alchemistDiscoveriesUm } from './alchemist-discoveries-um';
import { alchemistDiscoveriesArgBos } from './alchemist-discoveries-arg-bos';
import { alchemistDiscoveriesIsmcHogDr } from './alchemist-discoveries-ismc-hog-dr';
import { alchemistDiscoveriesUcUwCocCop } from './alchemist-discoveries-uc-uw-coc-cop';
import { alchemistDiscoveriesAcgMisc1 } from './alchemist-discoveries-acg-misc1';
import { alchemistDiscoveriesSmallSources1 } from './alchemist-discoveries-small-sources1';
import { alchemistDiscoveriesSmallSources2 } from './alchemist-discoveries-small-sources2';

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
