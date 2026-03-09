# Plan: Pathfinder 1e Equipment Database (Non-Magical, All Paizo)

## Context

The feat database (251 feats) and trait database (93+ traits) are complete. The user wants a comprehensive **non-magical** equipment database covering **all Paizo sources** on d20pfsrd.com — weapons, armor, shields, adventuring gear, alchemical items, special materials, and NPC services. No magic items yet.

Currently `EquipmentDatabaseService` has 26 hardcoded items using the generic `EquipmentTemplate` type (`properties: Record<string, unknown>`). We'll create strongly-typed definition interfaces and move data into dedicated `src/data/equipment/` files organized by equipment type (not source book).

## Scope

**Sources:** Core Rulebook, Advanced Player's Guide, Ultimate Equipment, Ultimate Combat, Adventurer's Armory, and other Paizo supplements. Exclude 3PP.

**Included:**

- All non-magical weapons (simple, martial, exotic) — ~130+
- All non-magical armor & shields — ~25+
- Adventuring gear, tools, kits, containers — ~150+
- Alchemical items & remedies — ~40+
- Special materials (adamantine, mithral, cold iron, darkwood, etc.) — ~15+
- NPC services (spellcasting, hirelings, lodging, transport, food & drink) — ~40+
- Ammunition types — ~15+

**Excluded:** Magic weapons/armor/shields, wondrous items, rings, staves, rods, potions, scrolls, wands.

## Type Definitions

Add to `src/types/equipment.ts` (after existing `EquipmentTemplate`):

```typescript
// --- Strongly-typed definition types for static data ---

export type WeaponProficiency = 'simple' | 'martial' | 'exotic';
export type WeaponHandedness = 'light' | 'one-handed' | 'two-handed';
export type ArmorWeight = 'light' | 'medium' | 'heavy';
export type ShieldWeight = 'buckler' | 'light' | 'heavy' | 'tower';
export type DamageType = 'bludgeoning' | 'piercing' | 'slashing';
export type GearCategory =
  | 'adventuring'
  | 'alchemical'
  | 'tool'
  | 'clothing'
  | 'kit'
  | 'container'
  | 'illumination'
  | 'writing'
  | 'food'
  | 'entertainment'
  | 'animal'
  | 'ammunition'
  | 'remedy'
  | 'class_tool';

export interface WeaponDefinition {
  id: string;
  name: string;
  proficiency: WeaponProficiency;
  weaponType: 'melee' | 'ranged';
  handedness: WeaponHandedness;
  weaponGroup: string[];
  cost: number; // GP (0.01 = 1cp, 0.1 = 1sp)
  weight: number; // lbs
  damageS: string; // Small size damage dice
  damageM: string; // Medium size damage dice
  critical: string; // e.g. "19-20/x2"
  damageType: DamageType[];
  special: string[]; // brace, reach, trip, disarm, monk, etc.
  range: number; // 0 for melee, range increment for ranged/thrown
  isThrown: boolean;
  isDoubleWeapon?: boolean;
  ammunition?: AmmoType;
  description: string;
  source: string; // "Core Rulebook", "Ultimate Equipment", etc.
}

export interface ArmorDefinition {
  id: string;
  name: string;
  armorType: ArmorWeight;
  cost: number;
  weight: number;
  acBonus: number;
  maxDexBonus: number;
  checkPenalty: number; // negative values (e.g. -3)
  spellFailure: number; // percentage (e.g. 20)
  speed30: number;
  speed20: number;
  description: string;
  source: string;
}

export interface ShieldDefinition {
  id: string;
  name: string;
  shieldType: ShieldWeight;
  cost: number;
  weight: number;
  acBonus: number;
  checkPenalty: number;
  spellFailure: number;
  description: string;
  source: string;
}

export interface GearDefinition {
  id: string;
  name: string;
  gearType: GearCategory;
  cost: number;
  weight: number;
  description: string;
  isConsumable: boolean;
  quantity?: number; // for items sold in packs (arrows x20)
  source: string;
}

export interface MaterialDefinition {
  id: string;
  name: string;
  description: string;
  weaponCostModifier?: string; // e.g. "+3000 gp" or "x2"
  armorCostModifier?: string;
  shieldCostModifier?: string;
  hardness?: number;
  hpPerInch?: number;
  properties: string[]; // e.g. ['overcomes DR/adamantine', 'bypass hardness < 20']
  applicableTo: ('weapon' | 'armor' | 'shield')[];
  source: string;
}

export interface ServiceDefinition {
  id: string;
  name: string;
  serviceType:
    | 'spellcasting'
    | 'hireling'
    | 'lodging'
    | 'transport'
    | 'food_drink'
    | 'entertainment';
  cost: number; // GP per unit
  costUnit?: string; // "per day", "per mile", "per spell level", etc.
  description: string;
  source: string;
}
```

