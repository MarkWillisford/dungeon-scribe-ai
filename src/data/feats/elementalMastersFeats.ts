import { BonusType } from '@/types/base';
import type { FeatDefinition } from '@/types/feats';

export const ELEMENTAL_MASTERS_FEATS: FeatDefinition[] = [
  // ─── Elemental Master's Handbook (Pathfinder Player Companion, 2017) ──────────────

  {
    id: 'benthic_spell',
    name: 'Benthic Spell',
    description:
      "You can modify spells dealing acid, cold, electricity, or fire damage to instead inflict bludgeoning damage through high-pressure water. The modified spell gains the water descriptor. You can either fully replace the spell's damage with bludgeoning damage or divide it equally between bludgeoning and the original damage type. Creatures with damage reduction apply their DR to bludgeoning damage from a benthic spell, but the spell counts as bludgeoning and magic for bypassing DR. A benthic spell uses a spell slot one level higher than the spell's actual level.",
    shortDescription:
      'Convert elemental spell damage to bludgeoning via high-pressure water, gaining the water descriptor.',
    source: "Pathfinder Player Companion: Elemental Master's Handbook",
    verificationStatus: 'needs_review' as const,
    types: ['metamagic'],
    prerequisites: [],
    effects: [],
    activationMode: 'conditional',
    tags: ['metamagic', 'water', 'bludgeoning', 'damage conversion'],
  },

  {
    id: 'bilge_rat',
    name: 'Bilge Rat',
    description:
      'Sailors moving between bright sunlight and dark ship holds wear an eye patch to keep one eye adapted to darkness and the other to light. If you are wearing an eye patch when you are dazzled or blinded as a result of eye damage or a visual stimulus (such as from fireworks or a glitterdust spell), you can remove or switch your eye patch as a move action to favor the eye you had kept covered. Doing so allows you to either ignore the dazzled condition or reduce blindness to dazzled until the effect ends.',
    shortDescription:
      'Use an eye patch to ignore dazzled or reduce blindness to dazzled from visual stimuli.',
    source: "Pathfinder Player Companion: Elemental Master's Handbook",
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [],
    effects: [],
    activationMode: 'conditional',
    tags: ['vision', 'dazzled', 'blinded', 'eye patch', 'sailor'],
  },

  {
    id: 'brackish_spell',
    name: 'Brackish Spell',
    description:
      "You can modify a spell with the water descriptor to surround you with a thin sheath of brackish salt water in addition to the spell's normal effect. You gain DR/piercing equal to the spell's level for 1 round after you finish casting the spell. After one round, the protective water dissipates. Applying this feat does not require using a higher-level spell slot than the spell's actual level.",
    shortDescription:
      'When casting a water-descriptor spell, gain DR/piercing equal to spell level for 1 round.',
    source: "Pathfinder Player Companion: Elemental Master's Handbook",
    verificationStatus: 'needs_review' as const,
    types: ['metamagic'],
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'ac',
        value: 0,
        source: 'Brackish Spell',
        condition: {
          type: 'custom',
          description:
            'DR/piercing equal to spell level for 1 round after casting a water-descriptor spell',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['metamagic', 'water', 'damage reduction', 'protection'],
  },

  {
    id: 'flumefire_rage',
    name: 'Flumefire Rage',
    description:
      "Your meditation before a rune-engraved stone in the Flume Warrens unlocks the secret of its blazing power. When casting evocation spells dealing fire damage, you add +1 fire damage per die. You must succeed at a Fortitude save (DC 15 + the spell's or blast's level) or become fatigued. You cannot use this feat while already fatigued or while unable to become fatigued. During a rage, the bonus increases to +2 fire damage per die and you roll the Fortitude save twice, taking the better result. This feat does not grant the ability to cast spells while raging.",
    shortDescription:
      'Add +1 fire damage per die to evocation fire spells, or +2 while raging, with a Fortitude save or become fatigued.',
    source: "Pathfinder Player Companion: Elemental Master's Handbook",
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'CHA', minimum: 15 },
      {
        type: 'special',
        description:
          'Bloodrage class feature, elemental focus class feature, or Varisian Tattoo (evocation)',
      },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'damage.melee',
        value: 1,
        source: 'Flumefire Rage',
        condition: {
          type: 'custom',
          description: '+1 fire damage per die on evocation fire spells (+2 while raging)',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['fire', 'evocation', 'rage', 'bloodrager', 'kineticist', 'damage'],
  },

  {
    id: 'growth_in_ash',
    name: 'Growth in Ash',
    description:
      "You're aware that when fire passes, growth can begin. When you succeed on a Reflex save to avoid catching fire, or when you cease to take ongoing fire damage from a spell or effect, you can use an immediate action to smear ash on yourself. This grants you fast healing 1 for 3 rounds. For each Hit Die beyond 3, the fast healing duration extends by one additional round.",
    shortDescription:
      'After avoiding or ending fire damage, use an immediate action to gain fast healing 1 for rounds equal to your Hit Dice.',
    source: "Pathfinder Player Companion: Elemental Master's Handbook",
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'hp',
        value: 1,
        source: 'Growth in Ash',
        condition: {
          type: 'custom',
          description: 'Fast healing 1 for 3+ rounds after avoiding fire damage',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['fire', 'healing', 'fast healing', 'survival'],
  },

  {
    id: 'hammer_guards_the_anvil',
    name: 'Hammer Guards the Anvil',
    description:
      'Your allies cover you when your guard is down. Allied creatures who also have this feat prevent attacks of opportunity against you when you pick up an item from the ground, retrieve a stored item, sheathe a weapon, or stand up from prone.',
    shortDescription:
      'Allies with this feat prevent attacks of opportunity against you for certain vulnerable actions.',
    source: "Pathfinder Player Companion: Elemental Master's Handbook",
    verificationStatus: 'needs_review' as const,
    types: ['teamwork'],
    prerequisites: [],
    effects: [],
    activationMode: 'passive',
    tags: ['teamwork', 'attacks of opportunity', 'defense', 'dwarf'],
  },

  {
    id: 'hurricane_punch',
    name: 'Hurricane Punch',
    description:
      'Your fast strikes hit with the force of a hurricane, pushing your foes away. When you successfully land unarmed strikes at least twice against the same creature within a single round, you may initiate a bull rush combat maneuver as a swift action. You may move with the target even if you have no remaining movement, though the distance you travel cannot surpass half your speed.',
    shortDescription:
      'Landing two unarmed strikes on the same foe in one round lets you attempt a free swift-action bull rush.',
    source: "Pathfinder Player Companion: Elemental Master's Handbook",
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'STR', minimum: 13 },
      { type: 'feat', featId: 'improved_bull_rush' },
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'feat', featId: 'power_attack' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['unarmed', 'bull rush', 'combat maneuver', 'monk', 'air'],
  },

  {
    id: 'improved_elemental_counterspell',
    name: 'Improved Elemental Counterspell',
    description:
      'You can charge your kinetic blast with disruptive elemental energy that tears apart elemental spells. You can use a readied kinetic blast to counterspell any spell of equal or lower level, provided that the target spell has any of the following descriptors: air, cold, darkness, earth, electricity, fire, force, light, or water.',
    shortDescription:
      'Use a readied kinetic blast to counterspell any elemental-descriptor spell of equal or lower level.',
    source: "Pathfinder Player Companion: Elemental Master's Handbook",
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'Two basic blast wild talents from two different elements' },
      { type: 'special', description: 'Expanded element class feature' },
      { type: 'special', description: 'Kinetic blast class feature' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['kineticist', 'counterspell', 'elemental', 'kinetic blast'],
  },

  {
    id: 'joyless_toil',
    name: 'Joyless Toil',
    description:
      'Your strikes render your enemy distracted and unable to focus on productive action. You can declare a joyless toil strike before making an unarmed strike attack. The target takes normal damage and must succeed at a Fortitude save (DC = 10 + half your character level + your Wisdom modifier) or become nauseated for 1 round or until they are next attacked. If the attack misses, the use is wasted. You can use this ability once per day per 4 character levels, to a maximum of once per round. Constructs, incorporeal creatures, mindless creatures, plants, undead, and creatures immune to critical hits cannot be affected.',
    shortDescription:
      'Declare before an unarmed strike; on a failed Fortitude save the target is nauseated for 1 round.',
    source: "Pathfinder Player Companion: Elemental Master's Handbook",
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'DEX', minimum: 13 },
      { type: 'ability_score', ability: 'WIS', minimum: 13 },
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'bab', minimum: 8 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['unarmed', 'nauseated', 'monk', 'earth', 'stunning fist'],
  },

  {
    id: 'kraggodans_stance',
    name: "Kraggodan's Stance",
    description:
      "You have learned one of the secrets of Kraggodan's defenders and can lock your armor and shield into an impenetrable barrier. As a move action while wearing heavy armor and a heavy or tower shield, you increase both your armor bonus and your shield bonus to AC by 1 each. This benefit persists until you move or are moved from your current square. You must be in contact with solid ground to gain this bonus. You can never increase an armor or shield bonus to AC by more than 1 each in this way.",
    shortDescription:
      'As a move action while stationary in heavy armor and heavy shield, gain +1 armor and +1 shield bonus to AC.',
    source: "Pathfinder Player Companion: Elemental Master's Handbook",
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'CON', minimum: 13 },
      { type: 'special', description: 'Proficiency with heavy armor and shields' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.ARMOR,
        target: 'ac',
        value: 1,
        source: "Kraggodan's Stance",
        condition: {
          type: 'custom',
          description: 'While stationary, wearing heavy armor and heavy or tower shield',
          params: {},
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.SHIELD,
        target: 'ac',
        value: 1,
        source: "Kraggodan's Stance",
        condition: {
          type: 'custom',
          description: 'While stationary, wearing heavy armor and heavy or tower shield',
          params: {},
        },
      },
    ],
    activationMode: 'toggle',
    tags: ['dwarf', 'armor', 'shield', 'defense', 'stance', 'earth'],
  },

  {
    id: 'mobile_gathering',
    name: 'Mobile Gathering',
    description:
      "You can move while gathering elemental power. When you take a move action to gather power, you can move up to half your base speed as part of that action. When you take a full-round action to gather power, you can move up to half your speed at the start of your turn. This movement provokes attacks of opportunity as normal and cannot be negated through Acrobatics. If you take damage during gathering or before releasing the blast, the concentration check DC increases by twice the blast's effective spell level.",
    shortDescription: 'Move up to half speed while gathering power as a kineticist.',
    source: "Pathfinder Player Companion: Elemental Master's Handbook",
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'level', minimum: 7 },
      { type: 'special', description: 'Kinetic blast class feature' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['kineticist', 'gather power', 'movement', 'elemental'],
  },

  {
    id: 'mountain_eyes',
    name: 'Mountain Eyes',
    description:
      'Your gaze cuts through vapors with ease. You ignore concealment from fog, rain, smoke, wind, gases, and weather effects, including magical effects such as obscuring mist. You also reduce Perception check penalties from such effects by up to 4. Within 10 feet, total concealment from these sources is treated as regular concealment (20% miss chance) instead.',
    shortDescription:
      'Ignore concealment from fog, rain, smoke, and similar effects; treat total concealment from them as normal concealment within 10 feet.',
    source: "Pathfinder Player Companion: Elemental Master's Handbook",
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'feat', featId: 'blind_fight' },
      { type: 'skill', skillId: 'perception', ranks: 5 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skill.perception',
        value: 4,
        source: 'Mountain Eyes',
        condition: {
          type: 'custom',
          description: 'Reduces Perception penalties from fog, smoke, and weather by up to 4',
          params: {},
        },
      },
    ],
    activationMode: 'passive',
    tags: ['perception', 'concealment', 'fog', 'smoke', 'air', 'earth'],
  },

  {
    id: 'stone_handed',
    name: 'Stone-Handed',
    description:
      'Drawing upon techniques to combat animated creatures, you bring a strike like an avalanche of stone. Before making a melee attack with an unarmed strike, you can expend one use of Stunning Fist to declare a stone-handed strike. The attack resolves normally, but your strike ignores hardness equal to your monk level or one-quarter your base attack bonus (minimum 1), whichever is higher. This effect replaces other effects or conditions normally caused by Stunning Fist.',
    shortDescription:
      'Expend a Stunning Fist use to make an unarmed strike that ignores hardness equal to monk level or 1/4 BAB.',
    source: "Pathfinder Player Companion: Elemental Master's Handbook",
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'STR', minimum: 13 },
      { type: 'feat', featId: 'stunning_fist' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['unarmed', 'monk', 'hardness', 'stunning fist', 'earth', 'constructs'],
  },

  {
    id: 'storm_breaker',
    name: 'Storm Breaker',
    description:
      'After the Eye of Abendego, no other storm, magic or mundane, can faze you. You are treated as two sizes larger than your actual size when calculating whether you can be moved by wind or currents, including the vortex and whirlwind special abilities of monsters. If you have at least 11 Hit Dice, you cannot be moved by nonmagical wind unless you so choose.',
    shortDescription:
      'Count as two sizes larger against wind and current displacement effects; at 11 HD, ignore nonmagical wind movement entirely.',
    source: "Pathfinder Player Companion: Elemental Master's Handbook",
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [],
    effects: [],
    activationMode: 'passive',
    tags: ['wind', 'air', 'water', 'weather', 'stability', 'sailor'],
  },

  {
    id: 'sunblade',
    name: 'Sunblade',
    description:
      "You can channel your deity's solar wrath through your blade. You can expend one use of lay on hands as a standard action to launch a flame blast from your weapon, functioning like a kineticist's fire blast with an effective kineticist level equal to your paladin level minus 4. The blast uses your Charisma modifier instead of Constitution for damage calculation and cannot be modified by infusions or similar effects. You must be wielding a manufactured melee weapon, but a free hand is not required.",
    shortDescription:
      "Expend lay on hands to launch a fire blast from your weapon as a kineticist's fire blast.",
    source: "Pathfinder Player Companion: Elemental Master's Handbook",
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'word_of_healing' },
      { type: 'level', class: 'paladin', minimum: 5 },
      { type: 'special', description: 'Worshiper of a deity that grants the Fire or Sun domain' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['paladin', 'fire', 'lay on hands', 'fire blast', 'divine', 'sun'],
  },

  {
    id: 'tundra_stride',
    name: 'Tundra Stride',
    description:
      "Whether as predator or prey, you have learned to move like the arctic wind when survival is at stake. You gain a +10-foot enhancement bonus to your base speed while charging, running, or withdrawing. This bonus also applies to overland movement calculations in plains terrain. The feat's benefits are lost while wearing heavy armor or carrying a heavy load.",
    shortDescription:
      'Gain +10 ft. enhancement bonus to speed while charging, running, or withdrawing; lost in heavy armor or heavy load.',
    source: "Pathfinder Player Companion: Elemental Master's Handbook",
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [{ type: 'skill', skillId: 'acrobatics', ranks: 5 }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.ENHANCEMENT,
        target: 'speed.base',
        value: 10,
        source: 'Tundra Stride',
        condition: {
          type: 'custom',
          description: 'While charging, running, or withdrawing; not in heavy armor or heavy load',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['speed', 'movement', 'cold', 'plains', 'tundra', 'air'],
  },

  {
    id: 'wind_song',
    name: 'Wind Song',
    description:
      "You have mastered melodies reminiscent of the Painted Flutes canyon, allowing wind-carried magic to extend your performance's reach considerably. Three times per day while using a wind instrument to play a bardic performance or raging song, you can spend an extra round of performance at the start of your performance and choose a square within 120 feet. The performance originates from that square rather than your location. You cannot change this origin square until you end the performance. If you move beyond 120 feet from that square, the performance immediately ends.",
    shortDescription:
      'Three times per day, project your bardic performance or raging song from a chosen square within 120 feet.',
    source: "Pathfinder Player Companion: Elemental Master's Handbook",
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'perform', ranks: 5 },
      {
        type: 'special',
        description:
          'Bardic performance or raging song class feature; Perform (wind instruments) 5 ranks',
      },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['bard', 'skald', 'bardic performance', 'raging song', 'air', 'wind instrument'],
  },
];

// CHECKPOINT: last_written=wind_song, written=17/17, status=complete
