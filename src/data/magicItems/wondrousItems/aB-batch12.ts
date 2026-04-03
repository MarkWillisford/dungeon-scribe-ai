import type { WondrousItemDefinition } from '@/types/magicItems';
import { AuraStrength, MagicSchool } from '@/types/equipment';

export const wondrousItemsAB12: WondrousItemDefinition[] = [
  // -------------------------------------------------------------------------
  // 276. Bracers of the Merciful Knight
  // Source: Ultimate Equipment pg. 272
  // Paladin-only: +4 effective levels for lay on hands; once/day infuse one use
  // with lesser restoration. No base effects for non-paladins.
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-bracers-merciful-knight',
    name: 'Bracers of the Merciful Knight',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 9,
    slot: 'wrists',

    price: 15600,
    weight: 1,

    description:
      'These golden bracers feature engravings depicting celestial beings. When worn by a paladin, ' +
      'the wearer is considered four levels higher for the purposes of determining the uses per day ' +
      'and healing provided by her lay on hands class feature. Once per day, she may infuse a use ' +
      'of lay on hands to provide the effects of a lesser restoration spell.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['cure serious wounds', 'lesser restoration'],
      cost: 7800,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 5,
      breakDC: 20,
    },

    activationCategory: 'continuous',

    effects: [],

    conditionalEffects: [
      {
        condition: 'wielder_class',
        classId: 'paladin',
        effects: [
          {
            type: 'bonus',
            bonusType: 'untyped',
            target: 'special.lay_on_hands_effective_level',
            value: 4,
            source: 'Bracers of the Merciful Knight',
          },
        ],
        // Once per day, paladin may infuse one lay on hands use with lesser restoration.
        // Shared-pool block: usesPerDay on block; individual spells omit usesPerDay.
        spellLikeAbilities: [
          {
            usesPerDay: 1,
            spells: [
              {
                spellId: 'lesser_restoration',
                spellName: 'Lesser Restoration',
                casterLevel: 9,
                activationAction: 'standard',
              },
            ],
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 277. Bracers, Arrowmaster's
  // Source: Ultimate Equipment pg. 270
  // DR 5/magic vs. ranged; +1 deflection vs. ranged; 1/day +20 insight on next
  // ranged attack roll (swift action).
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-bracers-arrowmasters',
    name: "Arrowmaster's Bracers",
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION }],
    casterLevel: 5,
    slot: 'wrists',

    price: 13900,
    weight: 1,

    description:
      "These leather shooting bracers protect the wearer's wrist from bowstring injury and resemble " +
      'bracers of archery, though the wearer immediately recognizes the distinction upon donning them. ' +
      'The wearer gains damage reduction 5/magic against ranged weapons and a +1 deflection bonus to ' +
      'AC against ranged attacks. Once per day as a swift action, the wearer can grant herself a ' +
      '+20 insight bonus on her next ranged attack roll before the end of her next turn.',

    construction: {
      feats: ['Craft Wondrous Item', 'Craft Magic Arms and Armor'],
      spells: ['protection from arrows', 'true strike'],
      cost: 6950,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 5,
      breakDC: 18,
    },

    activationCategory: 'continuous',
    activationAction: 'swift',

    effects: [
      {
        type: 'resistance',
        target: 'dr',
        value: 5,
        source: "Arrowmaster's Bracers",
        condition: {
          type: 'weapon_type',
          params: { weaponType: 'ranged' },
          description: 'DR 5/magic against ranged weapon attacks',
        },
      },
      {
        type: 'bonus',
        bonusType: 'deflection',
        target: 'ac.deflection',
        value: 1,
        source: "Arrowmaster's Bracers",
        condition: {
          type: 'weapon_type',
          params: { weaponType: 'ranged' },
          description: 'against ranged attacks only',
        },
      },
      {
        type: 'special',
        target: 'special.arrowmasters_bracers_insight_attack',
        value: 0,
        source: "Arrowmaster's Bracers",
      },
    ],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'true_strike',
            spellName: 'True Strike',
            casterLevel: 5,
            usesPerDay: 1,
            activationAction: 'swift',
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 278. Bracers, Bonebreaker
  // Source: Ultimate Equipment pg. 270
  // 1/day melee attack: target makes DC 14 Will save or take -6 to chosen
  // ability score (Str, Dex, or Con). Penalty heals 1/day naturally.
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-bracers-bonebreaker',
    name: 'Bonebreaker Bracers',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.NECROMANCY }],
    casterLevel: 5,
    slot: 'wrists',

    price: 6000,
    weight: 2,

    description:
      'These brass and leather bracers enable the wearer to cause severe injuries through melee combat. ' +
      'Once per day, the wearer may use one of these bracers as part of a melee attack. If the attack ' +
      'hits, the target must make a DC 14 Will save or have one ability score of the wearer\'s choice ' +
      '(Strength, Dexterity, or Constitution) reduced by 6 (to a minimum of 1). This penalty decreases ' +
      'by 1 per day and is immediately removed by heal, regenerate, restoration, or similar curse-breaking magic.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['bestow curse'],
      cost: 3000,
    },
    physicalStats: {
      hardness: 8,
      hitPoints: 5,
      breakDC: 18,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.bonebreaker_bracers_ability_penalty',
        value: 0,
        source: 'Bonebreaker Bracers',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 279. Bracers, Burglar's
  // Source: Ultimate Equipment pg. 273
  // Transform into masterwork thieves' tools on command; 1/day take 10 on
  // Disable Device even when distracted or in danger.
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-bracers-burglars',
    name: "Burglar's Bracers",
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 3,
    slot: 'wrists',

    price: 1050,
    weight: 1,

    description:
      "On command, these plain leather bracers can transform into a set of masterwork thieves' tools. " +
      'They can transform back to their bracer form with another command. Once per day, the user may ' +
      'take 10 on a single Disable Device check while using the tools or wearing the bracers, ' +
      'even when in immediate danger or distracted.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['shrink item'],
      cost: 550,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 2,
      breakDC: 10,
    },

    activationCategory: 'command_word',

    effects: [
      {
        type: 'special',
        target: 'special.burglars_bracers_transform_thieves_tools',
        value: 0,
        source: "Burglar's Bracers",
      },
      {
        type: 'special',
        target: 'special.burglars_bracers_take_10_disable_device',
        value: 0,
        source: "Burglar's Bracers",
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 280. Bracers, Howling
  // Source: Advanced Class Guide pg. 230
  // 1/day clash together: crushing despair (DC 16 + 1 per 2 affected by raging
  // song, max +5). Creator must have raging song class feature.
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-bracers-howling',
    name: 'Howling Bracers',
    category: 'wondrous',
    source: 'Advanced Class Guide',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 7,
    slot: 'wrists',

    price: 7000,
    weight: 1,

    description:
      'These bracers are made of heavy iron and have a pattern of howling wolves engraved upon them. ' +
      'Once per day, as an immediate action, the wearer can clash them together to produce a chorus of ' +
      'howls functioning as a crushing despair spell with DC 16. For every two creatures currently ' +
      'affected by the wearer\'s raging song when the bracers are activated, the DC increases by 1 ' +
      '(to a maximum increase of +5).',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['crushing despair'],
      specialRequirements: ['Creator must possess the raging song class feature'],
      cost: 3500,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 5,
      breakDC: 22,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.howling_bracers_crushing_despair',
        value: 0,
        source: 'Howling Bracers',
      },
    ],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'crushing_despair',
            spellName: 'Crushing Despair',
            casterLevel: 7,
            usesPerDay: 1,
            saveDC: 16,
            activationAction: 'immediate',
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 281. Bracers, Ioun Spite
  // Source: Adventurer's Guide pg. 36 / Agents of Evil pg. 29
  // Steal ioun stones via CMB at range; embed up to 4; drain for magic missile
  // (3 missiles, up to 160 ft); drained stones become dull gray for 2d4 hours.
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-bracers-ioun-spite',
    name: 'Ioun Spite Bracers',
    category: 'wondrous',
    source: "Adventurer's Guide",
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.EVOCATION }],
    casterLevel: 12,
    slot: 'wrists',

    price: 15000,
    weight: 2,

    description:
      'These bracers allow the wearer to steal orbiting ioun stones from opponents and temporarily ' +
      'harness their power. As a standard action, the wearer may attempt a steal combat maneuver ' +
      'against an ioun stone within 30 feet; the target gains a +4 circumstance bonus to CMD to resist. ' +
      'Successfully stolen stones embed in four available slots (two per bracer), granting their normal ' +
      'bonuses to the wearer. Removal of an embedded stone requires a move action. As a standard action, ' +
      'the wearer may drain any non-dull ioun stone embedded in the bracers to cast magic missile as a ' +
      'spell-like ability, firing three missiles at targets up to 160 feet away. Drained stones become ' +
      'dull gray for 2d4 hours.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['magic missile', 'telekinesis'],
      cost: 7500,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 10,
      breakDC: 20,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.ioun_spite_steal_stone',
        value: 0,
        source: 'Ioun Spite Bracers',
      },
    ],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'magic_missile',
            spellName: 'Magic Missile',
            casterLevel: 12,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 282. Bracers, Longarm
  // Source: Ultimate Equipment pg. 274
  // 3/day swift action: extend reach by 5 ft until start of next turn;
  // -4 to attack rolls with manufactured weapons (no penalty for unarmed/
  // natural weapons).
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-bracers-longarm',
    name: 'Longarm Bracers',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 3,
    slot: 'wrists',

    price: 7200,
    weight: 1,

    description:
      'These bracers are constructed from woven strands of bamboo. Three times per day, as a swift ' +
      'action, the wearer can stretch her arms beyond their limits, increasing her reach by 5 feet ' +
      'until the start of her next turn. Manufactured weapons suffer a -4 penalty to attack rolls ' +
      'while the reach is extended; unarmed strikes and natural weapons have no such penalty.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['alter self'],
      cost: 3600,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 2,
      breakDC: 10,
    },

    activationCategory: 'use_activated',
    activationAction: 'swift',

    effects: [
      {
        type: 'special',
        target: 'special.longarm_bracers_reach',
        value: 0,
        source: 'Longarm Bracers',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 283. Bracers, Quickmetal
  // Source: Adventurer's Armory 2 pg. 23
  // Three variants: Silver (1,000 gp), Cold Iron (2,000 gp), Adamantine (5,000 gp).
  // 1/day command word: liquid metal coats melee weapons for 10 rounds, allowing
  // DR penetration as if made of that material. -2 to attack rolls with
  // manufactured weapons. Cannot coat thrown/ranged weapons.
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-bracers-quickmetal-silver',
    name: 'Quickmetal Bracers (Silver)',
    category: 'wondrous',
    source: "Adventurer's Armory 2",
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 9,
    slot: 'wrists',

    price: 1000,
    weight: 1,

    description:
      'These bracers, forged from alchemical silver, activate once daily via command word, transforming ' +
      'into liquid metal that coats the wearer\'s weapons for 10 rounds. The bracers can cover either ' +
      'one two-handed weapon or up to two one-handed or light melee weapons. Affected weapons overcome ' +
      'damage reduction as though they were silver. Attack rolls with affected manufactured weapons ' +
      'suffer a -2 penalty. Improvised weapons are unaffected by this penalty. If the wielder releases ' +
      'a coated weapon, the metal instantly returns to bracer form; thrown weapons and ammunition cannot ' +
      'be coated.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['major creation'],
      cost: 500,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 5,
      breakDC: 15,
    },

    activationCategory: 'command_word',

    effects: [
      {
        type: 'special',
        target: 'special.quickmetal_bracers_silver_coating',
        value: 0,
        source: 'Quickmetal Bracers (Silver)',
      },
    ],
  },

  {
    id: 'wondrous-bracers-quickmetal-cold-iron',
    name: 'Quickmetal Bracers (Cold Iron)',
    category: 'wondrous',
    source: "Adventurer's Armory 2",
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 9,
    slot: 'wrists',

    price: 2000,
    weight: 1,

    description:
      'These bracers, forged from cold iron, activate once daily via command word, transforming into ' +
      'liquid metal that coats the wearer\'s weapons for 10 rounds. The bracers can cover either one ' +
      'two-handed weapon or up to two one-handed or light melee weapons. Affected weapons overcome ' +
      'damage reduction as though they were cold iron. Attack rolls with affected manufactured weapons ' +
      'suffer a -2 penalty. Improvised weapons are unaffected by this penalty. If the wielder releases ' +
      'a coated weapon, the metal instantly returns to bracer form; thrown weapons and ammunition cannot ' +
      'be coated.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['major creation'],
      cost: 1000,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 5,
      breakDC: 15,
    },

    activationCategory: 'command_word',

    effects: [
      {
        type: 'special',
        target: 'special.quickmetal_bracers_cold_iron_coating',
        value: 0,
        source: 'Quickmetal Bracers (Cold Iron)',
      },
    ],
  },

  {
    id: 'wondrous-bracers-quickmetal-adamantine',
    name: 'Quickmetal Bracers (Adamantine)',
    category: 'wondrous',
    source: "Adventurer's Armory 2",
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 9,
    slot: 'wrists',

    price: 5000,
    weight: 1,

    description:
      'These bracers, forged from adamantine, activate once daily via command word, transforming into ' +
      'liquid metal that coats the wearer\'s weapons for 10 rounds. The bracers can cover either one ' +
      'two-handed weapon or up to two one-handed or light melee weapons. Affected weapons overcome ' +
      'damage reduction as though they were adamantine. Attack rolls with affected manufactured weapons ' +
      'suffer a -2 penalty. Improvised weapons are unaffected by this penalty. If the wielder releases ' +
      'a coated weapon, the metal instantly returns to bracer form; thrown weapons and ammunition cannot ' +
      'be coated.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['major creation'],
      cost: 2500,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 5,
      breakDC: 15,
    },

    activationCategory: 'command_word',

    effects: [
      {
        type: 'special',
        target: 'special.quickmetal_bracers_adamantine_coating',
        value: 0,
        source: 'Quickmetal Bracers (Adamantine)',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 284. Bracers, Raven
  // Source: Dungeons of Golarion pg. 62
  // Slot is 'wrists' despite AoN listing "Hands" — these are bracers worn on the
  // forearms. 3/day swift action: grants throwing+returning to held melee weapon
  // for 1 round. 1/week: transform into 2 metallic ravens (silver raven figurine
  // effect, animal messenger); last up to 24 hours, then return.
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-bracers-raven',
    name: 'Raven Bracers',
    category: 'wondrous',
    source: 'Dungeons of Golarion',
    isOfficial: true,

    aura: [
      { strength: AuraStrength.MODERATE, school: MagicSchool.DIVINATION },
      { strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION },
    ],
    casterLevel: 9,
    slot: 'wrists',

    price: 16600,
    weight: 4,

    description:
      'These dark metal bracers are shaped like ravens stretched across the wearer\'s forearms. ' +
      'Originally created for the bodyguards of Zolurket\'s final king. As a swift action, up to ' +
      'three times per day, the wearer can grant the throwing and returning special qualities to any ' +
      'held melee weapon for 1 round. Once per week, the wearer can remove the bracers and toss ' +
      'them into the air as a standard action, transforming them into a pair of black metallic ravens ' +
      'that function as silver raven figurines of wondrous power. Each raven can deliver one message ' +
      'via an animal messenger spell effect. They maintain raven form for up to 24 hours and return ' +
      'via teleportation to the owner\'s hands when the time expires or the message is delivered.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['animal messenger', 'animate object', 'telekinesis', 'teleport object'],
      cost: 8300,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 5,
      breakDC: 20,
    },

    activationCategory: 'use_activated',
    activationAction: 'swift',

    effects: [
      {
        type: 'special',
        target: 'special.raven_bracers_weapon_throwing_returning',
        value: 0,
        source: 'Raven Bracers',
      },
      {
        type: 'special',
        target: 'special.raven_bracers_raven_transform',
        value: 0,
        source: 'Raven Bracers',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 285. Bracers, Spellguard
  // Source: Ultimate Equipment pg. 275
  // +2 competence bonus on concentration checks to cast defensively; 3/day roll
  // defensive casting concentration check twice, use better result.
  // Construction requires Combat Casting feat.
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-bracers-spellguard',
    name: 'Spellguard Bracers',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION }],
    casterLevel: 4,
    slot: 'wrists',

    price: 5000,
    weight: 1,

    description:
      'These blue leather bracers adorned with star-shaped studs are designed for spellcasters ' +
      'who find themselves in melee combat. The wearer gains a +2 competence bonus on concentration ' +
      'checks made to cast spells defensively. Three times per day, the wearer may roll the ' +
      'concentration check for casting defensively twice and use the better result.',

    construction: {
      feats: ['Combat Casting', 'Craft Wondrous Item'],
      spells: ['warding weapon'],
      cost: 2500,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 2,
      breakDC: 10,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'spell.concentration',
        value: 2,
        source: 'Spellguard Bracers',
        condition: {
          type: 'custom',
          params: { descriptor: 'defensive_casting' },
          description: 'on concentration checks to cast defensively only',
        },
      },
      {
        type: 'special',
        target: 'special.spellguard_bracers_reroll_defensive_cast',
        value: 0,
        source: 'Spellguard Bracers',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 286. Bracers, Swallowtail
  // Source: Pathfinder Adventure Path #75: Demon's Heresy pg. 63
  // +1 luck bonus to all saves, ability checks, and skill checks.
  // Desna worshippers: also cast dream 1/day; immune to nightmare (spell
  // reflected back on caster).
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-bracers-swallowtail',
    name: 'Swallowtail Bracers',
    category: 'wondrous',
    source: "Pathfinder Adventure Path #75: Demon's Heresy",
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ABJURATION }],
    casterLevel: 9,
    slot: 'wrists',

    price: 27000,
    weight: 1,

    description:
      'These ornamental silver bracers feature blue butterfly motifs sacred to Desna. The wearer ' +
      'gains a +1 luck bonus on all saving throws, ability checks, and skill checks. A devoted ' +
      'follower of Desna who wears these bracers also gains the ability to cast dream once per day ' +
      'by speaking a command word and naming the target. Additionally, Desna worshippers wearing ' +
      'these bracers are immune to nightmare spells; any nightmare spell cast on a protected wearer ' +
      'is reflected back on the caster.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['divine favor', 'dream'],
      specialRequirements: ['Creator must worship Desna'],
      cost: 13500,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 5,
      breakDC: 20,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'luck',
        target: 'save.all',
        value: 1,
        source: 'Swallowtail Bracers',
      },
      {
        type: 'bonus',
        bonusType: 'luck',
        target: 'special.ability_checks',
        value: 1,
        source: 'Swallowtail Bracers',
      },
      {
        type: 'bonus',
        bonusType: 'luck',
        target: 'skill.all',
        value: 1,
        source: 'Swallowtail Bracers',
      },
      {
        // Desna worshippers only: immune to nightmare spell; nightmare reflected to caster.
        // "Wielder worships Desna" cannot be modeled with current ConditionalEffect types.
        type: 'special',
        target: 'special.swallowtail_bracers_nightmare_immunity',
        value: 0,
        source: 'Swallowtail Bracers',
      },
    ],

    // Desna-worshipper additional powers are modeled as 'special' effects below
    // because "worships Desna" cannot be expressed via the standard ConditionalEffect
    // condition types (wielder_class / wielder_race / wielder_alignment / target_type).
    // A future 'wielder_deity' condition type would handle this more precisely.
    spellLikeAbilities: [
      {
        // Desna worshippers only; modeled here with the restriction noted in description
        usesPerDay: 1,
        spells: [
          {
            spellId: 'dream',
            spellName: 'Dream',
            casterLevel: 9,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 287. Brain Cylinder
  // Source: Pathfinder #88: Valley of the Brain Collectors pg. 73;
  //         Pathfinder #46: Wake of the Watcher pg. 87
  // Preserves extracted brain; grants continued mental function; retains skill
  // ranks in Appraise, Bluff, Diplomacy, Knowledge (all), Linguistics,
  // Perception, Sense Motive. Hardness 10, 30 hp.
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-brain-cylinder',
    name: 'Brain Cylinder',
    category: 'wondrous',
    source: 'Pathfinder #88: Valley of the Brain Collectors',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.NECROMANCY }],
    casterLevel: 9,
    slot: 'none',

    price: 5000,
    weight: 10,

    description:
      'This device preserves an extracted brain from a Large or smaller creature, allowing continued ' +
      'mental function despite bodily death. The brain retains its skill ranks in Appraise, Bluff, ' +
      'Diplomacy, Knowledge (all), Linguistics, Perception, and Sense Motive at their original values, ' +
      'and can think, speak, and understand any languages it previously knew. It retains no physical ' +
      'or purely mental abilities from its original life. The cylinder has hardness 10 and 30 hit ' +
      'points; destruction of the cylinder permanently destroys the contained brain.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['gentle repose', 'magic jar'],
      specialRequirements: ['7 ranks in Heal'],
      cost: 2500,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 30,
      breakDC: 28,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'special',
        target: 'special.brain_cylinder_preserved_cognition',
        value: 0,
        source: 'Brain Cylinder',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 288. Brass Chatterbox
  // Source: Pathfinder Adventure Path #127: Crownfall pg. 75
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-brass-chatterbox',
    name: 'Brass Chatterbox',
    category: 'wondrous',
    source: 'Pathfinder Adventure Path #127: Crownfall',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.DIVINATION }],
    casterLevel: 9,
    slot: 'none',

    price: 300,
    weight: 0,

    description:
      'This elegant clockwork cricket, molded from brass and darkwood with a key in its back, is a clever ' +
      'invention designed to deter eavesdropping. When wound as a full-round action, it clicks and chirps ' +
      'softly for 2 minutes. The noise obscures nearby speech: speakers within 5 feet of the device can ' +
      'hear each other normally, but creatures beyond that distance take a -5 penalty on Perception checks ' +
      'to overhear the conversation. When attached to a door, it imposes this penalty on Perception checks ' +
      'to hear noises through the door.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['ghost sound', 'magic mouth'],
      cost: 150,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.brass_chatterbox_eavesdrop_penalty',
        value: -5,
        source: 'Brass Chatterbox',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 289. Brass Spider
  // Source: Advanced Class Guide pg. 228
  // 1/day: use Disable Device from 15 ft away (line of sight, no penalty);
  // functions as masterwork thieves' tools at normal range.
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-brass-spider',
    name: 'Brass Spider',
    category: 'wondrous',
    source: 'Advanced Class Guide',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 7,
    slot: 'none',

    price: 2500,
    weight: 2,

    description:
      'A miniature brass construct resembling a spider fashioned from gears and cogs, approximately ' +
      'the size of an adult hand. Its legs function as fine tools including picks, chisels, and pliers, ' +
      'and it contains reservoirs of powders and oils sprayed through nozzle-spinnerets. A chain connects ' +
      'the spider to a control disk with studs and levers. The spider functions as masterwork thieves\' ' +
      'tools at normal range. Once per day, the wielder may use Disable Device from up to 15 feet away ' +
      'with line of sight, without range penalty. Mishaps from skill failures typically affect the spider ' +
      '(hardness 5, 25 hp) rather than the user.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['animate objects', "cat's grace"],
      cost: 1250,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 25,
      breakDC: 20,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.brass_spider_remote_disable_device',
        value: 0,
        source: 'Brass Spider',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 290. Brastlewark Brew
  // Source: Inner Sea Intrigue pg. 52
  // Magical ale; drinkers find comedy checks unbearably funny for 1 minute.
  // Any Perform (comedy) check of 10 + target's Will save modifier within 30 ft
  // triggers laughter (DC 15 Will or collapse, full-round to suppress).
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-brastlewark-brew',
    name: 'Brastlewark Brew',
    category: 'wondrous',
    source: 'Inner Sea Intrigue',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 3,
    slot: 'none',

    price: 150,
    weight: 1,

    description:
      'This magical ale causes drinkers to find jokes unbearably funny for 1 minute. Any Perform ' +
      '(comedy) check with a result of at least 10 + the drinker\'s Will save modifier attempted ' +
      'within 30 feet causes the drinker to collapse in laughter, unable to act except to suppress ' +
      'laughter as a full-round action (Will DC 15). A successful save ends the current laughing fit ' +
      'but provides no protection against future jokes for the duration. Most often drunk willingly, ' +
      'though some bartenders serve it as an expensive harmless prank.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['hideous laughter'],
      cost: 75,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.brastlewark_brew_comedy_susceptibility',
        value: 0,
        source: 'Brastlewark Brew',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 291. Brazier of Conjuring Fire Elementals
  // Source: Ultimate Equipment pg. 285
  // Full-round action to summon: with 1 lb. brimstone → Huge fire elemental
  // (summon monster VI); otherwise → Large fire elemental (summon monster V).
  // Only one elemental at a time.
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-brazier-conjuring-fire-elementals',
    name: 'Brazier of Conjuring Fire Elementals',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 11,
    slot: 'none',

    price: 90000,
    weight: 5,

    description:
      'When filled with burning coals or wood, this brazier can be used as a full-round action to ' +
      'summon a fire elemental. With 1 pound of brimstone burning inside, it conjures a Huge fire ' +
      'elemental (as summon monster VI); otherwise, it conjures a Large fire elemental (as summon ' +
      'monster V). Summoning extinguishes the internal fire. Only one elemental can be summoned at ' +
      'a time; another cannot be conjured until the previous one expires, is dismissed, or is slain.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['summon monster V', 'summon monster VI'],
      cost: 45000,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 15,
      breakDC: 20,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.brazier_conjure_large_fire_elemental',
        value: 0,
        source: 'Brazier of Conjuring Fire Elementals',
      },
      {
        type: 'special',
        target: 'special.brazier_conjure_huge_fire_elemental',
        value: 0,
        source: 'Brazier of Conjuring Fire Elementals',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 292. Briar Bomb
  // Source: Planar Adventures pg. 53
  // Throwable splash weapon (10-ft range increment). On impact: 20-ft-radius
  // bramble field (up to 20 ft high), hardness 5, 15 hp. Creatures moving
  // through take 1d4 piercing per 5 ft; DC 20 Reflex or entangled. Escape:
  // DC 20 Str or Escape Artist as full-round action. Single use.
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-briar-bomb',
    name: 'Briar Bomb',
    category: 'wondrous',
    source: 'Planar Adventures',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.CONJURATION }],
    casterLevel: 3,
    slot: 'none',

    price: 1250,
    weight: 1,

    description:
      'This throwable splash weapon is a pinecone-shaped briar cluster with a 10-foot range increment. ' +
      'Upon impact, it creates a 20-foot-radius field of thorny brambles extending up to 20 feet high ' +
      'if space permits. The brambles have hardness 5 and 15 hit points, provide cover but do not block ' +
      'vision, and are destroyed when their hit points are depleted. Creatures moving through the brambles ' +
      'take 1d4 points of piercing damage for every 5 feet of movement and must succeed at a DC 20 Reflex ' +
      'save or become entangled. An entangled creature may break free with a DC 20 Strength check or ' +
      'Escape Artist check as a full-round action. The item is destroyed after being thrown once.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['entangle', 'plant growth'],
      cost: 625,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.briar_bomb_bramble_field',
        value: 0,
        source: 'Briar Bomb',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 293. Bridle of Charon
  // Source: Pathfinder: Spiral of Bones #5 pg. 30
  // Head slot (worn by the mount). 1/day immediate action during mount's
  // movement: mount becomes incorporeal, halts in unoccupied space; objects
  // passed through lose half hp (hardness ignored); living creatures in spaces
  // traversed make DC 20 Fort save or take -4 to Str, Dex, and Con for 1 min.
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-bridle-of-charon',
    name: 'Bridle of Charon',
    category: 'wondrous',
    source: 'Pathfinder: Spiral of Bones #5',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 14,
    slot: 'head',

    price: 40000,
    weight: 2,

    description:
      'This bridle is studded with soul gems and grants the rider a portion of Death\'s Pale Horse\'s ' +
      'abilities. Once per day, as an immediate action taken during the mount\'s movement, the rider ' +
      'can cause the mount to become incorporeal. The mount must halt in an unoccupied space. Objects ' +
      'the mount passes through lose half their hit points (hardness is ignored), and living creatures ' +
      'whose spaces the mount traverses must succeed at a DC 20 Fortitude save or suffer a -4 penalty ' +
      'to Strength, Dexterity, and Constitution for 1 minute.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['bestow curse', 'ethereal jaunt'],
      cost: 20000,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 5,
      breakDC: 18,
    },

    activationCategory: 'use_activated',
    activationAction: 'immediate',

    effects: [
      {
        type: 'special',
        target: 'special.bridle_of_charon_incorporeal_charge',
        value: 0,
        source: 'Bridle of Charon',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 294. Bridle of Tricks
  // Source: Knights of the Inner Sea pg. 30
  // Three variants: 3 tricks (900 gp), 4 tricks (1,600 gp), 5 tricks (2,500 gp).
  // Grants the wearing animal/magical beast additional trained tricks.
  // Slot: head (worn by the animal/mount).
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-bridle-of-tricks-3',
    name: 'Bridle of Tricks (3 tricks)',
    category: 'wondrous',
    source: 'Knights of the Inner Sea',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 5,
    slot: 'head',

    price: 900,
    weight: 2,

    description:
      'This magical bridle of steel and leather, when placed on an animal or magical beast with ' +
      'suitable anatomy, grants the creature knowledge of three additional tricks as if it had been ' +
      'taught them with the Handle Animal skill. The specific tricks are determined at creation and ' +
      'cannot be changed afterward. Common examples include attack, defend, fetch, guard, and heel.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['speak with animals'],
      specialRequirements: ['Creator must have 5 ranks in Handle Animal'],
      cost: 450,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 2,
      breakDC: 10,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'special',
        target: 'special.bridle_of_tricks_granted_tricks',
        value: 3,
        source: 'Bridle of Tricks (3 tricks)',
      },
    ],
  },

  {
    id: 'wondrous-bridle-of-tricks-4',
    name: 'Bridle of Tricks (4 tricks)',
    category: 'wondrous',
    source: 'Knights of the Inner Sea',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 5,
    slot: 'head',

    price: 1600,
    weight: 2,

    description:
      'This magical bridle of steel and leather, when placed on an animal or magical beast with ' +
      'suitable anatomy, grants the creature knowledge of four additional tricks as if it had been ' +
      'taught them with the Handle Animal skill. The specific tricks are determined at creation and ' +
      'cannot be changed afterward. Common examples include attack, defend, fetch, guard, and heel.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['speak with animals'],
      specialRequirements: ['Creator must have 5 ranks in Handle Animal'],
      cost: 800,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 2,
      breakDC: 10,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'special',
        target: 'special.bridle_of_tricks_granted_tricks',
        value: 4,
        source: 'Bridle of Tricks (4 tricks)',
      },
    ],
  },

  {
    id: 'wondrous-bridle-of-tricks-5',
    name: 'Bridle of Tricks (5 tricks)',
    category: 'wondrous',
    source: 'Knights of the Inner Sea',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 5,
    slot: 'head',

    price: 2500,
    weight: 2,

    description:
      'This magical bridle of steel and leather, when placed on an animal or magical beast with ' +
      'suitable anatomy, grants the creature knowledge of five additional tricks as if it had been ' +
      'taught them with the Handle Animal skill. The specific tricks are determined at creation and ' +
      'cannot be changed afterward. Common examples include attack, defend, fetch, guard, and heel.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['speak with animals'],
      specialRequirements: ['Creator must have 5 ranks in Handle Animal'],
      cost: 1250,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 2,
      breakDC: 10,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'special',
        target: 'special.bridle_of_tricks_granted_tricks',
        value: 5,
        source: 'Bridle of Tricks (5 tricks)',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 295. Brilliant Bulwark
  // NOT A WONDROUS ITEM — this is a magic armor (buckler) entry in
  // MagicArmorDisplay.aspx. Excluded from this wondrous items batch.
  // -------------------------------------------------------------------------
  // NOT FOUND (as wondrous item): Brilliant Bulwark — it is a magic buckler
  // (magic_shield category), not a wondrous item.

  // -------------------------------------------------------------------------
  // 296. Brilliant Flash Symbol
  // Source: Horror Adventures pg. 219
  // No slot (held holy symbol). When channeling energy: dazzled 1 round
  // (DC 10 Fort). As divine focus: up to 3 creatures dazzled (DC 10 Fort).
  // Expend sapphire: upgrade to blinded on fail / dazzled on save.
  // No effect in total darkness.
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-brilliant-flash-symbol',
    name: 'Brilliant Flash Symbol',
    category: 'wondrous',
    source: 'Horror Adventures',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.EVOCATION }],
    casterLevel: 3,
    slot: 'none',

    price: 1600,
    weight: 0,

    description:
      'A polished quartz holy symbol set with a sapphire that amplifies ambient light into a blinding ' +
      'effect when brandished. When the bearer channels energy, creatures damaged by that channeling ' +
      'must succeed at a DC 10 Fortitude save or become dazzled for 1 round. When used as a divine ' +
      'focus for spellcasting, up to three affected creatures must make DC 10 Fortitude saves or be ' +
      'dazzled. The bearer can permanently expend the sapphire\'s magic to upgrade the effect: creatures ' +
      'that fail the save are blinded, while those that succeed are merely dazzled. The symbol functions ' +
      'only in areas with some ambient light and has no power in total darkness.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['flare'],
      specialRequirements: ['Creator must have channel energy class feature'],
      cost: 800,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.brilliant_flash_symbol_dazzle_channel',
        value: 0,
        source: 'Brilliant Flash Symbol',
      },
      {
        type: 'special',
        target: 'special.brilliant_flash_symbol_dazzle_focus',
        value: 0,
        source: 'Brilliant Flash Symbol',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 297. Brooch of Amber Sparks
  // Source: Ultimate Equipment pg. 256
  // Absorbs up to 20 electricity damage per incident (max 50/day, stored up to
  // 10 min). Discharge stored charge as shocking grasp (1d6 per 5 pts stored).
  // Slot listed as 'neck' on AoN (brooch/clasp).
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-brooch-amber-sparks',
    name: 'Brooch of Amber Sparks',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [
      { strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION },
      { strength: AuraStrength.FAINT, school: MagicSchool.EVOCATION },
    ],
    casterLevel: 5,
    slot: 'chest',

    price: 16800,
    weight: 1,

    description:
      'This copper clasp adorned with amber fastens cloaks or capes. When the wearer takes electricity ' +
      'damage, the brooch absorbs up to 20 points per incident and stores the charge for up to 10 minutes ' +
      'or until deliberately released. The brooch can store a maximum of 50 points of electricity damage ' +
      'per day. The wearer may discharge all stored energy as a shocking grasp effect, dealing 1d6 points ' +
      'of electricity damage per 5 points of damage held in the brooch.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['resist energy', 'shocking grasp'],
      cost: 8400,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'special',
        target: 'special.brooch_amber_sparks_absorb_electricity',
        value: 0,
        source: 'Brooch of Amber Sparks',
      },
      {
        type: 'special',
        target: 'special.brooch_amber_sparks_discharge',
        value: 0,
        source: 'Brooch of Amber Sparks',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 298. Brooch of Blending
  // Source: Advanced Race Guide pg. 47
  // Half-elf (or half-orc variant) only. Alter physical features to appear
  // fully elven or human; +20 circumstance on Disguise to pass as chosen race.
  // Does not radiate magic; detectable only by true seeing.
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-brooch-of-blending',
    name: 'Brooch of Blending',
    category: 'wondrous',
    source: 'Advanced Race Guide',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 3,
    slot: 'chest',

    price: 2000,
    weight: 0,

    description:
      'This brooch allows half-elves to physically alter their features to appear entirely elven or ' +
      'human. Activating the brooch as a standard action grants the wearer a +20 circumstance bonus ' +
      'on Disguise checks when attempting to pass as the selected race. The transformation is physical, ' +
      'not illusory, and the brooch does not radiate magic; it cannot be detected by detect magic but ' +
      'can be revealed through true seeing. The transformation persists until the brooch is activated ' +
      'again or removed. Those already familiar with the wearer recognize them without requiring a ' +
      'Perception check. A version for half-orcs also exists.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['alter self'],
      specialRequirements: ['Creator must be a half-elf (or half-orc for the half-orc version)'],
      cost: 1000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'command_word',
    activationAction: 'standard',

    effects: [
      {
        type: 'bonus',
        bonusType: 'circumstance',
        target: 'skill.disguise',
        value: 20,
        source: 'Brooch of Blending',
        condition: {
          type: 'custom',
          params: { descriptor: 'passing_as_selected_race' },
          description: 'when passing as chosen race (elven or human)',
        },
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 299. Brooch of Shielding
  // Source: Ultimate Equipment pg. 257 / Core Rulebook pg. 505
  // Absorbs up to 101 points of damage from magic missile spells and SLAs.
  // Melts and becomes useless once threshold is exceeded.
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-brooch-of-shielding',
    name: 'Brooch of Shielding',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION }],
    casterLevel: 1,
    slot: 'chest',

    price: 1500,
    weight: 0,

    description:
      'This decorative silver or gold jewelry fastens cloaks and provides magical protection against ' +
      'magic missiles. The brooch absorbs up to 101 points of damage from magic missile spells and ' +
      'spell-like abilities. Once the brooch has absorbed its full capacity of damage, it melts and ' +
      'becomes useless.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['shield'],
      cost: 750,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'special',
        target: 'special.brooch_shielding_absorb_magic_missile',
        value: 101,
        source: 'Brooch of Shielding',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 300. Broom of Flying
  // Source: Ultimate Equipment pg. 285 / Core Rulebook pg. 505
  // Up to 9 hours/day flight (increments). 200 lb: 40 ft speed; 400 lb: 30 ft.
  // Unridden: 40 ft. Independent travel to familiar destinations; returns to
  // owner from up to 900 ft on command. +4 bonus on Fly skill checks.
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-broom-of-flying',
    name: 'Broom of Flying',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 9,
    slot: 'none',

    price: 17000,
    weight: 3,

    description:
      'This enchanted broom grants flight comparable to the overland flight spell and provides a ' +
      '+4 bonus on Fly skill checks. It can operate for up to 9 hours per day (usable in increments). ' +
      'The broom carries up to 200 pounds at a speed of 40 feet, or up to 400 pounds at a speed of ' +
      '30 feet. When unridden, it flies at 40 feet per round. The broom can travel to familiar ' +
      'destinations independently and returns to its owner from up to 900 feet away when commanded.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['overland flight', 'permanency'],
      cost: 8500,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 5,
      breakDC: 15,
    },

    activationCategory: 'command_word',

    effects: [
      {
        type: 'special',
        target: 'special.fly_speed',
        value: 40,
        source: 'Broom of Flying',
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.fly',
        value: 4,
        source: 'Broom of Flying',
      },
    ],
  },
];
