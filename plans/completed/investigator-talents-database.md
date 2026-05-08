# Investigator Talents Database — Scraping Plan

## 2026-04-04

## Purpose

An investigator selects one talent at 3rd level and every 2 levels thereafter
(3, 5, 7, 9, 11, 13, 15, 17, 19). Advanced talents require investigator level 11+.
All talents draw from the `investigatortalents` Firestore collection.

---

## Status

| Area                                      | Status                                                      |
| ----------------------------------------- | ----------------------------------------------------------- |
| Type: `InvestigatorTalentEntry`           | **COMPLETE** — alias of `ClassOptionBase` (no extra fields) |
| Collection: `investigatortalents`         | NOT STARTED                                                 |
| classChoiceDefinitions: investigator      | NOT STARTED                                                 |
| Seed script: `seedInvestigatorTalents.ts` | NOT STARTED                                                 |

---

## Source

Primary: **Archives of Nethys (aonprd.com)**

- Talent index: `https://www.aonprd.com/InvestigatorTalentDisplay.aspx`

---

## Scope (scouted 2026-04-04 from aonprd.com)

**63 total** across 9 source books. **No formal advanced tier** — unlike Rogue Talents,
Investigator Talents are not split into standard/advanced on AoN. Some talents have minimum
investigator level requirements (5th, 7th, 9th, 11th, 13th, 15th, 17th, 19th) but these
are per-talent prerequisites, not a tier gate.

**Conclusion:** Do NOT add `talentTier` to `InvestigatorTalentEntry`. Capture minimum level
requirements in the `description` field. The UI gates them via the class level check on each
talent's `prerequisites` if we choose to encode them, or via description text only.

| Source                      | Count |
| --------------------------- | ----- |
| Advanced Class Guide        | 34    |
| Advanced Class Origins      | 7     |
| Inner Sea Intrigue          | 7     |
| Magic Tactics Toolbox       | 5     |
| Elemental Master's Handbook | 4     |
| Disciple's Doctrine         | 4     |
| Potions and Poisons         | 3     |
| Adventurer's Guide          | 2     |
| Spymaster's Handbook        | 2     |

---

## File Structure

```
src/data/investigatorTalents/
  index.ts                          — barrel export → ALL_INVESTIGATOR_TALENTS: InvestigatorTalentEntry[]
  investigatorTalents-batch1.ts     — ACG talents A–Q (~25 entries)
  investigatorTalents-batch2.ts     — ACG talents R–Z + Advanced Class Origins + Inner Sea Intrigue (~23 entries)
  investigatorTalents-batch3.ts     — remaining supplements (~20 entries: MTT, EMH, PP, DD, AG, SH)
```

3 agents total.

---

## InvestigatorTalentEntry Shape (agent reference)

`InvestigatorTalentEntry` is a type alias for `ClassOptionBase` — no extra fields needed.
The `description` field carries all mechanical text. Use `prerequisites` for any talent
that requires another talent or a minimum investigator level beyond the standard tier gate.

```typescript
import type { InvestigatorTalentEntry } from '@/types/classOptions';

export const investigatorTalentsBatch1: InvestigatorTalentEntry[] = [
  {
    id: 'investigator-talent-amazing-inspiration',
    name: 'Amazing Inspiration',
    description:
      'When using inspiration, the investigator rolls a d8 instead of a d6. At 20th level, the investigator rolls 2d8 and takes the higher result.',
    source: 'pf1e-acg',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
];
```

Note: There is no `talentTier` field on `InvestigatorTalentEntry` (unlike `RogueTalentEntry`).
Advanced talent gating must be handled by the UI filtering on talent name/prerequisites,
or we add a `talentTier` field to the type. Evaluate during scraping — if AoN clearly
separates standard vs advanced, add the field.

---

## classChoiceDefinitions to Write (after scraping)

```typescript
{
  id: 'investigator-talent',
  className: 'investigator',
  featureName: 'Investigator Talent',
  description:
    'At 3rd level and every 2 levels thereafter, an investigator gains one investigator talent. Some talents have minimum level requirements noted in their description.',
  selectionMode: { type: 'at_class_levels', levels: [3, 5, 7, 9, 11, 13, 15, 17, 19] },
  optionSource: 'collection',
  collectionName: 'investigatortalents',
  source: 'pf1e-acg',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
}
```

---

## Type Change Note

Scout confirmed: no formal advanced tier. `InvestigatorTalentEntry` stays as a
`ClassOptionBase` alias — no additional fields needed.

---

## Execution Checklist

- [x] Scout AoN talent index — no formal advanced tier, 63 entries confirmed
- [ ] Update scope section above
- [ ] Launch scraping agents (~25 entries each)
- [ ] Verify files close with `];` and export names correct
- [ ] Run typecheck
- [ ] Write `src/data/investigatorTalents/index.ts`
- [ ] Write `src/data/classChoiceDefinitions/investigator.ts`
- [ ] Wire into `classChoiceDefinitions/index.ts`
- [ ] Write `scripts/db/seedInvestigatorTalents.ts`
- [ ] Commit + PR

---

## Seed Script Notes

Follow the `seedSpells.ts` pattern. Collection name: `investigatortalents`. Document ID = `entry.id`.
