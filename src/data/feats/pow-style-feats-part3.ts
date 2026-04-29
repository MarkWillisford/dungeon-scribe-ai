import { BonusType } from '@/types/base';
import type { FeatDefinition } from '@/types/feats';

/**
 * Path of War — Style Feats Part 3 (feats 49–60 of 60)
 * Source: d20pfsrd.com/alternative-rule-systems/3rd-party-rules-systems/path-of-war/feats/
 *
 * Chains covered in this batch:
 *  1. Steel Serpent (Expanded)
 *  2. Tempest Gale (Expanded)
 *  3. Thrashing Dragon (Expanded)
 *  4. Veiled Moon (Expanded)
 */
export const POW_STYLE_FEATS_PART3: FeatDefinition[] = [
  // ── Steel Serpent Chain (Path of War: Expanded) ────────────────────────
  // 1
  {
    id: 'pow-steel-serpent-style',
    name: 'Steel Serpent Style',
    description:
      'Your mastery of the Steel Serpent discipline allows you to weaken foes with every strike. While using this style, whenever you hit a creature with a Steel Serpent maneuver, that creature takes a -1 penalty on attack rolls and to its AC for two rounds. This penalty increases by -1 at 5th character level and again at every five levels thereafter (to a maximum of -5 at 20th level). Multiple applications of this penalty do not stack; only the highest penalty applies.',
    shortDescription:
      "Steel Serpent maneuvers impose a scaling penalty to the target's AC and attack rolls.",
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'skill', skillId: 'heal', ranks: 3 },
      { type: 'discipline_access', disciplineId: 'steel-serpent' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['path_of_war', 'style', 'steel_serpent'],
  },
  // 2
  {
    id: 'pow-steel-serpent-fangs',
    name: 'Steel Serpent Fangs',
    description:
      'Your venomous strikes exploit the weakness of injured foes. While using Steel Serpent Style, as a swift action you may expend a readied boost to treat all opponents currently suffering from ability damage as flat-footed until the start of your next turn.',
    shortDescription: 'Expend a boost to treat ability-damaged opponents as flat-footed.',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'pow-steel-serpent-style' },
      { type: 'skill', skillId: 'heal', ranks: 7 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['path_of_war', 'style', 'steel_serpent'],
  },
  // 3
  {
    id: 'pow-steel-serpent-venom',
    name: 'Steel Serpent Venom',
    description:
      'Your attacks deliver debilitating venom to those already weakened. While using Steel Serpent Style, when you deal weapon damage to a creature already suffering from ability score damage, that creature must succeed on a Fortitude save (DC 10 + 1/2 your character level + your highest initiation modifier) or become nauseated for one round. Multiple applications of this effect do not stack or extend the duration.',
    shortDescription:
      'Nauseate ability-damaged creatures you hit unless they pass a Fortitude save.',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'pow-steel-serpent-style' },
      { type: 'feat', featId: 'pow-steel-serpent-fangs' },
      { type: 'skill', skillId: 'heal', ranks: 13 },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['path_of_war', 'style', 'steel_serpent'],
  },

  // 4
  {
    id: 'pow-thrashing-dragon-whirlwind',
    name: 'Thrashing Dragon Whirlwind',
    description:
      'You become a whirlwind of blades, striking every foe around you with both weapons. While using Thrashing Dragon Style, as a full-round action you can make one melee attack with a weapon in your main hand and one melee attack with a weapon in your off hand against each opponent within your melee reach. These attacks use your highest base attack bonus and do not incur two-weapon fighting penalties.',
    shortDescription:
      'Attack each opponent in reach with both weapons as a full-round action without TWF penalties.',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'pow-thrashing-dragon-style' },
      { type: 'feat', featId: 'pow-thrashing-dragon-pounce' },
      { type: 'skill', skillId: 'acrobatics', ranks: 11 },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['path_of_war', 'style', 'thrashing_dragon'],
  },

  // ── Veiled Moon Chain (Path of War: Expanded) ──────────────────────────
  // 10
  {
    id: 'pow-veiled-moon-style',
    name: 'Veiled Moon Style',
    description:
      'Your mastery of the Veiled Moon discipline allows you to slip between the planes with each step. While using this style, you may treat up to 10 feet of your movement per round as teleportation at any point during your move, provided you do not exceed your total normal movement speed. You must have line of sight to your destination and cannot teleport into an occupied space. When charging, you can use this teleportation to bypass up to 5 feet of obstacles, treating bypassed squares as empty for the purpose of determining charge eligibility. This is a supernatural ability.',
    shortDescription: 'Teleport up to 10 feet as part of your normal movement each round.',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'skill', skillId: 'stealth', ranks: 3 },
      { type: 'discipline_access', disciplineId: 'veiled-moon' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['path_of_war', 'style', 'veiled_moon'],
  },
  // 11
  {
    id: 'pow-veiled-moon-shunt',
    name: 'Veiled Moon Shunt',
    description:
      'You tear open rifts in space to forcibly relocate your enemies. While using Veiled Moon Style, once per round when you hit with an attack, you can expend a readied maneuver as a free action to forcibly teleport your target. The target must succeed on a Will save (DC 10 + the expended maneuver\u2019s level + your highest initiation modifier) or be teleported to an unoccupied space within 30 feet that you can see. You may place the target in difficult terrain, in the air, or in other hazardous situations. This is a supernatural ability and counts as a Veiled Moon maneuver for the purpose of save DCs and abilities such as Discipline Focus.',
    shortDescription: 'Expend a maneuver to forcibly teleport a creature you hit within 30 feet.',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'pow-veiled-moon-style' },
      { type: 'skill', skillId: 'stealth', ranks: 11 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['path_of_war', 'style', 'veiled_moon'],
  },
  // 12
  {
    id: 'pow-veiled-moon-warp',
    name: 'Veiled Moon Warp',
    description:
      'You phase your enemies out of the material world, rendering them incorporeal and unable to interact with their surroundings. While using Veiled Moon Style, as a standard action you may expend one readied strike and make a melee attack. On a successful hit, the target takes normal weapon damage and must succeed on a Will save (DC 10 + 1/2 your character level + your highest initiation modifier) or become incorporeal for one round. While incorporeal, the target cannot grasp weapons unless they function for incorporeal creatures. Other equipment remains on the body but becomes unusable unless it has the ghost touch property or an equivalent effect. This is a supernatural ability.',
    shortDescription:
      'Expend a strike to render a hit target incorporeal for one round on a failed Will save.',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'pow-veiled-moon-style' },
      { type: 'feat', featId: 'pow-veiled-moon-shunt' },
      { type: 'skill', skillId: 'stealth', ranks: 15 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['path_of_war', 'style', 'veiled_moon'],
  },
];
