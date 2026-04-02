import { BonusType } from '@/types/base';
import type { FeatDefinition } from '@/types/feats';

export const AQUATIC_ADVENTURES_FEATS: FeatDefinition[] = [
  // ─── Aquatic Adventures (Pathfinder Campaign Setting, 2017) ──────────────

  {
    id: 'aquadynamic_focus',
    name: 'Aquadynamic Focus',
    description:
      "You don't take the standard penalties on attack and damage rolls for fighting underwater with bludgeoning and slashing melee weapons for which you have selected Weapon Focus. Normally, bludgeoning and slashing melee weapons suffer a -2 penalty to attack rolls and deal only half damage underwater.",
    shortDescription:
      'Ignore underwater attack and damage penalties for bludgeoning/slashing weapons with Weapon Focus.',
    source: 'Pathfinder Campaign Setting: Aquatic Adventures',
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'weapon_focus' },
      { type: 'bab', minimum: 1 },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['aquatic', 'underwater', 'melee', 'combat'],
  },

  {
    id: 'aquadynamic_shot',
    name: 'Aquadynamic Shot',
    description:
      'You take only a -1 penalty on ranged attack rolls per 5 feet of water between you and your target, rather than the standard -2 penalty per 5 feet. This feat does not improve thrown weapons underwater, which remain subject to normal restrictions.',
    shortDescription:
      'Reduce underwater ranged attack penalty to -1 per 5 feet instead of -2 per 5 feet.',
    source: 'Pathfinder Campaign Setting: Aquatic Adventures',
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'far_shot' },
      { type: 'feat', featId: 'point_blank_shot' },
      { type: 'bab', minimum: 4 },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['aquatic', 'underwater', 'ranged', 'combat'],
  },

  {
    id: 'child_of_two_worlds',
    name: 'Child of Two Worlds',
    description:
      "One of your parents was aquatic, the other land-dwelling (perhaps via an elixir of two worlds or similar means). If you are aquatic, you gain 10 feet of land speed. If you are not aquatic, you gain a +4 racial bonus on Swim checks; this bonus doesn't stack with any bonus from having a swim speed. In either case, you gain the amphibious subtype and the aquatic subtype (if you don't already have it), you can breathe both water and air, and you can transform your feet into a tail fin (gaining a 40-foot swim speed) or vice versa (gaining a 30-foot land speed) as a swift action.",
    shortDescription:
      'Half-aquatic heritage: breathe water and air, gain amphibious/aquatic subtypes, and transform between feet and tail fin as a swift action.',
    source: 'Pathfinder Campaign Setting: Aquatic Adventures',
    types: ['story'],
    prerequisites: [
      {
        type: 'special',
        description:
          'One parent aquatic and the other land-dwelling; selected at 1st level; cannot have feats requiring a specific bloodline such as Racial Heritage',
      },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['aquatic', 'story', 'amphibious', 'movement'],
  },

  {
    id: 'deep_breath',
    name: 'Deep Breath',
    description:
      'You can hold your breath for twice as long as usual (4 rounds times your Constitution score instead of 2).',
    shortDescription: 'Hold your breath for twice as long (4 x CON rounds instead of 2).',
    source: 'Pathfinder Campaign Setting: Aquatic Adventures',
    types: ['general'],
    prerequisites: [{ type: 'ability_score', ability: 'CON', minimum: 15 }],
    effects: [],
    activationMode: 'passive',
    tags: ['aquatic', 'underwater', 'survival'],
  },

  {
    id: 'favor_of_the_empress_of_torrents',
    name: 'Favor of the Empress of Torrents',
    description:
      'Once per day while underwater, you can use hydraulic torrent as a spell-like ability. At 10th level and every 5 levels thereafter, you can use this ability an additional time per day.',
    shortDescription:
      'Once per day underwater, use hydraulic torrent as a spell-like ability (more uses at higher levels).',
    source: 'Pathfinder Campaign Setting: Aquatic Adventures',
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'Worshiper of Lysianassa or pearl seeker paladin archetype' },
      { type: 'level', minimum: 5 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['aquatic', 'underwater', 'spell-like ability', 'divine'],
  },

  {
    id: 'master_swimmer',
    name: 'Master Swimmer',
    description:
      'You gain a swim speed of 30 feet, or your unmodified base land speed, whichever is slower. You also gain a +2 racial bonus on Swim checks for having a swim speed, rather than the standard +8 bonus.',
    shortDescription:
      'Gain a swim speed equal to the lower of 30 ft or your base land speed; +2 racial bonus on Swim checks.',
    source: 'Pathfinder Campaign Setting: Aquatic Adventures',
    types: ['general'],
    prerequisites: [
      { type: 'feat', featId: 'skill_focus_swim' },
      { type: 'skill', skillId: 'swim', ranks: 10 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skill.swim',
        value: 2,
        source: 'Master Swimmer',
        condition: {
          type: 'custom',
          description: 'Racial bonus for having a swim speed (replaces standard +8)',
          params: {},
        },
      },
    ],
    activationMode: 'passive',
    tags: ['aquatic', 'swim', 'movement', 'skill'],
  },

  {
    id: 'murky_spell',
    name: 'Murky Spell',
    description:
      "You can apply Murky Spell only to a mist or fog spell that normally does not work underwater, such as cloudkill, fog cloud, mind fog, obscuring mist, or solid fog. When cast underwater, a murky spell clouds the water with sediments, producing roughly the same effects as the normal spell would above water. The spell duration is reduced to one-tenth normal (typically 1 round per caster level). Secondary effects that have their own durations (such as mind fog's penalty) retain their full duration. Abilities that allow seeing through mist or fog do not work against murky spells unless they specifically allow seeing through murky water. Water currents of at least 10 feet per round disperse the spell in 1 round. A murky spell has no effect above water. A murky spell uses up a spell slot of the same level as the spell's actual level.",
    shortDescription:
      'Modify a mist or fog spell to work underwater, clouding water with sediments at one-tenth duration; no spell slot increase.',
    source: 'Pathfinder Campaign Setting: Aquatic Adventures',
    types: ['metamagic'],
    prerequisites: [],
    effects: [],
    activationMode: 'passive',
    tags: ['aquatic', 'underwater', 'metamagic', 'fog', 'mist'],
  },

  {
    id: 'pressure_adept',
    name: 'Pressure Adept',
    description:
      "Your native pressure range is expanded by one oceanic zone. You don't suffer pressure damage while within your expanded range, unless you are instantaneously transported between zones. If you are a surface dweller, you must select the sunlight zone. If you are an aquatic creature, you may select any zone adjacent to the zones you are already comfortable in.",
    shortDescription:
      'Expand your safe oceanic pressure zone by one zone, preventing pressure damage in that additional zone.',
    source: 'Pathfinder Campaign Setting: Aquatic Adventures',
    types: ['general'],
    prerequisites: [{ type: 'skill', skillId: 'swim', ranks: 5 }],
    effects: [],
    activationMode: 'passive',
    tags: ['aquatic', 'underwater', 'deep sea', 'pressure'],
  },

  // ─── Shark Style Chain ────────────────────────────────────────────────────
  {
    id: 'shark_style',
    name: 'Shark Style',
    description:
      'Your unarmed strikes can deal piercing damage or bludgeoning damage—changing the damage type is a free action. While using this style, your piercing unarmed strikes and bite attacks deal an additional 1d6 points of bleed damage.',
    shortDescription:
      'Unarmed strikes deal piercing or bludgeoning; piercing unarmed strikes and bite attacks cause 1d6 bleed.',
    source: 'Pathfinder Campaign Setting: Aquatic Adventures',
    types: ['style'],
    prerequisites: [
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'skill', skillId: 'swim', ranks: 3 },
      { type: 'special', description: 'Base attack bonus +3 or monk level 3rd' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['style', 'unarmed', 'aquatic', 'bleed', 'piercing'],
  },

  {
    id: 'shark_tear',
    name: 'Shark Tear',
    description:
      'While in Shark Style, you gain the scent ability while in water, but only against bleeding creatures. You also gain a +1 bonus on attack and damage rolls against bleeding creatures.',
    shortDescription:
      'While in Shark Style: gain scent in water vs bleeding foes, +1 attack and damage against bleeding creatures.',
    source: 'Pathfinder Campaign Setting: Aquatic Adventures',
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'feat', featId: 'shark_style' },
      { type: 'skill', skillId: 'swim', ranks: 6 },
      { type: 'special', description: 'Base attack bonus +6 or monk level 6th' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'attack.melee',
        value: 1,
        source: 'Shark Tear',
        condition: {
          type: 'custom',
          description: 'While in Shark Style against a bleeding creature',
          params: {},
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'damage.melee',
        value: 1,
        source: 'Shark Tear',
        condition: {
          type: 'custom',
          description: 'While in Shark Style against a bleeding creature',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['style', 'unarmed', 'aquatic', 'bleed', 'scent'],
  },

  {
    id: 'shark_leap',
    name: 'Shark Leap',
    description:
      "While using Shark Style underwater and your buoyancy is neutral or rising, you can launch yourself straight upward in a charge-like attack against a foe above you. This works similarly to the charge action, except you can move only straight up, and you make a single piercing unarmed strike or bite attack. On a successful hit, you deal double damage (or double damage dice with a partial charge using only a standard action). If your attack roll exceeds 11 + the target's Swim modifier, the target is off-balance until the start of its next turn.",
    shortDescription:
      'While in Shark Style underwater with neutral/rising buoyancy: charge straight up, deal double damage, possibly leave target off-balance.',
    source: 'Pathfinder Campaign Setting: Aquatic Adventures',
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'feat', featId: 'shark_style' },
      { type: 'feat', featId: 'shark_tear' },
      { type: 'skill', skillId: 'swim', ranks: 10 },
      { type: 'special', description: 'Base attack bonus +10 or monk level 10th' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['style', 'unarmed', 'aquatic', 'charge', 'damage'],
  },

  {
    id: 'steam_spell',
    name: 'Steam Spell',
    description:
      "You can apply Steam Spell only to a spell with the fire descriptor. A steam spell works underwater without a caster level check, but it requires a caster level check to function above water. A steam spell uses up a spell slot of the same level as the spell's actual level.",
    shortDescription:
      'Modify a fire spell to function freely underwater (no caster level check); requires a caster level check above water instead. No slot increase.',
    source: 'Pathfinder Campaign Setting: Aquatic Adventures',
    types: ['metamagic'],
    prerequisites: [],
    effects: [],
    activationMode: 'passive',
    tags: ['aquatic', 'underwater', 'metamagic', 'fire'],
  },

  {
    id: 'touch_of_the_brackish_emperor',
    name: 'Touch of the Brackish Emperor',
    description:
      "Once per day while underwater, you can attempt to suppress water-breathing magic on a touched creature as a spell-like ability. Roll 1d20 + your character level against a DC of 11 + each spell's caster level. Spells that may be affected include air bubble, life bubble, water breathing, and similar magic. A suppressed spell is disabled for 5 minutes. Spells with different caster levels are rolled for separately. At 10th level and every 5 levels thereafter, you can use this touch an additional time per day.",
    shortDescription:
      'Once per day underwater, touch a creature to suppress its water-breathing magic for 5 minutes (more uses at higher levels).',
    source: 'Pathfinder Campaign Setting: Aquatic Adventures',
    types: ['general'],
    prerequisites: [
      { type: 'level', minimum: 5 },
      { type: 'special', description: 'Worshiper of Kelizandri' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['aquatic', 'underwater', 'spell-like ability', 'divine', 'anti-magic'],
  },
];

// CHECKPOINT: last_written=touch_of_the_brackish_emperor, written=13/13, status=complete
