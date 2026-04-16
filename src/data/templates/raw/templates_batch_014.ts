// Batch 014 | first: 'Plagued Beast (CR +1)' | last: 'Quickling Creature (CR +3)' | count: 25

import { TemplateDefinition } from '../types';

export const TEMPLATES_BATCH_014: TemplateDefinition[] = [
  // 326. Plagued Beast (CR +1)
  {
    id: 'plagued-beast',
    name: 'Plagued Beast',
    description:
      'An acquired template for living, corporeal creatures with an Intelligence score of 1 or 2. The creature becomes an undead beast saturated with virulent plague, gaining channel resistance, cold immunity, and a disease-inflicting bite attack. Its alignment shifts to neutral evil and it gains Toughness as a bonus feat.',
    crAdjustment: 1,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'creature_type', allowed: ['animal', 'magical beast', 'vermin'] },
      { type: 'special', description: 'Must be a living, corporeal creature with Intelligence 1 or 2' },
    ],
    typeChange: 'undead',
    typeChangeNote: 'Retains all subtypes except alignment and kind subtypes; becomes augmented undead.',
    abilityScoreChanges: [
      { ability: 'STR', change: 4 },
      { ability: 'DEX', change: 2 },
      { ability: 'CHA', change: 0, minimum: 15, condition: 'Charisma becomes at least 15; if already 15 or higher it is unchanged' },
    ],
    abilityScoreChangeNote: 'Constitution score is eliminated; the creature uses its Charisma modifier for bonus hit points and related Constitution-based calculations as normal for undead.',
    naturalArmorChange: 2,
    damageReduction: { scalingType: 'flat', value: 5, bypassedBy: 'slashing' },
    immunities: ['cold', 'undead immunities'],
    features: [
      {
        scalingType: 'flat',
        name: 'Demon Plague (Su)',
        description:
          'Each successful bite attack by the plagued beast delivers demon plague. The save DC is 10 + half the creature\'s Hit Dice + the creature\'s Charisma modifier. If the creature already possessed a bite attack, the bite damage increases by one size step.',
      },
      {
        scalingType: 'flat',
        name: 'Channel Resistance (Ex)',
        description: 'The plagued beast gains channel resistance +2.',
      },
      {
        scalingType: 'flat',
        name: 'Darkvision (Ex)',
        description: 'The plagued beast gains darkvision 60 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Bonus Feat',
        description: 'The plagued beast gains Toughness as a bonus feat.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Roleplaying Game Bestiary 5',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 327. Plane of Faerie Creature (CR +0 or +1)
  {
    id: 'plane-of-faerie-creature',
    name: 'Plane of Faerie Creature',
    description:
      'A template for creatures that inhabit the Plane of Faerie, also called the First World. These creatures count as both their original type and fey for the purpose of type-related effects. CR increases by 1 only if the base creature has 5 or more Hit Dice. When killed on the Plane of Faerie, the creature reappears 1d10 days later without the negative level or Constitution drain normally suffered below 1st level or 1 Constitution; the GM may substitute reincarnation instead.',
    crAdjustment: 0,
    acquisitionType: 'either',
    isSimpleTemplate: false,
    damageReduction: {
      scalingType: 'hd_tiered',
      tiers: [
        { minHD: 1, maxHD: 4, value: 0, bypassedBy: 'cold iron' },
        { minHD: 5, maxHD: 10, value: 5, bypassedBy: 'cold iron' },
        { minHD: 11, value: 10, bypassedBy: 'cold iron' },
      ],
    },
    resistances: [
      { energyType: 'cold', value: 5 },
      { energyType: 'electricity', value: 5 },
    ],
    srFormula: 'new CR + 5',
    features: [
      {
        scalingType: 'flat',
        name: 'Fey Dual Nature (Ex)',
        description:
          'A plane of faerie creature counts as both its original creature type and fey for any effect related to type.',
      },
      {
        scalingType: 'flat',
        name: 'Low-Light Vision (Ex)',
        description: 'The creature gains low-light vision if it did not already possess it.',
      },
      {
        scalingType: 'flat',
        name: 'Mind-Affecting Resistance (Ex)',
        description:
          'The creature gains a +4 bonus on saving throws against mind-affecting effects.',
      },
      {
        scalingType: 'hd_threshold',
        name: 'CR Increase at 5+ HD',
        description:
          'If the base creature has 5 or more Hit Dice, its CR increases by +1. Below 5 HD the CR is unchanged.',
        minimumHD: 5,
      },
      {
        scalingType: 'flat',
        name: 'Scaled Energy Resistance',
        description:
          'HD 1-4: resistance 5 to cold and electricity. HD 5-10: resistance 10 to cold and electricity, DR 5/cold iron. HD 11+: resistance 15 to cold and electricity, DR 10/cold iron.',
      },
      {
        scalingType: 'flat',
        name: 'Faerie Resurrection (Su)',
        description:
          'When killed on the Plane of Faerie, a plane of faerie creature reappears 1d10 days later as if by resurrection, but without the negative level or Constitution drain normally incurred. The GM may substitute reincarnation instead.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Campaign Setting: The First World, Realm of the Fey',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 328. Plant-Imbued Creature (CR varies)
  {
    id: 'plant-imbued-creature',
    name: 'Plant-Imbued Creature',
    description:
      'An acquired template that can be added to any animal or magical beast. The creature\'s type changes to plant as it is suffused with vegetal energy. Its Hit Dice become d8s (minimum 2 HD) and its natural armor improves by +4. It gains fast healing 5, darkvision 60 feet (or an additional 30 feet if it already had darkvision), spell resistance equal to CR +11 (maximum 25), and the Sylvan language. CR adjustment: +3 for creatures with 8 or fewer HD; +2 for creatures with 9 or more HD. Intelligence, Wisdom, and Charisma scores may shift as noted.',
    crAdjustment: 0,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'creature_type', allowed: ['animal', 'magical beast'] },
    ],
    typeChange: 'plant',
    naturalArmorChange: 4,
    abilityScoreChanges: [
      { ability: 'WIS', change: 3, condition: 'average increase of 1d6; creatures with Charisma 10 or lower add 2d6 instead' },
    ],
    abilityScoreChangeNote: 'Intelligence is replaced by a new score (roll 3d6). Wisdom increases by 1d6 (or 2d6 if Charisma is below 10). Charisma 11-14 adds +1d4; Charisma 14+ is unchanged.',
    damageReduction: {
      scalingType: 'hd_tiered',
      tiers: [
        { minHD: 1, maxHD: 5, value: 5, bypassedBy: 'magic' },
        { minHD: 6, maxHD: 10, value: 10, bypassedBy: 'magic' },
        { minHD: 11, maxHD: 15, value: 15, bypassedBy: 'magic' },
        { minHD: 16, value: 15, bypassedBy: 'magic and cold iron' },
      ],
    },
    fastHealing: '5',
    srFormula: 'CR + 11 (maximum 25)',
    spellLikeAbilities: [
      { spellName: 'freedom of movement', frequency: 'at_will', casterLevelFormula: 'equal to HD' },
      { spellName: 'entangle', frequency: '3/day', casterLevelFormula: 'equal to HD', dcAbility: 'WIS' },
      { spellName: 'magic fang', frequency: '3/day', casterLevelFormula: 'equal to HD' },
      { spellName: 'sunburst', frequency: '1/day', casterLevelFormula: 'equal to HD', dcAbility: 'WIS' },
      { spellName: 'tree stride', frequency: '1/day', casterLevelFormula: 'equal to HD' },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'CR Adjustment by HD',
        description:
          'Creatures with 8 or fewer HD gain CR +3; creatures with 9 or more HD gain CR +2.',
      },
      {
        scalingType: 'flat',
        name: 'Acute Senses (Ex)',
        description:
          'The plant-imbued creature senses creatures within 60 feet regardless of conditions. It is immune to flanking and cannot be surprised. It can detect invisible creatures within 60 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Woodland Stride (Ex)',
        description:
          'The plant-imbued creature can move through natural undergrowth at full speed without taking damage or suffering any impairment.',
      },
      {
        scalingType: 'flat',
        name: 'Darkvision (Ex)',
        description:
          'The creature gains darkvision 60 feet if it did not already have it, or its existing darkvision range increases by 30 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Sylvan',
        description: 'If capable of speech, the creature gains Sylvan as a bonus language.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Frog God Games',
      publication: 'Tome of Horrors Complete',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 329. Plantblood (CR +1)
  {
    id: 'plantblood',
    name: 'Plantblood',
    description:
      'An inherited template applicable to any creature that is not a construct, ooze, plant, or undead. Plantbloods have had many of their internal organs replaced by vegetable matter, making them part-plant hybrids. They gain low-light vision, a +1 natural armor bonus, and a 50% chance to negate precision damage. They suffer a -2 penalty to Dexterity (minimum 0) but gain +4 Constitution. Plantbloods count as both plant and their original creature type for spells and effects, and can use plant-specific magic items. They do not need food if they spend 4 or more hours in direct sunlight daily, and gain a +5 racial bonus on Stealth checks in forests. Variants include Hive Mind (1-mile telepathic communication with other plantbloods, immune to flanking) and Implant (carries a seed that grows into a new plantblood over 30 days).',
    crAdjustment: 1,
    acquisitionType: 'inherited',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'creature_type_excluded', excluded: ['construct', 'ooze', 'plant', 'undead'] },
    ],
    naturalArmorChange: 1,
    abilityScoreChanges: [
      { ability: 'DEX', change: -2, minimum: 0 },
      { ability: 'CON', change: 4 },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Low-Light Vision (Ex)',
        description: 'The plantblood gains low-light vision if it did not already possess it.',
      },
      {
        scalingType: 'flat',
        name: 'Plantblood (Ex)',
        description:
          'The creature counts as both a plant and its original creature type for any effect related to type. It can use magic items that are restricted to plants.',
      },
      {
        scalingType: 'flat',
        name: 'Damage Reduction from Precision (Ex)',
        description:
          'Because many of its internal organs are replaced by vegetable matter, precision damage (such as from sneak attacks) has a 50% chance of failing to affect the plantblood.',
      },
      {
        scalingType: 'flat',
        name: 'Plant Resistance (Ex)',
        description:
          'The plantblood gains a +4 bonus on saving throws against poison, sleep, paralysis, stunning, polymorphing, and mind-affecting effects.',
      },
      {
        scalingType: 'flat',
        name: 'Plant Feeding (Ex)',
        description:
          'The plantblood does not need to eat food as long as it spends at least 4 hours per day in direct sunlight.',
      },
      {
        scalingType: 'flat',
        name: 'Forest Stealth (Ex)',
        description:
          'The plantblood gains a +5 racial bonus on Stealth checks while in forested terrain.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Green Ronin Publishing',
      publication: 'Advanced Bestiary',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 330. Pod-Spawned Creature (CR +0, -1, or -2)
  {
    id: 'pod-spawned-creature',
    name: 'Pod-Spawned Creature',
    description:
      'An acquired template applied to a duplicate created by a bodythief plant. The pod-spawned creature is physically identical to its original and retains all memories, but cannot exhibit sincere emotion and is incapable of reproduction. It remains the same apparent age as the original. CR is unchanged for creatures with no class levels or only NPC class levels; -1 for creatures with PC class levels; an additional -1 if the creature possessed significant spellcasting, spell-like abilities, or supernatural abilities (which are all lost). The creature\'s type changes to plant and its alignment becomes lawful evil. It gains low-light vision and plant traits but loses all spellcasting and all spell-like and supernatural abilities. All feats are retained even if their prerequisites are no longer met. Charisma is reduced by -4. A DC 20 Sense Motive check reveals the lack of genuine emotion; creatures familiar with the original gain a +5 circumstance bonus on this check.',
    crAdjustment: 0,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    typeChange: 'plant',
    abilityScoreChanges: [
      { ability: 'CHA', change: -4 },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Mimic (Ex)',
        description:
          'The pod-spawned creature retains all of the original\'s knowledge and can impersonate the original perfectly except for an inability to display sincere emotion. A successful DC 20 Sense Motive check detects this lack of genuine emotion. Creatures familiar with the original gain a +5 circumstance bonus on this check. Physical imperfections require Perception checks against the spawning bodythief\'s Disguise check DC.',
      },
      {
        scalingType: 'flat',
        name: 'Low-Light Vision (Ex)',
        description: 'The pod-spawned creature gains low-light vision.',
      },
      {
        scalingType: 'flat',
        name: 'Plant Traits (Ex)',
        description: 'The pod-spawned creature gains all standard plant traits.',
      },
      {
        scalingType: 'flat',
        name: 'Ability Loss',
        description:
          'The pod-spawned creature loses all spellcasting ability and all spell-like and supernatural abilities possessed by the base creature.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Roleplaying Game Bestiary 4',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 331. Poison Dragon Creature (CR +2)
  {
    id: 'poison-dragon-creature',
    name: 'Poison Dragon Creature',
    description:
      'An acquired template applicable to true dragons. Oni from the far east go to great lengths to steal and corrupt a dragon egg, tainting the dragon within with the oni\'s vile essence. These corrupted dragons mature faster, exhibit increased aggression, and possess poisonous blood that causes constant pain. Their alignment becomes chaotic evil. Young adults and older lose wing-based flight. They reach age categories in half the normal time but die within 50 years of reaching the great wyrm stage. Their bite delivers contaminated blood as a poison, and creatures within 10 feet who are struck by slashing or piercing damage when the dragon is hit must save against the contaminated blood poison. Their breath weapon deals half its normal damage type and half unresistible corruption damage. Items stolen from the hoard become cursed. Adults and older can poison 10 cubic feet of water per day. They gain immunity to poison and their Strength and Constitution each increase by +4.',
    crAdjustment: 2,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'creature_type', allowed: ['dragon'] },
      { type: 'special', description: 'Must be a true dragon' },
    ],
    abilityScoreChanges: [
      { ability: 'STR', change: 4 },
      { ability: 'CON', change: 4 },
    ],
    immunities: ['poison'],
    spellLikeAbilities: [
      { spellName: 'putrefy food and drink', frequency: 'at_will', casterLevelFormula: 'equal to age category level', condition: 'young age category' },
      { spellName: 'horrid wilting', frequency: '1/day', casterLevelFormula: 'equal to age category level', condition: 'great wyrm age category' },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Accelerated Aging (Ex)',
        description:
          'The poison dragon reaches each age category in half the normal time. It dies within 50 years of reaching the great wyrm stage.',
      },
      {
        scalingType: 'flat',
        name: 'Contaminated Blood (Ex)',
        description:
          'When the poison dragon takes slashing or piercing damage, creatures within 10 feet are exposed to the contaminated blood poison and must succeed on a Fortitude save or take poison damage.',
      },
      {
        scalingType: 'flat',
        name: 'Corrupt Breath (Su)',
        description:
          'The poison dragon\'s breath weapon deals half its damage as the normal damage type and half as unresistible corruption damage that bypasses all immunities and resistances.',
      },
      {
        scalingType: 'flat',
        name: 'Cursed Hoard (Su)',
        description:
          'Items stolen from the poison dragon\'s hoard become cursed.',
      },
      {
        scalingType: 'flat',
        name: 'Poison (Ex)',
        description:
          'The poison dragon\'s bite delivers contaminated blood as an injury poison.',
      },
      {
        scalingType: 'flat',
        name: 'Taint Water (Su)',
        description:
          'An adult or older poison dragon can poison up to 10 cubic feet of water per day as a standard action.',
      },
      {
        scalingType: 'flat',
        name: 'Toxic Breath (Su)',
        description:
          'The poison dragon possesses an alternative breath weapon that deals Constitution damage instead of the normal damage type.',
      },
      {
        scalingType: 'flat',
        name: 'No Wing Flight',
        description:
          'Young adult and older poison dragons lose wing-based flight.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Rite Publishing',
      publication: 'Pathways Bestiary',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 332. Poisonous Creature (CR +1)
  {
    id: 'poisonous-creature',
    name: 'Poisonous Creature',
    description:
      'An acquired template from Advanced Bestiary (Green Ronin) applicable to any living, corporeal creature. Poisonous creatures are surrounded by an invisible toxin cloud and their entire body exudes toxic substances. The creature must be evil in alignment and its Constitution increases by +4. It gains complete immunity to poison. It can detect poison and detect anti-poison agents within 30 feet as supernatural abilities. A 10-foot radius poisonous cloud (inhaled poison, 1d3 Str plus sickened for 1 hour, 1/round for 6 rounds, 2 saves to cure) constantly surrounds it. Its flesh is toxic on contact or ingestion (1d2 Dex and nauseated). Its natural weapons and unarmed strikes deliver venom (injury, 1d2 Con/round for 4 rounds, 1 save to cure). Every 1d4 rounds it can exhale a 60-foot cone of contact poison (1d4 Int, 1d4 Wis damage and confusion). It can apply venom to weapons or objects as a swift action. Healing DCs against its poisons increase by 5, and two consecutive successful saves or cure spell castings are required to end its poisons.',
    crAdjustment: 1,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'alignment', allowed: ['lawful evil', 'neutral evil', 'chaotic evil'] },
      { type: 'special', description: 'Must be a living, corporeal creature' },
    ],
    abilityScoreChanges: [
      { ability: 'CON', change: 4 },
    ],
    immunities: ['poison'],
    features: [
      {
        scalingType: 'flat',
        name: 'Detect Anti-Poison (Su)',
        description:
          'The poisonous creature can detect neutralizing agents and poison-resistant creatures within 30 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Detect Poison (Su)',
        description:
          'The poisonous creature can detect poison within 30 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Poisonous Cloud (Ex)',
        description:
          'The creature generates a 10-foot radius cloud of inhaled poison. Creatures in the area take 1d3 Str damage and become sickened for 1 hour (1/round for 6 rounds; 2 saves to cure).',
      },
      {
        scalingType: 'flat',
        name: 'Toxic Flesh (Ex)',
        description:
          'Any creature that touches or consumes the poisonous creature is exposed to a contact/ingested poison dealing 1d2 Dex damage and causing the nauseated condition.',
      },
      {
        scalingType: 'flat',
        name: 'Venom (Ex)',
        description:
          'The creature\'s natural weapons and unarmed strikes deliver an injury poison that deals 1d2 Constitution damage per round for 4 rounds (1 save to cure).',
      },
      {
        scalingType: 'flat',
        name: 'Poisonous Breath (Ex)',
        description:
          'Once every 1d4 rounds, the creature can exhale a 60-foot cone of contact poison dealing 1d4 Intelligence damage, 1d4 Wisdom damage, and causing the confused condition.',
      },
      {
        scalingType: 'flat',
        name: 'Poison Item (Ex)',
        description:
          'As a swift action, the poisonous creature can apply its venom to a weapon or object.',
      },
      {
        scalingType: 'flat',
        name: 'Virulent Poisons (Ex)',
        description:
          'The Heal skill DC to treat the creature\'s poisons increases by 5. Neutralizing the poisons requires two consecutive successful saves or two consecutive castings of a cure spell.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Green Ronin Publishing',
      publication: 'Advanced Bestiary',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 333. Positive-Energy Charged Creature (CR +2)
  {
    id: 'positive-energy-charged-creature',
    name: 'Positive-Energy Charged Creature',
    description:
      'An acquired template applicable to any undead creature. The undead becomes saturated with rampant positive energy, making it mindless and dangerous. It loses all Intelligence score, gains Wisdom -8 (minimum 0) and Charisma +4. It becomes immune to negative energy and cannot be healed by negative energy effects. It gains blindsight 60 feet based on supernatural awareness, unaffected by silence or blindness. It gains fast healing 5 and loses all positive energy-related weaknesses. It emits a 5-foot aura of bright positive energy that deals 1d6 positive energy damage to all undead and heals 1d6 to all living creatures. Its energy drain attacks convert to deal positive energy damage instead. When temporary hit points cause its total to exceed its maximum HP, it explodes dealing 1d6 damage plus 1d6 per 10 temporary hit points above the threshold. Undead it destroys of equal or lesser HD transform into additional positive-energy charged creatures. It loses spellcasting, speech, telepathy, and all feats except bonus feats.',
    crAdjustment: 2,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'creature_type', allowed: ['undead'] },
    ],
    abilityScoreChanges: [
      { ability: 'WIS', change: -8, minimum: 0 },
      { ability: 'CHA', change: 4 },
    ],
    immunities: ['negative energy'],
    fastHealing: '5',
    features: [
      {
        scalingType: 'flat',
        name: 'Blindsight (Su)',
        description:
          'The positive-energy charged creature gains blindsight 60 feet through supernatural awareness. This sense is unaffected by silence or being blinded.',
      },
      {
        scalingType: 'flat',
        name: 'Resistance to Control (Ex)',
        description:
          'The creature makes two saving throws against command or domination effects and takes the higher result. It gains Will saves against effects that would normally allow no save.',
      },
      {
        scalingType: 'flat',
        name: 'Positive Energy Aura (Su)',
        description:
          'The creature emits a 5-foot radius aura of bright positive energy. This aura deals 1d6 positive energy damage to all undead within it and heals 1d6 damage to all living creatures within it.',
      },
      {
        scalingType: 'flat',
        name: 'Energy Infusion (Su)',
        description:
          'The creature\'s energy drain attacks deal positive energy damage instead of their normal effect.',
      },
      {
        scalingType: 'flat',
        name: 'Overcharge (Su)',
        description:
          'When temporary hit points cause the creature\'s total hit points to exceed its maximum, it explodes in a burst of positive energy. The explosion deals 1d6 damage plus an additional 1d6 per 10 temporary hit points above the maximum.',
      },
      {
        scalingType: 'flat',
        name: 'Transform Undead (Su)',
        description:
          'When the positive-energy charged creature destroys an undead creature of equal or lesser HD, that destroyed creature rises as a positive-energy charged creature.',
      },
      {
        scalingType: 'flat',
        name: 'Mindless',
        description:
          'The creature has no Intelligence score and becomes mindless. It loses spellcasting ability, the ability to speak or use telepathy, and all feats except bonus feats.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Green Ronin Publishing',
      publication: 'Advanced Bestiary',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 334. Presence (CR +2)
  {
    id: 'presence',
    name: 'Presence',
    description:
      'An acquired or inherited template for outsiders, representing an incorporeal manifestation that guides mortals from a distance. Presences are commonly employed by the Imperatives on ideologically hostile worlds. The creature gains the incorporeal subtype, retains the extraplanar subtype, and has no Strength score. It gains a fly speed equal to its land speed (minimum 30 feet) with perfect maneuverability. Ability scores change: Dexterity +4, Constitution +4, Intelligence +2, Wisdom +2, Charisma +4. It is immune to dazing, disease, exhaustion, fatigue, paralysis, poison, sleep, stunning, nonlethal damage, and any effect requiring a corporeal form. Its deflection bonus to AC equals its Charisma modifier (Fortified Essence). It dissipates when hit points drop to a negative amount equal to its Constitution score. Weakness: weapons of the opposite alignment to the presence function as ghost touch weapons (Body of Convictions). Its Planar Touch incorporeal touch deals 1d6 damage plus 1d6 per 3 Hit Dice (increasing to d10 dice against creatures of an opposing alignment). Phantom Armaments allows it to imbue held weapons, armor, and shields with the ghost touch property, and it uses its Charisma score in place of Strength.',
    crAdjustment: 2,
    acquisitionType: 'either',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'creature_type', allowed: ['outsider'] },
    ],
    subtypeGains: ['incorporeal'],
    abilityScoreChanges: [
      { ability: 'DEX', change: 4 },
      { ability: 'CON', change: 4 },
      { ability: 'INT', change: 2 },
      { ability: 'WIS', change: 2 },
      { ability: 'CHA', change: 4 },
    ],
    immunities: ['dazing', 'disease', 'exhaustion', 'fatigue', 'paralysis', 'poison', 'sleep', 'stunning', 'nonlethal damage', 'effects requiring corporeal form'],
    features: [
      {
        scalingType: 'flat',
        name: 'Incorporeal (Ex)',
        description:
          'The presence is incorporeal and has no Strength score. It gains a fly speed equal to its land speed (minimum 30 feet) with perfect maneuverability.',
      },
      {
        scalingType: 'flat',
        name: 'Fortified Essence (Ex)',
        description:
          'The presence gains a deflection bonus to AC equal to its Charisma modifier.',
      },
      {
        scalingType: 'flat',
        name: 'Body of Convictions (Ex)',
        description:
          'Weapons aligned to the opposite alignment of the presence function as ghost touch weapons against it.',
      },
      {
        scalingType: 'flat',
        name: 'Planar Touch (Su)',
        description:
          'The presence\'s incorporeal touch attack deals 1d6 damage plus 1d6 per 3 Hit Dice. Against creatures of an opposing alignment, the dice increase to d10s.',
      },
      {
        scalingType: 'flat',
        name: 'Phantom Armaments (Su)',
        description:
          'The presence can imbue wielded weapons, armor, and shields with the ghost touch property. It uses its Charisma score in place of its Strength score.',
      },
      {
        scalingType: 'flat',
        name: 'Dissipation',
        description:
          'The presence dissipates (is destroyed) when its hit points drop to a negative amount equal to its Constitution score.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Legendary Games',
      publication: 'Arcforge Universe Cyclopedia',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 335. Prideful Creature (CR +2)
  {
    id: 'prideful-creature',
    name: 'Prideful Creature',
    description:
      'An acquired template from Pathways Bestiary (Rite Publishing) for creatures with Intelligence 4 or higher. Prideful creatures are magnificent but flawed beings consumed by arrogance. Their alignment shifts to any evil. Ability score changes: Strength +4, Dexterity +4, Constitution +4, Intelligence +4, Wisdom -10, Charisma +4. They have regeneration equal to their Constitution modifier, damage reduction 5/special (10/special at CR 10+; 15/special at CR 15+), and immunity to charm, compulsion, entangled, grappled, helpless, paralyzed, petrified, and pinned conditions. One chosen damage type (acid, cold, fire, etc.) ignores all immunities and resistances, suspends regeneration for 1 round, and deals 50% additional damage. They gain Affronted Dignity (barbarian rage triggered when weakness is mentioned), Aura of Prostration (30-foot Will save or cowering 1d4 rounds), Cat and Mouse (combat maneuvers without AoO, +half CR to CMB), Protective Conviction (Charisma modifier as profane bonus to AC and Fortitude/Reflex saves), Smite the Envious (1/day Charisma to attack, CR to damage), and +8 racial bonuses on Bluff and Perform. At CR 15+ they cast mass charm monster 1/day with charmed creatures treating them as a god (Cult of Personality).',
    crAdjustment: 2,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'special', description: 'Must have an Intelligence score of 4 or higher' },
    ],
    abilityScoreChanges: [
      { ability: 'STR', change: 4 },
      { ability: 'DEX', change: 4 },
      { ability: 'CON', change: 4 },
      { ability: 'INT', change: 4 },
      { ability: 'WIS', change: -10 },
      { ability: 'CHA', change: 4 },
    ],
    regeneration: 'Constitution modifier (bypassed by chosen vulnerability damage type)',
    damageReduction: {
      scalingType: 'hd_tiered',
      tiers: [
        { minHD: 1, maxHD: 9, value: 5, bypassedBy: 'chosen vulnerability damage type' },
        { minHD: 10, maxHD: 14, value: 10, bypassedBy: 'chosen vulnerability damage type' },
        { minHD: 15, value: 15, bypassedBy: 'chosen vulnerability damage type' },
      ],
    },
    immunities: ['charm effects', 'compulsion effects', 'entangled condition', 'grappled condition', 'helpless condition', 'paralyzed condition', 'petrified condition', 'pinned condition'],
    features: [
      {
        scalingType: 'flat',
        name: 'Chosen Vulnerability (Ex)',
        description:
          'One specific damage type (acid, cold, fire, etc.) chosen at template application ignores all immunities and resistances, suspends regeneration for 1 round, and deals 50% additional damage to the prideful creature.',
      },
      {
        scalingType: 'flat',
        name: 'Affronted Dignity (Ex)',
        description:
          'Whenever the prideful creature\'s vulnerability is mentioned or exposed in combat, it enters a barbarian rage with effective class level equal to its CR.',
      },
      {
        scalingType: 'flat',
        name: 'Aura of Prostration (Su)',
        description:
          'Creatures within 30 feet must succeed on a Will save or gain the cowering condition for 1d4 rounds. The DC is Charisma-based.',
      },
      {
        scalingType: 'flat',
        name: 'Cat and Mouse (Ex)',
        description:
          'The prideful creature can perform combat maneuvers without provoking attacks of opportunity and gains a bonus on combat maneuver checks equal to half its CR.',
      },
      {
        scalingType: 'flat',
        name: 'Protective Conviction (Su)',
        description:
          'The prideful creature adds its Charisma modifier as a profane bonus to its AC and to its Fortitude and Reflex saving throws.',
      },
      {
        scalingType: 'flat',
        name: 'Smite the Envious (Su)',
        description:
          'Once per day as a swift action, the prideful creature adds its Charisma bonus on attack rolls and its CR on damage rolls against any creature that attacked it.',
      },
      {
        scalingType: 'hd_threshold',
        name: 'Cult of Personality (Sp)',
        description:
          'Prideful creatures of CR 15 or higher can cast mass charm monster once per day. Creatures charmed in this way regard the prideful creature as their deity.',
        minimumHD: 15,
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Rite Publishing',
      publication: 'Pathways Bestiary',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 336. Primitive (CR +1)
  {
    id: 'primitive',
    name: 'Primitive',
    description:
      'An inherited template from Advanced Bestiary (Green Ronin) applicable to any living, corporeal creature. Primitives are evolutionary throwbacks or devolved creatures with heavily muscled, thick-skinned bodies but reduced intelligence compared to their evolved counterparts. They gain low-light vision and the scent special ability, a +2 natural armor bonus, Strength +4, Constitution +4, Intelligence -4 (minimum 1), and Charisma -2 (minimum 1). If the creature lacks natural attacks it gains a primary slam attack; slam damage increases by one size category. The primitive loses all previous skill ranks and recalculates using racial Hit Dice only, treating Climb, Perception, Stealth, and Survival as class skills with a +4 racial bonus on Stealth and Survival. Class-level skill points are retained. It gains Alertness, Great Fortitude, and Toughness as bonus feats.',
    crAdjustment: 1,
    acquisitionType: 'inherited',
    isSimpleTemplate: false,
    naturalArmorChange: 2,
    abilityScoreChanges: [
      { ability: 'STR', change: 4 },
      { ability: 'CON', change: 4 },
      { ability: 'INT', change: -4, minimum: 1 },
      { ability: 'CHA', change: -2, minimum: 1 },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Low-Light Vision (Ex)',
        description: 'The primitive gains low-light vision if it did not already possess it.',
      },
      {
        scalingType: 'flat',
        name: 'Scent (Ex)',
        description: 'The primitive gains the scent special ability.',
      },
      {
        scalingType: 'flat',
        name: 'Natural Attacks',
        description:
          'If the primitive lacks natural attacks it gains a primary slam attack. The slam damage is increased by one size category from the normal value for a creature of that size.',
      },
      {
        scalingType: 'flat',
        name: 'Bonus Feats',
        description: 'The primitive gains Alertness, Great Fortitude, and Toughness as bonus feats.',
      },
      {
        scalingType: 'flat',
        name: 'Revised Skills',
        description:
          'The primitive loses all previous skill ranks and recalculates using racial Hit Dice only, with Climb, Perception, Stealth, and Survival as class skills. It gains a +4 racial bonus on Stealth and Survival checks. Racial bonuses and class-level skill points are retained.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Green Ronin Publishing',
      publication: 'Advanced Bestiary',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 337. Prismatic Creature (CR varies)
  {
    id: 'prismatic-creature',
    name: 'Prismatic Creature',
    description:
      'An acquired template from Advanced Bestiary (Green Ronin) applicable to any creature with a Charisma score of 3 or higher. Prismatic creatures constantly emit shifting rainbow light and have bodies suffused with prismatic energy. CR is unchanged for creatures with 8 or fewer racial HD; +1 for creatures with 9 or more racial HD. Charisma increases by +4 and the creature gains low-light vision. Its body emits light equivalent to a candle in a 5-foot radius; the color shifts randomly each round, but can be suppressed or controlled with a DC 15 Concentration check as a free action. Each round the creature is immune to one energy or effect type based on its current color (red: fire; orange: acid; yellow: electricity; green: poison; blue: mind-affecting; indigo: cold; violet: sonic). It gains spell-like abilities scaling with Hit Dice, from dancing lights and flare (1-2 HD) through prismatic sphere (20+ HD). It is immune to light-descriptor spells and to blinding, dazzling, and dazing from light exposure. It suffers a -8 penalty on Stealth checks while illuminated and loses concealment from natural coloration.',
    crAdjustment: 0,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'special', description: 'Must have a Charisma score of 3 or higher' },
    ],
    abilityScoreChanges: [
      { ability: 'CHA', change: 4 },
    ],
    immunities: ['light-descriptor spells', 'blinding from light exposure', 'dazzling from light exposure', 'dazing from light exposure'],
    spellLikeAbilities: [
      { spellName: 'dancing lights', frequency: 'at_will', casterLevelFormula: 'equal to HD', condition: '1-2 HD' },
      { spellName: 'flare', frequency: 'at_will', casterLevelFormula: 'equal to HD', condition: '1-2 HD' },
      { spellName: 'color spray', frequency: '3/day', casterLevelFormula: 'equal to HD', condition: '3-4 HD' },
      { spellName: 'hypnotic pattern', frequency: '3/day', casterLevelFormula: 'equal to HD', condition: '5-8 HD' },
      { spellName: 'daylight', frequency: '3/day', casterLevelFormula: 'equal to HD', condition: '9-12 HD' },
      { spellName: 'searing light', frequency: '3/day', casterLevelFormula: 'equal to HD', condition: '9-12 HD' },
      { spellName: 'rainbow pattern', frequency: '3/day', casterLevelFormula: 'equal to HD', condition: '13-16 HD' },
      { spellName: 'prismatic spray', frequency: '3/day', casterLevelFormula: 'equal to HD', condition: '17-19 HD' },
      { spellName: 'prismatic sphere', frequency: '1/day', casterLevelFormula: 'equal to HD', condition: '20+ HD' },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Low-Light Vision (Ex)',
        description: 'The prismatic creature gains low-light vision if it did not already possess it.',
      },
      {
        scalingType: 'flat',
        name: 'Prismatic Body (Su)',
        description:
          'The prismatic creature emits light equivalent to a candle in a 5-foot radius. The light color shifts randomly each round but can be suppressed or controlled with a DC 15 Concentration check as a free action.',
      },
      {
        scalingType: 'flat',
        name: 'Prismatic Immunities (Ex)',
        description:
          'Each round the prismatic creature is immune to one effect based on its current light color: red grants fire immunity, orange grants acid immunity, yellow grants electricity immunity, green grants poison immunity, blue grants immunity to mind-affecting effects, indigo grants cold immunity, violet grants sonic immunity.',
      },
      {
        scalingType: 'flat',
        name: 'Stealth Penalty',
        description:
          'While illuminated, the prismatic creature suffers a -8 penalty on Stealth checks and loses any concealment bonus from natural coloration.',
      },
      {
        scalingType: 'hd_threshold',
        name: 'CR Increase at 9+ HD',
        description: 'Prismatic creatures with 9 or more racial Hit Dice gain CR +1.',
        minimumHD: 9,
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Green Ronin Publishing',
      publication: 'Advanced Bestiary',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 338. Prophecy-Addled Creature (CR +1)
  {
    id: 'prophecy-addled-creature',
    name: 'Prophecy-Addled Creature',
    description:
      'A template for creatures steeped in prophetic lore who develop muddled perception, unable to distinguish mystical insights from reality. The creature gains a +2 insight bonus to AC and a +2 insight bonus on Fortitude and Reflex saves, but suffers a -4 penalty on saving throws against confusion effects. Three times per day as an immediate action, the creature can reroll one d20 roll before the results are revealed, taking the new result regardless of outcome (Prophetic Insight, Su). If the creature already has a reroll ability such as flash of brutality or flash of insight, it instead gains two additional daily uses of that ability.',
    crAdjustment: 1,
    acquisitionType: 'either',
    isSimpleTemplate: false,
    features: [
      {
        scalingType: 'flat',
        name: 'Insight Bonus to AC (Su)',
        description:
          'The prophecy-addled creature gains a +2 insight bonus to Armor Class.',
      },
      {
        scalingType: 'flat',
        name: 'Insight Bonus to Saves (Su)',
        description:
          'The prophecy-addled creature gains a +2 insight bonus on Fortitude and Reflex saving throws.',
      },
      {
        scalingType: 'flat',
        name: 'Confusion Vulnerability (Ex)',
        description:
          'The prophecy-addled creature suffers a -4 penalty on saving throws against confusion effects.',
      },
      {
        scalingType: 'flat',
        name: 'Prophetic Insight (Su)',
        description:
          'Three times per day as an immediate action, the creature can reroll one d20 roll before the results are revealed, taking the new result regardless of outcome. If the creature already possesses a reroll ability such as flash of brutality or flash of insight, it instead gains two additional daily uses of that existing ability.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Adventure Path #125: Tower of the Drowned Dead',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 339. Protean Attractor Creature (CR Special)
  {
    id: 'protean-attractor-creature',
    name: 'Protean Attractor Creature',
    description:
      'An acquired template for any non-outsider creature, representing a chaotic protean trapped within the creature\'s dimensional structure. The CR adjustment and gained abilities depend on the type of protean trapped: Voidworm (+1 CR), Imentesh (+2 CR), Naunet (+2 CR), or Keketar (+3 CR). Alignment becomes chaotic neutral and the creature radiates a chaos aura as a chaotic outsider. It gains continuous freedom of movement (CL equal to HD), blindsense 30 feet, amorphous anatomy (50% chance to ignore extra damage from critical hits and precision damage), and immunity to polymorph effects unless the protean is willing. All variants gain DR 5/lawful (10/lawful at CR 10+; 15/epic at CR 15+), electricity resistance 10, sonic resistance 10, acid immunity, and spell resistance 10 + CR. All gain a bite and tail attack with grab and constrict. Specific spell-like abilities, fast healing, and special attacks depend on the trapped protean type. Template effects are suppressed by antimagic field; dismissal/dispel chaos temporarily removes them; banishment may permanently remove the template on a failed Will save.',
    crAdjustment: 0,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'creature_type_excluded', excluded: ['outsider'] },
    ],
    resistances: [
      { energyType: 'electricity', value: 10 },
      { energyType: 'sonic', value: 10 },
      { energyType: 'acid', value: 'immunity' },
    ],
    immunities: ['acid', 'polymorph (unless protean is willing)'],
    damageReduction: {
      scalingType: 'hd_tiered',
      tiers: [
        { minHD: 1, maxHD: 9, value: 5, bypassedBy: 'lawful' },
        { minHD: 10, maxHD: 14, value: 10, bypassedBy: 'lawful' },
        { minHD: 15, value: 15, bypassedBy: 'epic' },
      ],
    },
    srFormula: '10 + CR',
    features: [
      {
        scalingType: 'flat',
        name: 'CR Adjustment by Protean Type',
        description:
          'The CR increase depends on the trapped protean: Voidworm +1, Imentesh +2, Naunet +2, Keketar +3.',
      },
      {
        scalingType: 'flat',
        name: 'Chaotic Nature (Ex)',
        description:
          'The creature\'s alignment becomes chaotic neutral and it radiates a chaos aura as if a chaotic outsider.',
      },
      {
        scalingType: 'flat',
        name: 'Freedom of Movement (Su)',
        description:
          'The creature benefits from a continuous freedom of movement effect with caster level equal to its Hit Dice.',
      },
      {
        scalingType: 'flat',
        name: 'Blindsense (Ex)',
        description: 'The creature gains blindsense 30 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Amorphous Anatomy (Ex)',
        description:
          'The creature has a 50% chance to ignore additional damage from critical hits and precision damage.',
      },
      {
        scalingType: 'flat',
        name: 'Imentesh Features (Su)',
        description:
          'If the trapped protean is an imentesh, the creature gains fast healing equal to Con modifier (minimum 1), can inflict warpwave (standard action, 100-ft. range), and gains imentesh spell-like abilities (CL 10th): detect law and tongues (constant); dimension door, make whole, major creation, shatter, shrink item (at will); chaos hammer, dispel magic, slow (3/day); break enchantment, dispel law, haste, polymorph any object (1/day).',
      },
      {
        scalingType: 'flat',
        name: 'Keketar Features (Su)',
        description:
          'If the trapped protean is a keketar, the creature gains fast healing equal to Con bonus (minimum 1), can use reshape reality (as heightened mirage arcana with quasi-real effects), spatial riptide (non-proteans teleporting into or out of 30-ft. aura must make a Fortitude save), and warpwave on natural attacks (excluding tail). Keketar spell-like abilities (CL 17th): detect law and tongues (constant); chaos hammer, greater dispel magic, greater teleport, major creation, move earth, shatter (at will); quickened confusion, dispel law, empowered chaos hammer, polymorph any object (3/day); disintegrate, prismatic spray, prismatic sphere, reshape reality (1/day).',
      },
      {
        scalingType: 'flat',
        name: 'Naunet Features (Su)',
        description:
          'If the trapped protean is a naunet, the creature gains adaptive strikes (natural weapons count as magical and chaotic; can shift to overcome adamantine, silver, or cold iron DR), coalesce chaos (three or more naunets create solid fog; six or more create acid fog), confusion on tentacle attacks (Will DC 10 + 1/2 HD + Con mod), and 2 tentacle attacks. Naunet spell-like abilities (CL 7th): detect law (constant); acid arrow, fog cloud, dimension door, shatter (at will); chaos hammer (1/day).',
      },
      {
        scalingType: 'flat',
        name: 'Voidworm Features (Su)',
        description:
          'If the trapped protean is a voidworm, the creature gains fast healing equal to Con modifier, confusion on tentacle attacks (Will DC 10 + 1/2 HD + Con mod), and voidworm spell-like abilities (CL 6th): detect law (constant); dancing lights, ghost sound, prestidigitation (at will); blur, obscuring mist (3/day); commune (1/week, CL 12th, 6 questions).',
      },
      {
        scalingType: 'flat',
        name: 'Banishment Vulnerability',
        description:
          'Dismissal or dispel chaos suppresses all template modifications for a number of rounds equal to the caster level. Banishment forces a Will save; on a failure the template is permanently removed. Antimagic field suppresses all template effects while the creature is within it.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Rite Publishing',
      publication: 'Pathways Bestiary',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 340. Psionic Forsaken Lich (CR +2)
  {
    id: 'psionic-forsaken-lich',
    name: 'Psionic Forsaken Lich',
    description:
      'An acquired template for evil creatures capable of creating a soul cage, transforming them into undead entities saturated with uncontrolled psionic energy. The creature\'s type changes to undead (do not recalculate BAB, saves, or skill ranks). Alignment is any evil. It gains +3 natural armor (or retains base creature\'s bonus if superior), all racial HD become d8s, Charisma modifier replaces Constitution modifier for bonus HP, channel resistance +4, DR 15/bludgeoning and magic, power resistance 25, immunity to cold and electricity (plus standard undead immunities), darkvision 60 feet, Strength +6, and Charisma +6. Failed psionic powers targeting it redirect via reddopsi mechanics; it is always treated as having 15 power points remaining. A shadowy double grants the forsaken lich concealment (20% miss chance). Its touch attack deals 1d8 + (1 per 2 HD) and has 5-foot extended reach; it can also heal undead allies. Its soul lash (240-foot line, 1d6 per 2 HD, maximum 20d6) causes paralysis for 1d10 rounds on a failed save; the lich takes 1d6 x 1/4 HD damage if the lash is not discharged weekly. A 100-foot phantasmagoria aura centers on its corpse and reconstitutes when dispelled.',
    crAdjustment: 2,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'alignment', allowed: ['lawful evil', 'neutral evil', 'chaotic evil'] },
      { type: 'special', description: 'Must be capable of creating a soul cage' },
    ],
    typeChange: 'undead',
    naturalArmorChange: 3,
    abilityScoreChanges: [
      { ability: 'STR', change: 6 },
      { ability: 'CHA', change: 6 },
    ],
    damageReduction: { scalingType: 'flat', value: 15, bypassedBy: 'bludgeoning and magic' },
    immunities: ['cold', 'electricity', 'undead immunities'],
    srFormula: '25 (power resistance)',
    features: [
      {
        scalingType: 'flat',
        name: 'Channel Resistance (Ex)',
        description: 'The psionic forsaken lich gains channel resistance +4.',
      },
      {
        scalingType: 'flat',
        name: 'Darkvision (Ex)',
        description: 'The psionic forsaken lich gains darkvision 60 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Power Storm (Su)',
        description:
          'Failed psionic powers targeting the forsaken lich redirect via reddopsi mechanics. The lich is always treated as having 15 power points remaining.',
      },
      {
        scalingType: 'flat',
        name: 'Soul Shield (Su)',
        description:
          'A shadowy double superimposed over the forsaken lich\'s corporeal form flits around its body, granting the creature concealment (20% miss chance).',
      },
      {
        scalingType: 'flat',
        name: 'Disembodied Strike (Su)',
        description:
          'The forsaken lich\'s touch attack deals 1d8 + 1 per 2 HD damage and has 5 feet of extended reach. This attack can also heal undead allies.',
      },
      {
        scalingType: 'flat',
        name: 'Soul Lash (Su)',
        description:
          'A 240-foot line attack dealing 1d6 per 2 HD (maximum 20d6) and causing 1d10 rounds of paralysis on a failed Reflex save. If the lash is not discharged at least once per week, the forsaken lich takes 1d6 x (1/4 HD) damage.',
      },
      {
        scalingType: 'flat',
        name: 'Delusory Aura (Su)',
        description:
          'A 100-foot phantasmagoria aura centers on the forsaken lich\'s corpse. The aura reconstitutes automatically when dispelled.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Legendary Games',
      publication: 'Arcforge Universe Cyclopedia',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 341. Psionic Lich (CR +2)
  {
    id: 'psionic-lich',
    name: 'Psionic Lich',
    description:
      'An acquired template that can be added to any living creature with psionic abilities, provided it can create the required soul cage. The creature\'s type changes to undead (do not recalculate BAB, saves, or skill ranks). It gains +5 natural armor (or retains base creature\'s bonus if superior), channel resistance +4, DR 15/bludgeoning and magic, immunity to cold and electricity (plus standard undead immunities), darkvision 60 feet, and Intelligence +2, Wisdom +2, Charisma +2. All racial HD become d8s; the Charisma modifier replaces Constitution for bonus HP. When destroyed, the soul cage immediately begins rebuilding the lich\'s body nearby over 1d10 days (Rejuvenation). Creatures under 5 HD within 60 feet must save or become frightened by the lich\'s fear aura; those with 5 or more HD become shaken for rounds equal to the lich\'s Hit Dice. For each creature affected by fear, the lich\'s manifester level increases by 1 (Power from Fear). Its draining touch drains power points equal to manifester level (Will save halves). Soul cage creation requires Craft Wondrous Item, 11th+ manifester level, and 120,000 gp.',
    crAdjustment: 2,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'special', description: 'Must have psionic abilities and be capable of creating a soul cage' },
    ],
    typeChange: 'undead',
    naturalArmorChange: 5,
    abilityScoreChanges: [
      { ability: 'INT', change: 2 },
      { ability: 'WIS', change: 2 },
      { ability: 'CHA', change: 2 },
    ],
    damageReduction: { scalingType: 'flat', value: 15, bypassedBy: 'bludgeoning and magic' },
    immunities: ['cold', 'electricity', 'undead immunities'],
    features: [
      {
        scalingType: 'flat',
        name: 'Channel Resistance (Ex)',
        description: 'The psionic lich gains channel resistance +4.',
      },
      {
        scalingType: 'flat',
        name: 'Darkvision (Ex)',
        description: 'The psionic lich gains darkvision 60 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Rejuvenation (Su)',
        description:
          'When a psionic lich is destroyed, its soul cage immediately begins to rebuild the undead psionicist\'s body nearby. This process takes 1d10 days.',
      },
      {
        scalingType: 'flat',
        name: 'Fear Aura (Su)',
        description:
          'Creatures under 5 HD within 60 feet must succeed on a Will save or become frightened. Creatures with 5 or more HD are shaken for a number of rounds equal to the lich\'s Hit Dice.',
      },
      {
        scalingType: 'flat',
        name: 'Power from Fear (Su)',
        description:
          'For each creature currently affected by the psionic lich\'s fear aura, the lich\'s manifester level increases by 1.',
      },
      {
        scalingType: 'flat',
        name: 'Draining Touch (Su)',
        description:
          'The psionic lich\'s touch attack drains power points equal to its manifester level. A successful Will save halves the amount drained.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Legendary Games',
      publication: 'Arcforge Universe Cyclopedia',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 342. Psychic Creature (CR varies)
  {
    id: 'psychic-creature',
    name: 'Psychic Creature',
    description:
      'An inherited or acquired template from Advanced Bestiary (Green Ronin) applicable to any creature with Intelligence, Wisdom, and Charisma scores of 3 or higher. Psychic creatures possess latent psionic powers manifesting as one of eight specializations: clairaudient, clairvoyant, empath, precognizant, psychometer, pyrokinetic, telekinetic, or telepath. CR adjustment varies by focus: clairaudient, clairvoyant, and empath gain no CR increase up to 10 HD (+1 at 11+ HD); precognizant and telepath gain +1; psychometer gains no increase; pyrokinetic and telekinetic gain +1 up to 10 HD (+2 at 11+ HD). All psychic creatures gain Iron Will as a bonus feat and racial skill bonuses of +5 to +10 depending on specialization. Precognizant: foresight (Su) granting +2 insight bonus to AC and Reflex, never flat-footed, +8 insight to Initiative. Pyrokinetic: conscious fire immunity while awake. Telekinetic: +4 deflection bonus to AC, supernatural flight at highest speed with perfect maneuverability. Telepath: telepathy 100 ft., +2 dodge bonus vs. detected creatures. Spell-like abilities (CL equal to HD) scale with HD and vary by specialization (e.g., precognizant: guidance at will, augury 3/day, foresight 1/day; telepath: detect thoughts at will, dream, mind blank, phantasmal killer 1/day each).',
    crAdjustment: 0,
    acquisitionType: 'either',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'special', description: 'Must have Intelligence, Wisdom, and Charisma scores of 3 or higher' },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'CR Adjustment by Focus',
        description:
          'CR increase depends on focus: Clairaudient, clairvoyant, empath — no change up to 10 HD, +1 at 11+ HD. Precognizant, telepath — +1. Psychometer — no change. Pyrokinetic, telekinetic — +1 up to 10 HD, +2 at 11+ HD.',
      },
      {
        scalingType: 'flat',
        name: 'Iron Will (Bonus Feat)',
        description: 'All psychic creatures gain Iron Will as a bonus feat.',
      },
      {
        scalingType: 'flat',
        name: 'Precognizant: Foresight (Su)',
        description:
          'Precognizant creatures gain a +2 insight bonus to AC and Reflex saves, are never flat-footed, and gain a +8 insight bonus on Initiative checks.',
      },
      {
        scalingType: 'flat',
        name: 'Pyrokinetic: Fire Immunity (Su)',
        description:
          'Pyrokinetic creatures are immune to fire while conscious and awake.',
      },
      {
        scalingType: 'flat',
        name: 'Telekinetic: Deflection and Flight (Su)',
        description:
          'Telekinetic creatures gain a +4 deflection bonus to AC and supernatural flight equal to their highest movement speed with perfect maneuverability.',
      },
      {
        scalingType: 'flat',
        name: 'Telepath: Telepathy and Prediction (Su)',
        description:
          'Telepath creatures gain telepathy 100 feet and a +2 dodge bonus to AC and saves against creatures they have telepathically detected.',
      },
      {
        scalingType: 'flat',
        name: 'Spell-Like Abilities',
        description:
          'All psychic creatures gain spell-like abilities with caster level equal to total Hit Dice. Specific abilities depend on specialization and scale with level (e.g., precognizant: guidance at will, augury 3/day, foresight 1/day; psychometer: detect alignment at will, legend lore 1/day, analyze dweomer 1/day; telepath: detect thoughts at will, dream, mind blank, phantasmal killer 1/day each).',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Green Ronin Publishing',
      publication: 'Advanced Bestiary',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 343. Psychic Vampire (CR +2 or +4)
  {
    id: 'psychic-vampire',
    name: 'Psychic Vampire',
    description:
      'An acquired template applicable to any living humanoid. Psychic vampires are humanoids who are able to tap into the life force of others, feeding on innocents in order to fuel their own latent psionic powers. CR increases by +2 for most base creatures, or +4 if the base creature possesses psionic abilities. Alignment is usually neutral evil. Charisma increases by +4. The psychic vampire gains a power point pool equal to twice its Hit Dice and can manifest ego whip, empathic connection, and empathy (manifester level equal to Hit Dice). As a standard action it can make eye contact within 60 feet to fascinate a creature (Will save DC 10 + 1/2 HD + Cha modifier) for as long as it concentrates plus 1d4 rounds (Hypnotic Gaze, Su). Its touch attack deals 1d6 Charisma damage to living creatures with Intelligence 3 or higher and a Charisma score; each successful drain grants 5 temporary power points lasting 1 hour (Psychic Feeding, Su). Creatures reduced to Charisma 0 by this ability become permanent thralls controlled by the vampire up to twice its HD; individual thralls cannot exceed its HD minus 4. Thralls can be freed by break enchantment or released by the vampire.',
    crAdjustment: 2,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'creature_type', allowed: ['humanoid'] },
    ],
    abilityScoreChanges: [
      { ability: 'CHA', change: 4 },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'CR Adjustment with Psionics',
        description:
          'If the base creature possesses psionic abilities, the CR adjustment increases to +4 instead of +2.',
      },
      {
        scalingType: 'flat',
        name: 'Psionics (Sp)',
        description:
          'The psychic vampire has a power point pool equal to twice its Hit Dice. It can manifest ego whip, empathic connection, and empathy at its manifester level (equal to HD).',
      },
      {
        scalingType: 'flat',
        name: 'Hypnotic Gaze (Su)',
        description:
          'As a standard action the psychic vampire can make eye contact with a creature within 60 feet to fascinate it (Will save DC 10 + 1/2 HD + Charisma modifier) for as long as it concentrates plus 1d4 rounds after.',
      },
      {
        scalingType: 'flat',
        name: 'Psychic Feeding (Su)',
        description:
          'The psychic vampire\'s touch attack deals 1d6 Charisma damage to living creatures with Intelligence 3 or higher and a Charisma score. Each successful drain grants 5 temporary power points lasting 1 hour. Only one feeding attempt per round is allowed.',
      },
      {
        scalingType: 'flat',
        name: 'Enthrall (Su)',
        description:
          'Creatures reduced to Charisma 0 by Psychic Feeding become permanent thralls. The psychic vampire can control thralls with total HD up to twice its own HD; individual thralls cannot exceed the vampire\'s HD minus 4. Thralls lose all personality and obey commands implicitly. The condition can be broken by break enchantment or released voluntarily by the vampire.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Necromancers of the Northwest',
      publication: 'Liber Vampyr',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 344. Psychoplasmic Creature (CR +1)
  {
    id: 'psychoplasmic-creature',
    name: 'Psychoplasmic Creature',
    description:
      'An acquired template from Pathfinder Campaign Setting: Occult Bestiary applicable to any corporeal non-undead creature. The creature\'s type changes to outsider; it retains the base creature\'s subtypes and gains the augmented subtype. Natural armor bonus increases by +2. All racial HD become d10s; class HD are unchanged. It gains fly speed 60 feet (perfect) on the Astral Plane. Dexterity +4 and Intelligence +4. Spell resistance equals CR + 5, bypassed by psychic spells. Energy resistances and DR scale by HD: 1-4 HD — resistance 5 to cold, electricity, and fire, no DR; 5-10 HD — resistance 10, DR 5/magic or adamantine; 11+ HD — resistance 15, DR 10/magic and adamantine. It gains a slam attack and the compression ability. Survival becomes a class skill with a +5 racial bonus when tracking. Its Mindlock (Su) ability activates on a successful unarmed strike or natural attack: target must succeed on a Will save or be unable to cast spells, speak, or take Intelligence-based actions for 1 to 1d4 rounds.',
    crAdjustment: 1,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'creature_type_excluded', excluded: ['undead'] },
      { type: 'special', description: 'Must be a corporeal creature' },
    ],
    typeChange: 'outsider',
    subtypeGains: ['augmented'],
    naturalArmorChange: 2,
    abilityScoreChanges: [
      { ability: 'DEX', change: 4 },
      { ability: 'INT', change: 4 },
    ],
    resistances: [
      { energyType: 'cold', value: 5 },
      { energyType: 'electricity', value: 5 },
      { energyType: 'fire', value: 5 },
    ],
    damageReduction: {
      scalingType: 'hd_tiered',
      tiers: [
        { minHD: 1, maxHD: 4, value: 0, bypassedBy: 'magic' },
        { minHD: 5, maxHD: 10, value: 5, bypassedBy: 'magic or adamantine' },
        { minHD: 11, value: 10, bypassedBy: 'magic and adamantine' },
      ],
    },
    srFormula: 'CR + 5 (bypassed by psychic spells)',
    features: [
      {
        scalingType: 'flat',
        name: 'Scaled Energy Resistance',
        description:
          'HD 1-4: resistance 5 to cold, electricity, and fire. HD 5-10: resistance 10 to cold, electricity, and fire; DR 5/magic or adamantine. HD 11+: resistance 15 to cold, electricity, and fire; DR 10/magic and adamantine.',
      },
      {
        scalingType: 'flat',
        name: 'Astral Flight (Ex)',
        description: 'The psychoplasmic creature has a fly speed of 60 feet (perfect) while on the Astral Plane.',
      },
      {
        scalingType: 'flat',
        name: 'Compression (Ex)',
        description: 'The psychoplasmic creature gains the compression ability.',
      },
      {
        scalingType: 'flat',
        name: 'Mindlock (Su)',
        description:
          'Upon successfully making an unarmed strike or natural attack, the target must succeed on a Will saving throw or be unable to cast spells, speak, or take any Intelligence-based actions for 1 to 1d4 rounds.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Campaign Setting: Occult Bestiary',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 345. Puzzle Creature Simple Template (CR +0)
  {
    id: 'puzzle-creature',
    name: 'Puzzle Creature',
    description:
      'A simple template from 101 Variant Monsters (Rite Publishing) applicable to any creature. The creature is petrified and transformed into a three-dimensional puzzle with disassembled, mixed-up stone pieces. It gains Accursed Riddle (Su): the creature remains petrified as a puzzle; speaking the correct riddle solution while the creature is assembled removes the template. Three incorrect answers cause the creature to enter a berserk rage, attacking the last speaker until dead or out of line of sight. Universal Language (Su): the creature can speak its riddle in any language and understands answers regardless of the language spoken. Assemble (Ex): reassembling requires a DC 20 Intelligence check; taking 20 requires 20 minutes, normal assembly takes 1 minute. Creatures who previously solved it gain a +10 bonus. While assembled the creature\'s petrified state is suppressed but it can only speak its riddle. Disassemble (Su): a critical hit or reduction to 0 HP causes disassembly into inanimate stone pieces. The creature cannot die from HP damage while assembled but may die through other means or have disassembled parts destroyed.',
    crAdjustment: 0,
    acquisitionType: 'acquired',
    isSimpleTemplate: true,
    features: [
      {
        scalingType: 'flat',
        name: 'Accursed Riddle (Su)',
        description:
          'The creature remains petrified as a three-dimensional puzzle. Speaking the correct riddle solution aloud while the creature is assembled removes the template. Three wrong answers cause the creature to enter a berserk rage, attacking the last speaker until they are dead or out of line of sight.',
      },
      {
        scalingType: 'flat',
        name: 'Universal Language (Su)',
        description:
          'The creature can speak its riddle in any language and understands answers regardless of the language spoken.',
      },
      {
        scalingType: 'flat',
        name: 'Assemble (Ex)',
        description:
          'Reassembling the puzzle requires a DC 20 Intelligence check. Taking 20 takes 20 minutes; normal assembly takes 1 minute. Creatures that previously solved it gain a +10 bonus on this check. While assembled, the creature\'s petrified state is suppressed but it can only speak its riddle.',
      },
      {
        scalingType: 'flat',
        name: 'Disassemble (Su)',
        description:
          'A successful critical hit or reduction to 0 hit points causes the creature to disassemble into inanimate stone pieces. The creature cannot die from hit point damage while assembled but may die through other means or have its disassembled parts destroyed.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Rite Publishing',
      publication: '101 Variant Monsters',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 346. Pyroclastic Creature (CR +1)
  {
    id: 'pyroclastic-creature',
    name: 'Pyroclastic Creature',
    description:
      'An inherited or acquired template from Pathways Bestiary (Rite Publishing) for creatures infused with volcanic powers by deities or extradimensional lords. Pyroclastic creatures appear made of naught but brimstone, with dark ashen coloring and cracks glowing red, orange, or yellow. CR +1. The creature gains the air, earth, and fire elemental subtypes. Strength +6, Constitution +4 (if the base creature has a Constitution score). It is immune to acid, bleed, electricity, fire, paralysis, poison, sleep, sonic, and stunning, is not subject to critical hits or flanking, and is vulnerable to cold. It gains a fly speed (perfect maneuverability) equal to its highest speed and a burrow speed equal to its base speed. Lava Burn (Ex): melee attacks deal an additional 2d6 fire damage; targets must make a Reflex save or catch fire, taking 2d6 damage per round for 1d4 rounds. Pyroclastic Aura (Ex): 50-foot radius aura dealing 1d6 Constitution damage per round to creatures that breathe it in (Fortitude save negates); also provides 20% concealment. Pyroclastic Breath Weapon (Su): usable once per 1d4 rounds, a cone dealing 1d10 damage per HD (half bludgeoning, half fire) plus Constitution damage.',
    crAdjustment: 1,
    acquisitionType: 'either',
    isSimpleTemplate: false,
    subtypeGains: ['air', 'earth', 'fire'],
    abilityScoreChanges: [
      { ability: 'STR', change: 6 },
      { ability: 'CON', change: 4, condition: 'Only if the base creature has a Constitution score' },
    ],
    immunities: ['acid', 'bleed', 'electricity', 'fire', 'paralysis', 'poison', 'sleep', 'sonic', 'stunning', 'critical hits', 'flanking'],
    features: [
      {
        scalingType: 'flat',
        name: 'Lava Burn (Ex)',
        description:
          'The pyroclastic creature\'s melee attacks deal 2d6 fire damage in addition to their normal damage. Targets must succeed on a Reflex save or catch fire, taking 2d6 fire damage per round for 1d4 rounds.',
      },
      {
        scalingType: 'flat',
        name: 'Pyroclastic Aura (Ex)',
        description:
          'The creature generates a 50-foot radius aura of pyroclastic ash and gases. Any creature that breathes within this aura takes 1d6 Constitution damage per round (Fortitude save negates). The aura also provides the pyroclastic creature with 20% concealment.',
      },
      {
        scalingType: 'flat',
        name: 'Pyroclastic Breath Weapon (Su)',
        description:
          'Once per 1d4 rounds the creature can exhale a cone-shaped breath weapon dealing 1d10 damage per Hit Die (half bludgeoning, half fire) plus Constitution damage.',
      },
      {
        scalingType: 'flat',
        name: 'Pyroclastic Movement',
        description:
          'The pyroclastic creature gains a fly speed with perfect maneuverability equal to its highest movement speed, and a burrow speed equal to its base land speed.',
      },
      {
        scalingType: 'flat',
        name: 'Cold Vulnerability',
        description: 'The pyroclastic creature is vulnerable to cold, taking half again as much damage from cold attacks.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Rite Publishing',
      publication: 'Pathways Bestiary',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 347. Qlippoth-Blighted Creature (CR +1)
  {
    id: 'qlippoth-blighted-creature',
    name: 'Qlippoth-Blighted Creature',
    description:
      'An acquired template from Advanced Bestiary (Green Ronin) applicable to any creature. Qlippoth-blighted creatures are attuned to one of the seven deadly sins (or a custom sin option) and exist to hunt and destroy creatures embodying that sin. Alignment is always chaotic evil. Subtypes gained: chaotic, evil; subtypes lost: lawful and good (if possessed). Constitution +2, Intelligence -2 (minimum 1), Charisma -4 (minimum 1); demons additionally suffer Wisdom -4 (minimum 1). Sin Sense (Su): detects creatures with the attuned sin within 100 feet, functioning as detect evil after three rounds of study. Sin Resistance (Su): creatures possessing the attuned sin have a 20% miss chance against the qlippoth-blighted\'s attacks; the creature gains one reroll per round on saves and checks against sin-attuned targets. Vulnerability to Virtue (Ex): takes 50% increased damage from holy/sacred and good descriptor effects. Sinful Compulsion (Su): when sensing its attuned sin, becomes sickened until it attacks the quarry (DC 25 Will save resists). Kill the Sinful (Su): declared before attack, forces a Fortitude save or reduces target to -1 HP; usable Charisma modifier times per day; DC is Charisma-based with +2 racial bonus. Sin Consumption (Su): killing a creature with the attuned sin grants +4 to a chosen ability score (+6 against matching demons, who are utterly destroyed). Sin Strike (Su): critical threat range doubled; automatically confirms against sin-attuned creatures. Sinful Bypass (Su): 20% chance to bypass immunities, DR, resistances, and SR against sin-attuned creatures. Vile Death (Ex): upon death, soul destroyed, remains create an unhallow effect, body evaporates after 1d10 rounds; revival requires true resurrection, miracle, or wish.',
    crAdjustment: 1,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    subtypeGains: ['chaotic', 'evil'],
    subtypeRemoves: ['lawful', 'good'],
    abilityScoreChanges: [
      { ability: 'CON', change: 2 },
      { ability: 'INT', change: -2, minimum: 1 },
      { ability: 'CHA', change: -4, minimum: 1 },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Sin Attunement (Su)',
        description:
          'The qlippoth-blighted is attuned to a specific sin (one of the seven deadly sins or a custom option). It gains a +2 bonus on saves, skill checks, attack rolls, damage rolls, and a +2 circumstance bonus to AC against creatures that embody that sin.',
      },
      {
        scalingType: 'flat',
        name: 'Sin Sense (Su)',
        description:
          'The qlippoth-blighted detects creatures with the attuned sin within 100 feet, functioning as detect evil after three rounds of study.',
      },
      {
        scalingType: 'flat',
        name: 'Sin Resistance (Su)',
        description:
          'Creatures possessing the attuned sin have a 20% miss chance against the qlippoth-blighted\'s attacks. The creature also gains one reroll per round on saving throws and checks against sin-attuned targets.',
      },
      {
        scalingType: 'flat',
        name: 'Vulnerability to Virtue (Ex)',
        description:
          'The qlippoth-blighted takes 50% increased damage from holy/sacred damage and effects with the good descriptor.',
      },
      {
        scalingType: 'flat',
        name: 'Sinful Compulsion (Su)',
        description:
          'When the qlippoth-blighted senses a creature with its attuned sin, it becomes sickened until it attacks that creature. A DC 25 Will save resists this compulsion.',
      },
      {
        scalingType: 'flat',
        name: 'Kill the Sinful (Su)',
        description:
          'Declared before the attack roll. On a successful hit, the target must succeed on a Fortitude save or be reduced to -1 HP. Usable a number of times per day equal to the creature\'s Charisma modifier. The DC is Charisma-based with a +2 racial bonus. This is a death effect.',
      },
      {
        scalingType: 'flat',
        name: 'Sin Consumption (Su)',
        description:
          'Upon killing a creature with the attuned sin, the qlippoth-blighted gains a +4 bonus to a chosen ability score. Against matching-sin demons the bonus is +6 and the demon is utterly destroyed.',
      },
      {
        scalingType: 'flat',
        name: 'Sin Strike (Su)',
        description:
          'The qlippoth-blighted\'s critical threat range is doubled. It automatically confirms critical hits against creatures with the attuned sin. This threat range increase stacks with other threat range increases.',
      },
      {
        scalingType: 'flat',
        name: 'Sinful Bypass (Su)',
        description:
          'The qlippoth-blighted has a 20% chance to bypass immunities, damage reduction, energy resistances, and spell resistance against creatures with the attuned sin.',
      },
      {
        scalingType: 'flat',
        name: 'Vile Death (Ex)',
        description:
          'When the qlippoth-blighted is killed, its soul is destroyed. Its remains create an unhallow effect and the body evaporates after 1d10 rounds. Reviving it requires true resurrection, miracle, or wish. Demons with the attuned sin slain by the qlippoth-blighted cannot be restored by any means.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Green Ronin Publishing',
      publication: 'Advanced Bestiary',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 348. Qlippoth-Corrupted Creature (CR +varies)
  {
    id: 'qlippoth-corrupted-creature',
    name: 'Qlippoth-Corrupted Creature',
    description:
      'An acquired and inherited template from Arcforge Universe Cyclopedia (Legendary Games) applicable to any non-outsider living creature, representing psionic corruption from qlippoth entities. CR adjustment: +1 for creatures with 4 or fewer HD; +2 for 5-10 HD; +3 for 11 or more HD. Ability score changes: Constitution +2, Wisdom -2 (minimum 1), Charisma +4. Natural armor improves by +2. The creature gains darkvision 60 feet, immunity to mind-affecting effects, acid resistance 10, cold resistance 10, electricity resistance 10, and power resistance 11 + new CR (adjustable as a standard action). Natural attacks transmit a disease (Lesser Qlippoth Corruption, Fort DC 10 + half HD + Cha mod; effect: 1d6 Wis and 1d6 Cha damage daily; cured by a single successful save). The creature gains psi-like abilities (manifester level equal to HD) scaling by HD: defensive precognition, control light, mind thrust (at will or lower HD); expose weakness, dispel psionics (mid HD); fold space, malefic metamorphosis, sensory cascade, fuse flesh, greater psychoport, matter manipulation, assimilate (higher HD).',
    crAdjustment: 0,
    acquisitionType: 'either',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'creature_type_excluded', excluded: ['outsider'] },
      { type: 'special', description: 'Must be a living creature' },
    ],
    naturalArmorChange: 2,
    abilityScoreChanges: [
      { ability: 'CON', change: 2 },
      { ability: 'WIS', change: -2, minimum: 1 },
      { ability: 'CHA', change: 4 },
    ],
    resistances: [
      { energyType: 'acid', value: 10 },
      { energyType: 'cold', value: 10 },
      { energyType: 'electricity', value: 10 },
    ],
    immunities: ['mind-affecting effects'],
    srFormula: '11 + new CR (adjustable as a standard action)',
    features: [
      {
        scalingType: 'flat',
        name: 'CR Adjustment by HD',
        description:
          'CR increases by +1 for creatures with 4 or fewer HD, +2 for 5-10 HD, and +3 for 11 or more HD.',
      },
      {
        scalingType: 'flat',
        name: 'Darkvision (Ex)',
        description: 'The qlippoth-corrupted creature gains darkvision 60 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Lesser Qlippoth Corruption (Su)',
        description:
          'The creature\'s natural attacks transmit a disease (Fort DC = 10 + half HD + Charisma modifier). Effect: 1d6 Wisdom damage and 1d6 Charisma damage per day. A single successful save cures the disease.',
      },
      {
        scalingType: 'flat',
        name: 'Psi-Like Abilities',
        description:
          'The creature gains psi-like abilities (manifester level equal to HD) scaling by HD: lower HD — defensive precognition, control light, mind thrust; mid HD — expose weakness, dispel psionics; higher HD — fold space, malefic metamorphosis, sensory cascade, fuse flesh, greater psychoport, matter manipulation, assimilate.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Legendary Games',
      publication: 'Arcforge Universe Cyclopedia',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 349. Quadrupedal Creature (CR +2)
  {
    id: 'quadrupedal-creature',
    name: 'Quadrupedal Creature',
    description:
      'An inherited template from Advanced Bestiary (Green Ronin) applicable to any bipedal creature with at least two arms and a head. The creature is transformed into a four-legged creature with the general form of a lion or horse, with legs instead of arms and an elongated neck. CR +2. Land and burrow speeds increase by +10 feet; climb speed becomes half land speed (minimum 10 feet); fly maneuverability decreases by one step. The creature retains all base creature attacks but gains a secondary bite attack with each head if it lacked one; if it had only one claw or slam attack it gains an additional one. Space and reach adjust per the quadruped size table (Medium quadrupeds: 5 ft. space, 5 ft. reach). CMD gains a +4 bonus against trip attacks. Carrying capacity is multiplied by size modifier (Medium x1.5, Large x3, etc.). The quadrupedal creature cannot wear standard armor (requires barding), cannot wield weapons or make fine manipulations, and cannot use somatic or material spell components without special methods.',
    crAdjustment: 2,
    acquisitionType: 'inherited',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'special', description: 'Must be a bipedal creature with at least two arms and a head' },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Quadruped Movement',
        description:
          'Land and burrow speeds increase by 10 feet. Climb speed becomes half land speed (minimum 10 feet). Fly maneuverability decreases by one step.',
      },
      {
        scalingType: 'flat',
        name: 'Revised Natural Attacks',
        description:
          'The creature retains all base creature attacks. If it lacked a bite attack it gains a secondary bite with each head. If it had only one claw or slam attack it gains an additional one.',
      },
      {
        scalingType: 'flat',
        name: 'Quadruped Stability (Ex)',
        description:
          'The quadrupedal creature gains a +4 bonus to its CMD against trip maneuvers.',
      },
      {
        scalingType: 'flat',
        name: 'Increased Carrying Capacity',
        description:
          'Carrying capacity is multiplied by a size-based modifier: Medium x1.5, Large x3, and so on for larger sizes.',
      },
      {
        scalingType: 'flat',
        name: 'Equipment Restrictions',
        description:
          'The quadrupedal creature cannot wear standard armor (must use barding), cannot wield weapons or perform fine manipulation, and cannot use somatic or material spell components without special methods.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Green Ronin Publishing',
      publication: 'Advanced Bestiary',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 350. Quickling Creature (CR +3)
  {
    id: 'quickling-creature',
    name: 'Quickling Creature',
    description:
      'An acquired or inherited template from Advanced Bestiary (Green Ronin) applicable to any living creature. Quickling creatures are blessed—or cursed—with incredible speed, aging 4 years for every 1 actual year and typically dying young despite great accomplishments. CR +3. Dexterity +8. Initiative +4. AC gains a +4 dodge bonus. All speeds are quadrupled; fly maneuverability increases by two categories (maximum perfect). Fast healing 1 + 1 per 5 racial HD. Bonus feats: Dodge, Mobility, Quick Draw, Spring Attack. Skill bonuses: +4 racial bonus on Perception, +10 racial bonus on Acrobatics. Rapid Actions (Ex): gains one extra attack or move action per round; does not stack with haste effects. Quickling Casting (Ex): spells and spell-like abilities with casting times of 1 round or less become swift actions; casting times longer than 1 round are reduced to 1 round (attack action); incompatible with Quicken Spell. Rapid Aging (Ex): ages 4 years per 1 actual year. Aging Vulnerability (Ex): takes 50% additional damage from aging effects.',
    crAdjustment: 3,
    acquisitionType: 'either',
    isSimpleTemplate: false,
    abilityScoreChanges: [
      { ability: 'DEX', change: 8 },
    ],
    fastHealing: '1 + 1 per 5 racial HD',
    features: [
      {
        scalingType: 'flat',
        name: 'Rapid Actions (Ex)',
        description:
          'The quickling creature gains one extra attack action or move action per round. This additional action does not stack with haste effects.',
      },
      {
        scalingType: 'flat',
        name: 'Quickling Casting (Ex)',
        description:
          'Spells and spell-like abilities with casting times of 1 round or less become swift actions. Casting times longer than 1 round are reduced to 1 round as an attack action. This ability is incompatible with the Quicken Spell feat.',
      },
      {
        scalingType: 'flat',
        name: 'Rapid Aging (Ex)',
        description: 'The quickling creature ages 4 years for every 1 actual year that passes.',
      },
      {
        scalingType: 'flat',
        name: 'Aging Vulnerability (Ex)',
        description:
          'The quickling creature takes 50% additional damage from aging effects.',
      },
      {
        scalingType: 'flat',
        name: 'Speed Increase',
        description:
          'All of the quickling creature\'s speeds are quadrupled. Fly maneuverability increases by two categories, to a maximum of perfect.',
      },
      {
        scalingType: 'flat',
        name: 'Bonus Feats',
        description:
          'The quickling creature gains Dodge, Mobility, Quick Draw, and Spring Attack as bonus feats.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Green Ronin Publishing',
      publication: 'Advanced Bestiary',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },
];
