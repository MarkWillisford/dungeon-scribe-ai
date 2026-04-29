import { BonusType } from '@/types/base';
import type { FeatDefinition } from '@/types/feats';

/**
 * Path of War — Style Feats, Part 2 (feats 26–50 of ~57)
 * Source: d20pfsrd.com/alternative-rule-systems/3rd-party-rules-systems/path-of-war/feats/
 *
 * Chains covered in this batch:
 *   1. Piercing Thunder (Expanded) — remaining 2 feats (Push, Trample)
 *   2. Primal Fury (Expanded) — full chain
 *   3. Scarlet Throne (Expanded) — full chain
 *   4. Shattered Mirror (Expanded) — full chain
 *   5. Silver Crane (Expanded) — full chain
 *   6. Sleeping Goddess (Expanded) — full chain
 *   7. Solar Wind (Expanded) — full chain
 *   8. Tempest Gale (Expanded) — full chain
 *   9. Thrashing Dragon (Expanded) — Style + Pounce only (cap hit)
 *
 * Overflow: Thrashing Dragon Whirlwind + Veiled Moon chain (4 feats) remain for part 3.
 */
export const POW_STYLE_FEATS_PART2: FeatDefinition[] = [
  // ── Piercing Thunder Chain (continued from Part 1) ───────────────────
  // 1
  {
    id: 'pow-piercing-thunder-push',
    name: 'Piercing Thunder Push',
    description:
      'You can ready spears or polearms against charges as if they had the brace quality. If you hit a charging opponent with your readied weapon, you push them back 5 feet (potentially stopping their charge).',
    shortDescription:
      'Ready spears/polearms as if they had brace; push back charging opponents 5 feet on a hit.',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'pow-piercing-thunder-style' },
      { type: 'skill', skillId: 'acrobatics', ranks: 7 },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['path_of_war', 'style', 'piercing_thunder'],
  },
  // 2
  {
    id: 'pow-piercing-thunder-trample',
    name: 'Piercing Thunder Trample',
    description:
      'Whenever you charge a creature while wielding a Piercing Thunder discipline weapon, you can make a bull rush attempt and an overrun attempt against the target of your charge. These combat maneuver attempts do not provoke attacks of opportunity, and can be made before or after your charge attack in any order.',
    shortDescription:
      'Bull rush and overrun during charges with Piercing Thunder weapons without provoking.',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'pow-piercing-thunder-style' },
      { type: 'feat', featId: 'pow-piercing-thunder-push' },
      { type: 'skill', skillId: 'acrobatics', ranks: 13 },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['path_of_war', 'style', 'piercing_thunder'],
  },

  // ── Primal Fury Chain (Path of War: Expanded) ────────────────────────
  // 3
  {
    id: 'pow-primal-fury-style',
    name: 'Primal Fury Style',
    description:
      "While using this style, you can make Survival checks in place of Acrobatics checks to move through threatened squares. In addition, you can charge through difficult terrain and spaces containing opponents. You do not provoke attacks of opportunity for entering an opponent's space when charging, although you provoke attacks of opportunity as normal for moving through an opponent's threatened area.",
    shortDescription:
      'Use Survival for Acrobatics in threatened squares; charge through difficult terrain and opponents.',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'skill', skillId: 'survival', ranks: 3 },
      { type: 'discipline_access', disciplineId: 'primal-fury' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['path_of_war', 'style', 'primal_fury'],
  },
  // 4
  {
    id: 'pow-primal-fury-slash',
    name: 'Primal Fury Slash',
    description:
      'When you charge a creature, you can make a single melee attack against another creature that is adjacent to you at any point during your movement.',
    shortDescription: 'Make a melee attack against an adjacent creature while charging past.',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'pow-primal-fury-style' },
      { type: 'skill', skillId: 'survival', ranks: 7 },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['path_of_war', 'style', 'primal_fury'],
  },
  // 5
  {
    id: 'pow-primal-fury-leap',
    name: 'Primal Fury Leap',
    description:
      'You can make charge attacks against opponents in the air. If you do, you are treated as having a fly speed equal to your land speed during the charge, with good maneuverability. If you do not normally have a fly speed, you fall after this charge. You reduce the effective distance of this fall by 10 feet per initiator level.',
    shortDescription:
      'Charge airborne creatures with a temporary fly speed; reduce falling damage by 10 feet per initiator level.',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'pow-primal-fury-style' },
      { type: 'feat', featId: 'pow-primal-fury-slash' },
      { type: 'skill', skillId: 'survival', ranks: 11 },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['path_of_war', 'style', 'primal_fury'],
  },

  // ── Scarlet Throne Chain (Path of War: Expanded) ─────────────────────
  // 6
  {
    id: 'pow-scarlet-throne-style',
    name: 'Scarlet Throne Style',
    description:
      'As long as you only attack with a single weapon wielded in one hand during a round, you treat that weapon as if you were wielding it in two hands for the purposes of feats and abilities that would benefit from this change. This does not increase your Strength bonus to damage with the weapon.',
    shortDescription:
      'Treat a one-handed weapon as two-handed for feats and abilities without increasing Strength damage.',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'skill', skillId: 'sense_motive', ranks: 3 },
      { type: 'discipline_access', disciplineId: 'scarlet-throne' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['path_of_war', 'style', 'scarlet_throne'],
  },
  // 7
  {
    id: 'pow-scarlet-throne-dignity',
    name: 'Scarlet Throne Dignity',
    description:
      "You can expend a readied maneuver as an immediate action in response to an attack being made against you. If you do, make an attack roll with a weapon you are wielding. If your attack roll is higher than your opponent's, their attack is negated, and you can take a 5-foot step, even if you have already moved or taken a 5-foot step this round.",
    shortDescription:
      'Expend a maneuver to negate an attack with a competing attack roll and take a 5-foot step.',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'pow-scarlet-throne-style' },
      { type: 'skill', skillId: 'sense_motive', ranks: 7 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['path_of_war', 'style', 'scarlet_throne'],
  },
  // 8
  {
    id: 'pow-scarlet-throne-riposte',
    name: 'Scarlet Throne Riposte',
    description:
      'Whenever you use an ability to negate an attack from an opponent (such as with a counter or with the Scarlet Throne Dignity feat), that opponent provokes an attack of opportunity from you. A given creature can only provoke an attack of opportunity from you in this way once per round.',
    shortDescription: 'Opponents provoke an attack of opportunity when you negate their attacks.',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'pow-scarlet-throne-style' },
      { type: 'feat', featId: 'pow-scarlet-throne-dignity' },
      { type: 'skill', skillId: 'sense_motive', ranks: 11 },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['path_of_war', 'style', 'scarlet_throne'],
  },

  // ── Shattered Mirror Chain (Path of War: Expanded) ───────────────────
  // 9
  {
    id: 'pow-shattered-mirror-style',
    name: 'Shattered Mirror Style',
    description:
      'When wielding one or more Shattered Mirror discipline weapons, your shield bonus to your AC increases by +2. If you do not already have a shield bonus, you are considered to have a shield bonus of +0 for the purpose of this feat.',
    shortDescription:
      'Gain +2 to shield bonus to AC while wielding Shattered Mirror discipline weapons.',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'skill', skillId: 'craft', ranks: 3 },
      { type: 'discipline_access', disciplineId: 'shattered-mirror' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['path_of_war', 'style', 'shattered_mirror'],
  },
  // 10
  {
    id: 'pow-shattered-mirror-waltz',
    name: 'Shattered Mirror Waltz',
    description:
      'While using Shattered Mirror Style, you ignore movement penalties from difficult terrain. Other effects of the terrain affect you as normal.',
    shortDescription: 'Ignore movement penalties from difficult terrain.',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'pow-shattered-mirror-style' },
      { type: 'skill', skillId: 'craft', ranks: 7 },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['path_of_war', 'style', 'shattered_mirror'],
  },
  // 11
  {
    id: 'pow-shattered-mirror-duality',
    name: 'Shattered Mirror Duality',
    description:
      'While using Shattered Mirror Style, once per round you can expend a readied boost as a swift action. If you do, you roll twice for each attack roll you make this round and use the better result. This is a supernatural ability.',
    shortDescription:
      'Expend a boost to roll twice on each attack roll this round, taking the better result.',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'pow-shattered-mirror-style' },
      { type: 'feat', featId: 'pow-shattered-mirror-waltz' },
      { type: 'skill', skillId: 'craft', ranks: 13 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['path_of_war', 'style', 'shattered_mirror'],
  },

  // ── Silver Crane Chain (Path of War: Expanded) ───────────────────────
  // 12
  {
    id: 'pow-silver-crane-style',
    name: 'Silver Crane Style',
    description:
      'While using this style, as a free action you can choose to take a -1 penalty to your AC and on Reflex saves to grant other allies within 30 feet a +1 bonus to their AC and on Reflex saves until the start of your next turn. At character level 4th and at every four levels thereafter, this penalty increases by -1 and the bonuses granted increase by +1.',
    shortDescription:
      'Penalize your AC and Reflex saves to grant scaling bonuses to nearby allies.',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'skill', skillId: 'perception', ranks: 3 },
      { type: 'discipline_access', disciplineId: 'silver-crane' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['path_of_war', 'style', 'silver_crane'],
  },
  // 13
  {
    id: 'pow-silver-crane-feathers',
    name: 'Silver Crane Feathers',
    description:
      'While using Silver Crane Style, whenever an ally within 30 feet would take ability damage or hit point damage, you can expend a readied counter as an immediate action to take the damage in place of that ally. This is a supernatural ability.',
    shortDescription: 'Expend a counter to take damage in place of a nearby ally.',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'pow-silver-crane-style' },
      { type: 'skill', skillId: 'perception', ranks: 7 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['path_of_war', 'style', 'silver_crane'],
  },
  // 14
  {
    id: 'pow-silver-crane-wing',
    name: 'Silver Crane Wing',
    description:
      'When you use your Silver Crane Feathers feat, you can make a Will save (DC equal to the ability damage dealt + the hit point damage dealt). If you succeed, the damage is negated rather than being redirected to you.',
    shortDescription: 'Will save to negate damage entirely when using Silver Crane Feathers.',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'pow-silver-crane-style' },
      { type: 'feat', featId: 'pow-silver-crane-feathers' },
      { type: 'skill', skillId: 'perception', ranks: 11 },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['path_of_war', 'style', 'silver_crane'],
  },

  // ── Sleeping Goddess Chain (Path of War: Expanded) ───────────────────
  // 15
  {
    id: 'pow-sleeping-goddess-style',
    name: 'Sleeping Goddess Style',
    description:
      'While using this style, you gain psionic focus as a standard action. When you do, you recover an expended maneuver as a free action. If you have the Psionic Meditation feat, you can instead gain psionic focus and recover an expended maneuver as a move action.',
    shortDescription:
      'Gain psionic focus and recover a maneuver as a standard action (move action with Psionic Meditation).',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'special', description: 'Autohypnosis 3 ranks' },
      { type: 'discipline_access', disciplineId: 'sleeping-goddess' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['path_of_war', 'style', 'sleeping_goddess'],
  },
  // 16
  {
    id: 'pow-sleeping-goddess-slumber',
    name: 'Sleeping Goddess Slumber',
    description:
      'While using Sleeping Goddess Style, whenever you hit a creature with an attack, you can expend your psionic focus as a free action. If you do, that creature must succeed at a Will save (DC = 10 + 1/2 your character level + your highest initiation modifier) or become confused for one round. A creature that successfully saves cannot be affected by this feat for 24 hours. This is a supernatural ability.',
    shortDescription: 'Expend psionic focus to confuse a creature you hit (Will negates).',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'pow-sleeping-goddess-style' },
      { type: 'special', description: 'Autohypnosis 7 ranks' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['path_of_war', 'style', 'sleeping_goddess'],
  },
  // 17
  {
    id: 'pow-sleeping-goddess-strike',
    name: 'Sleeping Goddess Strike',
    description:
      'While using Sleeping Goddess Style, whenever you hit an opponent with an attack, they take a -2 penalty on saving throws against your maneuvers until the end of their next turn.',
    shortDescription: 'Creatures you hit take a -2 penalty on saves against your maneuvers.',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'pow-sleeping-goddess-style' },
      { type: 'feat', featId: 'pow-sleeping-goddess-slumber' },
      { type: 'special', description: 'Autohypnosis 11 ranks' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['path_of_war', 'style', 'sleeping_goddess'],
  },

  // ── Solar Wind Chain (Path of War: Expanded) ─────────────────────────
  // 18
  {
    id: 'pow-solar-wind-style',
    name: 'Solar Wind Style',
    description:
      'While using this style, your ranged attacks deal 1 point of additional fire damage. At character level 5th and at every five levels thereafter, this damage increases by 1. In addition, whenever you hit a creature with a ranged attack, you can choose to have your target become outlined as if by a faerie fire spell, with a caster level equal to your initiator level. Successive uses of this ability against the same creature do not stack; instead, they extend the duration. You can suppress or resume the light on an affected creature you can see as a free action. This is a supernatural ability.',
    shortDescription:
      'Ranged attacks deal scaling fire damage and can outline targets with faerie fire.',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'skill', skillId: 'perception', ranks: 3 },
      { type: 'discipline_access', disciplineId: 'solar-wind' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['path_of_war', 'style', 'solar_wind'],
  },
  // 19
  {
    id: 'pow-solar-wind-flash',
    name: 'Solar Wind Flash',
    description:
      'While using Solar Wind Style, whenever you hit a creature with a ranged attack, you can expend one of your readied boosts as a swift action. If you do, that creature must succeed at a Fortitude save (DC = 10 + 1/2 your character level + your highest initiation modifier) or become blinded for one round. This is a supernatural ability.',
    shortDescription:
      'Expend a boost to blind a creature you hit with a ranged attack (Fortitude negates).',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'pow-solar-wind-style' },
      { type: 'skill', skillId: 'perception', ranks: 7 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['path_of_war', 'style', 'solar_wind'],
  },
  // 20
  {
    id: 'pow-solar-wind-inferno',
    name: 'Solar Wind Inferno',
    description:
      "While using Solar Wind Style, your ranged attacks ignore up to your character level in fire resistance. In addition, you can deal fire damage to creatures that are immune to fire, treating their immunity as fire resistance 30 for the purposes of this feat and dealing damage to them. If you possess the Variable Wind feat, this ability applies to your active element's energy type instead of fire specifically, treating immunity to that energy as resistance 30.",
    shortDescription:
      'Ranged attacks ignore fire resistance up to your level and treat fire immunity as resistance 30.',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'pow-solar-wind-style' },
      { type: 'feat', featId: 'pow-solar-wind-flash' },
      { type: 'skill', skillId: 'perception', ranks: 11 },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['path_of_war', 'style', 'solar_wind'],
  },

  // ── Tempest Gale Chain (Path of War: Expanded) ───────────────────────
  // 21
  {
    id: 'pow-tempest-gale-style',
    name: 'Tempest Gale Style',
    description:
      'While using this style, you can make bull rush, dirty trick, disarm, and trip attempts using a ranged weapon against any target within your first range increment. Attempting a combat maneuver in this way is a standard action that provokes an attack of opportunity (unless you have the appropriate improved combat maneuver feat). You use your Dexterity modifier instead of your Strength modifier for determining your combat maneuver bonus for these attempts.',
    shortDescription:
      'Make ranged bull rush, dirty trick, disarm, and trip attempts using Dexterity.',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'skill', skillId: 'sleight_of_hand', ranks: 3 },
      { type: 'discipline_access', disciplineId: 'tempest-gale' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['path_of_war', 'style', 'tempest_gale'],
  },
  // 22
  {
    id: 'pow-tempest-gale-haze',
    name: 'Tempest Gale Haze',
    description:
      'While using Tempest Gale Style, ranged attacks against you suffer a 20% miss chance.',
    shortDescription: 'Ranged attacks against you have a 20% miss chance.',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'pow-tempest-gale-style' },
      { type: 'skill', skillId: 'sleight_of_hand', ranks: 7 },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['path_of_war', 'style', 'tempest_gale'],
  },
  // 23
  {
    id: 'pow-tempest-gale-storm',
    name: 'Tempest Gale Storm',
    description:
      'While using Tempest Gale Style, you can make two different ranged combat maneuver attempts with your Tempest Gale Style feat against a single target as a standard action. You only provoke attacks of opportunity once when doing so.',
    shortDescription:
      'Make two different ranged combat maneuver attempts against one target as a standard action.',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'pow-tempest-gale-style' },
      { type: 'feat', featId: 'pow-tempest-gale-haze' },
      { type: 'skill', skillId: 'sleight_of_hand', ranks: 11 },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['path_of_war', 'style', 'tempest_gale'],
  },

  // ── Thrashing Dragon Chain (Path of War: Expanded) — Style + Pounce ──
  // 24
  {
    id: 'pow-thrashing-dragon-style',
    name: 'Thrashing Dragon Style',
    description:
      'While using this style, once per round when you make an attack as a standard action or attack action, you can make an additional attack with another weapon as a free action. This attack is made at your highest base attack bonus, although you take the penalties for fighting with two weapons as normal.',
    shortDescription:
      'Make a bonus off-hand attack once per round when attacking as a standard or attack action.',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'skill', skillId: 'acrobatics', ranks: 3 },
      { type: 'discipline_access', disciplineId: 'thrashing-dragon' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['path_of_war', 'style', 'thrashing_dragon'],
  },
  // 25
  {
    id: 'pow-thrashing-dragon-pounce',
    name: 'Thrashing Dragon Pounce',
    description:
      'While using Thrashing Dragon Style, whenever you initiate a strike that requires you to make only a single melee attack, you can make an additional attack with another weapon as a free action. This attack uses your highest base attack bonus but incurs two-weapon fighting penalties. The extra attack gains no benefits from the initiated strike.',
    shortDescription:
      'Make a free off-hand attack when initiating a single-attack strike; no strike benefits on the extra attack.',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'pow-thrashing-dragon-style' },
      { type: 'skill', skillId: 'acrobatics', ranks: 7 },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['path_of_war', 'style', 'thrashing_dragon'],
  },
];
