# Data Access Layer — Design Plan

## 2026-04-13

## Status: NOT STARTED

---

## Problem

The app currently loads the entire game database into memory at boot via static TypeScript imports:

```typescript
import { ALL_FEATS } from '@/data/feats/index';        // ~2,600 entries
import { ALL_DOMAINS } from '@/data/domains/index';
import { ALL_HEXES } from '@/data/hexes/index';
// ... 20+ more collections in ClassChoiceRow alone
```

This defeats the purpose of having Firestore. The bundle ships with ~442,000 lines of data that gets loaded synchronously before the app renders. The static files were always meant to be seed scripts only — they were never supposed to be the runtime data layer.

**Affected files (current runtime imports from `@/data/`):**

| File | Collections imported |
|---|---|
| `ClassChoiceRow.tsx` | ALL_DOMAINS, ALL_RAGE_POWERS, ALL_ROGUE_TALENTS, ALL_MYSTERIES, ALL_INQUISITIONS, ALL_REVELATIONS, ALL_CAVALIER_ORDERS, ALL_HEXES, ALL_ARCANIST_EXPLOITS, ALL_INVESTIGATOR_TALENTS, ALL_BLOODLINES, ALL_SHAMAN_SPIRITS, ALL_EIDOLON_EVOLUTIONS, ALL_MESMERIST_TRICKS, ALL_WILD_TALENTS, ALL_OCCULTIST_FOCUS_POWERS, ALL_PHRENIC_AMPLIFICATIONS, ALL_NINJA_TRICKS, ALL_SLAYER_TALENTS, ALL_MAGUS_ARCANA, ALL_FEATS, ALL_WARPRIEST_BLESSINGS, ALL_ALCHEMIST_DISCOVERIES, getDeityByName |
| `FeatPickerSheet.tsx` | Feats |
| `TraitsSection.tsx` | Traits |
| `EquipmentDatabaseService.ts` | ALL_WEAPONS, ALL_ARMOR, ALL_SHIELDS, ALL_GEAR |
| `PrerequisiteService.ts` | getFeatById, getClassByName |
| `DraftValidationService.ts` | getFeatById |
| `ClassSelector.tsx` | CORE_CLASSES |
| `CharacterEntryScreen.tsx` | PRESET_PF1E_STANDARD |

---

## Core Decisions

### 1. On-demand Firestore queries

Game data is fetched from Firestore at the moment it's needed — not at boot. Results are cached in memory for the session and optionally persisted to AsyncStorage for offline use.

### 2. One collection schema for all content

Homebrew content does NOT get separate Firestore collections. It lives in the same collections as official content (`feats`, `classes`, `spells`, etc.) and is differentiated by metadata fields already on the type system:

```typescript
source: string;          // 'pf1e-core' | 'pf1e-apg' | 'homebrew' | etc.
createdBy?: string;      // userId — null for official
visibility: 'global' | 'campaign';
```

Official content: `visibility: 'global'`, `createdBy: null`
Campaign homebrew: `visibility: 'campaign'`, `createdBy: dm_uid`
Personal homebrew: NOT in Firestore (see below)

**`visibility: 'private'` is removed from the type.** The original type system had three tiers (`'global' | 'campaign' | 'private'`) because it assumed all content might eventually live in Firestore. This plan makes a cleaner decision: storage location IS the privacy mechanism. Content in Firestore is either global or campaign-scoped. Content in AsyncStorage is private by definition — you don't need a flag to say what the storage location already tells you. Keeping `'private'` in the Firestore schema would invite someone to accidentally write a private document into a shared collection. The type on all collection interfaces should be updated from `'global' | 'campaign' | 'private'` to `'global' | 'campaign'`.

### 3. Local-first for user homebrew

Users never write directly to global Firestore collections. Personal homebrew lives on-device in AsyncStorage. This prevents:
- Spam / flood attacks on the shared DB
- Accidental pollution of the official data layer
- Write permission complexity

### 4. Sharing via promotion

The only path from local homebrew → Firestore is explicit promotion:
- User exports their homebrew as a shareable JSON payload (copy to clipboard, share sheet, QR code)
- A DM imports the payload and reviews it
- DM promotes it to the campaign's Firestore collection (`visibility: 'campaign'`)
- From there, all players in the campaign see it at query time

