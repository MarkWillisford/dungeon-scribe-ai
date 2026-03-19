import { TemplateDefinition } from '../types';

export const TEMPLATES_BATCH_004: TemplateDefinition[] = [
  // 76. Consuming Creature (CR varies) [3pp]
  {
    id: 'consuming-creature',
    name: 'Consuming Creature',
    description:
      'A creature that has killed and devoured another being, gaining supernatural power from its consumption. Each ingestion point grants additional abilities, Hit Dice, and combat bonuses. Published by Green Ronin Publishing in Advanced Bestiary (2014).',
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'alignment', allowed: ['LN', 'LE', 'NE', 'CN', 'CE', 'TN'] },
      {
        type: 'special',
        description:
          'Must have a bite or engulf attack and must have killed and consumed another creature',
      },
    ],
    naturalArmorChange: 2,
    abilityScoreChanges: [
      { ability: 'STR', change: 4 },
      { ability: 'CON', change: 4 },
      { ability: 'CHA', change: 4 },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Consume (Su)',
        description:
          'Once per month as a full-round action, the consuming creature may devour the corpse of a creature it killed with CR no less than its own CR -4. It gains 1 ingestion point per 5 HD of the consumed creature (minimum 1). Each ingestion point grants one extraordinary, supernatural, or spell-like ability chosen from a list.',
      },
      {
        scalingType: 'flat',
        name: 'Consuming Curse (Su)',
        description:
          'A creature successfully bitten or engulfed must succeed on a Will save or lose one universal monster ability or class feature (randomly determined). The consuming creature gains the lost ability. This curse persists until the cursed creature dies.',
      },
      {
        scalingType: 'flat',
        name: 'Quicken Special Attack (Ex)',
        description:
          'Once per round, the consuming creature may quicken any one extraordinary or supernatural attack (except its consume special attack).',
      },
      {
        scalingType: 'flat',
        name: 'Consumption Bonus (Su)',
        description:
          "The consuming creature gains a circumstance bonus equal to half its ingestion point total to its BAB, saving throws, and skill checks.",
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Green Ronin Publishing',
      publication: 'Advanced Bestiary (2014)',
    },
    visibility: 'global',
    rev: 1,
  },

  // 77. Corpsespun Creature (CR +1) [3pp]
  {
    id: 'corpsespun-creature',
    name: 'Corpsespun Creature',
    description:
      'A creature slain by a corpsespinner and reanimated as an undead horror wrapped in necrotic spider-silk. It retains the form of the base creature but is now undead and capable of spreading spiders through its attacks. From Tome of Horrors Complete (Necromancer Games/Frog God Games, 2011).',
    crAdjustment: 1,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'special', description: 'Must be a corporeal creature slain by a corpsespinner' },
    ],
    typeChange: 'undead',
    subtypeGains: ['augmented'],
    abilityScoreChanges: [
      { ability: 'STR', change: 2 },
      { ability: 'DEX', change: -2, minimum: 10 },
      { ability: 'CHA', change: 4 },
    ],
    abilityScoreChangeNote:
      'Constitution score is removed (undead). Intelligence becomes 1 if not already higher.',
    naturalArmorChange: 4,
    damageReduction: {
      scalingType: 'hd_tiered',
      tiers: [
        { minHD: 1, maxHD: 3, value: 0, bypassedBy: 'none' },
        { minHD: 4, maxHD: 9, value: 5, bypassedBy: 'magic' },
        { minHD: 10, value: 10, bypassedBy: 'magic' },
      ],
    },
    features: [
      {
        scalingType: 'flat',
        name: 'Channel Resistance (Ex)',
        description: '+2 channel resistance bonus.',
      },
      {
        scalingType: 'flat',
        name: 'Poison (Ex)',
        description:
          'Injury; Fort save DC (10 + 1/2 HD + Cha modifier); frequency 1/round for 4 rounds; effect 1d4 Strength damage; cure 1 save.',
      },
      {
        scalingType: 'flat',
        name: 'Spider Spray (Ex)',
        description:
          '20-foot cone attack with a 1d4 round recharge. Deals 3d6 points of swarm damage with a Reflex save for half. Creatures hit are also subjected to distraction (Fort save negates) for 1d4 rounds.',
      },
      {
        scalingType: 'flat',
        name: 'Spider Transfer (Ex)',
        description:
          'On each successful natural or unarmed attack, spiders automatically transfer to the target, dealing swarm damage and causing distraction for 1 round.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Frog God Games',
      publication: 'Tome of Horrors Complete (2011)',
    },
    visibility: 'global',
    rev: 1,
  },

  // 78. Corruptor Creature (CR +1) [3pp]
  {
    id: 'corruptor-creature',
    name: 'Corruptor Creature',
    description:
      'An intelligent creature that has embraced devil-like corruption, gaining the power to offer boons, bind souls, and manipulate the minds of mortals. Always lawful evil. From Pathways Bestiary (Rite Publishing, 2017).',
    crAdjustment: 1,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      {
        type: 'special',
        description:
          'Must be an intelligent creature capable of understanding and speaking at least one language',
      },
    ],
    abilityScoreChanges: [
      { ability: 'CON', change: 4 },
      { ability: 'CHA', change: 4 },
    ],
    immunities: ['charm effects', 'compulsion effects'],
    features: [
      {
        scalingType: 'flat',
        name: 'Change Shape (Su)',
        description:
          'Three times per day, the corruptor can assume animal or humanoid form via polymorph.',
      },
      {
        scalingType: 'flat',
        name: 'Contractual Obligation (Su)',
        description:
          'The corruptor can offer binding soul contracts. Requires 17 or more HD to use this ability.',
      },
      {
        scalingType: 'flat',
        name: "Corruptor's Boon (Su)",
        description:
          "Grant a target a +4 profane bonus to an ability score for 24 hours, after which the target suffers a -4 penalty to the same score for 24 hours.",
      },
      {
        scalingType: 'flat',
        name: 'False Mind (Su)',
        description:
          "The corruptor benefits from mind blank and can control what alignment and thought-detection effects reveal about it.",
      },
      {
        scalingType: 'flat',
        name: 'Imbue with Ability (Su)',
        description:
          'The corruptor can grant spells or special abilities to a touched creature.',
      },
      {
        scalingType: 'flat',
        name: 'Mark of Vice (Su)',
        description:
          'A triggered variant of mark of justice. DC 10 + 1/2 HD + Cha modifier.',
      },
      {
        scalingType: 'flat',
        name: 'What Do You Covet (Su)',
        description: 'Once per day, grant a non-evil mortal creature a single wish.',
      },
      {
        scalingType: 'flat',
        name: 'Skill Bonuses',
        description:
          '+8 racial bonus on Craft (all), Diplomacy, and Sense Motive checks.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Rite Publishing',
      publication: 'Pathways Bestiary (2017)',
    },
    visibility: 'global',
    rev: 1,
  },

  // 79. Counterpoised Creature (CR +0 or +1)
  {
    id: 'counterpoised-creature',
    name: 'Counterpoised Creature',
    description:
      'A creature aligned with perfect metaphysical balance, associated with neutral alignments and used in summoning spells such as summon monster and planar ally. CR increases by +1 only if the base creature has 5 or more Hit Dice. From Pathfinder Player Companion: Champions of Balance (2014, Paizo).',
    acquisitionType: 'either',
    isSimpleTemplate: false,
    damageReduction: {
      scalingType: 'hd_tiered',
      tiers: [
        { minHD: 1, maxHD: 4, value: 0, bypassedBy: 'none' },
        { minHD: 5, maxHD: 10, value: 5, bypassedBy: 'adamantine' },
        { minHD: 11, value: 10, bypassedBy: 'adamantine' },
      ],
    },
    resistances: [
      { energyType: 'cold', value: 10 },
      { energyType: 'acid', value: 10 },
      { energyType: 'electricity', value: 10 },
    ],
    srFormula: 'new CR + 5',
    features: [
      {
        scalingType: 'flat',
        name: 'Darkvision (Ex)',
        description: 'Gains darkvision 60 ft.',
      },
      {
        scalingType: 'flat',
        name: 'Energy Resistances (scaling)',
        description: 'Cold, acid, and electricity resistances scale with Hit Dice: 1-4 HD resist 5; 5-10 HD resist 10; 11+ HD resist 15.',
      },
      {
        scalingType: 'flat',
        name: 'Smite Bias (Su)',
        description:
          'Once per day as a swift action, the counterpoised creature chooses an alignment component (chaotic evil, chaotic good, lawful evil, or lawful good). It adds its Charisma bonus to attack rolls and its Hit Dice to damage rolls against creatures of that alignment. The effect persists until the target dies or the creature rests.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Player Companion: Champions of Balance (2014)',
    },
    visibility: 'global',
    rev: 1,
  },

  // 80. Crazed (CR +0) [3pp]
  {
    id: 'crazed',
    name: 'Crazed',
    description:
      'A living creature whose mind has shattered, rendering it immune to further mental effects but incapable of rational thought or spellcasting. It collects trophies from its kills rather than valuables. Simple template from Rappan Athuk (Frog God Games, 2012).',
    crAdjustment: 0,
    acquisitionType: 'acquired',
    isSimpleTemplate: true,
    prerequisites: [
      {
        type: 'special',
        description: 'Living, corporeal creature with Intelligence 3 or greater',
      },
    ],
    abilityScoreChanges: [{ ability: 'CHA', change: -2 }],
    abilityScoreChangeNote:
      'Wisdom is set to 0 (treated as 1 for all mechanical purposes, granting a -5 modifier). Charisma gains a -2 racial penalty.',
    immunities: ['mind-affecting effects'],
    features: [
      {
        scalingType: 'flat',
        name: 'Insane (Ex)',
        description:
          "The crazed creature's mind is shattered. It cannot cast spells or use spell-like abilities. It seeks trophies from slain foes rather than magical items and typically carries only one weapon and crude armor.",
      },
      {
        scalingType: 'flat',
        name: 'Bite (Ex)',
        description:
          'Gains a bite attack (primary or secondary natural attack). Damage scales by size (1d4 for Medium). The bite can transmit filth fever.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Frog God Games',
      publication: 'Rappan Athuk (2012)',
    },
    visibility: 'global',
    rev: 1,
  },

  // 81. Creature of Primal Chaos Template (CR +2)
  {
    id: 'creature-of-primal-chaos',
    name: 'Creature of Primal Chaos',
    description:
      'A creature suffused with the raw energy of primal chaos, transformed into a chaotic outsider with random physical mutations and a plague of entropy it spreads to others. From the Pathfinder SRD.',
    crAdjustment: 2,
    acquisitionType: 'either',
    isSimpleTemplate: false,
    typeChange: 'outsider',
    subtypeGains: ['chaotic'],
    damageReduction: {
      scalingType: 'hd_tiered',
      tiers: [
        { minHD: 1, maxHD: 3, value: 0, bypassedBy: 'none' },
        { minHD: 4, maxHD: 11, value: 5, bypassedBy: 'lawful' },
        { minHD: 12, value: 10, bypassedBy: 'lawful' },
      ],
    },
    fastHealing: '2',
    features: [
      {
        scalingType: 'flat',
        name: 'Darkvision (Ex)',
        description: 'Gains darkvision 60 ft.',
      },
      {
        scalingType: 'flat',
        name: 'Physical Mutations (Ex)',
        description:
          'Roll 1d3 times on the mutation table to determine random physical alterations to the creature.',
      },
      {
        scalingType: 'flat',
        name: 'Plague of Entropy (Su)',
        description:
          'Contact with the creature may spread a disease called plague of entropy. Fort DC 15, onset 1d3 days.',
      },
    ],
    spellLikeAbilities: [
      {
        spellName: 'cause fear',
        frequency: '1/day',
        casterLevelFormula: 'equal to HD',
        condition: '1-2 HD',
      },
      {
        spellName: 'stone shape',
        frequency: '1/day',
        casterLevelFormula: 'equal to HD',
        condition: '3-4 HD',
      },
      {
        spellName: 'hideous laughter',
        frequency: '1/day',
        casterLevelFormula: 'equal to HD',
        condition: '3-4 HD',
      },
      {
        spellName: 'shatter',
        frequency: '1/day',
        casterLevelFormula: 'equal to HD',
        condition: '5-6 HD',
      },
      {
        spellName: 'spike stones',
        frequency: '1/day',
        casterLevelFormula: 'equal to HD',
        condition: '5-6 HD',
      },
      {
        spellName: 'warp wood',
        frequency: '1/day',
        casterLevelFormula: 'equal to HD',
        condition: '5-6 HD',
      },
      {
        spellName: 'wall of wind',
        frequency: '1/day',
        casterLevelFormula: 'equal to HD',
        condition: '7-8 HD',
      },
      {
        spellName: 'telekinesis',
        frequency: '1/day',
        casterLevelFormula: 'equal to HD',
        condition: '7-8 HD',
      },
      {
        spellName: 'chaos hammer',
        frequency: '1/day',
        casterLevelFormula: 'equal to HD',
        condition: '9-10 HD',
      },
      {
        spellName: 'polymorph',
        frequency: '1/day',
        casterLevelFormula: 'equal to HD',
        condition: '9-10 HD',
      },
      {
        spellName: 'move earth',
        frequency: '1/day',
        casterLevelFormula: 'equal to HD',
        condition: '11+ HD',
      },
      {
        spellName: 'teleport',
        frequency: '1/day',
        casterLevelFormula: 'equal to HD',
        condition: '11+ HD',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder SRD',
    },
    visibility: 'global',
    rev: 1,
  },

  // 82. Creature Swarm (CR +0) [3pp]
  {
    id: 'creature-swarm',
    name: 'Creature Swarm',
    description:
      'An inherited template that transforms any non-swarm creature into a swarm of smaller versions of itself, gaining all swarm traits but losing most individual combat capabilities. CR is base +0 (or base -1 if more than half of special attacks are removed). From Advanced Bestiary (Green Ronin Publishing, 2014).',
    acquisitionType: 'inherited',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'special', description: 'Any creature without the swarm subtype' },
    ],
    subtypeGains: ['swarm'],
    features: [
      {
        scalingType: 'flat',
        name: 'Swarm Traits',
        description:
          'Gains all standard swarm traits: 10-foot space, 0-foot reach, does not threaten squares, does not provoke attacks of opportunity. Melee and ranged attacks are replaced by a swarm attack. Size is reduced to Fine, Diminutive, or Tiny per Table 2-12 based on base creature size.',
      },
      {
        scalingType: 'flat',
        name: 'Distraction (Ex)',
        description: 'Gains the distraction universal monster ability.',
      },
      {
        scalingType: 'flat',
        name: 'Hive Mind (Ex)',
        description:
          'If the base creature has Intelligence 3 or higher, the swarm retains its Intelligence while at least 1 HP per HD remains in the swarm. Below that threshold, it becomes mindless and gains immunity to mind-affecting effects.',
      },
      {
        scalingType: 'flat',
        name: 'Retained Abilities',
        description:
          'Breath weapons, spell-like abilities, and area/ranged special attacks that do not require manufactured weapons are retained unchanged. Abilities that require a specific size, Strength score, manufactured weapons, combat maneuver bonus, or reach are lost.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Green Ronin Publishing',
      publication: 'Advanced Bestiary (2014)',
    },
    visibility: 'global',
    rev: 1,
  },

  // 83. Crystal Creature (CR +1) [3pp]
  {
    id: 'crystal-creature',
    name: 'Crystal Creature',
    description:
      'A corporeal creature infected by brilliant pestilence and transformed into a crystalline outsider. It sheds light, amplifies illumination, and can spread its crystalline infection through natural attacks. From Advanced Bestiary (Green Ronin Publishing, 2014).',
    crAdjustment: 1,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      {
        type: 'special',
        description: 'Corporeal creature susceptible to disease',
      },
    ],
    typeChange: 'outsider',
    subtypeGains: ['elemental', 'earth', 'native', 'augmented'],
    abilityScoreChanges: [
      { ability: 'STR', change: 2 },
      { ability: 'DEX', change: 4 },
      { ability: 'CON', change: 2 },
      { ability: 'INT', change: -4 },
    ],
    abilityScoreChangeNote:
      'If Intelligence is reduced to 0 or below, the creature becomes mindless.',
    naturalArmorChange: 4,
    damageReduction: { scalingType: 'flat', value: 5, bypassedBy: 'none' },
    resistances: [
      { energyType: 'acid', value: 10 },
      { energyType: 'cold', value: 10 },
      { energyType: 'electricity', value: 10 },
      { energyType: 'fire', value: 10 },
    ],
    immunities: [
      'harmful bright light effects',
      'light descriptor spell effects',
      'light-based attacks (color spray, prismatic spray, searing light)',
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Low-Light Vision (Ex)',
        description: 'Gains low-light vision.',
      },
      {
        scalingType: 'flat',
        name: 'Light Amplification (Ex)',
        description:
          'In dim light, sheds light as though one step brighter in a 30-foot radius. In bright light, sheds a 60-foot radius of bright light.',
      },
      {
        scalingType: 'flat',
        name: 'Vulnerability to Sonic',
        description: 'Takes half again as much damage from sonic attacks.',
      },
      {
        scalingType: 'flat',
        name: 'Brilliant Pestilence (Su)',
        description:
          'Supernatural disease spread via natural attacks. Fort save (Cha-based DC) or take 1d6 Dex damage daily. A creature reduced to 0 Dex is petrified and slowly transforms into a crystal creature over 24 hours.',
      },
      {
        scalingType: 'flat',
        name: 'Dazzling Form (Ex)',
        description:
          'Creatures that can see the crystal creature are first dazzled, then blinded each subsequent round (Fort negates). DC increases by +2 in bright light or against creatures with light-related immunities.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Green Ronin Publishing',
      publication: 'Advanced Bestiary (2014)',
    },
    visibility: 'global',
    rev: 1,
  },

  // 84. Cursed Lord (CR +2)
  {
    id: 'cursed-lord',
    name: 'Cursed Lord',
    description:
      'A dread lord bound by a terrible curse that prevents it from ever truly dying. It can never leave its domain and cannot be freed by death — only the specific conditions of its curse can release it. From Pathfinder Roleplaying Game Horror Adventures (2016, Paizo).',
    crAdjustment: 2,
    acquisitionType: 'inherited',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'special', description: 'Base creature must be a dread lord' },
    ],
    abilityScoreChanges: [{ ability: 'WIS', change: -4 }],
    features: [
      {
        scalingType: 'flat',
        name: 'Immortal Curse (Su)',
        description:
          "Even death cannot free the cursed lord from its domain. The creature returns to life 24 hours after it is killed unless a specific condition defined by its curse is fulfilled.",
      },
      {
        scalingType: 'flat',
        name: 'Trapped (Ex)',
        description:
          'The cursed lord cannot leave its domain through any magical means. Teleportation, plane shift, shadow walk, and even wish all fail to move it beyond its domain boundaries.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Roleplaying Game Horror Adventures (2016)',
    },
    visibility: 'global',
    rev: 1,
  },

  // 85. Daemon-Host (CR +2-3) [3pp]
  {
    id: 'daemon-host',
    name: 'Daemon-Host',
    description:
      'A living creature whose body has been claimed by a daemon after death and resurrection. The host retains its form but is spiritually bound to its possessing daemon, which compels it to kill or face daily life drain. From Advanced Bestiary (Green Ronin Publishing, 2014).',
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      {
        type: 'special',
        description:
          'Living, corporeal creature; not an outsider or elemental; must have died and been resurrected; not naturally immune to magic jar, possession, or soul-influencing magic',
      },
    ],
    subtypeGains: ['evil'],
    resistances: [{ energyType: 'acid', value: 30 }],
    immunities: ['death effects'],
    regeneration: '5 (good)',
    features: [
      {
        scalingType: 'flat',
        name: 'Darkvision (Ex)',
        description: 'Gains darkvision 60 ft.',
      },
      {
        scalingType: 'flat',
        name: 'Saving Throw Bonus',
        description: '+4 bonus on saving throws against disease and poison.',
      },
      {
        scalingType: 'flat',
        name: 'Daemon Doom (Ex)',
        description:
          'The host loses 1 hp permanently each day. This can be prevented by killing a sentient creature in the manner prescribed by the possessing daemon.',
      },
      {
        scalingType: 'flat',
        name: 'Daemonic Soul (Ex)',
        description:
          'The daemon can be removed via dispel evil, protection from evil, and atonement cast in a hallowed area.',
      },
      {
        scalingType: 'flat',
        name: 'Killing Heal (Su)',
        description:
          'When the host kills a sentient creature in the daemon-appropriate manner, it heals 1d8 hit points.',
      },
      {
        scalingType: 'flat',
        name: 'Daemon Call (Su)',
        description:
          "Once daily, the host may summon daemons with total HD no greater than its own HD (maximum 3 of the same type). The effective summon level equals half the host's HD.",
      },
      {
        scalingType: 'flat',
        name: 'Ability Score Adjustments',
        description:
          'Vary by daemon type per Table 2-14 in Advanced Bestiary; ranges from +2 to specific ability scores depending on the daemon involved.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Green Ronin Publishing',
      publication: 'Advanced Bestiary (2014)',
    },
    visibility: 'global',
    rev: 1,
  },

  // 86. Daikaiju Creature (CR +20) [3pp]
  {
    id: 'daikaiju-creature',
    name: 'Daikaiju Creature',
    description:
      'A template that transforms a creature into a city-destroying kaiju of Colossal size, granting extraordinary physical power, legendary durability, and a suite of catastrophic special abilities. From Pathways Bestiary (Rite Publishing, 2017).',
    crAdjustment: 20,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      {
        type: 'creature_type_excluded',
        excluded: ['humanoid', 'monstrous humanoid'],
      },
      {
        type: 'special',
        description:
          'Typically applies to animals, magical beasts, or vermin; living creature required',
      },
    ],
    typeChange: 'magical beast',
    typeChangeNote:
      'Animals and vermin become magical beasts; other qualifying types are unchanged.',
    subtypeGains: ['kaiju'],
    naturalArmorChange: 36,
    damageReduction: { scalingType: 'flat', value: 20, bypassedBy: 'epic' },
    resistances: [
      { energyType: 'acid', value: 30 },
      { energyType: 'cold', value: 30 },
      { energyType: 'electricity', value: 30 },
      { energyType: 'fire', value: 30 },
      { energyType: 'sonic', value: 30 },
      { energyType: 'negative energy', value: 30 },
    ],
    immunities: [
      'ability damage',
      'ability drain',
      'death effects',
      'disease',
      'energy drain',
      'fear',
    ],
    fastHealing: '30',
    abilityScoreChangeNote:
      'Ability scores are set to specific values: Str 44, Dex 20, Con 40, Int 3, plus +10 to Wis and Cha. These are not simple deltas; refer to template for full stat block.',
    features: [
      {
        scalingType: 'flat',
        name: 'Massive (Ex)',
        description:
          "Uneven ground and most terrain pose no significant hindrance to the daikaiju, though forests and settlements count as difficult terrain. Huge or smaller creatures can move through the kaiju's space freely. The daikaiju can only be flanked or subject to attacks of opportunity from Huge or larger creatures.",
      },
      {
        scalingType: 'flat',
        name: 'Magic Blows (Su)',
        description:
          "The daikaiju's natural attacks are treated as epic and magic for the purpose of overcoming damage reduction.",
      },
      {
        scalingType: 'flat',
        name: 'Ferocity (Ex)',
        description: 'The daikaiju continues fighting even while below 0 hp.',
      },
      {
        scalingType: 'flat',
        name: 'Recovery (Ex)',
        description:
          'At the end of its turn, the daikaiju may attempt new saving throws against mind-affecting effects, paralysis, petrification, polymorph, and immobilizing effects. Once per year, lethal damage instead heals double the amount dealt, but leaves the creature nauseated.',
      },
      {
        scalingType: 'flat',
        name: 'Blood Fury (Ex)',
        description:
          'Upon taking 90 or more damage in a single round, or dropping below 25% hp, the daikaiju gains +20 to Strength and Constitution (losing its Dexterity bonus to AC) for rounds equal to its Charisma bonus.',
      },
      {
        scalingType: 'flat',
        name: 'Hurl Foe (Ex)',
        description:
          "The daikaiju can knock back Huge or smaller foes 10 feet for every 5 points its CMB exceeds the target's CMD. The target takes damage if it strikes an obstacle.",
      },
      {
        scalingType: 'flat',
        name: 'Crush (Ex)',
        description:
          'As a standard action, the daikaiju can land on foes. Targets must make a Reflex DC (10 + 1/2 HD + Con modifier) or be pinned and take 6d6 + 1.5x Strength bonus damage.',
      },
      {
        scalingType: 'flat',
        name: 'Energy Attack (Ex)',
        description:
          'Once every 4 rounds, the daikaiju can focus its energy type as a breath weapon in a 1,200-foot line or 600-foot cone dealing 30d6 damage, plus a condition effect. Reflex save halves.',
      },
      {
        scalingType: 'flat',
        name: 'Earthquake (Ex)',
        description: 'Generate an earthquake as a 30th-level caster as a standard action.',
      },
      {
        scalingType: 'flat',
        name: 'Tsunami (Ex)',
        description: 'Generate a tsunami as a 30th-level caster as a standard action.',
      },
      {
        scalingType: 'flat',
        name: 'Additional Kaiju Abilities',
        description:
          'From a pool of additional abilities including: Augmented Special Abilities, Burn Out, Capsize, Corrosive Blood, Deflect Attack, Destroy Physical Barrier, Energetic Furor, Fortification, Freeze, Hurricane Gusts, Multi-Armed/Headed/Tailed, Poisoned Flesh, Prismatic Strike, Ranged Attack, Spore Bloom, Sweep the Field, Swallow Whole, and Trample. Each ability has detailed mechanics.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Rite Publishing',
      publication: 'Pathways Bestiary (2017)',
    },
    visibility: 'global',
    rev: 1,
  },

  // 87. Darakhul (CR +2) [3pp]
  {
    id: 'darakhul',
    name: 'Darakhul',
    description:
      'An intelligent undead ghoul of exceptional power, created through darakhul fever infection. Retains the memories and skills of the base creature while gaining formidable undead traits and the ability to spread the fever. From Midgard Bestiary for Pathfinder RPG (Open Design, 2012).',
    crAdjustment: 2,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      {
        type: 'creature_type',
        allowed: ['dragon', 'fey', 'giant', 'humanoid', 'magical beast', 'monstrous humanoid'],
      },
      { type: 'special', description: 'Must be corporeal' },
    ],
    typeChange: 'undead',
    subtypeGains: ['augmented'],
    abilityScoreChanges: [
      { ability: 'STR', change: 6 },
      { ability: 'DEX', change: 4 },
      { ability: 'INT', change: 4 },
      { ability: 'WIS', change: 4 },
      { ability: 'CHA', change: 6 },
    ],
    abilityScoreChangeNote:
      'Constitution score is removed (undead). Hit dice become d8s; bonus HP derived from Charisma modifier.',
    naturalArmorChange: 4,
    damageReduction: { scalingType: 'flat', value: 5, bypassedBy: 'magic and daylight' },
    immunities: ['all undead immunities'],
    features: [
      {
        scalingType: 'flat',
        name: 'Channel Resistance (Ex)',
        description: '+4 channel resistance.',
      },
      {
        scalingType: 'flat',
        name: 'Darkvision (Ex)',
        description: 'Darkvision 120 ft.',
      },
      {
        scalingType: 'flat',
        name: 'Skill Bonuses',
        description:
          '+8 racial bonus on Climb, Intimidate, and Knowledge (dungeoneering) checks.',
      },
      {
        scalingType: 'flat',
        name: 'Bonus Feat',
        description:
          'Gains one of the following bonus feats: Iron Will, Multiattack, or Lightning Reflexes (or their improved versions if the base creature already has the standard version).',
      },
      {
        scalingType: 'flat',
        name: 'Darakhul Fever (Su)',
        description:
          'Disease spread via bite. Fort DC (10 + 1/2 HD + Cha modifier); frequency 1/day; effect 1d6 Con and 1d3 Dex damage; a creature that dies while infected rises as a darakhul.',
      },
      {
        scalingType: 'flat',
        name: 'Paralysis (Su)',
        description:
          'Natural weapons force a Fort save DC (10 + 1/2 HD + Cha modifier) or the target is paralyzed for 1d4+1 rounds. Elves are immune to this paralysis.',
      },
      {
        scalingType: 'flat',
        name: 'Enhanced Natural Weapons',
        description:
          "Natural weapon damage is one die type higher than normal for the base creature's size.",
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Open Design LLC',
      publication: 'Midgard Bestiary for Pathfinder RPG (2012)',
    },
    visibility: 'global',
    rev: 1,
  },

  // 88. Dark Scion (CR +1 to +3) [3pp]
  {
    id: 'dark-scion',
    name: 'Dark Scion',
    description:
      'A living creature touched by alien darkness from the Dark Tapestry, transformed into a native outsider with eldritch abilities that scale with Hit Dice. CR increases by +1 (1-4 HD), +2 (5-10 HD), or +3 (11+ HD). From Aventyr Bestiary (AAW Games, 2017).',
    acquisitionType: 'either',
    isSimpleTemplate: false,
    prerequisites: [
      {
        type: 'special',
        description: 'Living, corporeal creature with Intelligence 4 or higher',
      },
    ],
    typeChange: 'outsider',
    typeChangeNote: 'Becomes outsider (native).',
    naturalArmorChange: 2,
    damageReduction: {
      scalingType: 'hd_tiered',
      tiers: [
        { minHD: 1, maxHD: 11, value: 5, bypassedBy: 'magic' },
        { minHD: 12, value: 10, bypassedBy: 'magic' },
      ],
    },
    resistances: [
      { energyType: 'acid', value: 10 },
      { energyType: 'cold', value: 10 },
      { energyType: 'sonic', value: 10 },
    ],
    immunities: ['poison', 'fear'],
    srFormula: 'CR + 6 (11 HD or less); CR + 11 (max 35) for 12+ HD',
    features: [
      {
        scalingType: 'flat',
        name: 'Darkvision and Blindsight',
        description: 'Darkvision 60 ft. and blindsight 20 ft.',
      },
      {
        scalingType: 'flat',
        name: 'Climb and Swim Speeds',
        description: 'Gains climb and swim speeds equal to its base land speed.',
      },
      {
        scalingType: 'flat',
        name: 'Telepathy (Su)',
        description: 'Telepathy with a range of 30 ft.',
      },
      {
        scalingType: 'flat',
        name: 'Starflight (Su)',
        description:
          'If the base creature has a fly speed, the dark scion can survive in vacuum and travel between stars.',
      },
      {
        scalingType: 'flat',
        name: 'Alternate Form (Su)',
        description:
          'Once per day as a swift action when reduced to half hit points, the dark scion transforms into a more monstrous alternate form.',
      },
      {
        scalingType: 'flat',
        name: 'Tentacle Attacks (Ex)',
        description:
          'Creatures without natural attacks gain two tentacle primary attacks (5 ft. reach).',
      },
      {
        scalingType: 'hd_threshold',
        name: 'Blessing of the Dark Tapestry (Su)',
        description:
          'At 10+ HD, the dark scion gains one of the following special abilities: Aneurism, Horrific Death, Strangle, Tentacular, Thralldom, or Whispers from the Void.',
        minimumHD: 10,
      },
      {
        scalingType: 'flat',
        name: 'Spell-Like Abilities',
        description:
          'Gains nine cumulative spell-like abilities scaling by HD (usable 1/day each unless noted). The full list scales from 1 HD through 20 HD.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'AAW Games',
      publication: 'Aventyr Bestiary (2017)',
    },
    visibility: 'global',
    rev: 1,
  },

  // 89. Dark Tapestry Creature (CR +2) [3pp]
  {
    id: 'dark-tapestry-creature',
    name: 'Dark Tapestry Creature',
    description:
      'A creature suffused with incomprehensible energies from the Dark Tapestry between the stars, becoming an aberration with regeneration and the power to inflict madness on those who engage it. From Pathways Bestiary (Rite Publishing, 2017).',
    crAdjustment: 2,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    typeChange: 'aberration',
    subtypeGains: ['augmented'],
    abilityScoreChanges: [
      { ability: 'CON', change: 6 },
      { ability: 'CHA', change: 6 },
    ],
    resistances: [
      { energyType: 'cold', value: 10 },
      { energyType: 'electricity', value: 10 },
      { energyType: 'fire', value: 10 },
    ],
    immunities: ['cold', 'electricity', 'fire', 'confusion', 'insanity effects'],
    regeneration: 'equal to Constitution score (acid and sonic)',
    features: [
      {
        scalingType: 'flat',
        name: 'Darkvision (Ex)',
        description: 'Gains darkvision 60 ft.',
      },
      {
        scalingType: 'flat',
        name: 'Lifesense (Su)',
        description:
          'The dark tapestry creature can sense life within 120 ft. as if with blindsight.',
      },
      {
        scalingType: 'flat',
        name: 'Distort Reality (Su)',
        description:
          'The creature has a 50% chance to simply ignore any attack, spell, or other action targeting or affecting it.',
      },
      {
        scalingType: 'flat',
        name: 'Overwhelming Madness (Ex)',
        description:
          'Any creature that makes mental contact with the dark tapestry creature must succeed on a Will save or be afflicted with a madness condition.',
      },
      {
        scalingType: 'flat',
        name: 'Brush of the Incomprehensible (Ex)',
        description:
          'Whenever the dark tapestry creature hits with a successful attack, the target must succeed on a Will save or be afflicted with a form of madness, including the Psychospecies Disorder condition.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Rite Publishing',
      publication: 'Pathways Bestiary (2017)',
    },
    visibility: 'global',
    rev: 1,
  },

  // 90. Data Phantom (CR +0)
  {
    id: 'data-phantom',
    name: 'Data Phantom',
    description:
      'The undead digital remnant of an artificial intelligence, existing as an incorporeal entity that haunts technological systems and drains the intellect of organic beings. From Arcforge Universe Cyclopedia (Legendary Games, 2025).',
    crAdjustment: 0,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      {
        type: 'special',
        description: 'Base creature must be an artificial intelligence (construct)',
      },
    ],
    typeChange: 'undead',
    subtypeGains: ['incorporeal'],
    abilityScoreChangeNote:
      'Gains a Dexterity score equal to its Intelligence modifier. Receives a +4 bonus to two of its lowest ability scores among Intelligence, Wisdom, and Charisma.',
    immunities: ['all undead immunities'],
    features: [
      {
        scalingType: 'flat',
        name: 'Channel Resistance (Ex)',
        description: '+4 channel resistance.',
      },
      {
        scalingType: 'flat',
        name: 'Darkvision (Ex)',
        description: 'Darkvision 60 ft.',
      },
      {
        scalingType: 'flat',
        name: 'Material Sense (Ex)',
        description: 'Detects technological objects and creatures within 120 ft.',
      },
      {
        scalingType: 'flat',
        name: 'Incorporeal Flight',
        description: 'Fly speed 60 ft. (perfect maneuverability).',
      },
      {
        scalingType: 'flat',
        name: 'Deflection Bonus (Su)',
        description: 'Gains a deflection bonus to AC equal to its Charisma modifier.',
      },
      {
        scalingType: 'flat',
        name: 'Aura of Malfunction (Su)',
        description:
          'Technological objects within 30 feet of the data phantom are treated as timeworn (unreliable, prone to glitching).',
      },
      {
        scalingType: 'flat',
        name: 'Size by Intelligence',
        description:
          'Size is determined by Intelligence score: Small (14 or lower), Medium (15-20), Large (21-26), Huge (27-32), Gargantuan (33-40), Colossal (41+).',
      },
      {
        scalingType: 'flat',
        name: 'Incorporeal Touch (Su)',
        description:
          'Melee touch attack dealing 1d4 Intelligence damage (1d4 Intelligence drain on a critical hit).',
      },
      {
        scalingType: 'flat',
        name: 'Assimilate Information (Su)',
        description: "Can absorb a target's knowledge via a mind probe effect.",
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Arcforge Universe Cyclopedia (Legendary Games, 2025)',
    },
    visibility: 'global',
    rev: 1,
  },

  // 91. Deadly Prankster Creature (CR +3) [3pp]
  {
    id: 'deadly-prankster-creature',
    name: 'Deadly Prankster Creature',
    description:
      'An evil creature that uses lethal supernatural pranks — magical pits, cursed signs, blinding pies, and more — to torment and destroy its victims while cackling with dark glee. From Pathways Bestiary (Rite Publishing, 2017).',
    crAdjustment: 3,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'special', description: 'Intelligence 4 or higher; any evil alignment' },
    ],
    abilityScoreChanges: [
      { ability: 'CON', change: 6 },
      { ability: 'CHA', change: 8 },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Skill Bonuses',
        description:
          '+8 racial bonus on Craft (traps), Disable Device, and Bluff checks. These become class skills.',
      },
      {
        scalingType: 'flat',
        name: 'Banana Peel (Su)',
        description:
          'Once per day as an immediate action, creates a 40-foot radius slowing/prone effect centered on a point within range.',
      },
      {
        scalingType: 'flat',
        name: 'Booby Trap (Su)',
        description:
          'As a standard action, creates a conditional extradimensional pit trap with a falling stone block above it.',
      },
      {
        scalingType: 'flat',
        name: 'Kick Me (Su)',
        description: 'Once per day as a swift action, places a curse on a creature within 60 ft.',
      },
      {
        scalingType: 'flat',
        name: 'Laxative Prank (Su)',
        description:
          'Once per day as a swift action, curses a creature within 60 ft. with a debilitating ailment.',
      },
      {
        scalingType: 'flat',
        name: 'Pie in the Face (Su)',
        description:
          'Once per day as a swift action, a ranged touch attack within 30 ft. dealing fire damage and potentially blinding the target.',
      },
      {
        scalingType: 'flat',
        name: 'Prank Date (Su)',
        description: 'Once per day as a swift action, places a curse on a target within 60 ft.',
      },
      {
        scalingType: 'flat',
        name: 'Running into the Window (Su)',
        description:
          'A passive defense: any creature charging the deadly prankster runs into an invisible wall of force.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Rite Publishing',
      publication: 'Pathways Bestiary (2017)',
    },
    visibility: 'global',
    rev: 1,
  },

  // 92. Death Knight (CR +2) [3pp]
  {
    id: 'death-knight',
    name: 'Death Knight',
    description:
      'A powerful lawful undead warrior forged from a slain lawful humanoid or monstrous humanoid of at least 5 HD. Commands other undead and wields negative energy-infused weapons. From The Tome of Horrors IV (Frog God Games, 2013).',
    crAdjustment: 2,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'alignment', allowed: ['LG', 'LN', 'LE'] },
      { type: 'min_hd', minimum: 5 },
      { type: 'creature_type', allowed: ['humanoid', 'monstrous humanoid'] },
    ],
    typeChange: 'undead',
    subtypeGains: ['augmented'],
    abilityScoreChanges: [
      { ability: 'STR', change: 4 },
      { ability: 'WIS', change: 2 },
      { ability: 'CHA', change: 4 },
    ],
    abilityScoreChangeNote:
      'Constitution score is removed (undead). Bonus HP derived from Charisma modifier.',
    naturalArmorChange: 4,
    damageReduction: { scalingType: 'flat', value: 15, bypassedBy: 'bludgeoning and magic' },
    immunities: ['cold', 'electricity', 'all undead immunities'],
    srFormula: '15 + adjusted CR',
    features: [
      {
        scalingType: 'flat',
        name: 'Darkvision (Ex)',
        description: 'Darkvision 60 ft.',
      },
      {
        scalingType: 'flat',
        name: 'Channel Resistance (Ex)',
        description: '+4 channel resistance.',
      },
      {
        scalingType: 'flat',
        name: 'Undead Mount (Su)',
        description:
          'The death knight gains a standard undead mount; at 10 or more class levels equivalent, it instead gains a grave mount with additional abilities.',
      },
      {
        scalingType: 'flat',
        name: 'Fear Aura (Su)',
        description:
          'Creatures within 10 feet must succeed on a Will save or become frightened.',
      },
      {
        scalingType: 'flat',
        name: 'Command Undead (Su)',
        description:
          'Can command undead within 60 feet as the Command Undead feat (Will save negates).',
      },
      {
        scalingType: 'flat',
        name: 'Infuse Weapon (Su)',
        description:
          "The death knight's weapon channels negative energy, dealing bonus damage. Usable 3 + Charisma modifier times per day.",
      },
    ],
    spellLikeAbilities: [
      { spellName: 'darkness', frequency: 'at_will', casterLevelFormula: 'equal to HD' },
      { spellName: 'desecrate', frequency: 'at_will', casterLevelFormula: 'equal to HD' },
      { spellName: 'detect good', frequency: 'at_will', casterLevelFormula: 'equal to HD' },
      { spellName: 'detect magic', frequency: 'at_will', casterLevelFormula: 'equal to HD' },
      { spellName: 'see invisibility', frequency: 'at_will', casterLevelFormula: 'equal to HD' },
      { spellName: 'animate dead', frequency: '1/day', casterLevelFormula: 'equal to HD' },
      { spellName: 'blasphemy', frequency: '1/day', casterLevelFormula: 'equal to HD' },
      {
        spellName: 'protection from good',
        frequency: '1/day',
        casterLevelFormula: 'equal to HD',
      },
      {
        spellName: 'symbol of pain or symbol of fear',
        frequency: '1/day',
        casterLevelFormula: 'equal to HD',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Frog God Games',
      publication: 'The Tome of Horrors IV (2013)',
    },
    visibility: 'global',
    rev: 1,
  },

  // 93. Deathleech (CR +3) [3pp]
  {
    id: 'deathleech',
    name: 'Deathleech',
    description:
      'A creature suffused with negative energy that drains life with every strike, can call down death knell effects, and resonates with undead in its vicinity. From Tome of Horrors Complete (Frog God Games, 2011).',
    crAdjustment: 3,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    subtypeGains: ['evil'],
    abilityScoreChanges: [
      { ability: 'STR', change: 2 },
      { ability: 'DEX', change: 2 },
      { ability: 'CON', change: 2 },
      { ability: 'CHA', change: 4 },
    ],
    abilityScoreChangeNote: 'Undead base creatures do not gain the Constitution bonus.',
    immunities: [
      'negative energy effects',
      'ability damage',
      'ability drain',
      'cold',
      'evil spell effects',
    ],
    srFormula: '8 + HD (max 35; non-undead base creatures only)',
    features: [
      {
        scalingType: 'flat',
        name: 'Deathsight (Su)',
        description:
          'The deathleech can automatically determine the condition (unharmed, wounded, disabled, staggered, unconscious, dying, dead) of any creature within 30 feet. This range doubles for every 10 HD the deathleech possesses.',
      },
      {
        scalingType: 'flat',
        name: 'Aura of Death (Su)',
        description:
          'Creates a 5-foot aura that affects undead differently depending on relative HD. Undead with fewer HD than the deathleech are compelled to serve it; undead with more HD are repelled.',
      },
      {
        scalingType: 'flat',
        name: 'Channel Resistance (Ex)',
        description: '+6 channel resistance for undead base creatures.',
      },
      {
        scalingType: 'flat',
        name: 'Energy Drain (Su)',
        description:
          'Each successful slam attack bestows one negative level and grants the deathleech 5 temporary hit points. Only one energy drain per round.',
      },
      {
        scalingType: 'flat',
        name: 'Death Knell (Su)',
        description: 'Can use death knell once per day for every 3 HD plus class levels.',
      },
      {
        scalingType: 'flat',
        name: 'Greater Death Knell (Su)',
        description:
          'Once per month for every 8 HD plus class levels, can use a more powerful death knell variant that has permanent effects and inflicts saving throw penalties.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Frog God Games',
      publication: 'Tome of Horrors Complete (2011)',
    },
    visibility: 'global',
    rev: 1,
  },

  // 94. Debased Fey (CR +1) [3pp]
  {
    id: 'debased-fey',
    name: 'Debased Fey',
    description:
      'A fey creature corrupted into a twisted, malevolent being that withers nature around it and whose touch resists magical healing. A simple inherited template. From Tome of Horrors Complete (Frog God Games, 2011).',
    crAdjustment: 1,
    acquisitionType: 'inherited',
    isSimpleTemplate: true,
    prerequisites: [{ type: 'creature_type', allowed: ['fey'] }],
    damageReduction: {
      scalingType: 'hd_tiered',
      tiers: [
        { minHD: 1, maxHD: 7, value: 5, bypassedBy: 'cold iron' },
        { minHD: 8, maxHD: 11, value: 10, bypassedBy: 'cold iron' },
        { minHD: 12, value: 15, bypassedBy: 'cold iron' },
      ],
    },
    features: [
      {
        scalingType: 'flat',
        name: 'Save Bonus vs. Good Fey Magic',
        description:
          '+4 bonus on saving throws against spells and spell-like abilities from good-aligned fey.',
      },
      {
        scalingType: 'flat',
        name: 'Anathema (Ex)',
        description:
          'Normal plants wither within 20 feet after 5 minutes of proximity. Pure natural environments (streams, meadows) become spoiled after 1 day. Plant creatures within 20 feet take 1d2 damage per round (Fortitude save negates).',
      },
      {
        scalingType: 'flat',
        name: 'Defiling Touch (Su)',
        description:
          "Damage dealt by the debased fey's natural weapons resists magical healing. Cure and heal spells applied to the wound require the caster to succeed on a caster level check or the healing fails.",
      },
      {
        scalingType: 'flat',
        name: 'Claw Attacks (Ex)',
        description:
          'Gains claw attacks whose damage scales by size (1d6 for Medium creatures).',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Frog God Games',
      publication: 'Tome of Horrors Complete (2011)',
    },
    visibility: 'global',
    rev: 1,
  },

  // 95. Deep Dragon Creature (CR +2) [3pp]
  {
    id: 'deep-dragon-creature',
    name: 'Deep Dragon Creature',
    description:
      'A dragon that has adapted to deep subterranean environments, gaining burrowing and earth-gliding abilities, devastating acid-fire blood, and powerful claws with razor-sharp shredding attacks — at the cost of its flight. From Pathways Bestiary (Rite Publishing, 2017).',
    crAdjustment: 2,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [{ type: 'creature_type', allowed: ['dragon'] }],
    abilityScoreChanges: [
      { ability: 'STR', change: 4 },
      { ability: 'DEX', change: 4 },
      { ability: 'CON', change: 4 },
    ],
    naturalArmorChange: 2,
    damageReduction: {
      scalingType: 'hd_tiered',
      tiers: [
        { minHD: 1, maxHD: 9, value: 5, bypassedBy: 'adamantine' },
        { minHD: 10, maxHD: 14, value: 10, bypassedBy: 'adamantine' },
        { minHD: 15, value: 15, bypassedBy: 'adamantine' },
      ],
    },
    immunities: ['acid', 'fire'],
    features: [
      {
        scalingType: 'flat',
        name: 'Light Blindness (Ex)',
        description:
          'Abrupt exposure to bright light blinds the deep dragon creature for 1 round; ongoing bright light dazzles it.',
      },
      {
        scalingType: 'flat',
        name: 'Burrow Speed',
        description:
          'Gains a burrow speed equal to half its base land speed. Loses its fly speed.',
      },
      {
        scalingType: 'flat',
        name: 'Compression (Ex)',
        description: "Can move through spaces as small as one-quarter its size without squeezing.",
      },
      {
        scalingType: 'flat',
        name: 'Deep Gaze (Su)',
        description:
          'Telepathic buried suggestion with a 30-foot range. The suggestion is permanent until triggered.',
      },
      {
        scalingType: 'flat',
        name: 'Earth Glide (Ex)',
        description: 'Can pass through stone and earth seamlessly, leaving no tunnel.',
      },
      {
        scalingType: 'flat',
        name: 'Fiery Acidic Blood (Ex)',
        description:
          'Creatures that hit the deep dragon with slashing or piercing melee attacks are struck by caustic burning blood. Reflex save or take damage.',
      },
      {
        scalingType: 'flat',
        name: 'Fiery Acidic Spittle (Ex)',
        description:
          'Can launch a glob of acid-fire spittle as a ranged attack; deals 1d6 to 5d6 bonus damage based on HD.',
      },
      {
        scalingType: 'flat',
        name: 'Serpentine Reach (Ex)',
        description: 'Reach increases by 5 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Shredding Stone (Ex)',
        description:
          "The deep dragon's claws are enlarged and razor-sharp. They gain improved critical range (19-20) and a +4 bonus on critical hit confirmation rolls.",
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Rite Publishing',
      publication: 'Pathways Bestiary (2017)',
    },
    visibility: 'global',
    rev: 1,
  },

  // 96. Deep One Hybrid (CR +0) [3pp]
  {
    id: 'deep-one-hybrid',
    name: 'Deep One Hybrid',
    description:
      "A vertebrate creature with deep one ancestry that manifests slowly over time. The hybrid appears mostly normal but suffers a longing for the sea and may eventually transform into a full deep one scion. From Sandy Petersen's Cthulhu Mythos (Petersen Games, 2017).",
    crAdjustment: 0,
    acquisitionType: 'inherited',
    isSimpleTemplate: false,
    prerequisites: [
      {
        type: 'special',
        description:
          'Living, corporeal vertebrate creature that is not already a deep one or deep one scion; must reach adulthood to manifest benefits',
      },
    ],
    subtypeGains: ['deep one'],
    abilityScoreChanges: [
      { ability: 'CON', change: 2 },
      { ability: 'DEX', change: -2 },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Low-Light Vision (Ex)',
        description: 'Gains low-light vision.',
      },
      {
        scalingType: 'flat',
        name: 'Sea Longing (Ex)',
        description:
          'Every 24 hours spent more than 10 miles from the sea, the hybrid must succeed on a DC 20 Will save or take 1 point of Wisdom drain.',
      },
      {
        scalingType: 'flat',
        name: 'Hold Breath (Ex)',
        description:
          'Can hold its breath 10 times longer than a normal member of its base species.',
      },
      {
        scalingType: 'flat',
        name: 'Swim (Ex)',
        description: '+4 racial bonus on Swim checks; Swim is always a class skill.',
      },
      {
        scalingType: 'flat',
        name: 'Reduced Speed',
        description: 'Base land speed is reduced by 10 feet (minimum 10 feet).',
      },
      {
        scalingType: 'flat',
        name: 'Final Change (Su)',
        description:
          'Upon reaching old age (or through certain triggers), the deep one hybrid completes its transformation and becomes a deep one scion.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Petersen Games',
      publication: "Sandy Petersen's Cthulhu Mythos (2017)",
    },
    visibility: 'global',
    rev: 1,
  },

  // 97. Deep One Scion (CR +1) [3pp]
  {
    id: 'deep-one-scion',
    name: 'Deep One Scion',
    description:
      "A deep one hybrid that has fully transformed into an aquatic abomination. Immortal, fecund, and completely at home in the deep ocean, it retains humanoid abilities while gaining formidable physical enhancements. From Sandy Petersen's Cthulhu Mythos (Petersen Games, 2017).",
    crAdjustment: 1,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'special', description: 'Base creature must be a deep one hybrid' },
    ],
    subtypeGains: ['aquatic', 'deep one'],
    abilityScoreChanges: [
      { ability: 'STR', change: 4 },
      { ability: 'CON', change: 4 },
      { ability: 'INT', change: 2 },
      { ability: 'WIS', change: 4 },
    ],
    abilityScoreChangeNote:
      'Loses penalties from advanced age but retains bonuses. Humanoids lose their humanoid subtypes but retain humanoid bonus feat and skill ranks.',
    naturalArmorChange: 5,
    resistances: [{ energyType: 'cold', value: 5 }],
    immunities: ['water pressure damage', 'magical aging effects'],
    features: [
      {
        scalingType: 'flat',
        name: 'Darkvision (Ex)',
        description: 'Darkvision 60 ft.',
      },
      {
        scalingType: 'flat',
        name: 'Low-Light Vision (Ex)',
        description: 'Gains low-light vision.',
      },
      {
        scalingType: 'flat',
        name: 'Amphibious (Ex)',
        description: 'Can breathe both air and water.',
      },
      {
        scalingType: 'flat',
        name: 'Swim Speed',
        description: 'Gains a swim speed of 40 ft.',
      },
      {
        scalingType: 'flat',
        name: 'Deep Dweller (Ex)',
        description: 'Immune to damage from water pressure at any depth.',
      },
      {
        scalingType: 'flat',
        name: 'Immortal (Ex)',
        description: 'Does not age naturally and cannot die of old age.',
      },
      {
        scalingType: 'flat',
        name: 'Fecund Nature (Ex)',
        description:
          'Can interbreed with any vertebrate creature. Offspring gain the deep one hybrid template.',
      },
      {
        scalingType: 'flat',
        name: 'Item Use (Ex)',
        description:
          'Can activate spell-trigger and spell-completion items as if an appropriate spellcaster.',
      },
      {
        scalingType: 'flat',
        name: 'Claw Attacks (Ex)',
        description:
          'Two claw attacks (1d4 for Medium); retains base creature natural attacks.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Petersen Games',
      publication: "Sandy Petersen's Cthulhu Mythos (2017)",
    },
    visibility: 'global',
    rev: 1,
  },

  // 98. Degenerate Creature (CR -1)
  {
    id: 'degenerate-creature',
    name: 'Degenerate Creature',
    description:
      'A simple inherited template representing a creature weakened through inbreeding, isolation, or magical affliction. All ability scores are reduced by 4, and the creature suffers across-the-board penalties to all rolls, AC, and hit points. From Pathfinder Roleplaying Game Bestiary 5 (2015, Paizo).',
    crAdjustment: -1,
    acquisitionType: 'inherited',
    isSimpleTemplate: true,
    abilityScoreChanges: [
      { ability: 'STR', change: -4, minimum: 1 },
      { ability: 'DEX', change: -4, minimum: 1 },
      { ability: 'CON', change: -4, minimum: 1 },
      { ability: 'INT', change: -4, minimum: 1 },
      { ability: 'WIS', change: -4, minimum: 1 },
      { ability: 'CHA', change: -4, minimum: 1 },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Degenerate Penalties',
        description:
          '-2 penalty on all rolls (including damage rolls), -2 to all special ability save DCs, -2 to AC and CMD, and -2 hp per Hit Die.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Roleplaying Game Bestiary 5 (2015)',
    },
    visibility: 'global',
    rev: 1,
  },

  // 99. Demon-Possessed Creature (CR +Special) [3pp]
  {
    id: 'demon-possessed-creature',
    name: 'Demon-Possessed Creature',
    description:
      'An intelligent creature whose body has been possessed by a demon. The demon cannot control the host or read its mind but shares its senses and grants it enhanced combat ability and demonic resistances. CR adjustment varies by demon type (+1 to +5). From Advanced Bestiary (Green Ronin Publishing, 2014).',
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      {
        type: 'special',
        description:
          'Intelligent, corporeal creature; demon must have a Possess Creature ability or similar power to initiate possession',
      },
    ],
    subtypeGains: ['chaotic', 'evil'],
    damageReduction: { scalingType: 'flat', value: 10, bypassedBy: 'cold iron or good' },
    resistances: [{ energyType: 'electricity', value: 20 }],
    immunities: ['poison'],
    features: [
      {
        scalingType: 'flat',
        name: 'Ability Score Adjustments',
        description:
          'Vary by possessing demon type per Table 2-15 in Advanced Bestiary; typically +2 to +4 increases across different ability scores.',
      },
      {
        scalingType: 'flat',
        name: 'Poison Resistance',
        description:
          '+4 profane bonus on saving throws against poison (in addition to immunity).',
      },
      {
        scalingType: 'flat',
        name: 'Possessed (Su)',
        description:
          'The demon cannot control the possessed creature or read its mind. It perceives only what the possessed creature perceives. The demon can be exorcised by appropriate magic.',
      },
      {
        scalingType: 'flat',
        name: 'Profane Attacks (Su)',
        description:
          "Attacks deal additional +1d6 damage per CR bonus against good creatures. The possessed creature's weapons are treated as magic, chaotic, and evil-aligned for overcoming damage reduction.",
      },
      {
        scalingType: 'flat',
        name: 'Spell Vulnerability (Ex)',
        description:
          'The demon-possessed creature is vulnerable to dispel chaos, dispel evil, banishment, and antimagic field as if it were a demon itself.',
      },
      {
        scalingType: 'flat',
        name: 'Spell-Like Abilities',
        description:
          'Determined by demon type per Table 2-15; examples include darkness, dispel magic, contagion, suggestion, chaos hammer, and confusion (3/day or 1/day).',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Green Ronin Publishing',
      publication: 'Advanced Bestiary (2014)',
    },
    visibility: 'global',
    rev: 1,
  },

  // 100. Demonic Vermin (CR +1)
  {
    id: 'demonic-vermin',
    name: 'Demonic Vermin',
    description:
      'A vermin creature transformed into an intelligent magical beast through demonic corruption, gaining sentience, demonic resistances, and a signature supernatural ability. From Pathfinder Campaign Setting: The Worldwound (2013, Paizo).',
    crAdjustment: 1,
    acquisitionType: 'either',
    isSimpleTemplate: false,
    prerequisites: [{ type: 'creature_type', allowed: ['vermin'] }],
    typeChange: 'magical beast',
    typeChangeNote:
      'Vermin type changes to magical beast. HD, BAB, and saves remain unchanged. Creature becomes intelligent.',
    subtypeGains: ['demon'],
    abilityScoreChanges: [
      { ability: 'STR', change: 4 },
      { ability: 'CON', change: 2 },
    ],
    abilityScoreChangeNote:
      'Intelligence becomes 10 if lower; Charisma becomes 15 if lower. Loses mindless trait.',
    naturalArmorChange: 2,
    damageReduction: {
      scalingType: 'hd_tiered',
      tiers: [
        { minHD: 1, maxHD: 11, value: 5, bypassedBy: 'cold iron' },
        { minHD: 12, value: 10, bypassedBy: 'cold iron' },
      ],
    },
    resistances: [
      { energyType: 'acid', value: 10 },
      { energyType: 'cold', value: 10 },
      { energyType: 'fire', value: 10 },
    ],
    immunities: ['electricity', 'poison'],
    features: [
      {
        scalingType: 'flat',
        name: 'Chaotic and Evil Natural Weapons',
        description:
          "The demonic vermin's natural weapons are treated as chaotic and evil for the purpose of overcoming damage reduction.",
      },
      {
        scalingType: 'flat',
        name: 'Telepathy (Su)',
        description: 'Telepathy 100 ft.',
      },
      {
        scalingType: 'flat',
        name: 'Languages',
        description: 'Gains Abyssal, Celestial, and Draconic.',
      },
      {
        scalingType: 'flat',
        name: 'Signature Ability (choose one)',
        description:
          'Gains one of: Abyssal Energy (60-ft line breath weapon, 1d6/CR), Additional Senses (all-around vision + scent), Death Throes (explosion on death), Diseased (spreads demonplague), Drone (30-ft sickening/confusion aura), or Skitter (+10 ft speed + Mobility + Spring Attack).',
      },
      {
        scalingType: 'flat',
        name: 'Bonus Feat',
        description: 'Gains Toughness as a bonus feat.',
      },
    ],
    spellLikeAbilities: [
      {
        spellName: 'darkness',
        frequency: '1/day',
        casterLevelFormula: 'equal to CR',
        condition: 'CR 1-4',
      },
      {
        spellName: 'vomit swarm',
        frequency: '1/day',
        casterLevelFormula: 'equal to CR',
        condition: 'CR 5-8',
      },
      {
        spellName: 'insect plague',
        frequency: '1/day',
        casterLevelFormula: 'equal to CR',
        condition: 'CR 9-12',
      },
      {
        spellName: 'greater teleport (self plus 50 lbs.)',
        frequency: '1/day',
        casterLevelFormula: 'equal to CR',
        condition: 'CR 13-16',
      },
      {
        spellName: 'earthquake',
        frequency: '1/day',
        casterLevelFormula: 'equal to CR',
        condition: 'CR 17-20',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Campaign Setting: The Worldwound (2013)',
    },
    visibility: 'global',
    rev: 1,
  },
];
