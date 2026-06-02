// SEEDING ONLY — do not use in runtime app code.
// This array seeds Firestore. All runtime reads go through GameDataService → FirestoreGameDataConnector.

import type {
  WeaponDefinition,
  ArmorDefinition,
  ShieldDefinition,
  GearDefinition,
  MaterialDefinition,
  ServiceDefinition,
  WeaponProficiency,
  ArmorWeight,
} from '@/types/equipment';

import { CORE_WEAPONS, ADDITIONAL_WEAPONS } from './weapons';
import { CORE_ARMOR, CORE_SHIELDS } from './armor';
import { CORE_GEAR } from './gear';
import { CORE_MATERIALS } from './materials';
import { CORE_SERVICES } from './services';
import { EXTRA_WEAPONS } from './weapons-extra';
import { EXTRA_ARMOR, EXTRA_SHIELDS } from './armor-extra';
import { EXTRA_GEAR } from './gear-extra';
import { EXTRA_MATERIALS } from './materials-extra';
import { EXTRA_SERVICES } from './services-extra';

export { CORE_WEAPONS, ADDITIONAL_WEAPONS } from './weapons';
export { CORE_ARMOR, CORE_SHIELDS } from './armor';
export { CORE_GEAR } from './gear';
export { CORE_MATERIALS } from './materials';
export { CORE_SERVICES } from './services';
export { EXTRA_WEAPONS } from './weapons-extra';
export { EXTRA_ARMOR, EXTRA_SHIELDS } from './armor-extra';
export { EXTRA_GEAR } from './gear-extra';
export { EXTRA_MATERIALS } from './materials-extra';
export { EXTRA_SERVICES } from './services-extra';

export const ALL_WEAPONS: WeaponDefinition[] = [
  ...CORE_WEAPONS,
  ...ADDITIONAL_WEAPONS,
  ...EXTRA_WEAPONS,
];
export const ALL_ARMOR: ArmorDefinition[] = [...CORE_ARMOR, ...EXTRA_ARMOR];
export const ALL_SHIELDS: ShieldDefinition[] = [...CORE_SHIELDS, ...EXTRA_SHIELDS];
export const ALL_GEAR: GearDefinition[] = [...CORE_GEAR, ...EXTRA_GEAR];
export const ALL_MATERIALS: MaterialDefinition[] = [...CORE_MATERIALS, ...EXTRA_MATERIALS];
export const ALL_SERVICES: ServiceDefinition[] = [...CORE_SERVICES, ...EXTRA_SERVICES];

// --- Lookup Utilities ---

export function getWeaponById(id: string): WeaponDefinition | undefined {
  return ALL_WEAPONS.find((w) => w.id === id);
}

export function getArmorById(id: string): ArmorDefinition | undefined {
  return ALL_ARMOR.find((a) => a.id === id);
}

export function getShieldById(id: string): ShieldDefinition | undefined {
  return ALL_SHIELDS.find((s) => s.id === id);
}

export function getGearById(id: string): GearDefinition | undefined {
  return ALL_GEAR.find((g) => g.id === id);
}

export function getMaterialById(id: string): MaterialDefinition | undefined {
  return ALL_MATERIALS.find((m) => m.id === id);
}

export function getServiceById(id: string): ServiceDefinition | undefined {
  return ALL_SERVICES.find((s) => s.id === id);
}

export function getWeaponsByProficiency(proficiency: WeaponProficiency): WeaponDefinition[] {
  return ALL_WEAPONS.filter((w) => w.proficiency === proficiency);
}

export function getWeaponsByGroup(group: string): WeaponDefinition[] {
  return ALL_WEAPONS.filter((w) => w.weaponGroup.includes(group));
}

export function getArmorByType(armorType: ArmorWeight): ArmorDefinition[] {
  return ALL_ARMOR.filter((a) => a.armorType === armorType);
}

export function searchEquipment(
  query: string,
): (WeaponDefinition | ArmorDefinition | ShieldDefinition | GearDefinition)[] {
  const lower = query.toLowerCase();
  const match = (item: { name: string; description: string; id: string }) =>
    item.name.toLowerCase().includes(lower) ||
    item.id.includes(lower) ||
    item.description.toLowerCase().includes(lower);

  return [
    ...ALL_WEAPONS.filter(match),
    ...ALL_ARMOR.filter(match),
    ...ALL_SHIELDS.filter(match),
    ...ALL_GEAR.filter(match),
  ];
}
