/**
 * GameDataService — unified data access layer for all game data.
 *
 * Phase A: backed by static TypeScript imports (zero behavior change).
 * Phase B: swap internals to Firestore queries (same public API).
 *
 * All methods are async so Phase B requires no call-site changes.
 * QueryContext is optional on every call — defaults to reading from the Redux
 * store so callers (components and pure services alike) don't need to thread
 * context themselves. Pass context explicitly in tests or special cases.
 */

import { store } from '@/store/store';
import { PRESET_PF1E_STANDARD } from '@/data/rulesets/presets';
import type { Ruleset } from '@/types/ruleset';
import type { SearchItem } from '@/components/ui/SearchPickerSheet';
import type { FeatDefinition, FeatType } from '@/types/feats';
import type { TraitDefinition } from '@/types/traits';
import type { ClassChoiceDefinition } from '@/types/classChoices';
import type { ExpandedClassData, SpellProgressionTable } from '@/data/classes/types';
import type { ClassData } from '@/data/classes';
import type { ExpandedRaceData } from '@/data/races';
import type {
  WeaponDefinition,
  ArmorDefinition,
  ShieldDefinition,
  GearDefinition,
} from '@/types/equipment';
import type {
  ShamanSpiritEntry,
  EidolonEvolutionEntry,
  MesmeristTrickEntry,
  NinjaTrickEntry,
  SlayerTalentEntry,
  AlchemistDiscoveryEntry,
  BloodlineClassId,
} from '@/types/classOptions';

// ---- Phase A static data imports -----------------------------------------------
// These will be removed in Phase B when Firestore becomes the backing source.
// Each import corresponds to one Firestore collection.

import { ALL_DOMAINS } from '@/data/domains/index';
import { ALL_RAGE_POWERS } from '@/data/ragePowers/index';
import { ALL_ROGUE_TALENTS } from '@/data/rogueTalents/index';
import { ALL_MYSTERIES } from '@/data/mysteries/index';
import { ALL_INQUISITIONS } from '@/data/inquisitions/index';
import { ALL_REVELATIONS } from '@/data/revelations/index';
import { ALL_CAVALIER_ORDERS } from '@/data/cavalierOrders/index';
import { ALL_HEXES } from '@/data/hexes/index';
import { ALL_ARCANIST_EXPLOITS } from '@/data/arcanistExploits/index';
import { ALL_INVESTIGATOR_TALENTS } from '@/data/investigatorTalents/index';
import { ALL_BLOODLINES } from '@/data/bloodlines/index';
import { ALL_SHAMAN_SPIRITS } from '@/data/shamanSpirits/index';
import { ALL_EIDOLON_EVOLUTIONS } from '@/data/eidolonEvolutions/index';
import { ALL_MESMERIST_TRICKS } from '@/data/mesmeristTricks/index';
import { ALL_WILD_TALENTS } from '@/data/kineticistWildTalents/index';
import { ALL_OCCULTIST_FOCUS_POWERS } from '@/data/occultistFocusPowers/index';
import { ALL_PHRENIC_AMPLIFICATIONS } from '@/data/phrenicAmplifications/index';
import { getDeityByName } from '@/data/deities/index';
import { ALL_NINJA_TRICKS } from '@/data/ninjaTricks/index';
import { ALL_SLAYER_TALENTS } from '@/data/slayerTalents/index';
import { ALL_MAGUS_ARCANA } from '@/data/magusArcana/index';
import { ALL_WARPRIEST_BLESSINGS } from '@/data/warpriestBlessings/index';
import { ALL_ALCHEMIST_DISCOVERIES } from '@/data/alchemistDiscoveries/index';
import { ALL_FEATS } from '@/data/feats/index';
import { ALL_TRAITS } from '@/data/traits/index';
import { CORE_CLASSES } from '@/data/classes';
import { ALL_EXPANDED_CLASSES, SPELL_TABLES } from '@/data/classes/index';
import { getDefinitionsForClass } from '@/data/classChoiceDefinitions/index';
import { ALL_WEAPONS, ALL_ARMOR, ALL_SHIELDS, ALL_GEAR } from '@/data/equipment';
import {
  CORE_RACES,
  FEATURED_RACES,
  UNCOMMON_RACES,
  FLEXIBLE_ABILITY_RACES,
  ALL_EXPANDED_RACES,
} from '@/data/races';

// ---- QueryContext ----------------------------------------------------------------

export interface QueryContext {
  userId: string;
  campaignId?: string;
  ruleset: Ruleset;
  includePersonal?: boolean; // include user's local homebrew (default: true)
}

// ---- Feat filter ----------------------------------------------------------------

export interface FeatFilter {
  featTypes?: FeatType[];
  isCombatFeat?: boolean;
  isTeamworkFeat?: boolean;
}

