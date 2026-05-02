/**
 * GameDataService — unified data access layer for all game data.
 *
 * All reads go through the active GameDataConnector. The connector is
 * swappable — production uses FirestoreGameDataConnector, tests inject
 * StaticGameDataConnector via setConnector().
 *
 * Phase A: StaticGameDataConnector (static @/data/ imports)
 * Phase B: FirestoreGameDataConnector (Firestore, this file)
 * Future:  Drop-in replacement connector when search architecture is decided
 *
 * All methods are async. QueryContext is optional — defaults to Redux store.
 */

import { PRESET_PF1E_STANDARD } from '@/data/rulesets/presets';
import type { RootState } from '@/store/store';
import type { Ruleset } from '@/types/ruleset';
import type { SearchItem } from '@/components/ui/SearchPickerSheet';
import type { FeatDefinition, FeatType } from '@/types/feats';
import type { TraitDefinition } from '@/types/traits';
import type { ClassChoiceDefinition } from '@/types/classChoices';
import type { ExpandedClassData, SpellProgressionTable, ArchetypeData } from '@/data/classes/types';
import type { FavoredClassBonusEntry } from '@/types/favoredClassBonuses';
import type { ClassData } from '@/data/classes';
import type { ExpandedRaceData } from '@/data/races';
import type {
  WeaponDefinition,
  ArmorDefinition,
  ShieldDefinition,
  GearDefinition,
} from '@/types/equipment';
import type { MagicItemDefinition, ItemSlot } from '@/types/magicItems';
import type {
  ShamanSpiritEntry,
  EidolonEvolutionEntry,
  MesmeristTrickEntry,
  NinjaTrickEntry,
  SlayerTalentEntry,
  AlchemistDiscoveryEntry,
  BloodlineClassId,
} from '@/types/classOptions';
import type { AnimalCompanionEntry } from '@/types/animalCompanions';

// Phase B concession: sync accessors still need static data for the initial
// render of ClassSelector and race pickers. Removed once those components
// are updated to handle empty initial state (Phase B cleanup pass).
import { CORE_CLASSES } from '@/data/classes';
import {
  CORE_RACES,
  FEATURED_RACES,
  UNCOMMON_RACES,
  FLEXIBLE_ABILITY_RACES,
  ALL_EXPANDED_RACES,
} from '@/data/races';

import { FirestoreGameDataConnector } from './FirestoreGameDataConnector';
import type {
  GameDataConnector,
  ClassChoiceFilters,
  ManeuverFilter,
  DisciplineFilter,
} from './GameDataConnector';
import type {
  DisciplineDefinition,
  ManeuverDefinition,
  StanceDefinition,
  MartialTradition,
} from '@/types/initiating';
import type { EidolonBaseFormDefinition, EidolonSubtypeDefinition } from '@/types/eidolon';
import type { EidolonDataIndex } from './EidolonPoolService';
import type { SpellcastingPool, KnownSpell, Spellbook } from '@/types/spells';
import type { ClassEntry } from '@/types/classes';

// ---- QueryContext ----------------------------------------------------------------

export interface QueryContext {
  userId: string;
  campaignId?: string;
  ruleset: Ruleset;
  includePersonal?: boolean;
}

// ---- Supporting types -----------------------------------------------------------

export interface FeatFilter {
  featTypes?: FeatType[];
  isCombatFeat?: boolean;
  isTeamworkFeat?: boolean;
}

export interface RaceGroups {
  core: ExpandedRaceData[];
  featured: ExpandedRaceData[];
  uncommon: ExpandedRaceData[];
  flexibleAbility: ExpandedRaceData[];
}

// ---- GameDataService ------------------------------------------------------------

export class GameDataService {
  private static _connector: GameDataConnector | null = null;

  private static get connector(): GameDataConnector {
    if (!this._connector) {
      this._connector = new FirestoreGameDataConnector();
    }
    return this._connector;
  }

  /** For tests only — inject a connector before any test runs. */
  static setConnector(connector: GameDataConnector): void {
    this._connector = connector;
  }

