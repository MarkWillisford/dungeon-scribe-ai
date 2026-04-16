import { BonusType } from '@/types/base';
import type { FeatDefinition } from '@/types/feats';

export const TEAMWORK_FEATS: FeatDefinition[] = [
  {
    id: 'ally_shield',
    name: 'Ally Shield',
    description:
      'You can use an adjacent ally as cover. As an immediate action, you can designate an adjacent ally to provide cover for you until the start of your next turn. You gain a +4 bonus to AC and Reflex saves from this cover. Any attack that misses you due to this cover has a 50% chance of hitting the ally instead.',
    shortDescription: 'Use adjacent ally as cover; attacks that miss may hit them',
    source: 'Pathfinder Society Field Guide',
    types: ['combat', 'teamwork'],
    prerequisites: [],
    effects: [],
    activationMode: 'conditional',
    tags: ['teamwork', 'defense', 'cover'],
  },
  {
    id: 'amplified_rage',
    name: 'Amplified Rage',
    description:
      'When you and an adjacent ally both have the rage class feature and are both raging, your Strength and Constitution bonuses from rage each increase by +2. This bonus also applies to any morale bonuses you gain from rage.',
    shortDescription: '+2 to Strength and Constitution bonuses from rage when adjacent raging ally',
    source: 'Orcs of Golarion',
    types: ['combat', 'teamwork'],
    prerequisites: [
      { type: 'race', raceName: 'half-orc or orc' },
      { type: 'class_feature', featureName: 'rage' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.MORALE,
        target: 'ability_score.STR',
        value: 2,
        source: 'Amplified Rage',
        condition: {
          type: 'custom',
          description: 'While raging and adjacent to an ally also raging with this feat',
          params: {},
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.MORALE,
        target: 'ability_score.CON',
        value: 2,
        source: 'Amplified Rage',
        condition: {
          type: 'custom',
          description: 'While raging and adjacent to an ally also raging with this feat',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['teamwork', 'rage', 'orc'],
  },
  {
    id: 'back_to_back',
    name: 'Back to Back',
    description:
      "You are skilled at watching your ally's back when in close combat. Whenever you and an adjacent ally with this feat are both flanked, you each gain a +2 bonus to AC against attacks from opponents flanking you.",
    shortDescription: '+2 AC against flanking opponents when adjacent ally also flanked',
    source: 'Ultimate Combat',
    types: ['combat', 'teamwork'],
    prerequisites: [{ type: 'skill', skillId: 'perception', ranks: 3 }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'ac',
        value: 2,
        source: 'Back to Back',
        condition: {
          type: 'custom',
          description: 'When both you and an adjacent ally with this feat are flanked',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['teamwork', 'defense', 'flanking'],
  },
  {
    id: 'improved_back_to_back',
    name: 'Improved Back to Back',
    description:
      "You excel at protecting your ally's flanks in close combat. When you and an adjacent ally with this feat are both flanked, you can take an immediate action to negate the flanking for your ally until the start of your next turn. Your ally retains this benefit even if they move.",
    shortDescription: 'Negate flanking for adjacent ally as immediate action',
    source: 'Ultimate Combat',
    types: ['combat', 'teamwork'],
    prerequisites: [
      { type: 'feat', featId: 'back_to_back' },
      { type: 'skill', skillId: 'perception', ranks: 5 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['teamwork', 'defense', 'flanking'],
  },
  {
    id: 'basic_harmony',
    name: 'Basic Harmony',
    description:
      "You can coordinate your bardic performance or raging song with a nearby ally. When you are within 30 feet of an ally who also has this feat and is using bardic performance or raging song, you can use your own bardic performance to enhance theirs. Your ally's bardic performance or raging song is treated as if its effective level were 2 higher for the purpose of its effects.",
    shortDescription: "Enhance adjacent ally's bardic performance by +2 effective levels",
    source: 'Champions of Balance',
    types: ['teamwork'],
    prerequisites: [
      { type: 'special', description: 'Bardic performance or raging song class feature' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['teamwork', 'bardic', 'performance'],
  },
  {
    id: 'broken_wing_gambit',
    name: 'Broken Wing Gambit',
    description:
      'You feign vulnerability to draw in your foe and allow your allies to take advantage. When you hit with a melee attack, you can activate this feat as a free action to give your opponent a +2 bonus on attack rolls and damage rolls against you until the start of your next turn. However, the first time that opponent attacks you while you have this feat active, that attack provokes attacks of opportunity from all allies adjacent to the opponent who have this feat.',
    shortDescription:
      'Grant enemy attack bonus; their first attack on you provokes AoOs from allies',
    source: 'Ultimate Combat',
    types: ['combat', 'teamwork'],
    prerequisites: [{ type: 'skill', skillId: 'bluff', ranks: 5 }],
    effects: [],
    activationMode: 'toggle',
    tags: ['teamwork', 'combat', 'opportunity'],
  },
  {
    id: 'brutal_grappler',
    name: 'Brutal Grappler',
    description:
      'When you and an ally with this feat are both grappling the same opponent, you may attempt to deal damage to the grappled opponent as a swift action on your turn. This damage is equal to your unarmed strike or natural weapon damage plus your Strength modifier.',
    shortDescription: 'Deal damage as swift action to opponent you and ally both grapple',
    source: 'Orcs of Golarion',
    types: ['combat', 'teamwork'],
    prerequisites: [{ type: 'race', raceName: 'half-orc or orc' }],
    effects: [],
    activationMode: 'conditional',
    tags: ['teamwork', 'grapple', 'orc'],
  },
  {
    id: 'callous_casting',
    name: 'Callous Casting',
    description:
      "You can include an ally in the area of your damaging spells to unsettle nearby enemies. When you cast an area spell that damages creatures and you include an ally in its area, all enemies that take damage from the spell are shaken for 1 round (Will negates, DC = 10 + spell level + casting ability modifier). The ally must not be immune to the spell's damage type.",
    shortDescription: 'Including ally in damaging area spell shakes enemies for 1 round',
    source: 'Pathfinder Society Field Guide',
    types: ['teamwork'],
    prerequisites: [{ type: 'skill', skillId: 'spellcraft', ranks: 1 }],
    effects: [],
    activationMode: 'conditional',
    tags: ['teamwork', 'spellcasting', 'fear'],
  },
  {
    id: 'circling_offense',
    name: 'Circling Offense',
    description:
      "You are adept at using your allies as cover while maneuvering around large foes. When you move through a larger creature's threatened area and an ally with this feat is adjacent to that creature, you gain a +1 dodge bonus to AC against attacks of opportunity provoked by that movement.",
    shortDescription: '+1 dodge AC vs. attacks of opportunity when moving past large foe near ally',
    source: 'Rival Guide',
    types: ['combat', 'teamwork'],
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
        source: 'Circling Offense',
        condition: {
          type: 'custom',
          description:
            "When moving through a larger creature's threatened area while an ally with this feat is adjacent to that creature",
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['teamwork', 'movement', 'defense'],
  },
  {
    id: 'combat_medic',
    name: 'Combat Medic',
    description:
      'You are skilled at treating wounds in the heat of battle. When you use the Heal skill to provide first aid, treat caltrop wounds, or treat poison on an ally with this feat, you do not provoke attacks of opportunity and may take 10 on the check even if threatened.',
    shortDescription: 'No AoO and take 10 on Heal checks on allies with this feat',
    source: 'Ultimate Combat',
    types: ['teamwork'],
    prerequisites: [{ type: 'skill', skillId: 'heal', ranks: 5 }],
    effects: [],
    activationMode: 'passive',
    tags: ['teamwork', 'healing', 'skill'],
  },
  {
    id: 'compelling_harmonies',
    name: 'Compelling Harmonies',
    description:
      "Your harmonization with an ally's bardic performance can amplify its effects. When within 60 feet of an ally using a bardic performance or raging song, you can expend a round of your own bardic performance as a free action to increase the morale or competence bonuses granted by your ally's performance by +1 for that round.",
    shortDescription: "Expend bardic performance to boost ally's performance bonuses by +1",
    source: 'Champions of Balance',
    types: ['teamwork'],
    prerequisites: [
      { type: 'feat', featId: 'basic_harmony' },
      { type: 'skill', skillId: 'perform', ranks: 10 },
      { type: 'special', description: 'Bardic performance or raging song class feature' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['teamwork', 'bardic', 'performance'],
  },
  {
    id: 'cooperative_disabling',
    name: 'Cooperative Disabling',
    description:
      'You can assist an ally in disabling a trap. When an ally with this feat fails a Disable Device check to disarm a trap, you can spend an immediate action to allow them to immediately attempt the check again using your Disable Device bonus if it is higher than theirs.',
    shortDescription: 'Ally may immediately retry failed Disable Device check using your bonus',
    source: 'Pathfinder Module: Master of the Fallen Fortress',
    types: ['teamwork'],
    prerequisites: [
      { type: 'skill', skillId: 'disable_device', ranks: 1 },
      { type: 'class_feature', featureName: 'trapfinding' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['teamwork', 'traps', 'skill'],
  },
  {
    id: 'coordinated_shot',
    name: 'Coordinated Shot',
    description:
      'You are adept at working with allies to target your foes with ranged attacks. Whenever an ally with this feat threatens an opponent in melee combat, you gain a +1 bonus on ranged attack rolls against that opponent. If your ally is flanking that opponent, this bonus increases to +2.',
    shortDescription: '+1 ranged attack vs. melee-threatened foe; +2 if ally flanking',
    source: "Advanced Player's Guide",
    types: ['combat', 'teamwork'],
    prerequisites: [{ type: 'feat', featId: 'point_blank_shot' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'attack.melee',
        value: 1,
        source: 'Coordinated Shot',
        condition: {
          type: 'custom',
          description:
            'On ranged attacks vs. opponents threatened in melee by an ally with this feat',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['teamwork', 'ranged', 'attack'],
  },
  {
    id: 'counterpoint_to_inspiration',
    name: 'Counterpoint to Inspiration',
    description:
      "Your performance can counterpoint an ally's bardic inspiration to increase its potency. When within 60 feet of an ally using the same bardic performance as you, you can expend a round of your bardic performance to increase the morale or competence bonus granted by that performance by +1 for that round.",
    shortDescription:
      "Expend bardic performance to increase the same performance's morale/competence bonuses by +1",
    source: 'Champions of Balance',
    types: ['teamwork'],
    prerequisites: [
      { type: 'feat', featId: 'basic_harmony' },
      { type: 'feat', featId: 'compelling_harmonies' },
      { type: 'skill', skillId: 'perform', ranks: 10 },
      { type: 'special', description: 'Bardic performance or raging song class feature' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['teamwork', 'bardic', 'performance'],
  },
  {
    id: 'covering_fire',
    name: 'Covering Fire',
    description:
      'You use your ranged attacks to force enemies to keep their heads down, giving your allies the opportunity to act. As a standard action, you can use the aid another action with a ranged weapon. The ally you are aiding gains a +2 bonus to AC against the next attack made by the opponent you targeted, rather than you making an attack.',
    shortDescription: 'Use aid another with ranged weapon to grant ally +2 AC vs. targeted foe',
    source: 'Pathfinder Society Field Guide',
    types: ['combat', 'teamwork'],
    prerequisites: [{ type: 'feat', featId: 'point_blank_shot' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'ac',
        value: 2,
        source: 'Covering Fire',
        condition: {
          type: 'custom',
          description:
            "Ally AC bonus from aid another with ranged weapon against targeted foe's next attack",
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['teamwork', 'ranged', 'defense'],
  },
  {
    id: 'disarm_partner',
    name: 'Disarm Partner',
    description:
      'When an ally fails a disarm combat maneuver against an opponent within your melee reach, you can make a disarm attempt against that opponent as an immediate action.',
    shortDescription: 'Attempt disarm as immediate action when ally fails disarm in your reach',
    source: 'Monster Codex',
    types: ['combat', 'teamwork'],
    prerequisites: [{ type: 'bab', minimum: 1 }],
    effects: [],
    activationMode: 'conditional',
    tags: ['teamwork', 'disarm', 'maneuver'],
  },
  {
    id: 'improved_disarm_partner',
    name: 'Improved Disarm Partner',
    description:
      'When an ally fails a disarm combat maneuver against an opponent within your melee reach, you can make both an attack of opportunity and a disarm attempt against that opponent as an immediate action.',
    shortDescription:
      'Make AoO and disarm attempt as immediate action when ally fails disarm in your reach',
    source: 'Monster Codex',
    types: ['combat', 'teamwork'],
    prerequisites: [
      { type: 'feat', featId: 'disarm_partner' },
      { type: 'bab', minimum: 5 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['teamwork', 'disarm', 'maneuver'],
  },
  {
    id: 'distracting_charge',
    name: 'Distracting Charge',
    description:
      'When an ally charges a foe, you can take advantage of the distraction. Whenever an ally with this feat charges an opponent, you gain a +2 bonus on attack rolls against that opponent until the start of your next turn.',
    shortDescription: '+2 attack rolls vs. foe an ally just charged',
    source: 'Ultimate Combat',
    types: ['combat', 'teamwork'],
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'attack.melee',
        value: 2,
        source: 'Distracting Charge',
        condition: {
          type: 'custom',
          description: 'Against an opponent that an ally with this feat just charged',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['teamwork', 'charge', 'attack'],
  },
  {
    id: 'elemental_commixture',
    name: 'Elemental Commixture',
    description:
      'You can combine your elemental spells with those of an ally to create powerful synergistic effects. When you cast a spell with an elemental descriptor and an ally with this feat casts a spell with a different elemental descriptor targeting the same area or creature within 1 round, both spells deal +1 die of damage of their respective types.',
    shortDescription: 'Combine elemental spells with ally for +1 die of damage each',
    source: 'Blood of the Elements',
    types: ['teamwork'],
    prerequisites: [{ type: 'caster_level', minimum: 1 }],
    effects: [],
    activationMode: 'conditional',
    tags: ['teamwork', 'elemental', 'spellcasting'],
  },
  {
    id: 'ensemble',
    name: 'Ensemble',
    description:
      "You can coordinate with other performers to enhance each other's Perform checks. When you and one or more allies with this feat are all within 30 feet of each other and all using Perform checks, each of you gains a +2 competence bonus on your Perform check for each ally with this feat participating (maximum +6).",
    shortDescription:
      '+2 competence bonus on Perform checks per participating ally with this feat (max +6)',
    source: 'Ultimate Magic',
    types: ['teamwork'],
    prerequisites: [{ type: 'skill', skillId: 'perform', ranks: 5 }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.COMPETENCE,
        target: 'skill.perform',
        value: 2,
        source: 'Ensemble',
        condition: {
          type: 'custom',
          description: 'Per ally with this feat also making Perform checks within 30 feet (max +6)',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['teamwork', 'perform', 'skill'],
  },
  {
    id: 'exceptional_aid',
    name: 'Exceptional Aid',
    description:
      'Your assistance to your bonded partner is more effective than usual. When you use the aid another action to assist an ally who also has the Bonded Mind feat, the bonus granted by your aid another increases from +2 to +4.',
    shortDescription: 'Aid another grants +4 instead of +2 to allies with Bonded Mind',
    source: 'Pathfinder Society Field Guide',
    types: ['teamwork'],
    prerequisites: [{ type: 'feat', featId: 'bonded_mind' }],
    effects: [],
    activationMode: 'conditional',
    tags: ['teamwork', 'aid', 'bonded_mind'],
  },
  {
    id: 'extend_the_bulwark',
    name: 'Extend the Bulwark',
    description:
      "You can extend the protection of your armor to an adjacent ally. As a swift action, you can grant an adjacent ally a circumstance bonus to AC equal to half your armor's armor bonus until the start of your next turn. While doing so, you lose your armor's armor bonus to your own AC.",
    shortDescription: 'Grant adjacent ally half your armor bonus to AC; lose armor bonus yourself',
    source: 'Melee Tactics Toolbox',
    types: ['combat', 'teamwork'],
    prerequisites: [],
    effects: [],
    activationMode: 'toggle',
    tags: ['teamwork', 'defense', 'armor'],
  },
  {
    id: 'fighting_frenzy',
    name: 'Fighting Frenzy',
    description:
      'When you and an adjacent ally are both raging, your reckless aggression is tempered by mutual encouragement. While raging and adjacent to an ally with this feat who is also raging, the penalty to AC from rage is reduced by 2 for both of you.',
    shortDescription: 'Reduce AC penalty from rage by 2 when adjacent raging ally has this feat',
    source: "Pathfinder Player Companion: Adventurer's Armory 2",
    types: ['combat', 'teamwork'],
    prerequisites: [
      { type: 'ability_score', ability: 'CHA', minimum: 13 },
      { type: 'class_feature', featureName: 'rage' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['teamwork', 'rage', 'defense'],
  },
  {
    id: 'focusing_blow',
    name: 'Focusing Blow',
    description:
      "An ally's attack can help you shake off a mental effect. Whenever you are affected by a mind-affecting effect that allows a saving throw, an adjacent ally with this feat can use a standard action to deal damage to you. You gain a +1 bonus on your saving throw to remove the effect per 5 points of damage dealt, maximum +4.",
    shortDescription:
      '+1 Will save per 5 damage dealt by adjacent ally (max +4) vs. mind-affecting effects',
    source: 'Orcs of Golarion',
    types: ['teamwork'],
    prerequisites: [
      { type: 'feat', featId: 'hobgoblin_discipline' },
      { type: 'race', raceName: 'hobgoblin' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['teamwork', 'mind', 'saving_throw'],
  },
  {
    id: 'got_your_back',
    name: 'Got Your Back',
    description:
      "When you use the aid another action to help an ally's AC against a specific opponent, that ally is not considered flanked by that opponent and is not flat-footed against them until the start of your next turn.",
    shortDescription:
      'Aid another AC bonus also prevents ally from being flanked or flat-footed vs. that foe',
    source: 'Melee Tactics Toolbox',
    types: ['combat', 'teamwork'],
    prerequisites: [
      { type: 'ability_score', ability: 'INT', minimum: 13 },
      { type: 'feat', featId: 'combat_expertise' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['teamwork', 'defense', 'aid'],
  },
  {
    id: 'group_shared_spells',
    name: 'Group Shared Spells',
    description:
      'Your familiar can share spells with the allies of its master. When you cast a spell with a target of "you" on your familiar, you can have that spell also affect up to one ally within 5 feet of your familiar per 3 caster levels you possess, as long as those allies also have this feat.',
    shortDescription: 'Spells cast on familiar can also affect nearby allies with this feat',
    source: 'Pathfinder Campaign Setting',
    types: ['teamwork'],
    prerequisites: [{ type: 'special', description: 'Familiar with share spells ability' }],
    effects: [],
    activationMode: 'conditional',
    tags: ['teamwork', 'familiar', 'spellcasting'],
  },
  {
    id: 'harder_they_fall',
    name: 'Harder They Fall',
    description:
      'Working with an ally, you can bring down creatures larger than normal. When you and an ally with this feat both threaten the same opponent that is at least one size category larger than you, you can grant your ally a +2 bonus on their bull rush or trip combat maneuver check against that opponent as an immediate action. Alternatively, you can use bull rush or trip against a creature up to two size categories larger than you.',
    shortDescription:
      'Grant ally +2 on bull rush/trip vs. larger foes; you can trip/bull rush creatures two sizes larger',
    source: 'Pathfinder Campaign Setting',
    types: ['combat', 'teamwork'],
    prerequisites: [
      { type: 'ability_score', ability: 'STR', minimum: 13 },
      { type: 'ability_score', ability: 'INT', minimum: 13 },
      { type: 'feat', featId: 'combat_expertise' },
      { type: 'feat', featId: 'power_attack' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['teamwork', 'maneuver', 'size'],
  },
  {
    id: 'horde_charge',
    name: 'Horde Charge',
    description:
      'When you and an ally charge the same opponent in the same round, you overwhelm the target with your combined assault. If you charge an opponent in the same round that an ally with this feat charges the same opponent, you gain a +2 bonus on attack rolls and damage rolls on the first attack made as part of that charge.',
    shortDescription: '+2 attack and damage on charge when ally also charges same foe',
    source: 'Orcs of Golarion',
    types: ['combat', 'teamwork'],
    prerequisites: [
      { type: 'bab', minimum: 1 },
      { type: 'race', raceName: 'half-orc or orc' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'attack.melee',
        value: 2,
        source: 'Horde Charge',
        condition: {
          type: 'custom',
          description:
            'First attack of a charge when an ally with this feat charges the same opponent',
          params: {},
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'damage.melee',
        value: 2,
        source: 'Horde Charge',
        condition: {
          type: 'custom',
          description:
            'First attack of a charge when an ally with this feat charges the same opponent',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['teamwork', 'charge', 'orc'],
  },
  {
    id: 'improved_duck_and_cover',
    name: 'Improved Duck and Cover',
    description:
      'When you use the Duck and Cover feat and your ally has the evasion or improved evasion ability, your ally takes reduced damage. If the ally has evasion, they take no damage on a successful Reflex save and half damage on a failed save. If the ally has improved evasion, they take no damage on either a successful or failed Reflex save.',
    shortDescription:
      'Duck and Cover ally with evasion/improved evasion takes reduced or no damage',
    source: 'Ultimate Combat',
    types: ['teamwork'],
    prerequisites: [{ type: 'feat', featId: 'duck_and_cover' }],
    effects: [],
    activationMode: 'conditional',
    tags: ['teamwork', 'defense', 'evasion'],
  },
  {
    id: 'improved_spell_sharing',
    name: 'Improved Spell Sharing',
    description:
      'You can share ongoing spells with your companion creature more effectively. When you have a spell with a duration of at least 1 round active and your companion creature is within 5 feet of you, you can divide the remaining duration of that spell between yourself and your companion. Each of you receives half the remaining duration.',
    shortDescription: 'Divide active spell duration between yourself and companion creature',
    source: 'Ultimate Combat',
    types: ['teamwork'],
    prerequisites: [
      {
        type: 'special',
        description: 'Ability to acquire animal companion, eidolon, familiar, or special mount',
      },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['teamwork', 'companion', 'spellcasting'],
  },
  {
    id: 'improved_swap_places',
    name: 'Improved Swap Places',
    description:
      'You can swap places with allies of different sizes. When you use the Swap Places feat, you can switch places with a Small or Large ally without either of you provoking attacks of opportunity, as long as your ally is willing.',
    shortDescription: 'Swap Places also works with differently-sized allies without provoking AoOs',
    source: 'Ultimate Combat',
    types: ['combat', 'teamwork'],
    prerequisites: [{ type: 'feat', featId: 'swap_places' }],
    effects: [],
    activationMode: 'conditional',
    tags: ['teamwork', 'movement', 'positioning'],
  },
  {
    id: 'improved_underhanded_teamwork',
    name: 'Improved Underhanded Teamwork',
    description:
      'When an ally with this feat performs a combat maneuver against an opponent within your reach, you can attempt a dirty trick combat maneuver against that opponent as an immediate action to inflict a second condition on them in addition to the condition already inflicted.',
    shortDescription:
      'Attempt dirty trick as immediate action when ally uses combat maneuver to add second condition',
    source: 'Pathfinder Society Scenario',
    types: ['combat', 'teamwork'],
    prerequisites: [
      { type: 'feat', featId: 'combat_expertise' },
      { type: 'feat', featId: 'improved_dirty_trick' },
      { type: 'feat', featId: 'underhanded_teamwork' },
      { type: 'bab', minimum: 6 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['teamwork', 'dirty_trick', 'maneuver'],
  },
  {
    id: 'intercept_charge',
    name: 'Intercept Charge',
    description:
      'You can step in front of a charging foe to protect your ally. When a foe charges an ally with this feat, you can move up to your speed as an immediate action to place yourself in the path of the charge and become the new target of the charge. The foe must continue the charge against you.',
    shortDescription: 'Move up to speed as immediate action to intercept a charge aimed at an ally',
    source: 'Ultimate Combat',
    types: ['combat', 'teamwork'],
    prerequisites: [],
    effects: [],
    activationMode: 'conditional',
    tags: ['teamwork', 'defense', 'charge'],
  },
  {
    id: 'my_blade_is_yours',
    name: 'My Blade Is Yours',
    description:
      "You can exploit the special qualities of your ally's weapon. When you are adjacent to an ally with this feat, you can treat your melee attacks as if they were made with your ally's weapon for the purpose of using the weapon's special qualities (such as bane, flaming, or vorpal). This does not grant you proficiency with the ally's weapon.",
    shortDescription: "Use an adjacent ally's weapon special qualities on your own attacks",
    source: 'Pathfinder Module: Master of the Fallen Fortress',
    types: ['combat', 'teamwork'],
    prerequisites: [
      { type: 'ability_score', ability: 'INT', minimum: 13 },
      { type: 'feat', featId: 'combat_expertise' },
      { type: 'skill', skillId: 'sense_motive', ranks: 3 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['teamwork', 'weapon', 'enhancement'],
  },
  {
    id: 'open_up',
    name: 'Open Up',
    description:
      "When you use the aid another action to help an ally's attack roll against a specific opponent, that ally's attack ignores the opponent's shield bonus to AC.",
    shortDescription: "Aid another attack bonus also lets ally ignore target's shield AC bonus",
    source: 'Melee Tactics Toolbox',
    types: ['combat', 'teamwork'],
    prerequisites: [
      { type: 'ability_score', ability: 'INT', minimum: 13 },
      { type: 'feat', featId: 'combat_expertise' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['teamwork', 'attack', 'shield'],
  },
  {
    id: 'out_of_the_sun',
    name: 'Out of the Sun',
    description:
      "You can feint to give your ally the benefits of your feint. When you successfully feint an opponent in bright light, an adjacent ally with this feat gains the benefit of the feint against that opponent (the foe loses its Dexterity bonus to AC against the ally's next attack) instead of you.",
    shortDescription:
      'Feint in bright light to give adjacent ally the feint benefit instead of yourself',
    source: 'Pathfinder Campaign Setting',
    types: ['combat', 'teamwork'],
    prerequisites: [
      { type: 'skill', skillId: 'bluff', ranks: 3 },
      { type: 'skill', skillId: 'stealth', ranks: 3 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['teamwork', 'feint', 'light'],
  },
  {
    id: 'overwhelm',
    name: 'Overwhelm',
    description:
      'You can use superior numbers to flank even very large opponents. When you and an ally with this feat both threaten an opponent that is at least two size categories larger than you, you are considered to be flanking that opponent even if you are not on opposite sides of it.',
    shortDescription:
      'Flank opponents two or more size categories larger when ally also threatens them',
    source: 'Dungeon Denizens Revisited',
    types: ['combat', 'teamwork'],
    prerequisites: [],
    effects: [],
    activationMode: 'conditional',
    tags: ['teamwork', 'flanking', 'size'],
  },
  {
    id: 'phalanx_fighter',
    name: 'Phalanx Fighter',
    description:
      'Your close cooperation with good-aligned allies strengthens your defenses. When you are adjacent to one or more allies with this feat, you gain a sacred bonus to your AC and on saving throws equal to the number of adjacent allies with this feat (maximum +4).',
    shortDescription:
      'Sacred bonus to AC and saves equal to number of adjacent allies with feat (max +4)',
    source: 'Champions of Purity',
    types: ['combat', 'teamwork'],
    prerequisites: [
      { type: 'bab', minimum: 3 },
      { type: 'special', description: 'Good alignment' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.SACRED,
        target: 'ac',
        value: 1,
        source: 'Phalanx Fighter',
        condition: {
          type: 'custom',
          description: 'Per adjacent ally with this feat (max +4); requires good alignment',
          params: {},
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.SACRED,
        target: 'saving_throw.all',
        value: 1,
        source: 'Phalanx Fighter',
        condition: {
          type: 'custom',
          description: 'Per adjacent ally with this feat (max +4); requires good alignment',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['teamwork', 'defense', 'sacred'],
  },
  {
    id: 'punch_through',
    name: 'Punch Through',
    description:
      "Your coordinated attacks weaken an opponent's defenses. When you hit an opponent with a melee attack, allies with this feat who are adjacent to that opponent ignore up to 5 points of that opponent's damage reduction on their attacks against the opponent until the start of your next turn.",
    shortDescription:
      'Your melee hit causes allies to ignore up to 5 DR on that foe until your next turn',
    source: 'Pathfinder Society Scenario',
    types: ['combat', 'teamwork'],
    prerequisites: [{ type: 'bab', minimum: 6 }],
    effects: [],
    activationMode: 'conditional',
    tags: ['teamwork', 'damage_reduction', 'attack'],
  },
  {
    id: 'scarred_legion',
    name: 'Scarred Legion',
    description:
      'Your shared history of battle grants you and your allies mutual confidence. When you are adjacent to one or more allies with this feat, you gain a +2 bonus on Intimidate checks and a +2 morale bonus on Will saving throws.',
    shortDescription:
      '+2 Intimidate and +2 morale bonus on Will saves when adjacent to allies with feat',
    source: 'Monster Codex',
    types: ['teamwork'],
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.MORALE,
        target: 'saving_throw.will',
        value: 2,
        source: 'Scarred Legion',
        condition: {
          type: 'custom',
          description: 'When adjacent to one or more allies with this feat',
          params: {},
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skill.intimidate',
        value: 2,
        source: 'Scarred Legion',
        condition: {
          type: 'custom',
          description: 'When adjacent to one or more allies with this feat',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['teamwork', 'intimidate', 'will'],
  },
  {
    id: 'scion_of_the_land',
    name: 'Scion of the Land',
    description:
      'You can share your knowledge of the natural world with your allies. All allies within 60 feet of you who also have this feat can move through natural terrain without leaving tracks, as the pass without trace spell. Additionally, they gain a +2 bonus on Survival checks made in natural environments.',
    shortDescription:
      'Allies within 60 ft with feat leave no tracks and gain +2 Survival in natural terrain',
    source: 'Pathfinder Campaign Setting',
    types: ['teamwork'],
    prerequisites: [{ type: 'skill', skillId: 'survival', ranks: 1 }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skill.survival',
        value: 2,
        source: 'Scion of the Land',
        condition: {
          type: 'custom',
          description: 'In natural environments when within 60 ft of an ally with this feat',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['teamwork', 'survival', 'nature'],
  },
  {
    id: 'secret_language',
    name: 'Secret Language',
    description:
      'You have developed a secret language of gestures and code words with your allies. When passing a secret message to an ally who also has this feat using Bluff, you gain a +5 circumstance bonus on the Bluff check.',
    shortDescription: '+5 circumstance bonus on Bluff to pass secret messages to allies with feat',
    source: 'Champions of Balance',
    types: ['teamwork'],
    prerequisites: [
      { type: 'skill', skillId: 'bluff', ranks: 1 },
      { type: 'skill', skillId: 'linguistics', ranks: 1 },
      { type: 'skill', skillId: 'sense_motive', ranks: 1 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.CIRCUMSTANCE,
        target: 'skill.bluff',
        value: 5,
        source: 'Secret Language',
        condition: {
          type: 'custom',
          description: 'When passing secret messages to allies with this feat',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['teamwork', 'bluff', 'communication'],
  },
  {
    id: 'share_healing',
    name: 'Share Healing',
    description:
      'You can channel healing magic to your companion creature from a distance. Whenever a spell or effect heals you of hit point damage and your companion creature is within 30 feet, you can redirect any portion of that healing to your companion instead.',
    shortDescription: 'Redirect healing spells to companion creature within 30 feet',
    source: 'Ultimate Combat',
    types: ['teamwork'],
    prerequisites: [
      {
        type: 'special',
        description: 'Ability to acquire animal companion, eidolon, familiar, or special mount',
      },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['teamwork', 'companion', 'healing'],
  },
  {
    id: 'shielded_caster',
    name: 'Shielded Caster',
    description:
      'Allies protecting you from harm make it easier to cast spells in combat. Whenever an adjacent ally with this feat uses the aid another action to assist your concentration check, you gain a +4 bonus on concentration checks. The bonus increases by +4 for each additional ally with this feat adjacent to you who aids your concentration.',
    shortDescription:
      '+4 concentration per adjacent ally with feat aiding your concentration checks',
    source: "Advanced Player's Guide",
    types: ['teamwork'],
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'spell.concentration',
        value: 4,
        source: 'Shielded Caster',
        condition: {
          type: 'custom',
          description:
            'Per adjacent ally with this feat using aid another on your concentration check',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['teamwork', 'concentration', 'spellcasting'],
  },
  {
    id: 'snapping_flank',
    name: 'Snapping Flank',
    description:
      'You can snap at flanked foes even when your attention is elsewhere. When you are flanking an opponent with an ally who also has this feat, you can make a bite attack against that opponent as a swift action.',
    shortDescription:
      'Make a bite attack as a swift action when flanking with an ally with this feat',
    source: 'Monster Codex',
    types: ['combat', 'teamwork'],
    prerequisites: [
      { type: 'bab', minimum: 9 },
      { type: 'special', description: 'Bite attack' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['teamwork', 'bite', 'flanking'],
  },
  {
    id: 'special_delivery',
    name: 'Special Delivery',
    description:
      'You can designate an ally to deliver your touch spells. When you cast a touch spell, you can designate an ally who also has the Bonded Mind feat as the toucher. That ally can deliver the spell as a touch attack on their next turn as if they had cast the spell themselves.',
    shortDescription: 'Designate Bonded Mind ally to deliver your touch spells on their turn',
    source: 'Pathfinder Society Field Guide',
    types: ['teamwork'],
    prerequisites: [
      { type: 'feat', featId: 'bonded_mind' },
      { type: 'feat', featId: 'share_spells' },
      { type: 'special', description: 'Ability to deliver touch spells' },
      { type: 'caster_level', minimum: 3 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['teamwork', 'touch_spell', 'bonded_mind'],
  },
  {
    id: 'spell_chain',
    name: 'Spell Chain',
    description:
      "When you and an ally both attempt to overcome the same creature's spell resistance, you can build on each other's efforts. If an ally with this feat has made a caster level check to overcome spell resistance against a target within the past round, you gain a bonus on your caster level check equal to twice the result of the die portion of your ally's roll.",
    shortDescription:
      "Gain bonus on caster level check vs. SR equal to twice ally's die roll if they tried within 1 round",
    source: 'Pathfinder Society Scenario',
    types: ['teamwork'],
    prerequisites: [{ type: 'feat', featId: 'spell_penetration' }],
    effects: [],
    activationMode: 'conditional',
    tags: ['teamwork', 'spell_resistance', 'spellcasting'],
  },
  {
    id: 'spirit_of_the_corps',
    name: 'Spirit of the Corps',
    description:
      "You draw inspiration from your allies' magical enhancements. Once per round when a morale bonus is granted to an ally with this feat within 30 feet of you by a spell or effect, you can apply that same morale bonus to one of your rolls or to your AC for 1 round.",
    shortDescription:
      "Once per round, copy a morale bonus from a nearby ally's spell/effect to one of your rolls",
    source: 'Monster Codex',
    types: ['teamwork'],
    prerequisites: [],
    effects: [],
    activationMode: 'conditional',
    tags: ['teamwork', 'morale', 'buff'],
  },
  {
    id: 'splash_volley',
    name: 'Splash Volley',
    description:
      'You can throw a splash weapon to your ally who then redirects it at a separate foe. When you throw a splash weapon and an ally with this feat is in the path of the throw, that ally can catch the weapon and immediately redirect it at another target within 30 feet as an immediate action.',
    shortDescription:
      'Throw splash weapon to ally who can redirect it at a different target as immediate action',
    source: 'Pathfinder Society Field Guide',
    types: ['combat', 'teamwork'],
    prerequisites: [{ type: 'bab', minimum: 1 }],
    effects: [],
    activationMode: 'conditional',
    tags: ['teamwork', 'thrown', 'splash'],
  },
  {
    id: 'stealth_synergy',
    name: 'Stealth Synergy',
    description:
      'Working in tandem, you and your allies are more skilled at avoiding notice. While you can see an ally with this feat and both of you are trying to use Stealth, you can take the highest die result among all participating allies and apply it to all of your Stealth checks.',
    shortDescription: 'Use highest die result among all allies with feat for all Stealth checks',
    source: 'Ultimate Combat',
    types: ['teamwork'],
    prerequisites: [],
    effects: [],
    activationMode: 'conditional',
    tags: ['teamwork', 'stealth', 'skill'],
  },
  {
    id: 'stick_together',
    name: 'Stick Together',
    description:
      'You move to stay close to your ally in the heat of battle. When an adjacent ally with this feat moves, you can move up to your speed as an immediate action to remain adjacent to them. If you do, you are staggered until the start of your next turn.',
    shortDescription:
      'Move to stay adjacent to a moving ally as immediate action; become staggered until next turn',
    source: 'Melee Tactics Toolbox',
    types: ['teamwork'],
    prerequisites: [],
    effects: [],
    activationMode: 'conditional',
    tags: ['teamwork', 'movement', 'positioning'],
  },
  {
    id: 'take_the_hit',
    name: 'Take the Hit',
    description:
      'You can sacrifice yourself to protect your bonded ally. When an adjacent ally with the Bonded Mind feat is hit by an attack, you can spend an immediate action to absorb up to half the damage from that attack, taking that damage yourself instead.',
    shortDescription:
      'As immediate action, absorb up to half damage from attack hitting an adjacent Bonded Mind ally',
    source: 'Pathfinder Society Field Guide',
    types: ['combat', 'teamwork'],
    prerequisites: [
      { type: 'feat', featId: 'bonded_mind' },
      { type: 'bab', minimum: 6 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['teamwork', 'defense', 'bonded_mind'],
  },
  {
    id: 'tandem_evasion',
    name: 'Tandem Evasion',
    description:
      "You and your allies help each other dodge the devastating attacks of dragons. When you and an ally with this feat are both within the area of a dragon's breath weapon or tail sweep, you can each attempt a Reflex saving throw with the benefit of evasion (or improved evasion if you already have evasion). This benefit applies only when an ally with this feat is within 30 feet of you.",
    shortDescription:
      'Gain evasion or improved evasion vs. dragon breath/tail sweep near ally with feat',
    source: 'Dungeon Denizens Revisited',
    types: ['combat', 'teamwork'],
    prerequisites: [
      { type: 'ability_score', ability: 'DEX', minimum: 13 },
      { type: 'feat', featId: 'dodge' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['teamwork', 'evasion', 'dragon'],
  },
  {
    id: 'team_pickpocketing',
    name: 'Team Pickpocketing',
    description:
      "While an ally distracts a target, you can rob them blind. When an ally with this feat makes a Bluff check to create a distraction against an opponent, you can attempt a Sleight of Hand check to pick that opponent's pocket as an immediate action.",
    shortDescription:
      'Attempt Sleight of Hand as immediate action when ally uses Bluff to distract target',
    source: 'Ultimate Combat',
    types: ['teamwork'],
    prerequisites: [
      { type: 'skill', skillId: 'bluff', ranks: 1 },
      { type: 'skill', skillId: 'sleight_of_hand', ranks: 1 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['teamwork', 'sleight_of_hand', 'theft'],
  },
  {
    id: 'timely_coordination',
    name: 'Timely Coordination',
    description:
      "Your readied actions are more effective when triggered by your allies' actions. When you take a readied action triggered by an ally's action, you gain a +1 bonus on attack rolls and skill checks made as part of that readied action.",
    shortDescription:
      '+1 on attack rolls and skill checks for readied actions triggered by ally actions',
    source: 'Pathfinder Module: Master of the Fallen Fortress',
    types: ['teamwork'],
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'attack.melee',
        value: 1,
        source: 'Timely Coordination',
        condition: {
          type: 'custom',
          description: "On readied actions triggered by an ally's action",
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['teamwork', 'readied_action', 'coordination'],
  },
  {
    id: 'topple_foe',
    name: 'Topple Foe',
    description:
      "You exploit an ally's flanking position to trip larger opponents. When you attempt a trip combat maneuver against an opponent that an ally with this feat is flanking, you gain a +1 bonus on your CMB check. On subsequent rounds in which you continue to threaten the same opponent while being flanked by the same ally, this bonus increases by +1 (maximum +4).",
    shortDescription:
      '+1 CMB to trip flanked foe, increasing by +1 each consecutive round (max +4)',
    source: 'Rival Guide',
    types: ['combat', 'teamwork'],
    prerequisites: [
      { type: 'feat', featId: 'combat_expertise' },
      { type: 'feat', featId: 'improved_trip' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['teamwork', 'trip', 'maneuver'],
  },
  {
    id: 'trade_initiative',
    name: 'Trade Initiative',
    description:
      'You and an ally can swap your initiative rolls at the start of combat. At the start of a combat encounter, before sides are determined, you and an adjacent ally who also has this feat can swap your initiative die rolls with each other.',
    shortDescription: 'Swap initiative roll results with an adjacent ally before combat begins',
    source: 'Pathfinder Society Field Guide',
    types: ['teamwork'],
    prerequisites: [],
    effects: [],
    activationMode: 'conditional',
    tags: ['teamwork', 'initiative', 'combat'],
  },
  {
    id: 'tribe_mentality',
    name: 'Tribe Mentality',
    description:
      "When you and a nearby ally are both targeted by or within the area of the same enchantment or emotion effect, both of you roll saving throws but either of you can use the other's result. You must be within 30 feet of the ally with this feat.",
    shortDescription:
      'Share saving throw results with nearby ally against enchantment/emotion effects',
    source: 'Kobolds of Golarion',
    types: ['teamwork'],
    prerequisites: [],
    effects: [],
    activationMode: 'conditional',
    tags: ['teamwork', 'saving_throw', 'enchantment'],
  },
  {
    id: 'wall_of_flesh',
    name: 'Wall of Flesh',
    description:
      'When fighting in close quarters with larger allies, you can use them to enhance your own reach and presence. When you are adjacent to a Medium or larger ally with this feat, you are treated as one size category larger for the purpose of combat maneuvers.',
    shortDescription:
      'Treated as one size larger for combat maneuvers when adjacent to Medium+ ally with feat',
    source: 'Kobolds of Golarion',
    types: ['combat', 'teamwork'],
    prerequisites: [{ type: 'special', description: 'Small size or smaller' }],
    effects: [],
    activationMode: 'conditional',
    tags: ['teamwork', 'size', 'maneuver'],
  },
  {
    id: 'wild_flanking',
    name: 'Wild Flanking',
    description:
      "You throw caution to the wind when flanking, raining grievous blows on your opponent with little concern for your ally's well-being. When you are flanking an opponent with an ally with this feat, you can choose to make your attacks as if you were not flanking. If you do, any attacks you make against the flanked opponent can also potentially hit your flanking ally (roll attacks against the ally if you miss the opponent).",
    shortDescription:
      'Attack flanked foe recklessly; deal extra damage but risk hitting ally on misses',
    source: 'Pathfinder Society Field Guide',
    types: ['combat', 'teamwork'],
    prerequisites: [
      { type: 'feat', featId: 'power_attack' },
      { type: 'bab', minimum: 4 },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['teamwork', 'flanking', 'reckless'],
  },
  {
    id: 'wounded_paw_gambit',
    name: 'Wounded Paw Gambit',
    description:
      'Your nearby allies can take advantage of the opening created by your Broken Wing Gambit. When you activate the Broken Wing Gambit feat, all allies within 30 feet of you with this feat can make ranged attacks against the opponent as an immediate action.',
    shortDescription:
      'Allies within 30 ft can make ranged attacks as immediate action when you use Broken Wing Gambit',
    source: 'Ultimate Combat',
    types: ['combat', 'teamwork'],
    prerequisites: [
      { type: 'feat', featId: 'broken_wing_gambit' },
      { type: 'skill', skillId: 'bluff', ranks: 5 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['teamwork', 'ranged', 'opportunity'],
  },
];