There is no self-serve write path to Firestore for end users.

### 5. Merged results at query time

The unified query layer is the only interface callers use. It transparently:
1. Queries Firestore for global + campaign content
2. Queries AsyncStorage for personal homebrew
3. Merges results, resolves conflicts, and returns a single list

Callers never know whether a result came from Firestore or local storage.

---

## Architecture

### GameDataService (new)

The single entry point for all game data queries. Replaces all direct `@/data/` imports at runtime.

```typescript
class GameDataService {
  // Feats
  static getFeatById(id: string, context: QueryContext): Promise<FeatDefinition | null>;
  static searchFeats(query: string, context: QueryContext): Promise<FeatDefinition[]>;
  static getFeatsByType(type: FeatType, context: QueryContext): Promise<FeatDefinition[]>;

  // Class options (domains, bloodlines, hexes, etc.)
  static getClassChoiceOptions(
    collection: ClassChoiceCollection,
    context: QueryContext
  ): Promise<ClassOptionBase[]>;

  // Classes
  static getClassById(id: string): Promise<ClassData | null>;
  static searchClasses(query: string, context: QueryContext): Promise<ClassData[]>;

  // Races
  static searchRaces(query: string, context: QueryContext): Promise<RaceData[]>;

  // Equipment
  static getWeapons(context: QueryContext): Promise<WeaponDefinition[]>;
  static getArmor(context: QueryContext): Promise<ArmorDefinition[]>;

  // Spells
  static searchSpells(query: string, context: QueryContext): Promise<SpellDefinition[]>;

  // Traits
  static searchTraits(query: string, context: QueryContext): Promise<TraitDefinition[]>;

  // Magic items
  static searchMagicItems(query: string, context: QueryContext): Promise<MagicItemDefinition[]>;
  static getMagicItemById(id: string): Promise<MagicItemDefinition | null>;

  // Rulesets
  static getPreset(presetId: string): Promise<Ruleset | null>;
}
```

### QueryContext

Every query carries context so the service knows what content to include:

```typescript
interface QueryContext {
  userId: string;
  campaignId?: string;       // If set, include campaign-visibility content for this campaign
  ruleset: Ruleset;          // Drives source filtering (allowedSources)
  includePersonal?: boolean; // Include user's local homebrew (default: true)
}
```

The ruleset's `allowedSources` controls which Firestore content is returned. A `pf1e-official` only ruleset will not return `visibility: 'campaign'` content from other campaigns.

**Context is optional on all GameDataService calls — it defaults to reading from the Redux store.**

Callers (components, services) do not construct or pass QueryContext. `GameDataService` reads it internally:

```typescript
class GameDataService {
  private static getContextFromStore(): QueryContext {
    const state = store.getState();
    return {
      userId: state.auth.user?.uid ?? '',
      campaignId: state.campaigns.activeCampaignId ?? undefined,
      ruleset: state.ruleset.activeRuleset ?? PRESET_PF1E_STANDARD,
    };
  }

  // Context is optional — pass explicitly only in tests or special cases
  static async searchFeats(query: string, context?: QueryContext): Promise<FeatDefinition[]> {
    const ctx = context ?? GameDataService.getContextFromStore();
    // ...
  }
}
```

**Why:** Callers fall into two categories — React components (have hook access but threading context through 20+ calls in ClassChoiceRow is noisy) and pure service classes like `PrerequisiteService` and `DraftValidationService` (no hook access at all — they cannot call `useSelector`). Defaulting to store reads keeps all call sites clean: `GameDataService.searchFeats(query)`. The optional explicit context is the escape hatch for tests and hypothetical-ruleset scenarios (e.g., previewing validation under a different ruleset).

### Firestore Query Layer (internal)

```typescript
class FirestoreGameDataSource {
  // Query a collection with standard source/visibility filtering
  private static async query<T>(
    collection: string,
    filters: GameDataFilters,
    context: QueryContext
  ): Promise<T[]>;
}

interface GameDataFilters {
  nameSearch?: string;
  ids?: string[];
  type?: string;
}
```

**Visibility filter logic:**
```
WHERE visibility == 'global'
  OR (visibility == 'campaign' AND campaignId IN character.campaigns)
  OR (visibility == 'private' AND createdBy == userId)   ← NOT used here; private is local-only
```

