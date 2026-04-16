import { BonusType } from '@/types/base';
import type { FeatDefinition } from '@/types/feats';

// Ranged Tactics Toolbox (RTT) — feats original to this book that are not
// already in the database under another source file.
//
// Skipped (already in DB):
//   ace_disarm, ace_trip                → miscBooks1.ts  (RTT versions, lighter prereqs)
//   overwatch_style, overwatch_tactician,
//   overwatch_vortex                    → styleFeats.ts
//   deadeye_bowman, friendly_fire_maneuvers,
//   net_adept, net_maneuvering          → miscBooks1.ts  (prompt exclusion list)
//
// Skipped (RTT reprints of other books already in DB):
//   clustered_shots (APG), crossbow_mastery (APG), deflect_arrows (Core),
//   far_shot (Core), focused_shot (UC-extra), guided_hand (UC),
//   hammer_the_gap (UC), improved_precise_shot (Core),
//   improvised_weapon_mastery (Core), leaping_shot (UC),
//   mounted_archery (Core), net_trickery (UC), parting_shot (APG-extra),
//   pinpoint_targeting (Core), point_blank_master (UC-extra),
//   point_blank_shot (Core), precise_shot (Core), rapid_reload (Core),
//   rapid_shot (Core), ricochet_shot_deed (UC), shot_on_the_run (Core),
//   siege_engineer (UC), siege_gunner (UC), snap_shot (UC),
//   stabbing_shot (APG), wind_stance (Core)
//
// volley_fire (UC, id=volley_fire) has a mechanically different description
// from the RTT version, so the RTT version is included here as volley_fire_rtt.

export const RTT_FEATS: FeatDefinition[] = [
  {
    id: 'ranged_disarm',
    name: 'Ranged Disarm',
    description:
      'You can attempt to disarm a foe at range. As a full-round action, you can attempt a disarm combat maneuver check against a target using a ranged weapon. You take a –2 penalty on the combat maneuver check. Use your Dexterity modifier in place of your Strength modifier for this combat maneuver check. Range penalties apply to this combat maneuver check, doubled. If the target is more than 30 feet away, you also take an additional –2 penalty. If successful, you also deal damage as if you had made a successful attack. You cannot be disarmed as a result of a failed attempt.',
    shortDescription:
      'Attempt a disarm combat maneuver with a ranged weapon as a full-round action, using Dex instead of Str.',
    source: 'Ranged Tactics Toolbox',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'DEX', minimum: 13 },
      { type: 'feat', featId: 'deadly_aim' },
      { type: 'bab', minimum: 1 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['ranged', 'disarm', 'combat maneuver'],
  },
  {
    id: 'ranged_trip',
    name: 'Ranged Trip',
    description:
      'You can attempt to trip a foe at range. As a full-round action, you can attempt a trip combat maneuver check against a target using a ranged weapon. You take a –2 penalty on the combat maneuver check. Use your Dexterity modifier in place of your Strength modifier for this combat maneuver check. Range penalties apply to this combat maneuver check, doubled. If the target is more than 30 feet away, you also take an additional –2 penalty. If the trip attempt is successful, the target also takes damage as if you had made a successful attack. You cannot be knocked prone as a result of a failed attempt.',
    shortDescription:
      'Attempt a trip combat maneuver with a ranged weapon as a full-round action, using Dex instead of Str.',
    source: 'Ranged Tactics Toolbox',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'DEX', minimum: 13 },
      { type: 'feat', featId: 'deadly_aim' },
      { type: 'bab', minimum: 1 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['ranged', 'trip', 'combat maneuver'],
  },
  {
    id: 'volley_fire_rtt',
    name: 'Volley Fire',
    description:
      'You and your allies coordinate your ranged fire to overwhelm enemies. You receive a +1 bonus on ranged attack rolls for each ally who also has this feat and who made a ranged attack since the end of your last turn against a target within 15 feet of your target, to a maximum bonus of +4. In addition, allies with this feat do not provide cover to your target against your ranged attacks.',
    shortDescription:
      "+1 per ally with feat who recently attacked nearby target (max +4); allies don't grant cover.",
    source: 'Ranged Tactics Toolbox',
    verificationStatus: 'needs_review' as const,
    types: ['combat', 'teamwork'],
    prerequisites: [{ type: 'feat', featId: 'point_blank_shot' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'attack_rolls.ranged',
        value: 1,
        source: 'Volley Fire',
        condition: {
          type: 'custom',
          description:
            'Per ally with Volley Fire who attacked a target within 15 ft of your target since your last turn (max +4)',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['ranged', 'teamwork', 'coordinated fire'],
  },
];
