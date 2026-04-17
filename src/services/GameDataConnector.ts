/**
 * GameDataConnector — interface for all game data sources.
 *
 * GameDataService delegates every data fetch through this interface.
 * FirestoreGameDataConnector is the production implementation.
 * StaticGameDataConnector is used in tests.
 *
 * Swapping the search backend or database later means writing a new
 * connector — GameDataService and all callers remain unchanged.
 */

import type { FeatDefinition, FeatType } from '@/types/feats';
import type { TraitDefinition } from '@/types/traits';
import type { ClassChoiceDefinition } from '@/types/classChoices';
import type { ExpandedClassData, SpellProgressionTable } from '@/data/classes/types';
import type { ClassData } from '@/data/classes';
import type { ExpandedRaceData } from '@/data/races';
import type { ClassOptionBase, BloodlineClassId } from '@/types/classOptions';
import type {
  WeaponDefinition,
  ArmorDefinition,
  ShieldDefinition,
  GearDefinition,
} from '@/types/equipment';
import type { MagicItemDefinition } from '@/types/magicItems';
import type { ItemSlot } from '@/types/magicItems';
import type { QueryContext, RaceGroups, FeatFilter } from './GameDataService';

// ---- Class choice collections -------------------------------------------------------

/**
 * All Firestore collection names that hold class choice option documents.
 * Does not include 'feats' — feats have dedicated methods on the connector.
 */
export type ClassChoiceCollection =
  | 'domains'
  | 'ragepowers'
  | 'roguetalents'
  | 'mysteries'
  | 'inquisitions'
  | 'revelations'
  | 'cavalierorders'
  | 'hexes'
  | 'arcanistexploits'
  | 'investigatortalents'
  | 'ninjatricks'
  | 'slayertalents'
  | 'magusarcana'
  | 'warpriestblessings'
  | 'alchemistdiscoveries'
  | 'bloodlines'
  | 'shamanspirits'
  | 'eidolonevolutions'
  | 'mesmeristtricks'
  | 'wildtalents'
  | 'occultistfocuspowers'
  | 'phrenicamplifications';

/**
 * Filter options for getClassChoiceOptions.
 * Not all fields apply to all collections — unused fields are ignored.
 */
export interface ClassChoiceFilters {
  // domains, warpriestblessings — narrows to the deity's granted domains
  deityName?: string;
  // revelations — narrows to a specific mystery
  mysteryId?: string;
  // bloodlines — narrows to a specific caster class
  classId?: BloodlineClassId;
  // shamanspirits — when true, only wandering-spirit-eligible spirits returned
  wanderingOnly?: boolean;
  // eidolonevolutions — narrows to a specific summoner variant
  summonerType?: 'apg' | 'unchained';
  // wildtalents — narrows to infusion / blast / utility
  talentType?: string;
  // ninjatricks — 'standard' | 'master'
  trickTier?: string;
  // roguetalents, slayertalents — 'standard' | 'advanced'
  talentTier?: string;
  // alchemistdiscoveries — 'standard' | 'grand'
  discoveryTier?: string;
}

// ---- Spell table type ---------------------------------------------------------------

export type SpellTables = Record<string, SpellProgressionTable>;

// ---- Connector interface ------------------------------------------------------------

export interface GameDataConnector {
  // ---- Class choice collections ----
  getClassChoiceOptions(
    collection: ClassChoiceCollection,
    filters: ClassChoiceFilters,
    context: QueryContext,
  ): Promise<ClassOptionBase[]>;

  // ---- Feats ----
  getFeats(filter?: FeatFilter, context?: QueryContext): Promise<FeatDefinition[]>;
  getFeatById(id: string, context?: QueryContext): Promise<FeatDefinition | null>;

  // ---- Traits ----
  getTraits(context?: QueryContext): Promise<TraitDefinition[]>;

  // ---- Classes ----
  getClasses(context?: QueryContext): Promise<ExpandedClassData[]>;
  getCoreClasses(context?: QueryContext): Promise<ClassData[]>;
  getClassByName(name: string, context?: QueryContext): Promise<ExpandedClassData | null>;
  getClassChoiceDefinitions(classId: string): Promise<ClassChoiceDefinition[]>;
  getSpellTables(): Promise<SpellTables>;

  // ---- Races ----
  getRaceGroups(context?: QueryContext): Promise<RaceGroups>;

  // ---- Equipment ----
  getWeapons(context?: QueryContext): Promise<WeaponDefinition[]>;
  getArmor(context?: QueryContext): Promise<ArmorDefinition[]>;
  getShields(context?: QueryContext): Promise<ShieldDefinition[]>;
  getGear(context?: QueryContext): Promise<GearDefinition[]>;
  getMagicItemsBySlot(slot: ItemSlot): Promise<MagicItemDefinition[]>;
}