**Source filter logic:**
```
WHERE source IN ruleset.allowedSources
  OR id IN ruleset.itemOverrides.allowed[].id
  AND id NOT IN ruleset.itemOverrides.banned[].id
```

### Local Homebrew Layer (internal)

```typescript
class LocalHomebrewSource {
  static async getAll(collection: string): Promise<unknown[]>;
  static async getById(collection: string, id: string): Promise<unknown | null>;
  static async save(collection: string, item: unknown): Promise<void>;
  static async delete(collection: string, id: string): Promise<void>;
  static async exportPayload(collection: string, ids: string[]): Promise<HomebrewExportPayload>;
}

interface HomebrewExportPayload {
  version: string;
  exportedAt: string;
  exportedBy: string;       // userId
  collection: string;
  items: unknown[];
  signature?: string;       // Future: tamper detection
}
```

Storage key format: `homebrew/{userId}/{collection}/{itemId}`

### Caching Layer

```typescript
class GameDataCache {
  // In-memory LRU cache for session lifetime
  // Key: `{collection}/{id}` or `{collection}/search/{query_hash}`
  static get<T>(key: string): T | null;
  static set<T>(key: string, value: T, ttl?: number): void;
  static invalidate(collection: string): void;

  // AsyncStorage persistence for offline support
  static persist(key: string, value: unknown): Promise<void>;
  static restore<T>(key: string): Promise<T | null>;
}
```

Cache TTL defaults:
- Static official data (feats, classes, races): 24 hours (rarely changes)
- Campaign content: 30 minutes (DM may be updating)
- Search results: 5 minutes

---

## Local Homebrew — Full Flow

### Creating

1. User taps "Create Homebrew Feat" in the Feats section
2. `HomebrewEditor` component opens — same form fields as the feat type
3. On save, `LocalHomebrewSource.save('feats', newFeat)` writes to AsyncStorage
4. `GameDataCache.invalidate('feats')` clears relevant cache entries
5. Feat immediately available in search results via the merge layer

### Editing / Deleting

Same flow. Local writes only. No Firestore involvement.

### Exporting to Share

1. User selects homebrew items to share
2. Taps "Share"
3. `LocalHomebrewSource.exportPayload('feats', selectedIds)` produces a JSON payload
4. System share sheet opens with the payload as a file or JSON string
5. Recipient (typically a DM) receives the payload

### DM Import and Promotion

1. DM receives export payload (file, paste, QR scan)
2. `HomebrewImporter` validates the payload schema
3. DM reviews each item, can edit before saving
4. DM chooses: **Save to my local** or **Promote to campaign**
5. **Promote to campaign**: writes to Firestore with `visibility: 'campaign'`, `createdBy: dm_uid`
6. All campaign players see the content on next query

---

## Merge Strategy

`GameDataService` calls both sources and merges:

```typescript
static async searchFeats(query: string, context: QueryContext): Promise<FeatDefinition[]> {
  const [firestoreResults, localResults] = await Promise.all([
    FirestoreGameDataSource.query('feats', { nameSearch: query }, context),
    context.includePersonal !== false
      ? LocalHomebrewSource.getAll('feats')
      : Promise.resolve([]),
  ]);

  // Merge: Firestore wins on ID collision (official/campaign overrides local)
  const seen = new Set<string>();
  const merged: FeatDefinition[] = [];

  for (const item of [...firestoreResults, ...localResults]) {
    if (!seen.has(item.id)) {
      seen.add(item.id);
      merged.push(item as FeatDefinition);
    }
  }

  return merged.filter(f => matchesSearch(f, query));
}
```

**Conflict resolution:** Firestore wins. If a local homebrew item has the same ID as a Firestore entry (e.g., because a DM promoted it), the Firestore version takes precedence and the local copy becomes stale.

---

## Implementation Phases

### Phase A — GameDataService scaffold

1. Create `src/services/GameDataService.ts` with all public method signatures
2. Internal implementations hit `@/data/` imports initially — same behavior, new interface
3. All callers migrated to use `GameDataService` instead of direct `@/data/` imports
4. Zero behavior change; sets up the seam for Phase B

