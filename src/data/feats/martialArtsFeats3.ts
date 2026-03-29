import type { FeatDefinition } from '@/types/feats';
import { BonusType } from '@/types/base';

export const MARTIAL_ARTS_FEATS_3: FeatDefinition[] = [
  {
    id: 'enduring_might',
    name: 'Enduring Might',
    types: ['combat'],
    source: 'Martial Arts Handbook',
    description:
      'Your gathered power lingers beyond the moment it is used. When you use Gather Might, the ability score bonuses granted by that feat last until the beginning of your next turn rather than expiring immediately.',
    shortDescription: 'Gather Might bonuses persist until start of your next turn.',
    prerequisites: [
      { type: 'feat', featId: 'gather_might' },
      { type: 'special', description: 'Gather power class feature' },
      { type: 'level', minimum: 8, class: 'kineticist' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['kineticist', 'gather might', 'kinetic blast'],
  },
  {
    id: 'octopus_thrash',
    name: 'Octopus Thrash',
    types: ['combat', 'style'],
    source: 'Martial Arts Handbook',
    description:
      'Your arms flail about in a confusing pattern of strikes that trips and batters your foes. While using Octopus Style and threatening two adjacent enemies, you can attempt a single trip combat maneuver check at a -5 penalty that applies to both adjacent targets simultaneously.',
    shortDescription: 'Trip two adjacent foes at once at -5 penalty while in Octopus Style.',
    prerequisites: [
      { type: 'ability_score', ability: 'DEX', minimum: 13 },
      { type: 'feat', featId: 'dodge' },
      { type: 'feat', featId: 'improved_trip' },
      { type: 'feat', featId: 'octopus_focus' },
      { type: 'feat', featId: 'octopus_style' },
      { type: 'skill', skillId: 'acrobatics', ranks: 7 },
      { type: 'skill', skillId: 'perception', ranks: 7 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'combat_maneuver_check',
        value: -5,
        condition: {
          type: 'custom',
          params: {},
          description: 'When tripping two adjacent foes simultaneously using Octopus Style',
        },
        source: 'Octopus Thrash',
      },
    ],
    activationMode: 'conditional',
    tags: ['octopus style', 'trip', 'combat maneuver'],
  },
  {
    id: 'tangled_limbs',
    name: 'Tangled Limbs',
    types: ['combat'],
    source: 'Martial Arts Handbook',
    description:
      "You twist your long weapon among your target's legs, knocking your foe off-balance. Select one reach weapon. When you attempt a trip combat maneuver with that weapon, the target does not gain the normal +2 CMD bonus per additional leg beyond two legs. Fighters with weapon training can apply this feat to any melee weapon with the reach quality from their selected weapon groups.",
    shortDescription: 'Negate bonus CMD from extra legs when tripping with a reach weapon.',
    prerequisites: [
      { type: 'ability_score', ability: 'INT', minimum: 13 },
      { type: 'feat', featId: 'combat_expertise' },
      { type: 'feat', featId: 'improved_trip' },
      { type: 'feat', featId: 'weapon_focus' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['reach weapon', 'trip', 'combat maneuver'],
  },
  {
    id: 'thousand_cuts',
    name: 'Thousand Cuts',
    types: ['combat'],
    source: 'Martial Arts Handbook',
    description:
      'Your attacks are calculated to draw the most blood possible. With every swing, you open persistent, vicious wounds that drain the life from your enemies. When you deal damage with a melee slashing weapon to an opponent who has already taken damage this round, you inflict 1 additional point of bleed damage that persists for 2 rounds. Multiple bleed effects from this feat stack when applied in the same round.',
    shortDescription: 'Melee slashing attacks deal 1 bleed for 2 rounds to already-wounded foes.',
    prerequisites: [
      { type: 'feat', featId: 'weapon_focus' },
      { type: 'special', description: 'Weapon Focus must apply to a slashing weapon' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'bleed_damage',
        value: 1,
        condition: {
          type: 'custom',
          params: {},
          description:
            'Target must have already taken damage this round; attack must be with a melee slashing weapon',
        },
        source: 'Thousand Cuts',
      },
    ],
    activationMode: 'conditional',
    tags: ['bleed', 'slashing', 'melee'],
  },
  {
    id: 'titans_tangle',
    name: "Titan's Tangle",
    types: ['combat'],
    source: 'Martial Arts Handbook',
    description:
      'Even creatures much bigger than you can lose their balance when you apply the appropriate leverage. When using a reach weapon to attempt a trip combat maneuver, you can target creatures up to two size categories larger than normal. With Greater Weapon Focus for that weapon, this extends to three size categories larger. Fighters with weapon training can apply this feat to any melee weapon with the reach quality from their selected weapon groups.',
    shortDescription: 'Trip creatures up to two size categories larger using a reach weapon.',
    prerequisites: [
      { type: 'ability_score', ability: 'INT', minimum: 13 },
      { type: 'feat', featId: 'combat_expertise' },
      { type: 'feat', featId: 'improved_trip' },
      { type: 'feat', featId: 'tangled_limbs' },
      { type: 'feat', featId: 'weapon_focus' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['reach weapon', 'trip', 'combat maneuver', 'size'],
  },
  {
    id: 'toppling_pileup',
    name: 'Toppling Pileup',
    types: ['combat'],
    source: 'Martial Arts Handbook',
    description:
      'As a standard action, you attempt a trip maneuver against an adjacent opponent using your full base attack bonus. If you succeed, the target falls prone and you may immediately attempt another trip check against a different foe adjacent to both you and the first target, also at your full base attack bonus. You can attempt only one additional combat maneuver per round with this feat.',
    shortDescription: 'Trip one foe and immediately attempt to trip an adjacent second foe.',
    prerequisites: [
      { type: 'ability_score', ability: 'INT', minimum: 13 },
      { type: 'feat', featId: 'combat_expertise' },
      { type: 'feat', featId: 'improved_trip' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['trip', 'combat maneuver', 'prone'],
  },
  {
    id: 'tumbling_upset',
    name: 'Tumbling Upset',
    types: ['combat'],
    source: 'Martial Arts Handbook',
    description:
      "When you succeed at an Acrobatics check to move through an enemy's space, you can spend a swift action to attempt a trip combat maneuver check against that opponent. Even if you fail this check by 10 or more, you do not fall prone.",
    shortDescription:
      'Trip a foe after tumbling through their space; cannot fall prone on failure.',
    prerequisites: [
      { type: 'ability_score', ability: 'INT', minimum: 13 },
      { type: 'feat', featId: 'combat_expertise' },
      { type: 'feat', featId: 'improved_trip' },
      { type: 'skill', skillId: 'acrobatics', ranks: 7 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['trip', 'acrobatics', 'combat maneuver'],
  },
  {
    id: 'unbalancing_blow',
    name: 'Unbalancing Blow',
    types: ['combat'],
    source: 'Martial Arts Handbook',
    description:
      'When using this feat, in addition to dealing damage normally, you force a foe damaged by your unarmed attack to attempt a Reflex saving throw (DC 10 + half your character level + your Wisdom modifier). On a failed save, the target is flat-footed, loses size bonuses to CMD against movement effects and maneuvers, and loses benefits of any active style feat stance until the beginning of your next turn. Creatures with immunity to trip are unaffected. You must declare use before rolling to attack; if the attack misses, the attempt is wasted. You can use this ability once per day per 4 character levels, but no more than once per round.',
    shortDescription:
      'Unarmed hit forces Reflex save or foe is flat-footed and loses style stance.',
    prerequisites: [
      { type: 'ability_score', ability: 'DEX', minimum: 13 },
      { type: 'ability_score', ability: 'WIS', minimum: 13 },
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'bab', minimum: 4 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['unarmed', 'flat-footed', 'style', 'saving throw'],
  },
  {
    id: 'whirling_hold',
    name: 'Whirling Hold',
    types: ['combat'],
    source: 'Martial Arts Handbook',
    description:
      'You lift your grappled foe from the ground and violently spin and disorient him. When you successfully maintain a grapple, you can forgo dealing damage, moving, pinning, or binding to instead lift and rapidly spin your opponent. After spinning, you may place the target in any adjacent square, and the target is sickened for a number of rounds equal to your Strength or Dexterity modifier (whichever is higher).',
    shortDescription: 'Spin a grappled foe to reposition them and inflict the sickened condition.',
    prerequisites: [
      { type: 'feat', featId: 'improved_grapple' },
      { type: 'feat', featId: 'improved_unarmed_strike' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['grapple', 'sickened', 'combat maneuver'],
  },
  {
    id: 'wrist_grab',
    name: 'Wrist Grab',
    types: ['combat'],
    source: 'Martial Arts Handbook',
    description:
      "When an opponent's attack misses you by 5 or more, you can attempt a disarm combat maneuver check against that foe as an immediate action.",
    shortDescription: 'Attempt to disarm a foe as an immediate action when they miss you by 5+.',
    prerequisites: [
      { type: 'ability_score', ability: 'DEX', minimum: 13 },
      { type: 'ability_score', ability: 'INT', minimum: 13 },
      { type: 'feat', featId: 'combat_expertise' },
      { type: 'feat', featId: 'combat_reflexes' },
      { type: 'feat', featId: 'improved_disarm' },
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'bab', minimum: 6 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['disarm', 'combat maneuver', 'immediate action'],
  },
];

// CHECKPOINT: last_written=wrist_grab, written=10/10, status=complete
