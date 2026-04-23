// EidolonPoolService — pure compute layer for the eidolon evolution pool.
//
// All methods are static and take their data as input. No Redux, Firestore, or
// React imports. This service computes:
//
//   - Base evolution pool per edition and class level (APG + Unchained tables)
//   - Archetype modifiers (Master Summoner, Wild Caller ARG, Morphic Savant,
//     Unwavering Conduit, Pyroclast, Broodmaster, Synthesist)
//   - Subtype bonus ep grants (Aberrant/Archon/Elemental/Kyton at L4,
//     Daemon/Demon/Div/Psychopomp/Shadow at L8)
//   - Extra Evolution feat stacking (cap 5 at summoner levels 1/5/10/15/20)
//   - Aspect (L10) and Greater Aspect (L18) diversion to summoner
//   - GM pool override
//   - Free evolutions from base form and subtype scaling
//
// The service also exposes `canSelectEvolution` for per-row picker validation.

import type { CharacterDraft } from '@/types/characterDraft';
import type { EidolonEvolutionEntry } from '@/types/classOptions';
import type {
  DraftEidolon,
  EidolonBaseFormDefinition,
  EidolonEdition,
  EidolonPoolBreakdown,
  EidolonPoolSources,
  EidolonSubtypeDefinition,
  SelectedEvolution,
  SelectedEvolutionMetadata,
} from '@/types/eidolon';
import type { Prerequisite } from '@/types/feats';

import { ALL_EIDOLON_EVOLUTIONS } from '@/data/eidolonEvolutions/index';
import { ALL_EIDOLON_BASE_FORMS } from '@/data/eidolonBaseForms/index';
import { ALL_EIDOLON_SUBTYPES } from '@/data/eidolonSubtypes/index';

// ---- Constants (AoN-verified) ----

// Pool size by summoner level. Index = level - 1.
const POOL_TABLE_APG: readonly number[] = [
  3, 4, 5, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 19, 20, 21, 22, 23, 25, 26,
];
const POOL_TABLE_UC: readonly number[] = [
  1, 2, 3, 3, 4, 5, 6, 6, 7, 8, 9, 9, 10, 11, 12, 12, 13, 14, 15, 15,
];

export const EXTRA_EVOLUTION_FEAT_ID = 'extra-evolution';
export const EXTRA_EVOLUTION_MAX_COUNT = 5;

// Archetype ids that flatly reduce the pool by 1 ep at every level.
const ARCHETYPE_FLAT_PENALTY: ReadonlySet<string> = new Set([
  'morphic-savant',
  'unwavering-conduit',
  'pyroclast',
]);

const ARCHETYPE_MASTER_SUMMONER = 'master-summoner';
const ARCHETYPE_WILD_CALLER_ARG = 'wild-caller-arg';
const ARCHETYPE_BROODMASTER = 'broodmaster';

// ---- Data index ----

export interface EidolonDataIndex {
  evolutions: Map<string, EidolonEvolutionEntry>;
  baseForms: Map<string, EidolonBaseFormDefinition>;
  subtypes: Map<string, EidolonSubtypeDefinition>;
}

// ---- Service ----

export class EidolonPoolService {
  /**
   * Build an EidolonDataIndex from the static data files. Useful for tests and
   * for callers that don't have a GameDataService-backed lookup.
   */
  static buildIndexFromStaticData(): EidolonDataIndex {
    return {
      evolutions: new Map(ALL_EIDOLON_EVOLUTIONS.map((e) => [e.id, e])),
      baseForms: new Map(ALL_EIDOLON_BASE_FORMS.map((f) => [f.id, f])),
      subtypes: new Map(ALL_EIDOLON_SUBTYPES.map((s) => [s.id, s])),
    };
  }