  private static getContextFromStore(): QueryContext {
    const { store } = require('@/store/store') as { store: { getState(): RootState } };
    const state = store.getState();
    return {
      userId: state.auth.user?.uid ?? '',
      // Phase C: wire to state.campaigns.activeCampaignId when campaigns slice is added.
      campaignId: undefined,
      ruleset: state.ruleset.activeRuleset ?? PRESET_PF1E_STANDARD,
    };
  }

  // ---- Class choice options -------------------------------------------------------

  /**
   * Returns SearchItem[] for the given class choice collection.
   * The connector supplies raw typed data; mapping to SearchItem[] stays here
   * since it is presentation logic, not data access logic.
   */
  static async getClassChoiceItems(
    collectionName: string,
    filter: Record<string, unknown> = {},
    context?: QueryContext,
  ): Promise<SearchItem[]> {
    const ctx = context ?? GameDataService.getContextFromStore();

    // Feats are handled via their own connector methods, not getClassChoiceOptions.
    if (collectionName === 'feats') {
      const featFilter: FeatFilter = {
        featTypes: filter.featTypes as FeatType[] | undefined,
        isCombatFeat: filter.isCombatFeat as boolean | undefined,
        isTeamworkFeat: filter.isTeamworkFeat as boolean | undefined,
      };
      const feats = await GameDataService.connector.getFeats(featFilter, ctx);
      return feats.map((f) => ({
        key: f.id,
        label: f.name,
        subLabel: f.description?.slice(0, 80),
      }));
    }

    // Spell class choices — handled before validCollections to preserve classNames/maxSpellLevel context.
    if (collectionName === 'spells') {
      const classNames = (filter.classNames as string[] | undefined) ?? [];
      const maxSpellLevel = (filter.maxSpellLevel as number | undefined) ?? 9;
      const scope = (filter.scope as 'class_list' | 'spells_known' | undefined) ?? 'class_list';
      if (classNames.length === 0) return [];
      const items = await GameDataService.connector.getClassChoiceOptions(
        'spells',
        { classNames, maxSpellLevel, scope },
        ctx,
      );
      const spells = items as unknown as Array<{
        id: string;
        name: string;
        school: string;
        classLevels: Record<string, number>;
      }>;
      const mapped = spells.map((s) => {
        const levels = classNames
          .map((cls) => s.classLevels[cls])
          .filter((lvl): lvl is number => lvl !== undefined);
        const minLevel = levels.length > 0 ? Math.min(...levels) : 0;
        return {
          key: s.id,
          label: s.name,
          subLabel: GameDataService.buildSpellSubLabel(s.classLevels, classNames),
          category: `Level ${minLevel}`,
          minLevel,
        };
      });
      mapped.sort((a, b) => {
        if (a.minLevel !== b.minLevel) return a.minLevel - b.minLevel;
        return a.label.localeCompare(b.label);
      });
      return mapped.map(({ minLevel: _lvl, ...rest }) => rest);
    }

    // All other class choice collections go through getClassChoiceOptions.
    const validCollections = [
      'domains',
      'ragepowers',
      'roguetalents',
      'mysteries',
      'inquisitions',
      'revelations',
      'cavalierorders',
      'hexes',
      'arcanistexploits',
      'investigatortalents',
      'ninjatricks',
      'slayertalents',
      'magusarcana',
      'warpriestblessings',
      'alchemistdiscoveries',
      'bloodlines',
      'shamanspirits',
      'eidolonevolutions',
      'mesmeristtricks',
      'wildtalents',
      'occultistfocuspowers',
      'phrenicamplifications',
      // Initiating system — wired in Phase 8 (getDisciplines/getManeuvers/getStances)
      'disciplines',
      'maneuvers',
      'stances',
    ];

    if (!validCollections.includes(collectionName)) return [];

    const filters: ClassChoiceFilters = {
      deityName: filter.deityIds as string | undefined,
      mysteryId: filter.mysteryId as string | undefined,
      classId: filter.classIds as BloodlineClassId | undefined,
      wanderingOnly: filter.wanderingOnly as boolean | undefined,
      summonerType: filter.summonerType as 'apg' | 'unchained' | undefined,
      talentType: filter.talentType as string | undefined,
      trickTier: filter.trickTier as string | undefined,
      talentTier: filter.talentTier as string | undefined,
      discoveryTier: filter.discoveryTier as string | undefined,
    };

    const items = await GameDataService.connector.getClassChoiceOptions(
      collectionName as Parameters<GameDataConnector['getClassChoiceOptions']>[0],
      filters,
      ctx,
    );

    // Map raw collection entries to SearchItem[], preserving per-collection
    // presentation logic (tier categories, subLabel format, etc.).
    return GameDataService.mapToSearchItems(collectionName, items);
  }

