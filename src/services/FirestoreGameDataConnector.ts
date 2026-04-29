/**
 * FirestoreGameDataConnector — production GameDataConnector backed by Firestore.
 *
 * Phase B: replaces StaticGameDataConnector as the runtime data source.
 * All Firestore SDK calls are isolated here — GameDataService and callers
 * never import from firebase/firestore directly.
 *
 * Search (Phase B): prefix queries only — `name >= query AND name <= query\uf8ff`.
 * Full-text search is a separate architectural decision, deferred until proper
 * input is available. When that decision is made, swap this connector.
 *
 * Visibility (Phase B): queries `WHERE visibility == 'global'` only.
 * Campaign content support is Phase C (requires active campaignId from store).
 *
 * Caching: all results cached in GameDataCache (in-memory, session lifetime).
 * AsyncStorage persistence is Phase D.
 */

import { collection, query, where, getDocs, getDoc, doc, limit } from 'firebase/firestore';
import { db } from '@/config/firebase';
import { SPELL_TABLES } from '@/data/classes/index';

import type { FeatDefinition } from '@/types/feats';
import type { TraitDefinition } from '@/types/traits';
import type { ClassChoiceDefinition } from '@/types/classChoices';
import type { ExpandedClassData, ArchetypeData } from '@/data/classes/types';
import type { ClassData } from '@/data/classes';
import type { ClassOptionBase, EidolonEvolutionEntry } from '@/types/classOptions';
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
} from '@/types/initiating';
import type { DeityEntry } from '@/types/deities';
import type { AnimalCompanionEntry, BodyShape } from '@/types/animalCompanions';