Affected callers to migrate:
- `ClassChoiceRow.tsx` — largest change (20+ collection imports → one service)
- `FeatPickerSheet.tsx`
- `TraitsSection.tsx`
- `EquipmentDatabaseService.ts`
- `PrerequisiteService.ts`
- `DraftValidationService.ts`
- `ClassSelector.tsx`
- `CharacterEntryScreen.tsx` (rulesets preset only)

### Phase B — Firestore backend

1. Create `FirestoreGameDataSource` with query + visibility + source filtering
2. Swap `GameDataService` internals from static imports to Firestore calls
3. Add `GameDataCache` (in-memory only, no persistence yet)
4. Requires: all collections seeded to Firestore staging

### Phase C — Local homebrew

1. Create `LocalHomebrewSource` (AsyncStorage)
2. Create `HomebrewEditor` component (shared form for all content types)
3. Implement export payload + import/validate flow
4. Wire merge logic into `GameDataService`
5. `HomebrewImporter` for DM promotion to campaign Firestore

### Phase D — Offline + persistence

1. Add AsyncStorage persistence to `GameDataCache`
2. Cache warming on login (prefetch character-relevant data)
3. Offline fallback: if Firestore unreachable, serve from persisted cache

---

## Firestore Indexes Required

Each searchable collection needs a composite index:

```
feats: (visibility ASC, source ASC, name ASC)
feats: (visibility ASC, createdBy ASC, name ASC)
classes: (visibility ASC, source ASC, name ASC)
traits: (visibility ASC, source ASC, name ASC)
spells: (visibility ASC, source ASC, level ASC, name ASC)
```

Campaign-scoped queries add `campaignId` to the relevant indexes. Define in `firestore.indexes.json`.

---

## Known Constraints

### Firestore does not support full-text search

Firestore only supports prefix matching (`WHERE name >= 'pow' AND name <= 'pow\uf8ff'`). A user typing "attack" will not find "Power Attack". This is a fundamental Firestore limitation and must be decided before Phase B.

Options:
- **Prefix-only search** — simplest, probably acceptable for most use cases (users type "Power" to find "Power Attack"). Implement first; revisit if feedback is bad.
- **Client-side filter after prefix fetch** — fetch the prefix-matching set, then filter client-side for substring matches. Works for small result sets; degrades on large ones.
- **Algolia / Typesense** — proper full-text search, requires a separate service and indexing pipeline. Best experience, most complexity. Defer until user feedback demands it.

**Decision needed before Phase B begins.** The plan proceeds with prefix-only search as the MVP assumption.

### `PrerequisiteService` and `DraftValidationService` migration complexity

Both services use `getFeatById()` synchronously today. Making `GameDataService` calls async has ripple effects — these services' public APIs will need to become `async`, which cascades to their call sites in `DraftValidationService.validate()` and `CharacterEntryScreen.handleValidate()`. This is the most complex caller migration in Phase A and should be tackled last, after the simpler component migrations are stable.

### Coordination with data quality system

The data quality plan (in progress) adds `verificationStatus: 'verified' | 'needs_review' | 'stub'` to every collection entry. The `FirestoreGameDataSource` query layer must filter `WHERE verificationStatus != 'stub'` on all player-facing queries. This filter must be wired into Phase B alongside the visibility and source filters — not added as an afterthought.

### Phase B is blocked on Firestore seeding

Phase B requires all game data collections seeded to Firestore staging. Phase A (service scaffold + caller migration) can proceed immediately against static imports. Phase B cannot start until seeding is complete.

---

## Open Questions

| Question | Notes |
|---|---|
| Should `GameDataCache` use AsyncStorage or a dedicated SQLite layer? | AsyncStorage is already in the project and sufficient for MVP. SQLite (via expo-sqlite) is better for search but adds complexity. Revisit in Phase D. |
| QR code sharing for homebrew? | Nice UX but requires a QR library. Defer to Phase C+. Share sheet with JSON file is sufficient for MVP. |
| Signature/tamper detection on export payloads? | Future. Not blocking for MVP. |
| Pagination on large collections (feats: ~2,600)? | Firestore query cursors. Search results paginate at 50; full lists (e.g., class choices) load all. Implement in Phase B. |
| Full-text search solution? | See Known Constraints above. Decision needed before Phase B. |
