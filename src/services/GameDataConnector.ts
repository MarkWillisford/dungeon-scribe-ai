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

import type { FeatDefinition } from '@/types/feats';
import type { TraitDefinition } from '@/types/traits';
import type { ClassChoiceDefinition } from '@/types/classChoices';
import type { ExpandedClassData, SpellProgressionTable } from '@/data/classes/types';
import type { ClassData } from '@/data/classes';
import type { ClassOptionBase, BloodlineClassId } from '@/types/classOptions';
import type {
  WeaponDefinition,
  ArmorDefinition,
  ShieldDefinition,
  GearDefinition,
} from '@/types/equipment';
import type { MagicItemDefinition, ItemSlot } from '@/types/magicItems';
import type {
  DisciplineDefinition,
  ManeuverDefinition,
  StanceDefinition,
  MartialTradition,
  DisciplineSourceSystem,
} from '@/types/initiating';
import type { EidolonBaseFormDefinition, EidolonSubtypeDefinition } from '@/types/eidolon';
import type { ArchetypeData } from '@/data/classes/types';
import type { AnimalCompanionEntry } from '@/types/animalCompanions';
import type { FavoredClassBonusEntry } from '@/types/favoredClassBonuses';
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
  | 'phrenicamplifications'
  | 'spells';

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
  // spells — class names whose list to search (e.g. ['cleric', 'druid'])
  classNames?: string[];
  // spells — highest spell level to include (from levelFilterTable)
  maxSpellLevel?: number;
  // spells — 'class_list' shows all spells on the class list; 'spells_known' limits to chosen/spellbook (future)
  scope?: 'class_list' | 'spells_known';
}

// ---- Initiating filter types --------------------------------------------------------

export interface ManeuverFilter {
  disciplineId?: string;
  maxLevel?: number;
}

export interface DisciplineFilter {
  sourceSystem?: DisciplineSourceSystem | DisciplineSourceSystem[];
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
  // All classes regardless of visibility (global + campaign). Used for runtime
  // stat lookups where campaign homebrew must contribute to BAB/save/HP.
  getClassesAll(): Promise<ExpandedClassData[]>;
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
  searchMagicItems(query: string): Promise<MagicItemDefinition[]>;
  searchFeats(query: string): Promise<FeatDefinition[]>;

  // ---- Initiating system ----
  getDisciplines(filter?: DisciplineFilter): Promise<DisciplineDefinition[]>;
  getDisciplineById(id: string): Promise<DisciplineDefinition | null>;
  getManeuvers(filter?: ManeuverFilter): Promise<ManeuverDefinition[]>;
  getManeuverById(id: string): Promise<ManeuverDefinition | null>;
  getStances(filter?: ManeuverFilter): Promise<StanceDefinition[]>;
  getStanceById(id: string): Promise<StanceDefinition | null>;
  getMartialTraditions(): Promise<MartialTradition[]>;
  getMartialTraditionById(id: string): Promise<MartialTradition | null>;

  // ---- Archetypes ----
  getArchetypesByClass(className: string, context?: QueryContext): Promise<ArchetypeData[]>;

  // ---- Animal companions ----
  getAnimalCompanions(filter?: { mountsOnly?: boolean }): Promise<AnimalCompanionEntry[]>;

  // ---- Favored class bonuses ----
  getFavoredClassBonuses(
    raceName: string,
    className: string,
    context?: QueryContext,
  ): Promise<FavoredClassBonusEntry[]>;

  // ---- Eidolon static catalogs ----
  getEidolonBaseForms(): Promise<EidolonBaseFormDefinition[]>;
  getEidolonSubtypes(): Promise<EidolonSubtypeDefinition[]>;
}
