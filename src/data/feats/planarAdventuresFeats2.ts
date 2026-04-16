import type { FeatDefinition } from '@/types/feats';
import { BonusType } from '@/types/base';

export const PLANAR_ADVENTURES_FEATS_2: FeatDefinition[] = [
  {
    id: 'improved_planar_infusion',
    name: 'Improved Planar Infusion',
    types: ['conduit'],
    source: 'Planar Adventures',
    verificationStatus: 'needs_review' as const,
    description:
      "Choose a plane you have gained an infusion from via Planar Infusion. You now gain that plane's improved infusion as well.",
    shortDescription: 'Gain the improved infusion of a plane you already have an infusion from.',
    prerequisites: [
      { type: 'feat', featId: 'planar_infusion' },
      { type: 'level', minimum: 7 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'special.planar_infusion',
        value: 0,
        condition: {
          type: 'custom',
          params: {},
          description:
            'Grants improved infusion for one chosen plane when Planar Infusion is active',
        },
        source: 'Improved Planar Infusion',
      },
    ],
    activationMode: 'passive',
    tags: ['planar', 'conduit', 'infusion'],
  },
  {
    id: 'improved_plane_shift',
    name: 'Improved Plane Shift',
    types: ['general'],
    source: 'Planar Adventures',
    verificationStatus: 'needs_review' as const,
    description:
      'Add plane shift to your spell list and to your spellbook as a 5th-level wizard spell. The identification time for portal destinations drops to 1 round, and you automatically recognize any plane upon arrival.',
    shortDescription: 'Add plane shift as a 5th-level wizard spell and improve planar recognition.',
    prerequisites: [{ type: 'level', minimum: 9, class: 'wizard' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'special.spell_list',
        value: 0,
        condition: {
          type: 'custom',
          params: {},
          description: 'Adds plane shift as a 5th-level wizard spell',
        },
        source: 'Improved Plane Shift',
      },
    ],
    activationMode: 'passive',
    tags: ['planar', 'spellcasting', 'wizard'],
  },
  {
    id: 'lashing_tail',
    name: 'Lashing Tail',
    types: ['combat'],
    source: 'Planar Adventures',
    verificationStatus: 'needs_review' as const,
    description:
      'Your tail becomes a weapon through its physical strength or natural adornments. You gain a tail slap natural attack dealing 1d6 damage (Medium) or 1d4 damage (Small). Upon taking this feat, select one damage type: bludgeoning, piercing, or slashing. The tail attack cannot be used simultaneously with other natural weapons during a full attack and is treated as a secondary attack when combined with manufactured weapon attacks.',
    shortDescription: 'Gain a tail slap natural attack (1d6 Medium, choose B/P/S damage type).',
    prerequisites: [
      { type: 'feat', featId: 'grasping_tail' },
      { type: 'special', description: 'Must have a tail' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'special.natural_attacks',
        value: 0,
        condition: {
          type: 'custom',
          params: {},
          description:
            'Grants tail slap natural attack (1d6 Medium/1d4 Small); secondary when combined with manufactured weapons',
        },
        source: 'Lashing Tail',
      },
    ],
    activationMode: 'passive',
    tags: ['combat', 'natural-attack', 'tail'],
  },
  {
    id: 'last_rites',
    name: 'Last Rites',
    types: ['conduit'],
    source: 'Planar Adventures',
    verificationStatus: 'needs_review' as const,
    description:
      'As a standard action, you make a melee touch attack against a haunt or an undead creature with resurrection vulnerability. The attack deals 3d6 positive energy damage (bypassing damage reduction and hardness), and the target is staggered for 1 round. You must first detect the haunt via skill check or identify the undead with a successful Knowledge (religion) check. Damage increases by 1d6 for every 5 ranks in Knowledge (planes). Uses per day: 1, plus 1 additional use for every 5 ranks in Knowledge (planes).',
    shortDescription:
      'Touch attack deals 3d6+ positive energy damage to undead and haunts, staggering them.',
    prerequisites: [
      { type: 'skill', skillId: 'knowledge_planes', ranks: 3 },
      { type: 'skill', skillId: 'knowledge_religion', ranks: 3 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'damage.melee',
        value: 0,
        condition: {
          type: 'custom',
          params: {},
          description:
            'Melee touch attack vs haunts or undead with resurrection vulnerability; deals 3d6 positive energy damage (+1d6 per 5 Knowledge (planes) ranks) and staggers for 1 round',
        },
        source: 'Last Rites',
      },
    ],
    activationMode: 'conditional',
    tags: ['conduit', 'planar', 'positive-energy', 'undead', 'haunt'],
  },
  {
    id: 'light_gravity_acclimation',
    name: 'Light Gravity Acclimation',
    types: ['general'],
    source: 'Planar Adventures',
    verificationStatus: 'needs_review' as const,
    description:
      "On planes with light gravity, your land speed increases by 10 feet and you negate the circumstance penalty to attack rolls from light gravity. You also gain a +2 bonus to Acrobatics checks (+4 if you have 10 or more ranks in Acrobatics). This does not stack with the Acrobatic feat's bonus.",
    shortDescription:
      'Gain +10 ft speed and negate attack penalties in light gravity environments.',
    prerequisites: [
      { type: 'ability_score', ability: 'DEX', minimum: 13 },
      { type: 'skill', skillId: 'acrobatics', ranks: 3 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.CIRCUMSTANCE,
        target: 'skill.acrobatics',
        value: 2,
        condition: {
          type: 'custom',
          params: {},
          description: 'On planes with light gravity; +4 instead if 10+ ranks in Acrobatics',
        },
        source: 'Light Gravity Acclimation',
      },
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'speed.base',
        value: 10,
        condition: {
          type: 'custom',
          params: {},
          description: 'On planes with light gravity',
        },
        source: 'Light Gravity Acclimation',
      },
    ],
    activationMode: 'passive',
    tags: ['planar', 'light-gravity', 'movement', 'acrobatics'],
  },
  {
    id: 'malleable_form',
    name: 'Malleable Form',
    types: ['conduit'],
    source: 'Planar Adventures',
    verificationStatus: 'needs_review' as const,
    description:
      'As a full-round action, you infuse yourself with protoplasm, converting your body and equipment to a semi-gelatinous state. While in this form, you gain the compression ability, allowing movement through tight spaces without penalty. You receive a bonus to CMD against grapple and trip maneuvers equal to half your Knowledge (planes) ranks. However, your attacks with manufactured weapons, natural weapons, and unarmed strikes deal half damage. You can maintain this form for a number of minutes per day equal to your Knowledge (planes) ranks, usable in 1-minute increments.',
    shortDescription:
      'Become semi-gelatinous to gain compression; CMD bonus but deal half weapon damage.',
    prerequisites: [{ type: 'skill', skillId: 'knowledge_planes', ranks: 7 }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'cmd',
        value: 0,
        condition: {
          type: 'custom',
          params: {},
          description:
            'While malleable form is active; CMD bonus vs grapple and trip equals half Knowledge (planes) ranks; all weapon damage halved',
        },
        source: 'Malleable Form',
      },
    ],
    activationMode: 'toggle',
    tags: ['conduit', 'planar', 'transformation', 'protoplasm'],
  },
  {
    id: 'mischievous_tail',
    name: 'Mischievous Tail',
    types: ['combat'],
    source: 'Planar Adventures',
    verificationStatus: 'needs_review' as const,
    description:
      'Your tail functions as an additional free hand for non-weapon purposes. You gain a +2 bonus on disarm and steal combat maneuvers and Sleight of Hand checks performed using only your tail. Combat maneuvers executed with your tail do not provoke attacks of opportunity. You cannot effectively wield weapons or shields with your tail, though you may carry such items.',
    shortDescription:
      'Tail grants +2 to disarm/steal/Sleight of Hand and those tail maneuvers avoid AoOs.',
    prerequisites: [
      { type: 'ability_score', ability: 'DEX', minimum: 15 },
      { type: 'feat', featId: 'grasping_tail' },
      { type: 'special', description: 'Must have a tail' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'cmb.disarm',
        value: 2,
        condition: {
          type: 'custom',
          params: {},
          description: 'When performing disarm or steal maneuvers using only the tail',
        },
        source: 'Mischievous Tail',
      },
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skill.sleight_of_hand',
        value: 2,
        condition: {
          type: 'custom',
          params: {},
          description: 'When performing Sleight of Hand checks using only the tail',
        },
        source: 'Mischievous Tail',
      },
    ],
    activationMode: 'passive',
    tags: ['combat', 'tail', 'maneuver', 'sleight-of-hand'],
  },
  {
    id: 'open_conduit',
    name: 'Open Conduit',
    types: ['conduit'],
    source: 'Planar Adventures',
    verificationStatus: 'needs_review' as const,
    description:
      'Select a conduit feat you have. When determining the uses per day or the amount of time per day you can use this conduit feat, you are treated as though you had an additional 5 ranks in Knowledge (planes). This bonus does not apply to other Knowledge (planes) checks or benefits. You may take this feat multiple times; each selection applies to a different conduit feat you possess.',
    shortDescription:
      "Treat Knowledge (planes) as 5 ranks higher for one conduit feat's uses per day.",
    prerequisites: [
      {
        type: 'special',
        description: 'Knowledge (planes) 5 ranks or outsider with the native subtype',
      },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'special.conduit_feat_uses',
        value: 5,
        condition: {
          type: 'custom',
          params: {},
          description:
            "Treated as 5 additional Knowledge (planes) ranks for one chosen conduit feat's uses per day",
        },
        source: 'Open Conduit',
      },
    ],
    activationMode: 'passive',
    tags: ['conduit', 'planar', 'knowledge-planes'],
  },
  {
    id: 'peace_of_mind',
    name: 'Peace of Mind',
    types: ['conduit'],
    source: 'Planar Adventures',
    verificationStatus: 'needs_review' as const,
    description:
      'As an immediate action when you fail a saving throw against an emotion, fear, or pain effect, you can ignore the effect and instead become dazed for an amount of time equal to twice the duration of the original effect. Nonlethal damage from the original effect is reduced to the minimum value. This ability cannot be used if you are already dazed. Usable once per day, plus one additional use per 5 ranks in Knowledge (planes).',
    shortDescription:
      'On failed emotion/fear/pain save, ignore the effect but become dazed for double duration.',
    prerequisites: [{ type: 'skill', skillId: 'knowledge_planes', ranks: 3 }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'save.all',
        value: 0,
        condition: {
          type: 'custom',
          params: {},
          description:
            'Immediate action on failed save vs emotion, fear, or pain effect; negate effect, become dazed for 2x original duration instead',
        },
        source: 'Peace of Mind',
      },
    ],
    activationMode: 'conditional',
    tags: ['conduit', 'planar', 'mind-affecting', 'fear', 'nirvana'],
  },
  {
    id: 'phase_strike',
    name: 'Phase Strike',
    types: ['combat', 'conduit'],
    source: 'Planar Adventures',
    verificationStatus: 'needs_review' as const,
    description:
      'As a move action, you phase a manufactured weapon or piece of ammunition through the Ethereal Plane. The next melee attack or thrown ranged attack you make with that weapon before the end of your turn is resolved as a touch attack and ignores cover, but does not ignore armor bonuses from force effects. Usable once per day, plus one additional time per day for every 10 ranks in Knowledge (planes). Functions only on planes coterminous with the Ethereal Plane.',
    shortDescription:
      'Phase a weapon through the Ethereal Plane; next attack is a touch attack ignoring cover.',
    prerequisites: [{ type: 'skill', skillId: 'knowledge_planes', ranks: 10 }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'attack.melee',
        value: 0,
        condition: {
          type: 'custom',
          params: {},
          description:
            'Move action; next melee or thrown ranged attack with phased weapon resolves as touch attack ignoring cover; not vs force armor bonuses; planes coterminous with Ethereal only',
        },
        source: 'Phase Strike',
      },
    ],
    activationMode: 'conditional',
    tags: ['combat', 'conduit', 'planar', 'ethereal', 'touch-attack'],
  },
  {
    id: 'planewalkers_insight',
    name: "Planewalker's Insight",
    types: ['general'],
    source: 'Planar Adventures',
    verificationStatus: 'needs_review' as const,
    description:
      'You gain a +2 bonus on Knowledge (planes) checks and a +2 bonus on Sense Motive checks against outsiders. Knowledge (planes) becomes a class skill for you. These bonuses increase to +4 if you have 10 or more ranks in the relevant skill. These bonuses do not stack with the Alertness or Scholar feats.',
    shortDescription:
      '+2 (or +4) to Knowledge (planes) and Sense Motive vs outsiders; Knowledge (planes) is a class skill.',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skill.knowledge_planes',
        value: 2,
        condition: {
          type: 'custom',
          params: {},
          description: '+2 bonus; increases to +4 at 10+ ranks in Knowledge (planes)',
        },
        source: "Planewalker's Insight",
      },
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skill.sense_motive',
        value: 2,
        condition: {
          type: 'custom',
          params: {},
          description: '+2 vs outsiders; increases to +4 at 10+ ranks in Sense Motive',
        },
        source: "Planewalker's Insight",
      },
    ],
    activationMode: 'passive',
    tags: ['planar', 'knowledge-planes', 'sense-motive', 'outsider'],
  },
  {
    id: 'primal_bloom',
    name: 'Primal Bloom',
    types: ['conduit'],
    source: 'Planar Adventures',
    verificationStatus: 'needs_review' as const,
    description:
      'As a standard action, you create a 50-foot-radius spread of primal fey influence centered on yourself. This stationary area persists for 1 minute and gains the wild magic planar trait with a DC increase of 5 for caster level checks. If the area already possessed this trait, the DC increases by 10 instead. Usable once per day; twice daily at Knowledge (planes) 15 ranks; three times daily at Knowledge (planes) 20 ranks.',
    shortDescription: 'Create a 50-ft radius wild magic zone (DC +5/+10) for 1 minute.',
    prerequisites: [{ type: 'skill', skillId: 'knowledge_planes', ranks: 10 }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'special.planar_trait',
        value: 0,
        condition: {
          type: 'custom',
          params: {},
          description:
            '50-ft radius wild magic zone centered on self for 1 minute; caster level check DC +5 (or +10 if already wild magic); once/day scaling with Knowledge (planes) ranks',
        },
        source: 'Primal Bloom',
      },
    ],
    activationMode: 'conditional',
    tags: ['conduit', 'planar', 'wild-magic', 'fey'],
  },
  {
    id: 'shadows_shroud',
    name: "Shadow's Shroud",
    types: ['conduit'],
    source: 'Planar Adventures',
    verificationStatus: 'needs_review' as const,
    description:
      'As a swift action, you shroud yourself in shifting, camouflaging shadow. While activated, you can make Stealth checks as though possessing concealment, regardless of lighting conditions. Creatures with supernatural darkvision can still perceive you normally. The effect lasts for a number of rounds per day equal to your Knowledge (planes) ranks; these rounds need not be consecutive.',
    shortDescription:
      'Swift action to gain concealment-based Stealth for rounds equal to Knowledge (planes) ranks.',
    prerequisites: [{ type: 'skill', skillId: 'knowledge_planes', ranks: 5 }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skill.stealth',
        value: 0,
        condition: {
          type: 'custom',
          params: {},
          description:
            "While Shadow's Shroud is active; can make Stealth checks as if having concealment in any lighting; supernatural darkvision ignores this",
        },
        source: "Shadow's Shroud",
      },
    ],
    activationMode: 'toggle',
    tags: ['conduit', 'planar', 'shadow', 'stealth', 'concealment'],
  },
  {
    id: 'stony_rampart',
    name: 'Stony Rampart',
    types: ['combat', 'conduit'],
    source: 'Planar Adventures',
    verificationStatus: 'needs_review' as const,
    description:
      'As a standard action, you summon a low stone wall within 30 feet. The wall measures 5 feet long, 3 feet high, and 2 inches thick, providing partial cover. Each section has hardness 8 and 30 hit points. The maximum number of walls active at one time equals one per 5 ranks in Knowledge (planes) (minimum one). Walls last for a number of rounds equal to your Knowledge (planes) ranks. If you have 10 or more ranks, you may create multiple walls in one action. Uses per day equal your Knowledge (planes) ranks.',
    shortDescription:
      'Summon a stone wall (5 ft long, partial cover, hardness 8, 30 hp) within 30 feet.',
    prerequisites: [{ type: 'skill', skillId: 'knowledge_planes', ranks: 3 }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'special.terrain',
        value: 0,
        condition: {
          type: 'custom',
          params: {},
          description:
            'Creates 5-ft stone wall section within 30 ft; hardness 8, 30 hp, partial cover; duration equals Knowledge (planes) ranks in rounds',
        },
        source: 'Stony Rampart',
      },
    ],
    activationMode: 'conditional',
    tags: ['combat', 'conduit', 'planar', 'terrain', 'cover'],
  },
  {
    id: 'stygian_spell',
    name: 'Stygian Spell',
    types: ['metamagic'],
    source: 'Planar Adventures',
    verificationStatus: 'needs_review' as const,
    description:
      'This metamagic feat allows enhancement of spells with the water descriptor that target at least one creature. Successfully hit creatures or those failing saves must make a Will save (DC matches original spell) or suffer fugue lesser madness alongside normal spell effects. Confirmed critical hits or natural 1 saves force another Will save or inflict amnesia greater madness instead. The madness persists indefinitely but responds to standard madness treatments. Modified spells gain the evil descriptor. Requires a spell slot 2 levels higher than normal. Cannot be applied to spells with the good descriptor. This is a mind-affecting effect. Creatures native to the River Styx are immune.',
    shortDescription:
      'Water-descriptor spell inflicts fugue madness (Will negates); +2 spell level, gains evil descriptor.',
    prerequisites: [],
    effects: [],
    activationMode: 'passive',
    tags: ['metamagic', 'planar', 'water', 'evil', 'madness', 'mind-affecting', 'styx'],
  },
  {
    id: 'subjective_mobility',
    name: 'Subjective Mobility',
    types: ['general'],
    source: 'Planar Adventures',
    verificationStatus: 'needs_review' as const,
    description:
      'You automatically succeed at Wisdom checks to set a new direction of gravity on planes with subjective directional gravity. When adjusting your gravity direction, you can either reduce falling speed by up to two-thirds (minimum 50 feet first round, 100 feet per subsequent round) or increase it to twice normal (maximum 300 feet first round, 600 feet per subsequent round). This feat only functions on planes with subjective directional gravity mechanics.',
    shortDescription:
      'Auto-succeed at gravity direction checks on subjective gravity planes; control fall speed.',
    prerequisites: [{ type: 'ability_score', ability: 'WIS', minimum: 13 }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'special.gravity_check',
        value: 0,
        condition: {
          type: 'custom',
          params: {},
          description:
            'Automatic success on Wisdom checks to set gravity direction on subjective directional gravity planes',
        },
        source: 'Subjective Mobility',
      },
    ],
    activationMode: 'passive',
    tags: ['planar', 'gravity', 'movement'],
  },
  {
    id: 'subjective_slam',
    name: 'Subjective Slam',
    types: ['combat'],
    source: 'Planar Adventures',
    verificationStatus: 'needs_review' as const,
    description:
      "You halve all damage you take from impacts such as falling damage. While falling on planes with subjective directional gravity, you may initiate a slam attack as a standard action against creatures or objects in your path. The attack requires a touch attack roll with a cumulative -1 penalty for every 50 feet of falling speed. Successful slams deal 1d6 bludgeoning damage per 50 feet of falling speed (maximum 6d6) and cause the target to begin falling at your current speed according to the plane's gravity direction.",
    shortDescription:
      'Halve impact/fall damage; slam targets while falling for 1d6/50 ft (max 6d6).',
    prerequisites: [
      { type: 'ability_score', ability: 'CON', minimum: 13 },
      { type: 'ability_score', ability: 'WIS', minimum: 13 },
      { type: 'feat', featId: 'subjective_mobility' },
      { type: 'special', description: 'Base attack bonus +4 or monk level 3rd' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'special.falling_damage',
        value: 0,
        condition: {
          type: 'custom',
          params: {},
          description:
            'Halves all impact and falling damage; enables slam touch attack while falling on subjective gravity planes (1d6 per 50 ft speed, max 6d6)',
        },
        source: 'Subjective Slam',
      },
    ],
    activationMode: 'passive',
    tags: ['combat', 'planar', 'gravity', 'falling', 'slam'],
  },
  {
    id: 'tempting_bargain',
    name: 'Tempting Bargain',
    types: ['general'],
    source: 'Planar Adventures',
    verificationStatus: 'needs_review' as const,
    description:
      "You may choose an eidolon of any alignment, even if it differs by more than one step from yours. Your eidolon will not refuse summoning based on alignment differences, though it retains the right to reject commands contrary to its nature. Each time you gain a summoner level, you must attempt a Will saving throw (DC = 10 + half your eidolon's Hit Dice + your eidolon's Charisma modifier). On failure, your alignment shifts one step toward your eidolon's alignment permanently. If your alignment becomes identical to your eidolon's, you may replace this feat with any other 1st-level feat you qualify for.",
    shortDescription:
      'Summon eidolons of any alignment; risk alignment shift toward eidolon on level-up.',
    prerequisites: [
      { type: 'level', minimum: 1, class: 'summoner' },
      { type: 'class_feature', featureName: 'eidolon' },
      { type: 'special', description: 'Must be an unchained summoner' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'special.eidolon_alignment',
        value: 0,
        condition: {
          type: 'custom',
          params: {},
          description:
            'Allows eidolons of any alignment; Will save each summoner level (DC 10 + 1/2 eidolon HD + eidolon CHA mod) or alignment shifts one step toward eidolon',
        },
        source: 'Tempting Bargain',
      },
    ],
    activationMode: 'passive',
    tags: ['planar', 'summoner', 'eidolon', 'alignment'],
  },
  {
    id: 'tidal_swiftness',
    name: 'Tidal Swiftness',
    types: ['conduit'],
    source: 'Planar Adventures',
    verificationStatus: 'needs_review' as const,
    description:
      'As a standard action, you conjure a tide of water from the Plane of Water around your feet that enhances your speed, functioning like the slipstream spell. You can use this ability for a number of minutes daily equal to your Knowledge (planes) skill ranks, split across multiple uses in 1-minute increments.',
    shortDescription:
      'Standard action grants slipstream-like speed boost for minutes equal to Knowledge (planes) ranks.',
    prerequisites: [{ type: 'skill', skillId: 'knowledge_planes', ranks: 5 }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'speed.base',
        value: 0,
        condition: {
          type: 'custom',
          params: {},
          description:
            'Standard action; grants slipstream spell effect for minutes/day equal to Knowledge (planes) ranks',
        },
        source: 'Tidal Swiftness',
      },
    ],
    activationMode: 'toggle',
    tags: ['conduit', 'planar', 'water', 'movement', 'speed'],
  },
  {
    id: 'tumultuous_spell',
    name: 'Tumultuous Spell',
    types: ['metamagic'],
    source: 'Planar Adventures',
    verificationStatus: 'needs_review' as const,
    description:
      'This metamagic allows you to infuse a single-target spell with chaotic energy from the Maelstrom. When a creature is hit by or fails a save against a tumultuous spell, it immediately moves 1d4x5 feet in a random direction. The movement does not trigger attacks of opportunity and stops harmlessly if it would hit an obstacle. Increases spell slot requirement by 1 level. Cannot be applied to spells with the lawful descriptor.',
    shortDescription:
      'Single-target spell knocks targets 1d4x5 ft in random direction; +1 spell level.',
    prerequisites: [],
    effects: [],
    activationMode: 'passive',
    tags: ['metamagic', 'planar', 'chaotic', 'maelstrom', 'movement'],
  },
  {
    id: 'tyrants_rebuke',
    name: "Tyrant's Rebuke",
    types: ['conduit'],
    source: 'Planar Adventures',
    verificationStatus: 'needs_review' as const,
    description:
      'As a standard action, you make a melee touch attack. On a successful hit, the target must succeed at a Will save (DC = 10 + half your level + your Charisma modifier) or become staggered until the end of your next turn. If the creature is already staggered by this effect and fails the save again, it additionally takes 1d4 points of Charisma damage in addition to being staggered. You can use this feat once per day for every 5 ranks in Knowledge (planes).',
    shortDescription:
      'Melee touch attack staggers target (Will negates); repeat use adds 1d4 Charisma damage.',
    prerequisites: [{ type: 'skill', skillId: 'knowledge_planes', ranks: 5 }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'attack.melee',
        value: 0,
        condition: {
          type: 'custom',
          params: {},
          description:
            'Melee touch attack; Will save DC (10 + 1/2 level + CHA mod) or staggered until end of next turn; if already staggered by this effect and fails again, also takes 1d4 CHA damage',
        },
        source: "Tyrant's Rebuke",
      },
    ],
    activationMode: 'conditional',
    tags: ['conduit', 'planar', 'hell', 'stagger', 'charisma-damage'],
  },
  {
    id: 'wanderers_fortune',
    name: "Wanderer's Fortune",
    types: ['conduit'],
    source: 'Planar Adventures',
    verificationStatus: 'needs_review' as const,
    description:
      'As a swift action, you gain the benefits of freedom of movement until the end of your turn or until you benefit from the effects to escape a grapple or magical restraint, whichever comes first. You may activate this ability once daily, plus one additional use for every 5 ranks in Knowledge (planes).',
    shortDescription:
      'Swift action grants freedom of movement until end of turn or until used to escape restraint.',
    prerequisites: [{ type: 'skill', skillId: 'knowledge_planes', ranks: 3 }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'speed.base',
        value: 0,
        condition: {
          type: 'custom',
          params: {},
          description:
            'Swift action; freedom of movement until end of turn or first use to escape grapple/magical restraint',
        },
        source: "Wanderer's Fortune",
      },
    ],
    activationMode: 'conditional',
    tags: ['conduit', 'planar', 'elysium', 'freedom', 'grapple'],
  },
  {
    id: 'wind_leaper',
    name: 'Wind Leaper',
    types: ['conduit'],
    source: 'Planar Adventures',
    verificationStatus: 'needs_review' as const,
    description:
      'As a swift action, you activate airy energies that reduce your effective weight by 50%. While active, you gain a circumstance bonus on Acrobatics checks equal to half your Knowledge (planes) ranks, all Acrobatics jump attempts are treated as having a running start, and high jump checks are treated as long jumps for DC determination. You can maintain this ability for a number of rounds per day equal to your Knowledge (planes) ranks; these rounds need not be consecutive.',
    shortDescription:
      'Swift action: Acrobatics bonus, automatic running start, and high jumps treated as long jumps.',
    prerequisites: [{ type: 'skill', skillId: 'knowledge_planes', ranks: 3 }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.CIRCUMSTANCE,
        target: 'skill.acrobatics',
        value: 0,
        condition: {
          type: 'custom',
          params: {},
          description:
            'While Wind Leaper is active; bonus equals half Knowledge (planes) ranks; automatic running start for jumps; high jumps treated as long jumps',
        },
        source: 'Wind Leaper',
      },
    ],
    activationMode: 'toggle',
    tags: ['conduit', 'planar', 'air', 'acrobatics', 'jumping', 'movement'],
  },
];

// CHECKPOINT: last_written=wind_leaper, written=23/23, status=complete