## Data Files

```
src/data/equipment/
├── index.ts           — barrel export + lookup utilities
├── weapons.ts         — ALL Paizo non-magical weapons (~130+)
├── armor.ts           — ALL Paizo armor (~15+) + shields (~8+)
├── gear.ts            — adventuring gear, alchemical, kits, tools, ammo (~200+)
├── materials.ts       — special materials (~15+)
└── services.ts        — NPC services, hirelings, lodging, transport (~40+)
```

### weapons.ts — All Paizo Non-Magical Weapons (~130+)

Organized by proficiency sections with source noted per item.

**Simple Weapons (CRB ~19):**

- Unarmed: gauntlet, unarmed_strike
- Light Melee: dagger, punching_dagger, spiked_gauntlet, light_mace, sickle
- One-Handed: club, heavy_mace, morningstar, shortspear
- Two-Handed: longspear, quarterstaff, spear
- Ranged: blowgun, heavy_crossbow, light_crossbow, dart, javelin, sling

**Martial Weapons (CRB ~30):**

- Light: throwing_axe, handaxe, kukri, light_hammer, light_pick, sap, short_sword, starknife
- One-Handed: battleaxe, flail, longsword, heavy_pick, rapier, scimitar, trident, warhammer
- Two-Handed: falchion, glaive, greataxe, greatclub, greatsword, guisarme, halberd, lance, ranseur, scythe
- Ranged: longbow, composite_longbow, shortbow, composite_shortbow

**Exotic Weapons (CRB ~25):**

- Light: kama, nunchaku, sai, siangham
- One-Handed: bastard_sword, dwarven_waraxe, elven_curve_blade, whip
- Two-Handed: dire_flail, dwarven_urgrosh, gnome_hooked_hammer, orc_double_axe, spiked_chain, two_bladed_sword
- Ranged: bolas, hand_crossbow, net, repeating_heavy_crossbow, repeating_light_crossbow, shuriken

**Additional Weapons (UE, UC, AA, APG ~50+):**

- Eastern weapons: katana, wakizashi, naginata, nine_section_whip, tetsubo, etc.
- Firearms (early): pistol, musket, blunderbuss, etc. (if UC firearms)
- Gladiator weapons: aklys, amentum, harpoon, etc.
- Thrown: chakram, pilum, hunga_munga, etc.
- Polearms: bardiche, bec_de_corbin, bill, fauchard, lucerne_hammer, etc.
- Close/monk: brass_knuckles, cestus, dan_bong, emei_piercer, fighting_fan, etc.

**Edge cases:**

- Double weapons: `isDoubleWeapon: true`, both ends noted in description
- Net: `damageM: '—'`, `damageS: '—'`
- Composite bows: single entry, strength rating in description
- Firearms: `weaponType: 'ranged'`, touch AC mechanic in description

### armor.ts — All Paizo Armor & Shields

**Armor (~15+):**

- Light (CRB): padded, leather, studded_leather, chain_shirt
- Light (UE+): haramaki, silken_ceremonial, lamellar_leather, parade_armor
- Medium (CRB): hide, scale_mail, chainmail, breastplate
- Medium (UE+): agile_breastplate, lamellar_steel, mountain_pattern, kikko
- Heavy (CRB): splint_mail, banded_mail, half_plate, full_plate
- Heavy (UE+): tatami_do, o_yoroi, stone_coat

**Shields (~8+):**

- buckler, light_wooden_shield, light_steel_shield, heavy_wooden_shield, heavy_steel_shield, tower_shield
- UE additions: klar, madu

### gear.ts — Adventuring Gear, Alchemical, Kits, Tools, Ammo (~200+)

Internal arrays combined into `ALL_GEAR`:

