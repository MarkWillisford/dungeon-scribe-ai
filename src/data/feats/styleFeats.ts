import { BonusType } from '@/types/base';
import type { FeatDefinition } from '@/types/feats';

export const STYLE_FEATS: FeatDefinition[] = [
  // ── ARCHON STYLE CHAIN ──────────────────────────────────────────────────
  {
    id: 'archon_style',
    name: 'Archon Style',
    description:
      "While using this style, as a move action you can protect adjacent allies from a single opponent you currently threaten, granting those allies a +2 dodge bonus to AC against that opponent's next melee attack before your next turn. You take a –2 penalty to AC against that opponent until your next turn.",
    shortDescription: 'Protect adjacent allies with +2 dodge bonus; take –2 AC penalty vs that foe',
    source: 'Ultimate Combat',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'combat_expertise' },
      { type: 'feat', featId: 'combat_reflexes' },
      { type: 'bab', minimum: 2 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.DODGE,
        target: 'adjacent_ally_ac',
        value: 2,
        source: 'Archon Style',
        condition: {
          type: 'custom',
          description:
            'While using Archon Style; applies to adjacent allies against one designated opponent',
          params: {},
        },
      },
    ],
    activationMode: 'toggle',
    tags: ['style', 'defensive', 'ally protection'],
  },
  {
    id: 'archon_diversion',
    name: 'Archon Diversion',
    description:
      'While using Archon Style the AC penalty is reduced to –1. Once per round, if you have at least one hand free, you may redirect one melee attack targeting an adjacent ally to yourself. After the attack resolves, that ally gains an attack of opportunity against the redirected opponent.',
    shortDescription:
      'Reduce Archon Style AC penalty to –1; redirect one melee attack per round from ally to yourself',
    source: 'Ultimate Combat',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'archon_style' },
      { type: 'feat', featId: 'combat_expertise' },
      { type: 'feat', featId: 'combat_reflexes' },
      { type: 'bab', minimum: 4 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['style', 'defensive', 'ally protection'],
  },
  {
    id: 'archon_justice',
    name: 'Archon Justice',
    description:
      "You take no penalty to AC when using Archon Style, and can spend a swift action instead of a move action to activate it. Whenever you take damage from using Archon Diversion to redirect an opponent's attack toward yourself, any allies threatening your opponent can make an attack of opportunity against that opponent.",
    shortDescription:
      'No AC penalty with Archon Style; swift action activation; allies AoO when you absorb a redirected hit',
    source: 'Ultimate Combat',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'archon_diversion' },
      { type: 'feat', featId: 'archon_style' },
      { type: 'feat', featId: 'combat_expertise' },
      { type: 'feat', featId: 'combat_reflexes' },
      { type: 'bab', minimum: 8 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['style', 'defensive', 'ally protection'],
  },

  // ── ASURA STYLE CHAIN ───────────────────────────────────────────────────
  {
    id: 'asura_style',
    name: 'Asura Style',
    description:
      'When you use a monk weapon or unarmed strike to attack a creature that is casting a divine spell, the target is sickened for 1d4 rounds. A target can attempt a Fortitude save (DC = 10 + 1/2 your character level + your Wisdom modifier) to reduce the duration to 1 round.',
    shortDescription:
      'Strikes against divine spellcasters sicken them 1d4 rounds (Fort save reduces to 1)',
    source: 'Pathfinder Player Companion: Inner Sea Combat',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'ability_score', ability: 'WIS', minimum: 13 },
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'bab', minimum: 5 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['style', 'divine', 'debuff', 'unarmed'],
  },
  {
    id: 'asura_sight',
    name: 'Asura Sight',
    description:
      'When using Asura Style, you gain improved uncanny dodge as a rogue of your character level.',
    shortDescription:
      'Gain improved uncanny dodge (as rogue of your level) while using Asura Style',
    source: 'Pathfinder Player Companion: Inner Sea Combat',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'asura_style' },
      { type: 'bab', minimum: 9 },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['style', 'divine', 'defense'],
  },
  {
    id: 'asura_spellrend',
    name: 'Asura Spellrend',
    description:
      'You can replace one of your attacks at your highest base attack bonus each round with a spellrending strike. If the strike hits it deals no damage, but you can attempt to dispel a harmless divine spell affecting the target as per dispel magic, with a caster level equal to your character level. If you succeed, the target is sickened as if you had interrupted its casting with Asura Style and receives no saving throw to reduce the duration.',
    shortDescription:
      'Replace one attack to dispel a harmless divine spell on target via dispel magic',
    source: 'Pathfinder Player Companion: Inner Sea Combat',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'asura_sight' },
      { type: 'feat', featId: 'asura_style' },
      { type: 'bab', minimum: 13 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['style', 'divine', 'dispel', 'unarmed'],
  },

  // ── AZATA STYLE CHAIN ───────────────────────────────────────────────────
  {
    id: 'azata_style',
    name: 'Azata Style',
    description:
      'While using this style, during any round in which you move at least 15 feet, you gain a +1 dodge bonus to AC. This bonus lasts until the beginning of your next turn.',
    shortDescription: '+1 dodge bonus to AC when you move 15+ feet in a round',
    source: 'Pathfinder Player Companion: Chronicle of Legends',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'dodge' },
      { type: 'feat', featId: 'mobility' },
      { type: 'bab', minimum: 2 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.DODGE,
        target: 'ac',
        value: 1,
        source: 'Azata Style',
        condition: {
          type: 'custom',
          description: 'While using Azata Style and you moved at least 15 feet this round',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['style', 'mobile', 'dodge'],
  },
  {
    id: 'azata_mischief',
    name: 'Azata Mischief',
    description:
      'While using Azata Style, whenever an opponent misses you with an attack of opportunity provoked by your movement through its threatened squares, you can attempt a trip combat maneuver against that creature at the end of your turn as a swift action, provided you are still adjacent. This trip attempt does not provoke attacks of opportunity. You gain a bonus on this CMC equal to any bonuses to AC you gain against attacks of opportunity triggered by movement (such as from Mobility).',
    shortDescription:
      'Trip as swift action when movement AoO misses; trip bonus equals movement AoO AC bonus',
    source: 'Pathfinder Player Companion: Chronicle of Legends',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'agile_maneuvers' },
      { type: 'feat', featId: 'azata_style' },
      { type: 'feat', featId: 'dodge' },
      { type: 'feat', featId: 'mobility' },
      { type: 'bab', minimum: 6 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['style', 'mobile', 'trip'],
  },
  {
    id: 'azata_sprint',
    name: 'Azata Sprint',
    description:
      'While using Azata Style, your base speed increases by 10 feet and you ignore the movement penalties applied by the first 10 feet of difficult terrain you move through each round.',
    shortDescription:
      '+10 ft base speed; ignore first 10 ft of difficult terrain penalty per round',
    source: 'Pathfinder Player Companion: Chronicle of Legends',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'agile_maneuvers' },
      { type: 'feat', featId: 'azata_mischief' },
      { type: 'feat', featId: 'azata_style' },
      { type: 'feat', featId: 'dodge' },
      { type: 'feat', featId: 'mobility' },
      { type: 'feat', featId: 'wind_stance' },
      { type: 'bab', minimum: 10 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'base_speed',
        value: 10,
        source: 'Azata Sprint',
        condition: {
          type: 'custom',
          description: 'While using Azata Style',
          params: {},
        },
      },
    ],
    activationMode: 'toggle',
    tags: ['style', 'mobile', 'speed'],
  },

  // ── BARRACUDA STYLE CHAIN ───────────────────────────────────────────────
  {
    id: 'barracuda_style',
    name: 'Barracuda Style',
    description:
      "Your unarmed strikes deal normal damage underwater and you don't take penalties on attack rolls with unarmed strikes made underwater. You add your Wisdom modifier in addition to your Strength modifier on Swim checks.",
    shortDescription:
      'No underwater penalties for unarmed strikes; add Wis modifier to Swim checks',
    source: "Pathfinder Player Companion: Weapon Master's Handbook",
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'ability_score', ability: 'WIS', minimum: 13 },
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'skill', skillId: 'acrobatics', ranks: 3 },
      { type: 'skill', skillId: 'swim', ranks: 3 },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['style', 'underwater', 'unarmed'],
  },
  {
    id: 'barracuda_slam',
    name: 'Barracuda Slam',
    description:
      'With a successful Swim check you can move half your speed as a move action or your full speed as a full-round action underwater. You can run and charge underwater, though the maximum distance is half the normal maximum. When charging in water or on land, you can add twice your Strength bonus on the damage roll for your first unarmed strike that turn.',
    shortDescription:
      'Efficient underwater movement; charge unarmed strike adds 2× Str bonus to damage',
    source: "Pathfinder Player Companion: Weapon Master's Handbook",
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'ability_score', ability: 'WIS', minimum: 13 },
      { type: 'feat', featId: 'barracuda_style' },
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'skill', skillId: 'acrobatics', ranks: 5 },
      { type: 'skill', skillId: 'swim', ranks: 5 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['style', 'underwater', 'charge', 'unarmed'],
  },
  {
    id: 'barracuda_dash',
    name: 'Barracuda Dash',
    description:
      'You gain a swim speed equal to your base land speed. When you charge in water or on land and your attack hits, you can immediately make a second charge attack against a different opponent. All normal charge requirements apply. The total distance of both charges cannot exceed the normal maximum for a single charge. You cannot use pounce or similar extra-attack abilities if you use Barracuda Dash.',
    shortDescription:
      'Gain swim speed; on a successful charge hit, make a second charge attack against a different foe',
    source: "Pathfinder Player Companion: Weapon Master's Handbook",
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'ability_score', ability: 'WIS', minimum: 13 },
      { type: 'feat', featId: 'barracuda_slam' },
      { type: 'feat', featId: 'barracuda_style' },
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'skill', skillId: 'acrobatics', ranks: 7 },
      { type: 'skill', skillId: 'swim', ranks: 7 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['style', 'underwater', 'charge', 'unarmed'],
  },

  // ── BEASTMASTER STYLE CHAIN ─────────────────────────────────────────────
  {
    id: 'beastmaster_style',
    name: 'Beastmaster Style',
    description:
      'While using this style, as an immediate action you can attempt a Handle Animal check (DC = 10 + the attack roll that hit your companion) to negate a single hit against your adjacent animal companion.',
    shortDescription:
      'Immediate action Handle Animal check to negate a hit on your adjacent animal companion',
    source: "Pathfinder Player Companion: Monster Hunter's Handbook",
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'ability_score', ability: 'CHA', minimum: 13 },
      { type: 'skill', skillId: 'handle_animal', ranks: 1 },
      { type: 'special', description: 'Animal companion class feature' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['style', 'animal companion', 'defensive'],
  },
  {
    id: 'beastmaster_salvation',
    name: 'Beastmaster Salvation',
    description:
      'While using Beastmaster Style, as an immediate action you can substitute your Handle Animal check result for the saving throw result of an adjacent animal companion.',
    shortDescription:
      "Substitute your Handle Animal check for an adjacent animal companion's saving throw",
    source: "Pathfinder Player Companion: Monster Hunter's Handbook",
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'ability_score', ability: 'CHA', minimum: 13 },
      { type: 'feat', featId: 'alertness' },
      { type: 'feat', featId: 'beastmaster_style' },
      { type: 'skill', skillId: 'handle_animal', ranks: 5 },
      { type: 'skill', skillId: 'sense_motive', ranks: 5 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['style', 'animal companion', 'defensive'],
  },
  {
    id: 'beastmaster_ire',
    name: 'Beastmaster Ire',
    description:
      'While using Beastmaster Style, when an enemy damages your animal companion, both you and your animal companion gain a +2 bonus on attack rolls and a +4 bonus on damage rolls against that enemy until the end of your next turn.',
    shortDescription:
      'When a foe harms your companion, you and companion gain +2 attack/+4 damage vs that foe until your next turn',
    source: "Pathfinder Player Companion: Monster Hunter's Handbook",
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'ability_score', ability: 'CHA', minimum: 13 },
      { type: 'feat', featId: 'alertness' },
      { type: 'feat', featId: 'beastmaster_salvation' },
      { type: 'feat', featId: 'beastmaster_style' },
      { type: 'skill', skillId: 'handle_animal', ranks: 9 },
      { type: 'skill', skillId: 'sense_motive', ranks: 5 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'attack_rolls',
        value: 2,
        source: 'Beastmaster Ire',
        condition: {
          type: 'custom',
          description:
            'Against enemies that damaged your animal companion this round; until end of your next turn',
          params: {},
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'damage_rolls',
        value: 4,
        source: 'Beastmaster Ire',
        condition: {
          type: 'custom',
          description:
            'Against enemies that damaged your animal companion this round; until end of your next turn',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['style', 'animal companion', 'offensive'],
  },

  // ── BLOOD FRENZY STYLE CHAIN ─────────────────────────────────────────────
  {
    id: 'blood_frenzy_style',
    name: 'Blood Frenzy Style',
    description:
      'While using this style, you gain a +2 bonus to Strength and Constitution, and take a –2 penalty to AC. Unlike most styles, this activates as an immediate action when you take damage rather than as a swift action. Requires the aquatic subtype.',
    shortDescription:
      '+2 Str and Con, –2 AC; activated as immediate action when taking damage (aquatic subtype only)',
    source: 'Pathfinder Player Companion: Blood of the Sea',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'ability_score', ability: 'STR', minimum: 13 },
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'bab', minimum: 1 },
      { type: 'special', description: 'Aquatic subtype' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'strength',
        value: 2,
        source: 'Blood Frenzy Style',
        condition: {
          type: 'custom',
          description: 'While Blood Frenzy Style is active (aquatic subtype only)',
          params: {},
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'constitution',
        value: 2,
        source: 'Blood Frenzy Style',
        condition: {
          type: 'custom',
          description: 'While Blood Frenzy Style is active (aquatic subtype only)',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['style', 'aquatic', 'strength', 'frenzy'],
  },
  {
    id: 'blood_frenzy_strike',
    name: 'Blood Frenzy Strike',
    description:
      'While using Blood Frenzy Style, when you damage an opponent with your unarmed strikes or natural attacks, you deal an extra 1d6 points of bleed damage (does not stack with itself). Once every 1d4 rounds, you can make a single unarmed attack at a –5 penalty; if it hits, it deals an additional 2d6 bludgeoning damage.',
    shortDescription:
      'Unarmed/natural attacks add 1d6 bleed; once per 1d4 rounds make –5 attack for +2d6 bludgeoning',
    source: 'Pathfinder Player Companion: Blood of the Sea',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'ability_score', ability: 'STR', minimum: 15 },
      { type: 'feat', featId: 'blood_frenzy_style' },
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'bab', minimum: 3 },
      { type: 'special', description: 'Aquatic subtype' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['style', 'aquatic', 'bleed', 'unarmed'],
  },
  {
    id: 'blood_frenzy_assault',
    name: 'Blood Frenzy Assault',
    description:
      'While using Blood Frenzy Style during a full attack, you gain one additional unarmed or natural weapon attack per enemy within reach suffering a bleed effect. You take a –2 penalty to AC for each additional attack gained this way. The bleed damage from Blood Frenzy Strike increases to 2d6.',
    shortDescription:
      'Extra attacks vs bleeding enemies in reach (–2 AC each); Blood Frenzy Strike bleed increases to 2d6',
    source: 'Pathfinder Player Companion: Blood of the Sea',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'ability_score', ability: 'STR', minimum: 17 },
      { type: 'feat', featId: 'blood_frenzy_strike' },
      { type: 'feat', featId: 'blood_frenzy_style' },
      { type: 'feat', featId: 'bloody_assault' },
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'feat', featId: 'power_attack' },
      { type: 'bab', minimum: 6 },
      { type: 'special', description: 'Aquatic subtype' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['style', 'aquatic', 'bleed', 'full attack'],
  },

  // ── BULETTE CHARGE STYLE CHAIN ──────────────────────────────────────────
  {
    id: 'bulette_charge_style',
    name: 'Bulette Charge Style',
    description:
      'While using this style, you gain a +4 bonus on combat maneuver checks to overrun an opponent. Any magic ability or material that reduces your armor check penalty also reduces this bonus by the same amount. Characters with armor training can use this style in medium or light armor, gaining +3 or +2 respectively.',
    shortDescription: '+4 CMC bonus on overrun; reduced by armor check penalty reductions',
    source: "Pathfinder Player Companion: Armor Master's Handbook",
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'ability_score', ability: 'STR', minimum: 13 },
      { type: 'feat', featId: 'improved_overrun' },
      { type: 'feat', featId: 'power_attack' },
      { type: 'proficiency', proficiency: 'heavy armor' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'cmb_overrun',
        value: 4,
        source: 'Bulette Charge Style',
        condition: {
          type: 'custom',
          description: 'While using Bulette Charge Style in heavy armor',
          params: {},
        },
      },
    ],
    activationMode: 'toggle',
    tags: ['style', 'overrun', 'armor'],
  },
  {
    id: 'bulette_leap',
    name: 'Bulette Leap',
    description:
      'While using Bulette Charge Style, you gain a bonus on Acrobatics checks to jump equal to your Strength bonus. When you perform an overrun combat maneuver, you can attempt to overrun multiple foes, taking a cumulative –2 penalty on each successive overrun attempt in the same round. If an overrun attempt fails, you cannot make further attempts until your next round.',
    shortDescription:
      'Add Str bonus to Acrobatics jump; overrun multiple foes with cumulative –2 penalty per attempt',
    source: "Pathfinder Player Companion: Armor Master's Handbook",
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'ability_score', ability: 'STR', minimum: 15 },
      { type: 'feat', featId: 'bulette_charge_style' },
      { type: 'feat', featId: 'improved_overrun' },
      { type: 'feat', featId: 'power_attack' },
      { type: 'proficiency', proficiency: 'heavy armor' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['style', 'overrun', 'armor', 'jump'],
  },
  {
    id: 'bulette_rampage',
    name: 'Bulette Rampage',
    description:
      'While using Bulette Charge Style, whenever you succeed at an overrun combat maneuver check, the overrun target takes damage equal to 1d8 (Medium) or 1d6 (Small) + 1/2 your armor bonus to AC + 1-1/2 times your Strength bonus.',
    shortDescription: 'Successful overruns deal 1d8 + ½ armor bonus + 1½ Str bonus damage',
    source: "Pathfinder Player Companion: Armor Master's Handbook",
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'ability_score', ability: 'STR', minimum: 15 },
      { type: 'feat', featId: 'bulette_charge_style' },
      { type: 'feat', featId: 'bulette_leap' },
      { type: 'feat', featId: 'improved_overrun' },
      { type: 'feat', featId: 'power_attack' },
      { type: 'proficiency', proficiency: 'heavy armor' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['style', 'overrun', 'armor', 'damage'],
  },

  // ── BULL-CATCHER STYLE CHAIN ────────────────────────────────────────────
  {
    id: 'bull_catcher_style',
    name: 'Bull-Catcher Style',
    description:
      'While using this style, when a creature charges you, you can make a trip combat maneuver against that charging creature as a free action. This trip attempt does not provoke attacks of opportunity.',
    shortDescription: 'Free trip attempt (no AoO) against creatures that charge you',
    source: 'Pathfinder Player Companion: Wilderness Origins',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'improved_trip' },
      { type: 'bab', minimum: 3 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['style', 'trip', 'charge defense'],
  },
  {
    id: 'bull_catcher_toss',
    name: 'Bull-Catcher Toss',
    description:
      'While using Bull-Catcher Style, when you successfully trip a charging opponent, you can immediately attempt a bull rush against that creature as a free action. You gain a +2 bonus on this bull rush combat maneuver check.',
    shortDescription: 'After tripping a charger, free bull rush attempt with +2 CMC bonus',
    source: 'Pathfinder Player Companion: Wilderness Origins',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'bull_catcher_style' },
      { type: 'feat', featId: 'improved_trip' },
      { type: 'bab', minimum: 7 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'cmb_bull_rush',
        value: 2,
        source: 'Bull-Catcher Toss',
        condition: {
          type: 'custom',
          description:
            'Free bull rush following a successful trip of a charger via Bull-Catcher Style',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['style', 'trip', 'bull rush'],
  },
  {
    id: 'bull_catcher_wrangler',
    name: 'Bull-Catcher Wrangler',
    description:
      'While using Bull-Catcher Style, when you successfully bull rush a creature you first tripped (via Bull-Catcher Toss), that creature takes damage as if falling a distance equal to the number of feet you moved it, rather than standard bull rush damage.',
    shortDescription:
      'Bull rushed creatures take falling damage equal to distance moved instead of standard damage',
    source: 'Pathfinder Player Companion: Wilderness Origins',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'bull_catcher_style' },
      { type: 'feat', featId: 'bull_catcher_toss' },
      { type: 'feat', featId: 'improved_trip' },
      { type: 'bab', minimum: 11 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['style', 'trip', 'bull rush', 'damage'],
  },

  // ── CHARGING STAG STYLE CHAIN ───────────────────────────────────────────
  {
    id: 'charging_stag_style',
    name: 'Charging Stag Style',
    description:
      'While using this style, when you charge you can move through difficult terrain and squares occupied by allies without penalty. You gain a +1 dodge bonus to AC during a charge.',
    shortDescription:
      'Charge through difficult terrain and ally squares without penalty; +1 dodge AC on charges',
    source: 'Pathfinder Player Companion: Wilderness Origins',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'dodge' },
      { type: 'feat', featId: 'mobility' },
      { type: 'bab', minimum: 3 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.DODGE,
        target: 'ac',
        value: 1,
        source: 'Charging Stag Style',
        condition: {
          type: 'custom',
          description: 'While using Charging Stag Style and making a charge',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['style', 'charge', 'movement'],
  },
  {
    id: 'stag_horns',
    name: 'Stag Horns',
    description:
      'While using Charging Stag Style, when you charge and hit, your unarmed strike or natural weapon attack deals additional damage equal to twice your Strength modifier. You can make a charging attack against an opponent not in a straight line from your starting position, allowing you to curve your charge path.',
    shortDescription: 'Charge hits deal +2× Str modifier bonus damage; charge path may curve',
    source: 'Pathfinder Player Companion: Wilderness Origins',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'charging_stag_style' },
      { type: 'feat', featId: 'dodge' },
      { type: 'feat', featId: 'mobility' },
      { type: 'bab', minimum: 7 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['style', 'charge', 'damage'],
  },
  {
    id: 'stag_submission',
    name: 'Stag Submission',
    description:
      'While using Charging Stag Style, when you charge and hit, you can make a grapple or trip attempt against the target as a free action with a +2 bonus on the combat maneuver check.',
    shortDescription:
      'After a successful charge hit, free grapple or trip attempt with +2 CMC bonus',
    source: 'Pathfinder Player Companion: Wilderness Origins',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'charging_stag_style' },
      { type: 'feat', featId: 'stag_horns' },
      { type: 'feat', featId: 'dodge' },
      { type: 'feat', featId: 'mobility' },
      { type: 'bab', minimum: 11 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'cmb_grapple_or_trip',
        value: 2,
        source: 'Stag Submission',
        condition: {
          type: 'custom',
          description:
            'Free grapple or trip attempt after a successful charge hit while using Charging Stag Style',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['style', 'charge', 'grapple', 'trip'],
  },

  // ── CRASHING WAVE STYLE CHAIN ───────────────────────────────────────────
  {
    id: 'crashing_wave_style',
    name: 'Crashing Wave Style',
    description:
      'While using this style, when you successfully drag or reposition an opponent, you can move 5 feet as an immediate action during the maneuver, including into squares the opponent just vacated, even if you have already moved this round. This movement does not provoke attacks of opportunity.',
    shortDescription: 'Move 5 ft (no AoO) as an immediate action when you drag or reposition a foe',
    source: 'Ultimate Combat',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'ability_score', ability: 'WIS', minimum: 13 },
      { type: 'feat', featId: 'improved_drag' },
      { type: 'feat', featId: 'improved_reposition' },
      { type: 'feat', featId: 'improved_unarmed_strike' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['style', 'drag', 'reposition', 'unarmed'],
  },
  {
    id: 'crashing_wave_buffet',
    name: 'Crashing Wave Buffet',
    description:
      'While using Crashing Wave Style, when you drag or reposition an opponent, that opponent must make a Fortitude save (DC = 10 + 1/2 your character level + your Wisdom modifier + 2 per 5 feet of movement) or become disoriented, taking a –2 penalty on attack rolls, combat maneuver checks, and Dexterity-based skill checks until the end of its next turn.',
    shortDescription:
      'Drag/reposition forces Fort save or foe takes –2 atk/CMC/Dex skills until end of its next turn',
    source: 'Ultimate Combat',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'ability_score', ability: 'WIS', minimum: 15 },
      { type: 'feat', featId: 'crashing_wave_style' },
      { type: 'feat', featId: 'improved_drag' },
      { type: 'feat', featId: 'improved_reposition' },
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'bab', minimum: 6 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['style', 'drag', 'reposition', 'debuff'],
  },
  {
    id: 'crashing_wave_fist',
    name: 'Crashing Wave Fist',
    description:
      'While using Crashing Wave Style, when dragging or repositioning an opponent, at any point during the movement you can make one unarmed attack against that opponent using your highest attack bonus. You can make one additional attack for every 5 feet dragged or repositioned beyond the first 5 feet, taking a cumulative –5 penalty on each additional attack.',
    shortDescription:
      'Make unarmed attacks mid-drag/reposition; +1 attack per extra 5 ft at cumulative –5 penalty each',
    source: 'Ultimate Combat',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'ability_score', ability: 'WIS', minimum: 15 },
      { type: 'feat', featId: 'crashing_wave_buffet' },
      { type: 'feat', featId: 'crashing_wave_style' },
      { type: 'feat', featId: 'improved_drag' },
      { type: 'feat', featId: 'improved_reposition' },
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'bab', minimum: 9 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['style', 'drag', 'reposition', 'unarmed', 'damage'],
  },

  // ── CUDGELER STYLE CHAIN ────────────────────────────────────────────────
  {
    id: 'cudgeler_style',
    name: 'Cudgeler Style',
    description:
      'While using this style, you can deal nonlethal damage with your unarmed strikes without taking the normal –4 penalty on attack rolls. You gain a +2 bonus on attack rolls made to deal nonlethal damage.',
    shortDescription:
      'No –4 penalty for nonlethal unarmed damage; +2 bonus on nonlethal attack rolls',
    source: 'Pathfinder Player Companion: Agents of Evil',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'bab', minimum: 1 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'attack_rolls',
        value: 2,
        source: 'Cudgeler Style',
        condition: {
          type: 'custom',
          description: 'While using Cudgeler Style on nonlethal unarmed attack rolls',
          params: {},
        },
      },
    ],
    activationMode: 'toggle',
    tags: ['style', 'nonlethal', 'unarmed'],
  },
  {
    id: 'cudgeler_sweep',
    name: 'Cudgeler Sweep',
    description:
      'While using Cudgeler Style, when you deal nonlethal damage to a creature with an unarmed strike, you gain a +2 bonus on trip attempts against that creature until the end of your turn.',
    shortDescription:
      '+2 CMC bonus on trip attempts against creatures you hit with nonlethal damage this turn',
    source: 'Pathfinder Player Companion: Agents of Evil',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'cudgeler_style' },
      { type: 'feat', featId: 'improved_trip' },
      { type: 'bab', minimum: 5 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'cmb_trip',
        value: 2,
        source: 'Cudgeler Sweep',
        condition: {
          type: 'custom',
          description:
            'Against creatures you dealt nonlethal damage to this turn while using Cudgeler Style',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['style', 'nonlethal', 'trip', 'unarmed'],
  },
  {
    id: 'cudgeler_takedown',
    name: 'Cudgeler Takedown',
    description:
      'While using Cudgeler Style, when you knock a creature prone with a trip attack, you can make one additional unarmed strike against that creature as a free action. This strike deals nonlethal damage.',
    shortDescription:
      'Free nonlethal unarmed strike against a creature you just knocked prone with a trip',
    source: 'Pathfinder Player Companion: Agents of Evil',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'cudgeler_style' },
      { type: 'feat', featId: 'cudgeler_sweep' },
      { type: 'feat', featId: 'improved_trip' },
      { type: 'bab', minimum: 9 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['style', 'nonlethal', 'trip', 'free attack'],
  },

  // ── DEADHAND STYLE CHAIN ────────────────────────────────────────────────
  {
    id: 'deadhand_style',
    name: 'Deadhand Style',
    description:
      'While using this style with at least 1 ki point in your pool, you gain a +2 bonus on saves against fear effects and the DC of Intimidate checks against you increases by 4. As a swift action you can spend 1 ki—creatures hit with your unarmed strikes must succeed at a Will save (DC = 10 + 1/2 your level + your Wisdom modifier) or become shaken for a number of rounds equal to your Wisdom modifier.',
    shortDescription:
      '+2 vs fear; Intimidate DC vs you +4; spend 1 ki to shaken foes on hit (Will save)',
    source: 'Pathfinder Player Companion: Inner Sea Combat',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'ability_score', ability: 'WIS', minimum: 15 },
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'skill', skillId: 'knowledge_religion', ranks: 4 },
      { type: 'class_feature', featureName: 'ki pool' },
      { type: 'special', description: 'Nongood alignment' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'saving_throws_vs_fear',
        value: 2,
        source: 'Deadhand Style',
        condition: {
          type: 'custom',
          description: 'While using Deadhand Style with at least 1 ki remaining',
          params: {},
        },
      },
    ],
    activationMode: 'toggle',
    tags: ['style', 'ki', 'fear', 'unarmed'],
  },
  {
    id: 'deadhand_initiate',
    name: 'Deadhand Initiate',
    description:
      'While using Deadhand Style with at least 1 ki point, your bonus on saves against fear increases to +4 and the DC of Intimidate checks against you increases by 8. Additionally, if an enemy targets you with a fear effect, you can spend 1 ki as an immediate action to gain temporary hit points equal to twice your Hit Dice.',
    shortDescription:
      '+4 vs fear; Intimidate DC vs you +8; spend 1 ki to gain temp HP = 2× HD when targeted by fear',
    source: 'Pathfinder Player Companion: Inner Sea Combat',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'ability_score', ability: 'WIS', minimum: 19 },
      { type: 'feat', featId: 'deadhand_style' },
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'skill', skillId: 'knowledge_religion', ranks: 6 },
      { type: 'class_feature', featureName: 'ki pool' },
      { type: 'special', description: 'Nongood alignment' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'saving_throws_vs_fear',
        value: 4,
        source: 'Deadhand Initiate',
        condition: {
          type: 'custom',
          description:
            'While using Deadhand Style with at least 1 ki remaining (replaces base +2 from Deadhand Style)',
          params: {},
        },
      },
    ],
    activationMode: 'toggle',
    tags: ['style', 'ki', 'fear', 'temporary hp'],
  },
  {
    id: 'deadhand_master',
    name: 'Deadhand Master',
    description:
      'While using Deadhand Style, when you damage a living creature with an unarmed strike, you can spend 2 ki points to cause that creature to automatically fail its saving throw against the shaken effect from Deadhand Style, regardless of whether you spent ki for Deadhand Style this round. Creatures already shaken become frightened instead.',
    shortDescription:
      'Spend 2 ki to auto-fail Deadhand Style shaken save on hit; already-shaken targets become frightened',
    source: 'Pathfinder Player Companion: Inner Sea Combat',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'ability_score', ability: 'WIS', minimum: 23 },
      { type: 'feat', featId: 'deadhand_initiate' },
      { type: 'feat', featId: 'deadhand_style' },
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'skill', skillId: 'knowledge_religion', ranks: 14 },
      { type: 'class_feature', featureName: 'ki pool' },
      { type: 'special', description: 'Nongood alignment' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['style', 'ki', 'fear', 'unarmed'],
  },

  // ── KIRIN STYLE CHAIN ───────────────────────────────────────────────────
  {
    id: 'kirin_style',
    name: 'Kirin Style',
    description:
      "While using this style, you can spend a swift action to make a Knowledge check (DC 15 + creature's CR) to identify a single creature. Success grants a +2 dodge bonus on saving throws against that creature's attacks and a +2 dodge bonus to AC against its attacks of opportunity. These bonuses persist while using the style.",
    shortDescription:
      'Identify a foe (swift action, DC 15+CR); +2 dodge to saves and AoO AC vs identified creature',
    source: 'Ultimate Combat',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'ability_score', ability: 'INT', minimum: 13 },
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'skill', skillId: 'knowledge_arcana', ranks: 6 },
      {
        type: 'special',
        description: 'Knowledge (dungeoneering, local, nature, planes, or religion) 1 rank',
      },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.DODGE,
        target: 'saving_throws',
        value: 2,
        source: 'Kirin Style',
        condition: {
          type: 'custom',
          description:
            "While using Kirin Style; applies to saving throws against the identified creature's attacks",
          params: {},
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.DODGE,
        target: 'ac_vs_aoo',
        value: 2,
        source: 'Kirin Style',
        condition: {
          type: 'custom',
          description:
            "While using Kirin Style; applies to AC against the identified creature's attacks of opportunity",
          params: {},
        },
      },
    ],
    activationMode: 'toggle',
    tags: ['style', 'knowledge', 'identification', 'unarmed'],
  },
  {
    id: 'kirin_strike',
    name: 'Kirin Strike',
    description:
      'You gain a +2 insight bonus on Knowledge checks made to identify creatures. When using Kirin Style against a creature you have identified, you may spend a swift action after landing a melee or ranged attack to add twice your Intelligence modifier in bonus damage (minimum 2).',
    shortDescription:
      '+2 insight on creature-ID Knowledge checks; swift action adds 2× Int mod damage vs identified foes',
    source: 'Ultimate Combat',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'ability_score', ability: 'INT', minimum: 13 },
      { type: 'feat', featId: 'kirin_style' },
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'skill', skillId: 'knowledge_arcana', ranks: 9 },
      {
        type: 'special',
        description: 'Knowledge (dungeoneering, local, nature, planes, or religion) 3 ranks',
      },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.INSIGHT,
        target: 'knowledge_checks_identify',
        value: 2,
        source: 'Kirin Strike',
      },
    ],
    activationMode: 'conditional',
    tags: ['style', 'knowledge', 'identification', 'damage'],
  },
  {
    id: 'kirin_path',
    name: 'Kirin Path',
    description:
      'When making a Knowledge check to identify a creature using Kirin Style, you can take 10 even under stress and distraction. While using Kirin Style against an identified creature, if it ends its turn within your threatened area, you can spend one use of your attacks of opportunity that round to move up to 5 feet × your Intelligence modifier (minimum 1).',
    shortDescription:
      'Take 10 on Kirin identification checks; spend AoO use to move Int×5 ft when identified foe ends turn in range',
    source: 'Ultimate Combat',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'ability_score', ability: 'INT', minimum: 13 },
      { type: 'feat', featId: 'kirin_strike' },
      { type: 'feat', featId: 'kirin_style' },
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'skill', skillId: 'knowledge_arcana', ranks: 12 },
      {
        type: 'special',
        description: 'Knowledge (dungeoneering, local, nature, planes, or religion) 5 ranks',
      },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['style', 'knowledge', 'identification', 'movement'],
  },

  // ── MANTIS STYLE CHAIN ──────────────────────────────────────────────────
  {
    id: 'mantis_style',
    name: 'Mantis Style',
    description:
      'You gain one additional Stunning Fist attempt per day. While using this style, you gain a +2 bonus to the DC of effects you deliver with your Stunning Fist.',
    shortDescription: '+1 Stunning Fist use/day; +2 to Stunning Fist DC while in style',
    source: 'Ultimate Combat',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'feat', featId: 'stunning_fist' },
      { type: 'skill', skillId: 'heal', ranks: 3 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'stunning_fist_dc',
        value: 2,
        source: 'Mantis Style',
        condition: {
          type: 'custom',
          description: 'While using Mantis Style',
          params: {},
        },
      },
    ],
    activationMode: 'toggle',
    tags: ['style', 'stunning fist', 'unarmed'],
  },
  {
    id: 'mantis_wisdom',
    name: 'Mantis Wisdom',
    description:
      'Non-monk class levels count as half their value when determining Stunning Fist effects per the monk class feature. You can use a standard action and a successful melee touch attack to remove any Stunning Fist effect you applied to a target. While using Mantis Style, you gain a +2 bonus on unarmed attack rolls on which you use Stunning Fist attempts.',
    shortDescription:
      'Non-monk levels count half for Stunning Fist; remove effects via touch; +2 attack on Stunning Fist strikes',
    source: 'Ultimate Combat',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'feat', featId: 'mantis_style' },
      { type: 'feat', featId: 'stunning_fist' },
      { type: 'skill', skillId: 'heal', ranks: 6 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'attack_rolls',
        value: 2,
        source: 'Mantis Wisdom',
        condition: {
          type: 'custom',
          description:
            'While using Mantis Style on unarmed strikes that expend Stunning Fist attempts',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['style', 'stunning fist', 'unarmed'],
  },
  {
    id: 'mantis_torment',
    name: 'Mantis Torment',
    description:
      'You gain one additional Stunning Fist attempt per day. While using Mantis Style, you can expend two daily Stunning Fist uses on a single unarmed attack. On a hit, the target must save or become dazzled and staggered with crippling pain until the start of your next turn, then fatigued afterward.',
    shortDescription:
      '+1 Stunning Fist use/day; expend 2 uses on one attack to dazzle and stagger, then fatigue target',
    source: 'Ultimate Combat',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'feat', featId: 'mantis_style' },
      { type: 'feat', featId: 'mantis_wisdom' },
      { type: 'feat', featId: 'stunning_fist' },
      { type: 'skill', skillId: 'heal', ranks: 9 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['style', 'stunning fist', 'unarmed', 'debuff'],
  },

  // ── OVERWATCH STYLE CHAIN ───────────────────────────────────────────────
  {
    id: 'overwatch_style',
    name: 'Overwatch Style',
    description:
      'As a full-round action, you can ready two separate ranged attacks with your selected weapon, each with distinct triggering conditions. You take a –2 penalty on attack rolls for these readied actions. If you have the weapon training class feature for bows, crossbows, or firearms, you can apply this style to any weapon in that category.',
    shortDescription: 'Ready two ranged attacks as a full-round action at –2 to hit',
    source: 'Pathfinder Player Companion: Ranged Tactics Toolbox',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'precise_shot' },
      { type: 'feat', featId: 'rapid_shot' },
      { type: 'special', description: 'Weapon Focus with the chosen ranged weapon' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['style', 'ranged', 'readied action'],
  },
  {
    id: 'overwatch_tactician',
    name: 'Overwatch Tactician',
    description:
      'While using Overwatch Style, you can ready two ranged attacks as a standard action rather than a full-round action.',
    shortDescription:
      'Ready two ranged attacks as a standard action instead of a full-round action',
    source: 'Pathfinder Player Companion: Ranged Tactics Toolbox',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'overwatch_style' },
      { type: 'feat', featId: 'precise_shot' },
      { type: 'feat', featId: 'rapid_shot' },
      { type: 'special', description: 'Weapon Focus with the chosen ranged weapon' },
      { type: 'bab', minimum: 6 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['style', 'ranged', 'readied action'],
  },
  {
    id: 'overwatch_vortex',
    name: 'Overwatch Vortex',
    description:
      'While using Overwatch Style, as a full-round action you can ready up to four ranged attacks, each with its own triggering event. You take a –2 penalty on attack rolls made with these readied actions.',
    shortDescription: 'Ready up to four ranged attacks as a full-round action at –2 to hit each',
    source: 'Pathfinder Player Companion: Ranged Tactics Toolbox',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'overwatch_style' },
      { type: 'feat', featId: 'overwatch_tactician' },
      { type: 'feat', featId: 'precise_shot' },
      { type: 'feat', featId: 'rapid_shot' },
      { type: 'special', description: 'Weapon Focus with the chosen ranged weapon' },
      { type: 'bab', minimum: 11 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['style', 'ranged', 'readied action'],
  },

  // ── SNAPPING TURTLE STYLE CHAIN ─────────────────────────────────────────
  {
    id: 'snapping_turtle_style',
    name: 'Snapping Turtle Style',
    description:
      'While using this style with at least one hand free, you gain a +1 shield bonus to AC.',
    shortDescription: '+1 shield bonus to AC while using the style with one hand free',
    source: 'Ultimate Combat',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'bab', minimum: 1 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.SHIELD,
        target: 'ac',
        value: 1,
        source: 'Snapping Turtle Style',
        condition: {
          type: 'custom',
          description: 'While using Snapping Turtle Style with at least one hand free',
          params: {},
        },
      },
    ],
    activationMode: 'toggle',
    tags: ['style', 'defensive', 'shield bonus', 'unarmed'],
  },
  {
    id: 'snapping_turtle_clutch',
    name: 'Snapping Turtle Clutch',
    description:
      'While using Snapping Turtle Style, the shield bonus from the style also applies to your CMD and touch AC. Whenever an opponent misses you with a melee attack while using this style, you can use an immediate action to attempt a grapple combat maneuver against that opponent at a –2 penalty.',
    shortDescription:
      'Style shield bonus extends to CMD and touch AC; immediate-action grapple (–2 CMC) when foe misses',
    source: 'Ultimate Combat',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'snapping_turtle_style' },
      { type: 'feat', featId: 'improved_grapple' },
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'bab', minimum: 3 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['style', 'defensive', 'grapple', 'unarmed'],
  },
  {
    id: 'snapping_turtle_shell',
    name: 'Snapping Turtle Shell',
    description:
      'While using Snapping Turtle Style, the shield bonus from the style increases to +2. Your enemies take a –4 penalty on critical hit confirmation rolls against you.',
    shortDescription:
      'Style shield bonus increases to +2; enemies take –4 on critical confirmation rolls vs you',
    source: 'Ultimate Combat',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'snapping_turtle_clutch' },
      { type: 'feat', featId: 'snapping_turtle_style' },
      { type: 'feat', featId: 'improved_grapple' },
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'bab', minimum: 5 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.SHIELD,
        target: 'ac',
        value: 2,
        source: 'Snapping Turtle Shell',
        condition: {
          type: 'custom',
          description: 'While using Snapping Turtle Style with one hand free (replaces base +1)',
          params: {},
        },
      },
    ],
    activationMode: 'toggle',
    tags: ['style', 'defensive', 'shield bonus', 'critical'],
  },

  // ── WOLF STYLE CHAIN ────────────────────────────────────────────────────
  {
    id: 'wolf_style',
    name: 'Wolf Style',
    description:
      "While using this style, whenever you deal at least 10 points of damage to a foe with an attack of opportunity, that foe's base speed decreases by 5 feet until the end of its next turn.",
    shortDescription: 'AoOs dealing 10+ damage reduce foe speed by 5 ft until end of its next turn',
    source: 'Ultimate Combat',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'ability_score', ability: 'WIS', minimum: 13 },
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'skill', skillId: 'knowledge_nature', ranks: 3 },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['style', 'attack of opportunity', 'speed reduction'],
  },
  {
    id: 'wolf_trip',
    name: 'Wolf Trip',
    description:
      'While using Wolf Style, you gain a +2 bonus when you attempt a trip combat maneuver as part of an attack of opportunity.',
    shortDescription:
      '+2 CMC bonus on trip attempts made as attacks of opportunity while in Wolf Style',
    source: 'Ultimate Combat',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'ability_score', ability: 'WIS', minimum: 15 },
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'feat', featId: 'wolf_style' },
      { type: 'skill', skillId: 'knowledge_nature', ranks: 6 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'cmb_trip',
        value: 2,
        source: 'Wolf Trip',
        condition: {
          type: 'custom',
          description:
            'While using Wolf Style; only on trip attempts made as attacks of opportunity',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['style', 'attack of opportunity', 'trip'],
  },
  {
    id: 'wolf_savage',
    name: 'Wolf Savage',
    description:
      'While using Wolf Style, when you deal at least 10 points of damage to a prone opponent with a natural weapon or unarmed strike, as a swift action you can savage that creature. The creature must succeed at a Fortitude save (DC = 10 + 1/2 your character level + your Wisdom modifier) or be disfigured, suffering a permanent –2 penalty to Charisma.',
    shortDescription:
      'Swift action on 10+ damage to prone foe: Fort save or permanent –2 Cha penalty',
    source: 'Ultimate Combat',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'ability_score', ability: 'WIS', minimum: 17 },
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'feat', featId: 'wolf_style' },
      { type: 'feat', featId: 'wolf_trip' },
      { type: 'skill', skillId: 'knowledge_nature', ranks: 9 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['style', 'attack of opportunity', 'trip', 'debuff'],
  },
];
