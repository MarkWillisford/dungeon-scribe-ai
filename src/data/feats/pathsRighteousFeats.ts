import { BonusType } from '@/types/base';
import type { FeatDefinition } from '@/types/feats';

export const PATHS_RIGHTEOUS_FEATS: FeatDefinition[] = [
  // ==================== PATHS OF THE RIGHTEOUS ====================

  {
    id: 'bladed_brush',
    name: 'Bladed Brush',
    description:
      'You know how to balance a polearm perfectly, striking with artful, yet deadly precision. You can use the Weapon Finesse feat to apply your Dexterity modifier instead of your Strength modifier to attack rolls with a glaive sized for you, even though it is not a light weapon. You can wield a glaive as if it were a one-handed piercing or slashing melee weapon, allowing you to use it with Swashbuckler precise strike, the duelist class feature, and similar abilities. You can shorten your grip on the glaive as a move action to remove the reach property; another move action restores the reach property.',
    shortDescription:
      'Apply DEX to glaive attacks; wield glaive as one-handed; toggle reach as move action',
    source: 'Paths of the Righteous',
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'weapon_focus_glaive' },
      { type: 'special', description: 'Must be a worshiper of Shelyn' },
    ],
    effects: [
      {
        type: 'stat_replacement',
        bonusType: BonusType.UNTYPED,
        target: 'attack_rolls.glaive',
        value: 'DEX',
        source: 'Bladed Brush',
        condition: {
          type: 'weapon_type',
          params: { weapon: 'glaive' },
          description: 'When making attack rolls with a glaive',
        },
      },
    ],
    activationMode: 'passive',
    tags: ['divine', 'shelyn', 'glaive', 'finesse', 'polearm', 'dexterity'],
  },

  {
    id: 'daring_exploit',
    name: 'Daring Exploit',
    description:
      'Your determination allows you to accomplish great things, at a risk of great failure. Once per day, before you use a derring-do deed, a dare, or a similar ability that has you roll a die and add the result to a d20 roll, you can roll the bonus die twice and use the higher result. If the higher result would normally allow you to roll an additional bonus die, this feat does not apply to that additional roll. You can use this feat one additional time per day for every 4 character levels you have attained.',
    shortDescription:
      'Roll derring-do/dare bonus die twice and take higher result; usable 1/day plus 1 per 4 levels',
    source: 'Paths of the Righteous',
    types: ['combat'],
    prerequisites: [
      { type: 'special', description: 'Must possess a Dare, deeds, or inspiration class ability' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['swashbuckler', 'dare', 'deed', 'derring-do', 'reroll'],
  },

  {
    id: 'erastils_blessing',
    name: "Erastil's Blessing",
    description:
      "Old Deadeye's favor grants you prowess with a bow that far exceeds your own physical capabilities. When making ranged attacks with a bow, you can apply your Wisdom modifier to attack rolls in place of your Dexterity modifier.",
    shortDescription: 'Apply WIS instead of DEX to attack rolls with bows',
    source: 'Paths of the Righteous',
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'weapon_focus_longbow' },
      { type: 'special', description: 'Must be a worshiper of Erastil' },
    ],
    effects: [
      {
        type: 'stat_replacement',
        bonusType: BonusType.UNTYPED,
        target: 'attack_rolls.bow',
        value: 'WIS',
        source: "Erastil's Blessing",
        condition: {
          type: 'weapon_group',
          params: { group: 'bows' },
          description: 'When making ranged attack rolls with a bow',
        },
      },
    ],
    activationMode: 'passive',
    tags: ['divine', 'erastil', 'bow', 'wisdom', 'ranged'],
  },

  {
    id: 'favored_prestige_class',
    name: 'Favored Prestige Class',
    description:
      'You have found a prestige class that suits you perfectly, and pursue it with the same devotion you show your base class. Choose one prestige class and one skill that is a class skill for that prestige class. You gain either +1 hit point or +1 skill rank whenever you gain a level in the chosen prestige class. In addition, you gain a +2 bonus on checks with the chosen skill (+4 if you have 10 or more ranks in that skill). This bonus stacks with Skill Focus but not with other feats or abilities that grant bonuses to this skill. You cannot change your chosen prestige class once you select it, and you cannot use your prestige class levels to qualify for a favored class option or favored class bonus. You may only have one favored prestige class, though you may still designate a separate base class as a favored class.',
    shortDescription:
      'Gain HP or skill rank per prestige class level; +2 (or +4) bonus on one prestige class skill',
    source: 'Paths of the Righteous',
    types: ['general'],
    prerequisites: [],
    effects: [],
    activationMode: 'passive',
    choices: [
      {
        type: 'custom',
        label: 'Choose a prestige class and one of its class skills',
        affectsEffects: true,
      },
    ],
    tags: ['prestige class', 'multiclass', 'skill bonus'],
  },

  {
    id: 'flame_blade_dervish',
    name: 'Flame Blade Dervish',
    description:
      'You move effortlessly when wielding a flame blade. While the flame blade spell persists, you gain a +10-foot enhancement bonus to your base speed, a +4 competence bonus on Acrobatics checks, and add your Charisma modifier to damage rolls with the flame blade (in addition to other modifiers). Additionally, your flame blade ignores the first 10 points of fire resistance a target might have. Against undead, your flame blade ignores the first 30 points of fire resistance. Fire immunity still protects against your flame blade.',
    shortDescription:
      '+10 ft speed, +4 Acrobatics, add CHA to damage, and ignore 10 (or 30 vs undead) fire resistance while using flame blade',
    source: 'Paths of the Righteous',
    types: ['combat'],
    prerequisites: [
      {
        type: 'special',
        description: 'Ability to cast flame blade as a spell or spell-like ability',
      },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.ENHANCEMENT,
        target: 'speed.base',
        value: 10,
        source: 'Flame Blade Dervish',
        condition: {
          type: 'custom',
          params: { spell: 'flame_blade', active: true },
          description: 'While the flame blade spell is active',
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.COMPETENCE,
        target: 'skill.acrobatics',
        value: 4,
        source: 'Flame Blade Dervish',
        condition: {
          type: 'custom',
          params: { spell: 'flame_blade', active: true },
          description: 'While the flame blade spell is active',
        },
      },
      {
        type: 'stat_bonus_to_damage',
        bonusType: BonusType.UNTYPED,
        target: 'damage.flame_blade',
        value: 'CHA',
        source: 'Flame Blade Dervish',
        condition: {
          type: 'custom',
          params: { spell: 'flame_blade', active: true },
          description: 'While the flame blade spell is active',
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['divine', 'sarenrae', 'fire', 'flame blade', 'charisma', 'movement', 'acrobatics'],
  },

  {
    id: 'ghost_whisperer',
    name: 'Ghost Whisperer',
    description:
      'Your words soothe the dead and undead alike, and can even affect haunts. You gain Necril as a bonus language. You gain a +2 bonus on Bluff, Diplomacy, Intimidate, and Sense Motive checks when interacting with undead or speaking Necril. Add speak with dead to your list of spells known. Once you can cast 4th-level spells, also add speak with haunt to your list of spells known. When casting either of those spells, your alignment is treated as matching the alignment of the target creature or haunt, and your effective caster level increases by 2.',
    shortDescription:
      'Gain Necril, +2 social skills with undead, add speak with dead/haunt to spells known',
    source: 'Paths of the Righteous',
    types: ['general'],
    prerequisites: [{ type: 'special', description: 'Ability to cast 3rd-level spells' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skill.bluff',
        value: 2,
        source: 'Ghost Whisperer',
        condition: {
          type: 'target_type',
          params: { targetType: 'undead' },
          description: 'When interacting with undead or speaking Necril',
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skill.diplomacy',
        value: 2,
        source: 'Ghost Whisperer',
        condition: {
          type: 'target_type',
          params: { targetType: 'undead' },
          description: 'When interacting with undead or speaking Necril',
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skill.intimidate',
        value: 2,
        source: 'Ghost Whisperer',
        condition: {
          type: 'target_type',
          params: { targetType: 'undead' },
          description: 'When interacting with undead or speaking Necril',
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skill.sense_motive',
        value: 2,
        source: 'Ghost Whisperer',
        condition: {
          type: 'target_type',
          params: { targetType: 'undead' },
          description: 'When interacting with undead or speaking Necril',
        },
      },
    ],
    activationMode: 'passive',
    tags: [
      'divine',
      'pharasma',
      'undead',
      'language',
      'necril',
      'speak with dead',
      'haunt',
      'social',
    ],
  },

  {
    id: 'guided_star',
    name: 'Guided Star',
    description:
      'The grace of Desna guides your starknife to its target and back to your hand. Once per day per character level, you can activate this ability as a swift action. Until the end of your turn, you add your Wisdom modifier to damage rolls you make with a starknife (in addition to other modifiers). Additionally, if you throw the starknife during this time, it returns to you at the beginning of your next turn, as if it had the returning weapon special ability.',
    shortDescription:
      'Add WIS to starknife damage and gain returning on thrown starknife; 1/day per level',
    source: 'Paths of the Righteous',
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'starry_grace' },
      { type: 'special', description: 'Must be a worshiper of Desna' },
    ],
    effects: [
      {
        type: 'stat_bonus_to_damage',
        bonusType: BonusType.UNTYPED,
        target: 'damage.starknife',
        value: 'WIS',
        source: 'Guided Star',
        condition: {
          type: 'weapon_type',
          params: { weapon: 'starknife' },
          description: 'When activated as a swift action until end of turn',
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['divine', 'desna', 'starknife', 'wisdom', 'returning', 'thrown'],
  },

  {
    id: 'new_thassilonian_magic',
    name: 'New Thassilonian Magic',
    description:
      'You have adapted your Thassilonian magical traditions to allow for more flexibility. Choose one of your two opposition schools. You may prepare and cast spells from that opposition school as normal, but you must expend two spell slots to do so (as normal for Thassilonian specialists preparing opposition school spells). You also gain Thassilonian as a bonus language. If you already know Thassilonian, you may instead select one of the following as a bonus language: Aklo, Azlanti, Giant, Shoanti, or Varisian.',
    shortDescription:
      'Reduce restrictions on one Thassilonian opposition school; gain Thassilonian (or alternate) language',
    source: 'Paths of the Righteous',
    types: ['general'],
    prerequisites: [
      {
        type: 'special',
        description: 'Thassilonian specialization class feature (from Inner Sea Magic)',
      },
    ],
    effects: [],
    activationMode: 'passive',
    choices: [
      {
        type: 'school',
        label: 'Choose one of your opposition schools to gain limited access to',
        affectsEffects: true,
      },
    ],
    tags: ['arcane', 'thassilonian', 'school', 'wizard', 'language', 'opposition school'],
  },

  {
    id: 'prestigious_spellcaster',
    name: 'Prestigious Spellcaster',
    description:
      'Your prestige class advances your spellcasting beyond what is normally expected. The first level of your chosen prestige class (from Favored Prestige Class) that does not provide new spells per day instead grants you +1 spellcaster level as though you had gained a level in a spellcasting class you belonged to before taking the prestige class. You may select this feat multiple times; each time you select it, it applies to the next prestige class level that does not provide new spells per day. This feat has no effect if your prestige class grants new spells per day at every level, or if it has no spellcasting advancement at all.',
    shortDescription:
      'Gain +1 effective spellcaster level for prestige class levels that lack spell advancement',
    source: 'Paths of the Righteous',
    types: ['general'],
    prerequisites: [{ type: 'feat', featId: 'favored_prestige_class' }],
    effects: [],
    activationMode: 'passive',
    tags: ['prestige class', 'spellcasting', 'caster level', 'advancement'],
  },

  {
    id: 'smite_evil_magic',
    name: 'Smite Evil Magic',
    description:
      "You can use your holy power to unravel the magic of evil beings. You can expend one use of your smite evil ability as a standard action to attempt to sunder a spell effect using a combat maneuver check. For spell effects not on a creature, use a CMD of 15 + the caster level of the spell effect. For spell effects on a creature, use the creature's CMD + 5. This sunder attempt ignores any miss chance provided by a spell effect. A successful check suppresses the spell effect for 1d4+1 rounds. If you exceed the CMD by 10 or more, the effect is dispelled entirely. If the effect was created by an evil outsider, evil dragon, or undead creature, you may add your Charisma modifier to your combat maneuver check.",
    shortDescription:
      'Expend smite evil to sunder spell effects; add CHA vs evil outsiders/dragons/undead',
    source: 'Paths of the Righteous',
    types: ['combat'],
    prerequisites: [{ type: 'class_feature', featureName: 'smite evil' }],
    effects: [],
    activationMode: 'conditional',
    tags: ['divine', 'paladin', 'smite', 'dispel', 'combat maneuver', 'charisma'],
  },

  {
    id: 'strike_true',
    name: 'Strike True',
    description:
      'Rather than attempting a series of wild blows, you line up a perfect attack. As a move action, you can focus yourself. If you do, you receive a +4 bonus on the next melee attack roll you make before the end of your turn.',
    shortDescription: 'Spend a move action to gain +4 on your next melee attack roll this turn',
    source: 'Paths of the Righteous',
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'combat_expertise' },
      { type: 'bab', minimum: 6 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'attack_rolls.melee',
        value: 4,
        source: 'Strike True',
        condition: {
          type: 'custom',
          params: { activation: 'move_action', duration: 'next_attack' },
          description:
            'On the next melee attack roll made before end of turn after using a move action to focus',
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['melee', 'attack bonus', 'focus', 'accuracy'],
  },

  {
    id: 'two_weapon_drunkard',
    name: 'Two-Weapon Drunkard',
    description:
      "You have learned to fight with a tankard as well as a weapon, using it both for drinking and dealing damage. When you wield a tankard as a light off-hand weapon, it is treated as a light mace for all purposes (including feats such as Weapon Focus). If you are a worshiper of Cayden Cailean, your off-hand tankard also functions as a divine focus, and wielding it doesn't prevent you from using somatic components. If you are fighting with two weapons and are sickened, you ignore the penalties from the sickened condition on attack rolls and weapon damage rolls.",
    shortDescription:
      'Treat off-hand tankard as light mace; ignore sickened penalties on two-weapon attack/damage rolls',
    source: 'Paths of the Righteous',
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'catch_off_guard' },
      { type: 'feat', featId: 'two_weapon_fighting' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: [
      'divine',
      'cayden cailean',
      'two-weapon fighting',
      'improvised weapon',
      'tankard',
      'sickened',
    ],
  },

  {
    id: 'uncanny_ally',
    name: 'Uncanny Ally',
    description:
      "You have learned to use your senses to protect others. While you are conscious and can move freely, adjacent allies who can see and hear you gain the benefit of your uncanny dodge ability. If you have improved uncanny dodge, you can designate one adjacent ally as a free action at the start of your turn; that ally gains the benefit of your improved uncanny dodge. An enemy can still sneak attack that ally if the enemy has at least 4 more rogue levels than whichever is lower—your level or your ally's level.",
    shortDescription:
      'Grant uncanny dodge (and improved uncanny dodge) to adjacent allies who can see and hear you',
    source: 'Paths of the Righteous',
    types: ['general'],
    prerequisites: [
      { type: 'feat', featId: 'alertness' },
      { type: 'class_feature', featureName: 'uncanny dodge' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['defensive', 'uncanny dodge', 'ally', 'rogue', 'perception'],
  },
];