- `ADVENTURING_GEAR` (~80): backpack, bedroll, caltrops, crowbar, grappling_hook, manacles, rope, tent, torch, waterskin, etc. (CRB + UE expanded list)
- `ALCHEMICAL_ITEMS` (~40): acid, alchemists_fire, antitoxin, holy_water, smokestick, sunrod, tanglefoot_bag, thunderstone, tindertwig, liquid_ice, alchemical_grease, weapon_blanch, etc.
- `REMEDIES` (~10): antiplague, bloodblock, smelling_salts, soothe_syrup, etc.
- `TOOLS` (~30): thieves_tools, healers_kit, artisan_tools, climbers_kit, disguise_kit, etc.
- `KITS` (~10): adventurers_kit, clerics_kit, wizards_kit, fighters_kit, etc.
- `AMMUNITION` (~15): arrows, bolts, sling_bullets, blowgun_darts, firearm ammo, specialty arrows (blunt, flight, etc.)
- `CLOTHING` (~15): traveler's outfit, noble's outfit, cold weather outfit, etc.
- `CONTAINERS` (~10): backpack, belt_pouch, sack, chest, scroll_case, spell_component_pouch, etc.

### materials.ts — Special Materials (~15+)

adamantine, alchemical_silver, cold_iron, darkwood, dragonhide, elysian_bronze, fire_forged_steel, frost_forged_steel, greenwood, living_steel, mithral, viridium, whipwood, wyroot, etc.

### services.ts — NPC Services (~40+)

- **Spellcasting:** caster_level_x_spell_level formula, common spell services
- **Hirelings:** untrained (1sp/day), trained (3sp/day), mercenary, bodyguard, etc.
- **Lodging:** inn (poor/common/good), stable, suite
- **Transport:** coach, ship_passage, teleport_service, caravan, mount_rental
- **Food & Drink:** meals (poor/common/good), ale, wine, banquet
- **Entertainment:** bath, massage, fortune_telling

## Index Barrel Export

```typescript
// src/data/equipment/index.ts
export const ALL_WEAPONS: WeaponDefinition[];
export const ALL_ARMOR: ArmorDefinition[];
export const ALL_SHIELDS: ShieldDefinition[];
export const ALL_GEAR: GearDefinition[];
export const ALL_MATERIALS: MaterialDefinition[];
export const ALL_SERVICES: ServiceDefinition[];

// Lookup utilities
export function getWeaponById(id: string): WeaponDefinition | undefined;
export function getArmorById(id: string): ArmorDefinition | undefined;
export function getShieldById(id: string): ShieldDefinition | undefined;
export function getGearById(id: string): GearDefinition | undefined;
export function getMaterialById(id: string): MaterialDefinition | undefined;
export function getServiceById(id: string): ServiceDefinition | undefined;
export function getWeaponsByProficiency(prof: WeaponProficiency): WeaponDefinition[];
export function getArmorByType(type: ArmorWeight): ArmorDefinition[];
export function searchEquipment(query: string): (...all definition types)[];
```

## EquipmentDatabaseService Update

**Goal:** Replace hardcoded data with imports from `src/data/equipment/`, preserve public API.

**Changes to `src/services/EquipmentDatabaseService.ts`:**

1. Delete the 4 private `_initialize*` methods and their hardcoded arrays
2. Import `ALL_WEAPONS`, `ALL_ARMOR`, `ALL_SHIELDS`, `ALL_GEAR` from `@/data/equipment`
3. Add private converter methods: `_weaponDefToTemplate`, `_armorDefToTemplate`, `_shieldDefToTemplate`, `_gearDefToTemplate` — each converts a Definition → `EquipmentTemplate`
4. `initialize()` maps the imported arrays through converters to populate `_*Templates`

**Key:** The public API (`getEquipmentById`, `searchEquipment`, `createWeaponFromTemplate`, etc.) stays unchanged. All original 26 IDs preserved — existing tests pass without modification.

## Process

1. Add type definitions to `src/types/equipment.ts`
2. Create data files (weapons.ts, armor.ts, gear.ts, materials.ts, services.ts) — populate using d20pfsrd.com reference data, Paizo only
3. Create `index.ts` barrel export
4. Update `EquipmentDatabaseService` to consume data files
5. Verify

## Files to Create

