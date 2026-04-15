/**
 * StaticGameDataConnector — GameDataConnector backed by static TypeScript imports.
 *
 * This is the Phase A implementation, extracted into the connector interface.
 * Used in tests so that jest.mock('@/data/...') calls still control what the
 * service returns, without needing to mock Firestore.
 *
 * Not used in production. FirestoreGameDataConnector is the production connector.
 */

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

import type { FeatDefinition } from '@/types/feats';
import type { TraitDefinition } from '@/types/traits';
import type {
  ClassOptionBase,
  ShamanSpiritEntry,
  EidolonEvolutionEntry,
} from '@/types/classOptions';
import type {
  GameDataConnector,
  ClassChoiceCollection,
  ClassChoiceFilters,
} from './GameDataConnector';
import type { QueryContext, RaceGroups, FeatFilter } from './GameDataService';

export class StaticGameDataConnector implements GameDataConnector {
  async getClassChoiceOptions(
    collectionName: ClassChoiceCollection,
    filters: ClassChoiceFilters,
  ): Promise<ClassOptionBase[]> {
    switch (collectionName) {
      case 'domains': {
        const deity = filters.deityName ? getDeityByName(filters.deityName) : undefined;
        const deityDomainIds = deity ? new Set([...deity.domains, ...deity.subdomains]) : null;
        return (
          deityDomainIds ? ALL_DOMAINS.filter((d) => deityDomainIds.has(d.id)) : ALL_DOMAINS
        ) as ClassOptionBase[];
      }

      case 'ragepowers':
        return ALL_RAGE_POWERS as ClassOptionBase[];

      case 'roguetalents':
        return (
          filters.talentTier
            ? ALL_ROGUE_TALENTS.filter((t) => t.talentTier === filters.talentTier)
            : ALL_ROGUE_TALENTS
        ) as ClassOptionBase[];

      case 'mysteries':
        return ALL_MYSTERIES as ClassOptionBase[];

      case 'inquisitions':
        return ALL_INQUISITIONS as ClassOptionBase[];

      case 'revelations':
        return (
          filters.mysteryId
            ? ALL_REVELATIONS.filter((r) => r.mysteryId === filters.mysteryId)
            : ALL_REVELATIONS
        ) as ClassOptionBase[];

      case 'cavalierorders':
        return ALL_CAVALIER_ORDERS as ClassOptionBase[];

      case 'hexes':
        return ALL_HEXES as ClassOptionBase[];

      case 'arcanistexploits':
        return ALL_ARCANIST_EXPLOITS as ClassOptionBase[];

      case 'investigatortalents':
        return ALL_INVESTIGATOR_TALENTS as ClassOptionBase[];

      case 'ninjatricks':
        return (
          filters.trickTier
            ? ALL_NINJA_TRICKS.filter((t) => t.trickTier === filters.trickTier)
            : ALL_NINJA_TRICKS
        ) as ClassOptionBase[];

      case 'slayertalents':
        return (
          filters.talentTier
            ? ALL_SLAYER_TALENTS.filter((t) => t.talentTier === filters.talentTier)
            : ALL_SLAYER_TALENTS
        ) as ClassOptionBase[];

      case 'magusarcana':
        return ALL_MAGUS_ARCANA as ClassOptionBase[];

      case 'warpriestblessings': {
        const deity = filters.deityName ? getDeityByName(filters.deityName) : undefined;
        const deityDomainIds = deity ? new Set([...deity.domains, ...deity.subdomains]) : null;
        return (
          deityDomainIds
            ? ALL_WARPRIEST_BLESSINGS.filter((b) =>
                deityDomainIds.has(b.id.replace('warpriest-blessing-', '')),
              )
            : ALL_WARPRIEST_BLESSINGS
        ) as ClassOptionBase[];
      }

      case 'alchemistdiscoveries':
        return (
          filters.discoveryTier
            ? ALL_ALCHEMIST_DISCOVERIES.filter((d) => d.discoveryTier === filters.discoveryTier)
            : ALL_ALCHEMIST_DISCOVERIES
        ) as ClassOptionBase[];

      case 'bloodlines':
        return (
          filters.classId
            ? ALL_BLOODLINES.filter((b) => b.classIds.includes(filters.classId!))
            : ALL_BLOODLINES
        ) as ClassOptionBase[];

      case 'shamanspirits':
        return (
          filters.wanderingOnly
            ? (ALL_SHAMAN_SPIRITS as ShamanSpiritEntry[]).filter((s) => s.wanderingSpirit)
            : (ALL_SHAMAN_SPIRITS as ShamanSpiritEntry[])
        ) as ClassOptionBase[];

      case 'eidolonevolutions':
        return (
          filters.summonerType
            ? (ALL_EIDOLON_EVOLUTIONS as EidolonEvolutionEntry[]).filter(
                (e) => !e.summoner || e.summoner === filters.summonerType,
              )
            : (ALL_EIDOLON_EVOLUTIONS as EidolonEvolutionEntry[])
        ) as ClassOptionBase[];

      case 'mesmeristtricks':
        return ALL_MESMERIST_TRICKS as ClassOptionBase[];

      case 'wildtalents':
        return (
          filters.talentType
            ? ALL_WILD_TALENTS.filter((t) => t.talentType === filters.talentType)
            : ALL_WILD_TALENTS
        ) as ClassOptionBase[];

      case 'occultistfocuspowers':
        return ALL_OCCULTIST_FOCUS_POWERS.filter((p) => !p.isBasePower) as ClassOptionBase[];

      case 'phrenicamplifications':
        return ALL_PHRENIC_AMPLIFICATIONS as ClassOptionBase[];

      default:
        return [];
    }
  }

  async getFeats(filter?: FeatFilter): Promise<FeatDefinition[]> {
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

  async getFeatById(id: string): Promise<FeatDefinition | null> {
    return ALL_FEATS.find((f) => f.id === id) ?? null;
  }

  async getTraits(): Promise<TraitDefinition[]> {
    return ALL_TRAITS;
  }

  async getClasses() {
    return ALL_EXPANDED_CLASSES;
  }

  async getCoreClasses() {
    return CORE_CLASSES;
  }

  async getClassByName(name: string) {
    return ALL_EXPANDED_CLASSES.find((c) => c.name.toLowerCase() === name.toLowerCase()) ?? null;
  }

  async getClassChoiceDefinitions(classId: string) {
    return getDefinitionsForClass(classId);
  }

  async getSpellTables() {
    return SPELL_TABLES;
  }

  async getRaceGroups(): Promise<RaceGroups> {
    return {
      core: CORE_RACES,
      featured: FEATURED_RACES,
      uncommon: UNCOMMON_RACES,
      flexibleAbility: ALL_EXPANDED_RACES.filter((r) => FLEXIBLE_ABILITY_RACES.includes(r.name)),
    };
  }

  async getWeapons() {
    return ALL_WEAPONS;
  }

  async getArmor() {
    return ALL_ARMOR;
  }

  async getShields() {
    return ALL_SHIELDS;
  }

  async getGear() {
    return ALL_GEAR;
  }
}
