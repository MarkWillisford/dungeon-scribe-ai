import type { FeatDefinition } from '@/types/feats';
import { BonusType } from '@/types/base';

export const MARTIAL_ARTS_FEATS_2: FeatDefinition[] = [
  // 26. One-Inch Punch
  {
    id: 'one_inch_punch',
    name: 'One-Inch Punch',
    description:
      'When making a full attack against a corporeal foe, you can forgo multiple attacks to make one unarmed strike at your highest base attack bonus. For each attack foregone, add half your Strength modifier (minimum +0) to damage. On a successful hit, attempt a bull rush as a free action using your attack roll result instead of rolling separately, adding the same half-Strength bonus per foregone attack to the bull rush check. The bull rush does not provoke attacks of opportunity and does not move you from your position.',
    shortDescription: 'Forgo attacks to make one powerful unarmed strike and free bull rush.',
    source: 'Martial Arts Handbook',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'bab', minimum: 6 },
      {
        type: 'special',
        description: "Brawler's flurry class feature or flurry of blows class feature",
      },
    ],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'damage.melee',
        value: 0,
        source: 'One-Inch Punch',
        condition: {
          type: 'custom',
          description:
            'For each attack foregone in a full attack, add half Strength modifier to damage and bull rush check',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['unarmed', 'bull_rush', 'flurry'],
  },

  // 27. Overhead Flip
  {
    id: 'overhead_flip',
    name: 'Overhead Flip',
    description:
      'When using Savage Slam and successfully executing a grapple maneuver to knock an opponent prone, the target must make a Fortitude save (DC = 10 + your base attack bonus) or be staggered for 1 round. Oozes, incorporeal creatures, and creatures immune to critical hits cannot be affected by this staggering effect.',
    shortDescription: 'Savage Slam prone targets must save or be staggered for 1 round.',
    source: 'Martial Arts Handbook',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'STR', minimum: 13 },
      { type: 'feat', featId: 'improved_grapple' },
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'feat', featId: 'savage_slam' },
      { type: 'special', description: 'Base attack bonus +9 or monk level 6th' },
    ],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'special.condition_staggered',
        value: 1,
        source: 'Overhead Flip',
        condition: {
          type: 'custom',
          description:
            'When Savage Slam knocks opponent prone; target fails Fortitude save (DC 10 + BAB)',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['unarmed', 'grapple', 'stagger', 'savage_slam'],
  },

  // 28. Painful Collision
  {
    id: 'painful_collision',
    name: 'Painful Collision',
    description:
      'When you successfully execute a bull rush that drives an opponent into another creature, both targets take 1d6 points of bludgeoning damage, plus an additional 1d6 points of bludgeoning damage for every 5 feet your original target has moved as a result of your bull rush.',
    shortDescription: 'Bull rushing a foe into another creature deals 1d6 damage per 5 feet moved.',
    source: 'Martial Arts Handbook',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'STR', minimum: 13 },
      { type: 'feat', featId: 'improved_bull_rush' },
      { type: 'feat', featId: 'power_attack' },
    ],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'damage.melee',
        value: 0,
        source: 'Painful Collision',
        condition: {
          type: 'custom',
          description:
            'When bull rushing a foe into another creature; both take 1d6 bludgeoning per 5 feet moved',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['bull_rush', 'bludgeoning', 'collision'],
  },

  // 29. Pinpoint Jab
  {
    id: 'pinpoint_jab',
    name: 'Pinpoint Jab',
    description:
      "As a full-round action, you can expend 1 ki point or one daily martial flexibility use to target specific body areas with a limited version of the targeted strike deed. At BAB +6, target hands or legs; at BAB +11, target head or torso; at BAB +16, target two locations simultaneously. Opponents negate each effect with a Fortitude save (DC = 10 + BAB). Monks may substitute their class level for base attack bonus when determining this feat's effects.",
    shortDescription: 'Spend ki or martial flexibility to target body parts with unarmed strikes.',
    source: 'Martial Arts Handbook',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'bab', minimum: 6 },
      { type: 'special', description: 'Ki pool or martial flexibility class feature' },
    ],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'special.targeted_strike',
        value: 0,
        source: 'Pinpoint Jab',
        condition: {
          type: 'custom',
          description:
            'Full-round action; spend 1 ki or 1 martial flexibility use to target body locations',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['unarmed', 'ki', 'targeted_strike', 'brawler'],
  },

  // 30. Practical Kata
  {
    id: 'practical_kata',
    name: 'Practical Kata',
    description:
      'When you hit an opponent already damaged in the current round with a melee attack, you may forgo dealing damage to instead regain 1 ki point. You can regain at most 1 ki point per minute, and no more than 1 ki point per four class levels per day.',
    shortDescription: 'Forgo damage on a follow-up hit to regain 1 ki point (limit 1/minute).',
    source: 'Martial Arts Handbook',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'special', description: 'Ki pool class feature' },
    ],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'special.ki_pool',
        value: 1,
        source: 'Practical Kata',
        condition: {
          type: 'custom',
          description:
            'Forgo damage on a hit vs. already-damaged foe to regain 1 ki; limit 1/minute, max 1 per 4 levels/day',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['unarmed', 'ki', 'recovery'],
  },

  // 31. Reverse Somersault Throw
  {
    id: 'reverse_somersault_throw',
    name: 'Reverse Somersault Throw',
    description:
      "When a drag combat maneuver succeeds, you may fall prone at the end of your movement to launch the target overhead. The opponent lands in an adjacent square opposite to where they ended the drag and falls prone there. The ability fails if no valid space exists or if obstacles block the target's path.",
    shortDescription:
      'After a successful drag, fall prone to fling the target prone in an opposite square.',
    source: 'Martial Arts Handbook',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'STR', minimum: 13 },
      { type: 'feat', featId: 'improved_drag' },
      { type: 'feat', featId: 'power_attack' },
      { type: 'special', description: 'Base attack bonus +6 or monk level 3rd' },
    ],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'cmb.drag',
        value: 0,
        source: 'Reverse Somersault Throw',
        condition: {
          type: 'custom',
          description:
            'After successful drag; you fall prone, target flung to opposite adjacent square and falls prone',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['drag', 'prone', 'combat_maneuver'],
  },

  // 32. Savage Leap
  {
    id: 'savage_leap',
    name: 'Savage Leap',
    description:
      'When using Savage Slam, you may move yourself and your opponent up to half your speed before releasing the grapple. You provoke attacks of opportunity from this movement, though your target does not. If your opponent takes damage from Savage Slam, they become shaken for 1 round. You become flat-footed until the start of your next turn if you move before using Savage Slam.',
    shortDescription:
      'Move up to half speed during Savage Slam; slam damage also shakes the target.',
    source: 'Martial Arts Handbook',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'improved_grapple' },
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'feat', featId: 'savage_slam' },
      { type: 'special', description: 'Base attack bonus +12 or monk level 10th' },
    ],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'special.condition_shaken',
        value: 1,
        source: 'Savage Leap',
        condition: {
          type: 'custom',
          description:
            'When Savage Slam deals damage; target shaken 1 round. Move up to half speed during slam but become flat-footed.',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['grapple', 'savage_slam', 'shaken', 'unarmed'],
  },

  // 33. Savage Slam
  {
    id: 'savage_slam',
    name: 'Savage Slam',
    description:
      'When you begin your turn grappling an opponent, instead of attempting a combat maneuver check to maintain the grapple, you can try to viciously slam your opponent down. As a standard action, make a grapple combat maneuver check. On success, you release the grapple and force the target prone in an adjacent unoccupied square; the opponent takes unarmed strike damage if landing on solid ground or objects. If attempting to throw the foe into hazardous terrain, the target gains a +4 bonus to its CMD against the maneuver.',
    shortDescription: 'From a grapple, slam target prone in adjacent square for unarmed damage.',
    source: 'Martial Arts Handbook',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'improved_grapple' },
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'special', description: 'Base attack bonus +3 or monk level 1st' },
    ],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'cmb.grapple',
        value: 0,
        source: 'Savage Slam',
        condition: {
          type: 'custom',
          description:
            'Begin turn grappling; standard action CMB check to slam target prone in adjacent square for unarmed damage',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['grapple', 'prone', 'unarmed', 'slam'],
  },

  // 34. Sculpting the River
  {
    id: 'sculpting_the_river',
    name: 'Sculpting the River',
    description:
      "When you deal damage with an unarmed attack to an opponent you have already damaged this round, you can impose a -1 penalty on that target's attacks against creatures other than you. Penalties from multiple applications stack. Effects persist until the target misses an attack or your next turn begins, whichever occurs first.",
    shortDescription:
      'Repeated unarmed hits impose stacking -1 attack penalties on target vs. other creatures.',
    source: 'Martial Arts Handbook',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'dodge' },
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'special', description: 'Base attack bonus +6 or monk level 6th' },
    ],
    effects: [
      {
        type: 'penalty',
        bonusType: BonusType.UNTYPED,
        target: 'attack.melee',
        value: -1,
        source: 'Sculpting the River',
        condition: {
          type: 'custom',
          description:
            'Applied to target attacks vs. other creatures after dealing unarmed damage to already-damaged foe; stacks; expires on miss or your next turn',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['unarmed', 'debuff', 'attack_penalty', 'defender'],
  },

  // 35. Shapeshifter Savage
  {
    id: 'shapeshifter_savage',
    name: 'Shapeshifter Savage',
    description:
      'When using Shapeshifter Style, you can combine your change shape or wild shape standard action with a single melee attack with one of your natural weapons at your highest base attack bonus against one foe within your reach. Characters with the wild shape class feature are treated as having both the change shape ability and shapechanger subtype for prerequisite purposes.',
    shortDescription:
      'Combine change shape with a natural weapon attack when using Shapeshifter Style.',
    source: 'Martial Arts Handbook',
    verificationStatus: 'needs_review' as const,
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'shapeshifter_style' },
      { type: 'feat', featId: 'shapeshifter_twist' },
      { type: 'bab', minimum: 8 },
      {
        type: 'special',
        description: 'Change shape ability, shapechanger subtype (or wild shape class feature)',
      },
    ],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'attack.melee',
        value: 0,
        source: 'Shapeshifter Savage',
        condition: {
          type: 'custom',
          description:
            'While using Shapeshifter Style; combine change shape/wild shape with one natural weapon attack at highest BAB',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['style', 'shapeshifter', 'natural_attack', 'wild_shape'],
  },

  // 36. Shapeshifter Style
  {
    id: 'shapeshifter_style',
    name: 'Shapeshifter Style',
    description:
      'While using this style, you can reshape your body as a swift action to gain one of the following benefits: Brutal Attack (+1 damage on one natural attack, +1 more per additional Shapeshifter feat, max +3), Steady Grip (climb speed 10 ft.), Tensed Sinews (+1 bonus on Reflex saves and +5 enhancement bonus to base speed), or Toughened Hide (+1 enhancement bonus to existing natural armor bonus). Characters with the wild shape class feature are treated as having both the change shape ability and shapechanger subtype for prerequisite purposes.',
    shortDescription:
      'Swift action to gain shapeshifting combat benefits: damage, climb, speed, or natural armor.',
    source: 'Martial Arts Handbook',
    verificationStatus: 'needs_review' as const,
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'bab', minimum: 3 },
      {
        type: 'special',
        description: 'Change shape ability, shapechanger subtype (or wild shape class feature)',
      },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.ENHANCEMENT,
        target: 'ac.natural',
        value: 1,
        source: 'Shapeshifter Style',
        condition: {
          type: 'custom',
          description: 'While using Shapeshifter Style with Toughened Hide option selected',
          params: {},
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.ENHANCEMENT,
        target: 'speed.base',
        value: 5,
        source: 'Shapeshifter Style',
        condition: {
          type: 'custom',
          description: 'While using Shapeshifter Style with Tensed Sinews option selected',
          params: {},
        },
      },
    ],
    activationMode: 'toggle',
    tags: ['style', 'shapeshifter', 'natural_attack', 'wild_shape'],
  },

  // 37. Shapeshifter Twist
  {
    id: 'shapeshifter_twist',
    name: 'Shapeshifter Twist',
    description:
      'When using Shapeshifter Style, you gain a +2 bonus to your CMD versus bull rush, drag, grapple, overrun, reposition, and trip combat maneuvers. Additionally, if you start your turn grappled, you may use a move action to attempt a combat maneuver check or Escape Artist check to break free. Characters with the wild shape class feature satisfy the change shape ability and shapechanger subtype requirements.',
    shortDescription:
      '+2 CMD vs. multiple maneuvers while in Shapeshifter Style; move action to escape grapple.',
    source: 'Martial Arts Handbook',
    verificationStatus: 'needs_review' as const,
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'shapeshifter_style' },
      { type: 'bab', minimum: 5 },
      {
        type: 'special',
        description: 'Change shape ability, shapechanger subtype (or wild shape class feature)',
      },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'cmd',
        value: 2,
        source: 'Shapeshifter Twist',
        condition: {
          type: 'custom',
          description:
            'While using Shapeshifter Style; applies vs. bull rush, drag, grapple, overrun, reposition, and trip',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['style', 'shapeshifter', 'cmd', 'grapple', 'wild_shape'],
  },

  // 38. Shielded Staff Ambush
  {
    id: 'shielded_staff_ambush',
    name: 'Shielded Staff Ambush',
    description:
      'When using Shielded Staff Style and striking an opponent with your shielded staff, you may attempt a bull rush, disarm, sunder, or trip combat maneuver check as an immediate action. You lose your shield bonus until the start of your next turn if you attempt this combat maneuver.',
    shortDescription:
      'After hitting with a shielded staff, perform a free combat maneuver as an immediate action.',
    source: 'Martial Arts Handbook',
    verificationStatus: 'needs_review' as const,
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'ability_score', ability: 'DEX', minimum: 15 },
      { type: 'feat', featId: 'shielded_staff_style' },
      { type: 'feat', featId: 'two_weapon_fighting' },
      { type: 'bab', minimum: 4 },
    ],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'cmb',
        value: 0,
        source: 'Shielded Staff Ambush',
        condition: {
          type: 'custom',
          description:
            'After hitting with shielded staff; immediate action combat maneuver (bull rush, disarm, sunder, or trip); lose shield bonus until next turn',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['style', 'shielded_staff', 'combat_maneuver', 'two_weapon_fighting'],
  },

  // 39. Shielded Staff Master
  {
    id: 'shielded_staff_master',
    name: 'Shielded Staff Master',
    description:
      "When using Shielded Staff Style, add the attached buckler's or shield's enhancement bonus (if any) to the shield bonus you gain from this style. The -1 attack penalty for shielded staff attacks is removed. If both your shield and weapon have an enhancement bonus, use the higher of the two bonuses to determine your shielded staff's enhancement bonus to attack and damage rolls.",
    shortDescription:
      'Remove shielded staff attack penalty; add shield enhancement bonus to AC bonus.',
    source: 'Martial Arts Handbook',
    verificationStatus: 'needs_review' as const,
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'ability_score', ability: 'DEX', minimum: 17 },
      { type: 'feat', featId: 'improved_two_weapon_fighting' },
      { type: 'feat', featId: 'shielded_staff_style' },
      { type: 'feat', featId: 'two_weapon_fighting' },
      { type: 'bab', minimum: 8 },
    ],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'special.attack_penalty',
        value: 0,
        source: 'Shielded Staff Master',
        condition: {
          type: 'custom',
          description:
            'While using Shielded Staff Style; removes -1 attack penalty; adds shield enhancement to style shield bonus; uses higher enhancement bonus',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['style', 'shielded_staff', 'two_weapon_fighting', 'enhancement'],
  },

  // 40. Shielded Staff Style
  {
    id: 'shielded_staff_style',
    name: 'Shielded Staff Style',
    description:
      "You can attach your buckler or light shield to your quarterstaff, polearm, or spear, combining them into a weapon known as a shielded staff. Attacks with the shielded staff incur a -1 penalty. While wielded two-handed, it provides a +2 shield bonus to AC (independent of the shield's enhancement bonus). Shield bash attacks are prohibited with the attached shield or buckler. Detaching the shield requires a move action and provokes attacks of opportunity. Non-practitioners treat a shielded staff as an improvised bludgeoning weapon.",
    shortDescription:
      'Attach buckler or shield to staff/polearm/spear for +2 AC shield bonus while fighting two-handed.',
    source: 'Martial Arts Handbook',
    verificationStatus: 'needs_review' as const,
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'ability_score', ability: 'DEX', minimum: 15 },
      { type: 'feat', featId: 'two_weapon_fighting' },
      {
        type: 'special',
        description:
          'Weapon Focus (quarterstaff, polearms group, or spears group), proficiency with bucklers and light shields',
      },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.SHIELD,
        target: 'ac',
        value: 2,
        source: 'Shielded Staff Style',
        condition: {
          type: 'custom',
          description: 'While using Shielded Staff Style and wielding shielded staff two-handed',
          params: {},
        },
      },
    ],
    activationMode: 'toggle',
    tags: ['style', 'shielded_staff', 'two_weapon_fighting', 'shield_bonus'],
  },

  // 41. Shikigami Manipulation
  {
    id: 'shikigami_manipulation',
    name: 'Shikigami Manipulation',
    description:
      "While using Shikigami Style, you may apply an enhancement bonus to magical items used as improvised weapons equal to the item's caster level divided by 4 (minimum +1, maximum +5) to attack and damage rolls. Characters with Equipment Trick can add this same bonus (item caster level / 4, minimum +1) to skill checks or combat maneuver checks made as part of a trick when using magical equipment.",
    shortDescription:
      "Apply magical item's caster level / 4 as enhancement bonus when used as improvised weapon.",
    source: 'Martial Arts Handbook',
    verificationStatus: 'needs_review' as const,
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'special', description: 'Catch Off-Guard or Throw Anything' },
      { type: 'feat', featId: 'shikigami_mimicry' },
      { type: 'feat', featId: 'shikigami_style' },
      { type: 'skill', skillId: 'use_magic_device', ranks: 5 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.ENHANCEMENT,
        target: 'special.attack_and_damage',
        value: 0,
        source: 'Shikigami Manipulation',
        condition: {
          type: 'custom',
          description:
            'While using Shikigami Style with magical improvised weapon; bonus = caster level / 4 (min +1, max +5)',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['style', 'shikigami', 'improvised_weapon', 'magical', 'use_magic_device'],
  },

  // 42. Shikigami Mimicry
  {
    id: 'shikigami_mimicry',
    name: 'Shikigami Mimicry',
    description:
      'While using Shikigami Style, you can accept a -2 penalty on attack rolls to grant an improvised weapon one of the following special qualities until the start of your next turn: blocking, brace, disarm, distracting, nonlethal, performance, or trip. When an improvised weapon already has the fragile quality or is broken, you may treat it as having the jagged quality instead.',
    shortDescription: 'Take -2 attack to grant improvised weapon a special quality for 1 round.',
    source: 'Martial Arts Handbook',
    verificationStatus: 'needs_review' as const,
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'special', description: 'Catch Off-Guard or Throw Anything' },
      { type: 'feat', featId: 'shikigami_style' },
    ],
    effects: [
      {
        type: 'penalty',
        bonusType: BonusType.UNTYPED,
        target: 'attack.melee',
        value: -2,
        source: 'Shikigami Mimicry',
        condition: {
          type: 'custom',
          description:
            'While using Shikigami Style; accept -2 attack to grant improvised weapon a special quality (blocking, brace, disarm, distracting, nonlethal, performance, or trip)',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['style', 'shikigami', 'improvised_weapon', 'special_quality'],
  },

  // 43. Shikigami Style
  {
    id: 'shikigami_style',
    name: 'Shikigami Style',
    description:
      'While using this style, improvised weapons deal damage as if they were one size category larger. For each additional Shikigami Style feat you possess that lists Shikigami Style as a prerequisite, improvised weapons are treated as one additional size category larger, to a maximum of three size categories larger than actual size.',
    shortDescription:
      'Improvised weapons deal damage as one size larger; +1 size per additional Shikigami feat.',
    source: 'Martial Arts Handbook',
    verificationStatus: 'needs_review' as const,
    types: ['combat', 'style'],
    prerequisites: [{ type: 'special', description: 'Catch Off-Guard or Throw Anything' }],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'special.improvised_weapon_damage',
        value: 1,
        source: 'Shikigami Style',
        condition: {
          type: 'custom',
          description:
            'While using Shikigami Style; improvised weapons treated as one size category larger (max +3 with chain feats)',
          params: {},
        },
      },
    ],
    activationMode: 'toggle',
    tags: ['style', 'shikigami', 'improvised_weapon', 'size_damage'],
  },

  // 44. Smashing Impact
  {
    id: 'smashing_impact',
    name: 'Smashing Impact',
    description:
      'When you bull rush an opponent into a solid object or barrier, you deal unarmed strike damage to both the opponent and the object or barrier. If you performed your bull rush as part of a charge, you gain a +2 bonus on your damage roll. Should the damage suffice to destroy the barrier, you may continue pushing your target the remaining distance allowed by the maneuver.',
    shortDescription:
      'Bull rushing into barriers deals unarmed damage to both target and barrier; +2 damage on a charge.',
    source: 'Martial Arts Handbook',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'STR', minimum: 15 },
      { type: 'feat', featId: 'crushing_impact' },
      { type: 'feat', featId: 'improved_bull_rush' },
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'feat', featId: 'power_attack' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'damage.melee',
        value: 2,
        source: 'Smashing Impact',
        condition: {
          type: 'custom',
          description: 'When bull rushing into a barrier as part of a charge',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['bull_rush', 'unarmed', 'charge', 'sunder'],
  },

  // 45. Stick-Fighting Counter
  {
    id: 'stick_fighting_counter',
    name: 'Stick-Fighting Counter',
    description:
      'While using Stick-Fighting Style and fighting defensively, you can designate one opponent you have attacked that turn as a counter target. Once per round, when that opponent attempts a melee attack against you and misses, the attacker provokes an attack of opportunity from you, provided that it is within your threatened area. The counterattack must use a club, quarterstaff, dan bong, sap, or tonfa.',
    shortDescription:
      'Missed melee attacks from your designated target provoke an attack of opportunity.',
    source: 'Martial Arts Handbook',
    verificationStatus: 'needs_review' as const,
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'stick_fighting_style' },
      { type: 'bab', minimum: 4 },
    ],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'attack_of_opportunity',
        value: 0,
        source: 'Stick-Fighting Counter',
        condition: {
          type: 'custom',
          description:
            "While using Stick-Fighting Style and fighting defensively; designated target's missed melee attacks provoke AoO; weapon must be club, quarterstaff, dan bong, sap, or tonfa",
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['style', 'stick_fighting', 'counter', 'attack_of_opportunity', 'defensive'],
  },

  // 46. Stick-Fighting Maneuver
  {
    id: 'stick_fighting_maneuver',
    name: 'Stick-Fighting Maneuver',
    description:
      'When making a full attack exclusively with clubs, quarterstaffs, dan bongs, saps, or tonfas, you can perform a combat maneuver as an extra attack using your full base attack bonus.',
    shortDescription: 'During a full attack with stick weapons, add a combat maneuver at full BAB.',
    source: 'Martial Arts Handbook',
    verificationStatus: 'needs_review' as const,
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'stick_fighting_counter' },
      { type: 'feat', featId: 'stick_fighting_style' },
      { type: 'bab', minimum: 6 },
    ],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'cmb',
        value: 0,
        source: 'Stick-Fighting Maneuver',
        condition: {
          type: 'custom',
          description:
            'During full attack with club, quarterstaff, dan bong, sap, or tonfa; add one combat maneuver at full BAB',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['style', 'stick_fighting', 'combat_maneuver', 'full_attack'],
  },

  // 47. Stick-Fighting Style
  {
    id: 'stick_fighting_style',
    name: 'Stick-Fighting Style',
    description:
      'When using a proficient club, quarterstaff, dan bong, sap, or tonfa, you gain a +1 enhancement bonus on attack rolls as though it were a masterwork weapon. If the weapon is already masterwork, it gains the blocking, disarm, distracting, performance, and trip special weapon qualities, even if the weapon normally lacks them.',
    shortDescription:
      '+1 attack bonus with stick weapons; masterwork sticks gain blocking, disarm, distracting, performance, and trip.',
    source: 'Martial Arts Handbook',
    verificationStatus: 'needs_review' as const,
    types: ['combat', 'style'],
    prerequisites: [{ type: 'bab', minimum: 1 }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.ENHANCEMENT,
        target: 'attack.melee',
        value: 1,
        source: 'Stick-Fighting Style',
        condition: {
          type: 'custom',
          description:
            'While using Stick-Fighting Style with a proficient club, quarterstaff, dan bong, sap, or tonfa',
          params: {},
        },
      },
    ],
    activationMode: 'toggle',
    tags: ['style', 'stick_fighting', 'club', 'quarterstaff', 'enhancement'],
  },

  // 48. Storm of Blades
  {
    id: 'storm_of_blades',
    name: 'Storm of Blades',
    description:
      "As a standard action, you create a cutting vortex with your chosen slashing weapon that persists until your next turn begins. Any creature that starts its turn within your weapon's threatened range takes damage equal to your higher of Strength or Dexterity modifier. At BAB +11, add your base weapon damage to the vortex damage. At BAB +16, creatures damaged by the vortex must save against the distraction universal monster rule or become sickened. This feat can only be used once per minute.",
    shortDescription:
      'Standard action creates a slashing vortex dealing STR/DEX mod damage to adjacent foes each round.',
    source: 'Martial Arts Handbook',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'special', description: 'Weapon Focus with a slashing weapon' },
      { type: 'bab', minimum: 6 },
    ],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'special.threatened_area_damage',
        value: 0,
        source: 'Storm of Blades',
        condition: {
          type: 'custom',
          description:
            'Standard action; slashing vortex lasts until next turn; creatures starting turn in threatened range take STR or DEX mod damage; once per minute',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['slashing', 'weapon_focus', 'area_control', 'vortex'],
  },

  // 49. Stupefying Strike
  {
    id: 'stupefying_strike',
    name: 'Stupefying Strike',
    description:
      'Declare before making the attack roll. When using this feat, in addition to dealing damage normally, you force a foe damaged by your unarmed attack to attempt a Fortitude save (DC = 10 + 1/2 character level + Wisdom modifier). On a failed save, the target loses its skill ranks and activated feats (such as Power Attack or Stunning Fist) for 1d4 rounds. Usable once per day per 4 character levels (maximum once per round). Constructs, incorporeal creatures, mindless creatures, plants, undead, and creatures immune to critical hits cannot be affected.',
    shortDescription:
      'Unarmed strike forces Fort save or target loses skill ranks and activated feats for 1d4 rounds.',
    source: 'Martial Arts Handbook',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'DEX', minimum: 13 },
      { type: 'ability_score', ability: 'WIS', minimum: 13 },
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'bab', minimum: 8 },
    ],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'special.condition_stupefied',
        value: 0,
        source: 'Stupefying Strike',
        condition: {
          type: 'custom',
          description:
            'Declare before attack; unarmed hit forces Fort save (DC 10 + 1/2 level + WIS); failure: lose skill ranks and activated feats 1d4 rounds; 1/day per 4 levels',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['unarmed', 'debuff', 'wisdom', 'fortitude_save'],
  },

  // 50. Sweeping Disarm
  {
    id: 'sweeping_disarm',
    name: 'Sweeping Disarm',
    description:
      'When you succeed at a disarm combat maneuver check, you can attempt a second disarm at a -5 penalty against an opponent adjacent to the original target. You do not need to be threatening the secondary target. This additional disarm attempt is limited to once per round.',
    shortDescription:
      'After a successful disarm, attempt a second disarm vs. an adjacent foe at -5.',
    source: 'Martial Arts Handbook',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'INT', minimum: 13 },
      { type: 'feat', featId: 'combat_expertise' },
      { type: 'feat', featId: 'improved_disarm' },
      { type: 'bab', minimum: 1 },
    ],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'cmb.disarm',
        value: 0,
        source: 'Sweeping Disarm',
        condition: {
          type: 'custom',
          description:
            'After successful disarm; attempt second disarm vs. adjacent foe at -5 penalty; once per round',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['disarm', 'combat_maneuver', 'combat_expertise'],
  },
];

// CHECKPOINT: last_written=sweeping_disarm, written=25/25, status=complete
