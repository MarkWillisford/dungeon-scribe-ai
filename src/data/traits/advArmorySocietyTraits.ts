import type { TraitDefinition } from '@/types/traits';
import { BonusType } from '@/types/base';

export const ADV_ARMORY_SOCIETY_TRAITS: TraitDefinition[] = [
  // ==================== EQUIPMENT TRAITS — Adventurer's Armory ====================
  {
    id: 'augmented_disguise',
    name: 'Augmented Disguise',
    description:
      'You gain a +2 trait bonus on Disguise checks when wearing a wig, false beard, or comparable large prop, or when wearing a special costume or eye-catching bauble that reinforces the disguise.',
    shortDescription: '+2 Disguise when using a wig, false beard, or costume prop',
    source: "Adventurer's Armory",
    category: 'equipment',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.disguise',
        value: 2,
        source: 'Augmented Disguise',
        condition: {
          type: 'custom',
          params: { requirement: 'wearing wig, false beard, or costume prop' },
          description: 'When wearing a wig, false beard, or comparable prop',
        },
      },
    ],
    tags: ['disguise', 'bluff', 'social', 'costume'],
  },
  {
    id: 'dealmaker',
    name: 'Dealmaker',
    description:
      'Once per week, when seeking items that exceed the local base value, you may make a DC 10 Diplomacy check (DC +10 for each community size category between your current location and the required community size; +10 additional for each subsequent attempt in the same community) to buy or sell that item as if the local community were of sufficient size.',
    shortDescription: 'Once/week: Diplomacy check to trade items above local base value',
    source: "Adventurer's Armory",
    category: 'equipment',
    prerequisites: [],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.TRAIT,
        target: 'special.ability',
        value: 0,
        source: 'Dealmaker',
      },
    ],
    tags: ['diplomacy', 'trade', 'market', 'commerce'],
  },
  {
    id: 'extremely_fashionable_aa',
    name: 'Extremely Fashionable',
    description:
      'Whenever you are wearing clothing and/or jewelry worth at least 150 gp (and not otherwise covered in gore, sewage, or other things that mar your overall look), you gain a +1 trait bonus on Bluff, Diplomacy, and Intimidate checks. In addition, one of these skills (your choice) is always a class skill for you.',
    shortDescription:
      '+1 Bluff, Diplomacy, Intimidate (wearing 150 gp+ attire); one becomes class skill',
    source: "Adventurer's Armory",
    category: 'equipment',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.bluff',
        value: 1,
        source: 'Extremely Fashionable',
        condition: {
          type: 'custom',
          params: { requirement: 'wearing clothing/jewelry worth 150 gp+' },
          description: 'When wearing clothing and/or jewelry worth at least 150 gp',
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.diplomacy',
        value: 1,
        source: 'Extremely Fashionable',
        condition: {
          type: 'custom',
          params: { requirement: 'wearing clothing/jewelry worth 150 gp+' },
          description: 'When wearing clothing and/or jewelry worth at least 150 gp',
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.intimidate',
        value: 1,
        source: 'Extremely Fashionable',
        condition: {
          type: 'custom',
          params: { requirement: 'wearing clothing/jewelry worth 150 gp+' },
          description: 'When wearing clothing and/or jewelry worth at least 150 gp',
        },
      },
    ],
    choices: [
      {
        type: 'class_skill',
        label: 'Choose class skill',
        options: ['Bluff', 'Diplomacy', 'Intimidate'],
        affectsEffects: true,
        effectTargetTemplate: 'class_skill.{choice}',
      },
    ],
    tags: ['bluff', 'diplomacy', 'intimidate', 'fashion', 'class skill'],
  },
  {
    id: 'heirloom_weapon',
    name: 'Heirloom Weapon',
    description:
      'You possess a non-masterwork simple or martial weapon that has been passed down through your family. When you select this trait, choose one of the following benefits: proficiency with that specific weapon; a +1 trait bonus on attacks of opportunity made with that specific weapon; or a +2 trait bonus on one kind of combat maneuver performed with that specific weapon.',
    shortDescription:
      'Choose: proficiency, +1 AoO attack, or +2 one combat maneuver with your heirloom weapon',
    source: "Adventurer's Armory",
    category: 'equipment',
    prerequisites: [],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.TRAIT,
        target: 'special.ability',
        value: 0,
        source: 'Heirloom Weapon',
      },
    ],
    choices: [
      {
        type: 'custom',
        label: 'Choose benefit',
        options: [
          'Proficiency with heirloom weapon',
          '+1 trait bonus on attacks of opportunity with heirloom weapon',
          '+2 trait bonus on one combat maneuver with heirloom weapon',
        ],
        affectsEffects: false,
      },
    ],
    tags: ['weapon', 'proficiency', 'combat maneuver', 'attack of opportunity'],
  },
  {
    id: 'improvisational_equipment',
    name: 'Improvisational Equipment',
    description:
      'You have a talent for using everyday items in creative ways. Reduce any penalty for using a non-standard item by 2 when using equipment outside its intended purpose (such as using a crowbar as a grappling hook or cloth as bandaging). This benefit does not apply to improvised weapon penalties.',
    shortDescription: 'Reduce improvised equipment use penalties by 2',
    source: "Adventurer's Armory",
    category: 'equipment',
    prerequisites: [],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.TRAIT,
        target: 'special.ability',
        value: 0,
        source: 'Improvisational Equipment',
      },
    ],
    tags: ['improvised', 'equipment', 'creative', 'penalty reduction'],
  },
  {
    id: 'iron_liver_aa',
    name: 'Iron Liver',
    description:
      'Whether through fortunate genetics or a lifetime of heavy drinking, your liver is especially resilient. You gain a +2 trait bonus on Fortitude saves against poison and drugs, and a +4 trait bonus on Fortitude saves against the effects of alcohol.',
    shortDescription: '+2 Fort vs poison and drugs; +4 Fort vs alcohol',
    source: "Adventurer's Armory",
    category: 'equipment',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.fortitude',
        value: 2,
        source: 'Iron Liver',
        condition: {
          type: 'custom',
          params: { requirement: 'against poison or drugs' },
          description: 'Against poison and drugs',
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.fortitude',
        value: 4,
        source: 'Iron Liver',
        condition: {
          type: 'custom',
          params: { requirement: 'against alcohol' },
          description: 'Against effects of alcohol',
        },
      },
    ],
    tags: ['fortitude', 'poison', 'drugs', 'alcohol', 'resilience'],
  },
  {
    id: 'power_of_suggestion',
    name: 'Power of Suggestion',
    description:
      'You can make a Bluff check to convince observers that an object you possess is something different. The base DC is 20 for items similar in size, shape, and color (such as a glaive and a quarterstaff), with +5 added for each dissimilar aspect. The effect lasts 1 minute; if the object remains visible, observers may attempt another Bluff check to maintain the ruse.',
    shortDescription: 'Bluff check (DC 20+) to disguise one held object as another for 1 minute',
    source: "Adventurer's Armory",
    category: 'equipment',
    prerequisites: [],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.TRAIT,
        target: 'special.ability',
        value: 0,
        source: 'Power of Suggestion',
      },
    ],
    tags: ['bluff', 'deception', 'disguise', 'item'],
  },
  {
    id: 'prehensile_whip',
    name: 'Prehensile Whip',
    description:
      'Your whip functions as a rope with an integrated grappling hook. Attaching the whip to a surface or object is a standard action; detaching it is a full-round action.',
    shortDescription:
      'Your whip acts as a grappling hook rope (standard action to attach, full-round to detach)',
    source: "Adventurer's Armory",
    category: 'equipment',
    prerequisites: [],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.TRAIT,
        target: 'special.ability',
        value: 0,
        source: 'Prehensile Whip',
      },
    ],
    tags: ['whip', 'grappling hook', 'utility', 'movement'],
  },
  {
    id: 'quick_learner',
    name: 'Quick Learner',
    description:
      'You pick up new weapons quickly through practical use. The first time you make an attack in a given combat with a weapon you are not proficient with, your non-proficiency penalty is only -2 instead of -4.',
    shortDescription:
      'First attack with non-proficient weapon: penalty reduced to -2 instead of -4',
    source: "Adventurer's Armory",
    category: 'equipment',
    prerequisites: [],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.TRAIT,
        target: 'special.ability',
        value: 0,
        source: 'Quick Learner',
      },
    ],
    tags: ['weapon proficiency', 'penalty reduction', 'adaptability'],
  },
  {
    id: 'rough_and_ready_aa',
    name: 'Rough and Ready',
    description:
      'You have learned to use the tools of your trade as weapons. When using a tool of your trade (such as a shovel, pick, or blacksmith hammer) as a weapon, you do not take the improvised weapon penalty and gain a +1 trait bonus on attack rolls. Fragile items like lutes and brooms are not suitable for combat use.',
    shortDescription: 'No improvised weapon penalty and +1 attack with trade tools used as weapons',
    source: "Adventurer's Armory",
    category: 'equipment',
    prerequisites: [
      {
        type: 'special',
        description: 'At least 1 rank in an appropriate Craft or Profession skill',
      },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'attack.melee',
        value: 1,
        source: 'Rough and Ready',
        condition: {
          type: 'custom',
          params: { requirement: 'attacking with a tool of your trade' },
          description: 'When using a trade tool as a weapon',
        },
      },
    ],
    tags: ['improvised weapon', 'attack', 'craft', 'profession', 'tools'],
  },
  {
    id: 'stage_magic',
    name: 'Stage Magic',
    description:
      'You have trained extensively with alchemical items to enhance performances. When you use an appropriate alchemical item (such as alchemist fire, a smokestick, or a thunderstone) as part of a performance, you gain a +2 trait bonus on Perform checks for that performance. The alchemical item is expended but produces no harmful effects — it serves a purely aesthetic function within the performance.',
    shortDescription:
      '+2 Perform when using an alchemical item (harmlessly) as part of a performance',
    source: "Adventurer's Armory",
    category: 'equipment',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.perform',
        value: 2,
        source: 'Stage Magic',
        condition: {
          type: 'custom',
          params: { requirement: 'using alchemical item in performance' },
          description: 'When using an appropriate alchemical item as part of a performance',
        },
      },
    ],
    tags: ['perform', 'alchemy', 'entertainment', 'alchemist fire'],
  },
  {
    id: 'stealthy_escape',
    name: 'Stealthy Escape',
    description:
      'You are skilled at escaping from confinement without being noticed. When escaping from manacles, rope, or comparable restraints (but not grapples or similar combat effects), you may substitute a Sleight of Hand check for the Escape Artist check. After successfully escaping, you gain a +2 trait bonus on Bluff checks to pretend you are still bound.',
    shortDescription:
      'Use Sleight of Hand instead of Escape Artist for restraints; +2 Bluff to feign being bound after escape',
    source: "Adventurer's Armory",
    category: 'equipment',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.bluff',
        value: 2,
        source: 'Stealthy Escape',
        condition: {
          type: 'custom',
          params: { requirement: 'after escaping from restraints' },
          description: 'On Bluff checks to pretend still bound after escaping',
        },
      },
    ],
    tags: ['escape artist', 'sleight of hand', 'bluff', 'stealth', 'restraints'],
  },
  {
    id: 'thrown_together_fashion',
    name: 'Thrown-Together Fashion',
    description:
      'With a basic sewing kit or disguise kit, you can make a Disguise check to change one outfit into another outfit. The DC equals 10 + the gold piece difference between the two outfits costs. This process takes 10 minutes per 1-gp difference in the outfits costs.',
    shortDescription:
      'Use Disguise check to convert one outfit into another (DC 10 + gp difference)',
    source: "Adventurer's Armory",
    category: 'equipment',
    prerequisites: [],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.TRAIT,
        target: 'special.ability',
        value: 0,
        source: 'Thrown-Together Fashion',
      },
    ],
    tags: ['disguise', 'crafting', 'outfit', 'fashion', 'sewing'],
  },

  // ==================== COMBAT TRAITS — Pathfinder Society Primer ====================
  {
    id: 'ambush_training',
    name: 'Ambush Training',
    description:
      'You have trained in the art of setting and springing ambushes, gaining a +1 trait bonus on initiative checks and a +1 trait bonus on weapon damage rolls during surprise rounds in which you act.',
    shortDescription: '+1 initiative; +1 weapon damage in surprise rounds',
    source: 'Pathfinder Society Primer',
    category: 'combat',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'initiative',
        value: 1,
        source: 'Ambush Training',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'damage.melee',
        value: 1,
        source: 'Ambush Training',
        condition: {
          type: 'custom',
          params: { requirement: 'acting in surprise round' },
          description: 'On weapon damage rolls during surprise rounds in which you act',
        },
      },
    ],
    tags: ['initiative', 'damage', 'surprise round', 'ambush'],
  },
  {
    id: 'muscle_of_the_society',
    name: 'Muscle of the Society',
    description:
      'Your training in the Swords faction has given you an edge when it comes to breaking things and carrying heavy loads. You gain a +2 trait bonus on Strength checks to break doors and lift portcullises, and treat your Strength score as 2 points higher for the purpose of determining carrying capacity.',
    shortDescription: '+2 Strength checks to break doors/portcullises; carry as if Strength +2',
    source: 'Pathfinder Society Primer',
    category: 'combat',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'ability_check.strength',
        value: 2,
        source: 'Muscle of the Society',
        condition: {
          type: 'custom',
          params: { requirement: 'breaking doors or lifting portcullises' },
          description: 'On Strength checks to break doors and lift portcullises',
        },
      },
      {
        type: 'special',
        bonusType: BonusType.TRAIT,
        target: 'special.carrying_capacity',
        value: 2,
        source: 'Muscle of the Society',
      },
    ],
    tags: ['strength', 'carrying capacity', 'doors', 'breaking'],
  },

  // ==================== SOCIAL TRAITS — Pathfinder Society Primer ====================
  {
    id: 'clever_wordplay_aa',
    name: 'Clever Wordplay',
    description:
      'Your cunning and logic allow you to talk your way out of (or into) situations. Choose one Charisma-based skill. You may use your Intelligence modifier instead of your Charisma modifier when making checks with that skill.',
    shortDescription: 'Use Intelligence instead of Charisma for one chosen Charisma-based skill',
    source: 'Pathfinder Society Primer',
    category: 'social',
    prerequisites: [],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.TRAIT,
        target: 'special.ability',
        value: 0,
        source: 'Clever Wordplay',
      },
    ],
    choices: [
      {
        type: 'skill',
        label: 'Choose Charisma-based skill to use Intelligence for',
        options: [
          'Bluff',
          'Diplomacy',
          'Disguise',
          'Handle Animal',
          'Intimidate',
          'Perform',
          'Use Magic Device',
        ],
        affectsEffects: true,
        effectTargetTemplate: 'skill_ability_override.{choice}.intelligence',
      },
    ],
    tags: ['intelligence', 'charisma', 'bluff', 'diplomacy', 'intimidate', 'skill'],
  },
  {
    id: 'relic_proof',
    name: 'Relic-Proof',
    description:
      'Your magical experimentation — both successful and failed — has made you resistant to magic stored in items. You gain a +1 trait bonus on saving throws against effects produced by spell completion and spell trigger items.',
    shortDescription: '+1 saving throws vs spell completion and spell trigger items',
    source: 'Pathfinder Society Primer',
    category: 'social',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.all',
        value: 1,
        source: 'Relic-Proof',
        condition: {
          type: 'custom',
          params: { requirement: 'against spell completion or spell trigger items' },
          description: 'Against effects from spell completion and spell trigger magic items',
        },
      },
    ],
    tags: ['saving throw', 'magic items', 'spell completion', 'spell trigger', 'magic resistance'],
  },

  // ==================== MAGIC TRAITS — Pathfinder Society Primer ====================
  {
    id: 'insistent_benefactor',
    name: 'Insistent Benefactor',
    description:
      'You have mastered the art of ensuring your allies accept your magical assistance. You gain a +2 trait bonus on caster level checks to overcome spell resistance when casting harmless spells, and increase the saving throw DC of harmless spells you cast by 2.',
    shortDescription: '+2 CL to overcome SR for harmless spells; +2 DC on harmless spells',
    source: 'Pathfinder Society Primer',
    category: 'magic',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'spell.caster_level_check',
        value: 2,
        source: 'Insistent Benefactor',
        condition: {
          type: 'custom',
          params: { requirement: 'harmless spells vs spell resistance' },
          description: 'On caster level checks to overcome spell resistance with harmless spells',
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'spell.save_dc',
        value: 2,
        source: 'Insistent Benefactor',
        condition: {
          type: 'custom',
          params: { requirement: 'harmless spells that allow saves' },
          description: 'To saving throw DCs of harmless spells that allow saves',
        },
      },
    ],
    tags: ['spell resistance', 'harmless spells', 'caster level', 'saving throw DC'],
  },
  {
    id: 'pathfinders_focus',
    name: "Pathfinder's Focus",
    description:
      'You may select a magnetic compass as your arcane bond class feature. You may spend 250 gp to upgrade this compass to a wayfinder, and you may further upgrade the wayfinder to a variant or unique version using the standard magic item improvement rules. Your bonded wayfinder must be held in hand to function as a bonded object.',
    shortDescription:
      'May choose a magnetic compass (upgradeable to wayfinder) as your arcane bond',
    source: 'Pathfinder Society Primer',
    category: 'magic',
    prerequisites: [{ type: 'class', className: 'Wizard' }],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.TRAIT,
        target: 'special.ability',
        value: 0,
        source: "Pathfinder's Focus",
      },
    ],
    tags: ['arcane bond', 'wayfinder', 'compass', 'wizard'],
  },

  // ==================== COMBAT TRAITS — Quests and Campaigns ====================
  {
    id: 'crowd_dodger_qac',
    name: 'Crowd Dodger',
    description:
      "You grew up navigating the tight alleyways and crowded streets of an urban environment. You gain a +2 trait bonus on Acrobatics checks to move through another creature's space and on Acrobatics checks to avoid attacks of opportunity when leaving a threatened square.",
    shortDescription:
      '+2 Acrobatics to move through creature space and to avoid AoOs when leaving threatened squares',
    source: 'Quests and Campaigns',
    category: 'combat',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.acrobatics',
        value: 2,
        source: 'Crowd Dodger',
        condition: {
          type: 'custom',
          params: { requirement: 'moving through creature space or avoiding AoO' },
          description:
            'On Acrobatics checks to move through creature space or avoid attacks of opportunity',
        },
      },
    ],
    tags: ['acrobatics', 'movement', 'attacks of opportunity', 'urban'],
  },
  {
    id: 'disillusioned',
    name: 'Disillusioned',
    description:
      'Your childhood ended abruptly when you witnessed a disaster or atrocity. As a coping mechanism, you have learned to suppress your emotions. You gain a +2 trait bonus on Will saving throws against emotion and fear effects.',
    shortDescription: '+2 Will saves vs emotion and fear effects',
    source: 'Quests and Campaigns',
    category: 'combat',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.will',
        value: 2,
        source: 'Disillusioned',
        condition: {
          type: 'custom',
          params: { requirement: 'emotion and fear effects' },
          description: 'Against emotion and fear effects',
        },
      },
    ],
    tags: ['will save', 'fear', 'emotion', 'mental'],
  },
  {
    id: 'firebug',
    name: 'Firebug',
    description:
      'You were raised by a gunsmith or alchemist and developed a talent for thrown splash weapons and alchemical explosives. You gain a +1 trait bonus on attack rolls made with thrown splash weapons and on attack rolls made with alchemist bombs.',
    shortDescription: '+1 attack rolls with thrown splash weapons and alchemist bombs',
    source: 'Quests and Campaigns',
    category: 'combat',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'attack.melee',
        value: 1,
        source: 'Firebug',
        condition: {
          type: 'custom',
          params: { requirement: 'thrown splash weapons or alchemist bombs' },
          description: 'With thrown splash weapons and alchemist bombs',
        },
      },
    ],
    tags: ['attack', 'splash weapons', 'alchemist', 'bombs', 'thrown'],
  },
  {
    id: 'holdout',
    name: 'Holdout',
    description:
      'You were robbed by bullies when you were young and learned to protect your possessions. You gain a +1 trait bonus to your CMD against disarm and steal combat maneuvers.',
    shortDescription: '+1 CMD vs disarm and steal combat maneuvers',
    source: 'Quests and Campaigns',
    category: 'combat',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'cmd',
        value: 1,
        source: 'Holdout',
        condition: {
          type: 'custom',
          params: { requirement: 'disarm and steal maneuvers' },
          description: 'Against disarm and steal combat maneuvers',
        },
      },
    ],
    tags: ['CMD', 'disarm', 'steal', 'combat maneuver defense'],
  },
  {
    id: 'inspiring_qc',
    name: 'Inspiring',
    description:
      'Your faith in your allies is inspiring. Once per day as a standard action, you can speak words of encouragement to grant one ally within 30 feet who can see and hear you a +1 morale bonus. The ally may apply this bonus to any one d20 roll before the start of your next turn. You cannot target yourself with this ability, and you cannot grant this bonus to the same ally more than once in a 24-hour period.',
    shortDescription:
      'Once/day: grant one ally within 30 ft a +1 morale bonus on any d20 roll before your next turn',
    source: 'Quests and Campaigns',
    category: 'combat',
    prerequisites: [],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.TRAIT,
        target: 'special.ability',
        value: 0,
        source: 'Inspiring',
      },
    ],
    tags: ['morale', 'ally', 'daily use', 'support'],
  },
  {
    id: 'pillager',
    name: 'Pillager',
    description:
      'You grew up in a lawless region where taking what you needed was a matter of survival. You gain a +1 trait bonus on combat maneuver checks made to disarm and to steal.',
    shortDescription: '+1 CMB for disarm and steal combat maneuvers',
    source: 'Quests and Campaigns',
    category: 'combat',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'cmb',
        value: 1,
        source: 'Pillager',
        condition: {
          type: 'custom',
          params: { requirement: 'disarm or steal maneuvers' },
          description: 'On disarm and steal combat maneuver checks',
        },
      },
    ],
    tags: ['CMB', 'disarm', 'steal', 'combat maneuver'],
  },
  {
    id: 'soaring_sprinter',
    name: 'Soaring Sprinter',
    description:
      'You spent much of your childhood running and leaping in dangerous heights, developing exceptional acrobatic skill. You gain a +2 trait bonus on Acrobatics checks for balancing and jumping, and Acrobatics is always a class skill for you.',
    shortDescription: '+2 Acrobatics (balance and jump); Acrobatics is a class skill',
    source: 'Quests and Campaigns',
    category: 'combat',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.acrobatics',
        value: 2,
        source: 'Soaring Sprinter',
        condition: {
          type: 'custom',
          params: { requirement: 'balance and jump checks' },
          description: 'On Acrobatics checks to balance and jump',
        },
      },
    ],
    tags: ['acrobatics', 'jump', 'balance', 'class skill', 'movement'],
  },
  {
    id: 'sworn_enemy',
    name: 'Sworn Enemy',
    description:
      "You have trained long hours in the proper ways to defeat a particular type of creature, chosen from the ranger's favored enemy list. You gain a +1 trait bonus on attacks of opportunity against that enemy type.",
    shortDescription:
      '+1 on attacks of opportunity vs one chosen enemy type (from ranger favored enemy list)',
    source: 'Quests and Campaigns',
    category: 'combat',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'attack.melee',
        value: 1,
        source: 'Sworn Enemy',
        condition: {
          type: 'custom',
          params: { requirement: 'attacks of opportunity vs chosen enemy type' },
          description: 'On attacks of opportunity against the chosen enemy type',
        },
      },
    ],
    choices: [
      {
        type: 'custom',
        label: 'Choose enemy type (from ranger favored enemy list)',
        options: [
          'Aberrations',
          'Animals',
          'Constructs',
          'Dragons',
          'Fey',
          'Humanoids (any)',
          'Magical Beasts',
          'Monstrous Humanoids',
          'Oozes',
          'Outsiders (any)',
          'Plants',
          'Undead',
          'Vermin',
        ],
        affectsEffects: false,
      },
    ],
    tags: ['attack of opportunity', 'enemy type', 'ranger', 'favored enemy'],
  },
  {
    id: 'vengeful_qc',
    name: 'Vengeful',
    description:
      'You were abused by those stronger than you during your youth, and you have focused your anger into a powerful desire to get back at those who wrong you. When you deal damage to a creature that has damaged you within the last 24 hours, you gain a +1 trait bonus on damage rolls against that creature.',
    shortDescription: '+1 damage rolls vs a creature that has damaged you in the last 24 hours',
    source: 'Quests and Campaigns',
    category: 'combat',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'damage.melee',
        value: 1,
        source: 'Vengeful',
        condition: {
          type: 'custom',
          params: { requirement: 'creature damaged you within 24 hours' },
          description: 'Against creatures that have damaged you within the last 24 hours',
        },
      },
    ],
    tags: ['damage', 'revenge', 'retribution', 'conditional'],
  },

  // ==================== COMBAT TRAITS — Heroes of the Wild ====================
  {
    id: 'vandal',
    name: 'Vandal',
    description:
      "You have a talent for breaking things. You gain a +2 bonus on Strength checks to break objects. When you deal damage to objects with a weapon, natural weapon, or unarmed attack, you ignore 2 points of the object's hardness.",
    shortDescription:
      '+2 Strength checks to break objects; ignore 2 hardness when damaging objects',
    source: 'Heroes of the Wild',
    category: 'combat',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'ability_check.strength',
        value: 2,
        source: 'Vandal',
        condition: {
          type: 'custom',
          params: { requirement: 'breaking objects' },
          description: 'On Strength checks to break objects',
        },
      },
      {
        type: 'special',
        bonusType: BonusType.TRAIT,
        target: 'special.ability',
        value: 0,
        source: 'Vandal',
      },
    ],
    tags: ['strength', 'objects', 'hardness', 'breaking', 'damage'],
  },

  // ==================== SOCIAL TRAITS — Quests and Campaigns ====================
  {
    id: 'avid_reader',
    name: 'Avid Reader',
    description:
      "As a youth, you voraciously consumed books and scrolls provided by an adventurer's guild or learned organization. You have internalized stories of bold adventurers. Choose one Knowledge skill; you may take 10 on checks with that skill even when distracted or threatened.",
    shortDescription:
      'Choose one Knowledge skill: may take 10 on that skill even when distracted or threatened',
    source: 'Quests and Campaigns',
    category: 'social',
    prerequisites: [],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.TRAIT,
        target: 'special.ability',
        value: 0,
        source: 'Avid Reader',
      },
    ],
    choices: [
      {
        type: 'skill',
        label: 'Choose Knowledge skill to take 10 under pressure',
        options: [
          'Knowledge (arcana)',
          'Knowledge (dungeoneering)',
          'Knowledge (engineering)',
          'Knowledge (geography)',
          'Knowledge (history)',
          'Knowledge (local)',
          'Knowledge (nature)',
          'Knowledge (nobility)',
          'Knowledge (planes)',
          'Knowledge (religion)',
        ],
        affectsEffects: false,
      },
    ],
    tags: ['knowledge', 'take 10', 'research', 'lore'],
  },
  {
    id: 'competitive',
    name: 'Competitive',
    description:
      "You grew up around competitive sporting events and have a driving need to be better than everyone else. When another creature within 30 feet attempts a skill check and you attempt the same skill check before that creature's next turn begins, you gain a +1 trait bonus on your check.",
    shortDescription:
      '+1 on a skill check when competing with another creature attempting the same check within 30 ft',
    source: 'Quests and Campaigns',
    category: 'social',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.check',
        value: 1,
        source: 'Competitive',
        condition: {
          type: 'custom',
          params: { requirement: 'competing with nearby creature on same skill' },
          description:
            'When a creature within 30 ft attempts the same skill check before its next turn',
        },
      },
    ],
    tags: ['skill check', 'competition', 'conditional', 'social'],
  },
  {
    id: 'free_spirit',
    name: 'Free Spirit',
    description:
      'Your rough-and-tumble youth instilled in you the belief that everyone deserves a chance to say her piece. You gain a +1 trait bonus on saving throws against language-dependent effects and effects with the sonic descriptor. The DC to Intimidate you is also increased by 2.',
    shortDescription: '+1 saves vs language-dependent and sonic effects; +2 DC to Intimidate you',
    source: 'Quests and Campaigns',
    category: 'social',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.all',
        value: 1,
        source: 'Free Spirit',
        condition: {
          type: 'custom',
          params: { requirement: 'language-dependent or sonic effects' },
          description: 'Against language-dependent and sonic effects',
        },
      },
      {
        type: 'special',
        bonusType: BonusType.TRAIT,
        target: 'special.ability',
        value: 0,
        source: 'Free Spirit',
      },
    ],
    tags: ['saving throw', 'language-dependent', 'sonic', 'intimidate', 'freedom'],
  },
  {
    id: 'friends_in_high_places',
    name: 'Friends in High Places',
    description:
      'You have cultivated relationships with influential people. In areas where you have previously used Diplomacy to gather information, you gain a +1 trait bonus on Diplomacy and Intimidate checks. This bonus increases to +2 when these checks involve government officials.',
    shortDescription: '+1 Diplomacy/Intimidate in familiar areas; +2 vs government officials',
    source: 'Quests and Campaigns',
    category: 'social',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.diplomacy',
        value: 1,
        source: 'Friends in High Places',
        condition: {
          type: 'custom',
          params: { requirement: 'in area where you have gathered information' },
          description: 'In areas where you have previously gathered information via Diplomacy',
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.intimidate',
        value: 1,
        source: 'Friends in High Places',
        condition: {
          type: 'custom',
          params: { requirement: 'in area where you have gathered information' },
          description: 'In areas where you have previously gathered information via Diplomacy',
        },
      },
    ],
    tags: ['diplomacy', 'intimidate', 'contacts', 'government', 'social'],
  },
  {
    id: 'gregarious',
    name: 'Gregarious',
    description:
      "You are exceptionally skilled at making friends when you first meet them. Once per day when you make a Diplomacy check to improve a creature's attitude, you may roll twice and take the better result.",
    shortDescription:
      'Once/day: roll twice on a Diplomacy check to improve attitude, take the better result',
    source: 'Quests and Campaigns',
    category: 'social',
    prerequisites: [],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.TRAIT,
        target: 'special.ability',
        value: 0,
        source: 'Gregarious',
      },
    ],
    tags: ['diplomacy', 'reroll', 'daily use', 'attitude', 'social'],
  },
  {
    id: 'grim_optimism',
    name: 'Grim Optimism',
    description:
      'You have developed a coping mechanism that uses humor to put the horrors of life in perspective. As a standard action, you and all allies within 30 feet who can hear you gain a +2 morale bonus on saving throws against fear and pain effects for 1d4 rounds. A character cannot benefit from this ability more than once in a 24-hour period.',
    shortDescription:
      'Standard action: you and allies within 30 ft gain +2 morale saves vs fear/pain for 1d4 rounds (1/day per creature)',
    source: 'Quests and Campaigns',
    category: 'social',
    prerequisites: [],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.TRAIT,
        target: 'special.ability',
        value: 0,
        source: 'Grim Optimism',
      },
    ],
    tags: ['morale', 'fear', 'pain', 'allies', 'daily use', 'saving throw'],
  },
  {
    id: 'memorable',
    name: 'Memorable',
    description:
      "You have an expressive personality that stays with people long after your first meeting. When you use Diplomacy or Intimidate to alter a creature's attitude, the attitude change lasts 1-1/2 times longer than normal. When you create a fear or mind-affecting effect with a duration of at least 2 rounds, the effect lasts 1 additional round.",
    shortDescription:
      'Diplomacy/Intimidate attitude changes last 1.5x longer; fear/mind effects you create last 1 extra round',
    source: 'Quests and Campaigns',
    category: 'social',
    prerequisites: [],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.TRAIT,
        target: 'special.ability',
        value: 0,
        source: 'Memorable',
      },
    ],
    tags: ['diplomacy', 'intimidate', 'duration', 'fear', 'mind-affecting'],
  },
  {
    id: 'secret_keeper',
    name: 'Secret-Keeper',
    description:
      'You learned to guard information in a paranoid society where accusations of heresy or dissent carry severe consequences. You gain a +1 trait bonus on Bluff checks and a +1 trait bonus on saving throws against divinations, domination effects, and effects that would compel truthful speech.',
    shortDescription:
      '+1 Bluff; +1 saves vs divinations, domination, and compelled truthful speech',
    source: 'Quests and Campaigns',
    category: 'social',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.bluff',
        value: 1,
        source: 'Secret-Keeper',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.all',
        value: 1,
        source: 'Secret-Keeper',
        condition: {
          type: 'custom',
          params: { requirement: 'divinations, domination, compelled speech' },
          description:
            'Against divinations, domination effects, and effects that compel truthful speech',
        },
      },
    ],
    tags: ['bluff', 'divination', 'domination', 'saving throw', 'secrets'],
  },
  {
    id: 'snowbound',
    name: 'Snowbound',
    description:
      'You came of age in a place with harsh winters amid a culture that rewarded you for testing your limits in the cold. You gain a +1 trait bonus on saving throws against cold effects and a +2 trait bonus on Fortitude saves against the effects of cold weather.',
    shortDescription: '+1 saves vs cold effects; +2 Fort saves vs cold weather',
    source: 'Quests and Campaigns',
    category: 'social',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.all',
        value: 1,
        source: 'Snowbound',
        condition: {
          type: 'custom',
          params: { requirement: 'cold effects' },
          description: 'Against cold effects',
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.fortitude',
        value: 2,
        source: 'Snowbound',
        condition: {
          type: 'custom',
          params: { requirement: 'cold weather' },
          description: 'Against effects of cold weather',
        },
      },
    ],
    tags: ['cold', 'fortitude', 'saving throw', 'weather', 'winter'],
  },
  // student_of_philosophy — skipped, already in core.ts (Ultimate Campaign). Same mechanics, core.ts is canonical source.

  // ==================== SOCIAL TRAITS — Heroes of the Wild ====================
  {
    id: 'beastkin',
    name: 'Beastkin',
    description:
      'You were raised from infancy by a specific type of animal (such as wolves or apes). You gain a +1 trait bonus on Survival checks and can use speak with animals as a spell-like ability at will, but only to communicate with the type of animal that raised you.',
    shortDescription:
      '+1 Survival; speak with animals at will (with your specific animal type only)',
    source: 'Heroes of the Wild',
    category: 'social',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.survival',
        value: 1,
        source: 'Beastkin',
      },
      {
        type: 'special',
        bonusType: BonusType.TRAIT,
        target: 'special.ability',
        value: 0,
        source: 'Beastkin',
      },
    ],
    choices: [
      {
        type: 'custom',
        label: 'Choose animal type that raised you',
        options: [],
        affectsEffects: false,
      },
    ],
    tags: ['survival', 'speak with animals', 'spell-like ability', 'wild', 'animal'],
  },
  {
    id: 'feral_speech',
    name: 'Feral Speech',
    description:
      'You were raised among communities where individuals regularly communicated with wild creatures. You gain one of the following languages as a bonus language: Aklo, Aquan, Auran, Giant, Ignan, or Sylvan. With GM permission, you may select Druidic instead, though doing so may attract the ire of druids who view the language as exclusive to their order.',
    shortDescription:
      'Gain one bonus language: Aklo, Aquan, Auran, Giant, Ignan, or Sylvan (or Druidic with GM permission)',
    source: 'Heroes of the Wild',
    category: 'social',
    prerequisites: [],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.TRAIT,
        target: 'special.ability',
        value: 0,
        source: 'Feral Speech',
      },
    ],
    choices: [
      {
        type: 'custom',
        label: 'Choose bonus language',
        options: ['Aklo', 'Aquan', 'Auran', 'Giant', 'Ignan', 'Sylvan'],
        affectsEffects: false,
      },
    ],
    tags: ['language', 'wild', 'nature', 'sylvan', 'druidic'],
  },
  {
    id: 'self_reliant',
    name: 'Self-Reliant',
    description:
      "You have always depended more on your own skills than on any equipment. You do not take a penalty on Craft checks when using improvised tools. You can attempt Craft checks without any tools at all (at the GM's discretion), though such attempts take a -2 penalty.",
    shortDescription:
      'No penalty for improvised tools on Craft checks; can attempt Craft without tools (at -2)',
    source: 'Heroes of the Wild',
    category: 'social',
    prerequisites: [],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.TRAIT,
        target: 'special.ability',
        value: 0,
        source: 'Self-Reliant',
      },
    ],
    tags: ['craft', 'improvised', 'tools', 'self-sufficiency'],
  },

  // ==================== MAGIC TRAITS — Quests and Campaigns ====================
  {
    id: 'distance_aptitude',
    name: 'Distance Aptitude',
    description:
      'You were exposed to ancient elf gate magic or similar distance-spanning magic during your youth. Treat your caster level as 1 higher for the purpose of determining the range of spells and spell-like abilities.',
    shortDescription:
      '+1 effective caster level for determining range of spells and spell-like abilities',
    source: 'Quests and Campaigns',
    category: 'magic',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'spell.caster_level',
        value: 1,
        source: 'Distance Aptitude',
        condition: {
          type: 'custom',
          params: { requirement: 'determining range' },
          description: 'For determining the range of spells and spell-like abilities only',
        },
      },
    ],
    tags: ['caster level', 'range', 'spells', 'spell-like abilities'],
  },
  {
    id: 'domineering',
    name: 'Domineering',
    description:
      'Your confidence is so strong that others feel naturally compelled to follow your commands. Choose one 1st-level enchantment spell you can cast. Increase the DC of that spell by 1.',
    shortDescription: '+1 DC to one chosen 1st-level enchantment spell',
    source: 'Quests and Campaigns',
    category: 'magic',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'spell.save_dc',
        value: 1,
        source: 'Domineering',
        condition: {
          type: 'custom',
          params: { requirement: 'chosen 1st-level enchantment spell' },
          description: 'To the DC of one chosen 1st-level enchantment spell',
        },
      },
    ],
    choices: [
      {
        type: 'custom',
        label: 'Choose one 1st-level enchantment spell you can cast',
        options: [],
        affectsEffects: false,
      },
    ],
    tags: ['spell DC', 'enchantment', 'mind-affecting', 'spellcasting'],
  },
  {
    id: 'keen_appraiser',
    name: 'Keen Appraiser',
    description:
      "You have handled many magical items and enchanted goods and have developed an eye for identifying magical properties. You gain a +1 trait bonus on Appraise checks. You only need to beat the DC by 2 on an Appraise check to identify a magical item's basic properties (though identifying its specific abilities still requires the normal margin).",
    shortDescription:
      '+1 Appraise; need only beat DC by 2 to identify basic magical properties of items',
    source: 'Quests and Campaigns',
    category: 'magic',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.appraise',
        value: 1,
        source: 'Keen Appraiser',
      },
      {
        type: 'special',
        bonusType: BonusType.TRAIT,
        target: 'special.ability',
        value: 0,
        source: 'Keen Appraiser',
      },
    ],
    tags: ['appraise', 'identify', 'magic items', 'knowledge'],
  },
  {
    id: 'fey_protection',
    name: 'Fey Protection',
    description:
      "A helpful fey visited your parents' home at your birth, offering prophecy and magical gifts in exchange for hospitality and a drop of your blood. You gain a +1 trait bonus to AC against attacks of opportunity from fey creatures, and a +1 trait bonus on saving throws against effects produced by fey creatures.",
    shortDescription: '+1 AC vs fey AoOs; +1 saves vs fey effects',
    source: 'Quests and Campaigns',
    category: 'magic',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'ac',
        value: 1,
        source: 'Fey Protection',
        condition: {
          type: 'custom',
          params: { requirement: 'attacks of opportunity from fey' },
          description: 'Against attacks of opportunity from fey creatures',
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.all',
        value: 1,
        source: 'Fey Protection',
        condition: {
          type: 'custom',
          params: { requirement: 'fey creature effects' },
          description: 'Against effects produced by fey creatures',
        },
      },
    ],
    tags: ['fey', 'AC', 'saving throw', 'nature', 'supernatural'],
  },
  {
    id: 'fortunate',
    name: 'Fortunate',
    description:
      'A divine blessing of luck and chance grants you good fortune with magic. Once per day when you use a spell or magic item with randomized effects (such as confusion, mirror image, prismatic spray, or a bag of tricks), you may roll twice before determining the result and select your preferred outcome.',
    shortDescription:
      'Once/day: roll twice for a spell or magic item with randomized effects and choose the better result',
    source: 'Quests and Campaigns',
    category: 'magic',
    prerequisites: [],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.TRAIT,
        target: 'special.ability',
        value: 0,
        source: 'Fortunate',
      },
    ],
    tags: ['luck', 'reroll', 'randomized', 'magic items', 'daily use'],
  },
  {
    id: 'inured_to_death',
    name: 'Inured to Death',
    description:
      'You have grown up with death all around you and have become desensitized to its darker aspects. You gain a +2 trait bonus on saving throws against death effects.',
    shortDescription: '+2 saving throws vs death effects',
    source: 'Quests and Campaigns',
    category: 'magic',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.all',
        value: 2,
        source: 'Inured to Death',
        condition: {
          type: 'custom',
          params: { requirement: 'death effects' },
          description: 'Against death effects',
        },
      },
    ],
    tags: ['saving throw', 'death', 'undead', 'necromancy'],
  },
  {
    id: 'magical_flair',
    name: 'Magical Flair',
    description:
      'You witnessed persecution of magic users in your youth and learned to obscure your spellcasting. Choose one school of magic. The Spellcraft DC to identify spells you cast from that school increases by 2. If a creature fails this check by 2 or fewer, it misidentifies your spell as another randomly determined spell of the same school and level.',
    shortDescription:
      '+2 Spellcraft DC to identify your spells from one chosen school; near-misses misidentify the spell',
    source: 'Quests and Campaigns',
    category: 'magic',
    prerequisites: [],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.TRAIT,
        target: 'special.ability',
        value: 0,
        source: 'Magical Flair',
      },
    ],
    choices: [
      {
        type: 'school',
        label: 'Choose school of magic to obscure',
        options: [
          'Abjuration',
          'Conjuration',
          'Divination',
          'Enchantment',
          'Evocation',
          'Illusion',
          'Necromancy',
          'Transmutation',
        ],
        affectsEffects: false,
      },
    ],
    tags: ['spellcraft', 'school of magic', 'identification', 'stealth', 'deception'],
  },
  {
    id: 'mutant_eye',
    name: 'Mutant Eye',
    description:
      "You have a minor magical mutation: a third eye in the middle of your forehead, caused by your parents' exposure to uncontrolled magic before your birth. When uncovered and open, this eye grants you a +2 trait bonus on Sense Motive checks, which improves to +4 on checks to notice whether a character is under a mind-affecting effect. However, the visible mutation unsettles humanoids, imposing a -1 penalty on Bluff and Diplomacy checks against those who can perceive it.",
    shortDescription:
      '+2 Sense Motive (+4 to detect mind-affecting); -1 Bluff and Diplomacy vs humanoids who see it',
    source: 'Quests and Campaigns',
    category: 'magic',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.sense_motive',
        value: 2,
        source: 'Mutant Eye',
        condition: {
          type: 'custom',
          params: { requirement: 'eye uncovered and open' },
          description: 'When the third eye is uncovered and open',
        },
      },
      {
        type: 'penalty',
        bonusType: BonusType.TRAIT,
        target: 'skill.bluff',
        value: -1,
        source: 'Mutant Eye',
        condition: {
          type: 'custom',
          params: { requirement: 'humanoids who can see the third eye' },
          description: 'Against humanoids who can perceive the third eye',
        },
      },
      {
        type: 'penalty',
        bonusType: BonusType.TRAIT,
        target: 'skill.diplomacy',
        value: -1,
        source: 'Mutant Eye',
        condition: {
          type: 'custom',
          params: { requirement: 'humanoids who can see the third eye' },
          description: 'Against humanoids who can perceive the third eye',
        },
      },
    ],
    tags: ['sense motive', 'mind-affecting', 'bluff', 'diplomacy', 'mutation', 'third eye'],
  },
  {
    id: 'scorned_by_magic',
    name: 'Scorned by Magic',
    description:
      'Magic seems a little more reluctant to affect you than others, whether from repeated exposure to remove curse or proximity to dead magic zones. Reduce the effective caster level of spells and spell-like abilities cast upon you by 1 when determining dispel checks against you and when those spells attempt to overcome your spell resistance.',
    shortDescription:
      'Spells targeting you are treated as CL -1 for dispel checks and overcoming your spell resistance',
    source: 'Quests and Campaigns',
    category: 'magic',
    prerequisites: [],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.TRAIT,
        target: 'special.ability',
        value: 0,
        source: 'Scorned by Magic',
      },
    ],
    tags: ['spell resistance', 'dispel', 'caster level', 'magic resistance'],
  },

  // ==================== MAGIC TRAITS — Heroes of the Wild ====================
  {
    id: 'green_blooded',
    name: 'Green-Blooded',
    description:
      'You have a supernatural connection to nature that marks you as something beyond purely mortal. Select one 0-level druid spell. You may cast that spell once per day as a spell-like ability. Your caster level for this ability equals your character level.',
    shortDescription:
      'Cast one chosen 0-level druid spell once per day as a spell-like ability (CL = character level)',
    source: 'Heroes of the Wild',
    category: 'magic',
    prerequisites: [],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.TRAIT,
        target: 'special.ability',
        value: 0,
        source: 'Green-Blooded',
      },
    ],
    choices: [
      {
        type: 'custom',
        label: 'Choose one 0-level druid spell',
        options: [],
        affectsEffects: false,
      },
    ],
    tags: ['druid', 'spell-like ability', 'nature', 'cantrip', 'daily use'],
  },

  // ==================== FAITH TRAITS — Quests and Campaigns ====================
  {
    id: 'authoritarian',
    name: 'Authoritarian',
    description:
      'You spent your formative years assisting clergy and developed a deep respect for institutional authority. When acting in service to a liege or leader you recognize as legitimate, you gain a +2 trait bonus on saving throws against fear and compulsion effects.',
    shortDescription:
      '+2 saves vs fear and compulsion when serving a recognized legitimate authority',
    source: 'Quests and Campaigns',
    category: 'faith',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.all',
        value: 2,
        source: 'Authoritarian',
        condition: {
          type: 'custom',
          params: { requirement: 'acting in service to a recognized legitimate authority' },
          description:
            'Against fear and compulsion when acting in service to a recognized legitimate authority',
        },
      },
    ],
    tags: ['saving throw', 'fear', 'compulsion', 'authority', 'loyalty'],
  },
  {
    id: 'called',
    name: 'Called',
    description:
      'A deity or powerful spirit communicated with you during your youth, offering cryptic guidance about your future. Once per day when you roll a natural 1 on an attack roll, you may reroll the die and use the second result instead.',
    shortDescription: 'Once/day: reroll a natural 1 on an attack roll',
    source: 'Quests and Campaigns',
    category: 'faith',
    prerequisites: [],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.TRAIT,
        target: 'special.ability',
        value: 0,
        source: 'Called',
      },
    ],
    tags: ['attack roll', 'reroll', 'natural 1', 'divine', 'daily use'],
  },
  {
    id: 'devoted_healer',
    name: 'Devoted Healer',
    description:
      "You were raised alongside skilled healers and developed a commitment to others' wellbeing. Whenever you take 20 on a Heal check to treat deadly wounds, you restore an additional 1d4 hit points to those you aid.",
    shortDescription: 'When taking 20 on Heal (treat deadly wounds), restore an extra 1d4 HP',
    source: 'Quests and Campaigns',
    category: 'faith',
    prerequisites: [],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.TRAIT,
        target: 'special.ability',
        value: 0,
        source: 'Devoted Healer',
      },
    ],
    tags: ['heal', 'take 20', 'hit points', 'support', 'healer'],
  },
  {
    id: 'honest',
    name: 'Honest',
    description:
      'A religious mentor taught you the importance of moral integrity, and you have a habit of speaking candidly that inspires others to trust you. You gain a +1 trait bonus on Diplomacy checks, and a +2 trait bonus on Diplomacy checks against creatures who are already friendly or helpful toward you.',
    shortDescription: '+1 Diplomacy; +2 Diplomacy against friendly or helpful creatures',
    source: 'Quests and Campaigns',
    category: 'faith',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.diplomacy',
        value: 1,
        source: 'Honest',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.diplomacy',
        value: 2,
        source: 'Honest',
        condition: {
          type: 'custom',
          params: { requirement: 'target is friendly or helpful' },
          description:
            'Against creatures already friendly or helpful toward you (replaces the +1 bonus)',
        },
      },
    ],
    tags: ['diplomacy', 'trust', 'social', 'faith'],
  },
  {
    id: 'irrepressible',
    name: 'Irrepressible',
    description:
      'Your hope for a brighter future blessed by the gods, combined with your powerful personality, allows you to force your way free of spells that cloud the mind. When making Will saving throws against charm and compulsion effects, you may substitute your Charisma modifier for your Wisdom modifier.',
    shortDescription:
      'Use Charisma instead of Wisdom on Will saves vs charm and compulsion effects',
    source: 'Quests and Campaigns',
    category: 'faith',
    prerequisites: [],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.TRAIT,
        target: 'special.ability',
        value: 0,
        source: 'Irrepressible',
      },
    ],
    tags: ['will save', 'charm', 'compulsion', 'charisma', 'wisdom', 'mind-affecting'],
  },
  {
    id: 'mystery_initiate',
    name: 'Mystery Initiate',
    description:
      'You were initiated into a mystery cult during your youth, gaining esoteric knowledge that fundamentally altered your worldview. Once per day, you may reroll any Knowledge skill check. You must decide to use this ability after rolling but before the results are revealed, and you must accept the second result.',
    shortDescription: 'Once/day: reroll any Knowledge skill check (must accept second result)',
    source: 'Quests and Campaigns',
    category: 'faith',
    prerequisites: [],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.TRAIT,
        target: 'special.ability',
        value: 0,
        source: 'Mystery Initiate',
      },
    ],
    tags: ['knowledge', 'reroll', 'daily use', 'mystery cult', 'esoteric'],
  },
  {
    id: 'patient_calm',
    name: 'Patient Calm',
    description:
      "A community leader's patient influence helped you develop remarkable emotional control. Choose one Craft or Profession skill. When you take 10 with that chosen skill, treat the result as if you had rolled a 12 instead.",
    shortDescription: 'Choose one Craft or Profession: when taking 10, treat result as 12',
    source: 'Quests and Campaigns',
    category: 'faith',
    prerequisites: [],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.TRAIT,
        target: 'special.ability',
        value: 0,
        source: 'Patient Calm',
      },
    ],
    choices: [
      {
        type: 'skill',
        label: 'Choose Craft or Profession skill',
        options: [],
        affectsEffects: false,
      },
    ],
    tags: ['craft', 'profession', 'take 10', 'calm', 'skill'],
  },
  {
    id: 'spell_intuition',
    name: 'Spell Intuition',
    description:
      'A priest of a magic deity blessed you at birth with innate magical intuition. You gain a +1 trait bonus on Spellcraft checks, and Spellcraft is always a class skill for you.',
    shortDescription: '+1 Spellcraft; Spellcraft is a class skill',
    source: 'Quests and Campaigns',
    category: 'faith',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.spellcraft',
        value: 1,
        source: 'Spell Intuition',
      },
    ],
    tags: ['spellcraft', 'class skill', 'magic', 'divine', 'intuition'],
  },
];

// CHECKPOINT: last_written=spell_intuition, written=60/60, status=complete