  /**
   * Compute the eidolon's pool breakdown: total, spent, remaining, sources,
   * and free evolutions from base form / subtype scaling.
   */
  static computePool(
    draft: CharacterDraft,
    eidolonId: string,
    dataIndex: EidolonDataIndex,
  ): EidolonPoolBreakdown {
    const warnings: string[] = [];

    const eidolon = draft.eidolons.find((e) => e.id === eidolonId);
    if (!eidolon) {
      return this.emptyBreakdown([`Eidolon '${eidolonId}' not found on draft`]);
    }

    const classEntry = draft.classes.find((c) => c.id === eidolon.summonerClassEntryId);
    if (!classEntry) {
      return this.emptyBreakdown([
        `Summoner class entry '${eidolon.summonerClassEntryId}' not found on draft`,
      ]);
    }

    const archetype = normalizeArchetypeId(classEntry.archetypeId);
    const summonerLevel = Math.max(0, classEntry.level);

    // ── Base pool ──
    // Master Summoner: eidolon uses half summoner class level (min 1).
    const effectiveLevel =
      archetype === ARCHETYPE_MASTER_SUMMONER
        ? Math.max(1, Math.floor(summonerLevel / 2))
        : summonerLevel;
    const base = summonerBaseEP(eidolon.edition, effectiveLevel);
    const archetypeModifierFromMaster =
      archetype === ARCHETYPE_MASTER_SUMMONER
        ? summonerBaseEP(eidolon.edition, summonerLevel) - base
        : 0;

    // ── Archetype flat penalty ──
    const archetypeFlat = ARCHETYPE_FLAT_PENALTY.has(archetype) ? -1 : 0;

    // ── Wild Caller (ARG): +floor(summoner level / 4) bonus ep ──
    const wildCallerBonus =
      archetype === ARCHETYPE_WILD_CALLER_ARG ? Math.floor(summonerLevel / 4) : 0;

    // Combined archetype modifier (negative when Master halves, flat penalties,
    // positive when Wild Caller adds).
    const archetypeModifier = -archetypeModifierFromMaster + archetypeFlat + wildCallerBonus;

    // ── Extra Evolution feat count (max 5) ──
    const extraFeatCount = Math.min(
      EXTRA_EVOLUTION_MAX_COUNT,
      draft.featSlots.filter((slot) => slot.featId === EXTRA_EVOLUTION_FEAT_ID).length,
    );
    const extraEvolutionFeats = extraFeatCount;

    // ── Subtype bonus ep grants ──
    let subtypeGrants = 0;
    if (eidolon.subtype) {
      const subtypeDef = dataIndex.subtypes.get(eidolon.subtype);
      if (subtypeDef) {
        for (const grant of subtypeDef.scalingGrants) {
          if (grant.classLevel > summonerLevel) continue;
          subtypeGrants += grant.bonusEvolutionPoints ?? 0;
        }
      } else {
        warnings.push(`Unknown subtype '${eidolon.subtype}'`);
      }
    } else if (eidolon.edition === 'unchained') {
      warnings.push(`Unchained eidolon '${eidolon.name}' has no subtype selected`);
    }

    // ── Broodmaster split ──
    // Broodmaster summons 2-4 Small eidolons sharing a divided pool. The summoner
    // may pre-spend shared evolutions (Large at L8+, Huge at L13+) before the
    // split. Each brood member gets floor((basePool - sharedCost) / N); the
    // first brood member receives any leftover.
    let broodmasterShare = 0;
    if (archetype === ARCHETYPE_BROODMASTER) {
      const brood = draft.eidolons.filter((e) => e.summonerClassEntryId === classEntry.id);
      const broodSize = Math.max(1, brood.length);
      const sharedEvolutions = classEntry.summonerBroodmaster?.sharedEvolutions ?? [];
      const sharedCost = this.totalEvolutionCost(sharedEvolutions, dataIndex);
      const poolBeforeSplit =
        base + archetypeModifier + subtypeGrants + extraEvolutionFeats - sharedCost;
      const shareFloor = Math.floor(poolBeforeSplit / broodSize);
      const leftover = poolBeforeSplit - shareFloor * broodSize;
      const myIndex = brood.findIndex((e) => e.id === eidolonId);
      const myShare = shareFloor + (myIndex === 0 ? leftover : 0);
      // broodmasterShare is the delta from "my full pool" to "my split share":
      broodmasterShare = myShare - (base + archetypeModifier + subtypeGrants + extraEvolutionFeats);
    }

    // ── Sum calculated total (before override) ──
    const calculatedTotal =
      base + archetypeModifier + subtypeGrants + extraEvolutionFeats + broodmasterShare;

    // ── Override replaces the calculated total if present ──
    let overrideValue = 0;
    let total = calculatedTotal;
    if (eidolon.poolOverride !== undefined) {
      overrideValue = eidolon.poolOverride.value;
      total = overrideValue;
      if (!eidolon.poolOverride.note || !eidolon.poolOverride.note.trim()) {
        warnings.push('Pool override requires a reason note');
      }
    }

    // ── Aspect / Greater Aspect diversion ──
    const transferredToSummoner = this.aspectCostToEidolon(
      eidolon.aspectTransfer?.divertedPoints ?? 0,
      summonerLevel,
    );

    // ── Spent cost ──
    const spent = this.totalEvolutionCost(eidolon.selectedEvolutions, dataIndex);
    const remaining = total - transferredToSummoner - spent;

    if (spent + transferredToSummoner > total) {
      const over = spent + transferredToSummoner - total;
      warnings.push(`Evolution pool overspent by ${over} point${over === 1 ? '' : 's'}`);
    }

    // ── Free evolutions ──
    const freeEvolutionsGranted = this.computeFreeEvolutions(
      eidolon.baseForm,
      eidolon.subtype,
      summonerLevel,
      dataIndex,
    );

    const sources: EidolonPoolSources = {
      base,
      extraEvolutionFeats,
      subtypeGrants,
      archetypeModifier,
      broodmasterShare,
      override: overrideValue,
    };

    return {
      total,
      spent,
      remaining,
      transferredToSummoner,
      sources,
      freeEvolutionsGranted,
      warnings,
    };
  }

