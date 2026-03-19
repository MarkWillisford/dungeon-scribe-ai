// Batch 006 | first: 'Dread Sayona Creature (CR +3)' | last: 'Elemental Infusion Templates' | count: 25

import { TemplateDefinition } from '../types';

export const TEMPLATES_BATCH_006: TemplateDefinition[] = [
  // 126. Dread Sayona Creature
  {
    id: 'dread-sayona-creature',
    name: 'Dread Sayona Creature',
    description:
      'A dread sayona is a terrible undead predator created when a humanoid with a strong life force is slain by a sayona. It combines the hunting instincts of a ghoul with the blood-drinking power of a vampire, commanding lesser undead and spreading its curse through paralytic touch and blood drain.',
    crAdjustment: 3,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'special', description: 'Base creature must have an Intelligence score of 3 or higher and be killed by a sayona.' },
    ],
    typeChange: 'undead',
    subtypeGains: ['augmented'],
    abilityScoreChanges: [
      { ability: 'STR', change: 8 },
      { ability: 'DEX', change: 6 },
      { ability: 'CON', change: 0, condition: 'Constitution score removed (undead)' },
      { ability: 'CHA', change: 6 },
    ],
    abilityScoreChangeNote: 'Constitution score removed (undead). Strength +8, Dexterity +6, Charisma +6.',
    naturalArmorChange: 10,
    damageReduction: {
      scalingType: 'hd_tiered',
      tiers: [
        { minHD: 1, maxHD: 5, value: 5, bypassedBy: 'good and silver' },
        { minHD: 6, maxHD: 11, value: 10, bypassedBy: 'good and silver' },
        { minHD: 12, value: 15, bypassedBy: 'good and silver' },
      ],
    },
    immunities: ['acid', 'cold', 'electricity', 'sonic', 'undead traits'],
    fastHealing: '5 (10 at CR 6+, 20 at CR 12+)',
    features: [
      {
        scalingType: 'flat',
        name: 'Channel Resistance +6 (Ex)',
        description: 'The dread sayona gains channel resistance +6 against positive energy channeling.',
      },
      {
        scalingType: 'flat',
        name: 'Absorb Blood (Su)',
        description:
          'Any creature that is bleeding and adjacent to the dread sayona takes 2 points of Constitution damage per round as it bleeds faster.',
      },
      {
        scalingType: 'flat',
        name: 'Accursed Gaze (Su)',
        description:
          'Range 30 feet. Any creature meeting the dread sayona\'s gaze is subject to a blood curse. The DC is Charisma-based.',
      },
      {
        scalingType: 'flat',
        name: 'Bleed (Ex)',
        description:
          'All melee attacks made by the dread sayona inflict bleed damage equal to the creature\'s Strength modifier.',
      },
      {
        scalingType: 'flat',
        name: 'Blood Drain (Su)',
        description:
          'Touch attack dealing 1d6 Constitution damage. The dread sayona heals hit points equal to the Constitution damage dealt.',
      },
      {
        scalingType: 'flat',
        name: 'Command Ghouls (Su)',
        description:
          'As a free action, the dread sayona automatically commands all normal ghouls and dread ghouls within 30 feet. It can attempt to command other ghouls with a Will save (DC is Charisma-based, caster level equals total HD).',
      },
      {
        scalingType: 'flat',
        name: 'Create Spawn (Su)',
        description:
          'Any living creature killed by the dread sayona rises as a dread ghoul after 24 hours unless the body is destroyed or a remove curse spell is cast on it within that time.',
      },
      {
        scalingType: 'flat',
        name: 'Dreaded Aura (Su)',
        description:
          '60-foot fear aura. Any creature within range that fails a Will save (DC is Charisma-based) is cowered for 1d4+1 rounds.',
      },
      {
        scalingType: 'flat',
        name: 'Living Form (Su)',
        description:
          'If the dread sayona has drained blood within the past 24 hours, it can transform into a beautiful humanoid form for up to 12 hours. It can dismiss and resume this form as a free action.',
      },
      {
        scalingType: 'flat',
        name: 'Paralysis (Su)',
        description:
          'All melee and touch attacks made by the dread sayona can paralyze the target unless a Fortitude save is made. The DC is Charisma-based.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Rite Publishing LLC',
      publication: 'Pathways Bestiary',
    },
    visibility: 'global',
    rev: 1,
  },

  // 127. Dread Shadow
  {
    id: 'dread-shadow',
    name: 'Dread Shadow',
    description:
      'A dread shadow is an exceptionally powerful incorporeal undead formed when a creature with exceptional personal magnetism is slain by a shadow or dread shadow. Unlike ordinary shadows, dread shadows can command lesser shadows and create spawn of comparable power.',
    crAdjustment: 2,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      {
        type: 'special',
        description:
          'Living intelligent creature with Charisma 15 or higher killed by a shadow or dread shadow.',
      },
    ],
    typeChange: 'undead',
    subtypeGains: ['incorporeal'],
    abilityScoreChanges: [
      { ability: 'DEX', change: 4 },
      { ability: 'INT', change: -4 },
      { ability: 'WIS', change: 2 },
      { ability: 'CHA', change: 4 },
      { ability: 'STR', change: 0, condition: 'Strength score removed (incorporeal)' },
      { ability: 'CON', change: 0, condition: 'Constitution score removed (undead)' },
    ],
    abilityScoreChangeNote:
      'Strength and Constitution scores are removed. Incorporeal creature gains deflection bonus to AC equal to Charisma modifier (minimum +1).',
    features: [
      {
        scalingType: 'flat',
        name: 'Channel Resistance +3 (Ex)',
        description: 'The dread shadow has channel resistance +3 against positive energy channeling.',
      },
      {
        scalingType: 'flat',
        name: 'Fly Speed (Ex)',
        description:
          "The dread shadow gains a fly speed equal to the base creature's highest speed with perfect maneuverability.",
      },
      {
        scalingType: 'flat',
        name: 'Strength Damage (Su)',
        description:
          'Incorporeal touch attacks deal Strength damage (1d4 for Fine–Tiny, 1d6 for Small–Large, 1d8 for Huge–Colossal).',
      },
      {
        scalingType: 'flat',
        name: 'Command Shadows (Su)',
        description:
          'As a free action, the dread shadow automatically commands all normal shadows within 30 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Create Spawn (Su)',
        description:
          'Creatures with Charisma 15 or higher slain by the dread shadow rise as dread shadows in 1d4 rounds; other slain creatures become normal shadows.',
      },
      {
        scalingType: 'flat',
        name: 'Shadow Slip (Su)',
        description:
          'The dread shadow can use dimension door as a move action (caster level 7th), but only to teleport between areas of shadow or darkness.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Green Ronin Publishing',
      publication: 'Advanced Bestiary',
    },
    visibility: 'global',
    rev: 1,
  },

  // 128. Dread Skeleton
  {
    id: 'dread-skeleton',
    name: 'Dread Skeleton',
    description:
      'A dread skeleton is an unusually powerful undead skeleton that commands lesser skeletal undead. It retains greater mobility and resilience than a standard skeleton, and its dark presence unsettles animals and other creatures.',
    crAdjustment: 1,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      {
        type: 'special',
        description: 'Corporeal creature with a skeleton or exoskeleton.',
      },
    ],
    typeChange: 'undead',
    abilityScoreChanges: [
      { ability: 'DEX', change: 2 },
      { ability: 'CHA', change: 2 },
      { ability: 'CON', change: 0, condition: 'Constitution score removed (undead)' },
    ],
    abilityScoreChangeNote: 'Constitution score removed (undead). Do not recalculate BAB, saves, or skill points.',
    damageReduction: { scalingType: 'flat', value: 10, bypassedBy: 'bludgeoning' },
    immunities: ['cold'],
    features: [
      {
        scalingType: 'flat',
        name: 'Channel Resistance +2 (Ex)',
        description: 'The dread skeleton has channel resistance +2 against positive energy channeling.',
      },
      {
        scalingType: 'flat',
        name: 'Natural Armor (Ex)',
        description:
          'The dread skeleton replaces its natural armor bonus based on size: Tiny or smaller +0, Small +1, Medium +2, Large +3, Huge +4, Gargantuan +7, Colossal +10.',
      },
      {
        scalingType: 'flat',
        name: 'Unnatural Aura (Su)',
        description:
          'Animals will not willingly approach within 30 feet of the dread skeleton. An animal can be forced to do so with a DC 25 Handle Animal or wild empathy check.',
      },
      {
        scalingType: 'flat',
        name: 'Command Skeletons (Su)',
        description:
          'As a free action, the dread skeleton automatically commands all normal skeletons within 30 feet. It can attempt to command skeleton warriors with a Will save (DC is Charisma-based, caster level equals total HD).',
      },
      {
        scalingType: 'flat',
        name: 'Bonus Feat',
        description: 'The dread skeleton gains Improved Initiative as a bonus feat.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Green Ronin Publishing',
      publication: 'Advanced Bestiary',
    },
    visibility: 'global',
    rev: 1,
  },

  // 129. Dread Spectre
  {
    id: 'dread-spectre',
    name: 'Dread Spectre',
    description:
      'A dread spectre is a more powerful version of a standard spectre, formed from creatures of great personal power. It commands lesser spectres and can drain life energy far more efficiently, creating spawn of comparable might.',
    crAdjustment: 3,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    typeChange: 'undead',
    subtypeGains: ['incorporeal'],
    abilityScoreChanges: [
      { ability: 'DEX', change: 6 },
      { ability: 'INT', change: 4 },
      { ability: 'WIS', change: 4 },
      { ability: 'CHA', change: 6 },
      { ability: 'STR', change: 0, condition: 'Strength score removed (incorporeal)' },
      { ability: 'CON', change: 0, condition: 'Constitution score removed (undead)' },
    ],
    abilityScoreChangeNote:
      'Strength and Constitution removed. Incorporeal creature gains deflection bonus to AC equal to Charisma modifier (minimum +1). Do not recalculate BAB, saves, or skill points.',
    features: [
      {
        scalingType: 'flat',
        name: 'Channel Resistance +4 (Ex)',
        description: 'The dread spectre has channel resistance +4 against positive energy channeling.',
      },
      {
        scalingType: 'flat',
        name: 'Fly Speed (Ex)',
        description:
          "The dread spectre gains a fly speed equal to double the base creature's highest speed with perfect maneuverability.",
      },
      {
        scalingType: 'flat',
        name: 'Energy Drain (Su)',
        description:
          'All attacks become incorporeal touch attacks that deal normal damage plus energy drain (2 negative levels). The DC is Charisma-based.',
      },
      {
        scalingType: 'flat',
        name: 'Frightful Presence (Ex)',
        description:
          '60-foot radius frightful presence. The DC is Charisma-based. Creatures with fewer HD than the dread spectre are panicked for 4d6 rounds; those with equal or more HD are shaken for 4d6 rounds.',
      },
      {
        scalingType: 'flat',
        name: 'Unnatural Aura (Su)',
        description:
          'Animals will not willingly approach within 30 feet of the dread spectre. An animal can be forced to do so with a DC 25 Handle Animal or wild empathy check.',
      },
      {
        scalingType: 'flat',
        name: 'Command Spectres (Su)',
        description:
          'As a free action, the dread spectre automatically commands all normal spectres within 30 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Create Spawn (Su)',
        description:
          'Creatures with Charisma 16 or higher killed by the dread spectre become dread spectres in 1d4 rounds; others become normal spectres. Both are under the creator\'s command.',
      },
      {
        scalingType: 'flat',
        name: 'Sunlight Weakness (Ex)',
        description:
          'In natural sunlight (not a daylight spell), the dread spectre takes a -4 penalty on attack rolls, checks, and saving throws.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Green Ronin Publishing',
      publication: 'Advanced Bestiary',
    },
    visibility: 'global',
    rev: 1,
  },

  // 130. Dread Vampire
  {
    id: 'dread-vampire',
    name: 'Dread Vampire',
    description:
      'A dread vampire is more powerful than a standard vampire, boasting heightened senses, superior shapeshifting, and the ability to reform itself even without a coffin — provided it can reach a good creature\'s blood in time. It commands night creatures and dominates mortals with terrifying ease.',
    crAdjustment: 3,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    typeChange: 'undead',
    subtypeGains: ['augmented'],
    abilityScoreChanges: [
      { ability: 'STR', change: 8 },
      { ability: 'DEX', change: 6 },
      { ability: 'INT', change: 4 },
      { ability: 'WIS', change: 4 },
      { ability: 'CHA', change: 6 },
      { ability: 'CON', change: 0, condition: 'Constitution score removed (undead)' },
    ],
    abilityScoreChangeNote: 'Constitution score removed (undead). Do not recalculate BAB, saves, or skill points.',
    naturalArmorChange: 8,
    damageReduction: { scalingType: 'flat', value: 10, bypassedBy: 'good and silver' },
    resistances: [
      { energyType: 'acid', value: 10 },
      { energyType: 'electricity', value: 10 },
      { energyType: 'sonic', value: 10 },
    ],
    immunities: ['cold'],
    fastHealing: '5',
    features: [
      {
        scalingType: 'flat',
        name: 'Channel Resistance +6 (Ex)',
        description: 'The dread vampire has channel resistance +6 against positive energy channeling.',
      },
      {
        scalingType: 'flat',
        name: 'Blindsight 20 ft. (Ex)',
        description: 'The dread vampire gains blindsight 20 feet and darkvision 120 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Energy Drain (Su)',
        description:
          'One of the dread vampire\'s natural attack types deals 2 negative levels in addition to normal damage. The DC is Charisma-based.',
      },
      {
        scalingType: 'flat',
        name: 'Blood Drain (Su)',
        description:
          'While grappling or pinning a target, the dread vampire drains blood each round, dealing 1d6 Constitution damage.',
      },
      {
        scalingType: 'flat',
        name: 'Children of the Night (Su)',
        description:
          '3/day as a standard action, the dread vampire can summon animals, vermin, or undead to serve it.',
      },
      {
        scalingType: 'flat',
        name: 'Dominate (Su)',
        description:
          'As a standard action, the dread vampire can dominate a living creature within 30 feet (Will save negates, Charisma-based DC).',
      },
      {
        scalingType: 'flat',
        name: 'Change Shape (Su)',
        description:
          'The dread vampire can polymorph into any of the creatures it can summon with Children of the Night.',
      },
      {
        scalingType: 'flat',
        name: 'Gaseous Form (Su)',
        description:
          'At will, the dread vampire can assume gaseous form (as the spell) with indefinite duration.',
      },
      {
        scalingType: 'flat',
        name: 'Swarm Shape (Su)',
        description: 'The dread vampire can polymorph into a swarm of creatures as a full-round action.',
      },
      {
        scalingType: 'flat',
        name: 'Uncanny Climber (Ex)',
        description: 'The dread vampire gains a climb speed equal to its land speed and can climb any surface.',
      },
      {
        scalingType: 'flat',
        name: 'Dread Rejuvenation (Su)',
        description:
          'If destroyed, the dread vampire can reconstitute itself if it can reach its coffin within 2 days OR if it can consume the blood of a good-aligned creature. If it does neither, it is permanently destroyed.',
      },
      {
        scalingType: 'flat',
        name: 'Racial Skill Bonuses (Ex)',
        description:
          '+10 racial bonus on Bluff, Perception, Sense Motive, and Stealth checks.',
      },
      {
        scalingType: 'flat',
        name: 'Bonus Feats',
        description:
          'The dread vampire gains Alertness, Combat Reflexes, Improved Grapple, Improved Initiative, and Lightning Reflexes as bonus feats.',
      },
    ],
    spellLikeAbilities: [
      { spellName: 'darkness', frequency: '3/day', casterLevelFormula: 'equal to HD' },
      { spellName: 'fog cloud', frequency: '3/day', casterLevelFormula: 'equal to HD' },
      { spellName: 'deeper darkness', frequency: '1/day', casterLevelFormula: 'equal to HD' },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Green Ronin Publishing',
      publication: 'Advanced Bestiary',
    },
    visibility: 'global',
    rev: 1,
  },

  // 131. Dread Wight
  {
    id: 'dread-wight',
    name: 'Dread Wight',
    description:
      'A dread wight is a more powerful form of wight that commands lesser wights and drains the life force of its victims with devastating efficiency. It acts as a natural leader among wight undead, inspiring fear and obedience from lesser undead.',
    crAdjustment: 2,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'special', description: 'Any living corporeal creature.' },
    ],
    typeChange: 'undead',
    abilityScoreChanges: [
      { ability: 'STR', change: 2 },
      { ability: 'DEX', change: 4 },
      { ability: 'INT', change: 2 },
      { ability: 'WIS', change: 2 },
      { ability: 'CHA', change: 4 },
      { ability: 'CON', change: 0, condition: 'Constitution score removed (undead)' },
    ],
    abilityScoreChangeNote: 'Constitution score removed (undead). Alignment becomes always evil.',
    naturalArmorChange: 4,
    features: [
      {
        scalingType: 'flat',
        name: 'Channel Resistance +4 (Ex)',
        description: 'The dread wight has channel resistance +4 against positive energy channeling.',
      },
      {
        scalingType: 'flat',
        name: 'Blindsense 60 ft. (Ex)',
        description: 'The dread wight gains blindsense 60 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Energy Drain (Su)',
        description:
          'All natural attacks deal 1 negative level in addition to normal damage. The DC is Charisma-based.',
      },
      {
        scalingType: 'flat',
        name: 'Command Wights (Su)',
        description:
          'As a free action, the dread wight automatically commands all normal wights within 30 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Create Spawn (Su)',
        description:
          'Any creature killed by the dread wight\'s energy drain rises as a dread wight in 1d4 rounds and is under the creator\'s control.',
      },
      {
        scalingType: 'flat',
        name: 'Racial Skill Bonus (Ex)',
        description: '+8 racial bonus on Stealth checks.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Green Ronin Publishing',
      publication: 'Advanced Bestiary',
    },
    visibility: 'global',
    rev: 1,
  },

  // 132. Dread Wraith Sovereign
  {
    id: 'dread-wraith-sovereign',
    name: 'Dread Wraith Sovereign',
    description:
      'A dread wraith sovereign is an apex incorporeal undead formed from creatures of great power slain by an existing sovereign. It rules over lesser wraiths and dread wraiths, draining the very Constitution from those it touches and leaving frozen, paralyzed corpses in its wake.',
    crAdjustment: 4,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      {
        type: 'min_hd',
        minimum: 10,
      },
      {
        type: 'special',
        description: 'Living creature with 10 or more Hit Dice killed by a dread wraith sovereign.',
      },
    ],
    typeChange: 'undead',
    subtypeGains: ['incorporeal', 'evil'],
    abilityScoreChanges: [
      { ability: 'DEX', change: 20 },
      { ability: 'INT', change: 6 },
      { ability: 'WIS', change: 8 },
      { ability: 'CHA', change: 14 },
      { ability: 'STR', change: 0, condition: 'Strength score removed (incorporeal)' },
      { ability: 'CON', change: 0, condition: 'Constitution score removed (undead)' },
    ],
    abilityScoreChangeNote:
      'Strength and Constitution scores are removed. Incorporeal creature gains deflection bonus to AC equal to Charisma modifier (minimum +1).',
    immunities: ['cold'],
    srFormula: 'HD + 12',
    features: [
      {
        scalingType: 'flat',
        name: 'Channel Resistance +4 (Ex)',
        description: 'The dread wraith sovereign has channel resistance +4 against positive energy channeling.',
      },
      {
        scalingType: 'flat',
        name: 'Lifesense 60 ft. (Su)',
        description:
          'The dread wraith sovereign can detect the life force of living creatures within 60 feet as if it had tremorsense.',
      },
      {
        scalingType: 'flat',
        name: 'Unnatural Aura 100 ft. (Su)',
        description:
          'Animals will not willingly approach within 100 feet of the dread wraith sovereign.',
      },
      {
        scalingType: 'flat',
        name: 'Unnatural Chill (Su)',
        description:
          '30-foot aura that deals 2d6 cold damage each round. A Fortitude save (Charisma-based DC) negates the paralysis but not the damage. Failure leaves the creature paralyzed for 1d6 rounds.',
      },
      {
        scalingType: 'flat',
        name: 'Constitution Drain (Su)',
        description:
          'The dread wraith sovereign\'s incorporeal touch deals 1d8 Constitution drain (not damage). The DC is Charisma-based.',
      },
      {
        scalingType: 'flat',
        name: 'Penetrating Touch (Su)',
        description: 'The dread wraith sovereign\'s attacks ignore damage reduction.',
      },
      {
        scalingType: 'flat',
        name: 'Command Wraiths (Su)',
        description:
          'As a free action, the dread wraith sovereign automatically commands all normal wraiths and dread wraiths within 30 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Create Spawn (Su)',
        description:
          'Any humanoid creature slain by the dread wraith sovereign rises as a dread wraith under the creator\'s control.',
      },
      {
        scalingType: 'flat',
        name: 'Bonus Feats',
        description: 'The dread wraith sovereign gains Alertness and Improved Initiative as bonus feats.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Green Ronin Publishing',
      publication: 'Advanced Bestiary',
    },
    visibility: 'global',
    rev: 1,
  },

  // 133. Dread Zombie
  {
    id: 'dread-zombie',
    name: 'Dread Zombie',
    description:
      'A dread zombie is a more powerful form of zombie that commands lesser zombies and can devour the brains of pinned victims to instantly kill them. It is tougher and more dangerous than a standard zombie, acting as a lord among the shambling undead.',
    crAdjustment: 1,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'special', description: 'Any corporeal living creature.' },
    ],
    typeChange: 'undead',
    abilityScoreChanges: [
      { ability: 'STR', change: 4 },
      { ability: 'DEX', change: -2, minimum: 1 },
      { ability: 'INT', change: -4 },
      { ability: 'CHA', change: -4, minimum: 1 },
      { ability: 'CON', change: 0, condition: 'Constitution score removed (undead)' },
    ],
    abilityScoreChangeNote:
      'Constitution score removed (undead). Alignment becomes always neutral evil. Do not recalculate BAB, saves, or skill points.',
    features: [
      {
        scalingType: 'flat',
        name: 'Channel Resistance +2 (Ex)',
        description: 'The dread zombie has channel resistance +2 against positive energy channeling.',
      },
      {
        scalingType: 'flat',
        name: 'Natural Armor (Ex)',
        description:
          'Natural armor bonus increases by size: Small +1, Medium +2, Large +3, Huge +4, Gargantuan +7, Colossal +11.',
      },
      {
        scalingType: 'flat',
        name: 'Unnatural Aura 30 ft. (Su)',
        description:
          'Animals will not willingly approach within 30 feet of the dread zombie unless forced with a DC 25 Handle Animal or wild empathy check.',
      },
      {
        scalingType: 'flat',
        name: 'Additional Hit Dice',
        description: 'All racial HD convert to d8s and 2 additional racial Hit Dice are gained.',
      },
      {
        scalingType: 'flat',
        name: 'Brain Consumption (Ex)',
        description:
          "On a successful grapple check that deals bite damage to a pinned or helpless living foe, the dread zombie can attempt to consume its brain. The victim must succeed at a Fortitude save (DC = 10 + 1/2 dread zombie's HD + Str modifier) or die instantly.",
      },
      {
        scalingType: 'flat',
        name: 'Command Zombies (Su)',
        description:
          'As a free action, the dread zombie automatically commands all normal zombies within 30 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Bonus Feat',
        description: 'The dread zombie gains Toughness as a bonus feat.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Green Ronin Publishing',
      publication: 'Advanced Bestiary',
    },
    visibility: 'global',
    rev: 1,
  },

  // 134. Dream Creature
  {
    id: 'dream-creature',
    name: 'Dream Creature',
    description:
      'A dream creature is a being touched by the dream realm, gaining potent abilities to lull prey to sleep and manipulate illusions. It becomes vulnerable to sleep effects itself as a cost of its dreaming nature, but its sleep-inducing gaze and haunting song make it a dangerous soporific predator.',
    crAdjustment: 1,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      {
        type: 'special',
        description:
          'Base creature must sleep and have Charisma, Intelligence, and Wisdom scores of at least 3.',
      },
    ],
    subtypeGains: ['chaotic'],
    abilityScoreChanges: [
      { ability: 'WIS', change: 2 },
      { ability: 'CHA', change: 4 },
    ],
    damageReduction: { scalingType: 'flat', value: 5, bypassedBy: 'cold iron' },
    features: [
      {
        scalingType: 'flat',
        name: 'Low-Light Vision (Ex)',
        description: 'The dream creature gains low-light vision.',
      },
      {
        scalingType: 'flat',
        name: 'Immunity to Figment, Glamer, and Pattern Spells (Ex)',
        description:
          'The dream creature is immune to figment, glamer, and pattern spells.',
      },
      {
        scalingType: 'flat',
        name: 'Sleep Vulnerability (Ex)',
        description:
          'The dream creature takes a -2 penalty on saving throws against sleep effects and is treated as having 2 fewer Hit Dice for the purposes of the sleep spell. The creature loses any existing immunity to sleep effects.',
      },
      {
        scalingType: 'flat',
        name: 'Dream Spellcasting (Su)',
        description:
          'The dream creature\'s caster level increases by +2 for figment, glamer, and pattern spells. These bonuses stack if a spell qualifies for multiple categories.',
      },
      {
        scalingType: 'flat',
        name: 'Lulling Gaze (Su)',
        description:
          'Gaze, 20 feet. Creatures that fail a Will save (Charisma-based DC) take a -5 penalty to Perception checks and a -2 penalty on Will saves against sleep effects.',
      },
      {
        scalingType: 'flat',
        name: 'Sleep Song (Su)',
        description:
          'As a full-round action, the dream creature sings. Any creature within 100 feet that can hear the song must succeed on a Will save (DC equals the dream creature\'s Perform [sing] check result) or fall asleep for a number of rounds equal to the dream creature\'s total HD. Creatures immune to sleep and other dream creatures are unaffected.',
      },
      {
        scalingType: 'flat',
        name: 'Waking Dreams (Su)',
        description:
          'As a standard action, the dream creature causes the air within 100 feet to become hazy and dreamlike (figment illusion). All creatures within the area take a -4 penalty to attack rolls, checks, and saving throws. This effect passes through solid objects and across the ethereal boundary. No save is allowed.',
      },
      {
        scalingType: 'flat',
        name: 'Dream Travel (Su)',
        description:
          "Once per day, the dream creature can sleep and send its consciousness into the dream realm (as ethereal jaunt), leaving its physical body behind. Its body is helpless while it travels.",
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Green Ronin Publishing',
      publication: 'Advanced Bestiary',
    },
    visibility: 'global',
    rev: 1,
  },

  // 135. Dream Eater
  {
    id: 'dream-eater',
    name: 'Dream Eater',
    description:
      'A dream eater is a creature that has developed the ability to consume the psychic energy of sleeping victims, converting it into psychic points that fuel devastating mental assaults. These predators haunt the dreams of the living and ambush sleeping prey.',
    crAdjustment: 2,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'special', description: 'Living intelligent creature.' },
    ],
    abilityScoreChanges: [
      { ability: 'STR', change: 6 },
      { ability: 'DEX', change: 2 },
      { ability: 'CON', change: 4 },
      { ability: 'INT', change: 2 },
      { ability: 'WIS', change: 2 },
      { ability: 'CHA', change: 4 },
    ],
    immunities: ['mind-affecting effects'],
    features: [
      {
        scalingType: 'flat',
        name: 'Darkvision 60 ft. (Ex)',
        description:
          'The dream eater gains darkvision 60 feet, or its existing darkvision increases by 60 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Telepathy 30 ft. (Su)',
        description: 'The dream eater can communicate telepathically with other dream eaters within 30 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Dream Eating (Su)',
        description:
          'As a full-round action (provokes AoO), the dream eater targets one sleeping or helpless creature. The target must succeed at a Will save (DC 10 + 1/2 HD + Cha modifier; sleeping targets take a -2 penalty) or take 1d4 Charisma damage. The dream eater gains psychic points equal to the Charisma damage dealt, up to a maximum equal to its Hit Dice.',
      },
      {
        scalingType: 'flat',
        name: 'Psychic Assault (Su)',
        description:
          'As a swift action before a melee attack, the dream eater can expend psychic points to augment the strike. The target makes a Will save or suffers: 1 point = dazzled 1d6 rounds; 3 points = staggered 1d6 rounds; 5 points = nauseated 1d6 rounds; 7 points = confused 1d6 rounds; 9 points = stunned 1d6 rounds.',
      },
      {
        scalingType: 'flat',
        name: 'Racial Skill Bonuses (Ex)',
        description:
          '+4 racial bonus on Perception and Stealth; +8 racial bonus on Knowledge (religion) and Knowledge (planes).',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Campaign Setting: Dungeons of Golarion',
    },
    visibility: 'global',
    rev: 1,
  },

  // 136. Dream Killer Creature
  {
    id: 'dream-killer-creature',
    name: 'Dream Killer Creature',
    description:
      'A dream killer is a predator that hunts within the dreamscapes of sleeping victims. It can mark a target to gain access to their dreams and pursues them relentlessly across the dream realm, inflicting devastating wounds that follow the target into waking life.',
    crAdjustment: 2,
    acquisitionType: 'either',
    isSimpleTemplate: false,
    subtypeGains: ['outsider'],
    features: [
      {
        scalingType: 'flat',
        name: 'Defensive Bonus (Ex)',
        description:
          '+2 deflection bonus to AC (or +2 increase to an existing deflection bonus), +2 bonus to all saving throws, and +2 bonus to all attack rolls.',
      },
      {
        scalingType: 'flat',
        name: 'Bonus Hit Points',
        description: 'Gains bonus hit points equal to new CR total x 2.',
      },
      {
        scalingType: 'flat',
        name: 'Dreamscape Defenses (Su)',
        description:
          'While within a dreamscape only: spell resistance equal to CR + 10 and damage reduction equal to half CR, bypassed by a material that changes each time the dream killer enters a dreamscape (determined by d10 roll).',
      },
      {
        scalingType: 'flat',
        name: 'Dreamscape Mark (Su)',
        description:
          'Standard action. Target must succeed at a Will save (DC 10 + half final CR + Charisma bonus) or become marked. The dream killer can enter the marked target\'s dreamscape automatically when the target sleeps. It can set the dreamscape terrain and unconscious targets gain negative levels; targets killed in the dreamscape die permanently. The killer may exit by spending a full-round action (provoking AoO) if reduced to 50% HP.',
      },
      {
        scalingType: 'flat',
        name: 'Recurring Dream (Su)',
        description:
          'The dream killer can locate any dreamscape resident it knows of within 6d10 minutes regardless of precautions. Only a wish or miracle prevents this.',
      },
      {
        scalingType: 'flat',
        name: 'Nightmarish Attacks (Su)',
        description:
          'The dream killer\'s natural attacks (fangs, claws, etc.) morph to deal damage equivalent to an oversized longsword and are treated as magical. Up to three such attacks may be made per round.',
      },
      {
        scalingType: 'flat',
        name: 'Nightmarish Potency (Su)',
        description:
          "All of the dream killer's base creature spells and special abilities gain a +2 increase to their save DCs.",
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Rite Publishing LLC',
      publication: 'Pathways Bestiary',
    },
    visibility: 'global',
    rev: 1,
  },

  // 137. Drider
  {
    id: 'drider',
    name: 'Drider',
    description:
      'A drider template transforms a creature — typically a drow — into a monstrous half-spider hybrid through a dark ritual. The resulting creature gains significant magical power and spider-like physical traits including web-spinning, venom, and a host of inherent drow spell-like abilities.',
    crAdjustment: 2,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    typeChange: 'aberration',
    subtypeGains: ['augmented'],
    sizeChange: 1,
    abilityScoreChanges: [
      { ability: 'DEX', change: 6 },
      { ability: 'CON', change: 2 },
      { ability: 'INT', change: 4 },
      { ability: 'WIS', change: 6 },
      { ability: 'CHA', change: 6 },
    ],
    naturalArmorChange: 5,
    features: [
      {
        scalingType: 'flat',
        name: 'Web (Ex)',
        description: 'The drider gains the web universal monster ability.',
      },
      {
        scalingType: 'flat',
        name: 'Climb Speed (Ex)',
        description: "Gains a climb speed equal to half its land speed.",
      },
      {
        scalingType: 'flat',
        name: 'Bite and Poison (Ex)',
        description:
          "Gains a bite attack (primary if no other natural attacks, otherwise secondary). The bite delivers poison dealing 1d2 Strength damage per round for 6 rounds (Fortitude save, Constitution-based DC).",
      },
      {
        scalingType: 'flat',
        name: 'Spellcasting (Su)',
        description:
          "Gains spellcasting as a cleric, sorcerer, or wizard at caster level 6 or 3 less than total racial HD, whichever is higher.",
      },
      {
        scalingType: 'flat',
        name: 'Combat Maneuver Defense vs. Trip (Ex)',
        description: 'As an eight-legged creature, gains a bonus to CMD against trip attempts.',
      },
      {
        scalingType: 'flat',
        name: 'Undersized Weapons (Ex)',
        description:
          "The drider uses weapons as if one size smaller than its actual size category.",
      },
      {
        scalingType: 'flat',
        name: 'Racial Skill Bonus (Ex)',
        description: '+4 racial bonus on Stealth checks.',
      },
    ],
    spellLikeAbilities: [
      { spellName: 'detect chaos', frequency: 'constant', casterLevelFormula: 'equal to HD' },
      { spellName: 'detect good', frequency: 'constant', casterLevelFormula: 'equal to HD' },
      { spellName: 'detect law', frequency: 'constant', casterLevelFormula: 'equal to HD' },
      { spellName: 'detect magic', frequency: 'constant', casterLevelFormula: 'equal to HD' },
      { spellName: 'dancing lights', frequency: 'at_will', casterLevelFormula: 'equal to HD', dcAbility: 'CHA' },
      { spellName: 'darkness', frequency: 'at_will', casterLevelFormula: 'equal to HD', dcAbility: 'CHA' },
      { spellName: 'faerie fire', frequency: 'at_will', casterLevelFormula: 'equal to HD', dcAbility: 'CHA' },
      { spellName: 'clairaudience/clairvoyance', frequency: '1/day', casterLevelFormula: 'equal to HD', dcAbility: 'CHA' },
      { spellName: 'deeper darkness', frequency: '1/day', casterLevelFormula: 'equal to HD', dcAbility: 'CHA' },
      { spellName: 'dispel magic', frequency: '1/day', casterLevelFormula: 'equal to HD', dcAbility: 'CHA' },
      { spellName: 'levitate', frequency: '1/day', casterLevelFormula: 'equal to HD', dcAbility: 'CHA' },
      { spellName: 'suggestion', frequency: '1/day', casterLevelFormula: 'equal to HD', dcAbility: 'CHA' },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Green Ronin Publishing',
      publication: 'Advanced Bestiary',
    },
    visibility: 'global',
    rev: 1,
  },

  // 138. Drowblood
  {
    id: 'drowblood',
    name: 'Drowblood',
    description:
      'A drowblood creature has drow heritage flowing through its veins, granting it darkvision, spell resistance, and signature drow spell-like abilities. It is considered part drow and part elf for all race-specific purposes.',
    crAdjustment: 1,
    acquisitionType: 'inherited',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'special', description: 'Living, intelligent, corporeal, non-drow creature.' },
    ],
    subtypeGains: ['elf'],
    abilityScoreChanges: [
      { ability: 'DEX', change: 2 },
      { ability: 'CON', change: -2, minimum: 1 },
      { ability: 'INT', change: 2 },
    ],
    immunities: ['sleep'],
    srFormula: 'max(base SR, HD + 9)',
    features: [
      {
        scalingType: 'flat',
        name: 'Darkvision (Ex)',
        description:
          'Gains darkvision 60 ft., or existing darkvision increases by 20 ft. (maximum 120 ft.).',
      },
      {
        scalingType: 'flat',
        name: 'Will Save Bonus (Ex)',
        description: '+1 racial bonus on Will saving throws against spells and spell-like abilities.',
      },
      {
        scalingType: 'flat',
        name: 'Drow Blood (Ex)',
        description:
          "Considered a member of the base creature's race, the drow race, and the elf race simultaneously for the purposes of race-specific abilities, spells, and effects.",
      },
      {
        scalingType: 'flat',
        name: 'Racial Skill Bonus (Ex)',
        description: '+2 racial bonus on Perception checks.',
      },
    ],
    spellLikeAbilities: [
      { spellName: 'dancing lights', frequency: '1/day', casterLevelFormula: 'equal to total character level', dcAbility: 'CHA' },
      { spellName: 'darkness', frequency: '1/day', casterLevelFormula: 'equal to total character level', dcAbility: 'CHA' },
      { spellName: 'faerie fire', frequency: '1/day', casterLevelFormula: 'equal to total character level', dcAbility: 'CHA' },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Green Ronin Publishing',
      publication: 'Advanced Bestiary',
    },
    visibility: 'global',
    rev: 1,
  },

  // 139. Drunk
  {
    id: 'drunk',
    name: 'Drunk',
    description:
      'The drunk template represents the mechanical penalties of intoxication on a creature. It is a simple template that applies across-the-board penalties to combat and skill performance, reflecting the impaired state of an inebriated humanoid or monstrous humanoid.',
    crAdjustment: -1,
    acquisitionType: 'acquired',
    isSimpleTemplate: true,
    prerequisites: [
      {
        type: 'creature_type',
        allowed: ['humanoid', 'monstrous humanoid'],
      },
      {
        type: 'special',
        description: 'Must have consumed sufficient alcohol to be intoxicated.',
      },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Intoxication Penalties (Ex)',
        description:
          '-2 penalty on attack rolls, weapon damage rolls, saving throws, skill checks, and ability checks. The drunk creature also gains the sickened condition.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Jon Brazer Enterprises',
      publication: 'Book of Beasts: Monsters of the River Nations',
    },
    visibility: 'global',
    rev: 1,
  },

  // 140. Dunesage
  {
    id: 'dunesage',
    name: 'Dunesage',
    description:
      'A dunesage is an intelligent creature attuned to the deep desert and the earth itself. It has absorbed ancient knowledge from the sands, gaining earth-glide ability, tremorsense, and a growing suite of divination and earth-manipulation spell-like abilities as it ages.',
    crAdjustment: 1,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'special', description: 'Corporeal creature with Intelligence score of 10 or higher.' },
    ],
    subtypeGains: ['earth'],
    abilityScoreChanges: [
      { ability: 'DEX', change: -2 },
      { ability: 'CON', change: 2 },
      { ability: 'INT', change: 4 },
      { ability: 'CHA', change: 2 },
    ],
    naturalArmorChange: 3,
    damageReduction: { scalingType: 'flat', value: 5, bypassedBy: '-' },
    resistances: [{ energyType: 'acid', value: 5 }],
    features: [
      {
        scalingType: 'flat',
        name: 'Tremorsense 60 ft. (Ex)',
        description: 'The dunesage gains tremorsense with a range of 60 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Burrow Speed (Ex)',
        description: "Gains a burrow speed equal to its base movement rate.",
      },
      {
        scalingType: 'flat',
        name: 'Earth Glide (Ex)',
        description: 'The dunesage can glide through any earthen material as if it were air.',
      },
      {
        scalingType: 'flat',
        name: 'Initiative Bonus (Ex)',
        description: 'Gains a competence bonus to Initiative equal to its Intelligence modifier.',
      },
      {
        scalingType: 'flat',
        name: 'Change Shape (Su)',
        description:
          'The dunesage can transform into a same-sized earth elemental as a polymorph effect using elemental body effects.',
      },
      {
        scalingType: 'flat',
        name: 'Spell-Like Abilities by HD (Sp)',
        description:
          '1-4 HD: constant endure elements, 1/day augury. 5-8 HD: 3/day stone call, 1/day share memory. 9-12 HD: 1/day divination, shifting sands. 13-16 HD: 1/day legend lore, move earth. 17+ HD: 1/day foresight, scouring winds. Caster level equals HD; DCs are Charisma-based.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Green Ronin Publishing',
      publication: 'Advanced Bestiary',
    },
    visibility: 'global',
    rev: 1,
  },

  // 141. Dust Creature
  {
    id: 'dust-creature',
    name: 'Dust Creature',
    description:
      'A dust creature is a native outsider formed from the union of an elemental spirit of air and earth. Partially incorporeal in nature, it rides the wind and blasts foes with abrasive clouds of grit, blinding them and blanketing the battlefield in obscuring haze.',
    crAdjustment: 1,
    acquisitionType: 'either',
    isSimpleTemplate: false,
    typeChange: 'outsider',
    subtypeGains: ['air', 'earth', 'elemental', 'extraplanar'],
    abilityScoreChanges: [
      { ability: 'STR', change: -4, minimum: 1 },
      { ability: 'DEX', change: 2 },
      { ability: 'CON', change: 2 },
      { ability: 'CHA', change: -2, minimum: 1 },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Elemental Immunities (Ex)',
        description: 'Gains all immunities granted by the air and earth elemental subtypes.',
      },
      {
        scalingType: 'flat',
        name: 'Air Mastery (Ex)',
        description:
          'Airborne creatures take a -1 penalty on attack and damage rolls against the dust creature.',
      },
      {
        scalingType: 'flat',
        name: 'Dust Blast (Su)',
        description:
          'Once per 1d4 rounds, the dust creature can emit a 5-foot-wide, 20-foot-long line of grit dealing 1d4 slashing damage per 2 Hit Dice (minimum 1d4, maximum 20d4). A Reflex save halves the damage.',
      },
      {
        scalingType: 'flat',
        name: 'Exude Dust (Su)',
        description:
          'As a free action, the dust creature creates a 10-foot-spread cloud functioning as obscuring mist. Creatures in the cloud that fail a Fortitude save are blinded; vision returns 1d4 rounds after leaving the cloud.',
      },
      {
        scalingType: 'flat',
        name: 'Air Breather (Ex)',
        description: 'Can breathe air regardless of the base creature type.',
      },
      {
        scalingType: 'flat',
        name: 'Airborne (Su)',
        description: 'The dust creature can use air walk and feather fall at will.',
      },
      {
        scalingType: 'flat',
        name: 'Racial Skill Bonus (Ex)',
        description: '+4 racial bonus on Stealth checks.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Green Ronin Publishing',
      publication: 'Advanced Bestiary',
    },
    visibility: 'global',
    rev: 1,
  },

  // 142. Echohusk
  {
    id: 'echohusk',
    name: 'Echohusk',
    description:
      'An echohusk is a mindless undead shell created when a psychic attack shatters a creature\'s mind while leaving the body animated. The resulting creature is an obedient psychic servitor that retains a residual psychic echo — painful to those who attempt to read or control it.',
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    typeChange: 'undead',
    abilityScoreChanges: [
      { ability: 'STR', change: 2 },
      { ability: 'INT', change: 0, condition: 'Intelligence score removed (mindless undead)' },
      { ability: 'WIS', change: 0, condition: 'Wisdom becomes 10' },
      { ability: 'CHA', change: 0, condition: 'Charisma becomes 14' },
      { ability: 'CON', change: 0, condition: 'Constitution score removed (undead)' },
    ],
    abilityScoreChangeNote:
      'Constitution and Intelligence removed. Wisdom becomes 10, Charisma becomes 14. Mindless undead.',
    features: [
      {
        scalingType: 'flat',
        name: 'Natural Armor by Size (Ex)',
        description:
          'Natural armor bonus scales by size: Tiny or smaller +0, Small +1, Medium +2, Large +3, Huge +4, Gargantuan +7, Colossal +10.',
      },
      {
        scalingType: 'flat',
        name: 'Psychic Servitude (Su)',
        description:
          'The echohusk is automatically commanded by the creature that created it via psychic attacks and does not count against that creature\'s normal undead control limits.',
      },
      {
        scalingType: 'flat',
        name: 'Shattered Psyche (Su)',
        description:
          'Any creature that strikes the echohusk must succeed at a Will save or take 1 point of Charisma damage and become dazed for 1 round. The DC is Charisma-based.',
      },
      {
        scalingType: 'flat',
        name: 'Vulnerability to Psychic Spells (Ex)',
        description: 'The echohusk takes a -4 penalty on saving throws against psychic spells.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Campaign Setting: Occult Bestiary',
    },
    visibility: 'global',
    rev: 1,
  },

  // 143. Ectoplasmic Creature
  {
    id: 'ectoplasmic-creature',
    name: 'Ectoplasmic Creature',
    description:
      'An ectoplasmic creature is a mindless undead composed of animated psychic residue. It can phase through solid walls, leaving a trail of silvery mucus, and its touch fills living creatures with supernatural dread. Though mindless and instinct-driven, it is exceptionally difficult to destroy outright.',
    crAdjustment: 1,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'special', description: 'Corporeal creature; template cannot be applied to undead.' },
    ],
    typeChange: 'undead',
    abilityScoreChanges: [
      { ability: 'STR', change: 2 },
      { ability: 'CHA', change: 2 },
      { ability: 'CON', change: 0, condition: 'Constitution score removed (undead)' },
      { ability: 'INT', change: 0, condition: 'Intelligence score removed (mindless undead)' },
      { ability: 'WIS', change: 0, condition: 'Wisdom becomes 10' },
    ],
    abilityScoreChangeNote:
      'Constitution and Intelligence removed. Wisdom becomes 10. Mindless undead.',
    damageReduction: { scalingType: 'flat', value: 5, bypassedBy: 'slashing' },
    features: [
      {
        scalingType: 'flat',
        name: 'Natural Armor by Size (Ex)',
        description:
          'Natural armor bonus scales by size: Tiny or smaller +0, Small +1, Medium +2, Large +3, Huge +5, Gargantuan +7, Colossal +8.',
      },
      {
        scalingType: 'flat',
        name: 'Phase Lurch (Su)',
        description:
          'The ectoplasmic creature can pass through walls and material obstacles at half speed. Any creature or object it passes through is coated in silvery mucus that persists for 1 minute.',
      },
      {
        scalingType: 'flat',
        name: 'Air Walk (Su)',
        description: 'The ectoplasmic creature benefits from a constant air walk effect.',
      },
      {
        scalingType: 'flat',
        name: 'Horrifying Ooze (Su)',
        description:
          "Any creature struck by the ectoplasmic creature's slam attack must succeed at a Will save or be shaken for 1d4 rounds. The DC is Charisma-based.",
      },
      {
        scalingType: 'flat',
        name: 'Bonus Feat',
        description: 'The ectoplasmic creature gains Toughness as a bonus feat.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Roleplaying Game Bestiary 4',
    },
    visibility: 'global',
    rev: 1,
  },

  // 144. Egregore Master
  {
    id: 'egregore-master',
    name: 'Egregore Master',
    description:
      'An egregore master is a gestalt psychic entity formed when at least 15 cultists channel their collective will into a shared consciousness. As more worshippers join, it grows in size, power, and psychic spell capacity — a terrifying manifestation of mass belief made manifest.',
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'min_hd', minimum: 15 },
      {
        type: 'special',
        description:
          'Requires a ritual lasting one day and costing 1,000 gp per HD, with a minimum of 15 cultists contributing their will.',
      },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Natural Armor (Ex)',
        description: 'Natural armor bonus equals half the egregore master\'s Hit Dice.',
      },
      {
        scalingType: 'flat',
        name: 'Size Increase by HD (Ex)',
        description:
          'The egregore master becomes Huge at 15 HD, Gargantuan at 20 HD, and Colossal at 25+ HD.',
      },
      {
        scalingType: 'flat',
        name: 'Additional Tentacle Attacks (Ex)',
        description:
          'Gains one additional light tentacle attack for every 3 Hit Dice it possesses beyond 13.',
      },
      {
        scalingType: 'flat',
        name: 'Psychic Magic (Su)',
        description:
          'For every 2 HD above 13, the egregore master adds one spell to its psychic magic list (maximum spell level = half total HD) and increases its maximum psychic energy by that spell\'s level.',
      },
      {
        scalingType: 'flat',
        name: 'CR Scaling',
        description:
          'For every 2 Hit Dice above 13 the egregore master possesses, increase its CR by 1.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Roleplaying Game Bestiary 5',
    },
    visibility: 'global',
    rev: 1,
  },

  // 145. Eldritch (CR varies)
  {
    id: 'eldritch',
    name: 'Eldritch',
    description:
      'The eldritch template represents creatures touched by cosmic forces beyond the known planes or from deep space. Using an eldritch point economy, each creature customizes its horrifying traits — from ability damage and disease to incorporeal form and maddening presence — making every eldritch creature uniquely terrible.',
    acquisitionType: 'either',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'special', description: 'Any living creature. Must be non-good alignment.' },
    ],
    typeChange: 'aberration or outsider (extraplanar)',
    typeChangeNote:
      "Becomes aberration if from deep space, or outsider with extraplanar subtype if from beyond the known planes. Racial HD convert to d8s (aberration) or d10s (outsider).",
    features: [
      {
        scalingType: 'flat',
        name: 'Eldritch Points (EP) Economy (Ex)',
        description:
          'Gains 1 eldritch point per 2 HD (minimum 1). Spends EP to purchase special abilities. Abilities cost -1 to -4 EP each; some also adjust CR. Examples: ability damage/drain (-2 to -3 EP), poison/disease (-1 EP), devour soul (-2 EP), DR (-1 EP), energy resistance (-1 EP), SR (-2 EP), regeneration (-2 EP), fast healing (-1 EP), bonus feats (-2 EP), AC bonus (-1 to -2 EP), incorporeal form (-2 EP), additional movement modes (-1 EP), ability score increase (-1 EP).',
      },
      {
        scalingType: 'flat',
        name: 'Natural Attacks (Ex)',
        description:
          'If the base creature lacks natural attacks, gains two tentacle or claw attacks dealing damage as a creature one size larger.',
      },
      {
        scalingType: 'flat',
        name: 'Maddening Presence (optional Su)',
        description:
          'Optional ability costing -2 EP (+1 CR). Within 30 feet, creatures must succeed on a Will save (Charisma-based DC) or be driven permanently insane.',
      },
      {
        scalingType: 'flat',
        name: 'Spellcasting (optional Su)',
        description:
          'Optional ability costing -4 EP (+2 CR). Grants spellcasting as cleric, druid, oracle, sorcerer, witch, or wizard.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Green Ronin Publishing',
      publication: 'Advanced Bestiary',
    },
    visibility: 'global',
    rev: 1,
  },

  // 146. Eldritch Creature (+1 CR)
  {
    id: 'eldritch-creature',
    name: 'Eldritch Creature',
    description:
      'An eldritch creature is a living, corporeal being infused with alien cosmic energy. It fights on even at negative hit points before dissolving into unidentifiable goo, and can exist safely in the void of space. A simple template applicable to any living corporeal creature.',
    crAdjustment: 1,
    acquisitionType: 'either',
    isSimpleTemplate: true,
    subtypeGains: ['chaotic'],
    srFormula: 'new CR + 5',
    features: [
      {
        scalingType: 'flat',
        name: 'Darkvision 60 ft. (Ex)',
        description:
          'Gains darkvision 60 feet. If the creature already has darkvision, its range doubles.',
      },
      {
        scalingType: 'hd_threshold',
        name: 'Energy Resistance (Ex)',
        description: 'Gains resistance to acid and cold based on HD: 5 (1-4 HD), 10 (5-10 HD), 15 (11+ HD).',
        minimumHD: 1,
      },
      {
        scalingType: 'hd_threshold',
        name: 'Damage Reduction (Ex)',
        description:
          'Gains DR based on HD: none (1-4 HD), 5/magic (5-10 HD), 10/magic (11+ HD).',
        minimumHD: 5,
      },
      {
        scalingType: 'flat',
        name: 'Horrific Death (Ex)',
        description:
          'Upon first reaching negative hit points, each creature within the eldritch creature\'s reach takes 1d6 + HD acid damage (no save). While at negative HP, the creature gains bonuses to attacks and damage. Upon death, it dissolves into a pool of unidentifiable goo.',
      },
      {
        scalingType: 'flat',
        name: 'Ferocity (Ex)',
        description: 'The eldritch creature continues fighting even when below 0 hit points.',
      },
      {
        scalingType: 'flat',
        name: 'Voidborn (Ex)',
        description:
          'The eldritch creature can safely exist in space or other hostile extraplanar environments.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'AAW Games LLC',
      publication: 'Aventyr Bestiary',
    },
    visibility: 'global',
    rev: 1,
  },

  // 147. Electric Creature
  {
    id: 'electric-creature',
    name: 'Electric Creature',
    description:
      'An electric creature is an incorporeal outsider formed from pure electrical energy. Its very body conducts and generates lightning, and it can chain electricity between multiple foes or teleport along lightning strike paths.',
    crAdjustment: 2,
    acquisitionType: 'inherited',
    isSimpleTemplate: false,
    prerequisites: [
      {
        type: 'special',
        description: 'Cannot be applied to creatures with the water or aquatic subtypes.',
      },
    ],
    typeChange: 'outsider',
    subtypeGains: ['elemental', 'extraplanar', 'incorporeal'],
    abilityScoreChanges: [
      { ability: 'DEX', change: 4 },
      { ability: 'STR', change: 0, condition: 'Strength score removed (incorporeal)' },
    ],
    abilityScoreChangeNote:
      'Strength score removed (incorporeal). Gains deflection bonus to AC equal to Charisma bonus (minimum +1).',
    immunities: ['electricity'],
    features: [
      {
        scalingType: 'flat',
        name: 'Water Vulnerability (Ex)',
        description:
          'Takes 1d8 damage per gallon of water poured on it; takes 1d10 damage per round if submerged.',
      },
      {
        scalingType: 'flat',
        name: 'Chain Lightning Strike (Su)',
        description:
          'Once per day, the electric creature can use chain lightning as a spell-like ability with no damage cap.',
      },
      {
        scalingType: 'flat',
        name: 'Electric Burst (Su)',
        description:
          '3/day, the electric creature can release a 20-foot radius burst of electricity.',
      },
      {
        scalingType: 'flat',
        name: 'Electric Spellcasting (Su)',
        description: 'Electricity-based spells are cast at +1 caster level.',
      },
      {
        scalingType: 'flat',
        name: 'Electric Strikes (Ex)',
        description:
          "The electric creature's threat range doubles against targets wearing metal armor.",
      },
      {
        scalingType: 'flat',
        name: 'Lightning Strike (Su)',
        description:
          '1/day plus one additional use per 5 Hit Dice, the electric creature can make a targeted lightning strike against a single foe.',
      },
      {
        scalingType: 'flat',
        name: 'Electric Body (Ex)',
        description:
          "Any creature that strikes the electric creature with a melee attack takes 1d6 electricity damage (1d8 if using metallic weapons or wearing metal armor).",
      },
      {
        scalingType: 'flat',
        name: 'Electric Leap (Su)',
        description:
          'The electric creature can teleport along the path of its own lightning strikes.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Green Ronin Publishing',
      publication: 'Advanced Bestiary',
    },
    visibility: 'global',
    rev: 1,
  },

  // 148. Element-Infused Creature (CR +1) [3pp]
  {
    id: 'element-infused-creature',
    name: 'Element-Infused Creature',
    description:
      'An element-infused creature gains the traits of a chosen elemental plane — air, earth, fire, or water — through prolonged exposure or magical infusion. Each element grants a distinct set of movement, defensive, and offensive capabilities drawn from a menu of elemental powers.',
    crAdjustment: 1,
    acquisitionType: 'either',
    isSimpleTemplate: false,
    subtypeGains: ['air, earth, fire, or water (choose one)'],
    features: [
      {
        scalingType: 'flat',
        name: 'Elemental Body (Ex)',
        description:
          'The element-infused creature has a 25% chance to negate bleed, precision damage, poison, paralysis, sleep, and stunning effects.',
      },
      {
        scalingType: 'flat',
        name: 'Ability Score Adjustments by Element',
        description:
          'Air: Str -4, Dex +4, Con -2, Int -2, Wis +2, Cha +2. Earth: Str +4, Dex -2, Con +2, Int -2, Wis +2, Cha -4. Fire: Str -2, Dex +2, Con -2, Int +4, Wis -4, Cha +2. Water: Str +2, Dex -2, Con +4, Int -4, Wis +2, Cha -2.',
      },
      {
        scalingType: 'flat',
        name: 'Elemental Senses (Ex)',
        description:
          'Air: blindsight 30 ft. Earth: tremorsense 30 ft. Fire: low-light vision. Water: tremorsense 30 ft.',
      },
      {
        scalingType: 'flat',
        name: 'Elemental Speed (Ex)',
        description:
          'Air: fly speed equal to highest base speed (perfect maneuverability). Earth: burrow speed (half speed through rock). Fire: base speed +10 ft. Water: swim speed equal to highest base speed.',
      },
      {
        scalingType: 'flat',
        name: 'Bonus Feat by Element',
        description:
          'Air: Lightning Reflexes. Earth: Iron Will. Fire: Quick Draw. Water: Great Fortitude.',
      },
      {
        scalingType: 'flat',
        name: 'Elemental Special Abilities',
        description:
          'Air: Wind Blast (60-ft cone, 1d4 round recharge), Gaseous Form (1/day). Earth: Barrage (30-ft radius, 1d4 round recharge), Earth\'s Armor (+2 natural armor). Fire: Fire Breath (30-ft cone, 1d4 round recharge), Heat (+1d6 fire damage on melee attacks), Fire Healing, Firewalk. Water: Waterball (ranged touch attack), Water Breathing (1/day).',
      },
      {
        scalingType: 'flat',
        name: 'Elemental Mastery',
        description:
          'Gains combat bonuses in favourable terrain/conditions associated with its element, with corresponding penalties in opposing conditions.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Green Ronin Publishing',
      publication: 'Advanced Bestiary',
    },
    visibility: 'global',
    rev: 1,
  },

  // 149. Element-Infused Creature (CR +varies) [official]
  {
    id: 'element-infused-creature-2',
    name: 'Element-Infused Creature (CR +varies)',
    description:
      'This Paizo variant of the element-infused creature template converts the base creature into a native outsider with a chosen elemental subtype. It uses a modular ability selection system with movement, defensive, and offensive powers chosen from HD-gated menus.',
    acquisitionType: 'either',
    isSimpleTemplate: false,
    typeChange: 'outsider (native)',
    subtypeGains: ['air, earth, fire, or water (choose one)'],
    abilityScoreChangeNote:
      '+4 to two ability scores, +2 to two others, -2 to one; specific scores depend on element chosen.',
    features: [
      {
        scalingType: 'flat',
        name: 'CR Adjustment by HD',
        description: 'CR +1 for creatures with 9 or fewer HD; CR +2 for creatures with 10 or more HD.',
      },
      {
        scalingType: 'flat',
        name: 'Darkvision 60 ft. (Ex)',
        description: 'Gains darkvision up to 60 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Elemental Language',
        description:
          'Gains the appropriate elemental language (Aquan, Auran, Ignan, or Terran) if Intelligence is 3 or higher.',
      },
      {
        scalingType: 'flat',
        name: 'Modular Ability Selection (Ex/Su)',
        description:
          'Selects abilities by HD from movement, defensive, and offensive menus. 1-3 HD: 1/1/1. 4-6 HD: 1/1/1+1 bonus. 7-9 HD: 1/2/1+1 bonus. 10-12 HD: 1/2/1+2 bonus. 13-15 HD: 1/2/2+2 bonus. 16-18 HD: 1/2/2+3 bonus. 19+ HD: 1/3/2+3 bonus. Single-element creatures gain one additional bonus ability.',
      },
      {
        scalingType: 'flat',
        name: 'Sample Defensive Abilities',
        description:
          'DR 2/— (or 5/— at 10+ HD), energy immunity (requires 10+ existing resistance), energy resistance 10, evasion (air/fire), fiery blood (fire), fortification (50%), improved natural armor +2 (or +3 earth at 10+ HD), indistinct form 20% miss chance (air/water), stability +4 CMD (earth/water).',
      },
      {
        scalingType: 'flat',
        name: 'Sample Movement Abilities',
        description:
          'Burrow (earth), earth glide (earth, 1 min/HD or at-will if selected twice), flight (average), improved quickness 3/day (fire), puddle form 1/day (water), quickness +10 speed (fire), swim speed with amphibious (water).',
      },
      {
        scalingType: 'flat',
        name: 'Sample Offensive Abilities',
        description:
          'Breath weapon (15-ft cone/30-ft line, 1d6/3 HD, 1/minute), burn (fire), energy attacks +1d6/10 HD, gusting strike free bull rush (air), toppling strike trip attempt (earth/water).',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Roleplaying Game (d20PFSRD)',
    },
    visibility: 'global',
    rev: 1,
  },

  // 150. Elemental Infusion Templates
  {
    id: 'elemental-infusion-templates',
    name: 'Elemental Infusion Templates',
    description:
      'The Elemental Infusion Templates come in three tiers — Minor (CR +0), Moderate (CR +1), and Major (CR +2) — each granting progressively stronger elemental traits for air, earth, fire, or water. Unlike full elemental templates, infused creatures retain their original type and still eat, breathe, and sleep normally.',
    acquisitionType: 'either',
    isSimpleTemplate: false,
    features: [
      {
        scalingType: 'flat',
        name: 'Minor Infusion (CR +0)',
        description:
          'Immunities: sleep effects. +2 bonus on saves vs. poison. Air: glide and obscuring mist (1/day), +1 deflection AC. Earth: acid resistance 5, mighty fist of the earth (1/day). Fire: fire resistance 5, flare burst (1/day). Water: swim speed equal to movement speed, air bubble (1/day).',
      },
      {
        scalingType: 'flat',
        name: 'Moderate Infusion (CR +1)',
        description:
          'Immunities: poison, sleep, stun. Endure elements (1/day). Air: air mastery, flight (good), gust of wind and obscuring mist (3/day), +2 deflection AC. Earth: earth mastery, burrow speed, acid resistance 5, binding earth and mighty fist (3/day). Fire: burn ability (reduced damage), fire resistance 5, burning gaze and flare burst (3/day). Water: water mastery, water breathing, swim +10 ft, drench (3/day).',
      },
      {
        scalingType: 'flat',
        name: 'Major Infusion (CR +2)',
        description:
          'Immunities: poison, sleep, stun. Permanent endure elements. Air: air mastery, whirlwind (1/day), perfect flight +10 ft, obscuring mist (at will), gust of wind (3/day), +4 deflection AC. Earth: earth mastery, earth glide, acid resistance 10, mighty fist (at will), binding earth (3/day). Fire: fire immunity, full-size burn, flare burst (at will), burning gaze (3/day). Water: water mastery, water breathing, swim +30 ft, drench (at will), vortex (1/day).',
      },
      {
        scalingType: 'flat',
        name: 'Retained Biology',
        description:
          'Infused living creatures still must eat, breathe, and sleep based on original creature type. They retain their original type and do not gain immunity to critical hits, flanking, or precision damage.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Rite Publishing LLC',
      publication: 'Player Paraphernalia #20',
    },
    visibility: 'global',
    rev: 1,
  },
];
