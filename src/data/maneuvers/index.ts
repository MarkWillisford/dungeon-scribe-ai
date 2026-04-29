// Maneuvers — barrel export for the initiating system catalog.
// Raw per-discipline files live in raw/ and are spread into ALL_MANEUVERS.
//
// Scraped per plans/data-scraping/path-of-war-scraping.md Phase 2.

import type { ManeuverDefinition, ManeuverType } from '@/types/initiating';

// Path of War
import { POW_BROKEN_BLADE_MANEUVERS } from './raw/pow-broken-blade';
import { POW_GOLDEN_LION_MANEUVERS } from './raw/pow-golden-lion';
import { POW_IRON_TORTOISE_MANEUVERS } from './raw/pow-iron-tortoise';
import { POW_PRIMAL_FURY_MANEUVERS } from './raw/pow-primal-fury';
import { POW_SCARLET_THRONE_MANEUVERS } from './raw/pow-scarlet-throne';
import { POW_SILVER_CRANE_MANEUVERS } from './raw/pow-silver-crane';
import { POW_SOLAR_WIND_MANEUVERS } from './raw/pow-solar-wind';
import { POW_STEEL_SERPENT_MANEUVERS } from './raw/pow-steel-serpent';
import { POW_THRASHING_DRAGON_MANEUVERS } from './raw/pow-thrashing-dragon';
import { POW_VEILED_MOON_MANEUVERS } from './raw/pow-veiled-moon';

// Path of War: Expanded
import { POWE_BLACK_SERAPH_MANEUVERS } from './raw/powe-black-seraph';
import { POWE_CURSED_RAZOR_MANEUVERS } from './raw/powe-cursed-razor';
import { POWE_ELEMENTAL_FLUX_MANEUVERS } from './raw/powe-elemental-flux';
import { POWE_ETERNAL_GUARDIAN_MANEUVERS } from './raw/powe-eternal-guardian';
import { POWE_MITHRAL_CURRENT_MANEUVERS } from './raw/powe-mithral-current';
import { POWE_PIERCING_THUNDER_MANEUVERS } from './raw/powe-piercing-thunder';
import { POWE_RIVEN_HOURGLASS_MANEUVERS } from './raw/powe-riven-hourglass';
import { POWE_SHATTERED_MIRROR_MANEUVERS } from './raw/powe-shattered-mirror';
import { POWE_SLEEPING_GODDESS_MANEUVERS } from './raw/powe-sleeping-goddess';
import { POWE_TEMPEST_GALE_MANEUVERS } from './raw/powe-tempest-gale';

// Overflow (levels 7-9 that exceeded the 25-item cap in part-1 files)
import { POW_OVERFLOW_A_MANEUVERS } from './raw/pow-overflow-a';
import { POW_POWE_OVERFLOW_B_MANEUVERS } from './raw/pow-powe-overflow-b';
import { POWE_OVERFLOW_C_MANEUVERS } from './raw/powe-overflow-c';

export const ALL_MANEUVERS: ManeuverDefinition[] = [
  // Path of War
  ...POW_BROKEN_BLADE_MANEUVERS,
  ...POW_GOLDEN_LION_MANEUVERS,
  ...POW_IRON_TORTOISE_MANEUVERS,
  ...POW_PRIMAL_FURY_MANEUVERS,
  ...POW_SCARLET_THRONE_MANEUVERS,
  ...POW_SILVER_CRANE_MANEUVERS,
  ...POW_SOLAR_WIND_MANEUVERS,
  ...POW_STEEL_SERPENT_MANEUVERS,
  ...POW_THRASHING_DRAGON_MANEUVERS,
  ...POW_VEILED_MOON_MANEUVERS,
  // Path of War: Expanded
  ...POWE_BLACK_SERAPH_MANEUVERS,
  ...POWE_CURSED_RAZOR_MANEUVERS,
  ...POWE_ELEMENTAL_FLUX_MANEUVERS,
  ...POWE_ETERNAL_GUARDIAN_MANEUVERS,
  ...POWE_MITHRAL_CURRENT_MANEUVERS,
  ...POWE_PIERCING_THUNDER_MANEUVERS,
  ...POWE_RIVEN_HOURGLASS_MANEUVERS,
  ...POWE_SHATTERED_MIRROR_MANEUVERS,
  ...POWE_SLEEPING_GODDESS_MANEUVERS,
  ...POWE_TEMPEST_GALE_MANEUVERS,
  // Overflow (levels 7-9)
  ...POW_OVERFLOW_A_MANEUVERS,
  ...POW_POWE_OVERFLOW_B_MANEUVERS,
  ...POWE_OVERFLOW_C_MANEUVERS,
];

export function getManeuverById(id: string): ManeuverDefinition | undefined {
  return ALL_MANEUVERS.find((m) => m.id === id);
}

export function getManeuversByDiscipline(disciplineId: string): ManeuverDefinition[] {
  return ALL_MANEUVERS.filter((m) => m.disciplineId === disciplineId);
}

export function getManeuversByLevel(level: number): ManeuverDefinition[] {
  return ALL_MANEUVERS.filter((m) => m.level === level);
}

export function getManeuversByType(type: ManeuverType): ManeuverDefinition[] {
  return ALL_MANEUVERS.filter((m) => m.type === type);
}