  /**
   * Compute the list of evolution ids granted free (not charged to the pool)
   * by the base form and the subtype scaling grants up to the given class level.
   */
  static computeFreeEvolutions(
    baseFormId: string,
    subtypeId: string | undefined,
    summonerLevel: number,
    dataIndex: EidolonDataIndex,
  ): string[] {
    const result: string[] = [];

    const baseForm = dataIndex.baseForms.get(baseFormId);
    if (baseForm) {
      result.push(...baseForm.freeEvolutions);
    }

    if (subtypeId) {
      const subtype = dataIndex.subtypes.get(subtypeId);
      if (subtype) {
        for (const grant of subtype.scalingGrants) {
          if (grant.classLevel > summonerLevel) continue;
          if (grant.freeEvolutions) {
            result.push(...grant.freeEvolutions);
          }
        }
      }
    }

    return result;
  }

  /**
   * Sum the evolution point cost of a list of selected evolutions. Unknown
   * evolution ids contribute zero.
   */
  static totalEvolutionCost(evolutions: SelectedEvolution[], dataIndex: EidolonDataIndex): number {
    return evolutions.reduce((sum, sel) => {
      const def = dataIndex.evolutions.get(sel.evolutionId);
      return sum + (def?.evolutionPointCost ?? 0);
    }, 0);
  }

