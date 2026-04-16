import type { WondrousItemDefinition } from '@/types/magicItems';
import { AuraStrength, MagicSchool } from '@/types/equipment';

export const wondrousItemsCD10: WondrousItemDefinition[] = [
  // NOT FOUND (magic armor, not wondrous): Dragon Herald Vestments
  // AoN lists it under MagicArmorDisplay.aspx — body slot, faint abjuration, CL 3,
  // 30,000 gp, resist energy 5 (acid/cold/electricity/fire by color),
  // construction: Craft Magic Arms and Armor + resist energy, cost 15,000 gp.
  // Skipped here; belongs in a magic armor batch.

  // -------------------------------------------------------------------------
  // 226 — Dragonbone Divination Sticks
  // (Listed in task as "Dragonbane"; correct name on AoN/UE is "Dragonbone")
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-dragonbone-divination-sticks',
    name: 'Dragonbone Divination Sticks',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 5,
    slot: 'none',

    price: 6400,
    weight: 1,

    description:
      'These eight rune-inscribed dragon bones function as a divine focus for augury spellcasting. ' +
      'They increase the success rate for casting augury and divination by 5%. The owner receives ' +
      'a +3 luck bonus on one type of saving throw (Fortitude, Reflex, or Will), determined randomly ' +
      'each day. Multiple sets grant bonuses to the same saving throw type.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['augury', 'guidance'],
      cost: 3200,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'luck',
        target: 'save.all',
        value: 3,
        source: 'Dragonbone Divination Sticks',
        condition: {
          type: 'custom',
          params: { descriptor: 'random_save_type_daily' },
          description: '+3 luck bonus to one saving throw type (Fortitude, Reflex, or Will), determined randomly each day',
        },
      },
      {
        type: 'special',
        target: 'special.augury_divination_success_bonus',
        value: 5,
        source: 'Dragonbone Divination Sticks',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 227 — Drinking Horn of Bottomless Valor
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-drinking-horn-bottomless-valor',
    name: 'Drinking Horn of Bottomless Valor',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 10,
    slot: 'none',

    price: 24000,
    weight: 2,

    description:
      'This ornate drinking vessel features gold fittings and battle scenes. It holds 3 charges that renew ' +
      'daily. While possessing at least one charge, the owner can command it to fill with mead or similar ' +
      'alcoholic beverage. Spending 1 charge (standard action) grants 1d8 temporary hit points lasting 1 ' +
      'minute. Spending 2 charges (full-round action) grants 1d8+5 temporary hit points and the effect of ' +
      'enlarge person for 5 minutes. Spending all 3 charges (two full-round actions) grants 1d8+10 temporary ' +
      'hit points, enlarge person for 10 minutes, and the benefits of heroism for the duration. All uses ' +
      'provoke attacks of opportunity unless abilities reduce the action required.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['aid', 'enlarge person', 'heroism'],
      cost: 12000,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 5,
      breakDC: 12,
    },

    activationCategory: 'command_word',
    activationAction: 'standard',

    charges: { maximum: 3, rechargeMethod: 'daily' },

    effects: [
      {
        type: 'special',
        target: 'special.drinking_horn_valor_charges',
        value: 0,
        source: 'Drinking Horn of Bottomless Valor',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 228 — Drinking Horn of the Panacea
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-drinking-horn-panacea',
    name: 'Drinking Horn of the Panacea',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 7,
    slot: 'none',

    price: 12000,
    weight: 1,

    description:
      'A polished beast tusk drinking horn etched with waves and sea creatures. Once per day, the holder ' +
      'can command it to fill with a magical liquid that provides one of four effects: cure serious wounds, ' +
      'neutralize poison, remove disease, or lesser restoration. The liquid appears as honeyed mead and must ' +
      'be consumed within 1 minute or the effect is wasted. Drinking the liquid requires a standard action ' +
      'and provokes attacks of opportunity.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['cure serious wounds', 'neutralize poison', 'remove disease', 'lesser restoration'],
      cost: 6000,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 5,
      breakDC: 12,
    },

    activationCategory: 'command_word',
    activationAction: 'standard',

    spellLikeAbilities: [
      {
        usesPerDay: 1,
        spells: [
          {
            spellId: 'cure_serious_wounds',
            spellName: 'Cure Serious Wounds',
            casterLevel: 7,
            activationAction: 'standard',
          },
          {
            spellId: 'neutralize_poison',
            spellName: 'Neutralize Poison',
            casterLevel: 7,
            activationAction: 'standard',
          },
          {
            spellId: 'remove_disease',
            spellName: 'Remove Disease',
            casterLevel: 7,
            activationAction: 'standard',
          },
          {
            spellId: 'lesser_restoration',
            spellName: 'Lesser Restoration',
            casterLevel: 7,
            activationAction: 'standard',
          },
        ],
      },
    ],

    effects: [],
  },

  // -------------------------------------------------------------------------
  // 229 — Drum of Advance and Retreat
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-drum-advance-retreat',
    name: 'Drum of Advance and Retreat',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 1,
    slot: 'none',

    price: 10000,
    weight: 5,

    description:
      'This snare drum grants allied creatures within 120 feet enhanced running speed equivalent to ' +
      'possessing the Run feat when played. Activating requires a DC 20 Perform (percussion) check as a ' +
      'standard action; maintaining the performance is a free action while running. Effects cease when ' +
      'the bearer stops playing. Usage is limited to 1 hour daily in 10-minute increments.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['expeditious retreat'],
      cost: 5000,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 5,
      breakDC: 12,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.drum_advance_retreat_run_feat',
        value: 0,
        source: 'Drum of Advance and Retreat',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 230 — Drums of Haste
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-drums-of-haste',
    name: 'Drums of Haste',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'none',

    price: 45000,
    weight: 5,

    description:
      'This set of kettle drums worn on a shoulder strap is played one-handed with a two-sided mallet. ' +
      'A successful DC 20 Perform (percussion) check allows the bearer to grant the effects of the haste ' +
      'spell to up to 5 creatures. The drums can affect up to 25 creatures per day.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['haste'],
      cost: 22500,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 5,
      breakDC: 12,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.drums_haste_effect',
        value: 0,
        source: 'Drums of Haste',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 231 — Drums of Panic
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-drums-of-panic',
    name: 'Drums of Panic',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.NECROMANCY }],
    casterLevel: 7,
    slot: 'none',

    price: 30000,
    weight: 10,

    description:
      'These kettle drum pairs (hemispheres approximately 1.5 feet in diameter on stands) appear ' +
      'unremarkable. When both drums sound together, creatures within 120 feet (except those in a ' +
      '20-foot safe zone around the drums) experience a fear effect requiring a Will save (DC 16). ' +
      'The item functions once per day.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['fear'],
      cost: 15000,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 10,
      breakDC: 15,
    },

    activationCategory: 'use_activated',

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'fear',
            spellName: 'Fear',
            casterLevel: 7,
            usesPerDay: 1,
            saveDC: 16,
            activationAction: 'standard',
          },
        ],
      },
    ],

    effects: [],
  },

  // -------------------------------------------------------------------------
  // 232 — Dry Load Powder Horn
  // (Listed in task as "Dryload"; AoN name is "Dry Load Powder Horn")
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-dry-load-powder-horn',
    name: 'Dry Load Powder Horn',
    category: 'wondrous',
    source: 'Ultimate Combat',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.CONJURATION }],
    casterLevel: 3,
    slot: 'none',

    price: 2000,
    weight: 1,

    description:
      'This magical horn stores 20 doses of black powder. When a firearm draws powder directly from ' +
      'this horn, it becomes surrounded by a protective air pocket, permitting the firearm to discharge ' +
      'underwater or in airless environments for up to 10 minutes or until fired, whichever occurs first. ' +
      'Underwater shots still suffer the standard -2 penalty per 5 feet of water depth, plus normal range ' +
      'penalties. Should a firearm loaded from this horn misfire while submerged or in a vacuum, the ' +
      'explosion manifests normally.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['air bubble'],
      cost: 1000,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 2,
      breakDC: 12,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.dry_load_underwater_firing',
        value: 0,
        source: 'Dry Load Powder Horn',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 233 — Dueling Cuffs
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-dueling-cuffs',
    name: 'Dueling Cuffs',
    category: 'wondrous',
    source: 'Inner Sea Combat',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION }],
    casterLevel: 3,
    slot: 'wrists',

    price: 10000,
    weight: 1,

    description:
      'These mithral bracers provide defensive benefits to duelists. The wearer receives a +1 deflection ' +
      'bonus to AC, which increases to +2 when wielding one or more weapons with the Weapon Finesse feat. ' +
      'During duels, the wearer avoids the standard -5 penalty for the dueling parry action and can attempt ' +
      'to deflect firearm attacks, though such attempts incur a -5 penalty.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['bullet shield', "cat's grace"],
      cost: 5000,
    },
    physicalStats: {
      hardness: 15,
      hitPoints: 5,
      breakDC: 20,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'deflection',
        target: 'ac.deflection',
        value: 1,
        source: 'Dueling Cuffs',
      },
      {
        type: 'bonus',
        bonusType: 'deflection',
        target: 'ac.deflection',
        value: 1,
        source: 'Dueling Cuffs',
        condition: {
          type: 'custom',
          params: { descriptor: 'weapon_finesse_wielder' },
          description: 'additional +1 deflection (total +2) when wielding a weapon with Weapon Finesse',
        },
      },
      {
        type: 'special',
        target: 'special.dueling_cuffs_parry_no_penalty',
        value: 0,
        source: 'Dueling Cuffs',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 234 — Dust of Acid Consumption
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-dust-of-acid-consumption',
    name: 'Dust of Acid Consumption',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 10,
    slot: 'none',

    price: 1600,
    weight: 0,

    description:
      'This brown powder functions similarly to dust of dryness but targets acid instead of water. ' +
      'When thrown into acid, up to 10 gallons are absorbed into a marble-sized pellet. Hurling this ' +
      'pellet causes it to break and release the absorbed acid in a 30-foot splash, dealing 1d6 points ' +
      'of acid damage per gallon absorbed (maximum 4d6). Against acid-dealing oozes, the creature must ' +
      'succeed on a DC 18 Fortitude save or be destroyed outright; the dust deals 5d6 points of damage ' +
      'to the ooze regardless of the save result.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['control water', 'disintegrate'],
      cost: 800,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 0,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.dust_acid_consumption',
        value: 0,
        source: 'Dust of Acid Consumption',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 235 — Dust of Appearance
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-dust-of-appearance',
    name: 'Dust of Appearance',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.CONJURATION }],
    casterLevel: 5,
    slot: 'none',

    price: 1800,
    weight: 0,

    description:
      'This fine metallic powder, when thrown into the air, coats objects within a 10-foot radius. ' +
      'It reveals invisible creatures and objects, negating blur and displacement effects like faerie fire. ' +
      'The dust exposes figments, mirror images, and projected images. Affected creatures suffer a -30 ' +
      'penalty to Stealth checks. The effect persists for 5 minutes. The dust is typically stored in ' +
      'silk packets or hollow bone tubes.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['glitterdust'],
      cost: 900,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 0,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'penalty',
        bonusType: 'untyped',
        target: 'skill.stealth',
        value: -30,
        source: 'Dust of Appearance',
        condition: {
          type: 'custom',
          params: { descriptor: 'dusted_target' },
          description: 'applies to creatures coated by the dust',
        },
      },
      {
        type: 'special',
        target: 'special.dust_appearance_reveal_invisible',
        value: 0,
        source: 'Dust of Appearance',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 236 — Dust of Darkness
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-dust-of-darkness',
    name: 'Dust of Darkness',
    category: 'wondrous',
    source: 'Advanced Player\'s Guide',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.EVOCATION }],
    casterLevel: 3,
    slot: 'none',

    price: 600,
    weight: 0,

    description:
      'This black shimmering dust coats a creature in darkness for 1 minute. The effect varies by ' +
      'lighting: it grants concealment (20% miss chance) in normal light and total concealment (50% miss ' +
      'chance) in dim light. The dust provides no benefit in bright light or darkness, though observers ' +
      'in bright light may notice slight shadowing with a successful DC 20 Perception check. Creatures ' +
      'with darkvision perceive through the dust as normal darkness. The darkness effect dispels and ' +
      'counters the outlining effects of glitterdust (though not its blinding effect), and glitterdust ' +
      'negates the dust of darkness.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['darkness'],
      cost: 300,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 0,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.dust_darkness_concealment',
        value: 0,
        source: 'Dust of Darkness',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 237 — Dust of Disappearance
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-dust-of-disappearance',
    name: 'Dust of Disappearance',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ILLUSION }],
    casterLevel: 7,
    slot: 'none',

    price: 3500,
    weight: 0,

    description:
      'This magical powder functions similarly to dust of appearance but produces the opposite effect. ' +
      'When applied to a creature or object, it grants invisibility comparable to the greater invisibility ' +
      'spell. The target cannot be seen through normal vision or detected via magical methods such as see ' +
      'invisibility or invisibility purge. However, dust of appearance can reveal those concealed by this ' +
      'dust. Other detection methods such as sound and smell remain possible. The invisibility persists for ' +
      '2d6 rounds, and the affected creature remains unaware of when the effect ends.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['greater invisibility'],
      cost: 1750,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 0,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.dust_disappearance_invisibility',
        value: 0,
        source: 'Dust of Disappearance',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 238 — Dust of Dryness
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-dust-of-dryness',
    name: 'Dust of Dryness',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 11,
    slot: 'none',

    price: 850,
    weight: 0,

    description:
      'This magical powder serves dual purposes. When cast into water, it absorbs up to 100 gallons and ' +
      'transforms into a marble-sized sphere. Throwing this pellet releases the stored water. The dust ' +
      'only affects water (fresh, salt, or alkaline), not other liquids. Against outsiders possessing ' +
      'both the elemental and water subtypes, the dust requires a DC 18 Fortitude save or destroys the ' +
      'creature outright. The dust inflicts 5d6 points of damage regardless of a successful saving throw.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['control water'],
      cost: 425,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 0,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.dust_dryness_water_absorption',
        value: 0,
        source: 'Dust of Dryness',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 239 — Dust of Emulation
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-dust-of-emulation',
    name: 'Dust of Emulation',
    category: 'wondrous',
    source: "Advanced Player's Guide",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ILLUSION }],
    casterLevel: 1,
    slot: 'none',

    price: 800,
    weight: 0,

    description:
      "This magical dust grants a user the ability to interact with one item or object as if they had " +
      "successfully used the Use Magic Device skill to emulate a class feature or race. The character's " +
      "check result is treated as 25 for purposes of determining success. The magic lasts for 1 hour after " +
      "application, applying to whichever eligible object the user mentally selects during application, " +
      "or the first qualifying object encountered if no selection was made.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['disguise self'],
      cost: 400,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 0,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.dust_emulation_umd_class_race',
        value: 25,
        source: 'Dust of Emulation',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 240 — Dust of Hex Hiding
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-dust-of-hex-hiding',
    name: 'Dust of Hex Hiding',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ILLUSION }],
    casterLevel: 5,
    slot: 'none',

    price: 250,
    weight: 0,

    description:
      'This magical powder distorts divination attempts on cursed items. When applied to a cursed object, ' +
      'it increases the identification DC by 15 (rather than 10) to determine if the item is cursed, ' +
      'lasting 5 days. If the curse activates during this period, its caster level increases by 2 for ' +
      'purposes of spell resistance to effects like remove curse and break enchantment. The dust may also ' +
      'be scattered on magical glyphs, runes, or symbols, raising the DC to locate and disable them by 5 ' +
      'for 5 days.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['magic aura'],
      cost: 125,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 0,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.dust_hex_hiding_curse_dc',
        value: 15,
        source: 'Dust of Hex Hiding',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 241 — Dust of Illusion
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-dust-of-illusion',
    name: 'Dust of Illusion',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ILLUSION }],
    casterLevel: 6,
    slot: 'none',

    price: 1200,
    weight: 0,

    description:
      'This powder resembles chalk or graphite dust. When applied to a creature, it functions like a ' +
      'disguise self spell, with the person applying it choosing the desired appearance. Unwilling targets ' +
      'may attempt a DC 11 Reflex save to resist. The magical effect persists for 2 hours.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['disguise self'],
      cost: 600,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 0,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.dust_illusion_disguise_self',
        value: 0,
        source: 'Dust of Illusion',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 242 — Dust of Tracelessness
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-dust-of-tracelessness',
    name: 'Dust of Tracelessness',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 3,
    slot: 'none',

    price: 250,
    weight: 0,

    description:
      'This magical powder conceals passage and obscures tracks. When tossed into a chamber (up to 100 ' +
      'square feet), it makes the space appear dusty, dirty, and cobweb-laden as if it had been abandoned ' +
      'for a decade. When sprinkled on a trail, it eliminates evidence of passage for a dozen humanoids ' +
      'and horses across 250 feet. The effect is instantaneous with no lingering magical aura. Survival ' +
      'checks to track affected areas suffer a DC 20 penalty.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['pass without trace'],
      cost: 125,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 0,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'penalty',
        bonusType: 'untyped',
        target: 'skill.survival',
        value: -20,
        source: 'Dust of Tracelessness',
        condition: {
          type: 'custom',
          params: { descriptor: 'tracking_dusted_area' },
          description: 'penalty to Survival checks to track in areas treated with the dust',
        },
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 243 — Dust of Weighty Burdens
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-dust-of-weighty-burdens',
    name: 'Dust of Weighty Burdens',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'none',

    price: 3600,
    weight: 3,

    description:
      'This gray powder increases the weight of an object by 100 pounds per application. Effects stack ' +
      'and persist until the dust is cleaned off (full-round action per application) or the item receives ' +
      '5 electricity damage per application. When thrown as a splash weapon (10-foot range increment), a ' +
      'direct hit forces a Fortitude save (DC 10 + 1 per remaining application). Failed saves cause heavy ' +
      'encumbrance and inability to fly for 2d4 rounds. Creatures in the splash area that fail their saves ' +
      'suffer medium encumbrance for 2d4 rounds.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['slow', 'stone shape'],
      cost: 1800,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 0,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.dust_weighty_burdens_encumbrance',
        value: 0,
        source: 'Dust of Weighty Burdens',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 244 — Dust, Desiccating
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-dust-desiccating',
    name: 'Desiccating Dust',
    category: 'wondrous',
    source: 'Rival Guide',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.NECROMANCY }],
    casterLevel: 5,
    slot: 'none',

    price: 1500,
    weight: 0,

    description:
      'This powder combines grave dirt and ground snakeskin. Users spread it across two 5-foot squares ' +
      '(typically doorways), taking 1d4 rounds to apply. Creatures entering warded areas must succeed at ' +
      'a DC 19 Fortitude save or take 5d6 points of nonlethal damage and become immediately fatigued. The ' +
      'nonlethal damage persists until the victim drinks water. Repeated entries require new saves, but ' +
      'creatures already affected suffer no additional harm from additional passes. The effect lasts 24 hours.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['cup of dust'],
      cost: 750,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 0,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.desiccating_dust_nonlethal_damage',
        value: 0,
        source: 'Desiccating Dust',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 245 — Dust, Escape
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-dust-escape',
    name: 'Escape Dust',
    category: 'wondrous',
    source: 'Advanced Race Guide',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.CONJURATION }],
    casterLevel: 3,
    slot: 'none',

    price: 300,
    weight: 0,

    description:
      'This crystalline powder, when thrown at a creature, requires a ranged touch attack with a 5-foot ' +
      'range increment and does not provoke attacks of opportunity. On a successful hit, the target becomes ' +
      'dazzled and cannot make attacks of opportunity or immediate actions for 1 round.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['glitterdust'],
      cost: 150,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 0,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.escape_dust_dazzle',
        value: 0,
        source: 'Escape Dust',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 246 — Dust, Evidentiary
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-dust-evidentiary',
    name: 'Evidentiary Dust',
    category: 'wondrous',
    source: "Dungeoneer's Handbook",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 4,
    slot: 'none',

    price: 600,
    weight: 0,

    description:
      'This shimmery blue powder comes in a silk satchel. When dispersed, it reveals footprints made in ' +
      'the last 24 hours across up to 100 square feet indoors or 250 feet along trails. The illuminated ' +
      'tracks glow for 1 hour and grant a +20 circumstance bonus on Survival checks to follow the tracks. ' +
      'The dust cannot reveal tracks concealed by effects like dust of tracelessness or a druid\'s ' +
      'trackless step ability.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['faerie fire', 'residual tracking'],
      cost: 300,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 0,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'bonus',
        bonusType: 'circumstance',
        target: 'skill.survival',
        value: 20,
        source: 'Evidentiary Dust',
        condition: {
          type: 'custom',
          params: { descriptor: 'following_illuminated_tracks' },
          description: 'when following tracks illuminated by the dust',
        },
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 247 — Dust, Restoration
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-dust-restoration',
    name: 'Restoration Dust',
    category: 'wondrous',
    source: 'Advanced Class Guide',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.CONJURATION }],
    casterLevel: 5,
    slot: 'none',

    price: 2000,
    weight: 0,

    description:
      'This silky red dust feels pleasantly warm. When applied to a partially decomposed corpse or ' +
      'skeleton, it restores the flesh and bones, enabling identification or raising as if death were ' +
      'recent, effectively resetting the timeline for raise dead spells. The dust cannot restore corpses ' +
      'missing more than half their bones or those dead longer than 100 years. A single vial treats one ' +
      'Medium or smaller creature. Larger beings require multiple vials: two for Large, four for Huge, ' +
      'eight for Gargantuan, and sixteen for Colossal creatures.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['make whole'],
      cost: 1000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 0,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.restoration_dust_corpse_restore',
        value: 0,
        source: 'Restoration Dust',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 248 — Dust, Storyteller's
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-dust-storytellers',
    name: "Storyteller's Dust",
    category: 'wondrous',
    source: 'Advanced Class Guide',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ILLUSION }],
    casterLevel: 2,
    slot: 'none',

    price: 600,
    weight: 0,

    description:
      'This white powder in gaudy bags creates visible theater imagery when thrown into fire. It conjures ' +
      'an illusion within a 10-foot cube above the flames using the minor image spell effect. The user ' +
      'manipulates this illusion for up to 2 hours or until voluntarily dismissed. Users gain a +2 bonus ' +
      'on all Perform checks to tell a story with the created image.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['minor image'],
      cost: 300,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 0,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'bonus',
        bonusType: 'untyped',
        target: 'skill.perform',
        value: 2,
        source: "Storyteller's Dust",
        condition: {
          type: 'custom',
          params: { descriptor: 'storytelling_with_illusion' },
          description: 'when using the dust illusion to tell a story',
        },
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 249 — Duster, Gunman's
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-gunmans-duster',
    name: "Gunman's Duster",
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.ABJURATION }],
    casterLevel: 12,
    slot: 'body',

    price: 36000,
    weight: 5,

    description:
      'This lengthy, relaxed-fitting coat provides a +4 armor bonus to AC and grants a +2 luck bonus ' +
      'to AC against touch attacks from firearms. Gunslingers or those with the Amateur Gunslinger feat ' +
      'gain an extra grit point daily (not exceeding maximum). The dodge deed\'s bonus increases by +1, ' +
      'and non-gunslingers can use the dodge deed once per day.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['bullet shield'],
      specialRequirements: ['Amateur Gunslinger feat or creator must be a gunslinger'],
      cost: 18000,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 10,
      breakDC: 15,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'armor',
        target: 'ac.armor',
        value: 4,
        source: "Gunman's Duster",
      },
      {
        type: 'bonus',
        bonusType: 'luck',
        target: 'ac',
        value: 2,
        source: "Gunman's Duster",
        condition: {
          type: 'weapon_type',
          params: { weaponType: 'firearm', attackType: 'touch' },
          description: 'against touch attacks from firearms only',
        },
      },
      {
        type: 'special',
        target: 'special.gunmans_duster_grit_bonus',
        value: 1,
        source: "Gunman's Duster",
      },
    ],
  },
];
