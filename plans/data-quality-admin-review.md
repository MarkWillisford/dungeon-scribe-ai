# Data Quality & Admin Review System

## 2026-03-17

### Problem

Scraped game data collections contain entries in three states of completeness:

| Status           | Meaning                                                                                              | Current count                                                  |
| ---------------- | ---------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| **verified**     | Stats confirmed directly from official source                                                        | ~95% of entries                                                |
| **needs_review** | Stats present but sourced from community research; plausible but not confirmed against physical book | ~10–15 entries (Puma, Seal, Sheep, Unicorn, etc.)              |
| **stub**         | Placeholder data only; no usable stats found (AONPRD JS-rendered, not in SRD)                        | ~14 animal companion entries; likely more in other collections |

These exist today in animal companions (`ds-animalcompanions-scraping`) but the same
pattern will arise in every scraped collection. Without a system to track and surface
them, stub entries will be silently seeded to Firestore and corrupt gameplay.

**Goal:** Add a `verificationStatus` field to all collection types, use it to gate
visibility at query time, and build an admin-facing review queue so unverified/stub
entries can be manually resolved against physical source books.

---

## Scope

This plan covers:

1. Type interface changes (all collection types)
2. Seed script tagging for existing collections
3. Firestore service query updates
4. Admin review screen (`app/admin/data-review.tsx`)
5. Admin navigation entry

This does **not** change anything for regular users — unverified entries are visible
(with a badge) and stub entries are hidden. No gameplay logic changes.

---

## Data Model Changes

### New shared fields (add to every collection entry type)

```typescript
// Add to: AnimalCompanionEntry, DomainEntry, SpellEntry, ClassChoiceDefinition,
//          RagePowerEntry, RogueTalentEntry, TemplateEntry, DeityEntry, FeatEntry
verificationStatus: 'verified' | 'needs_review' | 'stub';
adminNotes?: string; // free-text; shown in admin review queue
```

### File: `src/types/animalCompanions.ts`

```typescript
export interface AnimalCompanionEntry {
  // ... existing fields unchanged ...
  verificationStatus: 'verified' | 'needs_review' | 'stub';
  adminNotes?: string;
}
```

Apply the same two-field addition to:

- `src/types/classOptions.ts` — `DomainEntry`, `RagePowerEntry`, `RogueTalentEntry`
- `src/types/spells.ts` — `SpellEntry`
- `src/types/classChoices.ts` — `ClassChoiceDefinition`
- `src/types/templates.ts` — `TemplateEntry`
- `src/types/deities.ts` — `DeityEntry`
- `src/types/feats.ts` — `FeatEntry`

### Shared type helper (optional, avoids repetition)

```typescript
// src/types/base.ts — add to existing file
export interface DataQualityFields {
  verificationStatus: 'verified' | 'needs_review' | 'stub';
  adminNotes?: string;
}
```

Then spread into each interface: `extends DataQualityFields` or just duplicate the two
fields — either is fine, pick what keeps the types readable.

---

## Seed Script Tagging Strategy

Every entry in every seed script needs a `verificationStatus`. The rule is simple:

```
verified      → confirmed directly from d20pfsrd or AONPRD at scrape time
needs_review  → stats from community/forum source, or marked with "TODO: verify"
stub          → empty progressionTiers AND/OR all-placeholder ability scores
```

### Animal Companions — known status assignments

**`needs_review`** (has TODO comment in source file):

- Puma, Seal, Sheep (batch_005 / batch_006)
- Unicorn (batch_007)

**`stub`** (no usable stats found):

- Squirrel Giant Tree, Stag Beetle, Trilobite Giant, Trout, Tuatara Giant
- Turkey, Turtle (plain), Ursine Charger, Viper Giant, Whale Shark
- Wombat Giant, Woodpecker Giant, Wyvern Skeletal (batch_006 / batch_007)

**`verified`** — all remaining ~185 entries

### Other collections

At seed-script authoring time, scan each collection's batch files for:

1. Files containing `// TODO: manually verify`
2. Files containing `// PAGE_FETCH_FAILED`
3. Entries with `source: 'pf1e-unknown'`

Tag those `needs_review` or `stub` as appropriate. All others default to `verified`.

---

## Firestore Service Changes

### Animal companions picker (future — Phase 3e)

```typescript
// When building companion list for character sheet:
query(
  collection(db, 'animalcompanions'),
  where('verificationStatus', '!=', 'stub'), // hide stubs from players
  orderBy('name'),
);
```

### All other collection pickers

Same pattern: add `where('verificationStatus', '!=', 'stub')` to any query that
feeds a player-facing picker. `needs_review` entries are still visible to regular
users — they just get a badge (see UI below).

### Admin review query

```typescript
// For the admin review screen:
query(
  collection(db, collectionName),
  where('verificationStatus', 'in', ['needs_review', 'stub']),
  orderBy('name'),
);
```

---

## Admin Review Screen

### Location

`app/admin/data-review.tsx` — gated behind admin role check (same pattern as any
future admin screens). Route: `/admin/data-review`.

### Layout

```
┌────────────────────────────────────────┐
│  DATA REVIEW QUEUE                     │
│  [All Collections ▾]  [Status: All ▾] │
├────────────────────────────────────────┤
│  ● animalcompanions (13 stub, 4 review)│
│  ● domains (0 issues)                  │
│  ● spells (N issues)                   │
│  ...                                    │
├────────────────────────────────────────┤
│  STUB  │ Stag Beetle                   │
│        │ animalcompanions              │
│        │ Not in vermin companion list  │
│        │                    [Resolve ▶]│
├────────────────────────────────────────┤
│  REVIEW│ Puma                          │
│        │ animalcompanions              │
│        │ Stats from Paizo forum post;  │
│        │ verify against PRG:UW p.182   │
│        │                    [Resolve ▶]│
└────────────────────────────────────────┘
```