  /**
   * Check whether an evolution can be selected for an eidolon given the
   * current pool, prereqs, and stacking rules.
   *
   * Pass `intendedMetadata` when the user has already chosen the metadata
   * (e.g. which ability score for ability increase) to enforce stacking's
   * `requiresDifferentMetadata` and per-ability caps.
   */
  static canSelectEvolution(
    evolutionId: string,
    eidolon: DraftEidolon,
    summonerLevel: number,
    remainingPool: number,
    dataIndex: EidolonDataIndex,
    intendedMetadata?: SelectedEvolutionMetadata,
  ): { allowed: boolean; reason?: string } {
    const def = dataIndex.evolutions.get(evolutionId);
    if (!def) return { allowed: false, reason: `Unknown evolution '${evolutionId}'` };

    // Edition gating
    if (def.summoner && def.summoner !== eidolon.edition) {
      return {
        allowed: false,
        reason: `Evolution '${def.name}' is only available in the ${def.summoner.toUpperCase()} Summoner`,
      };
    }

    // Base form
    if (def.formRestrictions && def.formRestrictions.length > 0) {
      if (!def.formRestrictions.includes(eidolon.baseForm)) {
        return {
          allowed: false,
          reason: `Evolution '${def.name}' requires base form: ${def.formRestrictions.join(', ')}`,
        };
      }
    }

    // Subtype
    if (def.subtypeRestrictions && def.subtypeRestrictions.length > 0) {
      if (!eidolon.subtype || !def.subtypeRestrictions.includes(eidolon.subtype)) {
        return {
          allowed: false,
          reason: `Evolution '${def.name}' requires subtype: ${def.subtypeRestrictions.join(', ')}`,
        };
      }
    }

    // Prerequisite chain (level, ability_score, evolution, special)
    const prereqFailure = this.checkEvolutionPrereqs(def, eidolon, summonerLevel, dataIndex);
    if (prereqFailure) {
      return { allowed: false, reason: prereqFailure };
    }

    // Budget
    if (def.evolutionPointCost > remainingPool) {
      return {
        allowed: false,
        reason: `Evolution '${def.name}' costs ${def.evolutionPointCost} ep; only ${remainingPool} remaining`,
      };
    }

    // Stacking rules
    const stackFailure = this.checkStacking(def, eidolon, summonerLevel, intendedMetadata);
    if (stackFailure) {
      return { allowed: false, reason: stackFailure };
    }

    return { allowed: true };
  }

  // ---- Aspect / Greater Aspect ----

  /**
   * Eidolon-pool cost of diverting `divertedPoints` to the summoner.
   * Aspect (L10–L17): 1:1 — eidolon loses every point diverted.
   * Greater Aspect (L18+): 2:1 rounded up — eidolon loses 1 per 2 diverted.
   */
  static aspectCostToEidolon(divertedPoints: number, summonerLevel: number): number {
    if (divertedPoints <= 0) return 0;
    if (summonerLevel >= 18) return Math.ceil(divertedPoints / 2);
    return divertedPoints;
  }

  // ---- Private helpers ----

  private static emptyBreakdown(warnings: string[]): EidolonPoolBreakdown {
    return {
      total: 0,
      spent: 0,
      remaining: 0,
      transferredToSummoner: 0,
      sources: {
        base: 0,
        extraEvolutionFeats: 0,
        subtypeGrants: 0,
        archetypeModifier: 0,
        broodmasterShare: 0,
        override: 0,
      },
      freeEvolutionsGranted: [],
      warnings,
    };
  }

  private static checkEvolutionPrereqs(
    def: EidolonEvolutionEntry,
    eidolon: DraftEidolon,
    summonerLevel: number,
    dataIndex: EidolonDataIndex,
  ): string | null {
    const prereqs = def.prerequisites ?? [];
    for (const p of prereqs) {
      const failure = this.checkSinglePrereq(p, eidolon, summonerLevel, dataIndex);
      if (failure) return failure;
    }
    return null;
  }

  private static checkSinglePrereq(
    prereq: Prerequisite,
    eidolon: DraftEidolon,
    summonerLevel: number,
    dataIndex: EidolonDataIndex,
  ): string | null {
    switch (prereq.type) {
      case 'level':
        if (prereq.class && prereq.class.toLowerCase() !== 'summoner') {
          return null; // Non-summoner level prereqs handled elsewhere
        }
        if (summonerLevel < prereq.minimum) {
          return `Requires summoner level ${prereq.minimum}`;
        }
        return null;

      case 'evolution': {
        const hasEvolution = eidolon.selectedEvolutions.some(
          (s) => s.evolutionId === prereq.evolutionId,
        );
        if (!hasEvolution) {
          const def = dataIndex.evolutions.get(prereq.evolutionId);
          const name = def?.name ?? prereq.evolutionId;
          return `Requires evolution: ${name}`;
        }
        return null;
      }

      case 'ability_score':
        // DraftEidolon doesn't carry ability scores; base form ability scores
        // are the stock totals before Ability Increase evolutions are applied.
        // A precise check would require building the eidolon's current ability
        // scores from base form + ability increase evolutions; deferred to
        // phase 5 combat sheet work. For v1, soft-pass.
        return null;

      case 'special':
        // Cannot auto-check; DM override only.
        return null;

      default:
        // Other prereq types (feat, skill, race, etc.) don't apply to eidolons
        // in v1. Soft-pass to avoid spurious warnings.
        return null;
    }
  }

