# Direct-Entry Character Sheet — UI Design Spec

## 2026-03-11

## Status (as of 2026-03-19)

| Area                                                                        | Status                                                                                                                    |
| --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| 18 section/support components (PR #12)                                      | **COMPLETE** — all 10 tabs rendered, merged 2026-03-18                                                                    |
| `ValidationReportSheet`                                                     | **NOT BUILT** — explicit TODO in `CharacterEntryScreen.tsx:182`. Planned for a follow-up "validation PR"                  |
| `SpellcastingPoolCard`, `ContributorRow`, `SpellsPerDayGrid`, `FeatSlotRow` | Implemented inline inside parent components — no separate files needed                                                    |
| Validation logic wiring                                                     | **NOT STARTED** — `characterEntrySlice.validationWarnings` exists in Redux but validate button is not wired to real logic |

**Immediate next step:** Build `ValidationReportSheet` + wire validation logic into `CharacterEntryScreen`.

---

### Purpose

A freeform editor for importing existing paper characters. No required entry order.
Validate on demand. Always runs in Legacy Entry mode — warnings only, no hard blocks.

---

## Screen Structure

```
┌─────────────────────────────────────────────┐
│  HEADER (sticky)                            │
│  [Portrait]  Rissi                          │
│              Human  •  ECL 24  •  CG        │
│              Cleric 5 / Hathran 5 / ...     │
│                          [Validate]  [Save] │
├─────────────────────────────────────────────┤
│  ORNATETAB (horizontal scroll)              │
│  Identity │ Abilities │ Classes │ Combat    │
│  Skills │ Traits │ Feats │ Spells           │
│  Equipment │ Notes                          │
├─────────────────────────────────────────────┤
│                                             │
│  SECTION CONTENT (full-height ScrollView)  │
│                                             │
└─────────────────────────────────────────────┘
│  [⚠ 3 warnings]          (floating button) │
└─────────────────────────────────────────────┘
```

**Header:**

- Dark OrnatePanel variant, always visible
- Portrait thumbnail (tap to change) — left side
- Name (Cinzel, large, editable inline on tap) — center
- Race • ECL N • Alignment — subtitle row (LibreBaskerville, secondary color)
- Class summary string auto-generated from Classes section — tertiary row, truncated
- Validate button (OrnateButton secondary) and Save button (OrnateButton primary) — right side

**Tab bar:**

- OrnateTab, horizontally scrollable (10 tabs fits on phone if scrollable)
- Each tab gets a small dot indicator: green = complete/no warnings, amber = has warnings, grey = empty
- Active tab: gold underline (existing OrnateTab behavior)

**Floating validation button:**

- Fixed bottom-right, above tab bar
- Shows amber badge with warning count when validation has run and has issues
- Shows green checkmark when clean
- Hidden until first Validate press
- Tap opens Validation Report bottom sheet

---

## Section Designs

### 1. Identity

```
┌─ Character Info ──────────────────────────┐
│  Name          [Rissi                    ]│
│  Player        [Mark                     ]│
│  Race          [Human              ▼ 🔍  ]│
│  Alignment     [Chaotic Good        ▼    ]│
│  Deity         [Milani                   ]│
│  Gender / Age  [Female]  [Age: 24        ]│
├─ Description ─────────────────────────────┤
│  Height  [5'4"]  Weight  [118 lbs]        │
│  Hair    [Red  ]  Eyes   [Green  ]        │
│  Skin    [Fair ]                          │
├─ Background ──────────────────────────────┤
│  [                                        │
│   Long-form text input (4+ lines)         │
│                                          ]│
└───────────────────────────────────────────┘
```

- Race field: tap opens searchable DB bottom sheet (same pattern as Classes)
- Alignment: dropdown picker
- All fields editable inline; FantasyTextInput styling

---

### 2. Abilities

No simple mode — the system needs each layer separately to compute correctly.
The breakdown is always visible, but collapsed by default for each score.

```
┌─ Ability Scores ──────────────────────────┐
│                                           │
│   STR           DEX           CON         │
│  [22]  +6      [14]  +2      [18]  +4    │
│                                           │
│   INT           WIS           CHA         │
│  [14]  +2      [28]  +9      [14]  +2    │
│                                           │
│  (tap a score to expand its breakdown)    │
└───────────────────────────────────────────┘

EXPANDED (e.g. WIS tapped):

  WIS  Total: 28  Mod: +9  ▲ collapse
  ├ Base:          [18]   ← player enters this
  ├ Racial:        [ 2]   ← auto from race (locked)
  ├ Inherent:      [ 4]   ← tomes/wishes (manual)
  ├ Level +1s:     [ 2]   ← from increment slots
  ├ Enhancement:   [ 4]   ← auto from gear (locked)
  └ Other bonuses: [ 0]   ← morale/sacred/etc (manual)
  ─────────────────────────────────────────
  Computed total:   30  ⚠ sheet says 28
  [Override total]

LEGACY ENTRY HELPER (shown when user enters score):
  "What's on your sheet for WIS? [28]
   We'll help figure out the base score.
   Set gear and race first, then tap Recalculate Base."
  → base = sheet total − racial − enhancement − inherent
```

**Key rules:**

- Racial bonus: auto-applied when race is selected in Identity section. Shown read-only.
- Enhancement bonus: auto-populated from equipped items (belt of STR, headband of INT/WIS/CHA, etc.). Shown read-only with item name as source note.
- Level increments: allocated via dedicated slots below the score grid (one slot per 4 class HD milestone).
- Inherent + Other: manually entered by player.
- If computed total doesn't match what the player entered in the helper, amber warning shown with override option.

```
┌─ Level Increments ────────────────────────┐
│  +1 at class HD 4:   [WIS ▼]             │
│  +1 at class HD 8:   [WIS ▼]             │
│  +1 at class HD 12:  [WIS ▼]             │
│  +1 at class HD 16:  [CHA ▼]             │
│  +1 at class HD 20:  [WIS ▼]             │
│  +1 at class HD 24:  [WIS ▼]             │
│  (slots auto-generated from class HD)     │
└───────────────────────────────────────────┘
```

---

### 3. Classes & Templates

Templates are combined here because both represent ECL-spending decisions.

```
┌─ Classes & Templates ─────────────────────┐
│  ECL: 24   Class HD: 24                  │
│  BAB: +18  Fort: +15  Ref: +8  Will: +17 │
│  (all auto-computed, shown in amber)      │
├───────────────────────────────────────────┤

  ┌─ Cleric  ────────────── [PF1e] ────── ─┐
  │ Level [5]   Archetype: [none      🔍]  │
  │ ▾ Class Choices                        │
  │   Domain 1: [Healing        🔍]        │
  │   Domain 2: [Liberation     🔍]        │
  └────────────────────────────────────────┘

  ┌─ Hathran  ─────────────[3.5e] ──────  ─┐
  │ Level [5]   Archetype: [none      🔍]  │
  │ ☑ Advances: [Divine                ▼] │
  │ Prereqs: ⚠ 1 warning  [view]          │
  └────────────────────────────────────────┘

  ┌─ Dweomerkeeper  ───────[3.5e] ──────  ─┐
  │ Level [10]  Archetype: [none      🔍]  │
  │ ☑ Advances: [Divine                ▼] │
  │ Prereqs: ✓ met                         │
  └────────────────────────────────────────┘

  [+ Add Class]   [+ Add Template]

  ── Applied Templates ──────────────────

  ┌─ Simple Druid Template  ─ [FREE GRANT]─┐
  │  Granted by: DM (campaign grant)       │
  │  No ECL cost                           │
  └────────────────────────────────────────┘

  [+ Add Free Grant]
```

**Class card details:**

- **Header:** class name (Cinzel) + level number input (inline editable) + source badge (color-coded: PF1e = gold / 3.5e = silver / Homebrew = purple / Campaign = green)
- **Archetype:** searchable chip — tap chip to search and assign, tap assigned chip to remove
- **Advances spellcasting:** checkbox — when checked reveals dropdown: `Divine / Arcane / Both / Highest / Chosen`
- **Class Choices:** expandable subsection — choices pulled from Firestore class definition (domains, bloodline, mystery, school, rogue talents, favored enemies, rage powers, etc.) Each is a searchable picker.
- **Prereqs:** green "✓ met" or amber "⚠ N warnings [view]" — tapping view expands inline prereq list
- **Drag handle** on left edge — tap-hold to reorder (order affects validation snapshots)

**Template card details (paid):**

- Applied as: `[CR ▼]` or `[LA ▼]` picker
- CR/LA value: shown (from DB definition)
- Paid tiers: checklist for HD-tiered templates
- Acquired: `[Inherited ▼ / Acquired / Either]`

**Free grant card:**

- Name, description (freeform), granted by — no DB lookup required

**Add buttons:**

- `[+ Add Class]` → SearchPickerSheet (classes, grouped by category)
- `[+ Add Template]` → SearchPickerSheet (templates)
- `[+ Add Free Grant]` → simple inline form (name + note)

**Data requirement — Class Choices in Firestore:**
The dynamic class choice pickers (Domain, Bloodline, Mystery, etc.) require class choice
definitions to be seeded in Firestore. Each class in Firestore needs a `classChoiceDefinitions`
array specifying what choices are available at what levels and what the options are.
This is a seeding task that must be completed before class choice pickers can function.
See: plans/firestore-seed-plan.md (to be written).

---

### 4. Combat

```
┌─ Hit Points ──────────────────────────────┐
│  Max HP: [240]  (computed: 238 ⚠)        │
│  Current: [240]   Nonlethal: [0]          │
│  Temp HP: [0]                             │
└───────────────────────────────────────────┘

┌─ Armor Class ─────────────────────────────┐
│  Total: [28]   Touch: [18]   FF: [26]     │
│  ▾ Breakdown                              │
│    Base 10 + Armor 8 + Dex 2 + Defl 4 +  │
│    Dodge 2 + Natural 2                    │
└───────────────────────────────────────────┘

┌─ Saving Throws ───────────────────────────┐
│  Fort [+15]   Ref [+8]   Will [+17]       │
│  (base auto-computed; misc editable)      │
│  Misc: Fort [+2]  Ref [+0]  Will [+2]    │
└───────────────────────────────────────────┘

┌─ Attack ──────────────────────────────────┐
│  BAB: +18/+13/+8/+3  (auto-computed)     │
│  Melee: [+22]   Ranged: [+20]            │
│  CMB:  [+22]    CMD:    [34]             │
└───────────────────────────────────────────┘

┌─ Movement ────────────────────────────────┐
│  Land [30]  Fly [60]  Swim [—]  Climb [—]│
└───────────────────────────────────────────┘
```

Auto-computed values shown in amber. Tapping an amber value offers "Override" — enters a manual value with a note field explaining the override (e.g. "includes Divine Grace from Paladin 2").

---

### 5. Skills

```
┌─ Skills ──────────────────────────────────┐
│  Ranks available: 80   Used: 76          │
│                                           │
│  [                            🔍]         │
│                                           │
│  Skill               Rnk  Misc  Total    │
│  ─────────────────────────────────────── │
│  Concentration    cs  [22]  [ 0]  +34    │
│  Diplomacy           [ 5]  [+2]  +12    │
│  Knowledge (arcana)cs  [10]  [ 0]  +13  │
│  Spellcraft       cs  [10]  [ 0]  +13   │
│  ...                                     │
│  [Show all 36 skills]                    │
└───────────────────────────────────────────┘
```

- Default: show only skills with ranks > 0, sorted alphabetically
- "Show all" expands to full list
- Each row: skill name + `cs` badge if class skill + ranks input + misc input + computed total (amber)
- Ranks available computed from: sum of (class skill ranks per level × class levels) + INT modifier per level
- Search filters list in real time

---

### 6. Traits

```
┌─ Traits ──────────────────────────────────┐
│  Slots: 2 of 2 used  (from campaign max) │
│                                           │
│  ┌─ Fate's Favored  ─────── [Faith] ──┐  │
│  │  Your luck bonuses are increased   │  │
│  │  by 1.                             │  │
│  └────────────────────────── [ ✕]  ───┘  │
│                                           │
│  ┌─ Reactionary  ─────── [Combat] ────┐  │
│  │  +2 trait bonus to Initiative.     │  │
│  └────────────────────────── [ ✕]  ───┘  │
│                                           │
│  [+ Add Trait]                            │
└───────────────────────────────────────────┘
```

- Slot count pulled from campaign settings (`maxTraits`, default 2)
- Each trait card shows: name, category badge (Combat / Faith / Magic / Social / Race / Regional / Religion), description
- `[+ Add Trait]` opens SearchPickerSheet (searches Firestore traits collection)
- Traits beyond the max are flagged as a validation warning (not a block — DM may have granted extras)
- `[ ✕]` removes the trait

---

### 7. Feats

```
┌─ Feat Slots ──────────────────────────────┐
│  Total slots: 14   Assigned: 13          │
│                                           │
│  [RACIAL]  Lvl 1    Extra Channel         │
│  [LEVEL ]  Lvl 1    Selective Channel     │
│  [LEVEL ]  Lvl 3    Spell Focus: Necro    │
│  [BONUS ]  Fighter1  —— unassigned ——    │ ← tap to assign
│  [LEVEL ]  Lvl 5    Augment Summoning  ⚠ │
│  [LEVEL ]  Lvl 7    Sacred Summons        │
│  [MYTHIC]  Tier 1   Mythic Spell Focus    │
│  ...                                      │
│                                           │
│  [+ Add bonus slot]  ← DM override       │
└───────────────────────────────────────────┘
```

**Slot row:**

- Source badge (RACIAL / LEVEL / BONUS / MYTHIC) — color-coded pill
- Available-at label (Cinzel small) — "Lvl 3" / "Fighter 4" / "Tier 1"
- Feat name (LibreBaskerville) or `—— unassigned ——` in tertiary color
- Amber ⚠ dot if validation flagged this slot
- Tap row → FeatPickerSheet

**FeatPickerSheet:**

- Search (name + tags)
- Result shows: name, type pills (Combat / Metamagic / etc.), prereq summary
- Prereq status: green ✓ / amber ⚠ with specific failure listed
- Selecting assigns to the slot

**Validation + reorder suggestion:**

- System uses class order as listed in Classes section to reconstruct character state at each feat slot level
- If prereq fails but would pass with a different class order:
  `"⚠ Augment Summoning: Spell Focus (conjuration) not in prior slots.
Suggested order: Cleric 5 first → Hathran 3 would resolve this.
[Apply suggestion]  [Keep as-is]"`

---

### 8. Spellcasting

```
┌─ Spellcasting ────────────────────────────┐
│                                           │
│  ┌─ Divine — Cleric ────────────────────┐ │
│  │  Ability: WIS  Mod: +9              │ │
│  │  ESL: 22   Base CL: 22             │ │
│  │  Spell DC: 10 + spell level + 9    │ │
│  │                                    │ │
│  │  ▾ Contributors                    │ │
│  │    Cleric           5  ☑ slots ☑CL│ │
│  │    Hathran          5  ☑ slots ☑CL│ │
│  │    Dweomerkeeper   10  ☑ slots ☑CL│ │
│  │    Radiant Servant  2  ☑ slots ☑CL│ │
│  │    Prestige Paladin 2  ☐ slots ☑CL│ │
│  │    ───────────────── ESL 22  CL 22 │ │
│  │                                    │ │
│  │  ▾ CL Bonuses  (auto from gear)    │ │
│  │    Orange Ioun Stone  +1 (all)     │ │
│  │                                    │ │
│  │  ▾ Spells Per Day                  │ │
│  │                                    │ │
│  │  Lvl  Base  Bonus(WIS)  Dom  Total │ │
│  │   0     4      —        —     4   │ │
│  │   1     4     +1        +1    6   │ │
│  │   2     4     +1        +1    6   │ │
│  │   3     4     +1        +1    6   │ │
│  │   4     4     +1        +1    6   │ │
│  │   5     4     +1        +1    6   │ │
│  │   6     3     +1        +1    5   │ │
│  │   7     3     +1        +1    5   │ │
│  │   8     3     +1        +1    5   │ │
│  │   9     3     +1        +1    5   │ │
│  │  Misc adj: [0] per level           │ │
│  └────────────────────────────────────┘ │
│                                           │
│  [+ Add Pool]                             │
└───────────────────────────────────────────┘
```

**Spells Per Day columns:**

- **Base** — from class table at ESL (auto-computed)
- **Bonus (ability)** — standard PF bonus spell table based on casting ability modifier (auto-computed)
- **Domain/School/Bloodline** — extra slots from class choices (1 per spell level for domains, etc.) — auto-computed from class choices entered in Classes section
- **Total** — sum of all columns + any misc adjustment
- **Misc adj** — one editable number per spell level for anything else

**Contributors:**

- Auto-populated from Classes section
- `☑ slots` = this class advances spell slot progression for this pool
- `☑ CL` = this class advances caster level for this pool
- Prestige classes with `spellcastingAdvancement` set default to both checked

**CL Bonuses:**

- Auto-populated from Equipment section (ioun stones, class abilities, etc.)
- Read-only in this section; edit in Equipment

---

### 9. Equipment

```
┌─ Weapons ─────────────────────────────────┐
│  ┌─ Mace +4  ─────────────────────────┐  │
│  │  +12 melee  1d8+8  B  20/×2       │  │
│  └────────────────────── [Edit] [✕]  ─┘  │
│  [+ Add Weapon]                           │
└───────────────────────────────────────────┘

┌─ Armor ───────────────────────────────────┐
│  ┌─ Mithral Full Plate +3  ───────────┐  │
│  │  AC +11  Max Dex +3  ACP 0        │  │
│  └────────────────────── [Edit] [✕]  ─┘  │
│  [+ Add Armor]                            │
└───────────────────────────────────────────┘

┌─ Magic Items ─────────────────────────────┐
│  ┌─ Orange Ioun Stone  ───────────────┐  │
│  │  +1 CL all spells  → auto-applied  │  │
│  │  to Divine — Cleric pool           │  │
│  └────────────────────── [Edit] [✕]  ─┘  │
│  ┌─ Headband of Vast Intellect +4  ───┐  │
│  │  +4 INT enhancement → auto-applied │  │
│  └────────────────────── [Edit] [✕]  ─┘  │
│  [+ Add Magic Item]                       │
└───────────────────────────────────────────┘
```

Magic items with known effects (ioun stones, ability-score headbands/belts, cloaks, rings of protection, amulets of natural armor, etc.) auto-apply their bonuses to the appropriate character fields when added. The item card shows where the bonus was applied.

---

### 10. Notes

```
┌─ Character Notes ─────────────────────────┐
│  [                                        │
│   Rissi is a cleric of Milani who...      │
│                                          ]│
└───────────────────────────────────────────┘

┌─ Campaign Notes ──────────────────────────┐
│  [                                        │
│   Current quest: ...                     │
│                                          ]│
└───────────────────────────────────────────┘
```

---

## Validation Report (bottom sheet)

```
┌─ Validation Report ────────────────── [✕]┐
│  ⚠ 3 warnings    ✓ All required fields   │
│  ─────────────────────────────────────── │
│  CLASSES                                 │
│  ⚠ Hathran: entry requires BAB +4.      │
│     Character BAB at entry: +3.         │
│     [Override — trust player]            │
│                                          │
│  FEATS                                   │
│  ⚠ Augment Summoning at level 5:        │
│     Spell Focus (conjuration) not found  │
│     in prior feat slots.                 │
│     [Reorder classes to resolve]         │
│     [Override — trust player]            │
│                                          │
│  SPELLCASTING                            │
│  ⚠ Prestige Paladin: spellcasting       │
│     advancement not set but class is     │
│     listed as contributor.              │
│     [Fix in Classes]                     │
│                                          │
│                      [Save Anyway]       │
└──────────────────────────────────────────┘
```

Warning actions:

- **[Override — trust player]** — acknowledges the warning; won't resurface unless character data changes
- **[Fix in Classes]** — closes sheet, scrolls to the relevant section and highlights the card
- **[Reorder classes to resolve]** — shows a before/after preview of the suggested class order, confirms before applying
- **[Save Anyway]** — saves with all unacknowledged warnings attached

---

## Key Interaction Patterns

### Search-to-Add (classes, races, feats, templates, traits, archetypes)

```
┌─ Search ──────────────────────────────────┐  (bottom sheet, 60% screen)
│  [                            🔍]         │
│  ─────────────────────────────────────── │
│  Core Classes                             │
│    Cleric          Divine magic, d8       │
│    Druid           Nature magic, d8       │
│  Prestige Classes                         │
│    Dweomerkeeper   3.5e  Advances divine  │
│    Hathran         3.5e  Rashemi witch    │
│  ─────────────────────────────────────── │
│  Not listed? [+ Add custom]               │
└───────────────────────────────────────────┘
```

### Auto-computed vs. user-entered

- User-entered: white/primary text
- Auto-computed: amber text
- Overridden: amber text + 🔒 icon + "manual" note on tap

### Inline number editing

- Tap a number → becomes editable input, full text selected
- Confirm on keyboard dismiss or tapping elsewhere

---

## Data Requirements (must be seeded before UI works fully)

| Data                                                                                            | Where                                         | Status                             |
| ----------------------------------------------------------------------------------------------- | --------------------------------------------- | ---------------------------------- |
| Classes (core, base, prestige, hybrid, etc.)                                                    | Firestore `classes` collection                | Needs seeding                      |
| **Class choice definitions** (domains per class, bloodlines, mysteries, schools, talents, etc.) | Firestore `classChoiceDefinitions` collection | **New — needs design + seeding**   |
| Archetypes                                                                                      | Firestore `archetypes` collection             | Needs seeding                      |
| Feats                                                                                           | Firestore `feats` collection                  | Needs seeding                      |
| Traits                                                                                          | Firestore `traits` collection                 | Needs seeding                      |
| Races                                                                                           | Firestore `races` collection                  | Needs seeding                      |
| Templates                                                                                       | Firestore `templates` collection              | **New — needs design + seeding**   |
| Spells                                                                                          | Firestore `spells` collection                 | Partially seeded                   |
| Spell slot tables (CL 1–30)                                                                     | Firestore `spellProgressionTables`            | **Needs extended tables for epic** |

**Class choice definitions** are the most critical missing piece. Without them, the domain/bloodline/mystery pickers in the Classes section cannot function. This needs its own data design pass:

- What collections/documents represent class choices?
- How do archetypes that replace or modify class choices affect the available options?
- How are 3.5e prestige class choices (e.g., Hathran's bond requirements) handled?

---

## Campaign Settings Addition

`CampaignSettings` needs `maxTraits: number` (default 2).
Allows DMs to grant extra trait slots (e.g., a campaign that allows 3 traits).

---

## Component Inventory (new components needed)

| Component                | Used In                                             |
| ------------------------ | --------------------------------------------------- |
| `CharacterEntryScreen`   | Root screen                                         |
| `CharacterEntryHeader`   | Sticky header                                       |
| `ValidationReportSheet`  | Floating button → bottom sheet                      |
| `IdentitySection`        | Identity tab                                        |
| `AbilityScoreEntryPanel` | Abilities tab                                       |
| `LevelIncrementSlots`    | Abilities tab                                       |
| `ClassEntryCard`         | Classes tab — one per class                         |
| `ClassChoiceRow`         | Inside ClassEntryCard                               |
| `TemplateEntryCard`      | Classes tab — one per template                      |
| `GrantedBonusCard`       | Classes tab — free grants                           |
| `CombatStatsSection`     | Combat tab                                          |
| `SkillsSection`          | Skills tab                                          |
| `TraitsSection`          | Traits tab                                          |
| `FeatSlotList`           | Feats tab                                           |
| `FeatSlotRow`            | Inside FeatSlotList                                 |
| `FeatPickerSheet`        | Feat slot tap → bottom sheet                        |
| `SpellcastingPoolCard`   | Spells tab — one per pool                           |
| `ContributorRow`         | Inside SpellcastingPoolCard                         |
| `SpellsPerDayGrid`       | Inside SpellcastingPoolCard                         |
| `EquipmentSection`       | Equipment tab                                       |
| `SearchPickerSheet`      | Reusable — classes, races, feats, templates, traits |
| `AutoComputedValue`      | Reusable — amber computed display with override     |
| `SectionCompletionDot`   | Tab label indicator                                 |

All components use existing primitives: `OrnatePanel`, `OrnateTab`, `OrnateButton`,
`OrnateStatInput`, `FantasyTextInput`, `FantasyDivider`.

---

## Screen Entry Point

Route: `app/(tabs)/characters/entry.tsx` (new)
Mode param: `mode: 'new' | 'import' | 'edit'`

- `new` — empty character, "New Character" header
- `import` — empty character, "Import Character" header with Legacy Entry badge
- `edit` — loads existing character, full edit mode

The direct-entry screen is always usable regardless of mode. The Quick Build wizard remains as a separate entry point for new players building from level 1.