- `src/data/equipment/weapons.ts`
- `src/data/equipment/armor.ts`
- `src/data/equipment/gear.ts`
- `src/data/equipment/materials.ts`
- `src/data/equipment/services.ts`
- `src/data/equipment/index.ts`

## Files to Modify

- `src/types/equipment.ts` — add definition interfaces + type aliases
- `src/services/EquipmentDatabaseService.ts` — import data files, remove hardcoded arrays

## Verification

- `npx tsc --noEmit` — type checks pass
- `npm test` — existing EquipmentService + EquipmentManagement tests pass
- No duplicate IDs across equipment files
- All original 26 equipment IDs preserved for backward compatibility

---

## Current Status (as of 2026-03-06)

### Phase: Data Expansion Complete, Verification Pending

All 4 data expansion agents finished. The database has been expanded from ~296 items to ~570 items. **Tests have NOT been run yet after the expansion.**

### What Was Done This Session

#### 1. Data Error Fixes (DONE)

All known stat errors corrected:

- `armor.ts`: kikko cost 30->250gp, four_mirror cost 45->125gp, stoneplate ID fixed (stone_coat->stoneplate), speed fixed (20/15->15/10), madu_leather/madu_steel check penalties (-1->-2), costs (40->30, 50->40), shield type (light->buckler)
- `services.ts`: meal_poor cost 0.01->0.1gp (1cp->1sp), meal_common cost 0.03->0.3gp (3cp->3sp), ship_passage cost 0.1->0.2gp/mile
- `gear.ts`: bloodblock "powderediteite" -> "powdered"
- `weapons.ts`: greatclub Arabic character removed

#### 2. Weapons Expansion (DONE - 108 -> 185)

- Added glaive-guisarme to CORE_WEAPONS (CRB gap)
- Added 76 weapons to ADDITIONAL_WEAPONS:
  - 14 simple (non-CRB): battle aspergillum, brass knife, wooden stake, kunai, hanbo, bayonet, boar spear, boarding pike, kumade, lantern staff, stingchuck, underwater crossbows, mere club
  - 25 martial (non-CRB): blade boot, gladius, machete, war razor, eastern (iron brush, jutte, kerambit, etc.), cutlass, scizore, hooked lance, monk's spade, atlatl, etc.
  - 22 exotic (non-CRB): aklys, scorpion whip, swordbreaker dagger, khopesh, sawtooth sabre, urumi, estoc, chain spear, meteor hammer, boomerang, lasso, snag net, rope dart, orc hornbow, etc.
  - 2 race-specific: dogslicer, horsechopper
  - 11 firearms (UC): coat pistol, pepperbox, dagger pistol, sword cane pistol, dragon pistol, buckler gun, culverin, double hackbut, double-barreled musket, fire lance, musket axe
- Also added `FIREARM = 'firearm'` to AmmoType enum in `src/types/equipment.ts`

#### 3. Armor/Shields Expansion (DONE - 34 -> 48)

- Added 5 light armor: armored kilt, quilted cloth, wooden armor, leaf armor, hide shirt
- Added 3 medium armor: armored coat, do-maru, lamellar horn
- Added 4 heavy armor: kusari gusoku, lamellar iron, agile half-plate, field plate
- Added 2 shields: quickdraw light wooden/steel shields
- Added backward-compat `heavy_shield` entry (tests needed it)

#### 4. Gear Expansion (DONE - 108 -> 244)

- 7 new adventuring gear (bottle, candle lamp, coffin, hip flask, jug, waterproof lantern, moonrod)
- 21 new alchemical items (silversheen [CRB!], sneezing powder [CRB], alkali flask, bottled lightning, burst jar, fuse grenade, ghast retch flask, itching powder, tangleburn bag, air crystals, alchemical cement/glue, buoyant balloon, deodorizing agent, fire/frost ward gel, noxious aromatic, scent cloak, smoke pellet, woundweal, keros oil)
- Created new REMEDIES array (8): bodybalm, clear ear, mellowroot, pox burster, stillgut, troll oil, smelling salts, soothe syrup
- 12 new tools: portable ram [CRB!], saw, telescope, periscope, glass cutter, ear trumpet, abacus, anvil, drill, stretcher, surgeon's tools, skeleton key
- 19 new kits: 12 class kits (alchemist, barbarian, cavalier, druid, gunslinger, inquisitor, magus, oracle, paladin, sorcerer, summoner, witch) + 8 specialty (dungeoneering, riding, grooming, cooking, fishing, shaving, mess, survival)
- 12 new ammo: durable/thistle/trip/whistling arrows, acid/fire bolts, groaning sling bullet, 4 alchemical cartridges
- 5 new clothing: furs [CRB], cleats, diving suit, doctor's mask, pocketed scarf, snowshoes
- Created new ANIMAL_GEAR array (19): bit/bridle, 7 saddle types, saddlebags, feed, barding, 9 mounts/animals
- CORE_GEAR export updated to include REMEDIES and ANIMAL_GEAR spreads

