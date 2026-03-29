import { BonusType } from '@/types/base';
import type { FeatDefinition } from '@/types/feats';

export const MARTIAL_ARTS_FEATS: FeatDefinition[] = [
  // ── IMPROVISED WEAPON CHAIN ─────────────────────────────────────────────
  {
    id: 'arming_grab',
    name: 'Arming Grab',
    types: ['combat'],
    source: 'Martial Arts Handbook',
    description:
      'When disarming while unarmed, you eliminate the standard -4 penalty on the combat maneuver check. If you successfully disarm an opponent while unarmed, you may pick up the disarmed weapon and wield it as a trained fighter until the end of your next turn. If you are already proficient with the disarmed weapon type, you gain a +2 morale bonus on attack rolls with it until the end of your next turn.',
    shortDescription: 'Disarm without penalty; wield the grabbed weapon proficiently this turn',
    prerequisites: [
      { type: 'ability_score', ability: 'INT', minimum: 13 },
      { type: 'feat', featId: 'catch_off_guard' },
      { type: 'feat', featId: 'combat_expertise' },
      { type: 'feat', featId: 'improved_disarm' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.MORALE,
        target: 'attack_roll',
        value: 2,
        source: 'Arming Grab',
        condition: {
          type: 'custom',
          description:
            'When wielding a weapon grabbed via successful unarmed disarm, if already proficient with that weapon type',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['disarm', 'improvised', 'unarmed'],
  },

  // ── CHAKRA BLOCKING CHAIN ────────────────────────────────────────────────
  {
    id: 'block_chakras',
    name: 'Block Chakras',
    types: ['combat'],
    source: 'Martial Arts Handbook',
    description:
      'By spending a standard action and 1 ki point, you make an unarmed strike targeting one of three lower chakras (root, sacral, or navel) that you can personally open. On a successful hit dealing damage, the target experiences chakra-specific effects unless it succeeds at a Fortitude save (DC = 10 + half your character level + your ki pool ability modifier). Root Chakra: Reduces target DR by 10 for 1 minute (success: DR reduced by 5 for 1 round). Sacral Chakra: Halves all movement speeds for 1 minute; flying creatures may attempt Fly checks to fall safely (success: 1 round). Navel Chakra: Imposes -2 penalty on attack/damage rolls and reduces spell/ability DCs by 2 for 1 minute (success: effects last 1 round).',
    shortDescription: 'Spend ki to block lower chakras, imposing DR, movement, or attack penalties',
    prerequisites: [
      { type: 'special', description: 'Psychic Sensitivity or levels in an occult class' },
      { type: 'class_feature', featureName: "brawler's flurry or monk's flurry of blows" },
      { type: 'class_feature', featureName: 'ki pool' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['ki', 'unarmed', 'occult', 'debuff'],
  },

  {
    id: 'block_upper_chakras',
    name: 'Block Upper Chakras',
    types: ['combat'],
    source: 'Martial Arts Handbook',
    description:
      'This feat expands chakra-blocking to four additional targets: heart, throat, brow, and crown chakras (provided you can open each one). Heart: Prevents hit point recovery (fast healing, regeneration) for 1 minute; success allows half recovery for 1 round. Throat: Silences target and imposes 20% failure chance on thought-component spellcasting for 1 minute; success: 50% failure for 1 round. Brow: Blinds target for 1 minute, removing special vision; success: removes special vision for 1 round. Crown: Target rolls twice and uses the lower result on all d20 rolls for 1 round and on the first attack/caster level check each round for 1 minute; success: applies only to the next d20 roll.',
    shortDescription: 'Extend chakra blocking to heart, throat, brow, and crown chakras',
    prerequisites: [
      { type: 'feat', featId: 'block_chakras' },
      { type: 'special', description: 'Psychic Sensitivity or levels in an occult class' },
      { type: 'class_feature', featureName: "brawler's flurry or monk's flurry of blows" },
      { type: 'class_feature', featureName: 'ki pool' },
      { type: 'level', minimum: 8 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['ki', 'unarmed', 'occult', 'debuff'],
  },

  // ── COMBINATION FEATS ────────────────────────────────────────────────────
  {
    id: 'combat_rhythm',
    name: 'Combat Rhythm',
    types: ['combat'],
    source: 'Martial Arts Handbook',
    description:
      'When you deal damage with a melee attack to an opponent you already damaged this round, you may reduce any voluntary penalties to melee attack rolls by 1 point (minimum 0) until the start of your next turn. This reduction stacks with itself for each successive hit against the same target. Examples of voluntary penalties include those from Power Attack.',
    shortDescription:
      'Each successive hit on the same foe reduces your voluntary attack penalties by 1',
    prerequisites: [{ type: 'bab', minimum: 6 }],
    effects: [],
    activationMode: 'conditional',
    tags: ['combination', 'attack'],
  },

  {
    id: 'cracking_the_shell',
    name: 'Cracking the Shell',
    types: ['combat'],
    source: 'Martial Arts Handbook',
    description:
      "When you deal damage with a melee piercing weapon attack against an opponent you already damaged this round, you may reduce that target's spell resistance or energy resistances by 1 until the beginning of your next turn. This reduction stacks with itself.",
    shortDescription:
      "Each successive piercing hit reduces the target's SR or energy resistance by 1",
    prerequisites: [
      { type: 'feat', featId: 'weapon_focus' },
      { type: 'special', description: 'Weapon Focus must apply to a piercing weapon' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['combination', 'piercing', 'resistance'],
  },

  {
    id: 'crippling_thrust',
    name: 'Crippling Thrust',
    types: ['combat'],
    source: 'Martial Arts Handbook',
    description:
      "As a standard action, make a single melee attack with your chosen piercing weapon. If you hit, the target's movement speed is halved until the start of your next turn. At BAB +11, the target's movement is so hampered that even a 5-foot step provokes an attack of opportunity from you. At BAB +16, the target must also succeed at a Reflex save (DC = 10 + your BAB) or become entangled; only one movement speed reduction applies. This feat's benefits can be used only once per minute.",
    shortDescription:
      'Standard action piercing strike halves target movement; upgrades at BAB +11 and +16',
    prerequisites: [
      { type: 'feat', featId: 'weapon_focus' },
      { type: 'special', description: 'Weapon Focus must apply to a piercing weapon' },
      { type: 'bab', minimum: 6 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['piercing', 'debuff', 'movement'],
  },

  {
    id: 'crushing_impact',
    name: 'Crushing Impact',
    types: ['combat'],
    source: 'Martial Arts Handbook',
    description:
      'When you successfully bull rush an opponent and its movement stops due to a solid object or barrier, you deal unarmed strike damage to the target provided it remains within your threatened area. If the bull rush was made as part of a charge action, you gain a +2 bonus on the damage roll.',
    shortDescription: 'Bull rush into a barrier deals unarmed strike damage; +2 damage if charging',
    prerequisites: [
      { type: 'ability_score', ability: 'STR', minimum: 13 },
      { type: 'feat', featId: 'improved_bull_rush' },
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'feat', featId: 'power_attack' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'damage_roll',
        value: 2,
        source: 'Crushing Impact',
        condition: {
          type: 'custom',
          description: 'When bull rush was made as part of a charge action',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['bull_rush', 'unarmed', 'grapple'],
  },

  {
    id: 'domino_crash',
    name: 'Domino Crash',
    types: ['combat'],
    source: 'Martial Arts Handbook',
    description:
      "When you successfully reposition an opponent into a square occupied by another creature, you can attempt a combat maneuver check as an immediate action at a -4 penalty to reposition that second creature. If successful, the secondary target moves 5 feet in the direction of the original target's movement, plus an additional 5 feet for every 5 by which you exceed its CMD. Without the Greater Reposition feat, this secondary movement does not provoke attacks of opportunity. If your check fails, your original target's movement stops in front of the secondary creature.",
    shortDescription: 'Reposition a foe into another creature; immediately shove that creature too',
    prerequisites: [
      { type: 'ability_score', ability: 'INT', minimum: 13 },
      { type: 'feat', featId: 'combat_expertise' },
      { type: 'feat', featId: 'improved_reposition' },
      { type: 'feat', featId: 'whipcrack' },
      { type: 'bab', minimum: 6 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['reposition', 'maneuver'],
  },

  {
    id: 'dramatic_slam',
    name: 'Dramatic Slam',
    types: ['combat'],
    source: 'Martial Arts Handbook',
    description:
      'While you are using Savage Slam, if you succeed at your grapple combat maneuver check to knock the opponent prone, you can spend a swift action to attempt an Intimidate check to demoralize foes within 30 feet who could see your attack.',
    shortDescription:
      'Knocking prone with Savage Slam lets you demoralize nearby witnesses as a swift action',
    prerequisites: [
      { type: 'feat', featId: 'dazzling_display' },
      { type: 'feat', featId: 'improved_grapple' },
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'feat', featId: 'savage_slam' },
      { type: 'feat', featId: 'weapon_focus' },
      { type: 'bab', minimum: 9 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['grapple', 'intimidate', 'demoralize'],
  },

  {
    id: 'dragonfly_flight',
    name: 'Dragonfly Flight',
    types: ['combat', 'style'],
    source: 'Martial Arts Handbook',
    description:
      'While using Dragonfly Style, you may attempt an Acrobatics check to perform a high jump as a move action, then immediately gain the benefits of the glide spell for 1 round. If your standard action remains unused after initiating Dragonfly Flight to jump and begin gliding, you can charge while airborne following standard charging rules that apply when only a standard action is available.',
    shortDescription:
      'Jump then glide as a move action; may charge while airborne with remaining standard action',
    prerequisites: [
      { type: 'ability_score', ability: 'DEX', minimum: 15 },
      { type: 'ability_score', ability: 'WIS', minimum: 15 },
      { type: 'feat', featId: 'dragonfly_style' },
      { type: 'feat', featId: 'dragonfly_wings' },
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'skill', skillId: 'acrobatics', ranks: 10 },
      { type: 'skill', skillId: 'climb', ranks: 10 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['style', 'movement', 'aerial'],
  },

  {
    id: 'eroding_strikes',
    name: 'Eroding Strikes',
    types: ['combat'],
    source: 'Martial Arts Handbook',
    description:
      "When you deal damage with a melee attack using a bludgeoning weapon against an opponent you already damaged this round, you may reduce the value of that target's damage reduction by 1 until the beginning of your next turn. This reduction stacks with itself.",
    shortDescription: "Each successive bludgeoning hit reduces the target's DR by 1",
    prerequisites: [
      { type: 'feat', featId: 'weapon_focus' },
      { type: 'special', description: 'Weapon Focus must apply to a bludgeoning weapon' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['combination', 'bludgeoning', 'dr'],
  },

  {
    id: 'finishing_cascade',
    name: 'Finishing Cascade',
    types: ['combat'],
    source: 'Martial Arts Handbook',
    description:
      "The first time in a round you use a combination feat to apply a reduction or penalty to yourself or an enemy, you can double the feat's numerical modifier. This doubling effect applies only to the modifier itself and does not affect other aspects such as damage output. For example, when using Combat Rhythm, the reduction becomes -2 instead of -1.",
    shortDescription: 'First combination feat used each round doubles its numerical modifier',
    prerequisites: [
      { type: 'bab', minimum: 11 },
      { type: 'special', description: 'At least one combination feat' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['combination', 'enhancement'],
  },

  {
    id: 'follow_up_strike',
    name: 'Follow-Up Strike',
    types: ['combat'],
    source: 'Martial Arts Handbook',
    description:
      'Whenever you succeed at a combat maneuver check to disarm an opponent, you can spend a swift action to make an unarmed strike attack at your highest base attack bonus against the target you disarmed.',
    shortDescription: 'After a successful disarm, spend a swift action to make an unarmed strike',
    prerequisites: [
      { type: 'ability_score', ability: 'INT', minimum: 13 },
      { type: 'feat', featId: 'combat_expertise' },
      { type: 'feat', featId: 'improved_disarm' },
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'bab', minimum: 6 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['disarm', 'unarmed'],
  },

  {
    id: 'gather_might',
    name: 'Gather Might',
    types: ['combat'],
    source: 'Martial Arts Handbook',
    description:
      'When you gather power, instead of reducing the burn cost of a blast wild talent, you can send elemental energy flowing through your body to gain a +2 alchemical bonus to Strength, Dexterity, and Constitution until the end of your turn for each point of burn reduction your gather power would grant (maximum +10 when spending a full round plus a move action to gather power with the Supercharge class feature).',
    shortDescription:
      'Convert gather power burn reduction into +2 alchemical bonus to STR/DEX/CON per point',
    prerequisites: [
      { type: 'class_feature', featureName: 'gather power' },
      { type: 'level', minimum: 8, class: 'kineticist' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.ALCHEMICAL,
        target: 'STR_DEX_CON',
        value: 2,
        source: 'Gather Might',
        condition: {
          type: 'custom',
          description:
            'Per point of burn reduction from gather power, instead of reducing burn cost; maximum +10',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['kineticist', 'elemental', 'ability_score'],
  },

  {
    id: 'grab_and_go',
    name: 'Grab and Go',
    types: ['combat'],
    source: 'Martial Arts Handbook',
    description:
      'As a free action, you may retrieve an unattended object during movement without triggering attacks of opportunity. If you have the Throw Anything feat, you can grab multiple closely gathered items that fit in one hand (such as stacked plates) up to your Dexterity modifier (minimum 1). A free hand is required to use this ability.',
    shortDescription:
      'Pick up unattended objects during movement as a free action without provoking AoO',
    prerequisites: [
      { type: 'feat', featId: 'catch_off_guard' },
      { type: 'bab', minimum: 1 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['improvised', 'movement'],
  },

  {
    id: 'improvisational_focus',
    name: 'Improvisational Focus',
    types: ['combat'],
    source: 'Martial Arts Handbook',
    description:
      'You gain a +1 bonus on attack rolls made with improvised weapons and are treated as proficient with improvised weapons. You are also treated as having Weapon Focus with improvised weapons for the purpose of meeting the prerequisites of other feats such as Weapon Specialization. Thrown splash weapons are not considered improvised weapons for the purposes of this feat.',
    shortDescription:
      '+1 attack with improvised weapons; count as proficient and as having Weapon Focus',
    prerequisites: [
      { type: 'feat', featId: 'catch_off_guard' },
      { type: 'bab', minimum: 1 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'attack_roll',
        value: 1,
        source: 'Improvisational Focus',
        condition: {
          type: 'custom',
          description: 'When attacking with an improvised weapon (not thrown splash weapons)',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['improvised', 'attack'],
  },

  {
    id: 'improvised_defenses',
    name: 'Improvised Defenses',
    types: ['combat'],
    source: 'Martial Arts Handbook',
    description:
      'You gain a +1 shield bonus to AC when you are wielding an improvised weapon and have your other hand free.',
    shortDescription:
      '+1 shield bonus to AC when wielding an improvised weapon with the other hand free',
    prerequisites: [
      { type: 'feat', featId: 'catch_off_guard' },
      { type: 'bab', minimum: 1 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.SHIELD,
        target: 'ac',
        value: 1,
        source: 'Improvised Defenses',
        condition: {
          type: 'custom',
          description: 'When wielding an improvised weapon with other hand free',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['improvised', 'defense', 'shield'],
  },

  // ── LINNORM HUNTER STYLE CHAIN ────────────────────────────────────────────
  {
    id: 'linnorm_hunter_coordination',
    name: 'Linnorm Hunter Coordination',
    types: ['combat', 'teamwork'],
    source: 'Martial Arts Handbook',
    description:
      "When you and an ally who also has this feat both use Linnorm Hunter Style while threatening the same enemy, you can make one melee attack at your highest base attack bonus as a full-round action. If your attack is successful, you deal extra damage equal to the damage of one of your ally's natural attacks. This bonus damage does not multiply on a critical hit. Animal companions with an Intelligence score of 1 or 2 can take this feat.",
    shortDescription:
      "Full-round action melee attack deals extra damage equal to ally's natural attack damage",
    prerequisites: [
      { type: 'ability_score', ability: 'CHA', minimum: 13 },
      { type: 'ability_score', ability: 'DEX', minimum: 13 },
      { type: 'feat', featId: 'dodge' },
      { type: 'feat', featId: 'linnorm_hunter_retreat' },
      { type: 'feat', featId: 'linnorm_hunter_style' },
      { type: 'bab', minimum: 6 },
      { type: 'special', description: 'Must have or be an animal companion' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['teamwork', 'animal_companion', 'style'],
  },

  {
    id: 'linnorm_hunter_retreat',
    name: 'Linnorm Hunter Retreat',
    types: ['combat', 'teamwork'],
    source: 'Martial Arts Handbook',
    description:
      'When an ally who also has this feat uses Linnorm Hunter Style and successfully hits with a melee attack, you may move up to 5 feet as an immediate action. This movement does not provoke attacks of opportunity from the target that was hit. Animal companions with an Intelligence score of 1 or 2 can take this feat.',
    shortDescription: 'Move 5 feet as an immediate action when a Linnorm Hunter ally hits',
    prerequisites: [
      { type: 'ability_score', ability: 'CHA', minimum: 13 },
      { type: 'ability_score', ability: 'DEX', minimum: 13 },
      { type: 'feat', featId: 'dodge' },
      { type: 'feat', featId: 'linnorm_hunter_style' },
      { type: 'bab', minimum: 4 },
      { type: 'special', description: 'Must have or be an animal companion' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['teamwork', 'animal_companion', 'style', 'movement'],
  },

  {
    id: 'linnorm_hunter_style',
    name: 'Linnorm Hunter Style',
    types: ['combat', 'style', 'teamwork'],
    source: 'Martial Arts Handbook',
    description:
      'Once per round while using this style, when an ally who also has this feat hits a target that you both threaten with a melee attack, you gain a +2 bonus on attacks of opportunity made against that target for 1 round. Additionally, enemies that provoke attacks of opportunity from your ally also provoke them from you, provided you threaten them, bypassing normal restrictions on opportunity attacks. Animal companions with an Intelligence score of 1 or 2 can take this feat.',
    shortDescription:
      "Ally hits grant +2 AoO bonus; share ally's AoO triggers against threatened foes",
    prerequisites: [
      { type: 'ability_score', ability: 'CHA', minimum: 13 },
      { type: 'special', description: 'Must have or be an animal companion' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'attack_of_opportunity',
        value: 2,
        source: 'Linnorm Hunter Style',
        condition: {
          type: 'custom',
          description:
            'While using Linnorm Hunter Style; once per round when an ally with this feat hits a target you both threaten',
          params: {},
        },
      },
    ],
    activationMode: 'toggle',
    tags: ['style', 'teamwork', 'animal_companion', 'attack_of_opportunity'],
  },

  {
    id: 'makeshift_maneuvers',
    name: 'Makeshift Maneuvers',
    types: ['combat'],
    source: 'Martial Arts Handbook',
    description:
      'When you wield an improvised weapon, it gains the disarm and trip weapon special properties.',
    shortDescription: 'Improvised weapons gain the disarm and trip weapon properties',
    prerequisites: [
      { type: 'feat', featId: 'catch_off_guard' },
      { type: 'bab', minimum: 1 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['improvised', 'disarm', 'trip'],
  },

  {
    id: 'meteor_swing',
    name: 'Meteor Swing',
    types: ['combat'],
    source: 'Martial Arts Handbook',
    description:
      "As a standard action, make a single melee attack with your chosen bludgeoning weapon. If it connects, the target must succeed at a Reflex save (DC = 10 + your base attack bonus) or lose the ability to make attacks of opportunity until your next turn begins. At BAB +11, you may instead remove the target's Dexterity bonus to AC. At BAB +16, you may instead render the target flat-footed. This feat's benefits can be used only once per minute.",
    shortDescription: 'Standard action bludgeoning attack imposes escalating debuffs based on BAB',
    prerequisites: [
      { type: 'feat', featId: 'weapon_focus' },
      { type: 'special', description: 'Weapon Focus must apply to a bludgeoning weapon' },
      { type: 'bab', minimum: 6 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['bludgeoning', 'debuff'],
  },

  {
    id: 'numbing_blow',
    name: 'Numbing Blow',
    types: ['combat'],
    source: 'Martial Arts Handbook',
    description:
      'When you successfully disarm an opponent, they must make a Fortitude save (DC = 10 + your base attack bonus). If they fail, they are hampered by the pain of the blow for 1 round. During this time, the target cannot use the limb(s) that held the disarmed weapon for wielding weapons or shields, casting spells with somatic components, or manipulating objects. This qualifies as a pain effect.',
    shortDescription:
      'Successful disarm forces Fortitude save or the target cannot use the disarmed limb for 1 round',
    prerequisites: [
      { type: 'ability_score', ability: 'INT', minimum: 13 },
      { type: 'ability_score', ability: 'STR', minimum: 13 },
      { type: 'feat', featId: 'combat_expertise' },
      { type: 'feat', featId: 'improved_disarm' },
      { type: 'feat', featId: 'power_attack' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['disarm', 'pain', 'debuff'],
  },

  // ── OCTOPUS STYLE CHAIN ──────────────────────────────────────────────────
  {
    id: 'octopus_focus',
    name: 'Octopus Focus',
    types: ['combat'],
    source: 'Martial Arts Handbook',
    description:
      'While using Octopus Style, you gain a cumulative +1 bonus on melee attack rolls for each enemy currently threatening you, capped at your Dexterity modifier. Additionally, when attempting a grapple without two free hands, you incur only a -2 penalty on combat maneuver checks rather than the standard -4 penalty.',
    shortDescription:
      '+1 melee attack per threatening enemy (max DEX bonus); -2 rather than -4 for one-hand grapple',
    prerequisites: [
      { type: 'ability_score', ability: 'DEX', minimum: 13 },
      { type: 'feat', featId: 'dodge' },
      { type: 'feat', featId: 'octopus_style' },
      { type: 'skill', skillId: 'acrobatics', ranks: 3 },
      { type: 'skill', skillId: 'perception', ranks: 3 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'melee_attack_roll',
        value: 1,
        source: 'Octopus Focus',
        condition: {
          type: 'custom',
          description:
            'While using Octopus Style; cumulative +1 per enemy threatening you, maximum equal to your Dexterity modifier',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['style', 'grapple', 'multi-threat'],
  },

  {
    id: 'octopus_style',
    name: 'Octopus Style',
    types: ['combat', 'style'],
    source: 'Martial Arts Handbook',
    description:
      'When using this fighting style, you can expend a move action to designate a number of opponents equal to your Dexterity modifier (among those you can perceive). Those designated adversaries cannot flank you until the start of your next turn.',
    shortDescription:
      'Move action: prevent a number of perceived foes equal to DEX modifier from flanking you',
    prerequisites: [
      { type: 'ability_score', ability: 'DEX', minimum: 13 },
      { type: 'feat', featId: 'dodge' },
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'skill', skillId: 'acrobatics', ranks: 1 },
      { type: 'skill', skillId: 'perception', ranks: 1 },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['style', 'flanking', 'defense'],
  },
];

// CHECKPOINT: last_written=octopus_style, written=25/25, status=complete
