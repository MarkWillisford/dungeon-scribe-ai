// Batch 013 | first: 'Necrophage Carrier (CR +3)' | last: 'Plague Bearer (CR +2)' | count: 25

import { TemplateDefinition } from '../types';

export const TEMPLATES_BATCH_013: TemplateDefinition[] = [
  // 301. Necrophage Carrier (CR +3)
  {
    id: 'necrophage-carrier',
    name: 'Necrophage Carrier',
    description:
      'A living organism infested by a necrophage — a parasite that reconstitutes organic material into new forms. The carrier variant is bulked up with two massive scythe-like bone-blade appendages and releases necrophage swarms upon death or as a deliberate act of self-harm.',
    crAdjustment: 3,
    acquisitionType: 'acquired',
    isSimpleTemplate: true,
    prerequisites: [
      { type: 'special', description: 'Living, corporeal creature' },
    ],
    typeChange: 'aberration',
    typeChangeNote: 'Recalculate feats, skills, saves, and hit points. All racial HD convert to d8s; add 2 additional racial HD.',
    abilityScoreChanges: [
      { ability: 'STR', change: 4 },
      { ability: 'DEX', change: -2 },
      { ability: 'CON', change: 4 },
      { ability: 'CHA', change: -4 },
    ],
    abilityScoreChangeNote: 'Intelligence is lost entirely — creature becomes mindless.',
    naturalArmorChange: 4,
    damageReduction: { scalingType: 'flat', value: 5, bypassedBy: '— (from the void)' },
    immunities: ['cold', 'disease', 'mind-affecting effects', 'poison'],
    features: [
      {
        scalingType: 'flat',
        name: 'Darkvision 60 ft.',
        description: 'The necrophage carrier gains darkvision to a range of 60 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Scythe Claws (Ex)',
        description:
          'The carrier gains two scythe claws (1d8 each for a Medium creature, ×3 critical multiplier). All movement modes are reduced by 10 feet (minimum 10 ft.); the creature gains a climb speed of 10 feet if it lacked one.',
      },
      {
        scalingType: 'flat',
        name: 'Release the Swarm (Ex)',
        description:
          'Upon death, or as a full-round action that deals self-damage, the necrophage carrier releases 1d4 necrophage swarms.',
      },
      {
        scalingType: 'flat',
        name: 'Limb Weakness',
        description: 'The carrier has a vulnerability to attacks that target or sever its limbs (exact mechanics defined by GM).',
      },
      {
        scalingType: 'flat',
        name: 'Bonus Feat',
        description: 'Gains Weapon Focus for its natural weapons.',
      },
    ],
    sourceInfo: { type: 'third_party', publisher: 'Orphaned Bookworm Productions', publication: 'Contact Other Plane: Dead Void' },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 302. Necrophage Hunter (CR +4)
  {
    id: 'necrophage-hunter',
    name: 'Necrophage Hunter',
    description:
      'A living organism infested by a necrophage — a parasite that infests corpses and reconstitutes organic material into new forms. The hunter is a powerful, regenerative killer that retains the host\'s racial HD but strips away its class levels and special attacks. It is enhanced with fast healing and regrows severed limbs.',
    crAdjustment: 4,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'special', description: 'Living, corporeal creature' },
    ],
    typeChange: 'aberration',
    typeChangeNote: 'Recalculate feats, skills, saves, and hit points. All racial HD become d8s; add 4 racial HD. Base creature loses all class levels and special attacks.',
    abilityScoreChanges: [
      { ability: 'STR', change: 6 },
      { ability: 'DEX', change: 2 },
      { ability: 'CON', change: 4 },
      { ability: 'CHA', change: -4 },
    ],
    abilityScoreChangeNote: 'Intelligence is lost entirely — creature becomes mindless.',
    naturalArmorChange: 6,
    damageReduction: { scalingType: 'flat', value: 5, bypassedBy: '— (from the void)' },
    immunities: ['cold', 'disease', 'mind-affecting effects', 'poison'],
    fastHealing: '4',
    features: [
      {
        scalingType: 'flat',
        name: 'Darkvision 60 ft.',
        description: 'The necrophage hunter gains darkvision to a range of 60 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Scythe Claws (Ex)',
        description:
          'The hunter gains two scythe claws (1d8 damage, ×3 critical multiplier for a Medium creature) in addition to the base creature\'s natural attacks. It gains a climb speed of 10 feet if it lacked one.',
      },
      {
        scalingType: 'flat',
        name: 'Regrow Limbs (Ex)',
        description: 'Severed limbs regrow in 1d4 rounds.',
      },
      {
        scalingType: 'flat',
        name: 'Limb Weakness',
        description: 'The hunter has a vulnerability to attacks that target or sever its limbs (exact mechanics defined by GM).',
      },
      {
        scalingType: 'flat',
        name: 'Bonus Feat',
        description: 'Gains Weapon Focus for its natural weapons.',
      },
    ],
    sourceInfo: { type: 'third_party', publisher: 'Orphaned Bookworm Productions', publication: 'Contact Other Plane: Dead Void' },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 303. Necrophage Infector (CR +2)
  {
    id: 'necrophage-infector',
    name: 'Necrophage Infector',
    description:
      'A living organism infested by a necrophage parasite, twisted into a vector that spreads the infection. The infector loses all of the base creature\'s natural attacks and gains a piercing proboscis, which it uses to kill and reanimate victims as new necrophage creatures.',
    crAdjustment: 2,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'special', description: 'Living, corporeal creature' },
    ],
    typeChange: 'aberration',
    typeChangeNote: 'Recalculate feats, skills, saves, and hit points. All racial HD convert to d8s; add 2 additional racial HD.',
    abilityScoreChanges: [
      { ability: 'STR', change: 4 },
      { ability: 'CON', change: 2 },
      { ability: 'CHA', change: -4 },
    ],
    abilityScoreChangeNote: 'Intelligence is lost entirely — creature becomes mindless.',
    naturalArmorChange: 4,
    damageReduction: { scalingType: 'flat', value: 5, bypassedBy: '— (from the void)' },
    immunities: ['cold', 'disease', 'mind-affecting effects', 'poison'],
    features: [
      {
        scalingType: 'flat',
        name: 'Darkvision 60 ft.',
        description: 'The necrophage infector gains darkvision to a range of 60 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Proboscis (Ex)',
        description:
          'Loses all previous natural attacks; gains a 1d6 proboscis (Medium size) that deals damage with 1-1/2 × Strength modifier and a ×3 critical multiplier. The creature gains a climb speed of 10 feet if it lacked one.',
      },
      {
        scalingType: 'flat',
        name: 'Infect with Necrophage (Ex)',
        description:
          'If the necrophage kills a creature with its proboscis, or uses its proboscis on a corpse, the creature is infected with the necrophage and rises with a necrophage creature template.',
      },
      {
        scalingType: 'flat',
        name: 'Limb Weakness',
        description: 'The infector has a vulnerability to attacks that target or sever its limbs (exact mechanics defined by GM).',
      },
      {
        scalingType: 'flat',
        name: 'Bonus Feat',
        description: 'Gains Weapon Focus for its natural weapons.',
      },
    ],
    sourceInfo: { type: 'third_party', publisher: 'Orphaned Bookworm Productions', publication: 'Contact Other Plane: Dead Void' },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 304. Necrophage Leaper (CR +2)
  {
    id: 'necrophage-leaper',
    name: 'Necrophage Leaper',
    description:
      'An agile hunter created by necrophage infestation that uses its ability to climb on all surfaces and leap long distances to close the distance on foes. It retains any bites from the base creature and gains a scorpion-like stinger, plus exceptional jumping ability.',
    crAdjustment: 2,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'special', description: 'Living, corporeal creature' },
    ],
    typeChange: 'aberration',
    typeChangeNote: 'Recalculate feats, skills, saves, and hit points. All racial HD become d8s; add 1 racial HD. Loses all natural attacks except bites.',
    abilityScoreChanges: [
      { ability: 'STR', change: 4 },
      { ability: 'DEX', change: 4 },
      { ability: 'CON', change: 2 },
      { ability: 'CHA', change: -4 },
    ],
    abilityScoreChangeNote: 'Intelligence is lost entirely — creature becomes mindless.',
    naturalArmorChange: 4,
    damageReduction: { scalingType: 'flat', value: 5, bypassedBy: '— (from the void)' },
    immunities: ['cold', 'disease', 'mind-affecting effects', 'poison'],
    features: [
      {
        scalingType: 'flat',
        name: 'Darkvision 60 ft.',
        description: 'The necrophage leaper gains darkvision to a range of 60 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Stinger (Ex)',
        description:
          'Gains a scorpion-like stinger dealing 1d8 damage (1-1/2 × Strength modifier). The creature gains a climb speed of 30 feet if it lacked one.',
      },
      {
        scalingType: 'flat',
        name: 'Leaping Assault (Ex)',
        description:
          'Gains a +18 racial bonus on Acrobatics checks made to jump. Standing long jumps are treated as if the creature had a running start.',
      },
      {
        scalingType: 'flat',
        name: 'Limb Weakness',
        description: 'The leaper has a vulnerability to attacks that target or sever its limbs (exact mechanics defined by GM).',
      },
      {
        scalingType: 'flat',
        name: 'Bonus Feat',
        description: 'Gains Weapon Focus for its natural weapons.',
      },
    ],
    sourceInfo: { type: 'third_party', publisher: 'Orphaned Bookworm Productions', publication: 'Contact Other Plane: Dead Void' },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 305. Necrophage Lurker (CR +2)
  {
    id: 'necrophage-lurker',
    name: 'Necrophage Lurker',
    description:
      'A specialized stalker-abomination created by necrophage infestation. The lurker uses superior speed, agility, and stealth to sneak upon unsuspecting foes before pouncing. It can launch bony spikes as either melee claws or ranged attacks.',
    crAdjustment: 2,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'special', description: 'Living, corporeal creature' },
    ],
    typeChange: 'aberration',
    typeChangeNote: 'Recalculate feats, skills, saves, and hit points. All racial HD become d8s; add 1 racial HD.',
    abilityScoreChanges: [
      { ability: 'STR', change: 2 },
      { ability: 'DEX', change: 4 },
      { ability: 'CON', change: 2 },
      { ability: 'CHA', change: -4 },
    ],
    abilityScoreChangeNote: 'Intelligence is lost entirely — creature becomes mindless.',
    naturalArmorChange: 4,
    damageReduction: { scalingType: 'flat', value: 5, bypassedBy: '— (from the void)' },
    immunities: ['cold', 'disease', 'mind-affecting effects', 'poison'],
    features: [
      {
        scalingType: 'flat',
        name: 'Darkvision 60 ft.',
        description: 'The necrophage lurker gains darkvision to a range of 60 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Spike Shot (Ex)',
        description:
          'Three spike shots that can be used as melee claws (1d4 damage each) or as three separate ranged attacks (1d4 each, 20-foot range increment). The creature gains a climb speed of 30 feet if it lacked one.',
      },
      {
        scalingType: 'flat',
        name: 'Stealth Predator (Ex)',
        description: 'Gains a +8 racial bonus on Stealth checks.',
      },
      {
        scalingType: 'flat',
        name: 'Limb Weakness',
        description: 'The lurker has a vulnerability to attacks that target or sever its limbs (exact mechanics defined by GM).',
      },
      {
        scalingType: 'flat',
        name: 'Bonus Feat',
        description: 'Gains Weapon Focus for its natural weapons.',
      },
    ],
    sourceInfo: { type: 'third_party', publisher: 'Orphaned Bookworm Productions', publication: 'Contact Other Plane: Dead Void' },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 306. Necrophage Slasher (CR +1)
  {
    id: 'necrophage-slasher',
    name: 'Necrophage Slasher',
    description:
      'The most common manifestation of necrophage infestation, enhancing the host\'s physical prowess and adding two scythe-like bone-blade appendages. The slasher loses all class levels and special attacks, becoming a mindless, relentless attacker.',
    crAdjustment: 1,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'special', description: 'Living, corporeal creature' },
    ],
    typeChange: 'aberration',
    typeChangeNote: 'Recalculate feats, skills, saves, and hit points. Creature loses all class levels and special attacks.',
    abilityScoreChanges: [
      { ability: 'STR', change: 2 },
      { ability: 'CON', change: 2 },
      { ability: 'CHA', change: -4 },
    ],
    abilityScoreChangeNote: 'Intelligence is lost entirely — creature becomes mindless.',
    naturalArmorChange: 4,
    damageReduction: { scalingType: 'flat', value: 5, bypassedBy: '— (from the void)' },
    immunities: ['cold', 'disease', 'mind-affecting effects', 'poison'],
    features: [
      {
        scalingType: 'flat',
        name: 'Darkvision 60 ft.',
        description: 'The necrophage slasher gains darkvision to a range of 60 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Scythe Claws (Ex)',
        description:
          'Gains 2 scythe claws (1d6 damage, ×3 critical multiplier for a Medium creature). Retains base creature\'s movement modes; gains a climb speed of 10 feet if it lacked one.',
      },
      {
        scalingType: 'flat',
        name: 'Limb Weakness',
        description: 'The slasher has a vulnerability to attacks that target or sever its limbs (exact mechanics defined by GM).',
      },
      {
        scalingType: 'flat',
        name: 'Bonus Feat',
        description: 'Gains Weapon Focus for its natural weapons.',
      },
    ],
    sourceInfo: { type: 'third_party', publisher: 'Orphaned Bookworm Productions', publication: 'Contact Other Plane: Dead Void' },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 307. Negative-Energy Charged Creature (CR +2)
  {
    id: 'negative-energy-charged-creature',
    name: 'Negative-Energy Charged Creature',
    description:
      'An undead creature whose link to the Negative Energy Plane has been strengthened through prolonged exposure or dark magic, cloaking it in crackling black energy. Flickering shadows and wisps of black smoke surround the creature at all times.',
    crAdjustment: 2,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'creature_type', allowed: ['undead'] },
    ],
    abilityScoreChanges: [
      { ability: 'STR', change: 4 },
      { ability: 'DEX', change: 4 },
      { ability: 'CHA', change: 4 },
    ],
    damageReduction: { scalingType: 'flat', value: 5, bypassedBy: 'good' },
    resistances: [
      { energyType: 'positive energy', value: 10 },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Lifesense (Ex)',
        description: 'Gains lifesense to a range of 60 feet if not already possessed.',
      },
      {
        scalingType: 'flat',
        name: 'Dodge Bonus',
        description: 'Gains a +2 dodge bonus to Armor Class.',
      },
      {
        scalingType: 'flat',
        name: 'Obscuring Energy (Su)',
        description:
          'Flickering shadows and wisps of black smoke surround the creature, granting concealment (20% miss chance). When the creature is motionless, it gains total concealment (50% miss chance).',
      },
      {
        scalingType: 'flat',
        name: 'Strong Resistance (Ex)',
        description:
          'Gains strong resistance against destruction effects; if a destruction effect normally allows a single saving throw, the negative-energy charged creature receives two saving throws against it.',
      },
      {
        scalingType: 'flat',
        name: 'Enhanced Speed (Ex)',
        description: 'All movement speeds are doubled.',
      },
      {
        scalingType: 'flat',
        name: 'Negative Energy Strike (Su)',
        description: 'All of the creature\'s attacks deal an additional 1d6 negative energy damage.',
      },
      {
        scalingType: 'flat',
        name: 'Energy Drain (Su)',
        description: 'One natural attack gains the ability to bestow 1 negative level on a successful hit.',
      },
      {
        scalingType: 'flat',
        name: 'Searing Darkness (Su)',
        description:
          'Ranged touch attack that deals 1d8 negative energy damage per 2 total HD (maximum 10d8).',
      },
      {
        scalingType: 'flat',
        name: 'Bonus Feat',
        description: 'Gains Improved Initiative as a bonus feat.',
      },
    ],
    sourceInfo: { type: 'third_party', publisher: 'Green Ronin Publishing', publication: 'Advanced Bestiary' },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 308. Nigh-Invulnerable Creature (CR +2)
  {
    id: 'nigh-invulnerable-creature',
    name: 'Nigh-Invulnerable Creature',
    description:
      'A creature with exceptional defensive capabilities that cannot be easily killed through conventional means. These beings recover from virtually any injury and require discovering a specific vulnerable point on their body to be permanently defeated. Even disintegration and instant-death effects cannot stop them for long.',
    crAdjustment: 2,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'special', description: 'Living creature' },
    ],
    naturalArmorChange: 20,
    damageReduction: { scalingType: 'flat', value: 20, bypassedBy: 'epic' },
    immunities: [
      'ability damage',
      'ability drain',
      'acid',
      'blindness',
      'cold',
      'deafness',
      'death effects',
      'disease',
      'electricity',
      'energy drain',
      'fire',
      'mind-affecting effects',
      'nausea',
      'negative energy',
      'paralysis',
      'permanent wounds',
      'petrification',
      'poison',
      'polymorph',
      'stunning',
      'sonic',
    ],
    regeneration: 'equal to total hit points (bypassed only by damage to the creature\'s vulnerable point)',
    features: [
      {
        scalingType: 'flat',
        name: 'Vulnerable Point (Su)',
        description:
          'The creature has a specific vulnerable body location. When damaged at that point by the correct damage type (slashing, bludgeoning, or piercing — determined at template creation), the creature can be permanently killed. Attacking the vulnerable point requires a sunder attempt. The point has hardness 0 and hit points equal to 5 plus double the creature\'s HD, increasing by 5 for every 6 HD the creature possesses. When the vulnerable point is reduced to 0 hit points, the creature loses all its special defenses and suffers 1d6 bleed damage per 5 HD each round until dead.',
      },
      {
        scalingType: 'flat',
        name: 'Near-Impossible to Kill',
        description:
          'If killed by an instant-death effect, the creature rises after 3 rounds with full hit points. If disintegrated or otherwise destroyed, it reforms unless its vulnerable point was destroyed. Normal damage cannot permanently kill the creature.',
      },
    ],
    sourceInfo: { type: 'third_party', publisher: 'Rite Publishing LLC', publication: 'Pathways Bestiary' },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 309. Nightmare Creature (CR +1)
  {
    id: 'nightmare-creature',
    name: 'Nightmare Creature',
    description:
      'A creature with an unnatural link to the Dimension of Dreams, able to corrupt the dreams of others into nightmares and sow fear. They become evil and use their abilities to torment enemies. Over time, their appearance becomes a bizarre caricature of their original form. Most originate as aberrations, fey, humanoids, or outsiders.',
    crAdjustment: 1,
    acquisitionType: 'either',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'special', description: 'Intelligence score of at least 6 and Charisma score of at least 6' },
    ],
    subtypeGains: ['evil'],
    typeChangeNote: 'If base creature is an outsider, it gains the evil subtype.',
    abilityScoreChanges: [
      { ability: 'DEX', change: 4 },
      { ability: 'INT', change: 2 },
      { ability: 'CHA', change: 4 },
    ],
    damageReduction: { scalingType: 'flat', value: 5, bypassedBy: 'good or silver' },
    regeneration: '5 (Ex); stopped for 1 round by good-aligned weapons, silver weapons, or spells with the good descriptor',
    features: [
      {
        scalingType: 'flat',
        name: 'Darkvision 120 ft.',
        description: 'The nightmare creature gains darkvision to a range of 120 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Feign Death (Ex)',
        description: 'The nightmare creature can feign death at will, appearing dead to all mundane and magical senses.',
      },
      {
        scalingType: 'flat',
        name: 'Illusion Resistance (Ex)',
        description: 'Gains a +4 bonus on saving throws against illusion spells and effects.',
      },
      {
        scalingType: 'flat',
        name: 'Fear Aura (Su)',
        description: 'Projects a fear aura with a 60-foot radius.',
      },
      {
        scalingType: 'flat',
        name: 'Frightful Presence (Su)',
        description: 'Possesses frightful presence with a range of 30 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Night Terrors (Su)',
        description: 'Can enter and control the dreams of sleeping creatures, causing Charisma damage.',
      },
      {
        scalingType: 'flat',
        name: 'Flight (Su)',
        description: 'If the base creature lacks a fly speed, the nightmare creature gains a fly speed of 10 feet with perfect maneuverability.',
      },
      {
        scalingType: 'flat',
        name: 'Skill Bonuses',
        description: 'Gains a +4 racial bonus on Intimidate and Stealth checks.',
      },
    ],
    spellLikeAbilities: [
      { spellName: 'protection from good', frequency: 'constant', casterLevelFormula: 'equal to HD' },
      { spellName: 'detect thoughts', frequency: '3/day', casterLevelFormula: 'equal to HD', dcAbility: 'CHA' },
      { spellName: 'dream', frequency: '3/day', casterLevelFormula: 'equal to HD', dcAbility: 'CHA' },
      { spellName: 'nightmare', frequency: '3/day', casterLevelFormula: 'equal to HD', dcAbility: 'CHA' },
      { spellName: 'suggestion', frequency: '3/day', casterLevelFormula: 'equal to HD', dcAbility: 'CHA' },
      { spellName: 'shadow walk', frequency: '1/day', casterLevelFormula: 'equal to HD', dcAbility: 'CHA' },
    ],
    sourceInfo: { type: 'official', publication: 'Pathfinder Roleplaying Game Bestiary 4' },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 310. Nocturnal (CR +0)
  {
    id: 'nocturnal',
    name: 'Nocturnal',
    description:
      'Creatures that are normally diurnal but have adapted to nocturnal activity patterns. They possess enhanced night vision and larger eyes and ears than their daytime counterparts, but have an aversion to bright light.',
    crAdjustment: 0,
    acquisitionType: 'inherited',
    isSimpleTemplate: true,
    prerequisites: [
      { type: 'special', description: 'Living, corporeal creature normally active during the day' },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Low-Light Vision or Darkvision (Ex)',
        description:
          'Gains low-light vision. If the base creature already possesses low-light vision, gains darkvision 60 ft. instead.',
      },
      {
        scalingType: 'flat',
        name: 'Light Sensitivity',
        description: 'The nocturnal creature gains the light sensitivity weakness.',
      },
      {
        scalingType: 'flat',
        name: 'Skill Bonuses',
        description:
          'Gains a +4 racial bonus on Perception and Stealth checks. Takes a –4 circumstance penalty on Perception checks made in bright light.',
      },
    ],
    sourceInfo: { type: 'third_party', publisher: 'Green Ronin Publishing', publication: 'Advanced Bestiary' },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 311. Noseferatu (CR +2) [3pp — Liber Vampyr]
  {
    id: 'noseferatu',
    name: 'Noseferatu',
    description:
      'Corpses possessed by malevolent fiends that spread disease and suffering. The noseferatu appears hideous, with a warped and twisted face resembling a rat-human hybrid: a hairless head, beady eyes, pale waxen complexion, and prominent fangs. They are powerful plague-spreaders capable of corrupting water supplies and summoning undead servants. Note: this is a distinct 3pp variant from the Paizo Nosferatu (see separate entry).',
    crAdjustment: 2,
    acquisitionType: 'inherited',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'min_hd', minimum: 5 },
      { type: 'special', description: 'Most commonly applied to humanoids, fey, or monstrous humanoids' },
    ],
    typeChange: 'undead',
    typeChangeNote: 'Augmented subtype retained. Class hit dice are unaffected.',
    abilityScoreChanges: [
      { ability: 'STR', change: 2 },
      { ability: 'DEX', change: 2 },
      { ability: 'INT', change: 6 },
      { ability: 'WIS', change: 4 },
      { ability: 'CHA', change: -2 },
    ],
    abilityScoreChangeNote: 'Constitution score is removed (undead).',
    naturalArmorChange: 6,
    damageReduction: { scalingType: 'flat', value: 10, bypassedBy: 'good' },
    immunities: ['cold', 'electricity', 'all standard undead immunities'],
    fastHealing: '5',
    features: [
      {
        scalingType: 'flat',
        name: 'Blood Drain (Su)',
        description: 'The noseferatu can drain blood from a pinned victim, dealing Constitution damage via grapple.',
      },
      {
        scalingType: 'flat',
        name: 'Children of Darkness (Su)',
        description: 'Can summon wights and shadows as servants.',
      },
      {
        scalingType: 'flat',
        name: 'Create Spawn (Su)',
        description: 'Creatures slain by the noseferatu rise as zombies under its control.',
      },
      {
        scalingType: 'flat',
        name: 'Energy Drain (Su)',
        description: 'The noseferatu\'s slam attack bestows negative levels.',
      },
      {
        scalingType: 'flat',
        name: 'Plaguelord (Su)',
        description: 'Transmits disease via touch and can corrupt water supplies.',
      },
      {
        scalingType: 'flat',
        name: 'Bonus Feats',
        description: 'Gains Blind-Fight, Combat Expertise, Improved Initiative, Iron Will, Stealthy, and Toughness as bonus feats.',
      },
      {
        scalingType: 'flat',
        name: 'Skill Bonuses',
        description: 'Gains a +8 racial bonus on Intimidate, Perception, Sense Motive, and Stealth checks.',
      },
    ],
    sourceInfo: { type: 'third_party', publisher: 'Necromancers of the Northwest', publication: 'Liber Vampyr' },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 312. Nosferatu (CR +2) [Paizo — Bestiary 4]
  {
    id: 'nosferatu-pzo',
    name: 'Nosferatu',
    description:
      'Ancient and terrifying vampiric undead, more powerful and alien than common vampires. A nosferatu can assume the form of a swarm of vermin, dominates minds with a glance, and moves objects with telekinesis. It cannot tolerate the strong odor of garlic, recoils from mirrors or strongly presented holy symbols, and cannot enter a private dwelling without an invitation. Sunlight staggers it in the first round and destroys it in the second. Running water deals damage equal to one-third its maximum hit points per round. A wooden stake driven through a helpless nosferatu\'s heart slays it instantly; decapitation with holy water poured into the mouth destroys it permanently.',
    crAdjustment: 2,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'min_hd', minimum: 5 },
      { type: 'special', description: 'Any living creature; most commonly humanoids, fey, or monstrous humanoids' },
    ],
    typeChange: 'undead',
    typeChangeNote: 'Augmented subtype retained. Class HD and BAB unaffected. Racial HD become d8s. Uses Charisma modifier for bonus hit points.',
    abilityScoreChanges: [
      { ability: 'STR', change: 2 },
      { ability: 'DEX', change: 4 },
      { ability: 'INT', change: 2 },
      { ability: 'WIS', change: 6 },
      { ability: 'CHA', change: 4 },
    ],
    abilityScoreChangeNote: 'Constitution score is removed (undead).',
    naturalArmorChange: 8,
    damageReduction: { scalingType: 'flat', value: 5, bypassedBy: 'wood and piercing' },
    resistances: [
      { energyType: 'cold', value: 10 },
      { energyType: 'electricity', value: 10 },
      { energyType: 'sonic', value: 10 },
    ],
    fastHealing: '5',
    features: [
      {
        scalingType: 'flat',
        name: 'Blood Drain (Su)',
        description: 'Drains 1d4 Constitution and 1d4 Wisdom per round from a pinned victim; gains 5 temporary hit points per successful drain.',
      },
      {
        scalingType: 'flat',
        name: 'Dominate (Su)',
        description:
          'As a standard action, forces a humanoid within 30 feet to succeed on a Will save (DC 10 + 1/2 HD + Cha modifier) or be dominated as by dominate person (caster level 12th).',
      },
      {
        scalingType: 'flat',
        name: 'Telekinesis (Su)',
        description: 'Can use telekinesis as a standard action (caster level 12th).',
      },
      {
        scalingType: 'flat',
        name: 'Spider Climb (Ex)',
        description: 'Scales sheer surfaces automatically.',
      },
      {
        scalingType: 'flat',
        name: 'Swarm Form (Su)',
        description:
          'As a standard action, can transform into a bat swarm, centipede swarm, rat swarm, or spider swarm. Retains nosferatu defensive abilities and weaknesses in this form.',
      },
      {
        scalingType: 'flat',
        name: 'Telepathy (Su)',
        description:
          'Communicates telepathically with creatures that share a language within 60 feet. Can also communicate with animals, magical beasts, and vermin.',
      },
      {
        scalingType: 'flat',
        name: 'Channel Resistance +4',
        description: 'Gains +4 channel resistance.',
      },
      {
        scalingType: 'flat',
        name: 'Claw Attacks',
        description: 'If the base creature had no claw attacks, gains two claws (1d4 damage for Small, 1d6 for Medium creatures).',
      },
      {
        scalingType: 'flat',
        name: 'Enhanced Senses',
        description: 'Gains darkvision 60 ft., low-light vision, and scent.',
      },
      {
        scalingType: 'flat',
        name: 'Bonus Feats',
        description: 'Gains Alertness, Improved Initiative, Lightning Reflexes, and two Skill Focus feats as bonus feats.',
      },
      {
        scalingType: 'flat',
        name: 'Skill Bonuses',
        description: 'Gains a +8 racial bonus on Perception, Sense Motive, and Stealth checks.',
      },
    ],
    sourceInfo: { type: 'official', publication: 'Pathfinder Roleplaying Game Bestiary 4' },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 313. Ofuda (CR -1)
  {
    id: 'ofuda',
    name: 'Ofuda',
    description:
      'Spirit-bound constructed entities made from enchanted rice-paper, temporarily summoned to serve as servants, soldiers, guides, guardians, tools, traps, wards, and weapons. Their bodies feature colorful icons and kanji that describe their fundamental nature and purpose. They weigh one-eighth of normal, cannot enter water willingly, and can only perform a single move or standard action per round. They cannot be applied to creatures with aquatic or water subtypes, constructs, or oozes.',
    crAdjustment: -1,
    acquisitionType: 'inherited',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'creature_type_excluded', excluded: ['construct', 'ooze'] },
      { type: 'special', description: 'Cannot have the aquatic or water subtype' },
    ],
    typeChange: 'outsider',
    subtypeGains: ['augmented', 'extraplanar'],
    naturalArmorChange: 0,
    features: [
      {
        scalingType: 'flat',
        name: 'Natural Armor Halved',
        description: 'The ofuda\'s natural armor bonus to AC is halved (minimum +1).',
      },
      {
        scalingType: 'flat',
        name: 'Reduced Hit Points',
        description: 'Receives only one-half the normal hit points per Hit Die.',
      },
      {
        scalingType: 'flat',
        name: 'Constructed (Ex)',
        description:
          'Counts as both outsider and construct for the purpose of effects targeting either type. Gains a +4 racial bonus on saves against mind-affecting effects, paralysis, poison, and stun; immune to fatigue, exhaustion, disease, sleep, fear, and emotion effects.',
      },
      {
        scalingType: 'flat',
        name: 'Limited Fire Immunity (Ex)',
        description: 'Immune to any of its own fire-based abilities.',
      },
      {
        scalingType: 'flat',
        name: 'Submersion Vulnerability (Ex)',
        description: 'Takes damage equal to one-third its maximum hit points per round when submerged in water.',
      },
      {
        scalingType: 'flat',
        name: 'Body of Paper and Ink (Ex)',
        description: 'Weighs one-eighth normal. Cannot enter water unless forcefully submerged.',
      },
      {
        scalingType: 'flat',
        name: 'Deliberate (Ex)',
        description: 'Can only perform a single move or standard action per round.',
      },
      {
        scalingType: 'flat',
        name: 'Empty Ego (Ex)',
        description: 'Obeys its summoner. Loses access to Craft, Knowledge, and Profession skills.',
      },
      {
        scalingType: 'flat',
        name: 'Simple Summoning (Ex)',
        description: 'Treated as one level lower when determining what summoning spells can conjure it.',
      },
    ],
    sourceInfo: { type: 'third_party', publisher: 'Green Ronin Publishing', publication: 'Advanced Bestiary' },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 314. Ogrekin (CR +1)
  {
    id: 'ogrekin',
    name: 'Ogrekin',
    description:
      'Also called half-ogres, ogrekin are the result of an unfortunate union between an ogre and a humanoid. They are cursed with horrific deformities and typically form isolated, inbred clans. They tend toward evil alignment. Each ogrekin receives two random deformities — one beneficial and one disadvantageous — from expanded tables.',
    crAdjustment: 1,
    acquisitionType: 'inherited',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'creature_type', allowed: ['humanoid'] },
      { type: 'special', description: 'Medium size. Minimum CR 2 after template is applied.' },
    ],
    subtypeGains: ['giant'],
    abilityScoreChanges: [
      { ability: 'STR', change: 6 },
      { ability: 'CON', change: 4 },
      { ability: 'INT', change: -2 },
      { ability: 'CHA', change: -2 },
    ],
    naturalArmorChange: 3,
    features: [
      {
        scalingType: 'flat',
        name: 'Low-Light Vision (Ex)',
        description: 'The ogrekin gains low-light vision.',
      },
      {
        scalingType: 'flat',
        name: 'Deformities',
        description:
          'Each ogrekin gains two random deformities selected from the following tables. Beneficial deformities include oversized limb, oversized maw, quick metabolism, thick skin, vestigial limb, vestigial twin, bulging eye, enlarged skull, gnarled hands, grotesque ears, lanky frame, snout, thick feet, vice grip, warty knuckles, and webbed fingers. Disadvantageous deformities include deformed hand, fragile constitution, light sensitivity, obesity, stunted legs, weak mind, atrophied eyes, bad eyes, brittle bones, deformed feet, distractibility, flaking skin, massive girth, offensive odor, trusting nature, and twisted spine.',
      },
    ],
    sourceInfo: { type: 'official', publication: 'Pathfinder Roleplaying Game Bestiary 2' },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 315. Omdura Creature (CR +2 or +3)
  {
    id: 'omdura-creature',
    name: 'Omdura Creature',
    description:
      'A creature that communes with its deity, providing support to allies through encouragement and healing while gaining limited omdura spellcasting abilities. The CR adjustment is +2 for creatures with fewer than 5 HD, and +3 for creatures with 5 or more HD. The creature must worship a specific deity and its alignment must be within one step of the deity\'s alignment.',
    crAdjustment: 2,
    acquisitionType: 'inherited',
    isSimpleTemplate: true,
    prerequisites: [
      { type: 'alignment', allowed: ['within one step of deity\'s alignment'] },
      { type: 'special', description: 'Must worship a specific deity' },
    ],
    abilityScoreChanges: [
      { ability: 'WIS', change: 4 },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'CR Adjustment Note',
        description: 'The CR adjustment is +2 for creatures with fewer than 5 HD, and +3 for creatures with 5 or more HD.',
      },
      {
        scalingType: 'flat',
        name: 'Invocation (Su)',
        description: 'Can use invocation a number of rounds per day equal to half the creature\'s HD.',
      },
      {
        scalingType: 'flat',
        name: 'Divine Touch (Su)',
        description: 'Can heal 1d6 hit points per 2 HD as a touch attack, usable once per day.',
      },
      {
        scalingType: 'flat',
        name: 'Detect Alignment (Sp)',
        description: 'Can cast detect alignment once per day. If the creature has 5 or more HD, it also gains divine might usable once per day.',
      },
      {
        scalingType: 'flat',
        name: 'Wisdom Bonus',
        description: 'Gains a +2 bonus on all rolls based on Wisdom.',
      },
      {
        scalingType: 'flat',
        name: 'Omdura Spellcasting',
        description: 'Gains omdura spellcasting using its HD as its caster level. Spell slots scale by HD per the omdura progression table.',
      },
    ],
    sourceInfo: { type: 'third_party', publisher: 'Legendary Games', publication: 'The Bardess\' Library #8: Forgotten Classes' },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 316. Ooze Creature (CR +3)
  {
    id: 'ooze-creature',
    name: 'Ooze Creature',
    description:
      'An intelligent ooze resulting from a creature\'s death in slime left behind by another ooze creature. The being retains its former skills but loses its personality and memories, becoming obsessed with dissolving and consuming other living creatures. The creature\'s type becomes ooze and it loses all racial subtypes. If the creature retains an Intelligence score, it does not gain immunity to mind-affecting effects.',
    crAdjustment: 3,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'creature_type_excluded', excluded: ['ooze'] },
      { type: 'special', description: 'Any living corporeal creature not of the ooze type' },
    ],
    typeChange: 'ooze',
    typeChangeNote: 'Loses all racial subtypes. All racial HD become d8s. All movement speeds are reduced to one-half the corresponding speed of the base creature. Natural armor is lost entirely.',
    abilityScoreChanges: [
      { ability: 'STR', change: 4 },
      { ability: 'DEX', change: -6, minimum: 1 },
      { ability: 'CON', change: 4 },
      { ability: 'INT', change: -4, minimum: 1 },
      { ability: 'WIS', change: -4, minimum: 1 },
      { ability: 'CHA', change: -4, minimum: 1 },
    ],
    immunities: ['acid'],
    features: [
      {
        scalingType: 'flat',
        name: 'Transparent (Ex)',
        description: 'A DC 15 Perception check is required to notice an ooze creature if it is motionless.',
      },
      {
        scalingType: 'flat',
        name: 'Acid (Ex)',
        description: 'Natural attacks deal acid damage. Creatures grappling the ooze creature take automatic acid damage each round.',
      },
      {
        scalingType: 'flat',
        name: 'Bilious Globule (Ex)',
        description: 'Ranged touch attack that hurls acid globs with a 20-foot range increment.',
      },
      {
        scalingType: 'flat',
        name: 'Create Spawn (Ex)',
        description: 'Creatures that die in the ooze creature\'s vicinity and fail to stabilize are transformed into ooze creatures under the original\'s control.',
      },
      {
        scalingType: 'flat',
        name: 'Exude Ooze (Su)',
        description: 'Full-round action creating slippery acidic areas around the creature. Creatures in these areas must succeed on a DC 15 Acrobatics check or fall prone.',
      },
      {
        scalingType: 'flat',
        name: 'Remembered Abilities (Ex)',
        description: 'Retains all former skills and abilities of the base creature, within the physical limitations of its new form.',
      },
      {
        scalingType: 'flat',
        name: 'Compression (Ex)',
        description: 'Can move through spaces at least half its size with no penalty.',
      },
    ],
    sourceInfo: { type: 'third_party', publisher: 'Green Ronin Publishing', publication: 'Advanced Bestiary' },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 317. Outer Mutant (CR +1)
  {
    id: 'outer-mutant',
    name: 'Outer Mutant',
    description:
      'A hideously deformed creature, typically concealed beneath voluminous robes, with alien flesh and twisted mental faculties. Its body is a grotesque amalgam of its former self and something utterly inhuman. It is immune to confusion and insanity effects and possesses a psychic feeding appendage.',
    crAdjustment: 1,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'special', description: 'Living, corporeal creature' },
    ],
    typeChange: 'aberration',
    typeChangeNote: 'Augmented subtype retained. HD, base attack bonus, and saves remain unchanged.',
    abilityScoreChanges: [
      { ability: 'STR', change: 4 },
      { ability: 'CON', change: 4 },
    ],
    abilityScoreChangeNote: 'Also gains +4 to one mental ability score of the creature\'s choice (INT, WIS, or CHA).',
    naturalArmorChange: 4,
    immunities: ['confusion effects', 'insanity effects'],
    features: [
      {
        scalingType: 'flat',
        name: 'Stalked Proboscis / Bite (Ex)',
        description: 'Gains a proboscis or bite attack dealing 1d6 damage (Medium) with the grab ability.',
      },
      {
        scalingType: 'flat',
        name: 'Feed (Ex)',
        description: 'While grappling a grabbed creature, drains 1d2 Constitution and 1d2 Wisdom per round.',
      },
      {
        scalingType: 'flat',
        name: 'Deformed (Ex)',
        description: 'Can disguise its alien form but suffers a –6 penalty on Disguise checks to do so. Cannot wear standard armor.',
      },
      {
        scalingType: 'flat',
        name: 'Magical Adept (Ex)',
        description:
          'Increases all spell save DCs by 1. As a swift action three times per day, can recall a prepared spell already cast or regain an expended spell slot.',
      },
      {
        scalingType: 'flat',
        name: 'Will Save Bonus',
        description: 'Gains a +2 bonus on all Will saving throws.',
      },
      {
        scalingType: 'flat',
        name: 'Bonus Feats',
        description: 'Gains Great Fortitude and Toughness as bonus feats.',
      },
      {
        scalingType: 'flat',
        name: 'Skill Bonuses',
        description: 'Gains a +2 racial bonus on Climb, Intimidate, Knowledge, Perception, Sense Motive, Survival, and Swim checks.',
      },
    ],
    sourceInfo: { type: 'third_party', publisher: 'Petersen Games', publication: 'Sandy Petersen\'s Cthulhu Mythos' },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 318. Paleoskeleton Creature (CR fixed)
  {
    id: 'paleoskeleton-creature',
    name: 'Paleoskeleton Creature',
    description:
      'An undead dinosaur or prehistoric animal, animated as a fossilized skeletal horror. The creature\'s type changes to undead with the earth subtype and it loses the augmented subtype. It is always neutral evil. Its CR is fixed based on its Hit Dice rather than added to the base creature\'s CR.',
    crAdjustment: 0,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'special', description: 'Must be a dinosaur or prehistoric animal' },
    ],
    typeChange: 'undead',
    subtypeGains: ['earth'],
    subtypeRemoves: ['augmented'],
    typeChangeNote: 'CR is fixed by HD: 1/2 HD = CR 1/2; 1 HD = CR 1; 2–3 HD = CR 2; 4–5 HD = CR 3; 6–7 HD = CR 4; 8–9 HD = CR 5; 10–11 HD = CR 6; 12–14 HD = CR 7; 15–17 HD = CR 8; 18–20 HD = CR 9. All HD become d8s; uses Charisma modifier for bonus hit points. Natural armor based on size (Tiny/smaller +0, Small +1, Medium +2, Large +3, Huge +4, Gargantuan +6, Colossal +10).',
    abilityScoreChanges: [
      { ability: 'DEX', change: 2 },
    ],
    abilityScoreChangeNote: 'Wisdom and Charisma are set to 10. Constitution is removed (undead). Intelligence is removed (mindless).',
    damageReduction: { scalingType: 'flat', value: 5, bypassedBy: 'bludgeoning or adamantine' },
    immunities: ['cold', 'all standard undead immunities'],
    features: [
      {
        scalingType: 'flat',
        name: 'Fossilize (Su)',
        description:
          'Once per 1d4 rounds, the paleoskeleton creature may forfeit its first melee attack to make a touch attack. A creature struck must succeed on a Fortitude saving throw or be permanently turned to stone.',
      },
      {
        scalingType: 'flat',
        name: 'Primal Roar (Su)',
        description:
          'Once every other round, the paleoskeleton creature may release a terrifying roar. Creatures with fewer Hit Dice than the paleoskeleton creature that can hear it must succeed on a Will saving throw or become shaken for 2d6 rounds.',
      },
    ],
    sourceInfo: { type: 'converted', originalSystem: '3.5e', publication: 'Tome of Horrors Complete' },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 319. Parasitic Ooze Host (CR +0)
  {
    id: 'parasitic-ooze-host',
    name: 'Parasitic Ooze Host',
    description:
      'A creature infested with a parasitic ooze that controls it as an unwilling participant in the ooze\'s natural life cycle. The internal ooze\'s Intelligence, Wisdom, and Charisma scores replace the host\'s. The ooze gains damage reduction 10/— due to the protective layers of flesh and bone surrounding it, but loses its immunity to mind-affecting effects. All movement modes are reduced by 5 feet.',
    crAdjustment: 0,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'special', description: 'Medium size or larger animal, humanoid, or magical beast' },
    ],
    abilityScoreChanges: [
      { ability: 'STR', change: -2 },
      { ability: 'DEX', change: -4 },
    ],
    abilityScoreChangeNote: 'Intelligence, Wisdom, and Charisma are replaced by the controlling ooze\'s scores.',
    features: [
      {
        scalingType: 'flat',
        name: 'Ooze Carrier (Ex)',
        description: 'The internal ooze cannot be directly targeted by spells or attacks unless the attack first penetrates the host body. The ooze gains damage reduction 10/—.',
      },
      {
        scalingType: 'flat',
        name: 'Ooze Spawn (Ex)',
        description: 'Ooze offspring burst from the host\'s torso, dealing damage to all creatures within a 30-foot radius.',
      },
      {
        scalingType: 'flat',
        name: 'Reduced Speed',
        description: 'All movement modes are reduced by 5 feet.',
      },
    ],
    sourceInfo: { type: 'third_party', publisher: 'Rite Publishing LLC', publication: '101 Variant Monsters' },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 320. Penanggalen (CR +1)
  {
    id: 'penanggalen',
    name: 'Penanggalen',
    description:
      'A horrifying undead creature that can detach its head and trailing entrails from its body to fly through the night. It is nearly always female, most often a former humanoid or monstrous humanoid of 5 or more Hit Dice. During the day it appears as a normal creature, but at night it separates, leaving its body vulnerable. The body can be destroyed if dealt damage equal to normal hit points while the head is detached. The head and entrails must be soaked in vinegar before reattachment.',
    crAdjustment: 1,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'min_hd', minimum: 5 },
      { type: 'alignment', allowed: ['any evil'] },
      { type: 'special', description: 'Any living creature; most commonly female humanoids or monstrous humanoids' },
    ],
    typeChange: 'undead',
    typeChangeNote: 'Augmented subtype retained. Class HD, BAB, and saves unchanged. Racial HD become d8s. Uses Charisma modifier for bonus hit points.',
    abilityScoreChanges: [
      { ability: 'STR', change: 6 },
      { ability: 'DEX', change: 4 },
      { ability: 'INT', change: 2 },
      { ability: 'WIS', change: 2 },
      { ability: 'CHA', change: 4 },
    ],
    abilityScoreChangeNote: 'Constitution score is removed (undead).',
    naturalArmorChange: 6,
    damageReduction: { scalingType: 'flat', value: 5, bypassedBy: 'silver and slashing' },
    resistances: [
      { energyType: 'cold', value: 10 },
      { energyType: 'fire', value: 10 },
    ],
    fastHealing: '5',
    features: [
      {
        scalingType: 'flat',
        name: 'Darkvision 60 ft.',
        description: 'The penanggalen gains darkvision to a range of 60 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Channel Resistance +4',
        description: 'Gains +4 channel resistance.',
      },
      {
        scalingType: 'flat',
        name: 'Light Sensitivity',
        description: 'The penanggalen is staggered while its head is separated from its body in direct sunlight.',
      },
      {
        scalingType: 'flat',
        name: 'Blood Drain (Su)',
        description: 'The bite attack causes 1d4 Constitution damage.',
      },
      {
        scalingType: 'flat',
        name: 'Create Spawn (Su)',
        description: 'Slain female humanoids with 10 or more HD rise as manananggals.',
      },
      {
        scalingType: 'flat',
        name: 'Disease (Ex)',
        description: 'The bite attack transmits filth fever (save DC set by the penanggalen).',
      },
      {
        scalingType: 'flat',
        name: 'Wither (Su)',
        description: 'The slam attack causes 1d4 Dexterity damage and 1d4 Charisma damage on a failed Fortitude saving throw.',
      },
      {
        scalingType: 'flat',
        name: 'Separate (Su)',
        description:
          'The penanggalen detaches its head and trailing entrails from its body at night. While detached, the head flies at 60 feet (good maneuverability). The headless body is left behind and can be destroyed if dealt damage equal to the creature\'s normal hit points. The head and entrails must be soaked in vinegar before reattachment.',
      },
      {
        scalingType: 'flat',
        name: 'Skill Bonuses',
        description: 'Gains a +8 racial bonus on Bluff, Fly, Knowledge (arcana), Perception, Sense Motive, and Stealth checks.',
      },
    ],
    sourceInfo: { type: 'official', publication: 'Pathfinder Roleplaying Game Bestiary 3' },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 321. Perdatus (CR 1+)
  {
    id: 'perdatus',
    name: 'Perdatus',
    description:
      'A template from the Arcforge Universe creating chaotic evil entities with an immortal consciousness that materializes in new bodies across the same planet when destroyed. The perdatus gains mythic tiers equal to half its CR and accumulates cumulative mythic abilities without choosing a path. Its CR adjustment is +1, plus an additional +1 for every 2 mythic ranks gained.',
    crAdjustment: 1,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'special', description: 'Non-mythic creature with an Intelligence score' },
    ],
    subtypeGains: ['mythic'],
    abilityScoreChanges: [
      { ability: 'INT', change: 4 },
      { ability: 'WIS', change: 4 },
      { ability: 'CHA', change: 6 },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Mythic Tiers',
        description: 'Gains mythic tiers equal to half its CR. Gains cumulative mythic abilities without choosing a mythic path.',
      },
      {
        scalingType: 'flat',
        name: 'Immortality (Ex)',
        description: 'When the perdatus is destroyed, its consciousness relocates and materializes in a new body on the same planet.',
      },
      {
        scalingType: 'flat',
        name: 'Inflammatory Presence (Su)',
        description:
          'Projects an aura of 30 feet per mythic rank that radicalizes the ideological views of those within it. Affected creatures must succeed on a Will saving throw (DC 10 + half HD + Charisma modifier) or have their beliefs pushed toward extremism.',
      },
      {
        scalingType: 'flat',
        name: 'Accelerant Visions (Ex)',
        description: 'Mental contact with the perdatus exposes targets to unspeakable alien visions.',
      },
      {
        scalingType: 'flat',
        name: 'Perdition Link (Su)',
        description:
          'Establishes telepathic connections that ignore spell resistance. These links can only be removed by psychic surgery, wish, or miracle.',
      },
      {
        scalingType: 'flat',
        name: 'Seamless Guise (Su)',
        description: 'Controls the results of divination and clairsentience effects targeting it, substituting false information of its choice.',
      },
    ],
    sourceInfo: { type: 'third_party', publisher: 'Legendary Games', publication: 'Arcforge Universe Cyclopedia' },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 322. Petitioner (CR 1)
  {
    id: 'petitioner',
    name: 'Petitioner',
    description:
      'Petitioners are the souls of mortals brought to the Outer Planes after death in order to experience their ultimate punishment, reward, or fate. They appear as wispy, ghostly humanoid forms whose exact appearance depends on which Outer Plane claims them. All racial and class HD are replaced with 2d10 racial HD as outsiders. They lose all racial AC bonuses, defensive abilities, and subtypes. Their saves are Fort +3, Ref +3, Will +0. Specific abilities vary by plane.',
    crAdjustment: 0,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'special', description: 'Any creature whose soul migrates to an Outer Plane after death' },
    ],
    typeChange: 'outsider',
    typeChangeNote: 'Loses all subtypes. Size unchanged. All racial and class HD replaced with 2d10 racial HD as outsiders.',
    immunities: ['mind-affecting effects'],
    features: [
      {
        scalingType: 'flat',
        name: 'Plane-Dependent Traits',
        description:
          'Specific DR, resistances, immunities, fast healing, and ability score bonuses vary by plane. Examples: Abaddon grants DR 5/— and fast healing 1; Hell grants fire immunity; Purgatory grants DR 10/bludgeoning and cold immunity; Elysium grants +2 Charisma; Nirvana grants +2 Wisdom.',
      },
      {
        scalingType: 'flat',
        name: 'Stripped Abilities',
        description: 'Loses all class levels, special abilities, racial bonuses to AC, and all other defensive abilities from the base creature except as noted for the specific plane.',
      },
    ],
    sourceInfo: { type: 'official', publication: 'Pathfinder Roleplaying Game Bestiary 2' },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 323. Phase Creature (CR +2)
  {
    id: 'phase-creature',
    name: 'Phase Creature',
    description:
      'An inherited template applied to vermin, transforming them into magical beasts with the augmented subtype. Phase creatures can shift between the Ethereal and Material planes, ambushing prey from the Ethereal side. They gain Intelligence and lose their immunity to mind-affecting effects.',
    crAdjustment: 2,
    acquisitionType: 'inherited',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'creature_type', allowed: ['vermin'] },
    ],
    typeChange: 'magical beast',
    subtypeGains: ['augmented'],
    typeChangeNote: 'All racial HD become d10s; add one additional HD. Recalculate saves as magical beast (good Fortitude and Reflex).',
    abilityScoreChanges: [
      { ability: 'STR', change: 2 },
      { ability: 'CON', change: 4 },
      { ability: 'WIS', change: 4 },
    ],
    abilityScoreChangeNote: 'Intelligence is set to 7 (was —). Charisma is set to the higher of the base creature\'s score or 10.',
    naturalArmorChange: 1,
    features: [
      {
        scalingType: 'flat',
        name: 'Enhanced Senses',
        description: 'Gains low-light vision and darkvision 60 feet if not already possessed.',
      },
      {
        scalingType: 'flat',
        name: 'Increased Speed',
        description: 'Land speed increases by 10 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Reduced Natural Attack Damage',
        description: 'Each natural attack\'s damage die is reduced by one step (minimum 1d2). If the base creature has poison, the poison\'s damage increases by one step.',
      },
      {
        scalingType: 'flat',
        name: 'Ethereal Jaunt (Su)',
        description:
          'A phase creature can shift from the Ethereal Plane to the Material Plane as a free action, and shift back again as a move action (caster level 15th equivalent).',
      },
      {
        scalingType: 'flat',
        name: 'Ethereal Ambush (Ex)',
        description: 'When initiating combat from the Ethereal Plane, a phase creature gets a full round of actions during the surprise round.',
      },
      {
        scalingType: 'flat',
        name: 'Bonus Feat',
        description: 'Gains Improved Initiative as a bonus feat.',
      },
      {
        scalingType: 'flat',
        name: 'Loss of Vermin Immunities',
        description: 'Loses all immunities granted by the vermin type (including immunity to mind-affecting effects).',
      },
    ],
    sourceInfo: { type: 'converted', originalSystem: '3.5e', publication: 'Tome of Horrors Complete' },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 324. Phrenic Spawn Creature (CR +2)
  {
    id: 'phrenic-spawn-creature',
    name: 'Phrenic Spawn Creature',
    description:
      'Created when a phrenic scourge\'s tendrils implant in a victim, causing eldritch mutation. Rather than becoming a larva, the victim becomes a parasitic aberration that assimilates and imitates organisms. Even the smallest part of these creatures can form an independent organism. The creature changes to aberration type (augmented) while retaining its HD, base attack bonuses, saves, skill points, and size.',
    crAdjustment: 2,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'special', description: 'Any living creature' },
    ],
    typeChange: 'aberration',
    subtypeGains: ['augmented'],
    typeChangeNote: 'HD, base attack bonuses, saves, and skill points remain unchanged. Size unchanged.',
    abilityScoreChanges: [
      { ability: 'STR', change: 4 },
      { ability: 'CON', change: 4 },
      { ability: 'INT', change: 4 },
      { ability: 'CHA', change: 6 },
    ],
    immunities: ['poison', 'sleep effects', 'paralysis', 'polymorph', 'stunning'],
    regeneration: 'equal to Constitution modifier (fire damage suppresses for 1 round)',
    features: [
      {
        scalingType: 'flat',
        name: 'Not Subject to Critical Hits',
        description: 'Not subject to critical hits, flanking, or precision-based damage.',
      },
      {
        scalingType: 'flat',
        name: 'Split (Ex)',
        description: 'When dealt slashing damage while at or above half its unwounded hit points, the creature splits into two creatures, each with half the original\'s hit points.',
      },
      {
        scalingType: 'flat',
        name: 'Horrific Evolution (Ex)',
        description:
          'Upon being forcibly revealed, transforms as an immediate action, gaining an eidolon-style evolution pool equal to the creature\'s CR. All witnesses must succeed on a Will saving throw (DC 10 + half HD + Charisma modifier) or experience fear effects scaled to the creature\'s CR.',
      },
      {
        scalingType: 'flat',
        name: 'Duplicate (Su)',
        description:
          'Can absorb a helpless victim or a corpse dead no more than 24 hours over 10 minutes, creating a perfect duplicate with the original\'s abilities, memories, and skills. The duplicate retains phrenic alignment for divine powers. Cannot exceed a daily HD total in duplicates created.',
      },
      {
        scalingType: 'flat',
        name: 'Skill Bonuses',
        description: 'Gains Bluff and Disguise as class skills.',
      },
    ],
    sourceInfo: { type: 'third_party', publisher: 'Rite Publishing LLC', publication: 'Pathways Bestiary' },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 325. Plague Bearer (CR +2)
  {
    id: 'plague-bearer',
    name: 'Plague Bearer',
    description:
      'A creature visibly infected with multiple plagues, featuring black boils, cracked red skin, patchy hair, and constant coughing and wheezing despite remaining ambulatory. It is immune to all diseases and projects an invisible aura of contagion. The CR adjustment may be +3 to +4 for particularly virulent diseases.',
    crAdjustment: 2,
    acquisitionType: 'either',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'creature_type_excluded', excluded: ['construct'] },
      { type: 'special', description: 'Any corporeal creature except constructs' },
    ],
    abilityScoreChanges: [
      { ability: 'CON', change: 6 },
    ],
    abilityScoreChangeNote: 'For undead creatures, gains +6 Charisma instead of +6 Constitution.',
    immunities: ['disease (all varieties, including magical and curse-induced)'],
    features: [
      {
        scalingType: 'flat',
        name: 'Disease Cloud (Ex)',
        description:
          'Projects an invisible 30-foot aura. Creatures that breathe within this aura must make two Fortitude saving throws or contract bubonic plague and mindfire as inhaled diseases.',
      },
      {
        scalingType: 'flat',
        name: 'Disease (Ex)',
        description:
          'Natural attacks spread filth fever and leprosy via injury. Touch attacks spread contact diseases.',
      },
      {
        scalingType: 'flat',
        name: 'Carrier (Ex)',
        description: 'Maintains all its diseases despite magical healing or successful saving throws by the creature itself.',
      },
      {
        scalingType: 'flat',
        name: 'Diseased Flesh (Ex)',
        description: 'Creatures that ingest the plague bearer\'s flesh (or blood) contract blinding sickness.',
      },
      {
        scalingType: 'flat',
        name: 'Quick Incubation (Ex)',
        description: 'All diseases carried by the plague bearer manifest instantaneously rather than after an incubation period.',
      },
    ],
    sourceInfo: { type: 'third_party', publisher: 'Green Ronin Publishing', publication: 'Advanced Bestiary' },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },
];