### Resolve drawer / modal

Tapping **Resolve** opens a bottom sheet showing:

- All current field values for the entry (read-only display)
- `adminNotes` field (editable text area)
- Status selector: `stub` → `needs_review` → `verified`
- **Save** — writes updated `verificationStatus` + `adminNotes` to Firestore

No inline stat editing in this MVP — the intent is for the admin to verify against
a physical book and then either mark it verified or note what needs fixing. Full
stat editing can be added later via the homebrew/campaign content editing path.

### Collection summary chips

Header chips show a count per collection. Tapping filters the list. Zero-issue
collections show a green checkmark — gives at-a-glance status of data health.

---

## Badge in Player-Facing UI

For `needs_review` entries visible to regular users, show a small amber `⚠` badge
in the companion/spell/feat picker row. Tapping it shows a tooltip:

> "This entry's stats are unconfirmed. It may differ from your physical sourcebook."

Do **not** block selection — the player can still use it. This is a warning, not a
hard error.

---

## Implementation Steps

### Phase A — Type changes + seed tagging

1. **Branch:** `MW/data-quality-fields`
2. Add `verificationStatus` + `adminNotes?` to all collection type interfaces
3. Add `verificationStatus` to every existing seed script entry:
   - Animal companions: tag stubs and needs_review per the list above
   - Other collections: scan for TODO/PAGE_FETCH_FAILED/pf1e-unknown markers
4. Run `npm run typecheck` — all new fields must be present or TS will catch missing ones
5. Run tests — no logic changes, all tests should still pass

### Phase B — Service query updates

6. Add `where('verificationStatus', '!=', 'stub')` to all player-facing Firestore queries
7. This is a no-op until data is seeded with the new field — existing docs without the
   field will still be returned. Clean seeding order: Phase A merged → re-seed → Phase B queries active.

### Phase C — Admin screen

8. Create `app/admin/` directory with `_layout.tsx` (admin role gate)
9. Build `app/admin/data-review.tsx` — list view with collection filter + status filter
10. Build resolve bottom sheet (status selector + adminNotes textarea + Save)
11. Wire up admin navigation entry (settings screen or dedicated admin tab)

### Phase D — Player badge

12. Add `⚠ unconfirmed` badge to picker row components for `needs_review` entries
13. Add tooltip on tap

---

## Admin Role Gate

Today the app has no admin/user role distinction in the UI. The simplest approach
for the gate:

```typescript
// src/services/AdminService.ts
const ADMIN_UIDS = ['your-firebase-uid-here']; // env var or Firestore config doc

export function isAdmin(uid: string): boolean {
  return ADMIN_UIDS.includes(uid);
}
```

Longer term: add a `role: 'user' | 'admin'` field to the Firestore `users/{uid}`
document and read it at login. But the hardcoded list is fine for now — there's
only one admin (you).

---

## Files to Create / Modify

| File                                                | Change                                                                                   |
| --------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `src/types/animalCompanions.ts`                     | Add `verificationStatus`, `adminNotes?`                                                  |
| `src/types/classOptions.ts`                         | Add `verificationStatus`, `adminNotes?` to DomainEntry, RagePowerEntry, RogueTalentEntry |
| `src/types/spells.ts`                               | Add `verificationStatus`, `adminNotes?`                                                  |
| `src/types/classChoices.ts`                         | Add `verificationStatus`, `adminNotes?`                                                  |
| `src/types/templates.ts`                            | Add `verificationStatus`, `adminNotes?`                                                  |
| `src/types/deities.ts`                              | Add `verificationStatus`, `adminNotes?`                                                  |
| `src/types/feats.ts`                                | Add `verificationStatus`, `adminNotes?`                                                  |
| `scripts/db/seed*.ts` (all)                         | Tag every entry with `verificationStatus`                                                |
| `src/services/Firebase*Service.ts` (picker queries) | Add `!= 'stub'` filter                                                                   |
| `app/admin/_layout.tsx`                             | New — admin role gate                                                                    |
| `app/admin/data-review.tsx`                         | New — review queue screen                                                                |
| `src/services/AdminService.ts`                      | New — isAdmin() helper                                                                   |
| `src/components/shared/UnconfirmedBadge.tsx`        | New — amber ⚠ badge for needs_review                                                     |

---

## Open Questions

- **Firestore inequality filter note:** `where('verificationStatus', '!=', 'stub')` requires
  a composite index if combined with `orderBy('name')`. Add the index in `firestore.indexes.json`
  or Firestore will throw at runtime and provide a link to create it.
- **Re-seeding strategy:** Adding fields to existing documents is non-destructive. The seed
  scripts use upsert — running them again after Phase A merges will add `verificationStatus`
  to existing docs without touching anything else.
- **Does `needs_review` affect combat?** No. The data is used in the Animal Companion
  builder (Phase 3e, not yet built). By the time that screen exists, we should have
  resolved most `needs_review` entries manually.

---

## Status

- [ ] Phase A — Type changes + seed tagging
- [ ] Phase B — Service query updates
- [ ] Phase C — Admin screen
- [ ] Phase D — Player badge
