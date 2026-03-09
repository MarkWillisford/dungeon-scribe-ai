import type { Spell } from '@/types/spells';
import { ABJURATION_SPELLS } from './abjurationSpells';
import { CONJURATION_SPELLS } from './conjurationSpells';
import { DIVINATION_SPELLS } from './divinationSpells';
import { ENCHANTMENT_SPELLS } from './enchantmentSpells';
import { EVOCATION_SPELLS } from './evocationSpells';
import { ILLUSION_SPELLS } from './illusionSpells';
import { NECROMANCY_SPELLS } from './necromancySpells';
import { TRANSMUTATION_SPELLS } from './transmutationSpells';
import { UNIVERSAL_SPELLS } from './universalSpells';

export const ALL_SPELLS: Spell[] = [
  ...ABJURATION_SPELLS,
  ...CONJURATION_SPELLS,
  ...DIVINATION_SPELLS,
  ...ENCHANTMENT_SPELLS,
  ...EVOCATION_SPELLS,
  ...ILLUSION_SPELLS,
  ...NECROMANCY_SPELLS,
  ...TRANSMUTATION_SPELLS,
  ...UNIVERSAL_SPELLS,
];

export {
  ABJURATION_SPELLS,
  CONJURATION_SPELLS,
  DIVINATION_SPELLS,
  ENCHANTMENT_SPELLS,
  EVOCATION_SPELLS,
  ILLUSION_SPELLS,
  NECROMANCY_SPELLS,
  TRANSMUTATION_SPELLS,
  UNIVERSAL_SPELLS,
};
