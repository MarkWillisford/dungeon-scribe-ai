// Magic Weapons — re-exports all batch files
// Engineer 2 (Doug)

import type { MagicWeaponDefinition } from '@/types/magicItems';
import type { ItemSpecialAbility } from '@/types/magicItems';

import { specificWeaponsBatch1 } from './specificWeapons-batch1';
import { specificWeaponsBatch2 } from './specificWeapons-batch2';
import { specificWeaponsBatch3 } from './specificWeapons-batch3';
import { specificWeaponsBatch4 } from './specificWeapons-batch4';
import { specificWeaponsBatch5 } from './specificWeapons-batch5';
import { specificWeaponsBatch5b } from './specificWeapons-batch5b';
import { specificWeaponsBatch6 } from './specificWeapons-batch6';
import { specificWeaponsBatch7 } from './specificWeapons-batch7';
import { specificWeaponsBatch8 } from './specificWeapons-batch8';
import { specificWeaponsBatch9 } from './specificWeapons-batch9';
import { specificWeaponsBatch10 } from './specificWeapons-batch10';
import { specificWeaponsBatch11 } from './specificWeapons-batch11';
import { specificWeaponsBatch12 } from './specificWeapons-batch12';
import { specificWeaponsBatch13 } from './specificWeapons-batch13';
import { specificWeaponsBatch14 } from './specificWeapons-batch14';
import { specificWeaponsBatch15 } from './specificWeapons-batch15';
import { specificWeaponsBatch16 } from './specificWeapons-batch16';
import { specificWeaponsBatch17 } from './specificWeapons-batch17';
import { specificWeaponsBatch18 } from './specificWeapons-batch18';
import { specificWeaponsBatch19 } from './specificWeapons-batch19';
import { weaponAbilitiesBatch1 } from './weaponAbilities-batch1';
import { weaponAbilitiesBatch2 } from './weaponAbilities-batch2';
import { weaponAbilitiesBatch3 } from './weaponAbilities-batch3';

export const ALL_MAGIC_WEAPONS: MagicWeaponDefinition[] = [
  ...specificWeaponsBatch1, ...specificWeaponsBatch2, ...specificWeaponsBatch3,
  ...specificWeaponsBatch4, ...specificWeaponsBatch5, ...specificWeaponsBatch5b,
  ...specificWeaponsBatch6, ...specificWeaponsBatch7, ...specificWeaponsBatch8,
  ...specificWeaponsBatch9, ...specificWeaponsBatch10, ...specificWeaponsBatch11,
  ...specificWeaponsBatch12, ...specificWeaponsBatch13, ...specificWeaponsBatch14,
  ...specificWeaponsBatch15, ...specificWeaponsBatch16, ...specificWeaponsBatch17,
  ...specificWeaponsBatch18, ...specificWeaponsBatch19,
];

export const ALL_WEAPON_ABILITIES: ItemSpecialAbility[] = [
  ...weaponAbilitiesBatch1, ...weaponAbilitiesBatch2, ...weaponAbilitiesBatch3,
];