// ---- Race groups return type ----------------------------------------------------

export interface RaceGroups {
  core: ExpandedRaceData[];
  featured: ExpandedRaceData[];
  uncommon: ExpandedRaceData[];
  flexibleAbility: ExpandedRaceData[];
}

// ---- GameDataService ------------------------------------------------------------

export class GameDataService {
  /**
   * Build a QueryContext from the current Redux store state.
   * Used as the default when callers don't pass context explicitly.
   */
  private static getContextFromStore(): QueryContext {
    const state = store.getState();
    return {
      userId: state.auth.user?.uid ?? '',
      ruleset: state.ruleset.activeRuleset ?? PRESET_PF1E_STANDARD,
    };
  }

  // ---- Class choice options -------------------------------------------------------

  /**
   * Returns SearchItem[] for the given class choice collection, pre-filtered
   * by the resolved filter map. Moves the switch logic out of ClassChoiceRow.
   *
   * Phase B: each case becomes a typed Firestore query against the named collection.
   */
  static async getClassChoiceItems(
    collectionName: string,
    filter: Record<string, unknown> = {},
    _context?: QueryContext,
  ): Promise<SearchItem[]> {
    switch (collectionName) {
      case 'domains': {
        const deityName = filter.deityIds as string | undefined;
        const deity = deityName ? getDeityByName(deityName) : undefined;
        const deityDomainIds = deity
          ? new Set([...deity.domains, ...deity.subdomains])
          : null;
        const pool = deityDomainIds
          ? ALL_DOMAINS.filter((d) => deityDomainIds.has(d.id))
          : ALL_DOMAINS;
        return pool.map((d) => ({
          key: d.id,
          label: d.name,
          subLabel: d.description?.slice(0, 80),
          category: deity ? undefined : (d.druidAllowed ? 'Druid / Cleric' : 'Cleric'),
        }));
      }

      case 'ragepowers':
        return ALL_RAGE_POWERS.map((r) => ({
          key: r.id,
          label: r.name,
          subLabel: r.description?.slice(0, 80),
        }));

      case 'roguetalents':
        return ALL_ROGUE_TALENTS.map((t) => ({
          key: t.id,
          label: t.name,
          subLabel: t.description?.slice(0, 80),
          category: t.talentTier === 'advanced' ? 'Advanced Talents' : 'Talents',
        }));

      case 'mysteries':
        return ALL_MYSTERIES.map((m) => ({
          key: m.id,
          label: m.name,
          subLabel: m.classSkills.slice(0, 3).join(', '),
        }));

      case 'inquisitions':
        return ALL_INQUISITIONS.map((i) => ({
          key: i.id,
          label: i.name,
          subLabel: i.description?.slice(0, 80),
        }));

      case 'revelations': {
        const mysteryId = filter.mysteryId as string | undefined;
        const pool = mysteryId
          ? ALL_REVELATIONS.filter((r) => r.mysteryId === mysteryId)
          : ALL_REVELATIONS;
        return pool.map((r) => ({
          key: r.id,
          label: r.name,
          subLabel: r.description?.slice(0, 80),
        }));
      }

      case 'cavalierorders':
        return ALL_CAVALIER_ORDERS.map((o) => ({
          key: o.id,
          label: o.name,
          subLabel: o.classSkills.join(', '),
        }));

      case 'hexes':
        return ALL_HEXES.map((h) => ({
          key: h.id,
          label: h.name,
          subLabel: h.description?.slice(0, 80),
          category:
            h.hexTier === 'grand'
              ? 'Grand Hexes'
              : h.hexTier === 'major'
                ? 'Major Hexes'
                : 'Hexes',
        }));

      case 'arcanistexploits':
        return ALL_ARCANIST_EXPLOITS.map((e) => ({
          key: e.id,
          label: e.name,
          subLabel: e.description?.slice(0, 80),
          category: e.exploitTier === 'greater' ? 'Greater Exploits' : 'Exploits',
        }));

      case 'investigatortalents':
        return ALL_INVESTIGATOR_TALENTS.map((t) => ({
          key: t.id,
          label: t.name,
          subLabel: t.description?.slice(0, 80),
        }));

      case 'ninjatricks': {
        const tier = filter.trickTier as NinjaTrickEntry['trickTier'] | undefined;
        const pool = tier
          ? ALL_NINJA_TRICKS.filter((t) => t.trickTier === tier)
          : ALL_NINJA_TRICKS;
        return pool.map((t) => ({
          key: t.id,
          label: t.name,
          subLabel: t.description?.slice(0, 80),
          category: t.trickTier === 'master' ? 'Master Tricks' : 'Tricks',
        }));
      }

      case 'slayertalents': {
        const tier = filter.talentTier as SlayerTalentEntry['talentTier'] | undefined;
        const pool = tier
          ? ALL_SLAYER_TALENTS.filter((t) => t.talentTier === tier)
          : ALL_SLAYER_TALENTS;
        return pool.map((t) => ({
          key: t.id,
          label: t.name,
          subLabel: t.description?.slice(0, 80),
          category: t.talentTier === 'advanced' ? 'Advanced Talents' : 'Talents',
        }));
      }

      case 'magusarcana':
        return ALL_MAGUS_ARCANA.map((a) => ({
          key: a.id,
          label: a.name,
          subLabel: a.description?.slice(0, 80),
        }));

      case 'warpriestblessings': {
        const deityName = filter.deityIds as string | undefined;
        const deity = deityName ? getDeityByName(deityName) : undefined;
        const deityDomainIds = deity
          ? new Set([...deity.domains, ...deity.subdomains])
          : null;
        const pool = deityDomainIds
          ? ALL_WARPRIEST_BLESSINGS.filter((b) =>
              deityDomainIds.has(b.id.replace('warpriest-blessing-', '')),
            )
          : ALL_WARPRIEST_BLESSINGS;
        return pool.map((b) => ({
          key: b.id,
          label: b.name,
          subLabel: b.minorPower.slice(0, 80),
        }));
      }

      case 'alchemistdiscoveries': {
        const tier = filter.discoveryTier as AlchemistDiscoveryEntry['discoveryTier'] | undefined;
        const pool = tier
          ? ALL_ALCHEMIST_DISCOVERIES.filter((d) => d.discoveryTier === tier)
          : ALL_ALCHEMIST_DISCOVERIES;
        return pool.map((d) => ({
          key: d.id,
          label: d.name,
          subLabel: d.description?.slice(0, 80),
          category: d.discoveryTier === 'grand' ? 'Grand Discovery' : undefined,
        }));
      }

      case 'bloodlines': {
        const classId = filter.classIds as BloodlineClassId | undefined;
        const pool = classId
          ? ALL_BLOODLINES.filter((b) => b.classIds.includes(classId))
          : ALL_BLOODLINES;
        return pool.map((b) => ({
          key: b.id,
          label: b.name,
          subLabel: b.bloodlineArcana?.slice(0, 80) ?? b.description?.slice(0, 80),
        }));
      }

      case 'feats': {
        const featTypes = filter.featTypes as FeatType[] | undefined;
        const isCombatFeat = filter.isCombatFeat as boolean | undefined;
        const isTeamworkFeat = filter.isTeamworkFeat as boolean | undefined;
        let pool = ALL_FEATS;
        if (featTypes && featTypes.length > 0) {
          pool = pool.filter((f) => featTypes.some((t) => f.types.includes(t)));
        } else if (isCombatFeat) {
          pool = pool.filter((f) => f.types.includes('combat'));
        } else if (isTeamworkFeat) {
          pool = pool.filter((f) => f.types.includes('teamwork'));
        }
        return pool.map((f) => ({
          key: f.id,
          label: f.name,
          subLabel: f.description?.slice(0, 80),
        }));
      }

      case 'shamanspirits': {
        const wanderingOnly = filter.wanderingOnly as boolean | undefined;
        const pool = wanderingOnly
          ? (ALL_SHAMAN_SPIRITS as ShamanSpiritEntry[]).filter((s) => s.wanderingSpirit)
          : (ALL_SHAMAN_SPIRITS as ShamanSpiritEntry[]);
        return pool.map((s) => ({
          key: s.id,
          label: s.name,
          subLabel: s.description?.slice(0, 80),
        }));
      }

      case 'eidolonevolutions': {
        const summonerType = filter.summonerType as 'apg' | 'unchained' | undefined;
        const pool = summonerType
          ? (ALL_EIDOLON_EVOLUTIONS as EidolonEvolutionEntry[]).filter(
              (e) => !e.summoner || e.summoner === summonerType,
            )
          : (ALL_EIDOLON_EVOLUTIONS as EidolonEvolutionEntry[]);
        return pool.map((e) => ({
          key: e.id,
          label: e.name,
          subLabel: e.description?.slice(0, 80),
          category:
            e.evolutionPointCost === 4
              ? '4-Point Evolutions'
              : e.evolutionPointCost === 3
                ? '3-Point Evolutions'
                : e.evolutionPointCost === 2
                  ? '2-Point Evolutions'
                  : '1-Point Evolutions',
        }));
      }

      case 'mesmeristtricks':
        return (ALL_MESMERIST_TRICKS as MesmeristTrickEntry[]).map((t) => ({
          key: t.id,
          label: t.name,
          subLabel: t.description?.slice(0, 80),
          category: t.trickTier === 'masterful' ? 'Masterful Tricks' : 'Standard Tricks',
        }));

      case 'wildtalents': {
        const talentType = filter.talentType as string | undefined;
        const pool = talentType
          ? ALL_WILD_TALENTS.filter((t) => t.talentType === talentType)
          : ALL_WILD_TALENTS;
        return pool.map((t) => ({
          key: t.id,
          label: t.name,
          subLabel: t.description?.slice(0, 80),
          category:
            t.talentType === 'infusion'
              ? t.infusionType === 'form'
                ? 'Form Infusions'
                : 'Substance Infusions'
              : t.element.charAt(0).toUpperCase() + t.element.slice(1),
        }));
      }

      case 'occultistfocuspowers':
        return ALL_OCCULTIST_FOCUS_POWERS.filter((p) => !p.isBasePower).map((p) => ({
          key: p.id,
          label: p.name,
          subLabel: p.description?.slice(0, 80),
          category: p.school.charAt(0).toUpperCase() + p.school.slice(1),
        }));

      case 'phrenicamplifications':
        return ALL_PHRENIC_AMPLIFICATIONS.map((a) => ({
          key: a.id,
          label: a.name,
          subLabel: a.description?.slice(0, 80),
          category: a.amplificationTier === 'major' ? 'Major Amplifications' : 'Amplifications',
        }));

      default:
        return [];
    }
  }