  /** Maps raw ClassOptionBase[] to SearchItem[] with collection-specific labels. */
  private static mapToSearchItems(collectionName: string, items: unknown[]): SearchItem[] {
    switch (collectionName) {
      case 'domains':
        return (
          items as { id: string; name: string; description?: string; druidAllowed?: boolean }[]
        ).map((d) => ({
          key: d.id,
          label: d.name,
          subLabel: d.description?.slice(0, 80),
          category: d.druidAllowed ? 'Druid / Cleric' : 'Cleric',
        }));

      case 'ragepowers':
      case 'inquisitions':
      case 'investigatortalents':
      case 'magusarcana':
        return (items as { id: string; name: string; description?: string }[]).map((i) => ({
          key: i.id,
          label: i.name,
          subLabel: i.description?.slice(0, 80),
        }));

      case 'roguetalents':
        return (
          items as { id: string; name: string; description?: string; talentTier?: string }[]
        ).map((t) => ({
          key: t.id,
          label: t.name,
          subLabel: t.description?.slice(0, 80),
          category: t.talentTier === 'advanced' ? 'Advanced Talents' : 'Talents',
        }));

      case 'mysteries':
        return (items as { id: string; name: string; classSkills: string[] }[]).map((m) => ({
          key: m.id,
          label: m.name,
          subLabel: m.classSkills.slice(0, 3).join(', '),
        }));

      case 'revelations':
        return (items as { id: string; name: string; description?: string }[]).map((r) => ({
          key: r.id,
          label: r.name,
          subLabel: r.description?.slice(0, 80),
        }));

      case 'cavalierorders':
        return (items as { id: string; name: string; classSkills: string[] }[]).map((o) => ({
          key: o.id,
          label: o.name,
          subLabel: o.classSkills.join(', '),
        }));

      case 'hexes':
        return (
          items as { id: string; name: string; description?: string; hexTier?: string }[]
        ).map((h) => ({
          key: h.id,
          label: h.name,
          subLabel: h.description?.slice(0, 80),
          category:
            h.hexTier === 'grand' ? 'Grand Hexes' : h.hexTier === 'major' ? 'Major Hexes' : 'Hexes',
        }));

      case 'arcanistexploits':
        return (
          items as { id: string; name: string; description?: string; exploitTier?: string }[]
        ).map((e) => ({
          key: e.id,
          label: e.name,
          subLabel: e.description?.slice(0, 80),
          category: e.exploitTier === 'greater' ? 'Greater Exploits' : 'Exploits',
        }));

      case 'ninjatricks':
        return (items as NinjaTrickEntry[]).map((t) => ({
          key: t.id,
          label: t.name,
          subLabel: t.description?.slice(0, 80),
          category: t.trickTier === 'master' ? 'Master Tricks' : 'Tricks',
        }));

      case 'slayertalents':
        return (items as SlayerTalentEntry[]).map((t) => ({
          key: t.id,
          label: t.name,
          subLabel: t.description?.slice(0, 80),
          category: t.talentTier === 'advanced' ? 'Advanced Talents' : 'Talents',
        }));

      case 'warpriestblessings':
        return (items as { id: string; name: string; minorPower: string }[]).map((b) => ({
          key: b.id,
          label: b.name,
          subLabel: b.minorPower.slice(0, 80),
        }));

      case 'alchemistdiscoveries':
        return (items as AlchemistDiscoveryEntry[]).map((d) => ({
          key: d.id,
          label: d.name,
          subLabel: d.description?.slice(0, 80),
          category: d.discoveryTier === 'grand' ? 'Grand Discovery' : undefined,
        }));

      case 'bloodlines':
        return (
          items as { id: string; name: string; bloodlineArcana?: string; description?: string }[]
        ).map((b) => ({
          key: b.id,
          label: b.name,
          subLabel: b.bloodlineArcana?.slice(0, 80) ?? b.description?.slice(0, 80),
        }));

      case 'shamanspirits':
        return (items as ShamanSpiritEntry[]).map((s) => ({
          key: s.id,
          label: s.name,
          subLabel: s.description?.slice(0, 80),
        }));

      case 'eidolonevolutions':
        return (items as EidolonEvolutionEntry[]).map((e) => ({
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

      case 'mesmeristtricks':
        return (items as MesmeristTrickEntry[]).map((t) => ({
          key: t.id,
          label: t.name,
          subLabel: t.description?.slice(0, 80),
          category: t.trickTier === 'masterful' ? 'Masterful Tricks' : 'Standard Tricks',
        }));

      case 'wildtalents':
        return (
          items as {
            id: string;
            name: string;
            description?: string;
            talentType: string;
            infusionType?: string;
            element: string;
          }[]
        ).map((t) => ({
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

      case 'occultistfocuspowers':
        return (items as { id: string; name: string; description?: string; school: string }[]).map(
          (p) => ({
            key: p.id,
            label: p.name,
            subLabel: p.description?.slice(0, 80),
            category: p.school.charAt(0).toUpperCase() + p.school.slice(1),
          }),
        );

      case 'phrenicamplifications':
        return (
          items as { id: string; name: string; description?: string; amplificationTier?: string }[]
        ).map((a) => ({
          key: a.id,
          label: a.name,
          subLabel: a.description?.slice(0, 80),
          category: a.amplificationTier === 'major' ? 'Major Amplifications' : 'Amplifications',
        }));

      // TODO Phase 8: wire getDisciplines/getManeuvers/getStances through connector
      case 'disciplines':
      case 'maneuvers':
      case 'stances':
        return [];

      default:
        return [];
    }
  }

  // Spontaneous casters: their "castable" spells are their spells known, not the full class list.
  static readonly SPONTANEOUS_CASTERS = new Set([
    'oracle',
    'sorcerer',
    'bard',
    'summoner',
    'bloodrager',
    'skald',
    'medium',
    'psychic',
    'mesmerist',
    'spiritualist',
  ]);

  // Prepared casters whose list is bounded by a spellbook (familiar/tome) rather than
  // the full class catalog.
  static readonly SPELLBOOK_CASTERS = new Set(['wizard', 'arcanist', 'witch', 'magus']);

  /** Slugify a spell name to the same key format used by the seed scripts and Firestore connector. */
  static spellKey(name: string): string {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
  }

  /** Highest spell level the character can prepare from this pool (index into spellsPerDay.total). */
  static maxCastableLevelFromPool(pool: SpellcastingPool): number {
    const total = pool.spellsPerDay?.total ?? [];
    for (let i = total.length - 1; i >= 0; i--) {
      if (total[i] > 0) return i;
    }
    // Fallback: estimate from ESL using the standard full-caster formula.
    return Math.min(9, Math.ceil((pool.effectiveSpellcastingLevel ?? 0) / 2));
  }

  /**
   * Build SearchItem[] for the 'character_castable' scope:
   *   - Spontaneous casters (Oracle, Sorcerer, Bard, ...): character's knownSpells for that class
   *   - Spellbook casters (Wizard, Arcanist, Witch, Magus): spells in the character's spellbooks
   *   - Prepared class-list casters (Cleric, Druid, Paladin, ...): full class list up to max castable level
   *
   * When pools are not configured, falls back to the character's class-list entries with maxSpellLevel 9.
   */
  static async buildCastableSpellItems(
    pools: SpellcastingPool[],
    knownSpells: KnownSpell[],
    spellbooks: Spellbook[],
    characterClasses: ClassEntry[],
    eslByPoolId: Record<string, number> = {},
  ): Promise<SearchItem[]> {
    const seen = new Set<string>();
    const allItems: SearchItem[] = [];

    const addItem = (item: SearchItem) => {
      if (!seen.has(item.key)) {
        seen.add(item.key);
        allItems.push(item);
      }
    };

    // If no pools are configured, fall back to full class list with no level cap.
    const effectivePools: Array<{ baseClass: string; pool: SpellcastingPool | null }> =
      pools.length > 0
        ? pools.map((p) => ({ baseClass: p.baseClass, pool: p }))
        : characterClasses
            .map((c) => c.name.toLowerCase())
            .filter(
              (name) =>
                GameDataService.SPONTANEOUS_CASTERS.has(name) ||
                GameDataService.SPELLBOOK_CASTERS.has(name) ||
                Object.keys(GameDataService.SPELL_CLASS_ABBREV).includes(name),
            )
            .map((name) => ({ baseClass: name, pool: null }));

    for (const { baseClass, pool } of effectivePools) {
      if (GameDataService.SPONTANEOUS_CASTERS.has(baseClass)) {
        // Use the character's spells known for this class.
        const poolKnown = knownSpells.filter((s) =>
          s.classes.some((c) => c.className === baseClass),
        );
        for (const spell of poolKnown) {
          const level = spell.classes.find((c) => c.className === baseClass)?.level ?? 0;
          addItem({
            key: GameDataService.spellKey(spell.name),
            label: spell.name,
            subLabel: GameDataService.buildSpellSubLabel(spell.classLevels, [baseClass]),
            category: `Level ${level}`,
          });
        }
      } else if (GameDataService.SPELLBOOK_CASTERS.has(baseClass)) {
        // Use spells in the character's spellbooks that appear on this class list.
        const bookSpells = spellbooks
          .flatMap((b) => b.spells)
          .filter((s) => s.classLevels[baseClass] !== undefined);
        for (const spell of bookSpells) {
          const level = spell.classLevels[baseClass] ?? 0;
          addItem({
            key: GameDataService.spellKey(spell.name),
            label: spell.name,
            subLabel: GameDataService.buildSpellSubLabel(spell.classLevels, [baseClass]),
            category: `Level ${level}`,
          });
        }
      } else {
        // Prepared class-list caster: query via Firestore/static connector.
        // Prefer slot data; fall back to caller-supplied ESL (same computation
        // the Spellcasting tab uses, accounting for prestige class advancement).
        let maxLevel = pool ? GameDataService.maxCastableLevelFromPool(pool) : 9;
        if (maxLevel === 0 && pool) {
          const esl = eslByPoolId[pool.id ?? ''] ?? 0;
          maxLevel = esl > 0 ? Math.min(9, Math.ceil(esl / 2)) : 9;
        }
        const items = await GameDataService.getClassChoiceItems('spells', {
          classNames: [baseClass],
          maxSpellLevel: maxLevel,
        });
        items.forEach(addItem);
      }
    }

    allItems.sort((a, b) => {
      const lvlA = parseInt(a.category?.replace('Level ', '') ?? '0', 10);
      const lvlB = parseInt(b.category?.replace('Level ', '') ?? '0', 10);
      if (lvlA !== lvlB) return lvlA - lvlB;
      return a.label.localeCompare(b.label);
    });

    return allItems;
  }

  private static readonly SPELL_CLASS_ABBREV: Record<string, string> = {
    arcanist: 'Arc',
    bard: 'Brd',
    bloodrager: 'Blr',
    cleric: 'Clr',
    druid: 'Drd',
    hunter: 'Htr',
    inquisitor: 'Inq',
    investigator: 'Inv',
    magus: 'Mag',
    mesmerist: 'Mes',
    occultist: 'Occ',
    oracle: 'Orc',
    paladin: 'Pal',
    psychic: 'Psy',
    ranger: 'Rgr',
    shaman: 'Sha',
    skald: 'Skd',
    sorcerer: 'Sor',
    spiritualist: 'Spr',
    summoner: 'Sum',
    summoner_unchained: 'SuU',
    warpriest: 'Wpr',
    witch: 'Wtc',
    wizard: 'Wiz',
  };

  /** Builds a compact level string for a spell subLabel, e.g. "Clr 3 / Drd 3". */
  static buildSpellSubLabel(
    classLevels: Record<string, number>,
    relevantClasses: string[],
  ): string {
    const parts = relevantClasses
      .filter((cls) => classLevels[cls] !== undefined)
      .map((cls) => {
        const abbr = GameDataService.SPELL_CLASS_ABBREV[cls] ?? cls.slice(0, 3);
        return `${abbr} ${classLevels[cls]}`;
      });
    return parts.join(' / ');
  }

  // ---- Feats -----------------------------------------------------------------

  static async getAllFeats(filter?: FeatFilter, context?: QueryContext): Promise<FeatDefinition[]> {
    const ctx = context ?? GameDataService.getContextFromStore();
    return GameDataService.connector.getFeats(filter, ctx);
  }

  static async getFeatById(id: string, context?: QueryContext): Promise<FeatDefinition | null> {
    const ctx = context ?? GameDataService.getContextFromStore();
    return GameDataService.connector.getFeatById(id, ctx);
  }

  // ---- Traits ----------------------------------------------------------------

  static async getAllTraits(context?: QueryContext): Promise<TraitDefinition[]> {
    const ctx = context ?? GameDataService.getContextFromStore();
    return GameDataService.connector.getTraits(ctx);
  }

  // ---- Classes ---------------------------------------------------------------

  /**
   * Synchronous accessor — Phase B concession.
   * ClassSelector uses this as a useState lazy initializer.
   * Phase B cleanup: remove once ClassSelector accepts empty initial state.
   */
  static getCoreClassesSync(): ClassData[] {
    return CORE_CLASSES;
  }

  static async getCoreClasses(context?: QueryContext): Promise<ClassData[]> {
    const ctx = context ?? GameDataService.getContextFromStore();
    return GameDataService.connector.getCoreClasses(ctx);
  }

  static async getClassByName(
    name: string,
    context?: QueryContext,
  ): Promise<ExpandedClassData | null> {
    const ctx = context ?? GameDataService.getContextFromStore();
    return GameDataService.connector.getClassByName(name, ctx);
  }

  static async getClassChoiceDefinitions(classId: string): Promise<ClassChoiceDefinition[]> {
    return GameDataService.connector.getClassChoiceDefinitions(classId);
  }

  static async getSpellTables(): Promise<Record<string, SpellProgressionTable>> {
    return GameDataService.connector.getSpellTables();
  }

  static async getExpandedClasses(context?: QueryContext): Promise<ExpandedClassData[]> {
    const ctx = context ?? GameDataService.getContextFromStore();
    return GameDataService.connector.getClasses(ctx);
  }

  static async getAllClasses(): Promise<ExpandedClassData[]> {
    return GameDataService.connector.getClassesAll();
  }

  // ---- Races -----------------------------------------------------------------

  /**
   * Synchronous accessor — Phase B concession.
   * Race pickers use this as a useState lazy initializer.
   * Phase B cleanup: remove once pickers accept empty initial state.
   */
  static getRaceGroupsSync(): RaceGroups {
    return {
      core: CORE_RACES,
      featured: FEATURED_RACES,
      uncommon: UNCOMMON_RACES,
      flexibleAbility: ALL_EXPANDED_RACES.filter((r) => FLEXIBLE_ABILITY_RACES.includes(r.name)),
    };
  }

  static async getRaceGroups(context?: QueryContext): Promise<RaceGroups> {
    const ctx = context ?? GameDataService.getContextFromStore();
    return GameDataService.connector.getRaceGroups(ctx);
  }

  // ---- Equipment -------------------------------------------------------------

  static async getWeapons(): Promise<WeaponDefinition[]> {
    return GameDataService.connector.getWeapons();
  }

  static async getArmor(): Promise<ArmorDefinition[]> {
    return GameDataService.connector.getArmor();
  }

  static async getShields(): Promise<ShieldDefinition[]> {
    return GameDataService.connector.getShields();
  }

  static async getGear(): Promise<GearDefinition[]> {
    return GameDataService.connector.getGear();
  }

  static async getMagicItemsBySlot(slot: ItemSlot): Promise<MagicItemDefinition[]> {
    return GameDataService.connector.getMagicItemsBySlot(slot);
  }

  // ---- Initiating system -----------------------------------------------------

  static async getDisciplines(filter?: DisciplineFilter): Promise<DisciplineDefinition[]> {
    return GameDataService.connector.getDisciplines(filter);
  }

  static async getDisciplineById(id: string): Promise<DisciplineDefinition | null> {
    return GameDataService.connector.getDisciplineById(id);
  }

  static async getManeuvers(filter?: ManeuverFilter): Promise<ManeuverDefinition[]> {
    return GameDataService.connector.getManeuvers(filter);
  }

  static async getManeuverById(id: string): Promise<ManeuverDefinition | null> {
    return GameDataService.connector.getManeuverById(id);
  }

  static async getStances(filter?: ManeuverFilter): Promise<StanceDefinition[]> {
    return GameDataService.connector.getStances(filter);
  }

  static async getStanceById(id: string): Promise<StanceDefinition | null> {
    return GameDataService.connector.getStanceById(id);
  }

  static async getMartialTraditions(): Promise<MartialTradition[]> {
    return GameDataService.connector.getMartialTraditions();
  }

  static async getMartialTraditionById(id: string): Promise<MartialTradition | null> {
    return GameDataService.connector.getMartialTraditionById(id);
  }

  static async getArchetypesByClass(
    className: string,
    context?: QueryContext,
  ): Promise<ArchetypeData[]> {
    const ctx = context ?? GameDataService.getContextFromStore();
    return GameDataService.connector.getArchetypesByClass(className, ctx);
  }

  // ---- Animal companions -----------------------------------------------------

  static async getAnimalCompanions(filter?: {
    mountsOnly?: boolean;
  }): Promise<AnimalCompanionEntry[]> {
    return GameDataService.connector.getAnimalCompanions(filter);
  }

  static async getFavoredClassBonuses(
    raceName: string,
    className: string,
    context?: QueryContext,
  ): Promise<FavoredClassBonusEntry[]> {
    const ctx = context ?? GameDataService.getContextFromStore();
    return GameDataService.connector.getFavoredClassBonuses(raceName, className, ctx);
  }

  // ---- Eidolon data index ---------------------------------------------------------

  static async getEidolonBaseForms(): Promise<EidolonBaseFormDefinition[]> {
    return GameDataService.connector.getEidolonBaseForms();
  }

  static async getEidolonSubtypes(): Promise<EidolonSubtypeDefinition[]> {
    return GameDataService.connector.getEidolonSubtypes();
  }

  /**
   * Fetch all three eidolon catalog collections and assemble an EidolonDataIndex.
   * The index is consumed by EidolonPoolService and EidolonSection.
   */
  static async getEidolonDataIndex(): Promise<EidolonDataIndex> {
    const ctx = GameDataService.getContextFromStore();
    const [rawEvolutions, baseForms, subtypes] = await Promise.all([
      GameDataService.connector.getClassChoiceOptions('eidolonevolutions', {}, ctx),
      GameDataService.connector.getEidolonBaseForms(),
      GameDataService.connector.getEidolonSubtypes(),
    ]);

    const evolutions = rawEvolutions as EidolonEvolutionEntry[];
    return {
      evolutions: new Map(evolutions.map((e) => [e.id, e])),
      baseForms: new Map(baseForms.map((f) => [f.id, f])),
      subtypes: new Map(subtypes.map((s) => [s.id, s])),
    };
  }
}
