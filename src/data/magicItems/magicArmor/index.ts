// SEEDING ONLY — do not use in runtime app code.
// This array seeds Firestore. All runtime reads go through GameDataService → FirestoreGameDataConnector.

// Magic Armor & Shields — re-exports all batch files
// Engineer 2 (Doug)

import type { MagicArmorDefinition, MagicShieldDefinition } from '@/types/magicItems';
import type { ItemSpecialAbility } from '@/types/magicItems';

import { armorAbilitiesBatch1 } from './armorAbilities-batch1';
import { armorAbilitiesBatch2 } from './armorAbilities-batch2';
import { armorAbilitiesBatch3 } from './armorAbilities-batch3';
import { armorAbilitiesBatch4 } from './armorAbilities-batch4';
import { armorAbilitiesBatch5 } from './armorAbilities-batch5';
import { armorAbilitiesFill } from './armorAbilities-fill';
import { shieldAbilitiesBatch1 } from './shieldAbilities-batch1';
import { shieldAbilitiesBatch2 } from './shieldAbilities-batch2';
import { shieldAbilitiesBatch3 } from './shieldAbilities-batch3';
import { specificArmorBatch1 } from './specificArmor-batch1';
import { specificArmorBatch2 } from './specificArmor-batch2';
import { specificArmorBatch3 } from './specificArmor-batch3';
import { specificArmorBatch4 } from './specificArmor-batch4';
import { specificArmorBatch5 } from './specificArmor-batch5';
import { specificArmorBatch6 } from './specificArmor-batch6';
import { specificArmorBatch7 } from './specificArmor-batch7';
import { specificArmorFill } from './specificArmor-fill';
import { specificShieldsBatch1 } from './specificShields-batch1';
import { specificShieldsBatch2 } from './specificShields-batch2';
import { specificShieldsBatch3 } from './specificShields-batch3';
import { specificShieldsFill } from './specificShields-fill';

export const ALL_MAGIC_ARMOR: MagicArmorDefinition[] = [
  ...specificArmorBatch1,
  ...specificArmorBatch2,
  ...specificArmorBatch3,
  ...specificArmorBatch4,
  ...specificArmorBatch5,
  ...specificArmorBatch6,
  ...specificArmorBatch7,
  ...specificArmorFill,
];

export const ALL_MAGIC_SHIELDS: MagicShieldDefinition[] = [
  ...specificShieldsBatch1,
  ...specificShieldsBatch2,
  ...specificShieldsBatch3,
  ...specificShieldsFill,
];

export const ALL_ARMOR_ABILITIES: ItemSpecialAbility[] = [
  ...armorAbilitiesBatch1,
  ...armorAbilitiesBatch2,
  ...armorAbilitiesBatch3,
  ...armorAbilitiesBatch4,
  ...armorAbilitiesBatch5,
  ...armorAbilitiesFill,
];

export const ALL_SHIELD_ABILITIES: ItemSpecialAbility[] = [
  ...shieldAbilitiesBatch1,
  ...shieldAbilitiesBatch2,
  ...shieldAbilitiesBatch3,
];