  private static checkStacking(
    def: EidolonEvolutionEntry,
    eidolon: DraftEidolon,
    summonerLevel: number,
    intendedMetadata?: SelectedEvolutionMetadata,
  ): string | null {
    const stacking = def.stacking;
    const existing = eidolon.selectedEvolutions.filter((s) => s.evolutionId === def.id);

    // Cannot repeat
    if (!stacking.canRepeat && existing.length > 0) {
      return `Evolution '${def.name}' cannot be selected more than once`;
    }

    // Absolute cap
    if (stacking.maxTotal !== undefined && existing.length >= stacking.maxTotal) {
      return `Evolution '${def.name}' is capped at ${stacking.maxTotal} selections`;
    }

    // Metadata uniqueness: when repeating, the new selection must have metadata
    // that differs from every existing selection.
    if (stacking.requiresDifferentMetadata && intendedMetadata) {
      const kind = stacking.requiresDifferentMetadata;
      const metaKey = metadataKey(kind, intendedMetadata);
      if (metaKey === undefined) {
        return `Evolution '${def.name}' requires choosing a ${kind} value`;
      }
      const duplicate = existing.some((s) => metadataKey(kind, s.metadata) === metaKey);
      if (duplicate) {
        return `Evolution '${def.name}' already taken with that ${kind}`;
      }
    }

    // Ability increase has its own per-ability cap: 1 + floor(summoner level / 6)
    // purchases per ability. This is independent of requiresDifferentMetadata —
    // the same ability may be chosen up to the cap, then a different ability must
    // be chosen (or wait for a higher summoner level).
    if (def.id === 'evolution-ability-increase' && intendedMetadata?.ability) {
      const perAbilityCount = existing.filter(
        (s) => s.metadata?.ability === intendedMetadata.ability,
      ).length;
      const perAbilityCap = 1 + Math.floor(summonerLevel / 6);
      if (perAbilityCount >= perAbilityCap) {
        return `Ability Increase on ${intendedMetadata.ability.toUpperCase()} already at cap (${perAbilityCap} at summoner level ${summonerLevel})`;
      }
    }

    return null;
  }
}

// ---- Module helpers (not exported) ----

function summonerBaseEP(edition: EidolonEdition, summonerLevel: number): number {
  if (summonerLevel < 1) return 0;
  const table = edition === 'apg' ? POOL_TABLE_APG : POOL_TABLE_UC;
  const idx = Math.min(summonerLevel - 1, table.length - 1);
  return table[idx];
}

function normalizeArchetypeId(id: string | undefined): string {
  return (id ?? '').toLowerCase().trim();
}

function metadataKey(
  kind: NonNullable<EidolonEvolutionEntry['stacking']['requiresDifferentMetadata']>,
  metadata: SelectedEvolutionMetadata | undefined,
): string | undefined {
  if (!metadata) return undefined;
  switch (kind) {
    case 'ability':
      return metadata.ability;
    case 'attack':
      return metadata.attackId;
    case 'energy':
      return metadata.energyType;
    case 'skill':
      return metadata.skillKey;
    case 'spell':
      return metadata.spellId;
    case 'feat':
      return metadata.featId;
    case 'slot':
      return metadata.slotId;
    case 'limbPair':
      return metadata.notes; // limbPair uses free text for "arms" / "legs"
    case 'tail':
      return metadata.notes;
    default:
      return undefined;
  }
}
