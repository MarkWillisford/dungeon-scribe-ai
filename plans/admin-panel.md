# Admin Panel

## Status: NOT STARTED (2026-04-15)

Admin role system (PR #60) is complete and merged. This plan covers everything built on top of it.

---

## Overview

Three concerns, delivered in phases:

1. **Admin navigation shell** — a role-gated section of the app, accessed from Settings
2. **Data quality review** — inline verify/stub controls on game data entries; player warning badges
3. **Custom content creation** — admin forms to create homebrew/campaign content in Firestore

The inline data quality review is the highest-value piece for playtest: it lets Mark confirm or hide
scraped entries naturally as Rissi's character gets built, without any separate workflow.

Custom content creation is the longer-term replacement for one-off seed scripts. Phase E handles it.

---

## Foundation (already built — PR #60)

- `scripts/setAdminClaim.ts` — grants/revokes `{ admin: true }` Custom Claim via Admin SDK
- `src/services/AdminService.ts` — `isAdmin()` reads `request.auth.token.admin` from cached ID token
- `firestore.rules` — `isAdmin()` helper; all 37 game data collections gated with `write: if isAdmin()`
- `src/types/auth.ts` — `AppUser.role` extended to `'player' | 'dm' | 'admin'`

---

## Phase A — Admin Navigation Shell

**Branch:** `MW/admin-nav-shell`

### Routing

Admin panel lives at `app/admin/`. It is NOT a bottom tab — regular users never see it.
Access point: a tappable row in Settings, visible only when `AdminService.isAdmin()` returns true.

```
app/
  admin/
    _layout.tsx       ← role gate; redirects non-admins to /
    index.tsx         ← admin home: links to Data Review and Content
    data-review.tsx   ← Phase D
    content/
      _layout.tsx
      index.tsx       ← Phase E: content type picker
      [type].tsx      ← Phase E: creation form per content type
```

### `app/admin/_layout.tsx`

```typescript
// Role gate — async check on mount. Shows loading state while token resolves.
// Redirects to '/' if not admin. This is the only place the check is needed
// for navigation; individual screens can trust the layout gate.
import { useEffect, useState } from 'react';
import { Redirect, Stack } from 'expo-router';
import { AdminService } from '@/services/AdminService';

export default function AdminLayout() {
  const [checked, setChecked] = useState(false);
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    AdminService.isAdmin().then((result) => {
      setAdmin(result);
      setChecked(true);
    });
  }, []);

  if (!checked) return null; // brief loading state; add spinner if needed
  if (!admin) return <Redirect href="/" />;
  return <Stack />;
}
```

### Settings entry point

In `app/(tabs)/settings/index.tsx`, add an "Admin Panel" row that:
- Only renders when `AdminService.isAdmin()` is true (checked on mount, same pattern as above)
- Navigates to `/admin`

### `app/admin/index.tsx`

Simple dashboard with two cards:
- **Data Quality** → navigates to `app/admin/data-review`
- **Content** → navigates to `app/admin/content`

Show a brief summary on each card (e.g., "2,401 unreviewed entries" once Phase D is built).
For Phase A, static labels are fine.

### Files to create / modify

| File | Change |
|---|---|
| `app/admin/_layout.tsx` | New — role gate |
| `app/admin/index.tsx` | New — admin home dashboard |
| `app/(tabs)/settings/index.tsx` | Add admin panel entry (conditional on isAdmin) |

---

## Phase B — Data Quality Types + Seed Defaults

**Branch:** `MW/data-quality-fields`

### Type changes

Add `DataQualityFields` to `src/types/base.ts`:

```typescript
export interface DataQualityFields {
  verificationStatus: 'verified' | 'needs_review' | 'stub';
  adminNotes?: string;
}
```

Add `extends DataQualityFields` (or spread the two fields) to every collection entry type:
`AnimalCompanionEntry`, `DomainEntry`, `SpellEntry`, `ClassChoiceDefinition`, `RagePowerEntry`,
`RogueTalentEntry`, `TemplateEntry`, `DeityEntry`, `FeatEntry`, `FeatDefinition`, `TraitDefinition`,
`ClassEntry` / `ExpandedClassData`, `ExpandedRaceData`, `BloodlineEntry`, `MysteryEntry`,
`InquisitionEntry`, `RevelationEntry`, `CavalierOrderEntry`, `HexEntry`, `ArcanistExploitEntry`,
`InvestigatorTalentEntry`, `KineticistWildTalentEntry`, `MagusArcanaEntry`, `MesmeristTrickEntry`,
`NinjaTrickEntry`, `OccultistFocusPowerEntry`, `PhrenicAmplificationEntry`, `ShamanSpiritEntry`,
`SlayerTalentEntry`, `WarpriestBlessingEntry`, `AlchemistDiscoveryEntry`, `EidolonEvolutionEntry`,
`MagicItemDefinition`, `WeaponDefinition`, `ArmorDefinition`, `ShieldDefinition`, `GearDefinition`

Run `npm run typecheck` after adding to `base.ts` — TS will surface every seed script that's
missing the field, making Phase B mechanical.

### Seed script defaults

Every entry in every seed script gets `verificationStatus: 'needs_review'`. No exceptions except
known stubs (see below). No per-entry judgment needed — the admin will verify inline over time.

**Known stubs in animal companions** (empty stat blocks confirmed at scrape time):
`Squirrel Giant Tree`, `Stag Beetle`, `Trilobite Giant`, `Trout`, `Tuatara Giant`,
`Turkey`, `Turtle`, `Ursine Charger`, `Viper Giant`, `Whale Shark`,
`Wombat Giant`, `Woodpecker Giant`, `Wyvern Skeletal` → `verificationStatus: 'stub'`

### Connector query update

`FirestoreGameDataConnector` — add `where('verificationStatus', '!=', 'stub')` to all
player-facing queries. `needs_review` entries remain visible to players (badge in Phase C).

**Requires composite indexes** — add to `firestore.indexes.json` for each collection:
`{ collection, fields: [{ verificationStatus, DESCENDING }, { name, ASCENDING }] }`

### Files to create / modify

| File | Change |
|---|---|
| `src/types/base.ts` | Add `DataQualityFields` |
| All collection type files | Add `verificationStatus`, `adminNotes?` |
| All `scripts/db/seed*.ts` | Set `verificationStatus: 'needs_review'` on every entry |
| `scripts/db/seedAnimalCompanions.ts` | Tag 13 known stubs as `'stub'` |
| `src/services/FirestoreGameDataConnector.ts` | Filter `!= 'stub'` on all player queries |
| `firestore.indexes.json` | Composite indexes for `verificationStatus + name` per collection |

---

## Phase C — Inline Review Controls + Player Badge

**Branch:** `MW/data-quality-ui`

### `VerificationStatusPill` (admin only)

A small tappable pill shown on every game data row when an admin is signed in.
Renders the current `verificationStatus` as a colored indicator.
Tapping opens an action sheet:

```
┌─ Power Attack ────────────────────────┐
│  Mark this entry as:                  │
│                                       │
│  ✓  Verified — looks correct          │
│  ✗  Stub — broken or empty            │
│  ·  Keep as needs review              │
│                                       │
│  [Admin notes (optional)]             │
│  [________________________________]   │
│                                       │
│         [Save]  [Cancel]              │
└───────────────────────────────────────┘
```

On save, writes directly to Firestore and updates the pill in-place. No navigation away.
Already-verified entries show a green checkmark — still tappable to revise.

### `UnconfirmedBadge` (players)

Small amber `⚠` badge on picker rows for `needs_review` entries.
Tapping shows: *"This entry's stats are unconfirmed. It may differ from your sourcebook."*
Does not block selection.

### `AdminService.updateVerificationStatus()`

```typescript
static async updateVerificationStatus(
  collectionName: string,
  docId: string,
  status: 'verified' | 'needs_review' | 'stub',
  adminNotes?: string,
): Promise<void>
```

Single Firestore `setDoc` with merge. Requires admin claim (Firestore rules enforce write gate).

### Wiring

Add `VerificationStatusPill` to all picker row components that display game data entries.
It renders only when `isAdmin()` is true. Add `UnconfirmedBadge` to the same rows for non-admins.

### Files to create / modify

| File | Change |
|---|---|
| `src/services/AdminService.ts` | Add `updateVerificationStatus()` |
| `src/components/shared/VerificationStatusPill.tsx` | New |
| `src/components/shared/UnconfirmedBadge.tsx` | New |
| All picker row components | Wire in pill + badge |

---

## Phase D — Data Quality Dashboard

**Branch:** `MW/admin-data-review-dashboard`

`app/admin/data-review.tsx` — per-collection counts of verified / needs_review / stub.

Uses Firestore `count()` aggregation queries (same pattern as `verifySeeding.ts`).
This is a read-only progress view. The actual reviewing happens inline throughout the app.

```
┌─ Data Quality ──────────────────────────┐
│  feats           2,401 ✓  186 ⚠    0 ✗ │
│  traits            891 ✓   80 ⚠    0 ✗ │
│  animalCompanions  185 ✓   18 ⚠   13 ✗ │
│  spells          2,200 ✓  300 ⚠    0 ✗ │
│  ...                                    │
└─────────────────────────────────────────┘
```

Tapping a row could eventually drill into that collection's unreviewed entries, but for Phase D,
the summary counts are sufficient.

---

## Phase E — Custom Content Creation

**Branch:** `MW/admin-content-creation`

### Problem

One-off seed scripts (`scripts/db/seedCampaignContent.ts`) work for known content at a point in
time, but Mark needs a way to create homebrew entries on an ongoing basis — prestige classes,
custom spells, unique templates — without writing or running scripts.

### Visibility model

All admin-created content goes to Firestore in the same collections as official content.
The `visibility` field determines who sees it:

| Value | Who sees it |
|---|---|
| `'global'` | All users — use for Mark's curated 3.5e conversions and approved homebrew |
| `'campaign'` | Only members of a specific campaign — use for Rissi-specific content |

The `GameDataConnector` already queries by visibility, so no connector changes are needed.
The creation form lets the admin pick visibility and (if `'campaign'`) select the campaign.

### Scope for Phase E

Start with the content types Rissi needs and that have the simplest data shapes:

| Content type | Collection | Complexity |
|---|---|---|
| Templates | `templates` | Low — name, description, modifiers |
| Domains | `domains` | Low — name, granted powers, spells |
| Spells | `spells` | Medium — casting time, components, range, effect |
| Prestige classes | `classes` | High — full class table, features, archetype list |

Ship templates and domains first, then spells, then classes. Each is its own PR.

### `AdminContentService`

```typescript
// src/services/AdminContentService.ts
// CRUD for admin-created Firestore entries.
// All writes require the admin claim (enforced by Firestore rules).
static async createEntry<T>(collectionName: string, entry: T & { name: string }): Promise<string>
static async updateEntry<T>(collectionName: string, docId: string, patch: Partial<T>): Promise<void>
static async deleteEntry(collectionName: string, docId: string): Promise<void>
```

Document ID derived from `name` (lowercase, non-alphanumeric → hyphens), same as seed scripts.

### `app/admin/content/`

```
app/admin/content/
  index.tsx         ← content type picker (Templates, Domains, Spells, Classes, ...)
  [type].tsx        ← creation/edit form, parameterized by content type
```

Each form validates against the collection's TypeScript type before writing.
Forms for complex types (classes) will be multi-step.

### Files to create / modify

| File | Change |
|---|---|
| `src/services/AdminContentService.ts` | New — CRUD wrapper |
| `app/admin/content/index.tsx` | New — type picker |
| `app/admin/content/[type].tsx` | New — creation form |

---

## Sequencing

| Phase | Description | Depends on | Priority |
|---|---|---|---|
| A | Admin nav shell | PR #60 (done) | Now |
| B | Data quality types + seed defaults | Phase A (can be parallel) | Now |
| C | Inline review + player badge | Phase B | After B |
| D | Data quality dashboard | Phase C | After C |
| E | Custom content creation | Phase A | After A, parallel with B–D |

Phase E can start in parallel with B–D once the admin shell exists — the content creation forms
don't depend on the data quality system.

---

## Notes

- `AdminService.isAdmin()` uses the cached token — fast, no network hit on repeat calls
- After granting admin to a user, call `AdminService.refreshAndCheckAdmin()` to pick up the new
  claim without requiring a sign-out
- The admin panel will never appear to non-admin users — the Settings entry is conditional and
  the `_layout.tsx` redirects as a hard gate
- Phase C's `updateVerificationStatus` write is enforced by Firestore rules — a non-admin who
  somehow reaches the UI can't actually write