  // ---- Feats ----------------------------------------------------------------------

  static async getAllFeats(
    filter?: FeatFilter,
    _context?: QueryContext,
  ): Promise<FeatDefinition[]> {
    let pool = ALL_FEATS;
    if (filter?.featTypes && filter.featTypes.length > 0) {
      pool = pool.filter((f) => filter.featTypes!.some((t) => f.types.includes(t)));
    } else if (filter?.isCombatFeat) {
      pool = pool.filter((f) => f.types.includes('combat'));
    } else if (filter?.isTeamworkFeat) {
      pool = pool.filter((f) => f.types.includes('teamwork'));
    }
    return pool;
  }

  static async getFeatById(
    id: string,
    _context?: QueryContext,
  ): Promise<FeatDefinition | null> {
    return ALL_FEATS.find((f) => f.id === id) ?? null;
  }

  // ---- Traits ---------------------------------------------------------------------

  static async getAllTraits(_context?: QueryContext): Promise<TraitDefinition[]> {
    return ALL_TRAITS;
  }

  // ---- Classes --------------------------------------------------------------------

  static async getCoreClasses(_context?: QueryContext): Promise<ClassData[]> {
    return CORE_CLASSES;
  }

  static async getClassByName(name: string): Promise<ExpandedClassData | null> {
    return ALL_EXPANDED_CLASSES.find(
      (c) => c.name.toLowerCase() === name.toLowerCase(),
    ) ?? null;
  }