import { GameDataCache, TTL } from './GameDataCache';
import type {
  GameDataConnector,
  ClassChoiceCollection,
  ClassChoiceFilters,
  ManeuverFilter,
  DisciplineFilter,
} from './GameDataConnector';
import type { QueryContext, RaceGroups, FeatFilter } from './GameDataService';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Slugify a name to the Firestore document ID format used by seed scripts. */
function toDocId(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

/** Fetch all docs from a collection, filtered to global visibility only. */
async function fetchAll<T>(collectionName: string): Promise<T[]> {
  try {
    const q = query(collection(db, collectionName), where('visibility', '==', 'global'));
    const snap = await getDocs(q);
    return snap.docs.map((d) => d.data() as T);
  } catch (e) {
    console.error(`FirestoreGameDataConnector: failed to fetch ${collectionName}:`, e);
    return [];
  }
}

// Fetches every document in the collection regardless of visibility.
// Used for runtime stat lookups (classes) where campaign homebrew must be included.
async function fetchAllUnfiltered<T>(collectionName: string): Promise<T[]> {
  try {
    const snap = await getDocs(collection(db, collectionName));
    return snap.docs.map((d) => d.data() as T);
  } catch (e) {
    console.error(`FirestoreGameDataConnector: failed to fetch ${collectionName}:`, e);
    return [];
  }
}

// ---------------------------------------------------------------------------
// FirestoreGameDataConnector
// ---------------------------------------------------------------------------

export class FirestoreGameDataConnector implements GameDataConnector {
  /** In-flight promise dedup — prevents thundering herd on concurrent calls. */
  private static inflight = new Map<string, Promise<unknown>>();

  private static dedup<T>(key: string, fetcher: () => Promise<T>): Promise<T> {
    const existing = this.inflight.get(key);
    if (existing) return existing as Promise<T>;

    const promise = fetcher().finally(() => {
      this.inflight.delete(key);
    });
    this.inflight.set(key, promise);
    return promise;
  }

  // ---- Deity (internal helper) -----------------------------------------------

  private async getDeityByName(name: string): Promise<DeityEntry | null> {
    const cacheKey = `deities/name/${name}`;
    const cached = GameDataCache.get<DeityEntry>(cacheKey);
    if (cached) return cached;

    try {
      const q = query(collection(db, 'deities'), where('name', '==', name), limit(1));
      const snap = await getDocs(q);
      if (snap.empty) return null;

      const result = snap.docs[0].data() as DeityEntry;
      GameDataCache.set(cacheKey, result, TTL.OFFICIAL);
      return result;
    } catch (e) {
      console.error(`FirestoreGameDataConnector: failed to fetch deity "${name}":`, e);
      return null;
    }
  }

  // ---- Class choice options ---------------------------------------------------

  async getClassChoiceOptions(
    collectionName: ClassChoiceCollection,
    filters: ClassChoiceFilters,
  ): Promise<ClassOptionBase[]> {
    const cacheKey = `${collectionName}/${JSON.stringify(filters)}`;
    const cached = GameDataCache.get<ClassOptionBase[]>(cacheKey);
    if (cached) return cached;

    let results: ClassOptionBase[];

    try {
      switch (collectionName) {
        case 'revelations': {
          const q = filters.mysteryId
            ? query(
                collection(db, collectionName),
                where('visibility', '==', 'global'),
                where('mysteryId', '==', filters.mysteryId),
              )
            : query(collection(db, collectionName), where('visibility', '==', 'global'));
          const snap = await getDocs(q);
          results = snap.docs.map((d) => d.data() as ClassOptionBase);
          break;
        }

        case 'bloodlines': {
          const q = filters.classId
            ? query(
                collection(db, collectionName),
                where('visibility', '==', 'global'),
                where('classIds', 'array-contains', filters.classId),
              )
            : query(collection(db, collectionName), where('visibility', '==', 'global'));
          const snap = await getDocs(q);
          results = snap.docs.map((d) => d.data() as ClassOptionBase);
          break;
        }

        case 'shamanspirits': {
          const q = filters.wanderingOnly
            ? query(
                collection(db, collectionName),
                where('visibility', '==', 'global'),
                where('wanderingSpirit', '==', true),
              )
            : query(collection(db, collectionName), where('visibility', '==', 'global'));
          const snap = await getDocs(q);
          results = snap.docs.map((d) => d.data() as ClassOptionBase);
          break;
        }

        case 'wildtalents': {
          const q = filters.talentType
            ? query(
                collection(db, collectionName),
                where('visibility', '==', 'global'),
                where('talentType', '==', filters.talentType),
              )
            : query(collection(db, collectionName), where('visibility', '==', 'global'));
          const snap = await getDocs(q);
          results = snap.docs.map((d) => d.data() as ClassOptionBase);
          break;
        }

        case 'ninjatricks': {
          const q = filters.trickTier
            ? query(
                collection(db, collectionName),
                where('visibility', '==', 'global'),
                where('trickTier', '==', filters.trickTier),
              )
            : query(collection(db, collectionName), where('visibility', '==', 'global'));
          const snap = await getDocs(q);
          results = snap.docs.map((d) => d.data() as ClassOptionBase);
          break;
        }

        case 'roguetalents':
        case 'slayertalents': {
          const q = filters.talentTier
            ? query(
                collection(db, collectionName),
                where('visibility', '==', 'global'),
                where('talentTier', '==', filters.talentTier),
              )
            : query(collection(db, collectionName), where('visibility', '==', 'global'));
          const snap = await getDocs(q);
          results = snap.docs.map((d) => d.data() as ClassOptionBase);
          break;
        }

        case 'alchemistdiscoveries': {
          const q = filters.discoveryTier
            ? query(
                collection(db, collectionName),
                where('visibility', '==', 'global'),
                where('discoveryTier', '==', filters.discoveryTier),
              )
            : query(collection(db, collectionName), where('visibility', '==', 'global'));
          const snap = await getDocs(q);
          results = snap.docs.map((d) => d.data() as ClassOptionBase);
          break;
        }

        case 'domains': {
          const all = await fetchAll<ClassOptionBase>('domains');
          if (filters.deityName) {
            const deity = await this.getDeityByName(filters.deityName);
            if (deity) {
              const allowed = new Set([...deity.domains, ...deity.subdomains]);
              results = all.filter((d) => allowed.has(d.id));
            } else {
              results = all;
            }
          } else {
            results = all;
          }
          break;
        }

        case 'warpriestblessings': {
          const all = await fetchAll<ClassOptionBase>('warpriestblessings');
          if (filters.deityName) {
            const deity = await this.getDeityByName(filters.deityName);
            if (deity) {
              const allowed = new Set([...deity.domains, ...deity.subdomains]);
              results = all.filter((b) => allowed.has(b.id.replace('warpriest-blessing-', '')));
            } else {
              results = all;
            }
          } else {
            results = all;
          }
          break;
        }

        case 'eidolonevolutions': {
          // Firestore `in` doesn't reliably handle null — fetch all and filter client-side.
          const all = await fetchAll<EidolonEvolutionEntry>(collectionName);
          results = (
            filters.summonerType
              ? all.filter((e) => !e.summoner || e.summoner === filters.summonerType)
              : all
          ) as ClassOptionBase[];
          break;
        }

        case 'occultistfocuspowers': {
          // Exclude base powers (isBasePower === true) at query time.
          const q = query(
            collection(db, collectionName),
            where('visibility', '==', 'global'),
            where('isBasePower', '==', false),
          );
          const snap = await getDocs(q);
          results = snap.docs.map((d) => d.data() as ClassOptionBase);
          break;
        }

        default: {
          // Simple collections with no filter support
          const q = query(collection(db, collectionName), where('visibility', '==', 'global'));
          const snap = await getDocs(q);
          results = snap.docs.map((d) => d.data() as ClassOptionBase);
          break;
        }
      }

      GameDataCache.set(cacheKey, results);
      return results;
    } catch (e) {
      console.error(`FirestoreGameDataConnector: failed to fetch ${collectionName}:`, e);
      return [];
    }
  }

  // ---- Feats -----------------------------------------------------------------

  async getFeats(filter?: FeatFilter): Promise<FeatDefinition[]> {
    const cacheKey = `feats/${JSON.stringify(filter ?? {})}`;
    const cached = GameDataCache.get<FeatDefinition[]>(cacheKey);
    if (cached) return cached;

    try {
      // Phase B: fetch all global feats, filter client-side.
      // Full query-level filtering (types, source) is Phase C / search refactor.
      const allCacheKey = 'feats/__all';
      let all = GameDataCache.get<FeatDefinition[]>(allCacheKey);
      if (!all) {
        all = await FirestoreGameDataConnector.dedup(allCacheKey, async () => {
          const q = query(collection(db, 'feats'), where('visibility', '==', 'global'));
          const snap = await getDocs(q);
          const fetched = snap.docs.map((d) => d.data() as FeatDefinition);
          GameDataCache.set(allCacheKey, fetched);
          return fetched;
        });
      }

      let results = all;
      if (filter?.featTypes && filter.featTypes.length > 0) {
        results = results.filter((f) => filter.featTypes!.some((t) => f.types.includes(t)));
      } else if (filter?.isCombatFeat) {
        results = results.filter((f) => f.types.includes('combat'));
      } else if (filter?.isTeamworkFeat) {
        results = results.filter((f) => f.types.includes('teamwork'));
      }

      GameDataCache.set(cacheKey, results);
      return results;
    } catch (e) {
      console.error('FirestoreGameDataConnector: failed to fetch feats:', e);
      return [];
    }
  }

  async getFeatById(id: string): Promise<FeatDefinition | null> {
    const cacheKey = `feats/${id}`;
    const cached = GameDataCache.get<FeatDefinition>(cacheKey);
    if (cached) return cached;

    try {
      const snap = await getDoc(doc(db, 'feats', id));
      if (!snap.exists()) return null;

      const result = snap.data() as FeatDefinition;
      GameDataCache.set(cacheKey, result);
      return result;
    } catch (e) {
      console.error(`FirestoreGameDataConnector: failed to fetch feat "${id}":`, e);
      return null;
    }
  }

  // ---- Traits ----------------------------------------------------------------

  async getTraits(): Promise<TraitDefinition[]> {
    const cacheKey = 'traits/all';
    const cached = GameDataCache.get<TraitDefinition[]>(cacheKey);
    if (cached) return cached;

    const results = await fetchAll<TraitDefinition>('traits');
    GameDataCache.set(cacheKey, results);
    return results;
  }

  // ---- Classes ---------------------------------------------------------------

  async getClasses(): Promise<ExpandedClassData[]> {
    const cacheKey = 'classes/all';
    const cached = GameDataCache.get<ExpandedClassData[]>(cacheKey);
    if (cached) return cached;

    const results = await fetchAll<ExpandedClassData>('classes');
    GameDataCache.set(cacheKey, results);
    return results;
  }

  async getClassesAll(): Promise<ExpandedClassData[]> {
    const cacheKey = 'classes/all-visibility';
    const cached = GameDataCache.get<ExpandedClassData[]>(cacheKey);
    if (cached) return cached;

    const results = await fetchAllUnfiltered<ExpandedClassData>('classes');
    GameDataCache.set(cacheKey, results);
    return results;
  }

  async getCoreClasses(): Promise<ClassData[]> {
    // Firestore 'classes' collection holds ExpandedClassData which is a superset
    // of ClassData. Fetch all and return as ClassData[].
    const all = await this.getClasses();
    return all as unknown as ClassData[];
  }

  async getClassByName(name: string): Promise<ExpandedClassData | null> {
    const cacheKey = `classes/${name.toLowerCase()}`;
    const cached = GameDataCache.get<ExpandedClassData>(cacheKey);
    if (cached) return cached;

    try {
      // Seed scripts store classes with name-derived document IDs.
      const snap = await getDoc(doc(db, 'classes', toDocId(name)));
      if (!snap.exists()) return null;

      const result = snap.data() as ExpandedClassData;
      GameDataCache.set(cacheKey, result);
      return result;
    } catch (e) {
      console.error(`FirestoreGameDataConnector: failed to fetch class "${name}":`, e);
      return null;
    }
  }

  async getClassChoiceDefinitions(classId: string): Promise<ClassChoiceDefinition[]> {
    const cacheKey = `classChoiceDefinitions/${classId}`;
    const cached = GameDataCache.get<ClassChoiceDefinition[]>(cacheKey);
    if (cached) return cached;

    try {
      const q = query(
        collection(db, 'classChoiceDefinitions'),
        where('className', '==', classId.toLowerCase()),
      );
      const snap = await getDocs(q);
      const results = snap.docs.map((d) => d.data() as ClassChoiceDefinition);

      GameDataCache.set(cacheKey, results);
      return results;
    } catch (e) {
      console.error(
        `FirestoreGameDataConnector: failed to fetch class choice definitions for "${classId}":`,
        e,
      );
      return [];
    }
  }

  async getSpellTables() {
    // Spell progression tables are mathematical config, not catalog content.
    // Static data is used here intentionally — no Firestore read needed.
    return SPELL_TABLES;
  }

  // ---- Races -----------------------------------------------------------------

  async getRaceGroups(): Promise<RaceGroups> {
    const cacheKey = 'races/groups';
    const cached = GameDataCache.get<RaceGroups>(cacheKey);
    if (cached) return cached;

    try {
      const [core, featured, uncommon, flex] = await Promise.all([
        getDocs(
          query(
            collection(db, 'races'),
            where('visibility', '==', 'global'),
            where('category', '==', 'Core'),
          ),
        ),
        getDocs(
          query(
            collection(db, 'races'),
            where('visibility', '==', 'global'),
            where('category', '==', 'Featured'),
          ),
        ),
        getDocs(
          query(
            collection(db, 'races'),
            where('visibility', '==', 'global'),
            where('category', '==', 'Uncommon'),
          ),
        ),
        getDocs(
          query(
            collection(db, 'races'),
            where('visibility', '==', 'global'),
            where('flexibleAbilityBonus', '==', true),
          ),
        ),
      ]);

      const result: RaceGroups = {
        core: core.docs.map((d) => d.data()) as RaceGroups['core'],
        featured: featured.docs.map((d) => d.data()) as RaceGroups['featured'],
        uncommon: uncommon.docs.map((d) => d.data()) as RaceGroups['uncommon'],
        flexibleAbility: flex.docs.map((d) => d.data()) as RaceGroups['flexibleAbility'],
      };

      GameDataCache.set(cacheKey, result);
      return result;
    } catch (e) {
      console.error('FirestoreGameDataConnector: failed to fetch race groups:', e);
      return { core: [], featured: [], uncommon: [], flexibleAbility: [] };
    }
  }

  // ---- Equipment -------------------------------------------------------------

  async getWeapons(): Promise<WeaponDefinition[]> {
    const cacheKey = 'weapons/all';
    const cached = GameDataCache.get<WeaponDefinition[]>(cacheKey);
    if (cached) return cached;
    const results = await fetchAll<WeaponDefinition>('weapons');
    GameDataCache.set(cacheKey, results);
    return results;
  }

  async getArmor(): Promise<ArmorDefinition[]> {
    const cacheKey = 'armor/all';
    const cached = GameDataCache.get<ArmorDefinition[]>(cacheKey);
    if (cached) return cached;
    const results = await fetchAll<ArmorDefinition>('armor');
    GameDataCache.set(cacheKey, results);
    return results;
  }

  async getShields(): Promise<ShieldDefinition[]> {
    const cacheKey = 'shields/all';
    const cached = GameDataCache.get<ShieldDefinition[]>(cacheKey);
    if (cached) return cached;
    const results = await fetchAll<ShieldDefinition>('shields');
    GameDataCache.set(cacheKey, results);
    return results;
  }

  async getGear(): Promise<GearDefinition[]> {
    const cacheKey = 'gear/all';
    const cached = GameDataCache.get<GearDefinition[]>(cacheKey);
    if (cached) return cached;
    const results = await fetchAll<GearDefinition>('gear');
    GameDataCache.set(cacheKey, results);
    return results;
  }

  async getMagicItemsBySlot(slot: ItemSlot): Promise<MagicItemDefinition[]> {
    const cacheKey = `magicItems/slot/${slot}`;
    const cached = GameDataCache.get<MagicItemDefinition[]>(cacheKey);
    if (cached) return cached;

    return FirestoreGameDataConnector.dedup(cacheKey, async () => {
      try {
        const q = query(
          collection(db, 'magicItems'),
          where('visibility', '==', 'global'),
          where('slot', '==', slot),
        );
        const snap = await getDocs(q);
        const results = snap.docs.map((d) => d.data() as MagicItemDefinition);
        GameDataCache.set(cacheKey, results, TTL.OFFICIAL);
        return results;
      } catch (e) {
        console.error(`FirestoreGameDataConnector: getMagicItemsBySlot(${slot}) failed:`, e);
        return [];
      }
    });
  }

  // ---- Initiating system -----------------------------------------------------

  async getDisciplines(filter?: DisciplineFilter): Promise<DisciplineDefinition[]> {
    const cacheKey = `disciplines/${JSON.stringify(filter ?? {})}`;
    const cached = GameDataCache.get<DisciplineDefinition[]>(cacheKey);
    if (cached) return cached;

    try {
      const all = await FirestoreGameDataConnector.dedup('disciplines/__all', async () => {
        const results = await fetchAll<DisciplineDefinition>('disciplines');
        GameDataCache.set('disciplines/__all', results, TTL.OFFICIAL);
        return results;
      });

      let results = all;
      if (filter?.sourceSystem) {
        const systems = Array.isArray(filter.sourceSystem)
          ? filter.sourceSystem
          : [filter.sourceSystem];
        results = all.filter((d) => systems.includes(d.sourceSystem));
      }

      GameDataCache.set(cacheKey, results, TTL.OFFICIAL);
      return results;
    } catch (e) {
      console.error('FirestoreGameDataConnector: failed to fetch disciplines:', e);
      return [];
    }
  }

  async getDisciplineById(id: string): Promise<DisciplineDefinition | null> {
    const cacheKey = `disciplines/${id}`;
    const cached = GameDataCache.get<DisciplineDefinition>(cacheKey);
    if (cached) return cached;

    try {
      const snap = await getDoc(doc(db, 'disciplines', id));
      if (!snap.exists()) return null;
      const result = snap.data() as DisciplineDefinition;
      GameDataCache.set(cacheKey, result, TTL.OFFICIAL);
      return result;
    } catch (e) {
      console.error(`FirestoreGameDataConnector: failed to fetch discipline "${id}":`, e);
      return null;
    }
  }

  async getManeuvers(filter?: ManeuverFilter): Promise<ManeuverDefinition[]> {
    const cacheKey = `maneuvers/${JSON.stringify(filter ?? {})}`;
    const cached = GameDataCache.get<ManeuverDefinition[]>(cacheKey);
    if (cached) return cached;

    try {
      let results: ManeuverDefinition[];

      if (filter?.disciplineId) {
        const q =
          filter.maxLevel !== undefined
            ? query(
                collection(db, 'maneuvers'),
                where('visibility', '==', 'global'),
                where('disciplineId', '==', filter.disciplineId),
                where('level', '<=', filter.maxLevel),
              )
            : query(
                collection(db, 'maneuvers'),
                where('visibility', '==', 'global'),
                where('disciplineId', '==', filter.disciplineId),
              );
        const snap = await getDocs(q);
        results = snap.docs.map((d) => d.data() as ManeuverDefinition);
      } else {
        const all = await FirestoreGameDataConnector.dedup('maneuvers/__all', async () => {
          const fetched = await fetchAll<ManeuverDefinition>('maneuvers');
          GameDataCache.set('maneuvers/__all', fetched, TTL.OFFICIAL);
          return fetched;
        });
        results =
          filter?.maxLevel !== undefined ? all.filter((m) => m.level <= filter.maxLevel!) : all;
      }

      GameDataCache.set(cacheKey, results, TTL.OFFICIAL);
      return results;
    } catch (e) {
      console.error('FirestoreGameDataConnector: failed to fetch maneuvers:', e);
      return [];
    }
  }

  async getManeuverById(id: string): Promise<ManeuverDefinition | null> {
    const cacheKey = `maneuvers/${id}`;
    const cached = GameDataCache.get<ManeuverDefinition>(cacheKey);
    if (cached) return cached;

    try {
      const snap = await getDoc(doc(db, 'maneuvers', id));
      if (!snap.exists()) return null;
      const result = snap.data() as ManeuverDefinition;
      GameDataCache.set(cacheKey, result, TTL.OFFICIAL);
      return result;
    } catch (e) {
      console.error(`FirestoreGameDataConnector: failed to fetch maneuver "${id}":`, e);
      return null;
    }
  }

  async getStances(filter?: ManeuverFilter): Promise<StanceDefinition[]> {
    const cacheKey = `stances/${JSON.stringify(filter ?? {})}`;
    const cached = GameDataCache.get<StanceDefinition[]>(cacheKey);
    if (cached) return cached;

    try {
      let results: StanceDefinition[];

      if (filter?.disciplineId) {
        const q =
          filter.maxLevel !== undefined
            ? query(
                collection(db, 'stances'),
                where('visibility', '==', 'global'),
                where('disciplineId', '==', filter.disciplineId),
                where('level', '<=', filter.maxLevel),
              )
            : query(
                collection(db, 'stances'),
                where('visibility', '==', 'global'),
                where('disciplineId', '==', filter.disciplineId),
              );
        const snap = await getDocs(q);
        results = snap.docs.map((d) => d.data() as StanceDefinition);
      } else {
        const all = await FirestoreGameDataConnector.dedup('stances/__all', async () => {
          const fetched = await fetchAll<StanceDefinition>('stances');
          GameDataCache.set('stances/__all', fetched, TTL.OFFICIAL);
          return fetched;
        });
        results =
          filter?.maxLevel !== undefined ? all.filter((s) => s.level <= filter.maxLevel!) : all;
      }

      GameDataCache.set(cacheKey, results, TTL.OFFICIAL);
      return results;
    } catch (e) {
      console.error('FirestoreGameDataConnector: failed to fetch stances:', e);
      return [];
    }
  }

  async getStanceById(id: string): Promise<StanceDefinition | null> {
    const cacheKey = `stances/${id}`;
    const cached = GameDataCache.get<StanceDefinition>(cacheKey);
    if (cached) return cached;

    try {
      const snap = await getDoc(doc(db, 'stances', id));
      if (!snap.exists()) return null;
      const result = snap.data() as StanceDefinition;
      GameDataCache.set(cacheKey, result, TTL.OFFICIAL);
      return result;
    } catch (e) {
      console.error(`FirestoreGameDataConnector: failed to fetch stance "${id}":`, e);
      return null;
    }
  }

  async getMartialTraditions(): Promise<MartialTradition[]> {
    const cacheKey = 'martialTraditions/all';
    const cached = GameDataCache.get<MartialTradition[]>(cacheKey);
    if (cached) return cached;

    const results = await fetchAll<MartialTradition>('martialTraditions');
    GameDataCache.set(cacheKey, results, TTL.OFFICIAL);
    return results;
  }

  async getMartialTraditionById(id: string): Promise<MartialTradition | null> {
    const cacheKey = `martialTraditions/${id}`;
    const cached = GameDataCache.get<MartialTradition>(cacheKey);
    if (cached) return cached;

    try {
      const snap = await getDoc(doc(db, 'martialTraditions', id));
      if (!snap.exists()) return null;
      const result = snap.data() as MartialTradition;
      GameDataCache.set(cacheKey, result, TTL.OFFICIAL);
      return result;
    } catch (e) {
      console.error(`FirestoreGameDataConnector: failed to fetch martial tradition "${id}":`, e);
      return null;
    }
  }

  // ---- Animal companions -----------------------------------------------------

  async getAnimalCompanions(filter?: { mountsOnly?: boolean }): Promise<AnimalCompanionEntry[]> {
    const cacheKey = `animalCompanions/${JSON.stringify(filter ?? {})}`;
    const cached = GameDataCache.get<AnimalCompanionEntry[]>(cacheKey);
    if (cached) return cached;

    return FirestoreGameDataConnector.dedup(cacheKey, async () => {
      try {
        const all = await FirestoreGameDataConnector.dedup('animalCompanions/__all', async () => {
          const results = await fetchAll<AnimalCompanionEntry>('animalCompanions');
          GameDataCache.set('animalCompanions/__all', results, TTL.OFFICIAL);
          return results;
        });

        let results = all;
        if (filter?.mountsOnly) {
          const MOUNT_SHAPES: readonly BodyShape[] = [
            'quadrupedHooves',
            'quadrupedOther',
            'quadrupedClaws',
            'bipedClaws',
            'avian',
          ];
          const MOUNTABLE_SIZE_RE = /Large|Huge|Gargantuan|Colossal/;
          results = all.filter(
            (entry) =>
              MOUNT_SHAPES.includes(entry.bodyShape) &&
              (MOUNTABLE_SIZE_RE.test(entry.size) ||
                entry.progressionTiers.some(
                  (t) => t.sizeChange && MOUNTABLE_SIZE_RE.test(t.sizeChange),
                )),
          );
        }

        GameDataCache.set(cacheKey, results, TTL.OFFICIAL);
        return results;
      } catch (e) {
        console.error('FirestoreGameDataConnector: getAnimalCompanions failed:', e);
        return [];
      }
    });
  }

  async getArchetypesByClass(className: string, _context?: QueryContext): Promise<ArchetypeData[]> {
    const cacheKey = `archetypes/${className}`;
    const cached = GameDataCache.get<ArchetypeData[]>(cacheKey);
    if (cached) return cached;

    return FirestoreGameDataConnector.dedup(cacheKey, async () => {
      try {
        const q = query(
          collection(db, 'archetypes'),
          where('visibility', '==', 'global'),
          where('className', '==', className),
        );
        const snap = await getDocs(q);
        const results = snap.docs.map((d) => d.data() as ArchetypeData);
        GameDataCache.set(cacheKey, results, TTL.OFFICIAL);
        return results;
      } catch (e) {
        console.error(`FirestoreGameDataConnector: getArchetypesByClass(${className}) failed:`, e);
        return [];
      }
    });
  }
}