#### 5. Materials Expansion (DONE - 16 -> 30)

- 5 major: angelskin, blood crystal, darkleaf cloth, eel hide, griffon mane
- 3 primitive (UC): bronze, gold, stone
- 6 skymetals: abysium, djezet, horacalcum, inubrix, noqual, siccatite

#### 6. Services Expansion (DONE - 30 -> 63)

- 7 professional hirelings: doctor, footman, lawyer (novice/experienced), nurse, scribe, valet
- 2 lodging: suite average (16gp), suite luxurious (32gp)
- 4 bathing/personal: bath cold/hot/public, laundry (replaced old generic "bath" with 3 specific entries)
- 9 food/drink: bread, cheese, meat, coffee, tea, absinthe, grog, wandermeal
- 3 transport: carriage, keelboat, rowboat passage
- 3 entertainment: dice set, playing cards, board game

### Current Item Counts

| Category  | Count                                   |
| --------- | --------------------------------------- |
| Weapons   | 185                                     |
| Armor     | 38 (includes heavy_shield compat entry) |
| Shields   | 12                                      |
| Gear      | 244                                     |
| Materials | 30                                      |
| Services  | 63                                      |
| **Total** | **~572**                                |

### What Needs to Happen Next

## FINAL STATUS: COMPLETE (2026-03-06)

### Final Item Counts

| Category  | Final Count |
| --------- | ----------- |
| Weapons   | 269         |
| Armor     | 50          |
| Shields   | 26          |
| Gear      | 406         |
| Materials | 43          |
| Services  | 160         |
| **Total** | **954**     |

### Final Verification

- `npx tsc --noEmit` — clean (equipment files only; pre-existing error in `feats/teamworkFeats.ts` from separate work)
- `npm test` — **409/409 tests passing**, 24 suites
- Duplicate ID check — clean, zero duplicates

### Files Added in Final Expansion

- `src/data/equipment/weapons-extra.ts` — EXTRA_WEAPONS (+84 weapons)
- `src/data/equipment/armor-extra.ts` — EXTRA_ARMOR + EXTRA_SHIELDS (+12 armor, +14 shields)
- `src/data/equipment/gear-extra.ts` — EXTRA_GEAR (+162 gear items)
- `src/data/equipment/materials-extra.ts` — EXTRA_MATERIALS (+13 materials)
- `src/data/equipment/services-extra.ts` — EXTRA_SERVICES (+97 services)
- `src/data/equipment/index.ts` — updated to import and spread all extra arrays

### Equipment work is DONE. Next steps for the project:

- Spells collection (9 parallel agents by school — see plan below)
- Phase 2: Combat System

### Known Issues

- Pre-existing type errors in `src/data/feats/occultAdventures.ts` (4 instances of "situational" not in allowed type union) — NOT related to equipment work
- The old generic "bath" service entry (id: 'bath') was replaced with bath_cold/bath_hot/bath_public — if anything referenced 'bath' by ID it would break, but no tests do

### Files Modified This Session

- `src/data/equipment/weapons.ts` — expanded from ~2130 to ~3642 lines
- `src/data/equipment/armor.ts` — expanded with 14 new armor + 2 new shields + stat fixes
- `src/data/equipment/gear.ts` — expanded from ~110 to ~244 items, 2 new arrays (REMEDIES, ANIMAL_GEAR)
- `src/data/equipment/materials.ts` — expanded from 16 to 30 materials
- `src/data/equipment/services.ts` — expanded from 30 to 63 services, stat fixes
- `src/types/equipment.ts` — added FIREARM to AmmoType enum
- `src/services/EquipmentDatabaseService.ts` — unchanged this session (was rewritten in previous session)
