import { BonusType } from '@/types/base';
import type { FeatDefinition } from '@/types/feats';

export const ADVENTURERS_GUIDE_FEATS_3: FeatDefinition[] = [
  // ─── Spirit chain (Occult/Spirit Warden) ──────────────────────────────────
  {
    id: 'spirit_rebuke',
    name: 'Spirit Rebuke',
    types: ['general'],
    source: "Adventurer's Guide",
    description:
      'You can channel your willpower against supernatural entities. Choose one spirit category: fey, outsiders, or undead. Once per day as a standard action, target a single visible spirit (or one possessing a creature within 30 feet) to either attempt a dispel check (using character level as caster level, DC 11 + spell level, +2 bonus when ending possession) or deal 1d6 damage per 2 character levels (Will save DC 10 + half character level + Charisma modifier halves). This feat may be selected up to three times; each selection targets a different spirit category and grants one additional daily use.',
    shortDescription: 'Once per day, dispel magic from or damage a chosen spirit type.',
    prerequisites: [
      { type: 'ability_score', ability: 'WIS', minimum: 17 },
      { type: 'feat', featId: 'iron_will' },
      { type: 'feat', featId: 'spirit_beacon_ag' },
      { type: 'special', description: 'Diplomacy 5 ranks or Intimidate 5 ranks' },
    ],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'special.spirit_rebuke_ability',
        value: 0,
        source: 'Spirit Rebuke',
        condition: {
          type: 'custom',
          params: {},
          description: 'Once per day as a standard action against chosen spirit type',
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['spirit', 'channel', 'dispel'],
  },
  {
    id: 'spirit_sight',
    name: 'Spirit Sight',
    types: ['general'],
    source: "Adventurer's Guide",
    description:
      'Invisible fey, outsiders, and undead are treated as having only concealment rather than total concealment against you. Such creatures cannot gain the normal attack roll bonus granted by invisibility or ignore your Dexterity bonus to AC, though they retain any concealment benefit from physical cover or Stealth.',
    shortDescription:
      'Invisible fey, outsiders, and undead gain only concealment, not total concealment.',
    prerequisites: [
      { type: 'ability_score', ability: 'WIS', minimum: 15 },
      { type: 'feat', featId: 'iron_will' },
      { type: 'feat', featId: 'spirit_beacon_ag' },
    ],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'special.perception_invisible_spirits',
        value: 0,
        source: 'Spirit Sight',
        condition: {
          type: 'custom',
          params: {},
          description: 'Against invisible fey, outsiders, and undead',
        },
      },
    ],
    activationMode: 'passive',
    tags: ['spirit', 'perception', 'invisibility'],
  },

  // ─── Storm-Lashed ──────────────────────────────────────────────────────────
  {
    id: 'storm_lashed',
    name: 'Storm-Lashed',
    types: ['general'],
    source: "Adventurer's Guide",
    description:
      'You have developed resilience through prolonged exposure to severe weather. In rainy conditions, visibility is reduced only by one-quarter (instead of half) and you take only a -2 penalty on Perception checks. You are treated as one size category larger for the purposes of wind effects. Penalties on Perception checks from high winds are halved. You gain a +2 bonus on saving throws against effects with the electricity descriptor or that deal electricity damage.',
    shortDescription: 'Resist weather penalties; +2 saves vs. electricity effects.',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'save.reflex',
        value: 2,
        source: 'Storm-Lashed',
        condition: {
          type: 'custom',
          params: {},
          description:
            'Against effects with the electricity descriptor or that deal electricity damage',
        },
      },
    ],
    activationMode: 'passive',
    tags: ['weather', 'electricity', 'survival'],
  },

  // ─── Tag-Team Interrogation ────────────────────────────────────────────────
  {
    id: 'tag_team_interrogation',
    name: 'Tag-Team Interrogation',
    types: ['teamwork'],
    source: "Adventurer's Guide",
    description:
      "When two characters with this feat work together to influence a creature's attitude, one uses Diplomacy while the other uses Intimidate simultaneously. If both checks succeed, the character using the feat chooses which skill's effect applies, and the unused check grants a +5 circumstance bonus to the chosen effect. If only one check succeeds, that skill's effect applies at half its normal duration. Mutual failure results in both checks' effects applying as normal.",
    shortDescription:
      'Coordinate Diplomacy and Intimidate with an ally for enhanced interrogation.',
    prerequisites: [
      { type: 'special', description: 'Intimidating Prowess or Persuasive' },
      { type: 'skill', skillId: 'diplomacy', ranks: 1 },
      { type: 'skill', skillId: 'intimidate', ranks: 1 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.CIRCUMSTANCE,
        target: 'special.interrogation_teamwork',
        value: 5,
        source: 'Tag-Team Interrogation',
        condition: {
          type: 'custom',
          params: {},
          description:
            'When both allies succeed on Diplomacy and Intimidate checks during coordinated attitude shift',
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['teamwork', 'diplomacy', 'intimidate', 'social'],
  },

  // ─── Tribal feats (Mammoth Lords) ─────────────────────────────────────────
  {
    id: 'tribal_hunter',
    name: 'Tribal Hunter',
    types: ['combat', 'teamwork'],
    source: "Adventurer's Guide",
    description:
      'When either you or an ally with this feat is adjacent to and flanking an opponent that is larger than either of you, you both are considered to be flanking the opponent as long as you remain adjacent to it.',
    shortDescription:
      'Gain flanking benefit against larger foes when adjacent with an ally who has this feat.',
    prerequisites: [{ type: 'feat', featId: 'animal_affinity' }],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'special.flanking_larger_opponents',
        value: 0,
        source: 'Tribal Hunter',
        condition: {
          type: 'custom',
          params: {},
          description:
            'When adjacent to an opponent larger than you while an ally with this feat is also adjacent and flanking',
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['teamwork', 'flanking', 'tribal', 'mammoth-lords'],
  },
  {
    id: 'tribal_scars',
    name: 'Tribal Scars',
    types: ['general'],
    source: "Adventurer's Guide",
    description:
      'You endured the grueling coming-of-age rituals of your tribe or following, and proudly bear the scars that grant you the blessings of your people. Choose one of the following benefits based on your affiliation — Bearpelt: +1 on Fortitude saves, +2 on Intimidate checks; Greattusk: +2 on bull rush and overrun combat maneuver checks, +2 on Ride checks; Ice Chasm: +1 on Reflex saves, +2 on Climb checks; Night Hunt: +2 on Perception and Survival checks; Raptorscale: +5 feet to base land speed, +2 on Acrobatics checks; Slothjaw: +1 on Will saves, +2 on Handle Animal checks.',
    shortDescription: 'Bear tribal scars granting a choice of skill and save bonuses.',
    prerequisites: [],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'special.tribal_scar_benefit',
        value: 0,
        source: 'Tribal Scars',
        condition: {
          type: 'custom',
          params: {},
          description: 'Choose one tribal affiliation benefit at feat selection',
        },
      },
    ],
    activationMode: 'passive',
    tags: ['tribal', 'mammoth-lords', 'choice'],
  },

  // ─── Twilight Tattoo ───────────────────────────────────────────────────────
  {
    id: 'twilight_tattoo',
    name: 'Twilight Tattoo',
    types: ['general'],
    source: "Adventurer's Guide",
    description:
      'You possess a special tattoo that identifies you as a Twilight Talon when you speak a designated command word. The marking remains invisible and magically concealed, showing no magical aura while hidden and cannot be detected through magical observation. Upon speaking the command word, the tattoo becomes visible for 1 round before fading. You gain a +2 bonus on Disguise checks, a +2 bonus on Sleight of Hand checks to conceal small objects on your person, and a +2 bonus on Will saves against scrying attempts and mind-reading effects.',
    shortDescription:
      'Hidden tattoo grants +2 Disguise, Sleight of Hand, and Will saves vs. scrying.',
    prerequisites: [
      { type: 'ability_score', ability: 'WIS', minimum: 13 },
      { type: 'special', description: 'Affiliation with the Twilight Talons organization' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skill.disguise',
        value: 2,
        source: 'Twilight Tattoo',
      },
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'special.sleight_of_hand_conceal',
        value: 2,
        source: 'Twilight Tattoo',
        condition: {
          type: 'custom',
          params: {},
          description: 'When concealing small objects on your person',
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'save.all',
        value: 2,
        source: 'Twilight Tattoo',
        condition: {
          type: 'custom',
          params: {},
          description: 'Against scrying attempts and mind-reading effects',
        },
      },
    ],
    activationMode: 'passive',
    tags: ['twilight-talons', 'social', 'stealth', 'will'],
  },

  // ─── Unblinking Flame Style Chain ─────────────────────────────────────────
  {
    id: 'unblinking_flame_feint',
    name: 'Unblinking Flame Feint',
    types: ['combat', 'style'],
    source: "Adventurer's Guide",
    description:
      'While using Perfect Style, you use your Wisdom modifier instead of your Charisma modifier when making Bluff checks to feint opponents. You can spend 1 ki point as a swift action to gain the benefits of Improved Feint for 1 round.',
    shortDescription: 'Use Wisdom for feinting; spend 1 ki for Improved Feint for 1 round.',
    prerequisites: [
      { type: 'ability_score', ability: 'INT', minimum: 13 },
      { type: 'ability_score', ability: 'WIS', minimum: 13 },
      { type: 'feat', featId: 'combat_expertise' },
      { type: 'feat', featId: 'perfect_style' },
      { type: 'special', description: 'Base attack bonus +9 or monk level 9th' },
    ],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'special.bluff_feint_ability_score',
        value: 0,
        source: 'Unblinking Flame Feint',
        condition: {
          type: 'custom',
          params: {},
          description:
            'While using Perfect Style; use Wisdom instead of Charisma for feint Bluff checks',
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['style', 'unblinking-flame', 'feint', 'ki', 'monk'],
  },
  {
    id: 'unblinking_flame_fist',
    name: 'Unblinking Flame Fist',
    types: ['combat', 'style'],
    source: "Adventurer's Guide",
    description:
      'When using Perfect Style, the save DC for your Stunning Fist attacks increases by 2 against flat-footed opponents. Additionally, when you spend 1 ki point to gain Improved Feint benefits for 1 round (via Unblinking Flame Feint), you can attempt a feint as part of your movement during a charge action.',
    shortDescription:
      'Stunning Fist DC +2 vs. flat-footed; feint as part of a charge when spending ki.',
    prerequisites: [
      { type: 'ability_score', ability: 'INT', minimum: 13 },
      { type: 'ability_score', ability: 'WIS', minimum: 13 },
      { type: 'feat', featId: 'combat_expertise' },
      { type: 'feat', featId: 'perfect_style' },
      { type: 'feat', featId: 'stunning_fist' },
      { type: 'feat', featId: 'unblinking_flame_feint' },
      { type: 'special', description: 'Base attack bonus +13 or monk level 13th' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'special.stunning_fist_dc',
        value: 2,
        source: 'Unblinking Flame Fist',
        condition: {
          type: 'custom',
          params: {},
          description: 'While using Perfect Style against flat-footed opponents',
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['style', 'unblinking-flame', 'stunning-fist', 'ki', 'monk'],
  },

  // ─── Unbreakable ──────────────────────────────────────────────────────────
  {
    id: 'unbreakable',
    name: 'Unbreakable',
    types: ['combat'],
    source: "Adventurer's Guide",
    description:
      "Each time you receive 1 hit point from your fighter's favored class bonus, you gain 1 additional hit point. Your effective Constitution score is treated as 4 higher than normal for the purposes of determining when you die from hit point loss.",
    shortDescription: 'Bonus HP from fighter favored class; effective Con +4 for death threshold.',
    prerequisites: [
      { type: 'ability_score', ability: 'CON', minimum: 13 },
      { type: 'feat', featId: 'endurance' },
      { type: 'feat', featId: 'toughness' },
      { type: 'special', description: 'Fighter level 4th' },
    ],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'special.death_threshold_constitution',
        value: 4,
        source: 'Unbreakable',
        condition: {
          type: 'custom',
          params: {},
          description:
            'Treat Constitution as 4 higher when determining death threshold from hit point loss',
        },
      },
    ],
    activationMode: 'passive',
    tags: ['fighter', 'gray-maiden', 'hit-points', 'endurance'],
  },

  // ─── Unfolding Wind Style Chain ────────────────────────────────────────────
  {
    id: 'unfolding_wind_strike',
    name: 'Unfolding Wind Strike',
    types: ['combat', 'style'],
    source: "Adventurer's Guide",
    description:
      'While using Perfect Style, you double the range increment of thrown weapons. You can spend 1 ki point as a swift action to grant a number of thrown weapons equal to your Wisdom modifier either the returning or seeking weapon special ability for 1 round.',
    shortDescription:
      'Double thrown weapon range; spend 1 ki to grant returning or seeking to thrown weapons.',
    prerequisites: [
      { type: 'ability_score', ability: 'DEX', minimum: 13 },
      { type: 'ability_score', ability: 'WIS', minimum: 13 },
      { type: 'feat', featId: 'perfect_style' },
      { type: 'feat', featId: 'quick_draw' },
      { type: 'special', description: 'Base attack bonus +9 or monk level 9th' },
    ],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'special.thrown_weapon_range_increment',
        value: 2,
        source: 'Unfolding Wind Strike',
        condition: {
          type: 'custom',
          params: {},
          description: 'While using Perfect Style; range increment is doubled',
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['style', 'unfolding-wind', 'thrown-weapons', 'ki', 'monk'],
  },
  {
    id: 'unfolding_wind_rush',
    name: 'Unfolding Wind Rush',
    types: ['combat', 'style'],
    source: "Adventurer's Guide",
    description:
      'When using Perfect Style with thrown weapons, you can combine a full-attack action with a single move action. You forfeit your highest bonus attack but execute remaining attacks normally at any point during your movement. By spending 1 ki point as a swift action, you generate a wind barrier along your movement path functioning as wind wall for 1 round; this does not obstruct your own ranged attacks.',
    shortDescription:
      'Full-attack with move while using Perfect Style; spend 1 ki for wind wall along path.',
    prerequisites: [
      { type: 'ability_score', ability: 'DEX', minimum: 13 },
      { type: 'ability_score', ability: 'WIS', minimum: 13 },
      { type: 'feat', featId: 'dodge' },
      { type: 'feat', featId: 'mobility' },
      { type: 'feat', featId: 'perfect_style' },
      { type: 'feat', featId: 'quick_draw' },
      { type: 'feat', featId: 'unfolding_wind_strike' },
      { type: 'special', description: 'Base attack bonus +13 or monk level 13th' },
    ],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'special.full_attack_with_move_thrown',
        value: 0,
        source: 'Unfolding Wind Rush',
        condition: {
          type: 'custom',
          params: {},
          description:
            'While using Perfect Style with thrown weapons; forfeit highest bonus attack to combine full-attack with move action',
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['style', 'unfolding-wind', 'thrown-weapons', 'movement', 'ki', 'monk'],
  },

  // ─── Untwisting Iron Style Chain ──────────────────────────────────────────
  {
    id: 'untwisting_iron_strength',
    name: 'Untwisting Iron Strength',
    types: ['combat', 'style'],
    source: "Adventurer's Guide",
    description:
      'When using Perfect Style, your attacks ignore an amount of hardness equal to your character level. You also gain a +4 bonus on Strength checks when breaking objects. By spending 1 ki point as a swift action, you gain the benefits of Improved Sunder for 1 round.',
    shortDescription:
      'Attacks ignore hardness equal to level; +4 to break objects; spend 1 ki for Improved Sunder.',
    prerequisites: [
      { type: 'ability_score', ability: 'STR', minimum: 15 },
      { type: 'ability_score', ability: 'WIS', minimum: 13 },
      { type: 'feat', featId: 'perfect_style' },
      { type: 'special', description: 'Base attack bonus +9 or monk level 9th' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'special.strength_check_break_object',
        value: 4,
        source: 'Untwisting Iron Strength',
        condition: {
          type: 'custom',
          params: {},
          description: 'On Strength checks made to break objects',
        },
      },
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'special.hardness_penetration',
        value: 0,
        source: 'Untwisting Iron Strength',
        condition: {
          type: 'custom',
          params: {},
          description:
            'While using Perfect Style; attacks ignore hardness equal to character level',
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['style', 'untwisting-iron', 'sunder', 'hardness', 'ki', 'monk'],
  },
  {
    id: 'untwisting_iron_skin',
    name: 'Untwisting Iron Skin',
    types: ['combat', 'style'],
    source: "Adventurer's Guide",
    description:
      "Your training has tempered your flesh to resist blows as though it were forged iron. While using Perfect Style, you gain damage reduction equal to one-third your character level (maximum DR 6) vs. adamantine. Breaking items with hardness 10 or higher grants temporary DR 1/\u2014 for a number of rounds equal to half the broken item's hit points (maximum 10 rounds); this DR increases by 1 for every 5 points of hardness above 10. You may spend 1 ki point as a swift action to double either of these DR benefits for 1 round.",
    shortDescription:
      'DR vs. adamantine while in Perfect Style; break hard items for temporary DR; spend ki to double either DR.',
    prerequisites: [
      { type: 'ability_score', ability: 'STR', minimum: 15 },
      { type: 'ability_score', ability: 'WIS', minimum: 13 },
      { type: 'feat', featId: 'perfect_style' },
      { type: 'feat', featId: 'toughness' },
      { type: 'feat', featId: 'untwisting_iron_strength' },
      { type: 'special', description: 'Base attack bonus +13 or monk level 13th' },
    ],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'special.damage_reduction_adamantine',
        value: 0,
        source: 'Untwisting Iron Skin',
        condition: {
          type: 'custom',
          params: {},
          description:
            'While using Perfect Style; DR equal to 1/3 character level (max 6) vs. adamantine',
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['style', 'untwisting-iron', 'damage-reduction', 'ki', 'monk'],
  },
];

// CHECKPOINT: last_written=untwisting_iron_skin, written=14/14, status=complete