  static async getClassChoiceDefinitions(classId: string): Promise<ClassChoiceDefinition[]> {
    return getDefinitionsForClass(classId);
  }

  static async getSpellTables(): Promise<typeof SPELL_TABLES> {
    return SPELL_TABLES;
  }

  static async getExpandedClasses(): Promise<ExpandedClassData[]> {
    return ALL_EXPANDED_CLASSES;
  }

  // ---- Races ----------------------------------------------------------------------

  /**
   * Synchronous race group accessor. Phase A: returns static data immediately.
   * Used by components as the useState lazy initializer so the first render has
   * real data (no empty-state flicker, tests work without async effect support).
   * Phase B: remove this and update components to accept an empty initial state.
   */
  static getRaceGroupsSync(): RaceGroups {
    return {
      core: CORE_RACES,
      featured: FEATURED_RACES,
      uncommon: UNCOMMON_RACES,
      flexibleAbility: ALL_EXPANDED_RACES.filter((r) => FLEXIBLE_ABILITY_RACES.includes(r.name)),
    };
  }

  static async getRaceGroups(_context?: QueryContext): Promise<RaceGroups> {
    return this.getRaceGroupsSync();
  }

  // ---- Equipment ------------------------------------------------------------------
  // Phase B: these become Firestore queries against the equipment collections.
  // EquipmentDatabaseService.initialize() will call these instead of static imports.

  static async getWeapons(): Promise<WeaponDefinition[]> {
    return ALL_WEAPONS;
  }

  static async getArmor(): Promise<ArmorDefinition[]> {
    return ALL_ARMOR;
  }

  static async getShields(): Promise<ShieldDefinition[]> {
    return ALL_SHIELDS;
  }

  static async getGear(): Promise<GearDefinition[]> {
    return ALL_GEAR;
  }
}
