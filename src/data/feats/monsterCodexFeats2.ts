import type { FeatDefinition } from '@/types/feats';
import { BonusType } from '@/types/base';

export const MONSTER_CODEX_FEATS_2: FeatDefinition[] = [
  {
    id: 'ogre_crush',
    name: 'Ogre Crush',
    types: ['general'],
    source: 'Monster Codex',
    description:
      'Your unarmed strike damage increases by one step when you are grappling creatures smaller than you. You also gain the constrict special ability, dealing an amount of damage equal to either the slam damage for a creature of your size or your unarmed strike damage, whichever is greater.',
    shortDescription:
      'Increased unarmed damage and constrict ability when grappling smaller creatures.',
    prerequisites: [
      { type: 'ability_score', ability: 'STR', minimum: 25 },
      { type: 'feat', featId: 'improved_grapple' },
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'special', description: 'Ogre race' },
      { type: 'special', description: 'Size Large or larger' },
    ],
    effects: [],
    activationMode: 'conditional',
  },
  {
    id: 'old_as_dust',
    name: 'Old as Dust',
    types: ['general'],
    source: 'Monster Codex',
    description:
      'You have been dead for so long you have become quite difficult to kill. When reduced to 0 hit points, you cannot be killed unless your body is completely destroyed with fire, doused in holy water, or damaged by a cure spell or channeled positive energy after reaching 0 HP. At 0 HP, you remain unconscious until healed or until the following midnight, when you regain 1 hit point per Hit Die and awaken.',
    shortDescription:
      'Cannot be permanently killed except by fire, holy water, or positive energy after reaching 0 HP.',
    prerequisites: [
      { type: 'feat', featId: 'sleeper' },
      { type: 'feat', featId: 'warren_digger' },
      { type: 'special', description: 'Must have been a ghoul for at least 500 years' },
    ],
    effects: [],
    activationMode: 'passive',
  },
  {
    id: 'powerful_tongue',
    name: 'Powerful Tongue',
    types: ['general'],
    source: 'Monster Codex',
    description:
      'Unlike others of your kind, you are able to pull your prey toward yourself. Your tongue attack gains the pull special ability. At the start of your turn, if your tongue is attached to a target of your size or smaller and you succeed at a combat maneuver check, you can pull the target 5 feet closer to you as a free action.',
    shortDescription:
      'Tongue attack gains the pull ability, letting you drag attached targets 5 feet closer as a free action.',
    prerequisites: [
      { type: 'ability_score', ability: 'STR', minimum: 17 },
      { type: 'special', description: 'Sticky tongue ability' },
    ],
    effects: [],
    activationMode: 'conditional',
  },
  {
    id: 'raging_brute',
    name: 'Raging Brute',
    types: ['general'],
    source: 'Monster Codex',
    description:
      "Once per day as a free action, you can enter a fury that lasts 1 minute, gaining the benefits of one barbarian rage power you select when taking this feat. Your effective barbarian level for qualifying for rage powers equals your total Hit Dice minus 3. If the rage power would normally end a barbarian's rage when used, the ability ends immediately and you become fatigued. Standard barbarian rage benefits and penalties do not apply. This feat may be taken multiple times; each additional selection adds another rage power and one extra daily use. When activated, you may use any or all rage powers gained through this feat.",
    shortDescription:
      'Once per day, enter a 1-minute fury granting the benefit of one selected barbarian rage power.',
    prerequisites: [
      { type: 'ability_score', ability: 'STR', minimum: 21 },
      { type: 'special', description: 'Ogre race' },
    ],
    effects: [],
    activationMode: 'conditional',
  },
  {
    id: 'regenerate_muscles',
    name: 'Regenerate Muscles',
    types: ['general'],
    source: 'Monster Codex',
    description:
      'As a free action, you can deactivate your regeneration for 1 minute, gaining a +2 enhancement bonus to Strength during that time. Your regeneration remains disabled for an additional minute after this ability ends. You may terminate this effect early as a free action, but may only activate it when your regeneration is currently functioning.',
    shortDescription:
      'Temporarily disable regeneration to gain +2 enhancement bonus to Strength for 1 minute.',
    prerequisites: [
      { type: 'feat', featId: 'power_attack' },
      { type: 'special', description: 'Regeneration ability' },
      { type: 'special', description: 'Troll' },
    ],
    effects: [
      {
        type: 'bonus',
        target: 'ability_score',
        value: 2,
        bonusType: BonusType.ENHANCEMENT,
        source: 'Regenerate Muscles',
        condition: {
          type: 'custom',
          description: 'when regeneration is deactivated via this feat',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
  },
  {
    id: 'savage_critical',
    name: 'Savage Critical',
    types: ['critical'],
    source: 'Monster Codex',
    description:
      'When you use Vital Strike or confirm a critical hit, you may add your sneak attack damage to the damage from the attack. This ability does not apply to attacks that already incorporate sneak attack damage.',
    shortDescription:
      'Add sneak attack damage when using Vital Strike or confirming a critical hit.',
    prerequisites: [
      { type: 'ability_score', ability: 'STR', minimum: 19 },
      { type: 'special', description: 'Ogre race' },
      { type: 'special', description: 'Sneak attack +2d6' },
    ],
    effects: [],
    activationMode: 'conditional',
  },
  {
    id: 'serpentine_compression',
    name: 'Serpentine Compression',
    types: ['general'],
    source: 'Monster Codex',
    description:
      'Your slippery scales and lithe musculature allow you to navigate tight spaces. You gain the compression universal monster ability, allowing you to move through an area as small as one-quarter your space without squeezing, or one-eighth your space when squeezing.',
    shortDescription:
      'Gain the compression ability, moving through areas as small as one-quarter your space without squeezing.',
    prerequisites: [{ type: 'special', description: 'Serpentfolk' }],
    effects: [],
    activationMode: 'passive',
  },
  {
    id: 'shadow_shroud',
    name: 'Shadow Shroud',
    types: ['general'],
    source: 'Monster Codex',
    description:
      'Using a portion of your innate magic, you cloak your body in darkness to evade attacks. As an immediate action, you can surround yourself with shifting darkness that grants concealment against a single attack. You can use this ability once per day, gaining one additional daily use at caster levels 5, 10, 15, and 20 for your racial darkness spell-like ability.',
    shortDescription:
      'Use an immediate action to gain concealment against one attack, using your innate darkness magic.',
    prerequisites: [
      { type: 'feat', featId: 'combat_reflexes' },
      { type: 'special', description: 'Darkness racial spell-like ability' },
    ],
    effects: [],
    activationMode: 'conditional',
  },
  {
    id: 'shared_stash',
    name: 'Shared Stash',
    types: ['teamwork'],
    source: 'Monster Codex',
    description:
      'You can exchange equipment with willing allies sharing your square. You can draw a weapon from an ally sharing your square as a free action, or draw a hidden weapon or any other object from them as a move action. You may also take a held object from a willing ally in the same square as you as a free action. Non-weapon exchanges provoke attacks of opportunity. Both you and your ally must have this feat for it to function.',
    shortDescription:
      'Draw weapons or items from allies sharing your square as a free or move action.',
    prerequisites: [
      { type: 'feat', featId: 'quick_draw' },
      { type: 'bab', minimum: 1 },
      { type: 'skill', skillId: 'sleight_of_hand', ranks: 1 },
      { type: 'special', description: 'Swarming racial trait' },
    ],
    effects: [],
    activationMode: 'conditional',
  },
  {
    id: 'sleeper',
    name: 'Sleeper',
    types: ['general'],
    source: 'Monster Codex',
    description:
      'You heal 1 hit point per 10 minutes as long as you are surrounded by at least 5 feet of dirt or stone on all sides and take no actions.',
    shortDescription:
      'Heal 1 HP per 10 minutes while completely surrounded by dirt or stone and taking no actions.',
    prerequisites: [
      { type: 'feat', featId: 'warren_digger' },
      { type: 'special', description: 'Ghoul' },
    ],
    effects: [],
    activationMode: 'conditional',
  },
  {
    id: 'smoking_boulder',
    name: 'Smoking Boulder',
    types: ['combat'],
    source: 'Monster Codex',
    description:
      'When you throw a rock as part of an attack action and hit your target, you can cause the boulder to emit a 10-foot-radius spread of heavy smoke. The smoke lasts for 1d4 rounds.',
    shortDescription:
      'Thrown rocks that hit create a 10-foot radius cloud of heavy smoke lasting 1d4 rounds.',
    prerequisites: [
      { type: 'bab', minimum: 11 },
      { type: 'special', description: 'Heated rock special ability' },
    ],
    effects: [],
    activationMode: 'conditional',
  },
  {
    id: 'snipers_lantern',
    name: "Sniper's Lantern",
    types: ['general'],
    source: 'Monster Codex',
    description:
      "You can use your dancing lights racial ability to create one orb of penetrating light that grants a +2 insight bonus on all ranged attacks made against targets within 5 feet of the light's location. The light can be repositioned as a move action. You can use this ability once per day, gaining one additional daily use when the caster level for your dancing lights racial ability reaches 5th, 10th, 15th, and 20th.",
    shortDescription:
      'Use dancing lights to create a targeting orb granting +2 insight bonus on ranged attacks near it.',
    prerequisites: [
      { type: 'feat', featId: 'point_blank_shot' },
      { type: 'special', description: 'Dancing lights racial spell-like ability' },
    ],
    effects: [
      {
        type: 'bonus',
        target: 'attack',
        value: 2,
        bonusType: BonusType.INSIGHT,
        source: "Sniper's Lantern",
        condition: {
          type: 'custom',
          description: 'on ranged attacks against targets within 5 feet of the dancing lights orb',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
  },
  {
    id: 'sonic_croak',
    name: 'Sonic Croak',
    types: ['general'],
    source: 'Monster Codex',
    description:
      "Instead of its normal frightening effect, you can use your terrifying croak to deal 1d4 points of sonic damage to creatures in a 15-foot cone (Fortitude half). The saving throw DC matches your terrifying croak's DC. For every 3 Hit Dice you possess, the damage dealt increases by 1d4. The Throat Pouch feat increases the size of this feat's cone by 5 feet for every 6 HD you have, not every 2 HD.",
    shortDescription:
      'Convert terrifying croak into a 15-foot sonic damage cone dealing 1d4 per 3 HD.',
    prerequisites: [
      { type: 'feat', featId: 'throat_pouch' },
      { type: 'special', description: 'Boggard race' },
      { type: 'special', description: 'Terrifying croak ability' },
    ],
    effects: [],
    activationMode: 'conditional',
  },
  {
    id: 'sprinting_troll',
    name: 'Sprinting Troll',
    types: ['general'],
    source: 'Monster Codex',
    description:
      'As a free action, you can boost your land speed by 10 feet for 1 minute. During this enhanced speed period and for an additional minute afterward, your regeneration becomes inactive. You may terminate this effect early as a free action, but may only activate it when your regeneration is currently active.',
    shortDescription: 'Temporarily disable regeneration to gain +10 feet land speed for 1 minute.',
    prerequisites: [
      { type: 'feat', featId: 'fleet' },
      { type: 'special', description: 'Regeneration ability' },
      { type: 'special', description: 'Troll' },
    ],
    effects: [],
    activationMode: 'conditional',
  },
  {
    id: 'staggering_blow',
    name: 'Staggering Blow',
    types: ['combat'],
    source: 'Monster Codex',
    description:
      "When using Vital Strike, you can take a -2 penalty on your attack roll to also make the attack a staggering strike. If the attack succeeds, the target must make a Fortitude save (DC = 10 + 1/2 your character level + your Strength modifier) or become staggered until the start of your next turn. A creature that fails its save is immune to this feat's effects for 24 hours after recovery. This feat does not affect constructs, oozes, plants, undead, incorporeal creatures, or creatures immune to critical hits.",
    shortDescription:
      'Take -2 on a Vital Strike attack to potentially stagger the target on a failed Fortitude save.',
    prerequisites: [
      { type: 'ability_score', ability: 'STR', minimum: 13 },
      { type: 'feat', featId: 'power_attack' },
      { type: 'feat', featId: 'vital_strike' },
      { type: 'bab', minimum: 8 },
    ],
    effects: [],
    activationMode: 'conditional',
  },
  {
    id: 'strangler_mc',
    name: 'Strangler',
    types: ['general'],
    source: 'Monster Codex',
    description:
      'When you successfully entangle a creature with a lasso and exceed its CMD by 5 or more, the creature cannot speak above a whisper. The target must succeed at a concentration check (DC = 20 + your CMB + spell level) to cast spells with verbal components, use command word items, or perform magic requiring speech. Additionally, the Escape Artist DC to slip free of your lasso equals 15 or your CMD, whichever is higher.',
    shortDescription:
      'Entangling a target with a lasso silences them unless they pass a concentration check.',
    prerequisites: [
      { type: 'special', description: 'Exotic Weapon Proficiency (lasso)' },
      { type: 'special', description: 'Weapon Focus (lasso)' },
    ],
    effects: [],
    activationMode: 'conditional',
  },
  {
    id: 'stunning_croak',
    name: 'Stunning Croak',
    types: ['general'],
    source: 'Monster Codex',
    description:
      "The terrifying force of your croak disorients and debilitates your enemies. When activating your terrifying croak ability, you may choose to stun one creature within 30 feet for 1 round. On a successful Fortitude save, the target becomes staggered for 1 round instead. The save DC matches your terrifying croak ability's DC.",
    shortDescription:
      'Use terrifying croak to stun one creature within 30 feet for 1 round (or stagger on a successful save).',
    prerequisites: [
      { type: 'feat', featId: 'sonic_croak' },
      { type: 'feat', featId: 'throat_pouch' },
      { type: 'special', description: 'Boggard race' },
      { type: 'special', description: 'Terrifying croak ability' },
    ],
    effects: [],
    activationMode: 'conditional',
  },
  {
    id: 'sure_on_ice',
    name: 'Sure on Ice',
    types: ['general'],
    source: 'Monster Codex',
    description:
      'You can move across icy and snowy surfaces without penalty and do not need to attempt Acrobatics checks to run or charge on ice. You gain a +4 bonus on Climb checks to climb ice.',
    shortDescription:
      'Move on ice and snow without penalty, no Acrobatics checks to run/charge on ice, +4 to Climb ice.',
    prerequisites: [{ type: 'special', description: 'Frost giant' }],
    effects: [
      {
        type: 'bonus',
        target: 'skill_climb',
        value: 4,
        bonusType: BonusType.UNTYPED,
        source: 'Sure on Ice',
        condition: {
          type: 'custom',
          description: 'on Climb checks to climb ice',
          params: {},
        },
      },
    ],
    activationMode: 'passive',
  },
  {
    id: 'swift_swimmer',
    name: 'Swift Swimmer',
    types: ['general'],
    source: 'Monster Codex',
    description: 'Your swim speed increases by 15 feet.',
    shortDescription: 'Swim speed increases by 15 feet.',
    prerequisites: [
      { type: 'special', description: 'Lizardfolk' },
      { type: 'special', description: 'Swim speed' },
    ],
    effects: [],
    activationMode: 'passive',
  },
  {
    id: 'tail_weapon',
    name: 'Tail Weapon',
    types: ['combat'],
    source: 'Monster Codex',
    description:
      'You gain the ability to make a tail slap attack as a secondary natural weapon dealing 1d6 points of bludgeoning damage. You also receive a +2 racial bonus on Acrobatics checks to balance and to your CMD against maneuvers that attempt to move you from your square.',
    shortDescription:
      'Gain a tail slap secondary natural attack (1d6) and +2 racial bonus to balance Acrobatics and CMD vs. movement.',
    prerequisites: [
      { type: 'bab', minimum: 1 },
      { type: 'special', description: 'Serpentfolk' },
    ],
    effects: [
      {
        type: 'bonus',
        target: 'skill_acrobatics',
        value: 2,
        bonusType: BonusType.RACIAL,
        source: 'Tail Weapon',
        condition: {
          type: 'custom',
          description: 'on Acrobatics checks to balance',
          params: {},
        },
      },
    ],
    activationMode: 'passive',
  },
  {
    id: 'telepathic_distraction',
    name: 'Telepathic Distraction',
    types: ['general'],
    source: 'Monster Codex',
    description:
      'As a standard action, you can focus your telepathy on one creature within range to weaken its mental defenses. The target must succeed at a Will save (DC = 10 + 1/2 your Hit Dice + your Charisma modifier) or take 1d6 nonlethal damage and suffer a -2 penalty against mind-affecting effects for 1d6 rounds. This ability is itself a mind-affecting effect. You may use this ability a number of times per day equal to 1/2 your Hit Dice.',
    shortDescription:
      'Deal 1d6 nonlethal damage and impose -2 vs. mind-affecting effects on a failed Will save.',
    prerequisites: [
      { type: 'ability_score', ability: 'CHA', minimum: 15 },
      { type: 'special', description: 'Serpentfolk race' },
    ],
    effects: [],
    activationMode: 'conditional',
  },
  {
    id: 'throat_pouch',
    name: 'Throat Pouch',
    types: ['general'],
    source: 'Monster Codex',
    description:
      'The range of your terrifying croak ability increases by 5 feet for every 2 Hit Dice you have (maximum 30-foot increase). Additionally, while speaking boggard or vocalizing wordlessly, you may swell your throat pouch as a free action to reduce the Perception DC to hear your voice by an amount equal to your Hit Dice. The benefits of Throat Pouch and any feats that use it as a prerequisite are available only while you are wearing light, medium, or no armor.',
    shortDescription:
      'Increase terrifying croak range by 5 ft per 2 HD and amplify voice to be more easily heard.',
    prerequisites: [
      { type: 'special', description: 'Boggard' },
      { type: 'special', description: 'Terrifying croak ability' },
    ],
    effects: [],
    activationMode: 'passive',
  },
  {
    id: 'tough_as_iron',
    name: 'Tough as Iron',
    types: ['general'],
    source: 'Monster Codex',
    description:
      'When you gain an enhancement bonus to your natural armor, that bonus increases by 2. This has no effect if your natural armor bonus is +0 or you do not have an enhancement bonus increasing your natural armor bonus.',
    shortDescription: 'Enhancement bonuses to natural armor increase by 2.',
    prerequisites: [
      { type: 'feat', featId: 'toughness' },
      { type: 'special', description: 'Duergar' },
    ],
    effects: [],
    activationMode: 'passive',
  },
  {
    id: 'venomous_spray',
    name: 'Venomous Spray',
    types: ['combat'],
    source: 'Monster Codex',
    description:
      'You gain the ability to spit venom as a secondary ranged attack with a 5-foot range. This natural attack does not trigger attacks of opportunity. Targets must make a Fortitude save against your poison DC or suffer blindness for 1d4 rounds in addition to normal poison effects. Venom spitting cannot occur in the same round as a bite attack, and after spitting you cannot use either ability for 1d4 rounds.',
    shortDescription:
      'Spit venom as a 5-foot ranged attack that can blind targets on a failed Fortitude save.',
    prerequisites: [{ type: 'special', description: 'Serpentfolk' }],
    effects: [],
    activationMode: 'conditional',
  },
  {
    id: 'vestigial_head',
    name: 'Vestigial Head',
    types: ['general'],
    source: 'Monster Codex',
    description:
      'You were born with a parasitic vestigial head featuring its own stunted brain. When making Will saves against hostile effects, there is a 25% chance the effect targets the vestigial head instead of you. If this occurs, you are treated as if you had succeeded at your saving throw, and instead become sickened for 1d4 rounds or the duration of the effect, whichever is longer. This feat can be taken twice; the second time increases the chance to 50% but does not grant an additional vestigial head.',
    shortDescription:
      '25% chance hostile Will-save effects target your vestigial head, granting an automatic success but causing sickened.',
    prerequisites: [{ type: 'special', description: 'Ogre' }],
    effects: [],
    activationMode: 'passive',
  },
  {
    id: 'warren_digger',
    name: 'Warren Digger',
    types: ['general'],
    source: 'Monster Codex',
    description:
      'You gain a burrow speed of 10 feet through earth, sand, or soil. This feat can be taken multiple times; each additional selection adds 10 feet to your burrow speed, to a maximum of your base land speed.',
    shortDescription:
      'Gain a 10-foot burrow speed through earth, sand, or soil (can be taken multiple times).',
    prerequisites: [{ type: 'special', description: 'Ghoul' }],
    effects: [],
    activationMode: 'passive',
  },
];

// CHECKPOINT: last_written=warren_digger, written=26/26, status=complete
